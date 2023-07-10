'******************************************************************************
'
' File supervisor : Ronald Beirouti
'
' (c) Copyright 2003 Softimage
'
' $Archive:  $
' $Revision:  $  $Date:  $
' Checkin by: $Author:  $
'
' @doc      EXTERNAL
'
' @module   simulation.vbs
'
'******************************************************************************

' Ensure that all variables are explicitly declared
'Option explicit

'******************************************************************************
' DEBUGGING
'******************************************************************************

' DEVNOTE: remove comment to force a break point when script loaded.
'stop

'******************************************************************************
' CONSTANTS
'******************************************************************************

'******************************************************************************
' String Constants (used to translate)
'******************************************************************************
const IDS_STORE_ENV_CACHE_IN_MIXER_TITLE			= 1133
const IDS_STORE_ENV_CACHES_IN_MIXER_TITLE			= 1134
const IDS_CACHE_OPTION_DIALOG_TITLE					= 1135
const IDS_MULTI_ATTACH_RIGIDBODY_MSG_L				= 1136
const IDS_MULTI_ATTACH_RIGIDBODY_MSG_M				= 1137
const IDS_ATTACH_RIGIDBODY_FIRST					= 1138
const IDS_ATTACH_RIGIDBODY_SECOND					= 1139
const IDS_ATTACH_RIGIDBODY_MSG_LM					= 1140
const IDS_ADD_COMPOUND_SHAPE_MSG_L					= 1141
const IDS_PICK_CNS_POS_MSG							= 1142
const IDS_PICK_CONS_LOC_MSG							= 1143
const IDS_ICE_COMPOUND_PPG_LOGIC_TITLE				= 1516

'******************************************************************************
' Public Functions/Subroutines
'******************************************************************************



'------------------------------------------------------------------------------
' NAME:     SetRigidBodyInitialStateProc
'
' DESCRIPTION: Set the rigid body initial state of the selected objects. 
'------------------------------------------------------------------------------
sub SetRigidBodyInitialStateProc( in_objs )

    set l_ObjectList = SIFilter( in_objs, siObjectFilter )

    if typename( l_ObjectList ) = "Nothing" then
        logmessage "No rigid bodies or rigid constraints were selected to set their initial state"
        exit sub
    end if

    ' We need to set the initial state in two passes. One pass that fetches the global coordinates 
    ' of the rigid bodies and the second pass that sets the initial state.
    '
    ' If we didn't do this, we will have a resimulation at each iteration of the loop because at each
    ' iteration we pull the simulation by getting the global position and we dirty the simulation by
    ' setting the initial state.

    Dim aPosXArray( )
    Dim aPosYArray( )
    Dim aPosZArray( )

    Dim aRotXArray( )
    Dim aRotYArray( )
    Dim aRotZArray( )

    Dim aLinVelXArray( )
    Dim aLinVelYArray( )
    Dim aLinVelZArray( )

    Dim aAngVelXArray( )
    Dim aAngVelYArray( )
    Dim aAngVelZArray( )

    redim aPosXArray( l_ObjectList.count - 1 )
    redim aPosYArray( l_ObjectList.count - 1 )
    redim aPosZArray( l_ObjectList.count - 1 )

    redim aRotXArray( l_ObjectList.count - 1 )
    redim aRotYArray( l_ObjectList.count - 1 )
    redim aRotZArray( l_ObjectList.count - 1 )

    redim aLinVelXArray( l_ObjectList.count - 1 )
    redim aLinVelYArray( l_ObjectList.count - 1 )
    redim aLinVelZArray( l_ObjectList.count - 1 )

    redim aAngVelXArray( l_ObjectList.count - 1 )
    redim aAngVelYArray( l_ObjectList.count - 1 )
    redim aAngVelZArray( l_ObjectList.count - 1 )

    i = 0

    for each l_obj in l_ObjectList
        
        set global = l_obj.kinematics.global

        set initstate = l_obj.properties.find("DynamicsInitState")

        if typename( initstate ) <> "Nothing" then

            aPosXArray(i) = global.Parameters("posx").value 
            aPosYArray(i) = global.Parameters("posy").value 
            aPosZArray(i) = global.Parameters("posz").value 

            aRotXArray(i) = global.Parameters("rotx").value 
            aRotYArray(i) = global.Parameters("roty").value 
            aRotZArray(i) = global.Parameters("rotz").value 

            aLinVelXArray(i) = global.Parameters("linvelx").value 
            aLinVelYArray(i) = global.Parameters("linvely").value 
            aLinVelZArray(i) = global.Parameters("linvelz").value 

            aAngVelXArray(i) = global.Parameters("angvelx").value 
            aAngVelYArray(i) = global.Parameters("angvely").value 
            aAngVelZArray(i) = global.Parameters("angvelz").value 

            i = i+1
        end if
    next

    i = 0

    for each l_obj in l_ObjectList
        
        set global = l_obj.kinematics.global

        set initstate = l_obj.properties.find("DynamicsInitState")

        if typename( initstate ) <> "Nothing" then

            initstate.parameters("posx").value = aPosXArray(i)
            initstate.parameters("posy").value = aPosYArray(i)
            initstate.parameters("posz").value = aPosZArray(i)

            initstate.parameters("rotx").value = aRotXArray(i)
            initstate.parameters("roty").value = aRotYArray(i)
            initstate.parameters("rotz").value = aRotZArray(i)

            initstate.parameters("linvelx").value = aLinVelXArray(i)
            initstate.parameters("linvely").value = aLinVelYArray(i)
            initstate.parameters("linvelz").value = aLinVelZArray(i)

            initstate.parameters("angvelx").value = aAngVelXArray(i)
            initstate.parameters("angvely").value = aAngVelYArray(i)
            initstate.parameters("angvelz").value = aAngVelZArray(i)

            initstate.parameters("posfromanim").value = false
            initstate.parameters("linvelfromanim").value = false
            initstate.parameters("rotfromanim").value = false
            initstate.parameters("angvelfromanim").value = false

            i = i+1
        end if
    next

    if i = 0 then
        logmessage "No rigid bodies or rigid constraints were selected to set their initial state"
        exit sub
    end if


end sub

'------------------------------------------------------------------------------
' NAME:     GetRigidBodyInitialStateFromAnimProc
'
' DESCRIPTION: Let the rigid body to use animation as its initial state. 
'------------------------------------------------------------------------------
function GetRigidBodyInitialStateFromAnimProc ( in_objs )

    set l_ObjectList = SIFilter( in_objs, siObjectFilter )

    for each l_obj in l_ObjectList
        
        set initstate = l_obj.properties.find("DynamicsInitState")

        if typename( initstate ) <> "Nothing" then
        
            set paramColl = initstate.parameters
            paramColl.Item("posfromanim").value = true
            paramColl.Item("linvelfromanim").value = true

            paramColl.Item("rotfromanim").value = true
            paramColl.Item("angvelfromanim").value = true

        end if
    next

end function

