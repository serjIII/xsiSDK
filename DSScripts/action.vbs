'******************************************************************************
'
' File supervisor : 
' Date : 29/06/00
' (c) Copyright 2000 Softimage
'
' $Archive:  $
' $Revision:  $  $Date:  $
' Checkin by: $Author:  $
'
' @doc
' @module	action.vbs | VB Script 
'
'   This is an VBscript file that contains the base scripts for the
'   animation mixer commands.
'******************************************************************************

' DEVNOTE: remove comment to force all variables to be declared.
' Option Explicit

'******************************************************************************
' DEBUGGING
'******************************************************************************

' DEVNOTE: remove comment to force a break point when script loaded.
'Stop

'******************************************************************************
' String Constants (used to translate)
'******************************************************************************
const IDS_BRIDGE_TRANSITION_ERROR1			= 1016
const IDS_BRIDGE_TRANSITION_ERROR2			= 1017
const IDS_BRIDGE_TRANSITION_ERROR3			= 1018
const IDS_BRIDGE_TRANSITION_ERROR4			= 1019
const IDS_SELECT_CLIP						= 1020
const IDS_SELECT_CLIP_OBJECT				= 1021
const IDS_INVALID_FRAME						= 1022
const IDS_CLIP_SCALE						= 1023
const IDS_NO_TIME_WARP						= 1024
const IDS_SLECTED_OBJ_ROT					= 1025
const IDS_OK_ADD_MARKERS					= 1026
const IDS_OK_TRIM_CLIP						= 1027
const IDS_FIND_CYCLE_INFO					= 1028
const IDS_SOMETHING_WENT_WRONG				= 1029
const IDS_MULTI_PERIODS_FOUND_AM			= 1030
const IDS_MULTI_PERIODS_FOUND_TC			= 1031
const IDS_NO_PERIOD_FOUND					= 1032
const IDS_OFFLOAD_ACTION_ERROR				= 1033
const IDS_ACTION_STORE_EMPTY				= 1034
const IDS_ACTION_STORE_FCURVE				= 1035
const IDS_ACTION_STORE_EXPRESSION			= 1036
const IDS_ACTION_STORE_CONSTEAINT			= 1037
const IDS_ACTION_STORE_ALL_ANIM_SOURCES		= 1038
const IDS_ACTION_STORE_ANIM_AND_CURVAL		= 1039
const IDS_ACTION_STORE_CURVAL				= 1040
const IDS_MATCH_CLIPS_TITLE					= 1041
const IDS_MATCH_CLIP_TAG_NOT_FOUND			= 1042
const IDS_ERROR_SCALETO_AUDIOCLIP			= 1526
const IDS_ERROR_NO_CLIP_SPECIFIED			= 1527
const IDS_WARN_CLIP_OVERLAP_ADJUST			= 1528
const IDS_WARN_CLIP_OVERLAP_DENY			= 1529

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
		SIMsgBox = MsgBox( in_prompt, in_buttons, XSIUtils.Translate( in_title, "XSISCRIPTS" ) )
	ELSE
		LogMessage XSIUtils.Translate( in_title, "XSISCRIPTS" ) & ": " & in_prompt
		SIMsgBox = in_default
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
	InspectObj in_customparam,,XSIUtils.Translate( in_title, "XSISCRIPTS" ), siModal

	if Err.Number <> 0 then
		FWizardDialog = vbCancel
	else
		FWizardDialog = vbOk
	end if
end Function

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
	Dim rtn, l_Scene, l_SceneRoot, l_Children

	set FGetSceneRoot = Nothing

	set l_Children = EnumElements("Project")

	set l_Scene = SIFilter(l_Children,siSceneFilter)

	set l_Children = EnumElements(l_Scene(0))

	set l_SceneRoot = SIFilter(l_Children,siObjectFilter)
	
	set FGetSceneRoot = l_SceneRoot(0)

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
' NAME:        FGetAnimatedParams
'
' INPUT:       in_InputObjs...List of objects to get the anim params
'              in_Mode........1 = Only fcurves
'                             2 = Only expressions
'                             3 = Fcurves, expressions and constraints
'
' OUTPUT:      Parameters
'
' DESCRIPTION: Gets all the animatable parameters of the input objects.
'------------------------------------------------------------------------------
Function FGetAnimatedParams(in_InputObjs, in_Mode)
	Dim l_Elem, l_FCurves, l_Expression, l_Param, l_ObjectParams
	Dim l_AnimParams

	Set FGetAnimatedParams = NOTHING
	
	if (in_Mode < 1) OR (in_Mode > 3) then
		LogMessage XSIUtils.Translate( "Invalid operation", "XSISCRIPTS" )
		Err.Raise siErrCancelled
		exit function
	end if

	If TypeName(in_InputObjs) <> "Nothing" then
		Set l_AnimParams = CreateObject("XSI.Collection")
		for each l_Elem in in_InputObjs
		
			' Retrieves the animated FCurves of the current object
			if (in_Mode = 1) OR (in_Mode = 3) then
				l_FCurves = IsAnimated(l_Elem, siFcurveSource, , l_ObjectParams)
				if (l_FCurves) Then
					if (in_Mode = 3) then 
						'
						' If I am checking both expressions AND fcurves on parameters, then
						' I do NOT want to return params nested underneath the expression
						' operator itself (e.g. the local fcv param used by linked params). Thus
						' be sure to only add those parameters that are not owned by expressions
						'
						for each l_Param in l_ObjectParams
							if ( typename( l_Param.parent ) <> "Expression" ) then
								l_AnimParams.Add l_Param
							end if
						next
					else
						l_AnimParams.AddItems l_ObjectParams
					end if 
				end if
			end if
			
			' Retrieves the expressions of the current object
			if (in_Mode = 2) OR (in_Mode = 3) then
				l_Expression = IsAnimated(l_Elem, siExpressionSource, , l_ObjectParams)
				if (l_Expression) then
					l_AnimParams.AddItems l_ObjectParams
				end if
			end if
		next
		
		' Creates a new action
		if l_AnimParams.Count <> 0 Then
			Set FGetAnimatedParams = l_AnimParams
		end if
	end if
end Function

'------------------------------------------------------------------------------
' NAME:        FGetStaticPoseParams
'
' DESCRIPTION: Get the params to store a a static pose
'
' INPUT:       in_InputObjs...List of objects to get the params
'
' OUTPUT:      Parameters
'
'------------------------------------------------------------------------------
Function FGetStaticPoseParams(in_InputObjs)
	Dim l_Params
	Dim l_elem, l_objects
	
	Set l_objects = SIFilter(in_InputObjs, "sceneobject")
	
	if TypeName(l_objects) <> "Nothing" then
		Set l_Params = CreateObject("XSI.Collection")
		l_Params.Clear
		l_Params.Unique = True

		for each l_elem in l_objects

		
			' For bones, we wish to store rotation and scaling, as well as length
			' and preferred angles, as well as bone length. For all other elements
			' other than the effector, we will store a complete pose
			'
			if (l_elem.Type = "bone") then

				' Stores the object rotation and scaling
				l_Params.Add l_Elem & ".kine.local.rotx"
				l_Params.Add l_Elem & ".kine.local.roty"
				l_Params.Add l_Elem & ".kine.local.rotz"
				l_Params.Add l_Elem & ".kine.local.sclx"
				l_Params.Add l_Elem & ".kine.local.scly"
				l_Params.Add l_Elem & ".kine.local.sclz"
		      
				' Gets the bones length and preffered rotation angles
				'
				' Note that somebody could have a sub-chain bone called 'bone', so we need
				' to differentiate between the primitive (always called bone, and which holds the length)
				' and the subObject case, hence the [0] which will pick the primitive on l_Elem first
				'
				l_Params.Add l_Elem & ".bone[0].length"
				l_Params.Add l_Elem & ".joint.prefrotx"
				l_Params.Add l_Elem & ".joint.prefroty"
				l_Params.Add l_Elem & ".joint.prefrotz"

				if FIsComponent( l_Elem & ".chain" ) = True then
					' Also add the the orientation offsets of the effector (if any)
					l_Params.Add l_Elem & ".chain.effori"
					l_Params.Add l_Elem & ".chain.effori_offx"
					l_Params.Add l_Elem & ".chain.effori_offy"
					l_Params.Add l_Elem & ".chain.effori_offz"
				end if

			else 

				if ( l_elem.Type <> "eff" ) then
					' Stores the object position, rotation and scaling
					l_Params.Add l_Elem & ".kine.local.posx"
					l_Params.Add l_Elem & ".kine.local.posy"
					l_Params.Add l_Elem & ".kine.local.posz"
					l_Params.Add l_Elem & ".kine.local.rotx"
					l_Params.Add l_Elem & ".kine.local.roty"
					l_Params.Add l_Elem & ".kine.local.rotz"
					l_Params.Add l_Elem & ".kine.local.sclx"
					l_Params.Add l_Elem & ".kine.local.scly"
					l_Params.Add l_Elem & ".kine.local.sclz"
				else
					' Effector rotation and scaling only. Position is set by the bone
					l_Params.Add l_Elem & ".kine.local.rotx"
					l_Params.Add l_Elem & ".kine.local.roty"
					l_Params.Add l_Elem & ".kine.local.rotz"
					l_Params.Add l_Elem & ".kine.local.sclx"
					l_Params.Add l_Elem & ".kine.local.scly"
					l_Params.Add l_Elem & ".kine.local.sclz"
				end if
			end if

		next
		
		Set FGetStaticPoseParams = l_Params
	End if
	
end Function


'------------------------------------------------------------------------------
' NAME:        FGetKeyableParams
'
' INPUT:       in_InputObjs...List of objects to get the keyable params
'
' OUTPUT:      Parameters
'
' DESCRIPTION: Gets all the keyable parameters of the input objects.
'------------------------------------------------------------------------------
Function FGetKeyableParams(in_InputObjs)
	Dim l_KeyableColl

	If TypeName(in_InputObjs) <> "Nothing" then
		Set l_KeyableColl = in_InputObjs.FindObjectsByMarkingAndCapabilities( , siKeyable )
		Set FGetKeyableParams = l_KeyableColl
	End If
End Function

'------------------------------------------------------------------------------
' NAME:        GetCurrentCharacterKeySetParams
'
' INPUT:       oParent - the character key set to start with
'              oCharSetColl - will hold the parameters of the character key sets
'                             if its empty then the parent's parameters will be 
'                             added as well.
'
' OUTPUT:      Parameters
'
' DESCRIPTION: Gets all the parameters from the current character key set and 
'              those nested below.
'------------------------------------------------------------------------------
Sub GetCurrentCharacterKeySetParams( oCharSetColl, oParent )
	Dim Child, Children

    ' only add the parent if this is the first call to teh function
	If (oCharSetColl.Count = 0) Then
		For Each param in oParent.Parameters
			oCharSetColl.Add( param )
		Next
	End If

	set Children = oParent.NestedObjects
	For Each Child in Children
		If ( Child.IsClassOf( siCustomPropertyID ) ) Then		
			If ( GetValue( Child & ".IsCharacterKeySet" ) = True ) Then
			    For Each param in Child.Parameters
    				oCharSetColl.Add( param )
    			Next
			End If 

			If ( Child.NestedObjects.Count > 0 ) Then
				GetCurrentCharacterKeySetParams oCharSetColl, Child 
			End If
		End If
	Next
End Sub

'------------------------------------------------------------------------------
' NAME:		AddSourceToMixer
'
' DESCRIPTION: Finds the right model, and instantiates a source on the mixer.
'			   Also, if animation layers fcurves are in the source, mute the animation layers.
'				
'------------------------------------------------------------------------------
sub AddSourceToMixer( in_model, in_source, in_ClipOffset, in_bIncludeAnimLayers )
	Dim l_oClip, l_bMuteAnimLayers
	l_bMuteAnimLayers = false
	
	if in_model = "" then

		' We need to retrieve the name of the model on which the action was stored
		Dim l_modelstr, i

		' Step 1 : remove the right portion that is the name of the source
		' (ex: Sources.Animation.Model.StoredStaticPose or Sources.Scene_Root.StoredStaticPose)
		i = len(in_source)
		do while i >= 1
			if Mid( in_source, i, 1 ) = "." then
				l_modelstr = Left( in_source, i-1 )
				exit do
			end if
			i = i - 1
		loop

		' Step 2 : keep the right portion that now represents the name of the model
		i = len(l_modelstr)
		do while i >= 1
			if Mid( l_modelstr, i, 1 ) = "." then
				l_modelstr = Right( l_modelstr, len(l_modelstr) - i )
				exit do
			end if
			i = i - 1
		loop

		if ( l_modelstr <> "" ) then
			set l_oClip = AddClip(l_modelstr, in_source,,,in_ClipOffset)
			l_bMuteAnimLayers = true
		end if
	else
		set l_oClip = AddClip(in_model, in_source,,, in_ClipOffset)
		l_bMuteAnimLayers = true
	end if

	' Do we have animation layers to mute?
	if in_bIncludeAnimLayers and l_bMuteAnimLayers then
		Dim l_Mixer, l_MixerTracks
		
		set l_Mixer = l_oClip.Model.Mixer
		if typename(l_Mixer) = "Mixer" then
			set l_MixerTracks = l_Mixer.Tracks
			
			' Pass trough each tracks of the mixer and
			' mute all the animation layers tracks
			for each l_Track in l_MixerTracks
				if l_Track.Type = siTrackAnimationLayerType then
					l_Track.Mute.Value = true
				end if
			next
		end if
	end if
end sub



'------------------------------------------------------------------------------
' NAME:		StoreActionProc
'
' INPUT:	N/A
'
' DESCRIPTION: Store an action
'				
'------------------------------------------------------------------------------
function StoreActionProc( in_model, inout_obj, in_mode, in_name, in_removeanim, _
						  in_ClipIn, in_ClipOut, in_bConsiderTime, in_bRipple, _
						  in_bAddClip, in_ClipOffset, in_bIncludeAnimLayers )

    ' If ClipIn is greater than ClipOut, then don't reset the values
	' that SIStoreAction set.  The default in the command map is set
	' to that case (0 and -1, respectively).
	If in_ClipIn <= in_ClipOut Then
		set StoreActionProc = SIStoreAction( in_model, inout_obj, in_mode, in_name, in_removeanim, _
											 in_bConsiderTime, in_ClipIn, in_ClipOut, in_bRipple, in_bIncludeAnimLayers )
											 
		'Change the Clip In and Out point to what the user gave
		if typename(StoreActionProc) = "ActionSource" then
			On Error Resume Next		' disable error handling (see UDEV00252593)
			SetValue StoreActionProc & ".FrameStart", in_ClipIn 
			SetValue StoreActionProc & ".FrameEnd", in_ClipOut
			On Error Goto 0			    ' resume error handling			
		end if
	Else
		set StoreActionProc = SIStoreAction( in_model, inout_obj, in_mode, in_name, in_removeanim, _
											 , , , , in_bIncludeAnimLayers )
	End If

	if in_bAddClip and typename(StoreActionProc) = "ActionSource" then
		AddSourceToMixer in_model, StoreActionProc, in_ClipOffset, in_bIncludeAnimLayers
	end if

end function

'------------------------------------------------------------------------------
' NAME:		GetInputAndStoreActionProc
'
' INPUT:	Same arguments as StoreAction command:
'			- Model (can be NULL)
'			- List of parameters (ElemRefs) to store
'			- Mode in which to store (see StoreAction documentation)
'			- Name to use for the new Action
'			- Remove animation?
'
' DESCRIPTION:	Prompt the user for values before calling StoreAction
'				
'------------------------------------------------------------------------------
function GetInputAndStoreActionProc( in_Model, inout_Objs, in_Mode, inout_Name, inout_Remove, _
									 inout_ClipIn, inout_ClipOut, inout_bConsiderTime, inout_bRipple, _
									 inout_bAddClip, inout_ClipOffset, inout_bIncludeAnimLayers )

	Dim l_Name, l_Title, l_ClipIn, l_ClipOut, l_ClipStart, l_Remove, l_UseKeys, l_Ripple, l_CPList, l_SceneRoot, l_CustomParam
	Dim l_NbItem, l_Capabilities

	if typename( inout_Objs ) = "Nothing" then
		LogMessage XSIUtils.Translate( "There is nothing to store. Make sure you have marked the parameters to store.", "XSISCRIPTS" ), siWarning
		inout_Name = ""
		exit function
	end if

	GetStoreActionDefaults in_Model, inout_Objs, in_Mode, l_ClipIn, l_ClipOut, l_NbItem
    
	if l_NbItem = 0 then
		LogMessage XSIUtils.Translate( "There is nothing to store. Make sure you have marked the parameters to store.", "XSISCRIPTS" ), siWarning
		inout_Name = ""
		exit function
	end if

	Select Case in_Mode
		Case 0
			l_Title = XSIUtils.Translate( IDS_ACTION_STORE_EMPTY, "XSISCRIPTS" )
			l_Name = "StoredEmpty"
		Case 2
			l_Title = XSIUtils.Translate( IDS_ACTION_STORE_FCURVE, "XSISCRIPTS" )
			l_Name = "StoredFcurve"
		Case 3
			l_Title = XSIUtils.Translate( IDS_ACTION_STORE_EXPRESSION, "XSISCRIPTS" )
			l_Name = "StoredExpression"
		Case 4
			l_Title = XSIUtils.Translate( IDS_ACTION_STORE_CONSTEAINT, "XSISCRIPTS" )
			l_Name = "StoredConstraint"
		Case 5
			l_Title = XSIUtils.Translate( IDS_ACTION_STORE_ALL_ANIM_SOURCES, "XSISCRIPTS" )
			l_Name = "StoredAnimation"
		Case 6
			l_Title = XSIUtils.Translate( IDS_ACTION_STORE_ANIM_AND_CURVAL, "XSISCRIPTS" )
			l_Name = "StoredEverything"
		Case Else
			' Default mode is 1
			in_Mode = 1
			l_Title = XSIUtils.Translate( IDS_ACTION_STORE_CURVAL, "XSISCRIPTS" )
			l_Name = "StoredSnapshot"
	End Select
	
	if Not IsEmpty(inout_Name) then
		l_Name = inout_Name
	end if

	dim		firstFrame, lastFrame, currFrame
	firstFrame = CLng(GetValue( "Project.Data.PlayControl.GlobalIn" ))
	lastFrame = CLng(GetValue( "Project.Data.PlayControl.GlobalOut" ))
	currFrame = CLng(GetValue( "Project.Data.PlayControl.Current" ))

	' if we store static frames, we'll default the in to the current frame
	if in_Mode <= 1 then
		l_ClipStart	= currFrame
	else
		l_ClipStart	= l_ClipIn
	end if

	' make sure the slider range includes the default range values!
	if firstFrame > l_ClipIn  then firstFrame = l_ClipIn
	if lastFrame  < l_ClipOut then lastFrame  = l_ClipOut


	' Try to get the Model object
	Dim l_oModel
	if in_Model = "" then
		' Try with the current selection
		if Selection.Count <> 0 then
			if( typename( Selection(0) ) = "Model" ) then
				set l_oModel = Selection(0)
			else
				set l_oModel = SIGetModel( Selection(0) )
			end if
		else
			' Otherwise, try with the parameter list
			set l_oModel = SIGetModel( inout_Objs )
		end if
	else
		set l_oModel = Dictionary.GetObject( in_Model, false )
	end if
	
	' Verify if there is a least one Animation Layer in the Model's Mixer
	Dim l_bAnimLayersPresent
	l_bAnimLayersPresent = false
	if typename(l_oModel) = "Model" then
		Dim l_Mixer, l_MixerTracks
		
		set l_Mixer = l_oModel.Mixer
		if typename(l_Mixer) = "Mixer" then
			set l_MixerTracks = l_Mixer.Tracks
			
			for each l_Track in l_MixerTracks
				if l_Track.Type = siTrackAnimationLayerType then
					l_bAnimLayersPresent = true
					exit for
				end if
			next
		end if
	end if


	'-------------------------------------------------------------------------
	' Build the transient property set
	'-------------------------------------------------------------------------

	set oPSet = ActiveSceneRoot.AddProperty( "CustomProperty", false, "StoreAction" )

	set oLayout = oPSet.PPGLayout
	set oPName		= oPSet.AddParameter3( "ActionName",	siString )
	set oPNbItem	= oPSet.AddParameter3( "NbItem",		siInt4, l_NbItem, , , false, true )
	set oPClipIn	= oPSet.AddParameter3( "ClipIn",		siInt4, l_ClipIn,	firstFrame, lastFrame, false )
	set oPClipOut	= oPSet.AddParameter3( "ClipOut",		siInt4, l_ClipOut,	firstFrame, lastFrame, false )
	set oPClipStart = oPSet.AddParameter3( "AddClipStart",	siInt4, l_ClipStart,firstFrame, lastFrame, false )
	set oPRemove	= oPSet.AddParameter3( "Remove",		siBool, inout_Remove, , , false )
	set oPKeyMode	= oPSet.AddParameter3( "KeyMode",		siBool, inout_bConsiderTime, , , false )
	set oPRipple	= oPSet.AddParameter3( "Ripple",		siBool, inout_bRipple, , , false )
	set oPAddClip	= oPSet.AddParameter3( "AddClip",		siBool, inout_bAddClip, , , false )
	set oPIncludeAnimLayers	= oPSet.AddParameter3( "IncludeAnimLayers",	siBool, inout_bIncludeAnimLayers, , , false )
	oPIncludeAnimLayers.SetCapabilityFlag siReadOnly, l_bAnimLayersPresent = false

	oPName.Value		= l_Name

	'-------------------------------------------------------------------------
	' Build the layout
	'-------------------------------------------------------------------------

	' Show the original animation group only if we are storing animation...
	if in_Mode > 1 then
		oLayout.AddGroup "Original Animation"
			aRadioItems = Array( "Copy/Cut Entire Fcurves", 0, _
								 "Copy/Cut Keys", 1 )
			oLayout.AddEnumControl "KeyMode", aRadioItems, "", siControlRadio
			oLayout.AddItem "Ripple", "Ripple Keys"
			oLayout.AddItem "IncludeAnimLayers", "Include Animation Layers"
		oLayout.EndGroup
	end if

	oLayout.AddGroup "New Source"
		oLayout.AddItem "ActionName", "Action Name"
		oLayout.AddItem "NbItem", "Number of Items", siControlString
		oLayout.AddItem "ClipIn", "Default In"
		oLayout.AddItem "ClipOut", "Default Out"
	oLayout.EndGroup

	oLayout.AddGroup "Once Done Creating the Source..."
		if in_Mode > 1 then
			oLayout.AddItem "Remove",		"Remove Original Animation"
		end if
		oLayout.AddItem "AddClip",		"Add Source as a Clip in the Mixer"
		oLayout.AddItem "AddClipStart", "Clip Offset"
	oLayout.EndGroup

	oLayout.Item( "ActionName" ).LabelMinPixels = 130
	oLayout.Item( "NbItem" ).LabelMinPixels = 130
	oLayout.Item( "ClipIn" ).LabelMinPixels = 130
	oLayout.Item( "ClipOut" ).LabelMinPixels = 130
	oLayout.Item( "AddClipStart" ).LabelMinPixels = 130

	'-------------------------------------------------------------------------
	' Inspect the PSet in modal mode
	'-------------------------------------------------------------------------

	if not InspectObj( oPSet, , l_Title, siModal, false ) then

		l_ClipIn	= oPClipIn.Value
		l_ClipOut	= oPClipOut.Value
		l_Remove	= oPRemove.Value
		l_Name		= oPName.Value
		l_UseKeys	= oPKeyMode.Value
		l_Ripple	= oPRipple.Value
		l_AddClip	= oPAddClip.Value
		l_AddClipStart = oPClipStart.Value
		l_IncludeAnimLayers  = oPIncludeAnimLayers.Value
		
		'Create the Action
		set GetInputAndStoreActionProc = SIStoreAction( in_Model, inout_Objs, in_Mode, l_Name, l_Remove, _
														l_UseKeys, l_ClipIn, l_ClipOut, l_Ripple, l_IncludeAnimLayers )

		'Change the Clip In and Out point
		On Error Resume Next		' disable error handling (see UDEV00252593)
		SetValue GetInputAndStoreActionProc & ".FrameStart", l_ClipIn 
		SetValue GetInputAndStoreActionProc & ".FrameEnd", l_ClipOut 
		On Error Goto 0			    ' resume error handling			

		'Set the returned values so they can be logged
		inout_Name    = l_Name
		inout_Remove  = l_Remove
		inout_ClipIn  = l_ClipIn
		inout_ClipOut = l_ClipOut
		inout_bConsiderTime = l_UseKeys
		inout_bRipple = l_Ripple
		inout_bAddClip = l_AddClip
		inout_ClipOffset = l_AddClipStart
		inout_bIncludeAnimLayers = l_IncludeAnimLayers

		if ( l_AddClip and typename(GetInputAndStoreActionProc) = "ActionSource" ) then
			AddSourceToMixer in_Model, GetInputAndStoreActionProc, l_AddClipStart, l_IncludeAnimLayers
		end if
		
		DeleteObj( oPSet )
	Else
		DeleteObj( oPSet )
		Err.Raise siErrCancelled
	End If

end function

'------------------------------------------------------------------------------
' NAME:		GetInputAndStoreActionProc2
'
' INPUT:	Same arguments as StoreAction command:
'			- Model (can be NULL)
'			- List of parameters (ElemRefs) to store
'			- Mode........            .1 = Store animated parameters - fcurves
'                                      2 = Store animated parameters - expressions
'                                      3 = Store animated parameters - fcurves & expressions
'                                      4 = Store static pose
'                                      5 = Store keyable parameters = fcurves & expressions
'                                      6 = Store keyable parameters = Store static pose
'                                      7 = Store keyable parameters = Store static pose + fcurves and expressions
'                                      8 = Store keyable parameters = fcurves
'                                      9 = Store character key set = fcurves (proxy params shouldn't have expr or cns)
'                                      10 = Store character key set = Store static pose
'                                      11 = Store character key set = Store static pose + fcurves and expressions
'			- Name to use for the new Action
'			- Remove animation?
'
' DESCRIPTION:	Prompt the user for values before calling StoreAction
'				
'------------------------------------------------------------------------------
Sub GetInputAndStoreActionProc2( in_Model, inout_Objs, inout_Mode, inout_Name, inout_Remove, _
								 inout_ClipIn, inout_ClipOut, inout_bConsiderTime, inout_bRipple, _
								 inout_bAddClip, inout_ClipOffset, inout_bIncludeAnimLayers )
								 
	' Remaps the selection list to the params we want to store
	If (inout_Mode >= 1) AND (inout_Mode <= 3) Then
		Set inout_Objs = FGetAnimatedParams(GetValue("SelectionList"), inout_Mode)
	ElseIf (inout_Mode >= 5) AND (inout_Mode <= 8) Then
		Set inout_Objs = FGetKeyableParams(GetValue("SelectionList"))
	ElseIf (inout_Mode >= 9) AND (inout_Mode <=11) Then
		Set oColl = CreateObject("XSI.Collection")
		set oCharKeySet = GetCurrentCharacterKeySet()
		call GetCurrentCharacterKeySetParams(oColl, oCharKeySet)
		Set inout_Objs = oColl
	Else
		' Select all elements in the branch if storing skeleton pose, as cannot
		' do in the task itself (will be too late)
		SelectChildNodes
		Set inout_Objs = FGetStaticPoseParams(GetValue("SelectionList"))
	End If

	' Remaps the in_Mode that GetInputAndStoreActionProc2 so that we call
	' StoreAction with the desired mode for the given operation
	Select case inout_Mode
	    ' Animated Parameters
		Case 1	inout_Mode = 2	' Store only fcurves
		Case 2	inout_Mode = 3	' Store only expressions
		Case 3	inout_Mode = 5	' Store both fcurves and expressions

		' Skeleton pose
		Case 4	inout_Mode = 1	' Store static pose

		' Keyable parameters
		Case 5	inout_Mode = 2	' Store both fcurves
		Case 6	inout_Mode = 1	' Store static pose
		Case 7	inout_Mode = 5	' Store only fcurves and expressions
		Case 8  inout_Mode = 6  ' Store static pose + fcurves and expressions

		' Character Key Sets
		Case 9  inout_Mode = 2  ' Store only fcurves
		Case 10  inout_Mode = 1 ' Store static pose
		Case 11  inout_Mode = 6 ' Store static pose + fcurves and expressions
	End select

	GetInputAndStoreActionProc in_Model, inout_Objs, inout_Mode, inout_Name,_
	                           inout_Remove, inout_ClipIn, inout_ClipOut, inout_bConsiderTime, inout_bRipple,_
							   inout_bAddClip, inout_ClipOffset, inout_bIncludeAnimLayers

