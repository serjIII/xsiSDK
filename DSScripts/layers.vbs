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
' @module	layers.vbs | VB scripts related to layers
'
'******************************************************************************

'******************************************************************************
' DEBUGGING
'******************************************************************************

' DEVNOTE: remove comment to force explicit declaration of local variables.
'Option explicit

' DEVNOTE: remove comment to force a break point when script loaded.
'stop

'------------------------------------------------------------------------------
' NAME:			CreateLayer
'
' INPUT:		Preset to base the layer on, name of the layer,
'				objects to add to the new layer
'				
'
' DESCRIPTION:	Create a new layer and add the objects to it.
'------------------------------------------------------------------------------
sub CreateLayer( in_pPreset, in_Name, in_Objects, out_Value )

	Dim  rtn, newLayer

	set rtn = SICreateLayer( in_pPreset, in_Name )
	set newLayer = rtn.value("Value")
	set out_Value = newLayer

 	If Not TypeName (in_Objects) = "Nothing" then		' I.e. not empty
		MoveToLayer newLayer, in_Objects
	End If

	SetCurrentLayer newLayer
	
	if Not TypeName (newLayer) = "Nothing" then
		SelectObj newLayer
		AutoInspect newLayer
	end if
end sub

'------------------------------------------------------------------------------
' NAME:			CreateLayerFromSelection
'
' INPUT:		Preset to base the layer on, name of the layer,
'				objects to add to the new layer,
'				
'
' DESCRIPTION:	Create a new layer and add the objects to it.
'------------------------------------------------------------------------------
sub CreateLayerFromSelection( in_pPreset, in_Name, in_Objects, out_Value )

	Dim  rtn, newLayer

	set rtn = SICreateLayer( in_pPreset, in_Name )
	set newLayer = rtn.value("Value")
	set out_Value = newLayer

 	If Not TypeName (in_Objects) = "Nothing" then		' I.e. not empty
		MoveToLayer newLayer, in_Objects
	End If
end sub

'------------------------------------------------------------------------------
' NAME:			CreateLayerFromSelection2
'
' INPUT:		Preset to base the layer on, name of the layer,
'				objects to add to the new layer, name of the layer group that will
'				contain the layer
'				
'
' DESCRIPTION:	Create a new layer into the specified layer group and add the objects to it.
'------------------------------------------------------------------------------
function CreateLayerFromSelection2( in_pPreset, in_Name, in_Objects, in_LayerGroupName )

	Dim newLayer
	set newLayer = SICreateLayer2( in_pPreset, in_Name, in_LayerGroupName )

 	If Not TypeName (in_Objects) = "Nothing" then		' I.e. not empty
		MoveToLayer newLayer, in_Objects
	End If
	
    set CreateLayerFromSelection2 = newLayer
end function

'------------------------------------------------------------------------------
' NAME:			InspectLayerContainer
' INPUT:		in_inspectionList: not used but required
'
' DESCRIPTION:	Inspect a component object
'------------------------------------------------------------------------------
sub InspectLayerContainer( in_inspectionList )
	dim cont

	cont = FGetValue( "Layers" )

 	If not IsEmpty(cont) then
		InspectObj cont
	End If
end sub

'------------------------------------------------------------------------------
' NAME:			DeleteCurrentLayer
' INPUT:		in_layer : not used but required
'
' DESCRIPTION:	Delete the current layer
'------------------------------------------------------------------------------
sub DeleteCurrentLayer( in_layer )
	DeleteObj FGetCurrentLayer()
end sub

'------------------------------------------------------------------------------
' NAME:			ToggleCurrentLayerProperty
' INPUT:		in_paramname : property name of the visibility pset
'
' DESCRIPTION:	Toggles values of the current layer visibility pset
'------------------------------------------------------------------------------
sub ToggleCurrentLayerProperty( in_paramname )
	set l_Collection = CreateObject("XSI.Collection")
	On Error Resume Next
	l_Collection.Items = FGetCurrentLayer()
	
	ToggleVisibilityParameterOnGroup l_Collection(0), in_paramname, True, True, False
end sub


'------------------------------------------------------------------------------
' NAME:			FaceRobotRouter_ToggleVisibilityParameter
'
' DESCRIPTION:	called by the 'H' key.  Routes to the standard procedure
'               or the face robot one
'------------------------------------------------------------------------------
sub FaceRobotRouter_ToggleVisibilityParameter( in_Objects, in_ParamName, in_bThreeState )

    if  (Application.Desktop.ActiveLayout = "Face Robot")  then
        fr_visible
        logmessage  "ToggleVisibility hotkey calls fr_visible in Face Robot layout", siComment 
    else
        ToggleVisibilityParameter  in_Objects, in_ParamName, in_bThreeState
    end if

end sub


