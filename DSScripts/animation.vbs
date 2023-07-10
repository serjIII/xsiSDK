'******************************************************************************
'
' File supervisor : Rejean Gagne
' Date : July 2001
' (c) Copyright 2001 Softimage
'
' $Archive:  $
' $Revision:  $  $Date:  $
' Checkin by: $Author:  $
'
' @doc
' @module   animation.vbs | VB Script 
'
'******************************************************************************

' Must appear in a file before any other source code statements.
option explicit

'******************************************************************************
' String Constants (used to translate)
'******************************************************************************
const IDS_CREATE_MARKINGSET_ERROR_MSG			= 1043
const IDS_CREATE_MARKINGSET_ERROR_TITLE			= 1044

'******************************************************************************
' HELPER FUNCTIONS
'******************************************************************************

const cSelect = 0
const cMute   = 1
const cUnMute = 2
const cToggle = 3
const cDelete = 4



'------------------------------------------------------------------------------
' NAME:     FWizardDialog
'
' INPUT:    in_customparam              - custom param to inspect
' INPUT:    in_title                    - dialog title
' RETURN:   vbOk | vbCancel 
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





Dim oSel, oObj, oSet, aMarking, i, keytime

'Declare Constants
const szMarkingSet = "MarkingSet"


'------------------------------------------------------------------------------
' NAME:     ActivateMarkingSetProc
'
' INPUT:    in_sel - selection on which to work
'
' DESCRIPTION: Marks the marking sets, if any, on the selected objects
'------------------------------------------------------------------------------
sub ActivateMarkingSetProc( in_sel )
    SetMarking szMarkingSet
end sub

'------------------------------------------------------------------------------
' NAME:     SetKeyUsingMarkingSetProc 
'
' INPUT:    in_sel - selection on which to work
' INPUT:    in_bBranch - SetKeys on all nodes of a branch selected object
'
' DESCRIPTION: Issue SetKey commands on parameters based on marking sets, if any
' Note: This script is call by a UI ONLY command, because we could not anyway
' call it from scripting using something else than the selection, given that
' Savekey takes the selection by default (and unless i concatenate the
' selection with all the marked params, i cannot just pass the _in_sel items... arg)
'------------------------------------------------------------------------------
sub SetKeyUsingMarkingSetProc( in_sel, in_bBranch )
    Dim lSaveKeyCommand, oObj, oChildren, oColl, oMarking, szMarking, oKeyableColl

    ' Make Sure we have a valid selection
    If IsEmpty( in_sel ) Or TypeName( in_sel ) = "Nothing" Or in_sel.count = 0 Then
        logmessage "You need to select an object first", siError
        Exit Sub
    End If

    Set oColl = createobject( "XSI.Collection" )
    
    if ( in_bBranch ) then
        For Each oObj In in_sel
            Set oChildren = oObj.FindChildren( , , si3DObjectFamily )
            oColl.AddItems( oChildren )
        Next
        set oSel = oColl
    else
        set oSel = in_sel
    end if

    lSaveKeyCommand = GetValue( "Preferences.animation.save_key_command" )
    keytime         = GetValue( "PlayControl.Key" )

    If ( lSaveKeyCommand = 0 ) Then
        for each oObj in oSel
            set oSet = getMarkingSetProp(oObj, False, False )
            if typename( oSet ) <> "Nothing" then
                'check that there are parameters in the set before saving key
                if oSet.parameters.count > 0 then
                    Savekey oObj & "/." & szMarkingSet, keytime
                end if
            end if
        next
    ElseIf ( lSaveKeyCommand = 1 ) Then
        Set oKeyableColl = oSel.FindObjectsByMarkingAndCapabilities( , siKeyable )
        Savekey oKeyableColl, keytime
    ElseIf ( lSaveKeyCommand = 2 ) Then
        oMarking = GetMarking()
        If ( Not IsEmpty( oMarking ) ) Then
            szMarking = Join( oMarking, "," )
            Set oKeyableColl = oSel.FindObjectsByMarkingAndCapabilities( szMarking, siKeyable )
            Savekey oKeyableColl, keytime
        End If
    Else
        Err.Raise siErrCancelled
    End If
