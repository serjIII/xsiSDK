'******************************************************************************
'
' File supervisor : Martin Belanger
' Date : June 2002
' (c) Copyright 2002 Softimage
'
' $Archive:  $
' $Revision:  $  $Date:  $
' Checkin by: $Author:  $
'
' @doc
' @module	importexport.vbs | VB Script 
'
'******************************************************************************

'******************************************************************************
' String Constants (used to translate)
'******************************************************************************
const IDS_WAVEFRONT_OBJ_EXPORT_TITLE				= 1078
const IDS_WAVEFRONT_OBJ_IMPORT_TITLE				= 1079
const IDS_BIOVISION_IMPORT_TITLE					= 1080
const IDS_ACCLAIM_IMPORT_TITLE						= 1081

'--------'--------'--------'--------'--------'--------'--------'--------'
function CreateWavefrontExportOptionsPPG
'--------'--------'--------'--------'--------'--------'--------'--------'
	
	dim oPSet,oLayout,oItem
	
	set oPSet = ActiveSceneRoot.AddProperty( "CustomProperty",,"Wavefront_Export" )
	
	'
	'Create the parameters
	'	
	call oPSet.AddParameter3( "Filename", siString )
	call oPSet.AddParameter3( "FilePerObject", siInt4, 0, 0, 1, false)
	call oPSet.AddParameter3( "FilePerFrame", siBool, 0, , , false)
	call oPSet.AddParameter3( "Polymsh", siBool, 1, , , false)
	set oParam = oPSet.AddParameter3( "Surfmsh", siBool, 0, , , false)
	oParam.Enable(false)
	set oParam = oPSet.AddParameter3( "Crvlist", siBool, 0, , , false)
	oParam.Enable(false)
	set oParam = oPSet.AddParameter3( "UserNormal", siBool, 0, , , false)
	set oParam = oPSet.AddParameter3( "Cloud", siBool, 0, , , false)	
	set oParam = oPSet.AddParameter3( "Tesselation", siBool, 0, , , false)
	oParam.Enable(false)
	call oPSet.AddParameter3( "Material", siBool, 1, , , false)
	call oPSet.AddParameter3( "uv", siBool, 1, , , false)
	set oParam =  oPSet.AddParameter3( "StartFrame", siInt4, 0, -100000,100000, false)
	oParam.Enable(false)
	set oParam = oPSet.AddParameter3( "EndFrame", siInt4, 100, -100000,100000, false)
	oParam.Enable(false)
	set oParam =  oPSet.AddParameter3( "StepFrame", siInt4, 1, -100000,100000, false)
	oParam.Enable(false)
	call oPSet.AddParameter3( "CoordinateSystem", siInt4, 0, 0, 1, false)

	' Now define the Layout
	'
	
	set oLayout = oPSet.PPGLayout
	
	oLayout.Logic = "sub FilePerFrame_OnChanged" & vbCrLf & _
	"PPG.StartFrame.Enable(FilePerFrame.Value)" & vbCrLf & _
	"PPG.EndFrame.Enable(FilePerFrame.Value)" & vbCrLf & _
	"PPG.StepFrame.Enable(FilePerFrame.Value)" & vbCrLf & _
	"end sub"

	
	oLayout.AddTab "File Output"
	
	oLayout.AddGroup "File"
		set oItem = oLayout.AddItem( "Filename","",siControlFilePath ) 
		call oItem.SetAttribute( siUIFileFilter, _
							"Wavefront OBJ Files (*.obj)|*.obj|" & _
							"All Files (*.*)|*.*||" ) 
		call oItem.SetAttribute( siUIOpenFile, false ) 
		call oItem.SetAttribute( siUIInitialDir, "project" ) 
		call oItem.SetAttribute( siUIFileMustExist, false )
		oLayout.AddEnumControl "FilePerObject", Array("Merge all objects into one file" , 0, "Separate files per object", 1), "Hierarchy", siControlRadio
	oLayout.EndGroup
	
	oLayout.AddGroup "Sequence"
		oLayout.AddItem "FilePerFrame", "Separate Files Per Frame"
		set oItem = oLayout.AddItem ("StartFrame", "Start",siControlEdit)
		call oItem.SetAttribute(siUIContinue,true)
		set oItem = oLayout.AddItem ("EndFrame", "End",siControlEdit)
		call oItem.SetAttribute(siUIContinue,true)
		oLayout.AddItem "StepFrame", "Step",siControlEdit
	oLayout.EndGroup

	oLayout.AddTab "Geometry Options"
	
	oLayout.AddGroup "Hierarchy"
		set oItem = oLayout.AddEnumControl( "hrc", _
			Array( "No Hierarchy", 0, _
				"Null as Parent", 1, _
				"Model as Parent",2 ), "", siControlRadio )
		call oItem.SetAttribute( siUINoLabel, true )
		
	oLayout.EndGroup

	oLayout.AddGroup "Geometry"
		set oItem = oLayout.AddItem ("Polymsh", "Polygon Meshes")
		call oItem.SetAttribute(siUIContinue,true)
		oLayout.AddItem "Surfmsh", "Nurbs Meshes"
		set oItem = oLayout.AddItem ("UserNormal", 	"User Normals")
		call oItem.SetAttribute(siUIContinue,true)
		oLayout.AddItem "Crvlist", "Curve Lists"

	oLayout.EndGroup

	
	aComboItems = Array( "Global Coordinates", 0, _
						 "Local Coordinates", 1)

	oLayout.AddGroup "Triangulation"
		oLayout.AddItem "Tesselation", "Export Render Tesselation"
		oLayout.AddEnumControl "CoordinateSystem", aComboItems, "Vertices", siControlCombo
	oLayout.EndGroup
	

