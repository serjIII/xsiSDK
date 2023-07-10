////////////////////////////////////////
// Make Hand Rigging Component
// misner Dec 2003
// javier: modified May 2005 : claw control


	/*

	--------- PARAMETERS -------------------


	inParent = the object to make the new hand under
	inFingerGuides = an XSI Collection of guides for finger guide starting objects.  Given a guide object in the collection like "LRing1"
                         make hand will search for "LRing2", "LRing3", ect until it can't find more joints.  At least
	 		 one extra joint per root needs to be found in the scene for a bone to be drawn.

	inBladeGuides = an XSI Collection of blade objects showing the orientation of the fingers being drawn.
		       Needs to be in the same order as the Root Guides.

	inHandGuides = a two object XSI Collection in the order: start of hand bone, end of hand bone.


	inPrefix = the prefix used to name new objects when making the new head.  Example "L", "R", ect...

	inFingerType:
			0 = Fingers are 2D chains and the preference angles orient with Finger blades.
			1 = Fingers are 3D chains and preference angles are the pose of the guide.


	inShadowType = the type of shadow rig to constrain to the arm
		   	0 > no shadow
			1 > SI|3D skeleton shadow rig
			2 > XSI  skeleton shadow rig			
			3 > Null shadow rig
			4 > Box shadow rig
			9 > SI|3D skeleton, no shadow fingers
			10 > XSI skeleton, no shadow fingers
			11 > Null, no shadow fingers
			12 > Box, no shadow fingers			

	inShadowParent = parent of the shadow rig hiearchy.  If empty, no shadow rig will be generated.


	--------- RETURNS -------------------

	Returns a Hand Object where:

	Hand.Root = is the Root of the hand chain
	Hand.Eff = is the effector of the hand chain
	Hand.FingerRoots = is a collection of Finger Roots
	Hand.Hidden = is a collection of Hidden object
	Hand.Envelope = is a collection of objects to be Enveloped
	Hand.Shadows = a collection of box shadows


	*/

//******************************************************************************
// String Constants (used to translate)
//******************************************************************************
var IDS_MAKE_HAND_TITLE			= 1169;

// Add a push method to the JScript Array Object
// (Array.Push was added in Jscript 5.5 but we cannot rely on this)
var push = function(item){return this[this.length++] = item;}
Array.prototype.push = push;

