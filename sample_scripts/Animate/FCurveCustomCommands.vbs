
'=================================================================================
'
' FCurve Editor Custom effects samples.
'
'Instructions:
'
' 1) In order to try this code this file needs to be saved onto disk in a .vbs 
' file so that it can be registered.
'
' 2) install the commands using the following, (changing the path according to your config):
'  xsi -script "C:/temp/FCurveDemo.vbs" -main InstallFCurveCmdExamples -args -Location "c:/temp/FCurveDemo.vbs"
'
' 3) Launch Softimage, 
' 4) Create some animated parameters, 
' 5) Open the fcurve editor, select curves and keys from your animated parameters
' 6) The new commands will appear at the end of the Edit menu
'
'=================================================================================


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
	InspectObj in_customparam,,in_title, siModal

	if Err.Number <> 0 then
		FWizardDialog = vbCancel
	else
		FWizardDialog = vbOk
	end if
end function



'================================================================================
'================================================================================
' Example 1 - Fcurve Info - this logs a bunch of information about the 
' state of the FCurve editor, in effect demonstrating what you can find out
'================================================================================
'================================================================================

sub OnFCurveEditorInfo( in_objFCurveEditor )
	LogMessage "FCurveEditorInfo called - showing information about current context of FCurve Editor"

	if ( typename( in_objFCurveEditor ) = "Nothing" ) then
		Logmessage "FCurve Argument is NULL"
	elseif ( typename( in_objFCurveEditor ) <> "FCurveEditor" ) then
		LogMessage "FCurve Argument is not an FCurve, it is a " & typename( in_objFCurveEditor ) 
	else		
		'Now access the FCurve Context listing the contents.

		dim oCurves, oCurve
		set oCurves = in_objFCurveEditor.SelectedFCurves

		if ( oCurves.Count = 0 ) then
			logmessage "There are no selected fcurves in the editor"
		end if

		dim i, strInfo
		for each oCurve in oCurves

			logmessage "-------------------------------------"

			'build a string description of the frame/keyvalues 
			'(for a real motion capture fcurve this would be too long to display like this)

			strInfo = ""
			for i = 0 to ( oCurve.Keys.Count - 1 )
				strInfo = strInfo & "(" & Round( oCurve.Keys.Item( i ).Time, 3 ) _
							& ", " & Round( oCurve.Keys.Item( i ).Value, 3 ) & ") "
			next		

			LogMessage "Selected FCurve has the following keys: " & strInfo

			'List the selected keys

			dim oKeys, oKey
			set oKeys = in_objFCurveEditor.SelectedKeys( oCurve )

			if ( oKeys.Count = 0 ) then
				logmessage "There are no keys selected on this fcurve"
			else
				strInfo = ""
				for each oKey in oKeys
					strInfo = strInfo & "(" & Round( oKey.Time, 3 ) & ", " & Round( oKey.Value, 3 ) & ") "
				next
				LogMessage "The following keys are selected on this FCurve: " & strInfo
			end if			
		next

		'The user may have selected a region in the fcurve editor.  This information is available like this:

		logmessage "-------------------------------------"

		dim Start, endFrame, Min, Max

		Start = in_objFCurveEditor.EditorAttribute( siRegionStartFrame )
		endFrame = in_objFCurveEditor.EditorAttribute( siRegionEndFrame )
		Min = in_objFCurveEditor.EditorAttribute( siRegionMin )
		Max = in_objFCurveEditor.EditorAttribute( siRegionMax )

		if ( Start <> endFrame ) then
			logmessage "User has selected time region from frame " &_ 
						round( Start, 2 ) & " to " & round( endFrame, 2 )
		else
			logmessage "No time region is selected"
		end if 

		if ( Min <> Max ) then
			logmessage "User has selected key value range from " &_ 
						round( Min, 2 ) & " to " & round( Max, 2 )
		else
			logmessage "No Value region is selected"
		end if 

	end if

end sub

'================================================================================
'================================================================================
' Example 2 - This example will modify the selected keys and set their
' value to their average value.
'================================================================================
'================================================================================

sub OnAvgSelectedPoints( in_objFCurveEditor )
	LogMessage "AvgSelectedPoints called"

	'Example of some simple error handling
	if ( typename( in_objFCurveEditor ) <> "FCurveEditor" ) then
		LogMessage "Invalid argument to command - Should be FCurveEditor object instead we got a " _ 
					& typename( in_objFCurveEditor ), siError
		exit sub
	end if

	dim bDidSomething
	bDidSomething = false

	dim oCurves, oCurve
	set oCurves = in_objFCurveEditor.SelectedFCurves

	for each oCurve in oCurves

		dim oKeys, oKey, cntKeys
		set oKeys = in_objFCurveEditor.SelectedKeys( oCurve )

		cntKeys = oKeys.Count

		if ( cntKeys > 1 ) then

			dim sumValues, avgValue
			sumValues = 0

			for each oKey in oKeys
				sumValues = sumValues + oKey.Value
			next

			avgValue = sumValues / cntKeys

			for each oKey in oKeys
				oKey.Value = avgValue
			next

			bDidSomething = true

		end if 
	next

	if ( not bDidSomething ) then
		LogMessage "Please select two or more keys on an fcurve to average"
	end if
