'******************************************************************************
'
' File supervisor : Alain Dessureaux
' Date : nov 98
' (c) Copyright 1998 Softimage
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

' DEVNOTE: remove comment to force all variables to be declared.
'Option Explicit

'******************************************************************************
' DEBUGGING
'******************************************************************************

' DEVNOTE: remove comment to force a break point when script loaded.
'stop


'******************************************************************************
' String Constants (used to translate)
'******************************************************************************
const IDS_CYCLE_IN_DEPENDENCIES			= 1005
const IDS_EDIT_SHARED_PROPERITES		= 1006
const IDS_CLUSTERS_OVERLAP				= 1007
const IDS_SHAPE_AUTHORING				= 1008
const IDS_DELETE_SOURCES_CLIPS			= 1009
const IDS_PLOT_DELETE_CONSTRAINT		= 1010
const IDS_START_CAPTURE					= 1011
const IDS_SELECT_MORE_OBJECTS			= 1012
const IDS_SELECT_TWO_OBJECTS			= 1013
const IDS_SELECT_OBJ_AND_COMPONENTS		= 1014
const IDS_OVERWRITE_ANIMATED_PROPS		= 1015
const IDS_ASSIGN_MATERIAL_PICK_MSG		= 1158
const IDS_MATCH_POSE_MSG				= 1159
const IDS_PICK_OBJECT_MSG_L				= 1160
const IDS_PICK_OBJECT_MSG_M				= 1161
const IDS_PRESET_DOES_NOT_APPLY			= 1195
const IDS_PRESET_DOES_NOT_APPLY_TITLE	= 1196
const IDS_NO_VALID_OBJECTS_FOR_CLSPROP	= 1198
const IDS_NO_EDGES_TO_SPIN				= 1480
const IDS_CREATE_GROUP_INVALID_PARENT_ARG = 10000
const IDS_MIN_MAX_RANGE_INVALID			= 10001
const IDS_MIN_MAX_UIRANGE_INVALID		= 10002

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
		l_HelpFilePath = application.InstallationPath(siHelpPath) & "/" & in_helpfile	
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
	InspectObj in_customparam, , XSIUtils.Translate(in_title, "XSISCRIPTS" ), siModal

	if Err.Number <> 0 then
		FWizardDialog = vbCancel
	else
		FWizardDialog = vbOk
	end if
end function

'------------------------------------------------------------------------------
' NAME:		FConfirmTitle
'
' INPUT:	in_ConfirmWhat					- e.g. "Get Material"
' OUTPUT:	standard confirmation title
'
' DESCRIPTION: generate confirm title e.g. "Confirm Get Material".
'------------------------------------------------------------------------------
function FConfirmTitle( in_ConfirmWhat )
	Dim l_strConfirmTitle

	l_strConfirmTitle = XSIUtils.Translate( "Confirm " & in_ConfirmWhat, "XSISCRIPTS" )
	FConfirmTitle = l_strConfirmTitle
end function

'------------------------------------------------------------------------------
' NAME:		FConfirmPrompt
'
' INPUT:	in_PromptWhat	- e.g. "You are about to delete a shared property"
' OUTPUT:	standard confirmation prompt
'
' DESCRIPTION: generate confirm prompt e.g. 
' "You are about to delete a shared property. Do you want to continue?".
'------------------------------------------------------------------------------
function FConfirmPrompt( in_PromptWhat )
	Dim l_PromptWhat, l_strContinue

	l_PromptWhat = XSIUtils.Translate( in_PromptWhat, "XSISCRIPTS" )
	l_strContinue = XSIUtils.Translate( " Do you want to continue?", "XSISCRIPTS" )
	FConfirmPrompt = l_PromptWhat & l_strContinue
end function

'------------------------------------------------------------------------------
' NAME:		FBranchFlag2PropagationType
'
' INPUT:	in_BranchFlag
' OUTPUT:	siPropagationType
'
' DESCRIPTION: convert branch flag to propagation type.
'------------------------------------------------------------------------------
function FBranchFlag2PropagationType( in_BranchFlag )
	Select Case in_BranchFlag
		Case siNode		FBranchFlag2PropagationType = siNodePropagation
		Case siBranch	FBranchFlag2PropagationType = siBranchPropagation
		Case Else		FBranchFlag2PropagationType = siDefaultPropagation
	End Select
end function

'------------------------------------------------------------------------------
' NAME:		FPropagationType2BranchFlag
'
' INPUT:	in_PropagationType
' OUTPUT:	siBranchFlag
'
' DESCRIPTION: convert propagation type to branch flag.
'------------------------------------------------------------------------------
function FPropagationType2BranchFlag( in_PropagationType )
	Select Case in_PropagationType
		Case siNodePropagation		FPropagationType2BranchFlag = siNode
		Case siBranchPropagation	FPropagationType2BranchFlag = siBranch
		Case Else					FPropagationType2BranchFlag = siUnspecified
	End Select
end function

'------------------------------------------------------------------------------
' NAME:		FBelongsToFamily
'
' INPUT:	- in_obj				object to test
'			- in_family			family to match
'
' OUTPUT:	- collection of properties
'
' DESCRIPTION: Return True if object belongs to family properties
'------------------------------------------------------------------------------
function FBelongsToFamily( in_obj, in_family )
	if in_family = siShaderFilter  then 
	    FBelongsToFamily = in_obj.IsClassOf( siShaderID )
	else
	    FBelongsToFamily = (InStr( 1 , in_obj.Families,  in_family, vbTextCompare )> 0)
	end if
end function

'------------------------------------------------------------------------------
' NAME:		FCompareType
'
' INPUT:	- in_obj				object to test
'			- in_type			type to compare
'
' OUTPUT:	- Return True is object is of same type.
'
' DESCRIPTION: Return True is object is of same type.
'------------------------------------------------------------------------------
function FCompareType( in_obj, in_type )
	FCompareType = _
		(StrComp(in_obj.Type, in_type, vbTextCompare) = 0 )
end function

'------------------------------------------------------------------------------
' NAME:		FGetProperties
'
' INPUT:	- in_objs				object with properties
'			- in_branchflag			branch or node properties?
'
' OUTPUT:	- collection of properties
'
' DESCRIPTION: Return object properties
'------------------------------------------------------------------------------
Function FGetProperties( in_obj, in_branchflag )

	Dim l_PropList, l_BranchFlag, l_NodeLocal, l_BranchLocal

	if in_branchflag = siUnspecified then
		l_BranchFlag = in_obj.BranchFlag
	else
		l_BranchFlag = in_branchflag
	end if

	set FGetProperties = Nothing

	' the enumelements might fail.
	On Error Resume Next

	' @devnote need to standardize on where we put local properties
	if FBelongsToFamily(in_obj,"Clusters")  then
		set FGetProperties = EnumElements( in_obj & ".localprops" )
	elseif in_obj.Type = "#Group" Or in_obj.Type = "Partition" Or in_obj.Type = "Layer" then
		set FGetProperties = EnumElements( in_obj & ".CurrentProperties" )
	elseif in_obj.Type = "Pass" Or in_obj.Type = "Passes" then
		set FGetProperties = EnumElements( in_obj & ".CurrentProps" )
	elseif in_obj.Type = "ICEProperty" then
		set FGetProperties = EnumElements( in_obj & ".children" )
	else
		if l_BranchFlag = siNode then
			set l_NodeLocal = Dictionary.GetObject( in_obj & ".nodelocal", false )
			if Not TypeName( l_NodeLocal ) = "Nothing" then
				set FGetProperties = EnumElements( l_NodeLocal )
			end if
		else
			set l_BranchLocal = Dictionary.GetObject( in_obj & ".branchlocal", false )
			if Not TypeName( l_BranchLocal ) = "Nothing" then
				set FGetProperties = EnumElements( l_BranchLocal )
			end if
		end if
	end if

End Function

'------------------------------------------------------------------------------
' NAME:		FHasProp
'
' INPUT:	- in_objs				object with properties
'			- in_type				property type
'			- in_branchflag			property on branch or node?
'
' OUTPUT:	- True/False 
'
' DESCRIPTION: Return True if object has local property of in_type
'------------------------------------------------------------------------------
Function FHasProp( in_obj, in_type, in_branchflag )

	Dim l_Prop, l_PropList

	set l_PropList = FGetProperties( in_obj, in_branchflag )

	' check node local properties
	if Not TypeName(l_PropList) = "Nothing" then
		for each l_Prop in l_PropList
			if FCompareType(l_Prop, in_type) then
				FHasProp = True
				Exit Function
			end if
		next 
	end if

	
	FHasProp = False

End Function

'------------------------------------------------------------------------------
' NAME:		FHasAnimatedProp
'
' INPUT:	- in_objs				list of objects with properties
'			- in_type				property type
'			- in_branchflag			property on branch or node?
'
' OUTPUT:	- True/False 
'
' DESCRIPTION: Return True if one of the input objects has a property of 
' in_type which is animated
'------------------------------------------------------------------------------
Function FHasAnimatedProp( in_objs, in_type, in_branchflag )
	Dim l_obj, l_prop, l_proplist, l_srclist

	for each l_obj in in_objs

		set l_proplist = FGetProperties( l_obj, in_branchflag )

		' check node local properties
		if Not TypeName(l_proplist) = "Nothing" then

			for each l_prop in l_proplist

				if FCompareType(l_prop, in_type) then

					if IsAnimated( l_prop ) Then

						FHasAnimatedProp = true
						Exit Function

					end if					
				end if
			next 
		end if
	next

	FHasAnimatedProp = false

End Function
		
'------------------------------------------------------------------------------
' NAME:		FFindProp
'
' INPUT:	- in_objs			object with properties
'			- in_type			property type
'			- in_branchflag			property on branch or node?
'
' OUTPUT:	- Collection of matching properties
'
' DESCRIPTION: Return list of all properties of given type.
'------------------------------------------------------------------------------
Function FFindProp( in_obj, in_type, in_branchflag )

	Dim l_Prop, l_PropList

	set FFindProp = Nothing

	set l_PropList = FGetProperties( in_obj, in_branchflag )

	' check node local properties
	if Not TypeName(l_PropList) = "Nothing" then
		for each l_Prop in l_PropList
			if FCompareType(l_Prop, in_type) then
				if TypeName(FFindProp) = "Nothing" then
					set FFindProp = CreateObject("XSI.Collection")
				end if
				FFindProp.Add l_Prop
			end if
		next 
	end if

End Function

'------------------------------------------------------------------------------
' NAME:		FAddProp
'
' INPUT:	- in_preset			property preset
'			- io_objs			objects to add properties to
'			- in_propagation
'			- in_propname
'
' OUTPUT:	- out_createdobjs	Created properties
'
' DESCRIPTION: Add property to objects. If object is a tagcluster replace
'			   it by a real cluster. 
'------------------------------------------------------------------------------
Function FAddProp (in_preset, byref io_objs, in_propagation, in_propname, _
	byref out_createdclusters, _
	byref out_subcomponents )

	Dim l_PropList, l_ObjList

	'--------------------------------------------------------------------
	' replace all subcomponents with clusters
	'--------------------------------------------------------------------
	set l_ObjList = FSubComponents2Clusters( io_objs, false, out_createdclusters, out_subcomponents )
	
	if Not TypeName (l_ObjList) = "Nothing" then
		'--------------------------------------------------------------------
		' add new property
		'--------------------------------------------------------------------
		set l_PropList = SIAddProp(in_preset,l_ObjList,in_propagation,in_propname).value("Value")
	else
		set l_PropList = Nothing
	end if

	set io_objs = l_ObjList
	set FAddProp = l_PropList

end function

'------------------------------------------------------------------------------
' NAME:		FGetParentObj
'
' INPUT:	- in_obj			a 3d object
'
' DESCRIPTION: Returns the parent object of the given 3d object
'				THIS FUNCTION IS TEMPORARY, UNTIL WE HAVE THE PROPER METHOD
'				THAT WILL BE IMPLEMENTED WITH THE NEW OBJECT MODEL IN V1.1 
'------------------------------------------------------------------------------
Function FGetParentObj( in_obj )
	Dim l_owners, l_parent

	set FGetParentObj = Nothing
	
	' If we receive a child 3d object, the 1st enum will
	' get us to the list of items that point to that 3d object...
	set l_owners =  EnumElements( in_obj, FALSE )
	if IsEmpty(l_owners) Or TypeName(l_owners) = "Nothing" Then
		exit function
	end if

	' ..the first of which will be the 'Children' component (ex: cube.Children)
	set l_parent =  EnumElements( l_owners(0), FALSE )

	' Protection for when we reach the Scene_Root (parent will be Project)
	if l_parent = "Project" then
		set FGetParentObj = in_obj
		exit function
	end if

	set FGetParentObj = l_parent
end function

'------------------------------------------------------------------------------
' NAME:		FGetChildrenObj
'
' INPUT:	- in_obj			a 3d object
'			- in_firstonly		return the first child only or all of them
'
' DESCRIPTION: Returns the first children object of the given 3d object
'				THIS FUNCTION IS TEMPORARY, UNTIL WE HAVE THE PROPER METHOD
'				THAT WILL BE IMPLEMENTED WITH THE NEW OBJECT MODEL IN V1.1 
'------------------------------------------------------------------------------
Function FGetChildrenObj( in_obj, in_firstonly )
	Dim l_ChildrenNodes

	set FGetChildrenObj = Nothing

	if IsEmpty(in_obj) Or TypeName(in_obj) = "Nothing" Then
		exit function
	end if
	 
	set l_ChildrenNodes = EnumElements( in_obj & ".Children" )
	
	if IsEmpty(l_ChildrenNodes) Or TypeName(l_ChildrenNodes) = "Nothing" Then
		set FGetChildrenObj = in_obj
		exit function
	end if

	if ( in_firstonly ) then	
		set FGetChildrenObj = l_ChildrenNodes(0)
	else
		set FGetChildrenObj = l_ChildrenNodes
	end if
end function


'------------------------------------------------------------------------------
' NAME:		FSubComponents2Clusters
'
' INPUT:	- in_objs				' list of objects
'			- out_createdobjs		' list of created clusters
'			- out_subcomps		' list of subcomponents
'
' OUTPUT:	- updated list of objects i.e. minus subcomponents
'
' DESCRIPTION: Replace all subcomponents (i.e. tagclusters) with clusters and remove
'				subcomponents from selection.
'------------------------------------------------------------------------------
Function FSubComponents2Clusters( in_objs, in_bConnectWithTag, byref out_createdclusters, byref out_subcomps )
	Dim l_ObjList

	set FSubComponents2Clusters = Nothing

	'--------------------------------------------------------------------
	' List of all tagclusters
	'--------------------------------------------------------------------
	set out_subcomps = SIFilter(in_objs,siSubComponentFilter)

	'--------------------------------------------------------------------
	' List of all non-tagclusters
	'--------------------------------------------------------------------
	set l_ObjList = SIFilter(in_objs,siSubComponentFilter,FALSE)

	'--------------------------------------------------------------------
	' Create real clusters to replace tagclusters
	'--------------------------------------------------------------------
	If TypeName (out_subcomps) <> "Nothing" then
		set out_createdclusters = CreateClusterFromSubComponent( out_subcomps, , in_bConnectWithTag )

		If TypeName(l_ObjList) = "Nothing" then
			set FSubComponents2Clusters = out_createdclusters
		Else
			set FSubComponents2Clusters = l_ObjList
			FSubComponents2Clusters.AddItems out_createdclusters
		End If
	Else
		set FSubComponents2Clusters = l_ObjList
	End If

End Function


'------------------------------------------------------------------------------
' NAME:		FAutoInspectEnabled		
'
' INPUT:	--
'
' DESCRIPTION: Return TRUE if autoinspect enabled.
'				
'------------------------------------------------------------------------------
Function FAutoInspectEnabled()
	Dim l_Shift, l_bEnabled, l_bScriptingSessionActive, l_bCTRLDown, l_bShiftDown, l_bCtrlAltContextMenu

	l_bScriptingSessionActive = CBool(GetUserPref( "ScriptingSessionActive" ))

	if l_bScriptingSessionActive then
		FAutoInspectEnabled = False
		exit function
	end if

	' #101408 - X3D : More things to disable from XSI
	if application.license = "Avid 3D" then
		FAutoInspectEnabled = False
		exit function
	end if

	l_bEnabled = CBool(GetUserPref( siAutoInspect ))

	' Get the CTRL key state
	'
	GetKeyboardState , l_Shift
	l_bCTRLDown = CBool( CByte( l_Shift ) And CByte(siCtrlMask) )
	l_bShiftDown = CBool( CByte( l_Shift ) And CByte(siShiftMask) )
	l_bCtrlAltContextMenu = CBool( GetUserPref("control_alt_context_menu") )
	l_bCTRLDown = l_bCTRLDown And Not l_bShiftDown And Not l_bCtrlAltContextMenu

	' If the autoinspection is enabled, CTRL disable it.  If autoinspection is disabled, CTRL enable it.
	'
	if l_bEnabled then
		FAutoInspectEnabled = Not l_bCTRLDown
	else
		FAutoInspectEnabled = l_bCTRLDown
	end if

End Function

'------------------------------------------------------------------------------
' NAME:		FGetAnimatedObjects
'
' INPUT:	- in_InputObjs
'			- in_SourceMask		fcurve or expressions
'
' OUTPUT:	- List of animated objects
'
' DESCRIPTION: Return list of animation objects by type
'------------------------------------------------------------------------------
Function FGetAnimatedObjects (in_InputObjs, in_SourceMask )

	Dim rtn, l_Child, l_Sources

	set FGetAnimatedObjects = Nothing

	if Not IsObject(in_InputObjs) Then
		exit Function
	end if

	if in_InputObjs.Count = 0 Then
		exit Function
	end if

	for each l_Child in in_InputObjs

		' get animation source on child
		set l_Sources = GetSource(l_Child,in_SourceMask)
			
		if not TypeName(l_Sources) = "Nothing" Then
			if TypeName(FGetAnimatedObjects) = "Nothing" Then
				set FGetAnimatedObjects = CreateObject("XSI.Collection")
			end if

			FGetAnimatedObjects.add l_Child
		end if 
	next

end function

'------------------------------------------------------------------------------
' NAME:		FFindMaterial
'
' INPUT:	- in_obj				find material from shader
'
' OUTPUT:	- material
'
' DEVNOTE	This function may now get a parameter as the input obj where it never
'			would before.  Thus if we do get a parameter, then get its parent
'			and process it.
'
' DESCRIPTION: Return material property
'------------------------------------------------------------------------------
Function FFindMaterial( in_obj )
	Dim MyIndex, MyCountPathItems, l_obj

	set FFindMaterial = Nothing

	if typename(in_obj) = "Parameter" then
		set l_obj = in_obj.parent
	else
		set l_obj = in_obj
	end if 

	if FBelongsToFamily( l_obj, siShaderFilter ) then
		MyIndex = 0
		MyCountPathItems	= l_obj.PathItems.Count

		for MyIndex=0 to MyCountPathItems - 1
			if FCompareType(l_obj.PathItems(MyIndex), "Material") then
				set FFindMaterial = l_obj.PathItems(MyIndex)
				exit function
			end if 
		next

	end if
End Function

'------------------------------------------------------------------------------
' NAME:		FIsSharedProperty
'
' INPUT:	- in_prop
'
' DEVNOTE	This function may now get a parameter as the input property where it
'			never would before.  Thus if we do get a parameter, then get its
'			parent and process it.
'
' RETURN:	- Boolean
'
' DESCRIPTION: Return True if property shared
'------------------------------------------------------------------------------
Function FIsSharedProperty( in_prop )
	Dim l_prop

	FIsSharedProperty = False

	if typename(in_prop) = "Parameter" then
		set l_prop = in_prop.parent
	else
		set l_prop = in_prop
	end if

	if l_prop.IsA(siSharedPSet) then
		Dim l_Owner, l_Parent

		FIsSharedProperty = True

		set l_Owner = FGetOwner( l_prop )

		if l_prop.PathItems.Count = 0 then
			logmessage "FIsSharedProperty: warning cannot determine if object " & in_promptnouns(0) & " can from a group or belongs to a group", 4
			set l_Parent = l_Owner
		else
			set l_Parent = l_prop.PathItems(0)
		end if

		if FCompareType(l_Owner, "#Group") And Not FCompareType(l_Parent, "#Group") then
			if FHasProp( l_Parent, l_prop.Type, siBranch ) = True Or FHasProp( l_Parent, l_prop.Type, siNode ) then
				FIsSharedProperty = False
			elseif FCompareType(l_Parent, "#Group") then
				FIsSharedProperty = False
			end if
		end if
		
		' 
		' If we are a material from the mat lib, we are NOT shared...
		'
		if FCompareType(in_prop,"material") then
			if FCompareType(in_prop.Parent,"library_source") then
				FIsSharedProperty = False
			else
				FIsSharedProperty = True
			end if
		end if
	end if 

end Function

'------------------------------------------------------------------------------
' NAME:		FGetSharedProperties
'
' INPUT:	- in_props				
'
' OUTPUT:	- either original list or list of new unshared objects
'
' DESCRIPTION: Return list of unshared properties
'------------------------------------------------------------------------------
Function FGetSharedProperties( in_props )

	Dim l_Prop
	
	set FGetSharedProperties = Nothing

	'
	' Check that shared properties are not coming from a 
	' group and overriding an existing local branch property.
	'
	'
	' exclude group properties because they appear as shared properties
	'
	for each l_Prop in in_props
		if FIsSharedProperty(l_Prop) then
			if TypeName(FGetSharedProperties) = "Nothing" then
				set FGetSharedProperties = CreateObject("XSI.Collection")
			end if
			FGetSharedProperties.Add l_Prop	
		end if
	next

End Function

'------------------------------------------------------------------------------
' NAME:		FGetSharedObjects
'
' INPUT:	- in_objs				
'
' OUTPUT:	- shared objects
'
' RETURN:	- root shared objects
'
' DESCRIPTION: Return collection of shared objects
'------------------------------------------------------------------------------
Function FGetSharedObjects( in_InputObjs, byref out_NestedSharedObjs, byref out_RootSharedObjs )
	
	Dim l_PropertyList, l_SharedList

	set FGetSharedObjects = Nothing

	if TypeName(out_RootSharedObjs) = "Empty" then
		set out_RootSharedObjs = Nothing
	end if
	if TypeName(out_NestedSharedObjs) = "Empty" then
		set out_NestedSharedObjs = Nothing
	end if
	'
	' handle unsharing general properties (including materials)
	'
	set l_PropertyList = SIFilter(in_InputObjs,siPropertyFilter)

	if TypeName( l_PropertyList ) <> "Nothing" then 

		set l_SharedList = FGetSharedProperties( l_PropertyList )

		if TypeName(l_SharedList) <> "Nothing" then
			if TypeName(FGetSharedObjects) <> "Nothing" then
				FGetSharedObjects.AddItems l_SharedList 
			else
				set FGetSharedObjects = l_SharedList
			end if
		end if
	end if

	'
	' handle unsharing nested object i.e. shaders 
	'
	Dim l_ShaderList

	set l_ShaderList = SIFilter(in_InputObjs,siShaderFilter,,siSearchFamilies)

	if TypeName( l_ShaderList ) <> "Nothing" then 
		Dim l_Material, l_Shader

		for each l_Shader in l_ShaderList
			set l_Material = FFindMaterial( l_Shader )

			if TypeName(l_Material) <> "Nothing" then
				if  FIsSharedProperty(l_Material) then
					if TypeName(out_RootSharedObjs) = "Nothing" then
						set out_RootSharedObjs = CreateObject("XSI.Collection")
					end if
					out_RootSharedObjs.Add l_Material 
					if TypeName(out_NestedSharedObjs) = "Nothing" then
						set out_NestedSharedObjs = CreateObject("XSI.Collection")
					end if
					out_NestedSharedObjs.Add l_Shader 
				end if
			end if
		next
	end if

End Function

'------------------------------------------------------------------------------
' NAME:		FGetOwner
'
' INPUT:	- in_obj				
'
' OUTPUT:	- owner
'
' DESCRIPTION: Add list of item to add to object list
'------------------------------------------------------------------------------
Function FGetOwner( in_obj )
	Dim l_Cont

	set l_Cont = EnumElements( in_obj, FALSE )(0)
	set FGetOwner = EnumElements( l_Cont, FALSE )(0)

End Function

'------------------------------------------------------------------------------
' NAME:		FGetSubComponentGeometry
'
' INPUT:	- in_subcomponent				
'
' OUTPUT:	- geometry
'
' DESCRIPTION: Get geometry object for subcomponent
'------------------------------------------------------------------------------
Function FGetSubComponentGeometry( in_subcomponent )

	set FGetSubComponentGeometry = Nothing
	
	if InStr( 1, in_subcomponent.Type, "SubComponent", vbTextCompare ) > 0 then
		Dim l_SumCompPath, l_SumCompPathPos

		' determine geometry type
		l_SumCompPath = in_subcomponent.Value	
		l_SumCompPathPos = InStrRev( l_SumCompPath, ".", Len(l_SumCompPath), vbTextCompare )

		set FGetSubComponentGeometry = CreateObject("XSI.CollectionItem")
		FGetSubComponentGeometry.value = Left( l_SumCompPath, l_SumCompPathPos-1 )
	end if

End Function


'------------------------------------------------------------------------------
' NAME:		FConfirmMakeLocal		
'
' INOUT:	io_InputObjs		: replace shared objects with local copies
' INPUT:	in_PropagationType
'			in_Prompt
'
' DESCRIPTION: Confirm and make local copies of shared objects. 
'				
'------------------------------------------------------------------------------
function FConfirmMakeLocal (io_Inputobjs, in_PropagationType, in_Prompt)

	Dim l_SharedObjs, l_NestedSharedObjs, l_RootSharedObjs

	set FConfirmMakeLocal = Nothing

	set l_SharedObjs = FGetSharedObjects(io_Inputobjs, l_NestedSharedObjs,l_RootSharedObjs)
	
	if TypeName(l_SharedObjs) <> "Nothing" or TypeName(l_NestedSharedObjs) <> "Nothing" then
		Dim l_Title, l_Prompt

		l_Title = FConfirmTitle("Make Local")

		if SIMsgBox(in_Prompt, (vbYesNo + vbQuestion), l_Title, vbYes) = vbYes then

			set FConfirmMakeLocal = MakeLocal(io_Inputobjs, in_PropagationType )
			
			'
			' replace the shared properties in the input argument with the 
			' local copies.
			'
			if TypeName(l_SharedObjs) <> "Nothing" then
				io_Inputobjs.RemoveItems l_SharedObjs
			end if
			if TypeName(l_NestedSharedObjs) <> "Nothing" then
				io_Inputobjs.RemoveItems l_NestedSharedObjs
			end if 
			io_Inputobjs.AddItems FConfirmMakeLocal
		end if
	end if


end function


'******************************************************************************
' HELPER SUBROUTINES
'******************************************************************************

'******************************************************************************
' SHADERS SUBROUTINES
'******************************************************************************

'------------------------------------------------------------------------------
' NAME:			ApplyShader
' INPUT:		The objects to connect the shader to
' DESCRIPTION:	Assign a shader to objects.
'------------------------------------------------------------------------------
sub ApplyShader( in_ShaderPreset, in_objs, in_Name, in_ConnectType )
	Dim l_Shader, l_ObjList, l_ClusterList, l_SubCompList

	'--------------------------------------------------------------------
	' delete all existing material properties
	'--------------------------------------------------------------------

	RemovePropertiesProc in_objs, "material", in_ConnectType

	'--------------------------------------------------------------------
	' Convert subcomponents to clusters.
	'--------------------------------------------------------------------

	' maybe one day we should have the new cluster connected with the tag !
	set l_ObjList = FSubComponents2Clusters( in_objs, false, l_ClusterList, l_SubCompList )

	'--------------------------------------------------------------------
	' Apply the shader
	'--------------------------------------------------------------------
	if Not TypeName (l_ObjList) = "Nothing" then
		set l_Shader = SIApplyShader( in_ShaderPreset, l_ObjList, in_Name, in_ConnectType )

		'--------------------------------------------------------------------
		' add created clusters to selection (in place of tagclusters)
		'--------------------------------------------------------------------
		if Not IsEmpty (l_ClusterList) Then
			RemoveFromSelection (l_SubCompList)
			AddToSelection (l_ClusterList)
		end if

		'--------------------------------------------------------------------
		' Inspect the shader
		'--------------------------------------------------------------------
		if Not TypeName (l_Shader) = "Nothing" then
			AutoInspect (l_Shader)
		end if
	end if
		
end sub

'------------------------------------------------------------------------------
' NAME:		ResolveLocalMaterialsOverlap
'
' INPUT:	- in_SelectedClustersList : list of clusters for which a material is being applied
'			- in_ExistingClusters : list of clusters (wich a material) overlapping with in_SelectedClustersList 
'			- in_Property : example of a property a cluster must have in order to be taken into account
'			- io_LocalMaterialsOverlapAction : the action to do on such clusters
'			If io_LocalMaterialsOverlapAction is siPromptUser then we first check if the user pref dictates anything
'			otherwise we prompt the user what to do.
'
' OUTPUT:	- io_LocalMaterialsOverlapAction : if this was siPromptUser on return it will be set properly to what the use chose
'
' DESCRIPTION: Resolve ambiguities when two clusters overlap with both a different material
'------------------------------------------------------------------------------
sub ResolveLocalMaterialsOverlap( in_SelectedClustersList, in_ExistingClusters, in_Property, io_LocalMaterialsOverlapAction )

	Dim	l_Cluster, l_Title, l_Prefix, l_Prompt, l_res, l_ClusterList, l_count, l_array, l_FromUI

	if io_LocalMaterialsOverlapAction = siPromptUser then

		l_FromUI = TRUE

		'--------------------------------------------------------------------
		' let's see if there is a default in the user pref instead.
		'--------------------------------------------------------------------

		io_LocalMaterialsOverlapAction = getuserpref("SI3D_USERPREF_LOCAL_MATERIALS_OVERLAP_RESOLUTION")

	else
		l_FromUI = FALSE
	end if

	if io_LocalMaterialsOverlapAction = siPromptUser then

		'--------------------------------------------------------------------
		' overlap exists
		' let's prompt the user what to do 
		'--------------------------------------------------------------------
		l_Title = FConfirmTitle("Get Material")
		l_Prompt = XSIUtils.Translate( IDS_CLUSTERS_OVERLAP, "XSISCRIPTS", in_ExistingClusters )

		l_res = SIMsgBox(l_Prompt, vbYesNoCancel + vbQuestion + vbDefaultButton3, l_Title, vbCancel )

		if l_res = vbYes then
			io_LocalMaterialsOverlapAction = siRemoveFromSelectedClusters
		else if l_res = vbNo then
			io_LocalMaterialsOverlapAction = siRemoveFromExistingClusters
		else if l_res = vbCancel then
			io_LocalMaterialsOverlapAction = siLetLocalMaterialsOverlap
		else
			Err.Raise siErrCancelled
		end if
		end if
		end if

	end if

	if	( io_LocalMaterialsOverlapAction = siRemoveFromExistingClusters ) or _
	 ( io_LocalMaterialsOverlapAction = siRemoveFromSelectedClusters ) then

		'--------------------------------------------------------------------
		' OK let's fix the clusters !
		'--------------------------------------------------------------------

		ClusterNonOverlapEnforcement in_SelectedClustersList, in_property, io_LocalMaterialsOverlapAction

		'--------------------------------------------------------------------
		' let's see if any of the clusters became empty !
		' (no need to warn user if a script is run)
		'--------------------------------------------------------------------

		if l_FromUI then
			if io_LocalMaterialsOverlapAction = siRemoveFromExistingClusters then
				set l_ClusterList = in_ExistingClusters
					l_Prefix = XSIUtils.Translate("This cluster is now empty: ", "XSISCRIPTS")
			else
				set l_ClusterList = in_SelectedClustersList
					l_Prefix = XSIUtils.Translate("This selected cluster is now empty: ", "XSISCRIPTS")
			end if

			for each l_Cluster in l_ClusterList

				l_array = l_Cluster.elements.array

				l_count = ubound( l_Cluster.elements.array, 1 ) + 1

				if l_count = 0 then
					l_Prompt = l_Prefix & l_cluster
					l_Title = XSIUtils.Translate("Empty Cluster", "XSISCRIPTS")
					SIMsgBox l_Prompt, vbOKOnly + vbExclamation, l_Title, vbOK
				end if
			next
		end if
	end if
end sub

sub TestClusterOverlapping( in_objs, in_NewClusterList, in_material, byref io_LocalMaterialsOverlapAction )
	
	Dim l_Polygons, l_SelectedClustersList, l_item, l_ExistingClusters

	'----------------------------------------------------------------------------
	' lets create a list of all clusters (existing and new)
	' l_NewClustersList only contains those clusters created from subcomponents 
	'----------------------------------------------------------------------------

	set l_Polygons = SIFilter( in_objs, "polygon", True )
	' l_Polygons contains the clusters + the subcomponents

	if ( Not TypeName (l_Polygons) = "Nothing" ) and ( Not IsEmpty (l_Polygons) ) Then

		set l_SelectedClustersList = SIFilter( l_Polygons, "UserCluster", True )
		' ok now l_SelectedClustersList contains clusters only 
	end if
	
	if Not IsEmpty (in_NewClusterList) Then
		if ( TypeName (l_SelectedClustersList) = "Nothing" ) or ( IsEmpty (l_SelectedClustersList) ) Then
			set l_SelectedClustersList = in_NewClusterList
		else
			For each l_item in in_NewClusterList
				l_SelectedClustersList.Add l_item
			Next
		end if
	End if

	'----------------------------------------------------------------------------
	' lets test if any cluster overlap in l_SelectedClustersList
	'----------------------------------------------------------------------------

	if ( Not TypeName (l_SelectedClustersList) = "Nothing" ) and ( Not IsEmpty (l_SelectedClustersList) ) Then

		' we need to pass the material to ClusterNonOverlapEnforcement and ResolveLocalMaterialsOverlap

		set l_ExistingClusters = ClusterNonOverlapEnforcement( l_SelectedClustersList, in_material, siJustReturnExistingClusters )

		if ( Not IsEmpty (l_ExistingClusters) ) and ( l_ExistingClusters.count > 0 ) Then

			'----------------------------------------------------------------------------
			' some clusters overlap so let's fix
			'----------------------------------------------------------------------------
			ResolveLocalMaterialsOverlap l_SelectedClustersList, l_ExistingClusters, in_material, io_LocalMaterialsOverlapAction
		else
			' just so siLetLocalMaterialsOverlap gets logged instead of the misleading siPromptUser 
			io_LocalMaterialsOverlapAction = siLetLocalMaterialsOverlap
		end if
	else
		' just so siLetLocalMaterialsOverlap gets logged instead of the misleading siPromptUser 
		io_LocalMaterialsOverlapAction = siLetLocalMaterialsOverlap
	end if
end sub

'------------------------------------------------------------------------------
' NAME:			GetMaterialProc
' INPUT:		
' DESCRIPTION:	Script called from UI to get a material (and apply a shader)
'------------------------------------------------------------------------------
sub GetMaterialProc( in_ShaderPreset, in_objs, in_Name, in_ConnectType, byref io_LocalMaterialsOverlapAction )

	Dim	l_Shader, l_ObjList, l_material, _
		l_NewClustersList, l_SubCompList, _
		l_Title, l_Prompt
		 
	if Not IsObject( in_objs ) then
		exit sub
	end if

	if in_objs.Count <= 0 then
		exit sub
	end if

	'--------------------------------------------------------------------
	' Determine if materials already there and prompt user for confirmation
	'--------------------------------------------------------------------

	' maybe one day we should have the new cluster connected with the tag !
	set l_ObjList = FSubComponents2Clusters( in_objs, false, l_NewClustersList, l_SubCompList )

	if FHasAnimatedProp( l_ObjList, "material", siUnspecified ) then
		l_Title = FConfirmTitle("Get Material")

		l_Prompt = FConfirmPrompt("You are about to overwrite one or many animated material properties. " )
		if Not SIMsgBox(l_Prompt, (vbYesNo + vbQuestion), l_Title, vbYes) = vbYes then
			Err.Raise siErrCancelled
		end if
	end if

	if Not TypeName (l_ObjList) = "Nothing" then
		'--------------------------------------------------------------------
		' Apply the shader
		'--------------------------------------------------------------------
		if in_ShaderPreset = "ICEParticleVolumeShader" then
		    set l_Shader = ApplyICEParticleVolumeShaderProc( l_ObjList, in_Name, in_ConnectType )
		else
		    set l_Shader = SIApplyShader( in_ShaderPreset, l_ObjList, in_Name, in_ConnectType )
        end if
        
		'--------------------------------------------------------------------
		' add created clusters to selection (in place of tagclusters)
		'--------------------------------------------------------------------
		if Not IsEmpty (l_NewClustersList) Then
			RemoveFromSelection (l_SubCompList)
			AddToSelection (l_NewClustersList)
		end if
		
		if l_Shader.count = 0 then
			SIMsgBox XSIUtils.Translate( IDS_PRESET_DOES_NOT_APPLY, "XSISCRIPTS" ), vbOKOnly, XSIUtils.Translate( IDS_PRESET_DOES_NOT_APPLY_TITLE, "XSISCRIPTS" ), vbOK
			Err.Raise siErrCancelled
		else
			set l_material = FFindMaterial( l_Shader(0) )

			TestClusterOverlapping in_objs, l_NewClustersList, l_material, io_LocalMaterialsOverlapAction

			'--------------------------------------------------------------------
			' Inspect the shader
			'--------------------------------------------------------------------
			if Not TypeName (l_Shader) = "Nothing" then
				AutoInspect (l_Shader)
			end if
		end if
	else
		Err.Raise siErrCancelled
	end if
		
end sub

'------------------------------------------------------------------------------
' NAME:			InspectMaterial
' INPUT:		The objects we want to inspect
' DESCRIPTION:	Inspect the material of the objects passed as parameters
'				Note, it doesn't really inspect the material, but the shader
'				on the surface port of the material on the objects.  - istewart
'------------------------------------------------------------------------------
sub InspectMaterial( in_objs )
	Dim l_ConnectionList

	set l_ConnectionList = SIGetMaterialShader(in_objs, siMaterialPortSurface)

	InspectObj l_ConnectionList, "Rendering" 
end sub

'------------------------------------------------------------------------------
' NAME:			GetParticleShaderProc
' INPUT:		
' DESCRIPTION:	Script called from UI to get a particle shader
'------------------------------------------------------------------------------
sub GetParticleShaderProc( in_objs, in_shader, in_volume )

	Dim	l_PropType, l_MatCount, l_Shader, l_ObjList, _
		l_ClusterList, l_Title, l_Prompt	
 
	if Not IsObject( in_objs ) then
		exit sub
	end if

	'--------------------------------------------------------------------
	' Filter list so that we only have particle clouds.
	'--------------------------------------------------------------------

	set l_ObjList = SIFilter( in_objs, "Particle",, siSearchFamilies )

	if TypeName( l_ObjList ) = "Nothing" then
		exit sub
	end if
	
	if l_ObjList.Count <= 0 then
		exit sub
	end if

	'--------------------------------------------------------------------
	' Determine if animated materials already there and prompt user for 
	' confirmation
	'--------------------------------------------------------------------
	if FHasAnimatedProp( l_ObjList, "material", siUnspecified ) then

		l_Title = FConfirmTitle("Get Particle Shader")

		l_Prompt = FConfirmPrompt("You are about to overwrite one or many animated particle shaders. " )

		if Not SIMsgBox(l_Prompt, (vbYesNo + vbQuestion), l_Title, vbYes) = vbYes then
			Err.Raise siErrCancelled
		end if

	end if

	'--------------------------------------------------------------------
	' Apply the shader
	'--------------------------------------------------------------------
	if Not TypeName (l_ObjList) = "Nothing" then
		
		set l_Shader = ApplyParticleShader( in_objs, in_shader, in_volume )

		'--------------------------------------------------------------------
		' Inspect the particle shaders
		'--------------------------------------------------------------------
		if Not TypeName (l_Shader) = "Nothing" then
			AutoInspect (l_Shader)
		end if
	end if
		
end sub

'******************************************************************************
' PROPERTY SUBROUTINES
'******************************************************************************

'------------------------------------------------------------------------------
' NAME:		AddPropProc
'
' INPUT:	- in_preset
'			- in_obj
'			- in_propagation
'			- in_propname
' OUTPUT	- out_value			: create properties
'
' DESCRIPTION: Add property to objects. If objects include tagclusters replace
'			   them by a real clusters.
'------------------------------------------------------------------------------
sub AddPropProc (in_preset, in_objs, in_propagation, in_propname, out_value )

	' sub-components are converted to clusters and are considered automatic
	' objects i.e. objects that are create as a side effect of a user action.
	Dim l_ClusterList, l_SubCompList

	set out_value = FAddProp(in_preset, in_objs, in_propagation, in_propname, _
		l_ClusterList, l_SubCompList )

	'--------------------------------------------------------------------
	' Inspect the property
	'--------------------------------------------------------------------
	if Not TypeName (out_value) = "Nothing" then
		AutoInspect (out_value)
	end if

	'--------------------------------------------------------------------
	' Add created objects to selection e.g. clusters
	'--------------------------------------------------------------------
	if Not TypeName (l_AutomaticObjs) = "Empty" then
		RemoveFromSelection (l_SubCompList)
		AddToSelection (l_AutomaticObjs)
	end if

end sub



'------------------------------------------------------------------------------
' NAME:		GetPropProc
'
' INPUT:	- in_preset
'			- in_obj
'			- in_propagation
'			- in_propname
' OUTPUT	- out_value			: create properties
'
' DESCRIPTION:	Add property to objects. If objects include tagclusters replace
'				them by a real clusters.
'				This script is called from the UI. It will prompt the user for
'				confirmation before overriding existing properties.
'				
'------------------------------------------------------------------------------
sub GetPropProc (in_preset, in_objs, in_propagation, in_propname, out_value )

	' sub-components are converted to clusters and are considered automatic
	' objects i.e. objects that are create as a side effect of a user action.
	Dim l_Title, l_Prompt, l_Prop, l_PropSingleton, l_PropType, _
		l_ClusterList, l_SubCompList

	if Not IsObject( in_objs ) then
		exit sub
	end if

	if in_objs.Count <= 0 then
		exit sub
	end if

	' create the property object
	set l_Prop = CreateObjectFromPreset(in_preset)
	l_PropSingleton = l_Prop.Singleton
	l_PropType = l_Prop.Type
	' delete prop so it will be removed from TOC; @todo reuse prop instead of deleting.
	DeleteObj l_Prop

	'--------------------------------------------------------------------
	' determine if input objects have singleton animated properties
	'--------------------------------------------------------------------
	if l_PropSingleton then
		if FHasAnimatedProp( in_objs, l_PropType, FPropagationType2BranchFlag(in_propagation) ) then
			l_Title = FConfirmTitle("Get Property")

			l_Prompt = XSIUtils.Translate(IDS_OVERWRITE_ANIMATED_PROPS, "XSISCRIPTS", l_PropType)

			if Not SIMsgBox(l_Prompt, (vbYesNo + vbQuestion), l_Title, vbYes) = vbYes then
				Err.Raise siErrCancelled
			end if
		end if
	end if

	'--------------------------------------------------------------------
	' add new property
	'--------------------------------------------------------------------
	set out_value = FAddProp( in_preset, in_objs, in_propagation, in_propname, _
		l_ClusterList, l_SubCompList )

	'--------------------------------------------------------------------
	' Inspect the property
	'--------------------------------------------------------------------
	if Not TypeName (out_value) = "Nothing" then
		AutoInspect (out_value)
	end if

	'--------------------------------------------------------------------
	' Add created objects to selection e.g. clusters
	'--------------------------------------------------------------------
	if Not TypeName (l_ClusterList) = "Empty" then
		RemoveFromSelection (l_SubCompList)
		AddToSelection (l_ClusterList)
	end if
		
end sub

'******************************************************************************
' CUSTOM PARAMETER SUBROUTINES
'******************************************************************************

'------------------------------------------------------------------------------
' NAME:	AddCustomParamProc	
'
' INPUT:	- in_Obj, in_Name, in_nType, in_dDefVal, in_dMinVal, in_dMaxVal, in_Class, in_Cap, in_SuggMin, in_SuggMax, in_ShortName, in_LongName
'
' DESCRIPTION: Displays a dialog to get the basic characteristics of a custom parameter
'				from the user, and creates the parameter with SIAddCustomParameter
'
'			   Associated preset  \Rayflex\SystemFiles\DSPresets\Properties\CustomParameter.Preset
'			   Associated spdl is \Rayflex\MO\Properties\props\src\{B4F63C06-B4AF-11D3-A63C-00A0C9EC5EF7}.spdl
'
'			   This code is not ideal for input of Ints and Bytes because same controls are
'			   shared with the double type. See bug#75322, #75323.  We do some basic
'			   validation of the numbers but the spdl itself should prevent bad values.
'
'------------------------------------------------------------------------------
sub AddCustomParamProc(in_Obj, in_Name, in_nType, in_dDefVal, in_dMinVal, in_dMaxVal, in_Class, in_Cap, in_SuggMin, in_SuggMax, in_ShortName, in_LongName)
	'--------------------------------------------------------------------
	' create the Dialog 
	'--------------------------------------------------------------------

	Dim l_CPList, l_CustomParam, l_SceneRoot
	Dim l_Tmp
	Dim l_bUIRange, l_bAnimatable, l_bKeyable, l_bReadOnly

	Set l_SceneRoot = ActiveSceneRoot
	' We have a preset already for this custom pset, for which we have defined a SPDL file
	Set l_CPList = SIAddProp("CustomParameter", l_SceneRoot, , "New Custom Parameter").value("Value")
	l_CustomParam = l_SceneRoot & "." & l_CPList

	If FWizardDialog( l_CustomParam, "New Custom Parameter" ) = vbOk Then
		in_Name = GetValue( l_CustomParam & ".ScriptName" )
		in_ShortName = GetValue( l_CustomParam & ".ParamName" )
		in_LongName = GetValue( l_CustomParam & ".Description" )
		in_nType = GetValue( l_CustomParam & ".Type" )

		'----------------------------------------------------------------
		' Default/Min/Max values
		'----------------------------------------------------------------
		if in_nType = siString Then
			in_dDefVal = GetValue( l_CustomParam & ".DefaultStr" )
			in_dMinVal = 0
			in_dMaxVal = 1
		elseif in_nType = siBool Then
			in_dDefVal = GetValue( l_CustomParam & ".DefaultBool" )
			in_dMinVal = 0
			in_dMaxVal = 1
		else		
			in_dDefVal = GetValue( l_CustomParam & ".DefaultDbl" )
			in_dMinVal = GetValue( l_CustomParam & ".Minimum" )
			in_dMaxVal = GetValue( l_CustomParam & ".Maximum" )
		end if

		' Bail out if the user has asked for a max that is the same as the min
		if in_dMinVal = in_dMaxVal Then
			DeleteObj l_CustomParam
			LogMessage XSIUtils.Translate( IDS_MIN_MAX_RANGE_INVALID, "XSISCRIPTS" ), siError
			Err.Raise siErrCancelled
		End If

		'----------------------------------------------------------------
		' Capabilities
		'----------------------------------------------------------------
		in_Cap = siPersistable
		l_bAnimatable = GetValue( l_CustomParam & ".Animatable" )
		l_bKeyable = GetValue( l_CustomParam & ".Keyable" )
		l_bReadOnly = GetValue( l_CustomParam & ".ReadOnly" )
		if l_bAnimatable Then
			in_Cap = in_Cap + siAnimatable
		End If
		if l_bKeyable Then
			in_Cap = in_Cap + siKeyable
		End If
		if l_bReadOnly Then
			in_Cap = in_Cap + siReadOnly
		End If
		
		'----------------------------------------------------------------
		' UI Range
		'----------------------------------------------------------------
		l_bUIRange = GetValue( l_CustomParam & ".UIRangeToggle" )
		if l_bUIRange Then

			if in_nType = siString or in_nType = siBool Then
				in_SuggMin = 0
				in_SuggMax = 1
			else
				in_SuggMin = GetValue( l_CustomParam & ".UIMinimum" )
				in_SuggMax = GetValue( l_CustomParam & ".UIMaximum" )
			end if

			' Bail out if the user has asked for a UImax that is the same as the UImin
			if in_SuggMin = in_SuggMax Then
				DeleteObj l_CustomParam
				LogMessage XSIUtils.Translate( IDS_MIN_MAX_UIRANGE_INVALID, "XSISCRIPTS" ), siError
				Err.Raise siErrCancelled
			End If
		Else
			in_SuggMin = in_dMinVal
			in_SuggMax = in_dMaxVal
		End If

		'----------------------------------------------------------------
		' Delete the temporary custom pset to avoid interfering with the
		' following SIAddCustomParameter command.
		'----------------------------------------------------------------
		DeleteObj l_CustomParam

		'----------------------------------------------------------------
		' Call the addcustom parameter command with the updated arguments
		'----------------------------------------------------------------
		SIAddCustomParameter in_Obj, in_Name, in_nType, in_dDefVal, in_dMinVal, in_dMaxVal, in_Class, in_Cap, in_SuggMin, in_SuggMax, in_ShortName, in_LongName
	Else
		DeleteObj l_CustomParam
		Err.Raise siErrCancelled
	End If

end sub


'------------------------------------------------------------------------------
' NAME:	EditCustomParamProc	
'
' INPUT:	- in_Obj		|	A list of parameters (custom or proxy) whose definition is to be edited			
'			- in_ShortName	|	Parameter name.
'			- in_nType		|	Data type (siDouble etc, see ).
'			- in_dMinVal	|	Minimum value that parameter can take
'			- in_dMaxVal	|	Maximum value that parameter can take
'			- in_SuggMin	|	Minimum value on the UI control for the parameter
'			- in_SuggMax	|	Maximum value on the UI control for the parameter
'			- in_Name		|	Parameter short name (used in scripting)
'			- in_LongName	|	Parameter long name (used in the GPI)
'			- in_Cap		|	Parameter capabilities
'
' DESCRIPTION: Displays a dialog to get the parameter definition of a custom 
'			parameter from the user, and sets it with EditCustomParameter
'
'			   Associated preset  \Rayflex\SystemFiles\DSPresets\Properties\EditParameterDefinitionWizard.Preset
'			   Associated spdl is \Rayflex\MO\Properties\props\src\{6A90CF11-7F82-11D4-A65B-00A0C9EC5EF7}.spdl
'------------------------------------------------------------------------------
sub EditCustomParamProc(in_Obj, in_ShortName, in_nType, in_dMinVal, in_dMaxVal, in_SuggMin, in_SuggMax, in_Name, in_LongName, in_Cap)

	'-----------------------------------------------------------------------
	' Create the Dialog 
	'-----------------------------------------------------------------------
	Dim l_CPList, l_CustomParam, l_SceneRoot
	Dim l_Tmp
	Dim l_bUIRange
	Dim l_bAnimatable, l_bKeyable, l_bReadOnly

	' in_Obj contains the expanded list of marked parameters (ex: "cube.pset.p1,cube.pset.p2")
	' We need to convert this to a collection of OM Parameter objects as follows
	set l_param_coll = CreateObject("XSI.Collection")  
	l_param_coll.setastext( in_Obj )

	' Then we take the first parameter. We could loop through each marked param
	' or maybe eventually allow multi editing but for now we just take the first one.
	set l_param = l_param_coll(0)


	Set l_SceneRoot = ActiveSceneRoot
	' We have a preset already for this custom pset, for which we have defined a SPDL file
	' called {6A90CF11-7F82-11D4-A65B-00A0C9EC5EF7}.spdl

	Set l_CPList = SIAddProp("EditParameterDefinitionWizard", l_SceneRoot, , "Edit Custom Parameter").value("Value")
	l_CustomParam = l_SceneRoot & "." & l_CPList

	' Initialize the dialog with the current characteristics of the parameter
	SetValue l_CustomParam & ".ScriptName", l_param.ScriptName
	SetValue l_CustomParam & ".ParamName", l_param.Name
	SetValue l_CustomParam & ".Description", l_param.Description
	SetValue l_CustomParam & ".Type", l_param.ValueType

	if l_param.ValueType <> siString and l_param.ValueType <> siBool Then

		'It is possible for a parameter to have values outside the possible
		'range of our edit controls.  If that is the case we just show the defaults settings
		'This is ok because it is not practical to show a slider that covers the entire possible 
		'range of doubles anyway

		on error resume next
		SetValue l_CustomParam & ".Minimum", l_param.Min
		SetValue l_CustomParam & ".Maximum", l_param.Max
		SetValue l_CustomParam & ".UIMinimum", l_param.SuggestedMin
		SetValue l_CustomParam & ".UIMaximum", l_param.SuggestedMax
		on error goto 0

	End If

	' The UI range is active only if it happens to be different from the physical range
	if ( l_param.SuggestedMin <> l_param.Min ) or ( l_param.SuggestedMax <> l_param.Max ) then
		SetValue l_CustomParam & ".UIRangeToggle", True
	end if

	' Set the custom parameter capabilities
	SetValue l_CustomParam & ".Animatable",	l_param.Animatable
	SetValue l_CustomParam & ".Keyable",	l_param.Keyable
	SetValue l_CustomParam & ".ReadOnly",	l_param.ReadOnly


	If FWizardDialog( l_CustomParam, "Edit Custom Parameter" ) = vbOk Then
		in_Name = GetValue( l_CustomParam & ".ScriptName" )
		in_ShortName = GetValue( l_CustomParam & ".ParamName" )
		in_LongName = GetValue( l_CustomParam & ".Description" )
		in_nType = GetValue( l_CustomParam & ".Type" )

		'----------------------------------------------------------------
		' Min/Max values
		'----------------------------------------------------------------
		if in_nType = siString or in_nType = siBool Then
			in_dMinVal = 0
			in_dMaxVal = 1
		else		
			in_dMinVal = GetValue( l_CustomParam & ".Minimum" )
			in_dMaxVal = GetValue( l_CustomParam & ".Maximum" )
		end if

		' Bail out if the user has asked for a max that is the same as the min
		if in_dMinVal = in_dMaxVal Then
			DeleteObj l_CustomParam
			LogMessage XSIUtils.Translate( IDS_MIN_MAX_RANGE_INVALID, "XSISCRIPTS" ), siError
			Err.Raise siErrCancelled
		End If

		'----------------------------------------------------------------
		' Capabilities
		'----------------------------------------------------------------
		in_Cap = l_param.Capabilities
		l_bAnimatable = GetValue( l_CustomParam & ".Animatable" )
		l_bKeyable = GetValue( l_CustomParam & ".Keyable" )
		l_bReadOnly = GetValue( l_CustomParam & ".ReadOnly" )

		If l_param.Animatable <> l_bAnimatable Then
			If l_param.Animatable Then
				in_Cap = in_Cap - siAnimatable
			Else
				in_Cap = in_Cap + siAnimatable
			End If
		End If

		If l_param.Keyable <> l_bKeyable Then
			If l_param.Keyable Then
				in_Cap = in_Cap - siKeyable
			Else
				in_Cap = in_Cap + siKeyable
			End If
		End If

		If l_param.ReadOnly <> l_bReadOnly Then
			If l_param.ReadOnly Then
				in_Cap = in_Cap - siReadOnly
			Else
				in_Cap = in_Cap + siReadOnly
			End If
		End If

		'----------------------------------------------------------------
		' UI Range
		'----------------------------------------------------------------
		l_bUIRange = GetValue( l_CustomParam & ".UIRangeToggle" )
		if l_bUIRange Then
			in_SuggMin = GetValue( l_CustomParam & ".UIMinimum" )
			in_SuggMax = GetValue( l_CustomParam & ".UIMaximum" )

			' Bail out if the user has asked for a UImax that is the same as the UImin
			if in_SuggMin = in_SuggMax Then
				DeleteObj l_CustomParam
				LogMessage XSIUtils.Translate( IDS_MIN_MAX_UIRANGE_INVALID, "XSISCRIPTS" ), siError
				Err.Raise siErrCancelled
			End If
		Else
			in_SuggMin = in_dMinVal
			in_SuggMax = in_dMaxVal
		End If

		'----------------------------------------------------------------
		' Delete the temporary custom pset to avoid interfering with the
		' following SIAddCustomParameter command.
		'----------------------------------------------------------------
		DeleteObj l_CustomParam

		'----------------------------------------------------------------
		' Call the edit custom parameter command with the updated arguments
		'----------------------------------------------------------------
		EditParameterDefinition in_Obj, in_ShortName, in_nType, in_dMinVal, in_dMaxVal, in_SuggMin, in_SuggMax, in_Name, in_LongName, in_Cap

	Else
		DeleteObj l_CustomParam
		Err.Raise siErrCancelled
	End If

end sub

'------------------------------------------------------------------------------
' NAME:		AddCustomPropProc
'
' INPUT:	- in_preset
'			- in_obj
'			- in_propagation
'			- io_propname: name to give to the custom property set (modified by user)
' OUTPUT	- out_value			: create properties
'
' DESCRIPTION:	Add a custom property set to objects. It will prompt the user
'				for a username and not display the created pset.
'				
'------------------------------------------------------------------------------
sub AddCustomPropProc (in_preset, in_objs, in_propagation, byref io_propname, out_value )
	' sub-components are converted to clusters and are considered automatic
	' objects i.e. objects that are created as a side effect of a user action.
	Dim l_SubCompList, l_ClusterList
	Dim l_Prompt, l_Str
	Dim l_propname

	if  TypeName(in_objs) = "Nothing" Or IsEmpty(in_objs) Then
		Err.Raise siErrCancelled 
		Exit Sub		
	end if

	if in_objs.Count = 0 then
		'If nothing specified put the custom pset under the scene root
		in_objs.Add ActiveSceneRoot
	end if


	'--------------------------------------------------------------------
	' Get the name of the pset from the user
	'--------------------------------------------------------------------
	l_Str = "custom parameter set"
	if ( io_propname = "CustomDataTemplate" ) then
		l_Str = "custom data map template"
	end if
	l_Prompt = XSIUtils.Translate("Enter a name for the new " & l_Str, "XSISCRIPTS" )
	io_propname = InputBox( l_Prompt, XSIUtils.Translate("New " & l_Str, "XSISCRIPTS" ), io_propname )

	' Test the case where the user presses the cancel button
	if io_propname = "" then
		Err.Raise siErrCancelled 
		Exit Sub		
	end if

	set out_value = FAddProp(in_preset, in_objs, in_propagation, io_propname, _
		l_ClusterList, l_SubCompList )

	'--------------------------------------------------------------------
	' Add created objects to selection e.g. clusters
	'--------------------------------------------------------------------
	if Not TypeName (l_AutomaticObjs) = "Empty" then
		RemoveFromSelection (l_SubCompList)
		AddToSelection (l_ClusterList)
	end if

end sub

'******************************************************************************
' CONSTRAINTS SUBROUTINES
'******************************************************************************

'------------------------------------------------------------------------------
' NAME:		ApplyCnsProcUI
'
' INPUT:	- in_type
'			- in_constrained 
'			- in_constraining
'			- inout_compensation
'
' DESCRIPTION: constrain an object (constrained) to another one (constraining)
' using the current compensation preference
'------------------------------------------------------------------------------
function ApplyCnsProcUI(in_type, io_constrained, io_constraining, inout_compensation)

	inout_compensation = (getuserpref("SI3D_CONSTRAINT_COMPENSATION_MODE") = 1)
	set ApplyCnsProcUI = ApplyCnsProc(in_type, io_constrained, io_constraining, inout_compensation)

end function
'------------------------------------------------------------------------------
' NAME:		ApplyCnsProc
'
' INPUT:	- in_type
'			- in_constrained 
'			- in_constraining
'			- in_compensation
'
' DESCRIPTION: constrain an object (constrained) to another one (constraining)
'------------------------------------------------------------------------------
function ApplyCnsProc(in_type, io_constrained, io_constraining, in_compensation)

	dim bCycleBefore, bCycleAfter, oObject
	bCycleBefore = False
	bCycleAfter = False

	for each oObject in io_constrained
		bCycleBefore = CycleChecking( oObject,0,0,1,0 )
		
		if bCycleBefore = True then
			Exit For
		end if
	next


	set ApplyCnsProc = SIApplyCns (in_type, io_constrained, io_constraining, _
		in_compensation )
	if Not TypeName (ApplyCnsProc) = "Nothing" then
		AutoInspect ApplyCnsProc
	end if
 
	if bCycleBefore = False then

		for each oObject in io_constrained
			bCycleAfter = CycleChecking( oObject,0,0,1,0)
			
			if bCycleAfter = True then
				SIMsgBox XSIUtils.Translate( IDS_CYCLE_IN_DEPENDENCIES, "XSISCRIPTS" ),_
				vbOKOnly + vbInformation, XSIUtils.Translate( "Cycle Created", "XSISCRIPTS" ), vbOK

				Exit For
			end if
		next
	end if


end function

'------------------------------------------------------------------------------
' NAME:		ParentObjProc
'
' INPUT:	- in_InputParentObj		|	The parent object.			
'			- in_InputChildrenObjs	|	The children list.
'
' DESCRIPTION: Parent a list of children to a parent object, the parent is selected in branch afterward.
'------------------------------------------------------------------------------
sub ParentObjProc( in_InputParentObj, in_InputChildrenObjs )

	'--------------------------------------------------------------------
	' Parent a list of children to a parent object.
	'--------------------------------------------------------------------
	On Error Resume Next	
	ParentObj in_InputParentObj, in_InputChildrenObjs

	'--------------------------------------------------------------------
	' return if ParentObj issued a cancel
	'--------------------------------------------------------------------
	if Err.Number <> 0 then
		Err.Raise Err.Number 
		Exit sub
	end if

	'--------------------------------------------------------------------
	' The parent is selected in branch.
	'--------------------------------------------------------------------
	SelectObj in_InputParentObj, "BRANCH"

end sub



'******************************************************************************
' GROUP SUBROUTINES
'******************************************************************************
'------------------------------------------------------------------------------
' NAME:	FCreateGroup_Internal
'
' INPUT: -
'
' DESCRIPTION: Create a group
'------------------------------------------------------------------------------
Function FCreateGroup_Internal( in_name, in_inputobjs, in_parent )
	Dim l_group, l_modelParent

	'------------------------------------------------------------------------------
	' Use the input parent model
	' If empty, use the outer model of the input object(s)
	'			and if the input object is the scene root, then SIAddToGroup will show a gentle warning message (not allowed)
	'------------------------------------------------------------------------------
	if CStr( in_parent ) = "" then
		if in_inputobjs <> ActiveSceneRoot then
			set l_modelParent = SIGetModel( in_inputobjs )

			' if the input object(s)' model is a referenced model, ascend the hierarchy to find the first standard model
			while l_modelParent.ModelKind = siModelKind_Reference 
				set l_modelParent = SIGetModel( l_modelParent )
			wend
		else
			set l_modelParent = ActiveSceneRoot
		end if
	else
		set l_modelParent = Dictionary.GetObject( in_parent, false )

		if TypeName( l_modelParent ) <> "Model" then
			LogMessage XSIUtils.Translate(IDS_CREATE_GROUP_INVALID_PARENT_ARG, "XSISCRIPTS" ), siError
			Err.Raise siErrCancelled
			exit Function
		end if
	end if

	'------------------------------------------------------------------------------
	' create the group
	'------------------------------------------------------------------------------
	set l_group = SICreateGroup( in_name, l_modelParent )

	'------------------------------------------------------------------------------
	' add the input objects to the new group
	'------------------------------------------------------------------------------
	SIAddToGroup l_group, in_inputobjs 

	'------------------------------------------------------------------------------
	' select/inspect the new group
	'------------------------------------------------------------------------------
	if Not TypeName (l_group) = "Nothing" then
		SelectObj l_group
		AutoInspect l_group
	end if

	'------------------------------------------------------------------------------
	' Set the return Value
	'------------------------------------------------------------------------------
	set FCreateGroup_Internal = l_group
end Function

'------------------------------------------------------------------------------
' NAME:	FCreateGroup
'
' INPUT: -
'
' DESCRIPTION: Create a group
'------------------------------------------------------------------------------
Function FCreateGroup( in_name, in_inputobjs, in_parent )
	
	'------------------------------------------------------------------------------
	' By default, create the group under the scene root if the parent model was not specified.
	'------------------------------------------------------------------------------
	l_modelParent = in_parent
	if CStr( l_modelParent ) = "" then
		l_modelParent = ActiveSceneRoot.FullName
	end if
	
	'------------------------------------------------------------------------------
	' create the group and set the return value
	'------------------------------------------------------------------------------
	set FCreateGroup = FCreateGroup_Internal( in_name, in_inputobjs, l_modelParent )
end Function

'------------------------------------------------------------------------------
' NAME:	FCreateGroupFromObjects
'
' INPUT: -
'
' DESCRIPTION: Create a group under the common model of the specified objects. And 
'			   add the objects into the new group. Since v13.0(2015)
'------------------------------------------------------------------------------
Function FCreateGroupFromObjects( in_name, in_inputobjs )

	'------------------------------------------------------------------------------
	' No need to specify the parent model. It's determined by the input objects.
	'------------------------------------------------------------------------------
	set FCreateGroupFromObjects = FCreateGroup_Internal( in_name, in_inputobjs, "" )
end Function

'------------------------------------------------------------------------------
' NAME:	AddToGroup
'
' INPUT: -
'
' DESCRIPTION: Add the content of the list to a group
'------------------------------------------------------------------------------
sub AddToGroup( in_group, in_inputobjs )
	Dim	rtn, l_group

	set rtn = SIAddToGroup(in_group, in_inputobjs)
	set l_group = rtn.value("OutputObj")

	if Not TypeName (l_group) = "Nothing" then
		SelectObj l_group
		AutoInspect l_group
	end if
end sub
'------------------------------------------------------------------------------
' NAME:	RemoveGroup
'
' INPUT: -
'
' DESCRIPTION: Delete groups
'------------------------------------------------------------------------------
sub RemoveGroup( in_inputobjs )
	Dim rtn, l_List

	'--------------------------------------------------------------------
	' filter list by clusters
	'--------------------------------------------------------------------
	set l_List = SIFilter(in_inputobjs,siGroupFilter)

	'--------------------------------------------------------------------
	' Delete group
	'--------------------------------------------------------------------
	if Not TypeName(l_List) = "Nothing" then
		DeleteObj l_List
	end if

end sub

'------------------------------------------------------------------------------
' NAME:	RemoveFromGroupProc
'
' INPUT: -
'
' DESCRIPTION: Delete groups
'------------------------------------------------------------------------------
sub RemoveFromGroupProc( in_group, in_objectToRemove  )
	Dim rtn, l_List

	SIRemoveFromGroup in_group, in_objectToRemove
end sub

'------------------------------------------------------------------------------
' NAME:	AddToGroupProc
'
' INPUT: -
'
' DESCRIPTION: Delete groups
'------------------------------------------------------------------------------
sub AddToGroupProc( in_group, in_objectToAdd, out_objects  )

	SIAddToGroupLowLevel in_group, in_objectToAdd, out_objects
end sub

'------------------------------------------------------------------------------
' NAME:	AddToContainer
'
' INPUT: -
'
' DESCRIPTION: Add the content of the list to a container.
'------------------------------------------------------------------------------
sub AddToContainer( in_Container, in_inputobjs )
	Dim	l_oContainer

	set l_oContainer = Dictionary.GetObject(in_Container)
	if TypeName(l_oContainer) = "Group" then
		SIAddToGroup l_oContainer, in_inputobjs
	else
		MoveToFolder l_oContainer, in_inputobjs
	end if
end sub

'------------------------------------------------------------------------------
' NAME:	RemoveFromContainer
'
' INPUT: -
'
' DESCRIPTION: Remove the content of the list from a container.
'------------------------------------------------------------------------------
sub RemoveFromContainer( in_Container, in_inputobjs )
	Dim	l_oContainer

	set l_oContainer = Dictionary.GetObject(in_Container)
	if TypeName(l_oContainer) = "Group" then
		RemoveFromGroup l_oContainer, in_inputobjs
	else
		RemoveFromFolder l_oContainer, in_inputobjs
	end if
end sub

'------------------------------------------------------------------------------
' NAME:	FCreateTransformGroup
'
' pschretl, dec 2004
'
' DESCRIPTION: Create a transform group (a hidden null to which the members are
'  parented)
'------------------------------------------------------------------------------
Function FCreateTransformGroup( in_Name, in_Objs )

	'------------------------------------------------------------------------------
	' The null is placed under the nearest common parent
	' if there is only one input object we just use the parent
	' if there is no input object use the scene root
	'------------------------------------------------------------------------------
	dim oCommonAncestor
	
	if in_Objs.count > 1 then
		set oCommonAncestor = in_Objs.item(0)	
		for each obj in in_Objs
			if ActiveSceneRoot.IsEqualTo(oCommonAncestor) then exit for
			set oCommonAncestor = FindCommonAncestorObject(oCommonAncestor, obj)

		next
	elseif	in_Objs.count = 1 then set oCommonAncestor = in_Objs.item(0).Parent	
	else	set oCommonAncestor = ActiveSceneRoot
	end if


	'------------------------------------------------------------------------------
	' create the tranform group null, and position it where the nearest common
	' parent is
	'------------------------------------------------------------------------------
	dim oTransformGroup, oPos
	set oTransformGroup = oCommonAncestor.AddPrimitive("TransfoGroup",in_Name)
	set oBoneColl = CreateObject("XSI.Collection")	

	'position it at the parent's position
	set oPos = XSIMath.CreateVector3
	oTransformGroup.LocalTranslation = oPos

	'------------------------------------------------------------------------------
	' Add the input objects as children of the tranform group null
	' NOTE: this won't work on bones, they can't be reparented.
	'------------------------------------------------------------------------------
	dim oBoneColl

	for each obj in in_Objs
		'bones can't be reparented, log a warning explaining this
		if typename(obj) = "ChainBone" then oBoneColl.Add obj
		
		oTransformGroup.AddChild obj	
	next
	
	' if we tried to group bones log a warning explaining that they couldn't be grouped
	if oBoneColl.count <> 0 then
		logmessage "Bones cannot be added to a transform group (because they cannot be re-parented)", siWarning
		logmessage "These objects were not added to the group: " &  oBoneColl, siWarning
	end if

	'------------------------------------------------------------------------------
	' Adjust transform group pivot according to preference
	'------------------------------------------------------------------------------
	dim pivot
	pivot = GetValue( "Preferences.transformgroup.pivot" )
	if pivot = 0 then
		' Set pivot to bbox center
		dim rtn, xctr, yctr, zctr
		set rtn = GetBBox( oTransformGroup.Children, TRUE ) 
		xctr = ( rtn.value("LowerBoundX") + rtn.value("UpperBoundX") ) / 2.0
		yctr = ( rtn.value("LowerBoundY") + rtn.value("UpperBoundY") ) / 2.0 
		zctr = ( rtn.value("LowerBoundZ") + rtn.value("UpperBoundZ") ) / 2.0
		TranslatePivot oTransformGroup, xctr, yctr, zctr
	elseif pivot = 1 then
		' Set pivot to origin in parent space (nothing more to do)
	end if

	'------------------------------------------------------------------------------
	' Branch select the transform group null
	'------------------------------------------------------------------------------
	DeselectAll 'note: I'm using DeselectAll because Selection.Clear is not giving the correct result with undo/redo
	Selection.Add oTransformGroup,siSelectBranch

	'------------------------------------------------------------------------------
	' the created null is the return value
	'------------------------------------------------------------------------------
	set FCreateTransformGroup = oTransformGroup
end Function

Function FindCommonAncestorObject(inObj1, inObj2)

	if ActiveSceneRoot.IsEqualTo(inObj1) then
		set FindCommonAncestorObject = ActiveSceneRoot
		exit function
	end if

	if typename(inObj1.FindChild(inObj2)) <> "Nothing" then
		set FindCommonAncestorObject = inObj1
	else
		set FindCommonAncestorObject = FindCommonAncestorObject(inObj1.Parent,inObj2)
	end if

end Function

'******************************************************************************

'------------------------------------------------------------------------------
' NAME:	FRemoveTransformGroup
'
' pschretl, dec 2004
'
' DESCRIPTION: Removes a transform group, reparenting group members under the group's parent.
'------------------------------------------------------------------------------
Function FRemoveTransformGroup( in_Grps )

	set oChildColl = CreateObject("XSI.Collection")		
	
	
	'use unique list because if removing a hierarchy of transform groups can end up with duplicate entris in the collection
	'with the loop below
	oChildColl.Unique = True
	
	for each grp in in_Grps
		if grp.Children.Count > 0 then
			oChildColl.AddItems grp.Children
			grp.Parent.AddChild grp.Children
		end if
	next

	'a transform group might be the child of another. remove any deleted groups from the child list.
	for each grp in in_Grps	
		oChildColl.RemoveItems grp
	next		

	DeselectAll 'note: I'm using DeselectAll because Selection.Clear is not giving the correct result with undo/redo		
	DeleteObj in_Grps
	if oChildColl.Count > 0 then 
		Selection.SetAsText oChildColl
	end if

end Function


'******************************************************************************
' CLUSTER SUBROUTINES
'******************************************************************************
'------------------------------------------------------------------------------
' NAME:			CreateClusterFunc
'
' INPUT:		list of cluster subcomponents
'
' DESCRIPTION:  Create clusters from list of subcomponents e.g.
'				"Grid.Vertex[1],Grid.Edge[1]'
'------------------------------------------------------------------------------
function CreateClusterFunc(in_objs)

	Dim l_Cluster, l_ClusterList, l_SubComp, l_SubCompList

	set CreateClusterFunc = Nothing

	'--------------------------------------------------------------------
	' filter list by clusters/subcomponents; return subcomponents
	'--------------------------------------------------------------------
	set l_SubCompList = SIFilter(in_objs,siSubComponentFilter)

	'--------------------------------------------------------------------
	' create the cluster  
	'--------------------------------------------------------------------
	If Not TypeName (l_SubCompList) = "Nothing" then
		'here we pass true for S3D_CMDARG_CAN_CONNECT_TO_TAG
		'this means that the new cluster will be connected to the tag 
		'therefore any future change done to any topo operator that was
		'connected to the tag will update the new cluster accordingly.
		'EC Jan 2004

		'hum... after thinking more about it we prefer to play safe
		'and have the cluster not connected with the input tag
		'EC Feb 2004
		set l_ClusterList = CreateClusterFromSubComponent( l_SubCompList, , false )

		'--------------------------------------------------------------------
		' Just to make sure the memory of the component selection is cleared.
		'--------------------------------------------------------------------
		If l_SubCompList.Count > 0 then
			RemoveFromSelection l_SubCompList
		end if

		'--------------------------------------------------------------------
		' Select the cluster(s)
		'--------------------------------------------------------------------
		If l_ClusterList.Count > 0 then	
			SelectObj l_ClusterList
		end if

		set CreateClusterFunc = l_ClusterList
	End If
end function


'------------------------------------------------------------------------------
' NAME:			RemoveCluster
'
' INPUT:		list of clusters
'
' DESCRIPTION:  Delete list of clusters 
'------------------------------------------------------------------------------
sub RemoveCluster(in_str)

	Dim rtn, l_ClusterList

	'--------------------------------------------------------------------
	' filter list by clusters
	'--------------------------------------------------------------------
	set l_ClusterList = SIFilter(in_str,siClusterFilter)

	'--------------------------------------------------------------------
	' Delete clusters
	'--------------------------------------------------------------------
	DeleteObj l_ClusterList

end sub

'------------------------------------------------------------------------------
' NAME:			AddToCluster 	
'
' INPUT:		- unordered list of clusters and cluster subcomponents.
'				- action to take if the selected cluster has a material
'				and overlaps with another cluster.
'
' DESCRIPTION:	Add indices to cluster(s)
'------------------------------------------------------------------------------
sub AddToCluster( in_str, io_LocalMaterialsOverlapAction )

	Dim rtn, _
		l_Cluster, l_ClusterList, _
		l_SubComp, l_SubCompList, _
		l_Match, l_MatchedSubCompList, _
		l_Owners, l_ClusterWithMatList, l_ClusterMaterial, l_ExistingClusters
 
	'--------------------------------------------------------------------
	' filter list by clusters/subcomponents; return subcomponents
	'--------------------------------------------------------------------
	set l_ClusterList = SIFilter(in_str,siClusterFilter)			' clusters	
	set l_SubCompList = SIFilter(in_str,siSubComponentFilter)		' subcomponents	

	If Not TypeName (l_ClusterList) = "Nothing" And _
		Not TypeName (l_SubCompList) = "Nothing" then
		'--------------------------------------------------------------------
		' Add indices to cluster(s)
		'--------------------------------------------------------------------
		set l_MatchedSubCompList = CreateObject("XSI.Collection")
		set l_ClusterWithMatList = CreateObject("XSI.Collection")  

		for each l_Cluster in l_ClusterList
			' let's see if the cluster has a material

			for each l_SubComp in l_SubCompList
				set rtn = SIMatchSubComponent( l_Cluster, l_SubComp )
				l_Match = rtn.value("Result")
				if l_Match = True then

					SIAddToCluster l_Cluster, l_SubComp 
					l_MatchedSubCompList.Add l_SubComp
				end if
			next

			set l_ClusterMaterial = l_Cluster.Material

			if TypeName( l_ClusterMaterial ) = "Material" Then

				set l_Owners = l_ClusterMaterial.Owners

				for each l_CurrOwner in l_Owners
					if l_CurrOwner = l_Cluster then
						' the cluster owns this material
						l_ClusterWithMatList.Add l_Cluster
					end if
				next
			end if

		next

		'--------------------------------------------------------------------
		' Remove SubComponent indices from tag clusters
		'--------------------------------------------------------------------

		RemoveFromSelection l_MatchedSubCompList

		' let's see if some of the polygons found in l_SubComp 
		' overlap with any other cluster (with a material)

		if ( Not TypeName (l_ClusterWithMatList) = "Nothing" ) and ( Not IsEmpty (l_ClusterWithMatList) ) Then

			if l_ClusterWithMatList.count > 0 Then
				set l_ExistingClusters = ClusterNonOverlapEnforcement( l_ClusterWithMatList, l_ClusterMaterial, siJustReturnExistingClusters )

				if Not IsEmpty (l_ExistingClusters) Then
					If l_ExistingClusters.count > 0 Then

						'----------------------------------------------------------------------------
						' some clusters overlap so let's fix
						'----------------------------------------------------------------------------
						ResolveLocalMaterialsOverlap l_ClusterWithMatList, l_ExistingClusters, l_ClusterMaterial, io_LocalMaterialsOverlapAction
					end if
				end if
			end if

		end if


	End If

	if io_LocalMaterialsOverlapAction = siPromptUser then
		' just so siLetLocalMaterialsOverlap gets logged instead of the misleading siPromptUser 
		io_LocalMaterialsOverlapAction = siLetLocalMaterialsOverlap
	end if

end sub

'------------------------------------------------------------------------------
' NAME:			RemoveFromCluster 	
'
' INPUT:		unordered list of clusters and cluster subcomponents.
'
' DESCRIPTION:	Remove indices from cluster(s)
'------------------------------------------------------------------------------
sub RemoveFromCluster(in_str)

	Dim	rtn
	Dim l_Cluster, l_ClusterList
	Dim l_SubComp, l_SubCompList
	Dim l_Match,  l_MatchedSubCompList
 
	'--------------------------------------------------------------------
	' filter list by clusters/subcomponents; return subcomponents
	'--------------------------------------------------------------------
	set l_ClusterList = SIFilter(in_str,siClusterFilter)			' clusters	
	set l_SubCompList = SIFilter(in_str,siSubComponentFilter)		' subcomponents	

	If Not TypeName (l_ClusterList) = "Nothing" And _
		Not TypeName (l_SubCompList) = "Nothing" then
	'--------------------------------------------------------------------
	' Remove indices from cluster(s)
	'--------------------------------------------------------------------
	set l_MatchedSubCompList = CreateObject("XSI.Collection")

	for each l_Cluster in l_ClusterList
		for each l_SubComp in l_SubCompList
			set rtn = SIMatchSubComponent( l_Cluster, l_SubComp )
			l_Match = rtn.value("Result")
			if l_Match = True then
				SIRemoveFromCluster l_Cluster, l_SubComp
				l_MatchedSubCompList.Add l_SubComp
			end if
		next
	next

	'--------------------------------------------------------------------
	' Remove SubComponent indices from tag clusters
	'--------------------------------------------------------------------
	RemoveFromSelection l_MatchedSubCompList
	End If
end sub

'******************************************************************************
' ANIMATION
'******************************************************************************

'------------------------------------------------------------------------------
' NAME:			SaveKeyHotKeyProc
'
' DESCRIPTION:	Helper to call the appropriate SaveKey* command depending
'				on the animation preference.
'
'------------------------------------------------------------------------------
Sub SaveKeyHotKeyProc( )
	Dim l_NleKeyFrame, l_SaveKeyCommand, l_ModifiedOnly

	'--------------------------------------------------------------------
	' Get key time from NLE and the save key command pref
	'--------------------------------------------------------------------
	l_NleKeyFrame = CDbl(GetValue( "Project.Data.PlayControl.Key" ))
	l_SaveKeyCommand = GetValue( "preferences.animation.save_key_command" )
	l_ModifiedOnly   = GetValue( "preferences.animation.savekeymodified" )

	'--------------------------------------------------------------------
	' Then call the appropriate command based on the save key pref
	'--------------------------------------------------------------------
	If ( l_SaveKeyCommand = 0 ) Then
		SaveKey , l_NleKeyFrame,,,,l_ModifiedOnly
	ElseIf ( l_SaveKeyCommand = 1 ) Then
		SaveKeyOnKeyable , l_NleKeyFrame,,,, l_ModifiedOnly
	ElseIf ( l_SaveKeyCommand = 2 ) Then
		SaveKeyOnMarkedKeyable , l_NleKeyFrame,,,, l_ModifiedOnly
	ElseIf ( l_SaveKeyCommand = 3 ) Then
		SaveKeyOnCharacterKeySet
	Else
		Err.Raise siErrCancelled
	End If
End Sub

'------------------------------------------------------------------------------
' NAME:			SaveZeroKeyHotKeyProc
'
' DESCRIPTION:	Helper to save a zero key according to 
'				the animation preference.
'
'------------------------------------------------------------------------------
Sub SaveZeroKeyHotKeyProc( )
 Dim l_NleKeyFrame, l_SaveKeyCommand, l_ModifiedOnly
 
	'--------------------------------------------------------------------
	' Get key time from NLE and the save key command pref
	'--------------------------------------------------------------------
	l_NleKeyFrame = CDbl(GetValue( "Project.Data.PlayControl.Key" ))
	l_SaveKeyCommand = GetValue( "preferences.animation.save_key_command" )
	l_ModifiedOnly   = GetValue( "preferences.animation.savekeymodified" )

	'--------------------------------------------------------------------
	' Then call the appropriate command based on the save key pref
	'--------------------------------------------------------------------
	If ( l_SaveKeyCommand = 0 ) Then
		SaveKey , l_NleKeyFrame,0,,,l_ModifiedOnly
	ElseIf ( l_SaveKeyCommand = 1 ) Then
		SaveKeyOnKeyable , l_NleKeyFrame,0,,, l_ModifiedOnly
	ElseIf ( l_SaveKeyCommand = 2 ) Then
		SaveKeyOnMarkedKeyable , l_NleKeyFrame,0,,, l_ModifiedOnly
	ElseIf ( l_SaveKeyCommand = 3 ) Then
		SaveZeroKeyOnCharacterKeySet
	Else
		Err.Raise siErrCancelled
	End If
End Sub



'------------------------------------------------------------------------------
' NAME:		SaveKeyProc		
'
' INPUT:	- Objects to have keys saved
'			- Current Frame	(frames)
'			- Value
'
' DESCRIPTION:	Save a key at the "Key Time", and update the current time to be
'				the same as the key time.
'				
'------------------------------------------------------------------------------
sub SaveKeyProc( inputobjs, in_curframe, value, tolerance, layer, modified, autokeyscope, source )
	Dim l_NleKeyFrame, l_SaveKeyCommand

	'--------------------------------------------------------------------
	' Get key time from NLE and the savekey command pref
	'--------------------------------------------------------------------
	l_NleKeyFrame = CDbl(GetValue( "Project.Data.PlayControl.Key" ))
	l_SaveKeyCommand = GetValue( "preferences.animation.save_key_command" )

	'--------------------------------------------------------------------
	' Save the Key
	'--------------------------------------------------------------------
	if source = "FCurve" then
		'--------------------------------------------------------------------
		' Route the savekey to the appropriate one based on the savekey pref
		'--------------------------------------------------------------------
		If ( l_SaveKeyCommand = 1 ) Then
			SaveKeyOnKeyable inputobjs, l_NleKeyFrame, value, tolerance, layer, modified, autokeyscope, "FCurve"
		ElseIf ( l_SaveKeyCommand = 2 ) Then
			SaveKeyOnMarkedKeyable inputobjs, l_NleKeyFrame, value, tolerance, layer, modified, autokeyscope, "FCurve"
		ElseIf ( l_SaveKeyCommand = 3 ) Then
			SaveKeyOnCharacterKeySet
		Else
			SaveKey inputobjs, l_NleKeyFrame, value, tolerance, layer, modified, autokeyscope, "FCurve"
		End If
	elseif source = "Action" then
		SaveActionKey inputobjs, l_NleKeyFrame, value, tolerance
	else
		Err.Raise siErrCancelled
	end if
	
end sub

sub SaveKeyOnKeyableProc( inputobjs, in_curframe, value, tolerance, layer, modified, autokeyscope, source, markedonly )
	Dim l_NleKeyFrame

	' Get key time from NLE
	l_NleKeyFrame = CDbl(GetValue( "Project.Data.PlayControl.Key" ))

	' Save the Key
	If markedonly Then
		SaveKeyOnMarkedKeyable inputobjs, l_NleKeyFrame, value, tolerance, layer, modified, autokeyscope, "FCurve"
	Else
		SaveKeyOnKeyable inputobjs, l_NleKeyFrame, value, tolerance, layer, modified, autokeyscope, "FCurve"
	End If
end sub

'------------------------------------------------------------------------------
' NAME:		SISetKeyProc
'
' INPUT:	- Objects to have keys saved
'			- Current Frame	(frames)
'			- Value
'
' DESCRIPTION:	Set a key at the given time
'				
'------------------------------------------------------------------------------
sub SISetKeyProc( inputobjs, in_curframe, value, tolerance, prevvalue, haskey )
	' This command is obsolete so call SaveKey instead
	SaveKey inputobjs, in_curframe, value, tolerance
end sub

'------------------------------------------------------------------------------
' NAME:		SetKeyProc		
'
' INPUT:	- Objects to have keys saved
'			- Current Frame	(frames)
'			- Value
'
' DESCRIPTION:	Set a key at the "Key Time", and update the current time to be
'				the same as the key time.
'				
'------------------------------------------------------------------------------
sub SetKeyProc( inputobjs, in_curframe, value, tolerance, prevvalue, haskey )
	Dim l_NleKeyFrame

	'--------------------------------------------------------------------
	' Get key time from NLE
	'--------------------------------------------------------------------
	l_NleKeyFrame = CDbl(GetValue( "Project.Data.PlayControl.Key" ))

	'--------------------------------------------------------------------
	' Save the Key
	'--------------------------------------------------------------------
	SetKey inputobjs, l_NleKeyFrame, value, tolerance, prevvalue, haskey
end sub

'------------------------------------------------------------------------------
' NAME:			RemoveKeyHotKeyProc
'
' DESCRIPTION:	Helper to call the appropriate RemoveKey* command depending
'				on the animation preference.
'
'------------------------------------------------------------------------------
Sub RemoveKeyHotKeyProc( )
	Dim l_NleKeyFrame, l_SaveKeyCommand

	'--------------------------------------------------------------------
	' Get key time from NLE and the save key command pref
	'--------------------------------------------------------------------
	l_NleKeyFrame = CDbl(GetValue( "Project.Data.PlayControl.Key" ))
	l_SaveKeyCommand = GetValue( "preferences.animation.save_key_command" )

	'--------------------------------------------------------------------
	' Then call the appropriate command based on the save key pref
	'--------------------------------------------------------------------
	If ( l_SaveKeyCommand = 0 ) Then
		RemoveKey , l_NleKeyFrame
	ElseIf ( l_SaveKeyCommand = 1 ) Then
		RemoveKeyOnKeyable ,l_NleKeyFrame
	ElseIf ( l_SaveKeyCommand = 2 ) Then
		RemoveKeyOnMarkedKeyable ,l_NleKeyFrame
	ElseIf ( l_SaveKeyCommand = 3 ) Then
		RemoveKeyOnCharacterKeySet
	Else
		Err.Raise siErrCancelled
	End If
End Sub

'------------------------------------------------------------------------------
' NAME:		SetSoloIndexIfRequired
'
' INPUT:	- Objects on which a cluster shape combiner is somewhat attached
'			- 
'			- 
'
' DESCRIPTION:	Set the solo shape index of the shape combiner to the last shape
'               if in solo mode. This is required when doing a save shape key in
'               solo mode otherwise the user will witness a solo index.
'				
'------------------------------------------------------------------------------
sub SetSoloIndexIfRequired( in_obj )
    Dim l_prim, l_comb, l_subComp    
    if typename(in_obj)= "Primitive" then
        set l_prim = in_obj
    elseif typename(in_obj) = "CollectionItem" then
        set l_prim = in_obj.SubComponent.Parent3DObject.ActivePrimitive
    elseif typename(in_obj) = "Cluster" then
        set l_prim = in_obj.Parent.Parent
    else
        set l_prim = in_obj.ActivePrimitive
    end if
    
    set l_comb = Dictionary.GetObject(l_prim.fullname & ".ClusterShapeCombiner" )    
    if false  = l_comb.ShowResult.value  then        
        l_comb.SoloIndex.Value = l_comb.GetNumInstancesInGroup(2)
    end if

end sub


'------------------------------------------------------------------------------
' NAME:		SaveShapeKeyProc		
'
' INPUT:	- Objects to have shapekeys saved
'			- 
'			- 
'
' DESCRIPTION:	Save a shapekey at the current time, and update the current time to be
'				the same as the key time.
'				
'------------------------------------------------------------------------------
function SaveShapeKeyProc( InputObjs, Compound, Track, Time, Duration, Mode, Name, Overwrite, io_shapeType )
	Dim l_NleKeyFrame
	Dim l_InputObj, l_ShapeKey
	dim l_constructionmodeautoupdate, l_constructionmode

	
	l_constructionmode = GetValue( "context.constructionmode" )

	'''''''''''' Warn if not done in shape authoring mode. 	''''''
	if l_constructionmode <> siConstructionModePrimaryShape and l_constructionmode <> siConstructionModeSecondaryShape then

		l_Prompt =	XSIUtils.Translate( IDS_SHAPE_AUTHORING, "XSISCRIPTS" )
		
		if SIMsgBox( l_Prompt, vbOKCancel + vbInformation, XSIUtils.Translate( "Warning", "XSISCRIPTS" ), vbOK ) = vbCancel then
			Err.Raise siErrCancelled
		end if
				
	end if
	''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''


	'''''''''''' Construction mode automatic updating ''''''''''''
	l_constructionmodeautoupdate = GetValue( "preferences.modeling.constructionmodeautoupdate" )

	if l_constructionmodeautoupdate then

		if l_constructionmode <> siConstructionModePrimaryShape then
			SetValue "context.constructionmode", siConstructionModePrimaryShape
		end if
		 
	end if
	''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

	'--------------------------------------------------------------------
	' Get key time from NLE
	'--------------------------------------------------------------------
	l_NleKeyFrame = CDbl(GetValue( "Project.Data.PlayControl.Key" ))
		
	'--------------------------------------------------------------------
	' Save the Key
	'--------------------------------------------------------------------
	io_shapeType = GetValue( "Preferences.shape_animation.ShapeReference" )

	if InputObjs.count = 1 then
		ShapeKey = StoreShapeKey( InputObjs(0), Name, io_shapeType )
		set l_Clip = ApplyShapeKey( ShapeKey,Compound,Track,l_NleKeyFrame,Duration,Mode,Name,Overwrite )
                SetSoloIndexIfRequired InputObjs(0)                
		
		AutoInspect ShapeKey

	else
		set l_ShapeKeys = CreateObject("XSI.Collection")
		set l_Clips = CreateObject("XSI.Collection")
		set l_Objects = CreateObject("XSI.Collection")

		for each l_InputObj in InputObjs
			if not l_InputObj.Type = "pntSubComponent" then
				set ShapeKey = StoreShapeKey( l_InputObj, Name, io_shapeType )
				l_ShapeKeys.Add ShapeKey
				l_Objects.Add(l_InputObj)
			end if
		next

		for each l_ShapeKey in l_ShapeKeys
			set l_Clip = ApplyShapeKey( l_ShapeKey,,,l_NleKeyFrame,Duration,Mode,,Overwrite)
			l_Clips.Add l_Clip
			
		next
		
		for each l_obj in l_Objects
			SetSoloIndexIfRequired l_obj 
		next
		AutoInspect l_ShapeKeys

		set SaveShapeKeyProc = l_Clips
	end if

	'--------------------------------------------------------------------
	' Set the current frame to key frame (if they're different)
	'--------------------------------------------------------------------

	If Not Time = l_NleKeyFrame Then
		Time = l_NleKeyFrame
		SetValue "Project.Data.PlayControl.Current", l_NleKeyFrame
	End If

end function

'------------------------------------------------------------------------------
' NAME:		ApplyShapeKeyProc		
'
' INPUT:	- Objects to have shapekeys applied
'			- 
'			- 
'
' DESCRIPTION:	Apply a shapekey at the current time, and update the current time to be
'				the same as the key time.
'				
'------------------------------------------------------------------------------
function ApplyShapeKeyProc( InputObjs, Compound, Track, Time, Duration, Mode, Name, Overwrite )
	Dim l_NleKeyFrame


	'--------------------------------------------------------------------
	' Get key time from NLE
	'--------------------------------------------------------------------
	l_NleKeyFrame = CDbl(GetValue( "Project.Data.PlayControl.Key" ))
		
	'--------------------------------------------------------------------
	' Save the Key
	'--------------------------------------------------------------------
	set ApplyShapeKeyProc = ApplyShapeKey( InputObjs, Compound, Track, l_NleKeyFrame, _
		Duration, Mode, Name, Overwrite )

	'--------------------------------------------------------------------
	' Set the current frame to key frame (if they're different)
	'--------------------------------------------------------------------

	If Not Time = l_NleKeyFrame Then
		Time = l_NleKeyFrame
		SetValue "Project.Data.PlayControl.Current", l_NleKeyFrame
	End If

end function

'------------------------------------------------------------------------------
' NAME:		StoreShapeKeyProc		
'
' INPUT:	- Objects to have shapekeys stored
'			- 
'			- 
'
' DESCRIPTION:	Store a shape key and inspect its property page
'				
'------------------------------------------------------------------------------
sub StoreShapeKeyProc( InputObjs , Name , io_shapeType, io_Frame, io_Duration, io_Sampling, io_Content, in_bForceDeformStripping)

	Dim l_InputObj, l_constructionmodeautoupdate, l_constructionmode, l_Prompt

	io_shapeType = GetValue( "Preferences.shape_animation.ShapeReference" )

	l_constructionmode = GetValue( "context.constructionmode" )
	l_constructionmodeautoupdate = GetValue( "preferences.modeling.constructionmodeautoupdate" )

	'''''''''''' Warn if not done in shape authoring mode. 	''''''
	if l_constructionmode <> siConstructionModePrimaryShape and l_constructionmode <> siConstructionModeSecondaryShape then
		
		l_Prompt =	XSIUtils.Translate( IDS_SHAPE_AUTHORING, "XSISCRIPTS" )
		
		if SIMsgBox( l_Prompt, vbOKCancel + vbInformation, XSIUtils.Translate( "Warning", "XSISCRIPTS" ), vbOK ) = vbCancel then
			Err.Raise siErrCancelled
		end if
				

	end if
	''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

	'''''''''''' Construction mode automatic updating ''''''''''''

	if l_constructionmodeautoupdate then

		if l_constructionmode <> siConstructionModePrimaryShape then
			SetValue "context.constructionmode", siConstructionModePrimaryShape
		end if
		 
	end if
	''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''


	'--------------------------------------------------------------------
	' Store the Key
	'--------------------------------------------------------------------
	if InputObjs.count = 1 then
		set ShapeKey = StoreShapeKey( InputObjs(0), Name, io_shapeType, io_Frame, io_Duration, io_Sampling, io_Content, in_bForceDeformStripping )
		AutoInspect ShapeKey
	else
		set l_ShapeKeys = CreateObject("XSI.Collection")

		for each l_InputObj in InputObjs
			if not l_InputObj.Type = "pntSubComponent" then
				set ShapeKey = StoreShapeKey( l_InputObj, Name, io_shapeType, io_Frame, io_Duration, io_Sampling, io_Content, in_bForceDeformStripping )
				l_ShapeKeys.Add ShapeKey
			end if
		next

		AutoInspect l_ShapeKeys
	end if

end sub

'------------------------------------------------------------------------------
' NAME:		SelectShapeKeyProc		
'
' INPUT:	- Objects to have shapekeys stored
'			- 
'			- 
'
' DESCRIPTION:	Select shape keys
'				
'------------------------------------------------------------------------------
function SelectShapeKeyProc( InputObj, SourceObjs, io_shapeType, in_Relational, in_Apply)
	Dim l_SourceObjs, l_GeneratePset
	Dim l_apply, l_relational

	
	l_SourceObjs = ""
	in_Relational = GetValue( "Preferences.shape_animation.SelectShapeKey_Relational" )
	in_Apply = GetValue( "Preferences.shape_animation.SelectShapeKey_ApplyShapes" )
	io_shapeType = GetValue( "Preferences.shape_animation.ShapeReference" )

	set l_ShapeKeys = SelectShapeKey( InputObj, l_SourceObjs , io_shapeType, in_Relational, in_Apply)

	set SourceObjs = l_SourceObjs

	AutoInspect l_ShapeKeys
	set SelectShapeKeyProc = l_ShapeKeys

end function

'------------------------------------------------------------------------------
' NAME:		ConvertShapeReferenceModeProc		
'
' INPUT:	- Collection containing clusters which shape animation mode we want to convert
'			- New shape reference mode to convert to
'
' DESCRIPTION:	Convert the shape animation mode of a collection of clusters to a new mode
'				
'------------------------------------------------------------------------------
sub ConvertShapeReferenceModeProc( InputObjs , byref io_ShapeMode)

	Dim l_InputObj

	'
	' Build the Dialog to collect user input
	'
		
	' Keep this around so it's easier to regenerate a new pset/preset if needed (Rejean's technique :-)
	l_GeneratePset = FALSE

	l_CustomParam = "Scene_Root.ConvertShapeReferenceMode"

	if (l_GeneratePset = TRUE) then
		' Create a custom sequence wizard propery
		SIAddProp "Custom_parameter_list", "Scene_Root", , "ConvertShapeReferenceMode" 
		
		'
		' Add custom parameters
		'

		' Choice of shape reference mode
		SIAddCustomParameter l_CustomParam , "ShapeReferenceMode", siInt2, 0, 0, 3, , siPersistable, 0, 3, "ShapeReferenceMode", "The new shape reference mode"

	Else
		' We have a preset already for this custom pset, for which we have defined a SPDL file
		SIAddProp "ConvertShapeReferenceMode", "Scene_Root", , "ConvertShapeReferenceMode"
	End if	

	'Set the default value of the symmetry plane to be ZY (x=0) - note, there should really be a memory for this setting
	'to store what the last application of the command set
	SetValue l_CustomParam & ".ShapeReferenceMode", 0

	'Launch the dialog and wait for OK or Cancel to pressed.
	If FWizardDialog(l_CustomParam,"Convert Shape Reference mode") = vbOk Then

		'Read the parameters of the property page
		io_ShapeMode = GetValue( l_CustomParam & ".ShapeReferenceMode") 
		DeleteObj l_CustomParam
	Else
		DeleteObj l_CustomParam
		Err.Raise siErrCancelled
	End If

	set l_InObjsExpanded = InputObjs.Expand
	set l_InClusters = SIFilter( l_InObjsExpanded, "cluster" )
	set l_InObjects = SIFilter( l_InObjsExpanded, "geometry" )

	if Not TypeName( l_InClusters ) = "Nothing" then
		for each l_Cluster in l_InClusters
			if l_Cluster.Type = "pnt" then
				ConvertShapeReferenceMode l_Cluster, io_ShapeMode 
			end if
		next
	end if

	if Not TypeName( l_InObjects ) = "Nothing" then
		for each l_InputObj in l_InObjects
			for each l_Cluster in l_InputObj.activeprimitive.geometry.Clusters
				ConvertShapeReferenceMode l_Cluster, io_ShapeMode 
			next
		next
	End if

end sub


'------------------------------------------------------------------------------
' NAME:		SaveDeformKeyProc
'
' INPUT:	The current selection (can be a cluster, a point or a primitive)
'
' DESCRIPTION: Save a Pose-Based Deformation Key
'------------------------------------------------------------------------------
sub SaveDeformKeyProc ( InputObjs, in_ClusterShapeKey )

	dim l_constructionmodeautoupdate, l_constructionmode

	set l_Selection = GetValue( "SelectionList" )
	
	l_Time = CDbl(GetValue( "Project.Data.PlayControl.Current" ))

	'''''''''''' Construction mode automatic updating ''''''''''''
	l_constructionmodeautoupdate = GetValue( "preferences.modeling.constructionmodeautoupdate" )

	if l_constructionmodeautoupdate then

		l_constructionmode = GetValue( "context.constructionmode" )

		if l_constructionmode <> siConstructionModePrimaryShape then
			SetValue "context.constructionmode", siConstructionModePrimaryShape
		end if
		 
	end if
	''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

	' If a cluster key is provided, then only apply the shape key
	if not in_ClusterShapeKey = "" then 
		' ApplyShapeKeyProc( InputObjs, Compound, Track, Time, Duration, Mode, Name, Overwrite )
		ApplyShapeKeyProc in_ClusterShapeKey, l_Selection, l_Selection, l_Time, -1, 6, "PoseDeform", 0 
	else
		' Otherwise save a new Shape key in Pose-Based Deform mode
		' SaveShapeKey( InputObj, [Compound], [Track], [Time], [Duration], [Mode], [Name], [Overwrite], [RefMode] )
		SaveShapeKeyProc InputObjs, l_Selection, l_Selection, l_Time, -1, 6, "PoseDeform", 0, siShapeLocalReferenceMode
	end if 

	' MCF TBD Maybe I should rather to an Apply Deform Key separate from the SaveDeformKey
end sub


'------------------------------------------------------------------------------
' NAME:		ApplyDeformKeyProc
'
' INPUT:	The current selection (Should be a cluster key shape)
'
' DESCRIPTION: Apply a Pose-Based Deformation Key using the selected key shape
'------------------------------------------------------------------------------
sub ApplyDeformKeyProc ( InputObjs )

	set l_Selection = GetValue( "SelectionList" )
	
	l_Time = CDbl(GetValue( "Project.Data.PlayControl.Current" ))

	' ApplyShapeKeyProc( InputObjs, Compound, Track, Time, Duration, Mode, Name, Overwrite )
	ApplyShapeKeyProc InputObjs, l_Selection, l_Selection, l_Time, -1, 6, "PoseDeform", 0 

end sub


'------------------------------------------------------------------------------
' NAME:		LinkDeformProc
'
' INPUT:	The cluster and the params to link
'
' DESCRIPTION: Setup a Pose-Based Deformation with the given cluster and parameters
'------------------------------------------------------------------------------
sub LinkDeformProc ( byref Cluster, byref Params, byref LinkWithOri )

	dim l_constructionmodeautoupdate, l_constructionmode

	'''''''''''' Construction mode automatic updating ''''''''''''

	l_constructionmodeautoupdate = GetValue( "preferences.modeling.constructionmodeautoupdate" )
	if l_constructionmodeautoupdate then

		l_constructionmode = GetValue( "context.constructionmode" )
		if l_constructionmode <> siConstructionModePrimaryShape then
			SetValue "context.constructionmode", siConstructionModePrimaryShape
		end if
		 
	end if
	''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

	LinkDeform Clusters, Params, LinkWithOri 

end sub


'------------------------------------------------------------------------------
' NAME:		LinkDeformWithOriProc 
'
' INPUT:	The cluster and the params to link
'
' DESCRIPTION: Setup a Pose-Based Deformation with the given cluster and parameters
'------------------------------------------------------------------------------
sub LinkDeformWithOriProc ( byref Cluster, byref Params, byref LinkWithOri )

	dim l_constructionmodeautoupdate, l_constructionmode

	'''''''''''' Construction mode automatic updating ''''''''''''

	l_constructionmodeautoupdate = GetValue( "preferences.modeling.constructionmodeautoupdate" )
	if l_constructionmodeautoupdate then

		l_constructionmode = GetValue( "context.constructionmode" )
		if l_constructionmode <> siConstructionModePrimaryShape then
			SetValue "context.constructionmode", siConstructionModePrimaryShape
		end if
		 
	end if
	''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

	l_Params = ""

	LinkDeformWithOri Clusters, l_Params, LinkWithOri 

	set Params = l_Params

end sub




'------------------------------------------------------------------------------
' NAME:		OffsetValueMapProc
'
' INPUT:	- Objects to have value maps offset
'			- Current Frame	(frames)
'			- Value
'
' DESCRIPTION:	Offset the value map for the clip at the "Key Time", and update
'				the current time to be the same as the key time.
'				
'------------------------------------------------------------------------------
sub OffsetValueMapProc( inputobjs, in_typeflag, in_curframe, value )
	Dim l_NleKeyFrame

	'--------------------------------------------------------------------
	' Get key time from NLE
	'--------------------------------------------------------------------
	l_NleKeyFrame = CDbl(GetValue( "Project.Data.PlayControl.Key" ))

	'--------------------------------------------------------------------
	' Save the Key
	'--------------------------------------------------------------------
	OffsetValueMap inputobjs, in_typeflag, l_NleKeyFrame, value

	'--------------------------------------------------------------------
	' Set the current frame to keyframe (if they're different)
	'--------------------------------------------------------------------

	If Not in_curframe = l_NleKeyFrame Then
		in_curframe = l_NleKeyFrame
		SetValue "Project.Data.PlayControl.Current", l_NleKeyFrame
	End If

end sub


'------------------------------------------------------------------------------
' NAME:		SaveOffsetKeysProc
'
' INPUT:	- Objects to save offset keys for
'			- Type of input to process 
'			- Current Frame	(frames)
'
' DESCRIPTION:	Save an offset key at the "Key Time", and update the current time to be
'				the same as the key time.
'				
'------------------------------------------------------------------------------
sub SaveOffsetKeysProc( in_InputObjs, in_TypeFlag, in_Frame )
	Dim l_NleKeyFrame

	'--------------------------------------------------------------------
	' Get key time from NLE
	'--------------------------------------------------------------------
	l_NleKeyFrame = CDbl(GetValue( "Project.Data.PlayControl.Key" ))

	'--------------------------------------------------------------------
	' Save the Key
	'--------------------------------------------------------------------
	SaveOffsetKeys in_InputObjs, in_TypeFlag, l_NleKeyFrame

	'--------------------------------------------------------------------
	' Set the current frame to keyframe (if they're different)
	'--------------------------------------------------------------------
	If Not in_Frame = l_NleKeyFrame Then
		in_Frame = l_NleKeyFrame

		' Need this refresh as the effect curves don't seem to get pulled when
		' I change the time in the following SetValue
		refresh

		SetValue "Project.Data.PlayControl.Current", l_NleKeyFrame
	End If

end sub


'------------------------------------------------------------------------------
' NAME:		ResetEffectAtFrameUIProc
'
' INPUT:	- Clips 
'			- Current Frame	(frames)
'
' DESCRIPTION:
'				
'------------------------------------------------------------------------------
sub ResetEffectAtFrameUIProc( in_Clips, in_Frame )
	Dim l_NleKeyFrame

	'--------------------------------------------------------------------
	' Get key time from NLE
	'--------------------------------------------------------------------
	l_NleKeyFrame = CDbl(GetValue( "Project.Data.PlayControl.Key" ))

	'--------------------------------------------------------------------
	' Save the Key
	'--------------------------------------------------------------------
	ResetEffectAtFrame in_Clips, l_NleKeyFrame

	'--------------------------------------------------------------------
	' Set the current frame to keyframe (if they're different)
	'--------------------------------------------------------------------
	If Not in_Frame = l_NleKeyFrame Then
		in_Frame = l_NleKeyFrame
		SetValue "Project.Data.PlayControl.Current", l_NleKeyFrame
	End If

end sub


'******************************************************************************
' MISC SUBROUTINES
'******************************************************************************

'------------------------------------------------------------------------------
' NAME:			CreatePointClusterPropertiesFunc (lucer)
'
' INPUT:		in_objs
'				in_clsname      - Name of the cluster to create, if any
'				in_name			- Weight Map property name
'				in_proppreset	- Weight Map property preset.
'
' DESCRIPTION:	Created from the code of CreateWeightMap, adds
' a point cluster property on the selected objects, creates
' clusters if necessary and log meaningful errors
'
'------------------------------------------------------------------------------
function CreatePointClusterPropertiesFunc(in_objs, in_clsname, in_name, in_proppreset)
	Dim l_Object, l_ObjectList, l_ObjList, l_OpPropList, l_OpList, _
		l_CreatedObjs, FoundSomething, l_Cluster, l_ClusterList, l_SubCompList, _
		l_ExistingCluster, FoundExistingCluster

	set CreatePointClusterPropertiesFunc = nothing
	
	'--------------------------------------------------------------------
	' create an object list
	'--------------------------------------------------------------------
	set l_ObjList = CreateObject("XSI.Collection")
	FoundSomething = false

	'--------------------------------------------------------------------
	' create a complete cluster for each 3D objects
	'--------------------------------------------------------------------
	set l_ObjectList = SIFilter( in_objs, siObjectFilter )

	if Not TypeName( l_ObjectList ) = "Nothing" then

		' if there are any objects, create clusters for them
		for each l_Object in l_ObjectList
			if l_Object.Type = "polymsh" Or l_Object.Type = "surfmsh" Or l_Object.Type = "crvlist" Or l_Object.Type = "hair" then
			
				' This checks if there's really a component on the geometry that's compatible
				' with adding weight maps (my guess, this code was there already - rg)
				if l_Object.obj.Nb0D > 0 Then
					
					' We will try to see if there's already a full cluster called "in_clsname"
					' in which case we will add the weight map to that existing cluster
					' instead of creating a new one. We verify that it's effectively a Point
					' cluster, and that it contains as many components as the entire geometry
					FoundExistingCluster = false
					
					set l_ExistingCluster = Nothing
					On Error Resume Next

					set l_ExistingCluster = l_Object.activeprimitive.geometry.Clusters( in_clsname )
					On Error Goto 0
					
					if TypeName(l_ExistingCluster) <> "Nothing" then
						if l_ExistingCluster.Type = "pnt" then
							if l_ExistingCluster.elements.count = l_Object.obj.Nb0D then
								FoundExistingCluster = true
								l_ObjList.Add l_ExistingCluster
							end if
						end if
					end if
					set l_ExistingCluster = Nothing
					
					' If we haven't been able to find an existing cluster then we create a new one
					if not FoundExistingCluster then
						set l_Cluster = SICreateCluster( "Pnt", in_clsname, l_Object, 1 ).value("Value")
						l_ObjList.Add l_Cluster
					end if
					FoundSomething = true
				else
					LogMessage "Object " & l_Object & " is not valid for this operation (ignored).", siInfo 
				end if
			else
					LogMessage "Object " & l_Object & " is not a geometry object (ignored).", siInfo 
			end if
		next

	end if

	'--------------------------------------------------------------------
	' List of all clusters 
	'--------------------------------------------------------------------
	set l_ClusterList = SIFilter(in_objs, siClusterFilter & "," & siSubComponentFilter)
	
	if TypeName(l_ClusterList) <> "Nothing" then

		for each l_Cluster in l_ClusterList
			
			' check for the tag cluster, only accept it on poly and nurbs (not crvlist)
			if InStr( 1, l_Cluster.Type, "SubComponent", vbTextCompare ) > 0 then

				'  check for point clusters, only
				if  l_Cluster.Type <> "pntSubComponent" then 
					LogMessage l_Cluster & " is not a point geometry component (ignored).", siInfo 
				else
					Dim l_Geometry

					set l_Geometry = FGetSubComponentGeometry(l_Cluster)

					if ( l_Geometry.Type = "polymsh" Or l_Geometry.Type = "surfmsh" ) then	
						l_ObjList.Add l_Cluster
						FoundSomething = true
					else
						LogMessage l_Cluster & _
							" is not a component on a 2D geometry (ignored).", siInfo 
					end if 
				end if 
			else	
				' normal clusters - only accept point clusters
				if ( l_Cluster.type = "pnt") then
						l_ObjList.Add l_Cluster
						FoundSomething = true
				else
						LogMessage l_Cluster & _
							" is not a point cluster (ignored).", siInfo 
				end if
			end if
		next
	end if

	if Not FoundSomething then
		set CreatePointClusterPropertiesFunc = nothing
	else
		'--------------------------------------------------------------------
		' Create the  properties onto those clusters. 
		'--------------------------------------------------------------------
		dim out_PropList
		set out_PropList = FAddProp(in_proppreset, l_ObjList, siDefaultPropagation, _
			in_name, l_ClusterList, l_SubCompList )

		set CreatePointClusterPropertiesFunc = out_PropList
	end if


end function

'------------------------------------------------------------------------------
' NAME:			CreateWeightMap	
'
' INPUT:		in_oppreset		- Weight Map operator preset.
'				in_objs
'				in_name			- Weight Map property name
'				in_proppreset	- Weight Map property preset.
'				in_select		- if true, select and inspect the resulting props.
'
' DESCRIPTION:	Create a cluster weight map. A cluster weight map consists of
'				an operator and a property. If the input objects contain
'				subcomponent definitions i.e. selected indices then a cluster
'				will be created in its places.
'
'------------------------------------------------------------------------------
function CreateWeightMap(in_oppreset, in_objs, in_name, in_proppreset, in_select)

	Dim l_PropList, l_OpPropList
	set l_PropList = CreatePointClusterPropertiesFunc( in_objs, "WeightMapCls", in_name, in_proppreset )
	
	if Not TypeName (l_PropList) = "Nothing" then
		
		'
		' The input argument to ApplyOp is an Input/Output argument. This
		' means that the list turns into a connection set.
		set l_OpPropList = l_PropList

		'--------------------------------------------------------------------
		' 2) Apply the weight map operator to the weight map
		'--------------------------------------------------------------------
		dim l_OpList
		set l_OpList = ApplyOp(in_oppreset, l_OpPropList)

		if in_select = true then
			'--------------------------------------------------------------------
			' Select the property(s); if there are any.
			'--------------------------------------------------------------------
			if Not TypeName (l_PropList) = "Nothing" then
				' convert property list to a string for selection because for some
				' reason the selection object cannot use the newly created list.
				SelectObj  l_PropList
			end if

			'--------------------------------------------------------------------
			' Inspect the operator(s); if there are any.
			'--------------------------------------------------------------------

			if Not TypeName (l_OpList) = "Nothing" then
				AutoInspect l_PropList
			end if
		end if
	else
		LogMessage XSIUtils.Translate( IDS_NO_VALID_OBJECTS_FOR_CLSPROP, "XSISCRIPTS", "weight maps" ), siInfo 
	end if

	set CreateWeightMap = l_PropList

end function


'******************************************************************************
' EXPRESSION SUBROUTINES
'******************************************************************************

'------------------------------------------------------------------------------
' NAME:			AddExprProc
'
' INPUT:		selected list of ojects onto which to add an expression. 
'				 
'
' DESCRIPTION:	adds an expression on the animatable parameters of the input list.
'				Opens the expression editor on the created expressions
'------------------------------------------------------------------------------
sub AddExprProc( in_expr_targets, in_expr_string, in_disable_auto_inspect )
	Dim exprObjs

	'--------------------------------------
	' First create the expressions 
	'--------------------------------------
	set exprObjs = SetExpr( in_expr_targets, in_expr_string )

	'---------------------------------
	' Inspect the expressions 
	'----------------------------------
	if (FAutoInspectEnabled) And (Not in_disable_auto_inspect) Then
		EditExpr in_expr_targets 
	end if

end sub

'******************************************************************************
' CREATE CURVES
'******************************************************************************

'------------------------------------------------------------------------------
' NAME:		CreateCurve
'
' INPUT:	- Degrees
'			- Interpolated
'			- Points

'
' DESCRIPTION: Create a curve.
'------------------------------------------------------------------------------
sub CreateCurve (in_nDegree, in_bInterpolated, in_aPoints, in_bLocal, out_Value)
	Dim l_pCurve

	'--------------------------------------------------------------------
	' Create the curve
	' Return value : l_pCurve(1) -> CreatedObj
	'--------------------------------------------------------------------
	set l_pCurve = SICreateCurve (,in_nDegree,in_bInterpolated)
	set out_Value = l_pCurve
	SISetCurvePoints l_pCurve, in_aPoints, in_bLocal
end sub

'******************************************************************************
' UI SCRIPTS
'******************************************************************************

'------------------------------------------------------------------------------
' NAME:		InspectObjProc		
'
' INPUT:	in_InputObjs
'			in_Keywords
'			in_Title
'			in_Mode
'           in_Throw
'
' DESCRIPTION: Prompt the user for a confirmation before changing a shared
' property
'				
'------------------------------------------------------------------------------
function InspectObjProc (in_InputObjs, in_Keywords, in_Title, in_Mode, in_Throw)

	if TypeName(in_InputObjs) <> "Nothing" then
		l_Prompt = XSIUtils.Translate( IDS_EDIT_SHARED_PROPERITES, "XSISCRIPTS" )
		call FConfirmMakeLocal(in_InputObjs, siDefaultPropagation, l_Prompt)

		InspectObjProc = InspectObj( in_InputObjs, in_Keywords, in_Title, in_Mode, in_Throw)
	end if
	InspectObjProc = True
end function

'------------------------------------------------------------------------------
' NAME:		MakeLocalFunc		
'
' INPUT:	in_Inputobjs
'
' DESCRIPTION: Make local copies of all shared objects
'				
'------------------------------------------------------------------------------
function MakeLocalFunc( in_Inputobjs, in_PropagationType )
	Dim l_NormalSharedObjs, l_NestedSharedObjs, l_RootSharedObjs, l_NestedSharedStr

	set MakeLocalFunc = Nothing

	set l_NormalSharedObjs = FGetSharedObjects( in_Inputobjs, l_NestedSharedObjs, l_RootSharedObjs )

	'
	' Take the string name as the components may be invalidated in the path as
	' part of the make local.
	'
	if TypeName(l_NestedSharedObjs) <> "Nothing" then
		l_NestedSharedStr = CStr(l_NestedSharedObjs)
	end if

	if TypeName(l_NormalSharedObjs) <> "Nothing" then
		Dim l_Selected

		set l_Selected = RemoveFromSelection( l_NormalSharedObjs )

		set MakeLocalFunc = SIMakeLocal( l_NormalSharedObjs, in_PropagationType )

		' Assume we CANNOT be called with a mixture of unselected and selected shared psets.
		' otherwise we would have to figure out which of the shared psets is selected and
		' only selected its local copy.
		'
		if TypeName( l_Selected ) <> "Nothing" then
			AddToSelection( MakeLocalFunc )
		end if
	end if


	if TypeName(l_NestedSharedObjs) <> "Nothing" then
		' @TODO: handle case: obj.mat(s).shader1.shader2(s). mat and shader2
		' are selected and we make local shader1. The mat will be removed from
		' the selection but shader2 shader1 will not.

		Dim l_NestedUnsharedObjs, l_UnsharedObjs, l_SelectedNested, l_SelectedRoot

		set l_SelectedRoot = RemoveFromSelection( l_RootSharedObjs )
		set l_SelectedNested = RemoveFromSelection( l_NestedSharedObjs )

		set l_UnsharedObjs = SIMakeLocal( l_RootSharedObjs, in_PropagationType )

		if TypeName(l_UnsharedObjs) <> "Nothing" then

			' find nested unshared objects using string component path
			set l_NestedUnsharedObjs = l_NestedSharedObjs
			l_NestedUnsharedObjs.clear
			l_NestedUnsharedObjs.items = l_NestedSharedStr

			if l_NestedUnsharedObjs.count <> 0 then
				if TypeName(MakeLocalFunc) <> "Nothing" then
					MakeLocalFunc.AddItems l_NestedUnsharedObjs 
				else
					set MakeLocalFunc = l_NestedUnsharedObjs
				end if
			end if

			' update selection
			if TypeName( l_SelectedRoot ) <> "Nothing" then
				AddToSelection( l_UnsharedObjs )
			end if

			if TypeName( l_SelectedNested ) <> "Nothing"  then
				AddToSelection( l_NestedUnsharedObjs )
			end if
		end if						
	end if

end function

'------------------------------------------------------------------------------
' NAME:		MakeLocalProc		
'
' INOUT:	io_Inputobjs			input object; share objects replace by locals
' INPUT:	in_PropagationType		add local properties in branch or node
'
' DESCRIPTION: Make local copies of all shared objects
'
' Script called from UI to make property local.
'				
'------------------------------------------------------------------------------
sub MakeLocalProc( io_Inputobjs, in_PropagationType )
	Dim l_Prompt

	l_Prompt = XSIUtils.Translate("You are about to make local copy of one or more shared objects. Do you wish to continue?", "XSISCRIPTS" )
	call FConfirmMakeLocal(in_InputObjs, in_PropagationType, l_Prompt)
end sub

'------------------------------------------------------------------------------
' NAME:		AutoInspect		
'
' INPUT:	inputobjs
'
' DESCRIPTION: Auto inspect list of object
'				
'------------------------------------------------------------------------------
sub AutoInspectProc( in_Inputobjs, in_Title, in_Mode, in_Keywords )
    
	if FAutoInspectEnabled then				
		'--------------------------------------------------------------------
		' Inspect the object as modal in ImmediateMode.
		'--------------------------------------------------------------------
		Dim l_ConstructionMode
		l_ConstructionMode = GetValue( "context.ConstructionMode" )
		
		Dim l_bMode
		l_bMode = in_Mode

		if GetUserPref("OperationMode") then
			'' Check if we're inspecting a modeling operator. Inspect modal in that case
			for each oObj in in_InputObjs 
				if application.classname( oObj ) = "Operator" then
					if IsModelingOperator( oObj ) then
						l_bMode = siModal
						exit for
					end if
				end if
			next
		end if

		InspectObj in_Inputobjs, in_Keywords, in_Title, l_bMode
		
	end if

end sub

sub DeleteNoUndoProc ( in_InputObjs )
    Dim l_Prompt
	l_Prompt = FConfirmPrompt("You are about to delete and clear the undo stack.")
	if SIMsgBox(l_Prompt, (vbYesNo + vbQuestion), FConfirmTitle("Delete Object Permanently"), vbNo) = vbNo then
		Err.Raise siErrCancelled
	end if

    dim l_UndoLevel
    l_UndoLevel = application.Preferences.GetPreferenceValue("General.undo")
    SetValue "preferences.General.undo", 0    
    
    on error resume next
    DeleteObj in_InputObjs
    
    SetValue "preferences.General.undo", l_UndoLevel
end sub

'------------------------------------------------------------------------------
' NAME:		DeleteObjProc		
'
' INPUT:	N/A
'
' DESCRIPTION: Prompt the user for a confirmation before deleting shared properties
'				and also for Sources and clips
'				
'------------------------------------------------------------------------------
sub DeleteObjProc ( in_InputObjs )

	Dim l_SharedPSets, l_Materials, oMat

	' get list of shared psets.
	set l_SharedPSets = FilterPSet( in_InputObjs, siSharedPSet )
	'
	' Deal with Materials in selection
	'
	set l_Materials = SIFilter( in_InputObjs, "materialproperty" )
	if TypeName( l_Materials ) <> "Nothing" then
		set l_Parents = CreateObject("XSI.Collection")
		for each oMat in l_Materials
			if oMat.parent.type <> "library_source" then
				'
				' we need to unassign from its parent not delete it
				'
				if TypeName(l_SharedPSets) <> "Nothing" then
					l_SharedPSets.Remove oMat
				end if
				'
				' Remove it from the input list as we do not want to delete it
				'
				in_InputObjs.Remove oMat
				'
				' Add its parent to the list of objects to Unassign their material
				' from
				'
				Set oCollItem = CreateObject("XSI.CollectionItem")
				oCollItem.Value = oMat.parent
				if oMat.Branch then
					oCollItem.BranchFlag = siBranch
				end if
				l_Parents.Add oCollItem
				'
				' Remove it from the selection as it will be somehow gone as well
				'
				selection.Remove oMat	
			end if
		next
		l_Materials.RemoveAll
		if l_Parents.Count <> 0 then
			SIUnAssignMaterial l_Parents
		end if
	end if

	'-----------------------------------
	' Validation for shared properties
	'-----------------------------------
	if Not TypeName(l_SharedPSets) = "Nothing" Then
		Dim l_SharePset, l_PrimaryOwner, l_Prompt

		'
		' Do not attempt to delete Scene_Root properties.
		'
		for each l_SharePset in l_SharedPSets
			set l_PrimaryOwner = l_SharePset.Owners(0)

			If l_PrimaryOwner.IsEqualTo(ActiveSceneRoot) Then
				l_SharedPSets.Remove l_SharePset
			End If
			
			' If a material has only one owner left and it's a library, it's not shared.
			If TypeName( l_SharePset ) = "Material" And _
			   l_SharePset.Owners.Count = 1 And _
			   TypeName( l_PrimaryOwner ) = "MaterialLibrary" Then
				l_SharedPSets.Remove l_SharePset
			End If
		next
	
		if l_SharedPSets.Count > 0 Then
			if FAutoInspectEnabled then
				if l_SharedPSets.Count > 1 Then
					l_Prompt = FConfirmPrompt("You are about to delete one or more shared properties.")
				else
					l_Prompt = FConfirmPrompt("You are about to delete a shared property. ")
				end if
	
				if SIMsgBox(l_Prompt, (vbYesNo + vbQuestion), FConfirmTitle("Delete Object"), vbYes) = vbNo then
					Err.Raise siErrCancelled
				end if
			end if
		end if
	end if

	'-----------------------------------
	' Validation for Sources & Clips
	'-----------------------------------
	Dim l_ImageSourceCollection, l_ImageClipCollection, l_Elem, l_AnimationSourceCollection, l_FileCacheSourceCollection, l_AudioSourceCollection

	set l_ImageSourceCollection = CreateObject("XSI.Collection")
	set l_ImageClipCollection = CreateObject("XSI.Collection")
	set l_AnimationSourceCollection = CreateObject("XSI.Collection")
	set l_FileCacheSourceCollection = CreateObject("XSI.Collection")
	set l_AudioSourceCollection = CreateObject("XSI.Collection")

	For Each l_Elem in in_InputObjs
		if FBelongsToFamily( l_Elem, "Image Sources" ) Then
			l_ImageSourceCollection.Add l_Elem 
			in_InputObjs.Remove l_Elem
		elseif FBelongsToFamily( l_Elem, "Image Clips" ) Then
			l_ImageClipCollection.Add l_Elem 
			in_InputObjs.Remove l_Elem
		elseif FBelongsToFamily( l_Elem, "Sources,Animation Actions") Then
			l_AnimationSourceCollection.Add l_Elem 
			in_InputObjs.Remove l_Elem
		elseif FBelongsToFamily( l_Elem, "FileCacheSources") Then
			l_FileCacheSourceCollection.Add l_Elem 
			in_InputObjs.Remove l_Elem
		elseif FBelongsToFamily( l_Elem, "Audio Sources") Then
			l_AudioSourceCollection.Add l_Elem 
			in_InputObjs.Remove l_Elem
		elseif typename (l_Elem) = "Model"  Then
			l_isRef = GetValue (l_Elem &".referenced_model" )
			if l_isRef Then
				DeleteRefModel l_Elem, in_InputObjs
			end if
		end if 
	Next

	DeleteSourcesClips l_ImageSourceCollection, "Image Source", "will also delete these clip(s): ", False, True
	DeleteSourcesClips l_ImageClipCollection, "Image Clip", "will remove the clip from all these object(s): ", False, True
	DeleteSourcesClips l_AnimationSourceCollection, "Animation Source", "will also delete these clip(s).", False, True
	DeleteSourcesClips l_FileCacheSourceCollection, "Cache Source", "will also delete these clip(s).", False, True
	DeleteSourcesClips l_AudioSourceCollection, "Audio Source", "will also delete these clip(s).", False, True

	'-----------------------------------
	' Do the real job!
	'-----------------------------------
	if in_InputObjs.Count > 0 Then
		DeleteObj in_InputObjs
	End if 

end sub

'------------------------------------------------------------------------------
' NAME:		DeleteRefModel 
'
' INPUT:	N/A
'
' DESCRIPTION: Delete the referenced model, the model source and all the 
'				different model clips resolution associated with the source.
'				
'------------------------------------------------------------------------------
sub DeleteRefModel ( ByRef in_model,  in_InputObjs)
	'Delete all the model clips.
	on error resume next

	'Find the source
	set l_modelclip = GetValue (in_model & ".model_clip")
		
	' Get the model source that this clip refer
	' and add it to the list of objects to delete. 
	' the Model Source will delete all clips associated with it, 
	' so all resolutions will be cleaned up. 
	if not Typename(l_modelclip) = "Empty" Then
		set l_children=  EnumElements( l_modelclip, TRUE)
		for each l_child in l_children
		if TypeName(l_child) = "CollectionItem" then
				in_InputObjs.Add l_child 
		end if
		next
	end if
end sub 

'------------------------------------------------------------------------------
' NAME:		FGetImageClipRealOwners
'
' INPUT:	N/A
'
' DESCRIPTION: Helper used by DeleteSourcesClips
'				
'------------------------------------------------------------------------------
Function FGetImageClipRealOwners( in_elem )
    
    if in_elem.IsClassOf( siImageClipID ) Then
        
        set FGetImageClipRealOwners = CreateObject("XSI.Collection")
	    Dim l_owners
	    set l_owners =  EnumElements( in_elem, FALSE )
	    for each o in l_owners
		    FGetImageClipRealOwners.Add o
	    next
        
        Dim l_CnxOwners
	    set l_CnxOwners = in_elem.GetShaderParameterTargets()
	    for each o in l_CnxOwners 
		    FGetImageClipRealOwners.Add o
	    next    
	    
    else' Find all the nesting owners.
	    set FGetImageClipRealOwners = EnumElements( in_elem,  FALSE )
	end if
	
End Function

'------------------------------------------------------------------------------
' NAME:		FFilterUnwantedOwners
'
' INPUT:	N/A
'
' DESCRIPTION: Helper used by DeleteSourcesClips
'				
'------------------------------------------------------------------------------
Function FFilterUnwantedOwners( in_csKind, in_owners )
    FFilterUnwantedOwners = ""
    dim l_owner
	For each l_owner in in_owners 
		if in_csKind = "Image Source" Then
			set l_parent = FGetParentObj(l_owner)
			if Not TypeName( l_parent ) = "Nothing" Then
				if (l_parent = Application.ActiveProject.ActiveScene & ".Clips") Then
					FFilterUnwantedOwners = FFilterUnwantedOwners & "- " & l_owner & Chr(10)
				end if 
			End If
		
		elseif in_csKind = "Image Clip" Then
			if Not (l_owner = Application.ActiveProject.ActiveScene & ".Clips.Image") then
				FFilterUnwantedOwners = FFilterUnwantedOwners & "- " & l_owner & Chr(10)
			end if
		
		elseif in_csKind = "Animation Source" Then
			if not l_owner.type = "model_delta" then
				if TypeName(l_owner) = "CollectionItem" Then
					FFilterUnwantedOwners = FFilterUnwantedOwners & "- " & l_owner & Chr(10)
				end if
			end if

		elseif in_csKind = "Cache Source" Then
			if TypeName(l_owner) = "CollectionItem" Then
				FFilterUnwantedOwners = FFilterUnwantedOwners & "- " & l_owner & Chr(10)
			end if

		elseif in_csKind = "Audio Source" Then
			if TypeName(l_owner) = "Clip" Then
				FFilterUnwantedOwners = FFilterUnwantedOwners & "- " & l_owner & Chr(10)
			end if

		End if
		
	Next
	
End Function

'------------------------------------------------------------------------------
' NAME:		DeleteSourcesClips
'
' INPUT:	N/A
'
' DESCRIPTION: Prompt the user for a confirmation before deleting sources and
'				clips which are currently used.
'				
'------------------------------------------------------------------------------
sub DeleteSourcesClips ( ByRef in_ObjectCollection, in_csKind, in_csWarningMess, in_bForceClean, in_bAskIfSingleObjectAndUsed )

	Dim l_Prompt, l_Elem, l_Objects, l_parent
	Dim l_res, l_owners 

	'------------------------------------------------------
	' If don't have any object in the list
	' - in this case we return
	'------------------------------------------------------
	if in_ObjectCollection.Count = 0 Then
		exit sub
	end if
    
	'------------------------------------------------------
	' If we have only 1 object
	' - In this case we list the owners and ask the user 
	'   if he wants to continue
	' - If there is no owner we delete the object directly
	'------------------------------------------------------
	if in_ObjectCollection.Count = 1 Then
		
		set l_Elem = in_ObjectCollection(0)
		if l_Elem Is Nothing Then
			exit sub
		End if
	    
		set l_owners = FGetImageClipRealOwners( l_Elem )
		l_Objects = FFilterUnwantedOwners( in_csKind, l_owners )
		
		if l_Objects <> "" then
			if in_bAskIfSingleObjectAndUsed then
				l_Prompt = XSIUtils.Translate("Deleting the ", "XSISCRIPTS" ) & in_csKind & ": "& l_Elem & _
							Chr(10) & XSIUtils.Translate(in_csWarningMess, "XSISCRIPTS" ) & Chr(10) & Chr(10)

				l_Prompt = l_Prompt & l_Objects & Chr(10) & XSIUtils.Translate("Do you want to continue?", "XSISCRIPTS" )

				if SIMsgBox(l_Prompt, (vbYesNo + vbQuestion), XSIUtils.Translate("Delete " & in_csKind, "XSISCRIPTS" ), vbYes) = vbNo then
					Err.Raise siErrCancelled
				end if
			else
				exit sub ' don't delete an used source/clip
			end if
		end if
		
		DeleteObj in_ObjectCollection
	end if

	'------------------------------------------------------
	' If we have many objects
	' - In this case we ask the user 3 choices
	'		- delete all without confirmation
	'		- delete only unused source/clip
	'		- cancel
	'------------------------------------------------------
	if in_ObjectCollection.Count > 1 Then

		' First verify if there is item with owners
		dim l_tempoList
		set l_tempoList = CreateObject("XSI.Collection")
		For each l_Elem in in_ObjectCollection
			
			' Find all the owners.
	        ' for image clips we the connected targets, otherwise it's the nesting owners
		    ' for image clips we append the connected targets
		    set l_owners = FGetImageClipRealOwners( l_Elem )
		    l_Objects = FFilterUnwantedOwners( in_csKind, l_owners)

			if l_Objects = "" then
				l_tempoList.Add l_Elem
			End if
		Next 
		
		if l_tempoList.Count <> in_ObjectCollection.Count Then

			if in_bForceClean = False Then

				l_Prompt = XSIUtils.Translate(IDS_DELETE_SOURCES_CLIPS, "XSISCRIPTS", in_csKind, in_csKind, in_csKind )
				
				l_res = SIMsgBox(l_Prompt, vbYesNoCancel + vbQuestion, XSIUtils.Translate("Multiple Delete " & in_csKind, "XSISCRIPTS" ), vbYes)
			Else
				l_res = vbNo
			End if

			if l_res = vbYes Then
				DeleteObj in_ObjectCollection
			else if l_res = vbNo Then
				' Delete all the unused objects
				DeleteObj l_tempoList
			else
				Err.Raise siErrCancelled
			End if
			End if
		Else
			' Here all object doesn't have owners so they can be deleted
			' without problem
			DeleteObj in_ObjectCollection
		End if
	End if

end sub

'------------------------------------------------------------------------------
' NAME:		CleanCacheSourceProc 
'
' INPUT:	N/A
'
' DESCRIPTION: Delete All the useless cache sources
'				
'------------------------------------------------------------------------------

sub CleanCacheSourceProc (  )
	dim myList
	set myList = EnumElements( "Sources.FileCaches", TRUE, 0 )
	if Not TypeName( myList ) = "Nothing" Then
		DeleteSourcesClips myList, "Cache Source", "will also delete these clip(s): ", True, False
	end if
end sub

'------------------------------------------------------------------------------
' NAME:		CleanImageSourceProc 
'
' INPUT:	N/A
'
' DESCRIPTION: Delete All the useless image sources
'				
'------------------------------------------------------------------------------
sub CleanImageSourceProc (  )

	' Get all the image sources
	set myList = EnumElements( "Sources.Image", TRUE, 0 )
	if Not TypeName( myList ) = "Nothing" Then
		DeleteSourcesClips myList, "Image Source", "will also delete these clip(s): ", True, False
	end if
end sub

'------------------------------------------------------------------------------
' NAME:		CleanImageClipProc
'
' INPUT:	N/A
'
' DESCRIPTION: Delete All the useless Image Clips
'				
'------------------------------------------------------------------------------
sub CleanImageClipProc (  )
	' Get all the image Clips
	dim myList
	set myList = EnumElements( "Clips.Image", TRUE, 0 )
	if Not TypeName( myList ) = "Nothing" Then
		DeleteSourcesClips myList, "Image Clip", "will remove the clip from all these object(s): ", True, False
	end if
end sub

'------------------------------------------------------------------------------
' NAME:		CleanAnimationSourceProc 
'
' INPUT:	N/A
'
' DESCRIPTION: Delete All the useless animation sources
'				
'------------------------------------------------------------------------------
sub CleanAnimationSourceProc (  )

	' Get all the animation sources
	set myActionsList = CreateObject( "XSI.Collection" )
	set animationList = EnumElements( "Sources.Animation", TRUE, 0 )

	for each oAnimation in animationList
		myActionsList.AddItems( EnumElements( oAnimation.NestedObjects( "List" ), TRUE, 0 ) )
	next
	
	if Not TypeName( myActionsList ) = "Nothing" Then
		DeleteSourcesClips myActionsList, "Animation Source", "will also delete these clip(s): ", True, False
	end if
end sub


'------------------------------------------------------------------------------
' NAME:		CleanAudioSourceProc 
'
' INPUT:	N/A
'
' DESCRIPTION: Delete All the useless audio sources
'				
'------------------------------------------------------------------------------
sub CleanAudioSourceProc (  )

	' Get all the audio sources
	set myList = EnumElements( "Sources.Audio", TRUE, 0 )
	if Not TypeName( myList ) = "Nothing" Then
		DeleteSourcesClips myList, "Audio Source", "will also delete these clip(s): ", True, False
	end if
end sub


'------------------------------------------------------------------------------
' NAME:		RemoveAllUnusedMaterialsProc
'
' INPUT:	N/A
'
' DESCRIPTION: Deletes all the unused Materials in all libraries
'				
'------------------------------------------------------------------------------
Sub RemoveAllUnusedMaterialsProc( )
	'
	' For each material in the library, count how many objects are using it
	' if none, then add it to the collection for deletion.
	'
	dim oCollection, oMatLibColl, oMatLib

	set oCollection = CreateObject("XSI.Collection")
	set oMatLibColl = CreateObject("XSI.Collection")

	oMatLibColl.SetAsText("Sources.Materials.*")

	for each oMatLib in oMatLibColl
		if typename( oMatLib ) = "MaterialLibrary" then
			oCollection.Add oMatLib
			RemoveUnusedMaterialsProc oCollection
			oCollection.Remove oMatLib
		end if
	next

End sub

sub UnassignMaterialProc( in_list )

	dim oCollection, l_Cancel, rtn, l_mode
	set oCollection = in_list

	if oCollection.Items = "" then
		l_Cancel = FALSE
		do while l_Cancel = FALSE
			set rtn = PickObject( XSIUtils.Translate( IDS_PICK_OBJECT_MSG_L, "XSISCRIPTS" ), XSIUtils.Translate( IDS_PICK_OBJECT_MSG_M, "XSISCRIPTS" ))
			select case rtn.value("ButtonPressed")
				case 0
					l_Cancel = TRUE
					exit do
				case 1
					l_mode = siNode
				case 2
					l_mode = siBranch
			end select
			
			dim pickeditem, pickedobj
			set pickeditem = rtn.Value("PickedElement")
			set pickedobj = SIFilter( pickeditem, "SceneObject", TRUE )
		
			if IsEmpty(pickedobj) Or TypeName(pickedobj) = "Nothing" then
				LogMessage "Please select a valid object"
			else
				dim oCollItem
				Set oCollItem = CreateObject("XSI.CollectionItem")
				oCollItem.Value = pickedobj
				oCollItem.BranchFlag = l_mode
				oCollection.Add oCollItem
			end if
		loop

	end if
	if oCollection.Items ="" then
		logmessage "Nothing done"
		exit sub
	end if

	SIUnAssignMaterial oCollection

end sub

sub AssignMaterialProc( in_list, byref io_LocalMaterialsOverlapAction )
	dim oCollection
	set oCollection = CreateObject("XSI.Collection")
	'
	' try to find the material
	'
	dim oMaterial, oElem
	for each oElem in in_list
		if ( typename( oElem ) = "Material" ) or ( typename( oElem ) = "SoftMaterial" ) then
			set oMaterial = oElem
		else
			oCollection.Add oElem
		end if
	next
	'
	' If no material, then pick one (unless there is only one in the scene)...
	'
	matCount = 0
	dim oTempMaterial, oLib, oMat
	for each oLib in Application.ActiveProject.ActiveScene.MaterialLibraries
		for each oMat in oLib.Items
			set oTempMaterial = oMat
			matCount = matCount + 1
			if matCount > 1 then exit for
		next
		if matCount > 1 then exit for
	next

	dim matCount, l_bResetClusterMode, Button
	if matCount = 1 then
		set oMaterial = oTempMaterial
	end if

	l_bResetClusterMode = false

	if ( typename(oMaterial) <> "Material" ) and ( typename(oMaterial) <> "SoftMaterial" ) then
		' we will go in a picking session soon
		' let's make sure the CLUSTER button is up
		set oFilter = Application.selection.Filter

		if oFilter.Type = "FilterSubComponentType" then
			if getuserpref( "SI3D_GROUP_SEL_MODE" ) = false then
				l_bResetClusterMode = true
				setuserpref "SI3D_GROUP_SEL_MODE", true
			end if
		end if
	end if

	Button = 1
	While ( typename(oMaterial) <> "Material" ) And ( typename(oMaterial) <> "SoftMaterial" ) And ( Button <> 0 )

		' lets have the user pick a material, object, cluster or subcomponent

		strLMBMsg = XSIUtils.Translate( IDS_ASSIGN_MATERIAL_PICK_MSG, "XSISCRIPTS" )
		strMMBMsg = strLMBMsg

		PickElement "SceneElementOrComponents", strLMBMsg, strMMBMsg, oMaterial, Button, 0 , Modifier

		' did the user pick anything ?
		if typename(oMaterial) <> "Empty" And Button <> 0 then
			if ( typename(oMaterial) <> "Material" ) And ( typename(oMaterial) <> "SoftMaterial" ) then
   				on error resume next
				set oMaterial = oMaterial.Material
				if ( typename(oMaterial) <> "Material" ) And ( typename(oMaterial) <> "SoftMaterial" ) then
					logMessage "Please pick a material or an element that uses a material"
				end if
			end if
		end if
	Wend

	if l_bResetClusterMode then
		setuserpref "SI3D_GROUP_SEL_MODE", false
	end if

	'if we didnt succeed getting a material then exit

	if ( typename(oMaterial) <> "Material" ) And ( typename(oMaterial) <> "SoftMaterial" ) then exit sub

	'
	' Assign it to the objects
	'
	if oCollection.Items = "" then
		l_Cancel = FALSE
		do while l_Cancel = FALSE
			set rtn = PickObject( XSIUtils.Translate( IDS_PICK_OBJECT_MSG_L, "XSISCRIPTS" ), XSIUtils.Translate( IDS_PICK_OBJECT_MSG_M, "XSISCRIPTS" ))
			select case rtn.value("ButtonPressed")
				case 0
					l_Cancel = TRUE
					exit do
				case 1
					l_mode = siNode
				case 2
					l_mode = siBranch
			end select
			set pickeditem = rtn.Value("PickedElement")
			set pickedobj = SIFilter( pickeditem, "SceneObject", TRUE )
		
			if IsEmpty(pickedobj) Or TypeName(pickedobj) = "Nothing" then
				LogMessage "Please select a valid object"
			else
				'set oCrap = GetValue( pickedobj )
				Set oCollItem = CreateObject("XSI.CollectionItem")
				oCollItem.Value = pickedobj
				oCollItem.BranchFlag = l_mode
				oCollection.Add oCollItem
			end if
		loop

	end if
	if oCollection.Items ="" then
		logmessage "Nothing done"
		exit sub
	end if

	dim oNewCollection, oClusterList, oSubCompList
	set oNewCollection = FSubComponents2Clusters( oCollection, false, oClusterList, oSubCompList )

	if Not TypeName (oNewCollection) = "Nothing" then
		SIAssignMaterial oNewCollection, oMaterial.Fullname

		'--------------------------------------------------------------------
		' add created clusters to selection (in place of tagclusters)
		'--------------------------------------------------------------------
		if Not IsEmpty (oClusterList) Then
			RemoveFromSelection (oSubCompList)
			AddToSelection (oClusterList)
		end if

		TestClusterOverlapping oCollection, oClusterList, oMaterial, io_LocalMaterialsOverlapAction

	end if
	'
	' Return the used list
	'
	in_list.Clear
	in_list.Add oMaterial
	in_list.Add oNewCollection

end sub


'------------------------------------------------------------------------------
' NAME:		RemoveUnusedMaterialsProc
'
' INPUT:	N/A
'
' DESCRIPTION: Deletes all the unused Materials in a given library
'				
'------------------------------------------------------------------------------
Sub RemoveUnusedMaterialsProc( in_Library )
	'
	' For each material in the library, count how many objects are using it
	' if none, then add it to the collection for deletion.
	'
	dim delcoll, i, oMaterial
	set delcoll = CreateObject("XSI.Collection")

	for i = 0 to in_Library(0).Items.count - 1
		set oMaterial = in_Library(0).Items( i )
		if oMaterial.Type = "material" then
			' If only one owner, this means that only the MaterialLibrary owns it.

			if oMaterial.Owners.count = 1 then
				if not oMaterial.IsLocked then
					delcoll.Add oMaterial
				end if
			end if
		end if
	next
	'
	' If we found at least one, then delete them.
	'
	if delcoll.count > 0 then
		logmessage "deleting those " & delcoll
		deleteobj delcoll
	else
		logmessage "Nothing to delete"
	end if

End sub

'------------------------------------------------------------------------------
' NAME:		InsertCompoOnSelectionProc
'
' INPUT:	in_InputObjs : selection list
'
' DESCRIPTION: Triggers the appropriate component insertion tool based on the selection
'				
'------------------------------------------------------------------------------
sub InsertCompoOnSelectionProc( in_InputObjs )

	Dim l_Curves, l_PolyMesh, l_Surfaces
	
	' Polygon Meshes: trigger the split edge tool
	set l_PolyMesh = SIFilter( in_InputObjs, "polygon_mesh" )
	if Not TypeName( l_PolyMesh ) = "Nothing" Then
		SplitEdgeTool
		exit sub
	end if

	' Curves: trigger the Add Point tool
	set l_Curves = SIFilter( in_InputObjs, "curve" )
	if Not TypeName( l_Curves ) = "Nothing" Then
		AddPointOnCurveTool
		exit sub
	end if

	' Surface: would be triggering the insert knot tool,
	' but we do not have any such tool for now...
	set l_Surfaces = SIFilter( in_InputObjs, "surface_mesh" )
	if Not TypeName( l_Surfaces ) = "Nothing" Then
		' nothing for now
		exit sub
	end if

	' Default tool in any other case
	SplitEdgeTool
end sub

'------------------------------------------------------------------------------
' NAME:			GetMoreShadersProc
' INPUT:		The objects to connect the shader to
' DESCRIPTION:	Assign a shader to objects. Ask the user for the shader to apply.
'------------------------------------------------------------------------------
sub GetMoreShadersProc( in_preset, in_objs, in_Name, in_ConnectType, in_presetdir, in_presetfamid )

	'--------------------------------------------------------------------
	' Ask for a preset
	'--------------------------------------------------------------------
	set in_preset = SIGetPreset( in_presetdir, in_presetfamid )

	'--------------------------------------------------------------------
	' Apply the shader
	'--------------------------------------------------------------------
	If Not TypeName(in_preset) = "Nothing" then
		ApplyShader in_preset, in_objs, in_Name, in_ConnectType 
	Else
		Err.Raise siErrCancelled
	End If

end sub

'------------------------------------------------------------------------------
' NAME:	UIAssembleNurbsMeshProc		
'
' DESCRIPTION: launch the assemble command fromm UI from whether object mode
' or subcomponent mode, it will first pop up a dialog, and then 
' launch the AssembleNurbsMesh command
'------------------------------------------------------------------------------
sub UIAssembleNurbsMeshProc()
	Dim l_Dlg, l_dTol, l_bCopyCluster, l_bCopyMaterial, l_bCenterGeomCenter
	Dim l_finalNurbsList, l_NbSurf

	ActivateObjectSelToolWithNoObjStateChange

	set l_finaNurbslList = GetValue( "SelectionList" )
	l_NbSurf = FCountItems( l_finaNurbslList, "surface_mesh" )

	if l_NbSurf <> 0 Then
		'--------------------------------------------------------------------
		' create the Dialog 
		'--------------------------------------------------------------------
		set l_Dlg = createobject("TaskUI.SCMDialog2")

		l_Dlg.Tolerance = 0.15
		l_Dlg.CopyClusterFlag = FALSE
		l_Dlg.CopyMaterialFlag = FALSE
		l_Dlg.CenterGeomCenterFlag = TRUE

		if l_Dlg.Show then	 
			l_dTol = l_Dlg.Tolerance
			l_bCopyCluster = l_Dlg.CopyClusterFlag
			l_bCopyMaterial = l_Dlg.CopyMaterialFlag
			l_bCenterGeomCenter = l_Dlg.CenterGeomCenterFlag

			ScriptAssembleNurbsMeshProc l_finalNurbsList, l_dTol, l_bCopyCluster, l_bCopyMaterial, l_bCenterGeomCenter
			'--------------------------------------------------------------------
			' create the SCM Topology
			'--------------------------------------------------------------------
			
		end if
	end if
end sub

'------------------------------------------------------------------------------
' NAME:	AssembleNurbsMeshProc		
'
' INPUT:	- in_Obj, in_dTol, in_bCopyCluster, in_bCopyMaterial 
'
' DESCRIPTION:
'------------------------------------------------------------------------------
sub AssembleNurbsMeshProc(in_Obj, in_dTol, in_bCopyCluster, in_bCopyMaterial, in_bCenterGeomCenter)
	Dim l_NewNurbsMesh, l_Dlg
	Dim l_NbSurf

	l_NbSurf = FCountItems( in_Obj, "surface_mesh" )
	if l_NbSurf <> 0 then 
		'--------------------------------------------------------------------
		' create the Dialog 
		'--------------------------------------------------------------------
		set l_Dlg = createobject("TaskUI.SCMDialog")

		l_Dlg.Tolerance = in_dTol
		l_Dlg.CopyClusterFlag = in_bCopyCluster
		l_Dlg.CopyMaterialFlag = in_bCopyMaterial
		l_Dlg.CenterGeomCenterFlag = in_bCenterGeomCenter

		if l_Dlg.Show then	 
			in_dTol = l_Dlg.Tolerance
			in_bCopyCluster = l_Dlg.CopyClusterFlag
			in_bCopyMaterial = l_Dlg.CopyMaterialFlag
			in_bCenterGeomCenter = l_Dlg.CenterGeomCenterFlag
			ScriptAssembleNurbsMeshProc l_finalNurbsList, in_dTol, in_bCopyCluster, in_bCopyMaterial, in_bCenterGeomCenter
			'--------------------------------------------------------------------
			' create the SCM Topology
			'--------------------------------------------------------------------
			
		end if
	end if

end sub

'------------------------------------------------------------------------------
' NAME:	ScriptAssembleNurbsMeshProc		
'
' INPUT:	- in_Obj, in_dTol, in_bCopyCluster, in_bCopyMaterial 
'
' DESCRIPTION: this proc calls AssembleNurbsMesh task without popping out a dialog window
'------------------------------------------------------------------------------

sub ScriptAssembleNurbsMeshProc(in_Obj, in_dTol, in_bCopyCluster, in_bCopyMaterial, in_bCenterGeomCenter)
	Dim l_NewNurbsMesh
	'--------------------------------------------------------------------
	' create the SCM Topology
	'--------------------------------------------------------------------
	set l_NewNurbsMesh = SIAssembleNurbsMesh( in_Obj, in_dTol, in_bCopyCluster, in_bCopyMaterial, in_bCenterGeomCenter).value("OutputObj")

	if TypeName (l_NewNurbsMesh) <> "Nothing" then
		'--------------------------------------------------------------------
		' Select the New Mesh 
		'--------------------------------------------------------------------
		SelectObj l_NewNurbsMesh
		'--------------------------------------------------------------------
		' Inspect the new primitive
		'--------------------------------------------------------------------
		AutoInspect l_NewNurbsMesh
	end if

end sub

'------------------------------------------------------------------------------
' NAME:		GetInputAndPlotCurveProc
' INPUT:	List of objects to plot the trajectory for
' DESCRIPTION: Prompt the user for values before calling PlotTrajectory
'------------------------------------------------------------------------------
sub GetInputAndPlotCurveProc ( in_InputObjs, in_Name, in_StartFrame, in_EndFrame, in_Step )

	Dim l_start, l_end, l_step, l_collection, l_CPList, l_SceneRoot, l_CustomParam

	l_start = GetValue("Project.Data.PlayControl.In")
	l_end = GetValue("Project.Data.PlayControl.Out")
	l_step = GetValue("Project.Data.PlayControl.Step")

	Set l_SceneRoot = ActiveSceneRoot
	Set l_CPList = SIAddProp( "Custom_parameter_list", l_SceneRoot , , "PlotCurve").value("Value")
	l_CustomParam = l_SceneRoot & "." & l_CPList

	SIAddCustomParameter l_CustomParam , "Start", siDouble, _
		l_start, -1000000, 1000000, , siPersistable+siSilent, l_start, l_end, "Start", "Start Frame"
	SIAddCustomParameter l_CustomParam , "End", siDouble, _
		l_end, -1000000, 1000000, , siPersistable+siSilent, l_start, l_end, "End", "End Frame"
	SIAddCustomParameter l_CustomParam , "Step", siDouble, _
		l_step, -1000000, 1000000, , siPersistable+siSilent, 0, l_end - l_start, "Step", "Step value"
	SIAddCustomParameter l_CustomParam , "CurveName", siString, _
		, , , , siPersistable+siSilent, , , "CurveName", "Curve Name"
	if in_Name <> "" then
		SetValue l_CustomParam & ".CurveName" , in_Name
	end if

	If FWizardDialog( l_CustomParam, "Plot Curve" ) = vbOk Then
		in_StartFrame = GetValue( l_CustomParam & ".Start" )
		in_EndFrame = GetValue( l_CustomParam & ".End" )
		in_Step = GetValue( l_CustomParam & ".Step" )
		in_Name = GetValue( l_CustomParam & ".CurveName" )
		PlotCurveProc in_InputObjs, in_Name, in_StartFrame, in_EndFrame, in_Step
		DeleteObj l_CustomParam
	Else
		DeleteObj l_CustomParam
		Err.Raise siErrCancelled
	End If

end sub

'------------------------------------------------------------------------------
' NAME:			PlotCurve
' INPUT:		List of objects to plot, Start Frame, End Frame, Step
' OUTPUT:		List of Created objects
' DESCRIPTION:	
'------------------------------------------------------------------------------
function PlotCurveProc( in_InputObjs, in_Name, in_StartFrame, in_EndFrame, in_Step )
	' Leave this variable as being unset (its typename() must be "Empty")
	Dim l_Nothing

	' Real functionality is in PlotCurveProc2, but turn off the unplotted frames gathering mecanism
	Set PlotCurveProc = PlotCurveProc2(in_InputObjs, in_Name, in_StartFrame, in_EndFrame, in_Step, l_Nothing, False)
end function

'------------------------------------------------------------------------------
' NAME:			PlotCurveProc2
' INPUT:		List of objects to plot, Start Frame, End Frame, Step
' OUTPUT:		List of Created objects, List of erroneous frames
' DESCRIPTION:	The purpose of this function is to add functionality to
'               PlotCurveProc without changing current SDK syntax.
'               What has been added: in_ProcessModFrames tells (if true)
'				the function to gather all unplotted frames in a multilist
'               returned in out_ModFrames.  If false, out_ModFrames is untouched.
'------------------------------------------------------------------------------
function PlotCurveProc2( in_InputObjs, in_Name, in_StartFrame, in_EndFrame, in_Step, out_ModFrames, in_ProcessModFrames)
	Dim rtn, l_nObjects, l_nVertices, l_Item, l_Obj, l_KnotCount, _
		l_Elem, l_LBound, l_UBound, i, l_frame, l_time,   _
		l_CurrentObject, l_CurrentVertex, x, y, z, l_ParentItem, _
		l_DegToRad, l_ParentObj, l_Geometry0D, l_Pos, l_Rot, _
		l_Scl, l_Trs, l_Mat, l_ObjectList, l_NewPos, l_ClusterList, l_SubCompList, l_ObjList, l_LastCell

	if IsEmpty(in_InputObjs) Or TypeName(in_InputObjs) = "Nothing" Then
		Exit function
	end if
	
	' Convert subcomponents (i.e. tag clusters) to clusters
	set l_ObjList = FSubComponents2Clusters( in_InputObjs, false, l_ClusterList, l_SubCompList )

	' Make sure to only plot Objects and Clusters (other items may not have the kine property, so they can't be plotted)
	set l_ObjectList = SIFilter( l_ObjList, siObjectFilter & "," & siClusterFilter )

	if TypeName( l_ObjectList ) = "Nothing" Then
		Exit function
	end if

	' Create the collection of output curves
	set PlotCurveProc2 = Nothing
	
	' Count how many objects and vertices are selected
	l_nObjects = 0
	l_nVertices = 0
	For Each l_Item in l_ObjectList
		Set l_Obj = l_Item.Obj
		If Not Typename( l_Obj ) = "Cluster" Then
		   ' Is an object
		   l_nObjects = l_nObjects + 1
		Else
		   ' is a cluster - only need to store the vertices, not the object
		  l_Elem = l_Obj.Elements
		  l_LBound = LBound( l_Elem, 1)
		  l_UBound = UBound( l_Elem, 1)
		  l_nVertices = l_nVertices + (l_UBound - l_LBound + 1)
		End If
	Next
	
	' Make curves for each of the objects and vertices
	ReDim l_ObjectCurve( l_nObjects )
	ReDim l_VertexCurve( l_nVertices )
	ReDim l_ModFrames( l_nObjects + l_nVertices)

	For i = 0 to l_nObjects - 1
		' Create the curve for the trajectory (use Interpolating NURBS) 
		Set l_ObjectCurve( i ) = SICreateCurve (in_Name,3,1)
		'Retrieve the object from the primitive

		'Adding the new object to the output list.
		if TypeName(PlotCurveProc2) = "Nothing" then
			set PlotCurveProc2 = CreateObject("XSI.Collection")
		end if 
		PlotCurveProc2.Add l_ObjectCurve( i )
	Next

	For i = 0 to l_nVertices - 1
		' Create the curve for the trajectory (use Interpolating NURBS) 
		Set l_VertexCurve( i ) = SICreateCurve (in_Name,3,1)
		'Adding the new primitive to the output list.
		if TypeName(PlotCurveProc2) = "Nothing" then
			set PlotCurveProc2 = CreateObject("XSI.Collection")
		end if 
		PlotCurveProc2.Add l_VertexCurve( i )
	Next

	' Init all arrays
	For i = 0 to (l_nObjects + l_nVertices - 1)
		ReDim l_Temp(0)
		l_ModFrames(i) = l_Temp
	Next 

	' Go through each of the frames
	l_CurrentCell = 0
	For l_frame = in_StartFrame to in_EndFrame step in_Step

		' Update the animation to this frame
		SetValue "Project.Data.PlayControl.Current", l_frame
		Refresh

		' Go through selection
		l_CurrentObject = 0
		l_CurrentVertex = 0
		
		For Each l_Item in l_ObjectList
		
			Set l_X3DObj = Dictionary.GetObject(l_Item.FullName)
			Set l_Obj = l_Item.obj
			If not ( Typename( l_Obj ) = "Cluster" ) Then
				'---------------------
				' Plot Object
				'---------------------

				x = GetValue(l_Item & ".kine.global.posx", l_frame)
				y = GetValue(l_Item & ".kine.global.posy", l_frame)
				z = GetValue(l_Item & ".kine.global.posz", l_frame)

				l_Success = SIAddPointOnCurveAtEnd(l_ObjectCurve( l_CurrentObject ), x, y, z)

				If (l_Success = FALSE) Then
					' If our caller is interested in this, enlarge the array of defective frames
					If in_ProcessModFrames Then
						l_LastCell = UBound(l_ModFrames(l_CurrentObject))
						ReDimensionArray l_ModFrames(l_CurrentObject), l_LastCell + 1
						SetArrayAt l_ModFrames(l_CurrentObject), l_LastCell, l_frame
					End if
				End If
 
				l_CurrentObject = l_CurrentObject + 1
				'ASSERT l_CurrentObject <= l_nObjects
			Else
				' Is a cluster

				'---------------------
				' Plot points
				'---------------------

				'Now we have to get the object on which the cluster is defined
				set l_ParentObj = l_X3DObj.Parent.Parent.Parent

				set l_Xfm = l_ParentObj.Kinematics.Global.Transform(l_frame)
				Set l_Mat = XSIMath.CreateMatrix4

				l_Xfm.GetMatrix4 l_Mat

				'-----------------
				' Get the cluster
				'-----------------

				set l_Geometry0D = l_ParentObj.obj.Geometry0D
				set l_Pos = XSIMath.CreateVector3()
				l_Elem = l_Obj.Elements

				' Compute the size of the cluster
				l_LBound = LBound( l_Elem, 1 )
				l_UBound = UBound( l_Elem, 1 )

				'-----------------------------------------
				' Add the cluster points to the curves
				'-----------------------------------------
				Set l_NewPos = XSIMath.CreateVector3()

				For i = l_LBound To l_UBound
					' Get the coordinates of the (i)th element of the cluster
					l_Geometry0D.Position l_Elem(i), l_Pos

					' Apply parent's transformation to this vertex
					l_NewPos.MulByMatrix4 l_Pos, l_Mat

					' Add the point to the curve
					SIAddPointOnCurveAtEnd l_VertexCurve( l_CurrentVertex ), l_NewPos.x, l_NewPos.y, l_NewPos.z
					l_CurrentVertex = l_CurrentVertex + 1
					'ASSERT l_CurrentVertex <= l_nVertices
				Next
			End If
		Next  ' Next Object
	Next ' Next Frame

	Refresh 'Now do a refresh to make sure that client will get a curve evaluated.

	' Get rid of the temporary clusters we created
	If Not TypeName ( l_ClusterList ) = "Empty" Then
		DeleteObj l_ClusterList
	End If

	' Transfer the special frame array
	If in_ProcessModFrames Then
		out_ModFrames = l_ModFrames
	End If
end function

'------------------------------------------------------------------------------
' NAME:		GetInputAndConvertPosAnimToPathProc
' INPUT:	List of objects to convert their position animation into a path.
' DESCRIPTION: Prompt the user for time interval values before calling ConvertPosAnimToPath
'------------------------------------------------------------------------------
sub GetInputAndConvertPosAnimToPathProc( in_InputObjs, in_Name, in_StartFrame, in_EndFrame, in_Step )

	Dim l_start, l_end, l_step, l_SceneRoot, l_CPList, l_CustomParam

	l_start = GetValue("Project.Data.PlayControl.In")
	l_end = GetValue("Project.Data.PlayControl.Out")
	l_step = GetValue("Project.Data.PlayControl.Step")

	Set l_SceneRoot = ActiveSceneRoot
	Set l_CPList = SIAddProp("Custom_parameter_list", l_SceneRoot, , "ConvertToPath").value("Value")
	l_CustomParam = l_SceneRoot & "." & l_CPList

	SIAddCustomParameter l_CustomParam , "Start", siDouble, _
		l_start, -1000000, 1000000, , siPersistable+siSilent, l_start, l_end, "Start", "Start Frame"
	SIAddCustomParameter l_CustomParam , "End", siDouble, _
		l_end, -1000000, 1000000, , siPersistable+siSilent, l_start, l_end, "End", "End Frame"
	SIAddCustomParameter l_CustomParam , "Step", siInt4, _
		l_step, 1, 1000000, , siPersistable+siSilent, 1, l_end - l_start, "Step", "Step value"
	SIAddCustomParameter l_CustomParam , "PathName", siString, _
		, , , , siPersistable+siSilent, , , "PathName", "Path Name"
	if in_Name <> "" then
		SetValue l_CustomParam & ".PathName" , in_Name
	end if

	If FWizardDialog(l_CustomParam,"Convert Position Animation To Path") = vbOk Then
		in_StartFrame = GetValue( l_CustomParam & ".Start" )
		in_EndFrame = GetValue( l_CustomParam & ".End" )
		in_Step = GetValue( l_CustomParam & ".Step" )
		in_Name = GetValue( l_CustomParam & ".PathName" )
		ConvertPosAnimToPathProc in_InputObjs, in_Name, in_StartFrame, in_EndFrame, in_Step
		DeleteObj l_CustomParam
	Else
		DeleteObj l_CustomParam
		Err.Raise siErrCancelled
	End If

end sub

'------------------------------------------------------------------------------
' NAME:		ConvertPosAnimToPathProc
' INPUT:	List of objects to convert their position animation into a path.
' DESCRIPTION: Convert the position animation into path.
'------------------------------------------------------------------------------
sub ConvertPosAnimToPathProc( in_InputObjs, in_Name, in_StartFrame, in_EndFrame, in_Step )
	Dim l_frame, l_Count, l_Index, l_Name, l_PathList
	Dim l_ModifiedFrames

	'Plot the animation:
	set l_PathList = PlotCurveProc2( in_InputObjs, in_Name, in_StartFrame, in_EndFrame, in_Step, l_ModifiedFrames, True )

	if TypeName(l_PathList) = "Nothing" then
		Err.Raise siErrCancelled
	end if

	'Now constraint all input objects to there corresponding curve, and set the timing
	'curve in order that objects will pass by knots position.
	ApplyPathByKnots in_InputObjs, l_PathList, in_StartFrame, in_EndFrame, in_Step, l_ModifiedFrames

	'Now remove the animation from the first frame:
	l_frame = GetValue( "Project.Data.PlayControl.In" )

	'Get the number of input objects
	l_Count = in_InputObjs.count

	'Go through each input objects and remove the animation.
	'Note: what appen if the animation was on the global ks? Do I have to remove the two?
	'Note: We could let the animation on the local. This should not affect the path
	'constraint as the path constraint drives the global ks.
	For l_Index = 0 to l_Count-1 
		l_Name = in_InputObjs( l_Index ) & ".kine.local.posx"
		RemoveAnimation l_Name, l_frame 
		l_Name = in_InputObjs( l_Index ) & ".kine.local.posy"
		RemoveAnimation l_Name, l_frame 
		l_Name = in_InputObjs( l_Index ) & ".kine.local.posz"
		RemoveAnimation l_Name, l_frame 
	Next

end sub

'------------------------------------------------------------------------------
' NAME:		GetInputAndPlotKeyableToActionProc
' INPUT:	List of objects to plot the keyable parameters
' DESCRIPTION: Prompt the user for values before calling PlotToAction
'              Note: This sub is now obsolete.
'------------------------------------------------------------------------------
sub GetInputAndPlotKeyableToActionProc ( _
	in_Model, _
	in_InputObjs, _
	in_Name, _
	in_StartFrame, _
	in_EndFrame, _
	in_Step, _
	in_FCurveKind, _
	in_Interpolation, _
	in_FitFCurve, _
	in_FitTolerance, _
	in_ProcessContRots, _
	in_Apply, _
	in_Paste, _
	in_Delete, _
	in_Title )
	
	Dim l_ePlotCommand, l_bAskUserForInput
	
	l_ePlotCommand = 1		' 1 stays for the PlotToAction command
	l_bAskUserForInput = TRUE

	PlotKeyableToActionsProc_Internal in_InputObjs, in_Name, in_StartFrame, in_EndFrame, in_Step, _
									  in_FCurveKind, in_Interpolation, in_FitFCurve, in_FitTolerance, _
									  in_ProcessContRots, in_Apply, in_Paste, in_Delete, in_Title, _
									  l_ePlotCommand, l_bAskUserForInput
	
end sub

'------------------------------------------------------------------------------
' NAME:		GetInputAndPlotToActionProc
' INPUT:	List of objects to plot the marked parameters for
' DESCRIPTION: Prompt the user for values before calling PlotToAction
'              Note: This sub is now obsolete.
'------------------------------------------------------------------------------
sub GetInputAndPlotToActionProc ( _
	in_Model, _
	in_InputObjs, _
	in_Name, _
	in_StartFrame, _
	in_EndFrame, _
	in_Step, _
	in_FCurveKind, _
	in_Interpolation, _
	in_FitFCurve, _
	in_FitTolerance, _
	in_ProcessContRots, _
	in_Apply, _
	in_Paste, _
	in_Delete, _
	in_Title )
	
	Dim l_ePlotCommand, l_bAskUserForInput 
	
	l_ePlotCommand = 1		' 1 stays for the PlotToAction command
	l_bAskUserForInput = TRUE

	PlotToActionsProc_Internal in_Model, in_InputObjs, in_Name, in_StartFrame, in_EndFrame, in_Step, _
							   in_FCurveKind, in_Interpolation, in_FitFCurve, in_FitTolerance, in_ProcessContRots, _
							   in_Apply, in_Paste, in_Delete, in_Title, _
							   l_ePlotCommand, l_bAskUserForInput

end sub


'------------------------------------------------------------------------------
' NAME:		PlotAndApplyActionProc
' DESCRIPTION: Plot and optionally Apply and Delete an Action.
'              Note: This function is now obsolete.
'------------------------------------------------------------------------------
function PlotAndApplyActionProc( _
	in_Model, _
	in_InputObjs, _
	in_Name, _
	in_StartFrame, _
	in_EndFrame, _
	in_Step, _
	in_FCurveKind, _
	in_Interpolation, _
	in_FitFCurve, _
	in_FitTolerance, _
	in_ProcessContRots, _
	in_Apply, _
	in_Paste, _
	in_Delete )

	dim l_action

	' Call the PlotToAction task
	set l_action = PlotToAction( in_Model, in_InputObjs, in_Name, in_StartFrame, in_EndFrame, in_Step, _
					in_FCurveKind, in_Interpolation, in_FitFCurve, in_FitTolerance, in_ProcessContRots )

	set PlotAndApplyActionProc = l_action
	if ( TypeName( l_action ) <> "Nothing" ) AND in_Apply then
		if in_Paste then
			dim l_start, l_end
			l_start = GetValue( l_action & ".FrameStart" ) 
			l_end = GetValue( l_action & ".FrameEnd" ) 

			ApplyAction l_action, , TRUE, l_start, l_end, FALSE
		else
			ApplyAction l_action, , FALSE,,,,TRUE
		end if

		if in_Delete then
			set PlotAndApplyActionProc = Nothing
			DeleteObj l_action
		end if
	end if
end function


'------------------------------------------------------------------------------
' NAME:		PlotConstrainedTransformsProc
' INPUT:	Same parameters as PlotToAction, except the 1st param, which is
'           the current selection.
' DESCRIPTION: Prompt the user for values before calling PlotToAction.
'			   This script is providing a shortcut for one that wants to 
'			   plot only those transforms which are constrained on any given
'			   object. This script looks at the constraints and their option
'			   to determine which dof is being driven by the constraint, then
'			   calls up the PlotAction command with the proper list of params.
'              Note: This sub is now obsolete.
'------------------------------------------------------------------------------
sub PlotConstrainedTransformsProc( _
	in_objs, _
	in_Name, _
	in_StartFrame, _
	in_EndFrame, _
	in_Step, _
	in_FCurveKind, _
	in_Interpolation, _
	in_FitFCurve, _
	in_FitTolerance, _
	in_ProcessContRots, _
	in_Apply, _
	in_Paste, _
	in_Delete, _
	in_Title )
	
	Dim l_bDeleteCns, l_ePlotCommand, l_bAskUserForInput

	'This command should not pop-up dialogs, unfortunately it does,
	'but we don't want to change the behavior of this obsolete command
	
	l_bDeleteCns = 2	' 2 stays for asking the user
	l_ePlotCommand = 1	' 1 stays for the PlotToAction command
	l_bAskUserForInput = TRUE

	PlotConstrainedTransformsToActionsProc_Internal in_objs, in_Name, in_StartFrame, in_EndFrame, in_Step, _
													in_FCurveKind, in_Interpolation, in_FitFCurve, in_FitTolerance, _
													in_ProcessContRots, in_Apply, in_Paste, in_Delete, l_bDeleteCns, in_Title, _
													l_ePlotCommand, l_bAskUserForInput

end sub

'------------------------------------------------------------------------------
' NAME:			GetInputAndApplyPathProc
' INPUT:		Objects to put on a path
' INPUT:		The path
' DESCRIPTION:	Put an object on a path and set the default path animation.
'------------------------------------------------------------------------------
sub GetInputAndApplyPathProc ( in_InputObjs, in_Path, in_StartFrame, in_EndFrame, in_nbKey, in_Linear, in_Tangent )

	Dim l_start, l_end, l_SceneRoot, l_CPList, l_CustomParam

	l_start = GetValue("Project.Data.PlayControl.In")
	l_end = GetValue("Project.Data.PlayControl.Out")

	Set l_SceneRoot = ActiveSceneRoot
	Set l_CPList = SIAddProp("Custom_parameter_list", l_SceneRoot, , "ApplyPath").value("Value")
	l_CustomParam = l_SceneRoot & "." & l_CPList

	SIAddCustomParameter l_CustomParam , "Start", siDouble, _
		l_start, -1000000, 1000000, , siPersistable+siSilent, l_start, l_end, "Start", "Start Frame"
	SIAddCustomParameter l_CustomParam , "End", siDouble, _
		l_end, -1000000, 1000000, , siPersistable+siSilent, l_start, l_end, "End", "End Frame"
	SIAddCustomParameter l_CustomParam , "Linear", siBool, _
		in_Tangent, 0, 1, , siPersistable+siSilent, 0, 1, "Linear", "Linear"
	SIAddCustomParameter l_CustomParam , "Tangent", siBool, _
		in_Linear, 0, 1, , siPersistable+siSilent, 0, 1, "Tangent", "Tangent"


	If FWizardDialog(l_CustomParam,"Set Path") = vbOk Then
		in_StartFrame = GetValue( l_CustomParam & ".Start" )
		in_EndFrame = GetValue( l_CustomParam & ".End" )
		in_Tangent = GetValue( l_CustomParam & ".Tangent" )
		in_Linear = GetValue( l_CustomParam & ".Linear" )

		ApplyPathProc in_InputObjs, in_Path, in_StartFrame, in_EndFrame, in_nbKey, in_Linear, in_Tangent
		DeleteObj l_CustomParam
	Else
		DeleteObj l_CustomParam
		Err.Raise siErrCancelled
	End If


end sub

'------------------------------------------------------------------------------
' NAME:		ApplyTrajectoryProc
'
' INPUT:	- in_type
'			- in_constrained 
'			- in_constraining
'			- in_compensation
'
' DESCRIPTION: constrain an object (constrained) to another one (constraining)
'------------------------------------------------------------------------------
sub ApplyTrajectoryProc(in_type, io_constrained, io_constraining, io_compensation)
	
	io_compensation = getuserpref("SI3D_CONSTRAINT_COMPENSATION_MODE")
	ApplyCnsProc in_type, io_constrained, io_constraining, io_compensation

end sub

'------------------------------------------------------------------------------
' NAME:			ApplyPathProc
' INPUT:		Object to put on a path
' INPUT:		the path
' INPUT:		The start frame
' INPUT:		The end frame
' INPUT:		Number of keys to set.
' INPUT:		Option to make the fcurve linear.
' INPUT:		Option to make the object tangent to the path.
' DESCRIPTION:	Put an object on a path and set the default path animation.
'------------------------------------------------------------------------------
sub ApplyPathProc( in_InputObjs, byref in_Path, in_StartTime, in_EndTime, in_nbKey, in_Linear, in_Tangent )

	Dim l_timeIncr, l_CnsedCount, i, l_Name, l_nKey, l_time, l_val, l_Constraint, l_Constraints

	if IsEmpty(in_InputObjs) Or TypeName(in_InputObjs) = "Nothing" Then
		Exit Sub
	end if

	if IsEmpty(in_Path) Or TypeName(in_Path) = "Nothing" Then
		Exit Sub
	end if

    ' NOTE: i removed the check that made sure end > start, as this ability is 
	' actually needed and works very well anyway.

	if ( in_nbKey-1 ) < 1 then
		Exit Sub
	end if

	l_timeIncr = ( in_EndTime - in_StartTime ) / ( in_nbKey-1 )

	l_CnsedCount = in_InputObjs.count

	set l_Constraints = CreateObject("XSI.Collection")

	
	' Go through first selection
	For i = 0 to l_CnsedCount-1 

		set l_Constraint = SIApplyCns ("Path", in_InputObjs( i ), in_Path, getuserpref("SI3D_CONSTRAINT_COMPENSATION_MODE") )
		l_Constraints.add CStr(l_Constraint)

		'Set the timing curve.
		l_Name = l_Constraint & ".perc"
		For l_nKey = 0 to in_nbKey-1 

			l_time = in_StartTime + l_nKey * l_timeIncr 
			l_val  = l_nKey * 100 / ( in_nbKey - 1 )
			' Set the key
			Savekey l_Name, l_time, l_val,, 0
		Next

		' Set the curve interpolation type to linear if desired
		if in_Linear = True Then
			l_Name = l_Constraint & ".perc"
			SetCurveType l_Name, 2
		End if

		' Set the tangent according to the input value
		l_Name = l_Constraint & ".tangent"
		SetValue l_Name, in_Tangent
	Next

	AutoInspect l_Constraints

end sub

'------------------------------------------------------------------------------
' NAME:			ApplyPathByKnots
' INPUT:		List of Object to put on a path
' INPUT:		List of curve
' INPUT:		The start time ( second )
' INPUT:		The end time ( second )
' INPUT:		Step
' DESCRIPTION:	Put object on a path and set the timing curve to fit knots postion on curve.
'------------------------------------------------------------------------------
sub ApplyPathByKnots( in_InputObjs, in_Path, in_StartTime, in_EndTime, in_Step, in_ModifiedFrames )

	Dim cns, cnsProp, l_CnsedCount, l_CnsingCount, i, l_nbKnots, _
		l_nKey, l_val, l_time, l_Name, l_lastval, l_nextframeindex, l_nextframe, l_gotmodframes

	if IsEmpty(in_InputObjs) Or TypeName(in_InputObjs) = "Nothing" Then
		Exit Sub
	end if

	if IsEmpty(in_Path) Or TypeName(in_Path) = "Nothing" Then
		Exit Sub
	end if

	if( in_Step * (in_EndTime - in_StartTime )) <= 0 then
		Exit Sub
	end if

	l_CnsedCount = in_InputObjs.count
	l_CnsingCount = in_Path.count

	'Number of object to be constrained must fit the number of curve.
	if ( l_CnsedCount <> l_CnsingCount ) then
		Exit Sub
	end if

	' Go through selection
	For i = 0 to l_CnsedCount-1 
		'Apply the constraint

		SIApplyCns "Path", in_InputObjs( i ), in_Path( i )

		' Get the number of distinct knots the current curve has.
		l_nbKnots = GetNumberOfKnots( in_Path( i ) ).value("NbItems")
		
		l_time = in_StartTime
		l_lastval = 0
		l_nextframe = in_StartFrame - 1
		l_gotmodframes = False

		If UBound(in_ModifiedFrames) > 0 Then
			if typename(in_ModifiedFrames(i)) <> "Empty" Then
				If UBound(in_ModifiedFrames(i)) > 0 Then
					l_gotmodframes = True
					l_nextframeindex = 0
					GetArrayAt in_ModifiedFrames(i), l_nextframeindex, l_nextframe
				End If
			End if
		End If

		if( l_nbKnots > 0 ) then
			
			l_Name = in_InputObjs( i ) & ".kine.PathCns.perc"

			' We need to iterate through all the frames, bacause all frames might not be represented as knots
			l_nKey = 0
			For l_frame = in_StartTime to in_EndTime step in_Step
				' Check if the current frame's knot has been omitted or not 
				If l_gotmodframes and (l_frame = l_nextframe) Then
					' Knot for this frame has been omitted
					Savekey l_Name, l_time, l_lastval,, 0

					' Retrieve the next omitted frame
					l_nextframeindex = l_nextframeindex + 1
					If UBound(in_ModifiedFrames(i))-1 < l_nextframeindex Then
						l_nextframe = in_StartFrame - 1
						l_gotmodframes = false
					else
						GetArrayAt in_ModifiedFrames(i), l_nextframeindex, l_nextframe
					end if
				Else
					' There is a knot for this frame

					'Get the percentage value of the curve at the corresponding knot
					if (l_nKey < l_nbKnots) Then
						l_val = GetCurvePercentageAtKnotIndex( in_Path( i ), l_nKey ).value("Percentage")

						' Set the key value
						Savekey l_Name, l_time, l_val,, 0

						l_lastval = l_val
						l_nKey = l_nKey + 1
					End if
				End If

				l_time = l_time + in_Step
			Next 

		end if
	Next

end sub

'------------------------------------------------------------------------------
' NAME:		GetInputAndPlotShapeProc
' INPUT:	List of objects to plot the shape of
' DESCRIPTION: Prompt the user for values before calling PlotShape
'------------------------------------------------------------------------------
sub GetInputAndPlotShapeProc ( in_InputObjs, in_Name, in_StartFrame, in_EndFrame, in_Step, in_ApplyKeys, in_Mode, in_Content, in_RefMode, in_SingleSource, out_Keys, out_Clips )


	' constants for ApplyShapeKey mode
	const siInstanceOnly		= 0
	const siWeightMix			= 1
	const siTransition			= 2
	const siTransitionCardinal	= 3
	const siUseDefault			= 4

	' NOTE: have you noticed that start, end, step are not used from the input args?
	' they should be removed from the passed parameters!!!

	Dim l_start, l_end, l_step, l_mode, l_apply, l_CPList, l_SceneRoot, l_CustomParam
	Dim l_GeneratePset
	Dim l_Content, l_ConstructionMode, l_RefMode

	l_start = GetValue("Project.Data.PlayControl.In")
	l_end = GetValue("Project.Data.PlayControl.Out")
	l_step = GetValue("Project.Data.PlayControl.Step")
	l_mode = GetValue( "Preferences.shape_animation.ShapeInstancingMode" )

	' Don't apply the keys by default if we are in InstanceOnly mode
	if l_mode = siInstanceOnly then
	    l_apply = False
	else
	    l_apply = True
	end if

	if ( in_Content = siShapeContentUseConstructionMode ) then

		l_ConstructionMode = GetValue( "context.ConstructionMode" )
	
		if l_ConstructionMode = siConstructionModePrimaryShape then
			l_Content = siShapeContentPrimaryShape
		else if l_ConstructionMode = siConstructionModeSecondaryShape then
			l_Content = siShapeContentSecondaryShape
		else
			l_Content = siShapeContentAllDeforms
		end if
		end if
	else
		l_Content = inContent
	end if

	if l_Content = siShapeContentAllDeforms then
		l_RefMode = siShapeAbsoluteReferenceMode
	else
		l_RefMode = GetValue( "Preferences.shape_animation.ShapeReference" )
	end if

	' I keep this around so it's easier to regenerate a new pset/preset if needed
	l_GeneratePset = FALSE

	Set l_SceneRoot = ActiveSceneRoot
	if (l_GeneratePset = TRUE) then
		'Build the Dialog
		Set l_CPList = SIAddProp( "Custom_parameter_list", l_SceneRoot , , "PlotShape").value("Value")
		l_CustomParam = l_SceneRoot & "." & l_CPList

		SIAddCustomParameter l_CustomParam , "Start", siDouble, _
			l_start, -1000000, 1000000, , siPersistable+siSilent, l_start, l_end, "Start", "Start Frame"
		SIAddCustomParameter l_CustomParam , "End", siDouble, _
			l_end, -1000000, 1000000, , siPersistable+siSilent, l_start, l_end, "End", "End Frame"
		SIAddCustomParameter l_CustomParam , "Step", siDouble, _
			l_step, -1000000, 1000000, , siPersistable+siSilent, 0, l_end - l_start, "Step", "Step value"
		SIAddCustomParameter l_CustomParam , "ApplyKeys", siBool, _
			l_apply, , , , siPersistable+siSilent, , , "ApplyKeys", "Apply Keys"
		SIAddCustomParameter l_CustomParam , "Mode", siInt2, _
			l_mode, 0, 4, , siPersistable+siSilent, 0, 4, "Instantiation Mode", "Instantiation Mode"
		SIAddCustomParameter l_CustomParam , "ShapeName", siString, _
			, , , , siPersistable+siSilent, , , "Shape Name", "Shape Name"
		if in_Name <> "" then
			SetValue l_CustomParam & ".ShapeName" , in_Name
		end if

		SIAddCustomParameter l_CustomParam , "ShapeContent", siInt2, _
			l_Content, 0, 3, , siPersistable+siSilent, 0, 3, "Shape Content", "Shape Content"
		SIAddCustomParameter l_CustomParam , "RefMode", siInt2, _
			l_RefMode, 0, 3, , siPersistable+siSilent, 0, 3, "Reference Mode", "ReferenceMode"
		SIAddCustomParameter l_CustomParam , "SingleSource", siBool, _
			in_SingleSource, 0, 1, , siPersistable+siSilent, 0, 1, "Single Source", "Single Source"

	Else
		' We have a preset already for this custom pset, for which we have defined a SPDL file
		Set l_SceneRoot = ActiveSceneRoot
		Set l_CPList = SIAddProp("PlotShape", l_SceneRoot, , "PlotShape").value("Value")
		l_CustomParam = l_SceneRoot & "." & l_CPList

		' Initialize with the input values
		SetValue l_CustomParam & ".Start",		l_start
		SetValue l_CustomParam & ".End",		l_end
		SetValue l_CustomParam & ".Step",		l_step
		SetValue l_CustomParam & ".ApplyKeys",	l_apply
		SetValue l_CustomParam & ".Mode",		l_mode
		if in_Name <> "" then
			SetValue l_CustomParam & ".ShapeName",	in_Name 
		end if

	End if

	SetValue l_CustomParam & ".ShapeContent" , l_Content
	SetValue l_CustomParam & ".RefMode" , l_RefMode

	If FWizardDialog(l_CustomParam,"Plot Shape To Action") = vbOk Then
		in_StartFrame = GetValue( l_CustomParam & ".Start" )
		in_EndFrame = GetValue( l_CustomParam & ".End" )
		in_Step = GetValue( l_CustomParam & ".Step" )
		in_ApplyKeys = GetValue( l_CustomParam & ".ApplyKeys" )
		in_Name = GetValue( l_CustomParam & ".ShapeName" )
		in_Mode  = GetValue( l_CustomParam & ".Mode" )
		in_Content = GetValue( l_CustomParam & ".ShapeContent" )
		in_RefMode = GetValue( l_CustomParam & ".RefMode" )
		in_SingleSource = GetValue( l_CustomParam & ".SingleSource" )
		PlotShape in_InputObjs, in_Name, in_StartFrame, in_EndFrame, in_Step, in_ApplyKeys, in_Mode, in_Content, in_RefMode, in_SingleSource, out_Keys, out_Clips
		DeleteObj l_CustomParam
	Else
		DeleteObj l_CustomParam
		Err.Raise siErrCancelled
	End If

end sub


'------------------------------------------------------------------------------
' NAME:		MergeSceneProc
'
' INPUT:	N/A
'
' DESCRIPTION: Merge a scene into a model and inspect a model object 
'				
'------------------------------------------------------------------------------
function MergeSceneProc( in_filename, in_name, in_parent, in_shareClips )
	dim rtn, obj

	set rtn = SIMergeScene( in_filename, in_name, in_parent, in_shareClips )
	set obj = rtn.value("CreatedObj")
	set MergeSceneProc = obj

	'--------------------------------------------------------------------
	' Select and inspect the model
	'--------------------------------------------------------------------
	if not TypeName(obj) = "Nothing" then
		SelectObj obj, "NODE"
	end if

end function

'------------------------------------------------------------------------------
' NAME:		RemoveAllCnsProc
'
' INPUT:	- in_InputObjs			list of objects to remove constraints from
'			- in_BranchFlag		branch or node
'
' DESCRIPTION: Remove constraints from object(s) and all children (if branch flag set)
'------------------------------------------------------------------------------
sub RemoveAllCnsProc( in_InputObjs, in_BranchFlag )

	Dim l_Obj, l_Children, l_BranchFlag, l_ObjectList, l_PSetFilter

	if Not IsObject(in_InputObjs) Then
		exit sub
	end if

	if in_InputObjs.Count = 0 Then
		exit sub
	end if

	'
	' only attempt to remove constraints from 3DObjects
	set l_ObjectList = SIFilter( in_InputObjs, siObjectFilter )

	If Not TypeName(l_ObjectList) = "Nothing" Then
		RemoveCns in_InputObjs,,TRUE
	End If

	' for each object in list traverse children if the branch flag is set.
	for each l_Obj in in_InputObjs

		If in_BranchFlag = siUnspecified then
			l_BranchFlag = l_Obj.branchflag
		Else 
			l_BranchFlag = in_BranchFlag
		End If

		set l_Children = EnumElements( l_Obj )

		' remove constraints from children
		if Not TypeName(l_Children) = "Nothing" Then

			' set pset filter 
			l_PSetFilter = siParameterPSet or siPortPSet or siLocalPSet or siSharedPSet

			If l_BranchFlag = siNode Then
				l_PSetFilter = l_PSetFilter or siObjectPSet
			end if

			' filter out unwanted components
			set l_Children = FilterPSet( l_Children, l_PSetFilter, FALSE )
			
			' remove its nested object named "Children" if we are in node mode
			if ( Not TypeName(l_Children) = "Nothing" ) AND l_BranchFlag = siNode Then
				l_Children.Remove( l_Obj.Fullname + ".Children" )
			end if

			' remove constraints from children
			if Not TypeName(l_Children) = "Nothing" Then
				RemoveAllCnsProc l_Children, l_BranchFlag
			end if
		end if
	next
			
end sub

'------------------------------------------------------------------------------
' NAME:		RemoveAllPropertiesProc
'
' INPUT:	- in_InputObjs			list of object to remove properties from
'			- in_BranchFlag		branch or node
'
' DESCRIPTION: Remove all local properties from object and all children
' (if branch flag set)
'------------------------------------------------------------------------------
sub RemoveAllPropertiesProc( in_InputObjs, in_BranchFlag )
	Dim l_Obj, l_Children, l_BranchFlag, l_LocalProps, l_PSetFilter

	if Not IsObject(in_InputObjs) Then
		exit sub
	end if

	if in_InputObjs.Count = 0 Then
		exit sub
	end if


	' remove local properties 
	set l_LocalProps = FilterPSet( in_InputObjs, siLocalPSet )

	If Not TypeName(l_LocalProps) = "Nothing" Then
		set in_InputObjs = FilterPSet( in_InputObjs, siLocalPSet, FALSE )
		DeleteObj l_LocalProps
	End If

	' for each object in list traverse children if the branch flag is set.
	for each l_Obj in in_InputObjs
	
		If in_BranchFlag = siUnspecified then
			l_BranchFlag = l_Obj.branchflag
		Else 
			l_BranchFlag = in_BranchFlag
		End If

		set l_Children = EnumElements( l_Obj )

		' remove props from children
		if Not TypeName(l_Children) = "Nothing" Then
			l_PSetFilter = siParameterPSet or siPortPSet or siSharedPSet

			If l_BranchFlag = siNode Then
				l_PSetFilter = l_PSetFilter or siObjectPSet
			end if

			' filter out unwanted components
			set l_Children = FilterPSet( l_Children, l_PSetFilter, FALSE )
			
			' remove its nested object named "Children" if we are in node mode
			if ( Not TypeName(l_Children) = "Nothing" ) AND l_BranchFlag = siNode Then
				l_Children.Remove( l_Obj.Fullname + ".Children" )
			end if

			' remove props from children e.g. clusters
			if Not TypeName(l_Children) = "Nothing" Then	
				RemoveAllPropertiesProc l_Children, l_BranchFlag
			end if
		end if
	next
			
end sub

'------------------------------------------------------------------------------
' NAME:		RemovePropertiesProc
'
' INPUT:	- in_obj
'			- in_proptype
'			- in_branchflag
'
' OUTPUT:	- N/A
'
' DESCRIPTION: Delete all properties of property type under branch or node
'------------------------------------------------------------------------------
sub RemovePropertiesProc ( in_objs, in_proptype, in_branchflag )

	Dim l_Obj, l_Prop, l_PropList, l_DeleteList

	for each l_Obj in in_objs
		set l_PropList = FFindProp( l_Obj, in_proptype, in_branchflag )

		if Not TypeName(l_PropList)  = "Nothing" then
			if TypeName(l_DeleteList) = "Empty" then
				set l_DeleteList = l_PropList
			else
				l_DeleteList.AddItems l_PropList
			end if
			set l_PropList = Nothing
		end if
	next

	'--------------------------------------------------------------------
	' delete all properties
	'--------------------------------------------------------------------
	if Not TypeName(l_DeleteList) = "Empty" then
		DeleteObj l_DeleteList
	end if

end sub

'------------------------------------------------------------------------------
' NAME:		ToggleValueProc
'
' INPUT:	- in_InputObjs			list of objects to toggle parameters on
'			- in_ParamNames			which (bool) parameters to toggle
'
' DESCRIPTION: Will check the given parameter on the first object.  If it's true,
' will set parameter to false on all objects (including first one).  If false, will 
' set parameter to true on all objects.
'------------------------------------------------------------------------------
sub ToggleValueProc( in_ParamNames, in_InputObjs )
	Dim l_Obj, l_NewVal, l_CompStr, l_ParamArray, l_ParamName

	' Use 20000 since split doesn't work properly with -1 on IRIX
	l_ParamArray = Split(in_ParamNames, ",", 20000, 1)

	l_CompStr = in_InputObjs(0) & "." & l_ParamArray(0)
	l_NewVal = Not ( CBool( GetValue( l_CompStr ) = True))

	for each l_Obj in in_InputObjs
		for each l_ParamName in l_ParamArray
			l_CompStr = l_Obj & "." & l_ParamName 
			SetValue l_CompStr, l_NewVal
		next
	next 

end sub

'------------------------------------------------------------------------------
' NAME:		SetDisplayMode
'
' INPUT:	- in_InputObjs			list of cameras toggle parameters on
'			- in_DisplayMode		display mode to set
'
' DESCRIPTION: Change camera's display mode
'------------------------------------------------------------------------------
Sub SetDisplayMode( in_InputObjs, in_DisplayMode )
	Dim l_Index, l_Obj, CAMDISP, l_Params, l_bFastManip

	' Constants:
	Dim ModeValueStr1, ModeValueStr3, ModeValueStr2, ModeValueStr5
	' Due to inefficient arrays in VBScript, the Mode is 
	' encoded in ASCII in the ModeValueStr strings using
	' A = wireframe
	' B = shaded
	' E = textured
	' F = bbox
	' G = hiddenline
	' H = constant
	' J = texturedecal
	' K = realtimeshaders
	'
	' Position in array is:
	'
	' realtimeshaders________
	' texturedecal__________ |
	' textured_____________ ||
	' shaded______________ |||
	' constant___________ ||||
	' depthcue__________ |||||
	' bbox_____________ ||||||
	' wireframe_______ |||||||
	' hiddenline ____ ||||||||
	'                |||||||||
	ModeValueStr1 = "GAFAHBEJK" ' Default mode and SlowManip mode
	ModeValueStr2 = "AFFFAAAAA" ' FastManip mode for ParameterGroup2
	ModeValueStr3 = "AAFAAAAAA" ' FastManip mode for ParameterGroup3
	' The encoding is slightly different for the "Step"-like parameters:
	' A = Full
	' B = Coarse
	ModeValueStr5 = "BBABBBBBB"
	'
	Dim ParameterGroup1, ParameterGroup2, ParameterGroup3, ParameterGroup4, ParameterGroup5
	ParameterGroup1 = "CAMDISP.statunselnear,CAMDISP.statunselfar,CAMDISP.statsel"
	ParameterGroup2 = "CAMDISP.intunselnear,CAMDISP.intunselfar,CAMDISP.playbackunselnear,CAMDISP.playbackunselfar"
	ParameterGroup3 = "CAMDISP.playbacksel,CAMDISP.intsel"
	ParameterGroup4 = "CAMDISP.statunselnear_res,CAMDISP.statunselfar_res,CAMDISP.statsel_res,CAMDISP.intsel_res"
	ParameterGroup5 = "CAMDISP.intunselnear_res,CAMDISP.intunselfar_res,CAMDISP.playbackunselnear_res,CAMDISP.playbackunselfar_res,CAMDISP.playbacksel_res"

	' remain backward compatible with old script using this function
	if in_DisplayMode = "realtimeshaders" then in_DisplayMode = "OpenGL"

	' Convert mode string to index into ModeValueStr
	l_Index = 0
	Select Case in_DisplayMode
		Case "hiddenline"		l_Index = 1
		Case "wireframe"		l_Index = 2
		Case "bbox"				l_Index = 3
		Case "depthcue"			l_Index = 4
		Case "constant"			l_Index = 5
		Case "shaded"			l_Index = 6
		Case "textured"			l_Index = 7
		Case "texturedecal"		l_Index = 8
		Case else				l_Index = 9
	End Select

	if l_Index <> 0 Then
		for each l_Obj in in_InputObjs
			CAMDISP = l_Obj & ".camdisp"

			' Set viewport mode name
			SetValue CAMDISP & ".viewportmodename", in_DisplayMode

			l_bFastManip = GetValue( CAMDISP & ".fastmanip" )
	
			if l_Index = 4 Then
				SetValue CAMDISP & ".wrfrmdpthcueenab", 1
			else
				SetValue CAMDISP & ".wrfrmdpthcueenab", 0
			End if
			
			l_Params = Replace(ParameterGroup1, "CAMDISP", CAMDISP )
			SetValue l_Params, asc(mid(ModeValueStr1,l_Index,1)) - asc("A")
	
			l_Params = Replace(ParameterGroup2, "CAMDISP", CAMDISP )
			if l_bFastManip Then
				SetValue l_Params, asc(mid(ModeValueStr2,l_Index,1)) - asc("A")
			else
				SetValue l_Params, asc(mid(ModeValueStr1,l_Index,1)) - asc("A")
			End if
	
			l_Params = Replace(ParameterGroup3, "CAMDISP", CAMDISP )
			if l_bFastManip Then
				SetValue l_Params, asc(mid(ModeValueStr3,l_Index,1)) - asc("A")
			else
				SetValue l_Params, asc(mid(ModeValueStr1,l_Index,1)) - asc("A")
			End if
	
			' These one are always set to "Full step"
			l_Params = Replace(ParameterGroup4, "CAMDISP", CAMDISP )
			SetValue l_Params ,0
	
			l_Params = Replace(ParameterGroup5, "CAMDISP", CAMDISP )
			if l_bFastManip Then
				SetValue l_Params, asc(mid(ModeValueStr5,l_Index,1)) - asc("A")
			else
				SetValue l_Params, 0
			End if
		Next
	End If
End Sub

'------------------------------------------------------------------------------
' NAME:		CopyAnimProc
'
' DESCRIPTION: Copies the animation on the parameters in the input list to the 
' buffer
'------------------------------------------------------------------------------
sub CopyAnimProc( in_InputObjs )
	Dim l_Source, l_SourceList

	' -----------------------------------------
	' Validate input
	' -----------------------------------------
	if IsEmpty(in_InputObjs) Or TypeName(in_InputObjs) = "Nothing" Then
		Exit Sub
	end if

	set l_SourceList = GetSource(in_InputObjs, siAnySource)

	if (TypeName(l_SourceList) = "Nothing") Or (IsEmpty(l_SourceList)) then
		exit sub
	end if

	Copy l_SourceList 

end sub

'------------------------------------------------------------------------------
'
' NAME:			FIsComponent
'
' INPUT:		in_strComp - path to test for validity
'
' RETURNED:		true - path exists; false - path is invalid
'
' DESCRIPTION:	find out if a component exists at the named path
'
'------------------------------------------------------------------------------
function FIsComponent( in_strComp )
	On Error Resume Next

	set obj = CreateObject("XSI.CollectionItem")
	obj.value = in_strComp
	l_strComp = obj.value
	if Not CStr(l_strComp) = "" then
		FIsComponent = True
	else
		FIsComponent = False		
	end if
end function

'------------------------------------------------------------------------------
'
' NAME:			DeleteOverride
'
' INPUT:			none
'
' DESCRIPTION:	Cycle through selection list and delete all local override
'
'------------------------------------------------------------------------------
Function DeleteOverride
	Dim sel, elem, myChildren, child, ans
	set sel = GetValue("SelectionList")
	if sel <> "" then
		for each elem in sel
			if elem.type = "#Group" then 'if it is a group, we enum differently
				set myChildren = EnumElements( elem & ".CurrentProperties", TRUE )
			else
				set myChildren = EnumElements( elem & ".nodecurrent", TRUE )
			end if
			if TypeName(myChildren) <> "Nothing" then
				for each child in myChildren 
					if child.type = "#Override" then 
						Logmessage "Deleting Override: " & child
						DeleteObj child
					end if
				next
			end if
		next
	else
	LogMessage "No Object Selected"
	End if
End Function

'------------------------------------------------------------------------------
'
' NAME:			StoreProperties
'
' INPUT:		in_Object - the root of the hierarchy to store psets from
'				in_PsetName - the pset name (ex: "Material") to store
'
' DESCRIPTION:	Stores the given proerties from the given hierarchy. Override is
' installed if needed
'
'------------------------------------------------------------------------------
sub StoreProperties( in_Object, in_PsetName )
	pset_override = in_Object & ".Override"

	' if the Override doesn't exist, create one.
	if FIsComponent( pset_override ) = False then
		SIAddProp "Override",  in_Object, 0
	end if

	'Create a Collection for all the properties
	set l_Collection = CreateObject("XSI.Collection")
	On Error Resume Next
	l_Collection.Items = in_Object & ".*." & in_PsetName
	
	if  FIsComponent( in_Object & "." & in_PsetName ) = True then
		l_Collection.Add in_Object & "." & in_PsetName
	end if

	' Filter the result and remove the shared instances.
	set l_Collection = FilterPset(l_Collection, siLocalPset, TRUE)

	if not typename(l_Collection) = "Nothing" then
		SIStoreProp l_Collection, pset_override
	end if
end sub

'------------------------------------------------------------------------------
'
' NAME:			StorePropertiesProc - same as StoreProperties, but 
'				inspects the addon
'
' INPUT:		in_Object - the root of the hierarchy to store psets from
'				in_PsetName - the pset name (ex: "Material") to store
'
'------------------------------------------------------------------------------
sub StorePropertiesProc( in_Objects, in_PsetName )
	if Not IsObject(in_Objects) Then
		exit sub
	end if

	if in_Objects.Count < 1 then
		exit sub
	end if

	for each in_Object in in_Objects
		
		pset_override = in_Object & ".Override"

		StoreProperties in_Object, in_PsetName

		if FIsComponent( pset_override ) = True then
			InspectObj pset_override
		end if
	next

end sub



'------------------------------------------------------------------------------
' NAME:			GetSequenceParametersMethodProc
' DESCRIPTION:	Brings up the Sequence Wizard dialogue then calls SequenceProc
'------------------------------------------------------------------------------
sub GetSequenceParametersMethodProc( _
	byref	io_InputObjs, _
	byref	io_SequenceType, _
	byref	io_Offset, _
	byref	io_Scale, _
	byref	io_Start, _
	byref	io_End, _
	byref	io_Pivot, _
	byref	io_SequenceMode, _
	byref   io_AllLayers, _
	byref   io_InputMethod, _
	byref   in_title _
)
	
	DIM l_CustomParam, l_SceneRoot, l_CPList, l_start, l_end
	DIM l_Prompt, l_Start2, l_End2, l_layer


	' Make Sure we have a valid selection
	if IsEmpty(io_InputObjs) Or TypeName(io_InputObjs) = "Nothing" Then
		Err.Raise siErrCancelled
		Exit Sub
	end if

	Set l_SceneRoot = ActiveSceneRoot

	l_start = io_Start
	l_end = io_End

	' Keep this around, set it to TRUE if you need to add params and regenerate the preset + spdl
	l_GeneratePset = FALSE

	' When you generate your preset, if not all the parameters appear in the PPG, go in the FCurve.dscmdinl file
	' and add the DSCMD_UNDOABLE flag to the Sequence command (remember to remove it later when you're done
	' generating your preset). This is due to a weird bug!
	' NOTE: Now the command is undoable, so no need to go to the FCurve.dscmdinl.
	if (l_GeneratePset = TRUE) then

		'Build the Dialog
		'Create a custom sequence wizard propery
		Set l_CPList = SIAddProp( "Custom_parameter_list", l_SceneRoot, , "Sequence" ).value("Value")
		l_CustomParam = l_SceneRoot & "." & l_CPList

		SIAddCustomParameter l_CustomParam , "InputMethod", siInt2, io_InputMethod, 0, 1, , 4, 0, 1, "InputMethod", "Input Method"

		SIAddCustomParameter l_CustomParam , "Offset", siDouble, io_Offset, -1000000, 1000000, , 4, -100, 100, "Offset", "Offset Frames"
		SIAddCustomParameter l_CustomParam , "Scale", siDouble, io_Scale, -1000000, 1000000, , 4, 1, 10, "Scale", "Scaling Factor"

		SIAddCustomParameter l_CustomParam , "StartFrame", siDouble, l_start, -1000000, 1000000, , 4, l_start, l_end, "StartFrame", "Start Frame"
		SIAddCustomParameter l_CustomParam , "Pivot", siDouble, l_start, -1000000, 1000000, , 4, l_start, l_end, "Pivot", "Pivot"
		SIAddCustomParameter l_CustomParam , "EndFrame", siDouble, l_end, -1000000, 1000000, , 4, l_start, l_end, "EndFrame", "End Frame"

		SIAddCustomParameter l_CustomParam , "StartAfter", siDouble, l_start, -1000000, 1000000, , 4, l_start, l_end, "StartAfter", "Start After"
		SIAddCustomParameter l_CustomParam , "EndAfter", siDouble, l_end, -1000000, 1000000, , 4, l_start, l_end, "EndAfter", "End After"

		' You'll have to manually change de SPDL file in order to make a combo box with this parameter
		SIAddCustomParameter l_CustomParam , "SequenceMode", siInt2, 2, 0, 5, , 4, 0, 5, "SequenceMode", "Sequence Mode"
		SIAddCustomParameter l_CustomParam , "GhostSequenceType", siInt2, io_SequenceType, 0, 3, , 4, 0, 3, "GhostSequenceType", "GhostSequenceType"
		SIAddCustomParameter l_CustomParam , "AllLayers", siBool, True, False, True, , 4, False, True, "AllLayers", "Layers"

	Else
		' We have a preset defined for this custom pset, for which we have defined a SPDL file
		Set l_CPList = SIAddProp("Sequence", l_SceneRoot, , "Sequence").value("Value")
		l_CustomParam = l_SceneRoot & "." & l_CPList
	
		' Initialize with the input values
		SetValue l_CustomParam & ".InputMethod", io_InputMethod
		SetValue l_CustomParam & ".Offset", io_Offset
		SetValue l_CustomParam & ".Scale", io_Scale
		SetValue l_CustomParam & ".StartFrame", l_start
		SetValue l_CustomParam & ".Pivot", l_start
		SetValue l_CustomParam & ".EndFrame", l_end
		SetValue l_CustomParam & ".StartAfter", l_start
		SetValue l_CustomParam & ".EndAfter", l_end
		SetValue l_CustomParam & ".SequenceMode", io_SequenceMode
		SetValue l_CustomParam & ".GhostSequenceType", io_SequenceType
		SetValue l_CustomParam & ".AllLayers", io_AllLayers
	End if

	'Launch the dialog and wait for OK or Cancel to pressed.
	If FWizardDialog(l_CustomParam, in_title ) = vbOk Then

		'Read the parameters of the property page
		io_InputMethod  = GetValue( l_CustomParam & ".InputMethod")
		io_Offset  = GetValue( l_CustomParam & ".Offset")
		io_Scale  = GetValue( l_CustomParam & ".Scale")
		io_Start  = GetValue( l_CustomParam & ".StartFrame")
		io_Pivot = GetValue( l_CustomParam & ".Pivot")
		io_End = GetValue( l_CustomParam & ".EndFrame")
		l_Start2  = GetValue( l_CustomParam & ".StartAfter")
		l_End2 = GetValue( l_CustomParam & ".EndAfter")
		io_SequenceMode = GetValue( l_CustomParam & ".SequenceMode" )
		io_AllLayers = GetValue( l_CustomParam & ".AllLayers" )

		' Sequence single layer or all layers
		l_layer = -1
		if ( io_AllLayers = 0 ) then
			l_layer = GetCurrentAnimationLayer(io_InputObjs)
		end if

		' Input Method = 1 = start/end before and after (otherwise we use the scale + offset method)
		if ( io_inputmethod = 1 ) then
			io_Offset = l_Start2 - io_Start
			io_Scale = ( l_End2 - l_Start2 ) / ( io_End - io_Start )
			io_Pivot = io_Start
		end if

		'Call the command which will invoke the SequenceAnimation Task. We have Ripple True or ON by default
		'for Sequence feature.
		ScaleAndOffset io_InputObjs, io_SequenceType, io_Offset, io_Scale, io_Start, io_End, io_Pivot, TRUE, io_SequenceMode,,, l_layer

		DeleteObj l_CustomParam
	Else
		DeleteObj l_CustomParam
		Err.Raise siErrCancelled
	End If
end sub

'------------------------------------------------------------------------------
' NAME:			GetSequenceParametersProc
' DESCRIPTION:	Calls GetSequenceParametersMethodProc witht the Offset&Scale method
'				I need this because i couldn't simply add a new param to 
'				GetSequenceParametersProc, the cmdmap doesn't accept it.
'------------------------------------------------------------------------------
sub GetSequenceParametersProc( _
	byref	io_InputObjs, _
	byref	io_SequenceType, _
	byref	io_Offset, _
	byref	io_Scale, _
	byref	io_Start, _
	byref	io_End, _
	byref	io_Pivot, _
	byref	io_SequenceMode, _
	byref	io_AllLayers _
)

	' Get the in and out times of the timeline.
	dim l_In, l_Out
	l_In = GetValue("Project.Data.PlayControl.In")
	l_Out = GetValue("Project.Data.PlayControl.Out")

	io_Start = l_In
	io_End = l_Out

	GetSequenceParametersMethodProc io_InputObjs, io_SequenceType, io_Offset, io_Scale, io_Start, io_End, io_Pivot, io_SequenceMode, io_AllLayers, 0, "Sequence" 
end sub

'------------------------------------------------------------------------------
' NAME:			validatePathRetimeInput
' DESCRIPTION:	Used by the PathRetime scripts. Check if any object in the
'				input list has a path cns on it, and returns a parameter
'				string in the form "obj1.kine.pathcns.perc,obj2.kine...."
'------------------------------------------------------------------------------
function validatePathRetimeInput( in_InputObjs, byref	io_str, o_fstkey, o_lstkey )
	Dim l_foundone, l_pathcns, l_fcv

	io_str     = ""
	l_foundone = False
	o_fstkey = GetValue("Project.Data.PlayControl.In")
	o_lstkey = GetValue("Project.Data.PlayControl.Out")
	l_initrange = True

	for i = 0 to in_InputObjs.count - 1

		' See if this object has a path cns on it.
		on Error Resume Next
		set l_pathcns = GetValue( in_InputObjs(i) & ".kine.pathcns" )

		if Not ( IsEmpty(l_pathcns) Or (TypeName(l_pathcns) = "Nothing") ) Then
			if ( l_foundone ) then
				io_str = io_str & ","
			end if


			set oRoot = Application.ActiveProject.ActiveScene.Root
			set oObj = oRoot.FindChildren( in_InputObjs(i) )(0)
			set oParam = oObj.kinematics.constraints("pathcns").Parameters("perc")

			set l_fcv = oParam.Source

			if typename(l_fcv) <> "Nothing" then

				set l_keys = l_fcv.Keys

				'logmessage " key count " & l_keys.count
				'logmessage " key count " & l_keys(0).Time  ' frame for the 1st key
				'logmessage " key count " & l_keys(l_keys.count-1).Time  ' frame for the last key
				l_firstkey = l_keys(0).Time  ' frame for the 1st key
				l_lastkey  = l_keys(l_keys.count-1).Time  ' frame for the last key

				if ( l_initrange ) then
					o_fstkey = l_firstkey
					o_lstkey = l_lastkey
					l_initrange = False
				else
					if ( l_firstkey < o_fstkey ) then o_fstkey = l_firstkey 
					if ( l_lastkey  > o_lstkey ) then o_lstkey = l_lastkey
				end if
			end if

			io_str = io_str & in_InputObjs(i) & ".kine.pathcns.perc"
			l_foundone = True
		end if
	next
	validatePathRetimeInput = l_foundone

	'logmessage " range " & o_fstkey & "," & o_lstkey
end function

'------------------------------------------------------------------------------
' NAME:			GetInputAndPathRetimeProc
' DESCRIPTION:	Calls GetSequenceParametersProc with the given objects, but 
'               explicitely with the pathcns.perc parameter. This will handle
'				retiming of path constraints directly, without requiring the
'				user to know he has to mark the percentage parameter.
'------------------------------------------------------------------------------
sub GetInputAndPathRetimeProc( in_InputObjs, io_start1, io_end1, io_start2, io_end2 )
	Dim str, l_offset, l_scale, l_pivot, l_start1, l_end1, l_startfcv, l_endfcv

	if Not validatePathRetimeInput( in_InputObjs, str, l_startfcv, l_endfcv ) then
		LogMessage XSIUtils.Translate(IDS_SELECT_MORE_OBJECTS, "XSISCRIPTS"), 4
		SIMsgBox XSIUtils.Translate(IDS_SELECT_MORE_OBJECTS, "XSISCRIPTS"), vbOKOnly + vbExclamation, XSIUtils.Translate("Warning", "XSISCRIPTS" ), vbOK
		Err.Raise siErrCancelled
		Exit Sub
	end if

	'logmessage " GetInputAndPathRetimeProc range " & l_startfcv & "," & l_endfcv
	if ( l_endfcv - l_startfcv >= 1.0 ) then
		io_start1 = l_startfcv
		io_start2 = l_startfcv
		io_end1 = l_endfcv
		io_end2 = l_endfcv
	end if

	l_offset = io_start2 - io_start1
	l_scale  = ( io_end2 - io_start2 ) / ( io_end1 - io_start1 )
	l_start1 = io_start1
	l_end1   = io_end1
	l_pivot  = io_start1

	GetSequenceParametersMethodProc str, siMarkedParams, l_offset, l_scale, l_start1, l_end1, l_pivot, siFCurvesAnimationSources, 1, 1, "Path Retime"

	io_start1 = l_start1
	io_end1   = l_end1
	io_start2 = l_offset + l_start1
	io_end2   = ( ( io_end1 - io_start1 ) * l_scale ) + io_start2

end sub

'------------------------------------------------------------------------------
' NAME:			PathRetimeProc
' DESCRIPTION:	Script-only version of GetInputAndPathRetimeProc. Calls
'				directly ScaleAndOffset with the right parameters.
'------------------------------------------------------------------------------
sub PathRetimeProc( in_InputObjs, io_start1, io_end1, io_start2, io_end2 )
	Dim str, l_offset, l_scale, l_pivot

	if Not validatePathRetimeInput( in_InputObjs, str ) then
		LogMessage XSIUtils.Translate(IDS_SELECT_MORE_OBJECTS, "XSISCRIPTS"), 4
		SIMsgBox XSIUtils.Translate(IDS_SELECT_MORE_OBJECTS, "XSISCRIPTS"), vbOKOnly + vbExclamation, XSIUtils.Translate("Warning", "XSISCRIPTS" ), vbOK
		Err.Raise siErrCancelled
		Exit Sub
	end if

	l_offset = io_start2 - io_start1
	l_scale  = ( io_end2 - io_start2 ) / ( io_end1 - io_start1 )
	l_pivot  = io_start1

	ScaleAndOffset str, siMarkedParams, l_offset, l_scale, io_start1, io_end1, l_pivot, TRUE, siFCurvesAnimationSources

	io_start2 = l_offset + io_start1
	io_end2   = ( ( io_end1 - io_start1 ) * l_scale ) + io_start2
	
end sub


'------------------------------------------------------------------------------
' NAME:			GetInputAndAlignProc
' DESCRIPTION:	Brings the Align Wizard dialogue then call AlignProc
'------------------------------------------------------------------------------
sub GetInputAndAlignProc( in_InputObjs, in_Axes, in_PosX, in_PosY, in_PosZ, in_RefX, in_RefY, in_RefZ, in_DoAllObj )
	DIM l_GeneratePset, l_AlignPset, l_Pset
	DIM	l_DoX, l_DoY, l_DoZ

	' Make Sure we have a valid selection
	if IsEmpty(in_InputObjs) Or TypeName(in_InputObjs) = "Nothing" Then
		Err.Raise siErrCancelled
		Exit Sub
	end if

	if in_InputObjs.count <= 1 Then
		LogMessage XSIUtils.Translate(IDS_SELECT_TWO_OBJECTS, "XSISCRIPTS" ), 4
		SIMsgBox XSIUtils.Translate(IDS_SELECT_TWO_OBJECTS, "XSISCRIPTS" ), vbOKOnly + vbExclamation, XSIUtils.Translate("Warning", "XSISCRIPTS" ), vbOK
		Err.Raise siErrCancelled
		Exit Sub
	end if


	' See if there is already an Align pset that contain the options.
	' If so, we will use those current values. If not we create a new one.
	' Currently we will let this pset under the Scene Root, but we
	' should eventually be able to place it under Project/Data.
    set l_AlignPset =  activesceneroot.properties("Align")

	if IsEmpty(l_AlignPset) Or (TypeName(l_AlignPset) = "Nothing") Then


		l_DoX = CBool( in_Axes and siX )
		l_DoY = CBool( in_Axes and siY )
		l_DoZ = CBool( in_Axes and siZ )

		' Keep this around so it's easier to regenerate a new pset/preset if needed
		l_GeneratePset = FALSE

		if (l_GeneratePset = TRUE) then

			'Build the Dialog
			Set l_Pset = SIAddProp("Custom_parameter_list", "Scene_Root", , "Align").value("Value")
			l_AlignPset = "Scene_Root." & l_Pset

			SIAddCustomParameter l_Pset, "doX", 11, l_DoX, FALSE, TRUE, 8, 4, FALSE, TRUE, "DoX", "DoX"
			SIAddCustomParameter l_Pset, "doY", 11, l_DoY, FALSE, TRUE, 8, 4, FALSE, TRUE, "DoY", "DoY"
			SIAddCustomParameter l_Pset, "doZ", 11, l_DoZ, FALSE, TRUE, 8, 4, FALSE, TRUE, "DoZ", "DoZ"

			SIAddCustomParameter l_Pset, "posX", 2, in_PosX, siAlignGMIN, siAlignFMAX, 8, 4, siAlignGMIN, siAlignFMAX, "PosX", "PosX"
			SIAddCustomParameter l_Pset, "posY", 2, in_PosY, siAlignGMIN, siAlignFMAX, 8, 4, siAlignGMIN, siAlignFMAX, "PosY", "PosY"
			SIAddCustomParameter l_Pset, "posZ", 2, in_PosZ, siAlignGMIN, siAlignFMAX, 8, 4, siAlignGMIN, siAlignFMAX, "PosZ", "PosZ"
	
			SIAddCustomParameter l_Pset, "doAllObj", 11, in_DoAllObj, FALSE, TRUE, 8, 4, FALSE, TRUE, "DoAllObj", "DoAllObj"
	
			SIAddCustomParameter l_Pset, "refX", 2, in_RefX, siAlignGMIN, siAlignFMAX, 8, 4, siAlignGMIN, siAlignFMAX, "RefX", "RefX"
			SIAddCustomParameter l_Pset, "refY", 2, in_RefY, siAlignGMIN, siAlignFMAX, 8, 4, siAlignGMIN, siAlignFMAX, "RefY", "RefY"
			SIAddCustomParameter l_Pset, "refZ", 2, in_RefZ, siAlignGMIN, siAlignFMAX, 8, 4, siAlignGMIN, siAlignFMAX, "RefZ", "RefZ"

		Else
			' We have a preset already for this custom pset, for which we have defined a SPDL file
			Set l_Pset = SIAddProp("AlignWizard", "Scene_Root", , "Align").value("Value")
			l_AlignPset = "Scene_Root." & l_Pset

			' Initialize with the input values
			SetValue l_AlignPset & ".doX", l_DoX
			SetValue l_AlignPset & ".doY", l_DoY
			SetValue l_AlignPset & ".doZ", l_DoZ
			SetValue l_AlignPset & ".posX", in_PosX
			SetValue l_AlignPset & ".posY", in_PosY
			SetValue l_AlignPset & ".posZ", in_PosZ
			SetValue l_AlignPset & ".doAllObj", in_DoAllObj
			SetValue l_AlignPset & ".refX", in_RefX
			SetValue l_AlignPset & ".refY", in_RefY
			SetValue l_AlignPset & ".refZ", in_RefZ 
		End if

	End if

	If FWizardDialog(l_AlignPset,"Align") = vbOk Then

		' Read the parameters of the property page
		l_DoX  = GetValue( l_AlignPset & ".doX")
		l_DoY  = GetValue( l_AlignPset & ".doY")
		l_DoZ  = GetValue( l_AlignPset & ".doZ")
		in_PosX = GetValue( l_AlignPset & ".posX")
		in_PosY = GetValue( l_AlignPset & ".posY")
		in_PosZ = GetValue( l_AlignPset & ".posZ")
		in_DoAllObj = GetValue( l_AlignPset & ".doAllObj")
		in_RefX = GetValue( l_AlignPset & ".refX")
		in_RefY = GetValue( l_AlignPset & ".refY")
		in_RefZ = GetValue( l_AlignPset & ".refZ")
		in_Axes = 0
		if l_DoX Then in_Axes = in_Axes + 1 End if
		if l_DoY Then in_Axes = in_Axes + 2 End if
		if l_DoZ Then in_Axes = in_Axes + 4 End if

		AlignProc in_InputObjs, in_Axes, in_PosX, in_PosY, in_PosZ, in_RefX, in_RefY, in_RefZ, in_DoAllObj

		' Do not delete the custom pset anymore, we keep it around so that
		' align parameters are persisted across uses.
	Else
		Err.Raise siErrCancelled
	End If


end sub



'------------------------------------------------------------------------------
' NAME:			AlignProc	
' DESCRIPTION:	Aligns objects in the selection according to given location
'------------------------------------------------------------------------------
sub AlignProc( in_InputObjs, Axes, posXmode, posYmode, posZmode, refXmode, refYmode, refZmode, doallobj )
	DIM gxmin,gymin,gzmin,gxmax,gymax,gzmax
	DIM fxmin,fymin,fzmin,fxmax,fymax,fzmax
	DIM lxmin,lymin,lzmin,lxmax,lymax,lzmax
	DIM rtn, trx,try,trz, rfx, rfy, rfz, axis, elem, firstelem, isfirstelem
	DIM	doX, doY, doZ

	if IsEmpty(in_InputObjs) Or TypeName(in_InputObjs) = "Nothing" Then
		Exit Sub
	end if

	doX = CBool( Axes and siX )
	doY = CBool( Axes and siY )
	doZ = CBool( Axes and siZ )

	' The axis is supposedly used by the translate command, i found that it doesn't really.
	' I'm seeting it anyway, for the day it works....
	axis  = Axes

	'Get the global bbox of the whole selection
	set rtn = GetBBox( in_InputObjs, TRUE ) 
	gxmin = rtn.value("LowerBoundX") 
	gymin = rtn.value("LowerBoundY") 
	gzmin = rtn.value("LowerBoundZ") 
	gxmax = rtn.value("UpperBoundX") 
	gymax = rtn.value("UpperBoundY") 
	gzmax = rtn.value("UpperBoundZ")

	'Get also the bbox of the first object in the selection	
	set firstelem = in_InputObjs(0)
	set rtn = GetBBox( firstelem, TRUE )
	fxmin = rtn.value("LowerBoundX") 
	fymin = rtn.value("LowerBoundY") 
	fzmin = rtn.value("LowerBoundZ") 
	fxmax = rtn.value("UpperBoundX") 
	fymax = rtn.value("UpperBoundY") 
	fzmax = rtn.value("UpperBoundZ") 

	' Determine which reference position we want to use in X
	if refXmode = siAlignGMAX then
		rfx = gxmax
	Elseif refXmode = siAlignGMIN then
		rfx = gxmin
	Elseif refXmode = siAlignGMIDDLE then
		rfx = ((gxmax + gxmin)/2)
	Elseif refXmode = siAlignFMAX then
		rfx = fxmax
	Elseif refXmode = siAlignFMIN then
		rfx = fxmin
	Else
		rfx = ((fxmax + fxmin)/2)
	End if

	' Determine which reference position we want to use in Y
	if refYmode = siAlignGMAX then
		rfy = gymax
	Elseif refYmode = siAlignGMIN then
		rfy = gymin
	Elseif refYmode = siAlignGMIDDLE then
		rfy = ((gymax + gymin)/2)
	Elseif refYmode = siAlignFMAX then
		rfy = fymax
	Elseif refYmode = siAlignFMIN then
		rfy = fymin
	Else
		rfy = ((fymax + fymin)/2)
	End if

	' Determine which reference position we want to use in Z
	if refZmode = siAlignGMAX then
		rfz = gzmax
	Elseif refZmode = siAlignGMIN then
		rfz = gzmin
	Elseif refZmode = siAlignGMIDDLE then
		rfz = ((gzmax + gzmin)/2)
	Elseif refZmode = siAlignFMAX then
		rfz = fzmax
	Elseif refZmode = siAlignFMIN then
		rfz = fzmin
	Else
		rfz = ((fzmax + fzmin)/2)
	End if

	isfirstelem = TRUE
	for each elem in in_InputObjs

		if ( doallobj Or Not isfirstelem ) Then

			if ( Not isfirstelem ) Then
				' Get the bbox of this one item
				set rtn = GetBBox( elem, TRUE )
				lxmin = rtn.value("LowerBoundX") 
				lymin = rtn.value("LowerBoundY") 
				lzmin = rtn.value("LowerBoundZ") 
				lxmax = rtn.value("UpperBoundX") 
				lymax = rtn.value("UpperBoundY") 
				lzmax = rtn.value("UpperBoundZ")
			Else
				lxmin = fxmin
				lymin = fymin
				lzmin = fzmin
				lxmax = fxmax
				lymax = fymax
				lzmax = fzmax
			End if

			' Determine the amount of displacement needed to align the object as needed 		
			trx	= 0
			try	= 0
			trz	= 0

			if doX = True then
				if posXmode = siAlignGMAX then
					trx = rfx - lxmax
				Elseif posXmode = siAlignGMIN then
					trx = rfx - lxmin
				Else
					trx = rfx - ((lxmax + lxmin)/2)
				End if
			End if

			if doY = True then
				if posYmode = siAlignGMAX then
					try = rfy - lymax
				Elseif posYmode = siAlignGMIN then
					try = rfy - lymin
				Else
					try = rfy - ((lymax + lymin)/2)
				End if
			End if

			if doZ = True then
				if posZmode = siAlignGMAX then
					trz = rfz - lzmax
				Elseif posZmode = siAlignGMIN then
					trz = rfz - lzmin
				Else
					trz = rfz - ((lzmax + lzmin)/2)
				End if
			End if

			'Translate the object to the proper place
			Translate  elem, trx, try, trz, 1, , ,axis
		End if 

		isfirstelem = FALSE
	next

end sub

'------------------------------------------------------------------------------
' NAME:	Center2ObjCenter
'
' INPUT:	- in_obj	' input object 
'			- in_bbox   ' true if we want to move the center to the bbox of
'						' the object instead of the average of the points
'
' OUTPUT:	- none
'
' DESCRIPTION: Places the centre of an object to the centre of it's geometry
'
'------------------------------------------------------------------------------
sub Center2ObjCenter( in_obj, in_bbox )
	Dim i, l_px, l_py, l_pz, l_pos, l_wpos, l_Space
	Dim l_maxx, l_maxy, l_maxz, l_minx, l_miny, l_minz
	Dim l_Geometry, l_Geometry0D, l_nbPoints

	set l_Geometry   = in_obj.obj
	set l_Geometry0D = l_Geometry.Geometry0D
	l_nbPoints   = l_Geometry.Nb0D

	set l_Space = in_obj.Kinematics.Global.Transform
	set l_pos = XSIMath.CreateVector3()
	
	l_px = 0.0
	l_py = 0.0
	l_pz = 0.0

	l_maxx = -10000000.0
	l_maxy = -10000000.0
	l_maxz = -10000000.0
	l_minx =  10000000.0
	l_miny =  10000000.0
	l_minz =  10000000.0

	for i = 0 to l_nbPoints - 1
		l_Geometry0D.Position i, l_pos

		set l_wpos =  XSIMath.MapObjectPositionToWorldSpace( l_Space, l_pos )

		if ( in_bbox ) then
			if ( l_wpos.x > l_maxx ) then l_maxx = l_wpos.x
			if ( l_wpos.y > l_maxy ) then l_maxy = l_wpos.y
			if ( l_wpos.z > l_maxz ) then l_maxz = l_wpos.z
			if ( l_wpos.x < l_minx ) then l_minx = l_wpos.x
			if ( l_wpos.y < l_miny ) then l_miny = l_wpos.y
			if ( l_wpos.z < l_minz ) then l_minz = l_wpos.z
		else
			l_px = l_px + l_wpos.x
			l_py = l_py + l_wpos.y
			l_pz = l_pz + l_wpos.z
		end if
	next

	if ( in_bbox ) then
		l_px = (l_minx + l_maxx) / 2
		l_py = (l_miny + l_maxy) / 2
		l_pz = (l_minz + l_maxz) / 2
	else
		if ( l_nbPoints > 1 ) then
			l_px = l_px / l_nbPoints
			l_py = l_py / l_nbPoints
			l_pz = l_pz / l_nbPoints
		end if
	end if
	
	Translate in_obj, l_px, l_py, l_pz, siAbsolute, siGlobal, siCtr, siXYZ
end sub

'------------------------------------------------------------------------------
' NAME:	Centre2PointCluster
'
' INPUT:	- in_Cluster	' input cluster 
'			- in_bbox   ' true if we want to move the center to the bbox of
'						' the object instead of the average of the points'
' OUTPUT:	- none
'
' DESCRIPTION: Places the centre of an object to the centre of the
'		   given cluster
'------------------------------------------------------------------------------
sub Centre2PointCluster( in_Cluster, in_bbox )

	DIM l_ClusterItem, l_ClsNbElems, l_ClusterElems, l_ParentItem
	DIM l_Object, l_Geometry, l_Geometry0D, l_pos
	DIM i, j, sumx, sumy, sumz, l_Space, l_wpos
	Dim l_maxx, l_maxy, l_maxz, l_minx, l_miny, l_minz

	'-------------------------------------------------------------    
	' Eventually we could deal with other types of clusters
	' Points only for now
	'-------------------------------------------------------------

	if in_Cluster.type = "pnt" then

		set l_ClusterItem  = in_Cluster.obj
		l_ClsNbElems   = l_ClusterItem.NbElements
		l_ClusterElems = l_ClusterItem.Elements

		  '-------------------------------------------------	
		' Given the cluster, get to the owning object
		' This requires to go up the ref 4 times.
		'-------------------------------------------------
		set l_ParentItem = EnumElements( in_Cluster, FALSE )
		for i = 0 to 4
		set l_ParentItem = EnumElements( l_ParentItem(0), FALSE )
		next 
		set l_Object     = l_ParentItem(0) 
		set l_Geometry   = l_Object.obj
		set l_Geometry0D = l_Geometry.Geometry0D

		set l_Space = l_object.Kinematics.Global.Transform
		set l_Pos = XSIMath.CreateVector3()

		'---------------------------------------------------------------
		' In theory, this would be an easier way to get the average position
		' but it doesn't seem to always give me the correct result??
		'l_Geometry0D.AveragePosition  l_ClusterElems, l_Pos
		'LogMessage "AveragePosition = " & l_Pos.x & "," & l_Pos.y & "," & l_Pos.z
		'----------------------------------------------------------------
	  
		sumx = 0.0
		sumy = 0.0
		sumz = 0.0

		l_maxx = -10000000.0
		l_maxy = -10000000.0
		l_maxz = -10000000.0
		l_minx =  10000000.0
		l_miny =  10000000.0
		l_minz =  10000000.0

		for i = 0 to l_ClsNbElems - 1
			j = l_ClusterElems(i)
			l_Geometry0D.Position j, l_pos

			set l_wpos =  XSIMath.MapObjectPositionToWorldSpace( l_Space, l_pos )

			if ( in_bbox ) then
				if ( l_wpos.x > l_maxx ) then l_maxx = l_wpos.x
				if ( l_wpos.y > l_maxy ) then l_maxy = l_wpos.y
				if ( l_wpos.z > l_maxz ) then l_maxz = l_wpos.z
				if ( l_wpos.x < l_minx ) then l_minx = l_wpos.x
				if ( l_wpos.y < l_miny ) then l_miny = l_wpos.y
				if ( l_wpos.z < l_minz ) then l_minz = l_wpos.z
			else
				sumx = sumx + l_wpos.x
				sumy = sumy + l_wpos.y
				sumz = sumz + l_wpos.z
			end if
		next
   
		if ( in_bbox ) then
			sumx = (l_minx + l_maxx) / 2
			sumy = (l_miny + l_maxy) / 2
			sumz = (l_minz + l_maxz) / 2
		else
			if ( l_ClsNbElems > 1 ) then
				sumx = sumx / l_ClsNbElems
				sumy = sumy / l_ClsNbElems
				sumz = sumz / l_ClsNbElems
			end if
		end if
         
		Translate l_Object, sumx, sumy, sumz, siAbsolute, siGlobal, siCtr, siXYZ
    end if
 
end sub

'------------------------------------------------------------------------------
' NAME:	Centre2Vertices
'
' INPUT:	- in_SelList	' current selection or items to operate on
'
' OUTPUT:	- none
'
' DESCRIPTION: Places the centre of an object to the centre of the
'		   tagged vertices or the selected cluster
'------------------------------------------------------------------------------
sub Centre2Vertices( in_SelList, in_bbox )

    DIM l_CurClusterList, l_NewClusterList, l_ObjectList, l_obj
    DIM l_AnyTagCluster, l_AnyCurCluster, l_SubCompList


	if IsEmpty( in_SelList ) or in_SelList.count = 0 Then
		LogMessage XSIUtils.Translate(IDS_SELECT_OBJ_AND_COMPONENTS, "XSISCRIPTS" ), siInfo
		SIMsgBox XSIUtils.Translate(IDS_SELECT_OBJ_AND_COMPONENTS, "XSISCRIPTS" ), vbOKOnly + vbExclamation, XSIUtils.Translate("Warning", "XSISCRIPTS" ), vbOK
		Exit sub
	end if

	' Get the list of any alrteady selected cluster
	set l_CurClusterList = SIFilter( in_SelList, "cluster" )
	
	' Convert to new clusters any tagged point

	set l_ObjectList = FSubComponents2Clusters( in_SelList, false, l_NewClusterList, l_SubCompList )
	
	' replace tagclusters to automatic clusters.
	l_AnyTagCluster = FALSE
	if Not IsEmpty (l_NewClusterList) Then
		l_AnyTagCluster = TRUE
	end if

    l_AnyCurCluster = (IsEmpty(l_CurClusterList) Or _
    			TypeName(l_CurClusterList) = "Nothing") = FALSE


    if Not ( l_AnyTagCluster Or l_AnyCurCluster ) Then
		' In this case we simply translate the center to the geometrical
		' center of each object in the selection.
		for each l_obj in in_SelList
			Center2ObjCenter l_obj, in_bbox
		next
    end if
   
   
    ' Handle all the tagged points first 
    if ( l_AnyTagCluster ) Then
    	'=================================================
    	' Seems like the Ceometry0D object isn't properly
		' pulling the geometry, if the geometry is deformed
		' of the centre already moved i still receive the 
		' original pt positions. For now i have to force a refresh
		' in the case of tagged points. Reason is, if the 
		' user has created a cluster manually already, results
		' will be right! This probably because CreateCluster
		' which is used in the UI already induces a refresh
		' by selecting the cluster, contrary to CreateClusterFromSubComponent used
		' above in FSubComponents2Clusters.....
		'==================================================
    	Refresh

        for each l_Cluster in l_NewClusterList
			if not (l_Cluster.type = "pnt") then
				LogMessage "Tagged components are not valid for this operation.", siInfo
				Exit sub
			else
	  			Centre2PointCluster l_Cluster, in_bbox
	  		
	  			' Remove this cluster, it was temporary
	  			RemoveCluster l_Cluster
	  		end if
        next
    end if

    ' Then handle any selected cluster, if any
    if ( l_AnyCurCluster ) Then
        for each l_Cluster in l_CurClusterList
			if not (l_Cluster.type = "pnt") then
				LogMessage "Cluster " & l_Cluster & " is not valid for this operation.", siInfo 
			else
       			Centre2PointCluster l_Cluster, in_bbox
			end if
		next
    end if
  
end sub


'------------------------------------------------------------------------------
' NAME:		CreateImageClipProc
'
' DESCRIPTION: Create an image clip from a file
'------------------------------------------------------------------------------
function CreateImageClipProc( byref in_filename, in_name )
	dim obj

	set rtn = SICreateImageClip( in_filename, in_name )
	set obj = rtn.value("Clip")
	set CreateImageClipProc = obj

	'--------------------------------------------------------------------
	' inspect the image clip
	'--------------------------------------------------------------------
	if not TypeName(obj) = "Nothing" then
		AutoInspect obj
	end if
end function


'------------------------------------------------------------------------------
' NAME:		CreateImageClipProc2
'
' DESCRIPTION: Create an image clip from a file, potential one for each tracks 
' in video files (AAF only presently)
'------------------------------------------------------------------------------
function CreateImageClipProc2( byref in_filename, in_name )

	set rtn = SICreateImageClip2( in_filename, in_name )
	set CreateImageClipProc2 = rtn

	'--------------------------------------------------------------------
	' inspect the image clips
	'--------------------------------------------------------------------
	for each NewImageClip in  rtn
		AutoInspect NewImageClip
	next 
end function

'------------------------------------------------------------------------------
' NAME:	AddImageClipProc
'
' DESCRIPTION: Create an image source from a file
'------------------------------------------------------------------------------
function AddImageClipProc( in_source, in_name )
	dim obj

	set rtn = SIAddImageClip( in_source, in_name )
	set obj = rtn.value("Clip")
	set AddImageClipProc = obj

	'--------------------------------------------------------------------
	' Select and inspect the model
	'--------------------------------------------------------------------
	if not TypeName(obj) = "Nothing" then
		AutoInspect obj
	end if
end function

'------------------------------------------------------------------------------
' NAME:		CreateImageSourceProc
'
' DESCRIPTION: Create an image source from a file
'------------------------------------------------------------------------------
function CreateImageSourceProc( byref in_filename, in_name )
	dim obj

	set rtn = SIAddImageSource( in_filename, in_name )
	set obj = rtn.value("Source")
	set CreateImageSourceProc = obj

	'--------------------------------------------------------------------
	' Select and inspect the model
	'--------------------------------------------------------------------
	if not TypeName(obj) = "Nothing" then
		SelectObj obj
		AutoInspect obj
	end if
end function

'------------------------------------------------------------------------------
' NAME:		CreateWritableImageSourceProc
'
' DESCRIPTION: Create an image source from a file
'------------------------------------------------------------------------------
function CreateWritableImageSourceProc( byref in_filename, in_name, _
	in_width, in_height, in_channelType, in_useExisting )
	dim obj

	set rtn = SIAddWritableImageSource( in_filename, in_name, _
		in_width, in_height, in_channelType, in_useExisting )
	set obj = rtn.value("Source")
	set CreateWritableImageSourceProc = obj

	'--------------------------------------------------------------------
	' Select and inspect the model
	'--------------------------------------------------------------------
	if not TypeName(obj) = "Nothing" then
		SelectObj obj
		AutoInspect obj
	end if
end function

'------------------------------------------------------------------------------
' NAME:		CreateModelSourceProc
'
' DESCRIPTION: Create an model source from a file
'------------------------------------------------------------------------------
function CreateModelSourceProc( byref in_filename, in_name, in_res )
	dim l_source

	SIAddModelSource in_filename, in_name, l_source, in_res 
	set CreateModelSourceProc = l_source

	'--------------------------------------------------------------------
	' Select and inspect the model source
	'--------------------------------------------------------------------
	if not TypeName(l_source) = "Nothing" then
		SelectObj l_source
		AutoInspect l_source
	end if
end function

'------------------------------------------------------------------------------
' NAME:		CreateModelClipProc
'
' DESCRIPTION: Create an Model clip from a file
'------------------------------------------------------------------------------
function CreateModelClipProc( byref in_filename, in_name )
	'--------------------------------------------------------------------
	' Create the clip
	'--------------------------------------------------------------------
	set l_modelclip = SICreateModelClip( in_filename, in_name )
	set CreateModelClipProc = l_modelclip

	'--------------------------------------------------------------------
	' Reference the model
	'--------------------------------------------------------------------
	set l_FileService = CreateObject( "XSI.XSIFileService" )
	set obj = l_FileService.ReferenceModel( l_modelclip.value("Clip") )

	'--------------------------------------------------------------------
	' Select and inspect the model
	'--------------------------------------------------------------------
	if not TypeName(obj) = "Nothing" then
		SelectObj obj, "BRANCH"
		AutoInspect obj
	end if
end function

'------------------------------------------------------------------------------
' NAME:		Add ModelClipProc
'
' DESCRIPTION: Create an Model clip from a model source
'------------------------------------------------------------------------------
function AddModelClipProc( in_source, in_name )
	'--------------------------------------------------------------------
	' Create the clip
	'--------------------------------------------------------------------
	set l_modelclip = SIAddModelClip( in_source, in_name )
	set AddModelClipProc = l_modelclip

	'--------------------------------------------------------------------
	' Reference the model
	'--------------------------------------------------------------------
	set l_FileService = CreateObject( "XSI.XSIFileService" )
	set obj = l_FileService.ReferenceModel( l_modelclip.value("Clip") )
		
	'--------------------------------------------------------------------
	' Select and inspect the model
	'--------------------------------------------------------------------
	if not TypeName(obj) = "Nothing" then
		SelectObj obj, "BRANCH"
		AutoInspect obj
	end if
end function

'------------------------------------------------------------------------------
' NAME:		LoadPresetProc
'
' INPUT:	- in_filename : preset filename 
' INPUT:	- in_obj : Object list to load the preset on.
'
' DESCRIPTION:
'------------------------------------------------------------------------------
sub LoadPresetProc( byref in_filename, in_objs )

	for each l_obj in in_objs
		SILoadPreset in_filename, l_obj 
	next

end sub

'------------------------------------------------------------------------------
' NAME:		FCountItems
'
' DESCRIPTION: Counts the number of items in a filtered list
'------------------------------------------------------------------------------
function FCountItems ( in_list, in_filter )
	FCountItems = 0
	set myFilteredList =  SIFilter( in_list, in_filter,,siQuickSearch)
	if Not TypeName(myFilteredList) = "Nothing" then
		FCountItems = myFilteredList.count
	end if
end function

'------------------------------------------------------------------------------
' NAME:		AddInfoStat
'
' DESCRIPTION: Helper function to add items to a custom ppg
'------------------------------------------------------------------------------
sub AddInfoStat( in_ppg, in_param, in_label, in_value, in_testvalue )

	'Don't bother adding parameter if there are no items
	if in_testvalue then
		if in_value <= 0 then
			exit sub
		end if
	end if

	l_cap = siReadOnly 

	'Added as string parameters, this is a really easy way to avoid having a slider
	in_ppg.AddParameter in_param, siString, 0, l_cap, in_label, , , in_value

end sub


'------------------------------------------------------------------------------
' NAME:		FGetPolyStats. Rejean Gagne
'
' INPUT:   l_meshobj	: a mesh object
' OUTPUT:  out_nbtri	: no of polygons with 3 vertices
'		   out_nbquad	: no of polygons with 4 vertices
'		   out_nbpoly	: no of polygons with 5 or more vertices
'
' DESCRIPTION: Get's polygon stats about a polymeshs
'
'------------------------------------------------------------------------------
function FGetPolyStats( l_meshobj, out_nbtri, out_nbquad, out_nbpoly )

	' We will access to facets as well as the points of the mesh
	set oGeometry = l_meshobj.obj
	set oGeom2D = oGeometry.Geometry2D

	l_nbtri  = 0
	l_nbquad = 0
	l_nbpoly = 0
								
	' For each facet/polygon...
	for i = 0 to oGeometry.Nb2D - 1

		' Get the facet
		o0DSubComp = oGeom2D.SubComponent0D( i )

		l_nb = UBound( o0DSubComp, 1 ) - LBound( o0DSubComp, 1 ) + 1

		if l_nb = 3 then
			l_nbtri = l_nbtri + 1
		elseif l_nb = 4 then
			l_nbquad = l_nbquad + 1
		else
			l_nbpoly = l_nbpoly + 1
		end if
	next

	out_nbtri  = l_nbtri
	out_nbquad = l_nbquad
	out_nbpoly = l_nbpoly	


	'logmessage " #tri  " & out_nbtri
	'logmessage " #quad " & out_nbquad
	'logmessage " #poly " & out_nbpoly

end function



'------------------------------------------------------------------------------
' NAME:		FGetVolume. Rejean Gagne
'
' OUTPUT:   Volume of the polygon mesh
'
' DESCRIPTION: Calculates the volume (for polygon meshes only).
'
' Method used comes from Graphics Gem V, p.37
'
' Volume = 1/6 * SUM(j=0, m-1) Pface(j) dot (2*Area(j))
' Area = SUM(i=1,h-1) (P2i-P0) X (P2i+1-P2i-1)  + (P2h-P0) X (Pl-P2h-1)
' where
'    Volume (of the mesh) : m = number of facets
'							Pface(j) is an arbitrary vertex of the face (we take the 1st one)
'    Area (of a facet) : k = number of vertices, 
'						 h=1/2*(k-1),
'						 l = 0 if k is odd, l = k-1 if k is even
'------------------------------------------------------------------------------
function FGetVolume( l_meshobj, out_srfarea )

	FGetVolume = 0
	out_srfarea = 0

	l_vol = 0
	l_area = 0

	' We will access to facets as well as the points of the mesh
	set oGeometry = l_meshobj.obj
	set oGeom2D = oGeometry.Geometry2D
	set oGeom0D = oGeometry.Geometry0D

	' We need a bunch of vectors, named after the equations above	
	set oPos  	= XSIMath.CreateVector3()
	set oP2i  	= XSIMath.CreateVector3()
	set oP0   	= XSIMath.CreateVector3()
	set oP2ip1  = XSIMath.CreateVector3()
	set oP2im1  = XSIMath.CreateVector3()
	set oPa	= XSIMath.CreateVector3()
	set oPb	= XSIMath.CreateVector3()
	set oPc	= XSIMath.CreateVector3()
	set oParea	= XSIMath.CreateVector3()
	set oPface	= XSIMath.CreateVector3()
	
							
	' For each facet/polygon...
	for i = 0 to oGeometry.Nb2D - 1

		' Get the facet
		o0DSubComp = oGeom2D.SubComponent0D( i )
		
		' intermediate indices
		k = UBound( o0DSubComp, 1 ) + 1
		h = ( k - 1 ) \ 2  ' note the integer division '\'
		l = 0
		if ( k mod 2 ) = 0 then
			l = k - 1
		end if	
		
		' Init the area vector
		oParea.Set 0.0, 0.0, 0.0
		
		'logmessage " Face " & i & " k,h,l = [" & k & "," & h & "," & l & "]" 	

		' position of first vertex is needed
		oGeom0D.Position o0DSubComp( 0 ), oPos  	
		oP0.Set oPos.x, oPos.y, oPos.z

		' this ends up being used for facets with more than 4 vertices		
		for j = 1 to h - 1
		

			oGeom0D.Position o0DSubComp( 2*j ), oPos  	
			oP2i.Set oPos.x, oPos.y, oPos.z
			
			oGeom0D.Position o0DSubComp( 2*j + 1 ), oPos  	
			oP2ip1.Set oPos.x, oPos.y, oPos.z
			
			oGeom0D.Position o0DSubComp( 2*j - 1 ), oPos  	
			oP2im1.Set oPos.x, oPos.y, oPos.z
	
			oPa.Sub oP2i, oP0
			oPb.Sub oP2ip1, oP2im1		
			oPc.Cross oPa, oPb
			
			' cumulate the area	vector		
			oParea.AddInPlace  oPc

			
		next
		
		' Last component (see equations)
		oGeom0D.Position o0DSubComp( 2 * h ), oPos  	
		oP2i.Set oPos.x, oPos.y, oPos.z
			
		oGeom0D.Position o0DSubComp( l ), oPos  	
		oP2ip1.Set oPos.x, oPos.y, oPos.z
			
		oGeom0D.Position o0DSubComp( 2*h - 1 ), oPos  	
		oP2im1.Set oPos.x, oPos.y, oPos.z
	
		oPa.Sub oP2i, oP0
		oPb.Sub oP2ip1, oP2im1		
		oPc.Cross oPa, oPb
		
		' cumulate the area	vector			
		oParea.AddInPlace  oPc
		
		' while we're at it, cumulate the surface area		
		l_area = l_area + oParea.Length

		' compute the voume contribution for this facet
		oGeom0D.Position o0DSubComp( 0 ), oPface
	
		l_dot = oPface.Dot( oParea )				
		l_volume = l_volume + l_dot
	
	next
	
	' Final volume
	FGetVolume = l_volume / 6
	out_srfarea = l_area / 2

	'logmessage "volume " & FGetVolume
	'logmessage " srf area " & out_srfarea

end function

'------------------------------------------------------------------------------
' NAME:		FAppendStatToString
'
' DESCRIPTION: Utility routine to append text (nummer of items) to a string
'------------------------------------------------------------------------------
sub FAppendStatToString( inout_str, in_count, in_pluralstr, in_singstr )

	if in_count > 0 and (inout_str <> "") then 
		inout_str = inout_str & ", "
	end if

	if in_count > 1 then
		inout_str = inout_str & in_count & " " & in_pluralstr
	elseif in_count = 1 then
		inout_str = inout_str & "1 " & in_singstr
	end if
end sub


'------------------------------------------------------------------------------
' NAME:		InfoSelectionProc
'
' DESCRIPTION: Opens a property page showing information about the selection
'
' Originally written by Olivier Ozoux, updated by Rejean Gagne
'------------------------------------------------------------------------------
sub InfoSelectionProc( in_ItemsList )
	Dim myItem, myCompos, myPPG, l_items, l_objlist
	Dim l_owners, l_owner, l_layers, l_groups, l_partns, l_liggrp, l_envgrp

	Override_GUID = "{A7E8A2D0-769F-11d3-9E90-00A0248F947C}"

	if TypeName( in_ItemsList ) = "Nothing" or in_ItemsList.Count <= 0 then
		logmessage "Please Select an item first", siError
		exit sub
	end if

	' Get a list where any branch selection is converted into a multi node selection
	' We do this only if there's at least a 3d object in the list, otherwize we keep
	' the original item we receive
	set l_objlist = SIFilter( in_ItemsList, "geometry" )
 
	if ( typename(l_objlist) <> "Nothing" ) then
		set l_items = SelectChildNodes( l_objlist, False )
	else
		set l_items = in_ItemsList
	end if


	l_bMulti = (l_items.Count > 1)
	l_nb0d = 0
	l_nb1d = 0
	l_nb2d = 0
	l_nbtri = 0
	l_nbptri = 0
	l_nbquad = 0
	l_nbpoly = 0
	l_nbpart = 0
	l_nbpset = 0
	l_nbparm = 0
	l_vol = 0
	l_srfarea = 0
	l_len = 0
	l_nbpmsh = 0
	l_nbsmsh = 0
	l_nbcrvs = 0
	l_nbcloud = 0
	l_nbpointcloud = 0
	l_nbmembers = 0
	l_nbgrp = 0
	l_nbcls = 0
	l_nbclselems = 0
	l_layers = ""
	l_groups = ""
	l_liggrp = ""
	l_envgrp = ""
	l_partns = ""
	l_paranifcv = ""
	l_paraniexp = ""
	l_paraniop  = ""
	l_parover   = ""
	l_kinecns   = ""

	'------------------------------------------------------------------------------
	' First gather/sum all of the information measurement we need.
	'------------------------------------------------------------------------------
	for each myItem in l_items
	
		myType = myItem.Type

'logmessage " -------- item " & myItem
'logmessage " type" & myType
'logmessage " typename " & typename(myItem)
'logmessage " families " & myItem.Families

		if myType = "polymsh" Or myType = "surfmsh" Or myType = "crvlist" Or myType = "pointcloud" then
			set myGeom = myItem.obj

			l_nb0d = l_nb0d + CLng(myGeom.nb0d)		' points
			l_nb1d = l_nb1d + CLng(myGeom.nb1d)		' edges (poly mesh)
			l_nb2d = l_nb2d + CLng(myGeom.nb2d)		' facets

			if ( myType = "polymsh" ) then l_nbpmsh = l_nbpmsh + 1
			if ( myType = "surfmsh" ) then l_nbsmsh = l_nbsmsh + 1
			if ( myType = "crvlist" ) then l_nbcrvs = l_nbcrvs + 1
			if ( myType = "pointcloud" ) then l_nbpointcloud = l_nbpointcloud + 1
		end if

		if myType = "cloud" then
			set myCloud = myItem.Particles
			l_nbpart = l_nbpart + myCloud.count
			l_nbcloud = l_nbcloud + 1
		end if

		if myType = "polymsh" or myType = "surfmsh"  then
			' Must use temp list, it seems that GetNbTriangles screws up it's input
			set myItemTemp = myItem
			l_nbtri = l_nbtri+ GetNbTriangles( myItemTemp )	' tesselation triangles
		end if

		if myType = "polymsh" then
			FGetPolyStats myItem, l_nbptri_, l_nbquad_, l_nbpoly_

			l_nbptri = l_nbptri + l_nbptri_
			l_nbquad = l_nbquad + l_nbquad_
			l_nbpoly = l_nbpoly + l_nbpoly_

			l_vol = l_vol + FGetVolume( myItem, l_srfarea_ )
			l_srfarea = l_srfarea + l_srfarea_
		end if

		if myType = "crvlist" then
			GetCurveLength myItem, l_len_
			l_len = l_len + l_len_
		end if

		if myType = "pnt" _
			Or myType = "edge" _
			Or myType = "poly" _
			Or myType = "face" _
			Or myType = "knotcrvu" _
			Or myType = "polySubComponent" _
			Or myType = "knotcrvv" then
	
			set myGeom = myItem.obj
			l_nbclselems = l_nbclselems + myGeom.nbElements
			l_nbcls = l_nbcls + 1
		end if

		if myType = "#Group" then
			set myMembers = myItem.Members
			l_nbmembers = l_nbmembers + myMembers.count
			l_nbgrp = l_nbgrp + 1
		end if

		' for these we will count parameters and list the ones driven by an anim source
		if typename( myItem ) = "Property" or _
		   typename( myItem ) = "Operator" or _
		   typename( myItem ) = "Constraint" then
			l_nbparm = l_nbparm + myItem.Parameters.Count
			l_nbpset = l_nbpset + 1

			for each l_param in myItem.Parameters

'logmessage " param " & l_param
				'----- Fcurve param source -------------
				if ( typename(l_param.source) = "FCurve" ) then
					if ( instr( l_paranifcv, l_param.scriptname ) = 0 ) then						
						if ( l_paranifcv <> "" ) then l_paranifcv = l_paranifcv & ", "
						l_paranifcv = l_paranifcv & l_param.scriptname
					end if
				'----- Expressions param source -------------
				elseif ( typename(l_param.source) = "Expression" ) then
					if ( instr( l_paraniexp, l_param.scriptname ) = 0 ) then						
						if ( l_paraniexp <> "" ) then l_paraniexp = l_paraniexp & ", "
						l_paraniexp = l_paraniexp & l_param.scriptname
					end if

				'----- Scripted Operators param source -------------
				elseif ( typename(l_param.source) = "Operator" ) then
					if ( instr( l_paraniop, l_param.scriptname ) = 0 ) then						
						if ( l_paraniop <> "" ) then l_paraniop = l_paraniop & ", "
						l_paraniop = l_paraniop & l_param.scriptname
					end if

				'------ Param affected by an override ---------------
				elseif ( typename(l_param.findattrib(Override_GUID)) = "Unknown" ) then

					override = l_param.findattrib(Override_GUID)
					owner = EnumElements(override, false)(0)
					owner = EnumElements(owner, false)(0)

					if ( instr( l_parover, l_param.scriptname ) = 0 ) then						
						if ( l_parover <> "" ) then l_parover = l_parover & ", "
						l_parover = l_parover & l_param.scriptname & "(" & owner & ")"
					end if
				end if

			next
		end if

		' for these we will list the constraints that apply
		if typename( myItem ) = "Kinematics" then
			for each l_cns in myItem.Constraints
				if ( instr( l_kinecns, l_cns.name ) = 0 ) then						
					if ( l_kinecns <> "" ) then l_kinecns = l_kinecns & ", "
					l_kinecns = l_kinecns & l_cns.name
				end if
			next
		end if

		' For 3D Objects we will handle any type of group information
		if myItem.Families = "3D Objects" then

			set l_owners = EnumElements( myItem, False )

			for each l_owner in l_owners

				if ( l_owner.type = "Members" ) then

			   		set grp = EnumElements( l_owner, False )(0)

			   		if ( typename( grp ) = "Layer" ) then
						if ( instr( l_layers, grp ) = 0 ) then
							if ( l_layers <> "" ) then l_layers = l_layers & ", "
							l_layers = l_layers & grp
						end if
			   		elseif ( typename( grp ) = "Group" ) then

						' Need to go one additional level up to know if it's
						' a group or partition

						' need to check against possible errors for weird cases (bug 81621)
						On Error Resume Next
						set grpcont = EnumElements( grp, False )(0)

						if Err.Number = 0 then

							' This is from a partition group
							if ( grpcont.type = "Partitions" ) then
								if ( instr( l_partns, grp ) = 0 ) then						
									if ( l_partns <> "" ) then l_partns = l_partns & ", "
									l_partns = l_partns & grp
								end if
							' This is from an associated light group
							elseif ( grpcont.type = "light" ) then
								if ( instr( l_liggrp, grp ) = 0 ) then						
									if ( l_liggrp <> "" ) then l_liggrp = l_liggrp & ", "
									l_liggrp = l_liggrp & grp
								end if
							else
								if ( instr( l_groups, grp ) = 0 ) then	
									if ( l_groups <> "" ) then l_groups = l_groups & ", "
									l_groups = l_groups & grp
								end if
							end if
						end if  ' if not error

			   		elseif ( typename( grp ) = "CollectionItem" ) then
						' Need to go one additional level up to know if it's
						' an envelope group
						set grpcont = EnumElements( grp, False )(0)
						if ( grpcont.type = "BoundVol" ) then
							if ( instr( l_envgrp, grp ) = 0 ) then						
								if ( l_envgrp <> "" ) then l_envgrp = l_envgrp & ", "
								l_envgrp = l_envgrp & grp
							end if
						end if
			   		else
						' unknown type of members
			   		end if
				end if
			next
		end if '3D object


	next

	' For those fields which we show for a single selection only
	set myItem = l_items(0)

	l_nbother = l_items.Count - (l_nbpmsh + l_nbsmsh + l_nbcrvs + l_nbgrp + l_nbcls + l_nbcloud + l_nbpointcloud)


	'------------------------------------------------------------------------------
	'Create the Info Scene Property and PPG.
	'------------------------------------------------------------------------------
	set mySceneRoot = ActiveSceneRoot
	set myPPG = ActiveSceneRoot.AddProperty( "CustomProperty", false, "Info Selection" )

	if ( not l_bMulti ) then
		'---- Element Name -----------------------------------
		On Error Resume Next ' in case we select something that doesn't have a name param
		AddProxyParam mySceneRoot & "." & myPPG, myItem & ".Name"

		'replace "<InspectedObject>_Name" with "Name" as the label 
		EditParameterDefinition myPPG.Parameters(0).FullName, "Name"

		'---- Element Type -----------------------------------
		SIAddCustomParameter mySceneRoot & "." & myPPG, "elemType",8,0,0,0,8,18,0,0, "Type"
		SetValue myPPG & ".elemType", CStr(myItem.Type)

		'---- Element Families -----------------------------------
		SIAddCustomParameter mySceneRoot & "." & myPPG, "elemFamilies",8,0,0,0,8,18,0,0, "Families"
		SetValue myPPG & ".elemFamilies", CStr(myItem.Families)
	
		'---- Element Path -----------------------------------
		if Not myItem.PathItems = "" then
			SIAddCustomParameter mySceneRoot & "." & myPPG, "elemPath",8,0,0,0,8,18,0,0, "Element Path"
			SetValue myPPG & ".elemPath", CStr(myItem.PathItems)
		end if
	else
		'---- Element Name (multi) -----------------------------------
		SIAddCustomParameter mySceneRoot & "." & myPPG, "elemName",8,0,0,0,8,18,0,0, "Name"
		SetValue myPPG & ".elemName", "<multi>"

		'---- Number of items -----------------------------------
		SIAddCustomParameter mySceneRoot & "." & myPPG, "elemCount",8,0,0,0,8,18,0,0, "Selection"
		SetValue myPPG & ".elemCount", CStr(l_items.Count & " items")

		'---- Element Type -----------------------------------
		myCompos = ""
		FAppendStatToString myCompos, l_nbpmsh,  "poly meshes", "poly mesh"
		FAppendStatToString myCompos, l_nbsmsh,  "surf meshes", "surf mesh"
		FAppendStatToString myCompos, l_nbcrvs,  "curves", "curve"
		FAppendStatToString myCompos, l_nbcrvs,  "curves", "curve"
		FAppendStatToString myCompos, l_nbcloud, "clouds", "cloud"
		FAppendStatToString myCompos, l_nbpointcloud, "point clouds", "point cloud"
		FAppendStatToString myCompos, l_nbcls,   "cls", "cls"
		FAppendStatToString myCompos, l_nbother, "misc.", "misc."

			
		SIAddCustomParameter mySceneRoot & "." & myPPG, "elemType",8,0,0,0,8,18,0,0, "Type"
		SetValue myPPG & ".elemType", myCompos

	end if

	
	if  l_nbpmsh > 0 Or l_nbsmsh > 0 Or l_nbcrvs > 0 Or l_nbpointcloud > 0 Or l_nbpart > 0 then

		myCompos = ""
		FAppendStatToString myCompos, l_nb0d,  "points", "point"
		if l_nbpmsh > 0 then FAppendStatToString myCompos, l_nb1d,  "edges",  "edge"
		FAppendStatToString myCompos, l_nb2d,  "faces",  "face"
		if l_nbpart > 0 then FAppendStatToString myCompos, l_nbpart,  "particles",  "particle"
			
		SIAddCustomParameter mySceneRoot & "." & myPPG, "elemGeom",8,0,0,0,8,18,0,0, "Components"
		SetValue myPPG & ".elemGeom", myCompos

		if l_nbpmsh > 0 then
			SIAddCustomParameter mySceneRoot & "." & myPPG, "elemPolys",8,0,0,0,8,18,0,0, "Polygons"
			myCompos = CStr( l_nbptri & " triangles, " & l_nbquad & " quads, " & l_nbpoly & " polys with 5+ pts" )
			SetValue myPPG & ".elemPolys", myCompos
		end if

		if l_nbtri > 0 then
			'---- No of Triangles (poly and surf meshes) -----------------------------------
			SIAddCustomParameter mySceneRoot & "." & myPPG, "elemTri",8,0,0,0,8,18,0,0, "Triangles"
			SetValue myPPG & ".elemTri", l_nbtri & " triangles"
		end if

		if l_nbpmsh > 0 then	
			'---- Mesh Volume -----------------------------------
			SIAddCustomParameter mySceneRoot & "." & myPPG, "mshVol",8,0,0,0,8,18,0,0, "Volume"
			SetValue myPPG & ".mshVol", l_vol

			'---- Mesh Surface Area -----------------------------------
			SIAddCustomParameter mySceneRoot & "." & myPPG, "mshArea",8,0,0,0,8,18,0,0, "Srf Area"
			SetValue myPPG & ".mshArea", l_srfarea
		end if

		if l_nbcrvs > 0 then
			'---- Curve Length (crvlist) -----------------------------------

			SIAddCustomParameter mySceneRoot & "." & myPPG, "crvLen",8,0,0,0,8,18,0,0, "Length"
			SetValue myPPG & ".crvLen", l_len
		end if
	end if

	if l_nbcls > 0 then	
		SIAddCustomParameter mySceneRoot & "." & myPPG, "elemCls",8,0,0,0,8,18,0,0, "Cluster Elements"
		SetValue myPPG & ".elemCls", l_nbclselems
	end if
	
	'if myType = "polySubComponent" then
		'logmessage " polygon!"
	'end if

	if l_nbmembers > 0 then
		SIAddCustomParameter mySceneRoot & "." & myPPG, "elemMembers",8,0,0,0,8,18,0,0, "Members"
		SetValue myPPG & ".elemMembers", l_nbmembers
	end if

	if l_nbpset > 0 then
		SIAddCustomParameter mySceneRoot & "." & myPPG, "nbparams",8,0,0,0,8,18,0,0, "Parameters"
		SetValue myPPG & ".nbparams", l_nbparm

		if ( l_paranifcv <> "" ) then
			SIAddCustomParameter mySceneRoot & "." & myPPG, "ParAniFcv",8,0,0,0,8,18,0,0, "Fcurve driven"
			SetValue myPPG & ".ParAniFcv", l_paranifcv
		end if
		if ( l_paraniexp <> "" ) then
			SIAddCustomParameter mySceneRoot & "." & myPPG, "ParAniExp",8,0,0,0,8,18,0,0, "Expr driven"
			SetValue myPPG & ".ParAniExp", l_paraniexp
		end if
		if ( l_parover <> "" ) then
			SIAddCustomParameter mySceneRoot & "." & myPPG, "ParOverride",8,0,0,0,8,18,0,0, "Override driven"
			SetValue myPPG & ".ParOverride", l_parover
		end if
	end if

	if ( l_kinecns <> "" ) then
		SIAddCustomParameter mySceneRoot & "." & myPPG, "kineCns",8,0,0,0,8,18,0,0, "Constraints"
		SetValue myPPG & ".kineCns", l_kinecns
	end if


	if  myItem.Families = "3D Objects" then

		if ( not l_bMulti ) then
		
			'---- Hierarchy Information -----------------------------------
			SIAddCustomParameter mySceneRoot & "." & myPPG, "ChildProp",8,0,0,0,8,18,0,0, "Children"
			set l_children = FGetChildrenObj( myItem, FALSE )

			if TypeName(l_children) = "nothing" or l_children = myItem then
				l_children = "none"
			end if
			SetValue myPPG & ".ChildProp", CStr(l_children)
	
			SIAddCustomParameter mySceneRoot & "." & myPPG, "ParentProp",8,0,0,0,8,18,0,0, "Parent"
			set l_parents = FGetParentObj( myItem )

			if TypeName(l_parents) = "nothing" or l_parents = myItem then
				l_parents = "none"
			end if
			SetValue myPPG & ".ParentProp", CStr(l_parents)
		end if ' (if multi)

		'---- Group/Layer Information -----------------------------------


		SIAddCustomParameter mySceneRoot & "." & myPPG, "LayerProp",8,0,0,0,8,18,0,0, "Layer"
		SetValue myPPG & ".LayerProp", l_layers

		if ( l_groups <> "" ) then
			SIAddCustomParameter mySceneRoot & "." & myPPG, "GroupProp",8,0,0,0,8,18,0,0, "Group(s)"
			SetValue myPPG & ".GroupProp", l_groups
		end if

		if ( l_liggrp <> "" ) then
			SIAddCustomParameter mySceneRoot & "." & myPPG, "LigGrpProp",8,0,0,0,8,18,0,0, "Light Group(s)"
			SetValue myPPG & ".LigGrpProp", l_liggrp
		end if

		if ( l_envgrp <> "" ) then
			SIAddCustomParameter mySceneRoot & "." & myPPG, "EnvGrpProp",8,0,0,0,8,18,0,0, "Env. Group(s)"
			SetValue myPPG & ".EnvGrpProp", l_envgrp
		end if

		if ( l_partns <> "" ) then
			SIAddCustomParameter mySceneRoot & "." & myPPG, "PartProp",8,0,0,0,8,18,0,0, "Partition(s)"
			SetValue myPPG & ".PartProp", l_partns
		end if

	end if  '3D objects


	' Launch the ppg in modal mode, wait for Ok or Cancel to be pressed
	On Error Resume Next
	InspectObj mySceneRoot & "." & myPPG,, "Info Selection: " & myItem,siModal

	' Delete the PPG
	DeleteObj mySceneRoot & "." & myPPG

end sub



'------------------------------------------------------------------------------
' NAME:		InfoSceneProc
'
' DESCRIPTION: Opens a property page showing information about the selection
'
' Originally written by Olivier Ozoux, updated by Rejean Gagne
'------------------------------------------------------------------------------

sub InfoSceneProc( in_doGeneral, in_doAnimation, in_doRendering )

	Dim myNbAll, myNbMod, myNbOther, myNbLig, myNbCam, myNbCloud, myNbPointCloud, myNbMat, myNbImg, myNbTri
	Dim	myNbNull, myNbPoly, myNbSurf, myNbCrv, myFilteredList

	myNbAll		= 0
	myNbMod		= 0
	myNbNull	= 0
	myNbIK		= 0
	myNbCloud	= 0
	myNbPointCloud = 0
	myNbPoly	= 0
	myNbSurf	= 0
	myNbGeo		= 0
	myNbOther	= 0
	myNbLig		= 0
	myNbCam		= 0
	myNbMat		= 0
	myNbImg		= 0
	myNbTri		= 0

	set myList = CreateObject("XSI.Collection")
	myList.Items = "*"


	if ( in_doGeneral ) then
		' Count all 3D objects
		if Not TypeName(myList) = "Nothing" then
			myNbAll = myList.Count
		end if

		myNbMod		= FCountItems( myList, "model" )
		myNbNull	= FCountItems( myList, "null" )
		myNbIK		= FCountItems( myList, "chain_element" )
		myNbCrv		= FCountItems( myList, "curve" )
		myNbPoly	= FCountItems( myList, "polygon_mesh" )
		myNbSurf	= FCountItems( myList, "surface_mesh" )
		myNbLig		= FCountItems( myList, "light" )
		myNbCam		= FCountItems( myList, "camera" )
		myNbCloud	= FCountItems( myList, "ParticleCloud" )    ' doesn't work, SIfilter doesn't support this
		myNbPointCloud = FCountItems( myList, "PointCloud" )    ' doesn't work, SIfilter doesn't support this


		'Everything else must be a generic object, no?
		myNbGeo = myNbPoly + myNbSurf + myNbCrv
		myNbOther = myNbAll - myNbGeo - (myNbMod + myNbLig + myNbCam + myNbNull + myNbIK + myNbCloud + myNbPointCloud)

		' Count all triangles
		if myNbGeo - myNbCrv > 0 then
			set myFilteredList =  SIFilter( "*", "geometry",,siQuickSearch)
			if Not TypeName(myFilteredList) = "Nothing" then
				' Eventually, this thing calls GetNbTriangles on the primitive
				myNbTri = GetNbTriangles( myFilteredList )
			end if
		end if

		' Components
		for each myItem in myList
		
			myType = myItem.Type
			if myType = "polymsh" Or myType = "surfmsh" Or myType = "crvlist" Or myType = "pointcloud" then
				set myGeom = myItem.obj

				l_nb0d = l_nb0d + CLng(myGeom.nb0d)		' points
				l_nb1d = l_nb1d + CLng(myGeom.nb1d)		' edges (poly mesh)
				l_nb2d = l_nb2d + CLng(myGeom.nb2d)		' facets

				if ( myType = "polymsh" ) then l_nbpmsh = l_nbpmsh + 1
				if ( myType = "surfmsh" ) then l_nbsmsh = l_nbsmsh + 1
				if ( myType = "crvlist" ) then l_nbcrvs = l_nbcrvs + 1
				if ( myType = "pointcloud" ) then l_nbpointcloud = l_nbpointcloud + 1
			end if

			if myType = "cloud" then
				set myCloud = myItem.Particles
				l_nbpart = l_nbpart + myCloud.count
			end if
		next

		'==================================================================================
		' General Info Page
		'==================================================================================
		set myGenPPG = ActiveSceneRoot.AddProperty( "CustomProperty", false, "Objects")

		'REVIEW: Why aren't all of these parameters set as "read-only"?  Changing the value
		'has no effect in the scene
		AddInfoStat myGenPPG, "nbCrv",		"Curves",				myNbCrv,	True
		AddInfoStat myGenPPG, "nbPoly",		"Poly. Meshes",			myNbPoly,	True
		AddInfoStat myGenPPG, "nbSurf",		"Surf. Meshes",			myNbSurf,	True
		AddInfoStat myGenPPG, "nbModels",	"Models",				myNbMod,	True
		AddInfoStat myGenPPG, "nbLights",	"Lights",				myNbLig,	True
		AddInfoStat myGenPPG, "nbCameras",	"Cameras",				myNbCam,	True
		AddInfoStat myGenPPG, "nbNull",		"Nulls",				myNbNull,	True
		AddInfoStat myGenPPG, "nbIK",		"Chain Elements",		myNbIK,		True
		AddInfoStat myGenPPG, "nbCloud",	"Part. Clouds",			myNbCloud,	True
		AddInfoStat myGenPPG, "nbPointCloud","Point Clouds",		myNbPointCloud,	True
		AddInfoStat myGenPPG, "nbOther",	"Other Objects",		myNbOther,	True
		AddInfoStat myGenPPG, "nbAll",		"Total",				myNbAll,	False

		set myComPPG = ActiveSceneRoot.AddProperty( "CustomProperty", false, "Components")
		AddInfoStat myComPPG, "nbTri",		"Triangles",			myNbTri,	True
		AddInfoStat myComPPG, "nbPt",		"Points",				l_nb0d,		True
		AddInfoStat myComPPG, "nbEdge",		"Segments",				l_nb1d,		True
		AddInfoStat myComPPG, "nbFacet",	"Facets",				l_nb2d,		True
		AddInfoStat myComPPG, "nbPart",		"Particles",			l_nbpart,	True

	end if  ' General Page

	if ( in_doAnimation ) then
		' Constraints
		set myCnsList = CreateObject("XSI.Collection")
		myCnsList.Items = "#3dobject.kine.Constraints.*"
		if not Typename(myCnsList) = "Nothing" then
			myNbCns = myCnsList.count
		end if
		set myParentCnsList = CreateObject("XSI.Collection")
		myParentCnsList.Items = "#3dobject.kine.Constraints.ParentPoseCns"
		if not Typename(myParentCnsList) = "Nothing" then
			myNbParentCns = myParentCnsList.count
		end if
		myNbCns = myNbCns - myNbParentCns

		set myAniPPG = ActiveSceneRoot.AddProperty( "CustomProperty", false, "Animation")		
		AddInfoStat myAniPPG, "nbCns",		"Constraints",				myNbCns,	True


		'
		' GDF : Mixer Info -- needs updating once bug 69091 is resolved...
		' Note that the filter for Actions should be "#model.mixer.animsources.*,Sources.Animation.*.*".
		'
		Dim mixerCount, dummy
		mixerCount = FCountUniqueObjectsOfType( "#model.mixer", "Mixer", dummy )
		AddInfoStat myAniPPG, "nbMixerSrc",		"Mixers",			mixerCount,	True

		Dim animSourceCount, shapeSourceCount, audioSourceCount
		Dim animSourceList

		set animSourceList = CreateObject("XSI.Collection")
		animSourceCount = FCountUniqueObjectsOfType( "#model.mixer.animsources.*", "Action", animSourceList )
		Dim nbTotalActionItems, nbTotalActionKeys, itemSource
		nbTotalActionItems = 0
		nbTotalActionKeys = 0
		for each item in animSourceList
			nbTotalActionItems = nbTotalActionItems + item.sourceitems.count
			for i = 0 to item.sourceitems.count - 1
				On Error Resume Next
				set itemSource = item.sourceitems(i).source
				if typename( itemSource ) = "FCurve" then
					nbTotalActionKeys = nbTotalActionKeys + itemSource.keys.count
				end if
			next
		next
		AddInfoStat myAniPPG, "nbAnimSrc",		"Animation sources",			animSourceCount,	True

		shapeSourceCount = FCountUniqueObjectsOfType( "#model.mixer.shapesources.*", "ShapeAction", dummy )
		AddInfoStat myAniPPG, "nbShapeSrc",		"Shape sources",				shapeSourceCount,	True

		audioSourceCount = FCountUniqueObjectsOfType( "#model.mixer.audiosources.*", "AudioSource", dummy )
		AddInfoStat myAniPPG, "nbAudioSrc",		"Audio sources",				audioSourceCount,	True

		AddInfoStat myAniPPG, "nbActionItems",	"Animation source items",		nbTotalActionItems,	True
		AddInfoStat myAniPPG, "nbActionKeys",	"Animation source keys",		nbTotalActionKeys,	True


		'
		' GDF : End Mixer Info
		'



	end if  ' Animation Page

	if ( in_doRendering ) then

		'Number of Passes
		set myList = EnumElements("Passes.List")
		myNbPass = myList.count

		myCurrPass = split(GetValue("Passes.current"), ".")(1)

		'Count the Materials
		set myMatList = CreateObject("XSI.Collection")
		myMatList.Items = "*.material"
		set myMatList = FilterPset(myMatList, siSharedPSet, FALSE)
		if not Typename(myMatList) = "Nothing" then
			myNbMat = myMatList.count
		end if

		'==================================================================================
		' Rendering Info Page
		'==================================================================================
		set myRenPPG = ActiveSceneRoot.AddProperty( "CustomProperty", false, "Rendering")		
		AddInfoStat myRenPPG, "nbPass",		"Number of Passes",		myNbPass,	True
		AddInfoStat myRenPPG, "currPass",	"Current Pass",			myCurrPass,	False
		AddInfoStat myRenPPG, "nbMaterials","Materials",			myNbMat,	False


		'Number of Image Sources
		set myList = EnumElements("Sources.Image")
		if Not Typename(myList) = "Nothing" then
			myNbImgSrc = myList.count

			AddInfoStat myRenPPG, "nbImgSrc",	"Image Sources",		myNbImgSrc,	False

		end if

		'Number of Image Clips
		set myList = EnumElements("Clips.Image")
		if Not Typename(myList) = "Nothing" then
			myNbImgClp = myList.count - 1

			AddInfoStat myRenPPG, "nbImgClp",	"Image Clips",		myNbImgClp,	False

			'
			' GDF : Clip Size Info
			'
			Dim totalBytes, item, xRes, yRes, bitsPerPixel

			totalBytes = 0
			for each item in myList
				if typename( item ) <> "Parameter" then
					xRes = getvalue( item & ".source.xres" )
					yRes = getvalue( item & ".source.yres" )
					bitsPerPixel = CLng( getvalue( item & ".source.bitsperpixel" ) )
					totalBytes = totalBytes + ( xRes * yRes * bitsPerPixel / 8 )
				end if
			next

			AddInfoStat myRenPPG, "nbImgClpKBytes",	"Image Clip KB",		CLng( totalBytes / 1024 + 0.5 ),	False
			'
			' GDF : End Clip Size Info
			'

		end if

	end if  ' Rendering Page

	'Get the current Scene Name
	mySceneName = GetValue("Project.Scene")

	'==================================================================================
	' Info Scene Inspector Assembly
	' (We will inspect multiple custom property objects together in a single PPG)
	'==================================================================================
	set myPPGList = CreateObject("XSI.Collection")
	if ( in_doGeneral   ) then 
		myPPGList.Add myGenPPG	
		myPPGList.Add myComPPG	
	end if
	if ( in_doAnimation ) then myPPGList.Add myAniPPG	end if
	if ( in_doRendering ) then myPPGList.Add myRenPPG	end if
	myPPGList.Add "Project.ExternalFilesList"


	' Launch the ppg in modal mode, wait for Ok or Cancel to be pressed
	On Error Resume Next
	InspectObj myPPGList ,, "Scene Info: " & mySceneName,siModal

	if ( in_doGeneral   ) then 
		DeleteObj myGenPPG
		DeleteObj myComPPG
	end if
	if ( in_doAnimation ) then DeleteObj myAniPPG	end if
	if ( in_doRendering ) then DeleteObj myRenPPG	end if

end sub


'------------------------------------------------------------------------------
' NAME:			FCountUniqueObjectsOfType
' INPUT:		Filter string to match objects, type name to match for the returned results.
' OUTPUT:		Output list of unique objects, if the argument 'outList' was set
'				to a valid XSI.Collection.
' DESCRIPTION:	Returns the number of unique objects of a given type which match a
'				query string.  The actual list is returned in the outList parameter
' NOTE:			Needs updating once bug 69091 (.unique) is resolved...
'------------------------------------------------------------------------------
function FCountUniqueObjectsOfType( filterString, typeQuery, outList  )
	if Typename( outList ) <> "Empty" then
		outList.RemoveAll
	end if
	FCountUniqueObjectsOfType = 0
	Dim myObjectList
	set myObjectList = CreateObject("XSI.Collection")
	myObjectList.Items = filterString
	myObjectList.Unique = True	' Note this doesn't work properly. See bug 69091.
	if Not Typename( myObjectList ) = "Nothing" then
		for each item in myObjectList
			if item.type = typeQuery then
				FCountUniqueObjectsOfType = FCountUniqueObjectsOfType + 1
				if Typename( outList ) <> "Empty" then
					outList.Add item
				end if
			end if
		next
	end if
end function


'------------------------------------------------------------------------------
' NAME:			GetInputAndDisplayPortValuesProc
' DESCRIPTION:	Displays a dialog for displaying graph data
'------------------------------------------------------------------------------
sub GetInputAndDisplayPortValuesProc( _
	in_port, io_show, io_mode, io_clearlabel, io_label, io_position, io_offsetx, io_offsety, _
	io_scale, io_skipdefault, io_usecolor, io_colorr, io_colorg, io_colorb, io_colora, _
	io_userange, io_rangestart, io_rangeend, io_rangestep, io_selectedonly, _
	io_subarray, io_arraystart, io_arrayend, io_global, io_drawontop, io_modifiedonly, io_percentage, _
	in_type, in_context, in_structure )
	
	set oPSet = ActiveSceneRoot.AddProperty( "CustomProperty", false, "ShowValues" )
	set oLayout = oPSet.PPGLayout

	'-------------------------------------------------------------------------
	' Contexts
	'-------------------------------------------------------------------------
	Dim E3DContext_Singleton, E3DContext_Component0D, E3DContext_Component1D, E3DContext_Component2D, E3DContext_SubsetMasterNode
	E3DContext_Singleton		= 1
	E3DContext_Component0D		= 2
	E3DContext_Component1D		= 4
	E3DContext_Component2D		= 8
	E3DContext_SubsetMasterNode = 32

	'-------------------------------------------------------------------------
	' Structure
	'-------------------------------------------------------------------------
	E3DStructure_Array	 		= 2

	'-------------------------------------------------------------------------
	' Get Type String
	'-------------------------------------------------------------------------
	Dim aTypeString
	if     in_type = siICENodeDataBool then
		aTypeString = "Boolean"
	elseif in_type = siICENodeDataLong then
		aTypeString = "Integer"
	elseif in_type = siICENodeDataFloat then
		aTypeString = "Scalar"
	elseif in_type = siICENodeDataVector2 then
		aTypeString = "Vector 2D"
	elseif in_type = siICENodeDataVector3 then
		aTypeString = "Vector 3D"
	elseif in_type = siICENodeDataVector4 then
		aTypeString = "Vector 4D"
	elseif in_type = siICENodeDataMatrix33 then
		aTypeString = "Matrix 3D"
	elseif in_type = siICENodeDataMatrix44 then
		aTypeString = "Matrix 4D"
	elseif in_type = siICENodeDataQuaternion then
		aTypeString = "Quaternion"
	elseif in_type = siICENodeDataRotation then
		aTypeString = "Rotation"
	elseif in_type = siICENodeDataColor4 then
		aTypeString = "Color"
	elseif in_type = siICENodeDataLocation then
		aTypeString = "Location"
	elseif in_type = siICENodeDataShape then
		aTypeString = "Shape"
	elseif in_type = siICENodeDataString then
		aTypeString = "String"
	elseif in_type = siICENodeDataIcon then
		aTypeString = "Icon"
	else
		Err.Raise siErrCancelled
		Exit Sub		
	end if

	'-------------------------------------------------------------------------
	' Display Modes
	'-------------------------------------------------------------------------
	'E3DNumeric           = 0
	'E3DNormals           = 1
	'E3DPoints            = 2
	'E3DPointTrails       = 3
	'E3DAxes   	          = 4
	'E3DAxisAngles        = 5
	'E3DColors	          = 6
	'E3DNull	          = 7
	'E3DNormalsLength     = 8
	'E3DAxisNumericAngles = 9
	'E3DVectorTrails      = 10
	'E3DLines		      = 11

	'-------------------------------------------------------------------------
	' Get Supported Display Modes
	'-------------------------------------------------------------------------
	Dim aDisplayModes
	if ( in_type = siICENodeDataLocation And in_structure = E3DStructure_Array ) then
		aDisplayModes = Array( "Points", 2, "Lines", 11, "Nulls", 7, "Numeric", 0 )
	elseif ( in_type = siICENodeDataLocation ) then
		aDisplayModes = Array( "Points", 2, "Nulls", 7, "Numeric", 0 )
	elseif ( in_type = siICENodeDataVector3 And in_context = E3DContext_SubsetMasterNode And in_structure = E3DStructure_Array ) then
		aDisplayModes = Array( "Points", 2, "Lines", 11, "Nulls", 7, "Numeric", 0 )
	elseif ( in_type = siICENodeDataVector3 And in_context = E3DContext_SubsetMasterNode ) then
		aDisplayModes = Array( "Points", 2, "Nulls", 7, "Numeric", 0 )
	elseif ( in_type = siICENodeDataVector3 And in_structure = E3DStructure_Array ) then
		aDisplayModes = Array( "Points", 2, "Lines", 11, "Point Trails", 3, "Vector Trails", 10, "Vectors", 1, "Vectors + Length", 8, "Nulls", 7, "Numeric", 0 )
	elseif ( in_type = siICENodeDataVector3 ) then
		aDisplayModes = Array( "Points", 2, "Point Trails", 3, "Vector Trails", 10, "Vectors", 1, "Vectors + Length", 8, "Nulls", 7, "Numeric", 0 )
	elseif ( in_type = siICENodeDataVector4 ) then
		aDisplayModes = Array( "Points", 2,"Nulls", 7, "Numeric", 0 )
	elseif ( in_type = siICENodeDataQuaternion Or in_type = siICENodeDataRotation ) then 
		aDisplayModes = Array( "Axis + Angle", 5, "Axis + Numeric Angle", 9, "Axes", 4, "Numeric", 0 )
	elseif ( in_type = siICENodeDataMatrix33 Or in_type = siICENodeDataMatrix44 ) then
		aDisplayModes = Array( "Axes", 4, "Numeric", 0 )
	elseif ( in_type = siICENodeDataColor4 ) then
		aDisplayModes = Array( "Colors", 6, "Numeric", 0 )
		if ( io_mode = 6 ) then
			io_usecolor = false
		end if
	else
		aDisplayModes = Array( "Numeric", 0 )
	end if

	'-------------------------------------------------------------------------
	' Attributes
	'-------------------------------------------------------------------------
	set oPApplied		= oPSet.AddParameter3( "Applied", siBool, false,,, false )
	set oPPort			= oPSet.AddParameter3( "Port", siString, in_port,,,, true )
	set oPType			= oPSet.AddParameter3( "Type", siString, aTypeString,,,, true )
	set oPShow			= oPSet.AddParameter3( "Show", siBool, io_show,,, false )
	set oPMode			= oPSet.AddParameter3( "DisplayMode", siInt4, io_mode,,, false )
	set oPLabel			= oPSet.AddParameter3( "Label", siString, io_label )
	set oPScale			= oPSet.AddParameter2( "ScaleFactor", siFloat, io_scale,,, 0.001, 10 )
	set oPUseColor		= oPSet.AddParameter3( "UseColor", siBool, io_usecolor,,, false )
	set oPColorR		= oPSet.AddParameter3( "ColorR", siFloat, io_colorr,,, false )
	set oPColorG		= oPSet.AddParameter3( "ColorG", siFloat, io_colorg,,, false )
	set oPColorB		= oPSet.AddParameter3( "ColorB", siFloat, io_colorb,,, false )
	set oPColorA		= oPSet.AddParameter3( "ColorA", siFloat, io_colora,,, false )
	set oPUseRange		= oPSet.AddParameter3( "UseRange", siBool, io_userange,,, false )
	set oPRangeStart	= oPSet.AddParameter2( "RangeStart", siInt4, io_rangestart, 0,, 0, 10000 )
	set oPRangeEnd		= oPSet.AddParameter2( "RangeEnd", siInt4, io_rangeend, 0,, 0, 10000 )
	set oPRangeStep		= oPSet.AddParameter2( "RangeStep", siInt4, io_rangestep, 1,, 1, 20 )
	set oPSkipDefault	= oPSet.AddParameter3( "SkipDefault", siBool, io_skipdefault,,, false )
	set oPSelectedOnly	= oPSet.AddParameter3( "SelectedOnly", siBool, io_selectedonly,,, false )
	set oPOffsetX		= oPSet.AddParameter2( "OffsetX", siInt4, io_offsetx,,, -100, 100 )
	set oPOffsetY		= oPSet.AddParameter2( "OffsetY", siInt4, io_offsety,,, -100, 100 )
	set oPLastPosition	= oPSet.AddParameter3( "LastPosition", siInt4, io_position,,, false )
	set oPPosition		= oPSet.AddParameter3( "Position", siInt4, io_position,,, false )
	set oPSubArray		= oPSet.AddParameter3( "SubArray", siBool, io_subarray,,, false )
	set oPArrayStart	= oPSet.AddParameter2( "ArrayStart", siInt4, io_arraystart, 0,, 0, 10 )
	set oPArrayEnd		= oPSet.AddParameter2( "ArrayEnd", siInt4, io_arrayend, 0,, 0, 10 )
	set oPGlobal		= oPSet.AddParameter3( "Global", siBool, io_global,,, false )
	set oPDrawOnTop		= oPSet.AddParameter3( "DrawOnTop", siBool, io_drawontop,,, false )
	set oPModifiedOnly	= oPSet.AddParameter3( "ModifiedOnly", siBool, io_modifiedonly,,, false )
	set oPPercentage	= oPSet.AddParameter2( "Percentage", siInt4, io_percentage, 1, 100, 1, 100 )

	'-------------------------------------------------------------------------
	' Layout
	'-------------------------------------------------------------------------
	Dim aPositions
	aPositions = Array( "Above", 0, "Below", 1, "Left", 2, "Right", 3 )

	oLayout.AddRow
		set oEnable = oLayout.AddItem( "Show", "Show" )
		oEnable.LabelMinPixels = 73
		oEnable.WidthPercentage = 24
		set oType = oLayout.AddItem( "Type", "Data Type" )
		oType.SetAttribute siUINoLabel, true
		oType.WidthPercentage = 56
		set oApply = oLayout.AddButton( "Apply" )
		oApply.WidthPercentage = 30
		oApply.SetAttribute "CX", 85
	oLayout.EndRow
	set oDisplay = oLayout.AddEnumControl( "DisplayMode", aDisplayModes, "Display As" )
	oDisplay.LabelMinPixels = 73
	set oScale = oLayout.AddItem( "ScaleFactor", "Scale Factor" )
	oScale.LabelMinPixels = 73
	set oPercentage = oLayout.AddItem( "Percentage", "Display %" )
	oPercentage.LabelMinPixels = 73
	oLayout.AddRow
		set oLabel = oLayout.AddItem( "Label", "Label" )
		oLabel.LabelMinPixels = 73
		oLabel.WidthPercentage = 80
		set oPosition = oLayout.AddEnumControl( "Position", aPositions, "Position" )
		oPosition.SetAttribute siUINoLabel, true
		oPosition.WidthPercentage = 20
	oLayout.EndRow
	oLayout.AddRow
		set oOffsetX = oLayout.AddItem( "OffsetX", "Label Offset" )
		oOffsetX.LabelMinPixels  = 73
		oOffsetX.WidthPercentage = 58 
		set oOffsetY = oLayout.AddItem( "OffsetY", "Y Offset" )
		oOffsetY.SetAttribute siUINoLabel, true
		oOffsetY.WidthPercentage = 42
	oLayout.EndRow
	oLayout.AddRow
		set oUseRange = oLayout.AddItem( "UseRange", "Range" )
		oUseRange.LabelMinPixels = 73
		oUseRange.WidthPercentage = 24
		set oStart = oLayout.AddItem( "RangeStart", "Start" )
		oStart.SetAttribute siUINoLabel, true
		oStart.WidthPercentage = 38
		set oEnd = oLayout.AddItem( "RangeEnd", "End" )
		oEnd.SetAttribute siUINoLabel, true
		oEnd.WidthPercentage = 38
	oLayout.EndRow
	set oStep = oLayout.AddItem( "RangeStep", "Step" )
	oStep.LabelMinPixels  = 101
	if ( in_structure = E3DStructure_Array ) then
		oLayout.AddRow
			set oSubArray = oLayout.AddItem( "SubArray", "Array Range" )
			oSubArray.LabelMinPixels = 73
			oSubArray.WidthPercentage = 24
			set oArrayStart = oLayout.AddItem( "ArrayStart", "Start" )
			oArrayStart.SetAttribute siUINoLabel, true
			oArrayStart.WidthPercentage = 38
			set oArrayEnd = oLayout.AddItem( "ArrayEnd", "End" )
			oArrayEnd.SetAttribute siUINoLabel, true
			oArrayEnd.WidthPercentage = 38
		oLayout.EndRow
	end if
	oLayout.AddRow
		set oUseColor = oLayout.AddItem( "UseColor", "Custom Color" )
		oUseColor.WidthPercentage = 24
		set oColor = oLayout.AddColor( "ColorR", "Color", true )
		oColor.SetAttribute "NoLabel", true
		oColor.WidthPercentage = 76
	oLayout.EndRow
	oLayout.AddItem "Global", "Use Global Coordinates for Display"
	oLayout.AddItem "DrawOnTop", "Draw Values On Top of Shaded Objects"
	oLayout.AddItem "SkipDefault", "Skip Default Values During Display"
	oLayout.AddItem "ModifiedOnly", "Show Values Computed at Current Frame Only"
	oLayout.AddItem "SelectedOnly", "Show Values for Tagged Components Only"
	oLayout.AddStaticText "NOTE: '#' in the label will be replaced by the item id for display."

	'-------------------------------------------------------------------------
	' Logic
	'-------------------------------------------------------------------------
	oLayout.Logic = _
	"sub OnInit" & vbCrLf & _
	"    DisplayMode_OnChanged" & vbCrLf & _
	"    UseRange_OnChanged" & vbCrLf & _
	"    SubArray_OnChanged" & vbCrLf & _
	"    UseColor_OnChanged" & vbCrLf & _
	"end sub" & vbCrLf & _
	_
	"sub DisplayMode_OnChanged" & vbCrLf & _
	"    if DisplayMode.Value = 0 then" & vbCrLf & _
	"        PPG.ScaleFactor.enable( false )" & vbCrLf & _
	"        PPG.UseColor.enable( true )" & vbCrLf & _
	"        PPG.ColorR.enable( true )" & vbCrLf & _
	"    elseif DisplayMode.Value = 6 then" & vbCrLf & _
	"        PPG.ScaleFactor.enable( false )" & vbCrLf & _
	"        PPG.UseColor.enable( false )" & vbCrLf & _
	"        PPG.ColorR.enable( false )" & vbCrLf & _
	"    else" & vbCrLf & _
	"        PPG.ScaleFactor.enable( true )" & vbCrLf & _
	"    end if" & vbCrLf & _
	"end sub" & vbCrLf & _
	_
	"sub Position_OnChanged" & vbCrLf & _
	"    if Position.Value <> LastPosition.Value then" & vbCrLf & _
	"        if (Position.Value = 0 And LastPosition.Value = 1) Or (Position.Value = 1 And LastPosition.Value = 0) then" & vbCrLf & _
	"            PPG.OffsetX.Value = -PPG.OffsetX.Value" & vbCrLf & _
	"            PPG.OffsetY.Value = -PPG.OffsetY.Value" & vbCrLf & _
	"        elseif (Position.Value = 2 And LastPosition.Value = 3) Or (Position.Value = 3 And LastPosition.Value = 2) then" & vbCrLf & _
	"            PPG.OffsetX.Value = -PPG.OffsetX.Value" & vbCrLf & _
	"            PPG.OffsetY.Value = -PPG.OffsetY.Value" & vbCrLf & _
	"        elseif (LastPosition.Value = 0 And Position.Value = 2) Or (LastPosition.Value = 3 And Position.Value = 0) _" & vbCrLf & _
	"            Or (LastPosition.Value = 1 And Position.Value = 3) Or (LastPosition.Value = 2 And Position.Value = 1) then" & vbCrLf & _
	"            TmpValue = PPG.OffsetX.Value" & vbCrLf & _
	"            PPG.OffsetX.Value = -PPG.OffsetY.Value" & vbCrLf & _
	"            PPG.OffsetY.Value =  TmpValue" & vbCrLf & _
	"        elseif (LastPosition.Value = 2 And Position.Value = 0) Or (LastPosition.Value = 0 And Position.Value = 3) _" & vbCrLf & _
	"            Or (LastPosition.Value = 3 And Position.Value = 1) Or (LastPosition.Value = 1 And Position.Value = 2) then" & vbCrLf & _
	"            TmpValue = PPG.OffsetX.Value" & vbCrLf & _
	"            PPG.OffsetX.Value =  PPG.OffsetY.Value" & vbCrLf & _
	"            PPG.OffsetY.Value = -TmpValue" & vbCrLf & _
	"        else" & vbCrLf & _
	"            TmpValue = PPG.OffsetX.Value" & vbCrLf & _
	"            PPG.OffsetX.Value = PPG.OffsetY.Value" & vbCrLf & _
	"            PPG.OffsetY.Value = TmpValue" & vbCrLf & _
	"        end if" & vbCrLf & _
	"        PPG.LastPosition.Value = PPG.Position.Value" & vbCrLf & _
	"    end if" & vbCrLf & _
	"end sub" & vbCrLf & _
	_
	"sub UseRange_OnChanged" & vbCrLf & _
	"    PPG.RangeStart.enable( UseRange.Value )" & vbCrLf & _
	"    PPG.RangeEnd.enable( UseRange.Value )" & vbCrLf & _
	"    PPG.RangeStep.enable( UseRange.Value )" & vbCrLf & _
	"end sub" & vbCrLf & _
	_
	"sub SubArray_OnChanged" & vbCrLf & _
	"    PPG.ArrayStart.enable( SubArray.Value )" & vbCrLf & _
	"    PPG.ArrayEnd.enable( SubArray.Value )" & vbCrLf & _
	"end sub" & vbCrLf & _
	_
	"sub UseColor_OnChanged" & vbCrLf & _
	"    PPG.ColorR.enable( UseColor.Value )" & vbCrLf & _
	"end sub" & vbCrLf & _
	_
	"sub Apply_OnClicked" & vbCrLf & _
	"	 PPG.Applied.Value = true" & vbCrLf & _
	"    DisplayPortValues " & _
	"        Port.Value, Show.Value, DisplayMode.Value, true, Label.Value, Position.Value, OffsetX.Value, OffsetY.Value, " & _
	"        ScaleFactor.Value, SkipDefault.Value, UseColor.Value, ColorR.Value, ColorG.Value, ColorB.Value, ColorA.Value, " & _
	"        UseRange.Value, RangeStart.Value, RangeEnd.Value, RangeStep.Value, SelectedOnly.Value, " & _
	"        SubArray.Value, ArrayStart.Value, ArrayEnd.Value, Global.Value, DrawOnTop.Value, " & _
	"        ModifiedOnly.Value, Percentage.Value" & vbCrLf & _
	"end sub"

	'-------------------------------------------------------------------------
	' Layout ViewSize: Make it bigger to avoid to scroll down to get the last buttons 
	'-------------------------------------------------------------------------
	oLayout.SetViewSize 400,500
	
	'-------------------------------------------------------------------------
	' Display Modal PSet
	'-------------------------------------------------------------------------
	Dim aCancelled
	aCancelled = InspectObj( oPSet, , "Show Values", siModal, false )
	
	if Not aCancelled then
		io_show			= oPShow.Value
		io_mode			= oPMode.Value
		io_clearlabel	= true
		io_label		= oPLabel.Value
		io_scale		= oPScale.Value
		io_usecolor		= oPUseColor.Value
		io_colorr		= oPColorR.Value
		io_colorg		= oPColorG.Value
		io_colorb		= oPColorB.Value
		io_colora		= oPColorA.Value
		io_userange		= oPUseRange.Value
		io_rangestart	= oPRangeStart.Value
		io_rangeend		= oPRangeEnd.Value
		io_rangestep	= oPRangeStep.Value
		io_skipdefault	= oPSkipDefault.Value
		io_selectedonly	= oPSelectedOnly.Value
		io_position     = oPPosition.Value
		io_offsetx      = oPOffsetX.Value
		io_offsety      = oPOffsetY.Value
		io_subarray     = oPSubArray.Value
		io_arraystart   = oPArrayStart.Value
		io_arrayend     = oPArrayEnd.Value
		io_global		= oPGlobal.Value
		io_drawontop	= oPDrawOnTop.Value
		io_modifiedonly	= oPModifiedOnly.Value
		io_percentage	= oPPercentage.Value
	end if

	if Not aCancelled Or oPApplied.Value then
	    DisplayPortValues _
	        in_port, io_show, io_mode, io_clearlabel, io_label, io_position, io_offsetx, io_offsety, _
			io_scale, io_skipdefault, io_usecolor, io_colorr, io_colorg, io_colorb, io_colora, _
	        io_userange, io_rangestart, io_rangeend, io_rangestep, io_selectedonly, _
			io_subarray, io_arraystart, io_arrayend, io_global, io_drawontop, _
			io_modifiedonly, io_percentage
	end if

	DeleteObj oPSet

	if aCancelled then
		Err.Raise siErrCancelled
	end if
end sub

'------------------------------------------------------------------------------
' NAME:			ToggleGridSnapProc
' INPUT:		Snap property to toggle
' DESCRIPTION:	Toggles a snap property
'------------------------------------------------------------------------------
sub ToggleSnapProc( in_property )
	Dim l_bEnable

	l_bEnable = not CBool(GetValue( "Preferences.SnapProperties" & in_property ))
	SetValue "Preferences.SnapProperties" & in_property, l_bEnable
end sub

'------------------------------------------------------------------------------
' NAME:			InspectSnapProc
' DESCRIPTION:	Inspect the snap property
'------------------------------------------------------------------------------
sub InspectSnapProc()
	InspectObj "Preferences.SnapProperties" 
end sub

'------------------------------------------------------------------------------
' NAME:			InspectTransformProc
' DESCRIPTION:	Inspect the transform property
'------------------------------------------------------------------------------
sub InspectTransformProc()
	InspectObj "Preferences.TransformProperties" 
end sub

'------------------------------------------------------------------------------
' NAME:			InspectViewCubeProc
' DESCRIPTION:	Inspect the viewcube properties
'------------------------------------------------------------------------------
sub InspectViewCubeProc()
	InspectObj "Preferences.ViewCube" 
end sub

'------------------------------------------------------------------------------
' NAME:		CreateRefPlaneProc
'
' INPUT:	N/A
'
' DESCRIPTION: Create a reference plane, and select it
'				
'------------------------------------------------------------------------------
function CreateRefPlaneProc( in_objects )
	
	dim newPlanes, Plane

	set newPlanes = SICreateRefPlane( in_objects )

	for each Plane in newPlanes
		if Not TypeName (Plane) = "Nothing" then
			SetCurrentReferencePlane Plane
			AutoInspect Plane
		end if
	next

	set CreateRefPlaneProc = newPlanes

end function

'------------------------------------------------------------------------------
' NAME:		SetTransientRefPlaneProc
'
' INPUT:	N/A
'
' DESCRIPTION: Set the transient reference plane and select it
'				
'------------------------------------------------------------------------------
sub SetTransientRefPlaneProc( in_objects )
	
	SetReferencePlane "RefPlanes.Transform", in_objects
	SetCurrentReferencePlane "RefPlanes.Transform"

end sub

'------------------------------------------------------------------------------
' NAME:		ToggleParameterValueProc
'
' INPUT:	 	in_InputObjs : list of objects to toggle parameters on
'		in_ParamNames : which boolean parameters to toggle
'
' DESCRIPTION: 	Toggles the value of boolean parameters in in_ParamNames  for each object in in_InputObjs 
'				
'------------------------------------------------------------------------------
sub ToggleParameterValueProc( in_InputObjs, in_ParamNames )

	Dim l_SelectedObjects, obj, l_ParamArray, param, l_CompStr, l_NewVal 

	set l_SelectedObjects = siFilter( in_InputObjs, "SceneObject" )
	if typename( l_SelectedObjects ) = "Nothing" then
		exit sub
	end if

	' Use 20000 since split doesn't work properly with -1 on IRIX
	l_ParamArray = Split(in_ParamNames, ",", 20000, 1)

	for each obj in l_SelectedObjects
		for each param in l_ParamArray
			l_CompStr = obj & "." & param
			l_NewVal = Not ( CBool( GetValue( l_CompStr ) = True))
			SetValue  l_CompStr, l_NewVal
		next
	next
end sub

'------------------------------------------------------------------------------
' NAME:			CreateSymmetryMap	
'
' INPUT:		in_oppreset		- Symmetry Map operator preset.
'				in_objs
'				in_name			- Symmetry Map property name
'				in_proppreset	- Symmetry Map property preset.
'
' DESCRIPTION:	Create a cluster symmetry map. A cluster symmetry map consists of
'				an operator and a property. If the input objects contain
'				subcomponent definitions i.e. selected indices then a cluster
'				will be created in its places.
'
'------------------------------------------------------------------------------
function CreateSymmetryMap(in_oppreset, in_objs, in_name, in_proppreset)

	Dim l_PropList
	
	set l_PropList = CreatePointClusterPropertiesFunc( in_objs, "SymmetryMapCls", in_name, in_proppreset )
	
	if Not TypeName (l_PropList) = "Nothing" then
		
		'
		' The input argument to ApplyOp is an Input/Output argument. This
		' means that the list turns into a connection set.
		set l_OpPropList = l_PropList

		'--------------------------------------------------------------------
		' 2) Apply the weight map operator to the weight map
		'--------------------------------------------------------------------
		set l_OpList = ApplyOp(in_oppreset, l_OpPropList)

		'--------------------------------------------------------------------
		' Select the property(s); if there are any.
		'--------------------------------------------------------------------
		if Not TypeName (l_PropList) = "Nothing" then
			' convert property list to a string for selection because for some
			' reason the selection object cannot use the newly created list.
			SelectObj  l_PropList
		end if

		'--------------------------------------------------------------------
		' Inspect the operator(s); if there are any.
		'--------------------------------------------------------------------

		if Not TypeName (l_OpList) = "Nothing" then
			AutoInspect l_PropList
		end if
	else
		LogMessage XSIUtils.Translate( IDS_NO_VALID_OBJECTS_FOR_CLSPROP, "XSISCRIPTS", "symmetry maps" ), siInfo 
	end if

	set CreateSymmetryMap = l_PropList

end function

'------------------------------------------------------------------------------
' NAME:		InspectEnvelopeWeightsProc
'
' DESCRIPTION:	Inspects the envelope weights of the selected objects, ie open
'				the weight editor
'				
'------------------------------------------------------------------------------
sub InspectEnvelopeWeightsProc( )

	OpenView "Weight Editor"

end sub

'------------------------------------------------------------------------------
' NAME:		OpenShapeEditorProc
'
' DESCRIPTION:	opens the shape manager
'				
'------------------------------------------------------------------------------
sub OpenShapeEditorProc( )

	OpenView "Shape Manager"

end sub

'------------------------------------------------------------------------------
' NAME:		OpenICETreeProc
'
' DESCRIPTION:	Opens the ICE Tree view
'				
'------------------------------------------------------------------------------
sub OpenICETreeProc( )

	OpenView "ICE Tree"

end sub


'------------------------------------------------------------------------------
' NAME:		SmoothEnvelopeWeightProc
'
' INPUT:	PropObj Envelope Weight to use
'			SubComp Objects to have their points smoothed
'			- 
'
' DESCRIPTION:	Calls the smooth task and inspect its property page
'				
'------------------------------------------------------------------------------
sub SmoothEnvelopeWeightProc( PropObj , SubComp )

	Dim l_InputObj
	
	if SubComp.count = 1 then
		set l_SmoothEnv = SISmoothEnvWght( PropObj , SubComp(0) )
		AutoInspect l_SmoothEnv
	else
		set l_SmoothEnvGroup = CreateObject("XSI.Collection")

		for each l_InputObj in SubComp
			set l_SmoothEnv = SISmoothEnvWght( PropObj , l_InputObj )
			l_SmoothEnvGroup.Add l_SmoothEnv
		next

		AutoInspect l_SmoothEnvGroup
	end if

end sub



'------------------------------------------------------------------------------
' NAME:		LimitEnvelopeDeformersProc
'
' INPUT:	PropObj Envelope Weight to use
'			SubComp Objects to have their points limited
'			limit
'
' DESCRIPTION:	applies the operator and inspects the ppg.
'				
'------------------------------------------------------------------------------
Function LimitEnvelopeDeformersProc( PropObj, SubComp, in_Limit )
    Dim myOp, l_ConnectionSet, l_MainGroup, l_SubCompGroup, cluster, l_Prop
    
	set l_ConnectionSet = createobject("xsi.connectionset")
	set l_MainGroup = createobject("xsi.collection")
	set l_Selection = createobject("xsi.collection")
	
	set l_Prop = GetValue(PropObj)
	l_MainGroup.add		l_Prop
	
    if ( TypeName(SubComp) = "String" ) then
        set newsubcomp = GetValue(SubComp)
        if ( TypeName(newsubcomp) = "X3DObject" ) then
            set newsubcomp = Nothing
        end if
    elseif TypeName(SubComp) = "Nothing" or TypeName(SubComp) = "Empty" then
        set newsubcomp = Nothing
    else
        set newsubcomp = SubComp(0)
    end if
	
    if ( TypeName(newsubcomp) = "Empty" or TypeName(newsubcomp) = "Nothing" ) then
        ' complete internal cluster
        set cluster = SICreateCluster("Pnt", ,l_Prop.parent3DObject,1+2)(0)
    else
        set cluster = SICreateCluster("Pnt", ,newsubcomp.SubComponent.parent3DObject,2)(0)
        SIAddToCluster cluster, newsubcomp.SubComponent
    end if
    
    l_Selection.add cluster
	
	l_ConnectionSet.type = siGroupLevel
	l_ConnectionSet.addgroup l_MainGroup
	l_ConnectionSet.addgroup l_Selection
	
	set myOp = ApplyOperator( "LimitEnvelopeDeformersOp", l_ConnectionSet, siGroupLevel )
    		
	SetValue myOp & ".limit", in_Limit
	
	set LimitEnvelopeDeformersProc = myOp
end Function

'------------------------------------------------------------------------------
' NAME:		LockEnvelopeDeformerWeightsProc
'
' INPUT:	in_PropObj		Envelope Weight to use
'			inDeformers		Deformers to lock
'			in_bLocked		Lock or unlock
'			in_bExclusive	Unlock/lock all other deformers
'			- 
'
'------------------------------------------------------------------------------
'sub LockEnvelopeDeformerWeightsProc( in_PropObj , in_Deformers, in_bLocked, in_bExclusive )
'	
'	Dim l_Deformers, l_Pick, l_Button, l_Sel, l_Prim, l_bFound
'
'
'	' If no envelope weight property specified, fetch it from selection
'	if( typename( in_PropObj ) = "Empty" ) then
'		l_bFound = false
'		for each l_Sel in Selection
'
'			On Error Resume Next	
'			set l_Prim = GetAssociatedPrimitive( selection(0))
'
'			set l_History = l_Prim.constructionhistory
'
'			set l_EnvelopeOp = l_History.Find( "envelopop" )
'
'			for each l_inputport in l_EnvelopeOp.inputports
'
'				if l_inputport.target.type = envweights then
'					set in_PropObj = l_inputport.target
'					l_bFound = true
'					exit for
'				end if
'
'			next
'
'			if l_bFound then
'				exit for
'			end if
'		next
'
'	end if
'
'	' If we still have nothing exit
'	if( typename( in_PropObj ) = "Empty" ) then
'		exit sub
'	end 
'
'
'	if ( in_Deformers = "" ) then
'		set l_Deformers = CreateObject("XSI.Collection")
'
'		'call pick objects		
'		l_Button = 1
'		While l_Button <> 0
'			PickElement "object", "Pick deformers to lock", , l_Pick, l_Button
'			if typename(l_pick) <> "Empty" And Button <> 0 then
'				l_Deformers.AddItems l_Pick
'			end if
'		Wend
'	else
'		l_Deformers = in_Deformers
'	end if
'
'	in_Deformers = l_Deformers
'
'
'	set LockEnvelopeDeformerWeightsProc = LockEnvelopeDeformerWeights( in_PropObj, in_Deformers, in_bLocked, in_bExclusive )
'
'end sub

'------------------------------------------------------------------------------
' NAME:		ApplyHairRenderer
'
' INPUT:	- in_Obj			Object to apply hair renderer to.
'
' DESCRIPTION:	Function to add the hair renderer onto hair objects.
'				
'------------------------------------------------------------------------------

sub ApplyHairRenderer( in_obj )
		' Make the material local to the cloud
		MakeLocal in_obj.material

        set objMat = in_obj.material

		' Delete everything in the new local material
		set colToDelete = CreateObject("XSI.Collection")
		for each oShader in objMat.GetAllShaders()
		    colToDelete.Add oShader
		next
		for each oShader in colToDelete
		    DisconnectAndDeleteOrUnnestShaders oShader, objMat
		next

		' Connect the hair shader into the required ports
		objMat.Surface.connectfrompreset "Hair_Renderer", "Material Shaders" 
		objMat.Shadow.connect( objMat.Surface.source )

		objMat.name = in_obj.name & "_Material"
end sub


'------------------------------------------------------------------------------
' NAME:		ApplyHairOp
'
' INPUT:	- in_Objs			Object list to apply hair generator to.
'			- in_preset			Hair primitive preset
'
' DESCRIPTION:	Function to add the hair primitive and hair generator operator
'				to the items passed in the selection list 
'				
'------------------------------------------------------------------------------
'
function ApplyHairOp ( in_Objs, in_Preset )

	Dim	l_ObjectList, l_NewClusterList, l_SubCompList, l_Object, l_ConnectionSet
	Dim	l_MainGroup, l_ClusterGroup, l_OutputGroup, l_SimulationGroup, l_CollisionGroup, l_FurPoseGroup
	Dim	l_OutputObject, l_OutputPrimitive, l_Operator
	Dim	l_CreatedOperators, l_CreatedObjects, l_CreatedPrimitives
	Dim l_EmitterObj, l_ApplyOperation

	Dim l_MapOp, l_MapOpCnxGrpSet, l_MapOpEmitterInput, l_MapOpFurComponent

	'
	' Replace any subcomponents with clusters in the input list
	'

	' maybe one day we should have the new cluster connected with the tag!
	set l_ObjectList = FSubComponents2Clusters( in_Objs, false, l_NewClusterList, l_SubCompList )


	'
	' Manage what we have created (operators, objects and primitives)
	'
	set l_CreatedOperators =	CreateObject("XSI.Collection")
	set l_CreatedObjects =		CreateObject("XSI.Collection")
	set l_CreatedPrimitives =	CreateObject("XSI.Collection")

	'
	' Simply iterate over the selection, and emit hair from those objects or clusters in the selection
	' Collisions are dealt with independently when you add obstacles.
	'
	for each l_Object in l_ObjectList

		set l_ConnectionSet = createobject("xsi.connectionset")
		set l_MainGroup = createobject("xsi.collection")
		set l_ClusterGroup = createobject("xsi.collection")
		set l_OutputGroup = createobject("xsi.collection")
		set l_SimulationGroup = createobject("xsi.collection")
		set l_CollisionGroup = createobject("xsi.collection")
		set l_FurPoseGroup = createobject("xsi.collection")

		l_ApplyOperation=0
	
		
		'LogMessage "Object : " & l_Object
		'LogMessage "Type : " & l_Object.Type
		'LogMessage "TypeName: " & typename( l_Object.obj )

		'
		' For geometry, simply add the primitive to the main port group
		' For clusters, add the cluster to cluster group, and the primitive from which it derives to 
		'						the main port group
		'
		if typename( l_Object.obj ) <> "Nothing" Then

			if typename( l_Object.obj ) = "Cluster" Then
				if l_Object.BelongsTo(si2DComponentFamily ) then

					set l_EmitterObj = l_Object.parent.parent.parent
					l_MainGroup.add l_EmitterObj.activeprimitive
					l_ClusterGroup.add l_Object
					l_ApplyOperation = 1
				else
					LogMessage "Unsupported Cluster Type : " & l_Object
					l_ApplyOperation = 0
				end if
			elseif typename( l_Object.obj ) = "Geometry" Then	
			 	set l_EmitterObj = l_Object
				l_MainGroup.add l_EmitterObj.activeprimitive
				l_ApplyOperation = 1
			else
				LogMessage "Unsupported Geometry Type : " & l_Object
				l_ApplyOperation = 0
			end if

		else
			LogMessage "Unsupported Geometry Type : " & l_Object
			l_ApplyOperation = 0
		end if

		if ( l_ApplyOperation ) then

			'
			' Create the hair primitive, and then add it to the output group of the operator
			'
			SIGetPrim	in_Preset, "Hair", , true, l_OutputObject, l_OutputPrimitive
			l_OutputGroup.add l_OutputPrimitive
			l_FurPoseGroup.add l_OutputObject

			'
			' Deactivate the local transform, so you can reparent the hair object, but still have it
			' stick to the emitter.
			'
			SetValue l_OutputObject & ".kine.local.active", False
		
			'
			' Now parent the emitter - you must do this AFTER the local transform has been disabled
			' so you don't have the incorrect values baked in at primitive creation time
			'
			ParentObj l_EmitterObj, l_OutputObject
			
			
			'
			' Set the Connection Sets
			'
			l_ConnectionSet.type = siGroupLevel
			l_ConnectionSet.addgroup l_MainGroup
			l_ConnectionSet.addgroup l_ClusterGroup
			l_ConnectionSet.addgroup l_OutputGroup
			l_ConnectionSet.addgroup l_SimulationGroup
			l_ConnectionSet.addgroup l_CollisionGroup
			l_ConnectionSet.addgroup l_FurPoseGroup

			if Not TypeName (l_OutputObject) = "Nothing" then
				ApplyHairRenderer l_OutputObject

				' Add deformation blur to the hair
				Dim		l_oMBProp

				l_oMBProp = l_OutputObject.AddProperty( "MotionBlur" )
				SetValue l_oMBProp & ".blur", True 
				SetValue l_oMBProp & ".deformblur", True 
			end if

			dim cns
			if Not TypeName (l_OutputObject) = "Nothing" then
				set cns = SIApplyConstraint( "Pose", l_OutputObject, l_EmitterObj, false )
			end if
			 
	 
			' Apply the Operator
			'
			' TODO / Add more filtering out of items we do not support before we call the ApplyOperator
			'
			set l_Operator = ApplyOperator( "HairGenOp", l_ConnectionSet, siGroupLevel )
		 	
		
			'
			' Add a MapComponentOp between the emitter primitive and hair primitive thru
			' a special uninspectable compid - FurGeomByMultiD
			' This allows multid evals to the positions of the emitter in hair render altrep
			'
			dim l_MapCompOpCnxGrpSet
			set l_MapCompOpCnxGrpSet	= createobject("xsi.connectionset")
			set l_MapOpEmitterInput		= createobject("xsi.collection")
			set l_MapOpFurComponent		= createobject("xsi.collection")

			l_MapOpEmitterInput.add l_EmitterObj.activeprimitive

			l_MapOpFurComponent.add CStr( l_OutputPrimitive ) & ".FurGeomByMultiD"
			
			l_MapCompOpCnxGrpSet.type = siGroupLevel
			l_MapCompOpCnxGrpSet.addgroup l_MapOpEmitterInput
			l_MapCompOpCnxGrpSet.addgroup l_MapOpFurComponent
			
			set l_MapOp = ApplyOperator( "MapCompOp", l_MapCompOpCnxGrpSet, siGroupLevel )

			'
			' Add what I've created to a list
			'
			l_CreatedOperators.Add l_Operator
			l_CreatedPrimitives.Add l_OutputPrimitive
			l_CreatedObjects.Add l_OutputObject

			'
			' Set the initial groom to be along the normals
			'
		 	ApplyHairPopSelectedOp( l_OutputObject )
			FreezeObj( l_OutputObject )
						
		end if

	next

	if Not TypeName (l_CreatedObjects) = "Nothing" then
		' Should we return the operator(s) or the hair objects ???
		set ApplyHairOp = l_CreatedObjects					
		SelectObj	l_CreatedObjects
	else
		set ApplyHairOp = Nothing
	end if
	
	if Not TypeName (l_CreatedPrimitives) = "Nothing" then
		AutoInspect	l_CreatedPrimitives
	end if

end function





'------------------------------------------------------------------------------
' NAME:		ApplyHairDynamicsOp
'
' INPUT:	- in_Objs Object list to apply hair dynamics operator to
'			
'
' DESCRIPTION:	Function to add the Hair Dynamics Operator to those Hair Objects
'			 	in the list of objects passed in
'				
'------------------------------------------------------------------------------
'
function ApplyHairDynamicsOp ( in_Objs )

	Dim	l_MainGroup, l_ForcesGroup, l_EmitterGroup, l_SimulationGroup, l_CollisionGroup
	Dim	l_Object, l_ObjectList, l_Operator, l_CreatedOperators
	Dim	l_HairGenOp, l_InputPort, l_TargetPort, l_EmissionPrimitive

	set l_ObjectList = SIFilter( in_Objs, "geometry" )
	set l_CreatedOperators =	CreateObject("XSI.Collection")

	for each l_Object in l_ObjectList

		set l_ConnectionSet = createobject("xsi.connectionset")
		set l_MainGroup = createobject("xsi.collection")
		set l_EmitterGroup = createobject("xsi.collection")
		set l_SimulationGroup = createobject("xsi.collection")
		set l_CollisionGroup = createobject("xsi.collection")
		set l_ForcesGroup = createobject("xsi.collection")
	 
		'LogMessage "Object : " & l_Object
		'LogMessage "Type : " & l_Object.Type
		'LogMessage "TypeName: " & typename( l_Object.obj )

		'
		' Only process those objects that have a hair generator operator present
		'
		if FIsComponent( l_Object & ".hair.hairGenOp" ) = True then

			'
			' And don't be adding this puppy if it's already there !
			'
			if FIsComponent( l_Object & ".hair.hairDynamicsOp" ) = False then
			

				set l_HairGenOp = GetValue( l_Object & ".hair.hairGenOp" )

				'
				' This goes through all the ports on the hair genOp
				'for each l_InputPort in l_HairGenOp.inputports
				'	set l_TargetPort = l_InputPort.Target2
				'	if typename(l_TargetPort) <> "Nothing" then
				'		logmessage l_TargetPort.fullname
				'	end if	
				'next

				set l_EmissionPrimitive =	l_HairGenOp.inputports(0).Target2
				'
				' Add the hair itself to the main group, and the emission object to the emitter group
				' The emission object is found by looking on the input port of the the hair gen op
				'
				l_MainGroup.add		l_Object
				l_EmitterGroup.add	l_EmissionPrimitive.obj
			 	'
				' Set the Connection Sets
				'
				l_ConnectionSet.type = siGroupLevel
				l_ConnectionSet.addgroup l_MainGroup
				l_ConnectionSet.addgroup l_EmitterGroup
				l_ConnectionSet.addgroup l_SimulationGroup
				l_ConnectionSet.addgroup l_CollisionGroup
				l_ConnectionSet.addgroup l_ForcesGroup
			 
				'
				' now the connection set is complete, pass it all off to applyop 
				'
				set l_Operator = ApplyOperator( "HairDynamicsOp", l_ConnectionSet, siGroupLevel )
				l_CreatedOperators.Add l_Operator

			end if

	 	else 
			'
			' Only process those objects that have a spline generator operator present
			'
			if FIsComponent( l_Object & ".hair.splineGenOp" ) = True then

				'
				' And don't be adding this puppy if it's already there !
				'
				if FIsComponent( l_Object & ".hair.splineDynamicsOp" ) = False then
				
					set l_SplineGenOp = GetValue( l_Object & ".hair.splineGenOp" )
					
					' Find the splines

					for each l_InputPort in l_splineGenOp.inputports
						'logmessage "==================="
						'logmessage "Port: " & l_InputPort & " Type: " & typename( l_InputPort )
						'logmessage "GroupIndex: " & l_InputPort.GroupIndex
						'logmessage "GroupInstance: " & l_InputPort.GroupInstance
						'logmessage "Index: " & l_InputPort.Index

						' We only look at every second input port, because it goes:
						'    a) curve primitive
						'    b) curve kine
						' (repeat as many times as there are curves)
						' So we just want to look for ports on group 0 and index 0.
						'
						if typename( l_InputPort ) <> "Nothing" AND _
										l_InputPort.GroupIndex = 0 AND _
										l_InputPort.Index = 0 then
							set l_TargetPort = l_InputPort.Target2
							if typename(l_TargetPort) <> "Nothing" then
								'logmessage "Target: " & l_TargetPort & " Type: " & typename( l_TargetPort )
								if (l_TargetPort.Type) = "crvlist" then
									'LogMessage "TypeName: " & typename( l_TargetPort.obj )
									l_EmitterGroup.add	l_TargetPort.obj
								end if
							end if	
						end if
					next
					
				 	'
					' Add the hair itself to the main group, and the emission object to the emitter group
					' The emission object is found by looking on the input port of the the hair gen op
					'
					l_MainGroup.add		l_Object
				 
				 	'
					' Set the Connection Sets
					'
					l_ConnectionSet.type = siGroupLevel
					l_ConnectionSet.addgroup l_MainGroup
					l_ConnectionSet.addgroup l_EmitterGroup
					l_ConnectionSet.addgroup l_SimulationGroup
					l_ConnectionSet.addgroup l_CollisionGroup
					l_ConnectionSet.addgroup l_ForcesGroup

					'
					' now the connection set is complete, pass it all off to applyop 
					'
					set l_Operator = ApplyOperator( "SplineDynamicsOp", l_ConnectionSet, siGroupLevel )
					l_CreatedOperators.Add l_Operator

				end if

			end if
	
		end if
	next

	if Not TypeName (l_CreatedOperators) = "Nothing" then
		set ApplyHairDynamicsOp = l_CreatedOperators
		AutoInspect	l_CreatedOperators
	else
		set ApplyHairDynamicsOp = Nothing
	end if
	

	
end function








'------------------------------------------------------------------------------
' NAME:		ApplyHairSplineGenOp
'
' INPUT:	- in_Objs Object list to apply spline hair generator to.
'			- in_preset			hair primitive preset
'
' DESCRIPTION:	 function to add the spline hair primitive and hair generator
'				
'------------------------------------------------------------------------------
'
function ApplyHairSplineGenOp ( in_Objs, in_preset )

	Dim l_CnxSet
 	Dim l_MainEmitterGroup, l_ClusterGroup, l_OutputGroup, l_SimulationGroup, l_CollisionGroup
    Dim dummy1, dummy2
    
		
	' Manage what we have created (operators, objects and primitives)
	'
	set l_OutputHairObj =		CreateObject("XSI.Collection")
	set l_OutputPrim =			CreateObject("XSI.Collection")

 	'Create Connection Set
	set l_CnxSet = createobject("xsi.connectionset")
	set l_MainEmitterGroup = createobject("xsi.collection")
	set l_ClusterGroup = createobject("xsi.collection")
	set l_OutputGroup =	createobject("xsi.collection")
	set l_SimulationGroup = createobject("xsi.collection")
	set l_CollisionGroup = createobject("xsi.collection")

	set l_InObjsExpanded = in_Objs.Expand
	    
	if l_InObjsExpanded.Count > 0 then
		LogMessage "Expanded: " & l_InObjsExpanded
		set l_clusterscreated = FSubComponents2Clusters( l_InObjsExpanded, false, dummy1, dummy2 )
'		logmessage TypeName(l_clusterscreated)
	else
		set l_clusterscreated = l_InObjsExpanded
	end if

	if l_InObjsExpanded.Count < 3 then
		logmessage "Spline Hair requires 3 Splines to Generate Hair from"
	end if

	'deal with clusters and objects in seperate lists.
	set l_InObjects = SIFilter( l_clusterscreated, "curve" )
 

	' set up connection set with one main group, and one output group
  	if typename(l_InObjects) <> "Nothing" then
		for each l_Obj in l_InObjects
			'set up the l_MainEmitterGroup (curveslist, kinestate)
			l_MainEmitterGroup.add l_Obj.activeprimitive		
		next
	end if


	'now create the output object and add it to the l_OutputGroup.
 	sigetprim in_preset, in_preset, , true, l_OutputHairObj, l_OutputPrim

	SetValue l_OutputHairObj & ".kine.local.active", False


	l_OutputGroup.add l_OutputPrim

	l_CnxSet.type = siGroupLevel
	l_CnxSet.addgroup l_MainEmitterGroup
	l_CnxSet.addgroup l_ClusterGroup
	l_CnxSet.addgroup l_OutputGroup
	l_CnxSet.addgroup l_SimulationGroup
	l_CnxSet.addgroup l_CollisionGroup


	' now the connection set is complete, pass it all off to applyop 
	set l_operator = ApplyOperator ("SplineGenOp", l_CnxSet, siGroupLevel )

	'--------------------------------------------------------------------
	' Select the 3DObject
	'--------------------------------------------------------------------
	if Not TypeName (l_OutputHairObj) = "Nothing" then
		SelectFilter siConditionalObjectFilter
		SelectObj l_OutputHairObj
		ApplyHairRenderer l_OutputHairObj
	end if

	
	'--------------------------------------------------------------------
	' Inspect the new object
	'--------------------------------------------------------------------
	if Not TypeName (l_OutputPrim) = "Nothing" then
		AutoInspect l_OutputPrim, ,, "General"
	end if

	set ApplyHairSplineGenOp = l_OutputHairObj
  
end function



'------------------------------------------------------------------------------
' NAME:		ApplyHairCombOp
'
' INPUT:	in_Objs - Object list to apply operator to.
'			in_x, in_y, in_z - direction to comb
'
' DESCRIPTION:	 function to add the comb operator
'				
'------------------------------------------------------------------------------
'
function ApplyHairCombOp ( in_Objs, in_x, in_y, in_z )
	Dim l_op, l_operators, l_immediateMode
	l_immediateMode = GetUserPref("OperationMode")

 	set l_operators = ApplyOp( "HairCombOp", in_Objs )

	if Not TypeName(l_operators) = "Nothing" then
		for each l_op in l_operators
			SetValue l_op & ".x", in_x
			SetValue l_op & ".y", in_y
			SetValue l_op & ".z", in_z
		next 
	end if

	if l_immediateMode then
		for each l_op in l_operators
			FreezeObj( l_op )
		next 
		set ApplyHairCombOp = Nothing
	else
		ApplyHairCombOp = l_operators
	end if
end function


'------------------------------------------------------------------------------
' NAME:		ApplyHairCombNormalOp
'
' INPUT:	in_Objs - Object list to apply operator to.
'
' DESCRIPTION:	 function to add the comb operator
'				
'------------------------------------------------------------------------------
'
function ApplyHairCombNormalOp ( in_Objs )
	Dim l_op, l_operators, l_immediateMode
	l_immediateMode = GetUserPref("OperationMode")

 	set l_operators = ApplyOp( "HairPuffOp", in_Objs )

	if Not TypeName(l_operators) = "Nothing" then
		for each l_op in l_operators
			SetValue l_op & ".type", 0
			SetValue l_op & ".puff", 1
		next 
	end if

	if l_immediateMode then
		for each l_op in l_operators
			FreezeObj( l_op )
		next 
		set ApplyHairCombNormalOp = Nothing
	else
		ApplyHairCombNormalOp = l_operators
	end if
end function


'------------------------------------------------------------------------------
' NAME:		ApplyHairRecombOp
'
' INPUT:	in_Objs - Object list to apply operator to.
'
' DESCRIPTION:	 function to add the recomb operator
'				
'------------------------------------------------------------------------------
'
function ApplyHairRecombOp ( in_Objs )
	Dim l_op, l_operators, l_immediateMode
	l_immediateMode = GetUserPref("OperationMode")

 	set l_operators = ApplyOp( "HairRecombOp", in_Objs )

	if l_immediateMode then
		for each l_op in l_operators
			FreezeObj( l_op )
		next 
		set ApplyHairRecombOp = Nothing
	else
		ApplyHairRecombOp = l_operators
	end if
end function



'------------------------------------------------------------------------------
' NAME:		ApplyHairCutOp
'
' INPUT:	in_Objs - Object list to apply operator to.
'
' DESCRIPTION:	 function to cut hair
'				
'------------------------------------------------------------------------------
'
function ApplyHairCutOp ( in_Objs )
	Dim l_op, l_operators, l_immediateMode
	l_immediateMode = GetUserPref("OperationMode")

 	set l_operators = ApplyOp( "HairCutOp", in_Objs )

	if l_immediateMode then
		for each l_op in l_operators
			FreezeObj( l_op )
		next 
		set ApplyHairCutOp = Nothing
	else
		ApplyHairCutOp = l_operators
	end if
end function


'------------------------------------------------------------------------------
' NAME:		ApplyHairAttenuateOp
'
' INPUT:	in_Objs - Object list to apply operator to.
'
' DESCRIPTION:	 function to scale hair based on surface area
'				
'------------------------------------------------------------------------------
'
function ApplyHairAttenuateOp ( in_Objs )
	Dim l_op, l_operators, l_immediateMode
	l_immediateMode = GetUserPref("OperationMode")

 	set l_operators = ApplyOp( "HairAttenuateOp", in_Objs )

	if l_immediateMode then
		for each l_op in l_operators
			FreezeObj( l_op )
		next 
		set ApplyHairAttenuateOp = Nothing
	else
		ApplyHairAttenuateOp = l_operators
	end if
end function


'------------------------------------------------------------------------------
' NAME:		ApplyHairPopOp
'
' INPUT:	in_Objs - Object list to apply operator to.
'
' DESCRIPTION:	 function to pop zero length hairs
'				
'------------------------------------------------------------------------------
'
function ApplyHairPopOp ( in_Objs )
	Dim l_op, l_operators, l_immediateMode
	l_immediateMode = GetUserPref("OperationMode")

 	set l_operators = ApplyOp( "HairPopOp", in_Objs )

	if l_immediateMode then
		for each l_op in l_operators
			FreezeObj( l_op )
		next 
		set ApplyHairPopOp = Nothing
	else
		ApplyHairPopOp = l_operators
	end if
end function


'------------------------------------------------------------------------------
' NAME:		ApplyHairPopSelectedOp
'
' INPUT:	in_Objs - Object list to apply operator to.
'
' DESCRIPTION:	 function to pop zero length hairs
'				
'------------------------------------------------------------------------------
'
function ApplyHairPopSelectedOp ( in_Objs )
	Dim l_op, l_operators, l_immediateMode
	l_immediateMode = GetUserPref("OperationMode")

 	set l_operators = ApplyOp( "HairPopOp", in_Objs )

	if Not TypeName(l_operators) = "Nothing" then
		for each l_op in l_operators
			SetValue l_op & ".type", 1
		next 
	end if

	if l_immediateMode then
		for each l_op in l_operators
			FreezeObj( l_op )
		next 
		set ApplyHairPopSelectedOp = Nothing
	else
		ApplyHairPopSelectedOp = l_operators
	end if
end function


'------------------------------------------------------------------------------
' NAME:		ApplyHairResampleOp
'
' INPUT:	in_Objs - Object list to apply operator to.
'
' DESCRIPTION:	 function to uniformly resample hairs
'				
'------------------------------------------------------------------------------
'
function ApplyHairResampleOp ( in_Objs )
	Dim l_op, l_operators, l_immediateMode
	l_immediateMode = GetUserPref("OperationMode")

 	set l_operators = ApplyOp( "HairResampleOp", in_Objs )

	if l_immediateMode then
		for each l_op in l_operators
			FreezeObj( l_op )
		next 
		set ApplyHairResampleOp = Nothing
	else
		ApplyHairResampleOp = l_operators
	end if
end function


'------------------------------------------------------------------------------
' NAME:		ApplyHairSplitOp
'
' INPUT:	in_Objs - Object list to apply operator to.
'
' DESCRIPTION:	 function to split hair interpolation
'				
'------------------------------------------------------------------------------
'
function ApplyHairSplitOp ( in_Objs )
	Dim l_op, l_operators, l_immediateMode
	l_immediateMode = GetUserPref("OperationMode")

 	set l_operators = ApplyOp( "HairSplitOp", in_Objs )

	if l_immediateMode then
		for each l_op in l_operators
			FreezeObj( l_op )
		next 
		set ApplyHairSplitOp = Nothing
	else
		ApplyHairSplitOp = l_operators
	end if
end function


'------------------------------------------------------------------------------
' NAME:		ApplyHairShatterOp
'
' INPUT:	in_Objs - Object list to apply operator to.
'
' DESCRIPTION:	 function to shatter hair interpolation
'				
'------------------------------------------------------------------------------
'
function ApplyHairShatterOp ( in_Objs )
	Dim l_op, l_operators, l_immediateMode
	l_immediateMode = GetUserPref("OperationMode")

 	set l_operators = ApplyOp( "HairShatterOp", in_Objs )

	if l_immediateMode then
		for each l_op in l_operators
			FreezeObj( l_op )
		next 
		set ApplyHairShatterOp = Nothing
	else
		ApplyHairShatterOp = l_operators
	end if
end function


'------------------------------------------------------------------------------
' NAME:		ApplyHairMergeOp
'
' INPUT:	in_Objs - Object list to apply operator to.
'
' DESCRIPTION:	 function to merge interpolation groups
'				
'------------------------------------------------------------------------------
'
function ApplyHairMergeOp ( in_Objs )
	Dim l_op, l_operators, l_immediateMode
	l_immediateMode = GetUserPref("OperationMode")

 	set l_operators = ApplyOp( "HairMergeOp", in_Objs )

	if l_immediateMode then
		for each l_op in l_operators
			FreezeObj( l_op )
		next 
		set ApplyHairMergeOp = Nothing
	else
		ApplyHairMergeOp = l_operators
	end if
end function


'------------------------------------------------------------------------------
' NAME:		ApplyHairLockOp
'
' INPUT:	in_Objs - Object list to apply operator to.
'
' DESCRIPTION:	 function to lock hair to the emitting surface
'				
'------------------------------------------------------------------------------
'
function ApplyHairLockOp ( in_Objs )
	Dim l_op, l_operators, l_immediateMode
	l_immediateMode = GetUserPref("OperationMode")

 	set l_operators = ApplyOp( "HairLockOp", in_Objs )

	if l_immediateMode then
		for each l_op in l_operators
			FreezeObj( l_op )
		next 
		set ApplyHairLockOp = Nothing
	else
		ApplyHairLockOp = l_operators
	end if
end function


'------------------------------------------------------------------------------
' NAME:		ApplyHairUnlockOp
'
' INPUT:	in_Objs - Object list to apply operator to.
'
' DESCRIPTION:	 function to unlock hair from emitting surface
'				
'------------------------------------------------------------------------------
'
function ApplyHairUnlockOp ( in_Objs )
	Dim l_op, l_operators, l_immediateMode
	l_immediateMode = GetUserPref("OperationMode")

 	set l_operators = ApplyOp( "HairUnlockOp", in_Objs )

	if l_immediateMode then
		for each l_op in l_operators
			FreezeObj( l_op )
		next 
		set ApplyHairUnlockOp = Nothing
	else
		ApplyHairUnlockOp = l_operators
	end if
end function


'------------------------------------------------------------------------------
' NAME:		ApplyHairScaleOp
'
' INPUT:	in_Objs - Object list to apply operator to.
'
' DESCRIPTION:	 function to scale hairs
'				
'------------------------------------------------------------------------------
'
function ApplyHairScaleOp ( in_Objs )
 	ApplyHairScaleOp = ApplyOp( "HairScaleOp", in_Objs )
end function


'------------------------------------------------------------------------------
' NAME:		ApplyHairClumpOp
'
' INPUT:	in_Objs - Object list to apply operator to.
'
' DESCRIPTION:	 function to clump hairs
'				
'------------------------------------------------------------------------------
'
function ApplyHairClumpOp ( in_Objs )
 	ApplyHairClumpOp = ApplyOp( "HairClumpOp", in_Objs )
end function


'------------------------------------------------------------------------------
' NAME:		ApplyHairPuffOp
'
' INPUT:	in_Objs - Object list to apply operator to.
'
' DESCRIPTION:	 function to puff hairs
'				
'------------------------------------------------------------------------------
'
function ApplyHairPuffOp ( in_Objs )
 	ApplyHairPuffOp = ApplyOp( "HairPuffOp", in_Objs )
end function


'------------------------------------------------------------------------------
' NAME:		ApplyHairRotateOp
'
' INPUT:	in_Objs - Object list to apply operator to.
'
' DESCRIPTION:	 function to rotate hairs
'				
'------------------------------------------------------------------------------
'
function ApplyHairRotateOp ( in_Objs )
 	ApplyHairRotateOp = ApplyOp( "HairRotateOp", in_Objs )
end function

'------------------------------------------------------------------------------
' NAME:		ToggleBackgroundColorProc
'
' DESCRIPTION:	 Toggle background color of 3D views from black <-> grey
'------------------------------------------------------------------------------
sub ToggleBackgroundColorProc ()
	Dim l_Color
	l_Color = GetValue( "Preferences.SceneColors.backgroundcol" )
	if ( l_Color = 0 ) then
		' Set color to grey
		l_Color = 2139062271
	else
		' Set color to black
		l_Color = 0
	end if
	SetValue "Preferences.SceneColors.backgroundcol", l_Color
end sub

'------------------------------------------------------------------------------
' NAME:		RotoscopyOptionsProc
'
' DESCRIPTION:	 Enable rotoscopy and display rotoscopy options for view
'------------------------------------------------------------------------------
sub RotoscopyOptionsProc ()
	Dim l_ActiveCamera

	set l_ActiveCamera = GetViewCamera()
	if ( Not GetValue(l_ActiveCamera & ".camdisp.rotoenable") ) then
		SetValue l_ActiveCamera & ".camdisp.rotoenable", True
	end if
	InspectObj l_ActiveCamera & ".rotoscope"
end sub

'------------------------------------------------------------------------------
' NAME:		ToggleFieldGuideProc
'
' DESCRIPTION:	 Toggle field guides in a perspective view
'------------------------------------------------------------------------------
sub ToggleFieldGuideProc ()
	Dim l_ActiveCamera

	set l_ActiveCamera = GetViewCamera()
	SetValue l_ActiveCamera & ".camvis.gridfieldguidevis", Not GetValue(l_ActiveCamera & ".camvis.gridfieldguidevis")
end sub

'------------------------------------------------------------------------------
' NAME:		ToggleAutoKeyProc
'
' DESCRIPTION:	 Toggle autokey preference
'------------------------------------------------------------------------------
sub ToggleAutoKeyProc ()
	SetValue "Preferences.Animation.autokey", Not GetValue("Preferences.Animation.autokey")
end sub

'------------------------------------------------------------------------------
' NAME:		ToggleFullscreenLayoutProc
'
' DESCRIPTION:	 Toggle between full screen layout and XSI standard layout
'------------------------------------------------------------------------------
sub ToggleFullscreenLayoutProc ()
	if Application.Desktop.ActiveLayout.Name = "Autohide" then
		' Switch to standard layout
		Application.Desktop.ActiveLayout = Application.Desktop.Layouts("Default")
	else
		' Switch to full-screen layout
		Application.Desktop.ActiveLayout = Application.Desktop.Layouts("Autohide")
	end if
end sub

'------------------------------------------------------------------------------
' NAME:		UndoProc
'
' DESCRIPTION:	 Used to assign a secondary key binding
'------------------------------------------------------------------------------
sub UndoProc ()
	On Error Resume Next
	Undo
end sub

'------------------------------------------------------------------------------
' NAME:		RedoProc
'
' DESCRIPTION:	 Used to assign a secondary key binding
'------------------------------------------------------------------------------
sub RedoProc ()
	On Error Resume Next
	Redo
end sub

'------------------------------------------------------------------------------
' NAME:		CameraUndoProc
'
' DESCRIPTION:	 Used to assign a secondary key binding
'------------------------------------------------------------------------------
sub CameraUndoProc ()
	CameraUndo
end sub

'------------------------------------------------------------------------------
' NAME:		CameraRedoProc
'
' DESCRIPTION:	 Used to assign a secondary key binding
'------------------------------------------------------------------------------
sub CameraRedoProc ()
	CameraRedo
end sub

'------------------------------------------------------------------------------
' NAME:		IncreaseManipulatorSizeProc
'
' DESCRIPTION:	 Increase transform manipulator size
'------------------------------------------------------------------------------
sub IncreaseManipulatorSizeProc ()
	Dim l_NewSize
	l_NewSize = GetValue("Preferences.TransformProperties.transformsize") + 10
	if ( l_NewSize <= 100 ) then
		SetValue "Preferences.TransformProperties.transformsize", l_NewSize
	end if
end sub

'------------------------------------------------------------------------------
' NAME:		IncreaseManipulatorSizeProc
'
' DESCRIPTION:	 Decrease transform manipulator size
'------------------------------------------------------------------------------
sub DecreaseManipulatorSizeProc ()
	Dim l_NewSize
	l_NewSize = GetValue("Preferences.TransformProperties.transformsize") - 10
	if ( l_NewSize > 0 ) then
		SetValue "Preferences.TransformProperties.transformsize", l_NewSize
	end if
end sub

'------------------------------------------------------------------------------
' NAME:		SetNURBSDisplayQualityProc
'
' DESCRIPTION:	 Set display quality fior NURBS curves/surfaces
'------------------------------------------------------------------------------
sub SetNURBSDisplayQualityProc ( in_Quality )
	Dim l_Curves, l_Surfaces, l_Obj, l_Value

	set l_Curves = SIFilter( GetValue("SelectionList"), "curve" )
	set l_Surfaces = SIFilter( GetValue("SelectionList"), "surface_mesh" )
	if Not TypeName( l_Curves ) = "Nothing" Then
		for each l_Obj in l_Curves
			l_Value = 6
			if ( in_Quality = 1 ) then
				' Low quality
				l_Value = 3
			elseif ( in_Quality = 3 ) then
				' High quality
				l_Value = 9
			end if
			if ( GetValue( l_Obj & ".geomapprox.gapproxvwcustep") <> l_Value ) then
				MakeLocal l_Obj & ".geomapprox"
				SetValue l_Obj & ".geomapprox.gapproxvwcustep", l_Value
			end if
		next
	end if

	if Not TypeName( l_Surfaces ) = "Nothing" Then
		for each l_Obj in l_Surfaces
			l_Value = 3
			if ( in_Quality = 1 ) then
				' Low quality
				l_Value = 1
			elseif ( in_Quality = 3 ) then
				' High quality
				l_Value = 6
			end if
			if ( GetValue( l_Obj & ".geomapprox.gapproxvwustep") <> l_Value Or GetValue( l_Obj & ".geomapprox.gapproxvwvstep") <> l_Value ) then
				MakeLocal l_Obj & ".geomapprox"
				SetValue l_Obj & ".geomapprox.gapproxvwustep", l_Value
				SetValue l_Obj & ".geomapprox.gapproxvwvstep", l_Value
			end if
		next
	end if
end sub

'------------------------------------------------------------------------------
' NAME:		SetViewDisplayModeProc
'
' DESCRIPTION:	 Set display mode of the view under the cursor
'------------------------------------------------------------------------------
sub SetViewDisplayModeProc ( in_DisplayMode )
	Dim l_ActiveCamera, l_CameraList

	set l_ActiveCamera = GetViewCamera()
	set	l_CameraList = CreateObject("XSI.Collection")
	l_CameraList.add l_ActiveCamera
	SetDisplayMode l_CameraList, in_DisplayMode
	if ( GetValue("Preferences.Display.headlight") And Not GetValue(l_ActiveCamera & ".camdisp.headlight") ) then
		SetValue l_ActiveCamera & ".camdisp.headlight", True
	end if
end sub

'------------------------------------------------------------------------------
' NAME:		SetLightingDisplayModeProc
'
' DESCRIPTION:	 Set display mode to show hardware lighting
'------------------------------------------------------------------------------
sub SetLightingDisplayModeProc ()
	Dim l_ActiveCamera

	set l_ActiveCamera = GetViewCamera()
	if ( GetValue(l_ActiveCamera & ".camdisp.headlight") ) then
		SetValue l_ActiveCamera & ".camdisp.headlight", False
	end if
end sub

'------------------------------------------------------------------------------
' NAME:		ToggleHeadlightDisplayModeProc
'
' DESCRIPTION:	 Toggle the headlight for hardware lighting
'------------------------------------------------------------------------------
sub ToggleHeadlightDisplayModeProc ()
	Dim l_ActiveCamera
	set l_ActiveCamera = GetViewCamera()
	SetValue l_ActiveCamera & ".camdisp.headlight", Not GetValue(l_ActiveCamera & ".camdisp.headlight")
end sub

'------------------------------------------------------------------------------
' NAME:		ToggleViewDisplayModeProc
'
' DESCRIPTION:	 Toggle display mode of the view under the cursor
'------------------------------------------------------------------------------
sub ToggleViewDisplayModeProc ( in_FirstDisplayMode, in_SecondDisplayMode )
	Dim l_ActiveCamera, l_CameraList, l_DisplayMode

	set l_ActiveCamera = GetViewCamera()
	l_DisplayMode = GetValue(l_ActiveCamera & ".camdisp.viewportmodename")

	if InStr( 1, l_DisplayMode, in_FirstDisplayMode, vbTextCompare ) > 0 then
		l_DisplayMode = in_SecondDisplayMode
	else
		l_DisplayMode = in_FirstDisplayMode
	end if

	set	l_CameraList = CreateObject("XSI.Collection")
	l_CameraList.add l_ActiveCamera
	SetDisplayMode l_CameraList, l_DisplayMode
	if ( GetValue("Preferences.Display.headlight") And Not GetValue(l_ActiveCamera & ".camdisp.headlight") ) then
		SetValue l_ActiveCamera & ".camdisp.headlight", True
	end if
end sub

'------------------------------------------------------------------------------
' NAME:		ToggleWireOnShadedDisplayProc
'
' DESCRIPTION:	 Toggle wireframes on unselected objects in the view under the cursor
'------------------------------------------------------------------------------
sub ToggleWireOnShadedDisplayProc ()
	Dim l_ActiveCamera
	set l_ActiveCamera = GetViewCamera()
	SetValue l_ActiveCamera & ".camdisp.wireontopunsel", Not GetValue(l_ActiveCamera & ".camdisp.wireontopunsel")
end sub

'------------------------------------------------------------------------------
' NAME:		TopViewProc
'
' DESCRIPTION:	 Change camera in view under the cursor to top view
'------------------------------------------------------------------------------
sub TopViewProc ()
	Dim l_ActiveView
	l_ActiveView = GetViewIndex()
	SetViewCamera "top", l_ActiveView
	AlignViewCamera ,,, l_ActiveView
end sub

'------------------------------------------------------------------------------
' NAME:		BottomViewProc
'
' DESCRIPTION:	 Change camera in view under the cursor to bottom view
'------------------------------------------------------------------------------
sub BottomViewProc ()
	Dim l_ActiveView
	l_ActiveView = GetViewIndex()
	SetViewCamera "top", l_ActiveView
	AlignViewCamera siYAxis, True,, l_ActiveView
end sub

'------------------------------------------------------------------------------
' NAME:		FrontViewProc
'
' DESCRIPTION:	 Change camera in view under the cursor to front view
'------------------------------------------------------------------------------
sub FrontViewProc ()
	Dim l_ActiveView
	l_ActiveView = GetViewIndex()
	SetViewCamera "front", l_ActiveView
	AlignViewCamera ,,, l_ActiveView
end sub

'------------------------------------------------------------------------------
' NAME:		BackViewProc
'
' DESCRIPTION:	 Change camera in view under the cursor to back view
'------------------------------------------------------------------------------
sub BackViewProc ()
	Dim l_ActiveView
	l_ActiveView = GetViewIndex()
	SetViewCamera "front", l_ActiveView
	AlignViewCamera siZAxis, True,, l_ActiveView
end sub

'------------------------------------------------------------------------------
' NAME:		RightViewProc
'
' DESCRIPTION:	 Change camera in view under the cursor to right view
'------------------------------------------------------------------------------
sub RightViewProc ()
	Dim l_ActiveView
	l_ActiveView = GetViewIndex()
	SetViewCamera "right", l_ActiveView
	AlignViewCamera ,,, l_ActiveView
end sub

'------------------------------------------------------------------------------
' NAME:		LeftViewProc
'
' DESCRIPTION:	 Change camera in view under the cursor to left view
'------------------------------------------------------------------------------
sub LeftViewProc ()
	Dim l_ActiveView
	l_ActiveView = GetViewIndex()
	SetViewCamera "right", l_ActiveView
	AlignViewCamera siXAxis, True,, l_ActiveView
end sub

'------------------------------------------------------------------------------
' NAME:		IsometricViewProc
'
' DESCRIPTION:	 Change camera in view under the cursor to an isometric user view
'------------------------------------------------------------------------------
sub IsometricViewProc ()
	Dim l_ActiveView, l_ActiveCamera
	l_ActiveView = GetViewIndex()
	SetViewCamera "user", l_ActiveView
	set l_ActiveCamera = GetViewCamera( l_ActiveView )
	SetValue l_ActiveCamera & ".camera.proj", 0
end sub

'------------------------------------------------------------------------------
' NAME:		PerspectiveViewProc
'
' DESCRIPTION:	 Change camera in view under the cursor to a perspective user view
'------------------------------------------------------------------------------
sub PerspectiveViewProc ()
	Dim l_ActiveView, l_ActiveCamera
	l_ActiveView = GetViewIndex()
	SetViewCamera "user", l_ActiveView
	set l_ActiveCamera = GetViewCamera( l_ActiveView )
	SetValue l_ActiveCamera & ".camera.proj", 1
end sub

'------------------------------------------------------------------------------
' NAME:		SceneCameraViewProc
'
' DESCRIPTION:	 Change camera in view under the cursor to next scene camera
'------------------------------------------------------------------------------
sub SceneCameraViewProc ()
	Dim l_ActiveView, l_ActiveCamera, l_Cameras, l_Camera, l_Index
	l_ActiveView = GetViewIndex()
	set l_ActiveCamera = GetViewCamera( l_ActiveView )
	set l_Cameras = ActiveSceneRoot.FindChildren( ,siCameraFilter )

	if ( l_Cameras.count > 0 ) then
		l_Index = 0
		for i = 0 to l_Cameras.count - 1
			set l_Camera = l_Cameras.Item(i)
			if ( l_Camera = l_ActiveCamera ) then
				l_Index = i + 1
				if ( l_Index > l_Cameras.count - 1 ) then
					l_Index = 0
				end if
				exit for
			end if
		next
		SetViewCamera l_Cameras.Item(l_Index), l_ActiveView
	end if
end sub

'------------------------------------------------------------------------------
' NAME:		ParentObjectsProc
'
' DESCRIPTION:	 Parent selected objects under last selected object
'------------------------------------------------------------------------------
sub ParentObjectsProc ( in_Objects )
	Dim l_Selection, l_Obj, l_Objects, l_Parent, l_Count

	set l_Selection = SIFilter( in_Objects, siObjectFilter )
	l_NbObjects = l_Selection.Count
	if ( Not TypeName( l_Selection ) = "Nothing" And l_Selection.Count > 1 ) then
		l_Count = l_Selection.Count
		set l_Objects = CreateObject("XSI.Collection")
		for each l_Obj in l_Selection
			if ( l_Count > 1 ) then
				l_Objects.Add l_Obj
			else
				l_Parent = l_Obj
			end if
			l_Count = l_Count - 1
		next
		ParentObj l_Parent, l_Objects
		SelectObj l_Objects, , True
	else
		LogMessage "Not enough objects selected for parent command.", 4
	end if
end sub

'------------------------------------------------------------------------------
' NAME:		ToggleObjectComponentSelectionFilterProc
'
' DESCRIPTION:	 Toggles between object and point selection filter
'------------------------------------------------------------------------------
sub ToggleObjectComponentSelectionFilterProc ()
	set oFilter = Application.selection.Filter
	' Set selection mode to rectange
	SetUserPref "SI3D_RECTSEL_REGION_MODE", 1
	if oFilter.Type = "FilterSubComponentType" then
		SelectFilter "Object"
	else
		SelectFilter "Point"
	end if
end sub

'------------------------------------------------------------------------------
' NAME:		SetPointSelectionFilterProc
'
' DESCRIPTION:	 Set selection filter to points
'------------------------------------------------------------------------------
sub SetPointSelectionFilterProc ()
	' Set selection mode to rectange
	SetUserPref "SI3D_RECTSEL_REGION_MODE", 1
	SelectFilter "Point"
end sub

'------------------------------------------------------------------------------
' NAME:		SetEdgeSelectionFilterProc
'
' DESCRIPTION:	 Set selection filter to edges
'------------------------------------------------------------------------------
sub SetEdgeSelectionFilterProc ()
	' Set selection mode to rectange
	SetUserPref "SI3D_RECTSEL_REGION_MODE", 1
	SelectFilter "Edge"
end sub

'------------------------------------------------------------------------------
' NAME:		SetPolygonSelectionFilterProc
'
' DESCRIPTION:	 Set selection filter to polygons
'------------------------------------------------------------------------------
sub SetPolygonSelectionFilterProc ()
	' Set selection mode to raycast
	SetUserPref "SI3D_RECTSEL_REGION_MODE", 2
	SelectFilter "Polygon"
end sub

'------------------------------------------------------------------------------
' NAME:		SetSampleSelectionFilterProc
'
' DESCRIPTION:	 Set selection filter to samples
'------------------------------------------------------------------------------
sub SetSampleSelectionFilterProc ()
	' Set selection mode to rectangle
	SetUserPref "SI3D_RECTSEL_REGION_MODE", 1
	SelectFilter "SampledPoint"
end sub

'------------------------------------------------------------------------------
' NAME:		CycleSelectionModeProc
'
' DESCRIPTION:	 Cycle through various selection modes
'------------------------------------------------------------------------------
sub CycleSelectionModeProc ()
	Dim l_SelMode
	l_SelMode = GetUserPref("SI3D_RECTSEL_REGION_MODE")
	if ( l_SelMode = 1 ) then
		' Rectangle -> Lasso
		l_SelMode = 3
	elseif ( l_SelMode = 3 ) then
		' Lasso -> Freeform
		l_SelMode = 4
	elseif ( l_SelMode = 4 ) then
		' Freeform -> Raycast
		l_SelMode = 2
	else
		' Raycast -> Rectangle
		l_SelMode = 1
	end if
	SetUserPref "SI3D_RECTSEL_REGION_MODE", l_SelMode
end sub

'------------------------------------------------------------------------------
' NAME:		InstallAddonProc
'
' DESCRIPTION: Install a .xsiaddon file into XSI
'------------------------------------------------------------------------------
sub InstallAddonProc( in_filename, in_eInstallPath )

	'--------------------------------------------------------------------
	' Get the Fileservice object, and call the InstallAddon function
	'--------------------------------------------------------------------
	Application.InstallAddon in_filename, in_eInstallPath 


end sub

'------------------------------------------------------------------------------
' NAME:		UnInstallAddonProc
'
' DESCRIPTION: Uninstall a .xsiaddon file from XSI
'------------------------------------------------------------------------------
sub UnInstallAddonProc( in_filename )

	'--------------------------------------------------------------------
	' Get the Fileservice object, and call the InstallAddon function
	'--------------------------------------------------------------------
	Application.UnInstallAddon( in_filename )

end sub

'------------------------------------------------------------------------------
' NAME:		ChangeSubdivisionProc
'
' INPUT:	in_InputObjs:	Input Objects
'			in_updir: Direction of change (True = up, False = down)
'			- 
'
' DESCRIPTION:	Changes the level of polygon meshes subdivisions, up ot down
'				
'------------------------------------------------------------------------------
sub ChangeSubdivisionProc( in_InputObjs, in_updir )
	dim curval, l_objects, l_obj, tstnode, tstbrch, delta
	dim maxsubd, minsubd, maxstep, minstep

	maxsubd = 4
	minsubd = 0
	maxstep = 5
	minstep = 1

	' Prepare delta depending on direction
	if ( in_updir ) then
		delta = 1
	else
		delta = -1
	end if

	Set l_objects = SIFilter(in_InputObjs, "sceneobject")
	
	set l_donelist = CreateObject("XSI.Collection")
	l_donelist.unique = true

	if TypeName(l_objects) <> "Nothing" then
	    dim maxhit, minhit, maxoglhit, minoglhit, minrenhit, maxrenhit
	    maxhit = 0
	    minhit = 0

		for each l_obj in l_objects

			if (l_obj.Type = "polymsh") or (l_obj.Type = "crvlist") or (l_obj.Type = "surfmsh") or (l_obj.Type = "hair") then

		
				' Check silently first if we have a local geom approx property (node or branch)
				set prop = Dictionary.GetObject(l_obj & ".geomapprox")
				if ( not prop.IsA( siLocalPSet ) ) then
					MakeLocal l_obj & ".geomapprox", siDefaultPropagation
				end if

				' Change subdivision level if within boundaries
				'------------ Polygon Meshes ------------------------
				if l_obj.Type = "polymsh" then
					' Rendering level
					dim renval, oglval
					renval = GetValue (l_obj & ".geomapprox.gapproxmordrsl")
					oglval = GetValue (l_obj & ".geomapprox.gapproxmosl")
	
					if in_updir then
						if renval >= maxsubd and oglval >= maxsubd then
						    maxhit = maxhit + 1
							' logmessage "OGL and rendering subdivision level reached maximum for object " & l_obj
						elseif renval >= maxsubd then
							' logmessage "Rendering subdivision level reached maximum for object " & l_obj
						    maxhit = maxhit + 1
							SetValue l_obj & ".geomapprox.gapproxmosl", oglval + delta
						elseif oglval >= maxsubd then
							' logmessage "OGL subdivision level reached maximum for object " & l_obj
						    maxhit = maxhit + 1
							SetValue l_obj & ".geomapprox.gapproxmordrsl", renval + delta
						else
							SetValue l_obj & ".geomapprox.gapproxmosl," & l_obj & ".geomapprox.gapproxmordrsl", Array(oglval+delta,renval+delta)
						end if
					else
						if renval = minsubd and oglval = minsubd then
							' logmessage "OGL and rendering subdivision level at minimum for object " & l_obj
						    minhit = minhit + 1
						elseif renval = minsubd then
							' logmessage "Rendering subdivision level at minimum for object " & l_obj
						    minhit = minhit + 1
							SetValue l_obj & ".geomapprox.gapproxmosl", oglval + delta
						elseif oglval = minsubd then
							' logmessage "OGL subdivision level at minimum for object " & l_obj
						    minhit = minhit + 1
							SetValue l_obj & ".geomapprox.gapproxmordrsl", renval + delta
						else
							SetValue l_obj & ".geomapprox.gapproxmosl," & l_obj & ".geomapprox.gapproxmordrsl", Array(oglval+delta,renval+delta)
						end if
					end if
	
				'------------ Curves ------------------------
				elseif l_obj.Type = "crvlist" then

					curval = GetValue (l_obj & ".geomapprox.gapproxvwcustep")

					if in_updir and curval >= maxstep then
					    maxhit = maxhit + 1
						' logmessage "Step level reached maximum for object " & l_obj
					elseif (not in_updir) and curval = minstep then
					    minhit = minhit + 1
						' logmessage "Step already at minimum for object " & l_obj
					else
						SetValue l_obj & ".geomapprox.gapproxvwcustep", curval + delta
					end if

				'------------ Surface Meshes ------------------------
				elseif l_obj.Type = "surfmsh" then
					curval  = GetValue (l_obj & ".geomapprox.gapproxvwustep")
	
					if in_updir and curval >= maxstep then
					    maxhit = maxhit + 1
						' logmessage "Step level reached maximum for object " & l_obj
					elseif (not in_updir) and curval = minstep then
					    minhit = minhit + 1
						' logmessage "Step already at minimum for object " & l_obj
					else
						SetValue l_obj & ".geomapprox.gapproxvwustep", curval + delta
						SetValue l_obj & ".geomapprox.gapproxvwvstep", curval + delta
					end if
				'------------ Hair Objects ------------------------
				else		' Hair
					' Make sure we're not in linear mode
					if GetValue( l_obj & ".geomapprox.gapproxhocrvdeg" ) <> 1 then
						' Rendering level
						renval = GetValue (l_obj & ".geomapprox.gapproxhocrvrsl")
						oglval = GetValue (l_obj & ".geomapprox.gapproxhocrvosl")
		
						if in_updir then
							if renval >= maxsubd and oglval >= maxsubd then
								' logmessage "OGL and rendering subdivision level reached maximum for object " & l_obj
    						    maxhit = maxhit + 1
							elseif renval >= maxsubd then
								' logmessage "Rendering subdivision level reached maximum for object " & l_obj
						        maxhit = maxhit + 1
								SetValue l_obj & ".geomapprox.gapproxhocrvosl", oglval + delta
							elseif oglval >= maxsubd then
								' logmessage "OGL subdivision level reached maximum for object " & l_obj
						        maxhit = maxhit + 1
								SetValue l_obj & ".geomapprox.gapproxhocrvrsl", renval + delta
							else
								SetValue l_obj & ".geomapprox.gapproxhocrvosl," & l_obj & ".geomapprox.gapproxhocrvrsl", Array(oglval+delta,renval+delta)
							end if
						else
							if renval = minsubd and oglval = minsubd then
								' logmessage "OGL and rendering subdivision level at minimum for object " & l_obj
						        minhit = minhit + 1
							elseif renval = minsubd then
								' logmessage "Rendering subdivision level at minimum for object " & l_obj
						        minhit = minhit + 1
								SetValue l_obj & ".geomapprox.gapproxhocrvosl", oglval + delta
							elseif oglval = minsubd then
								' logmessage "OGL subdivision level at minimum for object " & l_obj
						        minhit = minhit + 1
								SetValue l_obj & ".geomapprox.gapproxhocrvrsl", renval + delta
							else
								SetValue l_obj & ".geomapprox.gapproxhocrvosl," & l_obj & ".geomapprox.gapproxhocrvrsl", Array(oglval+delta,renval+delta)
							end if
						end if
					end if
				end if
			else
				' logmessage "Approximation level cannot be changed for object '" & l_obj & "'"
			end if
		next
		if minhit = 1 then
		    logmessage "An object has hit the minimum OGL and/or rendering subdivision limit."
		elseif minhit > 1 then
		    logmessage minhit & " objects have hit their minimum OGL and/or rendering subdivision limit."
		end if
		if maxhit = 1 then
		    logmessage "An object has hit the maximum OGL and/or rendering subdivision limit."
		elseif maxhit > 1 then
		    logmessage maxhit & " objects have hit their maximum OGL and/or rendering subdivision limit."
		end if
	end if
end sub

'------------------------------------------------------------------------------
' NAME:		MatchPoseProc
'
' INPUT:	in_sel:	Selected Objects to transform
'			io_pick: Target Object, is empty a pick session will start
'			in_Type: enum of type siTransformFilter (siSRT, siScl, etc..)
'			in_local: True if we must match local transforms, global otherwize
'
' DESCRIPTION:	Copies transform from selected objects to a picked target object
'				
'------------------------------------------------------------------------------
sub MatchPoseProc( in_sel, io_pick, in_Type, in_Local )
	Dim i, l_pick, l_str, l_ref, l_DoS, l_DoR, l_DoT, l_TempConstraint

	if TypeName( in_sel ) = "Nothing" or in_sel.Count <= 0 then
		logmessage "Please select an object first", siError
		exit sub
	end if

	if ( io_pick = "" ) then
		PickElement , XSIUtils.Translate( IDS_MATCH_POSE_MSG, "XSISCRIPTS" ), , l_pick
		io_pick = l_pick
	else
		l_pick = io_pick
	end if

	l_DoS = CBool( in_Type and siScl ) or CBool( in_Type and siSRT ) or CBool( in_Type and siSR )  or CBool( in_Type and siST )
	l_DoR = CBool( in_Type and siRot ) or CBool( in_Type and siSRT ) or CBool( in_Type and siSR )  or CBool( in_Type and siRT )
	l_DoT = CBool( in_Type and siTrn ) or CBool( in_Type and siSRT ) or CBool( in_Type and siST )  or CBool( in_Type and siRT )

	' check if the Center mode is active
	l_ctr = GetUserPref( "SI3D_SRT_CENTER" )

	if in_Local then
		l_ref = siLocal
		l_str = "local"
	else
		l_ref = siGlobal
		l_str = "global"
	end if

	for i = 0 to in_sel.count - 1
	
	    If TypeName(in_sel(i)) = "Model" Then
			set l_modelParent = in_sel(i)
		Else
		    set l_modelParent = SIGetModel( in_sel(i) )
		End If

		l_bIsRefModel = GetValue ( l_modelParent & ".referenced_model") 
					
		if ( l_DoS ) then
			lx = getValue( l_pick & ".kine." & l_str & ".sclx")
			ly = getValue( l_pick & ".kine." & l_str & ".scly")
			lz = getValue( l_pick & ".kine." & l_str & ".sclz")

			if ( l_ctr ) then
				Scale in_sel(i), lx, ly, lz, siAbsolute, l_ref, siCtr, siXYZ
			else
				SetValue in_sel(i) &".kine." & l_str & ".sclx", lx
				SetValue in_sel(i) &".kine." & l_str & ".scly", ly
				SetValue in_sel(i) &".kine." & l_str & ".sclz", lz
			end if
			
			if l_bIsRefModel then	
			        'Refmodel cleanup make sure only the local kine will show up
				    lx = GetValue(in_sel(i) & ".kine.local.sclx")
				    ly = GetValue(in_sel(i) & ".kine.local.scly")
				    lz = GetValue(in_sel(i) & ".kine.local.sclz")
				    
				    SetValue in_sel(i) & ".kine.local.sclx", lx
				    SetValue in_sel(i) & ".kine.local.scly", ly
				    SetValue in_sel(i) & ".kine.local.sclz", lz					    			    
			End if
		end if
		if ( l_DoR ) then
			if ( l_ref = siLocal ) then
				'Set rotation order to XYZ to obtain the correct lx,ly,lz
				l_OriginalRotOrder = GetValue( l_pick & ".kine.local.rotorder" )					
				SetValue l_pick & ".kine.local.rotorder", 0
			end if
		
			lx = getValue( l_pick & ".kine." & l_str & ".rotx")
			ly = getValue( l_pick & ".kine." & l_str & ".roty")
			lz = getValue( l_pick & ".kine." & l_str & ".rotz")

			if ( l_ref = siLocal ) then
				' Restore original rotation order
				SetValue l_pick & ".kine.local.rotorder", l_OriginalRotOrder
			end if
		
			if ( l_ctr ) then
				Rotate in_sel(i), lx, ly, lz, siAbsolute, l_ref, siCtr, siXYZ
			else					
				'Handle global and local rotation here
				'Rotate assumes XYZ order, so lx,ly,lz need to be in XYZ before calling the function
                Rotate in_sel(i), lx, ly, lz, siAbsolute, l_ref, siObj, siXYZ
			end if
			
			if l_bIsRefModel then	
			        'Refmodel cleanup make sure only the local kine will show up
				    lx = GetValue(in_sel(i) & ".kine.local.rotx")
				    ly = GetValue(in_sel(i) & ".kine.local.roty")
				    lz = GetValue(in_sel(i) & ".kine.local.rotz")
				    
				    SetValue in_sel(i) & ".kine.local.rotx", lx
				    SetValue in_sel(i) & ".kine.local.roty", ly
				    SetValue in_sel(i) & ".kine.local.rotz", lz						        
			End if
		end if
		if ( l_DoT ) then
			lx = getValue( l_pick & ".kine." & l_str & ".posx")
			ly = getValue( l_pick & ".kine." & l_str & ".posy")
			lz = getValue( l_pick & ".kine." & l_str & ".posz")

			if ( l_ctr ) then
				Translate in_sel(i), lx, ly, lz, siAbsolute, l_ref, siCtr, siXYZ
			else
				SetValue in_sel(i) &".kine." & l_str & ".posx", lx
				SetValue in_sel(i) &".kine." & l_str & ".posy", ly
				SetValue in_sel(i) &".kine." & l_str & ".posz", lz
			end if
			if l_bIsRefModel then	
			        'Refmodel cleanup make sure only the local kine will show up
				    lx = GetValue(in_sel(i) & ".kine.local.posx")
				    ly = GetValue(in_sel(i) & ".kine.local.posy")
				    lz = GetValue(in_sel(i) & ".kine.local.posz")
				    
				    SetValue in_sel(i) & ".kine.local.posx", lx
				    SetValue in_sel(i) & ".kine.local.posy", ly
				    SetValue in_sel(i) & ".kine.local.posz", lz				    
			End if
		end if
	next
end sub


'------------------------------------------------------------------------------
' NAME:		SelectConstrainingObjects
'
' INPUT:
'
' DESCRIPTION:	Selects the constraining objects that are constraining the items in the current
' selection. Will work on objects and constraints as input in the selection list. If the selection
' is an object, will select the constraining objects for ALL constraints on that object. If selection
' is a constraint, will select constraining objects for that constraint only
'				
'------------------------------------------------------------------------------
sub SelectConstrainingObjects(in_Selection)

	Dim	l_ObjectList, l_ConstraintList, l_Elem, l_TargetList, l_Constraints
	Dim	l_ObjectConstraints, l_ObjectCns, l_Cnsing

	' Support the selection being either an object (in which case
	' we will go through all constraints on that object), or a 
	' particluar constraint
		
	set		l_ObjectList = SIFilter( in_Selection, siObjectFilter )
	set 	l_ConstraintList = SIFilter( in_Selection, "constraint" )
	set 	l_TargetList = CreateObject("XSI.Collection")
	
	if TypeName( l_ObjectList) <> "Nothing" then
		for each l_Elem in l_ObjectList	
			set l_ObjectConstraints = l_Elem.Kinematics.Constraints
			for each l_ObjectCns in l_ObjectConstraints
				for each l_Cnsing in l_ObjectCns.Constraining
					l_TargetList.add l_Cnsing
				next
			next
		next
	end if
	
	if TypeName( l_ConstraintList ) <> "Nothing" then
		for each l_ObjectCns in  l_ConstraintList
			for each l_Cnsing in l_ObjectCns.Constraining
				l_TargetList.add l_Cnsing
			next
		next
	end if

	if l_TargetList.Count > 0 then
		SelectObj l_TargetList
	end if
		
end sub


'------------------------------------------------------------------------------
' NAME:		SelectConstrainedObjects
'
' INPUT:
'
' DESCRIPTION:	Selects the constrained objects that are constrained by the objects in the current
' selection. Will select all constrained objects that this object constrains.
'				
'------------------------------------------------------------------------------
sub SelectConstrainedObjects(in_Selection)

	Dim	l_ObjectList, l_Elem, l_TargetList
	Dim	l_ObjectConstrained, l_Object, l_Cnsing
		
	set		l_ObjectList = SIFilter( in_Selection, siObjectFilter )
	set 	l_TargetList = CreateObject("XSI.Collection")
	
	if TypeName( l_ObjectList) <> "Nothing" then
		for each l_Elem in l_ObjectList	
			GetConstrainedObjects l_Elem, l_ObjectConstrained
			for each l_Object in l_ObjectConstrained
				l_TargetList.add l_Object
			next
		next
	end if

	if l_TargetList.Count > 0 then
		SelectObj l_TargetList
	end if
		
end sub


'------------------------------------------------------------------------------
' NAME:		ToggleBooleanUserPrefProc
'
' INPUT:	a user pref id (ex: "SI3D_CONSTRAINT_COMPENSATION_MODE")
'
' DESCRIPTION:	This simply toggles the state of the user pref (must be boolean)
'				
'------------------------------------------------------------------------------
sub ToggleBooleanUserPrefProc( in_id )

	Dim l_currvalue, l_newvalue

	l_currvalue = GetUserPref( in_id )	

	if ( l_currvalue = 0 ) then
		l_newvalue = 1
	else
		l_newvalue = 0
	end if

	SetUserPref in_id, l_newvalue
end sub


'------------------------------------------------------------------------------
' NAME:		SetTransformRefMode
'
' INPUT:	Bitfield value that needs to be set
'
' DESCRIPTION:	Sets the given transformation reference or modifier
'				
'------------------------------------------------------------------------------
sub SetTransformRefMode( in_value )

	Dim l_currvalue, l_ref, l_mod, l_newvalue

	l_currvalue = GetUserPref( "3D_TRANSFO_REFERENTIAL_CHANGED" )	

	l_ref = l_currvalue and 15		'we keep the lower  bits xF0 = 15
	l_mod = l_currvalue and 4080	'we keep the higher bits (4080 = 4095-15)

	if ( in_value > 15 ) then
		' For modifiers: if it's already set then we will rather turn off the modifier
		if ((in_value and l_mod) = in_value ) then
			in_value = 0
		end if
		l_newvalue = in_value + l_ref     ' new modifier, same reference
	else
		l_newvalue = in_value + l_mod	  ' new reference, same modifier
	end if

	SetUserPref "3D_TRANSFO_REFERENTIAL_CHANGED", l_newvalue
end sub

'------------------------------------------------------------------------------
' NAME:		InspectDevicesProc
'
' INPUT:	
'
' DESCRIPTION:	Inspect the device manager
'				
'------------------------------------------------------------------------------
Sub InspectDevicesProc()
	InspectObj GetValue("DeviceManager")
End Sub

'------------------------------------------------------------------------------
' NAME:		StartCaptureProc
'
' INPUT:	
'
' DESCRIPTION:	Start a motion capture session using the currently active
'				device drivers.
'				The animation is removed on the targeted paramters of the 
'				active channels.
'				
'------------------------------------------------------------------------------
Sub StartCaptureProc()
	Dim oValid
	Dim oDeviceman
	Dim oChannels
	Dim oChannel
	Dim oTargetList
	
	oValid = False
	set oDeviceman = Application.Devices
	set oTargetList = CreateObject("XSI.Collection")

	' If the autokey is already on, we don't allow the capture to start
	' this is because if there is already a capture , we dont' want to 
	' remove the animation and start a new capture.
	If GetUserPref( "Set Automatic Key Mode" ) = 1 Then

		SIMsgBox XSIUtils.Translate(IDS_START_CAPTURE, "XSISCRIPTS" ) , vbOKOnly + vbExclamation, XSIUtils.Translate("Warning", "XSISCRIPTS" ), vbOK

		Exit Sub
	End If 


	' Make sure there is at least one device active.
	If oDeviceman.Enable Then
		For i = 0 to oDeviceman.count-1
			set oDevice = oDeviceman.Item(i)
			If oDevice.Enable Then

				' OK at least one device is valid so we can do the capture
				oValid = True

				' Get all the target data to be able
				' to call removeAnimation before starting the capture
			    set oChannels = oDevice.Channels
				For each oChannel in oChannels
					If oChannel.Enable AND _
					   Not oChannel.Target = "" AND _
					   oChannel.Action = siChannelActionDrive Then
 							On Error Resume Next
 							oTargetList.add oChannel.Target
 							On Error Goto 0
					End If
				Next
			End if
		Next 
	End if 

	If Not oValid  then 
		SIMsgBox XSIUtils.Translate("There is no device active.", "XSISCRIPTS" ) , vbOKOnly + vbExclamation, XSIUtils.Translate("Warning", "XSISCRIPTS" ), vbOK
		InspectDevicesProc
		Exit Sub
	End if 

	' Remove the animation 
	RemoveAnimation oTargetList
	
	' Start the capture
	SetUserPref "Set Automatic Key Mode", CLng(1)
	PlayForwards
	
End Sub

'------------------------------------------------------------------------------
' NAME:		StopCaptureProc
'
' INPUT:	
'
' DESCRIPTION:	Stop the capture
'				
'------------------------------------------------------------------------------
sub StopCaptureProc()
	
	SetUserPref "Set Automatic Key Mode", CLng(0)
	PlaybackStop
	
end sub


'------------------------------------------------------------------------------
' NAME:		EnableAllDevicesProc
'
' INPUT:	
'
' DESCRIPTION:	Enable all devices
'				
'------------------------------------------------------------------------------
sub EnableAllDevicesProc()
	Dim oDeviceman

	oValid = False
	set oDeviceman = Application.Devices

	' First check if there is one device active.
	If oDeviceman.Enable Then
		For i = 0 to oDeviceman.count-1
			set oDevice = oDeviceman.Item(i)
			oDevice.Enable = True
		Next 
	End if 

end sub

'------------------------------------------------------------------------------
' NAME:		DisableAllDevicesProc
'
' INPUT:	
'
' DESCRIPTION:	Disable all devices.
'				
'------------------------------------------------------------------------------
sub DisableAllDevicesProc()
	
	Dim oDeviceman

	oValid = False
	set oDeviceman = Application.Devices

	' First check if there is one device active.
	If oDeviceman.Enable Then
		For i = 0 to oDeviceman.count-1
			set oDevice = oDeviceman.Item(i)
			oDevice.Enable = False
		Next 
	End if 
	
end sub

'------------------------------------------------------------------------------
' NAME:		CharacterManUpdateProc
'
' INPUT:	
'
' DESCRIPTION:	
'				
'------------------------------------------------------------------------------
function GetPositionFromSinglePointCluster( in_oCls, in_oMesh )

	if typename( in_oCls ) <> "Cluster" then
		logmessage "Expected cluster, got " & typename( in_oCls )
	end if

	dim pntIndex, oMesh, oPointPos	

	pntIndex = in_oCls.Elements.Item(0)

	set oPointPos = in_oMesh.Points.Item( pntIndex).Position
'	logmessage typename( oPointPos )

'	logmessage oPointPos.x & " " & oPointPos.y & " " & oPointPos.z

	set GetPositionFromSinglePointCluster = oPointPos

end function

sub CharacterManUpdateProc( In_UpdateContext, InMesh, InOuter, InUpper, Out )
	set oKine = Out.Value
	'logmessage typename( oKine )
	'logmessage typename( InMesh.Value )

	set oPointOuter = GetPositionFromSinglePointCluster( InOuter.Value, InMesh.Value.Geometry )
	set oPointUpper = GetPositionFromSinglePointCluster( InUpper.Value, InMesh.Value.Geometry )

	dim centerX, centerY, centerZ

	distance = sqr( abs(oPointOuter.x - oPointUpper.x) + abs(oPointOuter.y - oPointUpper.y))

	'logmessage oKine.Parameters("posx").Value & " " & oKine.Parameters("posy").Value _
	'          & " " & oKine.Parameters("posz").Value

	'logmessage distance

	oKine.Parameters("sclx").Value = distance/ In_UpdateContext.Eye_scaling_factor.value +.005
	oKine.Parameters("scly").Value = distance/ In_UpdateContext.Eye_scaling_factor.value +.005
	oKine.Parameters("sclz").Value = distance/ In_UpdateContext.Eye_scaling_factor.value +.005
end sub

'-------------------------------------------
' NAME:		BipedRigUpdateProc
'
' INPUT:	
'
' DESCRIPTION:	
'				
'------------------------------------------------------------------------------
sub BipedRigUpdateProc( In_UpdateContext, In_Handle, Out )

	dim SteppingAngle

	SteppingAngle = In_UpdateContext.Parameters("SteppingAngle").value

	 if Out.Name = "heel_out" then
		if In_Handle > 0 then
			Out.Value = 0
		else
			Out.Value = In_Handle
		end if
	 end if


	if Out.Name = "toe_out" then
		if In_Handle >= SteppingAngle then
			Out.Value = In_Handle - SteppingAngle
		else
			Out.Value = 0
		end if
	end if

	if Out.Name = "mid_out" then
		if In_Handle >0 then 
			if In_Handle < SteppingAngle then	
				Out.Value = In_Handle
			else
				Out.Value = SteppingAngle 
			end if
		else
			Out.Value = 0
		end if
	end if
end sub

function GetShaderOnCnxPointFunc( in_objects )
	GetShaderOnCnxPointFunc = SIGetShaderOnCnxPoint( in_objects )
end function

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
' NAME:	RenamePropAndRebindProc		
'
' DESCRIPTION: Pop up a dialog to get the new name and options for rename.
'------------------------------------------------------------------------------
sub RenamePropAndRebindProc( in_props, byref in_newname, byref in_updaterefs, byref in_updatewild, byref in_showui )

	if in_showui then
		set sceneroot = FGetSceneRoot()

		if in_newname = "" then
			in_newname = GetValue(in_props(0) & ".Name")
		end if

		Dim PreviousMSGLogging
		PreviousMSGLogging = GetUserPref("SCR_MSGLOG_ENABLED")
		SetUserPref "SCR_MSGLOG_ENABLED", false
		Set l_Pset = SIAddProp("RenamePropertyDialog", sceneroot, , "Rename").value("Value")
		SetUserPref "SCR_MSGLOG_ENABLED", PreviousMSGLogging

		SetValue l_Pset & ".newname", in_newname
		SetValue l_Pset & ".updaterefs", in_updaterefs
		SetValue l_Pset & ".updatewildcards", in_updatewildcards

		if in_props.Count > 1 then
			title = "Rename multiple properties"
		else
			title = "Rename " & in_newname
		end if
	
		If FWizardDialog( l_Pset, title ) = vbOk Then
			in_newname = GetValue(l_Pset & ".newname")
			in_updaterefs = GetValue(l_Pset & ".updaterefs")
			in_updatewild = GetValue(l_Pset & ".updatewildcards")

			DeleteObj l_Pset
		else
			DeleteObj l_Pset
			Err.Raise siErrCancelled
		end if
	end if

	RenamePropAndRebind_Internal in_props, in_newname, in_updaterefs, in_updatewild
end sub

sub RenamePropAndRebindUIProc( in_props, byref in_newname, byref in_updaterefs, byref in_updatewild )
	RenamePropAndRebind in_props, in_newname, in_updaterefs, in_updatewild, true
end sub


'------------------------------------------------------------------------------
' NAME:		ImportPreferencesProc
'
' INPUT:	N/A
'
' OUTPUT:	-
'
' DESCRIPTION: R
'------------------------------------------------------------------------------
sub ImportPreferencesProc( byref in_sFilename )
	
	' Get the filename if there is none	
	If Application.Interactive AND in_sFilename = "" Then
		dim oFileBrowser
		set oFileBrowser = XSIUIToolkit.FileBrowser

		oFileBrowser.DialogTitle = XSIUtils.Translate("Import a Category of Preferences", "XSISCRIPTS" )	' set the title of the file browser
		oFileBrowser.InitialDirectory = "c:\"		' set the initial directory
		oFileBrowser.Filter = XSIUtils.Translate("xsipref (*.xsipref)|*.xsipref|All Files (*.*)|*.*||", "XSISCRIPTS" )	' set the filters
		oFileBrowser.ShowOpen					' show an save file dialog

		' if the user selected a file
		If oFileBrowser.FilePathName <> "" Then
			in_sFilename = oFileBrowser.FilePathName
		Else
			Err.Raise siErrCancelled
			exit sub
		End If
	End if

	Application.Preferences.Import in_sFilename 
end sub

'------------------------------------------------------------------------------
' NAME:		ExportPreferencesProc
'
' INPUT:	N/A
'
' OUTPUT:	-
'
' DESCRIPTION: 
'------------------------------------------------------------------------------
sub ExportPreferencesProc( byref in_sFilename, in_sCategories )

	' Get the filename if there is none	
	If Application.Interactive AND in_sFilename = "" Then
		dim oFileBrowser
		set oFileBrowser = XSIUIToolkit.FileBrowser

		oFileBrowser.DialogTitle = XSIUtils.Translate("Export a Category of Preferences", "XSISCRIPTS" )	' set the title of the file browser
		oFileBrowser.InitialDirectory = "c:\"		' set the initial directory
		oFileBrowser.FileBaseName = in_sCategories	' set the default file name
		oFileBrowser.Filter = XSIUtils.Translate("xsipref (*.xsipref)|*.xsipref|All Files (*.*)|*.*||", "XSISCRIPTS" )	' set the filters
		oFileBrowser.ShowSave					' show an save file dialog

		' if the user selected a file
		If oFileBrowser.FilePathName <> "" Then
			in_sFilename = oFileBrowser.FilePathName
		Else
			Err.Raise siErrCancelled
			exit sub
		End If
	End if

	Application.Preferences.Export in_sFilename, in_sCategories
end sub

'------------------------------------------------------------------------------
' NAME:		RestoreDefaultPrefProc
'
' INPUT:	N/A
'
' OUTPUT:	-
'
' DESCRIPTION: 
'------------------------------------------------------------------------------
sub RestoreDefaultPrefProc( in_sCategory )
	Application.Preferences.RestoreDefault in_sCategory
end sub

' The following are used for DEMO version only
'------------------------------------------------------------------------------
' NAME:		CharacterManUpdateProc
'
' INPUT:	
'
' DESCRIPTION:	
'				
'------------------------------------------------------------------------------
function GetPositionFromSinglePointCluster( in_oCls, in_oMesh )

	if typename( in_oCls ) <> "Cluster" then
		logmessage "Expected cluster, got " & typename( in_oCls )
	end if

	dim pntIndex, oMesh, oPointPos	

	pntIndex = in_oCls.Elements.Item(0)

	set oPointPos = in_oMesh.Points.Item( pntIndex).Position
'	logmessage typename( oPointPos )

'	logmessage oPointPos.x & " " & oPointPos.y & " " & oPointPos.z

	set GetPositionFromSinglePointCluster = oPointPos

end function

sub CharacterManUpdateProc( In_UpdateContext, InMesh, InOuter, InUpper, Out )
	set oKine = Out.Value
	'logmessage typename( oKine )
	'logmessage typename( InMesh.Value )

	set oPointOuter = GetPositionFromSinglePointCluster( InOuter.Value, InMesh.Value.Geometry )
	set oPointUpper = GetPositionFromSinglePointCluster( InUpper.Value, InMesh.Value.Geometry )

	dim centerX, centerY, centerZ

	distance = sqr( abs(oPointOuter.x - oPointUpper.x) + abs(oPointOuter.y - oPointUpper.y))

	'logmessage oKine.Parameters("posx").Value & " " & oKine.Parameters("posy").Value _
	'          & " " & oKine.Parameters("posz").Value

	'logmessage distance

	oKine.Parameters("sclx").Value = distance/ In_UpdateContext.Eye_scaling_factor.value +.005
	oKine.Parameters("scly").Value = distance/ In_UpdateContext.Eye_scaling_factor.value +.005
	oKine.Parameters("sclz").Value = distance/ In_UpdateContext.Eye_scaling_factor.value +.005
end sub

'-------------------------------------------
' NAME:		BipedRigUpdateProc
'
' INPUT:	
'
' DESCRIPTION:	
'				
'------------------------------------------------------------------------------
sub BipedRigUpdateProc( In_UpdateContext, In_Handle, Out )

	dim SteppingAngle

	SteppingAngle = In_UpdateContext.Parameters("SteppingAngle").value

	 if Out.Name = "heel_out" then
		if In_Handle > 0 then
			Out.Value = 0
		else
			Out.Value = In_Handle
		end if
	 end if


	if Out.Name = "toe_out" then
		if In_Handle >= SteppingAngle then
			Out.Value = In_Handle - SteppingAngle
		else
			Out.Value = 0
		end if
	end if

	if Out.Name = "mid_out" then
		if In_Handle >0 then 
			if In_Handle < SteppingAngle then	
				Out.Value = In_Handle
			else
				Out.Value = SteppingAngle 
			end if
		else
			Out.Value = 0
		end if
	end if
end sub

function GetShaderOnCnxPointFunc( in_objects )
	GetShaderOnCnxPointFunc = SIGetShaderOnCnxPoint( in_objects )
end function


'------------------------------------------------------------------------------
' NAME:		OpenHTMLPageProc
'
' INPUT:	page path to open, relative to the installation path
'------------------------------------------------------------------------------
sub OpenHTMLPageProc( in_page )

	Dim sPath

	sPath = XSIUtils.BuildPath( Application.InstallationPath( siFactoryPath ), in_page )
	OpenNetView sPath, false, 1
end sub

'------------------------------------------------------------------------------
' NAME:		InspectLocksProc
'------------------------------------------------------------------------------
sub InspectLocksProc(in_objs)
	on error resume next
	Dim sPath

	' Select the object if it is not in the selection list
	AddToSelection ( in_objs )

	sPath = XSIUtils.BuildPath( Application.InstallationPath( siFactoryPath ), "Application/views/html/InfoLocks.htm" )
	OpenNetView sPath, True, 1

end sub

'------------------------------------------------------------------------------
' NAME:		InfoGeometryProc
'------------------------------------------------------------------------------
sub InfoGeometryProc()

	OpenHTMLPageProc( "/Application/views/html/InfoGeometry.htm" )

end sub

'------------------------------------------------------------------------------
' NAME:		ParameterBracketingProc
'------------------------------------------------------------------------------
sub ParameterBracketingProc()

	OpenHTMLPageProc( "/Application/views/html/ParamBracketing.htm" )

end sub


function GetAssociatedPrimitive( in_obj )

	if( application.classname( in_obj ) = "CollectionItem" ) then
		set l_subComp = in_obj.SubComponent
		if( application.classname( l_subComp ) <> "" ) then
			set GetAssociatedPrimitive = l_subComp.parent3dobject.activeprimitive
		end if 
	elseif( in_obj.belongsto( si3DObjectFamily ) ) then
		if application.classname( in_obj.activePrimitive ) <> "" then
			set GetAssociatedPrimitive = GetValue( in_obj.activePrimitive )
		end if
	elseif( in_obj.belongsto( siClusterFamily ) ) then 
 		set GetAssociatedPrimitive = in_obj.parent.parent
	elseif( in_obj.belongsto(  siGeometryFamily ) ) then 
		set GetAssociatedPrimitive = in_obj
	elseif( in_obj.belongsto( siPropertyFamily ) or in_obj.belongsto( siKineInfoFamily ) ) then 
		set GetAssociatedPrimitive = GetAssociatedPrimitive( in_obj.parent )
	elseif( in_obj.belongsto( siOperatorFamily ) ) then
		for each l_port in in_Obj.outputports
			if application.classname( l_port.Target2 ) = "Primitive" then
				set GetAssociatedPrimitive = GetAssociatedPrimitive( l_port.Target2 )
				exit Function
			end if		
		next
	end if

end function



function IsModelingOperator( inOperator )

	if application.classname( inOperator ) <> "Operator" then
		IsModelingOperator = false
		exit function
	end if

	dim oConstructionHistory, oOperator
	dim l_bMarkerFound, l_bOperatorFoudFirst

	l_bOperatorFoundFirst = false
	l_bMarkerFound = false

	for each oPort in inOperator.outputports
		if application.classname( oPort.target ) = "Primitive" then
	
			set oConstructionHistory = oPort.target.ConstructionHistory
	
			for each oOperator in oConstructionHistory
		
				if oOperator = inOperator and l_bMarkerFound = false then
					l_bOperatorFoundFirst = true
				end if
			
				if oOperator.type = "modelingmarker" then
					l_bMarkerFound = true
				end if
			
			next
	
			if not l_bMarkerFound then
				' We assume that if there are no markers, all operators are modeling operators
				IsModelingOperator = true
			elseif not l_bOperatorFoundFirst then
				IsModelingOperator = true
		
			else
				IsModelingOperator = false
			end if
		
			exit function
	
		end if
	
	
	next

end function

function GetAssociatedModelingMarker( in_obj )

	dim oPrim, oModelingMarker
	
	' Try to get the primitive from 3DObject, cluster, cluster prop, property or component selection

	On Error Resume Next	
	set oPrim = GetAssociatedPrimitive( in_obj )

	' Try to get the modeling marker from the primitive
	if( application.classname( oPrim ) <> "" ) then
		set oModelingMarker = oPrim.constructionhistory.find( "modelingmarker" )

		if( application.classname( oModelingMarker ) <> "" ) then
			set GetAssociatedModelingMarker = oModelingMarker
		else 
			set GetAssociatedModelingMarker = oPrim
		end if

	end if

end function

'------------------------------------------------------------------------------
' NAME:		FreezePrimitiveProc
'
' INPUT:	
'
' DESCRIPTION:	Gets the associated primitives to the input object list and freezes
'				them.
'				
'------------------------------------------------------------------------------
sub FreezePrimitiveProc( in_objs, in_time, in_propagation )

	dim oPrim

	set oFreezeList = CreateObject("XSI.Collection")

	for each oObj in in_objs
		set oPrim = GetAssociatedPrimitive( oObj )
		if application.classname( oPrim ) <> "" then
			oFreezeList.Add oPrim
		end if
	next

	FreezeObj oFreezeList, in_time, in_propagation

end sub

'------------------------------------------------------------------------------
' NAME:		FindModelingOperators
'
' INPUT:	List of objects to search for operators
'
' DESCRIPTION:	Looks for generator ops in the operator stacks of in_objs
'               This code was modified from operators.vbs::DeleteGeneratorInputs
'				
'------------------------------------------------------------------------------
sub FindModelingOperators( in_objs, byref out_ModelingOperators )
	for each item in in_objs
		if TypeName(item) = "X3DObject" then
			' lets find the generator operator of this 3dobject
			set oConstructionHistory = item.activeprimitive.ConstructionHistory

			set oGenList = oConstructionHistory.Filter( , "GeneratorOperators" )

			if oGenList.count > 0 then
				out_ModelingOperators.Add oGenList(0)
			end if

		else if TypeName(item) = "Operator" then
			' lets see if the operator is a generator
			if InStr( 1, item.Families, "GeneratorOperators", vbTextCompare ) > 0 then
				out_ModelingOperators.Add item
			end if
		end if
		end if
	next
end sub

'------------------------------------------------------------------------------
' NAME:		FreezeModelingProc
'
' INPUT:	
'
' DESCRIPTION:	Gets the associated primitives to the input object list and freezes
'				their modeling operators.
'				
'------------------------------------------------------------------------------
sub FreezeModelingProc( in_objs, in_time, in_propagation )


	dim oPrim, l_isModelingOp 

	set oFreezeList = CreateObject("XSI.Collection")

	set l_InObjsExpanded = in_objs.Expand


	for each oObj in l_InObjsExpanded

		On Error Resume Next	
		
		'' Handle Subcomponent selection: need to be done first because belongsto fails on collection items.
		if( application.classname( oObj ) = "CollectionItem" ) then
			set oPrim = GetAssociatedModelingMarker( oObj )

			if application.classname( oPrim ) <> "" then
				oFreezeList.Add oPrim
			end if
		
		'' Handle operator selection
		'' Next lines are commented out. If operator is selected we want to still get the primitive
		'' and freeze the modeling ops. GetAssociatedModelingMarker does just that. I'm keeping these
		'' lines of code in case users change their minds again (it already happened twice)
		elseif( oObj.belongsto( siOperatorFamily ) ) then

			'' We have an operator selected. Check whether it is in the modeling region\

			set oPrim = GetAssociatedPrimitive( oObj )
			
			l_isModelingOp = false
			for each oOper in oPrim.ConstructionHistory
				if oOper.IsEqualTo( oObj ) then
					exit for
				end if

				if oOper.type = "modelingmarker" then
					l_isModelingOp = true
					exit for
				end if
			next

			'' If the operator selected is a modeling operator (in the modeling region) freeze it
			'' Otherwise freeze the whole modeling stack
			if l_isModelingOp then
				oFreezeList.Add oObj
			else
				set oPrim = GetAssociatedModelingMarker( oPrim )
						
				if application.classname( oPrim ) <> "" then
					oFreezeList.Add oPrim
				end if
			end if

		'' Handle other selection
		else
			set oPrim = GetAssociatedModelingMarker( oObj )

			if application.classname( oPrim ) <> "" then
				oFreezeList.Add oPrim
			end if
		end if

	next
    
    'Special processing so that GATOR weights are merged into an existing envelope
    'before the freeze operation.
	Dim oModelingOperators
	set oModelingOperators = CreateObject("XSI.Collection")
	
	FindModelingOperators in_objs, oModelingOperators
	
	Dim oObjectsToDelete
	set oObjectsToDelete = CreateObject("XSI.Collection")
		
	for each item in oModelingOperators
	    'Check for and optionally burns weights belonging to GATOR ops onto an existing envelope
		BurnAndDeleteGATOROperator item, oObjectsToDelete
	next
	
	DeleteObj oObjectsToDelete
	
	if oFreezeList.count <> 0 then
		FreezeObj oFreezeList, in_time, in_propagation
	end if

end sub

'------------------------------------------------------------------------------
' NAME:			SpinEdgeProc
'
' INPUT:		in_objs:  edges to spin
' 				in_spins: number of vertices to increment edges (+ve or -ve)
'
' DESCRIPTION:	This function is used by the SpinEdge commands. It handles
' 				updating the selection with the new edges as well as reusing
'				existing spin edge operators where possible.
'				
'------------------------------------------------------------------------------
sub SpinEdgeProc( in_objs, in_spins )
	if in_spins <> 0 then
		'
		' Get selected edges
		'
		set oEdges = SIFilter( in_objs, siEdgeFilter )
		if TypeName(oEdges) <> "Nothing" And Not IsEmpty(oEdges) then
		    DeselectAll

			for each oItem in oEdges
				'
				' Check for an existing operator we can use
				'
				set oObj = oItem.SubComponent.Parent3DObject
				set oPrim = oObj.ActivePrimitive
				set oOpStack = oPrim.ConstructionHistory
				bTop = false
				bAddOp = true
				for each oStackOp in oOpStack
					if oStackOp.type = "modelingmarker" then
						bTop = true
					elseif bTop then
						if oStackOp.type = "spinedgeop" then
							set oElem = CreateObject("xsi.collectionitem")
						 	oElem.Value = oObj & ".edge[0]"
							oElem.SubElements = GetValue( oStackOp & ".newedges" )
							
							aOldEdges = oElem.SubElements
							aNewEdges = oItem.Subelements

							if UBound(aOldEdges) = UBound(aNewEdges) then
								bCompatible = true
								for i=0 to UBound(aOldEdges)
									if aOldEdges(i) <> aNewEdges(i) then
										bCompatible = false
									end if
								next
								
								if bCompatible then
									'
									' Reuse existing operator since it is topmost
									'
									bAddOp = false
									nNewSpin = GetValue( oStackOp & ".spin" ) + in_spins
									SetValue oStackOp & ".spin", nNewSpin
									set oElem = CreateObject("xsi.collectionitem")
									oElem.Value = oObj & ".edge[0]"
									oElem.SubElements = GetValue( oStackOp & ".newedges" )
									AddToSelection oElem
								end if
							end if
						end if
						exit for
					end if
		        next
		
				if bAddOp then
					'
					' Create new spin operator
					'
					set oOpList = ApplyTopoOp("SpinEdge", oItem)
					for each oNewOp in oOpList
						SetValue oNewOp & ".spin", in_spins
						set oElem = CreateObject("xsi.collectionitem")
						oElem.Value = oObj & ".edge[0]"
						oElem.SubElements = GetValue( oNewOp & ".newedges" )
						AddToSelection oElem
					next
				end if
			next
		else
			'
			' No edges selected
			'
			LogMessage XSIUtils.Translate( IDS_NO_EDGES_TO_SPIN, "XSISCRIPTS" ), siError 
		end if
	end if
end sub

'------------------------------------------------------------------------------
' NAME:		SpinEdgeForwardProc
'------------------------------------------------------------------------------
sub SpinEdgeForwardProc( in_objs )
	SpinEdgeProc in_objs, 1
end sub

'------------------------------------------------------------------------------
' NAME:		SpinEdgeBackwardProc
'------------------------------------------------------------------------------
sub SpinEdgeBackwardProc( in_objs )
	SpinEdgeProc in_objs, -1
end sub

'------------------------------------------------------------------------------
' NAME:		SwitchToViewProc
'------------------------------------------------------------------------------
sub SwitchToViewProc( in_viewname )

	Dim vw
	set vw = desktop.activelayout.views( in_viewname )
	if ClassName( vw ) <> "" then
		vw.visible = true
	end if

end sub

sub SwitchToViewByTypeProc( in_viewtype )
	for each vw in desktop.activelayout.views
		if vw.type = in_viewtype then
			vw.visible = true
			Exit Sub
		end if
	next
end sub

sub InspectPreferencesProc( in_pref )
	Dim vw, exp, mypos, thePrefs, sefilter

	thePrefs = "Preferences"
	set vw = OpenXSIExplorer( siExplorerScopeCustom, "Property Editor", thePrefs, false, "Preferences", false )
	set exp = vw.views("explorer")
	exp.setattributevalue "localselection", "true"
	exp.setattributevalue "FilterMask", siSEFilterPropertyNodes

	If ( Not in_pref = "" ) Then
		If InStr( 1, in_pref, ".", vbTextCompare ) > 0 Then
			exp.setattributevalue "select", in_pref
		Else
			exp.setattributevalue "select", thePrefs & "." & in_pref
		End If
	End If
end sub

'------------------------------------------------------------------------------
' NAME:		SavePivotKeyProc
'
' INPUT:	
'
' DESCRIPTION:	Save key on PIVOT and PIVOT COMPENSATION parameters, and sets
'               fcurve interpolation type to CONSTANT.
'
'				in_Type determines the combination of S,R,T channels that are keyed.
'				if nothing is passed all SRT are keyed.
'				
'------------------------------------------------------------------------------
sub SavePivotKeyProc( inputobjs, in_Type, in_curframe )

	Dim l_NleKeyFrame

	'--------------------------------------------------------------------
	' Get key time from NLE
	'--------------------------------------------------------------------
	l_NleKeyFrame = CDbl(GetValue( "Project.Data.PlayControl.Key" ))
	if in_Type = 0 then in_Type = siSRT
	
	Redim SRTarrays(2) 

	dim arraysize
	l_DoS = CBool( in_Type and siScl ) or CBool( in_Type and siSRT ) or CBool( in_Type and siSR )  or CBool( in_Type and siST )
	if l_DoS then SRTarrays(0) = Array("psclx","pscly","psclz","pcsclx","pcscly","pcsclz")

	l_DoR = CBool( in_Type and siRot ) or CBool( in_Type and siSRT ) or CBool( in_Type and siSR )  or CBool( in_Type and siRT )
	if l_DoR then SRTarrays(1) = Array("protx","proty","protz","pcrotx","pcroty","pcrotz")
	
	l_DoT = CBool( in_Type and siTrn ) or CBool( in_Type and siSRT ) or CBool( in_Type and siST )  or CBool( in_Type and siRT )
	if l_DoT then SRTarrays(2) = Array("pposx","pposy","pposz","pcposx","pcposy","pcposz")
	
	dim oFCurve

	'each object
	for i = 0 to inputobjs.count - 1
		'each of S,R,T
		for a = 0 to Ubound(SRTarrays)
			if IsArray(SRTarrays(a)) then 
				'each of x/y/z parameters on pivot and pivot comp
				for j = 0 to Ubound(SRTarrays(a))
					
					dim oSource, l_bCanSaveKey
					l_bCanSaveKey = false
					set oSource = inputobjs(i).kinematics.local.parameters(SRTarrays(a)(j)).source

					'
					' Determine if we can save a key on this parameter
					'
					if typename(oSource) <> "Nothing" then
						if oSource.Name <> "FCurve" then
							logmessage "Cannot save key, " & oSource.Name & " on " & inputobjs(i).kinematics.local.parameters(SRTarrays(a)(j)), siWarning
						else
							l_bCanSaveKey = true
						end if
					else
						l_bCanSaveKey = true
					end if 

					'
					' Save key and set interpolation type to constant
					'
					if l_bCanSaveKey then
						lx = inputobjs(i).kinematics.local.parameters(SRTarrays(a)(j)).value
						SaveKey inputobjs(i) &".kine.local." & SRTarrays(a)(j), l_NleKeyFrame, lx

						set oFcurve = inputobjs(i).kinematics.local.parameters(SRTarrays(a)(j)).source
						if oFcurve.Name = "FCurve" then oFcurve.Interpolation = siConstantInterpolation
					end if
			
				next
			end if
		next
	next

	'--------------------------------------------------------------------
	' Set the current frame to keyframe (if they're different)
	'--------------------------------------------------------------------

	If Not in_curframe = l_NleKeyFrame Then
		in_curframe = l_NleKeyFrame
		SetValue "Project.Data.PlayControl.Current", l_NleKeyFrame
	End If

end sub


'------------------------------------------------------------------------------
' NAME:			UpdateCamerasFromGlobalPrefProc
'
' INPUT:		in_oCameras | List of cameras to update (can be empty)
'
' DESCRIPTION:	Updates the input camera(s) (or all camers if input is empty)
'				with the options from the output format preference.
'------------------------------------------------------------------------------
Sub UpdateCamerasFromGlobalPrefProc( in_oCameras )
	' If the input camera list is empty grab all the cameras, otherwise filter
	' filter the input list to make sure we only have the cameras.
	Dim oCamList
    
	Set oCamList = CreateObject( "XSI.Collection" )
	oCamList.AddItems in_oCameras
	If ( oCamList.count = 0 ) Then
		set oCamList = SIFilter( "*", siCameraFilter )
	Else
		set oCamList = SIFilter( in_oCameras, siCameraFilter )
	End If

	' If the list is empty then we have nothing to do.
	If ( Typename( oCamList ) = "Nothing" ) Then
		Exit Sub
	End If

	' Get the various global prefs that we'll need.
	Dim strGblPref, cam, camopt
	strGblPref = "Preferences.output_format"

	Dim lPicStd, dPicRatio, dRotoPixelRatio
	lPicStd			= GetValue( strGblPref & ".picture_standard" )
	dPicRatio		= GetValue( strGblPref & ".picture_ratio" )
	dRotoPixelRatio	= GetValue( strGblPref & ".roto_pixel_ratio" )

	' For each camera set values based on the global prefs.
	For Each cam In oCamList
		If Not cam.Parent.IsEqualTo( cam ) Then
			set camopt = GetValue( cam & ".camera" )

			' Note: the picture standard MUST come last since setting the aspect
			' and pixelratio implies a std of custom, but we want the correct
			' value that is set in the global pref.
			camopt.Parameters( "aspect" ).value		= dPicRatio
			camopt.Parameters( "pixelratio" ).value	= dRotoPixelRatio
			camopt.Parameters( "std" ).value		= lPicStd
		End If
	Next
End Sub

'------------------------------------------------------------------------------
' NAME:			UpdateRenderOptionsFromGlobalPrefProc
'
' INPUT:		in_oPasses | List of passes to update (can be empty)
'
' DESCRIPTION:	Updates the render options under the input pass(es), or the
'				scene render options (if input is empty) with the
'				options from the output format preference.
'------------------------------------------------------------------------------
Sub UpdateRenderOptionsFromGlobalPrefProc( in_oPasses )
	On Error Resume Next

	' Add all the input pass(es) to our pass list.  
	Set oPassList = CreateObject( "XSI.Collection" )
	oPassList.AddItems in_oPasses
    If ( oPassList.count = 0 ) Then
		set passes = GetValue( "Passes.List" )
		oPassList.AddItems passes
	End If

	' Get the various global prefs that we'll need.
	Dim strGblPref
	strGblPref = "Preferences.output_format"

	Dim dPicRatio, dPixRatio, lImageWidth, lImageHeight, lLockRatio, dPreset, bFieldEnable, bFieldInterLeave
	dPreset         = GetValue( strGblPref & ".preset")
	dPicRatio		= GetValue( strGblPref & ".picture_ratio" )
	dPixRatio		= GetValue( strGblPref & ".ir_pixel_ratio" )
	lImageWidth		= GetValue( strGblPref & ".ir_xres" )
	lImageHeight    = GetValue( strGblPref & ".ir_yres" )
	lLockRatio      = GetValue( strGblPref & ".ir_inverse_ratio" )
	bFieldEnable	= GetValue( strGblPref & ".field_enable" )
	bFieldInterLeave= GetValue( strGblPref & ".field_interLeave" )
	lFieldOrder	    = GetValue( strGblPref & ".field_order" )

	' Loop thru all the passes and for each one grab the render options.  Then
	' for each of those set the param values based on the global preferences.
	' Only process objects which are of the "Pass" type
	For Each pass In oPassList
		If ( pass.Type = "Pass" ) Then
			set passOpt = GetValue( pass )

            ' Only apply if there is an override
            If ( passOpt.Parameters("ImageFormatOverride").value = True  ) Then
                ApplyRenderOptions passOpt, dPicRatio, dPixRatio, lImageWidth, lImageHeight, lLockRatio, dPreset, bFieldEnable, bFieldInterLeave, lFieldOrder
            End If
		End If
	Next

	'Also apply the global prefs to the scene render option
	set renOpt = GetValue( "Passes.RenderOptions" )
	ApplyRenderOptions renOpt, dPicRatio, dPixRatio, lImageWidth, lImageHeight, lLockRatio, dPreset, bFieldEnable, bFieldInterLeave, lFieldOrder

End Sub

'------------------------------------------------------------------------------
' NAME:			ApplyRenderOptions
'
' INPUT:		render options
'
' DESCRIPTION:	Utility function used by UpdateRenderOptionsFromGlobalPrefProc 
'               to avoid dupplicated code.
'------------------------------------------------------------------------------
Sub ApplyRenderOptions( oOptions, dPicRatio, dPixRatio, lImageWidth, lImageHeight, lLockRatio, dPreset, bFieldEnable, bFieldInterLeave, lFieldOrder )

    oOptions.Parameters( "ImageFormatPreset" ).value = dPreset
                    
    ' Only update all the params if the format is a custom format... not saved preset.
    If (dPreset = 0) Then
        'First unlock the aspect ratio to 
        oOptions.Parameters( "ImageLockAspectRatio" ).value	= False
        
        oOptions.Parameters( "ImageAspectRatio" ).value	    = dPicRatio
        oOptions.Parameters( "ImagePixelRatio" ).value	    = dPixRatio
        oOptions.Parameters( "ImageWidth" ).value			= lImageWidth
        oOptions.Parameters( "ImageHeight" ).value		    = lImageHeight
        oOptions.Parameters( "ImageLockAspectRatio" ).value	= lLockRatio
	    oOptions.Parameters( "FieldEnable" ).value	        = bFieldEnable
	    oOptions.Parameters( "FieldInterLeave" ).value	    = bFieldInterLeave
	    oOptions.Parameters( "FieldOrder" ).value	        = lFieldOrder
	    
    End If
    
End Sub

'------------------------------------------------------------------------------
' NAME:			UpdateFxTreesFromGlobalPrefProc
'
' INPUT:		in_oFxTrees | List of FxTrees to update (can be empty)
'
' DESCRIPTION:	Updates the input FxTree(s) (or all FxTrees under every model
'				if the input is empty) with the options from the output format
'				preference.
'------------------------------------------------------------------------------
Sub UpdateFxTreesFromGlobalPrefProc( in_oFxTrees )
	Dim oFxTreeList

	' Add all the input items to our FxTree list.  If that list is empty the
	' grab all the FxTrees from the scene.
	Set oFxTreeList = CreateObject( "XSI.Collection" )
	oFxTreeList.AddItems in_oFxTrees
	If ( oFxTreeList.count = 0 ) Then
		' Get all the FxTrees underneath the scene_root
		dim oRoot, oFxTrees
		set oRoot = Application.ActiveProject.ActiveScene.Root
		set oFxTrees = oRoot.Properties.Filter( "FxTree" )
		oFxTreeList.AddItems oFxTrees

		' Get all the FxTrees underneath all the other models in the scene
		' Note: the Models collection on the active scene root does NOT include
		' the scene_root itself (which is why its done separately above).
		dim myModels, model
		set myModels = ActiveSceneRoot.Models
		If TypeName( myModels ) <> "Nothing" Then
			' For each model add any FxTrees under it
			For Each model In myModels
				set oFxTrees = model.Properties.Filter( "FxTree" )
				oFxTreeList.AddItems oFxTrees
			Next
		End If
	End If

	' If the list is empty then we have nothing to do.
	If ( Typename( oFxTreeList ) = "Nothing" ) Then
		Exit Sub
	End If

	' Get the various global prefs that we'll need.
	Dim strGblPref
	strGblPref = "Preferences.output_format"

	Dim lXRes, lYRes, dPixelRatio
	lXRes			= GetValue( strGblPref & ".ir_xres" )
	lYRes			= GetValue( strGblPref & ".ir_yres" )
	dPixelRatio		= GetValue( strGblPref & ".ir_pixel_ratio" )

	' Loop thru all the FxTrees and for each one set the various params based
	' on the global pref values.
	' Only process objects which are of the "FxTree" type
	dim fx
	For Each fx in oFxTreeList
		If ( fx.Type = "FxTree" ) Then
			fx.Parameters( "DefaultWidth" ).value	= lXRes
			fx.Parameters( "DefaultHeight" ).value	= lYRes
			fx.Parameters( "PixelRatio" ).value		= dPixelRatio
		End If
	Next
End Sub


'------------------------------------------------------------------------------
' NAME:			UpdatePlayControlFromGlobalPrefProc
'
' INPUT:		None
'
' DESCRIPTION:	Updates the PlayControl object with the options from the output
'				format preference.
'------------------------------------------------------------------------------
Sub UpdatePlayControlFromGlobalPrefProc( )
	' Get the various global prefs that we'll need.
	Dim strGblPref
	strGblPref = "Preferences.output_format"

	Dim nFrameStep, nFrameFormat, dFrameRate
	nFrameStep		= GetValue( strGblPref & ".frame_step" )
	nFrameFormat	= GetValue( strGblPref & ".frame_format" )
	dFrameRate		= GetValue( strGblPref & ".frame_rate" )

	' Set the values on the PlayControl object.
	SetValue "PlayControl.Step", nFrameStep
	SetValue "PlayControl.Rate", dFrameRate
	SetValue "PlayControl.Format", nFrameFormat
End Sub


'------------------------------------------------------------------------------
' NAME:			ViewMgrViewportProc
'
' INPUT:		in_prop | viewmgr viewport property attribute (string)
'				Should be either "focusedviewport" or "viewportundermouse"
'
' DESCRIPTION:	Simple helper function which takes an input string (property)
'				that is used when calling the viewmgr.getattributevalue.
'
' RETURNS:		String containing the viewport name "A", "B", "C" or "D".
'------------------------------------------------------------------------------
Function ViewMgrViewportProc( in_prop )
	set ViewMgrViewportProc = Nothing

	Dim view
	set vm = desktop.activelayout.views.find( "View Manager" )

	If Not ClassName( vm ) = "Nothing" Then
		view = vm.getattributevalue( in_prop )

		If ( typename( view ) = "String" ) Then
			ViewMgrViewportProc = view
		End If
	End If
End Function

'------------------------------------------------------------------------------
' NAME:			SetFocusedViewportProc
'
' INPUT:		in_viewport | String containing the viewport name "A", "B",
'				"C" or "D".
'
' DESCRIPTION:	Simple helper function to set the focused viewport in the
'				view manager.
'------------------------------------------------------------------------------
Function SetFocusedViewportProc( in_viewport )
	set vm = desktop.activelayout.views.find( "View Manager" )
	vm.setattributevalue "focusedviewport", in_viewport
End Function

'------------------------------------------------------------------------------
' NAME:			TransferShapeAnimationProc
'
' INPUT:		
'
' DESCRIPTION:	Transfer shape animation from the origin object to the destination
'				object. The mapping on which to connect the shape animation which
'				was previously connected on the origin shape keys will be don
'------------------------------------------------------------------------------
Sub TransferShapeAnimationProc( in_OriginObject, in_DestinationObject, in_originShapes, in_destinationShapes )

	'Validate that the source is different than the destination.
	if(in_OriginObject.IsEqualTo(in_DestinationObject)) then
		logmessage "TransferShapeAnimation: the destination needs to be different than the target.", siError
		exit sub
	end if
	
	if( typename(in_originShapes) <> "Object" or _
		typename(in_destinationShapes) <> "Object" )then
		exit sub	
	end if
	
	in_originShapes.Unique = true
	in_destinationShapes.Unique = true
	
	if in_originShapes.count <> in_destinationShapes.count then
		logmessage "TransferShapeAnimation: you need to provide the same amount of shapes.", siError
		exit sub
	end if
	
	for each oriShape in in_originShapes		
		if oriShape.IsClassOf(siShapeKeyID) then
			set oParentObj = oriShape.Parent3DObject
			if oParentObj.IsEqualTo(in_OriginObject) = false then
				logmessage "TransferShapeAnimation: origin shapes needs to be shapes nested under the origin object.", siError
				exit sub
			end if
		else
			logmessage "TransferShapeAnimation: origin shapes needs to be shape key.", siError
			exit sub
		end if
	next
	
	for each destShape in in_destinationShapes		
		if destShape.IsClassOf(siShapeKeyID) then
			set oParentObj = destShape.Parent3DObject
			if oParentObj.IsEqualTo(in_DestinationObject) = false then
				logmessage "TransferShapeAnimation: destination shapes needs to be shapes nested under the destination object.", siError
				exit sub
			end if
		else
			logmessage "TransferShapeAnimation: destination shapes needs to be shape key.", siError
			exit sub
		end if
	next
	
	SITransferShapeAnimation in_OriginObject, in_DestinationObject, in_originShapes, in_destinationShapes	

End Sub

' Allows redim & preserve of already allocated arrays within arrays
Sub ReDimensionArray(ByRef in_Array, ByVal in_NewSize)
	ReDim Preserve in_Array(in_NewSize)
End Sub

' Allow setting of arrays within arrays, because VB doesnt allow ARRAY()() notation
Sub SetArrayAt(ByRef in_Array, ByVal in_Cell, ByVal in_Value)
	in_Array(in_Cell) = in_Value
End Sub

Sub GetArrayAt(ByRef in_Array, ByVal in_Cell, ByRef out_Value)
	out_Value = in_Array(in_Cell)
End Sub

'------------------------------------------------------------------------------
' NAME:			SelectObjectsUsingMaterialProc
'
' INPUT:		in_materials | list of materials
'
' DESCRIPTION:	Select all the objects used by the input material(s).
'------------------------------------------------------------------------------
Sub SelectObjectsUsingMaterialProc( in_materials )
	On Error Resume Next

	Dim mat

	' Create a unique collection to hold the objects we will select
	Set oList = CreateObject( "XSI.Collection" )
	oList.Unique = True

	' Loop thru the input list and process the materials (we simply ignore
	' any non-materials).
	For Each mat in in_materials
		' Verify if the item is a material
		If FCompareType( mat, "material" ) Then
			For Each usedby In mat.UsedBy
				oList.Add usedby
			Next
		End If
	Next

	' And finally select the list (of objects used by)
	If ( oList.Count > 0 ) Then
		SelectObj oList
	Else
		LogMessage "No objects are using " & in_materials, siWarningMsg 
		DeselectAll	' lucer oct 22 : make sure it's obvious nothing is using that material
	End If
End Sub

'------------------------------------------------------------------------------
' NAME:			SelectMaterialsUsedByProc
'
' INPUT:		in_objs | list of objects, groups, clusters, layers, partitions
'
' DESCRIPTION:	Select all the materials used by the input object(s).
'------------------------------------------------------------------------------
Sub SelectMaterialsUsedByProc( in_objs )
	On Error Resume Next

	Dim materials, mat, item
	set oList = CreateObject("XSI.Collection")
	oList.unique = True

	For Each item in in_objs
		If TypeName(item) = "X3DObject" Then
			set materials = item.Materials

			For Each mat in materials
				oList.Add mat
			Next
		ElseIf item.IsClassOf(siSceneItemID) Then
			set mat = item.Material

			If TypeName(mat) <> "Nothing" Then
				oList.Add mat
			End If
		End If
	Next

	' And finally select the list (of materials used)
	If ( oList.Count > 0 ) Then
		SelectObj oList
	End If
End Sub

'------------------------------------------------------------------------------
' NAME:			FGroupPointCloudsProc
'
' INPUT:		in_objs | list of pointcloud
'
' DESCRIPTION:	Group a list of PointCloud under a null primitve
'------------------------------------------------------------------------------

Function FGroupPointCloudsProc( in_inputobjs, in_name, in_parent )
	On Error Resume Next

	Dim l_group, l_Parent, l_InObjsExpanded, l_InPointClouds, l_InSelectionObj
	Dim l_SelectElem

	'--------------------------------------------------------------------
	' Filter list to only have the pointcloud.
	'--------------------------------------------------------------------

	set l_InObjsExpanded = in_inputobjs.Expand
	set l_InSelectionObj = SIFilter( l_InObjsExpanded, SceneObject )
		
	if TypeName( l_InSelectionObj ) = "Nothing" then
		exit function
	end if

	For Each l_SelectElem in l_InSelectionObj	
		if ( l_SelectElem.type = "pointcloud" ) Then
			
			'Create the collection 
			if TypeName( l_InPointClouds ) = "Empty" then
				Set l_InPointClouds = CreateObject("XSI.Collection")
			end if 
			
			l_InPointClouds.Add( l_SelectElem )
		End If 
	Next
	
	'------------------------------------------------------------------------------
	' we need at least two pointcloud to make the group
	'------------------------------------------------------------------------------
	if NOT TypeName (l_InPointClouds) = "Empty" then
		if l_InPointClouds.count < 2 then
			exit function
		end if 
	else 
		exit function
	end if
	
	'------------------------------------------------------------------------------
	' If the is no parent use the one of the first point cloud in the selection
	'------------------------------------------------------------------------------
	l_Parent = in_parent
	if CStr(l_Parent) = "" then
		set l_Parent = l_InPointClouds(0).Parent
	end if

	'------------------------------------------------------------------------------
	' create the null
	'------------------------------------------------------------------------------
	SIGetPrim "Null",  in_name, l_Parent, ,l_group

	'------------------------------------------------------------------------------
	' add the input objects to the new group
	'------------------------------------------------------------------------------
	l_group.AddChild (l_InPointClouds)

	'------------------------------------------------------------------------------
	' select/inspect the new group
	'------------------------------------------------------------------------------
	if Not TypeName (l_group) = "Nothing" then
		SelectObj l_group
		AutoInspect l_group
	end if	

	'------------------------------------------------------------------------------
	' Set the return Value
	'------------------------------------------------------------------------------
	set FGroupPointCloudsProc = l_group
end Function

'------------------------------------------------------------------------------
' NAME:			FSplitCloudProc
'
' INPUT:		in_objs | list of pointcloud
'
' DESCRIPTION:	Create a null parent for each pointcloud in the selection and promote 
'               the terminal nodes in branch.
'------------------------------------------------------------------------------

Function FSplitCloudProc( in_InputObjs, in_Name ) 
	On Error Resume Next

    Dim l_InObjsExpList, l_InObjsSelList, l_NestedList, l_TerminalNodeList
	Dim l_NewParent, l_GrandParent, l_NestedOp, l_PointCloud, l_TerminalNode  

	'------------------------------------------------------------------------------
	'Filter scene objects
	'------------------------------------------------------------------------------

	set l_InObjsExpanded = in_InputObjs.Expand
	set l_InSelectionObj = SIFilter( l_InObjsExpanded, SceneObject )
		
	if TypeName( l_InSelectionObj ) = "Nothing" then
		exit function
	end if

	'------------------------------------------------------------------------------
	'Create a null parent for each pointcloud and promote the terminal nodes in branch
	'------------------------------------------------------------------------------
	For Each l_PointCloud in l_InSelectionObj	
		if ( l_PointCloud.type = "pointcloud" ) Then
		
	        '------------------------------------------------------------------------------
		    'Get the terminal nodes
	        '------------------------------------------------------------------------------
            set l_NestedList = l_PointCloud.ActivePrimitive.NestedObjects
            for each l_NestedOp in l_NestedList
	            if l_NestedOp.type = "ICETree" then
			        'Create the collection 
			        if TypeName( l_TerminalNodeList ) = "Empty" then
				        Set l_TerminalNodeList = CreateObject("XSI.Collection")
			        end if 			
        			l_TerminalNodeList.Add( l_NestedOp )
	            end if
            next
            
            '------------------------------------------------------------------------------
            ' Set the name of the parent
            '------------------------------------------------------------------------------
            if CStr(in_Name) = "" then
	            in_Name = "Effect"
            end if
		    
            '------------------------------------------------------------------------------
	        'Create the parent and it under the grand parent
            '------------------------------------------------------------------------------
		    set l_GrandParent = l_PointCloud.Parent
    	    set l_Parent = GetPrim( "Null", in_Name, l_GrandParent )
    	            	    
    	    l_Parent.AddChild l_PointCloud
            	
            if NOT TypeName (l_TerminalNodeList) = "Empty" then		
	            '------------------------------------------------------------------------------
	            ' Promote the terminal nodes operators in branch to the parent 
	            '------------------------------------------------------------------------------        	        	
                for each l_TerminalNode in l_TerminalNodeList
           	        TransferICETree l_TerminalNode, l_Parent, 0, true
           	    next
            end if 
           	    
	            '------------------------------------------------------------------------------
           	    'Create a new instance of the pointcloud
	            '------------------------------------------------------------------------------        	        	
                SIDuplicate l_PointCloud, 1, , , siNoParent 

            
		End If 
	Next

	'------------------------------------------------------------------------------
	' select/inspect the new parent
	'------------------------------------------------------------------------------
	if Not TypeName (l_Parent) = "Nothing" then
		SelectObj l_Parent
		AutoInspect l_Parent
	end if	
	
	'------------------------------------------------------------------------------
	' Set the return Value
	'------------------------------------------------------------------------------
	set FSplitCloudProc = l_Parent
end Function

'------------------------------------------------------------------------------
' NAME:			MakeMDOpBranchProc
'
' INPUT:		in_obj | terminal node to set as branch 
'
'------------------------------------------------------------------------------

sub MakeMDOpBranchProc( in_Op )
    
    dim l_Parent3DObject
    set l_Parent3DObject = in_Op.Parent3DObject    
    
    if in_Op.type = "ICETree" then
        TransferICETree in_Op, l_Parent3DObject, 0, true
    end if 
    
end sub

'------------------------------------------------------------------------------
' NAME:			PromoteMDOpProc
'
' INPUT:		in_obj | terminal node to promote (makebranch on the parent node)
'
'------------------------------------------------------------------------------

sub PromoteMDOpProc( in_Op )
    
    dim l_Parent3DObject, l_SceneRoot, l_PrimList
    set l_Parent3DObject = in_Op.Parent3DObject.Parent
    set l_SceneRoot = FGetSceneRoot()
        
    if not l_SceneRoot = l_Parent3DObject then 
        if in_Op.type = "ICETree" then
            TransferICETree in_Op, l_Parent3DObject, 0, true
        end if 
    end if
        
end sub

'------------------------------------------------------------------------------
' NAME:		ApplyICEParticleVolumeShaderProc
'
' DESCRIPTION: Apply an ICE Particle Volume Material to an object.
'               Exposed through the GetMaterialProc function when the preset 
'               arg is set to ICEParticleVolumeShader.
'------------------------------------------------------------------------------
function ApplyICEParticleVolumeShaderProc ( in_objs, in_Name, in_ConnectType )

    set ApplyICEParticleVolumeShaderProc = Nothing
    
    dim colPhongShader, oPhongShader, colCnxToMaterial, oMaterial, oParticleRendererShader, oParticleShaperShader
    
    ' Apply a new material with default phong
    set colPhongShader = SIApplyShader( "$XSI_DSPRESETS\\Shaders\\Material\\Phong.Preset", in_objs, in_Name, in_ConnectType )
    If TypeName(colPhongShader)="Nothing" Or colPhongShader.Count<=0 Then
        exit function
    End If
    
    set ApplyICEParticleVolumeShaderProc = CreateObject("XSI.Collection") 
    
    for each oPhongShader in colPhongShader
        
        If TypeName(oPhongShader)="Nothing" Then
            exit function
        End If
        
        ' Get the Material
        set colCnxToMaterial = oPhongShader.GetShaderParameterTargets("")
        If TypeName(colCnxToMaterial)="Nothing" Or colCnxToMaterial.Count<>3 Then
            exit function
        End If
        
        set oMaterial = colCnxToMaterial.Item(0).Parent
        If TypeName(oMaterial)="Nothing" Then
            exit function
        End If
        
        'Factory Path where the Particle Compounds are located
        Dim strPath
        strPath = XSIUtils.BuildPath( Application.InstallationPath( siFactoryPath ), "Data", "RTCompounds" ) & XSIUtils.Slash

        ' Create the Particle Renderer
        set oParticleRendererShader = ImportShaderCompound( oMaterial, strPath&"Particle Renderer.xsirtcompound" )
        If TypeName(oParticleRendererShader)="Nothing" Then
            exit function
        End If
        
        ' Create the Particle Shaper
        set oParticleShaperShader = ImportShaderCompound( oMaterial, strPath&"Particle Shaper.xsirtcompound" )
        If TypeName(oParticleShaperShader)="Nothing" Then
            exit function
        End If
        
        ' Connect them
        SIConnectShaderToCnxPoint oParticleRendererShader&".Volume", oMaterial&".Volume", False
        SIConnectShaderToCnxPoint oParticleShaperShader&".Density", oParticleRendererShader&".density_shape", False
        
        'Discard the Phong Shader
        DisconnectAndDeleteOrUnnestShaders oPhongShader, oMaterial
        
        'Return Created shaders in a collection
        ApplyICEParticleVolumeShaderProc.Add oParticleRendererShader
        ApplyICEParticleVolumeShaderProc.Add oParticleShaperShader
    Next
    
end function

'------------------------------------------------------------------------------
' NAME:         PlotAndApplyActionsProc
' DESCRIPTION:  Plot the input parameters and optionally Apply and Delete
'               the actions created.
'------------------------------------------------------------------------------
function PlotAndApplyActionsProc( _
    in_InputObjs, _
    in_Name, _
    in_StartFrame, _
    in_EndFrame, _
    in_Step, _
    in_FCurveKind, _
    in_Interpolation, _
    in_FitFCurve, _
    in_FitTolerance, _
    in_ProcessContRots, _
    in_Apply, _
    in_Paste, _
    in_Delete, _
    in_PlotType, _
    in_FrameSet )
    
    dim l_actionsColl, l_action
    
    ' Call the PlotToActions task
    '
    If IsEmpty(in_PlotType) or in_PlotType = 0 Then
        ' Frame Range
        '
        set l_actionsColl = PlotToActions( in_InputObjs, in_Name, in_StartFrame, in_EndFrame, in_Step, _
                                           in_FCurveKind, in_Interpolation, in_FitFCurve, in_FitTolerance, _
                                           in_ProcessContRots )
    Else
        ' Frame Set
        '
        set l_actionsColl = PlotFrameSetToActions(	in_InputObjs, _   
						                            in_Name, _          
						                            in_StartFrame, _    
						                            in_FrameSet, _      
						                            in_FCurveKind, _    
						                            in_Interpolation, _ 
						                            in_FitFCurve, _     
						                            in_FitTolerance, _  
                                                    in_ProcessContRots) 
    End If
    
    set PlotAndApplyActionsProc = l_actionsColl
    
    if in_Apply then
        for each l_action in l_actionsColl
            if TypeName( l_action ) <> "Nothing"  then
                if in_Paste then
                    dim l_start, l_end
                    l_start = GetValue( l_action & ".FrameStart" ) 
                    l_end = GetValue( l_action & ".FrameEnd" ) 
                    ApplyAction l_action, , TRUE, l_start, l_end, FALSE
                else
                    ApplyAction l_action, , FALSE,,,,TRUE
                end if
                
                if in_Delete then
                    DeleteObj l_action
                end if
            end if
        next
        
        if in_Delete then
            set PlotAndApplyActionsProc = Nothing
        end if
    end if
end function

'------------------------------------------------------------------------------
' NAME:         GetInputAndPlotToActionsProc
' INPUT:        List of parameters to plot
' DESCRIPTION:  Prompt the user for values before calling PlotToActions
'------------------------------------------------------------------------------
sub GetInputAndPlotToActionsProc ( _
    in_InputObjs, _
    in_Name, _
    in_StartFrame, _
    in_EndFrame, _
    in_Step, _
    in_FCurveKind, _
    in_Interpolation, _
    in_FitFCurve, _
    in_FitTolerance, _
    in_ProcessContRots, _
    in_Apply, _
    in_Paste, _
    in_Delete, _
    in_Title )

	Dim l_ePlotCommand, l_bAskUserForInput
	
	l_ePlotCommand = 2		' 2 stays for the PlotToActions command
	l_bAskUserForInput = TRUE
	
	PlotToActionsProc_Internal "", in_InputObjs, in_Name, in_StartFrame, in_EndFrame, in_Step, _
							   in_FCurveKind, in_Interpolation, in_FitFCurve, in_FitTolerance, in_ProcessContRots, _
							   in_Apply, in_Paste, in_Delete, in_Title, _
							   l_ePlotCommand, l_bAskUserForInput

end sub

'------------------------------------------------------------------------------
' NAME:         PlotConstrainedTransformsToActionsProc
' INPUT:        Same parameters as PlotToActions, except the 1st param, which is
'               the current selection.
' DESCRIPTION:  This script is providing a shortcut for one that wants to 
'               plot only those transforms which are constrained on any given
'               object. This script looks at the constraints and their option
'               to determine which dof is being driven by the constraint, then
'               calls up the PlotToActions command with the proper list of params.
'------------------------------------------------------------------------------
function PlotConstrainedTransformsToActionsProc( _
    in_objs, _
    in_Name, _
    in_StartFrame, _
    in_EndFrame, _
    in_Step, _
    in_FCurveKind, _
    in_Interpolation, _
    in_FitFCurve, _
    in_FitTolerance, _
    in_ProcessContRots, _
    in_Apply, _
    in_Paste, _
    in_Delete, _
    in_DeleteCns )

	Dim l_bDeleteCns, l_ePlotCommand, l_bAskUserForInput, l_actionsColl

	' If the DeleteCns argument is empty, then its default value is true (let's delete the constraints)
	if( in_DeleteCns = "" ) Then
		l_bDeleteCns = 1	' 1 stays for deleting the constraint
	else
		l_bDeleteCns = in_DeleteCns
	end if

	l_ePlotCommand = 2		' 2 stays for the PlotToActions command
	l_bAskUserForInput = FALSE

	set l_actionsColl = PlotConstrainedTransformsToActionsProc_Internal( in_objs, in_Name, in_StartFrame, in_EndFrame, in_Step, _
																		 in_FCurveKind, in_Interpolation, in_FitFCurve, in_FitTolerance, _
																		 in_ProcessContRots, in_Apply, in_Paste, in_Delete, l_bDeleteCns, "", _
																		 l_ePlotCommand, l_bAskUserForInput )
																		 
	set PlotConstrainedTransformsToActionsProc = l_actionsColl

end function

'------------------------------------------------------------------------------
' NAME:         GetInputAndPlotKeyableToActionsProc
' INPUT:        List of objects to plot their keyable parameters
' DESCRIPTION:  Prompt the user for values before calling PlotToActions
'------------------------------------------------------------------------------
sub GetInputAndPlotKeyableToActionsProc ( _
	in_InputObjs, _
	in_Name, _
	in_StartFrame, _
	in_EndFrame, _
	in_Step, _
	in_FCurveKind, _
	in_Interpolation, _
	in_FitFCurve, _
	in_FitTolerance, _
	in_ProcessContRots, _
	in_Apply, _
	in_Paste, _
	in_Delete, _
	in_Title )

	Dim l_ePlotCommand, l_bAskUserForInput
	
	l_ePlotCommand = 2		' 2 stays for the PlotToActions command
	l_bAskUserForInput = TRUE

	PlotKeyableToActionsProc_Internal in_InputObjs, in_Name, in_StartFrame, in_EndFrame, in_Step, _
									  in_FCurveKind, in_Interpolation, in_FitFCurve, in_FitTolerance, _
									  in_ProcessContRots, in_Apply, in_Paste, in_Delete, in_Title, _
									  l_ePlotCommand, l_bAskUserForInput
end sub

'------------------------------------------------------------------------------
' NAME:         PlotToActionsProc_Internal
' INPUT:        List of parameters to plot
' DESCRIPTION:  Prompt the user, if requested, for values before calling PlotToActions/PlotToAction
'------------------------------------------------------------------------------
function PlotToActionsProc_Internal ( _
	in_Model, _
	in_InputObjs, _
	in_Name, _
	in_StartFrame, _
	in_EndFrame, _
	in_Step, _
	in_FCurveKind, _
	in_Interpolation, _
	in_FitFCurve, _
	in_FitTolerance, _
	in_ProcessContRots, _
	in_Apply, _
	in_Paste, _
	in_Delete, _
	in_Title, _
	in_ePlotCommand, _
	in_bAskUserForInput )

	set PlotToActionsProc_Internal = Nothing

	if( in_bAskUserForInput = TRUE ) Then

		Dim l_plotCommand, l_start, l_end, l_step, l_SceneRoot, l_CustomParam, l_CPList

		' Use the proper command
		if( in_ePlotCommand = 2 ) then
			l_plotCommand = "PlotToActions"
		else
			l_plotCommand = "PlotToAction"
		end if

		' Get the default start, end and step times from the play control.
		l_start = GetValue("Project.Data.PlayControl.In")
		l_end   = GetValue("Project.Data.PlayControl.Out")
		l_step  = GetValue("Project.Data.PlayControl.Step")

		' Get the scene root.
		Set l_SceneRoot = ActiveSceneRoot

		' Build the Dialog to collect user input

		' Keep this around so it's easier to regenerate a new pset/preset if needed (Rejean's technique :-)
		l_GeneratePset = FALSE

		Dim l_Class, l_aProps
		l_Class = -1
		l_aProps = Array( _
			Array( "Start", siDouble, l_Start, -1000000, 1000000, l_Class, siPersistable+siSilent, l_start, l_end, "Start", "Start Frame" ), _
			Array( "End", siDouble, l_end, -1000000, 1000000, l_Class, siPersistable+siSilent, l_start, l_end, "End", "End Frame" ), _
			Array( "Step", siDouble, l_step, -1000000, 1000000, l_Class, siPersistable+siSilent, 0, l_end - l_start, "Step", "Step value" ), _
			Array( "ActionName", siString, "plot", "", "", l_Class, siPersistable+siSilent, "", "", "ActionName", "Action Name" ), _
			Array( "FCurveKind", siInt2, 2, 0, 3, l_Class, siPersistable+siSilent, 0, 3, "FCurveKind", "Kind of fcurve" ), _
			Array( "Interpolation", siInt2, 2, 0, 2, l_Class, siPersistable+siSilent, 0, 2, "Interpolation", "Interpolation" ), _
			Array( "FitFCurve", siBool, False, False, True, l_Class, siPersistable+siSilent, False, True,"FitFCurve", "Fit plotted values with an fcurve" ), _
			Array( "FitTolerance", siDouble, 0.01, 0.0001, 10, l_Class, siPersistable+siSilent, 0.0001, 1, "FitTolerance", "Fit Tolerance" ), _
			Array( "ProcessContRots", siBool, True, False, True, l_Class, siPersistable+siSilent, False, True, "ProcessContRots", "Process rotations to ensure continuity" ), _
			Array( "ApplyAction", siBool, True, False, True, l_Class, siPersistable+siSilent, False, True, "ApplyAction", "Apply plotted animation to object" ), _
			Array( "DeleteAction", siBool, True, False, True, l_Class, siPersistable+siSilent, False, True, "DeleteAction", "Delete plotted action" ), _
			Array( "PasteApply", siBool, True, False, True, l_Class, siPersistable+siSilent, False, True, "PasteApply", "Apply using paste keys rather than replace curve" ), _
			Array( "PlotType", siInt2, 0, 0, 1, l_Class, siPersistable+siSilent, 0, 1, "PlotType", "Plot Type" )_
			)

		if (l_GeneratePset = TRUE) then
			
			' Create a custom plot wizard property
			Set l_CPList = SIAddProp( "Custom_parameter_list", l_SceneRoot , , l_plotCommand).value("Value")
			l_CustomParam = l_SceneRoot & "." & l_CPList

			for i = 0 to UBound( l_aProps )
				SIAddCustomParameter l_CustomParam, l_aProps(i)(0), l_aProps(i)(1), l_aProps(i)(2), _
					l_aProps(i)(3), l_aProps(i)(4), l_aProps(i)(5), l_aProps(i)(6), l_aProps(i)(7), _
					l_aProps(i)(8), l_aProps(i)(9), l_aProps(i)(10)
			next

		else
			' See if there is already a pset that contain the options.
			' If so, we will use those current values. If not we create a new one.
			' Currently we put this pset under the Scene Root, but we
			' should eventually be able to place it under Project/Data.
			set l_CustomParam = l_SceneRoot.Properties( l_plotCommand )
			if IsEmpty(l_CustomParam) Or (TypeName(l_CustomParam) = "Nothing") Then
				' There wasn't one, so create it...
				Set l_CPList = SIAddProp( "PlotToActionWizard", l_SceneRoot , , l_plotCommand).value("Value")
				l_CustomParam = l_SceneRoot & "." & l_CPList

				' Set the appropriate default values.
				SetValue l_CustomParam & ".Start", l_Start
				SetValue l_CustomParam & ".End", l_End
				SetValue l_CustomParam & ".Step", l_Step

				for i = 3 to UBound( l_aProps )
					SetValue l_CustomParam & "." & l_aProps(i)(0), l_aProps(i)(2)
				next
			end if
		end if

		'Launch the dialog and wait for OK or Cancel to be pressed.
		dim l_PlotType, l_FrameSetStr
		If FWizardDialog(l_CustomParam,in_Title) = vbOk Then

			'Read the parameters of the property page
			in_StartFrame   = GetValue( l_CustomParam & ".Start" )
			in_EndFrame     = GetValue( l_CustomParam & ".End" )
			in_Step         = GetValue( l_CustomParam & ".Step" )
			in_Name         = GetValue( l_CustomParam & ".ActionName" )
			l_PlotType      = GetValue( l_CustomParam & ".PlotType" )
       	 	l_FrameSetStr   = GetValue( l_CustomParam & ".FrameSet" )
        
        
        	Dim l_FrameSet
        	If l_PlotType = 1 Then 
            	' Frame Set. Validate the Frame Set string
            	'
	       		l_FrameSet = Split(l_FrameSetStr, ",")
        	End If

			dim l_FCurveKind
			l_FCurveKind    = GetValue( l_CustomParam & ".FCurveKind" )

			select case l_FCurveKind
				case 0      ' Boolean fcurve
					in_FCurveKind  = 10
				case 1      ' Integer fcurve
					in_FCurveKind  = 15
				case 2      ' Standard fcurve
					in_FCurveKind  = 20
				case 3      ' Raw data fcurve
					in_FCurveKind  = 30
			end select

			dim l_Interpolation
			l_Interpolation = GetValue( l_CustomParam & ".Interpolation" )

			select case l_Interpolation
				case 0      ' Constant interpolation
					in_Interpolation  = 1
				case 1      ' Linear interpolation
					in_Interpolation  = 2
				case 2      ' Spline interpolation
					in_Interpolation  = 3
			end select

			in_FitFCurve        = GetValue( l_CustomParam & ".FitFCurve" )
			in_FitTolerance     = GetValue( l_CustomParam & ".FitTolerance" )
			in_ProcessContRots  = GetValue( l_CustomParam & ".ProcessContRots" )
			in_Apply            = GetValue( l_CustomParam & ".ApplyAction" )
			in_Paste            = GetValue( l_CustomParam & ".PasteApply" )
			in_Delete           = GetValue( l_CustomParam & ".DeleteAction" )

			if( in_ePlotCommand = 2 ) then
				' Call the PlotAndApplyActions command
				PlotAndApplyActionsProc in_InputObjs, in_Name, in_StartFrame, in_EndFrame, in_Step, _
										in_FCurveKind, in_Interpolation, in_FitFCurve, in_FitTolerance, _
										in_ProcessContRots, in_Apply, in_Paste, in_Delete, _
                                		l_PlotType, l_FrameSet
			else
				' Call the PlotAndApplyAction command
				PlotAndApplyActionProc in_Model, in_InputObjs, in_Name, in_StartFrame, in_EndFrame, in_Step, _
									   in_FCurveKind, in_Interpolation, in_FitFCurve, in_FitTolerance, in_ProcessContRots, _
									   in_Apply, in_Paste, in_Delete
			end if

		Else
			Err.Raise siErrCancelled
		End If
	else
		Dim l_returnValue
		if( in_ePlotCommand = 2 ) then
			' Call the PlotAndApplyActions command
			set l_returnValue = PlotAndApplyActionsProc( in_InputObjs, in_Name, in_StartFrame, in_EndFrame, in_Step, _
														 in_FCurveKind, in_Interpolation, in_FitFCurve, in_FitTolerance, _
														 in_ProcessContRots, in_Apply, in_Paste, in_Delete ,0,0)
		else
			' Call the PlotAndApplyAction command
			set l_returnValue = PlotAndApplyActionProc( in_Model, in_InputObjs, in_Name, in_StartFrame, in_EndFrame, in_Step, _
														in_FCurveKind, in_Interpolation, in_FitFCurve, in_FitTolerance, in_ProcessContRots, _
														in_Apply, in_Paste, in_Delete )
		end if
		set PlotToActionsProc_Internal = l_returnValue
	end if

end function

'------------------------------------------------------------------------------
' NAME:			GetInputAndPlotConstrainedTransformsToActionsProc
' INPUT:		Same parameters as PlotToActions, except the 1st param, which is
'				the current selection.
' DESCRIPTION:	Prompt the user for values before calling PlotToActions.
'				This script is providing a shortcut for one that wants to 
'				plot only those transforms which are constrained on any given
'				object. This script looks at the constraints and their option
'				to determine which dof is being driven by the constraint, then
'				calls up the PlotActions command with the proper list of params.
'------------------------------------------------------------------------------
sub GetInputAndPlotConstrainedTransformsToActionsProc ( _
	in_InputObjs, _
	in_Name, _
	in_StartFrame, _
	in_EndFrame, _
	in_Step, _
	in_FCurveKind, _
	in_Interpolation, _
	in_FitFCurve, _
	in_FitTolerance, _
	in_ProcessContRots, _
	in_Apply, _
	in_Paste, _
	in_Delete, _
	in_DeleteCns, _
	in_Title )

	Dim l_bDeleteCns, l_ePlotCommand, l_bAskUserForInput

	l_bDeleteCns = 2		' 2 stays for asking the user to delete the constraint or not
	l_ePlotCommand = 2		' 2 stays for the PlotToActions command
	l_bAskUserForInput = TRUE
	
	PlotConstrainedTransformsToActionsProc_Internal in_InputObjs, in_Name, in_StartFrame, in_EndFrame, in_Step, _
													in_FCurveKind, in_Interpolation, in_FitFCurve, in_FitTolerance, _
													in_ProcessContRots, in_Apply, in_Paste, in_Delete, l_bDeleteCns, in_Title, _
													l_ePlotCommand, l_bAskUserForInput
	
	'Update the output argument
	in_DeleteCns = l_bDeleteCns

end sub

'------------------------------------------------------------------------------
' NAME:			PlotConstrainedTransformsToActionsProc_Internal
' INPUT:		Same parameters as PlotToActions/PlotToAction, except the 1st param,
'				which is the current selection.
' DESCRIPTION:	This script is providing a shortcut for one that wants to 
'				plot only those transforms which are constrained on any given
'				object. This script looks at the constraints and their option
'				to determine which dof is being driven by the constraint, then
'				calls up the PlotToActions/PlotToAction command with the proper list of params.
'------------------------------------------------------------------------------
function PlotConstrainedTransformsToActionsProc_Internal( _
	in_objs, _
	in_Name, _
	in_StartFrame, _
	in_EndFrame, _
	in_Step, _
	in_FCurveKind, _
	in_Interpolation, _
	in_FitFCurve, _
	in_FitTolerance, _
	in_ProcessContRots, _
	in_Apply, _
	in_Paste, _
	in_Delete, _
	in_DeleteCns, _
	in_Title, _
	in_ePlotCommand, _
	in_bAskUserForInput )

	set PlotConstrainedTransformsToActionsProc_Internal = Nothing

	' Only keep 3DObjects
	set l_objs = SIFilter( in_objs, siObjectFilter )

	If TypeName(l_objs) = "Nothing" Then
		logmessage "You need to select one or more 3D objects first."
		exit function
	End If


	l_params = ""

	set l_cnslist = CreateObject("XSI.Collection")

	for each l_obj in l_objs
		set oConstraints = l_obj.Kinematics.Constraints
		for each oCns in oConstraints

			l_posdof = False
			l_rotdof = False
			l_scldof = False

			'-------------------------------------------------------------------------
			' Consider only active constraints
			'-------------------------------------------------------------------------
			if ( oCns.Parameters("active").value = True ) then

				'-------------------------------------------------------------------------
				' Check if there's anything that can be driving the following 
				' dof of the object...:
				'-------------------------------------------------------------------------
				' ...Position
				'-------------------------------------------------------------------------
				if ( oCns.type = "poscns" or _
					oCns.type = "distcns" or _
					oCns.type = "pathcns" or _
					oCns.type = "surfcns" or _
					oCns.type = "2ptscns" or _
					oCns.type = "3ptscns" or _
					oCns.type = "Nptscns" or _
					oCns.type = "objclscns" ) then
					l_posdof = True
				elseif ( oCns.type = "posecns" or oCns.type = "symmetrycns" ) then
					if ( oCns.Parameters("cnspos").value = True ) then l_posdof = True
				end if
				'-------------------------------------------------------------------------
				' ...Rotation (including cases where rotation would be driven by an upvector
				'              or a tangent option.)
				'-------------------------------------------------------------------------
				if ( oCns.type = "dircns" or _
					oCns.type = "oricns" ) then
					l_rotdof = True
				elseif ( oCns.type = "posecns" or oCns.type = "symmetrycns" ) then
					if ( oCns.Parameters("cnsori").value = True ) then l_rotdof = True
				elseif ( oCns.type = "poscns" or _
						 oCns.type = "pathcns" or _
						 oCns.type = "distcns" or _
						 oCns.type = "2ptscns" or _
						 oCns.type = "3ptscns" or _
						 oCns.type = "objclscns" or _
						 oCns.type = "surfcns" ) then

					if ( oCns.Parameters("upvct_active").value = True ) then
						l_rotdof = True
					end if

					if ( oCns.type <> "poscns" and oCns.type <> "distcns" ) then
						if ( oCns.Parameters("tangent").value = True ) then
							l_rotdof = True
						end if
					end if

				end if
				'-------------------------------------------------------------------------
				' ...Scaling
				'-------------------------------------------------------------------------
				if ( oCns.type = "sclcns" ) then
					l_scldof = True
				elseif ( oCns.type = "posecns" or oCns.type = "symmetrycns" ) then
					if ( oCns.Parameters("cnsscl").value = True ) then l_scldof = True
				end if

				' Set the parameter string accordingly
				'-------------------------------------------------------------------------
				' ...Position
				'-------------------------------------------------------------------------
				if ( l_posdof = True ) then
					l_dof = l_obj & ".kine.local.posx," & l_obj & ".kine.local.posy," & l_obj & ".kine.local.posz"

					if ( l_params <> "" ) then l_params = l_params & ","
					l_params = l_params & l_dof
				end if
				'-------------------------------------------------------------------------
				' ...Rotation
				'-------------------------------------------------------------------------
				if ( l_rotdof = True ) then
					l_dof = l_obj & ".kine.local.rotx," & l_obj & ".kine.local.roty," & l_obj & ".kine.local.rotz"

					if ( l_params <> "" ) then l_params = l_params & ","
					l_params = l_params & l_dof
				end if
				'-------------------------------------------------------------------------
				' ...Scaling
				'-------------------------------------------------------------------------
				if ( l_scldof = True ) then
					l_dof = l_obj & ".kine.local.sclx," & l_obj & ".kine.local.scly," & l_obj & ".kine.local.sclz"

					if ( l_params <> "" ) then l_params = l_params & ","
					l_params = l_params & l_dof
				end if

				if ( l_posdof = True or l_rotdof = True or l_scldof = True ) then
					l_cnslist.Add oCns
				end if

			end if

		next
	next

	if ( l_params <> "" ) then
		
		Dim l_returnValue
		if ( in_ePlotCommand = 2 ) then
			' Call the PlotAndApplyActions command
			set l_returnValue = PlotToActionsProc_Internal( "", l_params, in_Name, in_StartFrame, in_EndFrame, in_Step, _
															in_FCurveKind, in_Interpolation, in_FitFCurve, in_FitTolerance, _
															in_ProcessContRots, in_Apply, in_Paste, in_Delete, in_Title, _
															in_ePlotCommand, in_bAskUserForInput )
			
		else
			' Call the PlotAndApplyAction command
			set l_returnValue = PlotToActionsProc_Internal( l_objs, l_params, in_Name, in_StartFrame, in_EndFrame, in_Step, _
															in_FCurveKind, in_Interpolation, in_FitFCurve, in_FitTolerance, _
															in_ProcessContRots, in_Apply, in_Paste, in_Delete, in_Title, _
															in_ePlotCommand, in_bAskUserForInput )
		end if

		' if (succeeded or not canceled) and (requested the deletion of original constraints or at least ask the user)
		if (Err.Number = 0) and (in_DeleteCns <> 0) then

			' ask the user?
			if( in_DeleteCns = 2 ) then

				l_Prompt = XSIUtils.Translate(IDS_PLOT_DELETE_CONSTRAINT, "XSISCRIPTS" )

				for each oCns in l_cnslist
					l_Prompt = l_Prompt & Chr(10)
					l_Prompt = l_Prompt & " -> " & oCns.fullname
				next

				if SIMsgBox(l_Prompt, (vbYesNo + vbQuestion), XSIUtils.Translate("Plot Constraint", "XSISCRIPTS" ), vbYes) = vbYes then
					DeleteObj l_cnslist
					in_DeleteCns = True		'Update the output argument
				else
					in_DeleteCns = False	'Update the output argument
				end if

			else

				DeleteObj l_cnslist
				in_DeleteCns = True			'Update the output argument

			end if
			
		end if

		set PlotConstrainedTransformsToActionsProc_Internal = l_returnValue

	else
		logmessage "Did not find any constrained transform on selected objects."
	end if

end function

'------------------------------------------------------------------------------
' NAME:         PlotKeyableToActionsProc
' INPUT:        List of objects to plot their keyable parameters
' DESCRIPTION:  Prompt the user for values before calling PlotToActions
'------------------------------------------------------------------------------
function PlotKeyableToActionsProc ( _
    in_InputObjs, _
    in_Name, _
    in_StartFrame, _
    in_EndFrame, _
    in_Step, _
    in_FCurveKind, _
    in_Interpolation, _
    in_FitFCurve, _
    in_FitTolerance, _
    in_ProcessContRots, _
    in_Apply, _
    in_Paste, _
    in_Delete )

	Dim l_ePlotCommand, l_bAskUserForInput, l_actionsColl

	l_ePlotCommand = 2		' 2 stays for the PlotToActions command
	l_bAskUserForInput = FALSE

	set l_actionsColl = PlotKeyableToActionsProc_Internal( in_InputObjs, in_Name, in_StartFrame, in_EndFrame, in_Step, _
														   in_FCurveKind, in_Interpolation, in_FitFCurve, in_FitTolerance, _
														   in_ProcessContRots, in_Apply, in_Paste, in_Delete, "", _
														   l_ePlotCommand, l_bAskUserForInput )
	set PlotKeyableToActionsProc = l_actionsColl
end function

'------------------------------------------------------------------------------
' NAME:         PlotKeyableToActionsProc_Internal
' INPUT:        List of objects to plot their keyable parameters
' DESCRIPTION:  Prompt the user, if needed, for values before calling PlotToActions/PlotToAction
'------------------------------------------------------------------------------
function PlotKeyableToActionsProc_Internal ( _
	in_InputObjs, _
	in_Name, _
	in_StartFrame, _
	in_EndFrame, _
	in_Step, _
	in_FCurveKind, _
	in_Interpolation, _
	in_FitFCurve, _
	in_FitTolerance, _
	in_ProcessContRots, _
	in_Apply, _
	in_Paste, _
	in_Delete, _
	in_Title, _
	in_ePlotCommand, _
	in_bAskUserForInput )

	set PlotKeyableToActionsProc_Internal = Nothing

	' Only keep 3DObjects
	set l_objs = SIFilter( in_InputObjs, siObjectFilter )

	If TypeName(l_objs) = "Nothing" Then
		logmessage "You need to select one or more 3D objects first."
		exit function
	End If

	l_params = ""
	Dim l_KeyableColl

	If TypeName(in_InputObjs) <> "Nothing" then
		Set l_KeyableColl = in_InputObjs.FindObjectsByMarkingAndCapabilities( , siKeyable )
		Set l_KeyableColl = l_KeyableColl.FindObjectsByMarkingAndCapabilities( , siAnimatable ) 
	End If

	l_params = l_KeyableColl.GetAsText

	if ( l_params <> "" ) then
		Dim l_returnValue
		if ( in_ePlotCommand = 2 ) then
			' Call the PlotAndApplyActions command
			set l_returnValue = PlotToActionsProc_Internal( "", l_params, in_Name, in_StartFrame, in_EndFrame, in_Step, _
															in_FCurveKind, in_Interpolation, in_FitFCurve, in_FitTolerance, _
															in_ProcessContRots, in_Apply, in_Paste, in_Delete, in_Title, _
															in_ePlotCommand, in_bAskUserForInput )
		else
			' Call the PlotAndApplyAction command
			set l_returnValue = PlotToActionsProc_Internal( in_InputObjs, l_params, in_Name, in_StartFrame, in_EndFrame, in_Step, _
															in_FCurveKind, in_Interpolation, in_FitFCurve, in_FitTolerance, _
															in_ProcessContRots, in_Apply, in_Paste, in_Delete, in_Title, _
															in_ePlotCommand, in_bAskUserForInput )
		end if
		set PlotKeyableToActionsProc_Internal = l_returnValue
	else
		logmessage "Did not find any keyable parameters on selected objects."
	end if
end function

'------------------------------------------------------------------------------
' NAME:			CreateUserMotionProc	
'
' INPUT:		in_objs			- Objects onto which to create the User Motion property. 
'				in_name			- User Motion property name
'				in_proppreset	- User Motion property preset.
'
' DESCRIPTION:	Create a point cluster and a user motion cluster property.
'
'------------------------------------------------------------------------------
function CreateUserMotionProc(in_objs, in_name, in_proppreset)

	Dim l_PropList
	set l_PropList = CreatePointClusterPropertiesFunc( in_objs, "UserMotionCls", in_name, in_proppreset )
	
	if TypeName (l_PropList) = "Nothing" then
		LogMessage XSIUtils.Translate( IDS_NO_VALID_OBJECTS_FOR_CLSPROP, "XSISCRIPTS", "user motion" ), siInfo 
	end if

	set CreateUserMotionProc = l_PropList

end function

function FGetViewportNameByID( ByVal in_viewport )
	dim oVM
	if ( in_viewport = siViewportA ) then
		FGetViewportNameByID = "A"
	elseif ( in_viewport = siViewportB ) then
		FGetViewportNameByID = "B"
	elseif ( in_viewport = siViewportC ) then
		FGetViewportNameByID = "C"
	elseif ( in_viewport = siViewportD ) then
		FGetViewportNameByID = "D"
	elseif ( in_viewport = siViewportCurrent ) then
		set oVM = Desktop.ActiveLayout.Views.Find( "View Manager" )
		if TypeName( oVM ) <> "" then
			FGetViewportNameByID = oVM.GetAttributeValue( "viewportundermouse" )
		end if
	else ' siViewportFocussed (also default to this if in_viewport is invalid)
		set oVM = Desktop.ActiveLayout.Views.Find( "View Manager" )
		if TypeName( oVM ) <> "" then
			FGetViewportNameByID = oVM.GetAttributeValue( "focusedviewport" )
		end if
	end if
	
end function

function SetCameraSequencerLayoutProc(in_editorViewport, in_seqCamViewport, in_camEditingViewport, in_userViewport)
	If Application.Interactive then
		' Switch to camera sequencer layout if necessary
		if( Desktop.ActiveLayout.Name <> "Camera Sequencer") Then
			Desktop.ActiveLayout = Desktop.Layouts( "Camera Sequencer" )
		end if
		dim oVM
		l_editorViewport = FGetViewportNameByID( in_editorViewport )
		l_seqCamViewport = FGetViewportNameByID( in_seqCamViewport )
		l_camEditingViewport = FGetViewportNameByID( in_camEditingViewport )
		l_userViewport = FGetViewportNameByID( in_userViewport )
		set oVM = Desktop.ActiveLayout.Views.Find( "View Manager" )
		if TypeName( oVM ) <> "" then
			oVM.SetAttributeValue "suspenddrawing", "true"
			' Set to 1up+3down layout mode
			oVM.SetAttributeValue "layout", "alternate"
			' Reset the view manager
			oVM.SetAttributeValue "layout", "reset"
			' Set to Camera Sequencer Editor
			oVM.SetAttributeValue "viewport:" & l_editorViewport, "Camera Sequencer Editor"

			' Set to Sequencer Camera 
			dim oSeqCamera
			set oSeqCamera = Dictionary.GetObject( "Views.View" & l_seqCamViewport & ".sequencercamera" )
			if TypeName(oSeqCamera) <> "" then
				oVM.SetAttributeValue "activecamera:" & l_seqCamViewport, "sequencercamera"
			end if
		
			' Get all existing cameras
			set oCamerasColl= ActiveProject.ActiveScene.RenderableCameras
			' Set to the particular camera for the current active shot clip if it exists
			dCurSeqFrame = GetValue("PlayControl.CurrentSequencer")
			dim oClip, oActiveCamera
			GetShotClip dCurSeqFrame, , oClip, , oActiveCamera
			if oActiveCamera <> "" then
	  			oVM.SetAttributeValue "activecamera:" & l_camEditingViewport, oActiveCamera.FullName
			else ' Set to the first available camera 
				if oCamerasColl.Count > 0 then 
					oVM.SetAttributeValue "activecamera:" & l_camEditingViewport, oCamerasColl(0).FullName
				end if	
			end if

			' Set to the first active Camera in the Scene
			if oCamerasColl.Count > 0 then
				oVM.SetAttributeValue "activecamera:" & l_userViewport, "User"
			end if
			oVM.SetAttributeValue "focusedviewport", "d"
			oVM.SetAttributeValue "suspenddrawing", "false"
		end if
	end if
end function

function PlotCameraSequencerProc( _
	in_SeqStartFrame, _
	in_SeqEndFrame, _	
	in_bWithoutGaps, _
	in_CameraName, _
	in_ApplyToCamera, _
	in_Apply )
	
	'TODO: in_Apply parameter is not in use.Need to clean it.

	' Unlock the completed scene in order to delete locked clips.
	Unlock "Scene_Root", siLockLevelAll, , True

	' Plot animations in sequencer
	' Note: Don't apply action until finishing to plot camera. Otherwise, the animations of camera will be affected. 
	dim l_actionColl, l_action
	set l_actionColl = PlotCamSeqToActions( , "CamSeq_PlotAction", in_SeqStartFrame, in_SeqEndFrame, in_bWithoutGaps, _
													siStandardFCurve, siCubicInterpolation, False, 0.01, True, _
													False, False )

	' Plot ICE simulations
	l_PlotSimulationsRetVal = PlotCamSeqForCachedObjects( "[project path]\Simulation\CamSeqSimulationPlot\[model]\[object]\[object]_#.icecache", in_SeqStartFrame, in_SeqEndFrame, in_bWithoutGaps, , True )
	
	' Plot the shape animation
	PlotCamSeqShape  , "CamSeq_PlotShape", in_SeqStartFrame, in_SeqEndFrame, in_bWithoutGaps, True, _
							siShapeBlendedWeightMode, siShapeContentAllDeforms, siShapeAbsoluteReferenceMode
							
	' Plot Sequencer Camera
	dim l_ApplyToCamera
	if in_ApplyToCamera Then
		l_ApplyToCamera = True
	else
		l_ApplyToCamera = False
	end if
	set l_PlotCamRetVal = PlotSequencerCamera( in_SeqStartFrame, in_SeqEndFrame, "SequencerCamera_Plot_Action", in_CameraName, in_bWithoutGaps, l_ApplyToCamera )

	' Delete the existing animation clips
	set l_clipsToDelete =  CreateObject("XSI.Collection")
	' Gather all models in the scene
	set l_Models = CreateObject("XSI.Collection")
	l_Models.AddItems( ActiveSceneRoot.Models )
	l_Models.Add ActiveSceneRoot
	for each l_oModel in l_Models
		if l_oModel.HasMixer() then
			' Gather all animation clips from Mixer
			set l_Clips = l_oModel.Mixer.Clips
			for each l_oClip in l_Clips
				if l_oClip.Type = siClipAnimationType or l_oClip.Type = siClipAnimCompoundType Then
					l_clipsToDelete.Add l_oClip
				end if
			next
		end if
	next

	' The new clip for plotted camera shouldn't be removed.
	if l_PlotCamRetVal.Count = 2 then
		l_clipsToDelete.Remove l_PlotCamRetVal(1)
	end if

	' Delete the clips
	On Error Resume Next	
	if l_clipsToDelete.Count > 0 Then
		DeleteObj l_clipsToDelete
	end if	

	' Apply plotted animations if it's required.
	for each l_action in l_actionColl
		if ( TypeName( l_action ) <> "Nothing" ) then
			ApplyAction l_action, , FALSE,,,,TRUE
			' Delete action after applying		
			DeleteObj l_action
		end if
	next
	
	' Check that l_PlotSimulationsRetVal contains 3 items before invoking ApplyCamSeqFileCacheSources
	if not IsEmpty( l_PlotSimulationsRetVal ) then
        if Ubound( l_PlotSimulationsRetVal ) = 2 then ' Must have 3 items in the return value
		    ApplyCamSeqFileCacheSources l_PlotSimulationsRetVal(0), l_PlotSimulationsRetVal(1), l_PlotSimulationsRetVal(2) 
        end if
	end if

	' Adjust the scene time range into specified sequencer range.
	SetValue "PlayControl.In", in_SeqStartFrame
	SetValue "PlayControl.Out", in_SeqEndFrame
end function

'------------------------------------------------------------------------------
' NAME:         GetInputAndCollapseLayersProc
' DESCRIPTION:  Prompt the user for values before calling CollapseLayers
'------------------------------------------------------------------------------
sub GetInputAndCollapseLayersProc ( _
	in_Model, _
	in_PlottingType, _
	in_Start, _
	in_End, _
	in_Step, _
	in_FitFCurve, _
	in_FitTolerance )

	' Get the scene root
	Dim l_SceneRoot
	Set l_SceneRoot = ActiveSceneRoot

	'------------------------------------------------
	' Build the Dialog to collect user input
	'------------------------------------------------
	
	' See if there is already a CustomPSet that contain the options.
	' If so, we will use those current values. If not we create a new one.
	Dim l_CustomParam
	set l_CustomParam = l_SceneRoot.Properties( "CollapseLayers" )
	if IsEmpty( l_CustomParam ) Or ( TypeName( l_CustomParam ) = "Nothing" ) Then
	
		' There wasn't one, so create it...
		Dim l_CPList
		Set l_CPList = SIAddProp( "CollapseLayersWizard", l_SceneRoot, siNodePropagation, "CollapseLayers" ).value( "Value" )
		l_CustomParam = l_SceneRoot & "." & l_CPList
		
		' Set the appropriate default values depending on the scene/preference context
		Dim l_defaultStart, l_defaultEnd, l_defaultStep
		l_defaultStart			= GetValue( "Project.Data.PlayControl.In" )
		l_defaultEnd			= GetValue( "Project.Data.PlayControl.Out" )
		l_defaultStep			= GetValue( "Project.Data.PlayControl.Step" )
		
		SetValue l_CustomParam & ".Start", l_defaultStart
		SetValue l_CustomParam & ".End", l_defaultEnd
		SetValue l_CustomParam & ".Step", l_defaultStep
		SetValue l_CustomParam & ".FitFCurve", True
		SetValue l_CustomParam & ".FitTolerance", 0.01
				
	end if

	'------------------------------------------------
	' Launch the dialog and wait for OK or Cancel to be pressed
	'------------------------------------------------
	Dim l_DialogTitle
	l_DialogTitle = "Collapse Layers"
	If FWizardDialog( l_CustomParam, l_DialogTitle ) = vbOk Then
		
		' Read the parameters from the PPG, so they can be logged properly
		in_PlottingType		= 1 'deprecated
		in_Start			= GetValue( l_CustomParam & ".Start" )
		in_End				= GetValue( l_CustomParam & ".End" )
		in_Step				= GetValue( l_CustomParam & ".Step" )
		in_FitFCurve		= GetValue( l_CustomParam & ".FitFCurve" )
		in_FitTolerance		= GetValue( l_CustomParam & ".FitTolerance" )

		' Call the CollapseLayers task
		CollapseLayers in_Model, in_PlottingType, in_Start, in_End, in_Step, in_FitFCurve, in_FitTolerance

	Else
		Err.Raise siErrCancelled
	End If
	
	
end sub


'******************************************************************************
' END OF FILE
'******************************************************************************

