'******************************************************************************
'
' File supervisor : Ronald Beirouti
' Date : June 2001
' (c) Copyright 2001 Softimage
'
' $Archive:  $
' $Revision:  $  $Date:  $
' Checkin by: $Author:  $
'
' @doc
' @module	uixsiscripts.vbs | VB Script 
'
'	This is an VBscript file that contains the base scripts for the
'   commands.
'	These scripts will be used by the toolbar. That's why it's a UI version.
'******************************************************************************

'option explicit

'******************************************************************************
' String Constants (used to translate)
'******************************************************************************
const IDS_SYMMETRY_ENV_WEIGHT_MSG				= 1071
const IDS_SYMMETRY_ENV_WEIGHT_TITLE				= 1072
const IDS_CREATE_SYMMETRY_MAP_TEMPLATE_TITLE	= 1073
const IDS_PICK_ENVELOPED_BOUNDINGBOX_L_MSG		= 1074
const IDS_PICK_ENVELOPED_BOUNDINGBOX_M_MSG		= 1075
const IDS_PICK_DEFORMER_FOR_BOUNDINGOBJ_L_MSG	= 1076
const IDS_PICK_DEFORMER_FOR_BOUNDINGOBJ_M_MSG	= 1077

'******************************************************************************
' HELPER FUNCTIONS
'******************************************************************************

'------------------------------------------------------------------------------
' NAME:		SIMsgBox 
' INPUT:	in_prompt	Message to display
'			in_buttons	Buttons to display in the dialog.  As for MsgBox
'           in_title	Title of the dialog
'			in_default	Default button default button value to return in
'						batch mode
' RETURN:   Button that was selected by the user, in_default in batch mode
' DESCRIPTION: Displays a message box in Interactive mode, logs a message in
'              batch mode.
'------------------------------------------------------------------------------
FUNCTION SIMsgBox(in_prompt, in_buttons, in_title, in_default) 
	IF Application.Interactive THEN
		SIMsgBox = MsgBox( in_prompt, in_buttons, in_title)
	ELSE
		LogMessage in_title & ": " & in_prompt
		SIMsgBox = in_default
	END IF
END FUNCTION


FUNCTION SIMsgBoxWithHelp(in_prompt, in_buttons, in_title, in_default, in_helpfile, in_helpcontext ) 
	dim l_HelpFilePath
	IF Application.Interactive THEN
		l_HelpFilePath = SIGetHelpPath & "/" & in_helpfile	
		SIMsgBoxWithHelp = MsgBox( in_prompt, in_buttons, in_title, l_HelpFilePath , in_helpcontext )
	ELSE
		LogMessage in_title & ": " & in_prompt
		SIMsgBoxWithHelp = in_default
	END IF
END FUNCTION
'------------------------------------------------------------------------------
' NAME:		FWizardDialog
'
' INPUT:	in_customparam				- custom param to inspect
' INPUT:	in_title					- dialog title
' RETURN:	vbOk | vbCancel	
'
' DESCRIPTION: Pop up a modal dialog to inspect custom parameter
'------------------------------------------------------------------------------
function FWizardDialog(in_customparam, in_title)
	On Error Resume Next
	InspectObj in_customparam,,in_title, siModal

	if Err.Number <> 0 then
		FWizardDialog = vbCancel
	else
		FWizardDialog = vbOk
	end if
end Function

'------------------------------------------------------------------------------
' NAME:		FGetSceneRoot
'
' INPUT:	N/A
'
' OUTPUT:	- SceneRoot
'
' DESCRIPTION: Return Scene Root
'------------------------------------------------------------------------------
Function FGetSceneRoot ()
	Dim rtn, l_Scene, l_SceneRoot, l_Children

	set FGetSceneRoot = Nothing

	set l_Children = EnumElements("Project")

	set l_Scene = SIFilter(l_Children,siSceneFilter)

	set l_Children = EnumElements(l_Scene(0))

	set l_SceneRoot = SIFilter(l_Children,siObjectFilter)
	
	set FGetSceneRoot = l_SceneRoot(0)

end Function