end sub

'------------------------------------------------------------------------------
' NAME:     CreateMarkingSetProc
'
' INPUT:    in_sel  - selection on which to work
' INPUT:    in_bReset - If there's already a marking set, reset it first
'
' DESCRIPTION: Creates a marking set on selected objects with the current
'       marked parameters as proxy parameters.
'------------------------------------------------------------------------------
sub CreateMarkingSetProc( in_sel, in_bReset )
    Dim l_bFound, l_sel

    'Get the current relative Markings
    aMarking = ExpandMarking(GetMarking)
    
    if typename(aMarking) = "Empty" then
        logmessage "You need to mark some parameters first", siError
        exit sub
    end if

    ' Make Sure we have a valid selection
    if IsEmpty(in_sel) Or TypeName(in_sel) = "Nothing" Or in_sel.count = 0 Then
        logmessage "You need to select an object first", siError
        exit sub
    end if

    ' Make sure we will treat only 3D objects
    set l_sel = SIFilter( in_sel, "sceneobject" )

    ' Make sure we don't overwrite some marking sets by mistake.
    if ( in_bReset ) then
        l_bFound = False
        for each oObj in l_sel

            set oSet = getMarkingSetProp(oObj, False, False )
            if typename( oSet ) <> "Nothing" then
                l_bFound = True
                Exit For
            end if
        next
        if ( l_bFound ) then
            if MsgBox(XSIUtils.Translate( IDS_CREATE_MARKINGSET_ERROR_MSG, "XSISCRIPTS" ), (vbYesNo or vbQuestion), XSIUtils.Translate( IDS_CREATE_MARKINGSET_ERROR_TITLE, "XSISCRIPTS" )) = vbNo then
                Err.Raise siErrCancelled
                exit sub
            end if
        end if
    end if
        
    for each oObj in l_sel
        set oSet = getMarkingSetProp(oObj, True, in_bReset)
        'On Error Resume Next
        AddProxyParam oSet, arrayAdd(aMarking, oObj & ".")
    next
end sub


'------------------------------------------------------------------------------
' NAME:     DeleteMarkingSetProc 
'
' INPUT:    in_sel  - selection on which to work
'
' DESCRIPTION: Deletes the marking set, if any, on the selected objects.
'------------------------------------------------------------------------------
sub DeleteMarkingSetProc( in_sel )
    Dim l_sel

    ' Make sure we will treat only 3D objects in a 1st pass
    set l_sel = SIFilter( in_sel, "sceneobject" )

    if typename(l_sel) <> "Nothing" then
        for each oObj in l_sel
            set oSet = getMarkingSetProp(oObj, False, False )
            if typename( oSet ) <> "Nothing" then
                DeleteObj oSet
            end if
        next
    end if

    ' Now maybe the user has selected directly the marking set, look for this
    ' and delete them for him
    for each oObj in in_sel
        if typename( oObj ) = "CustomProperty" and oObj.name = "MarkingSet" then
            DeleteObj oObj
        end if
    next

end sub


'---------------------------------------------------------------
function arrayAdd(list, string)
'---------------------------------------------------------------
    'Concatenate the name of the object
    'into the marking array
    dim newList(), i
    
    redim newList(ubound(list))
    for i = 0 to ubound(list) 
        newList(i) = string & list(i)
    next
    arrayAdd = newList
end function