oLayout.AddGroup "Material"
		oLayout.AddItem "Material", "Export Material"
		oLayout.AddItem "uv", "Export Current UV Set"
	oLayout.EndGroup
	
    oLayout.SetAttribute siUIHelpFile, "<FactoryPath>/Doc/<DocLangPref>/xsidocs.chm::/menubar14.htm"
		
	set CreateWavefrontExportOptionsPPG = oPSet
	
end function


'--------'--------'--------'--------'--------'--------'--------'--------'
sub WavefrontExport(ByRef file,ByRef multi, ByRef anim, ByRef startF, ByRef endF, ByRef stepF, ByRef usePoly, ByRef useSrf, ByRef useCrv, ByRef useCloud, ByRef coordSys, ByRef Tess, ByRef Material, ByRef UV, ByRef UserNormal)
'--------'--------'--------'--------'--------'--------'--------'--------'
	Dim oRoot,oDialog, oParams, oParam
	
	'Load the Export Dialog
	set oRoot = ActiveProject.ActiveScene.Root
	set oDialog = CreateWavefrontExportOptionsPPG
	
	'Set the Sequence Options to the Scene
	oDialog.parameters("StartFrame").value = GetValue("PlayControl.In")
	oDialog.parameters("EndFrame").value = GetValue("PlayControl.Out")
	oDialog.parameters("StepFrame").value = GetValue("PlayControl.Step")

	'Set the default filename
	if file <> "" then
		oDialog.parameters("Filename").value = file
	else
		oDialog.parameters("Filename").value = ""
	end if

	'Display the dialog box
	On Error Resume Next
	InspectObj oDialog,,XSIUtils.Translate( IDS_WAVEFRONT_OBJ_EXPORT_TITLE, "XSISCRIPTS" ),siModal
	
	If Err.Number <> 0 then
		DeleteObj oDialog
		exit sub
	else
		On Error Goto 0
		set oParams = oDialog.parameters

		if oParams("Filename").value = "" then
			'Open the filebrowser since no entry
			oParams("Filename").value = OpenBrowser(true)
			if oParams("Filename").value = "" then				
				DeleteObj oDialog
				exit sub
			end if	
		end if

		WavefrontExportProc oParams("Filename").value, _
								oParams("FilePerObject").value, _
								oParams("FilePerFrame").value, _
								oParams("StartFrame").value, _
								oParams("EndFrame").value, _
								oParams("StepFrame").value, _
								oParams("Polymsh").value, _
								oParams("Surfmsh").value, _
								oParams("Crvlist").value, _
								oParams("Cloud").value, _
								oParams("CoordinateSystem").value, _
								oParams("Tesselation").value, _
								oParams("Material").value, _
								oParams("uv").value, _
								oParams("UserNormal").value

		file = oDialog.parameters("Filename").value
		multi = oDialog.parameters("FilePerObject").value
		anim = oDialog.parameters("FilePerFrame").value
		startF = oDialog.parameters("StartFrame").value
		endF = oDialog.parameters("EndFrame").value
		stepF = oDialog.parameters("StepFrame").value
		usePoly = oDialog.parameters("Polymsh").value
		useSrf = oDialog.parameters("Surfmsh").value
		useCrv = oDialog.parameters("Crvlist").value
		useCloud = oDialog.parameters("Cloud").value
		CoordSys = oDialog.parameters("CoordinateSystem").value
		Tess = oDialog.parameters("Tesselation").value
		Material = oDialog.parameters("Material").value
		UV = oDialog.parameters("uv").value
		UserNormal = oDialog.parameters("UserNormal").value

		DeleteObj oDialog
	end if	
