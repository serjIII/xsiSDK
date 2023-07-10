'******************************************************************************
'
' File supervisor : Mario Fortin
' Date :
' (c) Copyright 1999  Softimage AVID
'
' @doc
'
' $Archive: $
' $Revision: $  $Date: $
' Checkin by: $Author: $
'
' @module	Rendering.vbs
'
'	This is an VBscript file that contains the all Rendering scripts commands.
'******************************************************************************

'Option Explicit

'******************************************************************************
' DEBUGGING
'******************************************************************************

' DEVNOTE: remove comment to force a break point when script loaded.
'stop

'******************************************************************************
' String Constants (used to translate)
'******************************************************************************
const IDS_BLENDIN_INVALID_TYPE_MSG				= 1103
const IDS_SHARING_MATERIAL_CONFIRM_MSG			= 1104
const IDS_SHARING_MATERIAL_CONFIRM_TITLE		= 1105
const IDS_SHARING_MATERIALS_CONFIRM_MSG			= 1106
const IDS_SHARING_MATERIALS_CONFIRM_TITLE		= 1107
const IDS_ADVANCED_USER_RESHARING_MSG1			= 1108
const IDS_ADVANCED_USER_RESHARING_MSG2			= 1109
const IDS_ADVANCED_USER_RESHARING_MSG3			= 1110
const IDS_ADVANCED_USER_RESHARING_MSG4			= 1111
const IDS_ADVANCED_USER_RESHARING_MSG5			= 1112
const IDS_ADVANCED_USER_RESHARING_MSG6			= 1113
const IDS_ADVANCED_USER_RESHARING_MSG7			= 1114
const IDS_BLENDINPRESETS_FAILED_MSG				= 1115
const IDS_BLENDINPRESETS_FAILED_TITLE			= 1116
const IDS_CREATE_LIGHT_RIG_TITLE				= 1117
const IDS_CREATE_RENDER_CHANNEL_TITLE			= 1118
const IDS_CREATE_FRAMEBUFFER_TITLE				= 1119
const IDS_EXPORT_OBJECT_RENDER_ARCHIVE_TITLE	= 1120
const IDS_PICK_LIGHT_AND_ASSOCIATE_MSG_L		= 1121
const IDS_PICK_LIGHT_AND_ASSOCIATE_MSG_M		= 1122
const IDS_PICK_OBJECT_ASSOCIATE_MSG_L			= 1123
const IDS_PICK_OBJECT_ASSOCIATE_MSG_M			= 1124
const IDS_CREATE_IMAGE_BASED_LIGHTING_PASS_MSG	= 1125
const IDS_CREATE_IMAGE_BASED_LIGHTING_PASS_TITLE= 1126
const IDS_SHADER_COMPOUND_PPG_LOGIC_TITLE		= 1177
const IDS_PRESET_DOES_NOT_APPLY                 = 1195
const IDS_PRESET_DOES_NOT_APPLY_TEXTURE_TITLE   = 1197

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

'******************************************************************************
' RENDERING SUBROUTINES/FUNCTIONS
'******************************************************************************
'------------------------------------------------------------------------------
' NAME:		CreatePassProc
'
' INPUT:	-in_PresetObj
'			-in_Name
'
' DESCRIPTION: Create a new pass, make it current, and inspect.
' AUTHOR: Lesley Phord-Toy, Alexis Smirnov
' DATE: may 1999, feb 2000
'------------------------------------------------------------------------------

sub CreatePassProc ( in_PresetObj, in_Name, out_Value )
	Dim l_returnValue
	Dim l_createdObj
	Dim l_Selection
	Dim l_Partitions
	Dim l_newPartition

	set l_returnValue = SICreatePass(in_PresetObj, in_Name)
	set l_createdObj = l_returnValue.value( "Value" )
	set out_Value = l_createdObj

	'
	' Get the name of the partion to move selected objects
	'
	l_newPartition = "Passes." & l_createdObj.name

	'
	' Set if current pass has a partition with the name that starts with "Partition"
	'
	set l_Partitions = CreateObject("XSI.Collection")
	l_Partitions.Items = l_newPartition & ".Partition*"

	if l_Partitions.count <> 0 then
		set l_Selection = GetValue( "SelectionList" )

		MoveToPartition l_Partitions(0), l_Selection, l_newPartition
	end if

	'
	' Set the current passe
	'
	SetCurrentPass l_createdObj 

	AutoInspect l_createdObj, ,, "Pass" 

end sub
 

'------------------------------------------------------------------------------
' NAME:			CreateEmptyPartitionProc
'
' INPUT:		in_Pass: The pass to receive new partition.
'				in_Name: The name of the new partition
'				in_Type: The type of the new partition( lights or objects )
'				out_Value: return the partition
'
' DESCRIPTION:	Create an empty partition (object or light) and inspects it
'------------------------------------------------------------------------------
sub CreateEmptyPartitionProc( in_Pass, in_Name, in_Type, out_Value )

	SICreateEmptyPartition in_Pass, in_Name, in_Type, out_Value

	if Not TypeName (out_Value) = "Nothing" then
		SelectObj out_Value
		AutoInspect out_Value
	end if
end sub

'------------------------------------------------------------------------------
' NAME:			CreatePartitionProc
'
' INPUT:		in_Pass: The pass to receive new partition.
'				in_Name: The name of the new partition
'				in_objs: Objects to add to the new partition(s), name of the partition(s),
'						pass to add the partition(s)
'				out_Value: return the partition(s)
'
' DESCRIPTION:	Create an object and/light partition (depending on the objects
'				in the list) and add the objects to the partition and inspects it.
'------------------------------------------------------------------------------
sub CreatePartitionProc( in_Pass, in_Name, in_objs, out_Value )

	SICreatePartition in_Pass, in_Name, in_objs, out_Value 

	if Not TypeName (out_Value) = "Nothing" then
		SelectObj out_Value
		AutoInspect out_Value
	end if
end sub

'------------------------------------------------------------------------------
' NAME:		SICreatePartitionProc
'
' INPUT:		in_Pass: The pass to receive new partition.
'				in_Name: The name of the new partition
'				in_objs: Objects to add to the new partition(s), name of the partition(s),
'						pass to add the partition(s)
'				out_Value: return the partition(s)
'
' DESCRIPTION:	Create an object and/light partition (depending on the objects
'				in the list) and add the objects to the partition.
' AUTHOR: Alexis Smirnov
' DATE: mar 2000
'------------------------------------------------------------------------------
sub SICreatePartitionProc( in_Pass, in_Name, in_objs, out_Value )

	Dim rtn 
	Dim l_ObjectListList, l_ObjPart 
	Dim l_LightsList, l_LightPart 

	' create an object/group light minus lights & cameras
	If Not TypeName (in_objs) = "Nothing" then	
		set l_ObjectListList = SIFilter( in_objs, "object, group" ) 
		set l_LightsList  = SIFilter( in_objs, siLightFilter)
	End If
	If Not TypeName (l_ObjectListList) = "Nothing" then	
		set l_ObjectListList = SIFilter( l_ObjectListList, siLightFilter, FALSE ) 
	End If
	If Not TypeName (l_ObjectListList) = "Nothing" then	
		set l_ObjectListList = SIFilter( l_ObjectListList, siCameraFilter, FALSE ) 
	End If

	' Create object partition (if in_objs contain objects or groups) 
 	If Not TypeName (l_ObjectListList) = "Nothing" then		' I.e. not empty
		set rtn = SICreateEmptyPartition( in_Pass, in_Name, siObjectPartition )
		set l_ObjPart = rtn.value("Value")
		set out_Value = l_ObjPart

		MoveToPartition l_ObjPart, l_ObjectListList, in_Pass
	End If

	' Create light partition (if in_objs contains lights)
 	If Not TypeName (l_LightsList) = "Nothing" then		' I.e. not empty
		set rtn = SICreateEmptyPartition( in_Pass, in_Name, siLightPartition )
		set l_LightPart = rtn.value("Value")
		set out_Value = l_LightPart

		MoveToPartition l_LightPart, l_LightsList, in_Pass
	End If

	' Create an empty partition (if in_objs contain no object/group or light)
	If TypeName (l_LightsList) = "Nothing" And _
	   TypeName (l_ObjectListList) = "Nothing" then
		set rtn = SICreateEmptyPartition( in_Pass, in_Name )
		set out_Value = rtn.value("Value")
	End If
end sub


'------------------------------------------------------------------------------
' NAME:		CreatePassFromLayersProc
'
' INPUT:	in_Name: Name of the pass to create
'			out_Value: return the pass
'
' DESCRIPTION: Create a new pass with partitions that match layers, make current, and inspect
' AUTHOR: Alexis Smirnov
' DATE: feb 2000
'------------------------------------------------------------------------------
sub CreatePassFromLayersProc ( in_Name, out_Value )
	Dim l_PassObj
	Dim l_Layers

	'
	' Create an empty pass
	'
	set l_Pass = SICreatePass( "Pass", in_Name )
	set l_PassObj = l_Pass.value( "Value" )
	set out_Value = l_PassObj

	SetCurrentPass l_PassObj 

	'
	' Iterate thorugh all layers and create a partition for every layer.
	' The partition will carry the same name as layer and will have the same objects
	' in it.
	'
	set l_Layers = CreateObject("XSI.Collection")
	l_Layers.Items = "Layers.List.*"
	for each l_Layer in l_Layers
		SICreatePartition l_PassObj, l_Layer.Name, l_Layer & ".*"
	next

	'
	' Set the new pass as active and inspect it
	'
	AutoInspect l_PassObj, ,, "Pass"
end sub

'------------------------------------------------------------------------------
' NAME:		CreatePassWithPartition
'
' INPUT:	-in_PresetObj
'			-in_Name
'			-in_ParamName
'			-in_InputObjs
'
' DESCRIPTION: Create a new pass, and allow user to set visibility on background partition.
' AUTHOR: Lesley Phord-Toy
' DATE: may 1999
'------------------------------------------------------------------------------

sub CreatePassWithPartitionProc ( in_PresetObj, in_Name, in_ParamName, in_InputObjs, out_Value )

	Dim l_returnValue
	Dim l_createdObj
	Dim l_bkgrndPartition
	Dim l_tmpList, l_size
	Dim l_pass
	

	set l_returnValue = SICreatePass(in_PresetObj, in_Name)
	set l_createdObj = l_returnValue.value( "Value" )
	set out_Value = l_createdObj

	SetCurrentPass l_createdObj 

	SICreatePartition ,in_ParamName, in_InputObjs
	
	'At this point, I need to be able to get a string identifying the
	'newly created pass.  The following is a workaround to get the string.

	set l_tmpList = CreateObject( "XSI.Collection" )
	l_tmpList.Add l_createdObj 

	'this loop will only get performed once (workaround to get the name)
	for each l_pass in l_tmpList
		l_bkgrndPartition = l_pass + ".Partitions.Background_Objects_Partition"	
	next
	
	SelectObj l_bkgrndPartition
	
	AddProp "Visibility"

end sub

'******************************************************************************
' SIConnectShaderWithBlends
'******************************************************************************

'------------------------------------------------------------------------------
' NAME:		SIConnectShaderWithBlends
'
' INPUT:	in_preset	- preset shader to be mixed in
'			in_mixer	- type of mixer to use
'			in_inputs	- where to SIConnect the mixers to 
'
' RETURNED:		Preset Shader
' DESCRIPTION:	Create an in_mixer going into each in_Inputs, attach an instance of
'			in_preset to each color1 of these mixers.
'               
'------------------------------------------------------------------------------
Function SIConnectShaderWithBlends(in_preset, in_mixer, in_inputs)
	Dim MyMixers	' The new mixers that we're creating
	Dim MyCurrInput, MyPreset, MyPresetObj
	Dim MyInputs, MyColorObj, MyColorR, MyColorG, MyColorB
	Dim MyOldShader

	set SIConnectShaderWithBlends = Nothing

	'--------------------------------------------------------------------
	' Verify correctness of data
	'--------------------------------------------------------------------
	if IsEmpty(in_inputs) Then
		Exit Function
	end if

	'--------------------------------------------------------------------
	' Loop over each input, attaching a new mixer.
	'--------------------------------------------------------------------
	Dim		first
	first = TRUE
	For Each MyCurrInput in in_inputs
		'--------------------------------------------------------------------
		' Get initial underlying input color
		'--------------------------------------------------------------------
		MyColorR = GetValue(MyCurrInput  & ".red")
		MyColorG = GetValue(MyCurrInput  & ".green")
		MyColorB = GetValue(MyCurrInput  & ".blue")

		'--------------------------------------------------------------------
		' Create a mixer, attached to this input
		'--------------------------------------------------------------------
		set MyMixObj = SIApplyShaderToCnxPoint(in_mixer,MyCurrInput,"mixer")

		'--------------------------------------------------------------------
		' Attach the Output to the color1 component of the mixer
		'--------------------------------------------------------------------
		if first Then
			set MyPresetObj = SIApplyShaderToCnxPoint(in_preset, MyMixObj & ".color1", "Shader")
			first = FALSE
		else
			SIConnectShaderToCnxPoint MyPresetObj, MyMixObj & ".color1"
		end if

		'--------------------------------------------------------------------
		' Copy the original underlying colour of the input to the color2 of the mixer
		' if one existed
		'--------------------------------------------------------------------
		SetValue MyMixObj & ".color2.red", MyColorR
		SetValue MyMixObj & ".color2.green", MyColorG
		SetValue MyMixObj & ".color2.blue", MyColorB
	Next

	'--------------------------------------------------------------------
        ' return the preset object
	'--------------------------------------------------------------------
	set SIConnectShaderWithBlends = MyPresetObj
end Function

'******************************************************************************
' SIConnectShaderWithBlendsInsp
'******************************************************************************

'------------------------------------------------------------------------------
' NAME:		SIConnectShaderWithBlendsInsp
'
' INPUT:		in_preset	- preset shader to be mixed in
'				in_mixer	- type of mixer to use
'				in_inputs	- where to SIConnect the mixers to 
'
' RETURNED:     The instance of the in_preset
' DESCRIPTION:  Create a Mix2colors for each in_Inputs, attach in_output to each color2 of these mixers,
'               SIConnect one mixer to each input.  Inspect result
'               
'------------------------------------------------------------------------------

Function SIConnectShaderWithBlendsInsp(in_preset, in_mixer, in_inputs)
	dim rtn, MyPresetObj
	set MyPresetObj = SIConnectShaderWithBlends(in_preset, in_mixer, in_inputs)

	if Not TypeName (MyPresetObj) = "Nothing" then
		InspectObj MyPresetObj
	end if

	set SIConnectShaderWithBlendsInsp = MyPresetObj
end Function

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

	Dim Obj, l_strComp
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

'**************************************************************
' FCreateShader
'**************************************************************
' NAME:		FCreateShader
'
' INPUT:		in_presetname	- name of the preset to create shader from
'				in_presetfamily	- family the preset belongs to
'				in_name			- name to give shader
'
' RETURNED:		the created shader
'               
'---------------------------------------------------------------
Function FCreateShader(in_presetname, in_presetfamily, in_name, in_container )
	On Error Resume Next

	Dim l_preset, l_shader
	set l_preset = CreatePreset(in_presetname, in_presetfamily)
	if TypeName(l_preset) = "Empty" then
		set FCreateShader = Nothing
		Exit Function
	end if

    set l_shader = CreateShaderFromPreset(l_preset, in_container, in_name )
	if TypeName(l_shader) = "Empty" then
		set FCreateShader = Nothing
	Else
		set FCreateShader = l_shader
	End If
	

End Function

'**************************************************************
' FIs8ColorBlender
'**************************************************************
' NAME:		FIs8ColorBlender
'
' INPUT:		in_shader		- shader to test
'
' DESCRIPTION:		Determine if shader is an 8 color mixer
'               
'---------------------------------------------------------------
Function FIs8ColorBlender(in_shader)
	Dim l_shadertype
	l_shadertype = in_shader.FindAttrib("{22E89E70-B25F-11d3-AE58-00A0C96E63E1}")

	FIs8ColorBlender = (l_shadertype = "{3A3BD020-A9BD-11D3-AE56-00A0C96E63E1}")
End Function

'**************************************************************
' InitFoundBlenderPort
'**************************************************************
' NAME:		InitFoundBlenderPort
'
' INPUT:		in_blender		- blender port is on
'				in_port			- port on blender that was found
'
' DESCRIPTION:	Set the new port to an ideal default state
'               
'---------------------------------------------------------------
Sub InitFoundBlenderPort(in_blender, in_port)
	' Take off any shaders that may be attached
	Set l_shader = SIGetShaderOnCnxPoint(in_blender & ".color" & in_port)
	If Not TypeName(l_shader) = "Nothing" Then
		RemoveShaderFromCnxPoint l_shader, in_blender & ".color" & in_port, False
	End If
	Set l_shader = SIGetShaderOnCnxPoint(in_blender & ".weight" & in_port)
	If Not TypeName(l_shader) = "Nothing" Then
		RemoveShaderFromCnxPoint l_shader, in_blender & ".weight" & in_port, False
	End If
	Set l_shader = SIGetShaderOnCnxPoint(in_blender & ".alpha" & in_port)
	If Not TypeName(l_shader) = "Nothing" Then
		RemoveShaderFromCnxPoint l_shader, in_blender & ".alpha" & in_port, False
	End If
	Set l_shader = SIGetShaderOnCnxPoint(in_blender & ".mode" & in_port)
	If Not TypeName(l_shader) = "Nothing" Then
		RemoveShaderFromCnxPoint l_shader, in_blender & ".mode" & in_port, False
	End If
	' Make sure there are no animations to ruin our day
	RemoveAnimation in_blender & ".color" & in_port & ".red"
	RemoveAnimation in_blender & ".color" & in_port & ".green"
	RemoveAnimation in_blender & ".color" & in_port & ".blue"
	RemoveAnimation in_blender & ".color" & in_port & ".alpha"
	RemoveAnimation in_blender & ".weight" & in_port & ".red"
	RemoveAnimation in_blender & ".weight" & in_port & ".green"
	RemoveAnimation in_blender & ".weight" & in_port & ".blue"
	RemoveAnimation in_blender & ".weight" & in_port & ".alpha"
	RemoveAnimation in_blender & ".alpha" & in_port
	RemoveAnimation in_blender & ".mode" & in_port
	' Set default values.
	SetValue in_blender & ".weight" & in_port & ".red", 1.0
	SetValue in_blender & ".weight" & in_port & ".green", 1.0
	SetValue in_blender & ".weight" & in_port & ".blue", 1.0
	SetValue in_blender & ".weight" & in_port & ".alpha", 0.5
	SetValue in_blender & ".alpha" & in_port, TRUE
	SetValue in_blender & ".mode" & in_port, 1.0000 ' Mix
	SetValue in_blender & ".inuse" & in_port, TRUE
End Sub

'**************************************************************
' FCreateAndInitBlendInBlender
'**************************************************************
' NAME:		FCreateAndInitBlendInBlender
'
' INPUT:		in_name		- name to give upon success
'
' RETURNS:	Created blender if successful
'			Empty otherwise
'
' DESCRIPTION:	This function is provided to make a central place
'				where the blenders are created.  This way, if the
'				name or location of the blender changes, only one
'				piece of code is needed.
'               
'---------------------------------------------------------------
Function FCreateAndInitBlendInBlender(in_name, in_container)
	dim l_blender, i
	Set l_blender = FCreateShader("Mixers\\Mix_8colors", "Texture Shaders", in_name, in_container)
	If TypeName(l_blender) <> "Nothing" Then
		For i = 1 to 7
			SetValue l_blender & ".inuse" & i, FALSE
		Next
	Else
		logmessage "Couldn't create Mix_8colors", siWarning
	End If
	Set FCreateAndInitBlendInBlender = l_blender
End Function

