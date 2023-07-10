'******************************************************************************
'
' File supervisor : Jean-Luc Corenthin
' Date : 04/19/99
' (c) Copyright 1999 Softimage
'
' $Archive:  $
' $Revision:  $  $Date:  $
' Checkin by: $Author:  $
'
' @doc		EXTERNAL
'
' @module	particle.vbs
'
'******************************************************************************

' Ensure that all variables are explicitly declared
'Option explicit

'******************************************************************************
' DEBUGGING
'******************************************************************************

' DEVNOTE: remove comment to force a break point when script loaded.
'stop

'******************************************************************************
' CONSTANTS
'******************************************************************************

'******************************************************************************
' String Constants (used to translate)
'******************************************************************************
const IDS_ADD_PARTICLE_EVENT_MSG_L_M			= 1098
const IDS_ADD_PARTICLE_GOAL_MSG1_L_M			= 1099
const IDS_ADD_PARTICLE_GOAL_MSG2_L_M			= 1100
const IDS_ADD_PARTICLE_FORCE_MSG1_L_M			= 1101
const IDS_ADD_PARTICLE_FORCE_MSG2_L_M			= 1102


'******************************************************************************
' Public Functions/Subroutines
'******************************************************************************

'------------------------------------------------------------------------------
' NAME:        CreateParticleCloudProc
'
' DESCRIPTION: Create a particle cloud.
'------------------------------------------------------------------------------

function CreateParticleCloudProc ( in_Objs, in_Prim )
    
	Dim l_bCreatedEmitter
	Dim l_MyEmitter
	Dim l_InObjsExpanded
	Dim l_EmitterGroup
	Dim l_MyEmissionProp
	Dim l_MyOpList
	Dim l_MyParticleCloud
	Dim l_Obj

	Dim l_ConnectionSet 
	Dim l_MainGroup 
	Dim l_ObstacleGroup 
	Dim l_ForceGroup
	Dim l_InitStateGroup
	Dim l_ParTypeGroup 

	Dim l_ptype
	Dim l_oCloud, l_emitProp
	
	' Create a new particle type for this cloud
	CreateParticleType siBillboardType, l_ptype

	' Create the primitive used as emitter.
	l_bCreatedEmitter = True
	if StrComp( in_Prim, "Sphere", 1 ) = 0 then
		set l_MyEmitter = SIGetPrim( in_Prim, "PEmitter" ).value( "Value" )
		SIConvert "MeshSurface", l_MyEmitter
		SetValue l_MyEmitter & ".sphere.radius", 1.0
	elseif StrComp( in_Prim, "Disc", 1 ) = 0 then
		set l_MyEmitter = SIGetPrim( in_Prim, "PEmitter" ).value( "Value" )
		SIConvert "MeshSurface", l_MyEmitter
		SetValue l_MyEmitter & ".disc.innerradius", 0.01
		SetValue l_MyEmitter & ".disc.outerradius", 1
		SetValue l_MyEmitter & ".polymsh.geom.subdivv", 3
	elseif StrComp( in_Prim, "Grid", 1 ) = 0 then
		set l_MyEmitter = SIGetPrim( in_Prim, "PEmitter" ).value( "Value" )
		SIConvert "MeshSurface", l_MyEmitter
		SetValue l_MyEmitter & ".grid.ulength", 1
		SetValue l_MyEmitter & ".grid.vlength", 1
		SetValue l_MyEmitter & ".polymsh.geom.subdivu", 1
		SetValue l_MyEmitter & ".polymsh.geom.subdivv", 1
	elseif StrComp( in_Prim, "Cube", 1 ) = 0 then
		set l_MyEmitter = SIGetPrim( in_Prim, "PEmitter" ).value( "Value" )
		SIConvert "MeshSurface", l_MyEmitter
		SetValue l_MyEmitter & ".cube.length", 1.0
	else
		' Use the input objects as emitters.
		l_bCreatedEmitter = False
	end if

	if l_bCreatedEmitter then
		'     LogMessage "Created emitter " & in_Prim

		' Make the emitter green as it is a sort of control object.
		MakeLocal l_MyEmitter & ".display", siNodePropagation
		SetValue l_MyEmitter & ".display.wirecol", 33

		' Add an emission property to the emitter.
		SIAddProp "Emission Property", l_MyEmitter, siNodePropagation , l_MyEmitter.name & "_emission", l_emitProp
		
		' Apply the new particle type to the emitter
		SetParticleType l_emitProp & ".ParType", l_ptype

		' Apply the Sparks operator to create a particle cloud.
		set l_MyOpList = ApplyOp( "SparksOp", l_MyEmitter, siNode, siPersistentOperation, l_MyParticleCloud )

		for each l_oCloud in l_MyParticleCloud
			UpdateParticleTypeConnections( l_oCloud )
		next
		
	else
'     LogMessage "Seleted emitters"

		' Create a connection set for the particle simulation op
		set l_ConnectionSet = CreateObject("XSI.ConnectionSet")
		set l_MainGroup = createobject("xsi.collection")
		set l_ObstacleGroup = createobject("xsi.collection")
		set l_ForceGroup = createobject("xsi.collection")
		set l_InitStateGroup = createobject("xsi.collection")
		set l_ParTypeGroup = createobject("xsi.collection")

		' Get an expanded list (flatten groups and branches).
		set l_InObjsExpanded = in_Objs.Expand
		if l_InObjsExpanded.Count > 0 then
'        LogMessage "Expanded: " & l_InObjsExpanded

         ' Filter the expanded list for 3D objects of S3DFAMID_GEOMETRY.
         set l_EmitterGroup = SIFilter( l_InObjsExpanded, "geometry" )
         if TypeName( l_EmitterGroup ) <> "Nothing" then