end sub

'--------'--------'--------'--------'--------'--------'--------'--------'
function WavefrontExportProc(ByRef filename, ByRef multi, ByRef anim, ByRef startF, ByRef endF, ByRef stepF, ByRef usePoly, ByRef useSrf, ByRef useCrv, ByRef useCloud, ByRef coord, ByRef useTri, ByRef useMat, ByRef useUV, ByRef useUserNormal )
'--------'--------'--------'--------'--------'--------'--------'--------'
	Dim oParam, oSel, oItem, str, i, oColl


	'Expand the selection (select all if empty)
	set oSel = SelectChildNodes(,FALSE)
	if oSel.count < 1 then
		set oSel = SelectChildNodes("*",FALSE)
	end if
	set oSel = SIFilter(oSel,"geometry")
	
	
	'Collection
	set oColl = CreateObject("XSI.Collection")
	
	'My own filter because SIFilter doesn't support Particles
	for each oItem in oSel
		select case oItem.type
			case "polymsh"
				if usePoly then
					oColl.Add oItem
				end if
			case "surfmsh"
				if useSrf then
					oColl.Add oItem
				end if
			case "crvlist"
				if useCrv then
					oColl.Add oItem
				end if
			case "cloud"
				if useCloud then
					oColl.Add oItem
				end if
		end select
	next
	
	if oColl.count < 1 then
		logmessage "Nothing to export...", siError
		exit function
	else
		logmessage oColl
	end if
	
	set oSel = CreateObject("XSI.Collection")
	oSel.AddItems oColl

	'Strip the ".obj" extension from the filename
	str = filename
	i = InStrRev(str, ".obj")
	if i <> 0 then 
		str = Left(str, i -1)
	end if



	'Sequence Option
	if anim = True then
		for i = startF to endF step stepF
			SetValue "PlayControl.Current", i
			if multi = 1 then
				for each oItem in oSel
					oColl.RemoveAll
					oColl.Add oItem
					'File per Frame + File per Objects
					SIObjExport oColl, str &"_"& oItem.Fullname &"."& i, coord,useTri,useMat,useUV, useUserNormal 
				next
			else
				'File per Frame + All Objects
				SIObjExport oSel , str &"."& i,coord,useTri,useMat,useUV, useUserNormal 
			end if
		next
	else
		if multi = 1 then
			for each oItem in oSel
				oColl.RemoveAll
				oColl.Add oItem
				'Current Frame + File per Object
				SIObjExport oColl, str &"_"& oItem.Fullname ,coord,useTri,useMat,useUV, useUserNormal
			next
		else
			'Current Frame + All Objects
			SIObjExport oSel, str, coord,useTri,useMat,useUV, useUserNormal 
		end if	
	end if

end function