'---------------------------------------------------------------
function getMarkingSetProp (oObj, in_bCreateNew, in_bResetFirst)
'---------------------------------------------------------------
    'Create the property if it doesn't exists.
    set getMarkingSetProp = oObj.properties.item(szMarkingSet)

    ' If there is already a marking set but we want to create
    ' a new one, delete the existing one
    if typename(getMarkingSetProp) <> "Nothing" then
        if in_bResetFirst then
            DeleteObj getMarkingSetProp
            'set getMarkingSetProp = oObj.addproperty("Custom_parameter_list", False, szMarkingSet)
            set getMarkingSetProp = SIAddProp("Custom_parameter_list", oObj, siNodePropagation, szMarkingSet)(0)
        end if
    ' If there was no marking set create one
    else
        if in_bCreateNew then
            'set getMarkingSetProp = oObj.addproperty("Custom_parameter_list", False, szMarkingSet)
            set getMarkingSetProp = SIAddProp("Custom_parameter_list", oObj, siNodePropagation, szMarkingSet)(0)
        end if
    end if
end function


'---------------------------------------------------------------
function ExpandMarking(myMarkings)
'---------------------------------------------------------------
    Dim myTmp, i
    if typename(myMarkings) <> "Empty" then

        for i=0 to Ubound(myMarkings)
            'This is a big hack to expand the list
            'because of a limitation in the StoreAction
            'implementation
            select case myMarkings(i)
                case "kine.local.pos"
                    myMarkings(i) = "kine.local.posx,kine.local.posy,kine.local.posz"
                case "kine.local.ori.euler"
                    myMarkings(i) = "kine.local.rotx,kine.local.roty,kine.local.rotz"
                case "kine.local.ori"
                    myMarkings(i) = "kine.local.rotx,kine.local.roty,kine.local.rotz"
                case "kine.local.scl"
                    myMarkings(i) = "kine.local.sclx,kine.local.scly,kine.local.sclz"
                case "kine.local"
                    myTmp = "kine.local.posx,kine.local.posy,kine.local.posz"
                    myTmp = myTmp & ",kine.local.rotx,kine.local.roty,kine.local.rotz"
                    myTmp = myTmp & ",kine.local.sclx,kine.local.scly,kine.local.sclz"
                    myMarkings(i) = myTmp
                        
                case "kine.global.pos"
                    myMarkings(i) = "kine.global.posx,kine.global.posy,kine.global.posz"
                case "kine.global.ori.euler"
                    myMarkings(i) = "kine.global.rotx,kine.global.roty,kine.global.rotz"
                case "kine.global.ori"
                    myMarkings(i) = "kine.global.rotx,kine.global.roty,kine.global.rotz"
                case "kine.global.scl"
                    myMarkings(i) = "kine.global.sclx,kine.global.scly,kine.global.sclz"
                case "kine.global"
                    myTmp = "kine.global.posx,kine.global.posy,kine.global.posz"
                    myTmp = myTmp & ",kine.global.rotx,kine.global.roty,kine.global.rotz"
                    myTmp = myTmp & ",kine.global.sclx,kine.global.scly,kine.global.sclz"
                    myMarkings(i) = myTmp
            end select
        next
        expandMarking = split(join(myMarkings, ","), ",")
    else
        expandMarking = myMarkings
    end if
end function


'======================================================================



