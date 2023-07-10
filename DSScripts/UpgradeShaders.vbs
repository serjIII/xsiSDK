Option Explicit

' What to do when you want to obsolete a shader:
'		- Move the preset to a subdirectory "Obsolete"
'		- Write an upgrade script for the obsolete node, "node_upgrade(p_list)" and add the code to the end of this
'		  file. node_upgrade takes a list of obsolete shaders, upgrades them, and returns the number of shaders
'         upgraded.  node_upgrade should
'		- Add a call to the upgrade function In the function "UpgradeShaders".
'		- increment the following counter to match the number of obsolete shaders dealt with In UpgradeShaders

Dim number_of_obsolete_shaders
number_of_obsolete_shaders = 16

'**************************************************************
' UpgradeShaders
'**************************************************************
' NAME:			UpgradeShaders
'
' RESULT:		TRUE	-	upgrade succeeded
'				FALSE	-	an upgrade failed, and the upgrade stopped
'
' DESCRIPTION:	Attempts to upgrade all obsolete shaders In the scene
'---------------------------------------------------------------
Function UpgradeShaders()
	Dim l_total, l_maxpasses, l_change

	' Guard against upgrade scripts that cause infinite loops
	l_maxpasses = number_of_obsolete_shaders

	UpgradeShaders = FALSE

	' Replace until nothing changes or l_maxpasses loops.
	do
		l_change = FALSE

		l_change = l_change or sib_color_mix8_upgrade(FindObjects(,"{7C4301B1-42E0-11D3-811D-00A0C983039A}"))
		l_change = l_change or sib_color_mix_color_upgrade(FindObjects(,"{86C2DE3E-BCFA-11D1-90E9-0000F804EB21}"))
		l_change = l_change or sib_scalar_mix_color_upgrade(FindObjects(,"{86EB6638-BCFA-11D1-90E9-0000F804EB21}"))
		l_change = l_change or sib_color_invert_upgrade(FindObjects(,"{87AEE70C-BCFA-11D1-90E9-0000F804EB21}"))
		l_change = l_change or sib_scalar_invert_upgrade(FindObjects(,"{875B74BE-BCFA-11D1-90E9-0000F804EB21}"))
		l_change = l_change or sib_color_bias_upgrade(FindObjects(,"{876C2534-BCFA-11D1-90E9-0000F804EB21}"))
		l_change = l_change or sib_scalar_bias_upgrade(FindObjects(,"{8725CFD5-BCFA-11D1-90E9-0000F804EB21}"))
		l_change = l_change or sib_color_gain_upgrade(FindObjects(,"{878EB74D-BCFA-11D1-90E9-0000F804EB21}"))
		l_change = l_change or sib_scalar_gain_upgrade(FindObjects(,"{87426C0D-BCFA-11D1-90E9-0000F804EB21}"))
		l_change = l_change or sib_color_X_color_upgrade(FindObjects(,"{8645B2C9-BCFA-11D1-90E9-0000F804EB21}"))
		l_change = l_change or sib_color_X_scalar_upgrade(FindObjects(,"{862451DD-BCFA-11D1-90E9-0000F804EB21}"))
		l_change = l_change or sib_color_to_boolean_upgrade(FindObjects(,"{22C05651-FEAE-11D1-8A0D-00A0C9892542}"))
		l_change = l_change or sib_scalar_to_boolean_upgrade(FindObjects(,"{22C05658-FEAE-11D1-8A0D-00A0C9892542}"))
		l_change = l_change or sib_color_switch_opp_upgrade(FindObjects(,"{85E2C132-BCFA-11D1-90E9-0000F804EB21}"))
		l_change = l_change or sib_color_add_clipping_upgrade(FindObjects(,"{491EEA85-AA7D-11D2-AFD4-00A024191B9D}"))
		l_change = l_change or sib_render_hair_upgrade(FindObjects(,"{1F51ED00-474B-4860-9428-447E9D4BFB74}"))
		
		' -------- Template: --------------
		' l_change = l_change or <obsolete node name>_upgrade(FindObjects(,"<obsolete node guid>"))
		' ---------------------------------
		' Don't forget to update number_of_obsolete_shaders
		' ---------------------------------

		l_maxpasses = l_maxpasses - 1
		UpgradeShaders = UpgradeShaders or l_change
	loop while l_change And (l_maxpasses > 0)
End Function

'***********************************************************************************************
'***********************************************************************************************
'***********************************************************************************************
'***********************************************************************************************
'***********************************************************************************************
'***********************************************************************************************

Dim constUnknownType, constColorType, constScalarType, constIntegerType, constBooleanType
constUnknownType	= "unknown"
constColorType		= "color"
constScalarType		= "scalar"
constIntegerType	= "integer"
constBooleanType	= "boolean"

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
Function FCreateShader(in_presetname, in_presetfamily, in_name)
	On Error Resume Next

	Dim l_preset
	Set l_preset = CreatePreset(in_presetname, in_presetfamily)

	If TypeName(l_preset) = "Empty" Then
		logmessage "FCreateShader: could not create preset " & in_presetname, siWarning
		Set FCreateShader = Nothing
		Exit Function
	End If
	Set FCreateShader = CreateObjectFromPreset(l_preset, in_name)
	If TypeName(FCreateShader) = "Empty" Then
		logmessage "FCreateShader: could not create object from preset " & in_presetname, siWarning
		Set FCreateShader = Nothing
	End If
End Function

'**************************************************************
' FApplyShaderToCnxPoint
'**************************************************************
' NAME:		FApplyShaderToCnxPoint
'
' INPUT:		in_presetname	- name of the preset to create shader from
'				in_port			- port to apply shader to
'
' RETURNED:		the created shader.  This function is used to wrap the error
'				handling In a single function.
'               
'---------------------------------------------------------------
Function FApplyShaderToCnxPoint(in_presetname, in_port)
	On Error Resume Next

	Set FApplyShaderToCnxPoint = SIApplyShaderToCnxPoint(in_presetname, in_port)
	If TypeName(FApplyShaderToCnxPoint) = "Empty" Then
		logmessage "FApplyShaderToCnxPoint: could not create " & in_presetname, siWarning
		Set FApplyShaderToCnxPoint = Nothing
	End If
End Function

'**************************************************************
' FIsSimpleDataOnPort
'**************************************************************
' NAME:			FIsSimpleDataOnPort
'
' INPUT:		in_port
'
' OUTPUT:		FALSE - Shader, animation or expression on port
'				TRUE - none of the above on the port
'				
' DESCRIPTION:	Returns whether there is an expression, animation or shader
'				on the port
'               
'---------------------------------------------------------------
Function FIsSimpleDataOnPort(in_port)
	Dim l_shader
	Set l_shader = SIGetShaderOnCnxPoint(in_port)

	FIsSimpleDataOnPort = TRUE
	If TypeName(l_shader) <> "Nothing" Then
		FIsSimpleDataOnPort = FALSE
	Else
		Dim l_exprAnim
		Set l_exprAnim = GetSource(in_port, siAnySource)  ' Expression or Animation
		If TypeName(l_exprAnim) <> "Nothing"  Then
			FIsSimpleDataOnPort = FALSE
		End If
	End If
End Function

'**************************************************************
' CopyValAnimExpr
'**************************************************************
' NAME:			CopyValAnimExpr
'
' INPUT:		in_from		- copy from
'				in_to		- copy to
'
' DESCRIPTION:	Copies the value, expression or animation from in_from
'				and pastes it on in_to
'               
'---------------------------------------------------------------
Sub CopyValAnimExpr(in_from, in_to)
	' copy scalar
	SetValue in_to, GetValue(in_from)

	Dim l_exprAnim
	Set l_exprAnim = GetSource(in_from, siAnySource)  ' Expression or Animation
	If TypeName(l_exprAnim) <> "Nothing"  Then
		' There's an expression or animation 
		CopyAnimation in_from
		PasteAnimation in_to
	End If
End Sub

