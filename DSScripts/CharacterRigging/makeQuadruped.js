////////////////////////////////////////
// Make Quadrupend
///////////////////////////
// originally proto-typed:
// July 2001 Michael Isner
//
// re-engineered using a component SDK
/// Dec 2003 Michael Isner
//
// Quadruped return object contains:
//
// Quadruped.UI					: all dialog box/command argument values
//	 Quadruped.UI.TorsoType
//	 Quadruped.UI.TorsoStretch
//	 Quadruped.UI.TorsoDivisions
//	 Quadruped.UI.IconType
//	 Quadruped.UI.MakeBelly 
//	 Quadruped.UI.BellySlide
//	 Quadruped.UI.BellyCenterPercentage 
//	 Quadruped.UI.HeadType 
//	 Quadruped.UI.HeadStretch
//	 Quadruped.UI.HeadDivisions
//	 Quadruped.UI.Ears
//	 Quadruped.UI.MakeTail 
//	 Quadruped.UI.TailDivisions 
//	 Quadruped.UI.FrontRoll 
//	 Quadruped.UI.FrontRollDivisions 
//	 Quadruped.UI.BackRoll 
//	 Quadruped.UI.BackRollDivisions 
//	 Quadruped.UI.ShadowType 
//
// Quadruped.Model
// Quadruped.GlobalSRT
//
// Quadruped.Sliders
// Quadruped.HiddenGroup 
// Quadruped.EnvGroup
//
// Quadruped.Torso
// Quadruped.Tail 
// Quadruped.Head
// Quadruped.Belly
// Quadruped.ChestBone
// Quadruped.UpperBody
// Quadruped.SpineCurve
// Quadruped.HipBone
//
// Quadruped.RShoulderEff 
// Quadruped.RLeg
// Quadruped.RFoot
// Quadruped.RDogLeg
//
// Quadruped.LShoulderEff
// Quadruped.LLeg
// Quadruped.LFoot
// Quadruped.LDogLeg 
//
// Quadruped.ShadowModel
// Quadruped.ShadowHiddenGroup
// Quadruped.ShadowEnvGroup 
// Quadruped.ShadowGlobalSRT



///////////////

//******************************************************************************
// String Constants (used to translate)
//******************************************************************************
var IDS_MAKE_QUADRUPED_TITLE		= 1170;