End Sub


'------------------------------------------------------------------------------
' NAME:        FGetClipExtrapLength
'
' INPUT:       in_clip.........Clip we want to retrieve the extrapolation length
'              in_position.....0 = Retrieve extrapolation before length
'                              1 = Retrieve extrapolation after length
'
' DESCRIPTION: Returns the length of the extrapolation before or after a Clip
'------------------------------------------------------------------------------
Function FGetClipExtrapLength(in_clip, in_position)
	Dim l_TimeCtrl, l_ClipLength, l_ExtrapolationType

	l_TimeCtrl = in_clip.TimeControl
	if in_clip.Type = "camerashotclip" then
		FGetClipExtrapLength = 0
		Exit Function
	end if

	l_ClipLength = GetValue(l_TimeCtrl & ".endtime") - GetValue(l_TimeCtrl & ".startoffset")
	
	if (in_position = 0) then
		l_ExtrapolationType = GetValue(l_TimeCtrl & ".extrapbef_type")
		select case l_ExtrapolationType
			case 0	  FGetClipExtrapLength = 0
			case 1	  FGetClipExtrapLength = GetValue(l_TimeCtrl & ".extrapbef_timehold")
			case 2	  FGetClipExtrapLength = GetValue(l_TimeCtrl & ".extrapbef_nbcycles") * l_ClipLength
			case 3	  FGetClipExtrapLength = GetValue(l_TimeCtrl & ".extrapbef_nbbounces") * l_ClipLength
		end select
	elseif (in_position = 1) then
		l_ExtrapolationType = GetValue(l_TimeCtrl & ".extrapaft_type")
		select case l_ExtrapolationType
			case 0	  FGetClipExtrapLength = 0
			case 1	  FGetClipExtrapLength = GetValue(l_TimeCtrl & ".extrapaft_timehold")
			case 2	  FGetClipExtrapLength = GetValue(l_TimeCtrl & ".extrapaft_nbcycles") * l_ClipLength
			case 3	  FGetClipExtrapLength = GetValue(l_TimeCtrl & ".extrapaft_nbbounces") * l_ClipLength
		end select
	end if
end Function

'------------------------------------------------------------------------------
' NAME:        FIsInCompoundClip
'
' INPUT:       in_Clip...........Clip we want to get info
'
' DESCRIPTION: Returns TRUE if the Clip is inside a compound, FALSE otherwise
'------------------------------------------------------------------------------
Function FIsInCompoundClip(in_Clip)
	Dim l_ClipNameArray
	
	' Splits the clip name in several substring delimited by the symbol '.'
	l_ClipNameArray = Split(in_Clip, ".", -1, vbTextCompare)
	
	' If there are more than 4 '.' in clip name, the clip is inside a compound
	if (UBound(l_ClipNameArray) - LBound(l_ClipNameArray) + 1) > 4 then
		FIsInCompoundClip = True
	else
		FIsInCompoundClip = False
	end if
end Function


'------------------------------------------------------------------------------
' NAME:		FIsItemInCollection
'
' INPUT:	in_Item............The item we are looking up in the collection.
'			in_Collection......The collection we are looking in.
'
' DESCRIPTION:	Performs a linear search on the collection to find the input
'				item. If the item is found, the function returns TRUE. Otherwise
'				it returns FALSE.
'------------------------------------------------------------------------------
Function FIsItemInCollection(in_Item, ByRef in_Collection)
	Dim l_bSuccess, l_LookUpObj

	FIsItemInCollection = FALSE

	for each l_LookUpObj in in_Collection
		if l_LookUpObj = in_Item then
			FIsItemInCollection = TRUE
			exit for
		end if
	next
End Function

'------------------------------------------------------------------------------
' NAME:		FIsValueInArray
'
' INPUT:	in_Value............The value we are looking for in the array.
'			in_Array............The collection we are looking in.
'			in_StartIndex.......The index to start looking from.
'			in_EndIndex.........The index to stop looking at.
'
' DESCRIPTION:	Performs a linear search on the array in the index range 
'				defined by the last 2 arguments to find the input
'				value. If the value is found, the function returns TRUE. Otherwise
'				it returns FALSE.
'------------------------------------------------------------------------------
Function FIsValueInArray(in_Value, ByRef in_Array, in_StartIndex, in_EndIndex)
	Dim l_bSuccess, i

	FIsValueInArray = FALSE

	for i = in_StartIndex to in_EndIndex
		if in_Array(i) = in_Value then
			FIsValueInArray = TRUE
			exit for
		end if
	next
End Function


'------------------------------------------------------------------------------
' NAME:        GetMixWeightArrays
'
' INPUT:       in_Clip....................Clip we want to save the weight keys
'              in_AdditionnalKeys.........An array of additionnal keys we want to save
' OUTPUT:	   out_WeightFcvKeyFrames.....Weight curve key frames array
'			   out_WeightFcvKeyValues.....Weight curve key values array
'
' DESCRIPTION: Fills in 2 arrays, one containing the frames of the clip
'			   weight curve keys, the other one containing the values of these
'			   keys.
'------------------------------------------------------------------------------
Sub GetMixWeightArrays(in_Clip, _
					  in_AdditionnalKeys, _
					  ByRef out_WeightFcvKeyFrames, _
					  ByRef out_WeightFcvKeyValues)

	Dim	i, l_WeightKeyFrame, l_Size, l_DimArray

	If TypeName(in_AdditionnalKeys) <> "Nothing" Then
		l_Size = UBound(in_AdditionnalKeys)
	Else
		l_Size = 0
	End If

	' NOTE: we can't retrieve the curve info on the mix weight curves... so 
	' we are bound to assign a random size to our arrays... l_Size * 2 or 4
	' Here we redimension our arrays not preserving them: they are reset...
	if l_Size <> 0 then
		ReDim out_WeightFcvKeyFrames(l_Size * 2)
		ReDim out_WeightFcvKeyValues(l_Size * 2)
	else
		ReDim out_WeightFcvKeyFrames(4)
		ReDim out_WeightFcvKeyValues(4)		
	end if

	l_DimArray = UBound(out_WeightFcvKeyFrames)

	' Saves the additionnal keys specified by the frame number in the array
	for i = 0 to l_Size - 1
		if NOT FIsValueInArray(in_AdditionnalKeys(i), out_WeightFcvKeyFrames, 0, i) then
			out_WeightFcvKeyFrames(i) = in_AdditionnalKeys(i)
			out_WeightFcvKeyValues(i) = GetValue(in_Clip & ".actionclip.weight", in_AdditionnalKeys(i))
		end if
	next

	' Retrieves all the weight keys in the current clip
	l_WeightKeyFrame = FirstKey(in_Clip & ".actionclip.weight")

	i = l_Size

	' "1.#INF" is for windows and "inf" is for IRIX.
	while l_WeightKeyFrame <> "1.#INF" AND l_WeightKeyFrame <> "inf"
		if NOT FIsValueInArray(l_WeightKeyFrame, out_WeightFcvKeyFrames, 0, i - 1) Then
			
			' if we are about to go over our arrays size, resize them while preserving their content.
			if (i > l_DimArray) then
				ReDim Preserve out_WeightFcvKeyFrames(i * 2)
				ReDim Preserve out_WeightFcvKeyValues(i * 2)
				l_DimArray = i * 2
			end if

			out_WeightFcvKeyFrames(i) = l_WeightKeyFrame
			out_WeightFcvKeyValues(i) = GetValue(in_Clip & ".actionclip.weight", l_WeightKeyFrame)
			i = i + 1

		end if

		l_WeightKeyFrame = NextKey(in_Clip & ".actionclip.weight", l_WeightKeyFrame)
	wend

	' Redim our arrays one last time to make sure we don't have too many elements in them.
	ReDim Preserve out_WeightFcvKeyFrames(i - 1)
	ReDim Preserve out_WeightFcvKeyValues(i - 1)

end sub

'******************************************************************************
' HELPER SUBROUTINES
'******************************************************************************

'------------------------------------------------------------------------------
' NAME:        SetMixWeightKeys
'
' INPUT:       in_Clip....................Clip we want to set the weight keys on
'              in_WeightFcvKeyFrames......Array containing the keys frames
'              in_WeightFcvKeyValues......Array containing the keys values
'              in_LowerBoundary...........Lower boundary we want to start to save the keys
'              in_UpperBoundary...........Upper boundary we want to stop to save the keys
'
' DESCRIPTION: Saves weight keys in a clip in the specified range
'------------------------------------------------------------------------------
Sub SetMixWeightKeys(in_Clip, _
					 in_WeightFcvKeyFrames, _
					 in_WeightFcvKeyValues, _
					 in_LowerBoundary, _
					 in_UpperBoundary)

	Dim	l_FrameKey, i
	
	for i = 0 to UBound(in_WeightFcvKeyFrames)
		l_FrameKey = CDbl(in_WeightFcvKeyFrames(i))

		if (l_FrameKey >= in_LowerBoundary) AND (l_FrameKey <= in_UpperBoundary) then
			SaveKey in_Clip  & ".actionclip.weight", l_FrameKey, CDbl(in_WeightFcvKeyValues(i))
		end if

	next
end sub

'------------------------------------------------------------------------------
' NAME:        ExtrapolateClip
'
' INPUT:       in_Clip.......Clip we want to modify
'              in_Position...0 = Extrapolate before
'                            1 = Extrapolate after
'              in_Type.......0 = No contribution
'                            1 = Hold
'                            2 = Cycle
'                            3 = Bounce
'              in_Value......Extrapolation value
'
' DESCRIPTION: Add/Remove extrapolation from a clip
'------------------------------------------------------------------------------
sub ExtrapolateClip(in_Clip, in_Position, ByRef in_Type, in_Value)
	Dim	l_TimeCtrl

	If ( GetValue(in_Clip).Type = "mixeraudioclip" ) OR ( GetValue(in_Clip).Type = "camerashotclip" ) Then
		exit sub
	end if
	
	l_TimeCtrl = in_Clip.TimeControl

	If (in_Value = 0) then in_Type = 0

	' Extrapolate Before
	if (in_Position = 0) then
		SetValue l_TimeCtrl & ".extrapbef_type", in_Type
		Select case in_Type
			case 1		SetValue l_TimeCtrl & ".extrapbef_timehold", in_Value
			case 2		SetValue l_TimeCtrl & ".extrapbef_nbcycles", in_Value
			case 3		SetValue l_TimeCtrl & ".extrapbef_nbbouces", in_Value
		end select
		
	' Extrapolate After
	elseif (in_Position = 1) Then
		SetValue l_TimeCtrl & ".extrapaft_type", in_Type
		Select case in_Type
			case 1		SetValue l_TimeCtrl & ".extrapaft_timehold", in_Value
			case 2		SetValue l_TimeCtrl & ".extrapaft_nbcycles", in_Value
			case 3		SetValue l_TimeCtrl & ".extrapaft_nbbouces", in_Value
		end select
	end if
end Sub

'******************************************************************************
' ANIMATION MIXER TOOLS
'******************************************************************************

'------------------------------------------------------------------------------
' NAME:        SelectActionsFromObjectsFunc
'
' DESCRIPTION: Selects the action clips driving the selected objects. 
'
' INPUT:       in_InputObjs...List of objects being potentially driven
'
' OUTPUT:      Objects in the new selection
'              
'------------------------------------------------------------------------------
Function SelectActionsFromObjectsFunc(in_InputObjs, in_ConsiderTime, in_Time, in_KeepComp, inKeepInactive)

	SelectActionsFromObjectsFunc = GetDrivingActions(in_InputObjs, in_ConsiderTime, in_Time, in_KeepComp, inKeepInactive)

	SelectObj(SelectActionsFromObjectsFunc)

End function

'------------------------------------------------------------------------------
' NAME:        SelectObjectsFromActionFunc
'
' DESCRIPTION: Selects the objects a source is driving. It supports mixer clips
'              and sources.
'
' INPUT:       in_InputObjs.........List of objects to store anim params
'			   in_bOnlyPoseOffset...Only select objects which are flagged for pose
'									offsetting.  Otherwise select all objects.
'									This flag is only considered if a clip is selected
'									(rather than a source Action).
'
' OUTPUT:      Objects added to the selection
'              
'------------------------------------------------------------------------------
Function SelectObjectsFromActionFunc( in_InputObjs, in_bOnlyPoseOffset )
	Dim l_Elem
	Dim l_ClipModel, l_MappingRuleClip, l_Param, i, n, l_bActive, l_bPoseOffset
	Dim l_SourceModel, l_Items, l_SplittedParam, l_SceneRoot 

	Set SelectObjectsFromActionFunc = CreateObject("XSI.Collection")

	if TypeName(in_InputObjs) <> "Nothing" then
		for each l_Elem in in_InputObjs
			' Suport all types of clip except audio clips
			if ((LCase(Right(l_Elem.Type, 4)) = "clip") AND (l_Elem.Type <> "mixeraudioclip") AND (l_Elem.Type <> "camerashotclip") ) then

				' Get the objects driving the action by enumerating trough the value mapping template
				l_ClipModel = SIGetModel(l_Elem)
				Set l_SceneRoot = FGetSceneRoot

				l_MappingRuleClip = l_Elem & ".actionclip"
				n = GetNumMappingRules(l_MappingRuleClip )
				for i = 1 to n
					GetMappingRule l_MappingRuleClip , i, l_Param, l_bActive, , l_bPoseOffset

					if l_Param <> "<unmapped>" then
						if ( NOT in_bOnlyPoseOffset ) OR ( in_bOnlyPoseOffset AND l_bPoseOffset ) then					    
							if Left(l_Param, (Len(l_ClipModel) + 1)) <> l_ClipModel & "." then

								l_Param = Left(l_Param, Instr(l_Param, ".") - 1)

								if l_SceneRoot = l_ClipModel then
									SelectObjectsFromActionFunc.Add l_Param
								else
									SelectObjectsFromActionFunc.Add l_ClipModel & "." & l_Param
								end if
							else

								l_Param = Left(l_Param, Instr(l_Param, ".") + Len(l_ClipModel) + 1)
								SelectObjectsFromActionFunc.Add l_Param

							end if
						end if
					end if
				next
							
			elseif (LCase(Right(l_Elem.Type, 6)) = "action") then
				
				' Get the objects driving by enumerating the animatable items of the source
				l_SourceModel = SIGetModel(l_Elem)
				Set l_Items = EnumElements(l_Elem & ".Items", TRUE)
	
				for each l_Param in l_Items
					l_SplittedParam = Split(l_Param, ".", -1, 1)
					if (l_Elem.Type = "ShapeAction") then
						l_Param = l_SplittedParam(UBound(l_SplittedParam) - 4)
					else
						l_Param = l_SplittedParam(UBound(l_SplittedParam) - 3)
					end if
					SelectObjectsFromActionFunc.Add l_SourceModel & "." & l_Param
					
					' Prevent from asserting when the object is already selected
					RemoveFromSelection l_SourceModel & "." & l_Param
				next
				
			end if
		next
	end If
	
	' Adds the objects to the current selection
	if SelectObjectsFromActionFunc.Count <> 0 then
		if in_bOnlyPoseOffset then
			' For PoseOffset only mode, it's convenient to select in branch.
			SelectObj SelectObjectsFromActionFunc, "BRANCH"
		else
			' Normally, you want node selection, so you can see exactly which objects are driven!
			SelectObj SelectObjectsFromActionFunc
		end if
	end if
End function






'------------------------------------------------------------------------------
' NAME:			FreezeClipsAndReplaceFunc
'
' INPUT:		in_InputObjs.................List of clips to Freeze into a new action.
'				in_Name......................Name of the frozen action.
'				in_bIgnoreInactiveRules......Do we ignore inactive rules?
'				in_TimeStep..................Time step we want to use for plotting.
'				in_FCurveKind................Kind of curve to plot to.
'				in_Interpolation.............Interpolation for standard fcurves.
'				in_DoFit.....................Do we want to fit the plotted values with a curve?
'				in_FitTolerance..............Tolerance to use when fitting.
'				in_ProcessContRots...........Do we want to process orientations to be continuous?
'
' OUTPUT:		The Frozen action
'
' DESCRIPTION:	Freezes all the selected clips and replace them by the
'				new frozen action.
'------------------------------------------------------------------------------
Function FreezeClipsAndReplaceFunc(in_InputObjs, _
								   in_Name, _
								   in_bIgnoreInactiveRules, _
								   in_TimeStep, _
								   in_FCurveKind, _
								   in_Interpolation, _
								   in_DoFit, _
								   in_FitTolerance, _
								   in_ProcessContRots )

	Dim l_FrozenAction, l_Model, l_TrackOwner, l_NewTrack, l_NewClip, l_MixerTemplates, l_Template, l_TemplatesToReactivate
	Dim l_Clip, l_LowerBoundary, l_BefLength

	
	
	l_FrozenAction = FreezeClipsFunc(in_InputObjs, _
									 in_Name, _
									 in_bIgnoreInactiveRules, _
									 in_TimeStep, _
									 in_FCurveKind, _
									 in_Interpolation, _
									 in_DoFit, _
								     in_FitTolerance, _
									 in_ProcessContRots )

	If TypeName(l_FrozenAction) <> "Nothing" Then
		l_Model = SIGetModel(in_InputObjs)
		If FIsInCompoundClip(in_InputObjs(0)) Then
			l_TrackOwner = EnumElements(in_InputObjs(0), FALSE)
			l_TrackOwner = Left( l_TrackOwner, Instr( l_TrackOwner, ".ClipList") -1  )
			l_TrackOwner = EnumElements( l_TrackOwner, FALSE)
			l_TrackOwner = EnumElements( l_TrackOwner, FALSE)
		Else
			l_TrackOwner = l_Model & ".Mixer.Tracks.AnimTracks"
		End If
	
		l_LowerBoundary = -1
		' Removes every clips that were part of the freeze
		For Each l_Clip in in_InputObjs
			if l_Clip.Type = "mixeranimclip"_
	   		OR l_Clip.Type = "AnimActionCompoundClip" Then
				l_BefLength = FGetClipExtrapLength(l_Clip, 0)
				If (GetValue(l_Clip & ".actionclip.timectrl.startoffset") - l_BefLength < l_LowerBoundary) OR (l_LowerBoundary = -1) Then
					l_LowerBoundary = GetValue(l_Clip & ".actionclip.timectrl.startoffset") - l_BefLength
				End If
				DeleteObj l_Clip
			end if
		Next

		' Temporarily disable all the templates
		Set	l_TemplatesToReactivate	= CreateObject("XSI.Collection")
		l_TemplatesToReactivate.Clear
		l_TemplatesToReactivate.Unique = True

		' Find out which templates we need to deactivate, and do so, remembering which they were
		set l_MixerTemplates = EnumElements(l_Model & ".Mixer.ConnectionMapping", TRUE)
		if TypeName(l_MixerTemplates ) <> "Nothing" then
			for each l_Template in l_MixerTemplates
				if (GetValue(l_Template & ".Active")) then
					'LogMessage "Active Connection Map"
					SetValue l_Template & ".Active", "FALSE"
					l_TemplatesToReactivate.Add l_Template
				else
					'LogMessage "Inactive Connection Map"
				end if
			next
		end if

		set l_MixerTemplates = EnumElements(l_Model & ".Mixer.ValueMapping", TRUE)
		if TypeName(l_MixerTemplates ) <> "Nothing" then
			for each l_Template in l_MixerTemplates
				if (GetValue(l_Template & ".Active")) then
					'LogMessage "Active Value Map"
					SetValue l_Template & ".Active", "FALSE"
					l_TemplatesToReactivate.Add l_Template
				else
					'LogMessage "Inactive Value Map"
				end if
			next
		end if


		Set l_NewTrack = AddTrack(l_Model, l_TrackOwner, 0)
		set l_NewClip = AddClip(l_Model, l_FrozenAction, , l_NewTrack, l_LowerBoundary)
		AddToSelection l_NewClip
		
		'Now reactivate any templates we temporarily deactivated for the freezing/plotting->instance process
		for i = 0 to l_TemplatesToReactivate.Count - 1
			'LogMessage "Reactivating " & l_TemplatesToReactivate.Items(i)
			SetValue l_TemplatesToReactivate.Items(i) & ".Active", "TRUE"
		next

		l_TemplatesToReactivate.Clear
		Set l_TemplatesToReactivate = NOTHING

	End If
	
	FreezeClipsAndReplaceFunc = l_FrozenAction
End Function


function GetFreezeActionWizardParamArray()
	Dim l_Class
	l_Class = -1
	GetFreezeActionWizardParamArray = Array( _
		Array( "IgnoreInactive", siBool, True, False, True, l_Class, siPersistable+siSilent, False, True, "IgnoreInactive", "Ignore inactive channels" ), _
		Array( "ActionName", siString, "Frozen", "", "", l_Class, siPersistable+siSilent, "", "", "ActionName", "Action Name" ), _
		Array( "Step", siDouble, 1, -1000000, 1000000, l_Class, siPersistable+siSilent, 0, l_end - l_start, "Step", "Step value" ), _
		Array( "FCurveKind", siInt2, 3, 0, 3, l_Class, siPersistable+siSilent, 0, 3, "FCurveKind", "Kind of fcurve" ), _
		Array( "Interpolation", siInt2, 2, 0, 2, l_Class, siPersistable+siSilent, 0, 2, "Interpolation", "Interpolation" ), _
		Array( "FitFCurve", siBool, False, False, True, l_Class, siPersistable+siSilent, False, True, "FitFCurve", "Fit plotted values with an fcurve"  ), _
		Array( "FitTolerance", siDouble, 0.01, 0.0001, 10, l_Class, siPersistable+siSilent, 0.0001, 1, "FitTolerance", "Fit Tolerance" ), _
		Array( "ProcessContRots", siBool, True, False, True, l_Class, siPersistable+siSilent, False, True, "ProcessContRots", "Process rotations to ensure continuity" ) _
		)
end function

function GetInputAndFreezeAndReplaceClipsProc(in_InputObjs, _
								   in_Name, _
								   in_bIgnoreInactiveRules, _
								   in_TimeStep, _
								   in_FCurveKind, _
								   in_Interpolation, _
								   in_DoFit, _
								   in_FitTolerance, _
								   in_ProcessContRots, _
								   in_Title)

	Dim			l_CPList, l_SceneRoot, l_CustomParam
	Dim			l_GeneratePset, l_Action


	' I keep this around so it's easier to regenerate a new pset/preset if needed
	l_GeneratePset = False

	Dim l_aProps
	l_aProps = GetFreezeActionWizardParamArray()

	Set l_SceneRoot = FGetSceneRoot
	if (l_GeneratePset = True) then

		' Create a custom plot wizard property
		Set l_CPList = SIAddProp( "Custom_parameter_list", l_SceneRoot , , "FreezeClips").value("Value")
		l_CustomParam = l_SceneRoot & "." & l_CPList

		for i = 0 to UBound( l_aProps )
			SIAddCustomParameter l_CustomParam, l_aProps(i)(0), l_aProps(i)(1), l_aProps(i)(2), _
				l_aProps(i)(3), l_aProps(i)(4), l_aProps(i)(5), l_aProps(i)(6), l_aProps(i)(7), _
				l_aProps(i)(8), l_aProps(i)(9), l_aProps(i)(10)
		next

	Else
		' See if there is already a pset that contain the options.
		' If so, we will use those current values. If not we create a new one.
		' Currently we put this pset under the Scene Root, but we
		' should eventually be able to place it under Project/Data.
		set l_CustomParam = l_SceneRoot.Properties("FreezeClips" )
		if IsEmpty(l_CustomParam) Or (TypeName(l_CustomParam) = "Nothing") Then
			' There wasn't one, so create it...
			Set l_CPList = SIAddProp( "FreezeActionWizard", l_SceneRoot , , "FreezeClips").value("Value")
			l_CustomParam = l_SceneRoot & "." & l_CPList

			' Set the appropriate default values.
			for i = 0 to UBound( l_aProps )
				SetValue l_CustomParam & "." & l_aProps(i)(0), l_aProps(i)(2)
			next

		end if
	End if

	'Launch the dialog and wait for OK or Cancel to be pressed.
	If FWizardDialog(l_CustomParam,in_Title) = vbOk Then

		in_Name			= GetValue( l_CustomParam & ".ActionName" )
		in_TimeStep		= GetValue( l_CustomParam & ".Step" )
		in_bIgnoreInactiveRules = GetValue( l_CustomParam & ".IgnoreInactive" )

		dim l_FCurveKind
		l_FCurveKind	= GetValue( l_CustomParam & ".FCurveKind" )

		select case l_FCurveKind
			case 0		' Boolean fcurve
				in_FCurveKind  = 10
			case 1		' Integer fcurve
				in_FCurveKind  = 15
			case 2		' Standard fcurve
				in_FCurveKind  = 20
			case 3		' Raw data fcurve
				in_FCurveKind  = 30
		end select

		dim l_Interpolation
		l_Interpolation = GetValue( l_CustomParam & ".Interpolation" )

		select case l_Interpolation
			case 0		' Constant interpolation
				in_Interpolation  = 1
			case 1		' Linear interpolation
				in_Interpolation  = 2
			case 2		' Spline interpolation
				in_Interpolation  = 3
		end select

		in_DoFit	=		GetValue( l_CustomParam & ".FitFCurve" )
		in_FitTolerance	=	GetValue( l_CustomParam & ".FitTolerance" )
		in_ProcessContRots = GetValue( l_CustomParam & ".ProcessContRots" )

		l_Action = FreezeClipsAndReplaceFunc (in_InputObjs, in_Name, in_bIgnoreInactiveRules, in_TimeStep, in_FCurveKind, in_Interpolation, in_DoFit, in_FitTolerance, in_ProcessContRots )
	Else
				Err.Raise siErrCancelled
	End If

	'GetInputAndFreezeAndReplaceClipsProc = l_Action
	
end function


