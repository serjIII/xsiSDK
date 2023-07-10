////////////////////////////////////////
// Make Foot Rigging Component
// misner Dec 2003




/* 	in this tool:

		inModel > is the model that contains the the Foot guide
		inParent >  the object to make the new Foot under
		inRigShortPrefix > is the sort name (typically L or R) that will be used in the new rig
		inRigFullPrefix > is the long name (typically "Left" or "Right") that will be used in the new rig.

		inGuideObjects = an XSI Collection of n items with the following requirements:

				1) The first 3 define: Middle Pivot, Right Pivot, Left Pivot
				2) There are at least 3 object after the pivots runing from the start of the Foot to the end of the toe.
				   This means the minimum Foot is a 2 bone chain.
				3) Given the 2 requirements above, there are a minimum of 6 objects in this collection.


		inSliderPage > the slider page, if not found a new one will be created.

		inExtension > whether or not an Extension object is made for controling dog leg ik distribution

				0 > no Extension
				1 > create Extension icon

		inShadowType = the type of shadow rig to constrain to the arm

		   	0 > no shadow
			1 > SI|3D skeleton shadow rig
			2 > XSI  skeleton shadow rig						
			3 > Null shadow rig
			4 > Box shadow rig

		inShadowParent = parent of the shadow rig hiearchy.  If empty, no shadow rig will be generated.



	--------- RETURNS -------------------

	Returns a Foot Object where:


	returns a collection where item:

		Foot.Root = is the Root of the new Foot bone
		Foot.Parent = is the parent of the Foot control icon
		Foot.BaseGuide = is the GuideNull (binding point) at the base of the Foot.
		Foot.FootGuides = is a collection of Foot Guides
		Foot.Extension = is the Foot Extension icon (optional > only returned if inMakeExtension = 1)
                                     this is useful when hooking up a Foot controler to a dog leg and ensures the
                                     Foot icons are syncronised in scale.
		Foot.Foot = the Foot control icon
		Foot.Roll = the Roll control icon
		Foot.Hidden = is a collection of Hidden object
		Foot.Envelope = is a collection of objects to be Enveloped
		Foot.Shadows = a collection of box shadows

*/

//******************************************************************************
// String Constants (used to translate)
//******************************************************************************
var IDS_MAKE_FOOT_TITLE		= 1168;

// Add a push method to the JScript Array Object
// (Array.Push was added in Jscript 5.5 but we cannot rely on this)
var push = function(item){return this[this.length++] = item;}
Array.prototype.push = push;

