'
' Hierachy from Biped Guide
'
'
' LISTING OF subs/functions contained in this file:
'----------------------
' UI & HIGH-LEVEL CONTROL
'
'		HierachyFromBipedProc
'		applySynoptic
'		get_Dial
'		attach_skeleton
'		attach_boxes
'		attach_nulls
'-------------------------
' SKELETON HIERARCHY RELATED
'
'		AS_model_and_GlobalSRT_match
'		AS_Attach_hips
'		AS_Attach_UpperBody
'		AS_Attach_Hands
'		AS_attach_feet
'		AS_draw_spine
'-------------------------
' BOX HIERARCHY RELATED
'
'		AB_model_and_GlobalSRT_match
'		AB_match_up
'		AB_draw_spine 
'		AB_delete_clusters
'-------------------------
' NULL HIERARCHY RELATED
'
'		AN_model_and_GlobalSRT_match
'		AN_match_up
'		AN_draw_spine
'-------------------------
' HELPERS
'
'		TwoBoneChain_Pos2Rot
'		IsComponent
'		rt_match
'		set_prefangles
'		GetVector
'		IsComponent
'		t_match
'		t_match2
'		copyCenter
'		make_DefaultPose

'******************************************************************************
' String Constants (used to translate)
'******************************************************************************
const IDS_HIERACHY_FROM_GUIDE_TITLE			= 1046

'
'
' Hierachy From Biped
' misner
'-----------------------------------
' Hierachy from Biped
'----------------------------------- 
sub HierachyFromBipedProc( inGuideName, inGuideType, inFromUI, inIndependentLower )

	dim hType, valid, nbVertebra 

	dim l_binspectprev, l_bchildcomp

	if  inGuideName = "" then inGuideName = GetGuide("Biped_Guide")
	if  inGuideName = "" then inGuideName = GetGuide("Quadruped_Guide")
	if  inGuideName = "" then inGuideName = GetGuide("Biped_DogLeg_Guide")
	if  inGuideName = "" then inGuideName = GetGuide("BipedPropGuide")

	if 	inGuideName = "Biped_Guide" or _
		inGuideName = "Quadruped_Guide" or _
		inGuideName = "Biped_DogLeg_Guide" then

		if inFromUI then
			get_Dial inGuideType, nbVertebra, inIndependentLower, valid
			if valid = False then exit sub
		end if

		dim shadowType
		select case inGuideType
			case 0 shadowType = 3
			case 1 shadowType = 4
			case 2 shadowType = 1
			case 3 shadowType = 2
		end select

		'create a rig with a shadow then delete the rig
		dim rig, ArmSymmetricManipulation
		'turn off symmetric manipulation of arms for hierarchies		
		ArmSymmetricManipulation = 1 
		select case inGuideName
			case "Biped_Guide"
				set rig = MakeBiped(,,nbVertebra,,,,,,,,,,ArmSymmetricManipulation,,,,,,,,,,,,,,shadowType,,,inIndependentLower,,True,True)
			case "Quadruped_Guide"
				set rig = MakeQuadruped(,,nbVertebra,,,,,,,,,,,,,,,shadowType,True,True)
			case "Biped_DogLeg_Guide"
				set rig = MakeBipedDogLeg(,,nbVertebra,,,,,,,,,,ArmSymmetricManipulation,,,,,,,,,,,,,shadowType,,,inIndependentLower,True,True)
		end select

		'
		' BOX HIERARCHY: freeze the box hierachy before deleting rig
		'
		refresh
		if shadowType = 4 then 
			SelectObj rig.ShadowModel, "BRANCH"
			FreezeModeling
		end if

		'delete the rig keeping the shadow
		DeleteObj "B:" & rig.model

		'
		' SKEL HIERARCHIES: change spine vertebrae resplane control back to default.
		'
		if shadowType = 1 or shadowType = 2 then
			'delete the hidden group
		    select case inGuideName

			    case "Biped_Guide"
			        DeleteObj rig.ShadowModel & ".Shadow_Hidden"
			    case "Quadruped_Guide"
			        DeleteObj rig.ShadowModel & ".hidden"
			    case "Biped_DogLeg_Guide"
			        DeleteObj rig.ShadowModel & ".Shadow_Hidden"
    		end select

			for i = 1 to rig.Torso.Spine.ShadowSpine.Skel.count-2
				rig.Torso.Spine.ShadowSpine.Skel(i).joint.parameters("resplane").value = 0
			next
		end if


	else' old hierarchy from biped guide
		' Set temporarily the autoinspect to off, otherwise we will pop
		' multiple unwanted property editors...
		l_binspectprev = SetUserPref( siAutoInspect, False )

		if inFromUI then 
			get_Dial inGuideType, nbVertebra, valid
			if valid = False then
				' Set the prefs back
				SetUserPref siAutoInspect, l_binspectprev
				exit sub
			end if
		end if

		l_bchildcomp = setuserpref("SI3D_NODETRANSFORM_CHILD_COMPENSATE", 0)
		
		dim model

		select case inGuideType
		
			case 0 model = attach_nulls(nbVertebra, inGuideName)
			case 1 model = attach_boxes(nbVertebra, inGuideName)
			case 2 model = attach_skeleton("traditional", nbVertebra, inGuideName) 
			case 3 model = attach_skeleton("xsiSkel", nbVertebra, inGuideName) 
			
		end select

		' Set the prefs back
		SetUserPref siAutoInspect, l_binspectprev
		SetUserPref "SI3D_NODETRANSFORM_CHILD_COMPENSATE", l_bchildcomp

		'
		' There should be no cycles in the final hierarchy,
		' This will log warning if there are any.
		'
		CycleChecking model,0,0,1 
	end if

	logmessage "Hierarchy from Guide done."

end sub


'--------------------------------
' Get Guide
'--------------------------------
function GetGuide(inGuideName)

	GetGuide = ""

	set oFound = ActiveSceneRoot.FindChild(inGuideName)

	if typename(oFound) <> "Nothing" then  GetGuide = oFound.Name

end function

'---------------------------------------------
' Apply Synoptic
'---------------------------------------------
function applySynoptic(inRig, inStyle)
	
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
' Get Dialogue
'---------------------------------------------
function get_Dial(out_type, out_nbVertebra, out_independentLower, out_valid)
	
	dim sroot, UI

	set sroot = ActiveProject.ActiveScene.Root
	set UI = sroot.AddProperty("Charac_HierachyFromBiped", 0, "Hierarchy From Guide")

	On Error Resume Next
	inspectobj UI,,XSIUtils.Translate( IDS_HIERACHY_FROM_GUIDE_TITLE, "XSISCRIPTS" ), siModal
	
	if Err.Number <> 0 then
		DeleteObj UI
		out_valid = False
		exit function
	end if
	
	On Error Goto 0
	
	out_type = GetValue(UI & ".type")	
	out_nbVertebra = GetValue(UI & ".number_of_vertebra")
    out_independentLower = GetValue(UI & ".IndependentLower")

	DeleteObj UI	
	out_valid = True
	
end function

'---------------------------------------------
'*********************************************
'*********************************************
'*********************************************

' Attach Skeleton

'*********************************************
'*********************************************
'*********************************************
'---------------------------------------------