/*--------------------------------
 make Quadruped
--------------------------------*/
function makeQuadruped(inTorsoType, inTorsoStretch, inTorsoDivisions, inIconType, inMakeBelly,
inBellySlide, inBellyCenterPercentage, inHeadType, inHeadStretch, inHeadDivisions, inEars,
inMakeTail, inTailDivisions, inFrontRoll, inFrontRollDivisions, inBackRoll, inBackRollDivisions,
inShadowType, inCreateShadowKeySet, inInspectUI){


	var quadruped = new Object();
	quadruped.ModelString = "Quadruped_Guide";

	quadruped = getGuide(quadruped);
	if(!quadruped)
	{
		//maybe the old guide is being used, try again

		quadruped = new Object();
		quadruped.ModelString = "Quadruped_PropGuide";
		quadruped = getGuide(quadruped);		
		if(!quadruped)
		{
			logmessage("makeQuadruped: No Quadruped Guide Found", siError); 
		}
		else	     
		{
			logmessage ("This quadruped guide is not compatible with MakeQuadruped (XSI v4.0), using CreateRigFromQuadruped", siWarning);	
			CreateRigFromQuadruped();					
		}
		return;
	}

	if(!inInspectUI){
		quadruped.UI = get_UI();
		if(quadruped.UI){ quadruped.UI.CreateShadowKeySet = false; }
	}
	else{

		quadruped.UI = new Object();

		quadruped.UI.TorsoType = inTorsoType;
		quadruped.UI.TorsoStretch = inTorsoStretch;
		quadruped.UI.TorsoDivisions = inTorsoDivisions;
		quadruped.UI.IconType = inIconType;
		quadruped.UI.MakeBelly = inMakeBelly;
		quadruped.UI.BellySlide = inBellySlide;
		quadruped.UI.BellyCenterPercentage = inBellyCenterPercentage;
		quadruped.UI.HeadType = inHeadType;
		quadruped.UI.HeadStretch = inHeadStretch;
		quadruped.UI.HeadDivisions = inHeadDivisions;
		quadruped.UI.Ears = inEars;
		quadruped.UI.MakeTail = inMakeTail;
		quadruped.UI.TailDivisions = inTailDivisions;

		quadruped.UI.FrontRoll = inFrontRoll;
		quadruped.UI.FrontRollDivisions = inFrontRollDivisions;
		quadruped.UI.BackRoll = inBackRoll;
		quadruped.UI.BackRollDivisions = inBackRollDivisions;

		quadruped.UI.ShadowType = inShadowType;
		quadruped.UI.CreateShadowKeySet = inCreateShadowKeySet;
	}

	if(!quadruped.UI){ logmessage("makeQuadruped: cancelled"); return; }

	// If we are creating from the UI, display a progress bar
	var oProgBar = XSIUIToolkit.ProgressBar;
	oProgBar.Maximum = 11;
	oProgBar.Caption = "Make Quadruped";
	oProgBar.Visible = !inInspectUI;

	oProgBar.StatusText = "Creating Initial Hierarchy";
	quadruped = initialHierarchy(quadruped);
	oProgBar.Increment(); if(oProgBar.CancelPressed) { Cancel(quadruped); return;}

	oProgBar.StatusText = "Creating Torso";
	quadruped = generateTorso(quadruped);
	oProgBar.Increment(); if(oProgBar.CancelPressed) { Cancel(quadruped); return;}	
	
	oProgBar.StatusText = "Creating Hind Legs";
	quadruped = generateDogLegs(quadruped);
	oProgBar.Increment(); if(oProgBar.CancelPressed) { Cancel(quadruped); return;}	

	oProgBar.StatusText = "Creating Front Legs";
	quadruped = generateLegs(quadruped);
	oProgBar.Increment(); if(oProgBar.CancelPressed) { Cancel(quadruped); return;}	

	oProgBar.StatusText = "Creating Tail";
	quadruped = generateTail(quadruped);
	oProgBar.Increment(); if(oProgBar.CancelPressed) { Cancel(quadruped); return;}	

	oProgBar.StatusText = "Creating Head";
	quadruped = generateHead(quadruped);
	oProgBar.Increment(); if(oProgBar.CancelPressed) { Cancel(quadruped); return;}	

	oProgBar.StatusText = "Creating Belly";
	quadruped = generateBelly(quadruped);
	oProgBar.Increment(); if(oProgBar.CancelPressed) { Cancel(quadruped); return;}	

	oProgBar.StatusText = "Creating Character Key Set";
	quadruped = generateCharacterKeySet(quadruped);
	oProgBar.Increment(); if(oProgBar.CancelPressed) { Cancel(quadruped); return;}	

	oProgBar.StatusText = "Applying Synoptic";
	quadruped = applySynoptic(quadruped);
	oProgBar.Increment(); if(oProgBar.CancelPressed) { Cancel(quadruped); return;}

	oProgBar.StatusText = "Creating Default Pose";
	quadruped = defaultPose(quadruped);
	oProgBar.Increment(); if(oProgBar.CancelPressed) { Cancel(quadruped); return;}	

	oProgBar.visible = false;

	return quadruped;
}

/*--------------------------------
 Cancel
 - deletes the rig if the make 
 command is cancelled
--------------------------------*/
function Cancel(inQuadruped){

	logmessage("makeQuadruped: cancelled");	
	DeleteObj( "B:"+inQuadruped.model ); 
	return;
	
}

