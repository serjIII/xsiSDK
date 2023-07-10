'******************************************************************************
'
' File supervisor : Rejean Gagne, well not really me...
' Date : dec 99
' (c) Copyright 1999 Softimage
'
' $Archive:  $
' $Revision:  $  $Date:  $
' Checkin by: $Author:  $
'
' @doc
' @module	chains.vbs | VB scripts related to chains
'
'******************************************************************************

'******************************************************************************
' DEBUGGING
'******************************************************************************

' DEVNOTE: remove comment to force explicit declaration of local variables.
' Must appear in a file before any other source code statements.
'Option explicit

' DEVNOTE: remove comment to force a break point when script loaded.
'stop

'******************************************************************************
' String Constants (used to translate)
'******************************************************************************
const IDS_CHAIN_FROM_CURVE_WIZARD_TITLE		= 1045

' CONSTANTS For SIFilter
'const siObjectFilter	= "sceneobject"
'const siSceneFilter	= "scene"

' CONSTANTS for Joint Types (these are uninspectable so i'll keep them local to this file)
const siJointHinge	= 1
const siJointBall	= 2


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
' NAME:		FGetChildBone
'
' INPUT:	- in_ChainNode:		a chain node
'
' OUTPUT:	- child bone
'
' DESCRIPTION: Return the child bone of a given node, if any
'------------------------------------------------------------------------------
Function FGetChildBone( in_ChainNode )
	set FGetChildBone = Nothing

	if IsEmpty(in_ChainNode) Or TypeName(in_ChainNode) = "Nothing" Then
		exit function
	end if
	 
	set l_ChildrenNodes = EnumElements( in_ChainNode & ".Children" )
	
	if IsEmpty(l_ChildrenNodes) Or TypeName(l_ChildrenNodes) = "Nothing" Then
		exit function
	end if
	
	set l_ChildChainNodes = SIFilter( l_ChildrenNodes ,"chain_element", TRUE )

	for each item in l_ChildChainNodes
		if item.Type = "bone" then
			set FGetChildBone = item
			exit function
		end if
	next
end function

'------------------------------------------------------------------------------
' NAME:		FGetSkeletonBones
'
' INPUT:	- in_Node:	A node in the chain
'
' OUTPUT:	- List of bones
'
' DESCRIPTION: Returns the list of bones of a chain, given any node in the chain
' MCF		   Obsolete since the function GetSkeleton now returns all the chain 
'			   elements
'------------------------------------------------------------------------------
'Function FGetSkeletonBones ( in_Node )
'
'	set FGetSkeletonBones = Nothing
'
'	set in_ChainNode = SIFilter( in_Node,"chain_element", TRUE )(0)
'	if IsEmpty(in_ChainNode) Or TypeName(in_ChainNode) = "Nothing" Then
'		exit function
'	end if
'	
'	GetSkeletonInfo in_ChainNode, , l_Root
'	if TypeName(l_Root) = "Nothing" then
'		exit function
'	end if
'
'	if l_Root.type = "root" then
'
'		set l_Bones = CreateObject("XSI.Collection") 		
'		set l_Bone = FGetChildBone( l_Root )
'
'		do while Not TypeName(l_Bone) = "Nothing"
'			l_Bones.Add l_Bone
'			set l_Bone = FGetChildBone( l_Bone )
'		loop
'		set FGetSkeletonBones = l_Bones
'	end if
'	
'end function



'------------------------------------------------------------------------------
' NAME:	SetAllViews
'
' INPUT:	- 
'
' OUTPUT:	- 
'
' DESCRIPTION: 
'------------------------------------------------------------------------------
sub SetAllViews ( path, newstate )	
	Dim AllViews, AllCams, currPath, view, cam	
	AllViews = Array( "A", "B", "C", "D")	
	AllCams = Array( "User", "Top", "Front", "Right")

	For Each view In AllViews
		For Each cam in AllCams
			currPath = "Views.View" & view & "." & cam & "Camera."
			state = GetValue( currPath & path )
			if Not state = newstate Then
				SetValue currPath & path , newstate
			End if
		Next
	Next
end sub