'           LogMessage "Filtered: " & l_EmitterGroup

            ' Add an emission property to the 3D objects that do not have one yet.
            for each l_Obj in l_EmitterGroup
				if l_Obj.type = "cloud" then
					l_EmitterGroup.Remove l_Obj
				else
				   set l_MyEmissionProp = l_Obj.LocalProperties.Find( "EmissionProp" )
				   if TypeName( l_MyEmissionProp ) = "Nothing" then
	'                 LogMessage "Adding an Emission property to " & l_Obj
					  SIAddProp "Emission Property", l_Obj, siNodePropagation , l_Obj.name & "_emission", l_emitProp

					  ' Apply the new particle type to the emitter
					  SetParticleType l_emitProp & ".ParType", l_ptype
				   else
	'                 LogMessage l_Obj & " already has an Emission property"
				   end if
				end if
            next

         else
            set l_EmitterGroup = CreateObject( "XSI.Collection" )
         end if

      else
         set l_EmitterGroup = CreateObject( "XSI.Collection" )
      end if

		for each l_Obj in l_InObjsExpanded
			if l_Obj.type = "cloud" and l_InitStateGroup.count = 0 then
				set oConstructionHistory = l_Obj.activePrimitive.constructionhistory 
			
				nbFound = oConstructionHistory.filter( "ParticlesOp" ).Count
				nbFound = nbFound + oConstructionHistory.filter( "ExplosionOp" ).Count
				nbFound	= nbFound + oConstructionHistory.filter( "FluidOp" ).Count

				if nbFound = 0 then  
					'logmessage "we have an initial cloud"
				    SIAddProp "ParticleInitialStateProp", l_Obj, siNodePropagation
					l_InitStateGroup.Add l_Obj
				end if
			end if
		next


		' Apply the Sparks operator to create a particle cloud.
		'     LogMessage "ApplyOp: " & l_EmitterGroup

		l_ConnectionSet.type = siGroupLevel
		l_ConnectionSet.addgroup l_MainGroup
		l_ConnectionSet.addgroup l_EmitterGroup
		l_ConnectionSet.addgroup l_ObstacleGroup
		l_ConnectionSet.addgroup l_ForceGroup
		l_ConnectionSet.addgroup l_InitStateGroup
		l_ConnectionSet.addgroup l_ParTypeGroup

		set l_MyOpList = ApplyOp( "SparksOp", l_ConnectionSet, siNode, siPersistentOperation, l_MyParticleCloud )
		
		for each l_oCloud in l_MyParticleCloud
			UpdateParticleTypeConnections( l_oCloud )
		next

	end if

	' Apply the Particle Renderer by default.
	ApplyParticleRendererProc l_MyParticleCloud

	' Set the return value to the created particle cloud.
	set CreateParticleCloudProc = l_MyParticleCloud
	
	AutoInspect l_MyOpList

end function

'------------------------------------------------------------------------------
' NAME:        ApplySoftBodyProc
'
' DESCRIPTION: Apply the SoftBody operator.
'------------------------------------------------------------------------------

function ApplySoftBodyProc ( in_Objs )

   Dim l_InObjsExpanded
   Dim l_InObjsFiltered
   Dim l_MyObj
   Dim l_MyModel
   Dim l_MyOpList
   Dim l_Obj
   Dim l_SubComp

   set ApplySoftBodyProc = Nothing

   ' Get an expanded list (flatten groups and branches).
   set l_InObjsExpanded = in_Objs.Expand
   if l_InObjsExpanded.Count = 0 then
      exit function
   end if

   ' Filter the expanded list for Polygon Mesh and Surface 3D objects, clusters, clusterable components and weight maps.
   set l_InObjsFiltered = SIFilter( l_InObjsExpanded, "DeformSimulation" )
   if TypeName( l_InObjsFiltered ) = "Nothing" then
      exit function
   end if

   for each l_Obj in l_InObjsFiltered

      ' Must create a temporary cluster in order to retrieve the 3D object of a clusterable component.
      if TypeName( l_Obj ) = "CollectionItem" then
         set l_SubComp = l_Obj.SubComponent
		 if typename(l_SubComp) = "Nothing" then
			exit function
		 end if         
		 set l_MyObj = l_SubComp.Parent3DObject
      else
         set l_MyObj = l_Obj
      end if

      ' Retrieve the 3D object.
      set l_MyModel = l_MyObj
      for i = 0 to l_MyObj.PathItems.Count - 1
         set l_MyModel = l_MyObj.PathItems( i )
         if TypeName( l_MyModel ) = "X3DObject" then
            exit for
         end if
      next

      ' Make sure the 3D object is a Polygon Mesh or a Surface.
      if not ( l_MyModel.Type = "polymsh" or l_MyModel.Type = "surfmsh" ) then
         l_InObjsFiltered.Remove( l_Obj )
      end if

   next
   if l_InObjsFiltered.Count = 0 then
      exit function
   end if

   ' Apply a SoftBody operator to each filtered Polygon Mesh or Surface 3D object.
   set l_MyOpList = ApplyOp( "SoftBodyOp", l_InObjsFiltered, siNode, siPersistentOperation )

   if TypeName( l_MyOpList ) <> "Nothing" then
      set ApplySoftBodyProc = l_MyOpList
      AutoInspect l_MyOpList
   end if

end function

'------------------------------------------------------------------------------
' NAME:        ApplyClothProc
'
' DESCRIPTION: Apply the Cloth operator.
'------------------------------------------------------------------------------

function ApplyClothProc ( in_Objs )

   Dim l_InObjsExpanded
   Dim l_InObjsFiltered
   Dim l_MyObj
   Dim l_MyModel
   Dim l_MyClothProp
   Dim l_MyOpList
   Dim l_Obj
   Dim l_SubComp

   set ApplyClothProc = Nothing

   ' Get an expanded list (flatten groups and branches).
   set l_InObjsExpanded = in_Objs.Expand
   if l_InObjsExpanded.Count = 0 then
      exit function
   end if
'  LogMessage "Expanded: " & l_InObjsExpanded

   ' Filter the expanded list for Polygon Mesh and Surface 3D objects, clusters, clusterable components and weight maps.
   set l_InObjsFiltered = SIFilter( l_InObjsExpanded, "DeformSimulation" )
   if TypeName( l_InObjsFiltered ) = "Nothing" then
      exit function
   end if
