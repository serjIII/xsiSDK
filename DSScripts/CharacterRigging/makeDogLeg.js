////////////////////////////////////////
// Dog Leg Making Rigging Component
// misner Dec 2003


/*

	inModel > is the model that contains the the dog leg guide
	inParent > is the parent of the leg Root
	inFootParent > is the parent of the foot controls
	inGuideObjects > an XSI Collection of items to search for when making the dog Leg.
			 it must have a minimum of 9 items where

			1) The first 3 items run from the top of the dog leg down, ie: Femer, Tibea, Metarsal.
			2) The next3 define: Middle Pivot, Right Pivot, Left Pivot
			3) There are at least 3 object after the pivots runing from the start of the foot to the end of the toe.
			   This means the minimum foot is a 2 bone chain.

			extra items will be added onto the length of the foot.



	inRigShortPrefix > is the sort name (typically L or R) that will be used in the new rig
	inRigFullPrefix > is the long name (typically "Left" or "Right") that will be used in the new rig.

	inSliderPage > the slider page, if not found a new one will be created.


	inThighDivisions = defines the number of divisions on the upper leg.  0 = no roll.

	inShadowType = the type of shadow rig to constrain to the arm
		   	0 > no shadow
			1 > SI|3D skeleton shadow rig
			2 > XSI  skeleton shadow rig						
			3 > Null shadow rig
			4 > Box shadow rig

	inShadowParent = parent of the shadow rig hiearchy.  If empty, no shadow rig will be generated.



	returns >  a DogLeg object where:


	DogLeg.Root = the Root of the dog leg
	DogLeg.Foot.Root = the root of the new dog leg foot
	DogLeg.Knee = the knee guide null holding the DogLeg Operator
	DogLeg.Tarsus = the tarsus guide null holding the DogLeg Operator
	DogLeg.Foot.BaseGuide = the guide null that the end of the dog leg effector is constrained to on the foot
	DogLeg.UpVec = the Upvector
	DogLeg.Skel = a Skeleton collection of the chain elements in the new dog leg
	DogLeg.Shadows = a collection of box shadows
	DogLeg.Hidden = is a collection of Hidden object
	DogLeg.Envelope = is a collection of objects to be Enveloped


*/

//******************************************************************************
// String Constants (used to translate)
//******************************************************************************
var IDS_MAKE_DOGLEG_TITLE			= 1167;

// Add a push method to the JScript Array Object
// (Array.Push was added in Jscript 5.5 but we cannot rely on this)
var push = function(item){return this[this.length++] = item;}
Array.prototype.push = push;

