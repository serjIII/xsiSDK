'******************************************************************************
'
' File supervisor : mbelzile
' Date : 04/19/99
' (c) Copyright 1999 Softimage
'
' $Archive:  $
' $Revision:  $  $Date:  $
' Checkin by: $Author:  $
'
' @doc
' @module	operators.vbs
'
' scripts related to operators
'******************************************************************************

' make sure all vars are declared explicitely
Option Explicit

'******************************************************************************
' DEBUGGING
'******************************************************************************

' DEVNOTE: remove comment to force a break point when script loaded.
'stop

'******************************************************************************
' String Constants (used to translate)
'******************************************************************************
const IDS_ENVELOPE_APPLIED_AS_MODELING			= 1084
const IDS_ENVELOPE_APPLIED_AS_SHAPE				= 1085
const IDS_ENVELOPE_APPLIED_AS_MSG				= 1086
const IDS_ENVELOPE_APPLIED_AS_TITLE				= 1087
const IDS_APPLY_UP_VECTOR_MSG1					= 1088
const IDS_APPLY_UP_VECTOR_TITLE					= 1089
const IDS_APPLY_UP_VECTOR_MSG2					= 1090
const IDS_APPLY_UP_VECTOR_MSG3					= 1091
const IDS_CREATE_CLUSTER_MSG					= 1092
const IDS_APPLY_FLEXIBLE_ENVELOPE_TITLE			= 1093
const IDS_TRIM_MSG_L							= 1094
const IDS_TRIM_MSG_M							= 1095
const IDS_NEED_SELECT_POLYMESH_OBJECT_ERROR_MSG = 1517
const IDS_APPLY_THICKNESS_TITLE                 = 1518
const IDS_SELECT_POLYGON_MESH                   = 1519
const IDS_COMMAND_CANCELLED                     = 1520
const IDS_SELECT_START_VERTEX                   = 1521
const IDS_SELECT_END_VERTEX                     = 1522
const IDS_VERTICES_ON_SAME_OBJECT               = 1523
const IDS_SELECT_BORDER_VERTEX                  = 1524
const IDS_INVALID_OBJECT                        = 1525
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


FUNCTION SIMsgBoxWithHelp(in_prompt, in_buttons, in_title, in_default, in_helpfile, in_helpcontext ) 
	dim l_HelpFilePath
	IF Application.Interactive THEN
		l_HelpFilePath = SIGetHelpPath & "/" & in_helpfile	
		SIMsgBoxWithHelp = MsgBox( in_prompt, in_buttons, in_title, l_HelpFilePath , in_helpcontext )
	ELSE
		LogMessage in_title & ": " & in_prompt
		SIMsgBoxWithHelp = in_default
	END IF
END FUNCTION

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

'------------------------------------------------------------------------------
' NAME:		FGetSceneRoot
'
' INPUT:	N/A
'
' OUTPUT:	- SceneRoot
'
' DESCRIPTION: Return Scene Root
'------------------------------------------------------------------------------
Function FGetSceneRoot ()
	Dim rtn, MyScene, MySceneRoot, MyChildren

	set FGetSceneRoot = Nothing

	set MyChildren = EnumElements("Project")

	set MyScene = SIFilter(MyChildren,siSceneFilter)

	set MyChildren = EnumElements(MyScene(0))

	set MySceneRoot = SIFilter(MyChildren,siObjectFilter)
	
	set FGetSceneRoot = MySceneRoot(0)

end function

'------------------------------------------------------------------------------
' NAME:		FSubComponents2Clusters
'
' INPUT:	- in_objs			' list of objects
'
' OUTPUT:	- out_createdclusters	' list of created clusters
'			- out_subcomps		' list of subcomponents
'
' RETURN:	- updated list of objects i.e. minus subcomponents
'
' DESCRIPTION: Replace all subcomponents (i.e. tagclusters) with clusters 
'------------------------------------------------------------------------------
Function FSubComponents2Clusters( in_objs, byref out_createdclusters, byref out_subcomps )
	Dim MySubComp, MyObjList, MyCluster, MyIndex, MyObj

	'--------------------------------------------------------------------
	' List of all tagclusters
	'--------------------------------------------------------------------
	set out_subcomps  = SIFilter(in_objs,siSubComponentFilter)

	'--------------------------------------------------------------------
	' Initialize return list
	'--------------------------------------------------------------------
	set MyObjList = SIFilter(in_objs,siSubComponentFilter,FALSE)

	'--------------------------------------------------------------------
	' Create real clusters to replace tagclusters
	'--------------------------------------------------------------------
	If TypeName (out_subcomps ) <> "Nothing" then

		set out_createdclusters = CreateClusterFromSubComponent( out_subcomps )

		If TypeName(MyObjList) = "Nothing" then
			set FSubComponents2Clusters = out_createdclusters
		Else
			set FSubComponents2Clusters = MyObjList
			FSubComponents2Clusters.AddItems out_createdclusters
		End If
	Else
		set FSubComponents2Clusters = MyObjList
	End If

End Function

'------------------------------------------------------------------------------
' NAME:		FCloneConnectionSetList
'
' INPUT:	- in_srclist			' list to clone
'
' RETURN:	- cloned list 
'
' DESCRIPTION: clone list of connection sets.
'------------------------------------------------------------------------------
Function FCloneConnectionSetList( in_srclist, in_bNotSupportedByFactory10 )

	set FCloneConnectionSetList = CreateObject("XSI.Collection")
	dim item
	for each item in in_srclist
		if in_bNotSupportedByFactory10 then

			FCloneConnectionSetList.Add item.fullname		
		else		
			FCloneConnectionSetList.Add item.obj.clone
		end if 
	next
End Function

'******************************************************************************
' ApplyOp FUNCTIONS
'******************************************************************************
'------------------------------------------------------------------------------
' NAME:		FApplyOp
'
' INPUT:	- in_Preset	: describes the operator to be applied
'			- in_Objs	: list of input objects to connect
'			- in_ConnectType : node(0), branch(1), unspecified connection mode.
'			- in_Interactive: force a pick session if true
'			- out_createdObjs: list of operator(s) created
'			- out_cnxsetlist: list of connection sets including pick objects
'			- io_cnxsetlisttolog: connectionsetlist to log in history window
'
' RETURN:	list of operator(s) created
' DESCRIPTION: Apply an operator to a list of objects
'------------------------------------------------------------------------------
function FApplyOp (in_Preset, in_Objs, in_ConnectType, in_OperationMode, in_Interactive, _
	byref out_outputObjs, byref out_cnxsetlist, byref io_cnxsetlisttolog, in_ConstructionMode )
	
	dim l_ConnectionSet, l_CreatedOperators, l_op, l_ConnectionSetList, l_outObjs, l_ConnectionItem, l_oTestValidity, l_aNames, l_prevConstructionMode
	dim l_bApplyDirectly : l_bApplyDirectly = False
	set FApplyOp = Nothing
	set l_outObjs = Nothing

	'--------------------------------------------------------------------
	' get the cnx grp set(s) based on the operator to connect and the input 
	' objects, will generate the output prim by default.
	'--------------------------------------------------------------------		
	set out_cnxsetlist = GetConnectionSet(in_Preset, in_Objs, _
		siGroupLevel, in_ConnectType, in_Interactive, TRUE, l_outObjs)

	if TypeName (out_cnxsetlist) = "Nothing" then
		exit function
	end if

	'--------------------------------------------------------------------
	' special case for environments
	'--------------------------------------------------------------------
	l_aNames = split(out_cnxsetlist(0).FullName,".")
	If UBound(l_aNames) >= 0 then
		IF l_aNames(0) = "Environments" then							
			l_bApplyDirectly = True
		end if
	end if		

	'--------------------------------------------------------------------
	' Convert the returned connectionset argument into a string
	' to avoid any further validation of its contents. After
	' we apply the operator all bets are off regarding whether we
	' will get a valid connection set string again.
	'--------------------------------------------------------------------
	set io_cnxsetlisttolog = FCloneConnectionSetList(out_cnxsetlist,l_bApplyDirectly) 

	'--------------------------------------------------------------------
	' Fill-in the connection sets for generators.
	' Will add the clusters, cluster properties, materials
	' to the input and output groups of the connection sets.
	'
	' Add clusters, cluster properties, materials, ... to the 
	' generated objects and add them also to the connection sets.
	'--------------------------------------------------------------------	

	' Switch to the specified construction mode
	l_PrevConstructionMode = GetValue( "context.constructionmode" )

	if typename( in_ConstructionMode) <> "Nothing" then
		if in_ConstructionMode <> siConstructionModeDefault then
			SetValue "context.constructionmode", in_ConstructionMode
		end if
	end if

	'--------------------------------------------------------------------
	' create/connect an operator for each cnx grp set returned by GetConnectionSet
	'--------------------------------------------------------------------
	if in_OperationMode = siImmediateOperation AND GetValue( "context.constructionmode" ) = siConstructionModeModeling then 
		
		set l_CreatedOperators = CreateObject("XSI.Collection")
		for each l_ConnectionSet in out_cnxsetlist

			'--------------------------------------------------------------------
			' Apply the operator only( Persistent Mode)
			'--------------------------------------------------------------------
			if l_bApplyDirectly  then
				set l_op = ApplyOperator( in_preset, l_ConnectionSet, in_ConnectType )
			else
				set l_op = ApplyOperator( in_preset, l_ConnectionSet.obj, in_ConnectType )
			end if
			
			l_CreatedOperators.Add l_op

		next

		'--------------------------------------------------------------------
		' Inspect the operator(s). Note that if the user has pressed cancel
		' control returns and the rest of the script is not executed.
		'--------------------------------------------------------------------
		AutoInspect l_CreatedOperators

		'--------------------------------------------------------------------
		' Freeze the operator(s)
		'--------------------------------------------------------------------
		FreezeModeling l_CreatedOperators, , siUnspecified

		'--------------------------------------------------------------------
		' Remove reference to AutomaticObjects which are no longer there after 
		' the freeze.
		'--------------------------------------------------------------------
		for each l_ConnectionSet in out_cnxsetlist			
			if Not TypeName (l_outObjs) = "Nothing" And Not TypeName (l_ConnectionSet.obj.AutomaticObjects) = "Nothing" then
				l_outObjs.RemoveItems l_ConnectionSet.obj.AutomaticObjects	
			end if
		next
	else 
		set l_CreatedOperators = CreateObject("XSI.Collection")
		for each l_ConnectionSet in out_cnxsetlist

			'--------------------------------------------------------------------
			' Apply the operator only( Persistent Mode)
			'--------------------------------------------------------------------					
			if l_bApplyDirectly  then				
				set l_op = ApplyOperator( in_preset, l_ConnectionSet, in_ConnectType)
			else
				set l_op = ApplyOperator( in_preset, l_ConnectionSet.obj, in_ConnectType)
			end if
			
			l_CreatedOperators.Add l_op

		next
	end if

	' Switch to previous construction mode
	SetValue "context.constructionmode", l_prevConstructionMode

	set out_outputObjs = l_outObjs
	set FApplyOp = l_CreatedOperators	

end function

'------------------------------------------------------------------------------
' NAME:		ApplyOpProc
'
' INPUT:	- in_Preset	: describes the operator to be applied
'			- io_ConnectionSet	: connectionset containing list of input objects to connect
'			- in_ConnectType : node(0), branch(1), unspecified connection mode.
'			- inout_OperationMode : define if we are in siPersistentOperation or siImmediateOperation
'			- in_Interactive: force a pick session if true
'			- out_outputObjs: no used
'
' RETURN:	list of operator(s) created
'
' DESCRIPTION: Apply an operator to a list of objects selecting on exit the
' output objects generated and inspecting the operator installed.
'
' This script is called by UI commands. The io_ConnectionSet argument is updated with
' the connection set and propagate back for logging. The inout_OperationMode is also updated using the status
' of a userpref.
'
'------------------------------------------------------------------------------
Function ApplyOpProc (in_Preset, io_ConnectionSet, in_ConnectType, byref inout_OperationMode, byref out_outputObjs , byref inout_constructionMode)
	
	dim  l_CreatedOperators, l_outObjs, l_ConnectionSetList, l_bOperationMode, l_ConnectionSetListString

	set l_outObjs = Nothing

	'--------------------------------------------------------------------
	' Get the Current Operation mode and upadte the inout_OperationMode
	'--------------------------------------------------------------------

	l_bOperationMode = GetUserPref("OperationMode")

	if l_bOperationMode then
		inout_OperationMode = siImmediateOperation
	else
	    inout_OperationMode = siPersistentOperation
	end if

	set l_CreatedOperators = FApplyOp( in_Preset, io_ConnectionSet, in_ConnectType, inout_OperationMode, _
		TRUE, l_outObjs, l_ConnectionSetList, l_ConnectionSetListString , inout_constructionMode )

	'--------------------------------------------------------------------
	' propagate the connection set to log back to caller thru io_ConnectionSet
	'--------------------------------------------------------------------
	set io_ConnectionSet = l_ConnectionSetListString

	'--------------------------------------------------------------------
	' Select the output object(s); if there are any.
	'--------------------------------------------------------------------
	if Not TypeName (l_outObjs) = "Nothing" then
		SelectObj l_outObjs
	end if
	
	'--------------------------------------------------------------------
	' Inspect the operator(s).
	'--------------------------------------------------------------------
	if Not TypeName (l_CreatedOperators) = "Nothing" and ( (inout_OperationMode = siPersistentOperation) OR (inout_constructionMode <> siConstructionModeModeling) ) then
		AutoInspect l_CreatedOperators
	end if

	set ApplyOpProc = l_CreatedOperators

end Function


'------------------------------------------------------------------------------
' NAME:		ApplyOpFunc
'
' INPUT:	- in_Preset	: describes the operator to be applied
'			- in_ConnectionSet	: connection set containing list of input objects to connect
'			- in_ConnectType : node(0), branch(1), unspecified connection mode.
'			- in_OperationMode : define if we are in siPersistentOperation or siImmediateOperation
'			- in_Interactive: force a pick session if true
'			- out_outputObjs: list of output primitives generated 
'			= inout_constructionMode: The construction mode we need to apply the operator in
'
' RETURN:	list of operator(s) created
'
' DESCRIPTION: Apply an operator to a list of objects selecting on exit the
' output objects generated and inspecting the operator installed.
'------------------------------------------------------------------------------
function ApplyOpFunc ( in_Preset, in_ConnectionSet, in_ConnectType, in_OperationMode, byref out_outputObjs, byref inout_constructionMode )
	
	dim  l_CreatedOperators, l_outObjs, l_ConnectionSet, l_ConnectionSetListString

	set ApplyOpFunc = Nothing
	set l_outObjs = Nothing

	set l_CreatedOperators = FApplyOp( in_Preset, in_ConnectionSet, in_ConnectType, in_OperationMode, _
		FALSE, l_outObjs, l_ConnectionSet, l_ConnectionSetListString, inout_constructionMode )

	'--------------------------------------------------------------------
	' Select the output object(s); if there are any.
	'--------------------------------------------------------------------
	if Not TypeName (l_outObjs) = "Nothing" then
		SelectObj l_outObjs
	end if

	set out_outputObjs = l_outObjs
	set ApplyOpFunc = l_CreatedOperators	

end function

'------------------------------------------------------------------------------
' Helper to parse XML
'------------------------------------------------------------------------------
function ParseXML( in_strXML )
	dim oXMLParser
	set ParseXML = Nothing
	set oXMLParser = CreateObject( "Microsoft.XMLDOM" )
	oXMLParser.async = 0	
	oXMLParser.loadXML in_strXML
	if oXMLParser.parseError.errorCode = 0 then 
		set ParseXML = oXMLParser.documentElement
	else
		LogMessage "Invalid XML " & oXMLParser.parseError.reason, siError
	end if
end function

'------------------------------------------------------------------------------
' Helper to get output connections
'------------------------------------------------------------------------------
function GetOutputConnections( in_Obj )
	dim oDR, strOpInfo, oTopNode, oConnections, oTypeNode, oObjNode, oResult
	set GetOutputConnections = Nothing

	set oDR = XSIUtils.DataRepository
	strOpInfo = oDR.GetConnectionStackInfo( in_Obj )
	set oTopNode  = ParseXML( strOpInfo )
	if TypeName(oTopNode) <> "Nothing" then
		set oConnections = oTopNode.childNodes
		if TypeName(oConnections) <> "Nothing" then
			if oConnections.length <> 0 then
				dim item
				set oResult = CreateObject("XSI.Collection")
				for each item in oConnections
					set oTypeNode = item.selectSingleNode("type")
					if TypeName(oTypeNode) <> "Nothing" then
						if oTypeNode.text = "out" then
							set oObjNode = item.selectSingleNode( "object" )
							if TypeName(oObjNode) <> "Nothing" then
						  		oResult.Add oObjNode.text
							end if
						end if
					end if
				next
				set GetOutputConnections = oResult
			end if
		end if
	end if	
end function

'------------------------------------------------------------------------------
' Helper to get output connections
'------------------------------------------------------------------------------
function GetConnectedOperator( in_Connections, in_Type )
	dim obj
	set GetConnectedOperator = Nothing
	if TypeName(in_Connections) <> "Nothing" then
		for each obj in in_Connections
			LogMessage "checking : " & obj & ", type: " & obj.Type
			if obj.Type = in_Type then
				set GetConnectedOperator = obj
		   		exit function
			end if
		next
	end if
end function

'------------------------------------------------------------------------------
' NAME:	       MakeOneObjectSimulatedProc
'
' DESCRIPTION: Create the EvolveOp and Simulation markers on one 3DObject
'	       Helper for MakeObjectSimulatedProc
'------------------------------------------------------------------------------
function MakeOneObjectSimulatedProc( oObj, oDefaultEnvironment, oTimeCtrl, bRecurseIntoNestedObjects )
    ' [pzion 20080102] We cannot add a simulation bracket to a null, presumably because it is not clonable
	if oObj.IsClassOf( siX3DObjectID ) and not oObj.IsClassOf( siNullID ) then
		dim l_ch, rv, op, prim, oModel, oCache, oOperators, l_rv, l_prop

		set prim = GetUnevaluatedPrimitiveForConstructionHistory(oObj)
		if TypeName (prim) <> "Nothing" then
		    set l_ch = prim.ConstructionHistory
		    for each op in l_ch
		        if op.type = "MixerOp" then
		            logmessage "The object " & oObj & " has a mixer connected. Cannot add a simulated ICE tree.",siError
	    	        MakeOneObjectSimulatedProc = 0
    			    exit function
	    	    end if
		    next

		    set rv = l_ch.find( "SimulationMarker" )
		    if ( not typename( rv ) <> "Nothing" ) then
			    ApplyOp "SimulationMarker", oObj
		    end if

		    set rv = l_ch.find( "PostSimulationMarker" )
		    if ( not typename( rv ) <> "Nothing" ) then
			    ApplyOp "PostSimulationMarker", oObj
		    end if

		    set rv = l_ch.find( "Evolve" )
		    if ( not typename( rv ) <> "Nothing" ) then
			    ' Make sure each model has its cache:
			    set oModel = oObj.Model
			    set oCache = oDefaultEnvironment.FindCacheForModel(oModel)
			    if typename(oCache) = "Nothing" then
				    set oCache = CreateEnvironmentCache(oModel, oDefaultEnvironment )
			    oCache.name = oModel.Name & "_" & oDefaultEnvironment.Name & "_Cache"
			    end if
			    
		        set l_prop = SIAddProp("SimulationSettings", oObj, , "Simulation Settings").value("Value")

			    ApplyOp "EvolveOp", prim.fullname&";"&prim.fullname&";"&oTimeCtrl.fullname&";"&oCache.fullname&";"&l_prop
		    end if
    		
		    MakeOneObjectSimulatedProc = 1
	    else
		    MakeOneObjectSimulatedProc = 0
	    end if
	elseif oObj.IsClassOf( siNullID ) then
		set prim = GetUnevaluatedPrimitiveForConstructionHistory(oObj)
		if TypeName (prim) <> "Nothing" then
			set oOperators = GetOutputConnections( prim )
		
		    set rv = GetConnectedOperator( oOperators, "simulationmarker" )
			if ( not typename( rv ) <> "Nothing" ) then
			    ApplyOp "PrimitiveSimulationMarker", oObj
	    	end if

	    	set rv = GetConnectedOperator( oOperators, "postsimulationmarker" )
			if ( not typename( rv ) <> "Nothing" ) then
			    ApplyOp "PrimitivePostSimulationMarker", oObj
	    	end if

	    	set rv = GetConnectedOperator( oOperators, "presimulationmarker" )
			if ( not typename( rv ) <> "Nothing" ) then
			    ApplyOp "PrimitivePreSimulationMarker", oObj
	    	end if

		    set rv = GetConnectedOperator( oOperators, "Evolve" )
			if ( not typename( rv ) <> "Nothing" ) then
			    ' Make sure each model has its cache:
			    set oModel = oObj.Model
			    set oCache = oDefaultEnvironment.FindCacheForModel(oModel)
			    if typename(oCache) = "Nothing" then
			    	set oCache = CreateEnvironmentCache(oModel, oDefaultEnvironment )
					oCache.name = oModel.Name & "_" & oDefaultEnvironment.Name & "_Cache"
		    	end if
		    	ApplyOp "EvolveOp", prim.fullname&";"&prim.fullname&";"&oTimeCtrl.fullname&";"&oCache.fullname
			end if
			MakeOneObjectSimulatedProc = 1
	    else
		    MakeOneObjectSimulatedProc = 0
	    end if
	elseif oObj.type = "ICEProperty" then
		set oOperators = GetOutputConnections( oObj )
		
	    set rv = GetConnectedOperator( oOperators, "simulationmarker" )
		if ( not typename( rv ) <> "Nothing" ) then
		    ApplyOp "ICEPropertySimulationMarker", oObj
	    end if

	    set rv = GetConnectedOperator( oOperators, "postsimulationmarker" )
		if ( not typename( rv ) <> "Nothing" ) then
		    ApplyOp "ICEPropertyPostSimulationMarker", oObj
	    end if

	    set rv = GetConnectedOperator( oOperators, "presimulationmarker" )
		if ( not typename( rv ) <> "Nothing" ) then
		    ApplyOp "ICEPropertyPreSimulationMarker", oObj
	    end if

	    set rv = GetConnectedOperator( oOperators, "Evolve" )
		if ( not typename( rv ) <> "Nothing" ) then
		    ' Make sure each model has its cache:
		    set oModel = oObj.Model
		    set oCache = oDefaultEnvironment.FindCacheForModel(oModel)
		    if typename(oCache) = "Nothing" then
			    set oCache = CreateEnvironmentCache(oModel, oDefaultEnvironment )
		    oCache.name = oModel.Name & "_" & oDefaultEnvironment.Name & "_Cache"
		    end if
		    ApplyOp "EvolveOp", oObj.fullname&";"&oObj.fullname&";"&oTimeCtrl.fullname&";"&oCache.fullname
	    end if

		MakeOneObjectSimulatedProc = 1
	else
		MakeOneObjectSimulatedProc = 0
	end if

	if bRecurseIntoNestedObjects then
		dim nestees, nestedobj

		set nestees = oObj.Children

		for each nestedobj in nestees
			MakeOneObjectSimulatedProc = MakeOneObjectSimulatedProc + MakeOneObjectSimulatedProc( nestedobj, oDefaultEnvironment, oTimeCtrl, bRecurseIntoNestedObjects )
		next
	end if
end function

'------------------------------------------------------------------------------
' NAME:	       MakeObjectSimulatedProc
'
' DESCRIPTION: Create the EvolveOp and Simulation markers for a list of objects
'	       Helper for CreateSimulatedICETree
'------------------------------------------------------------------------------
function MakeObjectSimulatedProc( byref in_objs, in_BranchFlag )
	dim oObjectList, oDefaultEnvironment, oTimeCtrl, oObj, oModel, oTotal

	set oDefaultEnvironment = ActiveProject.ActiveScene.ActiveSimulationEnvironment
	if typename(oDefaultEnvironment) = "Nothing" then
	    set oDefaultEnvironment  = CreateEnvironment( "Environment" )
	    AddContainerToEnvironment oDefaultEnvironment,"Force",1,"Forces"
	end if  

	set oTimeCtrl  = oDefaultEnvironment.simulationtimecontrol

	MakeObjectSimulatedProc = 0
	set oObjectList = SIFilter( in_objs, siObjectFilter & "," & siGroupFilter & "," & siPropertyFilter )
	if typename(oObjectList) <> "Nothing" then
		for each oObj in oObjectList
			dim l_bRecurse

			' FIXME: we should correctly deduce the recursiveness based on the branch
			' flag of the incomming objects
			if in_BranchFlag = siUnspecified then
				l_bRecurse = 1
			else
				l_bRecurse = in_BranchFlag
			end if

			MakeObjectSimulatedProc = MakeObjectSimulatedProc + MakeOneObjectSimulatedProc( oObj, oDefaultEnvironment, oTimeCtrl, l_bRecurse )
		next
	end if
end function

'------------------------------------------------------------------------------
' NAME:		CreateSimulationBacketProc
'
' INPUT:
'			- in_ConnectionSet: connection set containing list of input objects
'                               on which we need a simulation bracket
'
' RETURN:	
'
' DESCRIPTION: Adds operators to simulate application of ICE Tree.
'              (1) Adds simulation and post simulation markers, if not there.
'              (2) Adds an evolve operator, if not there.
'              (3) Adds a terminal node within the evolution loop.
'------------------------------------------------------------------------------
function CreateSimulationBracketProc( in_ConnectionSet )
    ' 0 = node (as opposed to branch)
    MakeObjectSimulatedProc in_ConnectionSet.value, 0
    CreateSimulationBracketProc = 0
end function

'------------------------------------------------------------------------------
' NAME:		CreateSimulatedICETreeProc
'
' INPUT:
'			- in_ConnectionSet	: connection set containing list of input objects to connect
'			- in_OperationMode : define if we are in siPersistentOperation or siImmediateOperation
'			= inout_constructionMode: The construction mode we need to apply the operator in
'
' RETURN:	
'
' DESCRIPTION: Adds operators to simulate application of ICE Tree.
'              (1) Adds simulation and post simulation markers, if not there.
'              (2) Adds an evolve operator, if not there.
'              (3) Adds a terminal node within the evolution loop.
'------------------------------------------------------------------------------
function CreateSimulatedICETreeProc( in_ConnectionSet, in_BranchFlag, in_OperationMode )
    if MakeObjectSimulatedProc( in_ConnectionSet.value, in_BranchFlag ) = 0 then
    	logmessage "No geometries to connect to", siError
    else
        set CreateSimulatedICETreeProc = ApplyOp("ICETree", in_ConnectionSet, in_BranchFlag, in_OperationMode)
    end if
end function

function FApplyICEOpProc( in_FilePath, in_Target, byref io_Inputs, in_ConnectType )
    dim construction_mode
    construction_mode = PrivateGetCompoundConstructionMode( in_FilePath )
    if construction_mode = 5 Or construction_mode = 6 Then
        if MakeObjectSimulatedProc( in_Target, in_ConnectType ) = 0 then
    	    logmessage "No geometries to connect to", siError
    	    return
        end if
    end if
    dim l_Inputs
    l_Inputs = io_Inputs
    set FApplyICEOpProc = SIApplyICEOp(in_FilePath, in_Target, l_Inputs, in_ConnectType, construction_mode)
    io_Inputs = l_Inputs
    AutoInspect FApplyICEOpProc
end function



'------------------------------------------------------------------------------
' NAME:		ApplyMDTemplate
'
' INPUT:
'			- in_FilePath	: the MD compound to be applied
'			- in_Target     : the main output object to apply to
'			- io_Inputs     : secondary inputs to apply to
'           - in_ConnectType: branch or node connection 
'
' RETURN:	Returns the terminal node created
'
' DESCRIPTION: Allows applying "templates" to objects. These templates are basically exploded compounds. 
' They allow one to create a basic starting graph for different scenarios
'------------------------------------------------------------------------------
function ApplyMDTemplateProc( in_FilePath, in_Target, byref io_Inputs, in_ConnectType )
	
	dim oTerminalNode, oCompoundNode
	
	set oTerminalNode = ApplyICEOp( in_FilePath, in_Target, io_Inputs, in_ConnectType )

    ' Remove template from the end of the terminal node name if it's there
    if lcase( right( tn.name, 8 ) ) = "template" then
	    tn.name = left( tn.name, len(tn.name) - 8 )
    	
	    if right( tn.name, 1) = "_" then
		    tn.name = left( tn.name, len(tn.name) - 1 )
	    end if
    end if
	
	set oCompoundNode = oTerminalNode.inputports(0).connectednodes(0)
	
	ExplodeICECompoundNode	oCompoundNode
	
	set ApplyMDTemplateProc = oTerminalNode
	
end function

'------------------------------------------------------------------------------
' NAME:		GeneratePointCloudWithMDOperatorProc
'
' INPUT:
'			- in_FilePath	: the MD compound to be applied
'			- io_Inputs     : secondary inputs to apply to
'
' RETURN:	Returns the terminal node created
'
' DESCRIPTION: Creates an empty point cloud and applies an MD operator on it
'------------------------------------------------------------------------------
function GeneratePointCloudProc( in_FilePath, byref io_Inputs, in_ConnectType  )
	
	dim oPointCloud

    set oPointCloud = GetPrim( "PointCloud")
	set GeneratePointCloudProc = ApplyICEOp( in_FilePath, oPointCloud, io_Inputs, in_ConnectType  )
	
end function


'------------------------------------------------------------------------------
' NAME:		GeneratePointCloudWithMDTemplateProc
'
' INPUT:
'			- in_Compound   : the MD compound to be applied
'			- io_Inputs     : secondary inputs to apply to
'
' RETURN:	Returns the terminal node created
'
' DESCRIPTION: Creates an empty point cloud and applies an MD template on it
'------------------------------------------------------------------------------
function GeneratePointCloudWithTemplateProc( in_Compound, byref io_Inputs, in_ConnectType  )
	dim oPointCloud
	
    set oPointCloud = GetPrim( "PointCloud")
	set GeneratePointCloudWithTemplateProc = ApplyMDTemplateProc( in_Compound, oPointCloud, io_Inputs, in_ConnectType  )
	
end function


'******************************************************************************
' Generator Operator FUNCTIONS
'******************************************************************************

'------------------------------------------------------------------------------
' NAME: RecordOutInMapping
'
' INPUT:	- IO	: Array of collections. 
'			- IN	: Output 
'			- IN	: Input
'
' DESCRIPTION:	
' Append the collection that describes the output to input mapping.  
'
' NOTE: Ye old heuristic establishes a one-one transfer.  
'
'------------------------------------------------------------------------------
sub RecordOutInMapping(  byref io_ArrayOfMappings, in_Output, in_Input )
	dim l_ClsOutInMap

	set l_ClsOutInMap = CreateObject( "XSI.Collection" )

	l_ClsOutInMap.Add in_Output
	l_ClsOutInMap.Add in_Input

	if( Not IsArray( io_ArrayOfMappings ) )then
		redim io_ArrayOfMappings(0)
		set io_ArrayOfMappings(0) = l_ClsOutInMap
	else
		dim l_NbElems
		l_NbElems = ubound( io_ArrayOfMappings, 1 ) + 1
		redim preserve io_ArrayOfMappings( l_NbElems )
		set io_ArrayOfMappings( l_NbElems ) = l_ClsOutInMap
	end if
end sub


'******************************************************************************
' ApplyGenOp
'******************************************************************************