'  LogMessage "Filtered: " & l_InObjsFiltered

   ' Add a Cloth property to the Polygon Mesh and Surface 3D objects that do not have one yet.
   for each l_Obj in l_InObjsFiltered
'     LogMessage "Object " & l_Obj & ": " & TypeName( l_Obj ) & " - " & l_Obj.Type

      ' Must create a temporary cluster in order to retrieve the 3D object of a clusterable component.
      if TypeName( l_Obj ) = "CollectionItem" then
'        LogMessage "Clustering: " & l_Obj
         set l_SubComp = l_Obj.SubComponent
		 if typename(l_SubComp) = "Nothing" then
			exit function
		 end if         
		 set l_MyObj = l_SubComp.Parent3DObject
      else
         set l_MyObj = l_Obj
      end if

      ' Retrieve the 3D object.
      set l_MyModel = l_MyObj
      for i = 0 to l_MyObj.PathItems.Count - 1
         set l_MyModel = l_MyObj.PathItems( i )
         if TypeName( l_MyModel ) = "X3DObject" then
            exit for
         end if
      next

      ' Make sure the 3D object is a Polygon Mesh or a Surface.
'     LogMessage "Model " & l_MyModel & ": " & TypeName( l_MyModel ) & " - " & l_MyModel.Type
      if l_MyModel.Type = "polymsh" or l_MyModel.Type = "surfmsh" then
         set l_MyClothProp = l_MyModel.LocalProperties.Find( "ClothProp" )
         if TypeName( l_MyClothProp ) = "Nothing" then
'           LogMessage "Adding a Cloth property to " & l_MyModel
            SIAddProp "Cloth", l_MyModel,,, l_MyClothProp
         else
'           LogMessage l_MyModel & " already has a Cloth property"
         end if
         SetValue l_MyClothProp & ".Master", True
      else
'        LogMessage "Ignoring: " & l_Obj
         l_InObjsFiltered.Remove( l_Obj )
      end if

   next
   if l_InObjsFiltered.Count = 0 then
      exit function
   end if

   ' Apply a Cloth operator to each filtered Polygon Mesh or Surface 3D object.
'  LogMessage "ApplyOp: " & l_InObjsFiltered
   set l_MyOpList = ApplyOp( "ClothOp", l_InObjsFiltered, siNode, siPersistentOperation )

   if TypeName( l_MyOpList ) <> "Nothing" then
      set ApplyClothProc = l_MyOpList
      AutoInspect l_MyOpList
   end if

end function

'------------------------------------------------------------------------------

function CreateForceProc ( in_force, in_objs )

	Dim rtn, force, l_Obj

	set CreateForceProc = Nothing
	
'	Create the force
	set rtn = SIGetPrim ( in_force )
	set force = rtn.value("Value")
	
	
'	Connect resulting force to simulation operator.
	for each l_Obj in in_objs
'		Allow user to create forces while a non simulation object is selected.
'		It is annoying to be popped up with an error because of that.
		On Error Resume Next
		set l_Objs = CreateObject("XSI.Collection")
		set l_Forces = CreateObject("XSI.Collection")
		l_Objs.AddItems l_Obj
		l_Forces.AddItems force		
		if typename(l_Obj) = "ParticleCloud" then			
			AddParticleForce l_Objs, l_Forces
		elseif typename(l_Obj.ActivePrimitive.ConstructionHistory.find("SoftBodyOp")) = "Operator" then
			AddParticleForce l_Objs, l_Forces
		elseif typename(l_Obj.ActivePrimitive.ConstructionHistory.find("ClothOp")) = "Operator" then
			AddParticleForce l_Objs, l_Forces
		elseif typename(l_Obj.ActivePrimitive.ConstructionHistory.find("hairDynamicsOp")) = "Operator" then
			AddParticleForce l_Objs, l_Forces
		end if

	next

	' Get the default environment
	set oDefaultEnvironment = ActiveProject.ActiveScene.ActiveSimulationEnvironment			

	' Add the force to the current environment if such environment exists
	if typename( oDefaultEnvironment ) <> "Nothing" then

		' Add the missing containers to the current environment
		dim l_oContainers
		set l_oContainers = oDefaultEnvironment.Containers
		if l_oContainers.Count = 0 then
			AddContainerToEnvironment oDefaultEnvironment, "RigidBody", 1, "RigidBodies"
			AddContainerToEnvironment oDefaultEnvironment, "Constraint", 1, "Constraints"
			AddContainerToEnvironment oDefaultEnvironment, "Force", 1, "Forces"
		else
			set l_forcesGroup = l_oContainers("Forces")
			if typename( l_forcesGroup ) = "Nothing" then
				AddContainerToEnvironment oDefaultEnvironment, "Force", 1, "Forces"
			end if
		end if

		' Add the force to the Forces container
		AddToContainer oDefaultEnvironment.fullname & ".Forces", force.FullName 

		' If the op is not there yet, add it
		set l_oOperators = oDefaultEnvironment.Operators
		if l_oOperators.Count = 0 then
			select case GetValue( "Preferences.simulation.rbdengine" )
				case 0 'physX
					applyop "NXDynamicsOp", oDefaultEnvironment
				case 1 ' ODE
					applyop "DynamicsOp", oDefaultEnvironment
			end select
		end if
	end if

	' Return and inspect force
	set CreateForceProc = force

	if Not TypeName( CreateForceProc ) = "Nothing" then
		SelectObj CreateForceProc
		AutoInspect CreateForceProc, , , "Simulation"
	end if

end function

'------------------------------------------------------------------------------
' NAME:		AddFluidEmitterCircleProc
'
' DESCRIPTION: Create and add to the fluid cloud an implicit circle emitter.
'------------------------------------------------------------------------------
function AddFluidEmitterCircleProc( in_objs )

	Dim myImpPrim

	set AddFluidEmitterCircleProc = Nothing

'	Create a circle implicit primitive
	set myImpPrim = GetPrim( "Circle" )

'	Add an emission property to the created object and attach it to the selected operators
	for each l_Obj in in_objs
		AddParticleEmitter l_Obj, myImpPrim, 0
	next