'------------------------------------------------------------------------------
' NAME:	SetJointMinMaxProc
'
' INPUT:	- in_SelList	' Selection list
'
' INPUT:	- in_DoMin		' Boolean: set the min (or the max) range
'
' OUTPUT:	- none
'
' DESCRIPTION: Sets the min or max rotation limit of the selected bone(s) joint
'				to their current rotation value.
'------------------------------------------------------------------------------
sub SetJointMinMaxProc ( in_SelList, in_DoMin )

	Dim l_Boundtype

	if IsEmpty(in_SelList) Or TypeName(in_SelList) = "Nothing" Then
		LogMessage "Please select a bone first"
		exit sub
	End if

	l_Boundtype = "Max"
	if in_DoMin Then 
		l_Boundtype = "Min" 
	End if


	'Force Joint Area visibility On.
	SetAllViews "camvis.attrselchnjntareaguide", True
	SetAllViews "camvis.attrunselchnjntareaguide", True
	' Fudge! These actually lead to a crash when i open the script editor!!!!
	' Will have to debug that later on...
	'SetValue "*.camvis.attrselchnjntareaguide,Views.*.*.camvis.attrselchnjntareaguide", TRUE
	'SetValue "*.camvis.attrunselchnjntareaguide,Views.*.*.camvis.attrunselchnjntareaguide", TRUE

	for each elem in in_SelList
		'Check if valid Bone/Joint here
		If elem.Type = "bone" then
			'Activate the RotationLimits
			SetValue elem & ".joint.rotlim_active", TRUE


			' Get the current rotation values
			currRotX = GetValue(elem & ".kine.local.rotx")
			currRotY = GetValue(elem & ".kine.local.roty")	
			currRotZ = GetValue(elem & ".kine.local.rotz")

		
				' Set the Min/Max Values
			SetValue elem & ".joint.rot" & l_Boundtype & "X", currRotX	
			SetValue elem & ".joint.rot" & l_Boundtype & "Y", currRotY
			SetValue elem & ".joint.rot" & l_Boundtype & "Z", currRotZ
		end if
	next
end sub

'------------------------------------------------------------------------------
' NAME:	SetJointsToPrefRotations 
'
' INPUT:	- in_SelList	' Selection list
'
' OUTPUT:	- none
'
' DESCRIPTION: Sets the rotation of the selected bone(s) joint to their preferred rotations
'------------------------------------------------------------------------------ 
sub SetJointsToPrefRotations( in_SelList )

	if IsEmpty(in_SelList) Or TypeName(in_SelList) = "Nothing" Then
		LogMessage "Please select a bone first"
		exit sub
	End if

	for each elem in in_SelList
		'Check if valid Bone/Joint here
		If elem.Type = "bone" then

			' Get the current preferred rotation values
			prefRotX = GetValue(elem & ".joint.prefrotx")
			prefRoty = GetValue(elem & ".joint.prefroty")
			prefRotz = GetValue(elem & ".joint.prefrotz")

		
			' Set the Min/Max Values
			Rotate elem, prefRotX, prefRoty, prefRotZ, siAbsolute, siLocal, siObj, siXYZ
		end if
	next
end sub


'------------------------------------------------------------------------------
' NAME:	BreakChainAtJointProc
'
' INPUT:	- in_SelList	' Selection list
'
' OUTPUT:	- none
'
' DESCRIPTION: Toggles the pseudo-root state (pinned) of selected joints.
'------------------------------------------------------------------------------
sub BreakChainAtJointProc( in_SelList )

	Dim	elem, l_currState, l_SelList

	'Filter The Selection List for bones (well, for chain elements).
	set l_SelList = SIFilter( in_SelList ,"chain_element", TRUE )

	if IsEmpty(l_selList) Or TypeName(l_selList) = "Nothing" Then
		LogMessage "Please select a bone first"
		exit sub
	End if

	for each elem in l_selList
		'Check if valid Bone/Joint here
		If elem.Type = "bone" or elem.Type = "eff" then 
			'get the Activeness State.
			l_currState = GetValue( elem & ".joint.pseudoroot_active")

			if l_currState then
				SetValue elem & ".joint.pseudoroot_active", FALSE
				SetValue elem & ".joint.chntype", 0.000
				SetValue elem & ".kine.local.cnspos", TRUE
			else
				SetValue elem & ".joint.pseudoroot_active", TRUE
				SetValue elem & ".joint.chntype", 1.000
				SetValue elem & ".kine.local.cnspos", FALSE
			end if
		end if
	next
