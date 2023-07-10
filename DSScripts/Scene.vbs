'******************************************************************************
'
' File supervisor : rgagne/adessur
' Date : sept 2000
' (c) Copyright 2000 Softimage
'
' @module	Scene.vbs
'
'	This is an VBscript file that contains util scripts for file management
'
'******************************************************************************

'******************************************************************************
' String Constants (used to translate)
'******************************************************************************
const IDS_SEARCH_AND_REPLACE_TITLE				= 1129

'----------------------------------------------------------
' Sub : ReplacePathProc
'
' Description: This function will replace all pictures file
'				  path with the new keyword specified in 
'				  argument.
' Arguments:
'		in_Type 		: Type of files to replace, ex Pictures.
'		in_ActualDir	: The original part of path to change.
'		in_NewDir		: The new part of path to replace
'		in_CaseSensitive	: Search is case sensitive
'
'	Ex: 
'		' picture1 = s:\Pictures\LowRes\mypic.pic
'	ReplacePathProc( "Pictures", "LowRes", "HiRes", true)
'		' now picture1 = s:\Pictures\HiRes\mypic.pic
'
' or 
'	ReplacePathProc("Pictures", "S:\DSProjects\myproject\Pictures", "D:\Public\Images", True)
'
'----------------------------------------------------------
sub ReplacePathProc(in_Type, in_ActualDir, in_NewDir, in_CaseSensitive, in_Files )
	Dim  l_extFileList, l_file, l_path, l_newPath

	' Get the list of all external files references
	if TypeName(in_Files) = "Nothing" then
		set l_extFileList = GetValue( "Project.ExternalFilesList")
	else
		set l_extFileList = in_Files
	end if

	for each l_file in l_extFileList

		' Only consider files with the specified type
		if in_Type = "All" or in_Type = "all" or in_Type = "ALL" or l_file.obj.Type = in_Type Then
			' Get the resolved path
			l_path = l_file.obj.Path
			l_Start = 1
			l_Count = -1

			if in_CaseSensitive then
				l_newPath = Replace( l_path, in_ActualDir, in_NewDir, l_Start, l_Count, VBBinaryCompare)
			else
				l_newPath = Replace( l_path, in_ActualDir, in_NewDir, l_Start, l_Count, VBTextCompare)				
			end if

			if l_newPath <> l_path Then
				' Assign the new path
				l_file.obj.path = l_newPath
	
				' log the info
				logmessage	"Changing " & l_path & " To " & l_file.obj.Path
			end if
		end if 
	next
end sub

'----------------------------------------------------------
' Sub : SearchAndReplaceWithUI
'
' Description: This function is the UI version of
' Search and Replace. It will build a custom pset
' as UI and inspecting so the user can fill
' in the old and new string.
' Arguments:
'		None
'----------------------------------------------------------
Sub SearchAndReplaceWithUI()
	On Error Resume Next

	Dim MyType
	Dim MyOldString
	Dim MyNewString
	Dim MyCaseSensitive 

	' defaults search and replace values
	MyType = "All"
	MyOldString = "old string"
	MyNewString = "new string"
	MyCaseSensitive = False
	
	Dim CustomPsetName
	Dim l_SceneRoot
	Dim l_CPlist
	CustomPsetName = "Search_And_Replace"	

	set l_SceneRoot = Application.ActiveProject.ActiveScene.Root

	Set l_CPList = SIAddProp("Custom_parameter_list", l_SceneRoot, , CustomPsetName).value("Value")

	SIAddCustomParameter l_SceneRoot & "." & l_CPList, "File_Category", siString, 0.000, 0.000, 1.000, , 4, 0.000, 1.000, "File Category", "File Category"
	SIAddCustomParameter l_SceneRoot & "." & l_CPList, "Old_String", siString, 0.000, 0.000, 1.000, , 4, 0.000, 1.000, "Old String","Old String"
	SIAddCustomParameter l_SceneRoot & "." & l_CPList, "New_String", siString, 0.000, 0.000, 1.000, , 4, 0.000, 1.000, "New String", "New String"
	SIAddCustomParameter l_SceneRoot & "." & l_CPList, "Case_Sensitive", siBool, 0.000, 0.000, 1.000, , 4, 0.000, 1.000, "Case Sensitive", "Case Sensitive"
	SetValue l_SceneRoot & "." & l_CPList & ".Old_String", MyOldString
	SetValue l_SceneRoot & "." & l_CPList & ".New_String", MyNewString
	SetValue l_SceneRoot & "." & l_CPList & ".File_Category", MyType
	SetValue l_SceneRoot & "." & l_CPList & ".Case_Sensitive", MyCaseSensitive

	On Error Resume Next
	InspectObj l_SceneRoot & "." & l_CPList, "", XSIUtils.Translate( IDS_SEARCH_AND_REPLACE_TITLE, "XSISCRIPTS" ), siModal

	MyOldString 	= GetValue (l_SceneRoot & "." & l_CPList & ".Old_String")
	MyNewString 	= GetValue (l_SceneRoot & "." & l_CPList & ".New_String")
	MyType      	= GetValue (l_SceneRoot & "." & l_CPList & ".File_Category")
	MyCaseSensitive	= GetValue (l_SceneRoot & "." & l_CPList & ".Case_Sensitive")

	' Check if user clicked Ok
	if Err.Number = 0 then
		if MyType = "" then
			Logmessage "Parameter Type Parameter is empty. script command not completed", siError
			DeleteObj l_SceneRoot & "." & l_CPList
			Exit Sub 'empty string no point doing the search and replace
		end if
		if MyOldString  = "" then
			Logmessage "Parameter Old String is empty. script command not completed", siError
			DeleteObj l_SceneRoot & "." & l_CPList
			Exit Sub 'empty string no point doing the search and replace
		end if
		if MyNewString = "" then
			Logmessage "Parameter New String is empty. script command not completed", siError
			DeleteObj l_SceneRoot & "." & l_CPList
			Exit Sub 'empty string no point doing the search and replace
		end if
		SearchAndReplacePath MyType, MyOldString, MyNewString, MyCaseSensitive, ""
	end if
	
	DeleteObj l_SceneRoot & "." & l_CPList
end Sub

'----------------------------------------------------------
' Sub : GetInputAndReplacePathProc
'
' Description: This function is the UI version of
' Search and Replace. It will build a custom pset
' as UI and inspecting so the user can fill
' in the old and new string.
' Arguments:
'		None
'----------------------------------------------------------
Sub GetInputAndReplacePathProc(in_Type, in_ActualDir, in_NewDir, in_CaseSensitive, in_Files )
	If in_ActualDir = "" Then
		SearchAndReplaceWithUI
	Else
		ReplacePathProc in_Type, in_ActualDir, in_NewDir, in_CaseSensitive, in_Files 
	End If 
End Sub