'**************************************************************
' FFindUpToNOpenBlenderPortsOnBlender
'**************************************************************
' NAME:		FFindUpToNOpenBlenderPortsOnBlender
'
' INPUT:		in_num		- num ports to find
'				in_blender	- blender to search on
'
' DESCRIPTION:	Searches on an existing blender for open ports.
'				This port is Then reserved (i.e., marked in use)
'               
'---------------------------------------------------------------
Function FFindUpToNOpenBlenderPortsOnBlender(in_num, in_blender)
	Dim l_temp, i, j, l_numfound
	Dim l_port, l_inuseport, l_shader, l_layerfree, l_option, loc, l_exprAnim

	Set FFindUpToNOpenBlenderPortsOnBlender = CreateObject("XSI.Collection")
	i = 1
	l_numfound = 0

	'--------------------------------------------------------------------
	' Check all 7 ports (base_color is not one of our choices)
	'--------------------------------------------------------------------
	While (l_numfound < in_num) And (i <= 7)
		' Determine if there is a shader, expression or animation on the inuse flag of layer <i>.
		' If yes, then the layer is assumed to be in use
		' Otherwise, check the value of inuse to determine if the layer is in use.
		l_inuseport = in_blender & ".inuse" & i
		l_layerfree = TRUE
		Set l_shader = SIGetShaderOnCnxPoint(l_inuseport)

		If TypeName(l_shader) = "Nothing" Then
			' No shader... what about an Fcurve or expression on the inuse port?
			set l_exprAnim = GetSource(l_inuseport, siAnySource)  ' Expression or Animation
			If TypeName(l_exprAnim) <> "Nothing"  Then
				' Expression or animation found
				l_layerfree = FALSE
			Else
				l_layerfree = Not GetValue(l_inuseport)
			End If
		Else
			' The shader may result in "inuse" to be true at some point - layer i is not free
			l_layerfree = FALSE
		End If

		If l_layerfree Then
			' We have found a layer that we can use!
			FFindUpToNOpenBlenderPortsOnBlender.add in_blender & ".color" & i
			l_numfound = l_numfound + 1
			InitFoundBlenderPort in_blender, i
		End If
		i = i + 1
	Wend
End Function

'**************************************************************
' CopyValAnimExpr
'**************************************************************
' NAME:		CopyValAnimExpr
'
' INPUT:	in_from		- copy from
'			in_to		- copy to
'
' DESCRIPTION:	Copies the value, expression or animation from in_from
'				and pastes it on in_to
'               
'---------------------------------------------------------------
Sub CopyValAnimExpr(in_from, in_to)
	' copy scalar
	Dim V, l_exprAnim
	V = GetValue(in_from)
	SetValue in_to, V

	set l_exprAnim = GetSource(in_from, siAnySource)  ' Expression or Animation
	If TypeName(l_exprAnim) <> "Nothing"  Then
		' There's an animation 
		CopyAnimation in_from
		PasteAnimation in_to
	End If
End Sub

'******************************************************************************
' Local constants
'******************************************************************************

'**************************************************************
' FindOrCreateNOpenBlenderPortsOnPort
'**************************************************************
' NAME:		FindOrCreateNOpenBlenderPortsOnPort
'
' INPUT:		in_num		- number of ports to find
'				in_input	- Port where blenders should feed into
'
' RETURNED:		ports found
'			    or TypeName() = "Nothing" if error
' DESCRIPTION:	Searches the shaders attached to the given port
'				to find in_num open ports.  if there are not enough
'				ports, new blenders are created.  Any data already
'				existing on in_input (colors, fcurves, expressions, shaders...)
'				are moved to a new blender port.
'               
'---------------------------------------------------------------
Sub FindOrCreateNOpenBlenderPortsOnPort(in_num, in_input, ByRef out_blenderports, ByRef out_origshader, in_name, in_container)
	On Error Resume Next

	Set out_origshader = SIGetShaderOnCnxPoint(in_input)
	Set out_blenderports = Nothing
	set l_result = CreateObject("XSI.Collection")

	If in_num = 0 Then
		' Return empty collection
		Set FindOrCreateNOpenBlenderPortsOnPort = l_result
		Exit Sub
	End If

	Dim l_UsesOldblender
	Dim l_blender, rtn, i, l_inputdatatype
	Dim l_OldblenderCnxs(7) 
	Dim l_result, l_numtofind, l_afreeport, l_newports, p
	Dim l_cnvt

	' Get the data type of the input port
	l_inputdatatype = in_input.DataType

	'--------------------------------------------------------------------
	' Determine if there is an existing 8 way mixer to use.
	'--------------------------------------------------------------------
	set l_OldblenderBaseColor = Nothing
	set l_UsesOldblender = FALSE

	l_numtofind = in_num

	If TypeName(out_origshader) <> "Nothing" Then
		' There is already a shader attached to this port

		If FIs8ColorBlender(out_origshader) Then
			' To reuse an existing blender, there must be at least one open port.
			Set l_afreeport = FFindUpToNOpenBlenderPortsOnBlender(1, out_origshader)
			If l_afreeport.Count = 1 Then
				Set l_blender = out_origshader

				' remember the port we have found on the old blender
				l_result.add l_afreeport(0)
				l_numtofind = l_numtofind - 1

				l_UsesOldblender = TRUE
				Set l_OldblenderCnxs(0) = SIGetShaderOnCnxPoint(out_origshader & ".base_color")
				For i = 1 To 7
					Set l_OldblenderCnxs(i) = SIGetShaderOnCnxPoint(out_origshader & ".color" & i)
				Next
			End If
		End If
	End If

	'--------------------------------------------------------------------
	' Create a new blender if necessary, and transfer the old data to base_color
	'--------------------------------------------------------------------
	If l_UsesOldblender = FALSE Then
		Set l_blender = FCreateAndInitBlendInBlender(in_name, in_container)
		if TypeName(l_blender) = "Nothing" Then	Exit Sub				'Error

		if l_inputdatatype = siShaderDataTypeColor4  Then
			' Remove shader, if there is one, to "expose" underlying basic data.
			if TypeName(out_origshader) <> "Nothing" Then
				RemoveShaderFromCnxPoint out_origshader, in_input, False
			end if

			' Transfer any expressions, animations and/or basic scalar values
			CopyValAnimExpr in_input & ".red", l_blender & ".base_color.red"
			CopyValAnimExpr in_input & ".green", l_blender & ".base_color.green"
			CopyValAnimExpr in_input & ".blue", l_blender & ".base_color.blue"
			CopyValAnimExpr in_input & ".alpha", l_blender & ".base_color.alpha"

			' Transfer shader if there is one
			if TypeName(out_origshader) <> "Nothing" Then
				set out_origshader = SIConnectShaderToCnxPoint(out_origshader, l_blender & ".base_color")
			end if

			' Attach the new blender to the input
			set l_blender = SIConnectShaderToCnxPoint(l_blender, in_input)
		else
			' Scalar: Create converter
			set l_cnvt = _
				SIApplyShaderToCnxPoint("Conversion\\Scalar2color", l_blender & ".base_color")
			if TypeName(l_cnvt) = "Empty" Then
				logMessage "Could not create Scalar2color", siWarning
				exit sub												'Error
			end if
			SetValue l_cnvt & ".alpha", 1
			
			' Remove shader, if there is one, to "expose" underlying basic data.
			if TypeName(out_origshader) <> "Nothing" Then
				RemoveShaderFromCnxPoint out_origshader, in_input, False
			end if

			' Transfer any expression, animation and/or basic scalar value
			CopyValAnimExpr in_input, l_cnvt & ".input"

			' Transfer shader if there is one
			if TypeName(out_origshader) <> "Nothing" Then
				set out_origshader = SIConnectShaderToCnxPoint(out_origshader, l_cnvt & ".input")
			end if

			' Attach the new blender to the input.
			set l_cnvt = SIApplyShaderToCnxPoint("Conversion\\Color2scalar", in_input)
			if TypeName(l_cnvt) = "Empty" Then
				logMessage "Couldn't create Color2scalar", siWarning
				exit sub												'Error
			end if

			set l_blender = SIConnectShaderToCnxPoint(l_blender, l_cnvt & ".input")
		end if
	end if

	'--------------------------------------------------------------------
	' We now have: a blender, with at least one open port.
	' We have moved any existing shaders, animations, expressions or colours to the base_color node
	' l_result may contain a blender port already.
	' Search for the remaining blender ports, create extra blenders if necessary.
	'--------------------------------------------------------------------
	If l_numtofind > 0 Then
		Set l_newports = FFindUpToNOpenBlenderPortsOnBlender(l_numtofind, l_blender)
		For Each p in l_newports
			l_result.add p
			l_numtofind = l_numtofind - 1
		Next
	End If

	While l_numtofind > 0
		' Need a new blender
		' We will ALWAYS have a port handy to put a new blender on.
		Dim l_putat
		Set l_putat = l_result(0)
		l_result.Remove l_putat
		l_numtofind = l_numtofind + 1		' just gave up one of our found ports

		Set l_blender = FCreateAndInitBlendInBlender(in_name,in_container)
		If TypeName(l_blender) = "Nothing" Then
			' Undo changes, Exit
			If l_UsesOldblender = TRUE Then
				' We were trying to take advantage of an existing blender
				For i = 1 To 7
					If TypeName(l_OldblenderCnxs(i)) = "Nothing" Then
						RemoveAllShadersFromCnxPoint out_origshader & ".color" & i
						SetValue out_origshader & ".inuse" & i, FALSE
					End If
				Next
				If TypeName(l_OldblenderCnxs(0)) = "Nothing" Then
					RemoveAllShadersFromCnxPoint out_origshader & ".base_color"
				End If
			Else
				If TypeName(out_origshader) <> "Nothing" Then
					SIConnectShaderToCnxPoint out_origshader, in_input
				Else
					' Shouldn't be a shader coming in
					RemoveAllShadersFromCnxPoint in_input					'Undo
				End If
			End If
			Exit Sub														'Error
		End If

		SIConnectShaderToCnxPoint l_blender, l_putat

		Dim min, l_port
		If l_numtofind < 7 Then min = l_numtofind Else min = 7
		For i = 1 To min
			l_result.add l_blender & ".color" & i
			InitFoundBlenderPort l_blender, i
		Next
		l_numtofind = l_numtofind - min
	Wend

	' Normal successful excecution
	Set out_blenderports = l_result
End Sub


'**************************************************************
' FGenerateBlenderNameFromPath
'**************************************************************
' NAME:		FGenerateBlenderNameFromPath
'
' INPUT:		in_base		- path to base the name upon
'
' RETURNED:		A suitable name
'
'---------------------------------------------------------------
Function FGenerateBlenderNameFromPath(in_base)
	Dim dot
	dot = InStrRev(in_base, ".")
	FGenerateBlenderNameFromPath = Right(in_base, Len(in_base) - dot) & "_blend"
End Function

'**************************************************************

Function FCreateImageClip(p_name)
	On Error Resume Next

	set FCreateImageClip = SICreateImageClip(p_name).value("Clip")
	if TypeName(FCreateImageClip) = "Empty" Then
		set FCreateImageClip = Nothing
	end if
End Function
	
'**************************************************************
' BlendInPresetsWithPorts_Internal
'**************************************************************
' NAME:		BlendInPresetsWithPorts_Internal
'
' INPUT:		in_presets	- preset shaders to be mixed in
'				in_inputs	- where to connect to
'				in_blendfirst - blend first preset if true, otherwise, just attach directly.
'
' RETURNED:		created shaders
'
' DESCRIPTION:	Create an in_blender going into each in_Inputs, attach an instance of
'			each in_preset to the inputs of these blenders.
'               
'---------------------------------------------------------------
Function BlendInPresetsWithPorts_Internal(in_presets, in_inputs, in_blendfirst)
	Set BlendInPresetsWithPorts_Internal = CreateObject("XSI.Collection")

	If in_inputs.Count = 0 Then
		Exit Function ' Exit returning empty collection
	End If

    'Get the Common Shader Container for Proper Nesting
	Set l_shaderContainer = FGetUniqueShaderContainer( in_inputs )
	If l_shaderContainer Is Nothing Then
	    Exit Function
	End If
	
	'--------------------------------------------------------------------
	' Process the preset name list
	'--------------------------------------------------------------------
	Dim l_split, l_numpresets, l_presetnames, p

	' Use 20000 since split doesn't work properly with -1 on IRIX
	l_split = split(in_presets, ",", 20000)
	l_numpresets = 0
	ReDim l_presetnames(UBound(l_split)) ' May be bigger than necessary

	For Each p in l_split
		l_presetnames(l_numpresets) = Trim(p)		' Remove spaces
		If l_presetnames(l_numpresets) <> "" Then
			l_numpresets = l_numpresets + 1
		End If
	Next

	If (l_numpresets = 0) Then
		Exit Function ' Exit returning empty collection
	End If

	Dim NewShadersArray
	ReDim NewShadersArray(l_numpresets-1)

	'--------------------------------------------------------------------
	' Create instances of the new presets
	'--------------------------------------------------------------------
	Dim l_shader, l_clip, l_convertedshader
	For i = 0 to l_numpresets-1
		set l_shader = FCreateShader(l_presetnames(i), "Texture Shaders", "", l_shaderContainer)

		' Check an image clip
		if TypeName(l_shader) = "Nothing" Then
			' See if it is an image
			set l_clip = FCreateImageClip(l_presetnames(i))
			if TypeName(l_clip) <> "Nothing" Then
				set l_shader = FCreateShader("Image", "Texture Shaders", "Image", l_shaderContainer)
				SIConnectShaderToCnxPoint l_clip, l_shader & ".tex"
			end if
		else
			set l_clip = Nothing
		end if
		
		if TypeName(l_shader) <> "Nothing" Then
			BlendInPresetsWithPorts_Internal.add l_shader
			set NewShadersArray(i) = l_shader
		else
			set NewShadersArray(i) = Nothing
			LogMessage "Could not create preset or image '" & l_presetnames(i) & "'", siWarning
		End If

	Next

	If BlendInPresetsWithPorts_Internal.count = 0 Then
		' Could not generate any of the presets - Exit
		Exit Function
	End If

	'--------------------------------------------------------------------
	' Apply new shaders to each input
	'--------------------------------------------------------------------
	Dim l_name, l_blenderports, l_origshader, i, l_input, mixp
	Dim l_newpreset, rtn, first

	first = true
	For Each l_input in in_inputs
		Dim l_inputdatatype
		l_inputdatatype = l_input.DataType

		If l_inputdatatype <> siShaderDataTypeColor4 and l_inputdatatype <> siShaderDataTypeScalar Then
			SIMsgBox XSIUtils.Translate( IDS_BLENDIN_INVALID_TYPE_MSG, "XSISCRIPTS", l_input ), vbOKOnly + vbExclamation, XSIUtils.Translate( "Warning", "XSISCRIPTS" ), vbOK
		Else
			i = 0
			If not in_blendfirst Then
				' Connect the first preset directly.
				SIConnectShaderToCnxPoint NewShadersArray(0), l_input
				i = 1
			End If

			If l_numpresets > i Then
				' Generate a name from the port
				l_name = FGenerateBlenderNameFromPath(l_input)

				' Get blender ports to attach to
				call FindOrCreateNOpenBlenderPortsOnPort(l_numpresets-i, l_input, l_blenderports, l_origshader, l_name, l_shaderContainer)
				' l_blenderports points to the blenders found, or Nothing if failed.
				' l_origshader points to the new location of any existing shader on l_input

				If TypeName(l_blenderports) <> "Nothing" Then
					' Attach newly created shaders to the blender ports found
					For Each mixp in l_blenderports
						If TypeName(NewShadersArray(i)) <> "Nothing" Then
							SIConnectShaderToCnxPoint NewShadersArray(i), mixp
						Else
							' Creation of the preset must have failed. we must skip it ...
						End If
						i = i + 1
					Next
				End If
			End If
		End If
	Next
End Function

Function BlendInPresetsWithPorts(in_presets, in_inputs)
	Set BlendInPresetsWithPorts = BlendInPresetsWithPorts_Internal(in_presets, in_inputs, true)
End Function

'**************************************************************
' BlendInPresetsWithPortsInsp
'**************************************************************
' NAME:		BlendInPresetsWithPortsInsp
'
' INPUT:		in_presets	- preset shaders to be mixed in
'				in_inputs	- where to connect to
'
' RETURNED:		created shaders
'
' DESCRIPTION:	Create an in_blender going into each in_Inputs, attach an instance of
'			each in_presets to the inputs of these blenders. Inspect.
'               
'---------------------------------------------------------------
Function BlendInPresetsWithPortsInsp(in_presets, in_inputs)
	Dim rtn
	Set rtn = BlendInPresetsWithPorts(in_presets, in_inputs)

	If rtn.Count > 0 Then
		InspectObj CStr(rtn)
	End If

	Set BlendInPresetsWithPortsInsp = rtn
End Function

'**************************************************************
' FGetFullMaterialPath
'**************************************************************
' NAME:		FGetFullMaterialPath
'
' INPUT:		in_obj		  - object the material is on
'				in_branchflag - siNode, siBranch or siUnspecified
'				in_current	  -	current properties, or local properties?
'
' RETURNED:		a full path to the material in terms of this object
'---------------------------------------------------------------
Function FGetFullMaterialPath(in_obj, in_branchflag, in_current)
	Dim MyPropList, MyBranchFlag

	If in_branchflag = siUnspecified Then
		MyBranchFlag = in_obj.BranchFlag
	else
		MyBranchFlag = in_branchflag
	end If

	If in_current Then
		' @devnote need to standardize on where we put current properties
		' elemref supports the TypeName. TypeName comes from the pset 
		' name
		if in_obj.Type = "#Group" Then
			FGetFullMaterialPath = in_obj & ".CurrentProperties.Material"
		elseIf FBelongsToFamily(in_obj,"Clusters") Then
			FGetFullMaterialPath = in_obj & ".currentprops.Material"
		else
			If MyBranchFlag = siNode Then
				FGetFullMaterialPath = in_obj & ".nodecurrent.Material"
			else
				FGetFullMaterialPath = in_obj & ".branchcurrent.Material"
			end If
		end If
	Else
		' @devnote need to standardize on where we put local properties
		' elemref supports the TypeName. TypeName comes from the pset 
		' name
		if in_obj.Type = "#Group" Then
			FGetFullMaterialPath = in_obj & ".LocalProperties.Material"
		elseif FBelongsToFamily(in_obj,"Clusters") Then
			FGetFullMaterialPath = in_obj & ".localprops.Material"
		else
			If MyBranchFlag = siNode Then
				FGetFullMaterialPath = in_obj & ".nodelocal.Material"
			else
				FGetFullMaterialPath = in_obj & ".branchlocal.Material"
			end If
		end If
	End If
End Function

'**************************************************************
' FIsInterestingTexturablePort
'**************************************************************
' NAME:		FIsInterestingTexturablePort
'
' INPUT:		in_port		- port to verify
'				in_ambient,in_diffuse,in_transp,in_refl - ports we are interested in
'
' RETURNED:		TRUE - port can have default texture applied.  False otherwise
' DESCRIPTION:	Returns whether a default texture can be applied
'               
'---------------------------------------------------------------
Function FIsTransparencyPort( in_port )
	Dim v, mapping
	v = in_port.FindAttrib("{5E373ED1-1085-11d3-B0B7-00A0C982A112}")
	If TypeName(v) <> "Empty" Then
		If v mod 2 = 1 Then ' PLUGIN_ARG_TEXTURABLE
			mapping = in_port.FindAttrib("{8C80DEF3-1064-11d3-B0B7-00A0C982A112}")
			If TypeName(mapping) <> "Empty" Then
				FIsTransparencyPort = (mapping = "{D97375C6-05AE-11D0-91DE-00A024C78EE3}")
				Exit Function
			End If
		End If
	End If

	FIsTransparencyPort = FALSE
End Function

Function FIsReflectionPort( in_port )
	Dim v, mapping
	v = in_port.FindAttrib("{5E373ED1-1085-11d3-B0B7-00A0C982A112}")
	If TypeName(v) <> "Empty" Then
		If v mod 2 = 1 Then ' PLUGIN_ARG_TEXTURABLE
			mapping = in_port.FindAttrib("{8C80DEF3-1064-11d3-B0B7-00A0C982A112}")
			If TypeName(mapping) <> "Empty" Then
				FIsReflectionPort = (mapping = "{D97375C7-05AE-11D0-91DE-00A024C78EE3}")
				Exit Function
			End If
		End If
	End If

	FIsReflectionPort = FALSE
End Function

Function FIsInterestingTexturablePort(in_port, in_ambient, in_diffuse, in_transp, in_refl)
	Dim v, mapping
	v = in_port.FindAttrib("{5E373ED1-1085-11d3-B0B7-00A0C982A112}")
	If TypeName(v) <> "Empty" Then
		If v mod 2 = 1 Then ' PLUGIN_ARG_TEXTURABLE
			mapping = in_port.FindAttrib("{8C80DEF3-1064-11d3-B0B7-00A0C982A112}")
			If TypeName(mapping) <> "Empty" Then
				If mapping = "{3515CC71-082C-11D0-91DE-00A024C78EE3}" Then
					FIsInterestingTexturablePort = in_ambient
					Exit Function
				End If
				If mapping = "{3515CC72-082C-11D0-91DE-00A024C78EE3}" Then
					FIsInterestingTexturablePort = in_diffuse
					Exit Function
				End If
				If mapping = "{D97375C6-05AE-11D0-91DE-00A024C78EE3}" Then
					FIsInterestingTexturablePort = in_transp
					Exit Function
				End If
				If mapping = "{D97375C7-05AE-11D0-91DE-00A024C78EE3}" Then
					FIsInterestingTexturablePort = in_refl
					Exit Function
				End If
			End If
		End If
	End If

	FIsInterestingTexturablePort = FALSE
