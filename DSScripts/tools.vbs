'******************************************************************************
'
' File supervisor : Rejean Gagne, well not really me...
' Date : dec 99
' (c) Copyright 1999 Softimage
'
' $Archive:  $
' $Revision:  $  $Date:  $
' Checkin by: $Author:  $
'
' @doc
' @module	tools.vbs | VB scripts related to chains
'
'******************************************************************************

'******************************************************************************
' DEBUGGING
'******************************************************************************

' DEVNOTE: remove comment to force explicit declaration of local variables.
'Option explicit

' DEVNOTE: remove comment to force a break point when script loaded.
'stop


'******************************************************************************
' String Constants (used to translate)
'******************************************************************************
const IDS_PICK_OBJECT_TO_COLOR_MSG				= 1152
const IDS_PICK_OBJECT_TO_COLOR_BRANCH_MSG		= 1153
const IDS_DUPULICATE_TOOL_PICK_COPY_POS_MSG		= 1154
const IDS_DRAW_IMPLICIT_PRIMITIVE_MSG			= 1155
const IDS_PICK_PARENTS_TOOL_PARENT_MSG			= 1156
const IDS_PICK_PARENTS_TOOL_CHILD_MSG			= 1157



'------------------------------------------------------------------------------
' NAME:		ColorizeObjectTool
'
' INPUT:	Red, Green, Blue - RGB wire color to set on the picked objects
'
' DESCRIPTION: Enters a pick session where you can set wire color interactively to objects
'------------------------------------------------------------------------------
sub ColorizeObjectTool( in_Red, in_Green, in_Blue )

	'Loop until the user escapes
	l_Cancel = FALSE
	do while l_Cancel = FALSE
		set rtn = PickObject( XSIUtils.Translate( IDS_PICK_OBJECT_TO_COLOR_MSG, "XSISCRIPTS" ), XSIUtils.Translate( IDS_PICK_OBJECT_TO_COLOR_BRANCH_MSG, "XSISCRIPTS" ))
		select case rtn.value("ButtonPressed")
			case 0
				l_Cancel = TRUE
				exit do
			case 1
				l_mode = siNodePropagation
			case 2
				l_mode = siBranchPropagation 
		end select
	
		set pickeditem = rtn.Value("PickedElement")

		set pickedobj = SIFilter( pickeditem, "SceneObject", TRUE )
	
		if IsEmpty(pickedobj) Or TypeName(pickedobj) = "Nothing" then
			LogMessage "Please select an object"
		else
	
			checkpset = pickedobj & ".display"
				
			set localdisplpset = MakeLocal( checkpset, l_mode ) 
	
			if IsEmpty(localdisplpset) Or TypeName(localdisplpset) = "Nothing" then
				set localdisplpset = GetValue( checkpset )
			end if
			
			SetValue   checkpset & ".wirecolorr", in_Red
			SetValue   checkpset & ".wirecolorg", in_Green
			SetValue   checkpset & ".wirecolorb", in_Blue
		end if
	loop

end sub