'	Set the return value to the created primitive
	set AddFluidEmitterCircleProc = myImpPrim

end function

'------------------------------------------------------------------------------
' NAME:		AddFluidEmitterSquareProc
'
' DESCRIPTION: Create and add to the fluid cloud an implicit square emitter.
'------------------------------------------------------------------------------
function AddFluidEmitterSquareProc( in_objs )

	Dim myImpPrim

	set AddFluidEmitterSquareProc = Nothing

'	Create a square implicit primitive
	set myImpPrim = GetPrim( "Square" )

'	Add an emission property to the created object and attach it to the selected operators
	for each l_Obj in in_objs
		AddParticleEmitter l_Obj, myImpPrim, 0
	next

'	Set the return value to the created primitive
	set AddFluidEmitterSquareProc = myImpPrim

end function

'------------------------------------------------------------------------------
' NAME:		AddFluidEmitterCubeProc
'
' DESCRIPTION: Create and add to the fluid cloud an implicit cube emitter.
'------------------------------------------------------------------------------
function AddFluidEmitterCubeProc( in_objs )

	Dim myImpPrim

	set AddFluidEmitterCubeProc = Nothing

'	Create a cube implicit primitive
	set myImpPrim = GetPrim( "Cube" )

'	Add an emission property to the created object and attach it to the selected operators
	for each l_Obj in in_objs
		AddParticleEmitter l_Obj, myImpPrim, 0
	next

'	Set the return value to the created primitive
	set AddFluidEmitterCubeProc = myImpPrim

end function

'------------------------------------------------------------------------------
' NAME:		CreateFluidProc
'
' DESCRIPTION: Create the primitive passed and apply hyperflow operator to it.
' primitives can only be cube, disc, or square.
'------------------------------------------------------------------------------

function CreateFluidProc ( in_prim )
	Dim l_emitter
	Dim l_op
	Dim l_fluidCloud
	Dim l_ptype
	Dim l_oCloud, l_emitProp

	' Create a new particle type for this cloud
	CreateParticleType siBlobType, l_ptype

	set CreateFluidProc = Nothing

	'  Create the primitive used as emitter.
	if StrComp( in_prim, "Cube", 1 ) = 0 or StrComp( in_prim, "Square", 1 ) = 0 or StrComp( in_prim, "Disc", 1 ) = 0 then
		set l_emitter = SIGetPrim( in_prim, "FluidEmitter" ).value( "Value" )

		if StrComp( in_prim, "Cube", 1 ) = 0 then
			SetValue l_emitter & ".cube.length", 2.000
		elseif StrComp( in_prim, "Square", 1 ) = 0 then
			SetValue l_emitter & ".square.length", 2.000
		elseif StrComp( in_prim, "Disc", 1 ) = 0 then
			SetValue l_emitter & ".disc.innerradius", 0.010
			SetValue l_emitter & ".disc.outerradius", 1.000
		end if

		' Make the emmiter icon green,, as it's a sort of control object
		MakeLocal l_emitter & ".display", siNodePropagation
		SetValue l_emitter & ".display.wirecol", 33

		'     Rotate the primitive so the flow goes down by default
		'     (currently it is emitted in the +Z direction).
		Rotate l_emitter, 90.000, 0.000, 0.000, siAbsolute, siLocal, siObj, siX
	else
		LogMessage "Can only CreateFluid with Cube, Square or Disc emitters.", siWarning
		exit function
	end if

	'  Add an emission property to the object that does not have one yet.
	SIAddProp "Emission Property", l_emitter, siNodePropagation, l_emitter.name & "_emission" , l_emitProp
	'  Set Generation to Fluid exclusively.
	SetValue l_emitProp & ".Generation", 4
	
	' Apply the newly created particle type
	SetParticleType l_emitProp & ".ParType", l_ptype

	'  Apply the Hyperflow operator.
	set l_op = ApplyOp( "HyperFlowOp", l_emitter, 3, siPersistentOperation, l_fluidCloud )

	for each l_oCloud in l_fluidCloud
		UpdateParticleTypeConnections( l_oCloud )
	next

	' Apply the Particle Renderer by default.
	ApplyParticleRendererProc l_fluidCloud

	'  Set the return value to the created cloud.
	set CreateFluidProc = l_fluidCloud

	AutoInspect l_op

end function

'------------------------------------------------------------------------------

function CreateExplosionProc ( in_prim )

   Dim myEmitter
   Dim emitterLight
   Dim emitterPosX, emitterPosY, emitterPosZ
   Dim myOp
   Dim myLight
   Dim explosionCloud

   set CreateExplosionProc = Nothing

'  Create the primitive used as emitter.
   if StrComp( in_prim, "Sphere", 1 ) = 0 then
      set myEmitter = SIGetPrim( in_prim, "ExplosionEmitter" ).value( "Value" )
      SIConvert "MeshSurface", myEmitter
      SetValue myEmitter & ".visibility.rendvis", False
      SetValue myEmitter & ".sphere.radius", 1.000
   elseif StrComp( in_prim, "Cylinder", 1 ) = 0 then
      set myEmitter = SIGetPrim( in_prim, "ExplosionEmitter" ).value( "Value" )
      SIConvert "MeshSurface", myEmitter
      SetValue myEmitter & ".visibility.rendvis", False
      SetValue myEmitter & ".polymsh.geom.subdivv", 1
      SetValue myEmitter & ".cylinder.height", 1.000
   else
      LogMessage "Can only CreateExplosion with Sphere or Cylinder emitters.", siWarning
      exit function
   end if

   ' Lock the emitter geometry properties.
   Lock myEmitter & ".polymsh.geom"

   ' Make the emmiter icon green,, as it's a sort of control object
   MakeLocal myEmitter & ".display", siNodePropagation
   SetValue myEmitter & ".display.wirecol", 33

'  Create the light element and parent it to the emitter.
   set emitterLight = SIGetPrimLight( "Point.Preset", "ExplosionLight", myEmitter ).value( "3DObject" )

