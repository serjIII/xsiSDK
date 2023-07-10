'UV_mirror by Michael Isner Fall00
'revised Feb 00

'option explicit
uv_mirror
'-----------------------------------------
'UV mirror
'-----------------------------------------
function uv_mirror

	dim sel, PolyArray, valid, i, MirrorAxis, poly_center_array, MirrorArray
	dim MyObject, MyString, Sample_array, UVcluster, OriginalSamples
	dim MirrorSamples, UVarray, Column, Sorted_array
	
	set sel = GetValue("SelectionList")
	if sel.count = 1 then
		sel_to_poly sel(0), PolyArray, valid
	else
		exit function 
	end if
	if valid = FALSE then exit function
	
	get_mirror_axis MirrorAxis, column, valid
	if valid = FALSE then exit function 
	
	object_from_sample sel(0), MyObject
	
	get_UV_cluster MyObject, UVcluster, valid
	if valid = FALSE then exit function
	
	FreezeObj UVcluster	
	
	'don't ask why I am doing this it was made with pre-1.5 object model
	get_UV_cluster MyObject, UVcluster, valid
	if valid = FALSE then exit function	
	
	find_poly_centers sel(0), poly_center_array, valid
	if valid = FALSE then exit function
	
	Sort_array poly_center_array, Column, Sorted_array
	
	Find_mirror MyObject, PolyArray, Sorted_array, poly_center_array, MirrorAxis, Column, MirrorArray

	match_samples sel(0), PolyArray, MirrorArray, MirrorAxis, OriginalSamples, MirrorSamples



	uv_array_from_source UVcluster, MirrorSamples, UVarray

	write_uv_array UVcluster, OriginalSamples, UVarray

	MyString = Join(MirrorArray, ",")
	SelectGeometryComponents MyObject & ".poly[" & MyString & "]"
	SetSelFilter "Polygon"
	
end function
'----------------------------------------
' Object from Sample Point Selection
'----------------------------------------
function object_from_sample (in_sample, out_obj)

	'protection
	if TypeName(in_sample) = "Nothing" then exit function
	if in_sample.type <> "polySubComponent" then exit function
	
	SelectObj in_sample
	ActivateObjectSelTool
	set out_obj = GetValue("SelectionList")(0)

end function
'----------------------------------------
' Get Mirror axis
'----------------------------------------
function get_mirror_axis(out_axis, out_column, out_valid)

	dim mirror_return, XSIDial, Combo

	out_valid = TRUE

	set XSIDial = createobject("XSIDial.XSIDialog")

	Combo = Array("YZ plane (invert x-axis)","XZ plane (invert y-axis)", "XY plane (invert z-axis)")
	mirror_return = XSIDial.Combo( "Select mirror plane", Combo)

	if mirror_return = -1 then
		out_valid = FALSE
		exit function
	end if

	if mirror_return = 0 then
		out_axis = Array (-1,1,1)
		out_column = 1
	end if

	if mirror_return = 1 then
		out_axis = Array (1,-1,1)
		out_column= 2
	end if

	if mirror_return = 2 then
		out_axis = Array (1,1,-1)
		out_column= 3
	end if

end function
'----------------------------------------
' Selection to Polygon array
'----------------------------------------
function sel_to_poly (in_sel, out_array, out_valid)

	dim temp_selection, temp_cluster

	out_valid = TRUE

	'check if valid
	if in_sel.type <> "polySubComponent" then
		out_valid = FALSE
		logmessage "UV mirror requires a polygon selection"
		exit function
	end if
	
	set temp_cluster = CreateCluster (in_sel)
	set temp_selection = GetValue("SelectionList")(0)
	out_array = temp_selection.obj.elements
	
	DeleteObj temp_cluster 