'------------------------------------------------------------------------------
' NAME:     SetCommonRigidBodyProc
'
' DESCRIPTION: Set the rigid body groups of the selected objects. 
'------------------------------------------------------------------------------
sub SetCommonRigidBodyProc ( byref in_objs, in_passivityState )

    set addToEnvObjects = CreateObject("XSI.Collection")
    set addToEnvModels = CreateObject("XSI.Collection")
    addToEnvModels.Unique = True
    set l_ObjectList = SIFilter( in_objs, siObjectFilter )

    set in_objs = l_ObjectList

    'Get the default environment
    set oDefaultEnvironment = ActiveProject.ActiveScene.ActiveSimulationEnvironment

    if typename(l_ObjectList) <> "Nothing" then
        for each l_obj in l_ObjectList
            If l_obj.IsLocked() = True Then
                logmessage "Cannot add " & l_objTest & " to rigid body dynamics because it is locked.", siError
            else
                l_bObjAlreadyInEnv = False
                if typename(oDefaultEnvironment) <> "Nothing" then
                    for each l_owner in l_obj.owners
                        aNames = split(l_owner.fullname,".")
                        if aNames(0) = "Environments" then
                            l_bObjAlreadyInEnv = True
                            if aNames(1) = oDefaultEnvironment.name  then                   
                                On Error Resume Next
                                set oRBProp = l_obj.Properties.find("RigidBodyProp")
                                if typename(oRBProp) = "Nothing" then
                                    ' we failed
                                    logmessage "The object " +  l_obj.fullname +" cannot be made into a rigid body", siError
                                    On Error Goto 0
                                    exit sub
                                else
                                    On Error Goto 0     
                                    l_obj.Properties.find("RigidBodyProp").passive = in_passivityState
                                end if
                                
                                exit for
                            else
                                logmessage "The object " +  l_obj.fullname +" is already part of a simulation environment. It will not be added to the current environment", siError
                                exit for
                            end if
                        end if
                    next
                End if
                if not l_bObjAlreadyInEnv then
                    addToEnvObjects.add l_obj
                    addToEnvModels.add l_obj.Model
                End if
            End if
        Next
        
        if addToEnvObjects.Count <> 0 Then
            dim l_env, l_rbGroup
            ' If no env, then create one:
            if typename(oDefaultEnvironment) = "Nothing" then
                set oDefaultEnvironment  = CreateEnvironment( "Environment" )
                set l_rbGroup  = AddContainerToEnvironment( oDefaultEnvironment,"RigidBody",1,"RigidBodies")
                AddContainerToEnvironment oDefaultEnvironment,"Constraint",1,"Constraints"
                AddContainerToEnvironment oDefaultEnvironment,"Force",1,"Forces"
            else
                dim l_oContainers
                set l_oContainers = oDefaultEnvironment.Containers
                if l_oContainers.Count = 0 then
                    set l_rbGroup  = AddContainerToEnvironment( oDefaultEnvironment,"RigidBody",1,"RigidBodies")
                    AddContainerToEnvironment oDefaultEnvironment,"Constraint",1,"Constraints"
                    AddContainerToEnvironment oDefaultEnvironment,"Force",1,"Forces"
                else
                     set l_rbGroup  = l_oContainers("RigidBodies")
                     if typename(l_rbGroup) = "Nothing" then
                        set l_rbGroup  = AddContainerToEnvironment( oDefaultEnvironment,"RigidBody",1,"RigidBodies")
                     end if
                end if
            End if
            
            ' Make sure each model has its cache:
            For each oModel in addToEnvModels
                dim oCache
                set oCache = oDefaultEnvironment.FindCacheForModel(oModel)
                if typename(oCache) = "Nothing" then
                    set oCache = CreateEnvironmentCache(oModel, oDefaultEnvironment )
                    oCache.name = oModel.Name & "_" & oDefaultEnvironment.Name & "_Cache"
                end if
            Next

            ' Add all objects in one shot:
            AddToContainer l_rbGroup, addToEnvObjects

            ' Set all added object to Active:
            For each l_obj in addToEnvObjects
                l_obj.Properties.find("RigidBodyProp").passive = in_passivityState
            Next
            
            ' If the op is not there yet, add it:
            set l_oOperators = oDefaultEnvironment.Operators
            if l_oOperators.Count = 0 then
                select case GetValue( "Preferences.simulation.rbdengine" )
                    case 0 'physX
                        applyop "NXDynamicsOp" , oDefaultEnvironment
                    case 1 ' ODE
                        applyop "DynamicsOp" , oDefaultEnvironment
                end select
            end if
        end if
    end if

    AutoInspect l_ObjectList, , , "Dynamics"

end sub

'------------------------------------------------------------------------------
' NAME:     SetActiveRigidBodyProc
'
' DESCRIPTION: Set the rigid body initial state of the selected objects. 
'------------------------------------------------------------------------------
sub SetActiveRigidBodyProc ( byref in_objs )

    SetCommonRigidBodyProc  in_objs, false 
    
end sub

'------------------------------------------------------------------------------
' NAME:     SetPassiveRigidBodyProc
'
' DESCRIPTION: Set the rigid body initial state of the selected objects. 
'------------------------------------------------------------------------------
sub SetPassiveRigidBodyProc ( byref in_objs )

    SetCommonRigidBodyProc in_objs, true

end sub

'------------------------------------------------------------------------------
' NAME:     MultiAttachRigidBodiesTool
'
' DESCRIPTION: Create a rigid constraint of the given type, launch a pick session to
' pick the bodies to attach to the constraint. 
'------------------------------------------------------------------------------
function MultiAttachRigidBodiesTool( in_CnsType,  in_Selection )

    dim l_button,l_PickedBody,l_modifier, l_trs, oBody, oCns
    dim x,y,z,button

    dim l_collBodiesToAttach, l_collFilteredSelection, l_collPositioning, l_collCnsBodies, l_collCns

    ' filter the selection for objects
    set l_collBodiesToAttach    = CreateObject("XSI.Collection")
    set l_collPositioning       = CreateObject("XSI.Collection")    
    set l_collCnsBodies         = CreateObject("XSI.Collection")    
    set l_collFilteredSelection = CreateObject("XSI.Collection")
    set l_collCns               = CreateObject("XSI.Collection")

    set l_trs = XSIMath.CreateVector3 

    ' update selection with filtered list
    set l_collFilteredSelection = SIFilter( in_Selection, siObjectFilter )

    if typename(l_collFilteredSelection) <> "Nothing" then
        l_collBodiesToAttach.AddItems l_collFilteredSelection
        Application.Selection.SetAsText l_collBodiesToAttach.GetAsText
    end if

    l_collCnsBodies.Unique      = true
    l_collBodiesToAttach.Unique = true

    '
    ' Picking Loop. Exits on RMB or ESC key 
    '
    do until false
        PickElement , XSIUtils.Translate( IDS_MULTI_ATTACH_RIGIDBODY_MSG_L, "XSISCRIPTS" ), XSIUtils.Translate( IDS_MULTI_ATTACH_RIGIDBODY_MSG_M, "XSISCRIPTS" ), l_PickedBody, l_button, 0, l_modifier

        if l_button = 0 then exit do 'exit when RMB or ESC key

        if typename(l_PickedBody) = "X3DObject" then 
        '
        ' check that the picked body is not a constraint
        ' ValidateObject
        '
            select case l_button
                case 1 'LMB

                    select case l_modifier
                        case 0 'no modifier: replace selection with picked body
                            l_collBodiesToAttach.RemoveAll
                            l_collBodiesToAttach.Add l_PickedBody 
                            Application.Selection.Clear
                            Application.Selection.Add l_PickedBody
                        case 1 'shift : add to selection
                            l_collBodiesToAttach.Add l_PickedBody 
                            Application.Selection.Add l_PickedBody
                        case 2  'ctrl : toggle selection
                            set oBody = l_collBodiesToAttach(l_PickedBody.name) 
                            'if not found, add
                            if typename(oBody) = "Nothing" then
                                l_collBodiesToAttach.Add l_PickedBody 
                                Application.Selection.Add l_PickedBody
                            'if found, remove
                            else
                                l_collBodiesToAttach.Remove l_PickedBody 
                                Application.Selection.Remove l_PickedBody
                            end if
                        case 3  'ctrl+shift: connect to world with a picked position
                            ' used when connecting bodies to the world
                            PickPosition XSIUtils.Translate( IDS_PICK_CNS_POS_MSG, "XSISCRIPTS" ), " ", x,y,z, button
                            l_trs.Set x,y,z
                            set oCns = AttachRigidBodies(in_CnsType, l_PickedBody.Name , l_trs.x, l_trs.y, l_trs.z)
                            if typename(oCns) <> "Nothing" then l_collCns.Add oCns
                    end select
                case 2 'MMB

                    for each oBody in l_collBodiesToAttach

                        l_collCnsBodies.RemoveAll
                        l_collCnsBodies.Add oBody
                        l_collCnsBodies.Add l_PickedBody

                        l_collPositioning.RemoveAll
                    
                        'special case: if MMB pick the same body as LMB
                        'pick position and connect constraint to world
                        if l_collCnsBodies.count = 1 then
                                PickPosition XSIUtils.Translate( IDS_PICK_CONS_LOC_MSG, "XSISCRIPTS" ), " ", x,y,z, button
                                l_trs.Set x,y,z
                        else
                            select case l_modifier
                                case 0  'none : anchor cns at body picked with MMB
                                    l_collPositioning.Add l_PickedBody
                                    set l_trs = GetAvgPosOfColl(l_collPositioning)
                                case 1  'shift : anchor cns at body picked with LMB 
                                    l_collPositioning.Add oBody
                                    set l_trs = GetAvgPosOfColl(l_collPositioning)
                                case 2  'ctrl : anchor cns at midpoint
                                    l_collPositioning.Add l_PickedBody
                                    l_collPositioning.Add oBody
                                    set l_trs = GetAvgPosOfColl(l_collPositioning)
                                case 3  'ctrl+shift : pick anchor position
                                    PickPosition XSIUtils.Translate( IDS_PICK_CONS_LOC_MSG, "XSISCRIPTS" ), " ", x,y,z, button
                                    l_trs.Set x,y,z
                            end select
                        end if

                        set oCns = AttachRigidBodies(in_CnsType, l_collCnsBodies.GetAsText , l_trs.x, l_trs.y, l_trs.z)
                        if typename(oCns) <> "Nothing" then l_collCns.Add oCns

                    next 
                    
                    'replace pick list with MMB selection. For chaining
                    l_collBodiesToAttach.RemoveAll
                    l_collBodiesToAttach.Add l_PickedBody

                    Application.Selection.Clear
                    Application.Selection.Add l_PickedBody

            end select
        else
            logmessage "AttachRigidBodies: picked element is not a rigid body", siError
        end if

        set l_PickedBody = Nothing
    loop

    'select the created constraints
    if l_collCns.count > 0 then
        Application.Selection.Clear
        Application.Selection.SetAsText l_collCns.GetAsText
        AutoInspect l_collCns, , , siSimulationKeyword
    end if

end function