'------------------------------------------------------------------------------
' NAME:		SymmetryEnvelopeWeightProc
'
' INPUT:	PropObj Envelope Weight to use
'			SubComp Objects to have their symmetry points set
'			- 
'
' DESCRIPTION:	Calls the SymmetryEnvelopeWeight task and inspect its property page
'				
'------------------------------------------------------------------------------
sub SymmetryEnvelopeWeightProc( PropObj, SubComp, MappingTemplate, byref SymmetryAxis )

	' Check if there is currently a symmetry mapping template
	' Otherwise create one

	If( MappingTemplate = "" ) Then

	' Check under the deformers model

	dim oModel, l_createSymmetryMap 

	l_createSymmetryMap = False
	if PropObj = "" then
		l_createSymmetryMap = True
	End if
	

	for each l_InputObj in SubComp
		set oModel = GetDeformerModelFromCluster( l_InputObj )

		If( oModel <> "" ) Then

			set oSymmetryMappingTemplate = oModel.properties.Find(siMixerPropType)

			If( typename(oSymmetryMappingTemplate ) = "Nothing" AND typename( SymmetryAxis ) <> "Nothing" ) Then
				CreateSymmetryMappingTemplate l_InputObj, True, SymmetryAxis, l_createSymmetryMap
			End If
		End If
	next

	End If

	Dim l_InputObj

	for each l_InputObj in SubComp
		SISymEnvWeight  PropObj , l_InputObj, MappingTemplate 
	next

end sub

'------------------------------------------------------------------------------
' NAME:		SymmetryEnvelopeWeightProc
'
' INPUT:	PropObj Envelope Weight to use
'			SubComp Objects to have their symmetry points set
'			- 
'
' DESCRIPTION:	Calls the SymmetryEnvelopeWeight task and inspect its property page
'				
'------------------------------------------------------------------------------
sub UISymmetryEnvelopeWeightProc( PropObj, SubComp, MappingTemplate, byref SymmetryAxis )

	' Check if there is currently a symmetry mapping template
	' Otherwise create one

	If( MappingTemplate = "" ) Then

	' Check under the deformers model

	dim oModel

	for each l_InputObj in SubComp
		set oModel = GetDeformerModelFromCluster( l_InputObj )

		If( oModel <> "" ) Then

			set oSymmetryMappingTemplate = oModel.properties.Find(siMixerPropType)

			If( typename(oSymmetryMappingTemplate ) = "Nothing" ) Then
				Dim msgboxrtn 
				msgboxrtn = SiMsgBox(XSIUtils.Translate( IDS_SYMMETRY_ENV_WEIGHT_MSG, "XSISCRIPTS" ), vbYesNo , XSIUtils.Translate( IDS_SYMMETRY_ENV_WEIGHT_TITLE, "XSISCRIPTS" ), vbYes)
				If ( msgboxrtn = vbYes ) Then
					UICreateSymmetryMappingTemplateProc l_InputObj, True, SymmetryAxis , True
				End If
			End If
		End If
	next

	End If

	Dim l_InputObj

	for each l_InputObj in SubComp
		SISymEnvWeight  PropObj , l_InputObj, MappingTemplate 
	next

end sub

function GetDeformerModelFromCluster( in_cluster )
	
	dim oObject, oEnvelope, oModel

	if in_cluster.type = "pntSubComponent" then
		set oObject = in_cluster.subcomponent.parent3Dobject
	else if  in_cluster.type = "pnt"  then
		set oObject = in_cluster.parent.parent
	end if
	end if

	If( oObject <> "" ) Then
	' We've find a primitive. Get the envelope
		set oEnvelopes = oObject.envelopes

		If( oEnvelopes.count > 0 ) Then
			set oEnvelope = oEnvelopes(0)

			If( oEnvelope.deformers.count > 0 ) Then
				set oModel = oEnvelope.deformers(0).model
			End If
		End If

	End If

	if oModel <> "" Then
		set GetDeformerModelFromCluster = oModel
	Else
		set GetDeformerModelFromCluster = FGetSceneRoot

	End if
end function

