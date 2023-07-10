 ////////////////////////////////////////
// Arm Making Rigging Component
// misner Dec 2003

//modified May2005
//calculateRoll()
//applyRoll()
//prevent flipping with guide less than 90deg
//added bicep roll to shadow rigs


	/*

	inParent = the object to make the new hand under
	inGuideObjects = an XSI Collection of 3 guide objects, running down the arm: ex: ShoulderEnd, Elbow, Hand
	inPrefix = the prefix used to name new objects when making the new arm.  Example "L", "R", ect...

	inConstrainObj = an object to constrain the root of the arm too.

	inForearmDivisions = defines the number of forearm roll divisions.  0 = no roll.
	inBicepDivisions = defines the number of bicep roll divisions.  0 = no roll.



	inShadowType = the type of shadow rig to constrain to the arm
		   	0 > no shadow
			1 > SI|3D skeleton shadow rig
			2 > XSI  skeleton shadow rig						
			3 > Null shadow rig
			4 > Box shadow rig

	inShadowParent = parent of the shadow rig hiearchy.  If empty, no shadow rig will be generated.

	inHandRoot = Hand Root Object, required for ForeArmRoll Division. This object must be a chain element(root,bone,effector).  If empty, ForeArmRolldivision will not be applied,
		 but Bicep Roll will.

	inNegativeScaling = negative scaling on the chain.  Negative scaling is useful for having the left and right arm
	                    manipulating symmetrically.  Do do this just call one of the arms with negative scaling.

		0 = No negative Scaling
		1 = Negative scaling

	=======================================
	Returns an Arm object where:


	Arm.Root = the Root of the arm
	Arm.Eff = the Effector
	Arm.UpVParent = the parent of the UpVector
	Arm.Skel = a Skeleton collection of arm chain elements
	Arm.BicepRoll.Divisions = a collection of dividing objects from bicep roll
	Arm.ForeArmRoll.Divisions = a collection of dividing objects from forearm roll
	Arm.UpV = the up vector control icon
	Arm.Hidden = is a collection of Hidden object
	Arm.Envelope = is a collection of objects to be Enveloped
	Arm.Shadows = a collection of box shadows

	*/

// Add a push method to the JScript Array Object
// (Array.Push was added in Jscript 5.5 but we cannot rely on this)
var push = function(item){return this[this.length++] = item;}
Array.prototype.push = push;


