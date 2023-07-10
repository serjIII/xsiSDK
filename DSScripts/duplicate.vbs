'*********************************************************************************************
'
' File supervisor : simonin
' Date :
' (c) Copyright 1999  Softimage Co. All rights reserved.
'
' @doc EXTERNAL
'
' $Archive: $
' $Revision: $  $Date: $
' Checkin by: $Author: $
'
' @module	Duplicate/Instance 
'
'*********************************************************************************************

' Ensure that all variables are explicitly declared
Option explicit

'******************************************************************************
' DEBUGGING
'******************************************************************************
Dim DiagnosticsEnabled

' DEVNOTE: remove comment to force a break point when script loaded.
' stop

' DEVNOTE: remove comment to enable diagnostic logging
'DiagnosticsEnabled = TRUE

'******************************************************************************
' CONSTANTS
'******************************************************************************

Dim siInstanceFilterArray

' CONSTANTS For SIFilter
const siDuplicateFilter		= "sceneobject, pass, group, cluster, sources, materialproperty"
const siDuplicateSymmetryFilter = "sceneobject, pass, group, sources" 
siInstanceFilterArray		= Array("geometry, null, model", "~chain_element")
const siInstanceFilter = "model"
const siDuplicateFlag = 1
const siLiveCopyFlag = 2
const siInstanceFlag = 3

'******************************************************************************
' String Constants (used to translate)
'******************************************************************************
const IDS_NEED_SELECT_OBJECT_ERROR_MSG			= 1059
const IDS_DUPULICATE_MULTI_TITLE				= 1060
const IDS_DUPULICATE_MULTI_ERROR_MSG			= 1061
const IDS_CLONE_MULTI_TITLE						= 1062
const IDS_CLONE_MULTI_ERROR_MSG					= 1063
const IDS_DUPULICATE_SYMMETRY_TITLE				= 1064
const IDS_INSTANCE_ERROR_MSG					= 1065
const IDS_INSTANCE_SINGLE_ERROR_TITLE			= 1066
const IDS_INSTANCE_MULTI_ERROR_TITLE			= 1067
const IDS_DUPULICATE_FROM_ANIM_TITLE			= 1068
const IDS_GET_INPUT_FRAME_MSG					= 1069
const IDS_GET_INPUT_FRAME_TITLE					= 1070



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
	Dim l_Scene, l_SceneRoot, l_Children

	set FGetSceneRoot = Nothing
	set l_Children = EnumElements("Project")
	set l_Scene = SIFilter(l_Children,siSceneFilter)
	set l_Children = EnumElements(l_Scene(0))
	set l_SceneRoot = SIFilter(l_Children,siObjectFilter)
	set FGetSceneRoot = l_SceneRoot(0)

end function

'------------------------------------------------------------------------------
' NAME:		FWizardDialog
'
' INPUT:	in_customparam			custom parameters for wizard
'			in_title				title for wizard dialog
'
' DESCRIPTION: popup wizard dialog
'------------------------------------------------------------------------------
function FWizardDialog(in_customparam, in_title)

	On Error Resume Next
	'This is the lazy approach. Load the Duplicate Preferences along.
	InspectObj in_customparam,"",in_title,siModal

	if Err.Number = 0 then
		FWizardDialog = vbOk
	else
		FWizardDialog = vbCancel
	end if

end function

'------------------------------------------------------------------------------
' NAME:		IsBonePrimitive
'
' INPUT:	in_Obj			object to test whether it is a Bone Primitive
' OUTPUT:	true 			if in_Obj is a Bone Primitive
'
' DESCRIPTION: Helper function to check if in_Obj is a Bone Primitive
'------------------------------------------------------------------------------
function IsBonePrimitive(in_Obj)
    IsBonePrimitive = (in_Obj.Type = "bone" and in_Obj.ActivePrimitive.BelongsTo(siImplicitGeometryFamily))
end Function

'------------------------------------------------------------------------------
' NAME:		InstallCopyOp
'
' INPUT:	in_Preset			operator preset
'			in_SrcObj			source object 
'			in_DestObjs
' OUTPUT:	N/A
'
' DESCRIPTION: install operator between source and target on all objects in
' hierarchy (hierachies must be identical)
'------------------------------------------------------------------------------
sub InstallCopyOp( _
	in_Preset, _
	in_SrcObj, _
	in_DestObjs, _
	in_ConnectType _
)
	Dim l_SrcChild, l_SrcChildren, l_Dest, l_DestChildren, _
		Index, l_TmpChildren, myList, l_Filtered

	On error resume next

	' -----------------------------------------
	' Validate inputs
	' -----------------------------------------
	if IsEmpty(in_Preset) Or TypeName(in_Preset) = "Nothing" Then
		Exit Sub
	end if
	if IsEmpty(in_SrcObj) Or TypeName(in_SrcObj) = "Nothing" Then
		Exit Sub
	end if
	if IsEmpty(in_DestObjs) Or TypeName(in_DestObjs) = "Nothing" Then
		Exit Sub
	end if
	if in_ConnectType = siUnspecified Then
		in_ConnectType = in_SrcObj.branchflag
	end if

	' -----------------------------------------
	' Apply generator op to root of hierarchy
	' -----------------------------------------
	set myList = CreateObject("XSI.Collection")
	myList.Add(in_SrcObj)

	set l_Filtered = SIFilter( myList, "Geometry" )
	
	if TypeName(l_Filtered) <> "Nothing" Then
		ApplyOperator in_Preset,  in_SrcObj & ";" & in_DestObjs,siNode
	End if

	' -----------------------------------------
	' Apply generator op to children of hierarchy
	' -----------------------------------------
	if in_ConnectType = siBranch Then
		set l_SrcChildren = EnumElements( in_SrcObj & ".Children" )

		if Not TypeName(l_SrcChildren) = "Nothing" Then
			set l_DestChildren = CreateObject("XSI.Collection")
			for Index=0 To l_SrcChildren.Count - 1 
				for each l_Dest in in_DestObjs
					set l_TmpChildren = EnumElements( l_Dest & ".Children" )
					l_DestChildren.Add l_TmpChildren(Index)
				next
				InstallCopyOp in_Preset, l_SrcChildren(Index), l_DestChildren, siBranch
				l_DestChildren.Clear
			next
		end if
	end if
		
end sub

'------------------------------------------------------------------------------
' NAME:		MakeClone
'
' INPUT:	in_SrcObj - source object
'			in_TargetObjs - targets object
'
' DESCRIPTION: Helper subroutine to turn objects into clones
'------------------------------------------------------------------------------

sub MakeClone( in_SrcObj, in_TargetObjs )
	FreezeObj in_TargetObjs, , siUnspecified
	'
	' Attach a CopyOp on frozen duplicate & children
	'
	InstallCopyOp "CopyOp",  in_SrcObj, in_TargetObjs, siUnspecified
end sub

'------------------------------------------------------------------------------
' NAME:		ParentUnderNewNull
'
' INPUT:	in_SrcObj		- source object
'			in_TargetObjs	- duplicated objects
'			io_NewParent	- null parent
'
' DESCRIPTION: Helper subroutine for parenting objects under new null parent
'------------------------------------------------------------------------------
sub ParentUnderNewNull( in_SrcObj, in_TargetObjs, ByRef io_NewParent )
	Dim l_NewNull, l_Parent

	If typename(io_NewParent) = "Nothing" Then
		set io_NewParent = SIGetPrim( "Null" ).value("Value")
	End If

	ParentObj io_NewParent, in_TargetObjs

	'
	' if parent of source 3dobject is not another 3dobject then parent source 
	' 3dobject under new Null.
	'
	set l_Parent = EnumElements( in_SrcObj, FALSE )(0)
	' skip intermediate
	set l_Parent = EnumElements( l_Parent, FALSE )(0)
	' get parent of parent
	set l_Parent = EnumElements( l_Parent, FALSE )(0)

	' source object under scene root 
	if StrComp(l_Parent.Type,"scene", vbTextCompare) = 0 then
		ParentObj io_NewParent, in_SrcObj
	end if

end sub


'------------------------------------------------------------------------------
' NAME:		FDuplicateObjects
'
' INPUT:	in_Objects		3D objects to duplicate
'			in_NbItems		number of duplicates of each object required.
'			in_Instance		flag to determine Duplicate/LiveCopy/Instance behaviour
'			in_History		How to duplicate object construction history ()
'			in_Hierarchy	How to parent the duplicated object
'			in_Grouping		How to group duplicated object
'			in_Properties	How to duplicate properties
'			in_Animation	How to duplicate animation
'			in_Constraint	How to duplicate constraints
'			in_Selection	How to change selection i.e. select duplicates or source
'			in_Placement	How to apply offsets to new instances
'
' OUTPUT:	return			list of duplicates
'
' DESCRIPTION: Duplicate an object
'------------------------------------------------------------------------------
function FDuplicateObjects( _
	in_Objects, _
	in_NbItems, _
	in_Instance, _
	in_History, _
	in_Hierarchy, _
	in_Grouping, _
	in_Properties, _
	in_Animation, _
	in_Constraint, _
	in_Selection, _
	in_Placement, _
	in_Sx, in_Sy, in_Sz, _
	in_Rx, in_Ry, in_Rz, _
	in_Tx, in_Ty, in_Tz, _
	in_TxtSupport )			

	Dim l_DupObjects

	set FDuplicateObjects = Nothing
	set l_DupObjects = Nothing

	if TypeName(in_Objects) = "Nothing" Then
		Exit Function
	end if

	if in_NbItems = 0 Then
		Exit Function
	end if

	'--------------------------------------------------------------------------
	' Duplicate objects
	'--------------------------------------------------------------------------
	if DiagnosticsEnabled then
		logmessage "FDuplicateObjects"
		logmessage "	input objects: " & in_Objects
	end if

	if in_Instance = siInstanceFlag then
		' now call the SIInstantiate, low level task for creation of an instance.
		set l_DupObjects = SIInstantiate(in_Objects, in_NbItems)
	else 
		set l_DupObjects = SIDuplicate( _
			in_Objects, _
			in_NbItems,_
			siUnspecified,_
			in_History,_
			in_Hierarchy,_
			in_Grouping, _
			in_Properties, _
			in_Animation, _
			in_Constraint, _
			in_TxtSupport )
	end if
	
	if TypeName(l_DupObjects) = "Nothing" then
		exit function
	end if 

	if DiagnosticsEnabled then
		logmessage "FDuplicateObjects new objects: " & l_DupObjects
	end if

	'--------------------------------------------------------------------------
	' Distribute objects 
	'--------------------------------------------------------------------------
	If in_Placement = siApplyRepeatXForm Then
		call DeltaDistribute( _
			l_DupObjects, _
			in_NbItems, _
			in_Sx, in_Sy, in_Sz, _
			in_Rx, in_Ry, in_Rz, _
			in_Tx, in_Ty, in_Tz )		
	End If

	'--------------------------------------------------------------------------
	' Process hierachy/instance/transform options
	'--------------------------------------------------------------------------
	If in_Hierarchy <> -1 Or in_Instance = siLiveCopyFlag Then
		Dim l_Index, l_DupIndex, l_DupObj, l_DupSubList, l_SrcObj, l_NullParent

		set l_DupSubList = Nothing
		set l_NullParent = Nothing

		if DiagnosticsEnabled then
			logmessage "Processing hierarch/instance/transform options of LiveCopy" 
			logmessage "	in_Hierarchy = " & in_Hierarchy
			logmessage "	in_Instance = " & in_Instance
			logmessage "FDuplicateObjects: source: " & in_Objects & _
				" target: " &  l_DupObjects
		end if

		For l_Index=0 to in_Objects.Count - 1 
			set l_SrcObj = in_Objects(l_Index)

			for l_DupIndex=0 to in_NbItems-1
				set l_DupObj = l_DupObjects(l_Index+(l_DupIndex*in_Objects.Count))
				if DiagnosticsEnabled then
					logmessage "FDuplicateObjects: source: " & l_SrcObj & "(" & l_Index & ")" & _
						" target: " & l_DupObj  & "(" &  l_Index+(l_DupIndex*in_NbItems) & ")"
				end if
				if TypeName(l_DupSubList) = "Nothing" then
					set l_DupSubList = CreateObject("XSI.Collection")	
				end if
				if l_DupObj.Type <> "" then
					l_DupSubList.Add l_DupObj
				end if		
			next
 
			if TypeName(l_DupSubList) <> "Nothing" then
				If CInt(in_Hierarchy) = siNoParent Then
					CutObj l_DupSubList
				ElseIf CInt(in_Hierarchy) = siSharedParent  Then
					' default duplicate behaviour is duplicate the target under 
					' the same parent as the source.
				ElseIf CInt(in_Hierarchy) = siNewNullParent  Then
					if DiagnosticsEnabled then
						logmessage "	New Null Parent"
					end if
					ParentUnderNewNull l_SrcObj, l_DupSubList, l_NullParent
				End If
				l_DupSubList.Clear
			end if
		Next
	end if

	set FDuplicateObjects = l_DupObjects

end function

'------------------------------------------------------------------------------
' NAME:		DeltaDistribute
'
' INPUT:	in_Objects		source object to distribute
'			in_NbItems		nb copies
'			in_Sx			Transform values.
'			in_Sy			-
'			in_Sz			-
'			in_Rx			-
'			in_Ry			-
'			in_Rz			-
'			in_Tx			-
'			in_Ty			-
'			in_Tz			-
' OUTPUT:	N/A
'
' DESCRIPTION: Apply delta transforms on objects.
'------------------------------------------------------------------------------
sub DeltaDistribute( _
	in_Objects, _
	in_NbItems, _
	ByRef in_Sx, ByRef in_Sy, ByRef in_Sz, _
	ByRef in_Rx, ByRef in_Ry, ByRef in_Rz, _
	ByRef in_Tx, ByRef in_Ty, ByRef in_Tz _
)
	Dim l_Index, l_DupIndex, l_DupObj, l_DupSubList, l_SrcCount

	set l_DupSubList = Nothing

	l_SrcCount = in_Objects.Count / in_NbItems

	for l_Index=1 to in_NbItems
		For l_DupIndex=0 to l_SrcCount - 1 

			set l_DupObj = in_Objects(l_DupIndex + ((l_Index-1)*l_SrcCount))

			if TypeName(l_DupSubList) = "Nothing" then
				set l_DupSubList = CreateObject("XSI.Collection")	
			end if

			if l_DupObj.Type <> "" then
				l_DupSubList.Add l_DupObj
			end if		
		next

		if DiagnosticsEnabled then
			logmessage "DeltaDistribute: " & l_DupSubList & _
				" S(" & in_Sx  ^ l_Index & "," & in_Sy  ^ l_Index & "," & in_Sz  ^ l_Index & ")" & _  
				" R(" & in_Rx  * l_Index & "," & in_Ry  * l_Index & "," & in_Rz  * l_Index & ")"  &_  
				" T(" & in_Tx  * l_Index & "," & in_Ty  * l_Index & "," & in_Tz  * l_Index & ")" 
		end if

		'
		' @todo combine SRT into single tranform operation
		'
		if abs(in_Sx - 1.0) > 1e-9 or abs(in_Sy - 1.0) > 1e-9 or abs(in_Sz - 1.0) > 1e-9 Then
			Scale l_DupSubList, _
				in_Sx ^ l_Index , _
				in_Sy ^ l_Index, _
				in_Sz ^ l_Index, siRelative 
		end if
		if abs(in_Rx) > 1e-9 or abs(in_Ry) > 1e-9 or abs(in_Rz) > 1e-9 Then
			Rotate l_DupSubList, _
				in_Rx * l_Index , _
				in_Ry * l_Index , _
				in_Rz * l_Index, siRelative
		end if
		if abs(in_Tx) > 1e-9 or abs(in_Ty) > 1e-9 or abs(in_Tz) > 1e-9 Then
			Translate l_DupSubList, _
				in_Tx * l_Index , _
				in_Ty * l_Index , _
				in_Tz * l_Index, siRelative
		end if

		if TypeName(l_DupSubList) <> "Nothing" then
			l_DupSubList.Clear	
		end if
	next

end sub

'------------------------------------------------------------------------------
' NAME:		GetDuplicateOptions
'
' INPUT:	- 
'			- 
'			- 
'
' DESCRIPTION: Helper subroutine to get missing duplicate options.
'------------------------------------------------------------------------------
sub GetDuplicateOptions( _
	ByRef in_History, _
	ByRef in_Hierarchy, _
	ByRef in_Grouping, _
	ByRef in_Properties, _
	ByRef in_Animation, _
	ByRef in_Constraint, _
	ByRef in_Selection, _
	ByRef in_Placement, _
	ByRef in_Sx, ByRef in_Sy, ByRef in_Sz, _
	ByRef in_Rx, ByRef in_Ry, ByRef in_Rz, _
	ByRef in_Tx, ByRef in_Ty, ByRef in_Tz, _
	ByRef in_TrackXform, _
	ByRef in_TxtSupport _
)			
	if in_History = -1 Then
		in_History = CInt(GetValue("Preferences.Duplicate.History"))
	end if
	
	if in_Hierarchy = -1 Then
		in_Hierarchy = CInt(GetValue("Preferences.Duplicate.Hierarchy"))
	end if

	if in_Grouping = -1 Then
		in_Grouping = CInt(GetValue("Preferences.Duplicate.Grouping"))
	end if

	if in_Properties = -1 Then
		in_Properties = CInt(GetValue("Preferences.Duplicate.Properties"))
	end if

	if in_Animation = -1 Then
		in_Animation = CInt(GetValue("Preferences.Duplicate.Animation"))
	end if

	if in_Constraint = -1 Then
		in_Constraint = CInt(GetValue("Preferences.Duplicate.Constraints"))
	end if

	if in_Selection = -1 Then
		in_Selection = CInt(GetValue("Preferences.Duplicate.Selection"))
	end if

	if in_Placement = -1 Then
		in_Placement = CInt(GetValue("Preferences.Duplicate.Xform"))
	end if

	if in_Sx = "" Then
		in_Sx = GetValue("Preferences.Duplicate.Transform.Sx")
	end if

	if in_Sy = "" Then
		in_Sy = GetValue("Preferences.Duplicate.Transform.Sy")
	end if

	if in_Sz = "" Then
		in_Sz = GetValue("Preferences.Duplicate.Transform.Sz")
	end if

	if in_Rx = "" Then
		in_Rx = GetValue("Preferences.Duplicate.Transform.Rx")
	end if

	if in_Ry = "" Then
		in_Ry = GetValue("Preferences.Duplicate.Transform.Ry")
	end if

	if in_Rz = "" Then
		in_Rz = GetValue("Preferences.Duplicate.Transform.Rz")
	end if

	if in_Tx = "" Then
		in_Tx = GetValue("Preferences.Duplicate.Transform.Tx")
	end if

	if in_Ty = "" Then
		in_Ty = GetValue("Preferences.Duplicate.Transform.Ty")
	end if

	if in_Tz = "" Then
		in_Tz = GetValue("Preferences.Duplicate.Transform.Tz")
	end if

	if in_TrackXform = "" Then
		in_TrackXform = GetValue("Preferences.Duplicate.trackxform")
	end if

	if in_TxtSupport = -1 Then
		in_TxtSupport = CInt(GetValue("Preferences.Duplicate.texturesupports"))
	end if
	
	if DiagnosticsEnabled then
		logmessage "Duplicate options " 
		logmessage "	Hier	" & in_Hierarchy
		logmessage "	Group	" & in_Grouping
		logmessage "	Prop	" & in_Properties
		logmessage "	Anim	" & in_Animation
		logmessage "	Const	" & in_Constraint
		logmessage "	Sel 	" & in_Selection
		logmessage "	Place	" & in_Placement
		logmessage "	Scale	" & in_Sx & "," & in_Sy & "," & in_Sz
		logmessage "	Trans	" & in_Tx & "," & in_Ty & "," & in_Tz
		logmessage "	Rot 	" & in_Rx & "," & in_Ry & "," & in_Rz
		logmessage "	TxtSupp	" & in_TxtSupport
	end if

