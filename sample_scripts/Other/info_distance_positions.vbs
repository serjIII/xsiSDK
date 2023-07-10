'-------------------------------------------------
' Info Distance based on picked positions in space
' Author: Michael Isner, modified by Rejean Gagne
' Usage: Follow the pick instructions, RMB to abort.
' 
' Compatible with snapping which can be used to 
' snap to precise object or component positions. 
'-------------------------------------------------
infodist_betweenobjects

sub infodist_betweenobjects

	Dim l_obj1, l_obj2, x1,y1,z1, x2,y2,z2, dx,dy,dz, l_button

	' Continue looping until we're done
	while True	
		PickPosition "Pick first position (Ctrl: Snapping)", "Pick first position (Ctrl: Snapping)", x1, y1, z1, l_button
		if l_button = 0 then
 
			exit sub 
		end if
	 
		PickPosition "Pick second position (Ctrl: Snapping)", "Pick first position (Ctrl: Snapping)", x2, y2, z2, l_button
		if l_button = 0 then
			exit sub 
		end if
		
		dx = x2 - x1
		dy = y2 - y1
		dz = z2 - z1
		msgbox "Distance: "& round(sqr(dx*dx + dy*dy + dz*dz), 6)
	wend

end sub