/*--------------------------------
 Make Arm
--------------------------------*/
function makeArm(inParent, inGuideObjects, inPrefix, inConstrainObj, inForearmDivisions, inBicepDivisions, inShadowType, inShadowParent, inHandRoot, inNegativeScaling){

	var arm;

	//check for required arguments
	if(!inParent(0)) { logmessage("makeArm: argument 0 is invalid"); return arm; }
	//assumption: guide collection has at 3 objects
	if(inGuideObjects.count != 3)	{ logmessage("makeArm: Guide collection needs 3 objects. Collection has " + inGuideObjects.count + " objects"); return arm;}

	arm = new Object();

	//note: because arghandlers are used all the input objects are collections.
	//Get the first object from collection.

	arm.parent 		= inParent(0);			//object
	arm.guides 		= inGuideObjects;		//collection, 3 objects
	arm.prefix 		= inPrefix;			//string
	arm.constrainObj 	= inConstrainObj(0);		//object
	arm.NegativeScaling 	= inNegativeScaling;		//int
	arm.ForearmDivisions 	= inForearmDivisions;		//int
	arm.BicepDivisions 	= inBicepDivisions;		//int
	arm.ShadowType 		= inShadowType;			//int
	arm.ShadowParent 	= inShadowParent(0);		//object
	arm.HandRoot 		= inHandRoot(0);		//object, must be a chain element.
	arm.Hidden 		= new ActiveXObject("XSI.Collection");
	arm.Envelope 		= new ActiveXObject("XSI.Collection");
    arm.CharacterSetName = "Upper." + inPrefix + "_Arm";
    arm.ShadowCharacterSetName = "ShadowUpper.Shadow" + inPrefix + "_Arm";

	arm = findPositions(arm);
	arm = getScale(arm);
	arm = drawArm(arm);
	arm = makeUpVectors(arm);

   	arm = applyRoll(arm);

	if(arm.ShadowType >= 1 && arm.ShadowType <= 3){
        arm.ShadowEnvelope = inShadowParent(0).model.Groups.Item("Envelope_group")
		arm = makeSkelShadows(arm);
	}
	if(arm.ShadowType > 3){
        arm.ShadowEnvelope = inShadowParent(0).model.Groups.Item("Envelope_group")
		arm = makeBoxShadows(arm);
	}

    // only do this for skeletal arms (XSI Skeleton, Box with IK Arms, or 
    // Box with IK Arms + Legs)
    if (   (arm.ShadowType == 2)
        || (arm.ShadowType == 5)
        || (arm.ShadowType == 7) )
    {
       	arm = applyShadowRoll(arm);
    }
	
	arm = hideSetup(arm);

	arm.Root = arm.Skel(0);
	arm.Eff  = arm.Skel(3);

	return arm;

}
/*--------------------------------
 Find Positions
--------------------------------*/
function findPositions(inArm){

	inArm.pos = new Array();
	inArm.objs = new Array();

	for(var t=0;t<3;t++){
		inArm.objs[t] = inArm.guides(t);
		inArm.pos[t] = XSIMath.CreateVector3();
		inArm.objs[t].Kinematics.Global.Transform.GetTranslation(inArm.pos[t]);
	}

	return inArm;

}
/*--------------------------------
 Get Scale
--------------------------------*/
function getScale(inArm){

	// get the scale from the top of the arm to the hand.

	var checkDist = XSIMath.CreateVector3();
	checkDist.sub(inArm.pos[0] , inArm.pos[2]);

	inArm.scale = checkDist.Length();

	//inArm.pushBack is the upvector position relative to the arm root
	inArm.pushBack = XSIMath.CreateVector3();
	inArm.pushBack.Set(0,0,-1*inArm.scale);

	return inArm;

}
/*--------------------------------
 Draw Arm
--------------------------------*/
function drawArm(inArm){

	inArm.normalPlane = XSIMath.CreateVector3();
	inArm.normalPlane.Set(0,1,0);


	// if you have negative scaling draw the arm on the opposite side of the x plane.
	if(inArm.NegativeScaling == 1) {

		var mirrorPos = new Array();

		var mirrorPlane = XSIMath.CreateVector3();
		mirrorPlane.set(-1,1,1);
		for(var i = 0; i<3; i++){

			mirrorPos[i] = XSIMath.CreateVector3();

			mirrorPos[i].x = inArm.pos[i].x * mirrorPlane.x;
			mirrorPos[i].y = inArm.pos[i].y * mirrorPlane.y;
			mirrorPos[i].z = inArm.pos[i].z * mirrorPlane.z	;
		}

		var tempRoot = inArm.parent.Add2DChain(mirrorPos[0], mirrorPos[1], inArm.normalPlane, 3)
		AlignFirstBone(tempRoot);
		tempRoot.AddBone(mirrorPos[2], 2, inArm.prefix + "Forearm");

		inArm.Root = DuplicateSymmetry("B:" + tempRoot, true, false, 1, 0, 0, 0, false)(0);
		DeleteObj("B:" + tempRoot);
		inArm.parent.AddChild(inArm.Root);

	}
	else {

		inArm.Root = inArm.parent.Add2DChain(inArm.pos[0], inArm.pos[1], inArm.normalPlane, 3)
		AlignFirstBone(inArm.Root);
		inArm.Root.AddBone(inArm.pos[2], 2, inArm.prefix + "Forearm");
	}

	inArm.Skel = GetSkeleton(inArm.Root);

	var bicepTrans = inArm.Skel(1).Kinematics.Global.Transform;

	var RootTrans = inArm.Skel(0).Kinematics.Global.Transform;

	var rot = XSIMath.CreateVector3();

	setChainScale(inArm.Skel, inArm.scale * .15);


	inArm.Skel(3).primary_icon.value = 0;
	inArm.Skel(3).shadow_icon.value = 4;
	inArm.Skel(3).shadow_scaleX.value = inArm.scale * .18;
	inArm.Skel(3).radius.value = inArm.scale * .18;
	inArm.Skel(3).shadow_scaleZ.value = inArm.scale * .18;

	inArm.Skel(3).AddProperty("Display Property")
	inArm.Skel(3).properties("display").wirecol.value = 489;

	inArm.Hidden.Add(inArm.Skel(0));

	inArm.Envelope.Add(inArm.Skel(1));
	inArm.Envelope.Add(inArm.Skel(2));

	addMarkingSet(inArm.Skel(1), null, 1, null, inArm.CharacterSetName);
	addMarkingSet(inArm.Skel(2), null, 1, null, inArm.CharacterSetName);

	inArm.Skel(0).name = inArm.prefix + "Root";
	inArm.Skel(1).name = inArm.prefix + "Bicep";
	inArm.Skel(2).name = inArm.prefix + "Forearm";
	inArm.Skel(3).name = inArm.prefix + "ArmEff";
	
	addMarkingSet(inArm.Skel(3), 1, null, null, "None");

	if(inArm.constrainObj){
		inArm.Root.Kinematics.AddConstraint("Position", inArm.constrainObj, false);
	}

	return inArm;
}

