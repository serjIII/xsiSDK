
'------------------------------------------------------------------
' Sample script to control a particle flow using scripting.
' This sub will modify the particles velocity so they try to reach
' a selected object (if any). 
' - The x scale of the object controls how fast they will reach the object.
' - A negative x scaling will repell the particles.
' - the y scaling controls the attraction variance 
' - There's also a color shift from blue to 
' yellow based on the distance to the selected object.
'
' Author: Rejean Gagne - Oct 26th, 200
'
' Note: to test this script, create a simple flow of particles
' using a disc emitter, then set the script file and subroutine
' from the particle operator property page. Enjoy.
'------------------------------------------------------------------

Sub AttractFromObj(input)

  	Dim cloud, particles, colorList, posList, veloList
  	Dim posx,posy,posz,ampl,avar,dirx,diry,dirz,dist,lst
  	
	' This gets the cloud
	Set cloud = input.Parent
  
	'This gets the ParticleCollection from the cloud
	Set particles = cloud.Particles
  
	'This gets all the information we need
	colorList    = particles.ColorArray
	posList      = particles.PositionArray
	veloList     = particles.velocityArray

	' Default values, in case no object is selected
	posx = 0.0
	posy = 5.0
	posz = 0.0
	ampl = 5.0
	avar = 1.0
	
	' Gets the position of the selected object (the first one)
	' It will act as the attractor
	set lst = GetValue("SelectionList")
	if lst.count > 0 then
		l_obj = lst(0)
		posx = GetValue( l_obj & ".kine.posx" )
		posy = GetValue( l_obj & ".kine.posy" )
		posz = GetValue( l_obj & ".kine.posz" )
		ampl = GetValue( l_obj & ".kine.sclx" )
		avar = GetValue( l_obj & ".kine.scly" )
	end if
	
	'Loop for each particle  
	for i = 0 to particles.count - 1

		' Vector between the particle and the attractor
		dirx = posx - posList( 0, i )
		diry = posy - posList( 1, i )
		dirz = posz - posList( 2, i )
	
		' square of distance
		dist = dirx * dirx + diry * diry + dirz * dirz

		' Set the velocity to be in the direction of the attractor
		' along with some randomness	
		veloList(0,i) = dirx * ampl + ( 10.0 * avar * (rnd()-0.5))
		veloList(1,i) = diry * ampl + ( 10.0 * avar * (rnd()-0.5))
		veloList(2,i) = dirz * ampl + ( 10.0 * avar * (rnd()-0.5))

		' Set the color shift (blue to yellow)
		colorList(0,i) = (10 / dist)
		colorList(1,i) = (10 / dist)
		colorList(2,i) = dist * 0.01
	next

	'apply the changes
	particles.colorArray    = colorList
	particles.velocityArray = veloList

End Sub
