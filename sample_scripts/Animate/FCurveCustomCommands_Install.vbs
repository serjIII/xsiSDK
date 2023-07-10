
'=================================================================================
'
' FCurve Editor Custom commands samples. Installation of the commands
'
'=================================================================================


	dim Location
	dim cmd


	'Location argument is expected to be the full path name of the script file 
	'where the commands we are installing are implemented
	' Note1: on irix we need to append the final '/' because it's not there
	' Note2: using forward slash so it works on irix too
	Location = Application.InstallationPath( siFactoryPath )
	if Not right(Location , 1) = "/" then
		Location  = Location  & "/"
	end if  
	Location = Location & "Data/XSI_SAMPLES/Scripts/Animate/FCurveCustomCommands.vbs"


	'Remove any existing earlier registrations of this command
	Application.RemoveCommand "Randomize Keys +" 
	Application.RemoveCommand "Apply Expression +" 


	set cmd = Application.CreateCommand("Randomize Keys +", siFCurveCategory)
	cmd.Description = "Adds a random value to selected keys"
	cmd.ScriptingName = "RandomizeKeys"
	cmd.Handler = "OnRandomizeSelectedPoints"
	cmd.FileName = Location
	cmd.Language = "VBScript"
	cmd.ReturnValue = false											
	cmd.Arguments.Add "FCurveEditor", siArgumentInput, 0, siDispatch

	Application.AddCommand cmd

	logmessage "Randomize Keys is now added to fcurve editor Edit menu"

	set cmd = Application.CreateCommand("Apply Expression +", siFCurveCategory)
	cmd.Description = "Applys an expression value to selected keys"
	cmd.ScriptingName = "ApplyExpression"
	cmd.Handler = "OnApplyExpressionToSelectedPoints"
	cmd.FileName = Location
	cmd.Language = "VBScript"
	cmd.ReturnValue = false											
	cmd.Arguments.Add "FCurveEditor", siArgumentInput, 0, siDispatch

	Application.AddCommand cmd

	logmessage "Apply Expression is now added to fcurve editor Edit menu"