end sub

'------------------------------------------------------------------------------
' NAME:		PostDuplicateProcessing
'
' INPUT:	in_Objs - list of duplicated objects
'			in_History - duplicate/clone history options 
'			in_Grouping - duplicate/instance grouping options 
'			in_Properties - duplicate/clone properties options 
'			in_Animation - duplicate/clone animation options 
'			in_Constraint - duplicate/clone constraint options 
'			in_Selection - duplicate/clone selection options 
'			in_TrackXform - track xform of duplicate object
'			- 
'
' DESCRIPTION: Helper subroutine to post-duplicate processing.
'------------------------------------------------------------------------------
sub PostDuplicateProcessing( _
	in_Objs, _
	in_History, _
	in_Grouping, _
	in_Properties, _
	in_Animation, _
	in_Constraint, _
	in_Selection, _
	in_TrackXform _
)			
	Dim l_3DObjects, l_TrackXform, l_Tracking

	if DiagnosticsEnabled then
		logmessage "PostDuplicateProcessing "
		logmessage "	in_Objs:		" & in_Objs
		logmessage "	in_History:		" & in_History
		logmessage "	in_Grouping:	" & in_Grouping
		logmessage "	in_Properties:	" & in_Properties
		logmessage "	in_Animation:	" & in_Animation
		logmessage "	in_Constraint:	" & in_Constraint
		logmessage "	in_Selection:	" & in_Selection
		logmessage "	in_TrackXForm:	" & in_TrackXForm
	end if


	'
	' Handle the History options
	'
	If CInt(in_History) = siCurrentHistory Then
		FreezeObj in_Objs, , siUnspecified
	End If

	'
	' Handle the Animation options
	'
	
	If CInt(in_Animation) = siNoAnimation Then
		RemoveAllAnimationProc in_Objs,"",siUnspecified,siFCurveSource or siExpressionSource, siAllParam, FALSE, TRUE, TRUE
	End If

	'
	' Handle the Constraint options
	'
	If CInt(in_Constraint) = siNoConstraints Then
		RemoveAllCns in_Objs, siUnspecified
	End If

	'
	' If we require track and we are already tracking then 
	' temporarily disable tracksxform so that original xform settings 
	' are not lost when we change the selection
	'
	If in_TrackXform Then
		l_Tracking = GetValue( "Preferences.Duplicate.ActiveXformObj" ) <> ""

		if l_Tracking then
			l_TrackXform = GetValue( "Preferences.Duplicate.trackxform" )

			if l_TrackXform then
				SetValue "Preferences.Duplicate.trackxform", -1	
			end if
		end if
	end if

	'
	' Handle the Selection options
	'
	If CInt(in_Selection) = siAddToSelection Then
		AddToSelection in_Objs
	ElseIf CInt(in_Selection) = siSetSelection  Then
		SelectObj in_Objs
	End If

	'
	' Handle the Active Xform Object
	' (must happen after selection)
	'
	If  in_TrackXform And in_Objs.Count > 0 Then
		' find one 3dobject to act as the reference
		set l_3DObjects = SIFilter( in_Objs, siObjectFilter )

		if TypeName(l_3DObjects) <> "Nothing" Then
			SetValue "Preferences.Duplicate.ActiveXformObj", l_3DObjects(0).FullName
			SISaveDuplicateXformForUndo
		end if

		' reenable tracking after the active xform has been set.
		if l_Tracking then
			SetValue "Preferences.Duplicate.trackxform", TRUE	
		end if
	End If

end sub

'******************************************************************************
' Duplicate Functions
'******************************************************************************

'------------------------------------------------------------------------------
' NAME:		Duplicate_ValidatorProc
'
' INPUT:	in_InputObjs		
' OUTPUT:	validated objects
'
' RETURN:	True is objects valid
'
' DESCRIPTION: filter input list by objects that can be duplicated
'------------------------------------------------------------------------------
function Duplicate_ValidatorProc(in_InputObjs, ByRef out_ValidatedObjs)
	Dim l_NbItems, l_Objects, l_Item, l_Items, l_Parent

	Duplicate_ValidatorProc = False
	set out_ValidatedObjs = Nothing

	if DiagnosticsEnabled then
		logmessage "Duplicate_ValidatorProc"
		logmessage "	input objects: " & in_InputObjs
	end if

	if TypeName(in_InputObjs) = "Nothing" Then
		exit function
	end if

	' validate input objects (only objects, groups, properties and clusters)
	set l_Objects = SIFilter( in_InputObjs, siDuplicateFilter,TRUE,siSearchFamilies )
	if DiagnosticsEnabled then
		logmessage "	filtered objects: " & l_Objects
	end if

	if TypeName(l_Objects) = "Nothing" Then
		exit function
	end if

	' -----------------------------------------
	' Custom Filtering
	' -----------------------------------------

	' reject all layers and partitions
	set l_Objects = SIFilter( l_Objects , "objectpartition , lightpartition , layer", FALSE )

	if TypeName(l_Objects) = "Nothing" Then
		if DiagnosticsEnabled then
			logmessage "Duplicate_ValidatorProc: rejected all partitions & layers"
		end if
		exit function
	end if

	' reject all scene roots.
	set l_Items = SIFilter( l_Objects, "model" )

	if TypeName(l_Items) <> "Nothing" Then
		for each l_Item in l_Items
			set l_Parent = EnumElements(l_Item,FALSE)(0)
			if StrComp(l_Parent.Type, "scene", vbTextCompare) = 0 then
				l_Objects.Remove l_Item
			end if
		next 
	end if

	' reject all non-root chain elements and
	' reject any chain root not selected in branch/tree.
	set l_Items = SIFilter( l_Objects, "chain_element" )

	if TypeName(l_Items) <> "Nothing" Then
		for each l_Item in l_Items
			if StrComp(l_Item.Type, "root", vbTextCompare) = 0 then
				if Not l_Item.BranchFlag = siBranch then
					l_Objects.Remove l_Item
				end if
			' Bone Primitives are not excluded. They can be duplicated like normal primitives
			elseif Not IsBonePrimitive(l_Item) then
				l_Objects.Remove l_Item		
			end if
		next 
	end if

	' Reject all default cameras (which are nested under Views.View*)
	set l_Items = SIFilter( l_Objects, "camera" )
	if TypeName(l_Items) <> "Nothing" Then
		for each l_Item in l_Items
			' See if this camera is a view camera
			if l_Item.Parent.IsEqualTo(l_Item) then
				' This is a default camera, so reject it
				l_Objects.Remove l_Item
			end if
		next
	end if

	'
	'filter materials
	'
	set l_Items = SIFilter( l_Objects, "materialproperty" )
	if TypeName(l_Items) <> "Nothing" Then
		for each l_Item in l_Items
			' see if the material is on a locked library
			if l_Item.Parent.IsLocked then
				logmessage "Object " & l_Item.fullname & " has a locked parent and cannot be duplicated"
				l_Objects.Remove l_Item
			end if
		next
	end if

	' -----------------------------------------
	' Return filtered objects
	' -----------------------------------------

	if l_Objects.Count <> 0 then
		Duplicate_ValidatorProc = True
		set out_ValidatedObjs = l_Objects
	end if

end function


'------------------------------------------------------------------------------
' NAME:		DuplicateProc
'
' INPUT:	in_InputObjs	source objects to duplicate
'			in_NbItems		number of duplicates of each object required.
'			in_History		How to duplicate object construction history ()
'			in_Hierarchy	How to parent the duplicated object
'			in_Grouping		How to group duplicated object
'			in_Properties	How to duplicate properties
'			in_Animation	How to duplicate animation
'			in_Constraint	How to duplicate constraints
'			in_Selection	How to change selection i.e. select duplicates or source
'			in_Placement	How to transform duplicates
'			in_Sx			Transform values.
'			in_Sy			-
'			in_Sz			-
'			in_Rx			-
'			in_Ry			-
'			in_Rz			-
'			in_Tx			-
'			in_Ty			-
'			in_Tz			-
'			in_TrackXform	- enable/disable tracking of duplicated object(s)
'			in_TxtSupport	How to duplicate texture supports
'			out_Value		list of duplicated objects
'
' DESCRIPTION: Duplicate objects
'------------------------------------------------------------------------------
function DuplicateProc( _
	in_InputObjs, _
	in_NbItems, _
	in_History, _
	in_Hierarchy, _
	in_Grouping, _
	in_Properties, _
	in_Animation, _
	in_Constraint, _
	in_Selection, _
	in_Placement, _
	in_Sx, in_Sy, in_Sz, _
	in_Rx, in_Ry, in_Rz, _
	in_Tx, in_Ty, in_Tz, _
	in_TrackXform, _
	in_TxtSupport _
)			

	Dim l_Obj, l_Objects, l_DupList, _
		l_SceneObjects, l_OtherObjects

	set DuplicateProc = Nothing

	if DiagnosticsEnabled then
		logmessage "DuplicateProc"
		logmessage "	input objects: " & in_InputObjs
	end if

	' -----------------------------------------
	' Validate inputs
	' -----------------------------------------
	if CInt(in_NbItems) = 0 Then
		Err.Raise siErrCancelled
	end if

	if Duplicate_ValidatorProc(in_InputObjs, l_Objects) <> True Then
		logmessage "Unsupported Input Parameters: " & in_InputObjs, siError
		Exit function
	end if

	if TypeName(l_Objects) = "Nothing" Then
		Err.Raise siErrCancelled
	end if

	' -----------------------------------------
	' Get default options
	' -----------------------------------------
	call GetDuplicateOptions( in_History, _
		in_Hierarchy, _
		in_Grouping, _
		in_Properties, _
		in_Animation, _
		in_Constraint, _
		in_Selection, _
		in_Placement, _
		in_Sx, in_Sy, in_Sz, _
		in_Rx, in_Ry, in_Rz, _
		in_Tx, in_Ty, in_Tz, _
		in_TrackXform, in_TxtSupport )

	' -----------------------------------------
	' duplicate objects
	' -----------------------------------------
	' Process scene objects separately from non-scene objects
	set l_SceneObjects = SIFilter( l_Objects, siObjectFilter )
	set l_OtherObjects = SIFilter( l_Objects, siObjectFilter, FALSE )

	if TypeName(l_SceneObjects) <> "Nothing" then
		set DuplicateProc = FDuplicateObjects( _
			l_SceneObjects, _
			in_NbItems, _
			siDuplicateFlag, _
			in_History, _
			in_Hierarchy, _
			in_Grouping, _
			in_Properties, _
			in_Animation, _
			in_Constraint, _
			in_Selection, _
			in_Placement, _
			in_Sx, in_Sy, in_Sz, _
			in_Rx, in_Ry, in_Rz, _
			in_Tx, in_Ty, in_Tz, _
			in_TxtSupport )
	
	end if

	' Duplicate other objects
	if TypeName(l_OtherObjects) <> "Nothing" then
		set l_DupList = SIDuplicate( _
			l_OtherObjects, _
			in_NbItems,_
			siUnspecified,_
			in_History,_
			in_Hierarchy,_
			in_Grouping, _
			in_Properties, _
			in_Animation, _
			in_Constraint, _
			in_TxtSupport )
		
		if TypeName(DuplicateProc) = "Nothing" Then
			set DuplicateProc = l_DupList
		else
			DuplicateProc.AddItems l_DupList
		end if 
	end if

	If  TypeName(DuplicateProc) = "Nothing" Then
		Exit function
	End If

	' -----------------------------------------
	' Handle post-duplicate options
	' -----------------------------------------

	call PostDuplicateProcessing( _
		DuplicateProc, _
		in_History, _
		in_Grouping, _
		in_Properties, _
		in_Animation, _
		in_Constraint, _
		in_Selection, _
		in_TrackXform )			

end function

'------------------------------------------------------------------------------
' NAME:		DuplicateWizardProc
'
' INPUT:	io_InputObjs		list of duplicated objects
'
' DESCRIPTION: Duplicate objects using a wizard
'------------------------------------------------------------------------------
function DuplicateWizardProc( _
	byref io_InputObjs, _
	byref io_NbItems, _
	byref io_History, _
	byref io_Hierarchy, _
	byref io_Grouping, _
	byref io_Properties, _
	byref io_Animation, _
	byref io_Constraint, _
	byref io_Selection, _
	byref io_Placement, _
	byref io_Sx, byref io_Sy, byref io_Sz, _
	byref io_Rx, byref io_Ry, byref io_Rz, _
	byref io_Tx, byref io_Ty, byref io_Tz, _
	byref io_TrackXform, _
	byref io_TxtSupport _
)			
	Dim l_ReturnCode, l_ValidObjects, l_Title, l_CustomParam
	
	' Make sure we have something 
	If Not io_InputObjs.Count > 0 then
		SIMsgBox XSIUtils.Translate( IDS_NEED_SELECT_OBJECT_ERROR_MSG, "XSISCRIPTS" ), vbOKOnly + vbInformation, XSIUtils.Translate( IDS_DUPULICATE_MULTI_TITLE, "XSISCRIPTS" ), vbOK

		Err.Raise siErrCancelled
	end if 

	' validate input objects (only geometry objects)
	If Duplicate_ValidatorProc( io_InputObjs, l_ValidObjects ) = False then
		l_Title = XSIUtils.Translate( IDS_DUPULICATE_MULTI_ERROR_MSG, "XSISCRIPTS" )
		SIMsgBox l_Title, vbOKOnly + vbInformation, XSIUtils.Translate( IDS_DUPULICATE_MULTI_TITLE, "XSISCRIPTS" ), vbOK
		Err.Raise siErrCancelled
	end if 
	
	set io_InputObjs = l_ValidObjects
	l_CustomParam = "Scene_Root.DuplicateMultiple"

	' create a custom duplicate wizard propery
	SIAddProp "Custom_parameter_list", "Scene_Root", , "DuplicateMultiple"
	SIAddCustomParameter l_CustomParam, _
		"Copies", 2,2,1,1000, 8, siSilent Or siPersistable, 1, 10, "Copies", "Number of Copies"

	' Launch the ppg in modal mode, wait for Ok or Cancel to be pressed
	l_ReturnCode = FWizardDialog(l_CustomParam & ",Preferences.Duplicate", XSIUtils.Translate( IDS_DUPULICATE_MULTI_TITLE, "XSISCRIPTS" ))

	' If the user has pressed ok, proceed
	if l_ReturnCode = vbOk then
		io_NbItems = GetValue ( l_CustomParam & ".Copies" )

		' get duplicate options
		call GetDuplicateOptions( io_History, _
			io_Hierarchy, _
			io_Grouping, _
			io_Properties, _
			io_Animation, _
			io_Constraint, _
			io_Selection, _
			io_Placement, _
			io_Sx, io_Sy, io_Sz, _
			io_Rx, io_Ry, io_Rz, _
			io_Tx, io_Ty, io_Tz, _
			io_TrackXform, _
			io_TxtSupport )

		'Call the normal duplicate command
		set DuplicateWizardProc = DuplicateProc ( io_InputObjs, _
				io_NbItems, _
				io_History, _
				io_Hierarchy, _
				io_Grouping, _
				io_Properties, _
				io_Animation, _
				io_Constraint, _
				io_Selection, _
				io_Placement, _
				io_Sx, io_Sy, io_Sz, _
				io_Rx, io_Ry, io_Rz, _
				io_Tx, io_Ty, io_Tz, _
				io_TrackXform, _
				io_TxtSupport )

		' Cleanup wizard property
		DeleteObj "Scene_Root.DuplicateMultiple"

	Else
		' Cleanup wizard property
		DeleteObj "Scene_Root.DuplicateMultiple"

		set DuplicateWizardProc = Nothing
		Err.Raise siErrCancelled
	End If

end function

'******************************************************************************
' clone Commands
'******************************************************************************