'  Set the light at the position of the emitter.
   emitterPosX = GetValue( myEmitter & ".kine.global.posx" )
   emitterPosY = GetValue( myEmitter & ".kine.global.posy" )
   emitterPosZ = GetValue( myEmitter & ".kine.global.posz" )
   SetValue emitterLight & ".kine.global.posx", emitterPosX
   SetValue emitterLight & ".kine.global.posy", emitterPosY
   SetValue emitterLight & ".kine.global.posz", emitterPosZ

   set myLight = CreateObject("XSI.Collection")
   myLight.Add emitterLight

   ' Make the light icon red,, as it's a sort of control object
   MakeLocal emitterLight & ".display", siNodePropagation
   SetValue emitterLight & ".display.wirecol", 15

'  Apply the BlowUp operator.
   set myOp = ApplyOp( "BlowUpOp", myLight & ".soft_light.color," & myEmitter, 3, siPersistentOperation, explosionCloud )
	
   UpdateParticleTypeConnections( myOp )

   if StrComp( in_prim, "Sphere", 1 ) = 0 then
      SetValue myOp & ".emittertype", 0
   elseif StrComp( in_prim, "Cylinder", 1 ) = 0 then
      SetValue myOp & ".emittertype", 1
   end if

'  Set the return value to the created cloud.
   set CreateExplosionProc = explosionCloud

'  Apply the BlowUp shader by default.
   ApplyParticleShaderProc explosionCloud, "Particle_ExplosionV2", "Particle_vol_ExplosionV2", FALSE

   AutoInspect myOp

end function

'------------------------------------------------------------------------------
' NAME:		CreatePTypeProc
'
' DESCRIPTION: Simply create a new particle type and inspect it!
'------------------------------------------------------------------------------
sub CreatePTypeProc( in_renderType )
	Dim l_ptype

	CreateParticleType in_renderType, l_ptype
	
	AutoInspect l_ptype
end sub

'------------------------------------------------------------------------------
' NAME:		CreateParticleSimulationFromFileProc
'
' DESCRIPTION: Create a particle simulation from a cached file.
'------------------------------------------------------------------------------
sub CreateParticleSimulationFromFileProc( in_filename )

	' pop a file browser if the filename is not specified

	l_filename = in_filename

	if StrComp( l_filename, "", 1 ) = 0 then

		dim oFileBrowser
		set oFileBrowser = XSIUIToolkit.FileBrowser

		oFileBrowser.DialogTitle = "Load Cache File"	' set the title of the file browser
		oFileBrowser.InitialDirectory = "c:\"			' set the initial directory
		oFileBrowser.FileBaseName = ""					' set the default file name
		oFileBrowser.Filter = "PTP Files (*.ptp)|*.ptp|All Files (*.*)|*.*||"	' set the filters
		oFileBrowser.ShowOpen					' show an open file dialog

		if oFileBrowser.FilePathName <> "" then
			l_filename = oFileBrowser.FilePathName
		end if 
	end if

	if StrComp( l_filename, "", 1 ) <> 0 then

		set l_MyOpList = ApplyOp( "BlasterOp", , , , oCloud )
	
		SetValue oCloud & ".cloud.blasterop.infilename", l_filename
		SetValue oCloud & ".cloud.blasterop.writeout", False
		ApplyParticleRendererProc oCloud

		AutoInspect l_MyOpList
	end if
end sub


'**************************************************************
' FCreateShader
'**************************************************************
' NAME:		FCreateShader
'
' INPUT:		in_presetname	- name of the preset to create shader from
'				in_presetfamily	- family the preset belongs to
'				in_name			- name to give shader
'
' RETURNED:		the created shader
'               
'---------------------------------------------------------------
Function FCreateShader(in_presetname, in_presetfamily, in_name)
	On Error Resume Next

	Dim l_preset, l_shader
	set l_preset = CreatePreset(in_presetname, in_presetfamily)
	if TypeName(l_preset) = "Empty" then
		set FCreateShader = Nothing
		Exit Function
	end if
	set l_shader = CreateObjectFromPreset(l_preset, in_name)
	if TypeName(l_shader) = "Empty" then
		set FCreateShader = Nothing
	Else
		set FCreateShader = l_shader
	End If
End Function

Function FConnectShader( in_shader, in_port )
	On Error Resume Next
	
	FConnectShader = False

	' Is something already connected? Delete it.
	If TypeName( in_port.source ) <> "Nothing" Then
		DeleteObj in_port.source
	End If

	' If the deletion was successful, connect the new
	' shader and return a success indicator.
	If TypeName( in_port.source ) = "Nothing" Then
		in_port.connect( in_shader )

		FConnectShader = True
	End If
End Function


'------------------------------------------------------------------------------
' NAME:		ApplyParticleRendererProc
'
' DESCRIPTION: Apply particle renderer on cloud(s)
'------------------------------------------------------------------------------
sub ApplyParticleRendererProc( in_obj )
	Dim l_obj, l_objList
	
	if Not IsObject( in_obj ) Then
		exit sub
	end if

	'--------------------------------------------------------------------
	' Filter list so that we only have particle clouds.
	'--------------------------------------------------------------------

	set l_objList = SIFilter( in_obj, "Particle",, siSearchFamilies )

	if TypeName( l_objList ) = "Nothing" then
		exit sub
	end if
	
	if l_objList.Count <= 0 then
		exit sub
	end if

	'--------------------------------------------------------------------
	' add particle renderer to objects
	'--------------------------------------------------------------------

	for each l_obj in l_objList
		Dim l_shader, l_bSuccess

		' Make the material local to the cloud
		MakeLocal l_obj.material

		' Disconnect default scene material connections
		set l_partshader = CreateShaderFromPreset( "Particle_Renderer", l_obj.material, "Particle_Renderer" )

		If FConnectShader( l_partshader, l_obj.material.Surface ) Or _
		   FConnectShader( l_partshader, l_obj.material.Shadow ) Or _
		   FConnectShader( l_partshader, l_obj.material.Volume ) Or _
		   FConnectShader( l_partshader, l_obj.material.PhotonVolume ) Then
		   ' We successfully connected the shader to *a* port, let's rename
		   ' the material as well
			l_obj.material.name = l_obj.name & "_Material"
		Else
			' No connection was successful so we just delete the shader
			DeleteObj l_partshader
		End If
	next