'------------------------------------------------------------------------------
' NAME:        FreezeClipsFunc
'
' INPUT:		in_InputObjs.................List of clips to Freeze into a new action.
'				in_Name......................Name of the frozen action.
'				in_bIgnoreInactiveRules......Do we ignore inactive rules?
'				in_TimeStep..................Time step we want to use for plotting.
'				in_FCurveKind................Kind of curve to plot to.
'				in_Interpolation.............Interpolation for standard fcurves.
'				in_DoFit.....................Do we want to fit the plotted values with a curve?
'				in_FitTolerance..............Tolerance to use when fitting.
'				in_ProcessContRots...........Do we want to process orientations to be continuous?
'
' OUTPUT:		The Frozen action
'
' DESCRIPTION:	Freezes all the selected clips
'------------------------------------------------------------------------------
Function FreezeClipsFunc(in_InputObjs, _
						 in_Name, _
						 in_bIgnoreInactiveRules, _
						 in_TimeStep, _
						 in_FCurveKind, _
						 in_Interpolation, _
						 in_DoFit, _
						 in_FitTolerance, _
						 in_ProcessContRots )

	Dim	l_ActionDrivingParam, l_ClipModel
	Dim	l_ModelToPlot, l_ModelToPlotHack, l_Clip, l_Param, l_Active, l_Unused, l_myClip, l_Track, l_Compound, l_MixerTracks
	Dim	l_nbClipsInCompound, l_nbClips
	Dim	l_BefLength, l_AftLength, l_CurrentLowerBoundary, l_CurrentUpperBoundary, l_LowerBoundary, l_UpperBoundary
	Dim	l_MappingRule, i, n
	Dim l_SoloTracks, l_NonSoloTracks, l_ActiveClips, l_InactiveClips

	l_ActionDrivingParam = ""
	l_ClipModel = ""
	Set l_ModelToPlot = CreateObject("XSI.Collection")
	
	l_LowerBoundary = 945134864
	l_UpperBoundary = -945134864

	l_nbClipsInCompound = 0
	l_nbClips = 0
	
	If TypeName(in_InputObjs) = "Nothing" Then
		LogMessage XSIUtils.Translate( IDS_ERROR_NO_CLIP_SPECIFIED, "XSISCRIPTS" )
		Err.Raise siErrCancelled
		Exit Function
	End If

	If	in_TimeStep <= 0 Then
		LogMessage XSIUtils.Translate( "Time step must be strictly positive", "XSISCRIPTS" )
		Err.Raise siErrCancelled
		Exit Function
	End If

	If	(in_FCurveKind <> 10 AND in_FCurveKind <> 15 AND in_FCurveKind <> 20 AND in_FCurveKind <> 30) Then
		LogMessage XSIUtils.Translate( "The FCurve Kind value must be one of 10 (boolean), 15 (integer), 20 (standard) or 30 (Raw)", "XSISCRIPTS" )
		Err.Raise siErrCancelled
		Exit Function
	End If
	
	If	in_FCurveKind = 20 AND (in_Interpolation < 1 OR in_Interpolation > 3) Then
		LogMessage XSIUtils.Translate( "The interpolation value must be one of 1 (constant), 2 (linear) or 3 (spline)", "XSISCRIPTS" )
		Err.Raise siErrCancelled
		Exit Function
	End If

	If	in_DoFit = TRUE AND in_FitTolerance = 0 Then
		LogMessage XSIUtils.Translate( "The fit tolerance must be strictly greater than 0", "XSISCRIPTS" )
		Err.Raise siErrCancelled
		Exit Function
	End If

	Set l_InactiveClipsToRemove		= CreateObject("XSI.Collection")
	For Each l_Clip in in_InputObjs
		if NOT GetValue( l_Clip & ".actionclip.active" ) then
			l_InactiveClipsToRemove.Add l_Clip
		end if
	Next

	For Each l_Clip in l_InactiveClipsToRemove
		in_InputObjs.Remove l_Clip
	Next

	For Each l_Clip in in_InputObjs
		' Can only Freeze animation clips or compound clips
		if l_Clip.Type = "mixeranimclip"_
		   OR l_Clip.Type = "AnimActionCompoundClip" then
		   
			' Gets the lower and upper boundary of the current clip
			l_BefLength = FGetClipExtrapLength(l_Clip, 0)
			l_AftLength = FGetClipExtrapLength(l_Clip, 1)
			l_CurrentLowerBoundary = GetValue(l_Clip & ".actionclip.timectrl.startoffset") - l_BefLength
			l_CurrentUpperBoundary = GetValue(l_Clip & ".actionclip.timectrl.endtime") + l_AftLength - 1
			
			' Saves the lowest and highest boundaries
			if (l_CurrentLowerBoundary < l_LowerBoundary) then l_LowerBoundary = l_CurrentLowerBoundary
			if (l_CurrentUpperBoundary > l_UpperBoundary) then l_UpperBoundary = l_CurrentUpperBoundary
			
			' Gets the model of the clip
			if l_ClipModel <> SIGetModel(l_Clip) then
				l_ClipModel = SIGetModel(l_Clip)
				l_ModelToPlot.Add l_ClipModel
			end if
			
			' Gets the animatable parameters of the clip and adds them to a string separated by commas
			l_MappingRule = l_Clip & ".actionclip"
			n = GetNumMappingRules(l_MappingRule)
			' As I don't want to test in_bIgnoreInactiveRules for all parameters, I duplicate the loop
			if in_bIgnoreInactiveRules = True then
				for i = 1 to n
					GetMappingRule l_MappingRule, i, l_Param, l_Unused, l_Active	

					if (l_Active = true)  AND  (l_param <> "<unmapped>") then
						' Hack for PlotToAction (Adds the Model name before the parameters - if not already there)
						if Left(l_Param, Instr(l_Param, ".") - 1) <> l_ClipModel then
							l_Param = l_ClipModel & "." & l_Param
						end if

						' Don't add a string twice
						if (Instr(l_ActionDrivingParam, l_Param) = 0) then
							l_ActionDrivingParam = l_ActionDrivingParam & "," & l_Param
						end if
					end if
				next
			else
				for i = 1 to n
					GetMappingRule l_MappingRule, i, l_Param
			
					if l_param <> "<unmapped>" then
						' Hack for PlotToAction (Adds the Model name before the parameters - if not already there)
						if Left(l_Param, Instr(l_Param, ".") - 1) <> l_ClipModel then
							l_Param = l_ClipModel & "." & l_Param
						end if

						' Don't add a string twice
						if (Instr(l_ActionDrivingParam, l_Param) = 0) then
							l_ActionDrivingParam = l_ActionDrivingParam & "," & l_Param
						end if
					end if
				next
			end if
	
			' Counts the number of clips
			l_nbClips = l_nbClips + 1
			if FIsInCompoundClip(l_Clip) then l_nbClipsInCompound = l_nbClipsInCompound + 1
			l_myClip = l_Clip
		end if
	next

	' No clips to Freeze
	if (l_nbClips < 1) then
		LogMessage XSIUtils.Translate( IDS_ERROR_NO_CLIP_SPECIFIED, "XSISCRIPTS" )
		Err.Raise siErrCancelled
		exit function
	end if

	' Zero paramaters to freeze
	if l_ActionDrivingParam = "" then
		LogMessage XSIUtils.Translate( "No parameters to freeze", "XSISCRIPTS" )
		Err.Raise siErrCancelled
		exit function
	end if

	' Can't Freeze Clips owned by different models
	if l_ModelToPlot.Count > 1 then
		LogMessage XSIUtils.Translate( "Can't Freeze Clips owned by different models", "XSISCRIPTS" )
		Err.Raise siErrCancelled
		exit function
	end if
	
	' Can't simultaneously Freeze Clips inside compounds and outside compounds
	if (l_nbClipsInCompound <> 0) AND (l_nbClipsInCompound <> l_nbClips) then
		LogMessage XSIUtils.Translate(  "Can't simultaneously Freeze Clips inside and outside compounds", "XSISCRIPTS" )
		Err.Raise siErrCancelled
		exit function
	end if
	
	' If Clip is inside a compound, ajust the different times accordingly
	if FIsInCompoundClip(l_myClip) then
		' Get the TrackName
		set l_Track = EnumElements( l_myClip, FALSE)
		l_Track = Left( l_Track, Instr( l_Track, ".ClipList") -1 )
	
		' Gets the CompoundOwner (The Great-Grand-Parent)
		l_Compound = EnumElements( l_Track, FALSE)
		l_Compound = EnumElements( l_Compound, FALSE)

		' Converts the local time to glocal time
		l_LowerBoundary = ((l_LowerBoundary - GetValue(l_Compound  & ".actionclip.timectrl.Clipin")) /_
							GetValue(l_Compound  & ".actionclip.timectrl.scale")) +_
							GetValue(l_Compound & ".actionclip.timectrl.startoffset")
		l_UpperBoundary = ((l_UpperBoundary - GetValue(l_Compound  & ".actionclip.timectrl.Clipin")) /_
							GetValue(l_Compound  & ".actionclip.timectrl.scale")) +_
							GetValue(l_Compound & ".actionclip.timectrl.startoffset")
	end if
	
	' Removes the comma at the head of each string
	l_ActionDrivingParam = Right(l_ActionDrivingParam, Len(l_ActionDrivingParam) - 1)

	' Hack for PlotToAction - Gets an object in the model (whatever the object is)
	Set l_ModelToPlotHack = EnumElements(l_ModelToPlot.Items(0) & ".Children", TRUE)
	Set l_ModelToPlotHack = SIFilter(l_ModelToPlotHack, "sceneobject")
	l_ModelToPlotHack = Split(l_ModelToPlotHack, ",", -1, 1)(0)
	
	' Get the model mixer tracks list.
	l_MixerTracks = l_ModelToPlot.Items(0) & ".Mixer.Tracks.AnimTracks"
		
	' Prepare the tracks and the clips for the Freeze.
	Set l_SoloTracks	= CreateObject("XSI.Collection")
	Set	l_NonSoloTracks	= CreateObject("XSI.Collection")
	Set	l_ActiveClips	= CreateObject("XSI.Collection")
	Set	l_InactiveClips	= CreateObject("XSI.Collection")

	PrepareTracksForFreezeProc in_InputObjs, l_MixerTracks, l_SoloTracks, l_NonSoloTracks, l_ActiveClips, l_InactiveClips

	' Plot the action
	FreezeClipsFunc = PlotToAction(l_ModelToPlotHack, _
								   l_ActionDrivingParam, _
								   in_Name, _
				    			   Round(l_LowerBoundary, 3), _
								   Round(l_UpperBoundary, 3), _
								   in_TimeStep, _
								   in_FCurveKind, _
								   in_Interpolation, _
								   in_DoFit, _
								   in_FitTolerance, _
								   in_ProcessContRots )
				    			    
	' Restore the track initial state.
	for i = 0 to l_SoloTracks.Count - 1
		SetValue l_SoloTracks.Items(i) & ".solo", "TRUE"
	next

	l_SoloTracks.Clear
	Set l_SoloTracks = NOTHING

	for i = 0 to l_NonSoloTracks.Count - 1
		SetValue l_NonSoloTracks.Items(i) & ".solo", "FALSE"
	next

	l_NonSoloTracks.Clear
	Set l_NonSoloTracks = NOTHING
	
	' Restore the clips initial state.
	for i = 0 to l_ActiveClips.Count - 1
		SetValue l_ActiveClips.Items(i) & ".actionclip.active", "TRUE"
	next

	l_ActiveClips.Clear
	Set l_ActiveClips = NOTHING

	for i = 0 to l_InactiveClips.Count - 1
		SetValue l_InactiveClips.Items(i) & ".actionclip.active", "FALSE"
	next

	l_InactiveClips.Clear
	Set l_InactiveClips = NOTHING



End Function



function GetInputAndFreezeClipsProc(in_InputObjs, _
						 in_Name, _
						 in_bIgnoreInactiveRules, _
						 in_TimeStep, _
						 in_FCurveKind, _
						 in_Interpolation, _
						 in_DoFit, _
						 in_FitTolerance, _
						 in_ProcessContRots, _
						 in_Title)

	Dim			l_CPList, l_SceneRoot, l_CustomParam


	Set l_SceneRoot = FGetSceneRoot

	' See if there is already a pset that contain the options.
	' If so, we will use those current values. If not we create a new one.
	' Currently we put this pset under the Scene Root, but we
	' should eventually be able to place it under Project/Data.
	set l_CustomParam = l_SceneRoot.Properties("FreezeClips" )
	if IsEmpty(l_CustomParam) Or (TypeName(l_CustomParam) = "Nothing") Then
		' There wasn't one, so create it...
		Set l_CPList = SIAddProp( "FreezeActionWizard", l_SceneRoot , , "FreezeClips").value("Value")
		l_CustomParam = l_SceneRoot & "." & l_CPList

		Dim l_aProps
		l_aProps = GetFreezeActionWizardParamArray()

		' Set the appropriate default values.
		for i = 0 to UBound( l_aProps )
			SetValue l_CustomParam & "." & l_aProps(i)(0), l_aProps(i)(2)
		next

	end if

	'Launch the dialog and wait for OK or Cancel to be pressed.
	If FWizardDialog(l_CustomParam,in_Title) = vbOk Then

		in_Name			= GetValue( l_CustomParam & ".ActionName" )
		in_TimeStep		= GetValue( l_CustomParam & ".Step" )
		in_bIgnoreInactiveRules = GetValue( l_CustomParam & ".IgnoreInactive" )

		dim l_FCurveKind
		l_FCurveKind	= GetValue( l_CustomParam & ".FCurveKind" )

		select case l_FCurveKind
			case 0		' Boolean fcurve
				in_FCurveKind  = 10
			case 1		' Integer fcurve
				in_FCurveKind  = 15
			case 2		' Standard fcurve
				in_FCurveKind  = 20
			case 3		' Raw data fcurve
				in_FCurveKind  = 30
		end select

		dim l_Interpolation
		l_Interpolation = GetValue( l_CustomParam & ".Interpolation" )

		select case l_Interpolation
			case 0		' Constant interpolation
				in_Interpolation  = 1
			case 1		' Linear interpolation
				in_Interpolation  = 2
			case 2		' Spline interpolation
				in_Interpolation  = 3
		end select

		in_DoFit	=		GetValue( l_CustomParam & ".FitFCurve" )
		in_FitTolerance	=	GetValue( l_CustomParam & ".FitTolerance" )
		in_ProcessContRots = GetValue( l_CustomParam & ".ProcessContRots" )

		l_Action = FreezeClipsFunc(in_InputObjs, in_Name, in_bIgnoreInactiveRules, in_TimeStep, in_FCurveKind, in_Interpolation, in_DoFit, in_FitTolerance, in_ProcessContRots )
	Else
		Err.Raise siErrCancelled
	End If

	'GetInputAndFreezeClipsProc = l_Action

end function


'------------------------------------------------------------------------------
' NAME:        PrepareTracksForFreezeProc
'
' INPUT:		in_Tracks..............The mixer tracks
' INOUT:		in_SoloTracks..........Collection of the tracks with solo on
'				in_NonSoloTracks.......Collection of the tracks with solo off
'               in_ActiveClips.........Collection of the active clips.
'				in_InactiveClips.......Collection of the inactive clips.
'
' DESCRIPTION:	Prepares the tracks and the clips on them before a Freeze. All
'				the tracks containing a clip involved in the Freeze are soloed and
'				the other are unsoloed.  Then, for each soloed track, it activates
'				or desactivates clips on that track depending if they are selected
'				or not. The tracks original solo state and the clips original
'				activation state are saved in four separate collections for futur
'				reset.
'------------------------------------------------------------------------------
sub PrepareTracksForFreezeProc(in_ClipsToProcess, _
							   in_Tracks, _
							   ByRef in_SoloTracks, _
							   ByRef in_NonSoloTracks, _
							   ByRef in_ActiveClips, _
							   ByRef in_InactiveClips)

	Dim l_TracksToSolo, l_TracksToUnsolo, l_MixerTracks, l_Track, l_CompoundTracks, l_Compound
	Dim l_SelectedClip
	Dim l_TrackClips, l_Clip
	Dim l_SelectedClipsList
	Dim l_LookUpTrack

	' Empty the input collections. Also make sure they are unique collections (otherwise we could be asking for trouble)
	in_SoloTracks.Clear
	in_SoloTracks.Unique = True
	in_NonSoloTracks.Clear
	in_NonSoloTracks.Unique = True
	in_ActiveClips.Clear
	in_ActiveClips.Unique = True
	in_InactiveClips.Clear
	in_InactiveClips.Unique = True

	
	' Create 3 unique temporary collections.
	Set l_TracksToSolo		= CreateObject("XSI.Collection")
	l_TracksToSolo.Unique = True
	Set l_TracksToUnsolo	= CreateObject("XSI.Collection")
	l_TracksToUnsolo.Unique = True
	Set l_SelectedClipsList	= CreateObject("XSI.Collection")
	l_SelectedClipsList.Unique = True

	' Retrieve all the mixer tracks
	set l_MixerTracks = EnumElements(in_Tracks, TRUE)
	if TypeName(l_MixerTracks) <> "Nothing" then
	
		' For each track, save it's "solo" state and then unsolo it
		for each l_Track in l_MixerTracks

			' Save the current track "solo" state.
			if (GetValue(l_Track & ".solo")) then
				in_SoloTracks.Add l_Track
			else
				in_NonSoloTracks.Add l_Track
			end if

			' Unsolo the current track.
			l_TracksToUnsolo.Add l_Track
		next
	end if

	' Solo every track with a selected clip on it.
	if TypeName(in_ClipsToProcess) <> "Nothing" then
	
		' Retrieve every selected clip.		
		for each l_SelectedClip in in_ClipsToProcess
			if l_SelectedClip.Type = "mixeranimclip"_
		      OR l_SelectedClip.Type = "AnimActionCompoundClip" then
			
				' Get the track the clip is on.
				set l_Track = EnumElements(l_SelectedClip, FALSE)
				l_Track = Left(l_Track, Instr(l_Track, ".ClipList") - 1)
				
				' If the clip is inside a compound, solo the tracks inside the compound.
				' We also need to solo the track the compound is on.
				if FIsInCompoundClip(l_SelectedClip) then
					l_CompoundTracks = EnumElements(l_SelectedClip, FALSE)
					l_CompoundTracks = Left(l_CompoundTracks, Instr(l_CompoundTracks, ".ClipList") - 1)

					' Now get the tracks that are in the compound.
					l_CompoundTracks = EnumElements(l_CompoundTracks, FALSE)
					Set l_CompoundTracks = EnumElements(l_CompoundTracks, TRUE)

					' Store the solo state of each track inside the compound and then
					' unsolo them all.
					for each l_LookUpTrack in l_CompoundTracks
						
						if GetValue(l_LookUpTrack & ".solo") then
							if NOT FIsItemInCollection(l_LookUpTrack, in_SoloTracks) then
								in_SoloTracks.Add l_LookUpTrack
							end if
						else
							if NOT FIsItemInCollection(l_LookUpTrack, in_NonSoloTracks) then
								in_NonSoloTracks.Add l_LookUpTrack
							end if
						end if
						
						' Store the track to unsolo if it is different from the track on which the selected
						' clip is.
						if l_LookUpTrack <> l_Track then	
							l_TracksToUnsolo.Add l_Track
						end if
					next

					' Get the track the compound is on and solo it. Remember we only have 1 level
					' of compound.
					l_CompoundTracks = EnumElements(l_SelectedClip, FALSE)
					l_CompoundTracks = Left(l_CompoundTracks, Instr(l_CompoundTracks, ".Compound") - 1)

					' Store the compound track we have to solo ( make sure we don't have twice the same track in the collection )
					l_TracksToSolo.Add l_CompoundTracks
				end if

				' Store the track we have to solo.
				l_TracksToSolo.Add l_Track

				' Add the selected clip in a temporary collection.				
				l_SelectedClipsList.Add l_SelectedClip

			end if
		next
		
		' Retrieve all the clips on the tracks having selected clips on.
		for each l_LookUpTrack in l_TracksToSolo

			' Enumerate all the clips on the current track
			set l_TrackClips = EnumElements(l_LookUpTrack & ".ClipList", TRUE)
			
			' For each of these clips store the Active state and deactivate those that
			' are not selected.
			for each l_Clip in l_TrackClips

				if GetValue(l_Clip & ".actionclip.active") then
					if NOT FIsItemInCollection(l_Clip, in_ActiveClips) then
						in_ActiveClips.Add l_Clip
						end if
				else
					if NOT FIsItemInCollection(l_Clip, in_InActiveClips) then
						in_InActiveClips.Add l_Clip
					end if
				end if

				if FIsItemInCollection(l_Clip, l_SelectedClipsList) OR l_Clip.Type = "AnimActionCompoundClip" then
					SetValue l_Clip & ".actionclip.active", "TRUE"
				else
					SetValue l_Clip & ".actionclip.active", "FALSE"
				end if					
			next

		next

		' Unsolo all the tracks which are not part of the tracks to solo collection.
		for each l_LookUpTrack in l_TracksToUnsolo
			if NOT FIsItemInCollection(l_LookUpTrack, l_TracksToSolo) then
				SetValue l_LookUpTrack & ".solo", "FALSE"
			end if
		next

		' Solo all the tracks which are part of the tracks to solo collection
		for each l_LookUpTrack in l_TracksToSolo
			SetValue l_LookUpTrack & ".solo", "TRUE"
		next
		
		' Clean the temporary collections.
		l_SelectedClipsList.Clear
		Set l_SelectedClipsList = NOTHING
		
		l_TracksToSolo.Clear
		Set l_TracksToSolo = NOTHING

		l_TracksToUnsolo.Clear
		Set l_TracksToUnsolo = NOTHING

	end if

end sub


'------------------------------------------------------------------------------
' NAME:        GetInputAndSetDefaultWeightProc
'
' INPUT:       in_InputObjs....Clips to preset the weight
'              in_Mode.........siWeightEaseIn = Ease-in (0 -> 1)
'                              siWeightEaseOut = Ease-out (1 -> 0)
'                              siWeightLinearEaseIn = Linear ease-in (0 -> 1)
'                              siWeightLinearEaseOut = Linear ease-out (1 -> 0)
'                              siWeightExponentialIn = NOT IMPLEMENTED
'                              siWeightExponentialOut = NOT IMPLEMENTED
'                              siWeightGaussian = Gaussian (0 -> 1 -> 0)
'                              siWeightGaussianReverse = Gaussian (1 -> 0 -> 1)
'                              siWeightSquare = Square (0 -> 1 -> 0)
'                              siWeightSquareReverse = Square (1 -> 0 -> 1)
'                              siWeightOscillate = Oscillate
'			       siWeightConstant = Constant
'                              siWeightFlipX = Flip X
'                              siWeightFlipY = Flip Y
'              in_Extra....Extra value needed by some presets
'
' DESCRIPTION:	Prompt the user for values before calling SetDefaultWeight
'------------------------------------------------------------------------------
Sub GetInputAndSetDefaultWeightProc(in_InputObjs, in_Mode, in_Extra)
	Dim l_Title, l_Name
	Dim l_CPList, l_SceneRoot, l_CustomParam

	If (in_Mode = siWeightOscillate) OR (in_Mode = siWeightConstant) Then
		Set l_SceneRoot = FGetSceneRoot
		Set l_CPList = SIAddProp( "Custom_parameter_list", l_SceneRoot , , "SetDefaultWeight").value("Value")
		l_CustomParam = l_SceneRoot & "." & l_CPList
		
		' Prompts the user for values only for oscillate and constant
		Select Case in_Mode
			Case siWeightOscillate
				l_Title = "Oscillate"
				l_Name = "Number of oscillations"
				
				SIAddCustomParameter l_CustomParam , "Value", siInt4, _
					1, 0, 100, , siPersistable+siSilent, , , "Value", l_Name
				SetValue l_CustomParam & ".Value", 1
			Case siWeightConstant
				l_Title = "Constant"
				l_Name = "Constant value"
				SIAddCustomParameter l_CustomParam , "Value", siFloat, _
					1.0, 0.0, 1.0, , siPersistable+siSilent, , , "Value", l_Name
				SetValue l_CustomParam & ".Value", 1
		End Select
	

		
		If FWizardDialog(l_CustomParam,l_Title) = vbOk Then
			in_Extra = GetValue( l_CustomParam & ".Value" )
			DeleteObj l_CustomParam
		Else
			DeleteObj l_CustomParam
			Err.Raise siErrCancelled
		End If
	End If

	SetDefaultWeightProc in_InputObjs, in_Mode, in_Extra
End Sub

'------------------------------------------------------------------------------
' NAME:        SetDefaultWeightProc
'
' INPUT:       in_InputObjs....Clips to preset the weight
'              in_Mode.........siWeightEaseIn = Ease-in (0 -> 1)
'                              siWeightEaseOut = Ease-out (1 -> 0)
'                              siWeightLinearEaseIn = Linear ease-in (0 -> 1)
'                              siWeightLinearEaseOut = Linear ease-out (1 -> 0)
'                              siWeightExponentialIn = NOT IMPLEMENTED
'                              siWeightExponentialOut = NOT IMPLEMENTED
'                              siWeightGaussian = Gaussian (0 -> 1 -> 0)
'                              siWeightGaussianReverse = Gaussian (1 -> 0 -> 1)
'                              siWeightSquare = Square (0 -> 1 -> 0)
'                              siWeightSquareReverse = Square (1 -> 0 -> 1)
'                              siWeightOscillate = Oscillate
'			       siWeightConstant = Constant
'                              siWeightFlipX = Flip X
'                              siWeightFlipY = Flip Y
'              in_Extra........Extra value needed by some presets
'
' DESCRIPTION: Get all selected clips and modify their weight curve
'------------------------------------------------------------------------------
sub SetDefaultWeightProc(in_InputObjs, in_Mode, in_Extra)
	Dim	l_Elem, l_Family
	Dim	l_StartOffset, l_End, l_LowerBoundary, l_UpperBoundary

	For Each l_Elem in in_InputObjs
		l_Family = GetValue(l_Elem).families
		if (InStr(l_Family, "Clips") > 0) AND (l_Elem.Type <> "mixeraudioclip") AND (l_Elem.Type <> "camerashotclip") Then
	 
			' Get the Current Clip Info
			l_StartOffset = GetValue(l_Elem & ".actionclip.timectrl.startoffset")
			l_End = GetValue(l_Elem & ".actionclip.timectrl.endtime")

			' Finds the clip upper and lower boundary (including extrapolation)
			l_LowerBoundary = l_StartOffset - FGetClipExtrapLength(l_Elem, 0)
			l_UpperBoundary = l_End + FGetClipExtrapLength(l_Elem, 1)	
	 
			ModifyWeightProc l_Elem, in_Mode, l_LowerBoundary, l_UpperBoundary, in_Extra
		Else
			LogMessage l_Elem & XSIUtils.Translate( " is not a valid clip.", "XSISCRIPTS" )
			
		End If
	Next
End sub