'------------------------------------------------------------------------------
' NAME:		FApplyGenOp
'
' INPUT:	- in_Preset			: describes the operator to be applied
'			- in_PrefGeom		: the pref geometry on creation of output
'			- in_Objs			: list of input objects to connect
'			- in_ConnectType	: node(0), branch(1), unspecified connection mode.
'			- in_OperationMode : weither we are in siImmediateMode or siPersistentMode
'			- in_InputsDisposalMode : define what we do with the inputs after the op
'			- in_Interactive	: force a pick session if true
'			- in_AutoTranslate	: force the output object to be at the same place as the input object
'			- out_createdObjs	: list of operator(s) created
'			- out_cnxsetlist	: list of connection sets including pick objects
'			- io_cnxsetlisttolog: connectionsetlist to log in history window
'
' RETURN:	list of operator(s) created
' DESCRIPTION: Apply an operator to a list of objects
'------------------------------------------------------------------------------
function FApplyGenOp (in_Preset, in_PrefGeom, in_Objs, in_ConnectType, in_OperationMode, _
	in_InputsDisposalMode, in_Interactive, in_AutoTranslate, _
	byref out_outputObjs, byref out_cnxsetlist, byref io_cnxsetlisttolog)
	
	dim l_ConnectionSet, l_CreatedOperators, l_OldCreatedOperators, l_op, l_ConnectionSetList, l_outObjs
	dim l_ObjectsToHide, l_ObjectsToDelete

	dim l_index, l_elem, l_newObj, l_oldObj
	dim l_dx, l_dy, l_dz

	set FApplyGenOp = Nothing
	set l_outObjs = Nothing

	'--------------------------------------------------------------------
	' get the cnx grp set(s) based on the operator to connect and the input 
	' objects, will generate the output prim by default.
	'--------------------------------------------------------------------

	if in_PrefGeom = "" then
		set out_cnxsetlist = GetConnectionSet(in_Preset, in_Objs, _
			siGroupLevel, in_ConnectType, in_Interactive, TRUE, l_outObjs)
	else
		set out_cnxsetlist = GetSurfaceFromCurvesConnectionSet(in_Preset, in_PrefGeom, in_Objs, _
			siGroupLevel, in_ConnectType, in_Interactive, l_outObjs)
	end if

	if TypeName (out_cnxsetlist) = "Nothing" then
		exit function
	end if

	'--------------------------------------------------------------------
	' Convert the returned connectionset argument into a string
	' to avoid any further validation of its contents. After
	' we apply the operator all bets are off regarding whether we
	' will get a valid connection set string again.
	'--------------------------------------------------------------------
    set io_cnxsetlisttolog = FCloneConnectionSetList(out_cnxsetlist,false) 

	set l_CreatedOperators = CreateObject("XSI.Collection")
	for each l_ConnectionSet in out_cnxsetlist

		'--------------------------------------------------------------------
		' Apply the operator only( Persistent Mode)
		'--------------------------------------------------------------------

		set l_op = ApplyOperator( in_preset, l_ConnectionSet.obj, in_ConnectType )
		l_CreatedOperators.Add l_op

	next

	if in_OperationMode = siPersistentOperation and in_InputsDisposalMode = siDeleteGenOpInputs then
		logMessage "siPersistentOperation ignored with siDeleteGenOpInputs, switching to siImmediateOperation", siWarning
		in_OperationMode = siImmediateOperation
	end if

	if in_InputsDisposalMode = siDeleteGenOpInputs then
		'--------------------------------------------------------------------
		' Let's get the inputs to delete
		' we cannot delete the inputs before the freeze otherwise 
		' the output object will disappear !
		'--------------------------------------------------------------------
		set l_ObjectsToDelete = CreateObject("XSI.Collection")
		GetGeneratorInputsForDisposal l_CreatedOperators, siDeleteGenOpInputs, l_ObjectsToDelete
	elseif in_InputsDisposalMode = siHideGenOpInputs then
		'--------------------------------------------------------------------
		' Let's get the inputs to hide
		' this needs to be done after the AutoInspect in case the user
		' selects CANCEL
		'--------------------------------------------------------------------
		set l_ObjectsToHide = CreateObject("XSI.Collection")
		GetGeneratorInputsForDisposal l_CreatedOperators, siHideGenOpInputs, l_ObjectsToHide
	end if

	'--------------------------------------------------------------------
	' create/connect an operator for each cnx grp set returned by GetConnectionSet
	'--------------------------------------------------------------------
	if in_OperationMode = siImmediateOperation then 
		
		'--------------------------------------------------------------------
		' Inspect the operator(s). Note that if the user has pressed cancel
		' control returns and the rest of the script is not executed.
		'--------------------------------------------------------------------
		AutoInspect l_CreatedOperators

		'--------------------------------------------------------------------
		' Freeze the operator(s)
		'--------------------------------------------------------------------
		set l_OldCreatedOperators = l_CreatedOperators
		set l_CreatedOperators = CreateObject("XSI.Collection")

		' in the case where the user has hit the "Delete Inputs" button
		' the operators have already been frozen
		' so let's see if that's the case
		for each l_op in l_OldCreatedOperators
			if Not l_op = "" then
				l_CreatedOperators.Add l_op
			end if
		next
		
		if Not IsEmpty(l_CreatedOperators) then
			FreezeModeling l_CreatedOperators, , siUnspecified
		end if

		'--------------------------------------------------------------------
		' Remove reference to AutomaticObjects which are no longer there after 
		' the freeze.
		'--------------------------------------------------------------------
		for each l_ConnectionSet in out_cnxsetlist			
			if Not TypeName (l_outObjs) = "Nothing" And Not TypeName (l_ConnectionSet.obj.AutomaticObjects) = "Nothing" then
				l_outObjs.RemoveItems l_ConnectionSet.obj.AutomaticObjects			
			end if
		next
	end if

	if in_AutoTranslate then
		l_index = 0
		for each l_elem in l_outObjs 
			set l_oldObj = out_cnxsetlist(l_index).obj	
	
			l_dx = GetValue( l_oldObj & ".kine.local.posx" )
			l_dy = GetValue( l_oldObj & ".kine.local.posy" )
			l_dz = GetValue( l_oldObj & ".kine.local.posz" )					
	
			Translate l_elem, l_dx, l_dy, l_dz, 0
			l_index = l_index + 1
		next	
	end if

	'--------------------------------------------------------------------
	' OK now delete or hide the objects if required
	'--------------------------------------------------------------------
	if in_InputsDisposalMode = siDeleteGenOpInputs then
		DeleteObj l_ObjectsToDelete
	elseif in_InputsDisposalMode = siHideGenOpInputs then
		HideAndUnselect l_ObjectsToHide
	end if

	set out_outputObjs = l_outObjs
	set FApplyGenOp = l_CreatedOperators	

end function

sub ReadGenInputMgmtUserPref( byref inout_InputsDisposalMode, byref inout_OperationMode, byref out_bRestoreOperationMode )
	dim  l_GenOpsAction

	out_bRestoreOperationMode = FALSE

	if AutoInspectEnabled then
		inout_InputsDisposalMode = siKeepGenOpInputs
	else
		l_GenOpsAction = GetUserPref("modeling.geninputmgt")
		if l_GenOpsAction = 0 then
			inout_InputsDisposalMode = siKeepGenOpInputs
		elseif l_GenOpsAction = 1 then
			inout_InputsDisposalMode = siHideGenOpInputs
		elseif l_GenOpsAction = 2 then
			inout_InputsDisposalMode = siDeleteGenOpInputs
			if inout_OperationMode = siPersistentOperation then
				out_bRestoreOperationMode = TRUE
				inout_OperationMode = siImmediateOperation
				SetUserPref "OperationMode", 1
			end if
		end if
	end if
end sub

'------------------------------------------------------------------------------
' NAME:		ApplyGenOpProc
'
' INPUT:	- in_Preset				: describes the operator to be applied
'			- in_PrefGeom			: pref geom on creation of output.
'			- io_ConnectionSet		: connectionset containing list of input objects to connect
'			- in_ConnectType		: node(0), branch(1), unspecified connection mode.
'			- inout_OperationMode	: define if we are in siPersistentOperation or siImmediateOperation
'			- inout_InputsDisposalMode : define what we do with the inputs after the operation (keep, hide or delete)
'			- in_Interactive		: force a pick session if true
'			- out_outputObjs		: no used
'
' RETURN:	list of operator(s) created
'
' DESCRIPTION: Apply a surface from curve generator operator to a list of objects selecting on exit the
' output objects generated and inspecting the operator installed.
'
' This script is called by UI commands. The io_ConnectionSet argument is updated with
' the connection set and propagate back for logging. The inout_OperationMode is also updated using the status
' of a userpref.
'
'------------------------------------------------------------------------------
Function ApplyGenOpProc (in_Preset, in_PrefGeom, io_ConnectionSet, in_ConnectType, byref inout_OperationMode, _
					byref inout_InputsDisposalMode, byref out_outputObjs )
	
	dim  l_CreatedOperators, l_outObjs, l_ConnectionSetList, l_bOperationMode, l_ConnectionSetListString
	dim  l_bRestoreOperationMode
	set l_outObjs = Nothing

	'--------------------------------------------------------------------
	' Get the Current Operation mode and upadte the inout_OperationMode
	'--------------------------------------------------------------------

	l_bOperationMode = GetUserPref("OperationMode")

	if l_bOperationMode then
		inout_OperationMode = siImmediateOperation
	else
	    inout_OperationMode = siPersistentOperation
	end if
	
	'--------------------------------------------------------------------
	' check the input management user pref to see if we should go 
	' in "immediate" mode temporarily in the case of deleting 
	' the generator inputs.
	'--------------------------------------------------------------------
	ReadGenInputMgmtUserPref inout_InputsDisposalMode, inout_OperationMode, l_bRestoreOperationMode

	set l_CreatedOperators = FApplyGenOp( in_Preset, in_PrefGeom, io_ConnectionSet, in_ConnectType, inout_OperationMode, _
		inout_InputsDisposalMode, TRUE, FALSE, l_outObjs, l_ConnectionSetList, l_ConnectionSetListString )

	'--------------------------------------------------------------------
	' propagate the connection set to log back to caller thru io_ConnectionSet
	'--------------------------------------------------------------------
	io_ConnectionSet = CStr( l_ConnectionSetListString )

	'--------------------------------------------------------------------
	' Select the output object(s); if there are any.
	'--------------------------------------------------------------------
	if Not TypeName (l_outObjs) = "Nothing" then
		if GetUserPref("modeling.selectgeneratedobj") then
			SelectObj l_outObjs
		end if
	end if
	
	'--------------------------------------------------------------------
	' Inspect the operator(s).
	'--------------------------------------------------------------------
	if Not TypeName (l_CreatedOperators) = "Nothing" and inout_OperationMode = siPersistentOperation then
		AutoInspect l_CreatedOperators
	end if

	if l_bRestoreOperationMode then
		SetUserPref "OperationMode", 0
	end if

	set out_outputObjs = l_outObjs
	
	set ApplyGenOpProc = l_CreatedOperators
end Function


'------------------------------------------------------------------------------
' NAME:		ApplyGenOpFunc
'
' INPUT:	- in_Preset			: describes the operator to be applied
'			- in_PrefGeom		: pref geom on creation of output
'			- in_ConnectionSet	: connection set containing list of input objects to connect
'			- in_ConnectType	: node(0), branch(1), unspecified connection mode.
'			- in_OperationMode	: define if we are in siPersistentOperation or siImmediateOperation
'			- in_InputsDisposalMode : define what we do with the inputs after the operation (keep, hide or delete)
'			- in_Interactive	: force a pick session if true
'			- out_outputObjs	: list of output primitives generated 
'
' RETURN:	list of operator(s) created
'
' DESCRIPTION: Apply a surface from curve operator to a list of objects selecting on exit the
' output objects generated and inspecting the operator installed.
'------------------------------------------------------------------------------
function ApplyGenOpFunc( in_Preset, in_PrefGeom, in_ConnectionSet, in_ConnectType, in_OperationMode, _
						in_InputsDisposalMode, byref out_outputObjs )
	
	dim  l_CreatedOperators, l_outObjs, l_ConnectionSet, l_ConnectionSetListString

	set ApplyGenOpFunc = Nothing
	set l_outObjs = Nothing

	set l_CreatedOperators = FApplyGenOp( in_Preset, in_PrefGeom, in_ConnectionSet, in_ConnectType, in_OperationMode, _
		in_InputsDisposalMode, FALSE, FALSE, l_outObjs, l_ConnectionSet, l_ConnectionSetListString )

	'--------------------------------------------------------------------
	' Select the output object(s); if there are any.
	'--------------------------------------------------------------------
	if Not TypeName (l_outObjs) = "Nothing" then
		' we should not look at the user pref in here
		' this should be another argument instead 
		' EC Jan 2004, see 96901 for issue.
		if GetUserPref("modeling.selectgeneratedobj") then
			SelectObj l_outObjs
		end if
	end if

	set out_outputObjs = l_outObjs
	set ApplyGenOpFunc = l_CreatedOperators	

end function

'******************************************************************************
' Topology Operator FUNCTIONS
'******************************************************************************

'------------------------------------------------------------------------------
' NAME:		FCreateSubComponentFromCluster
'
' INPUT:	- in_cls	: cluster input.
'
' RETURN:	Created subomponent item
' DESCRIPTION: Create a subcomponent item from a cluster item
'------------------------------------------------------------------------------
function FCreateSubComponentFromCluster( in_cls )

	dim i, obj, subcomp

	' Find the 3DObject of the cluster.  This will serve to initialized the collection item.

	for i = 0 to in_cls.pathitems.count-1
		set obj = in_cls.pathitems(i)
		if typename(obj) = "X3DObject" then
			exit for
		end if	
	next	
	
	set subcomp = createobject("xsi.collectionitem")

	'Little tricky part : we initialise the collection item by setting his value
	'with the sub component name and type of indices (points, edges or polygons)
	'For example, the equivalent might be for a grid : l_oNewElem.Value = "grid.pnt[0]"

	subcomp.value = obj & "." & in_cls.type & "[0]"
	
	'Transfer the data from cluster to subomponent.

	subcomp.subelements = in_cls.obj.elements
	
	set FCreateSubComponentFromCluster = subcomp
end function

'------------------------------------------------------------------------------
' NAME:		CleanSelectionListForTopoOp
'
' INPUT:	in_ConnectionSet - A connection set.	
'
' DESCRIPTION: This is a crappy routine to unselect the content of the selection
' list because the selection list is not a cluster that can be updated (crap).
'------------------------------------------------------------------------------
sub CleanSelectionListForTopoOp ( in_ConnectionSet )

	dim l_ElemsToDeselect, l_Elem, l_ObjList
	
	set l_ElemsToDeselect = Nothing 
	set l_ObjList = in_ConnectionSet.Groups(0).obj

	for each l_Elem in l_ObjList	
		if typename( l_Elem.obj ) = "Cluster" Then

			' create an element from the content of the cluster
			dim l_SubElem

			set l_SubElem = FCreateSubComponentFromCluster( l_Elem )
			
			if TypeName( l_ElemsToDeselect ) = "Nothing" Then
				set l_ElemsToDeselect = CreateObject("XSI.Collection")
			end if

			l_ElemsToDeselect.Add l_SubElem
		end if
	next

	if Not TypeName( l_ElemsToDeselect ) = "Nothing" Then
		RemoveFromSelection l_ElemsToDeselect
	end if

end sub

'------------------------------------------------------------------------------
' NAME:		SetSelectionListForTopoOp
'
' INPUT:	in_ConnectionSet - A connection set.	
'
' DESCRIPTION: This is a crappy routine to unselect the content of the selection
' list because the selection list is not a cluster that can be updated (crap).
'------------------------------------------------------------------------------
sub SetSelectionListForTopoOp ( in_ConnectionSet )
	dim l_ElemsToSelect, l_Elem, l_ObjList
	set l_ElemsToSelect = Nothing 
	set l_ObjList = in_ConnectionSet.Groups(0).obj
	for each l_Elem in l_ObjList
		dim l_Cluster
		set l_Cluster = l_Elem.obj
			
		if typename( l_Cluster ) = "Cluster" Then
			if( l_Cluster.NbElements <> 0 ) Then

				' create an element from the content of the cluster
				dim l_SubElem

				set l_SubElem = FCreateSubComponentFromCluster( l_Elem )
				
				if TypeName( l_ElemsToSelect ) = "Nothing" Then
					set l_ElemsToSelect = CreateObject("XSI.Collection")
				end if

				l_ElemsToSelect.Add l_SubElem
			end if
		end if
	next

	if TypeName( l_ElemsToSelect ) <> "Nothing" Then
		SelectObj l_ElemsToSelect
	end if

end sub
'------------------------------------------------------------------------------
' NAME:		FApplyTopoOp
'
' INPUT:	- in_Preset	: describes the operator to be applied
'			- in_Objs	: list of input objects to connect
'			- in_ConnectType : node(0), branch(1), unspecified connection mode.
'			- in_OperationMode : define if we are in siPersistentOperation or siImmediateOperation
'			- in_Interactive: force a pick session if true
'			- in_bDisableAutoInspect: makes sure there's no ppg at all !
'			- out_outputObjs: list of operator(s) created
'			- out_cnxsetlist: connectionsetlist to log in history window
'
' RETURN:	list of operator(s) created
' DESCRIPTION: Apply an operator to a list of objects
'------------------------------------------------------------------------------
function FApplyTopoOp (in_Preset, in_Objs, in_ConnectType, in_OperationMode, _
						in_Interactive, in_bDisableAutoInspect, _
						byref out_outputObjs, byref io_cnxsetlisttolog )
	dim l_ConnectionSet, l_CreatedOperators, l_op, l_ConnectionSetList, l_OperatorID
	dim l_outObjs, l_out3DObjects

	set FApplyTopoOp = Nothing
	set l_outObjs = Nothing
	set l_out3DObjects = Nothing

	Dim l_constructionmodeautoupdate

	'''''''''''' Construction mode automatic updating ''''''''''''
	l_constructionmodeautoupdate = GetValue( "preferences.modeling.constructionmodeautoupdate" )

	if l_constructionmodeautoupdate then

		SetValue "context.constructionmode", siConstructionModeModeling

	end if
	''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

	'--------------------------------------------------------------------
	' get the cnx grp set(s) based on the operator to connect and the input 
	' objects, will generate the output prim by default.
	'--------------------------------------------------------------------	
	set l_ConnectionSetList = GetConnectionSet(in_Preset, in_Objs, _
		siGroupLevel, in_ConnectType, in_Interactive, TRUE, l_outObjs)

	l_OperatorID = l_ConnectionSetList(0).obj.OperatorId

	' If the operator is delete component or collapse component then let's clear the selection before !
	' Adding to the trick: deletetrim, removeknot for crv and srf, delete curve point...
	' The reason why we do this is because otherwise the subcomponent elemref will become emtpy
	' after the operation and this is the most robust way of avoiding this.
	' Select some polys, delete them, undo and you'll have back your polys selected.
	if     strcomp(l_OperatorID,"{6C8F2060-4849-11d4-A8B6-00C04F8EDF15}",vbTextCompare) = 0 _
		or strcomp(l_OperatorID,"{F67ACF91-5602-4a0c-9B6B-904E62F1A1AF}",vbTextCompare) = 0 _
		or strcomp(l_OperatorID,"{6142FBB2-D293-11d3-B496-009027BC38D5}",vbTextCompare) = 0 _
		or strcomp(l_OperatorID,"{06BF49F0-E62D-11d2-A968-00A024190119}",vbTextCompare) = 0 _
		or strcomp(l_OperatorID,"{992F08E0-7BBE-11d0-A88E-00A024190119}",vbTextCompare) = 0 _
		or strcomp(l_OperatorID,"{88EC8342-268E-11d4-97F3-0800360BFF02}",vbTextCompare) = 0 then

			If Not in_Objs = "" Then
				RemoveFromSelection in_Objs
			end if
	end if

	'--------------------------------------------------------------------
	' Convert the returned connectionset argument into a string
	' to avoid any further validation of its contents. After
	' we apply the operator all bets are off regarding whether we
	' will get a valid connection set string again.
	'--------------------------------------------------------------------
	io_cnxsetlisttolog = CStr( FCloneConnectionSetList(l_ConnectionSetList,false) )

	if TypeName (io_cnxsetlisttolog) = "Nothing" then
		exit function
	end if

	' WAIT FOR SERVICES BY SIMON...
	' For topology update:
	' - Get the clusters and the cluster properties.  
	' - Add all clusters to penultimate group of the connection set
	' - Add all cluster properties of each cluster to the last group of the connection set

	'--------------------------------------------------------------------
	' create/connect an operator for each cnx grp set returned by GetConnectionSet
	'--------------------------------------------------------------------
	if in_OperationMode = siImmediateOperation then 		

		set l_CreatedOperators = CreateObject("XSI.Collection")
		for each l_ConnectionSet in l_ConnectionSetList 
			'--------------------------------------------------------------------
			' Apply the operator, inspect it and freeze it( Immediate Mode)			
			'--------------------------------------------------------------------
			set l_op = ApplyOperator( in_preset, l_ConnectionSet.obj, in_ConnectType )

			if in_Interactive and Not in_bDisableAutoInspect then
				AutoInspect l_op			
			end if
			FreezeModeling l_op, , siUnspecified
			l_CreatedOperators.Add l_op

			'--------------------------------------------------------------------
			' Remove reference to AutomaticObjects which are no longer there after 
			' the freeze.
			'--------------------------------------------------------------------

			if Not TypeName (l_outObjs) = "Nothing" And	Not TypeName (l_ConnectionSet.obj.AutomaticObjects) = "Nothing" then
				l_outObjs.RemoveItems l_ConnectionSet.obj.AutomaticObjects			
			end if
		next
	else
		set l_CreatedOperators = CreateObject("XSI.Collection")

		for each l_ConnectionSet in l_ConnectionSetList

			'--------------------------------------------------------------------
			' Apply the operator only( Persistent Mode)
			'--------------------------------------------------------------------
			set l_op = ApplyOperator( in_preset, l_ConnectionSet.obj, in_ConnectType )
			l_CreatedOperators.Add l_op

		next

		'--------------------------------------------------------------------
		' Inspect the operator(s).
		'--------------------------------------------------------------------
		if Not TypeName (l_CreatedOperators) = "Nothing" And Not in_bDisableAutoInspect And in_Interactive then
			AutoInspect l_CreatedOperators
		end if

	end if

	' Get the 3DObjects of the returned objects because clusters retuned by 
	' topology operators are not valid after the topology operator...

	if Not TypeName (l_outObjs) = "Nothing" then
		dim i, l_elem, l_3DObject

		set l_out3DObjects = createobject( "xsi.collection" )

		for each l_elem in l_outObjs 
			for i = 0 to l_elem.pathitems.count-1
				set l_3DObject = l_elem.pathitems(i)
				if typename(l_3DObject) = "X3DObject" then
					exit for
				end if	
			next	

			l_out3DObjects.Add( l_3DObject )
		next
	end if

	set out_outputObjs = l_out3DObjects
	set FApplyTopoOp = l_CreatedOperators	

end function


'------------------------------------------------------------------------------
' NAME:		ApplyTopoOpProc
'
' INPUT:	- in_preset			: Operator preset
'			- in_ConnectionSet	: connection set containing list of input objects to connect
'			- in_ConnectType	: node(0), branch(1), unspecified connection mode.
'			- inout_OperationMode : define if we are in siPersistentOperation or siImmediateOperation
'			- out_outputObjs	: list of output primitives generated 
'
' DESCRIPTION: Apply topology operator to current selection.
'
' This script is called by UI commands. The io_ConnectionSet argument is updated with
' the connection set and propagate back for logging.The inout_OperationMode is updated by a 
' user pref.
'
'------------------------------------------------------------------------------

Function ApplyTopoOpProc (	in_Preset, io_ConnectionSet, in_ConnectType, _
						byref inout_OperationMode, byref out_outputObjs )

	dim  l_CreatedOperators, l_outObjs, l_ConnectionSetList, l_Count, l_ConnectionSet, l_bOperationMode

	set l_outObjs = Nothing
	'--------------------------------------------------------------------
	' Get the Current Operation mode and upadte the inout_OperationMode
	'--------------------------------------------------------------------

	l_bOperationMode = GetUserPref("OperationMode")

	if l_bOperationMode then
		inout_OperationMode = siImmediateOperation
	else
	    inout_OperationMode = siPersistentOperation
	end if

	' we pass TRUE for in_Interactive
	' we pass FALSE for in_bDisableAutoInspect (we want the inspector unless autoinspect is disabled in userpref)
	set l_CreatedOperators = FApplyTopoOp( in_Preset, io_ConnectionSet, in_ConnectType, inout_OperationMode, _
		TRUE, FALSE, l_outObjs, l_ConnectionSetList )

	'--------------------------------------------------------------------
	' Propagate connectionset to log back to caller
	'--------------------------------------------------------------------
	io_ConnectionSet = 	CStr( l_ConnectionSetList )
	
	set out_outputObjs = l_outObjs

	' return the newly created ops 
	set ApplyTopoOpProc = l_CreatedOperators		
end function

'------------------------------------------------------------------------------
' NAME:		ApplyTopoOpFunc
'
' INPUT:	- in_Preset	: describes the operator to be applied
'			- in_ConnectionSet	: connection set containing list of input objects to connect
'			- in_ConnectType : node(0), branch(1), unspecified connection mode.
'			- in_OperationMode : define if we are in siPersistentOperation or siImmediateOperation
'			- out_outputObjs: list of output primitives generated 
'
' RETURN:	list of operator(s) created
'
' DESCRIPTION: Apply a topology operator to a list of objects.
'------------------------------------------------------------------------------
function ApplyTopoOpFunc ( in_Preset, in_ConnectionSet, in_ConnectType, _
						in_OperationMode, byref out_outputObjs )
	
	dim  l_CreatedOperators, l_outObjs, l_ConnectionSetList

	set ApplyTopoOpFunc = Nothing
	set l_outObjs = Nothing

	' we pass FALSE for in_Interactive
	' we pass TRUE for in_bDisableAutoInspect but it doesn't matter what we pass since when in_Interactive  
	' is FALSE the AutoInspect is not called
	set l_CreatedOperators = FApplyTopoOp( in_Preset, in_ConnectionSet, in_ConnectType, in_OperationMode, _
		FALSE, TRUE, l_outObjs, l_ConnectionSetList )

	set out_outputObjs = l_outObjs
	set ApplyTopoOpFunc = l_CreatedOperators	

end function

'******************************************************************************
' Converter Operator FUNCTIONS
'******************************************************************************
'------------------------------------------------------------------------------
' NAME:		Convert
'
' INPUT:	- in_Target
'			- in_Input
'
' DESCRIPTION:
'------------------------------------------------------------------------------
sub Convert(in_Target, in_Input)
	Dim l_oper, l_opCreatedObj, l_opOutputObj

	'--------------------------------------------------------------------
	' Return Value : l_ret.item(0) -> CreatedObj 
	'--------------------------------------------------------------------
	set l_oper = SIConvert (in_Target, in_Input)
	set l_opCreatedObj = l_oper.value("CreatedObj")
	set l_opOutputObj = l_oper.value("OutputObj")

	'--------------------------------------------------------------------
	' Select the 3DObject
	'--------------------------------------------------------------------
	if Not TypeName (l_opOutputObj) = "Nothing" then
		SelectObj (l_opOutputObj)
	end if
	
	'--------------------------------------------------------------------
	' Inspect the new primitive
	'--------------------------------------------------------------------
	if Not TypeName (l_opCreatedObj) = "Nothing" then
		AutoInspect (l_opCreatedObj)
	end if

end sub

'******************************************************************************
' Kinematic Operator FUNCTIONS
'******************************************************************************
'------------------------------------------------------------------------------
' NAME:			FApplyKinematicOp
'
' INPUT:		in_preset: kinematic op preset
'				in_ConnectionSet: connectionset containing input objects to kinematic op
'				in_ConnectType: type of propagation 
'				(0:node, 1:branch: 2:unspecified)
'
' DESCRIPTION:	apply a kinematic op to input objects 
'------------------------------------------------------------------------------
function FApplyKinematicOp( in_preset, io_ConnectionSet, in_ConnectType )
	Dim l_outObjs, l_ConnectionSetList, l_ConnectionSet, l_OpIsMotionDerivator, l_CreatedOperators, l_op
	Dim l_PresetString(1), l_PresetName 
	
	set FApplyKinematicOp = Nothing
	
	set l_outObjs = Nothing
	
	'--------------------------------------------------------------------
	' get the cnx grp set(s) based on the operator to connect and the input 
	' objects, will generate the output prim by default.
	'--------------------------------------------------------------------	
	set l_ConnectionSetList = GetConnectionSet(in_preset, io_ConnectionSet, _
		siGroupLevel, in_ConnectType, FALSE, TRUE, l_outObjs)

	if TypeName (l_ConnectionSetList) = "Nothing" then
		exit function
	end if
	
	' Is the input preset the motion derivator?
	' If so... Block double application...
	l_PresetString(0) = CStr(in_preset)
	l_PresetName = Filter(l_PresetString, "MotionDerivator")
	l_OpIsMotionDerivator = false
	if UBound(l_PresetName) >= 0 then
		l_OpIsMotionDerivator = true
	end if
		
	'--------------------------------------------------------------------
	' create/connect an operator for each cnx grp set returned by GetConnectionSet
	'--------------------------------------------------------------------
	set l_CreatedOperators = CreateObject("XSI.Collection")
	for each l_ConnectionSet in l_ConnectionSetList
		'------------------------------------------------------------------------
		' create first a motion derivator. note: we want to check to see if there
		' exists already a motion derivator on the object before applying one. the
		' method on the cnx set IsApplicable() does exactly that. if we did not use
		' IsApplicable() to verify first then ApplyOperator would fail and the script
		' would exist with the failed error message. thus QStretch or any other op
		' relying on a notin derivator being first installed would not be applied at
		' all in the case where there already exists a motion derivator (which the
		' user may have installed himself prior to calling this script.
		'------------------------------------------------------------------------
		if l_ConnectionSet.obj.IsApplicable then
			
			dim oDynamicsOpNXD, oDynamicsOpODE 

			on error resume next
			'If a dynamic Op is already there then do not install motion derivator... 
			set oDynamicsOpNXD = dictionary.getobject( l_ConnectionSet.obj.Groups(0).obj & ".kine.global.NXDynamicsop" )
			set oDynamicsOpODE = dictionary.getobject( l_ConnectionSet.obj.Groups(0).obj & ".kine.global.dynamicsop" )
			
			if( typename( oDynamicsOpODE ) = "Empty" and typename( oDynamicsOpNXD ) = "Empty" )then
				' The connection set is for the preset passed in.  It is not for the MotionDerivator.
				' Extract only the desired connection group set part because the MotionDerivator has
				' only one group and it is possible that the connection group set has more which will lead to 
				' an error.
				set l_op = ApplyOperator( "MotionDerivator", l_ConnectionSet.obj.Groups(0), in_ConnectType )
				SetValue l_ConnectionSet.obj.Groups(0) & ".kine.global.velaccactive", 1	
				
				if( l_OpIsMotionDerivator ) then
					l_CreatedOperators.Add l_op	
				end if	
			end if
		end if 
		
		if( Not l_OpIsMotionDerivator ) then
			set l_op = ApplyOperator( in_preset, l_ConnectionSet, in_ConnectType )
			l_CreatedOperators.Add l_op
		end if
	next

	'--------------------------------------------------------------------
	' propagate the connection set back to caller thru io_ConnectionSet
	'--------------------------------------------------------------------
	set io_ConnectionSet = l_ConnectionSetList
	
	'--------------------------------------------------------------------
	' Return the created operators.
	'--------------------------------------------------------------------
	
	set FApplyKinematicOp = l_CreatedOperators
end function