'------------------------------------------------------------------------------
' NAME:		UICreateSymmetryMappingTemplateProc
'
' INPUT:	in_sel:				Selected Objects
' INPUT:	in_fillTemplate:	Do we want to automatically fill the symmetry
'								mapping template with regards to input sym plane
' INPUT:	in_axis:			The symmetry plane (0=yz, 1=xz, 2=xy)
' OUTPUT						Created mapping template
'
' DESCRIPTION:	Creates an empty symmetry mapping template under the model
'				
'------------------------------------------------------------------------------
function UICreateSymmetryMappingTemplateProc( in_sel , in_fillTemplate, byref io_axis , in_createSymmetryMap )

	dim symmetryMappingTemplate
	
	dim presel, sel, valid, obj, l_env
	dim deformermatches , deformers, l_symMappingTemplate, l_symmetryMap
		
	set presel = selection
	valid = TRUE
	
	if presel.count = 1 then
	
		set sel = presel(0)

		set obj = sel

		call_dialogue io_axis, in_fillTemplate , in_createSymmetryMap, valid

		if valid = False then exit function

		set l_symMappingTemplate = CreateSymmetryMappingTemplate( sel, in_fillTemplate, io_axis , in_createSymmetryMap )
		set UICreateSymmetryMappingTemplate = l_symMappingTemplate

		AutoInspect l_symMappingTemplate, , siLock 
	else	
		logmessage "Please Select an item first", siError
		exit function
	end if	

End function

'------------------------------------------------------------------------------
' NAME:		CreateSymmetryMappingTemplateProc
'
' INPUT:	in_sel:				Selected Objects
' INPUT:	in_fillTemplate:	Do we want to automatically fill the symmetry
'								mapping template with regards to input sym plane
' INPUT:	in_axis:			The symmetry plane (0=yz, 1=xz, 2=xy)
' OUTPUT						Created mapping template
'
' DESCRIPTION:	Creates an empty symmetry mapping template under the model
'				
'------------------------------------------------------------------------------
function CreateSymmetryMappingTemplateProc( in_sel , in_fillTemplate, in_axis , in_createSymmetryMap )

	dim symmetryMappingTemplate

	dim  obj, l_axis, l_model, l_owners, l_match
	dim deformermatches , deformers

	If( in_sel.type = "XSICollection" ) then
		set obj = in_sel( 0 )
	Else
		set obj = in_sel
	End If

	If	( obj.type = "pntSubComponent") then
		set obj = obj.subcomponent.parent3Dobject
	End If

	' Create the symmetry mapping template property
	'-----------------------------------------------
		
	if( obj.type <> "Model" ) then
		get_deformers obj, deformers
		
		if( deformers.count > 0 ) then
			set l_model = deformers(0).Model
		else
			set l_model = obj.model
			in_fillTemplate = False	'Can't fill template if there are no deformers on the envelope
		end if 
	else
		in_fillTemplate = False		'Can't fill template from a model
		set l_model = obj
	End If

	set symmetryMappingTemplate = l_model.AddProperty( "MappingTemplate",,"SymmetryMappingTemplate")

	' Fill the symmetry mapping template property
	'-----------------------------------------------
	if( in_fillTemplate = TRUE ) then

		if in_axis = 0 then
			l_axis = Array (-1,1,1)
		end if

		if in_axis = 1 then
			l_axis = Array (1,-1,1)
		end if

		if in_axis = 2 then
			l_axis = Array (1,1,-1)
		end if
		

		process_deformers obj, deformers, l_axis, deformermatches

		FillSymmetryMappingTemplate deformers, deformermatches, symmetryMappingTemplate 
	
	End If
	
	set CreateSymmetryMappingTemplateProc = symmetryMappingTemplate

	if in_createSymmetryMap = True then
		set l_Envelopes = obj.Envelopes
		if l_Envelopes.Count > 0 then
			DeactivateAbove l_Envelopes(0) , True
		end if

		set l_symmetryMap = CreateSymmetryMap("SymmetryMap", obj, "Symmetry Map", "Symmetry Map Property")
		SetValue l_symmetryMap & ".symmetrymapop.axis", in_axis

		if l_Envelopes.Count > 0 then
			DeactivateAbove l_Envelopes(0) , False
		end if

	end if

end function