/*--------------------------------
 Make Hand
--------------------------------*/
function makeHand(inParent, inFingerGuides, inBladeGuides, inHandGuides, inPrefix, inFingerType, inShadowType, inShadowParent, inNegativeScaling){

 	var hand;

	//check for required arguments
	if(!inParent(0)) { logmessage("makeHand: argument 0 is invalid"); return hand; }

	hand = new Object;

	//because arghandlers are used, input objects are collections. If we are expecting a single object get the first object in the collection.
	hand.parent 		= inParent(0);
	hand.model 		= inFingerGuides(0).model;
	hand.Prefix 		= inPrefix;
	hand.FingerType 	= inFingerType;

    hand.CharacterSetName = "Upper." + hand.Prefix + "_Hand";
    hand.ShadowCharacterSetName = "ShadowUpper.Shadow" + inPrefix + "_Hand";

	hand.FingerGuides 	= inFingerGuides
	hand.BladeGuides 	= inBladeGuides;
	hand.HandGuides 	= inHandGuides;

	hand.ShadowType 	= inShadowType;
	hand.ShadowParent 	= inShadowParent(0);

	hand.NegativeScaling = inNegativeScaling;

	hand.Hidden = new ActiveXObject("XSI.Collection");
	hand.Envelope = new ActiveXObject("XSI.Collection");

	hand = findMarkers(hand);
	if(!hand){return}

	hand = drawHand(hand);
	hand = setNaming(hand);

	hand = scaleHand(hand);
        
    hand = setClawControl(hand)
        
	//shadow fingers is value of 8
	var makefingers	= hand.ShadowType < 8;
	hand.ShadowType = hand.ShadowType & 7;

	if(hand.ShadowType >= 1 && hand.ShadowType <= 3){
		hand = makeSkelShadows(hand,makefingers);
	}
	if(hand.ShadowType > 3){
		hand = makeBoxShadows(hand,makefingers);
	}

	hand.FingerRoots = new ActiveXObject("XSI.Collection");

	for(var fr = 0; fr < hand.Finger.length; fr++){
		hand.FingerRoots.Add(hand.Finger[fr](0));
	}

	hand = HideSetup(hand);
	hand = makeSliders(hand);

	hand = HandPoses(hand);

	return hand;
}
/*--------------------------------
 Hide Setup
--------------------------------*/
function HideSetup(inHand){


	if(inHand.parent.model.Groups.Item("Hidden")){

		inHand.HiddenGroup = inHand.parent.model.Groups.Item("Hidden");
		inHand.HiddenGroup.AddMember (inHand.Hidden);

	}
	else{
		for(var m = 0;m < inHand.Hidden.count;m++){
			inHand.Hidden(m).properties("visibility").viewvis.value = false;
		}
	}

	if(inHand.parent.model.Groups.Item("Envelope_group")){

		inHand.envGroup = inHand.parent.model.Groups.Item("Envelope_group");
		inHand.envGroup.AddMember(inHand.Envelope);

	}

	return inHand;
}
/*--------------------------------
 Get UI
--------------------------------*/
function getUI(inPrefix, inFingerType)
{

	var uiReturn = new Object();


	var SceneRoot =  Application.ActiveProject.ActiveScene.Root
	var mysliders = SceneRoot.AddProperty("Custom_parameter_list",0,"Make_Hand");
	var Prefix = mysliders.AddParameter2("Prefix", siString , "R", -1000 , 10000, null, null, 8, 1, "Finger Prefix", "Finger Prefix");
	var FingerType = mysliders.AddParameter2("FingerType", siInt4 , 0, 0 , 1, null, null, 8, 4, "Finger Type", "Finger Type");


	if(inPrefix){Prefix.value = inPrefix}
	if(inFingerType){FingerType.value = inFingerType}

	try{
		inspectobj( mysliders, "", XSIUtils.Translate( IDS_MAKE_HAND_TITLE, "XSISCRIPTS" ), siModal );
	}
	catch(e){
		deleteobj(mysliders);
		logmessage ( e.description, siError);
		return;
	}

	deleteobj(mysliders);

	uiReturn.prefix= Prefix.value
	uiReturn.type = FingerType.value

	return uiReturn;

}
/*--------------------------------
 Find Markers
--------------------------------*/
function findMarkers(inHand){


	inHand.markers = new Array();
	inHand.blades = new Array();
	inHand.foundKeyWords = new Array();



	for(var g=0;g< inHand.FingerGuides.count; g++){


		//iNand.FingerGuides = inFingerGuides
		//hand.BladeGuides = inBladeGuides;
		//hand.HandGuides = inHandGuides;

		var finger = DuplicationObjectSearch(inHand.FingerGuides(g), inHand.FingerGuides(g).model);

		if(finger.length < 2 ){
			logmessage("Not enought guide elements found to make finger for guide: " + inHand.FingerGuides(g));
			continue;
		}


		inHand.markers.push(finger);
		inHand.blades.push(inHand.BladeGuides(g));

		// now we have a guide object named something like: "LPinky1", and we want to extract a keywork like "Pinky"

		var keyword = GetKeyWord(inHand.FingerGuides(g).name, inHand.Prefix);

		inHand.foundKeyWords.push(keyword);


	}


	inHand.handRoot = inHand.HandGuides(0);
	inHand.handEnd = inHand.HandGuides(1);


	return inHand;

}
/*--------------------------------
 Get Key Word
--------------------------------*/
function GetKeyWord(inString, inPrefix){

	// this function trys to strip of the prefix and any numbers at the end of
	// the input strip to give a good Keyword for later naming.


	// first chop any matching prefix

	var len = inPrefix.length;

	var check1 = inString.substr(0,len);

	if(check1 == inPrefix){
		var string = inString.substr(len);
	}
	else{
		var string = inString;
	}

	// now chop off any number on the last character

	var lastChar = string.charAt(string.length-1);
	if(lastChar/2){
		string = string.substr(0, string.length -1);
	}

	return string;

}
/*--------------------------------
 Get Blade
--------------------------------*/
function getBlade(inWord, inPrefix, inModel){

	var bladeSuffix = "_FingerBlade";

	var returnBlade = inModel.FindChild(inPrefix + inWord + bladeSuffix);
	return returnBlade;

}
/*--------------------------------
 Get Marker
--------------------------------*/
function getMarker(inWord, inPrefix, inModel){

	var returnMarkers = new Array();

	// scan for the first two Fingers

	for(var m=1;m<3;m++){

		returnMarkers[m-1] = inModel.FindChild(inPrefix + inWord + m);

		if(!returnMarkers[m-1]){
			logmessage(inPrefix + inWord + m + " not found in model: " + inModel);
			return;
		}

	}

	// now you know the Finger is valid, just keep adding
	// Fingers until you don't find a marker

	for(var m=3;m<30;m++){

		var makerCheck = inModel.FindChild(inPrefix + inWord + m);

		if(makerCheck){
				returnMarkers[m-1] = 	makerCheck	;
		}
		else{
				return returnMarkers;
		}
	}

	return returnMarkers;
}