'------------------------------------------------------------------------------
' NAME:			ApplyKinematicOpFunc
'
' INPUT:		in_preset: kinematic op preset
'				in_ConnectionSet: connectionset containing input objects to kinematic op
'				in_ConnectType: type of propagation 
'				(0:node, 1:branch: 2:unspecified)
'
' DESCRIPTION:	apply a kinematic op to input objects and inspect the new 
' created operator.
'------------------------------------------------------------------------------
function ApplyKinematicOpFunc( in_preset, io_ConnectionSet, in_ConnectType )

	set ApplyKinematicOpFunc = FApplyKinematicOp( in_preset, io_ConnectionSet, in_ConnectType )

end function

'------------------------------------------------------------------------------
' NAME:			ApplyKinematicOpProc
'
' INPUT:		in_preset: kinematic op preset
'				io_ConnectionSet: connectionset containing input objects to kinematic op
'				in_ConnectType: type of propagation 
'				(0:node, 1:branch: 2:unspecified)
'
' DESCRIPTION:	apply a kinematic op to input objects and inspect the new 
' created operator.
'
' This script is called by UI commands. The io_ConnectionSet argument is updated with
' the connection set and propagate back for logging. No objects are returned.
'
'------------------------------------------------------------------------------
Function ApplyKinematicOpProc( in_preset, io_ConnectionSet, in_ConnectType )

	Dim l_CreatedOperators
	
	set l_CreatedOperators = FApplyKinematicOp( in_preset, io_ConnectionSet, in_ConnectType )

	'--------------------------------------------------------------------
	' Inspect the operator(s).
	'--------------------------------------------------------------------
	if Not TypeName (l_CreatedOperators) = "Nothing" then
		AutoInspect l_CreatedOperators
	end if
	
	set ApplyKinematicOpProc = l_CreatedOperators
end Function

'------------------------------------------------------------------------------
' NAME:			ApplyMotionDerivatorProc
'
' INPUT:		in_preset: motion derivator preset
'				io_ConnectionSet: connectionset containing input objects to kinematic op
'				in_ConnectType: type of propagation 
'				(0:node, 1:branch: 2:unspecified)
'
' DESCRIPTION:	apply motion derivator to input objects
'
' This script is called by UI commands. The io_ConnectionSet argument is updated with
' the connection set and propagate back for logging. No objects are returned.
'
'------------------------------------------------------------------------------
sub ApplyMotionDerivatorProc( in_preset, io_ConnectionSet, in_ConnectType )

	Dim l_ConnectionSet, l_ConnectionSetList, l_outObjs, l_objectslist, l_3dobj

	set l_outObjs = Nothing

	'--------------------------------------------------------------------
	' get the cnx grp set(s) based on the operator to connect and the input 
	' objects, will generate the output prim by default.
	'--------------------------------------------------------------------	
	set l_ConnectionSetList = GetConnectionSet(in_preset, io_ConnectionSet, _
		siGroupLevel, in_ConnectType, FALSE, TRUE, l_outObjs)

	if TypeName (l_ConnectionSetList) = "Nothing" then
		exit sub
	end if

	'--------------------------------------------------------------------
	' create/connect motion derivator for each cnx grp set returned by GetConnectionSet
	'--------------------------------------------------------------------
	for each l_ConnectionSet in l_ConnectionSetList
		'------------------------------------------------------------------------
		' create and apply a motion derivator. if there already exists one then
		' ApplyOperator will fail and issue an error message - which is what we
		' want in this case.
		'------------------------------------------------------------------------
		ApplyOperator "MotionDerivator", l_ConnectionSet.obj, in_ConnectType 
		 
	next

	'---------------------------------------------
	' set the vel/acc activeness checkbox to true. 
	'---------------------------------------------
	set l_objectslist = io_ConnectionSet.Groups(0).obj
	for each l_3dobj in l_objectslist	
		SetValue l_3dobj & ".kine.global.velaccactive", 1
	next

	'--------------------------------------------------------------------
	' propagate the connection set back to caller thru io_ConnectionSet
	'--------------------------------------------------------------------
	set io_ConnectionSet = l_ConnectionSetList
end sub


'******************************************************************************
' Envelope Operator FUNCTIONS
'******************************************************************************