end function
'----------------------------------------
' Find polygon centers
'----------------------------------------
function find_poly_centers(in_sel, out_array, out_valid)
	dim size, myGeometry, myNb2D, my2DComponent, myPos   
	dim i 
	
	set myGeometry = in_sel.obj

	myNb2D = myGeometry.Nb2D
	set my2DComponent = myGeometry.Geometry2D 
	set myPos = CreateObject("Sumatra\Scripting\Math\SIVector3")

	' Loop on all the 2D Component
	size = myNb2D - 1
	
	redim center_array(3, size)
	
	for i = 0 to myNb2D - 1
		my2DComponent.CenterPosition i, myPos
		center_array(0, i) = i		'the index
		center_array(1, i) = myPos.x	'the x value of the poly center 
		center_array(2, i) = myPos.y	'the y value of the poly center 
		center_array(3, i) = myPos.z	'the z value of the poly center 
	next
	
	out_array = center_array
	
end function

'----------------------------------------
' Sort Center Array
'----------------------------------------
Function Sort_array (in_pcarray, in_column, out_sorted)

	dim axis, i, NoExchanges, Temp

	' out sorted has two columns.  The first is the list of indexes,
	' the second the list of values for the active column (x,y,z) in the 
	' poly_center_array (here in_pcarray).
	
	Redim sorted(1, Ubound(in_pcarray, 2))

	for i = 0 to Ubound(in_pcarray, 2)
		sorted(0, i) = in_pcarray(in_column, i)	
		sorted(1, i) = in_pcarray(0, i)
	next

	XSIUtils.QuickSort sorted

	out_sorted = sorted

end function
'----------------------------------------
' Find_mirror 
'----------------------------------------
function Find_mirror(in_object, in_array, in_sorted, in_pcarray, in_axis, in_column, out_array)

	dim i, t, closest(3,1)
	dim delta_x, delta_y, delta_z
	dim difference
	dim best_match, i_sort_match, best_match_dif 
	redim mirror_array(ubound(in_array))
	dim i_val, i_mir, opt_array, p, tempString 
	
	

	' cycle through all your selected polygons
	for i = 0 to Ubound(in_array)
	
		i_val = in_pcarray(in_column, in_array(i))
		i_mir =  i_val * -1	
		

		sort_search i_mir, in_sorted, opt_array
	
		'full find match
		for t = 0 to Ubound(opt_array)
			'current_polygon = in_array(i)
			'current polygons center in x = in_pcarray(1, in_array(i))
			'mirror polygon center in x = in_axis(0) * in_poly_cent_array(1, in_array(i))
			delta_x = abs(in_axis(0) * in_pcarray(1, in_array(i)) - in_pcarray(1, opt_array(t)))
			delta_y = abs(in_axis(1) * in_pcarray(2, in_array(i)) - in_pcarray(2, opt_array(t)))
			delta_z = abs(in_axis(2) * in_pcarray(3, in_array(i)) - in_pcarray(3, opt_array(t)))
			
			difference = delta_x + delta_y + delta_z
						
			if t = 0 then
			 	best_match_dif = difference 
				best_match = opt_array(t)
			else 	
				if difference < best_match_dif then
					best_match_dif = difference 
					best_match = opt_array(t)
				end if
			end if
		next
		
		'now fill mirror_array
		mirror_array(i) = best_match
				
	next

	out_array = mirror_array

end function


'----------------------------------------
' Sort Search
'----------------------------------------

function sort_search (in_value, in_sorted, out_opt_array)

	dim best, best_dif, t, current, current_dif, index
	
	best = 0
	best_dif = abs(in_value - in_sorted(0, 0))
	index = in_sorted(1, 0)	
				
	' if the in_value in less than the first value the index is 0
	' if not cycle until you on longer have the best match
	
	if in_value < in_sorted(0,0) then
		index = 0
	else
	
		'cycle until you no longer have the best match
		for t = 0 to Ubound(in_sorted, 2)
			
			current = in_sorted(0, t)
			current_dif = abs(in_value - current)
			
			if current_dif <= best_dif then
				index = t
				best_dif = current_dif 
			else
				exit for
			end if
		next
	end if
	
	create_opt_array index, in_sorted, out_opt_array
	