/*--------------------------------
 Make Dog Leg
--------------------------------*/
function makeDogLeg(inModel, inParent, inFootParent, inGuideObjects, inRigShortPrefix, inRigFullPrefix, inSliderPage, inThighDivisions, inShadowType, inShadowParent){


	////////////////////////////
	// Validate arguments
	////////////////////////////

	//convert collections to objects
	var l_aArgsToConvert = Array(0,1,2,6,9);
	var a;
	for (i = 0; i < l_aArgsToConvert.length; i++)
	{
		a = l_aArgsToConvert[i];
		if(arguments[a]) { arguments[a] = arguments[a](0);}	//extract first object from coll.
	}

	//check for required arguments
	var l_aRequiredArgs = Array(0,1,2);
	var l_bExit;
	for (i = 0; i < l_aRequiredArgs.length; i++)
	{
		a = l_aRequiredArgs[i];
		if(!arguments[a]){ logmessage("makeDogLeg: required argument " + a + " is invalid", siError); l_bExit = true;	}
	}
	if(l_bExit) return;

	////////////////////////////

	var leg = new Object;

	leg.model = inModel;

	if (inRigShortPrefix == "" || inRigFullPrefix == ""){
		var ui = getUI();
		if(!ui){return}

		leg.prefix = ui.shortPrefix ;
		leg.fullPrefix = ui.longPrefix ;
	}
	else{
		leg.prefix = inRigShortPrefix;
		leg.fullPrefix = inRigFullPrefix;
	}
	
	leg.CharacterSetName = "Lower." + leg.prefix + "_Leg";
    leg.ShadowCharacterSetName = "ShadowLower.Shadow" + leg.prefix + "_Leg";

	leg.sliderPage = inSliderPage;

	if (inParent == null){
		inParent = ActiveSceneRoot;
	}

	leg.Hidden = new ActiveXObject("XSI.Collection");
	leg.Envelope = new ActiveXObject("XSI.Collection");

	leg.parent = inParent;
	leg.FootAttachPoint = inFootParent;

	leg.guides = inGuideObjects;

	leg.ThighDivisions = inThighDivisions;

	leg.ShadowParent = inShadowParent;

	if(inShadowType == 6 || inShadowType == 7){
		leg.ShadowType = 1;
		leg.FootShadowType = 4;
	}
	else{
		leg.ShadowType = inShadowType;
		leg.FootShadowType = inShadowType;
	}

	leg = getPositions(leg);
	if(!leg){return}

	leg = drawBones(leg);
	leg = makeControls(leg);

	leg = makeGuideNulls(leg);


	// need to make the shadows before the new feet so the shadow feet can be parented properly.

	if(leg.ShadowType >= 1 && leg.ShadowType <= 3){
		leg = makeSkelShadows(leg);
	}
	if(leg.ShadowType > 3){
		leg = makeBoxShadows(leg);
	}

	leg = attachFoot(leg);
	leg = ApplyOperators(leg);


	leg = ApplyUpVectors(leg);

	if(leg.ThighDivisions > 0){
		leg = applyRoll(leg);
	}



	leg = HideSetup(leg);

	leg = HookupSliders(leg);


	return leg;

}
/*--------------------------------
 Get Positions
--------------------------------*/
function getPositions(inLeg){

	inLeg.pos = new Array();
	inLeg.objs = new Array();


	// the only positions we require run from the leg down to the foot,
	// so we need collection items (0,1,2,6)


	for(var t=0;t< 3;t++){
		inLeg.pos[t] = XSIMath.CreateVector3();
		inLeg.guides(t).Kinematics.Global.Transform.GetTranslation(inLeg.pos[t]);
		inLeg.objs[t] = inLeg.guides(t);

	}

	inLeg.pos[3] = XSIMath.CreateVector3();


	inLeg.guides(6).Kinematics.Global.Transform.GetTranslation(inLeg.pos[3]);
	inLeg.objs[3] = inLeg.guides(6);


	// get the objects ready for the hand off to the foot.
	inLeg.footObjs = new ActiveXObject("XSI.Collection");

	// the foot array goes Middle Pivot, Right Pivot, Left Pivot > then runs down the toes so:
	for(var t=3;t< inLeg.guides.count;t++){

		inLeg.footObjs.add(inLeg.guides(t));
	}

	return inLeg;
}
/*--------------------------------
 Get UI
--------------------------------*/
function getUI(inData)
{

	var uiReturn = new Object();



	var SceneRoot =  Application.ActiveProject.ActiveScene.Root
	var mysliders = SceneRoot.AddProperty("Custom_parameter_list",0,"Dog_Leg_Maker");
	var shortPrefix = mysliders.AddParameter2("Start", siString , "BL", -1000 , 10000, null, null, 8, 1, "shortPrefix", "short prefix");
	var longPrefix = mysliders.AddParameter2("End", siString , "BLeft", -1000 , 10000, null, null, 8, 1, "longPrefix", "long prefix");

	try{
		inspectobj( mysliders, "", XSIUtils.Translate( IDS_MAKE_DOGLEG_TITLE, "XSISCRIPTS" ), siModal );
	}
	catch(e){
		deleteobj(mysliders);
		logmessage ( e.description, siError);
		return;
	}

	uiReturn.shortPrefix = shortPrefix.value
	uiReturn.longPrefix = longPrefix.value

	deleteobj(mysliders);

	return uiReturn;

}
/*--------------------------------
 Draw Bones
--------------------------------*/
function drawBones(inLeg){

	inLeg = getScale(inLeg);

	inLeg.Root = inLeg.parent.Add3DChain( inLeg.pos[0], inLeg.pos[1]);
	inLeg.Root.Children(0).name = inLeg.prefix + "Femur";
	AlignFirstBone(inLeg.Root);	
	inLeg.Root.AddBone (inLeg.pos[2], 2, inLeg.prefix + "Tibia");
	inLeg.Root.AddBone (inLeg.pos[3], 2, inLeg.prefix + "Metarsal");

	inLeg.Skel = GetSkeleton(inLeg.Root);
	inLeg.eff = inLeg.Skel(inLeg.Skel.count - 1);

	inLeg.Root.Name = inLeg.prefix + "LegRoot";
	inLeg.eff.Name = inLeg.prefix + "LegEff";

	inLeg.Skel = GetSkeleton(inLeg.Root);

	setChainScale(inLeg.Skel, inLeg.scale);

	inLeg.Hidden.add(inLeg.Root);
	inLeg.Hidden.add(inLeg.eff);

	inLeg.Envelope.add(inLeg.Skel(1));
	inLeg.Envelope.add(inLeg.Skel(2));
	inLeg.Envelope.add(inLeg.Skel(3));

	return inLeg;
}

