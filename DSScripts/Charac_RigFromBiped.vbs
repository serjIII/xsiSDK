'
' Shadow Rig Prefixes used in this code: 
'
' PREFIX	MEANING			DESCRIPTION
' ======    =======         ===========
' AB		ATTACH BOXES	ex: AB_draw_spine
'							AB_* methods are used when a BOX HIERARCHY SHADOW RIG

' AS		ATTACH SKELETON	ex: AS_Attach_hips
'							AB_* methods are used when a SKELETON SHADOW RIG
' 
' AN		ATTACH NULL		ex: AN_draw_spine
'							AN* methods are used to create a NULL SHADOW RIG
'
'
' LISTING OF subs/functions contained in this file:
'	
'
'-------------------------
' RIG CREATION RELATED
'
'		CreateRigFromBipedGuideProc
'		rig_from_guide
'		applySynoptic
'		applySynoptic2
'		load_guide
'		Load_Model
'		get_Dial
'		Create_hand_icons
'		Create_up_vectors
'		align_arms
'		model_and_GlobalSRT_match
'		Attach_hips
'		Attach_spine
'		attach_feet
'		Attach_UpperBody
'		Attach_Hands
'		align_foot
'		align_legs
'		get_y_rotation
'		fk_prep
'		root_Alignment
'		set_prefangles
'		rt_match
'		GetVector
'		IsComponent
'		make_DefaultPose
'		positive_Fingers
'		set_first_bone
'		hand_poses
'		pose_sel
'		reset_all
'		FootRollAngle
'		spine_hookup
'		draw_spine
'		bind_curve
'		Create_top_Lumber
'		make_Lumber
'		modify_foot_parenting
'		skelSpine
'		subdivide_bicep
'		subdivide_thigh
'		subdivide_forearm
'		process_head
'		create_neck
'		draw_neck_curve
'		bind_neck_curve
'		fkLegs
'		slidingHookup
'		StoreBoundingPose
'		checkSlidingComponents
'		Stomach
'		rightThigh
'		leftThigh
'		ProjectOnPlane
'		ProjectOnVector
'		VectorPlaneIntersection
'		BackOfLKnee
'		BackOfRKnee
'		RElbow
'		LElbow
'		SlideSetup
'		ParentClosestBind
'		TwoBoneChain_Pos2Rot

'-------------------------
' SKELETON SHADOW HIERARCHY RELATED
'
'		attach_skeleton
'		AS_refresh
'		AS_HandRefresh
'		AS_model_and_GlobalSRT_match
'		AS_Attach_hips
'		AS_Attach_UpperBody
'		AS_Attach_Hands
'		AS_attach_feet
'		AS_draw_spine
'		AS_rig_dupSkel
'		AS_GlueObjects
'		AS_Attach_UpVectors
'		PosCnstwithCompensation
'		UpV
'		AS_Poseattach
'		AS_spineattach
'		AS_QuatSpinePos
'		ApplyUpVectors
'
'-------------------------
' BOX SHADOW HIERARCHY RELATED
'
'		attach_boxes
'		AB_model_and_GlobalSRT_match
'		AB_early_attachment
'		AB_attach
'		AB_Poseattach
'		AB_Bicepattach
'		AB_draw_spine
'		AB_draw_SkeletonSpine
'		AB_delete_clusters
'		AB_Process_hands
'		AB_rt_match
'		AB_copyCenter
'
'-------------------------
' NULL SHADOW HIERARCHY RELATED
'
'		attach_nulls
'		AN_model_and_GlobalSRT_match
'		AN_attach
'		AN_match_up
'		AN_draw_spine
'		AN_draw_Skelspine
'
'-------------------------
' OTHER
'
'		make_ShadowDefault
'		chestConstrain
'		t_match
'		PosCnst
'

'******************************************************************************
' String Constants (used to translate)
'******************************************************************************
const IDS_CREATE_RIG_FROM_BIPEDGUIDE_MSG		= 1048
const IDS_CREATE_RIG_FROM_GUIDE_TITLE			= 1049

'***************************************************
' pschretl Feb 2004
'
' UI version of MakeBiped. Command version uses jscript that does not support output arguments.
' To work around this use a vbs version of the command that copies arg values from the biped object to output arguments.
'***************************************************
function MakeBipedUI(inoutTorsoType,  inoutTorsoStretch,  inoutTorsoDivisions,  inoutIconType,  inoutMakeBelly,_
inoutBellySlide,  inoutBellyCenterPercentage, inoutHeadType,  inoutHeadStretch, inoutHeadDivisions, inoutEars,_
inoutRotationOrder,  inoutArmSymmetry,  inoutArmAttachment, inoutFinoutgerType, inoutForeArmRoll,  inoutForeArmDivisions,_
inoutBicepRoll, inoutBicepDivisions, inoutThighRoll,  inoutThighDivisions,  inoutArmPitSlide, inoutHipSlide,_
inoutThighSlide,  inoutElbowsJoint,  inoutKneeJoint,  inoutShadowType,  inoutShadowHands, inoutOneModel, inoutIndependentLower,_
inoutThreeBoneToes, inoutCreateShadowKeySet, inoutInspectUI)

	On Error Resume Next

	dim biped
	set biped = MakeBiped(	inoutTorsoType,  inoutTorsoStretch,  inoutTorsoDivisions,  inoutIconType,  inoutMakeBelly,_
						inoutBellySlide,  inoutBellyCenterPercentage, inoutHeadType,  inoutHeadStretch, inoutHeadDivisions, inoutEars,_
						inoutRotationOrder,  inoutArmSymmetry,  inoutArmAttachment, inoutFinoutgerType, inoutForeArmRoll,  inoutForeArmDivisions,_
						inoutBicepRoll, inoutBicepDivisions, inoutThighRoll,  inoutThighDivisions,  inoutArmPitSlide, inoutHipSlide,_
						inoutThighSlide,  inoutElbowsJoint,  inoutKneeJoint,  inoutShadowType,  inoutShadowHands, inoutOneModel, inoutIndependentLower,_
						inoutThreeBoneToes, inoutCreateShadowKeySet, false)

	if(biped<>empty) then
		inoutTorsoType				= biped.UI.TorsoType			
		inoutTorsoStretch			= biped.UI.TorsoStretch		
		inoutTorsoDivisions			= biped.UI.TorsoDivisions
		inoutIconType				= biped.UI.IconType
		inoutMakeBelly				= biped.UI.MakeBelly
		inoutBellySlide				= biped.UI.BellySlide
		inoutBellyCenterPercentage	= biped.UI.BellyCenterPercentage
		inoutHeadType				= biped.UI.HeadType
		inoutHeadStretch			= biped.UI.HeadStretch
		inoutHeadDivisions			= biped.UI.HeadDivisions
		inoutEars					= biped.UI.Ears
		inoutRotationOrder			= biped.UI.RotationOrder
		inoutArmSymmetry			= biped.UI.ArmSymmetry
		inoutArmAttachment			= biped.UI.ArmAttachment
		inoutFinoutgerType			= biped.UI.FingerType
		inoutForeArmRoll			= biped.UI.ForeArmRoll
		inoutForeArmDivisions		= biped.UI.ForeArmDivisions
		inoutBicepRoll				= biped.UI.BicepRoll
		inoutBicepDivisions			= biped.UI.BicepDivisions
		inoutThighRoll				= biped.UI.ThighRoll
		inoutThighDivisions			= biped.UI.ThighDivisions
		inoutArmPitSlide			= biped.UI.ArmPitSlide
		inoutHipSlide				= biped.UI.HipSlide
		inoutThighSlide				= biped.UI.ThighSlide
		inoutElbowsJoint			= biped.UI.ElbowsJoint
		inoutKneeJoint				= biped.UI.KneeJoint
		inoutShadowType				= biped.UI.ShadowType
		inoutShadowHands			= biped.UI.ShadowHands 
		inoutOneModel				= biped.UI.OneModel
		inoutIndependentLower		= biped.UI.IndependentLower
		inoutThreeBoneToes			= biped.UI.ThreeBoneToes
		inoutCreateShadowKeySet		= biped.UI.CreateShadowKeySet
		inoutInspectUI				= true

		InspectObj biped.Sliders

	end if

	set MakeBipedUI = biped

end function

'***************************************************
' pschretl Feb 2004
'
' UI version of MakeBipedDogLeg. Command version uses jscript that does not support output arguments.
' To work around this use a vbs version of the command that copies arg values from the biped object to output arguments.
'***************************************************
function MakeBipedDogLegUI(inoutTorsoType,  inoutTorsoStretch,  inoutTorsoDivisions,  inoutIconType,  inoutMakeBelly,_
inoutBellySlide,  inoutBellyCenterPercentage, inoutHeadType,  inoutHeadStretch, inoutHeadDivisions, inoutEars,_
inoutRotationOrder,  inoutArmSymmetry,  inoutArmAttachment, inoutFinoutgerType, inoutForeArmRoll,  inoutForeArmDivisions,_
inoutBicepRoll, inoutBicepDivisions, inoutThighRoll,  inoutThighDivisions,  inoutArmPitSlide, inoutHipSlide,_
inoutThighSlide,  inoutElbowsJoint,  inoutShadowType,  inoutShadowHands, inoutOneModel, inoutIndependentLower,  _
inoutInspectUI)

	On Error Resume Next

	dim biped
	set biped = MakeBipedDogLeg( inoutTorsoType,  inoutTorsoStretch,  inoutTorsoDivisions,  inoutIconType,  inoutMakeBelly,_
						inoutBellySlide,  inoutBellyCenterPercentage, inoutHeadType,  inoutHeadStretch, inoutHeadDivisions, inoutEars,_
						inoutRotationOrder,  inoutArmSymmetry,  inoutArmAttachment, inoutFinoutgerType, inoutForeArmRoll,  inoutForeArmDivisions,_
						inoutBicepRoll, inoutBicepDivisions, inoutThighRoll,  inoutThighDivisions,  inoutArmPitSlide, inoutHipSlide,_
						inoutThighSlide,  inoutElbowsJoint,  inoutShadowType,  inoutShadowHands, inoutOneModel, inoutIndependentLower,_
						inoutCreateShadowKeySet, false)

	if(biped<>empty) then
		inoutTorsoType				= biped.UI.TorsoType			
		inoutTorsoStretch			= biped.UI.TorsoStretch		
		inoutTorsoDivisions			= biped.UI.TorsoDivisions
		inoutIconType				= biped.UI.IconType
		inoutMakeBelly				= biped.UI.MakeBelly
		inoutBellySlide				= biped.UI.BellySlide
		inoutBellyCenterPercentage	= biped.UI.BellyCenterPercentage
		inoutHeadType				= biped.UI.HeadType
		inoutHeadStretch			= biped.UI.HeadStretch
		inoutHeadDivisions			= biped.UI.HeadDivisions
		inoutEars					= biped.UI.Ears
		inoutRotationOrder			= biped.UI.RotationOrder
		inoutArmSymmetry			= biped.UI.ArmSymmetry
		inoutArmAttachment			= biped.UI.ArmAttachment
		inoutFinoutgerType			= biped.UI.FingerType
		inoutForeArmRoll			= biped.UI.ForeArmRoll
		inoutForeArmDivisions		= biped.UI.ForeArmDivisions
		inoutBicepRoll				= biped.UI.BicepRoll
		inoutBicepDivisions			= biped.UI.BicepDivisions
		inoutThighRoll				= biped.UI.ThighRoll
		inoutThighDivisions			= biped.UI.ThighDivisions
		inoutArmPitSlide			= biped.UI.ArmPitSlide
		inoutHipSlide				= biped.UI.HipSlide
		inoutThighSlide				= biped.UI.ThighSlide
		inoutElbowsJoint			= biped.UI.ElbowsJoint
		inoutShadowType				= biped.UI.ShadowType
		inoutShadowHands			= biped.UI.ShadowHands 
		inoutOneModel				= biped.UI.OneModel
		inoutIndependentLower		= biped.UI.IndependentLower
		inoutCreateShadowKeySet     = biped.UI.CreateShadowKeySet
		inoutInspectUI				= true

		InspectObj biped.Sliders

	end if

	set MakeBipedDogLegUI = biped

end function

'***************************************************
' Rig From Guide
' by Michael Isner
' July 2001 - June 2002
'***************************************************
sub CreateRigFromBipedGuideProc()
	dim l_bvalid, l_binspectprev

	' Set temporarily the autoinspect to off, otherwize CreateRigFromGuideProc will pop
	' multiple unwanted property editors...
	l_binspectprev = SetUserPref( siAutoInspect, False )

	rig_from_guide l_bvalid

	if l_bvalid = False then
		logmessage "Proportion Guide (or elements of the guide) not found in current scene.", siError
		logmessage "Load and adjust the Proportion Guide first (Get: Primitive: Model: Rig - Proportional Guide).", siError
		MsgBox XSIUtils.Translate( IDS_CREATE_RIG_FROM_BIPEDGUIDE_MSG, "XSISCRIPTS" )
	end if

	' Set the autoinspect back
	SetUserPref siAutoInspect, l_binspectprev

end sub
'--------------------------------------------
' Rig From Guide
'--------------------------------------------
sub rig_from_guide(out_valid)

	dim rigModel, sel, nbLumber, hTargets, valid2
	dim rHandT, lHandT, sliders, skeleton, nulls, boxes, hands, rtk
	dim feetUnderBody, shadow, spineType,headType,froll,rsubs
	dim bicepDiv, thighDiv, legStyle, nbNeck, nbBicep, nbThigh
	dim Hips, Armpits, Stomach, Thighs, Elbows, Knees, BindingNulls
	dim dupSkel
	dim out_RHandRollComp, out_LHandRollComp 'used to compensate forearm roll
	
	set sel = GetValue("SelectionList")
		
	load_guide guide, valid
	if valid = False then exit sub
	
	get_Dial nbLumber, hTargets, shadow, skeleton, nulls, boxes, hands, rtk,_
	 feetUnderBody, spineType,headType,froll,rsubs, bicepDiv, thighDiv, legStyle,_
	 nbNeck, nbBicep, nbThigh, Hips, Armpits, Stomach, Thighs, Elbows, Knees, valid2

	if valid2 = False then 
		out_valid = True
		exit sub	
	end if
	
	setuserpref("SI3D_NODETRANSFORM_CHILD_COMPENSATE"), 0
	
	Load_Model "Biped_Rig", rigModel
		
	set sliders = rigModel.AddProperty("Custom_parameter_list",,"Character_Controls")  
	
	model_and_GlobalSRT_match rigModel, out_valid
	if out_valid = False then exit sub
	
	Attach_hips rigModel, out_valid
	if out_valid = False then exit sub
	
	Attach_spine rigModel, out_valid
	if out_valid = False then exit sub
	
	Attach_feet rigModel, out_valid
	if out_valid = False then exit sub
	
	align_legs rigModel

	Attach_UpperBody rigModel, out_valid
	if out_valid = False then exit sub
	
	if hTargets = 0 then 
		dim RupV, LupV
		Create_up_vectors rigModel, RupV, LupV
	end if	

	if hTargets = 0 then
		align_arms rigModel
	end if
	
	'used to compensate forearm roll 
	out_RHandRollComp = 0
	out_LHandRollComp = 0

	Attach_Hands rigModel, out_RHandRollComp, out_LHandRollComp, out_valid
	if out_valid = False then exit sub
	
	fk_prep rigModel
	
	redim BindingNulls(5)
	for i = 0 to 5
		set BindingNulls(i) = Nothing
	next	
	
	'roll subdivision
	if froll = True then 
		subdivide_forearm rigModel, rsubs, BindingNulls, out_RHandRollComp, out_LHandRollComp
	end if
	
	if bicepDiv = True then 
		subdivide_bicep rigModel, nbBicep, BindingNulls
	end if
	
	if thighDiv = True then 
		subdivide_thigh rigModel, nbThigh, BindingNulls
	end if
	
	if spineType = 0 then
		spine_hookup rigModel, nbLumber, sliders
	else
		if shadow = False then skeleton = False
		skelSpine rigModel, nbLumber, skeleton, headType, dupSkel
	end if
	
	process_head rigModel, headType, nbNeck, spineType, sliders
	
	if shadow = True then
		if skeleton = True then attach_skeleton rigModel, nbLumber, hands, headType, spineType, dupSkel
		refresh
		if boxes = True then attach_boxes rigModel, nbLumber, hands, headType, spineType
		refresh
		if nulls = True then attach_nulls rigModel, nbLumber, spineType, headType, hands
	end if
	
	if headType = 0 then
		DeleteObj "B:" & rigModel & ".HeadRoot"
	end if
	
	if legStyle = 1 then
		fkLegs guide, rigModel
		applySynoptic rigModel, "FK"
	else
		FootRollAngle rigModel, sliders
		applySynoptic rigModel, "IK"		
	end if
	
	make_DefaultPose rigModel
	
	hand_poses rigModel
	
	reset_all rigModel

	modify_foot_parenting rigModel, feetUnderBody

	slidingHookup guide, rigModel, BindingNulls, Hips, Armpits, Stomach, Thighs, Elbows, Knees, spineType 
	
	logmessage "Build Rig from Guide Done."

	SelectObj sel

	'
	' There should be no cycles in the finished rig
	' This will log warning if there are any.
	'
'	CycleChecking rigModel
	
	InspectObj sliders

end sub
'---------------------------------------------
' Apply Synoptic
'---------------------------------------------
function applySynoptic(inRig, inStyle)
	
	SelectObj inRig & ".globalSRT", "BRANCH"
	set rtn = AddProp("Synoptic Property").value("Value")
	
	if inStyle = "FK" then
		SetValue rtn & ".path", "$SI_HOME/Data/XSI_SAMPLES/Synoptic/Rig/BipedSynoptic_FK1.htm"
	else 
		SetValue rtn & ".path", "$SI_HOME/Data/XSI_SAMPLES/Synoptic/Rig/BipedSynoptic_IK1.htm"
	end if
	
end function

'---------------------------------------------
' Apply Synoptic 2
'---------------------------------------------
function applySynoptic2(inRig, inStyle)
	
	SelectObj inRig & ".globalSRT", "BRANCH"
	set rtn = AddProp("Synoptic Property").value("Value")
	
	select case inStyle 
	
		case 0
			SetValue rtn & ".path", "$SI_HOME/Data/XSI_SAMPLES/Synoptic/Rig/NullBipedSynoptic.htm"
		case 1 
			SetValue rtn & ".path", "$SI_HOME/Data/XSI_SAMPLES/Synoptic/Rig/BoxBipedSynoptic.htm"
		case 2
			SetValue rtn & ".path", "$SI_HOME/Data/XSI_SAMPLES/Synoptic/Rig/SkeletonBipedSynoptic.htm"
		
	end select
	
end function
'---------------------------------------------
' Check Validity
'---------------------------------------------
function load_guide(out_guide, out_valid)
	
	dim ID
	ID = False
	out_valid = False
	
	'first check for the model
	
	if IsComponent("BipedPropGuide") = False then
		logmessage "Biped Proportioning Guide not found: Biped from Guide Canceled"
		exit function
	end if
	
	
	'splines
	if IsComponent("BipedPropGuide.SpineSpline") = False then ID = "BipedPropGuide.SpineSpline"
	
	if ID <> False then
		logmessage "Object: " & ID & "not found in Proportioning Guide: Biped from Guide Canceled"
		exit function
	end if

	'boxes
	
	if IsComponent("BipedPropGuide.hipBone1") = False then ID = "BipedPropGuide.hipBone1"
	if IsComponent("BipedPropGuide.SpineBase") = False then ID = "BipedPropGuide.SpineBase"
	if IsComponent("BipedPropGuide.RibCageStart") = False then ID = "BipedPropGuide.RibCageStart"
	if IsComponent("BipedPropGuide.RibCageEnd") = False then ID = "BipedPropGuide.RibCageEnd"
	if IsComponent("BipedPropGuide.Neck") = False then ID = "BipedPropGuide.Neck"
	if IsComponent("BipedPropGuide.Head") = False then ID = "BipedPropGuide.Head"
	if IsComponent("BipedPropGuide.RShoulderStart") = False then ID = "BipedPropGuide.RShoulderStart"
	if IsComponent("BipedPropGuide.RShoulder") = False then ID = "BipedPropGuide.RShoulder"
	if IsComponent("BipedPropGuide.RElbow") = False then ID = "BipedPropGuide.RElbow"
	if IsComponent("BipedPropGuide.RHand") = False then ID = "BipedPropGuide.RHand"
	if IsComponent("BipedPropGuide.RHandEnd") = False then ID = "BipedPropGuide.RHandEnd"
	if IsComponent("BipedPropGuide.RPinky1") = False then ID = "BipedPropGuide.RPinky1"
	if IsComponent("BipedPropGuide.RPinky2") = False then ID = "BipedPropGuide.RPinky2"
	if IsComponent("BipedPropGuide.RPinky3") = False then ID = "BipedPropGuide.RPinky3"
	if IsComponent("BipedPropGuide.RPinky4") = False then ID = "BipedPropGuide.RPinky4"
	if IsComponent("BipedPropGuide.RRing1") = False then ID = "BipedPropGuide.RRing1"
	if IsComponent("BipedPropGuide.RRing2") = False then ID = "BipedPropGuide.RRing2"
	if IsComponent("BipedPropGuide.RRing3") = False then ID = "BipedPropGuide.RRing3"
	if IsComponent("BipedPropGuide.RRing4") = False then ID = "BipedPropGuide.RRing4"
	if IsComponent("BipedPropGuide.RMiddle1") = False then ID = "BipedPropGuide.RMiddle1"
	if IsComponent("BipedPropGuide.RMiddle2") = False then ID = "BipedPropGuide.RMiddle2"
	if IsComponent("BipedPropGuide.RMiddle3") = False then ID = "BipedPropGuide.RMiddle3"
	if IsComponent("BipedPropGuide.RMiddle4") = False then ID = "BipedPropGuide.RMiddle4"
	if IsComponent("BipedPropGuide.RIndex1") = False then ID = "BipedPropGuide.RIndex1"
	if IsComponent("BipedPropGuide.RIndex2") = False then ID = "BipedPropGuide.RIndex2"
	if IsComponent("BipedPropGuide.RIndex3") = False then ID = "BipedPropGuide.RIndex3"
	if IsComponent("BipedPropGuide.RIndex4") = False then ID = "BipedPropGuide.RIndex4"
	if IsComponent("BipedPropGuide.RThumb1") = False then ID = "BipedPropGuide.RThumb1"
	if IsComponent("BipedPropGuide.RThumb2") = False then ID = "BipedPropGuide.RThumb2"
	if IsComponent("BipedPropGuide.RThumb3") = False then ID = "BipedPropGuide.RThumb3"
	if IsComponent("BipedPropGuide.RThumb4") = False then ID = "BipedPropGuide.RThumb4"
	if IsComponent("BipedPropGuide.LShoulderStart") = False then ID = "BipedPropGuide.LShoulderStart"
	if IsComponent("BipedPropGuide.LShoulder") = False then ID = "BipedPropGuide.LShoulder"
	if IsComponent("BipedPropGuide.LElbow") = False then ID = "BipedPropGuide.LElbow"
	if IsComponent("BipedPropGuide.LHand") = False then ID = "BipedPropGuide.LHand"
	if IsComponent("BipedPropGuide.LHandEnd") = False then ID = "BipedPropGuide.LHandEnd"
	if IsComponent("BipedPropGuide.LThumb1") = False then ID = "BipedPropGuide.LThumb1"
	if IsComponent("BipedPropGuide.LThumb2") = False then ID = "BipedPropGuide.LThumb2"
	if IsComponent("BipedPropGuide.LThumb3") = False then ID = "BipedPropGuide.LThumb3"
	if IsComponent("BipedPropGuide.LThumb4") = False then ID = "BipedPropGuide.LThumb4"
	if IsComponent("BipedPropGuide.LPinky1") = False then ID = "BipedPropGuide.LPinky1"
	if IsComponent("BipedPropGuide.LPinky2") = False then ID = "BipedPropGuide.LPinky2"
	if IsComponent("BipedPropGuide.LPinky3") = False then ID = "BipedPropGuide.LPinky3"
	if IsComponent("BipedPropGuide.LPinky4") = False then ID = "BipedPropGuide.LPinky4"
	if IsComponent("BipedPropGuide.LRing1") = False then ID = "BipedPropGuide.LRing1"
	if IsComponent("BipedPropGuide.LRing2") = False then ID = "BipedPropGuide.LRing2"
	if IsComponent("BipedPropGuide.LRing3") = False then ID = "BipedPropGuide.LRing3"
	if IsComponent("BipedPropGuide.LRing4") = False then ID = "BipedPropGuide.LRing4"
	if IsComponent("BipedPropGuide.LMiddle1") = False then ID = "BipedPropGuide.LMiddle1"
	if IsComponent("BipedPropGuide.LMiddle2") = False then ID = "BipedPropGuide.LMiddle2"
	if IsComponent("BipedPropGuide.LMiddle3") = False then ID = "BipedPropGuide.LMiddle3"
	if IsComponent("BipedPropGuide.LMiddle4") = False then ID = "BipedPropGuide.LMiddle4"
	if IsComponent("BipedPropGuide.LIndex1") = False then ID = "BipedPropGuide.LIndex1"
	if IsComponent("BipedPropGuide.LIndex2") = False then ID = "BipedPropGuide.LIndex2"
	if IsComponent("BipedPropGuide.LIndex3") = False then ID = "BipedPropGuide.LIndex3"
	if IsComponent("BipedPropGuide.LIndex4") = False then ID = "BipedPropGuide.LIndex4"
	if IsComponent("BipedPropGuide.LLeg") = False then ID = "BipedPropGuide.LLeg"
	if IsComponent("BipedPropGuide.LKnee") = False then ID = "BipedPropGuide.LKnee"
	if IsComponent("BipedPropGuide.LFoot") = False then ID = "BipedPropGuide.LFoot"
	if IsComponent("BipedPropGuide.LHeel") = False then ID = "BipedPropGuide.LHeel"
	if IsComponent("BipedPropGuide.LToe") = False then ID = "BipedPropGuide.LToe"
	if IsComponent("BipedPropGuide.LHeelPivot") = False then ID = "BipedPropGuide.LHeelPivot"
	if IsComponent("BipedPropGuide.RLeg") = False then ID = "BipedPropGuide.RLeg"
	if IsComponent("BipedPropGuide.RKnee") = False then ID = "BipedPropGuide.RKnee"
	if IsComponent("BipedPropGuide.RFoot") = False then ID = "BipedPropGuide.RFoot"
	if IsComponent("BipedPropGuide.RHeel") = False then ID = "BipedPropGuide.RHeel"
	if IsComponent("BipedPropGuide.RToe") = False then ID = "BipedPropGuide.RToe"
	if IsComponent("BipedPropGuide.RHeelPivot") = False then ID = "BipedPropGuide.RHeelPivot"
	if IsComponent("BipedPropGuide.Spine1") = False then ID = "BipedPropGuide.Spine1"
	if IsComponent("BipedPropGuide.Spine2") = False then ID = "BipedPropGuide.Spine2"
	
	if ID <> False then
		logmessage "Object: " & ID & "not found in Proportioning Guide: Biped from Guide Canceled"
		exit function
	end if

	'bones
	
	if IsComponent("BipedPropGuide.bone37") = False then ID = "BipedPropGuide.bone37"
	if IsComponent("BipedPropGuide.bone32") = False then ID = "BipedPropGuide.bone32"
	if IsComponent("BipedPropGuide.bone31") = False then ID = "BipedPropGuide.bone31"
	if IsComponent("BipedPropGuide.bone33") = False then ID = "BipedPropGuide.bone33"
	if IsComponent("BipedPropGuide.bone30") = False then ID = "BipedPropGuide.bone30"
	if IsComponent("BipedPropGuide.bone42") = False then ID = "BipedPropGuide.bone42"
	if IsComponent("BipedPropGuide.bone38") = False then ID = "BipedPropGuide.bone38"
	if IsComponent("BipedPropGuide.bone39") = False then ID = "BipedPropGuide.bone39"
	if IsComponent("BipedPropGuide.bone43") = False then ID = "BipedPropGuide.bone43"
	if IsComponent("BipedPropGuide.bone40") = False then ID = "BipedPropGuide.bone40"
	if IsComponent("BipedPropGuide.bone61") = False then ID = "BipedPropGuide.bone61"
	if IsComponent("BipedPropGuide.bone44") = False then ID = "BipedPropGuide.bone44"
	if IsComponent("BipedPropGuide.bone45") = False then ID = "BipedPropGuide.bone45"
	if IsComponent("BipedPropGuide.bone29") = False then ID = "BipedPropGuide.bone29"
	if IsComponent("BipedPropGuide.bone34") = False then ID = "BipedPropGuide.bone34"
	if IsComponent("BipedPropGuide.bone35") = False then ID = "BipedPropGuide.bone35"
	if IsComponent("BipedPropGuide.bone36") = False then ID = "BipedPropGuide.bone36"
	if IsComponent("BipedPropGuide.bone58") = False then ID = "BipedPropGuide.bone58"
	if IsComponent("BipedPropGuide.bone59") = False then ID = "BipedPropGuide.bone59"
	if IsComponent("BipedPropGuide.bone60") = False then ID = "BipedPropGuide.bone60"
	if IsComponent("BipedPropGuide.bone55") = False then ID = "BipedPropGuide.bone55"
	if IsComponent("BipedPropGuide.bone56") = False then ID = "BipedPropGuide.bone56"
	if IsComponent("BipedPropGuide.bone57") = False then ID = "BipedPropGuide.bone57"
	if IsComponent("BipedPropGuide.bone52") = False then ID = "BipedPropGuide.bone52"
	if IsComponent("BipedPropGuide.bone53") = False then ID = "BipedPropGuide.bone53"
	if IsComponent("BipedPropGuide.bone54") = False then ID = "BipedPropGuide.bone54"
	if IsComponent("BipedPropGuide.bone49") = False then ID = "BipedPropGuide.bone49"
	if IsComponent("BipedPropGuide.bone50") = False then ID = "BipedPropGuide.bone50"
	if IsComponent("BipedPropGuide.bone51") = False then ID = "BipedPropGuide.bone51"
	if IsComponent("BipedPropGuide.bone46") = False then ID = "BipedPropGuide.bone46"
	if IsComponent("BipedPropGuide.bone47") = False then ID = "BipedPropGuide.bone47"
	if IsComponent("BipedPropGuide.bone48") = False then ID = "BipedPropGuide.bone48"
	if IsComponent("BipedPropGuide.bone") = False then ID = "BipedPropGuide.bone"
	if IsComponent("BipedPropGuide.bone15") = False then ID = "BipedPropGuide.bone15"
	if IsComponent("BipedPropGuide.bone16") = False then ID = "BipedPropGuide.bone16"
	if IsComponent("BipedPropGuide.bone19") = False then ID = "BipedPropGuide.bone19"
	if IsComponent("BipedPropGuide.bone18") = False then ID = "BipedPropGuide.bone18"
	if IsComponent("BipedPropGuide.bone17") = False then ID = "BipedPropGuide.bone17"
	if IsComponent("BipedPropGuide.bone20") = False then ID = "BipedPropGuide.bone20"
	if IsComponent("BipedPropGuide.bone21") = False then ID = "BipedPropGuide.bone21"
	if IsComponent("BipedPropGuide.bone22") = False then ID = "BipedPropGuide.bone22"
	if IsComponent("BipedPropGuide.bone23") = False then ID = "BipedPropGuide.bone23"
	if IsComponent("BipedPropGuide.bone24") = False then ID = "BipedPropGuide.bone24"
	if IsComponent("BipedPropGuide.bone25") = False then ID = "BipedPropGuide.bone25"
	if IsComponent("BipedPropGuide.bone26") = False then ID = "BipedPropGuide.bone26"
	if IsComponent("BipedPropGuide.bone27") = False then ID = "BipedPropGuide.bone27"
	if IsComponent("BipedPropGuide.bone28") = False then ID = "BipedPropGuide.bone28"
	if IsComponent("BipedPropGuide.bone62") = False then ID = "BipedPropGuide.bone62"
	if IsComponent("BipedPropGuide.bone63") = False then ID = "BipedPropGuide.bone63"
	
	
	if ID <> False then
		logmessage "Object: " & ID & "not found in Proportioning Guide: Biped from Guide Canceled"
		exit function
	end if

	set oRoot = Application.ActiveSceneRoot
	set out_guide = oRoot.FindChild("BipedPropGuide")
	
	out_valid = True

end function
'---------------------------------------------
' Load Model
'---------------------------------------------
function Load_Model(in_modelname, out_model)

	set out_model = GetPresetModel( in_modelname, in_modelname )
	