'------------------------------------------------------------------------------
' NAME:			ToggleVisibilityParameter
'
' INPUT:		in_Groups : a list of layers, 3dobjects, 3dgroups or partitions to affect
' INPUT:		in_ParamName : property name of the visibility property
'
' DESCRIPTION:	Toggles values of a object's visibility property. Works in branch
'------------------------------------------------------------------------------
sub ToggleVisibilityParameter( in_Objects, in_ParamName, in_bThreeState )
	Dim l_Group
	Dim l_Groups
	Dim l_SceneObjects

	if in_ParamName = "visibility" then
		ToggleVisibilityParameterFast in_Objects, in_bThreeState
		exit sub
	end if

	set l_SceneObjects = SIFilter( in_Objects, "sceneobject", True )
	set l_Groups = SIFilter( in_Objects, "group,ObjectPartition,LightPartition,Layer", True )

	if Not ( TypeName( l_Groups ) = "Nothing" ) then
		for each l_Group in l_Groups
			ToggleVisibilityParameterOnGroup l_Group, in_ParamName, True, True, in_bThreeState
		next
	end if

	if Not ( TypeName( l_SceneObjects ) = "Nothing" ) then
		for each l_Group in l_SceneObjects
			ToggleVisibilityParameterOnSceneObject l_Group, in_ParamName
		next 
	end if
end sub

'------------------------------------------------------------------------------
' NAME:			LogToggleVisibilityWarning
'
' INPUT:		in_VisibilityProp : The visibility property
' INPUT:		in_strParameter : The visibility property parameter (viewvis or rendvis)
'
' DESCRIPTION:	Log an warning message saying why we cannot change the visibility
'------------------------------------------------------------------------------
sub LogToggleVisibilityWarning( ByRef in_VisibilityProp, in_strParameter, ByRef out_OverridingGroups )

	Dim l_GroupOwners
	Dim l_aGroup, l_aGroupName
	Dim l_Found

	' We need to get the groups that own the object which has this visibility prop
	' When we have them, we can say who is locking the visibility
	set l_GroupOwners = in_VisibilityProp.Parent.Owners.Filter( ,"Groups" )
    
	for each l_aGroup in l_GroupOwners
		' Check if the visibility on the group is set to No effect on member (2)
		if not l_aGroup.Parameters( in_strParameter ).value = 2 then
			l_aGroupName = " " & l_aGroup.Name & ","
			if out_OverridingGroups = "" then
				out_OverridingGroups = l_aGroupName
			else
				l_Found = InStr(out_OverridingGroups, l_aGroupName)
				If l_Found = 0 then
					out_OverridingGroups = out_OverridingGroups & l_aGroupName
				End If
			end if 
		end if
	next
end sub

'------------------------------------------------------------------------------
' NAME:			ToggleVisibilityWithParameter
'
' INPUT:		in_VisibilityProp : The visibility property
'
' DESCRIPTION:	Toggle the visibility parameter. Determine if we can change the
' visibility. If the object is in a group, the group has priority.
'------------------------------------------------------------------------------
sub ToggleVisibilityWithParameter( ByRef in_VisibilityProp, ByRef in_listObject, ByRef out_OverridingGroups )
	Dim l_Caps

	l_Caps = in_VisibilityProp.viewvis.Capabilities
	if (l_Caps And siReadOnly ) then
		' Log a warning message because the value is read-only
		LogToggleVisibilityWarning in_VisibilityProp, "viewvis", out_OverridingGroups
	else
		in_listObject.Add in_VisibilityProp.viewvis
	end if

	l_Caps = in_VisibilityProp.rendvis.Capabilities
	if (l_Caps And siReadOnly ) then
		' Log a warning message because the value is read-only
		LogToggleVisibilityWarning in_VisibilityProp, "rendvis", out_OverridingGroups
	else
		in_listObject.Add in_VisibilityProp.rendvis
	end if

end sub

function GetInvisiblePolygonsCluster( in_Obj )
	dim oGeometry, l_polyVisCluster, l_ClusterProp

	set oGeometry = in_Obj.activeprimitive.geometry

	set l_polyVisCluster = oGeometry.Clusters( siInvisiblePolygonsClusterName )

	if TypeName( l_polyVisCluster ) = "Nothing" then
		set GetInvisiblePolygonsCluster = Nothing
	Else
		set l_ClusterProp = l_polyVisCluster.LocalProperties.find( "clsvisibility" )

		if TypeName( l_ClusterProp ) = "Nothing" then
			' the internal cluster exists but is invalid so let's get rid of it
			DeleteObj l_polyVisCluster
			set GetInvisiblePolygonsCluster = Nothing
		Else
			' let's make sure the viewvis is set to false
			viewvis = GetValue( l_ClusterProp & ".viewvis" )
			if viewvis then
				' the internal cluster exists but is invalid so let's get rid of it
				DeleteObj l_polyVisCluster
				set GetInvisiblePolygonsCluster = Nothing
			else
				set GetInvisiblePolygonsCluster = l_polyVisCluster
			end if
		End if 
	End If
end function