/*--------------------------------
 Set Chain Scale
-------------------------------*/
function setChainScale(inSkel, inScale){


		for(var f = 0; f < inSkel.count; f++){

			inSkel(f).shadow_icon.value  = 1;
			inSkel(f).primary_icon.value  = 0;

			if(f==0 || f==inSkel.count-1){
				inSkel(f).shadow_scaleX.value  = inScale * .07;
				inSkel(f).radius.value  = inScale * .07;
				inSkel(f).shadow_scaleZ.value  = inScale * .07;
			}
			else{

				inSkel(f).radius.value  = inScale * .1;
				inSkel(f).shadow_scaleZ.value  = inScale * .1;
			}

		}
}
/*--------------------------------
 Make Controls
--------------------------------*/
function makeControls(inLeg){


	var s = inLeg.scale;

	// find a good position for the UpVector

	var l1 = XSIMath.CreateVector3();
	var l2 = XSIMath.CreateVector3();
	var upPos = XSIMath.CreateVector3();
	l1.Sub(inLeg.pos[1], inLeg.pos[0]);
	l2.Sub(inLeg.pos[2], inLeg.pos[1]);
	upPos.set(0,0,(inLeg.scale * -1));

	upPos.addInPlace(inLeg.pos[0]);

	inLeg.upPos = upPos;

	// create and up vector parent

	inLeg.UpVec = curvePyramid(inLeg.Root, upPos, .06*s, .06*s, 253, inLeg.prefix + "UpVector");
	addMarkingSet(inLeg.UpVec, 1, null, null, inLeg.CharacterSetName)

	inLeg.upParent = tempNeutralPose(inLeg.UpVec, inLeg.scale);

	inLeg.Hidden.add(inLeg.upParent);

	return inLeg;

}
/*--------------------------------
 Temp Neutral Pose
--------------------------------*/
function tempNeutralPose(inObj, inScale){

	var tt = inObj.Kinematics.Global.Transform;
	var returnNull = inObj.parent.AddNull(inObj.name + "Parent");

	returnNull.Kinematics.Global.Transform = tt;
	returnNull.AddChild(inObj);

	returnNull.size = inScale *.05;


	return returnNull;

}
/*--------------------------------
 Get Scale
--------------------------------*/
function getScale(inLeg){

	// get the scale from the top of the arm to the hand.

	var checkDist = XSIMath.CreateVector3();
	checkDist.sub(inLeg.pos[0] , inLeg.pos[3]);

	inLeg.scale = checkDist.Length();

	return inLeg;

}
/*--------------------------------
 Orient
----------------------------------
 Applys a rotation to inObj.  The rotation
 is to a vector from inP1 to inForward
 to point towards inP2
--------------------------------*/
function Orient(inObj, inP1, inP2, inForward, inPlaneNormal){

	var project = ProjectOnPlane(inP2, inPlaneNormal, inP1);

	var line2 = XSIMath.CreateVector3();
	line2.sub(project, inP1);

	var rotAngle = inForward.Angle(line2);

	var cp = XSIMath.CreateVector3();
	cp.Cross(inForward,line2);
	cp.NormalizeInPlace();
	if (! cp.EpsilonEquals(inPlaneNormal, 0.01)){rotAngle = rotAngle * -1}

	var rot = XSIMath.createrotation();
	rot.SetFromAxisAngle (inPlaneNormal, rotAngle);


	var gTrans = inObj.Kinematics.Global.Transform;
	gTrans.AddLocalRotation(rot);
	inObj.Kinematics.Global.Transform = gTrans;

}
/*------------------------------
 Project On Plane 2
--------------------------------
  just like project on plane but returns
  the relative vector from the origin instead
------------------------------*/
function ProjectOnPlane2(inPoint, inPlaneNormal, inPlanePoint)
{

	var planeEnd = XSIMath.CreateVector3();
	var vec = XSIMath.CreateVector3();
	var vProjection = XSIMath.CreateVector3();
	var pProjection = XSIMath.CreateVector3();

	planeEnd.Add(inPlanePoint, inPlaneNormal);
	vec.sub(inPoint, inPlanePoint);

	dot = vec.Dot(inPlaneNormal);
	var ScaleChange = (dot/Math.pow(inPlaneNormal.Length() , 2));
	vProjection.Scale(ScaleChange, inPlaneNormal);
	pProjection.Sub(vec, vProjection);

	return pProjection;

}
/*--------------------------------
 Make Guide Nulls
--------------------------------*/
function makeGuideNulls(inLeg){


	inLeg.Knee = makeGuideNull(inLeg.Root, inLeg.prefix + "kneeGuide" , inLeg.pos[1], inLeg.scale);
	inLeg.Tarsus = makeGuideNull(inLeg.Root, inLeg.prefix + "tarsusGuide", inLeg.pos[2], inLeg.scale);

	inLeg.Hidden.add(inLeg.Knee);
	inLeg.Hidden.add(inLeg.Tarsus);

	return inLeg;

}
/*--------------------------------
 Zero Rotation
--------------------------------*/
function zeroRotation(inObjArray){

	var zero = XSIMath.CreateRotation();

	for(i = 0; i < inObjArray.length;i++){

		var trans = inObjArray[i].Kinematics.Local.Transform
		trans.SetRotation(zero);
		inObjArray[i].Kinematics.Local.Transform = trans;

	}
}
/*--------------------------------
 Attach Foot
--------------------------------*/
function attachFoot(inLeg){


	if(inLeg.ShadowEnds){
		var ShadowEnd = inLeg.ShadowEnds(0);
	}
	else{var ShadowEnd = null}


	inLeg.Foot = makeFoot(inLeg.model, inLeg.FootAttachPoint, inLeg.prefix, inLeg.fullPrefix, inLeg.footObjs, inLeg.sliderPage, 1, inLeg.FootShadowType, ShadowEnd);

	inLeg.FootControl = inLeg.Foot.Foot;

	inLeg.Skel(4).AddChild(inLeg.Foot.Root);

	// constrain to the guide nulls
	inLeg.Skel(2).Kinematics.AddConstraint("Position", inLeg.Knee, false);
	inLeg.Skel(3).Kinematics.AddConstraint("Position", inLeg.Tarsus, false);
	inLeg.Skel(4).Kinematics.AddConstraint("Position", inLeg.Foot.BaseGuide , false);


	return inLeg;
}
/*--------------------------------
 Apply Operators
--------------------------------*/
function ApplyOperators(inLeg){

	//~~~~~~~~~~~~~~ Quadruped Leg Operator ~~~~~~~~~~~~~~~~~
	var LegConnections = inLeg.Knee +","+ inLeg.Tarsus +","+ inLeg.UpVec +","
			               + inLeg.Root +","+ inLeg.Foot.BaseGuide +","+ inLeg.Foot.Extension;
	var rtOp  = ApplyOp("DogLeg", LegConnections, 0)(0);

	var l1 = XSIMath.CreateVector3();
	var l2 = XSIMath.CreateVector3();
	var l3 = XSIMath.CreateVector3();
	var l4 = XSIMath.CreateVector3();

	l1.sub(inLeg.pos[1], inLeg.pos[0]);
	l2.sub(inLeg.pos[2], inLeg.pos[1]);
	l3.sub(inLeg.pos[3], inLeg.pos[2]);
	l4.sub(inLeg.pos[3], inLeg.pos[1]);

	initPerc = l4.Length()/(l2.Length()+l3.Length());


	SetValue(rtOp  + ".length1", l1.Length(), null);
	SetValue(rtOp  + ".length2", l2.Length(), null);
	SetValue(rtOp  + ".length3", l3.Length(), null);

	SetValue(rtOp  + ".initial_percentage", initPerc, null);

	var roll1 = calculateRoll(inLeg.pos[0], inLeg.pos[1], inLeg.pos[3], inLeg.upPos, 1)
	var roll2 = calculateRoll(inLeg.pos[1], inLeg.pos[2], inLeg.pos[3], inLeg.upPos, null)

	SetValue(rtOp  + ".roll", roll1, null);
	SetValue(rtOp  + ".secondRoll", roll2, null);
	SetValue(rtOp  + ".lock_percentage", .97, null);


	inLeg.dogLeg = rtOp;

	return inLeg;
}
/*--------------------------------
 Calculate Roll
--------------------------------*/
function calculateRoll(inRoot, inMidBone, inEffector, inUpV, inRightHanded){

	// get everything relative to the Root

	var eff  = XSIMath.CreateVector3();
	var midBone = XSIMath.CreateVector3();
	var upV = XSIMath.CreateVector3();

	eff.sub(inEffector, inRoot);
	midBone.sub(inMidBone, inRoot);
	upV.sub(inUpV, inRoot);

	var zeroVec = XSIMath.CreateVector3();
	zeroVec.set(1,0,0);


	var roll = processUpV(upV, zeroVec, eff, midBone)

	return roll;
}
/*------------------------------
 Process Up V
------------------------------*/
function processUpV(inUpVec, inUpZero, inEff, inSecondBone){

	// project the UpVector onto the plane defined by the EffectorPosition

	var zero = XSIMath.CreateVector3();
	zero.set(0,0,0)

	var projected = ProjectOnPlane(inUpVec, inEff, zero);
	var boneProjected = ProjectOnPlane(inSecondBone, inEff, zero);

	var Uangle = projected.Angle(boneProjected);
	var cp = XSIMath.CreateVector3();
	cp.Cross(projected,boneProjected)


	var testAng = cp.Angle(cp);

	// Find which is closest to the cross product, eff or effneg
	var EffNeg = XSIMath.CreateVector3();
	test1 = XSIMath.CreateVector3();
	test2 = XSIMath.CreateVector3();

	EffNeg.Negate(inEff);
	test1.Sub(cp,inEff);
	test2.Sub(cp,EffNeg);

	if (test2.Length() < test1.Length() ){Uangle = Uangle * -1};
	Uangle = XSIMath.RadiansToDegrees(Uangle ) ;

	return Uangle ;

}
/*------------------------------
 Project On Plane
------------------------------*/
function ProjectOnPlane(inPoint, inPlaneNormal, inPlanePoint)
{

	var planeEnd = XSIMath.CreateVector3();
	var vec = XSIMath.CreateVector3();
	var vProjection = XSIMath.CreateVector3();
	var pProjection = XSIMath.CreateVector3();

	planeEnd.Add(inPlanePoint, inPlaneNormal);
	vec.sub(inPoint, inPlanePoint);

	dot = vec.Dot(inPlaneNormal);
	var ScaleChange = (dot/Math.pow(inPlaneNormal.Length() , 2));
	vProjection.Scale(ScaleChange, inPlaneNormal);
	pProjection.Sub(vec, vProjection);
	pProjection.AddInPlace(inPlanePoint);

	return pProjection;

}