'--------------------------------------
' Get Rigid Bodies
'--------------------------------------
function GetAvgPosOfColl (in_bodyColl ) 
    
    dim l_body,l_Trs,l_AvgTrs
    set l_AvgTrs = XSIMath.CreateVector3
    set l_Trs = XSIMath.CreateVector3 

    l_AvgTrs.Set 0,0,0

    for each l_body in in_bodyColl
        l_body.Kinematics.Global.Transform.GetTranslation l_Trs
        l_AvgTrs.AddInPlace l_Trs
    next

    l_AvgTrs.ScaleInPlace 1/in_bodyColl.count

    set GetAvgPosOfColl = l_AvgTrs

end function

'------------------------------------------------------------------------------
' NAME:     AttachRigidBodiesProc
'
' DESCRIPTION: Create a constraint, add to environment, add bodies to group.
'------------------------------------------------------------------------------

function AttachRigidBodiesProc ( in_CnsType, in_RigidBodiesToAttach, in_px, in_py, in_pz )

    dim l_rtn,l_cns, oDefaultEnvironment, oRB, oContainerGroups, oRBDGroup

    set AttachRigidBodiesProc = nothing

    if in_RigidBodiesToAttach.count = 0 then
        logmessage "AttachRigidBodies: No rigid bodies to attach", siError
        set AttachRigidBodiesProc = nothing
        exit function
    end if

    '
    ' go through the object list and make sure we are not constraining to a constraint
    ' ValidateObject
    '
    for each oRB in in_RigidBodiesToAttach
        if ValidateRigidBody(oRB) = false then
            logmessage oRB & " is not a rigid body, no constraint was created", siError
            exit function
        end if
    next

    'Get the default environment
    set oDefaultEnvironment = ActiveProject.ActiveScene.ActiveSimulationEnvironment

    'Only add the constraint if we have an environment to add to 
    if typename(oDefaultEnvironment) = "Parameter" then
        logmessage "AttachRigidBodies: There is no simulation environment. No constraint was created", siError
        exit function
    end if

    '
    ' go through the object list and make sure that all object are rigid bodies under 
    ' the same environment.
    '
    set oContainerGroups = oDefaultEnvironment.Containers
    if oContainerGroups.Count = 0 then
        logmessage "AttachRigidBodies: No rigid bodies to attach", siError
        exit function
    end if

    set oRBDGroup = oContainerGroups(0)

    l_isRBDFromSameEnvironment = false
    for each oRB in in_RigidBodiesToAttach                      
        for each oM in oRBDGroup.Members
            if om.IsEqualTo(oRB) = true then
                l_isRBDFromSameEnvironment = true               
            end if                      
        next
        if l_isRBDFromSameEnvironment = false then      
            logmessage oRB & " is not a rigid body in the same environment, no constraint was created", siError
            exit function
        end if
    next
    
    '
    ' create the constraint and add it to the environment
    '
    set l_rtn = SIGetPrim(in_CnsType,in_CnsType)
    set l_cns = l_rtn.value("Value") 

    AddToContainer oDefaultEnvironment.fullname & ".Constraints", l_cns.FullName  
    'add the rigid bodies to the constraint group
    SIAddToGroup l_cns & ".RigidCns.AttachedBodies", in_RigidBodiesToAttach

    dim CnsXfo
    set CnsXfo = XSIMath.CreateTransform
    CnsXfo.SetTranslationFromValues in_px,in_py,in_pz
    l_cns.kinematics.global.transform = CnsXfo

    SetRigidBodyInitState l_cns

    DeselectAll
    SelectObj l_cns

    set AttachRigidBodiesProc = l_cns

end function


'------------------------------------------------------------------------------
' NAME:     GetNbAttachedBodies
'
' DESCRIPTION: count the number of bodies in the attached bodies group
'------------------------------------------------------------------------------
function GetNbAttachedBodies( in_oCns )

    GetNbAttachedBodies = 0

    dim oAttachedBodies
    set oAttachedBodies = EnumElements(in_oCns.ActivePrimitive & ".Attached Bodies.Members")

    if typename(oAttachedBodies) = "Nothing" then exit function

    GetNbAttachedBodies = oAttachedBodies.count

end function


'------------------------------------------------------------------------------
' NAME:     AttachRigidBodiesToolProc
'
' DESCRIPTION: Create a constraint, add to environment, add bodies to group.
'------------------------------------------------------------------------------

