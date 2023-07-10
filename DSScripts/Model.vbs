'*********************************************************************************
'
' File supervisor: Alain Dessureaux
' Date: 5/29/2000
'
' (c) Copyright 1996 - 2000 Avid Corporation
'
' @doc	INTERNAL
'
' @module  Model.vbs | VB Script
'
' @devnote	This is an VBScript file that contains scripts that are Model related
'
'*********************************************************************************

' DEVNOTE: remove comment to force all variables to be declared.
'Option Explicit

'******************************************************************************
' DEBUGGING
'******************************************************************************

' DEVNOTE: remove comment to force a break point when script loaded.
'stop

'******************************************************************************
' String Constants (used to translate)
'******************************************************************************
const IDS_DUPLICATE_MODEL_FROM_OBJECT_ERROR				= 1082
const IDS_COMIT_TO_REFERENCE_ERROR						= 1083

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
' HELPER SUBROUTINES
'******************************************************************************

'******************************************************************************
' MODEL SUBROUTINES
'******************************************************************************

'------------------------------------------------------------------------------
' NAME:		CreateModelProc
'
' INPUT:	N/A
'
' DESCRIPTION: Create and inspect a model object 
'				
'------------------------------------------------------------------------------
sub CreateModelProc( in_objs, in_name, in_parent, out_Value )
	dim rtn, obj

	set rtn = SICreateModel( in_objs, in_name, in_parent )
	set obj = rtn.value("Value")
	set out_Value = obj

	'--------------------------------------------------------------------
	' Select and inspect the model
	'--------------------------------------------------------------------
	if not TypeName(obj) = "Nothing" then
		SelectObj obj, "BRANCH"
		AutoInspect obj, ,, "General"
	end if
end sub


'******************************************************************************
' IMPORT/EXPORT SUBROUTINES
'******************************************************************************

'------------------------------------------------------------------------------
' NAME:		ImportModelProc
'
' INPUT:
'
' DESCRIPTION: Imports an export model into the scene
'------------------------------------------------------------------------------
sub ImportModelProc ( in_filename, in_parent, in_reference, out_Value, in_modelname, in_shareOptions, in_ExtCnxMappingTemplate )
	Dim obj
	If in_reference Then
		'--------------------------------------------------------------------
		' Reference the model.
		'--------------------------------------------------------------------
		set obj = CreateRefModel ( in_filename,in_modelname,,in_parent,True,False, in_ExtCnxMappingTemplate, in_shareOptions )

	Else
		'--------------------------------------------------------------------
		' Standard import of the model
		'--------------------------------------------------------------------
		SIImportModel in_filename, in_parent, obj, in_modelname, in_shareOptions
	End If

	' Reconnect to other
	if in_reference OR in_ExtCnxMappingTemplate <> "" Then
		If TypeName(obj) <> "Nothing" Then
			ReconnectModel obj, in_ExtCnxMappingTemplate, false
		End If
	end if


	set out_Value = obj

	'--------------------------------------------------------------------
	' Select and inspect the model
	'--------------------------------------------------------------------
	if not TypeName(obj) = "Nothing" then
		SelectObj obj, "BRANCH"
		AutoInspect obj, ,, "General"
	end if

end sub

'------------------------------------------------------------------------------
' NAME:		ImportRefModelsProc 
'
' INPUT:
'
' DESCRIPTION: Imports multiple ref models 
'------------------------------------------------------------------------------
function ImportRefModelsProc ( in_filenames, in_parent, in_ExtCnxMappingTemplate )
On Error Resume Next	

	Dim  sFilename
	Dim  iPosStart 
	Dim  iPosEnd
	Dim  oModelCollection
	Dim  oModel
	Dim  sCnxTemplate

	set oModelCollection = CreateObject( "XSI.Collection" )

	iPosStart = 1
	iPosEnd = Instr( in_filenames, "," )
	Do While iPosEnd  > 0
		sFilename = Mid (in_filenames, iPosStart, iPosEnd - iPosStart) 
		iPosStart = iPosEnd + 1
		iPosEnd = Instr( iPosStart, in_filenames, "," )

		set oModel = CreateRefModel ( sFilename,,,in_parent,True,False, in_ExtCnxMappingTemplate )

		oModelCollection.Add oModel
	Loop

	sFilename = Mid (in_filenames, iPosStart, len(in_filenames)) 
	set oModel = CreateRefModel ( sFilename,,,in_parent,True,False, in_ExtCnxMappingTemplate )
	oModelCollection.Add oModel


	'------------------------------------------------------
	' Finalize refmodels
	'------------------------------------------------------
	' add the models loaded to the list of extcnxtemplate 
	for each oModel in oModelCollection
		sCnxTemplate = sCnxTemplate & oModel & ","
	next	
	sCnxTemplate = sCnxTemplate & in_ExtCnxMappingTemplate
	
	for each oModel in oModelCollection
		ReconnectModel oModel, sCnxTemplate, false
	next

	set ImportRefModelsProc = oModelCollection