/*--------------------------------
 Make Foot
--------------------------------*/
function makeFoot(inModel, inParent, inRigShortPrefix, inRigFullPrefix, inGuideObjects, inSliderPage, inExtension, inShadowType, inShadowParent, inThreeBoneToes)
{

	////////////////////////////
	// Validate arguments
	////////////////////////////

	//convert collections to objects
	var l_aArgsToConvert = Array(0,1,5,8);
	var a;
	for (i = 0; i < l_aArgsToConvert.length; i++)
	{
		a = l_aArgsToConvert[i];
		if(arguments[a]) { arguments[a] = arguments[a](0);}	//extract first object from coll.
	}

	//check for required arguments
	var l_aRequiredArgs = Array(0,1);
	var l_bExit;
	for (i = 0; i < l_aRequiredArgs.length; i++)
	{
		a = l_aRequiredArgs[i];
		if(!arguments[a]){ logmessage("makeFoot: required argument " + a + " is invalid", siError); l_bExit = true;	}
	}
	if(l_bExit) return;

	////////////////////////////

	var Foot = new Object;

	Foot.model = inModel;
	Foot.makeExtension = inExtension;

	if (inRigShortPrefix == "" || inRigFullPrefix == ""){
		var ui = getUI();
		if(!ui){return}

		Foot.prefix = ui.shortPrefix ;
		Foot.fullPrefix = ui.longPrefix ;
	}
	else{
		Foot.prefix = inRigShortPrefix;
		Foot.fullPrefix = inRigFullPrefix;
	}

    Foot.CharacterSetName = "Lower." + Foot.prefix + "_Leg";
    Foot.ShadowCharacterSetName = "ShadowLower.Shadow" + Foot.prefix + "_Leg";

	Foot.sliderPage = inSliderPage;

	if (inParent == null){
		inParent = ActiveSceneRoot;
	}

	Foot.Parent = inParent;

	Foot.guideObjs = inGuideObjects;

	if (!inThreeBoneToes) {
		// remove the last item to make a 3 bone chain 
		Foot.guideObjs.Remove(Foot.guideObjs(Foot.guideObjs.count-1));
	}

	Foot.ShadowType = inShadowType;
	Foot.ShadowParent = inShadowParent;


	Foot = getPositions(Foot);
	if(!Foot){return}


	Foot.Envelope = new ActiveXObject("XSI.Collection");
	Foot.Hidden = new ActiveXObject("XSI.Collection");

	Foot = getScale(Foot);
	Foot = drawBones(Foot);

	Foot = makeControls(Foot);
	Foot = makeGuideNulls(Foot);
	Foot = parentingAndConstraints(Foot);
	
	if (!inThreeBoneToes) {
		Foot = ApplyOperators_TwoBones(Foot);
	}
	else {
		Foot = ApplyOperators_ThreeBones(Foot);
	}

	Foot = ApplyUpVectors(Foot);

	if(Foot.ShadowType >= 1 && Foot.ShadowType <= 3){
		Foot = makeSkelShadows(Foot);
	}
	if(Foot.ShadowType > 3){
		Foot = makeBoxShadows(Foot);
	}

	Foot.BaseGuide =  Foot.FootGuides(Foot.FootGuides.count-1);
	Foot = HideSetup(Foot);
	Foot = HookupSliders(Foot);

	return Foot;

}
/*--------------------------------
 Get UI
--------------------------------*/
function getUI(inData)
{

	var uiReturn = new Object();

	var SceneRoot =  Application.ActiveProject.ActiveScene.Root;
	var mysliders = SceneRoot.AddProperty("Custom_parameter_list",0,"Foot_Maker");
	var shortPrefix = mysliders.AddParameter2("Start", siString , "BL", -1000 , 10000, null, null, 8, 1, "shortPrefix", "short prefix");
	var longPrefix = mysliders.AddParameter2("End", siString , "BLeft", -1000 , 10000, null, null, 8, 1, "longPrefix", "long prefix");

	try{
		inspectobj( mysliders, "", XSIUtils.Translate( IDS_MAKE_FOOT_TITLE, "XSISCRIPTS" ), siModal );
	}
	catch(e){
		deleteobj(mysliders);
		logmessage ( e.description, siError);
		return;
	}

	uiReturn.shortPrefix = shortPrefix.value;
	uiReturn.longPrefix = longPrefix.value;

	deleteobj(mysliders);

	return uiReturn;

}
/*--------------------------------
 Get Positions
--------------------------------*/
function getPositions(inFoot){

	//  we know:
	//  1) The first 3 define: Middle Pivot, Right Pivot, Left Pivot
	//  2) There are at least 3 object after the pivots runing from the start of the Foot to the end of the toe.


	inFoot.FootPos = new Array();
	inFoot.pivots = new Array();


	// first get the pivots

	for(var l=0;l<3;l++){
		inFoot.pivots[l] = XSIMath.CreateVector3();
		inFoot.guideObjs(l).Kinematics.Global.Transform.GetTranslation(inFoot.pivots[l]);
	}


	// cycle through toe elements

	for(var l=3;l<inFoot.guideObjs.count;l++){

		inFoot.FootPos[l-3] = XSIMath.CreateVector3();
		inFoot.guideObjs(l).Kinematics.Global.Transform.GetTranslation(inFoot.FootPos[l-3]);

	}

	return inFoot;

}
/*--------------------------------
 Get Scale
--------------------------------*/
function getScale(inFoot){

	// since we are only guarnteed to have the 3 markers (ie two bones)
	// defining the Foot, use that as a scale index.

	var checkDist = XSIMath.CreateVector3();
	checkDist.sub(inFoot.FootPos[0], inFoot.FootPos[2]);

	inFoot.scale = checkDist.Length()/1.25;

	return inFoot;

}
/*--------------------------------
 Draw Bones
--------------------------------*/
function drawBones(inFoot){


	var normalPlane = XSIMath.CreateVector3();
	normalPlane.Set(1,0,0);

	inFoot.Root = inFoot.Parent.Add2DChain(inFoot.FootPos[0], inFoot.FootPos[1], normalPlane, 3);
	AlignFirstBone(inFoot.Root);


	for(var ma = 2; ma < inFoot.FootPos.length;ma++){
	 	inFoot.Root.AddBone(inFoot.FootPos[ma], 2, "newBone");
	}

	inFoot.Skel = GetSkeleton(inFoot.Root);

	// convert the bones to 3D chains
	inFoot.Skel(1).Properties("Kinematic Joint").Parameters("chntype").value = 2;

	for(var f = 2; f<inFoot.Skel.count - 1;f++){
 		inFoot.Skel(f).Properties("Kinematic Joint").Parameters("chntype").value = 0;
	}

	for(var f = 1; f<inFoot.Skel.count - 1;f++){
		inFoot.Skel(f).name = inFoot.prefix + "FootBone" + f;
		inFoot.Envelope.Add(inFoot.Skel(f));
	}



	setChainScale(inFoot.Skel, inFoot.scale);


	inFoot.eff = inFoot.Skel(inFoot.Skel.count - 1);

	inFoot.Root.Name = inFoot.prefix + "FootRoot";
	inFoot.eff.Name = inFoot.prefix + "FootEff";


	inFoot.Hidden.add(inFoot.Root);
	inFoot.Hidden.add(inFoot.eff);


	return inFoot;
}