/*--------------------------------
 Make Up Vectors
-------------------------------*/
function makeUpVectors(inArm){

	var s = inArm.scale;

	// first get the plane of the arm

	inArm.elbow = XSIMath.CreateVector3();
	inArm.normal = XSIMath.CreateVector3();
	inArm.vecBack = XSIMath.CreateVector3();

	inArm.elbow.sub(inArm.pos[1], inArm.pos[0]);
	inArm.normal.sub(inArm.pos[2], inArm.pos[0]);

	inArm = calculateRoll(inArm);

	inArm.UpVpos = XSIMath.CreateVector3();
	inArm.UpVpos.Add(inArm.pos[0], inArm.pushBack);

	inArm.UpVParent = inArm.Skel(0);
	inArm.UpV = curvePyramid(inArm.UpVParent, inArm.UpVpos, s *.1, s *.1, 253, inArm.prefix + "ArmUpV");

	SetNeutralPose(inArm.UpV, siSRT,false);

	addMarkingSet(inArm.UpV, 1, null, null, "None");

	inArm.Skel(1).Properties("Kinematic Joint").Parameters("roll").value = inArm.roll;
	inArm.Skel(1).joint.UpVectorReference = inArm.UpV ;	

	return inArm;
}
/*------------------------------
 Calculate Roll
------------------------------*/
function calculateRoll(inArm){

	// project the elbow and vecBack onto the plane of the normal and get the angle between them

	var proj_elbow = ProjectOnPlane(inArm.elbow, inArm.normal);
	var proj_UpV = ProjectOnPlane(inArm.pushBack, inArm.normal);

	// you need to figure out which side of the up vector you are on.
	// if the elbow is closer to the inverse, we need to rotate toward that vector.
	var negUpV = XSIMath.CreateVector3();
	negUpV.Negate(proj_UpV);

	t1 = XSIMath.CreateVector3();
	t2 = XSIMath.CreateVector3();

	t1.Sub(proj_UpV, proj_elbow);
	t2.Sub(negUpV, proj_elbow);

	if (t2.Length() < t1.Length() ){
		proj_UpV = negUpV;
	}

	inArm.roll = proj_elbow.Angle(proj_UpV);

	var cp = XSIMath.CreateVector3();
	cp.Cross(proj_elbow, proj_UpV)

	// now you have to figure out which side of the rotation you are on, whether
	// you have a positive or negative rotation to meet your goal

	// Find which is closest to the cross product, the normal or its inverse
	var cpNeg = XSIMath.CreateVector3();
	cpNeg.Negate(cp);
	t1.Sub(cp,inArm.normal);
	t2.Sub(cpNeg, inArm.normal);

	if (t2.Length() > t1.Length() ){
		inArm.roll = inArm.roll * -1;
	}

	if(inArm.NegativeScaling){
		inArm.roll = inArm.roll * -1;		
	}
	
	var vBiceps = XSIMath.CreateVector3();
	var vForeArm = XSIMath.CreateVector3();
        
	vBiceps.sub(inArm.pos[0],inArm.pos[1])
	vForeArm.sub(inArm.pos[2],inArm.pos[1])
	var elbowAng = vBiceps.Angle (vForeArm) ;
        
	//this fixes arm flip when angle at elbow is smaller than 90 degrees.
	if( elbowAng <1.5707963267949){
		inArm.roll+=3.14159265358979
	}

	inArm.roll = XSIMath.RadiansToDegrees(inArm.roll);

	return inArm;
}