function attach_skeleton(in_skeltype, in_nbVertebra)
	
	if in_skeltype = "traditional" then
		set myModel = GetPresetModel( "Biped_Skeleton", "Biped_Skeleton" )
	else
		set myModel = GetPresetModel( "Biped_XSISkeleton", "Biped_XSISkeleton" )
	end if
	
	attach_skeleton	= myModel

	AS_model_and_GlobalSRT_match myModel, valid
	if valid = False then exit function
	
	AS_Attach_hips myModel, valid
	
	AS_Attach_UpperBody myModel, valid

	AS_Attach_Hands myModel, valid 
	
	AS_attach_feet myModel, valid 

	AS_draw_spine in_nbVertebra, mymodel, in_skeltype 
	
	make_DefaultPose myModel 
	
	applySynoptic myModel , 2

	
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
	
	MatchTransform in_rigModel & ".LRootShoulder", "BipedPropGuide.LShoulderStart", siTrn
	MatchTransform in_rigModel & ".RRootShoulder", "BipedPropGuide.RShoulderStart", siTrn		
	MatchTransform in_rigModel & ".HeadRoot", "BipedPropGuide.RibCageEnd", siTrn		
	
	if IsComponent("BipedPropGuide.Neck") = False then exit function
	if IsComponent("BipedPropGuide.Head") = False then exit function
	if IsComponent("BipedPropGuide.RShoulder") = False then exit function
	if IsComponent("BipedPropGuide.RElbow") = False then exit function		
	if IsComponent("BipedPropGuide.RHand") = False then exit function
	if IsComponent("BipedPropGuide.LShoulder") = False then exit function	
	if IsComponent("BipedPropGuide.LElbow") = False then exit function
	if IsComponent("BipedPropGuide.LHand") = False then exit function
	
	if IsComponent("BipedPropGuide.bone42") = False then exit function
	if IsComponent("BipedPropGuide.bone43") = False then exit function
	if IsComponent("BipedPropGuide.bone44") = False then exit function
	if IsComponent("BipedPropGuide.bone45") = False then exit function		
	if IsComponent("BipedPropGuide.bone38") = False then exit function
	if IsComponent("BipedPropGuide.bone39") = False then exit function	
	if IsComponent("BipedPropGuide.bone40") = False then exit function
	if IsComponent("BipedPropGuide.bone61") = False then exit function

	SetValue in_rigModel & ".Neck.bone.length",			GetValue("BipedPropGuide.bone35.bone.length")
	SetValue in_rigModel & ".Head.bone.length",			GetValue("BipedPropGuide.bone36.bone.length")
	SetValue in_rigModel & ".RShoulder.bone.length",	GetValue("BipedPropGuide.bone32.bone.length")
	SetValue in_rigModel & ".RBicep.bone.length",		GetValue("BipedPropGuide.bone33.bone.length")
	SetValue in_rigModel & ".RForearm.bone.length",		GetValue("BipedPropGuide.bone34.bone.length")
	SetValue in_rigModel & ".LShoulder.bone.length",	GetValue("BipedPropGuide.bone31.bone.length")
	SetValue in_rigModel & ".LBicep.bone.length",		GetValue("BipedPropGuide.bone30.bone.length")
	SetValue in_rigModel & ".LForearm.bone.length",		GetValue("BipedPropGuide.bone29.bone.length")

	'match the neck and head positions
	dim c1, c2, c3, c4

	c1 = SIApplyCns ("Position", in_rigModel & ".LShoulderEff", "BipedPropGuide.LShoulder")
	c2 = SIApplyCns ("Position", in_rigModel & ".RShoulderEff", "BipedPropGuide.RShoulder")
	c3 = SIApplyCns ("Position", in_rigModel & ".Head", "BipedPropGuide.Neck")
	c4 = SIApplyCns ("Position", in_rigModel & ".NeckEff", "BipedPropGuide.Head")	
	
	refresh

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
	
		'Step 1: get the target positions
		set oArm = oRoot.FindChild(in_rigModel & side(idx) & "ArmRoot")
		oRoot.FindChild("BipedPropGuide" & side(idx) & "Shoulder").Kinematics.Global.Transform.GetTranslation oArmPos(0)
		oRoot.FindChild("BipedPropGuide" & side(idx) & "Elbow").Kinematics.Global.Transform.GetTranslation oArmPos(1)
		oRoot.FindChild("BipedPropGuide" & side(idx) & "Hand").Kinematics.Global.Transform.GetTranslation oArmPos(2)

		'Step 2: determine the local rotations 
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
' Attach Hand
'---------------------------------------------
function AS_Attach_Hands(in_rigModel, out_valid)

	out_valid = False

	dim oRoot, oHandRoot, oHand, oThumb, oIndex, oMiddle, oRing, oPinky 

	'===============================================
	'
	' VALIDATE the Right Hand Guide
	'
	'===============================================

	if IsComponent("BipedPropGuide.RThumb1") = False then exit function
	if IsComponent("BipedPropGuide.RThumb2") = False then exit function
	if IsComponent("BipedPropGuide.RThumb3") = False then exit function
	if IsComponent("BipedPropGuide.RThumb4") = False then exit function		
	if IsComponent("BipedPropGuide.RIndex1") = False then exit function
	if IsComponent("BipedPropGuide.RIndex2") = False then exit function	
	if IsComponent("BipedPropGuide.RIndex3") = False then exit function
	if IsComponent("BipedPropGuide.RIndex4") = False then exit function
	if IsComponent("BipedPropGuide.RMiddle1") = False then exit function
	if IsComponent("BipedPropGuide.RMiddle2") = False then exit function
	if IsComponent("BipedPropGuide.RMiddle3") = False then exit function
	if IsComponent("BipedPropGuide.RRing1") = False then exit function		
	if IsComponent("BipedPropGuide.RRing2") = False then exit function
	if IsComponent("BipedPropGuide.RRing3") = False then exit function	
	if IsComponent("BipedPropGuide.RRing4") = False then exit function
	if IsComponent("BipedPropGuide.RPinky1") = False then exit function
	if IsComponent("BipedPropGuide.RPinky2") = False then exit function
	if IsComponent("BipedPropGuide.RPinky3") = False then exit function
	if IsComponent("BipedPropGuide.RPinky4") = False then exit function

	if IsComponent("BipedPropGuide.bone46") = False then exit function
	if IsComponent("BipedPropGuide.bone47") = False then exit function
	if IsComponent("BipedPropGuide.bone48") = False then exit function
	if IsComponent("BipedPropGuide.bone49") = False then exit function		
	if IsComponent("BipedPropGuide.bone50") = False then exit function
	if IsComponent("BipedPropGuide.bone51") = False then exit function	
	if IsComponent("BipedPropGuide.bone52") = False then exit function
	if IsComponent("BipedPropGuide.bone53") = False then exit function
	if IsComponent("BipedPropGuide.bone54") = False then exit function
	if IsComponent("BipedPropGuide.bone55") = False then exit function
	if IsComponent("BipedPropGuide.bone56") = False then exit function
	if IsComponent("BipedPropGuide.bone57") = False then exit function		
	if IsComponent("BipedPropGuide.bone58") = False then exit function
	if IsComponent("BipedPropGuide.bone59") = False then exit function	
	if IsComponent("BipedPropGuide.bone60") = False then exit function
	
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

	' we want to delete the constraint before we try to compensate the orientation 
	' if IK controlled it won't reorient.
	DeleteObj SIApplyCns ("Position", oHand.Effector, "BipedPropGuide.RHandEnd")	

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
	MatchTransform oThumb, "BipedPropGuide.RThumb1", siTrn
	MatchTransform oIndex, "BipedPropGuide.RIndex1", siTrn
	MatchTransform oMiddle, "BipedPropGuide.RMiddle1", siTrn
	MatchTransform oRing, "BipedPropGuide.RRing1", siTrn
	MatchTransform oPinky, "BipedPropGuide.RPinky1", siTrn

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

	' For the thumbs we add an extra rotation of 90 in X. 
	' This will line the thumbs up so they rotate "into the hand", instead 
	' of downward like the other fingers
	'
	MatchTransform oThumb.Bones(0), "BipedPropGuide.bone46", siRot
	' negate palm normal so that positive z rotation will curl thumb into the hand.
	l_PalmNormal.NegateInPlace
	rx_current = GetAlignmentFingerRoll( oThumb.Bones(0), l_PalmNormal, true )
	l_PalmNormal.NegateInPlace
	Rotate oThumb.Bones(0), rx_current , 0, 0, siRelative, siAdd, siObj, siX

	MatchTransform oThumb.Bones(1), "BipedPropGuide.bone47", siRot
	Rotate oThumb.Bones(1), rx_current , 0, 0, siRelative, siAdd, siObj, siX

	MatchTransform oThumb.Bones(2), "BipedPropGuide.bone48", siRot
	Rotate oThumb.Bones(2), rx_current , 0, 0, siRelative, siAdd, siObj, siX

	'
	' Line up the rest of the fingers to match the guide
	'

	'
	' Set the Z prefered angle to 3 on 2nd & 3rd finger joints so that they will bend the right way in IK
	'

	' Index
	MatchTransform oIndex.Bones(0), "BipedPropGuide.bone49", siRot
	rx_current = GetAlignmentFingerRoll( oIndex.Bones(0), l_PalmNormal, false )
	Rotate oIndex.Bones(0), rx_current , 0, 0, siRelative, siAdd, siObj, siX

	MatchTransform oIndex.Bones(1), "BipedPropGuide.bone50", siRot
	Rotate oIndex.Bones(1), rx_current , 0, 0, siRelative, siAdd, siObj, siX
	oIndex.Bones(1).Joint.Parameters("prefrotz").value = 3

	MatchTransform oIndex.Bones(2), "BipedPropGuide.bone51", siRot
	Rotate oIndex.Bones(2), rx_current , 0, 0, siRelative, siAdd, siObj, siX
	oIndex.Bones(2).Joint.Parameters("prefrotz").value = 3


	' Middle
	MatchTransform oMiddle.Bones(0), "BipedPropGuide.bone52", siRot
	rx_current = GetAlignmentFingerRoll( oMiddle.Bones(0), l_PalmNormal, false )
	Rotate oMiddle.Bones(0), rx_current , 0, 0, siRelative, siAdd, siObj, siX

	MatchTransform oMiddle.Bones(1), "BipedPropGuide.bone53", siRot
	Rotate oMiddle.Bones(1), rx_current , 0, 0, siRelative, siAdd, siObj, siX
	oMiddle.Bones(1).Joint.Parameters("prefrotz").value = 3

	MatchTransform oMiddle.Bones(2), "BipedPropGuide.bone54", siRot
	Rotate oMiddle.Bones(2), rx_current , 0, 0, siRelative, siAdd, siObj, siX
	oMiddle.Bones(2).Joint.Parameters("prefrotz").value = 3


	' Ring
	MatchTransform oRing.Bones(0), "BipedPropGuide.bone55", siRot
	rx_current = GetAlignmentFingerRoll( oRing.Bones(0), l_PalmNormal, false )
	Rotate oRing.Bones(0), rx_current , 0, 0, siRelative, siAdd, siObj, siX

	MatchTransform oRing.Bones(1), "BipedPropGuide.bone56", siRot
	Rotate oRing.Bones(1), rx_current , 0, 0, siRelative, siAdd, siObj, siX
	oRing.Bones(1).Joint.Parameters("prefrotz").value = 3

	MatchTransform oRing.Bones(2), "BipedPropGuide.bone57", siRot
	Rotate oRing.Bones(2), rx_current , 0, 0, siRelative, siAdd, siObj, siX
	oRing.Bones(2).Joint.Parameters("prefrotz").value = 3


	' Pinky
	MatchTransform oPinky.Bones(0), "BipedPropGuide.bone58", siRot
	rx_current = GetAlignmentFingerRoll( oPinky.Bones(0), l_PalmNormal, false )
	Rotate oPinky.Bones(0), rx_current , 0, 0, siRelative, siAdd, siObj, siX

	MatchTransform oPinky.Bones(1), "BipedPropGuide.bone59", siRot
	Rotate oPinky.Bones(1), rx_current , 0, 0, siRelative, siAdd, siObj, siX
	oPinky.Bones(1).Joint.Parameters("prefrotz").value = 3

	MatchTransform oPinky.Bones(2), "BipedPropGuide.bone60", siRot
	Rotate oPinky.Bones(2), rx_current , 0, 0, siRelative, siAdd, siObj, siX
	oPinky.Bones(2).Joint.Parameters("prefrotz").value = 3

	'
	' Toggle the visibility of the roots
	'
	set rig = in_rigModel	
		
	SelectObj rig &".RThumbRoot,"&rig&".RIndexRoot,"&rig&".RMiddleRoot,"&rig&".RRingRoot,"&rig&".RPinkyRoot", , True
	ToggleVisibility	


	'===============================================
	'
	' VALIDATE the Left Hand GUIDE
	'
	'===============================================

	if IsComponent("BipedPropGuide.LThumb1") = False then exit function
	if IsComponent("BipedPropGuide.LThumb2") = False then exit function
	if IsComponent("BipedPropGuide.LThumb3") = False then exit function
	if IsComponent("BipedPropGuide.LThumb4") = False then exit function		
	if IsComponent("BipedPropGuide.LIndex1") = False then exit function
	if IsComponent("BipedPropGuide.LIndex2") = False then exit function	
	if IsComponent("BipedPropGuide.LIndex3") = False then exit function
	if IsComponent("BipedPropGuide.LIndex4") = False then exit function
	if IsComponent("BipedPropGuide.LMiddle1") = False then exit function	
	if IsComponent("BipedPropGuide.LMiddle2") = False then exit function
	if IsComponent("BipedPropGuide.LMiddle3") = False then exit function
	if IsComponent("BipedPropGuide.LMiddle4") = False then exit function
	if IsComponent("BipedPropGuide.LRing1") = False then exit function		
	if IsComponent("BipedPropGuide.LRing2") = False then exit function
	if IsComponent("BipedPropGuide.LRing3") = False then exit function	
	if IsComponent("BipedPropGuide.LRing4") = False then exit function
	if IsComponent("BipedPropGuide.LPinky1") = False then exit function
	if IsComponent("BipedPropGuide.LPinky2") = False then exit function
	if IsComponent("BipedPropGuide.LPinky3") = False then exit function
	if IsComponent("BipedPropGuide.LPinky4") = False then exit function

	if IsComponent("BipedPropGuide.bone") = False then exit function
	if IsComponent("BipedPropGuide.bone15") = False then exit function
	if IsComponent("BipedPropGuide.bone16") = False then exit function
	if IsComponent("BipedPropGuide.bone19") = False then exit function		
	if IsComponent("BipedPropGuide.bone18") = False then exit function
	if IsComponent("BipedPropGuide.bone17") = False then exit function	
	if IsComponent("BipedPropGuide.bone20") = False then exit function
	if IsComponent("BipedPropGuide.bone21") = False then exit function
	if IsComponent("BipedPropGuide.bone22") = False then exit function
	if IsComponent("BipedPropGuide.bone23") = False then exit function
	if IsComponent("BipedPropGuide.bone24") = False then exit function
	if IsComponent("BipedPropGuide.bone25") = False then exit function		
	if IsComponent("BipedPropGuide.bone26") = False then exit function
	if IsComponent("BipedPropGuide.bone27") = False then exit function	
	if IsComponent("BipedPropGuide.bone28") = False then exit function

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
	MatchTransform oThumb,  "BipedPropGuide.LThumb1", siTrn
	MatchTransform oIndex,  "BipedPropGuide.LIndex1", siTrn
	MatchTransform oMiddle, "BipedPropGuide.LMiddle1", siTrn
	MatchTransform oRing,   "BipedPropGuide.LRing1", siTrn
	MatchTransform oPinky,  "BipedPropGuide.LPinky1", siTrn

	'-----------------------------------------------------------------------------------
	'
	' match the finger rotations
	'
	' NOTE: The guide bones do not rotate in X, so if the guide has an x rotation 
	' in the hand, we must pass this on to the rig with an extra rotation in x after
	' doing the match transform. 
	'
	'-----------------------------------------------------------------------------------

	'
	' For the thumbs we add an extra rotation of 90 in X. 
	' This will line the thumbs up so they rotate "into the hand", instead 
	' of downward like the other fingers
	'
	MatchTransform oThumb.Bones(0), "BipedPropGuide.bone", siRot
	rx_current = GetAlignmentFingerRoll( oThumb.Bones(0), l_PalmNormal, true )
	Rotate oThumb.Bones(0), rx_current, 0, 0, siRelative, siAdd, siObj, siX

	MatchTransform oThumb.Bones(1), "BipedPropGuide.bone15", siRot
	Rotate oThumb.Bones(1), rx_current, 0, 0, siRelative, siAdd, siObj, siX

	MatchTransform oThumb.Bones(2), "BipedPropGuide.bone16", siRot
	Rotate oThumb.Bones(2), rx_current, 0, 0, siRelative, siAdd, siObj, siX

	'
	' Line up the rest of the fingers to match the guide
	' Some of the fingers are rotate 180 in x so that the 
	' fingers will rotate "into the hand" when rotated positively in Z.
	'
	' The 180 degree rotation is needed because the Y axis of the guide bones points upwards. Finger curls
	' in the X->Y direction, so in the case of the left hand the fingers will curl backwards unless a 
	' 180 degree X rotation is applied. (An alternative is to make the finger rotations negative ,
	' but this would make the Lhand/Rhand sliders inconsistent)

	'
	' Set the Z prefered angle to 3 on 2nd & 3rd finger joints so that they will bend the right way in IK
	'

	'Index
	MatchTransform oIndex.Bones(0), "BipedPropGuide.bone19", siRot
	rx_current = GetAlignmentFingerRoll( oIndex.Bones(0), l_PalmNormal, false )
	Rotate oIndex.Bones(0), rx_current, 0, 0, siRelative, siAdd, siObj, siX

	MatchTransform oIndex.Bones(1), "BipedPropGuide.bone18", siRot
	Rotate oIndex.Bones(1), rx_current, 0, 0, siRelative, siAdd, siObj, siX
	oIndex.Bones(1).Joint.Parameters("prefrotz").value = 3

	MatchTransform oIndex.Bones(2), "BipedPropGuide.bone17", siRot
	Rotate oIndex.Bones(2), rx_current, 0, 0, siRelative, siAdd, siObj, siX
	oIndex.Bones(2).Joint.Parameters("prefrotz").value = 3

	'Middle
	MatchTransform oMiddle.Bones(0), "BipedPropGuide.bone20", siRot
	rx_current = GetAlignmentFingerRoll( oMiddle.Bones(0), l_PalmNormal, false )
	Rotate oMiddle.Bones(0), rx_current, 0, 0, siRelative, siAdd, siObj, siX

	MatchTransform oMiddle.Bones(1), "BipedPropGuide.bone21", siRot
	Rotate oMiddle.Bones(1), rx_current, 0, 0, siRelative, siAdd, siObj, siX
	oMiddle.Bones(1).Joint.Parameters("prefrotz").value = 3

	MatchTransform oMiddle.Bones(2), "BipedPropGuide.bone22", siRot
	Rotate oMiddle.Bones(2), rx_current, 0, 0, siRelative, siAdd, siObj, siX
	oMiddle.Bones(2).Joint.Parameters("prefrotz").value = 3

	'Ring
	MatchTransform oRing.Bones(0), "BipedPropGuide.bone23", siRot
	rx_current = GetAlignmentFingerRoll( oRing.Bones(0), l_PalmNormal, false )
	Rotate oRing.Bones(0), rx_current, 0, 0, siRelative, siAdd, siObj, siX

	MatchTransform oRing.Bones(1), "BipedPropGuide.bone24", siRot
	Rotate oRing.Bones(1), rx_current, 0, 0, siRelative, siAdd, siObj, siX
	oRing.Bones(1).Joint.Parameters("prefrotz").value = 3

	MatchTransform oRing.Bones(2), "BipedPropGuide.bone25", siRot
	Rotate oRing.Bones(2), rx_current, 0, 0, siRelative, siAdd, siObj, siX
	oRing.Bones(2).Joint.Parameters("prefrotz").value = 3

	'Pinky
	MatchTransform oPinky.Bones(0), "BipedPropGuide.bone26", siRot
	rx_current = GetAlignmentFingerRoll( oPinky.Bones(0), l_PalmNormal, false )
	Rotate oPinky.Bones(0), rx_current, 0, 0, siRelative, siAdd, siObj, siX

	MatchTransform oPinky.Bones(1), "BipedPropGuide.bone27", siRot
	Rotate oPinky.Bones(1), rx_current, 0, 0, siRelative, siAdd, siObj, siX
	oPinky.Bones(1).Joint.Parameters("prefrotz").value = 3

	MatchTransform oPinky.Bones(2), "BipedPropGuide.bone28", siRot
	Rotate oPinky.Bones(2), rx_current, 0, 0, siRelative, siAdd, siObj, siX
	oPinky.Bones(2).Joint.Parameters("prefrotz").value = 3

	'
	' Toggle the visibility of the roots
	'
	SelectObj rig &".LThumbRoot,"&rig&".LIndexRoot,"&rig&".LMiddleRoot,"&rig&".LRingRoot,"&rig&".LPinkyRoot", , True
	ToggleVisibility	

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
' Attach Feet
'---------------------------------------------
function AS_attach_feet(in_rigModel, out_valid)

	out_valid = False
	
	dim oRoot, oLeg, oFoot

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

	SetValue in_rigModel & ".RThigh.bone.length",	GetValue("BipedPropGuide.bone42.bone.length")
	SetValue in_rigModel & ".RShin.bone.length",	GetValue("BipedPropGuide.bone43.bone.length")
	SetValue in_rigModel & ".RFoot.bone.length",	GetValue("BipedPropGuide.bone44.bone.length")
	SetValue in_rigModel & ".RToe.bone.length",		GetValue("BipedPropGuide.bone45.bone.length")
	SetValue in_rigModel & ".LThigh.bone.length",	GetValue("BipedPropGuide.bone38.bone.length")
	SetValue in_rigModel & ".LShin.bone.length",	GetValue("BipedPropGuide.bone39.bone.length")
	SetValue in_rigModel & ".LFoot.bone.length",	GetValue("BipedPropGuide.bone40.bone.length")
	SetValue in_rigModel & ".LToe.bone.length",		GetValue("BipedPropGuide.bone61.bone.length")

	'
	' For the thumbs we add an extra rotation of 90 in X. 
	' This will line the thumbs up so they rotate "into the hand", instead 
	' of downward like the other fingers
	'
	dim oThighGuide, oShinGuide, oFootGuide, oToeGuide
	dim oRot

	set oRot = XSIMath.CreateVector3


	'
	' GET LEFT LEG OBJECTS
	'
	set oRoot = Application.ActiveSceneRoot
	set oLeg = oRoot.FindChild(in_rigModel & ".LLegRoot")
	set oFoot = oLeg.Effector.Children("LRootFoot")

	set oThighGuide = oRoot.FindChild("BipedPropGuide.bone38")
	set oShinGuide  = oRoot.FindChild("BipedPropGuide.bone39")
	set oFootGuide  = oRoot.FindChild("BipedPropGuide.bone40")
	set oToeGuide   = oRoot.FindChild("BipedPropGuide.bone61")

	'
	' LEFT LEG ALIGNMENT
	'
	oThighGuide.Kinematics.Global.Transform.GetRotationXYZAngles oRot
	Rotate oLeg.Bones(0), XSIMath.RadiansToDegrees(oRot.x)-90, XSIMath.RadiansToDegrees(oRot.y), XSIMath.RadiansToDegrees(oRot.z), siAbsolute, siGlobal, siObj, siXYZ

	oShinGuide.Kinematics.Global.Transform.GetRotationXYZAngles oRot
	Rotate oLeg.Bones(1), XSIMath.RadiansToDegrees(oRot.x)-90, XSIMath.RadiansToDegrees(oRot.y), XSIMath.RadiansToDegrees(oRot.z), siAbsolute, siGlobal, siObj, siXYZ

	'
	' LEFT FOOT ALIGNMENT
	'
	oFootGuide.Kinematics.Global.Transform.GetRotationXYZAngles oRot
	Rotate oFoot.Bones(0), XSIMath.RadiansToDegrees(oRot.x)-180, XSIMath.RadiansToDegrees(oRot.y), XSIMath.RadiansToDegrees(oRot.z), siAbsolute, siGlobal, siObj, siXYZ

	oToeGuide.Kinematics.Global.Transform.GetRotationXYZAngles oRot
	Rotate oFoot.Bones(1), XSIMath.RadiansToDegrees(oRot.x)-180, XSIMath.RadiansToDegrees(oRot.y), XSIMath.RadiansToDegrees(oRot.z), siAbsolute, siGlobal, siObj, siXYZ

	'---------------------------------------------------------------------------------

	'
	' GET RIGHT LEG OBJECTS
	'
	set oLeg = oRoot.FindChild(in_rigModel & ".RLegRoot")
	set oFoot = oLeg.Effector.Children("RRootFoot")


	set oThighGuide = oRoot.FindChild("BipedPropGuide.bone42")
	set oShinGuide  = oRoot.FindChild("BipedPropGuide.bone43")
	set oFootGuide  = oRoot.FindChild("BipedPropGuide.bone44")
	set oToeGuide   = oRoot.FindChild("BipedPropGuide.bone45")

	'
	' RIGHT LEG ALIGNMENT
	'
	oThighGuide.Kinematics.Global.Transform.GetRotationXYZAngles oRot
	Rotate oLeg.Bones(0), XSIMath.RadiansToDegrees(oRot.x)-90, XSIMath.RadiansToDegrees(oRot.y), XSIMath.RadiansToDegrees(oRot.z), siAbsolute, siGlobal, siObj, siXYZ

	oShinGuide.Kinematics.Global.Transform.GetRotationXYZAngles oRot
	Rotate oLeg.Bones(1), XSIMath.RadiansToDegrees(oRot.x)-90, XSIMath.RadiansToDegrees(oRot.y), XSIMath.RadiansToDegrees(oRot.z), siAbsolute, siGlobal, siObj, siXYZ

	'
	' RIGHT FOOT ALIGNMENT
	'
	oFootGuide.Kinematics.Global.Transform.GetRotationXYZAngles oRot
	Rotate oFoot.Bones(0), XSIMath.RadiansToDegrees(oRot.x), XSIMath.RadiansToDegrees(oRot.y), XSIMath.RadiansToDegrees(oRot.z), siAbsolute, siGlobal, siObj, siXYZ

	oToeGuide.Kinematics.Global.Transform.GetRotationXYZAngles oRot
	Rotate oFoot.Bones(1), XSIMath.RadiansToDegrees(oRot.x), XSIMath.RadiansToDegrees(oRot.y), XSIMath.RadiansToDegrees(oRot.z), siAbsolute, siGlobal, siObj, siXYZ

	
	set r = in_rigModel
	
	refresh
	
	SelectObj r&".RLegRoot,"&r&".LLegRoot,"&r&".RRootFoot,"&r&".LRootFoot"
	ToggleVisibility