'------------------------------------------------------------------------------
' NAME:         ManageExternalConstraint
' DESCRIPTION:  Will look for constraints that are outside the given object's
'               model boundary, and apply some operation on them
' AUTHOR: Olivier Ozoux, Michael Isner
'------------------------------------------------------------------------------
sub ManageExternalConstraint( oObject, Flag )
    'Find All External Constraints
    Dim oItem, oConstraint, oSrcConstraint, oCollection, oModel
    Dim oJoint, upv, up, oChildren
    Dim pos
    upv = 0
        
    set oCollection = CreateObject("XSI.Collection")
    set oChildren = CreateObject("XSI.Collection")
    
    'Get the Model the input belongs to
    'If the selection is not a model
    'we need to process the model as well
    if oObject.type <> "#model" then
        set oModel = oObject.Model
        oChildren.Add oObject
    else
        set oModel = oObject
    end if
    
    'Add all the children to the collection to process
    oChildren.AddItems  oObject.FindChildren
    
    'Loop over all the children of the object
    for each oItem in oChildren
        'Find the constraints
        for each oConstraint in oItem.Kinematics.Constraints 
            'Find the Constraining Objects
            for each oSrcConstraint in oConstraint.Constraining
            	pos = StringSearch(oSrcConstraint.Parent.Name, oChildren.GetAsText, True, 0)
                if (   (oSrcConstraint.Model.Name <> oModel.Name) _
				    Or (pos = -1) ) Then
                    oCollection.Add oConstraint
                end if 
            next
        next
        
        'Special Bone UpVector Case
        if oItem.type = "bone" then
            set oJoint = oItem.joint
            set oSrcConstraint = oJoint.UpVectorReference
            if typename(oSrcConstraint) <> "Nothing" then
                'Check if Internal or Not.
            	pos = StringSearch(oSrcConstraint.Parent.Name, oChildren.GetAsText, True, 0)
                if (   (oSrcConstraint.Model.Name <> oModel.Name) _
				    Or (pos = -1) ) Then
                    upv = upv + 1
                    select case Flag
                        case cMute
                            DeactivateAbove  oJoint & ".SkeletonUpVectorOp", True
                            up = oItem.kinematics.local.parameters("rotx").value
                            oJoint.resplane.value = 0
                            oItem.kinematics.local.parameters("rotx").value = up
                        case cUnMute
                            DeactivateAbove  oJoint & ".SkeletonUpVectorOp", False
                            oJoint.resplane.value = 2
                        case cToggle

                        case cDelete
                            oJoint.resplane.value = 0
                            DeleteObj oJoint & ".SkeletonUpVectorOp"
                    end select
                end if
            end if
        end if
    next
    
    'Remove duplicate entries.
    oCollection.Unique = True
    Logmessage "Found " & oCollection.count & _
        " constraints and "& upv &" upvectors external to " & oModel.Name


    select case Flag
        case cSelect
            SelectObj oCollection
        case cDelete
            DeleteObj oCollection
        case cMute
            for each oItem in oCollection
                SetValue oItem & ".active", False
            next
        case cUnMute
            for each oItem in oCollection
                SetValue oItem & ".active", True
            next
        case cToggle
            for each oItem in oCollection
                'oItem.active.value = Not oItem.active.value
                ToggleValue "active", oItem
            next    
    end select
end sub

'------------------------------------------------------------------------------
' NAME:         - ManageExternalConstraintProc
' DESCRIPTION:  Will look for constraints that are outside the given object's
'               model boundary, and apply some operation on them
' AUTHORE: Olivier Ozoux, Michael Isner
'------------------------------------------------------------------------------
sub ManageExternalConstraintProc( in_sel, in_flag )

    Dim l_flag, l_objs

    ' Make Sure we have a valid selection
    if IsEmpty(in_sel) Or TypeName(in_sel) = "Nothing" Then
        logmessage "No valid object selection"
        Err.Raise siErrCancelled
        Exit Sub
    end if

    ' Make sure we will treat only 3D objects
    set l_objs = SIFilter( in_sel, "sceneobject" )

    if typename(l_objs) = "Nothing" then
        logmessage "No valid object selection"
        Err.Raise siErrCancelled
        Exit Sub
    end if

    if in_flag = "Select" then
        l_flag = cSelect
    elseif in_flag = "Activate"   then 
        l_flag = cUnMute    
    elseif in_flag = "Deactivate" then
        l_flag = cMute  
    elseif in_flag = "Toggle" then
        l_flag = cToggle    
    elseif in_flag = "Remove" then
        l_flag = cDelete
    else
        l_flag = cSelect
    end if

    ManageExternalConstraint l_objs(0), l_flag

end sub