end sub

'------------------------------------------------------------------------------
' NAME:	AddBoneToEndProc
'
' INPUT:	- in_SelList	' Selection list
'
' OUTPUT:	- none
'
' DESCRIPTION: UI only procedure that lets the user draw additional bones to a selected chain
'------------------------------------------------------------------------------
sub AddBoneToEndProc( in_SelList )

	Dim		l_SelList, l_Elem, l_Effector, l_Pos, l_Cancel, l_ChainElements, l_NumBones

	'Filter The Selection List for bones (well, for chain elements).
	set l_SelList = SIFilter( in_SelList ,"chain_element", TRUE )

	if IsEmpty(l_selList) Or TypeName(l_selList) = "Nothing" then
		LogMessage "Please select a chain element first"
		exit sub
	End if

	' We consider only the first selected item
	l_Elem = l_SelList(0)

	'Get the effector
	set l_ChainElements = GetSkeleton( l_Elem )
	l_Effector = l_ChainElements( l_ChainElements.Count - 1 )

	'Loop over pick position
	l_Cancel = FALSE
	do while l_Cancel = FALSE	
		set l_Pos = PickPosition("Append Bone")
		' Exit if the Right Button was pressed.
		if l_Pos.value("ButtonPressed") = 0 then
			l_Cancel = TRUE
			exit do	
		end if
		'Add the bone
		AppendBone l_Effector, l_Pos.value("PosX"), l_Pos.value("PosY"), l_Pos.value("PosZ")
	loop

end sub




'------------------------------------------------------------------------------
' NAME:	DrawChainfromCurveProc
'
' INPUT:	- in_Curve		' Curve to use as support for spline IK
'
' INPUT:	- in_NbJoints	' Number of joints to create
'
' OUTPUT:	- none
'
' DESCRIPTION: Draws a chain based on a curve
'------------------------------------------------------------------------------
function DrawChainfromCurveProc( in_Curve, in_NbJoints )

	Dim l_fractionstep, l_fraction, i
	Dim l_posx, l_posy, l_posz
	Dim l_rootx, l_rooty, l_rootz
	Dim l_root

	set DrawChainfromCurveProc = Nothing
	l_root = Null

	' Force a minimum number of joints
	if ( in_NbJoints = 0 ) then
		in_NbJoints = 2
	end if

	l_fractionstep = 1 / in_NbJoints
	l_fraction = 0.0

    for i = 0 to in_NbJoints
		set rtn = EvaluateCurveAt( in_Curve, l_fraction, TRUE ) 
		l_posx = rtn.value("PosX") 
		l_posy = rtn.value("PosY") 
		l_posz = rtn.value("PosZ")

		if i = 0 then
			l_rootx = l_posx
			l_rooty = l_posy
			l_rootz = l_posz
		elseif i = 1 then
			'96837: make sure normal is not the same direction as the first bone vector.
			set l_vBone = XSIMath.CreateVector3
			set l_vNormal = XSIMath.CreateVector3
			l_vBone.Set l_posx-l_rootx, l_posy-l_rooty, l_posz-l_rootz 
			l_vNormal.Set 0,1,0
			l_vBone.NormalizeInPlace
			l_vBone.NormalizeInPlace
			if (l_vBone.Dot(l_vNormal) - 1) < 0.00001 then l_vNormal.Set 1,0,0

			set l_root = Create3DSkeleton( l_rootx, l_rooty, l_rootz, l_posx, l_posy, l_posz, l_vNormal.x, l_vNormal.y, l_vNormal.z )
		else
			AppendBone , l_posx, l_posy, l_posz, FALSE
		end if

		l_fraction = l_fraction + l_fractionstep
	next

	Set DrawChainfromCurveProc = l_root
end function