end function

'------------------------------------------------------------------------------
' NAME:		UpdateReferencedModelProc
'
' INPUT:	- The Model clips to update
'
' OUTPUT:	
'
' DESCRIPTION: Update a referenced model.
'------------------------------------------------------------------------------
sub UpdateReferencedModelProc( in_inputlist )

	set l_FileService = CreateObject( "XSI.XSIFileService" )
	
	if in_inputlist.count = 0 then
		LogMessage "No valid referenced model in argument"
		exit sub
	end if 

	on error resume next
	Dim oModelSources
	Dim oModelCollection

	set oModelCollection = CreateObject( "XSI.Collection" )

	' Filter out the models
	For each oItem in in_inputlist
		If TypeName( oItem ) = "Model" Then
			oModelCollection.Add oItem
		End If
	Next

	If oModelCollection.Count > 0 Then
		l_FileService.UpdateReferencedModel oModelCollection
	End If

end sub

'------------------------------------------------------------------------------
' NAME:		MakeModelLocal
'
' INPUT:	- The Models to make local
'			- True to include nested referenced models.
'			- The action to perform for conflicting materials.
'
' OUTPUT:	
'
' DESCRIPTION: Make a referenced model local, turn it to a standard model.
'------------------------------------------------------------------------------
sub MakeModelLocalProc( in_Models, in_IncludeNestedRefs, in_MaterialConflictAction )

	set l_FileService = CreateObject( "XSI.XSIFileService" )
' @AD to update with the SDK will be available.
	if in_Models.count = 0 then
		LogMessage "No valid referenced model in argument"
		exit sub
	end if 

	For each l_model in in_Models
		l_FileService.MakeModelLocal l_model, in_MaterialConflictAction
	Next

end sub

'------------------------------------------------------------------------------
' NAME:		ImportIgesProc
'
' INPUT:
'
' DESCRIPTION: Imports an iges file  into the scene
'------------------------------------------------------------------------------

sub ImportIgesProc ( in_filename, in_parent, out_Value )
	dim rtn, obj

	set rtn = SIImportIges( in_filename )
	set obj = rtn.value("Value")
	set out_Value = obj

	'--------------------------------------------------------------------
	' Select and inspect the model
	'--------------------------------------------------------------------
	if not TypeName(obj) = "Nothing" then
		SelectObj obj, "BRANCH"
		AutoInspect obj, ,, "General"
	end if
end sub

'------------------------------------------------------------------------------
' NAME:		FdotXSIOptionsDialog
'
' INPUT:	in_Import					- Import or Export flag
' RETURN:	vbOk | vbCancel	
'
' DESCRIPTION: Pop up a modal dialog to inspect the dotXSI Options
'------------------------------------------------------------------------------
function FdotXSIOptionsDialog(in_Import)
	Dim l_Title
	Dim l_PPG

	if in_Import then
		l_Title = ".xsi Import Options"
		l_PPG =  "dotXSIImportOptions"
	else
		l_Title = ".xsi Export Options"
		l_PPG =  "dotXSIExportOptions"
	end if

	On Error Resume Next
	InspectObj l_PPG,,l_Title, siModal

	if Err.Number <> 0 then
		FdotXSIOptionsDialog = vbCancel
	else
		FdotXSIOptionsDialog = vbOk
	end if
end function

'------------------------------------------------------------------------------
' NAME:		FSMDOptionsDialog
'
' RETURN:	vbOk | vbCancel	
'
' DESCRIPTION: Pop up a modal dialog to inspect the SMD Options
'
' Written by Olivier Painchaud
'------------------------------------------------------------------------------
function FSMDOptionsDialog()
	Dim l_Title
	Dim l_PPG

	l_Title = "SMD Export Options"
	l_PPG =  "SMDExportOptions"

	On Error Resume Next
	InspectObj l_PPG,,l_Title, siModal

	if Err.Number <> 0 then
		FSMDOptionsDialog = vbCancel
	else
		FSMDOptionsDialog = vbOk
	end if
end function

