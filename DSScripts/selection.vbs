'********************************************************************************************
'
' File supervisor : Eric Cabot
' Date :
' (c) Copyright 2000  Softimage Co. All rights reserved.
'
' @doc EXTERNAL
'
' $Archive: $
' $Revision: $  $Date: $
' Checkin by: $Author: $
'
' @module	Selection.vbs | VBS related to Selection features 
'
'********************************************************************************************

' Ensure that all variables are explicitly declared
Option explicit

'******************************************************************************
' DEBUGGING
'******************************************************************************
Dim DiagnosticsEnabled

' DEVNOTE: remove comment to force a break point when script loaded.
'stop

' DEVNOTE: remove comment to enable diagnostic logging
'DiagnosticsEnabled = TRUE

'******************************************************************************
' CONSTANTS
'******************************************************************************


'******************************************************************************
' String Constants (used to translate)
'******************************************************************************
const IDS_SELECT_UVW_MSG_L					= 1130
const IDS_SELECT_UVW_MSG_M					= 1131
const IDS_INT_EDGE_EXT_MSG_LM				= 1132

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
	set l_owners =  EnumElements( CStr(in_obj), FALSE )
	if IsEmpty(l_owners) Or TypeName(l_owners) = "Nothing" Then
		exit function
	end if

	' ..the first of which will be the 'Children' component (ex: cube.Children)
	set l_parent =  EnumElements( CStr(l_owners(0)), FALSE )

	' Protection for when we reach the Scene_Root (parent will be Project)
	if l_parent = "Project" then
		set FGetParentObj = in_obj
		exit function
	end if

	set FGetParentObj = l_parent
end function

'------------------------------------------------------------------------------
' NAME:		FGetRootObj
'
' INPUT:	- in_obj			a 3d object
'
' DESCRIPTION: Returns the root object for the given 3d object, just below
'			   the scene root. If there is any chain element going up, we will
'			   stop for chain roots. This function is used for interactive
'			   navigation within hierarchies.
'
'------------------------------------------------------------------------------
Function FGetRootObj( in_obj )
	Dim l_above, l_root, l_ChainElements

	set FGetRootObj = Nothing

	' if we are already in a chain, return the chain root...
	if ( in_obj.Type = "bone" or in_obj.Type = "eff" ) then

		'Get the effector
		set l_ChainElements = GetSkeleton( in_obj )
		set l_root = l_ChainElements( 0 )
	
	else ' go up..

		set l_root = in_obj
		set l_above = FGetParentObj( in_obj )
		Do While ((Not IsEmpty(l_above)) and TypeName(l_above) <> "Nothing" and l_above <> "Scene_Root" )

			set l_root = l_above
			set l_above = FGetParentObj( l_above )

			' if we meet a chain root, stop and return it
			if ( l_root(0).type = "root" ) then
				exit do
			end if
		Loop
	end if

	set FGetRootObj = l_root
end function

'------------------------------------------------------------------------------
' NAME:		FGetLastObjOrNextEffector
'
' INPUT:	- in_obj			a 3d object
'
' DESCRIPTION: Specialized object navigation function.
'			   Returns the last object in a hierarchy, following
'              the first children pointers down. For chains elements,
'			   allows to navigate between the root and effector,
'			   no matter the structure
'			 
'------------------------------------------------------------------------------
Function FGetLastObjOrNextEffector( in_obj )
	Dim l_below, l_last, l_ChainElements

	set FGetLastObjOrNextEffector = Nothing

	' If we have either a bone or root, we directly go get
	' the effector. Given that the hierarchical structure
	' of chains can vary, we must use the GetSkeleton function
	if ( in_obj.Type = "bone" or in_obj.Type = "root" ) then

		'Get the effector
		set l_ChainElements = GetSkeleton( in_obj )
		set l_last = l_ChainElements( l_ChainElements.Count - 1 )
	
	else	' we are going down the hierarchy, using the first child...

		set l_last = in_obj
		set l_below = FGetChildrenObj( in_obj, True )
		Do While ( (Not IsEmpty(l_below)) and TypeName(l_below) <> "Nothing" and l_below <> l_last )

			' if ever going down we encounter a chain root, 
			' we'll jump straight to the effector
			if ( l_below.Type = "root" ) then

				set l_ChainElements = GetSkeleton( l_below )
				set l_last = l_ChainElements( l_ChainElements.Count - 1 )
				exit do

			else

				' and finally if ever we do end up on an effector
				' we also terminate and return with that object
				set l_last = l_below
				if ( l_last.Type = "eff" ) then
					exit do
				end if

				' else just continue down
				set l_below = FGetChildrenObj( l_below, True )
			end if
		Loop
	end if

	set FGetLastObjOrNextEffector = l_last
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
	 
	set l_ChildrenNodes = EnumElements( CStr(in_obj) & ".Children" )
	
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
' NAME:		FGetSiblingObj
'
' INPUT:	- in_obj			a 3d object
'			- in_previous		returns the previous or the next sibling
'
' DESCRIPTION: Returns the ...
'				THIS FUNCTION IS TEMPORARY, UNTIL WE HAVE THE PROPER METHOD
'				THAT WILL BE IMPLEMENTED WITH THE NEW OBJECT MODEL IN V1.1 
'------------------------------------------------------------------------------
Function FGetSiblingObj( in_obj, in_previous )
	Dim l_children, l_childobj, l_parent, l_index
	
	set FGetSiblingObj = Nothing

	if IsEmpty(in_obj) Or TypeName(in_obj) = "Nothing" Then
		exit function
	end if

	set l_parent = FGetParentObj( in_obj )

	' if the parent is the same as in_obj its because we are at the scene root,
	' return the same node in this case
	if l_parent = in_obj then
		set FGetSiblingObj = in_obj
		exit function
	end if

	set l_children = FGetChildrenObj( l_parent, False )

	' If there's only one child object, next/prev will return the same node
	if l_children.Count = 1 then
		set FGetSiblingObj = in_obj
		exit function
	end if

	for l_index = 0 to l_children.Count
		if ( in_obj = l_children(l_index) ) then
			exit for
		end if
	next

	if ( in_previous = True ) then
		l_index = l_index - 1
	else
		l_index = l_index + 1
	end if
	
	if ( l_index < 0 ) then 
		l_index = l_children.Count - 1
	end if
	if ( l_index > l_children.Count - 1 ) then 
		l_index = 0
	end if
		 
	set l_childobj = l_children( l_index )

	if IsEmpty(l_childobj) Or TypeName(l_childobj) = "Nothing" Then
		exit function
	end if
	
	set FGetSiblingObj = l_childobj
end function

'------------------------------------------------------------------------------
' NAME:		FGetOwningObj
'
' INPUT:	- in_item			a pset or an operator, or something nested under a 3D object
'
' DESCRIPTION: Returns the first 3d object owning a certain pset or operator
'------------------------------------------------------------------------------
Function FGetOwningObj( in_item )
	Dim l_obj, l_test

	set FGetOwningObj = Nothing

	set l_obj =  EnumElements( CStr(in_item), FALSE )

	do while TypeName(l_obj(0)) <> "X3DObject" 

		set l_Obj =  EnumElements( CStr(l_obj(0)), FALSE )

	loop

	set FGetOwningObj = l_obj
end function

