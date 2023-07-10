 ////////////////////////////////////////
// Make Torso Rigging Component
// misner Dec 2003

//modified May 2005 Javier
//getSpineAlignment() to allow global axis alignment option

	/*

	inParent = the object to make the new hand under

	inNbVertebra = number of vertebra on the spine

	inStretch = whether the spine should stretch automatically to follow the Chest
	            of try to maintain a constant length.
	            0 > stretches by spine scale slider
	            1 > stretches to meet Chest controller

	inGuideObjects = an XSI Collection of 10 or 11 guide objects, depending on whether you have a Chest bone.

			> the first 4 objects define the spine path: spineBase, SpineBaseDepth, SpineEndDepth, SpineEnd
			> the next 3 objects define the Left appendage points: LLegStart, LShoulderStart, LShoulderEnd
			> the next 3 objects define the Right appendage points: RLegStart, RShoulderStart, RShoulderEnd
			> the last object is optional, it describes a Chest bone position.  If included, makeTorso will
 			  draw a spine to the end of this position and make a Chest bone between this position and SpineEnd


	inControlType = whether to have square or cube controls for the Hip and Chest.
			0 > square controls
		   	1 > cube controls


	inSpineType  = is the type of Spine and controls used. to use implicit Vertebra controls or not.  If not, polygons are used.

		     0 > make quaternion spine with polygon divisions
  		     1 > make quaternion spine with implicit divisions
		     2 > make skeleton spine

	inSliderPage = where to place the custom parameters for the spine.  If not passed
		       a new parameter set will be made under the spine curve

	inShadowType = the type of shadow rig to constrain to the arm
		   	0 > no shadow
			1 > SI|3D skeleton shadow rig
			2 > XSI  skeleton shadow rig
			3 > Null shadow rig
			4 > Box shadow rig

	inShadowParent = parent of the shadow rig hiearchy.  If empty, no shadow rig will be generated.


	inNegativeScaling = negative scaling on the shoulders.  Negative scaling is useful for having the left and right arm
	                    manipulating symmetrically.  Do do this just call one of the arms with negative scaling.

		0 = No negative Scaling
		1 = Negative scaling on the Right Shoulder
		2 = Negative Scaling on the Left Shoulder



	--------- RETURNS -------------------

	Returns an Torso Object where:

	Torso.UpperBodyParent =  the Upper Body Parent
	Torso.Spine.Curve=  the curve of the spine.
	Torso.HipBone =  is the new Hip icon.
	Torso.Spine.TopVertebra =  The end of the new spine. if a Chest bone was created it will be the icon for this bone, otherwise it will be the last vertebra.
	Torso.REff = The effector of the right shoulder.
	Torso.LEff = The effector of the left shoulder.
	Torso.RSkel = a collection of right shoulder skeleton elements
	Torso.LSkel = a collection of left shoulder skeleton elements
	Torso.Spine.Vertebra = a collection of spine vertebra
	inTorso.Tail = a tail object, created if duplications of the spine base are found
	inTorso.UpperBody = the UpperBody control icon
	inTorso.Hip = the Hip control icon
	inTorso.Chest = the Chest control icon
	inTorso.Hidden = is a collection of Hidden object
	inTorso.Envelope = is a collection of objects to be Enveloped
	inTorso.Shadows = a collection of box shadows

	*/

// Add a push method to the JScript Array Object
// (Array.Push was added in Jscript 5.5 but we cannot rely on this)
var push = function(item){return this[this.length++] = item;}
Array.prototype.push = push;