'------------------------------------------------------------------------------
' NAME:	DrawSplineIKProc
'
' INPUT:	- in_Curve		' Curve to use as support for spline IK
'
' INPUT:	- in_NbJoints	' Number of joints to create
'
' OUTPUT:	- none
'
' DESCRIPTION: Draws a chain that will get deformed by deforming a base curve
'------------------------------------------------------------------------------
function DrawSplineIKProc( in_Curve, in_NbJoints )

	Dim	l_crvLen, l_crvStep, l_Perc, i, l_root, l_bone, l_effector
	Dim	l_SupCurve, l_CrvDefop, l_PathCns, l_NewChain, l_item
	Dim l_oPointArray()

	set DrawSplineIKProc = Nothing

	l_crvLen  = GetCurveLength( in_Curve ).value("Length")
	l_crvStep = l_crvLen / in_NbJoints

	redim l_oPointArray(in_NbJoints*4+3)

	'Draw the Support Curve.
	For i=0 To in_NbJoints
		l_oPointArray(i*4+0)	= 0 			'x
		l_oPointArray(i*4+1)	= i * l_crvStep	'y
		l_oPointArray(i*4+2)	= 0				'z
		l_oPointArray(i*4+3)	= 1				'w
	Next

	set l_SupCurve = in_Curve.Parent.AddNurbsCurve(l_oPointArray,,,1,siNonUniformParameterization,,in_Curve & "_crv")

	'Deform on the Input Curve
	l_CrvDefop = ApplyOperator( "CrvDeform", l_SupCurve & ";" & in_Curve )
	SetValue l_CrvDefop & ".cns2deformer", TRUE

	'Draw the Chain with bones of proper length and keep the pieces around
	set l_NewChain = CreateObject("XSI.Collection")

	set l_root = Create3DSkeleton( 0,0,0  ,0, l_crvStep, 0, 1,0,0)
	l_NewChain.Add l_root

	For i=2 To in_NbJoints
		l_bone = AppendBone( , 0, i * l_crvStep, 0, FALSE )
		l_NewChain.Add l_bone
	Next
	
	'Get the effector
	set l_ChainElements = GetSkeleton( l_bone )
	l_effector = l_ChainElements( l_ChainElements.Count - 1 )

	l_NewChain.Add l_effector

	'Create the Path constraint for every Bone
	i = 0
	For each l_item in l_NewChain

		l_Perc = ( i * l_crvStep * 100 ) / l_crvLen
		set l_PathCns = SIApplyCns( "Path", l_item, l_SupCurve )
		SetValue l_PathCns & ".perc", l_Perc
		i = i + 1
	next

	set DrawSplineIKProc = l_root
end function


'------------------------------------------------------------------------------
' NAME:	CreateChainFromCurveProc
'
' INPUT:	- in_CurveList	' List of curves
' INPUT:	- in_NbJoints	' Number of bones to create
' INPUT:	- in_UseCns		' Constrain to curve (or not)
'
' OUTPUT:	- none
'
' DESCRIPTION: .....
'------------------------------------------------------------------------------
function CreateChainFromCurveProc( in_CurveList, in_NbJoints, in_UseCns )

	Dim l_Curve, l_Roots

	set CreateChainFromCurveProc = Nothing
	set l_Roots = CreateObject("XSI.Collection")

	for each l_Curve in in_CurveList
		if in_UseCns then
			set l_root = DrawSplineIKProc( l_Curve, in_NbJoints )
		else
			set l_root = DrawChainfromCurveProc( l_Curve, in_NbJoints )
		end if
		l_Roots.Add l_root
	next

	set CreateChainFromCurveProc = l_Roots
end function