'------------------------------------------------------------------------------
' NAME:	SelectNeighborObj
'
' INPUT: - in_obj	:	A 3D object
'		 - in_navdir:   Direction of Navigation...
'		 - in_selmode:  "NODE", "BRANCH", etc...
'		 - in_additive: Do we add to the current selection or not
'
' DESCRIPTION: Selects the desired neighboring 3d object
'------------------------------------------------------------------------------
Sub SelectNeighborObj( in_obj, in_navdir, in_selmode, in_additive )

	Dim	l_children, l_SubCompList, l_newList, l_obj, l_validCompo, l_str, l_direction
	Dim l_PsetList, l_OpList, l_PrimList, l_coll, l_item, l_Owner, l_Owners


	'===============================================================================
	' If the selection contains property sets:
	' - Alt+Up selects the primary owner of the psets.
	' - Alt+Shift+Up selects all of the owners of the psets
	'===============================================================================
	set l_coll = sifilter(in_obj, siPropertyFilter)

	if  (Not IsEmpty(l_coll)) and TypeName(l_coll) <> "Nothing" then

		' Deselect all since we do not want to keep the pset in the selection
		DeselectAll  'temp...

		for each l_item in l_coll

			' This will return the list of objects or groups that
			' point to the pset, through their 'nodecurrent' component.
			set l_Owners =  EnumElements( l_item, FALSE )

			if TypeName(l_Owners) <> "Nothing" Then

				for each l_Owner in l_Owners
				
					' This will get to the owning object/group
					' (at this point l_obj cannot return empty)
					set l_Obj =  EnumElements( l_Owner, FALSE )

					AddToSelection l_Obj

					' If shift isn't pressed, we select only the primary owner (i.e. the 1st one)
					if ( not in_additive ) then
						exit for
					end if
				next

			end if 
		next

		' We are done
		exit sub
	end if

	'===============================================================================
	' If the selection contains either operators or primitives:
	' - Alt+Up selects the primary owner of the psets.
	' - Alt+Shift+Up selects all of the owners of the psets
	'===============================================================================
	set l_OpList   = sifilter(in_obj, siOperatorFilter)
	' #95641 primitive filter not defined.
	'set l_PrimList = sifilter(in_obj, siPrimitiveFilter)

	' Merge all in one collection
	set l_coll = CreateObject("XSI.Collection")
	if (Not IsEmpty(l_OpList)) and TypeName(l_OpList) <> "Nothing" then
		for each l_item in l_OpList
			l_coll.Add CStr(l_item)
		next
	end if
	if (Not IsEmpty(l_PrimList)) and TypeName(l_PrimList) <> "Nothing" then
		for each l_item in l_PrimList
			l_coll.Add CStr(l_item)
		next
	end if

	if (l_coll.count > 0) then

		' Deselect all since we do not want to keep the pset in the selection
		DeselectAll  'temp...

		for each l_item in l_coll

			set l_obj = FGetOwningObj( l_item )

			if TypeName(l_obj) <> "Nothing" Then
				AddToSelection l_Obj
			end if 
		next

		' We are done
		exit sub
	end if

	if Not in_additive Then
		DeselectAll
	end if

	'===============================================================================
	' If the selection contains tagged components:
	' - Alt+Arrows will allow to navigate to the previous/next component.
	' - Alt+Home/End will allow to go to the first/last component
	'===============================================================================
	set l_SubCompList = sifilter(in_obj, siSubComponentFilter)
		
	if (Not IsEmpty(l_SubCompList)) and TypeName(l_SubCompList) <> "Nothing" then

		l_validCompo = False
		set l_newList = Nothing
		if ( l_SubCompList(0).Type = "pntSubComponent" ) then			' Points
			l_str = "Point"
			l_validCompo = True
		elseif ( l_SubCompList(0).Type = "edgeSubComponent" ) then		' Edges
			l_str = "Edge"
			l_validCompo = True
		elseif ( l_SubCompList(0).Type = "polySubComponent" ) then		' Polygons
			l_str = "Polygon"
			l_validCompo = True
		end if

		if ( l_validCompo ) then
			Select Case in_navdir
				Case siNavigUp
					l_direction = siNextCompo
				Case siNavigDown
					l_direction = siPrevCompo
				Case siNavigLeft
					l_direction = siPrevCompo
				Case siNavigRight
					l_direction = siNextCompo
				Case siNavigFirst
					l_direction = siFirstCompo
				Case siNavigLast
					l_direction = siLastCompo
				Case Else
					l_direction = siNextCompo
			End Select

			set l_newList = GetNeighborsFunc(l_SubCompList, l_direction, l_str)

			' Note: possible improvement for the future: We could check if we are
			' selecting in branch mode, and in this case select a range of components.
			' For example, selecting the first compo, followed by Alt+Ctrl+End
			' would select all components up to the end...  Rejean, May 2001
		end if



		if TypeName(l_newList) <> "Nothing" then

			if in_additive then
				AddToSelection l_newList
			else
				SelectObj l_newList
			end if
			
		end if
		
		' We are done
		exit sub
	end if


	'===============================================================================
	' Then we will suppose the selection contains 3D objects:
	' - Alt+Arrows will allow to navigate in the hierarchy.
	' - Alt+Home/End will allow to go to the .. (not implemented yet)
	'===============================================================================
	Dim l_newobjects

	for each l_obj in in_obj

		'-----------------------------------------------------------------------
		' IMPORTANT: 
		' For some reason we cannot understand when i use the enum type
		' in the Command map file, i receive the value 9 instead of 0
		' for siUp, this seems to be a bug at the parameter passing
		' time, because siUp is well defined.
		' I will open a bug for Simon about this
		'-----------------------------------------------------------------------
		Select Case in_navdir
			Case siNavigUp
				set l_newobjects = FGetParentObj( l_obj )
				' Don't navigate to scene root
				if l_newobjects = "Scene_Root" then
					set l_newobjects = l_obj
				end if
			Case siNavigDown
				set l_newobjects = FGetChildrenObj( l_obj, True )
			Case siNavigLeft
				set l_newobjects = FGetSiblingObj( l_obj, True )
			Case siNavigRight
				set l_newobjects = FGetSiblingObj( l_obj, False )
			Case siNavigFirst
				set l_newobjects = FGetRootObj( l_obj )
			Case siNavigLast
				set l_newobjects = FGetLastObjOrNextEffector( l_obj )
			Case Else
				set l_newobjects = FGetChildrenObj( l_obj, True )
		End Select

		if Not (IsEmpty(l_newobjects) Or TypeName(l_newobjects) = "Nothing") Then

			' Prevent AddToSelection to throw an error if the object is
			' *already* selected. This is needed for when we are in additive
			' selection mode.
			On Error Resume Next
			AddToSelection l_newobjects, in_selmode
		end if
	next
end sub




