
'******************************************************************************
'
' File supervisor : benoitl
' Date : nov 99
' (c) Copyright 1999 Softimage
'
' $Archive:  $
' $Revision:  $  $Date:  $
' Checkin by: $Author:  $
'
' @module	Texture.vbs
'
'	This is an VBscript file that contains the base scripts for the
'   texturing commands.
'******************************************************************************

'******************************************************************************
' DEBUGGING
'******************************************************************************

' DEVNOTE: remove comment to force explicit declaration of local variables.
Option Explicit

' DEVNOTE: remove comment to force a break point when script loaded.
'stop

'******************************************************************************
' String Constants (used to translate)
'******************************************************************************
const IDS_CREATE_PROJECTION_TITLE			= 1144
const IDS_PICK_CORNER_POINT_MSG_L			= 1145
const IDS_PICK_CORNER_POINT_MSG_M			= 1146
const IDS_ISLAND_HEAL_PICK_TARGET_MSG		= 1147
const IDS_ISLAND_HEAL_PICK_SOURCE_MSG		= 1148
const IDS_CONNECT_TO_SUPPORT_TITLE			= 1149
const IDS_CONNECT_TO_SUPPORT_PROJECTION_MSG	= 1150
const IDS_CONNECT_TO_PROJECTION_TITLE		= 1151


'******************************************************************************
' TEXTURING SUBROUTINES
'******************************************************************************

function FWizardDialog(in_customparam, in_title)
	On Error Resume Next
	InspectObj in_customparam,,in_title, siModal

	if Err.Number <> 0 then
		FWizardDialog = vbCancel
	else
		FWizardDialog = vbOk
	end if
end function

'------------------------------------------------------------------------------
' NAME:			CreateProjectionUIProc
'
' INPUT:		in_objs - objects to generate UV Property on, if not given, the current selection is used.
'				io_type - Type of generation
'							siTxtPlanarXY
'							siTxtPlanarXZ
'							siTxtPlanarYZ
'							siTxtCylindrical
'							siTxtSpherical
'							siTxtSpatial
'							siTxtCamera
'							siTxtUV
'							siTxtLollipop
'							siTxtPureImplicit
'							siTxtCubic
'							siTxtUniqueUV
'				io_uvDefaultType - Type of generation used when io_type = 7 "UV", for the object which does not support UV
'							siTxtDefaultPlanarXY
'							siTxtDefaultPlanarXZ
'							siTxtDefaultPlanarYZ
'							siTxtDefaultCylindrical
'							siTxtDefaultSpherical
'							siTxtDefaultSpatial
'							siTxtDefaultCubic
'							siTxtDefaultLollipop
'				io_textureName - if given, specify the name to set on the generated UV property,
'								 Upon return, contains the name really used. 
'				io_parenting - if TRUE the created texture control objects are parented under their respective objects
'				io_fitmethod - method used to fit the projection - best fit, object space, world space.
'
' DESCRIPTION:	Texture objects by projection, the texture control object given
'				as parameter defines the projection properties.
'				
'------------------------------------------------------------------------------
sub CreateProjectionUIProc(in_objs, byref io_type, byref io_uvDefaultType, byref io_supportName, byref io_textureName, byref io_parenting, byref io_fitmethod, byref io_camera)
	Dim l_sceneRoot

	if TypeName( in_objs ) = "Nothing" then
		Exit sub
	else
		if in_objs.Count < 1 then
			Exit sub
		end if
	end if

	'-----------------------------------------------------------------------------------------------------------------------
	' Find the scene root
	'-----------------------------------------------------------------------------------------------------------------------
	set l_sceneRoot = EnumElements("Project", TRUE)
	set l_sceneRoot = SIFilter(l_sceneRoot, "Scene")(0)
	set l_sceneRoot = EnumElements( l_sceneRoot, TRUE)
	set l_sceneRoot = SIFilter(l_sceneRoot, "SceneObject", TRUE)(0)

	'-----------------------------------------------------------------------------------------------------------------------
	' Use a custom pset to hold our params
	'-----------------------------------------------------------------------------------------------------------------------
	SIAddProp "TextureWizard", l_sceneRoot, 0, "TextureWizard"

	SetValue l_sceneRoot & ".TextureWizard.type", io_type
	SetValue l_sceneRoot & ".TextureWizard.uvdefaulttype", io_uvDefaultType
	SetValue l_sceneRoot & ".TextureWizard.parenting", io_parenting
	if io_textureName <> "" then
		SetValue l_sceneRoot & ".TextureWizard.projname", io_textureName
	else
		SetValue l_sceneRoot & ".TextureWizard.projname", "Texture_Projection"
	end if
	if io_supportName <> "" then
		SetValue l_sceneRoot & ".TextureWizard.suppname", io_supportName
	else
		SetValue l_sceneRoot & ".TextureWizard.suppname", "Texture_Support"
	end if
	SetValue l_sceneRoot & ".TextureWizard.coordsystem", siRelDefault

	'-----------------------------------------------------------------------------------------------------------------------
	' If the user has pressed cancel, exit
	'-----------------------------------------------------------------------------------------------------------------------
	if FWizardDialog(l_sceneRoot & ".TextureWizard", XSIUtils.Translate( IDS_CREATE_PROJECTION_TITLE, "XSISCRIPTS" )) = vbCancel then
		'-----------------------------------------------------------------------------------------------------------------------
		' Cleanup
		'-----------------------------------------------------------------------------------------------------------------------
		DeleteObj l_sceneRoot & ".TextureWizard"

		Exit sub
	end if

	io_type = CLng( GetValue(l_sceneRoot & ".TextureWizard.type") )
	io_uvDefaultType = CLng( GetValue(l_sceneRoot & ".TextureWizard.uvdefaulttype") )
	io_parenting = GetValue(l_sceneRoot & ".TextureWizard.parenting")
	io_textureName = GetValue(l_sceneRoot & ".TextureWizard.projname")
	io_supportName = GetValue(l_sceneRoot & ".TextureWizard.suppname")
	io_fitmethod = GetValue(l_sceneRoot & ".TextureWizard.coordsystem")

	'-----------------------------------------------------------------------------------------------------------------------
	' Cleanup
	'-----------------------------------------------------------------------------------------------------------------------
	DeleteObj l_sceneRoot & ".TextureWizard"

	if io_textureName = "" then
		Exit sub
	end if

	CreateProjection in_objs, io_type, io_uvDefaultType, io_supportName, io_textureName, io_parenting, io_fitmethod, io_camera
end sub