end sub

'================================================================================
'================================================================================
' Example 3 - This sample will randomize the selected keys. It pops up a dialogue
' that allows the user to set the random method (pure random vs coherent noise,
' absolute vs relative) and the range. 
' For coherent noise it uses a trick, it makes use of Softimage expressions via some
' temporary variables...
'================================================================================
'================================================================================

sub OnRandomizeSelectedPoints( in_objFCurveEditor )
	LogMessage "RandomizeSelectedPoints called"

	'Example of some simple error handling
	if ( typename( in_objFCurveEditor ) <> "FCurveEditor" ) then
		LogMessage "Invalid argument to command - Should be FCurveEditor object instead we got a " _ 
					& typename( in_objFCurveEditor ), siError
		exit sub
	end if

	Dim l_pset, l_val, l_randomval, l_min, l_max, l_rel, l_noise, l_freq
	Dim bDidSomething, oCurves, oCurve
	bDidSomething = false

	'------------------------------------------------------------------------
	' Present the options in a dialogue
	'------------------------------------------------------------------------
	set oRoot = Application.ActiveProject.ActiveScene.Root
	set oPset = oRoot.AddProperty("Custom_parameter_list",,"Randomize Keys")
	l_pset = "Scene_Root." & oPset.name

	set oMin   = oPset.AddParameter( "Min", siDouble,  , siPersistable+siSilent, "Minimum", "Minimum", , -1, -1000000, 1000000, -10, 10  )
	set oMax   = oPset.AddParameter( "Max", siDouble,  , siPersistable+siSilent, "Maximum", "Maximum", ,  1, -1000000, 1000000, -10, 10  )
	set oRel   = oPset.AddParameter( "Relative", siBool,  , siPersistable+siSilent, "Relative", "Relative", , 1, 0, 1, 0, 1  )
	set oNoise = oPset.AddParameter( "Noise", siBool,  , siPersistable+siSilent, "Coherent Noise", "Coherent Noise", , 1, 0, 1, 0, 1  )
	set oFreq   = oPset.AddParameter( "Frequency", siDouble,  , siPersistable+siSilent, "Frequency", "Frequency", ,  0.5, 0, 100, 0, 1  )

	'SIAddCustomParameter l_pset, "Min", siDouble, -1, -100000, 100000, , siPersistable+siSilent, -10, 10, "Minimum", "Minimum"
	'SIAddCustomParameter l_pset, "Max", siDouble,  1, -100000, 100000, , siPersistable+siSilent, -10, 10, "Maximum", "Maximum"
	'SIAddCustomParameter l_pset, "Relative", siBool, 1, 0, 1, , siPersistable+siSilent, 0, 1, "Relative", "Relative"
	'SIAddCustomParameter l_pset, "Noise", siBool, 1, 0, 1, , siPersistable+siSilent, 0, 1, "Coherent Noise", "Coherent Noise"
	'SIAddCustomParameter l_pset, "Frequency", siDouble,  0.5, 0, 100, , siPersistable+siSilent, 0, 1, "Frequency", "Frequency"

	If FWizardDialog(l_pset,"Randomize Keys") = vbOk Then

		l_min = oMin.Value
		l_max = oMax.Value
		l_rel = oRel.Value
		l_noise = oNoise.Value
		l_freq = oFreq.Value
		
		'l_min = GetValue( l_pset & ".Min")
		'l_max = GetValue( l_pset & ".Max")
		'l_rel = GetValue( l_pset & ".Relative")
		'l_noise = GetValue( l_pset & ".Noise")
		'l_freq = GetValue( l_pset & ".Frequency")

		DeleteObj oPset
	Else
		Err.Raise siErrCancelled
		exit sub
	End If

	set oCurves = in_objFCurveEditor.SelectedFCurves

	'------------------------------------------------------------------------
	' Define a temporary pset which will hold temporary variables. Instead
	' of writing our own, we will use the Noise function of Softimage expressions.
	' (note: this is until a noise method gets added to XSIMath)
	'------------------------------------------------------------------------
	set oPset = oRoot.AddProperty("Custom_parameter_list",,"Temp")
	set oValout = oPset.AddParameter( "valout", siDouble,  siClassifPositioning, siAnimatable, "ValOut", "ValOut", , 0, -1000000, 1000000, 0, 1  )
	set oValin  = oPset.AddParameter( "valin", siDouble,  siClassifPositioning, siAnimatable, "ValIn", "ValIn", , 0, -1000000, 1000000, 0, 1  )

	'------------------------------------------------------------------------
	' Set the following expression:  valout = Noise( 0, valin*freq, 0 )
	'------------------------------------------------------------------------
	str = "noise( 0, "  & oValin.fullname & "*" & l_freq & ", 0)"
	l_pset = "Scene_Root." & oPset.name
	SetExpr l_pset & ".valout", str

	for each oCurve in oCurves

		dim oKeys, oKey, cntKeys
		set oKeys = in_objFCurveEditor.SelectedKeys( oCurve )

		cntKeys = oKeys.Count

		if ( cntKeys > 0 ) then

			for each oKey in oKeys

				if ( l_noise ) then
					' Set the input value and evaluate the expression
					oValin.Value = oKey.Time
					l_randomval = oValout.Value
				else
					l_randomval = rnd()
				end if

				' Make it so the resulting value is within the desired range
				l_val = (l_randomval * (l_max - l_min)) + l_min

				' Then either add this value to the current key or replace its value
				if ( l_rel ) then
					oKey.Value = oKey.Value + l_val
				else
					oKey.Value = l_val
				end if

			next

			bDidSomething = true

		end if 
	next

	DeleteObj oPset

	if ( not bDidSomething ) then
		LogMessage "Please select two or more keys to randomize them"
	end if