'******************************************************************************
' ADJACENT & GROW SELECTION SUBROUTINES 
'******************************************************************************
'------------------------------------------------------------------------------
' NAME:			GetNeighborsFunc
'
' INPUT:		in_inputObjs : list of subcomponents
'				in_eArg : enum flag to specify adjacent or grow neighboring
'				in_sGeometryType :	string containing the geometry type of the 
'									neighbors to find
'
' DESCRIPTION:  Get the components neighbors to the input components in a
'				heterogeneous fashion.
'
'------------------------------------------------------------------------------
function GetNeighborsFunc( in_inputObjs, in_eArg, in_sGeometryType )
	Dim l_SubCompList, l_sType, l_aNeighbors, l_aElements, l_oNeighbors, _
		l_Subcomp, l_oNewElem

	set l_SubCompList = Nothing
	set l_oNeighbors = Nothing
	set l_aNeighbors = Nothing
	
	'First, do we indeed HAVE input objects to process? 
	if TypeName(in_inputObjs) <> "Nothing" then

		for each l_Subcomp in in_inputObjs
			
			'Get the array of element from the elementref. 
			l_aElements = l_Subcomp.SubElements2
			
			'Make sure the safearray REALLY has something in it.
			'Check for "Empty" And "Nothing".
			if (TypeName(l_aElements) <> "Empty") And (TypeName(l_aElements) <> "Nothing") then
				
				'Store the type of the elementref's encapsulated component.
				l_sType = l_Subcomp.Type
				
				'Get the neighbors according to the type.		
				set l_aNeighbors = Nothing

				'Get the 0D,1D and 2D geometry proxy for this object.
				Dim l_Geometry, l_Geometry0D, l_Geometry1D, l_Geometry2D
				
				set l_Geometry = l_SubComp.obj
				set l_Geometry0D = l_Geometry.Geometry0D
				set l_Geometry1D = l_Geometry.Geometry1D
				set l_Geometry2D = l_Geometry.Geometry2D

				'The proxy needs to be valid.
				if TypeName(l_Geometry) <> "Nothing" then
				
					'If we request 0D neighbors, or points, then call the appropriate method.
					if in_sGeometryType = "Point" then
						
						select case l_sType
							case l_Geometry.Geometry0D.Type
								l_aNeighbors = l_Geometry0D.Neighbors0D(l_aElements,1,in_eArg)
							case l_Geometry.Geometry1D.Type
								l_aNeighbors = l_Geometry1D.Neighbors0D(l_aElements,1)
							case l_Geometry.Geometry2D.Type
								l_aNeighbors = l_Geometry2D.Neighbors0D(l_aElements,1)
						end select
					
					'If we request 1D neighbors, or edges, then call the appropriate method.
					elseif in_sGeometryType = "Edge" then
						
						select case l_sType
							case l_Geometry.Geometry0D.Type
								l_aNeighbors = l_Geometry0D.Neighbors1D(l_aElements,1)
							case l_Geometry.Geometry1D.Type
								l_aNeighbors = l_Geometry1D.Neighbors1D(l_aElements,1,in_eArg)
							case l_Geometry.Geometry2D.Type
								l_aNeighbors = l_Geometry2D.Neighbors1D(l_aElements,1)
						end select

					'If we request 2D neighbors, or polygons, then call the appropriate method.
					elseif in_sGeometryType = "Polygon" then

						select case l_sType
							case l_Geometry.Geometry0D.Type
								l_aNeighbors = l_Geometry0D.Neighbors2D(l_aElements,1)
							case l_Geometry.Geometry1D.Type
								l_aNeighbors = l_Geometry1D.Neighbors2D(l_aElements,1)
							case l_Geometry.Geometry2D.Type
								l_aNeighbors = l_Geometry2D.Neighbors2D(l_aElements,1,in_eArg)
						end select

					end if

				end if
				
				'Make sure the safearray REALLY has something in it.
				'Check for "Empty" And "Nothing".
				if (TypeName(l_aNeighbors) <> "Empty") And (TypeName(l_aNeighbors) <> "Nothing") then
					
					'Create a new elementref and store the found neighbors in it.
					set l_oNewElem = CreateObject("xsi.collectionitem")
					
					'Little tricky part : we initialise the collection item by setting his value
					'with the sub component name and type of indices (points, edges or polygons)
					'For example, the equivalent might be for a grid : l_oNewElem.Value = "grid.pnt[0]"
					dim l_strNewElem

					'''''''''''''''''''''''''''''''''''''''''''''''''
					' l_SubComp is currently:
					'	[model_name.]object_name.component_type[set_of_indices]
					' where:
					'	- model_name is the name of the model owning the 3D object, but is not
					'		specified in the case of the default model (Scene_Root).
					'	- object_name is the name of the 3D object.
					'	- component_type is one of "pnt", "edge" or "poly".
					'	- set_of_indices is a set of integer numbers separated by commas or
					'		hyphens (in the case of a range).
					'
					' We want to extract the left part of the string up to the '.' preceding
					' the component_type, and then afterwards concatenate on the appropriate
					' subcomponent type.
					'''''''''''''''''''''''''''''''''''''''''''''''''
					l_strNewElem = Left( l_Subcomp, InStrRev( l_Subcomp, "." ) )

					if in_sGeometryType = "Point" then
						l_strNewElem = l_strNewElem & "pnt[0]"
					elseif in_sGeometryType = "Edge" then
						l_strNewElem = l_strNewElem & "edge[0]"
					elseif in_sGeometryType = "Polygon" then
						l_strNewElem = l_strNewElem & "poly[0]"
					end if

					l_oNewElem.Value = l_strNewElem
					
					'Set the collection item internal elements with the neighbor array.
					l_oNewElem.SubElements = l_aNeighbors
					
					'Create the return neighbors list.
					if TypeName(l_oNeighbors) = "Nothing" then
						set l_oNeighbors = CreateObject("XSI.Collection")
					end if
					l_oNeighbors.Add l_oNewElem
				end if

			end if
		next
	
	end if

	set GetNeighborsFunc = l_oNeighbors

end function



'------------------------------------------------------------------------------
' NAME:			SelectAdjacentProc
'
' INPUT:		in_inputObjs : list of subcomponents
'				in_sSelFilter : string containing the geometry type of the 
'									neighbors to find and select
'				in_bAddToSelection : boolean flag stating if we add to the current
'									 selection or only select the new sub elements.
'
' DESCRIPTION:  Select the components adjacent to the input components
'				and deselect the input components that are not of the same type as 
'				in_sSelFilter if the heterogeneous input flag is set to False
'
'------------------------------------------------------------------------------
sub SelectAdjacentProc( in_inputObjs, in_sSelFilter, in_bAddToSelection )
	Dim l_SubCompList, l_ClusterList, l_ClusterComponents, l_List, l_SubComp

	'Make sure we only send sub components to GetNeighborsFunc.
	set l_SubCompList = sifilter(in_inputObjs, siSubComponentFilter)

	set l_ClusterList = sifilter( in_inputObjs, siClusterFilter )

	if Not TypeName( l_ClusterList ) = "Nothing" Then
		' lets make sure the CLUSTER button is turned back to OFF
		' as the user is now in component selection
		SetUserPref "SI3D_GROUP_SEL_MODE" , CByte(0)

		' now lets add the members of the clusters to our list
		set l_ClusterComponents = SelectMembers( l_ClusterList, FALSE )
		if Not TypeName( l_ClusterComponents ) = "Nothing" Then
			if TypeName( l_SubCompList ) = "Nothing" Then
				set l_SubCompList = CreateObject("XSI.Collection")					
			end if

			for each l_SubComp in l_ClusterComponents
				l_SubCompList.Add(l_SubComp)
			next
		end if
	end if
	
	'Get the adjacent 0D neighbors
	set l_List = GetNeighborsFunc(l_SubCompList, siAdjacent, in_sSelFilter)

	if TypeName(l_List) <> "Nothing" then

		'Check if we want to add the new subcomp to the current selection
		'or only select the new subcomps.
		if in_bAddToSelection = True then
			AddToSelection l_List
		else
			SelectObj l_List
		end if

		SetSelFilter in_sSelFilter		
	end if
end sub


'------------------------------------------------------------------------------
' NAME:			ConvertSelectionProc
'
' INPUT:		in_inputObjs : list of subcomponents
'				in_sSelFilter : string containing the geometry type of the 
'									neighbors to find and select
' DESCRIPTION:  Convert the selection to another type by selecting adjacent components.
'               If the selection is already the correct type then it will not be changed
'
'------------------------------------------------------------------------------
sub ConvertSelectionProc( in_inputObjs, in_sSelFilter )
	Dim l_SubCompList, l_ClusterList, l_ClusterComponents, l_List, l_List1, l_List2, l_SubComp, l_aElements

	'Make sure we only send sub components to GetNeighborsFunc.
	set l_SubCompList = sifilter(in_inputObjs, siSubComponentFilter)
	set l_ClusterList = sifilter( in_inputObjs, siClusterFilter )

	if Not TypeName( l_ClusterList ) = "Nothing" Then
		' lets make sure the CLUSTER button is turned back to OFF
		' as the user is now in component selection
		SetUserPref "SI3D_GROUP_SEL_MODE" , CByte(0)

		' now lets add the members of the clusters to our list
		set l_ClusterComponents = SelectMembers( l_ClusterList, FALSE )
		if Not TypeName( l_ClusterComponents ) = "Nothing" Then
			if TypeName( l_SubCompList ) = "Nothing" Then
				set l_SubCompList = CreateObject("XSI.Collection")					
			end if

			for each l_SubComp in l_ClusterComponents
				l_SubCompList.Add(l_SubComp)
			next
		end if
	end if
	
	'Process subcomponents
	set l_List = CreateObject("XSI.Collection")
	if TypeName(l_SubCompList) <> "Nothing" then
		for each l_SubComp in l_SubCompList
			'Get the array of element from the elementref. 
			l_aElements = l_Subcomp.SubElements2
			
			'Make sure the safearray REALLY has something in it.
			'Check for "Empty" And "Nothing".
			if (TypeName(l_aElements) <> "Empty") And (TypeName(l_aElements) <> "Nothing") then
				' Only select adjacent components if the type of the subcomponent is different than the one passed in
				if ( in_sSelFilter = "Point" And l_SubComp.Type <> "pntSubComponent" ) Or ( in_sSelFilter = "Edge" And l_SubComp.Type <> "edgeSubComponent" ) Or ( in_sSelFilter = "Polygon" And l_SubComp.Type <> "polySubComponent" ) then
					set l_List1 = CreateObject("XSI.Collection")
					l_List1.Add( l_SubComp )
					set l_List2 = GetNeighborsFunc(l_List1, siAdjacent, in_sSelFilter)
					if TypeName(l_List2) <> "Nothing" then
						l_List.AddItems( l_List2 )
					end if
				else
					l_List.Add( l_SubComp )
				end if
			end if			
		next
	end if

	if TypeName(l_List) <> "Nothing" then
		SelectObj l_List
		SetSelFilter in_sSelFilter		
	end if
end sub


