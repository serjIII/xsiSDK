////////////////////////////////////////
// Rig From Biped Guide
///////////////////////////
// originally proto-typed:
// July 2001 Michael Isner
//
// re-engineered using a component SDK
/// Dec 2003 Michael Isner
///////////////
//
// Biped Dog Leg return object contains:
//
// Biped.UI					: all dialog box/command argument values
//	 Biped.UI.TorsoType 		
//	 Biped.UI.TorsoStretch 		
//	 Biped.UI.TorsoDivisions 	
//	 Biped.UI.IconType 		
//	 Biped.UI.MakeBelly 		
//	 Biped.UI.BellySlide 		
//	 Biped.UI.BellyCenterPercentage 	 
//	 Biped.UI.HeadType 		
//	 Biped.UI.HeadStretch 		
//	 Biped.UI.HeadDivisions 		
//	 Biped.UI.Ears 			
//	 Biped.UI.RotationOrder 		
//	 Biped.UI.ArmSymmetry 		
//	 Biped.UI.ArmAttachment 		
//	 Biped.UI.FingerType 		
//	 Biped.UI.ForeArmRoll 		
//	 Biped.UI.ForeArmDivisions 	
//	 Biped.UI.BicepRoll 		
//	 Biped.UI.BicepDivisions 	
//	 Biped.UI.ThighRoll 		
//	 Biped.UI.ThighDivisions 	
//	 Biped.UI.ArmPitSlide 		
//	 Biped.UI.HipSlide 		
//	 Biped.UI.ThighSlide 		
//	 Biped.UI.ElbowsJoint 		
//	 Biped.UI.ShadowType 		
//	 Biped.UI.ShadowHands 		
//
// Biped.Model
// Biped.GlobalSRT
//
// Biped.Sliders
// Biped.HiddenGroup 
// Biped.EnvGroup
//
// Biped.Torso
// Biped.Tail 
// Biped.Head
// Biped.Belly
// Biped.ChestBone
// Biped.UpperBody
// Biped.SpineCurve
// Biped.HipBone
//
// Biped.RShoulderEff 
// Biped.RArm
// Biped.RHand
// Biped.RLeg
// Biped.RFoot
// Biped.RHip   	(only if hip slide option selected)
// Biped.RThigh 	(only if thigh slide option selected)
// Biped.RElbow 	(only if joint compression option selected)
// Biped.RBellySlide  	(only if belly slide option selected)
//
// Biped.LShoulderEff
// Biped.LArm
// Biped.LHand
// Biped.LLeg
// Biped.LFoot
// Biped.LHip   	(only if hip slide option selected)
// Biped.LThigh 	(only if thigh slide option selected)
// Biped.LElbow 	(only if joint compression option selected)
// Biped.LBellySlide	(only if belly slide option selected)
//
// Biped.ShadowModel
// Biped.ShadowHiddenGroup
// Biped.ShadowEnvGroup 
// Biped.ShadowGlobalSRT
//

//******************************************************************************
// String Constants (used to translate)
//******************************************************************************
var IDS_MAKE_BIPED_DOGLEG_TITLE			= 1165;


// Add a push method to the JScript Array Object
// (Array.Push was added in Jscript 5.5 but we cannot rely on this)
var push = function(item){return this[this.length++] = item;}
Array.prototype.push = push;