'**************************************************************
' FGetDataType
'**************************************************************
' NAME:		FGetDataType
'
' INPUT:		in_component		- component to get the data type of
'
' RETURNED:		'Color' - color property
'				'Scalar' - float or double property
'				'Unknown' - type could not be determined
'               
'---------------------------------------------------------------
Function FGetDataType(in_component)
	Dim l_datatype, l_obj

	Set l_obj = CreateObject("XSI.CollectionItem")
	l_obj.value = in_component
	
	l_datatype = l_obj.FindAttrib("{5E373EDE-1085-11D3-B0B7-00A0C982A112}")

	If l_datatype = "{5E373EE5-1085-11D3-B0B7-00A0C982A112}" Then ' Color property
		FGetDataType = constColorType
	ElseIf l_datatype = "{5E373EE6-1085-11D3-B0B7-00A0C982A112}" Then ' Float
		FGetDataType = constScalarType
	ElseIf l_datatype = "{5E373EE7-1085-11D3-B0B7-00A0C982A112}" Then ' Double
		FGetDataType = constScalarType
	ElseIf l_datatype = "{5E373EE8-1085-11D3-B0B7-00A0C982A112}" Then ' Integer
		FGetDataType =  constIntegerType
	ElseIf l_datatype = "{5E373EE9-1085-11D3-B0B7-00A0C982A112}" Then ' Boolean
		FGetDataType =  constBooleanType
	Else
		FGetDataType = constUnknownType
	End If

End Function

'**************************************************************
' FTransferFromColorToPort
'**************************************************************
' NAME:			FTransferFromColorToPort
'
' INPUT:		in_from		- copy from color port
'				io_fromshdr - any shader that was on the in_from port, or Nothing
'				in_to		- copy to port
'				in_totype	- destination's type
'
' OUTPUT:		TRUE		- Transfer succeeded
'				FALSE		- Transfer failed
'
' DESCRIPTION:	Copies the value, expression, animation or shader from in_from
'				to in_to, converts if necessary.  in_from is a color port
'				Only colour and scalar destinations can be handled.
'               
'---------------------------------------------------------------
Function FTransferFromColorToPort(in_from, io_fromshdr, in_to, in_totype)
	Dim l_newto
	FTransferFromColorToPort = FALSE

	If in_totype = constScalarType Then
		' Must convert the color to a scalar
		Set l_newto = FApplyShaderToCnxPoint("Conversion\\Color2scalar", in_to)
		If TypeName(l_newto) <> "Empty" Then Exit Function

		SetValue l_newto & ".alpha", FALSE
		Set l_newto = l_newto & ".input"
		in_totype = constColorType
	Else
		Set l_newto = CreateObject("XSI.CollectionItem")
		l_newto.value = in_to
	End If

	If in_totype = constColorType Then
		' color to color
		CopyValAnimExpr in_from & ".red", l_newto & ".red"
		CopyValAnimExpr in_from & ".green", l_newto & ".green"
		CopyValAnimExpr in_from & ".blue", l_newto & ".blue"
		CopyValAnimExpr in_from & ".alpha", l_newto & ".alpha"
		If TypeName(io_fromshdr) <> "Nothing" Then
			' Transfer shader
			Set io_fromshdr = SIConnectShaderToCnxPoint(io_fromshdr, l_newto)
		End If
	Else
		' No known conversion - error
		logmessage "FTransferFromColorToPort: Cannot convert color to " & in_totype, siWarning
		Exit Function
	End If

	FTransferFromColorToPort = TRUE
End Function

'**************************************************************
' FTransferFromScalarToPort
'**************************************************************
' NAME:			FTransferFromScalarToPort
'
' INPUT:		in_from		- copy from scalar port
'				io_fromshdr - any shader that was on the in_from port, or Nothing
'				in_to		- copy to port
'				in_totype	- destination's type
'
' OUTPUT:		TRUE		- Transfer succeeded
'				FALSE		- Transfer failed
'
' DESCRIPTION:	Copies the value, expression, animation or shader from in_from
'				to in_to, converts if necessary.  in_from is a scalar port
'				Only colour and scalar destinations can be handled.
'               
'---------------------------------------------------------------
Function FTransferFromScalarToPort(in_from, io_fromshdr, in_to, in_totype)
	FTransferFromScalarToPort = FALSE

	If in_totype = constScalarType Then
		' Straight scalar to scalar
		CopyValAnimExpr in_from, in_to
		If TypeName(io_fromshdr) <> "Nothing" Then
			Set io_fromshdr = SIConnectShaderToCnxPoint(io_fromshdr, in_to)
		End If
	ElseIf in_totype = constColorType Then
		' Must convert the scalar to a color
		If TypeName(io_fromshdr) <> "Nothing" Then
			Set in_to = FApplyShaderToCnxPoint("Conversion\\Scalar2color", in_to)
			If TypeName(in_to) = "Nothing" Then Exit Function

			CopyValAnimExpr in_from, in_to & ".input"
			CopyValAnimExpr in_from, in_to & ".alpha"
			Set io_fromshdr = SIConnectShaderToCnxPoint(io_fromshdr, in_to & ".input")
			Set io_fromshdr = SIConnectShaderToCnxPoint(io_fromshdr, in_to & ".alpha")
		Else
			CopyValAnimExpr in_from, in_to & ".red"
			CopyValAnimExpr in_from, in_to & ".green"
			CopyValAnimExpr in_from, in_to & ".blue"
			CopyValAnimExpr in_from, in_to & ".alpha"
		End If 
	Else
		logmessage "FTransferFromScalarToPort: Cannot convert scalar to " & in_totype, siWarning
		Exit Function
	End If

	FTransferFromScalarToPort = TRUE
End Function

'**************************************************************
' FTransferFromIntegerToPort
'**************************************************************
' NAME:			FTransferFromIntegerToPort
'
' INPUT:		in_from		- copy from integer port
'				io_fromshdr - any shader that was on the in_from port, or Nothing
'				in_to		- copy to port
'				in_totype	- destination's type
'
' OUTPUT:		TRUE		- Transfer succeeded
'				FALSE		- Transfer failed
'
' DESCRIPTION:	Copies the value, expression, animation or shader from in_from
'				to in_to, converts if necessary.  in_from is an integer port
'				Only integer destinations can be handled.
'               
'---------------------------------------------------------------
Function FTransferFromIntegerToPort(in_from, io_fromshdr, in_to, in_totype)
	FTransferFromIntegerToPort = FALSE

	If in_totype = constIntegerType Then
		' Straight integer to integer
		CopyValAnimExpr in_from, in_to
		If TypeName(io_fromshdr) <> "Nothing" Then
			Set io_fromshdr = SIConnectShaderToCnxPoint(io_fromshdr, in_to)
		End If
	ElseIf in_totype = constScalarType Then
		' Must convert the scalar to integer
		Set in_to = FApplyShaderToCnxPoint("Conversion\\Integer2scalar", in_to)
		if TypeName(in_to) = "Nothing" then Exit Function

		in_to = in_to & ".input"
		CopyValAnimExpr in_from, in_to
		If TypeName(io_fromshdr) <> "Nothing" Then
			Set io_fromshdr = SIConnectShaderToCnxPoint(io_fromshdr, in_to)
		End If
	Else
		logmessage "FTransferFromIntegerToPort: Cannot convert integer to " & in_totype, siWarning
		Exit Function
	End If

	FTransferFromIntegerToPort = TRUE
End Function

'**************************************************************
' FTransferFromBooleanToPort
'**************************************************************
' NAME:			FTransferFromBooleanToPort
'
' INPUT:		in_from		- copy from scalar port
'				io_fromshdr - any shader that was on the in_from port, or Nothing
'				in_to		- copy to port
'				in_totype	- destination's type
'
' OUTPUT:		TRUE		- Transfer succeeded
'				FALSE		- Transfer failed
'
' DESCRIPTION:	Copies the value, expression, animation or shader from in_from
'				to in_to, converts if necessary.  in_from is a boolean port
'				Only boolean destinations can be handled.
'               
'---------------------------------------------------------------
Function FTransferFromBooleanToPort(in_from, io_fromshdr, in_to, in_totype)
	FTransferFromBooleanToPort = FALSE

	If in_totype = constBooleanType Then
		' Straight boolean to boolean
		CopyValAnimExpr in_from, in_to
		If TypeName(io_fromshdr) <> "Nothing" Then
			Set io_fromshdr = SIConnectShaderToCnxPoint(io_fromshdr, in_to)
		End If
	Else
		logmessage "FTransferFromBooleanToPort: Cannot convert boolean to " & in_totype, siWarning
		Exit Function
	End If

	FTransferFromBooleanToPort = TRUE
End Function