'------------------------------------------------------------------------------
' NAME:		ImportDotXSIProc
'
' INPUT:	- The .xsi file to import
'			- The parent under which to import it
'
' OUTPUT:	N/A
'
' DESCRIPTION: Imports a .xsi file into the scene
'
' Written by Nancy Nadeau
'------------------------------------------------------------------------------
sub ImportDotXSIProc( in_Filename, in_Parent )

	' Have the user set the desired options first...

	if application.license = "Avid 3D" then
		'
		' Do not pop up the options in Avid 3D
		'
		SIImportDotXSIFile in_Filename, in_Parent
	else
		Set oFS = CreateObject("Scripting.FileSystemObject") 

		if oFS.FileExists(in_Filename) = True then 
			isPrehistoricDotXSI = True
			
			lowerfilename = LCase(in_Filename)
			if (InStr(lowerfilename, ".xml") > 0) or (InStr(lowerfilename, ".dae") > 0) then
				isPrehistoricDotXSI = False
			else
				Set oTextStream = oFS.OpenTextFile(in_Filename,1) 
		       
				sFileLine = oTextStream.ReadLine 

				sFileLine = Left(sFileLine , 8)
				sFileLine = Right(sFileLine , 4)
			
				oTextStream.Close 

				Set oTextStream = nothing 			
				
				if sFileLine >= 500 then 
					isPrehistoricDotXSI = False
				end if
			end if
			
			if isPrehistoricDotXSI = True then
				if FdotXSIOptionsDialog(1) = vbOk then
					'
					' Normal case
					'
					SIImportDotXSIFile in_Filename, in_Parent
				end if			
			else
				Dim l_Title
				Dim l_PPG

				l_Title = "Crosswalk Import"

				set l_Root = ActiveProject.ActiveScene.Root
				set l_Options = l_Root.Properties.Item("ImportCrosswalkOptions")
				
				if TypeName( l_Options ) <> "Nothing" then
					l_PPG = l_Options.Name
				else
					l_PPG = CreateImportCrosswalkOptions
				end if
				
				SetValue l_PPG & ".Filename", in_Filename
					
				'InspectObj l_PPG,,l_Title,siLockAndForceNew,false
				ImportCrosswalk  l_PPG, in_Parent
			end if
		else
			if FdotXSIOptionsDialog(1) = vbOk then
				'
				' Normal case
				'
				SIImportDotXSIFile in_Filename, in_Parent
			end if
		end if
		   
		Set oFS = nothing 
		
	end if

end sub


'------------------------------------------------------------------------------
' NAME:		ExportDotXSIProc
'
' INPUT:	- The Model to start from...
'			- The .xsi file to export to
'
' OUTPUT:	N/A
'
' DESCRIPTION: Exports the scene to a .xsi file
'
' Written by Nancy Nadeau
'------------------------------------------------------------------------------
sub ExportDotXSIProc( in_SelectionList, in_Filename )

	' Have the user set the desired options first...
	If FdotXSIOptionsDialog(0) = vbOk Then

		Dim modellist

		set modellist = in_SelectionList

		'If nothing is selected, then export from the Scene_Root!
		if modellist = "" then
			Dim l_Collection
			set l_Collection = CreateObject( "XSI.Collection" )
			l_Collection.Add activeproject.activescene.root
			set modellist = l_Collection
		end if

		SIExportDotXSIFile modellist, in_Filename
	End If

end sub

'------------------------------------------------------------------------------
' NAME:		ExportSMDProc
'
' INPUT:	- The Model to start from...
'			- The .smd file to export to
'
' OUTPUT:	N/A
'
' DESCRIPTION: Exports the scene to a .smd file
'
' Written by Olivier Painchaud
'------------------------------------------------------------------------------
sub ExportSMDProc( in_SelectionList, in_Filename )

	' Have the user set the desired options first...
	If FSMDOptionsDialog() = vbOk Then

		Dim modellist

		set modellist = in_SelectionList

		'If nothing is selected, then export from the Scene_Root!
		if modellist = "" then
			Dim l_Collection
			set l_Collection = CreateObject( "XSI.Collection" )
			l_Collection.Add activeproject.activescene.root
			set modellist = l_Collection
		end if

		SIExportSMDFile modellist, in_Filename
	End If

end sub