/*------------------------------
 Project On Plane
------------------------------*/
function ProjectOnPlane(inPoint, inPlaneNormal)
{

	var vProjection = XSIMath.CreateVector3();
	var pProjection = XSIMath.CreateVector3();

	dot = inPoint.Dot(inPlaneNormal);
	var ScaleChange = (dot/Math.pow(inPlaneNormal.Length() , 2));
	vProjection.Scale(ScaleChange, inPlaneNormal);
	pProjection.Sub(inPoint, vProjection);


	return pProjection;

}
/*--------------------------------
 Temp Neutral Pose
--------------------------------*/
function tempNeutralPose(inObj, inScale){

	var tt = inObj.Kinematics.Global.Transform;
	var returnNull = inObj.parent.AddNull(inObj.name + "Parent");

	returnNull.Kinematics.Global.Transform = tt;
	returnNull.AddChild(inObj);

	returnNull.size = inScale *.1;

	return returnNull;

}
/*--------------------------------
 Set Chain Scale
-------------------------------*/
function setChainScale(inSkel, inScale){

    for(var f = 0; f < inSkel.count; f++){

	    inSkel(f).shadow_icon.value  = 1;
	    inSkel(f).primary_icon.value  = 0;

	    if(f==0 || f==inSkel.count-1){
		    inSkel(f).shadow_scaleX.value  = inScale * .5;
		    inSkel(f).radius.value  = inScale * .5;
		    inSkel(f).shadow_scaleZ.value  = inScale * .5;
	    }
	    else{
		    inSkel(f).radius.value  = inScale;
		    inSkel(f).shadow_scaleZ.value  = inScale;
	    }
    }
}

/*--------------------------------
 Apply Roll
--------------------------------*/
function applyRoll(inArm){

	// apply bicep roll
	if(inArm.BicepDivisions > 0){

		inArm.BicepRoll = makeBicepRoll(inArm.Skel(1), inArm.prefix +"Bicep", inArm.BicepDivisions)

		inArm.Envelope.Remove(inArm.Skel(1));

		// scale and add to the Envelope group
		for(var b=0;b<inArm.BicepRoll.Divisions.count;b++){
			inArm.BicepRoll.Divisions(b).ActivePrimitive.parameters("size").value = inArm.scale * .05;
			inArm.Envelope.Add(inArm.BicepRoll.Divisions(b));
		}
	}

	if(!inArm.HandRoot){return inArm}

	var hand = GetSkeleton(inArm.HandRoot);

	// apply forearm roll
	if(inArm.ForearmDivisions > 0){

		// here you need to check the angle with the arm and the mirror plane to figure out if the roll seam goes forward or back

		var mirrorPlane = XSIMath.CreateVector3();
		mirrorPlane.set(1,0,0);

		var armVec = XSIMath.CreateVector3();
		armVec.sub(inArm.pos[2], inArm.pos[0]);
		var rAngle = armVec.angle(mirrorPlane);
		rAngle = XSIMath.RadiansToDegrees(rAngle);

		if(rAngle > 90){
			inArm.ForeArmRoll = makeForearmRoll(inArm.Skel(1), inArm.Skel(2),inArm.Skel(3),hand(2),hand(1), inArm.prefix, inArm.ForearmDivisions, 90);
		}
		else{
			inArm.ForeArmRoll = makeForearmRoll(inArm.Skel(1), inArm.Skel(2),inArm.Skel(3),hand(2),hand(1), inArm.prefix, inArm.ForearmDivisions, -90);
		}

		inArm.Envelope.Remove(inArm.Skel(2));

		// scale and add to the Envelope group
		for(var b=0;b<inArm.ForeArmRoll.Divisions.count;b++){
			inArm.ForeArmRoll.Divisions(b).ActivePrimitive.parameters("size").value = inArm.scale * .05;
			inArm.Envelope.Add(inArm.ForeArmRoll.Divisions(b));
		}
	}

	return inArm;
}

