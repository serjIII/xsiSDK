'******************************************************************************
' String Constants (used to translate)
'******************************************************************************
const IDS_CREATE_RIG_FROM_GUIDE_TITLE			= 1049

'***************************************************
' pschretl Feb 2004
'
' UI version of MakeQuadruped. Command version uses jscript that does not support output arguments.
' To work around this use a vbs version of the command that copies arg values from the quadruped object to output arguments.
'***************************************************
function MakeQuadrupedUI(inoutTorsoType,  inoutTorsoStretch,  inoutTorsoDivisions,  inoutIconType,  inoutMakeBelly,_
inoutBellySlide,  inoutBellyCenterPercentage, inoutHeadType,  inoutHeadStretch, inoutHeadDivisions, inoutEars,_
inoutMakeTail, inoutTailDivisions, inoutFrontRoll, inoutFrontRollDivisions, inoutBackRoll, inoutBackRollDivisions,_
inoutShadowType, inoutInspectUI)		

	On Error Resume Next

	'If using an old guide, use the old rig from guide script
	dim quadruped
	set quadruped = MakeQuadruped(	inoutTorsoType,  inoutTorsoStretch,  inoutTorsoDivisions,  inoutIconType,  inoutMakeBelly,_
						inoutBellySlide,  inoutBellyCenterPercentage, inoutHeadType,  inoutHeadStretch, inoutHeadDivisions, inoutEars,_
						inoutMakeTail, inoutTailDivisions, inoutFrontRoll, inoutFrontRollDivisions, inoutBackRoll, inoutBackRollDivisions,_
						inoutShadowType, inoutCreateShadowKeySet, false)		

	if(quadruped<>empty) then
		inoutTorsoType				= quadruped.UI.TorsoType			
		inoutTorsoStretch			= quadruped.UI.TorsoStretch		
		inoutTorsoDivisions			= quadruped.UI.TorsoDivisions
		inoutIconType				= quadruped.UI.IconType
		inoutMakeBelly				= quadruped.UI.MakeBelly
		inoutBellySlide				= quadruped.UI.BellySlide
		inoutBellyCenterPercentage	= quadruped.UI.BellyCenterPercentage
		inoutHeadType				= quadruped.UI.HeadType
		inoutHeadStretch			= quadruped.UI.HeadStretch
		inoutHeadDivisions			= quadruped.UI.HeadDivisions
		inoutEars					= quadruped.UI.Ears
		inoutMakeTail				= quadruped.UI.MakeTail
		inoutTailDivisions			= quadruped.UI.TailDivisions
		inoutFrontRoll				= quadruped.UI.FrontRoll
		inoutFrontRollDivisions		= quadruped.UI.FrontRollDivisions
		inoutBackRoll				= quadruped.UI.BackRoll
		inoutBackRollDivisions		= quadruped.UI.BackRollDivisions
		inoutShadowType				= quadruped.UI.ShadowType
		inoutCreateShadowKeySet     = quadruped.UI.CreateShadowKeySet
		inoutInspectUI				= true

		InspectObj quadruped.Sliders

	end if

	set MakeQuadrupedUI = quadruped

end function


 ' Quadraped Maker
' misner April 2002
'---------------------------------------------
' Make Quadraped
'---------------------------------------------
sub CreateRigFromQuadrupedProc

	dim valid, guide, nbSpineVertebra, nbTailVertebra, sliders, l_binspectprev, l_bchildcomp
	dim LegAnimation, FirstBActive, nbFirstRoll, SecondBActive, nbSecondRoll
	dim BindingNulls, Shoulders

	' Set temporarily the autoinspect to off, otherwise we will pop
	' multiple unwanted property editors...
	l_binspectprev = SetUserPref( siAutoInspect, False )
	l_bchildcomp = getuserpref("SI3D_NODETRANSFORM_CHILD_COMPENSATE")

	load_guide guide, valid
	if valid = False then
		' Set the autoinspect back
		SetUserPref siAutoInspect, l_binspectprev
		SetUserPref "SI3D_NODETRANSFORM_CHILD_COMPENSATE", l_bchildcomp
		exit sub
	end if
	
	get_Dial nbSpineVertebra, nbTailVertebra, LegAnimation, FirstBActive,_
	 nbFirstRoll, SecondBActive, nbSecondRoll, Shoulders, valid
	if valid = False then
		' Set the autoinspect back
		SetUserPref siAutoInspect, l_binspectprev
		SetUserPref "SI3D_NODETRANSFORM_CHILD_COMPENSATE", l_bchildcomp
		exit sub
	end if
		
	load_rig rig, valid
	if valid = False then
		' Set the autoinspect back
		SetUserPref siAutoInspect, l_binspectprev
		SetUserPref "SI3D_NODETRANSFORM_CHILD_COMPENSATE", l_bchildcomp
		exit sub
	end if
	
	
	set sliders = rig.AddProperty("Custom_parameter_list",,"Quadruped_Controls")  
	

	model_and_GlobalSRT_match guide, rig

	Attach_hips rig
	
	SpineTail_match guide, rig
	
	head_match guide, rig
	
	chest_match guide, rig
	
	match_legs guide, rig
	
	attach_feet guide, rig
	
	hookup_spine rig, nbSpineVertebra, sliders
	
	hookup_tail rig, nbSpineVertebra, sliders
	
	
	if FirstBActive = True then
		subdivide_FirstBone rig, rig.FindChild("LHumerus"), nbFirstRoll, BindingNulls
		subdivide_FirstBone rig, rig.FindChild("RHumerus"), nbFirstRoll, BindingNulls	
		subdivide_FirstBone rig, rig.FindChild("LFemur"), nbFirstRoll, BindingNulls
		subdivide_FirstBone rig, rig.FindChild("RFemur"), nbFirstRoll, BindingNulls			
	end if
		
	if SecondBActive = True then
		ProcessSecondBoneRolls rig, nbSecondRoll		
	end if
	
	if LegAnimation = 0 then
		FootRollAngle rig, sliders
		applySynoptic rig, "IK"				
	else
		fkLegs guide, rig
		applySynoptic rig, "FK"	
	end if
	
	if Shoulders = 1 then
		SwitchShoulders rig
	end if
	
	if LegAnimation = 2 then RemoveUpVectors rig
	
	make_DefaultPose rig
	
	' Set the autoinspect back
	SetUserPref siAutoInspect, l_binspectprev
	SetUserPref "SI3D_NODETRANSFORM_CHILD_COMPENSATE", l_bchildcomp

	logmessage "Build Quadruped from Guide Done."

	'
	' There should be no cycles in the finished rig
	' This will log warning if there are any.
	'
'	CycleChecking rig

	InspectObj sliders
	
end sub

'---------------------------------------------
' Apply Synoptic
'---------------------------------------------
function applySynoptic(inRig, inStyle)
	
	SelectObj inRig & ".globalSRT", "BRANCH"
	set rtn = AddProp("Synoptic Property").value("Value")
	
	if inStyle = "FK" then
		SetValue rtn & ".path", "$SI_HOME/Data/XSI_SAMPLES/Synoptic/Rig/QuadSynoptic_FK1.htm"
	else 
		SetValue rtn & ".path", "$SI_HOME/Data/XSI_SAMPLES/Synoptic/Rig/QuadSynoptic_IK1.htm"
	end if
	
