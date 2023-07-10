
'------------------------------------------------
' Lowercase.vbs
' Converts the names of objects in the selection
' to lowercase.
'------------------------------------------------
set sel = GetValue("SelectionList")
for each item in sel
	newname = LCase(item.name)
	SetValue item & ".Name", newname
next