sub HidePolygons( in_Polygons, in_AddOrToggle )
	Dim l_PolygonClusters, l_PolygonsSelected
	Dim l_listNewClusters

	set l_PolygonClusters = SIFilter( in_Polygons, "UserCluster", True )
	set l_PolygonsSelected = SIFilter( in_Polygons, "UserCluster", False )

	set l_listNewClusters = CreateObject("XSI.Collection")

	If Not ( TypeName( l_PolygonClusters ) = "Nothing" ) then

		Dim oCluster
		Dim oSubComponent

		For each l_userCluster in l_PolygonClusters
			Set oCluster = Getvalue( l_userCluster.obj )

			Set oSubComponent = oCluster.CreateSubComponent

			set l_3dobj = oSubComponent.Parent3DObject

			set l_polyVisCluster = GetInvisiblePolygonsCluster( l_3dobj )

			if TypeName( l_polyVisCluster ) = "Nothing" then
				'toggle=add since the cluster doesnt exist
				set l_newClusters = CreateClusterFromSubComponent( oSubComponent, siInvisiblePolygonsClusterName )
				l_listNewClusters.Add l_newClusters(0)
			Else
				if in_AddOrToggle = true then
					SIAddToCluster l_polyVisCluster, oSubComponent
				else
					SITogglePolygonVisibility oSubComponent
				end if
			End if
		Next

	End If

	'------------------------------------------------------
	' Toggle the visibility on the polygon selected in the selection list
	'------------------------------------------------------

	If Not ( TypeName( l_PolygonsSelected ) = "Nothing" ) then

		For each l_tagCluster in l_PolygonsSelected
			Set l_prim = Getvalue( l_tagCluster.obj )
			Set l_3dobj = l_prim.Parent

			set l_polyVisCluster = GetInvisiblePolygonsCluster( l_3dobj )

			if TypeName( l_polyVisCluster ) = "Nothing" then
				'toggle=add since the cluster doesnt exist
				set l_newClusters = CreateClusterFromSubComponent( l_tagCluster, siInvisiblePolygonsClusterName )
				l_listNewClusters.Add l_newClusters(0)
			Else
				if in_AddOrToggle = true then
					SIAddToCluster l_polyVisCluster, l_tagCluster
				else
					SITogglePolygonVisibility l_tagCluster
				end if
			End if
		Next
	End If

	AddVisPropToPolygonCluster l_listNewClusters
end sub

'------------------------------------------------------------------------------
' NAME:			ToggleVisibilityParameterFast
'
' INPUT:		in_Objects : a list of 3D objects
'
' DESCRIPTION:	Toggles values of a object's visibility property. Works in 
' node or branch depending on how the object was selected.
' For performance reasons, all objects to set and to unset are put in a list
' and at the end we call the SetValue task.
'------------------------------------------------------------------------------
sub ToggleVisibilityParameterFast( in_Objects, in_bThreeState )

	Dim l_SceneObjects
	Dim l_Groups
	Dim l_Polygons
	Dim l_obj
	Dim l_vis
	Dim l_SceneObjectColl
	Dim l_newvalue

	set l_SceneObjects = SIFilter( in_Objects, "sceneobject", True )
	set l_Groups = SIFilter( in_Objects, "group,ObjectPartition,LightPartition,Layer", True )
	set l_Polygons = SIFilter( in_Objects, "polygon", True )


	'------------------------------------------------------
	' Toggle the visibility on the groups in the selection list
	'------------------------------------------------------
	If Not ( TypeName( l_Groups ) = "Nothing" ) then
		For each l_Group in l_Groups
			ToggleVisibilityParameterOnGroupFast l_Group, in_bThreeState
		Next
	End if

	'------------------------------------------------------
	' Toggle the visibility on the 3DO in the selection list
	'------------------------------------------------------
	if Not ( TypeName( l_SceneObjects ) = "Nothing" ) then
		Dim l_listObjects
		Dim l_listObjToSet
		Dim l_listObjToUnset

		set l_listObjToSet = CreateObject("XSI.Collection")
		set l_listObjToUnset = CreateObject("XSI.Collection")

		Dim l_OverridingGroups
		l_OverridingGroups = ""
		
		For each l_obj in l_SceneObjects
			set l_vis = GetValue(l_obj & ".visibility" )

			l_newvalue = Not l_vis.viewvis.value
			
			If l_newvalue then
				set l_listObjects = l_listObjToSet
			Else
				set l_listObjects = l_listObjToUnset
			End if
			
			ToggleVisibilityWithParameter l_vis, l_listObjects, l_OverridingGroups

			'------------------------------------------------------
			' If selected in branch Toggle the visibility for the 
			' children
			'------------------------------------------------------
			If l_obj.BranchFlag = siBranch Then
				On Error Resume Next 

				set l_SceneObjectColl = l_obj.FindChildren

				For each l_param in l_SceneObjectColl
					ToggleVisibilityWithParameter l_param.properties("visibility"), l_listObjects, l_OverridingGroups
				Next
			End if
		Next

		If l_OverridingGroups <> "" Then
			LogMessage "Unable to set visibility on some parameters. The following groups are interfering:" & l_OverridingGroups, siWarning
		End if

		'------------------------------------------------------
		' Now do the job, call setvalue on the 2 lists
		'------------------------------------------------------
		SetValue l_listObjToSet, True
		SetValue l_listObjToUnset, False
	End If

	'------------------------------------------------------
	' Toggle the visibility on the polygon clusters in the selection list
	'------------------------------------------------------

	If Not ( TypeName( l_Polygons ) = "Nothing" ) then
		HidePolygons l_Polygons, false
	End If

end sub