end function
'---------------------------------------------
' Check Validity
'---------------------------------------------
function load_guide(out_guide, out_valid)
	
	dim ID
	ID = False
	out_valid = False
	
	'first check for the model
	
	if IsComponent("Quadruped_PropGuide") = False then
		logmessage "Quadruped Proportioning Guide not found: Operation Canceled"
		exit function
	end if
	
	
	'splines
	
	if IsComponent("Quadruped_PropGuide.spineCurve4") = False then ID = "Quadruped_PropGuide.spineCurve4"
	if IsComponent("Quadruped_PropGuide.spineCurve5") = False then ID = "Quadruped_PropGuide.spineCurve5"
	
	if ID <> False then
		logmessage "Object: " & ID & "not found in Proportioning Guide: Operation Canceled"
		exit function
	end if

	'bones
	
	if IsComponent("Quadruped_PropGuide.LHumerusBone") = False then ID = "Quadruped_PropGuide.LHumerusBone"
	if IsComponent("Quadruped_PropGuide.LUlnaBone") = False then ID = "Quadruped_PropGuide.LUlnaBone"
	if IsComponent("Quadruped_PropGuide.LMetacarpalBone") = False then ID = "Quadruped_PropGuide.LMetacarpalBone"
	if IsComponent("Quadruped_PropGuide.FLClawBone") = False then ID = "Quadruped_PropGuide.FLClawBone"
	if IsComponent("Quadruped_PropGuide.LShoulderBone") = False then ID = "Quadruped_PropGuide.LShoulderBone"
	if IsComponent("Quadruped_PropGuide.RShoulderBone") = False then ID = "Quadruped_PropGuide.RShoulderBone"
	if IsComponent("Quadruped_PropGuide.RHumerusBone") = False then ID = "Quadruped_PropGuide.RHumerusBone"
	if IsComponent("Quadruped_PropGuide.RUlnaBone") = False then ID = "Quadruped_PropGuide.RUlnaBone"
	if IsComponent("Quadruped_PropGuide.RMetaCarpalBone") = False then ID = "Quadruped_PropGuide.RMetaCarpalBone"
	if IsComponent("Quadruped_PropGuide.FRClawBone") = False then ID = "Quadruped_PropGuide.FRClawBone"
	if IsComponent("Quadruped_PropGuide.neckBone") = False then ID = "Quadruped_PropGuide.neckBone"
	if IsComponent("Quadruped_PropGuide.headBone") = False then ID = "Quadruped_PropGuide.headBone"
	if IsComponent("Quadruped_PropGuide.RFemurBone") = False then ID = "Quadruped_PropGuide.RFemurBone"
	if IsComponent("Quadruped_PropGuide.RTibiaBone") = False then ID = "Quadruped_PropGuide.RTibiaBone"
	if IsComponent("Quadruped_PropGuide.RMetarsalBone") = False then ID = "Quadruped_PropGuide.RMetarsalBone"
	if IsComponent("Quadruped_PropGuide.BRClawBone") = False then ID = "Quadruped_PropGuide.BRClawBone"
	if IsComponent("Quadruped_PropGuide.LFemurBone") = False then ID = "Quadruped_PropGuide.LFemurBone"
	if IsComponent("Quadruped_PropGuide.LTibiaBone") = False then ID = "Quadruped_PropGuide.LTibiaBone"
	if IsComponent("Quadruped_PropGuide.LMetarsalBone") = False then ID = "Quadruped_PropGuide.LMetarsalBone"
	if IsComponent("Quadruped_PropGuide.BLClawBone") = False then ID = "Quadruped_PropGuide.BLClawBone"

	if ID <> False then
		logmessage "Object: " & ID & "not found in Proportioning Guide: Operation Canceled"
		exit function
	end if

	'boxes
	
	if IsComponent("Quadruped_PropGuide.globalSRT") = False then ID = "Quadruped_PropGuide.globalSRT"
	if IsComponent("Quadruped_PropGuide.LMetacarpal") = False then ID = "Quadruped_PropGuide.LMetacarpal"
	if IsComponent("Quadruped_PropGuide.LForeClaw") = False then ID = "Quadruped_PropGuide.LForeClaw"
	if IsComponent("Quadruped_PropGuide.LForeClawTip") = False then ID = "Quadruped_PropGuide.LForeClawTip"
	if IsComponent("Quadruped_PropGuide.FRPivot") = False then ID = "Quadruped_PropGuide.FRPivot"
	if IsComponent("Quadruped_PropGuide.RMetacarpal") = False then ID = "Quadruped_PropGuide.RMetacarpal"
	if IsComponent("Quadruped_PropGuide.RForeClaw") = False then ID = "Quadruped_PropGuide.RForeClaw"
	if IsComponent("Quadruped_PropGuide.RForeClawTip") = False then ID = "Quadruped_PropGuide.RForeClawTip"
	if IsComponent("Quadruped_PropGuide.FLPivot") = False then ID = "Quadruped_PropGuide.FLPivot"
	if IsComponent("Quadruped_PropGuide.RibCageEnd") = False then ID = "Quadruped_PropGuide.RibCageEnd"
	if IsComponent("Quadruped_PropGuide.RShoulder") = False then ID = "Quadruped_PropGuide.RShoulder"
	if IsComponent("Quadruped_PropGuide.RHumerus") = False then ID = "Quadruped_PropGuide.RHumerus"
	if IsComponent("Quadruped_PropGuide.RUlna") = False then ID = "Quadruped_PropGuide.RUlna"
	if IsComponent("Quadruped_PropGuide.LShoulder") = False then ID = "Quadruped_PropGuide.LShoulder"
	if IsComponent("Quadruped_PropGuide.LHumerus") = False then ID = "Quadruped_PropGuide.LHumerus"
	if IsComponent("Quadruped_PropGuide.LUlna") = False then ID = "Quadruped_PropGuide.LUlna"
	if IsComponent("Quadruped_PropGuide.SpineChestDepth") = False then ID = "Quadruped_PropGuide.SpineChestDepth"
	if IsComponent("Quadruped_PropGuide.Neck") = False then ID = "Quadruped_PropGuide.Neck"
	if IsComponent("Quadruped_PropGuide.Head") = False then ID = "Quadruped_PropGuide.Head"
	if IsComponent("Quadruped_PropGuide.SpineBase") = False then ID = "Quadruped_PropGuide.SpineBase"
	if IsComponent("Quadruped_PropGuide.TailStart") = False then ID = "Quadruped_PropGuide.TailStart"
	if IsComponent("Quadruped_PropGuide.TailStartDepth") = False then ID = "Quadruped_PropGuide.TailStartDepth"
	if IsComponent("Quadruped_PropGuide.TailEnd") = False then ID = "Quadruped_PropGuide.TailEnd"
	if IsComponent("Quadruped_PropGuide.TailEndDepth") = False then ID = "Quadruped_PropGuide.TailEndDepth"
	if IsComponent("Quadruped_PropGuide.LFemur") = False then ID = "Quadruped_PropGuide.LFemur"
	if IsComponent("Quadruped_PropGuide.LTibia") = False then ID = "Quadruped_PropGuide.LTibia"
	if IsComponent("Quadruped_PropGuide.RFemur") = False then ID = "Quadruped_PropGuide.RFemur"
	if IsComponent("Quadruped_PropGuide.RTibia") = False then ID = "Quadruped_PropGuide.RTibia"
	if IsComponent("Quadruped_PropGuide.SpineHipDepth") = False then ID = "Quadruped_PropGuide.SpineHipDepth"
	if IsComponent("Quadruped_PropGuide.LMetarsal") = False then ID = "Quadruped_PropGuide.LMetarsal"
	if IsComponent("Quadruped_PropGuide.LHindClaw") = False then ID = "Quadruped_PropGuide.LHindClaw"
	if IsComponent("Quadruped_PropGuide.LHindClawTip") = False then ID = "Quadruped_PropGuide.LHindClawTip"
	if IsComponent("Quadruped_PropGuide.BLPivot") = False then ID = "Quadruped_PropGuide.BLPivot"
	if IsComponent("Quadruped_PropGuide.RMetarsal") = False then ID = "Quadruped_PropGuide.RMetarsal"
	if IsComponent("Quadruped_PropGuide.RHindClaw") = False then ID = "Quadruped_PropGuide.RHindClaw"
	if IsComponent("Quadruped_PropGuide.RHindClawTip") = False then ID = "Quadruped_PropGuide.RHindClawTip"
	if IsComponent("Quadruped_PropGuide.BRPivot") = False then ID = "Quadruped_PropGuide.BRPivot"
	if IsComponent("Quadruped_PropGuide.hipBone") = False then ID = "Quadruped_PropGuide.hipBone"
	
	if ID <> False then
		logmessage "Object: " & ID & "not found in Proportioning Guide: Operation Canceled"
		exit function
	end if

	set oRoot = Application.ActiveProject.ActiveScene.Root
	set out_guide = oRoot.FindChild("Quadruped_PropGuide")
	
	out_valid = True