/*--------------------------------
 Set Chain Scale
-------------------------------*/
function setChainScale(inSkel, inScale){


		for(var f = 0; f < inSkel.count; f++){

			inSkel(f).shadow_icon.value  = 1;
			inSkel(f).primary_icon.value  = 0;

			if(f==0 || f==inSkel.count-1){
				inSkel(f).shadow_scaleX.value  = inScale * .3;
				inSkel(f).radius.value  = inScale * .3;
				inSkel(f).shadow_scaleZ.value  = inScale * .3;
			}
			else{
				inSkel(f).radius.value  = inScale * .6;
				inSkel(f).shadow_scaleZ.value  = inScale * .6;
			}

		}

}
/*--------------------------------
 Make Controls
--------------------------------*/
function makeControls(inFoot){

	var s = inFoot.scale;

	var forward = XSIMath.CreateVector3();
	var up = XSIMath.CreateVector3();
	forward.set(0,0,1);
	up.set(0,1,0);
	
	
	inFoot.Foot = curveCube(inFoot.Parent, inFoot.FootPos[0], .7*s, 2.0*s,2.0*s,253, inFoot.fullPrefix + "Foot");
	Orient(inFoot.Foot, inFoot.FootPos[0], inFoot.FootPos[1], forward, up);
	SetNeutralPose(inFoot.Foot, siSRT,false);
	
	inFoot.Tip = curveCube(inFoot.Foot, inFoot.FootPos[inFoot.FootPos.length-1], .4*s, .4*s, .4*s,250, inFoot.fullPrefix + "Tip");
	Orient(inFoot.Tip, inFoot.FootPos[inFoot.FootPos.length-2], inFoot.FootPos[inFoot.FootPos.length-1], forward, up);
	SetNeutralPose(inFoot.Tip, siSRT,false);
		
	
	inFoot.Roll = curveCube(inFoot.Tip, inFoot.FootPos[0], .6*s, 1.2*s,1.2*s,770, inFoot.fullPrefix + "Roll");
	Orient(inFoot.Roll, inFoot.FootPos[0], inFoot.FootPos[1], forward, up);
	SetNeutralPose(inFoot.Roll, siSRT,false);

	addMarkingSet(inFoot.Foot, 1, 1, null, inFoot.CharacterSetName);
	addMarkingSet(inFoot.Tip, 1, 1, null, inFoot.CharacterSetName);
	addMarkingSet(inFoot.Roll, 0, 1, null, inFoot.CharacterSetName);

	if(inFoot.makeExtension == 1){
		inFoot.Extension = curveCube(inFoot.Tip, inFoot.FootPos[0], .7*s, 1.6*s,1.6*s,746, inFoot.fullPrefix + "Extension");
		Orient(inFoot.Extension, inFoot.FootPos[0], inFoot.FootPos[1], forward, up);
		SetNeutralPose(inFoot.Extension, siSRT,false);
		addMarkingSet(inFoot.Extension, 0, 1, null, inFoot.CharacterSetName);
	}

	inFoot.toeOffsets = new Array();

	for(i = 1; i < inFoot.FootPos.length - 1;i++){

		var widthVec = XSIMath.CreateVector3();
		widthVec.sub(inFoot.FootPos[i+1], inFoot.FootPos[i])
		var width = widthVec.Length();

		var offset = XSIMath.CreateVector3();
		offset.set(0,0,width/2);

		var toeOffset = curveOffsetCube(inFoot.model, inFoot.FootPos[i], offset, .4*s,.8*s, width ,107, inFoot.prefix + "ToeOffset" + (i));

		Orient(toeOffset, inFoot.FootPos[i], inFoot.FootPos[i+1], forward, up);

		inFoot.toeOffsets.push(toeOffset);

		addMarkingSet(toeOffset, 0, 1, null, inFoot.CharacterSetName);
	}




	inFoot.bindSquares = new Array();

	for(i = 1; i < inFoot.FootPos.length;i++){

		var bind = curveSquare(inFoot.Tip, inFoot.FootPos[i], .25*s, .25*s, 730, inFoot.prefix + "FootBind" + (i))

		if(i == inFoot.FootPos.length - 1){
			Orient(bind , inFoot.FootPos[i-1], inFoot.FootPos[i], forward, up);
		}
		else{
			Orient(bind , inFoot.FootPos[i], inFoot.FootPos[i+1], forward, up);
		}


		inFoot.bindSquares.push(bind);
		inFoot.Hidden.add(bind);
	}




	return inFoot;

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
function makeGuideNulls(inFoot){

	var s = inFoot.scale;

	inFoot.PivotBase = makeGuideNull(inFoot.Tip, inFoot.prefix + "PivotBase", inFoot.pivots[0], .15*s);
	inFoot.PlacePivot = makeGuideNull(inFoot.Tip, inFoot.prefix + "PlacePivot", inFoot.pivots[0], .15*s);
	inFoot.PivotRight = makeGuideNull(inFoot.Tip, inFoot.prefix + "PivotRight", inFoot.pivots[1], .15*s );
	inFoot.PivotLeft = makeGuideNull(inFoot.Tip, inFoot.prefix + "PivotLeft", inFoot.pivots[2], .15*s );


	var objArray = new Array(inFoot.PivotBase,inFoot.PlacePivot,inFoot.PivotLeft,inFoot.PivotRight);

	var guidePos = zeroRotation(objArray);

	inFoot.Hidden.add(inFoot.PivotBase);
	inFoot.Hidden.add(inFoot.PlacePivot);
	inFoot.Hidden.add(inFoot.PivotLeft);
	inFoot.Hidden.add(inFoot.PivotRight);

	inFoot.FootGuides = new ActiveXObject("XSI.Collection");

	var forward = XSIMath.CreateVector3();
	var up = XSIMath.CreateVector3();
	forward.set(0,0,1);
	up.set(0,1,0);



	var count = 1;
	for(i = inFoot.FootPos.length - 1; i > -1;i--){
		var bind = makeGuideNull(inFoot.Tip, inFoot.prefix + "FootGuide" + count, inFoot.FootPos[i], .15*s);

		if(i == inFoot.FootPos.length - 1){
			Orient(bind , inFoot.FootPos[i-1], inFoot.FootPos[i], forward, up);
		}
		else{
			Orient(bind , inFoot.FootPos[i], inFoot.FootPos[i+1], forward, up);
		}

		inFoot.FootGuides.add(bind);
		inFoot.Hidden.add(bind);
		count ++;
	}

	return inFoot;
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
 Parenting and Constraints
--------------------------------*/
function parentingAndConstraints(inFoot){



	// FootGuide parenting
	inFoot.PivotBase.AddChild(inFoot.FootGuides(0));

	for(i = 0; i < inFoot.FootGuides.count - 1;i++){

		inFoot.FootGuides(i).AddChild(inFoot.FootGuides(i+1));

	}

	// constrain to the guide nulls

	var index = inFoot.FootGuides.count - 2;

	for(i = 0; i < inFoot.bindSquares.length;i++){

		var j = inFoot.bindSquares.length - i - 1;

		SetExpr(inFoot.bindSquares[i] + ".kine.local.rotx", inFoot.FootGuides(j) + ".kine.local.rotx * -1");
		var chainIndex = i + 2;

		inFoot.Skel(chainIndex).Kinematics.AddConstraint("Position", inFoot.bindSquares[i], false);

	}

	inFoot.lastGuide = inFoot.FootGuides(inFoot.FootGuides.count -1);
	var parent = inFoot.lastGuide;

	for(i = 0; i < inFoot.toeOffsets.length;i++){

		SetExpr(inFoot.toeOffsets[i] + ".kine.local.posx", "0");
		SetExpr(inFoot.toeOffsets[i] + ".kine.local.posy", "0");
		SetExpr(inFoot.toeOffsets[i] + ".kine.local.posz", "0");

		parent.AddChild(inFoot.bindSquares[i]);
		inFoot.bindSquares[i].AddChild(inFoot.toeOffsets[i]);
		parent = inFoot.toeOffsets[i];

	}

	parent.AddChild(inFoot.bindSquares[inFoot.bindSquares.length-1]);


	return inFoot;
}

/*--------------------------------
 Apply Operators
--------------------------------*/
function ApplyOperators_TwoBones(inFoot)
{
	var customOp = XSIFactory.CreateObject( "RIG_twoBoneToes" ) ;
	
	var group1 = customOp.AddPortGroup( "Group1" );
	customOp.AddOutputPort( inFoot.PivotBase.Kinematics.Local, "Pbase", group1.index );

	var group2 = customOp.AddPortGroup( "Group2" );
	customOp.AddOutputPort( inFoot.FootGuides(0).Kinematics.Local.Parameters("rotx"), "P1", group2.index );	
	
	var group3 = customOp.AddPortGroup( "Group3" );
	customOp.AddOutputPort( inFoot.FootGuides(1).Kinematics.Local.Parameters("rotx"), "P2", group3.index );	
	
	var group4 = customOp.AddPortGroup( "Group4" );
	
	customOp.AddInputPort( inFoot.Roll.Kinematics.Local.Parameters("rotx"), "handle", group4.index );
	customOp.AddInputPort( inFoot.Roll.Kinematics.Local.Parameters("rotz"), "handlez", group4.index );	

	customOp.AddInputPort( inFoot.PivotLeft.Kinematics.Local, "leftT", group4.index );
	customOp.AddInputPort( inFoot.PivotRight.Kinematics.Local, "rightT", group4.index );
	customOp.AddInputPort( inFoot.PlacePivot.Kinematics.Local, "placePivotT", group4.index );
		
	customOp.Connect();
	
	inFoot.toeGuide = customOp;
	
	return inFoot;
	
}


/*--------------------------------
 Apply Operators OLD
--------------------------------*/
function ApplyOperators_ThreeBones(inFoot){
	//~~~~~~~~~~~~~~ Toe Guide Operator ~~~~~~~~~~~~~~~~~

	// will need connection cases > this is with three leg bones

	var ToeConnections = inFoot.PivotBase +","+ inFoot.FootGuides(0) +","+ inFoot.FootGuides(1) +"," +
				inFoot.FootGuides(2) +"," + inFoot.Roll +","+ inFoot.PivotLeft +","+
				inFoot.PivotRight +","+ inFoot.PlacePivot;

	var rtOp = ApplyOp("ToeGuide", ToeConnections, 0)(0);

	SetValue(rtOp  + ".R1", 15, null);
	SetValue(rtOp  + ".R2", 20, null);
	SetValue(rtOp  + ".R3", 30, null);

	inFoot.toeGuide = rtOp;

	return inFoot;
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


	var Roll = processUpV(upV, zeroVec, eff, midBone)


	return Roll;
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

	var current = inLeg.Foot;
	
	for(i = 0; i < inLeg.toeOffsets.length;i++){
		
		var upv = makeUpVNull(current, inLeg.prefix + "FootUpV" + (i+1), inLeg.toeOffsets[i], inLeg.Skel(i+1), inLeg.scale);
		inLeg.Hidden.add(upv);
		current = inLeg.toeOffsets[i];
		
		if(i == 0){inLeg.Tip.AddChild(upv)}
		
	}


	inLeg.lastOffset = inLeg.toeOffsets[inLeg.toeOffsets.length-1];
	inLeg.FootEff = inLeg.Skel(inLeg.Skel.count-1);
	var lastbone = inLeg.Skel(inLeg.Skel.count-2);

	var upv2 = makeUpVNull(inLeg.lastOffset, inLeg.prefix + "FootUpV" + (inLeg.toeOffsets.length+1), inLeg.FootEff, lastbone, inLeg.scale);
	inLeg.Hidden.add(upv2);

	return inLeg;
}
/*--------------------------------
 Make UpV Null
--------------------------------*/
function makeUpVNull(inParent, inName, inRefObj, inChain, inScale){

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
	newNull.ActivePrimitive.parameters("size").value = .1 * inScale;

	inChain.joint.UpVectorReference = newNull;

	return newNull;


}

/*--------------------------------
 Make Skel Shadows
-------------------------------*/
function makeSkelShadows(inFoot){


	inFoot.ShadowEnds = new ActiveXObject("XSI.Collection");
	inFoot.Shadows = new ActiveXObject("XSI.Collection");

	inFoot.ArmShadow = makeShadowChain(inFoot.Skel, inFoot.ShadowParent, inFoot.ShadowType==1 /*SI3D*/, inFoot.scale* .6, inFoot.ShadowType==3 /*NULL*/, inFoot.ShadowCharacterSetName);
	inFoot.ShadowStart = inFoot.ArmShadow.ShadowStart;
	inFoot.Shadows.AddItems(inFoot.ArmShadow.Shadows);

	inFoot.ShadowEnds.Add(inFoot.ArmShadow.ShadowEnds(0));


	return inFoot;

}
/*--------------------------------
 Make Box Shadows
--------------------------------*/
function makeBoxShadows(inFoot){

	var boxScale = inFoot.scale * .3;

	inFoot.Shadows = new ActiveXObject("XSI.Collection");
	inFoot.ShadowEnds = new ActiveXObject("XSI.Collection");

	var taperPerc = .8;


	// inFoot.Skel



	var boxShadow = makeLConnector(inFoot.ShadowParent, inFoot.prefix + "Foot", inFoot.Skel(1), inFoot.Skel(2), boxScale, 90, 90, 1, null, 60)
	inFoot.Shadows.Add(boxShadow);
	inFoot.ShadowParent = boxShadow;

	inFoot.ShadowStart = boxShadow;


	var taper = 1 - ((1-taperPerc)/(1+inFoot.Skel.count-1))

	for(var f = 2; f<inFoot.Skel.count - 1;f++){

		var boxShadow = makeBoxConnector(inFoot.ShadowParent, inFoot.prefix + "Foot", inFoot.Skel(f), inFoot.Skel(f+1), boxScale, 90, 90, taper, null)
		boxScale = boxScale * taper;
		inFoot.ShadowParent = boxShadow;
		inFoot.Shadows.Add(boxShadow);
		startSpin = 0;


	}

	inFoot.ShadowEnds.Add(boxShadow);
	
	for(var s=0;s<inFoot.Shadows.count;s++){
		addMarkingSet(inFoot.Shadows(s), 0, 1, null, inFoot.ShadowCharacterSetName);
	}	


	return inFoot;

}
/*--------------------------------
 Make L Connector
--------------------------------*/
function makeLConnector(inParent, inName, inStartObj, inEndObj, inScale, inTopRot, inBottomRot, inTaper, inSplit, inXSpin){


	var shadowBox = inParent.AddGeometry("Cube", "MeshSurface", inName);

	var trans = inStartObj.Kinematics.Global.Transform;

	shadowBox.Kinematics.Global.Transform = trans;

	var shallowScale = inScale * .8;


	shadowBox.Kinematics.AddConstraint("Pose", inStartObj);

	var boxOp  = ApplyOp ("Connector_L", shadowBox+","+ inStartObj +","+ inEndObj)(0);

	SetValue(boxOp + ".topOffset_z", inTopRot, null);
	SetValue(boxOp + ".bottomOffset_z", inBottomRot, null);

	SetValue(boxOp + ".bottomOffset_y", -90, null);
	SetValue(boxOp + ".topOffset_y", -90, null);


	SetValue(boxOp + ".topWidth", inScale, null);
	SetValue(boxOp + ".topDepth", shallowScale, null);
	SetValue(boxOp + ".bottomWidth", inScale * inTaper, null);
	SetValue(boxOp + ".bottomDepth", shallowScale * inTaper, null);
	SetValue(boxOp + ".topOffset_x", inXSpin, null);

	SetValue(boxOp + ".topConerDist", 4 * inScale, null);
	SetValue(boxOp + ".bottomConerDist",4 * inScale, null);



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
 Make Box Connector
--------------------------------*/
function makeBoxConnector(inParent, inName, inStartObj, inEndObj, inScale, inTopRot, inBottomRot, inTaper, inSplit){


	var shadowBox = inParent.AddGeometry("Cube", "MeshSurface", inName);

	var trans = inStartObj.Kinematics.Global.Transform;

	shadowBox.Kinematics.Global.Transform = trans;

	var shallowScale = inScale * .8;


	shadowBox.Kinematics.AddConstraint("Pose", inStartObj);


	var boxOp = ApplyOp ("Connector_Box", shadowBox+","+ inStartObj +","+ inEndObj)(0);
//	var boxOp  = ConvertScriptedOp(op);

	SetValue(boxOp + ".topOffset_z", inTopRot, null);
	SetValue(boxOp + ".bottomOffset_z", inBottomRot, null);


	SetValue(boxOp + ".topWidth", inScale, null);
	SetValue(boxOp + ".topDepth", shallowScale, null);
	SetValue(boxOp + ".bottomWidth", inScale * inTaper, null);
	SetValue(boxOp + ".bottomDepth", shallowScale * inTaper, null);

	SetValue(boxOp + ".bottomOffset_y", -90, null);
	SetValue(boxOp + ".topOffset_y", -90, null);

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

	if(inLeg.Parent.model.Groups.Item("Hidden")){

		inLeg.HiddenGroup = inLeg.Parent.model.Groups.Item("Hidden");
		inLeg.HiddenGroup.AddMember(inLeg.Hidden);

	}
	else{
		for(var m = 0;m < inLeg.Hidden.count;m++){
			inLeg.Hidden(m).properties("visibility").viewvis.value = false;
		}
	}

	if(inLeg.Parent.model.Groups.Item("Envelope_group")){

		inLeg.envGroup = inLeg.Parent.model.Groups.Item("Envelope_group");
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
	var trans = XSIMath.CreateTransform();
	trans.SetTranslation(inPos);
	newNull.Kinematics.Global.Transform = trans;

	newNull.AddProperty("Display Property")
	newNull.properties("display").wirecol.value = 607;
	newNull.ActivePrimitive.parameters("size").value = inScale;

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
		var sliders = inLeg.Parent.model.AddProperty("Custom_parameter_list",0,inLeg.prefix + "FootRoll_Controls");
	}
	else{
		var sliders = inLeg.sliderPage;
	}

	AddProxyParam (sliders, inLeg.toeGuide + ".R1", null);
	var r1 = 	sliders.Parameters.count - 1

	AddProxyParam (sliders, inLeg.toeGuide + ".R2", null);
	var r2 = 	sliders.Parameters.count - 1

	EditParameterDefinition(sliders.Parameters(r1), inLeg.prefix + "_Foot Roll 1", 5, 0, 360, 0, 360, inLeg.prefix + " Foot Roll 1", inLeg.prefix + " Foot Roll 1");
	EditParameterDefinition(sliders.Parameters(r2), inLeg.prefix + "_Foot Roll 2", 5, 0, 360, 0, 360, inLeg.prefix + " Foot Roll 2", inLeg.prefix + " Foot Roll 2");

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