/*--------------------------------
 Duplication Object Search
--------------------------------*/
function DuplicationObjectSearch(inObj, inModel){


	// this version searches only for objects and not positions

	var lastName = inObj.name

	var searchReturn = new Array();

	searchReturn.push(inObj);

	var lastChar = lastName.charAt(lastName.length-1);

	// check if there's a number at the end and try to find increments of that number

	if(lastChar/2){
		// we have a number

		var searchString = lastName.slice(0,lastName.length-1)
		for(t=0;t<40;t++){

			lastChar++;

			var searchObj = inModel.FindChild(searchString + lastChar);
			if(!searchObj){return searchReturn}

			searchReturn.push(searchObj);
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

			searchReturn.push(searchObj);
			lastChar++;
		}

	}

	return searchReturn;
}
/*--------------------------------
 Draw Hand
--------------------------------*/
function drawHand(inHand){

	inHand.Finger = new Array();
	inHand.positions = new Array();

	inHand.mirrorPlane = XSIMath.CreateVector3();
	inHand.mirrorPlane.set(-1,1,1);

	var normalPlane = XSIMath.CreateVector3();
	normalPlane.Set(0,1,0);

	// first make the Fingers
	for(var h = 0; h<inHand.markers.length;h++){

		inHand.positions[h] = new Array();
		var chainNormal = getNormalPlane(inHand.handRoot, inHand.blades[h], inHand.mirrorPlane, inHand.NegativeScaling);

		for(var ma = 0; ma < inHand.markers[h].length;ma++){
			inHand.positions[h][ma] = XSIMath.CreateVector3();
			inHand.markers[h][ma].Kinematics.Global.Transform.GetTranslation(inHand.positions[h][ma]);
			if(inHand.NegativeScaling == 1){inHand.positions[h][ma] = ApplyMirror(inHand.positions[h][ma], inHand.mirrorPlane)};
		}

		var Root = inHand.parent.Add2DChain(inHand.positions[h][0], inHand.positions[h][1], chainNormal, 3);

		for(var ma = 2; ma < inHand.markers[h].length;ma++){
			Root.AddBone (inHand.positions[h][ma], 2, "newBone");
		}


		inHand.Finger[h] = GetSkeleton(Root);

		if (inHand.FingerType == 1){
			// convert the bones to 3D chains
			 inHand.Finger[h](1).Properties("Kinematic Joint").Parameters("chntype").value = 2;

			for(var f = 2; f<inHand.Finger[h].count - 1;f++){
			 		inHand.Finger[h](f).Properties("Kinematic Joint").Parameters("chntype").value = 0;
			}
		}

		if(inHand.FingerType == 1){
		// set the preangles to rotate on the plane of the blades.
			for(var f = 1; f<inHand.Finger[h].count - 1;f++){
				// keep the Fingers rotating forward as positive like the old rig.
				inHand.Finger[h](f).Properties("Kinematic Joint").Parameters("prefrotx").value = 0;
				inHand.Finger[h](f).Properties("Kinematic Joint").Parameters("prefroty").value = 0;
				inHand.Finger[h](f).Properties("Kinematic Joint").Parameters("prefrotz").value = 3;
			}
		}
	}


	// next make the hand bone

	inHand.bone = new Array;

	inHand.bone[0] = XSIMath.CreateVector3();
	inHand.bone[1] = XSIMath.CreateVector3();

	inHand.handRoot.Kinematics.Global.Transform.GetTranslation(inHand.bone[0]);
	inHand.handEnd.Kinematics.Global.Transform.GetTranslation(inHand.bone[1])

	if(inHand.NegativeScaling == 1){
		inHand.bone[0] = ApplyMirror(inHand.bone[0], inHand.mirrorPlane);
		inHand.bone[1] = ApplyMirror(inHand.bone[1], inHand.mirrorPlane);
	}

	// get the hand bones to rotate down z negative
	chainNormal.NegateInPlace();
	inHand.Root = inHand.parent.Add2DChain(inHand.bone[0], inHand.bone[1], chainNormal, 1);
	AlignFirstBone(inHand.Root);	

	inHand.skel = GetSkeleton(inHand.Root);

	// now do the parenting
	for(var h = 0; h< inHand.markers.length;h++){
		inHand.skel(1).AddChild(inHand.Finger[h](0));
	}

	if(inHand.NegativeScaling == 1){inHand = MirrorHand(inHand)};


	inHand.Eff = inHand.skel(2);


	return inHand;
}
/*--------------------------------
setClawControl
--------------------------------*/
function setClawControl(inHand){//inHandBone,inFingers,inClaw, inScale){

	if (!inHand.Eff){return;}

	var xf = inHand.Eff.Kinematics.global.Transform

        var inHandBone = inHand.skel(1)
	if (!inHand.scale){inHand.scale = 1}
        

		inHand.Claw = inHandBone.AddPrimitive("Cube");
        addMarkingSet(inHand.Claw, null, 1, null, inHand.CharacterSetName);
		inHand.Claw.length = inHand.scale
		inHand.Claw.name = inHandBone.name+"_grab"
		inHand.Claw.Kinematics.Global.Transform = xf;
		SetExpr(inHand.Claw.parameters("posx"))
		SetExpr(inHand.Claw.parameters("posy"))
		SetExpr(inHand.Claw.parameters("posz"))
		SetExpr(inHand.Claw.parameters("rotx"),0)
		SetExpr(inHand.Claw.parameters("roty"),0)
		
	

	if (!inFingers){
		var inFingers =  new ActiveXObject("XSI.Collection")
		var fFingers = inHandBone.findchildren("","bone")
		inFingers.additems(fFingers)
		inFingers.remove(inHandBone)
		//logmessage (inFingers)
	
	}

	SetNeutralPose(inFingers)
        
	Cclaw= new ActiveXObject("XSI.Collection")
	Cclaw.add(inHand.Claw.parameters("rotz"))
	Cpcrotz = new ActiveXObject("XSI.Collection")

	for (var i=0;i<inFingers.count;i++){
		
		inFingers(i).parameters("rotz").addFCurve()
		Cpcrotz.add(inFingers(i).parameters("pcrotz"))

	}
	
    // apply the claw operator
    var rotDir = -1;

    var op = AddCustomOp( "RIG_grabOp", Cpcrotz, Cclaw, "grabOp" );
	SetValue(op  + ".Direction", rotDir, null);

    return inHand;
}