end function
'---------------------------------------------
' Is Component 
'---------------------------------------------
function IsComponent(in_string)
	
	dim oRoot
	IsComponent = True
	set oRoot = Application.ActiveProject.ActiveScene.Root
	if typename(oRoot.FindChild(in_string)) = "Nothing" then IsComponent = False
	
end function

'---------------------------------------------
' Get Dialogue
'---------------------------------------------
function get_Dial(out_nbSpineVertebra, out_nbTailVertebra, out_LegAnimation,_
		out_FirstBActive, out_nbFirstRoll, out_SecondBActive, out_nbSecondRoll,_
		out_Shoulders, out_valid)
	
	dim sroot, UI

	set sroot = ActiveProject.ActiveScene.Root

	set UI = sroot.AddProperty("Rig_From_Quadruped_01", 0, "Rig From Quadruped")

	On Error Resume Next
	inspectobj UI,,XSIUtils.Translate( IDS_CREATE_RIG_FROM_GUIDE_TITLE, "XSISCRIPTS" ), siModal
	
	if Err.Number <> 0 then
		DeleteObj UI
		out_valid = False
		exit function
	end if
	
	On Error Goto 0
	
	out_nbSpineVertebra= GetValue(UI & ".nb_Spine_Vertebra")
	out_nbTailVertebra = GetValue(UI & ".nb_Tail_Vertebra")

	out_LegAnimation= GetValue(UI & ".LegAnimation")
	out_FirstBActive = GetValue(UI & ".FirstBoneRollActive")
	out_nbFirstRoll= GetValue(UI & ".nbFirstRoll")
	out_SecondBActive= GetValue(UI & ".SecondBoneRollActive")
	out_nbSecondRoll= GetValue(UI & ".nbSecondRoll")		
	out_Shoulders = GetValue(UI & ".Shoulders")					

	DeleteObj UI	
	out_valid = True
	
end function
'---------------------------------------------
' Load Guide
'---------------------------------------------
function load_rig (out_rig, out_valid)

	out_valid = false

	on error resume next

	set out_rig = GetPresetModel( "Quadruped_Rig", "Quadruped_Rig" )
	
	if Err.Number <> 0 then exit function
	on error goto 0
	out_valid = true

end function
'---------------------------------------------
' Model and Global SRT Match
'---------------------------------------------
function model_and_GlobalSRT_match(in_guide, in_rig)

	dim oRoot, PModel, PgSRT, RiggSRT
	
	set PgSRT = in_guide.FindChild("globalSRT")
	set RiggSRT = in_rig.FindChild("globalSRT")
	
	'match up the models
	rt_match in_guide, in_rig
	
	'match up the globalSRT's
	rt_match PgSRT, RiggSRT
	
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
'---------------------------------------------
' Attach Hips
'---------------------------------------------
function Attach_hips (in_rigModel)

	out_valid = False	
	
	setuserpref("SI3D_CONSTRAINT_COMPENSATION_MODE"), 0
	SelectObj in_rigModel & ".BackParent", "BRANCH"
	MatchTransform , "Quadruped_PropGuide.cog", siTrn
	
	'now match the shape of the hips
	SelectObj in_rigModel & ".hipBone", , True
	FreezeObj
	AddToSelection "Quadruped_PropGuide.hipBone", , True
	x = selection(0).activeprimitive.geometry.points.positionarray
	y = selection(1).activeprimitive.geometry.points.positionarray
	for i = 0 to ubound(x,2)
		x(0,i) = y(0,i)
		x(1,i) = y(1,i)
		x(2,i) = y(2,i)
	next
	selection(0).activeprimitive.geometry.points.positionarray = x
	Refresh
	
	'get the hip center lined up
	SetUserPref "SI3D_CONSTRAINT_COMPENSATION_MODE", 1
	SelectGeometryComponents "Quadruped_Rig.hipBone.pnt[13,16]"
	 
	SetUserPref "SI3D_NODETRANSFORM_CHILD_COMPENSATE", 0
	
	SelectObj in_rigModel & ".LHindLegRoot," & in_rigModel & ".RHindLegRoot"
	CutObj		
	dim sx,sy,sz
	setuserpref("SI3D_CONSTRAINT_COMPENSATION_MODE"), 1
	sx = GetValue("Quadruped_PropGuide.hipBone.kine.global.sclx")
	sy = GetValue("Quadruped_PropGuide.hipBone.kine.global.scly")	
	sz = GetValue("Quadruped_PropGuide.hipBone.kine.global.sclz")	
	Scale in_rigModel & ".hipBone", sx, sy, sz, siAbsolute, siGlobal, siObj, siXYZ
	ParentObj in_rigModel & ".hipBone", in_rigModel & ".LHindLegRoot"
	ParentObj in_rigModel & ".hipBone", in_rigModel & ".RHindLegRoot"

	MatchTransform in_rigModel & ".hipBone", "Quadruped_PropGuide.hipBone", siTrn
	
	'now match the top of the legs
	MatchTransform in_rigModel & ".LHindLegRoot", "Quadruped_PropGuide.LFemur", siTrn
	MatchTransform in_rigModel & ".RHindLegRoot", "Quadruped_PropGuide.RFemur", siTrn

	'match the upvectors with the top of the legs
	dim x1, y1, z1, x2, y2, z2
	x1  = GetValue("Quadruped_PropGuide.LFemur.kine.global.posx")
	x2  = GetValue("Quadruped_PropGuide.RFemur.kine.global.posx")	
	

	Translate "B:" & in_rigModel & ".BLUpVParent", x1, 0, 0, siAbsolute, siGlobal, siObj, siX
	Translate "B:" & in_rigModel & ".BRUpVParent" , x2, 0, 0, siAbsolute, siGlobal, siObj, siX
		
end function
'---------------------------------------------
' SpineTail match
'---------------------------------------------
function SpineTail_match(in_g, in_r)
	
	'the spine
	
	t_match in_g & ".RibCageEnd", in_r & ".FrontParent"
	t_match in_g & ".SpineBase", in_r & ".spine_start"				
	t_match in_g & ".SpineChestDepth", in_r & ".chestDepth"
	t_match in_g & ".SpineHipDepth", in_r & ".hipDepth"

	
	t_match in_g & ".TailStart", in_r & ".tailStartParent"
	t_match in_g & ".TailEnd", in_r & ".tailEndParent"				
	t_match in_g & ".TailStartDepth", in_r & ".tailStartDepth"
	t_match in_g & ".TailEndDepth", in_r & ".tailEndDepth"

	in_r.FindChild("tailStart").Kinematics.AddConstraint "Position", in_r.FindChild("tailStartParent"), False

end function
'---------------------------------------------
function t_match (in_source, in_target)
'---------------------------------------------

	dim tx, ty, tz

	tx = GetValue(in_source & ".kine.global.posx")
	ty = GetValue(in_source & ".kine.global.posy")
	tz = GetValue(in_source & ".kine.global.posz")

	Translate "B:" & in_target, tx, ty, tz, siAbsolute, siGlobal, siObj, siXYZ
	
end function
'---------------------------------------------
' Head match
'---------------------------------------------
function head_match(in_g, in_r)
	
	
	'match the bone lengths
	dim b1,b2
	b1 = GetValue(in_g & ".neckBone.bone.length")
	b2 = GetValue(in_g & ".headBone.bone.length")

	SetValue in_r & ".neck.bone.length", b1
	SetValue in_r & ".head.bone.length", b2
	
	'match the positions
	dim c1, c2
	c1 = SIApplyCns ("Position", in_r & ".head", in_g & ".Neck")
	c2 = SIApplyCns ("Position", in_r & ".HeadEff", in_g & ".Head")

	refresh

	root_Alignment in_r, "neck"
	
	set_prefangles in_r & ".neck"
	set_prefangles in_r & ".head"

	DeleteObj c1
	DeleteObj c2
	