'---------------------------------------------
' Call Dialogue
'---------------------------------------------
function call_dialogue (byref io_axis , io_fillTemplate , io_createSymmetryMap, out_valid)

	Dim l_CPList, l_SceneRoot, l_CustomParam
	Dim l_axis

	Set l_SceneRoot = FGetSceneRoot
	l_GeneratePset = FALSE
	if( l_GeneratePset = TRUE) then
		Set l_CPList = SIAddProp( "Custom_parameter_list", l_SceneRoot , , "CreateSymmetryMappingTemplate").value("Value")

		l_CustomParam = l_SceneRoot & "." & l_CPList

		SIAddCustomParameter l_CustomParam , "FillTemplate", siBool, _
			io_fillTemplate, , , , siPersistable+siSilent, , , "Fill Symmetry Template", "Fill Symmetry Template"
		SIAddCustomParameter l_CustomParam , "Axis", siInt2, _
			io_axis, 0, 4, , siPersistable+siSilent, 0, 4, "Symmetry Axis", "Symmetry Axis"
		SIAddCustomParameter l_CustomParam , "CreateSymmetryMap", siBool, _
			io_createSymmetryMap, , , , siPersistable+siSilent, , , "Create Symmetry Map", "Create Symmetry Map"

		l_CustomParam = l_SceneRoot & "." & l_CPList

	Else
		Set l_CPList = SIAddProp( "CreateSymmetryMappingTemplate", l_SceneRoot , , "CreateSymmetryMappingTemplate").value("Value")

		l_CustomParam = l_SceneRoot & "." & l_CPList

		' Initialize with the input values

		SetValue l_CustomParam & ".Axis",				io_axis
		SetValue l_CustomParam & ".FillTemplate",		io_fillTemplate
		SetValue l_CustomParam & ".CreateSymmetryMap",	io_createSymmetryMap

	End if

	If FWizardDialog(l_CustomParam, XSIUtils.Translate( IDS_CREATE_SYMMETRY_MAP_TEMPLATE_TITLE, "XSISCRIPTS" )) = vbOk Then
		mirror_return = GetValue( l_CustomParam & ".Axis" )
		io_fillTemplate = GetValue( l_CustomParam &".FillTemplate")
		io_createSymmetryMap = GetValue( l_CustomParam &".CreateSymmetryMap")
		DeleteObj l_CustomParam
	Else
		mirror_return = -1
		out_valid = FALSE
		DeleteObj l_CustomParam
		exit function
	End if

	io_axis = mirror_return

end function
'---------------------------------------------
' Get Deformers
'---------------------------------------------
function get_deformers	(in_obj, out_deformers )

	dim deformers, myenv, weights, i

	set deformers = CreateObject("XSI.Collection")
	set myenv = in_obj.activeprimitive.constructionhistory.find("envelopop")
	Weights = myenv.Weights.Array

	weights = myenv.Weights.Array

	For i = lbound(weights ,1) to ubound(weights ,1)
'		87892:	The fact that we didn't mirror effectors caused scenes that have envelope weighting on effectors not to symmetrize correctly. 
'				Enabling symmetry on effectors.
'		if( myenv.deformers(i).type <> "eff" ) then
			deformers.add myenv.deformers(i)
'		End if
	next

	set out_deformers = deformers

end function
'---------------------------------------------
' Process Deformers
'---------------------------------------------
function process_deformers(in_obj, in_deformers, in_axis, out_deformermatches)
	
	' Self matching is allowed, commen if there's a
	' deformer on the mirror plane (spine).
	
	dim deformerArray
	
	get_deformer_positions in_deformers, in_obj, deformerArray

	match_deformers in_deformers, deformerArray, in_axis, out_deformermatches
	
end function
'---------------------------------------------
' Get Deformer Positions
'---------------------------------------------
function get_deformer_positions (in_deformers, in_obj, out_deformerArray)

	' out_deformerArray holds the x, y, z of the deformers
	' at (0), (1), (2).  It's not the global position, but 
	' relative to the local position of in_obj.
	
	dim ox, oy, oz, dex, dey, dez, i, boneIndex, currentSkel
	dim bonex, boney, bonez, nextx, nexty, nextz
	redim deformerArray(2, in_deformers.count - 1)

	
	ox = in_obj.Kinematics.Global.parameters("posx").value
	oy = in_obj.Kinematics.Global.parameters("posy").value	
	oz = in_obj.Kinematics.Global.parameters("posz").value
	
	for i = 0 to in_deformers.count - 1
	
		if in_deformers(i).type = "bone" then
			
			'get the skeleton and the it' bone index
			set currentSkel = GetSkeleton (in_deformers(i), boneIndex)
			
			' the center of the bone is the average between the current bone
			' and the next one in the bone index
			
			bonex = GetValue (in_deformers(i) & ".kine.global.posx")
			boney = GetValue (in_deformers(i) & ".kine.global.posy")
			bonez = GetValue (in_deformers(i) & ".kine.global.posz")	
		
			nextx = GetValue (currentSkel (BoneIndex + 1) & ".kine.global.posx")
			nexty = GetValue (currentSkel (BoneIndex + 1) & ".kine.global.posy")		
			nextz = GetValue (currentSkel (BoneIndex + 1) & ".kine.global.posz")
	
			dex = (nextx + bonex) / 2 
			dey = (nexty + boney) / 2
			dez = (nextz + bonez) / 2
			
		else
	
			dex = GetValue (in_deformers(i) & ".kine.global.posx")
			dey = GetValue (in_deformers(i) & ".kine.global.posy")
			dez = GetValue (in_deformers(i) & ".kine.global.posz")	
		
		end if
		
		' it position relazztive to in_obj is defomer - in_obj
		deformerArray(0,i) = dex - ox
		deformerArray(1,i) = dey - oy		
		deformerArray(2,i) = dez - oz

	next

	out_deformerArray = deformerArray