'**************************************************************
' FTransferAllPortToPort
'**************************************************************
' NAME:			FTransferAllPortToPort
'
' INPUT:		in_from		- copy from
'				in_to		- copy to
'
' OUTPUT:		TRUE			- Transfer succeeded
'				FALSE		- Transfer failed
'
' DESCRIPTION:	Copies the value, expression, animation or shader from in_from
'				to in_to, converts if necessary.  Can only handle colour, scalar, integer
'				and boolean currently.
'               
'---------------------------------------------------------------
Function FTransferAllPortToPort(in_from, in_to)
	Dim fromdatatype, todatatype, shdr, l_hr, l_temp

	FTransferAllPortToPort = FALSE

	fromdatatype = FGetDataType(in_from)
	todatatype = FGetDataType(in_to)
	
	If fromdatatype = constUnknownType Or todatatype = constUnknownType Then
		logmessage "FTransferAllPortToPort: Cannot transfer " & in_from & _
				   " to " & in_to & " : Unknown type(s)",siWarning
		Exit Function
	End If

	Set shdr = SIGetShaderOnCnxPoint(in_from)
	If TypeName(shdr) <> "Nothing" Then
		' Temporarily remove the shader so we can copy the data underneath
		Set l_temp = RemoveShaderFromCnxPoint(shdr, in_from, FALSE)
		If TypeName(l_temp) <> "Nothing" Then
			Set shdr = l_temp
		End If
	End If
	
	If fromdatatype = constColorType Then
		l_hr = FTransferFromColorToPort(in_from, shdr, in_to, todatatype)
	ElseIf fromdatatype = constScalarType Then
		l_hr = FTransferFromScalarToPort(in_from, shdr, in_to, todatatype)
	ElseIf fromdatatype = constIntegerType Then
		l_hr = FTransferFromIntegerToPort(in_from, shdr, in_to, todatatype)
	ElseIf fromdatatype = constBooleanType Then
		l_hr = FTransferFromBooleanToPort(in_from, shdr, in_to, todatatype)
	End If

	' Reconnect original shader, if there was one
	' (we must do this even if the transfer failed, i.e. l_hr = FALSE
	If TypeName(shdr) <> "Nothing" Then
		SIConnectShaderToCnxPoint shdr, in_from
	End If

	FTransferAllPortToPort = l_hr
End Function

'**************************************************************
' DoFinalReplacement
'**************************************************************
' NAME:			DoFinalReplacement
'
' INPUT:		in_old		- shader to replace
'				in_new		- name of shader to insert In it's place
'
' DESCRIPTION:	Replaces a shader with another, imitating the output connections.
'				The output type of the new shader must be the same as the old shader,
'				i.e. no conversion is done if there is a mismatch.
'               
'---------------------------------------------------------------
Sub DoFinalReplacement(in_old, in_new)
	'--------------------------------------
	' We wait until the last second to do the replacement.
	' We have successfully created an upgraded shader.  Imitate output connections.
	'--------------------------------------
	' Get outputs
	Dim l_outputs, l_temp
	Set l_outputs = EnumElements(in_old, FALSE)

	if TypeName(l_outputs) <> "Nothing" Then
		' Remove the old shader from all the outputs
		Set l_temp = RemoveShaderFromCnxPoint(in_old, l_outputs, FALSE)
		If TypeName(l_temp) <> "Nothing" Then
			Set in_old = l_temp
		End If
		' Connect the new shader to those outputs
		SIConnectShaderToCnxPoint in_new, l_outputs
	End If

	' Trash the old shader
	DeleteObj in_old
End Sub

'**************************************************************
' FShaderInStack
'**************************************************************
' NAME:			FShaderInStack
'
' INPUT:		in_shader	- shader to verify
'
' OUTPUT:		TRUE	-	the shader is in a stack
'				FALSE	-	the shader is not in a stack
'
' DESCRIPTION:	Determines if the given shader is in a stack
'				(for example, lens shader list, output shader list...)
'               
'---------------------------------------------------------------
Function FShaderInStack(in_shader)
	dim l_parents, l_p, l_children
	Set l_parents = EnumElements(in_shader, FALSE)
	If TypeName(l_parents) <> "Nothing" Then
		For Each l_p in l_parents
			Set l_children = EnumElements(l_p)
			If l_children.Count > 1 Then
				FShaderInStack = TRUE
				Exit Function
			End If
		Next
	End If
	FShaderInStack = FALSE
End Function

'*****************************************************************************************************
'* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
'*                                                                                                   *
'*                                           UPGRADE SCRIPTS                                         *
'*                                                                                                   *
'* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
'*****************************************************************************************************

'**************************************************************
' sib_color_invert_upgrade
'**************************************************************
' NAME:			sib_color_invert_upgrade
'
' INPUT:		p_list - list of obsolete shaders
'
' OUTPUT:		TRUE - a shader was replaced
'				FALSE - no shader was replaced
'
' DESCRIPTION:	Upgrade function for sib_color_invert.  Replaces it with a sib_color_math_unary
'---------------------------------------------------------------
Function sib_color_invert_upgrade(p_list)
	Dim l_obsolete, l_result
	sib_color_invert_upgrade = FALSE
	For Each l_obsolete In p_list
		If FShaderInStack(l_obsolete) Then
			logmessage "Cannot upgrade " & l_obsolete & ": shader is in a shader stack.  Please obsolete manually."
		Else
			logmessage "Upgrading " & l_obsolete
			l_result = sib_color_invert_upgrade_one(l_obsolete)
			sib_color_invert_upgrade = sib_color_invert_upgrade or l_result
			If Not l_result Then logmessage "Failed to upgrade " & l_obsolete, siWarning
		End If
	Next
End Function

Function sib_color_invert_upgrade_one(p_obsolete)
	Dim l_newshader

	sib_color_invert_upgrade_one = FALSE

	' Create a new sib_color_math_unary to replace the obsolete shader
	Set l_newshader = FCreateShader("Image_Processing\\Invert", "Texture Shaders", p_obsolete.Name)
	If TypeName(l_newshader) = "Nothing" Then Exit Function

	' Transfer input and alpha to the new shader
	If Not FTransferAllPortToPort(p_obsolete & ".input", l_newshader & ".input") Then Exit Function
	If Not FTransferAllPortToPort(p_obsolete & ".alpha", l_newshader & ".alpha") Then Exit Function

	DoFinalReplacement p_obsolete, l_newshader

	sib_color_invert_upgrade_one = TRUE
End Function

'**************************************************************
' sib_scalar_invert_upgrade
'**************************************************************
' NAME:			sib_scalar_invert_upgrade
'
' INPUT:		p_list - list of obsolete shaders
'
' OUTPUT:		TRUE - a shader was replaced
'				FALSE - no shader was replaced
'
' DESCRIPTION:	Upgrade function for sib_scalar_invert.  Replaces it with a sib_scalar_math_unary
'               
'---------------------------------------------------------------
Function sib_scalar_invert_upgrade(p_list)
	Dim l_obsolete, l_result
	sib_scalar_invert_upgrade = FALSE
	For Each l_obsolete In p_list
		If FShaderInStack(l_obsolete) Then
			logmessage "Cannot upgrade " & l_obsolete & ": shader is in a shader stack.  Please obsolete manually."
		Else
			logmessage "Upgrading " & l_obsolete
			l_result = sib_scalar_invert_upgrade_one(l_obsolete)
			sib_scalar_invert_upgrade = sib_scalar_invert_upgrade or l_result
			If Not l_result Then logmessage "Failed to upgrade " & l_obsolete, siWarning
		End If
	Next
End Function

Function sib_scalar_invert_upgrade_one(p_obsolete)
	Dim l_newshader

	sib_scalar_invert_upgrade_one = FALSE

	' Create a new sib_scalar_math_unary to replace the obsolete shader
	Set l_newshader = FCreateShader("Math\\Scalar_Invert", "Texture Shaders", p_obsolete.Name)
	If TypeName(l_newshader) = "Nothing" Then Exit Function

	' Transfer scalar to be inverted to the new shader
	If Not FTransferAllPortToPort(p_obsolete & ".input", l_newshader & ".input") Then Exit Function

	DoFinalReplacement p_obsolete, l_newshader

	sib_scalar_invert_upgrade_one = TRUE
End Function