'--------'--------'--------'--------'--------'--------'--------'--------'
function CreateImportOptionsPPG
'--------'--------'--------'--------'--------'--------'--------'--------'
	'Rather than use a SPDL based CustomPSet
	'we define the UI on the fly

	dim oPSet,oLayout,oItem
	
	set oPSet = ActiveSceneRoot.AddProperty( "CustomProperty",,"Wavefront_Import" )
	
	'
	'Create the parameters
	'
	
	call oPSet.AddParameter3( "Filename", siString )
	
	' Default 0, range 0 to 1, not-animatable
	call oPSet.AddParameter3( "Group", siInt2, 1, 0, 1, false )
	
	call oPSet.AddParameter3( "Material", siBool, 1, , , false ) 
	call oPSet.AddParameter3( "uv", siBool, 1, , , false ) 
	call oPSet.AddParameter3( "uvWrapping", siBool, 1, , , false ) 
	call oPSet.AddParameter3( "hrc", siInt2, 0, 0, 2, false ) 
	call oPSet.AddParameter3( "UserNormal", siBool, 0, , , false ) 

	call oPSet.AddParameter3( "DisplImage", siString )
	call oPSet.AddParameter3( "DisplDepth", siFloat, 0.5, 0, 100, false )
	call oPSet.AddParameter3( "DisplFlipVert", siBool, 0, , , false )
	call oPSet.AddParameter3( "DisplViewDep", siBool, 0, , , false )
	call oPSet.AddParameter3( "DisplSubDLevel", siInt4, 1, 0, 8, false )
		
	'
	' Now define the Layout
	'
	
	set oLayout = oPSet.PPGLayout
		
	set oItem = oLayout.AddItem( "Filename","",siControlFilePath ) 
	call oItem.SetAttribute( siUIFileFilter, _
							"Wavefront OBJ Files (*.obj)|*.obj|" & _
							"All Files (*.*)|*.*||" ) 
	call oItem.SetAttribute( siUIOpenFile, true ) 
	call oItem.SetAttribute( siUIInitialDir, "project" ) 
	call oItem.SetAttribute( siUIFileMustExist, true )
	
	oLayout.AddGroup "Group"
		set oItem = oLayout.AddEnumControl( "Group", _
			Array("Import as Clusters", 0,_
				 "Import as Objects", 1 ), "", siControlRadio )
		call oItem.SetAttribute( siUINoLabel, true )
	oLayout.EndGroup
	
	oLayout.AddGroup "Hierarchy"
		set oItem = oLayout.AddEnumControl( "hrc", _
			Array( "No Hierarchy", 0, _
				"Null as Parent", 1, _
				"Model as Parent",2 ), "", siControlRadio )
		call oItem.SetAttribute( siUINoLabel, true )
		
	oLayout.EndGroup
	
	oLayout.AddItem "UserNormal", "Import Normals as User Normals"	
	
	oLayout.AddGroup "Material"
		oLayout.AddItem "Material", "Import Material"
		oLayout.AddItem "uv", "Import UV"
		oLayout.AddItem "uvWrapping", "UV wrapping"
	oLayout.EndGroup

	oLayout.AddTab "Displacement Options"
		set oItem = oLayout.AddItem( "DisplImage", "Image", siControlFilePath ) 
			call oItem.SetAttribute( siUIImageFile, true )
			call oItem.SetAttribute( siUIOpenFile, true ) 
	'		call oItem.SetAttribute( siUIInitialDir, "project" ) 
			call oItem.SetAttribute( siUIFileMustExist, true )
			
		oLayout.AddItem "DisplDepth", "Alpha Depth Factor"
		oLayout.AddItem "DisplFlipVert", "Flip Image Vertically"
		oLayout.AddItem "DisplViewDep", "View Dependent Refinement"
		oLayout.AddItem "DisplSubDLevel", "Subdivision level"

	oLayout.Logic = "sub Filename_OnChanged" & vbCrLf & _
	"set oFSO = CreateObject(""Scripting.FileSystemObject"")" & vbCrLf & _
	"myPath = oFSO.GetParentFolderName( Filename.Value )" & vbCrLf & _
	"PPG.PPGLayout.item(""DisplImage"").SetAttribute siUIInitialDir, myPath" & vbCrLf & _
	"PPG.refresh" & vbCrLf & _
	"end sub"

    oLayout.SetAttribute siUIHelpFile, "<FactoryPath>/Doc/<DocLangPref>/xsidocs.chm::/menubar10.htm"

	set CreateImportOptionsPPG = oPSet
	
end function

'--------'--------'--------'--------'--------'--------'--------'--------'
sub SetupDisplacementProc( objList, DisplImage, DisplDepth, _
						DisplFlipVert, DisplViewDep, DisplSubDLevel )
