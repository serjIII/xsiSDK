'******************************************************************************
' String Constants (used to translate)
'******************************************************************************
const IDS_CREATE_BIPED_GUIDE_TITLE			= 1047


' Load Biped Guide
' misner June 2002

'-----------------------------------
'Load Biped Guide
'-----------------------------------
sub load_biped_guide( inGuideName, inGuideStyle, inGuideSymmetry, inUseDialog )

	if inUseDialog then
		dim valid
		get_Dial inGuideStyle, inGuideSymmetry, valid
		if valid = False then exit sub
	end if
	
	set guide = GetPresetModel (inGuideName, inGuideName)

	dim viewvis

	if inGuideStyle = 0 then viewvis = 2 else viewvis = 0

	if inGuideName = "BipedPropGuide" then 
		SetValue guide & ".DetailedGuideVisible.viewvis", viewvis	'OLD GUIDE (pre v4.0)
	else
		SetValue guide & ".DetailedGuide.viewvis", viewvis			'NEW GUIDE
	end if

	
	select case inGuideSymmetry
		case 1
			RemoveSymmetry guide.FindChild("RibCageEnd")
			RemoveSymmetry guide.FindChild("RArmPitTop")	
			RemoveSymmetry guide.FindChild("LArmPitTop")
			RemoveSymmetry guide.FindChild("RArmPitBase")		
		case 2
			RemoveSymmetry guide.FindChild("LLeg")
			RemoveSymmetry guide.FindChild("RLeg")	
			RemoveSymmetry guide.FindChild("RLowerThigh")
			RemoveSymmetry guide.FindChild("RHipBottom")
			RemoveSymmetry guide.FindChild("RHipTop")
			RemoveSymmetry guide.FindChild("RKnee")

			'Biped dog leg objects with symmetry constraints
			RemoveSymmetry guide.FindChild("RFemur")
			RemoveSymmetry guide.FindChild("RTibia")
			RemoveSymmetry guide.FindChild("RMetarsal")			
			RemoveSymmetry guide.FindChild("RFoot1")
			RemoveSymmetry guide.FindChild("RFoot2")
			RemoveSymmetry guide.FindChild("RFoot3")
			RemoveSymmetry guide.FindChild("RFoot4")

		case 3
			RemoveSymmetry guide						
	end select
	
	DeselectAll
	
end sub

'---------------------------------------------
' Get Dialogue
'---------------------------------------------
function get_Dial(out_Style, out_Symmetry, out_valid)
	
	dim sroot, UI

	set sroot = ActiveProject.ActiveScene.Root
	set UI = sroot.AddProperty("BipedGuide", 0, "Biped Guide")

	On Error Resume Next
	inspectobj UI,,XSIUtils.Translate( IDS_CREATE_BIPED_GUIDE_TITLE, "XSISCRIPTS" ), siModal
	
	if Err.Number <> 0 then
		DeleteObj UI
		out_valid = False
		exit function
	end if
	
	On Error Goto 0
	
	out_Style = GetValue(UI & ".Style")
	out_Symmetry = GetValue(UI & ".Symmetry")
		
	DeleteObj UI	
	out_valid = True
	
end function
'---------------------------------------------
' Remove Symmetry
'---------------------------------------------
function RemoveSymmetry(in_obj)
	
	'get all the constraints under the entry object

	if typename(in_obj) = "Nothing" then exit function	

	set aniSources = in_obj.AnimatedParameters(siConstraintSource)	
	set Constraints = CreateObject("XSI.Collection")

	for each cnst in aniSources
		if cnst.source.type = "symmetrycns" then
			Constraints.add cnst.source
		end if
	next
	
	Constraints.Unique = True
	DeleteObj Constraints
		
end function
'---------------------------------------------