'------------------------------------------------------------------------------
' NAME:         TogglePinObjectInPositionProc
' DESCRIPTION:  Sets a position constraint to a temporary primitive to pin an 
'               object to its current location. If the object is already 'pinned' 
'               then the constraint and temporary primitive are removed.
'               This is implemented as a toggle for ease of use.
' INPUT:        Selection list
' AUTHOR:       R.Gagne
'------------------------------------------------------------------------------
sub TogglePinObjectInPositionProc( in_sel )
    Dim oRoot, oItem, l_found, oCns, oConstraining, oConstraint, oPin, oPrim, oPar, oCollection
    Dim px,py,pz

    set oRoot = ActiveProject.ActiveScene.Root
    set oCollection = CreateObject("XSI.Collection")

    for each oItem in in_sel

        ' make sure we do not pin our pin control objects
        if InStr( oItem.Name, "TEMP_PIN" ) = 0 then

            ' Verify if this object is already pinned, if so
            ' then remove the proper constraint
            l_found = false
            for each oCns in oItem.Kinematics.Constraints
                if ( oCns.type = "poscns" ) then
                
                    for each oConstraining in oCns.Constraining
                        if InStr( oConstraining.Name, "TEMP_PIN" ) <> 0 then

                            ' add item to delete - will do so at the end
                            oCollection.Add oConstraining
                            l_found = true
                        end if
                    next
                end if
            next 

            ' If the object is not pinned then let's add a position
            ' constraint to make sure the object will keep its
            ' position in space
            if ( not l_found ) then
                px = oItem.Kinematics.Global.Parameters("posx").value 
                py = oItem.Kinematics.Global.Parameters("posy").value 
                pz = oItem.Kinematics.Global.Parameters("posz").value

                ' create a temp implicit sphere primitive to serve
                ' as the constraint, set its radius to 2.
                set oPin  = oRoot.AddPrimitive( "Sphere", "TEMP_PIN" )
                set oPrim = oPin.ActivePrimitive
                set oPar  = oPrim.Parameters("radius")
                oPar.value = 0.2

                ' position the pin cns control object at the current
                ' global location of the object to be pinned.
                oPin.Kinematics.Global.Parameters("posx").value = px
                oPin.Kinematics.Global.Parameters("posy").value = py
                oPin.Kinematics.Global.Parameters("posz").value = pz

                set oConstraint = oItem.Kinematics.AddConstraint( "Position", oPin, False )
            end if

        end if

    next
    DeleteObj oCollection

end sub



'******************************************************************************
' Animation retargeting commands
'******************************************************************************

'------------------------------------------------------------------------------
' NAME:     FindRetargetTagPropertiesFunc
'
' INPUT:    - 3dobject
'
' DESCRIPTION:  A recursive function to determine if the input object has 
'               retargeting tags on any of its descendants
'
'------------------------------------------------------------------------------
Function FindRetargetTagPropertiesFunc( byref in_object )
    dim myProp
    set myProp = in_object.Properties.Item("RetargetingTag")
    if typename(myProp) <> "Nothing" then
        FindRetargetTagPropertiesFunc = True
        Exit Function
    end if

    dim oChild
    for each oChild in in_object.Children
        if FindRetargetTagPropertiesFunc( oChild ) = True Then
            FindRetargetTagPropertiesFunc = True
            Exit Function
        end if
    next

    FindRetargetTagPropertiesFunc = False
    Exit Function
End Function



'------------------------------------------------------------------------------
' NAME:     RetargetTagRig
'
' INPUT:    - Selected model
'
' DESCRIPTION:  Launch tagging session for retargeting
'
'------------------------------------------------------------------------------
sub RetargetTagRig( byref in_objs )

    Dim oSel
    Dim SelList
    Dim cur_model
    Dim myProp

    Dim  l_ObjectList

    set l_ObjectList = SIFilter( in_objs, siModelFilter )

    if IsEmpty(l_ObjectList) Or TypeName(l_ObjectList) = "Nothing" Then

        ' Select rig
        '
        SetSelFilter "Model"
        DeselectAll

        dim Button
        Button = 1
        While Button <> 0  And typename(oSel) = "Empty"

            PickElement "Model", "Select model to tag", "", oSel, Button
            if typename(oSel) <> "Empty" And Button <> 0  then
                ' Button 2 never gets log because PickElement seems to ignore it...
                Select Case Button
                    Case 1
                        AddToSelection oSel
                    Case 2
                        RemoveFromSelection oSel
                End Select
            end if

        Wend

        set SelList = GetValue("SelectionList")

        if SelList.count < 1 then
            DeselectAll
            SetSelFilter "object"
            logmessage "You must select at least one rig (model) to tag.", siError
            exit sub
        end if

        for each cur_model in SelList
            ' Launch tagging session

            set myProp = cur_model.Properties.Item("TaggingTool")
            if typename(myProp) <> "Nothing" then
                InspectObj myProp
            else
                TaggingTool cur_model
            end if
        next
    else
        for each cur_model in l_ObjectList
            ' Launch tagging session
            'logmessage "Launching tagging session on " + cur_model
            set myProp = cur_model.Properties.Item("TaggingTool")
            if typename(myProp) <> "Nothing" then
                InspectObj myProp
            else
                TaggingTool cur_model
            end if
        next
    end if

    ' Clean up
    DeselectAll
    SetSelFilter "object"