/*--------------------------------
 Apply Shadow Roll
--------------------------------*/
function applyShadowRoll(inArm){

	if(inArm.BicepDivisions > 0) {

	    if (inArm.ShadowType){
		    var shadowDivisions = XSIFactory.CreateActiveXObject("XSI.Collection"); 
		    for(var ii=0; ii<inArm.BicepRoll.Divisions.count;ii++){  
			    var divider = inArm.Shadows(1).parent.addnull(inArm.BicepRoll.Divisions(ii).name);
			    divider.AddProperty("Display Property");
			    divider.properties("display").wirecol.value = 805;
			    divider.Kinematics.addConstraint("Pose",inArm.BicepRoll.Divisions(ii),false);
			    divider.ActivePrimitive.parameters("size").value = inArm.scale * .05;
			    divider.addProperty( "UserDataBlob", false, "bone" ) ; 

			    shadowDivisions.add(divider)
		    }

		    if (inArm.ShadowEnvelope){
			    inArm.ShadowEnvelope.AddMember(shadowDivisions);
			    RemoveFromGroup(inArm.ShadowEnvelope, inArm.Shadows(1));
		    }
	    }
    }
    
    if(!inArm.HandRoot){return inArm}

    var hand = GetSkeleton(inArm.HandRoot);

	// apply forearm roll
	if(inArm.ForearmDivisions > 0){
		if (inArm.ShadowType){

		    // here you need to check the angle with the arm and the mirror plane to figure out if the roll seam goes forward or back
		    var mirrorPlane = XSIMath.CreateVector3();
		    mirrorPlane.set(1,0,0);

		    var armVec = XSIMath.CreateVector3();
		    armVec.sub(inArm.pos[2], inArm.pos[0]);
		    var rAngle = armVec.angle(mirrorPlane);
		    rAngle = XSIMath.RadiansToDegrees(rAngle);
		
		    //shadow forearm
			if(rAngle > 90){
				inArm.ShadowForeArmRoll = makeForearmRoll(inArm.Skel(1), inArm.Shadows(2),inArm.Skel(3),hand(2),hand(1), inArm.prefix, inArm.ForearmDivisions, 90);
			}
			else{
				inArm.ShadowForeArmRoll = makeForearmRoll(inArm.Skel(1), inArm.Shadows(2),inArm.Skel(3),hand(2),hand(1), inArm.prefix, inArm.ForearmDivisions, -90);
			}

			for(var b=0;b<inArm.ShadowForeArmRoll.Divisions.count;b++){
				inArm.ShadowForeArmRoll.Divisions(b).ActivePrimitive.parameters("size").value = inArm.scale * .05;
				inArm.ShadowForeArmRoll.Divisions(b).addProperty( "UserDataBlob", false, "bone" ) ;
			}
			
			if (inArm.ShadowEnvelope){
				inArm.ShadowEnvelope.AddMember(inArm.ShadowForeArmRoll.Divisions);
				RemoveFromGroup(inArm.ShadowEnvelope, inArm.Shadows(2));
			}
		}
    }

	return inArm;
}