/*--------------------------------
 Apply UpVectors
--------------------------------*/
function ApplyUpVectors(inLeg){

	inLeg.Skel(1).joint.UpVectorReference = inLeg.UpVec;

	// blending approach for last leg bone
	// stick it out the length of the last bone and blend with the up-vector
	// to avoid flipping on the last leg bone.


	var p1 = XSIMath.CreateVector3();
	var p2 = XSIMath.CreateVector3();
	var dif = XSIMath.CreateVector3();

	inLeg.FootControl.Kinematics.Global.Transform.GetTranslation(p1);
	inLeg.Skel(3).Kinematics.Global.Transform.GetTranslation(p2);
	dif.sub(p2,p1);

	var dropBack = XSIMath.CreateVector3();
	dropBack.set(0,0,-2 * dif.Length());
	dropBack.AddInPlace(p2);

	var baseNull = inLeg.FootControl.AddNull("baseNull");
	baseNull.size = inLeg.scale *.05;

	var trans = XSIMath.CreateTransform();
	trans.SetTranslation(dropBack);
	baseNull.Kinematics.Global.Transform = trans;


	var lastboneUpV = inLeg.FootControl.AddNull("lastboneUpV");
	lastboneUpV.size = inLeg.scale *.05;


	var twoObj = new ActiveXObject("XSI.Collection");
	twoObj.add(baseNull);
	twoObj.add(inLeg.UpVec)

	lastboneUpV.Kinematics.AddConstraint("TwoPoints", twoObj, false);
	inLeg.Skel(3).joint.UpVectorReference = lastboneUpV;

	inLeg.Hidden.add(lastboneUpV);
	inLeg.Hidden.add(baseNull);

	return inLeg;
}
/*--------------------------------
 Apply UpVectors
--------------------------------*/
function ApplyUpVectors_new(inLeg){

	//inLeg.Skel(1).joint.UpVectorReference = inLeg.UpVec;



	var topObj = new ActiveXObject("XSI.Collection");


	var tempRoot = inLeg.parent.AddNull("TopOfUpVec");

	var t1 = inLeg.Root.Kinematics.Global.Transform;
	tempRoot.Kinematics.Global.Transform = t1



	topObj.add(inLeg.Tarsus);
//	topObj.add(inLeg.Root)
	topObj.add(tempRoot)
	topObj.add(inLeg.UpVec)

	inLeg.TopPlane = inLeg.Root.AddNull("TopPlane");
	var topCnst = inLeg.TopPlane.Kinematics.AddConstraint("ThreePoints", topObj, false);

	SetValue(topCnst + ".percu", 52, null);
	SetValue(topCnst + ".percv", 52, null);
	SetValue(topCnst + ".percw", 4, null);



	var bottomObj = new ActiveXObject("XSI.Collection");
	bottomObj.add(inLeg.Knee);
	bottomObj.add(inLeg.Foot.baseGuide)
	bottomObj.add(inLeg.UpVec)

	inLeg.BottomPlane = inLeg.Root.AddNull("BottomPlane");
	var bottomCnst = inLeg.BottomPlane.Kinematics.AddConstraint("ThreePoints", bottomObj, false);


	SetValue(bottomCnst + ".percu", 52, null);
	SetValue(bottomCnst + ".percv", 52, null);
	SetValue(bottomCnst + ".percw", -4, null);


	//Translate(inLeg.Tarsus, 1, 1, 1, siRelative, siView, siObj, siXYZ, null, null, null, null, null, null, null, null, null);


	inLeg.Skel(3).Properties("Kinematic Joint").Parameters("roll").value = 180;


	var lowerObj = new ActiveXObject("XSI.Collection");
	lowerObj.add(inLeg.BottomPlane);
	lowerObj.add(inLeg.Foot.footGuides(1))

	inLeg.LowerUpV = inLeg.Root.AddNull("LowerUpV");
	inLeg.SpinCnst =  inLeg.LowerUpV.Kinematics.AddConstraint("TwoPoints", lowerObj, false);



	inLeg.Skel(1).joint.UpVectorReference = inLeg.TopPlane;
	inLeg.Skel(2).joint.UpVectorReference = inLeg.TopPlane;
	inLeg.Skel(3).joint.UpVectorReference = inLeg.LowerUpV;



	// requires an extra pull to evaluate the system
	Translate(inLeg.FootControl, 1, 0, 0, siRelative, siView, siObj, siXYZ, null, null, null, null, null, null, null, null, null);
	Translate(inLeg.FootControl, -1, 0, 0, siRelative, siView, siObj, siXYZ, null, null, null, null, null, null, null, null, null);


	inLeg.Hidden.add(topObj);
	inLeg.Hidden.add(inLeg.TopPlane);
	inLeg.Hidden.add(inLeg.BottomPlane);
	inLeg.Hidden.add(inLeg.LowerUpV);

	return inLeg;
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
 Make Skel Shadows
-------------------------------*/
function makeSkelShadows(inLeg){


	inLeg.ShadowEnds = new ActiveXObject("XSI.Collection");
	inLeg.Shadows = new ActiveXObject("XSI.Collection");

	inLeg.ArmShadow = makeShadowChain(inLeg.Skel, inLeg.ShadowParent, inLeg.ShadowType==1 /*SI3D*/, inLeg.scale* .15, inLeg.ShadowType==3 /*NULL*/, inLeg.ShadowCharacterSetName);

	inLeg.ShadowStart = inLeg.ArmShadow.ShadowStart;
	inLeg.Shadows.AddItems(inLeg.ArmShadow.Shadows);

	inLeg.ShadowEnds.Add(inLeg.ArmShadow.ShadowEnds(0));


	return inLeg;

}
/*--------------------------------
 Make Box Shadows
--------------------------------*/
function makeBoxShadows(inLeg){

	var boxScale = inLeg.scale * .1;

	inLeg.Shadows = new ActiveXObject("XSI.Collection");
	inLeg.ShadowEnds = new ActiveXObject("XSI.Collection");

	var taperPerc = .8;

	if(inLeg.pos[0].x > 0){
		var startSpin = -45;
	}
	else{
		var startSpin = 45;
	}


	for(var b=1;b<inLeg.Skel.count - 1;b++){
		var boxShadow = makeShadowBox(inLeg.ShadowParent, inLeg.prefix + "Thigh", inLeg.Skel(b), inLeg.Skel(b+1), boxScale, 90, 90, taperPerc, null, startSpin)
		boxScale = boxScale * taperPerc;
		inLeg.ShadowParent = boxShadow;
		inLeg.Shadows.Add(boxShadow);
		startSpin = 0;

		if(b == 1){
			inLeg.ShadowStart = boxShadow;
		}

	}

	inLeg.ShadowEnds.Add(boxShadow);

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
 Hide Setup
--------------------------------*/
function HideSetup(inLeg){

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
 Curve Cube
--------------------------------*/
function curveCube(inParent, inPos, inXlen, inYlen, inZlen, inColor, inName){

	var xlen = inXlen/2;
	var ylen = inYlen/2;
	var zlen = inZlen/2;

	// p is positive, N is negative
	var ppp = XSIMath.CreateVector3();
	var ppN = XSIMath.CreateVector3();
	var pNp = XSIMath.CreateVector3();
	var Npp = XSIMath.CreateVector3();
	var pNN = XSIMath.CreateVector3();
	var NNp = XSIMath.CreateVector3();
	var NpN = XSIMath.CreateVector3();
	var NNN = XSIMath.CreateVector3();

	ppp.set(xlen,ylen,zlen);
	ppN.set(xlen,ylen,zlen*-1);
	pNp.set(xlen,ylen*-1,zlen);
	Npp.set(xlen*-1,ylen,zlen);
	pNN.set(xlen,ylen*-1,zlen*-1);
	NNp.set(xlen*-1,ylen*-1,zlen);
	NpN.set(xlen*-1,ylen,zlen*-1);
	NNN.set(xlen*-1,ylen*-1,zlen*-1);

	var points = new Array();

	points = vectorPush(points, ppp);
	points = vectorPush(points, ppN);
	points = vectorPush(points, NpN);
	points = vectorPush(points, NNN);
	points = vectorPush(points, NNp);
	points = vectorPush(points, Npp);
	points = vectorPush(points, NpN);
	points = vectorPush(points, Npp);
	points = vectorPush(points, ppp);
	points = vectorPush(points, pNp);
	points = vectorPush(points, NNp);
	points = vectorPush(points, pNp);
	points = vectorPush(points, pNN);
	points = vectorPush(points, ppN);
	points = vectorPush(points, pNN);
	points = vectorPush(points, NNN);


	var curve = inParent.AddNurbsCurve(points,null,0, 1, siNonUniformParameterization, siSINurbs, inName);

	curve.AddProperty("Display Property")
	curve.properties("display").wirecol.value = inColor;

	var trans = XSIMath.CreateTransform();
	trans.SetTranslation(inPos);
	curve.Kinematics.Global.Transform = trans;

	return curve;

}
/*--------------------------------
 Curve Offset Cube
--------------------------------*/
function curveOffsetCube(inParent, inPos, inOffset, inXlen, inYlen, inZlen, inColor, inName){

	var xlen = inXlen/2;
	var ylen = inYlen/2;
	var zlen = inZlen/2;

	// p is positive, N is negative
	var ppp = XSIMath.CreateVector3();
	var ppN = XSIMath.CreateVector3();
	var pNp = XSIMath.CreateVector3();
	var Npp = XSIMath.CreateVector3();
	var pNN = XSIMath.CreateVector3();
	var NNp = XSIMath.CreateVector3();
	var NpN = XSIMath.CreateVector3();
	var NNN = XSIMath.CreateVector3();

	ppp.set(xlen,ylen,zlen);
	ppN.set(xlen,ylen,zlen*-1);
	pNp.set(xlen,ylen*-1,zlen);
	Npp.set(xlen*-1,ylen,zlen);
	pNN.set(xlen,ylen*-1,zlen*-1);
	NNp.set(xlen*-1,ylen*-1,zlen);
	NpN.set(xlen*-1,ylen,zlen*-1);
	NNN.set(xlen*-1,ylen*-1,zlen*-1);

	ppp.AddInPlace(inOffset);
	ppN.AddInPlace(inOffset);
	pNp.AddInPlace(inOffset);
	Npp.AddInPlace(inOffset);
	pNN.AddInPlace(inOffset);
	NNp.AddInPlace(inOffset);
	NpN.AddInPlace(inOffset);
	NNN.AddInPlace(inOffset);

	var points = new Array();

	points = vectorPush(points, ppp);
	points = vectorPush(points, ppN);
	points = vectorPush(points, NpN);
	points = vectorPush(points, NNN);
	points = vectorPush(points, NNp);
	points = vectorPush(points, Npp);
	points = vectorPush(points, NpN);
	points = vectorPush(points, Npp);
	points = vectorPush(points, ppp);
	points = vectorPush(points, pNp);
	points = vectorPush(points, NNp);
	points = vectorPush(points, pNp);
	points = vectorPush(points, pNN);
	points = vectorPush(points, ppN);
	points = vectorPush(points, pNN);
	points = vectorPush(points, NNN);


	var curve = inParent.AddNurbsCurve(points,null,0, 1, siNonUniformParameterization, siSINurbs, inName);

	curve.AddProperty("Display Property")
	curve.properties("display").wirecol.value = inColor;

	var trans = XSIMath.CreateTransform();
	trans.SetTranslation(inPos);
	curve.Kinematics.Global.Transform = trans;

	return curve;

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
 Curve Square
--------------------------------*/
function curveSquare(inParent, inPos, inHeight, inWidth, inColor, inName){

	var height = inHeight/2;
	var width = inWidth/2;


	// p is positive, N is negative

	var pp = XSIMath.CreateVector3();
	var pN = XSIMath.CreateVector3();
	var Np = XSIMath.CreateVector3();
	var NN = XSIMath.CreateVector3();

	pp.set(0,height,width);
	pN.set(0,height,width*-1);
	Np.set(0,height*-1,width);
	NN.set(0,height*-1,width*-1);

	var points = new Array();

	points = vectorPush(points, pp);
	points = vectorPush(points, pN);
	points = vectorPush(points, NN);
	points = vectorPush(points, Np);

	var curve = inParent.AddNurbsCurve(points,null,1, 1, siNonUniformParameterization, siSINurbs, inName);

	curve.AddProperty("Display Property")
	curve.properties("display").wirecol.value = inColor;

	var trans = XSIMath.CreateTransform();
	trans.SetTranslation(inPos);
	curve.Kinematics.Global.Transform = trans;

	return curve;

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
 Make Guide Null
--------------------------------*/
function makeGuideNull(inParent, inName, inPos, inScale){

	var newNull = inParent.AddNull(inName);
	newNull.size = inScale *.02;

	var trans = XSIMath.CreateTransform();
	trans.SetTranslation(inPos);
	newNull.Kinematics.Global.Transform = trans;

	newNull.AddProperty("Display Property")
	newNull.properties("display").wirecol.value = 607;

	return newNull;
}
/*--------------------------------
 Make UpV Null
--------------------------------*/
function makeUpVNull(inParent, inName, inRefObj, inChain){

	// the ref object is the next object to get the length

	var p1 = XSIMath.CreateVector3();
	var p2 = XSIMath.CreateVector3();
	var dif = XSIMath.CreateVector3();

	inParent.Kinematics.Global.Transform.GetTranslation(p1);
	inRefObj.Kinematics.Global.Transform.GetTranslation(p2);
	dif.sub(p2,p1);

	var dropDown = XSIMath.CreateVector3();
	dropDown.set(0,-1 * dif.Length(),0);
	dropDown.AddInPlace(p1);

	var newNull = inParent.AddNull(inName);
	var trans = XSIMath.CreateTransform();
	trans.SetTranslation(dropDown);
	newNull.Kinematics.Global.Transform = trans;

	newNull.AddProperty("Display Property")
	newNull.properties("display").wirecol.value = 507;
	newNull.ActivePrimitive.parameters("size").value = .1;

	inChain.joint.UpVectorReference = newNull;

	return newNull;


}

/*--------------------------------
 Make Test Null
--------------------------------*/
function makeTestNull(inParent, inName, inPos){

	var newNull = inParent.AddNull(inName);
	var trans = XSIMath.CreateTransform();
	trans.SetTranslation(inPos);
	newNull.Kinematics.Global.Transform = trans;

	newNull.AddProperty("Display Property")
	newNull.properties("display").wirecol.value = 351;

	return newNull;


}

/*--------------------------------
 Draw Line
--------------------------------*/
function DrawLine(inStart, inEnd, inName, inColor){

	var curvePoints = new Array(7);
	var knots = new Array(1);

	curvePoints[0] = inStart.x
	curvePoints[1] = inStart.y
	curvePoints[2] = inStart.z
	curvePoints[3] = 1
	curvePoints[4] = inEnd.x
	curvePoints[5] = inEnd.y
	curvePoints[6] = inEnd.z
	curvePoints[7] = 1

	knots[0] = 0;
	knots[1] = 1;

	var line = ActiveSceneRoot.AddNurbsCurve(curvePoints, knots, 0, 1, siNonUniformParameterization, siSINurbs);

	line.name = inName;
	line.AddProperty("Display Property");
	line.properties("display").wirecol.value = inColor;

	return line;
}
/*--------------------------------
 Hookup Sliders
--------------------------------*/
function HookupSliders(inLeg){

	if (inLeg.sliderPage == null){
		var sliders = inLeg.Root.model.AddProperty("Custom_parameter_list",0,inLeg.prefix + "DogLeg_Controls");
	}
	else{
		var sliders = inLeg.sliderPage;
	}

	AddProxyParam (sliders, inLeg.dogLeg + ".lock_percentage", null);
	var l1 = 	sliders.Parameters.count - 1

	EditParameterDefinition(sliders.Parameters(l1), inLeg.prefix + "_lock percentage", 5, .001, 1, .001, 1, inLeg.prefix + " lock percentage", inLeg.prefix + " lock percentage");

	return inLeg;
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