'------------------------------------------------------------------------------
' NAME:			CreateProjectionProc
'
' INPUT:		in_objs - objects to generate UV Property on, if not given, the current selection is used.
'				in_type - Type of generation
'							siTxtPlanarXY
'							siTxtPlanarXZ
'							siTxtPlanarYZ
'							siTxtCylindrical
'							siTxtSpherical
'							siTxtSpatial
'							siTxtCamera	
'							siTxtUV	
'							siTxtLollipop
'							siTxtPureImplicit
'							siTxtCubic
'							siTxtUniqueUV
'				in_uvDefaultType - Type of generation used when io_type = 7 "UV", for the object which does not support UV
'							siTxtDefaultPlanarXY
'							siTxtDefaultPlanarXZ
'							siTxtDefaultPlanarYZ
'							siTxtDefaultCylindrical
'							siTxtDefaultSpherical
'							siTxtDefaultSpatial	
'							siTxtDefaultLollipop
'				io_textureName - if given, specify the name to set on the generated UV property,
'								 Upon return, contains the name really used. 
'				in_parenting - if TRUE the created texture control objects are parented under their respective objects
'				in_fitmethod - method for fitting the texture support - best fit, object space, world space. (only for planar, cyl, sph + lollipop)
'				io_camera - camera to use for camera 
'
' DESCRIPTION:	Texture objects by projection, the texture control object given
'				as parameter defines the projection properties.
'				
'------------------------------------------------------------------------------
sub CreateProjectionProc(in_objs, in_type, in_uvDefaultType, byref in_supportName, byref io_textureName, in_parenting, in_fitmethod, byref io_camera)
	Dim l_listGroupsToExpand
	Dim l_listToFlatten
	Dim l_listGroupsMembers
	Dim l_flattenedList
	Dim l_finalNurbsList
	Dim l_finalNonNurbsList
	Dim l_finalNurbsOneList
	Dim l_finalNonNurbsOneList
	Dim l_item
	Dim l_geometry
	Dim l_nb2d

	if TypeName( in_objs ) = "Nothing" then
		logmessage "Please select an object to project", siError
		Exit sub
	else
		if in_objs.Count < 1 then
			Exit sub
		end if
	end if

	'--------------------------------------------------------------------
	' Find a unique name for all input objects
	'--------------------------------------------------------------------
	io_textureName = SIFindUniqueTextureName( in_objs, io_textureName ).Value("PropertyName")

   	Select Case in_type           

		'--------------------------------------------------------------------
		' PLANAR XY
		'--------------------------------------------------------------------
		Case siTxtPlanarXY
			CreateTextureBasicGeo in_objs, in_supportName, io_textureName, in_parenting, siProjPlanar, siPlaneXY, in_fitmethod

		'--------------------------------------------------------------------
		' PLANAR XZ
		'--------------------------------------------------------------------
		Case siTxtPlanarXZ
			CreateTextureBasicGeo in_objs, in_supportName, io_textureName, in_parenting, siProjPlanar, siPlaneXZ, in_fitmethod

		'--------------------------------------------------------------------
		' PLANAR YZ
		'--------------------------------------------------------------------
		Case siTxtPlanarYZ
			CreateTextureBasicGeo in_objs, in_supportName, io_textureName, in_parenting, siProjPlanar, siPlaneYZ, in_fitmethod

		'--------------------------------------------------------------------
		' CYLINDRICAL
		'--------------------------------------------------------------------
		Case siTxtCylindrical
			CreateTextureBasicGeo in_objs, in_supportName, io_textureName, in_parenting, siProjCylindrical, siPlaneXY, in_fitmethod

		'--------------------------------------------------------------------
		' SPHERICAL
		'--------------------------------------------------------------------
		Case siTxtSpherical
			CreateTextureBasicGeo in_objs, in_supportName, io_textureName, in_parenting, siProjSpherical, siPlaneXY, in_fitmethod

		'--------------------------------------------------------------------
		' SPATIAL
		'--------------------------------------------------------------------
		Case siTxtSpatial
			CreateTextureBasicGeo in_objs, in_supportName, io_textureName, in_parenting, siProjSpatial, siPlaneXY, in_fitmethod

		'--------------------------------------------------------------------
		' CUBIC
		'--------------------------------------------------------------------
		Case siTxtCubic
			CreateTextureBasicGeo in_objs, in_supportName, io_textureName, in_parenting, siProjCubic, siPlaneXY, in_fitmethod

		'--------------------------------------------------------------------
		' CAMERA
		'--------------------------------------------------------------------
		Case siTxtCamera
			CameraTextureProj in_objs, io_textureName, io_camera

		'--------------------------------------------------------------------
		' UV
		'--------------------------------------------------------------------
		Case siTxtUV

			'--------------------------------------------------------------------
			'  Filter the groups
			'--------------------------------------------------------------------
			set l_listGroupsToExpand = SIFilter( in_objs, "Group", TRUE )

			'--------------------------------------------------------------------
			'  Filter the other objects
			'--------------------------------------------------------------------
			set l_listToFlatten = SIFilter( in_objs, "Group", FALSE )
			if ( TypeName(l_listToFlatten) = "Nothing") then
				set l_listToFlatten = CreateObject("XSI.Collection")
			end if

			'--------------------------------------------------------------------
			'  Expand the groups
			'--------------------------------------------------------------------
			if ( Typename(l_listGroupsToExpand) <> "Nothing") then

				set l_listGroupsMembers = SelectMembers( l_listGroupsToExpand, FALSE )

				if ( Typename(l_listGroupsMembers) <> "Nothing") then
					Dim elem
					for each elem in l_listGroupsMembers
						l_listToFlatten.add elem
					next
				end if
			end if

			'--------------------------------------------------------------------
			'  Flatten the list
			'--------------------------------------------------------------------
			set l_flattenedList = SelectChildNodes( l_listToFlatten, FALSE )

			'--------------------------------------------------------------------
			'  Filter the Nurbs objects in the flattened input list
			'--------------------------------------------------------------------
			set l_finalNurbsList = SIFilter( l_flattenedList, "Surface_Mesh", TRUE )

			'--------------------------------------------------------------------
			'  Filter the non-Nurbs objects in the flattened input list
			'--------------------------------------------------------------------
			set l_finalNonNurbsList = SIFilter( l_flattenedList, "Surface_Mesh", FALSE )

			'l_finalNurbsOneList contains the Nurbs objects which have only one subsurface indside
			'l_finalNonNurbsOneList contains the objects which are either non-Nurbs or even if they are nurbs they have more than one subsurface
			 
			set l_finalNurbsOneList = CreateObject( "XSI.Collection" )
			set l_finalNonNurbsOneList = CreateObject( "XSI.Collection" )

			if( typename( l_finalNurbsList ) <> "Nothing" ) Then
				for each l_item in l_finalNurbsList
					set l_geometry = l_item.obj
					l_nb2d = l_geometry.nb2d

					if( l_nb2d > 1 ) then
						l_finalNonNurbsOneList.add l_item
					else 			
						l_finalNurbsOneList.add l_item
					end if
				next
			end if

			if( typename( l_finalNonNurbsList ) <> "Nothing" ) Then
				for each l_item in l_finalNonNurbsList 				
					l_finalNonNurbsOneList.add l_item 
				next
			end if

			'--------------------------------------------------------------------
			' Generate by using UV domain on nurbs
			'--------------------------------------------------------------------
			If Typename(l_finalNurbsOneList) <> "Nothing" Then
				If l_finalNurbsOneList.count > 0 Then
					SICreateTextureUVDomain "NurbsTextureCtrl", l_finalNurbsOneList, in_supportName, io_textureName, TRUE
				End If
			End If

			'--------------------------------------------------------------------
			' Other method on non-nurbs objects
			'--------------------------------------------------------------------
			If Typename(l_finalNonNurbsOneList) <> "Nothing" then
				If l_finalNonNurbsOneList.count > 0 then

					Select Case in_uvDefaultType

						'--------------------------------------------------------------------
						' PLANAR XY
						'--------------------------------------------------------------------
						Case siTxtDefaultPlanarXY
							CreateTextureBasicGeo l_finalNonNurbsOneList, in_supportName, io_textureName, TRUE, siProjPlanar, siPlaneXY, in_fitmethod

						'--------------------------------------------------------------------
						' PLANAR XZ
						'--------------------------------------------------------------------
						Case siTxtDefaultPlanarXZ
							CreateTextureBasicGeo l_finalNonNurbsOneList, in_supportName, io_textureName, TRUE, siProjPlanar, siPlaneXZ, in_fitmethod

						'--------------------------------------------------------------------
						' PLANAR YZ
						'--------------------------------------------------------------------
						Case siTxtDefaultPlanarYZ
							CreateTextureBasicGeo l_finalNonNurbsOneList, in_supportName, io_textureName, TRUE, siProjPlanar, siPlaneYZ, in_fitmethod

						'--------------------------------------------------------------------
						' CYLINDRICAL
						'--------------------------------------------------------------------
						Case siTxtDefaultCylindrical
							CreateTextureBasicGeo l_finalNonNurbsOneList, in_supportName, io_textureName, TRUE, siProjCylindrical, siPlaneXY, in_fitmethod

						'--------------------------------------------------------------------
						' SPHERICAL
						'--------------------------------------------------------------------
						Case siTxtDefaultSpherical
							CreateTextureBasicGeo l_finalNonNurbsOneList, in_supportName, io_textureName, TRUE, siProjSpherical, siPlaneXY, in_fitmethod

						'--------------------------------------------------------------------
						' SPATIAL
						'--------------------------------------------------------------------
						Case siTxtDefaultSpatial
							CreateTextureBasicGeo l_finalNonNurbsOneList, in_supportName, io_textureName, TRUE, siProjSpatial, siPlaneXY, in_fitmethod

						'--------------------------------------------------------------------
						' CUBIC
						'--------------------------------------------------------------------
						Case siTxtDefaultCubic
							CreateTextureBasicGeo l_finalNonNurbsOneList, in_supportName, io_textureName, TRUE, siProjCubic, siPlaneXY, in_fitmethod

						'--------------------------------------------------------------------
						' LOLLIPOP
						'--------------------------------------------------------------------
						Case siTxtDefaultLollipop
							CreateTextureBasicGeo l_finalNonNurbsOneList, in_supportName, io_textureName, TRUE, siProjLollipop, siPlaneXY, in_fitmethod

						'--------------------------------------------------------------------
						' OTHER CASES:	Default to spherical
						'--------------------------------------------------------------------
						Case Else
							CreateTextureBasicGeo l_finalNonNurbsOneList, in_supportName, io_textureName, TRUE, siProjSpherical, siPlaneXY, in_fitmethod

					End Select

				End If

			End If
		'--------------------------------------------------------------------
		' LOLLIPOP
		'--------------------------------------------------------------------
		Case siTxtLollipop
			CreateTextureBasicGeo in_objs, in_supportName, io_textureName, in_parenting, siProjLollipop, siPlaneXY, in_fitmethod

		'--------------------------------------------------------------------
		' PURELY IMPLICIT
		'--------------------------------------------------------------------
		Case siTxtPureImplicit
			CreateTexturePureImplicit in_objs, io_textureName

		'--------------------------------------------------------------------
		' UNIQUE UVs
		'--------------------------------------------------------------------
		Case siTxtUniqueUV
			' Don't use proc so we get the default values for the low/high parameters
			GenerateUniqueUVs in_objs, io_textureName

		'--------------------------------------------------------------------
		' OTHER CASES: NOTHING
		'--------------------------------------------------------------------
		Case Else
			io_textureName = ""
			Exit sub

	End Select
	

end sub

'------------------------------------------------------------------------------
' NAME:			CreateSubprojectionProc
'
' INPUT:		in_objs					-	Object, clusters, elements to project
'				in_uvprop				-	UVprop to modify.
'				in_type					-	Type of generation: siProjPlanar, siProjCylindrical etc.
'				in_plane				-	Direction of the support, siPlaneXY, siPlaneXZ etc.
'				in_supportName			-	If given, specify the name to set on the generated UV property,
'											Upon return, contains the name really used. 
'				in_parenting			-	If TRUE the created texture control objects are parented under their respective objects
'				in_fitting				-	Fitting method
'				in_fitimage				-	If true, modify the uvs after projecting to fit the image
'				in_aspect				-	If true, correct for aspect ratio distortion caused by the projection.
'				in_TextureAspectRatio	-	The aspect ratio (x resolution/y resolution) of the image
'
' DESCRIPTION:	Texture objects by projection, the texture control object given
'				as parameter defines the projection properties.
'				
'------------------------------------------------------------------------------
sub CreateSubprojectionProc(in_objs, in_uvprop, in_type, in_plane, byref io_supportName, in_parenting, in_fitting, in_fitimage, in_aspect, in_TextureAspectRatio, out_supportObj )
	Dim l_outobj
	Dim elemObject

	if TypeName( in_objs ) = "Nothing" then
		logmessage "Please select items to project", siError
		Exit sub
	else
		if in_objs.Count < 1 then
			logmessage "Please select items to project", siError
			Exit sub
		end if
	end if

	if TypeName( in_uvprop ) = "Nothing" then
		logmessage "Please select a UV property to create the subprojection on", siError
		Exit sub
	end if

	if in_parenting = TRUE then
		set elemObject = in_objs(0)
	else
		' Otherwise, use the scene root
		set elemObject = FGetSceneRoot()
	end if

	if (in_type <> siProjPlanar) and (in_type <> siProjCylindrical) and (in_type <> siProjSpherical) and (in_type <> siProjLollipop) and (in_type <> siProjCubic) then
			logmessage "Subprojection type " & in_type & " not supported.", siError
			Exit sub
	End If

	SICreateTextureBasicGeo , in_objs, io_supportName, "", elemObject, in_type, in_plane, TRUE, in_uvprop, out_supportObj, , in_fitting

	if in_aspect and TypeName( out_supportobj ) <> "Empty" then
		dim l_dUScaling, l_dVScaling
		dim geox, geoy, geoz, max, u, v, circumfu, circumfv
		
		l_dUScaling = 1
		l_dVScaling = 1
		
		geox = GetValue( out_supportobj & ".GeoX" )
		geoy = GetValue( out_supportobj & ".GeoY" )
		geoz = GetValue( out_supportobj & ".GeoZ" )
	
		' We have to scale those values according to the support's transform
		'
		geox = geox * out_supportobj.Kinematics.Global.sclx.Value
		geoy = geoy * out_supportobj.Kinematics.Global.scly.Value
		geoz = geoz * out_supportobj.Kinematics.Global.sclz.Value

		if ( in_type = siProjCylindrical ) then
			circumfu = 3.1415926 * geox
			if in_plane = siPlaneXY or in_plane = siPlaneYZ then
				' XY or YZ
				'
				if geoy > 1e-5 then
					l_dUScaling = circumfu/geoy
				end if
			else
				' XZ
				'
				if geoz > 1e-5 then
					l_dUScaling = circumfu/geoz
				end if
			end if

			' Adjust WRT texture aspect ratio
			'
			l_dVScaling = l_dVScaling * in_TextureAspectRatio
			
			' Maximize usage of the UV space
			'
			if ( l_dVScaling > l_dUScaling) then
				l_dUScaling = l_dUScaling / l_dVScaling
				l_dVScaling = 1
			else
				l_dVScaling = l_dVScaling / l_dUScaling
				l_dUScaling = 1
			end if

			if l_dUScaling <> 1 or l_dVScaling <> 1 then
				ScaleUVW  in_objs, in_uvprop, l_dUScaling, l_dVScaling, 1, siRelative, siUVW
			end if
		elseif in_type = siProjSpherical then
			' the task makes X==Y==Z, so the original scaling factor in V should be 
			' (PI*R) / (2*PI*R) = 0.5
			' 
			l_dUScaling = 1
			l_dVScaling = 0.5
						
			' Adjust WRT texture aspect ratio
			'
			l_dVScaling = l_dVScaling * in_TextureAspectRatio

			' Maximize usage of the UV space
			'
			if ( l_dVScaling > l_dUScaling) then
				l_dUScaling = l_dUScaling / l_dVScaling
				l_dVScaling = 1
			else
				l_dVScaling = l_dVScaling / l_dUScaling
				l_dUScaling = 1
			end if

			ScaleUVW  in_objs, in_uvprop, l_dUScaling, l_dVScaling, 1, siRelative, siUVW
		elseif in_type = siProjCubic or in_type = siProjPlanar then
			' We first apply the texture's aspect ratio depending on the plane. Our main goal is to 
			' reduce the support since we always want the result to take up the most of 
			' [0,1]x[0,1] as possible
			'
			if in_plane = siPlaneXY then
				geoy = geoy * in_TextureAspectRatio
			elseif in_plane = siPlaneXZ then
				geoz = geoz * in_TextureAspectRatio
			elseif in_plane = siPlaneYZ then
				geoy = geoy * in_TextureAspectRatio
			end if
		
			' Now we scale to maximize the UV space taken by the projection
			'
			max = geox
			if geoy > max then
				max = geoy
			end if
			if geoz > max then
				max = geoz
			end if

			Scale out_supportobj, max/geox, max/geoy, max/geoz
		end if
	end if

	if in_fitimage then
		FitSubcomponentUVsToImage in_uvprop, in_objs, true, in_aspect
	end if