end function
'---------------------------------------------
' Get Dialogue
'---------------------------------------------
function get_Dial(out_nbLumber, out_hTargets, out_shadow, out_skeleton,out_nulls,_
	out_boxes,out_hands,out_rtk,out_feetUnderBody,out_spineType,out_headType,out_froll,_
	out_rsubs,out_bicepDiv, out_thighDiv, out_legStyle, out_nbNeck, out_nbBicep, out_nbThigh,_
	out_Hips, out_Armpits, out_Stomach, out_Thighs, out_Elbows, out_Knees, out_valid)
	
	dim sroot, UI

	set sroot = ActiveProject.ActiveScene.Root
	set UI = sroot.AddProperty("rig_from_guide_04", 0, "Rig From Guide")

	On Error Resume Next
	inspectobj UI,,XSIUtils.Translate( IDS_CREATE_RIG_FROM_GUIDE_TITLE, "XSISCRIPTS" ), siModal
	
	if Err.Number <> 0 then
		DeleteObj UI
		out_valid = False
		exit function
	end if
	
	On Error Goto 0
	
	out_nbLumber = GetValue(UI & ".number_of_vertebra")
	out_hTargets = GetValue(UI & ".Attach_Hand_Targets")
	out_skeleton = GetValue(UI & ".Simple_Skeleton")	
	out_nulls = GetValue(UI & ".Null_Hierarchy")	
	out_boxes = GetValue(UI & ".Box_Hierarchy")
	out_hands= GetValue(UI & ".Hands")		
	out_rtk = GetValue(UI & ".RTK_Ready")	
	out_feetUnderBody = GetValue(UI & ".feet_under_body")	
	out_shadow = GetValue(UI & ".Constrain_Low_Res_Character")	
	out_spineType = GetValue(UI & ".Spine_Type")
	out_headType = GetValue(UI & ".Head_Type")	
	out_froll = GetValue(UI & ".ForeArm_Roll")
	out_rsubs = GetValue(UI & ".forearm_subdivisions")	
	
	out_bicepDiv = GetValue(UI & ".Bicep_Division")	
	out_thighDiv = GetValue(UI & ".Thigh_Division")		
	out_legStyle = GetValue(UI & ".leg_style")	
	
	out_nbNeck = GetValue(UI & ".neck_subdivisions")		
	out_nbBicep = GetValue(UI & ".nbBicepDivisions")		
	out_nbThigh = GetValue(UI & ".nbThighDivisions")				

	out_Hips = GetValue(UI & ".Hips")		
	out_Armpits = GetValue(UI & ".Armpits")		
	out_Stomach = GetValue(UI & ".Stomach")		
	out_Thighs = GetValue(UI & ".Thighs")			
	out_Elbows = GetValue(UI & ".Elbows")			
	out_Knees = GetValue(UI & ".Knees")		
	
	DeleteObj UI	
	out_valid = True
	
end function
'---------------------------------------------
' Create Hand Icons
'---------------------------------------------
function Create_hand_icons(in_rigModel, out_rHandT, out_lHandT)

	dim root, pArray, rEff
	
	Set Root = ActiveProject.ActiveScene.Root
	
	
	' first the right hand
	
	SelectObj in_rigModel & ".RArmEff"
	pArray = Array(-7.8845, 16.7739, -1.0319, 1, -7.8845, 16.7739, -0.004, 1, -9.8332, 16.7739, -0.5179, 1)
	set out_rHandT = Selection(0).AddNurbsCurve(pArray ,,True,1,,,"rHandTarget")
	out_rHandT.AddProperty("Display Property")
	out_rHandT.properties("display").wirecol.value = 253
	
	SelectGeometryComponents out_rHandT & ".pnt[0,1]"
	MoveCtr2Vertices
	Translate out_rBlender, 0, 0, 0, siAbsolute, siLocal, siObj, siXYZ


	' now the left hand

	SelectObj in_rigModel & ".LArmEff"

	pArray = Array(7.8845, 16.7739, -1.0319, 1, 7.8845, 16.7739, -0.004, 1, 9.8332, 16.7739, -0.5179, 1)
	set out_lHandT = Selection(0).AddNurbsCurve(pArray ,,True,1,,,"lHandTarget")
	
	out_lHandT.AddProperty("Display Property")
	out_lHandT.properties("display").wirecol.value = 253

	SelectGeometryComponents out_lHandT & ".pnt[0,1]"
	MoveCtr2Vertices
	Translate out_lBlender, 0, 0, 0, siAbsolute, siLocal, siObj, siXYZ
	Rotate out_lBlender, 0, 0, -180, siRelative, 70, siCtr, siXYZ
	
end function
'---------------------------------------------
' Create Up Vectors
'---------------------------------------------
function Create_up_vectors (in_rigModel, out_RupV, out_LupV)

	dim rShoulder, lShoulder 

	pArray = Array( -2.21696796598771, 16.580000477295, -7.26462754735823, 1, _ 
			-2.21696796598771, 16.580000477295, -7.88832420529965, 1, _
			-1.905119637017, 17.2036971352364, -7.57647587632894, 1, _
			-2.21696796598771, 16.580000477295, -7.26462754735823, 1, _
			-1.59327130804629, 16.580000477295, -7.26462754735823, 1, _
			-1.905119637017, 17.2036971352364, -7.57647587632894, 1, _				
			-1.59327130804629, 16.580000477295, -7.88832420529965, 1, _
			-1.59327130804629, 16.580000477295, -7.26462754735823, 1, _
			-1.59327130804629, 16.580000477295, -7.88832420529965, 1, _
			-2.21696796598771, 16.580000477295, -7.88832420529965, 1)


	set rShoulder = in_rigModel.FindChild("RShoulderEff") 
	set out_RupV = rShoulder.AddNurbsCurve(pArray ,,True,1,,,"rArmUpV")
	out_RupV.AddProperty("Display Property")
	out_RupV.properties("display").wirecol.value = 253
	
	DeselectAll
	SelectObj out_RupV

	Translate , -1.9051, 16.8918, -7.5765, siAbsolute, siGlobal, siCtr, siXYZ

	SetMarking "kine.local.posx"
	AddToMarking "kine.local.posy"
	AddToMarking "kine.local.posz"
	CreateMarkingSet 
	DeselectAll
	
	ApplyOp "SkeletonUpVector", in_rigModel & ".RBicep;" & out_RupV, 3, siPersistentOperation	
	
	pArray = Array( 2.21696796598771, 16.580000477295, -7.26462754735823, 1, _ 
			2.21696796598771, 16.580000477295, -7.88832420529965, 1, _
			1.905119637017, 17.2036971352364, -7.57647587632894, 1, _
			2.21696796598771, 16.580000477295, -7.26462754735823, 1, _
			1.59327130804629, 16.580000477295, -7.26462754735823, 1, _
			1.905119637017, 17.2036971352364, -7.57647587632894, 1, _
			1.59327130804629, 16.580000477295, -7.88832420529965, 1, _
			1.59327130804629, 16.580000477295, -7.26462754735823, 1, _			
			1.59327130804629, 16.580000477295, -7.88832420529965, 1, _
			2.21696796598771, 16.580000477295, -7.88832420529965, 1)

	set rShoulder = in_rigModel.FindChild("LShoulderEff") 
	set out_LupV = rShoulder.AddNurbsCurve(pArray ,,True,1,,,"lArmUpV")
	out_LupV.AddProperty("Display Property")
	out_LupV.properties("display").wirecol.value = 253
	
	DeselectAll
	SelectObj out_LupV

	Translate , 1.9051, 16.8918, -7.5765, siAbsolute, siGlobal, siCtr, siXYZ

	SetMarking "kine.local.posx"
	AddToMarking "kine.local.posy"
	AddToMarking "kine.local.posz"
	CreateMarkingSet 
	DeselectAll

	ApplyOp "SkeletonUpVector", in_rigModel & ".LBicep;" & out_LupV, 3, siPersistentOperation
	
end function
'---------------------------------------------
' Align Arms
'---------------------------------------------
function align_arms(in_rigModel)

	redim Shoulderaligner(3)
	dim Arot, Brot, Crot, rx,ry,rz
	set Arot = xsimath.createrotation
	set Brot = xsimath.createrotation
	set Crot = xsimath.createrotation
	set oRoot = Application.ActiveSceneRoot
	
	
	'right Shoulder
	
	set Shoulderaligner(0) = oRoot.AddPrimitive("Cube")
	SetValue Shoulderaligner(0) & ".cube.length", 0.500
	t_match in_rigModel & ".RBicep", Shoulderaligner(0)
	set Shoulderaligner(1) = Duplicate (Shoulderaligner(0), , 2, 1, 1, 0, 0, 1, 0, 1)

	t_match "BipedPropGuide.RHand", Shoulderaligner(1)
	
	set DirCnst = Shoulderaligner(0).Kinematics.AddConstraint("Direction", Shoulderaligner(1), False)
	DirCnst.Parameters("upvct_active").Value = True	
	set DirCnst.UpVectorReference = oRoot.FindChild("BipedPropGuide.RElbow")

   	Shoulderaligner(0).Kinematics.Local.Transform.GetRotation Arot
	set DirCnst.UpVectorReference = in_rigModel.FindChild("rArmUpV")
	
   	Shoulderaligner(0).Kinematics.Local.Transform.GetRotation Brot
	Brot.InvertInPlace
	Crot.Mul Arot, Brot
	Crot.GetXYZAnglesValues rx, ry, rz
	rx = XSIMath.RadiansToDegrees(rx)
	'
	' upvector rotation should be between +/-90. This way the upvector always stays behind the character
	'
	if rx > 90 then 
		rx = rx - 180
	elseif rx < -90 then
		rx = rx + 180
	end if
	
	'
	' move the upvector so that the elbow position will match that of the guide
	'
	SetTransientReferencePlane Shoulderaligner(0)
	Rotate in_rigModel&".rArmUpV", rx, 0, 0, siRelative, siObjCtr, siObj, siXYZ
	SetValue in_rigModel&".rArmUpV.kine.global.rotx", 0
	SetValue in_rigModel&".rArmUpV.kine.global.roty", 0
	SetValue in_rigModel&".rArmUpV.kine.global.rotz", 0

	' left Shoulder
	set Shoulderaligner(2) = oRoot.AddPrimitive("Cube")
	SetValue Shoulderaligner(2) & ".cube.length", 0.500
	t_match in_rigModel & ".LBicep", Shoulderaligner(2)
	set Shoulderaligner(3) = Duplicate (Shoulderaligner(2) , , 2, 1, 1, 0, 0, 1, 0, 1)

	t_match in_rigModel & ".LHand", Shoulderaligner(3)


	set DirCnst = Shoulderaligner(2).Kinematics.AddConstraint("Direction", Shoulderaligner(3), False)
	DirCnst.Parameters("upvct_active").Value = True	
	set DirCnst.UpVectorReference = oRoot.FindChild("BipedPropGuide.LElbow")

  	 Shoulderaligner(2).Kinematics.Local.Transform.GetRotation Arot
	set DirCnst.UpVectorReference = in_rigModel.FindChild("lArmUpV")
	
   	Shoulderaligner(2).Kinematics.Local.Transform.GetRotation Brot
	Brot.InvertInPlace
	Crot.Mul Arot, Brot
	Crot.GetXYZAnglesValues rx, ry, rz
	rx = XSIMath.RadiansToDegrees(rx)
	'
	' upvector rotation should be between +/-90. This way the upvector always stays behind the character	if rx > 90 then 
	'
	if rx > 90 then
		rx = rx - 180
	elseif rx < -90 then
		rx = rx + 180
	end if

	'
	' move the upvector so that the elbow position will match that of the guide
	'
	SetTransientReferencePlane Shoulderaligner(2)
	Rotate in_rigModel&".lArmUpV", rx, 0, 0, siRelative, siObjCtr, siObj, siXYZ
	SetValue in_rigModel&".lArmUpV.kine.global.rotx", 0
	SetValue in_rigModel&".lArmUpV.kine.global.roty", 0
	SetValue in_rigModel&".lArmUpV.kine.global.rotz", 0

	dim i
	for i = 0 to 3
		DeleteObj Shoulderaligner(i) 
	next
	


end function
'---------------------------------------------
' Model and Global SRT Match
'---------------------------------------------
function model_and_GlobalSRT_match(in_rigModel, out_valid)

	out_valid = False

	dim oRoot, PModel, PgSRT, RiggSRT

	set oRoot = Application.ActiveSceneRoot
	
	set PModel = oRoot.FindChild("BipedPropGuide")
	set PgSRT= oRoot.FindChild("BipedPropGuide.GlobalSRT")
	set RiggSRT = oRoot.FindChild(in_rigModel & ".globalSRT")
	
	
	'match up the models
	rt_match PModel, in_rigModel
	
	'match up the globalSRT's
	rt_match PgSRT, RiggSRT
	
	out_valid = True
	
end function
'---------------------------------------------
' Attach Hips
'---------------------------------------------
function Attach_hips (in_rigModel, out_valid)

	out_valid = False	
	
	setuserpref("SI3D_CONSTRAINT_COMPENSATION_MODE"), 0
	SelectObj in_rigModel & ".UpperBodyParent", "BRANCH"
	MatchTransform , "BipedPropGuide.cog", siTrn
	
	'now match the shape of the hips
	SelectObj in_rigModel & ".hipBone", , True
	FreezeObj
	AddToSelection "BipedPropGuide.hipBone1", , True
	x = selection(0).activeprimitive.geometry.points.positionarray
	y = selection(1).activeprimitive.geometry.points.positionarray
	for i = 0 to ubound(x,2)
		x(0,i) = y(0,i)
		x(1,i) = y(1,i)
		x(2,i) = y(2,i)
	next
	selection(0).activeprimitive.geometry.points.positionarray = x
	Refresh
		
	SelectObj in_rigModel & ".LLegRoot," & in_rigModel & ".LThigh," & in_rigModel & ".RLegRoot," & in_rigModel & ".LFootEff"
	CutObj		
	dim sx,sy,sz
	setuserpref("SI3D_CONSTRAINT_COMPENSATION_MODE"), 1
	sx = GetValue("BipedPropGuide.hipBone1.kine.global.sclx")
	sy = GetValue("BipedPropGuide.hipBone1.kine.global.scly")	
	sz = GetValue("BipedPropGuide.hipBone1.kine.global.sclz")	
	Scale in_rigModel & ".hipBone", sx, sy, sz, siAbsolute, siGlobal, siObj, siXYZ
	ParentObj in_rigModel & ".hipBone", in_rigModel & ".LLegRoot"
	ParentObj in_rigModel & ".hipBone", in_rigModel & ".RLegRoot"
	ParentObj in_rigModel & ".hipBone", in_rigModel & ".LFootEff"	
	

	MatchTransform in_rigModel & ".hipBone", "BipedPropGuide.hipBone1", siTrn
	
	'now match the top of the legs
	MatchTransform in_rigModel & ".LLegRoot", "BipedPropGuide.LLeg", siTrn
	MatchTransform in_rigModel & ".RLegRoot", "BipedPropGuide.RLeg", siTrn

	'match the upvectors with the top of the legs
	dim x1, y1, z1, x2, y2, z2
	x1  = GetValue("BipedPropGuide.LLeg.kine.global.posx")
	x2  = GetValue("BipedPropGuide.RLeg.kine.global.posx")	
	
	SelectObj in_rigModel & ".LUpVParent", "BRANCH"
	Translate  , x1, 0, 0, siAbsolute, siGlobal, siObj, siX
	SelectObj in_rigModel & ".RUpVParent", "BRANCH"
	Translate  , x2, 0, 0, siAbsolute, siGlobal, siObj, siX
		
	out_valid = True
		
end function
'---------------------------------------------
' Attach Spine
'---------------------------------------------
function Attach_spine(in_rigModel, out_valid)

	out_valid = False
			
	setuserpref("SI3D_CONSTRAINT_COMPENSATION_MODE"), 0
	SelectObj in_rigModel & ".ChestParent", "BRANCH"
	MatchTransform , "BipedPropGuide.RibCageStart", siTrn

	setuserpref("SI3D_CONSTRAINT_COMPENSATION_MODE"), 1
	MatchTransform in_rigModel & ".SpineEnd", "BipedPropGuide.RibCageStart", siTrn
	MatchTransform in_rigModel & ".HipDepth", "BipedPropGuide.Spine2", siTrn
	MatchTransform in_rigModel & ".ChestDepth", "BipedPropGuide.Spine1", siTrn
	MatchTransform in_rigModel & ".chestBone", "BipedPropGuide.RibCageStart", siTrn
	MatchTransform in_rigModel & ".SpineStart", "BipedPropGuide.SpineBase", siTrn
	
	refresh
	
	'match the top of the chest
	MatchTransform in_rigModel & ".topOfSpine", "BipedPropGuide.RibCageEnd", siTrn
	MatchTransform in_rigModel & ".HeadRoot", "BipedPropGuide.RibCageEnd", siTrn
	MatchTransform in_rigModel & ".LRootShoulder", "BipedPropGuide.LShoulderStart", siTrn
	MatchTransform in_rigModel & ".RRootShoulder", "BipedPropGuide.RShoulderStart", siTrn
			
	out_valid = True

end function
'---------------------------------------------
' Attach Feet
'---------------------------------------------
function attach_feet(in_rigModel, out_valid)

	out_valid = False
	

	'match the bone lengths
	dim b1,b2,b3,b4,b5,b6,b7,b8
	b1 = GetValue("BipedPropGuide.bone42.bone.length")
	b2 = GetValue("BipedPropGuide.bone43.bone.length")
	b3 = GetValue("BipedPropGuide.bone44.bone.length")
	b4 = GetValue("BipedPropGuide.bone45.bone.length")
	b5 = GetValue("BipedPropGuide.bone38.bone.length")
	b6 = GetValue("BipedPropGuide.bone39.bone.length")
	b7 = GetValue("BipedPropGuide.bone40.bone.length")	
	b8 = GetValue("BipedPropGuide.bone61.bone.length")
	
	SetValue in_rigModel & ".RThigh.bone.length", b1
	SetValue in_rigModel & ".RShin.bone.length", b2
	SetValue in_rigModel & ".RFoot.bone.length", b3
	SetValue in_rigModel & ".RToe.bone.length", b4
	SetValue in_rigModel & ".LThigh.bone.length", b5
	SetValue in_rigModel & ".LShin.bone.length", b6
	SetValue in_rigModel & ".LFoot.bone.length", b7
	SetValue in_rigModel & ".LToe.bone.length", b8
												
												

 	'match the foot postition
	setuserpref("SI3D_CONSTRAINT_COMPENSATION_MODE"), 0
	
	SelectObj in_rigModel & ".LeftFootParent", "BRANCH"
	MatchTransform , "BipedPropGuide.LFoot", siTrn
	
	SelectObj in_rigModel & ".RightFootParent", "BRANCH"
	MatchTransform , "BipedPropGuide.RFoot", siTrn											
		

	set root = ActiveProject.ActiveScene.Root								
	dim lFoot, lHeel, rFoot, rHeel
	
	
	'match the left rig
	
	set lFoot = root.FindChild(in_rigModel & ".LeftFoot")
	set lHeel = root.FindChild("BipedPropGuide.LHeel")
	align_foot lFoot, lHeel 
	
	SelectObj in_rigModel & ".heel", "BRANCH", True
	MatchTransform , "BipedPropGuide.LHeelPivot", siTrn
	MatchTransform in_rigModel & ".toe", "BipedPropGuide.LToe", siTrn
	SelectObj in_rigModel & ".mid", "BRANCH", True									
	MatchTransform , "BipedPropGuide.LHeel", siTrn																		
	MatchTransform in_rigModel & ".ankle", "BipedPropGuide.LFoot", siTrn	
	
	setuserpref("SI3D_CONSTRAINT_COMPENSATION_MODE"), 1
	refresh
	MatchTransform in_rigModel & ".LeftToe", "BipedPropGuide.LHeel", siTrn
	MatchTransform in_rigModel & ".LToeEff", "BipedPropGuide.LToe", siTrn	
	
	DeleteObj in_rigModel & ".LeftToeTarget.kine.posecns"
	MatchTransform in_rigModel & ".LeftToeTarget", "BipedPropGuide.LToe", siTrn
	SIApplyCns "Pose", in_rigModel & ".LeftToeTarget", in_rigModel & ".LeftToe", True	
	
	DeleteObj in_rigModel & ".LToeEff.kine.poscns"	
	setuserpref("SI3D_CONSTRAINT_COMPENSATION_MODE"), 0	
	SIApplyCns "Position", in_rigModel & ".LToeEff", in_rigModel & ".LeftToeTarget"
	
	
	'match the right rig
	set rFoot = root.FindChild(in_rigModel & ".RightFoot")
	set rHeel = root.FindChild("BipedPropGuide.RHeel")
	align_foot rFoot, rHeel 
	
	SelectObj in_rigModel & ".heel1", "BRANCH", True
	MatchTransform , "BipedPropGuide.RHeelPivot", siTrn
	MatchTransform in_rigModel & ".toe1", "BipedPropGuide.RToe", siTrn
	SelectObj in_rigModel & ".mid1", "BRANCH", True									
	MatchTransform , "BipedPropGuide.RHeel", siTrn																		
	MatchTransform in_rigModel & ".ankle1", "BipedPropGuide.RFoot", siTrn	
	
	setuserpref("SI3D_CONSTRAINT_COMPENSATION_MODE"), 1
	refresh
	MatchTransform in_rigModel & ".RightToe", "BipedPropGuide.RHeel", siTrn
	MatchTransform in_rigModel & ".RToeEff", "BipedPropGuide.RToe", siTrn	
	
	DeleteObj in_rigModel & ".RightToeTarget.kine.posecns"
	MatchTransform in_rigModel & ".RightToeTarget", "BipedPropGuide.RToe", siTrn
	SIApplyCns "Pose", in_rigModel & ".RightToeTarget", in_rigModel & ".RightToe", True	
	
	DeleteObj in_rigModel & ".RToeEff.kine.poscns"	
	setuserpref("SI3D_CONSTRAINT_COMPENSATION_MODE"), 0	
	SIApplyCns "Position", in_rigModel & ".RToeEff", in_rigModel & ".RightToeTarget"	
		
		
	
	refresh
	
	root_Alignment in_rigModel, "RRootFoot"
	root_Alignment in_rigModel, "LRootFoot"
		
	root_Alignment in_rigModel, "LLegRoot"
	root_Alignment in_rigModel, "RLegRoot"							
	
	refresh		
					
	out_valid = True
	
end function
'------------------------------------
' Align Foot
'------------------------------------
function align_foot(in_foot, in_heel)

	dim Pose1, dCnst, Pose2, yRot
	
	set Pose1 = in_foot.Kinematics.Global.Transform

	' Point the foot at the Toe
	set dCnst = in_foot.Kinematics.AddConstraint("Direction", in_heel, False)
	dCnst.dirx = 0
	dCnst.dirz = 1
	dCnst.upvct_active = True

	'now calculate the rotation to get there only rotating on the global y axis

	set Pose2 = in_foot.Kinematics.Global.Transform

	get_y_rotation Pose2, Pose1, yRot


	DeleteObj dCnst
	in_foot.Kinematics.Global.Transform = Pose1

	if yRot > 90 then yRot = yRot - 180
	if yRot < -90 then yRot = yRot + 180
	
	Rotate in_foot, 0, yRot, 0, siAbsolute, 65, siObj, siY

end function
'------------------------------------
' Get Y rotation
'------------------------------------
' We're not completly matching the rotations because 
' small variations of the foot angle up or down 
' shouldn't be used to rotate the body 
'....................................
function get_y_rotation(in_t1, in_t2, out_yRot)
	
	dim pushOut, gv1, gv2, gt1, gt2, cp ,angle, sroot
	
	set sRoot = Application.ActiveSceneRoot	
	
	set pushOut = xsimath.CreateVector3 
	pushOut.set 5,0,0
	
	'get the pushOut vector from local cordinates to a
	'global position
	
	set gv1 = XSIMath.MapObjectPositionToWorldSpace(in_t1,pushOut)  
	set gv2 = XSIMath.MapObjectPositionToWorldSpace(in_t2,pushOut) 
	
	'get the global translation to bring both vectors back to the origion
	set gt1 = xsimath.CreateVector3 
	set gt2 = xsimath.CreateVector3 
	in_t1.getTranslation gt1 
	in_t2.getTranslation gt2 

	gv1.SubInPlace gt1 
	gv2.SubInPlace gt2 
	
	'now project those vectors onto the xz plane	
	gv1.y = 0
	gv2.y = 0
	
	'now get the angle between them
	
	angle = gv2.Angle(gv1)  

	'get the cross product
	set cp = xsimath.CreateVector3 
	cp.cross gv1, gv2
	
	out_yRot = XSIMath.RadiansToDegrees(angle)

	if cp.y > 0 then out_yRot = out_yRot * -1 
	
end function
'---------------------------------------------
' Align Legs
'---------------------------------------------
function align_legs(in_rigModel)

	redim legaligner(3)
	dim Arot, Brot, Crot, rx,ry,rz
	set Arot = xsimath.createrotation
	set Brot = xsimath.createrotation
	set Crot = xsimath.createrotation
	set oRoot = Application.ActiveSceneRoot
	
	
	'right leg
	
	set legaligner(0) = oRoot.AddPrimitive("Cube")
	SetValue legaligner(0) & ".cube.length", 0.500
	t_match in_rigModel & ".RThigh", legaligner(0)
	set legaligner(1) = Duplicate (legaligner(0), , 2, 1, 1, 0, 0, 1, 0, 1)

	t_match "BipedPropGuide.RFoot", legaligner(1)
	

	set DirCnst = legaligner(0).Kinematics.AddConstraint("Direction", legaligner(1), False)
	DirCnst.Parameters("upvct_active").Value = True	
	set DirCnst.UpVectorReference = oRoot.FindChild("BipedPropGuide.RKnee")

   legaligner(0).Kinematics.Local.Transform.GetRotation Arot
	set DirCnst.UpVectorReference = in_rigModel.FindChild("RightLeg_UpV")
	
   legaligner(0).Kinematics.Local.Transform.GetRotation Brot
	Brot.InvertInPlace
	Crot.Mul Arot, Brot
	Crot.GetXYZAnglesValues rx, ry, rz
	rx = XSIMath.RadiansToDegrees(rx)
	
	SetValue in_rigModel & ".RThigh.joint.roll", rx - 180

	' left leg
	set legaligner(2) = oRoot.AddPrimitive("Cube")
	SetValue legaligner(2) & ".cube.length", 0.500
	t_match in_rigModel & ".LThigh", legaligner(2)
	set legaligner(3) = Duplicate (legaligner(2) , , 2, 1, 1, 0, 0, 1, 0, 1)

	t_match in_rigModel & ".LeftFoot", legaligner(3)


	set DirCnst = legaligner(2).Kinematics.AddConstraint("Direction", legaligner(3), False)
	DirCnst.Parameters("upvct_active").Value = True	
	set DirCnst.UpVectorReference = oRoot.FindChild("BipedPropGuide.LKnee")

   legaligner(2).Kinematics.Local.Transform.GetRotation Arot
	set DirCnst.UpVectorReference = in_rigModel.FindChild("LeftLeg_UpV")
	
   legaligner(2).Kinematics.Local.Transform.GetRotation Brot
	Brot.InvertInPlace
	Crot.Mul Arot, Brot
	Crot.GetXYZAnglesValues rx, ry, rz
	rx = XSIMath.RadiansToDegrees(rx)

	SetValue in_rigModel & ".LThigh.joint.roll", rx - 180

	dim i
	for i = 0 to 3
		DeleteObj legaligner(i) 
	next
	


end function
'---------------------------------------------
' Attach Upper Body
'---------------------------------------------
function Attach_UpperBody(in_rigModel, out_valid)

	out_valid = False

	SetValue in_rigModel & ".Neck.bone.length",			GetValue("BipedPropGuide.bone35.bone.length")
	SetValue in_rigModel & ".Head.bone.length",			GetValue("BipedPropGuide.bone36.bone.length")
	SetValue in_rigModel & ".RShoulder.bone.length",	GetValue("BipedPropGuide.bone32.bone.length")
	SetValue in_rigModel & ".RBicep.bone.length",		GetValue("BipedPropGuide.bone33.bone.length")
	SetValue in_rigModel & ".RForearm.bone.length",		GetValue("BipedPropGuide.bone34.bone.length")
	SetValue in_rigModel & ".LShoulder.bone.length",	GetValue("BipedPropGuide.bone31.bone.length")
	SetValue in_rigModel & ".LBicep.bone.length",		GetValue("BipedPropGuide.bone30.bone.length")
	SetValue in_rigModel & ".LForearm.bone.length",		GetValue("BipedPropGuide.bone29.bone.length")

	'match the positions
	dim c1, c2, c3, c4
	c1 = SIApplyCns ("Position", in_rigModel & ".LShoulderEff", "BipedPropGuide.LShoulder")
	c2 = SIApplyCns ("Position", in_rigModel & ".RShoulderEff", "BipedPropGuide.RShoulder")
	c3 = SIApplyCns ("Position", in_rigModel & ".Head", "BipedPropGuide.Neck")
	c4 = SIApplyCns ("Position", in_rigModel & ".NeckEff", "BipedPropGuide.Head")	

	refresh

	root_Alignment in_rigModel, "LRootShoulder"
	root_Alignment in_rigModel, "RRootShoulder"	
	root_Alignment in_rigModel, "HeadRoot"	
	
	DeleteObj c1
	DeleteObj c2	
	DeleteObj c3
	DeleteObj c4

	'
	' align the left and right arms, done in 3 steps
	'
	' 1. Take the target positions from the guide
	' 2. determine the local rotations the arms should have to reach the targets.
	' 3. Apply the rotations (FK)
	'	
	dim oRoot, oArm, side
	redim oArmPos(2) '0 is shoulder, 1 is elbow, 2 is hand
	redim outRotAngles(1)
	
	side = Array(".L",".R")

	set oArmPos(0) = XSIMath.CreateVector3
	set oArmPos(1) = XSIMath.CreateVector3
	set oArmPos(2) = XSIMath.CreateVector3
	set outRotAngles(0) = XSIMath.CreateVector3  'X axis
	set outRotAngles(1) = XSIMath.CreateVector3  'Y axis
	set oRoot = Application.ActiveSceneRoot

	dim idx 
	for idx = 0 to Ubound(side)
	
		' Step 1: get the target positions
		set oArm = oRoot.FindChild(in_rigModel & side(idx) & "ArmRoot")
		oRoot.FindChild("BipedPropGuide" & side(idx) & "Shoulder").Kinematics.Global.Transform.GetTranslation oArmPos(0)
		oRoot.FindChild("BipedPropGuide" & side(idx) & "Elbow").Kinematics.Global.Transform.GetTranslation oArmPos(1)
		oRoot.FindChild("BipedPropGuide" & side(idx) & "Hand").Kinematics.Global.Transform.GetTranslation oArmPos(2)

		' Step 2: determine the local rotations 
		TwoBoneChain_Pos2Rot oArm, oArmPos, outRotAngles

		'
		' Step 3: apply the rotations to the arm bones
		' Doing FK sets the preferred angles of bones.
		' Since Rotate command is FK the preferred angles will also be set
		'
		Rotate oArm.Bones(0), outRotAngles(0).x, outRotAngles(0).y, outRotAngles(0).z, siAbsolute, siLocal, siObj, siXYZ
		Rotate oArm.Bones(1), outRotAngles(1).x, outRotAngles(1).y, outRotAngles(1).z, siAbsolute, siLocal, siObj, siXYZ

	next

	out_valid = True
end function

'---------------------------------------------
'
' TwoBoneChain_Pos2Rot	
'
'	DESCRIPTION:
'		Convert target points (root pos, first joint, end effector) to 
'		rotations for a two bone 2D chain.
'
'		We can do this for a 2D chain because the three points define a 
'		resolution plane. Using the resolution plane and the z-axis of 
'		the root we can determine z-axis of the bones. 
' 
'		The direction vector from one point to the next defines the 
'		x-axis of a bone. 
'
'		With the x-axis and z-axis we can fully define the bone orientation.
'
'	INPUTS:
'		- chain root object (used as reference frame)
'		- array of 3 target positions
'		- array of two vectors that will hold the output bone euler angles
'	OUTPUTS: 
'		- array of two vectors that hold the bone euler angles (in DEGREES)
'
'	TODO: this could probably be generalized to an N bone 2D chain
'---------------------------------------------