end function

'---------------------------------------------
' Root Alignment
'---------------------------------------------
function root_Alignment(in_model, in_rootstring)

	in_root = in_model.FindChild(in_rootstring)

	dim mySkeleton, BoneIndex, rroot, rbone, zero, newrot
	set mySkeleton =  GetSkeleton(in_root, BoneIndex ) 	
	
	set boneRot = XSIMath.CreateRotation
	set zero = XSIMath.CreateRotation
		
	mySkeleton(1).Kinematics.local.Transform.GetRotation boneRot
	boneRot.GetXYZAnglesValues x,y,z

	Rotate mySkeleton(0), 0, 0, XSIMath.RadiansToDegrees(z), siRelative, siLocal, siObj, siXYZ
	Rotate mySkeleton(0), 0, XSIMath.RadiansToDegrees(y), 0, siRelative, siLocal, siObj, siXYZ
	Rotate mySkeleton(0), XSIMath.RadiansToDegrees(x), 0, 0, siRelative, siLocal, siObj, siXYZ

	set boneTrans = mySkeleton(1).Kinematics.local.Transform
	zero.SetFromXYZAnglesValues 0,0,0 	
	
	boneTrans.SetRotation zero 
	
	
	mySkeleton(1).Kinematics.local.Transform = boneTrans 
		
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
'---------------------------------------------
' Front match
'---------------------------------------------
function chest_match(in_g, in_r)

	t_match in_g & ".LShoulder", in_r & ".LShoulderRoot"
	t_match in_g & ".RShoulder", in_r & ".RShoulderRoot"	
	
	'match the bone lengths
	dim b1,b2
	b1 = GetValue(in_g & ".LShoulderBone.bone.length")
	b2 = GetValue(in_g & ".RShoulderBone.bone.length")

	SetValue in_r & ".LShoulder.bone.length", b1
	SetValue in_r & ".RShoulder.bone.length", b2
	
	t_match in_g & ".LHumerus", in_r & ".LShoulderEff"
	t_match in_g & ".RHumerus", in_r & ".RShoulderEff"	
	
	root_Alignment in_r, "LShoulder"
	root_Alignment in_r, "RShoulder"	
	
	set_prefangles in_r & ".LShoulder"
	set_prefangles in_r & ".RShoulder"

end function
'---------------------------------------------
' Match Legs
'---------------------------------------------
function match_legs(in_g, in_r)
	
	dim i
	
	'front up vectors
	dim x1, y1, z1, x2, y2, z2
	x1  = GetValue(in_g & ".LShoulder.kine.global.posx")
	x2  = GetValue(in_g & ".RShoulder.kine.global.posx")	
	
	SelectObj in_r & ".FLUpVParent", "BRANCH"
	Translate  , x1, 0, 0, siAbsolute, siGlobal, siObj, siX
	SelectObj in_r & ".FRUpVParent", "BRANCH"
	Translate  , x2, 0, 0, siAbsolute, siGlobal, siObj, siX
	
	
	'match the bone lengths
	redim b(7)
	b(0) = GetValue(in_g & ".LHumerusBone.bone.length")
	b(1) = GetValue(in_g & ".RHumerusBone.bone.length")
	b(2) = GetValue(in_g & ".LUlnaBone.bone.length")
	b(3) = GetValue(in_g & ".RUlnaBone.bone.length")
	b(4) = GetValue(in_g & ".LFemurBone.bone.length")
	b(5) = GetValue(in_g & ".RFemurBone.bone.length")
	b(6) = GetValue(in_g & ".LTibiaBone.bone.length")
	b(7) = GetValue(in_g & ".RTibiaBone.bone.length")
	
	SetValue in_r & ".LHumerus.bone.length", b(0)
	SetValue in_r & ".RHumerus.bone.length", b(1)
	SetValue in_r & ".LUlna.bone.length", b(2)
	SetValue in_r & ".RUlna.bone.length", b(3)	
	SetValue in_r & ".LFemur.bone.length", b(4)
	SetValue in_r & ".RFemur.bone.length", b(5)	
	SetValue in_r & ".LTibia.bone.length", b(6)
	SetValue in_r & ".RTibia.bone.length", b(7)
	
	SetUserPref "SI3D_CONSTRAINT_COMPENSATION_MODE", 0	
	
	'match the positions
	redim c(7)
	set c(0) = SIApplyCns ("Position", in_r & ".LUlna", in_g & ".LUlna")
	set c(1) = SIApplyCns ("Position", in_r & ".RUlna", in_g & ".RUlna")
	set c(2) = SIApplyCns ("Position", in_r & ".LForeFootParent", in_g & ".LMetacarpal")
	set c(3) = SIApplyCns ("Position", in_r & ".RForeFootParent", in_g & ".RMetacarpal")
	set c(4) = SIApplyCns ("Position", in_r & ".LTibia", in_g & ".LTibia")
	set c(5) = SIApplyCns ("Position", in_r & ".RTibia", in_g & ".RTibia")
	set c(6) = SIApplyCns ("Position", in_r & ".LHindFootParent", in_g & ".LMetarsal")
	set c(7) = SIApplyCns ("Position", in_r & ".RHindFootParent", in_g & ".RMetarsal")
	
	'set c(0) legaligner(0).Kinematics.AddConstraint("Direction", legaligner(1), False)		
			
	refresh

	
	'align the bone rolls

	redim legaligner(3)
	dim Arot, Brot, Crot, rx,ry,rz
	set Arot = xsimath.createrotation
	set Brot = xsimath.createrotation
	set Crot = xsimath.createrotation
	set oRoot = Application.ActiveProject.ActiveScene.Root
	
	'right hind leg
	
	set legaligner(0) = oRoot.AddPrimitive("Cube")
	SetValue legaligner(0) & ".cube.length", 0.500
	t_match  in_r & ".RFemur", legaligner(0)
	set legaligner(1) = Duplicate (legaligner(0), , 2, 1, 1, 0, 0, 1, 0, 1)
	t_match  in_r & ".RHindFoot", legaligner(1)

	set DirCnst = legaligner(0).Kinematics.AddConstraint("Direction", legaligner(1), False)
	DirCnst.Parameters("upvct_active").Value = True	
	set DirCnst.UpVectorReference = in_g.FindChild("RTibia")

    	legaligner(0).Kinematics.Local.Transform.GetRotation Arot
	set DirCnst.UpVectorReference = in_r.FindChild("BRUpV")

	  		
    	legaligner(0).Kinematics.Local.Transform.GetRotation Brot
	Brot.InvertInPlace
	Crot.Mul Arot, Brot
	Crot.GetXYZAnglesValues rx, ry, rz
	rx = XSIMath.RadiansToDegrees(rx)
	
	SetValue in_r & ".RFemur.joint.roll", rx - 180
	

	'left hind leg

	set legaligner(2) = oRoot.AddPrimitive("Cube")
	SetValue legaligner(2) & ".cube.length", 0.500
	t_match in_r & ".LFemur", legaligner(2)
	set legaligner(3) = Duplicate (legaligner(2), , 2, 1, 1, 0, 0, 1, 0, 1)

	t_match in_r & ".LHindFoot", legaligner(3)
	
	
	set DirCnst = legaligner(2).Kinematics.AddConstraint("Direction", legaligner(3), False)
	DirCnst.Parameters("upvct_active").Value = True	
	set DirCnst.UpVectorReference = in_g.FindChild("LTibia")

    	legaligner(2).Kinematics.Local.Transform.GetRotation Arot
	set DirCnst.UpVectorReference = in_r.FindChild("BLUpV")	
	
    	legaligner(2).Kinematics.Local.Transform.GetRotation Brot
	Brot.InvertInPlace
	Crot.Mul Arot, Brot
	Crot.GetXYZAnglesValues rx, ry, rz
	rx = XSIMath.RadiansToDegrees(rx)
	
	SetValue in_r & ".LFemur.joint.roll", rx - 180
	
	for i = 0 to 3
		DeleteObj legaligner(i) 
	next
	
	
	'right front leg
	
	set legaligner(0) = oRoot.AddPrimitive("Cube")
	SetValue legaligner(0) & ".cube.length", 0.500
	t_match in_r & ".RHumerus", legaligner(0)
	set legaligner(1) = Duplicate (legaligner(0), , 2, 1, 1, 0, 0, 1, 0, 1)

	t_match in_r & ".RForeFoot", legaligner(1)
	
	set DirCnst = legaligner(0).Kinematics.AddConstraint("Direction", legaligner(1), False)
	DirCnst.Parameters("upvct_active").Value = True	
	set DirCnst.UpVectorReference = in_g.FindChild("RUlna")
    	legaligner(0).Kinematics.Local.Transform.GetRotation Arot
	set DirCnst.UpVectorReference = in_r.FindChild("FRUpV")	
			
    	legaligner(0).Kinematics.Local.Transform.GetRotation Brot
	Brot.InvertInPlace
	Crot.Mul Arot, Brot
	Crot.GetXYZAnglesValues rx, ry, rz
	rx = XSIMath.RadiansToDegrees(rx)
	
	SetValue in_r & ".RHumerus.joint.roll", rx - 180


	'left front leg

	set legaligner(2) = oRoot.AddPrimitive("Cube")
	SetValue legaligner(2) & ".cube.length", 0.500
	t_match in_r & ".LHumerus", legaligner(2)
	set legaligner(3) = Duplicate (legaligner(2), , 2, 1, 1, 0, 0, 1, 0, 1)

	t_match in_r & ".LForeFoot", legaligner(3)
	
	set DirCnst = legaligner(2).Kinematics.AddConstraint("Direction", legaligner(3), False)
	DirCnst.Parameters("upvct_active").Value = True	
	set DirCnst.UpVectorReference = in_g.FindChild("LUlna")
    	legaligner(2).Kinematics.Local.Transform.GetRotation Arot
	set DirCnst.UpVectorReference = in_r.FindChild("FLUpV")	


    	legaligner(2).Kinematics.Local.Transform.GetRotation Brot
	Brot.InvertInPlace
	Crot.Mul Arot, Brot
	Crot.GetXYZAnglesValues rx, ry, rz
	rx = XSIMath.RadiansToDegrees(rx)
	
	SetValue in_r & ".LHumerus.joint.roll", rx - 180

	for i = 0 to 3
		DeleteObj legaligner(i) 
	next
	
	root_Alignment in_r, "RFemur"
	root_Alignment in_r, "LFemur"	
	root_Alignment in_r, "RHumerus"
	root_Alignment in_r, "LHumerus"	
		
	set_prefangles in_r & ".LHumerus"
	set_prefangles in_r & ".RHumerus"
	set_prefangles in_r & ".LUlna"
	set_prefangles in_r & ".RUlna"
	set_prefangles in_r & ".LFemur"
	set_prefangles in_r & ".RFemur"
	set_prefangles in_r & ".LTibia"
	set_prefangles in_r & ".RTibia"
	
	for i = 0 to ubound(c)
		refresh
		DeleteObj c(i)
	next
	
	AddToGroup in_r & ".Hidden", in_r & ".LHindFootParent," & in_r & ".LForeFootParent," & in_r & ".RHindFootParent," & in_r & ".RForeFootParent"
	
