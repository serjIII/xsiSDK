'Auto Connect - By Michael Isner.
'A program that makes connection maps between two
'skeleton sets (characters).  It's a visual pattern 
'recognition algorithm that uses: hierachy and 
'bone #, and is scale independant. It will match 
'both bones and effectors.  For input, it
'requires similar orientation and similar pose
'on a selection set of two.  The 
'connection map is from selection 0 to 
'selection 1.  The algorithm is based on 
'relative location in bounding volume, bone
'vector orientation, matching position in
'bone index.  It also has a bone length 
'component, which after some testing is for
'now set to 0 (didn't give good results).


dim a_center_x, a_center_y, a_center_z
dim b_center_x, b_center_y, b_center_z
dim amax_x, amax_y, amax_z, amin_x, amin_y, amin_z
dim bmax_x, bmax_y, bmax_z, bmin_x, bmin_y, bmin_z
dim avol_x, avol_y, avol_z, avol_diagnol
dim bvol_x, bvol_y, bvol_z, bvol_diagnol
dim location_percent , bonelength_percent, boneangle_percent 
dim first, second, switch


pi = 3.1415926535897932
switch = 0

location_percent = .7   
bonelength_percent = 0
boneangle_percent  = .3


Dim fso, tf


' So to start we need a crawler that cycles through both hierachies.  
' This scipt will be selection list based so it will require a selection 
' list of two

set sel = GetValue("SelectionList")
DeselectAll
if sel.count = 2 then

	' now we know we have two hierachies, one starting with
	' A - sel(0) and B - sel (1).  We need to define 8 arrays to
	' hold the bones and dfcs
	
	set A_bones = CreateObject("XSI.Collection")
	set B_bones = CreateObject("XSI.Collection")
	set A_vol = CreateObject("XSI.Collection")
	set B_vol = CreateObject("XSI.Collection")
	set A_connect = CreateObject("XSI.Collection")
	set B_connect = CreateObject("XSI.Collection")
	
	first = sel(0)
	second = sel(1)
	
	' now crawl A
	selfcheck  sel(0), "A"
	crawl sel(0), "A"
	
	' now crawl B
	selfcheck  sel(1), "B"
	crawl sel(1), "B"
	
	if A_bones.count > 0 AND B_bones.count > 0 then
	
		'now make A the smaller array.
		make_A_smallest
	
		volume A_vol, "A"
		volume B_vol, "B "
	
		'find volume centers
		volume_center
	
		'place a cube at the bounding volume location
		'volume_cube "A", 746
		'volume_cube "B", 255
		'nullsoncenter
	
		'now we know the collection lengths we can define the arrays
		'for bone dfc(distance from center) and bonelength.
		redim A_x(A_bones.count -1), A_y(A_bones.count -1), A_z(A_bones.count -1)
		redim B_x(B_bones.count -1), B_y(B_bones.count -1), B_z(B_bones.count -1)
		redim A_blengths(A_bones.count -1), B_blengths(B_bones.count -1)
		redim Auv_x(A_bones.count -1), Auv_y(A_bones.count -1), Auv_z(A_bones.count -1)
		redim Buv_x(B_bones.count -1), Buv_y(B_bones.count -1), Buv_z(B_bones.count -1)
		
		' now fill the bone length arrays.  This function also fills
		' the unit vectors.
	
		bonelengths A_bones, "A"
		bonelengths B_bones, "B"
		
		'now compare A_bones against B_bones.
		compare
		
		add_cmap	
	
		DeselectAll 	
	
	end if	
else

	logmessage "this script requires two objects to be selected"

end if 



'------------------------------------------------------
'This function is a self check for the first object
' being an effector or bone

function selfcheck (in_object, A_or_B)

	dim blength

	if in_object.type = "eff" then 
			
		if A_or_B = "A" then
			A_vol.add in_object
		else 
				B_vol.add in_object
		end if
	end if
	
	if in_object.type = "bone" then

		blength = GetValue(in_object & ".bone.length")
		if blength > .02 then
										
			'add the children to the array (either A or B)
			if A_or_B = "A" then
				A_bones.add in_object
				A_vol.add in_object
			else 
				B_bones.add in_object
				B_vol.add in_object
			end if
		end if					
	end if		
	