'------------------------------------------------------------------------------
' NAME:		SetResolutionOfAllRefModels
'
' INPUT:	- The resolution to set
'
' OUTPUT:	N/A
'
' DESCRIPTION: Set the resolution of all model sources. 
'
' Written by Alain Dessureaux
'------------------------------------------------------------------------------
sub SetResolutionOfAllRefModelsProc( in_inputlist, in_Resolution )
	on error resume next
	Dim oModelCollection
	Dim oModels

	set oModelCollection = CreateObject( "XSI.Collection" )

	If in_inputlist.count = 0 then
		'--------------------------------------------------
		' Change the resolution for all ref model sources
		'--------------------------------------------------

		'Find all ModelSource
		set oModels = FindObjects (, "{0496EAB0-0ECF-11d1-ABF1-00A02485CECB}")
		for each oModel in oModels
			if oModel.parameters("referenced_model").value = True Then
				oModelCollection.Add oModel
			End if
		Next
	else
		oModelCollection.AddItems in_inputlist
	End if 

	If oModelCollection.Count > 0 Then
		SISetResolutionOfRefModels oModelCollection, in_Resolution
		
		for each lModel in oModelCollection
			lCurrentLayer = GetCurrentAnimationLayer(lModel)
			lLayerCount = GetNumberOfAnimationLayers(lModel)
			
			If lCurrentLayer >= lLayerCount Then
				SetCurrentAnimationLayer lModel, 0
			End if
		Next
	End If

end sub

'------------------------------------------------------------------------------
' NAME:		DeleteModelFromObjectProc
'
' INPUT:	- Selection
'
' OUTPUT:	N/A
'
' DESCRIPTION: Delete Models associated with selected objects 
'
' Written by Rejean Gagne
'------------------------------------------------------------------------------
'------------------------------------------------------------------
' this function makes sure we only delete models in xxx, whatever
' is selected in the scene. Reason for this is we do not want parts
' of rigs or objects to be staying behind.
'------------------------------------------------------------------
sub DeleteModelFromObjectProc( in_sel )

	'logmessage " DeleteModelFromObjectProc " & in_sel.count

	set oMdlList = CreateObject( "XSI.Collection" )
	oMdlList.Unique = true
	set oNodeList = CreateObject( "XSI.Collection" )  ' for other nodes such as psets, clips...
	oNodeList.Unique = true
	set oCompoList = CreateObject( "XSI.Collection" )
	oCompoList.Unique = true

	polyselected = false
	edgepntselected = false

	'count if there are any component selected
	for each itm in in_sel
		'logmessage " DeleteModelFromObjectProc itm " & itm
		if InStr ( 1, itm.type, "SubComponent" ) > 0  then
			if InStr ( 1, itm.type, "poly" ) > 0  then
				polyselected = true
			else
				edgepntselected = true
			end if
			oCompoList.Add itm
		end if
	next

	' Avid 3D:
	' If we have poly sub components selected, then apply the delete component op
	' For edges and points, we will do a dissolve instead
	'
	if polyselected then
		ApplyTopoOp "DeleteComponent", oCompoList.GetAsText
		exit sub
	end if
	if edgepntselected then
		ApplyTopoOp "DissolveComponent", oCompoList.GetAsText
		exit sub
	end if

	' first run through selection and collect only the models (once)

	for each itm in in_sel
		if InStr( 1, itm.Families, si3DObjectFamily ) > 0 then
			if NOT typename( itm ) = "Model" then
				set oModel = itm.Model
			else
				set oModel = itm
			end if
			if oModel.Parent = oModel then
				' this one is parented under the scene root
				oMdlList.Add itm
			else
				oMdlList.Add oModel
			end if
		else
			logmessage "Invalid selection, Please select polygons or an object"
			exit sub
		end if
	next

	if oMdlList.count > 0 then
		' We need to delete the models in branch, so make a list with the B: prefix
		str = ""
		for each oMdl in oMdlList
			'logmessage "model " & oMdl.fullname
			if str <> "" then
				str = str & ","
			end if
			str = str & "B:" & oMdl.fullname
		next

		'logmessage " about to delete " & str
		if str <> "" then
			DeleteObj str
		end if
	end if
	
	if oNodeList.count > 0 then
		on error resume next
		DeleteObj oNodeList
		if Err.Number <> 0 Then
			logmessage "Unable to delete " & oNodeList
		end if
	end if


end sub

'------------------------------------------------------------------------------
' NAME:		AllInSameModel
'
' INPUT:	- in_mat			Material to possibly duplicate
'			- in_model			Model to process
'			
' OUTPUT:	N/A
'
' DESCRIPTION:  Checks whether all affected by the material are in the same models
'
' Written by Robert Belanger
'------------------------------------------------------------------------------
function AllInSameModel( in_mat, in_model, in_sel )
	result = True
	if typename( in_sel) = "Empty" then
		for each oOwner in in_mat.Usedby
			if oOwner.Model <> in_model then
				result = False
			end if
		next
	else
		logmessage typename( in_sel )
		' case for in selection
		for each oOwner in in_mat.Usedby
			if typename ( oOwner ) = "Cluster" then
				set oOwner = oOwner.Parent.Parent.Parent
			end if
			if typename ( in_sel.item( oOwner.fullname ) ) = "Nothing" then
				result = False
			end if
		next
	end if
	AllInSameModel = result
end function

