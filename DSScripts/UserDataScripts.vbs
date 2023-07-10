'******************************************************************************
'
' File supervisor : andrewsk
' Date : 
' (c) Copyright 2002 Softimage
'
' @doc
' @module	UserDataScripts.vbs | VB Script 
'
'	Scripts related to the User Data Map and other aspects of XSI user data
'******************************************************************************

option explicit

'******************************************************************************
' String Constants (used to translate)
'******************************************************************************
const IDS_USERDATA_PICK_TEMPLATE_MSG_LM			= 1162
const IDS_INSPECT_USERDATA_TITLE				= 1163

'------------------------------------------------------------------------------
' NAME:			CreateUserDataMapFunc	
'
' INPUT:		in_objs			- Objects to create user data property on
'				in_name			- User Data Map property name
'               in_oTemplate    - template to call associate with the user data map (might be NULL)
'
' DESCRIPTION:	Create a cluster User Data Map.
'
'------------------------------------------------------------------------------
function CreateUserDataMapFunc( in_objs, in_UserDataName, in_oTemplate )
	dim l_ReturnList, l_ClusterList, l_newProp

	set l_ReturnList = CreateObject("XSI.Collection")
	set l_ClusterList = SIFilter(in_objs, siClusterFilter )

	if TypeName(l_ClusterList) = "Nothing" then
		'Tell the user why the command is not doing anything
		LogMessage "CreateUserDataMap requires clusters as the input", siInfo

		'Return an empty collection
		set CreateUserDataMapFunc = l_ReturnList
		exit function
	end if 


	dim l_oCluster

	for each l_oCluster in l_ClusterList
		'We use the Object Model to add the property
		set l_newProp = l_oCluster.AddProperty( "UserDataMap", false, in_UserDataName )

		'template is optional.
		if ( typename( in_oTemplate ) <> "Empty" ) then	
			if ( typename( in_oTemplate ) = "CustomProperty" ) then
				set l_newProp.Template = in_oTemplate
			else
				LogMessage "Ignoring template argument because it is not a custom property", siInfo
			end if
		end if

		l_ReturnList.Add l_newProp	
	next
	
	'Return the list of new properties
	set CreateUserDataMapFunc = l_ReturnList
end function

'------------------------------------------------------------------------------
' NAME:			CreateUserDataMapAndPickTemplateFunc	
'
' INPUT:		in_objs			- Objects to create user data property on
'				in_name			- User Data Map property name
'
' DESCRIPTION:	Starts a pick session to pick a template then clals the creation of a user data map
'
'------------------------------------------------------------------------------
function CreateUserDataMapAndPickTemplateFunc( in_objs, in_UserDataName )
	dim l_ReturnList, l_PickedTemplate, l_button, l_oTemplate

	set l_ReturnList = CreateObject("XSI.Collection")

	PickElement "property", XSIUtils.Translate( IDS_USERDATA_PICK_TEMPLATE_MSG_LM, "XSISCRIPTS" ), XSIUtils.Translate( IDS_USERDATA_PICK_TEMPLATE_MSG_LM, "XSISCRIPTS" ), l_PickedTemplate, l_button
	
	if typename(l_PickedTemplate) = "Empty" then
		LogMessage "You haven't picked a template (make sure to pick the name not the icon)", siInfo

		'Return an empty collection
		set CreateUserDataMapAndPickTemplateFunc = l_ReturnList
		exit function
	end if

	if l_PickedTemplate.type <> "customparamset" then
		LogMessage "Wrong type of property for a template", siInfo
		
		'Return an empty collection
		set CreateUserDataMapAndPickTemplateFunc = l_ReturnList
		exit function
	end if

	'logmessage "CreateUserDataMapAndPickTemplateFunc"	
	'logmessage l_PickedTemplate
	'logmessage typename(l_PickedTemplate)
	'logmessage l_PickedTemplate.type

	set l_oTemplate = l_PickedTemplate
	set CreateUserDataMapAndPickTemplateFunc = 	CreateUserDataMap( in_objs, in_UserDataName, l_oTemplate )

end function



'------------------------------------------------------------------------------
' NAME:			InspectUserDataFromObjListSub	
'
' INPUT:		in_objs			- User Data Map and Subcomponent to inspect (other objects are ignored)
'
' DESCRIPTION:	
'
'------------------------------------------------------------------------------

sub InspectUserDataFromObjListSub( in_obs )	
	dim oUDM, oSubComp, oObj
 
 	set oUDM = Nothing
 	set oSubComp = Nothing
 
	for each oObj in Selection
		
		if ( typename ( oObj ) = "CollectionItem" ) then
			set oSubComp = oObj.SubComponent
		end if
			
		if ( typename( oObj ) = "UserDataMap" ) then
			set oUDM = oObj
		end if		
	next 

	if ( typename( oSubComp ) = "Nothing" ) then
		call logmessage( "No components have been selected", siError )
		exit sub		
	end if
	
	if ( typename( oUDM ) = "Nothing" ) then
		set oUDM = FindUDM( oSubComp )
	end if 
		
	if ( typename( oUDM ) = "Nothing" ) then
		call logmessage( "No suitable User Data Map could be found", siError )
		exit sub		
	end if

	Call InspectUserDataSub( oUDM, oSubComp )	