/*--------------------------------
 Get Guide
--------------------------------*/
function getGuide(inQuad){

	// first check your selection for whether its model contains the string.
	inQuad.GuideModel = ActiveSceneRoot.FindChild(inQuad.ModelString );

	if(!inQuad.GuideModel){return}

	// get the scale across the arm span.

	var checkDist = XSIMath.CreateVector3();
	inQuad.keyWords = new Array("RibCageEnd", "SpineBase");
	inQuad.pos = findMarkers(inQuad.keyWords, inQuad.GuideModel);

	checkDist.sub(inQuad.pos[0] , inQuad.pos[1]);
	inQuad.Scale = checkDist.Length()/1.25;

	return inQuad;

}
/*--------------------------------
 Find Markers
--------------------------------*/
function findMarkers(inKeyWords, inModel){

	var positions = new Array();

	for(var t=0;t<inKeyWords.length;t++){

		var obj = inModel.FindChild(inKeyWords[t]);

		if(!obj){
			logmessage(obj + " not found in model: " + inModel, 2);
			return;
		}

		positions[t] = XSIMath.CreateVector3();
		obj.Kinematics.Global.Transform.GetTranslation(positions[t]);
	}

	return positions;
}
/*--------------------------------
 Initial Hierarchy
--------------------------------*/
function initialHierarchy(inQuad){

	inQuad.Model = ActiveSceneRoot.AddModel();
	inQuad.Model.name = "Quadruped";

	// make the global SRT or god null
	var zeroPos = XSIMath.CreateVector3();

	inQuad.GlobalSRT = makeRigIcon(inQuad.Model, 4, zeroPos.x, zeroPos.y, zeroPos.z, inQuad.Scale*.2, inQuad.Scale*.2, inQuad.Scale*.2, 893, "GlobalSRT");
    addMarkingSet(inQuad.GlobalSRT, 1, 1, 0, "Quadruped");

	inQuad.Sliders = inQuad.Model.AddProperty("Custom_parameter_list",0,"Controls");
	var layout = inQuad.Sliders .PPGLayout;
	//Set help id and path
    layout.SetAttribute( siUIHelpFile, "<FactoryPath>/Doc/<DocLangPref>/xsidocs.chm::/animtoolbar55.htm" );
	

	var aEmptyRef = new Array();		
	inQuad.HiddenGroup = inQuad.Model.AddGroup(aEmptyRef);
	inQuad.EnvGroup = inQuad.Model.AddGroup(aEmptyRef);

	inQuad.HiddenGroup.name = "hidden";
	inQuad.EnvGroup.name = "envelope_group";

	inQuad.HiddenGroup.Parameters("viewvis").value = 0;

		if(inQuad.UI.ShadowType != 0){

 	 	inQuad.ShadowModel = ActiveSceneRoot.AddModel();

		inQuad.ShadowHiddenGroup = inQuad.ShadowModel.AddGroup(aEmptyRef);
		inQuad.ShadowEnvGroup = inQuad.ShadowModel.AddGroup(aEmptyRef);

		inQuad.ShadowHiddenGroup.name = "hidden";
		inQuad.ShadowEnvGroup.name = "envelope_group";

		inQuad.ShadowHiddenGroup.Parameters("viewvis").value = 0;

		switch (inQuad.UI.ShadowType ){

		  	 case 1: //SI3D
		  	 case 2: //XSI		  	 
		  	 	inQuad.ShadowModel.name = "Quadruped_Skeleton";
		  	 	inQuad.ShadowGlobalSRT = makeRigIcon(inQuad.ShadowModel, 7, zeroPos.x, zeroPos.y, zeroPos.z, inQuad.Scale*.2, inQuad.Scale*.2, inQuad.Scale*.2, 805, "GlobalSRT");
			 break

			 case 3:
		  	 	inQuad.ShadowModel.name = "Quadruped_Null";
		  	 	inQuad.ShadowGlobalSRT = makeRigIcon(inQuad.ShadowModel, 6, zeroPos.x, zeroPos.y, zeroPos.z, inQuad.Scale*.2, inQuad.Scale*.2, inQuad.Scale*.2, 380, "GlobalSRT");
		  	 break

		 	 default:
		  	 	inQuad.ShadowModel.name = "Quadruped_Box";
		  	 	inQuad.ShadowGlobalSRT = makeRigIcon(inQuad.ShadowModel, 2, zeroPos.x, zeroPos.y, zeroPos.z, inQuad.Scale*.2, inQuad.Scale*.2, inQuad.Scale*.2, 479, "GlobalSRT");
		  	 break

		}

        addMarkingSet(inQuad.ShadowGlobalSRT, 1, 1, 0, "ShadowQuadruped");
		inQuad.ShadowGlobalSRT.Kinematics.AddConstraint("Pose", inQuad.GlobalSRT, true);

	}

	return inQuad;
}
/*--------------------------------
 Generate Torso
--------------------------------*/
function generateTorso(inQuad){


	var singleKeywords = new Array("SpineBase","SpineHipDepth","SpineChestDepth","RibCageEnd");
	var mirrorKeywords = new Array("Femur", "ShoulderStart", "Shoulder");

	var guides = new ActiveXObject("XSI.Collection");
	for(var i =0;i<4;i++){

		var item = inQuad.GuideModel.FindChild(singleKeywords[i]);
		guides.add(item);
	}

	for(var i =0;i<3;i++){
		var item = inQuad.GuideModel.FindChild("L" + mirrorKeywords[i]);
		guides.add(item);
	}

	for(var i =0;i<3;i++){
		var item = inQuad.GuideModel.FindChild("R" + mirrorKeywords[i]);
		guides.add(item);
	}

	inQuad.Torso = makeTorso(inQuad.GlobalSRT , inQuad.UI.TorsoDivisions, inQuad.UI.TorsoStretch, guides,
	inQuad.UI.IconType, inQuad.UI.TorsoType, inQuad.Sliders,inQuad.UI.ShadowType, inQuad.ShadowGlobalSRT, 0)


	inQuad.ChestBone = inQuad.Torso.Spine.TopVertebra

	inQuad.UpperBody = inQuad.Torso.UpperBody
	inQuad.SpineCurve = inQuad.Torso.Spine.Curve
	inQuad.HipBone = inQuad.Torso.HipBone
	inQuad.RShoulderEff = inQuad.Torso.REff
	inQuad.LShoulderEff= inQuad.Torso.LEff


	return inQuad;
}
/*--------------------------------
 Generate Legs
--------------------------------*/
function generateLegs(inQuad){

	if(inQuad.UI.ShadowType == 5 || inQuad.UI.ShadowType == 7){
		var LegShadowType = 1;
	}
	else{
		var LegShadowType = inQuad.UI.ShadowType;
	}

	if(inQuad.Torso.ShadowEnds){
		var RShadowEnd = inQuad.Torso.ShadowEnds(1);
		var LShadowEnd = inQuad.Torso.ShadowEnds(2);
	}
	else{var LShadowEnd = null ; var RShadowEnd = null}


	// first find the leg objects from the guide

	var legItems = Array("Shoulder", "Ulna", "Claw1");
	var lObjs = new ActiveXObject("XSI.Collection");
	var rObjs = new ActiveXObject("XSI.Collection");

	for(var i =0;i<2;i++){
		var lobj = inQuad.GuideModel.FindChild("L" + legItems[i]);
		var robj = inQuad.GuideModel.FindChild("R" + legItems[i]);
		lObjs.add(lobj);
		rObjs.add(robj);
	}

	var lobj = inQuad.GuideModel.FindChild("FL" + legItems[2]);
	var robj = inQuad.GuideModel.FindChild("FR" + legItems[2]);

	lObjs.add(lobj);
	rObjs.add(robj);


	if(!inQuad.UI.FrontRoll){inQuad.UI.FrontRollDivisions = 0}

	inQuad.LLeg = makeLeg(inQuad.GuideModel, inQuad.LShoulderEff , "L", lObjs, 0, inQuad.UI.FrontRollDivisions, LegShadowType, LShadowEnd);
	inQuad.RLeg = makeLeg(inQuad.GuideModel, inQuad.RShoulderEff , "R", rObjs, 0, inQuad.UI.FrontRollDivisions, LegShadowType, RShadowEnd);


	var footItems = Array("Pivot", "PivotRight", "PivotLeft", "Claw");

	// ~~~~~~~~~~~~~~make left foot~~~~~~~~~~~~~~~~~

	if(inQuad.LLeg.ShadowEnds){
		var LShadowEnd = inQuad.LLeg.ShadowEnds(0);
	}
	else{var LShadowEnd = null}

	var lFeet = new ActiveXObject("XSI.Collection");
	for(var i =0;i<3;i++){
		var litem = inQuad.GuideModel.FindChild("FL" + footItems[i]);
		lFeet.add(litem);
	}
	for(var i=1;i<5;i++){
		var litem = inQuad.GuideModel.FindChild("FL" + footItems[3] + i);
		if(!litem){break}
		lFeet.add(litem);
	}

	inQuad.LFoot = makeFoot(inQuad.GuideModel, inQuad.GlobalSRT,"L", "Left", lFeet, inQuad.Sliders, 0 , inQuad.UI.ShadowType, LShadowEnd);

	inQuad.LLeg.Eff.AddChild(inQuad.LFoot.Root);
	inQuad.LLeg.Eff.Kinematics.AddConstraint("Position", inQuad.LFoot.BaseGuide , false);



	// ~~~~~~~~~~~~~~make right foot~~~~~~~~~~~~~~~~~

	if(inQuad.RLeg.ShadowEnds){
		var RShadowEnd = inQuad.RLeg.ShadowEnds(0);
	}
	else{var RShadowEnd = null}


	var rFeet = new ActiveXObject("XSI.Collection");
	for(var i =0;i<3;i++){
		var ritem = inQuad.GuideModel.FindChild("FR" + footItems[i]);
		rFeet.add(ritem);
	}
	for(var i=1;i<5;i++){
		var ritem = inQuad.GuideModel.FindChild("FR" + footItems[3] + i);
		if(!ritem){break}
		rFeet.add(ritem);
	}

	inQuad.RFoot = makeFoot(inQuad.GuideModel, inQuad.GlobalSRT,"R", "Right", rFeet, inQuad.Sliders, 0 , inQuad.UI.ShadowType, RShadowEnd);

	inQuad.RLeg.Eff.AddChild(inQuad.RFoot.Root);
	inQuad.RLeg.Eff.Kinematics.AddConstraint("Position", inQuad.RFoot.BaseGuide , false);


	return inQuad;

}
/*--------------------------------
 Generate Dog Legs
--------------------------------*/
function generateDogLegs(inQuad){


	if(!inQuad.UI.BackRoll){inQuad.UI.BackRollDivisions = 0}


	var keyWords = Array("Femur", "Tibia", "Metarsal", "Pivot", "PivotRight", "PivotLeft", "HindClaw");


	// left leg

	var litems = new ActiveXObject("XSI.Collection");

	var litem = inQuad.GuideModel.FindChild("L" + keyWords[0]);
	litems.add(litem);

	for(var i =1;i<6;i++){

		var litem = inQuad.GuideModel.FindChild("BL" + keyWords[i]);
		litems.add(litem);
	}
	for(var i=6;i<12;i++){
		var num = i - 5;

		var litem = inQuad.GuideModel.FindChild("BL" + keyWords[6] + num);
		if(!litem){break}

		litems.add(litem);
	}

	inQuad.LDogLeg = makeDogLeg(inQuad.GuideModel, inQuad.HipBone, inQuad.GlobalSRT, litems, "BL", "BLeft", inQuad.Sliders,
	inQuad.UI.BackRollDivisions ,inQuad.UI.ShadowType, inQuad.Torso.ShadowStart);




	// right leg

	var ritems = new ActiveXObject("XSI.Collection");

	var ritem = inQuad.GuideModel.FindChild("R" + keyWords[0]);
	ritems.add(ritem);

	for(var i =1;i<6;i++){

		var ritem = inQuad.GuideModel.FindChild("BR" + keyWords[i]);
		ritems.add(ritem);
	}
	for(var i=6;i<12;i++){
		var num = i - 5;

		var ritem = inQuad.GuideModel.FindChild("BR" + keyWords[6] + num);
		if(!ritem){break}
		ritems.add(ritem);
	}

	inQuad.RDogLeg = makeDogLeg(inQuad.GuideModel, inQuad.HipBone, inQuad.GlobalSRT, ritems, "BR", "BRight", inQuad.Sliders,
	inQuad.UI.BackRollDivisions, inQuad.UI.ShadowType, inQuad.Torso.ShadowStart);


	return inQuad;

}
/*--------------------------------
  Generate Tail
--------------------------------*/
function generateTail(inQuad){


	if(inQuad.UI.MakeTail == 1){

		var tailObjs = new ActiveXObject("XSI.Collection");

		tailObjs.add(inQuad.GuideModel  + ".TailStart");
		tailObjs.add(inQuad.GuideModel  + ".TailStartDepth");
		tailObjs.add(inQuad.GuideModel  + ".TailEndDepth");
		tailObjs.add(inQuad.GuideModel  + ".TailEnd");

		inQuad.Tail = MakeTail(inQuad.HipBone, tailObjs, inQuad.UI.TailDivisions, inQuad.UI.ShadowType, inQuad.Torso.ShadowStart,
		                        "Lower.Tail", "ShadowLower.ShadowTail");
	}

	return inQuad;

}
/*--------------------------------
  Generate Head
--------------------------------*/
function generateHead(inQuad){

	var headObjs = new ActiveXObject("XSI.Collection");

	headObjs.add(inQuad.GuideModel + ".RibCageEnd");
	headObjs.add(inQuad.GuideModel  + ".Neck");
	headObjs.add(inQuad.GuideModel  + ".Head");

	if(inQuad.UI.Ears){

		var Ears = new ActiveXObject("XSI.Collection");

		var REar = inQuad.GuideModel.FindChild("REar1");
		var LEar = inQuad.GuideModel.FindChild("LEar1");

		if(REar && LEar){
			Ears.add(REar);
			Ears.add(LEar);
		}
	}


	if(inQuad.Torso.ShadowEnds){
		var ShadowEnd = inQuad.Torso.ShadowEnds(0);
	}
	else{var ShadowEnd = null}


	inQuad.Head = MakeHead(inQuad.ChestBone, headObjs, "", inQuad.UI.HeadType, 1, inQuad.UI.HeadDivisions, inQuad.UI.HeadStretch,
	inQuad.Sliders, Ears, inQuad.UI.ShadowType , ShadowEnd)

	return inQuad;
}
/*--------------------------------
  Generate Belly
--------------------------------*/
function generateBelly(inQuad){

	if(inQuad.UI.MakeBelly){

		var bellyGuides = new ActiveXObject("XSI.Collection");

		bellyGuides.add(inQuad.GuideModel + ".LowerStomach");
		bellyGuides.add(inQuad.GuideModel + ".UpperStomach");

		var vertebra = inQuad.Torso.Spine.Vertebra(0);

		inQuad.Belly = makeBelly(inQuad.HipBone, vertebra, bellyGuides, inQuad.UI.BellyCenterPercentage);


		if(inQuad.UI.BellySlide){

			var LBelly1 = inQuad.GuideModel.FindChild("LBelly1");
			var LBelly2 = inQuad.GuideModel.FindChild("LBelly2");
			if(LBelly2 && LBelly1)
			{
				inQuad.LBellySlide = make2PointSlide ("L", LBelly1, LBelly2, inQuad.Belly.BellyBone, inQuad.HipBone, inQuad.HipBone);
			}
			else
			{
				logmessage("makeQuadruped: no belly guides: belly slide will not be created", siWarning );
			}

			var RBelly1 = inQuad.GuideModel.FindChild("RBelly1");
			var RBelly2 = inQuad.GuideModel.FindChild("RBelly2");
			if(RBelly1 && RBelly2)
			{
				inQuad.RBellySlide = make2PointSlide ("R", RBelly1, RBelly2, inQuad.Belly.BellyBone, inQuad.HipBone, inQuad.HipBone);
			}
			else
			{
				logmessage("makeQuadruped: no belly guides: belly slide will not be created", siWarning );
			}

		}


	}

	return inQuad;

}

