' Relative Move by Michael Isner
' Moves the selection along the vector defined by a source and target point

dim X1, Y1, Z1, X2, Y2, Z2, button_out
dim dx, dy, dz

set sel = GetValue("SelectionList")

if sel.count > 0 then

	SetValue "SnapProperties.Enable0D", True
	SetValue "SnapProperties.IgnoreSelected", False
	SetValue "SnapProperties.Centers", True
	SetValue "SnapProperties.Midpoints", True
	SetValue "SnapProperties.Knots", True
	PickPosition "Move from point", "Move from point", X1, Y1, Z1, button_out

	if button_out <> 0 then

		PickPosition "to point", "to point", X2, Y2, Z2, button_out
		if button_out <> 0 then
	
			'get the translation deltas
			dx = X2 - X1
			dy = Y2 - Y1
			dz = Z2 - Z1
		
			' move the object
			Translate , dx, dy, dz, siRelative, siGlobal, siObj, siXYZ

		end if
	end if
end if