/*--------------------------------
 AlignZ
 Generate a rotation that is z-axis aligned with the chain normal
 and has no z rotation. This give proper root alignment for 
 finger curl along without arbitrary z rotation on the root.
 -------------------------------*/
function AlignZ(inVecNormal)
{

   var vctX = XSIMath.CreateVector3();
   var vctY = XSIMath.CreateVector3();
   var vctZ = XSIMath.CreateVector3();
   var vctEulers = XSIMath.CreateVector3();   
   
   vctZ.Copy(inVecNormal);
   
   var dLen;
   vctZ.NormalizeInPlace();
   
   // Following is equivalent to: vctY.SetCross( vctZ, MainZaxis )
   vctY.X = vctZ.Y;
   vctY.Y = -vctZ.X;
   vctY.Z = 0.0;
   
   // can determine rotation as long as input vector is not
   // aligned with either the main Z axis or main -Z axis.
   // Otherwise return identity rotation.
   if( ( dLen = vctY.LengthSquared() ) > 1e-9 )
   {
      vctY.ScaleInPlace( 1.0 / Math.sqrt( dLen ) );
      vctX.Cross( vctY, vctZ );

      var Rot = XSIMath.CreateRotation();   
      Rot.SetFromXYZAxes(vctX, vctY, vctZ);
      
      //set the z rotation to zero

      Rot.GetXYZAngles( vctEulers );
      vctEulers.Z = 0;
      vctEulers.ScaleInPlace( XSIMath.RadiansToDegrees(1) );
   }
   
   return vctEulers;
}