'**************************************************************
' sib_color_to_boolean_upgrade
'**************************************************************
' NAME:			sib_color_to_boolean_upgrade
'
' INPUT:		p_list - list of obsolete shaders
'
' OUTPUT:		TRUE - a shader was replaced
'				FALSE - no shader was replaced
'
' DESCRIPTION:	Upgrade function for sib_color_to_boolean.  Replaces it with a sib_color_math_logic
'               
'---------------------------------------------------------------
Function sib_color_to_boolean_upgrade(p_list)
	Dim l_obsolete, l_result
	sib_color_to_boolean_upgrade = FALSE
	For Each l_obsolete In p_list
		If FShaderInStack(l_obsolete) Then
			logmessage "Cannot upgrade " & l_obsolete & ": shader is in a shader stack.  Please obsolete manually."
		Else
			logmessage "Upgrading " & l_obsolete
			l_result = sib_color_to_boolean_upgrade_one(l_obsolete)
			sib_color_to_boolean_upgrade = sib_color_to_boolean_upgrade or l_result
			If Not l_result Then logmessage "Failed to upgrade " & l_obsolete, siWarning
		End If
	Next
End Function

Function sib_color_to_boolean_upgrade_one(p_obsolete)
	Dim l_newshader

	sib_color_to_boolean_upgrade_one = FALSE

	' Create a new sib_color_math_logic to replace the obsolete shader
	Set l_newshader = FCreateShader("Math\\Color_Math_Logic", "Texture Shaders", p_obsolete.Name)
	If TypeName(l_newshader) = "Nothing" Then Exit Function

	' Transfer input, threshold and alpha to the new shader
	If Not FTransferAllPortToPort(p_obsolete & ".input", l_newshader & ".input1") Then Exit Function
	If Not FTransferAllPortToPort(p_obsolete & ".threshold", l_newshader & ".input2") Then Exit Function
	If Not FTransferAllPortToPort(p_obsolete & ".alpha", l_newshader & ".alpha") Then Exit Function

	SetValue l_newshader & ".op", 2			' input1 > input2

	DoFinalReplacement p_obsolete, l_newshader

	sib_color_to_boolean_upgrade_one = TRUE
End Function

'**************************************************************
' sib_scalar_to_boolean_upgrade
'**************************************************************
' NAME:			sib_scalar_to_boolean_upgrade
'
' INPUT:		p_list - list of obsolete shaders
'
' OUTPUT:		TRUE - a shader was replaced
'				FALSE - no shader was replaced
'
' DESCRIPTION:	Upgrade function for sib_scalar_to_boolean.  Replaces it with a sib_scalar_math_logic
'               
'---------------------------------------------------------------
Function sib_scalar_to_boolean_upgrade(p_list)
	Dim l_obsolete, l_result
	sib_scalar_to_boolean_upgrade = FALSE
	For Each l_obsolete In p_list
		If FShaderInStack(l_obsolete) Then
			logmessage "Cannot upgrade " & l_obsolete & ": shader is in a shader stack.  Please obsolete manually."
		Else
			logmessage "Upgrading " & l_obsolete
			l_result = sib_scalar_to_boolean_upgrade_one(l_obsolete)
			sib_scalar_to_boolean_upgrade = sib_scalar_to_boolean_upgrade or l_result
			If Not l_result Then logmessage "Failed to upgrade " & l_obsolete, siWarning
		End If
	Next
End Function

Function sib_scalar_to_boolean_upgrade_one(p_obsolete)
	Dim l_newshader

	sib_scalar_to_boolean_upgrade_one = FALSE

	' Create a new sib_scalar_math_logic to replace the obsolete shader
	Set l_newshader = FCreateShader("Math\\Scalar_Math_Logic", "Texture Shaders", p_obsolete.Name)
	If TypeName(l_newshader) = "Nothing" Then Exit Function

	' Transfer input, threshold and alpha to the new shader
	If Not FTransferAllPortToPort(p_obsolete & ".input", l_newshader & ".input1") Then Exit Function
	If Not FTransferAllPortToPort(p_obsolete & ".threshold", l_newshader & ".input2") Then Exit Function

	SetValue l_newshader & ".op", 2			' input1 > input2

	DoFinalReplacement p_obsolete, l_newshader

	sib_scalar_to_boolean_upgrade_one = TRUE
End Function

'**************************************************************
' sib_color_X_color_upgrade
'**************************************************************
' NAME:			sib_color_X_color_upgrade
'
' INPUT:		p_list - list of obsolete shaders
'
' OUTPUT:		TRUE - a shader was replaced
'				FALSE - no shader was replaced
'
' DESCRIPTION:	Upgrade function for sib_color_X_color.  Replaces it with a sib_color_math_basic
'               
'---------------------------------------------------------------
Function sib_color_X_color_upgrade(p_list)
	Dim l_obsolete, l_result
	sib_color_X_color_upgrade = FALSE
	For Each l_obsolete In p_list
		If FShaderInStack(l_obsolete) Then
			logmessage "Cannot upgrade " & l_obsolete & ": shader is in a shader stack.  Please obsolete manually."
		Else
			logmessage "Upgrading " & l_obsolete
			l_result = sib_color_X_color_upgrade_one(l_obsolete)
			sib_color_X_color_upgrade = sib_color_X_color_upgrade or l_result
			If Not l_result Then logmessage "Failed to upgrade " & l_obsolete, siWarning
		End If
	Next
End Function

Function sib_color_X_color_upgrade_one(p_obsolete)
	Dim l_newshader, l_color1, l_color2, l_multiply

	sib_color_X_color_upgrade_one = FALSE

	' Create a new sib_color_math_basic to replace the obsolete shader
	Set l_newshader = FCreateShader("Math\\Color_Math_Basic", "Texture Shaders", p_obsolete.Name)
	If TypeName(l_newshader) = "Nothing" Then Exit Function

	' Transfer colors to be multiplied to the new shader
	' Alpha should really be set to "result.alpha" in the shader
	' The best we can do is to assume this is zero, and make the result 0.
	Set l_color1 = SIGetShaderOnCnxPoint(p_obsolete & ".color1")
	If TypeName(l_color1) = "Nothing" Then
		' We can set alpha to zero on input1, resulting in 0
		CopyValAnimExpr p_obsolete & ".color1.red", l_newshader & ".input1.red"
		CopyValAnimExpr p_obsolete & ".color1.green", l_newshader & ".input1.green"
		CopyValAnimExpr p_obsolete & ".color1.blue", l_newshader & ".input1.blue"
		SetValue l_newshader & ".input1.alpha", 0
		SetValue l_newshader & ".alpha", FALSE	' Alpha just passes through (no alpha calcs on colorXcolor node)
		If Not FTransferAllPortToPort(p_obsolete & ".color2", l_newshader & ".input2") Then Exit Function
	Else
		Set l_color2 = SIGetShaderOnCnxPoint(p_obsolete & ".color2")
		If TypeName(l_color2) = "Nothing" Then
			' We can set alpha to zero on input2, resulting in 0
			If Not FTransferAllPortToPort(p_obsolete & ".color1", l_newshader & ".input1") Then Exit Function
			CopyValAnimExpr p_obsolete & ".color2.red", l_newshader & ".input2.red"
			CopyValAnimExpr p_obsolete & ".color2.green", l_newshader & ".input2.green"
			CopyValAnimExpr p_obsolete & ".color2.blue", l_newshader & ".input2.blue"
			SetValue l_newshader & ".input2.alpha", 0
			SetValue l_newshader & ".alpha", TRUE  ' 0 * color1.alpha = 0 is returned
		Else
			' Worst case: zero out .color1.alpha by multiplying color by 1,1,1,0
			SetValue l_newshader & ".alpha", FALSE	' Alpha just passes through
			Set l_multiply = SIApplyShaderToCnxPoint("Math\\Color_Math_Basic", l_newshader & ".input1", "Zero_Alpha")
			If TypeName(l_multiply) = "Nothing" Then Exit Function
			If Not FTransferAllPortToPort(p_obsolete & ".color1", l_multiply & ".input1") Then Exit Function
			If Not FTransferAllPortToPort(p_obsolete & ".color2", l_newshader & ".input2") Then Exit Function
			SetValue l_multiply & ".input2.red", 1
			SetValue l_multiply & ".input2.green", 1
			SetValue l_multiply & ".input2.blue", 1
			SetValue l_multiply & ".input2.alpha", 0
			SetValue l_multiply & ".op", 2				' Multiply
			SetValue l_multiply & ".alpha", TRUE		' affect alpha as well
		End If
	End If

	SetValue l_newshader & ".op", 2			' Multiply

	DoFinalReplacement p_obsolete, l_newshader

	sib_color_X_color_upgrade_one = TRUE