'--------'--------'--------'--------'--------'--------'--------'--------'
	dim obj
	
	for each obj in objList

		' first let's connect the image to the displacement node of the object material
		MakeLocal obj & ".material" 
		
		set mat = obj.Material
		set param = mat.parameters("displacement")

		set cRange = param.connectfromprogid("Softimage.sib_interp_linear.1")
		set myTexture = cRange.input.connectfromprogid("Softimage.txt2d-image-explicit.1")
		
		cRange.newrange_min.value = - DisplDepth * 0.5
		cRange.newrange_max.value = DisplDepth * 0.5

		set oFSO = CreateObject("Scripting.FileSystemObject")
		baseName = oFSO.GetBaseName( DisplImage )

		set Source = AddImageSource( DisplImage, baseName )
		set Clip = AddImageClip( Source, baseName )
		
		' WARNING: 
		' The following (ie: enable effects) is only necessary when DisplFlipVert is TRUE
		' But because mental ray doesnt support 16 bits grayscale file reference yet
		' for the time being we still enable the effect so Mental Ray is given  raw data.
		' EC April 2005
		SetValue Clip & ".ImageDefinitionType", 0
		
		if DisplFlipVert then
			SetValue Clip & ".FlipY", True
		end if

		set myTexture.tex.source = Clip
		
		MakeLocal obj & ".geomapprox", siDefaultPropagation

		set geom = obj.Properties("Geometry Approximation")

		geom.gapproxmaxdisp = DisplDepth * 0.5

		geom.gapproxrdangdep = 3 ' that's fine displacement

		if DisplViewDep then
			SetValue geom & ".gapproxrdfinevwdep", true, null
		end if
		
		SetValue geom & ".gapproxmosl", DisplSubDLevel, null
		SetValue geom & ".gapproxmordrsl", DisplSubDLevel, null
	next
		
end sub

'--------'--------'--------'--------'--------'--------'--------'--------'
sub InspectWavefrontImportOptions( ByRef file, ByRef group, ByRef hrc, _
									ByRef material, ByRef uv, ByRef uvWrapping, ByRef UserNormal, _
									ByRef DisplImage, ByRef DisplDepth, ByRef DisplFlipVert, _
									ByRef DisplViewDep, ByRef DisplSubDLevel )
	'--------'--------'--------'--------'--------'
	' XSI, show dialog to set obj import options
	'--------'--------'--------'--------'--------'

	Dim oRoot,oDialog, oParams
	
	'Load the Import Dialog
	set oRoot = ActiveProject.ActiveScene.Root
	set oDialog = CreateImportOptionsPPG

	'Set the default filename
	'if IsEmpty(file) then
	'	file = ""
	'end if
	oDialog.parameters("Filename").value = file

	'Display the dialog box
	On Error Resume Next
	InspectObj oDialog,,XSIUtils.Translate( IDS_WAVEFRONT_OBJ_IMPORT_TITLE, "XSISCRIPTS" ),siModal
	
	If Err.Number <> 0 then
		DeleteObj oDialog
		exit sub
	else
		On Error Goto 0
		set oParams = oDialog.parameters

		if oParams("Filename").value = "" then
			'Open the filebrowser since no entry
			oParams("Filename").value = OpenBrowser(false)
			if oParams("Filename").value = "" then				
				DeleteObj oDialog
				exit sub
			end if
		end if
		
		'need to update the filename so that logging is accurate.
		file = oDialog.parameters("Filename").value
		hrc	=  oDialog.parameters("hrc").value
		group = oDialog.parameters("Group").value
		material = oDialog.parameters("Material").value
		uv = oDialog.parameters("UV").value
		uvWrapping = oDialog.parameters("uvWrapping").value
		UserNormal = oDialog.parameters("UserNormal").value

		DisplImage = oDialog.parameters("DisplImage").value
		DisplDepth = oDialog.parameters("DisplDepth").value
		DisplFlipVert = oDialog.parameters("DisplFlipVert").value
		DisplViewDep = oDialog.parameters("DisplViewDep").value
		DisplSubDLevel = oDialog.parameters("DisplSubDLevel").value

		DeleteObj oDialog
		
	end if
end sub
				
sub WavefrontImport()
	
'--------'--------'--------'--------'--------'--------'--------'--------'
If application.license = "Avid 3D" then

	'--------'--------'--------'--------'--------'
	' Avid 3D, No dialog, use only default options
	'--------'--------'--------'--------'--------'

	l_filename = OpenBrowser( false )

	'Import OBJ
	ObjImport l_filename, 1, 2, true, true, false
