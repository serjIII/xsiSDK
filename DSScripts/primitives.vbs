'******************************************************************************
'
' File supervisor : mbelzile
' Date : 05/04/99
' (c) Copyright 1999 Softimage
'
' $Archive:  $
' $Revision:  $  $Date:  $
' Checkin by: $Author:  $
'
' @doc
' @module primitives.vbs | scripts used for creating primitives
'
'******************************************************************************

' Ensure that all variables are explicitly declared
Option Explicit
const IDS_CAMERA_NOT_SUPPORTED = 1530
const IDS_CAMERA_SETTING_MISMATCH = 1531
'******************************************************************************
' DEBUGGING
'******************************************************************************

' DEVNOTE: remove comment to force a break point when script loaded.
'stop

'******************************************************************************
' PRIMITIVES FUNCTIONS/SUBROUTINES
'******************************************************************************

'------------------------------------------------------------------------------
' NAME:		GetPrimProc 
'
' INPUT:	- in_preset
'			- in_name
'			- in_parent
'
' DESCRIPTION: Create an implicit primitive, select it and inspect it.
'------------------------------------------------------------------------------
function GetPrimProc (in_preset, in_name, in_parent, out_primitive)
	Dim rtn

	'--------------------------------------------------------------------
	' Get the primitive
	' Return Value : l_implicitPrim.item(0) -> 3DObject
	'                l_implicitPrim.item(1) -> PrimObj
	'--------------------------------------------------------------------
	set rtn = SIGetPrim (in_preset, in_name, in_parent, 1)
	set GetPrimProc = rtn.value("Value")
	set out_primitive = rtn.value("Primitive")


	'--------------------------------------------------------------------
	' Select the 3DObject
	'--------------------------------------------------------------------
	if Not TypeName (GetPrimProc) = "Nothing" then
		SelectFilter siConditionalObjectFilter
		SelectObj GetPrimProc 
	end if

	
	'--------------------------------------------------------------------
	' Inspect the new object
	'--------------------------------------------------------------------
	if Not TypeName (out_primitive) = "Nothing" then
		if  Not out_primitive.type = "null" then
			AutoInspect GetPrimProc, ,, "General"
		end if
	end if

end function

'------------------------------------------------------------------------------
' NAME:		CreatePrimProc
'
' INPUT:	- in_PrimitivePreset
'			- in_GeometryType
'			- in_name
'			- in_parent
'
' DESCRIPTION: Create an explicit primitive, select and inspect it.
'------------------------------------------------------------------------------
function CreatePrimProc ( in_preset, in_geometrytype, in_name, in_parent)

	Dim l_Geometry, l_3DObject

	'--------------------------------------------------------------------
	' Create the implicit primitive 
	'--------------------------------------------------------------------
	set l_3DObject = SIGetPrim(in_preset, in_name, in_parent, 1).value("Value")
	set CreatePrimProc = l_3DObject

	'--------------------------------------------------------------------
	' Generate the primitive geometry
	'--------------------------------------------------------------------
	set l_Geometry = SIConvert(in_geometrytype, l_3DObject ).value("CreatedObj")
	
	'--------------------------------------------------------------------
	' Select the 3DObject
	'--------------------------------------------------------------------
	if Not TypeName (l_3DObject) = "Nothing" then
		SelectFilter siConditionalObjectFilter
		SelectObj l_3DObject
	end if
	
	'--------------------------------------------------------------------
	' Inspect the new object
	'--------------------------------------------------------------------
	if Not TypeName (l_Geometry) = "Nothing" then
		' If in immediate force modal inspect. AutoInspect will not do int because we're not passing it any operators.
		if GetUserPref("OperationMode") then
			AutoInspect CreatePrimProc, ,siModal, "General"
		else
			AutoInspect CreatePrimProc, ,, "General"
		end if
	end if

	'--------------------------------------------------------------------
	' Freeze the object in Immediate Mode
	'--------------------------------------------------------------------
	if GetUserPref("OperationMode") then
		FreezeObj l_3DObject, , siUnspecified
	end if

end function