'------------------------------------------------------------------------------
' NAME:        ModifyWeightProc
'
' INPUT:       in_Clip............Clip we want to modify the weight curve
'              in_Mode............siWeightEaseIn = Ease-in (0 -> 1)
'                                 siWeightEaseOut = Ease-out (1 -> 0)
'                                 siWeightLinearEaseIn = Linear ease-in (0 -> 1)
'                                 siWeightLinearEaseOut = Linear ease-out (1 -> 0)
'                                 siWeightExponentialIn = NOT IMPLEMENTED
'                                 siWeightExponentialOut = NOT IMPLEMENTED
'                                 siWeightGaussian = Gaussian (0 -> 1 -> 0)
'                                 siWeightGaussianReverse = Gaussian (1 -> 0 -> 1)
'                                 siWeightSquare = Square (0 -> 1 -> 0)
'                                 siWeightSquareReverse = Square (1 -> 0 -> 1)
'                                 siWeightOscillate = Oscillate
'			          siWeightConstant = Constant
'                                 siWeightFlipX = Flip X
'                                 siWeightFlipY = Flip Y
'              in_LowerBoundary...Lower frame to preset the weight curve
'              in_UpperBoundary...Upper frame to preset the weight curve
'              in_Extra...........Extra value needed by some presets
'
' DESCRIPTION: Presets the weight curve of a clip
'------------------------------------------------------------------------------
sub ModifyWeightProc( in_Clip, in_Mode, in_LowerBoundary, in_UpperBoundary, in_Extra )
	Dim	l_CurrTime, i, l_NbOscillations, l_OscillationStep
	Dim	l_WeightFcvKeysFrames(), l_WeightFcvKeysValues()

	l_CurrTime = GetValue("PlayControl.current")
	
	' Saves the weight curve only if the operation requires it
	if (in_Mode = siWeightFlipX) OR (in_Mode = siWeightFlipY) then
		' Saves the weight curve of the clip into 2 separate arrays
		GetMixWeightArrays in_Clip, NOTHING, l_WeightFcvKeysFrames, l_WeightFcvKeysValues
	end If
	
	RemoveAnimation in_Clip & ".actionclip.weight"
	
	' Applies a transformation on the weight curve
	select case in_Mode
		' Ease-in (0 -> 1)
		case siWeightEaseIn
			SaveKey in_Clip & ".actionclip.weight", in_LowerBoundary, 0
			SaveKey in_Clip & ".actionclip.weight", in_UpperBoundary - 1, 1
			SetCurveType in_Clip & ".actionclip.weight", 3
		' Ease-out (1 -> 0)
		case siWeightEaseOut
			SaveKey in_Clip & ".actionclip.weight", in_LowerBoundary, 1
			SaveKey in_Clip & ".actionclip.weight", in_UpperBoundary - 1, 0
			SetCurveType in_Clip & ".actionclip.weight", 3
		' Linear Ease-in (0 -> 1)
		case siWeightLinearEaseIn
			SaveKey in_Clip & ".actionclip.weight", in_LowerBoundary, 0
			SaveKey in_Clip & ".actionclip.weight", in_UpperBoundary - 1, 1
			SetCurveType in_Clip & ".actionclip.weight", 2
		' Linear Ease-out (1 -> 0)
		case siWeightLinearEaseOut
			SaveKey in_Clip & ".actionclip.weight", in_LowerBoundary, 1
			SaveKey in_Clip & ".actionclip.weight", in_UpperBoundary - 1, 0
			SetCurveType in_Clip & ".actionclip.weight", 2
		' Exponential-in
		Case siWeightExponentialIn
		' Exponential-out
		Case siWeightExponentialOut
		' Gaussian (0 -> 1 -> 0)
		case siWeightGaussian
			SaveKey in_Clip & ".actionclip.weight", in_LowerBoundary, 0
			SaveKey in_Clip & ".actionclip.weight", in_UpperBoundary - 1, 0
			SaveKey in_Clip & ".actionclip.weight", (in_UpperBoundary + in_LowerBoundary) / 2, 1
			SetCurveType in_Clip & ".actionclip.weight", 3
		' Gaussian (1 -> 0 -> 1)
		case siWeightGaussianReverse
			SaveKey in_Clip & ".actionclip.weight", in_LowerBoundary, 1
			SaveKey in_Clip & ".actionclip.weight", in_UpperBoundary - 1, 1
			SaveKey in_Clip & ".actionclip.weight", (in_UpperBoundary + in_LowerBoundary) / 2, 0
			SetCurveType in_Clip & ".actionclip.weight", 3
		' Square (0 -> 1 -> 0)
		case siWeightSquare
			SaveKey in_Clip & ".actionclip.weight", in_LowerBoundary, 0
			SaveKey in_Clip & ".actionclip.weight", in_LowerBoundary + 1, 1
			SaveKey in_Clip & ".actionclip.weight", in_UpperBoundary - 1, 0
			SetCurveType in_Clip & ".actionclip.weight", 1
		' Square (1 -> 0 -> 1)
		case siWeightSquareReverse
			SaveKey in_Clip & ".actionclip.weight", in_LowerBoundary, 1
			SaveKey in_Clip & ".actionclip.weight", in_LowerBoundary + 1, 0
			SaveKey in_Clip & ".actionclip.weight", in_UpperBoundary - 1, 1
			SetCurveType in_Clip & ".actionclip.weight", 1
		' Oscillate
		case siWeightOscillate
			l_NbOscillations = CInt(in_Extra)
			if (l_NbOscillations <= 0) then exit Sub

			' Can't oscillate more than the length of the clip
			If (l_NbOscillations >= in_UpperBoundary - in_LowerBoundary) Then
				l_NbOscillations = in_UpperBoundary - in_LowerBoundary - 1
			End If
			
			l_OscillationStep = (in_UpperBoundary - in_LowerBoundary) / (l_NbOscillations * 2)
			for i = 0 to (in_Extra * 2)
				SaveKey in_Clip & ".actionclip.weight", in_LowerBoundary + (l_OscillationStep * i), 0
				SaveKey in_Clip & ".actionclip.weight", in_LowerBoundary + (l_OscillationStep * (i + 1)), 1
				i = i + 1
			next
		' Constant
		case siWeightConstant
			if (0.0 <= in_Extra) AND (in_Extra <= 1.0) then
				SetValue in_Clip & ".actionclip.weight", in_Extra
			end If
		' Flip X
		Case siWeightFlipX
			for i = 0 to UBound(l_WeightFcvKeysFrames)
				SaveKey in_Clip & ".actionclip.weight", in_UpperBoundary - (CDbl(l_WeightFcvKeysFrames(i)) - in_LowerBoundary), CDbl(l_WeightFcvKeysValues(i))
			Next
		' Flip Y
		Case siWeightFlipY
			for i = 0 to UBound(l_WeightFcvKeysFrames)
				SaveKey in_Clip & ".actionclip.weight", CDbl(l_WeightFcvKeysFrames(i)), 1 - CDbl(l_WeightFcvKeysValues(i))
			next
	End Select
	
	SetValue "PlayControl.current", l_CurrTime
End sub


'------------------------------------------------------------------------------
' NAME:        CrossfadeClipWeightsProc
'
' INPUT:       in_Clip1............First clip to crossfade
'              in_Clip2............Second clip to crossfade
'
' DESCRIPTION: Crossfades the two clips by preseting their weight curve
'------------------------------------------------------------------------------
Sub CrossfadeClipWeightsProc(in_Clip1, in_Clip2)
	Dim l_Family, l_Temp
	Dim l_FirstClipLowerBoundary, l_FirstClipUpperBoundary, l_SecondClipLowerBoundary, l_SecondClipUpperBoundary

	l_Family = GetValue(in_Clip1).families
	If (InStr(l_Family, "Clips") <= 0) OR (GetValue(in_Clip1).Type = "mixeraudioclip") OR (GetValue(in_Clip1).Type = "camerashotclip") Then
		LogMessage in_Clip1 & XSIUtils.Translate( " is not a valid clip.", "XSISCRIPTS" )
		Err.Raise siErrCancelled
		exit sub
	End if

	l_Family = GetValue(in_Clip2).families
	If (InStr(l_Family, "Clips") <= 0) OR (GetValue(in_Clip2).Type = "mixeraudioclip") OR (GetValue(in_Clip2).Type = "camerashotclip") Then
		LogMessage in_Clip2 & XSIUtils.Translate( " is not a valid clip.", "XSISCRIPTS" )
		Err.Raise siErrCancelled
		exit sub
	End if
		
	l_FirstClipLowerBoundary = GetValue(in_Clip1 & ".actionclip.timectrl.resin")
	l_FirstClipUpperBoundary = GetValue(in_Clip1 & ".actionclip.timectrl.resout")
	l_SecondClipLowerBoundary = GetValue(in_Clip2 & ".actionclip.timectrl.resin")
	l_SecondClipUpperBoundary = GetValue(in_Clip2 & ".actionclip.timectrl.resout")
	
	' Swap the values
	if (l_FirstClipLowerBoundary > l_SecondClipLowerBoundary) then
		l_Temp = l_FirstClipLowerBoundary
		l_FirstClipLowerBoundary = l_SecondClipLowerBoundary 
		l_SecondClipLowerBoundary  = l_Temp
		
		l_Temp = l_FirstClipUpperBoundary
		l_FirstClipUpperBoundary = l_SecondClipUpperBoundary
		l_SecondClipUpperBoundary = l_Temp
		
		l_Temp = in_Clip1
		in_Clip1 = in_Clip2
		in_Clip2 = l_Temp
	end if
	
	' The two clips intersect one another
	if (l_FirstClipLowerBoundary < l_SecondClipLowerBoundary)_
	   AND (l_SecondClipLowerBoundary < l_FirstClipUpperBoundary)_
	   AND (l_FirstClipUpperBoundary < l_SecondClipUpperBoundary) then
		RemoveAnimation in_Clip2 & ".actionclip.weight"
		SaveKey in_Clip2 & ".actionclip.weight", l_SecondClipLowerBoundary, 0.0
		SaveKey in_Clip2 & ".actionclip.weight", l_FirstClipUpperBoundary - 1, 1.0

		RemoveAnimation in_Clip1 & ".actionclip.weight"
		SaveKey in_Clip1 & ".actionclip.weight", l_SecondClipLowerBoundary, 1.0
		SaveKey in_Clip1 & ".actionclip.weight", l_FirstClipUpperBoundary - 1, 0.0

	' One clip "nests" the other one   
	elseif (l_FirstClipLowerBoundary < l_SecondClipLowerBoundary)_
	        AND (l_SecondClipLowerBoundary < l_SecondClipUpperBoundary)_
	        AND (l_SecondClipUpperBoundary < l_FirstClipUpperBoundary) then

		' Apply Gaussian curve to the desired area
		ModifyWeightProc in_Clip2, siWeightGaussian, l_SecondClipLowerBoundary, l_SecondClipUpperBoundary, 1.0
		ModifyWeightProc in_Clip1, siWeightGaussianReverse, l_SecondClipLowerBoundary, l_SecondClipUpperBoundary, 1.0
	End if
End Sub

'------------------------------------------------------------------------------
' NAME:        CutClipFunc
'
' INPUT:	   in_Clip....Clip on which we want to perform a split
'                  in_Mode....siCut = split clip
'                             siTrimAfter = trim clip (keep head)
'                             siTrimBefore = trim clip (keep tail)
'                  in_Frame...Frame where to cut
'
' OUTPUT:	   The created clip or the original one if it was a trim
'
' DESCRIPTION: Splits the clip at the current frame
'------------------------------------------------------------------------------
Function CutClipFunc( in_Clip, in_Mode, in_Frame )
	Dim	l_CurrTime, l_PlayControlCurrTime
	Dim	l_Track, l_Compound, l_Model, l_TrackOwner
	Dim	l_ClipStartOffset, l_ClipIn, l_ClipOut, l_ClipScale, l_ClipEnd, l_NewClipOut
	Dim	l_ClipSource, l_ClipLength, l_OldClipStartOffset, l_OldClipEnd
	Dim	l_SourceStart, l_SourceEnd, l_NewTrack, l_NewClip, l_OldClip
	Dim	l_ClipExtrapBef, l_ClipExtrapAft, l_nbCyclesBef, l_nbCyclesAft, l_ExtrapValue
	Dim	l_ClipLowerBoundary, l_ClipUpperBoundary
	Dim	l_SourceMoveValue, l_Temp, l_AdditionalKeys
	Dim	l_WeightFcvKeyFrames, l_WeightFcvKeyValues, l_oClip, l_oTC
	Dim l_csTimeControlPath

	CutClipFunc = in_Clip
	
	If ( GetValue(in_Clip).Type = "mixeraudioclip" ) OR ( GetValue(in_Clip).Type = "camerashotclip" ) Then
		l_csTimeControlPath = ".timectrl"
	Else
		l_csTimeControlPath = ".actionclip.timectrl"
	End if
	
	' Validates the operation type
	if (in_Mode <> siCut) AND (in_Mode <> siTrimAfter) AND (in_Mode <> siTrimBefore) then
		LogMessage XSIUtils.Translate( "Invalid cut mode", "XSISCRIPTS" )
		Err.Raise siErrCancelled
		exit Function
	end if

	' Frame where the cut occurs
	l_CurrTime = in_Frame
	l_PlayControlCurrTime = GetValue("PlayControl.Current")
	
	' Get the TrackName
	Set l_Track = in_Clip.Parent
'[RLB]	l_Track = Left( l_Track, Instr( l_Track, ".ClipList") -1 )
	
	' If clip is inside a compound, ajust l_CurrTime to be in local time
	if FIsInCompoundCLip(in_Clip) then
		' Gets the CompoundOwner (The Great-Grand-Parent)
		l_Compound = l_Track.Parent

		' Converts the global time to local time
		l_CurrTime = Int(GetValue(l_Compound  & l_csTimeControlPath & ".clipin") +_
						(l_CurrTime - GetValue(l_Compound & l_csTimeControlPath &".startoffset")) *_
						GetValue(l_Compound  & l_csTimeControlPath &".scale") + 0.5)
	end if
	

	' Get the Current Clip Info
	l_ClipStartOffset = FGetClipStart( in_Clip & l_csTimeControlPath )
	l_ClipIn = FGetClipIn( in_Clip & l_csTimeControlPath )
	l_ClipOut = FGetClipout( in_Clip & l_csTimeControlPath )
	l_ClipScale = GetValue(in_Clip & l_csTimeControlPath & ".scale")
	l_ClipEnd = FGetClipEnd( in_Clip & l_csTimeControlPath )
	if GetValue(in_Clip).Type = "camerashotclip" Then
		l_ClipExtrapBef = 0
		l_ClipExtrapAft = 0
		l_nbCyclesAft = 0
		l_nbCyclesBef = 0
	end if
	

	If GetValue(in_Clip).Type = "mixerlayerclip" Then
		LogMessage XSIUtils.Translate( "Cannot cut layer clips", "XSISCRIPTS" )
		Err.Raise siErrCancelled
		exit Function
	ElseIf GetValue(in_Clip).Type = "mixeraudioclip" Then
		l_ClipSource		= GetValue(in_Clip & ".source")
	ElseIf GetValue(in_Clip).Type = "camerashotclip" Then
		set l_ClipSource	= NOTHING
	else
		l_ClipSource		= GetValue(in_Clip & ".actionclip.sourceaction")
	end if

	l_ClipLength		= l_ClipEnd - l_ClipStartOffset

	'Deactivate the auto synch on parent start
	if Not GetValue(in_Clip).Type = "camerashotclip" Then
		set l_oClip = Dictionary.GetObject(in_clip)
		set l_oTC = l_oClip.TimeControl
		l_oTC.cliptoparentstart = false
		l_oTC.cliptoparentend = false


		SetValue in_Clip & l_csTimeControlPath & ".startoffset", l_ClipStartOffset 
		SetValue in_Clip & l_csTimeControlPath & ".clipin", l_ClipIn 
		SetValue in_Clip & l_csTimeControlPath & ".clipout", l_ClipOut 
	
		' Saves the clip's start/end offset
		l_OldClipStartOffset	= l_ClipStartOffset
		l_OldClipEnd			= l_ClipEnd
   
		' Gets the exrapolation type
		l_ClipExtrapBef = GetValue(in_Clip & l_csTimeControlPath & ".extrapbef_type")
		l_ClipExtrapAft = GetValue(in_Clip & l_csTimeControlPath & ".extrapaft_type")
	
		' Only extrapolation of the cycle type are supported
		if ((l_ClipExtrapBef <> 2) AND (l_ClipExtrapBef <> 0))_
		   OR ((l_ClipExtrapAft <> 2) AND (l_ClipExtrapAft <> 0)) then
			LogMessage XSIUtils.Translate( "Only extrapolation cycles are supported", "XSISCRIPTS" )
			Err.Raise siErrCancelled
			exit Function
		end if

		' Get the number of cycles before and after the selected clip
		if (GetValue(in_Clip & l_csTimeControlPath & ".extrapbef_type") = 2) then
			l_nbCyclesBef	= GetValue(in_Clip & l_csTimeControlPath & ".extrapbef_nbcycles")

			if l_nbCyclesBef = 0 then 
				SetValue in_Clip & l_csTimeControlPath & ".extrapbef_type", 0 
				l_ClipExtrapBef = 0
			end if

		end if

		if (GetValue(in_Clip & l_csTimeControlPath & ".extrapaft_type") = 2) then
			l_nbCyclesAft = GetValue(in_Clip & l_csTimeControlPath & ".extrapaft_nbcycles")

			if l_nbCyclesAft = 0 then 
				SetValue in_Clip & l_csTimeControlPath & ".extrapaft_type", 0 
				l_ClipExtrapAft = 0
			end if
		end if
	end if

	' Gets the clip lower and upper boundary (including extrapolation)
	l_ClipLowerBoundary	= l_ClipStartOffset - (l_nbCyclesBef * l_ClipLength)
	l_ClipUpperBoundary	= l_ClipEnd + (l_nbCyclesAft * l_ClipLength)
	
	'Check if the Current Time is within the clip boundaries (with extrapolation).
	Dim	l_OneMinusEps
	l_OneMinusEps = 1 - 1.0e-9
	if (l_CurrTime < l_ClipLowerBoundary + l_OneMinusEps ) OR  (l_CurrTime > l_ClipUpperBoundary - l_OneMinusEps ) Then
		LogMessage XSIUtils.Translate( "Invalid split point. (The current frame is not inside the Clip)", "XSISCRIPTS" )
		exit Function
	End If
	
	' Fractional extrapolation is not supported
	if (l_nbCyclesBef <> Int(l_nbCyclesBef)) OR (l_nbCyclesAft <> Int(l_nbCyclesAft)) then
		LogMessage XSIUtils.Translate( "Fractional cycles not supported", "XSISCRIPTS" )
		Err.Raise siErrCancelled
		exit Function
	end If
	
	
	Set l_WeightFcvKeyFrames = NOTHING
	Set l_WeightFcvKeyValues = NOTHING
	
	' In certain cases, the weight curve must me saved because only copy/pasting the weight curve
	' wouldn't be enough
	if Not GetValue(in_Clip).Type = "camerashotclip" Then
		if ((in_Mode = siCut) AND ((l_ClipLowerBoundary <> l_ClipStartOffset) OR (l_ClipUpperBoundary <> l_ClipEnd)))_
			OR ((in_Mode = siTrimAfter) AND (l_ClipLowerBoundary <> l_ClipStartOffset))_
			OR ((in_Mode = siTrimBefore) AND (l_ClipUpperBoundary <> l_ClipEnd)) then
	
			l_AdditionalKeys = Array(l_CurrTime - 1, l_CurrTime, l_CurrTime + 1, l_ClipLowerBoundary)
			GetMixWeightArrays in_Clip, l_AdditionalKeys, l_WeightFcvKeyFrames, l_WeightFcvKeyValues

		end if
	end if

	' If the cut is in the extrapolation part of the clip, move the clip
	' source "section" in the "split frame" range
	if (l_CurrTime < l_ClipStartOffset) OR (l_CurrTime > l_ClipEnd) then

		' The cut is in the "before" extrapolation part
		if (l_CurrTime < l_ClipStartOffset) then
			l_SourceMoveValue = (l_ClipStartOffset - l_CurrTime) / l_ClipLength
			if l_SourceMoveValue <> Int(l_SourceMoveValue + 0.5) then
				l_SourceMoveValue = Int(l_SourceMoveValue + 1.0)
			end if
		
			l_ClipStartOffset = l_ClipStartOffset - (l_SourceMoveValue * l_ClipLength)
			l_ClipEnd = l_ClipStartOffset + l_ClipLength
			l_Temp = l_nbCyclesBef - l_SourceMoveValue
			l_nbCyclesAft = (l_nbCyclesBef - l_Temp) + l_nbCyclesAft
			l_nbCyclesBef = l_Temp

		' The cut is in the "after" extrapolation part
		else
			l_SourceMoveValue = Int((l_CurrTime - l_ClipStartOffset) / l_ClipLength)
		
			l_ClipStartOffset = l_ClipStartOffset + (l_SourceMoveValue * l_ClipLength)
			l_ClipEnd = l_ClipStartOffset + l_ClipLength
			l_Temp = l_nbCyclesAft - l_SourceMoveValue
			l_nbCyclesBef = (l_nbCyclesAft - l_Temp) + l_nbCyclesBef
			l_nbCyclesAft = l_Temp
		end if			

		' Moves the clip to it's new location and adjust extrapolation
		SetValue in_Clip & l_csTimeControlPath & ".startoffset", l_ClipStartOffset
		SetValue in_Clip & l_csTimeControlPath & ".endtime", l_ClipEnd 
		
		if (l_nbCyclesBef <> 0) then l_ClipExtrapBef = 2
		if (l_nbCyclesAft <> 0) then l_ClipExtrapAft = 2
		ExtrapolateClip in_Clip, 0, l_ClipExtrapBef, l_nbCyclesBef
		ExtrapolateClip in_Clip, 1, l_ClipExtrapAft, l_nbCyclesAft
	end if
	
	' New ClipOut value
	if (l_CurrTime <= l_ClipEnd) then
		l_NewClipOut = (( l_CurrTime - l_ClipStartOffset ) *  l_ClipScale) + l_ClipIn - 1
	end if
	
	' Handles split specific operations
	if (in_Mode = siCut) then
		' If the clip isn't inside a compound
		if NOT FIsInCompoundClip(in_Clip) then
			' Get the ModelName (The Great-Great-Great-Grand-Parent)
			' and the TrackOwner (The Great-Great-Grand-Parent)			
			l_Model = l_Track.Model				
			l_TrackOwner = l_Track.Parent
			
		' If the clip is inside a compound
		else
			' Get the ModelName (The Great-Great-Great-Great-Great-Great-Grand-Parent)
			' and the TrackOwner (The Grand-Parent)
			l_TrackOwner  = EnumElements( l_Track, FALSE)
			l_Model = l_Track.Model			
		end if
		
		'We need to disable the parent time clipping for
		'items inside a compound if we are cutting the compound
		'we will be reactivating it at the end when the cutting is done.
		dim l_bClipWithParentStart, l_bClipWithParentEnd
		if typename(in_clip) = "ClipContainer" then
			set l_clipInsideCompounds = in_clip.clips
			ReDim l_bClipWithParentStart(l_clipInsideCompounds.count-1)
			ReDim l_bClipWithParentEnd(l_clipInsideCompounds.count-1)
			
			'Get the value of the clip to parent
			for l_i = 0 to l_clipInsideCompounds.count - 1 			
				set l_currTC = l_clipInsideCompounds(l_i).TimeControl
				l_bClipWithParentStart(l_i) = l_currTC.cliptoparentstart.value
				l_bClipWithParentEnd(l_i) = l_currTC.cliptoparentend.value
				l_currTC.cliptoparentstart = false
				l_currTC.cliptoparentend = false
			next
		end if

		'Shorten the source to avoid rippling
		if TypeName(l_ClipSource) <> "Nothing" Then
			l_SourceStart = GetValue( l_ClipSource & ".FrameStart" )
			l_SourceEnd = GetValue( l_ClipSource & ".FrameEnd" )
			SetValue l_ClipSource & ".FrameStart", 0
			SetValue l_ClipSource & ".FrameEnd", 1
		end if
		' Create a new track so the movement of the clips won't affect
		' the other clips on the same track		
		if (GetValue(in_Clip).Type = "mixeranimclip") OR (in_Clip.Type = "AnimActionCompoundClip") then
			Set l_NewTrack = AddTrack(l_Model, l_TrackOwner, 0)
		elseif (GetValue(in_Clip).Type = "mixershapeclip") OR  (in_Clip.Type = "ShapeActionCompoundClip") then
			Set l_NewTrack = AddTrack(l_Model, l_TrackOwner, 1)
		elseif (GetValue(in_Clip).Type = "camerashotclip") then
			Set l_NewTrack = AddTrack(l_Model, l_TrackOwner, 8)
		end if


		' Instance a New Clip on the new track. We use CopyClipToTrack because it copies everything
		' in the clip (value map templ, clip effect, weight curve, etc, etc)
		Set l_NewClip = CopyClipToTrack(l_Model, in_Clip, , l_NewTrack, l_ClipStartOffset)
		
		'Restore the source
		if TypeName(l_ClipSource) <> "Nothing" Then
			SetValue l_ClipSource & ".FrameStart", l_SourceStart
			SetValue l_ClipSource & ".FrameEnd", l_SourceEnd
		end if
		' Copies all the original clip values on the new clip
		'General
		if GetValue(in_Clip).Type = "camerashotclip" Then
			SetValue l_NewClip & l_csTimeControlPath & ".sequencein", GetValue(in_Clip & l_csTimeControlPath & ".sequencein")
			SetValue l_NewClip & l_csTimeControlPath & ".sequenceout", GetValue(in_Clip & l_csTimeControlPath & ".sequenceout")
			SetValue l_NewClip & l_csTimeControlPath & ".scenein", GetValue(in_Clip & l_csTimeControlPath & ".scenein")
			SetValue l_NewClip & l_csTimeControlPath & ".sceneout", GetValue(in_Clip & l_csTimeControlPath & ".sceneout")
		else
			SetValue l_NewClip & l_csTimeControlPath & ".startoffset", GetValue(in_Clip & l_csTimeControlPath & ".startoffset")
			SetValue l_NewClip & l_csTimeControlPath & ".endtime", GetValue(in_Clip & l_csTimeControlPath & ".endtime")
			SetValue l_NewClip & l_csTimeControlPath & ".clipin", GetValue(in_Clip & l_csTimeControlPath & ".clipin")
			SetValue l_NewClip & l_csTimeControlPath & ".clipout", GetValue(in_Clip & l_csTimeControlPath & ".clipout")
		end if
		SetValue l_NewClip & l_csTimeControlPath & ".scale", GetValue(in_Clip & l_csTimeControlPath & ".scale")

		' Actionclip
		If (Not GetValue(in_Clip).Type = "mixeraudioclip") AND ( Not GetValue(in_Clip).Type = "camerashotclip" ) Then
			SetValue l_NewClip & ".actionclip.fillaction", GetValue(in_Clip & ".actionclip.fillaction")
			SetValue l_NewClip & ".actionclip.fillpriority", GetValue(in_Clip & ".actionclip.fillpriority")
			SetValue l_NewClip & ".actionclip.active", GetValue(in_Clip & ".actionclip.active")
		End If

		' Extrapolation after (extrapolation before will be removed, so no need to copy)
		if Not GetValue(in_Clip).Type = "camerashotclip" Then
			SetValue l_NewClip & l_csTimeControlPath & ".extrapaft_type", GetValue(in_Clip & l_csTimeControlPath & ".extrapaft_type")
			SetValue l_NewClip & l_csTimeControlPath & ".extrapaft_timehold", GetValue(in_Clip & l_csTimeControlPath & ".extrapaft_timehold")
			SetValue l_NewClip & l_csTimeControlPath & ".extrapaft_nbcycles", GetValue(in_Clip & l_csTimeControlPath & ".extrapaft_nbcycles")
			SetValue l_NewClip & l_csTimeControlPath & ".extrapaft_nbbounces", GetValue(in_Clip & l_csTimeControlPath & ".extrapaft_nbbounces")

				'We need to re-enable any clip to parent-time relations	
			if typename(in_clip) = "ClipContainer" then
				set l_clipInsideNewCompounds = l_NewClip.clips
				set l_clipInsideCompounds = in_clip.clips		
			
				'Set the value of each clip
				for l_i = 0 to l_clipInsideCompounds.count - 1 			
					set l_currTC = l_clipInsideCompounds(l_i).TimeControl
					set l_currNewTC = l_clipInsideNewCompounds(l_i).TimeControl
					l_currTC.cliptoparentstart.value = l_bClipWithParentStart(l_i)
					l_currTC.cliptoparentend.value = l_bClipWithParentEnd(l_i)
					l_currNewTC.cliptoparentstart.value = l_bClipWithParentStart(l_i)
					l_currNewTC.cliptoparentend.value = l_bClipWithParentEnd(l_i)
				next
			
			end if
		end if
	end if

	' Remove unnecessary extrapolation
	if (l_CurrTime <= l_ClipEnd) AND (in_Mode = siTrimAfter) then
		ExtrapolateClip in_Clip, 1, 0, 0
	elseif (l_CurrTime >= l_ClipStartOffset) AND (in_Mode = siTrimBefore) then
		ExtrapolateClip in_Clip, 0, 0, 0
	end if
	
	' Removes extrapolation after the original clip and before the new clip (if we split)
	if (in_Mode = siCut) then
		ExtrapolateClip in_Clip, 1, 0, 0
		ExtrapolateClip l_NewClip, 0, 0, 0
	end if
	
	' Trim FROM cursor
	if (in_Mode = siTrimBefore) OR (in_Mode = siCut) then
	
		l_OldClip = in_Clip
		if (in_Mode = siCut) then in_Clip = l_NewClip
		
		' NO extrapolation after the clip
		if GetValue(in_Clip).Type = "camerashotclip" Then
			SetValue in_Clip & l_csTimeControlPath & ".sequencein", l_CurrTime
			SetValue in_Clip & l_csTimeControlPath & ".scenein", l_NewClipOut + 1
			SetValue in_Clip & l_csTimeControlPath & ".sceneout", l_ClipOut	
			SetValue in_Clip & l_csTimeControlPath & ".scale", l_ClipScale	
		else
			if (GetValue(in_Clip & l_csTimeControlPath & ".extrapaft_type") = 0) OR (l_nbCyclesAft = 0) then
		   
				SetValue in_Clip & l_csTimeControlPath & ".startoffset", l_CurrTime
				SetValue in_Clip & l_csTimeControlPath & ".clipin", l_NewClipOut + 1
				SetValue in_Clip & l_csTimeControlPath & ".clipout", l_ClipOut	
			' CYCLE(S) after the clip
			elseif GetValue(in_Clip & l_csTimeControlPath & ".extrapaft_type") = 2 then
				SetValue in_Clip & l_csTimeControlPath & ".startoffset", l_ClipEnd + ((l_nbCyclesAft - 1) * l_ClipLength)

				' Remove any extrapolation after the clip
				ExtrapolateClip in_Clip, 1, 0, 0
			
				' Adds extrapolation before the clip
				l_ExtrapValue = (l_ClipEnd - l_CurrTime) / l_ClipLength + (l_nbCyclesAft- 1)
				ExtrapolateClip in_Clip, 0, 2, l_ExtrapValue
			end if
		end if
		
		in_Clip = l_OldClip
	end if
	
	' Trim TO cursor
	if (in_Mode = siTrimAfter) OR (in_Mode = siCut) then

		' NO extrapolation before the clip
		if GetValue(in_Clip).Type = "camerashotclip" Then
			SetValue in_Clip & l_csTimeControlPath & ".sceneout", l_NewClipOut + 1
			SetValue in_Clip & l_csTimeControlPath & ".scale", l_ClipScale
		else
			if (GetValue(in_Clip & l_csTimeControlPath & ".extrapbef_type") = 0) OR (l_nbCyclesBef = 0) then
				SetValue in_Clip & l_csTimeControlPath & ".clipout", l_NewClipOut
			
			' CYCLE(S) extrapolation before the clip
			elseif GetValue(in_Clip & l_csTimeControlPath & ".extrapbef_type") = 2 then
				SetValue in_Clip & l_csTimeControlPath & ".startoffset", l_ClipStartOffset - (l_nbCyclesBef * l_ClipLength)

				' Remove any extrapolation before the clip
				ExtrapolateClip in_Clip, 0, 0, 0
			
				' Adds extrapolation after the clip
				l_ExtrapValue = (1- (l_ClipEnd - l_CurrTime) / l_ClipLength) + (l_nbCyclesBef - 1)
				ExtrapolateClip in_Clip, 1, 2, l_ExtrapValue
			end if
		end if
	end if
	
	' Split specific operation
	if (in_Mode = siCut) then
	
		' Moves the new clip on the track where it belongs
		l_nbCyclesBef = 0
		if Not GetValue(in_Clip).Type = "camerashotclip" Then
			if GetValue(l_NewClip & l_csTimeControlPath & ".extrapbef_type") = 2 then
				l_nbCyclesBef = GetValue(l_NewClip & l_csTimeControlPath & ".extrapbef_nbcycles")
			end if
		end if
		MoveClipToTrack l_Model, l_NewClip, l_TrackOwner, l_Track, l_CurrTime + (l_nbCyclesBef * l_ClipLength)
		DeleteObj l_NewTrack
		
		CutClipFunc = l_NewClip
	end if
	
	if (TypeName(l_WeightFcvKeyFrames) <> "Nothing" AND TypeName(l_WeightFcvKeyValues) <> "Nothing" AND Not ( (GetValue(in_Clip).Type = "mixeraudioclip" ) Or ( GetValue(in_Clip).Type = "camerashotclip" ))) then
		if (in_Mode = siCut) then
	
			if (l_CurrTime < l_OldClipEnd) OR (l_ClipLowerBoundary <> l_OldClipStartOffset) then
				RemoveAnimation in_Clip & ".actionclip.weight"
				SetMixWeightKeys in_Clip, l_WeightFcvKeyFrames, l_WeightFcvKeyValues, l_ClipLowerBoundary - 1, l_CurrTime
			end if
			
			if (l_CurrTime > l_OldClipStartOffset) OR (l_ClipUpperBoundary <> l_OldClipEnd) then
				RemoveAnimation l_NewClip & ".actionclip.weight"
				SetMixWeightKeys l_NewClip, l_WeightFcvKeyFrames, l_WeightFcvKeyValues, l_CurrTime - 1, l_ClipUpperBoundary + 1
			end if
		else
			RemoveAnimation in_Clip & ".actionclip.weight"
			SetMixWeightKeys in_Clip, l_WeightFcvKeyFrames, l_WeightFcvKeyValues, l_ClipLowerBoundary - 1, l_ClipUpperBoundary + 1
		end if
	end if
	
	SetValue "PlayControl.current", l_PlayControlCurrTime
