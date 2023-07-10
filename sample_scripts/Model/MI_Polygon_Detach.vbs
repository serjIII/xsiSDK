'------------------------------
' Polygon Detach
' misner, Jan 2001
' andref, March 2001: change selection manipulation.
' grahamef+rconover, April 2001: improved selection manipulation
' supports textures, materials, cluster attributes, deforms and enveloping
'------------------------------

'List containing only polygon selections
set sel2 = CreateObject("XSI.Collection")

get_polygon_selection Selection, sel2 

'Make sure collection exist.
set new_objects = CreateObject("XSI.Collection")	

if sel2.count > 0 then

	for each sel in sel2
		get_object sel, obj
		set dup = Duplicate (obj, , siCurrentHistory, , , , siNoAnimation, siNoConstraints, siSetSelection, siGlobalXForm)
		new_objects.add dup
	next
end if



if new_objects.count > 0 then 
	remove_polygons new_objects
	
	for each new_obj in new_objects	
		SetValue new_obj&".Name", "pol_detach"
	next
end if

ActivateObjectSelTool



'---------------------------------------------
' Get Object
'---------------------------------------------
function get_polygon_selection( in_sel, out_sel )
	dim poly_picked, child, button, test, not_cancelled_yet

	'Filter the current selection for polygons
	set test = CreateObject("XSI.Collection")	
	if in_sel.count > 0 then
		for each sel in in_sel
			'check for a poly selection
			if sel.type = "polySubComponent" then
				test.add(sel)
			end if		
		next
	end if

	'If there are polygons in the selection, detach them immediately
	if test.count > 0 then
		set out_sel = test
	
	'Otherwise, let users pick polygons
	else
		setselfilter "polygon"
		not_cancelled_yet = TRUE
		do while not_cancelled_yet
			call PickElement( "polygon", "Add polygon", "Remove polygon", poly_picked, button, 2 )
			logmessage button
			select case button
			
				'If RMB, return 
				case 0 
					not_cancelled_yet = FALSE
				
				'If LMB, add poly to selection
				case 1
					AddToSelection poly_picked, , True

				'If MMB, remove poly from selection
				case 2
					RemoveFromSelection poly_picked
			
			end select
		loop
		set out_sel = Selection
	end if 
		
end function

'---------------------------------------------
' Get Object
'---------------------------------------------
function get_object (in_sel, out_obj)

 Set out_obj = ActiveProject.ActiveScene.Root.FindChildren(in_sel.name)
 Set out_obj = out_obj(0)

end function
'---------------------------------------------
' Remove Polygons    
'---------------------------------------------
function remove_polygons(in_list)
	
	ActivateObjectSelTool
	DeselectAll
	refresh
	for each elem in in_list
		AddToSelection elem          
	next 
	SetSelFilter "Polygon"
	InvertSelection "Polygon"
	for each elem in in_list
		ApplyTopoOp "DeleteComponent", , siUnspecified, siImmediateOperation
	next 
	
end function
'---------------------------------------------