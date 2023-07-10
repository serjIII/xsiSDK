 ////////////////////////////////////////
// Make Leg Rigging Component
// misner Dec 2003

//modified May 2005 Javier
//added Marking Sets to Leg Bones

	/*

	--------- PARAMETERS -------------------

	inModel = the model of the hand guide
	inParent = the object to make the new leg under
	inPrefix = the prefix used to name new objects when making the new leg.  Example "L", "R", ect...

	inGuideObjects = an XSI Collection of 3 items to search for when making the Leg.
			they need to be in the order: Top of Leg, Leg Joint, Bottom of Leg.


	inUpVBehind = determines whether the upvector is places behind the leg (-z globally) or
	              in front (+z globally).

	             	0 > +z up vector
	             	1 > -z up vector

	inThighDivisions = defines the number of divisions on the upper leg.  0 = no roll.

	inShadowType = the type of shadow rig to constrain to the arm
		   	0 > no shadow
			1 > Skeleton shadow rig
			2 > Null shadow rig
			3 > Box shadow rig

	inShadowParent = parent of the shadow rig hiearchy.  If empty, no shadow rig will be generated.


	--------- RETURNS -------------------
	Returns a Leg object where:


	Leg.Root = the root of the leg
	Leg.Eff = the effector
	Leg.Skel = a skeleton collection of arm chain elements
	Leg.ThighRoll.Divisions = a collection of dividing objects from bicep roll operator, applied on the thighbone

	Leg.Hidden = is a collection of Hidden object
	Leg.Envelope = is a collection of objects to be Enveloped
	Leg.Shadows = a collection of box shadows

	*/


// Add a push method to the JScript Array Object
// (Array.Push was added in Jscript 5.5 but we cannot rely on this)
var push = function(item){return this[this.length++] = item;}
Array.prototype.push = push;