end function
'---------------------------------------------
' Match Deformers
'---------------------------------------------
function match_deformers (in_deformers, in_dArray, in_axis, out_deformermatches)

	dim i, t, delta_x, delta_y, delta_z, count
	dim deformermatches, difference, best_match, best_match_dif
	set deformermatches = CreateObject("XSI.Collection")

	for i = 0 to Ubound(in_dArray, 2) 
	
		count = 0
	
		'find_match
		for t = 0 to Ubound(in_dArray, 2)
'			87892:	The fact that we didn't mirror effectors caused scenes that have envelope weighting on effectors not to symmetrize correctly. 
'					Enabling symmetry on effectors.
'			if in_deformers(t).type <> "eff" then
						
				delta_x = abs(in_axis(0) * in_dArray(0, i) - in_dArray(0, t))
				delta_y = abs(in_axis(1) * in_dArray(1, i) - in_dArray(1, t))
				delta_z = abs(in_axis(2) * in_dArray(2, i) - in_dArray(2, t))
			
				difference = delta_x + delta_y + delta_z
				
				if count = 0 then
				 	best_match_dif = difference 
					best_match = t
					count = 1
				else 	
					if difference < best_match_dif then
						best_match_dif = difference 
						best_match = t
					end if
				end if			
				
'			end if
		next
		
		' now fill matches with the numeric position of the deformer
		' in the list of deformers.  This makes transfering simpler later
		deformermatches.add in_deformers(best_match)
	next

	set out_deformermatches = deformermatches

end function

sub FillSymmetryMappingTemplate( in_deformers , in_deformermatches, io_symmetryMappingTemplate )

	for i = 0 to in_deformers.count - 1

		if in_deformers( i ) <> in_deformermatches( i ) then
			AddMappingRule io_symmetryMappingTemplate , in_deformers(i).Name , in_deformermatches(i).Name
		end if
	
	next

end sub


'------------------------------------------------------------------------------
' NAME:		SelectDeformersFromEnvelopeProc
'
' INPUT:	in_sel:		Selected Objects
'
' DESCRIPTION:	Selects the deformers that are associated with the selected/given envelope, if any
'				
'------------------------------------------------------------------------------

sub SelectDeformersFromEnvelopeProc( in_objs )
	Dim l_deformers, l_obj, l_geom, l_clusters

	set l_deformers = CreateObject("XSI.Collection")

	for each l_obj in in_objs

		' Get the geometry and then the point clusters
		set l_geom = l_obj.ActivePrimitive.Geometry

		if ( typename( l_geom ) <> "Nothing" ) then

			set l_clusters = l_geom.Clusters.Filter("pnt")
			for each l_cluster in l_clusters

				' From the cluster we can get the envelopes..
				set l_envelopes = l_cluster.Envelopes
				for each l_env in l_envelopes

					' and then the deformers, which we add to the selection list
					for each l_deformer in l_env.Deformers
						l_deformers.Add l_deformer
					next
				next
			next
		end if
	next

	if l_deformers.count > 0 then
		SelectObj l_deformers
	else
		logmessage "No envelope deformers found"
	end if

end sub