sub TwoBoneChain_Pos2Rot(in_oRoot, in_ArrayTargets, inout_ArrayBoneRot)

	dim oRoot, oMatParent, oMatResult, oMatChild, vRotAngles, vRootZAxis
	dim oRot, dot
	redim vAxes(2)	'vectors to represent the XYZ axes of bone local frame
	redim vDir(1)	'bone direction vectors (points along bone x axis)

	set oMatParent	= XSIMath.CreateMatrix3
	set oMatResult	= XSIMath.CreateMatrix3
	set oMatChild	= XSIMath.CreateMatrix3

	set vAxes(0)	= XSIMath.CreateVector3  'X axis
	set vAxes(1)	= XSIMath.CreateVector3  'Y axis
	set vAxes(2)	= XSIMath.CreateVector3  'Z axis
	set vDir(0)		= XSIMath.CreateVector3
	set vDir(1)		= XSIMath.CreateVector3 
	set vRotAngles	= XSIMath.CreateVector3
	set vRootZAxis	= XSIMath.CreateVector3
	set oRot		= XSIMath.CreateRotation

	vDir(0).Sub in_ArrayTargets(0),in_ArrayTargets(1)
	vDir(1).Sub in_ArrayTargets(2),in_ArrayTargets(1)

	vAxes(2).Cross vDir(0), vDir(1) 	'defines the z axis of the first bone

	'
	' To get the correct sense of rotation, dot the z axis with z axis of the root
	' if < 0 (<90deg difference), invert the bone's z-axis to correct the sense of rotation. 
	' if >= 0 (>= 90deg difference), we can leave it as is.
	'
	' if this is not done the chain bones will be oriented correctly, but their preferred angles 
	' will not be correct and the chain will appear to bend the wrong way. 
	'
	'
	in_oRoot.Kinematics.Global.Transform.GetRotationMatrix3 oMatParent
	'extract the Z axis from this rotation matrix
	vRootZAxis.Set 0,0,1
	vRootZAxis.MulByMatrix3InPlace oMatParent
	vAxes(2).NormalizeInPlace
	dot	= vRootZAxis.Dot(vAxes(2))

	if dot < 0 then vAxes(2).NegateInPlace
	vDir(0).NegateInPlace 	' negate vDir(0) because it points from pt1->pt0, not pt0->pt1
	
	dim idx
	for idx = 0 to 1

		' child of last iteration is parent in this iteration
		' for the second bone copy MatChild to MatParent
		if idx = 1 then
			oMatParent.SetIdentity
			oMatParent.MulInPlace oMatChild
		end if

		vAxes(0).Normalize vDir(idx)
		vAxes(1).Cross vAxes(2), vAxes(0)
		'
		' initialize the rotation matrix using the XYZ axes
		'
		oMatChild.Set	vAxes(0).x,vAxes(0).y,vAxes(0).z,_
						vAxes(1).x,vAxes(1).y,vAxes(1).z,_
						vAxes(2).x,vAxes(2).y,vAxes(2).z

		'Rot_local = Rot_global*Inv(Rot_rootglobal)
		oMatParent.TransposeInPlace	'Transpose is same as inverse for rot matrix
		oMatResult.Mul oMatChild, oMatParent
		oRot.SetFromMatrix3 oMatResult
		oRot.GetXYZAngles vRotAngles
		'convert result to degrees and copy to output array 
		inout_ArrayBoneRot(idx).Set XSIMath.RadiansToDegrees(vRotAngles.x),XSIMath.RadiansToDegrees(vRotAngles.y),XSIMath.RadiansToDegrees(vRotAngles.z)

	next

end sub

'---------------------------------------------
' Attach Hand
'
' TODO: - eventually this could be reduced to two (maybe three?) nested for loops.
'		one loop for each hand, another for each finger, possibly another for each finger bone.
'		- another possibility is a "Attach_Hand" method that would do a left or right hand
'		To do this need to put guide objects in some kind of array.
'---------------------------------------------
function Attach_Hands(in_rigModel, out_RHandRollComp, out_LHandRollComp, outout_valid)

	out_valid = False
	
	'===============================================
	'
	' Attach Right Hand
	'
	'===============================================

	set oRoot = Application.ActiveSceneRoot
	set oHand = oRoot.FindChild(in_rigModel & ".RHandRoot")

	set oThumb = oHand.Effector.Children("RThumbRoot")
	set oIndex = oHand.Effector.Children("RIndexRoot")
	set oMiddle = oHand.Effector.Children("RMiddleRoot")
	set oRing = oHand.Effector.Children("RRingRoot")
	set oPinky = oHand.Effector.Children("RPinkyRoot")

	'
	' match the rig bone LENGTHS to the guide
	'
	oHand.Bones(0).Parameters("length").value	= GetValue("BipedPropGuide.bone62.bone.length")
	oThumb.Bones(0).Parameters("length").value	= GetValue("BipedPropGuide.bone46.bone.length")
	oThumb.Bones(1).Parameters("length").value  = GetValue("BipedPropGuide.bone47.bone.length")
	oThumb.Bones(2).Parameters("length").value  = GetValue("BipedPropGuide.bone48.bone.length")
	oIndex.Bones(0).Parameters("length").value	= GetValue("BipedPropGuide.bone49.bone.length")
	oIndex.Bones(1).Parameters("length").value  = GetValue("BipedPropGuide.bone50.bone.length")
	oIndex.Bones(2).Parameters("length").value  = GetValue("BipedPropGuide.bone51.bone.length")
	oMiddle.Bones(0).Parameters("length").value	= GetValue("BipedPropGuide.bone52.bone.length")
	oMiddle.Bones(1).Parameters("length").value = GetValue("BipedPropGuide.bone53.bone.length")
	oMiddle.Bones(2).Parameters("length").value = GetValue("BipedPropGuide.bone54.bone.length")
	oRing.Bones(0).Parameters("length").value	= GetValue("BipedPropGuide.bone55.bone.length")
	oRing.Bones(1).Parameters("length").value	= GetValue("BipedPropGuide.bone56.bone.length")
	oRing.Bones(2).Parameters("length").value	= GetValue("BipedPropGuide.bone57.bone.length")
	oPinky.Bones(0).Parameters("length").value	= GetValue("BipedPropGuide.bone58.bone.length")
	oPinky.Bones(1).Parameters("length").value  = GetValue("BipedPropGuide.bone59.bone.length")
	oPinky.Bones(2).Parameters("length").value  = GetValue("BipedPropGuide.bone60.bone.length")

	DeleteObj SIApplyCns ("Position", oHand.Effector, "BipedPropGuide.RHandEnd")	

	' Zero out any position offsets on the pose constraint on the hand root
	setuserpref("SI3D_CONSTRAINT_COMPENSATION_MODE"), 1	
	MatchTransform oHand, in_rigModel & ".RArmEff", siTrn
	setuserpref("SI3D_CONSTRAINT_COMPENSATION_MODE"), 0	

	'-----------------------------------------------------------------------------------
	'
	' match the hand rotation
	'
	' NOTE: The guide bones do not rotate in X, so if the guide has an x rotation 
	' in the hand, we must pass this on to the rig with an extra rotation in x after
	' doing the match transform. 
	'
	'-----------------------------------------------------------------------------------
	dim rx_hand
	MatchTransform oHand.Bones(0), "BipedPropGuide.bone62", siRot
	rx_hand = GetValue("BipedPropGuide.RHand.kine.local.rotx")
	Rotate oHand.Bones(0), rx_hand, 0, 0, siRelative, siAdd, siObj, siX
	out_RHandRollComp = rx_hand

	'
	' get the Y-axis of the hand. This is normal to the palm, which we use to align the fingers properly for FK.
	'
	dim l_HandRot, l_PalmNormal
	set l_HandRot = XSIMath.CreateMatrix3
	set l_PalmNormal = XSIMath.CreateVector3
	oHand.Bones(0).Kinematics.Global.Transform.GetRotationMatrix3 l_HandRot
	l_PalmNormal.Set 0,1,0
	l_PalmNormal.MulByMatrix3InPlace l_HandRot

	'
	' match finger root positions
	'
	' don't bother aligning the rotations, this will be done automaticallly when we
	' "align root to first bone" at the end of the script
	'
	MatchTransform in_rigModel & ".RThumbRoot", "BipedPropGuide.RThumb1", siTrn
	MatchTransform in_rigModel & ".RIndexRoot", "BipedPropGuide.RIndex1", siTrn
	MatchTransform in_rigModel & ".RMiddleRoot", "BipedPropGuide.RMiddle1", siTrn
	MatchTransform in_rigModel & ".RRingRoot", "BipedPropGuide.RRing1", siTrn
	MatchTransform in_rigModel & ".RPinkyRoot", "BipedPropGuide.RPinky1", siTrn

	'-----------------------------------------------------------------------------------
	'
	' match the finger rotations
	'
	' NOTE: The guide bones do not rotate in X, so if the guide has an x rotation 
	' in the hand, we must pass this on to the rig with an extra rotation in x after
	' doing the match transform. 
	'
	'-----------------------------------------------------------------------------------
	dim rx_current

	MatchTransform oThumb.Bones(0), "BipedPropGuide.bone46", siRot
	' negate palm normal so that positive z rotation will curl thumb into the hand.
	l_PalmNormal.NegateInPlace
	rx_current = GetAlignmentFingerRoll( oThumb.Bones(0), l_PalmNormal, true )
	l_PalmNormal.NegateInPlace 
	Rotate oThumb.Bones(0), rx_current, 0, 0, siRelative, siAdd, siObj, siX

	MatchTransform oThumb.Bones(1), "BipedPropGuide.bone47", siRot
	Rotate oThumb.Bones(1), rx_current, 0, 0, siRelative, siAdd, siObj, siX

	MatchTransform oThumb.Bones(2), "BipedPropGuide.bone48", siRot
	Rotate oThumb.Bones(2), rx_current, 0, 0, siRelative, siAdd, siObj, siX

	'
	' Line up the rest of the fingers to match the guide
	'

	' Index
	MatchTransform oIndex.Bones(0), "BipedPropGuide.bone49", siRot
	rx_current = GetAlignmentFingerRoll( oIndex.Bones(0), l_PalmNormal, false )
	Rotate oIndex.Bones(0), rx_current , 0, 0, siRelative, siAdd, siObj, siX

	MatchTransform oIndex.Bones(1), "BipedPropGuide.bone50", siRot
	Rotate oIndex.Bones(1), rx_current , 0, 0, siRelative, siAdd, siObj, siX

	MatchTransform oIndex.Bones(2), "BipedPropGuide.bone51", siRot
	Rotate oIndex.Bones(2), rx_current , 0, 0, siRelative, siAdd, siObj, siX


	' Middle
	MatchTransform oMiddle.Bones(0), "BipedPropGuide.bone52", siRot
	rx_current = GetAlignmentFingerRoll( oMiddle.Bones(0), l_PalmNormal, false )
	Rotate oMiddle.Bones(0), rx_current , 0, 0, siRelative, siAdd, siObj, siX

	MatchTransform oMiddle.Bones(1), "BipedPropGuide.bone53", siRot
	Rotate oMiddle.Bones(1), rx_current , 0, 0, siRelative, siAdd, siObj, siX

	MatchTransform oMiddle.Bones(2), "BipedPropGuide.bone54", siRot
	Rotate oMiddle.Bones(2), rx_current , 0, 0, siRelative, siAdd, siObj, siX


	' Ring
	MatchTransform oRing.Bones(0), "BipedPropGuide.bone55", siRot
	rx_current = GetAlignmentFingerRoll( oRing.Bones(0), l_PalmNormal, false )
	Rotate oRing.Bones(0), rx_current , 0, 0, siRelative, siAdd, siObj, siX

	MatchTransform oRing.Bones(1), "BipedPropGuide.bone56", siRot
	Rotate oRing.Bones(1), rx_current , 0, 0, siRelative, siAdd, siObj, siX

	MatchTransform oRing.Bones(2), "BipedPropGuide.bone57", siRot
	Rotate oRing.Bones(2), rx_current , 0, 0, siRelative, siAdd, siObj, siX


	' Pinky
	MatchTransform oPinky.Bones(0), "BipedPropGuide.bone58", siRot
	rx_current = GetAlignmentFingerRoll( oPinky.Bones(0), l_PalmNormal, false )
	Rotate oPinky.Bones(0), rx_current , 0, 0, siRelative, siAdd, siObj, siX

	MatchTransform oPinky.Bones(1), "BipedPropGuide.bone59", siRot
	Rotate oPinky.Bones(1), rx_current , 0, 0, siRelative, siAdd, siObj, siX

	MatchTransform oPinky.Bones(2), "BipedPropGuide.bone60", siRot
	Rotate oPinky.Bones(2), rx_current , 0, 0, siRelative, siAdd, siObj, siX

	'===============================================
	'
	' Attach Left Hand
	'
	'===============================================

	set oHand = oRoot.FindChild(in_rigModel & ".LHandRoot")
	set oThumb = oHand.Effector.Children("LThumbRoot")
	set oIndex = oHand.Effector.Children("LIndexRoot")
	set oMiddle = oHand.Effector.Children("LMiddleRoot")
	set oRing = oHand.Effector.Children("LRingRoot")
	set oPinky = oHand.Effector.Children("LPinkyRoot")

	'
	' match the rig bone LENGTHS to the guide
	'
	oHand.Bones(0).Parameters("length").value	= GetValue("BipedPropGuide.bone63.bone.length")
	oThumb.Bones(0).Parameters("length").value	= GetValue("BipedPropGuide.bone.bone.length")
	oThumb.Bones(1).Parameters("length").value  = GetValue("BipedPropGuide.bone15.bone.length")
	oThumb.Bones(2).Parameters("length").value  = GetValue("BipedPropGuide.bone16.bone.length")
	oIndex.Bones(0).Parameters("length").value	= GetValue("BipedPropGuide.bone19.bone.length")
	oIndex.Bones(1).Parameters("length").value  = GetValue("BipedPropGuide.bone18.bone.length")
	oIndex.Bones(2).Parameters("length").value  = GetValue("BipedPropGuide.bone17.bone.length")
	oMiddle.Bones(0).Parameters("length").value	= GetValue("BipedPropGuide.bone20.bone.length")
	oMiddle.Bones(1).Parameters("length").value = GetValue("BipedPropGuide.bone21.bone.length")
	oMiddle.Bones(2).Parameters("length").value = GetValue("BipedPropGuide.bone22.bone.length")
	oRing.Bones(0).Parameters("length").value	= GetValue("BipedPropGuide.bone23.bone.length")
	oRing.Bones(1).Parameters("length").value	= GetValue("BipedPropGuide.bone24.bone.length")
	oRing.Bones(2).Parameters("length").value	= GetValue("BipedPropGuide.bone25.bone.length")
	oPinky.Bones(0).Parameters("length").value	= GetValue("BipedPropGuide.bone26.bone.length")
	oPinky.Bones(1).Parameters("length").value  = GetValue("BipedPropGuide.bone27.bone.length")
	oPinky.Bones(2).Parameters("length").value  = GetValue("BipedPropGuide.bone28.bone.length")

	' we want to delete the constraint before we try to compensate the orientation 
	' if IK controlled it won't reorient.
	DeleteObj SIApplyCns ("Position", oHand.Effector, "BipedPropGuide.LHandEnd")	

	' Zero out any position offsets on the pose constraint on the hand root
	setuserpref("SI3D_CONSTRAINT_COMPENSATION_MODE"), 1	
	MatchTransform oHand, in_rigModel & ".LArmEff", siTrn
	setuserpref("SI3D_CONSTRAINT_COMPENSATION_MODE"), 0	

	'-----------------------------------------------------------------------------------
	'
	' match the hand rotation
	'
	' NOTE: The guide bones do not rotate in X, so if the guide has an x rotation 
	' in the hand, we must pass this on to the rig with an extra rotation in x after
	' doing the match transform. 
	'
	'-----------------------------------------------------------------------------------
	MatchTransform oHand.Bones(0), "BipedPropGuide.bone63", siRot
	rx_hand = GetValue("BipedPropGuide.LHand.kine.local.rotx")
	Rotate oHand.Bones(0), rx_hand+180, 0, 0, siRelative, siAdd, siObj, siX
	out_LHandRollComp = rx_hand 

	'
	' get the Y-axis of the hand. This is normal to the palm, which we use to align the fingers properly for FK.
	'
	set l_HandRot = XSIMath.CreateMatrix3
	set l_PalmNormal = XSIMath.CreateVector3
	oHand.Bones(0).Kinematics.Global.Transform.GetRotationMatrix3 l_HandRot
	l_PalmNormal.Set 0,1,0
	l_PalmNormal.MulByMatrix3InPlace l_HandRot

	'
	' match finger root positions
	'
	' don't bother aligning the rotations, this will be done automaticallly when we
	' "align root to first bone" at the end of the script
	'
	MatchTransform in_rigModel & ".LThumbRoot", "BipedPropGuide.LThumb1", siTrn
	MatchTransform in_rigModel & ".LIndexRoot", "BipedPropGuide.LIndex1", siTrn
	MatchTransform in_rigModel & ".LMiddleRoot", "BipedPropGuide.LMiddle1", siTrn
	MatchTransform in_rigModel & ".LRingRoot", "BipedPropGuide.LRing1", siTrn
	MatchTransform in_rigModel & ".LPinkyRoot", "BipedPropGuide.LPinky1", siTrn

	'-----------------------------------------------------------------------------------
	'
	' match the finger rotations
	'
	' NOTE: The guide bones do not rotate in X, so if the guide has an x rotation 
	' in the hand, we must pass this on to the rig with an extra rotation in x after
	' doing the match transform. 
	'
	'-----------------------------------------------------------------------------------

	MatchTransform oThumb.Bones(0), "BipedPropGuide.bone", siRot
	rx_current = GetAlignmentFingerRoll( oThumb.Bones(0), l_PalmNormal, true )
	Rotate oThumb.Bones(0), rx_current, 0, 0, siRelative, siAdd, siObj, siX

	MatchTransform oThumb.Bones(1), "BipedPropGuide.bone15",siRot
	Rotate oThumb.Bones(1), rx_current, 0, 0, siRelative, siAdd, siObj, siX

	MatchTransform oThumb.Bones(2), "BipedPropGuide.bone16", siRot
	Rotate oThumb.Bones(2), rx_current, 0, 0, siRelative, siAdd, siObj, siX

	MatchTransform oIndex.Bones(0), "BipedPropGuide.bone19", siRot
	rx_current = GetAlignmentFingerRoll( oIndex.Bones(0), l_PalmNormal, false )
	Rotate oIndex.Bones(0), rx_current, 0, 0, siRelative, siAdd, siObj, siX

	MatchTransform oIndex.Bones(1), "BipedPropGuide.bone18", siRot
	Rotate oIndex.Bones(1), rx_current, 0, 0, siRelative, siAdd, siObj, siX

	MatchTransform oIndex.Bones(2), "BipedPropGuide.bone17", siRot
	Rotate oIndex.Bones(2), rx_current, 0, 0, siRelative, siAdd, siObj, siX

	'Middle
	MatchTransform oMiddle.Bones(0), "BipedPropGuide.bone20", siRot
	rx_current = GetAlignmentFingerRoll( oMiddle.Bones(0), l_PalmNormal, false )
	Rotate oMiddle.Bones(0), rx_current, 0, 0, siRelative, siAdd, siObj, siX

	MatchTransform oMiddle.Bones(1), "BipedPropGuide.bone21", siRot
	Rotate oMiddle.Bones(1), rx_current, 0, 0, siRelative, siAdd, siObj, siX

	MatchTransform oMiddle.Bones(2), "BipedPropGuide.bone22", siRot
	Rotate oMiddle.Bones(2), rx_current, 0, 0, siRelative, siAdd, siObj, siX

	'Ring
	MatchTransform oRing.Bones(0), "BipedPropGuide.bone23", siRot
	rx_current = GetAlignmentFingerRoll( oRing.Bones(0), l_PalmNormal, false )
	Rotate oRing.Bones(0), rx_current, 0, 0, siRelative, siAdd, siObj, siX

	MatchTransform oRing.Bones(1), "BipedPropGuide.bone24", siRot
	Rotate oRing.Bones(1), rx_current, 0, 0, siRelative, siAdd, siObj, siX


	MatchTransform oRing.Bones(2), "BipedPropGuide.bone25", siRot
	Rotate oRing.Bones(2), rx_current, 0, 0, siRelative, siAdd, siObj, siX

	'Pinky
	MatchTransform oPinky.Bones(0), "BipedPropGuide.bone26", siRot
	rx_current = GetAlignmentFingerRoll( oPinky.Bones(0), l_PalmNormal, false )
	Rotate oPinky.Bones(0), rx_current, 0, 0, siRelative, siAdd, siObj, siX

	MatchTransform oPinky.Bones(1), "BipedPropGuide.bone27", siRot
	Rotate oPinky.Bones(1), rx_current, 0, 0, siRelative, siAdd, siObj, siX

	MatchTransform oPinky.Bones(2), "BipedPropGuide.bone28", siRot
	Rotate oPinky.Bones(2), rx_current, 0, 0, siRelative, siAdd, siObj, siX

	out_valid = True
	
end function

'---------------------------------------------
' GetAlignmentFingerRoll
'
' Guide fingers do no rotate in X, so if we match rotation of rig fingers to guide fingers, the rig fingers will
' not curl properly.
'
' This function determines the X rotation to apply to the fingers so they curl properly.
' The X rotation is returned, in DEGREES.
'
' We use the fact that curl axis (Z-axis) of a finger is roughly parallel to the plane formed by the palm.
' For thumbs the curl axis is roughly normal to the palm. This is not a highly accurate model because the 
' palm curved (not a plane with single normal). 
'
' Algorithm:
' 1. Given the normal to the palm, find the desired curl axis = cross prod. of finger X-axis and palm normal
' 2. Get the X rotation to align the bone's Z-axis with the curl axis = Mx = Mtarget*inv(Mcurrent)
'
'---------------------------------------------
function GetAlignmentFingerRoll( in_oFinger, in_oPalmNormal, in_bThumb)

	'get rotation of finger
	dim l_FingerRot, l_FingerX, l_ThirdAxis, l_cross, l_rotCurrent, l_rotTarget
	dim rotX,rotY,rotZ

	set l_FingerRot = XSIMath.CreateMatrix3
	set l_cross		= XSIMath.CreateVector3
	set l_FingerX	= XSIMath.CreateVector3
	set l_ThirdAxis	= XSIMath.CreateVector3
	set l_rotCurrent= XSIMath.CreateRotation
	set l_rotTarget	= XSIMath.CreateRotation

	'extract the X-axis from the finger rotation
	in_oFinger.Kinematics.Global.Transform.GetRotationMatrix3 l_FingerRot
	l_FingerX.Set 1,0,0
	l_FingerX.MulByMatrix3InPlace l_FingerRot

	'target axis is cross of finger X-axis and palm normal.
	l_cross.cross l_FingerX, in_oPalmNormal

	'get rotation to align current Z-axis to target Z-axis

	'set the target rotation
	if in_bThumb then
		l_ThirdAxis.cross l_FingerX, l_cross
		l_rotTarget.SetFromXYZAxes l_FingerX, l_cross, l_ThirdAxis
	else
		l_ThirdAxis.cross l_cross, l_FingerX
		l_rotTarget.SetFromXYZAxes l_FingerX, l_ThirdAxis, l_cross
	end if

	'
	' Mx = Mtarget*inv(Mcurrent)
	'
	' Mcurrent:	current finger rotation
	' Mtarget:	target finger rotation 
	' Mx:		additive rotation to align current to target
	l_rotCurrent.SetFromMatrix3 l_FingerRot
	l_rotCurrent.InvertInPlace
	l_rotTarget.MulInPlace l_rotCurrent

	'return the X angle in degrees
	l_rotTarget.GetXYZAnglesValues rotX,rotY,rotZ
	GetAlignmentFingerRoll = XSIMath.RadiansToDegrees(rotX)

end function

'---------------------------------------------
' FK Prep
'---------------------------------------------
function fk_prep(in_model)
	
	setuserpref("SI3D_CONSTRAINT_COMPENSATION_MODE"), 1
	
	'hands
	root_Alignment in_model, "RHandRoot"	
	root_Alignment in_model, "LHandRoot"		
	
	root_Alignment in_model, "RPinkyRoot"	
	root_Alignment in_model, "RRingRoot"	
	root_Alignment in_model, "RMiddleRoot"	
	root_Alignment in_model, "RIndexRoot"	
	root_Alignment in_model, "RThumbRoot"						
			

	root_Alignment in_model, "LThumbRoot"	
	root_Alignment in_model, "LIndexRoot"	
	root_Alignment in_model, "LMiddleRoot"	
	root_Alignment in_model, "LRingRoot"
	root_Alignment in_model, "LPinkyRoot"	
	
	root_Alignment in_model, "LThigh"
	root_Alignment in_model, "RThigh"	
		
	root_Alignment in_model, "LFoot"
	root_Alignment in_model, "RFoot"	
		
	setuserpref("SI3D_CONSTRAINT_COMPENSATION_MODE"), 0	
	
end function
'---------------------------------------------
' Root Alignment
'---------------------------------------------
function root_Alignment(in_model, in_rootstring)

	in_root = in_model.FindChild(in_rootstring)

	dim mySkeleton, BoneIndex, rroot, rbone, newrot
	set mySkeleton =  GetSkeleton(in_root, BoneIndex ) 	
	
	set boneRot = XSIMath.CreateRotation
		
	mySkeleton(1).Kinematics.local.Transform.GetRotation boneRot
	boneRot.GetXYZAnglesValues x,y,z

	Rotate mySkeleton(0), 0, 0, XSIMath.RadiansToDegrees(z), siRelative, siLocal, siObj, siXYZ
	Rotate mySkeleton(0), 0, XSIMath.RadiansToDegrees(y), 0, siRelative, siLocal, siObj, siXYZ
	Rotate mySkeleton(0), XSIMath.RadiansToDegrees(x), 0, 0, siRelative, siLocal, siObj, siXYZ

	SelectObj mySkeleton(1)
	ResetTransform , siObj, siRot, siXYZ

end function
'-----------------------------------------------
' Set Prefangles
'-----------------------------------------------
function set_prefangles(in_bone)
	 
	' set the rotations to pref angles. 
	
	dim pref1, pref2, pref3, chain, bIndex
	
	set chain = GetSkeleton(in_bone, bIndex)
	
	'if not the root or the first bone set the pref of one back
	
	if bIndex > 1 then
		set pref1 = XSIMath.CreateVector3()
		GetVector chain(bIndex -1) & ".kine.local.rot", pref1
		SetValue chain(bIndex - 1) &".joint.prefrotx"	, pref1.x
		SetValue chain(bIndex - 1) &".joint.prefroty"	, pref1.y
		SetValue chain(bIndex - 1) &".joint.prefrotz"	, pref1.z			
	end if	

	
	' if in_bone is not an effector set itself.
	
	if bIndex < chain.count - 1 then
		set pref2 = XSIMath.CreateVector3()
		GetVector chain(bIndex) & ".kine.local.rot", pref2
		SetValue chain(bIndex) &".joint.prefrotx"	, pref2.x
		SetValue chain(bIndex) &".joint.prefroty"	, pref2.y
		SetValue chain(bIndex) &".joint.prefrotz"	, pref2.z	
	end if
	
	
	' if bIndex + 1 is beyond the size of the chain or and effector set
	' the pref angles
		
	if bIndex < chain.count - 2 then
		set pref3 = XSIMath.CreateVector3()
		GetVector chain(bIndex + 1) & ".kine.local.rot", pref3
		SetValue chain(bIndex + 1) &".joint.prefrotx"	, pref3.x
		SetValue chain(bIndex + 1) &".joint.prefroty"	, pref3.y
		SetValue chain(bIndex + 1) &".joint.prefrotz"	, pref3.z	
	end if	
	
	
end function
'--------------------------------------
function rt_match (in_source, in_target)
'--------------------------------------

	dim sx, sy, sz
	dim rx, ry, rz	
	dim tx, ty, tz
	
	sx = GetValue(in_source & ".kine.global.sclx")
	sy = GetValue(in_source & ".kine.global.scly")	
	sz = GetValue(in_source & ".kine.global.sclz")
	
	rx = GetValue(in_source & ".kine.global.rotx")
	ry = GetValue(in_source & ".kine.global.roty")
	rz = GetValue(in_source & ".kine.global.rotz")
	
	tx = GetValue(in_source & ".kine.global.posx")
	ty = GetValue(in_source & ".kine.global.posy")
	tz = GetValue(in_source & ".kine.global.posz")

	Scale "B:" & in_target, sx, sy, sz, siAbsolute, siGlobal, siObj, siXYZ
	Rotate "B:" & in_target, rx, ry, rz, siAbsolute, siGlobal, siObj, siXYZ
	Translate "B:" & in_target, tx, ty, tz, siAbsolute, siGlobal, siObj, siXYZ
	
end function
'-----------------------------------------------
' Get Vector
'-----------------------------------------------
function GetVector(in_Path, out_vector)

	'Create a vector containing the x y z component of the path
	'for example  GetValueVector(obj & "kine.local.pos", frame)
	Dim V
	set V = XSIMath.CreateVector3()
	V.Set GetValue(in_Path & "x"),_
	GetValue(in_Path & "y"),_
	GetValue(in_Path & "z")
	set out_vector = V
end function
'-----------------------------------------------
' Is Component 
'---------------------------------------------
function IsComponent(in_string)
	
	dim oRoot
	IsComponent = True
	set oRoot = Application.ActiveSceneRoot
	if typename(oRoot.FindChild(in_string)) = "Nothing" then IsComponent = False
	
end function
'---------------------------------------------
' Make Default Pose
'---------------------------------------------
sub make_DefaultPose(in_rigModel)
	
	'hack for update problem
	set oTrans = in_rigModel.FindChild("LArmEff").Kinematics.Global.Transform
	set oTrans = in_rigModel.FindChild("RArmEff").Kinematics.Global.Transform
	set oTrans = in_rigModel.FindChild("RBicep").Kinematics.Global.Transform
	set oTrans = in_rigModel.FindChild("RForearm").Kinematics.Global.Transform
	set oTrans = in_rigModel.FindChild("LBicep").Kinematics.Global.Transform
	set oTrans = in_rigModel.FindChild("LForearm").Kinematics.Global.Transform   

	'Rename the default DefaulPose
	SetValue in_rigModel & ".Mixer.DefaultPose.Name", "DefaultPose_original_proportions"

	logmessage "Storing Default Pose"

	SelectObj in_rigModel & ".globalSRT", "BRANCH"
	SelectChildNodes
	
	positive_Fingers in_rigModel

	SetMarking "MarkingSet"
	StoreAction , , 1, "DefaultPose", True, 1, 5

end sub
'-----------------------------------------------
' Positive Fingers
'-----------------------------------------------
' sets the z-axis of the first bone to positive
function positive_Fingers(in_rigModel)
	
	set_first_bone in_rigModel & ".RHand"	
	set_first_bone in_rigModel & ".RThumb1"
	set_first_bone in_rigModel & ".RIndex1"
	set_first_bone in_rigModel & ".RMiddle1"
	set_first_bone in_rigModel & ".RRing1"
	set_first_bone in_rigModel & ".RPinky1"
	
	set_first_bone in_rigModel & ".LHand"	
	set_first_bone in_rigModel & ".LThumb1"
	set_first_bone in_rigModel & ".LIndex1"
	set_first_bone in_rigModel & ".LMiddle1"
	set_first_bone in_rigModel & ".LRing1"
	set_first_bone in_rigModel & ".LPinky1"
	
end function
'-----------------------------------------------
'Set first bone
'-----------------------------------------------
function set_first_bone(in_obj)

	'get the z rotation
	z_rot = GetValue (in_obj & ".kine.local.rotz")
  
  	if z_rot < 0 then
	  	Rotate in_obj, 0.000, 0.000, 360.000, siRelative, 70, siObj, siZ
	end if
  	
end function
'-----------------------------------------------
' Hand Poses
'-----------------------------------------------
function hand_poses(in_rigModel)

	dim fingerList, elem, thumbList
	set fingerList = CreateObject("XSI.Collection")
	set thumbList = CreateObject("XSI.Collection")
	
	'--------rhand spread---------------
	SelectObj in_rigModel & ".RArmEff", "BRANCH", True

	DeleteObj in_rigModel & ".Mixer.rhand_spread"
	pose_sel "rhand_spread", in_rigModel
	
	
	'--------rhand relaxed---------------
	SelectChildNodes
	set sel = Selection
	for each elem in sel
		if elem.type = "bone" and elem.name <> "RHand" then 
			if instr(1,elem.name,"Thumb",1) = 0 then
				fingerList.add elem 
			else
				thumbList.add elem
			end if
		end if
	next

	Rotate fingerList, 0, 0, 19, siRelative, 70, siObj, siZ
	Rotate thumbList, 0, 0, 12, siRelative, 70, siObj, siZ
	
	Rotate in_rigModel &".RRing1", 0.000, -4.500, 0.000, siRelative, 70, siObj, siY
	Rotate in_rigModel &".RPinky1", 0.000, -9.000, 0.000, siRelative, 70, siObj, siY
	DeleteObj in_rigModel & ".Mixer.rhand_relaxed"	
	pose_sel "rhand_relaxed", in_rigModel
	
	'--------rhand fist---------------
	Rotate fingerList, 0, 0, 45, siRelative, 70, siObj, siZ
	Rotate thumbList, 0, 0, 30, siRelative, 70, siObj, siZ
	Rotate in_rigModel &".RThumb1" , 0.000, 11.250, 0.000, siRelative, 70, siObj, siXYZ	
	
	DeleteObj in_rigModel & ".Mixer.rhand_fist"
	pose_sel "rhand_fist", in_rigModel


	'--------lhand spread---------------
	SelectObj in_rigModel & ".LArmEff", "BRANCH", True	
	

	DeleteObj in_rigModel & ".Mixer.lhand_spread"
	pose_sel "lhand_spread", in_rigModel
	
	'--------lhand relaxed---------------		
	set fingerList = CreateObject("XSI.Collection")
	set thumbList = CreateObject("XSI.Collection")
	
	SelectChildNodes
	set sel = Selection
	for each elem in sel
		if elem.type = "bone" and elem.name <> "LHand" then 
			if instr(1,elem.name,"Thumb",1) = 0 then
				fingerList.add elem 
			else
				thumbList.add elem
			end if
		end if
	next

	Rotate fingerList, 0, 0, 19, siRelative, 70, siObj, siZ
	Rotate thumbList, 0, 0, 12, siRelative, 70, siObj, siZ
	
	Rotate in_rigModel &".LRing1", 0.000, 4.500, 0.000, siRelative, 70, siObj, siY
	Rotate in_rigModel &".LPinky1", 0.000, 9.000, 0.000, siRelative, 70, siObj, siY
			
	DeleteObj in_rigModel & ".Mixer.lhand_relaxed"	
	pose_sel "lhand_relaxed", in_rigModel	
	
	'--------lhand fist---------------	
	Rotate fingerList, 0, 0, 45, siRelative, 70, siObj, siZ
	Rotate thumbList, 0, 0, 30, siRelative, 70, siObj, siZ	
	Rotate in_rigModel &".RThumb1" , 0.000, -11.250, 0.000, siRelative, 70, siObj, siXYZ	
			
	DeleteObj in_rigModel & ".Mixer.lhand_fist"
	pose_sel "lhand_fist", in_rigModel