end function
'-----------------------------------
' Draw Spine
'----------------------------------- 
function AS_draw_spine(in_nbVertebra, in_model, in_skeltype)
	
	dim vert(), size, i, mySkeleton, Children, body
	
	size = in_nbVertebra
	redim vert(size)

	set root = Application.ActiveSceneRoot
	set guide = root.findchild("BipedPropGuide")
	set SpineBase = guide.findchild("SpineBase")
	set CageStart = guide.findchild("RibCageStart")	
	set CageEnd = guide.findchild("RibCageEnd")
	set spline = guide.findchild("SpineSpline")
	set body = in_model.findchild("UpperBody")
	

	set oTrans = spline.model.Kinematics.Local.Transform
	
	start = spline.ActivePrimitive.Geometry.Curves(0).EvaluatePositionFromPercentage(0)
 	for i = 0 to size
		curveData = spline.ActivePrimitive.Geometry.Curves(0).EvaluatePositionFromPercentage(((i)/(in_nbVertebra)) * 100)
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
	

	MySkeleton(mySkeleton.count -2).name = "Chest"
	MySkeleton(mySkeleton.count -1).name = "ChestEffector"
	MySkeleton(0).name = "SpineRoot"
	
	'fix the parenting for the spine

	body.addchild mySkeleton(0)
	
	dim head, leftarm, rightarm
	
	set head= in_model.findchild("HeadRoot")
	set lshoulder = in_model.findchild("LRootShoulder")		
	set rshoulder = in_model.findchild("RRootShoulder")
	
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
	
	for i = 1 to (mySkeleton.count -2)
		AddToGroup in_model & ".envelope_Group", mySkeleton(i)
	next	
	
	if in_skeltype = "traditional" then
	
		MySkeleton(mySkeleton.count - 2).addchild MySkeleton(mySkeleton.count - 1)
		
		'make it a proper 3X style skeleton:		
		SetValue MySkeleton(mySkeleton.count -1) & ".kine.local.cnsori", False
		SetValue MySkeleton(mySkeleton.count -1) & ".kine.local.cnspos", False
	
		for i = 0 to (mySkeleton.count -1)
			mySkeleton(i).AddProperty("Display Property")
			mySkeleton(i).properties("display").wirecol.value = 805	
		next
		
	end if
			