end sub



'------------------------------------------------------------------------------
' NAME:     AccumulateRetargetTagPropertiesProc
'
' INPUT:    - 3dobject
'
' DESCRIPTION:  A recursive function to accumulate a list of retargting tags
'               on all of the input object's descendants
'
'------------------------------------------------------------------------------
Sub AccumulateRetargetTagPropertiesProc( byref in_object , byref io_tags )
    dim myProp

    set myProp = in_object.Properties.Item("RetargetingTag")
    if typename(myProp) <> "Nothing" then
        ' WARNING: VBScript string concetenation is O(N^2)  
        '          Using an array would be quicker
        io_tags = io_tags & in_object & "," & myProp.tag.Value & ";"
    end if

    dim oChild
    for each oChild in in_object.Children
        AccumulateRetargetTagPropertiesProc oChild , io_tags
    next

End Sub


'------------------------------------------------------------------------------
' NAME:     CalculateTagIntersectionProc
'
' INPUT:    - 3dobject
'
' DESCRIPTION:  Match nodes from two strings based on tag values
'
'------------------------------------------------------------------------------
Sub CalculateTagIntersectionProc( byref  in_source_params, byref in_target_params, byref  out_source_intersection, byref out_target_intersection )
                              

    Dim sourceArray
    sourceArray = Split(in_source_params, ";", -1, 1)

    Dim targetArray
    targetArray = Split(in_target_params, ";", -1, 1)

    Dim ii
    Dim jj
    Dim source_node_and_tag
    Dim target_node_and_tag
    Dim tmp_string
    for ii=0 to UBound(sourceArray)
        source_node_and_tag = Split( sourceArray(ii), ",", -1, 1)

        for jj=0 to UBound(targetArray)
            target_node_and_tag = Split( targetArray(jj), ",", -1, 1)

            if source_node_and_tag(1) = target_node_and_tag(1) then
                out_source_intersection = out_source_intersection & "," & source_node_and_tag(0)
                out_target_intersection = out_target_intersection & "," & target_node_and_tag(0)
                exit for
            end if
        next
    next
    
    out_source_intersection = Right( out_source_intersection, Len(out_source_intersection)-1 )
    out_target_intersection = Right( out_target_intersection, Len(out_target_intersection)-1 )
end Sub





