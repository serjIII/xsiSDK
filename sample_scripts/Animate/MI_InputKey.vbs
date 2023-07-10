'----------------------------------------------
'Input Key (misner, 2000)
'keys the selection at inputed frames.
'will take multiple frames seperated by commas.
'----------------------------------------------

option explicit
input_key

'--------------------------------------------
sub input_key
'--------------------------------------------
	dim sel, valid, Farray

	set sel = GetValue("SelectionList")
	if sel.count < 1 then exit sub
 
	check_marking valid
	if valid = False then exit sub
	
	inputFrame Farray, valid
	if valid = False then exit sub
	
	keyArray sel, Farray

end sub
'--------------------------------------------
function check_marking(out_valid)
'--------------------------------------------
	dim marking
	out_valid = True
	
	marking = GetMarking() 
	
	if TypeName(marking) = "Empty" then 
		logmessage "Input key requires marking"
		out_valid = False
	end if

end function
'--------------------------------------------
function inputFrame( out_Farray, out_valid)
'--------------------------------------------
	dim raw_input, split_string, frame, count
	dim pIn, pOut
	out_valid = True
	
	raw_input = inputbox ("Enter Frames to Key:" & chr(13) & "(use commas to seperate)", "Input Keys")
	
	if raw_input = "" then
		out_valid = False
		exit function
	end if 
	
	split_string = Split(raw_input, ",", -1, 1)
	
	redim frameArray(0)
	count = 0
	
	pIn = GetValue ("PlayControl.In")
	pOut = GetValue ("PlayControl.Out")

	for each frame in split_string
		
		' now get rid on any extra spaces.
		frame = Replace(frame , " ", "", 1)
		
		'check if the frame can be evaluated as number
		if IsNumeric(frame) = True then
		
			'now check if it's within the limimts of the Playcontrol
			
			frame = CInt(frame)
			if frame < pIn or frame > pOut then
				logmessage "Input Key ignored key at frame: " & frame & " - outside the boundries of start and end frame"
			else
				redim preserve frameArray(count)
				frameArray(count) = frame	
				count = count + 1
			end if
				
		end if
	next
	
	if count = 0 then out_valid = False
	out_Farray = frameArray

end function
'--------------------------------------------
function keyArray (in_sel, in_array)
'--------------------------------------------
	dim frame

	for each frame in in_array
		SaveKey  , frame
	next
	
end function
'--------------------------------------------