end function
'--------------------------------------
' RT Match
'--------------------------------------
function rt_match (in_source, in_target)


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
	
	SelectObj in_target, "BRANCH"

	Scale , sx, sy, sz, siAbsolute, siGlobal, siObj, siXYZ
	Rotate , rx, ry, rz, siAbsolute, siGlobal, siObj, siXYZ
	Translate , tx, ty, tz, siAbsolute, siGlobal, siObj, siXYZ
	
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




































'---------------------------------------------
'*********************************************
'*********************************************
'*********************************************

' Attach Boxes

'*********************************************
'*********************************************
'*********************************************
'---------------------------------------------





'-----------------------------------
' Attach Boxes
'----------------------------------- 
function attach_boxes	(in_nbVertebra)

	dim mpath, myModel

	set myModel = GetPresetModel( "Biped_Box", "Biped_Box" )

	attach_boxes = myModel
	
	AB_model_and_GlobalSRT_match myModel, valid
	if valid = False then exit function
	
	AB_match_up myModel
	
	AB_draw_spine in_nbVertebra, myModel
	
	AB_delete_clusters myModel
	
	make_DefaultPose myModel 
	
	applySynoptic myModel , 1
		
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
' Match up
'---------------------------------------------
function AB_match_up(in_model)

	'first match the objects running down the hierarchy
	dim guide
	
	set root = Application.ActiveSceneRoot
	
	set guide = root.FindChild("BipedPropGuide")
	set constraints = CreateObject("XSI.Collection")


	t_match "BipedPropGuide.cog", in_model & ".UpperBody"
	
	t_match2 guide.FindChild("RibCageStart"), in_model.FindChild("Chest"), constraints 
	t_match2 guide.FindChild("RibCageEnd"), in_model.FindChild("Neck"), constraints 
	t_match2 guide.FindChild("Neck"), in_model.FindChild("Head"), constraints 


	t_match2 guide.FindChild("LLeg"), in_model.FindChild("LThigh"), constraints 
	t_match2 guide.FindChild("LKnee"), in_model.FindChild("LShin"), constraints 		
	t_match2 guide.FindChild("LFoot"), in_model.FindChild("LFoot"), constraints 			
	t_match2 guide.FindChild("LHeel"), in_model.FindChild("LToe"), constraints 	
			
	t_match2 guide.FindChild("RLeg"), in_model.FindChild("RThigh"), constraints 	
	t_match2 guide.FindChild("RKnee"), in_model.FindChild("RShin"), constraints 		
	t_match2 guide.FindChild("RFoot"), in_model.FindChild("RFoot"), constraints 			
	t_match2 guide.FindChild("RHeel"), in_model.FindChild("RToe"), constraints 		

	t_match2 guide.FindChild("LShoulderStart"), in_model.FindChild("LShoulder"), constraints 		
	t_match2 guide.FindChild("LShoulder"), in_model.FindChild("LBicep"), constraints 	
	t_match2 guide.FindChild("LElbow"), in_model.FindChild("LForearm"), constraints 	
	t_match2 guide.FindChild("LHand"), in_model.FindChild("LHand"), constraints 	
	t_match2 guide.FindChild("LHand"), in_model.FindChild("LHand_nf"), constraints 	


	t_match2 guide.FindChild("RShoulderStart"), in_model.FindChild("RShoulder"), constraints 		
	t_match2 guide.FindChild("RShoulder"), in_model.FindChild("RBicep"), constraints 	
	t_match2 guide.FindChild("RElbow"), in_model.FindChild("RForearm"), constraints 	
	t_match2 guide.FindChild("RHand"), in_model.FindChild("RHand"), constraints 	
	t_match2 guide.FindChild("RHand"), in_model.FindChild("RHand_nf"), constraints 	


	t_match2 guide.FindChild("LPinky1"), in_model.FindChild("LPinky1"), constraints 
	t_match2 guide.FindChild("LRing1"), in_model.FindChild("LRing1"), constraints 
	t_match2 guide.FindChild("LMiddle1"), in_model.FindChild("LMiddle1"), constraints 
	t_match2 guide.FindChild("LIndex1"), in_model.FindChild("LIndex1"), constraints 
	t_match2 guide.FindChild("LThumb1"), in_model.FindChild("LThumb1"), constraints 

	t_match2 guide.FindChild("LPinky2"), in_model.FindChild("LPinky2"), constraints 
	t_match2 guide.FindChild("LRing2"), in_model.FindChild("LRing2"), constraints 
	t_match2 guide.FindChild("LMiddle2"), in_model.FindChild("LMiddle2"), constraints 
	t_match2 guide.FindChild("LIndex2"), in_model.FindChild("LIndex2"), constraints 
	t_match2 guide.FindChild("LThumb2"), in_model.FindChild("LThumb2"), constraints 
	
	t_match2 guide.FindChild("LPinky3"), in_model.FindChild("LPinky3"), constraints 
	t_match2 guide.FindChild("LRing3"), in_model.FindChild("LRing3"), constraints 
	t_match2 guide.FindChild("LMiddle3"), in_model.FindChild("LMiddle3"), constraints 
	t_match2 guide.FindChild("LIndex3"), in_model.FindChild("LIndex3"), constraints 
	t_match2 guide.FindChild("LThumb3"), in_model.FindChild("LThumb3"), constraints 
	


	t_match2 guide.FindChild("RPinky1"), in_model.FindChild("RPinky1"), constraints 
	t_match2 guide.FindChild("RRing1"), in_model.FindChild("RRing1"), constraints 
	t_match2 guide.FindChild("RMiddle1"), in_model.FindChild("RMiddle1"), constraints 
	t_match2 guide.FindChild("RIndex1"), in_model.FindChild("RIndex1"), constraints 
	t_match2 guide.FindChild("RThumb1"), in_model.FindChild("RThumb1"), constraints 

	t_match2 guide.FindChild("RPinky2"), in_model.FindChild("RPinky2"), constraints 
	t_match2 guide.FindChild("RRing2"), in_model.FindChild("RRing2"), constraints 
	t_match2 guide.FindChild("RMiddle2"), in_model.FindChild("RMiddle2"), constraints 
	t_match2 guide.FindChild("RIndex2"), in_model.FindChild("RIndex2"), constraints 
	t_match2 guide.FindChild("RThumb2"), in_model.FindChild("RThumb2"), constraints 
	
	t_match2 guide.FindChild("RPinky3"), in_model.FindChild("RPinky3"), constraints 
	t_match2 guide.FindChild("RRing3"), in_model.FindChild("RRing3"), constraints 
	t_match2 guide.FindChild("RMiddle3"), in_model.FindChild("RMiddle3"), constraints 
	t_match2 guide.FindChild("RIndex3"), in_model.FindChild("RIndex3"), constraints 
	t_match2 guide.FindChild("RThumb3"), in_model.FindChild("RThumb3"), constraints 


	' now match up the clusters

	t_match "BipedPropGuide.RLeg", in_model & ".cc_UpperBody"
	t_match "BipedPropGuide.LLeg", in_model & ".cc_UpperBody1"
	t_match "BipedPropGuide.SpineBase", in_model & ".cc_UpperBody2"		
	
	t_match "BipedPropGuide.RibCageStart", in_model & ".cc_Chest"	
	t_match "BipedPropGuide.LShoulderStart", in_model & ".cc_Chest1"	
	t_match "BipedPropGuide.RShoulderStart", in_model & ".cc_Chest2"
	
	t_match "BipedPropGuide.Neck", in_model & ".cc_Neck"

	
	t_match "BipedPropGuide.LKnee", in_model & ".cc_LThigh"
	t_match "BipedPropGuide.LFoot", in_model & ".cc_LShin"
	t_match "BipedPropGuide.LHeel", in_model & ".cc_LFoot"	
	t_match "BipedPropGuide.LToe", in_model & ".cc_LToe"	
	
	
	t_match "BipedPropGuide.RKnee", in_model & ".cc_RThigh"
	t_match "BipedPropGuide.RFoot", in_model & ".cc_RShin"
	t_match "BipedPropGuide.RHeel", in_model & ".cc_RFoot"	
	t_match "BipedPropGuide.RToe", in_model & ".cc_RToe"	


	t_match "BipedPropGuide.LShoulder", in_model & ".cc_LShoulder"
	t_match "BipedPropGuide.LElbow", in_model & ".cc_LBicep"	
	t_match "BipedPropGuide.LHand", in_model & ".cc_LForearm"				
	t_match "BipedPropGuide.LHandEnd", in_model & ".cc_LHand"	
	t_match "BipedPropGuide.LIndex1", in_model & ".cc_LHand1"	
	t_match "BipedPropGuide.LPinky1", in_model & ".cc_LHand2"	
						
	t_match "BipedPropGuide.RShoulder", in_model & ".cc_RShoulder"
	t_match "BipedPropGuide.RElbow", in_model & ".cc_RBicep"	
	t_match "BipedPropGuide.RHand", in_model & ".cc_RForearm"				
	t_match "BipedPropGuide.RHandEnd", in_model & ".cc_RHand"	
	t_match "BipedPropGuide.RIndex1", in_model & ".cc_RHand1"	
	t_match "BipedPropGuide.RPinky1", in_model & ".cc_RHand2"	
					
	t_match "BipedPropGuide.LPinky2", in_model & ".cc_LPinky1"	
	t_match "BipedPropGuide.LRing2", in_model & ".cc_LRing1"
	t_match "BipedPropGuide.LMiddle2", in_model & ".cc_LMiddle1"	
	t_match "BipedPropGuide.LIndex2", in_model & ".cc_LIndex1"	
	t_match "BipedPropGuide.LThumb2", in_model & ".cc_LThumb1"	

	t_match "BipedPropGuide.LPinky3", in_model & ".cc_LPinky2"	
	t_match "BipedPropGuide.LRing3", in_model & ".cc_LRing2"	
	t_match "BipedPropGuide.LMiddle3", in_model & ".cc_LMiddle2"	
	t_match "BipedPropGuide.LIndex3", in_model & ".cc_LIndex2"	
	t_match "BipedPropGuide.LThumb3", in_model & ".cc_LThumb2"
	
	t_match "BipedPropGuide.LPinky4", in_model & ".cc_LPinky3"	
	t_match "BipedPropGuide.LRing4", in_model & ".cc_LRing3"	
	t_match "BipedPropGuide.LMiddle4", in_model & ".cc_LMiddle3"	
	t_match "BipedPropGuide.LIndex4", in_model & ".cc_LIndex3"	
	t_match "BipedPropGuide.LThumb4", in_model & ".cc_LThumb3"
	
	
	
	
	t_match "BipedPropGuide.RPinky2", in_model & ".cc_RPinky1"	
	t_match "BipedPropGuide.RRing2", in_model & ".cc_RRing1"
	t_match "BipedPropGuide.RMiddle2", in_model & ".cc_RMiddle1"	
	t_match "BipedPropGuide.RIndex2", in_model & ".cc_RIndex1"	
	t_match "BipedPropGuide.RThumb2", in_model & ".cc_RThumb1"	

	t_match "BipedPropGuide.RPinky3", in_model & ".cc_RPinky2"	
	t_match "BipedPropGuide.RRing3", in_model & ".cc_RRing2"	
	t_match "BipedPropGuide.RMiddle3", in_model & ".cc_RMiddle2"	
	t_match "BipedPropGuide.RIndex3", in_model & ".cc_RIndex2"	
	t_match "BipedPropGuide.RThumb3", in_model & ".cc_RThumb2"
	
	t_match "BipedPropGuide.RPinky4", in_model & ".cc_RPinky3"	
	t_match "BipedPropGuide.RRing4", in_model & ".cc_RRing3"	
	t_match "BipedPropGuide.RMiddle4", in_model & ".cc_RMiddle3"	
	t_match "BipedPropGuide.RIndex4", in_model & ".cc_RIndex3"	
	t_match "BipedPropGuide.RThumb4", in_model & ".cc_RThumb3"
	
	refresh
	DeleteObj constraints.GetAsText