'------------------------------------------------------------------------------
' NAME:		clone_ValidatorProc
'
' INPUT:	in_InputObjs		
' OUTPUT:	validated objects
'
' DESCRIPTION: filter input list by objects that can be cloned
'------------------------------------------------------------------------------
function Clone_ValidatorProc(in_InputObjs, ByRef out_ValidatedObjs)
	Dim l_NbItems, l_Objects,l_Index

	Clone_ValidatorProc = False
	set out_ValidatedObjs = Nothing

	if DiagnosticsEnabled then
		logmessage "Clone_ValidatorProc"
		logmessage "input objects: " & in_InputObjs
	end if

	if TypeName(in_InputObjs) = "Nothing" Then
		exit function
	end if

	'
	' validate input objects (only geometry objects)
	' sifilter won't work if you mix match filters with do not match filters
	' e.g. "geometry, ~chain_elements" = "geometry Or Not chain_elements"
	'
	set l_Objects = in_InputObjs 

	for l_Index=LBound(siInstanceFilterArray) to UBound(siInstanceFilterArray)-1
		set l_Objects = SIFilter( l_Objects, siInstanceFilterArray(l_Index) )
	next

	if TypeName(l_Objects) = "Nothing" Then
		exit function
	end if

	' -----------------------------------------
	' Custom Filtering
	' -----------------------------------------

	' -----------------------------------------
	' Return filterd objects
	' -----------------------------------------

	if l_Objects.Count <> 0 then
		Clone_ValidatorProc = True
		set out_ValidatedObjs = l_Objects
	end if
	if DiagnosticsEnabled then
		logmessage "filtered objects: " & out_ValidatedObjs
	end if

end function

'------------------------------------------------------------------------------
' NAME:		CloneProc
'
' INPUT:	See DuplicateProc for details
'
' DESCRIPTION: Clone objects
'
' Only difference between a duplicate and a clone is that a clone has no
' construction history (i.e. frozen) and its geometry a copy from the source object
'
'------------------------------------------------------------------------------
function CloneProc( _
	in_InputObjs, _
	in_NbItems, _
	in_Hierarchy, _
	in_Grouping, _
	in_Properties,  _
	in_Animation,  _
	in_Constraint,  _
	in_Selection,  _
	in_Placement, _
	in_Sx, in_Sy, in_Sz,  _
	in_Rx, in_Ry, in_Rz,  _
	in_Tx, in_Ty, in_Tz,  _
	in_TrackXform _
)			

	Dim l_Obj, l_Objects, l_DupList, l_Unused

	set CloneProc = Nothing

	if DiagnosticsEnabled then
		logmessage "CloneProc"
		logmessage "input objects: " & in_InputObjs
	end if

	' -----------------------------------------
	' Validate inputs
	' -----------------------------------------

	if CInt(in_NbItems) = 0 Then
		Err.Raise siErrCancelled
	end if

	if Clone_ValidatorProc(in_InputObjs,l_Objects) = False Then
		Err.Raise siErrCancelled
	end if

	' -----------------------------------------
	' Get Clone options
	' -----------------------------------------
	call GetDuplicateOptions( l_Unused, _
		in_Hierarchy, _
		in_Grouping, _
		in_Properties, _
		in_Animation, _
		in_Constraint, _
		in_Selection, _
		in_Placement, _
		in_Sx, in_Sy, in_Sz, _
		in_Rx, in_Ry, in_Rz, _
		in_Tx, in_Ty, in_Tz, _
		in_TrackXform, _
		l_Unused )

	' -----------------------------------------
	' Duplicate objects with no construction history (i.e. frozen) 
	' -----------------------------------------
	set CloneProc = FDuplicateObjects( _
		l_Objects, _
		in_NbItems, _
		siLiveCopyFlag, _
		siSharedHistory, _
		in_Hierarchy, _
		in_Grouping, _
		in_Properties, _
		in_Animation, _
		in_Constraint, _
		in_Selection, _
		in_Placement, _
		in_Sx, in_Sy, in_Sz, _
		in_Rx, in_Ry, in_Rz, _
		in_Tx, in_Ty, in_Tz, _
		siDuplicateSelectedTextureSupports )			

	If  TypeName(CloneProc) = "Nothing" Then
		Exit function
	End If

	' -----------------------------------------
	' Handle post-duplicate options
	' -----------------------------------------

	call PostDuplicateProcessing( CloneProc, _
		-1, _
		in_Grouping, _
		in_Properties, _
		in_Animation, _
		in_Constraint, _
		in_Selection, _
		in_TrackXform )			

end function

'------------------------------------------------------------------------------
' NAME:		OldInstanceToCloneProc
'
' INPUT:	see CloneProc
'
' DESCRIPTION: simply redirects the old instance command to the Clone command
'			   allows to log 'Clone' when you run a script that calls 'Instance'.
'			   Poeple must now used eitehr the Clone or the Instantiate commands.
'------------------------------------------------------------------------------
function OldInstanceToCloneProc( _
	in_InputObjs, _
	in_NbItems, _
	in_Hierarchy, _
	in_Grouping, _
	in_Properties,  _
	in_Animation,  _
	in_Constraint,  _
	in_Selection,  _
	in_Placement, _
	in_Sx, in_Sy, in_Sz,  _
	in_Rx, in_Ry, in_Rz,  _
	in_Tx, in_Ty, in_Tz,  _
	in_TrackXform _
)

	Set OldInstanceToCloneProc = Clone( _
									in_InputObjs, _
									in_NbItems, _
									in_Hierarchy, _
									in_Grouping, _
									in_Properties,  _
									in_Animation,  _
									in_Constraint,  _
									in_Selection,  _
									in_Placement, _
									in_Sx, in_Sy, in_Sz,  _
									in_Rx, in_Ry, in_Rz,  _
									in_Tx, in_Ty, in_Tz,  _
									in_TrackXform )
end function

'------------------------------------------------------------------------------
' NAME:		CloneWizardProc
'
' INPUT:	io_InputObjs		list of objects to Clone
'
' DESCRIPTION: Clones objects using a wizard
'------------------------------------------------------------------------------
function CloneWizardProc( _
	byref io_InputObjs, _
	byref io_NbItems, _
	byref io_Hierarchy, _
	byref io_Grouping, _
	byref io_Properties, _
	byref io_Animation, _
	byref io_Constraint, _
	byref io_Selection, _
	byref io_Placement, _
	byref io_Sx, byref io_Sy, byref io_Sz, _
	byref io_Rx, byref io_Ry, byref io_Rz, _
	byref io_Tx, byref io_Ty, byref io_Tz, _
	byref io_TrackXform _
)

	Dim l_ReturnCode, l_ValidObjects, l_Title, l_CustomParam
	
	' Make sure we have something 
	If Not io_InputObjs.Count > 0 then
		SIMsgBox XSIUtils.Translate( IDS_NEED_SELECT_OBJECT_ERROR_MSG, "XSISCRIPTS" ), vbOKOnly + vbInformation, XSIUtils.Translate( IDS_CLONE_MULTI_TITLE, "XSISCRIPTS" ), vbOK
		Err.Raise siErrCancelled
	end if 

	' validate input objects (only geometry objects)
	If Clone_ValidatorProc( io_InputObjs, l_ValidObjects ) = False then
		l_Title = XSIUtils.Translate( IDS_CLONE_MULTI_ERROR_MSG, "XSISCRIPTS" )
		SIMsgBox l_Title, vbOKOnly + vbInformation, XSIUtils.Translate( IDS_CLONE_MULTI_TITLE, "XSISCRIPTS" ), vbOK
		Err.Raise siErrCancelled
	end if 
	
	set io_InputObjs = l_ValidObjects
	l_CustomParam = "Scene_Root.CloneMultiple"

	' create a custom duplicate wizard propery
	SIAddProp "Custom_parameter_list", "Scene_Root", , "CloneMultiple"
	SIAddCustomParameter l_CustomParam, _
		"Copies", 2,2,1,1000, 8, siSilent Or siPersistable, 1, 10, "Copies", "Number of Copies"

	' Launch the ppg in modal mode, wait for Ok or Cancel to be pressed
	l_ReturnCode = FWizardDialog(l_CustomParam & ",Preferences.Duplicate", XSIUtils.Translate( IDS_CLONE_MULTI_TITLE, "XSISCRIPTS" ))
	' If the user has pressed ok, proceed
	if l_ReturnCode = vbOk then
		io_NbItems = GetValue ( l_CustomParam & ".Copies" )

		' get duplicate options
		dim l_Unused
		call GetDuplicateOptions( l_Unused, _
			io_Hierarchy, _
			io_Grouping, _
			io_Properties, _
			io_Animation, _
			io_Constraint, _
			io_Selection, _
			io_Placement, _
			io_Sx, io_Sy, io_Sz, _
			io_Rx, io_Ry, io_Rz, _
			io_Tx, io_Ty, io_Tz, _
			io_TrackXform, _
			l_Unused )

		'Call the normal duplicate command
		set CloneWizardProc = CloneProc ( io_InputObjs, _
				io_NbItems, _
				io_Hierarchy, _
				io_Grouping, _
				io_Properties, _
				io_Animation, _
				io_Constraint, _
				io_Selection, _
				io_Placement, _
				io_Sx, io_Sy, io_Sz, _
				io_Rx, io_Ry, io_Rz, _
				io_Tx, io_Ty, io_Tz, _
				io_TrackXform )

		' Cleanup wizard property
		DeleteObj "Scene_Root.CloneMultiple"

	Else
		' Cleanup wizard property
		DeleteObj "Scene_Root.CloneMultiple"

		set CloneWizardProc = Nothing
		Err.Raise siErrCancelled
	End If

end function

'******************************************************************************
' DuplicateFromAnim Functions
'******************************************************************************

'------------------------------------------------------------------------------
' NAME:		GetInputAndDuplicateFromAnimProc
' INPUT:	List of objects to duplicate from their animation
' INPUT:	Start Frame
' INPUT:	End Frame
' INPUT:	Step
' INPUT:	Instance (or Duplication)
' DESCRIPTION: Prompts the user for values before calling DuplicateFromAnim
'------------------------------------------------------------------------------
sub GetInputAndDuplicateFromAnimProc( in_InputObjs, in_StartFrame, in_EndFrame, in_Step, in_DoInstance )

	Dim l_start, l_end, l_collection, l_CPList, l_SceneRoot, l_CustomParam

	l_start = GetValue("Project.Data.PlayControl.In")
	l_end = GetValue("Project.Data.PlayControl.Out")

	Set l_SceneRoot = FGetSceneRoot
	Set l_CPList = SIAddProp( "Custom_parameter_list", l_SceneRoot , , "Duplicate From Animation").value("Value")
	l_CustomParam = l_SceneRoot & "." & l_CPList

	SIAddCustomParameter l_CustomParam , "Start", siDouble, _
		l_start, -1000000, 1000000, , siSilent, l_start, l_end, "Start", "Start Frame"
	SIAddCustomParameter l_CustomParam , "End", siDouble, _
		l_end, -1000000, 1000000, , siSilent, l_start, l_end, "End", "End Frame"
	SIAddCustomParameter l_CustomParam , "Step", siDouble, _
		10, -1000000, 1000000, , siSilent, 0, l_end - l_start, "Step", "Step value"
	SIAddCustomParameter l_CustomParam , "Instance", 11, _
		in_DoInstance, 0, 1, , siSilent, 0, 1, "Instance", "Instance (Model Only)"


	If FWizardDialog( l_CustomParam, XSIUtils.Translate( IDS_DUPULICATE_FROM_ANIM_TITLE, "XSISCRIPTS" ) ) = vbOk Then
		in_StartFrame = GetValue( l_CustomParam & ".Start" )
		in_EndFrame = GetValue( l_CustomParam & ".End" )
		in_Step = GetValue( l_CustomParam & ".Step" )
		in_DoInstance = GetValue( l_CustomParam & ".Instance" )

		DuplicateFromAnim in_InputObjs, in_StartFrame, in_EndFrame, in_Step, in_DoInstance
		DeleteObj l_CustomParam
	Else
		DeleteObj l_CustomParam
		Err.Raise siErrCancelled
	End If

end sub

'------------------------------------------------------------------------------
' NAME:			DuplicateFromAnimProc
' INPUT:		List of objects to plot, Start Frame, End Frame, Step, Instance
' OUTPUT:		List of Created objects
' DESCRIPTION:	Duplicates the input objects at given frame intervals
'------------------------------------------------------------------------------
function DuplicateFromAnimProc( in_InputObjs, in_StartFrame, in_EndFrame, in_Step, in_DoInstance )

	Dim l_frame, rtn, l_DupList

	set DuplicateFromAnimProc = Nothing

	if IsEmpty(in_InputObjs) Or TypeName(in_InputObjs) = "Nothing" Then
		Exit function
	end if

	set l_DupList = CreateObject("XSI.Collection")

	' Go through each of the frames
	For l_frame = in_StartFrame to in_EndFrame step in_Step

		' Update the animation to this frame
		SetValue "Project.Data.PlayControl.Current", l_frame
		Refresh
		if in_DoInstance then
			set rtn = Instantiate (in_InputObjs, , 1, 1, 1, 1)
		else
			set rtn = Duplicate (in_InputObjs, 1, ,,,, siNoAnimation, siNoConstraints, siNoSelection, siGlobalXForm )
		end if

		l_DupList.Add rtn
	Next

	set DuplicateFromAnimProc = l_DupList

end function


'------------------------------------------------------------------------------
' NAME:		RemoveAllAnimationProc
'
' INPUT:	- in_InputObjs			list of object to remove animation from
'			- in_Time				time to remove animation at
'			- in_BranchFlag			branch or node
'			- in_SourceMask			type of animation to remove
'			- in_StaticFCurves		if true remove static (constant) fcurves only
'
' DESCRIPTION: Remove animation from object and all children
'------------------------------------------------------------------------------
sub RemoveAllAnimationProc( in_InputObjs, in_Time, in_BranchFlag, in_SourceMask, in_ParamMask, in_StaticFCurves, in_BaseAnimation, in_LayerAnimation )

	Dim l_Obj, l_AnimList, l_pstr, l_allparams

	if Not IsObject(in_InputObjs) Then
		exit sub
	end if

	if in_InputObjs.Count = 0 Then
		exit sub
	end if

	'--------------------------------------------------------------
	' Removing Constraints: In this case we just direct to RemoveAllCns. 
	' RemoveAnimation actually doesn't work for constraint sources.
	'--------------------------------------------------------------
	if in_SourceMask = siConstraintSource then
		RemoveAllCns in_InputObjs
		exit sub
	end if

	l_allparams = False
	if in_ParamMask = 8 then  'siTransformParam
		l_pstr = "/.kine.local"
	elseif in_ParamMask = 5 then 'siScalingParam
		l_pstr = ".kine.local.scl.scl*"
	elseif in_ParamMask = 6 then 'siRotationParam
		l_pstr = ".kine.local.ori.euler.rot*"
	elseif in_ParamMask = 7 then 'siTranslationParam
		l_pstr = ".kine.local.pos.pos*"
	else
		l_allparams = True
	end if

	for each l_Obj in in_InputObjs
		if ( l_allparams ) then
			if IsAnimated( l_Obj, in_SourceMask , in_BranchFlag, l_AnimList, TRUE ) then 
				RemoveAnimation l_AnimList, in_Time, in_StaticFCurves, in_BaseAnimation, in_LayerAnimation, in_SourceMask
			end if
		else
			l_AnimList = l_Obj & l_pstr
			RemoveAnimation l_AnimList, in_Time, in_StaticFCurves, in_BaseAnimation, in_LayerAnimation, in_SourceMask
		end if
	next
			
end sub

'------------------------------------------------------------------------------
' NAME:		CopyAllAnimationProc
'
' INPUT:	- in_InputObjs			list of object to remove animation from
'			- in_BranchFlag			branch or node
'			- in_SourceMask			type of animation to remove
'
' DESCRIPTION: Remove animation from object and all children
'------------------------------------------------------------------------------
sub CopyAllAnimationProc( in_InputObjs, in_SourceMask, in_ParamMask, in_removeAnim, in_BaseAnimation, in_LayerAnimation )

	Dim l_Obj, l_AnimList, l_pstr, l_allparams, l_doFcv, l_doExp


	if Not IsObject(in_InputObjs) Then
	logmessage "not the right selection...."
		exit sub
	end if


	if in_InputObjs.Count = 0 Then
		exit sub
	end if

	'--------------------------------------------------------------
	' Set the doExp and doFcv flags according to the type of source
	' ideally the Copyanimation command would not use 2 separate flags
	' like that, but it's too dangerous to change at this point.
	'--------------------------------------------------------------
	l_doFcv = False
	l_doExp = False
	if in_SourceMask = siFcurveSource then
		l_doFcv = True
	elseif in_SourceMask = siExpressionSource then
		l_doExp = True
	elseif in_SourceMask = siAnySource then
		l_doFcv = True
		l_doExp = True
	else
		logmessage "Sorry this command is not implemented to copy constraints yet"
		exit sub
	end if

	l_allparams = False
	if in_ParamMask = 8 then  'siTransformParam
		l_pstr = ".kine"
	elseif in_ParamMask = 5 then 'siScalingParam
		l_pstr = ".kine.local.scl"
	elseif in_ParamMask = 6 then 'siRotationParam
		l_pstr = ".kine.local.ori.euler"
	elseif in_ParamMask = 7 then 'siTranslationParam
		l_pstr = ".kine.local.pos"
	else
		l_allparams = True
	end if

	for each l_Obj in in_InputObjs

		if l_allparams then
			l_AnimList = l_Obj
		else
			l_AnimList = l_Obj & l_pstr
		end if

		CopyAnimation l_AnimList, l_doFcv, l_doExp, in_removeAnim, in_BaseAnimation, in_LayerAnimation
	next
			
end sub

'------------------------------------------------------------------------------
' NAME:		SaveKeyAtMultipleFramesProc
'
' INPUT:	- in_sel				marked parameters
'
' DESCRIPTION: Allows to Save Keys at multiple frames, enetered as a comma separated string
'------------------------------------------------------------------------------
sub SaveKeyAtMultipleFramesProc( in_sel )
	dim l_Farray, l_frame

	if in_sel.count < 1 then
		logmessage "You need to select items and mark parameters to key"
		exit sub
	end if
 	
	if GetInputFrames( l_Farray ) = False then
		logmessage "Invalid frame string"
		exit sub
	end if
	
	for each l_frame in l_Farray
		SaveKey  in_sel, l_frame
	next

end sub

