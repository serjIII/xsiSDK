' Must appear in a file before any other source code statements.
option explicit


'Declare Constants
const DefaultCharSetName = "CharKeySet"
const DefaultSubCharSetName = "SubCharKeySet"


'******************************************************************************
' String Constants (used to translate)
'******************************************************************************
const IDS_NEW_CHARACTER_KEY_SET_TITLE			= 1051
const IDS_NEW_CHARACTER_KEY_SET_MSG				= 1052


' lucer :  helper to get the list of parameters to add to a character set
Function CharSet_DoGetParamListToAdd( in_ObjColl )
	Dim TempColl, oCollItem, oTempString, MarkingArray, MarkingString, Name
	' use marked parameters if the user has marked anything
	MarkingArray = GetMarking()
	If ( Not IsEmpty( MarkingArray ) ) Then
		MarkingString = Join( MarkingArray, "," )
	Else
		MarkingString = ""
	End If 
	'LogMessage "Using " + MarkingString

	' filter out the parameters we don't want if marking wasn't used
	If ( IsEmpty( MarkingArray ) ) Then
    	Set TempColl = in_ObjColl.FindObjectsByMarkingAndCapabilities( MarkingString, siKeyable  )
	    'LogMessage TempColl.GetAsText()

'		For Each oCollItem In TempColl
'			Name = oCollItem	' get it as a string
'			if (	InStr( name, ".sclx" )	<> 0 _
'				OR	InStr( name, ".scly" )	<> 0 _
'				OR	InStr( name, ".sclz" ) )  Then
'				TempColl.Remove( oCollItem )
'			End If
'		Next
	Else
	    ' take everything that is marked
	    Set TempColl = in_ObjColl.FindObjectsByMarkingAndCapabilities( MarkingString, siPersistable  )
	    ' really debatable, but at this point if the parameters are not keyable
	    ' then we will make them keyable, otherwise users will not understand why the parameters
	    ' are not getting keyed
		For Each oCollItem In TempColl
		    if ( typename( oCollItem ) = "Parameter" And Not oCollItem.Keyable And oCollItem.Animatable ) Then
    	        if ( Not oCollItem.Capabilities And siNonKeyableVisible ) Then
    	            oCollItem.Keyable = true
    	        End If
                LogMessage "Made " & oCollItem & " Keyable" 
            End If
		Next
	    
	End If
	
	
	Set CharSet_DoGetParamListToAdd = TempColl
End Function


' lucer : helper to get the list of models used by objects in a selection list
Function CharSet_GetAllModelsUsed( in_SelColl )
	Dim ModelColl, oSelObj
	Set ModelColl = CreateObject("XSI.Collection")
	ModelColl.Unique = True

	'On Error Resume Next
	For Each oSelObj in in_SelColl
		if (  typename( oSelObj ) = "Model" ) Then
			ModelColl.Add oSelObj
		else
			ModelColl.Add oSelObj.Model
		End If 
	Next

	Set CharSet_GetAllModelsUsed = ModelColl
End Function 

' lucer : mark all these properties as character sets
Sub MarkAllAsCharacterSets( in_CharsetCollection ) 
	Dim oCollItem

	For Each oCollItem in in_CharsetCollection
		'LogMessage oCollItem
		SetValue oCollItem & ".IsCharacterKeySet", True
	Next

End Sub

' lucer : helper to get the list of objects in a collection that are under a given model
Function CharSet_FilterCollByModel( in_oModel, in_SelColl )

	Dim ObjectsInThisModelColl, oSelObj
	Set ObjectsInThisModelColl = CreateObject("XSI.Collection")
	ObjectsInThisModelColl.Unique = True

	For Each oSelObj in in_SelColl 
		if ( typename( oSelObj ) = "Model" ) Then
			if ( oSelObj = in_oModel ) Then
				ObjectsInThisModelColl.Add( oSelObj )
			End If
		Elseif ( oSelObj.Model = in_oModel ) Then
				ObjectsInThisModelColl.Add( oSelObj )
		End If
	Next 

	Set CharSet_FilterCollByModel = ObjectsInThisModelColl