end Function


'------------------------------------------------------------------------------
' NAME:        CutClipLoopProc
'
' INPUT:	   in_List....List of clips to cut
'                  in_Mode....siCut = split clip
'                             siTrimAfter = trim clip (keep head)
'                             siTrimBefore = trim clip (keep tail)
'                  in_Frame...Frame where to cut
'
' DESCRIPTION: Splits the list of clip at the specified frame
'------------------------------------------------------------------------------
Sub CutClipLoopProc( in_List, in_Mode, in_Frame )
	Dim l_Clip

	For each l_Clip in in_List

		' Type has to be a mixer shape or anim clip, or a compound shape or anim clip in
		' order to trim
		'
		if l_Clip.Type = "mixeranimclip" OR l_Clip.Type = "AnimActionCompoundClip"_
				OR l_Clip.Type = "mixershapeclip" OR  l_Clip.Type = "ShapeActionCompoundClip" then

			CutClipFunc l_Clip, in_Mode, in_Frame
		end if

	Next
End Sub

'------------------------------------------------------------------------------
' NAME:        EditClipProc
'
' INPUT:	   in_Clips....Clips we want to edit
'                  in_Sub....siClipNudge = Nudge clip by x frames
'                            siClipSlip = Slip clip by x frames
'                            siClipTrim = Trim clip by x frames
'                            siClipScale = Scale clip by x frames
'                            siClipStartAt = Start clip at frame x
'                            siClipEndAt = End clip at frame x
'                            siClipScaleTo = Scale clip to frame x
'                  in_Frame...Frame number
'
' DESCRIPTION: Edit clips in a number of different ways
'------------------------------------------------------------------------------
Sub EditClipProc(in_Clips, in_Sub, in_Frame)
	Dim l_Clip, l_TimeCtrl, l_Track, l_Compound
	Dim l_Start, l_End, l_ClipLowerBoundary, l_ClipUpperBoundary
	Dim l_ClipIn, l_ClipOut, l_Scale, l_Len
	Dim l_CurrTime, l_Operation, l_Family
	Dim l_NextClipTimeCtrl, l_PrevClipTimeCtrl
	
	l_Operation = in_Sub
	l_CurrTime = in_Frame
	
	If TypeName(in_Clips) = "Nothing" Then
		LogMessage XSIUtils.Translate( IDS_ERROR_NO_CLIP_SPECIFIED, "XSISCRIPTS")
		Err.Raise siErrCancelled
		Exit Sub
	End If
	
	' first validate that all clips are valis
	Dim l_bValidOp : l_bValidOp =True
	for each l_Clip in in_Clips
		if l_Clip.Type = "mixeraudioclip" Then
			If in_Sub = siClipScaleTo Then
				LogMessage XSIUtils.Translate( IDS_ERROR_SCALETO_AUDIOCLIP, "XSISCRIPTS", l_Clip.FullName )
				l_bValidOp = false
			End If
		End if
	next
	if Not l_bValidOp Then
		Err.Raise siErrCancelled
		Exit Sub
	End if

	'Need to add a part to convert in_Clips to a collection
	'if the sub is called directly.
	for each l_Clip in in_Clips
		l_Family = GetValue(l_Clip).families
		if (InStr(l_Family, "Clips") > 0) Then

			l_TimeCtrl = l_Clip.TimeControl
		   
			l_Start = FGetClipStart( l_TimeCtrl )
			l_End = FGetClipEnd( l_TimeCtrl )
			l_ClipIn = FGetClipIn( l_TimeCtrl )
			l_ClipOut = FGetClipOut( l_TimeCtrl )
			l_Scale = GetValue(l_TimeCtrl & ".scale")
			l_ClipLowerBoundary = l_Start - FGetClipExtrapLength(l_Clip, 0)
			l_ClipUpperBoundary = l_End + FGetClipExtrapLength(l_Clip, 1)
			
			' Get the TrackName
			set l_Track = EnumElements( l_Clip, FALSE)
			l_Track = Left( l_Track, Instr( l_Track, ".ClipList") -1 )

			' If clip is inside a compound, adjust l_CurrTime to be in local time
			if FIsInCompoundClip(l_Clip) then
				' Gets the CompoundOwner (The Great-Grand-Parent)
				l_Compound = EnumElements( l_Track, FALSE)
				l_Compound = EnumElements( l_Compound, FALSE)

				' Converts the global time to local time
				l_CurrTime = Int(GetValue(l_Compound & ".actionclip.timectrl.clipin") +_
						  (l_CurrTime - GetValue(l_Compound & ".actionclip.timectrl.startoffset")) *_
						  GetValue(l_Compound & ".actionclip.timectrl.scale") + 0.5)
			end if
			
			' Calculate the correct amount of frames to move for certain operations (kind of a wrapper)
			select Case in_Sub
				case siClipStartAt
					l_Operation = siClipNudge	' Now perform a NUDGE
					in_Frame = l_CurrTime - l_ClipLowerBoundary

				case siClipEndAt
					l_Operation = siClipNudge	' Now perform a NUDGE
					in_Frame = l_CurrTime - l_ClipUpperBoundary

				case siClipScaleTo
					l_Operation = siClipScale	' Now perform a SCALE
					in_Frame = l_CurrTime - l_ClipUpperBoundary
					if ( l_CurrTime < l_Start ) then in_Frame=0

			end select

			if l_Operation = siClipNudge or l_Operation = siClipTrim or l_Operation = siClipScale or l_Operation = siClipTrimStart then
				' See if we have enough space to realize this operation
				' It may not if there is another clip beside this one
				
				if in_Frame > 0 and l_Operation <> siClipTrimStart then
					' Find the next clip's TimeControl, if existing 
					l_NextClipTimeCtrl = FindNextClipTimeCtrl( l_Clip )
					
					' Now validate if we will be overlapping the next clip with this operation
					if l_NextClipTimeCtrl <> "" then
						dim l_NextStart
						l_NextStart = FGetClipStart( l_NextClipTimeCtrl )
						if round( l_End + in_Frame ) > l_NextStart then
							' Overlapping! Update the delta value.
							in_Frame = round( l_NextStart - l_End )
							if in_Frame <> 0 then
								LogMessage XSIUtils.Translate( IDS_WARN_CLIP_OVERLAP_ADJUST, "XSISCRIPTS", l_Clip.FullName )
							else
								LogMessage XSIUtils.Translate( IDS_WARN_CLIP_OVERLAP_DENY, "XSISCRIPTS", l_Clip.FullName )
							end if
						end if
					end if
					
				' This case applies only for the siClipNudge operation
				elseif in_Frame < 0 and ( l_Operation = siClipNudge or l_Operation = siClipTrimStart ) then
					' Find the previous clip's TimeControl, if existing 
					l_PrevClipTimeCtrl = FindPreviousClipTimeCtrl( l_Clip )
					
					' Validate if we will be overlapping the previous clip with this operation
					if l_PrevClipTimeCtrl <> "" then
						dim l_PrevEnd
						l_PrevEnd = FGetClipEnd( l_PrevClipTimeCtrl )
						if round( l_Start + in_Frame ) < l_PrevEnd then
							' Overlapping! Update the delta value.
							in_Frame = round( l_PrevEnd - l_Start )
							if in_Frame <> 0 then
								LogMessage XSIUtils.Translate( IDS_WARN_CLIP_OVERLAP_ADJUST, "XSISCRIPTS", l_Clip.FullName )
							else
								LogMessage XSIUtils.Translate( IDS_WARN_CLIP_OVERLAP_DENY, "XSISCRIPTS", l_Clip.FullName )
							end if
						end if
					end if
				end if
			end if
			
			select Case l_Operation
				case siClipNudge
					l_Start = round(l_Start + in_Frame)
					
					'The end frame of shot clip is not computed value.
					'Need to update start and end when moving clip.
					if l_Clip.Type = "camerashotclip" then
						l_End = round(l_End + in_Frame)
						if in_Frame > 0 then
							'Change the end frame before start, to avoid start is larger than end.
							FSetClipEnd l_TimeCtrl, l_End
							FSetClipStart l_TimeCtrl, l_Start 
						Else
							'Change the start frame before end to avoid end is smaller than start.
							FSetClipStart l_TimeCtrl, l_Start
							FSetClipEnd l_TimeCtrl, l_End
						end if
					else
						'Change the start offset.
						FSetClipStart l_TimeCtrl, l_Start 
					end if
				case siClipSlip
					'Change the in and out point
					l_ClipIn = l_ClipIn + in_Frame
					l_ClipOut = l_ClipOut + in_Frame
					FSetClipIn l_TimeCtrl, l_ClipIn
					FSetClipOut l_TimeCtrl, l_ClipOut
				case siClipTrim
					'Change the out point including the scale factor
					l_ClipOut = l_ClipOut + (in_Frame * l_Scale)
					FSetClipOut l_TimeCtrl, l_ClipOut
					if l_Clip.Type = "camerashotclip" then
						SetValue l_TimeCtrl & ".scale", l_Scale	
					end if
				case siClipTrimStart
					'Change the start offset.
					l_Start = round(l_Start + in_Frame)
					FSetClipStart l_TimeCtrl, l_Start
					'Change the out point including the scale factor
					l_ClipIn = l_ClipIn + in_Frame * l_Scale
					FSetClipIn l_TimeCtrl, l_ClipIn
				case siClipScale
					'Change the scale so the out point moves.

					Dim l_ClipSpan
					l_ClipSpan = l_ClipOut - l_ClipIn

					if Not l_Clip.Type = "camerashotclip" then
						Dim l_ExtrapolationType
						Dim	l_PreExtrapClipSpan
						l_PreExtrapClipSpan = l_ClipOut-l_ClipIn+1 
						' Todo - Not Sure what to do with extrapolation before behavior
						l_ExtrapolationType =  GetValue(l_TimeCtrl & ".extrapbef_type")
						l_ClipSpan = l_ClipSpan + 1
						select case l_ExtrapolationType
							case 1	  
								' Hold do nothing
							case 2	  
								l_ClipSpan = l_ClipSpan + (GetValue(l_TimeCtrl & ".extrapbef_nbcycles") * l_PreExtrapClipSpan)
							case 3	  
								l_ClipSpan = l_ClipSpan + (GetValue(l_TimeCtrl & ".extrapbef_nbbounces") * l_PreExtrapClipSpan)
						end select

						l_ExtrapolationType = GetValue(l_TimeCtrl & ".extrapaft_type")
						select case l_ExtrapolationType
							case 1	  
								' Hold do nothing
							case 2	  
								l_ClipSpan = l_ClipSpan + (GetValue(l_TimeCtrl & ".extrapaft_nbcycles") * l_PreExtrapClipSpan)
							case 3	  
								l_ClipSpan = l_ClipSpan + (GetValue(l_TimeCtrl & ".extrapaft_nbbounces") * l_PreExtrapClipSpan)
						end select
					end if
					l_Len = l_ClipSpan / l_Scale
					l_Scale = l_ClipSpan / ( l_Len + in_Frame ) 
					SetValue l_TimeCtrl & ".scale", l_Scale					

			end select
		end if
	next
end sub


'------------------------------------------------------------------------------
' NAME:		CreateOffsetEffectProc
'
' INPUT:	Selected clips
'
' DESCRIPTION: Create an offset effect in the selected clips to prepare for
'			   offset keys: It will contain an fcurve with two keys 
'			   for each driven parameter of the selected clip
'              If there is already an offset effect ( "this + param" ), 
'	           it will add another one on top...
' 
' NOTE: This scripted command is not used anymore. It has been replaced by a real
'		task. 
'------------------------------------------------------------------------------
sub CreateOffsetEffectProc ( in_Clips )

	dim l_Selection, l_NbRules, l_RefClipIn, l_RefClipOut, l_Modeldot, l_Clip, i

	LogMessage "This routine is now obsolete"

	if TypeName( in_Clips ) = "Nothing" or in_Clips.Count <= 0 then
		LogMessage XSIUtils.Translate( "Please select a clip first", "XSISCRIPTS" )
		exit sub
	end if

	For Each l_Clip in in_Clips
		If l_Clip.Type = "mixeranimclip" OR l_Clip.Type = "AnimActionCompoundClip" then

			'Find the Model, if any
			l_Modeldot = split(l_Clip, ".")(0) & "."
			if l_Modeldot = "Mixer." then
				l_Modeldot = ""
			end if

			' Get the instanced action
			l_ActionClip = l_Clip & ".actionclip"

			'Get the start/end of the clip
			l_RefClipIn = GetValue( l_Clip & ".actionclip.timectrl.resin" )
			l_RefClipOut = GetValue( l_Clip & ".actionclip.timectrl.resout" ) 

			' Get number of items in effect (should be equal to number of mapping rules)
			l_NbRules = GetNumMappingRules( l_ActionClip )

			dim l_PreviousExpr, l_Param
			for i = 1 to l_NbRules
				l_Param = l_ActionClip & ".clipeffect.items.Item" & i & ".param"

				'Save keys at beginning of reference clip
				SaveKey l_Param, l_RefClipIn, 0.0

				'Save a key at end of reference clip
				SaveKey l_Param, l_RefClipOut, 0.0

				l_PreviousExpr = GetValue(l_ActionClip & ".clipeffect.items.Item" & i & ".valuemap")

				if l_PreviousExpr = "" then
					l_PreviousExpr = "this"
				end if
				
				SetValue l_ActionClip & ".clipeffect.items.Item" & i & ".valuemap", "(" & l_PreviousExpr & ") + param" 
			next
		End If
	Next

end sub


'------------------------------------------------------------------------------
' NAME:		CreateScaleEffectProc
'
' INPUT:	Selected clips
'
' DESCRIPTION: Create a scale effect in the selected clips to prepare for
'			   scaling keys: It will contain an fcurve with two keys 
'			   for each driven parameter of the selected clip
'              If there is already a scale effect ( "this * param" ), 
'	           it will add another one on top...
'------------------------------------------------------------------------------
sub CreateScaleEffectProc ( in_Clips )

	dim l_Selection, l_NbRules, l_RefClipIn, l_RefClipOut, l_Modeldot, l_Clip, l_EffectItems

	if TypeName( in_Clips ) = "Nothing" or in_Clips.Count <= 0 then
		LogMessage XSIUtils.Translate( "Please select a clip first", "XSISCRIPTS" )
		exit sub
	end if

	For Each l_Clip in in_Clips
		If l_Clip.Type = "mixeranimclip" OR l_Clip.Type = "AnimActionCompoundClip" then

			'Find the Model, if any
			l_Modeldot = split(l_Clip, ".")(0) & "."
			if l_Modeldot = "Mixer." then
				l_Modeldot = ""
			end if

			' Get the instanced action
			l_ActionClip = l_Clip & ".actionclip"

			'Get the start/end of the clip
			l_RefClipIn = GetValue( l_Clip & ".actionclip.timectrl.resin" )
			l_RefClipOut = GetValue( l_Clip & ".actionclip.timectrl.resout" ) 

			'Prepare to enumerate Clip Effect Items
			set l_EffectItems = EnumElements(l_ActionClip & ".clipeffect.items", TRUE)

			dim l_PreviousExpr, l_Param, l_Item
			for each l_Item in l_EffectItems
				l_Param = l_Item & ".param"

				'Save keys at beginning of reference clip
				SaveKey l_Param, l_RefClipIn, 1.0

				'Save a key at end of reference clip
				SaveKey l_Param, l_RefClipOut, 1.0

				l_PreviousExpr = GetValue(l_Item & ".valuemap")

				if l_PreviousExpr = "" then
					l_PreviousExpr = "this"
				end if
				
				SetValue l_Item & ".valuemap", "(" & l_PreviousExpr & ") * param" 
			next
		End If
	Next
end sub


'------------------------------------------------------------------------------
' NAME:		RemoveEffectProc
'
' INPUT:	Selected clips
'
' DESCRIPTION: Remove the effects on the selected clips
' 
' NOTE: This scripted command is not used anymore. It has been replaced by a real
'		task. 
'------------------------------------------------------------------------------
sub RemoveEffectProc ( in_Clips )

	LogMessage "This routine is now obsolete"

	dim l_Selection, l_NbRules, l_RefClipIn, l_RefClipOut, l_Modeldot, l_Clip, i
	
	if TypeName( in_Clips ) = "Nothing" or in_Clips.Count <= 0 then
		LogMessage XSIUtils.Translate( "Please select a clip first", "XSISCRIPTS" )
		exit sub
	end if

	For Each l_Clip in in_Clips
		If l_Clip.Type = "mixeranimclip" OR l_Clip.Type = "AnimActionCompoundClip" then
		
			' Get the instanced action
			l_ActionClip = l_Clip & ".actionclip"
			
			' Remove animation on the effect activeness
			RemoveAnimation l_ActionClip & ".clipeffect.effectactive"
			
			' Get number of items in effect (should be equal to number of mapping rules)
			l_NbRules = GetNumMappingRules( l_ActionClip )

			for i = 1 to l_NbRules
				' Remove animation on the per-item parameter
				RemoveAnimation l_ActionClip & ".clipeffect.items.Item" & i & ".param"
				
				' Reset the value mapping string
				SetValue l_ActionClip & ".clipeffect.items.Item" & i & ".valuemap", " " 
			next
		End If
	Next
end sub 


'------------------------------------------------------------------------------
' NAME:		ResetAllEffectCurvesProc
'
' INPUT:	Selected clips
'
' DESCRIPTION: Reset the effect curves for all the parameters in the selected clips
'------------------------------------------------------------------------------
sub ResetAllEffectCurvesProc ( in_Clips )

	dim	l_RefClipIn, l_RefClipOut, l_Clip, i, l_bIsOffsetEffect, l_EffectItems
	
	if TypeName( in_Clips ) = "Nothing" then
		LogMessage XSIUtils.Translate( "Please select a clip first", "XSISCRIPTS" )
		exit sub
	end if

	For Each l_Clip in in_Clips
		If l_Clip.Type = "mixeranimclip" OR l_Clip.Type = "AnimActionCompoundClip" then

			l_bIsOffsetEffect = false
			l_bIsScaleEffect = false
			
			' Get the instanced action
			l_ActionClip = l_Clip & ".actionclip"
			
			'Get the start/end of the clip
			l_RefClipIn = GetValue( l_Clip & ".actionclip.timectrl.resin" )
			l_RefClipOut = GetValue( l_Clip & ".actionclip.timectrl.resout" ) - 1
			
			'Prepare to enumerate Clip Effect Items
			set l_EffectItems = EnumElements(l_ActionClip & ".clipeffect.items", TRUE)

			' Determine if we have an offset effect or a scale effect			
			l_PreviousExpr = GetValue(l_EffectItems(0) & ".valuemap")

			if (NOT InStr( l_PreviousExpr, "+ param" ) = 0) OR _
			   (NOT InStr( l_PreviousExpr, "+param" ) = 0) then
				l_bIsOffsetEffect = true
				l_KeyValue = 0
			elseif (NOT InStr( l_PreviousExpr, "* param" ) = 0) OR _
			   (NOT InStr( l_PreviousExpr, "*param" ) = 0) then
				l_bIsScaleEffect = true 
				l_KeyValue = 1
			end if
			
			dim l_PreviousExpr, l_Param, l_Item
				
			if l_bIsOffsetEffect = true OR l_bIsScaleEffect = true then
				for each l_Item in l_EffectItems
					l_Param = l_Item & ".param"

					' Remove animation on the per-item parameter
					RemoveAnimation l_param
									
					' Save two new keys (at beginning and end of clip)
					SaveKey l_Param, l_RefClipIn, l_KeyValue
					SaveKey l_Param, l_RefClipOut+1, l_KeyValue
				next
			else
				for each l_Item in l_EffectItems
					l_Param = l_Item & ".param"

					' Remove animation on the per-item parameter
					RemoveAnimation l_param
				next
			end if
		End If
	Next
end sub 


'------------------------------------------------------------------------------
' NAME:		ResetSelectedEffectCurvesProc
'
' INPUT:	Selected clips
'
' DESCRIPTION: Reset the effect curves for the selected parameters in the given clips
'              This only works from the contextual menu
' Note: This has not been tested much so use at your own risks! (for now)
'------------------------------------------------------------------------------
sub ResetSelectedEffectCurvesProc ( in_Clip )

	Dim	l_EffectItems	
	' If input object is not a clip, goodbye!
	if TypeName( in_Clip ) = "Nothing" then
		LogMessage XSIUtils.Translate( "Please select a clip first", "XSISCRIPTS" )
		exit sub
	end if

	' Get the selected objects
	set l_InputObjects = GetValue("SelectionList")

	If TypeName(l_InputObjects) = "Nothing" Then
		LogMessage XSIUtils.Translate( "Nothing selected!", "XSISCRIPTS" )
		Err.Raise siErrCancelled
		Exit sub
	End If

	'Find the Model
	l_Modeldot = split(in_Clip, ".")(0) & "."
	if l_Modeldot = "Mixer." then
		l_Modeldot = ""
	end if
	
	' Get the instanced action
	l_ActionClip = in_Clip & ".actionclip"
	
	l_bIsOffsetEffect = false
	l_bIsScaleEffect = false
	l_KeyValue = 0
			
	'Get the start/end of the clip
	l_RefClipIn = GetValue( in_Clip & ".actionclip.timectrl.resin" )
	l_RefClipOut = GetValue( in_Clip & ".actionclip.timectrl.resout" ) - 1

	'Prepare to enumerate Clip Effect Items
	set l_EffectItems = EnumElements(l_ActionClip & ".clipeffect.items", TRUE)

	' Determine if we have an offset effect or a scale effect	
	' Arbitrarily check the first value map string		
	l_PreviousExpr = GetValue(l_EffectItems(0) & ".valuemap")

	if (NOT InStr( l_PreviousExpr, "+ param" ) = 0) OR _
	   (NOT InStr( l_PreviousExpr, "+param" ) = 0) then
		l_bIsOffsetEffect = true
		l_KeyValue = 0
	elseif (NOT InStr( l_PreviousExpr, "* param" ) = 0) OR _
	   (NOT InStr( l_PreviousExpr, "*param" ) = 0) then
		l_bIsScaleEffect = true 
		l_KeyValue = 1
	end if
		
	' Get number of items in effect (should be equal to number of mapping rules)
	l_NbRules = GetNumMappingRules( l_ActionClip )

	' Get number of selected objects
	l_NumObjects = l_InputObjects.Count


	For i = 0 to l_NumObjects-1
		' Find the object in the clip (if it is there)
		for j = 1 to l_NbRules
			GetMappingRule l_ActionClip, j, param, expr

			if param <> "<unmapped>" then
				' Get the object name from the param
				l_ObjectName = split(param, ".")(0) 

				if (l_InputObjects(i) = l_Modeldot & l_ObjectName) then
					LogMessage XSIUtils.Translate( "Resetting effect curves for ", "XSISCRIPTS" ) & param 
					
					' Reset the corresponding param curve

					l_Param =l_EffectItems(j-1) & ".param"
					RemoveAnimation l_Param
					
					' Save two new keys (at beginning and end of clip)
					SaveKey l_Param, l_RefClipIn, l_KeyValue
					SaveKey l_Param, l_RefClipOut+1, l_KeyValue
				end if
			end if
		next
	next
	
end sub