'------------------------------------------------------------------------------
' NAME:			AddVisPropToPolygonCluster
'
' INPUT:		in_Objects : a list of polygon clusters or branch or group or layer or partition...
'
' DESCRIPTION:	Adds a polygon-cluster-visibility property to the given objects
'				and force the viewvis and rendvis parameters to be FALSE (ie: not visible)
'
'------------------------------------------------------------------------------
sub AddVisPropToPolygonCluster( in_Objects )

	Dim l_item
	Dim l_listObjToUnset
	Dim l_vis
	Dim l_PropList
	Dim l_Polygons
	Dim l_PolygonClusters
	Dim l_PolygonsSelected
	Dim l_tagCluster
	Dim l_newClusters

	set l_Polygons = SIFilter( in_Objects, "polygon", True )

	If Not ( TypeName( l_Polygons ) = "Nothing" ) then

		set l_PolygonClusters = SIFilter( l_Polygons, "UserCluster", True )
		set l_PolygonsSelected = SIFilter( l_Polygons, "UserCluster", False )

		If Not ( TypeName( l_PolygonsSelected ) = "Nothing" ) then

			set l_newClusters = CreateClusterFromSubComponent( l_PolygonsSelected )

			If TypeName( l_PolygonClusters ) = "Nothing" then
				set l_PolygonClusters = CreateObject("XSI.Collection")
			end if

			For each l_item in l_newClusters
				l_PolygonClusters.add l_item
			Next
		end if

		If Not ( TypeName( l_PolygonClusters ) = "Nothing" ) then

			set l_listObjToUnset = CreateObject("XSI.Collection")
			set l_PropList = CreateObject("XSI.Collection")

			Dim l_OverridingGroups
			l_OverridingGroups = ""

			For each l_item in l_PolygonClusters

				if l_item.name = siInvisiblePolygonsClusterName then
					SIAddProp "Component Visibility", l_item
				else
					l_PropList.add SIAddProp( "Component Visibility", l_item ).value("Value")(0)
				end if

				On Error Resume Next
				set l_vis = GetValue( l_item & ".clsvisibility" )

				if Not TypeName( l_vis ) = "Empty" then
					ToggleVisibilityWithParameter l_vis, l_listObjToUnset, l_OverridingGroups
				end if

			Next
			
			If l_OverridingGroups <> "" Then
				LogMessage "Unable to set visibility on some parameters. The following groups are interfering:" & l_OverridingGroups, siWarning
			End if

			if Not TypeName( l_listObjToUnset ) = "Empty" then
				SetValue l_listObjToUnset, False
			end if

			If Not ( TypeName( l_PropList ) = "Nothing" ) then
				InspectObj l_PropList
			end if

		end if

	end if

end sub

'------------------------------------------------------------------------------
' NAME:			ToggleVisibilityParameterOnSceneObject
'
' INPUT:		in_SceneObject : a list of 3D objects
' INPUT:		in_ParamNames : comma separated list of property names of the visibility properties
'
' DESCRIPTION:	Toggles values of a object's visibility property. Works in 
' node or branch depending on how the object was selected
'------------------------------------------------------------------------------
sub ToggleVisibilityParameterOnSceneObject( in_SceneObject, in_ParamNames )
	Dim l_ParameterList
	Dim l_Parameter
	Dim l_NewVal
	Dim l_CompStr
	
	l_ParameterList = Split( in_ParamNames, ",", 100, vbTextCompare )

	for each l_Parameter in l_ParameterList
		l_CompStr =  in_SceneObject & ".visibility." & l_Parameter

		l_NewVal = Not ( CBool( GetValue( l_CompStr ) = True))
		SetValue l_CompStr, l_NewVal

		if in_SceneObject.BranchFlag = siBranch then

			On Error Resume Next
			
			set in_SceneObjectColl = in_SceneObject.FindChildren

			For each l_param in in_SceneObjectColl
				l_CompStr = l_param & ".visibility." & l_Parameter
				SetValue l_CompStr, l_NewVal
			Next
		end if
	next
end sub

'------------------------------------------------------------------------------
' NAME:			SetVisibilityParameterOnSceneObject
'
' INPUT:		in_SceneObject :  a list of 3D objects
' INPUT:		in_ParamNames : comma separated list of property names of the visibility properties
' INPUT:		in_Value : new value the visibility properties
'
' DESCRIPTION:	Sets the same values for all visibility properties specified by in_ParamNames 
' Works in node or branch depending on how the object was selected
'------------------------------------------------------------------------------
sub SetVisibilityParameterOnSceneObject( in_SceneObject, in_ParamNames, in_Value )
	Dim l_ParameterList
	Dim l_Parameter
	Dim l_NewVal
	Dim l_CompStr
	
	l_ParameterList = Split( in_ParamNames, ",", 100, vbTextCompare )

	for each l_Parameter in l_ParameterList
		l_CompStr =  in_SceneObject & ".visibility." & l_Parameter

		SetValue l_CompStr, in_Value

		if in_SceneObject.BranchFlag = siBranch then
			
			On Error Resume Next
			
			set in_SceneObjectColl = in_SceneObject.FindChildren

			For each l_param in in_SceneObjectColl
				l_CompStr = l_param & ".visibility." & l_Parameter
				SetValue l_CompStr, in_Value
			Next
		end if
	next
end sub