'------------------------------------------------------------------------------
' NAME:		ProcessOneMaterial
'
' INPUT:	- in_child			Children to work with
'			- in_mat			Material to possibly duplicate
'			- in_model			Model to process
'			- oMatColl			Collection of material that will be returned upon
'								execution of the ProcessModel, The collection will
'								contain all materials that were "made local".
' OUTPUT:	N/A
'
' DESCRIPTION:  Makes local the material if not belong to the model in question
'				Also adds it to the collection of materials created.
'
' Written by Robert Belanger
'------------------------------------------------------------------------------
sub ProcessOneMaterial( in_child, in_mat, in_model, in_sel, in_Dict, oMatColl )
	'
	'
	Dim oMat
	fname = in_mat.Library.Fullname & "." & in_mat.name
	'
	' If a Dictionary exists, then check if the material has already been duplicated
	' if so, then just assign it. Otherwise, keep going and duplicate if needed
	' the material
	'
	if typename( in_Dict ) = "Dictionary" Then
	    if in_Dict.exists( fname ) then
			in_mat.Parent.SetMaterial in_Dict.item( fname )
		end if
	end if
	if typename( in_child ) = "Model" then
		set oMat = simakelocal ( in_mat, siBranchPropagation )
		oMat(0).Name = in_mat.name & "_copy"
		oMatColl.Add oMat(0)
		if typename( in_Dict ) = "Dictionary" then
			if not in_Dict.exists( fname ) then
				in_Dict.Add fname, oMat(0)
			end if
		end if
	else
		if not AllInSameModel( in_mat, in_model, in_sel  ) then
			if in_mat.Branch then
				set oMat = simakelocal ( in_mat, siBranchPropagation )
				oMat(0).Name = in_mat.name & "_copy"
				oMatColl.Add oMat(0)
				if typename( in_Dict ) = "Dictionary" then
					if not in_Dict.exists( fname ) then
						in_Dict.Add fname, oMat(0)
					end if
				end if
			else
				set oMat = simakelocal ( in_mat )
				oMat(0).Name = in_mat.name & "_copy"
				oMatColl.Add oMat(0)
				if typename( in_Dict ) = "Dictionary" then
					if not in_Dict.exists( fname ) then
						in_Dict.Add fname, oMat(0)
					end if
				end if
			end if
		end if
	end if
end sub

'------------------------------------------------------------------------------
' NAME:		ProcessOneChild
'
' INPUT:	- in_child			Children to work with
'			- in_model			Model to process
'			- oMatColl			Collection of material that will be returned upon
'								execution of the ProcessModel, The collection will
'								contain all materials that were "made local".
' OUTPUT:	N/A
'
' DESCRIPTION: Processes all material assigned to given child, this includes
'				global and local materials.
'
' Written by Robert Belanger
'------------------------------------------------------------------------------
sub ProcessOneChild( in_child, in_model, in_sel, in_Dict, oMatColl )
	'
	' Check its Material
	'
	for each oProp in in_child.LocalProperties
		if oProp.type = "material" then
			ProcessOneMaterial in_child, in_child.Material, in_model, in_sel, in_Dict, oMatColl
		end if
	next
	'
	' Check its clusters Materials
	'
	set oGeometry = in_child.ActivePrimitive.Geometry
	if typename( oGeometry ) <> "Nothing" then
		for each oCluster in in_child.ActivePrimitive.Geometry.Clusters
			for each oProp in oCluster.LocalProperties
				if oProp.type = "material" then
					ProcessOneMaterial in_child, oCluster.Material, in_model, in_sel, in_Dict, oMatColl
				end if
			next
		next
	end if
	'
	' Recurse down to all children
	'
 	for each oChild in in_child.children
		ProcessOneChild oChild, in_model, in_sel, in_Dict, oMatColl 
	next
end sub

'------------------------------------------------------------------------------
' NAME:		ProcessGroups
'
' INPUT:	- in_model			Model to process
'			- oMatColl			Collection of material that will be returned upon
'								execution of the ProcessModel, The collection will
'								contain all materials that were "made local".
' OUTPUT:	N/A
'
' DESCRIPTION: Treats all materials in groups in the given model and makes sure they
'				all belong in the same model.
'
' Written by Robert Belanger
'------------------------------------------------------------------------------
sub ProcessGroups( in_model, oMatColl, in_sel )
	for each oGroup in in_model.Groups
		for each oProp in oGroup.LocalProperties
			if oProp.type = "material" then
				if not AllInSameModel( oProp, in_model, in_sel ) then
					set oMat = simakelocal ( oGroup.Material, siBranchPropagation )
					if typename( oMatColl ) = "Dictionary" then
						oMatColl.Add oMat(0)
					end if
				end if
			end if
		next
	next