End Function



'==============================================================================
' == GetNewCharSetName
'==============================================================================
Function GetNewCharSetName( in_Name, in_Default )
	if ( Len( in_Name ) = 0 ) Then

		Dim sTitle, sPrompt
		sTitle = XSIUtils.Translate( IDS_NEW_CHARACTER_KEY_SET_TITLE, "XSISCRIPTS" )
		sPrompt = XSIUtils.Translate( IDS_NEW_CHARACTER_KEY_SET_MSG, "XSISCRIPTS" )
		
		GetNewCharSetName = InputBox( sPrompt, sTitle, in_Default )
	Else
		GetNewCharSetName = in_Name
	End If
End Function



'==============================================================================
' == CreateCharacterSetCommand
' -- lucer, july 2006
'==============================================================================
' lucer : command to create a character set
Function CreateCharacterSetCommand( in_SelColl, in_Name )

	Dim NewCharSetCol, ModelColl, oModel, ObjectsInThisModelColl, oNewPropColl
	
	in_Name = GetNewCharSetName( in_Name, DefaultCharSetName )
	if ( Len( in_Name ) = 0 ) Then 
		Exit Function
	End If
	
	Set NewCharSetCol = CreateObject("XSI.Collection")

	if ( in_SelColl.count = 0 ) Then
		' trivial case - add character key scene to scene root
		AddProp "Custom_parameter_list", ActiveSceneRoot, siNodePropagation, in_Name, oNewPropColl
		NewCharSetCol.Add oNewPropColl(0)
	else
		' build a list of all the models in the selection
		
		Set ModelColl = CharSet_GetAllModelsUsed( in_SelColl )

		' now for each model..
		For Each oModel in ModelColl

			Set ObjectsInThisModelColl = CharSet_FilterCollByModel( oModel, in_SelColl )

			if ( ObjectsInThisModelColl.count > 0 ) Then
				Dim oKeyableParamColl
				' add the character set!
				AddProp "Custom_parameter_list", oModel, siNodePropagation, in_Name, oNewPropColl
				NewCharSetCol.Add oNewPropColl(0)

				set oKeyableParamColl = CharSet_DoGetParamListToAdd( ObjectsInThisModelColl )
				if ( oKeyableParamColl.count > 0 ) Then
					AddProxyParam oNewPropColl, oKeyableParamColl
				End If
				
				ObjectsInThisModelColl.RemoveAll
			End If
		Next 
	End If

	MarkAllAsCharacterSets( NewCharSetCol )
	Set CreateCharacterSetCommand = NewCharSetCol

	' dump the collection 
	if ( NewCharSetCol.count > 0 ) Then LogMessage "Created " + NewCharSetCol.GetAsText()
	
	' set as current character set
	if ( NewCharSetCol.count > 0 )	Then
		SetCurrentCharacterKeySetCommand NewCharSetCol( 0 ) 
	End If
	

End Function 

'==============================================================================
' == SetCurrentCharacterKeySetCommand
' -- lucer, july 2006
'==============================================================================
Sub SetCurrentCharacterKeySetCommand( in_Item )
	dim ItemAsString
	ItemAsString = in_Item
	SetValue ActiveProject.ActiveScene & ".CurrentCharacterKeySet", ItemAsString
End	Sub

'==============================================================================
' == GetCurrentCharacterKeySetCommand
' -- lucer, july 2006
' exposed as a command
'==============================================================================
Function GetCurrentCharacterKeySetCommand()
	set GetCurrentCharacterKeySetCommand = NOTHING
	Dim CurCharKeySetName, oCurCharKeySet
	CurCharKeySetName = GetValue( ActiveProject.ActiveScene & ".CurrentCharacterKeySet" )
	CurCharKeySetName = Trim( CurCharKeySetName )
	If ( Len( CurCharKeySetName ) > 0 ) Then
		set oCurCharKeySet = Dictionary.GetObject( CurCharKeySetName, false )
		if ( Not IsEmpty( oCurCharKeySet) And typename( oCurCharKeySet ) = "CustomProperty" ) Then 
			set GetCurrentCharacterKeySetCommand =	oCurCharKeySet
		End If
	End If