'------------------------------------------------------------------------------
' NAME:	GetPrimLightProc		
'
' INPUT:	- in_preset
'			- in_name	(optional)
'			- in_parent	(optional)
'
' OUTPUT:	Returns the root of the created light or spot
'			- out_primitive: the new light primitive
'			- out_ligobj:	 the new light object (differs from the root for spots)
'			- out_ligintobj: the new light interest object (for spots)
'
' DESCRIPTION: Creates a light using the given preset. For spots, a little 3-node
'			   rig is created.
'------------------------------------------------------------------------------
function GetPrimLightProc (in_preset, in_name, in_parent, out_primitive, out_ligobj, out_ligintobj)
	Dim rtn, l_ligrootobj, l_ligobj, l_ligintobj, l_name
	Dim lposx, lposy, lposz

	'--------------------------------------------------------------------
	' create the light 
	'--------------------------------------------------------------------
	set rtn = SIGetPrimLight( in_preset, in_name, in_parent)
	set l_ligobj = rtn.value("3DObject")
	set l_ligintobj = rtn.value("3DObjSpotInterest")
	set out_primitive = rtn.value("PrimObj")

	if Not TypeName (l_ligintobj) = "Nothing" then
		'--------------------------------------------------------------------
		' Create a parent null
		'--------------------------------------------------------------------
		l_name = in_name & "_Root"
		set l_ligrootobj = SIGetPrim( "SpotRoot", l_name, in_parent, 1).value("Value") 

	
		'--------------------------------------------------------------------
		' Move the root null to where the spot is
		'--------------------------------------------------------------------
		lposx = GetValue( l_ligobj & ".kine.global.posx" )
		lposy = GetValue( l_ligobj & ".kine.global.posy" )
		lposz = GetValue( l_ligobj & ".kine.global.posz" )
		SetValue l_ligrootobj & ".kine.global.posx", lposx
		SetValue l_ligrootobj & ".kine.global.posy", lposy
		SetValue l_ligrootobj & ".kine.global.posz", lposz

		'--------------------------------------------------------------------
		' Put the spotlitht rig together (null parent of spot + interest)
		'--------------------------------------------------------------------
		ParentObj l_ligrootobj, l_ligobj
		ParentObj l_ligrootobj, l_ligintobj

		set out_ligobj	  = l_ligobj
		set out_ligintobj = l_ligintobj
	else
		set l_ligrootobj  = l_ligobj
		set out_ligobj	  = l_ligobj
		set out_ligintobj = Nothing
	end if

	'--------------------------------------------------------------------
	' Select the light
	'--------------------------------------------------------------------
	if Not TypeName (l_ligrootobj) = "Nothing" then
		SelectFilter (siConditionalObjectFilter)
		SelectObj l_ligrootobj, "BRANCH"
	end if
	
	'--------------------------------------------------------------------
	' Inspect the new object (we need here to inspect the primitive and not 
	' the object so we can reach the light shader)
	'--------------------------------------------------------------------
	if Not TypeName (out_primitive) = "Nothing" then
		AutoInspect out_primitive, ,, "General|Rendering"
	end if

	set GetPrimLightProc = l_ligrootobj

end function

'------------------------------------------------------------------------------
' NAME:			GetPrimCameraProc	
'
' OUTPUT:	Returns the root of the created camera
'			- out_primitive: the new camera primitive
'			- out_camobj:	 the new camera object (differs from the root)
'			- out_camintobj: the new camera interest object
'
' DESCRIPTION: Creates a new camera given a preset, the camera is selected and 
' inspected by default.
'
'------------------------------------------------------------------------------
function GetPrimCameraProc(in_preset, in_name, in_parent, out_primitive, _
	out_camobj, out_camintobj)

	set GetPrimCameraProc = GetPrimCameraDefaultProc( in_preset, in_name, _
		in_parent, out_primitive, out_camobj, out_camintobj )

	'--------------------------------------------------------------------
	' Select the camera
	'--------------------------------------------------------------------
	if Not TypeName (GetPrimCameraProc) = "Nothing" then
		SelectFilter (siConditionalObjectFilter)
		SelectObj GetPrimCameraProc, "BRANCH"
	end if
	
	'--------------------------------------------------------------------
	' Inspect the new camera object
	'--------------------------------------------------------------------
	if Not TypeName (out_primitive) = "Nothing" then
		AutoInspect out_camobj, ,, "General"
	end if
end function