end sub

'------------------------------------------------------------------------------
' NAME:			CreateTextureBasicGeo
'
' INPUT:		in_objs - objects to generate UV Property on, if not given, the current selection is used.
'				io_supportName - if given, specify the name to set on the texture control object created
'				io_textureName - if given, specify the name to set on the generated UV property,
'								 Upon return, contains the name really used. 
'				in_parenting - if TRUE the created texture control objects are parented under their respective objects
'				in_projtype - Projection type
'								siProjPlanar
'								siProjCylindrical
'								siProjSpherical
'								siProjLollipop
'				in_projplane - Projection plane
'								siPlaneXY
'								siPlaneXZ
'								siPlaneYZ
'				in_fitmethod - Method for fitting the projection to the object (best fit, object space, world)
'
' DESCRIPTION:	Texture objects by projection, the texture control object given
'				as parameter defines the projection properties.
'				
'------------------------------------------------------------------------------
sub CreateTextureBasicGeo(in_objs, byref io_supportName, byref io_textureName, in_parenting, in_projtype, in_projplane, in_fitmethod)
	Dim l_object
	Dim MyParentItem
	Dim elemObject
	Dim i
	'--------------------------------------------------------------------
	' Find a unique name for all input objects
	'--------------------------------------------------------------------
	io_textureName = SIFindUniqueTextureName( in_objs, io_textureName ).Value("PropertyName")

	'--------------------------------------------------------------------
	' Loop on all input objects
	'--------------------------------------------------------------------
	for each l_object in in_objs

		'--------------------------------------------------------------------
		' create the Texture  
		'--------------------------------------------------------------------
		if in_parenting = TRUE then
			if l_object.type = "poly" then
				set MyParentItem = EnumElements( l_object, FALSE )
				for i = 0 to 4
					set MyParentItem = EnumElements( MyParentItem(0), FALSE )
				next
				set elemObject = MyParentItem(0)

				SICreateTextureBasicGeo , l_object, io_supportName, io_textureName, elemObject, in_projtype, in_projplane, TRUE,,,, in_fitmethod
			else
				SICreateTextureBasicGeo , l_object, io_supportName, io_textureName, l_object, in_projtype, in_projplane, TRUE,,,, in_fitmethod
			end if
		else
			SICreateTextureBasicGeo , l_object, io_supportName, io_textureName, , in_projtype, in_projplane, TRUE,,,, in_fitmethod
		end if

	next
end sub

'------------------------------------------------------------------------------
' NAME:			CreateTexturePureImplicit
'
' INPUT:		in_objs - objects to generate UV Property on, if not given, the current selection is used.
'				io_textureName - if given, specify the name to set on the generated UV property,
'								 Upon return, contains the name really used. 
'
' DESCRIPTION:	Texture objects with a purely implicit projection
'				
'------------------------------------------------------------------------------
sub CreateTexturePureImplicit(in_objs, byref io_textureName)
	Dim l_object

	'--------------------------------------------------------------------
	' Find a unique name for all input objects
	'--------------------------------------------------------------------
	io_textureName = SIFindUniqueTextureName( in_objs, io_textureName ).Value("PropertyName")

	'--------------------------------------------------------------------
	' Loop on all input objects
	'--------------------------------------------------------------------
	for each l_object in in_objs

		'--------------------------------------------------------------------
		' create the Texture  
		'--------------------------------------------------------------------
		SICreateTexturePureImplicit l_object, io_textureName
	next
end sub

'------------------------------------------------------------------------------
' NAME:			CreateUVPropOnCompleteCluster
'
'------------------------------------------------------------------------------
Function CreateUVPropOnCompleteCluster( in_obj, in_textureName )
	Dim clusters, clust, full
	Dim prop, nm
	Dim newcluster, createdclusters

	set newcluster = Nothing
	set clusters = in_obj.activeprimitive.geometry.clusters
    full = in_obj.ActivePrimitive.Geometry.Samples.Count
	for each clust in clusters
		if clust.type = siSampledPointCluster and clust.IsAlwaysComplete then
			set newcluster = clust
		end if
	next

	if TypeName(newcluster) = "Nothing" then
		set createdclusters= SICreateCluster(siSampledPointCluster, "Texture_Coordinates_AUTO", in_obj, 1+4)
		set newcluster = createdclusters(0)
	end if

	set prop = newcluster.AddProperty("Texture Projection",,in_textureName)
	nm = GetValue(prop & ".name")
	SetValue prop & ".projdef.Name", nm & "_Def"

	set CreateUVPropOnCompleteCluster = prop
end Function

'------------------------------------------------------------------------------
' NAME:			GenerateUniqueUVsProc
'
' INPUT:		in_objs - objects to generate UV Property on, if not given, the current selection is used.
'				io_textureName - if given, specify the name to set on the generated UV property,
'								 Upon return, contains the name really used. 
'				lu - lower u coordinate of target bbox
'				lv - lower v coordinate of target bbox
'				width/height: dimensions of the target bbox.
'				spaceu - spacing in the u direction
'				spacev - spacing in the v direction
'				props - the generated properties
'
' DESCRIPTION:	Texture objects with automatic uv generation
'				
'------------------------------------------------------------------------------
sub GenerateUniqueUVsInspProc(in_objs, byref io_textureName, lu, lv, width, height, spaceu, spacev, byref out_props )
	Dim ops
	GenerateUniqueUVs_Internal in_objs, io_textureName, lu, lv, width, height, spaceu, spacev, out_props, ops
	AutoInspect ops
end sub

sub GenerateUniqueUVsProc(in_objs, byref io_textureName, lu, lv, width, height, spaceu, spacev, byref out_props )
	Dim ops
	GenerateUniqueUVs_Internal in_objs, io_textureName, lu, lv, width, height, spaceu, spacev, out_props, ops
end sub

sub GenerateUniqueUVs_Internal(in_objs, byref io_textureName, lu, lv, width, height, spaceu, spacev, byref out_props, byref out_ops )
	Dim l_object
	Dim meshes, l_Operator
	Dim nurbs, temp
	Dim l_ConnectionSet, l_MainGroup, l_UVPropGroup, l_AffectedGroup, prop

	set out_props = createobject("xsi.collection")

	set meshes = SIFilter( in_objs, "polygon_mesh" )
	set nurbs  = SIFilter( in_objs, "surface_mesh" )

	If TypeName( nurbs ) = "Nothing" and TypeName( meshes ) = "Nothing" Then
		logmessage "None of the input objects are valid for creating a texture projection", siError
		Exit Sub
	End If

	'--------------------------------------------------------------------
	' Find a unique name for all input objects
	'--------------------------------------------------------------------
	On Error Resume Next
	io_textureName = SIFindUniqueTextureName( in_objs, io_textureName ).Value("PropertyName")
	if ( io_textureName = "" ) then
		Exit Sub
	end if
	On Error Goto 0

	'--------------------------------------------------------------------
	' Loop on all the meshes
	'--------------------------------------------------------------------
	set out_ops = CreateObject("xsi.Collection")

	for each l_object in meshes
		set prop = CreateUVPropOnCompleteCluster( l_object, io_textureName )
		out_props.Add prop

		set l_ConnectionSet = createobject("xsi.connectionset")
		set l_MainGroup = createobject("xsi.collection")
		set l_UVPropGroup = createobject("xsi.collection")
		set l_AffectedGroup = createobject("xsi.collection")

		l_MainGroup.add l_object
		l_UVPropGroup.add prop

		l_ConnectionSet.type = siGroupLevel
		l_ConnectionSet.addgroup l_MainGroup
		l_ConnectionSet.addgroup l_UVPropGroup
		l_ConnectionSet.addgroup l_AffectedGroup

		set l_Operator = ApplyOperator( "PolyUVPackingOp", l_ConnectionSet, siGroupLevel )
		out_ops.add l_Operator
	
		SetValue l_Operator & ".lowu", lu
		SetValue l_Operator & ".lowv", lv
		SetValue l_Operator & ".width", width
		SetValue l_Operator & ".height", height
		SetValue l_Operator & ".spaceu", spaceu
		SetValue l_Operator & ".spacev", spacev
	next

	'--------------------------------------------------------------------
	' Currently, for nurbs, simply apply a UV projection.
	' This doesn't handle distortion or surface meshes, but is better
	' than nothing....
	'--------------------------------------------------------------------
	If TypeName( nurbs ) <> "Nothing" Then
		CreateProjection nurbs, siTxtUV, siTxtDefaultSpherical, , io_textureName
	End If