/*--------------------------------
 Apply Mirror
-------------------------------*/
function ApplyMirror(inPos, inMirror){

	inPos.x = inPos.x * inMirror.x;
	inPos.y = inPos.y * inMirror.y;
	inPos.z = inPos.z * inMirror.z;

	return inPos;
}
/*--------------------------------
 Mirror Hand
-------------------------------*/
function MirrorHand(inHand){
	var newRoot = DuplicateSymmetry("B:" + inHand.Root, true, false, 1, 0, 0, 0, false)(0);
	DeleteObj("B:" + inHand.Root);

	inHand.parent.AddChild(newRoot);

	inHand.Root = newRoot;
	inHand.skel = GetSkeleton(inHand.Root);

	var children = inHand.skel(1).Children;

	inHand.Finger = new Array();
	for(c = 0; c < children.count;c++){

		inHand.Finger[c] = GetSkeleton(children(c));

	}

	return inHand;
}


/*--------------------------------
 Scale Hand
-------------------------------*/
function scaleHand(inHand){

	// figure out the average Finger scale based on the first joint
	var sum;
	var dist = XSIMath.CreateVector3();
	for(var h = 0; h<inHand.markers.length;h++){

		dist.Sub(inHand.positions[h][1],inHand.positions[h][0]);
		sum =+ dist.Length();
	}

	var averageDist = sum/inHand.markers.length;

	// the bone dist is in default in decimeters, but typically you want Finger
	// chains a little smaller.

	var boneScale = averageDist * 4;
	inHand.scale = boneScale;


	for(jo = 0; jo < inHand.Finger.length;jo++){
		setChainScale(inHand.Finger[jo], boneScale);
	}

	setChainScale(inHand.skel, boneScale * 2);

	return inHand;
}
/*--------------------------------
 Set Naming
-------------------------------*/
function setNaming(inHand){

	var keyWords = inHand.foundKeyWords;

	// name Fingers
	for(jo = 0; jo < inHand.Finger.length;jo++){


		inHand.Finger[jo](0).Name = inHand.Prefix + keyWords[jo] + "Root";
		inHand.Finger[jo](inHand.Finger[jo].count - 1).Name = inHand.Prefix + inHand.foundKeyWords[jo] + "Effector"

		inHand.Hidden.Add(inHand.Finger[jo](0));
		inHand.Hidden.Add(inHand.Finger[jo](inHand.Finger[jo].count - 1));


		for(var f = 1; f<inHand.Finger[jo].count - 1;f++){
			inHand.Finger[jo](f).Name = inHand.Prefix + inHand.foundKeyWords[jo] + f;

			inHand.Envelope.Add(inHand.Finger[jo](f));
			addMarkingSet(inHand.Finger[jo](f), null, 1, null, inHand.CharacterSetName);
		}
	}

	inHand.Envelope.Add(inHand.skel(1));
	addMarkingSet(inHand.skel(1), null, 1, null, inHand.CharacterSetName)

	inHand.Hidden.Add(inHand.skel(0));
	inHand.Hidden.Add(inHand.skel(2));


	inHand.skel(0).Name = inHand.Prefix + "Hand" + "Root";
	inHand.skel(1).Name = inHand.Prefix + "Hand";
	inHand.skel(2).Name = inHand.Prefix + "Hand" + "Effector";

	return inHand;
}