end function
'-----------------------------------
' Draw Spine
'----------------------------------- 
function AB_draw_spine(in_nbVertebra, in_model)
	
	dim vert(), size, i, mySkeleton, Children, body
	
	size = in_nbVertebra
	redim vert(size)


	set root = ActiveProject.ActiveScene.Root
	set guide = root.findchild("BipedPropGuide")
	set SpineBase = guide.findchild("SpineBase")
	set CageStart = guide.findchild("RibCageStart")	
	set CageEnd = guide.findchild("RibCageEnd")
	set spline = guide.findchild("SpineSpline")
	set body = in_model.findchild("UpperBody")
	
	set oTrans = spline.model.Kinematics.Local.Transform
	
	start = spline.ActivePrimitive.Geometry.Curves(0).EvaluatePositionFromPercentage(0)
 	for i = 0 to size
		curveData = spline.ActivePrimitive.Geometry.Curves(0).EvaluatePositionFromPercentage(((i)/(in_nbVertebra)) * 100)
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
		
	size = in_nbLumber
			
	'now draw the curves for the boxes
	
	dim tracer, PathCnst, tracers, spineBoxes, dup, tempNURBS, meshReturn, sMesh, loftop, l_oShader
	dim boxChest 
	
	set tracer = in_model.findchild("tracer")	
	set PathCnst = tracer.Kinematics.AddConstraint("Path", spline, False)
	
	set tracers = CreateObject("XSI.Collection")
	set spineBoxes = CreateObject("XSI.Collection")
	
	tracers.add tracer
	
	for i = 1 to in_nbVertebra
		PathCnst.perc = (i)/(in_nbVertebra) * 100 
		set dup = Duplicate(tracer , , 2, 1, 1, 0, 0, 1, 0, 1)
		tracers.add dup
	next
	PathCnst.perc = 0
	
	MatchTransform in_model.FindChild("Chest"), MySkeleton(mySkeleton.count - 2), siRT
	
	'create boxes
	for i = 1 to in_nbVertebra
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
		AddToGroup in_model & ".envelope_Group", sMesh
	next

	DeleteObj tracers.GetAsText
	
	'copy centers
	for i = 0 to in_nbVertebra - 1
		spineBoxes(i).name = "Lumber" & i + 1
		copyCenter MySkeleton(i + 1), spineBoxes(i)		

	next	 
	
	'parenting
	