End Function

'**************************************************************
' sib_color_X_scalar_upgrade
'**************************************************************
' NAME:			sib_color_X_scalar_upgrade
'
' INPUT:		p_list - list of obsolete shaders
'
' OUTPUT:		TRUE - a shader was replaced
'				FALSE - no shader was replaced
'
' DESCRIPTION:	Upgrade function for sib_color_X_scalar.  Replaces it with a sib_color_math_basic
'               
'---------------------------------------------------------------
Function sib_color_X_scalar_upgrade(p_list)
	Dim l_obsolete, l_result
	sib_color_X_scalar_upgrade = FALSE
	For Each l_obsolete In p_list
		If FShaderInStack(l_obsolete) Then
			logmessage "Cannot upgrade " & l_obsolete & ": shader is in a shader stack.  Please obsolete manually."
		Else
			logmessage "Upgrading " & l_obsolete
			l_result = sib_color_X_scalar_upgrade_one(l_obsolete)
			sib_color_X_scalar_upgrade = sib_color_X_scalar_upgrade or l_result
			If Not l_result Then logmessage "Failed to upgrade " & l_obsolete, siWarning
		End If
	Next
End Function

Function sib_color_X_scalar_upgrade_one(p_obsolete)
	Dim l_newshader

	sib_color_X_scalar_upgrade_one = FALSE

	' Create a new sib_color_math_basic to replace the obsolete shader
	Set l_newshader = FCreateShader("Math\\Color_Math_Basic", "Texture Shaders", p_obsolete.Name)
	If TypeName(l_newshader) = "Nothing" Then Exit Function

	' Transfer color and scalar to be multiplied to the new shader (converts scalar to a color)
	If Not FTransferAllPortToPort(p_obsolete & ".color", l_newshader & ".input1") Then Exit Function
	If Not FTransferAllPortToPort(p_obsolete & ".scalar", l_newshader & ".input2") Then Exit Function
	If Not FTransferAllPortToPort(p_obsolete & ".alpha", l_newshader & ".alpha") Then Exit Function

	SetValue l_newshader & ".op", 2			' Multiply

	DoFinalReplacement p_obsolete, l_newshader

	sib_color_X_scalar_upgrade_one = TRUE
End Function

'**************************************************************
' sib_color_mix_color_upgrade
'**************************************************************
' NAME:			sib_color_mix_color_upgrade
'
' INPUT:		p_list - list of obsolete shaders
'
' OUTPUT:		TRUE - a shader was replaced
'				FALSE - no shader was replaced
'
' DESCRIPTION:	Upgrade function for sib_color_mix_color.  Replaces it with a sib_color_2mix
'               
'---------------------------------------------------------------
Function sib_color_mix_color_upgrade(p_list)
	Dim l_obsolete, l_result
	sib_color_mix_color_upgrade = FALSE
	For Each l_obsolete In p_list
		If FShaderInStack(l_obsolete) Then
			logmessage "Cannot upgrade " & l_obsolete & ": shader is in a shader stack.  Please obsolete manually."
		Else
			logmessage "Upgrading " & l_obsolete
			l_result = sib_color_mix_color_upgrade_one(l_obsolete)
			sib_color_mix_color_upgrade = sib_color_mix_color_upgrade or l_result
			If Not l_result Then logmessage "Failed to upgrade " & l_obsolete, siWarning
		End If
	Next
End Function

Function sib_color_mix_color_upgrade_one(p_obsolete)
	Dim l_newshader, l_weight, l_multiply, l_colorswitch

	sib_color_mix_color_upgrade_one = FALSE

	' Create a new Mix2colors to replace the obsolete shader
	Set l_newshader = FCreateShader("Mixers\\Mix_2colors", "Texture Shaders", p_obsolete.Name)
	If TypeName(l_newshader) = "Nothing" Then Exit Function

	' Transfer colors to the new shader
	If Not FTransferAllPortToPort(p_obsolete & ".color1", l_newshader & ".base_color") Then Exit Function
	If Not FTransferAllPortToPort(p_obsolete & ".color2", l_newshader & ".color1") Then Exit Function

	' the weight transferred is dependent on the alpha flag
	Set l_weight = SIGetShaderOnCnxPoint(p_obsolete & ".mix")

	If FIsSimpleDataOnPort(p_obsolete & ".alpha") and TypeName(l_weight) = "Nothing" Then
		' weight is not a shader, and we can see the value of alpha - we can avoid creating extra nodes.
		CopyValAnimExpr p_obsolete & ".mix.red", l_newshader & ".weight1.red"
		CopyValAnimExpr p_obsolete & ".mix.green", l_newshader & ".weight1.green"
		CopyValAnimExpr p_obsolete & ".mix.blue", l_newshader & ".weight1.blue"
		If GetValue(p_obsolete & ".alpha") = TRUE Then
			CopyValAnimExpr p_obsolete & ".mix.alpha", l_newshader & ".weight1.alpha"
		Else
			SetValue l_newshader & ".weight1.alpha", 0
		End If
	Else
		set l_multiply = Nothing
		If FIsSimpleDataOnPort(p_obsolete & ".alpha") Then
			If GetValue(p_obsolete & ".alpha") = TRUE Then
				If Not FTransferAllPortToPort(p_obsolete & ".mix", l_newshader & ".weight1") Then Exit Function
			Else
				' Need to zero out alpha
				Set l_multiply = SIApplyShaderToCnxPoint("Math\\Color_Math_Basic", l_newshader & ".weight1")
				If TypeName(l_multiply) = "Nothing" Then Exit Function
			End If
		Else
			Set l_colorswitch = SIApplyShaderToCnxPoint("Switch\\Boolean_switch", l_newshader & ".weight1")
			If Not FTransferAllPortToPort(p_obsolete & ".alpha", l_colorswitch & ".switch") Then Exit Function

			' If alpha is false, we'll use a version of the weight with alpha zeroed
			If TypeName(l_weight) <> "Nothing" Then
				Set l_multiply = SIApplyShaderToCnxPoint("Math\\Color_Math_Basic", l_colorswitch & ".input1")
				If TypeName(l_multiply) = "Nothing" Then Exit Function
			Else
				CopyValAnimExpr p_obsolete & ".mix.red", l_colorswitch & ".input1.red"
				CopyValAnimExpr p_obsolete & ".mix.green", l_colorswitch & ".input1.green"
				CopyValAnimExpr p_obsolete & ".mix.blue", l_colorswitch & ".input1.blue"
				SetValue l_newshader & ".weight1.alpha", 0
			End If

			' If alpha is true, we'll use the weight as is
			If Not FTransferAllPortToPort(p_obsolete & ".mix", l_colorswitch & ".input2") Then Exit Function
		End If

		' Create a multiply node that will zero out the alpha.
		If TypeName(l_multiply) <> "Nothing" Then
			If Not FTransferAllPortToPort(p_obsolete & ".mix", l_multiply & ".input1") Then Exit Function
			SetValue l_multiply & ".input2.red", 1
			SetValue l_multiply & ".input2.green", 1
			SetValue l_multiply & ".input2.blue", 1
			SetValue l_multiply & ".input2.alpha", 0
			SetValue l_multiply & ".op", 2				' Multiply
			SetValue l_multiply & ".alpha", TRUE		' affect alpha as well
		End If
	End If

	SetValue l_newshader & ".alpha1", FALSE			' Always off
	SetValue l_newshader & ".mode1", 1				' Mix

	DoFinalReplacement p_obsolete, l_newshader

	sib_color_mix_color_upgrade_one = TRUE
End Function

'**************************************************************
' sib_scalar_mix_color_upgrade
'**************************************************************
' NAME:			sib_scalar_mix_color_upgrade
'
' INPUT:		p_list - list of obsolete shaders
'
' OUTPUT:		TRUE - a shader was replaced
'				FALSE - no shader was replaced
'
' DESCRIPTION:	Upgrade function for sib_scalar_mix_color.  Replaces it with a sib_color_2mix
'               
'---------------------------------------------------------------
Function sib_scalar_mix_color_upgrade(p_list)
	Dim l_obsolete, l_result
	sib_scalar_mix_color_upgrade = FALSE
	For Each l_obsolete In p_list
		If FShaderInStack(l_obsolete) Then
			logmessage "Cannot upgrade " & l_obsolete & ": shader is in a shader stack.  Please obsolete manually."
		Else
			logmessage "Upgrading " & l_obsolete
			l_result = sib_scalar_mix_color_upgrade_one(l_obsolete)
			sib_scalar_mix_color_upgrade = sib_scalar_mix_color_upgrade or l_result
			If Not l_result Then logmessage "Failed to upgrade " & l_obsolete, siWarning
		End If
	Next