end sub

'------------------------------------------------------------------------------
' NAME:		ApplyParticleShaderProc
'
' DESCRIPTION: Apply a particle shader to particle cloud.
'------------------------------------------------------------------------------
function ApplyParticleShaderProc ( in_objs, in_material, in_volume, in_inspect )

	Dim l_Shader, l_Volume, l_Obj, l_CacheFileName, MyObjList

	set ApplyParticleShaderProc = Nothing

	if Not IsObject(in_objs) Then
		exit function
	end if

	'--------------------------------------------------------------------
	' Filter list so that we only have particle clouds.
	'--------------------------------------------------------------------

	set MyObjList = SIFilter( in_objs, "Particle",, siSearchFamilies )

	if TypeName( MyObjList ) = "Nothing" then
		exit function
	end if
	
	if MyObjList.Count <= 0 then
		exit function
	end if

	'--------------------------------------------------------------------
	' add particle shaders to objects
	'--------------------------------------------------------------------

	for each l_Obj in MyObjList

'		Apply a default shader to instantiate the material
		SIApplyShader "$XSI_DSPRESETS\\Shaders\\Material\\Phong.Preset", l_Obj

		set listMaterialCnxPoints = CreateObject( "XSI.Collection" )
		listMaterialCnxPoints.Add l_Obj & ".material.Surface"
		listMaterialCnxPoints.Add l_Obj & ".material.Shadow"

		set l_Shader = SIApplyShaderToCnxPoint( in_material, listMaterialCnxPoints )
		set l_Volume = SIApplyShaderToCnxPoint( in_volume,   l_Obj & ".material.Volume" )

		RemoveAllShadersFromCnxPoint l_Obj & ".material.Photon"

		if TypeName(ApplyParticleShaderProc) = "Nothing" then
			set ApplyParticleShaderProc = CreateObject("XSI.Collection")
		end if

		ApplyParticleShaderProc.Add l_Shader	
	next

end function

'------------------------------------------------------------------------------
' NAME:		InspectInitialStatePropProc
'
' DESCRIPTION: Given a cloud, inspect the associated initial state property
'------------------------------------------------------------------------------
sub InspectInitStatePropProc( inSelectionList )

	set oInspectCollection = CreateObject("XSI.Collection")

	for each oSelectedItem in inSelectionList

	if oSelectedItem.type = "cloud" then

		if oSelectedItem.BelongsTo(si3DObjectFamily) then
			set oPrimitive = oSelectedItem.activeprimitive
 			logmessage "got an 3dobject"
 		else
 			set oPrimitive = oSelectedItem
 		end if
 		
		set oConstructionHistory = oPrimitive.constructionhistory
		
		set oParticleOps = oConstructionHistory.Filter( "ParticlesOp" )

		if oParticleOps.count > 0 then

			set oParticleOpInputPorts = oParticleOps(0).InputPorts

			for each oInputPort in oParticleOpInputPorts
				if oInputPort.isconnected then
					if oInputPort.target2.type = "ParticleInitState" then
						oInspectCollection.Add( oInputPort.target2 )
					end if
				end if
			next
		else
			
			set oCloudObj = oPrimitive.Owners(0)
			
			set oPropCollection = oCloudObj.LocalProperties.Filter("ParticleInitState")

			if oPropCollection.count > 0 then
				oInspectCollection.Add( oPropCollection(0) )
			end if
		end if
		
	end if

	next

	dim l_bScriptingSessionActive 
	l_bScriptingSessionActive = CBool(GetUserPref( "ScriptingSessionActive" ))


	if not l_bScriptingSessionActive then
		inspectobj oInspectCollection
	end if

end sub

'------------------------------------------------------------------------------
'
' GetParticleElementFromObject
'
' This function returns a particle element (force, partype, emitter prop, obstacle prop, 
' event, goal prop ) from the input object
'------------------------------------------------------------------------------
Function GetParticleElementFromObject( in_obj )

	if	typename(obj)="ParticleCloudPrimitive" or obj.belongsto( "forces" ) or obj.type = "ParticlesOp" or obj.type = "FluidOp" or obj.type = "ExplosionOp"  then

		set particleElement = in_obj

	else

		if typename( in_obj ) = "Primitive" then

			set in_obj = in_obj.parent

		end if 


		if in_obj.type = "ParticleEvent" or in_obj.type = "ParticleGoal" or in_obj.type = "ObstacleProp" or in_obj.type = "EmissionProp" or in_obj.type = "ParType" then

			set particleElement = in_obj

		else		
			
			if typename(in_obj) = "X3DObject" then
		
				set prop = in_obj.properties.find("EmissionProp")
			
				if typename(prop) <> "Nothing" then
					set particleElement = prop
				else

					set prop = in_obj.properties.find("ObstacleProp")
			
					if typename(prop) <> "Nothing" then
						set particleElement = prop
					else
					
						set prop = in_obj.properties.find("ParticleGoal")
				
						if typename(prop) <> "Nothing" then
							set particleElement = prop

						else
				
							set prim = in_obj.activeprimitive
				
							if prim.belongsto("Forces") or prim.type = "cloud" then
								set particleElement = prim
												
							end if
						end if 
					end if

				end if
						
			end if
		end if
	end if
		

	set GetParticleElementFromObject = particleElement


end Function

Function GetParticleElementsFromList( in_list )

	set particleElements = createobject("xsi.collection")


	for each obj in in_list
		
		set particleElement = GetParticleElementFromObject( obj )

		if typename( particleElement ) <> "Nothing" then
			
			particleElements.Add particleElement
		
		end if
	next

	set GetParticleElementsFromList = particleElements

End Function