/*--------------------------------
 Hand Poses
-------------------------------*/
function HandPoses(inHand){

	// the spread pose is the default
	// the marking is the rotation on our finger bones which is the same group we are enveloping
	var channels = new Array();

	for(e = 0; e < inHand.Envelope.Count; e++){
		channels.push(inHand.Envelope(e) + ".kine.local.rotx");
		channels.push(inHand.Envelope(e) + ".kine.local.roty");
		channels.push(inHand.Envelope(e) + ".kine.local.rotz");
	}

	var channelString = channels.join(",");

	var defaultPose = StoreAction (inHand.Root, channelString, 1, inHand.Prefix + "Hand_Spread", true, 1, 5);

	// rotate the fingers 19 degrees abd the thumb 12

	// rotate all the fingers 15 degrees
	

	var rotAmount = 20;
	
	for(jo = 0; jo < inHand.Finger.length;jo++){
		for(var f = 1; f<inHand.Finger[jo].count - 1;f++){
			
			var handRot = inHand.Finger[jo](f).Kinematics.Local.Parameters("rotz").value;

			inHand.Finger[jo](f).Kinematics.Local.Parameters("rotz").value = handRot + rotAmount;
						
		}
	}

	StoreAction (inHand.Root, channelString, 1, inHand.Prefix + "Hand_Relaxed", true, 1, 5);

	rotAmount = 40	
	
	// rotate all the fingers another 15 degrees

	for(jo = 0; jo < inHand.Finger.length;jo++){
		for(var f = 1; f<inHand.Finger[jo].count - 1;f++){

			inHand.Finger[jo](f).Kinematics.Local.Parameters("rotz").value += rotAmount;
		}
	}


	StoreAction (inHand.Root, channelString, 1, inHand.Prefix + "Hand_Fist", true, 1, 5);

 	ApplyAction(defaultPose);

	return inHand;
}
/*--------------------------------
 Make Skel Shadows
-------------------------------*/
function makeSkelShadows(inHand, in_bMakeFingers){

	inHand.ShadowEnds = new ActiveXObject("XSI.Collection");
	inHand.Shadows = new ActiveXObject("XSI.Collection");

	// first trace the main bone
	inHand.HandShadow = makeShadowChain(inHand.skel, inHand.ShadowParent, inHand.ShadowType==1 /*SI3D*/, inHand.scale * .8, inHand.ShadowType==3 /*NULL*/, inHand.ShadowCharacterSetName);
	inHand.ShadowStart = inHand.HandShadow.ShadowStart;
	
	inHand.Shadows.AddItems(inHand.HandShadow.Shadows);

	// next the fingers
	inHand.FingerShadows = new Array();

	for(jo = 0; in_bMakeFingers && jo < inHand.Finger.length;jo++){
		inHand.FingerShadows[jo] = makeShadowChain(inHand.Finger[jo], inHand.HandShadow.ShadowEnds(0), inHand.ShadowType==1 /*SI3D*/, inHand.scale * .8, inHand.ShadowType==3 /*NULL*/, inHand.ShadowCharacterSetName);
		inHand.Shadows.AddItems(inHand.FingerShadows[jo].Shadows);
		inHand.ShadowEnds.Add(inHand.FingerShadows[jo].ShadowEnds(0));
	}

	return inHand;

}
/*--------------------------------
 Make Box Shadows
-------------------------------*/
function makeBoxShadows(inHand, in_bMakeFingers){

	var boxScale = inHand.scale * 2.1;

	inHand.Shadows = new ActiveXObject("XSI.Collection");
	inHand.ShadowEnds = new ActiveXObject("XSI.Collection");

	var taper = .8;

	var boxShadow = makeShadowBox(inHand.ShadowParent, inHand.Prefix + "Hand", inHand.skel(1), inHand.skel(2), boxScale, 90, 90, taper, true)
	inHand.Shadows.Add(boxShadow);
	inHand.ShadowStart = boxShadow;
	addMarkingSet(inHand.ShadowStart, 0, 0, null, inHand.CharacterSetName);

	var currentParent = boxShadow;

	var boxScale = inHand.scale * .5;

	var taperPerc = .6;
	for(jo = 0; in_bMakeFingers && jo < inHand.Finger.length;jo++){

		var taper = 1 - ((1-taperPerc)/(1+inHand.Finger[jo].count))

		for(var f = 2; f<inHand.Finger[jo].count;f++){


			inHand.Finger[jo](f).Name = inHand.Prefix + inHand.foundKeyWords[jo] + f;

			var boxName = inHand.Prefix + inHand.foundKeyWords[jo] + f;
			var boxShadow = makeShadowBox(currentParent, boxName, inHand.Finger[jo](f-1), inHand.Finger[jo](f), boxScale, 90, 90, taper, null)
			currentParent = boxShadow;

			boxScale = boxScale * taper;
			inHand.Shadows.Add(boxShadow);


			if(f == inHand.Finger[jo].count - 1){
				inHand.ShadowEnds.Add(boxShadow);
			}
		}
	}
	
	for(var s=0;s<inHand.Shadows.count;s++){
		addMarkingSet(inHand.Shadows(s), 0, 1, null, inHand.ShadowCharacterSetName);
	}

	return inHand;
}