End Function

Function sib_scalar_mix_color_upgrade_one(p_obsolete)
	Dim l_newshader, l_convert, l_switch, l_mix

	sib_scalar_mix_color_upgrade_one = FALSE

	' Create a new Mix2colors to replace the obsolete shader
	Set l_newshader = FCreateShader("Mixers\\Mix_2colors", "Texture Shaders", p_obsolete.Name)
	If TypeName(l_newshader) = "Nothing" Then Exit Function

	' Transfer colors to the new shader
	If Not FTransferAllPortToPort(p_obsolete & ".color1", l_newshader & ".base_color") Then Exit Function
	If Not FTransferAllPortToPort(p_obsolete & ".color2", l_newshader & ".color1") Then Exit Function

	Set l_mix = SIGetShaderOnCnxPoint(p_obsolete & ".mix")

	If FIsSimpleDataOnPort(p_obsolete & ".alpha") and TypeName(l_mix) = "Nothing" Then
		' Simple transfer - no shader on .mix, and we can calculate the val of the alpha flag
		CopyValAnimExpr p_obsolete & ".mix", l_newshader & ".weight1.red"
		CopyValAnimExpr p_obsolete & ".mix", l_newshader & ".weight1.green"
		CopyValAnimExpr p_obsolete & ".mix", l_newshader & ".weight1.blue"
		If GetValue(p_obsolete & ".alpha") = TRUE Then
			CopyValAnimExpr p_obsolete & ".mix", l_newshader & ".weight1.alpha"
		Else
			SetValue l_newshader & ".weight1.alpha", 0
		End If
	Else
		Set l_convert = FApplyShaderToCnxPoint("Conversion\\Scalar2color", l_newshader & ".weight1")
		If TypeName(l_convert) = "Nothing" Then Exit Function

		If Not FTransferAllPortToPort(p_obsolete & ".mix", l_convert & ".input") Then Exit Function

		If FIsSimpleDataOnPort(p_obsolete & ".alpha") Then
			If GetValue(p_obsolete & ".alpha") = TRUE Then
				If Not FTransferAllPortToPort(p_obsolete & ".mix", l_convert & ".alpha") Then Exit Function
			Else
				SetValue l_convert & ".alpha", 0
			End If
		Else
			Set l_switch = FApplyShaderToCnxPoint("Switch\\Scalar_switch", l_convert & ".alpha")
			If TypeName(l_switch) = "Nothing" Then Exit Function

			If Not FTransferAllPortToPort(p_obsolete & ".alpha", l_switch & ".input") Then Exit Function
			' value if switch.input is false - set alpha to zero
			SetValue l_switch & ".scalar1", 0
			' value if switch.input is true - set alpha to .mix
			If Not FTransferAllPortToPort(p_obsolete & ".mix", l_switch & ".scalar2") Then Exit Function
		End If
	End If

	SetValue l_newshader & ".alpha1", FALSE			' Always off
	SetValue l_newshader & ".mode1", 1				' Mix

	DoFinalReplacement p_obsolete, l_newshader

	sib_scalar_mix_color_upgrade_one = TRUE
End Function

'**************************************************************
' sib_color_bias_upgrade
'**************************************************************
' NAME:			sib_color_bias_upgrade
'
' INPUT:		p_list - list of obsolete shaders
'
' OUTPUT:		TRUE - a shader was replaced
'				FALSE - no shader was replaced
'
' DESCRIPTION:	Upgrade function for sib_color_bias.  Replaces it with a sib_color_math_exponent
'               
'---------------------------------------------------------------
Function sib_color_bias_upgrade(p_list)
	Dim l_obsolete, l_result
	sib_color_bias_upgrade = FALSE
	For Each l_obsolete In p_list
		If FShaderInStack(l_obsolete) Then
			logmessage "Cannot upgrade " & l_obsolete & ": shader is in a shader stack.  Please obsolete manually."
		Else
			logmessage "Upgrading " & l_obsolete
			l_result = sib_color_bias_upgrade_one(l_obsolete)
			sib_color_bias_upgrade = sib_color_bias_upgrade or l_result
			If Not l_result Then logmessage "Failed to upgrade " & l_obsolete, siWarning
		End If
	Next
End Function

Function sib_color_bias_upgrade_one(p_obsolete)
	Dim l_newshader

	sib_color_bias_upgrade_one = FALSE

	' Create a new sib_color_math_exponent to replace the obsolete shader
	Set l_newshader = FCreateShader("Math\\Color_Math_Exponent", "Texture Shaders", p_obsolete.Name)
	If TypeName(l_newshader) = "Nothing" Then Exit Function

	' Transfer input, bias and alpha to the new shader
	If Not FTransferAllPortToPort(p_obsolete & ".input", l_newshader & ".input") Then Exit Function
	If Not FTransferAllPortToPort(p_obsolete & ".bias", l_newshader & ".factor") Then Exit Function
	If Not FTransferAllPortToPort(p_obsolete & ".alpha", l_newshader & ".alpha") Then Exit Function

	SetValue l_newshader & ".op", 2			' Bias

	DoFinalReplacement p_obsolete, l_newshader

	sib_color_bias_upgrade_one = TRUE
End Function

'**************************************************************
' sib_scalar_bias_upgrade
'**************************************************************
' NAME:			sib_scalar_bias_upgrade
'
' INPUT:		p_list - list of obsolete shaders
'
' OUTPUT:		TRUE - a shader was replaced
'				FALSE - no shader was replaced
'
' DESCRIPTION:	Upgrade function for sib_scalar_bias.  Replaces it with a sib_scalar_math_exponent
'               
'---------------------------------------------------------------
Function sib_scalar_bias_upgrade(p_list)
	Dim l_obsolete, l_result
	sib_scalar_bias_upgrade = FALSE
	For Each l_obsolete In p_list
		If FShaderInStack(l_obsolete) Then
			logmessage "Cannot upgrade " & l_obsolete & ": shader is in a shader stack.  Please obsolete manually."
		Else
			logmessage "Upgrading " & l_obsolete
			l_result = sib_scalar_bias_upgrade_one(l_obsolete)
			sib_scalar_bias_upgrade = sib_scalar_bias_upgrade or l_result
			If Not l_result Then logmessage "Failed to upgrade " & l_obsolete, siWarning
		End If
	Next
End Function

Function sib_scalar_bias_upgrade_one(p_obsolete)
	Dim l_newshader

	sib_scalar_bias_upgrade_one = FALSE

	' Create a new sib_scalar_math_exponent to replace the obsolete shader
	Set l_newshader = FCreateShader("Math\\Scalar_Math_Exponent", "Texture Shaders", p_obsolete.Name)
	If TypeName(l_newshader) = "Nothing" Then Exit Function

	' Transfer input, bias and alpha to the new shader
	If Not FTransferAllPortToPort(p_obsolete & ".input", l_newshader & ".input") Then Exit Function
	If Not FTransferAllPortToPort(p_obsolete & ".bias", l_newshader & ".factor") Then Exit Function

	SetValue l_newshader & ".op", 2			' Bias

	DoFinalReplacement p_obsolete, l_newshader

	sib_scalar_bias_upgrade_one = TRUE
End Function

'**************************************************************
' sib_color_gain_upgrade
'**************************************************************
' NAME:			sib_color_gain_upgrade
'
' INPUT:		p_list - list of obsolete shaders
'
' OUTPUT:		TRUE - a shader was replaced
'				FALSE - no shader was replaced
'
' DESCRIPTION:	Upgrade function for sib_color_gain.  Replaces it with a sib_color_math_exponent
'               
'---------------------------------------------------------------
Function sib_color_gain_upgrade(p_list)
	Dim l_obsolete, l_result
	sib_color_gain_upgrade = FALSE
	For Each l_obsolete In p_list
		If FShaderInStack(l_obsolete) Then
			logmessage "Cannot upgrade " & l_obsolete & ": shader is in a shader stack.  Please obsolete manually."
		Else
			logmessage "Upgrading " & l_obsolete
			l_result = sib_color_gain_upgrade_one(l_obsolete)
			sib_color_gain_upgrade = sib_color_gain_upgrade or l_result
			If Not l_result Then logmessage "Failed to upgrade " & l_obsolete, siWarning
		End If
	Next