End Function

'**************************************************************
' FHasInterestingTexturePorts
'**************************************************************
' NAME:		FHasInterestingTexturePorts
'
' INPUT:		in_material	- object upon which to look for default texturable ports
'				in_ambient, in_diffuse, in_transp, in_refl - what is interesting
'
' RETURNED:     TRUE if there is at least one port that is texturable
' DESCRIPTION:  Find the existence of an interesting texture port on the immediate shaders of the supplied
'				material
'               
'------------------------------------------------------------------------------
Function FHasInterestingTexturePorts(in_material, in_ambient, in_diffuse, in_transp, in_refl)
	On Error Resume Next
	FHasInterestingTexturePorts = FALSE

	'--------------------------------------------------------------------
	' Find all the shaders on this material
	'--------------------------------------------------------------------
	Dim l_portstocheck, l_numportstocheck, l_allshaders, l_shader, i
	l_numportstocheck = 2

	ReDim l_portstocheck(l_numportstocheck-1)  ' 0 to num-1
	l_portstocheck(0) = ".surface"
	l_portstocheck(1) = ".shadow"

	Set l_allshaders = CreateObject("XSI.Collection")
	for i = 0 to l_numportstocheck - 1
		set l_shader = SIGetShaderOnCnxPoint(in_material & l_portstocheck(i))
		If TypeName(l_shader) <> "Nothing" Then
			' Only keep note of the shader once per material
			FInsertUniqueInList l_shader, l_allshaders
		End If
	Next

	'--------------------------------------------------------------------
	' Check all the ports on each of the shaders until a texturable port is found.
	'--------------------------------------------------------------------'
	Dim s, v, l_port
	For Each s in l_allshaders
		Set v = EnumElements(s)
		For Each l_port in v
			' Verify that this port is Default Texturable
			If FIsInterestingTexturablePort(l_port,in_ambient, in_diffuse, in_transp, in_refl) Then
				FHasInterestingTexturePorts = TRUE
				Exit Function
			End If
		Next
	Next
End Function

'**************************************************************
' FGetTexturePorts
'**************************************************************
' NAME:		FGetTexturePorts
'
' INPUT:		in_material	- material from which to start the search for ports
'				in_ambient, in_diffuse, in_transp, in_refl - types of ports to get
'
' RETURNED:     A list of the ports to texture
' DESCRIPTION:  Find all the texture ports of the immediate shaders of the supplied
'				materials, controlled by the ambient, diffuse etc. flags.
'               
'------------------------------------------------------------------------------
Function FGetTexturePorts(in_material,in_ambient, in_diffuse, in_transp, in_refl)
	On Error Resume Next
	Set FGetTexturePorts = CreateObject("XSI.Collection")

	'--------------------------------------------------------------------
	' Find all the shaders on this material
	'--------------------------------------------------------------------
	Dim l_portstocheck, l_numportstocheck, l_allshaders, i, l_shader
	l_numportstocheck = 2
	ReDim l_portstocheck(l_numportstocheck-1)  ' 0 to num-1
	l_portstocheck(0) = ".surface"
	l_portstocheck(1) = ".shadow"

	Set l_allshaders = CreateObject("XSI.Collection")
	for i = 0 to l_numportstocheck - 1
		set l_shader = SIGetShaderOnCnxPoint(in_material & l_portstocheck(i))
		If TypeName(l_shader) <> "Nothing" Then
			' Only keep note of the shader once per material
			FInsertUniqueInList l_shader, l_allshaders
		End If
	Next

	'--------------------------------------------------------------------
	' Find all the texturable ports on all the shaders
	'--------------------------------------------------------------------
	Dim s, v, l_port
	For Each s in l_allshaders
		Set v = EnumElements(s)
		For Each l_port in v
			' Verify that this port is Default Texturable
			If FIsInterestingTexturablePort(l_port,in_ambient, in_diffuse, in_transp, in_refl) Then
				FGetTexturePorts.Add l_port
			End If
		Next
	Next
End Function

'**************************************************************
' FCompareMaterials
'**************************************************************
' NAME:		FCompareMaterials
'
' INPUT:		in_mat1, in_mat2 	- materials to compare
'
' RETURNED:     	TRUE if the materials are the same material
'              
'------------------------------------------------------------------------------
Function FCompareMaterials(m1, m2)
	Dim set1, set2, p1, p2
	FCompareMaterials = FALSE
	
	if TypeName(m1) = "Nothing" Then Exit Function
	if TypeName(m2) = "Nothing" Then Exit Function
	
	FCompareMaterials = (Dictionary.GetObject(m1).IsEqualTo( Dictionary.GetObject(m2) ) )
End Function

'**************************************************************
' FIsLocalMaterial
'**************************************************************
' NAME:		FIsLocalMaterial
'
' INPUT:		in_obj		- relative to this object
'				in_prop		- prop to verify
'
' RETURNED:     TRUE if the property is local
'              
'------------------------------------------------------------------------------
Function FIsLocalMaterial( in_obj, in_prop )
	Set Prop = getvalue( in_prop )
	set l_owners = Prop.Owners

	FIsLocalMaterial = false
	if l_owners.count = 2 then
		if l_owners(1) = in_obj then
			FIsLocalMaterial = true
		end if
	end if

End Function

'**************************************************************
' FAskBeginnerUserReSharing
'**************************************************************
' NAME:		FAskBeginnerUserReSharing
'
' RETURNED:     vbYes if all the materials should be made local,
'				vbNo if none of the materials should be made local.
'              
'------------------------------------------------------------------------------
Function FAskBeginnerUserReSharing(in_sharing, in_canmakelocalobjs, in_nummaterials)
	Dim l_numsharings
	l_numsharings = 0
	For j = 0 To in_nummaterials-1
		If in_sharing(j) And in_canMakeLocalObjs(j).Count > 0 Then	' Shared Material
			l_numsharings = l_numsharings + 1
			If l_numsharings > 1 Then Exit For
		End If
	Next

	If l_numsharings > 0 Then
		If l_numsharings = 1 Then
			l_prompt = XSIUtils.Translate( IDS_SHARING_MATERIAL_CONFIRM_MSG, "XSISCRIPTS" )
			l_title = XSIUtils.Translate( IDS_SHARING_MATERIAL_CONFIRM_TITLE, "XSISCRIPTS" )
		Else
			l_prompt = XSIUtils.Translate( IDS_SHARING_MATERIALS_CONFIRM_MSG, "XSISCRIPTS" )
			l_title = XSIUtils.Translate( IDS_SHARING_MATERIALS_CONFIRM_TITLE, "XSISCRIPTS" )
		End If

		FAskBeginnerUserReSharing = SIMsgBox( l_prompt, vbYesNo + vbQuestion + vbDefaultButton2, l_title, vbNo )
	Else
		FAskBeginnerUserReSharing = vbNo
	End If
End Function	

'**************************************************************
' FAskAdvancedUserReSharing
'**************************************************************
' NAME:		FAskAdvancedUserReSharing
'
' RETURNED:     TRUE if the shared material should be made local,
'				FALSE if the material should not be made local.
'              
'------------------------------------------------------------------------------
Function FAskAdvancedUserReSharing(in_material, in_canmakelocalobjs, in_sharing)
	dim l_prompt, l_prompt1
	l_prompt = XSIUtils.Translate( IDS_ADVANCED_USER_RESHARING_MSG1, "XSISCRIPTS", in_material )

	If in_canmakelocalobjs.Count = 1 Then 
		l_prompt1 = l_prompt1 & XSIUtils.Translate( IDS_ADVANCED_USER_RESHARING_MSG2, "XSISCRIPTS", in_canmakelocalobjs(0) )

	Else
		If in_canmakelocalobjs.Count > 2 Then
			l_prompt1 = XSIUtils.Translate( IDS_ADVANCED_USER_RESHARING_MSG4, "XSISCRIPTS", in_canmakelocalobjs.Count, in_canmakelocalobjs(0), in_canmakelocalobjs(1) )
		ElseIf in_canmakelocalobjs.Count = 2 Then
			l_prompt1 = XSIUtils.Translate( IDS_ADVANCED_USER_RESHARING_MSG3, "XSISCRIPTS", in_canmakelocalobjs.Count, in_canmakelocalobjs(0), in_canmakelocalobjs(1) )
		End If
	End If

	l_prompt = l_prompt & l_prompt1 & XSIUtils.Translate( IDS_ADVANCED_USER_RESHARING_MSG5, "XSISCRIPTS" )


	l_prompt = l_prompt & Chr(13) & Chr(10) & Chr(13) & Chr(10)
	If in_canmakelocalobjs.Count <> 1 Then
		l_prompt1 = XSIUtils.Translate( IDS_ADVANCED_USER_RESHARING_MSG6, "XSISCRIPTS", in_canmakelocalobjs.Count )
	Else
		l_prompt1 = XSIUtils.Translate( IDS_ADVANCED_USER_RESHARING_MSG7, "XSISCRIPTS" )
	End If

	FAskAdvancedUserReSharing = SIMsgBox(l_prompt&l_prompt1, vbYesNo + vbQuestion + vbDefaultButton2, XSIUtils.Translate( IDS_ADVANCED_USER_RESHARING_TITLE, "XSISCRIPTS" ), vbNo)

End Function

'**************************************************************
' FCreateMaterialList
'**************************************************************
' NAME:		FCreateMaterialList
'
' INPUT:		   in_objects  - Objects to search on
'				   in_sharedmataction - if a shared material is found, what does the script do?
'							0 - Never make local versions of the material
'							1 - Automatically make local versions of the material
'							2 - Ask the beginner user
'							3 - Ask the advanced user
'
' RETURNED:     A comma separated list of the materials
'
' DESCRIPTION:  Find all the materials associated with this object.  Ensure that no material
'		       is returned twice.  Resolve the issue of having a shared material.
'              
'------------------------------------------------------------------------------
Function FCreateMaterialList(in_objects, byref in_sharedmataction, _
							 in_ambient, in_diffuse, in_transp, in_refl )
	Dim l_numobjs
	l_numobjs = in_objects.count

	Dim l_sharing, l_canMakeLocalObjs, l_cantMakeLocalObjs, l_alreadyLocalObjs, l_materials
	ReDim l_materials(l_numobjs-1)	
	ReDim l_sharing(l_numobjs-1)
	ReDim l_canMakeLocalObjs(l_numobjs-1)
	ReDim l_cantMakeLocalObjs(l_numobjs-1)
	ReDim l_alreadyLocalObj(l_numobjs-1)

	'--------------------------------------------------------------------
	' Find all the materials, take note of duplicates.
	' Maintain a list of objects using each material (l_obswithmat)
	'--------------------------------------------------------------------
	Dim l_nummaterials, l_obj, j, l_m
	Dim l_matcurr, l_islocal
	Dim l_matcurrasstring, l_owner

	l_nummaterials = 0
	For Each l_obj in in_objects
		if l_obj.Type = "polySubComponent" or l_obj.Type = "subsrfSubComponent" then
			if l_obj.Type = "polySubComponent" then
				set l_cluster = SICreateCluster( siPolygonCluster, , l_obj.subcomponent.parent3DObject, 0 )(0)
			else
				set l_cluster = SICreateCluster( siSubSurfaceCluster, ,l_obj.subcomponent.parent3DObject, 0 )(0)
			end if
			logmessage l_obj.subcomponent
			SIAddToCluster l_cluster, l_obj.subcomponent
			set l_obj = l_cluster
			ApplyShader ,l_cluster
			Set l_matcurr = l_cluster.material
		else
		    ' If we have a non-texturable component, just ignore it.
			if l_obj.Type <> "sampleSubComponent" and l_obj.Type <> "pntSubComponent" and l_obj.Type <> "edgeSubComponent" then
				Set l_matcurr = l_obj.material
			else
			    ' Default to previous behavior
				set l_matcurr = Nothing
			end if
		end if
		If TypeName(l_matcurr) <> "Nothing" Then
			l_matcurrasstring = FGetFullMaterialPath(l_obj, siUnspecified, TRUE)
			l_islocal = FIsLocalMaterial(l_obj, l_matcurrasstring)
			
			for j = 0 To l_nummaterials-1
				If FCompareMaterials(l_materials(j), l_matcurr) Then
					' Yes - add to the list
					if l_isLocal then
						if TypeName(l_alreadyLocalObj(j)) <> "Nothing" Then
							logmessage "Error: material local to two objects!", siError
						end if
						set l_alreadyLocalObj(j) = l_obj
						' The local name is always preferred
						set l_materials(j) = l_matcurr
					else
						l_canMakeLocalObjs(j).add l_obj
						l_sharing(j) = TRUE
					End If
					Exit For
				End If
			Next

			If j = l_nummaterials Then
				' First occurence
				If FHasInterestingTexturePorts(l_matcurrasstring,in_ambient, in_diffuse, in_transp, in_refl) Then
					' This material has texture ports to worry about
					set l_alreadyLocalObj(j) = Nothing
					set l_canMakeLocalObjs(j) = CreateObject("XSI.Collection")

					if l_isLocal then
						set l_alreadyLocalObj(j) = l_obj
						l_sharing(j) = FALSE
					else
						l_canMakeLocalObjs(j).add l_obj
						l_sharing(j) = TRUE
					end if

					set l_materials(j) = l_matcurr

					l_nummaterials = l_nummaterials + 1
				End If
			End If
		End If
	Next

	'--------------------------------------------------------------------
	' Let's see what to do with any shared materials
	'--------------------------------------------------------------------
	Dim l_beginneranswer, l_answer
	Dim l_result, l_title, l_prompt, l_asstring
	Set l_result = CreateObject("XSI.Collection")

	l_result = ""
	For j = 0 To l_nummaterials-1
		Dim l_dolocalalso
		l_dolocalalso = FALSE
		If l_sharing(j) Then	' Shared Material
			if l_canMakeLocalObjs(j).Count > 0 Then
				If in_sharedmataction = 0 Then 
					l_answer = vbNo   ' Always answer no
				ElseIf in_sharedmataction = 1 Then 
					l_answer = vbYes  ' Always answer yes
				ElseIf in_sharedmataction = 2 Then 
					If ( l_nummaterials = 1 ) And ( StrComp( l_materials(0).Name, "SceneMaterial", 1) ) Then
						l_answer = vbYes
					Else
						l_answer = FAskBeginnerUserReSharing(l_sharing, l_canMakeLocalObjs, l_nummaterials)		' Beginner mode: always the same answer
					End If

				ElseIf in_sharedmataction = 3 Then
					' Ask the advanced user
					l_answer = FAskAdvancedUserReSharing(l_materials(j), l_canMakeLocalObjs(j), l_sharing(j))
				End If

				If l_answer = vbYes Then
					Dim l_newmat
					' Create the local copies for shared objects
					for each l_obj in l_canMakeLocalObjs(j)
						l_asstring = FGetFullMaterialPath(l_obj, siUnspecified, TRUE)
						if l_obj.branchflag = siNode Then
							set l_obj = MakeLocal(l_asstring, siNodePropagation)(0)
						else 
							set l_obj = MakeLocal(l_asstring, siBranchPropagation)(0)
						end if

						l_result = l_result & l_obj.fullname & ","
					Next
					l_dolocalalso = TRUE
				Else
					' Just add one of them.  Since it is shared, it will update all of them.
					l_result = l_result & FGetFullMaterialPath(l_canMakeLocalObjs(j)(0), siUnspecified, TRUE) & ","
				End If
			else
				l_dolocalalso = TRUE
			end if
		else
			' Only one owner
			if l_canMakeLocalObjs(j).Count > 0 then
				l_result = l_result & FGetFullMaterialPath(l_canMakeLocalObjs(j)(0), siUnspecified, TRUE) & ","
			else
				l_dolocalalso = TRUE
			end if
		end if
		If l_dolocalalso then
			If TypeName(l_alreadyLocalObj(j)) <> "Nothing" Then
				l_result = l_result & FGetFullMaterialPath(l_alreadyLocalObj(j), siUnspecified, TRUE) & ","
			End If
		End If
		
	Next

	FCreateMaterialList = l_result
End Function

'**************************************************************
' FInsertUniqueInList
'**************************************************************
' NAME:		FInsertUniqueInList
'
' INPUT:		in_item		- item to put in list
'				in_list		- list to put it in
'
' RETURNED:		TRUE - unique item was added to the list FALSE: item already existed in list
' DESCRIPTION:	Adds the item to the list if not already there
'               
'---------------------------------------------------------------
Function FInsertUniqueInList(in_item, in_list)
	Dim p
	For Each p in in_list
		If p = in_item Then
			FInsertUniqueInList = FALSE
			Exit Function
		End If
	Next

	in_list.add in_item
	FInsertUniqueInList = TRUE
End Function

'---------------------------------------------------------------
Function FParamExists( param )
		On Error Resume Next
		set test = EnumElements( param, false)
		FParamExists = ( TypeName(test) <> "Empty" )
		On Error Goto 0
End Function

'**************************************************************
' BlendInPresets
'**************************************************************
' NAME:		BlendInPresets
'
' INPUT:		in_presets	- preset shader to be mixed in
'	 			in_objects  - Objects to search for ports
'				in_sharedmataction - if a shared material is found, what does the script do?
'							0 - Never make local versions of the material
'							1 - Automatically make local versions of the material
'							2 - Ask the beginner user
'							3 - Ask the advanced user
'				in_notifynoresult - if TRUE, and if in_presets exists, and none of the objects could
'								be textured, pop up a dialog
'				in_ambient, in_diffuse, in_transp, in_refl - ports to blend
'
' RETURNED:     The instances of the in_presets
'
' DESCRIPTION:  Find all the default texture ports of the immediate shaders of the supplied
'			   objects.  Create all the presets requested, and create a blender For Each texture
'			   port, and connect into each port.
'              
'------------------------------------------------------------------------------
Function BlendInPresets(in_presets, in_objects, in_sharedmataction, in_notifyIfnoresult, in_mode,_
							in_ambient, in_diffuse, in_transp, in_refl )
	Set BlendInPresets = CreateObject("XSI.Collection")

	If Trim(in_presets) = ""  Then Exit Function
	If in_objects.Count = 0 Then Exit Function

	'--------------------------------------------------------------------
	' Ensure the object only appears once in the list
	'--------------------------------------------------------------------
	Dim l_filtered, l_obj
	Set l_filtered = CreateObject("XSI.Collection")
	For Each l_obj in in_objects
		FInsertUniqueInList l_obj, l_filtered
	Next

	'--------------------------------------------------------------------
	' Figure out which materials to attach to.  This will include 
	' determining what to do with shared materials.
	'--------------------------------------------------------------------
	Dim l_materials
	l_materials = FCreateMaterialList(l_filtered, in_sharedmataction,in_ambient, in_diffuse, in_transp, in_refl)

	'--------------------------------------------------------------------
	' Texture each material separately
	'--------------------------------------------------------------------
	Dim l_mat, l_portlist, l_newpresets, p, l_matpath, parent
	For Each l_mat in split(l_materials, ",", 20000)
		if len(trim(l_mat)) > 0 Then
			' Find all the ports that we will attach to on this material
			Set l_portlist = FGetTexturePorts(l_mat,in_ambient, in_diffuse, in_transp, in_refl)
		
			If l_portlist.count > 0 Then
				if in_mode = siReplaceNoBlend or in_mode = siReplaceAndBlendInPreset Then
					For Each port in l_portlist
						Set out_origshader = SIGetShaderOnCnxPoint(port)

						' Remove shader, if there is one.
						if TypeName(out_origshader) <> "Nothing" Then
							RemoveShaderFromCnxPoint out_origshader, port, False
						End if

						set parent = EnumElements( port, false)(0)
						If in_transp and FIsTransparencyPort( port ) Then
							If FParamExists( parent & ".usealphatrans" ) and FParamExists( parent & ".inverttrans" ) Then
								SetValue parent & ".usealphatrans", true
								SetValue parent & ".inverttrans", true
							End If
						ElseIf in_refl and FIsReflectionPort( port ) Then
							If FParamExists( parent & ".usealpharefl" ) Then
								SetValue parent & ".usealpharefl", true
							End If
						End If
					Next
				End if

				' Connect the presets to the ports we've found
				if in_mode = siReplaceAndBlendInPreset or in_mode = siBlendInPreset then
					Set l_newpresets = BlendInPresetsWithPorts_Internal(in_presets, l_portlist, true )
				else
					Set l_newpresets = BlendInPresetsWithPorts_Internal(in_presets, l_portlist, false )
				end if
				For Each p in l_newpresets
					BlendInPresets.add p
				Next
			End If
		End If
	Next

	If in_notifyIfnoresult and BlendInPresets.Count = 0 Then
		SIMsgBox XSIUtils.Translate( IDS_BLENDINPRESETS_FAILED_MSG, "XSISCRIPTS" ), vbOKOnly,XSIUtils.Translate( IDS_BLENDINPRESETS_FAILED_TITLE, "XSISCRIPTS" ), vbOK
	End If