'------------------------------------------------------------------------------
' NAME:			ToggleVisibilityParameterOnGroup
'
' INPUT:		in_Groups : a list of layers, 3dgroups or partitions to affect
' INPUT:		in_ParamNames : comma separated list of property names of the visibility properties
' INPUT:		in_Value : new value the visibility properties
'
' DESCRIPTION:	Sets the same values for all visibility properties specified by in_ParamNames 
' Works in node or branch depending on how the object was selected
'------------------------------------------------------------------------------
sub ToggleVisibilityParameterOnGroup( in_Group, in_ParamNames, in_bAllowRemoveEntry, in_bAllowAddEntry, in_bThreeState  )
	l_ParameterList = Split( in_ParamNames, ",", 100, vbTextCompare )

	'
	' Filter out all subcomponents in the selection
	'
	set l_SubComponentList = SIFilter( in_Group, "group,ObjectPartition,LightPartition,Layer", True )
	if TypeName( l_SubComponentList ) = "Nothing" then
		exit sub
	end if

	for each l_Parameter in l_ParameterList
		l_CompStr = in_Group & "." & l_Parameter 
		l_Value = GetValue( l_CompStr ) 

		if in_bThreeState = True then
			if l_Value = 0 then
				SetValue l_CompStr, 1
			elseif l_Value = 1 then
				SetValue l_CompStr, 2
			elseif l_Value = 2 then
				SetValue l_CompStr, 0
			end if
		else
			if l_Parameter = "ghosting" then
				if l_Value = 0 then
					SetValue l_CompStr, 1
				elseif l_Value = 1 then
					SetValue l_CompStr, 2
				elseif l_Value = 2 then
					SetValue l_CompStr, 1
				end if	
			else
				if l_Value = 0 then
					SetValue l_CompStr, 2
				elseif l_Value = 1 then
					SetValue l_CompStr, 0
				elseif l_Value = 2 then
					SetValue l_CompStr, 0
				end if
			end if
		end if
	next
end sub

'------------------------------------------------------------------------------
' NAME:			ToggleVisibilityParameterOnGroupFast
'
' INPUT:		in_Groups : a list of layers, 3dgroups or partitions to affect
' INPUT:		in_ParamNames : comma separated list of property names of the visibility properties
' INPUT:		in_Value : new value the visibility properties
'
' DESCRIPTION:	Sets the same values for all visibility properties specified by in_ParamNames 
' Works in node or branch depending on how the object was selected
'------------------------------------------------------------------------------
sub ToggleVisibilityParameterOnGroupFast( in_Group, in_bThreeState  )

	Dim l_ViewVis
	Dim l_CompStr 

	l_ViewVis = in_Group & ".viewvis"
	l_Value = GetValue( l_ViewVis ) 

	l_CompStr = l_ViewVis & "," & in_Group & ".rendvis"
	
	if in_bThreeState = True then
		if l_Value = 0 then
			SetValue l_CompStr, 1
		elseif l_Value = 1 then
			SetValue l_CompStr, 2
		elseif l_Value = 2 then
			SetValue l_CompStr, 0
		end if
	else
		if l_Value = 0 then
			SetValue l_CompStr, 2
		elseif l_Value = 1 then
			SetValue l_CompStr, 0
		elseif l_Value = 2 then
			SetValue l_CompStr, 0
		end if
	end if

end sub

'------------------------------------------------------------------------------
' NAME:			UnhideAllProc
' INPUT:		in_groups : objects to unhide (only useful 
' INPUT:		in_paramname : the paramater to affect
'
' DESCRIPTION:	unhided all objects
'------------------------------------------------------------------------------
sub UnhideAllProc( in_ParamNames )
	Dim l_ParameterList
	Dim l_Parameter
	Dim l_AllOverrideList
	
	'
	' For user's convinience introduce pseudo paramater "visibility" to
	' encapsulate view vis and render vis
	'
	if in_ParamNames = "visibility" then
		UnhideAllProc "viewvis,rendvis"
		exit sub
	end if

	l_ParameterList = Split( in_ParamNames, ",", 100, vbTextCompare )

	set l_AllOverrideList = CreateObject("XSI.Collection")
	On Error Resume Next ' in case there's no overrides in the scene

	'
	' Reach partitions overrides
	'
	l_AllOverrideList.Items = "Passes.list.#pass*.#group*"
	UnhideGroup l_AllOverrideList, l_ParameterList

	'
	' Reach layer overrides
	'
	l_AllOverrideList.Items = "Layers.list.#group*"
	UnhideGroup l_AllOverrideList, l_ParameterList

	'
	' Reach scene overrides
	'
	l_AllOverrideList.Items = "*.#Override*"
	RemoveEntriesFromAllOverrides l_AllOverrideList, l_ParameterList

	'
	' Force visibility to True while unhiding
	'
	for each l_Parameter in l_ParameterList
		if l_Parameter = "ghosting" then
			SetValue "*.visibility." & l_Parameter, False
		else
			SetValue "*.visibility." & l_Parameter, True
		end if
	next

end sub

'------------------------------------------------------------------------------
' NAME:			UnhideAllPolygonsProc
'
' DESCRIPTION:	unhide all interactive-hidden polygons on the selected objects
'------------------------------------------------------------------------------
sub UnhideAllPolygonsProc()
	'
	' Delete the "interactive" cluster of hidden polygons
	'
	dim tagCluster
	dim clusterName
	Dim obj, parentObj
	
	For each obj in Selection
	
		if className(obj) = "CollectionItem" then
			set parentObj = obj.SubComponent.Parent3DObject
		elseif obj.IsClassOf( siX3DObjectID ) then
			set parentObj = obj
		else
			set parentObj = obj.Parent3DObject
		end if
		
		clusterName = parentObj.fullname & "." & siPolyMeshType & ".cls." & siInvisiblePolygonsClusterName
		
		set tagCluster = dictionary.getobject( clusterName, false )
		
		if Not TypeName( tagCluster ) = "Nothing" then
			DeleteObj tagCluster
		End If
	Next