'------------------------------------------------------------------------------
' NAME:	GetInputAndCreateChainFromCurveProc
'
' INPUT:	- in_CurveList	' List of curves
' INPUT:	- in_NbJoints	' Number of bones to create
' INPUT:	- in_UseCns		' Constrain to curve (or not)
'
' OUTPUT:	- none
'
' DESCRIPTION: Brings a modal dialogue asking the user for input and calls the appropriate 
'				draw subroutine.
'------------------------------------------------------------------------------
sub GetInputAndCreateChainFromCurveProc( in_SelList, in_NbJoints, in_UseCns )


	Dim l_CurveList, l_Curve, l_SceneRoot, l_PPG, l_PPGName

	'SIFilter uses the current Selection by default.
	set l_CurveList = SIFilter( in_SelList, "curve" )

	if typename(l_CurveList) = "Nothing" then
		LogMessage "Please select at least one Curve...", 4
		exit sub
	end if

	set l_SceneRoot = FGetSceneRoot

	'Build the Dialog for input from the user

	l_PPGName = XSIUtils.Translate( IDS_CHAIN_FROM_CURVE_WIZARD_TITLE, "XSISCRIPTS" )
	set l_PPG = SIAddProp( "Custom_parameter_list", l_SceneRoot , , l_PPGName ).value("Value")
	l_CustomParam = l_SceneRoot & "." & l_PPG

	SIAddCustomParameter l_CustomParam, "nbJoints", 2, in_NbJoints, 1, 1000, 8, 16, 1, 20, "Bones", "Number of Bones"
	SIAddCustomParameter l_CustomParam, "useCns", 11, in_UseCns, FALSE, TRUE, 8, 16, FALSE, TRUE, "Constrain", "Constrain Chain to Curve"

	' Launch the ppg in modal mode, wait for Ok or Cancel to be pressed
	On Error Resume Next
	InspectObj  l_CustomParam ,,l_PPGName,4

	' If the user has pressed ok, proceed
	if Err.Number = 0 then

		'Get the dialog values
		in_NbJoints = GetValue( l_CustomParam & ".nbJoints" )
		in_UseCns = GetValue( l_CustomParam & ".useCns" )

		CreateChainFromCurveProc l_CurveList, in_NbJoints, in_UseCns
	end if

	' Cleanup
	DeleteObj l_CustomParam

end sub


'------------------------------------------------------------------------------
' NAME:	KeyAllBoneRotationsProc
'
' INPUT:	- in_ChainNodes	' Chain nodes, normally the effector, but not necessarily
'
' OUTPUT:	- none
'
' DESCRIPTION: 
'------------------------------------------------------------------------------
sub KeyAllBoneRotationsProc ( in_Nodes )

	set l_ChainNodes = SIFilter( in_Nodes,"chain_element", TRUE )
	if IsEmpty(l_ChainNodes) Or TypeName(l_ChainNodes) = "Nothing" Then
		exit sub
	end if

	Set l_Params = CreateObject("XSI.Collection")
	for each l_ChainNode in l_ChainNodes 
		set l_Bones = GetSkeleton( l_ChainNode )

		if IsEmpty(l_Bones) Or TypeName(l_Bones) = "Nothing" Then
			LogMessage "Please select the effector, or any node of a chain"
			exit sub
		end if

		l_NbElems = l_Bones.count

		'Loop through bones and key local rotation
		'Do not key the rotation of the effector
		for i = 1 to l_NbElems-2
			l_Bone = l_Bones(i)

			' We should set a key on all three rotation channels as 
			' even with 2D chains, we can FK-animate in all orientations

			l_Params.Clear
			l_Params.Add l_Bone & ".kine.rotx"
			l_Params.Add l_Bone & ".kine.roty"
			l_Params.Add l_Bone & ".kine.rotz"
			SaveKey l_Params
		next
	next ' for each chainNode

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
sub InspectChainPropertiesProc( in_ChainNodes )

	Dim l_BonesBrowser, l_FirstBone, l_Prop, l_Selection, l_Item, l_ItemsToInspect

	set l_Selection = SIFilter(  in_ChainNodes, "chain_element",TRUE)
	set l_ItemsToInspect = CreateObject("XSI.Collection")
	l_ItemsToInspect.Unique = TRUE
			if TypeName(l_Selection) <> "Nothing" then

		for each l_Item in l_Selection

			set l_BonesBrowser = GetSkeleton( l_Item )
			l_FirstBone = l_BonesBrowser( 1 )
			l_Prop = l_FirstBone & ".chain"
		
			l_ItemsToInspect.Add l_Prop
		next
		
		InspectObj l_ItemsToInspect

	end if

end sub