/*--------------------------------
 Make Skel Shadows
-------------------------------*/
function makeSkelShadows(inArm){
    
	inArm.ShadowEnds = new ActiveXObject("XSI.Collection");
	inArm.Shadows = new ActiveXObject("XSI.Collection");

	inArm.ArmShadow = makeShadowChain(inArm.Skel, inArm.ShadowParent, inArm.ShadowType==1 /*SI3D*/, inArm.scale* .15, inArm.ShadowType==3 /*NULL*/, inArm.ShadowCharacterSetName);

	inArm.ShadowStart = inArm.ArmShadow.ShadowStart;
	inArm.Shadows.AddItems(inArm.ArmShadow.Shadows);

	inArm.ShadowEnds.Add(inArm.ArmShadow.ShadowEnds(0));

	return inArm;

}
/*--------------------------------
 Make Box Shadows
--------------------------------*/
function makeBoxShadows(inArm){

	var boxScale = inArm.scale * .13;

	inArm.Shadows = new ActiveXObject("XSI.Collection");
	inArm.ShadowEnds = new ActiveXObject("XSI.Collection");

	var taperPerc = .65;

	if(inArm.BicepDivisions > 0) {
   
		var taper = 1 - ((1-taperPerc)/(1+inArm.BicepDivisions))

		for(var b=1;b<inArm.BicepRoll.Divisions.count;b++){
			var boxShadow = makeShadowBox(inArm.ShadowParent, inArm.prefix + "ForeArm", inArm.BicepRoll.Divisions(b-1), inArm.BicepRoll.Divisions(b), boxScale, 90, 90, taper, null)
			boxScale = boxScale * taper;
			inArm.ShadowParent = boxShadow;
			inArm.Shadows.Add(boxShadow);

			if(b == 1){
				inArm.ShadowStart = boxShadow;
			}
		}

		var boxShadow = makeShadowBox(inArm.ShadowParent, inArm.prefix + "ForeArm", inArm.BicepRoll.Divisions(inArm.BicepRoll.Divisions.count-1), inArm.Skel(2), boxScale, 90, 90, taper, null)
		boxScale = boxScale * taper;
		inArm.ShadowParent = boxShadow;
		inArm.Shadows.Add(boxShadow);
	}
	else {
		var bicepShadow = makeShadowBox(inArm.ShadowParent, inArm.prefix + "Bicep", inArm.Skel(1), inArm.Skel(2), boxScale, 90, 90,taperPerc, true)
		inArm.Shadows.Add(bicepShadow);
		inArm.ShadowParent = bicepShadow;
		boxScale = boxScale * taperPerc;

		inArm.ShadowStart = bicepShadow;
	}


	if(inArm.ForearmDivisions > 0){

		var taper = 1 - ((1-taperPerc)/inArm.ForearmDivisions)

		for(var b=1;b<inArm.ForeArmRoll.Divisions.count;b++){
			var forearmShadow = makeShadowBox(inArm.ShadowParent, inArm.prefix + "ForeArm", inArm.ForeArmRoll.Divisions(b-1), inArm.ForeArmRoll.Divisions(b), boxScale, 90, 90, taper, null)
			boxScale = boxScale * taper;
			inArm.ShadowParent = forearmShadow;
			inArm.Shadows.Add(forearmShadow);
		}

		var boxShadow = makeShadowBox(inArm.ShadowParent, inArm.prefix + "ForeArm", inArm.ForeArmRoll.Divisions(inArm.ForearmDivisions-1), inArm.Skel(3), boxScale, 90, 90, taper, null)
		inArm.Shadows.Add(boxShadow);
		inArm.ShadowEnds.Add(boxShadow);

	}
	else{
		var forearmShadow = makeShadowBox(inArm.ShadowParent, inArm.prefix + "ForeArm", inArm.Skel(2), inArm.Skel(3), boxScale, 90, 90, taperPerc,true)
		inArm.Shadows.Add(forearmShadow);
		inArm.ShadowEnds.Add(forearmShadow);
	}

	for(var s=0;s<inArm.Shadows.count;s++){
		addMarkingSet(inArm.Shadows(s), 0, 1, null, inArm.ShadowCharacterSetName);
	}

	return inArm;
}