End Function

'**************************************************************
' BlendInPresetsInsp
'**************************************************************
' NAME:		BlendInPresetsInsp
'
' INPUT:		in_presets	- preset shaders to be mixed in
'		 		in_objects  - Objects to search for ports
'				in_sharedmataction - if a shared material is found, what does the script do?
'							0 - Never make local versions of the material
'							1 - Automatically make local versions of the material
'							2 - Ask the beginner user
'							3 - Ask the advanced user
'				in_notifynoresult - if TRUE, and if in_presets exists, and none of the objects could
'								be textured, pop up a dialog
'				in_ambient, in_diffuse, in_transp, in_refl - ports to blend
'
' RETURNED:     The instances of the in_presets
'
' DESCRIPTION:  Find all the default texture ports of the immediate shaders of the supplied
'			   objects.  Create all the presets requested, and create a blender For Each texture
'			   port, and connect into each port.
'			   Inspect
'              
'------------------------------------------------------------------------------
Function BlendInPresetsInsp(in_presets, in_objects, in_sharedmataction, in_notifyIfnoresult, in_mode, _
							in_ambient, in_diffuse, in_transp, in_refl )
	Dim rtn
	set rtn = BlendInPresets(in_presets, in_objects, in_sharedmataction, in_notifyIfnoresult,in_mode, _
							in_ambient, in_diffuse, in_transp, in_refl )

	If rtn.Count > 0 Then
		InspectObj CStr(rtn)
	End If

	Set BlendInPresetsInsp = rtn
End Function

'**************************************************************
Function FFindContainer( in_port )
	set FFindContainer = in_port
	
	'If it's a parameter get it's parent to have Shader/Material...
	If FFindContainer.IsClassOf( siParameterID ) Then
	    set FFindContainer = FFindContainer.Parent
	End If
	
	'If it is still a parameter, it is a compound paramete... and we need to get again the parent.
	If FFindContainer.IsClassOf( siCompoundParameterID ) Then
	    set FFindContainer = FFindContainer.Parent
	End If  
	
	If FFindContainer Is Nothing Then
	    Exit Function
	End If
	
	If FFindContainer.IsClassOf( siTextureLayerID ) Or FFindContainer.IsClassOf( siPrimitiveID ) Then
	    set FFindContainer = FFindContainer.Parent
	End If
    	
End Function

'**************************************************************
' BlendInTextureLayersWithPorts_Internal
'**************************************************************
' NAME:		BlendInTextureLayersWithPorts_Internal
'
' INPUT:		in_presets	- preset shaders to be mixed in
'				in_inputs	- where to connect to
'				in_blendfirst - blend first preset if true, otherwise, just attach directly.
'
' RETURNED:		created layers
'
' DESCRIPTION:	Create an in_blender going into each in_Inputs, attach an instance of
'			each in_preset to the inputs of these blenders.
'               
'---------------------------------------------------------------
Function BlendInTextureLayersWithPorts_Internal(in_presets, in_inputs, in_blendfirst)

	Set BlendInTextureLayersWithPorts_Internal = CreateObject("XSI.Collection")

	If in_inputs.Count = 0 Then
		Exit Function ' Exit returning empty collection
	End If
	
	'--------------------------------------------------------------------
	' Process the preset name list
	'--------------------------------------------------------------------
	Dim l_split, l_numpresets, l_presetnames, p

	' Use 20000 since split doesn't work properly with -1 on IRIX
	l_split = split(in_presets, ",", 20000)
	l_numpresets = 0
	ReDim l_presetnames(UBound(l_split)) ' May be bigger than necessary

	For Each p in l_split
		l_presetnames(l_numpresets) = Trim(p)		' Remove spaces
		If l_presetnames(l_numpresets) <> "" Then
			l_numpresets = l_numpresets + 1
		End If
	Next

	If (l_numpresets = 0) Then
		Exit Function ' Exit returning empty collection
	End If

	Dim NewShadersArray, l_layer
	ReDim NewShadersArray(l_numpresets-1)

	'--------------------------------------------------------------------
	' Create a list of the shaders/materials that are being layered
	'--------------------------------------------------------------------
	Dim l_allcontainers, l_port, l_container, l_parents, l_allcontainersObjects
	Set l_allcontainers = CreateObject("XSI.Collection")
    Set l_allcontainersObjects = CreateObject("XSI.Collection")
    
	For each l_port in in_inputs
		set l_container = FFindContainer( l_port )
		If TypeName(l_container)<>"" And FSupportsTextureLayers(l_container) Then
			FInsertUniqueInList l_container, l_allcontainers
			l_allcontainersObjects.add GetValue(l_container)
		else
			LogMessage "Could not add layers to " & l_port, siWarning
		End If
	Next

	if l_allcontainers.count = 0 then
		' No targets
		Exit Function	' Exit returning empty collection
	End If

    'Get the Common Shader Container for Proper Nesting
	set l_shaderContainer = FGetUniqueShaderContainer( l_allcontainersObjects )
	if l_shaderContainer Is Nothing then
	    Exit Function	' Exit returning empty collection
	end if
	
	'--------------------------------------------------------------------
	' Create layers with instances of the new presets
	'--------------------------------------------------------------------
	Dim l_target, l_targetlist, l_portlist, l_shaderorlayer, l_clip
	For i = 0 to l_numpresets-1
		For each l_target in l_allcontainers
			
			set l_targetlist = CreateObject("XSI.Collection")
			l_targetlist.add l_target
			
			set l_portlist = CreateObject("XSI.Collection")
			For each l_port in in_inputs
				set l_container = FFindContainer( l_port )
				if l_container = l_target then
					l_portlist.add l_port
				end if
			Next
			set l_shaderorlayer = Nothing
			if l_portlist.count > 0 then
				if i<>0 or in_blendfirst then
					set reference = Nothing
					set l_layer = AddPresetTextureLayer_Internal( l_presetnames(i), l_targetlist, "", true, reference )
					' Check an image clip
					if TypeName(l_layer) = "Nothing" Then
						' See if it is an image
						set l_clip = FCreateImageClip(l_presetnames(i))
						if TypeName(l_clip) <> "Nothing" Then
							set l_layer = AddImageTextureLayer_Internal( l_presetnames(i), l_targetlist, "", true, reference )
							if TypeName( l_layer ) <> "Nothing" Then
								set l_shader = SIGetShaderOnCnxPoint( l_layer & ".color" )
								l_layer.weight = 1
								set l_shaderorlayer = l_layer
							end if
						else
							set l_shaderorlayer = Nothing
						end if
					else
						l_layer.weight = 1
						set l_shaderorlayer = l_layer
						set l_clip = Nothing
					end if
					if TypeName(l_shaderorlayer) <> "Nothing" then
						AddTextureLayerPorts l_shaderorlayer, l_portlist
					end if
				else
					set l_shaderorlayer = FCreateShader(l_presetnames(i), "Texture Shaders", "", l_shaderContainer)

					' Check an image clip
					if TypeName(l_shaderorlayer) = "Nothing" Then
						' See if it is an image
						set l_clip = FCreateImageClip(l_presetnames(i))
						if TypeName(l_clip) <> "Nothing" Then
							set l_shaderorlayer = FCreateShader("Image", "Texture Shaders", "Image", l_shaderContainer)
							SIConnectShaderToCnxPoint l_clip, l_shaderorlayer & ".tex"
						end if
					else
						set l_clip = Nothing
					end if
					if TypeName(l_shaderorlayer) <> "Nothing" then
						For each l_port in l_portlist 
							SIConnectShaderToCnxPoint l_shaderorlayer, l_port
						Next
					end if
				end if
			End If
			
			if TypeName(l_shaderorlayer) <> "Nothing" Then
				BlendInTextureLayersWithPorts_Internal.add l_shaderorlayer
			else
				LogMessage "Could not create preset or image '" & l_presetnames(i) & "'", siWarning
			End If
		Next
	Next
End Function

Function BlendInTextureLayersWithPorts(in_presets, in_inputs)
	Set BlendInTextureLayersWithPorts = BlendInTextureLayersWithPorts_Internal(in_presets, in_inputs, true)
End Function

'**************************************************************
' BlendClipsInTextureLayersWithPorts_Internal
'**************************************************************
' NAME:		BlendClipsInTextureLayersWithPorts_Internal
'
' INPUT:		in_clips	- clips to be mixed in
'				in_inputs	- where to connect to
'				in_blendfirst - blend first clip if true, otherwise, just attach directly.
'
' RETURNED:		created layers
'
'---------------------------------------------------------------
Function BlendClipsInTextureLayersWithPorts_Internal(in_clips, in_inputs, in_blendfirst)
	Set BlendClipsInTextureLayersWithPorts_Internal = CreateObject("XSI.Collection")
    
	If in_inputs.Count = 0 Then
		Exit Function ' Exit returning empty collection
	End If

	'--------------------------------------------------------------------
	' Process the preset name list
	'--------------------------------------------------------------------
	If (in_clips.Count = 0) Then
		Exit Function ' Exit returning empty collection
	End If

	'--------------------------------------------------------------------
	' Create a list of the shaders/materials that are being layered
	'--------------------------------------------------------------------
	Dim l_allcontainers, l_port, l_container, l_parents
	Set l_allcontainers = CreateObject("XSI.Collection")

	For each l_port in in_inputs
		set l_container = FFindContainer( l_port )
		If TypeName(l_container)<>"" And FSupportsTextureLayers(l_container) Then
			FInsertUniqueInList l_container, l_allcontainers
		else
			LogMessage "Could not add layers to " & l_port, siWarning
		End If
	Next

	if l_allcontainers.count = 0 then
		' No targets
		Exit Function	' Exit returning empty collection
	End If

	'--------------------------------------------------------------------
	' Create layers with instances of the new presets
	'--------------------------------------------------------------------
	Dim l_target, l_portlist, l_layer, l_clip
	For i = 0 to in_clips.count-1
		For each l_target in l_allcontainers
			set l_portlist = CreateObject("XSI.Collection")
			For each l_port in in_inputs
				set l_container = FFindContainer( l_port )
				if l_container = l_target then
					l_portlist.add l_port
				end if
			Next
			set l_layer = Nothing
			if l_portlist.count > 0 then
				if i<>0 or in_blendfirst then
					set reference = Nothing
					set l_layer = AddClipTextureLayer_Internal( in_clips(i), l_target, "", true, reference )
					l_layer.weight = 1
					AddTextureLayerPorts l_layer, l_portlist
				else
					SIConnectShaderToCnxPoint l_clip, l_portlist(0)
					set l_shader = SIGetShaderOnCnxPoint(l_portlist(0))
					for j=1 to l_portlist.Count-1
						SIConnectShaderToCnxPoint l_shader, l_portlist(j)
					next
				end if
			End If
			
			if TypeName(l_layer) <> "Nothing" Then
				BlendClipsInTextureLayersWithPorts_Internal.add l_layer
			else
				LogMessage "Could not blend in clip '" & in_clips(i) & "'", siWarning
			End If
		Next
	Next
End Function

Function BlendClipsInTextureLayersWithPorts(in_clips, in_inputs)
	Set BlendClipsInTextureLayersWithPorts = BlendClipsInTextureLayersWithPorts_Internal(in_clips, in_inputs, true)
End Function

'**************************************************************
' BlendInTextureLayersWithPortsInsp
'**************************************************************
' NAME:		BlendInTextureLayersWithPortsInsp
'
' INPUT:		in_presets	- preset shaders to be mixed in
'				in_inputs	- where to connect to
'
' RETURNED:		created layers
'
' DESCRIPTION:	Create an in_blender going into each in_Inputs, attach an instance of
'			each in_presets to the inputs of these blenders. Inspect.
'               
'---------------------------------------------------------------
Function BlendInTextureLayersWithPortsInsp(in_presets, in_inputs)
    
	Dim rtn, shaders, shader
	Set rtn = BlendInTextureLayersWithPorts(in_presets, in_inputs)

	Set shaders = CreateObject("XSI.Collection")
	for each layer in rtn
		if TypeName(layer) = "Shader" then
			shaders.add layer
		else
			On Error Resume Next
			set shader = SIGetShaderOnCnxPoint( layer & ".color" )
			if TypeName(shader) <> "Nothing" then
				shaders.add shader
			end if
			On Error Goto 0
		end if
	next

	If shaders.Count > 0 Then
		InspectObj CStr(shaders)
	End If

	Set BlendInTextureLayersWithPortsInsp = rtn
End Function

Function BlendClipsInTextureLayersWithPortsInsp(in_clips, in_inputs)
	Dim rtn, shaders, shader
	Set rtn = BlendClipsInTextureLayersWithPorts(in_clips, in_inputs)

	Set shaders = CreateObject("XSI.Collection")
	for each layer in rtn
		if TypeName(layer) = "Shader" then
			shaders.add layer
		else
			On Error Resume Next
			set shader = SIGetShaderOnCnxPoint( layer & ".color" )
			if TypeName(shader) <> "Nothing" then
				shaders.add shader
			end if
			On Error Goto 0
		end if
	next

	If shaders.Count > 0 Then
		InspectObj CStr(shaders)
	End If

	Set BlendClipsInTextureLayersWithPortsInsp = rtn
End Function

'**************************************************************
' BlendInTextureLayers
'**************************************************************
' NAME:		BlendInTextureLayers
'
' INPUT:		in_presets	- preset shader to be mixed in
'	 			in_objects  - Objects to search for ports
'				in_sharedmataction - if a shared material is found, what does the script do?
'							0 - Never make local versions of the material
'							1 - Automatically make local versions of the material
'							2 - Ask the beginner user
'							3 - Ask the advanced user
'				in_notifynoresult - if TRUE, and if in_presets exists, and none of the objects could
'								be textured, pop up a dialog
'				in_ambient, in_diffuse, in_transp, in_refl - ports to blend
'
' RETURNED:     The layers
'
' DESCRIPTION:  Find all the default texture ports of the immediate shaders of the supplied
'			   objects.  Create all the presets requested, and create a blender For Each texture
'			   port, and connect into each port.
'              
'------------------------------------------------------------------------------
Function BlendInTextureLayers(in_presets, in_objects, byref in_sharedmataction, in_notifyIfnoresult, in_mode,_
							in_ambient, in_diffuse, in_transp, in_refl )
	Set BlendInTextureLayers = CreateObject("XSI.Collection")

	If Trim(in_presets) = ""  Then Exit Function
	If in_objects.Count = 0 Then Exit Function

	'--------------------------------------------------------------------
	' Ensure the object only appears once in the list
	'--------------------------------------------------------------------
	Dim l_filtered, l_obj
	Set l_filtered = CreateObject("XSI.Collection")
	For Each l_obj in in_objects
		FInsertUniqueInList l_obj, l_filtered
	Next

	'--------------------------------------------------------------------
	' Figure out which materials to attach to.  This will include 
	' determining what to do with shared materials.
	'--------------------------------------------------------------------
	Dim l_materials
	l_materials = FCreateMaterialList(l_filtered, in_sharedmataction,in_ambient, in_diffuse, in_transp, in_refl)

	'--------------------------------------------------------------------
	' Texture each material separately
	'--------------------------------------------------------------------
	Dim l_mat, l_portlist, l_newpresets, p, l_matpath, parent
	For Each l_mat in split(l_materials, ",", 20000)
		if len(trim(l_mat)) > 0 Then
			' Find all the ports that we will attach to on this material
			Set l_portlist = FGetTexturePorts(l_mat,in_ambient, in_diffuse, in_transp, in_refl)
		
			If l_portlist.count > 0 Then
				if in_mode = siReplaceAndNoBlendInTextureLayers or in_mode = siReplaceAndBlendInTextureLayers Then
					For Each port in l_portlist
						Set out_origshader = SIGetShaderOnCnxPoint(port)

						' Remove shader, if there is one.
						if TypeName(out_origshader) <> "Nothing" Then
							RemoveShaderFromCnxPoint out_origshader, port, False
						End if

						' Force removal of the layers as well...
						RemoveAllShadersFromCnxPoint port, siShaderCnxPointAll

						set parent = EnumElements( port, false)(0)
						If in_transp and FIsTransparencyPort( port ) Then
							If FParamExists( parent & ".usealphatrans" ) and FParamExists( parent & ".inverttrans" ) Then
								SetValue parent & ".usealphatrans", true
								SetValue parent & ".inverttrans", true
							End If
						ElseIf in_refl and FIsReflectionPort( port ) Then
							If FParamExists( parent & ".usealpharefl" ) Then
								SetValue parent & ".usealpharefl", true
							End If
						End If
					Next
				End if

				' Connect the presets to the ports we've found
				if in_mode = siReplaceAndBlendInTextureLayers or in_mode = siBlendInTextureLayers then
					Set l_newlayers = BlendInTextureLayersWithPorts_Internal(in_presets, l_portlist, true )
				else
					Set l_newlayers = BlendInTextureLayersWithPorts_Internal(in_presets, l_portlist, false )
				end if
				For Each p in l_newlayers
					BlendInTextureLayers.add p
				Next
			End If
		End If
	Next

	If in_notifyIfnoresult and BlendInTextureLayers.Count = 0 Then
		SIMsgBox XSIUtils.Translate( IDS_PRESET_DOES_NOT_APPLY, "XSISCRIPTS" ), vbOKOnly, XSIUtils.Translate( IDS_PRESET_DOES_NOT_APPLY_TEXTURE_TITLE, "XSISCRIPTS" ), vbOK
	End If
End Function

Function BlendClipsInTextureLayers( in_clips, in_objects, byref in_sharedmataction, in_notifyIfnoresult, in_mode,_
									in_ambient, in_diffuse, in_transp, in_refl )
	n = in_clips.Count
	list = ""
	set coll = CreateObject("XSI.Collection")

	for i = 0 to n-1
		if i = 1 then
			list = "Image"
		else
			list = list & ",Image"
		end if
		if TypeName( in_clips(i) ) = "Source" or TypeName( in_clips(i) ) = "ImageSource" then
			set clip = SIAddImageClip(in_clips(i)).value("Clip")
			coll.add clip
		elseif TypeName( in_clips(i) ) = "Clip" or TypeName(in_clips(i)) = "ImageClip" then
			coll.add in_clips(i)
		else
			logmessage in_clips(i) & " is not a valid clip or source."
		end if
	next

	n = coll.count

	set result = BlendInTextureLayers( list, in_objects, in_sharedmataction, in_notifyIfnoresult, in_mode,_
										in_ambient, in_diffuse, in_transp, in_refl )
	for i = 0 to n-1
		if TypeName(result(i)) = "TextureLayer" then
			set shader = SIGetShaderOnCnxPoint( result(i) & ".color" )
		else
			set shader = result(i)
		end if
		SIConnectShaderToCnxPoint coll(i), shader & ".tex"
	next
	set BlendClipsInTextureLayers = result
End Function

'**************************************************************
' BlendInTextureLayersInsp
'**************************************************************
' NAME:		BlendInTextureLayersInsp
'
' INPUT:		in_presets	- preset shaders/clips to be mixed in
'		 		in_objects  - Objects to search for ports
'				in_sharedmataction - if a shared material is found, what does the script do?
'							0 - Never make local versions of the material
'							1 - Automatically make local versions of the material
'							2 - Ask the beginner user
'							3 - Ask the advanced user
'				in_notifynoresult - if TRUE, and if in_presets exists, and none of the objects could
'								be textured, pop up a dialog
'				in_ambient, in_diffuse, in_transp, in_refl - ports to blend
'
' RETURNED:     The created layers
'
' DESCRIPTION:  Find all the default texture ports of the immediate shaders of the supplied
'			    objects.  Create layers with the requested presets, and add these layers to each
'				of the supplied ports.
'			    Inspect
'              
'------------------------------------------------------------------------------
Function BlendInTextureLayersInsp(in_presets, in_objects, byref in_sharedmataction, in_notifyIfnoresult, in_mode, _
							in_ambient, in_diffuse, in_transp, in_refl )
	Dim rtn, shader, layer, shaders
	set rtn = BlendInTextureLayers(in_presets, in_objects, in_sharedmataction, in_notifyIfnoresult,in_mode, _
							in_ambient, in_diffuse, in_transp, in_refl )

	Set shaders = CreateObject("XSI.Collection")
	for each layer in rtn
		if TypeName(layer) <> "TextureLayer" then
			shaders.add layer
		else
			On Error Resume Next
			set shader = SIGetShaderOnCnxPoint( layer & ".color" )
			if TypeName(shader) <> "Nothing" then
				shaders.add shader
			end if
			On Error Goto 0
		end if
	next

	If shaders.Count > 0 Then
		InspectObj CStr(shaders)
	End If

	Set BlendInTextureLayersInsp = rtn