else
	
	logCommand = GetValue( "preferences.scripting.cmdlog" )
	
	if logCommand then	
		' I dont want SI_InspectWavefrontImportOptions to be logged so let's disable the logging
		' the following will be logged unfortunately
		SetValue "preferences.scripting.cmdlog", False
	end if
	
	SI_InspectWavefrontImportOptions	Filename, Group, hrc, Material, UV, UVwrapping, UserNormal, _
										DisplImage, DisplDepth, DisplFlipVert, _
										DisplViewDep, DisplSubDLevel

	if logCommand then	
		SetValue "preferences.scripting.cmdlog", True
		' need to do it twice because the last thing that was logged was the disabling...
		SetValue "preferences.scripting.cmdlog", True
	end if
	
	if Not Filename = "" then
		dim objList
		
		set objList = ObjImport( Filename, Group, hrc, Material, UV, UserNormal, UVwrapping )

		if Not DisplImage = "" then
			SetupDisplacement objList, DisplImage, DisplDepth, DisplFlipVert, DisplViewDep, DisplSubDLevel
		End if
	end if	
End if
end sub

function OpenBrowser(in_bsave)
	dim oFileBrowser  
	set oFileBrowser = XSIUIToolkit.FileBrowser  
 
	oFileBrowser.DialogTitle = "Select a .OBJ file"' set the title of the file browser  
	oFileBrowser.InitialDirectory = Application.InstallationPath( siUserPath )
	oFileBrowser.Filter = "Wavefront (*.obj)|*.obj|All Files (*.*)|*.*||"' set the filters  
	if in_bsave then
		oFileBrowser.ShowSave' show a save file dialog  
	else
		oFileBrowser.ShowOpen' show an open file dialog  
	end if
 
	' if the user selected a file  
	OpenBrowser = oFileBrowser.FilePathName

end function

'------------------------------------------------------------------------------
' NAME:			BiovisionImportSub
'
' INPUT:		File name
'
' DESCRIPTION:	Import a Biovision motion capture file(.bvh)
'------------------------------------------------------------------------------
sub BiovisionImportSub( ByRef out_file, _
						ByRef out_bInsertMotion, _
					    ByRef out_bNullsHierarchy, _
					    ByRef out_bGaplessSkeleton, _
					    ByRef out_bSI3DChains, _
					    ByRef out_bGroupAnimObjs)
'--------'--------'--------'--------'--------'--------'--------'--------'
	Dim oDialog, oParams,oFileBrowser, bGaplessSkeleton, bSI3DChains
	
	'Load the Import Dialog
	
	set oDialog = ActiveSceneRoot.AddProperty("BiovisionImport",,"Biovision_Import")
	

	'Display the dialog box
	On Error Resume Next
	InspectObj oDialog,,XSIUtils.Translate( IDS_BIOVISION_IMPORT_TITLE, "XSISCRIPTS" ),siModal
	
	If Err.Number <> 0 then
		DeleteObj oDialog
		exit sub
	else
		On Error Goto 0
			set oParams = oDialog.parameters

		if( oParams("FileName").value = "" )then
			set oFileBrowser = XSIUIToolkit.FileBrowser  
 
			oFileBrowser.DialogTitle = "Select a .BVH file"' set the title of the file browser  
			oFileBrowser.InitialDirectory = Application.InstallationPath( siUserPath )
			oFileBrowser.Filter = "Biovision (*.bvh)|*.bvh|All Files (*.*)|*.*||"' set the filters  
			oFileBrowser.ShowOpen' show an open file dialog  
			oParams("FileName").value = oFileBrowser.FilePathName

			if oParams("FileName").value = "" then				
				DeleteObj oDialog
				exit sub
			end if
		end if
		
		if oParams("GaplessSkeleton").value = 0 then
			bGaplessSkeleton = true
		else
			bGaplessSkeleton = false
		end if

		if oParams("SI3DChains").value = 0 then
			bSI3DChains = true			
		else
			bSI3DChains = false
		end if			


		BiovisionImport  oParams("FileName").value _
						,CBool(oParams("InsertMotion").value) _
						,CBool(oParams("NullsHierarchy").value) _
						,bGaplessSkeleton _
						,bSI3DChains  _
						,CBool(oParams("GroupAnimObjs").value) _

	
							
	
		'need to update the filename so that logging is accurate.
		out_file = oParams("FileName").value
		out_bInsertMotion		  = CBool(oParams("InsertMotion").value)
		out_bNullsHierarchy       = CBool(oParams("NullsHierarchy").value)
		out_bGaplessSkeleton      = bGaplessSkeleton
		out_bSI3DChains			  = bSI3DChains
		out_bGroupAnimObjs        = CBool(oParams("GroupAnimObjs").value)

		DeleteObj oDialog
	end if			