End Function

'==============================================================================
' == CreateSubCharacterSetCommand
' -- lucer, july 2006
' command to create a sub-character set
'==============================================================================
Function CreateSubCharacterSetCommand( in_CharSet, in_SelColl, in_Name )
	Dim oNewSubCharSetColl, oKeyableParamColl, ObjectsInThisModelColl, oNewPropColl
	Set oNewSubCharSetColl = CreateObject("XSI.Collection")

	On Error Resume Next
	if (  typename( in_CharSet ) = "String" ) Then 
		if ( Len( in_CharSet ) > 0 ) Then
			Set in_CharSet = GetValue( in_CharSet )	
		Else 
			Set in_CharSet = GetCurrentCharacterKeySetCommand()
		End If
	elseif (  typename( in_CharSet ) = "CollectionItem"  ) Then 
		Set in_CharSet = GetValue( 	in_CharSet.Value )
	End If

	if ( IsEmpty( in_CharSet) OR typename( in_CharSet ) <> "CustomProperty" ) Then 
		LogMessage "Must receive Character Set as first parameter" 
		LogMessage "Type was " & typename( in_CharSet )
		Exit Function
	End If

	in_Name = GetNewCharSetName( in_Name, DefaultSubCharSetName )
	if ( Len( in_Name ) = 0 ) Then 
		Exit Function
	End If
	

	AddProp "Custom_parameter_list", in_CharSet, siNodePropagation, in_Name, oNewPropColl
	oNewSubCharSetColl.Add oNewPropColl( 0 )
	
	MarkAllAsCharacterSets( oNewSubCharSetColl )
	Set CreateSubCharacterSetCommand = oNewSubCharSetColl
	
	Set ObjectsInThisModelColl = CharSet_FilterCollByModel( in_CharSet.Model, in_SelColl )

	If ( ObjectsInThisModelColl.count > 0 ) Then
		Set oKeyableParamColl = CharSet_DoGetParamListToAdd( ObjectsInThisModelColl )

		if ( oKeyableParamColl.count > 0 ) Then
			' start from the main char set, and remove the proxy list anywhere we find it
			' remove the proxy params from the parent, and its parent, ext

			AddProxyParam oNewSubCharSetColl(0), oKeyableParamColl
		End If
	End If

	' set as current character set
	if ( oNewSubCharSetColl.count > 0 )	Then
		SetCurrentCharacterKeySetCommand oNewSubCharSetColl( 0 ) 
	End If
	

End Function


'==============================================================================
' == GetAllCharacterKeySetsCommand
' -- lucer, july 2006
'==============================================================================
Sub RecursiveFindCharKeySets( oCharSetColl, oParent )
	Dim Child, Children
	set Children = oParent.NestedObjects
	For Each Child in Children
		If ( Child.IsClassOf( siCustomPropertyID ) ) Then		
			If ( GetValue( Child & ".IsCharacterKeySet" ) = True ) Then
				oCharSetColl.Add( Child )
			End If 

			If ( Child.NestedObjects.Count > 0 ) Then
				RecursiveFindCharKeySets oCharSetColl, Child 
			End If
		End If
	Next

End Sub
Function GetAllCharacterKeySetsCommand

	Dim oCharSetColl, oSceneRoot, oFilteredColl, oCustomProp
	Set oCharSetColl = CreateObject("XSI.Collection")
	
	' search the scene
	set oSceneRoot =  Application.ActiveSceneRoot
	set oFilteredColl = oSceneRoot.Properties.Filter( siCustomParamSet ) 
	For Each oCustomProp in oFilteredColl 
		if ( GetValue( oCustomProp & ".IsCharacterKeySet" ) = True ) Then
			oCharSetColl.Add( oCustomProp )
			RecursiveFindCharKeySets oCharSetColl, oCustomProp
		End If 
	Next

	' search all models
	Dim oModelCol, oModel
	Set oModelCol = oSceneRoot.Models
	For Each oModel in oModelCol
		Set oFilteredColl = oModel.Properties.Filter( siCustomParamSet ) 
		For Each oCustomProp in oFilteredColl 
			if ( GetValue( oCustomProp & ".IsCharacterKeySet" ) = True ) Then
				oCharSetColl.Add( oCustomProp )
				RecursiveFindCharKeySets oCharSetColl, oCustomProp
			End If 
		Next
	Next 

	set GetAllCharacterKeySetsCommand =	  oCharSetColl