end function


'------------------------------------------------------
' This function cycles through the hierachies and finds the bones

function crawl (in_object, A_or_B)

		dim blength
		
		
		set children = EnumElements ( in_object & ".Children", TRUE )
		if TypeName(children) <> "Nothing" then
				
			for each child in children
			
				' if the child is an effector only use it in the
				' bounding volume calculations
				
				if child.type = "eff" then 
				
					if A_or_B = "A" then
						A_vol.add child
					else 
						B_vol.add child
					end if
				end if
				
				' find out if the child is a bone
				
				if child.type = "bone" then

						blength = GetValue(child & ".bone.length")
						if blength > .02 then
										
							'add the children to the array (either A or B)
							if A_or_B = "A" then
								A_bones.add child
								A_vol.add child
							else 
								B_bones.add child
								B_vol.add child
							end if
						end if					
				end if
					
								
				' now crawl through the children
				crawl child, A_or_B
					
			next
		end if

end function
'------------------------------------------------------
function make_A_smallest


	set temp = CreateObject("XSI.Collection")
	set temp2 = CreateObject("XSI.Collection")
	
	if A_bones.count > B_bones.count then
		
		set temp = A_bones
		set A_bones = B_bones
		set B_bones = temp 
		
		set temp2 = A_vol
		set A_vol = B_vol
		set B_vol = temp2
		
		switch = 1

	end if

end function

'------------------------------------------------------
' This function compares the input object against
' the current max / min values.  By doing this
' it determines bounding volume.

function volume(in_array, A_or_B)

	for each elem in in_array

		dim xpos, ypos, zpos 
		
		xpos = GetValue (elem & ".kine.global.posx")
		ypos = GetValue (elem & ".kine.global.posy")
		zpos = GetValue (elem & ".kine.global.posz")	

		if A_or_B = "A" then
			if xpos > amax_x or amax_x = "" then amax_x = xpos
			if ypos > amax_y or amax_y = "" then amax_y = ypos
			if zpos > amax_z or amax_z = "" then amax_z = zpos
			if xpos < amin_x or amin_x = "" then amin_x = xpos
			if ypos < amin_y or amin_y = "" then amin_y = ypos
			if zpos < amin_z or amin_z = "" then amin_z = zpos
		else
			if xpos > bmax_x or bmax_x = "" then bmax_x = xpos
			if ypos > bmax_y or bmax_y = "" then bmax_y = ypos
			if zpos > bmax_z or bmax_z = "" then bmax_z = zpos
			if xpos < bmin_x or bmin_x = "" then bmin_x = xpos
			if ypos < bmin_y or bmin_y = "" then bmin_y = ypos
			if zpos < bmin_z or bmin_z = "" then bmin_z = zpos
		end if

	next

end function
'------------------------------------------------------
' This function finds the volume center

function volume_center

	a_center_x = amin_x + (amax_x - amin_x) / 2
	a_center_y = amin_y + (amax_y - amin_y) / 2
	a_center_z = amin_z + (amax_z - amin_z) / 2

	b_center_x = bmin_x + (bmax_x - bmin_x) / 2
	b_center_y = bmin_y + (bmax_y - bmin_y) / 2
	b_center_z = bmin_z + (bmax_z - bmin_z) / 2
	
	avol_x = amax_x - amin_x
	avol_y = amax_y - amin_y 
	avol_z = amax_z - amin_z 
	bvol_x = bmax_x - bmin_x
	bvol_y = bmax_y - bmin_y 
	bvol_z = bmax_z - bmin_z 

	'find out the diagnols of the bounding volumes
	avol_diagnol = ((avol_x)^2 + (avol_y)^2 + (avol_z)^2)^.5 
	bvol_diagnol = ((bvol_x)^2 + (bvol_y)^2 + (bvol_z)^2)^.5	

	max_vol = (avol_x + avol_y + avol_z) / 3
	baverage_vol = (bvol_x + bvol_y + bvol_z) / 3	
	
end function	