/*--------------------------------
 Make Biped Dog Leg
--------------------------------*/
function makeBipedDogLeg(inTorsoType,  inTorsoStretch,  inTorsoDivisions,  inIconType,  inMakeBelly,
inBellySlide,  inBellyCenterPercentage, inHeadType,  inHeadStretch, inHeadDivisions, inEars,
inRotationOrder,  inArmSymmetry,  inArmAttachment, inFingerType, inForeArmRoll,  inForeArmDivisions,
inBicepRoll, inBicepDivisions, inThighRoll,  inThighDivisions,  inArmPitSlide, inHipSlide,
inThighSlide,  inElbowsJoint,  inShadowType,  inShadowHands, inOneModel, inIndependentLower,
inCreateShadowKeySet, inInspectUI){

	var biped = new Object();
	biped.modelString = "Biped_DogLeg_Guide";

	// validate guid and fill biped strucutre. If not able an error message will be logged

	biped = getGuide(biped);
	
	if(!biped)
	{
		//maybe the old guide is being used, try again
		biped = new Object();
		biped.modelString = "BipedPropGuide";
		biped = getGuide(biped);		
		if(!biped)
		{
			logmessage("makeBipedDogLeg: No Biped Guide Found", siError);
		}
		else	     
		{
			logmessage ("This biped guide is not compatible with MakeBiped (XSI v4.0), using CreateRigFromGuide", siWarning);	
			CreateRigFromGuide();					
		}
		return;
	}

	if(!inInspectUI){
		biped.UI = get_UI();
		if(biped.UI){ biped.UI.CreateShadowKeySet = false; }
	}
	else{

		biped.UI = new Object();

		biped.UI.TorsoType = inTorsoType;
		biped.UI.TorsoStretch = inTorsoStretch;
		biped.UI.TorsoDivisions = inTorsoDivisions;
		biped.UI.IconType = inIconType;
		biped.UI.MakeBelly = inMakeBelly;
		biped.UI.BellySlide = inBellySlide;
		biped.UI.BellyCenterPercentage = inBellyCenterPercentage;
		biped.UI.HeadType = inHeadType;
		biped.UI.HeadStretch = inHeadStretch;
		biped.UI.HeadDivisions = inHeadDivisions;
		biped.UI.Ears = inEars;
		biped.UI.RotationOrder = inRotationOrder;
		biped.UI.ArmSymmetry = inArmSymmetry;
		biped.UI.ArmAttachment = inArmAttachment;
		biped.UI.FingerType = inFingerType;
		biped.UI.ForeArmRoll = inForeArmRoll;
		biped.UI.ForeArmDivisions = inForeArmDivisions;
		biped.UI.BicepRoll = inBicepRoll;
		biped.UI.BicepDivisions = inBicepDivisions;
		biped.UI.ThighRoll = inThighRoll;
		biped.UI.ThighDivisions = inThighDivisions;
		biped.UI.ArmPitSlide = inArmPitSlide;
		biped.UI.HipSlide = inHipSlide;
		biped.UI.ThighSlide = inThighSlide;
		biped.UI.ElbowsJoint = inElbowsJoint;
		biped.UI.ShadowType = inShadowType;
		biped.UI.ShadowHands = inShadowHands;

		biped.UI.OneModel				= inOneModel;
		biped.UI.IndependentLower		= inIndependentLower;
		biped.UI.CreateShadowKeySet     = inCreateShadowKeySet;
	}


	if(!biped.UI){ logmessage("makeBipedDogLeg: cancelled"); return; }

	// symmetry is done in the make functions when set to 1.  So:
	if(biped.UI.ArmSymmetry == 1){biped.UI.ArmSymmetry = 0}
	else{biped.UI.ArmSymmetry = 1}

	// If we are creating from the UI, display a progress bar
	var oProgBar = XSIUIToolkit.ProgressBar;
	oProgBar.Maximum = 11;
	oProgBar.Caption = "Make Dog Leg Biped";
	oProgBar.Visible = !inInspectUI;

	oProgBar.StatusText = "Creating Initial Hierarchy";
	biped = initialHierarchy(biped);
	oProgBar.Increment(); 
	if(oProgBar.CancelPressed) { Cancel(biped); return;}
		
	oProgBar.StatusText = "Creating Torso";
	biped = generateTorso(biped);
	oProgBar.Increment(); 
	if(oProgBar.CancelPressed) { Cancel(biped); return;}
	

	oProgBar.StatusText = "Creating Hands";
	biped = generateHands(biped);
	oProgBar.Increment(); 
	if(oProgBar.CancelPressed) { Cancel(biped); return;}
	
	oProgBar.StatusText = "Creating Arms";	
	biped = generateArms(biped);
	oProgBar.Increment(); 
	if(oProgBar.CancelPressed) { Cancel(biped); return;}

	oProgBar.StatusText = "Creating Legs";
	biped = generateDogLegs(biped);
	oProgBar.Increment(); 
	if(oProgBar.CancelPressed) { Cancel(biped); return;}

	oProgBar.StatusText = "Creating Head";
	biped = generateHead(biped);
	oProgBar.Increment(); 
	if(oProgBar.CancelPressed) { Cancel(biped); return;}

	oProgBar.StatusText = "Creating Character Key Set";
	biped = generateCharacterKeySet(biped);
	oProgBar.Increment(); 
	if(oProgBar.CancelPressed) { Cancel(biped); return;}

	oProgBar.StatusText = "Applying Synoptic";
	biped = applySynoptic(biped);
	oProgBar.Increment(); 
	if(oProgBar.CancelPressed) { Cancel(biped); return;}

	oProgBar.StatusText = "Applying Slides";
	biped = hookUpSliding(biped);
	biped = hookUpJoints(biped);	
	oProgBar.Increment(); 
	if(oProgBar.CancelPressed) { Cancel(biped); return;}

	oProgBar.StatusText = "Creating Belly";
	biped = generateBelly(biped);
	oProgBar.Increment(); 
	if(oProgBar.CancelPressed) { Cancel(biped); return;}

	oProgBar.StatusText = "Set Default Pose";
	biped = defaultPose(biped);
	oProgBar.Increment(); 
	if(oProgBar.CancelPressed) { Cancel(biped); return;}

	oProgBar.visible = false;

	return biped;
}

/*--------------------------------
 Cancel
 - deletes the rig if the make 
 command is cancelled
--------------------------------*/
function Cancel(inBiped){

	logmessage("makeBipedDogLeg: cancelled");
	DeleteObj( "B:"+inBiped.model ); 
	return;
	
}