'------------------------------------------------------------------------------
' NAME:		ResetEffectAtFrame
'
' INPUT:	Selected clips and key time
'
' DESCRIPTION: Remove the effect keys at the given time in the selected clips
' Note: This has not been tested much so use at your own risks! (for now)
'------------------------------------------------------------------------------
sub ResetEffectAtFrameProc ( in_Clips, in_Time )
	dim l_Clip, l_bIsOffsetEffect, l_Param, l_EffectItems, l_Item
	
	if TypeName( in_Clips ) = "Nothing" then
		LogMessage XSIUtils.Translate( "Please select a clip first", "XSISCRIPTS" )
		exit sub
	end if

	For Each l_Clip in in_Clips
		If l_Clip.Type = "mixeranimclip" OR l_Clip.Type = "AnimActionCompoundClip" then

			' Get the instanced action
			l_ActionClip = l_Clip & ".actionclip"

			'Prepare to enumerate Clip Effect Items
			set l_EffectItems = EnumElements(l_ActionClip & ".clipeffect.items", TRUE)
			
			for each l_Item in l_EffectItems

				l_Param = l_Item & ".param"
				
				On Error Resume Next		' disable error handling
				' Remove the key on the per-item parameter
				RemoveKey l_Param, in_Time
				On Error Goto 0			    ' resume error handling			
			next
		End If
	Next
end sub 



'------------------------------------------------------------------------------
' NAME:			EqualizeClipsProc
'
' INPUT:		in_InputObjs....................Clips to equalize
' 
' DESCRIPTION: Builds a graphics equalizer for the input clips.	
'------------------------------------------------------------------------------
sub EqualizeClipsProc(in_InputObjs) 
		
	Dim l_Model, l_ModelToEqualize, l_LowerBoundary, l_UpperBoundary, l_Clips, l_Element, l_BefLength, l_AftLength
	Dim l_CurrentLowerBoundary, l_CurrentUpperBoundary, l_TmpArray, l_BaseName, l_Compound, l_CustomSet
	Dim l_List, l_NumClips, l_Action, i, l_TrackName, l_TmpName, l_Clip

	'Check that the input list is not empty.
	if (TypeName(in_InputObjs) = "Nothing" OR in_InputObjs.count = 0) then
		LogMessage XSIUtils.Translate( "You need to select at least one clip.", "XSISCRIPTS" )
		exit sub
	end if

	'Prepare to get the model of the selection.
	l_Model = ""
	set l_ModelToEqualize = CreateObject("XSI.Collection")
	
	l_LowerBoundary = 945134864
	l_UpperBoundary = -945134864

	'Create a collection to hold the clips contained in the selection list.
	set l_Clips = CreateObject("XSI.Collection")

	for each l_Element in in_InputObjs

		' Can only bake animation clips or compound clips
		if l_Element.Type = "mixeranimclip"_
		   OR l_Element.Type = "AnimActionCompoundClip" then
		   
			' Get the lower and upper boundary of the current clip taking its extrapolation into account
			l_BefLength = FGetClipExtrapLength(l_Element, 0)
			l_AftLength = FGetClipExtrapLength(l_Element, 1)
			
			l_CurrentLowerBoundary = GetValue(l_Element & ".actionclip.timectrl.startoffset") - l_BefLength
			l_CurrentUpperBoundary = GetValue(l_Element & ".actionclip.timectrl.endtime") + l_AftLength
			
			' Saves the lowest and highest boundaries of all clips
			if (l_CurrentLowerBoundary < l_LowerBoundary) then 
				l_LowerBoundary = l_CurrentLowerBoundary
			end if
			
			if (l_CurrentUpperBoundary > l_UpperBoundary) then 
				l_UpperBoundary = l_CurrentUpperBoundary
			end if

			if (l_Model <> SIGetModel(l_Element)) then
				l_Model = SIGetModel(l_Element)
				l_ModelToEqualize.Add l_Model
			end if

			l_Clips.Add(l_Element)

		end if
	next
	
	'Check that there are clips to process.
	if (l_Clips.count = 0) then
		LogMessage XSIUtils.Translate( "You must select at least one clip.", "XSISCRIPTS" )
		exit sub
	end if

	'Check that all clips belong to a single model.
	if (l_ModelToEqualize.count <> 1) then
		LogMessage XSIUtils.Translate( "All clips must belong to a single model.", "XSISCRIPTS" )
		exit sub
	end if

	'Get that model.
	set l_Model = l_ModelToEqualize.Items(0)
	
	'Bake the selected clip(s) to a raw fcurve.
	l_Action = FreezeClipsFunc(l_Clips, "FrozenActionForEqualizer", False, 1.0, 30, 0, FALSE, 0, True)
	
	'If there is only one clip in the selection, then we use its name as a basis for the equalizer
	'nomenclature.	
	if (l_Clips.count = 1) then
		l_TmpArray = Split(l_Clips.Items(0), ".", -1, 1)
		l_BaseName = l_TmpArray(UBound(l_TmpArray))
	else
		l_TmpArray = Split(l_Action, ".", -1, 1)
		l_BaseName = l_TmpArray(UBound(l_TmpArray))
	end if

	l_TmpName = l_BaseName & "_Motion_Equalizer"	
	
	'Equalize the clip and get the resulting compound clip.
	l_Compound = EqualizeAction(l_Action, l_LowerBoundary, l_UpperBoundary - l_LowerBoundary, l_BaseName)

	'One compound clip has to be created.
	if (l_Compound = "") then
		LogMessage XSIUtils.Translate( "Problem with the equalizer computation.", "XSISCRIPTS" )
		DeleteObj l_Action
		DeleteObj l_Compound
		exit sub
	end if

	'Add a custom parameter set under the model to store the equalizer gain controller
	AddProp "Custom_parameter_list", l_Model.Name, , l_TmpName, l_CustomSet

	'Select the newly created parameter set.
	SelectObj(l_CustomSet)

	'Prepare to iterate on the list of tracks held by the compound clip.
	set l_List = EnumElements(l_Compound & ".tracks", TRUE)
	l_NumClips = l_List.count

	'Iterate over the tracks to retrieve the clips.
	for i = 1 to l_NumClips
	
		' Get the clip corresponding to the frequency band NumClips - i.
		set l_Clip = EnumElements(l_List.items(l_NumClips - i) & ".ClipList", TRUE)
	
		'Add a proxy parameter for this frequency band.
		AddProxyParam l_CustomSet, l_Clip & ".actionclip.weight", "Gain" & l_NumClips - i

		'Edit the proxy parameter properties.
		if i = 1 then
			EditParameterDefinition l_CustomSet & ".Gain" & l_NumClips - i & "_weight", "Gain" & l_NumClips - i, , , , -4, 4, "Gain" & l_NumClips - i, "Gain" & l_NumClips - i & " (HF)"
		elseif i = l_NumClips - 1 then
			EditParameterDefinition l_CustomSet & ".Gain" & l_NumClips - i & "_weight", "Gain" & l_NumClips - i, , , , -4, 4, "Gain" & l_NumClips - i, "Gain" & l_NumClips - i & " (LF)"
		elseif i = l_NumClips then
			EditParameterDefinition l_CustomSet & ".Gain" & l_NumClips - i & "_weight", "Gain" & l_NumClips - i, , , , -4, 4, "Gain" & l_NumClips - i, "Gain" & l_NumClips - i & " (DC)"
		else	
			EditParameterDefinition l_CustomSet & ".Gain" & l_NumClips - i & "_weight", "Gain" & l_NumClips - i, , , , -4, 4, "Gain" & l_NumClips - i, "Gain" & l_NumClips - i
		end if

	next

	'Delete the baked clip.
	DeleteObj l_Action

	'Mute all the selected clips.
	for i = 0 to l_Clips.count - 1
		SetValue l_Clips.items(i) & ".actionclip.active" , False
	next

	'Select the equalizer gains ppg.
	SelectObj l_CustomSet

end sub

'------------------------------------------------------------------------------
' NAME:			AddBridgeTransitionFunc
'
' INPUT:		in_FromClip..................Clip we transition from.
' INPUT:		in_ToClip....................Clip we transition to.
' INPUT:		in_Name......................Name of transition.
' 
' DESCRIPTION: Adds a special transition between two periodic animation clips.	
'------------------------------------------------------------------------------

Function AddBridgeTransitionFunc(in_FromClip, in_ToClip, in_Name)
	Dim l_FromResStart, l_FromResEnd, l_FromPeriod, l_FromStart, l_FromEnd 
	Dim l_ToResStart, l_ToResEnd, l_ToPeriod, l_ToStart, l_ToEnd
	Dim l_Model, l_CPList, l_CustomParam, l_SceneRoot
	Dim l_ToInitExtrapAfter, l_FromInitExtrapAfter
		
	set AddBridgeTransitionFunc = Nothing

	'if ((in_FromClip.Type = "mixeranimclip") AND (in_ToClip.Type = "mixeranimclip") _
	'	OR (in_FromClip.Type = "AnimActionCompoundClip" AND in_ToClip.Type = "AnimActionCompoundClip")) then
		
		l_Model = SIGetModel(in_FromClip)
		l_SceneRoot = FGetSceneRoot
		
		if (l_Model <> SIGetModel(in_ToClip)) then
			LogMessage XSIUtils.Translate( IDS_BRIDGE_TRANSITION_ERROR1, "XSISCRIPTS" ), siInfo
			SIMsgBox XSIUtils.Translate( IDS_BRIDGE_TRANSITION_ERROR1, "XSISCRIPTS" ), vbOKOnly or vbExclamation, "Warning", vbOK
			Err.Raise siErrCancelled
			exit Function
		end if
		
		' Get the clips time control properties.
		l_FromResStart 	= GetValue(in_FromClip & ".actionclip.timectrl.resin")
		l_FromResEnd 	= GetValue(in_FromClip & ".actionclip.timectrl.resout")
		l_FromStart 	= GetValue(in_FromClip & ".actionclip.timectrl.startoffset")
		l_FromEnd	 	= GetValue(in_FromClip & ".actionclip.timectrl.endtime")
		
		' Get the From clip extrapolation after type, has to be cycle or nothing.
		l_FromInitExtrapAfter	= GetValue(in_FromClip & ".actionclip.timectrl.extrapaft_type")
		
		if (l_FromInitExtrapAfter <> 0) AND (l_FromInitExtrapAfter <> 2) then
			LogMessage XSIUtils.Translate( IDS_BRIDGE_TRANSITION_ERROR2, "XSISCRIPTS" ), siInfo
			SIMsgBox XSIUtils.Translate( IDS_BRIDGE_TRANSITION_ERROR2, "XSISCRIPTS" ), vbOKOnly or vbExclamation, "Warning", vbOK
			Err.Raise siErrCancelled
			exit Function
		end if
		
		' Temporay default value for the period of the From clip.
		l_FromPeriod = l_FromEnd - l_FromStart
		
		l_ToResStart 	= GetValue(in_ToClip & ".actionclip.timectrl.resin")
		l_ToResEnd		= GetValue(in_ToClip & ".actionclip.timectrl.resout")
		l_ToStart		= GetValue(in_ToClip & ".actionclip.timectrl.startoffset")
		l_ToEnd 		= GetValue(in_ToClip & ".actionclip.timectrl.endtime")

		' Get the To clip extrapolation after type, has to be cycle or nothing.
		l_ToInitExtrapAfter = GetValue(in_ToClip & ".actionclip.timectrl.extrapaft_type")
		
		if (l_ToInitExtrapAfter <> 0) AND (l_ToInitExtrapAfter <> 2) then
			LogMessage XSIUtils.Translate( IDS_BRIDGE_TRANSITION_ERROR3, "XSISCRIPTS" ), siInfo
			SIMsgBox XSIUtils.Translate( IDS_BRIDGE_TRANSITION_ERROR3, "XSISCRIPTS" ), vbOKOnly or vbExclamation, "Warning", vbOK
			Err.Raise siErrCancelled
			exit Function
		end if
		
		' Temporay default value for the period of the To clip.
		l_ToPeriod = l_ToEnd - l_ToStart
				
		' The clips must overlap properly.
		if (l_FromResStart > l_ToResStart) OR (l_FromResEnd < l_ToResStart) OR (l_ToResEnd < l_FromResEnd) then
			LogMessage	Chr(10) & XSIUtils.Translate( IDS_BRIDGE_TRANSITION_ERROR4, "XSISCRIPTS" ), siInfo
			
			SIMsgBox	XSIUtils.Translate( IDS_BRIDGE_TRANSITION_ERROR4, "XSISCRIPTS" ), _
						vbOKOnly + vbExclamation, "Warning", vbOK

			Err.Raise siErrCancelled
			exit Function
		end if
		
		' Now ask the user for the period of both clips.
		' We build a custom parameter set that we nest under the model
		'Set l_CPList = SIAddProp( "Custom_parameter_list", l_SceneRoot , , "AddBridgeTransition").value("Value")
		'l_CustomParam = l_SceneRoot & "." & l_CPList

		' From clip animation period.
		'SIAddCustomParameter l_CustomParam , "FPeriod", siDouble, l_FromPeriod, 0, 1000000, , siPersistable+siSilent, 0, l_FromResEnd, "FPeriod", "From clip animation period"

		' To clip animation period.
		'SIAddCustomParameter l_CustomParam , "TPeriod", siDouble, l_ToPeriod, 0, 1000000, , siPersistable+siSilent, 0, l_ToResEnd, "TPeriod", "To clip animation period"

		' If user clicked Ok we read both periods and proceed.
		'if FWizardDialog(l_CustomParam,"Add Bridge Transition") = vbOk then

			'Read the parameters of the property page.
			'l_FromPeriod	= GetValue(l_CustomParam & ".FPeriod")
			'l_ToPeriod		= GetValue(l_CustomParam & ".TPeriod")
			
			' Delete the custom parameter set.
			'DeleteObj l_CustomParam
			
			' Call the task
			set AddBridgeTransitionFunc = AddTWTransition(in_FromClip, in_ToClip, l_FromPeriod, l_ToPeriod, in_Name)
						
		'else
		'	DeleteObj l_CustomParam
		'	Err.Raise siErrCancelled
		'	exit Function
		'end if
		
	'end if	

end Function