end sub

'------------------------------------------------------------------------------
' NAME:			UnhideAllPolygonClustersProc
'
' DESCRIPTION:	unhide all polygon clusters on the selected objects
'------------------------------------------------------------------------------
sub UnhideAllPolygonClustersProc( )
	Dim l_ParameterList
	Dim l_Parameter
	
	l_ParameterList = Split( "viewvis,rendvis", ",", 100, vbTextCompare )

	'
	' Force visibility to True while unhiding
	'
	for each l_Parameter in l_ParameterList
		On Error Resume Next ' in case there's no visibility pset on any cluster on the selected objects
		SetValue ".[obj]." & siPolyMeshType & ".cls.*.clsvisibility." & l_Parameter, True
	next

end sub

'------------------------------------------------------------------------------
' NAME:			UnhideGroup
' INPUT:		in_AllOverrideList : overrides to affect
' INPUT:		in_ParameterList : paramaters to affect
'
' DESCRIPTION:	set the group visibility to 'No effect on members'
'------------------------------------------------------------------------------
sub UnhideGroup ( in_AllGroups, in_ParameterList )

	For Each l_group in in_AllGroups

		For each l_Parameter in in_ParameterList
			On Error Resume Next 
			l_CompStr = l_group & "." & l_Parameter 
			SetValue l_CompStr, 2
		Next
	Next

end sub

'------------------------------------------------------------------------------
' NAME:			RemoveEntriesFromAllOverrides
' INPUT:		in_AllOverrideList : overrides to affect
' INPUT:		in_ParameterList : paramaters to affect
'
' DESCRIPTION:	unhided all objects
'------------------------------------------------------------------------------
sub RemoveEntriesFromAllOverrides( in_AllOverrideList, in_ParameterList )
	Dim l_Override
	Dim l_Parameter

	'
	' If the scene has no overrides - we have nothing to unhide.
	' Note that we won't unhide all objects with visibility hardcoded to False 
	' (default objects like camera & light)
	'
	if in_AllOverrideList.count > 0 then
		set in_AllOverrideList = FilterPSet( in_AllOverrideList, siLocalPset, True )

		'
		' If the scene has no overrides - we have nothing to unhide.
		' Note that we won't unhide all objects with visibility hardcoded to False 
		' (default objects like camera & light)
		'
		if in_AllOverrideList.count > 0 then
		
			for each l_Override in in_AllOverrideList
				for each l_Parameter in in_ParameterList

					l_PathToOverridenParam = l_Override & "." & l_Parameter

					if Exists( l_PathToOverridenParam ) then
						' 
						' Remove parameter from an override
						'
						SIRemoveEntryFromOverride l_PathToOverridenParam
					end if
					'
					' Force visibility to True while unhiding
					'
					SetValue "*.visibility." & l_Parameter, True
				next

				'
				' Get rid of the override if it becomes empty
				'
				DeleteEmptyOverride l_Override
			next
		end if
	end if
end sub

'------------------------------------------------------------------------------
' NAME:			UnhideObjectsProc
' INPUT:		in_groups : objects to unhide
' INPUT:		in_paramname : the paramater to affect
'
' DESCRIPTION:	unhided all objects
'------------------------------------------------------------------------------
sub UnhideObjectsProc( in_Groups, in_ParamNames )
	Dim l_Group
	Dim l_SceneObjects
	Dim l_Groups
	Dim l_ParameterList
	Dim l_Paramater

	if in_ParamNames = "visibility" then
		UnhideObjectsProc in_Groups, "viewvis,rendvis"
		exit sub
	end if

	l_ParameterList = Split( in_ParamNames, ",", 100, vbTextCompare )

	set l_SceneObjects = SIFilter( in_Groups, "sceneobject", True )
	set l_Groups = SIFilter( in_Groups, "group,ObjectPartition,LightPartition,Layer", True )

	'
	' In order to unhide the group we need to set the visibility to no-effect state (2)
	'
	if Not ( TypeName( l_Groups ) = "Nothing" ) then
		for each l_Group in l_Groups
			for each l_Parameter in l_ParameterList
				l_CompStr = l_Group & "." & l_Parameter 
				SetValue l_CompStr, 2
			next
		next
	end if

	'
	' For objects, set the visibility to False
	'
	if Not ( TypeName( l_SceneObjects ) = "Nothing" ) then
		for each l_Group in l_SceneObjects
			SetVisibilityParameterOnSceneObject l_Group, in_ParamNames, True
		next 
	end if

end sub