Function GetParticleOperatorFromParticleElement( in_particleElement )

	' If we're being passed the operator then just return that

	if in_particleElement.belongsto( siOperatorFamily ) then

		set GetParticleOperatorFromParticleElement = in_particleElement

	else

		' Otherwise. ARGGHHHH. Since we can't get to the operator stack unless we're a primitive try to get the 
		' primitive if possible

		if typename( in_particleElement ) = "ParticleCloud" then
			set in_particleElement = in_particleElement.activeprimitive
		end if

		
		if in_particleElement.type = "cloud" then

			set stack = in_particleElement.constructionhistory

			for each op in stack 

				if op.type = "ParticlesOp" or op.type = "ExplosionOp" or op.type = "FluidOp" then
										
					set GetParticleOperatorFromParticleElement = op

					exit function

				end if
			next
		end if



	end if
		
End Function


Function GetParticleOperatorsFromParticleElements( in_particleElements )
	
	set ops = createobject("xsi.collection")


	for each particleElement in in_particleElements

'		On Error Resume Next
		set oper = GetParticleOperatorFromParticleElement( particleElement )

		if typename( oper ) <> "Nothing" then
			
			ops.Add oper
		
		end if
	next

	set GetParticleOperatorsFromParticleElements = ops
		

End Function


Sub InspectParticleOperatorProc( in_list )

	dim l_bScriptingSessionActive 
	l_bScriptingSessionActive = CBool(GetUserPref( "ScriptingSessionActive" ))


	if not l_bScriptingSessionActive then
		set ops = GetParticleOperatorsFromParticleElements( in_list )

		inspectobj ops, "Operators"

	end if

End Sub


Sub AddParticleEventUIProc( in_targets, in_source, inout_Event)
	AddParticleEvent in_targets, in_source, inout_Event	
	AutoInspect inout_Event
End Sub

Sub AddParticleEventProc( in_targets, in_source, inout_Event)

	set l_tempTargets = CreateObject("XSI.Collection")
	l_tempTargets.AddItems in_targets	
	if l_tempTargets.count = 0 then
		l_tempTargets.AddItems selection
	end if
	set l_tempTargetsFiltered = SIFilter(l_tempTargets,"Decay")
	
	if(Typename(l_tempTargetsFiltered) = "Nothing") then
		'call pick objects		
		Button = 1
		While Button <> 0
			strMsg = XSIUtils.Translate( IDS_ADD_PARTICLE_EVENT_MSG_L_M, "XSISCRIPTS" )
			PickElement "Decay", strMsg, strMsg, oSel, Button, 0 , Modifier

			if typename(oSel) <> "Empty" And Button <> 0 then

				set l_tempTargetsFiltered = oSel
				
			end if
		Wend
	end if

	if typename(l_tempTargetsFiltered) = "Nothing" then
		logmessage "AddParticleEvent: At least a ptype or an obstacle object needs to be selected in order to add an event to it.",siError
		Err.Raise siErrCancelled
	end if
	
	l_tempTargets.RemoveItems l_tempTargetsFiltered
	set l_tempSources = l_tempTargets
	set in_targets = l_tempTargetsFiltered

	
	'Filter PType
	set in_sources = SIFilter(l_tempSources,"PType") 
	if typename(in_sources) = "Nothing" then
		set in_sources = CreateObject("XSI.Collection")
	end if	
				
	SIAddParticleEvent in_targets, in_sources , inout_Event			
	
End Sub

Sub AddParticleGoalUIProc(in_targets, in_sources, inout_Goals)
	AddParticleGoal in_targets, in_sources, inout_Goals
	AutoInspect inout_Goals	
End Sub

Sub AddParticleGoalProc(in_targets, in_sources, inout_Goals)
		
	set l_tempTargets = CreateObject("XSI.Collection")
	l_tempTargets.AddItems in_targets
	if l_tempTargets.count = 0 then
		l_tempTargets.AddItems selection
	end if
	set l_tempTargetsFiltered = SIFilter(l_tempTargets,"CloudOrPType")
	
	if(Typename(l_tempTargetsFiltered) = "Nothing") then
		'call pick objects		
		Button = 1
		While Button <> 0
			strMsg = XSIUtils.Translate( IDS_ADD_PARTICLE_GOAL_MSG1_L_M, "XSISCRIPTS" )
			PickElement "CloudOrPType", strMsg, strMsg, oSel, Button, 0 , Modifier

			if typename(oSel) <> "Empty" And Button <> 0 then

				set l_tempTargetsFiltered = oSel
				
			end if
		Wend
	end if
	
	if typename(l_tempTargetsFiltered) = "Nothing" then
		logmessage "AddParticleGoal: At least a cloud or ptype object needs to be selected in order to add a goal to it.",siError
		Err.Raise siErrCancelled
	end if

	l_tempTargets.RemoveItems l_tempTargetsFiltered
	set in_targets = l_tempTargetsFiltered

	'Filter goals
	set l_tempSourcesFiltered = SIFilter(in_sources ,"Emitter")
	if(Typename(l_tempSourcesFiltered) = "Nothing") then
		'call pick objects		
		Button = 1
		While Button <> 0
			strMsg = XSIUtils.Translate( IDS_ADD_PARTICLE_GOAL_MSG2_L_M, "XSISCRIPTS" )
			PickElement "Emitter", strMsg, strMsg, oSel, Button, 0 , Modifier

			if typename(oSel) <> "Empty" And Button <> 0 then

				set l_tempSourcesFiltered = oSel
				
			end if
		Wend
	end if
	
	if typename(l_tempSourcesFiltered) = "Nothing" then
		logmessage "AddParticleGoal: At least a goal object needs to be selected in order to add goal to the particle simulation.",siError			
		Err.Raise siErrCancelled
	else
		set in_sources = l_tempSourcesFiltered
	end if 

	SIAddParticleGoal in_targets, in_sources, inout_Goals	
End Sub

Sub AddParticleForceUIProc(in_targets,in_forces)
	AddParticleForce in_targets, in_forces
	AutoInspect in_forces
End Sub