end sub

'------------------------------------------------------------------------------
' NAME:		ProcessModel
'
' INPUT:	- in_obj			Model to process
'			- oMatColl			Collection of material that will be returned upon
'								execution of the ProcessModel, The collection will
'								contain all materials that were "made local".
' OUTPUT:	N/A
'
' DESCRIPTION: Treats all materials in the given model and makes sure they
'				all belong in the same model.
'
' Written by Robert Belanger
'------------------------------------------------------------------------------
sub ProcessModel( in_obj, in_sel, oMatColl )
	if (typename( in_obj ) = "Model") then
		ProcessGroups in_obj, in_sel, oMatColl
		ProcessOneChild in_obj, in_obj, in_sel,, oMatColl 
	elseif (in_obj.Model = "Scene_Root") then
		ProcessOneChild in_obj, in_obj, in_sel,, oMatColl
	else
		ProcessGroups in_obj.Model, in_sel, oMatColl
		ProcessOneChild in_obj.Model, in_obj.Model, in_sel,, oMatColl
	end if
end sub

'------------------------------------------------------------------------------
' NAME:		ReplaceDataSource
'
' INPUT:	- Parameter			Parameter to replace.
'			- Dictionary		Used to maintain duplicates of clips to minimize 
'								which ones were already done
'
' OUTPUT:	N/A
'
' DESCRIPTION: Replaces a source with local one. we have to add the image source
'				to find it, and then add the image clip for the new source.
'
' Written by Robert Belanger
'------------------------------------------------------------------------------

sub ReplaceDataSource( oCP, ClipDict )
	set oSrc = oCP.Source
	fname = oSrc.Parameters("SourceFileName").value
	SIAddImageSource fname, , oNewSrc
	dim oNewClip
	if ClipDict.exists( fname ) then
		set oNewClip = GetValue( ClipDict.item( fname ) )
	else
		set oNewClip = AddImageClip( oNewSrc, oSrc.Name )
		ClipDict.add fname, oNewClip
	end if
	oCP.Connect oNewClip
end sub

'------------------------------------------------------------------------------
' NAME:		DuplicateMaterialOrShaderClips
'
' INPUT:	- Shader/Material	Which object to "makelocal" its clips
'			- Dictionary		Used to maintain duplicates of clips to minimize 
'								which ones were already done
'
' OUTPUT:	N/A
'
' DESCRIPTION: Duplicates all clips by a gven shader or material
'
' Written by Robert Belanger
'------------------------------------------------------------------------------

sub DuplicateMaterialOrShaderClips( oShader, ClipDict )
	for each oCP in oShader.Parameters
		set oSrc = oCP.Source
		if typename( oSrc ) <> "Nothing" then
			if oSrc.type = "ImageClip" then
				ReplaceDataSource oCP, ClipDict
			end if
		end if
	next
	for each oSubShader in oShader.Shaders
		DuplicateMaterialOrShaderClips oSubShader, ClipDict
	next
end sub

'------------------------------------------------------------------------------
' NAME:		DuplicateAllMaterialClips
'
' INPUT:	- Material Collection
'
' OUTPUT:	N/A
'
' DESCRIPTION: Duplicates all clips used by each material 
'
' Written by Robert Belanger
'------------------------------------------------------------------------------
sub DuplicateAllMaterialClips( oMatColl )
	set ClipDict = CreateObject("Scripting.Dictionary")
	for each oMat in oMatColl
		DuplicateMaterialOrShaderClips oMat, ClipDict
	next
end sub