'------------------------------------------------------------------------------
' NAME:			HideObjectsProc
' INPUT:		in_groups : objects to hide
' INPUT:		in_ParamName : the paramater to affect
'
' DESCRIPTION:	hides objects in in_groups
'------------------------------------------------------------------------------
sub HideObjectsProc( in_Groups, in_ParamNames )
	Dim l_Group
	Dim l_SceneObjects
	Dim l_Groups
	Dim l_ParameterList
	Dim l_Paramater
	Dim l_Polygons, l_PolygonClusters, l_PolygonsSelected
	Dim l_prim
	Dim l_3dobj
	Dim l_userCluster
	Dim l_polyVisCluster
	Dim l_newClusters
	Dim l_tagCluster

	if in_ParamNames = "visibility" then
		HideObjectsProc in_Groups, "viewvis,rendvis"
		exit sub
	end if

	l_ParameterList = Split( in_ParamNames, ",", 100, vbTextCompare )
	set l_SceneObjects = SIFilter( in_Groups, "sceneobject", True )
	set l_Groups = SIFilter( in_Groups, "group,ObjectPartition,LightPartition,Layer", True )
	set l_Polygons = SIFilter( in_Groups, "polygon", True )

	'
	' In order to hide the group we need to set the visibility to hide-members state (0)
	'
	if Not ( TypeName( l_Groups ) = "Nothing" ) then
		for each l_Group in l_Groups
			for each l_Parameter in l_ParameterList
				l_CompStr = l_Group & "." & l_Parameter 
				SetValue l_CompStr, 0
			next
		next
	end if

	'
	' For objects, set the visibility to False
	'
	if Not ( TypeName( l_SceneObjects ) = "Nothing" ) then
		for each l_Group in l_SceneObjects
			SetVisibilityParameterOnSceneObject l_Group, in_ParamNames, False
		next 
	end if

	'------------------------------------------------------
	' Force the visibility to OFF on the polygon clusters in the selection list
	'------------------------------------------------------

	If Not ( TypeName( l_Polygons ) = "Nothing" ) then
		HidePolygons l_Polygons, true
	End If

end sub

'------------------------------------------------------------------------------
' NAME:			HideAndUnselect
' INPUT:		in_groups : objects to hide
' INPUT:		in_paramname : the paramater to affect
'
' DESCRIPTION:	hides all objects and clears the selection
'------------------------------------------------------------------------------
sub HideAndUnselectProc( in_groups, in_paramname )

	HideObjectsProc in_groups, in_paramname
	RemoveFromSelection in_groups

end sub


'------------------------------------------------------------------------------
' NAME:			HideUnselectedProc
' INPUT:		in_groups : objects to hide
' INPUT:		in_paramname : the paramater to affect
'
' DESCRIPTION:	hides all objects and clears the selection
'------------------------------------------------------------------------------
sub HideUnselectedProc( in_Groups, in_ParamName )

	Dim l_Polygons

	set l_Polygons = SIFilter( in_Groups, "polygon", True )

	If Not ( TypeName( l_Polygons ) = "Nothing" ) then

		Dim l_PolygonClusters
		Dim l_PolygonsSelected
		Dim l_cluster, oCluster
		Dim oClsElems
		Dim l_prim, l_3dobj
		Dim l_oNewElem
		Dim oSubComponent

		set l_oNewElem = CreateObject("xsi.collectionitem")

		set l_PolygonClusters = SIFilter( l_Polygons, "UserCluster", True )
		set l_PolygonsSelected = SIFilter( l_Polygons, "UserCluster", False )

		If Not ( TypeName( l_PolygonClusters ) = "Nothing" ) then
			For each l_cluster in l_PolygonClusters
				Set oCluster = Getvalue( l_cluster.obj )
				Set oSubComponent = oCluster.CreateSubComponent

				Set l_3dobj = oCluster.Parent.Parent

				AddToSelection( oSubComponent )
			next

			RemoveFromSelection( l_PolygonClusters )

		end if

		If Not ( TypeName( l_PolygonsSelected ) = "Nothing" and TypeName( l_PolygonClusters ) = "Nothing" ) then
			InvertSelection "polygon"
			SIHideObjects , in_paramname
			' I tried using SelectObj but it had the bad side effect of deactivating (yellow) the object
			SelectGeometryComponents in_Groups
		end if
	else
		InvertSelection "object"
		SIHideObjects , in_paramname
		InvertSelection "object"
	end if

end sub

'------------------------------------------------------------------------------
' NAME:			MoveToCurrentLayer
' INPUT/OUTPUT:	in_layer : not used but required, returns the current layer (for logging)
' INPUT:		in_objects : objects to move in current layer
'
' DESCRIPTION:	move given objects to current layer
'------------------------------------------------------------------------------
sub MoveToCurrentLayer( inout_layer, in_objects )

	MoveToLayer FGetCurrentLayer(), in_objects
	inout_layer = FGetCurrentLayer()
end sub

' helpers
'------------------------------------------------------------------------------
' NAME:			FGetValue
' INPUT:		in_expr : component path
'
' DESCRIPTION:	get the value from a given component path
'------------------------------------------------------------------------------
function FGetValue( in_expr )
	On Error Resume Next
	FGetValue = GetValue( in_expr )	
end function
 
'------------------------------------------------------------------------------
' NAME:			FGetCurrentLayer
'
' DESCRIPTION:	return the current layer
'------------------------------------------------------------------------------

function FGetCurrentLayer()
	dim x
	set x = GetCurrentLayer
	FGetCurrentLayer = x.value("Value")
end function