'------------------------------------------------------------------------------
' NAME:     FilterRetargetableNodesProc
'
' INPUT:    - 3dobject
'
' DESCRIPTION:  Filter input list of 3dobjects to return only ones which have
'               an "appropriate" retargeting tag value. Supported values
'               currently (October 2006) include: COG, IK Anchor, IK Friction,
'               IK End Effector, Free, and IK up vector.  This function must be
'               changed if the retargeting operator accepts a different set of
'               output objects
'
'------------------------------------------------------------------------------
Sub FilterRetargetableNodesProc (byref in_nodes, byref out_nodes  )

    Dim in_array
    in_array = Split(in_nodes, ",", -1, 1)

    Dim ii
    Dim myObj
    Dim myProp
    Dim tag_value
    for ii=0 to UBound(in_array)
        set myObj = GetValue( in_array(ii) )
        set myProp = myObj.Properties.Item("RetargetingTag")
        tag_value = myProp.Parameters( "Type" ).value
        if typename(myProp) <> "Nothing" then
            if tag_value = 1 then ' Normal (FK child)
                out_nodes = out_nodes & in_array(ii) & ","
            elseif tag_value = 2 then ' COG
                out_nodes = out_nodes & in_array(ii) & ","
            elseif tag_value = 3 then  ' anchor
                out_nodes = out_nodes & in_array(ii) & ","
            elseif tag_value = 4 then  ' end effector
                out_nodes = out_nodes & in_array(ii) & ","
            elseif tag_value = 5 then  ' friction
                out_nodes = out_nodes & in_array(ii) & ","
            elseif tag_value = 6 then  ' free
                out_nodes = out_nodes & in_array(ii) & ","
            elseif tag_value = 7 then  ' up vector
                out_nodes = out_nodes & in_array(ii) & ","
            end if
        end if
    next

    out_nodes = Left( out_nodes, Len(out_nodes)-1 )
End Sub



'------------------------------------------------------------------------------
' NAME:     SelectModelProc
'
' INPUT:    An optional list of objects
'
' DESCRIPTION:  Returns 
'               retargeting tags (launch tagging sessions if they don't exist)
'               and install the operator
'
'------------------------------------------------------------------------------
Sub SelectModelProc ( byref in_objs, byval message, byref out_objs  )

    Dim oObjectList
    set oObjectList = SIFilter( in_objs, siModelFilter )

    if IsEmpty(oObjectList) Or TypeName(oObjectList) = "Nothing" Then
        SetSelFilter "Model"

        dim Button
        Button = 1

        While Button <> 0  And typename(oObjectList) = "Nothing"
            PickElement "Model", message, "Deselect", oObjectList, Button

            if typename(oSel) <> "Empty" And Button <> 0  then
                'Button 2 never gets log because PickElement seems to ignore it...
                Select Case Button
                    Case 1
                        AddToSelection oObjectList
                    Case 2
                        RemoveFromSelection oObjectList
                End Select
            end if
        Wend
    end if

    if TypeName(oObjectList) = "Nothing" Then
        logmessage "You must select a model, or part of a model.", siError
    else
        if TypeName( oObjectList ) = "Object" then
            set out_objs = oObjectList.Item(0)
        else
            set out_objs = oObjectList
        end if
    end if

End Sub