'------------------------------------------------------------------------------
' NAME:		GetInputFrames
'
' INPUT:	- out_Farray		returned array of frames
'
' DESCRIPTION: Returns an array of frames as entered by the user in a dialogue
'------------------------------------------------------------------------------
function GetInputFrames( out_Farray )
	dim raw_input, split_string, l_frame, count
	dim pIn, pOut
	
	GetInputFrames = True

	raw_input = inputbox (XSIUtils.Translate( IDS_GET_INPUT_FRAME_MSG, "XSISCRIPTS" ), XSIUtils.Translate( IDS_GET_INPUT_FRAME_TITLE, "XSISCRIPTS" ))
	
	if raw_input = "" then
		GetInputFrames = False
		exit function
	end if 
	
	split_string = Split(raw_input, ",", -1, 1)
	
	redim frameArray(0)
	count = 0
	
	pIn = GetValue ("PlayControl.In")
	pOut = GetValue ("PlayControl.Out")

	for each l_frame in split_string
		
		' now get rid on any extra spaces.
		l_frame = Replace(l_frame , " ", "", 1)
		
		'check if the frame can be evaluated as number
		if IsNumeric(l_frame) = True then
		
			'now check if it's within the limimts of the Playcontrol
			
			l_frame = CInt(l_frame)
			if l_frame < pIn or l_frame > pOut then
				logmessage "Input Key ignored key at frame: " & l_frame & " - outside the boundries of start and end frame"
			else
				redim preserve frameArray(count)
				frameArray(count) = l_frame	
				count = count + 1
			end if
				
		end if
	next
	
	if count = 0 then GetInputFrames = False
	out_Farray = frameArray

end function

'------------------------------------------------------------------------------
' NAME:		GetInputAndDuplicateSymmetryProc 
' By:	Marie-Claude Frasson - June 2000
'
' INPUT:	
'
' OUTPUT: List of duplicated objects
'	
' DESCRIPTION: Prompts the user for values before calling DuplicateSymmetry
'------------------------------------------------------------------------------
function GetInputAndDuplicateSymmetryProc( _
			in_InputObjs, _
	byref	io_DuplicateConstraints, _
	byref	io_ShareParent, _
	byref	io_SymPlane_A, _
	byref	io_SymPlane_B, _
	byref	io_SymPlane_C, _
	byref	io_SymPlane_D, _
	byref   io_FreezeNegScaling _
)
	Dim l_CustomParam, l_GeneratePset, l_Objects

	' Make sure we have something 
	If Not in_InputObjs.Count > 0 then
		SIMsgBox XSIUtils.Translate( IDS_NEED_SELECT_OBJECT_ERROR_MSG, "XSISCRIPTS" ), vbOKOnly + vbInformation, XSIUtils.Translate( IDS_DUPULICATE_SYMMETRY_TITLE, "XSISCRIPTS" ), vbOK
		Err.Raise siErrCancelled  
		Exit Function
	end if 

	' validate input objects (only objects, groups, properties)
	set l_Objects = SIFilter( in_InputObjs, siDuplicateSymmetryFilter,TRUE,siSearchFamilies )

	if TypeName(l_Objects) = "Nothing" Then
		logmessage "Unsupported Input Parameters: " & in_InputObjs, siError
		exit function
	end if

	'
	' Build the Dialog to collect user input
	'
		
	' Keep this around so it's easier to regenerate a new pset/preset if needed (Rejean's technique :-)
	l_GeneratePset = FALSE

	l_CustomParam = "Scene_Root.DuplicateSymmetry"

	if (l_GeneratePset = TRUE) then
		' Create a custom sequence wizard propery
		SIAddProp "Custom_parameter_list", "Scene_Root", , "DuplicateSymmetry" 
		
		'
		' Add custom parameters
		'

		' Option to duplicate constraints
		SIAddCustomParameter l_CustomParam , "DuplicateConstraints", siBool, io_DuplicateConstraints, 0, 1, , siPersistable, 0, 1, "DuplicateConstraints", "Duplicate Constraints"

		' Option to share parent
		SIAddCustomParameter l_CustomParam , "ShareParent", siBool, io_ShareParent, 0, 1, , siPersistable, 0, 1, "ShareParent", "Share Parent"

		' Option for inversion symmetry (symmetry with negative scaling)
		SIAddCustomParameter l_CustomParam , "FreezeScaling", siBool, io_FreezeNegScaling, 0, 1, , siPersistable, 0, 1, "FreezeScaling", "Freeze Negative Scaling"

		' Choice of default/specific plane
		SIAddCustomParameter l_CustomParam , "SymmetryPlane", siInt2, 0, 0, 3, , siPersistable, 0, 3, "SymmetryPlane", "Plane of symmetry"

	Else
		' We have a preset already for this custom pset, for which we have defined a SPDL file
		SIAddProp "DuplicateSymmetryWizard", "Scene_Root", , "DuplicateSymmetry"

	End if	

	'Set the default value of the symmetry plane to be ZY (x=0) - note, there should really be a memory for this setting
	'to store what the last application of the command set
	SetValue l_CustomParam & ".SymmetryPlane", 2
	SetValue l_CustomParam & ".DuplicateConstraints", 1
	SetValue l_CustomParam & ".ShareParent", 0
	SetValue l_CustomParam & ".FreezeScaling", 1

	'Launch the dialog and wait for OK or Cancel to pressed.
	If FWizardDialog(l_CustomParam,XSIUtils.Translate( IDS_DUPULICATE_SYMMETRY_TITLE, "XSISCRIPTS" )) = vbOk Then

		'Read the parameters of the property page
		io_DuplicateConstraints = GetValue( l_CustomParam & ".DuplicateConstraints") 
		io_ShareParent  = GetValue( l_CustomParam & ".ShareParent")
		io_FreezeNegScaling = GetValue( l_CustomParam & ".FreezeScaling")
	
		dim l_SymmetryPlane
		l_SymmetryPlane =  GetValue( l_CustomParam & ".SymmetryPlane")
		select case l_SymmetryPlane
			case 0		' XY plane
				io_SymPlane_A  = 0
				io_SymPlane_B  = 0
				io_SymPlane_C  = 1
				io_SymPlane_D  = 0
			case 1		' XZ plane
				io_SymPlane_A  = 0
				io_SymPlane_B  = 1
				io_SymPlane_C  = 0
				io_SymPlane_D  = 0
			case 2		' YZ plane
				io_SymPlane_A  = 1
				io_SymPlane_B  = 0
				io_SymPlane_C  = 0
				io_SymPlane_D  = 0
		end select

		'Call the Duplicate Symmetry command (returns the Duplicated list of objects)
		set GetInputAndDuplicateSymmetryProc = DuplicateSymmetryFunc( l_Objects, io_DuplicateConstraints, _
																      io_ShareParent, io_SymPlane_A, io_SymPlane_B, _
																      io_SymPlane_C, io_SymPlane_D, io_FreezeNegScaling)

		DeleteObj l_CustomParam
	Else
		DeleteObj l_CustomParam
		Err.Raise siErrCancelled
	End If


end function


'------------------------------------------------------------------------------
' NAME:		DuplicateSymmetryFunc
' 
' AUTHOR: Marie-Claude Frasson - June 2000
'
' INPUT:	in_Objects				3D objects to duplicate and mirror
'			in_DuplicateConstraints	Duplicate object constraints?
'			in_ShareParent,			Share Object parent or parent duplicate object under scene root?
'			in_SymPlane_a			ax +
'			in_SymPlane_b			by +
'			in_SymPlane_c			cz =
'			in_SymPlane_d			d  <-> Symmetry plane equation
'
' OUTPUT:	return			List of mirrored duplicates (across given plane)
'
' DESCRIPTION: Duplicate and Mirror a list of objects acrosse a given plane
'------------------------------------------------------------------------------
function DuplicateSymmetryFunc( _
	in_Objects, _
	in_DuplicateConstraints, _
	in_ShareParent, _
	in_SymPlane_a, _
	in_SymPlane_b, _
	in_SymPlane_c, _
	in_SymPlane_d, _
	in_FreezeScaling )

	if TypeName(in_Objects) = "Nothing" Then
		Exit Function
	end if

	Dim l_CustomParam, l_Epsilon
	l_Epsilon = 0.0001

	dim l_OrigObjects, l_OrigObject, l_DuplObjects, l_DuplObject
	dim l_Objects
	
	'
	' Process duplication options
	'
	dim l_duplConstraints, l_shareParent

	if in_DuplicateConstraints then 
		l_duplConstraints = siDuplicateConstraints 
	else
		l_duplConstraints = siNoConstraints
	end if

	if in_ShareParent then 
		l_shareParent = siSharedParent 
	else
		l_shareParent = siNoParent
	end if

	' validate input objects (only objects, groups, properties)
	set l_Objects = SIFilter( in_Objects, siDuplicateSymmetryFilter,TRUE,siSearchFamilies )

	if TypeName(l_Objects) = "Nothing" Then
		logmessage "Unsupported Input Parameters: " & in_Objects, siError
		exit function
	end if

	set l_OrigObjects = l_Objects

	'
	' Duplicate all input objects - objects that can't be duplicated will be rejected by the duplicate function 
	'
	set l_DuplObjects = DuplicateProc( l_Objects, 1, siDuplicateHistory, l_shareParent, siShareGrouping, _
						   			   siDuplicateProperties, siDuplicateAnimation, _
								       l_duplConstraints, siSetSelection, siGlobalXForm, 1.0, 1.0, 1.0, _
									   0.0, 0.0, 0.0, 0.0, 0.0, 0.0, False, siDuplicateSelectedTextureSupports )

	'
	' Validate plane equation and find a point on the plane
	'

	' Normalize the normal of the symmetry plane
	dim l_PlaneNormal
	set l_PlaneNormal = XSIMath.CreateVector3()
	
	if in_SymPlane_a <> 0 and in_SymPlane_b <> 0 and in_SymPlane_c <> 0 then
		logmessage "Symmetry can only be achieved with respect to one of the main planes: "
		logmessage " YZ (x = 0), XZ (y = 0) or XY (z = 0). "
	'	Exit Function
	end if

	l_PlaneNormal.Set in_SymPlane_a, in_SymPlane_b, in_SymPlane_c
	l_PlaneNormal.NormalizeInPlace

	'
	' Build the symmetry matrix
	'

	' Extract normal components (after normalization)
	dim x, y, z, d
	x = l_PlaneNormal( 0 )
	y = l_PlaneNormal( 1 )
	z = l_PlaneNormal( 2 )
	d = in_SymPlane_d

    ' Build the matrix for doing a symmetry across the plane whose normal is l_PlaneNormal
	dim l_SymmetryMatrix
	set l_SymmetryMatrix = XSIMath.CreateMatrix4()
	l_SymmetryMatrix.Set 1-2*x*x,  -2*x*y,  -2*x*z, 0, _
						  -2*x*y, 1-2*y*y,  -2*y*z, 0, _
						  -2*x*z,  -2*y*z, 1-2*z*z, 0, _
						   2*x*d,	2*y*d,   2*z*d, 1  

	' Go through the input list and symmetrize all the elements
	dim l_origIndex
	l_origIndex = 0

	'
	' the list of original and duplicated objects must be synchronized
	' so here we remove items from the original list that were not duplicated.
	'
	For Each l_OrigObject in l_OrigObjects
		if	l_OrigObject.Type = "bone" and not IsBonePrimitive(l_OrigObject) or _
            l_OrigObject.Type = "eff"  or _
			(l_OrigObject.Type = "root" and l_OrigObject.BranchFlag = siNode) then 

			l_OrigObjects.Remove(l_OrigObject)
 			LogMessage l_OrigObject & " was not duplicated (chains must be selected in branch)", siWarning
		end if
	next

	if Typename(l_DuplObjects) <> "Nothing" and Typename(l_OrigObjects) <> "Nothing" then
		For Each l_DuplObject in l_DuplObjects
'			logmessage "index: " & l_origIndex & "  original: " & l_OrigObjects(l_origIndex) & "   duplicate: " & l_DuplObject
			SymmetrizeProc l_OrigObjects(l_origIndex), l_DuplObject, l_PlaneNormal, l_SymmetryMatrix, in_FreezeScaling
			l_origIndex = l_origIndex + 1
		next

	else
		logmessage "Duplicate Symmetry: no objects were duplicated", siError
	end if 


	' Set return value
	set DuplicateSymmetryFunc = l_DuplObjects
end function

'------------------------------------------------------------------------------
' NAME:		SymmetrizeProc
' 
' AUTHOR: Marie-Claude Frasson - June 2000
' UPDATE: Peter Schretlen - July 2002
'
' INPUT:	in_OrigObject		Object or hierarchy to mirror
'			in_ObjectCopy		Duplicate of in_OrigObject
'			in_Normal			Normal of the symmetry plan
'			in_SymmetryMatrix	Symmetry transformation matrix
'
' OUTPUT:	none (Applies the resulting symmetry transforms to in_ObjectCopy)
'
' DESCRIPTION:  Symmetrize in_Object (can be a hierarchy) relative to the plane defined by ax+by+cz=d
'				Apply the resulting transformations to in_ObjectCopy
'
' TODO can I use byref only to pass by reference and if I don't intend to change the value of the parameter?
'------------------------------------------------------------------------------
sub SymmetrizeProc( in_OrigObject, in_ObjectCopy, in_Normal, in_SymmetryMatrix, in_FreezeScaling)

	dim l_ObjTransform, l_ObjMatrix

	set l_ObjTransform = XSIMath.CreateTransform
	set l_ObjMatrix = XSIMath.CreateMatrix4 


	' If the original object is a hierarchy, put all its children in a list
	' Otherwise set the object as the list only element.
	dim l_OrigObjects
	if in_OrigObject.BranchFlag = siBranch Then
		set l_OrigObjects = SelectChildNodes( in_OrigObject, FALSE)
	else
		set l_OrigObjects = CreateObject("XSI.Collection")  	
		l_OrigObjects.Add( in_OrigObject )
	end if
		
	' Same
	dim l_CopyObjects
	if in_ObjectCopy.BranchFlag = siBranch Then
		set l_CopyObjects = SelectChildNodes( in_ObjectCopy, FALSE )
	else
		set l_CopyObjects = CreateObject("XSI.Collection")  	
		l_CopyObjects.Add( in_ObjectCopy )
	end if

	dim l_CurrentObject, l_CopyIndex, l_CopyObject
	l_CopyIndex = 0

	dim l_bCompensation, l_bNodeCompensation
	l_bCompensation = getuserpref("SI3D_CONSTRAINT_COMPENSATION_MODE")
	l_bNodeCompensation = getuserpref("SI3D_NODETRANSFORM_CHILD_COMPENSATE")
	setuserpref("SI3D_CONSTRAINT_COMPENSATION_MODE"), 1
	setuserpref("SI3D_NODETRANSFORM_CHILD_COMPENSATE"), 1



	dim l_CnsToReactiveColl, l_ArrayHasLimits, l_boneChildCollection, l_boneChildOrigCollection, l_boneParentCollection
	ReDim l_ArrayHasLimits(l_CopyObjects.Count)
	set l_boneChildCollection = CreateObject("XSI.Collection")
	set l_boneChildOrigCollection = CreateObject("XSI.Collection")
	' only used when using negative scaling
	set l_boneParentCollection = CreateObject("XSI.Collection")
	' for cache and deativeate expressions
'	dim l_ExpSources, l_MirSources, l_ExpActive, l_ExpChannels, expFound

	'=================================================================================================
	'
	' STEP 1. MUTE ALL ANIMATION (cns and expr)
	'
	' we do this so that the constraints and expressions will not interfere with symmetrizing the object's
	' global transform.
	'
	'=================================================================================================

	'
	' find all expressions and mute them
	'
'	if in_FreezeScaling then 
'		cycleFindExpressions l_OrigObjects, l_CopyObjects, l_ExpSources, l_MirSources, l_ExpActive, l_ExpChannels, expFound		
'	end if

	'
	' Before applying the symmetry transformation, we deactivate all constraints 
	' (Reason: with constraints active transforming the constraining after the constrained will give an incorrect result.
	' the converse is not true because we have SI3D_CONSTRAINT_COMPENSATION_MODE)
	'
	' To do this we have to make a pass of all the objects and mute the constraints. We keep a collection of all
	' constraints to reactivate. After symmetrizing we reactivate the constriants.
	'
	' note: FMuteActiveCns will also deactivate rotation limits, (a rotational constraint)
	'

	set	l_CnsToReactiveColl = FMuteActiveCns(l_CopyObjects, l_ArrayHasLimits)

	if not in_FreezeScaling then
		' keep a list of skeleton operators we are muting
		dim l_boneCollection
		set l_boneCollection = CreateObject("XSI.Collection")
	end if
	
	'=================================================================================================
	'
	' STEP 2. SYMMETRIZE TRANSFORMS
	'
	' when symmetrizing object transforms we have to be careful that the children of bones (and the 
	' children's children) are NOT compensated when the bone is symmetrized. We must do this compensation
	' manually. 
	'
	' Here accomplish this by doing two passes of the list.
	'	PASS#1: symmetrize all chain elements and objects that don't have bones for parents
	'	PASS#2: symmetrize all the object branches nested under bones
	'
	'=================================================================================================

	'
	' Go through the list of objects (if dealing with a hierarchy)
	' and apply the symmetry transformation to each of them
	'
	dim l_bUsesSIScaling

	'
	' PASS#1: symmetrize all chain elements and objects that don't have bones for parents
	'
	For Each l_CurrentObject in l_OrigObjects	