'------------------------------------------------------------------------------
' NAME:	KeyKFAndIKProc
'
' INPUT:	- in_ChainNodes	' Chain nodes, normally the effector, but not necessarily
'
' OUTPUT:	- none
'
' DESCRIPTION: 
'------------------------------------------------------------------------------
sub KeyKFAndIKProc( in_Nodes )

	set l_ChainNodes = SIFilter( in_Nodes,"chain_element", TRUE )
	if IsEmpty(l_ChainNodes) Or TypeName(l_ChainNodes) = "Nothing" Then
		exit sub
	end if

	Set l_Params = CreateObject("XSI.Collection")
	for each l_ChainNode in l_ChainNodes 
		set l_Bones = GetSkeleton( l_ChainNode )

		if IsEmpty(l_Bones) Or TypeName(l_Bones) = "Nothing" Then
			LogMessage "Please select the effector, or any node of a chain"
			exit sub
		end if

		l_NbElems = l_Bones.count

		'Loop through bones and key local rotation
		'Do not key the rotation of the effector
		for i = 1 to l_NbElems-2
			l_Bone = l_Bones(i)

			' We should set a key on all three rotation channels as 
			' even with 2D chains, we can FK-animate in all orientations
			l_Params.Clear
			l_Params.Add l_Bone & ".kine.rotx"
			l_Params.Add l_Bone & ".kine.roty"
			l_Params.Add l_Bone & ".kine.rotz"
			SaveKey l_Params
		next

		'Key the position of the effector
		l_Params.Clear
		l_Params.Add l_Bones(l_NbElems-1) & ".kine.posx"
		l_Params.Add l_Bones(l_NbElems-1) & ".kine.posy"
		l_Params.Add l_Bones(l_NbElems-1) & ".kine.posz"
		SaveKey l_Params

	next ' for each chainNode

end sub


'------------------------------------------------------------------------------
' NAME:	AlignRootToFirstBone
'
' INPUT:	- in_objs	' Chain nodes, normally the root, but not necessarily
'
' OUTPUT:	- none
'
' DESCRIPTION: Author: M.Isner/Gordon Cameron
'------------------------------------------------------------------------------
sub AlignRootToFirstBone( in_objs )
	dim l_ChainNodes, l_node, mySkeleton, BoneIndex, rroot, rbone, zero, newrot
	dim l_NewNull, l_TempConstraint, l_TempConstraint2

	' Remember current selection
	dim currentSelection 	
	Set currentSelection = GetValue("SelectionList")
	
	set l_ChainNodes = SIFilter( in_objs,"chain_element", TRUE )
	if IsEmpty(l_ChainNodes) Or TypeName(l_ChainNodes) = "Nothing" Then
		logmessage "Select a chain element first"
		exit sub
	end if

	for each l_node in l_ChainNodes
	
		set mySkeleton =  GetSkeleton(l_node, BoneIndex ) 
		
		' Get a new null, and match it in transform to the first bone of the chain
		l_NewNull = GetPrim("Null")
		MatchTransform l_NewNull, mySkeleton(1), siSRT	
		
		' Temporarily orientation constrain the first bone to this new pinning null
		l_TempConstraint = SIApplyCns("Orientation", mySkeleton(1), l_NewNull)
		
		' Orient the root to match the precise same rotation as this new null
		MatchTransform mySkeleton(0), l_NewNull, siRot
		
		' Update everything nicely
		Desktop.RedrawUI
					
		' Note this will delete the temporary constraint also		
		DeleteObj l_NewNull
	next
	
	' Restore selection
	SelectObj currentSelection 
		
end sub