function AttachRigidBodiesToolProc( in_CnsType, in_RigidBodiesToAttach, inoutX, inoutY, inoutZ)

    dim l_rtn,l_cns, oDefaultEnvironment, oRB, oContainerGroups, oRBDGroup, l_button

    set AttachRigidBodiesToolProc = nothing

    '
    ' create the constraint
    '
    set l_rtn = SIGetPrim(in_CnsType,in_CnsType)
    set l_cns = l_rtn.value("Value") 

    '''''''''''''''''''''''''''''
    ' Filter the selection for objects
    '
    set l_collBodiesToAttach    = CreateObject("XSI.Collection")
    set l_collFilteredSelection = CreateObject("XSI.Collection")
    set l_collBodiesAttached    = CreateObject("XSI.Collection")

    ' update selection with filtered list
    set l_collFilteredSelection = SIFilter( in_RigidBodiesToAttach, siObjectFilter )

    if typename(l_collFilteredSelection) <> "Nothing" then

        for each oRB in l_collFilteredSelection
            if ValidateRigidBody(oRB) = true then 
                l_collBodiesToAttach.Add  oRB
            end if
        next

        Application.Selection.Clear
        if l_collBodiesToAttach.count > 0 then
            Application.Selection.SetAsText l_collBodiesToAttach.GetAsText
        end if
    end if

    ''''''''''''''''''''''''''''''''''''''''''
    ' move the constraint to desired position
    '
    ' if the selection was empty pick a position, otherwise use the average position of selection

    set l_trs = XSIMath.CreateVector3 
    if l_collBodiesToAttach.count = 0 then
        PickPosition XSIUtils.Translate( IDS_PICK_CNS_POS_MSG, "XSISCRIPTS" ), " ", inoutX, inoutY, inoutZ, l_button
        l_trs.Set inoutX,inoutY,inoutZ
    else
        set l_trs = GetAvgPosOfColl(l_collBodiesToAttach)
        inoutX = l_trs.x
        inoutY = l_trs.y
        inoutZ = l_trs.z
    end if

    dim CnsXfo
    set CnsXfo = XSIMath.CreateTransform

    CnsXfo.SetTranslation  l_trs
    l_cns.kinematics.global.transform = CnsXfo

    'add any existing bodies to the constraint
    for each oRB in l_collBodiesToAttach
        if GetNbAttachedBodies(l_cns) >= 2 then 
            exit for 
        else
            dim oBody
            set oBody = AttachRBToCns( l_cns, oRB )
            if typename(oBody) <> "Nothing" then 
                l_collBodiesAttached.Add  oBody
            end if
        end if
    next

    if l_collBodiesToAttach.count < 2 then
        'while picking and not more than 2 bodies attached, attach bodies INTERACTIVELY

        BodyPrompt = Array(XSIUtils.Translate( IDS_ATTACH_RIGIDBODY_FIRST, "XSISCRIPTS" ),XSIUtils.Translate( IDS_ATTACH_RIGIDBODY_SECOND, "XSISCRIPTS" ))
        dim prompt1, prompt2, l_PickedBody

        l_button = 1
        while  l_button <> 0 and GetNbAttachedBodies(l_cns) < 2 

            prompt = XSIUtils.Translate( IDS_ATTACH_RIGIDBODY_MSG_LM, "XSISCRIPTS", BodyPrompt(GetNbAttachedBodies(l_cns)) )

            set l_PickedBody = nothing
            PickElement , prompt, prompt, l_PickedBody, l_button, 0, l_modifier
            dim oAttachedBody
            set oAttachedBody = AttachRBToCns(  l_cns, l_PickedBody )

            if typename(oAttachedBody) <> "Nothing" then 
                l_collBodiesAttached.Add oAttachedBody
            end if
        wend
    else
    end if

    DeselectAll
    SelectObj l_cns

    AutoInspect l_cns, , , siSimulationKeyword

    in_RigidBodiesToAttach.Clear
    in_RigidBodiesToAttach.AddItems l_collBodiesAttached 

    set AttachRigidBodiesToolProc = l_collBodiesAttached

end function

'------------------------------------------------------------------------------
' NAME:     AttachRBToCns
'
' DESCRIPTION: Helper that attaches a single body to an existing constraint.
'------------------------------------------------------------------------------
function AttachRBToCns( in_Cns, in_RB ) 

    set AttachRBToCns = nothing

    '
    ' go through the object list and make sure we are not constraining to a constraint
    ' ValidateObject
    '
    if ValidateRigidBody(in_RB) = false then 
        exit function
    end if

    'Get the default environment
    set oDefaultEnvironment = ActiveProject.ActiveScene.ActiveSimulationEnvironment

    'Only add the constraint if we have an environment to add to 
    if typename(oDefaultEnvironment) = "Parameter" then
        logmessage "AttachRigidBodyToConstraint: There is no simulation environment to add the constraint to.", siError
        exit function
    end if

    '
    ' go through the object list and make sure that all object are rigid bodies under 
    ' the same environment.
    '
    set oContainerGroups = oDefaultEnvironment.Containers
    if oContainerGroups.Count = 0 then
        logmessage "AttachRigidBodyToConstraint: " & oDefaultEnvironment & " has no rigid bodies to attach", siError
        exit function
    end if

    set oRBDGroup = oContainerGroups(0)

    l_isRBDFromSameEnvironment = false
    for each oM in oRBDGroup.Members
        if om.IsEqualTo(in_RB) = true then
            l_isRBDFromSameEnvironment = true               
        end if                      
    next
    if l_isRBDFromSameEnvironment = false then      
        logmessage in_RB & " is not a rigid body in the same environment, body will not be attached to constraint.", siError
        exit function
    end if

    '
    ' add to environtment if not already there
    AddToContainer oDefaultEnvironment.fullname & ".Constraints", in_Cns.FullName  
    ' Add the body to the constraint's attached bodies group
    SIAddToGroup in_Cns & ".RigidCns.AttachedBodies", in_RB

    SetRigidBodyInitState in_Cns

    set AttachRBToCns = in_RB

end function


'------------------------------------------------------------------------------
' NAME:     ValidateRigidBody
'
' DESCRIPTION: Make sure we can use this object as a rigid body
'------------------------------------------------------------------------------
function ValidateRigidBody( in_RigidBody )

    ValidateRigidBody = false

    if typename(in_RigidBody) = "Nothing" then exit function
    'must be a 3D object
    'if typename(in_RigidBody) <> "X3DObject" then exit function
    'cannot attach constriant to another constraint
    if in_RigidBody.ActivePrimitive.Name = "Rigid Dynamics Cns" then exit function

    ValidateRigidBody = true

end function

'------------------------------------------------------------------------------
' NAME:     RemoveRigidBodyProc
'
' DESCRIPTION: Remove the objects from the rigid body simulation
'------------------------------------------------------------------------------
function RemoveRigidBodyProc ( byref in_objs )

    set propcoll = CreateObject("XSI.Collection")  
    set l_ObjectList = SIFilter( in_objs, siObjectFilter )

    set in_objs = l_ObjectList  

    for each obj in in_objs
        for each oOwner in obj.owners
            
            if oOwner.type = "#Group" then
                if oOwner.parent.type = "Environment" then
                    RemoveFromGroup oOwner, obj
                end if
            end if

        next
        
    next    

end function



function StoreEnvironmentCacheToMixerProc( byref in_environmentcache, byref in_name, byref in_addclip )

    dim l_pos
    dim l_ui

    ' by default not ui
    l_ui = false

    set StoreEnvironmentCacheToMixerProc = nothing

    ' get ui encoding in name (hack, but better than passing a ui argument)
    if( in_name = "(UIOnly)" ) then
        l_ui = true
        in_name = "SimulationRun"
    end if

    if( l_ui ) then

        set oPSet = ActiveSceneRoot.AddProperty( "CustomProperty", false, "StoreEnvironmentCacheToMixer" )
        set oLayout = oPSet.PPGLayout

        set oPName      = oPSet.AddParameter2("ActionsName", siString, in_name,,,,,,,"RBD Action Name", "If RBD included in the simualtion, the name given to the new action created" ) 
        set oPAddClip   = oPSet.AddParameter2("AddClip"   , siBool  , false          ,,,,,,,"Add Clip To Mixer", "If checked, adds a clip to the mixer on a new track")

        if not InspectObj( oPSet, , XSIUtils.Translate( IDS_STORE_ENV_CACHE_IN_MIXER_TITLE, "XSISCRIPTS" ), siModal, false ) then
            
            in_name = oPName.value
            in_addclip = oPAddClip.value

            'Create the Action
            SIStoreEnvironmentCacheToMixer in_environmentcache, in_name, in_addclip


        End If

        DeleteObj oPSet
    Else
        SIStoreEnvironmentCacheToMixer in_environmentcache, in_name, in_addclip
    end if

end function

function StoreEnvironmentCachesToMixerProc( byref in_environment, byref in_name, byref in_addclip )

    dim l_pos
    dim l_ui

    ' by default not ui
    l_ui = false

    set StoreEnvironmentCachesToMixerProc = CreateObject("XSI.Collection")

    ' get ui encoding in name (hack, but better than passing a ui argument)
    if( in_name = "(UIOnly)" ) then
        l_ui = true
        in_name = "SimulationRun"
    end if

    if( l_ui ) then

        set oPSet = ActiveSceneRoot.AddProperty( "CustomProperty", false, "StoreEnvironmentCacheToMixer" )
        set oLayout = oPSet.PPGLayout

	    set oPName      = oPSet.AddParameter2("ActionsName", siString, in_name,,,,,,,"RBD Action Name", "If RBD included in the simualtion, the name given to the new action created" ) 
        set oPAddClip   = oPSet.AddParameter2("AddClip"   , siBool  , false          ,,,,,,,"Add Clip To Mixer", "If checked, adds a clip to the mixer on a new track")

        if not InspectObj( oPSet, , XSIUtils.Translate( IDS_STORE_ENV_CACHES_IN_MIXER_TITLE, "XSISCRIPTS" ), siModal, false ) then
            
            in_name = oPName.value
            in_addclip = oPAddClip.value

            'Create the Action
            for each oCache in in_environment.Caches
                StoreEnvironmentCachesToMixerProc.Add SIStoreEnvironmentCacheToMixer( oCache, in_name, in_addclip)
            next


        End If

        DeleteObj oPSet
    Else
        for each oCache in in_environment.Caches
                StoreEnvironmentCachesToMixerProc.Add SIStoreEnvironmentCacheToMixer( oCache, in_name, in_addclip)
        next
    end if

end function

'------------------------------------------------------------------------------
' NAME:     MergeEnvironmentsProc
'
' DESCRIPTION: Merge diferent environments.
'------------------------------------------------------------------------------

sub MergeSimulationEnvironmentsProc(in_objs )

    set l_EnvironmentList = SIFilter( in_objs, "Environment" )
    set l_toBeDeletedEnvs = CreateObject("XSI.Collection")

    if typename(l_EnvironmentList) <> "Nothing" then
        if l_EnvironmentList.Count > 1 then
            
            set l_destEnvironment = l_EnvironmentList(0)
            'There's no RBD yet in the environment need to add the
            'containers
            if l_destEnvironment.Containers.Count = 0 then
                AddContainerToEnvironment l_destEnvironment,"RigidBody",1,"RigidBodies"
                AddContainerToEnvironment l_destEnvironment,"Constraint",1,"Constraints"
                AddContainerToEnvironment l_destEnvironment,"Force",1,"Forces"
            end if

            for i = 1 to l_EnvironmentList.Count - 1
                            
                set l_currEnvironment = l_EnvironmentList(i)

                for each container in  l_currEnvironment.containers
                    set l_destContainer = l_destEnvironment.containers(container.name)
                    for each member in container.members
                        l_destContainer.AddMember member
                    next

                    'Some container are not disjoint(forces), in such
                    'a cases we need to remove their members explicitly

                    for each member in container.members
                        RemoveFromContainer container, member
                    next
                next
                l_toBeDeletedEnvs.Add l_currEnvironment
            next

            ' now let's have a look at all of the evolves in the scene
            ' we need to find the ones connected to environments in our list
            set l_EvolveColl = FindObjects("","{CBB627A6-84EC-42A3-894D-09F78FCF0293}")
 			for j = l_EvolveColl.count-1 to 0 step -1
 			
 				' skip the scene defaults operator!
 			    set l_Evolve = l_EvolveColl(j)
 				if l_Evolve.Inputports.count > 0 then
 				
 					set l_EvolveEnv = l_Evolve.Inputports(2).target.parent
 					
 					' now search for the evolve's environment in our list!
					for i = 1 to l_EnvironmentList.Count - 1
                            
						set l_currEnvironment = l_EnvironmentList(i) 					
						
						if l_currEnvironment.fullname = l_EvolveEnv.fullname then
							
							set l_Prim = l_Evolve.Inputports(0).target
							set l_Model = l_Prim.model

						    set l_Cache = l_destEnvironment.FindCacheForModel(l_Model)
						    if typename(l_Cache) = "Nothing" then
							    set oCache = CreateEnvironmentCache(l_Model, l_destEnvironment)
						    l_Cache.name = l_Model.Name & "_" & l_destEnvironment.Name & "_Cache"
						    end if

							DeleteObj l_Evolve
						    ApplyOp "EvolveOp", l_Prim.fullname&";"&l_Prim.fullname&";"&l_destEnvironment.fullname&".simtimectrl;"&l_Cache.fullname
							
						end if
					next
 				end if
 			next
 			
            in_objs = l_EnvironmentList.GetAsText()
            l_EnvironmentList = ""
            DeleteObj l_toBeDeletedEnvs
        else
            LogMessage "MergeEnvironments : You need to select more than an environment object.", siError
        end if
    else
        LogMessage "MergeEnvironments: You need to select at least two environments in order to merge them.", siError
    end if

end sub


'------------------------------------------------------------------------------
' NAME:     ChangeEnvironmentDynamicsOperator
'
' DESCRIPTION: Change the rigid body simulation engine of the current 
'              environment
'------------------------------------------------------------------------------
sub ChangeEnvironmentDynamicsOperatorProc( in_environment, in_prefengine )

    if typename ( in_environment ) = "Nothing" then
        set l_environment = ActiveProject.ActiveScene.ActiveSimulationEnvironment

        if typename(l_environment) = "Nothing" then
            LogMessage "There is no active simulation environment in this scene.", siError
            exit sub
        end if
    elseif typename ( in_environment ) = "SimulationEnvironment" then
        set l_environment = in_environment
    else
        LogMessage "You must specify a Simulation Environment.", siError
        exit sub
    end if


'   Get the current dynamics operator
    set cur_operator = l_environment.Operators.item( 0 )
    op_name_list = Split( cur_operator.FullName, ".")
    op_name = op_name_list( UBound( op_name_list ) )

    if op_name = "NXDynamicsop" and in_prefengine = siOpenDynamicsEngine then
        ' Switch to ODE
        LogMessage "Switched to ODE"
        DeleteObj cur_operator
        ApplyOp "DynamicsOp", l_environment
    elseif op_name = "dynamicsop" and in_prefengine = siPhysXEngine then
        ' Switch to physX
        LogMessage "Switched to Ageia physX"
        DeleteObj cur_operator
        ApplyOp "NXDynamicsOp", l_environment
    end if

end sub


sub InspectRigidBodySimulationProperties

    set oCurEnvironment = ActiveProject.ActiveScene.ActiveSimulationEnvironment

    if typename(oCurEnvironment) = "Nothing" then
        logmessage "There are no simulation environments to inspect"
    else

        set oCurOperator = oCurEnvironment.Operators.item( 0 )
        set oTimeCtrl = oCurEnvironment.simulationtimecontrol

        set oToInspect = CreateObject("XSI.Collection")

        oToInspect.Add oTimeCtrl
        oToInspect.Add oCurOperator

        inspectobj oToInspect

    end if

end sub


'------------------------------------------------------------------------------
' NAME:     CreateCompoundRigidBodyProc
'
' DESCRIPTION: Creates a compound rigid body from the selected objects. The
'               parent-owner is the first element of the selection list
'------------------------------------------------------------------------------
sub CreateCompoundRigidBodyProc( byref in_objs )

    set l_environment = ActiveProject.ActiveScene.ActiveSimulationEnvironment

    if typename(l_environment) = "Nothing" then
        ' If we have no environment, then create one:
        set oDefaultEnvironment  = CreateEnvironment( "Environment" )
        set l_rbGroup  = AddContainerToEnvironment( oDefaultEnvironment,"RigidBody",1,"RigidBodies")
        AddContainerToEnvironment oDefaultEnvironment,"Constraint",1,"Constraints"
        AddContainerToEnvironment oDefaultEnvironment,"Force",1,"Forces"
        set l_environment = ActiveProject.ActiveScene.ActiveSimulationEnvironment

        ' If the op is not there yet, add it:
        set l_oOperators = oDefaultEnvironment.Operators
        if l_oOperators.Count = 0 then
            applyop "NXDynamicsOp" , oDefaultEnvironment
        end if
    end if

    set cur_operator = l_environment.Operators.item( 0 )
    op_name_list = Split( cur_operator.FullName, ".")
    op_name = op_name_list( UBound( op_name_list ) )

    ' Fail if we're using ODE
    if op_name = "dynamicsop" then
        ' Compounds don't exist in ODE
        LogMessage "ODE does not support compound rigid bodies", siError
        exit sub
    end if

    
    ' Get input objects
    set l_ObjectList = SIFilter( in_objs, siObjectFilter )

    
    if typename(l_ObjectList) <> "Nothing" then
        ' The parent is the first body that's been selected that is an ACTIVE
        ' rigid body.

        bFoundParent = 0
        for each l_obj in l_ObjectList
            On Error Resume Next
            Set oRBProp = l_obj.Properties.find("RigidBodyProp")
            If TypeName( oRBProp ) <> "Nothing" Then
                if getvalue(oRBProp.passive) = false then
                    set oParent = l_obj
                    bFoundParent = 1
                    exit for
                End If
            end if
        next
        On Error Goto 0

        ' If none are found (i.e all are passive or non-rb's, then we grab the
        '   first one in the list and make it active
        if bFoundParent = 0 then
          set oParent = l_ObjectList.Item( 0 )

          ' disable object-by-object autoinspect, since we will autoinspect
          ' all shapes at the end
          PreviousAutoInspect = GetUserPref("AutoInspectEnabled")
          SetUserPref "AutoInspectEnabled", False
          CreateActiveRigidBody( oParent )
          SetUserPref "AutoInspectEnabled", PreviousAutoInspect         
        end if
        
        for each l_obj in l_ObjectList
            If l_obj.IsLocked() = True Then
                logmessage "Cannot change " & l_objTest & " because it is locked.", siError
            else
                if l_obj <> oParent Then
                    PreviousAutoInspect = GetUserPref("AutoInspectEnabled")
                    SetUserPref "AutoInspectEnabled", False
                    CreatePassiveRigidBody( l_obj )
                    SetUserPref "AutoInspectEnabled", PreviousAutoInspect         
                    oParent.AddChild( l_obj )
                end if
            end if
        next
    end If

    AutoInspect l_ObjectList, , , "Dynamics"
end sub




'------------------------------------------------------------------------------
' NAME:     AddCompoundShapeToRigidBodyProc
'
' DESCRIPTION: Creates a compound rigid body from the selected objects
'               (parented under a newly-created NULL)
'------------------------------------------------------------------------------
sub AddCompoundShapeToRigidBodyProc( byref in_parent , byref in_children )

    ' Get input objects
    Dim l_ParentList
    set l_ParentList = SIFilter( in_parent, siObjectFilter )
    Dim l_ChildList
    set l_ChildList = SIFilter( in_children, siObjectFilter )

    '''''''''''''''''
    ' Sanity checks '
    '''''''''''''''''
    
    ' Something must be selected
    If typename(l_ParentList) = "Nothing" Then
        If TypeName(l_ChildList) = "Nothing" Then
          logmessage "A rigid body must be selected", siError
          exit Sub
        End If

        ' Our parent list is empty, but we have children, so move the first
        '  child to the parent list
        Set l_ParentList = CreateObject("XSI.Collection")
        l_ParentList.Add( l_ChildList.Item(0) )
        l_ChildList.Remove( l_ChildList.Item(0) )

        ' Make sure the correct objects are echoed
        Set in_parent = l_ParentList
        Set in_children = l_ChildList
    Elseif l_ParentList.Count <> 0 Then
      If TypeName(l_ChildList) = "Nothing" Then
        Set l_ChildList = CreateObject("XSI.Collection")
      End If
      
      If l_ChildList.Count <> 0 Then
        Set l_tempList = CreateObject("XSI.Collection")
        For Each l_obj in l_ParentList
          l_tempList.Add( l_obj )
        Next
                
        l_ParentList.RemoveAll()
        l_ParentList.Add( l_tempList.Item(0) )
        l_ChildList.Remove( l_tempList.Item(0) )

        ' Make sure the correct objects are echoed
        Set in_parent = l_ParentList
        Set in_children = l_ChildList
      End If
    End If  

    
    num_added = 0
    Dim new_bodies
    for each l_obj in l_ParentList
        if l_obj.IsLocked() = True Then
            logmessage "Cannot change " & l_obj & " because it is locked.", siError
            exit sub
        end if

        On Error Resume Next
        Set oRBProp = l_obj.Properties.find("RigidBodyProp")
        If TypeName( oRBProp ) = "Nothing" Then
            ' LogMessage l_obj.Name & " did not have rigid body properties"

            PreviousAutoInspect = GetUserPref("AutoInspectEnabled")
            SetUserPref "AutoInspectEnabled", False
            CreateActiveRigidBody( l_obj )          
            SetUserPref "AutoInspectEnabled", PreviousAutoInspect         
        End If
        On Error Goto 0

        If l_ChildList.Count <> 0 Then
          For Each l_child in l_ChildList
            PreviousAutoInspect = GetUserPref("AutoInspectEnabled")
            SetUserPref "AutoInspectEnabled", False
            CreatePassiveRigidBody( l_child )
            SetUserPref "AutoInspectEnabled", PreviousAutoInspect         
            l_obj.AddChild l_child
            Application.Selection.Add l_child
            num_added = num_added + 1
            new_bodies = new_bodies & l_child & ","
          Next
        Else
          do until false
            PickElement , XSIUtils.Translate( IDS_ADD_COMPOUND_SHAPE_MSG_L, "XSISCRIPTS" ), "", l_PickedBody, l_button, 0, l_modifier
            
            ' RMB
            if l_button = 0 then 'exit when RMB or ESC key
              exit do
            end if
            
            ' LMB
            if l_button = 1 then
              ' Add this body to the compound shape list              
              PreviousAutoInspect = GetUserPref("AutoInspectEnabled")
              SetUserPref "AutoInspectEnabled", False
              CreatePassiveRigidBody( l_PickedBody )
              SetUserPref "AutoInspectEnabled", PreviousAutoInspect         
              l_obj.AddChild l_PickedBody
              Application.Selection.Add l_PickedBody
              num_added = num_added + 1
              new_bodies = new_bodies & l_PickedBody & ","
            end if
            
            ' MMB
            if l_button = 2 then
              exit do
            end if            
          Loop
        End If
    Next

    ' If we've added new shapes to the compound body, pop up a (possibly multi)
    ' ppg for them
    if num_added <> 0 Then
        new_bodies = Left(new_bodies, Len(new_bodies) - 1)  ' Trim off the traling comma
        AutoInspect new_bodies, , , "Dynamics"
    End if
end sub


''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' MakeObjectSimualtedProc installs an Evolve operator on the input object's geometry. Subsequent
' terminal nodes applied will be simulated. It also connects the Evolve operator to the current
' environment, or creates a new one if none exists.
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
sub MakeObjectSimulatedProc( byref in_objs )

    ' Get input objects. Only look at geometries.
    set oObjectList = SIFilter( in_objs, siGeometryFilter )
    
    ' Proceed only if we have at least an object selected
    if typename(oObjectList) <> "Nothing" then
    
        'Get the default environment
        set oDefaultEnvironment = ActiveProject.ActiveScene.ActiveSimulationEnvironment

        if typename(oDefaultEnvironment) = "Nothing" then
            set oDefaultEnvironment  = CreateEnvironment( "Environment" )
            AddContainerToEnvironment oDefaultEnvironment,"Force",1,"Forces"
        end if  

        set oTimeCtrl  = oDefaultEnvironment.simulationtimecontrol

        for each oObj in oObjectList
    
            ' Make sure each model has its cache:
            dim oCache
            set oModel = oObj.Model
            set oCache = oDefaultEnvironment.FindCacheForModel(oModel)
            if typename(oCache) = "Nothing" then
                set oCache = CreateEnvironmentCache(oModel, oDefaultEnvironment )
                oCache.name = oModel.Name & "_" & oDefaultEnvironment.Name & "_Cache"
            end if

            ApplyOp "EvolveOp", oObj.activeprimitive.fullname&";"&oObj.activeprimitive.fullname&";"&oTimeCtrl.fullname&";"&oCache.fullname
            
        next
    else
        logmessage "No valid objects were selected. Expecting geometry objects.", siError   
    end if

end sub

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' CacheObjectsIntoFileDialogProc creates a dialog for caching objects into files
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
sub CacheObjectsIntoFileDialogProc( )

  set objectList = SIFilter( selection, siGeometryFilter )
  if typename(objectList ) = "Nothing" then
  	logmessage "CacheObjectsIntoFileDialog: No valid geometries selected!",siError
	else
		dim prop,existed
		existed = False
		for each prop in ActiveSceneRoot.Properties
			if prop.name = "Caching_Options" Then
				existed = True
				exit for
			else 
				prop = 0
			end if
		next
		if IsNumeric(prop) then
			AddProp "Custom_parameter_list", ActiveSceneRoot , , "Caching_Options",prop
			set prop = prop(0)
		end if

		dim attr_coll(300),attr_found,attribute,i,attr_count
		for i = 0 to 299
			attr_coll(0) = ""
		next
		attr_count = 0
			
		If Not existed Then
			SIAddCustomParameter prop, "FileName", siString, , 0, 1, , 4, 0, 1
			SIAddCustomParameter prop, "Format", siString, , 0, 1, , 4, 0, 1
			SIAddCustomParameter prop, "Path", siString, , 0, 1, , 4, 0, 1
			SIAddCustomParameter prop, "PathFeedBack", siString, , 0, 1, , 6, 0, 1
			SIAddCustomParameter prop, "FrameStart", siInt4, GetValue("PlayControl.In"), -100000, 10000000, , 4, GetValue("PlayControl.In"), GetValue("PlayControl.Out")
			SIAddCustomParameter prop, "FrameEnd", siInt4, GetValue("PlayControl.Out"), -100000, 10000000, , 4, GetValue("PlayControl.In"), GetValue("PlayControl.Out")
			SIAddCustomParameter prop, "FrameStep", siInt4, 1, 1, 10000000, , 4, 1,4
			SIAddCustomParameter prop, "overwrite", siBool, 1, 0, 1, , 4, 0, 1

			
			' set the default values for the path!
			Dim pathIndex
			pathIndex = GetValue("preferences.simulation.defaulttemplateindex")
			If pathIndex = 0 Then
				prop.path.value = GetValue("preferences.simulation.cachetemplateprojectpath")
			ElseIf pathIndex = 1 Then
				prop.path.value = GetValue("preferences.simulation.cachetemplatelocalpath")
			ElseIf pathIndex = 2 Then
				prop.path.value = GetValue("preferences.simulation.cachetemplatepatha")
			ElseIf pathIndex = 3 Then
				prop.path.value = GetValue("preferences.simulation.cachetemplatepathb")
			Else
				prop.path.value = GetValue("preferences.simulation.cachetemplatepathc")
			End If			
			
			Dim filename
			filename = GetValue("preferences.simulation.cachetemplatefilename")
			filename = Replace(filename,"[version]","take1",1,10,1)
			If LCase(Right(filename,9)) = ".icecache" Then
				prop.filename.value = Left(filename,Len(filename)-9)
				prop.format.value = "ICECache"
			ElseIf LCase(Right(filename,4)) = ".pc2" Then
				prop.filename.value = Left(filename,Len(filename)-4)
				prop.format.value = "PC2"
			Else
				prop.filename.value = filename
				prop.format.value = "Custom"
			End If
		End If
			
		Dim types
		types = ""
		for each obj in objectList
			set geo = obj.activeprimitive.geometry
			for each attribute in obj.ActivePrimitive.Geometry.ICEAttributes
				if not attribute.IsReadOnly then
					attr_found = false
					for i = 0 to 299
						if attr_coll(i) = attribute.name then
							attr_found = true
						end if
					next
					if not attr_found then
						if 	attribute.name <> "Init" AND _
							attribute.name <> "ID" AND _
							attribute.name <> "subdloop" AND _
							attribute.name <> "subdrule" AND _
							attribute.DataType <> siICENodeDataPointLocator AND _
							left(attribute.name,7) <> "__Init_" then
							attr_coll(attr_count) = attribute.name
							attr_count = attr_count + 1
						end if
					end if
				end if
			Next
			types = types & obj.type
		next
		
		dim param
		for each attribute in attr_coll
			if attribute <> "" then
				attr_found = false
				for each param in prop.parameters
					if param.name = attribute then
						attr_found = true
					end if
				next
				if not attr_found then
					SIAddCustomParameter prop, "attr_" & attribute, siBool, CachingIsStandardAttribute(types,attribute), 0, 1, , 4, 0, 1
				end if
			end if
		next
		
		dim item
		dim ppg
		set ppg = prop.ppglayout
		ppg.clear
		ppg.AddTab "General"
		ppg.AddRow()
		ppg.AddGroup("FileName")
		set item = ppg.AddItem("FileName")
		item.SetAttribute siUINoLabel, True
		ppg.EndGroup()		
		ppg.AddGroup("Format")
		set item = ppg.AddEnumControl("Format",_
			Array ("ICECache","ICECache","PC2","PC2","Custom",""),"")
		item.SetAttribute siUINoLabel, True
		ppg.EndGroup()
		ppg.EndRow()
		ppg.AddGroup("Path")
		Set item = ppg.AddItem("Path","",siControlFolder)
		item.SetAttribute siUINoLabel, True
		Set item = ppg.AddItem("PathFeedBack")
		item.SetAttribute siUINoLabel, True
		
		' uncomment this to add buttons for the path presets
		'ppg.AddRow()
		'Set item = ppg.AddButton("SetToProjectPath","Project")
		'Set item = ppg.AddButton("SetToTempPath","Temp")
		'Set item = ppg.AddButton("SetToPathA","Path A")
		'Set item = ppg.AddButton("SetToPathB","Path B")
		'Set item = ppg.AddButton("SetToPathC","Path C")
		'ppg.EndRow()
		
		ppg.EndGroup()
		ppg.AddGroup("Time Range")
		Set item = ppg.AddItem("FrameStart","start")
		Set item = ppg.AddItem("FrameEnd","end")
		Set item = ppg.AddItem("FrameStep","step")
		ppg.EndGroup()
		ppg.AddGroup("Options")
		set item = ppg.AddItem("overwrite","Overwrite existing files")
		ppg.EndGroup()
		ppg.AddRow()
		Set item = ppg.AddButton("TakeAction","Cache!")
		Item.SetAttribute siUIAlignLeft,true
		Set item = ppg.AddButton("InspectPrefs","Preferences")
		Item.SetAttribute siUIAlignRight,true
		ppg.EndRow()

		ppg.AddTab "Attributes"
		ppg.AddRow()
		Set item = ppg.AddButton("UncheckAll","Uncheck All")
		Item.SetAttribute siUIAlignLeft,true
		Set item = ppg.AddButton("CheckAll","Check All")
		Item.SetAttribute siUIAlignRight,true
		ppg.EndRow()
		For each attribute in attr_coll
			set item = ppg.AddItem("attr_" & attribute,attribute)
		Next
		
		dim code
		code = "sub OnInit()" & VBLf
		code = code & "Path_OnChanged" & VBLf ' add the behaviour for the
		code = code & "end sub" & VBLf
		code = code & "sub Path_OnChanged()" & VBLf
		code = code & "dim pathname,object,model" & VBLf
		code = code & "if selection.count > 0 then" & VBLf
		code = code & "object = selection(0).name" & VBLf
		code = code & "model = selection(0).model.name" & VBLf
		code = code & "else" & VBLf
		code = code & "object = " & Chr(34) & "object" & Chr(34) &  VBLf
		code = code & "model = " & Chr(34) & "model" & Chr(34) &  VBLf
		code = code & "end if" &  VBLf
		code = code & "pathname = Path.value" & VBLf
		code = code & "if Right(pathname,1) <> " & Chr(34) & "/" & Chr(34)  & " AND Right(pathname,1) <> " & Chr(34) & "\" & Chr(34)  & " then" & VBLf
		code = code & "pathname = pathname & " & Chr(34) & "/" & Chr(34) & VBLf
		code = code & "end if" & VBLf
		code = code & "pathname = pathname & filename" & VBLf
		code = code & "if LCase(format.value) = " & Chr(34) & "icecache" & Chr(34) & " then" & VBLf
		code = code & "pathname = pathname & " & Chr(34) & ".icecache" & Chr(34) & VBLf		
		code = code & "elseif LCase(format.value) = " & Chr(34) & "pc2" & Chr(34) & " then" & VBLf
		code = code & "if LCase(Right(pathname,8)) = " & Chr(34) & "_[frame]" & Chr(34) & " then" & VBLf		
		code = code & "pathname = Left(pathname,Len(pathname)-8)" & VBLf		
		code = code & "end if" & VBLf		
		code = code & "if LCase(Right(pathname,8)) = " & Chr(34) & ".[frame]" & Chr(34) & " then" & VBLf		
		code = code & "pathname = Left(pathname,Len(pathname)-8)" & VBLf		
		code = code & "end if" & VBLf		
		code = code & "if LCase(Right(pathname,7)) = " & Chr(34) & "[frame]" & Chr(34) & " then" & VBLf		
		code = code & "pathname = Left(pathname,Len(pathname)-7)" & VBLf		
		code = code & "end if" & VBLf		
		code = code & "pathname = pathname & " & Chr(34) & ".pc2" & Chr(34) & VBLf		
		code = code & "end if" & VBLf		
		code = code & "pathname = Replace(pathname," & Chr(34) & "[object]" & Chr(34) & ",object,1,10,1)" & VBLf		
		code = code & "pathname = Replace(pathname," & Chr(34) & "[model]" & Chr(34) & ",model,1,10,1)" & VBLf		
		code = code & "pathname = XSIUtils.ResolvePath(pathname)" & VBLf		
		code = code & "pathfeedback.value = pathname" & VBLf		
		code = code & "end sub" & VBLf
		code = code & "sub FileName_OnChanged()" & VBLf
		code = code & "Path_OnChanged" & VBLf
		code = code & "end sub" & VBLf
		code = code & "sub Format_OnChanged()" & VBLf
		code = code & "Path_OnChanged" & VBLf
		code = code & "end sub" & VBLf
	
		code = code & "sub TakeAction_OnClicked()" & VBLf
		code = code & "dim attributes,prop" & VBLf
		code = code & "set prop = PPG.Inspected(0)" & VBLf
		code = code & "attributes = " & Chr(34) & Chr(34) & VBLf
		code = code & "for each param in prop.parameters" & VBLf
		code = code & "if left(param.name,5) = " & Chr(34) & "attr_" & Chr(34) & " then" & VBLf
		code = code & "if param.value = true then" & VBLf
		code = code & "if attributes <> " & Chr(34) & Chr(34) & " then" & VBLf
		code = code & "attributes = attributes & " & Chr(34) & "," & Chr(34) & VBLf
		code = code & "end if" & VBLf
		code = code & "attributes = attributes & right(param.name,len(param.name)-5)" & VBLf
		code = code & "end if" & VBLf
		code = code & "end if" & VBLf
		code = code & "next" & VBLf
		code = code & "dim path" & VBLf
		code = code & "path = prop.path.value" & VBLf
		code = code & "if Right(path,1) <> " & Chr(34) & "/" & Chr(34)  & " AND Right(path,1) <> " & Chr(34) & "\" & Chr(34)  & " then" & VBLf
		code = code & "path = path & " & Chr(34) & "/" & Chr(34) & VBLf
		code = code & "end if" & VBLf
		code = code & "path = path & prop.filename.value" & VBLf
		code = code & "if LCase(prop.format.value) = " & Chr(34) & "icecache" & Chr(34) & " then" & VBLf
		code = code & "path = path & " & Chr(34) & ".icecache" & Chr(34) & VBLf		
		code = code & "elseif LCase(prop.format.value) = " & Chr(34) & "pc2" & Chr(34) & " then" & VBLf
		code = code & "if LCase(Right(path,8)) = " & Chr(34) & "_[frame]" & Chr(34) & " then" & VBLf		
		code = code & "path = Left(path,Len(path)-8)" & VBLf		
		code = code & "end if" & VBLf		
		code = code & "if LCase(Right(path,8)) = " & Chr(34) & ".[frame]" & Chr(34) & " then" & VBLf		
		code = code & "path = Left(path,Len(path)-8)" & VBLf		
		code = code & "end if" & VBLf		
		code = code & "if LCase(Right(path,7)) = " & Chr(34) & "[frame]" & Chr(34) & " then" & VBLf		
		code = code & "path = Left(path,Len(path)-7)" & VBLf		
		code = code & "end if" & VBLf		
		code = code & "path = path & " & Chr(34) & ".pc2" & Chr(34) & VBLf		
		code = code & "end if" & VBLf		
		code = code & "CacheObjectsIntoFile objectList,5,prop.framestart.value,prop.frameend.value,_" & VBLf
		code = code & "prop.framestep.value,prop.overwrite.value,true,attributes," & Chr(34) & "take1" & Chr(34) & ",path" & VBLf
		code = code & "end sub" & VBLf
		code = code & "sub InspectPrefs_OnClicked()" & VBLf
		code = code & "InspectPreferences " & Chr(34) & "Simulation" & Chr(34) & VBLf
		code = code & "end sub" & VBLf
		
		code = code & "sub UncheckAll_OnClicked()" & VBLf
		code = code & "SetValue PPG.Inspected(0) & " & Chr(34) & ".attr_*" & Chr(34) & ",false" & VBLf
		code = code & "end sub" & VBLf
		code = code & "sub CheckAll_OnClicked()" & VBLf
		code = code & "SetValue PPG.Inspected(0) & " & Chr(34) & ".attr_*" & Chr(34) & ",true" & VBLf
		code = code & "end sub" & VBLf
		code = code & "sub SetToProjectPath_OnClicked()" & VBLf
		code = code & "SetValue PPG.Inspected(0) & " & Chr(34) & ".path" & Chr(34) & ", GetValue(" & Chr(34) & "preferences.simulation.cachetemplateprojectpath" & Chr(34) & ")" &VBLf
		code = code & "Path_OnChanged" & VBLf
		code = code & "end sub" & VBLf
		code = code & "sub SetToTempPath_OnClicked()" & VBLf
		code = code & "SetValue PPG.Inspected(0) & " & Chr(34) & ".path" & Chr(34) & ", GetValue(" & Chr(34) & "preferences.simulation.cachetemplatelocalpath" & Chr(34) & ")" &VBLf
		code = code & "Path_OnChanged" & VBLf
		code = code & "end sub" & VBLf
		code = code & "sub SetToPathA_OnClicked()" & VBLf
		code = code & "SetValue PPG.Inspected(0) & " & Chr(34) & ".path" & Chr(34) & ", GetValue(" & Chr(34) & "preferences.simulation.cachetemplatepatha" & Chr(34) & ")" &VBLf
		code = code & "Path_OnChanged" & VBLf
		code = code & "end sub" & VBLf
		code = code & "sub SetToPathB_OnClicked()" & VBLf
		code = code & "SetValue PPG.Inspected(0) & " & Chr(34) & ".path" & Chr(34) & ", GetValue(" & Chr(34) & "preferences.simulation.cachetemplatepathb" & Chr(34) & ")" &VBLf
		code = code & "Path_OnChanged" & VBLf
		code = code & "end sub" & VBLf
		code = code & "sub SetToPathC_OnClicked()" & VBLf
		code = code & "SetValue PPG.Inspected(0) & " & Chr(34) & ".path" & Chr(34) & ", GetValue(" & Chr(34) & "preferences.simulation.cachetemplatepathc" & Chr(34) & ")" &VBLf
		code = code & "Path_OnChanged" & VBLf
		code = code & "end sub" & VBLf
		
		ppg.logic = code

		InspectObj prop,,XSIUtils.Translate( IDS_CACHE_OPTION_DIALOG_TITLE, "XSISCRIPTS" )
	end if
	
end Sub

Function CachingIsStandardAttribute(in_type,in_attribute)
	CachingIsStandardAttribute = False
	
	If InStr(LCase(in_type),"pointcloud") <> 0 Then
		If LCase(in_attribute) = "pointposition" Then
			CachingIsStandardAttribute = True
		ElseIf LCase(in_attribute) = "color" Then
			CachingIsStandardAttribute = True
		ElseIf LCase(in_attribute) = "force" Then
			CachingIsStandardAttribute = True
		ElseIf LCase(in_attribute) = "mass" Then
			CachingIsStandardAttribute = True
		ElseIf LCase(in_attribute) = "orientation" Then
			CachingIsStandardAttribute = True
		ElseIf LCase(in_attribute) = "pointvelocity" Then
			CachingIsStandardAttribute = True
		ElseIf LCase(in_attribute) = "scale" Then
			CachingIsStandardAttribute = True
		ElseIf LCase(in_attribute) = "shape" Then
			CachingIsStandardAttribute = True
		ElseIf LCase(in_attribute) = "shapeinstancetime" Then
			CachingIsStandardAttribute = True
		ElseIf LCase(in_attribute) = "simulatedframefraction" Then
			CachingIsStandardAttribute = True
		ElseIf LCase(in_attribute) = "size" Then
			CachingIsStandardAttribute = True
		ElseIf LCase(in_attribute) = "spriteangle" Then
			CachingIsStandardAttribute = True
		ElseIf LCase(in_attribute) = "state_id" Then
			CachingIsStandardAttribute = True
		ElseIf LCase(in_attribute) = "state_transition_time" Then
			CachingIsStandardAttribute = True
		ElseIf LCase(in_attribute) = "strandorientation" Then
			CachingIsStandardAttribute = True
		ElseIf LCase(in_attribute) = "strandposition" Then
			CachingIsStandardAttribute = True
		ElseIf LCase(in_attribute) = "strandsize" Then
			CachingIsStandardAttribute = True
		ElseIf LCase(in_attribute) = "strandvelocity" Then
			CachingIsStandardAttribute = True
		End If
	Else
		If LCase(in_attribute) = "pointposition" Then
			CachingIsStandardAttribute = True
		End If
	End If
End Function

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' Func: 	EditICECompoundPPGLogicProc
' Date: 	May 2010
' Author: 	Francis Brissette
'
' Desc:		Helper to edit the PPG Logic of an ICE Compound.
'			It pops up a modal pset with a text editor
'			and execute the EditICECompoundProperties command.
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Function EditICECompoundPPGLogicProc( in_obj )
	EditICECompoundPPGLogicProc = False
	
	'-------------------------------------------------------------------------
	' Get the initial PPG values
	'-------------------------------------------------------------------------
	Dim aResults
	aResults = GetICECompoundProperties( in_obj )
	If UBound( aResults ) < 12 Then
		Exit Function
	End If
	
	' Default language is VBScript
	Dim strLogic, strLang
	strLogic = aResults(11)
	strLang  = aResults(12)
	If strLang = "" Then
		strLang = "VBScript"
	End If
	
	'-------------------------------------------------------------------------
	' Create the temp PSet
	'-------------------------------------------------------------------------
	Dim oPSet, oParamLang, oParamLogic
	set oPSet				= ActiveSceneRoot.AddProperty( "CustomProperty", false, "ICE Compound PPG Logic" )
	set oParamLang			= oPSet.AddParameter3( "Language", siString, strLang )
	set oParamLogic			= oPSet.AddParameter3( "Logic", siString, strLogic )

	'-------------------------------------------------------------------------
	' Prepare Layout
	'-------------------------------------------------------------------------
	dim oLayout, aComboItems, oLayLang, oLayLogic
	set oLayout = oPSet.PPGLayout
	
	aComboItems = Array( "VBScript", "VBScript", "JScript", "JScript", "Python", "Python" )
	oLayout.AddGroup "Scripting Language"
		set oLayLang = oLayout.AddEnumControl( "Language", aComboItems, "Scripting Language", siControlCombo )
		oLayLang.SetAttribute siUINoLabel, true
	oLayout.EndGroup

	oLayout.AddGroup "Logic"
		set oLayLogic = oLayout.AddItem( "Logic", , siControlTextEditor )
		oLayLogic.SetAttribute siUINoLabel, true
		oLayLogic.SetAttribute siUIHeight, 600
		oLayLogic.SetAttribute siUIWidth, 600
		oLayLogic.SetAttribute siUILineNumbering, true
		oLayLogic.SetAttribute siUIMarginWidth, 6
		oLayLogic.SetAttribute siUIFolding, true
		oLayLogic.SetAttribute siUIFont, "Tahoma"
		oLayLogic.SetAttribute siUICommentFont, "Comic Sans MS"
		oLayLogic.SetAttribute siUIPreprocessorColor, 128'0x000080
		oLayLogic.SetAttribute siUICommentColor, 32768 '0x008000
	oLayout.EndGroup

	oLayout.Logic = _
	"																				" & vbCrLf & _
	"	Sub OnInit()			 													" & vbCrLf & _
	"		Language_Onchanged()													" & vbCrLf & _
	"	End Sub																		" & vbCrLf & _
	"																				" & vbCrLf & _
	"	Sub Language_Onchanged() 													" & vbCrLf & _
	" 		set oLayout = PPG.PPGLayout												" & vbCrLf & _
	" 		set oLayLogic = oLayout.Item(""Logic"")									" & vbCrLf & _
	" 		oLayLogic.SetAttribute siUILanguage,  PPG.Language.Value				" & vbCrLf & _
	" 		PPG.Refresh																" & vbCrLf & _
	"	End Sub																		" & vbCrLf & _
	""


	'-------------------------------------------------------------------------
	' Display Modal PSet
	'-------------------------------------------------------------------------
	Dim aCancelled
	aCancelled = InspectObj( oPSet, , XSIUtils.Translate( IDS_ICE_COMPOUND_PPG_LOGIC_TITLE, "XSISCRIPTS" ), siModal, false )
	
	'-------------------------------------------------------------------------
	' Set PPGLogic
	'-------------------------------------------------------------------------
	if Not aCancelled then
		' Set back the same values except for the PPGLogic and PPGLogicLanguage parameters
		EditICECompoundProperties	in_obj, aResults(0), aResults(1), aResults(2), aResults(3), aResults(4), _
									aResults(5), aResults(6), aResults(7), aResults(8), aResults(9), aResults(10), _
									oParamLogic.Value, oParamLang.Value
		EditICECompoundPPGLogicProc = True
	end if

	'Cleanup
	DeleteObj oPSet
End Function

'------------------------------------------------------------------------------
' NAME:		CacheObjectsIntoFileProc
' Date: 	September 2011
' Author: 	Francis Brissette
'
' Desc:		Caches the specified list of objects into cache files.
'			It also makes sure the timeline includes the first/last frame to cache.
'------------------------------------------------------------------------------
sub CacheObjectsIntoFileProc( _
	in_objectsToCache, _
	in_iPathID, _
	in_iFirstFrame, _
	in_iLastFrame, _
	in_iFramesPerStep, _
	in_bOverwrite, _
	in_bShowProgressbar, _
	in_strAttributes, _
	in_strVersion, _
	in_strAlternativePath, _
	in_bKineAnimation, _
	in_strTargetCacheObjects _
)
	' Make sure the timeline includes the first/last frame to cache
	dim oPlayControl
	set oPlayControl = ActiveProject2.Properties( "Play Control" )
	
	prevInValue = oPlayControl.Parameters( "In" ).Value
	prevOutValue = oPlayControl.Parameters( "Out" ).Value
	prevGlobalInValue = oPlayControl.Parameters( "GlobalIn" ).Value
	prevGlobalOutValue = oPlayControl.Parameters( "GlobalOut" ).Value
	
	if in_iFirstFrame < prevInValue then
		oPlayControl.Parameters( "In" ).Value = in_iFirstFrame
	end if
	
	if in_iLastFrame > prevOutValue then
		oPlayControl.Parameters( "Out" ).Value = in_iLastFrame
	end if


	CacheObjectsIntoFile_Private	in_objectsToCache, _
									in_iPathID, _
									in_iFirstFrame, _
									in_iLastFrame, _
									in_iFramesPerStep, _
									in_bOverwrite, _
									in_bShowProgressbar, _
									in_strAttributes, _
									in_strVersion, _
									in_strAlternativePath, _
									in_bKineAnimation, _
                                    0, _
                                    Array(), _
									in_strTargetCacheObjects


	' Set the timeline as it was before the caching
	oPlayControl.Parameters( "In" ).Value = prevInValue
	oPlayControl.Parameters( "Out" ).Value = prevOutValue
	oPlayControl.Parameters( "GlobalIn" ).Value = prevGlobalInValue
	oPlayControl.Parameters( "GlobalOut" ).Value = prevGlobalOutValue

end sub