'------------------------------------------------------------------------------
' NAME:			GetPrimCameraDefaultProc
'
' OUTPUT:	Returns the root of the created camera
'			- out_primitive: the new camera primitive
'			- out_ligobj:	 the new camera object (differs from the root)
'			- out_ligintobj: the new camera interest object
'
' DESCRIPTION: Creates a default camera using the given preset, creates little 
' 3-node rig.
'
'------------------------------------------------------------------------------
function GetPrimCameraDefaultProc( in_preset, in_name, in_parent, _
	out_primitive, out_camobj, out_camintobj )
	Dim rtn, l_camrootobj, l_camobj, l_camintobj, l_name
	Dim lposx, lposy, lposz

	' We must provide a default name, otherize Root and Interest will not be named correctly	
	if in_name = ""  then
		in_name = "Camera"
	end if

	'--------------------------------------------------------------------
	' Create a parent null
	'--------------------------------------------------------------------
	l_name = in_name & "_Root"
	set l_camrootobj = SIGetPrim( "CameraRoot", l_name, in_parent, 1).value("Value") 


	'--------------------------------------------------------------------
	' Create the camera (without parenting to the new null yet)
	'--------------------------------------------------------------------
	l_name = in_name & "_Interest"


	set rtn = SIGetPrimCamera( in_preset, in_name, l_name, in_parent )
	set l_camobj	= rtn.value("3DObjCamera")
	set l_camintobj = rtn.value("3DObjCameraInterest")
	set out_primitive = rtn.value("PrimObjCamera")
	
	'--------------------------------------------------------------------
	' Move the root null to where the camera is
	'--------------------------------------------------------------------
	lposx = GetValue( l_camobj & ".kine.global.posx" )
	lposy = GetValue( l_camobj & ".kine.global.posy" )
	lposz = GetValue( l_camobj & ".kine.global.posz" )
	SetValue l_camrootobj & ".kine.global.posx", lposx
	SetValue l_camrootobj & ".kine.global.posy", lposy
	SetValue l_camrootobj & ".kine.global.posz", lposz

	'--------------------------------------------------------------------
	' Put the camera rig together (null parent of cam + interest)
	'--------------------------------------------------------------------
	ParentObj l_camrootobj, l_camobj
	ParentObj l_camrootobj, l_camintobj

	set GetPrimCameraDefaultProc = l_camrootobj
	set out_camobj		  = l_camobj
	set out_camintobj	  = l_camintobj

end function

'------------------------------------------------------------------------------
' NAME:	GetPrimLatticeProc	
'
' INPUT:
'
' DESCRIPTION:
'------------------------------------------------------------------------------
function GetPrimLatticeProc( in_preset, in_objs, in_name, in_parent, out_primitive )
	dim l_primitive, l_lattice, l_parent, l_objs

	l_parent    = in_parent

	if Not TypeName( in_objs ) = "Nothing" then
		'--------------------------------------------------------------------
		' Filter the received object to keep only objects with a geometry
		' (mesh, srf and curves for now, but the day SIFilter has a 'Points' 
		' filter we should use that instead so it works on lattices and clouds as well.		
		' Then if there's only one such object, we will use it
		' as the parent for the new wave.
		'--------------------------------------------------------------------
		set l_objs = SIFilter( in_objs, "geometry" )

		if Not TypeName( l_objs ) = "Nothing" then
			if l_objs.count = 1 then
				l_parent    = l_objs(0)
			end if
		end if 
	end if

	'--------------------------------------------------------------------
	' create the lattice  
	'--------------------------------------------------------------------
	set GetPrimLatticeProc = SIGetPrimLattice(in_preset, in_objs, in_name, _
		l_parent, l_primitive )
	if GetPrimLatticeProc = "Nothing" then
		exit function
	end if

	'--------------------------------------------------------------------
	' Select the lattice
	'--------------------------------------------------------------------
	if Not TypeName (GetPrimLatticeProc) = "Nothing" then
		SelectFilter (siConditionalObjectFilter)
		SelectObj GetPrimLatticeProc
	end if
	
	'--------------------------------------------------------------------
	' Inspect the new object
	'--------------------------------------------------------------------
	if Not TypeName (l_primitive) = "Nothing" then
		AutoInspect GetPrimLatticeProc, ,, "General"
	end if

	set out_primitive = l_primitive

end function

'------------------------------------------------------------------------------
' NAME:	GetPrimvolumeDeformProc	
'
' INPUT:	- in_preset
'			- in_name
'			- in_parent
'
' OUTPUT:	- out_primitive
'
' DESCRIPTION: Create a volume deformer using the given preset and name
'------------------------------------------------------------------------------
function GetPrimVolumeDeformProc( in_preset, in_objs, in_name, in_parent, out_primitive )
	dim l_primitive, l_operators

	'--------------------------------------------------------------------
	' create the volume deformer  
	'--------------------------------------------------------------------
	set GetPrimVolumeDeformProc = SIGetPrimVolumeDeform(in_preset, in_objs, in_name, _
		in_parent, l_primitive )

	if GetPrimVolumeDeformProc = "Nothing" then
		exit function
	end if

	'--------------------------------------------------------------------
	' Select the volume deformer
	'--------------------------------------------------------------------
	if Not TypeName (GetPrimVolumeDeformProc) = "Nothing" then
		SelectFilter (siConditionalObjectFilter)
		SelectObj GetPrimVolumeDeformProc

		'----------------------------------------------------------------
		' Inspect the created operators
		'----------------------------------------------------------------
		l_operators = GetConnectedPropVolume( GetPrimVolumeDeformProc )
		if Not l_operators = "" then
			AutoInspect l_operators
		else
			AutoInspect GetPrimVolumeDeformProc, ,, "General"
		end if
	end if
	
	set out_primitive = l_primitive