End Function

'==============================================================================
' == SaveKeyOnCharacterKeySetCommand
' -- lucer, july 2006
'==============================================================================
Sub SaveKeyOnCharacterKeySetCommand
	Dim oCharKeySet, oColl
	set oCharKeySet = GetCurrentCharacterKeySetCommand()

	Dim keytime, l_ModifiedOnly
	keytime = CDbl(GetValue( "Project.Data.PlayControl.Key" ))
	if ( Not oCharKeySet Is Nothing ) Then
		l_ModifiedOnly   = GetValue( "preferences.animation.savekeymodified" )
		SaveKeyOnKeyable oCharKeySet, keytime,,,, l_ModifiedOnly
	else
		LogMessage "No current character key set for SaveKey", siError
	End If
End Sub

'==============================================================================
' == SaveZeroKeyOnCharacterKeySetCommand
' -- lucer, july 2006
'==============================================================================
Sub SaveZeroKeyOnCharacterKeySetCommand
	Dim oCharKeySet, oColl
	set oCharKeySet = GetCurrentCharacterKeySetCommand()

	Dim keytime, l_ModifiedOnly
	keytime = CDbl(GetValue( "Project.Data.PlayControl.Key" ))
	if ( Not oCharKeySet Is Nothing ) Then
		l_ModifiedOnly   = GetValue( "preferences.animation.savekeymodified" )
		SaveKeyOnKeyable oCharKeySet, keytime,0,,, l_ModifiedOnly
	else
		LogMessage "No current character key set for SaveKey", siError
	End If
End Sub

'==============================================================================
' == RemoveKeyOnCharacterKeySetCommand
' -- lucer, july 2006
'==============================================================================
Sub RemoveKeyOnCharacterKeySetCommand
	Dim oCharKeySet, oColl
	set oCharKeySet = GetCurrentCharacterKeySetCommand()

	Dim keytime
	keytime = CDbl(GetValue( "Project.Data.PlayControl.Key" ))
	if ( Not oCharKeySet Is Nothing ) Then
		RemoveKeyOnKeyable oCharKeySet, keytime
	End If
End Sub


'==============================================================================
' == InspectCurrentCharacterKeySetCommand
' -- lucer, july 2006
'==============================================================================
Sub InspectCurrentCharacterKeySetCommand
	Dim oCharKeySet, oColl
	set oCharKeySet = GetCurrentCharacterKeySetCommand()

	if ( Not oCharKeySet Is Nothing ) Then
		InspectObj oCharKeySet
	End If
End Sub

'==============================================================================
' == OpenAnimationEditorOnCurrentCharacterKeySetCommand
' -- lucer, july 2006
'==============================================================================
Sub OpenAnimationEditorOnCurrentCharacterKeySetCommand
	Dim oCharKeySet, oColl
	set oCharKeySet = GetCurrentCharacterKeySetCommand()

	if ( Not oCharKeySet Is Nothing ) Then
		OpenAnimationEditor , oCharKeySet
	End If
End Sub

'==============================================================================
' == DeleteCurrentCharacterKeySet
' -- lucer, july 2006
'==============================================================================
Sub DeleteCurrentCharacterKeySetCommand
	Dim oCharKeySet, oColl
	set oCharKeySet = GetCurrentCharacterKeySetCommand()

	if ( Not oCharKeySet Is Nothing ) Then
		DeleteObj oCharKeySet
		SetCurrentCharacterKeySet "" 
	End If
End Sub


