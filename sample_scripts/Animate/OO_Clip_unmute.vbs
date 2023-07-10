' Activate/Deactivate clip channels based on selection
' -Olivier Ozoux
' Works in XSI 1.5
'
' USAGE
' Once the commands are installed. Select the Clip,
' and the objects you want to activate/deactivate,
' and start the command. I found it's easier to select
' the clip first, then extend the selection to add the
' objects. The script will expand branch selections correctly.

'INSTALLATION
' CommandName: "Clip Solo Selection"
' ScriptName: "ActivateClipSel"
' Filename: OO_ActivateClipSel.vbs
' Procedure: "ActivateClipSelProc"
' Variable: in_Flag = 0

' CommandName: "Clip Mute Selection"
' ScriptName: "ActivateClipSel"
' Filename: OO_ActivateClipSel.vbs
' Procedure: "ActivateClipSelProc"
' Variable: in_Flag = 1

' CommandName: "Clip UnMute Selection"
' ScriptName: "ActivateClipSel"
' Filename: OO_ActivateClipSel.vbs
' Procedure: "ActivateClipSelProc"
' Variable: in_Flag = 2

' CommandName: "Clip Mute All"
' ScriptName: "ActivateClipSel"
' Filename: OO_ActivateClipSel.vbs
' Procedure: "ActivateClipSelProc"
' Variable: in_Flag = 3

' CommandName: "Clip UnMute All"
' ScriptName: "ActivateClipSel"
' Filename: OO_ActivateClipSel.vbs
' Procedure: "ActivateClipSelProc"
' Variable: in_Flag = 4

' CommandName: "Clip Toggle All"
' ScriptName: "ActivateClipSel"
' Filename: OO_ActivateClipSel.vbs
' Procedure: "ActivateClipSelProc"
' Variable: in_Flag = 5

ActivateClipSelProc 4

'---------'---------'---------'---------'---------'---------'---------'---------
sub ActivateClipSelProc(in_Flag)
'---------'---------'---------'---------'---------'---------'---------'---------
	Dim l_ClipList, l_ObjList, l_Pick, l_button, l_Clip

	if 0 < in_Flag > 4 then
		LogMessage "Invalid Flag!"
	end if
	'Verify the selection
	set l_ClipList = SIFilter(,"sceneobject", FALSE)
	set l_ObjList = SIFilter(SelectChildNodes(,FALSE),"sceneobject", TRUE)
	if Not Typename(l_ClipList) = "Nothing" then
		'my own filter since SIFilter doesn't work for clips.
		'extract the clip from the list.
		for each l_Item in l_ClipList
			if NOT l_Item.type = "mixeranimclip" then
				l_ClipList.remove l_Item
			end if
		next
		if l_ClipList.count > 0 AND l_ObjList.count > 0 then
			for each l_Clip in l_ClipList
				ActivateClipSel l_Clip, l_ObjList, in_Flag
			next
		end if 
	else
		'pick the clip. because there is no clip filter we do our own.
		l_button = 1
		do until l_button = 0
			PickElement "object", "Pick the Clip", "Pick the Clip", l_Pick, l_button
			if l_button = 0 then
				exit do
			end if
			if l_Pick.Type = "mixeranimclip" then
				ActivateClipSel l_Pick, l_ObjList, in_Flag
				exit do
			else
				LogMessage "This is not a Clip..."
			end if
		loop
	end if
end sub

'---------'---------'---------'---------'---------'---------'---------'---------
sub ActivateClipSel(in_Clip, in_ObjList, in_Flag)
'---------'---------'---------'---------'---------'---------'---------'---------
	Dim l_ActionClip, l_Modeldot, l_NbRules, l_Item, l_String

	l_ActionClip = in_Clip & ".actionclip"
	
	'Find the Model
	l_Modeldot = split(in_Clip, ".")(0) & "."
	if l_Modeldot = "Mixer." then
		l_Modeldot = ""
	end if
	
	'Get the number of items in clip.
	l_NbRules = GetNumMappingRules( l_ActionClip )
	
	if in_Flag > 2 then
		'Mute/UnMuteAll ignore the in_ObjList
		for i = 1 to l_NbRules
			GetMappingRule l_ActionClip , i, l_fromRule, l_toRule
			select case in_Flag
				case 3 'Mute All
				SetMappingRule  l_ActionClip , l_fromRule ,l_toRule, i , 0
				case 4 'UnMute All
				SetMappingRule  l_ActionClip , l_fromRule ,l_toRule, i , 1
				case 5 'Toggle All
				SetMappingRule  l_ActionClip , l_fromRule ,l_toRule, i , -1
			end select
		next
		exit sub
	end if
	
	'If there is a selection
	set l_Dict = CreateObject("Scripting.Dictionary")
	for each l_Item in in_ObjList
		l_Dict.Add Cstr(l_Item), TRUE
	next

	set l_Item = CreateObject("XSI.CollectionItem")
	
	'Go and set the active flag on each item.
	for i = 1 to l_NbRules
		GetMappingRule l_ActionClip , i, l_fromRule, l_toRule
		
		'Extract the object from the item
		l_String = l_Modeldot & l_fromRule
		logmessage l_String 
		
		set l_Item = CreateObject("XSI.CollectionItem")
		l_Item.value = l_String 
		
		set l_Item = l_Item.pathitems(1)
		'Compare to selected list
		
		
		if l_Dict.Exists(Cstr(l_Item)) then
			'LogMessage i & " " & l_Item &" MATCH " & Cint(in_Flag)
			select case in_Flag
				case 0 'Solo
				SetMappingRule  l_ActionClip , l_fromRule ,l_toRule, i , 1
				case 1 'Mute
				SetMappingRule  l_ActionClip , l_fromRule ,l_toRule, i , 0
				case 2 'UnMute
				SetMappingRule  l_ActionClip , l_fromRule ,l_toRule, i , 1							
			end select
		else
			'LogMessage i & " " & l_Item &" NOT FOUND " & Cint(in_Flag)
			select case in_Flag
				case 0 'Solo
				SetMappingRule  l_ActionClip , l_fromRule ,l_toRule, i , 0			
			end select
		end if		
	next
end sub