end function

'------------------------------------------------------------------------------
' NAME:		GetPrimWaveProc 
'
' INPUT:	- in_preset	- wave preset
'			- in_objs	- selected objects
'			- in_name	- name to use for the new wave
'			- in_parent	- where to parent
'
' DESCRIPTION: Create an implicit wave primitive, connect it to a wave op if 
'              applicable, select it and inspect it.
'------------------------------------------------------------------------------
function GetPrimWaveProc (in_preset, in_objs, in_name, in_parent, out_primitive)
	Dim rtn, l_parent, l_objs, l_obj, l_opinputs, l_transform, l_count

	l_parent    = in_parent
	l_transform = False
	l_count     = 0
	if Not TypeName( in_objs ) = "Nothing" then

		'--------------------------------------------------------------------
		' Filter the received object to keep only objects with a geometry
		' (mesh, srf and curves for now, but the day SIFilter has a 'Points' 
		' filter we should use that instead so it works on lattices and clouds as well.		
		' Then if there's only one such object, we will use it
		' as the parent for the new wave.
		'--------------------------------------------------------------------
		set l_objs = SIFilter( in_objs, "geometry" )

		if Not TypeName( l_objs ) = "Nothing" then

			if l_objs.count = 1 then
				l_parent    = l_objs(0)
				l_transform = True
				l_count     = 1
			else
				l_count = l_objs.count
			end if
		end if 
	end if

	'--------------------------------------------------------------------
	' Then Get the Wave primitive
	' Return Value : l_implicitPrim.item(0) -> 3DObject
	'                l_implicitPrim.item(1) -> PrimObj
	'--------------------------------------------------------------------
	set rtn = SIGetPrim (in_preset, in_name, l_parent, 1)
	set GetPrimWaveProc = rtn.value("Value")
	set out_primitive = rtn.value("Primitive")

	if Not TypeName (GetPrimWaveProc) = "Nothing" then

		'--------------------------------------------------------------------
		' Now apply the wave deform operator to the selection, with the 
		' newly created wave ctrl object as input
		'--------------------------------------------------------------------
		if Not TypeName( l_objs ) = "Nothing" then

			for each l_obj in l_objs
				l_opinputs = l_obj & ";" & GetPrimWaveProc
				ApplyOp "Wave", l_opinputs
			next

			'--------------------------------------------------------------------
			' Then is there's a single object selected, we transform it exactly in the same way
			' (it's been made the child).
			'--------------------------------------------------------------------
			if ( l_count = 1 ) then
				Translate GetPrimWaveProc, l_posx, l_posy, l_posz, siAbsolute, siLocal, siObj, siXYZ			
				Rotate    GetPrimWaveProc, 0.000, 0.000, 0.000, siAbsolute, siLocal, siObj, siXYZ
				Scale     GetPrimWaveProc, 1.000, 1.000, 1.000, siAbsolute, siLocal, siObj, siXYZ
			else
				'--------------------------------------------------------------------
				' Otherwize we will at least position the wave at the average
				' location of the selected objects (i'm not sure using the 
				' average orientation would be useful, idem for scaling)
				'--------------------------------------------------------------------
				Dim l_posx, l_posy, l_posz

				l_posx = 0.0
				l_posy = 0.0
				l_posz = 0.0
				for each l_obj in l_objs
					l_posx = l_posx + GetValue( l_obj & ".kine.posx" )
					l_posy = l_posy + GetValue( l_obj & ".kine.posy" )
					l_posz = l_posz + GetValue( l_obj & ".kine.posz" )
				next

				l_posx = l_posx / l_objs.count
				l_posy = l_posy / l_objs.count
				l_posz = l_posz / l_objs.count

				Translate GetPrimWaveProc, l_posx, l_posy, l_posz, siAbsolute, siLocal, siObj, siXYZ
			end if


		end if
	end if

	'--------------------------------------------------------------------
	' Select the 3DObject
	'--------------------------------------------------------------------
	if Not TypeName (GetPrimWaveProc) = "Nothing" then
		SelectFilter siConditionalObjectFilter
		SelectObj GetPrimWaveProc 
	end if

	
	'--------------------------------------------------------------------
	' Inspect the new object
	'--------------------------------------------------------------------
	if Not TypeName (out_primitive) = "Nothing" then
		if  Not out_primitive.type = "null" then
			AutoInspect GetPrimWaveProc, ,, "General"
		end if
	end if