end function
'---------------------------------------------
' Attach Feet
'---------------------------------------------
function attach_feet (in_g, in_r)
	
	dim foot, heel, root
	
	set root = ActiveProject.ActiveScene.Root	
	
	'=========================
	'match the right hind foot
	
	set foot = root.FindChild(in_r & ".RHindFoot")
	set heel = root.FindChild(in_g & ".RHindClaw")
	align_foot foot, heel 	
	
	
	dim b1,b2
	b1 = GetValue(in_g & ".RMetarsalBone.bone.length")
	b2 = GetValue(in_g & ".BRClawBone.bone.length")
	
	SetValue in_r & ".RMetarsal.bone.length", b1
	SetValue in_r & ".RHindClaw.bone.length", b2

	SelectObj in_r & ".BRheel", "BRANCH", True
	MatchTransform , in_g & ".BRPivot", siTrn
	
	MatchTransform in_r & ".BRClawEnd", in_g & ".RHindClawTip", siTrn
	SelectObj in_r & ".BRmid", "BRANCH", True	
									
	MatchTransform , in_g & ".RHindClaw", siTrn		
		
	MatchTransform in_r & ".BRankle", in_g & ".RMetarsal", siTrn	
	
	setuserpref("SI3D_CONSTRAINT_COMPENSATION_MODE"), 1
	refresh
	MatchTransform in_r & ".BRClaw", in_g & ".BRClawBone", siTrn
	MatchTransform in_r & ".RHindCLawEff", in_g & ".RHindClawTip", siTrn	
	
	DeleteObj in_r & ".BRToeTarget.kine.posecns"
	MatchTransform in_r & ".BRToeTarget", in_g & ".RHindClawTip", siTrn
	set tempcns = SIApplyCns ("Pose", in_r & ".BRToeTarget", in_r & ".BRClaw", True)
	
	DeleteObj in_r & ".RHindCLawEff.kine.poscns"	
	setuserpref("SI3D_CONSTRAINT_COMPENSATION_MODE"), 0	
	SIApplyCns "Position", in_r & ".RHindCLawEff", in_r & ".BRToeTarget"


	'=========================
	'match the left hind foot
	
	set foot = root.FindChild(in_r & ".LHindFoot")
	set heel = root.FindChild(in_g & ".LHindClaw")
	align_foot foot, heel 	

	b1 = GetValue(in_g & ".LMetarsalBone.bone.length")
	b2 = GetValue(in_g & ".BLClawBone.bone.length")
	
	SetValue in_r & ".LMetarsal.bone.length", b1
	SetValue in_r & ".LHindClaw.bone.length", b2

	SelectObj in_r & ".BLheel", "BRANCH", True
	MatchTransform , in_g & ".BLPivot", siTrn
	
	MatchTransform in_r & ".BLClawEnd", in_g & ".LHindClawTip", siTrn
	SelectObj in_r & ".BLmid", "BRANCH", True	
									
	MatchTransform , in_g & ".LHindClaw", siTrn		
		
	MatchTransform in_r & ".BLankle", in_g & ".LMetarsal", siTrn	
	
	setuserpref("SI3D_CONSTRAINT_COMPENSATION_MODE"), 1
	refresh
	MatchTransform in_r & ".BLClaw", in_g & ".BLClawBone", siTrn
	MatchTransform in_r & ".LHindCLawEff", in_g & ".LHindClawTip", siTrn	
	
	DeleteObj in_r & ".BLToeTarget.kine.posecns"
	MatchTransform in_r & ".BLToeTarget", in_g & ".LHindClawTip", siTrn
	set tempcns = SIApplyCns ("Pose", in_r & ".BLToeTarget", in_r & ".BLClaw", True)
	
	DeleteObj in_r & ".LHindCLawEff.kine.poscns"	
	setuserpref("SI3D_CONSTRAINT_COMPENSATION_MODE"), 0	
	SIApplyCns "Position", in_r & ".LHindCLawEff", in_r & ".BLToeTarget"


	'=========================
	'match the right front foot
	
	set foot = root.FindChild(in_r & ".RForeFoot")
	set heel = root.FindChild(in_g & ".RForeClaw")
	align_foot foot, heel 
		
	b1 = GetValue(in_g & ".RMetaCarpalBone.bone.length")
	b2 = GetValue(in_g & ".FRClawBone.bone.length")
	
	SetValue in_r & ".RMetacarpal.bone.length", b1
	SetValue in_r & ".RForeClaw.bone.length", b2

	SelectObj in_r & ".FRheel", "BRANCH", True
	MatchTransform , in_g & ".FRPivot", siTrn
	
	MatchTransform in_r & ".FRClawEnd", in_g & ".RForeClawTip", siTrn
	SelectObj in_r & ".FRmid", "BRANCH", True	
									
	MatchTransform , in_g & ".RForeClaw", siTrn		
		
	MatchTransform in_r & ".FRankle", in_g & ".RMetacarpal", siTrn	
	
	setuserpref("SI3D_CONSTRAINT_COMPENSATION_MODE"), 1
	refresh
	MatchTransform in_r & ".FRClaw", in_g & ".FRClawBone", siTrn
	MatchTransform in_r & ".RForeClawEff", in_g & ".RForeClawTip", siTrn	
	
	DeleteObj in_r & ".FRToeTarget.kine.posecns"
	MatchTransform in_r & ".FRToeTarget", in_g & ".RForeClawTip", siTrn
	set tempcns = SIApplyCns ("Pose", in_r & ".FRToeTarget", in_r & ".FRClaw", True)
	
	DeleteObj in_r & ".RForeClawEff.kine.poscns"	
	setuserpref("SI3D_CONSTRAINT_COMPENSATION_MODE"), 0	
	SIApplyCns "Position", in_r & ".RForeClawEff", in_r & ".FRToeTarget"


	'=========================
	'match the left front foot
	
	set foot = root.FindChild(in_r & ".LForeFoot")
	set heel = root.FindChild(in_g & ".LForeClaw")
	align_foot foot, heel 
	
	b1 = GetValue(in_g & ".LMetaCarpalBone.bone.length")
	b2 = GetValue(in_g & ".FLClawBone.bone.length")
	
	SetValue in_r & ".LMetacarpal.bone.length", b1
	SetValue in_r & ".LForeClaw.bone.length", b2

	SelectObj in_r & ".FLheel", "BRANCH", True
	MatchTransform , in_g & ".FLPivot", siTrn
	
	MatchTransform in_r & ".FLClawEnd", in_g & ".LForeClawTip", siTrn
	SelectObj in_r & ".FLmid", "BRANCH", True	
									
	MatchTransform , in_g & ".LForeClaw", siTrn		
		
	MatchTransform in_r & ".FLankle", in_g & ".LMetacarpal", siTrn	
	
	setuserpref("SI3D_CONSTRAINT_COMPENSATION_MODE"), 1
	refresh
	MatchTransform in_r & ".FLClaw", in_g & ".FLClawBone", siTrn
	MatchTransform in_r & ".LForeClawEff", in_g & ".LForeClawTip", siTrn	
	
	DeleteObj in_r & ".FLToeTarget.kine.posecns"
	MatchTransform in_r & ".FLToeTarget", in_g & ".LForeClawTip", siTrn
	set tempcns = SIApplyCns ("Pose", in_r & ".FLToeTarget", in_r & ".FLClaw", True)
	
	DeleteObj in_r & ".LForeClawEff.kine.poscns"	
	setuserpref("SI3D_CONSTRAINT_COMPENSATION_MODE"), 0	
	SIApplyCns "Position", in_r & ".LForeClawEff", in_r & ".FLToeTarget"

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
	
	set sRoot = Application.ActiveProject.ActiveScene.Root	
	
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
'--------------------------------------
' FK Legs
'--------------------------------------
function fkLegs(in_guide, in_rig)
	
	dim RFoot, LFoot, RSkeleton, LSkeleton 
	dim RBoneIndex, LBoneIndex 
	
	DeleteObj "B:" & in_rig & ".LForeFoot"
	DeleteObj "B:" & in_rig & ".RForeFoot"
	DeleteObj "B:" & in_rig & ".RHindFoot"
	DeleteObj "B:" & in_rig & ".LHindFoot"
		
	set RFfoot = in_rig.FindChild("RForefootEff")
	set LFfoot = in_rig.FindChild("LForefootEff")	
	set RBfoot = in_rig.FindChild("RFootEff")
	set LBfoot = in_rig.FindChild("LFootEff")	
		
	RFfoot.name = "RForeFoot"
	LFfoot.name = "LForeFoot"
	RBfoot.name = "RHindFoot"
	LBfoot.name = "LHindFoot"

	RemoveFromGroup in_rig & ".Hidden", RFfoot &"," & LFfoot &"," & RBfoot &"," & LBfoot
		
	'cut the foot effectors
	in_rig.FindChild("RForeFootParent").AddChild RFfoot
	in_rig.FindChild("LForeFootParent").AddChild LFfoot	
	in_rig.FindChild("RHindFootParent").AddChild RBfoot
	in_rig.FindChild("LHindFootParent").AddChild LBfoot	
	
	
	'make thier orientation not affected by the last bone
	
	set RFSkeleton =  GetSkeleton(RFfoot, RBoneIndex ) 	
	set LFSkeleton =  GetSkeleton(LFfoot, LBoneIndex ) 	
	set RBSkeleton =  GetSkeleton(RBfoot, RBoneIndex ) 	
	set LBSkeleton =  GetSkeleton(LBfoot, LBoneIndex ) 	
	
		
	SetValue RFSkeleton(1) & ".chain.effori", False
	SetValue LFSkeleton(1) & ".chain.effori", False	
	SetValue RBSkeleton(1) & ".chain.effori", False
	SetValue LBSkeleton(1) & ".chain.effori", False	
	
		
	SetUserPref "SI3D_NODETRANSFORM_CHILD_COMPENSATE", 1
	Rotate RFfoot, 0, 0, 0, siAbsolute, 70, siObj, siXYZ
	Rotate LFfoot, 0, 0, 0, siAbsolute, 70, siObj, siXYZ
	Rotate RBfoot, 0, 0, 0, siAbsolute, 70, siObj, siXYZ
	Rotate LBfoot, 0, 0, 0, siAbsolute, 70, siObj, siXYZ	
	SetUserPref "SI3D_NODETRANSFORM_CHILD_COMPENSATE", 0
			
	SetValue RFfoot& ".eff.primary_icon", 0
	SetValue RFfoot& ".eff.shadow_icon", 4
	SetValue RFfoot& ".eff.radius", 2
	SetValue RFfoot& ".eff.shadow_scaleZ", 2
	
	SetValue LFfoot& ".eff.primary_icon", 0
	SetValue LFfoot& ".eff.shadow_icon", 4
	SetValue LFfoot& ".eff.radius", 2
	SetValue LFfoot& ".eff.shadow_scaleZ", 2
		
	SetValue RBfoot& ".eff.primary_icon", 0
	SetValue RBfoot& ".eff.shadow_icon", 4
	SetValue RBfoot& ".eff.radius", 2
	SetValue RBfoot& ".eff.shadow_scaleZ", 2
	
	SetValue LBfoot& ".eff.primary_icon", 0
	SetValue LBfoot& ".eff.shadow_icon", 4
	SetValue LBfoot& ".eff.radius", 2
	SetValue LBfoot& ".eff.shadow_scaleZ", 2	
	
	RFfoot.AddProperty("Display Property")
	RFfoot.properties("display").wirecol.value = 489
	LFfoot.AddProperty("Display Property")
	LFfoot.properties("display").wirecol.value = 489
	RBfoot.AddProperty("Display Property")
	RBfoot.properties("display").wirecol.value = 489
	LBfoot.AddProperty("Display Property")
	LBfoot.properties("display").wirecol.value = 489
			
	SelectObj RFfoot &"," & LFfoot &"," & RBfoot &"," & LBfoot
	SetMarking "kine.local.pos.posx"
	AddToMarking "kine.local.pos.posy"
	AddToMarking "kine.local.pos.posz"
	CreateMarkingSet
	
	SelectObj RFSkeleton(1) &"," & RFSkeleton(2) &"," & LFSkeleton(1) &"," & LFSkeleton(2) &"," &RBSkeleton(1) &"," & RBSkeleton(2) &"," & LBSkeleton(1) &"," & LBSkeleton(2)
	AddToSelection in_rig & ".RMetacarpal,"& in_rig & ".RForeClaw,"& in_rig & ".LMetacarpal,"& in_rig & ".LForeClaw,"& in_rig & ".RMetarsal,"& in_rig & ".RHindClaw,"& in_rig & ".LMetarsal,"& in_rig & ".LHindClaw"

	SetMarking "kine.local.ori.euler.rotx"
	AddToMarking "kine.local.ori.euler.roty"
	AddToMarking "kine.local.ori.euler.rotz"	
	CreateMarkingSet	
	
	SetValue in_rig & ".LMetacarpal.joint.resplane", 0	
	SetValue in_rig & ".LForeClaw.joint.resplane", 0	
	SetValue in_rig & ".RMetacarpal.joint.resplane", 0	
	SetValue in_rig & ".RForeClaw.joint.resplane", 0	
	SetValue in_rig & ".LMetarsal.joint.resplane", 0	
	SetValue in_rig & ".LHindClaw.joint.resplane", 0	
	SetValue in_rig & ".RMetarsal.joint.resplane", 0	
	SetValue in_rig & ".RHindClaw.joint.resplane", 0		
	