'		logmessage "processing: " & l_CurrentObject

		'
		' don't do anything for this object if its not something we can symmetrize (like a group, etc.)
		'
		if l_CurrentObject.BelongsTo("3D Object") then

			' Get the corresponding copied object
			set l_CopyObject = l_CopyObjects( l_CopyIndex )

			' apply the Symmetry transform using softimage scaling, convert back to classical afterwards if necessary
			l_bUsesSIScaling = l_CopyObject.Kinematics.Local.Parameters.Item("siscaling").value
			l_CopyObject.Kinematics.Local.Parameters.Item("siscaling").value = true

			if (l_CopyObject.Type = "root" or _
				(l_CopyObject.Type = "bone" and not IsBonePrimitive(l_CopyObject)) or _
				l_CopyObject.Type = "eff") and not in_FreezeScaling then
				SymmetryMuteIK l_CurrentObject, l_CopyObject, l_boneCollection
			end if

			'
			' If duplicating a chain:
			'	Since there is no child compensation for bones, cut parent/child links in bones to get a child compensation effect
			'
			' Child compensation is never done on the children of bones, regardless of the SI3D_NODETRANSFORM_CHILD_COMPENSATE pref setting.
			' To properly tranform bone children, we cut the heirarchy links to children, apply the transformation to the parent, 
			' then reapply the links. This has the same effect as child compensation.
			'
			if ((l_CopyObject.Type = "bone" and not IsBonePrimitive(l_CopyObject)) or l_CopyObject.Type = "eff") and l_CopyObject.children.count > 0 then

				dim l_boneChild
				dim l_ChildIdx
				l_ChildIdx = 0

				dim l_tempcoll, l_allchildren
				dim l_tempcollorig, l_allchildrenorig
				dim l_objTemp
				set l_tempcoll = CreateObject("XSI.Collection")
				set l_tempcollorig = CreateObject("XSI.Collection")

				' no need to symmetrize twice, use unique lists to avoid duplicate entries
				l_boneChildCollection.unique = true
				l_boneChildOrigCollection.unique = true

				for each l_boneChild in l_CopyObject.children

					if l_boneChild.Type <> "bone" and l_boneChild.Type <> "eff" then

						if in_FreezeScaling then
							l_tempcoll.removeall
							l_tempcollorig.removeall

							set l_objTemp = l_CurrentObject.children(l_ChildIdx)
							l_boneChild.BranchFlag = siBranch
							l_objTemp.BranchFlag = siBranch

							l_tempcoll.Add l_boneChild
							l_tempcollorig.Add l_objTemp
							set l_allchildren = l_tempcoll.expand
							set l_allchildrenorig = l_tempcollorig.expand

							l_boneChildCollection.AddItems l_allchildren
							l_boneChildOrigCollection.AddItems l_allchildrenorig

						else ' negative scaling

							l_boneParentCollection.Add l_CopyObject
							l_boneChildCollection.Add l_boneChild
							l_CopyObject.RemoveChild(l_boneChild)

						end if

					end if 
					l_ChildIdx = l_ChildIdx + 1
				next
			end if

			'
			' Apply the symmetry transformation 
			'		
			if in_FreezeScaling then
				SI3DStyleSymmetry l_CurrentObject, l_CopyObject, in_SymmetryMatrix, in_Normal
			else
				InversionSymmetry l_CurrentObject, l_CopyObject, in_SymmetryMatrix, in_Normal
			end if

			' convert back to the objects original transformation type
			l_CopyObject.Kinematics.Local.Parameters.Item("siscaling").value = l_bUsesSIScaling

		else
'			logmessage l_CopyObject & "is not a 3D object"
		end if 

		l_CopyIndex = l_CopyIndex + 1

	next  ' Loop over children (including parent)

	'
	' At this point the children of bones and effectors may not have the correct pos & ori, so we symmetrize their local transform.
	' This is because there is no child compensation on objects parented to bones & effectors.
	'
	if l_boneChildCollection.count > 0 then 

		dim index

		if in_FreezeScaling then

			dim l_Xfm, l_Rot, l_Trs
			set l_Rot    = XSIMath.CreateVector3 
			set l_Trs    = XSIMath.CreateVector3 
			set l_Xfm	 = XSIMath.CreateTransform

			'
			' PASS#2: symmetrize all the object branches nested under bones
			'
			for index = 0 to l_boneChildCollection.count - 1

				'
				' DON'T COMPENSATE BONES or EFFECTORS this will trigger IK update.
				' PJS: ignoring bones & effecotrs could cause problems if this list is not sorted by scene node depth?
				'
				if l_boneChildOrigCollection.item(index).Type <> "bone" and l_boneChildOrigCollection.item(index).Type <> "eff" then

					' apply the Symmetry transform using softimage scaling, convert back to classical afterwards if necessary
					l_bUsesSIScaling = l_boneChildOrigCollection.item(index).Kinematics.Local.Parameters.Item("siscaling").value
					l_boneChildOrigCollection.item(index).Kinematics.Local.Parameters.Item("siscaling").value = true

					set l_Xfm = l_boneChildOrigCollection.item(index).Kinematics.Local.Transform

					'
					' PJS: symmetrize the local transform then apply it
					' this is a fix for bug 85432
					'
					l_Xfm.GetTranslation l_Trs
					l_Xfm.GetRotationXYZAngles l_Rot
					l_Trs.set l_Trs.x,l_Trs.y,-l_Trs.z
					l_Rot.set -l_Rot.x,-l_Rot.y,l_Rot.z
					l_Xfm.SetTranslation l_Trs
					l_Xfm.SetRotationFromXYZAngles l_Rot

					' Apply the new xfm
					l_boneChildCollection.item(index).Kinematics.Local.Transform = l_Xfm

					' convert back to the objects original transformation type
					l_boneChildOrigCollection.item(index).Kinematics.Local.Parameters.Item("siscaling").value = l_bUsesSIScaling

				end if

			next
		else
			'
			' unfortunately, before reparenting bone children we have to update the new chains
			' we force a refresh (as a result undo/redo will not always work in this case)
			'
			refresh
			for index = 0 to l_boneChildCollection.count - 1
				l_boneParentCollection.item(index).AddChild(l_boneChildCollection.item(index))
			next
		end if
	end if

	'=================================================================================================
	'
	' STEP 3. SYMMETRIZE ANIMATION (currently only cns and expr)
	'
	' Before symmetrizing all cns and expressions were muted so the would have no effect on symmetrizing 
	' the transform. Before reactivating the cns and expr we:
	'	- mirror the constraint offsets
	'	- mirror local expressions (negate z position and x,y rotation)
	'
	'=================================================================================================

	l_CopyIndex = 0
	For Each l_CurrentObject in l_OrigObjects	

		' Get the corresponding copied object
		set l_CopyObject = l_CopyObjects( l_CopyIndex )

		if in_FreezeScaling then
			SymmetrizeConstraintOffsets2 l_CurrentObject, l_CopyObject, in_SymmetryMatrix, in_Normal
		else
			SymmetrizeConstraintOffsets l_CurrentObject, l_CopyObject, in_Normal
		end if

		l_CopyIndex = l_CopyIndex + 1

	next  ' Loop over children (including parent)

	'
	' reactivate ik ops 
	'
	if not in_FreezeScaling then 
		dim l_bone
		for each l_bone in l_boneCollection
			SetValue l_bone & ".chain.muteikop", False
		next 
	end if 

	'
	' restore the constraint activation states
 	'
	RestoreActiveCns(l_CnsToReactiveColl)
	SymmetrizePosRotLimits l_OrigObjects, l_CopyObjects, in_FreezeScaling, l_ArrayHasLimits

	' restore expressions
	' NOTE: the expression mirroring in cycleMirrorExpressions is disable for now. Must generalize to work in all cases...
'	if expFound = True and in_FreezeScaling = True then
'		cycleMirrorExpressions l_ExpSources, l_MirSources, l_ExpActive, l_ExpChannels, in_Normal
'	end if

	'
	' restore users compensation prefs
	'
	setuserpref("SI3D_CONSTRAINT_COMPENSATION_MODE") , l_bCompensation
	setuserpref("SI3D_NODETRANSFORM_CHILD_COMPENSATE"), l_bNodeCompensation
	

end sub ' SymmetrizeProc

'---------------------------------
' Cycle to Find Expressions
' misner Jan 2003
'---------------------------------	
function cycleFindExpressions(inOrigObjects, inCopyObjects, outExpSources, outMirSources, outExpActive, outExpChannels, outValid)			
	
	dim hasExp, expActive, expChannels, expSources, mirSources, i
	redim multiExpSources(0)
	redim multiMirSources(0)
	redim multiExpActive(0)
	redim multiExpChannels(0)

	outValid = False
	
	for i = 0 to inOrigObjects.count - 1
		getExpression inOrigObjects(i), inCopyObjects(i), hasExp, expActive, expChannels, expSources, mirSources	
		if hasExp = True then
			outValid = True
			push multiExpSources, expSources
			push multiMirSources, mirSources
			push multiExpActive, expActive
			push multiExpChannels, expChannels
		end if
	next
	
	outExpSources = multiExpSources
	outMirSources = multiMirSources
	outExpActive = multiExpActive
	outExpChannels = multiExpChannels
	
	
end function
'---------------------------------
' Cycle to Mirror Expressions
' misner Jan 2003
'---------------------------------	
function cycleMirrorExpressions(inExpSources, inMirSources, inExpActive, inExpChannels, inNormal)

	dim i
	
	for i = 0 to ubound(inExpSources)
	
		mirrorExpression inMirSources(i), inExpSources(i), inExpActive(i), inExpChannels(i), inNormal
		
	next
	
end function

'---------------------------------
' Get Expressions
' misner Jan 2003
'---------------------------------
function getExpression(inObj, inMir, outHasExp, outExpActive, outExpChannels, outOrigSources, outMirSources)
	
	dim expActive(5), expChannels(5), sources(5), mirSources(5), i
	

'	logmessage "IN OBJ: " & inObj
'	logmessage "IN MIR: " & inMir

	set sources(0) = inObj.posx.source
	set sources(1) = inObj.posy.source
	set sources(2) = inObj.posz.source
	set sources(3) = inObj.rotx.source
	set sources(4) = inObj.roty.source
	set sources(5) = inObj.rotz.source	
	
	set mirSources(0) = inMir.posx.source
	set mirSources(1) = inMir.posy.source
	set mirSources(2) = inMir.posz.source
	set mirSources(3) = inMir.rotx.source
	set mirSources(4) = inMir.roty.source
	set mirSources(5) = inMir.rotz.source		
	
	
	for i = 0 to 5
		processSource sources(i), mirSources(i), expActive(i), expChannels(i)
	next
	
	outHasExp = False
	
	for i = 0 to 5
		if expChannels(i) = True then

'			logmessage "Has Expression"

			outHasExp = True
		end if
	next
	
	outExpActive = expActive
	outExpChannels = expChannels
	outOrigSources = sources
	outMirSources = mirSources
	
end function
'---------------------------------
' Process Source
' misner Jan 2003
'---------------------------------
function processSource(inSource, inMirSource, outActive, outValid)
	
	if typename(inSource) = "Nothing" then
		outValid = False
		exit function
	end if
	
	if inSource.type <> "Expression" then
		outValid = False
		exit function
	end if
		
	outActive = inSource.active.value
	
	inSource.active.value = False
	inMirSource.active.value = False
	
	outValid = True
	
end function
'---------------------------------
' Mirror Expressions
' misner Jan 2003
'---------------------------------
function mirrorExpression (mirSources, inOriSources, expActive, expChannels, inNormal)
	
	dim n, normals, def, i
	
	set n = XSIMath.CreateVector3
	if inNormal.x = 0 then
		n.x = 1
	else 
		n.x = -1
	end if
	if inNormal.y = 0 then
		n.y = 1
	else 
		n.y = -1
	end if	
	if inNormal.z = 0 then
		n.z = 1
	else 
		n.z = -1
	end if	
	normals = Array(n.x, n.y,n.z,n.x*-1,n.y*-1,n.z*-1)
	

	for i = 0 to 5
		
		' DISABLE expression mirroring
		' does not work in all cases. todo: generalize

'		if expChannels(i) = True and normals(i) = -1 then
'			def = "(" & mirSources(i).Parameters("Definition").value & ") * -1"			
'			mirSources(i).Parameters("Definition").value = def
'		end if

		if expActive(i) = True then
		
			inOriSources(i).active.value = 1
			mirSources(i).active.value = 1
		end if
	next	


end function
'---------------------------------
' Push
'---------------------------------
function push(inout_array, inValue)

	'if the top of the array isn't empty, make it one bigger
	if Typename(inout_array(Ubound(inout_array))) <> "Empty" then
		dim size
		size = Ubound(inout_array) + 1
		Redim preserve inout_array(size)
		inout_array(size) = inValue
	else	
		inout_array(inout_array(Ubound(inout_array))) = inValue
	end if
		
end function
'----------------------------------------

'------------------------------------------------------------------------------
' NAME:	 SI3DStyleSymmetry
' 
' AUTHOR:	Peter Schretlen September 2002
' UPDATED:  pschretl April 2004, add neutral pose symmetry
'
' INPUT:	in_CopyObjectsColl	The duplicated objects
'
' OUTPUT:	Symmetrizes a duplicated object without negative scaling. 
'
' DESCRIPTION: Deactivate all constraints
'------------------------------------------------------------------------------
sub SI3DStyleSymmetry (in_CurrentObject, in_CopyObject, in_SymmetryMatrix, in_Normal)

	dim out_rot, out_trs, out_scl, l_Xfm
	dim l_AbsScl, l_Scl
	set out_rot = XSIMath.CreateVector3 
	set out_trs = XSIMath.CreateVector3 
	set out_scl = XSIMath.CreateVector3
	set l_Scl    = XSIMath.CreateVector3 
	set l_AbsScl = XSIMath.CreateVector3 
	set l_Xfm = XSIMath.CreateTransform

	'
	' Create a copy of the pointer so there's no intereference in VBScript
	'
	set in_CopyObject = Dictionary.GetObject(in_CopyObject.fullname)

	'
	' get the global rotation & translation that will symmetrize the copy 
	'
	SI3DSymmetry in_CurrentObject.Kinematics.Global.Transform, in_SymmetryMatrix, out_rot, out_trs


	set l_ParamCollCopy = in_CopyObject.Kinematics.Local.Parameters
	set l_ParamCollOrig = in_CurrentObject.Kinematics.Local.Parameters

	'
	' Symmetrize the neutral pose
	' TODO: pivot and pivot compensation
	'
	if not in_CurrentObject.Parent.IsEqualTo(ActiveSceneRoot) then
		' parts of the local transform can be symmetrized by negating rotx,roty,posz. 

		' do not set position on bones and effectors or IK will evaluate
		if (in_CurrentObject.Type <> "bone" and in_CurrentObject.Type <> "eff") or _
			IsBonePrimitive(in_CurrentObject) then
			l_ParamCollCopy("nposz").value = -l_ParamCollOrig("nposz").value
		end if
		l_ParamCollCopy("nrotx").value = -l_ParamCollOrig("nrotx").value
		l_ParamCollCopy("nroty").value = -l_ParamCollOrig("nroty").value

	else

		' in case that an object has no parent (local xfm == global xfm )
		' parts of the local transform can't be symmetrized by negating rotx,roty,posz. 
		' symmetrize in global space
		dim l_xfmNP, out_rotNP, out_trsNP
		set l_xfmNP = XSIMath.CreateTransform
		set out_rotNP = XSIMath.CreateVector3 
		set out_trsNP = XSIMath.CreateVector3 


		l_xfmNP.SetTranslationFromValues			l_ParamCollOrig("nposx").value,_
													l_ParamCollOrig("nposy").value,_
													l_ParamCollOrig("nposz").value

		l_xfmNP.SetRotationFromXYZAnglesValues		XSIMath.DegreesToRadians(l_ParamCollOrig("nrotx").value),_
													XSIMath.DegreesToRadians(l_ParamCollOrig("nroty").value),_
													XSIMath.DegreesToRadians(l_ParamCollOrig("nrotz").value)

		l_xfmNP.SetScalingFromValues				l_ParamCollOrig("nsclx").value,_
													l_ParamCollOrig("nscly").value,_
													l_ParamCollOrig("nsclz").value

		l_xfmNP.SetScalingOrientationFromXYZAngles	XSIMath.DegreesToRadians(l_ParamCollOrig("nsclorix").value),_
													XSIMath.DegreesToRadians(l_ParamCollOrig("nscloriy").value),_
													XSIMath.DegreesToRadians(l_ParamCollOrig("nscloriz").value)

		SI3DSymmetry l_xfmNP, in_SymmetryMatrix, out_rotNP, out_trsNP

		if in_CurrentObject.Type <> "bone" and in_CurrentObject.Type <> "eff" then
			l_ParamCollCopy("nposx").value = out_trsNP.x
			l_ParamCollCopy("nposy").value = out_trsNP.y
			l_ParamCollCopy("nposz").value = out_trsNP.z
		end if

		l_ParamCollCopy("nrotx").value = out_rotNP.x
		l_ParamCollCopy("nroty").value = out_rotNP.y
		l_ParamCollCopy("nrotz").value = out_rotNP.z

	end if

	'
	' PJS: We don't translate bones or effectors - translating will trigger IK and overwrite rotations on any
	' bones we already symmetrized.
	'
	' *** There are some cases where IK will still get triggered, like when the duplicated chain has an upvector
	' and the constraining object is translated. In this case the result may not be symmetrical.
	' TODO: may be able to get around this case by muting IK? 
	'
	if (in_CopyObject.Type <> "bone" and in_CopyObject.Type <> "eff") or _
		IsBonePrimitive(in_CopyObject) then
		Translate	in_CopyObject, out_trs.x, out_trs.y, out_trs.z, siAbsolute, siGlobal, siObj, siXYZ
	end if

	Rotate		in_CopyObject, out_rot.x, out_rot.y, out_rot.z, siAbsolute, siGlobal, siObj, siXYZ

	'
	' invert Z scaling to symmetrize geometry. 
	' We then normalize the scaling, freeze it, and set it to the absolute value of the original
	'
	in_CopyObject.Kinematics.Local.Transform.GetScaling l_Scl

	l_AbsScl.Copy l_Scl
	l_AbsScl.AbsoluteInPlace
	
	'
	' normalize scaling and invert Z
	'
	l_Scl.Set l_Scl.x/l_AbsScl.x, l_Scl.y/l_AbsScl.y, -l_Scl.z/l_AbsScl.z
	Scale	in_CopyObject, l_Scl.x, l_Scl.y, l_Scl.z, siAbsolute, siLocal, siObj, siXYZ

	'
	' freeze scaling. note: this will add a center operator to the construction history
	' then set the scaling to the absolute value of the original scaling
	' 
	ResetTransform in_CopyObject, siCtr, siScl, siXYZ
	Scale	in_CopyObject, l_AbsScl.x, l_AbsScl.y, l_AbsScl.z, siAbsolute, siLocal, siObj, siXYZ

	'
	' For bones we account for the inverted Z axis of the root in the preferred angles
	' the rotation limits, and the roll parameter
	'
	if (in_CurrentObject.Type = "bone" and not IsBonePrimitive(in_CurrentObject)) or in_CurrentObject.Type = "eff" then
		dim l_ParamCollOrig, l_ParamCollCopy

		set l_ParamCollCopy = in_CopyObject.Joint.Parameters
		set l_ParamCollOrig = in_CurrentObject.Joint.Parameters

		'
		' Preferred Angles
		'
		l_ParamCollCopy("prefrotx").value = - l_ParamCollOrig("prefrotx").value
		l_ParamCollCopy("prefroty").value = - l_ParamCollOrig("prefroty").value
		l_ParamCollCopy("prefrotz").value =   l_ParamCollOrig("prefrotz").value

		'
		' Rotation limits
		'
		l_ParamCollCopy("rotminx").value = - l_ParamCollOrig("rotmaxx").value
		l_ParamCollCopy("rotminy").value = - l_ParamCollOrig("rotmaxy").value
		l_ParamCollCopy("rotminz").value =   l_ParamCollOrig("rotminz").value

		l_ParamCollCopy("rotmaxx").value = - l_ParamCollOrig("rotminx").value
		l_ParamCollCopy("rotmaxy").value = - l_ParamCollOrig("rotminy").value
		l_ParamCollCopy("rotmaxz").value =   l_ParamCollOrig("rotmaxz").value

		'
		' Roll Parameter
		'
		if not l_ParamCollCopy("prefrotx_as_roll").value then
			l_ParamCollCopy("roll").value =  - l_ParamCollOrig("roll").value
		end if

	end if

	'
	' Symmetrize the object's static kinestate if it has one
	'
	if in_CurrentObject.HasStaticKinematicState then