'------------------------------------------------------------------------------
' NAME:		DuplicateModelFromObjectProc
'
' INPUT:	- Selection
'
' OUTPUT:	N/A
'
' DESCRIPTION: Duplicates Models associated with selected objects. This is a private
'			    command, this is why it uses very specific options.
'
' Written by Rejean Gagne
'------------------------------------------------------------------------------
sub DuplicateModelFromObjectProc( in_sel )

	set oMdlList = CreateObject( "XSI.Collection" )
	oMdlList.Unique = true

	composelected = false

	'count if there are any polygons selected
	polyselected = false
	for each itm in in_sel
		if InStr ( 1, itm.type, "SubComponent" ) > 0  then
			composelected = true
		end if
	next

	'
	' Do not allow component duplication
	'
	if composelected then
		MsgBox XSIUtils.Translate( IDS_DUPLICATE_MODEL_FROM_OBJECT_ERROR, "XSISCRIPTS" )
		exit sub
	end if

	for each itm in in_sel
		if InStr( 1, itm.Families, si3DObjectFamily  ) > 0 then
			if NOT typename( itm ) = "Model" then
				set oModel = itm.Model
			else
				set oModel = itm
			end if
			if oModel.Parent = oModel then
				' this one is parented under the scene root
				oMdlList.Add itm
			else
				oMdlList.Add oModel
			end if
		else
			logmessage "invalid selection, please select an object"
			exit sub
		end if
	next

	if oMdlList.count > 0 then
		str = ""
		for each oMdl in oMdlList
			'logmessage "model " & oMdl.fullname
			if str <> "" then
				str = str & ","
			end if
			str = str & "B:" & oMdl.fullname
		next

		'logmessage " about to duplicate " & str
		if str <> "" then
			set oDupl = Duplicate ( str, , , , , , , , , , , , , , , , , , , , 1 )

			for each oDup in oDupl
				set oMaterialCollection = CreateObject( "XSI.Collection" )
				dim oNothing
				ProcessModel oDup, oNothing, oMaterialCollection
				'
				' Process Clips in Materials now
				'
				DuplicateAllMaterialClips oMaterialCollection
			next
		end if
	end if

end sub

'------------------------------------------------------------------------------
' NAME:		MakeLocalMaterialsForHierarchyProc
'
' INPUT:	- Selection
'
' OUTPUT:	N/A
'
' DESCRIPTION: Makes all material reference local to this one selection. If you
'		have a shared material outside the hierarchy, it will be made local.
' Written by Robert Belanger
'------------------------------------------------------------------------------
sub MakeLocalMaterialsForHierarchyProc( in_sel )
	DeselectAll
	SelectObj in_sel
	SelectChildNodes
	for each oDup in selection
		set oMaterialCollection = CreateObject( "XSI.Collection" )
		set oMatDict = CreateObject("Scripting.Dictionary")
		ProcessOneChild oDup, in_obj, selection, oMatDict, oMaterialCollection 
		'
		' Process Clips in Materials now
		'
		DuplicateAllMaterialClips oMaterialCollection
	next
end sub


function CreateRefModelProc(in_filename, in_modelname, in_resolutionname, in_parent, in_activate, in_createfile, in_cnxmapping, in_shareOptions)
	Dim oModel
	Dim bIsValidFileName
	Dim fso
	bIsValidFileName = true
	
	if in_filename = "" then
		bIsValidFileName = false
	end if
	
	if bIsValidFileName then
		set fso = CreateObject("Scripting.FileSystemObject")
		if NOT fso.FileExists(in_filename) then
			bIsValidFileName = false
		end if		
	end if
		
	if bIsValidFileName then
		set oModel = SICreateRefModel (in_filename, in_modelname, in_resolutionname, in_parent, in_activate, in_createfile, in_cnxmapping, in_shareOptions)
	else
		set oModel = CreateEmptyRefModel (in_filename, in_modelname, in_resolutionname, in_parent, in_activate, in_cnxmapping, in_shareOptions)
	end if
	
	if not TypeName(oModel) = "Nothing" then 
		SelectObj oModel, "BRANCH"
		AutoInspect oModel, ,, "General"
	end if
	
	set CreateRefModelProc = oModel
	
end function

sub CommitToReferenceProc( in_models, in_includeNestedRef, in_filename, in_confirm)
	if in_models.count = 0 Then
		exit sub
	End if
	
	If (in_filename = "" AND in_confirm = true) Then
		Dim msgboxrtn 
		msgboxrtn = SIMsgBox (XSIUtils.Translate( IDS_COMIT_TO_REFERENCE_ERROR, "XSISCRIPTS" ) , vbYesNo + vbQuestion + vbDefaultButton2, XSIUtils.Translate( "Warning", "XSISCRIPTS" ), vbOK)
		If ( not msgboxrtn = vbYes ) Then
			exit sub
		End if
	End if
	
	For each oItem in in_models
		If TypeName( oItem ) = "Model" Then
			if in_models.Count = 1 Then
				oItem.CommitToReference in_filename, in_includeNestedRef 
			else
				oItem.CommitToReference "", in_includeNestedRef 
			end if
		End If
	Next

end sub

'------------------------------------------------------------------------------
' NAME:		RemoveUnusedDeltas
'
' INPUT:	N/A
' OUTPUT:	N/A
'
' DESCRIPTION: Searches for all modelDeltas, and if they are targeting
'				a model which doesn't exist, deletes them.
'
' Written by Helge Mathee
'------------------------------------------------------------------------------
sub RemoveUnusedDeltas( )
	set allDeltas = FindObjects("","{6D906778-A713-40E3-A5FB-0F5CA3361370}")
	
	for each delta in allDeltas
		targetModel = GetValue(delta+".target")
		on error resume next
			set targetModel = Dictionary.GetObject(targetModel)
		on error goto 0
		if NOT isObject(targetModel) then
			on error resume next
				DeleteObj delta
			on error goto 0
		end if
	next