'------------------------------------------------------------------------------
' NAME:			GrowSelectionProc
'
' INPUT:		list of subcomponents
'				
' DESCRIPTION:  -Select the unselected surrounding neighbors of the 
'				same type (0D,1D or 2D)	as the input components
'				-In the case of an heterogeneous selection, we parse the input 
'				 list into homogeneous lists on which we call 
'				 GetNeighbors with the siGrow argument and the appropriate
'				 selection filter type 
'				
'------------------------------------------------------------------------------
sub GrowSelectionProc( in_inputObjs )
	Dim l_SubCompList, l_0DList, l_1DList, l_2DList, l_SubComp
	Dim l_ClusterList, l_ClusterComponents
	
	set l_SubCompList = Nothing

	'Make sure we only parse sub components.
	set l_SubCompList = sifilter(in_inputObjs, siSubComponentFilter)
	
	set l_ClusterList = sifilter( in_inputObjs, siClusterFilter )

	if Not TypeName( l_ClusterList ) = "Nothing" Then
		' lets make sure the CLUSTER button is turned back to OFF
		' as the user is now in component selection
		SetUserPref "SI3D_GROUP_SEL_MODE" , CByte(0)

		' now lets add the members of the clusters to the selection
		set l_ClusterComponents = SelectMembers( l_ClusterList, FALSE )
		if Not TypeName( l_ClusterComponents ) = "Nothing" Then
			if TypeName( l_SubCompList ) = "Nothing" Then
				set l_SubCompList = CreateObject("XSI.Collection")					
			end if

			for each l_SubComp in l_ClusterComponents
				l_SubCompList.Add(l_SubComp)
			next

		end if
	end if

	if TypeName(l_SubCompList) <> "Nothing" then
		'Initialise 3 homogeneous list to Nothing.
		set l_0DList = Nothing
		set l_1DList = Nothing
		set l_2DList = Nothing
	
		'Parsing the heterogeneous list into 3 homogeneous lists 
		'for each elementref, look if it has 0D ,1D or 2D subcomponent in its internal data
		for each l_SubComp in l_SubCompList
				
			'Get the 0D,1D and 2D proxy.
			Dim l_Geometry, l_Geometry0D, l_Geometry1D, l_Geometry2D
				
			set l_Geometry = l_SubComp.obj
			set l_Geometry0D = l_Geometry.Geometry0D
			set l_Geometry1D = l_Geometry.Geometry1D
			set l_Geometry2D = l_Geometry.Geometry2D
			
			if TypeName(l_Geometry) <> "Nothing" then
				
				'Put the sub component in subcomponent homogeneous lists according to their geometry.
				if l_SubComp.Type = l_Geometry0D.Type then
					
					if TypeName(l_0DList) = "Nothing" then	
						set l_0DList = CreateObject("XSI.Collection")					
					end if
					
					l_0DList.Add(l_SubComp)					
				
				elseif l_SubComp.Type = l_Geometry1D.Type then
				
					if TypeName(l_1DList) = "Nothing" then	
						set l_1DList = CreateObject("XSI.Collection")					
					end if
					
					l_1DList.Add(l_SubComp)

				elseif l_SubComp.Type = l_Geometry2D.Type then
					
					if TypeName(l_2DList) = "Nothing" then	
						set l_2DList = CreateObject("XSI.Collection")					
					end if
					
					l_2DList.Add(l_SubComp)
					
				end if
			
			end if
				
		next

		'3 different list of 0D, 1D and 2D neighbors to send to GetNeighborsFunc.
		Dim l_0DNeighbors, l_1DNeighbors, l_2DNeighbors
		
		'Then call the appropriate routine for each list.
		if TypeName(l_0DList) <> "Nothing" then

			set l_0DNeighbors = GetNeighborsFunc(l_0DList, siGrow, "Point")
						
			if TypeName(l_0DNeighbors) <> "Nothing" then
				SelectObj(l_0DNeighbors)
			end if
		
		end if

		if TypeName(l_1DList) <> "Nothing" then
			
			set l_1DNeighbors = GetNeighborsFunc(l_1DList, siGrow, "Edge")
			
			if TypeName(l_1DNeighbors) <> "Nothing" then
				SelectObj(l_1DNeighbors)
			end if
		
		end if

		if TypeName(l_2DList) <> "Nothing" then
			
			set l_2DNeighbors = GetNeighborsFunc(l_2DList, siGrow, "Polygon")
			
			if TypeName(l_2DNeighbors) <> "Nothing" then
				SelectObj(l_2DNeighbors)
			end if
		
		end if

	end if
		
end sub

'------------------------------------------------------------------------------
' NAME:			ShrinkSelectionProc
'
' DESCRIPTION:  Shrink the subcomponent selection using the current selection filter
'
'------------------------------------------------------------------------------
sub ShrinkSelectionProc ()
	Dim l_SubCompList, l_SubComp, l_SubCompType, l_oDeselect
	Dim i, l_Edge, l_Edges, l_aBoundaryEdges()
	Dim l_oTmpElem, l_strTmpElem, l_aBoundaryElements
	Dim l_Geometry, l_Geometry1D, l_aNeighbors

	' Use the invert and grow selection trick
	InvertSelection
	GrowSelection
	InvertSelection

	' Followed by a cleanup pass to remove any selected edge components
	set l_SubCompList = SIFilter(GetValue("SelectionList"), siSubComponentFilter)

	if TypeName(l_SubCompList) <> "Nothing" then
		for each l_SubComp in l_SubCompList
			set l_Edges = l_SubComp.SubComponent.Parent3DObject.ActivePrimitive.Geometry.Edges
			l_SubCompType = l_SubComp.Type

			' Find all boundary edges
			Redim l_aBoundaryEdges(0)
			for each l_Edge in l_Edges 
				if l_Edge.IsBoundary then
					PushArray l_aBoundaryEdges, l_Edge.Index
				end if
			next 

			' Do we have any boundary edges?
			if ArraySize(l_aBoundaryEdges) > 0 then
				' Get neighboring components for boundary edges
				set l_Geometry   = l_SubComp.obj
				set l_Geometry1D = l_Geometry.Geometry1D
				l_aBoundaryElements = l_aBoundaryEdges

				if TypeName(l_Geometry) <> "Nothing" then
					if l_SubCompType = "pntSubComponent" then
						l_aNeighbors = l_Geometry1D.Neighbors0D(l_aBoundaryElements,1)
					elseif l_SubCompType = "edgeSubComponent" then
						l_aNeighbors = l_aBoundaryElements
					elseif l_SubCompType = "polySubComponent" then
						l_aNeighbors = l_Geometry1D.Neighbors2D(l_aBoundaryElements,1)
					end if
				end if
				
				' Add boundary elements to our deselect list	
				if (TypeName(l_aNeighbors) <> "Empty") And (TypeName(l_aNeighbors) <> "Nothing") then
					' Add components to list of subcomponents to deselect
					set l_oTmpElem = CreateObject("xsi.collectionitem")
					l_strTmpElem = Left( l_SubComp, InStrRev( l_SubComp, "." ) )
					if l_SubCompType = "pntSubComponent" then
						l_strTmpElem = l_strTmpElem & "pnt[0]"
					elseif l_SubCompType = "edgeSubComponent" then
						l_strTmpElem = l_strTmpElem & "edge[0]"
					elseif l_SubCompType = "polySubComponent" then
						l_strTmpElem = l_strTmpElem & "poly[0]"
					end if

					l_oTmpElem.Value = l_strTmpElem
					l_oTmpElem.SubElements = l_aNeighbors
					if (TypeName(l_oDeselect) = "Empty") Or (TypeName(l_oDeselect) = "Nothing") then
						set l_oDeselect = CreateObject("XSI.Collection")
					end if
					l_oDeselect.Add l_oTmpElem
				end if
			end if
		next

		' Deselect boundary components
		if (TypeName(l_oDeselect) <> "Empty") And (TypeName(l_oDeselect) <> "Nothing") then
			RemoveFromSelection l_oDeselect
		end if
	end if 
end sub