'------------------------------------------------------	
function nullsoncenter
	
	set testnullA = GetPrim ("Null")
	AddProp "Display Property", testnullA
	SetValue testnullA & ".display.wirecol", 746
	SetValue (testnullA & ".kine.global.posx"), a_center_x
	SetValue (testnullA & ".kine.global.posy"), a_center_y
	SetValue (testnullA & ".kine.global.posz"), a_center_z	
	
	set testnullB = GetPrim ("Null")
	AddProp "Display Property", testnullB
	SetValue testnullB & ".display.wirecol", 255
	SetValue (testnullB & ".kine.global.posx"), b_center_x
	SetValue (testnullB & ".kine.global.posy"), b_center_y
	SetValue (testnullB & ".kine.global.posz"), b_center_z
					
end function
'------------------------------------------------------
' This function places a cube at the bounding 
' volume location

function volume_cube (A_or_B, in_color)

	set volcube = CreatePrim ("Cube", "MeshSurface")
	SetValue volcube & ".cube.length", 1.000
	AddProp "Display Property", volcube
	SetValue volcube & ".display.wirecol", in_color
	
	if A_or_B = "A" then
	
		SetValue volcube & ".kine.global.posx", a_center_x
		SetValue volcube & ".kine.global.posy", a_center_y
		SetValue volcube & ".kine.global.posz", a_center_z
	
		SetValue volcube & ".kine.global.sclx", avol_x 
		SetValue volcube & ".kine.global.scly", avol_y 
		SetValue volcube & ".kine.global.sclz", avol_z 
		
	else
		
		SetValue volcube & ".kine.global.posx", b_center_x
		SetValue volcube & ".kine.global.posy", b_center_y
		SetValue volcube & ".kine.global.posz", b_center_z
		
		SetValue volcube & ".kine.global.sclx", bvol_x 
		SetValue volcube & ".kine.global.scly", bvol_y 
		SetValue volcube & ".kine.global.sclz", bvol_z 		
	
	end if 
	
	  
end function
'------------------------------------------------------

' This function finds the bone length arrays by finding the 
' delta to the next object on the bone index
' so it will take into account scale properly.  It also
' calculates the unit vectors.  The unit vectors will end up
' being between -1 and 1 so they are indexed between 0 - 1
' (for comparision) with .5 being the zero vector.
' It also fills all the distance from bounding min
' array.  This distance is a percentage of the bounding
' volume.  It takes the center of each bone, which is 
' the average between it's location and the next bone.