/*--------------------------------
  Character Key Set
--------------------------------*/
function generateCharacterKeySet(inQuad){

    // make the biped's character keyset
    makeQuadrupedCharacterKeySet(inQuad.GlobalSRT, "Quadruped", true, "", "");
    
    // if need be, make the shadow rig's character key set
    if (   (inQuad.UI.ShadowType > 0)
        && (inQuad.UI.CreateShadowKeySet) ) {
        makeQuadrupedCharacterKeySet(inQuad.ShadowGlobalSRT, "Quadruped", true, "Shadow", "");
    }
    else if (inQuad.UI.ShadowType > 0) {
        // it's safe to call this on the whole biped, since marking
        // sets are already deleted in the first pass through the
        // rig (i.e. non-shadow rig)
        setKeyableRig(inQuad.ShadowGlobalSRT);
    }
    
    return inQuad;
}

/*--------------------------------
  Apply Synoptic
--------------------------------*/
function applySynoptic(inQuad){

	var synoptic = inQuad.GlobalSRT.AddProperty("Synoptic Property", 1)
	synoptic.Parameters("path").value = "$SI_HOME/Data/XSI_SAMPLES/Synoptic/Rig/QuadSynoptic_IK1.htm"


	if(!inQuad.UI.ShadowType){return inQuad};	
	if(inQuad.UI.ShadowType == 0){return inQuad};

	var ShadowSynoptic = inQuad.ShadowGlobalSRT.AddProperty("Synoptic Property", 1)
		
		
	switch (inQuad.UI.ShadowType ){
		
		 case 1: //SI3D
			ShadowSynoptic.Parameters("path").value = "$SI_HOME/Data/XSI_SAMPLES/Synoptic/Rig/SkeletonBipedSynoptic.htm"
		 case 2: //XSI		  	 
			ShadowSynoptic.Parameters("path").value = "$SI_HOME/Data/XSI_SAMPLES/Synoptic/Rig/SkeletonBipedSynoptic.htm"
		 break
		 case 3: // Null
		 	ShadowSynoptic.Parameters("path").value = "$SI_HOME/Data/XSI_SAMPLES/Synoptic/Rig/NullBipedSynoptic.htm"
		 break
		 default: // Box or some Combination of Box
		 	ShadowSynoptic.Parameters("path").value = "$SI_HOME/Data/XSI_SAMPLES/Synoptic/Rig/BoxBipedSynoptic.htm"
		 	
		 break
	
	}

	return inQuad;
}
/*--------------------------------
  Default Pose
--------------------------------*/
function defaultPose(inQuad){

    var collection = XSIFactory.CreateActiveXObject( "XSI.Collection" );

    // create a collection with all the children
	SelectObj ( inQuad.GlobalSRT, "BRANCH", true);
	SelectChildNodes(null, null, null);
    // If you want to filter selection
    collection.AddItems( Selection );
	var l_KeyableColl = collection.FindObjectsByMarkingAndCapabilities(null, siKeyable );
	StoreAction (inQuad.model, l_KeyableColl, 1, "DefaultPose", true, 1, 5);

	if(inQuad.UI.ShadowType > 0){
	    collection.RemoveAll();
		SelectObj ( inQuad.ShadowGlobalSRT, "BRANCH", true);
		SelectChildNodes(null, null, null);
        collection.AddItems( Selection );
	    l_KeyableColl = collection.FindObjectsByMarkingAndCapabilities(null, siKeyable );
	    StoreAction (inQuad.model, l_KeyableColl, 1, "ShadowDefaultPose", true, 1, 5);
	}

	return inQuad;
}

