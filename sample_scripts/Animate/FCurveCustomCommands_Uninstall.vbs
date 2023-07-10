
'=================================================================================
'
' FCurve Editor Custom commands samples. Un-installation of the commands
'
'=================================================================================

	dim Location
	dim cmd


	'Location argument is expected to be the full path name of the script file 
	'where the commands we are installing are implemented
	Location = Application.InstallationPath( siFactoryPath ) & "Data/XSI_SAMPLES/Scripts/Animate/FCurveCustomCommands.vbs"

	'Remove any existing earlier registrations of this command
	Application.RemoveCommand "Randomize Keys +" 
	Application.RemoveCommand "Apply Expression +" 