End Function

Function BlendClipsInTextureLayersInsp( in_clips, in_objects, byref in_sharedmataction, in_notifyIfnoresult, in_mode, _
										in_ambient, in_diffuse, in_transp, in_refl )
	Dim rtn, shader, layer, shaders
	set rtn = BlendClipsInTextureLayers( in_clips, in_objects, in_sharedmataction, in_notifyIfnoresult,in_mode, _
										 in_ambient, in_diffuse, in_transp, in_refl )

	Set shaders = CreateObject("XSI.Collection")
	for each layer in rtn
		if TypeName(layer) <> "TextureLayer" then
			shaders.add layer
		else
			On Error Resume Next
			set shader = SIGetShaderOnCnxPoint( layer & ".color" )
			if TypeName(shader) <> "Nothing" then
				shaders.add shader
			end if
			On Error Goto 0
		end if
	next

	If shaders.Count > 0 Then
		InspectObj CStr(shaders)
	End If

	Set BlendClipsInTextureLayersInsp = rtn
End Function

'**************************************************************
' ConnectImageTo3DO
'**************************************************************
' NAME:		ConnectImageTo3DO
'
' INPUT:		in_objects  - Objects to search for ports
'               in_imagePath - filepath to the image
' RETURNED:     The instances of the in_presets
'
' DESCRIPTION:  Creates an image clip and connect it to the created image preset. Then inspect
'              
'------------------------------------------------------------------------------
Function ConnectImageTo3DO(in_objects, in_imagePath)

	Dim imageClip
	set imageClip = FCreateImageClip(in_imagePath)

	if TypeName(imageClip) = "Nothing" Then
		LogMessage "Could not create image clip '" & in_imagePath & "'", siWarning
		Exit Function
	end if

	Dim rtn, shad
	set rtn = BlendInTextureLayers("Image", in_objects, 3, True, siBlendInTextureLayers, True, True, False, False )

	Dim l_obj, l_shaders
	set l_shaders = CreateObject("XSI.Collection")
	For Each l_obj in rtn
		set shad = SIGetShaderOnCnxPoint( l_obj & ".color" )
		l_shaders.add shad 
		SIConnectShaderToCnxPoint imageClip, shad & ".tex"
	Next

	If l_shaders.Count > 0 Then
		InspectObj CStr(l_shaders)
	End If

	Set ConnectImageTo3DO = rtn
End Function



'------------------------------------------------------------------------------
' NAME:	ShowNextOGLProjection
' INPUT:	none, use the current selection
' DESCRIPTION:  switch active texture of all the object in the current selection
' Created by Michael Isner, integrated by Dave Lajoie
' Date: September 2000
'------------------------------------------------------------------------------
sub ShowNextOGLProjection()
	dim sel, sel2, valid, elem

	ActivateObjectSelTool

	set sel = GetValue("SelectionList")

	'** filter for objects
	set sel2 = SIFilter (sel, "geometry")

	'** empty selection list 
	if TypeName(sel2) = "Nothing" then
		exit sub
	end if
	
	'** Show Next OGL Projection for all the object in the selection list
	for each elem in sel2
		switchUV elem, 1,valid
	next

end sub 

'------------------------------------------------------------------------------
' NAME:	ShowPreviousOGLProjection
' INPUT:	none, use the current selection
' DESCRIPTION:  switch active texture of all the object in the current selection
' Created by Michael Isner, integrated by Dave Lajoie
' Date: September 2000
'------------------------------------------------------------------------------
sub ShowPreviousOGLProjection()
	dim sel, sel2, valid, elem

	ActivateObjectSelTool

	set sel = GetValue("SelectionList")

	'** filter for objects
	set sel2 = SIFilter (sel, "geometry")

	'** empty selection list 
	if TypeName(sel2) = "Nothing" then
		exit sub
	end if
	
	'** Show Next OGL Projection for all the object in the selection list
	for each elem in sel2
		switchUV elem, -1,valid
	next

end sub 

'------------------------------------------------------------------------------
' NAME:	switchUV 
' INPUT:	in_obj	object on which texture ogl switch need to be done
' INPUT:	out_valid	valid texture space?
' DESCRIPTION:  switch active texture of all the object in the current selection
' Created by Michael Isner, integrated by Dave Lajoie
' Date: September 2000
'------------------------------------------------------------------------------
function switchUV (in_obj, in_increment ,out_valid)
	dim clusters, myGeometry, ClusterCollection 
	dim SamplePoints, Current_UV, Sample, UVWProp    
	dim textureSearch, t, split_t, texture, count  
	dim index, next_index
	redim texture_list(0)
	out_valid = TRUE
	
	set myGeometry = in_obj.activeprimitive.geometry

	set ClusterCollection = myGeometry.clusters
	
	' find sample point cluster containing uvprop
	set SamplePoints = ClusterCollection.filter( "Sample" )
	if typename(SamplePoints) = "Nothing" then
		exit function
	end if
	
	' get name of current uvprop
	Current_UV = in_obj.material.parameters("UV").value	

	' find uvprop for list of sample points
	for each Sample in SamplePoints
		set Sample = GetValue( Sample )
		set textureSearch = Sample.properties.filter("uvspace")
		count = 0
		if typename(textureSearch) <> "Nothing" then
			for each t in textureSearch
				split_t = split( t, ".", -1, 1)
				texture = split_t(ubound(split_t))
				if count = 0 then
					texture_list(0) = texture 
				else
					redim preserve texture_list(count)
					texture_list(count) = texture 
				end if
				count = count + 1
			next
		end if
	next
	
	' find the index of the currentUV in the list
	for t = 0 to Ubound(texture_list)
		if texture_list(t) = Current_UV then index = t
	next
	
	Select Case in_increment
	  Case -1
		if index = Lbound(texture_list) then
			next_index = Ubound(texture_list)
		else
			next_index = index - 1
		end if
      Case Else
		if index = Ubound(texture_list) then
			next_index = Lbound(texture_list)
		else
			next_index = index + 1
		end if
	End Select

	in_obj.material.parameters("UV").value = texture_list(next_index)
end function

'------------------------------------------------------------------------------
' NAME:			LightAssociateProc
' INPUT:		selected objects or lights
' DESCRIPTION:  Allows to pick objects and/or lights to associate
' Created by Olivier Ozoux, integrated by Rejean Gagne
' Date: Avril 2002
'------------------------------------------------------------------------------
sub LightAssociateProc( in_selection )

	Dim l_objs, l_expsel, l_lights

	set l_expsel = SelectChildNodes( in_selection, false )
	set l_objs = SIFilter( l_expsel, "geometry" )

	if typename(l_objs) <> "Nothing"  then
		PickLightsAndAssociatetoObjects l_objs
	else
		set l_lights = SIFilter( l_expsel, "light" )
		if typename(l_lights) <> "Nothing"  then
			PickObjectsAndAssociateToLights l_lights
		end if
	end if

end sub

'------------------------------------------------------------------------------
' NAME:			PickLightsAndAssociatetoObjects
' INPUT:		selected objects
' DESCRIPTION:  Allows to pick lights to associate to the given objects
'				NOTE: this uses scripting commands and not the OM so we can see
'				the results being logged (this is a called from a UI Only command)
' Created by Olivier Ozoux, integrated by Rejean Gagne
' Date: Avril 2002
'------------------------------------------------------------------------------
sub PickLightsAndAssociatetoObjects( in_objs )
	Dim lstr,mstr,l_ret,l_btn,l_picked,l_grp

	'Start a pick session for lights
	lstr = XSIUtils.Translate( IDS_PICK_LIGHT_AND_ASSOCIATE_MSG_L, "XSISCRIPTS" )
	mstr = XSIUtils.Translate( IDS_PICK_LIGHT_AND_ASSOCIATE_MSG_M, "XSISCRIPTS" )


	l_btn = 1
	while l_btn <> 0
		PickElement "light", lstr, mstr, l_picked, l_btn 

		if ( l_btn = 1 ) then

			set l_grp = GetValue( l_picked + ".light.Associated Models")
			' Use SIAddToGroup to avoid an unwanted dialogue to pop up
			SIAddToGroup l_grp, in_objs

		elseif ( l_btn = 2 ) then

			set l_grp = GetValue( l_picked + ".light.Associated Models")
			RemoveFromGroup l_grp, in_objs
		end if
	wend
end sub

'------------------------------------------------------------------------------
' NAME:			PickObjectsAndAssociateToLights
' INPUT:		selected lights
' DESCRIPTION:  Allows to pick objects to associate to the given lights
'				NOTE: this uses scripting commands and not the OM so we can see
'				the results being logged (this is a called from a UI Only command)
' Created by Olivier Ozoux, integrated by Rejean Gagne
' Date: Avril 2002
'------------------------------------------------------------------------------
sub PickObjectsAndAssociateToLights( in_lights )
	Dim lstr,mstr,l_ret,l_btn,l_picked,l_grp,l_light

	'Start a pick session for lights
	lstr = XSIUtils.Translate( IDS_PICK_OBJECT_ASSOCIATE_MSG_L, "XSISCRIPTS" )
	mstr = XSIUtils.Translate( IDS_PICK_OBJECT_ASSOCIATE_MSG_M, "XSISCRIPTS" )

	l_btn = 1
	while l_btn <> 0
		PickElement "geometry", lstr, mstr, l_picked, l_btn 

		for each l_light in in_lights
			if ( l_btn = 1 ) then

				set l_grp = GetValue( l_light + ".light.Associated Models")
				' Use SIAddToGroup to avoid an unwanted dialogue to pop up
				SIAddToGroup l_grp, l_picked

			elseif ( l_btn = 2 ) then

				set l_grp = GetValue( l_light + ".light.Associated Models")
				
				' Need to use fullname otherwize we get something like
				' "B:cube" due to the MMB pick.
				RemoveFromGroup l_grp, l_picked.fullname
			end if
		next
	wend
end sub

'------------------------------------------------------------------------------
' NAME:			SelectImageClip
' INPUT:		none
' DESCRIPTION:  	Allows to prompt to use to select one of the existing
' 			image clip currently loaded in the scene
'			This is a support function for CreateImageBasedLightingPass
' Created by Dave Lajoie
' Date: May 2002
'------------------------------------------------------------------------------
Function SelectImageClip
	Dim XSIDial, Combo

	set ClipList = ActiveProject.ActiveScene.ImageClips

	'Convert Collection to array
	ReDim Combo(ClipList.count - 1)
	for i=0 to ClipList.count -1
		Combo(i) = ClipList.item(i)
	next
	
	'Calling Combo box
	On Error Resume Next
	set XSIDial = createobject("XSIDial.XSIDialog")
	if Err.Number > 0 then
		Err.Raise siErrCancelled
		exit function
	End if
	
	'return the value
	SelectImageClip = XSIDial.Combo( "Select Image Clip", Combo)
	if ( SelectImageClip = -1 ) then
		SelectImageClip = Empty
	else
		SelectImageClip = Combo(SelectImageClip)
	end if
end Function

'------------------------------------------------------------------------------
' NAME:			CreateImageBasedLightingPass
' INPUT:		none
' DESCRIPTION:  	Allows to build a pass to recreate image based lighting
'			from any image clip. The script will create a new empty
'			pass and load the new Environment shader and assign it
'			to the pass. The script will prompt the user to use an
'			existing image clip or to create a new one from disk.
'			Once the image clip is created, it will get assigned to
'			the env shader. Final Gather will get enabled, as well
'			as render region FG settings will be enabled so the user
'			can see things right away in the region.
' Created by Dave Lajoie
' Date: May 2002
'------------------------------------------------------------------------------
Sub CreateImageBasedLightingPass ( byref Filename, byref ImageClip )
	Dim PresetName, returnVal, SelectedImageClip, ClipList, Combo
	Dim CleanClipList
	
	'Arguments handling
	if ( typename(Filename) <> "Empty" AND Filename <> "") then
		'Filename Arg provided: jump to "create a new clip"
		returnVal = 7
	elseif (typename(ImageClip) <> "Empty" AND ImageClip <> "") then
		'Existing Image clip provided: jump to "use an existing clip"
		returnVal = 6
	else
		' No args provided - ask the user
		returnVal = MsgBox (XSIUtils.Translate( IDS_CREATE_IMAGE_BASED_LIGHTING_PASS_MSG, "XSISCRIPTS" ),3, XSIUtils.Translate( IDS_CREATE_IMAGE_BASED_LIGHTING_PASS_TITLE, "XSISCRIPTS" ))
	end if

	Select Case returnVal
		Case 6 'yes	use an existing clip
			if ( typename(ImageClip) = "Empty" OR ImageClip = "" ) then
				SelectedImageClip = SelectImageClip()
				If Typename(SelectedImageClip) = "Empty" then
					Err.Raise siErrCancelled
					exit sub
				end if

				'set ImageClip, so we can get proper script logging
				ImageClip = SelectedImageClip
			else
				set SelectedImageClip = GetValue(ImageClip)
			end if
		Case 7 'no, pls create a new clip
			on Error Resume Next
			if ( typename(Filename) = "Empty" OR Filename = "" ) then
				Set SelectedImageClip = CreateImageClip
				temp = GetValue(SelectedImageClip & ".SourceName")

				'set Filename, so we can get proper script logging
				Filename = GetValue("Sources." & temp & ".FileName")
			else
				Set SelectedImageClip = CreateImageClip(Filename)
			end if
			if Err.Number > 0 then
				Err.Raise siErrCancelled
				exit sub
			End if
		Case 2 'cancel
			Err.Raise siErrCancelled
			exit sub
	End Select
	
	CreatePass ,"HDRI",newPass
	set hdri_shader = SIApplyShaderToCnxPoint("Environment\Environment.Preset", newPass & ".EnvironmentShaderStack", , False)
	SIConnectShaderToCnxPoint SelectedImageClip, hdri_shader & ".tex"

	Dim oOverride
	AddProp "Override", newPass,,"FG_Enable", oOverride
	
	SIAddEntryToOverride oOverride, newPass & ".mentalray.FGEnable"
	SetValue oOverride &".FGEnable", True
	
	InspectObj hdri_shader
End Sub

'------------------------------------------------------------------------------
' FGetShaderParamInfo Helper
'
' Returns ParamType and ParamIsInput By Reference given a parameter.
' This handles the case for non shaders.
' Test for out_paramtype=siUnknownParameterType to know if the method failed.
'------------------------------------------------------------------------------
Sub FGetShaderParamInfo( in_obj, in_param, byRef out_paramtype, byRef out_isInput )
     out_isInput = True
     out_paramtype = siUnknownParameterType
     
     'Shaders can have input or output parameters.
     If in_obj.IsClassOf( siShaderID ) Then
        Dim retArray
        retArray = in_obj.GetShaderParameterType( in_param.Name )
        out_isInput = retArray(0)
        out_paramtype = retArray(1)
     
     'Camera, Light and Material have a funtion returning only the parameter type, params are always input.
     ElseIf in_obj.IsClassOf( siCameraID ) Or in_obj.IsClassOf( siLightID ) Or in_obj.IsClassOf( siMaterialID ) Then
        out_paramtype = in_obj.GetShaderInputType( in_param.Name )
     
     'Texture Layer only have 2 static texturable ports, so there is no function 
     ' to get the parameter type and we can hardcode it.
     ElseIf in_obj.IsClassOf( siTextureLayerID ) Then
        If in_param.Name = "Color" Then
            out_paramtype = siColorParameterType
        ElseIf in_param.Name = "Mask" Then
            out_paramtype = siScalarParameterType
        End If
     End If
     
End Sub