'------------------------------------------------------------------------------
' NAME:			BuildUVRowSelectionString
'
' INPUT:		- in_str	' picked points
'				- in_doV	' if True build string to select V row, U row otherwize
' OUTPUT:		New string
'				
' DESCRIPTION:  - Builds a new selection string from picked points to select U or V rows 
'			
'------------------------------------------------------------------------------
function BuildUVRowSelectionString( in_str, in_doV )
	Dim l_objstr, l_compostr, l_str, l_rstr, l_workstr
	Dim i, l_offset, l_parstart, l_parend, l_comma1pos, l_comma2pos, l_leftcutpos
	Dim	l_bInsidepar, l_bFound1stcomma, l_bValid

	BuildUVRowSelectionString = ""
	l_bInsidepar = False
	l_bFound1stcomma = False
	l_bValid = False
	l_offset = 0
	l_str = ""

	'---------------------------------------------------------------------
	' First step is to extract the portion up to the opening squre bracket
	' Ex:  obj.pnt[(1,2)] or obj.pnt[(1,4,6)] or obj.pnt[(1,2),(1,3)]
	' We will keep it on the side (l_objstr), the rest will be the
	' component string we analyze.
	'---------------------------------------------------------------------
	for i = 1 to len(in_str)
		if Mid( in_str, i, 1 ) = "[" then
			l_objstr = Left( in_str, i )
			l_compostr = Right( in_str, len(in_str) - i )
			exit for
		end if
	next
	

	'---------------------------------------------------------------------
	' Go through all the picked components from left to right
	'---------------------------------------------------------------------	
	for i = 1 to len(l_compostr)
		
		'----------------------------------------------------------
		' Check when we enter a parenthesis  ex: (1,2) or (4,6,4)
		'----------------------------------------------------------
		if Mid( l_compostr, i, 1 ) = "(" then
			l_bInsidepar = True
			l_parstart = i - l_offset
		end if

		'----------------------------------------------------------
		' Then we find a comma...
		'----------------------------------------------------------
		if Mid( l_compostr, i, 1 ) = "," then
			'----------------------------------------------------------
			' If we are inside a parenthesis, it's because we reached
			' the comma as in (1,2) or (4,6,4)
			'----------------------------------------------------------
			if l_bInsidepar then
				'----------------------------------------------------------
				' If we have already found a 1st comma, it means we are
				' selecting on a surface mesh (or a lattice, it works)
				' as in obj.pnt(1,2,3)
				'----------------------------------------------------------
				if l_bFound1stcomma then
					l_comma2pos = i - l_offset
				else
					'----------------------------------------------------------
					' If not, it's the first comma we find, keep track of where it is
					'----------------------------------------------------------
					l_comma1pos = i - l_offset
					l_comma2pos = i - l_offset
					l_bFound1stcomma = True
				end if

			else
				'----------------------------------------------------------
				' If we are not inside a parenthesis, it's because we are
				' between two picked components as in (1,2),(3,4)
				' We will retain this location as an offset for our 
				' string manipulation (l_offset)
				'----------------------------------------------------------
				l_offset = i

				'----------------------------------------------------------
				' As we have multiple points picked, we may have to select 
				' multiple rows, add a separating comma to our final string
				'----------------------------------------------------------
				l_str = l_str & ","
			end if
		end if

		'--------------------------------------------------------------------
		' Ok finally we're hitting the end of the parenthesis, we can massage
		' that picked component string up to here. First take note where the 
		' closing parenthesis is, then reset our tracking booleans.
		'--------------------------------------------------------------------
		if Mid( l_compostr, i, 1 ) = ")" then
			l_bInsidepar = False
			l_bFound1stcomma = False
			l_bValid = True   ' the str we get is valid only if we found a parenthesis somewhere!
			l_parend = i - l_offset

			l_workstr = Right( l_compostr, len( l_compostr ) - l_offset )

			'---------------------------------------------------------
			' Different processing if we are selecting U or V rows
			'---------------------------------------------------------
			if ( in_doV ) then

				'----------------------------------------------------------
				' So we keep the left part up to the comma that separates the U and V,
				' and replace the V id by '*' plus the closing parenthesis. 
				' For example  (8,4),(9,4)] -> (8,*)   or (1,8,4)] -> (1,8,*)
				'----------------------------------------------------------				' 
				l_str = l_str & Left( l_workstr, l_comma2pos ) & "*)" 

			else
				'----------------------------------------------------------				' 
				' Here we first have to determine the left part of the work string to
				' keep ex: with (8,4) we keep up to the left parenthesis, but with
				' (1,8,4) we keep up to the first comma
				'----------------------------------------------------------				' 
				if ( l_comma1pos = l_comma2pos ) then
					l_leftcutpos = l_parstart
				else
					l_leftcutpos = l_comma1pos
				end if

				'----------------------------------------------------------				' 
				' Then as we replace the U or middle number by a star, we must concatenate
				' with what follows in the string, up to the closing parenthesis
				' 1) right(..) takes  (1,8,4),(1,8,5)] -> ,4),(1,8,5)]
				' 2) left(..) then keeps ,4) from that
				' 3) so we have (1,8,4),(1,8,5)] -> (1,*,4)
				'----------------------------------------------------------				' 
				l_rstr = Left( Right( l_compostr, (len(l_workstr) - l_comma2pos) + 1 ), (l_parend - l_comma2pos) + 1 )
				l_str = l_str & Left( l_workstr, l_leftcutpos ) & "*" & l_rstr

			end if
		end if
	next

	'------------------------------------------------------------------------------------------
	' Return the result, concatenating the initial part we kept (object string ex: obj.pnt[ )
	' with the new component string and the final closing bracket. ouf.
	'------------------------------------------------------------------------------------------
	if l_bValid and l_str <> "" then
		BuildUVRowSelectionString = l_objstr & l_str & "]"
	end if
end function

'------------------------------------------------------------------------------
' NAME:		SelectUVRowProc
'
'
' DESCRIPTION: UI script that triggers a picking loop to pick U or V rows on surfaces
'------------------------------------------------------------------------------
Sub SelectUVRowProc()

	Dim inPoints, l_mousebtn, l_modifier, l_pickedstr, l_selstr

	' Set the filter so we're selecting points only
	SetSelFilter "Point"

	While True	
		
		' Ask the user to pick a point using the LMB or RMB
		PickElement "Point", XSIUtils.Translate( IDS_SELECT_UVW_MSG_L, "XSISCRIPTS" ), XSIUtils.Translate( IDS_SELECT_UVW_MSG_M, "XSISCRIPTS" ), l_pickedstr, l_mousebtn, , l_modifier 

		' Quit if RMB is pressed
		if l_mousebtn = 0 then
			exit sub
		end if
	

		l_selstr = BuildUVRowSelectionString( CStr(l_pickedstr), (l_mousebtn = 1) )

		' If the strings comes back empty it's because we didn't find the type
		' of selection string we expected
		if ( l_selstr = "" ) then
			logmessage "Please pick one or more point(s) on a surface or surface mesh."
		else

			Select Case l_modifier
				Case 0						' no modifier
					SelectObj l_selstr
				Case 1						' Shift
					AddToSelection l_selstr
				Case 2						' Ctrl
					ToggleSelection l_selstr
				Case 3						' Shift + Ctrl
					RemoveFromSelection l_selstr
				Case Else
					SelectObj l_selstr
			End Select

		end if	

	wend

end Sub

'------------------------------------------------------------------------------
' NAME:		SelectNSidedPolygonProc
'
'(c) 2002 Martin Barrette / Rejean Gagne
'
' DESCRIPTION: 
'------------------------------------------------------------------------------
sub SelectNSidedPolygonProc( in_objs, in_nbside, in_exact )

	Dim oMesh, oSubComponent, oPolygons, Polygon, in_obj, l_obj, oColl, i, l_str, l_objstr
	Dim l_found_some, l_first

	if IsEmpty(in_objs) Or TypeName(in_objs) = "Nothing" Then
		logmessage "Invalid Selection. Please select one or more polygon meshes first"
		exit sub
	end if

	l_first = True
	
	for each in_obj in in_objs
		
		'---------------------------------------------------------------------
		' If we are already in a subcomponent selection mode, the selection 
		' list will contain CollectionItems
		'---------------------------------------------------------------------
		if typename(in_obj) = "CollectionItem" then
		    set l_obj = in_obj.SubComponent.Parent3DObject
		else
		    set l_obj = in_obj
		end if 

		if l_obj.type = "polymsh" then

			set oMesh = l_obj.ActivePrimitive.Geometry
			set oSubComponent = oMesh.CreateSubComponent(siPolygonCluster)

			l_found_some = False

			set oPolygons = oMesh.Polygons
			for each Polygon in oPolygons

				if in_exact then
					if Polygon.Points.Count = in_nbside then
						oSubComponent.AddElement Polygon.Index
						l_found_some = True
					end if
				else
					if Polygon.Points.Count >= in_nbside then
						oSubComponent.AddElement Polygon.Index
						l_found_some = True
					end if
				end if

			next


			if l_found_some then
				if l_first then
					DeselectAll
					l_first = False
				end if
				AddToSelection OSubComponent
			end if

		end if

	next

	if not l_first then  ' mean we have found polygons
		SetSelFilter "Polygon"
	else
		logmessage "No such polygon found."
	end if