end function
'-----------------------------------------------
' Switch Shoulders
'-----------------------------------------------
function SwitchShoulders(in_rig)


	set LShoulder = in_rig.FindChild("LShoulder")
	set RShoulder = in_rig.FindChild("RShoulder")
	set LEff = in_rig.FindChild("LShoulderEff")
	set REff = in_rig.FindChild("RShoulderEff")
	
	RemoveFromGroup in_rig & ".Hidden", LEff &"," & REff 
	
	SetValue LEff & ".eff.primary_icon", 0
	SetValue LEff & ".eff.shadow_icon", 4
	SetValue LEff & ".eff.radius", 1
	SetValue LEff & ".eff.shadow_scaleZ", 1
	
	SetValue REff & ".eff.primary_icon", 0
	SetValue REff & ".eff.shadow_icon", 4
	SetValue REff & ".eff.radius", 1
	SetValue REff & ".eff.shadow_scaleZ", 1	
	
	LEff.AddProperty("Display Property")
	LEff.properties("display").wirecol.value = 489
	REff.AddProperty("Display Property")
	REff.properties("display").wirecol.value = 489

	LShoulder.AddProperty("Display Property")
	LShoulder.properties("display").wirecol.value = 49
	RShoulder.AddProperty("Display Property")
	RShoulder.properties("display").wirecol.value = 49
	SetValue LShoulder & ".bone.shadow_icon", 0
	SetValue RShoulder & ".bone.shadow_icon", 0
	

			