'		logmessage "Static Kinestate Found: " & in_CurrentObject

		SI3DSymmetry in_CurrentObject.GetStaticKinematicState.Transform, in_SymmetryMatrix, out_rot, out_trs
		in_CurrentObject.GetStaticKinematicState.Transform.GetScaling out_scl
		out_Scl.AbsoluteInPlace
		out_rot.Set XSIMath.DegreesToRadians(out_rot.x), XSIMath.DegreesToRadians(out_rot.y), XSIMath.DegreesToRadians(out_rot.z)

		l_Xfm.SetIdentity
		l_Xfm.SetScaling out_Scl
		l_Xfm.SetRotationFromXYZAngles out_rot
		l_Xfm.SetTranslation out_trs

		in_CopyObject.GetStaticKinematicState.Transform = l_Xfm
		
	end if

	'
	' if the object has clusters with static kinestates, symmetrize those
	'
	' Disabled. reason: must correctly position the center op in the construction history for this to work properly
'	SymmetrizeClusterStaticKS in_CurrentObject, in_CopyObject, in_SymmetryMatrix

end sub

'------------------------------------------------------------------------------
' NAME:	 SymmetryMuteIK
' 
' AUTHOR: Peter Schretlen September 2002
'
' INPUT:	in_CopyObjectsColl	The duplicated objects
'
' OUTPUT:	Mute IK ops and maintain a list of what we have muted. 
'
' DESCRIPTION: Deactivate IK operator on this chain
'------------------------------------------------------------------------------
sub SymmetryMuteIK (in_CurrentObject, in_CopyObject, in_boneCollection)

	dim skeleton, l_first_bone, l_boneIndex, l_bAlreadyMuted, l_bone
	if in_CopyObject.Type = "root" or _ 
       (in_CopyObject.Type = "bone" and not IsBonePrimitive(in_CopyObject)) or _ 
       in_CopyObject.Type = "eff" then

		' 		
		' get the skeleton this object belongs to
		' 
		set skeleton = GetSkeleton(in_CopyObject, l_boneIndex)
		set l_first_bone = skeleton(1)


		'
		' we may have muted the ik op already - check
		'

		l_bAlreadyMuted = False
		for each l_bone in in_boneCollection
			if l_bone = l_first_bone then
				l_bAlreadyMuted = True
				exit for
			end if
		next 


		'
		' mute the ik ops if we haven't done so already
		'

		if not l_bAlreadyMuted then
			in_boneCollection.Add l_first_bone
			SetValue l_first_bone & ".chain.muteikop", True					
		end if
	end if

end sub
'------------------------------------------------------------------------------
' NAME:	 InversionSymmetry
' 
' AUTHOR: Peter Schretlen September 2002
'
' INPUT:	in_CurrentObject	The original object
'			in_CopyObject		duplicated object
'			in_SymmetryMatrix
'			in_Normal			the normal to the symmetry plane
'
' DESCRIPTION: Symmetrizes a duplicated object with negative scaling.
'------------------------------------------------------------------------------
sub InversionSymmetry (in_CurrentObject, in_CopyObject, in_SymmetryMatrix, in_Normal)

	'
	' Apply the symmetry transformation 
	'		
	dim Trans, ScaleX, ScaleY, ScaleZ

	if in_Normal.x = 1 and in_Normal.y = 0 and in_Normal.z = 0 then

		Trans = GetValue(in_CopyObject & ".kine.global.posx")
		Translate in_CopyObject, -Trans, 0.000, 0.000, siAbsolute, siGlobal, siObj, siX
		Rotate in_CopyObject, -180.000, 0.000, 0.000, siRelative, siGlobal, siObj, siXYZ

	elseif in_Normal.x = 0 and in_Normal.y = 1 and in_Normal.z = 0 then
		
		Trans = GetValue(in_CopyObject & ".kine.global.posy")
		Translate in_CopyObject, 0.000, -Trans, 0.000, siAbsolute, siGlobal, siObj, siY
		Rotate in_CopyObject, 0.000, -180.000, 0.000, siRelative, siGlobal, siObj, siXYZ

	elseif in_Normal.x = 0 and in_Normal.y = 0 and in_Normal.z = 1 then

		Trans = GetValue(in_CopyObject & ".kine.global.posz")
		Translate in_CopyObject, 0.000, 0.000, -Trans, siAbsolute, siGlobal, siObj, siZ
		Rotate in_CopyObject, 0.000, 0.000, -180.000, siRelative, siGlobal, siObj, siXYZ

	end if

	ScaleX = GetValue(in_CopyObject &".kine.global.sclx")
	ScaleY = GetValue(in_CopyObject &".kine.global.scly")
	ScaleZ = GetValue(in_CopyObject &".kine.global.sclz")
	Scale in_CopyObject, -ScaleX , -ScaleY , -ScaleZ , siAbsolute, siGlobal, siObj, siXYZ

	'
	' If the original object had a static kinestate, we must apply the symmetry 
	' transformation to the static kinestate of the copy
	'
	if in_CurrentObject.HasStaticKinematicState then 
		
		dim Tx, Ty, Tz, Sx, Sy, Sz, Rx, Ry, Rz
		
		Tx = GetValue(in_CurrentObject & ".StaticKineState.posx")
		Ty = GetValue(in_CurrentObject & ".StaticKineState.posy")
		Tz = GetValue(in_CurrentObject & ".StaticKineState.posz")

		Sx = GetValue(in_CurrentObject &".StaticKineState.sclx")
		Sy = GetValue(in_CurrentObject &".StaticKineState.scly")
		Sz = GetValue(in_CurrentObject &".StaticKineState.sclz")

		Rx = GetValue(in_CurrentObject &".StaticKineState.orix")
		Ry = GetValue(in_CurrentObject &".StaticKineState.oriy")
		Rz = GetValue(in_CurrentObject &".StaticKineState.oriz")

		if in_Normal.x = 1 and in_Normal.y = 0 and in_Normal.z = 0 then
			
			' Set Static KineState Scaling  
			SetValue in_CopyObject & ".StaticKineState.sclx", -Sx
			SetValue in_CopyObject & ".StaticKineState.scly", -Sy
			SetValue in_CopyObject & ".StaticKineState.sclz", -Sz

			' Set Static KineState Rotation 
			SetValue in_CopyObject & ".StaticKineState.orix", Rx - 180
			SetValue in_CopyObject & ".StaticKineState.oriy", Ry
			SetValue in_CopyObject & ".StaticKineState.oriz", Rz

			' Set Static KineState Translation
			SetValue in_CopyObject & ".StaticKineState.posx", -Tx
			SetValue in_CopyObject & ".StaticKineState.posy", Ty
			SetValue in_CopyObject & ".StaticKineState.posz", Tz

		elseif in_Normal.x = 0 and in_Normal.y = 1 and in_Normal.z = 0 then
			
			' Set Static KineState Scaling  
			SetValue in_CopyObject & ".StaticKineState.sclx", -Sx
			SetValue in_CopyObject & ".StaticKineState.scly", -Sy
			SetValue in_CopyObject & ".StaticKineState.sclz", -Sz

			' Set Static KineState Rotation 
			SetValue in_CopyObject & ".StaticKineState.orix", Rx
			SetValue in_CopyObject & ".StaticKineState.oriy", Ry - 180
			SetValue in_CopyObject & ".StaticKineState.oriz", Rz

			' Set Static KineState Translation
			SetValue in_CopyObject & ".StaticKineState.posx", Tx
			SetValue in_CopyObject & ".StaticKineState.posy", -Ty
			SetValue in_CopyObject & ".StaticKineState.posz", Tz

		elseif in_Normal.x = 0 and in_Normal.y = 0 and in_Normal.z = 1 then

			' Set Static KineState Scaling  
			SetValue in_CopyObject & ".StaticKineState.sclx", -Sx
			SetValue in_CopyObject & ".StaticKineState.scly", -Sy
			SetValue in_CopyObject & ".StaticKineState.sclz", -Sz

			' Set Static KineState Rotation 
			SetValue in_CopyObject & ".StaticKineState.orix", Rx 
			SetValue in_CopyObject & ".StaticKineState.oriy", Ry
			SetValue in_CopyObject & ".StaticKineState.oriz", Rz - 180

			' Set Static KineState Translation
			SetValue in_CopyObject & ".StaticKineState.posx", Tx
			SetValue in_CopyObject & ".StaticKineState.posy", Ty
			SetValue in_CopyObject & ".StaticKineState.posz", -Tz

		end if
	end if

end sub

'------------------------------------------------------------------------------
' NAME:	 FMuteActiveCns
' 
' AUTHOR: Peter Schretlen August  2002
'		  Peter Schretlen October 2002: also mute position & rotation limits
'
' INPUT:	in_CopyObjectsColl	The duplicated objects
'
' OUTPUT:	A collection of constraints activation parameters that were muted 
'
' DESCRIPTION: 
'			- deactivate all constraints
'			- deactivates position & rotation limits on the local transform 
'			- deactivates joint rotation limits. 
'------------------------------------------------------------------------------
Function FMuteActiveCns(in_CopyObjectsColl, inout_ArrayLimitsExist)

	dim out_CnsColl, l_CurrentObject, l_Cns, l_Param, l_LimitNames, l_Name, l_Idx
	set out_CnsColl = CreateObject("XSI.Collection")

	l_LimitNames = Array("posxminactive","posyminactive","poszminactive","posxmaxactive","posymaxactive","poszmaxactive", _
						 "rotxminactive","rotyminactive","rotzminactive","rotxmaxactive","rotymaxactive","rotzmaxactive")
	l_Idx = 0

	for each l_CurrentObject in in_CopyObjectsColl	

		' initialize array element
		inout_ArrayLimitsExist(l_Idx) = false

		'
		' check that the object has a kinematics property
		'
		if (typename(l_CurrentObject.Properties.Item("Kinematics")) <> "Nothing" ) then	

			'
			' go through the constraints and mute them
			'
			if l_CurrentObject.Kinematics.Constraints.count > 0 then
				for each l_Cns in l_CurrentObject.Kinematics.Constraints 

				set l_Param = l_Cns.parameters.item("active")
				if (typename( l_Param ) <> "Nothing") then
					if l_Param.value then
						out_CnsColl.Add l_Param
						l_Param.value = false
'						logmessage "adding parameter:  " & l_Param.FullName
'					else
'						logmessage l_Param.FullName & "   is not active"
					end if
				end if 

				next
			end if	'if cns count>0

			'''''''''''''''''''''''''''''''''''''''''''''''''''''''
			' Deactivate pos & rot limits on the local transform
			'
			' *** NOTE: we DON'T add these to the list of parameters to reactivate, 
			' * because the ones that will be reactivated will be different. (e.g. if rotxMINlimit is 
			' * active in original, the copy with have rotxMAXlimit active because the inverted Z
			' * axis will change the sense of rotation. 
			'
			' Instead the reactivation gets done in SymmetrizePosRotLimits.
			'
			'''''''''''''''''''''''''''''''''''''''''''''''''''''''
			dim param, LT_Params

			set LT_Params = l_CurrentObject.Kinematics.Local.Parameters
			for each l_Name in l_LimitNames

				if LT_Params(l_Name).value then
					LT_Params(l_Name).value = false
					inout_ArrayLimitsExist(l_Idx) = true
				end if

			next 

			'
			' Check for active rotation limits on the joint property of bones & effectors
			'
			if (l_CurrentObject.Type = "bone" and not IsBonePrimitive(l_CurrentObject)) or l_CurrentObject.Type = "eff" then
				set l_Param =  l_CurrentObject.Joint.parameters.item("rotlim_active")				

				if l_Param.value then
					out_CnsColl.Add l_Param
					l_Param.value = false
'					logmessage "adding parameter:  " & l_Param.FullName
'				else
'					logmessage l_Param.FullName & "   is not active"
				end if
			end if

		end if		'if kinematics

		l_Idx = l_Idx + 1

	next
	
	set FMuteActiveCns = out_CnsColl

end Function

'------------------------------------------------------------------------------
' NAME:	 RestoreActiveCns
' 
' AUTHOR: Peter Schretlen August 2002
'         Peter Schretlen October 2002: need to symmetrize rotation & pos limits after reactivating
'
' INPUT:	in_CnsCollection: A collection of constraints activation parameters to reactive
'
' DESCRIPTION: Sets all constraints in the list to active
'------------------------------------------------------------------------------
sub RestoreActiveCns( in_CnsToActivateColl )
	
	dim l_param

	for each l_Param in in_CnsToActivateColl 
'		logmessage "reactivating:  " & l_Param.FullName
		l_Param.value = true
	next

end sub

'------------------------------------------------------------------------------
' NAME:	 SymmetrizeClusterStaticKS
' 
' AUTHOR: Peter Schretlen August 2002
'
' INPUT:	in_CurrentObject	The original object
'			in_CopyObject		duplicated object
'			in_SymMat
'
' DESCRIPTION: looks for cluster on the object, then looks for static kinestates
'			   on those cluster. If there are any, it does a local symmetrization 
'			   of the static kinestate
'------------------------------------------------------------------------------
Sub SymmetrizeClusterStaticKS( in_OrigObject, in_CopyObject, in_SymMat)

	dim l_geom, l_cluster, l_ClsIdx, out_rot, out_scl, out_trs, l_Xfm
	set out_scl = XSIMath.CreateVector3 
	set out_trs = XSIMath.CreateVector3 
	set out_rot = XSIMath.CreateVector3 
	set l_Xfm = XSIMath.CreateTransform

	set l_geom = in_OrigObject.ActivePrimitive.Geometry

	if ( typename( l_geom ) <> "Nothing" ) then

		l_ClsIdx = 0
		for each l_cluster in l_geom.Clusters
			if l_cluster.HasStaticKinematicState then

				'
				' CLUSTER STATIC KINESTATE
				'

				'
				' clusters can have many static KS
				'
				dim l_SKS,l_SKSCollOrig, l_SKSCollCopy, SKS_idx

				set l_SKSCollOrig = l_cluster.GetStaticKinematicStates
				set l_SKSCollCopy = in_CopyObject.ActivePrimitive.Geometry.Clusters.Item(l_ClsIdx).GetStaticKinematicStates

				SKS_idx = 0
'				logmessage "copy: " & l_SKSCollCopy.count
'				logmessage "original: " & l_SKSCollOrig.count

				if l_SKSCollCopy.count = l_SKSCollOrig.count then
					for each l_SKS in l_SKSCollOrig

						l_SKSCollCopy.Item(SKS_idx).Transform.GetScaling out_scl
						l_SKSCollCopy.Item(SKS_idx).Transform.GetTranslation out_trs
						l_SKSCollCopy.Item(SKS_idx).Transform.GetRotationXYZAngles out_rot

						out_trs.Set out_trs.x, out_trs.y, -out_trs.z
						out_rot.Set -out_rot.x, -out_rot.y, out_rot.z

						l_Xfm.SetIdentity

						l_Xfm.SetScaling out_Scl
						l_Xfm.SetRotationFromXYZAngles out_rot
						l_Xfm.SetTranslation out_trs

						l_SKSCollCopy.Item(SKS_idx).Transform = l_Xfm

'						logmessage l_SKSCollCopy.Item(SKS_idx).fullname

						SKS_idx = SKS_idx + 1
					next
				else
'					logmessage "Cluster static KS not found"
				end if 
			end if
			l_ClsIdx = l_ClsIdx + 1
		next
	end if

end sub