function bonelengths (in_array, A_or_B)

    	dim t, xpos, ypos, zpos, delta_x, delta_y, delta_z
	t = 0
	
	for each elem in in_array
		
		dim bonex,boney,bonez, nextx, nexty, nextz, dist
		dim realuv_x, realuv_y, realuv_z
		
		set MySkeleton =  GetSkeleton(elem, BoneIndex )
		
		bonex = GetValue (elem & ".kine.global.posx")
		boney = GetValue (elem & ".kine.global.posy")
		bonez = GetValue (elem & ".kine.global.posz")	
		
		nextx = GetValue (MySkeleton(BoneIndex + 1) & ".kine.global.posx")
		nexty = GetValue (MySkeleton(BoneIndex + 1) & ".kine.global.posy")		
		nextz = GetValue (MySkeleton(BoneIndex + 1) & ".kine.global.posz")
		
		xpos = (nextx + bonex) / 2 
		ypos = (nexty + boney) / 2
		zpos = (nextz + bonez) / 2
		
		dist = ((nextx - bonex)^2 + (nexty - boney)^2 + (nextz - bonez)^2)^.5 
		
		realuv_x = (nextx - bonex) / dist 
		realuv_y = (nexty - boney) / dist
		realuv_z = (nextz - bonez) / dist
		

		if A_or_B = "A" then

			
			' fill the distances with the angle delta between
			' the bone center and it % of bounding volume (per axis)
			' from the min.
			
			if avol_x <> 0 then
				delta_x =  (xpos - amin_x) / avol_x
			else 
				delta_x = 0
			end if	
			A_x(t) = delta_x
			
			if avol_y <> 0 then
				delta_y =  (ypos - amin_y) / avol_y
			else
				delta_y = 0
			end if
			A_y(t) = delta_y
			
			if avol_z <> 0 then
				delta_z =  (zpos - amin_z) / avol_z
				' avol_z
			else
				delta_z = 0
			end if 
			A_z(t) = delta_z
			
			'the bone lengths are made realative to the bounding scale by dividing
			'them by the bounding volume diagnol
			
			A_blengths(t) = dist 
			' oldway A_blengths(t) = dist / avol_diagnol
			
			' Fill the "comparision" unit vectors
			Auv_x(t) = (realuv_x + 1) / 2
			Auv_y(t) = (realuv_y + 1) / 2
			Auv_z(t) = (realuv_z + 1) / 2		
					
		else
			
			' fill the distances with the angle delta between
			' the bone center and it % of bounding volume (per axis)
			' from the min
		
			if bvol_x <> 0 then
				delta_x = (xpos - bmin_x) / bvol_x
			else	
				delta_x = 0
			end if		
			B_x(t) = delta_x
			
			if bvol_y <> 0 then
				delta_y = (ypos - bmin_y) / bvol_y
			else
				delta_y = 0
			end if	
			B_y(t) = delta_y
			
			if bvol_z <> 0 then
				delta_z = (zpos - bmin_z) / bvol_z
			else
				delta_z = 0
			end if	
			B_z(t) = delta_z					
			


			'the bone lengths are made realative to the bounding scale by dividing
			'them by the bounding volume diagnol
			B_blengths(t) = dist	
			'old way B_blengths(t) = dist / bvol_diagnol
	
			' Fill the "comparision" unit vectors
			Buv_x(t) = (realuv_x + 1) / 2
			Buv_y(t) = (realuv_y + 1) / 2
			Buv_z(t) = (realuv_z + 1) / 2
								
		end if
		
		t = t + 1		
	next
		
end function

'------------------------------------------------------
' This function compares A_bones against B_bones, knowing
' that A_bones is smaller.  The best match is found for
' every bone in A_bones (leaving the leftovers on the larger
' array with no match)

function compare

	dim a, b, best_bone, best_grade, current_grade
	
 	 a=0
 	 for each Abone in A_bones
 		
 		
 		b = 0
 		best_bone = ""
 		best_grade = ""
 		
 		for each Bbone in B_bones
 	
 			'grade all Bbones against Abone
 			'if the grade is higher than best_grade, lbone
 			'become best_bone
 			
 			current_grade = grade(a, b, Abone, Bbone)	 	    
 				
 			if current_grade > best_grade or best_grade = "" then
  				best_grade = current_grade
 				best_bone = Bbone
 				
			end if
			
			b = b	+ 1
		next
		
		'at this point we know that best_bone is now the best
		'match for Abone. If the best grade is worse than .1
		'forget it.
		
		if best_grade > .05 then
		
			AddProp "Display Property", Abone
			SetValue Abone & ".display.wirecol", a * round(1000 / A_bones.count, 0) + 14
			AddProp "Display Property", best_bone
			SetValue best_bone & ".display.wirecol", a * round(1000 / A_bones.count , 0) + 14	
			A_connect.add Abone
			B_connect.add best_bone
			
		end if
		
 	 	a = a + 1
 	 next

end function

'------------------------------------------------------
' this function grades the match of one bone against 
' another


function grade (in_a, in_b, Abone, Bbone)

 
	dim xmatch, ymatch, zmatch, bonematch, xuv_match, yuv_match, zuv_match, av_dist, dpf, g, index_match,bf
		
	xmatch = abs( A_x(in_a) - B_x(in_b)) 
	ymatch = abs( A_y(in_a) - B_y(in_b)) 
	zmatch = abs( A_z(in_a) - B_z(in_b))
	x_extra = 2 * pcurve(1 - xmatch)
	y_extra = 2 * pcurve(1 - ymatch)
	z_extra = 2 * pcurve(1 - zmatch)
	
	if abs(A_blengths(in_a)) > abs(B_blengths(in_b)) then
		bonematch = 1 - abs( B_blengths(in_b) / A_blengths(in_a))
	else
		bonematch = 1 - abs( A_blengths(in_a) / B_blengths(in_b))
	end if
	
	bf = bcurve(bonematch)
	
	xuv_match = abs( Auv_x(in_a) - Buv_x(in_b)) * boneangle_percent / 3
	yuv_match = abs( Auv_y(in_a) - Buv_y(in_b)) * boneangle_percent / 3
	zuv_match = abs( Auv_z(in_a) - Buv_z(in_b)) * boneangle_percent / 3	

	index_match = 0
	'also give points if the bones share the same location on the bone index.
	GetSkeleton Abone, a_index 
	GetSkeleton Bbone, b_index 
	if a_index = b_index then 
		index_match = .1
	end if 
 	
	grade = (1 - xmatch - ymatch - zmatch - xuv_match - yuv_match - zuv_match + index_match ) * x_extra * y_extra * z_extra 

	