'	logmessage body
'	logmessage spineBoxes(0)
	
	
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
'---------------------------------------------
' Delete Clusters
'---------------------------------------------
function AB_delete_clusters(in_model)

	SelectObj in_model, "BRANCH"
	FreezeObj
	
	DeleteObj in_model& "." & "cc_*"
	
	DeleteObj in_model& ".*.cls.*" 
	
	DeleteObj in_model & ".RHand_nf," & in_model &".LHand_nf"
	
end function
'---------------------------------------------

'******************************************************

'   H E L P E R    S T U F F

'******************************************************
'-----------------------------------------------
' Is Component 
'---------------------------------------------
function IsComponent(in_string)
	
	dim oRoot
	IsComponent = True
	set oRoot = Application.ActiveSceneRoot
	if typename(oRoot.FindChild(in_string)) = "Nothing" then IsComponent = False
	
end function
'--------------------------------------
' T Match
'--------------------------------------
function t_match (in_source, in_target)

	dim tx, ty, tz
	
	tx = GetValue(in_source & ".kine.global.posx")
	ty = GetValue(in_source & ".kine.global.posy")
	tz = GetValue(in_source & ".kine.global.posz")
	
	Translate "B:" & in_target, tx, ty, tz, siAbsolute, siGlobal, siObj, siXYZ
	