'------------------------------------------------------------------------------
' NAME:		ShadeObjectTool
'
' INPUT:	in_ShadeMode - id of the shade mode to set on the picked objects
'
' DESCRIPTION: Enters a pick session where you can set shade mode interactively to objects
'------------------------------------------------------------------------------
sub ShadeObjectTool( in_ShadeMode )

	'Loop until the user escapes
	l_Cancel = FALSE
	do while l_Cancel = FALSE
		set rtn = PickObject( XSIUtils.Translate( IDS_PICK_OBJECT_TO_COLOR_MSG, "XSISCRIPTS" ), XSIUtils.Translate( IDS_PICK_OBJECT_TO_COLOR_BRANCH_MSG, "XSISCRIPTS" ))
		select case rtn.value("ButtonPressed")
			case 0
				l_Cancel = TRUE
				exit do
			case 1
				l_mode = siNodePropagation
			case 2
				l_mode = siBranchPropagation 
		end select
		set pickeditem = rtn.Value("PickedElement")

		set pickedobj = SIFilter( pickeditem, "SceneObject", TRUE )

		if IsEmpty(pickedobj) Or TypeName(pickedobj) = "Nothing" then
			LogMessage "Please select an object"
		else

			checkpset = pickedobj & ".display"
			
			set localdisplpset = MakeLocal( checkpset, l_mode ) 

			if IsEmpty(localdisplpset) Or TypeName(localdisplpset) = "Nothing" then
				set localdisplpset = GetValue( checkpset )
			end if
		
			SetValue   checkpset & ".staticsel", in_ShadeMode
			SetValue   checkpset & ".intsel", in_ShadeMode
			SetValue   checkpset & ".playbacksel", in_ShadeMode
			SetValue   checkpset & ".staticunselnear", in_ShadeMode
			SetValue   checkpset & ".intunselnear", in_ShadeMode
			SetValue   checkpset & ".playbackunselnear", in_ShadeMode
			SetValue   checkpset & ".staticunselfar", in_ShadeMode
			SetValue   checkpset & ".intunselfar", in_ShadeMode
			SetValue   checkpset & ".playbackunselfar", in_ShadeMode

		end if
	loop

end sub


'------------------------------------------------------------------------------
' NAME:		DuplicateTool
'
' INPUT:	objlist
'
' DESCRIPTION: Enters a pick session where you can set shade mode interactively to objects
'------------------------------------------------------------------------------
sub DuplicateTool( in_objlist )

Dim l_pickedpos, l_duplobj, l_cancel

l_cancel = FALSE
if ( in_objlist.Count > 0 ) then

	'Loop over pick position
	do while l_cancel = FALSE
	
		set l_pickedpos = PickPosition(XSIUtils.Translate( IDS_DUPULICATE_TOOL_PICK_COPY_POS_MSG, "XSISCRIPTS" ))
		' Exit if the Right Button was pressed.
		if l_pickedpos.value("ButtonPressed") = 0 then
			l_cancel = TRUE
			exit do
		end if

		for each item in in_objlist
			set l_duplobj = SIDuplicate( item, 1, , , siNoParent )

			' IMPORTANT: the option siNoParent doesn't work in SISuplicate
			' for objects. Thus i need to cut the object myself:
			' (see bug 51469)
			CutObj( l_duplobj )
			
			'move to the right position
			SetValue l_duplobj & ".kine.posX", l_pickedpos.value("PosX")
			SetValue l_duplobj & ".kine.posY", l_pickedpos.value("PosY")
			SetValue l_duplobj & ".kine.posZ", l_pickedpos.value("PosZ")

			set l_initstateprop = l_duplobj(0).properties.find("DynamicsInitState")

			if typename( l_initstateprop ) <> "Nothing" then
				l_initstateprop.parameters("posx").value = l_pickedpos.value("PosX") 
				l_initstateprop.parameters("posy").value = l_pickedpos.value("PosY") 
				l_initstateprop.parameters("posz").value = l_pickedpos.value("PosZ")
			end if
		next
	loop
else
	LogMessage "Nothing to Duplicate. Select an object first."
end if

end sub

'------------------------------------------------------------------------------
' NAME:		DrawPrimitiveTool
'
' INPUT:	in_preset : string for which type of primitive (preset) to create
'			in_geomtype: string for which type of geometry to create (nurbs, mesh..)
'
' DESCRIPTION: Enters a pick session where you can interactively draw primitives in viewports
'------------------------------------------------------------------------------
sub DrawPrimitiveTool( in_preset, in_geomtype, in_name, in_parent )

	Dim l_pickedpos, l_newobj, l_cancel

	l_cancel = FALSE
	'Loop over pick position
	do while l_cancel = FALSE
	
		set l_pickedpos = PickPosition(XSIUtils.Translate( IDS_DRAW_IMPLICIT_PRIMITIVE_MSG, "XSISCRIPTS" ))
		' Exit if the Right Button was pressed.
		if l_pickedpos.value("ButtonPressed") = 0 then
			l_cancel = TRUE
			exit do
		end if

		' Create the requested primitive
		set l_newobj = CreatePrim( in_preset, in_geomtype, in_name, in_parent )
			
		'move to the right position
		SetValue l_newobj & ".kine.posX", l_pickedpos.value("PosX")
		SetValue l_newobj & ".kine.posY", l_pickedpos.value("PosY")
		SetValue l_newobj & ".kine.posZ", l_pickedpos.value("PosZ")
	loop