end function


'------------------------------------------------------------------------------
' NAME:	GetMorePrimProc		
'
' INPUT:	- in_preset
'			- in_name	
'			- in_parent	
'			- out_primitive
'			- out_3dobj
'			- out_3dintobj
'			- in_presetdir - Initial directory (hidden from logging)
'			- in_presetfamid - preset family (hidden from logging)
'
' DESCRIPTION: Prompt the user for a preset and, if a preset was
'			   selected, loads it.
'				
'------------------------------------------------------------------------------
function GetMorePrimProc ( in_preset, in_name, in_parent, out_primitive, _
	out_3dobj, out_3dintobj, in_presetdir, in_presetfamid )

	'--------------------------------------------------------------------
	' prompt the user for a primitive preset 
	'--------------------------------------------------------------------
	set in_preset = SIGetPreset( in_presetdir, in_presetfamid )

	'--------------------------------------------------------------------
	' create the primitive 
	'--------------------------------------------------------------------
	if Not TypeName ( in_preset ) = "Nothing" then
		if StrComp(in_presetfamid, "lights", vbTextCompare) = 0 then
			set GetMorePrimProc = GetPrimLight( in_preset, in_name, in_parent, out_primitive)
		elseif StrComp(in_presetfamid, "camera", vbTextCompare) = 0 then
			set GetMorePrimProc = GetPrimCamera( in_preset, in_name, in_parent, out_primitive)
		else
			set GetMorePrimProc = GetPrim( in_preset, in_name, in_parent, out_primitive)
		end if 
	else
		Err.Raise siErrCancelled
	end if

end function

'------------------------------------------------------------------------------
' NAME:	GetPresetModelProc		
'
' INPUT:- in_presetname:	name of the model to load (w/o .emdl at the end)
'		- in_name:			name to give to the model in the scene	
'		- in_parent:		name of the parent object, if any, under which the model must be parented
'		- in_custompset:	name of the pset for which we should open the ppg
'		- out_model:		resulting model
'
' DESCRIPTION: This function will load the requested model in the DSPreset/Models
'				folder, and open the requested control panel which will usually
'				be a custom pset (has to be under the model root)
'				
'------------------------------------------------------------------------------
function GetPresetModelProc( in_modelname, in_newname, in_parent, in_custompset )
	dim l_modelvt, l_model, l_path, l_binspectprev


	' Get the current location where the factory presets are
	' Model presets are then in the XSI_SAMPLES/Models subfolder
	' Note1: on irix we need to append the final '/' because it's not there
	' Note2: using forward slash so it works on irix too
	l_path = Application.InstallationPath( siFactoryPath )
	if Not right(l_path, 1) = "/" then
		l_path = l_path & "/"
	end if  
	l_path = l_path & "Data/XSI_SAMPLES/Models/" & in_modelname & ".emdl"

	'logmessage "l_path " & l_path

	' Set temporarily the autoinspect to off, otherwize ImportModel will pop
	' an unwanted property editor...
	l_binspectprev = SetUserPref( siAutoInspect, False )

	' Import the model, name it as required
	set l_modelvt = ImportModel( l_path, in_parent )
	set l_model = l_modelvt.value("Value")

	' Set the autoinspect back
	SetUserPref siAutoInspect, l_binspectprev

	if Not TypeName ( l_model ) = "Nothing" Then

		SetValue l_model & ".Name", in_newname

		' For some reason with Face Maker visbility of clusters is getting turned ON once we
		' load the model. This needs to be fixed. The following line in the script
		' meanwhile could turn them off....
		'ToggleValue "compclsselvert,compclsseledge,compclsselpoly,compclsselknot,compclsselsampledpoint,compclsselpolynodes", "*.camvis,Views.*.*.camvis"

		' Inspect the desired control panel (ppg). We also try to load a preset that has the
		' same name, in case one exists. In particular this is required if you have a spdl file that
		' provides a ui layout for your custom pset ppg. LoadPreset will make sure that the spdl file is registered.
		' NOTE: the preset must have the exact same name as the one in the scene, if you want the linked
		' parameters and experssions to continue to work (current bug, expressions are not updated in this case)
		if Not in_custompset = "" Then

			' Force the registration on the spdl file for the custom pset. The code above basically works around
			' a few bugs and holes in the system right now.
			' - first there's no cmd to associated a custom pset to a spdl, and in this case the pset is coming from
			'   the model file, so it's already in place and it doesn't know about the spdl
			' - second we could always load a proper preset on top of the custom pset, this effectively let the gpe
			'   know about the spdl file, but has the effect of destroying all the expressions and linked parameters
			'   that are pointing to it, not good
			' So the workaround is to load the preset on a temporary object node, this is enough the make the registration
			' happen, and when we inpect the real custom pset it will be using the proper formatting.
			Dim l_temp, l_preset, i

			' location of pset to inspect may be such as "obj1.obj2.pset", we need to extract
			' the name of the preset to load ex: "pset" so we start from the right up to 
			' a dot if any.
			l_preset = in_custompset
			i = len(in_custompset)
			while i > 0
				if Mid( in_custompset, i, 1 ) = "." then
					l_preset = Right( in_custompset, len(in_custompset) - i )
					i = 0
				end if
				i = i - 1
			wend

			' so our little trick...
			set l_temp = GetPrim( "Null" )
			AddProp l_preset, l_temp
			DeleteObj l_temp

			' .. and now inspect the control panel with the custom pset
			InspectObj l_model & "." & in_custompset, "General,CustomPSet"

		End if
	End if

	' Return the created model
	set GetPresetModelProc = l_model