end function

'----------------------------------------
' Create Optimized Array
'----------------------------------------

function create_opt_array (in_index, in_sorted, out_opt_array)

	dim percent, asize, psize, min, opt_array, low_bound, up_bound
	dim i, count

	' percentage of polygons for opt_array
	percent = .1

	asize = Ubound(in_sorted, 2) + 1

	' minimum number of poly's (must be even)
	min = 50
	
	min = min / 2
	min = round(min ) * 2
	if min > asize then min = asize
	
	' convert percentage into even number in polys
	psize = percent * asize 
	psize = psize / 2
	psize = round(psize) * 2

	if psize < min then psize = min
	
	' check the relationship between psize
	' and it's bounding limits asize.
	
	low_bound = in_index - psize / 2
		
	if low_bound < 0 then 
		low_bound = 0
		up_bound = psize - 1		
	else
		up_bound = in_index + psize / 2
		
		if up_bound > asize - 1 then 
			up_bound = asize -1
			low_bound = asize - 1 - psize
		end if
	end if

	if low_bound < 0 then 
		low_bound = 0
	end if

	redim opt_array(up_bound - low_bound)
	
	count = 0
	for i = low_bound to up_bound
		opt_array(count) = in_sorted(1, i)
		count = count + 1
	next
	
	out_opt_array = opt_array
	
end function
'----------------------------------------
' Find_matching sample Points
'----------------------------------------

function match_samples(in_sel, in_poly_array, in_mirror_array, in_axis, out_allUV_original, out_allUV_mirror)

	dim pcount, i, j, Samples, myGeometry, Polygons, Poly_Points, myPos  
	dim Points, Sample, PointIndex, match_array, elem, size 
	redim original_sample(3,0), mirror_sample(3, 0), allUV_original(0), allUV_mirror(0)


	set myGeometry = in_sel.obj
	set Polygons = myGeometry.Geometry2D
	set Poly_Points = myGeometry.Geometry0D

	set myPos = CreateObject("Sumatra\Scripting\Math\SIVector3")

 	
 	'cycle through all the polygons
 	for pcount = 0 to Ubound(in_poly_array)
 		
 		' fill arrays with samples (and locations) on the original and it's mirror
 		
 		' with original_samples:

		Samples = Polygons.SubComponent0D2D(in_poly_array(pcount))
		Points = Polygons.SubComponent0D(in_poly_array(pcount))
		redim original_sample(3,UBound(Samples, 1))
		for j = LBound( Samples , 1 ) to UBound(Samples , 1)
			
			Sample = Samples(j)
			PointIndex  = Points(j)
			Poly_Points.Position Points(j), myPos
			
			original_sample(0, j) = Sample 			
			original_sample(1, j) = myPos.x 
			original_sample(2, j) = myPos.y 
			original_sample(3, j) = myPos.z 			
		next
 	
 	
 	 	' with mirror_samples:
 	 	
 		Samples = Polygons.SubComponent0D2D(in_mirror_array(pcount))
		Points = Polygons.SubComponent0D(in_mirror_array(pcount))
		redim mirror_sample(3,UBound(Samples, 1))
		for j = LBound( Samples , 1 ) to UBound(Samples , 1)
			
			Sample = Samples(j)
			PointIndex  = Points(j)
			Poly_Points.Position Points(j), myPos
			
			mirror_sample(0, j) = Sample 			
			mirror_sample(1, j) = myPos.x 
			mirror_sample(2, j) = myPos.y 
			mirror_sample(3, j) = myPos.z 
		next
 	
 		' for each sample in polygon, find the best match in mirror
 		Find_sample_mirror original_sample, mirror_sample, in_axis, match_array
 		
		'now fill the sample_match array 
 		size = Ubound(allUV_original)
 		if size <> 0 then size = size + 1

 		redim preserve allUV_original(size + UBound(original_sample, 2))
 		redim preserve allUV_mirror(size + UBound(original_sample, 2))

 		for i = 0 to UBound(original_sample, 2)
 			allUV_original(size + i) = original_sample(0, i)
 			allUV_mirror(size + i) = match_array(i)
 		next
 	next
 	
 	out_allUV_original = allUV_original
 	out_allUV_mirror = allUV_mirror 
 