end function

'------------------------------------------------------
' This function queries the user if they want a connection
' map and adds it if they accept.

function add_cmap

	dim firstroot, secondroot, map, alist, blist, a_index, b_index

	keep = msgbox ("Make connection map?", 4)
	if keep = 6 then
	
		'first we need the root of A_bones and B_bones
		selectObj first, "TREE"
		set sel = GetValue("SelectionList")
		firstroot = sel(0)
		
		selectObj second, "TREE"
		set sel = GetValue("SelectionList")
		secondroot = sel(0)		
		
		DeselectAll
		
		'since there's no obvious way to create a blank 
		'connectionMap at the moment, have to do some
		'juggling.  We want the template to be in the 
		'model of the second selection
		
		set first = GetPrim ("Null")
		set second = GetPrim ("Null")
		
		ParentObj secondroot, first
		ParentObj secondroot, second
		CutObj first
		CutObj second
		
		CreateConnectionMap first , second, map
	 	DeleteMappingRule map

		for t = 0 to A_connect.count - 1
			
			if switch = 0 then
				AddMappingRule map , A_connect(t), B_connect(t)
			else
				AddMappingRule map , B_connect(t), A_connect(t)
			end if
			
			' if two bones match and are both one before the
			' end of the bone index (ie each the last bone), 
			' throw in thier effectors too.
			
			set alist = GetSkeleton (A_connect(t), a_index)
			set blist = GetSkeleton (B_connect(t), b_index)
			
			logmessage alist.count - 2 & "---" & a_index
			if alist.count - 2 = a_index AND blist.count - 2 = b_index then
			
				if switch = 0 then
					AddMappingRule map , alist(alist.count - 1), blist(blist.count - 1)
				else
					AddMappingRule map , blist(blist.count - 1), alist(alist.count - 1)
				end if
			end if
			
		next
	end if
	
	'remove the colors.
	for t = 0 to A_connect.count - 1
		SetValue A_connect(t) & ".display.wirecol", 0
		SetValue B_connect(t) & ".display.wirecol", 0
	next 

end function

'------------------------------------------------------
' pads and rounds a numeric string to a length of 6.

function le(in_number)

	in_number = round(in_number, 3)
	if len(in_number) > 6 then
		le = left(in_number, 6)
	else
		le = in_number & space(6 - len(in_number))
	end if


end function
'------------------------------------------------------
' sets a text string to a length of 8
function ls(in_string) 
	ls = left(in_string, 8)
	if len(ls) < 8 then
		ls = ls & space(8 - len(ls))
	end if

end function
'------------------------------------------------------
' takes input between 0 and 1.  0 to .5 returns 0,
' .5 to 1 sinusoidally curves up to 1

function pcurve (in_var)
	dim g
	
	if in_var > .5 then
		g = sin(2*pi*in_var - 1.5 * pi)
		pcurve = g/2 + .5
	else
		pcurve = 0
	end if

end function

'------------------------------------------------------
' takes input between 0 and 1.
' between 0 and .5 the return rises sinusoidally from 0 to 1.
' from .5 to 1, it's 1.

function bcurve(in_var)

	dim g
	
	if in_var > .5 then
		bcurve = 1
		
	else
		g = sin(2*pi*in_var - .5 * pi)
		bcurve = g/2 + .5
	end if
	
end function
'------------------------------------------------------
