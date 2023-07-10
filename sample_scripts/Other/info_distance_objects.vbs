'-------------------------------------------------
' Info Distance based on picked objects
' Author: Rejean Gagne
' Usage: Follow the pick instructions, RMB to abort. 
'-------------------------------------------------
infodist_betweenobjects

sub infodist_betweenobjects

	Dim l_obj1, l_obj2, dx,dy,dz, l_button

	' Continue looping until we're done
	while True	
		PickElement "Object", "Pick first object", "Pick first object", l_obj1, l_button
		if l_button = 0 then 
			exit sub 
		end if
	 
		PickElement "Object", "Pick second object", "Pick second object", l_obj2, l_button
		if l_button = 0 then 
			exit sub 
		end if
		
		dx = GetValue(l_obj2 & ".kine.global.posx") - GetValue(l_obj1 & ".kine.global.posx")
		dy = GetValue(l_obj2 & ".kine.global.posy") - GetValue(l_obj1 & ".kine.global.posy")
		dz = GetValue(l_obj2 & ".kine.global.posz") - GetValue(l_obj1 & ".kine.global.posz")
		msgbox "Distance: "& round(sqr(dx*dx + dy*dy + dz*dz), 6)
	wend

end sub