end sub


'------------------------------------------------------------------------------
' NAME:			CreateMyClusterFromSubcomponents
'
' INPUT:		in_Subcomps	- Subcomponents
'				in_Name		- Name
'				in_Mode     - collection of corners to complete.
'
' RETURN:		Created cluster
'
' DESCRIPTION:	Cannot easily create a cluster with given type.
'				Workaround it... Create your own.
'
'------------------------------------------------------------------------------
function CreateMyClusterFromSubcomponents( in_Subcomps, in_Name, in_Mode )
	Dim l_TempList

	set CreateMyClusterFromSubcomponents = Nothing
	'If not collection item cannot be a subcomponent array.
	if( typename( in_Subcomps ) <> "CollectionItem" ) then
		exit function
	end if

	'If cannot answer to subcomponent then it is not a subcomponent object
	if( typename( in_Subcomps.subcomponent ) = "Nothing" ) then
		exit function
	end if

	'Create cluster
	set l_TempList = SICreateCluster(in_Subcomps.subcomponent.clusterType, in_Name, in_Subcomps.subcomponent.parent3DObject, in_Mode )
	SIAddToCluster l_TempList(0), in_Subcomps

	'Set output...
	set CreateMyClusterFromSubcomponents = l_TempList(0)
end function

'------------------------------------------------------------------------------
' NAME:			PickCornerPoints
'
' INPUT:		in_PolyCls	- collection of polygon clusters/subcomponent elemrefs
'				io_Corners  - collection of corners to complete.
'
' RETURN:		Collection of corner points
'
' DESCRIPTION:	Get corner point clusters. 
'				0) Launch picking
'				1) While NOT RMB select
'				2)	Do 
'				3)		If LMB or MMB record/remove point and start looping for next point
'				4)	While not 4 corners or not RMB select points...
'				5) End While		
'				
' NOTE:			This routine is weird... How can it be done better...  Seems we need more UI stuff...
'------------------------------------------------------------------------------
sub PickCornerPoints( in_PolyCls, byref io_Corners )
	Dim l_LMBString
	Dim l_MMBString
	Dim l_Picked
	Dim l_Button
	Dim l_CurrentSelection
	Dim l_CurrentPolySelection
	Dim	l_NbCorners
	Dim l_NbCls
	Dim l_iI

	l_LMBString = XSIUtils.Translate( IDS_PICK_CORNER_POINT_MSG_L, "XSISCRIPTS" )
	l_MMBString = XSIUtils.Translate( IDS_PICK_CORNER_POINT_MSG_M, "XSISCRIPTS" )
		
	if( typename( io_Corners ) = "Nothing" ) then
		set io_Corners = createobject( "xsi.collection" )
	end if

	' Keep the current selection because we are going to play with selection to do some highlighting...
	set l_CurrentSelection = GetValue( "SelectionList" )

	' ARF: MUST BE A BETTER WAY OF TRANSFORMING TO A SUBCOMP ELEM REF???? SEE MARTIN
	' NOW USING SELECTION LIST TO HIGHLIGHT AND MANAGE SUBCOMP ELEM REF...
	' IT SEEMS THAT	THERE IS A KNOWN BUG ABOUT COMPLETING PICKING MECHANISMS IN OBJECT MODEL	

	l_NbCls = in_PolyCls.count
	l_NbCorners = io_Corners.count

	if( l_NbCls > l_NbCorners ) then

		For l_iI = l_NbCorners to  l_NbCls - 1 

			DeselectAll

			SelectGeometryComponents in_PolyCls( l_iI )
			set l_CurrentPolySelection = GetValue( "SelectionList" )

			SetSelFilter "Polygon"

			PickElement "Point", l_LMBString, l_MMBString, l_Picked, l_Button 
			
			if l_Button = 0 then 
				Exit for
			end if

			Do 
				Select Case l_Button
					Case 1
						AddToSelection l_Picked
					Case 2
						RemoveFromSelection l_Picked
				End Select

				PickElement "Point", l_LMBString, l_MMBString, l_Picked, l_Button 

			Loop While l_Button <> 0

			RemoveFromSelection l_CurrentPolySelection 

			io_Corners.AddItems GetValue("SelectionList")

		Next
	end if

	' Reset, as much as possible, original selection
	DeselectAll
	AddToSelection l_CurrentSelection
	SetSelFilter "Object"

end sub

'------------------------------------------------------------------------------
' NAME:			GetClustersFromCollection
'
' INPUT:		in_Candidates					- objects to convert to polygons
'				in_sFilter						- String filter,ex.: Polygon (See SIFilter)
'				in_bCreateClustersFromSubComps	- TRUE, create clusters from subcomps...
'
' RETURN:		Collection of cluters of type in_sFilter
'
' DESCRIPTION:	Get clusters/subcomps of type in_sFilter from input list of clusters and subcomponents
'				
'------------------------------------------------------------------------------
function GetClustersFromCollection( in_Candidates, in_sFilter, in_bCreateClustersFromSubComps )
	Dim	l_ClsCollection
	Dim l_ClsAndSubComp
	Dim l_Candidate
	Dim l_CreatedCluster

	set l_ClsCollection = createobject("xsi.collection")

	'--------------------------------------------------------------------
	' Basic Validation: get subcomponents and clusters
	'--------------------------------------------------------------------
	set l_ClsAndSubComp = SIFilter( in_Candidates, in_sFilter, True )

	'--------------------------------------------------------------------
	' Get clusters.  Convert subcomps into clusters.
	'--------------------------------------------------------------------
	if( typename( l_ClsAndSubComp ) <> "Nothing" ) then

		for each l_Candidate in l_ClsAndSubComp 
			'It is a cluster...
			if( typename( l_Candidate ) = "Cluster" ) then
				l_ClsCollection.add l_Candidate	
			else
				if( in_bCreateClustersFromSubComps = false ) then
					l_ClsCollection.add l_Candidate
				else
					'It is a subcomponent
					' Create empty hidden cluster from tag: 0 empty, 2 hidden 
					set l_CreatedCluster = CreateMyClusterFromSubcomponents( l_Candidate, "ContourStretch", 0+2 )
					l_ClsCollection.add l_CreatedCluster
				end if
			end if
		next
	end if

	set GetClustersFromCollection = l_ClsCollection
end function

'------------------------------------------------------------------------------
' NAME:			BaseUVSetByContourStretching
'
' INPUT:		in_Preset			- Preset of operator
'				in_CornersElemRef	- Corner clusters (points)
'				in_PolysElemRef		- Polygon clusters
'				in_OnTop			- TRUE if operator is to be on top (THIS IS NOT CURRENTLY USED...)
'				in_IsGen			- TRUE if a generator
'				in_TextureNameOrUV	- in_IsGen TRUE -> String of texture space, else a texture space.
'				out_props			- Created props
'				out_Operators		- Created operators (fromp preset in_Preset)
'
' DESCRIPTION:	Apply polygon UV contour stretching to generate texture coordinates
'				
'------------------------------------------------------------------------------
sub BaseUVSetByContourStretching( in_PolysElemRef, in_CornersElemRef, in_Method, in_MaintainAspect, in_OnTop, in_IsGen, in_TextureNameOrUV, byref out_Props, byref out_Operators )

	Dim l_OpPreset
	Dim	l_PolyCls
	Dim l_Object
	Dim l_Prop
	Dim l_ConnectionSet
	Dim l_PolyGroupIn
	Dim l_UVPropGroupInOut
	Dim l_CornersGroupIn
	Dim l_Operator
	Dim l_NbCornersElemRef
	Dim l_NbPolyElemRef
	Dim l_Corners
	Dim l_iI

	On Error Resume Next
	'--------------------------------------------------------------------
	' Preset selection
	'--------------------------------------------------------------------
	if (in_OnTop = TRUE ) then
			l_OpPreset = "PolyUVContourStretchingOnTopOp"	
	else
			l_OpPreset = "PolyUVContourStretchingOp"
	end if

	'--------------------------------------------------------------------
	' Loop on all the polygon clusters
	'--------------------------------------------------------------------
	l_NbCornersElemRef = in_CornersElemRef.count
	l_NbPolyElemRef    = in_PolysElemRef.count
	Dim l_constructionmode
	l_constructionmode = GetValue( "context.constructionmode" )
	if l_constructionmode <> siConstructionModeModeling then
		SetValue "context.constructionmode", siConstructionModeModeling
	end if

	for l_iI = 0 to l_NbPolyElemRef - 1
		if( typename( in_PolysElemRef( l_iI ) ) <> "Cluster" ) then
			set l_PolyCls = CreateMyClusterFromSubcomponents( in_PolysElemRef( l_iI ), "ContourStretch", 0+2 )
		else
			set l_PolyCls = in_PolysElemRef( l_iI )
		end if

		'--------------------------------------------------------------------
		'is_InGen TRUE implies that we have the string to create a texture space.
		'--------------------------------------------------------------------
		if( in_IsGen = TRUE ) then
			set l_Object = l_PolyCls.parent.parent.parent
			set l_Prop   = CreateUVPropOnCompleteCluster( l_Object, in_TextureNameOrUV )
		else
			set l_Prop = in_TextureNameOrUV
		end if

		'--------------------------------------------------------------------
		'Prepare connection group set
		'--------------------------------------------------------------------
		set l_ConnectionSet = createobject("xsi.connectionset")
		set l_PolyGroupIn = createobject("xsi.collection")
		set l_UVPropGroupInOut = createobject("xsi.collection")
		set l_CornersGroupIn = createobject( "xsi.collection")

		l_UVPropGroupInOut.add l_Prop

		l_PolyGroupIn.add l_PolyCls

		if( l_iI < l_NbCornersElemRef ) then
			if( typename( in_CornersElemRef( l_iI ) ) <> "Cluster"  ) then
				l_CornersGroupIn.add CreateMyClusterFromSubcomponents( in_CornersElemRef( l_iI ), "ContourStretch", 0+2 )
			else
				l_CornersGroupIn.add in_CornersElemRef( l_iI )
			end if
		end if

		l_ConnectionSet.type = siGroupLevel
		l_ConnectionSet.addgroup l_PolyGroupIn
		l_ConnectionSet.addgroup l_UVPropGroupInOut
		l_ConnectionSet.addgroup l_CornersGroupIn

		'--------------------------------------------------------------------
		'Apply and gather output data
		'--------------------------------------------------------------------
		set l_Operator = ApplyOperator( l_OpPreset, l_ConnectionSet, siGroupLevel )
		setvalue l_Operator & ".method", in_Method
		setvalue l_Operator & ".maintainaspect", in_MaintainAspect

		'--------------------------------------------------------------------
		'Record created output
		'--------------------------------------------------------------------
		out_Operators.Add l_Operator
		out_Props.Add l_Prop
	next

	if l_constructionmode <> siConstructionModeModeling then
		SetValue "context.constructionmode", l_constructionmode
	end if