end function
'--------------------------------------
' T Match2
'--------------------------------------
function t_match2 (in_source, in_target, in_constrainList)

	dim tx, ty, tz
	
	set Cnst = in_target.Kinematics.AddConstraint("Direction", in_source.children(0), False)
	in_constrainList.add Cnst	
	
	tx = GetValue(in_source & ".kine.global.posx")
	ty = GetValue(in_source & ".kine.global.posy")
	tz = GetValue(in_source & ".kine.global.posz")
	
	Translate "B:" & in_target, tx, ty, tz, siAbsolute, siGlobal, siObj, siXYZ
	
end function

'-----------------------------------------------
' Copy Center
'-----------------------------------------------
function copyCenter (in_source, in_target)
	dim rx, ry, rz	
	dim tx, ty, tz
	
	rx = GetValue(in_source& ".kine.global.rotx")
	ry = GetValue(in_source& ".kine.global.roty")
	rz = GetValue(in_source& ".kine.global.rotz")
	
	tx = GetValue(in_source& ".kine.global.posx")
	ty = GetValue(in_source& ".kine.global.posy")
	tz = GetValue(in_source& ".kine.global.posz")

	Rotate in_target, rx, ry, rz, siAbsolute, siGlobal, siCtr, siXYZ
	Translate in_target, tx, ty, tz, siAbsolute, siGlobal, siCtr, siXYZ
	
end function
'-----------------------------------------------
















'---------------------------------------------
'*********************************************
'*********************************************
'*********************************************

' Attach Nulls

'*********************************************
'*********************************************
'*********************************************
'---------------------------------------------




'-----------------------------------
' Attach Nulls
'----------------------------------- 
function attach_nulls(in_nbVertebra)

	set myModel = GetPresetModel( "Biped_Null", "Biped_Null" )

	attach_nulls = myModel
		
	AN_model_and_GlobalSRT_match myModel, valid
	if valid = False then exit function
	
	AN_match_up myModel
	
	AN_draw_spine in_nbVertebra, myModel

	make_DefaultPose myModel 
	
	applySynoptic myModel , 0	