/*--------------------------------
 Make Torso
--------------------------------*/
function makeTorso(inParent, inNbVertebra, inStretch, inGuideObjects, inControlType, inSpineType, inSliders, inShadowType, inShadowParent, inNegativeScaling){

	////////////////////////////
	// Validate arguments
	////////////////////////////

	//convert collections to objects
	var l_aArgsToConvert = Array(0,8);
	var a;
	for (i = 0; i < l_aArgsToConvert.length; i++)
	{
		a = l_aArgsToConvert[i];
		if(arguments[a]) { arguments[a] = arguments[a](0);}	//extract first object from coll.
	}

	//check for required arguments
	if(inGuideObjects.count!=10 && inGuideObjects.count!=11){ logmessage("makeTorso: guide collection (argument 1) needs 10 or 11 objects. Contains "
	+ inGuideObjects.count + " objects", siError); return;}

	//need parent object
	if(!inParent){ logmessage("makeTorso: required argument 0 is invalid", siError); return;	}

	////////////////////////////
	// Make Torso
	////////////////////////////

	var torso = new Object();

	torso.parent = inParent
	torso.nb = inNbVertebra;
	torso.stretch = inStretch;

	if(inGuideObjects.count == 10){torso.ribCage = 0}
	else{torso.ribCage = 1}

	torso.controlType = inControlType;
	torso.NegativeScaling = inNegativeScaling;
	
	torso.CharacterSetName = "Upper." + "Torso";
    torso.ShadowCharacterSetName = "ShadowUpper.ShadowTorso";

	torso.Hidden = new ActiveXObject("XSI.Collection");
	torso.Envelope = new ActiveXObject("XSI.Collection");


	torso.ShadowType = inShadowType;
	torso.SpineType = inSpineType;

	if(inShadowParent){
		torso.ShadowParent = inShadowParent;
	}
	else{
		torso.ShadowParent = ActiveSceneRoot;
	}

	torso.guides = inGuideObjects;
	torso.model = inGuideObjects(0).model;
	torso.sliders = inSliders;


	torso = getPositions(torso);
	if(!torso){return}

	torso = getScale(torso);
	torso = makeHip(torso);
	torso = makeControls(torso);

	torso = createSpine(torso);
	torso = makeShoulders(torso);

	if(torso.ShadowType >= 1 && torso.ShadowType <= 3){
		torso = makeSkelShadows(torso);
	}
	if(torso.ShadowType > 3){
		torso = makeBoxShadows(torso);
	}

	torso = generateTail(torso);

	torso = HideSetup(torso);

	return torso;
}
/*--------------------------------
 Hide Setup
--------------------------------*/
function HideSetup(inTorso){

	if(inTorso.parent.model.Groups.Item("Hidden"))
	{
		inTorso.HiddenGroup = inTorso.parent.model.Groups.Item("Hidden");
		inTorso.HiddenGroup.AddMember(inTorso.Hidden);
	}
	else
	{
		for(var m = 0;m < inTorso.Hidden.count;m++){
			inTorso.Hidden(m).properties("visibility").viewvis.value = false;
		}
	}

	if(inTorso.parent.model.Groups.Item("Envelope_group")){

		inTorso.envGroup = inTorso.parent.model.Groups.Item("Envelope_group");
		inTorso.envGroup.AddMember(inTorso.Envelope);

	}

	return inTorso;
}
/*--------------------------------
 Get Positions
--------------------------------*/
function getPositions(inTorso){



	inTorso.pos = new Array();
	inTorso.lpos = new Array();
	inTorso.rpos = new Array();
	inTorso.torsoObjs = new Array();

	/*
	   the .pos and .torsoObjs structure runs down the spine and goes
	   spineBase, SpineBaseDepth, SpineEndDepth, ChestBone, SpineEnd

	   if you have no ChestBone, it will double up the SpineEnd like:
 	   spineBase, SpineBaseDepth, SpineEndDepth, SpineEnd, SpineEnd

	   the lpos + rpos arrays run:
	   LegStart, ShoulderStart, ShoulderEnd

	*/

	for(var t=0;t<4;t++){
		inTorso.torsoObjs[t] = inTorso.guides(t)
		inTorso.pos[t] = XSIMath.CreateVector3();
		inTorso.torsoObjs[t].Kinematics.Global.Transform.GetTranslation(inTorso.pos[t]);
	}

	inTorso.torsoObjs[4] = inTorso.guides(3)
	inTorso.pos[4] = XSIMath.CreateVector3();
	inTorso.torsoObjs[4].Kinematics.Global.Transform.GetTranslation(inTorso.pos[4]);

	if (inTorso.ribCage == 1){

		inTorso.torsoObjs[3] = inTorso.guides(10);
		inTorso.pos[3] = XSIMath.CreateVector3();
		inTorso.torsoObjs[3].Kinematics.Global.Transform.GetTranslation(inTorso.pos[3]);
	}


	// get the mirrored markers on the Hip and shoulders.
	// in the order LegStart, ShoulderStart, ShoulderEnd


	for(var t=4;t<7;t++){

		var index = t-4;

		//LEFT SIDE
		inTorso.lpos[index] = XSIMath.CreateVector3();
		inTorso.guides(t).Kinematics.Global.Transform.GetTranslation(inTorso.lpos[index]);

		//RIGHT SIDE
		inTorso.rpos[index] = XSIMath.CreateVector3();
		inTorso.guides(t+3).Kinematics.Global.Transform.GetTranslation(inTorso.rpos[index]);

	}

	// now check if the top of the tip was duplicated out to make a tail.

	var tailSearch = DuplicationSearch(inTorso.torsoObjs[0], inTorso.model)

	inTorso.TailObjs = tailSearch.objs;
	inTorso.TailPos = tailSearch.pos;

	return inTorso;

}
/*--------------------------------
 Duplication Search
--------------------------------*/
function DuplicationSearch(inObj, inModel){


	var lastName = inObj.name

	var searchReturn = new Object();

	searchReturn.pos = new Array();
	searchReturn.objs = new Array();

	var lastChar = lastName.charAt(lastName.length-1);

	// check if there's a number at the end and try to find increments of that number

	if(lastChar/2){
		// we have a number

		var searchString = lastName.slice(0,lastName.length-1)
		for(t=0;t<40;t++){

			lastChar++;

			var searchObj = inModel.FindChild(searchString + lastChar);
			if(!searchObj){return searchReturn}

			searchReturn.pos[t] = XSIMath.CreateVector3();
			searchObj.Kinematics.Global.Transform.GetTranslation(searchReturn.pos[t]);
			searchReturn.objs.push(searchObj);
		}

	}
	else{

		// just search for the same name with 1, 2, ect...

		var lastChar = 1;

		for(t=0;t<40;t++){

			var searchObj = inModel.FindChild(lastName + lastChar);

			if(!searchObj){
				return searchReturn;
			}

			searchReturn.pos[t] = XSIMath.CreateVector3();
			searchObj.Kinematics.Global.Transform.GetTranslation(searchReturn.pos[t]);
			searchReturn.objs.push(searchObj);
			lastChar++;
		}

	}

	return searchReturn;
}
/*--------------------------------
 Make Hip
--------------------------------*/
function makeHip(inTorso){

	// first get the midpoint which is the center of the Hip plate

	var midPos = XSIMath.CreateVector3();

	midPos.Add(inTorso.lpos[0], inTorso.rpos[0]);
	midPos.ScaleInPlace(.5);

	// the Hip center of gravity is 60% towards the base of the spine

	inTorso.HipPos = XSIMath.CreateVector3();
	inTorso.HipPos.LinearlyInterpolate(midPos, inTorso.pos[0], .6);

	// the spine needs to be pointing y+, so find the axis that runs down
	// the spine start is calculated before the hip is finished so we can use the orientation for the hip

	inTorso = getSpineAlignment(inTorso);
	inTorso.BaseTrans.SetTranslation(inTorso.pos[0]);

	//var rotVec = XSIMath.CreateVector3();
	//inTorso.spineTrans.GetRotationXYZAngles(rotVec);

	var trans = XSIMath.CreateTransform();
	trans.SetTranslation(inTorso.HipPos);
	//trans.SetRotationFromXYZAngles(rotVec);

	inTorso.HipBone = inTorso.parent.AddGeometry ("Circle", "NurbsCurve", "HipPlate")
	inTorso.HipBone.Kinematics.Global.Transform = trans;

	inTorso.HipBone.AddProperty("Display Property");
	inTorso.HipBone.properties("display").wirecol.value = 49;

  	var rtOp = ApplyOp("HipIcon", inTorso.HipBone, 0)(0);

	var p1 = XSIMath.MapWorldPositionToObjectSpace (trans, inTorso.lpos[0]);
	var p2 = XSIMath.MapWorldPositionToObjectSpace (trans, inTorso.pos[0]);

	SetValue(rtOp + ".spine_point_x", p2.x, null);
	SetValue(rtOp + ".spine_point_y", p2.y, null);
	SetValue(rtOp + ".spine_point_z", p2.z, null);

	SetValue(rtOp + ".leg_point_x", p1.x, null);
	SetValue(rtOp + ".leg_point_y", p1.y, null);
	SetValue(rtOp + ".leg_point_z", p1.z, null);

	SetValue(rtOp + ".height", 1.3, null);
	SetValue(rtOp + ".indent_height", 0.5, null);
	SetValue(rtOp + ".top_height", 0.4, null);
	SetValue(rtOp + ".socket_height", 0.3, null);
	SetValue(rtOp + ".socket_depth", 0.5, null);
	SetValue(rtOp + ".socket_width", 0.5, null);
	SetValue(rtOp + ".depth", .4, null);
	SetValue(rtOp + ".cap_width", 0.25, null);
	SetValue(rtOp + ".width", 0.7, null);

	inTorso.spineStart = makeNullChild(inTorso.HipBone, inTorso.pos[0], "SpineStart", 49, inTorso.scale);
	inTorso.spineStart.Kinematics.Global.Transform = inTorso.BaseTrans;

	inTorso.Hidden.Add(inTorso.spineStart);
	inTorso.Envelope.Add(inTorso.HipBone);

	return inTorso;

}
/*--------------------------------
 Get Spine Alignment
--------------------------------*/
function getSpineAlignment(inTorso){

	// get the orientation that orthogonal to the world (ie aligned with the axies), but
	// local y+ pointing towards the spine

	var spineVec = XSIMath.CreateVector3();
	spineVec.Sub(inTorso.pos[3], inTorso.pos[0]);

        
	if (inTorso.SpineType == 3){
		spineVec.z = 0;       
	}else if (inTorso.SpineType == 4){
		var vY = XSIMath.CreateVector3();
		var vSN = XSIMath.CreateVector3();
		vY.set(0,1,0);
		vSN.Normalize(spineVec);
		if (vSN.dot(vY)<0.707106781186547){
			spineVec.y = 0; //nearest axis is Z. set Y to 0
		}else{
			spineVec.z = 0;//nearest axis is Y. set Z to 0
		}
	}
            
	//  x+ pointing to the global x, y+ pointing along the spine
	var yPlus = XSIMath.CreateVector3();
	var xPlus = XSIMath.CreateVector3();

	yPlus.Set(0,1,0);
	xPlus.Set(1,0,0);

	inTorso.BaseTrans = RotationFromTwoVectors(xPlus, spineVec, xPlus, yPlus);

	inTorso.TopTrans = XSIMath.CreateTransform();
	inTorso.TopTrans.Copy(inTorso.BaseTrans);

	return inTorso;

}
/*--------------------------------
 Make Controls
--------------------------------*/
function makeControls(inTorso){

	var s = inTorso.scale;



	if (inTorso.controlType == 0){
		inTorso.UpperBody = curveSquare(inTorso.parent, inTorso.HipPos , 2*s, -.1 * s, 253, "UpperBody");
	}
	else{
		inTorso.UpperBody = curveCube(inTorso.parent, inTorso.HipPos , .8*s, .8*s, .8*s, 253, "UpperBody");
	}

	inTorso.UpperBody.Kinematics.Global.Transform = inTorso.BaseTrans;

	SetNeutralPose(inTorso.UpperBody, siSRT,false);
	addMarkingSet(inTorso.UpperBody, 1, 1, null, "Upper");


	if (inTorso.controlType == 0){
		inTorso.Hip = curveSquare(inTorso.UpperBody, inTorso.HipPos , 1.5*s, 0, 770, "Hip");
		inTorso.Chest = curveSquare(inTorso.UpperBody, inTorso.pos[3] , 2*s, 0, 253, "Chest");
	}
	else{
		inTorso.Hip = curveCube(inTorso.UpperBody, inTorso.HipPos , .6*s, .6*s, .6*s, 770, "Hip");
		inTorso.Chest = curveCube(inTorso.UpperBody, inTorso.pos[3] , .8*s, .8*s, .8*s, 253, "Chest");
	}


	inTorso.TopTrans.SetTranslation(inTorso.pos[3]);


	inTorso.Hip.Kinematics.Global.Transform = inTorso.BaseTrans;
	inTorso.Chest.Kinematics.Global.Transform = inTorso.TopTrans;


	// having a spineEnd is important to make sure the transform down the spine is y+ even when the controlers aren't

	inTorso.spineEnd = makeNullChild(inTorso.Chest, inTorso.pos[3], "SpineEnd", 49, inTorso.scale);
	inTorso.spineEnd.Kinematics.Global.Transform = inTorso.TopTrans;

	//don't add if generating skeleton spine (it will be deleted)
	if(inTorso.SpineType != 2){	inTorso.Hidden.Add(inTorso.spineEnd);}

	addMarkingSet(inTorso.Hip, 1, 1, null, "Lower");
	addMarkingSet(inTorso.Chest, 1, 1, null, "Upper");

	SetNeutralPose(inTorso.Chest, siSRT,false);

	//inTorso.UpperBody.AddChild(inTorso.Hip);
	inTorso.Hip.AddChild(inTorso.HipBone);


	return inTorso;
}
/*--------------------------------
 Create Spine
--------------------------------*/
function createSpine(inTorso){

	// first make the depth controls for the spine.
	inTorso.HipDepth = makeNullChild(inTorso.Hip, inTorso.pos[1], "HipDepth", 770, inTorso.scale * 1.9);
	inTorso.ChestDepth = makeNullChild(inTorso.Chest, inTorso.pos[2], "ChestDepth", 253, inTorso.scale * 1.9);

    // set them to rings
    inTorso.HipDepth.primary_icon = 2;
    inTorso.ChestDepth.primary_icon = 2;

	addMarkingSet(inTorso.ChestDepth, 1, 0, null, inTorso.CharacterSetName);
	addMarkingSet(inTorso.HipDepth, 1, 0, null, inTorso.CharacterSetName);

	if (inTorso.ribCage == 0){
		inTorso.Spine = makeSpine(inTorso.model, inTorso.HipBone, inTorso.nb, inTorso.SpineType,  inTorso.stretch, inTorso.spineStart ,
			        inTorso.spineEnd, inTorso.HipDepth, inTorso.ChestDepth, null, inTorso.sliders ,inTorso.ShadowType, inTorso.ShadowParent,
			        "SpineVertebra", inTorso.CharacterSetName, inTorso.ShadowCharacterSetName);
	}
	else{
		inTorso.Spine = makeSpine(inTorso.model, inTorso.HipBone, inTorso.nb, inTorso.SpineType,  inTorso.stretch, inTorso.spineStart ,
				inTorso.spineEnd, inTorso.HipDepth, inTorso.ChestDepth, inTorso.torsoObjs[4], inTorso.sliders ,inTorso.ShadowType, inTorso.ShadowParent,
		        "SpineVertebra", inTorso.CharacterSetName, inTorso.ShadowCharacterSetName);
	}

	// if you have a skeleton spine you don't need all these extra icons
	if (inTorso.SpineType == 2){
		inTorso.UpperBody.AddChild(inTorso.HipBone);
		DeleteObj("B:" +inTorso.Hip);
		DeleteObj("B:" + inTorso.Chest);
	}

	return inTorso;
}
/*--------------------------------
 Make Shoulders
--------------------------------*/
function makeShoulders(inTorso)	{

	var normalPlane = XSIMath.CreateVector3();
	normalPlane.Set(0,1,0);


	// if you have negative scaling draw the arm on the opposite side of the x plane.
	refresh();

	if (inTorso.NegativeScaling == 1){
		inTorso.rroot = DrawMirrorBone(inTorso.Spine.TopVertebra, inTorso.rpos, 1, 2, normalPlane);
		inTorso.lroot = inTorso.Spine.TopVertebra.Add2DChain(inTorso.lpos[1], inTorso.lpos[2], normalPlane, 3);
		AlignFirstBone(inTorso.lroot);
	}
	else if(inTorso.NegativeScaling == 2){
		inTorso.rroot = inTorso.Spine.TopVertebra.Add2DChain(inTorso.rpos[1], inTorso.rpos[2], normalPlane, 3);
		AlignFirstBone(inTorso.rroot);
		inTorso.lroot = DrawMirrorBone(inTorso.Spine.TopVertebra, inTorso.lpos, 1, 2, normalPlane);
	}
	else{
		inTorso.rroot = inTorso.Spine.TopVertebra.Add2DChain(inTorso.rpos[1], inTorso.rpos[2], normalPlane, 3);
		AlignFirstBone(inTorso.rroot);
		inTorso.lroot = inTorso.Spine.TopVertebra.Add2DChain(inTorso.lpos[1], inTorso.lpos[2], normalPlane, 3);
		AlignFirstBone(inTorso.lroot);
	}

	inTorso.RSkel = GetSkeleton(inTorso.rroot);
	inTorso.LSkel = GetSkeleton(inTorso.lroot);

	setChainScale(inTorso.RSkel, inTorso.scale * .3);
	setChainScale(inTorso.LSkel, inTorso.scale * .3);


	inTorso.RSkel(1).AddProperty("Display Property");
	inTorso.RSkel(1).properties("display").wirecol.value = 489;
	inTorso.LSkel(1).AddProperty("Display Property");
	inTorso.LSkel(1).properties("display").wirecol.value = 489;


	inTorso.LSkel(0).shadow_icon.value = 4;
	inTorso.RSkel(0).shadow_icon.value = 4;

	addMarkingSet(inTorso.RSkel(1), 0, 1, null, inTorso.CharacterSetName);
	addMarkingSet(inTorso.LSkel(1), 0, 1, null, inTorso.CharacterSetName);

	inTorso.Hidden.Add(inTorso.RSkel(2));
	inTorso.Hidden.Add(inTorso.LSkel(2));

	inTorso.Envelope.Add(inTorso.RSkel(1));
	inTorso.Envelope.Add(inTorso.LSkel(1));

	inTorso.REff = inTorso.RSkel(2);
	inTorso.LEff = inTorso.LSkel(2);

	inTorso.RSkel(0).Name = "RShoulderRoot";
	inTorso.LSkel(0).Name = "LShoulderRoot";

	inTorso.RSkel(1).Name = "RShoulder";
	inTorso.LSkel(1).Name = "LShoulder";

	inTorso.RSkel(2).Name = "RShoulderEff";
	inTorso.LSkel(2).Name = "LShoulderEff";


	return inTorso;

}
/*--------------------------------
 Draw Mirror Bone
-------------------------------*/
function DrawMirrorBone(inParent, inPositionArray, inStartIndex, inEndIndex, inNormalPlane){


	var mirrorPos = new Array();

	var mirrorPlane = XSIMath.CreateVector3();
	mirrorPlane.set(-1,1,1);

	for(var i = inStartIndex; i<inEndIndex + 1; i++){

		mirrorPos[i] = XSIMath.CreateVector3();

		mirrorPos[i].x = inPositionArray[i].x * mirrorPlane.x;
		mirrorPos[i].y = inPositionArray[i].y * mirrorPlane.y;
		mirrorPos[i].z = inPositionArray[i].z * mirrorPlane.z;
	}

	var tempRoot = inParent.Add2DChain(mirrorPos[inStartIndex], mirrorPos[inStartIndex + 1], inNormalPlane, 3)
	AlignFirstBone(tempRoot);

	for(var i = inStartIndex + 2; i<inEndIndex + 1; i++){
		tempRoot.AddBone(mirrorPos[i], 2, "bone");
	}

	var newRoot = DuplicateSymmetry("B:" + tempRoot, true, false, 1, 0, 0, 0, false)(0);
	DeleteObj("B:" + tempRoot);
	inParent.AddChild(newRoot);

	return(newRoot);

}