end sub

'------------------------------------------------------------------------------
' NAME:		GetSelectedEdges
'
'(c) 2003 Andre Foisy SOFTIMAGE R&D
'
' DESCRIPTION: Just filter out the tag edges.
'------------------------------------------------------------------------------
Function GetSelectedEdges( in_List )
	Dim l_Edges, l_TagEdges

	set GetSelectedEdges = Nothing

	if Typename( in_List ) = "Nothing" then
		exit Function
	end if

	' Filter to get edges.
	set l_Edges = SIFilter( in_List, "edge", True )

	if Typename( l_Edges ) = "Nothing" then
		exit Function
	end if

	set l_TagEdges = SIFilter( l_Edges, "UserCluster", False )

	if Typename( l_TagEdges ) = "Nothing" then
		exit Function
	end if

	set GetSelectedEdges = l_TagEdges
	
End Function

'------------------------------------------------------------------------------
' NAME:		SelectOrExtendEdgeSelection
'
'(c) 2003 Andre Foisy SOFTIMAGE R&D
'
' DESCRIPTION: If nothing selected start picking and co.  If something selected just 
' extend edge selection...
'------------------------------------------------------------------------------
Sub SelectOrExtendEdgeSelection( in_List, in_Method )

	Dim l_Edges, l_TagEdges, l_Tag
	Dim lut0D1D, lut0D2D, lut1D2D
	Dim oGeom, oItem
	Dim l_EdgeList

	set l_TagEdges = GetSelectedEdges( in_List )

	'If you want to apply to the selection before going to picking...
	'
	'if Typename( l_TagEdges ) <> "Nothing" then
	'	for each l_Tag in l_TagEdges
	'		set oGeom = l_Tag.obj
	'		Set oItem = GetObjectFromSubComponent(l_Tag)

	'		lut0D1D = Get0D1DArray(oGeom)
	'		lut0D2D = Get0D2DArray(oGeom, lut1D2D)

	'		l_EdgeList = GetEdgeLoop( oGeom, l_Tag.SubElements, lut0D1D, lut1D2D, in_Method )
	'		SetSelFilter "Edge"
	'		AddToSelection oItem & ".edge[" & join(l_EdgeList , ",") &"]",,True
	'	next
	'end if

	InteractiveEdgeExtensionProc in_Method


end sub


'------------------------------------------------------------------------------
' NAME:		InteractiveEdgeExtensionProc
'
'(c) 2002 Olivier Ozoux for SOFTIMAGE Special Projecs
' Modified: 
' April 2003 - Andre R Foisy SOFTIMAGE R&D 
'    Make it an internal subroutine. Change name. 
'    Remove setting of prefs.  Not necessary anymore.
'
' DESCRIPTION: UI script that triggers a picking loop to pick edge loops on polygon meshes
'------------------------------------------------------------------------------
Sub InteractiveEdgeExtensionProc( in_Method )

	Dim oSel,oItem, T1, T2,lut0D1D,lut0D2D,lut1D2D
	Dim edgelist, oGeom, Button, Modifier, lastObjectPick, l_str

	lastObjectPick = " "
	Button = 1
	While Button <> 0
		PickElement siEdgeFilter, XSIUtils.Translate( IDS_INT_EDGE_EXT_MSG_LM, "XSISCRIPTS" ), XSIUtils.Translate( IDS_INT_EDGE_EXT_MSG_LM, "XSISCRIPTS" ), oSel, Button, , Modifier

		if typename(oSel) <> "Empty" And Button <> 0 then

			set oGeom = oSel.obj
		
			' Calculate and Cache the Neighbors Look-Up Tables
			' These are global variables. Only Calculate once a session
			' OR if we are starting to pick from a different object than
			' the last one that was picked.
			'T1 = timer
			if IsEmpty(lut0D1D) or oSel.name <> lastObjectPick then
				lut0D1D = Get0D1DArray(oGeom)
				lut0D2D = Get0D2DArray(oGeom, lut1D2D)

				'T2 = timer	
				'logmessage "Building Topology Map: "& T2 - T1 & "s"
			end if
			
			Set oItem = GetObjectFromSubComponent(oSel)
			edgelist = GetEdgeLoop( oGeom, oSel.SubElements, lut0D1D, lut1D2D, in_Method )

			l_str = oItem & ".edge[" & join(edgelist , ",") &"]"
			SetSelFilter "Edge"
			
			'T2 = timer
			'logmessage "Expanding Edge Loops: "& T2 - T1 & "s"
			
			Select Case Modifier
				Case 0						' no modifier
					SelectObj l_str,,True
				Case 1						' Shift
					AddToSelection l_str,,True
				Case 2						' Ctrl
					ToggleSelection l_str
				Case 3						' Shift + Ctrl
					RemoveFromSelection l_str
				Case Else
					SelectObj l_str,,True
			End Select

			lastObjectPick = oSel.name
		end if
	Wend

end sub


'------------------------------------------------------------------------------
' NAME:		SelectExtendEdgeLoopProc
'
'(c) 2003 Andre R Foisy SOFTIMAGE R&D 
'
' DESCRIPTION: UI script that extends the current edge selection by an edgeloop.
' Does not turn around corners.
'------------------------------------------------------------------------------
Sub SelectExtendEdgeLoopProc( in_List )
	
	SelectOrExtendEdgeSelection in_List, 0	
			
end sub

'------------------------------------------------------------------------------
' NAME:		SelectExtendEdgeBoundaryProc
'
'(c) 2003 Andre R Foisy SOFTIMAGE R&D 
'
' DESCRIPTION: UI script that extends the current edge selection by an edgeloop
' that follows border edges: Turns around corners
'------------------------------------------------------------------------------
Sub SelectExtendBoundaryEdgeLoopProc( in_List )
	
	SelectOrExtendEdgeSelection in_List, 1	
		
end sub

'------------------------------------------------------------------------------
' NAME:		SelectExtendEdgeRingProc
'
'(c) 2003 Andre R Foisy SOFTIMAGE R&D 
'
' DESCRIPTION: UI script that extends the current edge selection by an edgering.
'------------------------------------------------------------------------------
Sub SelectExtendParallelEdgeLoopProc( in_List )

	SelectOrExtendEdgeSelection in_List, 2	
		
end sub


'---------'---------'---------'---------'---------'---------'---------'---------
function EdgeLoopTest()
'(c) 2002 Olivier Ozoux for SOFTIMAGE Special Projecs
'---------'---------'---------'---------'---------'---------'---------'---------
	Dim oGeom,nb0D,nb1D,nb2D,o0D,o1D,o2D
	Dim a0D1D, nb0D1D,a0D2D, nb0D2D, a1D2D
	Dim i,j, aSp0D(), aSp1D(), T1,T2, aEdges
	
	set o3DO = selection(0)
	'Need to use the v1.0 OM for neighbor information.
	set oGeom = o3DO.obj
	
	'Get the counts
	nb0D = oGeom.nb0D
	nb1D = oGeom.nb1D
	nb2D = oGeom.nb2D
	
	' Calculate and Cache the Neighbors Look-Up Tables
	' These are global variables. Only Calculate once a session
	if IsEmpty(lut0D1D) then
		lut0D1D = Get0D1DArray(oGeom)
		lut0D2D = Get0D2DArray(oGeom, lut1D2D)
	end if
	
	
	'Dimension the arrays at 0 (for PushArray)
	Redim aSp0D(0)
	Redim aSp1D(0)
	
	'Get the geometry objects
	set o0D = oGeom.Geometry0D
	set o1D = oGeom.Geometry1D
	set o2D = oGeom.Geometry2D
	
	'find the vertices != 4 edges
	for i=0 to nb0D -1
		
		a0D1D = lut0D1D(i)
		a0D2D = lut0D2D(i)
		nb0D1D = ubound(a0D1D) + 1
		nb0D2D = ubound(a0D2D) + 1

		'logmessage i &") #"& nb0D2D &" ("& join(a0D2D,",") &")"
		
		
		if nb0D1D <> 4 then
			if nb0D1D = nb0D2D then				
				'Store the extraordinary edges
				for j=0 to nb0D1D -1
					PushArray aSp1D, a0D1D(j)
				next
			elseif nb0D2D <= 2 then
				'Store the points near holes for later
				PushArray aSp0D, i
			end if
		end if
	next
	
	'grow the edges along their sides
	aEdges = GetEdgeLoop( oGeom, aSp1D, lut0D1D, lut1D2D, 0)
	
	'find the edges around the hole
	for i=0 to ubound(aSp0D) -1
		a0D1D = lut0D1D(aSp0D(i))
		nb0D1D = ubound(a0D1D) + 1
		'Check each edges, and keep the one with 1 poly
		for j=0 to nb0D1D -1
			a1D2D = o1D.Neighbors2D(a0D1D(j),1)
			if ubound(a1D2D) = 0 then
				PushArray aSp1D, a0D1D(j)
			end if
		next
	next
	
	'Select the edges found
	set o3DO = GetObjectFromSubComponent(o3DO)
	SelectGeometryComponents o3DO &_
		".edge[" & join(aSp1D, ",") &"]"

	AddToSelection o3DO &_
		".edge[" & join(aEdges, ",") &"]"