end function
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
' Match up
'---------------------------------------------
function AN_match_up(in_model)

	'first match the objects running down the hierarchy
	
	dim guide
	
	set root = Application.ActiveSceneRoot
	
	set guide = root.FindChild("BipedPropGuide")
	set constraints = CreateObject("XSI.Collection")

	t_match "BipedPropGuide.cog", in_model & ".UpperBody"
	

	t_match2  guide.FindChild("RibCageStart"), in_model.FindChild("Chest"), constraints

	t_match2 guide.FindChild("RibCageEnd"), in_model.FindChild("Neck"), constraints
	t_match2 guide.FindChild("Neck"), in_model.FindChild("Head"), constraints
	
	t_match2 guide.FindChild("LLeg"), in_model.FindChild("LThigh"), constraints
	t_match2 guide.FindChild("LKnee"), in_model.FindChild("LShin"), constraints
	t_match2 guide.FindChild("LFoot"), in_model.FindChild("LFoot"), constraints
	t_match2 guide.FindChild("LHeel"), in_model.FindChild("LToe"), constraints	
	
	t_match2 guide.FindChild("RLeg"), in_model.FindChild("RThigh"), constraints	
	t_match2 guide.FindChild("RKnee"), in_model.FindChild("RShin"), constraints
	t_match2 guide.FindChild("RFoot"), in_model.FindChild("RFoot"), constraints	
	t_match2 guide.FindChild("RHeel"), in_model.FindChild("RToe"), constraints	
	

	t_match2 guide.FindChild("LShoulderStart"), in_model.FindChild("LShoulder"), constraints
	t_match2 guide.FindChild("LShoulder"), in_model.FindChild("LBicep"), constraints	
	t_match2 guide.FindChild("LElbow"), in_model.FindChild("LForearm"), constraints				
	t_match2 guide.FindChild("LHand"), in_model.FindChild("LHand"), constraints


	t_match2 guide.FindChild("RShoulderStart"), in_model.FindChild("RShoulder"), constraints	
	t_match2 guide.FindChild("RShoulder"), in_model.FindChild("RBicep"), constraints	
	t_match2 guide.FindChild("RElbow"), in_model.FindChild("RForearm"), constraints				
	t_match2 guide.FindChild("RHand"), in_model.FindChild("RHand"), constraints					
				
					
	t_match2 guide.FindChild("LPinky1"), in_model.FindChild("LPinky1"), constraints	
	t_match2 guide.FindChild("LRing1"), in_model.FindChild("LRing1"), constraints
	t_match2 guide.FindChild("LMiddle1"), in_model.FindChild("LMiddle1"), constraints	
	t_match2 guide.FindChild("LIndex1"), in_model.FindChild("LIndex1"), constraints	
	t_match2 guide.FindChild("LThumb1"), in_model.FindChild("LThumb1"), constraints	

	t_match2 guide.FindChild("LPinky2"), in_model.FindChild("LPinky2"), constraints	
	t_match2 guide.FindChild("LRing2"), in_model.FindChild("LRing2"), constraints	
	t_match2 guide.FindChild("LMiddle2"), in_model.FindChild("LMiddle2"), constraints	
	t_match2 guide.FindChild("LIndex2"), in_model.FindChild("LIndex2"), constraints	
	t_match2 guide.FindChild("LThumb2"), in_model.FindChild("LThumb2"), constraints
	
	t_match2 guide.FindChild("LPinky3"), in_model.FindChild("LPinky3"), constraints	
	t_match2 guide.FindChild("LRing3"), in_model.FindChild("LRing3"), constraints	
	t_match2 guide.FindChild("LMiddle3"), in_model.FindChild("LMiddle3"), constraints	
	t_match2 guide.FindChild("LIndex3"), in_model.FindChild("LIndex3"), constraints	
	t_match2 guide.FindChild("LThumb3"), in_model.FindChild("LThumb3"), constraints
	


	t_match2 guide.FindChild("RPinky1"), in_model.FindChild("RPinky1"), constraints	
	t_match2 guide.FindChild("RRing1"), in_model.FindChild("RRing1"), constraints	
	t_match2 guide.FindChild("RMiddle1"), in_model.FindChild("RMiddle1"), constraints	
	t_match2 guide.FindChild("RIndex1"), in_model.FindChild("RIndex1"), constraints	
	t_match2 guide.FindChild("RThumb1"), in_model.FindChild("RThumb1"), constraints	

	t_match2 guide.FindChild("RPinky2"), in_model.FindChild("RPinky2"), constraints	
	t_match2 guide.FindChild("RRing2"), in_model.FindChild("RRing2"), constraints	
	t_match2 guide.FindChild("RMiddle2"), in_model.FindChild("RMiddle2"), constraints	
	t_match2 guide.FindChild("RIndex2"), in_model.FindChild("RIndex2"), constraints	
	t_match2 guide.FindChild("RThumb2"), in_model.FindChild("RThumb2"), constraints
	
	t_match2 guide.FindChild("RPinky3"), in_model.FindChild("RPinky3"), constraints	
	t_match2 guide.FindChild("RRing3"), in_model.FindChild("RRing3"), constraints	
	t_match2 guide.FindChild("RMiddle3"), in_model.FindChild("RMiddle3"), constraints	
	t_match2 guide.FindChild("RIndex3"), in_model.FindChild("RIndex3"), constraints	
	t_match2 guide.FindChild("RThumb3"), in_model.FindChild("RThumb3"), constraints

	refresh
	DeleteObj constraints.GetAsText


end function
'-----------------------------------
' Draw Spine
'----------------------------------- 
function AN_draw_spine(in_nbVertebra, in_model)
	
	dim vert(), size, i, mySkeleton, Children, body
	
	size = in_nbVertebra
	redim vert(size)

	set root = ActiveProject.ActiveScene.Root
	set guide = root.findchild("BipedPropGuide")
	set SpineBase = guide.findchild("SpineBase")
	set CageStart = guide.findchild("RibCageStart")	
	set CageEnd = guide.findchild("RibCageEnd")
	set spline = guide.findchild("SpineSpline")
	set body = in_model.findchild("UpperBody")
	
	set oTrans = spline.model.Kinematics.Local.Transform
	
	start = spline.ActivePrimitive.Geometry.Curves(0).EvaluatePositionFromPercentage(0)
 	for i = 0 to size
		curveData = spline.ActivePrimitive.Geometry.Curves(0).EvaluatePositionFromPercentage(((i)/(in_nbVertebra)) * 100)
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

	MySkeleton(mySkeleton.count - 2).addchild MySkeleton(mySkeleton.count - 1)
	MySkeleton(mySkeleton.count -1).name = "Chest"
	MySkeleton(0).name = "SpineRoot"
	
	'fix the parenting for the spine

	body.addchild mySkeleton(0)
				
	set SpineNulls = CreateObject("XSI.Collection")
	
	for i = 1 to in_nbVertebra
		set newNull = GetPrim ("Null")

		rt_match MySkeleton(i), newNull	
		AddProp "Display Property", newNull
		SetValue newNull& ".display.wirecol", 381
		SetValue newNull &".Name", "Lumber" & i 		
		SpineNulls.add newNull
		AddToGroup in_model & ".envelope_Group", newNull		
	next


	'parenting
	body.addchild SpineNulls(0)
	for i = 0 to SpineNulls.count - 2
		SpineNulls(i).addchild SpineNulls(i+1)
	next

	'size
	for i = 0 to SpineNulls.count - 1
		SpineNulls(i).ActivePrimitive.parameters("size").value = .3
	next

	set boxChest = in_model.findchild("Chest")
	SpineNulls(SpineNulls.count-1).addchild boxChest 
	
	SelectObj mySkeleton(0), "BRANCH"
	DeleteObj
	
	
end function
'---------------------------------------------
' Make Default Pose
'---------------------------------------------
sub make_DefaultPose(in_rigModel)
	
	logmessage "Storing Default Pose"

	SelectObj in_rigModel & ".globalSRT", "BRANCH"
	SelectChildNodes

	SetMarking "MarkingSet"
	StoreAction , , 1, "DefaultPose", True, 1, 5
	DeselectAll
	
end sub

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
		oMatParent.TransposeInPlace	'Transpose same as inverse for rot matrix
		oMatResult.Mul oMatChild, oMatParent
		oRot.SetFromMatrix3 oMatResult
		oRot.GetXYZAngles vRotAngles
		'convert result to degrees and copy to output array 
		inout_ArrayBoneRot(idx).Set XSIMath.RadiansToDegrees(vRotAngles.x),XSIMath.RadiansToDegrees(vRotAngles.y),XSIMath.RadiansToDegrees(vRotAngles.z)

	next

end sub