end sub

'------------------------------------------------------------------------------
' NAME:			BaseGenerateUVSetByContourStretching
'
' INPUT:		in_Polys		- Candidates for conversion to polygon clusters.
'				io_TextureName	- String of texture space to be created.
'				in_OnTop		- TRUE if swims else applied current...
'				out_props		- Created props
'				out_Operators	- Created operators (fromp preset in_Preset)
'
' DESCRIPTION:	Apply polygon UV contour stretching to generate texture coordinates
'				
'------------------------------------------------------------------------------
sub BaseGenerateUVSetByContourStretching( in_Polys, byref io_Corners, byref io_TextureName, in_Method, in_MaintainAspect, in_OnTop, in_Interactive, byref out_Props, byref out_Operators )
	Dim l_PolyClsCollection
	Dim l_CornerClsCollection

	'--------------------------------------------------------------------
	' Get valid polygon cluster inputs
	'--------------------------------------------------------------------
	set l_PolyClsCollection = GetClustersFromCollection( in_Polys, "polygon", False )

	'--------------------------------------------------------------------
	' Check if any valid input to work with.
	'--------------------------------------------------------------------
	if( l_PolyClsCollection.count <> in_Polys.count ) then
		logmessage "Some of the input objects are invalid.  Need polygon mesh components.", siError
		exit sub
	end if

	'--------------------------------------------------------------------
	' Find a name for the created property
	'--------------------------------------------------------------------
	io_TextureName = SIFindUniqueTextureName( l_PolyClsCollection, io_TextureName ).Value("PropertyName")
	if ( io_TextureName = "" ) then
		logmessage "Impossible to find a base name for UV texture coordinate.", siError
		Exit Sub
	end if


	'--------------------------------------------------------------------
	' Get valid corner cluster inputs.  It is OK to have an empty collection
	'--------------------------------------------------------------------
	set l_CornerClsCollection = GetClustersFromCollection( io_Corners, "point", False )

	'--------------------------------------------------------------------
	' If interactive then start picking.
	'--------------------------------------------------------------------
	if( in_Interactive = TRUE ) then
		PickCornerPoints l_PolyClsCollection, l_CornerClsCollection
	end if

	'Set output corners...
	set io_Corners = l_CornerClsCollection

	'--------------------------------------------------------------------
	' Apply contour stretching
	'--------------------------------------------------------------------
	BaseUVSetByContourStretching l_PolyClsCollection, l_CornerClsCollection, in_Method, in_MaintainAspect, in_OnTop, TRUE, io_TextureName, out_Props, out_Operators 

end sub

'------------------------------------------------------------------------------
' NAME:			GenerateUVSetByContourStretchingProc
'
' INPUT:		in_Polys		- Candidates for conversion to polygon clusters.
'				io_TextureName	- String of texture space to be created.
'				in_OnTop		- TRUE if swims else applied current...
'				out_props		- Created props
'
' DESCRIPTION:	Apply polygon UV contour stretching to generate texture coordinates (Interactive version)
'				
'------------------------------------------------------------------------------
sub GenerateUVSetByContourStretchingProc( in_Polys, byref io_TextureName, in_Method, in_MaintainAspect, byref io_Corners, in_OnTop )
	Dim l_CreatedOperators
	Dim l_CreatedProps

	'--------------------------------------------------------------------
	' Filter, create, and apply operator
	'--------------------------------------------------------------------
	set l_CreatedOperators = createobject("xsi.collection")
	set l_CreatedProps = createobject("xsi.collection")

	BaseGenerateUVSetByContourStretching in_Polys, io_Corners, io_TextureName, in_Method, in_MaintainAspect, in_OnTop, TRUE, l_CreatedProps, l_CreatedOperators 

	'--------------------------------------------------------------------
	' Select the output object(s); if there are any.
	'--------------------------------------------------------------------
	if l_CreatedProps.count > 0 then
		SelectObj l_CreatedProps 
	end if
	
	'--------------------------------------------------------------------
	' Inspect the operator(s).
	'--------------------------------------------------------------------
	if l_CreatedOperators.count > 0 then
		AutoInspect l_CreatedOperators
	end if
end sub


'------------------------------------------------------------------------------
' NAME:			GenerateUVSetByContourStretchingFunc
'
' INPUT:		in_Polys		- Candidates for conversion to polygon clusters.
'				io_TextureName	- String of texture space to be created.
'				in_OnTop		- TRUE if swims else applied current...
'				out_props		- Created props
'
' RETURN:		Created operators 
'
' DESCRIPTION:	Apply polygon UV contour stretching to generate texture coordinates (Script version)
'				
'------------------------------------------------------------------------------
function GenerateUVSetByContourStretchingFunc( in_Polys, in_textureName, in_Method, in_MaintainAspect, in_Corners, in_OnTop )
	Dim l_CreatedOperators
	Dim l_CreatedProps
	Dim l_Outputs
	Dim l_TextureName

	l_TextureName = in_textureName

	'--------------------------------------------------------------------
	' Filter, create, and apply operator
	'--------------------------------------------------------------------
	set l_CreatedOperators = createobject("xsi.collection")
	set l_CreatedProps = createobject("xsi.collection")
	BaseGenerateUVSetByContourStretching in_Polys, in_Corners, l_TextureName, in_Method, in_MaintainAspect, in_OnTop, FALSE, l_CreatedProps, l_CreatedOperators 

	'--------------------------------------------------------------------
	' Set outputs
	'--------------------------------------------------------------------
	set l_Outputs = createobject("xsi.collection")
	l_Outputs.Add l_CreatedProps
	l_Outputs.Add l_CreatedOperators

	set GenerateUVSetByContourStretchingFunc = l_Outputs
end function


'------------------------------------------------------------------------------
' NAME:			BaseModifyUVSetByContourStretching
'
' INPUT:		in_Polys		- Candidates for conversion to polygon clusters.
'				in_UVProp		- UVProp
'				out_Operators	- Created operators (fromp preset in_Preset)
'
' DESCRIPTION:	Apply polygon UV contour stretching to modify existing texture space 
'				
'------------------------------------------------------------------------------
sub BaseModifyUVSetByContourStretching( in_Polys, byref io_Corners, in_UVProp, in_Method, in_MaintainAspect, in_OnTop, in_Interactive, out_Operators )
	Dim l_DummyProps
	Dim l_PolyClsCollection
	Dim l_CornerClsCollection

	'--------------------------------------------------------------------
	' Get valid polygon cluster inputs
	'--------------------------------------------------------------------
	set l_DummyProps = createobject("xsi.collection")
	set l_PolyClsCollection = GetClustersFromCollection( in_Polys, "polygon", False )

	if( l_PolyClsCollection.count <> in_Polys.count ) then
		logmessage "Some of the input objects are invalid.  Need mesh component selections.", siError
		exit sub
	end if


	'--------------------------------------------------------------------
	' Check if texture space is valid
	'--------------------------------------------------------------------
	
	if in_UVProp.IsClassOf( siUVPropertyID ) = False then
		logmessage "Invalid UV texture coordinate", siError
		exit sub
	end if


	'--------------------------------------------------------------------
	' Get corners.  It is OK to have an empty collection
	'--------------------------------------------------------------------
	set l_CornerClsCollection = GetClustersFromCollection( io_Corners, "point", False )

	if( in_Interactive = TRUE ) then
		PickCornerPoints l_PolyClsCollection, l_CornerClsCollection 
	end if

	set io_Corners = l_CornerClsCollection

	'--------------------------------------------------------------------
	' Apply Operator: 
	'--------------------------------------------------------------------
	BaseUVSetByContourStretching l_PolyClsCollection, l_CornerClsCollection, in_Method, in_MaintainAspect, in_OnTop, FALSE, in_UVProp, l_DummyProps, out_Operators 
end sub

'------------------------------------------------------------------------------
' NAME:			ModifyUVSetByContourStretchingProc
'
' INPUT:		in_Polys		- Candidates for conversion to polygon clusters.
'				in_UVProp		- UVProp
'
' DESCRIPTION:	Apply polygon UV contour stretching to modify existing texture space (Interactive version)
'				
'------------------------------------------------------------------------------
sub ModifyUVSetByContourStretchingProc( in_Polys, in_UVProp, in_Method, in_MaintainAspect, byref io_Corners, in_OnTop )
	Dim l_CreatedOperators

	'--------------------------------------------------------------------
	' Apply Operator: 
	'--------------------------------------------------------------------
	set l_CreatedOperators = createobject("xsi.collection")
	BaseModifyUVSetByContourStretching in_Polys, io_Corners, in_UVProp, in_Method, in_MaintainAspect, in_OnTop, TRUE, l_CreatedOperators 
	
	'--------------------------------------------------------------------
	' Inspect the operator(s).
	'--------------------------------------------------------------------
	if l_CreatedOperators.count > 0 then
		AutoInspect l_CreatedOperators
	end if
	
end sub

'------------------------------------------------------------------------------
' NAME:			ModifyUVSetByContourStretchingProc
'
' INPUT:		in_Polys		- Candidates for conversion to polygon clusters.
'				in_UVProp		- UVProp
'
' RETURN:		Create operators
'
' DESCRIPTION:	Apply polygon UV contour stretching to modify existing texture space (Interactive version)
'				
'------------------------------------------------------------------------------
function ModifyUVSetByContourStretchingFunc( in_Polys, in_UVProp, in_Method, in_MaintainAspect, in_Corners, in_OnTop )
	Dim l_CreatedOperators

	'--------------------------------------------------------------------
	' Apply Operator: 
	'--------------------------------------------------------------------
	set l_CreatedOperators = createobject("xsi.collection")
	BaseModifyUVSetByContourStretching in_Polys, in_Corners, in_UVProp, in_Method, in_MaintainAspect, in_OnTop, FALSE, l_CreatedOperators 
	
	set ModifyUVSetByContourStretchingFunc = l_CreatedOperators
end function