end sub


'------------------------------------------------------------------------------
' NAME:			InspectUserDataSub	
'
' INPUT:		in_oUDM			- User Data Map specifying the data to get/set
'				in_oSubComp		- Subcomponent specifying which component(s) of the User Data Map
'								  to inspect 
' DESCRIPTION:	
'				At least one of the components in the subcomponent should be included in
'				the cluster which owns the user data map.
'
'------------------------------------------------------------------------------

sub InspectUserDataSub( in_oUDM, in_oSubComp )
	dim oUDI, oPSet, aClusterIndices
	dim strVal

	if ( typename( in_oUDM ) <> "UserDataMap" ) then
		call logmessage( "Invalid argument - a User Data Map should be specified", siError )
		exit sub
	end if

	'It can be confusing, but a Selection of a group of components is
	'not directly a subcomponent, but instead a collectionitem object.  We 
	'help users out by supporting both cases

	if ( typename( in_oSubComp ) = "CollectionItem" ) then
		set in_oSubComp = in_oSubComp.SubComponent
	end if
	
	if ( typename( in_oSubComp ) <> "SubComponent" ) then
		call logmessage( "Invalid argument - a SubComponent should be specified", siError )
		exit sub
	end if

	set oPSet = in_oUDM.Template
	
	if ( typename( oPSet ) = "Nothing" ) then
		call logmessage( "User Data Map does not have an associated Custom Property" , siError )
		exit sub
	end if

	aClusterIndices = SubCompToClusterIndices( in_oSubComp, in_oUDM.Parent )

	'Make sure this cluster actually includes some of the subcomponents 
	'and find the index of the first match

	dim i, FirstValidIndex
	FirstValidIndex = -1
	for i = 0 to ubound( aClusterIndices )
		if ( aClusterIndices( i ) <> - 1 ) then
			FirstValidIndex = i
			exit for		
		end if
	next

	if ( FirstValidIndex = -1 ) then 
		call logmessage( "Selected components are not part of the cluster" , siError )
		exit sub	
	end if

	set oUDI = in_oUDM.Item( aClusterIndices( FirstValidIndex ) )
	
	if ( NOT oUDI.IsEmpty ) then
		'Initialize the pset based on 
		'the user data on the first selected subcomponent
		
		on error resume next
		oPSet.BinaryData = oUDI.Value
		
		if ( err <> 0 ) then
			'The probably cause of this failure is that the data is binary from a plugin or 
			'came from a template with a different format
			'
			'Other option for this condition is that we can just Reset the custom property and 
			'allow the user to overwrite the data.  But if they get this scenario they
			'aren't using templates properly so we should warn them.

			call logmessage( "Failed to initialize Custom Property from User Data contents.  Data does not match Custom Property parameters." , siError )
			exit sub
		end if		
		
		on error goto 0				
	else

		'Empty user data is considered the same as storing all 
		'the default values of the parameters (but it doesn't waste space)
		'So we reset the custom property back to all default values

		ResetCustomProperty( oPSet )
	end if

	On Error Resume Next	
	InspectObj oPSet,,XSIUtils.Translate( IDS_INSPECT_USERDATA_TITLE, "XSISCRIPTS" ), siModal

	' Check if user clicked Ok
	if Err.Number <> 0 then		
		' User clicked Cancel
		exit sub
	end if 
		
	On error goto 0
		
	'Get the binary representation of the values of the custom property
	strVal = oPSet.BinaryData
	
	'Set the data
	call SetUserData( in_oUDM, strVal, aClusterIndices )	
end sub

'******************************************************************************
' Helper functions
'******************************************************************************


'------------------------------------------------------------------------------
' NAME:			FindUDM
'
' INPUT:		in_oSubComp			- Objects to create user data property on
'
' RETURN:       Reference to a UserDataMap object or Nothing 
'             
' DESCRIPTION:	This function attempts to find a suitable user data map based on a subcomponent
'
'				The user data map must meet the following criteria:
'			         It must be on a cluster of the correct type (eg pnt verses poly)
'			         It must have an associated Custom Property so that we can inspect the contents
'			         The cluster must have at least one index in common with the subcomponent indices
'
'If multiple user data maps meet this criteria then it is undefined which one will be returned
'
'------------------------------------------------------------------------------