end function
'-----------------------------------------------
' Pose Selection
'-----------------------------------------------
sub pose_sel(in_name, in_rigModel)

	dim myname
	if Selection.count > 0 then
		SelectChildNodes
	
		positive_Fingers in_rigModel	
		
		SetMarking "MarkingSet"
		'if the global marking set = "Marking Set" 
		myMarking = GetMarking()
		if myMarking(0) = "MarkingSet" then
 			StoreAction , , 1, in_name, True, 1, 5
		end if
	end if 
end sub
'-----------------------------------------------
'Reset All
'-----------------------------------------------
sub reset_all(in_rigModel)

 	ApplyAction in_rigModel & ".Mixer.DefaultPose"

end sub

'-----------------------------------------------
' Foot Roll Angle
'-----------------------------------------------
function FootRollAngle(in_rig, in_sliders)

	set param = in_sliders.AddParameter ("FootRollAngle", siDouble, siClassifVisualization , siAnimatable, "FootRollAngle", "FootRollAngle", , 30, 0, 90,0,60)  
	AddExpr in_rig& ".toe.kine.local.BipedRigSteppingAngle.SteppingAngle", param 
	AddExpr in_rig& ".toe1.kine.local.BipedRigSteppingAngle.SteppingAngle", param 
	
end function
'-----------------------------------------------
' Spine Hookup
'-----------------------------------------------
function spine_hookup(in_rigModel, in_nbLumber, in_sliders)

	dim root, dist, spineCurve, nbLumber, scaleSlider, topLumber, refCnst
	dim guideCurve, hip, chest, Lumber, controls

	Set Root = ActiveProject.ActiveScene.Root
	set guideCurve = in_rigModel.findchild("guideCurve")
	in_rigModel.addchild guideCurve
	refresh

	guideCurve.properties("visibility").viewvis.value = False
	
	
	set chestDepth = in_rigModel.findchild("ChestDepth")
	set hipDepth = in_rigModel.findchild("HipDepth")
	set hip = in_rigModel.findchild("SpineStart")
	set chest = in_rigModel.findchild("Chest")
	set chestbone = in_rigModel.findchild("chestBone")
	set Gsrt = in_rigModel.findchild("globalSRT")
	
	redim controls(3)
	set controls(0) = hip 
	set controls(1) = hipDepth 
	set controls(2) = chestDepth 
	set controls(3) = chest 	
	
	draw_spine in_rigModel, Controls, spineCurve

	'get the distance
	dist = spineCurve.ActivePrimitive.Geometry.curves(0).length	
	
	bind_curve spineCurve, hip, hipDepth, chestDepth, chest, in_sliders, scaleSlider	
	
	Create_top_Lumber spineCurve, dist, in_nbLumber, scaleSlider, topLumber, refCnst
	
	make_Lumber spineCurve, hip, chest, dist, in_nbLumber, topLumber, refCnst, Lumber
	
	CutObj chestbone 
	CutObj chestbone
	
	refresh
	
	topLumber.addchild chestbone 
	
	Gsrt.addchild guideCurve
	Gsrt.addchild spineCurve
	
	Lumber = join(Lumber, ",")
	
	AddToGroup in_rigModel & ".envelope_Group", Lumber 
	
	topLumber.properties("visibility").viewvis.value = False
	
	spineCurve.AddProperty("Display Property")
	spineCurve.properties("display").wirecol.value = 178		
	
end function
'-----------------------------------------------
' Draw Spine
'-----------------------------------------------
function draw_spine(in_model, Controls, out_curve)	

	dim t1, dist, root
	
	Set Root = ActiveProject.ActiveScene.Root
		
	'draw a curve through the controls
	redim curvePoints(3,3)
	
	for i = 0 to 3
		set vector = xsimath.CreateVector3
		Controls(i).Kinematics.Global.Transform.GetTranslation vector
	
		curvePoints(0,i) = vector.x
		curvePoints(1,i) = vector.y
		curvePoints(2,i) = vector.z
		curvePoints(3,i) = 1				
	next
	
	set out_curve = in_model.AddNurbsCurve(curvePoints,,,,,,"spineCurve")
	
end function
'-----------------------------------------------
' Bind Curves
'-----------------------------------------------
function bind_curve(in_guideCurve, in_hip, in_hipDepth, in_chestDepth, in_chest, in_sliders, out_ScaleSlider)
	
	dim myOp, rtOp, length, sliders, ScaleSlider
	
	set out_ScaleSlider = in_sliders.AddParameter ("SpineScale", siDouble, siClassifVisualization , siAnimatable, "SpineScale", "SpineScale", , 1, .01, 10000,.01,10)  
	
	'set the length
	length =  in_guideCurve.ActivePrimitive.Geometry.curves(0).length
	       
	set myOp = ApplyOp ("SpineCurve", in_guideCurve &","& in_hip &","& in_hipDepth &","& in_chestDepth&","& in_chest)(0)

	SetValue myOp & ".lgoal", length
	
	AddExpr myOp & ".lScale", out_ScaleSlider
	
end function
'-----------------------------------------------
' Create Top Vertebre
'-----------------------------------------------
function Create_top_Lumber(in_curve, in_dist, in_nbLumber, in_scaleSlider, out_topLumber, out_refCnst)
 
	 ' the top Lumber functions as a marker to maintain a constant length.

	dim cLength, myOp, rtOp, length

	cLength = 1

	set out_topLumber = in_curve.AddPrimitive("Cube", "Lumber")
	out_topLumber.length = cLength

	'constrain the icon to the curve
	set out_refCnst = out_topLumber.Kinematics.AddConstraint("Path", in_curve, False)
	out_refCnst.tangent = True
	out_refCnst.Parameters("upvct_active").Value = True
	
	'apply the scripted operator for fixed Spine length	
	set myOp = ApplyOp ("FixedLength", out_topLumber&","&in_curve)(0)	
		
	length =  in_curve.ActivePrimitive.Geometry.curves(0).length
	SetValue myOp & ".init_length", length
	
	AddExpr myOp & ".lScale", in_scaleSlider

end function
'-----------------------------------------------
' Make Lumber
'-----------------------------------------------
function make_Lumber(in_curve, in_hip, in_chest, in_dist, in_nbLumber, in_topLumber, in_refCnst, out_Lumber)

	dim cLength, i, pCnst, size, myOp, rtOp
	size = in_nbLumber
	
	redim Lumber(size)
	if in_nbLumber <> 0 then

		cLength = in_dist/in_nbLumber * .5
		if cLength > .4 then cLength = .4


		for i = 0 to size - 1
			set Lumber(i) = in_curve.AddPrimitive("Cube","Lumber")
			Lumber(i).length = cLength
			set pCnst = Lumber(i).Kinematics.AddConstraint("Path", in_curve, False)
			pCnst.tangent = True
			pCnst.Parameters("upvct_active").Value = True
			AddExpr pCnst & ".perc", in_refCnst & ".perc * " & replace( cstr(round((i+1)/(in_nbLumber+1),6)),",",".")		
		next
	
		for i = 0 to size - 1
			set myOp = ApplyOp ("SpinePointAt", Lumber(i) &","&in_chest&","&in_hip )(0)		
			SetValue myOp  & ".slider", 1 - (i)/(size + 1) - 1 /(size + 1)
			Lumber(i).AddProperty("Display Property")
			Lumber(i).properties("display").wirecol.value = 178
		next
	
	end if
	
	set myOp = ApplyOp ("SpinePointAt", in_topLumber &","&in_chest&","&in_hip )(0)
	SetValue myOp  & ".slider", 0	
	
	out_Lumber = Lumber
	
end function
'-----------------------------------------------
' Modify Foot Parenting
'-----------------------------------------------
function	modify_foot_parenting(in_rigModel, in_feetUnderBody)
	
	dim ub
	
	if in_feetUnderBody = True then
		set ub = in_rigModel.FindChild("UpperBody")
		ub.addchild in_rigModel.FindChild("LeftFootParent")
		ub.addchild in_rigModel.FindChild("RightFootParent")
		

	end if
	
end function
'-----------------------------------------------
' Skeleton Spine
'-----------------------------------------------
function skelSpine(in_model, in_nbLumber, in_skeleton, in_headType, out_dupSkel)
	
	dim vert(), size, i, mySkeleton, Children, body
	
	size = in_nbLumber
	redim vert(size)

	set root = ActiveProject.ActiveScene.Root
	set guide = root.findchild("BipedPropGuide")
	set SpineBase = guide.findchild("SpineBase")
	set CageEnd = guide.findchild("RibCageEnd")
	set spline = guide.findchild("SpineSpline")
	set body = in_model.findchild("Hip")
	
	set oTrans = spline.model.Kinematics.Local.Transform
	
	start = spline.ActivePrimitive.Geometry.Curves(0).EvaluatePositionFromPercentage(0)
 	for i = 0 to size
		curveData = spline.ActivePrimitive.Geometry.Curves(0).EvaluatePositionFromPercentage(((i)/(in_nbLumber)) * 100)
		set vert(i) = XSIMath.CreateVector3
		set vert(i) = XSIMath.MapObjectPositionToWorldSpace(oTrans, curveData(0))
 	next	
	
	plane = Array(1, 0, 0)
	
	set oChain = in_model.Add2DChain( vert(0) , vert(1) , plane, 2)
	
	'scale down the chain to match the scale of it's future model
	set modelscale = XSIMath.CreateVector3
	oTrans.GetScaling modelscale 
	Scale oChain, modelscale.x, modelscale.y, modelscale.z, siAbsolute, siGlobal, siObj, siXYZ
	
	if size > 1 then	
	 	for i = 2 to size 
			oChain.AddBone(vert(i))
	 	next
	end if

	set CE = XSIMath.CreateVector3 
	CageEnd.Kinematics.Global.Transform.GetTranslation CE
	oChain.AddBone(CE)
	
	'fix the parenting and naming
	set MySkeleton =  GetSkeleton(oChain, BoneIndex ) 	
	
	for i = 1 to mySkeleton.count - 3
		mySkeleton(i).name = "Lumber" & i
	next	
	
	DeleteObj in_model & ".Chest"
	
	MySkeleton(mySkeleton.count -2).name = "Chest"
	MySkeleton(mySkeleton.count -1).name = "ChestEffector"
	MySkeleton(0).name = "SpineRoot"
	
	'get a copy for the shadow Skeleton if needed.
	if in_skeleton = True then
		set out_dupSkel = Duplicate("B:" & MySkeleton(0), 1, 2, 1, 1, 0, 0, 1, 0, 0)(0)
	end if
	
	'fix the parenting for the spine

	body.addchild mySkeleton(0)
		
	dim head, leftarm, rightarm
	
	set head= in_model.findchild("HeadRoot")
	set lshoulder = in_model.findchild("LRootShoulder")		
	set rshoulder = in_model.findchild("RRootShoulder")
	
	MySkeleton(mySkeleton.count -1).addChild head
	MySkeleton(mySkeleton.count -1).addChild lshoulder 
	MySkeleton(mySkeleton.count -1).addChild rshoulder
	
	SelectObj MySkeleton
	SetMarking "kine.local.ori.euler.rotx"
	AddToMarking "kine.local.ori.euler.roty"
	AddToMarking "kine.local.ori.euler.rotz"
	CreateMarkingSet 
	
	for i = 1 to (mySkeleton.count -1)
		AddToGroup in_model & ".envelope_Group", mySkeleton(i) 
	next
	
	'juggle to work with different head types
	if in_headType = 0 then
		MySkeleton(mySkeleton.count -2).addchild in_model.findchild("Neck1")
	end if


	DeleteObj in_model & ".ChestDepth"
	DeleteObj in_model & ".HipDepth"
	DeleteObj in_model & ".Hip"
	DeleteObj "B:" & in_model & ".ChestBone"
	DeleteObj in_model & ".guideCurve"
	
	body.properties("visibility").viewvis.value = False	
	mySkeleton(0).properties("visibility").viewvis.value = False
	
	SetValue MySkeleton(mySkeleton.count -1) & ".eff.shadow_icon", 4
	SetValue MySkeleton(mySkeleton.count -1) & ".eff.primary_icon", 0	

	DeleteObj in_model & ".SpineStart,"& in_model & ".SpineEnd" & in_model & "ChestParent"

end function
'-----------------------------------------------
' Subdivide Bicep 
'-----------------------------------------------
function subdivide_bicep(in_model, in_nbBicep, inoutBindingNulls)

		dim subNull, bNulls
		
		set LNulls = CreateObject("XSI.Collection")

		lastPos = (in_nbBicep + 1)/(in_nbBicep + 2)

		'left bicep
		set lbicep = in_model.findchild("LBicep")
		
		for i = 0 to in_nbBicep- 1
			set subNull = lbicep.parent.addnull("LBicepRoll"& n + 1)
			
			set myOp = ApplyOp ("FirstBoneRollDivision", subNull &","& lbicep)(0)			
			SetValue myOp  & ".length_perc", lastPos * i / in_nbBicep 
			SetValue myOp  & ".mySlerp", (i + 1) /(in_nbBicep + 2)
						
			subNull.AddProperty("Display Property")
			subNull.properties("display").wirecol.value = 421
			subNull.ActivePrimitive.parameters("size").value = .3
			AddToGroup in_model & ".envelope_Group", subNull
	
			LNulls.add subNull
	
		next

		set subNull = lbicep.addnull("LBicepRoll"& n + 2)
		Translate subNull, 0, 0, 0, siAbsolute, siLocal, siObj, siXYZ
		Rotate subNull, 0, 0, 0, siAbsolute, siLocal, siObj, siXYZ
		SetExpr subNull & ".kine.local.posx", lbicep.fullname & ".bone.length *" & lastPos  
	
		subNull.AddProperty("Display Property")
		subNull.properties("display").wirecol.value = 421
		subNull.ActivePrimitive.parameters("size").value = .3	                  
		AddToGroup in_model & ".envelope_Group", subNull
	
		LNulls.add subNull	
	
		RemoveFromGroup in_model & ".envelope_Group", lbicep 
		
		'right bicep
		set RNulls = CreateObject("XSI.Collection")
		set rbicep = in_model.findchild("RBicep")
		
		for i = 0 to in_nbBicep- 1
			set subNull = rbicep.parent.addnull("RBicepRoll"& n + 1)
			
			set myOp = ApplyOp ("FirstBoneRollDivision", subNull &","& rbicep)(0)
			
			SetValue myOp  & ".length_perc", lastPos * i / in_nbBicep 
			SetValue myOp  & ".mySlerp", (i + 1) /(in_nbBicep + 2)
						
			subNull.AddProperty("Display Property")
			subNull.properties("display").wirecol.value = 421
			subNull.ActivePrimitive.parameters("size").value = .3			
			AddToGroup in_model & ".envelope_Group", subNull
			RNulls.add subNull
			
		next

		set subNull = rbicep.addnull("RBicepRoll"& n + 2)
		Translate subNull, 0, 0, 0, siAbsolute, siLocal, siObj, siXYZ
		Rotate subNull, 0, 0, 0, siAbsolute, siLocal, siObj, siXYZ
		SetExpr subNull & ".kine.local.posx", rbicep.fullname & ".bone.length *" & lastPos  
	
		subNull.AddProperty("Display Property")
		subNull.properties("display").wirecol.value = 421
		subNull.ActivePrimitive.parameters("size").value = .3	                  
		AddToGroup in_model & ".envelope_Group", subNull
		RNulls.add subNull
		
		RemoveFromGroup in_model & ".envelope_Group", rbicep 
		
		set inoutBindingNulls(0) = RNulls
		set inoutBindingNulls(1) = LNulls	
		
		
end function
'-----------------------------------------------
' Subdivide Thigh 
'-----------------------------------------------
function subdivide_thigh(in_model, in_nbThigh, inoutBindingNulls)
	
		dim subNull

		lastPos = (in_nbThigh + 1)/(in_nbThigh + 2)

		'left Thigh
		set LNulls = CreateObject("XSI.Collection")
		
		set lThigh = in_model.findchild("LThigh")
		
		for i = 0 to in_nbThigh- 1
			set subNull = lThigh.parent.addnull("LThighRoll" & n + 1)
			
			set myOp = ApplyOp ("FirstBoneRollDivision", subNull &","& lThigh)(0)
			
			SetValue myOp  & ".length_perc", lastPos * i / in_nbThigh 
			SetValue myOp  & ".mySlerp", (i + 1) /(in_nbThigh + 2)
						
			subNull.AddProperty("Display Property")
			subNull.properties("display").wirecol.value = 421
			subNull.ActivePrimitive.parameters("size").value = .3
			AddToGroup in_model & ".envelope_Group", subNull
			LNulls.add subNull
				
		next

		set subNull = lThigh.addnull("LThighRoll"& n + 2)
		Translate subNull, 0, 0, 0, siAbsolute, siLocal, siObj, siXYZ
		Rotate subNull, 0, 0, 0, siAbsolute, siLocal, siObj, siXYZ
		SetExpr subNull & ".kine.local.posx", lThigh.fullname & ".bone.length *" & lastPos  
	
		subNull.AddProperty("Display Property")
		subNull.properties("display").wirecol.value = 421
		subNull.ActivePrimitive.parameters("size").value = .3
	                  
		AddToGroup in_model & ".envelope_Group", subNull
		LNulls.add subNull
		
		RemoveFromGroup in_model & ".envelope_Group", lThigh 
		
		'right Thigh
		set RNulls = CreateObject("XSI.Collection")
		set rThigh = in_model.findchild("RThigh")
		
		for i = 0 to in_nbThigh- 1
			set subNull = rThigh.parent.addnull("RThighRoll"& n + 1)
			
			set myOp = ApplyOp ("FirstBoneRollDivision", subNull &","& rThigh)(0)			
			SetValue myOp  & ".length_perc", lastPos * i / in_nbThigh 
			SetValue myOp  & ".mySlerp", (i + 1) /(in_nbThigh + 2)
						
			subNull.AddProperty("Display Property")
			subNull.properties("display").wirecol.value = 421
			subNull.ActivePrimitive.parameters("size").value = .3
			AddToGroup in_model & ".envelope_Group", subNull
			RNulls.add subNull 
		next

		set subNull = rThigh.addnull("RThighRoll"& n + 2)
		Translate subNull, 0, 0, 0, siAbsolute, siLocal, siObj, siXYZ
		Rotate subNull, 0, 0, 0, siAbsolute, siLocal, siObj, siXYZ
		SetExpr subNull & ".kine.local.posx", rThigh.fullname & ".bone.length *" & lastPos  
	
		subNull.AddProperty("Display Property")
		subNull.properties("display").wirecol.value = 421
		subNull.ActivePrimitive.parameters("size").value = .3
	                  
		AddToGroup in_model & ".envelope_Group", subNull
		RemoveFromGroup in_model & ".envelope_Group", rThigh 
		RNulls.add subNull 
		
		set inoutBindingNulls(2) = RNulls
		set inoutBindingNulls(3) = LNulls	
		
end function
'-----------------------------------------------
' Process Head
'-----------------------------------------------
function process_head(in_model, in_headType, in_nbNeck, in_spineType, in_sliders)

	if in_headType = 1 then 
		DeleteObj "B:" & in_Model & ".HeadParent"
		exit function
	end if
	
	dim root, cc, head, guideHead, neck, depth, chest, headParent
	
	'position the head
	set root = activeproject.activescene.root
	set cc = in_model.FindChild("cc_head1")
	set headParent = in_model.FindChild("HeadParent")
	set head = in_model.FindChild("head1")
	set neck = in_model.FindChild("neck1")
	set guideHead = 	root.FindChild("BipedPropGuide.Head")
	
	if in_spineType = 0 then
		set chest = in_model.FindChild("chestBone")
	else
		set chest = in_model.FindChild("Chest")
	end if
		
	set cnst = cc.Kinematics.AddConstraint("Position", guideHead, False)
	FreezeObj cc.parent
	DeleteObj cc
	refresh
	DeleteObj head & ".crvlist.cls.Point"
	
	'attach a spine to the neck
	' first set the neck and head depth to 1/3 of the
	' length of the neck
	
	set neckDepth = 	in_model.FindChild("neck_depth")
	set headDepth = in_model.FindChild("head_depth")
	
	depth = GetValue("BipedPropGuide.bone35.length") / 3
	
	neckDepth.Kinematics.Local.parameters("posy").value = depth
	headDepth.Kinematics.Local.parameters("posy").value = -1 * depth *1.5
	
	'set parenting and remove head chains
	chest.AddChild neck 
	neck.AddChild headParent 

	
	SetValue in_model & ".Neck.Name", "BoneNeck"
	SetValue in_model & ".Head.Name", "BoneHead"
	refresh
	
	create_neck in_model, neck, neckDepth, headDepth, head, in_nbNeck, in_sliders
	
	head.name = "Head"
	neck.name = "Neck"
	
	SelectObj head
	SetMarking "kine.local.pos.posx"
	AddToMarking "kine.local.pos.posy"
	AddToMarking "kine.local.pos.posz"	
	AddToMarking "kine.local.ori.euler.rotx"
	AddToMarking "kine.local.ori.euler.roty"
	AddToMarking "kine.local.ori.euler.rotz"
	CreateMarkingSet 
	
	refresh
	
end function 
'-----------------------------------------------
' Create Neck
'-----------------------------------------------
function create_neck(in_model, in_neck, in_neckDepth, in_headDepth, in_head, in_nbNeck, in_sliders)
	
	dim controls,nb_Lumber, spineCurve, scaleSlider, dist, topLumber, refCnst, Lumber
	dim p1, p2
	
	redim controls(3)
	
	nb_Lumber = in_nbNeck
	
	set controls(0) = in_neck
	set controls(1) = in_neckDepth
	set controls(2) = in_headDepth
	set controls(3) = in_head
	
	' constrain the Depth controls in place so animators don't move
	' them around by accident
	
	set p1 = controls(1).Kinematics.AddConstraint("Pose", controls(0), True)
	set p2 = controls(2).Kinematics.AddConstraint("Pose", controls(3), True)
	
	draw_neck_curve controls, spineCurve
	
	set gSRT = in_model.FindChild("globalSRT")
	gSRT.addChild spineCurve
	
	bind_neck_curve  spineCurve, Controls(0), Controls(1), Controls(2), Controls(3), in_sliders, scaleSlider
	dist = spineCurve.ActivePrimitive.Geometry.curves(0).length
	
	Create_top_Lumber spineCurve, dist, in_nbNeck, scaleSlider, topLumber, refCnst
	make_Lumber spineCurve, controls(0), controls(3), dist, in_nbNeck, topLumber, refCnst, Lumber

	for i = 0 to ubound(Lumber) - 1
		Lumber(i).name = "neckSegment" & i + 1
	next
	topLumber.name = "headBind"
	
	Lumber = join(Lumber, ",")
	AddToGroup in_model & ".envelope_Group", Lumber 
	AddToGroup in_model & ".envelope_Group", topLumber
	
	topLumber.AddProperty("Display Property")
	topLumber.properties("display").wirecol.value = 178
	
end function
'-----------------------------------------------
' Draw Neck Curve
'-----------------------------------------------
function draw_neck_curve(Controls, out_curve)	

	dim t1, dist, root
	
	Set Root = ActiveProject.ActiveScene.Root
		
	'draw a curve through the controls
	redim curvePoints(3,3)
	
	for i = 0 to 3
		set vector = xsimath.CreateVector3
		Controls(i).Kinematics.Global.Transform.GetTranslation vector
	
		curvePoints(0,i) = vector.x
		curvePoints(1,i) = vector.y
		curvePoints(2,i) = vector.z
		curvePoints(3,i) = 1				
	next
	
	set out_curve = root.AddNurbsCurve(curvePoints,,,,,,"neckCurve")
	
	out_curve.AddProperty("Display Property")
	out_curve.properties("display").wirecol.value = 178
	
end function
'-----------------------------------------------
' Bind Neck Curve
'-----------------------------------------------
function bind_neck_curve (in_guideCurve, in_hip, in_hipDepth, in_chestDepth, in_chest, in_sliders, outScaleSlider)
	
	dim myOp, rtOp, length, sliders, ScaleSlider
	 
	set outScaleSlider = in_sliders.AddParameter ("NeckScale", siDouble, siClassifVisualization , siAnimatable, "NeckScale", "NeckScale", , 1, .01, 10000,.01,10)  
	
	'set the length
	length =  in_guideCurve.ActivePrimitive.Geometry.curves(0).length
	 
	      
	set myOp = ApplyOp ("SpineCurve", in_guideCurve &","& in_hip &","& in_hipDepth &","& in_chestDepth&","& in_chest)(0)	
	
	SetValue myOp & ".lgoal", length
	AddExpr myOp & ".lScale", outScaleSlider

end function
'--------------------------------------
' FK Legs
'--------------------------------------
function fkLegs(in_guide, in_rig)
	
	dim RFoot, LFoot, RSkeleton, LSkeleton 
	dim RBoneIndex, LBoneIndex 
	
	DeleteObj "B:" & in_rig & ".RightFoot"
	DeleteObj "B:" & in_rig & ".LeftFoot"
	
	set Rfoot = in_rig.FindChild("RFootEff")
	set Lfoot = in_rig.FindChild("LFootEff")	
	
	Rfoot.name = "RightFoot"
	Lfoot.name = "LeftFoot"

	TagObject Lfoot, "LeftFoot"
	TagObject Rfoot, "RightFoot"


	RemoveFromGroup in_rig & ".Hidden", Rfoot &"," & Lfoot
		
	'cut the foot effectors
	in_rig.FindChild("LeftFootParent").AddChild Lfoot
	in_rig.FindChild("RightFootParent").AddChild Rfoot	
	
	'make thier orientation not affected by the last bone
	
	set RSkeleton =  GetSkeleton(Rfoot, RBoneIndex ) 	
	set LSkeleton =  GetSkeleton(Lfoot, LBoneIndex ) 	
	
	SetValue RSkeleton(1) & ".chain.effori", False
	SetValue LSkeleton(1) & ".chain.effori", False	
	
	SetUserPref "SI3D_NODETRANSFORM_CHILD_COMPENSATE", 1
	Rotate Rfoot, 0, 0, 0, siAbsolute, 70, siObj, siXYZ
	Rotate Lfoot, 0, 0, 0, siAbsolute, 70, siObj, siXYZ
	SetUserPref "SI3D_NODETRANSFORM_CHILD_COMPENSATE", 0
			
	SetValue Rfoot & ".eff.primary_icon", 0
	SetValue Rfoot & ".eff.shadow_icon", 4
	SetValue Rfoot & ".eff.radius", 2
	SetValue Rfoot & ".eff.shadow_scaleZ", 2
	
	SetValue Lfoot & ".eff.primary_icon", 0
	SetValue Lfoot & ".eff.shadow_icon", 4
	SetValue Lfoot & ".eff.radius", 2
	SetValue Lfoot & ".eff.shadow_scaleZ", 2	
	
	Rfoot.AddProperty("Display Property")
	Rfoot.properties("display").wirecol.value = 489
	Lfoot.AddProperty("Display Property")
	Lfoot.properties("display").wirecol.value = 489
	
	SelectObj Rfoot &"," &Lfoot
	SetMarking "kine.local.pos.posx"
	AddToMarking "kine.local.pos.posy"
	AddToMarking "kine.local.pos.posz"	
	CreateMarkingSet
	
	SelectObj RSkeleton(1) &"," & RSkeleton(2) &"," & LSkeleton(1) &"," & LSkeleton(2) 
	AddToSelection in_rig & ".RFoot," & in_rig & ".LFoot," & in_rig & ".RToe," & in_rig & ".LToe"

	SetMarking "kine.local.ori.euler.rotx"
	AddToMarking "kine.local.ori.euler.roty"
	AddToMarking "kine.local.ori.euler.rotz"	
	CreateMarkingSet	

	SetValue in_rig & ".LFoot.joint.resplane", 0	
	SetValue in_rig & ".LToe.joint.resplane", 0	
	SetValue in_rig & ".RFoot.joint.resplane", 0	
	SetValue in_rig & ".RToe.joint.resplane", 0	
	
end function
'-----------------------------------------------
' Apply ForeArm Subdivision 
'-----------------------------------------------
function subdivide_forearm(in_model, in_nbDivisions, inBindingNulls, in_RHandRollComp, in_LHandRollComp )

	'-----------------------------
	'Left bicep
	'-----------------------------
	set bicep = in_model.findchild("LBicep")
	set forearm = in_model.findchild("LForearm")
	set armEff = in_model.findchild("LArmEff")
	set handEff = in_model.findchild("LHandEffector")
	set handBone = in_model.findchild("LHand")

	set sliders = handBone.AddProperty("Custom_parameter_list",,"Roll_Compensation")  
	set rollOffset = sliders.AddParameter ("roll_offset", siDouble, siClassifVisualization , siAnimatable, "roll_offset", "roll_offset", , 0, -360, 360,-180,180)  
	
		dim subNull

		'left bicep
		
		for i = 0 to in_nbDivisions- 1
		
			if i = 0 then
				set subNull = forearm.addnull("LElbow")
				set inBindingNulls(5) = subNull 
			else
				set subNull = forearm.addnull("LForeArmRoll")			
			end if
			
			set myOp = ApplyOp ("ForeArmRollDivision", subNull &","& bicep &","& forearm &","& armEff &","& handEff &","& handBone)(0)
			SetValue myOp & ".blend", 1 - i/in_nbDivisions
			AddExpr myOp & ".compensation", rollOffset 
	
			Translate subNull, 0, 0, 0, siAbsolute, siLocal, siObj, siXYZ
			Rotate subNull, 0, 0, 0, siAbsolute, siLocal, siObj, siXYZ
			SetExpr subNull & ".kine.local.posx", forearm.fullname & ".bone.length * (" & i / in_nbDivisions& ")"	
			SetExpr subNull & ".kine.local.posy", "0"
			SetExpr subNull & ".kine.local.posz", "0"						
						
			subNull.AddProperty("Display Property")
			subNull.properties("display").wirecol.value = 421
			subNull.ActivePrimitive.parameters("size").value = .3
			AddToGroup in_model & ".envelope_Group", subNull
	
		next
		
		RemoveFromGroup in_model & ".envelope_Group", forearm 
		
		'roll compensation angle has to be -180 to 180 range
		dim l_rollcomp
		l_rollcomp = 90 - in_LHandRollComp
		l_rollcomp = l_rollcomp mod 360 'limit -360 to 360

		if l_rollcomp > 180 then
			l_rollcomp = l_rollcomp - 360
		elseif l_rollcomp < -180 then
			l_rollcomp = l_rollcomp + 360
		end if

		rollOffset.Value = l_rollcomp
		
	'-----------------------------
	'right bicep
	'-----------------------------
		
	set bicep = in_model.findchild("RBicep")
	set forearm = in_model.findchild("RForearm")
	set armEff = in_model.findchild("RArmEff")
	set handEff = in_model.findchild("RHandEffector")
	set handBone = in_model.findchild("RHand")

	set sliders = handBone.AddProperty("Custom_parameter_list",,"Roll_Compensation")  
	set rollOffset = sliders.AddParameter ("roll_offset", siDouble, siClassifVisualization , siAnimatable, "roll_offset", "roll_offset", , 0, -360, 360,-180,180)  
	
		for i = 0 to in_nbDivisions - 1
		
			if i = 0 then
				set subNull = forearm.addnull("RElbow")
				set inBindingNulls(4) = subNull 				
			else
				set subNull = forearm.addnull("RForeArmRoll")			
			end if
			
			set myOp = ApplyOp ("ForeArmRollDivision", subNull &","& bicep &","& forearm &","& armEff &","& handEff &","& handBone)(0)
			SetValue myOp & ".blend", 1 - i/in_nbDivisions
			AddExpr myOp & ".compensation", rollOffset 
	
			Rotate subNull, 0, 0, 0, siAbsolute, siLocal, siObj, siXYZ
			SetExpr subNull & ".kine.local.posx", forearm.fullname & ".bone.length * (" & i / in_nbDivisions& ")"	
			SetExpr subNull & ".kine.local.posy", "0"
			SetExpr subNull & ".kine.local.posz", "0"				
									
			subNull.AddProperty("Display Property")
			subNull.properties("display").wirecol.value = 421
			subNull.ActivePrimitive.parameters("size").value = .3
			AddToGroup in_model & ".envelope_Group", subNull
	
		next		
		
		RemoveFromGroup in_model & ".envelope_Group", forearm 
		
		'roll compensation angle has to be -180 to 180 range
		l_rollcomp = - 90 - in_RHandRollComp
		l_rollcomp = l_rollcomp mod 360 'limit -360 to 360

		if l_rollcomp > 180 then
			l_rollcomp = l_rollcomp - 360
		elseif l_rollcomp < -180 then
			l_rollcomp = l_rollcomp + 360
		end if

		rollOffset.Value = l_rollcomp
		
		