Sub AddParticleForceProc(in_targets,in_forces)		
	set l_tempTargets = CreateObject("XSI.Collection")
	l_tempTargets.AddItems in_targets
	if l_tempTargets.count = 0 then
		l_tempTargets.AddItems selection
	end if
	l_tempTargets.AddItems in_forces
	l_tempTargets.Unique = true
	set l_tempForcesFiltered = SIFilter(l_tempTargets,"Force")
		
	if (Typename(l_tempForcesFiltered) = "Nothing") then		
		set l_tempForcesFiltered = CreateObject("XSI.Collection")		
	end if		

		
	l_tempTargets.RemoveItems(l_tempForcesFiltered)
	set l_tempTargetsFiltered = SIFilter(l_tempTargets,siGenericObjectFilter)
	
	if(Typename(l_tempTargetsFiltered) = "Nothing") then
		Button = 1
		While Button <> 0
			strMsg = XSIUtils.Translate( IDS_ADD_PARTICLE_FORCE_MSG1_L_M, "XSISCRIPTS" )
			PickElement siGenericObjectFilter, strMsg, strMsg, oSel, Button, 0 , Modifier

			if typename(oSel) <> "Empty" And Button <> 0 then

				set l_tempTargetsFiltered = oSel
				
			end if
		Wend
	end if
	
	if typename(l_tempTargetsFiltered) = "Nothing" then
		logmessage "AddParticleForce: At least a cloud, cloth or SoftBody object needs to be selected in order to add force to it.",siError
		Err.Raise siErrCancelled
	end if	
	set in_targets = l_tempTargetsFiltered

	
	'Filter forces		
	if l_tempForcesFiltered.count = 0 then		
		Button = 1
		While Button <> 0
			strMsg = XSIUtils.Translate( IDS_ADD_PARTICLE_FORCE_MSG2_L_M, "XSISCRIPTS" )
			PickElement "Force", strMsg, strMsg, oSel, Button, 0 , Modifier

			if typename(oSel) <> "Empty" And Button <> 0 then

				set l_tempForcesFiltered = oSel
				
			end if
		Wend
	end if
	
	if typename(l_tempForcesFiltered) = "Nothing" then
		logmessage "AddParticleForce: At least a force object needs to be selected in order to add force to a simulation.",siError
		Err.Raise siErrCancelled		
	else
		set in_forces = l_tempForcesFiltered
	end if 
	SIAddParticleForce in_targets, in_forces	
End Sub

' Emits points from the input object
function EmitPointsFromObjectProc(in_objects)		
	dim oCurveEmissionNode 
	dim oSurfaceEmissionNode

	iNumSurfaceEmitters = 0
	iNumCurveEmitters = 0

    ' Filter the expanded list for 3D objects groups
    set l_EmitterGroup = SIFilter( in_objects, siObjectFilter&","&siGroupFilter )


    if TypeName( l_EmitterGroup ) = "Nothing" then 
	    logmessage "No valid geometry selected for emission", siError
	    exit function
    end if    

    set oPointCloud = GetPrim( "PointCloud", "PointCloud" )
    set oTerminalNode = CreateSimulatedICETree( oPointCloud )(0)

    i = 1

    for each l_Obj in l_EmitterGroup

        EmiterName = l_Obj.fullname
        
    	set oGetDataNode = AddICENode( "GetDataNode", oTerminalNode)
        oGetDataNode.Reference.	value = EmiterName

		if l_Obj.type = "#Group" then
			On Error Resume Next
			l_PrimType = l_Obj.expandedmembers(0).activeprimitive.type
		else
			l_PrimType = l_Obj.type
		end if

		if l_PrimType = "crvlist" then
		
			if iNumCurveEmitters = 0 then
			    set oCurveEmissionNode = AddICECompoundNode( "Emit from Curve", oTerminalNode )			
			    AddPortToICENode oTerminalNode.inputports(0).fullname, 0
			    ConnectICENodes oTerminalNode.inputports(0).fullname, oCurveEmissionNode.GetPortFromName("emit").fullname
			else
				AddPortToICENode oCurveEmissionNode.GetPortFromName("Emitter1").fullname, 1
			end if

			iNumCurveEmitters = iNumCurveEmitters + 1

		   	ConnectICENodes oCurveEmissionNode & ".emitter" & iNumCurveEmitters , oGetDataNode.GetPortFromName("value").fullname
		elseif l_PrimType = "surfmsh" or l_Obj.activeprimitive.type = "polymsh" then
				
			if iNumSurfaceEmitters = 0 then
			    set oSurfaceEmissionNode = AddICECompoundNode( "Emit from Surface", oTerminalNode )			
			    AddPortToICENode oTerminalNode.inputports(0).fullname, 0
			    ConnectICENodes oTerminalNode.inputports(0).fullname, oSurfaceEmissionNode.GetPortFromName("emit").fullname
			else
				AddPortToICENode oSurfaceEmissionNode.GetPortFromName("Emitter1").fullname, 1
			end if

			iNumSurfaceEmitters = iNumSurfaceEmitters + 1
					  
		 	ConnectICENodes oSurfaceEmissionNode & ".emitter" & iNumSurfaceEmitters , oGetDataNode.GetPortFromName("value").fullname
		
		else
			' One emission node per null, and connect the null name
		    set oNullEmissionNode = AddICECompoundNode( "Emit from Null", oTerminalNode )			
		    AddPortToICENode oTerminalNode.inputports(0).fullname, 0
		    ConnectICENodes oTerminalNode.inputports(0).fullname, oNullEmissionNode.GetPortFromName("emit").fullname
		 	ConnectICENodes oNullEmissionNode & ".Null_Name", oGetDataNode.GetPortFromName("outname").fullname
		end if
	   	
	    i=i+1
    next
	
	' Insert an extra port in the terminal node.
    AddPortToICENode oTerminalNode.inputports(0).fullname, 1

	' Create and connect SimulateParticles
    set oSimulateNode = AddICENode( "SimulateParticlesNode", oTerminalNode)
    ConnectICENodes oTerminalNode.inputports(oTerminalNode.inputports.count-1).fullname, oSimulateNode.GetPortFromName("simulate").fullname
    
    set EmitPointsFromObjectProc = oPointCloud


end function