/*--------------------------------
 Make Shadow Box
--------------------------------*/
function makeShadowBox(inParent, inName, inStartObj, inEndObj, inScale, inTopRot, inBottomRot, inTaper, inSplit){

	var shadowBox = inParent.AddGeometry("Cube", "MeshSurface", inName);
	var trans = inStartObj.Kinematics.Global.Transform;

	shadowBox.Kinematics.Global.Transform = trans;

	var shallowScale = inScale * .6;

	shadowBox.Kinematics.AddConstraint("Pose", inStartObj);

	var boxOp  = ApplyOp ("Connector_Box", shadowBox+","+ inStartObj +","+ inEndObj)(0);

	SetValue(boxOp + ".topOffset_z", inTopRot, null);
	SetValue(boxOp + ".bottomOffset_z", inBottomRot, null);
	SetValue(boxOp + ".topWidth", inScale, null);
	SetValue(boxOp + ".topDepth", shallowScale, null);
	SetValue(boxOp + ".bottomWidth", inScale * inTaper, null);
	SetValue(boxOp + ".bottomDepth", shallowScale * inTaper, null);

	if(inSplit){
		SetValue(boxOp + ".split", true, null);
	}

	var matcolor = new Array(0.741, 0.653, 0.603, 0.845, 0.496, 0.300);

	var mat = shadowBox.addmaterial("Phong");

	mat.Shaders(0).diffuse.red.value = matcolor[0];
	mat.Shaders(0).diffuse.green.value = matcolor[1];
	mat.Shaders(0).diffuse.blue.value = matcolor[2];
	mat.Shaders(0).ambient.red.value = matcolor[3];
	mat.Shaders(0).ambient.green.value = matcolor[4];
	mat.Shaders(0).ambient.blue.value = matcolor[5];

	shadowBox.AddProperty("Display Property")
	shadowBox.properties("display").wirecol.value = 479;

	return shadowBox;

}
/*--------------------------------
 Curve Pyramid
--------------------------------*/
function curvePyramid(inParent, inPos, inHeight, inWidth, inColor, inName){

	var height = inHeight/2;
	var width = inWidth/2;

	// p is positive, N is negative

	var top = XSIMath.CreateVector3();
	var pp = XSIMath.CreateVector3();
	var pN = XSIMath.CreateVector3();
	var Np = XSIMath.CreateVector3();
	var NN = XSIMath.CreateVector3();

	top.set(0,height,0);
	pp.set(width,height*-1,width);
	pN.set(width,height*-1,width*-1);
	Np.set(width*-1,height*-1,width);
	NN.set(width*-1,height*-1,width*-1);

	var points = new Array();

	points = vectorPush(points, pp);
	points = vectorPush(points, top);
	points = vectorPush(points, pN);
	points = vectorPush(points, pp);
	points = vectorPush(points, Np);
	points = vectorPush(points, top);
	points = vectorPush(points, NN);
	points = vectorPush(points, Np);
	points = vectorPush(points, NN);
	points = vectorPush(points, pN);

	var curve = inParent.AddNurbsCurve(points,null,0, 1, siNonUniformParameterization, siSINurbs, inName);

	curve.AddProperty("Display Property")
	curve.properties("display").wirecol.value = inColor;

	var trans = XSIMath.CreateTransform();
	trans.SetTranslation(inPos);
	curve.Kinematics.Global.Transform = trans;

	return curve;

}
/*--------------------------------
 Draw Line
--------------------------------*/
function DrawLine(inStart, inEnd, inName){
	var s = inStart;
	var e = inEnd;
	var curvePoints = new Array(s.x,s.y,s.z,1,e.x,e.y,e.z,1);
	var knots = new Array(0,1);
	var line = ActiveSceneRoot.AddNurbsCurve(curvePoints, knots, 0, 1, 1, siSINurbs);

	line.name = inName;
}