/*--------------------------------
 Generate Tail
-------------------------------*/
function generateTail(inTorso){

	if(inTorso.TailObjs.length < 3)
	{
		if(inTorso.TailObjs.length > 0)	{logmessage("MakeTorso: Not enough guide points to generate a tail: 3 or more guide objects are needed.", siWarning);}
		return inTorso;
	}

	var nbDivisions = inTorso.TailObjs.length + 2

	// need a collection of objects for makeTail

	var tailCollection = new ActiveXObject("XSI.Collection");
	tailCollection.AddItems(inTorso.TailObjs.join());

	var tailShadowType = inTorso.ShadowType;
	if(tailShadowType > 3){tailShadowType = 4}

	inTorso.Tail = MakeTail(inTorso.HipBone, tailCollection, nbDivisions, tailShadowType, inTorso.ShadowStart,
	                        inTorso.CharacterSetName, inTorso.ShadowCharacterSetName);

	if(inTorso.TailObjs.length > 2 && tailShadowType!= 0){

		inTorso.ShadowStart.AddChild(inTorso.Tail.ShadowStart)
		inTorso.ShadowEnds.Add(inTorso.Tail.ShadowEnds(0));
		inTorso.Shadows.AddItems(inTorso.Tail.Shadows);
	}

	return inTorso;

}
/*--------------------------------
 Make Skel Shadows
-------------------------------*/
function makeSkelShadows(inTorso){


	if (inTorso.ShadowType == 1 || inTorso.ShadowType == 2|| inTorso.ShadowType == 8){
		var ncolor = 805;
	}
	else{
		var ncolor = 381;
	}

	inTorso.ShadowStart = makeNullChild(inTorso.ShadowParent, inTorso.HipPos, "UpperBody", ncolor, inTorso.scale * 2);
	inTorso.ShadowStart.AddChild(inTorso.Spine.ShadowStart);

	// the hip controller is deleted if you have a skeleton spine, so in that case use the upperbody
	if ( inTorso.SpineType == 2){

		inTorso.ShadowStart.Kinematics.AddConstraint("Pose", inTorso.UpperBody, true);
	}
	else{
		inTorso.ShadowStart.Kinematics.AddConstraint("Pose", inTorso.Hip, true);
	}

	inTorso.RSkelShadow = makeShadowChain(inTorso.RSkel, inTorso.Spine.ShadowEnds(0), inTorso.ShadowType==1 /*SI3D*/, inTorso.scale* .3, inTorso.ShadowType==3 /*NULL*/, inTorso.ShadowCharacterSetName);
	inTorso.LSkelShadow = makeShadowChain(inTorso.LSkel, inTorso.Spine.ShadowEnds(0), inTorso.ShadowType==1 /*SI3D*/, inTorso.scale* .3, inTorso.ShadowType==3 /*NULL*/, inTorso.ShadowCharacterSetName);

	inTorso.ShadowEnds = new ActiveXObject("XSI.Collection");
	inTorso.Shadows = new ActiveXObject("XSI.Collection");

	inTorso.Shadows.AddItems(inTorso.Spine.Shadows);
	inTorso.Shadows.AddItems(inTorso.RSkelShadow.Shadows);
	inTorso.Shadows.AddItems(inTorso.LSkelShadow.Shadows);

	inTorso.ShadowEnds.Add(inTorso.Spine.ShadowEnds(0));
	inTorso.ShadowEnds.Add(inTorso.RSkelShadow.ShadowEnds(0));
	inTorso.ShadowEnds.Add(inTorso.LSkelShadow.ShadowEnds(0));

	return inTorso;

}
/*--------------------------------
 Make Box Shadows
-------------------------------*/
function makeBoxShadows(inTorso){

	var wideScale = inTorso.scale * .25;


	inTorso.Shadows = new ActiveXObject("XSI.Collection");
	inTorso.ShadowEnds = new ActiveXObject("XSI.Collection");

	inTorso.ChestMarker = inTorso.Spine.TopVertebra.AddNull("ChestTop")

	var newTrans = inTorso.Spine.TopVertebra.Kinematics.Global.Transform;
	newTrans.SetTranslation(inTorso.pos[4])
	inTorso.ChestMarker.Kinematics.Global.Transform = newTrans;


	// width should be 80% of the torso span
	var toroSpan = XSIMath.Createvector3();
	toroSpan.Sub(inTorso.lpos[2], inTorso.rpos[2]);

	var ChestWide = toroSpan.Length()/2 * .8;
	var ChestThin = ChestWide * .6;

	var ChestShadow = makeTConnector(inTorso.ShadowParent, "Chest", inTorso.Spine.TopVertebra,  inTorso.lroot, inTorso.ChestMarker, ChestWide, ChestThin, 55, false, .5, 1);

	var HipSpan = XSIMath.Createvector3();
	HipSpan.Sub(inTorso.lpos[0], inTorso.rpos[0]);
	var HipWide = HipSpan.Length()/2 * 1.3;
	var HipThin = HipWide * .6;


	// there are no marker objects for the side or bottom of the Hip within the torso so make them
	// and get the bottom position with a simple heuristic


	inTorso.SideMarker = inTorso.HipBone.AddNull("SideMarker")
	inTorso.BottomMarker = inTorso.HipBone.AddNull("BottomMarker")

	var t1 = XSIMath.CreateTransform();
	t1.SetTranslation(inTorso.lpos[0]);
	inTorso.SideMarker.Kinematics.Global.Transform = t1;

	var BottomPoint = XSIMath.CreateVector3();
	BottomPoint.LinearlyInterpolate (inTorso.lpos[0], inTorso.rpos[0], .5);
	BottomPoint.y = BottomPoint.y - HipWide/2;

	var t2 = XSIMath.CreateTransform();
	t2.SetTranslation(BottomPoint);
	inTorso.BottomMarker.Kinematics.Global.Transform = t2;

	var HipShadow = makeTConnector(inTorso.ShadowParent, "UpperBody", inTorso.spineStart, inTorso.SideMarker, inTorso.BottomMarker, HipWide, HipThin, 55, true, .5, 1.2);


	// if we have negative scaling on the shoulders we need to invert the rotation angles on the shoulder boxes.
	//	1 = Negative scaling on the Right Shoulder
	//	2 = Negative Scaling on the Left Shoulder


	if(inTorso.NegativeScaling == 0){
		var lRotate = -45;
		var rRotate = 45;
	}
	else if(inTorso.NegativeScaling == 1){
		var lRotate = -45;
		var rRotate = -45;
	}

	else if(inTorso.NegativeScaling == 2){
		var lRotate = 45;
		var rRotate = -5;
	}


	var lShoulderShadow = makeBoxConnector(ChestShadow, "LShoulder", inTorso.LSkel(1), inTorso.LSkel(2), wideScale, 90, 90, .85, false, lRotate);
	var rShoulderShadow = makeBoxConnector(ChestShadow, "RShoulder", inTorso.RSkel(1), inTorso.RSkel(2), wideScale, 90, 90, .85, false, rRotate);


	HipShadow.AddChild(inTorso.Spine.Shadows(0));
	inTorso.Spine.Shadows(inTorso.Spine.Shadows.count-1).AddChild(ChestShadow);
	ChestShadow.AddChild(lShoulderShadow);
	ChestShadow.AddChild(rShoulderShadow);

	// tune the spine boxes so the size lines up from the width to the depth.
	TuneSpineBoxes(inTorso.Spine.Shadows,  HipWide, HipThin, ChestWide, ChestThin)

	inTorso.Shadows.Add(HipShadow);
	inTorso.Shadows.AddItems(inTorso.Spine.Shadows);
	inTorso.Shadows.Add(ChestShadow);
	inTorso.Shadows.Add(lShoulderShadow);
	inTorso.Shadows.Add(rShoulderShadow);

	inTorso.ShadowStart = HipShadow;
	inTorso.ShadowEnds.Add(ChestShadow);
	inTorso.ShadowEnds.Add(rShoulderShadow);
	inTorso.ShadowEnds.Add(lShoulderShadow);
	
	for(var s=0;s<inTorso.Shadows.count;s++){
		addMarkingSet(inTorso.Shadows(s), 0, 1, null, inTorso.ShadowCharacterSetName);
	}
	
	addMarkingSet(inTorso.ShadowStart, 1, 1, null, inTorso.ShadowCharacterSetName);
	
	return inTorso;

}
/*--------------------------------
 Make T Connector
--------------------------------*/
function makeTConnector(inParent, inName, inBase,inSideObj, inTopObj, inWidth, inDepth, inSideAngle, inSplit, inSplitPerc, inSplitOffset){

	var shadowBox = inParent.AddGeometry("Cube", "MeshSurface", inName);
	var trans = inBase.Kinematics.Global.Transform;

	shadowBox.Kinematics.Global.Transform = trans;

	shadowBox.Kinematics.AddConstraint("Pose", inBase);

	var boxOp = ApplyOp ("Connector_T", shadowBox+","+ inBase +","+ inSideObj +","+ inTopObj)(0);

	SetValue(boxOp + ".bottomWidth", inWidth, null);
	SetValue(boxOp + ".bottomDepth", inDepth, null);
	SetValue(boxOp + ".branchRotation", inSideAngle, null);
	SetValue(boxOp + ".topDepth", inDepth, null);
	SetValue(boxOp + ".splitPerc", inSplitPerc, null);
	SetValue(boxOp + ".splitOffset", inSplitOffset, null);

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
function makeBoxConnector(inParent, inName, inStartObj, inEndObj, inScale, inTopRot, inBottomRot, inTaper, inSplit, inSpin){


	var shadowBox = inParent.AddGeometry("Cube", "MeshSurface", inName);

	var trans = inStartObj.Kinematics.Global.Transform;

	shadowBox.Kinematics.Global.Transform = trans;

	var shallowScale = inScale * .6;


	shadowBox.Kinematics.AddConstraint("Pose", inStartObj);


	var boxOp = ApplyOp ("Connector_Box", shadowBox+","+ inStartObj +","+ inEndObj)(0);

	SetValue(boxOp + ".topOffset_z", inTopRot, null);
	SetValue(boxOp + ".bottomOffset_z", inBottomRot, null);
	SetValue(boxOp + ".topWidth", inScale, null);
	SetValue(boxOp + ".topDepth", shallowScale, null);
	SetValue(boxOp + ".bottomWidth", inScale * inTaper, null);
	SetValue(boxOp + ".bottomDepth", shallowScale * inTaper, null);
	SetValue(boxOp + ".topOffset_x", inSpin, null);



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
 Tune Spine Boxes
--------------------------------*/
function TuneSpineBoxes(inShadows, inStartWide, inStartThin, inEndWide, inEndThin){


	var widthIncrement = (inEndWide - inStartWide)/inShadows.count;
	var thinIncrement = (inEndThin - inStartThin)/inShadows.count;


	var currentWidth = inStartWide;
	var currentThin = inStartThin;

	for(var b = 0; b < inShadows.count; b++)
	{
		SetValue(inShadows(b) + ".polymsh.BoxConnector.topWidth", currentWidth, null);
		SetValue(inShadows(b) + ".polymsh.BoxConnector.topDepth", currentThin, null);

		var currentWidth = inStartWide + widthIncrement * b;
		var currentThin = inStartThin + thinIncrement * b;

		SetValue(inShadows(b) + ".polymsh.BoxConnector.bottomWidth", currentWidth, null);
		SetValue(inShadows(b) + ".polymsh.BoxConnector.bottomDepth", currentThin, null);
	}
}
/*--------------------------------
 Set Chain Scale
-------------------------------*/
function setChainScale(inSkel, inScale){

	for(var f = 0; f < inSkel.count; f++){

		inSkel(f).shadow_icon.value  = 1;
		inSkel(f).primary_icon.value  = 0;

		if(f==0 || f==inSkel.count-1){
			inSkel(f).shadow_scaleX.value  = inScale * .2;
			inSkel(f).radius.value  = inScale * .2;
			inSkel(f).shadow_scaleZ.value  = inScale * .2;
		}
		else{
			inSkel(f).radius.value  = inScale;
			inSkel(f).shadow_scaleZ.value  = inScale;
		}
	}
}
/*--------------------------------
 Make Null Child
--------------------------------*/
function makeNullChild(inParent, inPosition, inName, inColor, inScale){

	var trans = XSIMath.CreateTransform();

	var returnNull = inParent.AddNull(inName);
	trans.SetTranslation(inPosition);
	returnNull.Kinematics.Global.Transform = trans;
	returnNull.AddProperty("Display Property")
	returnNull.properties("display").wirecol.value = inColor;

	returnNull.size = inScale *.07;

	return returnNull;

}
/*--------------------------------
 Get Scale
--------------------------------*/
function getScale(inTorso){

	// get the scale from the top of the Hip to the top of the Chest.

	var checkDist = XSIMath.CreateVector3();
	checkDist.sub(inTorso.pos[0] , inTorso.pos[4]);

	inTorso.scale = checkDist.Length()/1.25;

	return inTorso;

}
/*--------------------------------
 Curve Square
--------------------------------*/
function curveSquare(inParent, inPos, inWidth, inYoffset, inColor, inName){

	var width = inWidth/2;

	// p is positive, N is negative

	var pp = XSIMath.CreateVector3();
	var pN = XSIMath.CreateVector3();
	var Np = XSIMath.CreateVector3();
	var NN = XSIMath.CreateVector3();

	pp.set(width,inYoffset,width);
	pN.set(width,inYoffset,width*-1);
	Np.set(width*-1,inYoffset,width);
	NN.set(width*-1,inYoffset,width*-1);

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

/*------------------------------
 Rotation from Two Vectors
------------------------------*/
function RotationFromTwoVectors(inVector1, inVector2, inDominantAxis, inSecondaryAxis){

	var cp = XSIMath.CreateVector3();
	cp.Cross(inDominantAxis, inVector1);

	var ang = inDominantAxis.Angle(inVector1);
	var T1 = XSIMath.CreateTransform();

	T1.SetRotationFromAxisAngle (cp, ang)

	inSecondaryAxis.MulByTransformationInPlace (T1);

	var projected = ProjectOnPlane(inVector2, inVector1);
	var ang2 = inSecondaryAxis.Angle(projected);


	var cp2 = XSIMath.CreateVector3();
	cp2.Cross(inSecondaryAxis, projected)

	var Neg = XSIMath.CreateVector3();
	axisCheck1= XSIMath.CreateVector3();
	axisCheck2 = XSIMath.CreateVector3();

	Neg.Negate(inVector1);
	axisCheck1.Sub(cp2,inVector1);
	axisCheck2.Sub(cp2,Neg);

	if (axisCheck2.Length() < axisCheck1.Length() ){ang2 = ang2 * -1}

	var T2 = XSIMath.CreateTransform();
	T2.SetRotationFromAxisAngle (inDominantAxis, ang2)

	T2.MulInPlace(T1);


	return T2;

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
 Closest Orthogonal Rotation
--------------------------------*/
function closestOrthogonalRotation(inTrans){

	// return a rotation matching the orthanoal axies
	// of inOrthagnoal, but closest to inRot.


	var q = XSIMath.CreateQuaternion();
	inTrans.GetRotationQuaternion(q)

	q.w = border(q.w);
	q.x = border(q.x);
	q.y = border(q.y);
	q.z = border(q.z);


	var returnTrans = XSIMath.CreateTransform();

	returnTrans.SetRotationFromQuaternion(q);

	return returnTrans;

}
/*--------------------------------
 Border Quat Value
--------------------------------*/
function border(inQ){
	if(inQ < .383 && inQ > -.383){
		inQ = 0;
	}
	else if (inQ > .383){
		inQ = 1;
	}
	else{
		inQ = -1;
	}
	return inQ;
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