'------------------------------------------------------------------------------
' NAME:			CreateLightRigFromImage 
' INPUT:		
'	byref io_imagefile	string
'		.pic or .hdr file to use to create the light rig
'		it is not required to use a large image for this
'		usually as long as the image has enought contrast between highlight
'		and lowlights, it will work. 400x200 will do fine in most cases.
'		use low rez image will also cut down processing time.
'		the image MUST be a spherical map ( longitude/latitude type image )
'		few software has panoramic tools that allow to convert different map
'		style into spherical.
'	byref io_max_layers	integer
'		allows to limit the number of luminance layers being created
'	byref io_areahigh	float
'		referred to the "highest" value of luminance and the "darkest" level of luminance
'		defined by the histograms. Levels in between are interpolated.
'		Such a value define what is the minimum amount of luminance required to place a light in.
'		Each pixel is considered lit or not based on the layer of luminance
'		(which are those defined on the histogram)...
'		visually this is rappresented with white areas...
'		according to each areas extension, related to the sum of all areas (for each layer),
'		define if the areas is big enough to be rapresented with a light...
'		The value for areaHigh is, I'd say, always 0. In this way even the smallest light
'		(small but very bright, since this is the first layer) is represented..
'		The value for areaLow can be something like 20 For example,
'	byref io_lightdisthigh	float
'		they still are the distance between lights. This is in percentage
'		Suggested value of 5 for low and 20 for high
'		correspond to interdistance of 5 pix and 20 pix on an 100 pixels wide image.
' DESCRIPTION:
'		This subroutine will call an activeX object that will extract light information
'		in order to build an XSI light rig ( null with infinite lights ) which simulate
'		lighting conditions defined in the image.	
' Created by Dave Lajoie
' Date: Sept 2002
'------------------------------------------------------------------------------
Sub CreateLightRigFromImage (	byref io_imagefile, _
				byref io_max_layers, _
				byref io_areahigh, _
				byref io_lightdisthigh )

	'*****************************
	'*****************************
	'*
	'* Define all local vars
	'*
	'*****************************
	'*****************************
	Dim LightRigBuilder, oLigRigModel
	Dim mySceneRoot, xsize, ysize, oOptions, NbLights, i
	Dim AreaHigh, LigthDistHigh
	Dim RR, GG, BB, rx,ry,rz, layer, layers
	Dim actLum, indDes, norma, putR, putG, putB, unsat, luma
	Dim PercentageFound, ImageFilename, MaxLayers
	Dim CpsetName, oLight, maxLight 
	Dim PreviousMSGLogging, PreviousCMDLogging, PreviousRTMSGLogging, PreviousAutoInspect 
	Dim Interactive, LightMaxIntensity
	Dim temp

	'*****************************
	'*****************************
	'*
	'* Backup CMD/MSG/RT logging and set it to off
	'* so that we don't see the internal commands being logged while running
	'*
	'*****************************
	'*****************************
	PreviousAutoInspect = GetUserPref("AutoInspectEnabled")
	PreviousCMDLogging = GetUserPref("SCR_CMDLOG_ENABLED")
	SetUserPref("SCR_CMDLOG_ENABLED"), False
	SetUserPref("AutoInspectEnabled"), False
	PreviousMSGLogging = GetUserPref("SCR_MSGLOG_ENABLED")
	PreviousRTMSGLogging = GetUserPref("SCR_RTMSG_ENABLED")

	SetUserPref "SCR_MSGLOG_ENABLED", true
	SetUserPref "SCR_RTMSG_ENABLED", true

	Interactive = true
	CpsetName = "LightRigBuilderOptions"
	set mySceneRoot = Application.ActiveSceneRoot

	'*****************************
	'*****************************
	'*
	'* Verify of the option cpset exist, if not load it.
	'*
	'*****************************
	'*****************************
	if IsCustomParamPresent(CpsetName ) = 0 then
		AddProp CpsetName,Application.ActiveSceneRoot, siNodePropagation, ,oOptions
	else
		oOptions = GetValue(Application.ActiveSceneRoot&"."&CpsetName)
	end if

	'*****************************
	'*****************************
	'*
	'* Processing Input Arguments
	'*
	'*****************************
	'*****************************
	if (ValidateLightRigImagePath(io_imagefile)) then
		Interactive = False
		SetValue(oOptions&".filename"), io_imagefile
	else
		logmessage "imagefile parameter is empty or invalid. Using interactive mode"
	end if
	
	if (ValidNumericArg(io_max_layers)) then
		SetValue(oOptions&".max_layers"), io_max_layers
	else
		if ( NOT Interactive ) then
			Logmessage "max_layers parameter is invalid, using default value", siWarning
		end if
	end if

	if (ValidNumericArg(io_areahigh)) then
		SetValue(oOptions&".areahigh"), io_areahigh
	else
		if ( NOT Interactive ) then
			Logmessage "areahigh parameter is invalid, using default value", siWarning
		end if
	end if

	if (ValidNumericArg(io_lightdisthigh)) then
		SetValue(oOptions&".lightdisthigh"), io_lightdisthigh
	else
		if ( NOT Interactive ) then
			Logmessage "lightdisthigh parameter is invalid, using default value", siWarning
		end if
	end if
	
	'*****************************
	'*****************************
	'*
	'* if io_imagefile is invalid,
	'* we must popup the options to
	'* allow the user to select the file
	'*
	'*****************************
	'*****************************
	if ( Interactive ) then
		if Application.Interactive then
			on error resume next
			InspectObj oOptions,,XSIUtils.Translate( IDS_CREATE_LIGHT_RIG_TITLE, "XSISCRIPTS" ),siModal,true
		else
			Logmessage "argument imagefile is empty or invalid, exiting!", siWarning
			RestoreLogging PreviousCMDLogging, PreviousMSGLogging, PreviousRTMSGLogging, PreviousAutoInspect
			Err.Raise siErrCancelled
			exit sub
		end if
	end if
	
	'*****************************
	'*****************************
	'*
	'* if the user press "ok" then
	'* proceed with arguments retreiving
	'*
	'*****************************
	'*****************************
	if Err.Number = 0 then
		ImageFilename = GetValue(oOptions&".filename")
		if (NOT ValidateLightRigImagePath(ImageFilename)) then
			Logmessage "Image file path is invalid, exiting!", siWarning
			RestoreLogging PreviousCMDLogging, PreviousMSGLogging, PreviousRTMSGLogging, PreviousAutoInspect
			Err.Raise siErrCancelled
			exit sub
		end if
		MaxLayers     = GetValue(oOptions&".max_layers")
		AreaHigh      = 1 - GetValue(oOptions&".areaHigh") / 100 
		LigthDistHigh = GetValue(oOptions&".lightdisthigh") / 100

		'*****************************
		'*****************************
		'*
		'* important:
		'* needed since xsi use this to
		'* log the result in scripting log
		'*
		'*****************************
		'*****************************
		io_imagefile		= ImageFilename
		io_max_layers		= MaxLayers
		io_areahigh		= AreaHigh * 100
		io_lightdisthigh	= LigthDistHigh * 100

		'*****************************
		'*****************************
		'*
		'* Processing the image to create the light rig
		'*
		'*****************************
		'*****************************				
		Set LightRigBuilder = CreateObject("XSI.LightRigFromImage")
		Logmessage "Opening file: " & ImageFilename
		LightRigBuilder.openImage Application, ImageFilename , xsize, ysize
		if ( xsize=0 OR ysize=0 ) then
			Logmessage "Image file is invalid, exiting!", siWarning
			RestoreLogging PreviousCMDLogging, PreviousMSGLogging, PreviousRTMSGLogging, PreviousAutoInspect
			LightRigBuilder.closeImage Application
			Err.Raise siErrCancelled
			exit Sub
		end if
		Logmessage "Computing Histogram..."
		LightRigBuilder.CreateHistogram Application
		Logmessage "Computing Luminance Layers..."
		LightRigBuilder.DefineLayers Application, 80, MaxLayers, PercentageFound
		Logmessage "Computing Lights..."
		LightRigBuilder.DefineLights Application, NbLights, PercentageFound, areahigh, 0, LigthDistHigh, LigthDistHigh * 0.25

		'*****************************
		'*****************************
		'*
		'* cycle thru all the computed
		'* lights to determine the max
		'* intensity, so we can readjust
		'* UI range of the lightcontrol pset
		'*
		'*****************************
		'*****************************				
		LightMaxIntensity = 0
		for i=0 to NbLights-1
			LightRigBuilder.getLight Application, i, RR, GG, BB, rx,ry,rz, layer, layers		
			luma = (RR+GG+BB)/3
			if ( luma > LightMaxIntensity ) then
				LightMaxIntensity = luma
			end if
		next

		'*****************************
		'*****************************
		'*
		'* Creating the light rig
		'*
		'*****************************
		'*****************************				
		Logmessage "Building LightRig..."
		oLigRigModel = CreateLightRig ( LightMaxIntensity )

		for i=0 to NbLights-1
			Logmessage "Creating light " & i+1 & " of " & NbLights & " (layer " & layer & ")"
			LightRigBuilder.getLight Application, i, RR, GG, BB, rx,ry,rz, layer, layers 
			Set oLight = ActiveProject.ActiveScene.Root.AddLight("Infinite",false,"Infinite")
			ParentObj "B:" & oLigRigModel , oLight
			setValue (oLight&".kine.local.sclx"), 1
			setValue (oLight&".kine.local.scly"), 1
			setValue (oLight&".kine.local.sclz"), 1
			setValue (oLight&".kine.local.pos.posx"), 0
			setValue (oLight&".kine.local.pos.posy"), 0
			setValue (oLight&".kine.local.pos.posz"), 0
			setValue (oLight&".kine.local.rotx"), rx
			setValue (oLight&".kine.local.roty"), ry
			setValue (oLight&".kine.local.rotz"), rz	
			Translate oLight , 0, 0, 10, siRelative, siLocal, siObj, siXYZ
			If (i=0) then			'max light
				maxLight = (RR+GG+BB)/3.	
			end if

			actLum = (RR+GG+BB)/3.
			indDes = actLum/maxLight
				
			luma = (RR+GG+BB)/3
			norma = sqr(RR*RR +RR*RR +RR*RR)
						
			putR = RR/norma				
			putG = GG/norma
			putB = BB/norma
			unsat = (RR+GG+BB)/(3*norma)
	
			setValue (oLight&".light.soft_light.color.red"), putR 
			setValue (oLight&".light.soft_light.color.green"), putG
			setValue (oLight&".light.soft_light.color.blue"), putB
			setValue (oLight&".light.soft_light.intensity"), luma

			'*****************************
			'*****************************
			'*
			'* Installing Expression on light shader
			'* so that LightControl pset can
			'* have an effect on all lights at
			'* the same time.
			'*
			'*****************************
			'*****************************				
	
			SetValue oLight&".light.SpecularContribution", False			
			SetExpr oLight&".light.soft_light.color.red", putR&"+("&oLigRigModel&".LightControl.Desaturate )*("&unsat&" - "&putR&")"
			SetExpr oLight&".light.soft_light.color.green", putG&"+("&oLigRigModel&".LightControl.Desaturate )*("&unsat&" - "&putG&")"
			SetExpr oLight&".light.soft_light.color.blue", putB&"+("&oLigRigModel&".LightControl.Desaturate)*("&unsat&" - "&putB&")"
			SetExpr oLight&".light.soft_light.intensity", luma&"* "&oLigRigModel&".LightControl.Fine_Intensity* " & oLigRigModel & ".LightControl.Coarse_Intensity"

			ApplyCns "Direction", oLight, oLigRigModel
			SetValue oLight&".kine.dircns.dirx", 0
			SetValue oLight&".kine.dircns.diry", 0
			SetValue oLight&".kine.dircns.dirz", -1

			If (layer = 0) then
				SetValue oLight&".light.soft_light.shadow", True
				SetValue oLight&".light.soft_light.factor", 0.25
			End If	
		next
		LightRigBuilder.closeImage Application
		SetValue(oLigRigModel & ".LightControl.Coarse_Intensity"), 1/LightMaxIntensity
		InspectObj oLigRigModel & ".LightControl"
		Logmessage "LightRig creation completed!"
		RestoreLogging PreviousCMDLogging, PreviousMSGLogging, PreviousRTMSGLogging, PreviousAutoInspect
	else
		Logmessage "Light Rig Builder was cancelled!", siInfo
		RestoreLogging PreviousCMDLogging, PreviousMSGLogging, PreviousRTMSGLogging, PreviousAutoInspect
		Err.Raise siErrCancelled
	end if
end Sub

'------------------------------------------------------------------------------
' NAME:		CreateLightRig
' INPUT:	Range: determine the ui max range for the intensity parameter
' RETURN:	Light Rig Null Object
' DESCRIPTION:
'		Create a null object with a LightControl custom pset
' 		which will be used to control all the light parented
'		under the model. The user will be able to affect
'		all the light from a common point.
' Created by Dave Lajoie
' Date: Sept 2002
'------------------------------------------------------------------------------
Function CreateLightRig ( range )
	Dim LightrigNull, LightRigCustomPset
	Dim ParamUIRange
	ParamUIRange = 2 * ( 1/range )
	set LightrigNull = ActiveProject.ActiveScene.Root.AddNull("LightRig")
	ToggleVisibility LightrigNull
	AddProp "Custom_parameter_list",LightrigNull, , "LightControl", LightRigCustomPset
	SIAddCustomParameter LightRigCustomPset , "Coarse_Intensity"   , siDouble, 1, 0, 1, , 4, 0, ParamUIRange, "Coarse_Intensity"
	SIAddCustomParameter LightRigCustomPset , "Fine_Intensity"  , siDouble, 1, 0, 2, , 4, 0, 1, "Fine_Intensity"
	SIAddCustomParameter LightRigCustomPset , "Desaturate"  , siDouble, 0, 0, 1, , 4, 0, 1, "Desaturate"
	CreateLightRig = LightrigNull
End Function

'------------------------------------------------------------------------------
' NAME:		RestoreLogging
' DESCRIPTION:
'		Set the CMD/MSG/RTMSG logging to a given stat
' Created by Dave Lajoie
' Date: Sept 2002
'------------------------------------------------------------------------------
Sub RestoreLogging(PreviousCMDLogging, PreviousMSGLogging, PreviousRTMSGLogging, PreviousAutoInspect )
		SetUserPref "SCR_MSGLOG_ENABLED", PreviousMSGLogging
		SetUserPref "SCR_CMDLOG_ENABLED", PreviousCMDLogging
		SetUserPref "SCR_RTMSG_ENABLED", PreviousRTMSGLogging
		SetUserPref "AutoInspectEnabled", PreviousAutoInspect
End Sub

'------------------------------------------------------------------------------
' NAME:		IsCustomParamPresent
' Return:	1 = pset was found
'		0 = pset wasn't found
' DESCRIPTION:
'		Try to find if a custom pset define by arg "CustomPsetName"
'		can be found under Scene_Root
' Created by Dave Lajoie
' Date: Sept 2002
'------------------------------------------------------------------------------
Function IsCustomParamPresent(CustomPsetName)
	Dim oProp, prop
	IsCustomParamPresent = 0 ' not present
	set oProp = Application.ActiveSceneRoot.Properties
	for each prop in oProp
		if  typename(prop)= "CustomProperty" then
			if prop.name = CustomPsetName then
				IsCustomParamPresent = 1
			end if
		end if 
	next
end Function 

'------------------------------------------------------------------------------
' NAME:		ValidNumericArg
' Return:	false = is a numeric parameter
'		true = is not a numeric parameter
' DESCRIPTION:
'		Inform is the arg is a numeric type, also check if
'		if the arg is non-null and non-empty
' Created by Dave Lajoie
' Date: Sept 2002
'------------------------------------------------------------------------------
Function ValidNumericArg(oItem)
	ValidNumericArg= False
	if ( _
		 NOT IsEmpty(oItem) and _
		 NOT IsNull(oItem)  and _
	 	 NOT (typename(oItem) = "Error") and _
		 IsNumeric(oItem) and _
		 oItem <> "" _
		) then
			ValidNumericArg = True	
	end if
end Function

'------------------------------------------------------------------------------
' NAME:		ValidateLightRigImagePath
' Return:	false = is not a valid .pic / .hdr filename/path string
'		true = is a valid .pic / .hdr filename/path string
' DESCRIPTION:
'		Ensure the file is a string type and ends with either ".pic"
'		or ".hdr"
'		Doesn't test if the file exists, since the vbs filesystemObject
'		doesn't work on irix and linux.
' Created by Dave Lajoie
' Date: Sept 2002
'------------------------------------------------------------------------------
Function ValidateLightRigImagePath(oItem)
	ValidateLightRigImagePath = False
	if ( (NOT (typename(oItem) = "Error")) and (typename(oItem) = "String") and (oItem <> "")) then
		if ( ( StrComp(Right(oItem,4),".pic",1) = 0 ) or _
			  ( StrComp(Right(oItem,4),".hdr",1) = 0 ) )then
			ValidateLightRigImagePath = True	
		end if
	end if
end Function

Function FFindMainInputPort( in_shader )
	set ports = EnumElements( in_shader )
	For each port in ports
	    if port.IsClassOf( siShaderParameterID ) then
	        if port.Definition.MainPort then
	            set FFindMainInputPort = port
		        Exit Function
		    end if
	    end if
	Next

	set FFindMainInputPort = Nothing
End Function

'------------------------------------------------------------------------------
' Author:		Ian Stewart
' NAME:			InsertShader
' DESCRIPTION:	Insert a shader on the supplied port
'------------------------------------------------------------------------------
Function InsertShader( in_preset, in_ports, in_name )

	'Test if the targets are all within the same container.
	set l_shaderContainer = FGetUniqueShaderContainer(in_ports)
	if TypeName(l_shaderContainer) = "Nothing" then
		logmessage "Failed to insert a shaderbecause the targeted ports are not within the same shader container.", siError
		Exit Function
	end if
		
	' First, group all the ports that are sharing the same shader
	Dim connections
	ReDim connections( in_ports.count )
	for i=0 to in_ports.count-1
		connections(i) = -1
	next
	for i=0 to in_ports.count-1
		if connections(i) = -1 then
			set ishader = SIGetShaderOnCnxPoint( in_ports(i) )
			connections(i) = i
			if TypeName(ishader) <> "Nothing" then
				for j=i+1 to in_ports.count-1
					if connections(j) = -1 then
						set jshader = SIGetShaderOnCnxPoint( in_ports(j) )
                        if TypeName(jshader) <> "Nothing" then						
    						if ishader = jshader then
	    						connections(j) = i
	    					end if
						end if
					end if
				next
			end if
		end if
	next

	set InsertShader = CreateObject("XSI.Collection")
	for i=0 to in_ports.count-1
		if connections(i) = i then
		
		    set l_oldshader = SIGetShaderOnCnxPoint( in_ports(i) )

            set l_insertedshader = CreateShaderFromPreset(in_preset, l_shaderContainer, in_name )
			if TypeName(l_insertedshader) = "Nothing" then
				logmessage "Invalid preset: shader not found", siError
				Exit Function
			end if

			set l_targetport = FFindMainInputPort( l_insertedshader )
			if TypeName(l_oldshader) <> "Nothing" And TypeName(l_targetport) <> "Nothing"then
				set l_oldshader = SIConnectShaderToCnxPoint(l_oldshader, l_targetport, false)
			End If

			set l_insertedshader2 = SIConnectShaderToCnxPoint(l_insertedshader, in_ports(i), false )
			set l_converted = SIGetShaderOnCnxPoint( in_ports(i) )
			for j=i+1 to in_ports.count-1
				if connections(j) = i then
					set l_converted = SIConnectShaderToCnxPoint(l_converted, in_ports(j), false )
				end if
			next
			if TypeName(l_insertedshader2) = "Nothing" then
				logmessage "Cannot find a valid converter for " & l_insertedshader & " when connecting to " & in_ports(i), siWarning
				Exit Function
			end if
			set l_insertedshader3 = Dictionary.GetObject( CStr(l_insertedshader2) )
			InsertShader.add l_insertedshader
		end if
	next
End Function

'------------------------------------------------------------------------------
' Author:		Ian Stewart
' NAME:			AddImageTextureLayer
' DESCRIPTION:	Add a texture layer with a clip created from the selected file.
' COMMANDMAP  (Right-click->open doc):	"\Rayflex\Commands\CommandMaps\src\Shaders.dscmdinl"
'------------------------------------------------------------------------------
Function AddImageTextureLayer_Internal( byref filename, in_containers, in_layername, in_bAfter, in_reference )
	set l_clip = FCreateImageClip( filename )
	if TypeName(l_clip) <> "Nothing" then
		set AddImageTextureLayer_Internal = AddClipTextureLayer_Internal( l_clip, in_containers, in_layername, in_bAfter, in_reference )
	else
		set AddImageTextureLayer_Internal = Nothing
	end if
end function

Function AddImageTextureLayer( byref filename, in_containers, in_layername, in_bAfter, in_reference )
	set AddImageTextureLayer = AddImageTextureLayer_Internal( filename, in_containers, in_layername, in_bAfter, in_reference )
	if TypeName(AddImageTextureLayer) = "Nothing" then
		logmessage "Invalid image file provided.", siError
	end if
End Function

'------------------------------------------------------------------------------
' Author:		Ian Stewart
' NAME:			AddClipTextureLayer
' DESCRIPTION:	Add a texture layer with the selected clip.
' COMMANDMAP  (Right-click->open doc):	"\Rayflex\Commands\CommandMaps\src\Shaders.dscmdinl"
'------------------------------------------------------------------------------
Function AddClipTextureLayer_Internal( in_clip, in_containers, in_layername, in_bAfter, in_reference )
	if TypeName(in_clip) = "Source" or TypeName(in_clip) = "ImageSource" then
		set clip = SIAddImageClip(in_clip).value("Clip")
	else
		set clip = in_clip
	end if
	if TypeName(clip) = "Clip" or TypeName(clip) = "ImageClip" then
		' Some oddities when called from scripting with in_reference = Nothing
		if TypeName( in_reference ) = "Nothing" then
			set AddClipTextureLayer_Internal = AddTextureLayer( , in_containers, in_layername, in_bAfter )
		else
			set AddClipTextureLayer_Internal = AddTextureLayer( , in_containers, in_layername, in_bAfter, in_reference )
		end if

		if TypeName(AddClipTextureLayer_Internal) <> "Nothing" then
			set shader = SIApplyShaderToCnxPoint("Image", AddClipTextureLayer_Internal & ".color")
			SIConnectShaderToCnxPoint CStr(clip), shader & ".tex"
			if in_layername = "" then
				cname = GetValue( clip & ".name" )
				SetValue AddClipTextureLayer_Internal & ".name", cname & "_Layer"
			end if
			SetValue AddClipTextureLayer_Internal & ".maskmode", 0
		end if
	end if
End Function

Function AddClipTextureLayer( in_clip, in_containers, in_layername, in_bAfter, in_reference )
	set AddClipTextureLayer = AddClipTextureLayer_Internal( in_clip, in_containers, in_layername, in_bAfter, in_reference )
	if TypeName(AddClipTextureLayer) = "Nothing" then
		Logmessage "Invalid clip provided.", siError
	end if
End Function