'==============================================================================
' == AddProxyParameterToCharacterKeySetCommand
' -- lucer, july 2006
'==============================================================================
Sub AddProxyParameterToCharacterKeySetCommand( in_CharSet, In_Params )

	On Error Resume Next
	if (  typename( in_CharSet ) = "String" ) Then 
		if ( Len( in_CharSet ) > 0 ) Then
			Set in_CharSet = GetValue( in_CharSet )	
		Else 
			Set in_CharSet = GetCurrentCharacterKeySetCommand()
		End If
	elseif (  typename( in_CharSet ) = "CollectionItem"  ) Then 
		Set in_CharSet = GetValue( 	in_CharSet.Value )
	End If

	if ( IsEmpty( in_CharSet) OR typename( in_CharSet ) <> "CustomProperty" ) Then 
		LogMessage "Must receive Character Set as first parameter" 
		LogMessage "Type was " & typename( in_CharSet )
		Exit Sub
	End If

	AddProxyParam in_CharSet, In_Params 

End Sub


'==============================================================================
' == CollectSubObjects - helper for SelectObjectsFromCharacterKeySetCommand
' -- lucer, nov 2006
'==============================================================================
Sub CollectObjects( in_CharSet, oCollection )

    Dim oParam, oRealParam

    For Each oParam in in_CharSet.Parameters
	    LogMessage oParam
	    if ( Typename( oParam ) = "ProxyParameter" ) Then
		    Set oRealParam = oParam.MasterParameter
		    logmessage oRealParam
		    oCollection.Add oRealParam.Parent3DObject
	    End If

    Next

    Dim oChild
    For Each oChild in in_CharSet.NestedObjects 
        If ( typename( oChild ) = "CustomProperty" ) Then
            CollectObjects oChild, oCollection 
        End If
    Next

End Sub

'==============================================================================
' == SelectObjectsFromCharacterKeySetCommand
' -- lucer, nov 2006
'==============================================================================
Sub SelectObjectsFromCharacterKeySetCommand( in_CharSet )
	On Error Resume Next
	if (  typename( in_CharSet ) = "String" ) Then 
		if ( Len( in_CharSet ) > 0 ) Then
			Set in_CharSet = GetValue( in_CharSet )	
		Else 
			Set in_CharSet = GetCurrentCharacterKeySet()
		End If
	elseif (  typename( in_CharSet ) = "CollectionItem"  ) Then 
		Set in_CharSet = GetValue( 	in_CharSet.Value )
	End If


    Dim oCollection
    Set oCollection = CreateObject( "XSI.Collection" )
    oCollection.Unique = True
    
    CollectObjects in_CharSet, oCollection 

    if ( oCollection.Count > 0 ) Then
        SelectObj oCollection
    Else
        DeselectAll
    End If
End Sub

'==============================================================================
Sub TestCode
' setup
NewScene, false
CreatePrim "Sphere", "MeshSurface"
Duplicate "sphere", , 2, 1, 1, 0, 0, 1, 0, 1, , , , , , , , , , , 0
CopyPaste "sphere1", , "sphere", 1
SelectObj "sphere"
CreateModel

'DeleteObj "Model.CharKeySet"
SelectObj "Model.sphere"

' warning! selecting an object after ClearMarking
' when the transform tool is active actually re-sets the marking
ClearMarking	

' dump marking
dim MarkingArray
MarkingArray = GetMarking()
if ( Not IsEmpty( MarkingArray ) ) Then LogMessage "Marking:" & Join( MarkingArray, "," )


dim SelColl
set SelColl = CreateObject("XSI.Collection")
SelColl.Items = "Model.sphere,Model.sphere1"

' add a character set
dim NewCharSet
set NewCharSet = CreateCharacterSet( SelColl )( 0 )
LogMessage NewCharSet

SetMarking "kine.local.pos"

dim NewSubCharSet
Set NewSubCharSet = CreateObject("XSI.Collection")
set NewSubCharSet = CreateSubCharacterSet( NewCharSet, SelColl )
LogMessage NewSubCharSet( 0 ) & " of type " & typename( NewSubCharSet( 0 ) )

' not refreshing?
SetMarking "kine.local.rot"

dim NewSubCharSet2
set NewSubCharSet2 = CreateSubCharacterSet( NewSubCharSet(0), SelColl )
End Sub 