end function
'-----------------------------------------------
























'*****************************************
'*****************************************
'*****************************************
'-----------------------------------------
'HOOKUP SLIDING AND VOLUME PRESERVATION
'-----------------------------------------
'*****************************************
'*****************************************
'*****************************************

'-----------------------------------------
' Sliding Hookup
'-----------------------------------------
function slidingHookup(in_guide, in_rig, in_BindingNulls, in_Hips, in_Armpits, in_Stomach, in_Thighs, in_Elbows, in_Knees, in_spineType)

	if checkSlidingComponents(in_guide) = False then exit function
	
	if in_Hips = True or in_Armpits = True or in_Stomach = True or in_Thighs = True or in_Elbows = True or in_Knees = True then

		set handleGroup = in_rig.AddGroup(,"SlidingHandles")
		
		if in_Hips = True then
			SlideSetup in_guide, in_rig, "RHipBind", "RHipTop", "RHipBottom", "hipBone", "hipBone", "RThigh", "hipBone", handleGroup
			SlideSetup in_guide, in_rig, "LHipBind", "LHipTop", "LHipBottom", "hipBone", "hipBone", "LThigh", "hipBone", handleGroup
			ParentClosestBind in_rig.FindChild("RHipBottom"), in_BindingNulls, 2
			ParentClosestBind in_rig.FindChild("LHipBottom"), in_BindingNulls, 3
		end if
		
		if in_Armpits = True then
			if in_spineType = 0 then
				SlideSetup in_guide, in_rig, "RArmPitBind", "RArmPitTop", "RArmPitBase", "chestBone", "RBicep", "chestBone", "chestBone", handleGroup 
				SlideSetup in_guide, in_rig, "LArmPitBind", "LArmPitTop", "LArmPitBase", "chestBone", "LBicep", "chestBone", "chestBone", handleGroup
			else 
				SlideSetup in_guide, in_rig, "RArmPitBind", "RArmPitTop", "RArmPitBase", "chest", "RBicep", "chest", "chest", handleGroup 
				SlideSetup in_guide, in_rig, "LArmPitBind", "LArmPitTop", "LArmPitBase", "chest", "LBicep", "chest", "chest", handleGroup			
			end if
		end if
		
		if in_Stomach = False and in_Thighs = False and in_Knees = False and in_Elbows = False then exit function
		
		set BVolumes = CreateObject("XSI.Collection")
				
		if in_Stomach = True then
			Stomach in_guide, in_rig, handleGroup, in_spineType, BVolumes
		end if

		if in_Thighs = True then
			rightThigh in_guide, in_rig, handleGroup, BVolumes 
			leftThigh in_guide, in_rig, handleGroup, BVolumes 
			ParentClosestBind in_rig.FindChild("RLowerThigh"), in_BindingNulls, 2
			ParentClosestBind in_rig.FindChild("LLowerThigh"), in_BindingNulls, 3			
		end if
		
		if in_Knees = True then			
			BackOfLKnee in_guide, in_rig, in_BindingNulls, BVolumes
			BackOfRKnee in_guide, in_rig, in_BindingNulls, BVolumes
		end if
		
		if in_Elbows = True then
			LElbow in_guide, in_rig, in_BindingNulls, BVolumes	
			RElbow in_guide, in_rig, in_BindingNulls, BVolumes
		end if	
		
		StoreBoundingPose BVolumes 
		
	end if
	
end function
'-----------------------------------------
' Store Bounding Pose
'-----------------------------------------
function StoreBoundingPose(inBVolumes)
	
	set channelList = CreateObject("XSI.Collection")
	
	for b = 0 to inBVolumes.count - 1
	
		channelList.add inBVolumes(b) & ".kine.local.posx"
		channelList.add inBVolumes(b) & ".kine.local.posy"		
		channelList.add inBVolumes(b) & ".kine.local.posz"
		channelList.add inBVolumes(b) & ".kine.local.rotx"
		channelList.add inBVolumes(b) & ".kine.local.roty"		
		channelList.add inBVolumes(b) & ".kine.local.rotz"			
		channelList.add inBVolumes(b) & ".kine.local.sclx"
		channelList.add inBVolumes(b) & ".kine.local.scly"		
		channelList.add inBVolumes(b) & ".kine.local.sclz"			
			
	next
	
	dim CList
	
	'CList = join(channelList.GetAsText, ",")
	CList = channelList.GetAsText
		
	SIStoreAction inBVolumes(0),CList, 1, "BoundingVolumeDefaultPose",False, False, 1, 10, False
	
end function
'-----------------------------------------
' Check Sliding Components
'-----------------------------------------
function checkSlidingComponents(in_guide) 

	ID = Valid

	if IsComponent(in_guide&".LArmPitBase") = False then ID = in_guide&".LArmPitBase"
	if IsComponent(in_guide&".LArmPitBind") = False then ID = in_guide&".LArmPitBind"
	if IsComponent(in_guide&".LCalfBack") = False then ID = in_guide&".LCalfBack"
	if IsComponent(in_guide&".LElbowJoint1") = False then ID = in_guide&".LElbowJoint1"
	if IsComponent(in_guide&".LElbowJoint2") = False then ID = in_guide&".LElbowJoint2"
	if IsComponent(in_guide&".LForeArmSquash") = False then ID = in_guide&".LForeArmSquash"
	if IsComponent(in_guide&".LForeArmSquash1") = False then ID = in_guide&".LForeArmSquash1"
	if IsComponent(in_guide&".LHipBottom") = False then ID = in_guide&".LHipBottom"
	if IsComponent(in_guide&".LHipBind") = False then ID = in_guide&".LHipBind"
	if IsComponent(in_guide&".LHipTop") = False then ID = in_guide&".LHipTop"
	if IsComponent(in_guide&".LowerStomach") = False then ID = in_guide&".LowerStomach"
	if IsComponent(in_guide&".LRear") = False then ID = in_guide&".LRear"
	if IsComponent(in_guide&".LLowerThigh") = False then ID = in_guide&".LThigh"
	if IsComponent(in_guide&".LThighBack1") = False then ID = in_guide&".LThighBack1"
	if IsComponent(in_guide&".LThighBack2") = False then ID = in_guide&".LThighBack2"
	if IsComponent(in_guide&".LThighBind") = False then ID = in_guide&".LThighBind"
	if IsComponent(in_guide&".RArmPitBase") = False then ID = in_guide&".RArmPitBase"
	if IsComponent(in_guide&".RArmPitBind") = False then ID = in_guide&".RArmPitBind"
	if IsComponent(in_guide&".RArmPitTop") = False then ID = in_guide&".RArmPitTop"
	if IsComponent(in_guide&".RCalfBack") = False then ID = in_guide&".RCalfBack"
	if IsComponent(in_guide&".RElbowJoint1") = False then ID = in_guide&".RElbowJoint1"
	if IsComponent(in_guide&".RElbowJoint2") = False then ID = in_guide&".RElbowJoint2"
	if IsComponent(in_guide&".RHipBind") = False then ID = in_guide&".RHipBind"
	if IsComponent(in_guide&".RHipBottom") = False then ID = in_guide&".RHipBottom"
	if IsComponent(in_guide&".RHipTop") = False then ID = in_guide&".RHipTop"
	if IsComponent(in_guide&".RRear") = False then ID = in_guide&".RRear"
	if IsComponent(in_guide&".RLowerThigh") = False then ID = in_guide&".RThigh"
	if IsComponent(in_guide&".RThighBack1") = False then ID = in_guide&".RThighBack1"
	if IsComponent(in_guide&".RThighBack2") = False then ID = in_guide&".RThighBack2"
	if IsComponent(in_guide&".RThighBind") = False then ID = in_guide&".RThighBind"
	if IsComponent(in_guide&".Stomach") = False then ID = in_guide&".Stomach"
	if IsComponent(in_guide&".UpperStomach") = False then ID = in_guide&".UpperStomach"
	if IsComponent(in_guide&".LForeArmCenter") = False then ID = in_guide&".LForeArmCenter"
	if IsComponent(in_guide&".RForeArmCenter") = False then ID = in_guide&".RForeArmCenter"
	if IsComponent(in_guide&".LCalfCenter") = False then ID = in_guide&".LCalfCenter"
	if IsComponent(in_guide&".RCalfCenter") = False then ID = in_guide&".RCalfCenter"
				
	if ID = Valid then
		checkSlidingComponents = True	
	else
	
		logmessage "Sliding and Deformation Component: " & ID & " not found in Proportioning Guide"
		checkSlidingComponents = False
	end if
	
end function
'-----------------------------------------
' Stomach
'-----------------------------------------
function Stomach(in_guide, in_rig, in_group, in_spineType, inBVolumes)
	
	' if irst get a bunch of positions in space, solve on the right 
	' side and assume symmetry
	
	dim root, Pstomach, Rside, Rback, Base, VolCenter, StomachSphere 
	dim volRadius
	
	set root = ActiveProject.ActiveScene.Root
	
	set Pstomach = XSIMath.CreateVector3
	set Rside = XSIMath.CreateVector3
	set Rback = XSIMath.CreateVector3
	set Base = XSIMath.CreateVector3
	set VolCenter = XSIMath.CreateVector3
		
	in_guide.FindChild("Stomach").Kinematics.Global.Transform.GetTranslation Pstomach
	in_guide.FindChild("RHipTop").Kinematics.Global.Transform.GetTranslation Rside 
	in_guide.FindChild("RRear").Kinematics.Global.Transform.GetTranslation Rback
	in_guide.FindChild("LowerStomach").Kinematics.Global.Transform.GetTranslation Base 
		
	set StomachSphere = root.AddPrimitive("Sphere", "StomachVolume")
	inBVolumes.add StomachSphere
	
	VolCenter.y = Pstomach.y
	VolCenter.z = (Pstomach.z + Rback.z)/2
	VolCenter.x = 0
	
	Translate StomachSphere , VolCenter.x, VolCenter.y, VolCenter.z, siAbsolute, siView, siObj, siXYZ

	volRadius = Pstomach.z - VolCenter.z
	StomachSphere.radius = volRadius
	
	'lineup the scale with the x axis
	xScale = (VolCenter.x - Rside.x) /volRadius
	yScale = (VolCenter.y - Base.y) /volRadius *1.3
		
	Scale StomachSphere , xScale , yScale, 1, siAbsolute, siLocal, siObj, siXYZ
	
	in_rig.FindChild("hipBone").AddChild StomachSphere
	
	StomachSphere.AddProperty("Display Property")
	StomachSphere.properties("display").wirecol.value = 728
	
	
	'%%%%%%%%%%%%% make slide components %%%%%%%%%%%%%%%%%
	dim bind, tpull, bpull
	set bind = in_guide.FindChild("Stomach")
	set tpull = in_guide.FindChild("UpperStomach")	
	set bpull = in_guide.FindChild("LowerStomach")
	
	'Lumber3
	
	set bindNull = in_rig.FindChild("hipBone").AddNull(bind.name)
	set bottomNull = in_rig.FindChild("hipBone").AddNull(bpull.name)
	
	if in_spineType	= 0 then
		set topNull = in_rig.FindChild("chestBone").AddNull(tpull.name)	
	else 
		set topNull = in_rig.FindChild("chest").AddNull(tpull.name)	
	end if
	
	set pulls = CreateObject("XSI.Collection")
	pulls.add topNull 
	pulls.add bottomNull 
	
	set c1 = bindNull.Kinematics.AddConstraint("TwoPoints", pulls, False)
	set c1.UpVectorReference = in_rig.FindChild("hipBone")	
	set c2 = bindNull.Kinematics.AddConstraint("BoundingVolume", StomachSphere, False)
	
	SetValue c2 & ".type", 3
	
	t_match tpull, topNull
	t_match bpull, bottomNull 	
			
	bindNull.AddProperty("Display Property")
	bindNull.properties("display").wirecol.value = 748	
	topNull.AddProperty("Display Property")
	topNull.properties("display").wirecol.value = 472	
	bottomNull.AddProperty("Display Property")
	bottomNull.properties("display").wirecol.value = 472 	
	
	SetValue bindNull & ".null.size", .2	
	SetValue topNull & ".null.size", .1		
	SetValue bottomNull & ".null.size", .1
	
	in_group.AddMember topNull 
	in_group.AddMember bottomNull 
		
	AddToGroup in_rig& ".envelope_Group", bindNull
	'%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
	
end function
'-----------------------------------------
' Right Thigh
'-----------------------------------------
function rightThigh(in_guide, in_rig, in_group, inBVolumes)

	' ok this one is really tricky because we need to build the 
	' volume off a bunch of points that barely line up.

	'===================
	' first we know that the plane of the volume is defined by 
	' a) the vector going from the leg to the knee (the normal)
	' b) the point of the ThighBind
	
	set PlaneNormal = XSIMath.CreateVector3
	set PlanePoint = XSIMath.CreateVector3
	set leg = XSIMath.CreateVector3	
	set knee = XSIMath.CreateVector3
		
	in_guide.FindChild("RLeg").Kinematics.Global.Transform.GetTranslation leg
	in_guide.FindChild("RKnee").Kinematics.Global.Transform.GetTranslation knee
	in_guide.FindChild("RThighBind").Kinematics.Global.Transform.GetTranslation PlanePoint 

	PlaneNormal.sub leg, knee
	
	'===================
	' ok next we to project the side of the hip onto our plane, and
	' get the vector going to the center of the bone.  Then exend that
	' vector to meet the x = 0 plane (InnerPoint).  
	
	set HipSide1 = XSIMath.CreateVector3
	in_guide.FindChild("RHipBottom").Kinematics.Global.Transform.GetTranslation HipSide1 
		
	ProjectOnPlane HipSide1, PlaneNormal, PlanePoint, HipSide2
	ProjectOnVector HipSide2, leg, knee, HipOnBone
	
	set PlaneNormal = XSIMath.CreateVector3
	set PlanePoint = XSIMath.CreateVector3
	PlaneNormal.set 1,0,0
	PlanePoint.set 0,0,0
	
	VectorPlaneIntersection HipSide2, HipOnBone, PlaneNormal, PlanePoint, InnerPoint
		
	'===================
	' now it's the center of this extended vector that becomes 
	' the center of our volume.

	set VolCenter = XSIMath.CreateVector3
	VolCenter.LinearlyInterpolate HipSide2, InnerPoint, .5
	
	set ThighSphere = in_rig.FindChild("RThigh").AddPrimitive("Sphere", "RThighVolume")
	inBVolumes.add ThighSphere
	
	Translate ThighSphere , VolCenter.x, VolCenter.y, VolCenter.z, siAbsolute, siView, siObj, siXYZ


	'===================
	'orient towards RThighBind
	set Thigh = XSIMath.CreateVector3
	in_guide.FindChild("RThighBind").Kinematics.Global.Transform.GetTranslation Thigh
		
	' really hacky way to do this cause I'm in a rush
	set RefPoint = ThighSphere.AddNull("RefPoint")
	
	RefPoint.Kinematics.Local.parameters("posx").value = 0
	RefPoint.Kinematics.Local.parameters("posy").value = 0
	RefPoint.Kinematics.Local.parameters("posz").value = -1
	
	set RefPos = XSIMath.CreateVector3
	RefPoint.Kinematics.Global.Transform.GetTranslation RefPos

	'get the angle difference for the orientation
	set A1 = XSIMath.CreateVector3
	set A2 = XSIMath.CreateVector3
	A1.sub Thigh, VolCenter
	A2.sub RefPos, VolCenter
	angle = A1.Angle(A2)
	angle = XSIMath.RadiansToDegrees(angle) 
	
	'get the cross product
	set cp = xsimath.CreateVector3 
	cp.cross A1, A2 
	if cp.y < 0 then angle= angle* -1 
	
	Rotate ThighSphere ,angle,0,0,siAbsolute,siParent
	ThighSphere.radius = A1.length

	DeleteObj RefPoint
	
	'===================
	' now set the scale of the Volume
	set zDist = XSIMath.CreateVector3
	zDist.sub VolCenter,  HipSide2
	zScale = zDist.Length/A1.length
	
	Scale ThighSphere, 2 , 1, zScale, siAbsolute, siLocal, siObj, siXYZ
	
	ThighSphere.AddProperty("Display Property")
	ThighSphere.properties("display").wirecol.value = 728

	'%%%%%%%%%%%%% make slide components %%%%%%%%%%%%%%%%%
	dim bind, tpull, bpull
	set bind = in_guide.FindChild("RThighBind")
	set tpull = in_guide.FindChild("RRear")	
	set bpull = in_guide.FindChild("RLowerThigh")
	
	set bindNull = in_rig.FindChild("RThigh").AddNull(bind.name)
	set topNull = in_rig.FindChild("hipBone").AddNull(tpull.name)	
	set bottomNull = in_rig.FindChild("RThigh").AddNull(bpull.name)		
	
	set pulls = CreateObject("XSI.Collection")
	pulls.add topNull 
	pulls.add bottomNull 
	
	set c1 = bindNull.Kinematics.AddConstraint("TwoPoints", pulls, False)
	set c1.UpVectorReference = ThighSphere
	set c2 = bindNull.Kinematics.AddConstraint("BoundingVolume", ThighSphere, False)
	
	SetValue c2 & ".type", 1
	
	t_match tpull, topNull
	t_match bpull, bottomNull 	
			
	bindNull.AddProperty("Display Property")
	bindNull.properties("display").wirecol.value = 748	
	topNull.AddProperty("Display Property")
	topNull.properties("display").wirecol.value = 472	
	bottomNull.AddProperty("Display Property")
	bottomNull.properties("display").wirecol.value = 472 	
	
	SetValue bindNull & ".null.size", .2	
	SetValue topNull & ".null.size", .1		
	SetValue bottomNull & ".null.size", .1
	
	in_group.AddMember topNull 
	in_group.AddMember bottomNull 
		
	AddToGroup in_rig& ".envelope_Group", bindNull
	'%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
		
end function
'-----------------------------------------
' Left Thigh
'-----------------------------------------
function leftThigh(in_guide, in_rig, in_group, inBVolumes)

	' ok this one is really tricky because we need to build the 
	' volume off a bunch of points that barely line up.

	'===================
	' first we know that the plane of the volume is defined by 
	' a) the vector going from the leg to the knee (the normal)
	' b) the point of the ThighBind
	
	set PlaneNormal = XSIMath.CreateVector3
	set PlanePoint = XSIMath.CreateVector3
	set leg = XSIMath.CreateVector3	
	set knee = XSIMath.CreateVector3
		
	in_guide.FindChild("LLeg").Kinematics.Global.Transform.GetTranslation leg
	in_guide.FindChild("LKnee").Kinematics.Global.Transform.GetTranslation knee
	in_guide.FindChild("LThighBind").Kinematics.Global.Transform.GetTranslation PlanePoint 

	PlaneNormal.sub leg, knee
	
	'===================
	' ok next we to project the side of the hip onto our plane, and
	' get the vector going to the center of the bone.  Then exend that
	' vector to meet the x = 0 plane (InnerPoint).  
	
	set HipSide1 = XSIMath.CreateVector3
	in_guide.FindChild("LHipBottom").Kinematics.Global.Transform.GetTranslation HipSide1 
		
	ProjectOnPlane HipSide1, PlaneNormal, PlanePoint, HipSide2
	ProjectOnVector HipSide2, leg, knee, HipOnBone
	
	set PlaneNormal = XSIMath.CreateVector3
	set PlanePoint = XSIMath.CreateVector3
	PlaneNormal.set 1,0,0
	PlanePoint.set 0,0,0
	
	VectorPlaneIntersection HipSide2, HipOnBone, PlaneNormal, PlanePoint, InnerPoint
		
	'===================
	' now it's the center of this extended vector that becomes 
	' the center of our volume.

	set VolCenter = XSIMath.CreateVector3
	VolCenter.LinearlyInterpolate HipSide2, InnerPoint, .5
	
	set ThighSphere = in_rig.FindChild("LThigh").AddPrimitive("Sphere", "LThighVolume")
	inBVolumes.add ThighSphere 
	
	Translate ThighSphere , VolCenter.x, VolCenter.y, VolCenter.z, siAbsolute, siView, siObj, siXYZ


	'===================
	'orient towards LThighBind
	set Thigh = XSIMath.CreateVector3
	in_guide.FindChild("LThighBind").Kinematics.Global.Transform.GetTranslation Thigh
		
	' really hacky way to do this cause I'm in a rush
	set LefPoint = ThighSphere.AddNull("LefPoint")
	
	LefPoint.Kinematics.Local.parameters("posx").value = 0
	LefPoint.Kinematics.Local.parameters("posy").value = 0
	LefPoint.Kinematics.Local.parameters("posz").value = -1
	
	set LefPos = XSIMath.CreateVector3
	LefPoint.Kinematics.Global.Transform.GetTranslation LefPos

	'get the angle difference for the orientation
	set A1 = XSIMath.CreateVector3
	set A2 = XSIMath.CreateVector3
	A1.sub Thigh, VolCenter
	A2.sub LefPos, VolCenter
	angle = A1.Angle(A2)
	angle = XSIMath.RadiansToDegrees(angle) 
	
	'get the cross product
	set cp = xsimath.CreateVector3 
	cp.cross A1, A2 
	if cp.y < 0 then angle= angle* -1 
	
	Rotate ThighSphere ,angle,0,0,siAbsolute,siParent
	ThighSphere.radius = A1.length

	DeleteObj LefPoint
	
	'===================
	' now set the scale of the Volume
	set zDist = XSIMath.CreateVector3
	zDist.sub VolCenter,  HipSide2
	zScale = zDist.Length/A1.length
	
	Scale ThighSphere, 2 , 1, zScale, siAbsolute, siLocal, siObj, siXYZ
	
	ThighSphere.AddProperty("Display Property")
	ThighSphere.properties("display").wirecol.value = 728	
	
	'%%%%%%%%%%%%% make slide components %%%%%%%%%%%%%%%%%
	dim bind, tpull, bpull
	set bind = in_guide.FindChild("LThighBind")
	set tpull = in_guide.FindChild("LRear")	
	set bpull = in_guide.FindChild("LLowerThigh")
	
	set bindNull = in_rig.FindChild("LThigh").AddNull(bind.name)
	set topNull = in_rig.FindChild("hipBone").AddNull(tpull.name)	
	set bottomNull = in_rig.FindChild("LThigh").AddNull(bpull.name)		
	
	set pulls = CreateObject("XSI.Collection")
	pulls.add topNull 
	pulls.add bottomNull 
	
	set c1 = bindNull.Kinematics.AddConstraint("TwoPoints", pulls, False)
	set c1.UpVectorReference = ThighSphere
	set c2 = bindNull.Kinematics.AddConstraint("BoundingVolume", ThighSphere, False)
	
	SetValue c2 & ".type", 1
	
	t_match tpull, topNull
	t_match bpull, bottomNull 	
			
	bindNull.AddProperty("Display Property")
	bindNull.properties("display").wirecol.value = 748	
	topNull.AddProperty("Display Property")
	topNull.properties("display").wirecol.value = 472	
	bottomNull.AddProperty("Display Property")
	bottomNull.properties("display").wirecol.value = 472 	
	
	SetValue bindNull & ".null.size", .2	
	SetValue topNull & ".null.size", .1		
	SetValue bottomNull & ".null.size", .1
	
	in_group.AddMember topNull 
	in_group.AddMember bottomNull 
		
	AddToGroup in_rig& ".envelope_Group", bindNull
	'%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
end function
'------------------------------
'------------------------------
' Project On Plane
'------------------------------
function ProjectOnPlane(inPoint, inPlaneNormal, inPlanePoint, outPoint)

	dim planeEnd, vec, dot, ScaleChange, vProjection, pProjection

   set planeEnd = XSIMath.CreateVector3
   set vec = XSIMath.CreateVector3
   set vProjection = XSIMath.CreateVector3
   set pProjection = XSIMath.CreateVector3      
   
	planeEnd.Add inPlanePoint, inPlaneNormal
	vec.sub inPoint, inPlanePoint

	dot = vec.Dot(inPlaneNormal)  
	ScaleChange = dot/inPlaneNormal.length^2
	vProjection.Scale ScaleChange, inPlaneNormal
	pProjection.Sub vec, vProjection
	pProjection.AddInPlace inPlanePoint
	
	set outPoint = pProjection
	
end function
'------------------------------
' Project On Vector
'------------------------------
function ProjectOnVector(inPoint, inVstart, inVend, outPoint)

	dim planeEnd, vec, dot, ScaleChange, vProjection, PointVector

   set vec = XSIMath.CreateVector3
   
   set vProjection = XSIMath.CreateVector3
   set PointVector = XSIMath.CreateVector3      
   
   PointVector.Sub inPoint, inVstart
	vec.Sub inVend, inVstart

	dot = PointVector.Dot(vec)
	ScaleChange = dot/vec.length^2
	vProjection.Scale ScaleChange, vec
	
	vProjection.AddInPlace inVstart
	
	set outPoint = vProjection

end function
'------------------------------
' Vector Plane Intesection
'------------------------------
function VectorPlaneIntersection(inPoint1, inPoint2, inPlaneNormal, inPlanePoint, outPoint)
	
	dim topDif, top, bottomDif, bottom, t, oDif 
	
	set outPoint = XSIMath.CreateVector3	
		
	' t = ( (inPlanePoint - inPoint1) dot(inPlaneNormal)) / ((inPoint2 - inPoint1)dot(inPlaneNormal))) 
	' t = top / bottom
	' top = (inPlanePoint - inPoint1) dot(inPlaneNormal)
	' bottom = (inPoint2 - inPoint1)dot(inPlaneNormal)
	' outPoint = inPoint1 + t (inPoint2 - inPoint1) 
	
	'first find top	
	set topDif = XSIMath.CreateVector3
	topDif.sub inPlanePoint, inPoint1
	top = topDif.Dot(inPlaneNormal)  

	'then the bottom
	set bottomDif = XSIMath.CreateVector3	
	bottomDif.sub inPoint2, inPoint1
	bottom = bottomDif.Dot(inPlaneNormal) 

	if bottom = 0 then 
		outPoint.set 0,0,0
		exit function
	end if
	
	t = top/bottom
			
	set oDif = XSIMath.CreateVector3
	oDif.sub inPoint2, inPoint1
	oDif.ScaleInPlace t
	set outPoint = XSIMath.CreateVector3	
	outPoint.Add inPoint1, oDif
	
end function
'-----------------------------------------
' Back of Left Knee
'-----------------------------------------                    
function BackOfLKnee(in_guide, in_rig, in_bindNulls, inBVolumes)
	
	dim curve, thighTarget1, thighTarget2, Lshin, LThigh
	dim LKneeSphere, KneeBack1, KneeBack2, b1, b2, p1,p2
	dim calfBack, calfBind, z
	
	set curve = in_guide.FindChild("LCalfCurve")
	set thighTarget1 = in_guide.FindChild("LThighBack1")	
	set thighTarget2 = in_guide.FindChild("LThighBack2")	
	set calfBack = in_guide.FindChild("LCalfBack")
	
	set Lshin = in_rig.FindChild("Lshin")
	set LThigh = in_rig.FindChild("LThigh")
	
	'hookup the calf
	set LKneeSphere = Lshin.AddPrimitive("Sphere", "LKneeBendVolume")
	inBVolumes.add LKneeSphere 
	
	t_match curve, LKneeSphere 
	LKneeSphere.radius = curve.radius.value
	'translate back 75% of the radius
	z = LKneeSphere.Kinematics.Local.parameters("posy").value 
	LKneeSphere.Kinematics.Local.parameters("posy").value = z - .3 * curve.radius.value
	

	' create the back of the thigh
	' if there was roll subdivision on the leg then you
	' need to parent under the closest divider.  Otherwise, use
	' parent under the thigh bone
	
	set KneeBack1 = LThigh.AddNull("KneeBack1")
	set KneeBack2 = LThigh.AddNull("KneeBack2")	
	
	t_match thighTarget1, KneeBack1 
	t_match thighTarget2, KneeBack2 
	
	' connnect the objects properly to the roll division setup
	ParentClosestBind KneeBack1, in_bindNulls, 3
	ParentClosestBind KneeBack2, in_bindNulls, 3
	
	set p1 = KneeBack1.Kinematics.AddConstraint("Pose", KneeBack1.Parent, True)
	set p2 = KneeBack2.Kinematics.AddConstraint("Pose", KneeBack2.Parent, True)
	
	set b1 = KneeBack1.Kinematics.AddConstraint("BoundingVolume", LKneeSphere, False)
	set b2 = KneeBack2.Kinematics.AddConstraint("BoundingVolume", LKneeSphere, False)

	LKneeSphere.AddProperty("Display Property")
	LKneeSphere.properties("display").wirecol.value = 728		
	
	AddToGroup in_rig& ".envelope_Group", KneeBack1 
	AddToGroup in_rig& ".envelope_Group", KneeBack2
	
	KneeBack1.AddProperty("Display Property")
	KneeBack1.properties("display").wirecol.value = 748	
	KneeBack2.AddProperty("Display Property")
	KneeBack2.properties("display").wirecol.value = 748                 		
	SetValue KneeBack1 &".null.size", .25
	SetValue KneeBack2 &".null.size", .25
	
	
end function
'-----------------------------------------
' Back of Right Knee
'-----------------------------------------
function BackOfRKnee(in_guide, in_rig, in_bindNulls, inBVolumes)
	
	dim curve, thighTarget1, thighTarget2, Rshin, RThigh
	dim RKneeSphere, KneeBack1, KneeBack2, b1, b2, p1,p2
	dim calfBack, calfBind, z
	
	set curve = in_guide.FindChild("RCalfCurve")
	set thighTarget1 = in_guide.FindChild("RThighBack1")	
	set thighTarget2 = in_guide.FindChild("RThighBack2")	
	set calfBack = in_guide.FindChild("RCalfBack")
	
	set Rshin = in_rig.FindChild("Rshin")
	set RThigh = in_rig.FindChild("RThigh")
	
	'hookup the calf
	set RKneeSphere = Rshin.AddPrimitive("Sphere", "RKneeBendVolume")
	inBVolumes.add RKneeSphere 
	
	t_match curve, RKneeSphere 
	RKneeSphere.radius = curve.radius.value
	'translate back 75% of the radius
	z = RKneeSphere.Kinematics.Local.parameters("posy").value 
	RKneeSphere.Kinematics.Local.parameters("posy").value = z - .3 * curve.radius.value
	
	' create the back of the thigh
	' if there was roll subdivision on the leg then you
	' need to parent under the closest divider.  Otherwise, use
	' parent under the thigh bone
	
	set KneeBack1 = RThigh.AddNull("KneeBack1")
	set KneeBack2 = RThigh.AddNull("KneeBack2")	
	
	t_match thighTarget1, KneeBack1 
	t_match thighTarget2, KneeBack2 
	
	' connnect the objects properly to the roll division setup
	ParentClosestBind KneeBack1, in_bindNulls, 2
	ParentClosestBind KneeBack2, in_bindNulls, 2
	
	set p1 = KneeBack1.Kinematics.AddConstraint("Pose", KneeBack1.Parent, True)
	set p2 = KneeBack2.Kinematics.AddConstraint("Pose", KneeBack2.Parent, True)
	
	set b1 = KneeBack1.Kinematics.AddConstraint("BoundingVolume", RKneeSphere, False)
	set b2 = KneeBack2.Kinematics.AddConstraint("BoundingVolume", RKneeSphere, False)

	RKneeSphere.AddProperty("Display Property")
	RKneeSphere.properties("display").wirecol.value = 728	
	
	AddToGroup in_rig& ".envelope_Group", KneeBack1 
	AddToGroup in_rig& ".envelope_Group", KneeBack2
	
	KneeBack1.AddProperty("Display Property")
	KneeBack1.properties("display").wirecol.value = 748	
	KneeBack2.AddProperty("Display Property")
	KneeBack2.properties("display").wirecol.value = 748		
	SetValue KneeBack1 &".null.size", .25
	SetValue KneeBack2 &".null.size", .25
		
end function

