'If we are calling this script
'from the script editor, instead
'of using a subroutine, the particles
'could be obtained with:
'
'Set cloud = getvalue("scene_root.cloud")
'
'
'Note: the following works
'best with particles emitted
'from a disk

Sub PTest2(input)
  
  'we need to work with the cloud
  Set cloud = input.Parent
  
  'Obtain the ParticleCollection from the cloud
  Set particles = cloud.Particles
  
  'Get all the information we need
  ageList      = particles.AgeArray
  ageLimitList = particles.AgeLimitArray
  colorList    = particles.ColorArray
  posList      = particles.PositionArray
  veloList     = particles.velocityArray
  	Dim lst

	posx = 0.0
	posy = 0.0
	scl  = 1
	set lst = GetValue("SelectionList")
	if lst.count > 0 then
		l_obj = lst(0)
		posx = GetValue( l_obj & ".kine.posx" )
		posy = GetValue( l_obj & ".kine.posy" )
		scl = GetValue( l_obj & ".kine.sclx" )
	end if
	
 	Dim sizeList
	ReDim sizeList(particles.Count - 1)


'logmessage "----------------"
  'loop for each particle  
  for i = 0 to particles.count - 1

'logmessage  "i = " & i & "age = " & ageList(i)


		colorList(0,i) = 0
		colorList(1,i) = 0
		colorList(2,i) = posy * AgeList(i) / AgeLimitList(i)

	if posList(1,i) > posy then		
		if ( posList(0,i) > posx ) then
			factor = .5
		else
			factor = -2
		end if
		veloList(0,i) = factor * scl * 5 * sin( ageList(i) ) + (ageList(i)*factor*.1)



	end if
  next

  'apply the changes
  particles.colorArray    = colorList
  particles.velocityArray    = veloList

End Sub
