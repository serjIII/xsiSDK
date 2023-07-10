'-----------------------------------------------------------------------------------
' CreateObjectsForParticles
'
' This script will create an object hierarchy needed to work with the 
' Particles_AttachObject scripted operator preset. 
'
' The parameters are
'    - in_nobj : number of objects you want to attach to particles (can be less
'                or more objects than you have particles, that doesn't matter)
'    - in_objname : the base name for the new objects
'    - in_cloudname : the name of the cloud to which you want to attach to (must
'                     have been created prior to run this script.
'
' This script creates a first null, under which two nulls are created. One for the
' objects, one for the targets which are needed to make objects oriented properly.
' then under the 'Objects' null, additional nulls are created to hold the attached
' objects themselves (in_nobj nulls). This script also creates cubes underneath
' the nulls, but for demo purposes only, you can replace the cube under each null
' by whatever object or hierarchy you want.
'
' The script proceeds by applying the Particles_AttachObject scripted op preset
' on object nulls and targets, and set the variables needed appropriately, each
' operator needs to know notably if it's driving an object or a target, and it's given
' an initial particle id to attach to.
'
' If you plan to create several objects, it is recommended to put this script
' as a command in a toolbar, this way you will avoid the logging of each command.
'
' Notice: if this script fails on the ApplyOp command, it's likely because the 
' scripted operator preset isn't found (should have been placed under 
' Data/DSPresets/Operators) or because the associated spdl file hasn't been registered
' (normally it should have been registered upon install of XSI).
' To register the spdl manually, you may have to run this (make sure that the paths
' point to your install paths):
' spdlreg2 -D ...Application\bin\ophost.dll 
'  -P ...Application\bin\plugincore.dll 
'  -r ...Data\DSPresets\Operators\Particles_AttachObject.spdl
'
'
'-----------------------------------------------------------------------------------


CreateObjectsForParticles 4, "part", "Particles_AttachObject.cloud"

sub CreateObjectsForParticles( in_nobj, in_objname, in_cloudname )

	Dim l_root, l_objects, l_targets, l_objectsupport, l_object, l_target, l_op, l_portstr

	set l_root = GetPrim( "Null", in_objname )
	set l_objects = GetPrim( "Null", l_root.name & "_Objects", l_root )
	set l_targets = GetPrim( "Null", l_root.name & "_Targets", l_root )
	for i = 0 to in_nobj - 1
	
		set l_objectsupport = GetPrim( "Null", in_objname, l_objects )
		setValue l_objectsupport & ".kine.global.sclx", 0.3
		setValue l_objectsupport & ".kine.global.scly", 0.3
		setValue l_objectsupport & ".kine.global.sclz", 0.3
		
		set l_object = CreatePrim( "Cube", "MeshSurface", l_objectsupport.name & "_obj", l_objectsupport )	
		setValue l_object & ".cube.length", 1
		setValue l_object & ".kine.global.sclx", 0.5
		setValue l_object & ".kine.global.scly", 0.3
		setValue l_object & ".kine.global.sclz", 0.3

				
		set l_target = GetPrim( "Null", l_objectsupport.name & "_dir", l_targets )
		setValue l_target & ".kine.global.sclx", 0.3
		setValue l_target & ".kine.global.scly", 0.3
		setValue l_target & ".kine.global.sclz", 0.3


		ApplyCns "Direction", l_objectsupport, l_target
	
		l_portstr = l_objectsupport & ".kine.global," & in_cloudname & ".cloud"
		set l_op = ApplyOp( "Particles_AttachObject", l_portstr )
		
		SetValue l_op & ".Active", 			True
		SetValue l_op & ".ReuseObjects", 		True
		SetValue l_op & ".InheritOrientation",	True
		SetValue l_op & ".InitialId", 		i		
		SetValue l_op & ".CurrentId", 		i		
		SetValue l_op & ".IsObject", 			True
				
		l_portstr = l_target & ".kine.global," & in_cloudname & ".cloud"
		set l_op = ApplyOp( "Particles_AttachObject", l_portstr )
		
		SetValue l_op & ".Active", 			True
		SetValue l_op & ".ReuseObjects", 		True
		SetValue l_op & ".InheritOrientation",	True
		SetValue l_op & ".InitialId", 		i		
		SetValue l_op & ".CurrentId", 		i		
		SetValue l_op & ".IsObject", 			False			
	next

end sub