'------------------------------------------------------------------------------
' NAME:			IslandHealUVWProc
'
' INPUT:		in_uvprop - UVProp to perform the heal on.
'------------------------------------------------------------------------------
Function IslandHealUVWProc( in_uvprop, byref io_TargetBoundary, byref io_SourceIslands, in_bAllowScaling, in_dInterpolation )
	Dim l_ConnectionSet, l_UVPropGroupInOut, l_TargetBoundaryGroupIn, l_SourceIslandsGroupIn, l_Operator
	Dim cluster

	if in_uvprop.IsClassOf( siUVPropertyID ) = False then
		logmessage "IslandHealUVW: Invalid argument for UV Property."
		Err.Raise siErrCancelled
	end if 
	if TypeName( in_uvprop.Parent.Parent ) <> "PolygonMesh" then
		logmessage "IslandHealUVW: Only polygon meshes permitted."
		Err.Raise siErrCancelled
	end if

	Dim l_constructionmode
	l_constructionmode = GetValue( "context.constructionmode" )
	if l_constructionmode <> siConstructionModeModeling then
		SetValue "context.constructionmode", siConstructionModeModeling
	end if

	'--------------------------------------------------------------------
	'Prepare connection group set
	'--------------------------------------------------------------------
	set l_ConnectionSet = createobject("xsi.connectionset")
	set l_UVPropGroupInOut = createobject("xsi.collection")
	set l_TargetBoundaryGroupIn = createobject( "xsi.collection")
	set l_SourceIslandsGroupIn = createobject( "xsi.collection")

	l_UVPropGroupInOut.add in_uvprop

	if typename( io_TargetBoundary ) = "Empty" then
		set io_TargetBoundary = PickElement("SampledPoint", XSIUtils.Translate( IDS_ISLAND_HEAL_PICK_TARGET_MSG, "XSISCRIPTS" ))(2)
	end if
	if typename( io_TargetBoundary ) <> "Cluster"   then
		set cluster = CreateMyClusterFromSubcomponents( io_TargetBoundary, "TargetBoundary", 0+2 )
		if TypeName( cluster ) = "Nothing" then
			logmessage "IslandHealUVW: Invalid argument for target boundary."
			if l_constructionmode <> siConstructionModeModeling then
				SetValue "context.constructionmode", l_constructionmode
			end if
			Err.Raise siErrCancelled
		else
			l_TargetBoundaryGroupIn.add cluster
		End if
	else
		l_TargetBoundaryGroupIn.add io_TargetBoundary
	end if

	if typename( io_SourceIslands ) = "Empty" then
		set io_SourceIslands = PickElement("SampledPoint", XSIUtils.Translate( IDS_ISLAND_HEAL_PICK_SOURCE_MSG, "XSISCRIPTS" ))(2)
	end if
	if( typename( io_SourceIslands ) <> "Cluster"  ) then
		set cluster = CreateMyClusterFromSubcomponents( io_SourceIslands, "SourceIslands", 0+2 )
		if TypeName( cluster ) = "Nothing" then
			logmessage "IslandHealUVW: Invalid argument for source islands to heal."
			if l_constructionmode <> siConstructionModeModeling then
				SetValue "context.constructionmode", l_constructionmode
			end if
			Err.Raise siErrCancelled
		else
			l_SourceIslandsGroupIn.add cluster
		End if
	else
		l_SourceIslandsGroupIn.add io_SourceIslands
	end if

	l_ConnectionSet.type = siGroupLevel
	l_ConnectionSet.addgroup l_UVPropGroupInOut
	l_ConnectionSet.addgroup l_TargetBoundaryGroupIn
	l_ConnectionSet.addgroup l_SourceIslandsGroupIn

	'--------------------------------------------------------------------
	'Apply and gather output data
	'--------------------------------------------------------------------
	set l_Operator = ApplyOperator( "IslandHealUVWOp", l_ConnectionSet, siGroupLevel )
	if l_constructionmode <> siConstructionModeModeling then
		SetValue "context.constructionmode", l_constructionmode
	end if

	setvalue l_Operator & ".allowscaling", in_bAllowScaling
	setvalue l_Operator & ".interp", in_dInterpolation

	'--------------------------------------------------------------------
	'Record created output
	'--------------------------------------------------------------------
	set IslandHealUVWProc = l_Operator
End Function

'------------------------------------------------------------------------------
' NAME:			ConnectToSupportUIProc
'
' INPUT:		in_objs - objects to generate UV Property on
'				io_textureName - if given, specify the name to set on the generated UV property,
'								 Upon return, contains the name really used. 
'				in_textureControl - texture control object reused to get the projection parameters
'
' DESCRIPTION:	Texture objects by projection, the texture control object given
'				as parameter defines the projection properties.
'				
'------------------------------------------------------------------------------
sub ConnectToSupportUIProc(in_objs, byref io_textureName, in_textureControl)
	Dim rtn

	'--------------------------------------------------------------------
	' Ask the user for the name
	'--------------------------------------------------------------------
	if io_textureName = "" then
		Dim l_Title, l_Question, l_Default

		l_Title = XSIUtils.Translate( IDS_CONNECT_TO_SUPPORT_TITLE, "XSISCRIPTS" )
		l_Question = XSIUtils.Translate( IDS_CONNECT_TO_SUPPORT_PROJECTION_MSG, "XSISCRIPTS" )
		l_Default = "Texture_Projection"
		io_textureName = InputBox( l_Question, l_Title, l_Default )
	end if

	'--------------------------------------------------------------------
	' Test the case where the user presses the cancel button
	'--------------------------------------------------------------------
	if io_textureName = "" then
		Exit Sub		
	end if

	'--------------------------------------------------------------------
	' Do the sharing
	'--------------------------------------------------------------------
	set rtn = SIConnectToSupport(in_objs, io_textureName, in_textureControl)
	If Not TypeName (rtn) = "Nothing" Then	
		in_textureControl = rtn.Value("3DObjTexture")
		io_textureName = rtn.Value("PropertyName")
	End If

end sub

'------------------------------------------------------------------------------
' NAME:			ConnectToSupportProc
'
' INPUT:		in_objs - objects to generate UV Property on
'				io_textureName - if given, specify the name to set on the generated UV property,
'								 Upon return, contains the name really used. 
'				in_textureSupport - texture support reused
'
' DESCRIPTION:	Texture objects by projection, the texture control object given
'				as parameter defines the projection properties.
'				
'------------------------------------------------------------------------------
sub ConnectToSupportProc(in_objs, byref io_textureName, in_textureSupport)
	Dim rtn

	'--------------------------------------------------------------------
	' Do the sharing
	'--------------------------------------------------------------------
	set rtn = SIConnectToSupport(in_objs, io_textureName, in_textureSupport)
	If Not TypeName (rtn) = "Nothing" Then	
		in_textureSupport = rtn.Value("3DObjTexture")
		io_textureName = rtn.Value("PropertyName")
	End If

end sub

'------------------------------------------------------------------------------
' NAME:			ConnectToProjectionUIProc
'
' INPUT:		in_objs - objects to generate UV Property on
'				io_textureName - if given, specify the name to set on the generated UV property,
'								 Upon return, contains the name really used. 
'				in_textureProjection - texture projection to share a definition with
'
' DESCRIPTION:	Share a texture projection definition across multiple objects.
'				
'------------------------------------------------------------------------------
sub ConnectToProjectionUIProc(in_objs, byref io_textureName, io_textureProjection)
	Dim rtn

	'--------------------------------------------------------------------
	' Get the name from the user
	'--------------------------------------------------------------------
	if io_textureName = "" then
		Dim l_Title, l_Question, l_Default

		l_Title = XSIUtils.Translate( IDS_CONNECT_TO_PROJECTION_TITLE, "XSISCRIPTS" )
		l_Question = XSIUtils.Translate( IDS_CONNECT_TO_SUPPORT_PROJECTION_MSG, "XSISCRIPTS" )
		l_Default = "Texture_Projection"

		io_textureName = InputBox( l_Question, l_Title, l_Default )
	end if

	'--------------------------------------------------------------------
	' Test the case where the user presses the cancel button
	'--------------------------------------------------------------------
	if io_textureName = "" then
		Exit Sub		
	end if

	'--------------------------------------------------------------------
	' Do the sharing
	'--------------------------------------------------------------------
	set rtn = SIConnectToProjection(in_objs, io_textureName, io_textureProjection)
	If Not TypeName (rtn) = "Nothing" Then	
		io_textureProjection = rtn.Value("TextureProjection")
		io_textureName = rtn.Value("PropertyName")
	End If

end sub

'------------------------------------------------------------------------------
' NAME:			ConnectToProjectionProc
'
' INPUT:		in_objs - objects to generate UV Property on
'				io_textureName - if given, specify the name to set on the generated UV property,
'								 Upon return, contains the name really used. 
'				io_textureProjection - texture projection reused
'
' DESCRIPTION:	Share a texture projection definition across multiple objects.
'				
'------------------------------------------------------------------------------
sub ConnectToProjectionProc(in_objs, byref io_textureName, io_textureProjection)
	Dim rtn

	'--------------------------------------------------------------------
	' create the connection between objects and texture  
	'--------------------------------------------------------------------
	set rtn = SIConnectToProjection(in_objs, io_textureName, io_textureProjection)
	If Not TypeName (rtn) = "Nothing" Then	
		io_textureProjection = rtn.Value("TextureProjection")
		io_textureName = rtn.Value("PropertyName")
	End If

end sub

'------------------------------------------------------------------------------
' NAME:			CreateTextureSpatialProc		
'
' INPUT:		in_objs - objects to generate UV Property on
'				io_textureName - if given, specify the name to set on the generated UV property,
'								 Upon return, contains the name really used. 
'
' DESCRIPTION:	Texture objects by setting the UV property accordingly the
'				geometry of objects.
'
'------------------------------------------------------------------------------
sub CreateTextureSpatialProc(in_objs, byref io_textureName )
	Dim rtn, rtnOp

	'--------------------------------------------------------------------
	' create the connection between objects and texture  
	'--------------------------------------------------------------------
	set rtn = SICreateTextureSpatial(in_objs, io_textureName )
	If Not TypeName (rtn) = "Nothing" Then	
		set rtnOp = rtn.value("CreatedObj")
		io_textureName = rtn.Value("PropertyName")
	End If

end sub

'------------------------------------------------------------------------------
' NAME:			CameraTextureProjProc
'
' INPUT:		in_objs - objects to generate UV Property on
'				io_textureName - if given, specify the name to set on the generated UV property,
'								 Upon return, contains the name really used. 
'				io_camera - if given, specify the camera to use as projector
'
' OUTPUT:		io_camera - specify the camera used as projector
'
' DESCRIPTION:	Texture objects by setting the UV property accordingly the
'				projection parameter extracted from the camera.
'
'------------------------------------------------------------------------------
sub CameraTextureProjProc(in_objs, byref io_textureName, byref io_camera)
	Dim rtn, obj, cluster, prop

	'--------------------------------------------------------------------
	' create the connection between objects and the camera
	'--------------------------------------------------------------------
	Set rtn = SICameraTextureProj(in_objs, io_textureName, io_camera)
	If Not TypeName (rtn) = "Nothing" Then	
		io_camera = rtn.Value("3DObjCamera")
		io_textureName = rtn.Value("PropertyName")
		' Camera projections swim by default
		for each obj in in_objs
			if TypeName(obj) = "X3DObject" then
				for each cluster in obj.activeprimitive.geometry.clusters
					if cluster.type = "sample" then
						for each prop in cluster.Properties
							if prop.Name = io_textureName then
								SwimUVW prop
								Exit For
							end if
						next
					end if
				next
			end if
		next
	End If