'------------------------------------------------------------------------------
' NAME:			EnvelopeAssociateBoundingVolumesProc
' INPUT:		- in_selection: selected deformers or bounding volumes
'				- in_typestr: "Inclusive", "Exclusive" or "Limit"
' DESCRIPTION:  Allows to pick objects ...
' Created by Rejean Gagne
' Date: Avril 2002
'------------------------------------------------------------------------------
sub EnvelopeAssociateBoundingVolumesProc( in_selection, in_typestr )

	Dim l_objs, l_expsel, l_bndvol

	set l_expsel = SelectChildNodes( in_selection, false )
	set l_objs = SIFilter( l_expsel, "chain_element" )

	if typename(l_objs) <> "Nothing"  then
		PickEnvelopeBoundingObjects l_objs, in_typestr
	else
		set l_bndvol = SIFilter( l_expsel, "implicit" )
		if typename(l_bndvol) <> "Nothing"  then
			PickDeformersForBoundingObject l_bndvol, in_typestr
		end if
	end if

end sub

'------------------------------------------------------------------------------
' NAME:			PickEnvelopeBoundingObjects
' INPUT:		- selected deformers
'				- in_typestr: "Inclusive", "Exclusive" or "Limit"
' DESCRIPTION:  Start a pick loop  to pick bounding volumes for the given deform(s)
'				NOTE: this uses scripting commands and not the OM so we can see
'				the results being logged (this is a called from a UI Only command)
' Created by Rejean Gagne
' Date: Avril 2002
'------------------------------------------------------------------------------
sub PickEnvelopeBoundingObjects( in_deformers, in_typestr )
	Dim lstr,mstr,gstr,l_ret,l_btn,l_picked,l_grp

	'Start a pick session for lights
	lstr = XSIUtils.Translate( IDS_PICK_ENVELOPED_BOUNDINGBOX_L_MSG, "XSISCRIPTS" )
	mstr = XSIUtils.Translate( IDS_PICK_ENVELOPED_BOUNDINGBOX_M_MSG, "XSISCRIPTS" )

	l_btn = 1
	while l_btn <> 0
		PickElement "implicit", lstr, mstr, l_picked, l_btn 

		for each l_deformer in in_deformers

			gstr = l_deformer & ".BoundVol." & in_typestr
			if ( l_btn = 1 ) then

				set l_grp = GetValue( gstr )
				' Use SIAddToGroup to avoid an unwanted dialogue to pop up
				SIAddToGroup l_grp, l_picked

			elseif ( l_btn = 2 ) then

				set l_grp = GetValue( gstr )
				
				' Need to use fullname otherwize we get something like
				' "B:cube" due to the MMB pick.
				RemoveFromGroup l_grp, l_picked.fullname
			end if
		next
	wend
end sub

'------------------------------------------------------------------------------
' NAME:			PickDeformersForBoundingObject
' INPUT:		- selected bounding volumes
'				- in_typestr: "Inclusive", "Exclusive" or "Limit"
' DESCRIPTION:  Start a pick loop to pick deformer that should receive the 
'				given object as a bounding volume
'				NOTE: this uses scripting commands and not the OM so we can see
'				the results being logged (this is a called from a UI Only command)
' Created by Rejean Gagne
' Date: Avril 2002
'------------------------------------------------------------------------------
sub PickDeformersForBoundingObject( in_bndvol, in_typestr )
	Dim lstr,mstr,gstr,l_btn,l_picked,l_grp

	'Start a pick session for deformers
	lstr = XSIUtils.Translate( IDS_PICK_DEFORMER_FOR_BOUNDINGOBJ_L_MSG, "XSISCRIPTS" )
	mstr = XSIUtils.Translate( IDS_PICK_DEFORMER_FOR_BOUNDINGOBJ_M_MSG, "XSISCRIPTS" )

	l_btn = 1
	while l_btn <> 0
		PickElement "chain_element", lstr, mstr, l_picked, l_btn 

		gstr = l_picked & ".BoundVol." & in_typestr
		if ( l_btn = 1 ) then

			set l_grp = GetValue( gstr )
			' Use SIAddToGroup to avoid an unwanted dialogue to pop up
			SIAddToGroup l_grp, in_bndvol

		elseif ( l_btn = 2 ) then

			set l_grp = GetValue( gstr )
			RemoveFromGroup l_grp, in_bndvol
		end if
	wend
end sub