'------------------------------------------------------------------------------
' NAME:        GetInputAndFindPeriodsProc
'------------------------------------------------------------------------------
sub GetInputAndFindPeriodsProc(	in_InputParams, _
								in_Algorithm, _
								in_StartFrame, _
								in_EndFrame, _
								in_MinCycle, _
								in_AddMarkers, _
								in_MarkerName, _
								in_Title )

	Dim l_Selection, l_Obj, l_SceneRoot, l_CPList, l_CustomParam, l_GeneratePset
	Dim l_Clip, l_ClipScale, l_ClipIn, l_ClipOut, l_ClipOffset, l_DoWarp
	Dim l_CycleStart, l_CycleEnd, l_Periods, l_Algorithm, l_NumCycles, l_NumNonZero, l_IndexNonZero, l_Message, l_Message1
	
	' Get the current selection non-scene objects.
	set l_Selection = SIFilter( , "sceneobject",FALSE)
	
	if TypeName(l_Selection) <> "Nothing" then
	
		' Find the clip in the current selection (if multiple clips are selected, ouput an error message)
		for each l_Obj in l_Selection
			if (l_Obj.Type = "mixeranimclip") OR (l_Obj.Type = "AnimActionCompoundClip") then
				if TypeName(l_Clip) = "Empty" then
					Set l_Clip = l_Obj
				else
					LogMessage XSIUtils.Translate( IDS_SELECT_CLIP, "XSISCRIPTS" ), siInfo
					SIMsgBox XSIUtils.Translate( IDS_SELECT_CLIP, "XSISCRIPTS" ), vbOKOnly or vbExclamation, "Warning", vbOK
					Err.Raise siErrCancelled
					exit sub
				end if
			end if
		next
		
		' Get the current selection scene objects.
		set l_Selection = SIFilter(, "sceneobject")
		
		if TypeName(l_Selection) = "Nothing" then
			LogMessage XSIUtils.Translate( IDS_SELECT_CLIP_OBJECT, "XSISCRIPTS" ), siInfo
			SIMsgBox XSIUtils.Translate( IDS_SELECT_CLIP_OBJECT, "XSISCRIPTS" ), vbOKOnly or vbExclamation, "Warning", vbOK
			Err.Raise siErrCancelled
			exit sub
		end if
	
	else
		LogMessage XSIUtils.Translate( IDS_SELECT_CLIP_OBJECT, "XSISCRIPTS" ), siInfo
		SIMsgBox XSIUtils.Translate( IDS_SELECT_CLIP_OBJECT, "XSISCRIPTS" ), vbOKOnly or vbExclamation, "Warning", vbOK
		Err.Raise siErrCancelled
		exit sub
	end if

	' If objects were selected.
	if (l_Selection.Count > 0) then

		' Get the start of the cycle, i.e. the current time.
		l_CycleStart = GetValue("PlayControl.Current")
	
		' Gets the clip time control information.
		l_ClipOffset	= GetValue(l_Clip & ".actionclip.timectrl.startoffset")
		l_ClipScale		= GetValue(l_Clip & ".actionclip.timectrl.scale")
		l_ClipOut		= GetValue(l_Clip & ".actionclip.timectrl.clipout")
		l_ClipIn		= GetValue(l_Clip & ".actionclip.timectrl.clipin")
		l_DoWarp		= GetValue(l_Clip & ".actionclip.timectrl.dowarp")
		
		' Compute the maximum length of the cycle.
		l_CycleEnd	= (l_ClipOffset + (l_ClipOut - l_ClipIn))
		
		' If the start of the cycle is out of the clip bound, we output an error message.
		if (l_CycleStart < l_ClipOffset) OR (l_CycleStart > l_CycleEnd) then
			LogMessage XSIUtils.Translate( IDS_INVALID_FRAME, "XSISCRIPTS" ), siInfo
			SIMsgBox XSIUtils.Translate( IDS_INVALID_FRAME, "XSISCRIPTS" ), vbOKOnly or vbExclamation, "Warning", vbOK
			Err.Raise siErrCancelled
			exit sub
		end if
		
		' If the clip is scaled, we output an error message.
		if (l_ClipScale <> 1) then
			LogMessage XSIUtils.Translate( IDS_CLIP_SCALE, "XSISCRIPTS" ), siInfo
			SIMsgBox XSIUtils.Translate( IDS_CLIP_SCALE, "XSISCRIPTS" ), vbOKOnly or vbExclamation, "Warning", vbOK
			Err.Raise siErrCancelled
			exit sub
		end if

		' If the a time warp is applied on the clip, we output an error message.
		if (l_DoWarp <> False) then
			LogMessage XSIUtils.Translate( IDS_NO_TIME_WARP, "XSISCRIPTS" ), siInfo
			SIMsgBox XSIUtils.Translate( IDS_NO_TIME_WARP, "XSISCRIPTS" ), vbOKOnly or vbExclamation, "Warning", vbOK
			Err.Raise siErrCancelled
			exit sub
		end if	
		
		'--------------------------------------------------------
		' Now comes the time to ask questions to our dear user.
		'--------------------------------------------------------

		' Get the scene root.
		Set l_SceneRoot = FGetSceneRoot
		
		' Build the Dialog to collect user input
				
		' Keep this around so it's easier to regenerate a new pset/preset if needed (Rejean's technique :-)
		l_GeneratePset = FALSE

		if (l_GeneratePset = TRUE) then
			
			' Create a custom plot wizard property
			Set l_CPList = SIAddProp( "Custom_parameter_list", l_SceneRoot , , "FindCycles").value("Value")
			l_CustomParam = l_SceneRoot & "." & l_CPList

			' Algorithm to choose from
			SIAddCustomParameter l_CustomParam , "Algorithm", siInt2, 0, 0, 1, , siPersistable+siSilent, 0, 1, "Algorithm", "Algorithm"

			' Minimum length of cycle (estimate)
			SIAddCustomParameter l_CustomParam , "Estimate", siDouble, 2.0, 0, 1000000, , siPersistable+siSilent, 2, l_CycleEnd - 1, "Estimate", "Duration"

			' Marker Name 
			SIAddCustomParameter l_CustomParam , "MarkerName", siString, , , , , siPersistable+siSilent, , , "MarkerName", "Marker Name"

			' Do we want to trim the clip or add markers.
			SIAddCustomParameter l_CustomParam, "AddMarkers", siInt2, 1, 0, 1, , siPersistable+siSilent, 0, 1,"AddMarkers", " " 

		else
			Set l_CPList = SIAddProp( "FindCycleWizard", l_SceneRoot , , "FindCycles").value("Value")
			l_CustomParam = l_SceneRoot & "." & l_CPList
		end if

		' Set the a-priori value of the algorithm based on the parameters we have as input.
		if in_InputParams <> "" AND TypeName(in_InputParams) <> "Nothing" then
			SetValue l_CustomParam & ".Algorithm", 1
		else
			in_InputParams = l_Selection
			SetValue l_CustomParam & ".Algorithm", 0
		end if

		' Do the same for the cycle estimate and the operation to perform.
		SetValue l_CustomParam & ".Estimate", 2

		'Launch the dialog and wait for OK or Cancel to be pressed.
		If FWizardDialog(l_CustomParam,"FindCycles") = vbOk Then

			'Read the parameters of the property page
			in_MinCycle		= GetValue( l_CustomParam & ".Estimate" )
			in_MarkerName	= GetValue( l_CustomParam & ".MarkerName" )
			in_AddMarkers	= GetValue( l_CustomParam & ".AddMarkers" )
		
			l_Algorithm		= GetValue( l_CustomParam & ".Algorithm" )

			select case l_Algorithm
				case 0		' Quaternion-based algorithm
					in_Algorithm  = 0
				case 1		' Signal processing-based algorithm
					in_Algorithm  = 1
			end select

			in_StartFrame = l_CycleStart
			in_EndFrame	  = l_CycleEnd

			' Call the FindPeriods task to get the periods of each input parameters.
			l_Periods = FindPeriods(in_InputParams, in_Algorithm, in_StartFrame, in_EndFrame, in_MinCycle)
			
			' Delete the ppg used to type-in parameters.
			DeleteObj l_CustomParam

			'If we are using the first algorithm, we output a single period for the selected objects.
			if in_Algorithm = 0 then
				l_NumNonZero   = 1
				l_IndexNonZero = 0
				
				' Get the number of cycles we can put into the existing animation.
				l_NumCycles = Int((in_EndFrame - in_StartFrame) / l_Periods(l_IndexNonZero))

'				l_Message = "- Selected objects rotations: " & Chr(10) & _
'							"   Period: " & l_Periods(l_IndexNonZero) & " frames ==> Cycle frame: " & in_StartFrame + l_NumCycles * l_Periods(l_IndexNonZero)
				l_Message = XSIUtils.Translate( IDS_SLECTED_OBJ_ROT, "XSISCRIPTS", l_Periods(l_IndexNonZero), in_StartFrame + l_NumCycles * l_Periods(l_IndexNonZero) )
				
				if in_AddMarkers = 1 then
					l_Message1 = l_Message & Chr(10) & Chr(10) & XSIUtils.Translate( IDS_OK_ADD_MARKERS, "XSISCRIPTS")
				else
					l_Message1 = l_Message & Chr(10) & Chr(10) & XSIUtils.Translate( IDS_OK_TRIM_CLIP, "XSISCRIPTS")
				end if

				LogMessage Chr(10) & l_Message, siInfo
				SIMsgBox	l_Message1, vbOKOnly , "Find Cycle Information", vbOK
			
			else
				if TypeName(l_periods) = "Empty" then
					exit sub
				end if
								
				if (UBound(l_Periods) - LBound(l_Periods) <> in_InputParams.Count) AND _
				   (LBound(l_Periods) <> 0) then
					LogMessage XSIUtils.Translate( IDS_SOMETHING_WENT_WRONG, "XSISCRIPTS"), siInfo
					SIMsgBox XSIUtils.Translate( IDS_SOMETHING_WENT_WRONG, "XSISCRIPTS"), vbOKOnly or vbExclamation, "Warning", vbOK

					Err.Raise siErrCancelled
					exit sub
				end if
				
				' Initialize the counter of non-zero periods.
				l_NumNonZero = 0

				l_Message = ""

				for i = 0 to UBound(l_Periods)
					if (l_Periods(i) <> 0) then
						l_NumNonZero   = l_NumNonZero + 1
						l_IndexNonZero = i

						' Get the number of cycles we can put into the existing animation.
						l_NumCycles = Int((in_EndFrame - in_StartFrame) / l_Periods(i))

						l_Message = l_Message & "- " & in_InputParams(i) & " :" & Chr(10) & _
									XSIUtils.Translate( "   Period: ", "XSISCRIPTS") & l_Periods(i) & XSIUtils.Translate( " frames ==> Cycle frame: ", "XSISCRIPTS") & in_StartFrame + l_NumCycles * l_Periods(i) & Chr(10) & Chr(10)
					
					end if
				next

				' Several periods found, performing the operation is not possible.
				if l_NumNonZero > 1 then
					if in_AddMarkers = 1 then
						l_Message = XSIUtils.Translate( IDS_MULTI_PERIODS_FOUND_AM, "XSISCRIPTS") & Chr(10) & Chr(10) & l_Message
						l_Message1 = l_Message
					else
						l_Message = XSIUtils.Translate( IDS_MULTI_PERIODS_FOUND_TC, "XSISCRIPTS") & Chr(10) & Chr(10) & l_Message			
						l_Message1 = l_Message
					end if

				' One period found, we can perform the operation.
				elseif l_NumNonZero = 1 then
					if in_AddMarkers = 1 then
						l_Message1 = l_Message & XSIUtils.Translate( IDS_OK_ADD_MARKERS, "XSISCRIPTS")
					else
						l_Message1 = l_Message & XSIUtils.Translate( IDS_OK_TRIM_CLIP, "XSISCRIPTS")
					end if

				' No period found, nothing to be done then.
				else
					l_Message1 = XSIUtils.Translate( IDS_NO_PERIOD_FOUND, "XSISCRIPTS", in_MinCycle)
				end if

				
				LogMessage Chr(10) & l_Message, siInfo
				SIMsgBox l_Message1, vbOKOnly, "Find Cycle Information", vbOK

			end if

			' If we got only one non-zero period, we can add markers or trim the clip.
			if l_NumNonZero = 1 then
				
				if (in_AddMarkers = 1) then
					' Add as many markers as you can in the clip.
					for i = 0 to l_NumCycles
						AddMarker	SIGetModel(l_Clip), l_Clip, l_CycleStart + i * (l_Periods(l_IndexNonZero)) - l_ClipOffset, 0, in_MarkerName
					next
				else
					' Trim the clip preserving as many periods as you can.
					SetValue l_Clip & ".actionclip.timectrl.startoffset", l_CycleStart
					
					SetValue l_Clip & ".actionclip.timectrl.clipout", l_ClipIn + l_CycleStart + l_NumCycles * (l_Periods(l_IndexNonZero)) - l_ClipOffset - 1 	

					SetValue l_Clip & ".actionclip.timectrl.clipin",  l_ClipIn + l_CycleStart - l_ClipOffset  
				end if
			
			end if

		else
			DeleteObj l_CustomParam
			Err.Raise siErrCancelled
	end if
			


	end if

end sub

'------------------------------------------------------------------------------
' NAME:		ImportActionAndAddClip
'
' INPUT:	Target model and name of the action file
'
' DESCRIPTION: Import a .ani, .key, or .exp file as an action. A clip is created, storing this action.
'------------------------------------------------------------------------------
sub ImportActionAndAddClipProc ( in_Model, in_File )
	Dim l_action
	l_action = ImportAction( in_Model, in_File )
	AddClip in_Model, l_action
end sub 

'------------------------------------------------------------------------------
' NAME:		ImportActionAndApply
'
' INPUT:	Target model and name of the action file
'
' DESCRIPTION: Import a .ani, .key, or .exp file as an action. A clip is created, storing this action.
'------------------------------------------------------------------------------
sub ImportActionAndApplyProc ( in_Model, in_File )
	Dim l_action
	l_action = ImportAction( in_Model, in_File )
	ApplyAction l_action, in_Model
end sub 

'------------------------------------------------------------------------------
' NAME:		ImportAudioAndAddClip
'
' INPUT:	Target model and name of the audio file
'
' DESCRIPTION: Import an audio file and create a clip for it.
'------------------------------------------------------------------------------
function ImportAudioAndAddClip( in_Model, in_File )
	Dim l_action
	l_action = ImportAudio( in_Model, in_File )
	set ImportAudioAndAddClip = AddAudioClip( in_Model, l_action )
end function


'******************************************************************************
' UI SCRIPTS
'******************************************************************************



'******************************************************************************
' EXTERNALLY DEVELOPED SCRIPTS
'******************************************************************************


' *******************************************************************
' *******************************************************************
' *** NO LONGER USED
' *** FROM HERE...  (look for "TO HERE" way below)
' *******************************************************************
' *******************************************************************
'
' GF - Note that MergeClips is no longer done here, it is now implemented as a
' task which makes it over 100x faster...  However, I left this code here as
' an example and also a useful tool for prototyping new Merge functionality.


'##############################################################################'
'# OO_MergeClips.vbs
'# AUTHOR: Olivier Ozoux (oliviero@softimage.com)
'# VERSION: 1.5
'# LAST REVISION: 2001.7.16
'#
'#Create a new source that contains a copy of the keys of each fcurve in
'#the selected clip. This is similar to a plot, except that the data is
'#not generated with a key at every frame.
'#
'# Note: Clips should not overlap, or be weighted against other clips, or
'# have timewarps. Only works with FCurves.
'#
'# The workflow is the following:
'# 1. iterate over the clips to build a list of animated items
'# 2. store a list of each clip using that item.
'# 3. create a new source, and assign the items found in 1.
'# 4. build the fcurve for each items.
'#
'# 2001.6.18 Fixed a bug when fcurve had no keys within the clip boundaries
'# I now add anchor keys in these cases.
'# 2001.6.19 Fixed so it doesn't fail when a fcurve is a boolean
'# 2001.6.21 Rewrote the anchor keys routine. the new merged section should
'# follow the curve profile almost exactly.
'# 2001.07.16 Thanks to MTL for helping me find a very nasty bug. Apparently,
'# Calling AddFcurve recursively on multiple objects was causing the fcurve
'# to become completely corrupt. Workaround is to remove animation.
'# Merci Martin Barrette, Simon Inwood, Michael Gachet, and Jill Isner
'# 2001.07.19 Found a way to support Fcurves which contain both Linear and Spline
'# keys, by creating a spline fcurve with the correct handles for the linear 
'# portions.
'##############################################################################'




'----------'----------'----------'----------'----------'----------'----------
sub MergeClipsFunc(clips)
'----------'----------'----------'----------'----------'----------'----------
	if clips.count < 1 then
		logmessage XSIUtils.Translate( "You need to select at least one clip.", "XSISCRIPTS" ), siError
		exit sub
	end if
	
	Dim dClipItems, oModel, oNewSource, keys, i, oActionItem, oFcurve
	Dim clipList, keyArray, ftype, oProp, oFloat, oBool
	
	'Get a dictionary of items, and the clips they show up in. (ignore inactive
	' items in the source of the action
	set dClipItems = GetItemDict(clips, true)
	
	'Get the Model the clips belong to.
	set oModel = clips(0).Model
	
	
	'Create a dummy property to create the fcurves on
	set oProp = oModel.AddProperty("Custom_parameter_list",,"Dummy")
	set oFloat = oProp.AddParameter( "Float",siDouble, 0, 1,,,,0,-1000000,1000000 )
	
	
	'Create the new source.
	set oNewSource = oModel.AddActionSource("MergedClips")

	'Start Building the Items and Fcurves
	keys = dClipItems.keys
	for i = 0 to dClipItems.count -1
		
		'Extract the relevant clip names
		clipList = split(dClipItems.item(keys(i)), ";")	
		
		'Build the fCurve
		set oFcurve = GetCompositeFcurve(keys(i), clipList, oFloat)
		
		if typename( oFcurve ) <> "Nothing" then

			'Create a new Item
			set oActionItem = oNewSource.AddSourceItem( cstr(keys(i)),oFcurve, True)

		end if
		
		RemoveAllAnimation oFloat
		
	next
	
	'set the source start/end
	SetSourceInOut oNewSource, clips
	
	'Cleanup
	DeleteObj oProp
end sub



'----------'----------'----------'----------'----------'----------'----------
sub SetSourceInOut( source, clips)
'----------'----------'----------'----------'----------'----------'----------
	'Match the new source in/out to the clips overal min/max
	Dim oClip, resin, resout, min, max
	
	min = 100000
	max = -100000
	
	for each oClip in clips
		resin = GetValue(oClip & ".actionclip.timectrl.resin")
		resout = GetValue(oClip & ".actionclip.timectrl.resout")
		if resin < min then
			min = resin
		end if
		if resout > max then
			max = resout
		end if
	next
	
	'set the source animstart/animend and convert frame to time.
	SetValue source & ".FrameEnd", (max -1) 
	SetValue source & ".FrameStart", min 
end sub




'----------'----------'----------'----------'----------'----------'----------
function GetCompositeFcurve(item, clipList, oParam)
'----------'----------'----------'----------'----------'----------'----------
	'Create a single fcurve by adding all the curves from all the clips
	'together, then sorting by time.
	' IN <item> string
	' IN <clipList> array of strings of clips and item indices
	' IN <oParam> parameter to hold the tmp fcurve
	' OUT Fcurve
	Dim fType, fInterp, kInterp, MixedInterp
	Dim i, j, k, n, allocN, oSourceItems, oFcurve, oKeys, oKey, oTimeControl
	Dim keyArray(),flatArray(), keylist
	Dim clipin,clipout,scale,startoffset,ktime, resin,resout
	Dim preK, postK, lastn, kdist, kratio
	Dim foundFcurve

	'logmessage "Processing " & item

	MixedInterp = False
	'bidimensional array with:
	'frame, value, left-tan, left-time, right-tan, right-time, interp, clip-resin
	allocN = 128
	Redim keyArray(7, allocN)
	n = 0

	foundFcurve = false

	for i = 0 to ( Ubound(clipList) - 1 ) step 2
		'Get the clip timing data.
		set oTimeControl = GetValue( clipList(i) & ".actionclip.timectrl" )
		clipin = oTimeControl.clipin.value
		clipout = oTimeControl.clipout.value
		scale = oTimeControl.scale.value
		startoffset = oTimeControl.startoffset.value
		resin = oTimeControl.resin.value
		resout = oTimeControl.resout.value
		
		set oSourceItems = GetValue(clipList(i) & ".actionclip.Action" ).SourceItems
		set oFcurve = Nothing
		
		' We stored the proper index as the next item in the "clipList" array.
		' (we used to iterate over all, no longer need to)
		j=clipList(i+1)
		if oSourceItems(j).Target <> item then logmessage XSIUtils.Translate( "Error matching item: ", "XSISCRIPTS" ) & oSourceItems(j).Target & " / " & item

		on error resume next
		set oFcurve = oSourceItems(j).Source		' Will fail for expressions and other non-fcurve sources
		on error goto 0
		if typename( oFcurve ) = "StaticSource" then
			foundFcurve = true		' Not really an fcurve, but we're going to create one!

			fType = 20
			fInterp = 3			' Static keys are added as spline.

			if ( n - 1 > allocN ) then
				'Extend the Array if necessary
				allocN = allocN * 2
				Redim Preserve keyArray(7,allocN)
			end if
			keyArray(0,n) = resin
			keyArray(1,n) = oFcurve.value					
			keyArray(2,n) = -1
			keyArray(3,n) = 0
			keyArray(4,n) = 1
			keyArray(5,n) = 0
			'Key Interpolation
			keyArray(6,n) = 3 'spline
			keyArray(7,n) = resin
			n = n + 1

			if ( resout - resin > 1 ) then
				if ( n - 1 > allocN ) then
					'Extend the Array if necessary
					allocN = allocN * 2
					Redim Preserve keyArray(7,allocN)
				end if
				keyArray(0,n) = resout - 1	' does not drive at time "resout", only one frame before
				keyArray(1,n) = oFcurve.value					
				keyArray(2,n) = -1
				keyArray(3,n) = 0
				keyArray(4,n) = 1
				keyArray(5,n) = 0
				'Key Interpolation
				keyArray(6,n) = 3 'spline
				keyArray(7,n) = resin
				n = n + 1
			end if

		elseif typename( oFcurve ) <> "FCurve" then
			logmessage "MergeClips skipping non-fcurve '" & item & "' in " & clipList(i)
		else
			foundFcurve = true
			' Processing an fcurve.
			set oKeys = oFcurve.Keys
			fType = oFcurve.type
		 	fInterp = oFcurve.Interpolation
		 	
		 	'remember the position in the array for later
		 	lastn = n
		 	
		 	'loop over the keys
			for k=0 to oKeys.count -1
				set oKey = oKeys(k)
				ktime = oKey.time
				
				'Only take into accounts the keyframe inside the clip
				if ktime >= clipin And ktime <= clipout then
					
					if n = lastn then
						'first key. keep the key before that
						preK = k - 1
					end if
					
					if ( n - 1 > allocN ) then
						'Extend the Array if necessary
						allocN = allocN * 2
						Redim Preserve keyArray(7,allocN)
					end if
				
					'Convert the time back to global time
					keyArray(0,n) = ((ktime - clipin) / scale) + startoffset
					keyArray(1,n) = oKey.value
					keyArray(7,n) = resin
					
					'logmessage clipList(i) & " added key t=" & keyArray(0,n) & " val=" & keyArray(1,n)

					if fType = 20 then
						'Check the Key interpolation
						kInterp = oKey.Interpolation
						if Not fInterp = kInterp then
							MixedInterp = True
						end if
						
						keyArray(2,n) = oKey.LeftTanX
						keyArray(3,n) = oKey.LeftTanY
						keyArray(4,n) = oKey.RightTanX
						keyArray(5,n) = oKey.RightTanY
						
						'Key Interpolation
						keyArray(6,n) = kInterp
					else
						keyArray(2,n) = 0
						keyArray(3,n) = 0
						keyArray(4,n) = 0
						keyArray(5,n) = 0
						'Key Interpolation
						keyArray(6,n) = 2 'linear					
					end if
					n = n + 1
				end if
			next
			
			'Remember the post Key
			postK = preK + (n - lastn) + 1

			
			if postK < oKeys.count then
				
				'Anchor the clip end
				'logmessage "Adding a post-clip anchor key"
				
				'for bezier curves adjust the handle to compensate
				if fType = 20 AND n > 0 then
					kdist = oKeys(postK).time - oKeys(postK -1).time
					kratio = clipout + 1 - oKeys(postK -1).time
					if kdist <> 0 then
						kratio =  kratio / kdist
					else
						kratio = 1
					end if

					keyArray(4, n -1) = keyArray(4, n -1) * kratio
					keyArray(5, n -1) = keyArray(5, n -1) * kratio
					
					kInterp = oKeys(postK -1).Interpolation
				else
					kInterp = 1
				end if
				
				if ( n - 1 > allocN ) then
					'Extend the Array if necessary
					allocN = allocN * 2
					Redim Preserve keyArray(7,allocN)
				end if
				keyArray(0,n) = cDbl(resout)
				keyArray(1,n) = oFcurve.Eval(clipout +1)
				keyArray(2,n) = -1
				keyArray(3,n) = oFcurve.Eval(clipout) - keyArray(1,n)
				keyArray(4,n) = 1
				keyArray(5,n) = - keyArray(3,n)
				keyArray(6,n) = kInterp
				keyArray(7,n) = resin
				'logmessage clipList(i) & " added POST-key t=" & keyArray(0,n) & " val=" & keyArray(1,n)
				n = n + 1

			end if
			
			if preK > -1 then
				'Anchor the Clip Start
				'logmessage "Adding a pre-clip anchor key"
				
				'for bezier curves adjust the handle to compensate
				if fType = 20 AND n > 1 then
					kdist = oKeys(preK +1).time - oKeys(preK).time
					kratio = oKeys(preK +1).time - clipin
					if kdist <> 0 then
						kratio =  kratio / kdist
					else
						kratio = 1
					end if
					keyArray(2, lastn) = keyArray(2, lastn) * kratio
					keyArray(3, lastn) = keyArray(3, lastn) * kratio
					
					kInterp = oKeys(preK).Interpolation
				else
					kInterp = 1
				end if
				
				
				if ( n - 1 > allocN ) then
					'Extend the Array if necessary
					allocN = allocN * 2
					Redim Preserve keyArray(7,allocN)
				end if
				keyArray(0,n) = cDbl(resin)
				keyArray(1,n) = oFcurve.Eval(clipin)
				keyArray(2,n) = -1
				keyArray(3,n) = oFcurve.Eval(clipin -1) - keyArray(1,n)
				keyArray(4,n) = 1	
				keyArray(5,n) = - keyArray(3,n)
				keyArray(6,n) = kInterp
				keyArray(7,n) = resin

				'logmessage clipList(i) & " added PRE-key t=" & keyArray(0,n) & " val=" & keyArray(1,n)

				n = n + 1
			end if
			
			exit for
		end if ' Processing an fcurve.
	next

	if ( allocN > n - 1 ) then
		'Shrink back down the Array if necessary to just the "n" elements.
		allocN = n - 1
		Redim Preserve keyArray(7,allocN)
	end if

	if foundFcurve then
	
		'Now we need to sort the array by time values.
		XSIUtils.QuickSort keyArray
		
		'Sanity Check #1 remove duplicate keys
		ktime = -1000000
		n = ubound (keyArray, 2)
		for i = 0 to n
			if abs( ktime - keyArray(0,i) ) < 0.1 then
				'keys are the same. remove one from "latest (in time)" owner, stored in keyArray(7, N)
				'logmessage "Key #" & i & " (" & keyArray(7,i) & ") and " & i-1 & " (" & keyArray(7, i-1) & ") overlap"
				if keyArray(7, i-1) > keyArray(7, i) then
					'logmessage "Removing " & i-1
					keyArray(0, i -1) = 1000000
				else
					'logmessage "Removing " & i
					keyArray(0, i) = 1000000
				end if
				n = n -1
			end if
			ktime = keyArray(0,i)
		next
		
		'Now we need to sort the array by time values.
		XSIUtils.QuickSort keyArray

		'Shrink the array
		Redim preserve keyArray(7, n)
		Dim distance
		
		'Sanity Check #2: a key's handle can't extend past the neighbors
		for i = 0 to ubound(keyArray, 2) -1
		
			'Create Linear Handles
			if MixedInterp And keyArray(6,i) = 2 then
				'Adjust Time
				keyArray(4, i)		=  (keyArray(0, i + 1) - keyArray(0, i)) / 3
				keyArray(2, i + 1)	=  (keyArray(0, i) - keyArray(0, i + 1)) / 3
				'Adjust Value
				distance = (keyArray(1,i +1) -  keyArray(1,i)) / 3
				keyArray(5,i) =   distance
				keyArray(3, i +1) = - distance
			end if
		
			'right handle on current key
		
			if keyArray(0,i) + keyArray(4, i) > keyArray(0, i + 1) + keyArray(2, i + 1) then
				stop
				'logmessage  "Key #" & i & "handles overlap"
				keyArray(4, i)		=  (keyArray(0, i + 1) - keyArray(0, i)) / 3
				keyArray(2, i + 1)	=  (keyArray(0, i) - keyArray(0, i + 1)) / 3
			end if	
		next
		
		
		'Mixed Curves are created as spline
		if MixedInterp then fInterp = 3
		
		
		'and create a flat array
		if fType = 20 And (fInterp = 3)then
			'time, value, rtanx, rtany, ltanx, ltany
			Redim flatArray((Ubound(keyArray,2)+1) * 6 -1 )
		else
			'time, value
			Redim flatArray((Ubound(keyArray,2)+1) * 2 -1 )
		end if
		j = 0
		for i=0 to Ubound(keyArray,2)
				flatArray( j ) = keyArray(0,i)
				flatArray( j + 1 ) = keyArray(1,i)
				j = j + 2
				if fType = 20 And fInterp = 3 then
					flatArray( j ) = keyArray(2,i)
					flatArray( j + 1 ) = keyArray(3,i)
					flatArray( j + 2 ) = keyArray(4,i)
					flatArray( j + 3 ) = keyArray(5,i)
					j = j + 4
				end if
		next


		'logmessage "Merging Fcurve: " & item &" "& fcurvetype(fType) &" "& interp(fInterp) &" "& MixedInterp
		if fType = 30 then
			'Workaround RAW fcurve report their interpolation incorrectly
			fInterp = 2
		end if
		
		'Create the Fcurve and Return
		set GetCompositeFcurve = oParam.AddFcurve(fType,fInterp,,flatArray)
	else
		' We didn't get a curve.
		set GetCompositeFcurve = Nothing
	end if

end function



'----------'----------'----------'----------'----------'----------'----------
function GetItemDict(clips,ignoreInactive)
'----------'----------'----------'----------'----------'----------'----------
	Dim dClipItems, oClip, oItems, oSource, oActionClip, ClipNumItems, i, key, keys
	Dim	bMatching, ActiveItem, foo, foo2
		
	'Create a dictionary to hold the items.
	set dClipItems = CreateObject("Scripting.Dictionary")
	
	'loop over each clip and store a reference to the clip
	'in the dictionary. ie: a.kine.local.posx = myclip1;myclip2;...
	for each oClip in clips
		if oClip.type = "mixeranimclip" then
		
			'Get the source
			set oSource = GetValue( oClip & ".actionclip.Action" )
			
			'Get the items from the source.
			set oItems = oSource.SourceItems

			'Get the clip
			set oActionClip = GetValue( oClip & ".actionclip" )

			' Get the number of items from the clip
			ClipNumItems = GetNumMappingRules( oActionClip ) 

			if ClipNumItems = oItems.count then 
				bMatching = true
			else
				bMatching = false
			end if
			
			for i=0 to oItems.count -1
				if bMatching = true then
					GetMappingRule oActionClip , i+1,,, ActiveItem
				else
					' Don't do anything if num Items in clip != num Items in it's source
					'ActiveItem =  oItems(i).Active
					ActiveItem =  true
				end if

				'LogMessage ActiveItem
				'
				' Does this stuff work with templates whatsoever ? i.e. shouldn't I be iterating
				' over the clip items rather than source items to get the 'target' names
				'
				'
				if (ignoreInactive = false) or (ActiveItem = true) then
					key = oItems(i).Target
					if dClipItems.exists(key) then
						' Sets the item to be a string like "clip1;5;clip2;19;clip3;1" (clip name followed by item index in that clip)
						dClipItems.item(key) = dClipItems.item(key) & ";" & i & ";" & oClip
					else
						dClipItems.add key, oClip & ";" & i
					end if
				end if
			next
		end if
	next
	
	'print the dict for debug
	'keys = dClipItems.keys
	'for i = 0 to dClipItems.count -1
	'	logmessage keys(i) & " = " & dClipItems.item(keys(i))
	'next
	
	'Return the dictionary.
	set GetItemDict = dClipItems
end function


function Interp(nb)
	select case nb
		case 1
			Interp = "siConstantInterpolation"
		case 2
			Interp = "siLinearInterpolation"
		case 3
			Interp = "siCubicInterpolation"
	end select
end function

function fcurvetype(nb)
	select case nb
		case 0
			fcurvetype = "siUnknownFCurve"
		case 10
			fcurvetype = "siBooleanFCurve"
		case 15
			fcurvetype = "siIntegerFCurve"
		case 20
			fcurvetype = "siStandardFCurve"
		case 30
			fcurvetype = "siRawDataFCurve"
	end select
end function


' *******************************************************************
' *******************************************************************
' *** ...TO HERE
' *** (NO LONGER USED)
' *******************************************************************
' *******************************************************************



'------------------------------------------------------------------------------
' NAME:			ClipMatch
'
' DESCRIPTION:	Matches up two clips using the PoseOffset feature.  Has options
'				to use right foot, left foot or COG (as flagged with custom psets
'				from the "Character" menu).
'
' INPUT:		list containing two clips (if empty, uses selection)
'
' OUTPUT:		none (it just computes and adds a pose offset to the second clip)
'              
'------------------------------------------------------------------------------
sub ClipMatchProc( in_objList )
	
	dim refClip, matchClip, valid
	dim rfoot, lfoot, cog, matchType

	FGet_selection in_objList, refClip, matchClip, activeObj, valid
	
	if valid = False then
		FPick_clips refClip, matchClip, valid
		if valid = False then exit sub
	end if

	if TypeName(activeObj) = "Empty" then

		' Get the active object, using character tags.
		FGet_elements in_objList, rfoot, lfoot, cog

		FGet_dial rfoot, lfoot, cog, matchType, valid
		if valid = False then exit sub

		FGet_activeObject matchType, rFoot, lFoot, cog, activeObj
	end if

	if GetValue(matchClip & ".actionclip.timectrl.resin") < GetValue(refClip & ".actionclip.timectrl.resin") then
		logmessage "Clips picked backwards.  Swapping!"
		temp = matchClip
		matchClip = refClip
		refClip = temp
	end if

	FSet_pose_activation matchClip
	FGet_clip_times refClip, matchClip, timeAend, timeBstart
	
	logmessage XSIUtils.Translate( "Matching from frame: ", "XSISCRIPTS" ) & timeAend & " (" & refClip & ")"
	logmessage XSIUtils.Translate( "To frame: ", "XSISCRIPTS" ) & timeBstart & " (" & matchClip & ")"

	FCreate_transfer_elements refClip, matchClip, timeAend, timeBstart, activeObj, A, B, TransferNull, yRot
	FSetClipOffset  B, TransferNull, matchClip, timeBstart
	
	DeleteObj TransferNull	
	DeleteObj A
	DeleteObj B	
	
end sub
'----------------------------------------
' Get Selection
'----------------------------------------
function FGet_selection( in_objList, out_refClip, out_matchClip, out_activeObj, out_valid )

	out_valid = False

	dim sel
	if TypeName(in_objList) = "Nothing" then
		set sel = GetValue("SelectionList")
	else
		set sel = in_objList
	end if

	if sel.count > 0 then
		if sel(0).type = "mixeranimclip" then
			out_refClip = sel(0)
		else
			exit function
		end if
	end if

	if sel.count > 1 then
		if sel(1).type = "mixeranimclip" then
			out_valid = True
			out_matchClip = sel(1)
		end if
	end if

	if sel.count > 2 then
		set out_activeObj = sel(2)
	end if

end function
'----------------------------------------
' Pick Clips
'----------------------------------------
function FPick_clips(out_refClip, out_matchClip, out_valid)
	
	dim button
	
	out_valid = False

	if TypeName(out_refClip) = "Empty" then
		PickElement "object", "Pick Reference Clip", "Pick Reference Clip", out_refClip, button
		if button = 0 then exit function
		if out_refClip.type <> "mixeranimclip" then
			logmessage XSIUtils.Translate( "Match Clip Aborted: A clip was not picked", "XSISCRIPTS" )
			exit function
		end if
	end if
	
	if TypeName(out_matchClip) = "Empty" then
		PickElement "object", "Pick Clip to Offset", "Pick Clip to Offset", out_matchClip, button
		if button = 0 then exit function	
		if out_matchClip.type <> "mixeranimclip" then
			logmessage XSIUtils.Translate( "Match Clip Aborted: A clip was not picked", "XSISCRIPTS" )
			exit function
		end if
	end if
	
	out_valid = True
	
end function
'------------------------------------
' Get Elements
'------------------------------------
function FGet_elements( in_objList, out_rFoot, out_lFoot, out_cog )

	dim sel, cModel

	if TypeName(in_objList) = "Nothing" then
		set sel = GetValue("SelectionList")
	else
		set sel = in_objList
	end if

	if sel.count = 0 then
		set cModel = application.activeproject.activescene.root
	else
	
		if sel(0).type = "#model" then
			set cModel = sel(0)
		else		
			set cModel = sel(0).model			
		end if
	end if
	
	set out_rFoot = FSearch3DObjectFromParam(cModel , "RightFoot")
	set out_lFoot = FSearch3DObjectFromParam(cModel , "LeftFoot")
	set out_CoG = FSearch3DObjectFromParam(cModel , "CenterOfGravity")
		
end function	
'------------------------------------
' Search 3D Object From Param
'------------------------------------
function FSearch3DObjectFromParam( obj, propName)	
	dim c, prop, foundObj
	set FSearch3DObjectFromParam = nothing
	for each c in obj.children
		set prop = c.properties(propName)
		if typename(prop) <> "Nothing" then
				set FSearch3DObjectFromParam = c
		end if	
		set foundObj = FSearch3DObjectFromParam( c, propName)
		if typename(foundObj) <> "Nothing" then
			set FSearch3DObjectFromParam = foundObj
			exit function
		end if
	next	
end function
'------------------------------------
' Get Dial
'------------------------------------
function FGet_dial(in_rfoot, in_lfoot, in_cog, out_matchType, byref out_valid)

	dim UI
	out_valid = False
	
	set UI = SIAddProp ("MatchClips", "Scene_Root", ,"MatchClips")(0)
	dim l_defaultMatch
	l_defaultMatch = 0

	if typename(in_rFoot) = "Nothing" then
		SetValue UI & ".rightfoot" , XSIUtils.Translate( IDS_MATCH_CLIP_TAG_NOT_FOUND, "XSISCRIPTS" )
	else
		SetValue UI & ".rightfoot" , CStr( in_rFoot )
		l_defaultMatch = 0
	end if	
	
	if typename(in_lFoot) = "Nothing" then
		SetValue UI & ".leftfoot" , XSIUtils.Translate( IDS_MATCH_CLIP_TAG_NOT_FOUND, "XSISCRIPTS" )
	else
		SetValue UI & ".leftfoot" , CStr( in_lFoot )
		l_defaultMatch = 1
	end if		
	
	if typename(in_cOg) = "Nothing" then
		SetValue UI & ".body_Center" , XSIUtils.Translate( IDS_MATCH_CLIP_TAG_NOT_FOUND, "XSISCRIPTS" )
	else
		SetValue UI & ".body_Center" , CStr( in_cOg )
		l_defaultMatch = 2
	end if	
	
	' Set the initial value, depending on which tags were defined.
	SetValue UI & ".Match", l_defaultMatch

	On Error Resume Next		' disable error handling
	inspectobj UI,,,siModal
	
	if Err.Number <> 0 then
		DeleteObj UI
		exit function
	end if

	On Error Goto 0			    ' resume error handling

	out_matchType = GetValue(UI & ".Match")

	DeleteObj UI		
	
	out_valid = True  

end function
'------------------------------------
' Set Pose Activation
'------------------------------------
function FSet_pose_activation(in_matchClip)

	SetValue in_matchClip & ".actionclip.poseactive", True
	
	SetValue in_matchClip & ".actionclip.StaticKineState.sclx", 1	
	SetValue in_matchClip & ".actionclip.StaticKineState.scly", 1	
	SetValue in_matchClip & ".actionclip.StaticKineState.sclz", 1	
	
	SetValue in_matchClip & ".actionclip.StaticKineState.orix", 0
	SetValue in_matchClip & ".actionclip.StaticKineState.oriy", 0
	SetValue in_matchClip & ".actionclip.StaticKineState.oriz", 0
	
	SetValue in_matchClip & ".actionclip.StaticKineState.posx", 0
	SetValue in_matchClip & ".actionclip.StaticKineState.posy", 0
	SetValue in_matchClip & ".actionclip.StaticKineState.posz", 0
	
end function

'------------------------------------
' Get Active Object
'------------------------------------
function FGet_activeObject(in_matchType, in_rFoot, in_lFoot, in_cog, out_activeObject)

	select case in_matchType
		case 0
			set out_activeObject = in_rFoot
		case 1
			set out_activeObject = in_lFoot
		case 2
			set out_activeObject = in_cog
	end select
	
end function
'------------------------------------
' Get Clip Times
'------------------------------------
function FGet_clip_times(in_refClip, in_matchClip, out_refEnd, out_matchStart)
	
	out_refEnd = GetValue(in_refClip & ".actionclip.timectrl.resout") - 1
	out_matchStart = GetValue(in_matchClip & ".actionclip.timectrl.resin")

	'
	' Handle the case where the clips overlap -- in this
	' case, we want to match to the start of the "matchClip".
	'
	dim l_refStart
	l_refStart = GetValue(in_refClip & ".actionclip.timectrl.resin")
	if out_refEnd > out_matchStart AND l_refStart < out_matchStart then
		out_refEnd = out_matchStart
	end if
end function
'------------------------------------
' Create Transfer Elements
'------------------------------------
function FCreate_transfer_elements(in_refClip, in_matchClip, in_timeAend, in_timeBstart, in_activeObj, out_A, out_B, out_TransferNull, yRot)
	
	dim sRoot, At, Bt
	
	set sRoot = Application.ActiveProject.ActiveScene.Root
	
	'Get the two poses in space

	'read off the refclip: refclip (active) + matchclip(inactive)
	SetValue in_refClip & ".actionclip.active", True
	SetValue in_matchClip & ".actionclip.active", False
		
	set At = in_activeObj.Kinematics.Global.Transform(in_timeAend)

	'read off the matchclip: refclip (inactive) + matchclip(active)
	SetValue in_refClip & ".actionclip.active", False
	SetValue in_matchClip & ".actionclip.active", True

	set Bt = in_activeObj.Kinematics.Global.Transform(in_timeBstart)

	'now both clips active
	SetValue in_refClip & ".actionclip.active", True
	
	'Create the transfer null
	' NOTE: Can't use OM to create these objects, or else Redo won't work!
	' We also skip creating the display property, as that's just for debugging.
	dim bDebug
	bDebug = false

	set out_TransferNull = GetPrim("Null", "transferNull")
	if bDebug then
		out_TransferNull.AddProperty("Display Property")
		out_TransferNull.properties("display").wirecol.value = 253
	end if
	
	'Align transferNull with the start of the clip B
	out_TransferNull.Kinematics.Global.Transform = Bt
	
	'Create an align A and B marker nulls	
	
	set out_A = GetPrim("Null", "A")
	if bDebug then
		out_A.AddProperty("Display Property")
		out_A.properties("display").wirecol.value = 302
	end if
	out_A.Kinematics.Global.Transform = At

	set out_B = GetPrim("Null", "B")
	if bDebug then
		out_B.AddProperty("Display Property")
		out_B.properties("display").wirecol.value = 947
	end if
	out_B.Kinematics.Global.Transform = Bt

	FRT_match out_B, out_TransferNull 
	
	out_B.addChild out_TransferNull 
	
	FTransfer_to_A out_TransferNull, out_A, yRot
	
end function
'------------------------------------
' Transfer to A
'------------------------------------
function FTransfer_to_A(in_TransferNull, in_A, yRot)

	dim At, Tt, pos1
	
	set At = in_A.Kinematics.Global.Transform
	set Tt = in_TransferNull.Kinematics.Global.Transform

	SelectObj in_TransferNull, "BRANCH", True
	
	'match position
	set pos1 = xsimath.CreateVector3
	At.getTranslation pos1
	Translate , pos1.x, pos1.y, pos1.z, siAbsolute, siGlobal, siObj, siXYZ

	'match rotation on the xz plane
	FGet_y_rotation At, Tt, yRot
	Rotate , 0, yRot, 0, siObjCtr, siGlobal, siObj, siXYZ
	
end function
'------------------------------------
' Get Y rotation
'------------------------------------
' We're not completly matching the rotations because 
' small variations of the foot angle up or down 
' shouldn't be used to rotate the body 
'....................................
function FGet_y_rotation(in_t1, in_t2, out_yRot)
	
	dim pushOut, gv1, gv2, gt1, gt2, cp ,angle, sroot
	
	set sRoot = Application.ActiveProject.ActiveScene.Root	
	
	set pushOut = xsimath.CreateVector3 
	pushOut.set 5,0,0
	
	'get the pushOut vector from local cordinates to a
	'global position
	
	set gv1 = XSIMath.MapObjectPositionToWorldSpace(in_t1,pushOut)  
	set gv2 = XSIMath.MapObjectPositionToWorldSpace(in_t2,pushOut) 
	
	'get the global translation to bring both vectors back to the origion
	set gt1 = xsimath.CreateVector3 
	set gt2 = xsimath.CreateVector3 
	in_t1.getTranslation gt1 
	in_t2.getTranslation gt2 

	gv1.SubInPlace gt1 
	gv2.SubInPlace gt2 
	
	'now project those vectors onto the xz plane	
	gv1.y = 0
	gv2.y = 0
	
	'now get the angle between them
	
	angle = gv2.Angle(gv1)  

	'get the cross product
	set cp = xsimath.CreateVector3 
	cp.cross gv1, gv2
	
	out_yRot = XSIMath.RadiansToDegrees(angle)

	if cp.y > 0 then out_yRot = out_yRot * -1 
	
	exit function
	
	dim c1,c2,c3
	set c1 = SICreateCurve ("crvlist", 1, 1)
	SIAddPointOnCurveAtEnd c1, 0, 0, 0, False
	SIAddPointOnCurveAtEnd c1, gv1.x, gv1.y, gv1.z, False
	AddProp "Display Property", c1
	SetValue c1 & ".display.wirecol", 302

	set c2 = SICreateCurve ("crvlist", 1, 1)
	SIAddPointOnCurveAtEnd c2, 0, 0, 0, False
	SIAddPointOnCurveAtEnd c2, gv2.x, gv2.y, gv2.z, False
	AddProp "Display Property", c2
	SetValue c2 & ".display.wirecol", 947	
	
	set c3 = SICreateCurve ("crvlist", 1, 1)
	SIAddPointOnCurveAtEnd c3, 0, 0, 0, False
	SIAddPointOnCurveAtEnd c3, cp.x, cp.y, cp.z, False
	AddProp "Display Property", c3
	SetValue c3 & ".display.wirecol", 1	

end function
'--------------------------------------
' RT Match
'--------------------------------------
function FRT_match (in_source, in_target)

	dim rx, ry, rz	
	dim tx, ty, tz
	
	rx = GetValue(in_source & ".kine.global.rotx")
	ry = GetValue(in_source & ".kine.global.roty")
	rz = GetValue(in_source & ".kine.global.rotz")
	
	tx = GetValue(in_source & ".kine.global.posx")
	ty = GetValue(in_source & ".kine.global.posy")
	tz = GetValue(in_source & ".kine.global.posz")
	
	SelectObj in_target, "BRANCH"

	Rotate , rx, ry, rz, siAbsolute, siGlobal, siObj, siXYZ
	Translate , tx, ty, tz, siAbsolute, siGlobal, siObj, siXYZ
	
end function
'----------------------------------------------
' Set Clip Offset
'----------------------------------------------
function FSetClipOffset(in_B, in_TransferNull, in_matchClip, in_frame )

	'get the global transformation to go from B to transfernull

	set start = in_B.Kinematics.Global.Transform
	set goal = in_TransferNull.Kinematics.Global.Transform
	
	set startMatrix = xsimath.CreateMatrix4 
	start.GetMatrix4 startMatrix
	
	set goalMatrix = xsimath.CreateMatrix4 
	goal.GetMatrix4 goalMatrix
	
	'Inverse(start) * goal is our offset
		
	startMatrix.InvertinPlace
	
	set offsetMatrix = xsimath.CreateMatrix4 
	offsetMatrix.mul startMatrix, goalMatrix
	
	set offset = XSIMath.createtransform
	offset.SetMatrix4 offsetMatrix

	' Find the top "pose-offset-driven" object's global transform,
	' and apply the global offset we computed above.  Then set it
	' back and finally set the pose offset based on this information.
	set oObjs = SelectObjectsFromAction( in_matchClip, True )
	if typename( oObjs(0) ) <> "Empty" then
		set oTopXfo = oObjs(0).kinematics.global.transform( in_frame )
		oTopXfo.GetMatrix4 startMatrix
		startMatrix.MulInPlace offsetMatrix
		offset.SetMatrix4 startMatrix

		offset.GetRotationXYZAnglesValues x, y, z
		Rotate "B:" & oObjs(0), XSIMath.RadianstoDegrees(x), XSIMath.RadianstoDegrees(y), XSIMath.RadianstoDegrees(z), _
						siAbsolute, siGlobal, siObj, siXYZ
		offset.GetTranslationValues x, y, z
		Translate "B:" & oObjs(0), x, y, z, siAbsolute, siGlobal, siObj, siXYZ
		OffsetValueMap in_matchClip, siPoseOffsetClip, in_frame
	else
		logmessage XSIUtils.Translate( "Failed to Match Clips. No objects set for pose offset in ", "XSISCRIPTS" ) & in_matchClip
	end if

end function
'----------------------------------------------



'------------------------------------------------------------------------------
' NAME:			GetInputAndPasteActionProc
'
' DESCRIPTION:	Provides a dialogue for ApplyAction in which users can
'				specify a target start/end frame (along with the ripple option)
'				where the content of the action will be pasted.
'
'				The parameters are pretty much the same as Apply Action, except
'				for the 'considertime' param which is assumed to be True
'              
'------------------------------------------------------------------------------
sub GetInputAndPasteActionProc( io_source, io_target, io_copystart, io_copyend, io_start, io_end, io_ripple )
	Dim l_GeneratePset, l_nbfcvs, l_source, l_target, l_oActionSource, l_oSourceItem, l_oSource
	Dim l_copystart, l_copyend, l_srcstart, l_srcend

	' I keep this around so it's easier to regenerate a new pset/preset if needed
	l_GeneratePset = FALSE
	l_nbfcvs = 0

	if ( io_source.count = 0 ) then
		logmessage XSIUtils.Translate( "Please select an action source first", "XSISCRIPTS" )
		Err.Raise siErrCancelled
		exit sub
	end if

	'------------------------------------------------------------------------
	' If two items are selected the ApplyAction cmd expect the first to be
	' the source and the second to be the target
	'------------------------------------------------------------------------
	if ( io_source.count > 1 ) then
		l_source = io_source(0)
		l_target = io_source(1)
	else
		l_source = io_source
		l_target = ""
	end if

	'------------------------------------------------------------------------
	' Get the timespan of the action (in frames)...
	l_srcstart = GetValue( l_source & ".FrameStart" )
	l_srcend   = GetValue( l_source & ".FrameEnd" )


	'------------------------------------------------------------------------
	' Verify that there are fcurves in the source
	set l_oActionSource = Dictionary.GetObject( l_source )
	for each l_oSourceItem in l_oActionSource.SourceItems

		set l_oSource = l_oSourceItem.Source
		if typename(l_oSource) = "FCurve" then
			l_nbfcvs = l_nbfcvs + 1
		end if
	next

	'------------------------------------------------------------------------


	if ( l_nbfcvs = 0 ) then
		logmessage XSIUtils.Translate( "The selected action source doesn't contain any FCurve that can be pasted. Aborting", "XSISCRIPTS" )
		Err.Raise siErrCancelled
		exit sub
	end if

	' Create the pset for the dialogue
	Set l_SceneRoot = FGetSceneRoot
	if (l_GeneratePset = TRUE) then

		' Create a custom paste action property
		Set l_CPList = SIAddProp( "Custom_parameter_list", l_SceneRoot , , "PasteAction").value("Value")
		l_CustomParam = l_SceneRoot & "." & l_CPList
		
		SIAddCustomParameter l_CustomParam , "Source", siString, , , , , siPersistable+siSilent, , , "Source", "Source"

		SIAddCustomParameter l_CustomParam , "NbFcvs", siInt4, l_nbfcvs, 0, 1000000, , siPersistable+siSilent, 0, 100, "Nb Fcurves", "Nb Fcurves"
		SIAddCustomParameter l_CustomParam , "Start", siDouble, l_srcstart, -1000000, 1000000, , siPersistable+siSilent, 0, 100, "Start", "Start"
		SIAddCustomParameter l_CustomParam , "End",   siDouble, l_srcend,   -1000000, 1000000, , siPersistable+siSilent, 0, 100, "End",   "End"

		SIAddCustomParameter l_CustomParam , "Target", siString, , , , , siPersistable+siSilent, , , "Target", "Target"	
		SIAddCustomParameter l_CustomParam , "NewStart", siDouble, l_srcstart, -1000000, 1000000, , siPersistable+siSilent, 0, 100, "New Start", "New Start"
		SIAddCustomParameter l_CustomParam , "NewEnd",   siDouble, l_srcend,   -1000000, 1000000, , siPersistable+siSilent, 0, 100, "New End",   "New End"

		SIAddCustomParameter l_CustomParam, "Ripple", siBool, io_ripple, , , , siPersistable+siSilent, , ,"Ripple", "Ripple" 

	Else
		' We have a preset already for this custom pset, for which we have defined a SPDL file
		Set l_SceneRoot = FGetSceneRoot
		Set l_CPList = SIAddProp( "PasteAction", l_SceneRoot , , "Paste Action").value("Value")
		l_CustomParam = l_SceneRoot & "." & l_CPList

		SetValue l_CustomParam & ".NbFcvs", l_nbfcvs
		SetValue l_CustomParam & ".Start", l_srcstart
		SetValue l_CustomParam & ".End", l_srcend
		SetValue l_CustomParam & ".NewStart", l_srcstart
		SetValue l_CustomParam & ".NewEnd", l_srcend
		SetValue l_CustomParam & ".Ripple", io_ripple

	End if

	if l_source <> "" then
		SetValue l_CustomParam & ".Source", l_source
	end if
	if l_target <> "" then
		SetValue l_CustomParam & ".Target", l_target
	end if

	'Launch the dialog and wait for OK or Cancel to be pressed.
	If FWizardDialog(l_CustomParam,in_Title) = vbOk Then

		io_source	= GetValue( l_CustomParam & ".Source" )
		io_target	= GetValue( l_CustomParam & ".Target" )
		io_start	= GetValue( l_CustomParam & ".NewStart" )
		io_end		= GetValue( l_CustomParam & ".NewEnd" )
		io_ripple	= GetValue( l_CustomParam & ".Ripple" )

		' Changing the source action in and out allows to paste only
		' from that section (needs to be converted back from frames to seconds)
		l_copystart	= GetValue( l_CustomParam & ".Start" )
		l_copyend	= GetValue( l_CustomParam & ".End" )
		SetValue l_source & ".FrameStart", l_copystart 
		SetValue l_source & ".FrameEnd",   l_copyend   
		io_copystart = l_copystart
		io_copyend = l_copyend

		ApplyAction io_source, io_target, TRUE, io_start, io_end, io_ripple

		' Put the in/out of the source action as it was
		SetValue l_source & ".FrameStart", l_srcstart
		SetValue l_source & ".FrameEnd",   l_srcend


		DeleteObj l_CustomParam
	Else
		
		DeleteObj l_CustomParam
		Err.Raise siErrCancelled
	End If

end sub


'------------------------------------------------------------------------------
' NAME:			DeleteUnusedMixerTracksProc
'
' DESCRIPTION:	Finds all unused mixer tracks for a given set of objects, and
'				deletes them.
'
' INPUT:		list of objects to process
'
' OUTPUT:		none (it just deletes any unused tracks)
'              
'------------------------------------------------------------------------------
sub DeleteUnusedMixerTracksProc( in_InputObjs )
	dim oColl, oElem, oModel
	set oColl = CreateObject( "XSI.Collection" )
	oColl.Unique = true
	for each oElem in in_InputObjs
		' Get the mixer for this selection.
		if oElem.type = "#model" then
			set oModel = oElem
		else
			set oModel = SIGetModel( oElem )
		end if
		AddEmptyTracks oModel, ".Mixer.Tracks.AnimTracks", oColl
		AddEmptyTracks oModel, ".Mixer.Tracks.ShapeTracks", oColl
		AddEmptyTracks oModel, ".Mixer.Tracks.AudioTracks", oColl
		AddEmptyTracks oModel, ".Mixer.Tracks.FileCacheTracks", oColl
	next

	if oColl.count > 0 then
		DeleteObj oColl
	end if
end sub


'------------------------------------------------------------------------------
' NAME:			AddEmptyTracks
'
' DESCRIPTION:	Adds any empty tracks it finds of a given track type to a collection.
'
' INPUT:		in_obj			the object from which to find tracks
'				in_trackpath	relative path to the tracks, i.e. ".Mixer.Tracks.AnimTracks"
'				io_coll			the collection to which to add empty tracks
'
' OUTPUT:		none (it adds the empty tracks to io_coll)
'              
'------------------------------------------------------------------------------
sub AddEmptyTracks( in_obj, in_trackpath, io_coll )
	dim l_Tracks, oTrack, l_Clips
	set l_Tracks = EnumElements( in_obj & in_trackpath, TRUE )
	if typename( l_Tracks ) <> "Nothing" then
		for each oTrack in l_Tracks
			set l_Clips = EnumElements( oTrack & ".ClipList", TRUE )
			if typename( l_Clips ) = "Nothing" then
				io_coll.Add oTrack
			else
				dim oClip
				for each oClip in l_Clips
					if oClip.type = "AnimActionCompoundClip" OR _
						oClip.type = "ShapeActionCompoundClip" then
						AddEmptyTracks oClip, ".tracks", io_coll
					end if
				next
			end if
		next
	end if
end sub

'------------------------------------------------------------------------------
' NAME:			OffloadActionProc
'
' DESCRIPTION:	Offload an action
'
' INPUT:		in_obj			the actions to offload
'
'------------------------------------------------------------------------------
sub OffloadActionProc( in_objs )
	Dim oAction
	
	For each oAction in in_objs
		' Filter out the action from the input list. 
		' These are the one that can be offloaded.
		If oAction.Type = "Action" Then
			' make sure the storage is external
			If oAction.storage.value = 0 Then
				SIMsgBox XSIUtils.Translate( IDS_OFFLOAD_ACTION_ERROR, "XSISCRIPTS", oAction), vbOKOnly or vbExclamation, "Warning", vbOK
				Err.Raise siErrCancelled
			Else		
				oAction.Offload()
			End if
		End if 
	Next
end sub 

'------------------------------------------------------------------------------
' NAME:			PartialOffloadActionProc
'
' DESCRIPTION:	Partially Offload an action
'
' INPUT:		in_obj			the actions to offload
'
'------------------------------------------------------------------------------
sub PartialOffloadActionProc( in_objs, in_start, in_end, in_remember )
	Dim oAction
	
	For each oAction in in_objs
		' Filter out the action from the input list. 
		' These are the one that can be offloaded.
		If oAction.Type = "Action" Then
			' make sure the storage is external
			If oAction.storage.value = 0 Then
				SIMsgBox XSIUtils.Translate( IDS_OFFLOAD_ACTION_ERROR, "XSISCRIPTS", oAction), vbOKOnly or vbExclamation, "Warning", vbOK
				Err.Raise siErrCancelled
			Else
				oAction.PartialOffload in_start, in_end, in_remember 
			End if
		End if 
	Next
end sub 

'------------------------------------------------------------------------------
' NAME:			ReloadActionProc
'
' DESCRIPTION:	Reload an action
'
' INPUT:		in_obj			the actions to offload
'
'------------------------------------------------------------------------------
sub ReloadActionProc( in_objs )
	Dim oAction

	for each oAction in in_objs
		if oAction.Type = "Action" Then
			oAction.Reload()
		end if 
	next
end sub 

'------------------------------------------------------------------------------
' NAME:			FindNextClipTimeCtrl
'
' DESCRIPTION:	Find on the same track the next clip of the specified clip
'				and if found, return its TimeControl
'
' INPUT:		in_Clip			the clip to search its next clip
'
'------------------------------------------------------------------------------
function FindNextClipTimeCtrl( in_Clip )
	dim l_NextClipTimeCtrl, l_ParentClips
	dim l_ClipTimeCtrl, l_ClipEnd, l_ClipStart
	dim l_CurrentClipIndex, l_CurrentTimeCtrl
	
	l_NextClipTimeCtrl = ""
	
	' Get all the clips on the current track
	set l_ParentClips = in_Clip.Parent.Clips
	
	'Find the next clip and, if existing, get its time control
	if l_ParentClips.Count > 1 then
		
		l_ClipTimeCtrl = in_Clip.TimeControl
		l_ClipEnd = FGetClipEnd( l_ClipTimeCtrl )
		
		for l_CurrentClipIndex = 0 to l_ParentClips.Count-1
			' Skip the current clip
			if l_ParentClips.Item( l_CurrentClipIndex ).IsEqualTo( in_Clip ) = False then
				l_CurrentTimeCtrl = l_ParentClips.Item( l_CurrentClipIndex ).TimeControl
				' It is on the current clip's right ?
				l_ClipStart = FGetClipStart( l_CurrentTimeCtrl )
				if round( l_ClipStart ) >= round( l_ClipEnd ) then
					' If it's the first clip found, remember it
					if l_NextClipTimeCtrl = "" then
						l_NextClipTimeCtrl = l_CurrentTimeCtrl
					' Otherwise, verify if our clip is nearer the current clip than the latest one we found
					elseif l_ClipStart < FGetClipStart( l_NextClipTimeCtrl ) then
						l_NextClipTimeCtrl = l_CurrentTimeCtrl
					end if
				end if
			end if
		next
	end if
	
	FindNextClipTimeCtrl = l_NextClipTimeCtrl
end function

'------------------------------------------------------------------------------
' NAME:			FindPreviousClipTimeCtrl
'
' DESCRIPTION:	Find on the same track the previous clip of the specified clip
'				and if found, return its TimeControl
'
' INPUT:		in_Clip			the clip to search its previous clip
'
'------------------------------------------------------------------------------
function FindPreviousClipTimeCtrl( in_Clip )
	dim l_PrevClipTimeCtrl, l_ParentClips
	dim l_ClipTimeCtrl, l_ClipStart, l_ClipEnd
	dim l_CurrentClipIndex, l_CurrentTimeCtrl
	
	l_PrevClipTimeCtrl = ""
	
	' Get all the clips on the current track
	set l_ParentClips = in_Clip.Parent.Clips
	
	'Find the previous clip and, if existing, get its time control
	if l_ParentClips.Count > 1 then
			
		l_ClipTimeCtrl = in_Clip.TimeControl
		l_ClipStart = FGetClipStart( l_ClipTimeCtrl )
			
		for l_CurrentClipIndex = 0 to l_ParentClips.Count-1
			' Skip the current clip
			if l_ParentClips.Item( l_CurrentClipIndex ).IsEqualTo( in_Clip ) = False then
				l_CurrentTimeCtrl = l_ParentClips.Item( l_CurrentClipIndex ).TimeControl
				' It is on the current clip's left ?
				l_ClipEnd = FGetClipEnd( l_CurrentTimeCtrl )
				if round( l_ClipEnd ) <= round( l_ClipStart ) then
					' If it's the first clip found, remember it
					if l_PrevClipTimeCtrl = "" then
						l_PrevClipTimeCtrl = l_CurrentTimeCtrl
					' Otherwise, verify if our clip is nearer the current clip than the latest one we found
					elseif l_ClipEnd > FGetClipEnd( l_PrevClipTimeCtrl ) then
						l_PrevClipTimeCtrl = l_CurrentTimeCtrl
					end if
				end if
			end if
		next
	end if
	
	FindPreviousClipTimeCtrl = l_PrevClipTimeCtrl
end function


'------------------------------------------------------------------------------
' NAME:        FGetClipStart
'
' INPUT:       in_TimeCtrl.........Clip's Time Control Property

'
' DESCRIPTION: Returns the start frame of clip
'------------------------------------------------------------------------------
Function FGetClipStart( in_TimeCtrl )
	if GetValue( in_TimeCtrl ).Parent.Type = "camerashotclip" Then
		FGetClipStart = GetValue( in_TimeCtrl & ".sequencein")
	else
		FGetClipStart = GetValue( in_TimeCtrl & ".startoffset")
	end if
end Function

'------------------------------------------------------------------------------
' NAME:        FSetClipStart
'
' INPUT:       in_TimeCtrl.........Clip's Time Control Property

'
' DESCRIPTION: Sets the start frame of clip
'------------------------------------------------------------------------------
Function FSetClipStart( in_TimeCtrl, in_newVal )
	if GetValue( in_TimeCtrl ).Parent.Type = "camerashotclip" Then
		SetValue in_TimeCtrl & ".sequencein", in_newVal 
	else
		SetValue in_TimeCtrl & ".startoffset", in_newVal 
	end if
end Function

'------------------------------------------------------------------------------
' NAME:        FGetClipEnd
'
' INPUT:       in_TimeCtrl.........Clip's Time Control Property

'
' DESCRIPTION: Returns the end frame of clip
'------------------------------------------------------------------------------
Function FGetClipEnd( in_TimeCtrl )
	if GetValue( in_TimeCtrl ).Parent.Type = "camerashotclip" Then
		FGetClipEnd = GetValue( in_TimeCtrl & ".sequenceout")
	else
		FGetClipEnd = GetValue( in_TimeCtrl & ".endtime")
	end if
end Function

'------------------------------------------------------------------------------
' NAME:        FSetClipEnd
'
' INPUT:       in_TimeCtrl.........Clip's Time Control Property

'
' DESCRIPTION: Sets the end frame of clip
'------------------------------------------------------------------------------
Function FSetClipEnd( in_TimeCtrl, in_newVal )
	if GetValue( in_TimeCtrl ).Parent.Type = "camerashotclip" Then
		SetValue in_TimeCtrl & ".sequenceout", in_newVal 
	else
		SetValue in_TimeCtrl & ".endtime", in_newVal 
	end if
end Function


'------------------------------------------------------------------------------
' NAME:        FGetClipIn
'
' INPUT:       in_TimeCtrl.........Clip's Time Control Property

'
' DESCRIPTION: Returns the scene start frame of clip
'------------------------------------------------------------------------------
Function FGetClipIn( in_TimeCtrl )
	if GetValue( in_TimeCtrl ).Parent.Type = "camerashotclip" Then
		FGetClipIn = GetValue( in_TimeCtrl & ".scenein")
	else
		FGetClipIn = GetValue( in_TimeCtrl & ".clipin")
	end if
end Function

'------------------------------------------------------------------------------
' NAME:        FSetClipIn
'
' INPUT:       in_TimeCtrl.........Clip's Time Control Property

'
' DESCRIPTION: Sets the scene start frame of clip
'------------------------------------------------------------------------------
Function FSetClipIn( in_TimeCtrl, in_newVal )
	if GetValue( in_TimeCtrl ).Parent.Type = "camerashotclip" Then
		SetValue in_TimeCtrl & ".scenein", in_newVal 
	else
		SetValue in_TimeCtrl & ".clipin", in_newVal 
	end if
end Function

'------------------------------------------------------------------------------
' NAME:        FGetClipOut
'
' INPUT:       in_TimeCtrl.........Clip's Time Control Property

'
' DESCRIPTION: Returns the scene end frame of clip
'------------------------------------------------------------------------------
Function FGetClipOut( in_TimeCtrl )
	if GetValue( in_TimeCtrl ).Parent.Type = "camerashotclip" Then
		FGetClipOut = GetValue( in_TimeCtrl & ".sceneout")
	else
		FGetClipOut = GetValue( in_TimeCtrl & ".clipout")
	end if
end Function

'------------------------------------------------------------------------------
' NAME:        FSetClipOut
'
' INPUT:       in_TimeCtrl.........Clip's Time Control Property

'
' DESCRIPTION: Sets the scene end frame of clip
'------------------------------------------------------------------------------
Function FSetClipOut( in_TimeCtrl, in_newVal )
	if GetValue( in_TimeCtrl ).Parent.Type = "camerashotclip" Then
		SetValue in_TimeCtrl & ".sceneout", in_newVal
	else
		SetValue in_TimeCtrl & ".clipout", in_newVal
	end if
end Function

'------------------------------------------------------------------------------
' NAME:			DeleteUnusedCamSequencerTracksProc
'
' DESCRIPTION:	Finds all unused tracks for camera sequencer, and
'				deletes them.
'
'
' OUTPUT:		none (it just deletes any unused tracks)
'              
'------------------------------------------------------------------------------
sub DeleteUnusedCamSequencerTracksProc( )
	dim oColl, oElem, oModel
	set oColl = CreateObject( "XSI.Collection" )
	oColl.Unique = true
	AddEmptyTracks ActiveSceneRoot, ".Camera_Sequencer.Tracks.CameraShotTracks", oColl
	if oColl.count > 0 then
		DeleteObj oColl
	end if
end sub

'******************************************************************************
' END OF FILE
'******************************************************************************