/*--------------------------------
 Make Leg
--------------------------------*/
function makeLeg(inModel, inParent, inPrefix, inGuideObjects, inUpVBehind, inThighDivisions, inShadowType, inShadowParent){

	//////////////////////////////////
	//Arugment validation
	//////////////////////////////////

	var l_aArgsToConvert = Array(0,1,7);
	var a;
	for (i = 0; i < l_aArgsToConvert.length; i++)
	{
		a = l_aArgsToConvert[i];
		if(arguments[a])
			{ arguments[a] = arguments[a](0);}	//extract first object from coll.
	}

	//check required arguments
	if(!arguments[1]){ logmessage("makeLeg: argument " + 1 + " is invalid", siError); return;}

	//there must be 3 guide objects
	if(inGuideObjects.count != 3)	{ logmessage("makeLeg: Guide collection needs 3 objects. Collection has " + inGuideObjects.count + " objects"); return;}

	//////////////////////////////////

	var leg = new Object();

	leg.model = inModel;
	leg.parent = inParent;

	leg.prefix = inPrefix;
	leg.upVBehind = inUpVBehind;

    leg.CharacterSetName = "Lower." + leg.prefix + "_Leg";
    leg.ShadowCharacterSetName = "ShadowLower.Shadow" + inPrefix + "_Leg";

	leg.guides = inGuideObjects;

	leg.ThighDivisions = inThighDivisions;

	leg.ShadowType = inShadowType;
	leg.ShadowParent = inShadowParent;

	leg.Hidden = new ActiveXObject("XSI.Collection");
	leg.Envelope = new ActiveXObject("XSI.Collection");

	leg = getPositions(leg);
	if(!leg){return}


	leg = getScale(leg);
	leg = drawleg(leg);

	leg = makeUpVectors(leg);

    if(leg.ThighDivisions > 0){
		leg = applyRoll(leg);
	}
	
	if(leg.ShadowType >= 1 && leg.ShadowType <= 3){
		leg = makeSkelShadows(leg);
	}
	if(leg.ShadowType > 3){
		leg = makeBoxShadows(leg);
	}

    if(leg.ThighDivisions > 0){
		leg = applyShadowRoll(leg);
	}
	leg = hideSetup(leg);

	leg.Eff = leg.Skel(3);

	return leg;
	
}
/*--------------------------------
 Get Positions
--------------------------------*/
function getPositions(inLeg){

	inLeg.pos = new Array();

	for(var t=0;t<inLeg.guides.count;t++){
		inLeg.pos[t] = XSIMath.CreateVector3();
		inLeg.guides(t).Kinematics.Global.Transform.GetTranslation(inLeg.pos[t]);
	}

	return inLeg;
}
/*--------------------------------
 Get Scale
--------------------------------*/
function getScale(inLeg){

	// get the scale from the top of the leg to the hand.

	var checkDist = XSIMath.CreateVector3();
	checkDist.sub(inLeg.pos[0] , inLeg.pos[2]);

	inLeg.scale = checkDist.Length();

	return inLeg;

}
/*--------------------------------
 Draw leg
--------------------------------*/
function drawleg(inLeg){

	var normalPlane = XSIMath.CreateVector3();
	normalPlane.Set(0,0,0);

	inLeg.Root = inLeg.parent.Add2DChain(inLeg.pos[0], inLeg.pos[1], normalPlane, 3)
	AlignFirstBone(inLeg.Root);	
	inLeg.Root.AddBone(inLeg.pos[2], 2, inLeg.prefix + "Foreleg");

	inLeg.Skel = GetSkeleton(inLeg.Root);

	inLeg.Skel(1).joint.pref_relRoot.value = true;
	inLeg.Skel(1).joint.prefx.value = 1;
	inLeg.Skel(1).joint.prefy.value = 0;
	inLeg.Skel(1).joint.prefz.value = 0;


	var bicepTrans = inLeg.Skel(1).Kinematics.Global.Transform;
	var RootTrans = inLeg.Skel(0).Kinematics.Global.Transform;

	var rot = XSIMath.CreateVector3();

	// the leg rotates primarily outward, then sideways, then spins.
	// so set the order to zyx

	//inLeg.Skel(1).rotorder.value = 5;
	//inLeg.Skel(2).rotorder.value = 5;

	setChainScale(inLeg.Skel, inLeg.scale * .15);

	inLeg.Skel(3).primary_icon.value = 0;
	inLeg.Skel(3).shadow_icon.value = 4;
	inLeg.Skel(3).shadow_scaleX.value = inLeg.scale * .18;
	inLeg.Skel(3).radius.value = inLeg.scale * .18;
	inLeg.Skel(3).shadow_scaleZ.value = inLeg.scale * .09;

	inLeg.Skel(3).AddProperty("Display Property")
	inLeg.Skel(3).properties("display").wirecol.value = 489;

	inLeg.Hidden.Add(inLeg.Skel(0));
	inLeg.Hidden.Add(inLeg.Skel(3));

	inLeg.Envelope.Add(inLeg.Skel(1));
	inLeg.Envelope.Add(inLeg.Skel(2));

	inLeg.Skel(0).name = inLeg.prefix + "Root";
	inLeg.Skel(1).name = inLeg.prefix + "Thigh";
	inLeg.Skel(2).name = inLeg.prefix + "Shin";
	inLeg.Skel(3).name = inLeg.prefix + "legEff";
        
	// To prevent flipping whne applying the upvector,
	//the knee joint should have positive Z prefangle
	inLeg.Skel(2).Properties("Kinematic Joint").Parameters("prefrotx").value = 0;
	inLeg.Skel(2).Properties("Kinematic Joint").Parameters("prefroty").value = 0;
	inLeg.Skel(2).Properties("Kinematic Joint").Parameters("prefrotz").value = 3;

	return inLeg;
}
/*--------------------------------
 Make Up Vectors
-------------------------------*/
function makeUpVectors(inLeg){

	var s = inLeg.scale;

	inLeg.pushBack = XSIMath.CreateVector3();

	if (inLeg.upVBehind == 0)	{ inLeg.pushBack.Set(0,0,s)}
	else				{ inLeg.pushBack.Set(0,0,-1*s)}

	// first get the plane of the leg

	inLeg.knee 		= XSIMath.CreateVector3();
	inLeg.normal 	= XSIMath.CreateVector3();
	inLeg.vecBack 	= XSIMath.CreateVector3();

	inLeg.knee.sub(inLeg.pos[1], inLeg.pos[0]);
	inLeg.normal.sub(inLeg.pos[2], inLeg.pos[0]);

	inLeg = calculateRoll(inLeg);

	inLeg.upVpos = XSIMath.CreateVector3();
	inLeg.upVpos.Add(inLeg.pos[0], inLeg.pushBack);

	inLeg.upV = curvePyramid(inLeg.Skel(0), inLeg.upVpos, s *.1, s *.1, 253, inLeg.prefix + "legUpV")
	SetNeutralPose(inLeg.upV, siSRT,false);

	addMarkingSet(inLeg.upV, 1, null, null, inLeg.CharacterSetName);

	inLeg.Skel(1).joint.UpVectorReference = inLeg.upV ;
	inLeg.Skel(1).Properties("Kinematic Joint").Parameters("roll").value = inLeg.roll;

	return inLeg;
}
/*------------------------------
 Calculate Roll
------------------------------*/
function calculateRoll(inLeg){
	
	// project the knee and vecBack onto the plane of the normal and get the angle between them
	inLeg.proj_knee = ProjectOnPlane(inLeg.knee, inLeg.normal);
	inLeg.proj_upv = ProjectOnPlane(inLeg.pushBack, inLeg.normal);
	
	inLeg.roll = inLeg.proj_knee.Angle(inLeg.proj_upv);
	
	var cp = XSIMath.CreateVector3();
	cp.Cross(inLeg.proj_knee, inLeg.proj_upv);
			
	// now you have to figure out which side of the rotation you are on, whether
	// you have a positive or negative rotation to meet your goal
			
	// Find which is closest to the cross product, the normal or its inverse
	var cpNeg = XSIMath.CreateVector3();	
	cpNeg.Negate(cp);	
	
	t1 = XSIMath.CreateVector3();
	t2 = XSIMath.CreateVector3();
	
	t1.Sub(cp,inLeg.normal);
	t2.Sub(cpNeg, inLeg.normal);
	
	if (t2.Length() > t1.Length() ){
		inLeg.roll = inLeg.roll * -1
	}
	
	inLeg.roll = XSIMath.RadiansToDegrees(inLeg.roll) + 180;	
	
	return inLeg;
	

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
 Apply Roll
--------------------------------*/
function applyRoll(inLeg){

	// apply bicep roll on thigh

	inLeg.ThighRoll = makeBicepRoll(inLeg.Skel(1), inLeg.prefix+"Thigh", inLeg.ThighDivisions)

	inLeg.Envelope.Remove(inLeg.Skel(1));

	// scale and add to the Envelope group
	for(var b=0;b<inLeg.ThighRoll.Divisions.count;b++){

		inLeg.ThighRoll.Divisions(b).ActivePrimitive.parameters("size").value = inLeg.scale * .05;
		inLeg.Envelope.Add(inLeg.ThighRoll.Divisions(b));
	}

	return inLeg;
}

/*--------------------------------
 Apply Shadow Roll
--------------------------------*/
function applyShadowRoll(inLeg){
        
	if (inLeg.ShadowType){
                
		var shadowDivisions = XSIFactory.CreateActiveXObject("XSI.Collection"); 
		for(var ii=0; ii<inLeg.ThighRoll.Divisions.count;ii++){  
			var divider = inLeg.Shadows(1).parent.addnull(inLeg.ThighRoll.Divisions(ii).name);
			divider.AddProperty("Display Property");
			divider.properties("display").wirecol.value = 805;
			divider.Kinematics.addConstraint("Pose",inLeg.ThighRoll.Divisions(ii),false);
			divider.ActivePrimitive.parameters("size").value = inLeg.scale * .05;
                                
			divider.addProperty( "UserDataBlob", false, "bone" ) ; 

                                
			shadowDivisions.Add(divider);
		}
		
		if (inLeg.ShadowEnvelope){
			inLeg.ShadowEnvelope.AddMember(shadowDivisions);
			RemoveFromGroup( inLeg.ShadowEnvelope, inLeg.Shadows(1));
		}      
	}

	return inLeg;
}

/*--------------------------------
 Make Skel Shadows
-------------------------------*/
function makeSkelShadows(inLeg){


	inLeg.ShadowEnds = new ActiveXObject("XSI.Collection");
	inLeg.Shadows = new ActiveXObject("XSI.Collection");
        
	inLeg.ShadowHidden = new ActiveXObject("XSI.Collection");
	inLeg.ShadowEnvelope = inLeg.ShadowParent.model.Groups.Item("Envelope_Group")

	inLeg.LegShadow = makeShadowChain(inLeg.Skel, inLeg.ShadowParent, inLeg.ShadowType==1 /*SI3D*/, inLeg.scale* .15, inLeg.ShadowType==3 /*NULL*/, inLeg.ShadowCharacterSetName);	

	inLeg.ShadowStart = inLeg.LegShadow.ShadowStart;
	inLeg.Shadows.AddItems(inLeg.LegShadow.Shadows);

	inLeg.ShadowEnds.Add(inLeg.LegShadow.ShadowEnds(0));

	return inLeg;

}
/*--------------------------------
 Make Box Shadows
--------------------------------*/
function makeBoxShadows(inLeg){

	var boxScale = inLeg.scale * .1;

	inLeg.Shadows = new ActiveXObject("XSI.Collection");
	inLeg.ShadowEnds = new ActiveXObject("XSI.Collection");

	var taperPerc = .65;

	if(inLeg.pos[0].x > 0){
		var startSpin = -45;
	}
	else{
		var startSpin = 45;
	}

	if(inLeg.ThighDivisions > 0){

		var taper = 1 - ((1-taperPerc)/(1+inLeg.ThighDivisions))

		for(var b=1;b<inLeg.ThighRoll.Divisions.count;b++){
			var boxShadow = makeShadowBox(inLeg.ShadowParent, inLeg.prefix + "Thigh", inLeg.ThighRoll.Divisions(b-1), inLeg.ThighRoll.Divisions(b), boxScale, 90, 90, taper, null, startSpin)
			boxScale = boxScale * taper;
			inLeg.ShadowParent = boxShadow;
			inLeg.Shadows.Add(boxShadow);
			startSpin = 0;

			if(b == 1){
				inLeg.ShadowStart = boxShadow;
			}
		}

		var boxShadow = makeShadowBox(inLeg.ShadowParent, inLeg.prefix + "Thigh", inLeg.ThighRoll.Divisions(inLeg.ThighRoll.Divisions.count-1), inLeg.Skel(2), boxScale, 90, 90, taper, null, 0)
		boxScale = boxScale * taper;
		inLeg.ShadowParent = boxShadow;
		inLeg.Shadows.Add(boxShadow);


	}
	else{
		var boxShadow = makeShadowBox(inLeg.ShadowParent, inLeg.prefix + "Thigh", inLeg.Skel(1), inLeg.Skel(2), boxScale, 90, 90,taperPerc, true, startSpin)
		inLeg.Shadows.Add(boxShadow);
		inLeg.ShadowParent = boxShadow;
		boxScale = boxScale * taperPerc;
		inLeg.ShadowStart = boxShadow;

	}


	var ForelegShadow = makeShadowBox(inLeg.ShadowParent, inLeg.prefix + "Foreleg", inLeg.Skel(2), inLeg.Skel(3), boxScale, 90, 90, taperPerc,true, 0)
	inLeg.Shadows.Add(ForelegShadow);


	inLeg.ShadowEnds.Add(ForelegShadow);


	for(var s=0;s<inLeg.Shadows.count;s++){
		addMarkingSet(inLeg.Shadows(s), 0, 1, null, inLeg.ShadowCharacterSetName);
	}
	
	return inLeg;

}
/*--------------------------------
 Make Shadow Box
--------------------------------*/
function makeShadowBox(inParent, inName, inStartObj, inEndObj, inScale, inTopRot, inBottomRot, inTaper, inSplit, inXSpin){


	var shadowBox = inParent.AddGeometry("Cube", "MeshSurface", inName);

	var trans = inStartObj.Kinematics.Global.Transform;

	shadowBox.Kinematics.Global.Transform = trans;

	var shallowScale = inScale * .8;


	shadowBox.Kinematics.AddConstraint("Pose", inStartObj);


	var boxOp = ApplyOp ("Connector_Box", shadowBox+","+ inStartObj +","+ inEndObj)(0);

	SetValue(boxOp + ".topOffset_z", inTopRot, null);
	SetValue(boxOp + ".bottomOffset_z", inBottomRot, null);


	SetValue(boxOp + ".topWidth", inScale, null);
	SetValue(boxOp + ".topDepth", shallowScale, null);
	SetValue(boxOp + ".bottomWidth", inScale * inTaper, null);
	SetValue(boxOp + ".bottomDepth", shallowScale * inTaper, null);
	SetValue(boxOp + ".topOffset_x", inXSpin, null);

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
function hideSetup(inLeg){


	if(inLeg.parent.model.Groups.Item("Hidden")){

		inLeg.HiddenGroup = inLeg.parent.model.Groups.Item("Hidden");
		inLeg.HiddenGroup.AddMember (inLeg.Hidden);

	}
	else{
		for(var m = 0;m < inLeg.Hidden.count;m++){
			inLeg.Hidden(m).properties("visibility").viewvis.value = false;
		}
	}

	if(inLeg.parent.model.Groups.Item("Envelope_group")){


		inLeg.envGroup = inLeg.parent.model.Groups.Item("Envelope_group");
		inLeg.envGroup.AddMember(inLeg.Envelope);

	}

	return inLeg;
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