/*--------------------------------
 Make Shadow Box
--------------------------------*/
function makeShadowBox(inParent, inName, inStartObj, inEndObj, inScale, inTopRot, inBottomRot, inTaper, inSplit){

	var shadowBox = inParent.AddGeometry("Cube", "MeshSurface", inName);

	var trans = inStartObj.Kinematics.Global.Transform;

	shadowBox.Kinematics.Global.Transform = trans;

	var shallowScale = inScale * .3;

	shadowBox.Kinematics.AddConstraint("Pose", inStartObj);

	var boxOp = ApplyOp ("Connector_Box", shadowBox+","+ inStartObj +","+ inEndObj)(0);

	SetValue(boxOp + ".topOffset_z", inTopRot, null);
	SetValue(boxOp + ".bottomOffset_z", inBottomRot, null);
	SetValue(boxOp + ".topWidth", shallowScale, null);
	SetValue(boxOp + ".topDepth",inScale , null);
	SetValue(boxOp + ".bottomWidth", shallowScale  * inTaper, null);
	SetValue(boxOp + ".bottomDepth", inScale * inTaper, null);

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
 Make Sliders
-------------------------------*/
function makeSliders(inHand){


	var handsliders = inHand.Root.AddProperty("Custom_parameter_list",1, inHand.Prefix + "hand_sliders");

	var minUI, maxUI;

	for(jo = 0; jo < inHand.Finger.length;jo++){


		for(var f = 1; f<inHand.Finger[jo].count - 1;f++){
			AddProxyParam ( handsliders, inHand.Finger[jo](f) + ".kine.local.rotz", null);
			var index = handsliders.Parameters.count - 1

			EditParameterDefinition(handsliders.Parameters(index), inHand.foundKeyWords[jo] + f, 5, -10000, 10000, minUI, maxUI, inHand.foundKeyWords[jo] + f, inHand.foundKeyWords[jo] + f);
		}
	}

	return inHand;
}
/*--------------------------------
 Set Chain Scale
-------------------------------*/
function setChainScale(inSkel, inScale){


		for(var f = 0; f < inSkel.count; f++){

			inSkel(f).shadow_icon.value  = 1;
			inSkel(f).primary_icon.value  = 0;

			if(f==0 || f==inSkel.count-1){

				var bsize = inScale * .5;
				if(bsize < .01){bsize = .01};

				inSkel(f).shadow_scaleX.value  = bsize;
				inSkel(f).radius.value  = bsize;
				inSkel(f).shadow_scaleZ.value  = bsize;
			}
			else{
				inSkel(f).radius.value  = inScale;
				inSkel(f).shadow_scaleZ.value  = inScale;
			}
		}
}
/*--------------------------------
 Get Normal Plane
--------------------------------*/
function getNormalPlane(inRoot, inBlade, inMirror, inNegativeScaling){

	// the blade will show us the points forward and up along the chain.
	// but we need the cross product of these to get the normal

	var curve = inBlade.ActivePrimitive.Geometry//.Curves(0);

	var gtrans = inBlade.Kinematics.Global.Transform;

	points = new Array();

	for (var p = 0; p <4; p++){

		points[p] = curve.points(p).position
		points[p] = XSIMath.MapObjectPositionToWorldSpace(gtrans, points[p]);

		if (inNegativeScaling == 1){
			points[p] = ApplyMirror(points[p], inMirror);
		}
	}

	var vecUp = XSIMath.CreateVector3();
	var vecForward = XSIMath.CreateVector3();

	vecForward.Sub(points[2], points[1]);
	vecUp.Sub(points[3], points[1 ]);

	var returnNormal = XSIMath.CreateVector3();

	returnNormal.Cross(vecForward, vecUp);

	// keep the Fingers rotating forward as positive like the old rig.
	returnNormal.NegateInPlace();
	returnNormal.NormalizeInPlace();

	return returnNormal;
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