end function


'---------'---------'---------'---------'---------'---------'---------'---------
function GetEdgeLoop(oGeom, edges, lut0D1D, lut1D2D, in_Method )
'(c) 2002 Olivier Ozoux for SOFTIMAGE Special Projecs
' Modified April 2003 - Andre R Foisy SOFTIMAGE R&D Add Boundary case (around corners)
'---------'---------'---------'---------'---------'---------'---------'---------
	Dim i, nb, edgeflag(), result()
	
	nb = ubound(edges)
	Redim result(0)
	
	'build a LUT of selected edges
	Redim edgeflag(oGeom.Nb1D -1)
	for i=0 to nb
		edgeflag(edges(i)) = True
	next
	
	'Loop over the list of selected edges
	Select Case in_Method
		Case 0	'Extend Edge Loop
			for i=0 to nb
				WalkEdgeLoop oGeom, edges(i), -1, edgeflag, lut0D1D, lut1D2D
			next
		Case 1	'Extend Edge Boundary
			for i=0 to nb
				WalkEdgeBoundary oGeom, edges(i), -1, edgeflag, lut0D1D, lut1D2D
			next
		Case 2	'Extend Edge Ring
			for i=0 to nb
				WalkEdgeRing oGeom, edges(i), -1, edgeflag, lut0D1D, lut1D2D
			next	
		Case Else	' Extend nothing
			exit function
	End Select

	'Convert the array into a flat list
	for i=0 to ubound(edgeflag)
		if edgeflag(i) = True then
			PushArray result, i
		end if
	next
	
	GetEdgeLoop = result
end function


'---------'---------'---------'---------'---------'---------'---------'---------
function WalkEdgeLoop(oGeom, index, p0, edgeflag, lut0D1D, lut1D2D)
'(c) 2002 Olivier Ozoux for SOFTIMAGE Special Projecs
' Modified April 2003 - Andre R Foisy SOFTIMAGE R&D - 
' DESCRIPTION: Do not go around corners.
'---------'---------'---------'---------'---------'---------'---------'---------

	Dim i,j,k, a0D1D,a0D2D,a1D2D,nb0D1D, o1D, point
	Dim start1D2D,curr1D2D, p1,p2, otherpoint, match, goal
	Dim l_bMoreThanOne, l_EdgeIndex
	
	' THE RULE FOR EDGE LOOPS: GO FROM THE EDGE
	' TO A POINT, AND IF THERE ARE 4 EDGES OR LESS ATTACHED
	' TO THAT POINT SELECT THE ONE THAT DOESN'T SHARE
	' A POLYGON WITH THE ORIGINAL EDGE 
	
	set o1D = oGeom.Geometry1D
	p1 = o1D.StartSubComponent0D ( index )
	p2 = o1D.EndSubComponent0D ( index )
	
	Select Case p0
		Case p1
			point = p2
			otherpoint = p1
		Case p2
			point = p1
			otherpoint = p2
		Case Else
			'Both Side
			WalkEdgeLoop oGeom, index, p1, edgeflag, lut0D1D, lut1D2D
			point = p1
	End Select
	
	'Get the LUT arrays
	a0D1D = lut0D1D(point)
	nb0D1D = ubound(a0D1D) +1
	
	'Exit if neighbors are bigger than 4
	if nb0D1D > 4 then
		exit function
    end if	
	
	'Get the polygons shared by the initial edge
	start1D2D = lut1D2D(index)
	
	'Compare to the edges found
	l_bMoreThanOne = False
	l_EdgeIndex = -1

	for i=0 to nb0D1D -1
		match = 0
		'if a0D1D(i) <> index then
			'Get the edge->polygon array
			curr1D2D = lut1D2D(a0D1D(i))
			goal = (ubound(start1D2D) +1)*(ubound(curr1D2D) +1)
			for j=0 to ubound(start1D2D)
				for k=0 to ubound(curr1D2D)
					if curr1D2D(k) <> start1D2D(j) then
						match = match + 1 
					end if
				next
			next

			'Found a Match?
			if match = goal then
				if ubound(curr1D2D) <> ubound(start1D2D) then
					l_bMoreThanOne = True
					edgeflag(a0D1D(i)) = false
				else
					if edgeflag(a0D1D(i)) <> True then
						l_EdgeIndex = a0D1D(i)
					else
						edgeflag(a0D1D(i)) = True
					end if
				end if
			end if
		'end if
	next

	if l_bMoreThanOne <> True AND l_EdgeIndex <> -1 then
		edgeflag(l_EdgeIndex) = True
		WalkEdgeLoop oGeom, l_EdgeIndex, point, edgeflag, lut0D1D, lut1D2D
	end if
end function

'---------'---------'---------'---------'---------'---------'---------'---------
function WalkEdgeBoundary(oGeom, index, p0, edgeflag, lut0D1D, lut1D2D)
'(c) 2003 Andre Foisy SOFTIMAGE R&D: Integration of OO scripts for edge loop
' DESCRIPTION: Take corners into account.  
'---------'---------'---------'---------'---------'---------'---------'---------

	Dim i,j,k, a0D1D,a0D2D,a1D2D,nb0D1D, o1D, point
	Dim start1D2D,curr1D2D, p1,p2, otherpoint, match, goal

	' THE RULE FOR EDGE LOOPS: GO FROM THE EDGE
	' TO A POINT, AND IF THERE ARE 4 EDGES OR LESS ATTACHED
	' TO THAT POINT SELECT THE ONE THAT DOESN'T SHARE
	' A POLYGON WITH THE ORIGINAL EDGE 
	
	set o1D = oGeom.Geometry1D
	p1 = o1D.StartSubComponent0D ( index )
	p2 = o1D.EndSubComponent0D ( index )
	
	Select Case p0
		Case p1
			point = p2
			otherpoint = p1
		Case p2
			point = p1
			otherpoint = p2
		Case Else
			'Both Side
			WalkEdgeBoundary oGeom, index, p1, edgeflag, lut0D1D, lut1D2D
			point = p1
	End Select
	
	'Get the LUT arrays
	a0D1D = lut0D1D(point)
	nb0D1D = ubound(a0D1D) +1
	
	'Exit if neighbors are bigger than 4
	if nb0D1D > 4 then
		exit function
	else 
		if nb0D1D = 2 then
			if a0D1D(0) = index then
			    if edgeflag(a0D1D(1)) <> True then
    				edgeflag(a0D1D(1)) = True
    				WalkEdgeBoundary oGeom, a0D1D(1), point, edgeflag, lut0D1D, lut1D2D
    			end if
            else
			    if edgeflag(a0D1D(0)) <> True then
    				edgeflag(a0D1D(0)) = True
    				WalkEdgeBoundary oGeom, a0D1D(0), point, edgeflag, lut0D1D, lut1D2D
    			end if
			end if
			exit function
		end if
	end if
	
	
	'Get the polygons shared by the initial edge
	start1D2D = lut1D2D(index)
	
	'Compare to the edges found
	for i=0 to nb0D1D -1
		match = 0
		'if a0D1D(i) <> index then
			'Get the edge->polygon array
			curr1D2D = lut1D2D(a0D1D(i))
			goal = (ubound(start1D2D) +1)*(ubound(curr1D2D) +1)
			for j=0 to ubound(start1D2D)
				for k=0 to ubound(curr1D2D)
					if curr1D2D(k) <> start1D2D(j) then
						match = match + 1 
					end if
				next
			next
			
			'Found a Match?
			if match = goal AND ubound(curr1D2D) = ubound(start1D2D) then
				if edgeflag(a0D1D(i)) <> True then
					edgeflag(a0D1D(i)) = True
					WalkEdgeBoundary oGeom, a0D1D(i), point, edgeflag, lut0D1D, lut1D2D
				else
					edgeflag(a0D1D(i)) = True
				end if
				exit for
			end if
		'end if
	next

