' Frame Time by Clip by Michael Isner
'
' Frames the Time In and Out of the timeline to match the first clip in your selection.  
' Really handy if you're doing alot of mixer work breaking clips into channel sets and recombining them.



option explicit
frame_time_by_clip
'---------------------------------------
' Frame Time by Clip
'---------------------------------------
sub frame_time_by_clip

	dim sel, valid, clip

	set sel = Getvalue("SelectionList")
	if sel.count <1 then exit sub

	find_clip sel, clip, valid
	if valid = False then exit sub
	
	set_playcontrol clip

end sub
'---------------------------------------
' Find clip
'---------------------------------------
function find_clip(in_sel, out_clip, out_valid)
	
	dim item

	for each item in in_sel
		if item.type = "mixeranimclip" then
			out_clip = item
			out_valid = True
			exit function
		end if
	next 

	logmessage "Frame Time by Clip: Require clip selection"
	out_valid = False

end function
'---------------------------------------
' Set Playcontrol
'---------------------------------------
function set_playcontrol(in_clip)

	dim ClipIn, ClipOut

	ClipIn = GetValue(in_clip & ".actionclip.timectrl.resin")
	ClipOut = GetValue(in_clip & ".actionclip.timectrl.resout")
	
	SetValue "PlayControl.In", ClipIn
	SetValue "PlayControl.Out", ClipOut

end function
'---------------------------------------