/*--------------------------------
 Get UI
--------------------------------*/
function get_UI()
{

	// partially generated using a tool that pulls a UI chart from Excel, contact misner for more details

	var sliders = ActiveSceneRoot.AddProperty("Custom_parameter_list",0,"Make Quadruped");


	var TorsoType = sliders.AddParameter2("TorsoType",siInt4 ,0,0,1,0,1,8,16,"Type","Type");
	var TorsoTypeItems = Array("Quaternion spine",0,"Skeleton spine  ",1);
	var TorsoStretch = sliders.AddParameter2("TorsoStretch",siInt4 ,0,0,1,0,1,8,16,"Type","Type");
	var TorsoStretchItems = Array("Fixed Length, length extention only from slider",0,"Stretches to meet chest icon",1);
	var TorsoDivisions = sliders.AddParameter2("TorsoDivisions",siInt4 ,3,1,100,1,10,8,16,"Divisions","Divisions");
	var IconType = sliders.AddParameter2("IconType",siInt4 ,1,0,1,0,1,8,16,"Type","Type");
	var IconTypeItems = Array("Square controls",0,"Cube controls",1);
	var MakeBelly = sliders.AddParameter2("MakeBelly",siBool,0,0,1,0,1,8,16,"Active","Active");
	var MakeBellyItems = Array("No belly",0,"Make belly",1);
	var BellySlide = sliders.AddParameter2("BellySlide",siInt4 ,0,0,1,0,1,8,16,"Active","Active");
	var BellySlideItems = Array("No belly sliding",0,"Sides of belly slide to even bounce falloff",1);
	var BellyCenterPercentage = sliders.AddParameter2("BellyCenterPercentage",siDouble ,0.25,0,1,0,1,8,16,"Perc","Perc");
	var HeadType = sliders.AddParameter2("HeadType",siInt4 ,0,0,1,0,1,8,16,"Type","Type");
	var HeadTypeItems = Array("Skeleton head",0,"Quaternion spine head",1);
	var HeadStretch = sliders.AddParameter2("HeadStretch",siInt4 ,0,0,1,0,1,8,16,"Type","Type");
	var HeadStretchItems = Array("Fixed Length, length extention only from slider",0,"Head spine stretches to meet head icon",1);
	var HeadDivisions = sliders.AddParameter2("HeadDivisions",siInt4 ,3,1,100,1,10,8,16,"Divisions","Divisions");
	var Ears = sliders.AddParameter2("Ears",siBool,0,0,1,0,1,8,16,"Active","Active");
	var MakeTail = sliders.AddParameter2("MakeTail",siInt4 ,1,0,1,0,1,8,16,"Active","Active");
	var MakeTailItems = Array("No Tail",0,"Make Tail",1);
	var TailDivisions = sliders.AddParameter2("TailDivisions",siInt4 ,6,0,100,0,15,8,16,"Divisions","Divisions");
	var FrontRoll = sliders.AddParameter2("FrontRoll",siBool,0,0,1,0,1,8,16,"Active","Active");
	var FrontRollDivisions = sliders.AddParameter2("FrontRollDivisions",siInt4 ,3,0,100,0,10,8,16,"Number","Number");
	var BackRoll = sliders.AddParameter2("BackRoll",siBool,0,0,1,0,1,8,16,"Active","Active");
	var BackRollDivisions = sliders.AddParameter2("BackRollDivisions",siInt4 ,3,0,100,0,10,8,16,"Number","Number");
	var ShadowType = sliders.AddParameter2("ShadowType",siInt4 ,0,0,7,0,7,8,16,"Type","Type");		
	var ShadowTypeItems = Array("None",0,"SI|3D Skeleton",1,"XSI Skeleton",2,"Null Hierarchy",3,"Box Hierarchy",4,"Box with IK Arms",5,"Box with IK Legs",6,"Box with IK Arms and Legs",7);

	var layout = sliders.PPGLayout;
	layout.Clear();
	
	layout.Language = "JScript" ;
	layout.Logic =   	OnInit.toString()
				+ MakeBelly_OnChanged.toString()
				+ TorsoType_OnChanged.toString()
				+ BellySlide_OnChanged.toString()
				+ HeadType_OnChanged.toString()
				+ FrontRoll_OnChanged.toString()
				+ BackRoll_OnChanged.toString()
				+ MakeTail_OnChanged.toString();
	
	//Set Help Path
    layout.SetAttribute( siUIHelpFile, "<FactoryPath>/Doc/<DocLangPref>/xsidocs.chm::/animtoolbar34.htm" );
	
	//======================= Chest ============================
	layout.AddTab("Chest");
	layout.AddGroup("Torso");
	var item3 = layout.AddEnumControl("TorsoType",TorsoTypeItems,"Type",siControlRadio );
	layout.EndGroup();
	layout.AddGroup("Spine");
	var item4 = layout.AddEnumControl("TorsoStretch",TorsoStretchItems,"Type",siControlRadio );
	var item5 = layout.AddItem("TorsoDivisions");
	layout.EndGroup();
	layout.AddGroup("Control  Icons");
	var item6 = layout.AddEnumControl("IconType",IconTypeItems,"Type",siControlRadio );
	layout.EndGroup();
	//======================= Belly ============================
	layout.AddTab("Belly");
	layout.AddGroup("Create Belly Setup");
	var item7 = layout.AddEnumControl("MakeBelly",MakeBellyItems,"Active",siControlRadio );
	layout.EndGroup();
	layout.AddGroup("Belly Slide");
	var item8 = layout.AddEnumControl("BellySlide",BellySlideItems,"Active",siControlRadio );
	var item9 = layout.AddItem("BellyCenterPercentage");
	layout.EndGroup();
	//======================= Head ============================
	layout.AddTab("Head");
	layout.AddGroup("Head");
	var item10 = layout.AddEnumControl("HeadType",HeadTypeItems,"Type",siControlRadio );
	layout.EndGroup();
	layout.AddGroup("Head Spine");
	var item11 = layout.AddEnumControl("HeadStretch",HeadStretchItems,"Type",siControlRadio );
	var item12 = layout.AddItem("HeadDivisions");
	layout.EndGroup();
	layout.AddGroup("Ears");
	var item13 = layout.AddItem("Ears");
	layout.EndGroup();
	//======================= Tail ============================
	layout.AddTab("Tail");
	layout.AddGroup("Tail");
	var item14 = layout.AddEnumControl("MakeTail",MakeTailItems,"Active",siControlRadio );
	var item15 = layout.AddItem("TailDivisions");
	layout.EndGroup();
	//======================= Roll Division  ============================
	layout.AddTab("Roll Division ");
	layout.AddGroup("Humerus (upper forward bone) Roll Subdivision");
	var item16 = layout.AddItem("FrontRoll");
	var item17 = layout.AddItem("FrontRollDivisions");
	layout.EndGroup();
	layout.AddGroup("Femur (upper back bone) Roll Subdivision");
	var item18 = layout.AddItem("BackRoll");
	var item19 = layout.AddItem("BackRollDivisions");
	layout.EndGroup();
	//======================= Shadow Rigs  ============================
	layout.AddTab("Shadow Rigs ");
	layout.AddGroup("Constrain Shadow Character");
	var item20 = layout.AddEnumControl("ShadowType",ShadowTypeItems,"Type",siControlRadio );
	layout.EndGroup();

	try{
		inspectobj( sliders, "", XSIUtils.Translate( IDS_MAKE_QUADRUPED_TITLE, "XSISCRIPTS" ), siModal );
	}
	catch(e){
		deleteobj(sliders);
		logmessage ( e.description, siError);
		return;
	}

	var returnObj = new Object;

	// torso type should be 1 or 2 but our UI is 0 to 1 so add 1.
	returnObj.TorsoType 				= TorsoType.value+1;

	returnObj.TorsoStretch = TorsoStretch.value;
	returnObj.TorsoDivisions = TorsoDivisions.value;
	returnObj.IconType = IconType.value;
	returnObj.MakeBelly = MakeBelly.value;
	returnObj.BellySlide = BellySlide.value;
	returnObj.BellyCenterPercentage = BellyCenterPercentage.value;
	returnObj.HeadType = HeadType.value;
	returnObj.HeadStretch = HeadStretch.value;
	returnObj.HeadDivisions = HeadDivisions.value;
	returnObj.Ears = Ears.value;
	returnObj.MakeTail = MakeTail.value;
	returnObj.TailDivisions = TailDivisions.value;
	returnObj.FrontRoll = FrontRoll.value;
	returnObj.FrontRollDivisions = FrontRollDivisions.value;
	returnObj.BackRoll = BackRoll.value;
	returnObj.BackRollDivisions = BackRollDivisions.value;
	returnObj.ShadowType = ShadowType.value;


	deleteobj(sliders);



	return returnObj;

}

function OnInit()
{
	TorsoType_OnChanged();
	BellySlide_OnChanged();
	MakeBelly_OnChanged();
	HeadType_OnChanged();
	FrontRoll_OnChanged();	
	BackRoll_OnChanged();	
}

function HeadType_OnChanged()
{
	PPG.HeadStretch.Enable( PPG.HeadType.value == 1 );
}

function TorsoType_OnChanged()
{
	PPG.TorsoStretch.Enable( PPG.TorsoType.value == 0 );
}

function BellySlide_OnChanged()
{
	PPG.BellyCenterPercentage.Enable( PPG.BellySlide.value );
}

function MakeBelly_OnChanged() 
{
	PPG.BellySlide.Enable( PPG.MakeBelly.value );
	PPG.BellyCenterPercentage.Enable( PPG.MakeBelly.value && PPG.BellySlide.value ); 
}

function FrontRoll_OnChanged()
{
	PPG.FrontRollDivisions.Enable( PPG.FrontRoll.value );
}

function BackRoll_OnChanged()
{
	PPG.BackRollDivisions.Enable( PPG.BackRoll.value );
}

function MakeTail_OnChanged()
{
	PPG.TailDivisions.Enable( PPG.MakeTail.value ); 
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