/*--------------------------------
 Vector Push
--------------------------------*/
function vectorPush(inArray, inVector){

	inArray.push(inVector.x);
	inArray.push(inVector.y);
	inArray.push(inVector.z);
	inArray.push(1);

	return inArray;
}
/*--------------------------------
 Add Marking Set
--------------------------------*/
function addMarkingSet(inObj, inPos, inRot, inSingle, inCharacterSetName){

	var pStrings = new Array("posx","posy","posz");
	var rStrings = new Array("rotx","roty","rotz");
	var sStrings = new Array("sclx","scly","sclz");

	var mset = inObj.AddProperty("Custom_parameter_list",0,"MarkingSet");

	for (var mark = 0;mark<pStrings.length;mark++) {
	    if (inPos) {
	        SetKeyableAttributes( inObj, ".kine.local." + pStrings[mark], siKeyableAttributeKeyable );
		    AddProxyParam ( mset, inObj + ".kine.local." + pStrings[mark], null);
		}
		else {
	        SetKeyableAttributes( inObj, ".kine.local." + pStrings[mark], siKeyableAttributeClear );
        }		
	}

	for (var mark = 0;mark<rStrings.length;mark++) {
	    if (inRot) {
	        SetKeyableAttributes( inObj, ".kine.local." + rStrings[mark], siKeyableAttributeKeyable );
		    AddProxyParam ( mset, inObj + ".kine.local." + rStrings[mark], null);
		}
		else {
	        SetKeyableAttributes( inObj, ".kine.local." + rStrings[mark], siKeyableAttributeClear );
        }		
	}

	if (inSingle) {
		AddProxyParam ( mset, inObj + ".kine.local." + inSingle, null);
	}

    // turn off scaling as a keyable parameter for all
	for (var mark = 0;(mark<sStrings.length);mark++) {
	    SetKeyableAttributes( inObj, ".kine.local." + sStrings[mark], siKeyableAttributeClear );
	}

	// add this in so that we can specify/store the character key set that this marking set will
	// be converted to
    mset.AddParameter2("CharacterKeySet",siString,inCharacterSetName,0,0,0,0,0,0,"CharacterKeySet","CharacterKeySet");
}

/*--------------------------------
 Hide Setup
--------------------------------*/
function hideSetup(inArm){

	if(inArm.parent.model.Groups.Item("Hidden")){

		inArm.HiddenGroup = inArm.parent.model.Groups.Item("Hidden");
		inArm.HiddenGroup.AddMember (inArm.Hidden);

	}
	else{
		for(var m = 0;m < inArm.Hidden.count;m++){
			inArm.Hidden(m).properties("visibility").viewvis.value = false;
		}
	}

	if(inArm.parent.model.Groups.Item("Envelope_group")){

		inArm.envGroup = inArm.parent.model.Groups.Item("Envelope_group");
		inArm.envGroup.AddMember(inArm.Envelope);

	}

	return inArm;
}

/*--------------------------------
 AlignFirstBone
 Try to align the first bone Y axis with the root Y axis

  (103441) When the chain is drawn, the Y axis of the bone may be more than a 90 degrees
 rotation (about the X axis) away from the root Y axis.
-------------------------------*/
function AlignFirstBone(inRoot){

	//get the Y axis of the first bone
	//get the Y axis of the root.

	//we want the angle between these to be less than 90 degrees (i.e. try to align the Y axis
	//of the first bone with the root). This is to maintain same behaviour after fix #103441 which
	//removed this alignment code from chain creation.
	var BoneYAxis = XSIMath.CreateVector3();
	var RootYAxis = XSIMath.CreateVector3();
	var RotMat = XSIMath.CreateMatrix3();

	inRoot.Kinematics.Global.Transform.GetRotationMatrix3(RotMat);
	RootYAxis.Set(0,1,0);
	RootYAxis.MulByMatrix3InPlace(RotMat);

	Xfo = inRoot.Bones(0).Kinematics.Global.Transform;
	Xfo.GetRotationMatrix3(RotMat);
	BoneYAxis.Set(0,1,0);
	BoneYAxis.MulByMatrix3InPlace(RotMat);

	//if the angle between them is greater than 90, turn the bone 180 degrees
	if( RootYAxis.dot(BoneYAxis) < -1e-6)
	{
		var rot = XSIMath.CreateRotation();
		rot.SetFromXYZAnglesValues(XSIMath.DegreesToRadians(180),0,0);
		Xfo.AddLocalRotation(rot);
		inRoot.Bones(0).Kinematics.Global.Transform = Xfo;
	}
}