'------------------------------------------------------------------------------
' NAME:			Exists
'
' DESCRIPTION:	return True if the input parameter represents the path to the
' valid component.
'------------------------------------------------------------------------------
function Exists( in_strComp )
	Dim obj, l_strComp

	set obj = CreateObject("XSI.CollectionItem")

	On Error Resume Next
	obj.value = in_strComp
	l_strComp = obj.value

	Exists =  Not (CStr(l_strComp) = "")

end function

'------------------------------------------------------------------------------
' NAME:		FGetProperties
'
' INPUT:	- in_objs				object with properties
'			- in_branchflag			branch or node properties?
'			- in_current			TRUE: return current props FALSE: Return local
'
' OUTPUT:	- collection of properties
'
' DESCRIPTION: Return object properties
'------------------------------------------------------------------------------
Function FGetProperties( in_obj, in_branchflag, in_current)
	Dim MyPropList, MyBranchFlag

	If in_branchflag = siUnspecified Then
		MyBranchFlag = in_obj.BranchFlag
	else
		MyBranchFlag = in_branchflag
	end If

	Set FGetProperties = Nothing

	' the enumelements might fail.
	On Error Resume Next

	Dim l_iscluster, l_isgroup
	l_iscluster = FBelongsToFamily(in_obj,"Clusters")
	l_isgroup = in_obj.Type = "#Group"

	If in_current Then
		' @devnote need to standardize on where we put current properties
		' elemref supports the TypeName. TypeName comes from the pset 
		' name
		If l_iscluster Then
			Set FGetProperties = EnumElements( in_obj & ".currentprops" )
		elseif l_isgroup Then
			Set FGetProperties = EnumElements( in_obj & ".CurrentProperties" )
		else

			If MyBranchFlag = siNode Then
				Set FGetProperties = EnumElements( in_obj & ".nodecurrent" )
			else
				Set FGetProperties = EnumElements( in_obj & ".branchcurrent" )
			end If
		end If
	Else
		' @devnote need to standardize on where we put local properties
		' elemref supports the TypeName. TypeName comes from the pset 
		' name
		If l_iscluster Then
			Set FGetProperties = EnumElements( in_obj & ".localprops" )
		elseif l_isgroup Then
			Set FGetProperties = EnumElements( in_obj & ".LocalProperties" )
		else
			If MyBranchFlag = siNode Then
				Set FGetProperties = EnumElements( in_obj & ".nodelocal" )
			else
				Set FGetProperties = EnumElements( in_obj & ".branchlocal" )
			end If
		end If
	End If
End Function

'------------------------------------------------------------------------------
' NAME:		FFindProp
'
' INPUT:	- in_objs			object with properties
'			- in_type			property type
'			- in_branchflag		property on branch or node?
'			- in_current		current properties? TRUE: yes, FALSE: local
'
' OUTPUT:	- Collection of matching properties
'
' DESCRIPTION: Return list of all properties of given type.
'------------------------------------------------------------------------------
Function FFindProp( in_obj, in_type, in_branchflag, in_current)
	Dim MyProp, MyPropList

	Set FFindProp = Nothing

	Set MyPropList = FGetProperties( in_obj, in_branchflag, in_current )

	' check node properties
	If Not TypeName(MyPropList) = "Nothing" Then
		For each MyProp in MyPropList
			If StrComp(MyProp.Type, in_type, vbTextCompare) = 0 Then
				If TypeName(FFindProp) = "Nothing" Then
					Set FFindProp = CreateObject("XSI.Collection")
				end If
				FFindProp.Add MyProp
			end If
		next 
	end If
End Function

'------------------------------------------------------------------------------
' NAME:		FBelongsToFamily
'
' INPUT:	- in_obj				object to test
'			- in_family				family to match
'
' OUTPUT:	- collection of properties
'
' DESCRIPTION: Return True if object belongs to family properties
'------------------------------------------------------------------------------
function FBelongsToFamily( in_obj, in_family )
	FBelongsToFamily = _
		(InStr( 1 , in_obj.Families,  in_family, vbTextCompare )> 0)
end function

'------------------------------------------------------------------------------
' NAME:		IsOverriten
'
' INPUT:	- in_VisibilityParamObj paramater 
'
' OUTPUT:	- True if paramater is overriten by an override
'
'------------------------------------------------------------------------------
function IsOverriten( in_VisibilityParamObj )
	dim l_RemainingOverride

	IsOverriten = False

	l_RemainingOverride = in_VisibilityParamObj.FindAttrib( "{A7E8A2D0-769F-11d3-9E90-00A0248F947C}" ) ' GUID_COMPONENT_OVERRIDE_OVERWRITE
	if TypeName(l_RemainingOverride) = "Unknown" then
		IsOverriten = True
	end if
end function

'------------------------------------------------------------------------------
' NAME:		DeleteEmptyOverride
'
' INPUT:	- in_Override			override to delete
'
'
' DESCRIPTION:Delete the override if it becomes empty
'------------------------------------------------------------------------------
sub DeleteEmptyOverride( in_Override )
	Dim l_OverrideEntries

	if TypeName( in_Override ) = "Empty" then
		exit sub
	end if

	on error resume next ' in case if the override doesn't have any entries
	set l_OverrideEntries = CreateObject("XSI.Collection")
	l_OverrideEntries.Items = in_Override & ".entries.*"

	if (TypeName (l_OverrideEntries) = "Nothing" Or l_OverrideEntries.count = 0) then
		DeleteObj in_Override
	end if
end sub
