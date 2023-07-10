'------------------------------------------------------------------
' This sub attaches objects to particles. This is a simple demo
' script to be used as a particle operator script, other more
' efficient versions will be made to use a scripted operator.
'
' Author: 
' Original sample: Phoenix Tools - Oct 26th, 2000
' Modified by Rejean Gagne - Nov 2000
'
' Note: to test this script:
' 1) create a simple flow of particles
' 2) create a number of objects to position on particles (any number)
'    and have them share a null root called "ObjectCloud"
' 3) in the particle operator, set the pre-collision script to point
'    to this file, and to use MoveObj as the sub to call
' 4) set the simulation mode to live (otherwize the script will get
'    called only the first time the simulation is done
' 5) As you run the simulation, each object will follow a different
'    particle until it dies.
'
'  
'------------------------------------------------------------------
Sub MoveObj(input)

  	Dim cloud, particles, posList, idList, k, l_objs, l_obj, l_OMObj, l_root
  	
	' This gets the cloud
	Set cloud = input.Parent
  
	'This gets the ParticleCollection from the cloud
	Set particles = cloud.Particles
  
	'This gets all the information we need
	posList = particles.PositionArray
	idList  = particles.IDArray
	
	' Find a hierarchy called ObjectCloud that will
	' contain the objects to constrain
	On Error Resume Next
	set l_root = Application.ActiveProject.ActiveScene.Root.FindChild( "ObjectCloud" )

	if TypeName(l_root) = "Empty" then 
		logmessage "No object to attach. Please have your objects as a hierarchy named 'ObjectCloud'."
		exit sub
	end if

	' The objects are to be children of the ObjectCloud
	set l_children = l_root.children

	if l_children.count > 0 then

		'Loop for each particle  
		for i = 0 to particles.count - 1
	
			' Get ID of current part
			k=idList(i)
			if(k < l_children.count) then

				' Associate to current particle the k-th selected object
				set l_obj = l_children(k)
					
				' Set object to current particle position
				l_obj.kinematics.global.parameters("posx").value = posList(0,i)
				l_obj.kinematics.global.parameters("posy").value = posList(1,i)
				l_obj.kinematics.global.parameters("posz").value = posList(2,i)
			end if
		next
	end if
End Sub