end function
'----------------------------------------
' Find_sample_mirror 
'----------------------------------------
function Find_sample_mirror (in_array, in_array2, in_axis, out_array)

	dim i, t, closest(3,1)
	dim delta_x, delta_y, delta_z
	dim difference
	dim best_match
	dim best_match_dif
	redim mirror_array(ubound(in_array, 2))

	for i = 0 to Ubound(in_array, 2) 
		'find_match
		for t = 0 to Ubound(in_array2, 2)
			
			delta_x = abs(in_axis(0) * in_array(1, i) - in_array2(1, t))
			delta_y = abs(in_axis(1) * in_array(2, i) - in_array2(2, t))
			delta_z = abs(in_axis(2) * in_array(3, i) - in_array2(3, t))
			
			difference = delta_x + delta_y + delta_z
			
			if t = 0 then
			 	best_match_dif = difference 
				best_match = in_array2(0,t)
			else 	
				if difference < best_match_dif then
					best_match_dif = difference 
					best_match = in_array2(0,t)
				end if
			end if
		next
		
		'now fill mirror_array
		mirror_array(i) = best_match
	next

	out_array = mirror_array

end function
'----------------------------------------
' Get UV Cluster
'----------------------------------------
function get_UV_cluster (in_obj, out_cluster, out_valid)

	dim clusters, myGeometry, ClusterCollection 
	dim SamplePoints, Current_UV, Sample, UVWProp    
	out_valid = TRUE
	
	set myGeometry = in_obj.activeprimitive.geometry

	set ClusterCollection = myGeometry.clusters
	
	' find sample point cluster containing uvprop
	set SamplePoints = ClusterCollection.filter( "Sample" )
	

	' get name of current uvprop
	
	Current_UV = in_obj.material.CurrentUV.name

	if Current_UV = "" then 
		out_valid = FALSE
		logmessage "UV mirror requires a UV space on selected object"
		exit function
	end if

	' find uvprop for list of sample points
	for each Sample in SamplePoints
		set Sample = GetValue( Sample )

		'set UVWProp = Sample.properties(Current_UV )
		
		if TypeName(properties_item(Sample.properties, Current_UV)) <> "Empty" then
			set UVWProp = properties_item(Sample.properties, Current_UV)
		end if

		if typename( UVWProp ) <> "Empty" then
			exit for
		end if
	next
	
	set out_cluster = UVWProp 
	
	
end function

'----------------------------------------
' Get UV array 
'----------------------------------------
function uv_array_from_source (in_UV_proj, in_mirror_array, out_uv_array)

	'protection
	if TypeName(in_UV_proj) = "Nothing" then exit function

	out_uv_array = in_UV_proj.obj.ElementsValues(in_mirror_array)
	
end function
'----------------------------------------
' Write UV array onto target
'----------------------------------------
function write_uv_array(in_target, in_sample_array, in_uv_array)	
	
	
	'Now set the new values
	in_target.obj.SetElementsValues in_sample_array, in_uv_array

	FreezeObj in_target

end function
'----------------------------------------

'------------------------------------------------------------------------------
' NAME:		properties_item
' INPUT:
'
' DESCRIPTION: replacement for object.properties.find
'------------------------------------------------------------------------------
function properties_item ( in_oProperties, in_strPropName )
	dim strName
	set properties_item = nothing
	for each properties_item in in_oProperties
		strName = properties_item.name
		if strName = in_strPropName then
			exit for
		end if
	next
end function