end sub


'------------------------------------------------------------------------------
' NAME:			CreateTextureUVDomainProc
'
' INPUT:		in_objs - objects to generate UV Property on
'				io_supportName - if given, specify the name to set on the texture control.
'								 Upon return, contains the name really used.
'				io_textureName - if given, specify the name to set on the generated UV property,
'								 Upon return, contains the name really used. 
'
' DESCRIPTION:	Texture objects by setting the UV property accordingly the
'				UV domain of the input objects
'
'------------------------------------------------------------------------------
sub CreateTextureUVDomainProc(in_objs, byref io_supportName, byref io_textureName)
 	if (io_textureName = "") and Not (io_supportName = "") then
		io_textureName = io_supportName
	end if

	'--------------------------------------------------------------------
	' create the Nurbs Texture  
	'--------------------------------------------------------------------
	SICreateTextureUVDomain "NurbsTextureCtrl", in_objs, io_supportName, io_textureName, TRUE
end sub



'------------------------------------------------------------------------------
' NAME:			ToggleVisibilityOfTextureUVDomains
'
' INPUT:		in_Objects - objects to get UV Domain for
'
' DESCRIPTION:	Gets the list of uv domain objects for in_Objects and toggles 
'				its visibility.
'
'------------------------------------------------------------------------------
sub ToggleVisibilityOfTextureUVDomainsProc( in_Objects, in_dwType )
	Dim l_Collection
	Dim l_TextureObject
	set l_Collection = SIGetTextureUVDomains( in_Objects )
	
	for each l_TextureObject in l_Collection
		if in_dwType = -1 then
			ToggleValue	"viewvis", l_TextureObject & ".visibility"
		else
			SetValue l_TextureObject & ".visibility.viewvis", in_dwType 
		end if
	next
end sub


'------------------------------------------------------------------------------
' NAME:			CreateTextureSupportProc
'
' THIS COMMAND IS OBSOLETE.  It should be replaced with CreateProjection.
'
' INPUT:		in_objs - objects to generate UV Property on, if not given, the current selection is used.
'				in_type - Type of generation
'							siTxtPlanarXY
'							siTxtPlanarXZ
'							siTxtPlanarYZ
'							siTxtCylindrical
'							siTxtSpherical
'							siTxtSpatial
'							siTxtCamera	
'							siTxtCubic
'							siTxtUV		

'				in_uvDefaultType - Type of generation used when io_type = 7 "UV", for the object which does not support UV
'							siTxtDefaultPlanarXY
'							siTxtDefaultPlanarXZ
'							siTxtDefaultPlanarYZ
'							siTxtDefaultCylindrical
'							siTxtDefaultSpherical
'							siTxtDefaultSpatial
'							siTxtDefaultCubic
'				io_textureName - if given, specify the name to set on the generated UV property,
'								 Upon return, contains the name really used. 
'				in_parenting - if TRUE the created texture control objects are parented under their respective objects
'
' DESCRIPTION:	Texture objects by projection, the texture control object given
'				as parameter defines the projection properties.
'				
'------------------------------------------------------------------------------
sub CreateTextureSupportProc(in_objs, in_type, in_uvDefaultType, byref io_textureName, in_parenting)
	Dim suppname
	Dim dummycamera

	' Give the projection and the texture support the same name, like in the good old days.
	suppname = io_textureName
	CreateProjectionProc in_objs, in_type, in_uvDefaultType, suppname, io_textureName, in_parenting, siRelDefault, dummycamera
end sub

'------------------------------------------------------------------------------
' NAME:			CreateTextureProjProc
'
'
' DESCRIPTION:	Script procedure for obsolete CreateTextureProj command.
'               Dispatches to CreateTextureBasicGeo procedure.
'				
'------------------------------------------------------------------------------
sub CreateTextureProjProc(in_objs, byref io_textureName, in_parenting, in_projtype, in_projplane)
	Dim suppname

	' Give the projection and the texture support the same name, like in the good old days.
	suppname = io_textureName
	CreateTextureBasicGeo in_objs, suppname, io_textureName, in_parenting, siProjPlanar, siPlaneXY, siRelDefault
end sub

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

end function

'------------------------------------------------------------------------------
' NAME:			FAddPointToBBox
'
'
' DESCRIPTION:	Helper function to compute the bbox of a subset of the uvs.
'				
'------------------------------------------------------------------------------
sub FAddPointToBBox( in_sp, in_elem2offset, in_auvw, byref io_blu, byref io_blv, byref io_bhu, byref io_bhv )
	Dim u, v, offset

	offset = in_elem2offset(in_sp)
	u = in_auvw(0, offset)
	v = in_auvw(1, offset)

	if io_blu > u then
		io_blu = u
	end if
	if io_bhu < u then
		io_bhu = u
	end if
	if io_blv > v then
		io_blv = v
	end if
	if io_bhv < v then
		io_bhv = v
	end if
end sub

'------------------------------------------------------------------------------
' NAME:			FitSubcomponentUVsToImage
'
' INPUT:		in_uvprops	 : the uvproperties to perform transformation on
'				in_fitto	 : the subcomponents to fit to
'				in_bExplicit : modify the uvs instead of modifying the transform
'
' DESCRIPTION:	For each uvprop, compute the transform required to make
'				the image fit the subcomponents.  If in_bExplicit is false,
'				modify the uvprops' projection definition to get the effect.
'				If true, modify the uvprop data directly (install an operator)
'				
'------------------------------------------------------------------------------
sub FitSubcomponentUVsToImage( in_uvprops, in_fitto, in_bExplicit, in_bAspect )
	Dim blu, blv, bhu, bhv
	Dim uvcluster
	Dim elem2offset()
	Dim l_Polygons, l_Vertices, l_Edges, l_SPs, valid, elems, comps, s
	Dim fititem, geom, prop, i, aUVWs, Samples, offset
	Dim subcomplist, newsubcomp, scaleu, scalev, coll

	set subcomplist = CreateObject("XSI.Collection")
	if in_uvprops.IsClassOf( siUVPropertyID ) = True then
		set coll = CreateObject("XSI.Collection")
		coll.Add in_uvprops
	else
		set coll = in_uvprops
	end if
		
	for each prop in coll
		blu = 999999
		blv = 999999
		bhu = -999999
		bhv = -999999
	
		' Get the uvcluster and build a mapping from elements to offsets
		uvcluster = prop.parent.elements.array
		redim elem2offset( ubound(uvcluster)-lbound(uvcluster) )
		for i = lbound(uvcluster) to ubound(uvcluster)
			elem2offset(uvcluster(i)) = i-lbound(uvcluster)
		next
	
		' Get the uvs
		aUVWs = prop.elements.array
	
		set geom = prop.parent.parent.parent.geometry

		for each fititem in in_fitto
			set l_Polygons = SIFilter( fititem, "polygon", True )
			set l_Vertices = SIFilter( fititem, "point", True )
			set l_Edges = SIFilter( fititem, "edge", True )
			set l_SPs = SIFilter( fititem, "sampledpoint ", True )
			
			valid = true
			if TypeName(l_SPs) <> "Nothing" then
				if typename(fititem) = "cluster" then
					elems = fititem.Elements.Array
					if in_bExplicit then
						set newsubcomp = geom.CreateSubComponent(siSampledPointCluster, elems)
						subcomplist.Add newsubcomp
					end if
				else
					elems = fititem.subcomponent.ElementArray
					if in_bExplicit then
						subcomplist.Add fititem.subcomponent
					end if
				end if
				for each s in elems
					FAddPointToBBox s, elem2offset, aUVWs, blu, blv, bhu, bhv
				next
			else
				if TypeName(l_Polygons) <> "Nothing" then
					set comps = geom.Facets
				elseif TypeName(l_Vertices) <> "Nothing" then
					set comps = geom.Points
				elseif TypeName(l_Edges) <> "Nothing" then
					set comps = geom.Segments
				else
					valid = false
				end if
				
				if valid then
					if typename(fititem) = "Cluster" then
						if fititem.parent.parent <> geom.parent then
							valid = false
						end if
					elseif fititem.subcomponent.parent.parent <> geom.parent then
						valid = false
 					end if
				end if
				
				
				if valid then
					if typename(fititem) = "Cluster" then
						elems = fititem.Elements.Array
					else
						elems = fititem.subcomponent.ElementArray
					end if
					
					if in_bExplicit then
						set newsubcomp = geom.CreateSubComponent(siSampledPointCluster)
						for i = lbound(elems) to ubound(elems)
							set samples = comps(elems(i)).samples
							for each s in samples
								newsubcomp.AddElement s.Index
								FAddPointToBBox s.Index, elem2offset, aUVWs, blu, blv, bhu, bhv
							next
						next
						subcomplist.Add newsubcomp
					else
						for i = lbound(elems) to ubound(elems)
							set samples = comps(elems(i)).samples
							for each s in samples
								FAddPointToBBox s.Index, elem2offset, aUVWs, blu, blv, bhu, bhv
							next
						next
					end if
				end if
			end if
			
			if valid = false then
				logmessage "BindProp: '" & fititem & "' is an invalid argument: expecting subcomponents of '" _
							& geom.parent.parent & "'"
				Err.Raise siErrCancelled
				Exit Sub
			end if
		next
		
		if blu <> 999999 then
			scaleu = 1
			if bhu <> blu then
				scaleu = (bhu-blu)
			end if
			scalev = 1
			if bhv <> blv then
				scalev = (bhv-blv)
			end if

			if in_bAspect then
				if scaleu<scalev then
					scaleu = scalev
				else
					scalev = scaleu
				end if
			end if

			if in_bExplicit then
				scaleu = 1.0/scaleu
				scalev = 1.0/scalev

				TranslateUVW subcomplist, prop, -blu+((1.0-(bhu-blu)*scaleu)/2)/scalev, -blv+((1.0-(bhv-blv)*scalev)/2)/scalev, 0, siRelative, siUVW, False
				ScaleUVW subcomplist, prop, scaleu, scalev, 1, siRelative, siUVW, true, 0,0,0 'Note: use pivot of 0,0,0
			else
				SetValue prop & ".projdef.projtrsu", blu
				SetValue prop & ".projdef.projtrsv", blv
				if bhu <> blu then
					SetValue prop & ".projdef.projsclu", scaleu
				end if
				if bhv <> blv then
					SetValue prop & ".projdef.projsclv", scalev
				end if
				SetValue prop & ".projdef.projrotu", 0
				SetValue prop & ".projdef.projrotv", 0
			end if
		end if
	next
end sub