end function

function GetPreset( in_presetName )
	Dim l_fso
	Dim l_userPreset
	
	set l_fso = XSIFactory.CreateActiveXObject("Scripting.FileSystemObject")

	l_userPreset = XSIUtils.BuildPath( InstallationPath(siFactoryPath), "Data", "DSPresets", in_presetName + ".Preset" )

	if (l_fso.FileExists(l_userPreset)) then
		GetPreset = l_userPreset
		exit function
	end if
	GetPreset = in_presetName
end function

function ValidateCameraObject( in_name )
	on error resume next
	Dim l_camera
	set l_camera = Dictionary.GetObject( in_name )
	if ( l_camera is nothing ) then
		ValidateCameraObject = false
	else		
		if l_camera.Type = "camera" then
			ValidateCameraObject = true
		else
			ValidateCameraObject = false
		end if
	end if
end function

function IsInternalUserCamera( ByVal in_srcCamera )
	Dim l_cameraName
	Dim l_viewCamera(4)
	Dim l_index
	l_viewCamera(0) = "top"
	l_viewCamera(1) = "front"
	l_viewCamera(2) = "right"
	l_viewCamera(3) = "user"
	l_viewCamera(4) = "spot"
	l_cameraName = lcase(in_srcCamera)
	
	for l_index = 0 to 4
		if (l_cameraName = "views.viewa." & l_viewCamera(l_index) & "camera" or _
			l_cameraName = "views.viewb." & l_viewCamera(l_index) & "camera" or _
			l_cameraName = "views.viewc." & l_viewCamera(l_index) & "camera" or _
			l_cameraName = "views.viewd." & l_viewCamera(l_index) & "camera") then
			IsInternalUserCamera = true
			exit function
		end if
	next
	IsInternalUserCamera = false
end function

function CanCopyCameraParamType(byval vt)
	CanCopyCameraParamType = (vt = siString) or (vt = siBool) or (vt = siDouble) or (vt = siFloat) or _
					   (vt = siInt4) or (vt = siInt2) or (vt = siUInt4) or (vt = siUInt2) or (vt = siByte) or (vt = siUByte)
end function

' This method is only meant to be used with camvis and camdisp properties
sub CopyCameraParams( byref oSrc, byref oDest )
	if oSrc is nothing or oDest is nothing then exit sub
	Dim l_oParam
	
	for each l_oParam in oSrc.Parameters
		Dim l_strDst
		l_strDst = oDest.fullname & "." & l_oParam.scriptname
		if CanCopyCameraParamType(l_oParam.ValueType) then
			Dim l_oDstParam
			set l_oDstParam = Dictionary.GetObject(l_strDst)
			if Not l_oDstParam is Nothing then l_oDstParam.Value = l_oParam.Value
		end if
	next
end sub