end function
'-----------------------------------------------
' Remove Up Vectors
'-----------------------------------------------
function RemoveUpVectors(in_rig)
	
	DeleteObj "B:" & in_rig & ".FLUpVParent"
	DeleteObj "B:" & in_rig & ".FRUpVParent"
	DeleteObj "B:" & in_rig & ".BLUpVParent"
	DeleteObj "B:" & in_rig & ".BRUpVParent"
	
	SetValue in_rig & ".LHumerus.joint.resplane", 0	
	SetValue in_rig & ".LUlna.joint.resplane", 0	
	SetValue in_rig & ".RHumerus.joint.resplane", 0	
	SetValue in_rig & ".RUlna.joint.resplane", 0	
	SetValue in_rig & ".LFemur.joint.resplane", 0	
	SetValue in_rig & ".LTibia.joint.resplane", 0	
	SetValue in_rig & ".RFemur.joint.resplane", 0	
	SetValue in_rig & ".RTibia.joint.resplane", 0		
	


end function
'-----------------------------------------------
' Foot Roll Angle
'-----------------------------------------------
function FootRollAngle(in_rig, in_sliders)

	set param = in_sliders.AddParameter ("BackFootRollAngle", siDouble, siClassifVisualization , siAnimatable, "BackFootRollAngle", "BackFootRollAngle", , 15, 0, 90,0,60)  
	AddExpr in_rig& ".BRClawEnd.kine.local.BipedRigSteppingAngle.SteppingAngle", param 
	AddExpr in_rig& ".BLClawEnd.kine.local.BipedRigSteppingAngle.SteppingAngle", param 
	
	set param = in_sliders.AddParameter ("FrontFootRollAngle", siDouble, siClassifVisualization , siAnimatable, "FrontFootRollAngle", "FrontFootRollAngle", , 20, 0, 90,0,60)  
	AddExpr in_rig& ".FRClawEnd.kine.local.BipedRigSteppingAngle.SteppingAngle", param 
	AddExpr in_rig& ".FLClawEnd.kine.local.BipedRigSteppingAngle.SteppingAngle", param 	
	
end function
'---------------------------------------------
' Hookup Spine
'---------------------------------------------
function hookup_spine(in_rig, in_nb, in_sliders)
	
	dim elem, hip, hipDepth, chestDepth, chest, scaleSlider, topVertebra, refCnst
	dim tempEnd, frontChildren, p1,p2f
	
	set hip = in_rig.FindChild("spine_start")	
	set hipDepth = in_rig.FindChild("hipDepth")
	set chestDepth = in_rig.FindChild("chestDepth")		
	set chest = in_rig.FindChild("spine_end")		
	set tempEnd = in_rig.FindChild("tempSpineEnd")		
		
	set p1 = hipDepth.Kinematics.AddConstraint("Pose", hip, True)
	set p2 = chestDepth.Kinematics.AddConstraint("Pose", chest, True)	
	
	redim controls(3)
	set controls(0) = hip 
	set controls(1) = hipDepth 
	set controls(2) = chestDepth 
	set controls(3) = chest 		
	
	draw_spine in_rig, controls, "SpineCurve", spineCurve

	'get the distance
	dist = spineCurve.ActivePrimitive.Geometry.curves(0).length	
	
	bind_curve spineCurve, hip, hipDepth, chestDepth, chest, in_sliders, "SpineScale", scaleSlider
	
	Create_top_vertebra spineCurve, dist, in_nb, scaleSlider, "ChestBind", 1, topVertebra, refCnst	
	
	make_vertebra spineCurve, hip, chest, dist, in_nb, topVertebra, refCnst, "Spine"
	
	for each elem in spineCurve.children
		elem.AddProperty("Display Property")
		elem.properties("display").wirecol.value = 178		
		AddToGroup in_rig & ".envelope_group", elem
	next  

	refresh
	
	TopVertebra.AddChild tempEnd.children
	DeleteObj tempEnd

	in_rig.FindChild("globalSRT").AddChild spineCurve
	
end function
'---------------------------------------------
' Hookup Tail
'---------------------------------------------
function hookup_tail(in_rig, in_nb, in_sliders)
	
	dim elem, hip, hipDepth, chestDepth, chest, scaleSlider, topVertebra, refCnst
	dim tempEnd, frontChildren, p1, p2
	
	set hip = in_rig.FindChild("tailStart")	
	set hipDepth = in_rig.FindChild("tailStartDepth")
	set chestDepth = in_rig.FindChild("tailEndDepth")		
	set chest = in_rig.FindChild("tailEnd")				
	
	set p1 = hipDepth.Kinematics.AddConstraint("Pose", hip, True)
	set p2 = chestDepth.Kinematics.AddConstraint("Pose", chest, True)	
	
	redim controls(3)
	set controls(0) = hip 
	set controls(1) = hipDepth 
	set controls(2) = chestDepth 
	set controls(3) = chest 
	
	draw_spine in_rig, controls, "TailCurve", spineCurve
	
	'get the distance
	dist = spineCurve.ActivePrimitive.Geometry.curves(0).length		
	
	bind_curve spineCurve, hip, hipDepth, chestDepth, chest, in_sliders, "TailScale", scaleSlider
	
	Create_top_vertebra spineCurve, dist, in_nb, scaleSlider, "TailEndBind", .5,  topVertebra, refCnst	
	
	make_vertebra spineCurve, hip, chest, dist, in_nb, topVertebra, refCnst, "Tail"
	
	for each elem in spineCurve.children
		elem.AddProperty("Display Property")
		elem.properties("display").wirecol.value = 178		
		AddToGroup in_rig & ".envelope_group", elem
	next
	
	in_rig.FindChild("hip").AddChild spineCurve

end function

'-----------------------------------------------
' Draw Spine
'-----------------------------------------------
function draw_spine(in_model, Controls, in_name, out_curve)	

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
	
	set out_curve = Root.AddNurbsCurve(curvePoints,,,,,,in_name)
	
	out_curve.AddProperty("Display Property")
	out_curve.properties("display").wirecol.value = 49
	