'-----------------------------------------
' Right Elbow
'-----------------------------------------
function RElbow(in_guide, in_rig, in_bindNulls, inBVolumes)
	

	dim curve, thighTarget1, thighTarget2, RForearm, RBicep
	dim LElbowSphere, Elbow1, Elbow2, b1, b2, p1,p2
	dim calfBack, calfBind, y
	
	set curve = in_guide.FindChild("RForeArmCurve")
	set ElbowJoint1 = in_guide.FindChild("RElbowJoint1")	
	set ElbowJoint2 = in_guide.FindChild("RElbowJoint2")	
	set ForeArmSquash = in_guide.FindChild("RForeArmSquash")
	
		
	set RForearm= in_rig.FindChild("RForearm")
	set RBicep= in_rig.FindChild("RBicep")
	
	
	'hookup the bicep
	set LElbowSphere = RForearm.AddPrimitive("Sphere","RElbowBendVolume")
	inBVolumes.add LElbowSphere 
	
	t_match curve, LElbowSphere 
	LElbowSphere.radius = curve.radius.value
	y = LElbowSphere.Kinematics.Local.parameters("posy").value 
	LElbowSphere.Kinematics.Local.parameters("posy").value = y + .1 * curve.radius.value
	

	' create the back of the thigh
	' if there was roll subdivision on the leg then you
	' need to parent under the closest divider.  Otherwise, use
	' parent under the thigh bone
	
	set Elbow1 = RBicep.AddNull("Elbow1")
	set Elbow2 = RBicep.AddNull("Elbow2")	
	
	t_match ElbowJoint1, Elbow1 
	t_match ElbowJoint2 , Elbow2 
	
	' connnect the objects properly to the roll division setup
	ParentClosestBind Elbow1, in_bindNulls, 0
	ParentClosestBind Elbow2, in_bindNulls, 0
	if typename(in_bindNulls(4)) = Object then
		in_bindNulls(4).AddChild LElbowSphere
	end if
	
	set p1 = Elbow1.Kinematics.AddConstraint("Pose", Elbow1.parent, True)
	set p2 = Elbow2.Kinematics.AddConstraint("Pose", Elbow2.parent, True)
	
	set b1 = Elbow1.Kinematics.AddConstraint("BoundingVolume", LElbowSphere, False)
	set b2 = Elbow2.Kinematics.AddConstraint("BoundingVolume", LElbowSphere, False)
	
	LElbowSphere.AddProperty("Display Property")
	LElbowSphere.properties("display").wirecol.value = 728
		
	AddToGroup in_rig& ".envelope_Group", Elbow1 
	AddToGroup in_rig& ".envelope_Group", Elbow2

	Elbow1.AddProperty("Display Property")
	Elbow1.properties("display").wirecol.value = 748	
	Elbow2.AddProperty("Display Property")
	Elbow2.properties("display").wirecol.value = 748		
	SetValue Elbow1 & ".null.size", .25
	SetValue Elbow2 & ".null.size", .2
	
end function
'-----------------------------------------
' Left Elbow
'-----------------------------------------
function LElbow(in_guide, in_rig, in_bindNulls, inBVolumes)
	
	dim curve, thighTarget1, thighTarget2, LForearm, LBicep
	dim LElbowSphere, Elbow1, Elbow2, b1, b2, p1,p2
	dim calfBack, calfBind, y
	
	set curve = in_guide.FindChild("LForeArmCurve")
	set ElbowJoint1 = in_guide.FindChild("LElbowJoint1")	
	set ElbowJoint2 = in_guide.FindChild("LElbowJoint2")	
	set ForeArmSquash = in_guide.FindChild("LForeArmSquash")
	
		
	set LForearm= in_rig.FindChild("LForearm")
	set LBicep= in_rig.FindChild("LBicep")
	
	
	'hookup the bicep
	set LElbowSphere = LForearm.AddPrimitive("Sphere","LElbowBendVolume")
	inBVolumes.add LElbowSphere 
	
	t_match curve, LElbowSphere 
	LElbowSphere.radius = curve.radius.value
	y = LElbowSphere.Kinematics.Local.parameters("posy").value 
	LElbowSphere.Kinematics.Local.parameters("posy").value = y + .1 * curve.radius.value
	

	' create the back of the thigh
	' if there was roll subdivision on the leg then you
	' need to parent under the closest divider.  Otherwise, use
	' parent under the thigh bone
	
	set Elbow1 = LBicep.AddNull("Elbow1")
	set Elbow2 = LBicep.AddNull("Elbow2")	
	
	t_match ElbowJoint1, Elbow1 
	t_match ElbowJoint2 , Elbow2 


	' connnect the objects properly to the roll division setup
	ParentClosestBind Elbow1, in_bindNulls, 1
	ParentClosestBind Elbow2, in_bindNulls, 1
	if typename(in_bindNulls(5)) = Object then
		in_bindNulls(5).AddChild LElbowSphere
	end if
	
	
	set p1 = Elbow1.Kinematics.AddConstraint("Pose", Elbow1.parent, True)
	set p2 = Elbow2.Kinematics.AddConstraint("Pose", Elbow2.parent, True)
	
	set b1 = Elbow1.Kinematics.AddConstraint("BoundingVolume", LElbowSphere, False)
	set b2 = Elbow2.Kinematics.AddConstraint("BoundingVolume", LElbowSphere, False)
	
	
	LElbowSphere.AddProperty("Display Property")
	LElbowSphere.properties("display").wirecol.value = 728
		
	AddToGroup in_rig& ".envelope_Group", Elbow1 
	AddToGroup in_rig& ".envelope_Group", Elbow2
	
	Elbow1.AddProperty("Display Property")
	Elbow1.properties("display").wirecol.value = 748	
	Elbow2.AddProperty("Display Property")
	Elbow2.properties("display").wirecol.value = 748		
	SetValue Elbow1 & ".null.size", .25
	SetValue Elbow2 & ".null.size", .2
	
	
end function
'--------------------------------------
' Slide Setup
'--------------------------------------
function SlideSetup(in_guide, in_rig, inBindRef, inTopRef, inBotRef, inBindParent, inTopParent, inBotParent, inUpV, inGroup)

	dim bind, tpull, bpull
	set bind = in_guide.FindChild(inBindRef)
	set tpull = in_guide.FindChild(inTopRef)	
	set bpull = in_guide.FindChild(inBotRef)
	
	set bindNull = in_rig.FindChild(inBindParent).AddNull(bind.name)
	set topNull = in_rig.FindChild(inTopParent).AddNull(tpull.name)	
	set bottomNull = in_rig.FindChild(inBotParent).AddNull(bpull.name)		
	
	set pulls = CreateObject("XSI.Collection")
	pulls.add topNull 
	pulls.add bottomNull 
	
	set c1 = bindNull.Kinematics.AddConstraint("TwoPoints", pulls, False)
	set c1.UpVectorReference = in_rig.FindChild(inUpV)
	
	t_match tpull, topNull
	t_match bpull, bottomNull 	
	
	bindNull.AddProperty("Display Property")
	bindNull.properties("display").wirecol.value = 748	
	topNull.AddProperty("Display Property")
	topNull.properties("display").wirecol.value = 472	
	bottomNull.AddProperty("Display Property")
	bottomNull.properties("display").wirecol.value = 472 	
	
	SetValue bindNull & ".null.size", .2	
	SetValue topNull & ".null.size", .1		
	SetValue bottomNull & ".null.size", .1
	
	inGroup.AddMember topNull 
	inGroup.AddMember bottomNull 
		
	AddToGroup in_rig& ".envelope_Group", bindNull

end function

'--------------------------------------
' Parent to Closest Bind
'--------------------------------------
function ParentClosestBind(inObj, inBindNulls, inIndex)
	
	' because the Bicep and Thigh rotation on the character
	' may not be coming from the bone, but from Binding Nulls,
	' the Skin Sliding needs to find the closest Null to 
	' pickup rotations off of.  If there aren't binding nulls
	' the stick it under the AltParent
	
	' the Binding Nulls are organised:
	' BindNulls(0) = Right Bicep
	' BindNulls(1) = Left Bicep
	' BindNulls(2) = Right Thigh
	' BindNulls(3) = Left Thigh
	' BindNulls(4) = Right Elbow Null (not a list)
	' BindNulls(5) = Left Elbow Null (not a list)
	
	dim oCenter, nullCenter, current_dist, min_dist, best_match
	
	' which one we are attaching to is defined by inIndex
	
	set oCenter = XSIMath.CreateVector3
	
	if typename(inBindNulls(inIndex)) <> Object then		
		exit function
	else
	
		set oCenter = XSIMath.CreateVector3
		inObj.Kinematics.Global.Transform.GetTranslation oCenter
		
		for i = 0 to inBindNulls(inIndex).count - 1
			'get the position
			set nullCenter = XSIMath.CreateVector3
			inBindNulls(inIndex)(i).Kinematics.Global.Transform.GetTranslation nullCenter
			nullCenter.SubinPlace oCenter
			current_dist = nullCenter.length
			
			if i = 0 then			
				min_dist = current_dist 
				set best_match = inBindNulls(inIndex)(i)
			else
				if current_dist < min_dist then
					min_dist = current_dist 
					set best_match = inBindNulls(inIndex)(i)
				end if
			end if
		next
		
		best_match.AddChild inObj
		
	end if
	
end function
'--------------------------------------













'****************************************************
'****************************************************
'****************************************************
'****************************************************
'****************************************************

' ATTACH SKELETON

'****************************************************
'****************************************************
'****************************************************
'****************************************************
'****************************************************
'-----------------------------------
' Attach Skeleton
'----------------------------------- 
sub attach_skeleton(in_rig, in_nbLumber, in_hands, in_headType, in_spineType, in_dupSkel)

	dim spine, constraints, mpath
	
	set myModel = GetPresetModel( "Biped_Skeleton", "Biped_Skeleton" )
	
	AS_model_and_GlobalSRT_match myModel, valid
	if valid = False then exit sub
	
	AS_Attach_hips myModel, valid
	
	AS_Attach_UpperBody myModel, valid
		
	AS_attach_feet myModel, valid 
	
	if in_spineType = 0 then
		AS_draw_spine in_nbLumber, mymodel, spine 
	else
		AS_rig_dupSkel mymodel, in_dupSkel, spine 
	end if
	

	
	AS_GlueObjects myModel, in_rig, spine, in_headType, in_spineType
	AS_Attach_UpVectors myModel, in_rig, spine, in_headType, in_spineType

	if in_hands = True then
	
		DeleteObj "B:" & myModel.FindChild("LThumbRoot")
		DeleteObj "B:" & myModel.FindChild("LIndexRoot")
		DeleteObj "B:" & myModel.FindChild("LMiddleRoot")
		DeleteObj "B:" & myModel.FindChild("LRingRoot")		
		DeleteObj "B:" & myModel.FindChild("LPinkyRoot")		
		
		DeleteObj "B:" & myModel.FindChild("RThumbRoot")
		DeleteObj "B:" & myModel.FindChild("RIndexRoot")
		DeleteObj "B:" & myModel.FindChild("RMiddleRoot")
		DeleteObj "B:" & myModel.FindChild("RRingRoot")		
		DeleteObj "B:" & myModel.FindChild("RPinkyRoot")
	else	
	
		AS_Attach_Hands myModel, valid 
		
		AS_HandRefresh myModel		 
	end if
	
	AS_refresh myModel
		
	make_ShadowDefault myModel
	
	applySynoptic2 myModel, 2	
	
end sub
'---------------------------------------------
' AS Refresh
'---------------------------------------------
function AS_refresh(inModel)

	set oTrans = inModel.FindChild("RShin").Kinematics.Global.Transform
	set oTrans = inModel.FindChild("LShin").Kinematics.Global.Transform
	set oTrans = inModel.FindChild("RThigh").Kinematics.Global.Transform
	set oTrans = inModel.FindChild("LThigh").Kinematics.Global.Transform
	set oTrans = inModel.FindChild("RFoot").Kinematics.Global.Transform
	set oTrans = inModel.FindChild("LFoot").Kinematics.Global.Transform  
	set oTrans = inModel.FindChild("RToe").Kinematics.Global.Transform
	set oTrans = inModel.FindChild("LToe").Kinematics.Global.Transform  
	set oTrans = inModel.FindChild("Neck").Kinematics.Global.Transform
	set oTrans = inModel.FindChild("Head").Kinematics.Global.Transform  
	set oTrans = inModel.FindChild("NeckEff").Kinematics.Global.Transform  	
		
end function
'---------------------------------------------
' AS Hand Refresh
'---------------------------------------------
function AS_HandRefresh(inModel)

	set oTrans = inModel.FindChild("LHand").Kinematics.Global.Transform
	set oTrans = inModel.FindChild("LThumb1").Kinematics.Global.Transform
	set oTrans = inModel.FindChild("LThumb2").Kinematics.Global.Transform
	set oTrans = inModel.FindChild("LThumb3").Kinematics.Global.Transform
	set oTrans = inModel.FindChild("LIndex1").Kinematics.Global.Transform
	set oTrans = inModel.FindChild("LIndex2").Kinematics.Global.Transform
	set oTrans = inModel.FindChild("LIndex3").Kinematics.Global.Transform  
	set oTrans = inModel.FindChild("LMiddle1").Kinematics.Global.Transform
	set oTrans = inModel.FindChild("LMiddle2").Kinematics.Global.Transform  
	set oTrans = inModel.FindChild("LMiddle3").Kinematics.Global.Transform
	set oTrans = inModel.FindChild("LRing1").Kinematics.Global.Transform
	set oTrans = inModel.FindChild("LRing2").Kinematics.Global.Transform
	set oTrans = inModel.FindChild("LRing3").Kinematics.Global.Transform
	set oTrans = inModel.FindChild("LPinky1").Kinematics.Global.Transform
	set oTrans = inModel.FindChild("LPinky2").Kinematics.Global.Transform  
	set oTrans = inModel.FindChild("LPinky3").Kinematics.Global.Transform

	set oTrans = inModel.FindChild("RHand").Kinematics.Global.Transform
	set oTrans = inModel.FindChild("RThumb1").Kinematics.Global.Transform
	set oTrans = inModel.FindChild("RThumb2").Kinematics.Global.Transform
	set oTrans = inModel.FindChild("RThumb3").Kinematics.Global.Transform
	set oTrans = inModel.FindChild("RIndex1").Kinematics.Global.Transform
	set oTrans = inModel.FindChild("RIndex2").Kinematics.Global.Transform
	set oTrans = inModel.FindChild("RIndex3").Kinematics.Global.Transform  
	set oTrans = inModel.FindChild("RMiddle1").Kinematics.Global.Transform
	set oTrans = inModel.FindChild("RMiddle2").Kinematics.Global.Transform  
	set oTrans = inModel.FindChild("RMiddle3").Kinematics.Global.Transform
	set oTrans = inModel.FindChild("RRing1").Kinematics.Global.Transform
	set oTrans = inModel.FindChild("RRing2").Kinematics.Global.Transform
	set oTrans = inModel.FindChild("RRing3").Kinematics.Global.Transform
	set oTrans = inModel.FindChild("RPinky1").Kinematics.Global.Transform
	set oTrans = inModel.FindChild("RPinky2").Kinematics.Global.Transform  
	set oTrans = inModel.FindChild("RPinky3").Kinematics.Global.Transform
		
end function
'---------------------------------------------
' Model and Global SRT Match
'---------------------------------------------
function AS_model_and_GlobalSRT_match(in_rigModel, out_valid)

	out_valid = False

	if IsComponent("BipedPropGuide.globalSRT") = False then exit function

	dim oRoot, PModel, PgSRT, RiggSRT

	set oRoot = Application.ActiveSceneRoot
	
	set PModel = oRoot.FindChild("BipedPropGuide")
	set PgSRT= oRoot.FindChild("BipedPropGuide.GlobalSRT")
	set RiggSRT = oRoot.FindChild(in_rigModel & ".globalSRT")
	
	'match up the models
	rt_match PModel, in_rigModel
	
	'match up the globalSRT's
	rt_match PgSRT, RiggSRT
	
	out_valid = True
	
end function
'---------------------------------------------
' Attach Hips
'---------------------------------------------
function AS_Attach_hips (in_rigModel, out_valid)

	out_valid = False	
	
	if IsComponent("BipedPropGuide.cog") = False then exit function
	if IsComponent("BipedPropGuide.RLeg") = False then exit function
	if IsComponent("BipedPropGuide.LLeg") = False then exit function
	
	setuserpref("SI3D_CONSTRAINT_COMPENSATION_MODE"), 0
	SelectObj in_rigModel & ".UpperBody", "BRANCH"
	MatchTransform , "BipedPropGuide.cog", siTrn
	
	'now match the top of the legs
	MatchTransform in_rigModel & ".LLegRoot", "BipedPropGuide.LLeg", siTrn
	MatchTransform in_rigModel & ".RLegRoot", "BipedPropGuide.RLeg", siTrn
		
	out_valid = True
	
end function
'---------------------------------------------
' Attach Upper Body
'---------------------------------------------
function AS_Attach_UpperBody(in_rigModel, out_valid)

	out_valid = False
	
	t_match "BipedPropGuide.RibCageEnd", in_rigModel & ".HeadRoot"		
	t_match "BipedPropGuide.LShoulderStart", in_rigModel & ".LRootShoulder"	
	t_match "BipedPropGuide.RShoulderStart", in_rigModel & ".RRootShoulder"	
	
	'match the bone lengths
	dim b1,b2,b3,b4,b5,b6,b7,b8
	b1 = GetValue("BipedPropGuide.bone35.bone.length")
	b2 = GetValue("BipedPropGuide.bone36.bone.length")
	b3 = GetValue("BipedPropGuide.bone32.bone.length")
	b4 = GetValue("BipedPropGuide.bone33.bone.length")
	b5 = GetValue("BipedPropGuide.bone34.bone.length")
	b6 = GetValue("BipedPropGuide.bone31.bone.length")
	b7 = GetValue("BipedPropGuide.bone30.bone.length")	
	b8 = GetValue("BipedPropGuide.bone29.bone.length")
	
	SetValue in_rigModel & ".Neck.bone.length", b1
	SetValue in_rigModel & ".Head.bone.length", b2
	SetValue in_rigModel & ".RShoulder.bone.length", b3
	SetValue in_rigModel & ".RBicep.bone.length", b4
	SetValue in_rigModel & ".RForearm.bone.length", b5
	SetValue in_rigModel & ".LShoulder.bone.length", b6
	SetValue in_rigModel & ".LBicep.bone.length", b7
	SetValue in_rigModel & ".LForearm.bone.length", b8
					
	out_valid = True
end function
'---------------------------------------------
' Attach Hands
'---------------------------------------------
function AS_Attach_Hands(in_rigModel, out_valid)

	out_valid = False

	'right hand
	
	'match the bone lengths
	dim b0, b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15
	
	b0 = GetValue("BipedPropGuide.bone62.bone.length")
	b1 = GetValue("BipedPropGuide.bone46.bone.length")
	b2 = GetValue("BipedPropGuide.bone47.bone.length")
	b3 = GetValue("BipedPropGuide.bone48.bone.length")
	b4 = GetValue("BipedPropGuide.bone49.bone.length")
	b5 = GetValue("BipedPropGuide.bone50.bone.length")
	b6 = GetValue("BipedPropGuide.bone51.bone.length")
	b7 = GetValue("BipedPropGuide.bone52.bone.length")	
	b8 = GetValue("BipedPropGuide.bone53.bone.length")
	b9 = GetValue("BipedPropGuide.bone54.bone.length")
	b10 = GetValue("BipedPropGuide.bone55.bone.length")
	b11 = GetValue("BipedPropGuide.bone56.bone.length")
	b12 = GetValue("BipedPropGuide.bone57.bone.length")
	b13 = GetValue("BipedPropGuide.bone58.bone.length")
	b14 = GetValue("BipedPropGuide.bone59.bone.length")
	b15 = GetValue("BipedPropGuide.bone60.bone.length")
	
	
	SetValue in_rigModel & ".RHand.bone.length", b0
	SetValue in_rigModel & ".RThumb1.bone.length", b1
	SetValue in_rigModel & ".RThumb2.bone.length", b2
	SetValue in_rigModel & ".RThumb3.bone.length", b3
	SetValue in_rigModel & ".RIndex1.bone.length", b4
	SetValue in_rigModel & ".RIndex2.bone.length", b5
	SetValue in_rigModel & ".RIndex3.bone.length", b6
	SetValue in_rigModel & ".RMiddle1.bone.length", b7
	SetValue in_rigModel & ".RMiddle2.bone.length", b8
	SetValue in_rigModel & ".RMiddle3.bone.length", b9
	SetValue in_rigModel & ".RRing1.bone.length", b10
	SetValue in_rigModel & ".RRing2.bone.length", b11
	SetValue in_rigModel & ".RRing3.bone.length", b12
	SetValue in_rigModel & ".RPinky1.bone.length", b13
	SetValue in_rigModel & ".RPinky2.bone.length", b14
	SetValue in_rigModel & ".RPinky3.bone.length", b15

	setuserpref("SI3D_CONSTRAINT_COMPENSATION_MODE"), 1		
	
	MatchTransform in_rigModel & ".RThumbRoot", "BipedPropGuide.RThumb1", siTrn
	MatchTransform in_rigModel & ".RIndexRoot", "BipedPropGuide.RIndex1", siTrn
	MatchTransform in_rigModel & ".RMiddleRoot", "BipedPropGuide.RMiddle1", siTrn
	MatchTransform in_rigModel & ".RRingRoot", "BipedPropGuide.RRing1", siTrn
	MatchTransform in_rigModel & ".RPinkyRoot", "BipedPropGuide.RPinky1", siTrn
	
	setuserpref("SI3D_CONSTRAINT_COMPENSATION_MODE"), 0	
	
	set oTrans = in_rigModel.FindChild("RThumbRoot").Kinematics.Global.Transform
	set oTrans = in_rigModel.FindChild("RIndexRoot").Kinematics.Global.Transform
	set oTrans = in_rigModel.FindChild("RMiddleRoot").Kinematics.Global.Transform
	set oTrans = in_rigModel.FindChild("RRingRoot").Kinematics.Global.Transform
	set oTrans = in_rigModel.FindChild("RPinkyRoot").Kinematics.Global.Transform


	'left hand

	'match the bone lengths
	
	b0 = GetValue("BipedPropGuide.bone63.bone.length")		
	b1 = GetValue("BipedPropGuide.bone.bone.length")
	b2 = GetValue("BipedPropGuide.bone15.bone.length")
	b3 = GetValue("BipedPropGuide.bone16.bone.length")
	b4 = GetValue("BipedPropGuide.bone19.bone.length")
	b5 = GetValue("BipedPropGuide.bone18.bone.length")
	b6 = GetValue("BipedPropGuide.bone17.bone.length")
	b7 = GetValue("BipedPropGuide.bone20.bone.length")	
	b8 = GetValue("BipedPropGuide.bone21.bone.length")
	b9 = GetValue("BipedPropGuide.bone22.bone.length")
	b10 = GetValue("BipedPropGuide.bone23.bone.length")
	b11 = GetValue("BipedPropGuide.bone24.bone.length")
	b12 = GetValue("BipedPropGuide.bone25.bone.length")
	b13 = GetValue("BipedPropGuide.bone26.bone.length")
	b14 = GetValue("BipedPropGuide.bone27.bone.length")
	b15 = GetValue("BipedPropGuide.bone28.bone.length")
	
	SetValue in_rigModel & ".LHand.bone.length", b0
	SetValue in_rigModel & ".LThumb1.bone.length", b1
	SetValue in_rigModel & ".LThumb2.bone.length", b2
	SetValue in_rigModel & ".LThumb3.bone.length", b3
	SetValue in_rigModel & ".LIndex1.bone.length", b4
	SetValue in_rigModel & ".LIndex2.bone.length", b5
	SetValue in_rigModel & ".LIndex3.bone.length", b6
	SetValue in_rigModel & ".LMiddle1.bone.length", b7
	SetValue in_rigModel & ".LMiddle2.bone.length", b8
	SetValue in_rigModel & ".LMiddle3.bone.length", b9
	SetValue in_rigModel & ".LRing1.bone.length", b10
	SetValue in_rigModel & ".LRing2.bone.length", b11
	SetValue in_rigModel & ".LRing3.bone.length", b12
	SetValue in_rigModel & ".LPinky1.bone.length", b13
	SetValue in_rigModel & ".LPinky2.bone.length", b14
	SetValue in_rigModel & ".LPinky3.bone.length", b15



	setuserpref("SI3D_CONSTRAINT_COMPENSATION_MODE"), 1	
	
	MatchTransform in_rigModel & ".LThumbRoot", "BipedPropGuide.LThumb1", siTrn
	MatchTransform in_rigModel & ".LIndexRoot", "BipedPropGuide.LIndex1", siTrn
	MatchTransform in_rigModel & ".LMiddleRoot", "BipedPropGuide.LMiddle1", siTrn
	MatchTransform in_rigModel & ".LRingRoot", "BipedPropGuide.LRing1", siTrn
	MatchTransform in_rigModel & ".LPinkyRoot", "BipedPropGuide.LPinky1", siTrn
	
	setuserpref("SI3D_CONSTRAINT_COMPENSATION_MODE"), 0	

	set oTrans = in_rigModel.FindChild("LThumbRoot").Kinematics.Global.Transform
	set oTrans = in_rigModel.FindChild("LIndexRoot").Kinematics.Global.Transform
	set oTrans = in_rigModel.FindChild("LMiddleRoot").Kinematics.Global.Transform
	set oTrans = in_rigModel.FindChild("LRingRoot").Kinematics.Global.Transform
	set oTrans = in_rigModel.FindChild("LPinkyRoot").Kinematics.Global.Transform

	out_valid = True
	
end function





'---------------------------------------------
' Attach Feet
'---------------------------------------------
function AS_attach_feet(in_rigModel, out_valid)

	out_valid = False
	
	if IsComponent("BipedPropGuide.LKnee") = False then exit function
	if IsComponent("BipedPropGuide.LFoot") = False then exit function
	if IsComponent("BipedPropGuide.LHeel") = False then exit function
	if IsComponent("BipedPropGuide.LToe") = False then exit function	
	if IsComponent("BipedPropGuide.RKnee") = False then exit function
	if IsComponent("BipedPropGuide.RFoot") = False then exit function	
	if IsComponent("BipedPropGuide.RHeel") = False then exit function
	if IsComponent("BipedPropGuide.RToe") = False then exit function
	
	if IsComponent("BipedPropGuide.bone42") = False then exit function
	if IsComponent("BipedPropGuide.bone43") = False then exit function
	if IsComponent("BipedPropGuide.bone44") = False then exit function
	if IsComponent("BipedPropGuide.bone45") = False then exit function	
	if IsComponent("BipedPropGuide.bone38") = False then exit function
	if IsComponent("BipedPropGuide.bone39") = False then exit function	
	if IsComponent("BipedPropGuide.bone40") = False then exit function
	if IsComponent("BipedPropGuide.bone61") = False then exit function

	'match the bone lengths
	dim b1,b2,b3,b4,b5,b6,b7,b8
	b1 = GetValue("BipedPropGuide.bone42.bone.length")
	b2 = GetValue("BipedPropGuide.bone43.bone.length")
	b3 = GetValue("BipedPropGuide.bone44.bone.length")
	b4 = GetValue("BipedPropGuide.bone45.bone.length")
	b5 = GetValue("BipedPropGuide.bone38.bone.length")
	b6 = GetValue("BipedPropGuide.bone39.bone.length")
	b7 = GetValue("BipedPropGuide.bone40.bone.length")	
	b8 = GetValue("BipedPropGuide.bone61.bone.length")
	
	SetValue in_rigModel & ".RThigh.bone.length", b1
	SetValue in_rigModel & ".RShin.bone.length", b2
	SetValue in_rigModel & ".RFoot.bone.length", b3
	SetValue in_rigModel & ".RToe.bone.length", b4
	SetValue in_rigModel & ".LThigh.bone.length", b5
	SetValue in_rigModel & ".LShin.bone.length", b6
	SetValue in_rigModel & ".LFoot.bone.length", b7
	SetValue in_rigModel & ".LToe.bone.length", b8
												
	
	SelectObj in_rigModel & ".LFootEff", "BRANCH"
	MatchTransform , "BipedPropGuide.LFoot", siTrn
	
	SelectObj in_rigModel & ".RFootEff", "BRANCH"
	MatchTransform , "BipedPropGuide.RFoot", siTrn		
										
	set c1 = SIApplyCns ("Position", in_rigModel & ".RToe", "BipedPropGuide.bone45")
	set c2 = SIApplyCns ("Position", in_rigModel & ".RToeEff", "BipedPropGuide.RToe")
	set c3 = SIApplyCns ("Position", in_rigModel & ".LToe", "BipedPropGuide.LHeel")
	set c4 = SIApplyCns ("Position", in_rigModel & ".LToeEff", "BipedPropGuide.LToe")						
	
	refresh	
							
	DeleteObj c1
	DeleteObj c2
	DeleteObj c3
	DeleteObj c4	
	
end function
'-----------------------------------
' Draw Spine
'----------------------------------- 
function AS_draw_spine(in_nbLumber, in_model, out_spine)
	
	dim vert(), size, i, mySkeleton, Children, body

	size = in_nbLumber
	redim vert(size)

	set root = ActiveProject.ActiveScene.Root
	set guide = root.findchild("BipedPropGuide")
	set SpineBase = guide.findchild("SpineBase")
	set CageEnd = guide.findchild("RibCageEnd")
	set spline = guide.findchild("SpineSpline")
	set body = in_model.findchild("UpperBody")
	
	set oTrans = spline.model.Kinematics.Local.Transform
	
	start = spline.ActivePrimitive.Geometry.Curves(0).EvaluatePositionFromPercentage(0)
 	for i = 0 to size
		curveData = spline.ActivePrimitive.Geometry.Curves(0).EvaluatePositionFromPercentage(((i)/(in_nbLumber)) * 100)
		set vert(i) = XSIMath.CreateVector3
		set vert(i) = XSIMath.MapObjectPositionToWorldSpace(oTrans, curveData(0))
 	next	
	
	plane = Array(1, 0, 0)
	
	set oChain = in_model.Add2DChain( vert(0) , vert(1) , plane, 2)
	
	'scale down the chain to match the scale of it's future model
	set modelscale = XSIMath.CreateVector3
	oTrans.GetScaling modelscale 
	Scale oChain, modelscale.x, modelscale.y, modelscale.z, siAbsolute, siGlobal, siObj, siXYZ
	
	if size > 1 then	
	 	for i = 2 to size 
			oChain.AddBone(vert(i))
	 	next
	end if

	set CE = XSIMath.CreateVector3 
	CageEnd.Kinematics.Global.Transform.GetTranslation CE
	oChain.AddBone(CE)
	
	'fix the parenting and naming
	set MySkeleton =  GetSkeleton(oChain, BoneIndex ) 	
	
	for i = 1 to mySkeleton.count - 3
		mySkeleton(i).name = "Lumber" & i
	next	
	
	MySkeleton(mySkeleton.count - 2).addchild MySkeleton(mySkeleton.count - 1)
	MySkeleton(mySkeleton.count -2).name = "Chest"
	MySkeleton(mySkeleton.count -1).name = "ChestEffector"
	MySkeleton(0).name = "SpineRoot"
	
	'fix the parenting for the spine

	body.addchild mySkeleton(0)
	
	dim head, leftarm, rightarm
	
	'make it a proper 3X style skeleton:
	
	SetValue MySkeleton(mySkeleton.count -1) & ".kine.local.cnsori", False
	SetValue MySkeleton(mySkeleton.count -1) & ".kine.local.cnspos", False
	
	set head= in_model.findchild("HeadRoot")
	set lshoulder = in_model.findchild("LRootShoulder")		
	set rshoulder = in_model.findchild("RRootShoulder")
	
	set oTrans = head.Kinematics.Global.Transform
	set oTrans = lshoulder.Kinematics.Global.Transform
	set oTrans = rshoulder.Kinematics.Global.Transform
			
	MySkeleton(mySkeleton.count -1).addChild head
	MySkeleton(mySkeleton.count -1).addChild lshoulder 
	MySkeleton(mySkeleton.count -1).addChild rshoulder

	'get a collection of the bones
	dim bones
	set bones = CreateObject("XSI.Collection")
	for i = 1 to (mySkeleton.count - 2)
		bones.add mySkeleton(i)
	next
	
	SelectObj bones
	SetMarking "kine.local.ori.euler.rotx"
	AddToMarking "kine.local.ori.euler.roty"
	AddToMarking "kine.local.ori.euler.rotz"
	CreateMarkingSet 
	
	for i = 0 to (mySkeleton.count -1)
		mySkeleton(i).AddProperty("Display Property")
		mySkeleton(i).properties("display").wirecol.value = 805	
	next

	for i = 1 to (mySkeleton.count -1)	
		AddToGroup in_model & ".envelope_Group", mySkeleton(i)
	next          
	
	set out_spine = mySkeleton
			