end sub

'------------------------------------------------------------------------------
' NAME:			AcclaimImportSub
'
' INPUT:		File name
'
' DESCRIPTION:	Import a AcclaimImport skeleton files(ASF) and motion capture files(AMC)
'------------------------------------------------------------------------------
sub AcclaimImportSub(ByRef out_SkeletonFileName, _
					 ByRef out_MotionFileName,  _
					 ByRef out_bCropToLimits,  _ 
					 ByRef out_bBoneLengthMultiplier,  _ 
					 ByRef out_dBoneLengthMultiplier, _
					 ByRef out_bInsertMotion, _
					 ByRef out_bNullsHierarchy, _
					 ByRef out_bGaplessSkeleton, _
					 ByRef out_bSI3DChains, _
					 ByRef out_bGroupAnimObjs)
'--------'--------'--------'--------'--------'--------'--------'--------'
	Dim oDialog, oParams,oFileBrowser	

	
	'Load the Import Dialog
	
	set oDialog = ActiveSceneRoot.AddProperty("AcclaimImport",,"Acclaim_Import")
	

	'Display the dialog box
	On Error Resume Next
	InspectObj oDialog,,XSIUtils.Translate( IDS_ACCLAIM_IMPORT_TITLE, "XSISCRIPTS" ),siModal
	
	If Err.Number <> 0 then
		DeleteObj oDialog
		exit sub
	else
		On Error Goto 0
		set oParams = oDialog.parameters

			if oParams("ASFFile").value = "" then
				'Open the filebrowser since no entry
				set oFileBrowser = XSIUIToolkit.FileBrowser  
				oFileBrowser.DialogTitle = "Select a .ASF file"' set the title of the file browser  
				oFileBrowser.InitialDirectory = Application.InstallationPath( siUserPath )
				oFileBrowser.Filter = "ASF (*.asf)|*.asf|All Files (*.*)|*.*||"' set the filters  
				oFileBrowser.ShowOpen' show an open file dialog  

				oParams("ASFFile").value = oFileBrowser.FilePathName
			if oParams("ASFFile").value = "" then				
				DeleteObj oDialog
				exit sub
			end if
		end if

		if oParams("GaplessSkeleton").value = 0 then
			bGaplessSkeleton = true
		else
			bGaplessSkeleton = false
		end if

		if oParams("SI3DChains").value = 0 then
			bSI3DChains = true			
		else
			bSI3DChains = false
		end if	

		AcclaimImport oParams("ASFFile").value _
					 ,oParams("AMCFile").value _
					 ,oParams("ApplyLimits").value _
					 ,oParams("OverrideLength").value _
					 ,oParams("LengthMultiplier").value _
					 ,oParams("InsertMotion").value _
					 ,oParams("NullsHierarchy").value _
					 ,bGaplessSkeleton  _
					 ,bSI3DChains _
					 ,oParams("GroupAnimObjs").value



		'need to update the filename so that logging is accurate.
		out_SkeletonFileName = oParams("ASFFile").value
		out_MotionFileName	=  oParams("AMCFile").value
		out_bCropToLimits = oParams("ApplyLimits").value
		out_bBoneLengthMultiplier = oParams("OverrideLength").value
		out_dBoneLengthMultiplier = oParams("LengthMultiplier").value
		out_bInsertMotion		  = CBool(oParams("InsertMotion").value)
		out_bNullsHierarchy       = CBool(oParams("NullsHierarchy").value)
		out_bGaplessSkeleton      = bGaplessSkeleton
		out_bSI3DChains		  = bSI3DChains 
		out_bGroupAnimObjs        = CBool(oParams("GroupAnimObjs").value)

		DeleteObj oDialog
	end if	
end sub