end sub


'================================================================================
'================================================================================
' Example 4 - This sample will apply an expression to the selected keys. ...
'================================================================================
'================================================================================

sub OnApplyExpressionToSelectedPoints( in_objFCurveEditor )
	LogMessage "ApplyExpressionToSelectedPoints called"

	'Example of some simple error handling
	if ( typename( in_objFCurveEditor ) <> "FCurveEditor" ) then
		LogMessage "Invalid argument to command - Should be FCurveEditor object instead we got a " _ 
					& typename( in_objFCurveEditor ), siError
		exit sub
	end if

	Dim l_pset, l_val, l_randomval, l_min, l_max, l_rel, l_noise, l_freq
	Dim bDidSomething, oCurves, oCurve
	bDidSomething = false

	'------------------------------------------------------------------------
	' Present the options in a dialogue
	'------------------------------------------------------------------------
	set oRoot = Application.ActiveProject.ActiveScene.Root
	set oPset = oRoot.AddProperty("Custom_parameter_list",,"Apply Expression to Keys")

	set oExp  = oPset.AddParameter( "Exp", siString,  siClassifPositioning, siAnimatable, "Expression", "Expression"  )
	set oRel  = oPset.AddParameter( "Relative", siBool,  siClassifPositioning, siAnimatable, "Relative", "Relative", , 1, 0, 1, 0, 1  )
	oExp.Value = "sin( Fcv.keytime * 20 ) * 10"

	l_pset = "Scene_Root." & oPset.name

	If FWizardDialog(l_pset,"Apply Expression to Keys") = vbOk Then
		l_exp = oExp.Value
		l_rel = oRel.value

		DeleteObj oPset
	Else
		Err.Raise siErrCancelled
		exit sub
	End If

	set oCurves = in_objFCurveEditor.SelectedFCurves

	'------------------------------------------------------------------------
	' Define a temporary pset which will hold temporary variables. That is
	' what we'll use to evaluate the expression (eventually we'd have a 
	' method in XSIMath to do this).
	'------------------------------------------------------------------------
	set oPset = oRoot.AddProperty("Custom_parameter_list",,"Fcv")
	set oValout   = oPset.AddParameter( "valout", siDouble,  siClassifPositioning, siAnimatable, "ValOut", "ValOut", , 0, -1000000, 1000000, 0, 1  )
	set oKeytime  = oPset.AddParameter( "keytime", siDouble,  siClassifPositioning, siAnimatable, "KeyTime", "KeyTime", , 0, -1000000, 1000000, 0, 1  )
	set oKeyvalue = oPset.AddParameter( "keyvalue", siDouble,  siClassifPositioning, siAnimatable, "KeyValue", "KeyValue", , 0, -1000000, 1000000, 0, 1  )

	'------------------------------------------------------------------------
	' Set the expression provided by the user
	'------------------------------------------------------------------------
	l_pset = "Scene_Root." & oPset.name
	SetExpr l_pset & ".valout", l_exp

	for each oCurve in oCurves

		dim oKeys, oKey, cntKeys
		set oKeys = in_objFCurveEditor.SelectedKeys( oCurve )

		cntKeys = oKeys.Count

		if ( cntKeys > 0 ) then

			for each oKey in oKeys

				' Set the 'input' values and Evaluate the expression
				oKeytime.Value = oKey.Time
				oKeyvalue.Value = oKey.Value
				l_val = oValout.Value

				' Then either add this value to the current key or replace its value
				if ( l_rel ) then
					oKey.Value = oKey.Value + l_val
				else
					oKey.Value = l_val
				end if

			next

			bDidSomething = true

		end if 
	next

	DeleteObj oPset

	if ( not bDidSomething ) then
		LogMessage "Please select two or more keys to apply an expression on them"
	end if
end sub