end function
'---------------------------------------------
' AS Rig DupSkel
'---------------------------------------------
function AS_rig_dupSkel(in_model, in_dupSkel, out_spine)

	dim head, lshoulder, rshoulder, MySkeleton, BoneIndex
	
	'fix the parenting and naming
	set MySkeleton =  GetSkeleton(in_dupSkel, BoneIndex ) 	
	
	in_model.findchild("UpperBody").AddChild in_dupSkel
	
	for i = 1 to mySkeleton.count - 3
		mySkeleton(i).name = "Lumber" & i
	next	

	MySkeleton(mySkeleton.count - 2).addchild MySkeleton(mySkeleton.count - 1)
	MySkeleton(mySkeleton.count -2).name = "Chest"
	MySkeleton(mySkeleton.count -1).name = "ChestEffector"
	MySkeleton(0).name = "SpineRoot"
	
	set head= in_model.findchild("HeadRoot")
	set lshoulder = in_model.findchild("LRootShoulder")		
	set rshoulder = in_model.findchild("RRootShoulder")
	
	set oTrans = head.Kinematics.Global.Transform
	set oTrans = lshoulder.Kinematics.Global.Transform
	set oTrans = rshoulder.Kinematics.Global.Transform	
	
	MySkeleton(mySkeleton.count -1).addChild head
	MySkeleton(mySkeleton.count -1).addChild lshoulder 
	MySkeleton(mySkeleton.count -1).addChild rshoulder
	
	'make it a proper 3X style skeleton:
	SetValue MySkeleton(mySkeleton.count -1) & ".kine.local.cnsori", False
	SetValue MySkeleton(mySkeleton.count -1) & ".kine.local.cnspos", False	
	
	for i = 0 to (mySkeleton.count -1)
		mySkeleton(i).AddProperty("Display Property")
		mySkeleton(i).properties("display").wirecol.value = 805	
	next
	
	for i = 1 to (mySkeleton.count -1)	
		AddToGroup in_model & ".envelope_Group", mySkeleton(i)
	next   
		
	set out_spine = mySkeleton
		
end function
'----------------------------------------------
' Glue Objects
'----------------------------------------------
function AS_GlueObjects(in_skel, in_rig, in_spine, in_headType, in_spineType)

	set constraints = CreateObject("XSI.Collection")
	set upVpoints = CreateObject("XSI.Collection")
	set Chains = CreateObject("XSI.Collection")
	
	PosCnst in_skel.FindChild("globalSRT"), in_rig.FindChild("globalSRT"), constraints	
	PosCnstwithCompensation in_skel.FindChild("UpperBody"), in_rig.FindChild("Hip"), constraints
	
	'spine
	dim i
	
	if in_spineType = 0 then
		dim spineCurve
		set spineCurve = in_rig.FindChild("spineCurve")
		for i = 2 to in_spine.count - 3
			'PosCnst in_spine(i), in_rig.FindChild("Lumber"& i-1), constraints
			AS_QuatSpinePos in_spine(i), spineCurve, (i - 1)/(in_spine.count - 3)* 100					
			
		next
		PosCnst in_skel.FindChild("Chest"), in_rig.FindChild("chestBone"), constraints
	else
		dim RigSpine, BoneIndex
		set RigSpine =  GetSkeleton(in_rig.FindChild("Chest"), BoneIndex ) 	
		
		for i = 1 to in_spine.count - 2
			PosCnst in_spine(i), RigSpine(i), constraints
		next
		PosCnst in_spine(in_spine.count-1), RigSpine(RigSpine.count-1), constraints		
	end if
	
	
	if in_headType = 1 then
		PosCnst in_skel.FindChild("ChestEffector"), in_rig.FindChild("HeadRoot"), constraints	
		PosCnst in_skel.FindChild("Head"), in_rig.FindChild("Head"), constraints	
		PosCnst in_skel.FindChild("NeckEff"), in_rig.FindChild("NeckEff"), constraints	
	else
		PosCnst in_skel.FindChild("ChestEffector"), in_rig.FindChild("Neck"), constraints
	end if

	'legs
	PosCnst in_skel.FindChild("LLegRoot"), in_rig.FindChild("LLegRoot"), constraints	
	PosCnst in_skel.FindChild("LShin"), in_rig.FindChild("LShin"), constraints
	PosCnst in_skel.FindChild("LFootEff"), in_rig.FindChild("LFoot"), constraints	
	PosCnst in_skel.FindChild("LToe"), in_rig.FindChild("LToe"), constraints	
	PosCnst in_skel.FindChild("LToeEff"), in_rig.FindChild("LToeEff"), constraints	
	
	PosCnst in_skel.FindChild("RLegRoot"), in_rig.FindChild("RLegRoot"), constraints	
	PosCnst in_skel.FindChild("RShin"), in_rig.FindChild("RShin"), constraints
	PosCnst in_skel.FindChild("RFootEff"), in_rig.FindChild("RFoot"), constraints	
	PosCnst in_skel.FindChild("RToe"), in_rig.FindChild("RToe"), constraints	
	PosCnst in_skel.FindChild("RToeEff"), in_rig.FindChild("RToeEff"), constraints	
	
	'arms

	PosCnst in_skel.FindChild("LRootShoulder"), in_rig.FindChild("LRootShoulder"), constraints	
	PosCnst in_skel.FindChild("LShoulderEff"), in_rig.FindChild("LShoulderEff"), constraints	
	PosCnst in_skel.FindChild("LForearm"), in_rig.FindChild("LForearm"), constraints	
	PosCnst in_skel.FindChild("LArmEff"), in_rig.FindChild("LArmEff"), constraints

	PosCnst in_skel.FindChild("RRootShoulder"), in_rig.FindChild("RRootShoulder"), constraints	
	PosCnst in_skel.FindChild("RShoulderEff"), in_rig.FindChild("RShoulderEff"), constraints		
	PosCnst in_skel.FindChild("RForearm"), in_rig.FindChild("RForearm"), constraints	
	PosCnst in_skel.FindChild("RArmEff"), in_rig.FindChild("RArmEff"), constraints
	

	'fingers	
	PosCnst in_skel.FindChild("RHandEffector"), in_rig.FindChild("RHandEffector"), constraints
	PosCnst in_skel.FindChild("LHandEffector"), in_rig.FindChild("LHandEffector"), constraints

	PosCnst in_skel.FindChild("LThumb2"), in_rig.FindChild("LThumb2"), constraints
	PosCnst in_skel.FindChild("LIndex2"), in_rig.FindChild("LIndex2"), constraints
	PosCnst in_skel.FindChild("LMiddle2"), in_rig.FindChild("LMiddle2"), constraints
	PosCnst in_skel.FindChild("LRing2"), in_rig.FindChild("LRing2"), constraints
	PosCnst in_skel.FindChild("LPinky2"), in_rig.FindChild("LPinky2"), constraints	

	PosCnst in_skel.FindChild("LThumb3"), in_rig.FindChild("LThumb3"), constraints
	PosCnst in_skel.FindChild("LIndex3"), in_rig.FindChild("LIndex3"), constraints
	PosCnst in_skel.FindChild("LMiddle3"), in_rig.FindChild("LMiddle3"), constraints
	PosCnst in_skel.FindChild("LRing3"), in_rig.FindChild("LRing3"), constraints
	PosCnst in_skel.FindChild("LPinky3"), in_rig.FindChild("LPinky3"), constraints	
	
	PosCnst in_skel.FindChild("LThumbEffector"), in_rig.FindChild("LThumbEffector"), constraints
	PosCnst in_skel.FindChild("LIndexEffector"), in_rig.FindChild("LIndexEffector"), constraints
	PosCnst in_skel.FindChild("LMiddleEffector"), in_rig.FindChild("LMiddleEffector"), constraints
	PosCnst in_skel.FindChild("LRingEffector"), in_rig.FindChild("LRingEffector"), constraints
	PosCnst  in_skel.FindChild("LPinkyEffector"), in_rig.FindChild("LPinkyEffector"), constraints	
	
	
	PosCnst in_skel.FindChild("RThumb2"), in_rig.FindChild("RThumb2"), constraints
	PosCnst in_skel.FindChild("RIndex2"), in_rig.FindChild("RIndex2"), constraints
	PosCnst in_skel.FindChild("RMiddle2"), in_rig.FindChild("RMiddle2"), constraints
	PosCnst in_skel.FindChild("RRing2"), in_rig.FindChild("RRing2"), constraints
	PosCnst in_skel.FindChild("RPinky2"), in_rig.FindChild("RPinky2"), constraints	

	PosCnst in_skel.FindChild("RThumb3"), in_rig.FindChild("RThumb3"), constraints
	PosCnst in_skel.FindChild("RIndex3"), in_rig.FindChild("RIndex3"), constraints
	PosCnst in_skel.FindChild("RMiddle3"), in_rig.FindChild("RMiddle3"), constraints
	PosCnst in_skel.FindChild("RRing3"), in_rig.FindChild("RRing3"), constraints
	PosCnst in_skel.FindChild("RPinky3"), in_rig.FindChild("RPinky3"), constraints	
	
	PosCnst in_skel.FindChild("RThumbEffector"), in_rig.FindChild("RThumbEffector"), constraints
	PosCnst in_skel.FindChild("RIndexEffector"), in_rig.FindChild("RIndexEffector"), constraints
	PosCnst in_skel.FindChild("RMiddleEffector"), in_rig.FindChild("RMiddleEffector"), constraints
	PosCnst in_skel.FindChild("RRingEffector"), in_rig.FindChild("RRingEffector"), constraints
	PosCnst in_skel.FindChild("RPinkyEffector"), in_rig.FindChild("RPinkyEffector"), constraints	
	
	

end function
'----------------------------------------------
' Attach Up Vectors
'----------------------------------------------
function AS_Attach_UpVectors(in_skel, in_rig, in_spine, in_headType, in_spineType)

	set upVpoints = CreateObject("XSI.Collection")
	set Chains = CreateObject("XSI.Collection")


	if in_spineType = 0 then
		for i = 1 to in_spine.count - 3                                   
			UpV in_spine(i), in_rig.FindChild("Lumber"& i), upVpoints, Chains
		next
		UpV in_skel.FindChild("Chest"), in_rig.FindChild("chestBone"), upVpoints, Chains	
	else
		dim RigSpine, BoneIndex
		set RigSpine =  GetSkeleton(in_rig.FindChild("Chest"), BoneIndex ) 	
		
		for i = 1 to in_spine.count - 2
			UpV in_spine(i), RigSpine(i), upVpoints, Chains
		next
		UpV in_spine(in_spine.count-1), RigSpine(RigSpine.count-1), upVpoints, Chains		
	end if
	
	
	if in_headType = 1 then
		UpV in_skel.FindChild("Neck"), in_rig.FindChild("Neck"), upVpoints, Chains	
		UpV in_skel.FindChild("Head"), in_rig.FindChild("Head"), upVpoints, Chains
	else
		AS_Poseattach in_skel.FindChild("Head"), in_rig.FindChild("headBind")
		AS_spineattach in_skel.FindChild("Neck"), in_rig.FindChild("neckSegment1")
	end if


	'legs
	
	UpV in_skel.FindChild("LThigh"), in_rig.FindChild("LThigh"), upVpoints, Chains
	UpV in_skel.FindChild("LShin"), in_rig.FindChild("LShin"), upVpoints, Chains	
	UpV in_skel.FindChild("LFoot"), in_rig.FindChild("LFoot"), upVpoints, Chains	
	UpV in_skel.FindChild("LToe"), in_rig.FindChild("LToe"), upVpoints, Chains	
		

	UpV in_skel.FindChild("RThigh"), in_rig.FindChild("RThigh"), upVpoints, Chains	
	UpV in_skel.FindChild("RShin"), in_rig.FindChild("RShin"), upVpoints, Chains
	UpV in_skel.FindChild("RFoot"), in_rig.FindChild("RFoot"), upVpoints, Chains	
	UpV in_skel.FindChild("RToe"), in_rig.FindChild("RToe"), upVpoints, Chains	

	
	'arms
	
	UpV in_skel.FindChild("LShoulder"), in_rig.FindChild("LShoulder"), upVpoints, Chains
	UpV in_skel.FindChild("LBicep"), in_rig.FindChild("LBicep"), upVpoints, Chains	
	UpV in_skel.FindChild("LForearm"), in_rig.FindChild("LForearm"), upVpoints, Chains	
		

	UpV in_skel.FindChild("RShoulder"), in_rig.FindChild("RShoulder"), upVpoints, Chains
	UpV in_skel.FindChild("RBicep"), in_rig.FindChild("RBicep"), upVpoints, Chains	
	UpV in_skel.FindChild("RForearm"), in_rig.FindChild("RForearm"), upVpoints, Chains		
	

	'hands
	
	UpV in_skel.FindChild("LHand"), in_rig.FindChild("LHand"), upVpoints, Chains
	UpV in_skel.FindChild("RHand"), in_rig.FindChild("RHand"), upVpoints, Chains


	'left hand

	UpV in_skel.FindChild("LThumb1"), in_rig.FindChild("LThumb1"), upVpoints, Chains
	UpV in_skel.FindChild("LIndex1"), in_rig.FindChild("LIndex1"), upVpoints, Chains
	UpV in_skel.FindChild("LMiddle1"), in_rig.FindChild("LMiddle1"), upVpoints, Chains
	UpV in_skel.FindChild("LRing1"), in_rig.FindChild("LRing1"), upVpoints, Chains
	UpV in_skel.FindChild("LPinky1"), in_rig.FindChild("LPinky1")	, upVpoints, Chains
		
	UpV in_skel.FindChild("LThumb2"), in_rig.FindChild("LThumb2"), upVpoints, Chains
	UpV in_skel.FindChild("LIndex2"), in_rig.FindChild("LIndex2"), upVpoints, Chains
	UpV in_skel.FindChild("LMiddle2"), in_rig.FindChild("LMiddle2"), upVpoints, Chains
	UpV in_skel.FindChild("LRing2"), in_rig.FindChild("LRing2"), upVpoints, Chains
	UpV in_skel.FindChild("LPinky2"), in_rig.FindChild("LPinky2")	, upVpoints, Chains

	UpV in_skel.FindChild("LThumb3"), in_rig.FindChild("LThumb3"), upVpoints, Chains
	UpV in_skel.FindChild("LIndex3"), in_rig.FindChild("LIndex3"), upVpoints, Chains
	UpV in_skel.FindChild("LMiddle3"), in_rig.FindChild("LMiddle3"), upVpoints, Chains
	UpV in_skel.FindChild("LRing3"), in_rig.FindChild("LRing3"), upVpoints, Chains
	UpV in_skel.FindChild("LPinky3"), in_rig.FindChild("LPinky3")	, upVpoints, Chains	


	'right hand
	
	UpV in_skel.FindChild("RThumb1"), in_rig.FindChild("RThumb1"), upVpoints, Chains
	UpV in_skel.FindChild("RIndex1"), in_rig.FindChild("RIndex1"), upVpoints, Chains
	UpV in_skel.FindChild("RMiddle1"), in_rig.FindChild("RMiddle1"), upVpoints, Chains
	UpV in_skel.FindChild("RRing1"), in_rig.FindChild("RRing1"), upVpoints, Chains
	UpV in_skel.FindChild("RPinky1"), in_rig.FindChild("RPinky1")	, upVpoints, Chains
		
	UpV in_skel.FindChild("RThumb2"), in_rig.FindChild("RThumb2"), upVpoints, Chains
	UpV in_skel.FindChild("RIndex2"), in_rig.FindChild("RIndex2"), upVpoints, Chains
	UpV in_skel.FindChild("RMiddle2"), in_rig.FindChild("RMiddle2"), upVpoints, Chains
	UpV in_skel.FindChild("RRing2"), in_rig.FindChild("RRing2"), upVpoints, Chains
	UpV in_skel.FindChild("RPinky2"), in_rig.FindChild("RPinky2")	, upVpoints, Chains

	UpV in_skel.FindChild("RThumb3"), in_rig.FindChild("RThumb3"), upVpoints, Chains
	UpV in_skel.FindChild("RIndex3"), in_rig.FindChild("RIndex3"), upVpoints, Chains
	UpV in_skel.FindChild("RMiddle3"), in_rig.FindChild("RMiddle3"), upVpoints, Chains
	UpV in_skel.FindChild("RRing3"), in_rig.FindChild("RRing3"), upVpoints, Chains
	UpV in_skel.FindChild("RPinky3"), in_rig.FindChild("RPinky3")	, upVpoints, Chains

	ApplyUpVectors upVpoints, Chains

end function
'---------------------------------------------
' Pos Cnst
'---------------------------------------------
function PosCnst(in_constrained, in_constraining, in_constrainList)
	
	set Cnst = in_constrained.Kinematics.AddConstraint("Position", in_constraining, False)

end function
'---------------------------------------------
' Pos Cnst with Compensation
'---------------------------------------------
function PosCnstwithCompensation (in_constrained, in_constraining, in_constrainList)
	
	set Cnst = in_constrained.Kinematics.AddConstraint("Pose", in_constraining, True)

end function
'---------------------------------------------
' Attach
'---------------------------------------------
function UpV(in_constrained, in_constraining, inUpVpoints, inChains)	
	
	if in_constrained.type = "bone" then
	
		dim snull
		set snull = in_constraining.AddPrimitive("Null", "Shadow_upVa")
		
		'get the orientation of the bone
		'set boneOri = in_constraining.Kinematics.Global.Transform
		set boneOri = in_constrained.Kinematics.Global.Transform


		set upOffset = XSIMath.CreateVector3
		
		HackInversionTest = GetValue(in_constrained.Parent & ".kine.global.sclx")
		
		if HackInversionTest > 0 then
			upOffset.set 0,1,0
		else
			upOffset.set 0,-1,0
		end if
		
		boneOri.AddLocalTranslation upOffset
		
		set upPos = XSIMath.CreateVector3
		boneOri.GetTranslation upPos
				
		Translate snull , upPos.x, upPos.y, upPos.z, siAbsolute, siGlobal, siObj, siXYZ	


		snull.properties("visibility").viewvis.value = False
	
		inUpVpoints.add snull
		inChains.add in_constrained
	
	end if

end function
'---------------------------------------------
' Pose Attach
'---------------------------------------------
function AS_Poseattach(in_constrained, in_constraining)
		
	set Cnst = in_constrained.Kinematics.AddConstraint("Pose", in_constraining, False)

end function
'---------------------------------------------
' Spine Attach
'---------------------------------------------
function AS_spineattach(in_constrained, in_constraining)
		
	set Cnst = in_constrained.Kinematics.AddConstraint("Position", in_constraining, False)

	dim snull
	set snull = in_constraining.AddPrimitive("Null", "Shadow_upVa")
	Translate snull , 0, -0.4, 0, siAbsolute, siLocal, siObj, siXYZ

	ApplyOp "SkeletonUpVector", in_constrained&";"& snull, 3, siPersistentOperation
	snull.properties("visibility").viewvis.value = False
	
end function
'---------------------------------------------
' Quat Spine Attach
'---------------------------------------------
function AS_QuatSpinePos(in_constrained, in_constraining, inPerc)
		
'	logmessage "IN CONSTRAINED: " & in_constrained
'	logmessage "IN CONSTRAINING: " & in_constraining
'	logmessage "INPERC: " & inPerc
	
		
	
	set Cnst = in_constrained.Kinematics.AddConstraint("Path", in_constraining, False)
	Cnst.perc = inPerc

end function
'--------------------------------------------- 
' Apply Up Vectors
'--------------------------------------------- 
function ApplyUpVectors(inUpVpoints, inChains)
	
	for i = 0 to inUpVpoints.count - 1
		ApplyOp "SkeletonUpVector", inChains(i) &";"& inUpVpoints(i), 3, siPersistentOperation	
	next
end function
'--------------------------------------------- 


'****************************************************
'****************************************************
'****************************************************
'****************************************************
'****************************************************

' ATTACH BOXES

'****************************************************
'****************************************************
'****************************************************
'****************************************************
'****************************************************

'-----------------------------------
' Attach Boxes
'----------------------------------- 
function attach_boxes (in_rig, in_nbLumber, in_hands, in_headType, in_spineType)
	dim constraints, mpath

	set myModel = GetPresetModel("Biped_Box","Biped_Box")
	
	AB_model_and_GlobalSRT_match myModel, valid
	if valid = False then exit function
	
	AB_early_attachment myModel, in_rig, constraints
	if in_spineType = 0 then
		AB_draw_spine in_nbLumber, myModel, in_rig, spineBoxes
	else
		AB_draw_SkeletonSpine in_nbLumber, myModel, in_rig, spineBoxes
	end if
	
	
	AB_attach myModel, in_rig, in_spine, spineBoxes, in_headType, in_spineType, constraints
	
	AB_delete_clusters myModel
	
	AB_Process_hands myModel, in_hands
	
	make_ShadowDefault myModel 
	
	applySynoptic2 myModel, 1
	
end function
'---------------------------------------------
' Model and Global SRT Match
'---------------------------------------------
function AB_model_and_GlobalSRT_match(in_rigModel, out_valid)

	out_valid = False

	if IsComponent("BipedPropGuide.globalSRT") = False then exit function

	dim oRoot, PModel, PgSRT, RiggSRT

	set oRoot = Application.ActiveSceneRoot
	
	set PModel = oRoot.FindChild("BipedPropGuide")
	set PgSRT= oRoot.FindChild("BipedPropGuide.GlobalSRT")
	set RiggSRT = oRoot.FindChild(in_rigModel & ".globalSRT")
	
	'match up the models
	rt_match PModel, in_rigModel
	
	'match up the globalSRT's
	rt_match PgSRT, RiggSRT
	
	out_valid = True
	
end function
'---------------------------------------------
' Attach
'---------------------------------------------
function AB_early_attachment (in_boxes, in_rig, out_constraints)

	' AS_Poseattach in_constrained, in_constraining, in_constrainList)

	set constraints = CreateObject("XSI.Collection")
	
	AB_Poseattach in_boxes.FindChild("UpperBody"), in_rig.FindChild("Hip"), False, constraints
	
	set out_constraints = constraints
end function
'---------------------------------------------
' Attach
'---------------------------------------------
function AB_attach(in_boxes, in_rig, in_spine, in_spineBoxes, in_headType, in_spineType, out_constraints)

	' AB_Poseattach in_constrained, in_constraining, in_constrainList)

	set constraints = CreateObject("XSI.Collection")
	
	PosCnst in_boxes.FindChild("globalSRT"), in_rig.FindChild("globalSRT"), constraints		
	AB_Poseattach in_boxes.FindChild("UpperBody"), in_rig.FindChild("Hip"), False, constraints
	
	'spine boxes
	dim i
	if in_spineType = 0 then
		for i = 0 to in_spineBoxes.count - 1
			AB_Poseattach in_spineBoxes(i), in_rig.FindChild("Lumber"&i+1), False, constraints
		next
		chestConstrain in_boxes.FindChild("Chest"), in_rig.FindChild("chestBone")
	else
		for i = 0 to in_spineBoxes.count - 1
			AB_Poseattach in_spineBoxes(i), in_rig.FindChild("Lumber"&i+1), False, constraints
		next
		refresh
		AB_Poseattach in_boxes.FindChild("Chest"), in_rig.FindChild("Chest"), False, constraints
	end if
	
	
	if in_headType = 1 then
		AB_Poseattach in_boxes.FindChild("Neck"), in_rig.FindChild("Neck"), False, constraints
		AB_Poseattach in_boxes.FindChild("Head"), in_rig.FindChild("Head"), False, constraints
	else
 	 	

 	 	AB_rt_match in_rig.FindChild("BoneNeck"), in_boxes.FindChild("Neck")
 	 	AB_rt_match in_rig.FindChild("BoneHead"), in_boxes.FindChild("Head")

	 	AB_Poseattach in_boxes.FindChild("Neck"), in_rig.FindChild("neckSegment1"), True, constraints
		AB_Poseattach in_boxes.FindChild("Head"), in_rig.FindChild("headBind"), True, constraints
		
	 	SetUserPref "SI3D_CONSTRAINT_COMPENSATION_MODE", 0
	 	SIApplyCns "Direction", in_boxes.FindChild("Neck"), in_rig.FindChild("headBind")
	 	
	end if

	AB_Poseattach in_boxes.FindChild("LThigh"), in_rig.FindChild("LThigh"), False, constraints
	AB_Poseattach in_boxes.FindChild("LShin"), in_rig.FindChild("LShin"), False, constraints
	AB_Poseattach in_boxes.FindChild("LFoot"), in_rig.FindChild("LFoot"), False, constraints
	AB_Poseattach in_boxes.FindChild("LToe"), in_rig.FindChild("LToe"), False, constraints
 
	AB_Poseattach in_boxes.FindChild("RThigh"), in_rig.FindChild("RThigh"), False, constraints
	AB_Poseattach in_boxes.FindChild("RShin"), in_rig.FindChild("RShin"), False, constraints
	AB_Poseattach in_boxes.FindChild("RFoot"), in_rig.FindChild("RFoot"), False, constraints
	AB_Poseattach in_boxes.FindChild("RToe"), in_rig.FindChild("RToe"), False, constraints

	AB_Poseattach in_boxes.FindChild("RBicep"), in_rig.FindChild("RBicep"), False, constraints
	AB_Poseattach in_boxes.FindChild("LBicep"), in_rig.FindChild("LBicep"), False, constraints

	AB_Poseattach in_boxes.FindChild("LShoulder"), in_rig.FindChild("LShoulder"), False, constraints
	AB_Poseattach in_boxes.FindChild("LForearm"), in_rig.FindChild("LForearm"), False, constraints
	AB_Poseattach in_boxes.FindChild("LHand_nf"), in_rig.FindChild("LHand"), False, constraints
	AB_Poseattach in_boxes.FindChild("LHand"), in_rig.FindChild("LHand"), False, constraints

	AB_Poseattach in_boxes.FindChild("RShoulder"), in_rig.FindChild("RShoulder"), False, constraints
	AB_Poseattach in_boxes.FindChild("RForearm"), in_rig.FindChild("RForearm"), False, constraints
	AB_Poseattach in_boxes.FindChild("RHand_nf"), in_rig.FindChild("RHand"), False, constraints
	AB_Poseattach in_boxes.FindChild("RHand"), in_rig.FindChild("RHand"), False, constraints

	'hands

	AB_Poseattach in_boxes.FindChild("LThumb1"), in_rig.FindChild("LThumb1"), False, constraints
	AB_Poseattach in_boxes.FindChild("LIndex1"), in_rig.FindChild("LIndex1"), False, constraints
	AB_Poseattach in_boxes.FindChild("LMiddle1"), in_rig.FindChild("LMiddle1"), False, constraints
	AB_Poseattach in_boxes.FindChild("LRing1"), in_rig.FindChild("LRing1"), False, constraints
	AB_Poseattach in_boxes.FindChild("LPinky1"), in_rig.FindChild("LPinky1"), False, constraints

	AB_Poseattach in_boxes.FindChild("LThumb2"), in_rig.FindChild("LThumb2"), False, constraints
	AB_Poseattach in_boxes.FindChild("LIndex2"), in_rig.FindChild("LIndex2"), False, constraints
	AB_Poseattach in_boxes.FindChild("LMiddle2"), in_rig.FindChild("LMiddle2"), False, constraints
	AB_Poseattach in_boxes.FindChild("LRing2"), in_rig.FindChild("LRing2"), False, constraints
	AB_Poseattach in_boxes.FindChild("LPinky2"), in_rig.FindChild("LPinky2"), False, constraints

	AB_Poseattach in_boxes.FindChild("LThumb3"), in_rig.FindChild("LThumb3"), False, constraints
	AB_Poseattach in_boxes.FindChild("LIndex3"), in_rig.FindChild("LIndex3"), False, constraints
	AB_Poseattach in_boxes.FindChild("LMiddle3"), in_rig.FindChild("LMiddle3"), False, constraints
	AB_Poseattach in_boxes.FindChild("LRing3"), in_rig.FindChild("LRing3"), False, constraints
	AB_Poseattach in_boxes.FindChild("LPinky3"), in_rig.FindChild("LPinky3"), False, constraints

	AB_Poseattach in_boxes.FindChild("RThumb1"), in_rig.FindChild("RThumb1"), False, constraints
	AB_Poseattach in_boxes.FindChild("RIndex1"), in_rig.FindChild("RIndex1"), False, constraints
	AB_Poseattach in_boxes.FindChild("RMiddle1"), in_rig.FindChild("RMiddle1"), False, constraints
	AB_Poseattach in_boxes.FindChild("RRing1"), in_rig.FindChild("RRing1"), False, constraints
	AB_Poseattach in_boxes.FindChild("RPinky1"), in_rig.FindChild("RPinky1"), False, constraints

	AB_Poseattach in_boxes.FindChild("RThumb2"), in_rig.FindChild("RThumb2"), False, constraints
	AB_Poseattach in_boxes.FindChild("RIndex2"), in_rig.FindChild("RIndex2"), False, constraints
	AB_Poseattach in_boxes.FindChild("RMiddle2"), in_rig.FindChild("RMiddle2"), False, constraints
	AB_Poseattach in_boxes.FindChild("RRing2"), in_rig.FindChild("RRing2"), False, constraints
	AB_Poseattach in_boxes.FindChild("RPinky2"), in_rig.FindChild("RPinky2"), False, constraints

	AB_Poseattach in_boxes.FindChild("RThumb3"), in_rig.FindChild("RThumb3"), False, constraints
	AB_Poseattach in_boxes.FindChild("RIndex3"), in_rig.FindChild("RIndex3"), False, constraints
	AB_Poseattach in_boxes.FindChild("RMiddle3"), in_rig.FindChild("RMiddle3"), False, constraints
	AB_Poseattach in_boxes.FindChild("RRing3"), in_rig.FindChild("RRing3"), False, constraints
	AB_Poseattach in_boxes.FindChild("RPinky3"), in_rig.FindChild("RPinky3"), False, constraints



	' now match up the clusters

	t_match "BipedPropGuide.RLeg", in_boxes& ".cc_UpperBody"
	t_match "BipedPropGuide.LLeg", in_boxes & ".cc_UpperBody1"
	t_match "BipedPropGuide.SpineBase", in_boxes & ".cc_UpperBody2"		
	
	t_match "BipedPropGuide.RibCageStart", in_boxes & ".cc_Chest"	
	t_match "BipedPropGuide.LShoulderStart", in_boxes & ".cc_Chest1"	
	t_match "BipedPropGuide.RShoulderStart", in_boxes & ".cc_Chest2"
	
	t_match "BipedPropGuide.Neck", in_boxes & ".cc_Neck"

	
	t_match "BipedPropGuide.LKnee", in_boxes & ".cc_LThigh"
	t_match "BipedPropGuide.LFoot", in_boxes & ".cc_LShin"
	t_match "BipedPropGuide.LHeel", in_boxes & ".cc_LFoot"	
	t_match "BipedPropGuide.LToe", in_boxes & ".cc_LToe"	
	
	
	t_match "BipedPropGuide.RKnee", in_boxes & ".cc_RThigh"
	t_match "BipedPropGuide.RFoot", in_boxes & ".cc_RShin"
	t_match "BipedPropGuide.RHeel", in_boxes & ".cc_RFoot"	
	t_match "BipedPropGuide.RToe", in_boxes & ".cc_RToe"	


	t_match "BipedPropGuide.LShoulder", in_boxes & ".cc_LShoulder"
	t_match "BipedPropGuide.LElbow", in_boxes & ".cc_LBicep"	
	t_match "BipedPropGuide.LHand", in_boxes & ".cc_LForearm"				
	t_match "BipedPropGuide.LHandEnd", in_boxes & ".cc_LHand"	
	t_match "BipedPropGuide.LIndex1", in_boxes & ".cc_LHand1"	
	t_match "BipedPropGuide.LPinky1", in_boxes & ".cc_LHand2"	
						
	t_match "BipedPropGuide.RShoulder", in_boxes & ".cc_RShoulder"
	t_match "BipedPropGuide.RElbow", in_boxes & ".cc_RBicep"	
	t_match "BipedPropGuide.RHand", in_boxes & ".cc_RForearm"				
	t_match "BipedPropGuide.RHandEnd", in_boxes & ".cc_RHand"	
	t_match "BipedPropGuide.RIndex1", in_boxes & ".cc_RHand1"	
	t_match "BipedPropGuide.RPinky1", in_boxes & ".cc_RHand2"	
					
	t_match "BipedPropGuide.LPinky2", in_boxes & ".cc_LPinky1"	
	t_match "BipedPropGuide.LRing2", in_boxes & ".cc_LRing1"
	t_match "BipedPropGuide.LMiddle2", in_boxes & ".cc_LMiddle1"	
	t_match "BipedPropGuide.LIndex2", in_boxes & ".cc_LIndex1"	
	t_match "BipedPropGuide.LThumb2", in_boxes & ".cc_LThumb1"	

	t_match "BipedPropGuide.LPinky3", in_boxes & ".cc_LPinky2"	
	t_match "BipedPropGuide.LRing3", in_boxes & ".cc_LRing2"	
	t_match "BipedPropGuide.LMiddle3", in_boxes & ".cc_LMiddle2"	
	t_match "BipedPropGuide.LIndex3", in_boxes & ".cc_LIndex2"	
	t_match "BipedPropGuide.LThumb3", in_boxes & ".cc_LThumb2"
	
	t_match "BipedPropGuide.LPinky4", in_boxes & ".cc_LPinky3"	
	t_match "BipedPropGuide.LRing4", in_boxes & ".cc_LRing3"	
	t_match "BipedPropGuide.LMiddle4", in_boxes & ".cc_LMiddle3"	
	t_match "BipedPropGuide.LIndex4", in_boxes & ".cc_LIndex3"	
	t_match "BipedPropGuide.LThumb4", in_boxes & ".cc_LThumb3"
	
	
	
	
	t_match "BipedPropGuide.RPinky2", in_boxes & ".cc_RPinky1"	
	t_match "BipedPropGuide.RRing2", in_boxes & ".cc_RRing1"
	t_match "BipedPropGuide.RMiddle2", in_boxes & ".cc_RMiddle1"	
	t_match "BipedPropGuide.RIndex2", in_boxes & ".cc_RIndex1"	
	t_match "BipedPropGuide.RThumb2", in_boxes & ".cc_RThumb1"	

	t_match "BipedPropGuide.RPinky3", in_boxes & ".cc_RPinky2"	
	t_match "BipedPropGuide.RRing3", in_boxes & ".cc_RRing2"	
	t_match "BipedPropGuide.RMiddle3", in_boxes & ".cc_RMiddle2"	
	t_match "BipedPropGuide.RIndex3", in_boxes & ".cc_RIndex2"	
	t_match "BipedPropGuide.RThumb3", in_boxes & ".cc_RThumb2"
	
	t_match "BipedPropGuide.RPinky4", in_boxes & ".cc_RPinky3"	
	t_match "BipedPropGuide.RRing4", in_boxes & ".cc_RRing3"	
	t_match "BipedPropGuide.RMiddle4", in_boxes & ".cc_RMiddle3"	
	t_match "BipedPropGuide.RIndex4", in_boxes & ".cc_RIndex3"	
	t_match "BipedPropGuide.RThumb4", in_boxes & ".cc_RThumb3"
	