'------------------------------------------------------------------------------
' NAME:     RetargetRigToRigProc
'
' INPUT:    - Selected models
'
' DESCRIPTION:  Select rigs to use in retargeting operators, look for 
'               retargeting tags (launch tagging sessions if they don't exist)
'               and install the operator
'
'------------------------------------------------------------------------------
sub RetargetRigToRigProc( byref in_objs )

    Dim oSel
    Dim SelList
    Dim SourceModel
    Dim TargetModel
    Dim out_objs
    Dim tmp

    ' Examine objects passed in. If they're models, store them, otherwise
    '  find their owning model and store that
    if in_objs.Count > 0 then
        for i=0 to (in_objs.Count - 1)
            if TypeName( in_objs.Item(i) ) = "Model"  then
                if SourceModel = "" then
                    set SourceModel = in_objs.Item(i)
                elseif SourceModel <> in_objs.Item(i) then
                    if TargetModel = "" then
                        set TargetModel = in_objs.Item(i)
                    end if
                end if
            else
                if SourceModel = "" then
                    set SourceModel = in_objs.Item(i).Model
                elseif SourceModel <> in_objs.Item(i).Model then
                    if TargetModel = "" then
                        set TargetModel = in_objs.Item(i).Model
                    end if
                end if
            end if
        next
    end if

    ' Can't use the scene root as the model
    if SourceModel = "Scene_Root" then
        SourceModel = ""
    end if
    if TargetModel = "Scene_Root" then
        TargetModel = ""
    end if

    DeselectAll

    ' If unselected, select the source and target models
    '
    out_objs = ""
    if SourceModel = "" then
        SelectModelProc tmp, "Select Source Model", out_objs

        if TypeName(out_objs) <> "Model" then
            SetSelFilter "object"
            exit sub
        else
            set SourceModel = out_objs
        end if
    end if

    out_objs = ""
    if TargetModel = "" then
        SelectModelProc tmp, "Select Target Model", out_objs

        if TypeName(out_objs) <> "Model" then
            SetSelFilter "object"
            exit sub
        else
            set TargetModel = out_objs
        end if
    end if

    if SourceModel = TargetModel then
        logmessage "Source and target models must be different", siError
        SetSelFilter "object"
        exit sub
    end if

    SetSelFilter "object"

    ' Launch tagging sessions if necessary
    '
    Dim source_needs_tagging
    Dim target_needs_tagging

    source_needs_tagging = FindRetargetTagPropertiesFunc( SourceModel ) 
    target_needs_tagging = FindRetargetTagPropertiesFunc( TargetModel )

    if source_needs_tagging = False  Or target_needs_tagging = False then

        if source_needs_tagging = False then
            logmessage "Source rig has not been tagged. Launching tagging tool", siWarning
            ' Launch tagging tool
            RetargetTagRig( SourceModel )
        end if
        
        if target_needs_tagging = False then
            logmessage "Target rig has not been tagged. Launching tagging tool", siWarning
            ' Launch tagging session
            RetargetTagRig( TargetModel )
        end if
        exit sub
    end if

    ' Find the tags on each rig and calculate the intersection of these two sets
    '
    Dim tmp_string
    Dim tmp_source_params
    Dim tmp_target_params
    AccumulateRetargetTagPropertiesProc SourceModel , tmp_string
    tmp_source_params = Left( tmp_string, Len(tmp_string)-1 )

    tmp_string = ""
    AccumulateRetargetTagPropertiesProc TargetModel , tmp_string
    tmp_target_params = Left( tmp_string, Len(tmp_string)-1 )

    Dim source_intersection
    Dim target_intersection
    ''  CalculateTagIntersectionProc tmp_source_params, tmp_target_params, source_intersection, target_intersection

    Dim sourceArray
    sourceArray = Split(tmp_source_params, ";", -1, 1)

    Dim source_node_and_tag
    for ii=0 to UBound(sourceArray)
        source_node_and_tag = Split( sourceArray(ii), ",", -1, 1)

        source_intersection = source_intersection & "," & source_node_and_tag(0)
    next
    
    source_intersection = Right( source_intersection, Len(source_intersection)-1 )
    ''
    ''

    Dim targetArray
    targetArray = Split(tmp_target_params, ";", -1, 1)

    Dim ii
    Dim node_and_tag
    Dim target_tags
    Dim target_nodes

    for ii=0 to UBound(targetArray)
        node_and_tag = Split( targetArray(ii), ",", -1, 1)

        target_nodes = target_nodes & "," & node_and_tag(0)
        target_tags  = target_tags  & "," & node_and_tag(0)
    next

    target_tags = Right( target_tags, Len(target_tags)-1 )
    target_nodes = Right( target_nodes, Len(target_nodes)-1 )

    Dim output_nodes
    FilterRetargetableNodesProc target_nodes, output_nodes 

    Dim structure_props
    structure_props = SourceModel & "," & TargetModel

    ' Attach the operator
    '
'    logmessage "Source tags and nodes:  " & source_intersection
'    logmessage "Target tags:            " & target_tags
'    logmessage "Models:                 " & structure_props
'    logmessage "Output nodes:           " & output_nodes

'   logmessage "SimpleIKRetargetOp " & source_intersection & " ; " & target_tags & " ; " & structure_props & " ; " & output_nodes

    Dim cnx_set
    cnx_set = source_intersection & " ; " & target_tags & " ; " & structure_props & " ; " & output_nodes
    ApplyOp "SimpleIKRetargetOp", cnx_set

    ' Clean up
    DeselectAll

end sub