function CreateShotCameraProc( ByVal in_srcCamera, ByVal in_destCamera, ByVal in_withoutInterest )

	Dim l_sourceCamera
	Dim l_root
	Dim l_parent
	Dim l_camera
	Dim l_presetPath
	Dim l_rootStr
	l_presetPath = GetPreset( "Primitives\Camera" )
	
	' Verify that we have a valid source camera	
	set l_sourceCamera = Dictionary.GetObject( in_srcCamera )	
	set l_root = Application.ActiveSceneRoot
	set l_parent = l_root
	
	l_rootStr = "_Root"
	
	if ( in_WithoutInterest = false ) then
		set l_parent = GetPrim("Null", in_destCamera + l_rootStr, (l_root) )
		MatchTransform l_parent, (l_sourceCamera), siTrn
	end if
	
	' Create our camera
	set l_camera = GetPrim( l_presetPath, in_destCamera, (l_parent) )	

	' Match translation and rotation
	MatchTransform l_camera, (l_sourceCamera)
	
	' Make an interest
	if ( in_withoutInterest = false ) then
		Dim l_parentName
		Dim l_interest
		Dim l_interestDistance
		Dim l_localTransform
		Dim l_transVector
		Dim l_collCns
		Dim l_dirCns
		
		l_parentName = l_camera.Name + l_rootStr
		
		' keep parent name in sync with camera name
		if ( l_parentName <> l_parent.Name ) then
			l_parent.Name = l_parentName
		end if
		
		set l_interest = GetPrim( "Null", l_camera.Name + "_Interest", (l_parent) )
		set l_localTransform = l_camera.Kinematics.Local.Transform
		l_interestDistance = l_sourceCamera.interestdist.value
		
		' Set the interest position according to interest distance
		set l_transVector = XSIMath.CreateVector3()
		l_transVector.Set 0, 0, -l_interestDistance
		l_localTransform.AddLocalTranslation l_transVector
		' Match the global transform
		MatchTransform l_interest, (l_camera)
		' Then set the local transform
		l_interest.Kinematics.Local.Transform = l_localTransform
		
		set l_collCns = SIApplyCns( "Direction", (l_camera), l_interest, true )
		set l_dirCns = l_collCns(0)
		l_dirCns.dirz.value = -1
		l_dirCns.dirz.value = -1
		l_dirCns.upvct_active.value = true
	end if
	
	' Set proper rotation order
	l_camera.kinematics.local.parameters("rotorder").Value = 4
	
	' Set primitive params
	Dim l_camParams
	Dim l_srcParams
	set l_camParams = l_camera.ActivePrimitive.Parameters
	set l_srcParams = l_sourceCamera.ActivePrimitive.Parameters
	
	Dim l_std
	Dim l_aspectRatio
	Dim l_pixelRatio
	if Not IsInternalUserCamera(in_srcCamera) then
		l_std = l_srcParams("std").value
		l_aspectRatio = l_srcParams("aspect").value
		l_pixelRatio = l_srcParams("pixelratio").value
		
		Dim l_sceneAspectRatio
		Dim l_scenePixelRatio

		l_sceneAspectRatio = GetValue("Passes.RenderOptions.ImageAspectRatio")
		l_scenePixelRatio = GetValue("Passes.RenderOptions.ImagePixelRatio")
		if abs(l_aspectRatio - l_sceneAspectRatio) > 0.001 OR _
		   abs(l_pixelRatio - l_scenePixelRatio) > 0.001 then
		   LogMessage XSIUtils.Translate(IDS_CAMERA_SETTING_MISMATCH, "XSISCRIPTS"), siWarning
		end if
	else
		Dim l_oPrefs
		set l_oPrefs = Application.Preferences
		l_std = l_oPrefs.GetPreferenceValue("output_format.picture_standard")
		l_aspectRatio = l_oPrefs.GetPreferenceValue("output_format.picture_ratio")
		l_pixelRatio = l_oPrefs.GetPreferenceValue("output_format.ir_pixel_ratio")
	end if
	
	l_camParams("std").value = l_std
	if l_std = 0 then ' Custom format, we should also copy aspect ratio and pixel ratio
		l_camParams("aspect").value = l_aspectRatio
		l_camParams("pixelratio").value = l_pixelRatio
	end if
	
	l_camParams("fov").Value = l_srcParams("fov").value
	l_camParams("fovtype").Value = l_srcParams("fovtype").value
	l_camParams("interestdist").value = l_srcParams("interestdist").value
	l_camParams("near").value = l_srcParams("near").value
	l_camParams("far").value = l_srcParams("far").value
	l_camParams("proj").value = l_srcParams("proj").value
	l_camParams("orthoheight").value = l_srcParams("orthoheight").value
	
	' Enable the autokeying in camera editing viewport
	l_camParams("autokey").Value = true

	Dim l_srcVisibilityProp
	Dim l_srcDisplayProp
	Dim l_visibilityProp
	Dim l_displayProp
	
	set l_srcVisibilityProp =  l_sourceCamera.Properties("Camera Visibility")
	set l_srcDisplayProp =  l_sourceCamera.Properties("Camera Display")

	set l_visibilityProp =  l_camera.Properties("Camera Visibility")
	set l_displayProp =  l_camera.Properties("Camera Display")
	
	CopyCameraParams l_srcDisplayProp, l_displayProp
	CopyCameraParams l_srcVisibilityProp, l_visibilityProp
	
	' Disable Camera Drawing within the camera visibility prop
	l_visibilityProp.parameters("objcameras").value=false
	
	if ( in_withoutInterest = true ) then
		Dim l_autoUpdateParam
		set l_autoUpdateParam = l_camParams("autoupdatecoidist")
		if ( not l_autoUpdateParam is nothing ) then
			l_autoUpdateParam.Value = false
		end if 
	end if
		
	set CreateShotCameraProc = l_camera