end sub

'------------------------------------------------------------------------------
' NAME:		ToggleReferencedModel
'
' INPUT:	- Selection
' OUTPUT:	N/A
'
' DESCRIPTION: Toggles a model between local model and referenced model
'
' Written by Helge Mathee
'------------------------------------------------------------------------------
sub ToggleReferencedModelProc(in_sel,in_bShowWarnings)

	dim model
	
	' loop through all of the input objects
	for each in_selItem in in_sel
		' if the object is not a model
		' use the object's model
		if in_selItem.type <> "#model" then
			on error resume next
				set model = in_selItem.model
			on error goto 0
			if err then
				logmessage "Object " & in_selItem & " is not a 3D object",siError
				exit for
			end if
		else
		' if it is a model, try to find the 
		' instance master, and if not an instance
		' just use the model
			on error resume next
				instanceMaster = GetMaster(in_selItem).name
			on error goto 0
			if instanceMaster <> "" then
				set model = in_selItem.model
			else
				set model = in_selItem
			end if
		end if
		
		' only allow toggle if the model is not the sceneroot
		if model.fullname <> ActiveSceneRoot.fullname then
			
			' if the model is a referenced model
			' just make it local, and do so for all models above first
			if model.referenced_model.value then
				set secondModel = model
				do while secondModel.fullname <> ActiveSceneRoot.fullname
					set secondModel = secondModel.model
					if secondModel.referenced_model.value = true then
						'ToggleReferencedModel secondModel,in_bShowWarnings
						exit do
					end if
				loop
				MakeModelLocal model
			
			else ' if the model is a local model....
			
				' get the active resolution
				active_res = GetValue(model.fullname & ".active_resolution")
				
				' if it set to 0, it never was a referenced model before
				if active_res > 0 then
					
					' find the correct resolution
					set resolutions = Dictionary.GetObject(model & ".resolutions").NestedObjects
					res_file = GetValue(resolutions(active_res) & ".file")
					
					' loop through all external files and get the full / resolved path
					for each file in model.externalfiles
						if file.path = XSIUtils.ResolvePath(res_file) OR file.path = res_file then
							' have the user confirm
							msgstring = XSIUtils.Translate( 10010, "XSI_3DOBJECT2" )
							if NOT in_bShowWarnings then
								buttonPressed = siMsgYes
							else
								buttonPressed =	XSIUIToolkit.Msgbox( msgstring, siMsgYesNo, "Toggling " & model.name )
							end if
							if buttonPressed = siMsgYes then
								ConvertToRefModel  model, file.resolvedpath
								
								set secondModel = Dictionary.GetObject(model.name).model
								do while secondModel.fullname <> ActiveSceneRoot.fullname
									if secondModel.referenced_model.value = false then
										active_res = 0
										on error resume next
											active_res =  GetValue(secondModel & ".active_resolution")
										on error goto 0
										if active_res >0 then
											' make the models above a ref model as well...
											' ToggleReferencedModel secondModel,in_bShowWarnings
											exit do
										end if
									end if
									set secondModel = secondModel.model
								loop
							end if
							exit for
						end if
					next
				else ' if there was no active resolution, just called converttorefmodel normally
					logmessage "You cannot toggle this model. It has not been a referenced model before.",siError
				end if
			end if
		else
			logmessage "Cannot toggle the active SceneRoot!",siWarning
		end if
	next
end sub

'------------------------------------------------------------------------------
' NAME:		CreateModelAndConvertToRef
'
' INPUT:	- Selection
' OUTPUT:	N/A
'
' DESCRIPTION: Creates a model and Converts the model to a reference
'
' Written by Helge Mathee
'------------------------------------------------------------------------------
sub CreateModelAndConvertToRefProc(in_sel,in_filename)
	CreateModel in_sel	
	ConvertToRefModel selection(0), in_filename
end sub

'------------------------------------------------------------------------------
' NAME:		AddDelta
'
' INPUT:	- Selection
' OUTPUT:	N/A
'
' DESCRIPTION: Creates a new delta on the given model
'
' Written by Helge Mathee
'------------------------------------------------------------------------------
function AddDeltaProc(in_sel)
	set delta = ImportDelta("non.existent.delta",in_sel,false,false)
	if delta <> VBNull then
		delta.storage = 0
		delta.status = 2
		delta.filename = ""
		set AddDeltaProc = delta
	end if
end function

'******************************************************************************
' END OF FILE
'******************************************************************************