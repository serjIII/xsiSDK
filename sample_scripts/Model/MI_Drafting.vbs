' Drafting by Michael Isner.
' Gives the ability to switch between interactivly drawing lines
' and entering numerical values.  Allows absolute, relative, and 
' angle/distance.  For now it uses user input similar to AutoCAD.
' Hopefully this can be redone as interactive visual icons in the
' near future.


dim force_x, force_y, force_z, X1, Y1, Z1, p, oldx, oldy, oldz
dim dist, angle, plane

p = 0

set curve = SICreateCurve ("crvlist", 1, 1)

newpoint

if p = 2 then
	DeleteObj curve
end if



'-----------------------------------------------

sub newpoint
	if pointmechanism = True then newpoint
end sub

'-----------------------------------------------

function pointmechanism
	
	p = p + 1
	pointmechanism = True

	PickPosition "Interactive point", "keyboard entry", X1, Y1, Z1, button_out

	if button_out <> 0 then
		
		if button_out = 1 then
			if needpointdata = False then
				addpoint
			end if
		end if
	
		if button_out = 2 then
			raw_entry = inputbox ("Entry Examples:" & chr(13) & "Absolute:                     0,10,4" & chr(13) & "Relative:                     @0,4,0" & chr(13) & "Dist/Angle/plane        <1,-45,xy" & chr(13) & "Partial                         .x or .xy")
			 		
			if parse(raw_entry) = True then
				if needpointdata = False then
					addpoint
				end if
			else 
				logmessage "error in cordinate entry - please enter again"
			end if
	
		end if 
	else
		pointmechanism = False
	end if
	
end function

'-----------------------------------------------
function needpointdata()
	' here we check if any of the force_x/y/z variables are
	' filled with "need".  If so we need another point and
	' needpointdata becomes "waiting" until another point is
	' entered. At this point the "waiting" fills force_x/y/z
	' which is kind of like an override.
	
	needpointdata = False
	
	if force_x = "waiting" then
		force_x = X1
		needpointdata = True	
	end if

	if force_y = "waiting" then
		force_y = Y1
		needpointdata = True	
	end if
	
	if force_z = "waiting" then
		force_z = Z1
		needpointdata = True	
	end if
	
	if force_x = "need" then
		force_x = "waiting"
		needpointdata = True	
	end if

	if force_y = "need" then
		force_y = "waiting"
		needpointdata = True	
	end if
	
	if force_z = "need" then
		force_z = "waiting"
		needpointdata = True	
	end if

end function
'-----------------------------------------------
function addpoint

	if force_x  <> "" then X1 = force_x
	if force_y  <> "" then Y1 = force_y
	if force_z  <> "" then Z1 = force_z
	
	SIAddPointOnCurveAtEnd curve, X1, Y1, Z1, False
	
	oldx = X1
	oldy = Y1
	oldz = Z1
	
	force_x = ""
	force_y = ""
	force_z = ""

end function