/*--------------------------------
 Get Guide
--------------------------------*/
function getGuide(inBiped){
        
        //Create Rig From Selected Guide or Guide element
        var checkModel;
        if (Selection.count>0){
            if (Selection(0).type== "#model"){
                checkModel = Selection(0);
            }
            else{
                checkModel = Selection(0).model;
            }
            var detailedGuide = checkModel.Groups("DetailedGuide");
            if (detailedGuide&&!checkModel.IsEqualTo (ActiveSceneRoot)){
                inBiped.GuideModel = checkModel;
            }
        }
        //If no valid Guide was selected, look for guide by name;
        if(!inBiped.GuideModel){
            inBiped.GuideModel = ActiveSceneRoot.FindChild(inBiped.modelString );
        }

	if(!inBiped.GuideModel){return; }

	// get the scale across the arm span.

	var checkDist = XSIMath.CreateVector3();
	inBiped.keyWords = new Array("RHand", "LHand");
	inBiped.pos = findMarkers(inBiped.keyWords, inBiped.GuideModel);

	checkDist.sub(inBiped.pos[0] , inBiped.pos[1]);
	inBiped.Scale = checkDist.Length()/1.25;

	return inBiped;

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
function initialHierarchy(inBiped){

	inBiped.model = ActiveSceneRoot.AddModel();
	inBiped.model.name = "Biped_DogLeg";

	// make the global SRT or god null
	var zeroPos = XSIMath.CreateVector3();

	inBiped.GlobalSRT = makeRigIcon(inBiped.model, 4, zeroPos.x, zeroPos.y, zeroPos.z, inBiped.Scale*.09, inBiped.Scale*.09, inBiped.Scale*.09, 893, "GlobalSRT");
    addMarkingSet(inBiped.GlobalSRT, 1, 1, 0, "Biped_DogLeg");

	inBiped.Sliders = inBiped.model.AddProperty("Custom_parameter_list",0,"Controls");
	var layout = inBiped.Sliders.PPGLayout;
	//Set help path
    layout.SetAttribute( siUIHelpFile, "<FactoryPath>/Doc/<DocLangPref>/xsidocs.chm::/animtoolbar61.htm" );

	var aEmptyRef = new Array();		
	inBiped.HiddenGroup = inBiped.model.AddGroup(aEmptyRef);
	inBiped.EnvGroup = inBiped.model.AddGroup(aEmptyRef);

	inBiped.HiddenGroup.name = "hidden";
	inBiped.EnvGroup.name = "envelope_group";

	inBiped.HiddenGroup.Parameters("viewvis").value = 0;

	// make a Global SRT for the shadow rigs
	if(inBiped.UI.ShadowType != 0){
		if (!inBiped.UI.OneModel) {
			inBiped.ShadowModel = ActiveSceneRoot.AddModel();
		} else {
			inBiped.ShadowModel = inBiped.model;
		}

		inBiped.ShadowHiddenGroup = inBiped.ShadowModel.AddGroup(aEmptyRef);
		inBiped.ShadowEnvGroup = inBiped.ShadowModel.AddGroup(aEmptyRef);

		inBiped.ShadowHiddenGroup.name = "hidden";
		inBiped.ShadowEnvGroup.name = "envelope_group";

		inBiped.ShadowHiddenGroup.Parameters("viewvis").value = 0;

		var shadowNameSuffix = "Shadow";
		switch (inBiped.UI.ShadowType ) {
		  	 case 1: //SI3D
		  	 case 2: //XSI		  	 
				if (!inBiped.UI.OneModel) {
			  	 	inBiped.ShadowGlobalSRT = makeRigIcon(inBiped.ShadowModel, 7, zeroPos.x, zeroPos.y, zeroPos.z, inBiped.Scale*.09, inBiped.Scale*.09, inBiped.Scale*.09, 805, "GlobalSRT");
				}
				else {
			  	 	inBiped.ShadowGlobalSRT = makeRigIcon(inBiped.ShadowModel, 7, zeroPos.x, zeroPos.y, zeroPos.z, inBiped.Scale*.09, inBiped.Scale*.09, inBiped.Scale*.09, 805, shadowNameSuffix + "_GlobalSRT");
				}
			 break

			 case 3:
				if (!inBiped.UI.OneModel) {
					inBiped.ShadowGlobalSRT = makeRigIcon(inBiped.ShadowModel, 6, zeroPos.x, zeroPos.y, zeroPos.z, inBiped.Scale*.09, inBiped.Scale*.09, inBiped.Scale*.09, 380, "GlobalSRT");
				}
				else {
					inBiped.ShadowGlobalSRT = makeRigIcon(inBiped.ShadowModel, 6, zeroPos.x, zeroPos.y, zeroPos.z, inBiped.Scale*.09, inBiped.Scale*.09, inBiped.Scale*.09, 380, shadowNameSuffix + "_GlobalSRT");
				}
		  	 break

		 	 default:
				if (!inBiped.UI.OneModel) {
			  	 	inBiped.ShadowGlobalSRT = makeRigIcon(inBiped.ShadowModel, 2, zeroPos.x, zeroPos.y, zeroPos.z, inBiped.Scale*.05, inBiped.Scale*.09, inBiped.Scale*.05, 479, "GlobalSRT");
				}
				else {
			  	 	inBiped.ShadowGlobalSRT = makeRigIcon(inBiped.ShadowModel, 2, zeroPos.x, zeroPos.y, zeroPos.z, inBiped.Scale*.05, inBiped.Scale*.09, inBiped.Scale*.05, 479, shadowNameSuffix + "_GlobalSRT");
				}
		  	 break
		}

        addMarkingSet(inBiped.ShadowGlobalSRT, 1, 1, 0, "ShadowBiped");

		if (!inBiped.UI.OneModel) {
			inBiped.ShadowModel.name = "Biped_" + shadowNameSuffix;
		}

		inBiped.ShadowHiddenGroup.name = shadowNameSuffix + "_hidden";
		inBiped.ShadowEnvGroup.name = shadowNameSuffix + "_envelope_group";

		inBiped.ShadowGlobalSRT.Kinematics.AddConstraint("Pose", inBiped.GlobalSRT, true);
	}

	return inBiped;
}
/*--------------------------------
 Generate Torso
--------------------------------*/
function generateTorso(inBiped){


	var singleKeywords = new Array("SpineBase","SpineHipDepth","SpineChestDepth","RibCageEnd", "RibCageStart");
	var mirrorKeywords = new Array("Femur", "ShoulderStart", "Shoulder");

	var guides = new ActiveXObject("XSI.Collection");
	for(var i =0;i<4;i++){

		var item = inBiped.GuideModel.FindChild(singleKeywords[i]);
		guides.add(item);
	}

	for(var i =0;i<3;i++){
		var item = inBiped.GuideModel.FindChild("L" + mirrorKeywords[i]);
		guides.add(item);
	}

	for(var i =0;i<3;i++){
		var item = inBiped.GuideModel.FindChild("R" + mirrorKeywords[i]);
		guides.add(item);
	}

	var item = inBiped.GuideModel.FindChild(singleKeywords[4]);
	guides.add(item);

	inBiped.Torso = makeTorso(inBiped.GlobalSRT , inBiped.UI.TorsoDivisions, inBiped.UI.TorsoStretch, guides, inBiped.UI.IconType,
	inBiped.UI.TorsoType, inBiped.Sliders, inBiped.UI.ShadowType, inBiped.ShadowGlobalSRT, inBiped.UI.ArmSymmetry)


	inBiped.ChestBone = inBiped.Torso.Spine.TopVertebra

	inBiped.UpperBody = inBiped.Torso.UpperBody
	inBiped.SpineCurve = inBiped.Torso.Spine.curve
	inBiped.HipBone = inBiped.Torso.HipBone
	inBiped.RShoulderEff = inBiped.Torso.REff
	inBiped.LShoulderEff= inBiped.Torso.LEff

	return inBiped;
}

/*--------------------------------
 Generate Arms
--------------------------------*/
function generateArms(inBiped){

	var keyWords = new Array("Shoulder","Elbow","Hand");
	if(!inBiped.UI.ForeArmRoll){inBiped.UI.ForeArmDivisions = 0}
	if(!inBiped.UI.BicepRoll){inBiped.UI.BicepDivisions = 0}


	if(inBiped.UI.ShadowType == 5 || inBiped.UI.ShadowType == 7){
		var ArmShadowType = 1;
	}
	else{
		var ArmShadowType = inBiped.UI.ShadowType;
	}


	// ~~~~~~~ right arm ~~~~~~~~~

	var rGuides = new ActiveXObject("XSI.Collection");

	for(var t=0;t<3;t++){
		armObj = inBiped.GuideModel.FindChild("R" + keyWords[t]);
		rGuides.Add(armObj);
	}



	if(inBiped.Torso.ShadowEnds){
		var RShadowEnd = inBiped.Torso.ShadowEnds(1);
		var LShadowEnd = inBiped.Torso.ShadowEnds(2);
	}
	else{var LShadowEnd = null ; var RShadowEnd = null}


	if(inBiped.UI.ArmAttachment == 0){
		inBiped.RArm = makeArm(inBiped.RShoulderEff, rGuides, "R",null,inBiped.UI.ForeArmDivisions, inBiped.UI.BicepDivisions,
						ArmShadowType, RShadowEnd, inBiped.RHand.Root, inBiped.UI.ArmSymmetry)
	}
	else{
		inBiped.RArm = makeArm(inBiped.UpperBody, rGuides, "R",inBiped.RShoulderEff,inBiped.UI.ForeArmDivisions, inBiped.UI.BicepDivisions,
		ArmShadowType, RShadowEnd, inBiped.RHand.Root, inBiped.UI.ArmSymmetry)
	}


	// ~~~~~~~ left arm ~~~~~~~~~

	var lGuides = new ActiveXObject("XSI.Collection");

	for(var t=0;t<3;t++){
		armObj = inBiped.GuideModel.FindChild("L" + keyWords[t]);
		lGuides.Add(armObj);
	}


	// Arm Symmetry on the left arm is always 0, we are doing the negative scaling only on the right.

	if(inBiped.UI.ArmAttachment == 0){
		inBiped.LArm = makeArm(inBiped.LShoulderEff, lGuides, "L", null, inBiped.UI.ForeArmDivisions, inBiped.UI.BicepDivisions,
						ArmShadowType, LShadowEnd, inBiped.LHand.Root, 0);
	}
	else{
		inBiped.LArm = makeArm(inBiped.UpperBody, lGuides, "L", inBiped.LShoulderEff, inBiped.UI.ForeArmDivisions, inBiped.UI.BicepDivisions,
						ArmShadowType, LShadowEnd, inBiped.LHand.Root, 0);
	}

	// now parent hands under arms

	inBiped.LArm.Eff.AddChild(inBiped.LHand.Root);
	inBiped.RArm.Eff.AddChild(inBiped.RHand.Root);

	if(inBiped.UI.ShadowType > 0){

		inBiped.RArm.ShadowEnds(0).AddChild(inBiped.RHand.ShadowStart);
		inBiped.LArm.ShadowEnds(0).AddChild(inBiped.LHand.ShadowStart);

	}
	
	// Set the proper rotation order on the arms
	// 0 = YZX rotation order
	if(inBiped.UI.RotationOrder == 0)	
	{
		//set to YZX rotation order
		inBiped.RArm.Skel(1).Kinematics.Local.Parameters("rotorder").value = 3;
		inBiped.LArm.Skel(1).Kinematics.Local.Parameters("rotorder").value = 3;		
	}

	return inBiped;
}
/*--------------------------------
 Generate Hands
--------------------------------*/
function generateHands(inBiped){


	// ~~~~~~~ left hand ~~~~~~~~~

	if(inBiped.Torso.ShadowEnds){
		var LShadowEnd = inBiped.Torso.ShadowEnds(2);
	}
	else{var LShadowEnd = null}

	//99553: use bitflag (1000) to exclude shadow fingers
	var HandShadowType = inBiped.UI.ShadowHands ? inBiped.UI.ShadowType + 8 : inBiped.UI.ShadowType;

	var LFingers = new ActiveXObject("XSI.Collection");
	var LBlades = new ActiveXObject("XSI.Collection");

	var handKeys = new Array("Pinky", "Ring", "Middle", "Index", "Thumb");

	for(i=0;i<handKeys.length;i++){

		var finger = inBiped.GuideModel.FindChild("L" + handKeys[i] + 1);
		var blade = inBiped.GuideModel.FindChild("L" + handKeys[i] + "_fingerBlade");

		if(finger && blade){

			LFingers.add(finger);
			LBlades.add(blade);
		}
	}

	var LHBone = new ActiveXObject("XSI.Collection");

	LHBone.add(inBiped.GuideModel + ".LHand");
	LHBone.add(inBiped.GuideModel  + ".LHandEnd");


	// Arm Symmetry on the left hand is always 0, we are doing the negative scaling only on the right.

	inBiped.LHand = makeHand(inBiped.UpperBody, LFingers, LBlades, LHBone, "L", inBiped.UI.FingerType, HandShadowType , LShadowEnd, 0);



	// ~~~~~~~ right hand ~~~~~~~~~

	if(inBiped.Torso.ShadowEnds){
		var RShadowEnd = inBiped.Torso.ShadowEnds(1);
	}
	else{var RShadowEnd = null}


	var RFingers = new ActiveXObject("XSI.Collection");
	var RBlades = new ActiveXObject("XSI.Collection");

	for(i=0;i<handKeys.length;i++){

		var finger = inBiped.GuideModel.FindChild("R" + handKeys[i] + 1);
		var blade = inBiped.GuideModel.FindChild("R" + handKeys[i] + "_fingerBlade");

		if(finger && blade){

			RFingers.add(finger);
			RBlades.add(blade);
		}
	}



	var RHBone = new ActiveXObject("XSI.Collection");

	RHBone.add(inBiped.GuideModel + ".RHand");
	RHBone.add(inBiped.GuideModel  + ".RHandEnd");

	inBiped.RHand = makeHand(inBiped.UpperBody, RFingers, RBlades, RHBone, "R", inBiped.UI.FingerType,
	HandShadowType , RShadowEnd, inBiped.UI.ArmSymmetry);

	return inBiped;

}
/*------------------------------- -
 Generate Dog Legs
--------------------------------*/
function generateDogLegs(inBiped){


	if(!inBiped.UI.ThighRoll){inBiped.UI.ThighDivisions = 0}

	var keyWords = Array("Femur", "Tibia", "Metarsal", "Pivot", "PivotRight", "PivotLeft", "Foot");


	// left leg

	var litems = new ActiveXObject("XSI.Collection");
	for(var i =0;i<6;i++){
		var litem = inBiped.GuideModel.FindChild("L" + keyWords[i]);
		litems.add(litem);
	}
	for(var i=6;i<12;i++){
		var num = i - 5;

		var litem = inBiped.GuideModel.FindChild("L" + keyWords[6] + num);
		if(!litem){break}
		litems.add(litem);
	}



	inBiped.LDogLeg = makeDogLeg(inBiped.GuideModel, inBiped.HipBone, inBiped.GlobalSRT, litems, "L", "Left", inBiped.Sliders,
	inBiped.UI.ThighDivisions, inBiped.UI.ShadowType, inBiped.Torso.ShadowStart);




	// right leg

	var ritems = new ActiveXObject("XSI.Collection");
	for(var i =0;i<6;i++){
		var ritem = inBiped.GuideModel.FindChild("R" + keyWords[i]);
		ritems.add(ritem);
	}
	for(var i=6;i<12;i++){
		var num = i - 5;

		var ritem = inBiped.GuideModel.FindChild("R" + keyWords[6] + num);
		if(!ritem){break}
		ritems.add(ritem);
	}

	inBiped.RDogLeg = makeDogLeg(inBiped.GuideModel, inBiped.HipBone, inBiped.GlobalSRT, ritems, "R", "Right", inBiped.Sliders,
	inBiped.UI.ThighDivisions, inBiped.UI.ShadowType, inBiped.Torso.ShadowStart);



	return inBiped;

}

/*--------------------------------
  Generate Head
--------------------------------*/
function generateHead(inBiped){

	var headObjs = new ActiveXObject("XSI.Collection");

	headObjs.add(inBiped.GuideModel + ".RibCageEnd");
	headObjs.add(inBiped.GuideModel  + ".Neck");
	headObjs.add(inBiped.GuideModel  + ".Head");

	if(inBiped.UI.Ears){

		var Ears = new ActiveXObject("XSI.Collection");

		var REar = inBiped.GuideModel.FindChild("REar1");
		var LEar = inBiped.GuideModel.FindChild("LEar1");

		if(REar && LEar){
			Ears.add(REar);
			Ears.add(LEar);
		}
	}


	if(inBiped.Torso.ShadowEnds){
		var ShadowEnd = inBiped.Torso.ShadowEnds(0);
	}
	else{var ShadowEnd = null}


	inBiped.Head = MakeHead(inBiped.ChestBone, headObjs, "", inBiped.UI.HeadType, 0, inBiped.UI.HeadDivisions, inBiped.UI.HeadStretch,
	inBiped.Sliders, Ears, inBiped.UI.ShadowType , ShadowEnd)

	return inBiped;
}
/*--------------------------------
  Hook Up Sliding
--------------------------------*/
function hookUpSliding(inBiped){

	if(inBiped.UI.ArmPitSlide){

		var RTop = inBiped.GuideModel.FindChild("RArmPitTop");
		var RBase = inBiped.GuideModel.FindChild("RArmPitBase");

		var LTop = inBiped.GuideModel.FindChild("LArmPitTop");
		var LBase = inBiped.GuideModel.FindChild("LArmPitBase");

		inBiped.RArmpit = make2PointSlide ("RArmPit", RTop, RBase, inBiped.RArm.Skel(1), inBiped.ChestBone, inBiped.ChestBone );
		inBiped.LArmpit = make2PointSlide ("LArmPit", LTop, LBase, inBiped.LArm.Skel(1), inBiped.ChestBone, inBiped.ChestBone );
	}



	if(inBiped.UI.HipSlide){

		var RTop = inBiped.GuideModel.FindChild("RHipTop");
		var RBase = inBiped.GuideModel.FindChild("RHipBottom");

		var LTop = inBiped.GuideModel.FindChild("LHipTop");
		var LBase = inBiped.GuideModel.FindChild("LHipBottom");

		inBiped.RHip = make2PointSlide ("RHip", RTop, RBase, inBiped.Torso.HipBone, inBiped.RDogLeg.Skel(1), inBiped.Torso.hipBone);
		inBiped.LHip = make2PointSlide ("LHip", LTop, LBase, inBiped.Torso.HipBone, inBiped.LDogLeg.Skel(1), inBiped.Torso.hipBone);

	}

	if(inBiped.UI.ThighSlide){

		var RSlideObjs = new ActiveXObject("XSI.Collection");

		RSlideObjs.add(inBiped.GuideModel + ".RRear");
		RSlideObjs.add(inBiped.GuideModel + ".RLowerThigh");
		RSlideObjs.add(inBiped.GuideModel + ".RHipBottom");
		RSlideObjs.add(inBiped.GuideModel + ".RFemur");
		RSlideObjs.add(inBiped.GuideModel + ".RTibia");


		inBiped.RThigh = makeThighSlide("R", RSlideObjs, inBiped.Torso.HipBone, inBiped.RDogLeg.Skel(1));



		var LSlideObjs = new ActiveXObject("XSI.Collection");

		LSlideObjs.add(inBiped.GuideModel + ".LRear");
		LSlideObjs.add(inBiped.GuideModel + ".LLowerThigh");
		LSlideObjs.add(inBiped.GuideModel + ".LHipBottom");
		LSlideObjs.add(inBiped.GuideModel + ".LFemur");
		LSlideObjs.add(inBiped.GuideModel + ".LTibia");


		inBiped.LThigh = makeThighSlide("L", LSlideObjs, inBiped.Torso.HipBone, inBiped.LDogLeg.Skel(1));

	}


	return inBiped;

}

/*--------------------------------
  Hook Up Joints
--------------------------------*/
function hookUpJoints(inBiped){

	if(inBiped.UI.ElbowsJoint){

		var LElbow = new ActiveXObject("XSI.Collection");

		LElbow.add(inBiped.GuideModel + ".LElbowJoint2");
		LElbow.add(inBiped.GuideModel + ".LElbowJoint1");
		LElbow.add(inBiped.GuideModel + ".LForeArmSquash");
		LElbow.add(inBiped.GuideModel + ".LForeArmCenter");

		var divisions = (inBiped.LArm.BicepDivisions > 0) ? inBiped.LArm.BicepRoll.Divisions : null;
		inBiped.LElbow = makeJointCompression("LElbow", inBiped.LArm.Skel(1), inBiped.LArm.Skel(2), LElbow, divisions)


		var RElbow = new ActiveXObject("XSI.Collection");

		RElbow.add(inBiped.GuideModel + ".RElbowJoint2");
		RElbow.add(inBiped.GuideModel + ".RElbowJoint1");
		RElbow.add(inBiped.GuideModel + ".RForeArmSquash");
		RElbow.add(inBiped.GuideModel + ".RForeArmCenter");

		divisions = (inBiped.RArm.BicepDivisions > 0) ? inBiped.RArm.BicepRoll.Divisions : null;
		inBiped.RElbow = makeJointCompression("RElbow", inBiped.RArm.Skel(1), inBiped.RArm.Skel(2), RElbow, divisions)

	}


	return inBiped;
}

/*--------------------------------
  Generate Belly
--------------------------------*/
function generateBelly(inBiped){


	if(inBiped.UI.MakeBelly){

		var bellyGuides = new ActiveXObject("XSI.Collection");

		bellyGuides.add(inBiped.GuideModel + ".LowerStomach");
		bellyGuides.add(inBiped.GuideModel + ".UpperStomach");

		var vertebra = inBiped.Torso.Spine.Vertebra(0);

		inBiped.Belly = makeBelly(inBiped.HipBone, vertebra, bellyGuides, inBiped.UI.BellyCenterPercentage);


		if(inBiped.UI.BellySlide){

			var LBelly1 = inBiped.GuideModel.FindChild("LBelly1");
			var LBelly2 = inBiped.GuideModel.FindChild("LBelly2");
			inBiped.LBellySlide = make2PointSlide ("L", LBelly1, LBelly2, inBiped.Belly.BellyBone, inBiped.HipBone, inBiped.HipBone);

			var RBelly1 = inBiped.GuideModel.FindChild("RBelly1");
			var RBelly2 = inBiped.GuideModel.FindChild("RBelly2");
			inBiped.RBellySlide = make2PointSlide ("R", RBelly1, RBelly2, inBiped.Belly.BellyBone, inBiped.HipBone, inBiped.HipBone);

		}


	}

	return inBiped;

}

/*--------------------------------
  Character Key Set
--------------------------------*/
function generateCharacterKeySet(inBiped){

    // make the biped's character keyset
    makeBipedCharacterKeySet(inBiped.GlobalSRT, "Biped_DogLeg", true, "", "");
    
    // if need be, make the shadow rig's character key set
    if (   (inBiped.UI.ShadowType > 0)
        && (inBiped.UI.CreateShadowKeySet) ) {
        makeBipedCharacterKeySet(inBiped.ShadowGlobalSRT, "Biped_DogLeg", true, "Shadow", "");
    }
    else if (inBiped.UI.ShadowType > 0) {
        // it's safe to call this on the whole biped, since marking
        // sets are already deleted in the first pass through the
        // rig (i.e. non-shadow rig)
        setKeyableRig(inBiped.ShadowGlobalSRT);
    }
      
    return inBiped;
}

/*--------------------------------
  Apply Synoptic
--------------------------------*/
function applySynoptic(inBiped){

	var synoptic = inBiped.GlobalSRT.AddProperty("Synoptic Property", 1)
	synoptic.Parameters("path").value = "$SI_HOME/Data/XSI_SAMPLES/Synoptic/Rig/BipedSynoptic_CDK1.htm"


	if(!inBiped.UI.ShadowType){return inBiped};	
	if(inBiped.UI.ShadowType == 0){return inBiped};

	var ShadowSynoptic = inBiped.ShadowGlobalSRT.AddProperty("Synoptic Property", 1)
		
		
	switch (inBiped.UI.ShadowType ){
		
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

	return inBiped;
}

/*--------------------------------
  Default Pose
--------------------------------*/
function defaultPose(inBiped){

    var collection = XSIFactory.CreateActiveXObject( "XSI.Collection" );

    // create a collection with all the children
	SelectObj ( inBiped.GlobalSRT, "BRANCH", true);
	SelectChildNodes(null, null, null);
    // If you want to filter selection
    collection.AddItems( Selection );
	var l_KeyableColl = collection.FindObjectsByMarkingAndCapabilities(null, siKeyable );
	StoreAction (inBiped.model, l_KeyableColl, 1, "DefaultPose", true, 1, 5);

	if(inBiped.UI.ShadowType > 0){
	    collection.RemoveAll();
		SelectObj ( inBiped.ShadowGlobalSRT, "BRANCH", true);
		SelectChildNodes(null, null, null);
        collection.AddItems( Selection );
	    l_KeyableColl = collection.FindObjectsByMarkingAndCapabilities(null, siKeyable );
	    StoreAction (inBiped.model, l_KeyableColl, 1, "ShadowDefaultPose", true, 1, 5);
	}

	return inBiped;
}

/*--------------------------------
 Curve Pyramid 2
--------------------------------*/
function curvePyramid2(inParent, inPos, inHeight, inWidth, inColor, inName){

	// curve pyramid function where the center is at the bottom, not the volume center

	var height = inHeight;
	var width = inWidth/2;

	// p is positive, N is negative

	var top = XSIMath.CreateVector3();
	var pp = XSIMath.CreateVector3();
	var pN = XSIMath.CreateVector3();
	var Np = XSIMath.CreateVector3();
	var NN = XSIMath.CreateVector3();

	top.set(0,height,0);
	pp.set(width,0,width);
	pN.set(width,0,width*-1);
	Np.set(width*-1,0,width);
	NN.set(width*-1,0,width*-1);

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
 Get UI
--------------------------------*/
function get_UI()
{

	// partially generated using a tool that pulls a UI chart from Excel, contact misner for more details

	var sliders = ActiveSceneRoot.AddProperty("Custom_parameter_list",0,"Make Biped Dog Leg");

	var TorsoType = sliders.AddParameter2("TorsoType",siInt4 ,0,0,3,0,3,8,16,"Type","Type");
	var TorsoTypeItems = Array("Quaternion spine",0,"Skeleton spine  ",1,"World Aligned Quaternion Spine  ",2,"Near Axis Aligned Quaternion Spine  ",3);
	var TorsoStretch = sliders.AddParameter2("TorsoStretch",siInt4 ,0,0,1,0,1,8,16,"Type","Type");
	var TorsoStretchItems = Array("Fixed Length, length extention only from slider",0,"Stretches to meet chest icon",1);
	var TorsoDivisions = sliders.AddParameter2("TorsoDivisions",siInt4 ,3,0,100,0,10,8,16,"Divisions","Divisions");
	var IconType = sliders.AddParameter2("IconType",siInt4 ,0,0,1,0,1,8,16,"Type","Type");
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
	var HeadDivisions = sliders.AddParameter2("HeadDivisions",siInt4 ,3,0,100,0,10,8,16,"Divisions","Divisions");
	var Ears = sliders.AddParameter2("Ears",siBool,0,0,1,0,1,8,16,"Active","Active");
	var RotationOrder = sliders.AddParameter2("RotationOrder",siInt4 ,0,0,1,0,1,8,16,"Order","Order");
	var RotationOrderItems = Array("YZX - Best for gimbal lock reduction",0,"XYZ - Default",1);
	var ArmSymmetry = sliders.AddParameter2("ArmSymmetry",siInt4 ,0,0,1,0,1,8,16,"Type","Type");
	var ArmSymmetryItems = Array("Symmetical - Right Arm Scaled -1",0,"Non Symmetrical - Both arms have positive scaling",1);
	var ArmAttachment = sliders.AddParameter2("ArmAttachment",siInt4 ,0,0,1,0,1,8,16,"Type","Type");
	var ArmAttachmentItems = Array("Arms are Children of Shoulders - FK arm style",0,"Arms are Children of Hips - Shrugging shoulder style",1);
	var FingerType = sliders.AddParameter2("FingerType",siInt4 ,0,0,1,0,1,8,16,"Type","Type");
	var FingerTypeItems = Array("Fingers are 2D chains.",0,"Fingers are 3D chains (non planar fingers)",1);
	var ForeArmRoll = sliders.AddParameter2("ForeArmRoll",siBool,0,0,1,0,1,8,16,"Active","Active");
	var ForeArmDivisions = sliders.AddParameter2("ForeArmDivisions",siInt4 ,3,0,100,0,10,8,16,"Number","Number");
	var BicepRoll = sliders.AddParameter2("BicepRoll",siBool,0,0,1,0,1,8,16,"Active","Active");
	var BicepDivisions = sliders.AddParameter2("BicepDivisions",siInt4 ,3,0,100,0,10,8,16,"Number","Number");
	var ThighRoll = sliders.AddParameter2("ThighRoll",siBool,0,0,1,0,1,8,16,"Active","Active");
	var ThighDivisions = sliders.AddParameter2("ThighDivisions",siInt4 ,3,0,100,0,10,8,16,"Number","Number");
	var ArmPitSlide = sliders.AddParameter2("ArmPitSlide",siBool,0,0,1,0,1,8,16,"ArmPits","ArmPits");
	var HipSlide = sliders.AddParameter2("HipSlide",siBool,0,0,1,0,1,8,16,"Hips","Hips");
	var ThighSlide = sliders.AddParameter2("ThighSlide",siBool,0,0,1,0,1,8,16,"Thighs","Thighs");
	var ElbowsJoint = sliders.AddParameter2("ElbowsJoint",siBool,0,0,1,0,1,8,16,"Elbows","Elbows");
	var ShadowType = sliders.AddParameter2("ShadowType",siInt4 ,0,0,7,0,7,8,16,"Type","Type");	
	var ShadowTypeItems = Array("None",0,"SI|3D Skeleton",1,"XSI Skeleton",2,"Null Hierarchy",3,"Box Hierarchy",4,"Box with IK Arms",5,"Box with IK Legs",6,"Box with IK Arms and Legs",7);
	var ShadowHands = sliders.AddParameter2("ShadowHands",siInt4 ,0,0,1,0,1,8,16,"Hands","Hands");
	var ShadowHandsItems = Array("Generate Hands and Fingers",0,"No Shadow Fingers",1);
	var OneModel = sliders.AddParameter2("OneModel",siBool,0,0,1,0,1,8,16,"OneModel","OneModel");
	var IndependentLower = sliders.AddParameter2("IndependentLower",siBool,0,0,1,0,1,8,16,"IndependentLower","IndependentLower");


	var layout = sliders.PPGLayout;
	layout.Clear();
	
	layout.Language = "JScript" ;
	layout.Logic =   OnInit.toString()
				+ MakeBelly_OnChanged.toString()
				+ TorsoType_OnChanged.toString()
				+ BellySlide_OnChanged.toString()
				+ HeadType_OnChanged.toString()
				+ ForeArmRoll_OnChanged.toString()
				+ BicepRoll_OnChanged.toString()
				+ ThighRoll_OnChanged.toString()
				+ ShadowType_OnChanged.toString();
	
	//Set Help Path
	layout.SetAttribute( siUIHelpFile, "<FactoryPath>/Doc/<DocLangPref>/xsidocs.chm::/animtoolbar28.htm" );

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
	//======================= Limbs  ============================
	layout.AddTab("Limbs ");
	layout.AddGroup("Arm Rotation");
	var item14 = layout.AddEnumControl("RotationOrder",RotationOrderItems,"Order",siControlRadio );
	layout.EndGroup();
	layout.AddGroup("Symmetrical Manipulation of Arms");
	var item15 = layout.AddEnumControl("ArmSymmetry",ArmSymmetryItems,"Type",siControlRadio );
	layout.EndGroup();
	layout.AddGroup("Arm Attachment");
	var item16 = layout.AddEnumControl("ArmAttachment",ArmAttachmentItems,"Type",siControlRadio );
	layout.EndGroup();
	layout.AddGroup("Fingers");
	var item17 = layout.AddEnumControl("FingerType",FingerTypeItems,"Type",siControlRadio );
	layout.EndGroup();
	//======================= Roll Division  ============================
	layout.AddTab("Roll Division ");
	layout.AddGroup("ForeArm Roll Subdivision");
	var item18 = layout.AddItem("ForeArmRoll");
	var item19 = layout.AddItem("ForeArmDivisions");
	layout.EndGroup();
	layout.AddGroup("Bicep  Roll Subdivision");
	var item20 = layout.AddItem("BicepRoll");
	var item21 = layout.AddItem("BicepDivisions");
	layout.EndGroup();
	layout.AddGroup("Thigh  Roll Subdivision");
	var item22 = layout.AddItem("ThighRoll");
	var item23 = layout.AddItem("ThighDivisions");
	layout.EndGroup();
	//======================= Skin  ============================
	layout.AddTab("Skin ");
	layout.AddGroup("Simple Sliding");
	var item24 = layout.AddItem("ArmPitSlide");
	var item25 = layout.AddItem("HipSlide");
	layout.EndGroup();
	layout.AddGroup("Sliding and Volume Preservation");
	var item26 = layout.AddItem("ThighSlide");
	layout.EndGroup();
	layout.AddGroup("Joint Compression");
	var item27 = layout.AddItem("ElbowsJoint");
	layout.EndGroup();
	//======================= Shadow Rigs  ============================
	layout.AddTab("Shadow Rigs ");
	layout.AddGroup("Constrain Shadow Character");
	var item28 = layout.AddEnumControl("ShadowType",ShadowTypeItems,"Type",siControlRadio );
	layout.EndGroup();
	layout.AddGroup("Options");
	var item29 = layout.AddEnumControl("ShadowHands",ShadowHandsItems,"Hands",siControlRadio );
	var item30 = layout.AddItem("OneModel","Create Unified Skeleton and Rig Model");
	var item31 = layout.AddItem("IndependentLower","Create Independent Lower Hierarchy");
	layout.EndGroup();


	try{
		inspectobj( sliders, "", XSIUtils.Translate( IDS_MAKE_BIPED_DOGLEG_TITLE, "XSISCRIPTS" ), siModal );
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
	returnObj.RotationOrder = RotationOrder.value;
	returnObj.ArmSymmetry = ArmSymmetry.value;
	returnObj.ArmAttachment = ArmAttachment.value;
	returnObj.FingerType = FingerType.value;
	returnObj.ForeArmRoll = ForeArmRoll.value;
	returnObj.ForeArmDivisions = ForeArmDivisions.value;
	returnObj.BicepRoll = BicepRoll.value;
	returnObj.BicepDivisions = BicepDivisions.value;
	returnObj.ThighRoll = ThighRoll.value;
	returnObj.ThighDivisions = ThighDivisions.value;
	returnObj.ArmPitSlide = ArmPitSlide.value;
	returnObj.HipSlide = HipSlide.value;
	returnObj.ThighSlide = ThighSlide.value;
	returnObj.ElbowsJoint = ElbowsJoint.value;
	returnObj.ShadowType = ShadowType.value;
	returnObj.ShadowHands = ShadowHands.value;
	returnObj.OneModel		 			= OneModel.value;
	returnObj.IndependentLower 			= IndependentLower.value;


	deleteobj(sliders);



	return returnObj;

}

function OnInit()
{
	TorsoType_OnChanged();
	BellySlide_OnChanged();
	MakeBelly_OnChanged();
	HeadType_OnChanged();
	ForeArmRoll_OnChanged();	
	BicepRoll_OnChanged();	
	ThighRoll_OnChanged();
	ShadowType_OnChanged();
}

function HeadType_OnChanged()
{
	PPG.HeadStretch.Enable( PPG.HeadType.value == 1 );
}

function TorsoType_OnChanged()
{
    if (PPG.TorsoType.value != 1){
        PPG.TorsoStretch.Enable( true)
    }else{
        PPG.TorsoStretch.Enable( false)
    }
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

function ForeArmRoll_OnChanged()
{
	PPG.ForeArmDivisions.Enable( PPG.ForeArmRoll.value );
}

function BicepRoll_OnChanged()
{
	PPG.BicepDivisions.Enable( PPG.BicepRoll.value );
}

function ThighRoll_OnChanged()
{
	PPG.ThighDivisions.Enable( PPG.ThighRoll.value );
}

function ShadowType_OnChanged()
{
	PPG.ShadowHands.Enable( PPG.ShadowType.value != 0 );
	PPG.IndependentLower.Enable( PPG.ShadowType.value != 0 );
	PPG.OneModel.Enable( PPG.ShadowType.value != 0 );
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