function FindUDM( in_oSubComp )
	dim oUDM, oGeom

	set oUDM = Nothing
	set oGeom = in_oSubComp.Parent3DObject.ActivePrimitive.Geometry
	
	dim oCluster
	for each oCluster in oGeom.Clusters
	
		'Determine if the cluster is the correct type
		if ( oCluster.Type = in_oSubComp.ClusterType ) then
	
			'Determine if there are any user data maps
			dim oProp
			for each oProp in oCluster.Properties
			
				if ( typename( oProp ) = "UserDataMap" ) then
				
					'Determine if this UserDataMap has an associated Custom PSet					
					if ( typename( oProp.Template ) <> "Nothing" ) then

						'We've found a candidate user data map					
						'Now check if the cluster indices overlap
						'REVIEW: (this could be optimized-both by more specific script or
						'        by built in support from the OM)
											
						dim aClusterIndices
						aClusterIndices = SubCompToClusterIndices( in_oSubComp, oCluster )
						
						dim bFoundOverlap , i
						bFoundOverlap = false 
						
						for i = 0 to ubound( aClusterIndices ) 
							if ( aClusterIndices( i ) <> - 1 ) then
								bFoundOverlap = true
								exit for
							end if 
						next 

						if ( bFoundOverlap ) then
							'We've found our suitable user data map
							set oUDM = oProp
							
							'Stop going through user data maps							
							exit for 
						end if																							
					end if		
				end if			
			next
		end if
		
		'If we have already found a user data map on a cluster then
		'we can stop looking through clusters
		if ( typename( oUDM ) <> "Nothing" ) then
			exit for
		end if		
	next

	if ( typename( oUDM ) <> "Nothing" ) then 
		set FindUDM = oUDM
	else
		set FindUDM = Nothing
	end if
end function

'------------------------------------------------------------------------------
' NAME:			SetUserData
'
' INPUT:		in_oUDM	           - User Data Map to set data on
'				in_strData		   - Data (in byte string format) to set
'				in_aClusterIndices - Indicies of the cluster to set the data on
'
' DESCRIPTION:	This routine copies the provided Data onto each User Data Item
'				that corresponds to a valid index in the provided array
'
'               Any invalid indices (-1) or larger than the size of the User Data Map
'				are ignored
'
'				Review - not sure if we should log a warning message if we can't
'               set a particular index because the number is too high.
'------------------------------------------------------------------------------

sub SetUserData( in_oUDM, in_strData, in_aClusterIndices )
	dim cntUDMItems, i, clsIndex, oUDI

	cntUDMItems = in_oUDM.Count

	for i = 0 to ubound( in_aClusterIndices ) 
	
		clsIndex = in_aClusterIndices( i )

		if ( ( clsIndex <> -1 ) AND ( clsIndex < cntUDMItems ) ) then					
			set oUDI = in_oUDM.Item( clsIndex )
			oUDI.Value = in_strData
		end if 
	next		

end sub

'------------------------------------------------------------------------------
' NAME:			SubCompToClusterIndices
'
' INPUT:		in_oSubComp	       - SubComponent which specifies a set of components on an object
'				in_oCluster		   - Cluster which specifies another set of components on an object
'
' RETURN VALUE: Array of integers, the same size as the subcomponent set
' DESCRIPTION:	
'				Returns an array with the Cluster Indices that match the 
'				components selected in the specified subcomponent.
'				For example when vertex 5 is selected this may correspond to 
'				index 2 in the cluster.
'
'				An array is returned which matches the size of the subcomponent array, using the
'				same order as the element array of the subcomponent.  If a subcomponent has 
'				no associated cluster index (which can easily happen if the cluster does not 
'				cover the complete object), then the associated returned array element has value -1.
'
'------------------------------------------------------------------------------

function SubCompToClusterIndices( in_oSubComp, in_oCluster )
	dim i, j

	dim aSubComp, oClsElems, aClsElems, cntSubComp, cntClsElems
	aSubComp = in_oSubComp.ElementArray
	
	set oClsElems = in_oCluster.Elements  
	aClsElems = oClsElems.Array  

	cntSubComp = ubound( aSubComp ) + 1
	cntClsElems = ubound( aClsElems ) + 1

	'Allocate an array the size of the SubComp array
	dim aRetVal()
	redim aRetval( cntSubComp - 1 )
	
	for i = 0 to cntSubComp - 1

		'Initialize the array to -1, which is the value
		'we return if this particular index has no associated cluster element

		aRetVal( i ) = -1

		for j = 0 to cntClsElems - 1

			if ( aClsElems( j ) = aSubComp( i ) ) then
				aRetVal( i ) = j			
				Exit For
			end if 
		next
	next
				
	SubCompToClusterIndices = aRetVal

end function

'------------------------------------------------------------------------------
' NAME:			ResetCustomProperty
'
' INPUT:		io_oPSet	       - PSet that should be reset
'
' DESCRIPTION:	
'				This simple little method replaces all values in a pset with
'				their default values.
'
' REVIEW: Possibly this functionality should be built right into the custom 
'         property set - it is probably useful beyond the context of user data.
'         Not all property types necessarily support default values, however
'         this function uses error recovery so that it never fails
'------------------------------------------------------------------------------

sub ResetCustomProperty( io_oPSet )
	on error resume next

	dim oParam
	for each oParam in io_oPSet.Parameters
		oParam.Value = oParam.Default	
	next
end sub