End Function

Function sib_color_gain_upgrade_one(p_obsolete)
	Dim l_newshader

	sib_color_gain_upgrade_one = FALSE

	' Create a new sib_color_math_exponent to replace the obsolete shader
	Set l_newshader = FCreateShader("Math\\Color_Math_Exponent", "Texture Shaders", p_obsolete.Name)
	If TypeName(l_newshader) = "Nothing" Then Exit Function

	' Transfer input, gain and alpha to the new shader
	If Not FTransferAllPortToPort(p_obsolete & ".input", l_newshader & ".input") Then Exit Function
	If Not FTransferAllPortToPort(p_obsolete & ".gain", l_newshader & ".factor") Then Exit Function
	If Not FTransferAllPortToPort(p_obsolete & ".alpha", l_newshader & ".alpha") Then Exit Function

	SetValue l_newshader & ".op", 3			' Gain

	DoFinalReplacement p_obsolete, l_newshader

	sib_color_gain_upgrade_one = TRUE
End Function

'**************************************************************
' sib_scalar_gain_upgrade
'**************************************************************
' NAME:			sib_scalar_gain_upgrade
'
' INPUT:		p_list - list of obsolete shaders
'
' OUTPUT:		TRUE - a shader was replaced
'				FALSE - no shader was replaced
'
' DESCRIPTION:	Upgrade function for sib_scalar_gain.  Replaces it with a sib_scalar_math_exponent
'               
'---------------------------------------------------------------
Function sib_scalar_gain_upgrade(p_list)
	Dim l_obsolete, l_result
	sib_scalar_gain_upgrade = FALSE
	For Each l_obsolete In p_list
		If FShaderInStack(l_obsolete) Then
			logmessage "Cannot upgrade " & l_obsolete & ": shader is in a shader stack.  Please obsolete manually."
		Else
			logmessage "Upgrading " & l_obsolete
			l_result = sib_scalar_gain_upgrade_one(l_obsolete)
			sib_scalar_gain_upgrade = sib_scalar_gain_upgrade or l_result
			If Not l_result Then logmessage "Failed to upgrade " & l_obsolete, siWarning
		End If
	Next
End Function

Function sib_scalar_gain_upgrade_one(p_obsolete)
	Dim l_newshader

	sib_scalar_gain_upgrade_one = FALSE

	' Create a new sib_scalar_math_exponent to replace the obsolete shader
	Set l_newshader = FCreateShader("Math\\Scalar_Math_Exponent", "Texture Shaders", p_obsolete.Name)
	If TypeName(l_newshader) = "Nothing" Then Exit Function

	' Transfer input, gain and alpha to the new shader
	If Not FTransferAllPortToPort(p_obsolete & ".input", l_newshader & ".input") Then Exit Function
	If Not FTransferAllPortToPort(p_obsolete & ".gain", l_newshader & ".factor") Then Exit Function

	SetValue l_newshader & ".op", 3			' Gain

	DoFinalReplacement p_obsolete, l_newshader

	sib_scalar_gain_upgrade_one = TRUE
End Function

'**************************************************************
' sib_color_mix8_upgrade
'**************************************************************
' NAME:			sib_color_mix8_upgrade
'
' INPUT:		p_list - list of obsolete shaders
'
' OUTPUT:		TRUE - a shader was replaced
'				FALSE - no shader was replaced
'
' DESCRIPTION:	Upgrade function for sib_color_mix8.  Upgrades the object with a sib_color_8mix.
'               
'---------------------------------------------------------------
Function sib_color_mix8_upgrade(p_list)
	Dim l_obsolete, l_result
	sib_color_mix8_upgrade = FALSE
	For Each l_obsolete In p_list
		If FShaderInStack(l_obsolete) Then
			logmessage "Cannot upgrade " & l_obsolete & ": shader is in a shader stack.  Please obsolete manually."
		Else
			logmessage "Upgrading " & l_obsolete
			l_result = sib_color_mix8_upgrade_one(l_obsolete)
			sib_color_mix8_upgrade = sib_color_mix8_upgrade or l_result
			If Not l_result Then logmessage "Failed to upgrade " & l_obsolete, siWarning
		End If
	Next
End Function

Function sib_color_mix8_upgrade_one(p_obsolete)
	Dim l_obj, l_newshader, i, l_count, l_logic, l_convert

	sib_color_mix8_upgrade_one = FALSE

	' Create a new 8mix shader that outputs to the 
	Set l_newshader = FCreateShader("Mixers\\Mix_8colors", "Texture Shaders", p_obsolete.Name)

	If TypeName(l_newshader) = "Nothing" Then Exit Function

	' Do simple transfers: base_color, mode, color, weight and alpha
	If Not FTransferAllPortToPort(p_obsolete & ".base_color", l_newshader & ".base_color") Then Exit Function
	for i = 1 to 7
		If Not FTransferAllPortToPort(p_obsolete & ".mode" & i, l_newshader & ".mode" & i) Then Exit Function
		If Not FTransferAllPortToPort(p_obsolete & ".color" & i, l_newshader & ".color" & i) Then Exit Function
		If Not FTransferAllPortToPort(p_obsolete & ".weight" & i, l_newshader & ".weight" & i) Then Exit Function
		If Not FTransferAllPortToPort(p_obsolete & ".alpha" & i, l_newshader & ".alpha" & i) Then Exit Function
	Next

	' Convert the "count" of obsolete to the "inuse" flags on the new shader
	If FIsSimpleDataOnPort(p_obsolete & ".count") Then
		l_count = CInt(GetValue(p_obsolete & ".count"))

		for i = 1 to 7
			SetValue l_newshader & ".inuse" & i, (i<=l_count)
		Next
	Else
		' More complicated: Create logic nodes to check if the value of count is
		' such that that layer should be enabled
		Set l_convert = FCreateShader("Conversion\\Integer2scalar", "Texture Shaders", "Integer2scalar")
		If TypeName(l_convert) = "Nothing" Then Exit Function

		' count is not texturable - not a shader
		CopyValAnimExpr	p_obsolete & ".count", l_convert & ".input"

		for i = 1 to 7
			SetValue l_newshader & ".inuse" & i, TRUE

			Set l_logic = FApplyShaderToCnxPoint("Math\\Scalar_Math_Logic", l_newshader & ".inuse" & i)
			If TypeName(l_logic) = "Nothing" Then Exit Function

			SetValue l_logic & ".input2", i
			SetValue l_logic & ".op", 4  		' input1 Greater than or Equal to input2

			SIConnectShaderToCnxPoint l_convert, l_logic & ".input1"
		Next
	End If

	DoFinalReplacement p_obsolete, l_newshader

	sib_color_mix8_upgrade_one = TRUE
End Function

'**************************************************************
' sib_color_switch_opp_upgrade
'**************************************************************
' NAME:			sib_color_switch_opp_upgrade
'
' INPUT:		p_list - list of obsolete shaders
'
' OUTPUT:		TRUE - a shader was replaced
'				FALSE - no shader was replaced
'
' DESCRIPTION:	Upgrade function for sib_color_switch_opp.  Replaces it with a sib_color_switch
'               
'---------------------------------------------------------------
Function sib_color_switch_opp_upgrade(p_list)
	Dim l_obsolete, l_result
	sib_color_switch_opp_upgrade = FALSE
	For Each l_obsolete In p_list
		If FShaderInStack(l_obsolete) Then
			logmessage "Cannot upgrade " & l_obsolete & ": shader is in a shader stack.  Please obsolete manually."
		Else
			logmessage "Upgrading " & l_obsolete
			l_result = sib_color_switch_opp_upgrade_one(l_obsolete)
			sib_color_switch_opp_upgrade = sib_color_switch_opp_upgrade or l_result
			If Not l_result Then logmessage "Failed to upgrade " & l_obsolete, siWarning
		End If
	Next
End Function