'------------------------------------------------------------------------------
' NAME:	 SI3DSymmetry
' 
' AUTHOR: Peter Schretlen Sept 2002
'
' INPUT:	in_ObjXfm:	the global transform of original object
'			in_SymMat:	the symmetry transformation matrix
'
' OUTPUT:	io_rot:		the rotations to apply to symmetrize the object, in degrees
'			io_trs:		the tranlsations to apply to symmetrize the object
'
' DESCRIPTION: Gets the rotations and translations for SI3D style symmetry
'
' Method: 
' 1. Obtain the original object's global transfrom.
' 2. Flip one axis to compensate for the change in handedness when we apply the symmetry transformation
' 3. Apply the symmetry transformation
' 4. Adjust the resulting matrix for scalings
' 5. Extract rotation, and translation from the result
'
'------------------------------------------------------------------------------
sub SI3DSymmetry (in_ObjXfm, in_SymMat, io_rot, io_trs)

	dim l_ObjXfm, l_ObjMat, l_ObjScl
	dim l_SymXfm
	dim l_vtemp

	set l_ObjXfm = XSIMath.CreateTransform
	set l_SymXfm = XSIMath.CreateTransform
	set l_ObjMat = XSIMath.CreateMatrix4 
	set l_ObjScl = XSIMath.CreateVector3 
	set l_vtemp = XSIMath.CreateVector3 

	'
	' 1. Get the global transform
	'
	set l_ObjXfm = in_ObjXfm
	in_ObjXfm.GetScaling l_ObjScl

	'
	' 2. Scale Z by -1, to compensate for the change in handedness of the frame. 
	'    By doing this, the result of the symmetry transformation will be of the same handedness as the original frame.
	'	 We can then apply the rotations of the result to the duplicated object, giving a proper or "pure rotation" symmetry.
	'

	l_ObjXfm.GetScaling l_vtemp
	l_vtemp.Set l_vtemp.x, l_vtemp.y, -l_vtemp.z
	l_ObjXfm.SetScaling l_vtemp

	'
	' 3. Apply the symmetry transformation
	'

	l_ObjXfm.GetMatrix4 l_ObjMat
	l_ObjMat.MulInPlace in_SymMat

	'
	' 4. Adjust the matrix for scaling values
	'	 from the resulting matrix we can extract symmetry rotations for an object with positive x,y,z scaling. 
	'	 Here we compensate in case any of the scalings are not positive.
	'
	if l_ObjScl.x < 0 or l_ObjScl.y < 0 or l_ObjScl.z < 0 then
		
		dim l_TmpXfm, l_TmpMat
		set l_TmpXfm = XSIMath.CreateTransform
		set l_TmpMat = XSIMath.CreateMatrix4

		l_TmpXfm.SetIdentity

		l_vtemp.Absolute l_ObjScl
		l_vtemp.Set l_ObjScl.x/l_vtemp.x, l_ObjScl.y/l_vtemp.y, l_ObjScl.z/l_vtemp.z

		l_TmpXfm.SetScaling l_vtemp
		l_TmpXfm.GetMatrix4 l_TmpMat

		l_ObjMat.Mul l_TmpMat, l_ObjMat

	end if 

	'
	' 5. Extract the rotation and translation.
	'

	dim RotX, RotY, RotZ
	l_SymXfm.SetMatrix4 l_ObjMat
	l_SymXfm.GetTranslation io_trs
	l_SymXfm.GetRotationXYZAnglesValues RotX,RotY,RotZ
	io_rot.Set XSIMath.RadiansToDegrees(RotX), XSIMath.RadiansToDegrees(RotY), XSIMath.RadiansToDegrees(RotZ)

end sub

'------------------------------------------------------------------------------
' NAME:	 SymmetrizeConstraintOffsets2
' 
' AUTHOR: Peter Schretlen September 2002
'
' INPUT:	in_OrigObject	original object
'			in_CopyObject	duplicated object
'			in_SymMat		
'			in_vPlaneNormal normal to the symmetry plane
'
' DESCRIPTION: Check if this object has constraints. If so, symmetrize the offsets.
'			   We handle the constraints on a case by case basis.
'			   This method is used by SI3DStyle symmetry. Inversion styly symmetry
'			   uses SymmetrizeConstraintOffsets
'------------------------------------------------------------------------------
sub SymmetrizeConstraintOffsets2( in_OrigObject, in_CopyObject, in_SymMat, in_vPlaneNormal )

	dim l_ObjConstraints, l_Cns, l_CnsParameters, l_Param, l_strlen

	'
	' check if any work needs to be done
	'
	if in_CopyObject.Kinematics.Constraints.count = 0 then
		exit sub
	end if

	set l_ObjConstraints = in_CopyObject.Kinematics.Constraints
	dim cns_idx, l_ParamName, roll
	cns_idx = 0

	for each l_Cns in l_ObjConstraints 

'		logmessage l_Cns.Name

		Select Case l_Cns.Name

			Case "Pose Cns"	

				if not l_Cns.Parameters("affbyori").value then
					SymmetrizeGlobalPositionOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".pos", in_SymMat
				else
					SymmetrizeLocalPositionOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".pos" , in_OrigObject
				end if

				SymmetrizeLocalRotationOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".rot" 
				SymmetrizeAbsValue l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".scl"
				SymmetrizeLocalRotationOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".sclori" 

			Case "Position Cns"

				if not l_Cns.Parameters("affbyori1").value then
					SymmetrizeGlobalPositionOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".off1", in_SymMat
				else
					SymmetrizeLocalPositionOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".off1" , in_OrigObject
				end if

				if not l_Cns.Parameters("affbyori2").value then
					SymmetrizeGlobalPositionOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".off2", in_SymMat
				else
					SymmetrizeLocalPositionOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".off2" , in_OrigObject
				end if

				SymmetrizeGlobalPositionOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".pointat", in_SymMat
				SymmetrizeLocalPositionOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".up" , in_OrigObject

				'
				' if symmetry plane is z=0 plane and we have local offsets, don't invert the roll
				' note: if we implement symmetry of an arbitrary plane, we will need another way to do this
				'

				roll = GetValue(in_OrigObject.Kinematics.Constraints(cns_idx) & ".roll")

				' we negate the roll unless we have global offsets and the symmetry plane is z=0
				if in_vPlaneNormal.z = 1 and not l_Cns.Parameters("affbyori1").value then
					SetValue l_Cns & ".roll", roll
				else
					SetValue l_Cns & ".roll", -roll
				end if

			Case "Orientation Cns"

				dim l_scl,x,y,z
				set l_scl = XSIMath.CreateVector3 
				l_scl.set 1,1,1
				l_scl.MulByMatrix4InPlace in_SymMat
				l_scl.NegateInPlace

				l_ParamName = in_OrigObject.Kinematics.Constraints(cns_idx) & ".off"
				SetValue l_Cns & ".offx", l_scl.x*GetValue(l_ParamName & "x")
				SetValue l_Cns & ".offy", l_scl.y*GetValue(l_ParamName & "y")
				SetValue l_Cns & ".offz", l_scl.z*GetValue(l_ParamName & "z")

			Case "ScalingCns"

				SymmetrizeAbsValue l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".off"

			Case "Direction Cns"
	
				SymmetrizeLocalPositionOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".off", in_OrigObject
				SymmetrizeLocalPositionOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".dir", in_OrigObject

				SymmetrizeGlobalPositionOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".pointat", in_SymMat

				SymmetrizeLocalPositionOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".up" , in_OrigObject

				roll = GetValue(in_OrigObject.Kinematics.Constraints(cns_idx) & ".roll")
				SetValue l_Cns & ".roll", -roll


			Case "Distance Cns"

				if not l_Cns.Parameters("affbyori1").value then
					SymmetrizeGlobalPositionOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".off1", in_SymMat
				else
					SymmetrizeLocalPositionOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".off1" , in_OrigObject
				end if

				if not l_Cns.Parameters("affbyori2").value then
					SymmetrizeGlobalPositionOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".off2", in_SymMat
				else
					SymmetrizeLocalPositionOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".off2" , in_OrigObject
				end if

				SymmetrizeGlobalPositionOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".pointat", in_SymMat
				SymmetrizeLocalPositionOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".up" , in_OrigObject

				'
				' if symmetry plane is z=0 plane and we have local offsets, don't invert the roll
				' note: if we implement symmetry of an arbitrary plane, we will need another way to do this
				'

				roll = GetValue(in_OrigObject.Kinematics.Constraints(cns_idx) & ".roll")

				' we negate the roll unless we have global offsets and the symmetry plane is z=0
				if in_vPlaneNormal.z = 1 and not l_Cns.Parameters("affbyori1").value then
					SetValue l_Cns & ".roll", roll
				else
					SetValue l_Cns & ".roll", -roll
				end if

				'copy the value of the distance parameter
				SetValue l_Cns & ".dist", GetValue(in_OrigObject.Kinematics.Constraints(cns_idx) & ".dist")

			Case "Surface Cns"

				'copy the posu and posv parameters
				SetValue l_Cns & ".posu", GetValue(in_OrigObject.Kinematics.Constraints(cns_idx) & ".posu")
				SetValue l_Cns & ".posv", GetValue(in_OrigObject.Kinematics.Constraints(cns_idx) & ".posv")

				if not l_Cns.Parameters("affbyori1").value then
					SymmetrizeGlobalPositionOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".off", in_SymMat
				else
					SymmetrizeLocalPositionOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".off" , in_OrigObject
				end if

				SymmetrizeLocalPositionOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".up" , in_OrigObject

				' adjust roll parameter by 180 degrees
				roll = GetValue(in_OrigObject.Kinematics.Constraints(cns_idx) & ".roll")

				if l_Cns.Parameters("affbyori1").value then
					SetValue l_Cns & ".roll", 180 - roll
				else
					SetValue l_Cns & ".roll", -180 - roll
				end if

				'roll = -180 - roll
				

				SymmetrizeLocalPositionOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".dir" , in_OrigObject

			Case "PathCns"

				if not l_Cns.Parameters("affbyori1").value then
					SymmetrizeGlobalPositionOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".off", in_SymMat
				else
					SymmetrizeLocalPositionOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".off" , in_OrigObject
				end if

				SymmetrizeGlobalPositionOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".pointat", in_SymMat
				SymmetrizeLocalPositionOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".dir" , in_OrigObject
				SymmetrizeLocalPositionOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".up" , in_OrigObject
				roll = GetValue(in_OrigObject.Kinematics.Constraints(cns_idx) & ".roll")
				SetValue l_Cns & ".roll", -roll

			Case "Two Points Cns"

				if not l_Cns.Parameters("affbyori1").value then
					SymmetrizeGlobalPositionOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".off", in_SymMat
				else
					SymmetrizeLocalPositionOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".off" , in_OrigObject
				end if

				SymmetrizeGlobalPositionOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".pointat", in_SymMat
				SymmetrizeLocalPositionOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".dir" , in_OrigObject
				SymmetrizeLocalPositionOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".up" , in_OrigObject

				roll = GetValue(in_OrigObject.Kinematics.Constraints(cns_idx) & ".roll")
				SetValue l_Cns & ".roll", -roll

			Case "Three Points Cns"

				'copy the percv, percu, percw parameters
				SetValue l_Cns & ".percv", GetValue(in_OrigObject.Kinematics.Constraints(cns_idx) & ".percv")
				SetValue l_Cns & ".percu", GetValue(in_OrigObject.Kinematics.Constraints(cns_idx) & ".percu")
				SetValue l_Cns & ".percw", GetValue(in_OrigObject.Kinematics.Constraints(cns_idx) & ".percw")

				if not l_Cns.Parameters("affbyori1").value then
					SymmetrizeGlobalPositionOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".off", in_SymMat
				else
					SymmetrizeLocalPositionOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".off" , in_OrigObject
				end if

				SymmetrizeLocalPositionOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".up" , in_OrigObject

				' adjust roll parameter by 180 degrees
				roll = GetValue(in_OrigObject.Kinematics.Constraints(cns_idx) & ".roll")
				SetValue l_Cns & ".roll", -180 - roll

				SymmetrizeLocalPositionOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".dir" , in_OrigObject

			Case "N Points Cns"

			Case "Symmetry Cns"

				SymmetrizeAbsValue l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".scl"
				SymmetrizeLocalRotationOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".rot"
				SymmetrizeLocalPositionOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".pos", in_OrigObject

			Case "Object To Cluster Cns"

				if not l_Cns.Parameters("affbyori1").value then
					SymmetrizeGlobalPositionOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".off1", in_SymMat
				else
					SymmetrizeLocalPositionOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".off1" , in_OrigObject
				end if

				SymmetrizeLocalPositionOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".dir" , in_OrigObject
				SymmetrizeLocalPositionOffset l_Cns, in_OrigObject.Kinematics.Constraints(cns_idx), ".up" , in_OrigObject
				'
				' if symmetry plane is z=0 plane and we have local offsets, don't invert the roll
				' note: if we implement symmetry of an arbitrary plane, we will need another way to do this
				'
				roll = GetValue(in_OrigObject.Kinematics.Constraints(cns_idx) & ".roll")

				' we negate the roll unless we have global offsets and the symmetry plane is z=0
				if in_vPlaneNormal.z = 1 and not l_Cns.Parameters("affbyori1").value then
					SetValue l_Cns & ".roll", roll
				else
					SetValue l_Cns & ".roll", -roll
				end if

			Case Else
		End Select

		cns_idx = cns_idx + 1
	next

end sub
'------------------------------------------------------------------------------
' NAME:	 SymmetrizeLocalPositionOffset
' 
' AUTHOR: Peter Schretlen September 2002
'
' DESCRIPTION: Symmetrize a local translation offset. 
'------------------------------------------------------------------------------
sub SymmetrizeLocalPositionOffset( in_Cns, in_OrigCns, in_OffsetName, in_OrigObject )

	'
	' for a local offset we just negate z, because the z axis is inverted
	'
	SetValue in_Cns & in_OffsetName & "x", GetValue(in_OrigCns & in_OffsetName & "x")
	SetValue in_Cns & in_OffsetName & "y", GetValue(in_OrigCns & in_OffsetName & "y")
	SetValue in_Cns & in_OffsetName & "z", -GetValue(in_OrigCns & in_OffsetName & "z")

	'88087: -z is the camera direction, if negated camera won't point the right way.
	'Instead to compensate negate x and z axes, which is equivalent to a 180 degree rotation about Y axis.
	if in_OrigObject.Type = "camera" and in_OffsetName = ".dir" then
		SetValue in_Cns & ".dirx", -GetValue(in_Cns & ".dirx")
		SetValue in_Cns & ".diry",  GetValue(in_Cns & ".diry")
		SetValue in_Cns & ".dirz", -GetValue(in_Cns & ".dirz")
	end if

end sub

'------------------------------------------------------------------------------
' NAME:	 SymmetrizeLocalRotationOffset
' 
' AUTHOR: Peter Schretlen September 2002
'
' DESCRIPTION: local rotation offsets - negate x and y, keep Z the same
'------------------------------------------------------------------------------
sub SymmetrizeLocalRotationOffset( in_Cns, in_OrigCns, in_OffsetName )

	'
	' we treat the same way as pref angles: negate x and y, keep Z the same
	'
	SetValue in_Cns & in_OffsetName & "x", -GetValue(in_OrigCns & in_OffsetName & "x")
	SetValue in_Cns & in_OffsetName & "y", -GetValue(in_OrigCns & in_OffsetName & "y")
	SetValue in_Cns & in_OffsetName & "z", GetValue(in_OrigCns & in_OffsetName & "z")


end sub

'------------------------------------------------------------------------------
' NAME:	 SymmetrizeAbsValue
' 
' AUTHOR: Peter Schretlen September 2002
'
' DESCRIPTION: Copy the absolute values of the offsets
'------------------------------------------------------------------------------
sub SymmetrizeAbsValue( in_Cns, in_OrigCns,  in_OffsetName )

	SetValue in_Cns & in_OffsetName & "x", Abs(GetValue(in_OrigCns & in_OffsetName & "x"))
	SetValue in_Cns & in_OffsetName & "y", Abs(GetValue(in_OrigCns & in_OffsetName & "y"))
	SetValue in_Cns & in_OffsetName & "z", Abs(GetValue(in_OrigCns & in_OffsetName & "z"))

end sub


'------------------------------------------------------------------------------
' NAME:	 SymmetrizePositionOffsetGlobal
' 
' AUTHOR: Peter Schretlen September 2002
'
'------------------------------------------------------------------------------
sub SymmetrizeGlobalPositionOffset( in_Cns, in_OrigCns, in_OffsetName, in_SymMatrix )

	'
	' we must symmetrize a global offset
	'
	dim l_vTrs, l_Xfm, out_rot, out_trs
	set l_vTrs = XSIMath.CreateVector3 
	set out_trs = XSIMath.CreateVector3 
	set out_rot = XSIMath.CreateVector3 
	set l_Xfm = XSIMath.CreateTransform
	l_Xfm.SetIdentity

	'for displacements get the vector and symmetrize it
	l_vTrs.set GetValue(in_OrigCns & in_OffsetName & "x"), GetValue(in_OrigCns & in_OffsetName & "y"), GetValue(in_OrigCns & in_OffsetName & "z")
	l_Xfm.SetTranslation l_vTrs

	SI3DSymmetry l_Xfm, in_SymMatrix, out_rot, out_trs

	SetValue in_Cns & in_OffsetName & "x", out_trs.x
	SetValue in_Cns & in_OffsetName & "y", out_trs.y
	SetValue in_Cns & in_OffsetName & "z", out_trs.z

end sub

'------------------------------------------------------------------------------
' NAME:	 SymmetrizeConstraintOffsets
' 
' AUTHOR: Peter Schretlen August 2002
'
' INPUT:	in_Object	Object whose constraits to symmetrize (if it has any)
'
' DESCRIPTION: Check if this object has constraints. If so, symmetrize the offsets
'			This method is used for Inversion (negative scaling) style symmetry.
'			SI3DStyle symmetry uses SymmetrizeConstraintOffsets2
'------------------------------------------------------------------------------
sub SymmetrizeConstraintOffsets( in_OrigObject, in_CopyObject, in_Normal )