'------------------------------------------------------------------------------
' NAME:	AppendBoneProc
'
' P.Schretlen, August 2002
'
' INPUT:	- in_objs	' 
'		    - in_Ex		' new x coordinate of new effector
'			- in_Ey		' new y coordinate of new effector
'			- in_Ez		' new z coordinate of new effector
'			- in_Pin	' true if a pin joint is being added, false if ball joint
'
' OUTPUT:	- out_NewBone	' return value, the newly created bone
'
' DESCRIPTION:
'		Appends a bone and updates the selection
'
'------------------------------------------------------------------------------
Function AppendBoneProc( in_objs, in_Ex, in_Ey, in_Ez, in_Pin)

	'
	' filter the input list for chain elements
	'
	dim l_ChainNodes 
	set l_ChainNodes = SIFilter( in_objs,"chain_element", TRUE )

	'
	' Make that there is an effector in the list of chain elements
	'
	if IsEmpty(l_ChainNodes) Or TypeName(l_ChainNodes) = "Nothing" Then

		logmessage "AppendBone: parameter 0 must contain a skeleton effector", siError
		exit function

	else 'search the chain nodes for an effector

		dim l_EffectorFound, l_node, l_skeleton
		l_EffectorFound = false

		for each l_node in l_ChainNodes
			set l_skeleton = GetSkeleton (l_node, l_index)
			if l_index = l_skeleton.count-1 then
				l_EffectorFound = true
				exit for
			end if
		next

		if not l_EffectorFound then
			logmessage "AppendBone: parameter 0 must contain a skeleton effector", siError
			exit function
		end if

	end if 

	'
	' Append the bone
	'
	set AppendBoneProc = SIAppendBone(l_ChainNodes, in_Ex, in_Ey, in_Ez, in_Pin, getuserpref("SI3D_ALIGN_ROOT_1ST_BONE"))

	'
	' if we fail to add the bone, log a message saying so then exit
	'
	if IsEmpty(AppendBoneProc) Or TypeName(AppendBoneProc) = "Nothing" Then
	 
		logmessage "AppendBone: an error occured while adding the bone", siError
		exit function

	end if

	'
	' Add the new bone to the selection
	'
	AddToSelection AppendBoneProc, "NODE", true 

end function

'------------------------------------------------------------------------------
' NAME:	CreateSkeletonProc
'
' P.Schretlen, August 2002
'
' INPUT:    - in_Rx		root's x coordinate
'           - in_Ry		root's y coordinate
'           - in_Rz		root's z coordinate
'           - in_Ex		effector's x coordinate
'           - in_Ey		effector's y coordinate
'           - in_Ez		effector's z coordinate
'           - in_Nx		normal of chain plane x coordinate
'           - in_Ny		normal of chain plane y coordinate
'           - in_Nz		normal of chain plane z coordinate
'			- in_ViewType 
'           - in_SkeletonType	"2" for 2D chain, "3" for 3D chain
'
' OUTPUT:	- out_Root	' return value (the created root)
'           - out_Bone   the created bone
'           - out_Effector the created effector
'
' DESCRIPTION:
'		Appends a bone and updates the selection
'
'------------------------------------------------------------------------------
Function CreateSkeletonProc( in_Rx, in_Ry, in_Rz, in_Ex, in_Ey, in_Ez, in_Nx, in_Ny, in_Nz, in_ViewType, out_Bone, out_Effector, in_SkeletonType)

	DeselectAll
	
	'
	' check that we have a valid skeleton type
	'
	if not (in_SkeletonType = 2 or in_SkeletonType = 3) then

		logmessage "CreateSkeleton: invalid skeleton type", siError
		exit function

	end if

	'
	' Create the chain
	'
	dim l_bAlignRootTo1stBone
	l_bAlignRootTo1stBone = getuserpref("SI3D_ALIGN_ROOT_1ST_BONE")

	set CreateSkeletonProc = SICreateSkeleton(	in_Rx, in_Ry, in_Rz, _
												in_Ex, in_Ey, in_Ez, _
												in_Nx, in_Ny, in_Nz, _
												in_ViewType, _
												out_Bone, out_Effector, _
												in_SkeletonType, _
												getuserpref("SI3D_ALIGN_ROOT_1ST_BONE"))
	'
	' if for some reason we couldn't create the skeleton, log a message saying so
	'
	if IsEmpty(CreateSkeletonProc) Or TypeName(CreateSkeletonProc) = "Nothing" Then

		logmessage "Create"&in_SkeletonType&"DSkeleton: error while creating skeleton", siError
		exit function

	end if

	'
	' Add the new bone to the selection
	'
	SelectObj CreateSkeletonProc, "NODE", true
	AddToSelection out_Bone, "NODE", true 
	AddToSelection out_Effector, "NODE", true 

end function