'-------------------------------------------------
function parse (in_raw)

	parse = False
	in_raw = lcase(in_raw)


	')))))))))))))))))))))))))
	' this part parses partial
	')))))))))))))))))))))))))
	
	if in_raw = ".x" then
		force_x = "need"
		parse = True
	end if
	
	if in_raw = ".y" then
		force_y = "need"
		parse = True
	end if
	
	if in_raw = ".z" then
		force_z = "need"
		parse = True
	end if
		
	if in_raw = ".xy" or in_raw = ".yx" then
		force_x = "need"
		force_y = "need"
		parse = True
	end if
	
	if in_raw = ".xz" or in_raw = ".zx" then
		force_x = "need"
		force_z = "need"
		parse = True
	end if 
	
	if in_raw = ".yz" or in_raw = ".zy" then
		force_y = "need"
		force_z = "need"
		parse = True
	end if
	
	')))))))))))))))))))))))))
	' this part parses relative
	')))))))))))))))))))))))))
	
	if left(in_raw, 1) = "@" then
		
		'remove the @ and chop up
		raw2 = right(in_raw, len(in_raw) - 1)
		raw3 = split(raw2, ",", -1, 1)
		
		if ubound(raw3) = 2 then
			
			' make sure all three are numbers.
			valid1 = IsNumeric(raw3(0)) 
			valid2 = IsNumeric(raw3(1))
			valid3 = IsNumeric(raw3(2))
	
			if valid1 = True and valid2 = True and valid3 = True then
				X1 = oldx + raw3(0)
				Y1 = oldy + raw3(1)
				Z1 = oldz + raw3(2)
				parse = True
			end if
			
		end if
	end if
	
		
	')))))))))))))))))))))))))
	' this part parses angle, distance, plane
	')))))))))))))))))))))))))
	
	'Dist/angle/plane ->  <1,-45,xy
	
	if left(in_raw, 1) = "<" then
	
		'remove the "<" and chop up
		raw2 = right(in_raw, len(in_raw) - 1)
		raw3 = split(raw2, ",", -1, 1)


		
		'check the first two pieces are numeric
		valid1 = IsNumeric(raw3(0)) 
		valid2 = IsNumeric(raw3(1))
	
		if valid1 = True and valid2 = True then
			'now check for plane
			plane = raw3(2)
			if plane = "xy" or plane = "yx" or plane = "xz" or plane = "xz" or plane = "yz" or plane = "zy" then
			
				dist = raw3(0)
				angle = raw3(1)
 				
				'latley I just do this kind of stuff with temp geometry instead of 
				'math because it's so fast to rough out and check for errors.
				
				set pnull = GetPrim ("Null")
				set cnull = GetPrim ("Null")
				parentObj pnull, cnull
				    
				'Translate pnull & "+", oldx, oldy, oldz, siGlobal, siLocal, siObj, siXYZ
				
				SetValue(pnull & ".kine.global.posx"), oldx
				SetValue(pnull & ".kine.global.posy"), oldy
				SetValue(pnull & ".kine.global.posz"), oldz
				
				if plane = "xy" or plane = "yx" then						
					'rotate on the z, translate locally on the x
					SetValue pnull & ".kine.local.rotz", angle
					SetValue cnull & ".kine.local.posx", dist
					X1 = GetValue(cnull & ".kine.global.posx")
					Y1 = GetValue(cnull & ".kine.global.posy")
					Z1 = GetValue(cnull & ".kine.global.posz")
				end if

				if plane = "xz" or plane = "zx" then						
					'rotate on the y, translate locally on the x
					SetValue pnull & ".kine.local.roty", angle
					SetValue cnull & ".kine.local.posx", dist
					X1 = GetValue(cnull & ".kine.global.posx")
					Y1 = GetValue(cnull & ".kine.global.posy")
					Z1 = GetValue(cnull & ".kine.global.posz")
				end if

				if plane = "yz" or plane = "zy" then						
					'rotate on the x, translate locally on the -z
					SetValue pnull & ".kine.local.rotx", angle
					SetValue cnull & ".kine.local.posz", dist * -1
					X1 = GetValue(cnull & ".kine.global.posx") 
					Y1 = GetValue(cnull & ".kine.global.posy") 
					Z1 = GetValue(cnull & ".kine.global.posz") 					
				end if
						
				DeleteObj cnull
				DeleteObj pnull
				parse = True
				
			end if			
		end if
	end if
	
	
	')))))))))))))))))))))))))
	' this part parses absolute
	')))))))))))))))))))))))))
	
	raw3 = split(in_raw, ",", -1, 1)
		
	if ubound(raw3) = 2 then
		
		' make sure all three are numbers.
		valid1 = IsNumeric(raw3(0)) 
		valid2 = IsNumeric(raw3(1))
		valid3 = IsNumeric(raw3(2))
	
		if valid1 = True and valid2 = True and valid3 = True then
			X1 = raw3(0)
			Y1 = raw3(1)
			Z1 = raw3(2)
			parse = True
		end if
			
	end if
		
end function
'-------------------------------------------------

