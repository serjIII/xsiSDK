'******************************************************************************
'
' File supervisor : Ludovick Michaud
' Date :
' © Copyright 2009 Autodesk, Inc.  All rights reserved.
'
' @doc
'
' @module	LM_ImagesSize.vbs
'
'******************************************************************************
'//Script to Optimize the Use of the Image in the Program

ImageOptimization

Function ImageOptimization

'//This is the line to actually bypass the fact that you cancel the Operation
On Error Resume Next

'//In case the user Change the name of the Scene Root
'//Find the Scene_Root object 
set mySceneRoot = EnumElements("Project", TRUE)
set mySceneRoot = SIFilter(mySceneRoot, "Scene", TRUE )(0)
set mySceneRoot = EnumElements( mySceneRoot , TRUE)
set mySceneRoot = SIFilter(mySceneRoot, "SceneObject", TRUE)(0)

'//in case someone as already created put a custom parameter named "Image_Optimizer"
set ImageOpName = AddProp ("Custom_parameter_list",mySceneRoot, , "Image_Optimizer").Value("Value")
'//Adding the Parameters in the Custom parameter
SIAddCustomParameter ImageOpName, "Load in Memory------------0", siBool, 0.000, 0.000, 1.000, , 2, 0.000, 0.000
SIAddCustomParameter ImageOpName, "Use From Disk--------------1", siBool, 0.000, 0.000, 1.000, , 2, 0.000, 0.000
SIAddCustomParameter ImageOpName, "Full Size in Memory--------2", siBool, 0.000, 0.000, 1.000, , 2, 0.000, 0.000
SIAddCustomParameter ImageOpName, "Quarter Size in Memory---3", siBool, 0.000, 0.000, 1.000, , 2, 0.000, 0.000
SIAddCustomParameter ImageOpName, "Optimization Type", siInt4, 1.000, 0.000, 3.000, , 0, 0.000, 0.000

'//Opening the CustomParameter for the user to Interact w/ it
InspectObj mySceneRoot & "." & ImageOpName,, "Image Optimizer",4

'//If user Press Cancel, the Script will be avoided
	if Err.Number = 0 then

		set ClipList = EnumElements("Clips.Image")
		
		if TypeName(ClipList) <> "Nothing" then
			For each elem in ClipList
				'//Need to bypass Scaling since it's not a Valid Clip
				if elem <> "Clips.Scaling" then
			
					if GetValue (ImageOpName & ".Optimization_Type") = 0 then
						'//Use in Memory	
						SetValue elem & ".ImageDefinitionType", 0
					end if 
					if GetValue (ImageOpName & ".Optimization_Type") = 1 then
						'//Use Images from Disk
						SetValue elem & ".ImageDefinitionType", 1
					end if
					if GetValue (ImageOpName & ".Optimization_Type") = 2 then
						'//Full Size images
						SetValue elem & ".ImageDefinitionType", 0
						SetValue elem & ".Type", 1.000
					end if 
					if GetValue (ImageOpName & ".Optimization_Type") = 3 then
						'//Quarter size of image
						SetValue elem & ".ImageDefinitionType", 0
						SetValue elem & ".Type", 3.000
					end if	
		
				end if
			next
		end if

	end if 
		
'//At the end we do a simple cleanup of the Custom Parameter
DeleteObj mySceneRoot & "." & ImageOpName
	
end Function
