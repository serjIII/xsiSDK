
'--------------------------------------------------------
' CreateWeightAnimationPanel
'
' This sample script creates a slider panel for every clip that's
' found in a selected compound clip. The sliders can be
' custom parameters that will drive the real weights via 
' expressions or proxy parameters that are basically the
' same as the weight sliders found in the mixer itself.
'
' Usage: Have an object with shapes or animation clips
' in the mixer. Make sure to have these clips in a compound,
' select the compound and run.
'
' Author: 
'--------------------------------------------------------

Option Explicit
CreateWeightPanelFromCompound( True )

'--------------------------------------------------------
' This sub takes the selection, chekcs for shape or animation
' compounds, and calls up for the construciton of a weight panel.
' If a single compound is selected, it'll get inspected automatically.
' Otherwize, look under the Scene_Root node.
'--------------------------------------------------------
Sub CreateWeightPanelFromCompound( in_createproxy )
	Dim l_Clips, l_Clip, l_CompoundName, l_panel
	
	Set l_Clips = GetValue("SelectionList")
	For each l_Clip in l_Clips
		if (l_Clip.Type = "ShapeActionCompoundClip")_
		  OR (l_Clip.Type = "AnimActionCompoundClip") then

			l_CompoundName = GetLastName(l_Clip)
			l_panel = CreateWeightPanel(FExtractCompoundClips(l_Clip), SIGetModel(l_Clip), l_CompoundName, in_createproxy)
			
			' Only opens the panel if one clip is selected
			if (l_Clips.count = 1) then
				InspectObj l_panel
			end if
		end if
	next
end Sub

' This sub can be used to delete a Weight Panel
Sub DeleteWeightPanelFromCompound
	Dim l_Clips, l_Clip, l_CompoundName, l_Model

	Set l_Clips = GetValue("SelectionList")
	for each l_Clip in l_Clips
		if (l_Clip.Type = "ShapeActionCompoundClip")_
		  OR (l_Clip.Type = "AnimActionCompoundClip") then
	
			l_Model = SIGetModel(l_Clip)
			l_CompoundName = GetLastName(l_Clip)
			DeleteWeightPanel l_Model, l_CompoundName
		end if
	next
End Sub

Sub OpenWeightPanel
	Dim l_Clips, l_Clip, l_CompoundName, l_Model
	Dim l_CustomPset, l_CustomPsetName

	Set l_Clips = GetValue("SelectionList")
	
	' Can only open one panel at once
	if l_Clips.count > 1 then
		exit sub
	end if
	
	for each l_Clip in l_Clips
		if (l_Clip.Type = "ShapeActionCompoundClip")_
		  OR (l_Clip.Type = "AnimActionCompoundClip") then
		  
			l_Model = SIGetModel(l_Clip)
			l_CompoundName = GetLastName(l_Clip)

			' Opens the panel only if it exists
			l_CustomPsetName = l_Model & "." & l_CompoundName & "_WeightPanel"
			set l_CustomPset = CreateObject("XSI.CollectionItem")
			l_CustomPset.Value = l_CustomPsetName
			
			if (Left(l_CustomPset, Len(l_Model)) <> l_Model) Then
				l_CustomPset = l_Model & "." & l_CustomPset
			end if
			if l_CustomPset = l_CustomPsetName then
				InspectObj l_CustomPsetName
			end if
		end if
	next
End Sub

Function CreateWeightPanel(in_ClipList, in_CustomPSetOwner, in_CustomPSetName, in_createproxy)
	Dim l_CustomPSetOwner, l_Clip, l_ShortClipName, l_CustomPset
	Dim l_ProxyParam, l_ProxyParamName

	in_CustomPSetName = in_CustomPSetName & "_WeightPanel"

	set l_CustomPset = CreateObject("XSI.CollectionItem")
	l_CustomPset.Value = in_CustomPSetOwner & "." & in_CustomPSetName
	if Right(l_CustomPset, Len(in_CustomPSetName))  <> in_CustomPSetName then
		AddProp "Custom_parameter_list", in_CustomPSetOwner , , in_CustomPSetName, l_CustomPset
	else
		' Any processing we want to do on existing weight panel
	end if

	for each l_Clip in in_ClipList
	
		l_ShortClipName = GetLastName(l_Clip)
		l_ProxyParamName = l_CustomPset & "." & l_ShortClipName & "_Weight"
		Set l_ProxyParam = CreateObject("XSI.CollectionItem")
		l_ProxyParam.Value = l_ProxyParamName

		if ( in_createproxy ) then
			' Adds a proxy parameter for that clip's weight curve if there is
			' not already one. Known bug: the slider range gets created as (0,100)
			' instead of 0,1.... 
			If (l_ProxyParam <> l_ProxyParamName) Then
				' Do not remove the animation
				AddProxyParam l_CustomPset, l_Clip & ".actionclip.weight", l_ShortClipName
			End If
		else
			If (l_ProxyParam <> l_ProxyParamName) Then
				' Else we create custom parameters with expressions instead
				SIAddCustomParameter l_CustomPset, l_ShortClipName & "_Weight", siDouble, 0.000, 0.000, 1.000, , 5, 0.000, 1.000
				' ToDo : Can paste on the animation to the new params only if that animation is fcurve based
				' (otherwise you can end up pasting the previous expression
				' CopyPaste l_Clip & ".actionclip.weight",,l_CustomPset& "." & l_ShortClipName & "_Weight",2
				RemoveAnimation l_Clip & ".actionclip.weight"
				AddExpr l_Clip & ".actionclip.weight"
				SetExpr l_Clip & ".actionclip.weight", l_CustomPset& "." & l_ShortClipName & "_Weight"
			end if
		End If
	next

	Set CreateWeightPanel = l_CustomPset
end Function


Sub DeleteWeightPanel(in_Model, in_Name)

	Dim l_CustomPset, l_FullName
	l_FullName = in_Name & "_WeightPanel"

	set l_CustomPset = CreateObject("XSI.CollectionItem")
	l_CustomPset.Value = in_Model & "." & l_FullName

	if (Left(l_CustomPset, Len(in_Model)) <> in_Model) Then
		l_CustomPset = in_Model & "." & l_CustomPset
	end if

	if (l_CustomPset = in_Model & "." & l_FullName) then
		DeleteObj l_CustomPset
	end if
end Sub


Function FExtractCompoundClips( in_Compound )
	Dim l_CompoundTracks, l_NumClips, i, l_Clips

	Set FExtractCompoundClips = CreateObject("XSI.Collection")

	set l_CompoundTracks = EnumElements(in_Compound & ".tracks", TRUE)
	l_NumClips = l_CompoundTracks.count
 
	'Iterate over the tracks to retrieve the clips.
	for i = 1 to l_CompoundTracks.count
 
		' Get the clips on the track
		set l_Clips = EnumElements(l_CompoundTracks.items(l_NumClips - i) & ".ClipList", TRUE)
		
		if TypeName(l_Clips) <> "Nothing" then
			FExtractCompoundClips.AddItems l_Clips
		end if
	next
end Function

Function GetLastName(in_Obj)
	GetLastName = Right(in_Obj, Len(in_Obj) - InstrRev(in_Obj, "."))
End Function