end function
'---------------------------------------------
' Pose Attach
'---------------------------------------------
function AB_Poseattach(in_constrained, in_constraining, in_comp, in_constrainList)

	dim sx, sy, sz, mycnst, target, button			

	sx = GetValue(in_constrained & ".kine.global.sclx")
	sy = GetValue(in_constrained & ".kine.global.scly")
	sz = GetValue(in_constrained & ".kine.global.sclz")
	set Cnst = in_constrained.Kinematics.AddConstraint("Pose", in_constraining, in_comp)
	
	Cnst.cnsscl.value = False

	SetValue in_constrained & ".kine.global.sclx", sx
	SetValue in_constrained & ".kine.global.scly", sy
	SetValue in_constrained & ".kine.global.sclz", sz
	
	in_constrainList.add Cnst
	
end function
'---------------------------------------------
' Pose Attach
'---------------------------------------------
function AB_Bicepattach(in_constrained, in_constraining, in_yrot, in_constrainList)

	dim sx, sy, sz, mycnst, target, button

	sx = GetValue(in_constrained & ".kine.global.sclx")
	sy = GetValue(in_constrained & ".kine.global.scly")
	sz = GetValue(in_constrained & ".kine.global.sclz")
	set Cnst = in_constrained.Kinematics.AddConstraint("Pose", in_constraining, False)
	
	Cnst.roty.value = in_yrot
	Cnst.cnsscl.value = False

	SetValue in_constrained & ".kine.global.sclx", sx
	SetValue in_constrained & ".kine.global.scly", sy
	SetValue in_constrained & ".kine.global.sclz", sz
	
	in_constrainList.add Cnst

end function
'-----------------------------------
'--------------------------------------------------------------------------------
' ATTACH BOX - Draw Spine
'
' AB_draw_spine is used when 
'		1) BOX HIERARCHY shadow rig is attached
'	AND 2) WHEN Quaternion type spine is selected 
'
' when a Skeleton type spine is selected AB_draw_SkeletonSpine() is used.
'
'--------------------------------------------------------------------------------
function AB_draw_spine(in_nbLumber, in_model, in_rig, out_spineBoxes)
	
	dim vert(), size, i, mySkeleton, Children, body

	set root = ActiveProject.ActiveScene.Root
	set guide = root.findchild("BipedPropGuide")
	set SpineBase = guide.findchild("SpineBase")
	set CageStart = guide.findchild("RibCageStart")	
	set CageEnd = guide.findchild("RibCageEnd")
	set spline = guide.findchild("SpineSpline")
	set body = in_model.findchild("UpperBody")
	
	set oTrans = spline.model.Kinematics.Local.Transform
	
	start = spline.ActivePrimitive.Geometry.Curves(0).EvaluatePositionFromPercentage(0)


	plane = Array(1, 0, 0)
	set startChain = XSIMath.CreateVector3
	set firstbone = XSIMath.CreateVector3
	set startChain = XSIMath.MapObjectPositionToWorldSpace(oTrans, start(0))
	
	set CS = XSIMath.CreateVector3
	set CE = XSIMath.CreateVector3 
	
	CageStart.Kinematics.Global.Transform.GetTranslation CS 
	CageEnd.Kinematics.Global.Transform.GetTranslation CE
		
	size = in_nbLumber

			
	'now draw the curves for the boxes
	
	dim tracer, PathCnst, tracers, spineBoxes, dup, tempNURBS, meshReturn, sMesh, loftop, l_oShader 
	dim boxChest 
	
	set tracer = in_model.findchild("tracer")	
	set PathCnst = tracer.Kinematics.AddConstraint("Path", spline, False)
	
	set tracers = CreateObject("XSI.Collection")
	set spineBoxes = CreateObject("XSI.Collection")
	
	tracers.add tracer
	
	for i = 1 to in_nbLumber
		PathCnst.perc = (i)/(in_nbLumber) * 100 
		set dup = Duplicate(tracer , , 2, 1, 1, 0, 0, 1, 0, 1)
		tracers.add dup
	next
	PathCnst.perc = 0
	
	'match up the chest
	
	set CS = XSIMath.CreateVector3
	set CE = XSIMath.CreateVector3 

	CageStart.Kinematics.Global.Transform.GetTranslation CS 
	CageEnd.Kinematics.Global.Transform.GetTranslation CE 
	
	set oChain = in_model.Add2DChain( CS , CE , plane, 2)

	set MySkeleton =  GetSkeleton(oChain, BoneIndex ) 	
	
	MatchTransform in_model.FindChild("Chest"), MySkeleton(mySkeleton.count - 2), siRT
	
	'create boxes
	for i = 1 to in_nbLumber 
		set loftop = ApplyOp ("Loft", tracers(i-1)&","&tracers(i), 3, siPersistentOperation)
		set tempNURBS = loftop(0).Owners(0).parent
		set meshReturn = ApplyOp("NurbsToMesh", tempNURBS, 3, siPersistentOperation)
		set sMesh = meshReturn(0).Owners(0).parent
		FreezeObj sMesh 
		sMesh.AddProperty("Display Property")
		sMesh.properties("display").wirecol.value = 479
		ApplyShader "$XSI_DSPRESETS\\Shaders\\Material\\Phong.Preset", sMesh
		set l_oShader = sMesh.Material.Shaders(0)

		l_oShader.Diffuse.red	= 0.741
		l_oShader.Diffuse.green = 0.653
		l_oShader.Diffuse.blue	= 0.603
		l_oShader.Ambient.red	= 0.845
		l_oShader.Ambient.green = 0.496
		l_oShader.Ambient.blue	= 0.3
		
		spineBoxes.add sMesh 
		DeleteObj tempNURBS

	next
	
	DeleteObj tracers.GetAsText
	
	'copy centers
	for i = 0 to in_nbLumber - 1
		spineBoxes(i).name = "Lumber" & i + 1
		AB_copyCenter in_rig.FindChild("Lumber" & i + 1), spineBoxes(i)		
		AddToGroup in_model & ".envelope_Group", spineBoxes(i)
	next	 
	


	'parenting
	body.addchild spineBoxes(0)
	for i = 0 to spineBoxes.count - 2
		spineBoxes(i).addchild spineBoxes (i+1)
	next

	set boxChest = in_model.findchild("Chest")
	spineBoxes(spineBoxes.count-1).addchild boxChest 
	
	SelectObj mySkeleton(0), "BRANCH"
	DeleteObj
	
	SelectObj spineBoxes.GetAsText
	
	SetMarking "kine.local.ori.euler.rotz"
	AddToMarking "kine.local.ori.euler.roty"
	AddToMarking "kine.local.ori.euler.rotx"

	CreateMarkingSet	
	
	set out_spineBoxes = spineBoxes
	
end function
'--------------------------------------------------------------------------------
' ATTACH BOX - Draw Skeleton Spine
'
' AB_draw_SkeletonSpine is used when 
'		1) BOX HIERARCHY shadow rig is attached
'	AND 2) WHEN Skeleton type spine is selected 
'
' when a Quaternion type spine is selected AB_draw_Spine() is used.
'
'--------------------------------------------------------------------------------
function AB_draw_SkeletonSpine(in_nbLumber, in_model, in_rig, out_spineBoxes)
	
	dim vert(), size, i, mySkeleton, Children, body
	
	size = in_nbLumber

	set root = ActiveProject.ActiveScene.Root
	set guide = root.findchild("BipedPropGuide")
	set body = in_model.findchild("UpperBody")
	set spline = guide.findchild("SpineSpline")

	set firstLumber = in_rig.findchild("Lumber1")
	set MySkeleton =  GetSkeleton(firstLumber, BoneIndex )
	
	'draw the curves for the boxes
	
	dim tracer, PathCnst, tracers, spineBoxes, dup, tempNURBS, meshReturn, sMesh, loftop, l_oShader
	dim boxChest 
	
	set tracer = in_model.findchild("tracer")	
	set PathCnst = tracer.Kinematics.AddConstraint("Path", spline, False)
	
	set tracers = CreateObject("XSI.Collection")
	set spineBoxes = CreateObject("XSI.Collection")
	
	tracers.add tracer
	
	for i = 1 to in_nbLumber
		PathCnst.perc = (i)/(in_nbLumber) * 100 
		set dup = Duplicate(tracer , , 2, 1, 1, 0, 0, 1, 0, 1)
		tracers.add dup
	next
	PathCnst.perc = 0
	
	
	'create boxes
	for i = 0 to in_nbLumber - 1
		set loftop = ApplyOp ("Loft", tracers(i)&","&tracers(i+1), 3, siPersistentOperation)
		set tempNURBS = loftop(0).Owners(0).parent
		set meshReturn = ApplyOp("NurbsToMesh", tempNURBS, 3, siPersistentOperation)
		set sMesh = meshReturn(0).Owners(0).parent
		FreezeObj sMesh 
		sMesh.AddProperty("Display Property")
		sMesh.properties("display").wirecol.value = 479
		ApplyShader "$XSI_DSPRESETS\\Shaders\\Material\\Phong.Preset", sMesh
		set l_oShader = sMesh.Material.Shaders(0)

		l_oShader.Diffuse.red	= 0.741
		l_oShader.Diffuse.green = 0.653
		l_oShader.Diffuse.blue	= 0.603
		l_oShader.Ambient.red	= 0.845
		l_oShader.Ambient.green = 0.496
		l_oShader.Ambient.blue	= 0.3
		
		spineBoxes.add sMesh 
		DeleteObj tempNURBS

	next
	
	DeleteObj tracers.GetAsText
	
	'copy centers
	for i = 0 to in_nbLumber - 1
		AB_copyCenter in_rig.FindChild("Lumber" & i + 1), spineBoxes(i)
		spineBoxes(i).name = "Lumber" & i + 1
		AddToGroup in_model & ".envelope_Group", spineBoxes(i)
	next	 
	
	'parenting
	body.addchild spineBoxes(0)
	for i = 0 to spineBoxes.count - 2
		spineBoxes(i).addchild spineBoxes (i+1)
	next

	set rigChest = in_model.findchild("Chest")
	spineBoxes(spineBoxes.count-1).addchild rigChest 
	
	SelectObj spineBoxes.GetAsText
	
	SetMarking "kine.local.ori.euler.rotz"
	AddToMarking "kine.local.ori.euler.roty"
	AddToMarking "kine.local.ori.euler.rotx"

	CreateMarkingSet	
	
	set out_spineBoxes = spineBoxes 
	
end function
'---------------------------------------------
' Chest Constrain
'---------------------------------------------
function chestConstrain(inChest, inTarget)
	
	set p1 = inChest.Kinematics.AddConstraint("Pose", inTarget, False)	
	p1.rotx = 90
	p1.rotz = 90

end function 
'---------------------------------------------
' Delete Clusters
'---------------------------------------------
function AB_delete_clusters(in_model)

	SelectObj in_model, "BRANCH"
	FreezeObj
	
	DeleteObj in_model& "." & "cc_*"
	
	DeleteObj in_model& ".*.cls.*" 
	
end function
'--------------------------------------
' T Match
'--------------------------------------
function t_match (in_source, in_target)

	dim tx, ty, tz
	dim rx, ry, rz
	
	tx = GetValue(in_source & ".kine.global.posx")
	ty = GetValue(in_source & ".kine.global.posy")
	tz = GetValue(in_source & ".kine.global.posz")
	
	Translate "B:" & in_target, tx, ty, tz, siAbsolute, siGlobal, siObj, siXYZ

		
end function
'-----------------------------------------------
' Copy Center
'-----------------------------------------------
function AB_copyCenter (in_source, in_target)
	dim rx, ry, rz	
	dim tx, ty, tz
	
'	logmessage "in_source: " & in_source
'	logmessage "in_target: " & in_target
	
	rx = GetValue(in_source& ".kine.global.rotx")
	ry = GetValue(in_source& ".kine.global.roty")
	rz = GetValue(in_source& ".kine.global.rotz")
	
	tx = GetValue(in_source& ".kine.global.posx")
	ty = GetValue(in_source& ".kine.global.posy")
	tz = GetValue(in_source& ".kine.global.posz")

	Rotate in_target, rx, ry, rz, siAbsolute, siGlobal, siCtr, siXYZ
	Translate in_target, tx, ty, tz, siAbsolute, siGlobal, siCtr, siXYZ
	
end function
'-----------------------------------
' Process Hands
'-----------------------------------
function AB_Process_hands(in_model, in_hands)

	if in_hands = False then
	
		DeleteObj in_model & ".RHand_nf"	
		DeleteObj in_model & ".LHand_nf"
	
	else
		DeleteObj "B:" & in_model & ".RHand"
		DeleteObj "B:" & in_model & ".LHand"		
	end if

end function
'--------------------------------------
function AB_rt_match (in_source, in_target)
'--------------------------------------

	dim rx, ry, rz	
	dim tx, ty, tz
	
	
	'logmessage "IN SOURCE: " & in_source
	'logmessage "IN TARGET: " & in_target
	
	rx = GetValue(in_source & ".kine.global.rotx")
	ry = GetValue(in_source & ".kine.global.roty")
	rz = GetValue(in_source & ".kine.global.rotz")
	
	tx = GetValue(in_source & ".kine.global.posx")
	ty = GetValue(in_source & ".kine.global.posy")
	tz = GetValue(in_source & ".kine.global.posz")

	Rotate "B:" & in_target, rx, ry, rz, siAbsolute, siGlobal, siObj, siXYZ
	Translate "B:" & in_target, tx, ty, tz, siAbsolute, siGlobal, siObj, siXYZ
	
end function
'-----------------------------------------------





















'****************************************************
'****************************************************
'****************************************************
'****************************************************
'****************************************************

' ATTACH NULLS

'****************************************************
'****************************************************
'****************************************************
'****************************************************
'****************************************************








'-----------------------------------
' Attach Nulls
'----------------------------------- 
sub attach_nulls( in_rig, in_nbLumber, in_spineType, in_headType, in_hands)

	dim myModel, mpath, spine
	
	set myModel = GetPresetModel("Biped_Null","Biped_Null")
	
	
	AN_model_and_GlobalSRT_match myModel, valid
	if valid = False then exit sub
	
	AB_early_attachment myModel, in_rig, constraints
	
	
	if in_spineType = 0 then
		AN_draw_spine in_nbLumber, myModel, spine
	else
		AN_draw_Skelspine in_nbLumber, myModel, spine
	end if	
	
	

	AN_attach myModel, in_rig, spine, in_spineType, in_headType, constraints
	
	if in_hands = True then
	
		DeleteObj "B:" & myModel.FindChild("LThumb1")
		DeleteObj "B:" & myModel.FindChild("LIndex1")
		DeleteObj "B:" & myModel.FindChild("LMiddle1")
		DeleteObj "B:" & myModel.FindChild("LRing1")		
		DeleteObj "B:" & myModel.FindChild("LPinky1")		
			
		DeleteObj "B:" & myModel.FindChild("RThumb1")
		DeleteObj "B:" & myModel.FindChild("RIndex1")
		DeleteObj "B:" & myModel.FindChild("RMiddle1")
		DeleteObj "B:" & myModel.FindChild("RRing1")		
		DeleteObj "B:" & myModel.FindChild("RPinky1")		
	
	end if
	
	make_ShadowDefault myModel 
	
	applySynoptic2 myModel, 0
	
end sub
'---------------------------------------------
' Model and Global SRT Match
'---------------------------------------------
function AN_model_and_GlobalSRT_match(in_rigModel, out_valid)

	out_valid = False

	if IsComponent("BipedPropGuide.globalSRT") = False then exit function

	dim oRoot, PModel, PgSRT, RiggSRT

	set oRoot = Application.ActiveSceneRoot
	
	set PModel = oRoot.FindChild("BipedPropGuide")
	set PgSRT= oRoot.FindChild("BipedPropGuide.GlobalSRT")
	set RiggSRT = oRoot.FindChild(in_rigModel & ".globalSRT")
	
	'match up the models
	rt_match PModel, in_rigModel
	
	'match up the globalSRT's
	rt_match PgSRT, RiggSRT
	
	out_valid = True
	
end function

'---------------------------------------------
' Attach
'---------------------------------------------
function AN_attach(in_boxes, in_rig, in_spineBoxes, in_spineType, in_headType, out_constraints)


	set constraints = CreateObject("XSI.Collection")
	
	PosCnst in_boxes.FindChild("globalSRT"), in_rig.FindChild("globalSRT"), constraints	
	AB_Poseattach in_boxes.FindChild("UpperBody"), in_rig.FindChild("Hip"), False, constraints
	
	'spine boxes
	dim i
	if in_spineType = 0 then
		for i = 0 to in_spineBoxes.count - 1
		
			refresh
		
			AB_Poseattach in_spineBoxes(i), in_rig.FindChild("Lumber"&i+1), False, constraints
		next
		chestConstrain in_boxes.FindChild("Chest"), in_rig.FindChild("chestBone")		
	else
		for i = 0 to in_spineBoxes.count - 1
		
			refresh
		
			AB_Poseattach in_spineBoxes(i), in_rig.FindChild("Lumber"&i+1), False, constraints
		next
		AB_Poseattach in_boxes.FindChild("Chest"), in_rig.FindChild("Chest"), False, constraints
	end if
	
	if in_headType = 1 then
		AB_Poseattach in_boxes.FindChild("Neck"), in_rig.FindChild("Neck"), False, constraints
		AB_Poseattach in_boxes.FindChild("Head"), in_rig.FindChild("Head"), False, constraints
	else
 	 	
 	 	AB_rt_match in_rig.FindChild("BoneNeck"), in_boxes.FindChild("Neck")
 	 	AB_rt_match in_rig.FindChild("BoneHead"), in_boxes.FindChild("Head")

	 	AB_Poseattach in_boxes.FindChild("Neck"), in_rig.FindChild("neckSegment1"), True, constraints
		AB_Poseattach in_boxes.FindChild("Head"), in_rig.FindChild("headBind"), True, constraints
		
	 	SetUserPref "SI3D_CONSTRAINT_COMPENSATION_MODE", 0
	 	SIApplyCns "Direction", in_boxes.FindChild("Neck"), in_rig.FindChild("headBind")
	 	
	end if	
	
	
	AB_Poseattach in_boxes.FindChild("LThigh"), in_rig.FindChild("LThigh"), False, constraints
	AB_Poseattach in_boxes.FindChild("LShin"), in_rig.FindChild("LShin"), False, constraints
	AB_Poseattach in_boxes.FindChild("LFoot"), in_rig.FindChild("LFoot"), False, constraints
	AB_Poseattach in_boxes.FindChild("LToe"), in_rig.FindChild("LToe"), False, constraints
 
	AB_Poseattach in_boxes.FindChild("RThigh"), in_rig.FindChild("RThigh"), False, constraints
	AB_Poseattach in_boxes.FindChild("RShin"), in_rig.FindChild("RShin"), False, constraints
	AB_Poseattach in_boxes.FindChild("RFoot"), in_rig.FindChild("RFoot"), False, constraints
	AB_Poseattach in_boxes.FindChild("RToe"), in_rig.FindChild("RToe"), False, constraints
	
	AB_Poseattach in_boxes.FindChild("RBicep"), in_rig.FindChild("RBicep"), False, constraints
	AB_Poseattach in_boxes.FindChild("LBicep"), in_rig.FindChild("LBicep"), False, constraints
	
	AB_Poseattach in_boxes.FindChild("LShoulder"), in_rig.FindChild("LShoulder"), False, constraints
	AB_Poseattach in_boxes.FindChild("LForearm"), in_rig.FindChild("LForearm"), False, constraints
	AB_Poseattach in_boxes.FindChild("LHand"), in_rig.FindChild("LHand"), False, constraints

	AB_Poseattach in_boxes.FindChild("RShoulder"), in_rig.FindChild("RShoulder"), False, constraints
	AB_Poseattach in_boxes.FindChild("RForearm"), in_rig.FindChild("RForearm"), False, constraints
	AB_Poseattach in_boxes.FindChild("RHand"), in_rig.FindChild("RHand"), False, constraints

	'hands

	AB_Poseattach in_boxes.FindChild("LThumb1"), in_rig.FindChild("LThumb1"), False, constraints
	AB_Poseattach in_boxes.FindChild("LIndex1"), in_rig.FindChild("LIndex1"), False, constraints
	AB_Poseattach in_boxes.FindChild("LMiddle1"), in_rig.FindChild("LMiddle1"), False, constraints
	AB_Poseattach in_boxes.FindChild("LRing1"), in_rig.FindChild("LRing1"), False, constraints
	AB_Poseattach in_boxes.FindChild("LPinky1"), in_rig.FindChild("LPinky1"), False, constraints

	AB_Poseattach in_boxes.FindChild("LThumb2"), in_rig.FindChild("LThumb2"), False, constraints
	AB_Poseattach in_boxes.FindChild("LIndex2"), in_rig.FindChild("LIndex2"), False, constraints
	AB_Poseattach in_boxes.FindChild("LMiddle2"), in_rig.FindChild("LMiddle2"), False, constraints
	AB_Poseattach in_boxes.FindChild("LRing2"), in_rig.FindChild("LRing2"), False, constraints
	AB_Poseattach in_boxes.FindChild("LPinky2"), in_rig.FindChild("LPinky2"), False, constraints

	AB_Poseattach in_boxes.FindChild("LThumb3"), in_rig.FindChild("LThumb3"), False, constraints
	AB_Poseattach in_boxes.FindChild("LIndex3"), in_rig.FindChild("LIndex3"), False, constraints
	AB_Poseattach in_boxes.FindChild("LMiddle3"), in_rig.FindChild("LMiddle3"), False, constraints
	AB_Poseattach in_boxes.FindChild("LRing3"), in_rig.FindChild("LRing3"), False, constraints
	AB_Poseattach in_boxes.FindChild("LPinky3"), in_rig.FindChild("LPinky3"), False, constraints

	AB_Poseattach in_boxes.FindChild("RThumb1"), in_rig.FindChild("RThumb1"), False, constraints
	AB_Poseattach in_boxes.FindChild("RIndex1"), in_rig.FindChild("RIndex1"), False, constraints
	AB_Poseattach in_boxes.FindChild("RMiddle1"), in_rig.FindChild("RMiddle1"), False, constraints
	AB_Poseattach in_boxes.FindChild("RRing1"), in_rig.FindChild("RRing1"), False, constraints
	AB_Poseattach in_boxes.FindChild("RPinky1"), in_rig.FindChild("RPinky1"), False, constraints

	AB_Poseattach in_boxes.FindChild("RThumb2"), in_rig.FindChild("RThumb2"), False, constraints
	AB_Poseattach in_boxes.FindChild("RIndex2"), in_rig.FindChild("RIndex2"), False, constraints
	AB_Poseattach in_boxes.FindChild("RMiddle2"), in_rig.FindChild("RMiddle2"), False, constraints
	AB_Poseattach in_boxes.FindChild("RRing2"), in_rig.FindChild("RRing2"), False, constraints
	AB_Poseattach in_boxes.FindChild("RPinky2"), in_rig.FindChild("RPinky2"), False, constraints

	AB_Poseattach in_boxes.FindChild("RThumb3"), in_rig.FindChild("RThumb3"), False, constraints
	AB_Poseattach in_boxes.FindChild("RIndex3"), in_rig.FindChild("RIndex3"), False, constraints
	AB_Poseattach in_boxes.FindChild("RMiddle3"), in_rig.FindChild("RMiddle3"), False, constraints
	AB_Poseattach in_boxes.FindChild("RRing3"), in_rig.FindChild("RRing3"), False, constraints
	AB_Poseattach in_boxes.FindChild("RPinky3"), in_rig.FindChild("RPinky3"), False, constraints


end function
'---------------------------------------------
' Match up
'---------------------------------------------
function AN_match_up(in_model)

	'first match the objects running down the hierarchy

	t_match "BipedPropGuide.cog", in_model & ".UpperBody"
	t_match "BipedPropGuide.RibCageStart", in_model & ".Chest"	

	t_match "BipedPropGuide.RibCageEnd", in_model & ".Neck"
	t_match "BipedPropGuide.Neck", in_model & ".Head"
	
	t_match "BipedPropGuide.LLeg", in_model & ".LThigh"
	t_match "BipedPropGuide.LKnee", in_model & ".LShin"
	t_match "BipedPropGuide.LFoot", in_model & ".LFoot"	
	t_match "BipedPropGuide.LHeel", in_model & ".LToe"	
	
	t_match "BipedPropGuide.RLeg", in_model & ".RThigh"	
	t_match "BipedPropGuide.RKnee", in_model & ".RShin"
	t_match "BipedPropGuide.RFoot", in_model & ".RFoot"	
	t_match "BipedPropGuide.RHeel", in_model & ".RToe"	
	

	t_match "BipedPropGuide.LShoulderStart", in_model & ".LShoulder"
	t_match "BipedPropGuide.LShoulder", in_model & ".LBicep"	
	t_match "BipedPropGuide.LElbow", in_model & ".LForearm"				
	t_match "BipedPropGuide.LHand", in_model & ".LHand"


	t_match "BipedPropGuide.RShoulderStart", in_model & ".RShoulder"	
	t_match "BipedPropGuide.RShoulder", in_model & ".RBicep"	
	t_match "BipedPropGuide.RElbow", in_model & ".RForearm"				
	t_match "BipedPropGuide.RHand", in_model & ".RHand"					
				
					
	t_match "BipedPropGuide.LPinky1", in_model & ".LPinky1"	
	t_match "BipedPropGuide.LRing1", in_model & ".LRing1"
	t_match "BipedPropGuide.LMiddle1", in_model & ".LMiddle1"	
	t_match "BipedPropGuide.LIndex1", in_model & ".LIndex1"	
	t_match "BipedPropGuide.LThumb1", in_model & ".LThumb1"	

	t_match "BipedPropGuide.LPinky2", in_model & ".LPinky2"	
	t_match "BipedPropGuide.LRing2", in_model & ".LRing2"	
	t_match "BipedPropGuide.LMiddle2", in_model & ".LMiddle2"	
	t_match "BipedPropGuide.LIndex2", in_model & ".LIndex2"	
	t_match "BipedPropGuide.LThumb2", in_model & ".LThumb2"
	
	t_match "BipedPropGuide.LPinky3", in_model & ".LPinky3"	
	t_match "BipedPropGuide.LRing3", in_model & ".LRing3"	
	t_match "BipedPropGuide.LMiddle3", in_model & ".LMiddle3"	
	t_match "BipedPropGuide.LIndex3", in_model & ".LIndex3"	
	t_match "BipedPropGuide.LThumb3", in_model & ".LThumb3"
	


	t_match "BipedPropGuide.RPinky1", in_model & ".RPinky1"	
	t_match "BipedPropGuide.RRing1", in_model & ".RRing1"	
	t_match "BipedPropGuide.RMiddle1", in_model & ".RMiddle1"	
	t_match "BipedPropGuide.RIndex1", in_model & ".RIndex1"	
	t_match "BipedPropGuide.RThumb1", in_model & ".RThumb1"	

	t_match "BipedPropGuide.RPinky2", in_model & ".RPinky2"	
	t_match "BipedPropGuide.RRing2", in_model & ".RRing2"	
	t_match "BipedPropGuide.RMiddle2", in_model & ".RMiddle2"	
	t_match "BipedPropGuide.RIndex2", in_model & ".RIndex2"	
	t_match "BipedPropGuide.RThumb2", in_model & ".RThumb2"
	
	t_match "BipedPropGuide.RPinky3", in_model & ".RPinky3"	
	t_match "BipedPropGuide.RRing3", in_model & ".RRing3"	
	t_match "BipedPropGuide.RMiddle3", in_model & ".RMiddle3"	
	t_match "BipedPropGuide.RIndex3", in_model & ".RIndex3"	
	t_match "BipedPropGuide.RThumb3", in_model & ".RThumb3"


end function
'-----------------------------------
' Draw Spine
'----------------------------------- 
function AN_draw_spine(in_nbLumber, in_model, out_spine)
	
	dim vert(), size, i, mySkeleton, Children, body
	
	' all we need to do here is make enough nulls to match the number of vertbra
	' and a chest.
	
	set SpineNulls = CreateObject("XSI.Collection")
	
	for i = 1 to in_nbLumber 
		set newNull = GetPrim ("Null")
		AddProp "Display Property", newNull
		SetValue newNull& ".display.wirecol", 381
		SetValue newNull &".Name", "Lumber" & i 		
		SpineNulls.add newNull
		AddToGroup in_model & ".envelope_Group", newNull		
	next

	'parenting
	set body = in_model.findchild("UpperBody")
	body.addchild SpineNulls(0)
	for i = 0 to SpineNulls.count - 2
		SpineNulls(i).addchild SpineNulls(i+1)
	next

	for i = 0 to SpineNulls.count - 1
		SpineNulls(i).ActivePrimitive.parameters("size").value = .3
	next
		
	set nullChest = in_model.findchild("Chest")
	SpineNulls(SpineNulls.count-1).addchild nullChest 
	
	SelectObj SpineNulls
	SetMarking "kine.local.ori.euler.rotz"
	AddToMarking "kine.local.ori.euler.roty"
	AddToMarking "kine.local.ori.euler.rotx"

	CreateMarkingSet	
	
	set out_spine = SpineNulls
	
end function
'-----------------------------------
' Draw Skel Spine
'----------------------------------- 
function AN_draw_Skelspine(in_nbLumber, in_model, out_spine)
	
	dim vert(), size, i, mySkeleton, Children, body
	
	' all we need to do here is make enough nulls to match the number of vertbra
	' and a chest.
	
	set SpineNulls = CreateObject("XSI.Collection")
	
	for i = 1 to in_nbLumber 
		set newNull = GetPrim ("Null")
		AddProp "Display Property", newNull
		SetValue newNull& ".display.wirecol", 381
		SetValue newNull &".Name", "Lumber" & i 		
		SpineNulls.add newNull
		AddToGroup in_model & ".envelope_Group", newNull		
	next

	'parenting
	set body = in_model.findchild("UpperBody")
	body.addchild SpineNulls(0)
	for i = 0 to SpineNulls.count - 2
		SpineNulls(i).addchild SpineNulls(i+1)
	next

	for i = 0 to SpineNulls.count - 1
		SpineNulls(i).ActivePrimitive.parameters("size").value = .3
	next
		
	set nullChest = in_model.findchild("Chest")
	SpineNulls(SpineNulls.count-1).addchild nullChest

	SelectObj SpineNulls
	
	SetMarking "kine.local.ori.euler.rotz"
	AddToMarking "kine.local.ori.euler.roty"
	AddToMarking "kine.local.ori.euler.rotx"

	CreateMarkingSet	
	
	set out_spine = SpineNulls
	
end function
'---------------------------------------------
' Make Shadow Default Pose
'---------------------------------------------
sub make_ShadowDefault(in_rigModel)
	
	logmessage "Storing Default Pose"

	SelectObj in_rigModel & ".globalSRT", "BRANCH"
	SelectChildNodes

	SetMarking "MarkingSet"
	StoreAction , , 1, "DefaultPose", True, 1, 5
	DeselectAll
	
end sub
'-----------------------------------------------