'	logmessage "SymmetrizeConstraintOffsets"

	dim l_ObjConstraints, l_Cns, l_CnsParameters, l_Param, l_strlen

	'
	' first, check if any work needs to be done
	'
	if in_CopyObject.Kinematics.Constraints.count = 0 then
		exit sub
	end if

	'
	' loop through the constraint parameters looking for offsets
	'
	'position constraint offsets: off(x|y|z),off1(x|y|z),off2(x|y|z),pos(x|y|z)
	'other constraint offsets handled: dist, rot(x|y|z), scl(x|y|z), sclori(x|y|z)
	'

	set l_ObjConstraints = in_CopyObject.Kinematics.Constraints
	dim cns_idx
	cns_idx = 0
	for each l_Cns in l_ObjConstraints 

		dim param_idx
		param_idx = 0
		'search for pos,rot,scl offsets and set the parameters accordingly
		for each l_Param in l_Cns.parameters

			l_strlen = len(l_Param.ScriptName)
			if InStr(l_Param.ScriptName,"off") = 1 or InStr(l_Param.ScriptName,"pos") = 1 then 
				SymmetrizePositionOffset in_OrigObject, in_CopyObject, in_Normal, cns_idx, param_idx
			elseif InStr(l_Param.ScriptName,"dist") = 1 or _
			       (( InStr(l_Param.ScriptName,"scl") = 1 or InStr(l_Param.ScriptName,"rot") = 1 ) and _
				   (InStrRev(l_Param.ScriptName, "x") = l_strlen or _
				    InStrRev(l_Param.ScriptName, "y") = l_strlen or _
					InStrRev(l_Param.ScriptName, "z") = l_strlen)) then 
				'in these cases we just copy the value
				SetValue in_CopyObject.Kinematics.Constraints(cns_idx).Parameters(param_idx),_
						 in_OrigObject.Kinematics.Constraints(cns_idx).Parameters(param_idx).value
			end if


			param_idx = param_idx + 1			

		next

		cns_idx = cns_idx + 1
	next

end sub

'------------------------------------------------------------------------------
' NAME:	 SymmetrizePositionOffset
' 
' AUTHOR: Peter Schretlen August 2002
'
' DESCRIPTION: 
'------------------------------------------------------------------------------
sub SymmetrizePositionOffset( in_OrigObject, in_CopyObject, in_Norm, in_CnsIdx, in_ParamIdx)

	dim l_CopyOffset, l_OrigOffset
	dim l_xyz, l_strlen
	dim l_bDontNegate, l_bForceNegate, l_CnsName

	'
	' determine if this is a x,y, or z offset
	'
	set l_CopyOffset = in_CopyObject.Kinematics.Constraints(in_CnsIdx).Parameters(in_ParamIdx)
	set l_OrigOffset = in_OrigObject.Kinematics.Constraints(in_CnsIdx).Parameters(in_ParamIdx)

	' we may have some offsets that are not x,y, or z. For example, posu and posv on the surface cns. 
	' in this case l_xyz will be empty, and the offsets values will be copied.
	l_xyz = ""

	'check that the last character in the parameter name is an x,y, or z
	l_strlen = len(l_CopyOffset.ScriptName)
	if InStrRev(l_CopyOffset.ScriptName, "x") = l_strlen or InStrRev(l_CopyOffset.ScriptName, "y") = l_strlen or InStrRev(l_CopyOffset.ScriptName, "z") = l_strlen then 
		'get the last character
		l_xyz = Right(l_CopyOffset.ScriptName, 1)
	end if
	
	dim l_xyz_Norm
	if in_Norm.x = 1 and in_Norm.y = 0 and in_Norm.z = 0 then
		l_xyz_Norm = "x"
	elseif in_Norm.x = 0 and in_Norm.y = 1 and in_Norm.z = 0 then
		l_xyz_Norm = "y"
	elseif in_Norm.x = 0 and in_Norm.y = 0 and in_Norm.z = 1 then
		l_xyz_Norm = "z"
	end if
	
	'
	' In some cases we want to negate the postion offsets, others we do not
	' we handle this on a case by case basis below.
	'

	' Pose constraint is an exception (local offsets). If its a pose constraint just copy the values
	l_CnsName = in_CopyObject.Kinematics.Constraints(in_CnsIdx).Name
	l_bDontNegate =    (l_CnsName = "Pose Cns")_
					or (l_CnsName = "ScalingCns")_
					or (l_CnsName = "Orientation Cns")_
					or (l_CnsName = "Direction Cns")_
					or (l_CnsName = "Symmetry Cns")
	l_bForceNegate = (l_CnsName = "Orientation Cns") and not (l_xyz = l_xyz_Norm)

	' need to symmetrize the offset in this direction (negate the value of the original offset) 	
	if (l_xyz = l_xyz_Norm) and (not l_bDontNegate) or l_bForceNegate then
		SetValue l_CopyOffset, -l_OrigOffset.value
	else
		SetValue l_CopyOffset, l_OrigOffset.value 
	end if 

end sub

'------------------------------------------------------------------------------
' NAME:	 SymmetrizePosRotLimits
' 
' AUTHOR: Peter Schretlen October 2002
'
' TODO: handle the case when the parent is the scene root, in which case local = global.
'
' NOTE: the in_ArrayHasRotLimit is a limit of booleans that holds whether the object has rotation limits or not
'		this is used for performance reasons, otherwise we are forced to check at least 12 parameter values on each object!
'
' DESCRIPTION: 
'			- symmetrize rotation & position limits on the local transform
'
'			the Z axis is inverted, changing the sense of rotation about the z axis.
'			we compensate by inverting x and y rotations:
'			
'			rotations: x: xmax = -xmin, xmin = -xmax
'						 y: ymax = -ymin, ymin = -ymax 
'						 z: unchanged 
'			
'			positions: x: unchanged
'						 y: unchanged
'						 z: zmax = -zmin, zmin = -zmax
'
'------------------------------------------------------------------------------
sub SymmetrizePosRotLimits( in_OrigObjColl, in_CopyObjColl, in_FreezeScaling, in_ArrayHasRotLimit)

	dim l_LimitNames, l_OrigObj, l_Index, l_CopyObj, l_OrigLT, l_CopyLT, l_RootIsParent
	l_Index = 0

	for each l_OrigObj in in_OrigObjColl

		'
		' - Don't handle objects we can't symmetrize (like a group, etc.)
		' - If the parent is the scene root (in which case local = global), just copy the values, not correct
		'   but for now we won't handle this case.
		'
		
		if l_OrigObj.BelongsTo("3D Object") and in_ArrayHasRotLimit(l_Index) then

'			logmessage "checking limits. Has limits: " & in_ArrayHasRotLimit(l_Index) 

			set l_CopyObj = in_CopyObjColl( l_Index )

			l_RootIsParent = l_CopyObj.Parent.IsEqualTo(ActiveProject.ActiveScene.Root)

			set l_OrigLT = l_OrigObj.Kinematics.Local
			set l_CopyLT = l_CopyObj.Kinematics.Local

			'
			' copy pos X & Y limits , invert Z if we freeze scaling
			'
			CopyLTLimit  l_OrigLT, l_CopyLT, "posx", false 
			CopyLTLimit  l_OrigLT, l_CopyLT, "posy", false 
			CopyLTLimit  l_OrigLT, l_CopyLT, "posz", in_FreezeScaling and not l_RootIsParent

			'
			' copy rot Z limits, invert X and Y if we freeze scaling
			'
			CopyLTLimit  l_OrigLT, l_CopyLT, "rotx", in_FreezeScaling and not l_RootIsParent
			CopyLTLimit  l_OrigLT, l_CopyLT, "roty", in_FreezeScaling and not l_RootIsParent
			CopyLTLimit  l_OrigLT, l_CopyLT, "rotz", false 
		
'		else
'			logmessage "not checking for limits. Has limits: " & in_ArrayHasRotLimit(l_Index) 
		end if

		l_Index = l_Index + 1

	next 

end sub

'
' helper for the above sub
'
Sub CopyLTLimit( in_OrigLT, in_CopyLT, in_Name, in_bInvert)

	dim l_OrigLTParams, l_CopyLTParams
	set l_OrigLTParams = in_OrigLT.Parameters
	set l_CopyLTParams = in_CopyLT.Parameters

	'
	' max/min are switched and negated
	'
	if in_bInvert then 
		if  l_OrigLTParams( in_Name & "minactive" ).value then
			l_CopyLTParams( in_Name & "maxactive" ).value = true
			' this param is new so it won't be in the collection, must set it via the LT
			call SetValue( in_CopyLT & "." & in_Name & "maxlimit",  - l_OrigLTParams( in_Name & "minlimit" ).value )
		end if

		if  l_OrigLTParams( in_Name & "maxactive" ).value then
			l_CopyLTParams( in_Name & "minactive" ).value = true
			' this param is new so it won't be in the collection, must set it via the LT
			call SetValue( in_CopyLT & "." &  in_Name & "minlimit",   - l_OrigLTParams( in_Name & "maxlimit" ).value )
		end if
	'
	' otherwise just copy values
	'
	else
		if  l_OrigLTParams( in_Name & "minactive" ).value then
			l_CopyLTParams( in_Name & "minactive" ).value = true
			' this param is new so it won't be in the collection, must set it via the LT
			call SetValue( in_CopyLT & "." & in_Name & "minlimit", l_OrigLTParams( in_Name & "minlimit" ).value )
		end if

		if  l_OrigLTParams( in_Name & "maxactive" ).value then
			l_CopyLTParams( in_Name & "maxactive" ).value = true
			' this param is new so it won't be in the collection, must set it via the LT
			call SetValue( in_CopyLT & "." &  in_Name & "maxlimit", l_OrigLTParams( in_Name & "maxlimit" ).value )
		end if
	end if 

end sub


'******************************************************************************
' Craig Instance Commands
'******************************************************************************

'------------------------------------------------------------------------------
' NAME:		InstanceProc
'
' INPUT:	See DuplicateProc for details
'
' DESCRIPTION: Instance objects
'
' Only difference between a duplicate and an instance is that an instance has no
' construction history (i.e. frozen) and its geometry a copy from the source object
'
' INPUT:	in_InputObjs	source objects to duplicate
'			in_NbItems		number of duplicates of each object required.
'			in_Grouping		How to group duplicated object
'			in_Selection	How to change selection i.e. select duplicates or source
'			in_Placement	How to transform duplicates
'			in_Sx			Transform values.
'			in_Sy			-
'			in_Sz			-
'			in_Rx			-
'			in_Ry			-
'			in_Rz			-
'			in_Tx			-
'			in_Ty			-
'			in_Tz			-
'			in_TrackXform	- enable/disable tracking of duplicated object(s)
'			out_Value		list of duplicated objects
'------------------------------------------------------------------------------
function InstanceProc(  in_InputObjs, _
						in_NbItems, _
						in_Hierarchy, _
						in_Grouping, _
						in_Selection,  _
						in_Placement, _
						in_Sx, in_Sy, in_Sz,  _
						in_Rx, in_Ry, in_Rz,  _
						in_Tx, in_Ty, in_Tz,  _
						in_TrackXform _
)			

	Dim l_Obj, l_Objects, l_DupList, l_Unused, l_Title
	Dim l_History, l_Properties, l_Animation, l_Constraint
	l_History = 0
	l_Properties = 0
	l_Animation = 0
	l_Constraint = 0

	set InstanceProc = Nothing
	if DiagnosticsEnabled then
		logmessage "InstanceProc"
		logmessage "	input objects: " & in_InputObjs
		logmessage "	in_NbItems: " & in_NbItems
		logmessage "	in_Hierarchy " & in_Hierarchy
		logmessage "	in_Grouping " & in_Grouping
		logmessage "	in_Selection " & in_Selection
		logmessage "	in_Placement " & in_Placement
		logmessage "	scale (" & in_Sx & ", " & in_Sy & ", " & in_Sz & ")"
		logmessage "	rot (" & in_Rx & ", " & in_Ry & ", " & in_Rz & ")"
		logmessage "	trans (" & in_Tx & ", " & in_Ty & ", " & in_Tz & ")"
		logmessage "	in_TrackXform" & in_TrackXform
	end if
	' -----------------------------------------
	' Validate inputs
	' -----------------------------------------
	If Instance_ValidatorProc( in_InputObjs, l_Objects ) = False then
		l_Title = XSIUtils.Translate( IDS_INSTANCE_ERROR_MSG, "XSISCRIPTS" )
		SIMsgBox l_Title, vbOKOnly + vbInformation, XSIUtils.Translate( IDS_INSTANCE_SINGLE_ERROR_TITLE, "XSISCRIPTS" ), vbOK
		Err.Raise siErrCancelled
	end if 

	if CInt(in_NbItems) = 0 Then
		Err.Raise siErrCancelled
	end if

	' -----------------------------------------
	' Get instance options
	' -----------------------------------------
	call GetDuplicateOptions( l_Unused, _
							  in_Hierarchy, _
							  in_Grouping, _
							  l_Properties, _
							  l_Animation, _
							  l_Constraint, _
							  in_Selection, _
							  in_Placement, _
							  in_Sx, in_Sy, in_Sz, _
							  in_Rx, in_Ry, in_Rz, _
							  in_Tx, in_Ty, in_Tz, _
							  in_TrackXform, _
							  l_Unused )

	' -----------------------------------------
	' instanciate the input objects.
	' -----------------------------------------
	set InstanceProc = FDuplicateObjects(   l_Objects, _
											in_NbItems, _
											siInstanceFlag, _
											siCurrentHistory, _
											in_Hierarchy, _
											in_Grouping, _
											l_Properties, _
											l_Animation, _
											l_Constraint, _
											in_Selection, _
											in_Placement, _
											in_Sx, in_Sy, in_Sz, _
											in_Rx, in_Ry, in_Rz, _
											in_Tx, in_Ty, in_Tz, _
											siDuplicateSelectedTextureSupports )			

	If  TypeName(InstanceProc) = "Nothing" Then
		Exit function
	End If

	' -----------------------------------------
	' Handle post-duplicate options
	' -----------------------------------------

	call PostDuplicateProcessing( InstanceProc, _
								  -1, _
								  in_Grouping, _
								  l_Properties, _
								  l_Animation, _
								  l_Constraint, _
								  in_Selection, _
								  in_TrackXform )			

end function


'------------------------------------------------------------------------------
' NAME:		InstanceWizardProc
'
' INPUT:	io_InputObjs		list of duplicated objects
'
' DESCRIPTION: Instance objects using a wizard
'------------------------------------------------------------------------------
function InstanceWizardProc( _
	byref io_InputObjs, _
	byref io_NbItems, _
	byref io_Hierarchy, _
	byref io_Grouping, _
	byref io_Selection, _
	byref io_Placement, _
	byref io_Sx, byref io_Sy, byref io_Sz, _
	byref io_Rx, byref io_Ry, byref io_Rz, _
	byref io_Tx, byref io_Ty, byref io_Tz, _
	byref io_TrackXform _
)			
	Dim l_ReturnCode, l_ValidObjects, l_Title, l_CustomParam

	' Make sure we have something 
	If Not io_InputObjs.Count > 0 then
		SIMsgBox XSIUtils.Translate( IDS_NEED_SELECT_OBJECT_ERROR_MSG, "XSISCRIPTS" ), vbOKOnly + vbInformation, XSIUtils.Translate( IDS_DUPULICATE_MULTI_TITLE, "XSISCRIPTS" ), vbOK
		
		Err.Raise siErrCancelled
	end if 

	' validate input objects (only geometry objects)

	If Instance_ValidatorProc( io_InputObjs, l_ValidObjects ) = False then
		l_Title = XSIUtils.Translate( IDS_INSTANCE_ERROR_MSG, "XSISCRIPTS" )
		SIMsgBox l_Title, vbOKOnly + vbInformation, XSIUtils.Translate( IDS_INSTANCE_MULTI_ERROR_TITLE, "XSISCRIPTS" ), vbOK
		Err.Raise siErrCancelled
	end if 
	
	set io_InputObjs = l_ValidObjects

	l_CustomParam = "Scene_Root.InstanceMultiple"

	' create a custom duplicate wizard propery
	SIAddProp "Custom_parameter_list", "Scene_Root", , "InstanceMultiple"
	SIAddCustomParameter l_CustomParam, _
		"Copies", 2,2,1,1000, 8, siSilent Or siPersistable, 1, 10, "Instances", "Number of Instances"

	' Launch the ppg in modal mode, wait for Ok or Cancel to be pressed
	l_ReturnCode = FWizardDialog(l_CustomParam & ",Preferences.Duplicate", XSIUtils.Translate( IDS_INSTANCE_MULTI_ERROR_TITLE, "XSISCRIPTS" ))

	' If the user has pressed ok, proceed
	if l_ReturnCode = vbOk then

		io_NbItems = GetValue ( l_CustomParam & ".Copies" )

		'Call the normal duplicate command
		set InstanceWizardProc = InstanceProc ( io_InputObjs, _
												io_NbItems, _
												io_Hierarchy, _
												io_Grouping, _
												io_Selection, _
												io_Placement, _
												io_Sx, io_Sy, io_Sz, _
												io_Rx, io_Ry, io_Rz, _
												io_Tx, io_Ty, io_Tz, _
												io_TrackXform )

		' Cleanup wizard property
		DeleteObj "Scene_Root.InstanceMultiple"

	Else
		' Cleanup wizard property
		DeleteObj "Scene_Root.InstanceMultiple"

		set InstanceWizardProc = Nothing
		Err.Raise siErrCancelled
	End If

end function


'------------------------------------------------------------------------------
' NAME:		Instance_ValidatorProc
'
' INPUT:	in_InputObjs		
' OUTPUT:	validated objects
'
' RETURN:	True is objects valid
'
' DESCRIPTION: filter input list by objects that can be instanced
'------------------------------------------------------------------------------
function Instance_ValidatorProc(in_InputObjs, ByRef out_ValidatedObjs)
	Dim l_NbItems, l_Objects, l_Item, l_Items, l_Parent
	if DiagnosticsEnabled then
		logmessage "Instance_ValidatorProc"
		logmessage "	input objects: " & in_InputObjs
	end if

	Instance_ValidatorProc = False
	set out_ValidatedObjs = Nothing

	if TypeName(in_InputObjs) = "Nothing" Then
		exit function
	end if

	' validate input objects (only objects, groups, properties and clusters)
	set l_Objects = SIFilter( in_InputObjs, siInstanceFilter,TRUE,siSearchFamilies )

	if TypeName(l_Objects) = "Nothing" Then
		exit function
	end if

	' -----------------------------------------
	' Return filtered objects
	' -----------------------------------------

	if l_Objects.Count <> 0 then
		Instance_ValidatorProc = True
		set out_ValidatedObjs = l_Objects
	end if

	if DiagnosticsEnabled then
		logmessage "	filtered objects: " & out_ValidatedObjs
	end if

end function