end function

function SiViewportToViewID( ByVal in_viewport )
	Dim		l_vm
	Set l_vm = Application.Desktop.ActiveLayout.Views( "vm" )

	if ( in_viewport = siViewportA ) then
		SiViewportToViewID = "A"
	elseif ( in_viewport = siViewportB ) then
		SiViewportToViewID = "B"
	elseif ( in_viewport = siViewportC ) then
		SiViewportToViewID = "C"
	elseif ( in_viewport = siViewportD ) then
		SiViewportToViewID = "D"
	elseif ( in_viewport = siViewportCurrent ) then
		SiViewportToViewID = l_vm.GetAttributeValue( "viewportundermouse" )
	else ' siViewportFocussed (also default to this if in_viewport is invalid)
		SiViewportToViewID = l_vm.GetAttributeValue( "focusedviewport" )
	end if
	
end function

function CreateShotCameraAndSwitchProc( ByVal in_viewport, ByVal in_destCamName, ByVal in_destViewport, ByVal in_withoutInterest )
	
	Dim l_vm
	Dim l_viewId
	
	set l_vm = Application.Desktop.ActiveLayout.Views( "vm" )
	l_viewId = SiViewportToViewID( in_viewport )

	' Get our camera name
	Dim l_camName
	l_camName = l_vm.GetAttributeValue( "activecamera:"+l_viewId )
	
	' Validate if the camera exists
	if ( ValidateCameraObject( l_camName ) = false ) then
		' If it does not exist then we must be using Top/Left/Front/Right/User
		l_camName = "Views.View" + l_viewId + "." + l_camName + "Camera"
		if ( ValidateCameraObject( l_camName ) = false ) then
			set CreateShotCameraAndSwitchProc = Nothing
			LogMessage XSIUtils.Translate(IDS_CAMERA_NOT_SUPPORTED, "XSISCRIPTS"), siError
			exit function
		end if
	end if
	
	Dim l_camera
	set l_camera = CreateShotCameraProc( l_camName, in_destCamName, in_withoutInterest )
	SetViewCamera l_camera.Fullname, in_destViewport
	set CreateShotCameraAndSwitchProc = l_camera
end function

function GetPrimCameraWithoutInterestProc( ByVal in_preset, ByVal in_name, ByVal in_parent, _
	ByRef out_primitive, ByRef out_camobj )
	Dim l_presetPath

	' We must provide a default name
	if in_name = ""  then
		in_name = "Camera"
	end if

	'--------------------------------------------------------------------
	' Create the camera
	'--------------------------------------------------------------------
	set out_camobj = GetPrim( in_preset, in_name, (in_parent) )
	set out_primitive = out_camobj.ActivePrimitive
	out_primitive.Parameters("autoupdatecoidist").Value = false

	set GetPrimCameraWithoutInterestProc = out_camobj

	'--------------------------------------------------------------------
	' Select the camera
	'--------------------------------------------------------------------
	if Not TypeName (out_camobj) = "Nothing" then
		SelectFilter (siConditionalObjectFilter)
		SelectObj out_camobj, "BRANCH"
	end if
	
	'--------------------------------------------------------------------
	' Inspect the new camera object
	'--------------------------------------------------------------------
	if Not TypeName (out_primitive) = "Nothing" then
		AutoInspect out_camobj, ,, "General"
	end if

end function
'******************************************************************************
' END OF FILE
'******************************************************************************