end sub

'------------------------------------------------------------------------------
' NAME:		DrawImplicitPrimitiveTool
'
' INPUT:	in_preset : string for which type of primitive (preset) to create
'
' DESCRIPTION: Enters a pick session where you can interactively draw primitives in viewports
'------------------------------------------------------------------------------
sub DrawImplicitPrimitiveTool( in_preset, in_name, in_parent )

	Dim l_pickedpos, l_newobj, l_cancel

	l_cancel = FALSE
	'Loop over pick position
	do while l_cancel = FALSE
	
		set l_pickedpos = PickPosition(XSIUtils.Translate( IDS_DRAW_IMPLICIT_PRIMITIVE_MSG, "XSISCRIPTS" ))
		' Exit if the Right Button was pressed.
		if l_pickedpos.value("ButtonPressed") = 0 then
			l_cancel = TRUE
			exit do
		end if

		' Create the requested primitive
		set l_newobj = GetPrim( in_preset )
			
		'move to the right position
		SetValue l_newobj & ".kine.posX", l_pickedpos.value("PosX")
		SetValue l_newobj & ".kine.posY", l_pickedpos.value("PosY")
		SetValue l_newobj & ".kine.posZ", l_pickedpos.value("PosZ")
	loop

end sub

'------------------------------------------------------------------------------
' NAME:		PickParentsTool
'
' INPUT:	
'
' DESCRIPTION: 
'------------------------------------------------------------------------------
sub PickParentsTool()

	Dim l_parent, l_child, l_cancel

	l_cancel = FALSE
	'Loop over pick position
	do while l_cancel = FALSE
	
		set l_parent = PickObject(XSIUtils.Translate( IDS_PICK_PARENTS_TOOL_PARENT_MSG, "XSISCRIPTS" ))
		' Exit if the Right Button was pressed.
		if l_parent.value("ButtonPressed") = 0 then
			l_cancel = TRUE
			exit do
		end if

		set l_child = PickObject(XSIUtils.Translate( IDS_PICK_PARENTS_TOOL_CHILD_MSG, "XSISCRIPTS" ))
		' Exit if the Right Button was pressed.
		if l_child.value("ButtonPressed") = 0 then
			l_cancel = TRUE
			exit do
		end if

		' Parent the picked items
		ParentObj l_parent, l_child 
	loop

end sub


'------------------------------------------------------------------------------
' NAME:		PaintPushTool
'
' INPUT:	Script that sets up everything that's needed to paint a weight map for a push operator
'
' DESCRIPTION: 
'------------------------------------------------------------------------------
sub PaintPushTool()

	set maps = CreateWeightMap( , , "PushMap" )

	for each map in maps
		' default to zero, allow range of [-1 to 1]
		SetValue map & ".weightmapop.weight", 0.0
		SetValue map & ".weightmapop.wmin",  -1.0
		SetValue map & ".weightmapop.wmax",   1.0

		' nice colors
		SetValue map & ".red", 70
		SetValue map & ".green", 70
		SetValue map & ".blue", 177
	
		set push_op = ApplyOp( "Push", map )
		SetValue push_op & ".ampl", 2.0
	next

	PaintTool
	SetValue "BrushProperties.Radius", 1.0
end sub