Function sib_color_switch_opp_upgrade_one(p_obsolete)
	Dim l_newshader

	sib_color_switch_opp_upgrade_one = FALSE

	' Create a new sib_color_switch to replace the obsolete shader
	Set l_newshader = FCreateShader("Switch\\Boolean_switch", "Texture Shaders", p_obsolete.Name)
	If TypeName(l_newshader) = "Nothing" Then Exit Function

	' Transfer colors and switch to the new shader
	If Not FTransferAllPortToPort(p_obsolete & ".input1", l_newshader & ".input2") Then Exit Function
	If Not FTransferAllPortToPort(p_obsolete & ".input2", l_newshader & ".input1") Then Exit Function
	If Not FTransferAllPortToPort(p_obsolete & ".switch", l_newshader & ".switch") Then Exit Function

	DoFinalReplacement p_obsolete, l_newshader

	sib_color_switch_opp_upgrade_one = TRUE
End Function

'**************************************************************
' sib_color_add_clipping_upgrade
'**************************************************************
' NAME:			sib_color_add_clipping_upgrade
'
' INPUT:		p_list - list of obsolete shaders
'
' OUTPUT:		TRUE - a shader was replaced
'				FALSE - no shader was replaced
'
' DESCRIPTION:	Upgrade function for sib_color_add_clipping.  Replaces it with a sib_color_2mix
'               
'---------------------------------------------------------------
Function sib_color_add_clipping_upgrade(p_list)
	Dim l_obsolete, l_result
	sib_color_add_clipping_upgrade = FALSE
	For Each l_obsolete In p_list
		If FShaderInStack(l_obsolete) Then
			logmessage "Cannot upgrade " & l_obsolete & ": shader is in a shader stack.  Please obsolete manually."
		Else
			logmessage "Upgrading " & l_obsolete
			l_result = sib_color_add_clipping_upgrade_one(l_obsolete)
			sib_color_add_clipping_upgrade = sib_color_add_clipping_upgrade or l_result
			If Not l_result Then logmessage "Failed to upgrade " & l_obsolete, siWarning
		End If
	Next
End Function

Function sib_color_add_clipping_upgrade_one(p_obsolete)
	Dim l_newshader

	sib_color_add_clipping_upgrade_one = FALSE

	' Create a new sib_color_2mix to replace the obsolete shader
	Set l_newshader = FCreateShader("Mixers\\Mix_2colors", "Texture Shaders", p_obsolete.Name)
	If TypeName(l_newshader) = "Nothing" Then Exit Function

	' Transfer colors to the new shader
	If Not FTransferAllPortToPort(p_obsolete & ".input1", l_newshader & ".base_color") Then Exit Function
	If Not FTransferAllPortToPort(p_obsolete & ".input2", l_newshader & ".color1") Then Exit Function

	' color_add_clipping is the same as blending with a weight of 1
	SetValue l_newshader & ".weight1.red", 1.0
	SetValue l_newshader & ".weight1.green", 1.0
	SetValue l_newshader & ".weight1.blue", 1.0
	SetValue l_newshader & ".weight1.alpha", 1.0
	SetValue l_newshader & ".alpha1", FALSE			' Always off
	SetValue l_newshader & ".mode1", 0				' Blend

	DoFinalReplacement p_obsolete, l_newshader

	sib_color_add_clipping_upgrade_one = TRUE
End Function

'**************************************************************
' sib_render_hair_upgrade
'**************************************************************
' NAME:			sib_render_hair_upgrade
'
' INPUT:		p_list - list of obsolete shaders
'
' OUTPUT:		TRUE - a shader was replaced
'				FALSE - no shader was replaced
'
' DESCRIPTION:	Upgrade function for sib_color_add_clipping.  Replaces it with a sib_color_2mix
'               
'---------------------------------------------------------------
Function sib_render_hair_upgrade( in_obsoleteList )
	Dim l_obsolete, l_result
	sib_render_hair_upgrade = false
	For Each l_obsolete In in_obsoleteList
		If FShaderInStack(l_obsolete) Then
			logmessage "Cannot upgrade " & l_obsolete & ": shader is in a shader stack.  Please obsolete manually."
		Else
			logmessage "Upgrading " & l_obsolete
			l_result = sib_render_hair_upgrade_one(l_obsolete)
			sib_render_hair_upgrade = sib_render_hair_upgrade or l_result
			If Not l_result Then logmessage "Failed to upgrade " & l_obsolete, siWarning
		End If
	Next
End Function

Function sib_render_hair_upgrade_one( in_obsolete )
	Dim		l_newShader

	sib_render_hair_upgrade_one = false
	
	Set l_newShader = FCreateShader("Hair_Renderer", "Material Shaders", in_obsolete.Name )
	If TypeName( l_newShader ) = "Nothing" Then Exit Function

	' Transfer inputs to new shader
	If Not FTransferAllPortToPort( in_obsolete & ".material", l_newShader & ".Material" ) Then Exit Function
	If Not FTransferAllPortToPort( in_obsolete & ".diffuse_root", l_newShader & ".DiffuseRoot" ) Then Exit Function
	If Not FTransferAllPortToPort( in_obsolete & ".diffuse_tip1", l_newShader & ".DiffuseTipA" ) Then Exit Function
	If Not FTransferAllPortToPort( in_obsolete & ".diffuse_tip2", l_newShader & ".DiffuseTipB" ) Then Exit Function
	If Not FTransferAllPortToPort( in_obsolete & ".diffuse_balance", l_newShader & ".TipBalance" ) Then Exit Function
	If Not FTransferAllPortToPort( in_obsolete & ".diffuse_crossover_point", l_newShader & ".DiffuseCrossoverCenter" ) Then Exit Function
	If Not FTransferAllPortToPort( in_obsolete & ".diffuse_crossover_range", l_newShader & ".DiffuseCrossoverRange" ) Then Exit Function
	If Not FTransferAllPortToPort( in_obsolete & ".color_varation", l_newShader & ".DiffuseVariation" ) Then Exit Function
	If Not FTransferAllPortToPort( in_obsolete & ".specular_inuse", l_newShader & ".SpecularInuse" ) Then Exit Function
	If Not FTransferAllPortToPort( in_obsolete & ".specular", l_newShader & ".Specular" ) Then Exit Function
	If Not FTransferAllPortToPort( in_obsolete & ".specular_decay", l_newShader & ".SpecularDecay" ) Then Exit Function
	If Not FTransferAllPortToPort( in_obsolete & ".transparency_inuse", l_newShader & ".TransparencyInuse" ) Then Exit Function
	If Not FTransferAllPortToPort( in_obsolete & ".transparency_root", l_newShader & ".TransparencyRoot" ) Then Exit Function
	If Not FTransferAllPortToPort( in_obsolete & ".transparency_tip", l_newShader & ".TransparencyTip" ) Then Exit Function
	If Not FTransferAllPortToPort( in_obsolete & ".transparency_crossover_point", l_newShader & ".TransparencyCrossoverCenter" ) Then Exit Function
	If Not FTransferAllPortToPort( in_obsolete & ".transparency_crossover_range", l_newShader & ".TransparencyCrossoverRange" ) Then Exit Function
	If Not FTransferAllPortToPort( in_obsolete & ".radiance", l_newShader & ".Irradiance" ) Then Exit Function
	
	' Do final replacement
	Dim l_outputs, l_temp
	Set l_outputs = EnumElements( in_obsolete, false )
	
	If TypeName( l_outputs ) <> "Nothing" Then
		Dim l_allMat

		l_allMat = true

		For each l_temp in l_outputs
			If l_temp.Parent.Type <> "material" Then l_allMat = false
		Next

		If l_allMat = true Then
			Dim l_obsName

			l_obsName = in_obsolete.FullName
			' Remove old shader from all the outpus
			Set l_temp = RemoveShaderFroMCnxPoint( in_obsolete, l_outputs, FALSE )
			If TypeName(l_temp) <> "Nothing" Then
				Set in_obsolete = l_temp
			End If
			
			Dim l_mat
			
			Set l_mat = l_outputs.Item( 0 )
			Set l_mat = l_mat.Parent
			l_mat.Surface.connect( l_newShader )
			l_mat.Shadow.connect( l_newShader )
			l_mat.Volume.connect( l_newShader )
			l_mat.PhotonVolume.connect( l_newShader )

			LogMessage "Upgraded " & l_obsName & " to new hair shader. Shading model was changed to 'Fur'."
			sib_render_hair_upgrade_one = true

			DeleteObj in_obsolete
		End If

	End If	
End Function