end function
'-----------------------------------------------
' Bind Curve
'---------------------------------------------
function bind_curve(in_guideCurve, in_hip, in_hipDepth, in_chestDepth, in_chest, in_sliders, in_name, out_ScaleSlider)
	
	dim myOp, rtOp, length, sliders, ScaleSlider
 
	set out_ScaleSlider = in_sliders.AddParameter (in_name, siDouble, siClassifVisualization , siAnimatable, in_name, in_name, , 1, .01, 10000,.01,10)  
	
	'set the length
	length =  in_guideCurve.ActivePrimitive.Geometry.curves(0).length
	       
	set myOp = ApplyOp ("SpineCurve", in_guideCurve &","& in_hip &","& in_hipDepth &","& in_chestDepth&","& in_chest)(0)	

	SetValue myOp & ".lgoal", length
	
	AddExpr myOp & ".lScale", out_ScaleSlider
	
end function
'--------------------------------------
' Create Top Vertebra
'--------------------------------------
function Create_top_vertebra(in_curve, in_dist, in_nbVertebra, in_scaleSlider, inTopName, inSize, out_topVertebra, out_refCnst)
 
	 ' the top vertebra functions as a marker to maintain a constant length.

	dim cLength, myOp, rtOp, length

	cLength = inSize

	set out_topVertebra = in_curve.AddPrimitive("Cube", inTopName)
	
	out_topVertebra.length = cLength

	'constrain the icon to the curve
	set out_refCnst = out_topVertebra.Kinematics.AddConstraint("Path", in_curve, False)
	out_refCnst.tangent = True
	out_refCnst.Parameters("upvct_active").Value = True
	
	'apply the scripted operator for fixed Spine length	
	set myOp = ApplyOp ("FixedLength", out_topVertebra&","&in_curve)(0)
		
	length =  in_curve.ActivePrimitive.Geometry.curves(0).length
	SetValue myOp & ".init_length", length
	
	AddExpr myOp & ".lScale", in_scaleSlider

end function
'--------------------------------------
' Make Vertebra
'--------------------------------------
function make_vertebra(in_curve, in_hip, in_chest, in_dist, in_nbVertebra, in_topVertebra, in_refCnst, inName )

	dim cLength, i, pCnst, size, myOp, rtOp
	size = in_nbVertebra - 1
	
	redim vertebra(size)

	cLength = in_dist/in_nbVertebra * .45
	if cLength > .4 then cLength = .4
	
	for i = 0 to size
		set vertebra(i) = in_curve.AddPrimitive("Cube",inName & i + 1)	
		
		vertebra(i).length = cLength
		set pCnst = vertebra(i).Kinematics.AddConstraint("Path", in_curve, False)
		pCnst.tangent = True
		pCnst.Parameters("upvct_active").Value = True
		AddExpr pCnst & ".perc", in_refCnst & ".perc * " & replace(cstr(round((i+1)/(in_nbVertebra + 1),6)),",",".")		
	next
	
	for i = 0 to size 
		set myOp = ApplyOp ("SpinePointAt", vertebra(i) &","&in_chest&","&in_hip )(0)
		SetValue myOp  & ".slider", 1 - (i)/(size + 2) - 1 /(size + 2)
	next
	
	set myOp = ApplyOp ("SpinePointAt", in_topVertebra &","&in_chest&","&in_hip )(0)	
	SetValue myOp  & ".slider", 0

end function
'-----------------------------------------------
' Subdivide First Bone 
'-----------------------------------------------
function subdivide_FirstBone(in_model, in_obj, in_nbBicep, inoutBindingNulls)


		dim subNull, bNulls
		
		set LNulls = CreateObject("XSI.Collection")

		lastPos = (in_nbBicep + 1)/(in_nbBicep + 2)
		
		for i = 0 to in_nbBicep- 1
			set subNull = in_obj.parent.addnull(in_obj.name & "Roll"& n + 1)
			
			set myOp = ApplyOp ("FirstBoneRollDivision", subNull &","& in_obj)(0)			
			SetValue myOp  & ".length_perc", lastPos * i / in_nbBicep 
			SetValue myOp  & ".mySlerp", (i + 1) /(in_nbBicep + 2)
						
			subNull.AddProperty("Display Property")
			subNull.properties("display").wirecol.value = 421
			subNull.ActivePrimitive.parameters("size").value = .3
			AddToGroup in_model & ".envelope_Group", subNull
	
			LNulls.add subNull
	
		next

		set subNull = in_obj.addnull(in_obj.name &"Roll"& n + 2)
		Translate subNull, 0, 0, 0, siAbsolute, siLocal, siObj, siXYZ
		Rotate subNull, 0, 0, 0, siAbsolute, siLocal, siObj, siXYZ
		SetExpr subNull & ".kine.local.posx", in_obj.fullname & ".bone.length *" & lastPos  
	
		subNull.AddProperty("Display Property")
		subNull.properties("display").wirecol.value = 421
		subNull.ActivePrimitive.parameters("size").value = .3	                  
		AddToGroup in_model & ".envelope_group", subNull
	
		LNulls.add subNull	
	
		RemoveFromGroup in_model & ".envelope_group", in_obj 
		
end function
'-----------------------------------------------
' Process Second Bone Rolls
'-----------------------------------------------
function ProcessSecondBoneRolls(in_model, in_nbDivisions)

	redim FL(4) 
	set FL(0) = in_model.findchild("LHumerus")
	set FL(1) = in_model.findchild("LUlna")
	set FL(2) = in_model.findchild("LForefootEff")
	set FL(3) = in_model.findchild("LForeClaw")
	set FL(4) = in_model.findchild("LMetacarpal")
	subdivide_secondBone in_model, FL, in_nbDivisions, -180
				
	redim FR(4) 
	set FR(0) = in_model.findchild("RHumerus")
	set FR(1) = in_model.findchild("RUlna")
	set FR(2) = in_model.findchild("RForefootEff")
	set FR(3) = in_model.findchild("RForeClaw")
	set FR(4) = in_model.findchild("RMetacarpal")
	subdivide_secondBone in_model, FR, in_nbDivisions, 180				
				

	redim BL(4) 
	set BL(0) = in_model.findchild("LFemur")
	set BL(1) = in_model.findchild("LTibia")
	set BL(2) = in_model.findchild("LFootEff")
	set BL(3) = in_model.findchild("LHindClaw")
	set BL(4) = in_model.findchild("LMetarsal")
	subdivide_secondBone in_model, BL, in_nbDivisions, 0

	redim BR(4) 
	set BR(0) = in_model.findchild("RFemur")
	set BR(1) = in_model.findchild("RTibia")
	set BR(2) = in_model.findchild("RFootEff")
	set BR(3) = in_model.findchild("RHindClaw")
	set BR(4) = in_model.findchild("RMetarsal")
	subdivide_secondBone in_model, BR, in_nbDivisions, 0
					
end function
'-----------------------------------------------
' Subdivide_secondBone 
'-----------------------------------------------
function subdivide_secondBone(in_model, in_objs, in_nbDivisions, in_rollComp)

	set bicep = in_objs(0) ' in_model.findchild("LBicep")
	set forearm = in_objs(1) 'in_model.findchild("LForearm")
	set armEff = in_objs(2) ' in_model.findchild("LArmEff")
	set handEff = in_objs(3) ' in_model.findchild("LHandEffector")
	set handBone = in_objs(4) ' in_model.findchild("LHand")

	set sliders = handBone.AddProperty("Custom_parameter_list",,"Roll_Compensation")  
	set rollOffset = sliders.AddParameter ("roll_offset", siDouble, siClassifVisualization , siAnimatable, "roll_offset", "roll_offset", , 0, -360, 360,-180,180)  
	
		dim subNull

		'left bicep
		
		for i = 0 to in_nbDivisions- 1
		
			if i = 0 then
				set subNull = forearm.addnull("LElbow")
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
		
		rollOffset.Value = in_rollComp  ' 90	

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
'-----------------------------------------------