'------------------------------------------------------------------------------
' NAME:		ApplyFlexibleEnvelopeProc
'
' INPUT:	in_connectionset - connection set containing list of selected objects
'
' DESCRIPTION: Apply flexible envelop op to list of input objects and start a 
' pick session to select the skeltons.
'
' This script is called by UI commands. The in_connectionset argument is updated with
' the connection set and propagate back for logging.
'
'------------------------------------------------------------------------------
Function ApplyFlexibleEnvelopeProc ( byref io_connectionset, byref io_AssignNew, byref io_ConstructionMode )

	Dim l_SceneRoot, l_CPList, l_CustomParam, MyFlexEnv, l_GeneratePset, oPrimitive, o3DObject, oEnvelopeCollection, _
	    bHasEnvelope, oCnxObject, l_modeStr, l_Prompt, l_res, l_constructionmodeautoupdate
	
	' Keep this around, set it to TRUE if you need to add params and regenerate the preset + spdl
	l_GeneratePset = FALSE

	Set l_SceneRoot = FGetSceneRoot

	'--------------------------------------------------------
	' Determine if the primitive already has an envelope
	'--------------------------------------------------------

	set oCnxObject = io_connectionset.Groups(0).obj(0)

	If ( typename(oCnxObject) = "X3DObject" ) then
		' It's a 3DObject
		set oPrimitive = oCnxObject.ActivePrimitive
		set oEnvelopeCollection = oPrimitive.ConstructionHistory.Find("envelopop")
		bHasEnvelope = typename(oEnvelopeCollection) <> "Nothing"

	Else
		If ( typename(oCnxObject) = "Cluster2" ) then
			' It's a cluster
			set oPrimitive = oCnxObject.Parent.Parent
			set oEnvelopeCollection = oPrimitive.ConstructionHistory.Find("envelopop")
			bHasEnvelope = typename(oEnvelopeCollection) <> "Nothing"
		Else
			' It's tagged points. Never has an envelope 
			bHasEnvelope = False
		End if
	End if

		

	if bHasEnvelope then
		
		' We're adding a deformer pop up a dialog asking whether to reassign envelope

		if (l_GeneratePset = TRUE) then

			'Build the Dialog
			Set l_CPList = SIAddProp("Custom_parameter_list", l_SceneRoot, , "Set Envelope").value("Value")
			l_CustomParam = l_SceneRoot & "." & l_CPList

			SIAddCustomParameter l_CustomParam, "AssignNew", siBool, _
				io_AssignNew, FALSE, TRUE, , siPersistable+siSilent, FALSE, TRUE, "AssignNew", _
				"Automatically Reassign Envelope When Adding Deformers"

		Else
			' We have a preset defined for this custom pset, for which we have defined a SPDL file
			Set l_CPList = SIAddProp("AssignEnvelope", l_SceneRoot, , "Set Envelope").value("Value")
			l_CustomParam = l_SceneRoot & "." & l_CPList

			' Initialize with the input values
			SetValue l_CustomParam & ".AssignNew", io_AssignNew
		End if

		If FWizardDialog(l_CustomParam,XSIUtils.Translate( IDS_APPLY_FLEXIBLE_ENVELOPE_TITLE, "XSISCRIPTS" )) = vbOk Then

			' Read the parameters of the property page
			io_AssignNew = GetValue( l_CustomParam & ".AssignNew" )

			set MyFlexEnv = FApplySelectedOp( io_connectionset, TRUE, io_AssignNew, 1 , io_ConstructionMode )

			DeleteObj l_CustomParam

			'--------------------------------------------------------------------
			' Inspect flexible envelope
			'--------------------------------------------------------------------

			if TypeName (MyFlexEnv) <> "Nothing" then
				AutoInspect MyFlexEnv
			end if
		Else
			DeleteObj l_CustomParam
			Err.Raise siErrCancelled
		End If

	Else
		' No envelope exists on the primitive, no need to pop dialog

		''' Check the current construction mode. If it's not "animation" prompt message
		''' box to user asking if he/she wants to apply it in animation, and switch modes
		''' as required

		if( io_ConstructionMode <> siConstructionModeAnimation ) then

			if io_ConstructionMode = siConstructionModeModeling then
				l_modeStr = XSIUtils.Translate( IDS_ENVELOPE_APPLIED_AS_MODELING, "XSISCRIPTS" )
			else
				l_modeStr = XSIUtils.Translate( IDS_ENVELOPE_APPLIED_AS_SHAPE, "XSISCRIPTS" )
			end if

			l_Prompt =  XSIUtils.Translate( IDS_ENVELOPE_APPLIED_AS_MSG, "XSISCRIPTS", l_modeStr)

			l_res = SIMsgBox(l_Prompt, vbYesNo + vbQuestion, XSIUtils.Translate( IDS_ENVELOPE_APPLIED_AS_TITLE, "XSISCRIPTS" ), vbOK )

			if( l_res = vbYes ) then
				io_ConstructionMode = siConstructionModeAnimation

				l_constructionmodeautoupdate = GetValue( "preferences.modeling.constructionmodeautoupdate" )

				if l_constructionmodeautoupdate then
					SetValue "context.constructionmode", siConstructionModeAnimation
				end if

			end if

		end if

		set MyFlexEnv = FApplySelectedOp( io_connectionset, TRUE, io_AssignNew, 1 , io_ConstructionMode )

		'--------------------------------------------------------------------
		' Inspect flexible envelope
		'--------------------------------------------------------------------

		if TypeName (MyFlexEnv) <> "Nothing" then
			AutoInspect MyFlexEnv
		end if
		
		set ApplyFlexibleEnvelopeProc = MyFlexEnv
	End If

end Function


'------------------------------------------------------------------------------
' NAME:		SubComponent_Parent
'
' INPUT:	in_Item - SubComponent
'
' DESCRIPTION: Get the primitive from a subcomponent selection.
'
' This script is called by UI commands. The in_connectionset argument is updated with
' the connection set and propagate back for logging.
'
'------------------------------------------------------------------------------
function SubComponent_Parent( in_Item, byref io_parentObject )
	Dim oSubCompPath, oObjPath

	if InStrRev(in_Item.type,"SubComponent") then
		oSubCompPath = Left( in_Item.Value, InStr(in_Item.Value,"[")-1 )
		oObjPath = Left( oSubCompPath, InStrRev(oSubCompPath,".",-1,1)-1)
		set io_parentObject = getvalue( oObjPath )
	end if

end function

'------------------------------------------------------------------------------
' NAME:		ApplyFlexibleEnvelopeFunc
'
' INPUT:	in_connectionset - connection set containing objects for connection
' to flexible envelope
'
' DESCRIPTION: Apply flexible envelop op to input objects and start a 
' pick session to select the skeltons.
'
'------------------------------------------------------------------------------
function ApplyFlexibleEnvelopeFunc ( in_connectionset, in_AssignNew, in_ConstructionMode )
	set ApplyFlexibleEnvelopeFunc =	FApplySelectedOp( in_connectionset, FALSE, in_AssignNew, 1 , in_ConstructionMode )
end function

'------------------------------------------------------------------------------
' NAME:			LocalAssignFlexibleEnvelopeProc
'
' INPUT:		tagged points
'				list of selected objects
'				nb of deformers per point 
'
' DESCRIPTION:	Allows to set local assignment data for the Envelope Assignment
'				operator, i.e., allows to reassign selected (tagged) vertices
'				to picked Skeleton objects.
'
' This script is called by UI commands. The io_objects argument is updated with
' the connection set and propagate back for logging.
'
'------------------------------------------------------------------------------
sub LocalAssignFlexibleEnvelopeProc ( in_subcomp, io_objects, in_nbDeformers )

	'--------------------------------------------------------------------
	'	Apply Flexible Envelope operators (assignment and enforcer).
	'--------------------------------------------------------------------
	SILocalAssignFlexEnv in_subcomp, io_objects, TRUE , in_nbDeformers

end sub

'------------------------------------------------------------------------------
' NAME:			LocalAssignFlexibleEnvelopeFunc
'
' INPUT:		tagged points
'				list of selected objects
'				nb of deformers per point 
'
' DESCRIPTION:	Allows to set local assignment data for the Envelope Assignment
'				operator, i.e., allows to reassign selected (tagged) vertices
'				to picked Skeleton objects.
'
'------------------------------------------------------------------------------
function LocalAssignFlexibleEnvelopeFunc ( in_subcomp, in_objects, in_nbDeformers)

	'--------------------------------------------------------------------
	'	Apply Flexible Envelope operators (assignment and enforcer).
	'--------------------------------------------------------------------
	set LocalAssignFlexibleEnvelopeFunc = SILocalAssignFlexEnv( in_subcomp, in_objects, FALSE , in_nbDeformers )

end function

'******************************************************************************
' Deform By Spine Operator FUNCTIONS
'******************************************************************************
'------------------------------------------------------------------------------
' NAME:		ApplyDeformBySpineProc
'
' INPUT:	list of selected objects
'
' DESCRIPTION: 
'
' This script is called by UI commands. The io_connectionset argument is updated with
' the connection set and propagate back for logging.
'
'------------------------------------------------------------------------------
Function ApplyDeformBySpineProc ( io_connectionset , in_ConstructionMode )
	Dim createdObj

	'--------------------------------------------------------------------
	'	Apply Spine operators (assignment and enforcer).
	'--------------------------------------------------------------------
	
	set createdObj = FApplySelectedOp( io_connectionset, TRUE, 0, 3 , in_ConstructionMode )

	'--------------------------------------------------------------------
	' inspect created objects
	'--------------------------------------------------------------------
	if Not TypeName (createdObj) = "Nothing" then
		AutoInspect createdObj
	end if
	
	set ApplyDeformBySpineProc = createdObj
end Function

'------------------------------------------------------------------------------
' NAME:		ApplyDeformBySpineFunc
'
' INPUT:	list of selected objects
'
' DESCRIPTION: Apply Spine operators (assignment and enforcer).
'
'------------------------------------------------------------------------------
function ApplyDeformBySpineFunc ( in_connectionset , in_ConstructionMode )
	set ApplyDeformBySpineFunc = FApplySelectedOp( in_connectionset, FALSE, 0, 3 , in_ConstructionMode )
end function


'******************************************************************************
' Deform By Cage Operator FUNCTIONS
'******************************************************************************
'------------------------------------------------------------------------------
' NAME:		ApplyDeformByCageProc
'
' INPUT:	list of selected objects
'
' DESCRIPTION: 
'
' This script is called by UI commands. The io_connectionset argument is updated with
' the connection set and propagate back for logging.
'
'------------------------------------------------------------------------------
Function ApplyDeformByCageProc ( io_connectionset, in_ConstructionMode )
	Dim createdObj

	'--------------------------------------------------------------------
	'	Apply Cage operators (assignment and enforcer).
	'--------------------------------------------------------------------
	set createdObj = FApplySelectedOp( io_connectionset, TRUE, 0, 2 , in_ConstructionMode )

	'--------------------------------------------------------------------
	' inspect created objects
	'--------------------------------------------------------------------
	if Not TypeName (createdObj) = "Nothing" then
		AutoInspect createdObj
	end if

	set ApplyDeformByCageProc = createdObj
end Function

'------------------------------------------------------------------------------
' NAME:		ApplyDeformByCageFunc
'
' INPUT:	list of selected objects
'
' DESCRIPTION: Apply Cage operators (assignment and enforcer).
'
'------------------------------------------------------------------------------
function ApplyDeformByCageFunc ( in_connectionset , in_ConstructionMode )
	set ApplyDeformByCageFunc = FApplySelectedOp( in_connectionset, FALSE, 0, 2, in_ConstructionMode )
end function



'******************************************************************************
' Snap Face Operator FUNCTIONS
'******************************************************************************
'------------------------------------------------------------------------------
' NAME:		FApplySnapFaceOp
'
' INPUT:	- in_Objs	: list of input objects to connect
'			- in_ConnectType : node(0), branch(1), unspecified connection mode.
'			- in_Interactive: force a pick session if true
'			- in_OperationMode : define if we are in siPersistentOperation or siImmediateOperation
'			- out_outputObjs: objects created by the ApplyOp
'			- out_cnxset:	  the snap operator connection set
'			- out_inputobjs:  the cluster's containing 3d object
'
' DESCRIPTION: Apply the SnapFace operator to a list of objects selecting
' the objects afterwards.
'
' This script is called by both the UI and the generic ApplySnapOp commands. 
'
'------------------------------------------------------------------------------
function FApplySnapFaceOp ( in_preset, in_Objs, in_ConnectType, in_OperationMode, in_Interactive, _
	byref out_outputObjs, _
	byref out_cnxset, _
	byref out_inputobjs )
	
	Dim l_cluster, l_clsList, l_ObjsToSelect, l_cnxsetstring

	'--------------------------------------------------------------------
	' Apply the SnapFace operator. Store the output operator to inspect
	' it before exiting.
	'--------------------------------------------------------------------
	set FApplySnapFaceOp = FApplyOp( "SnapFace", in_Objs, in_ConnectType, in_OperationMode, _
		in_Interactive, out_outputObjs, out_cnxset, l_cnxsetstring, Nothing )

	if TypeName(FApplySnapFaceOp) = "Nothing" then
		exit function
	end if

	'--------------------------------------------------------------------
	' The resultant ConnectionSet contains 3 listd:
	'		- List of input objects passed to the command 
	'		- Picking session list
	'		- The created geometry
	'--------------------------------------------------------------------
	
	set out_cnxset = out_cnxset(0).obj

	set l_clsList = out_cnxset.Expand

	if TypeName(l_clsList) <> "Nothing" then
		set l_clsList = SIFilter(l_clsList,siClusterFilter)
	end if

	'--------------------------------------------------------------------
	' Collect the list of objects containing clusters
	'--------------------------------------------------------------------

	if TypeName(l_clsList) <> "Nothing" then
		set out_inputobjs = CreateObject("XSI.Collection")

	'--------------------------------------------------------------------
		' Extract the object from each cluster and add it to out_inputobjs.
	'--------------------------------------------------------------------
		for each l_cluster in l_clsList
			out_inputobjs.Add l_cluster.Parent3DObject
		next
	end if

end function

'------------------------------------------------------------------------------
' NAME:		ApplySnapFaceOpProc
'
' INPUT:	- in_Objs	: list of input objects to connect
'			- in_ConnectType : node(0), branch(1), unspecified connection mode.
'			- out_outputObjs: unused
'
' DESCRIPTION: Apply the SnapFace operator to a list of objects selecting
' the objects afterwards.
'
' This script is called by UI commands. The in_Objs argument is updated with
' the connection set and propagate back for logging.
'
'------------------------------------------------------------------------------
Function ApplySnapFaceOpProc ( in_Objs, in_ConnectType, in_ImmediateMode,byref out_outputObjs )
		
	Dim l_snapFaceOp, l_outObjs, l_ConnectionSet, l_ObjsToSelect

	'--------------------------------------------------------------------
	' Apply the SnapFace operator. Store the output operator to inspect
	' it before exiting.
	'--------------------------------------------------------------------
	set l_snapFaceOp = FApplySnapFaceOp( "SnapFace", in_Objs, in_ConnectType, _
		in_ImmediateMode, TRUE, l_outObjs, l_ConnectionSet, l_ObjsToSelect )

	'--------------------------------------------------------------------
	' Propagate the output objects returned by FApplyOp.
	'--------------------------------------------------------------------
	set in_Objs = 	l_ConnectionSet
	set out_outputObjs = l_outObjs

	'--------------------------------------------------------------------
	' Select the object(s), if there are any.
	'--------------------------------------------------------------------
	if Not TypeName (l_ObjsToSelect) = "Nothing" then
		SelectObj l_ObjsToSelect
	end if

	'--------------------------------------------------------------------
	' Inspect the applied operator.
	'--------------------------------------------------------------------
	if Not TypeName (l_snapFaceOp) = "Nothing" then
		AutoInspect l_snapFaceOp
	end if

	set ApplySnapFaceOpProc = l_snapFaceOp
end Function

'------------------------------------------------------------------------------
' NAME:		ApplySnapFaceOpFunc
'
' INPUT:	- in_Objs	: list of input objects to connect
'			- in_ConnectType : node(0), branch(1), unspecified connection mode.
'			- out_outputObjs: list of output primitives generated 
'
' RETURN:	- snap operator
'
' DESCRIPTION: Apply the SnapFace operator to a list of objects selecting
' the objects afterwards.
'
'------------------------------------------------------------------------------
function ApplySnapFaceOpFunc ( in_Objs, in_ConnectType,in_ImmediateMode,  byref out_outputObjs )
	
	Dim l_snapFaceOp, l_outObjs, l_ConnectionSet, l_ObjsToSelect
	'--------------------------------------------------------------------
	' Apply the SnapFace operator. 
	'--------------------------------------------------------------------
	set l_snapFaceOp = FApplySnapFaceOp( "SnapFace", in_Objs, in_ConnectType, _
		in_ImmediateMode, FALSE, l_outObjs, l_ConnectionSet, l_ObjsToSelect )

	'--------------------------------------------------------------------
	' Select the object(s), if there are any.
	'--------------------------------------------------------------------
	if Not TypeName (l_ObjsToSelect) = "Nothing" then
		SelectObj l_ObjsToSelect
	end if

	'--------------------------------------------------------------------
	' return operator and created objects
	'--------------------------------------------------------------------
	set ApplySnapFaceOpFunc = l_snapFaceOp
	set out_outputObjs = l_outObjs

end function

'******************************************************************************
' Up Vector Operator FUNCTIONS
'******************************************************************************

'------------------------------------------------------------------------------
'						Up Vector related UI scripts
'
'
' These scripts enable the user to select an object instead of one of its 
' constraints to apply an up vector constraint.
' There are 2 phases:
'	1. The validation phase where we check that the input objects have at least
'	   one constraint supporting the up vector constraint. Messages can be issued
'	   if the input objects are not valid, or if a given objects has too many
'	   constraints supporting the up vector constraint.
'	2. The execution phase where we call the generic script ApplyOpProc with
'	   the previously found constraints.
'
' The scripts are made of:
'	the function		ApplyUpVectorOpProc
'	the function		FGetFirstValidConstraintForUpVector
'------------------------------------------------------------------------------



'------------------------------------------------------------------------------
' NAME:		ApplyUpVectorOpProc
'
' INPUT:	- in_Preset	: describes the operator to be applied (up vector definer)
'			- io_ConnectionSet	: connectionset containing list of input objects to connect
'			- in_ConnectType : node(0), branch(1), unspecified connection mode.
'			- out_createdObjs: list of operator(s) created
'			- out_outputObjs: list of output primitives generated 
' DESCRIPTION: Apply the up vector operator to a list of objects selecting on 
' exit the output objects generated and inspecting the operators installed.
'------------------------------------------------------------------------------
Function ApplyUpVectorOpProc (in_Preset, _
 					     io_ConnectionSet, _
						 in_ConnectType, _
						 in_OperationMode, _
						 byref out_OutputObjs)
	
	Dim  l_CreatedOperators, l_OutObjs, l_ConnectionSetList, l_ObjectsList, l_Element, l_Count, _ 
		 l_Cns, l_CnsList, l_FirstValidCns, l_FirstValidCnsList, l_Message, l_Title, l_ConnectionSetListString
	
	Set l_OutObjs = Nothing
	set l_FirstValidCnsList = CreateObject("XSI.Collection")

	l_Title = XSIUtils.Translate( IDS_APPLY_UP_VECTOR_TITLE, "XSISCRIPTS" )

	'--------------------------------------------------------------------
	' If the list is empty, we issue a message and exit the function.
	'--------------------------------------------------------------------
	l_Message = XSIUtils.Translate( IDS_APPLY_UP_VECTOR_MSG1, "XSISCRIPTS" )

	If IsEmpty (io_ConnectionSet) Or TypeName (io_ConnectionSet) = "Nothing" Or io_ConnectionSet = "" Then
		SIMsgBox l_Message, vbOKOnly + vbInformation, l_Title, vbOK
		Err.Raise siErrCancelled
	End If
	
	'--------------------------------------------------------------------
	' Extract all objects from the first list contained in connection set
	' and store them in the objects list. These are the objects we want 
	' to apply the up vector constraint to. We temporarily disable the 
	' automatic handling of runtime errors to access the first items
	' in the CnxSet. Not doing so will lead to a stop in the script
	' execution. The statement On Error Goto 0 resumes the automatic
	' error handling. 
	'--------------------------------------------------------------------

	set l_ObjectsList = io_ConnectionSet.Groups(0).obj

	'--------------------------------------------------------------------
	' Get the constraints applied to the input objects that support the 
	' up vector constraint. We put them in a list of valid constraints
	'--------------------------------------------------------------------
	For Each l_Element In l_ObjectsList
		set l_FirstValidCns = FGetFirstValidConstraintForUpVector(l_Element, l_Count)
	
		'----------------------------------------------------------------
		' If more than 1 constraint applied to the object supports the 
		' up vector constraint, then we issue a message explaining what
		' the user has to do before proceeding on to the next object.
		'----------------------------------------------------------------
		If (l_Count > 1) Then
			l_Message = XSIUtils.Translate( IDS_APPLY_UP_VECTOR_MSG2, "XSISCRIPTS", l_Element)

			SIMsgBox l_Message, vbOKOnly + vbInformation, l_Title, vbOK
			
			'------------------------------------------------------------
			' If there is only 1 object in the list, we exit the function
			'------------------------------------------------------------
			If (l_ObjectsList.Count = 1) Then
				Err.Raise siErrCancelled
			End If

		'----------------------------------------------------------------
		' Else if the counter is not zero, we add our valid constraint to
		' a list.
		'----------------------------------------------------------------
		ElseIf (l_Count <> 0) Then
			l_FirstValidCnsList.Add l_firstValidCns			
		End If		
	Next
		
	'--------------------------------------------------------------------
	' If the list of valid constraints is not empty, we set them as the
	' input objects of FApplyOp. Else we exit the function.
	'--------------------------------------------------------------------
	If l_FirstValidCnsList.Count > 0 Then
		Set io_ConnectionSet = l_FirstValidCnsList

	'--------------------------------------------------------------------
	' Else we issue a message to the user and we cancel the logging of the
	' command and exit the function.
	'--------------------------------------------------------------------
	Else
		l_Message = XSIUtils.Translate( IDS_APPLY_UP_VECTOR_MSG3, "XSISCRIPTS" )
		
		SIMsgBox l_Message, vbOKOnly + vbInformation, l_title, vbOK
		Err.Raise siErrCancelled
	End If	

	Set l_CreatedOperators = FApplyOp( in_Preset, io_ConnectionSet, in_ConnectType, in_OperationMode,_
		TRUE, l_OutObjs, l_ConnectionSetList, l_ConnectionSetListString, Nothing )

	'--------------------------------------------------------------------
	' Propagate the output objects returned by FApplyOp.
	'--------------------------------------------------------------------
	set io_ConnectionSet = l_ConnectionSetList(0).obj

	'--------------------------------------------------------------------
	' Select the output object(s); if there are any.
	'--------------------------------------------------------------------
	If Not TypeName (l_OutObjs) = "Nothing" Then
		SelectObj l_OutObjs
	End If

	'--------------------------------------------------------------------
	' Inspect the operator(s).
	'--------------------------------------------------------------------
	If Not TypeName (l_CreatedOperators) = "Nothing" Then
		AutoInspect l_CreatedOperators
	End If

	set out_OutputObjs = l_OutObjs
	set ApplyUpVectorOpProc  = l_CreatedOperators
End Function


'------------------------------------------------------------------------------
' NAME:		FGetFirstValidConstraintForUpVector
'
' INPUT:	- in_Element		: describes the element we want to check
'			- out_Counter		: number of constraints on the element that support 
'								  the up vector constraint
' DESCRIPTION: Gets the first constraint applied to the input element that supports 
' the up vector constraint. Also outputs the number of constraints supporting the 
' up vector constraint.
'------------------------------------------------------------------------------
function FGetFirstValidConstraintForUpVector(in_Element, _
											 byref out_Counter)
	
	Dim l_Cns, l_ValidCns, l_CnsList, l_Value

	Set FGetFirstValidConstraintForUpVector = Nothing
	
	out_Counter = 0.0

	'--------------------------------------------------------------------
	' Do not stop if there is an error on the EnumElements/GetValue
	' Otherwise an error will be raised if the elements we are checking do not
	' support the thing we are looking for and we don't want this.
	'--------------------------------------------------------------------
	On Error Resume Next
	
	Set l_CnsList = EnumElements(in_Element & ".kine.Constraints")
	
	'--------------------------------------------------------------------
	' If the enumelements failed on the element, it's because this
	' element is likely to be a constraint and not an object.
	' This typically happens when the user has chosen a specific
	' constraint to apply the up vector to.
	' In this case we ask for the value of the upvct_Active field of the 
	' constraint.
	' If the element is not a constraint which supports the up vector
	' then we exit the sub routine with a counter equal to 0.
	'--------------------------------------------------------------------
	If IsEmpty(l_CnsList) Then	
		l_Value = GetValue(in_Element & ".upvct_active")
	
		If Not IsEmpty(l_Value) Then
			out_Counter = 1
			Set FGetFirstValidConstraintForUpVector = in_Element
			exit function
		Else
			out_Counter = 0
			exit function
		End If
	End If

	'--------------------------------------------------------------------
	' Does the current constraint support the up vector constraint ?
	' If so, the constraint is stored and output. So is the number of
	' constraints supporting the up vector
	'--------------------------------------------------------------------
	For Each l_Cns In l_CnsList
		Set l_ValidCns = EnumElements(l_Cns & ".upvct_active")
		
		If Not Isempty (l_ValidCns) Then 
			If (out_Counter = 0) Then
				Set FGetFirstValidConstraintForUpVector = l_Cns
			End If
			
			out_Counter = out_Counter + 1	
		End If
	Next

End function

'******************************************************************************
' PropVolume Operator FUNCTIONS
'******************************************************************************
'------------------------------------------------------------------------------
' NAME:		ApplyPropVolumeOpProc
'
' INPUT:	- in_Preset	: describes the operator to be applied
'			- io_ConnectionSet	: connectionset containing list of input objects to connect
'			- in_ConnectType : node(0), branch(1), unspecified connection mode.
'			- inout_OperationMode : define if we are in siPersistentOperation or siImmediateOperation
'			- in_Interactive: force a pick session if true
'			- out_outputObjs: no used
'
' RETURN:	list of operator(s) created
'
' DESCRIPTION: Apply an operator to a list of objects selecting on exit the
' output objects generated and inspecting the operator installed.
'
' This script is called by UI commands. The io_ConnectionSet argument is updated with
' the connection set and propagate back for logging. The inout_OperationMode is also updated using the status
' of a userpref.
'
'------------------------------------------------------------------------------
Function ApplyPropVolumeOpProc ( in_Preset, io_ConnectionSet, in_ConnectType, in_bDisableAutoInspect, _
							byref inout_OperationMode, byref out_outputObjs, byref inout_constructionMode )
	
	dim  l_CreatedOperators, l_outObjs, l_ConnectionSetList, l_bOperationMode, l_ConnectionSetListString, i, j
	set l_outObjs = Nothing

	'--------------------------------------------------------------------
	' Get the Current Operation mode and upadte the inout_OperationMode
	'--------------------------------------------------------------------

	l_bOperationMode = GetUserPref("OperationMode")

	if l_bOperationMode then
		inout_OperationMode = siImmediateOperation
	else
	    inout_OperationMode = siPersistentOperation
	end if
	
	set l_CreatedOperators = FApplyOp( in_Preset, io_ConnectionSet, in_ConnectType, inout_OperationMode, _
		TRUE, l_outObjs, l_ConnectionSetList, l_ConnectionSetListString , inout_constructionMode )

	'--------------------------------------------------------------------
	' propagate connection set to log back to caller thru io_ConnectionSet
	'--------------------------------------------------------------------
	set io_ConnectionSet = l_ConnectionSetListString

	'--------------------------------------------------------------------
	' Initialize the operators
	'--------------------------------------------------------------------
	if Not TypeName (l_CreatedOperators) = "Nothing" And Not TypeName (l_ConnectionSetList) = "Nothing" then
		'--------------------------------------------------------------------
		' Initialize the operators
		'--------------------------------------------------------------------
		InitPropVolume l_CreatedOperators

		'--------------------------------------------------------------------
		' Select the control object
		'--------------------------------------------------------------------
		SelectObj l_ConnectionSetList(0).obj.Groups(1).obj

		'--------------------------------------------------------------------
		' Inspect the operator(s).
		'--------------------------------------------------------------------
		if l_bOperationMode = false and Not in_bDisableAutoInspect then
			AutoInspect l_CreatedOperators
		end if
	end if
	
	set out_OutputObjs = l_outObjs
	
	set ApplyPropVolumeOpProc = l_CreatedOperators
end Function

' this is a copy&paste of the same function found in uixsiscripts.vbs
Function FGetParentObj( in_obj )
	Dim l_owners, l_parent

	set FGetParentObj = Nothing
	
	' If we receive a child 3d object, the 1st enum will
	' get us to the list of items that point to that 3d object...
	set l_owners =  EnumElements( in_obj, FALSE )
	if IsEmpty(l_owners) Or TypeName(l_owners) = "Nothing" Then
		exit function
	end if

	' ..the first of which will be the 'Children' component (ex: cube.Children)
	set l_parent =  EnumElements( l_owners(0), FALSE )

	' Protection for when we reach the Scene_Root (parent will be Project)
	if l_parent = "Project" then
		set FGetParentObj = in_obj
		exit function
	end if

	set FGetParentObj = l_parent
end function

'******************************************************************************
' ClusterCenter Operator FUNCTIONS
'******************************************************************************
'------------------------------------------------------------------------------
' NAME:		GetAverageClusterPosition
'
' INPUT:	- in_InputObjs		:  Cluster for which avg. pos. will be computed
'
' RETURN:	- vector with avg pos or Nothing
'
' DESCRIPTION: Compute avg pos of input cluster in local space. 
'------------------------------------------------------------------------------
function GetAverageClusterPosition( in_Cluster )
	dim oSubComponent
	dim oComponentCollection
	dim aPositionArray
	dim l_AvgPos
	dim l_FinalAvgX
	dim l_FinalAvgY
	dim l_FinalAvgZ
	dim l_LocalAvgX
	dim l_LocalAvgY
	dim l_LocalAvgZ
	dim l_NbElements
	dim l_NbItems
	dim oItem
	dim oPnt
	dim i

	set GetAverageClusterPosition = nothing

	if( typename(in_Cluster) <> "Cluster" ) then
		exit function
	end if

	set oSubComponent = in_Cluster.CreateSubComponent

	if( ( oSubComponent.type <> "pntSubComponent"  )   and _
	    ( oSubComponent.type <> "edgeSubComponent" )   and _
	    ( oSubComponent.type <> "polySubComponent" )   and _
	    ( oSubComponent.type <> "subsrfSubComponent" ) ) then
		exit function
	end if

	set oComponentCollection = oSubComponent.ComponentCollection
	l_NbElements = oComponentCollection.count

	if( l_NbElements = 0 ) then
		exit function
	end if

	l_FinalAvgX = 0.0
	l_FinalAvgY = 0.0
	l_FinalAvgZ = 0.0

	'To have a memory layout consistent with wath we have in C++
	' the array is inverted. This is because safearray's are Column-major
	if( oSubComponent.type = "pntSubComponent" ) then
		aPositionArray = oComponentCollection.PositionArray
		for i = lbound(aPositionArray,2) to ubound(aPositionArray,2)
			l_FinalAvgX = l_FinalAvgX + aPositionArray(0,i)
			l_FinalAvgY = l_FinalAvgY + aPositionArray(1,i)
			l_FinalAvgZ = l_FinalAvgZ + aPositionArray(2,i)
		next
	else
		for each oItem in oComponentCollection 
			l_LocalAvgX = 0.0
			l_LocalAvgY = 0.0
			l_LocalAvgZ = 0.0

			aPositionArray = oItem.Points.PositionArray
			for i = lbound(aPositionArray,2) to ubound(aPositionArray,2)
				l_LocalAvgX = l_LocalAvgX + aPositionArray(0,i)
				l_LocalAvgY = l_LocalAvgY + aPositionArray(1,i)
				l_LocalAvgZ = l_LocalAvgZ + aPositionArray(2,i)
			next
			
			l_NbItems = oItem.Points.count
			l_LocalAvgX = l_LocalAvgX / l_NbItems
			l_LocalAvgY = l_LocalAvgY / l_NbItems
			l_LocalAvgZ = l_LocalAvgZ / l_NbItems

			l_FinalAvgX = l_FinalAvgX + l_LocalAvgX
			l_FinalAvgY = l_FinalAvgY + l_LocalAvgY
			l_FinalAvgZ = l_FinalAvgZ + l_LocalAvgZ
		next
	end if

	set l_AvgPos = XSIMath.CreateVector3()
	
	l_AvgPos.x = l_FinalAvgX / l_NbElements
	l_AvgPos.y = l_FinalAvgY / l_NbElements
	l_AvgPos.z = l_FinalAvgZ / l_NbElements

	set GetAverageClusterPosition = l_AvgPos
end function

'------------------------------------------------------------------------------
' NAME:		FCreateClusterCenterWithNull
'
' INPUT:	- in_InputObjs		: list of cluster objects
'			- out_Null			: Created connected null
'
' RETURN:	- list of newly created operators
'
' DESCRIPTION: Apply a ClusterCenter op to each input cluster, the op is 
' applied on each cluster only one null is created to drive them. 
'------------------------------------------------------------------------------
function FCreateClusterCenterWithNull( in_InputObjs, out_Null, in_ConstructionMode )

	dim l_NbClusters
	dim MyObjectList
	dim MyNewClusterList
	dim MySubCompList
	dim FinalCnxSet
	dim l_CreatedObjs
	dim l_NULLName
	dim l_ListNull
	dim l_op
	dim l_ConnectionSet
	dim MyParent
	dim i
	dim l_AvgX
	dim l_AvgY
	dim l_AvgZ
	dim l_bSameParent
	dim l_PrevConstructionMode

	set FCreateClusterCenterWithNull = nothing

	'Parse inputs.  Get first connection group sets
	'------------------------------------------------------------------
	' Convert subcomponents (i.e. tag clusters) to clusters
	'------------------------------------------------------------------
	set MyObjectList = FSubComponents2Clusters( in_InputObjs, MyNewClusterList, MySubCompList )

	'------------------------------------------------------------------
	' remove tagclusters from selection
	'------------------------------------------------------------------
	if Not IsEmpty (MyNewClusterList) Then
		RemoveFromSelection MySubCompList
	end if

	'------------------------------------------------------------------
	' Make sure to only take clusters (note: if there were
	' already selected clusters, they are kept)
	'------------------------------------------------------------------
	set MyObjectList = SIFilter( MyObjectList, siClusterFilter )
	
	if TypeName( MyObjectList ) = "Nothing" Then
		Exit function
	end if

	l_NbClusters = MyObjectList.count

	if( l_NbClusters = 0 ) then
		Exit function
	end if

	'--------------------------------------------------------------
	' Create the driving NULL.
	' If all clusters are under the same object then nest it under that object
	' Name of the driving NULL reflects:
	'  1) One cluster on one object then <3DOName>_<ClusterName>_ClsCtr
	'  2) Many clusters under one object then <3DOName>_ClsCtr
	'  3) Many clusters under many objects then ClsCtr
	'--------------------------------------------------------------
	set MyParent = MyObjectList(0).CreateSubComponent.Parent3DObject
	l_NULLName = MyParent.name
	l_bSameParent = TRUE
	if( l_NbClusters = 1 ) then
		l_NULLName = l_NULLName & "_" & MyObjectList(0).name
	else
		for i=1 to l_NbClusters - 1
			if( Not( MyParent.IsEqualTo( MyObjectList(i).CreateSubComponent.Parent3DObject ) ) )then
				l_bSameParent = FALSE
				exit for
			end if
		next
	end if

	if( l_bSameParent = TRUE ) then
		set out_Null = SIGetPrim( "Null", l_NULLName & "_ClsCtr", CStr(MyParent.fullname) ).value("Value") 
	else
		set out_Null = SIGetPrim( "Null", "ClsCtr" ).value("Value") 
	end if


	'--------------------------------------------------------------
	' Get cluster center of each cluster.  Take average of the cluster centers
	'--------------------------------------------------------------
	l_AvgX = 0.0
	l_AvgY = 0.0
	l_AvgZ = 0.0

	for i=0 to l_NbClusters-1 
		dim	l_Pos

		set l_Pos = GetAverageClusterPosition( MyObjectList(i) )
		if( typename( l_Pos ) <> "Nothing" ) then
			set MyParent = MyObjectList(i).CreateSubComponent.Parent3DObject
			set l_Pos = XSIMath.MapObjectPositionToWorldSpace( MyParent.Kinematics.Global.Transform, l_Pos) 

			l_AvgX = l_AvgX + l_Pos.x
			l_AvgY = l_AvgY + l_Pos.y
			l_AvgZ = l_AvgZ + l_Pos.z
		end if
	next

	l_AvgX = l_AvgX / l_NbClusters
	l_AvgY = l_AvgY / l_NbClusters
	l_AvgZ = l_AvgZ / l_NbClusters

	'--------------------------------------------------------------
	' Position NULL before applying op else snapshots will be invalid
	'--------------------------------------------------------------
	Translate out_Null, l_AvgX, l_AvgY, l_AvgZ, 0

'	Does not return the created operator (It does return the driving object): Will not use...  Could get it via stack op...
'	for i=0 to l_NbClusters-1 
'		set MyObjectList(i).ClusterReference = out_Null
'	next

	'--------------------------------------------------------------
	' Create Connection group sets.
	'--------------------------------------------------------------
	set FinalCnxSet = CreateObject("XSI.Collection")
	set l_ListNull  = CreateObject("XSI.Collection")

	l_ListNull.Add( out_Null )
	for i=0 to l_NbClusters-1 
		dim l_GroupSet
		dim l_ListCls
		set l_GroupSet = CreateObject("XSI.connectionset")
		set l_ListCls  = CreateObject("XSI.collection")

		l_ListCls.add( MyObjectList(i))
		l_GroupSet.AddGroup( l_ListCls )
		l_GroupSet.AddGroup( l_ListNull)

		FinalCnxSet.Add( l_GroupSet )
	next


	' Switch to the specified construction mode
	l_PrevConstructionMode = GetValue( "context.constructionmode" )
	SetValue "context.constructionmode", in_ConstructionMode


	'--------------------------------------------------------------
	' apply the cluster center operator
	'--------------------------------------------------------------
	set l_CreatedObjs = CreateObject("XSI.Collection")
	for each l_ConnectionSet in FinalCnxSet
		set l_op = ApplyOperator( "ClusterCenter", l_ConnectionSet.obj, siUnspecified )
		l_CreatedObjs.Add l_op
	next

	' Switch to previous construction mode
	SetValue "context.constructionmode", l_prevConstructionMode


	set FCreateClusterCenterWithNull = l_CreatedObjs

End Function

'------------------------------------------------------------------------------
' NAME:		CreateClusterCenterWithNullProc
'
' INPUT:	- in_InputObjs		: list of cluster objects
'
' RETURN:	- list of newly created operators
'
' DESCRIPTION: Command script procedure for applying a ClusterCenter op on 
' input objects.
'------------------------------------------------------------------------------
function CreateClusterCenterWithNullProc( in_InputObjs, byref in_ConstructionMode )
	dim l_allNulls

	set CreateClusterCenterWithNullProc = Nothing

	if IsEmpty( in_InputObjs ) or in_InputObjs.count = 0 then
		LogMessage "CreateClusterCenter: " & XSIUtils.Translate( IDS_CREATE_CLUSTER_MSG, "XSISCRIPTS" ), siInfo
		SIMsgBox XSIUtils.Translate( IDS_CREATE_CLUSTER_MSG, "XSISCRIPTS" ), vbOKOnly + vbExclamation, XSIUtils.Translate( "Warning", "XSISCRIPTS" ), vbOK
		exit function
	end if
		
	set CreateClusterCenterWithNullProc = FCreateClusterCenterWithNull( in_InputObjs, l_allNulls , in_ConstructionMode )

	if TypeName(CreateClusterCenterWithNullProc) = "Nothing" then
		LogMessage "CreateClusterCenter: " & XSIUtils.Translate( IDS_CREATE_CLUSTER_MSG, "XSISCRIPTS" ), siInfo
		SIMsgBox XSIUtils.Translate( IDS_CREATE_CLUSTER_MSG, "XSISCRIPTS" ), vbOKOnly + vbExclamation, XSIUtils.Translate( "Warning", "XSISCRIPTS" ), vbOK
		exit function
	end if
		
	'--------------------------------------------------------------------
	' add all input/created/picked nulls to selection
	'--------------------------------------------------------------------
	if not IsEmpty ( l_allNulls ) then
		' select the input nulls
		deselectall
		SelectObj l_allNulls
	end if

	'--------------------------------------------------------------------
	' Inspect the operator(s).
	'--------------------------------------------------------------------
	AutoInspect CreateClusterCenterWithNullProc
end function

'------------------------------------------------------------------------------
' NAME:		CreateClusterCenterWithNullFunc
'
' INPUT:	- in_InputObjs		: list of cluster objects
'
' RETURN:	- list of newly created operators
'
' DESCRIPTION: Command script procedure for applying a ClusterCenter op on 
' input objects.
'------------------------------------------------------------------------------
function CreateClusterCenterWithNullFunc( in_InputObjs, byref in_ConstructionMode )
	dim l_allNulls

	set CreateClusterCenterWithNullFunc = Nothing

	if IsEmpty( in_InputObjs ) or in_InputObjs.count = 0 then
		LogMessage "CreateClusterCenter: Please tag some points or select a cluster first.", siError
		exit function
	end if
		
	set CreateClusterCenterWithNullFunc = FCreateClusterCenterWithNull( in_InputObjs, l_allNulls, in_ConstructionMode )

	if TypeName(CreateClusterCenterWithNullFunc) = "Nothing" then
		LogMessage "CreateClusterCenter: Please tag some points or select a cluster first.", siError
		exit function
	end if
		
	'--------------------------------------------------------------------
	' add all input/created/picked nulls to selection
	'--------------------------------------------------------------------
	if not IsEmpty ( l_allNulls ) then
		' select the input nulls
		deselectall
		SelectObj l_allNulls
	end if
end function

'------------------------------------------------------------------------------
' NAME:		FCreateClusterCenter - Old version kept for backcomp with scripting
'
' INPUT:	- in_InputObjs		: list of cluster objects
'			- in_nullList		: list of nulls to connect
'			- in_bSupplyMode	: specify how the missing nulls are supplied:
'								  true (creation), false (picked)
'			- out_allNulls		: all connected nulls
'
' RETURN:	- list of newly created operators
'
' DESCRIPTION: Apply a ClusterCenter op to each input cluster, the op is 
' applied on each cluster:null pair provided by the input lists. Missing nulls 
' can be either created or picked depending of the supply mode value.
'------------------------------------------------------------------------------
function FCreateClusterCenter( in_InputObjs, in_nullList, in_bSupplyMode, _
	out_allNulls, in_ConstructionMode )

	Dim UsePicking, l_nVertices, MyItem, MyObj, l_Pos, l_null, _
		FinalCnxSet, l_MyObjList, MyObjectList, MyNewClusterList, _
		MySubCompList, l_CreatedObjs, l_ConnectionSetList, l_Operators, _
		l_nbInputNulls, l_nbInputObjs, l_nIndex, l_nullListToLog, _
		l_outOperators, l_allNulls, l_item, l_ConnectionSetListString, _
		l_OneCtr_forMultiObj, l_MultiObjTotalX, l_MultiObjTotalY, l_MultiObjTotalZ, _
		l_CurClusterList, My3DObjectList, l_3DObjectName, _
		l_namestr, l_multi3dobj, MyParentItem, MyParentId, l_DummyListForMyItem, l_DummyListForNull


	set FCreateClusterCenter = nothing

	if IsEmpty(in_InputObjs) Or TypeName(in_InputObjs) = "Nothing" Then
		Exit function
	end if

	'------------------------------------------------------------------
	' Convert subcomponents (i.e. tag clusters) to clusters
	'------------------------------------------------------------------
	set l_MyObjList = FSubComponents2Clusters( in_InputObjs, MyNewClusterList,_
		MySubCompList )

	'------------------------------------------------------------------
	' remove tagclusters from selection
	'------------------------------------------------------------------
	if Not IsEmpty (MyNewClusterList) Then
		RemoveFromSelection MySubCompList
	end if

	'------------------------------------------------------------------
	' Make sure to only take clusters (note: if there were
	' already selected clusters, they are kept)
	'------------------------------------------------------------------
	set MyObjectList = SIFilter( l_MyObjList, siClusterFilter )
	
	if TypeName( MyObjectList ) = "Nothing" Then
		Exit function
	end if

	set l_nullListToLog = nothing
	set l_outOperators = nothing
	set l_Pos = nothing
	set l_allNulls = nothing

	l_nbInputNulls = in_nullList.count
	l_nVertices = 0

	'------------------------------------------------------------------
	' If we are to generate a new cluster center, and if the selection
	' contains more than one tag set (or cluster), we will create
	' only a single cluster center for it all.
	'------------------------------------------------------------------
	l_OneCtr_forMultiObj = CBool(in_bSupplyMode and MyObjectList.count > 1)

	if ( l_OneCtr_forMultiObj ) then

		l_MultiObjTotalX = 0.0
		l_MultiObjTotalY = 0.0
		l_MultiObjTotalZ = 0.0
		l_3DObjectName = ""

		'------------------------------------------------------------------
		' Loop through all clusters and check if they all have the same
		' 3d object as their parent, in this case we will name the cluster
		' center after that object, otherwize the cluster center
		' will just be named "ClsCtr" and will not be parented to any object.
		'------------------------------------------------------------------
		l_nIndex = 0
		l_multi3dobj = False
		For Each MyItem in MyObjectList
			'------------------------------------------------------------------
			' Gets to the object that own the cluster
			'------------------------------------------------------------------
			set MyParentItem = EnumElements( MyItem, FALSE )
			set MyParentItem = EnumElements( MyParentItem(0), FALSE )
			set MyParentItem = EnumElements( MyParentItem(0), FALSE )
			set MyParentItem = EnumElements( MyParentItem(0), FALSE )

			'---- JTimanus (June, 2002)
			'-  It is possible that enum elements will return a string of multiple parent objects
			'-  We only need the first parent, so assign the objects to an array, and enumerate on the
			'-  first parent to get the owner of the cluster.
			set MyParentItem = EnumElements( MyParentItem(0), FALSE )
			set MyParentItem = EnumElements( MyParentItem(0), FALSE ) 

			set MyParentId = MyParentItem(0)

			if ( l_nIndex = 0 ) then
				l_3DObjectName = MyParentId.Name
			else
				if MyParentId.Name <> l_3DObjectName then
					l_3DObjectName = ""
					l_multi3dobj = True
				end if
			end if
	
			l_nIndex = l_nIndex + 1
		next

		'------------------------------------------------------------------
		' Create the cluster center null
		'------------------------------------------------------------------
		if ( l_multi3dobj ) then
			set l_null = SIGetPrim( "Null", "ClsCtr" ).value("Value") 
		else
			set l_null = SIGetPrim( "Null", CStr(l_3DObjectName) & "_ClsCtr", CStr(l_3DObjectName) ).value("Value") 
		end if
	end if


	l_nIndex = 0
	For Each MyItem in MyObjectList

		set MyObj = MyItem.obj
		
		if in_bSupplyMode and l_nIndex >= l_nbInputNulls then
			Dim i, MyParentObj, MyGeometry0D, MyGeometry1D, MyGeometry2D, l_Elem, _
				l_UBound, l_LBound, l_TotalX, l_TotalY, l_TotalZ, l_NbComponent, _
				l_Rot, l_Scl, l_Trs, l_DegToRad, l_Mat, l_NewPos
			
			'------------------------------------------------------------------
			'Now we have to get the object on which the cluster is defined
			'------------------------------------------------------------------
			set MyParentItem = EnumElements( MyItem, FALSE )
			set MyParentItem = EnumElements( MyParentItem(0), FALSE )
			set MyParentItem = EnumElements( MyParentItem(0), FALSE )
			set MyParentItem = EnumElements( MyParentItem(0), FALSE )

			'---- JTimanus (June, 2002)
			'-  It is possible that enum elements will return a string of multiple parent objects
			'-  We only need the first parent, so assign the objects to an array, and enumerate on the
			'-  first parent to get the owner of the cluster.
			set MyParentItem = EnumElements( MyParentItem(0), FALSE )
			set MyParentItem = EnumElements( MyParentItem(0), FALSE ) 
			
			set MyParentId = MyParentItem(0)
			set MyParentObj = MyParentItem(0).obj
			set MyGeometry0D = MyParentObj.Geometry0D
			set MyGeometry1D = MyParentObj.Geometry1D
			set MyGeometry2D = MyParentObj.Geometry2D

			l_Elem = MyObj.Elements
			
			'------------------------------------------------------------------
			'Get The xform of the object on which the cluster is being created
			'------------------------------------------------------------------

			Set l_Pos = XSIMath.CreateVector3()
			Set l_Rot = XSIMath.CreateVector3()
			Set l_Scl = XSIMath.CreateVector3()
			Set l_Trs = XSIMath.CreateTransformation()
			Set l_Mat = XSIMath.CreateMatrix4()
			Set l_NewPos = XSIMath.CreateVector3()

			l_Pos.x = GetValue( MyParentItem & ".kine.global.posx" )
			l_Pos.y = GetValue( MyParentItem & ".kine.global.posy" )
			l_Pos.z = GetValue( MyParentItem & ".kine.global.posz" )

			l_Rot.x = GetValue( MyParentItem & ".kine.global.rotx" )
			l_Rot.y = GetValue( MyParentItem & ".kine.global.roty" )
			l_Rot.z = GetValue( MyParentItem & ".kine.global.rotz" )

			'Conversion of the rotation angles into radians
			l_DegToRad = 3.1415926535897932 / 180.0
			l_Rot.ScaleInPlace l_DegToRad

			l_Scl.x = GetValue( MyParentItem & ".kine.global.sclx" )
			l_Scl.y = GetValue( MyParentItem & ".kine.global.scly" )
			l_Scl.z = GetValue( MyParentItem & ".kine.global.sclz" )

			l_Trs.SetScaling l_Scl
			l_Trs.SetRotationFromXYZAngles l_Rot
			l_Trs.SetTranslation l_Pos

			l_Trs.GetMatrix4 l_Mat


			'------------------------------------------------------------------
			' Compute the size of the cluster
			'------------------------------------------------------------------
			l_LBound = LBound( l_Elem, 1 )
			l_UBound = UBound( l_Elem, 1 )

			l_TotalX = 0.0
			l_TotalY = 0.0
			l_TotalZ = 0.0
			l_NbComponent = 0

			'------------------------------------------------------------------
			' Apply object's transform to each vertex in cluster.
			' this converts the vertex's coordinates to global coordinates
			'------------------------------------------------------------------

			For i = l_LBound To l_UBound

				' Get the coordinates of the (i)th element of the cluster

				if MyItem.type = "poly" then
					MyGeometry2D.CenterPosition l_Elem(i), l_Pos
				elseif MyItem.type = "edge" then
					Dim l_array
					l_array = Array( l_Elem(i) )
					MyGeometry1D.AveragePosition l_array, l_Pos
				else
					MyGeometry0D.Position l_Elem(i), l_Pos
				end if

				' Apply transformation to this vertex
				l_NewPos.MulByMatrix4 l_Pos, l_Mat

				'--------------------------------------------------------------
				' Add the point to the total
				'--------------------------------------------------------------
				l_TotalX = l_TotalX + l_NewPos.x
				l_TotalY = l_TotalY + l_NewPos.y
				l_TotalZ = l_TotalZ + l_NewPos.z

				l_NbComponent = l_NbComponent + 1
			Next

			'--------------------------------------------------------------
			' Compute the cluster center position
			'--------------------------------------------------------------
			if l_NbComponent > 0 then
				l_TotalX = l_TotalX / l_NbComponent
				l_TotalY = l_TotalY / l_NbComponent
				l_TotalZ = l_TotalZ / l_NbComponent
			End if

			'--------------------------------------------------------------
			' If we create a single cls ctr for multiple objects,
			' cumulate the cluster center positions.
			'--------------------------------------------------------------
			l_MultiObjTotalX = l_MultiObjTotalX + l_TotalX
			l_MultiObjTotalY = l_MultiObjTotalY + l_TotalY
			l_MultiObjTotalZ = l_MultiObjTotalZ + l_TotalZ

			'--------------------------------------------------------------
			' Create a NULL at that position
			' The default name is the name of the object to which
			' we append the name of the cluster then '_ClsCtr'
			' In the case where we create a single NULL for multiple
			' objects, the null is already created.
			' Translate the NULL at the center of the cluster (or
			' the center of all of the clusters)
			'--------------------------------------------------------------
			if ( not l_OneCtr_forMultiObj ) then

				l_namestr = MyParentId & "_" & MyItem.Name & "_ClsCtr"
				set l_null = SIGetPrim( "Null", l_namestr, MyParentId ).value("Value")

				Translate l_null, l_TotalX, l_TotalY, l_TotalZ, 0
			else
				'--------------------------------------------------------------
				' Translation is done only when we process the last in this case.
				'--------------------------------------------------------------
				if ( l_nIndex >= MyObjectList.count - 1 ) then 
				
					l_MultiObjTotalX = l_MultiObjTotalX / MyObjectList.count
					l_MultiObjTotalY = l_MultiObjTotalY / MyObjectList.count
					l_MultiObjTotalZ = l_MultiObjTotalZ / MyObjectList.count
					Translate l_null, l_MultiObjTotalX, l_MultiObjTotalY, l_MultiObjTotalZ, 0
				end if
			end if
			
			'--------------------------------------------------------------
			' no picking required
			'--------------------------------------------------------------
			UsePicking = False

			'--------------------------------------------------------------
			' build cnx set
			'--------------------------------------------------------------
			set l_DummyListForMyItem = CreateObject("XSI.Collection")
			l_DummyListForMyItem.add MyItem
			set l_DummyListForNull = CreateObject("XSI.Collection")
			l_DummyListForNull.add l_null

			set FinalCnxSet = CreateObject("XSI.connectionset")
			FinalCnxSet.AddGroup( l_DummyListForMyItem )
			FinalCnxSet.AddGroup( l_DummyListForNull )

			'--------------------------------------------------------------
			' add input null to output list of nulls
			'--------------------------------------------------------------
			if typename(l_allNulls) = "Nothing" then
				set l_allNulls = CreateObject("XSI.Collection")
			end if

			l_allNulls.add l_null

		elseif l_nIndex < l_nbInputNulls then				

			'--------------------------------------------------------------
			' use null provided on input
			'--------------------------------------------------------------
			set l_null = in_nullList(l_nIndex)
			
			'--------------------------------------------------------------
			' no picking required
			'--------------------------------------------------------------
			UsePicking = False

			'--------------------------------------------------------------
			' build cnx set
			'--------------------------------------------------------------
			set l_DummyListForMyItem = CreateObject("XSI.Collection")
			l_DummyListForMyItem.add MyItem
			set l_DummyListForNull = CreateObject("XSI.Collection")
			l_DummyListForNull.add l_null

			set FinalCnxSet = CreateObject("XSI.connectionset")
			FinalCnxSet.AddGroup( l_DummyListForMyItem )
			FinalCnxSet.AddGroup( l_DummyListForNull )

			'--------------------------------------------------------------
			' init output list of nulls with input list of nulls if required
			'--------------------------------------------------------------
			if typename(l_allNulls) = "Nothing" then
				set l_allNulls = CreateObject("XSI.Collection")
				for each l_item in in_nullList
					l_allNulls.add l_item
				next
			end if

		else

			'--------------------------------------------------------------
			' force picking for gathering the null
			'--------------------------------------------------------------
			UsePicking = True

			'--------------------------------------------------------------
			' build cnx set
			'--------------------------------------------------------------
			set l_DummyListForMyItem = CreateObject("XSI.Collection")
			l_DummyListForMyItem.add MyItem

			set FinalCnxSet = CreateObject("XSI.connectionset")
			FinalCnxSet.AddGroup( l_DummyListForMyItem )

			'--------------------------------------------------------------
			' init output list of nulls with input list of nulls if required
			'--------------------------------------------------------------
			if typename(l_allNulls) = "Nothing" then
				set l_allNulls = CreateObject("XSI.Collection")
				if l_nbInputNulls > 0 then
					for each l_item in in_nullList
						l_allNulls.add l_item
					next
				end if
			end if

		end if

		l_nIndex = l_nIndex + 1

		'--------------------------------------------------------------
		' apply the cluster center operator
		'--------------------------------------------------------------
		l_Operators = FApplyOp( "ClusterCenter", FinalCnxSet, _
			siUnspecified, siPersistentOperation, UsePicking, l_CreatedObjs, _
			l_ConnectionSetList, l_ConnectionSetListString, in_ConstructionMode )

		'--------------------------------------------------------------
		' collect created operators
		'--------------------------------------------------------------
		if TypeName(l_outOperators) = "Nothing" then
			set l_outOperators = CreateObject("XSI.Collection")
		end if

		l_outOperators.add l_Operators

		if UsePicking = true then
			'--------------------------------------------------------------
			' keep picked null for logging and add it to output list of nulls
			'--------------------------------------------------------------
			Dim l_cnxset, l_item2, l_list

			if TypeName(l_nullListToLog) = "Nothing" then
				set l_nullListToLog = CreateObject("XSI.Collection")

				'--------------------------------------------------------------
				' init logging list with input list of nulls if required
				'--------------------------------------------------------------
				if l_nbInputNulls > 0 then
					for each l_item in in_nullList
						l_nullListToLog.add l_item
					next
				end if
			end if
			
			for each l_item in l_ConnectionSetList
				set l_cnxset = l_item.obj
				set l_list = l_cnxset.Groups(1).obj

				for each l_item2 in l_list
					l_nullListToLog.add l_item2
					l_allNulls.add l_item2
				next
			next				
		end if
	next

	'--------------------------------------------------------------
	' updates input null lists with picked nulls if required
	'--------------------------------------------------------------
	if UsePicking = true then
		set in_nullList = l_nullListToLog
	end if

	'--------------------------------------------------------------
	' returns all input/picked nulls 
	'--------------------------------------------------------------
	set out_allNulls = l_allNulls	

	'--------------------------------------------------------------
	' returns all created operators
	'--------------------------------------------------------------
	set FCreateClusterCenter = l_outOperators

End function

'------------------------------------------------------------------------------
' NAME:		CreateClusterCenterProc - Old version kepty for backcomp with scripting
'
' INPUT:	- in_InputObjs		: list of cluster objects
'			- in_nullList		: list of nulls to connect
'			- in_bSupplyMode	: specify how the missing nulls are supplied:
'								  true (creation), false (picked)
'
' RETURN:	- list of newly created operators
'
' DESCRIPTION: Command script procedure for applying a ClusterCenter op on 
' input objects, it also selects the connected nulls and inspects the created 
' operators.
'------------------------------------------------------------------------------
function CreateClusterCenterProc( in_InputObjs, in_nullList, in_bSupplyMode, byref in_ConstructionMode )
	dim l_allNulls

	set CreateClusterCenterProc = Nothing

	if IsEmpty( in_InputObjs ) or in_InputObjs.count = 0 then
		LogMessage XSIUtils.Translate( IDS_CREATE_CLUSTER_MSG, "XSISCRIPTS" ), siInfo
		SIMsgBox XSIUtils.Translate( IDS_CREATE_CLUSTER_MSG, "XSISCRIPTS" ), vbOKOnly + vbExclamation, XSIUtils.Translate( "Warning", "XSISCRIPTS" ), vbOK
		exit function
	end if
		
	set CreateClusterCenterProc = _
		FCreateClusterCenter( in_InputObjs, in_nullList, in_bSupplyMode,_
			l_allNulls, in_ConstructionMode )

	if TypeName(CreateClusterCenterProc) = "Nothing" then
		LogMessage XSIUtils.Translate( IDS_CREATE_CLUSTER_MSG, "XSISCRIPTS" ), siInfo
		SIMsgBox XSIUtils.Translate( IDS_CREATE_CLUSTER_MSG, "XSISCRIPTS" ), vbOKOnly + vbExclamation, XSIUtils.Translate( "Warning", "XSISCRIPTS" ), vbOK
		exit function
	end if

	'--------------------------------------------------------------------
	' add all input/created/picked nulls to selection
	'--------------------------------------------------------------------
	if not IsEmpty (l_allNulls) then
		' select the input nulls
		deselectall
		SelectObj l_allNulls
	end if

	'--------------------------------------------------------------------
	' Inspect the operator(s).
	'--------------------------------------------------------------------
	AutoInspect CreateClusterCenterProc
end function

'------------------------------------------------------------------------------
' NAME:		CreateNonOverlappingClusterProc
'
' INPUT:	- in_InputObjs		: list of tagged components
'
' RETURN:	- none
'
' DESCRIPTION: Creates clusters with only the tagged components that are
' not already included in any other cluster on the associated object. 
'------------------------------------------------------------------------------
sub CreateNonOverlappingClusterProc( in_InputObjs )

	Dim l_Geom, MyNewClusterList, MySubCompList, i,j
	Dim l_paritem, l_obj, l_cluster, l_clusters, l_clsElems, l_aclsElems, l_clsElem
	Dim l_newcls, l_newclsElems, l_newaclsElems, l_newclsElem
	Dim l_foundoverlap, l_newclsCount, l_nonOverlapCls
	Dim l_array(), l_dellist


	if IsEmpty(in_InputObjs) Or TypeName(in_InputObjs) = "Nothing" Then
		logmessage "Tag some components first"
		Exit sub
	end if


	'------------------------------------------------------------------
	' Convert subcomponents (i.e. tag clusters) to clusters
	'------------------------------------------------------------------
	FSubComponents2Clusters in_InputObjs, MyNewClusterList, MySubCompList

	'------------------------------------------------------------------
	' Deslect everything so that at the end we can select each newly created cluster
	'------------------------------------------------------------------
	DeselectAll

	'-----------------------------------------------------------
	' Somehow i must keep the tagged clusters into a different
	' array otherwize i cannot delet them when i'm done...
	'-----------------------------------------------------------
	set l_dellist = CreateObject("XSI.Collection")

	for each l_newcls in MyNewClusterList

			'------------------------------------------------------------------
			' Rename the tagged cluster, so it's default name doesn't
			' come into play when creating the final non-overlap cluster
			'------------------------------------------------------------------
			l_newcls.Name = "tagged_nonoverlap"

			l_dellist.Add l_newcls.Fullname

			'------------------------------------------------------------------
			' Now we have to get the object on which the cluster is defined
			'------------------------------------------------------------------
			l_paritem = EnumElements( l_newcls, FALSE )
			l_paritem = EnumElements( l_paritem, FALSE )
			l_paritem = EnumElements( l_paritem, FALSE )
			l_paritem = EnumElements( l_paritem, FALSE )
			l_paritem = EnumElements( l_paritem, FALSE )
			set l_obj = EnumElements( l_paritem, FALSE )(0)
			set l_Geom			= l_obj.ActivePrimitive.Geometry
			set l_clusters		= l_Geom.Clusters
			set l_newclsElems	= l_newcls.Elements
			l_newaclsElems		= l_newclsElems.Array
			l_newclsCount = 0

			'------------------------------------------------------------------
			' Loop through all tagged components...
			'------------------------------------------------------------------
			ReDim l_array(0)
			for i=lbound(l_newaclsElems,1) to ubound(l_newaclsElems,1)
				l_newclsElem = l_newaclsElems(i)
				'LogMessage "tagged element(" & i & ") = " & l_newcls.type & "(" & l_newclsElem & ") "

				'----------------------------------------------------------
				' Check through the object's existing clusters, to see
				' if they contain any of the tagged components already
				'----------------------------------------------------------
				l_foundoverlap = False
				for each l_cluster in l_clusters
					'-------------------------------------------------------
					' Make sure not to look at the tagged cluster
					' and look only at clusters of the same type
					'-------------------------------------------------------
					if ( l_cluster.Name <> l_newcls.Name and l_cluster.Type = l_newcls.Type ) then

						set l_clsElems = l_cluster.Elements
						l_aclsElems = l_clsElems.Array

						for j=lbound(l_aclsElems,1) to ubound(l_aclsElems,1)
							l_clsElem = l_aclsElems(j)

							'LogMessage "element(" & j & ") = " & l_cluster.type & "(" & l_clsElem & ") "
							if ( l_clsElem = l_newclsElem ) then
								l_foundoverlap = True
								' Can exit, given we have found the overlap
								exit for
							end if
						next
					end if

					'-------------------------------------------------------
					' Exit as soon as we have found the tagged component overlaps
					' one in a cluster, can go to the next tagged component.
					'-------------------------------------------------------
					if l_foundoverlap then
						exit for
					end if

				next

				'-----------------------------------------------------------
				' Build the array of non-overlapping components
				'-----------------------------------------------------------
				if ( not l_foundoverlap ) then
					Redim Preserve l_array(l_newclsCount)
					l_array( l_newclsCount ) = l_newclsElem
					l_newclsCount = l_newclsCount + 1
				end if

			next

			if ( l_newclsCount > 0 ) then
				'-----------------------------------------------------------
				' Create a new cluster of the same type as the tagged one
				' and pass the completed non-overlapping component array.
				'-----------------------------------------------------------
				set l_nonOverlapCls = l_Geom.AddCluster( l_newcls.Type, , l_array )
				AddToSelection l_nonOverlapCls.Fullname
			end if

	next

	'-----------------------------------------------------------
	' Remove the temporary tagged clusters
	'-----------------------------------------------------------
	RemoveCluster l_dellist


end sub


'------------------------------------------------------------------------------
' NAME:		FApplySplitEdge
'
' INPUT:	- in_ConnectionSet	: connectionset containing the clusters of edges to split
'			- in_bInteractive : weither or not we are in an interactive context
'			- in_Ratio : percentage on the input edge where to split the edge
'			- in_bParallelEdgeLoop : will also split all parallel edge loops
'			- in_bConnect : will connect all the new points together when in_bParallelEdgeLoop is TRUE
'
' OUTPUT:	- out_ConnectionSetString : String to log for the connection set
'			- out_NewPtID : the ID of the point created by the operation
'
' RETURN:	- list of operators created by this function
'
' DESCRIPTION: low-level function to apply a split-edge operator
'------------------------------------------------------------------------------
function FApplySplitEdge(	in_ConnectionSet, _
							in_bInteractive, _
							in_Ratio, _
							in_bParallelEdgeLoop, _
							in_bConnect, _
							byref out_ConnectionSetString, _
							byref out_NewPtID )

	Dim l_CreatedOperators, l_outObjs, mySplitEdgeOp, mySplitEdgeOpPrim

	out_NewPtID = -1

	set l_outObjs = Nothing

	' we pass siPersistentOperation because we need to handle the immediate mode ourself
	' we pass TRUE for in_bDisableAutoInspect as the caller will take care of this himself
	set l_CreatedOperators = FApplyTopoOp( "SplitEdge", in_ConnectionSet, ":siUnspecified:siBranchFlag", siPersistentOperation, _
		in_bInteractive, TRUE, l_outObjs, out_ConnectionSetString)

	'--------------------------------------------------------------------
	' The following sets the ratioedge, paralleledgeloop and connect 
	' parameters, which were passed as arguments, to the split edge op.
	' In the case where there's only one operator the operator is evaluated
	' then the ID of the point created is returned.
	'--------------------------------------------------------------------
	for each mySplitEdgeOp in l_CreatedOperators
		SetValue mySplitEdgeOp & ".ratioedge", in_ratio 
		SetValue mySplitEdgeOp & ".paralleledgeloop", in_bParallelEdgeLoop
		SetValue mySplitEdgeOp & ".connect", in_bConnect
		if l_CreatedOperators.Count = 1 then
			' let's make sure the operator is evaluated properly
			set mySplitEdgeOpPrim = FGetParentObj( mySplitEdgeOp )
			set mySplitEdgeOpPrim = mySplitEdgeOpPrim(0)
			GetValue mySplitEdgeOpPrim & ".polymsh"
			out_NewPtID = GetValue( mySplitEdgeOp & ".newptid" )
		end if

	next

	set FApplySplitEdge = l_CreatedOperators

end function

'------------------------------------------------------------------------------
' NAME:		ApplySplitEdgeOpFunc
'
' INPUT:	- io_ConnectionSet	: connectionset containing the clusters of edges to split
'			- in_Ratio : percentage on the input edge where to split the edge
'			- in_bParallelEdgeLoop : will also split all parallel edge loops
'			- in_bConnect : will connect all the new points together when in_bParallelEdgeLoop is TRUE
'			- in_OperationMode : tells if we should freeze the operator or not
'
' OUTPUT:	- out_NewPtID : the ID of the point created by the operation
'
' RETURN:	- list of operators created by this function (none in immediate mode)
'
' DESCRIPTION: Apply the SplitEdge operator to a list of objects (NON-UI VERSION)
'------------------------------------------------------------------------------
function ApplySplitEdgeFunc(	io_ConnectionSet, _
								in_Ratio, _
								in_bParallelEdgeLoop, _
								in_bConnect, _
								in_OperationMode, _
								byref out_NewPtID )

	Dim l_CreatedOperators, l_ConnectionSetString

	' we pass FALSE for in_bInteractive
	set l_CreatedOperators = FApplySplitEdge( io_ConnectionSet, FALSE, _
												in_Ratio, in_bParallelEdgeLoop, in_bConnect, l_ConnectionSetString, out_NewPtID )
	
	if in_OperationMode = siImmediateOperation then
		FreezeModeling l_CreatedOperators, , siUnspecified
		set ApplySplitEdgeFunc = Nothing
	else
		set ApplySplitEdgeFunc = l_CreatedOperators
	end if

end function

'------------------------------------------------------------------------------
' NAME:		ApplySplitEdgeOpProc
'
' INPUT:	- io_ConnectionSet	: connectionset containing the clusters of edges to split
'			- in_Ratio : percentage on the input edge where to split the edge
'			- in_bParallelEdgeLoop : will also split all parallel edge loops
'			- in_bConnect : will connect all the new points together when in_bParallelEdgeLoop is TRUE
'			- in_bDisableAutoInspect : force AutoInspect to off
'
' OUTPUT:	- inout_OperationMode : will return weither or not the ImmediateMode was ON in MCP
'			- out_NewPtID : the ID of the point created by the operation
'
' RETURN:	- list of operators created by this function (none in immediate mode)
'
' DESCRIPTION: Apply the SplitEdge operator to a list of objects (UI VERSION)
'------------------------------------------------------------------------------
Function ApplySplitEdgeProc(	io_ConnectionSet, _
						in_Ratio, _
						in_bParallelEdgeLoop, _
						in_bConnect, _
						byref inout_OperationMode, _
						byref out_NewPtID, _
						in_bDisableAutoInspect )

	Dim l_CreatedOperators, l_bOperationMode, l_ConnectionSetString

	'--------------------------------------------------------------------
	' Get the Current Operation mode and upadte the inout_OperationMode
	'--------------------------------------------------------------------

	l_bOperationMode = GetUserPref("OperationMode")

	if l_bOperationMode then
		inout_OperationMode = siImmediateOperation
	else
		inout_OperationMode = siPersistentOperation
	end if

	' we pass TRUE for in_bInteractive
	set l_CreatedOperators = FApplySplitEdge( io_ConnectionSet, TRUE, _
												in_Ratio, in_bParallelEdgeLoop, in_bConnect, l_ConnectionSetString, out_NewPtID )

	'--------------------------------------------------------------------
	' Convert the returned connectionset argument into a string
	' to avoid any further validation of its contents. After
	' we apply the operator all bets are off regarding whether we
	' will get a valid connection set string again.
	' NOTE: Var should be a string from output of FApplySplitEdge but take no chances and apply CStr
	'--------------------------------------------------------------------
	io_ConnectionSet = CStr( l_ConnectionSetString )

	if Not in_bDisableAutoInspect then
		AutoInspect l_CreatedOperators
	end if

	if inout_OperationMode = siImmediateOperation then
		FreezeModeling l_CreatedOperators, , siUnspecified
	end if

	set ApplySplitEdgeProc = l_CreatedOperators
end Function

'------------------------------------------------------------------------------
' NAME:		FApplySplitPolygon
'
' INPUT:	- in_ConnectionSet	: connectionset containing the clusters of polygons to split
'			- in_bInteractive : weither or not we are in an interactive context
'			- in_TanX : X parameter w/r to the local frame of the polygon(s) where to put the split point 
'			- in_TanY : Y parameter w/r to the local frame of the polygon(s) where to put the split point 
'			- in_TanZ : Z parameter w/r to the local frame of the polygon(s) where to put the split point 
'			- in_SplitPolygonType : type of split
'
' OUTPUT:	- out_ConnectionSetString : String to log for the connection set.
'			- out_NewPtID : the ID of the point created by the operation
'
' RETURN:	- list of operators created by this function
'
' DESCRIPTION: low-level function to apply a split-polygon operator
'------------------------------------------------------------------------------
function FApplySplitPolygon(	in_ConnectionSet, _
								in_bInteractive, _
								in_TanX, _
								in_TanY, _
								in_TanZ, _
								in_SplitPolygonType, _
								byref out_ConnectionSetString, _
								byref out_NewPtID )


	Dim l_CreatedOperators, l_outObjs, mySplitPolygonOp, mySplitPolygonOpPrim

	out_NewPtID = -1

	set l_outObjs = Nothing

	' we pass siPersistentOperation because we need to handle the immediate mode ourself
	' we pass TRUE for in_bDisableAutoInspect as the caller will take care of this himself
	set l_CreatedOperators = FApplyTopoOp( "SplitPolygon", in_ConnectionSet, ":siUnspecified:siBranchFlag", siPersistentOperation, _
		in_bInteractive, TRUE, l_outObjs, out_ConnectionSetString )

	'--------------------------------------------------------------------
	' The following sets the tanx, tany, tanz and splittype
	' parameters, which were passed as arguments, to the split polygon op.
	' In the case where there's only one operator the operator is evaluated
	' then the ID of the point created is returned.
	'--------------------------------------------------------------------

	for each mySplitPolygonOp in l_CreatedOperators
		SetValue mySplitPolygonOp & ".tanx", in_TanX
		SetValue mySplitPolygonOp & ".tany", in_TanY
		SetValue mySplitPolygonOp & ".tanz", in_TanZ
		SetValue mySplitPolygonOp & ".splittype", in_SplitPolygonType
		if l_CreatedOperators.Count = 1 then
			' let's make sure the operator is evaluated properly
			set mySplitPolygonOpPrim = FGetParentObj( mySplitPolygonOp )
			set mySplitPolygonOpPrim = mySplitPolygonOpPrim(0)
			GetValue mySplitPolygonOpPrim & ".polymsh"
			out_NewPtID = GetValue( mySplitPolygonOp & ".newptid" )
		end if
	next

	set FApplySplitPolygon = l_CreatedOperators

end function

'------------------------------------------------------------------------------
' NAME:		ApplySplitPolygonFunc
'
' INPUT:	- io_ConnectionSet	: connectionset containing the clusters of polygons to split
'			- in_TanX : X parameter w/r to the local frame of the polygon(s) where to put the split point 
'			- in_TanY : Y parameter w/r to the local frame of the polygon(s) where to put the split point 
'			- in_TanZ : Z parameter w/r to the local frame of the polygon(s) where to put the split point 
'			- in_SplitPolygonType : type of split
'			- in_OperationMode : tells if we should freeze the operator or not
'
' OUTPUT:	- out_NewPtID : the ID of the point created by the operation
'
' RETURN:	- list of operators created by this function (none in immediate mode)
'
' DESCRIPTION: Apply the SplitPolygon operator to a list of objects (NON-UI VERSION)
'------------------------------------------------------------------------------
function ApplySplitPolygonFunc(	io_ConnectionSet, _
								in_TanX, _
								in_TanY, _
								in_TanZ, _
								in_SplitPolygonType, _
								in_OperationMode, _
								byref out_NewPtID )


	Dim l_CreatedOperators, l_ConnectionSetString

	' we pass FALSE for in_bInteractive
	set l_CreatedOperators = FApplySplitPolygon( io_ConnectionSet, FALSE, _
													in_TanX, in_TanY, in_TanZ, in_SplitPolygonType, l_ConnectionSetString, out_NewPtID )

	if in_OperationMode = siImmediateOperation then
		FreezeModeling l_CreatedOperators, , siUnspecified
		set ApplySplitPolygonFunc = Nothing
	else
		set ApplySplitPolygonFunc = l_CreatedOperators
	end if

end function

'------------------------------------------------------------------------------
' NAME:		ApplySplitPolygonProc
'
' INPUT:	- io_ConnectionSet	: connectionset containing the clusters of polygons to split
'			- in_TanX : X parameter w/r to the local frame of the polygon(s) where to put the split point 
'			- in_TanY : Y parameter w/r to the local frame of the polygon(s) where to put the split point 
'			- in_TanZ : Z parameter w/r to the local frame of the polygon(s) where to put the split point 
'			- in_SplitPolygonType : type of split
'			- in_bDisableAutoInspect : force AutoInspect to off
'
' OUTPUT:	- inout_OperationMode : will return weither or not the ImmediateMode was ON in MCP
'			- out_NewPtID : the ID of the point created by the operation
'
' RETURN:	- list of operators created by this function (none in immediate mode)
'
' DESCRIPTION: Apply the SplitPolygon operator to a list of objects (UI VERSION)
'------------------------------------------------------------------------------
Function ApplySplitPolygonProc(	io_ConnectionSet, _
							in_TanX, _
							in_TanY, _
							in_TanZ, _
							in_SplitPolygonType, _
							byref inout_OperationMode, _
							byref out_NewPtID, _
							in_bDisableAutoInspect )

	Dim l_CreatedOperators, l_bOperationMode, l_ConnectionSetString

	'--------------------------------------------------------------------
	' Get the Current Operation mode and upadte the inout_OperationMode
	'--------------------------------------------------------------------

	l_bOperationMode = GetUserPref("OperationMode")

	if l_bOperationMode then
		inout_OperationMode = siImmediateOperation
	else
		inout_OperationMode = siPersistentOperation
	end if

	' we pass TRUE for in_bInteractive
	set l_CreatedOperators = FApplySplitPolygon( io_ConnectionSet, TRUE, _
													in_TanX, in_TanY, in_TanZ, in_SplitPolygonType, l_ConnectionSetString, out_NewPtID )

	'--------------------------------------------------------------------
	' Convert the returned connectionset argument into a string
	' to avoid any further validation of its contents. After
	' we apply the operator all bets are off regarding whether we
	' will get a valid connection set string again.
	' NOTE: Var should be a string from output of FApplySplitPolygon but take no chances and apply CStr
	'--------------------------------------------------------------------
	io_ConnectionSet = CStr( l_ConnectionSetString )

	if Not in_bDisableAutoInspect then
		AutoInspect l_CreatedOperators
	end if

	if inout_OperationMode = siImmediateOperation then
		FreezeModeling l_CreatedOperators, , siUnspecified
	end if
	
	set ApplySplitPolygonProc = l_CreatedOperators
end Function

'------------------------------------------------------------------------------
' NAME:		FApplyWeldPoints
'
' INPUT:	- in_ConnectionSet	: connectionset containing the clusters of polygons to split
'			- in_bInteractive : weither or not we are in an interactive context
'
' OUTPUT:	- out_ConnectionSetString : String to log for the connection set.
'
' RETURN:	- list of operators created by this function
'
' DESCRIPTION: low-level function to apply a split-polygon operator
'------------------------------------------------------------------------------
function FApplyWeldPoints(	in_ConnectionSet, _
								in_bInteractive, _
								byref out_ConnectionSetString )

	Dim l_CreatedOperators, l_outObjs, mySplitPolygonOp, mySplitPolygonOpPrim

	set l_outObjs = Nothing

	' we pass siPersistentOperation because we need to handle the immediate mode ourself
	' we pass TRUE for in_bDisableAutoInspect as the caller will take care of this himself
	set l_CreatedOperators = FApplyTopoOp( "WeldPoints", in_ConnectionSet, ":siUnspecified:siBranchFlag", siPersistentOperation, _
		in_bInteractive, TRUE, l_outObjs, out_ConnectionSetString )

	set FApplyWeldPoints = l_CreatedOperators

end function

'------------------------------------------------------------------------------
' NAME:		ApplyWeldPointsFunc
'
' INPUT:	- io_ConnectionSet	: connectionset containing the input clusters
'
' RETURN:	- list of operators created by this function
'
' DESCRIPTION: Apply the WeldPoints operator to a list of objects (NON-UI VERSION)
'------------------------------------------------------------------------------
function ApplyWeldPointsFunc( io_ConnectionSet, in_OperationMode )

	Dim l_CreatedOperators, l_ConnectionSetString

	' we pass FALSE for in_bInteractive
	set l_CreatedOperators = FApplyWeldPoints( io_ConnectionSet, FALSE, l_ConnectionSetString )

    io_ConnectionSet = l_ConnectionSetString

	if in_OperationMode = siImmediateOperation then
		FreezeModeling l_CreatedOperators, , siUnspecified
		set ApplyWeldPointsFunc = Nothing
	else
		set ApplyWeldPointsFunc = l_CreatedOperators
	end if

end function

'------------------------------------------------------------------------------
' NAME:		ApplyWeldPointsProc
'
' INPUT:	- io_ConnectionSet	: connectionset containing the clusters of polygons to split
'			- in_bDisableAutoInspect : force AutoInspect to off
'
' OUTPUT:	- out_OperationMode : will return weither or not the ImmediateMode was ON in MCP
'
' RETURN:	- list of operators created by this function (none in immediate mode)
'
' DESCRIPTION: Apply the SplitPolygon operator to a list of objects (UI VERSION)
'------------------------------------------------------------------------------
Function ApplyWeldPointsProc(	io_ConnectionSet, _
							in_bDisableAutoInspect, _
 							byref out_OperationMode )

	Dim l_CreatedOperators, l_bOperationMode, l_ConnectionSetString

	l_bOperationMode = GetUserPref("OperationMode")

	if l_bOperationMode then
		out_OperationMode = siImmediateOperation
	else
		out_OperationMode = siPersistentOperation
	end if

	' we pass TRUE for in_bInteractive
	set l_CreatedOperators = FApplyWeldPoints( io_ConnectionSet, TRUE, l_ConnectionSetString )

	'--------------------------------------------------------------------
	' Convert the returned connectionset argument into a string
	' to avoid any further validation of its contents. After
	' we apply the operator all bets are off regarding whether we
	' will get a valid connection set string again.
	' NOTE: Var should be a string from output of FApplyWeldPoints but take no chances and apply CStr
	'--------------------------------------------------------------------
	io_ConnectionSet = CStr( l_ConnectionSetString )

	if Not in_bDisableAutoInspect then
		AutoInspect l_CreatedOperators
	end if

	if out_OperationMode = siImmediateOperation then
		FreezeModeling l_CreatedOperators, , siUnspecified
	end if
	
	set ApplyWeldPointsProc = l_CreatedOperators
end Function

'------------------------------------------------------------------------------
' NAME:		FApplyAddEdge
'
' INPUT:	- in_ConnectionSet	: connectionset containing two clusters
'			(the first cluster is for the point where to start the new edge,
'			the second cluster is for the edge where to end the new edge)
'			- in_bInteractive : weither or not we are in an interactive context
'			- in_Ratio : percentage on the input edge (2nd cluster) where to split the edge
'
' OUTPUT:	- out_ConnectionSetString: String to log for the connection set
'			- out_NewPtID : the ID of the point created by the operation
'			- out_NewEdgeID : the ID of the edge created by the operation
'
' RETURN:	- list of operators created by this function (none in immediate mode)
'
' DESCRIPTION: low-level function to apply a add-edge operator
'------------------------------------------------------------------------------
function FApplyAddEdge(	in_ConnectionSet, _
						in_bInteractive, _
						in_Ratio, _
						byref out_ConnectionSetString, _
						byref out_NewPtID, _
						byref out_NewEdgeID )

	Dim l_CreatedOperators, l_outObjs, 	myAddEdgeOp, myAddEdgeOpPrim

	out_NewPtID = -1
	out_NewEdgeID = -1

	set l_outObjs = Nothing

	' we pass siPersistentOperation because we need to handle the immediate mode ourself
	' we pass TRUE for in_bDisableAutoInspect as the caller will take care of this himself
	set l_CreatedOperators = FApplyTopoOp( "AddEdge", in_ConnectionSet, ":siUnspecified:siBranchFlag", siPersistentOperation, _
		in_bInteractive, TRUE, l_outObjs, out_ConnectionSetString )

	'--------------------------------------------------------------------
	' The following sets the ratioedge parameter, which was passed as
	' an argument, to the add edge operator.
	' In the case where there's only one operator the operator is evaluated
	' then the IDs of the point and edge created are returned.
	'--------------------------------------------------------------------
	for each myAddEdgeOp in l_CreatedOperators
		SetValue myAddEdgeOp & ".ratioedge", in_ratio 
		if l_CreatedOperators.Count = 1 then
			' let's make sure the operator is evaluated properly
			set myAddEdgeOpPrim = FGetParentObj( myAddEdgeOp )
			set myAddEdgeOpPrim = myAddEdgeOpPrim(0)
			GetValue myAddEdgeOpPrim & ".polymsh"
			out_NewPtID = GetValue( myAddEdgeOp & ".newptid" )
			out_NewEdgeID = GetValue( myAddEdgeOp & ".newedgeid" )
		end if
	next

	set FApplyAddEdge = l_CreatedOperators
end function

'------------------------------------------------------------------------------
' NAME:		ApplyAddEdgeOpFunc
'
' INPUT:	- io_ConnectionSet	: connectionset containing two clusters
'			(the first cluster is for the point where to start the new edge,
'			the second cluster is for the edge where to end the new edge)
'			- in_Ratio : percentage on the input edge (2nd cluster) where to split the edge
'			- in_OperationMode : tells if we should freeze the operator or not
'
' OUTPUT:	- out_NewPtID : the ID of the point created by the operation
'			- out_NewEdgeID : the ID of the edge created by the operation
'
' RETURN:	- list of operators created by this function (none in immediate mode)
'
' DESCRIPTION: Apply the AddEdge operator to a list of objects (only 1 edge per object suppported for now)
' NON-UI VERSION
'------------------------------------------------------------------------------
function ApplyAddEdgeFunc(	io_ConnectionSet, _
							in_Ratio, _
							in_OperationMode, _
							byref out_NewPtID, _
							byref out_NewEdgeID )

	Dim l_CreatedOperators, l_ConnectionSetString

	' we pass FALSE for in_bInteractive
	set l_CreatedOperators = FApplyAddEdge( io_ConnectionSet, FALSE, _
												in_Ratio, l_ConnectionSetString, out_NewPtID, out_NewEdgeID )

	if in_OperationMode = siImmediateOperation then
		FreezeModeling l_CreatedOperators, , siUnspecified
		set ApplyAddEdgeFunc = Nothing
	else
		set ApplyAddEdgeFunc = l_CreatedOperators
	end if
end function

'------------------------------------------------------------------------------
' NAME:		ApplyAddEdgeProc
'
' INPUT:	- io_ConnectionSet	: connectionset containing two clusters
'			(the first cluster is for the point where to start the new edge,
'			the second cluster is for the edge where to end the new edge)
'			- in_Ratio : percentage on the input edge (2nd cluster) where to split the edge
'			- in_bDisableAutoInspect : force AutoInspect to off
'
' OUTPUT:	- inout_OperationMode : will return weither or not the ImmediateMode was ON in MCP
'			- out_NewPtID : the ID of the point created by the operation
'			- out_NewEdgeID : the ID of the edge created by the operation
'
' RETURN:	- list of operators created by this function
'
' DESCRIPTION: Apply the AddEdge operator to a list of objects (only 1 edge per object suppported for now)
' UI VERSION
'------------------------------------------------------------------------------
Function ApplyAddEdgeProc(	io_ConnectionSet, _
						in_Ratio, _
						byref inout_OperationMode, _
						byref out_NewPtID, _
						byref out_NewEdgeID, _
						in_bDisableAutoInspect )

	Dim l_CreatedOperators, l_bOperationMode, l_ConnectionSetString

	'--------------------------------------------------------------------
	' Get the Current Operation mode and upadte the inout_OperationMode
	'--------------------------------------------------------------------

	l_bOperationMode = GetUserPref("OperationMode")

	if l_bOperationMode then
		inout_OperationMode = siImmediateOperation
	else
		inout_OperationMode = siPersistentOperation
	end if

	' we pass TRUE for in_bInteractive
	set l_CreatedOperators = FApplyAddEdge( io_ConnectionSet, TRUE, _
												in_Ratio, l_ConnectionSetString, out_NewPtID, out_NewEdgeID )

	'--------------------------------------------------------------------
	' Convert the returned connectionset argument into a string
	' to avoid any further validation of its contents. After
	' we apply the operator all bets are off regarding whether we
	' will get a valid connection set string again.
	' NOTE: Var should be a string from output of FApplyAddEdge but take no chances and apply CStr
	'--------------------------------------------------------------------
	io_ConnectionSet = CStr( l_ConnectionSetString )

	if Not in_bDisableAutoInspect then
		AutoInspect l_CreatedOperators
	end if

	if inout_OperationMode = siImmediateOperation then
		FreezeModeling l_CreatedOperators, , siUnspecified
	end if
	
	set ApplyAddEdgeProc = l_CreatedOperators
end Function

'------------------------------------------------------------------------------
' NAME:		FDuplicateComponent
'
' INPUT:	- in_ConnectionSet	: connectionset containing the clusters to duplicate (extrude)
'			- in_bInteractive : weither or not we are in an interactive context
'			- in_Length : length of the duplicate
'			- in_NbSubdivs : number of subdivisions to use
'			- in_bMerge : weither or not adjacent components should be processed as a whole
'			- in_tx, in_ty, in_tz : translation to apply on each subdivision
'			- in_rx, in_ry, in_rz : rotation to apply on each subdivision
'			- in_sx, in_sy, in_sz : scaling to apply on each subdivision
'           - in_Duplicate : if polygons are detached
'
' OUTPUT:	- out_ConnectionSetString: String to log for the connection set
'
' DESCRIPTION: low-level function to duplicate a mesh component
'------------------------------------------------------------------------------
function FDuplicateComponent(	in_ConnectionSet, in_bInteractive, _
								in_Length, in_NbSubdivs, in_bMerge, _
								in_tx, in_ty, in_tz, _
								in_rx, in_ry, in_rz, _
								in_sx, in_sy, in_sz, _
								in_Duplicate, _
								byref out_ConnectionSetString )

	Dim l_CreatedOperators, l_outObjs, l_ConnectionSetList, _
		myExtrudeAxisOp, l_bOperationMode

	'logmessage "FDuplicateComponent"
	set l_outObjs = Nothing

	' we pass siPersistentOperation because we need to handle the immediate mode ourself
	' we pass TRUE for in_bDisableAutoInspect as the caller will take care of this himself
	set l_CreatedOperators = FApplyTopoOp( "ExtrudeComponentAxis", in_ConnectionSet, _
		":siUnspecified:siBranchFlag", siPersistentOperation, _
		in_bInteractive, TRUE, l_outObjs, out_ConnectionSetString )

	'--------------------------------------------------------------------
	' update operator according to duplicate multiple settings
	'--------------------------------------------------------------------

	for each myExtrudeAxisOp in l_CreatedOperators
		SetValue myExtrudeAxisOp & ".subdivs", in_NbSubdivs
		SetValue myExtrudeAxisOp & ".length", in_Length
		SetValue myExtrudeAxisOp & ".merge", in_bMerge
		SetValue myExtrudeAxisOp & ".sx", in_sx
		SetValue myExtrudeAxisOp & ".sy", in_sy
		SetValue myExtrudeAxisOp & ".sz", in_sz
		SetValue myExtrudeAxisOp & ".rx", in_rx
		SetValue myExtrudeAxisOp & ".ry", in_ry
		SetValue myExtrudeAxisOp & ".rz", in_rz
		SetValue myExtrudeAxisOp & ".tx", in_tx
		SetValue myExtrudeAxisOp & ".ty", in_ty
		SetValue myExtrudeAxisOp & ".tz", in_tz
		SetValue myExtrudeAxisOp & ".duplicate", in_Duplicate
	next

	set FDuplicateComponent = l_CreatedOperators

end function

'------------------------------------------------------------------------------
' NAME:		DuplicateComponentFunc
'
' INPUT:	- io_ConnectionSet	: connectionset containing the clusters to duplicate (extrude)
'			- in_OperationMode : tells if we should freeze the operator or not
'			- in_Length : length of the duplicate
'			- in_NbSubdivs : number of subdivisions to use
'			- in_bMerge : weither or not adjacent components should be processed as a whole
'			- in_tx, in_ty, in_tz : translation to apply on each subdivision
'			- in_rx, in_ry, in_rz : rotation to apply on each subdivision
'			- in_sx, in_sy, in_sz : scaling to apply on each subdivision
'           - in_Duplicate : if polygons are detached
'
' DESCRIPTION: Creates an ExtrudeComponentAxis operator, with the settings from "duplicate multiple"
' NON-UI VERSION
'------------------------------------------------------------------------------
function DuplicateComponentFunc(	io_ConnectionSet, in_OperationMode, _
									in_Length, in_NbSubdivs, in_bMerge, _
									in_tx, in_ty, in_tz, _
									in_rx, in_ry, in_rz, _
									in_sx, in_sy, in_sz, _
									in_Duplicate )

	Dim l_CreatedOperators, l_ConnectionSetString
	'logmessage "DuplicateComponentFunc"
	' we pass FALSE for in_bInteractive
	set l_CreatedOperators = FDuplicateComponent( io_ConnectionSet, FALSE, _
														in_Length, in_NbSubdivs, in_bMerge, _
														in_tx, in_ty, in_tz, _
														in_rx, in_ry, in_rz, _
														in_sx, in_sy, in_sz, in_Duplicate, l_ConnectionSetString )

	if in_OperationMode = siImmediateOperation then
		FreezeModeling l_CreatedOperators, , siUnspecified
		set DuplicateComponentFunc = Nothing
	else
		set DuplicateComponentFunc = l_CreatedOperators
	end if

end function

'------------------------------------------------------------------------------
' NAME:		DuplicateComponentProc
'
' INPUT:	- io_ConnectionSet	: connectionset containing the clusters to duplicate (extrude)
'			- in_Length : length of the duplicate
'			- in_NbSubdivs : number of subdivisions to use
'			- in_bMerge : weither or not adjacent components should be processed as a whole
'
' OUTPUT:	- inout_OperationMode : will return weither or not the ImmediateMode was ON in MCP
'			- inout_tx, inout_ty, inout_tz : translation to apply on each subdivision, as specified in duplicate-multiple options
'			- inout_rx, inout_ry, inout_rz : rotation to apply on each subdivision, as specified in duplicate-multiple options
'			- inout_sx, inout_sy, inout_sz : scaling to apply on each subdivision, as specified in duplicate-multiple options
'           - inout_Duplicate : if polygons are detached
'
' DESCRIPTION: Creates an ExtrudeComponentAxis operator, with the settings from "duplicate multiple"
' UI VERSION
'------------------------------------------------------------------------------
sub DuplicateComponentProc(	io_ConnectionSet, byref inout_OperationMode, _
							in_Length, in_NbSubdivs, in_bMerge, _
							byref inout_tx, byref inout_ty, byref inout_tz, _
							byref inout_rx, byref inout_ry, byref inout_rz, _
							byref inout_sx, byref inout_sy, byref inout_sz, _
							byref inout_Duplicate )

	Dim l_CreatedOperators, l_bOperationMode, l_ConnectionSetString

	'--------------------------------------------------------------------
	' get settings from duplicate multiple
	'--------------------------------------------------------------------

	'logmessage "DuplicateComponentProc"
	' get duplicate options
	if in_NbSubdivs = 0 then
		inout_sx = 1
		inout_sy = 1
		inout_sz = 1
		inout_rx = 0
		inout_ry = 0
		inout_rz = 0
		inout_tx = 0
		inout_ty = 0
		inout_tz = 0
	else
		inout_sx = GetValue("Preferences.Duplicate.Transform.Sx")
		inout_sy = GetValue("Preferences.Duplicate.Transform.Sy")
		inout_sz = GetValue("Preferences.Duplicate.Transform.Sz")
		inout_rx = GetValue("Preferences.Duplicate.Transform.Rx")
		inout_ry = GetValue("Preferences.Duplicate.Transform.Ry")
		inout_rz = GetValue("Preferences.Duplicate.Transform.Rz")
		inout_tx = GetValue("Preferences.Duplicate.Transform.Tx")
		inout_ty = GetValue("Preferences.Duplicate.Transform.Ty")
		inout_tz = GetValue("Preferences.Duplicate.Transform.Tz")
	end if

	inout_Duplicate = GetValue("Preferences.Duplicate.polygons") = 0

	'--------------------------------------------------------------------
	' Get the Current Operation mode and upadte the inout_OperationMode
	'--------------------------------------------------------------------

	l_bOperationMode = GetUserPref("OperationMode")
	if l_bOperationMode then
		inout_OperationMode = siImmediateOperation
	else
		inout_OperationMode = siPersistentOperation
	end if

	' we pass TRUE for in_bInteractive
	set l_CreatedOperators = FDuplicateComponent( io_ConnectionSet, TRUE, _
														in_Length, in_NbSubdivs, in_bMerge, _
														inout_tx, inout_ty, inout_tz, _
														inout_rx, inout_ry, inout_rz, _
														inout_sx, inout_sy, inout_sz, inout_Duplicate, l_ConnectionSetString )

	'--------------------------------------------------------------------
	' Convert the returned connectionset argument into a string
	' to avoid any further validation of its contents. After
	' we apply the operator all bets are off regarding whether we
	' will get a valid connection set string again.
	' NOTE: Var should be a string from output of FDuplicateComponent but take no chances and apply CStr
	'--------------------------------------------------------------------
	io_ConnectionSet = CStr( l_ConnectionSetString )

	AutoInspect l_CreatedOperators

	if inout_OperationMode = siImmediateOperation then
		FreezeModeling l_CreatedOperators, , siUnspecified
	end if
end sub

'------------------------------------------------------------------------------
' NAME:		DuplicateComponentNoAutoInspectProc
'
' INPUT:	- io_ConnectionSet	: connectionset containing the clusters to duplicate (extrude)
'			- in_Length : length of the duplicate
'			- in_NbSubdivs : number of subdivisions to use
'			- in_bMerge : weither or not adjacent components should be processed as a whole
'
' OUTPUT:	- inout_OperationMode : will return weither or not the ImmediateMode was ON in MCP
'			- inout_tx, inout_ty, inout_tz : translation to apply on each subdivision, as specified in duplicate-multiple options
'			- inout_rx, inout_ry, inout_rz : rotation to apply on each subdivision, as specified in duplicate-multiple options
'			- inout_sx, inout_sy, inout_sz : scaling to apply on each subdivision, as specified in duplicate-multiple options
'           - inout_Duplicate : if polygons are detached
'
' DESCRIPTION: Creates an ExtrudeComponentAxis operator, with the settings from "duplicate multiple"
' UI VERSION
'------------------------------------------------------------------------------
sub DuplicateComponentNoAutoInspectProc(	io_ConnectionSet, byref inout_OperationMode, _
											in_Length, in_NbSubdivs, in_bMerge, _
											byref inout_tx, byref inout_ty, byref inout_tz, _
											byref inout_rx, byref inout_ry, byref inout_rz, _
											byref inout_sx, byref inout_sy, byref inout_sz, _
											byref inout_Duplicate )

	Dim l_CreatedOperators, l_bOperationMode, l_ConnectionSetString
	'logmessage "DuplicateComponentNoAutoInspectProc"
	'--------------------------------------------------------------------
	' get settings from duplicate multiple
	'--------------------------------------------------------------------

	' get duplicate options
	if in_NbSubdivs = 0 then
		inout_sx = 1
		inout_sy = 1
		inout_sz = 1
		inout_rx = 0
		inout_ry = 0
		inout_rz = 0
		inout_tx = 0
		inout_ty = 0
		inout_tz = 0
	else
		inout_sx = GetValue("Preferences.Duplicate.Transform.Sx")
		inout_sy = GetValue("Preferences.Duplicate.Transform.Sy")
		inout_sz = GetValue("Preferences.Duplicate.Transform.Sz")
		inout_rx = GetValue("Preferences.Duplicate.Transform.Rx")
		inout_ry = GetValue("Preferences.Duplicate.Transform.Ry")
		inout_rz = GetValue("Preferences.Duplicate.Transform.Rz")
		inout_tx = GetValue("Preferences.Duplicate.Transform.Tx")
		inout_ty = GetValue("Preferences.Duplicate.Transform.Ty")
		inout_tz = GetValue("Preferences.Duplicate.Transform.Tz")
	end if

	' if caller already decided to duplicate then we dont look at the user pref
	if inout_Duplicate = 0 then
		inout_Duplicate = GetValue("Preferences.Duplicate.polygons") = 0
	end if

	'--------------------------------------------------------------------
	' Get the Current Operation mode and upadte the inout_OperationMode
	'--------------------------------------------------------------------

	l_bOperationMode = GetUserPref("OperationMode")
	if l_bOperationMode then
		inout_OperationMode = siImmediateOperation
	else
		inout_OperationMode = siPersistentOperation
	end if

	' we pass TRUE for in_bInteractive
	set l_CreatedOperators = FDuplicateComponent( io_ConnectionSet, TRUE, _
														in_Length, in_NbSubdivs, in_bMerge, _
														inout_tx, inout_ty, inout_tz, _
														inout_rx, inout_ry, inout_rz, _
														inout_sx, inout_sy, inout_sz, inout_Duplicate, l_ConnectionSetString )

	'--------------------------------------------------------------------
	' Convert the returned connectionset argument into a string
	' to avoid any further validation of its contents. After
	' we apply the operator all bets are off regarding whether we
	' will get a valid connection set string again.
	' NOTE: Var should be a string from output of FDuplicateComponent but take no chances and apply CStr
	'--------------------------------------------------------------------
	io_ConnectionSet = CStr( l_ConnectionSetString )

	if inout_OperationMode = siImmediateOperation then
		FreezeModeling l_CreatedOperators, , siUnspecified
	end if
end sub


'------------------------------------------------------------------------------
' NAME:		MeshSubdivideWithCenter
'
'			Xuefu Wang Nov. 26, 2000
' DESCRIPTION:	
'			call apply op to apply the subdivision operator and then get output objects selected and then	
'			call low level SITransferCenter command to set the new object's center without invoking a center op
'----------------------------------------------------------------
sub MeshSubdivideWithCenterProc(in_Preset, io_ConnectionSet, in_ConnectType, _
								byref inout_OperationMode, byref inout_InputsDisposalMode )
	
	dim  l_CreatedOperators, l_outObjs, l_ConnectionSetList, l_bOperationMode, l_ConnectionSetListString
	dim  l_bRestoreOperationMode
	set l_outObjs = Nothing

	'--------------------------------------------------------------------
	' Get the Current Operation mode and upadte the inout_OperationMode
	'--------------------------------------------------------------------

	l_bOperationMode = GetUserPref("OperationMode")

	if l_bOperationMode then
		inout_OperationMode = siImmediateOperation
	else
	    inout_OperationMode = siPersistentOperation
	end if
	
	'--------------------------------------------------------------------
	' check the input management user pref to see if we should go 
	' in "immediate" mode temporarily.
	'--------------------------------------------------------------------
	ReadGenInputMgmtUserPref inout_InputsDisposalMode, inout_OperationMode, l_bRestoreOperationMode

	set l_CreatedOperators = FApplyGenOp( in_Preset, "", io_ConnectionSet, in_ConnectType, inout_OperationMode, _
		inout_InputsDisposalMode, TRUE, TRUE, l_outObjs, l_ConnectionSetList, l_ConnectionSetListString )

	'--------------------------------------------------------------------
	' propagate the connection set to log back to caller thru io_ConnectionSet
	'--------------------------------------------------------------------
	io_ConnectionSet = CStr( l_ConnectionSetListString )

	'--------------------------------------------------------------------
	' Select the output object(s); if there are any.
	'--------------------------------------------------------------------
	if Not TypeName (l_outObjs) = "Nothing" then
		SelectObj l_outObjs
	end if
	
	'--------------------------------------------------------------------
	' Inspect the operator(s).
	'--------------------------------------------------------------------
	if Not TypeName (l_CreatedOperators) = "Nothing" and inout_OperationMode = siPersistentOperation then
		AutoInspect l_CreatedOperators
	end if

	if l_bRestoreOperationMode then
		SetUserPref "OperationMode", 0
	end if
end sub


'------------------------------------------------------------------------------
' NAME:		FApplySelectedOp
'
' INPUT:	in_connectionset - connection set containing list of selected objects
'			in_op - selected op :	1 - FlexEnv Op
'									2 - DeformByCage Op
'									3 - DeformBySpine Op
'
' DESCRIPTION: Apply selected op to list of input objects and if
' interactive start a pick session to select the curves.
'
' replace subcomponents and tagclusters with automatic clusters and update
' selection.
'
'------------------------------------------------------------------------------
function FApplySelectedOp ( byref io_connectionset, in_interactive, in_AssignNew, in_op, byref in_ConstructionMode )
	Dim	MyClusterList, MySubCompList, MyGroup, MyGroupClusterList, _
		MyGroupSubCompList, MyNewGroup, MyIndex, MyGroups, MyConnectionSet, _
		MyAutomaticObjects
	
	set FApplySelectedOp = Nothing

	'--------------------------------------------------------------------
	' Convert subcomponents to clusters.
	'--------------------------------------------------------------------
	set MyGroups = io_connectionset.Groups

	for MyIndex = 0 to MyGroups.Count - 1
		set MyGroup = MyGroups(MyIndex)
		set MyGroupClusterList = Nothing
		set MyGroupSubCompList = Nothing

		set MyNewGroup = FSubComponents2Clusters( MyGroup.obj, MyGroupClusterList, MyGroupSubCompList  )

		if TypeName(MyGroupSubCompList) <> "Nothing" then
			' update group
			io_connectionset.ReplaceGroup MyIndex, MyNewGroup 

			' record automatic object
			io_connectionset.AddAutomaticObjects MyGroupClusterList, Nothing

			if IsEmpty(MyClusterList) then
				set MyClusterList = MyGroupClusterList
			else
				MyClusterList.AddItems MyGroupClusterList
			end if
			if IsEmpty(MySubCompList) then
				set MySubCompList = MyGroupSubCompList
			else
				MySubCompList.AddItems MyGroupSubCompList
			end if
		end if
	next

	'--------------------------------------------------------------------
	'	Apply Selected operators (assignment and enforcer).
	'--------------------------------------------------------------------
	set MyConnectionSet = io_connectionset
	
	Select Case in_op
		Case 1		'FlexEnv Op
			set FApplySelectedOp = SIApplyFlexEnv( io_connectionset, in_interactive, in_AssignNew , in_ConstructionMode )
		Case 2		'DeformByCage Op
			set FApplySelectedOp = SIApplyDeformByCage( io_connectionset, in_interactive , in_ConstructionMode )
		Case 3		'DeformBySpine Op
			set FApplySelectedOp = SIApplyDeformBySpine( io_connectionset, in_interactive , in_ConstructionMode )
	End Select

	'--------------------------------------------------------------------
	' Update io_connectionset with automatic objects from the original
	' input connection set.
	'--------------------------------------------------------------------
	set MyAutomaticObjects = MyConnectionSet.AutomaticObjects

	if TypeName(MyAutomaticObjects) <> "Nothing" then
		io_connectionset.AddAutomaticObjects MyAutomaticObjects, Nothing
	end if

	'--------------------------------------------------------------------
	' add created clusters to selection (in place of tagclusters)
	'--------------------------------------------------------------------
	if Not IsEmpty (MyClusterList) Then
		' Remove the tagclusters from the current selection
		RemoveFromSelection MySubCompList

		On Error Resume Next

		' Add replacement clusters to selection
		AddToSelection (MyClusterList)
	end if
end function


'------------------------------------------------------------------------------
' NAME:		FTextToCurveListToMeshFunc
'
' INPUT:	- in_Preset	: describes the preset to use for the operator CurveListToMesh
'			- in_bInteractive : weither or not we are in an interactive context
'			
' OUTPUT:	- out_CurvesObject : curvelist generated from the text
'
' RETURN:	- operator CurveListToMesh is returned
'
' DESCRIPTION:  low-level function to apply a "CurveListToMeshOp" to a Text CurveList.
'				Apply the operator with a preset, like TextToCurveListToPlanarMesh.
'------------------------------------------------------------------------------
function FTextToCurveListToMeshFunc(	in_Preset, in_bInteractive, byref out_CurvesObject )

	Dim l_CreatedOperators, l_outObjs, l_ConnectionSetList, l_ConnectionSetListString, l_Geometry

	set l_outObjs = Nothing

	'--------------------------------------------------------------------
	' Create the implicit primitive 
	'--------------------------------------------------------------------
	set out_CurvesObject = SIGetPrim( "Text", "", "", 1).value("Value")

	'--------------------------------------------------------------------
	' Generate the primitive geometry
	'--------------------------------------------------------------------
	set l_Geometry = SIConvert("NurbsCurve", out_CurvesObject ).value("CreatedObj")

	'--------------------------------------------------------------------
	' Hide the text curvelist
	'--------------------------------------------------------------------
	ToggleVisibility out_CurvesObject

	' We pass siPersistentOperation because we need to handle the immediate mode ourself
	set l_CreatedOperators = FApplyOp( in_Preset, out_CurvesObject, ":siUnspecified:siBranchFlag", siPersistentOperation, _
		in_bInteractive, l_outObjs, l_ConnectionSetList, l_ConnectionSetListString, Nothing )

	'--------------------------------------------------------------------
	' Select the object
	'--------------------------------------------------------------------
	if Not TypeName (l_outObjs) = "Nothing" then
		SelectFilter siConditionalObjectFilter
		SelectObj l_outObjs
	end if
	
	set FTextToCurveListToMeshFunc = l_CreatedOperators
end function

'------------------------------------------------------------------------------
' NAME:		TextToCurveListToMeshFunc
'
' INPUT:	- in_Preset	: describes the preset to use for the operator CurveListToMesh
'			- in_OperationMode : tells if we should freeze the operator or not
'
' OUTPUT:	- none
'
' RETURN:	- operator created by this function (none in immediate mode)
'
' DESCRIPTION:	Apply a CurveListToMesh preset on a Text CurveList.
' NON-UI VERSION
'------------------------------------------------------------------------------
function TextToCurveListToMeshFunc( in_Preset, in_OperationMode )

	Dim l_CreatedOperators, l_CurvesObject

	' We pass FALSE for in_bInteractive (Non-interative version)
	set l_CreatedOperators = FTextToCurveListToMeshFunc( in_Preset, FALSE, l_CurvesObject )

	if in_OperationMode = siImmediateOperation then
		FreezeModeling l_CreatedOperators, , siUnspecified
		DeleteObj l_CurvesObject
		set TextToCurveListToMeshFunc = Nothing
	else
		set TextToCurveListToMeshFunc = l_CreatedOperators
	end if
end function

'------------------------------------------------------------------------------
' NAME:		TextToCurveListToMeshProc
'
' INPUT:	- in_Preset	: describes the preset to use for the operator CurveListToMesh
'
' OUTPUT:	- inout_OperationMode : will return weither or not the ImmediateMode was ON in MCP
'
' RETURN:	- operator created by this function
'
' DESCRIPTION:	Apply a CurveListToMesh preset on a Text CurveList.
' UI VERSION
'------------------------------------------------------------------------------
sub TextToCurveListToMeshProc( in_Preset, byref inout_OperationMode )

	Dim l_CreatedOperators, l_bOperationMode, l_CurvesObject

	'--------------------------------------------------------------------
	' Get the Current Operation mode and update the inout_OperationMode
	'--------------------------------------------------------------------
	l_bOperationMode = GetUserPref("OperationMode")

	if l_bOperationMode then
		inout_OperationMode = siImmediateOperation
	else
		inout_OperationMode = siPersistentOperation
	end if

	' We pass TRUE for in_bInteractive (Interative version)
	set l_CreatedOperators = FTextToCurveListToMeshFunc( in_Preset, TRUE, l_CurvesObject )

	AutoInspect l_CreatedOperators

	if inout_OperationMode = siImmediateOperation then
		FreezeModeling l_CreatedOperators, , siUnspecified
		DeleteObj l_CurvesObject
	end if
end sub

'------------------------------------------------------------------------------
' NAME:		FApplyExtractFromPartClsFunc
'
' INPUT:	- in_Preset	: describes the preset to use for the operator
'			- in_ConnectionSet	: connectionset containing partition clusters elemrefs
'			- in_bInteractive : weither or not we are in an interactive context
'			- in_NewObjName : the name of each 3d object created (auto-append with counter for unicity)
'			- in_bDeleteInputComponents : TRUE if we want the components to be removed from the input geometry
'			- in_InputsDisposalMode : defines what we do with the inputs after the operation
'
' OUTPUT:	- out_outputObjs: list of output primitives generated 
'			- io_ConnectionSet	: connectionset containing partition clusters elemrefs
'
' RETURN:	- list of operators created by this function (none in immediate mode)
'
' DESCRIPTION: low-level function to apply a ExtractSubCrv or ExtractPolygon operator
'------------------------------------------------------------------------------
function FApplyExtractFromPartClsFunc(	in_Preset, _
										in_ConnectionSet, _
										in_bInteractive, _
										in_NewObjName, _
										in_bDeleteInputComponents, _
										in_OperationMode, _
										in_InputsDisposalMode, _
										byref out_outputObjs, _
										byref out_cnxsetlist, _
										byref io_cnxsetlisttolog )

	Dim l_CreatedOperators, l_outObjs, l_ConnectionSetListString, _
		myExtractOp, myExtractOp3DObject, l_New3DObjects, l_null, _
		l_Cluster, l_LastDot, l_Components
	dim l_ObjectsToDelete, l_ObjectsToHide
	dim l_ComponentsToDelete, l_SubComp

	set l_outObjs = Nothing

	' we pass siPersistentOperation because we need to handle the immediate mode ourself
	' we pass TRUE for in_bDisableAutoInspect as the caller will take care of this himself
	set l_CreatedOperators = FApplyOp( in_Preset, in_ConnectionSet, ":siUnspecified:siBranchFlag", siPersistentOperation, _
		in_bInteractive, l_outObjs, out_cnxsetlist, io_cnxsetlisttolog, Nothing )

	set out_outputObjs = l_outObjs

	set l_New3DObjects = CreateObject("XSI.Collection")
	for each myExtractOp in l_CreatedOperators
		set myExtractOp3DObject = myExtractOp.Owners(0).Parent
		if in_NewObjName = "" Then
			' let's get the cluster name. CnxGroupset differs for transfer attributes friendly operators...
			if( myExtractOp3DObject.ActivePrimitive.BelongsTo( siMeshFamily ) ) then
				set l_Cluster = myExtractOp.inputports(3).target2
			else
				set l_Cluster = myExtractOp.inputports(2).target2
			end if
			l_LastDot = InStrRev(l_Cluster,".")
			' ok if l_LastDot = 0
			SetValue myExtractOp3DObject & ".name", Mid(l_Cluster,l_LastDot+1)
		else
			SetValue myExtractOp3DObject & ".name", in_NewObjName
		end if

		' Transfer attributes: All implied by the "", and share materials implied by TRUE
		' NOTE: ARF Feb 2004 - For X3D development:
		' This is temporary. When the curve extract can support the interface of attribute transfer
		' this if can go away or be extended.		
		if( myExtractOp3DObject.ActivePrimitive.BelongsTo( siMeshFamily ) ) then
			TransferAllPropertiesAcrossGenOp myExtractOp, myExtractOp3DObject, "", TRUE
		end if

		l_New3DObjects.Add myExtractOp3DObject
	next
	if l_CreatedOperators.Count > 1 then
		' let's create a null and parent all the objects to them 
		if in_NewObjName = "" Then
'			set l_null = ActiveProjectActiveScene.Root.AddNull
			set l_null = SIGetPrim( "Null" ).value("Value")
		Else
'			set l_null = ActiveProjectActiveScene.Root.AddNull( in_NewObjName & "_null" )
			set l_null = SIGetPrim( "Null", in_NewObjName & "_null" ).value("Value")
		end if
		ParentObj l_null, l_New3DObjects
		SelectObj l_null, "BRANCH"
	elseif l_CreatedOperators.Count = 1 then
		SelectObj l_New3DObjects(0)
	end if

	if in_bDeleteInputComponents then
		set l_ComponentsToDelete = CreateObject("XSI.Collection")
		for each myExtractOp in l_CreatedOperators
			if( myExtractOp3DObject.ActivePrimitive.BelongsTo( siMeshFamily ) ) then
				set l_Cluster = myExtractOp.inputports(3).target2
			else
				set l_Cluster = myExtractOp.inputports(2).target2
			end if

			set l_Components = SelectMembers( l_Cluster, 0 )

			for each l_SubComp in l_Components
				l_ComponentsToDelete.Add l_SubComp
			next
		next
	end if

	if in_OperationMode = siPersistentOperation and in_InputsDisposalMode = siDeleteGenOpInputs then
		logMessage "siPersistentOperation ignored with siDeleteGenOpInputs, switching to siImmediateOperation", siWarning
		in_OperationMode = siImmediateOperation
	end if

	if in_InputsDisposalMode = siDeleteGenOpInputs then
		'--------------------------------------------------------------------
		' Let's get the inputs to delete
		' we cannot delete the inputs before the freeze otherwise 
		' the output object will disappear !
		'--------------------------------------------------------------------
		set l_ObjectsToDelete = CreateObject("XSI.Collection")
		GetGeneratorInputsForDisposal l_CreatedOperators, siDeleteGenOpInputs, l_ObjectsToDelete
	elseif in_InputsDisposalMode = siHideGenOpInputs then
		'--------------------------------------------------------------------
		' Let's get the inputs to hide
		' this needs to be done after the AutoInspect in case the user
		' selects CANCEL
		'--------------------------------------------------------------------
		set l_ObjectsToHide = CreateObject("XSI.Collection")
		GetGeneratorInputsForDisposal l_CreatedOperators, siHideGenOpInputs, l_ObjectsToHide
	end if

	if in_OperationMode = siImmediateOperation then
		if in_InputsDisposalMode = siDeleteGenOpInputs then
			'--------------------------------------------------------------------
			' Let's get the inputs to delete
			' we cannot delete the inputs before the freeze otherwise 
			' the output object will disappear !
			'--------------------------------------------------------------------
			set l_ObjectsToDelete = CreateObject("XSI.Collection")
			GetGeneratorInputsForDisposal l_CreatedOperators, siDeleteGenOpInputs, l_ObjectsToDelete
		end if

		FreezeModeling l_CreatedOperators, , siUnspecified
		set FApplyExtractFromPartClsFunc = Nothing
	else
		set FApplyExtractFromPartClsFunc = l_CreatedOperators
	end if

	'note: when in_bDeleteInputComponents is TRUE, in_OperationMode is supposed to be siImmediateOperation

	if in_bDeleteInputComponents then
		ApplyTopoOp "DeleteComponent", l_ComponentsToDelete
	end if

	'--------------------------------------------------------------------
	' OK now delete or hide the objects if required
	'--------------------------------------------------------------------
	if in_InputsDisposalMode = siDeleteGenOpInputs then
		DeleteObj l_ObjectsToDelete
	elseif in_InputsDisposalMode = siHideGenOpInputs then
		HideAndUnselect l_ObjectsToHide
	end if

end function

'------------------------------------------------------------------------------
' NAME:		ApplyExtractFromPartClsFunc
'
' INPUT:	- in_Preset	: describes the preset to use for the operator
'			- io_ConnectionSet	: connectionset containing partition clusters elemrefs
'			- in_NewObjName : the name of each 3d object created (auto-append with counter for unicity)
'			- in_bDeleteInputComponents : TRUE if we want the components to be removed from the input geometry
'			- in_OperationMode : tells if we should freeze the operator or not
'			- in_InputsDisposalMode : defines what we do with the inputs after the operation
'			- out_outputObjs: list of output primitives generated 
'
' RETURN:	- list of operators created by this function (none in immediate mode)
'
' DESCRIPTION: Apply the ExtractSubCrv or ExtractPolygon operator to a list of objects
' NON-UI VERSION
'------------------------------------------------------------------------------
function ApplyExtractFromPartClsFunc(	in_Preset, _
										io_ConnectionSet, _
										in_NewObjName, _
										in_bDeleteInputComponents, _
										in_OperationMode, _
										in_InputsDisposalMode, _
										byref out_outputObjs )

	Dim l_outObjs
	dim  l_ConnectionSetList, l_ConnectionSetListString

	' we pass FALSE for in_bInteractive
	set ApplyExtractFromPartClsFunc = FApplyExtractFromPartClsFunc( in_Preset, io_ConnectionSet, FALSE, in_NewObjName, _
																in_bDeleteInputComponents, in_OperationMode, _
																in_InputsDisposalMode, l_outObjs, _
																l_ConnectionSetList, l_ConnectionSetListString )

	set out_outputObjs = l_outObjs

end function

'------------------------------------------------------------------------------
' NAME:		ApplyExtractFromPartClsProc
'
' INPUT:	- in_Preset	: describes the preset to use for the operator
'			- io_ConnectionSet	: connectionset containing subcurves elemrefs
'			- in_NewObjName : the name of each 3d object created (auto-append with counter for unicity)
'			- in_bDeleteInputComponents : TRUE if we want the components to be removed from the input geometry (detach)
'
' OUTPUT:	- inout_OperationMode : will return weither or not the ImmediateMode was ON in MCP
'			- inout_InputsDisposalMode : define what we do with the inputs after the operation (keep, hide or delete)
'			- out_outputObjs: no used
'
' RETURN:	- list of operators created by this function
'
' DESCRIPTION: Apply the ExtractSubCrv or ExtractPolygon operator to a list of objects
' UI VERSION
'------------------------------------------------------------------------------
Function ApplyExtractFromPartClsProc(	in_Preset, _
									io_ConnectionSet, _
									in_NewObjName, _
									in_bDeleteInputComponents, _
									byref inout_OperationMode, _
									byref inout_InputsDisposalMode, _
									byref out_outputObjs )

	Dim l_CreatedOperators, l_bOperationMode
	dim  l_bRestoreOperationMode
	dim  l_ConnectionSetList, l_ConnectionSetListString

	'--------------------------------------------------------------------
	' Get the Current Operation mode and upadte the inout_OperationMode
	'--------------------------------------------------------------------

	l_bOperationMode = GetUserPref("OperationMode")

	if l_bOperationMode or in_bDeleteInputComponents then
		inout_OperationMode = siImmediateOperation
	else
		inout_OperationMode = siPersistentOperation
	end if

	'--------------------------------------------------------------------
	' check the input management user pref to see if we should go 
	' in "immediate" mode temporarily.
	'--------------------------------------------------------------------
	ReadGenInputMgmtUserPref inout_InputsDisposalMode, inout_OperationMode, l_bRestoreOperationMode

	' we pass TRUE for in_bInteractive
	set l_CreatedOperators = FApplyExtractFromPartClsFunc( in_Preset, io_ConnectionSet, TRUE, in_NewObjName, _
														in_bDeleteInputComponents, inout_OperationMode, _
														inout_InputsDisposalMode, out_outputObjs, _
														l_ConnectionSetList, l_ConnectionSetListString )

	'--------------------------------------------------------------------
	' propagate the connection set to log back to caller thru io_ConnectionSet
	'--------------------------------------------------------------------
	io_ConnectionSet = CStr( l_ConnectionSetListString )

	'--------------------------------------------------------------------
	' Inspect the operator(s).
	'--------------------------------------------------------------------
	if Not TypeName (l_CreatedOperators) = "Nothing" and inout_OperationMode = siPersistentOperation then
		AutoInspect l_CreatedOperators
	end if

	if l_bRestoreOperationMode then
		SetUserPref "OperationMode", 0
	end if
	
	set ApplyExtractFromPartClsProc = l_CreatedOperators
end Function

'------------------------------------------------------------------------------
' NAME:		WeldTwoEdgesProc
'
' INPUT:	- in_ConnectionSet : the two edges to weld
'
' DESCRIPTION:	Apply the WeldEdges operator with no picking session and no ppg
'
'------------------------------------------------------------------------------
sub WeldTwoEdgesProc( in_ConnectionSet )

	Dim l_OperationMode
	
	'--------------------------------------------------------------------
	' Get the Current Operation mode and update the inout_OperationMode
	'--------------------------------------------------------------------
	if GetUserPref("OperationMode") then
		l_OperationMode = siImmediateOperation
	else
	    l_OperationMode = siPersistentOperation
	end if

	ApplyTopoOp "WeldTwoEdges", in_ConnectionSet, , l_OperationMode

end sub

'------------------------------------------------------------------------------
' NAME:		TriangulateProc
'
' INPUT:	- in_ConnectionSet : the polygons to triangulate
'
' DESCRIPTION:	Apply the SubdividePolygons operator with the 
'				"TriangulatePolygons" preset and with no ppg
'
'------------------------------------------------------------------------------
sub TriangulateProc( in_ConnectionSet )

	Dim l_OperationMode
	
	'--------------------------------------------------------------------
	' Get the Current Operation mode and update the inout_OperationMode
	'--------------------------------------------------------------------
	if GetUserPref("OperationMode") then
		l_OperationMode = siImmediateOperation
	else
	    l_OperationMode = siPersistentOperation
	end if

	ApplyTopoOp "TriangulatePolygons", in_ConnectionSet, , l_OperationMode

end sub


'******************************************************************************
' Trimming related commands
'******************************************************************************

'------------------------------------------------------------------------------
' NAME:		TrimWithProc
'
' INPUT:	- Operators.  Trim operators.  
'
' DESCRIPTION:	Start selection to pick trims to not use in trim operators.
'
'------------------------------------------------------------------------------
sub TrimWithProc( in_InputObjs, byref io_SubComps )

	Dim Button
	Dim oSel
	Dim SelList
	Dim item
	Dim OpArray

	'logmessage "Start of TrimWithProc" 

	OpArray = split( in_InputObjs, "," )

	' Start a selection if the array of indices is empty.
	' Else just use the array of indices
	if( io_SubComps.count = 0 )  then

		Dim OldTrimWithValue()
		Dim CurBound

		' Set To trim with none.  To see projected curves.
		' Keep old trims values in case nothing is selected.
		CurBound = 0
		for each Item in OpArray
			if CurBound > 0 then
				CurBound = ubound(OldTrimWithValue) + 1
				Redim preserve OldTrimWithValue( CurBound )
			else
				CurBound = 0
				Redim OldTrimWithValue(0)
			end if

			OldTrimWithValue( CurBound ) = GetValue( Item & ".trimwithmode" )
			SetValue Item & ".trimwithmode", 0
		next

		'Deselect all using filter... This filter is weird and we must find-out from where it comes
		SetSelFilter "SurfaceCurve"
		DeselectAll

		' Select surface curves that will be used to trim.
		Button = 1
		While Button <> 0

			PickElement "SurfaceCurve", XSIUtils.Translate( IDS_TRIM_MSG_L, "XSISCRIPTS" ), XSIUtils.Translate( IDS_TRIM_MSG_M, "XSISCRIPTS" ), oSel, Button

			if typename(oSel) <> "Empty" And Button <> 0  then
				'logmessage oSel.type
				'logmessage typename( oSel )

				'Button 2 never gets log because PickElement seems to ignoreit...
				'logmessage "Button " & Button
				Select Case Button
					Case 1
						AddToSelection oSel
					Case 2
						RemoveFromSelection oSel
				End Select
			end if
		Wend

		'Set internal selection list and in/out parameter to reflect the user's selection.

		set SelList = GetValue("SelectionList")
		set io_SubComps = SelList

		' Reset original value if nothing selected.
		if SelList = "" then
			Dim l_iter
			l_iter = 0
			for each Item in OpArray
				if isArray( OldTrimWithValue ) then
					SetValue Item & ".trimwithmode", OldTrimWithValue( l_iter )
					l_iter = l_iter + 1
				end if
			next
		end if
	else
		'Set the selection list to the in/out parameter because it is not empty and assumed correct
		set SelList = io_SubComps
	end if

	'Convert to string before executing trim
	io_SubComps = CStr( io_SubComps)

	'Call the internal command if selection list is empty
	if SelList <> "" then
		Dim AllSelArray

		for each item in SelList
			if typename( item ) = "CollectionItem" And item.type = "srfcrvSubComponent" then
				Dim Elems
				Elems = item.SubElements

				if IsArray( AllSelArray ) then
					Dim i
					Dim NewBound
					Dim OldBound

					OldBound = ubound(AllSelArray)
					NewBound = ubound(AllSelArray) + ubound( Elems ) +1

					ReDim preserve AllSelArray( NewBound )

					for i= 0 to ubound( Elems )
						AllSelArray( i + OldBound + 1) = Elems( i )
					next
				else
					AllSelArray = Elems
				end if
			end if
		next	

		if isArray( AllSelArray )then
			SITrimWith in_InputObjs, AllSelArray, true
			'Set trim mode to be: with given  -- Maybe this should be done in the task...
			for each Item in OpArray
				SetValue Item & ".trimwithmode", 2
			next

		end if
	end if

	'Makes surface curves not shuffle on the NURBS
	DeselectAll

end sub

'******************************************************************************
' PolygonMesh Symmetrize topo op related commands
'******************************************************************************

'------------------------------------------------------------------------------
' NAME:		SetSymmetrizePolygonOpRefPlane
'
' INPUT:	- in_SymmetrizePolygonsOpName: name of the symmetrize polygon op's operator.
'           - in_RefPlane: ref plane's name (Transform, ReferencePlane1... Not View or XY or XZ or YZ).
'
' DESCRIPTION:	Simply copy values from the input ref plane to the symmetrize operator's symmetry plane.
'
'------------------------------------------------------------------------------
sub SetSymmetrizePolygonOpRefPlane( in_SymmetrizePolygonsOpName, in_RefPlane )
	Dim l_InputObjs, l_obj
	set l_InputObjs = SIFilter( in_SymmetrizePolygonsOpName, "Operator" )

	if IsEmpty(l_InputObjs) Or TypeName(l_InputObjs) = "Nothing" Then
		logmessage "This command must be applied on a SymmetrizePolygon operator."
		Exit sub
	end if

	for each l_obj in l_InputObjs
		if l_obj.Type <> "symmetrizepolygonop" Then
			logmessage "This command must be applied on a SymmetrizePolygon operator."
			Exit sub
		end if
	next

	if in_RefPlane = "View" or in_RefPlane = "XY" or in_RefPlane = "XZ" or in_RefPlane = "YZ" Then
		logmessage "The input reference plane cannot be View, XY, XZ or YZ."
		Exit sub
	end if

	SetCurrentReferencePlane "RefPlanes." & in_RefPlane
	SetUserPref "3D_TRANSFO_REFERENTIAL_CHANGED", 7 'Activate RefPlane mode

	for each l_obj in l_InputObjs
		SetValue l_obj & ".symmetryreference", 0
		SetValue l_obj & ".symmetryplane", 3
		SetValue l_obj & ".planeposx", GetValue("RefPlanes." & in_RefPlane & ".posx")
		SetValue l_obj & ".planeposy", GetValue("RefPlanes." & in_RefPlane & ".posy")
		SetValue l_obj & ".planeposz", GetValue("RefPlanes." & in_RefPlane & ".posz")
		SetValue l_obj & ".planerotx", GetValue("RefPlanes." & in_RefPlane & ".rotx")
		SetValue l_obj & ".planeroty", GetValue("RefPlanes." & in_RefPlane & ".roty")
		SetValue l_obj & ".planerotz", GetValue("RefPlanes." & in_RefPlane & ".rotz")
		SetValue l_obj & ".planenormal", GetValue("RefPlanes." & in_RefPlane & ".normal")
	next

end sub

'------------------------------------------------------------------------------
' NAME:		SetRefPlaneFromSymmetrizePolygonOp
'
' INPUT:	- in_SymmetrizePolygonsOpName: name of the symmetrize polygon op's operator.
'           - in_RefPlane: ref plane's name (Transform, ReferencePlane1... Not View or XY or XZ or YZ).
'
' DESCRIPTION:	Simply copy values from the the symmetrize operator's symmetry plane to the input ref plane.
'
'------------------------------------------------------------------------------
sub SetRefPlaneFromSymmetrizePolygonOp( in_RefPlane, in_SymmetrizePolygonsOpName )
	Dim l_InputObjs, l_obj
	set l_InputObjs = SIFilter( in_SymmetrizePolygonsOpName, "Operator" )

	if IsEmpty(l_InputObjs) Or TypeName(l_InputObjs) = "Nothing" Then
		logmessage "This command must be applied on a SymmetrizePolygon operator."
		Exit sub
	end if

	for each l_obj in l_InputObjs
		if l_obj.Type <> "symmetrizepolygonop" Then
			logmessage "This command must be applied on a SymmetrizePolygon operator."
			Exit sub
		end if
	next

	if in_RefPlane = "View" or in_RefPlane = "XY" or in_RefPlane = "XZ" or in_RefPlane = "YZ" Then
		logmessage "The input reference plane cannot be View, XY, XZ or YZ."
		Exit sub
	end if

	SetCurrentReferencePlane "RefPlanes." & in_RefPlane
	SetUserPref "3D_TRANSFO_REFERENTIAL_CHANGED", 7 'Activate RefPlane mode

	for each l_obj in l_InputObjs
		SetValue l_obj & ".symmetryreference", 0
		SetValue l_obj & ".symmetryplane", 3
		SetValue "RefPlanes." & in_RefPlane & ".posx", GetValue(l_obj & ".planeposx")
		SetValue "RefPlanes." & in_RefPlane & ".posy", GetValue(l_obj & ".planeposy")
		SetValue "RefPlanes." & in_RefPlane & ".posz", GetValue(l_obj & ".planeposz")
		SetValue "RefPlanes." & in_RefPlane & ".rotx", GetValue(l_obj & ".planerotx")
		SetValue "RefPlanes." & in_RefPlane & ".roty", GetValue(l_obj & ".planeroty")
		SetValue "RefPlanes." & in_RefPlane & ".rotz", GetValue(l_obj & ".planerotz")
		SetValue "RefPlanes." & in_RefPlane & ".normal", GetValue(l_obj & ".planenormal")
	next

end sub

'------------------------------------------------------------------------------
' NAME:		SelectGeneratorInputs
'
' INPUT:	- in_Operators: list of generator operators
'				(or 3dobjects with generator operators)
'
' DESCRIPTION:	Simply selects the inputs of generator operators
'
'------------------------------------------------------------------------------
sub SelectGeneratorInputs( in_objects )
	dim oObjectsToSelect

	set oObjectsToSelect = CreateObject("XSI.Collection")

	GetGeneratorInputsForDisposal in_objects, siHideGenOpInputs, oObjectsToSelect

	SelectObj oObjectsToSelect
end sub

'------------------------------------------------------------------------------
' NAME:		HideGeneratorInputs
'
' INPUT:	- in_Operators: list of generator operators
'				(or 3dobjects with generator operators)
'
' DESCRIPTION:	Simply hides the inputs of generator operators
'
'------------------------------------------------------------------------------
sub HideGeneratorInputs( in_objects )
	dim oObjectsToHide

	set oObjectsToHide = CreateObject("XSI.Collection")

	GetGeneratorInputsForDisposal in_objects, siHideGenOpInputs, oObjectsToHide

	ToggleVisibility oObjectsToHide
end sub

'------------------------------------------------------------------------------
' NAME:		BurnAndDeleteGATOROperator
'
' INPUT:	- inObject: GATOR operator
'			- oObjectsToDelete list of objects to be deleted

' DESCRIPTION:	Special processing for GATOR op during the Freeze Generator 
'				operation.
'				The weight values for the GATOR op will be burned into an
'				existing envelope weight property if one exists.
'				The GATOR op and it's related cluster and envelope op, will
'				then be marked for deletion.
'				This is being done to collapse the envelope operator created
'				by the GATOR op.
'
'------------------------------------------------------------------------------
sub BurnAndDeleteGATOROperator( inObject, byref oObjectsToDelete )
	'Functionly only applies to the GATOR op
	if inObject.Type = "TransferAttributes" then
		Dim oAffectedEnvelopes
		'Get all the envelope ops belonging to the parent object of this GATOR op
		set oAffectedEnvelopes = inObject.Parent3DObject.Envelopes
		if oAffectedEnvelopes.Count < 2 then
			exit sub	'Abort if there is only 1 Envelope Op (belonging to the GATOR) remaining
		end if	
		
		Dim oGATORCluster
		Dim oOwners
		Dim oOwnerItem
		set oOwners = inObject.Owners
		for each oOwnerItem in oOwners	'Check the owners for the GATOR looking for the target cluster
			if Application.ClassName( oOwnerItem ) = "Cluster" then
				set oGATORCluster = oOwnerItem 
				exit for
			end if
		next	
		
		Dim oGATOREnvelopes
		set oGATOREnvelopes = oGATORCluster.Envelopes
		Dim oGATOREnvelope
		set oGATOREnvelope = oGATOREnvelopes(0) 'There should only be 1 EnvelopeOp for the GATOR cluster
		Dim oGATOREnvelopeWeights		
		oGATOREnvelopeWeights = oGATOREnvelope.Weights.Array 'Get the envelope weights from the GATOR's EnvelopeOp
		
		'Burn the GATOR weights into each affected envelope
		'This will make sure that the GATOR weights do not get lost after it gets deleted below
		Dim oAffectedEnvelope
		for each oAffectedEnvelope in oAffectedEnvelopes
			if oAffectedEnvelope <> oGATOREnvelopes(0) then		'Ignore the GATOR op that is being burned
				Dim iDeformerIndex
				Dim iElementIndex

				Dim oItemWeights
				Dim lWeight

				Dim oDeformer

				for iDeformerIndex = 0 to oGATOREnvelope.Deformers.Count - 1
					set oDeformer = oGATOREnvelope.Deformers.Item( iDeformerIndex )
					oItemWeights = oAffectedEnvelope.GetDeformerWeights( oDeformer )

					for iElementIndex = 0 to oGATOREnvelope.Elements.Count - 1
						lWeight = oGATOREnvelopeWeights( iDeformerIndex, iElementIndex )
						if lWeight <> 0 then
							'Set weights on the array
							oItemWeights( iElementIndex ) = lWeight
						end if
					next

					'Set modified weights on the affected envelope, without normalizing the weights
					oAffectedEnvelope.SetDeformerWeights2 oDeformer, oItemWeights
				next
			end if
		next

		'Add the GATOR cluster so it gets deleted later
		'Deleting the GATOR cluster also removes the GATOR op and associated envelope op
		oObjectsToDelete.Add( oGATORCluster )
	end if
end sub

'------------------------------------------------------------------------------
' NAME:		DeleteGeneratorInputs
'
' INPUT:	- in_Operators: list of generator operators
'				(or 3dobjects with generator operators)
'
' DESCRIPTION:	Simply deletes the inputs of generator operators
'
'------------------------------------------------------------------------------
sub DeleteGeneratorInputs( in_objects )
	dim oObjectsToDelete, item, oOperatorsToFreeze, oPrimitive, oConstructionHistory, oGenList

	set oOperatorsToFreeze = CreateObject("XSI.Collection")
	
	for each item in in_objects
		if TypeName(item) = "X3DObject" then
			' lets find the generator operator of this 3dobject
			set oConstructionHistory = item.activeprimitive.ConstructionHistory

			set oGenList = oConstructionHistory.Filter( , "GeneratorOperators" )

			if oGenList.count > 0 then
				oOperatorsToFreeze.Add oGenList(0)
			end if

		else if TypeName(item) = "Operator" then
			' lets see if the operator is a generator
			if InStr( 1, item.Families, "GeneratorOperators", vbTextCompare ) > 0 then
				oOperatorsToFreeze.Add item
			end if
		end if
		end if
	next

	if oOperatorsToFreeze.count > 0 then
		set oObjectsToDelete = CreateObject("XSI.Collection")

		GetGeneratorInputsForDisposal oOperatorsToFreeze, siDeleteGenOpInputs, oObjectsToDelete

		'Check for and optionally burns weights belonging to GATOR ops onto an existing envelope
		for each item in oOperatorsToFreeze
			BurnAndDeleteGATOROperator item, oObjectsToDelete
		next
		
		FreezeObj oOperatorsToFreeze, , siUnspecified
		DeleteObj oObjectsToDelete
		
	end if

end sub

'------------------------------------------------------------------------------
' NAME:		ApplySpringOpProc
'
' INPUT:	1) collection containing: simulated object + control object
'			2) parameters: mass, stiffness, damping
'			3) mixer source that will be used as the simulation cache
'
' DESCRIPTION:	
'			Connects two objects using a simulation (i.e. 'cacheable') spring operator. 
'
'------------------------------------------------------------------------------
sub ApplySpringOpProc( in_objects, in_dMass, in_dK, in_dB, inout_Cache, out_objects)
	dim oEff, oRoot, oSimulationTC, oCacheAction, oEvolveOp, oSpringOp, myStrConnectionSet, cachename
	set oEff = in_objects(0)
	set oRoot = in_objects(1)

	if inout_Cache = "" then
		set oCacheAction = oEff.Model.AddActionSource("SpringCacheSource")
		inout_Cache = oCacheAction.FullName 
	end if

	'
	' Set initial state of simulation, and rest state of the spring (i.e. rest length)
	'
	dim oPos, oXfmEffRelRoot

	set oPos = XSIMath.CreateVector3
	set oXfmEffRelRoot = XSIMath.MapWorldPoseToObjectSpace(oRoot.Kinematics.Global.Transform, oEff.Kinematics.Global.Transform )
	oXfmEffRelRoot.GetTranslation oPos

	set oSpringOp = ApplyOp("SpringOp", in_objects)(0)

	SetValue oSpringOp & ".Mass",				in_dMass
	SetValue oSpringOp & ".LinearStiffness",	in_dK
	SetValue oSpringOp & ".LinearDamping",		in_dB
	SetValue oSpringOp & ".AngularStiffness",	in_dK
	SetValue oSpringOp & ".AngularDamping",		in_dB

	SetValue oSpringOp & ".RestPosX",			oPos.x
	SetValue oSpringOp & ".RestPosY",			oPos.y
	SetValue oSpringOp & ".RestPosZ",			oPos.z
	SetValue oSpringOp & ".InitialStatePosX",	oPos.x
	SetValue oSpringOp & ".InitialStatePosY",	oPos.y
	SetValue oSpringOp & ".InitialStatePosZ",	oPos.z
	SetValue oSpringOp & ".InitialStateVelX",	0
	SetValue oSpringOp & ".InitialStateVelY",	0
	SetValue oSpringOp & ".InitialStateVelZ",	0

	myStrConnectionSet = oEff.kinematics.global.fullname & ";" & oEff.kinematics.global.fullname
	myStrConnectionSet = myStrConnectionSet & ";" & oSpringOp & ".simtimectrl" & ";" & inout_Cache

	SetValue oSpringOp & ".simtimectrl.playmode", 2 'interactive mode

	SetValue oSpringOp & ".simtimectrl.SynchWithSceneStart", true
	SetValue oSpringOp & ".simtimectrl.SynchWithSceneEnd", true

	set oEvolveOp = ApplyOp("EvolveOp",  myStrConnectionSet)(0)

	set out_objects = CreateObject("XSI.Collection")

	out_objects.Add oSpringOp

end sub

'------------------------------------------------------------------------------
' NAME:	InspectBoneProc
'
' INPUT:	- in_ChainNodes	' Chain nodes
'
' OUTPUT:	- none
'
' DESCRIPTION: 
'------------------------------------------------------------------------------
sub InspectSpringPropertiesProc( in_SpringNodes )

	dim SpringOpColl, EvolveOpColl,opColl, ops_to_inspect,i,j,obj,springnode,springobj

	set ops_to_inspect = CreateObject("XSI.Collection")
	set opColl = CreateObject("XSI.Collection")
	set SpringOpColl = FindObjects(,"{3FD4FBAA-D329-4950-8193-35AABCB98294}")
	set EvolveOpColl = FindObjects(,"{CBB627A6-84EC-42A3-894D-09F78FCF0293}")

	opColl.AddItems SpringOpColl
	opColl.AddItems EvolveOpColl

	'match the springs with the ones in the selection
 	for i=opColl.count-1 to 0 step -1

		for j=0 to in_SpringNodes.count-1

			if typename(opColl(i).OutputPorts(0)) <> "Nothing" then

				'target is obj.kine.global - get the obj
				set springobj = opColl(i).OutputPorts(0).Target2.parent.parent
				set springnode = Application.ActiveProject.ActiveScene.Root.FindChild(in_SpringNodes(j))

				if typename(springnode) <>"Nothing" then

					set obj = springnode.FindChild(springobj.fullname,,,false)

					if typename(obj) <> "Nothing" then
						ops_to_inspect.add obj&".kine.global"
						opColl.Remove opColl(i)
						exit for
					end if
				end if
			end if

		next
	next

	InspectObj ops_to_inspect
end sub
'------------------------------------------------------------------------------
' NAME:		FApplySetCurveKnotMultiplicityNoAutoInspect
'
' INPUT:	- in_ConnectionSet	: connectionset containing the clusters of knots
'			- in_bInteractive : weither or not we are in an interactive context
'			- in_multiplicity : the multiplicity to set to the knot
'
' OUTPUT:	- out_ConnectionSetString : String to log for the connection set
'
' RETURN:	- list of operators created by this function
'
' DESCRIPTION: low-level function to apply a set-curve-knot-multiplicity operator
'------------------------------------------------------------------------------
function FApplySetCurveKnotMultiplicityNoAutoInspect(	in_ConnectionSet, in_bInteractive, _
														in_multiplicity, _
														byref out_ConnectionSetString )

	Dim l_CreatedOperators, l_outObjs, mySetKnotMultiplicityOp

	set l_outObjs = Nothing

	' we pass siPersistentOperation because we need to handle the immediate mode ourself
	' we pass TRUE for in_bDisableAutoInspect as the caller will take care of this himself
	set l_CreatedOperators = FApplyTopoOp( "SetNurbsCrvKnotMultiplicity", in_ConnectionSet, _
											":siUnspecified:siBranchFlag", siPersistentOperation, _
											in_bInteractive, TRUE, l_outObjs, out_ConnectionSetString)

	'--------------------------------------------------------------------
	' The following sets the multiplicity 
	' parameters, which were passed as arguments, to the SetKnotMultiplicity op.
	'--------------------------------------------------------------------
	for each mySetKnotMultiplicityOp in l_CreatedOperators
		SetValue mySetKnotMultiplicityOp & ".Multiplicity", in_multiplicity
	next

	set FApplySetCurveKnotMultiplicityNoAutoInspect = l_CreatedOperators

end function

'------------------------------------------------------------------------------
' NAME:		ApplySetCurveKnotMultiplicityOpFunc
'
' INPUT:	- io_ConnectionSet	: connectionset containing the clusters of knots to set the multiplicity
'			- in_multiplicity : the multiplicity of the knot to set
'			- in_OperationMode : tells if we should freeze the operator or not
'
' RETURN:	- list of operators created by this function (none in immediate mode)
'
' DESCRIPTION: Apply the SetCurveKnotMultiplicity operator to a list of objects (NON-UI VERSION)
'------------------------------------------------------------------------------
function ApplySetCurveKnotMultiplicityOpFunc(	io_ConnectionSet, _
								in_multiplicity, _
								in_OperationMode )

	Dim l_CreatedOperators, l_ConnectionSetString

	' we pass FALSE for in_bInteractive
	set l_CreatedOperators = FApplySetCurveKnotMultiplicityNoAutoInspect( io_ConnectionSet, FALSE, _
															in_multiplicity, l_ConnectionSetString )
	
	if in_OperationMode = siImmediateOperation then
		FreezeModeling l_CreatedOperators, , siUnspecified
		set ApplySetCurveKnotMultiplicityOpFunc = Nothing
	else
		set ApplySetCurveKnotMultiplicityOpFunc = l_CreatedOperators
	end if

end function

'------------------------------------------------------------------------------
' NAME:		ApplySetCurveKnotMultiplicityOpProc
'
' INPUT:	- io_ConnectionSet	: connectionset containing the clusters of knots to set the multiplicity
'			- in_multiplicity : the multiplicity of the knot to set
'
' OUTPUT:	- inout_OperationMode : will return weither or not the ImmediateMode was ON in MCP
'
' RETURN:	- list of operators created by this function (none in immediate mode)
'
' DESCRIPTION: Apply the SetCurveKnotMultiplicity operator to a list of objects (UI VERSION)
'------------------------------------------------------------------------------
Function ApplySetCurveKnotMultiplicityOpProc(	io_ConnectionSet, _
											in_multiplicity, _
											byref inout_OperationMode )

	Dim l_CreatedOperators, l_bOperationMode, l_ConnectionSetString

	'--------------------------------------------------------------------
	' Get the Current Operation mode and upadte the inout_OperationMode
	'--------------------------------------------------------------------

	l_bOperationMode = GetUserPref("OperationMode")

	if l_bOperationMode then
		inout_OperationMode = siImmediateOperation
	else
		inout_OperationMode = siPersistentOperation
	end if

	' we pass TRUE for in_bInteractive
	set l_CreatedOperators = FApplySetCurveKnotMultiplicityNoAutoInspect( io_ConnectionSet, TRUE, _
												in_multiplicity, l_ConnectionSetString )

	'--------------------------------------------------------------------
	' Convert the returned connectionset argument into a string
	' to avoid any further validation of its contents. After
	' we apply the operator all bets are off regarding whether we
	' will get a valid connection set string again.
	' NOTE: Var should be a string from output of FApplySetCurveKnotMultiplicityNoAutoInspect 
	' but take no chances and apply CStr
	'--------------------------------------------------------------------
	io_ConnectionSet = CStr( l_ConnectionSetString )

	if inout_OperationMode = siImmediateOperation then
		FreezeModeling l_CreatedOperators, , siUnspecified
	end if
	
	set ApplySetCurveKnotMultiplicityOpProc = l_CreatedOperators
end Function

'------------------------------------------------------------------------------
' NAME:		FApplyInsertCurveKnotOpNoAutoInspect
'
' INPUT:	- io_ConnectionSet	: connectionset containing the isopoint used to create the new knot
'			- in_bInteractive : weither or not we are in an interactive context
'			- in_multiplicity : the multiplicity to set to the new knot
'
' OUTPUT:	- out_ConnectionSetString : String to log for the connection set
'
' RETURN:	- list of operators created by this function
'
' DESCRIPTION: low-level function to apply a "InsertNurbsCrvKnot" operator
'------------------------------------------------------------------------------
function FApplyInsertCurveKnotOpNoAutoInspect(	in_ConnectionSet, in_bInteractive, _
												in_multiplicity, _
												byref out_ConnectionSetString )

	Dim l_CreatedOperators, l_outObjs, myAddKnotOp

	set l_outObjs = Nothing

	' we pass siPersistentOperation because we need to handle the immediate mode ourself
	' we pass TRUE for in_bDisableAutoInspect as the caller will take care of this himself
	set l_CreatedOperators = FApplyTopoOp( "InsertNurbsCrvKnot", in_ConnectionSet, _
											":siUnspecified:siBranchFlag", siPersistentOperation, _
											in_bInteractive, TRUE, l_outObjs, out_ConnectionSetString)

	'--------------------------------------------------------------------
	' The following sets the multiplicity 
	' parameters, which were passed as arguments, to the AddKnot op.
	'--------------------------------------------------------------------
	for each myAddKnotOp in l_CreatedOperators
		SetValue myAddKnotOp & ".Multiplicity", in_multiplicity
	next

	set FApplyInsertCurveKnotOpNoAutoInspect = l_CreatedOperators

end function

'------------------------------------------------------------------------------
' NAME:		ApplyInsertCurveKnotOpFunc
'
' INPUT:	- io_ConnectionSet	: connectionset containing the isopoint used to create the new knot
'			- in_multiplicity : the multiplicity to set to the new knot
'			- in_OperationMode : tells if we should freeze the operator or not
'
' RETURN:	- list of operators created by this function (none in immediate mode)
'
' DESCRIPTION: Apply the InsertNurbsCrvKnot operator to a list of objects (NON-UI VERSION)
'------------------------------------------------------------------------------
function ApplyInsertCurveKnotOpFunc(	io_ConnectionSet, _
										in_multiplicity, _
										in_OperationMode )

	Dim l_CreatedOperators, l_ConnectionSetString

	' we pass FALSE for in_bInteractive
	set l_CreatedOperators = FApplyInsertCurveKnotOpNoAutoInspect( io_ConnectionSet, FALSE, _
															in_multiplicity, l_ConnectionSetString )
	
	if in_OperationMode = siImmediateOperation then
		FreezeModeling l_CreatedOperators, , siUnspecified
		set ApplyInsertCurveKnotOpFunc = Nothing
	else
		set ApplyInsertCurveKnotOpFunc = l_CreatedOperators
	end if

end function

'------------------------------------------------------------------------------
' NAME:		ApplySetCurveKnotMultiplicityOpProc
'
' INPUT:	- io_ConnectionSet	: connectionset containing the isopoint used to create the new knot
'			- in_multiplicity : the multiplicity to set to the new knot
'
' OUTPUT:	- inout_OperationMode : will return weither or not the ImmediateMode was ON in MCP
'
' RETURN:	- list of operators created by this function (none in immediate mode)
'
' DESCRIPTION: Apply the SetCurveKnotMultiplicity operator to a list of objects (UI VERSION)
'------------------------------------------------------------------------------
Function ApplyInsertCurveKnotOpProc(	io_ConnectionSet, _
											in_multiplicity, _
											byref inout_OperationMode )

	Dim l_CreatedOperators, l_bOperationMode, l_ConnectionSetString

	'--------------------------------------------------------------------
	' Get the Current Operation mode and upadte the inout_OperationMode
	'--------------------------------------------------------------------

	l_bOperationMode = GetUserPref("OperationMode")

	if l_bOperationMode then
		inout_OperationMode = siImmediateOperation
	else
		inout_OperationMode = siPersistentOperation
	end if

	' we pass TRUE for in_bInteractive
	set l_CreatedOperators = FApplyInsertCurveKnotOpNoAutoInspect( io_ConnectionSet, TRUE, _
												in_multiplicity, l_ConnectionSetString )

	'--------------------------------------------------------------------
	' Convert the returned connectionset argument into a string
	' to avoid any further validation of its contents. After
	' we apply the operator all bets are off regarding whether we
	' will get a valid connection set string again.
	' NOTE: Var should be a string from output of FApplyInsertCurveKnotOpNoAutoInspect
	'  but take no chances and apply CStr
	'--------------------------------------------------------------------
	io_ConnectionSet = CStr( l_ConnectionSetString )

	if inout_OperationMode = siImmediateOperation then
		FreezeModeling l_CreatedOperators, , siUnspecified
	end if
	
	set ApplyInsertCurveKnotOpProc = l_CreatedOperators
end Function

'------------------------------------------------------------------------------
' NAME:		AddToArray
'
' INPUT:	- io_Array : the array to add an element
'			- io_Size : the size of the array
'			- in_Elem : the element to add to the array
'			- in_AvoidDuplicates : weither or not duplicates should be avoided
'
' DESCRIPTION: low-level function to add an element to an array
'------------------------------------------------------------------------------
sub AddToArray( byref io_Array, byref io_Size, in_Elem, in_AvoidDuplicates )
	dim elem
	
	if in_AvoidDuplicates AND ( io_Size > 0 ) then
		for elem = 0 to io_Size - 1
			if io_Array(elem) = in_Elem then
				exit sub
			end if
		next
	end if

	Redim Preserve io_Array( io_Size )
	io_Array(io_Size) = in_Elem
	io_Size = io_Size + 1
end sub

'------------------------------------------------------------------------------
' NAME:		getCurveListInfo
'
' INPUT:	- in_CurveList : the curve list to get info
'			- io_NbDistinctKnotsTable : the nb of distinct knots per curve
'			- io_DegreeTable : the degree per curve
'			- io_CurveIsClosedTable : the open/close status per curve
'
' DESCRIPTION: low-level function to get curve list information
'------------------------------------------------------------------------------
sub getCurveListInfo(	in_CurveList, _
						byref io_NbDistinctKnotsTable, _
						byref io_DegreeTable, _
						byref io_CurveIsClosedTable )

	dim nb_unified_distinct_knots, i, oNurbsCurve, oKnotsFullCollection, j, l_KnotVal, mult
	
	nb_unified_distinct_knots = 0
	
	Redim io_DegreeTable( in_CurveList.Curves.count - 1 )
	Redim io_NbDistinctKnotsTable( in_CurveList.Curves.count - 1 )
	Redim io_CurveIsClosedTable( in_CurveList.Curves.count - 1 )
	
	' for each curve
	for i = 0 to in_CurveList.Curves.count - 1
		set oNurbsCurve = in_CurveList.Curves(i) 
		set oKnotsFullCollection = oNurbsCurve.Knots 
		
		io_DegreeTable(i) = oKnotsFullCollection.Degree
		io_CurveIsClosedTable(i) = oKnotsFullCollection.Closed
		
		io_NbDistinctKnotsTable(i) = 0
		
		for j = 0 to oKnotsFullCollection.count - 1
		
			l_KnotVal = oKnotsFullCollection(j)
			
			mult = oKnotsFullCollection.GetMultiplicity(l_KnotVal)
			
			io_NbDistinctKnotsTable(i) = io_NbDistinctKnotsTable(i) + 1
			
			j = j + mult - 1
		next
	next
end sub

'------------------------------------------------------------------------------
' NAME:		GetCurveFromUnifiedKnot
'
' INPUT:	- in_Knot : the unified distinct knot to get curve index
'			- in_NbDistinctKnotsTable : the nb of distinct knots per curve
'
' OUTPUT:	- out_DistinctKnot : same as in_Knot but not unified
'			- out_FirstKnotInCurve : the first unified distinct knot of the curve
'			so out_DistinctKnot = in_Knot - out_FirstKnotInCurve
'
' DESCRIPTION: low-level function to get curve where the knot is located
'------------------------------------------------------------------------------
function GetCurveFromUnifiedKnot( in_Knot, in_NbDistinctKnotsTable, byref out_DistinctKnot, byref out_FirstKnotInCurve )
	dim found, i, l_FirstKnotInCurve, l_NbCurves
	
	GetCurveFromUnifiedKnot = 0
	found = false
	l_NbCurves = ubound(in_NbDistinctKnotsTable) + 1
	l_FirstKnotInCurve = 0
	for i = 0 to l_NbCurves - 1
		if in_Knot < in_NbDistinctKnotsTable(i) then
			found = true
			exit for
		end if
		in_Knot = in_Knot - in_NbDistinctKnotsTable(i)
		l_FirstKnotInCurve = l_FirstKnotInCurve + in_NbDistinctKnotsTable(i)
	next
	if Not found then
		Err.Raise siErrCancelled
		exit function
	end if
	GetCurveFromUnifiedKnot = i
	out_DistinctKnot = in_Knot
	out_FirstKnotInCurve = l_FirstKnotInCurve
end function

sub AddNeighbors( byref io_KnotsArray, in_IncludeNeighbors, in_NbDistinctKnotsTable, in_CurveIsClosedTable )

	dim imin, imax, i, l_NbKnots, minNbKnots, l_Knot, l_curve, l_Closed, l_CurveDistinctKnot, l_FirstKnotInCurve
	
	imin = lbound(io_KnotsArray)
	imax = ubound(io_KnotsArray)
	
	l_NbKnots = ubound(io_KnotsArray) - lbound(io_KnotsArray) + 1

	' for each knot selected
	for i = imin to imax

		l_Knot = io_KnotsArray(i)
	
		l_curve = GetCurveFromUnifiedKnot( l_Knot, in_NbDistinctKnotsTable, l_CurveDistinctKnot, l_FirstKnotInCurve )

		l_Closed = in_CurveIsClosedTable(l_curve)
	
		if l_Closed then
			minNbKnots = 3
		else
			minNbKnots = 2
		end if	
	
		if ( ( in_IncludeNeighbors = 2 ) OR ( in_IncludeNeighbors = 3 ) ) _
		AND in_NbDistinctKnotsTable(l_curve) >= minNbKnots then
	
			' do we have a left neighbor ?
			if l_CurveDistinctKnot > 0 then
				l_Knot = l_Knot - 1
				AddToArray io_KnotsArray, l_NbKnots, l_Knot, true
			else
				' l_CurveDistinctKnot = 0
			
				if l_Closed then
					' we need to find the knot before the last one in this curve
					' not the last one because it overlaps the first knot
					if in_NbDistinctKnotsTable(l_curve) > 2 then
						l_Knot = l_FirstKnotInCurve + in_NbDistinctKnotsTable(l_curve) - 2
						AddToArray io_KnotsArray, l_NbKnots, l_Knot, true
					end if
				end if
			end if
		end if
			
		if ( ( in_IncludeNeighbors = 1 ) OR ( in_IncludeNeighbors = 3 ) ) _ 
		AND in_NbDistinctKnotsTable(l_curve) > 1 then
			' do we have a right neighbor ?
	
			' first lets set l_Knot to what it was
			' since the code above might have changed it
			l_Knot = io_KnotsArray(i)
			
			if l_CurveDistinctKnot < in_NbDistinctKnotsTable(l_curve) - 1 then
				if l_Closed then
					if ( in_NbDistinctKnotsTable(l_curve) > 2 ) then
						if l_CurveDistinctKnot = ( in_NbDistinctKnotsTable(l_curve) - 2 ) then
							' right neighbor of knot #N-2 is knot #0, not knot #N-1
							l_Knot = l_FirstKnotInCurve
						else
							l_Knot = l_Knot + 1
						end if
						AddToArray io_KnotsArray, l_NbKnots, l_Knot, true
					end if
				else
					l_Knot = l_Knot + 1
					AddToArray io_KnotsArray, l_NbKnots, l_Knot, true
				end if
			else
				' l_CurveDistinctKnot = in_NbDistinctKnotsTable(l_curve) - 1
				
				if l_Closed AND in_NbDistinctKnotsTable(l_curve) > 2 then
					' since the first knot overlaps the last knot
					' then the right neighbor of the last knot is the 2nd knot
					l_Knot = l_FirstKnotInCurve + 1
					AddToArray io_KnotsArray, l_NbKnots, l_Knot, true
				end if
			end if
		end if
	next
end sub

'------------------------------------------------------------------------------
' NAME:		GetKnotsToConvertToBezier
'
' INPUT:	- in_list : the list of knot clusters
'			- in_IncludeNeighbors : should we also include the neighbors ?
'
' OUTPUT:	- out_list : list of knots to convert to bezier
'
' DESCRIPTION: low-level function to get knots to convert to bezier
'------------------------------------------------------------------------------
sub GetKnotsToConvertToBezier( in_list, in_IncludeNeighbors, byref out_list )
	dim l_NbDistinctKnotsTable(), l_DegreeTable(), l_CurveIsClosedTable()
	dim l_Knots, elem, l_obj
	dim list

	'lets skip anything that is not a knot
	set l_Knots = SIFilter( in_list, "NURBSCurveKnot", True )
	
	set list = CreateObject("XSI.Collection")
						
	if ( Not TypeName (l_Knots) = "Nothing" ) and ( Not IsEmpty (l_Knots) ) Then
		' for each cluster of knots
		for each elem in l_Knots
			dim l_KnotsArray
			l_KnotsArray = elem.SubComponent.ElementArray 
			
			If TypeName(l_KnotsArray) <> "Nothing" Then
			
				if in_IncludeNeighbors > 0 then
				
					set l_obj = elem.SubComponent.Parent3DObject
				
					dim oCurveList
					set oCurveList = l_obj.ActivePrimitive.Geometry

					dim newsubc
					' l_NbDistinctKnotsTable gives the nb of distinct knots for every curve of the geometry
					' l_DegreeTable gives the degree for every curve of the geometry
					' l_CurveIsClosedTable gives the open/close state for every curve of the geometry
					
					getCurveListInfo oCurveList, l_NbDistinctKnotsTable, l_DegreeTable, l_CurveIsClosedTable
				
					AddNeighbors l_KnotsArray, in_IncludeNeighbors, l_NbDistinctKnotsTable, l_CurveIsClosedTable
					
					set newsubc = oCurveList.CreateSubComponent( "knot", l_KnotsArray )
					
					list.add newsubc
				else
					list.add elem
				end if
			end if
		next
	end if

	if list.count > 0 then
		
		dim NonBezierKnotFilter

		set NonBezierKnotFilter = application.filters("Curve_NonBezier_Knot")
		
		out_list = NonBezierKnotFilter.subset(list)
	
	end if
end sub

'------------------------------------------------------------------------------
' NAME:		ValidateBezierKnots
'
' INPUT:	- in_list : the list of knot clusters
'			- in_IncludeNeighbors : should we also include the neighbors ?
'
' DESCRIPTION: low-level function to convert knots to bezier if necessary
'------------------------------------------------------------------------------
sub ValidateBezierKnots( in_list, in_IncludeNeighbors )
	dim l_KnotsToConvert, l_KnotsToConvertString
	
	GetKnotsToConvertToBezier in_list, in_IncludeNeighbors, l_KnotsToConvertString
	
	if Not l_KnotsToConvertString = "" then
		set l_KnotsToConvert = CreateObject( "XSI.Collection" )
		l_KnotsToConvert.SetAsText l_KnotsToConvertString
		if l_KnotsToConvert.count > 0 then
			SetCurveKnotMultiplicity l_KnotsToConvert, 3, siPersistentOperation
			logMessage "Warning: the following knots got converted to Bezier: " & l_KnotsToConvert
		end if
	end if
end sub

'------------------------------------------------------------------------------
' NAME:		FAlignBezierKnotsTangentsFunc
'
' INPUT:	- io_ConnectionSet	: connectionset containing the knots to make corners with
'			- in_bInteractive : weither or not we are in an interactive context
'			- in_AlignMode : the mode of alignment (e.g.: siCurveKnotLinearizeBothSegments)
'
' OUTPUT:	- out_ConnectionSetString : String to log for the connection set
'
' RETURN:	- list of operators created by this function
'
' DESCRIPTION: low-level function to align the tangents of bezier knots
'------------------------------------------------------------------------------
function FAlignBezierKnotsTangentsFunc(	byref in_ConnectionSet, in_bInteractive, _
										in_AlignMode, byref out_ConnectionSetString )

	Dim l_CreatedOperators, l_outObjs
	Dim l_ConnectionSetList
	Dim l_NeighborsAffected
	Dim l_CanConvert
	Dim op
	
	set l_outObjs = Nothing
	
	l_NeighborsAffected = 0
	l_CanConvert = false
	
	if in_AlignMode = siCurveKnotLinearizeBothSegments then
		l_NeighborsAffected = 3
		l_CanConvert = true
	else if in_AlignMode = siCurveKnotLinearizePrevSegment then
		l_NeighborsAffected = 2
		l_CanConvert = true
	else if in_AlignMode = siCurveKnotLinearizeNextSegment then
		l_NeighborsAffected = 1
		l_CanConvert = true
	else if in_AlignMode = siCurveKnotLinearizeInterSegments then
		l_CanConvert = true
	end if
	end if
	end if
	end if
	
	if l_CanConvert = true then
		' lets make sure all knots are bezier, convert them otherwise
		ValidateBezierKnots in_ConnectionSet, l_NeighborsAffected
	else
		' lets just take the bezier knots
		dim BezierKnotFilter
		set BezierKnotFilter = application.filters("Curve_Bezier_Knot")
		in_ConnectionSet = BezierKnotFilter.subset(in_ConnectionSet)
	end if
	
	' we pass siPersistentOperation because we need to handle the immediate mode ourself
	set l_CreatedOperators = FApplyOp( "CurveKnotAlignTangent", in_ConnectionSet, _
										":siUnspecified:siBranchFlag", siPersistentOperation, _
										in_bInteractive, l_outObjs, l_ConnectionSetList, _
										out_ConnectionSetString, Nothing )
									
	for each op in l_CreatedOperators
		SetValue op & ".mode", in_AlignMode
	next
											
	set FAlignBezierKnotsTangentsFunc = l_CreatedOperators

end function

'------------------------------------------------------------------------------
' NAME:		AlignBezierKnotsTangentsFunc
'
' INPUT:	- io_ConnectionSet	: connectionset containing the isopoint used to create the new knot
'			- in_OperationMode : tells if we should freeze the operator or not
'			- in_AlignMode : the mode of alignment (e.g.: siCurveKnotLinearizeBothSegments)
'
' RETURN:	- list of operators created by this function (none in immediate mode)
'
' DESCRIPTION: Apply the CurveKnotAlignTangent operator to a list of knots (NON-UI VERSION)
'------------------------------------------------------------------------------
function AlignBezierKnotsTangentsFunc(	io_ConnectionSet, in_OperationMode, in_AlignMode )

	Dim l_CreatedOperators, l_ConnectionSetString

	' we pass FALSE for in_bInteractive
	set l_CreatedOperators = FAlignBezierKnotsTangentsFunc( io_ConnectionSet, FALSE, _
															in_AlignMode, l_ConnectionSetString )
	
	if in_OperationMode = siImmediateOperation then
		FreezeModeling l_CreatedOperators, , siUnspecified
		set AlignBezierKnotsTangentsFunc = Nothing
	else
		set AlignBezierKnotsTangentsFunc = l_CreatedOperators
	end if

end function

'------------------------------------------------------------------------------
' NAME:		AlignBezierKnotsTangentsProc
'
' INPUT:	- io_ConnectionSet	: connectionset containing the isopoint used to create the new knot
'			- in_AlignMode : the mode of alignment (e.g.: siCurveKnotLinearizeBothSegments)
'
' OUTPUT:	- inout_OperationMode : will return weither or not the ImmediateMode was ON in MCP
'
' RETURN:	- list of operators created by this function (none in immediate mode)
'
' DESCRIPTION: Apply the CurveKnotAlignTangent operator to a list of objects (UI VERSION)
'------------------------------------------------------------------------------
Function AlignBezierKnotsTangentsProc( io_ConnectionSet, byref inout_OperationMode, in_AlignMode )

	Dim l_CreatedOperators, l_bOperationMode, l_ConnectionSetString

	'--------------------------------------------------------------------
	' Get the Current Operation mode and upadte the inout_OperationMode
	'--------------------------------------------------------------------

	l_bOperationMode = GetUserPref("OperationMode")

	if l_bOperationMode then
		inout_OperationMode = siImmediateOperation
	else
		inout_OperationMode = siPersistentOperation
	end if

	' we pass TRUE for in_bInteractive
	set l_CreatedOperators = FAlignBezierKnotsTangentsFunc( io_ConnectionSet, TRUE, _
												in_AlignMode, l_ConnectionSetString )

	if inout_OperationMode = siImmediateOperation then
		FreezeModeling l_CreatedOperators, , siUnspecified
	end if
	
	set AlignBezierKnotsTangentsProc = l_CreatedOperators
end Function

'------------------------------------------------------------------------------
' NAME:		DuplicateUsingGeomApprox 
' By:		Marc-Andre Belzile, adapted by Rejean Gagne, corrected by JcGagnon
'
' INPUT:	
'
' OUTPUT: List of duplicated objects
'	
' DESCRIPTION: 
'
'------------------------------------------------------------------------------
function DuplicateUsingGeomApprox(in_InputObjs)
	Dim l_DupList, l_geomapprox, l_newobj, s
	Dim l_obj, l_op, l_InputObjs, l_dummy1, l_dummy2

	set DuplicateUsingGeomApprox = Nothing

	set l_InputObjs = SIFilter( in_InputObjs, "polygon_mesh" )

	if IsEmpty(l_InputObjs) Or TypeName(l_InputObjs) = "Nothing" Then
		logmessage "You need to select one or more polygon meshes first."
		Exit function
	end if

	set l_DupList = CreateObject("XSI.Collection")

	for each l_obj in l_InputObjs
		set l_geomapprox = l_Obj.Properties.Find("geomapprox")

		'If level == 0, then call usual duplicate.
		if l_geomapprox.Parameters("gapproxmosl").value = 0 then
			dim l_LocalDupList, l_LocalDupObject
			set l_LocalDupList = Duplicate(l_obj, , 2, 1, 1, 0, 0, 1, 0, 1)
			
			for each l_LocalDupObject in l_LocalDupList
			    FreezeObj l_LocalDupObject
				l_DupList.Add l_LocalDupObject
			next
		else
			' 3 == SI_3DBRANCHFLAG_UNSPECIFIED
			set l_op = FApplyGenOp( "MeshSubdivideWithCenter", "", l_obj, 3, _
									siPersistentOperation, siKeepGenOpInputs, FALSE, TRUE, l_newobj, _
									l_dummy1, l_dummy2 )

			if ( TypeName(l_op) <> "Nothing" and TypeName(l_newobj) <> "Nothing" ) then
				SetValue l_op & ".SubdivisionRule", GetValue(l_obj & ".polymsh.subdrule" )
				SetValue l_op & ".SubdivisionDepth", l_geomapprox.Parameters("gapproxmosl").value
				SetValue l_op & ".useloop", GetValue(l_obj & ".polymsh.subdloop" )

				TransferAllPropertiesAcrossGenOp l_op, l_newobj, , True

				s = l_newobj & ""
				FreezeObj l_newobj
				l_newobj = GetValue(s)

				l_DupList.Add l_newobj
			end if
		end if
	next

	SelectObj l_DupList
	set DuplicateUsingGeomApprox = l_DupList
End function

'------------------------------------------------------------------------------
' NAME:		ChangeVertexColorDatatypeFunc
' By:		David Lassonde
'
' INPUT:    in_CAV              : The VertexColorProp
'           in_eDesiredDatatype : The desired datatype (short, float)
'
' OUTPUT: The VertexColorChangeDatatype operator (in one was installed)
'	
' DESCRIPTION: 
'
'------------------------------------------------------------------------------
function ChangeVertexColorDatatypeFunc( in_CAV, in_eDesiredDatatype, byref out_outputObj)
    dim eCAVDatatype
    dim ReturnedOp
    dim CAVToModify

    ' in_CAV should be a collection with one element (the CAV)
    '	
    If TypeName(in_CAV) <>  "Object" OR in_CAV.type <> "XSICollection" OR in_CAV.Count = 0 Then
        LogMessage "Invalid VertexColor property", siError
        Err.Raise siErrCancelled
        exit function
    End If

    set CAVToModify = in_CAV.Item(0)
    If CAVToModify.type <> "vertexcolor" Then
        LogMessage "Invalid VertexColor property", siError
        Err.Raise siErrCancelled
        exit function
    End If

    ' No need to apply the operator if the datatype is already set to the desired one
    '	
    eCAVDatatype = GetValue(CAVToModify & ".datatype")
    If TypeName(eCAVDatatype) = "Nothing" Then
        LogMessage "Invalid VertexColor property", siError
        Err.Raise siErrCancelled
        exit function
    End If

    If eCAVDatatype = in_eDesiredDatatype Then 
        LogMessage "The CAV is already using the specified datatype. There is no need to install an operator", siInfo
        exit function
    End If

    ' Install the operator
    '
    set ReturnedOp = ApplyOp ("VertexColorChangeDatatype", CAVToModify)
    If ReturnedOp.Count = 0 Then
        LogMessage "Could not install the Vertex Color conversion operator", siError
        Err.Raise siErrCancelled
        exit function
    End If

    ' Set new datatype and return value
    '
    SetValue ReturnedOp.Item(0) + ".desireddatatype", in_eDesiredDatatype
    set out_outputObj = ReturnedOp
    set ChangeVertexColorDatatypeFunc = ReturnedOp

End function

function ApplyThicknessProc(in_objects)
	Dim l_obj
	Dim l_InputObjs
	Dim raiseError

	raiseError = false
	
	set l_InputObjs = SIFilter( in_objects, "polygon_mesh" )
	
	if IsEmpty(l_InputObjs) Or TypeName(l_InputObjs) = "Nothing" Then
		Dim button
	    PickObject XSIUtils.Translate( IDS_SELECT_POLYGON_MESH, "XSISCRIPTS" ), , l_obj, button
		
		if button <> 1 then
		    LogMessage XSIUtils.Translate( IDS_COMMAND_CANCELLED, "XSISCRIPTS" ), siWarning
		    'LogMessage "Command was cancelled", siWarning
			Err.Raise siErrCancelled
		else
			if l_obj.Type <> "polymsh" then
				raiseError = true
			else
				Application.ApplyICEOp "Apply Thickness", l_obj
			end if
		end if
	else
		for each l_obj in l_InputObjs
            Dim uvName, mat
            Dim thicknessOp, iceTree, inputPorts
            
            for each mat in l_obj.Materials
                if TypeName(mat.CurrentUV)<>"Nothing" then
               		uvName = mat.CurrentUV.FullName
		            uvName = Mid(uvName, InStr(uvName, "cls."))
		            uvName = uvName & ".UVWs"
                end if
            next
            
            if Typename(uvName)="Nothing" Or Typename(uvName)="Empty" then
                uvName = "__DefaultUVWs"
            end if
            
            Set iceTree = ApplyICEOp("Apply Thickness", l_obj)
            Set thicknessOp = iceTree.InputPorts(0).ConnectedNodes(0)
            Set inputPorts = thicknessOp.InputPorts

            SetValue thicknessOp.FullName & ".Source", uvName
            
		next
	end if
	
	if raiseError then
		Dim l_Title, l_Message
		l_Title = XSIUtils.Translate( IDS_APPLY_THICKNESS_TITLE, "XSISCRIPTS" )
		l_Message = XSIUtils.Translate( IDS_NEED_SELECT_POLYMESH_OBJECT_ERROR_MSG, "XSISCRIPTS" )

		SIMsgBox l_Message, vbOKOnly + vbInformation, l_Title, vbOK
		Err.Raise siErrCancelled
	end if

end function

function CapHoleProc(in_objects)
    Dim vtx
    Dim obj, button
    Dim l_InputObjs
    Dim startPick
    Dim objName

    startPick = true

    Set l_InputObjs = SIFilter( in_objects, siSubComponentFilter )
    'LogMessage TypeName(l_InputObjs)

    if TypeName(l_InputObjs) <> "Nothing" and IsEmpty(l_InputObjs)=false Then
	    for each obj in l_InputObjs
		    'LogMessage obj & " is " & obj.Type
		    if obj.Type = "pntSubComponent" then
			    dim points
			    set points = obj.SubComponent.ComponentCollection
    			
			    if points.count > 0 then
			        objName = obj.FullName
				    vtx = points(0).Index
				    startPick = false
			    end if
		    end if
	    next
    end if

    if startPick then
    	
	    DeselectAll
    	
	    'pick 1st vertex
	    PickElement siPointFilter, XSIUtils.Translate( IDS_SELECT_BORDER_VERTEX, "XSISCRIPTS"), , obj, button
	    'LogMessage obj & " is a " & obj.Type
	    if button=1 and obj.Type="pntSubComponent" then
		    set points = obj.SubComponent.ComponentCollection
		    vtx = points(0).Index
		    objName = obj.FullName
	    else
	        LogMessage XSIUtils.Translate( IDS_COMMAND_CANCELLED, "XSISCRIPTS" ), siWarning
	        'LogMessage "Command was cancelled", siWarning
		    Err.Raise siErrCancelled
	    end if
    end if
	
	'DeselectAllUsingFilter siPointFilter
	'DeselectAll
	'RemoveFromSelection objName
    
    Dim capOp, iceTree, inputPorts

    Set iceTree = ApplyICEOp("Cap Hole", objName)
    Set capOp = iceTree.InputPorts(0).ConnectedNodes(0)
    Set inputPorts = capOp.InputPorts

    inputPorts("Vertex_Index").Parameters(0).Value = vtx

end function

function ApplySliceBetweenTwoVerticesProc(in_objects, in_UpVector)
    Dim vtx1, vtx2
    Dim obj, button
    Dim l_InputObjs
    Dim startPick
    Dim nullPos
    Dim objName

    startPick = true

    Set l_InputObjs = SIFilter( in_objects, siSubComponentFilter )
    'LogMessage TypeName(l_InputObjs)

    if TypeName(l_InputObjs) <> "Nothing" and IsEmpty(l_InputObjs)=false Then
	    for each obj in l_InputObjs
		    'LogMessage obj & " is " & obj.Type
		    if obj.Type = "pntSubComponent" then
			    dim points
			    set points = obj.SubComponent.ComponentCollection
    			
			    if points.count > 1 then
					objName = obj.FullName
				    vtx1 = points(0).Index
				    vtx2 = points(1).Index
					set nullPos = XSIMath.CreateVector3
					nullPos.Add points(0).Position, points(1).Position
					nullPos.ScaleInPlace 0.5
					nullPos.y = nullPos.y - 2.0
				    startPick = false
			    end if
		    end if
	    next
    end if

    if startPick then
		Dim obj1Name
		Dim warnCommandCancelled
		
		warnCommandCancelled = false
		
	    DeselectAll
    	
	    'pick 1st vertex
	    PickElement siPointFilter, XSIUtils.Translate( IDS_SELECT_START_VERTEX, "XSISCRIPTS"), , obj, button
	    LogMessage "obj typename is " & TypeName(obj)
		'LogMessage obj & " is a " & obj.Type
		if TypeName(obj) <> "Empty" then
			if button=1 and obj.Type="pntSubComponent" then
				set points = obj.SubComponent.ComponentCollection
				set nullPos = XSIMath.CreateVector3
				vtx1 = points(0).Index
				obj1Name = obj.Name
				objName = obj.FullName
				nullPos.Absolute points(0).Position
			else
				warnCommandCancelled = true
			end if
		else
			warnCommandCancelled = true
		end if
		
		if warnCommandCancelled=true then
	        LogMessage XSIUtils.Translate( IDS_COMMAND_CANCELLED, "XSISCRIPTS" ), siWarning
		    Err.Raise siErrCancelled
	    end if
    	
	    'pick 2nd vertex
	    'select obj and set filter first so that user don't have to select pick same object
	    'again before picking the vertex
	    SelectObj obj.Name
	    ActivateVertexSelTool
	    'ActivateVertexSelToolWithNoObjStateChange
    	
	    PickElement siPointFilter, XSIUtils.Translate( IDS_SELECT_END_VERTEX, "XSISCRIPTS"), , obj, button
	    'LogMessage obj & " is a " & obj.Type
	    
	    
	    if button=1 then
			if typename(obj) <> "Empty" then
				if obj.Name = obj1Name and obj.Type="pntSubComponent" then
					set points = obj.SubComponent.ComponentCollection
					vtx2 = points(0).Index
					nullPos.AddInPlace points(0).Position
					nullPos.ScaleInPlace 0.5
					nullPos.y = nullPos.y - 2.0
				else
					'LogMessage obj.FullName & " <> " & objName
					LogMessage XSIUtils.Translate( IDS_VERTICES_ON_SAME_OBJECT, "XSISCRIPTS"), siWarning
					Err.Raise siErrCancelled
				end if
			else
				warnCommandCancelled = true
			end if
		else
			warnCommandCancelled = true
		end if
			
		if warnCommandCancelled then
		    LogMessage XSIUtils.Translate( IDS_COMMAND_CANCELLED, "XSISCRIPTS" ), siWarning
		    'LogMessage "Command was cancelled", siWarning
		    Err.Raise siErrCancelled
	    end if
	    
    end if
    	

    Dim sliceOp, iceTree, inputPorts
    Dim upVecNull

    'LogMessage vtx1 & ", " & vtx2
	'logmessage "upvec is " & typename(in_UpVector)
    if typename(in_UpVector) <> "Nothing" and in_UpVector <> "" then
        Set upVecNull = Application.ActiveSceneRoot.Children(in_UpVector)
        if typename(upVecNull) = "Nothing" then
            LogMessage XSIUtils.Translate( IDS_INVALID_OBJECT, "XSISCRIPTS") & ": " & in_UpVector, siWarning
		    Err.Raise siErrCancelled
        end if
    else
        Set upVecNull = GetPrim("Null", "Slice_Up_Vector", objName)
        'Translate upVecNull, nullPos.x, nullPos.y, nullPos.z
        upVecNull.LocalTranslation = nullPos
    end if
    

    Set iceTree = ApplyICEOp("Apply Slice between Two Vertices", objName, upVecNull.FullName)
    Set sliceOp = iceTree.InputPorts(0).ConnectedNodes(0)
    Set inputPorts = sliceOp.InputPorts

    inputPorts("Start_Vertex_Index").Parameters(0).Value = vtx1
    inputPorts("End_Vertex_Index").Parameters(0).Value = vtx2

end function
'******************************************************************************
' END OF FILE
'******************************************************************************