'------------------------------------------------------------------------------
' NAME:		SIFreezeUVWTransformationProc	
'
' INPUT:		in_uvprops	: the uvproperties to perform transformation on
'				in_trsu		: the component containing the U translation
'				in_trsv		: the component containing the V translation
'				in_trsw		: the component containing the W translation
'				in_rotu		: the component containing the U rotation
'				in_rotv		: the component containing the V rotation
'				in_rotw		: the component containing the W rotation
'				in_sclu		: the component containing the U scaling
'				in_sclu		: the component containing the V scaling
'				in_sclu		: the component containing the W scaling
'
' DESCRIPTION:	Freeze the transformation on the uvprops. Given the component of
'               the projection
'				
'------------------------------------------------------------------------------
sub SIFreezeUVWTransformationProc(	in_textureprojectiondefinition )
	Dim aUVW, oUVWProp, oTransformScl, oTransformRot, oTransformTrs, oTmpVector3,i, oProjParams 

	set oUVWProp = in_textureprojectiondefinition.parent
	aUVW = oUVWProp.Elements.Array
	
	set oTransformScl = XSIMath.CreateTransform
	set oTransformRot = XSIMath.CreateTransform
	set oTransformTrs = XSIMath.CreateTransform
	set oTmpVector3 =   XSIMath.CreateVector3

	set oProjParams = in_textureprojectiondefinition.Parameters


	'Apply the scaling,rotation and translation
	oTransformScl.SetScalingFromValues	oProjParams("projsclu").value, _
										oProjParams("projsclv").value, _
										oProjParams("projsclw").value

	oTransformRot.SetRotationFromXYZAnglesValues XSIMath.DegreesToRadians(oProjParams("projrotu").value), _
												 XSIMath.DegreesToRadians(oProjParams("projrotv").value), _
												 XSIMath.DegreesToRadians(oProjParams("projrotw").value)

	oTransformTrs.SetTranslationFromValues	oProjParams("projtrsu").value, _ 
											oProjParams("projtrsv").value, _
											oProjParams("projtrsw").value

	for i =0 to ubound(aUVW,2)
		Dim oResult, oResult2, oResult3
		oTmpVector3.Set aUVW(0,i), aUVW(1,i), aUVW(2,i)	
		set oResult = XSIMath.MapWorldPositionToObjectSpace(oTransformTrs, oTmpVector3)			
		set oResult2 = XSIMath.MapWorldPositionToObjectSpace(oTransformRot, oResult)
		set oResult3 = XSIMath.MapWorldPositionToObjectSpace(oTransformScl, oResult2)
		aUVW(0,i) = oResult3.x
		aUVW(1,i) = oResult3.y
		aUVW(2,i) = oResult3.z			
	next

	'Applying the New values
	oUVWProp.Elements.Array = aUVW

	'Setting the identity values.
	oProjParams("projsclu").value = 1.0
	oProjParams("projsclv").value = 1.0
	oProjParams("projsclw").value = 1.0
	oProjParams("projrotu").value = 0.0
	oProjParams("projrotv").value = 0.0
	oProjParams("projrotw").value = 0.0
	oProjParams("projtrsu").value = 0.0
	oProjParams("projtrsv").value = 0.0
	oProjParams("projtrsw").value = 0.0
end sub

'------------------------------------------------------------------------------
' NAME:			F3DAddRelevantUVFromMat
'------------------------------------------------------------------------------
Sub F3DAddRelevantUVFromMat( in_mat, out_list )
	dim UV
	if TypeName(in_mat) = "Material" then
		On Error Resume Next
			set UV = in_mat.CurrentUV
		On Error Goto 0

		if UV.IsClassOf( siUVPropertyID ) = True then
			out_list.add UV
		end if
	end if
End Sub

'------------------------------------------------------------------------------
' NAME:			F3DAddRelevantUVFromCluster
'------------------------------------------------------------------------------
Sub F3DAddRelevantUVFromCluster( in_clust, out_list )
	dim UV, prop
	if TypeName(in_clust) = "Cluster" then
		if in_clust.type = "sample" then
			for each prop in in_clust.properties
				if prop.type = "uvspace" then
					out_list.add prop
				end if
			next
		elseif in_clust.type = "subsrf" or in_clust.type = "poly" then
			F3DAddRelevantUVFromMat in_clust.Material, out_list
		end if
	end if
End Sub

'------------------------------------------------------------------------------
' NAME:			F3DExtractRelevantUVs
' AUTHOR:		Ian Stewart, April 2005
'
' INPUT:		in_input	: the objects to process
'				in_bAllOnObject	: if true, and an object is found, all the uvs
'								  of the object will be processed.  If false, only the
'								  current UV of the materials will be returned.
'
'------------------------------------------------------------------------------
Function F3DExtractRelevantUVs( in_input, in_bAllOnObject )
	dim result, item, materials, mat, UV, clust
	set result = CreateObject("XSI.Collection")
	result.unique = true
	for each item in in_input
		if TypeName( item ) = "X3DObject" then
			if ( item.type ) <> "Texture Support" then
				if in_bAllOnObject then
					for each clust in item.activeprimitive.geometry.clusters
						if clust.type = "sample" then
							F3DAddRelevantUVFromCluster clust, result
						end if
					next					
				else
					On Error Resume Next
						set materials=item.Materials
					On Error Goto 0
					if TypeName(materials) <> "Nothing" then
						for each mat in materials
							F3DAddRelevantUVFromMat mat, result
						next
					end if
				end if
			end if
		elseif item.IsClassOf( siUVPropertyID ) = True then
			if item.type = "uvspace" then
				result.add item
			end if
		elseif TypeName( item ) = "Cluster" then
			F3DAddRelevantUVFromCluster item, result
		elseif TypeName( item ) = "Operator" and item.type = "TextureOp" then
'			set UV = item.portat(0,2,0).target2
'			result.add UV
		end if
	next
	
	set F3DExtractRelevantUVs = result
End Function

'------------------------------------------------------------------------------
' NAME:			F3DModifyUVGenerators
' AUTHOR:		Ian Stewart, April 2005
'
' INPUT:		in_input	: the objects to process
'				in_eAction	: the generator input action to apply
'
'------------------------------------------------------------------------------
Sub F3DModifyUVInput( in_input, in_eAction )
	dim result, item, mat, materials, UV
	
	' Get all the UVs.
	set result = F3DExtractRelevantUVs( in_input, true )
	for each item in result
		if item.IsClassOf( siUVPropertyID ) = True then
			ChangeUVInput item, in_eAction
		elseif TypeName( item ) = "Operator" then
		end if
	next
End Sub

'------------------------------------------------------------------------------
' NAME:			SwimUVWProc	
' AUTHOR:		Ian Stewart, April 2005
'
' INPUT:		in_input	: the objects from which we will determine UV properties from.
'------------------------------------------------------------------------------
sub SwimUVWProc(in_objs)
	F3DModifyUVInput in_objs, siChangeUVInputActionSwim
end sub

'------------------------------------------------------------------------------
' NAME:			StickUVWProc	
' AUTHOR:		Ian Stewart, April 2005
'
' INPUT:		in_input	: the objects from which we will determine UV properties from.
'------------------------------------------------------------------------------
sub StickUVWProc(in_objs)
	F3DModifyUVInput in_objs, siChangeUVInputActionStick
end sub

'------------------------------------------------------------------------------
' NAME:			ReprojectUVWProc	
' AUTHOR:		Ian Stewart, April 2005
'
' INPUT:		in_input	: the objects from which we will determine UV properties from.
'------------------------------------------------------------------------------
sub ReprojectUVWProc(in_objs)
	F3DModifyUVInput in_objs, siChangeUVInputActionReproject
end sub

'------------------------------------------------------------------------------
' NAME:			InspectUVWProc	
' AUTHOR:		Ian Stewart, April 2005
'
' INPUT:		in_input	: the objects from which we will determine UV properties from.
' DESCRIPTION:	Finds the relevant UVs, inspects them.  Returns the UVs modified in in_objs so that
'			    this command logs as "InspectObj"
'------------------------------------------------------------------------------
sub InspectUVWProc( byref in_objs )
	dim result
	' Get only the global UV on the selection
	set result = F3DExtractRelevantUVs( in_objs, false )
	InspectObj result
end sub

'------------------------------------------------------------------------------
' NAME:			InspectUVWProc	
' AUTHOR:		Ian Stewart, April 2005
'
' INPUT:		in_input	: the objects from which we will determine UV properties from.
'------------------------------------------------------------------------------
sub InspectAllUVWProc( in_objs )
	dim result
	' Inspect any UVs we find on the selection.
	set result = F3DExtractRelevantUVs( in_objs, true )
	InspectObj result
end sub

'------------------------------------------------------------------------------
' NAME:			RecursiveSetCheckerboardMode
' AUTHOR:		min rui, April 2011
'
' INPUT:		in_checkerboard	    - If "TRUE", the checkerboard mode will be set for the texture editor(s)
'               in_views            - The views to iterate through
'
' DESCRIPTION: 	Goes through the list of views passed in, including any child views, and sets the 
'				checkerboard mode of all Texture Editor views
'------------------------------------------------------------------------------
sub RecursiveSetCheckerboardMode( in_checkerboard, in_views )
	On Error Resume Next 
	dim view
	for each view in in_views		
		if (view.Type = "Texture Editor") then
			view.SetAttributeValue "checkerboard", in_checkerboard
		end if
		
		dim subviews
		set subviews = view.Views
		if (Err.Number = 0) Then 
			RecursiveSetCheckerboardMode in_checkerboard, subviews
		else
			Err.Clear
		end if
	next
	On Error Goto 0 
end sub
'------------------------------------------------------------------------------
' NAME:			SetCheckerboardMode
' AUTHOR:		min rui, April 2011
'
' INPUT:		in_checkerboard	    - If TRUE, the checkerboard mode will be set for the texture editor(s)
'               in_view             - If given, then only this texture editor view will set the checkerboard mode. 
'                                     Otherwise, all the texture editors will have the mode set. 
'
' DESCRIPTION: Enables/Disables the checkerboard mode in the texture editor.
'------------------------------------------------------------------------------
sub SetCheckerboardMode( in_checkerboard, in_view )
	dim l_bCheckerboard
	l_bCheckerboard = "False"
	if ( in_checkerboard = TRUE) then
		l_bCheckerboard = "True"
	end if

	if TypeName(in_view) = "Nothing" then
		dim view
		dim views 
		set views = Application.Desktop.ActiveLayout.Views
		RecursiveSetCheckerboardMode l_bCheckerboard, views 
	else
		if in_view.IsClassOf(siViewID) then  
			if in_view.Type = "Texture Editor" then
				in_view.SetAttributeValue "checkerboard", l_bCheckerboard
			end if
		end if
	end if
end sub