end function

'---------'---------'---------'---------'---------'---------'---------'---------
function WalkEdgeRing(oGeom, index, p0, edgeflag, lut0D1D, lut1D2D)
'(c) 2002 Olivier Ozoux for SOFTIMAGE Special Projecs
'---------'---------'---------'---------'---------'---------'---------'---------

	Dim i, a0D1D,a0D2D,a1D2D,nb0D1D, o1D, point,j
	Dim start1D2D,curr1D2D, p1,p2, otherpoint, edgeStart, edgeEnd, testStart, testEnd
	
	' THE RULE FOR EDGE RINGS: GO FROM THE EDGE
	' TO A POINT, AND IF THERE ARE 4 EDGES OR LESS ATTACHED
	' TO THAT POINT SELECT THE ONE THAT DOESN'T SHARE
	' A POLYGON WITH THE ORIGINAL EDGE
	
	set o1D = oGeom.Geometry1D

	p1 = lut1D2D( index )(0)
	if ubound( lut1D2D( index ) ) = 0 then
		p2 = p1
	else
		p2 = lut1D2D( index )(1)
	end if

	
	Select Case p0
		Case p1
			point = p2
			otherpoint = p1
		Case p2
			point = p1
			otherpoint = p2
		Case Else
			'Both Side
			WalkEdgeRing oGeom, index, p1, edgeflag, lut0D1D, lut1D2D
			point = p1
	End Select
	
	'Get the edges shared by the initial polygon
	start1D2D = oGeom.Geometry2D.SubComponent1D(point)
	edgeStart = o1D.StartSubComponent0D ( index )
	edgeEnd = o1D.EndSubComponent0D ( index )	
	
	'Compare to the edges found
	for i=0 to ubound(start1D2D)
		testStart = o1D.StartSubComponent0D ( start1D2D(i) )
		testEnd = o1D.EndSubComponent0D ( start1D2D(i) )
			if (Not edgeStart = testStart) AND _
				(Not edgeStart = testEnd) AND _
				(Not edgeEnd = testStart) AND _
				(Not edgeEnd = testEnd) then
				'Found a Match!
				if edgeflag(start1D2D(i)) <> True then
					edgeflag(start1D2D(i)) = True
					WalkEdgeRing oGeom, start1D2D(i), point, edgeflag, lut0D1D, lut1D2D
				else
					edgeflag(start1D2D(i)) = True
				end if
				exit for			
			end if

	next
end function




'---------'---------'---------'---------'---------'---------'---------'---------
function Get0D1DArray(oGeom)
'(c) 2002 Olivier Ozoux for SOFTIMAGE Special Projecs
'---------'---------'---------'---------'---------'---------'---------'---------
	Dim nb0D,nb1D,a0D1D(),tmp
	Dim o1D, i, point,nb, a()
	nb0D = oGeom.nb0D
	nb1D = oGeom.nb1D
	set o1D = oGeom.Geometry1D
	
	Redim a0D1D(nb0D -1)
	Redim a(0)
	'loop over the edges and store the points
	for i=0 to nb1D -1
		'Start Point
		point = o1D.StartSubComponent0D ( i )
		tmp = a0D1D(point)
		if IsArray(tmp) then
			nb = ubound(tmp)
			Redim preserve tmp(nb+1)
			tmp(nb+1) = i
		else
			tmp = a
			tmp(0) = i
		end if
		a0D1D(point) = tmp
		
		'End Point
		point = o1D.EndSubComponent0D ( i )
		tmp = a0D1D(point)
		if IsArray(tmp) then
			nb = ubound(tmp)
			Redim preserve tmp(nb+1)
			tmp(nb+1) = i
		else
			tmp = a
			tmp(0) = i
		end if
		a0D1D(point) = tmp	
	next
	Get0D1DArray = a0D1D
end function

'---------'---------'---------'---------'---------'---------'---------'---------
function Get0D2DArray(oGeom, lut1D2D)
'(c) 2002 Olivier Ozoux for SOFTIMAGE Special Projecs
'---------'---------'---------'---------'---------'---------'---------'---------
	Dim nb0D,nb1D,nb2D,a0D2D(),a1D2D(),tmp
	Dim o2D, i, points,edges,nb, a(),j
	nb0D = oGeom.nb0D
	nb1D = oGeom.nb1D
	nb2D = oGeom.nb2D
	set o2D = oGeom.Geometry2D
	
	Redim a0D2D(nb0D -1)
	Redim a1D2D(nb1D -1)
	Redim a(0)
	
	'loop over the faces and store the points
	for i=0 to nb2D -1
		'Get the points
		points = o2D.SubComponent0D(i)
		for j=0 to ubound(points)
			tmp = a0D2D(points(j))
			if IsArray(tmp) then
				nb = ubound(tmp)
				Redim preserve tmp(nb+1)
				tmp(nb+1) = i
			else
				tmp = a
				tmp(0) = i
			end if
			a0D2D(points(j)) = tmp
		next
		
		'Get the Edges
		edges = o2D.SubComponent1D(i)
		for j=0 to ubound(edges)
			tmp = a1D2D(edges(j))
			if IsArray(tmp) then
				nb = ubound(tmp)
				Redim preserve tmp(nb+1)
				tmp(nb+1) = i
			else
				tmp = a
				tmp(0) = i
			end if
			a1D2D(edges(j)) = tmp
		next
		
	next
	Get0D2DArray = a0D2D
	lut1D2D = a1D2D
end function



'---------'---------'---------'---------'---------'---------'---------'---------
function GetObjectFromSubComponent(oSel)
'(c) 2002 Olivier Ozoux for SOFTIMAGE Special Projecs
'---------'---------'---------'---------'---------'---------'---------'---------
	Dim oItem
	'Get the Primitive
	Set oItem = GetValue(oSel.obj)
	'Go Back to the X3DObject
	Set oItem = oItem.Parent
	'Return
	Set GetObjectFromSubComponent = oItem
end function

'---------'---------'---------'---------'---------'---------'---------'---------
function whatis(oItem)
'(c) 2002 Olivier Ozoux for SOFTIMAGE Special Projecs
'---------'---------'---------'---------'---------'---------'---------'---------
	logmessage "Typename: "& typename(oItem) &_
	" .Type: "& oItem.type
end function

'---------'---------'---------'---------'---------'---------'---------'---------
function PushArray(array, el)
'(c) 2002 Olivier Ozoux for SOFTIMAGE Special Projecs
'---------'---------'---------'---------'---------'---------'---------'---------
	Dim i
	i = Ubound(array)
	'Grow only if the last element is assigned.
	if Not IsEmpty( array(i) ) then
		i = i+1
		Redim Preserve array(i)
	end if
	array(i) = el
end function

function PopArray(array)
	Dim i
	i = Ubound(array)
	if Not IsEmpty( array(i) ) then
		if i > 0  then
			Redim Preserve array(i-1)
		else
			Redim array(0)
		end if
	end if
end function

function ArraySize(array)
	Dim i
	ArraySize = 0
	if (TypeName(array) <> "Empty") And (TypeName(array) <> "Nothing") then
		i = Ubound(array)
		if Not IsEmpty( array(i) ) then
			ArraySize = i+1
		else
			ArraySize = i
		end if
	end if
end function

sub MakeAllSelectableProc()
	'remove the overrides from user groups, layers, partitions in that order
	SetValue "#Group*.selectability,Layers.List.*.selectability,Passes.List.*.*.selectability", 2

	'now turn on selectability on all 3d objects
	SetValue "*.visibility.selectability", true
end sub