'------------------------------------------------------------------------------
' Author:		Alexandre Jean Claude
' NAME:			CreateCGFX
' DESCRIPTION:	Creates a new material with a CGFX node with the right filename
' COMMANDMAP  (Right-click->open doc):	"\Rayflex\Commands\CommandMaps\src\Rendering.dscmdinl"
'------------------------------------------------------------------------------
Function GetEffectName(in_text)
	pos = instrrev(in_text, "\")
	
	if pos = 0 then
		pos = instrrev(in_text, "/")	
	end if
	
	file = Right(in_text, len(in_text) - pos)
	
	pos = instr(file, ".")
	file = Left(file, pos-1)

	GetEffectName = file
End Function

'------------------------------------------------------------------------------
' Author:		Ian Stewart
' NAME:			AddPresetTextureLayer
' DESCRIPTION:	Add a texture layer with the selected preset.
' COMMANDMAP  (Right-click->open doc):	"\Rayflex\Commands\CommandMaps\src\Shaders.dscmdinl"
'------------------------------------------------------------------------------
Function AddPresetTextureLayer_Internal( in_presetname, in_containers, in_layername, in_bAfter, in_reference )
	'Get the Common Shader Container for Proper Nesting
	set l_shaderContainer = FGetUniqueShaderContainer( in_containers )
	if l_shaderContainer Is Nothing then
	    AddPresetTextureLayer_Internal = nothing
	    Exit Function
	end if
	        
	set l_shader = FCreateShader( in_presetname, "Texture Shaders", "", l_shaderContainer )
	if TypeName(l_shader) = "Nothing" then
		set AddPresetTextureLayer_Internal = Nothing
	else
		' Some oddities when called from scripting with in_reference = Nothing
		if TypeName( in_reference ) = "Nothing" then
			set AddPresetTextureLayer_Internal = AddTextureLayer( , in_containers, in_layername, in_bAfter )
		else
			set AddPresetTextureLayer_Internal = AddTextureLayer( , in_containers, in_layername, in_bAfter, in_reference )
		end if
		if TypeName(AddPresetTextureLayer_Internal) <> "Nothing" then
			SIConnectShaderToCnxPoint l_shader, AddPresetTextureLayer_Internal & ".color"
			if in_layername = "" then
				sname = GetValue( l_shader & ".name" )
				SetValue AddPresetTextureLayer_Internal & ".name", sname & "_Layer"
			end if
		end if
	end if
End Function

Function AddPresetTextureLayer( in_presetname, in_containers, in_layername, in_bAfter, in_reference )
	set AddPresetTextureLayer = AddPresetTextureLayer_Internal( in_presetname, in_containers, in_layername, in_bAfter, in_reference )
	if TypeName( AddPresetTextureLayer ) = "Nothing" then
		logmessage "Invalid preset provided.", siError
	end if
End Function

Function CreateCGFXProc( in_cgfxfilename, in_library, in_object )
	dim material
	dim shader
	dim matlib
	dim object
	
	'find which matlib to use
	set matlib = ActiveProject.ActiveScene.MaterialLibraries(in_library)		
	if TypeName( matlib ) = "Nothing" then
		set matlib = ActiveProject.ActiveScene.ActiveMaterialLibrary
	end if
	
	'add a new material with a cgfx node
	set material = matlib.CreateMaterial("CgFX.preset", GetEffectName(in_cgfxfilename))
	set shader = material.Shaders(0)
	SetValue shader.fullname + ".filename", in_cgfxfilename
	
	'now attach it to the object
	if not(in_object = "") then
		set object = GetValue(in_object)
	end if

	if not(TypeName( object ) = "Empty") then 
		object.SetMaterial material
	end if
End Function

'------------------------------------------------------------------------------
' Author:		Alexandre Jean Claude
' NAME:			CreateFX
' DESCRIPTION:	Creates a new material with an FX node with the right filename
' COMMANDMAP  (Right-click->open doc):	"\Rayflex\Commands\CommandMaps\src\Rendering.dscmdinl"
'------------------------------------------------------------------------------
Function CreateFXProc( in_fxfilename, in_library, in_object )
	dim material
	dim shader
	dim matlib
	dim object
	dim presetname
	dim strLine

    presetname = "DXFX2.Preset"
    
    'try something to detect wether it's a DX9 or DX10 fx file
    Set objFSO = CreateObject("Scripting.FileSystemObject")
    Set objFile = objFSO.OpenTextFile(in_fxfilename, 1)
    
    Do Until objFile.AtEndOfStream
        strLine = objFile.ReadLine
        if InStr(strLine,"technique10") > 0 then 
            presetname = "DX10FX.Preset"
        end if
    Loop
    objFile.Close

	'find which matlib to use
	set matlib = ActiveProject.ActiveScene.MaterialLibraries(in_library)		
	if TypeName( matlib ) = "Nothing" then
		set matlib = ActiveProject.ActiveScene.ActiveMaterialLibrary
	end if
	
	'add a new material with an fx node
	set material = matlib.CreateMaterial(presetname, GetEffectName(in_fxfilename))
	set shader = material.Shaders(0)
	SetValue shader.fullname + ".filename", in_fxfilename
	
	'now attach it to the object
	if not(in_object = "") then
		set object = GetValue(in_object)
	end if
	
	if not(TypeName( object ) = "Empty") then
		object.SetMaterial material
	end if
End Function

sub GetMorePassesProc( in_preset, in_Name, in_presetdir )

	'--------------------------------------------------------------------
	' Ask for a preset
	'--------------------------------------------------------------------
	set in_preset = SIGetPreset( in_presetdir, siPassFamily )
	
	'--------------------------------------------------------------------
	' Apply the shader
	'--------------------------------------------------------------------
	If Not TypeName(in_preset) = "Nothing" then
		SICreatePass in_preset, in_Name
	Else
		Err.Raise siErrCancelled
	End If

end sub


Sub RenderInspectedPassesProc( in_objects )
	If in_objects.Count = 0 Then Exit Sub

	Dim Passes, i
	Set Passes = CreateObject("XSI.Collection")

	For i = 0 To in_objects.Count - 1
		If in_objects(i).Type = "Pass" Then
			Passes.Add in_objects(i)
		ElseIf in_objects(i).Owners(0).Type = "Pass" Then
			Passes.Add in_objects(i).Owners(0)
		End If
	Next
	
	If Passes.Count <> 0 Then
		RenderPasses Passes
	Else
		LogMessage "No valid passes found to render.", siWarning
		Err.Raise siErrCancelled
	End if
End Sub


Sub LaunchFlipbookOnInspectedPassesProc( in_oObjectColl )
	Dim oObject
	For Each oObject In in_oObjectColl
		Dim		oFramebuffer
		Dim		oPass
		
		If oObject.Type = "Pass" Then
			Set oPass = oObject
			Set oFramebuffer = oPass.Framebuffers( "Main" )
		ElseIf oObject.Type = "Framebuffer" Then
			Set oFramebuffer = oObject
			Set oPass = oFramebuffer.Owners( 0 )
		End If

		If oPass <> Empty And oFramebuffer <> Empty Then
			' Get the frame range
			Dim oRangeSource
			Set oRangeSource = oPass
			If oPass.FrameRangeSource.Value = 3 Then
				Set oRangeSource = GetValue( "Passes.RenderOptions" )
			End If
			
			If oRangeSource.FrameRangeSource.Value = 1 Then
				LogMessage oRangeSource.Name & " is set to use frame set as frame range. Flipbook needs a sequence."
			Else
				Dim		iStart, iEnd, iStep
				
				If oRangeSource.FrameRangeSource.Value = 2 Then
					iStart = GetValue( "PlayControl.In" )
					iEnd = GetValue( "PlayControl.Out" )
					iStep = GetValue( "PlayControl.Step" )
				Else
					iStart = oRangeSource.FrameStart.Value
					iEnd = oRangeSource.FrameEnd.Value
					iStep = oRangeSource.FrameStep.Value
				End If
				
				' Construct the flipbook command line
				Dim		sFlip
		
				sFlip = "-m -s """ & oFramebuffer.GetResolvedPath( "" ) & """ " & iStart & " " & iEnd & " " & iStep & " " & GetValue( "PlayControl.Rate" )

				Flipbook sFlip
			End If
		
		Else
			LogMessage oObject & " is not a pass or a framebuffer"
		End If
		
	Next
End Sub


Function CreateRenderChannelProc( io_name, io_type )
	Dim oPSet
	
	' The property be deleted automagically after this function returns.
	set oPSet = XSIFactory.CreateObject( "CustomProperty" )
	
	oPSet.Name = " "
	oPSet.AddParameter3 "ChannelName", siString, "", , , False, False
	oPSet.AddParameter3 "ChannelType", siUint4, siRenderChannelColorType, 1, 6, False, False

	Dim oLayout
	
	set oLayout = oPSet.PPGLayout
	
	oLayout.AddItem "ChannelName", "Name"
	oLayout.AddEnumControl "ChannelType", Array (_ 
		"Color", siRenderChannelColorType, _
		"Grayscale", siRenderChannelGrayscaleType, _ 
		"Depth", siRenderChannelDepthType, _ 
		"Normal Vector", siRenderChannelNormalVectorType, _ 
		"Vectors / Motion Vectors", siRenderChannelVectorType, _ 
		"Object Label", siRenderChannelLabelType ), "Type"

	If InspectObj( oPSet, , XSIUtils.Translate( IDS_CREATE_RENDER_CHANNEL_TITLE, "XSISCRIPTS" ), siModal, False ) = False Then
		io_name = oPSet.ChannelName.Value
		io_type = oPSet.ChannelType.Value

		If io_name = "" Then
			LogMessage "No render channel name specified.", siError
			Exit Function
		Else
			CreateRenderChannelProc = CreateRenderChannel( io_name, io_type )
		End If
	Else
		Err.Raise siErrCancelled
	End If

	' The invisible pset *must* be deleted or Bad Things(tm) happen.
	DeleteObj oPSet
End Function

Function CreateFramebufferProc( in_passList, io_renderChannel )
	Dim oPSet
	
	set oPSet = XSIFactory.CreateObject( "CustomProperty" )
	
	oPSet.Name = " "
	oPSet.AddParameter3 "RenderChannel", siString, io_renderChannel, , , False, False
	
	' Enumerate the channels under the Scene Global Options
	Dim oRenderChannels
	
	Set oRenderChannels = ActiveProject.ActiveScene.PassContainer.Properties( "Scene Render Options" ).RenderChannels
	
	If TypeName(oRenderChannels) = "Nothing" Then
		LogMessage "Scene Render Options property not found. Can't enumerate render channels.", siError
		Exit Function
	End If
	If oRenderChannels.Count = 0 Then
		LogMessage "No render channels defined.", siError
		Exit Function
	End If
	
	Dim		oChannel, oChannelList, idx
	ReDim	oChannelList( oRenderChannels.Count * 2 - 1 )
	
	idx = 0
	for each oChannel in oRenderChannels
		oChannelList( idx * 2 + 0 ) = oChannel.Name
		oChannelList( idx * 2 + 1 ) = oChannel.Name
		idx = idx + 1
	next 
	
	Dim oLayout, oItem
	
	set oLayout = oPSet.PPGLayout
	Set oItem = oLayout.AddEnumControl( "RenderChannel", oChannelList, "Render Channel" )
	oItem.LabelPercentage = 40
	If InspectObj( oPSet, , XSIUtils.Translate( IDS_CREATE_FRAMEBUFFER_TITLE, "XSISCRIPTS" ), siModal, False ) = False Then
		io_renderChannel = oPSet.RenderChannel.Value
		
		If io_renderChannel = "" Then
			LogMessage "No render channels selected.", siError
		Else
			CreateFramebufferProc = CreateFramebuffer( in_passList, io_renderChannel )
		End If
	Else	
		Err.Raise siErrCancelled
	End If
	
	' The invisible pset *must* be deleted or Bad Things(tm) happen.
	DeleteObj oPSet
End Function


' Backcomp emulation of the old ExportMI2File command that has
' now been superceded by the ExportRenderArchive command.
Sub ExportMI2FileProc( _
	in_oPassList, in_Preset, _
	in_StartFrame, in_EndFrame, in_StepFrame, _
	in_FileName, in_ApproxPoly, in_ApproxNURBS, in_AsciiOutput, _
	in_VerbatimTxt, in_MultiFile, in_Incremental )

	If in_oPassList.Count = 0 Then Exit Sub

	Dim		oPass, oPasses
	Set oPasses = CreateObject("XSI.Collection")
	
	For Each oPass In in_oPassList
		If oPass.Type = "Pass" Then
			If ( LCase( oPass.Renderer.Value ) = "mental ray" ) Or _
               ( oPass.Renderer.Value = "" And LCase( GetValue( "Passes.RenderOptions.Renderer" ) ) = "mental ray" ) Then
				oPasses.Add( oPass )
			End If
		End If
	Next

	If oPasses.Count = 0 Then Exit Sub
	
	ReDim sOldFileName( oPasses.Count )
	ReDim bOldApproxPoly( oPasses.Count )
	ReDim bOldApproxNURBS( oPasses.Count )
	ReDim bOldAsciiOutput( oPasses.Count )
	ReDim bOldVerbatimTxt( oPasses.Count )
	ReDim bOldIncremental( oPasses.Count )
		
	' Store any overridden data for all passes
	For i = 0 To oPasses.Count - 1
		If in_FileName <> "" Then
			if LCase( Right( in_FileName, 4 ) ) = ".mi2" Then
				in_FileName = Left( in_FileName, Len( in_FileName ) - 4 )
			End If
			
			sOldFileName( i ) = oPasses( i ).ArchiveFilename.Value
			oPasses( i ).ArchiveFilename.Value = in_FileName
		End If
	
		If Not IsEmpty( in_ApproxPoly ) Then
			bOldApproxPoly( i ) = oPasses( i ).mentalray.ArchiveApproximatePolygons.Value
			oPasses( i ).mentalray.ArchiveApproximatePolygons.Value = in_AsciiOutput
		End If 
		If Not IsEmpty( in_ApproxNURBS ) Then			
			bOldApproxNURBS( i ) = oPasses( i ).mentalray.ArchiveApproximateNURBS.Value
			oPasses( i ).mentalray.ArchiveApproximateNURBS.Value = in_AsciiOutput
		End If 
		If Not IsEmpty( in_AsciiOutput ) Then
			bOldAsciiOutput( i ) = oPasses( i ).mentalray.ArchiveAsciiOutput.Value
			oPasses( i ).mentalray.ArchiveAsciiOutput.Value = in_AsciiOutput
		End If 
		If Not IsEmpty( in_VerbatimTxt ) Then
			bOldVerbatimTxt( i ) = oPasses( i ).mentalray.ArchiveEmbedTextures.Value
			oPasses( i ).mentalray.ArchiveEmbedTextures.Value = in_VerbatimTxt
		End If 
		If Not IsEmpty( in_Incremental ) Then
			bOldIncremental( i ) = oPasses( i ).ArchiveMultiFrame.Value
			oPasses( i ).ArchiveMultiFrame.Value = in_Incremental
		End If 
	Next
	
	Dim errno
	ExportRenderArchive oPasses, in_StartFrame, in_EndFrame, in_StepFrame
	errno = Err.Number
	
	For i = 0 To oPasses.Count - 1
		If in_FileName <> "" Then
			oPasses( i ).ArchiveFilename.Value = sOldFileName( i )
		End If
	
		If Not IsEmpty( in_ApproxPoly ) Then
			oPasses( i ).mentalray.ArchiveApproximatePolygons.Value = bOldApproxPoly( i )
		End If 
		If Not IsEmpty( in_ApproxNURBS ) Then			
			oPasses( i ).mentalray.ArchiveApproximateNURBS.Value = bOldApproxNURBS( i )
		End If 
		If Not IsEmpty( in_AsciiOutput ) Then
			oPasses( i ).mentalray.ArchiveAsciiOutput.Value = bOldAsciiOutput( i )
		End If 
		If Not IsEmpty( in_VerbatimTxt ) Then
			oPasses( i ).mentalray.ArchiveEmbedTextures.Value = bOldVerbatimTxt( i )
		End If 
		If Not IsEmpty( in_Incremental ) Then
			oPasses( i ).ArchiveMultiFrame.Value = bOldIncremental( i )
		End If 
	Next
	
	If errno <> 0 Then Err.Raise errno
End Sub


Sub InspectPassRendererOptionsProc
	InspectObj GetValue( "Passes.Current.RendererOptions" ), "Pass,Rendering"
End Sub

Sub InspectViewportRenderRegionOptionsProc( in_eViewport )
	Dim		sViewport, sView

	If in_eViewport = siViewportFocussed Or in_eViewport = siViewportCurrent Then
		Dim		oVM
		
		Set oVM = Application.Desktop.ActiveLayout.Views( "vm" )
		If TypeName( oVM ) = "Nothing" Then
			LogMessage "No view manager. Can't resolve active view for render region options. If you are using a custom layout, make sure your View Manager frame is named ""vm"" in the .xsily file."
			Exit Sub
		End If
		
		If in_eViewport = siViewportFocussed Then
			sViewport = oVM.GetAttributeValue( "focusedviewport" )
		Else
			sViewport = oVM.GetAttributeValue( "viewportundermouse" )
		End If
		sViewport = "View" & sViewport

	ElseIf in_eViewport = siViewportAll Then
		sViewport = "*"
	ElseIf in_eViewport <= 4 Then
		sViewport = "View" & Mid( "ABCD", in_eViewport, 1 )
	Else
		sViewport = "View" & ( in_eViewport - 4 )
	End If

	InspectObj GetValue( "Views." & sViewport & ".RenderRegion" ), "Rendering"
End Sub

Sub DuplicatePassProc( in_oPassList )
	If in_oPassList.Count = 0 Then Exit Sub

	Set oPasses = CreateObject("XSI.Collection")

	For i = 0 To in_oPassList.Count - 1
		If in_oPassList(i).Type = "Pass" Then
			oPasses.Add in_oPassList(i)
		ElseIf in_oPassList(i).Owners(0).Type = "Pass" Then
			oPasses.Add in_oPassList(i).Owners(0)
		End If
	Next

	Duplicate oPasses, , 2, 1, 1, 0, 0, 1, 0, 1, , , , , , , , , , , 0
End Sub

Sub RenderPassesAtCurrentFrameProc( in_Passes, ByRef io_StartFrame, ByRef io_EndFrame, ByRef io_StepFrame, in_bVerbose )
	io_StartFrame = Round( GetValue( "PlayControl.Current" ) )
	io_EndFrame = io_StartFrame
	io_StepFrame = 1
	
	On Error Resume Next
	RenderPasses in_Passes, io_StartFrame, io_EndFrame, io_StepFrame, in_bVerbose
	
	If Err.number <> 0 Then 
		Err.Raise Err.number, "RenderPasses", Err.Description
	End If
End Sub


Private Sub GetObjectRenderArchiveOptions( in_InputObj, ByRef io_Filename, ByRef io_Sequence, ByRef io_StartFrame, ByRef io_EndFrame, ByRef io_StepFrame, ByRef io_MultiFrame, ByRef io_DisplayProxy )
	Dim		oPSet
	
	' Does it already exist?
	Set oPSet = in_InputObj.Properties.Item( "ArchiveExportOptions" )
	If TypeName( oPSet ) = "Nothing" Then
		Exit Sub
	End If
	
	io_Filename		= oPSet.Filename.Value
	io_Sequence		= oPSet.Sequence.Value
	io_StartFrame	= oPSet.StartFrame.Value
	io_EndFrame		= oPSet.EndFrame.Value
	io_StepFrame	= oPSet.StepFrame.Value
	io_MultiFrame	= oPSet.MultiFrame.Value
	io_DisplayProxy	= oPSet.DisplayProxy.Value
End Sub

Private Sub SetObjectRenderArchiveOptions( in_InputObj, in_Filename, in_Sequence, in_StartFrame, in_EndFrame, in_StepFrame, in_MultiFrame, in_DisplayProxy )
	Dim		oPSet
	
	' Does it already exist?
	Set oPSet = in_InputObj.Properties.Item( "ArchiveExportOptions" )
	If TypeName( oPSet ) = "Nothing" Then
		Set oPSet = in_InputObj.AddCustomProperty( "ArchiveExportOptions", False )
		
		oPSet.AddParameter3 "Filename", siString, in_FileName, null, null, false
		oPSet.AddParameter3 "Sequence", siBool, in_Sequence, null, null, false
		oPSet.AddParameter3 "StartFrame", siInt4, in_StartFrame, null, null, false
		oPSet.AddParameter3 "EndFrame", siInt4, in_EndFrame, null, null, false
		oPSet.AddParameter3 "StepFrame", siInt4, in_StepFrame, null, null, false
		oPSet.AddParameter3 "MultiFrame", siBool, in_MultiFrame, null, null, false
		oPSet.AddParameter3 "DisplayProxy", siBool, in_DisplayProxy, null, null, false
	Else
		oPSet.Filename		= in_Filename
		oPSet.Sequence		= in_Sequence
		oPSet.StartFrame	= in_StartFrame
		oPSet.EndFrame		= in_EndFrame
		oPSet.StepFrame		= in_StepFrame
		oPSet.MultiFrame	= in_MultiFrame
		oPSet.DisplayProxy	= in_DisplayProxy
	End If
End Sub

Sub ExportObjectRenderArchiveProc( ByRef io_InputObj, ByRef io_Filename, ByRef io_StartFrame, ByRef io_EndFrame, ByRef io_StepFrame, ByRef io_MultiFrame, ByRef io_DisplayProxy )

	If TypeName( io_InputObj ) = "Empty" Then
		Set io_InputObj = Selection
	End If
	
	If io_InputObj.Count = 0 Then
		LogMessage "Nothing selected for export.", siError
		Err.Raise siErrCancelled
		Exit Sub
	End If

	If io_InputObj.Count <> 1 Then
		LogMessage "Only one object can be exported at a time.", siError
		Err.Raise siErrCancelled
		Exit Sub
	End If
	
	Dim oRenderer
	Set oRenderer = ActiveProject.ActiveScene.ActivePass.Renderer
	If Not oRenderer.ProcessType( siRenderProcessExportObjectArchive ) Then
		LogMessage oRenderer.Name & " does not support object archive export.", siError
		Err.Raise siErrCancelled
		Exit Sub
	End If

	Set io_InputObj = io_InputObj( 0 )
	
	' Check if the values have already been set (if the user is iterating on the stand-in)
	Dim			bSequence
	
	io_StartFrame = GetValue( "PlayControl.In" )
	io_EndFrame = GetValue( "PlayControl.Out" )
	io_StepFrame = GetValue( "PlayControl.Step" )
	
	GetObjectRenderArchiveOptions io_InputObj, io_Filename, bSequence, io_StartFrame, io_EndFrame, io_StepFrame, io_MultiFrame, io_DisplayProxy
	
	' If the filename is not set, get a parsed filename from the preferences
	If TypeName( io_Filename ) = "Empty" Or io_Filename = "" Then
		Dim sFilename
		
		sFilename = GetValue( "preferences.rendering.object_archive_filename" )
		
		Dim sTokenIn( 1 ), sTokenOut( 1 )
		sTokenIn( 0 ) = "Object"
		sTokenOut( 0 ) = io_InputObj.Name
		
		sFilename = XSIUtils.ResolveTokenString( sFilename, null, False, sTokenIn, sTokenOut )
		
		If Not XSIUtils.IsAbsolutePath( sFilename ) Then
			sFilename = XSIUtils.BuildPath( GetValue( "Passes.RenderOptions.ResolvedOutputDir" ), sFilename )
		End If
		
		io_Filename = sFilename
	End If
	
	Dim oPSet, oLayout
	
	Set oPSet = XSIFactory.CreateObject( "CustomProperty" )
	oPSet.Name = " "
	
	oPSet.AddParameter3 "Filename", siString, io_Filename, null, null, false
	oPSet.AddParameter3 "Sequence", siBool, bSequence, null, null, false
	oPSet.AddParameter3 "StartFrame", siInt4, io_StartFrame, null, null, false
	oPSet.AddParameter3 "EndFrame", siInt4, io_EndFrame, null, null, false
	oPSet.AddParameter3 "StepFrame", siInt4, io_StepFrame, null, null, false

	oPSet.AddParameter3 "MultiFrame", siBool, io_MultiFrame, null, null, false
	oPSet.AddParameter3 "DisplayProxy", siBool, io_DisplayProxy, null, null, false
	
	Set oLayout = oPSet.PPGLayout
	
	oLayout.Logic = _
	"Sub Sequence_OnChanged" & vbCrLf & _
	"PPG.StartFrame.Enable(Sequence.Value)" & vbCrLf & _
	"PPG.EndFrame.Enable(Sequence.Value)" & vbCrLf & _
	"PPG.StepFrame.Enable(Sequence.Value)" & vbCrLf & _
	"PPG.MultiFrame.Enable(Sequence.Value)" & vbCrLf & _
	"End Sub" & vbCrLf & _
	"Sub OnInit" & vbCrLf & _
	"Sequence_OnChanged" & vbCrLf & _
	"End Sub"
	
	Dim oItem
	
	oLayout.AddGroup "File"
		Set oItem = oLayout.AddItem( "Filename", "", siControlFilePath )
		
		Dim	oArchiveInfo
		Set oArchiveInfo = oRenderer.ObjectArchiveInfo

		oItem.SetAttribute siUIFileFilter, _
			oArchiveInfo.Name & " (*." & oArchiveInfo.Extension & ")|*." & oArchiveInfo.Extension & "|" & _
			"All Files (*.*)|*.*||"
		oItem.SetAttribute siUIOpenFile, false 
		oItem.SetAttribute siUIFileMustExist, false
	oLayout.EndGroup
	
	oLayout.AddGroup "Sequence"
		oLayout.AddItem "Sequence"
		oLayout.AddRow
			oLayout.AddItem "StartFrame", "Start", siControlEdit
			oLayout.AddItem "EndFrame", "End", siControlEdit
			oLayout.AddItem "StepFrame", "Step", siControlEdit
		oLayout.EndRow
	oLayout.EndGroup
	
	oLayout.AddGroup "Export Options"
		If oRenderer.ObjectArchiveInfo.DisplayProxy Then
			oLayout.AddItem "DisplayProxy", "Generate Display Proxies"
		Else
			io_DisplayProxy = False
		End If
		If oRenderer.ObjectArchiveInfo.Multiframe Then
			oLayout.AddItem "MultiFrame", "Write all frames to a single archive"
		Else
			io_MultiFrame = False
		End If
	oLayout.EndGroup
	
	oLayout.SetAttribute siUIHelpFile, "<FactoryPath>/Doc/<DocLangPref>/xsidocs.chm::/rendering_props_ExportObjectRenderArchiveDialogBox.htm"

	Dim		iErrNo, sErrDesc

	If InspectObj( oPSet, , XSIUtils.Translate( IDS_EXPORT_OBJECT_RENDER_ARCHIVE_TITLE, "XSISCRIPTS" ), siModal, False ) = False Then
		io_Filename = oPSet.Filename.Value
		
		' Strip the extension off so we can add either frame or no frame depending on the
		' sequence settings in the ExportObjectRenderArchive call. Otherwise if there's no
		' frame token, and we try to export as a sequence, it barfs.
		sExt = "." & oArchiveInfo.Extension
		If Right( io_Filename, Len( sExt ) ) = sExt Then
			io_Filename = Left( io_FileName, Len( io_Filename ) - Len( sExt ) )
		End If
		
		If oPSet.Sequence.Value Then
			io_StartFrame = oPSet.StartFrame.Value
			io_EndFrame = oPSet.EndFrame.Value
			io_StepFrame = oPSet.StepFrame.Value
			io_MultiFrame = oPSet.MultiFrame.Value
		Else
			io_StartFrame = GetValue( "PlayControl.Current" )
			io_EndFrame = io_StartFrame
			io_StepFrame = 1
			io_MultiFrame = False
		End If
		
		io_DisplayProxy = oPSet.DisplayProxy.Value
		
		' Store the values on a property for next iteration
		SetObjectRenderArchiveOptions io_InputObj, io_Filename, oPSet.Sequence.Value, io_StartFrame, io_EndFrame, io_StepFrame, io_MultiFrame, io_DisplayProxy

		On Error Resume Next
		ExportObjectRenderArchive io_InputObj, io_Filename, io_StartFrame, io_EndFrame, io_StepFrame, io_MultiFrame, io_DisplayProxy
		iErrNo = Err.number
		sErrDesc = Err.Description
		On Error Goto 0
	End If
	
	DeleteObj oPSet
	
	If iErrNo <> 0 Then 
		Err.Raise iErrNo, "ExportObjectRenderArchive", sErrDesc
	End If
End Sub

'------------------------------------------------------------------------------
' NAME:			FGetUniqueShaderContainer
' DESCRIPTION:  Retreives the unique shader container from a list of shaders and/or materials.
' Created by Guillaume Laferriere
' Date: December 2007 HoHoHo!
'------------------------------------------------------------------------------
Function FGetUniqueShaderContainer( in_containers )
    
    'Get the Common Shader Container for Proper Nesting
	'Also check that all the Layer Containers (material or shaders) belongs to the same shader container.
	Set FGetUniqueShaderContainer = nothing
	For Each l_container in in_containers
	    Set l_curShaderContainer = nothing 
	    
	    Set l_container = FFindContainer( l_container )
    	    
	    If l_container.IsClassOf( siShaderID ) Then
	        Set l_curShaderContainer = l_container.GetShaderContainer()
	    
	    ElseIf  l_container.IsClassOf( siMaterialID ) _
                Or l_container.IsClassOf( siLightID ) _
                Or l_container.IsClassOf( siCameraID ) _
                Or l_container.IsClassOf( siOverrideID ) _
                Or l_container.IsClassOf( siParticleTypeID ) _
                Or l_container.IsClassOf( siPassID ) Then
                
	        Set l_curShaderContainer = l_container
	    Else
	        'Unsupported Type
	        Set FGetUniqueShaderContainer = nothing
	        Exit Function
	    End If
	    
	    If FGetUniqueShaderContainer Is Nothing Then
	        'It's the first
	        Set FGetUniqueShaderContainer = l_curShaderContainer
	    ElseIf FGetUniqueShaderContainer = l_curShaderContainer Then
	        'It's the same
	    Else
	        'It's the different
	        Set FGetUniqueShaderContainer = nothing
	        Exit Function
	    End If
	Next
	
End Function

'------------------------------------------------------------------------------
' NAME:			FNestedUnderShaderContainers
' DESCRIPTION:  Checks if a shader is nested under one of the given shader container.
' Created by Guillaume Laferriere
' Date: April 2008
'------------------------------------------------------------------------------
Function FNestedUnderShaderContainers( in_obj, in_containers )
    
	FNestedUnderShaderContainers = False
	
	Set l_container = FFindContainer( in_obj )
	Set l_curShaderContainer = nothing

    If l_container.IsClassOf( siShaderID ) Then
        Set l_curShaderContainer = l_container.GetShaderContainer()
    
    ElseIf  l_container.IsClassOf( siMaterialID ) _
            Or l_container.IsClassOf( siLightID ) _
            Or l_container.IsClassOf( siCameraID ) _
            Or l_container.IsClassOf( siOverrideID ) _
            Or l_container.IsClassOf( siParticleTypeID ) _
            Or l_container.IsClassOf( siPassID ) Then
            
        Set l_curShaderContainer = l_container
    End If
	
	If l_curShaderContainer Is Nothing Then
	    Exit Function
	End If
	
	'Now Check if the container is in the given container list
	For Each c in in_containers 
	    If c = l_curShaderContainer Then
	        FNestedUnderShaderContainers = True
	        Exit Function
	    End If
	Next
	   
End Function

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' Func: 	FSupportsTextureLayers
' Date: 	March 2008
' Author: 	glaferri
'
' Desc:		Tells if the object supports Texture Layers.
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Function FSupportsTextureLayers( in_obj )
    FSupportsTextureLayers = False
    
    If in_obj.IsClassOf( siMaterialID ) Then
        FSupportsTextureLayers = True
    ElseIf in_obj.IsClassOf( siShaderID ) Then
        If in_obj.ShaderType = siShader Then
            FSupportsTextureLayers = True
        End If
    End If    
    
End Function

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' Func: 	AddGradientShaderCompoundPort
' Date: 	April 2008
' Author: 	glaferri
'
' Desc:		Helper to 'easily' add a gradient shader compound port... ish.
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Function AddGradientShaderCompoundPort( in_portGradient, in_oCompound,  in_bTexturable, in_strRTLayoutGroup )
	Set AddGradientShaderCompoundPort= Nothing
	
	'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
	' We must do a lot of validation before allowing the task to do something
	'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    if in_oCompound is Nothing Or Not in_oCompound.IsClassOf(siShaderID) then
        LogMessage "AddGradientShaderCompoundPort Failed. First argument is not a valid shader compound.", siError                                                          
        Exit Function
    End if
    
    if in_portGradient is Nothing Or Not in_portGradient.IsClassOf(siParameterID) then
        LogMessage "AddGradientShaderCompoundPort Failed. Second argument is not a valid shader parameter.", siError                                                          
         Exit Function
    End if
    
	Dim oGradient
    set oGradient = in_portGradient.Parent
    if oGradient is Nothing Or Not oGradient.IsClassOf(siShaderID) then
        LogMessage "AddGradientShaderCompoundPort Failed. Second argument is not a valid shader parameter.", siError                                                          
         Exit Function
    End if
	
    Dim eParamType, bIsInput
    FGetShaderParamInfo oGradient, in_portGradient, eParamType, bIsInput
	
    if eParamType<>siIntegerParameterType Or Not bIsInput Then
         LogMessage "AddGradientShaderCompoundPort Failed. Second argument is not a valid shader input parameter for a gradient. It must be the first integer component before color 1.", siError                                                          
         Exit Function
    End If
	
	'If the gradient comes from a compound we'll need to skip internal components. rrr.
	Dim bGradientIsCompound, ulExpectedParamCount, ulIncrement
	bGradientIsCompound = oGradient.ShaderType = siShaderCompound
	ulExpectedParamCount = 25
	ulIncrement = 1
	if bGradientIsCompound Then
	    ulExpectedParamCount = ulExpectedParamCount + ulExpectedParamCount
	    ulIncrement=2
	End If
	
	Dim oParams, ulParamsCount
    set oParams = oGradient.Parameters
    ulParamsCount = oParams.Count
    if ulParamsCount < ulExpectedParamCount Then
        LogMessage "AddGradientShaderCompoundPort Failed. The gradient shader should at least have 25 paramters. (First interpolation integer component + 8 colors + 8 mid point scalars + 8 pos scalars.)", siError                                                          
         Exit Function
    End if
	
	'Search for the given interpolation index
	Dim ulCompStart, bFound
	ulCompStart = 0
	bFound=false
	For Each p in oParams 
	    if in_portGradient.Name = p.Name Then
	        bFound=true
	        Exit For
	    end if
	    ulCompStart = ulCompStart+1
	Next
	
	if Not bFound Then
	    LogMessage "AddGradientShaderCompoundPort Failed. Can't find gradient port", siError                                                                                                         
	     Exit Function
	End If
	
    if ulParamsCount - ulCompStart < ulExpectedParamCount Then
        LogMessage "AddGradientShaderCompoundPort Failed. The gradient shader should at least have 25 parameters after the starting interpolation component. (First interpolation integer component + 8 colors + 8 mid point scalars + 8 pos scalars.)", siError                                                          
         Exit Function
    End if
	
	'Gather and validate param types
	Dim i, aValidParams, ulCompCurrent
	set aValidParams = CreateObject("XSI.Collection")
	ulCompCurrent = ulCompStart + ulIncrement
	for i = 1 to 8
	    Dim oGradientCol
		set oGradientCol = oGradient.Parameters.Item(ulCompCurrent)
		FGetShaderParamInfo oGradient, oGradientCol, eParamType, bIsInput
		if Not bIsInput or eParamType<>siColorParameterType Then
		    LogMessage "AddGradientShaderCompoundPort Failed. Invalid color component " & i & " : " & oGradientCol &". (First interpolation integer component + 8 colors + 8 mid point scalars + 8 pos scalars.)", siError                                                          
		     Exit Function
		End if
		
		dim oGradientPos 
		set oGradientPos = oGradient.Parameters.Item(ulCompCurrent+ulIncrement)
		FGetShaderParamInfo oGradient, oGradientPos, eParamType, bIsInput
		if Not bIsInput or eParamType<>siScalarParameterType Then
		    LogMessage "AddGradientShaderCompoundPort Failed. Invalid pos component " & i & " : " & oGradientCol &". (First interpolation integer component + 8 colors + 8 mid point scalars + 8 pos scalars.)", siError                                                          
		     Exit Function
		End if
		
		dim oGradientMid
		set oGradientMid = oGradient.Parameters.Item(ulCompCurrent+2*ulIncrement)
		FGetShaderParamInfo oGradient, oGradientPos, eParamType, bIsInput
		if Not bIsInput or eParamType<>siScalarParameterType Then
		    LogMessage "AddGradientShaderCompoundPort Failed. Invalid mid point component " & i & " : " & oGradientCol &". (First interpolation integer component + 8 colors + 8 mid point scalars + 8 pos scalars.)", siError                                                          
		     Exit Function
		End if
		
		aValidParams.AddItems Array( oGradientCol, oGradientPos, oGradientMid )
		
	    ulCompCurrent = ulCompCurrent+ 3*ulIncrement
	next
 
    if aValidParams.Count <> 24 Then
         LogMessage "AddGradientShaderCompoundPort Failed. Wrong number of params after first pass.", siError                                                          
         Exit Function
    End if
 
    'Validation is over... now create and modify the ports....
    Dim oMain, p, oParam 
    set oMain= AddShaderCompoundPort( in_portGradient , in_oCompound )
    for each p in aValidParams
        set oParam= AddShaderCompoundPort( p, in_oCompound  )
	    SetShaderCompoundPortProperties oParam , , , , , , , in_bTexturable, in_strRTLayoutGroup , 192 
	next
	
	Set AddGradientShaderCompoundPort= oMain
End Function

'Dim oGradientPort, oMat
'NewScene,false
'SelectObj "Sources.Materials.DefaultLib.Scene_Material"
'CreateShaderFromPreset "Shaders\Texture\Gradient.Preset", "Sources.Materials.DefaultLib.Scene_Material"
'CreateShaderCompound "Sources.Materials.DefaultLib.Scene_Material.Gradient"
'set oGradientPort = GetValue("Sources.Materials.DefaultLib.Scene_Material.ShaderCompound.Gradient").Parameters.Item("rgba_interpolation")
'set oMat = GetValue("Sources.Materials.DefaultLib.Scene_Material.ShaderCompound")
'AddGradientShaderCompoundPort oGradientPort , oMat, false, ""

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' Func: 	EditShaderCompoundPPGLogic
' Date: 	April 2008
' Author: 	glaferri
'
' Desc:		Helper to edit the PPG Logic of a Shader Compound.
'           It pops up a modal pset with a text editor
'           and execute the SetShaderCompoundPortProperties task.
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Function EditShaderCompoundPPGLogic( in_obj )
    EditShaderCompoundPPGLogic = False
    
    '-------------------------------------------------------------------------
    ' Get the inital PPG values
    '-------------------------------------------------------------------------
    Dim aResults
    aResults = GetShaderCompoundProperties( in_obj )
    If UBound(aResults) < 9 Then
        Exit Function
    End If
    
    Dim strLang, strLogic
    strLang= aResults(9)
    strLogic= aResults(8)
    If strLang = "" Then
        strLang = "VBScript"
    End If
    
    '-------------------------------------------------------------------------
    ' Create the temp PSet
    '-------------------------------------------------------------------------
    Dim oPSet,oParamLang,oParamLogic
    set oPSet = ActiveSceneRoot.AddProperty( "CustomProperty", false, "Shader Compound PPG Logic" )
    set oParamLang			= oPSet.AddParameter3( "Language", siString, strLang )
    set oParamLogic			= oPSet.AddParameter3( "Logic", siString, strLogic )

    '-------------------------------------------------------------------------
    ' Prepare Layout
    '-------------------------------------------------------------------------
    dim oLayout, aComboItems, oLayLang, oLayLogic
    set oLayout = oPSet.PPGLayout
    
    aComboItems = Array(  "VBScript", "VBScript", "JScript", "JScript", "Python", "Python" )					  
    oLayout.AddGroup "Scripting Language"
	    set oLayLang = oLayout.AddEnumControl( "Language", aComboItems, "Scripting Language", siControlCombo )
	    oLayLang.SetAttribute siUINoLabel, true
    oLayout.EndGroup

    oLayout.AddGroup "Logic"
	    set oLayLogic = oLayout.AddItem( "Logic", , siControlTextEditor )
	    oLayLogic.SetAttribute siUINoLabel, true
	    oLayLogic.SetAttribute siUIHeight, 600
	    oLayLogic.SetAttribute siUIWidth, 600
	    oLayLogic.SetAttribute siUILineNumbering, true
	    oLayLogic.SetAttribute siUIMarginWidth, 6
	    oLayLogic.SetAttribute siUIFolding, true
	    oLayLogic.SetAttribute siUIFont, "Tahoma"
	    oLayLogic.SetAttribute siUICommentFont, "Comic Sans MS"
	    oLayLogic.SetAttribute siUIPreprocessorColor, 128'0x000080
	    oLayLogic.SetAttribute siUICommentColor, 32768 '0x008000
    oLayout.EndGroup

    oLayout.Logic = _
    "																				" & vbCrLf & _
    "	Sub OnInit()             													" & vbCrLf & _
    "	    Language_Onchanged()                                                    " & vbCrLf & _
    "	End Sub                                                                     " & vbCrLf & _
    "                                                                               " & vbCrLf & _
    "	Sub Language_Onchanged() 													" & vbCrLf & _
    " 		set oLayout = PPG.PPGLayout												" & vbCrLf & _
    " 		set oLayLogic = oLayout.Item(""Logic"")									" & vbCrLf & _
    " 		oLayLogic.SetAttribute siUILanguage,  PPG.Language.Value				" & vbCrLf & _
    " 		PPG.Refresh																" & vbCrLf & _
    "	End Sub                                                                     " & vbCrLf & _
    ""

    
    '-------------------------------------------------------------------------
    ' Display Modal PSet
    '-------------------------------------------------------------------------
    Dim aCancelled
    aCancelled = InspectObj( oPSet, , XSIUtils.Translate( IDS_SHADER_COMPOUND_PPG_LOGIC_TITLE, "XSISCRIPTS" ), siModal, false )
    
    '-------------------------------------------------------------------------
    ' Set PPGLogic
    '-------------------------------------------------------------------------
    if Not aCancelled then
	    SetShaderCompoundPropertiesEx in_obj, 768, , , , , , , , , oParamLogic.Value, oParamLang.Value
	    EditShaderCompoundPPGLogic = True
    end if

    'Cleanup
    DeleteObj oPSet
End Function