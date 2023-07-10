 Option Explicit

'==============================================================================
'==============================================================================
'
' Functions for Script Cells
'
'==============================================================================
'==============================================================================

'----------------------------------------------------------------------------------------
' GetObject
' Function that converts an object string into a scripting object (for the object model)
'----------------------------------------------------------------------------------------
Function GetObject (in_obj)
	GetObject = "Nothing"
	if IsEmpty(in_obj) Then
		exit function
	end if	

	dim l_coll

	set l_coll = CreateObject("XSI.Collection")
	l_coll.Add in_obj
	set GetObject = l_coll(0)  'l_x3dobj is then a X3DObject
End Function




'----------------------------------------------------------------------------------------
' GetLightType
' Converts the light type into a string (should eventually not necessary when the
' enumerated type is exported).
'----------------------------------------------------------------------------------------
Function GetLightType (in_obj)
	GetLightType = " "
	if IsEmpty(in_obj) Then
		exit function
	end if	
	
	Dim GetLightTypeValue

	GetLightTypeValue = GetValue (in_obj & ".Type")

	if GetLightTypeValue = 0.0 then
	 GetLightType = "Point"
	elseif GetLightTypeValue = 1.0 then
	 GetLightType = "Infinite"
	elseif GetLightTypeValue = 2.0 then
	 GetLightType = "Spot"
	else
	 GetLightType = "Unknow"
	end if

End Function

'----------------------------------------------------------------------------------------
' GetObjType
' Returns the type of the given object
'----------------------------------------------------------------------------------------
Function GetObjType (in_obj)
	Dim l_obj

	GetObjType = " "
	if IsEmpty(in_obj) Then
		exit function
	end if	

	set l_obj = GetObject( in_obj )
	GetObjType = l_obj.Type

End Function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function GetNbrTriangles( in_obj )
	GetNbrTriangles = 0
	Dim l_obj 
	set l_obj = GetObject( in_obj )
	if l_obj.type = "polymsh" Or l_obj.type = "surfmsh" Or l_obj.type = "crvlist" then
		GetNbrTriangles = GetNbTriangles( in_obj )
	end if
End Function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function GetNbPoints( in_obj )
	GetNbPoints = 0
	Dim l_obj, l_geom
	set l_obj = GetObject( in_obj )
	if l_obj.type = "polymsh" Or l_obj.type = "surfmsh" Or l_obj.type = "crvlist" then
		set l_geom = l_obj.obj
		GetNbPoints = l_geom.nb0D
	end if
End Function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function GetNbSegments( in_obj )
	GetNbSegments = 0
	Dim l_obj, l_geom
	set l_obj = GetObject( in_obj )
	if l_obj.type = "polymsh" then
		set l_geom = l_obj.obj
		GetNbSegments = l_geom.nb1D
	end if
End Function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function GetNbFacets( in_obj )
	GetNbFacets = 0
	Dim l_obj, l_geom
	set l_obj = GetObject( in_obj )
	if l_obj.type = "polymsh" Or l_obj.type = "surfmsh" then
		set l_geom = l_obj.obj
		GetNbFacets = l_geom.nb2D
	end if
End Function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function GetNbParticles( in_obj )
	Dim myType, l_obj, l_part

	GetNbParticles = 0
	myType = GetObjType( in_obj )
	if myType = "cloud" then
		set l_obj = GetObject( in_obj )
		set l_part = l_obj.particles
		GetNbParticles = l_part.count
	end if
End Function


'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function GetNbGrpMembers( in_grp )
	Dim l_grp, l_members

	GetNbGrpMembers = 0
	set l_grp = GetObject( in_grp )
	if typename(l_grp) = "Group" then
		set l_members = l_grp.members
		GetNbGrpMembers = l_members.count
	end if
End Function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function GetNbClsComponents( in_cls )
	Dim l_cls, l_elems

	GetNbClsComponents = 0
	set l_cls = GetObject( in_cls )
	if typename(l_cls) = "Cluster" then
		set l_elems = l_cls.elements
		GetNbClsComponents = l_elems.count
	end if
End Function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function GetObjFullName (in_obj)
	GetObjFullName = " "
	if IsEmpty(in_obj) Then
		exit function
	end if	

	dim l_coll, l_x3dobj

	set l_coll = CreateObject("XSI.Collection")
	l_coll.Add in_obj
	set l_x3dobj = l_coll(0)  'l_x3dobj is then a X3DObject
	GetObjFullName = l_x3dobj.FullName
End Function

'----------------------------------------------------------------------------------------
' GetCnsInputs
' Returns the list of inputs for a constraint
'----------------------------------------------------------------------------------------
Function GetCnsInputs (in_cns)
	Dim l_cns, l_Constraining

	GetCnsInputs = ""
	if IsEmpty(in_cns) Then
		exit function
	end if	

	set l_cns = GetObject( in_cns )
	for each l_Constraining in l_cns.Constraining
		if GetCnsInputs <> "" then
			GetCnsInputs = GetCnsInputs & ", "
		end if
		GetCnsInputs = GetCnsInputs & l_Constraining.Name
	next

End Function



'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function FCurvesGetnbKeys(in_obj)
	if IsEmpty(in_obj) Or TypeName(in_obj) = "Nothing" then
		FCurvesGetnbKeys = " "
		exit function
	end if	
	FCurvesGetnbKeys = ExtractFcurvInfo(in_obj, "nbKeys")
End Function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function FCurvesGetnokeyval(in_obj)
	if IsEmpty(in_obj) Or TypeName(in_obj) = "Nothing" then
		FCurvesGetnokeyval = " "
		exit function
	end if	
	FCurvesGetnokeyval = ExtractFcurvInfo(in_obj, "nokeyval")
End Function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function FCurvesGetcrvtype(in_obj)
	if IsEmpty(in_obj) Or TypeName(in_obj) = "Nothing" then
		FCurvesGetcrvtype = ""
		exit function
	end if	
	FCurvesGetcrvtype = ExtractFcurvInfo(in_obj, "crvtype")
End Function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function FCurvesGetextrap(in_obj)
	if IsEmpty(in_obj) Or TypeName(in_obj) = "Nothing" then
		FCurvesGetextrap = " "
		exit function
	end if	
	FCurvesGetextrap = ExtractFcurvInfo(in_obj, "extrap")
End Function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function FCurvesGetseq(in_obj)
	if IsEmpty(in_obj) Or TypeName(in_obj) = "Nothing" then
		FCurvesGetseq = " "
		exit function
	end if	
	FCurvesGetseq = ExtractFcurvInfo(in_obj, "seq")
End Function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function ExtractFcurvInfo(in_obj, param)
	dim source, fcurve, crvtype, nokeyval, nbKeys, extrap, seq, lowclamp, highclamp
	ExtractFcurvInfo = " "
	if IsEmpty(in_obj) Or TypeName(in_obj) = "Nothing" then
		exit function
	end if
	set source = GetSource( in_obj, siFCurveSource ) 
	GetFCurveInfo source(0), crvtype, nokeyval, nbKeys, extrap, seq, lowclamp, highclamp

	if param = "nbKeys" then
		ExtractFcurvInfo = nbKeys
		Exit Function
	elseif param = "nokeyval" then
		ExtractFcurvInfo = nokeyval
		Exit Function
	elseif param = "crvtype" then
		if crvtype = 0 then 
			ExtractFcurvInfo = "Unknown"
			Exit Function
		elseif crvtype = 10 then
			ExtractFcurvInfo = "Boolean"
			Exit Function
		elseif crvtype = 15 then
			ExtractFcurvInfo = "Integer"
			Exit Function
		elseif crvtype = 20 then
			ExtractFcurvInfo = "Standard"
			Exit Function
		elseif crvtype = 30 then
			ExtractFcurvInfo = "Raw Data"
			Exit Function
		end if
	elseif param = "extrap" then
		if extrap = 1 then 
			ExtractFcurvInfo = "Constant"
		elseif extrap = 2 then
			ExtractFcurvInfo = "Gradient"
		elseif extrap = 3 then
			ExtractFcurvInfo = "Cycle"
		elseif extrap = 4 then
			ExtractFcurvInfo = "Relative Cycle"
		end if
		Exit Function
	elseif param = "seq" then
		if seq= 0 then 
			ExtractFcurvInfo = "Default"
		elseif seq = 1 then
			ExtractFcurvInfo = "Constant"
		elseif seq = 2 then
			ExtractFcurvInfo = "Linear"
		elseif seq = 3 then
			ExtractFcurvInfo = "Spline"
		end if
		Exit Function
	end if
	
End Function




'==============================================================================
'==============================================================================
'
' Line Definition functions
'
'==============================================================================
'==============================================================================


'----------------------------------------------------------------------------------------
' Returns all of the selected elements
'----------------------------------------------------------------------------------------
Function Current_Selection ()
	Dim R()
	Dim SelList
	Set SelList = GetValue( "SelectionList" )
	if SelList.Count = 0 then
		Current_Selection = R
		Exit Function
	end if

	Set SelList = SelectChildNodes( SelList, False )
	Dim i
	ReDim R(SelList.Count - 1)
	for i = 0 to SelList.Count - 1
		R(i) = SelList(i)
	next
	Current_Selection = R
End Function

'----------------------------------------------------------------------------------------
' Returns all the scene objects
'----------------------------------------------------------------------------------------
Function All_SceneObject ()
	Dim R()
	Dim sceneObjectList
	set sceneObjectList =  SIFilter( "*", "sceneobject",,siQuickSearch)

	if sceneObjectList.Count = 0 then
		All_SceneObject = R
		Exit Function
	end if

	Dim i
	ReDim R(sceneObjectList.Count - 1)
	for i = 0 to sceneObjectList.Count - 1
		R(i) = sceneObjectList(i)
	next

	All_SceneObject = R
End Function

'----------------------------------------------------------------------------------------
' Returns all of the scene objects that have a geometry
'----------------------------------------------------------------------------------------
Function All_Geometry ()
	Dim R()
	Dim sceneObjectList
	set sceneObjectList =  SIFilter( "*", "geometry",,siQuickSearch)

	if typename(sceneObjectList) = "Nothing" then
		All_Geometry = R
		Exit Function
	end if

	if sceneObjectList.Count = 0 then
		All_Geometry = R
		Exit Function
	end if

	Dim i
	ReDim R(sceneObjectList.Count - 1)
	for i = 0 to sceneObjectList.Count - 1
		R(i) = sceneObjectList(i)
	next

	All_Geometry = R
End Function

'----------------------------------------------------------------------------------------
' Returns the selection, but filtered so we include only the objects that have a geometry
'----------------------------------------------------------------------------------------
Function Selected_Geometry ()
	' use on error resume next in case the selection is not geometry
	on error resume next

	Dim R(), SelList, GeoList

	Set SelList = GetValue( "SelectionList" )
	if SelList.Count = 0 then
		Selected_Geometry = R
		Exit Function
	end if

	Set SelList = SelectChildNodes( SelList, False )
	Set GeoList =  SIFilter( SelList, "geometry",,siQuickSearch)

	Dim i
	ReDim R(GeoList.Count - 1)
	for i = 0 to GeoList.Count - 1
		R(i) = GeoList(i)
	next
	Selected_Geometry = R
End Function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function All_Groups ()
	Dim R()
	Dim groupList

	set groupList = findobjects(,"{9D0673C2-6741-11D1-BE9F-00A024EE478D}")
	groupList.unique = true

	if (TypeName(groupList) = "Nothing") then
		All_Groups = R
		Exit Function
	end if

	Dim i
	ReDim R(groupList.Count - 1)
	for i = 0 to groupList.Count - 1
		R(i) = groupList(i)
	next

	All_Groups = R
End Function


'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function Current_Chain_Element_Selection ()
	Dim R()
	Dim SelList
	Set SelList = GetValue( "SelectionList" )
	Set SelList = SelectChildNodes( SelList, False )
	Set SelList = SIFilter( SelList, "chain_element",True ,siQuickSearch)

	if (TypeName (SelList) = "Nothing") then
		Current_Chain_Element_Selection = R
		Exit Function
	end if

	Dim i
	ReDim R(SelList.Count - 1)
	for i = 0 to SelList.Count - 1
		R(i) = SelList(i)
	next

	Current_Chain_Element_Selection = R
End Function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function Current_Light_Selection()
	Dim R()
	Dim SelList
	Set SelList = GetValue( "SelectionList" )
	Set SelList = SelectChildNodes( SelList, False )
	Set SelList = SIFilter( SelList, "light",True ,siQuickSearch)

	if (TypeName (SelList) = "Nothing") then
		Current_Light_Selection = R
		Exit Function
	end if


	Dim i
	ReDim R(SelList.Count - 1)
	for i = 0 to SelList.Count - 1
		R(i) = SelList(i)
	next
	Current_Light_Selection = R
End Function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function All_SceneLights ()
	Dim R()
	Dim SceneLightsList
	set SceneLightsList =  SIFilter( "*", "light",True,siQuickSearch)

	if SceneLightsList.Count = 0 then
		All_SceneLights = R
		Exit Function
	end if

	Dim i
	ReDim R(SceneLightsList.Count - 1)
	for i = 0 to SceneLightsList.Count - 1
		R(i) = SceneLightsList(i)
	next
	
	All_SceneLights = R
	
End Function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function All_ImageSources()
	Dim R()
	Dim ImageSrcList
	set ImageSrcList =  EnumElements("Project.Sources.Image")

	if IsEmpty(ImageSrcList) Or TypeName(ImageSrcList) = "Nothing" then
		All_ImageSources = R
		Exit Function
	end if

	Dim i
	ReDim R(ImageSrcList.Count - 1)
	for i = 0 to ImageSrcList.Count - 1
		R(i) = ImageSrcList(i)
	next

	All_ImageSources = R
End Function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function All_SceneHair ()

	Dim R()
	Dim oHairObjects , oScnObject , item

	set oHairObjects = CreateObject("XSI.Collection")
	Set oScnObject = SIFilter( "*", "sceneobject",True,siFullSearch)
	for each item in oScnObject 
		if (item.type = "hair") then
			oHairObjects.add(item)
		end if
	next

	if (oHairObjects.count = 0) then
		All_SceneHair = R
		Exit Function
	end if

	Dim i
	ReDim R(oHairObjects.Count - 1)
	for i = 0 to oHairObjects.Count - 1
		R(i) = oHairObjects(i)		
	next
	
	All_SceneHair = R
End Function	

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function All_SceneForces ()
'	On Error resume Next
	Dim R()
	Dim oForces , oScnObject , item, oPrim

	set oForces = CreateObject("XSI.Collection")
	Set oScnObject = SIFilter( "*", "sceneobject",True,siFullSearch)
	for each item in oScnObject 	
		on error resume next
		set oPrim = item.ActivePrimitive
			
		if ( err = 0 ) then 
			if oPrim.BelongsTo( "Forces" )  then		
				oForces.add(item)
			end if
		end if
		
	next

	if (oForces.count = 0) then
		All_SceneForces = R
		Exit Function
	end if

	Dim i
	ReDim R(oForces.Count - 1)
	for i = 0 to oForces.Count - 1
		R(i) = oForces(i)		
	next
	
	All_SceneForces = R
End Function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function All_SceneObstacle ()
	Dim R()
	Dim oObstacles , oScnObject , item, oObsOnObject, oObs

	set oObstacles = CreateObject("XSI.Collection")
	Set oScnObject = SIFilter( "*", "sceneobject",True,siFullSearch)
	for each item in oScnObject 

				
		set oObsOnObject = item.Properties.Filter( "ObstacleProp" )

		if typename( oObsOnObject ) <> "Nothing" then

			for each oObs in oObsOnObject

				oObstacles.add(oObs)
			next
		end if
	next

	if (oObstacles.count = 0) then
		All_SceneObstacle = R
		Exit Function
	end if

	Dim i
	ReDim R(oObstacles.Count - 1)
	for i = 0 to oObstacles.Count - 1
		R(i) = oObstacles(i)		
	next
	
	All_SceneObstacle = R
End Function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function All_ImageClips()
	dim MyClips, MyClipsFiltered, myArray, i, owner, R
	set MyClips = EnumElements("Project.Clips.Image")

	if IsEmpty(MyClips) Or TypeName(MyClips) = "Nothing" then
		All_ImageClips = R
		Exit Function
	end if

	set MyClipsFiltered = CreateObject("XSI.Collection")

	for each owner in MyClips
		if CStr(owner) <> "Clips.Scaling" then
			MyClipsFiltered.Add owner
		end if
	next
	
	if IsEmpty(MyClipsFiltered) Or TypeName(MyClipsFiltered) = "Nothing" then
		All_ImageClips = R
		Exit Function
	end if

	myArray = split(CStr(MyClipsFiltered),",")
	ReDim R(UBound(myArray))
	For i= 0 to Ubound(myArray)
			R(i) = myArray(i)
	Next

	All_ImageClips = R
End Function


'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function All_ObjectsWithAnnotation ()

	Dim R(),S(), l_pset, l_psetcoll, i, l_count, l_obj
	Dim sceneObjectList
	set sceneObjectList =  SIFilter( "*", "sceneobject",,siQuickSearch)

	' add scene root so we find annotations at the root level as well.
	sceneObjectList.Add ActiveSceneRoot

	if IsEmpty(sceneObjectList) Or TypeName(sceneObjectList) = "Nothing" then
		All_ObjectsWithAnnotation = R
		Exit Function
	end if

	ReDim R(sceneObjectList.Count - 1)
	l_count = 0


	for each l_obj in sceneObjectList

		set l_psetcoll = l_obj.Properties
		for each l_pset in l_psetcoll
			' as the annotation is a custom pset and can be renamed, we
			' can only check on some of the most probable names being used
			' such as 'annotation'
			if CheckPSet_ByTypeAndName( l_pset, "customparamset", "nnotation" ) then
				R( l_count ) = l_obj
				l_count = l_count + 1
			end if
		next

	next

	if l_count = 0 then
		All_ObjectsWithAnnotation = R
		Exit Function
	end if
	
	ReDim S(l_count-1)
	for i = 0 to l_count - 1
		S( i ) = R( i )
	next

	All_ObjectsWithAnnotation = S
End Function



'==============================================================================
'==============================================================================
'
' Parameters definition functions
'
'==============================================================================
'==============================================================================

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function ImageSource_Parameters()
	Dim R(8)
	R(0) = "Name:Default:Source Name"
	R(1) = "Filename:Default:Source Filename"
	R(2) = "FrameCaching:Default:Frame Caching"
	R(3) = "FrameRate:Default:Frame Rate"
	R(4) = "XRes:Default:Resolution X"
	R(5) = "YRes:Default:Resolution Y"
	R(6) = "NumberOfChannels:Default:Number of channels"
	R(7) = "BitsPerPixel:Default:Bits per pixel"
	ImageSource_Parameters = R
End Function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function ImageClip_Parameters()
	Dim R(19)
	R(0) = "Name:Default:Name"
	R(1) = "SourceName:Default:Source Name"
	R(2) = "Hue:Default:Hue"
	R(3) = "Saturation:Default:Saturation"
	R(4) = "Gain:Default:Gain"
	R(5) = "Brightness:Default:Brightness"
	R(6) = "Radius:Default:Radius"
	R(7) = "Amount:Default:Amount"
	R(8) = "Xmin:Default:Xmin"
	R(9) = "Xmax:Default:Xmax"
	R(10) = "Ymin:Default:Ymin"
	R(11) = "Ymax:Default:Ymax"
	R(12) = "Type:Default:Type"
	R(13) = "ResX:Default:ResX"
	R(14) = "ResY:Default:ResY"
	R(15) = "FlipX:Default:FlipX"
	R(16) = "FlipY:Default:FlipY"
	R(17) = "GrayScale:Default:GrayScale"
	R(18) = "SixteenBitsPerChannel:Default:16Bits"
	ImageClip_Parameters = R
End Function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function ParticleType_Parameters()
	Dim R(5)
	R(0) = "Name:Default:ParType Name"
	R(1) = "Life:Default:Max. Life"
	R(2) = "LiveForever:Default:Live Forever"
	R(3) = "Mass:Default:Mass"
	R(4) = "Size:Default:Size"
	ParticleType_Parameters = R
End Function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function Emitter_Parameters()
	Dim R(5)
	R(0) = "Name:Default:Emission Name"
	R(1) = "Mute:Default:Mute"
	R(2) = "Rate:Default:Rate"
	R(3) = "Spread:Default:Spread"
	R(4) = "Speed:Default:Speed"
	Emitter_Parameters = R
End Function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function Event_Parameters()
	Dim R(5)
	R(0) = "Name:Default:Event Name"
	R(1) = "Mute:Default:Mute"
	R(2) = "EventTrigger:Default:Trigger"
	R(3) = "TriggerValue:Default:Value"
	R(4) = "EventAction:Default:Action"
	Event_Parameters = R
End Function
'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function Hair_Parameters()
	Dim R(32)
	R(0) = "Name:Default:Hair Name"
	R(1) = "Hair.DisplayType:Default:Display Type"
	R(2) = "Hair.RenderPercentage:Default:Render hairs %"
	R(3) = "Hair.RenderType:Default:Render Type"
	R(4) = "Hair.TotalHairs:Default:TotalHairs"
	R(5) = "Hair.StrandMult:Default:Strand multiplier"
	R(6) = "Hair.SplayTip:Default:Splay at tip"
	R(7) = "Hair.SplayRoot:Default:Splay at root"
	R(8) = "Hair.Hair.Segments:Default:Hair segments"
	R(9) = "Hair.CollisionType:Default:Collision Type"
	R(10) = "Hair.Stiffness:Default:Stiffness"
	R(11) = "Hair.WiggleAmp:Default:Wiggle amplitude"
	R(12) = "Hair.WiggleSpeed:Default:Wiggle speed"
	R(13) = "Hair.FrizzRoot:Default:Frizz at root"
	R(14) = "Hair.FrizzTip:Default:Frizz at tip"
	R(15) = "Hair.LinkFrizzFreq:Default:Link XYZ axes"
	R(16) = "Hair.FrizzFreq:Default:X"
	R(17) = "Hair.FrizzFreqY:Default:Y"
	R(18) = "Hair.FrizzFreqZ:Default:Z"
	R(19) = "Hair.FrizzAnim:Default:Frizz anim"
	R(20) = "Hair.AnimSpeed:Default:Anim speed"
	R(21) = "Hair.FrizzAnimDirX:Default:X"
	R(22) = "Hair.FrizzAnimDirY:Default:Y"
	R(23) = "Hair.FrizzAnimDirZ:Default:Z"
	R(24) = "Hair.KinkRoot:Default:Kink at root"
	R(25) = "Hair.Kink:Default:Kink"
	R(26) = "Hair.LinkKinkFreq:Default:Link XYZ axes"
	R(27) = "Hair.KinkFreq:Default:X"
	R(28) = "Hair.KinkFreqY:Default:Y"
	R(29) = "Hair.KinkFreqZ:Default:Z"
	R(30) = "Hair.RandScale:Default:Random scale"
	R(31) = "Hair.Thickness:Default:Thickness"
	Hair_Parameters = R
End Function
'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function Obstacle_Parameters()
	Dim R(5)
	R(0) = "Name:Default:Obstacle Name"
	R(1) = "Mute:Default:Mute"
	R(2) = "ObstacleType:Default:Obstacle_Type"
	R(3) = "Friction:Default:Friction"
	R(4) = "Elasticity:Default:Elasticity"
	Obstacle_Parameters = R
End Function
'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function Force_Parameters()
	Dim R(1)
	R(0) = "ampl:Default:Amplitude"
	Force_Parameters = R
End Function
'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function ImageClipName()
	Dim R(1)	
	R(0) = "Name:Default:Name"
	ImageClipName = R
End Function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function KinePos ()
	Dim R(2)
	R(0) = "Kine.local.pos.posx"
	R(1) = "Kine.local.pos.posy"
	R(2) = "Kine.local.pos.posz"
	KinePos = R
End Function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function KineAll ()
	Dim R(8)
	R(0) = "Kine.local.posx"
	R(1) = "Kine.local.posy"
	R(2) = "Kine.local.posz"
	R(3) = "Kine.local.rotx"
	R(4) = "Kine.local.roty"
	R(5) = "Kine.local.rotz"
	R(6) = "Kine.local.sclx"
	R(7) = "Kine.local.scly"
	R(8) = "Kine.local.sclz"
	KineAll = R
End Function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function Object_Name ()
	Dim R(1)
	R(0) = "Name:Default:Name"
	Object_Name = R
End Function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function Light_General ()
	Dim R(28)
	R(0) = "Name"
	R(1) = "Type:Script:vbscript~spreadsheet.vbs~GetLightType"
	R(2) = "LightCone:Default:Cone Angle"
	R(3) = "LightExponent:Default:Exponent"
	R(4) = "DiffuseContribution:Default:Diffuse"
	R(5) = "SpecularContribution:Default:Specular"
	R(6) = "SelectiveInclusive:Default:Inclusive"
	R(7) = "ShadowMap:Default:Use Shadow Map"
	R(8) = "ShadowMapRes:Default:Resolution"
	R(9) = "ShadowMapSoft:Default:Softness"
	R(10) = "ShadowMapSamp:Default:Samples"
	R(11) = "LightArea:Default:LightArea"
	R(12) = "LightAreaGeom:Default:Area Type"
	R(13) = "LightAreaSampU:Default:Area Sample U"
	R(14) = "LightAreaSampV:Default:Area Sample V"
	R(15) = "LightAreaXformSX:Default:Area Scale X"
	R(16) = "LightAreaXformSY:Default:Area Scale Y"
	R(17) = "LightAreaXformSZ:Default:Area Scale Z"
	R(18) = "LightAreaXformRX:Default:Area Rotation X"
	R(19) = "LightAreaXformRY:Default:Area Rotation Y"
	R(20) = "LightAreaXformRZ:Default:Area Rotation Z"
	R(21) = "Caustics:Default:Caustics"
	R(22) = "GlobalIllum:Default:Global Illumination"
	R(23) = "LightEnergyR:Default:Photon R Energy"
	R(24) = "LightEnergyG:Default:Photon G Energy"
	R(25) = "LightEnergyB:Default:Photon B Energy"
	R(26) = "LightEnergyIntens:Default:Photons Intensity"
	R(27) = "CausticPhotonNum:Default:Caustics photons"
	R(28) = "GlobalPhotonsNum:Default:GI photons"
	Light_General = R
End Function


'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function Object_Display ()
	Dim R(11)
	'R(0) = "Full Name:Script:vbscript~spreadsheet.vbs~GetObjFullName"
	R(0) = "Name"
	R(1) = "Type:Script:vbscript~spreadsheet.vbs~GetObjType"
	R(2) = "geomapprox.gapproxvwustep:Default:Srf U Step"
	R(3) = "geomapprox.gapproxvwvstep:Default:Srf V Step"
	R(4) = "geomapprox.gapproxvwcustep:Default:Crv Step"
	R(5) = "geomapprox.gapproxmosl:Default:Subdiv"
	R(6) = "visibility.viewvis:Default:{D636F4D0-D94B-11D1-B0ED-00A024C79287}"
	R(7) = "visibility.rendvis:Default:{A9D242E0-D948-11D1-B0ED-00A024C79287}"
	R(8) = "visibility.selectability:Default:{4256027B-C691-11d2-B740-0008C7A011A6}"
	R(9) = "display.staticsel:Default:{39039061-DD77-11d3-9E9F-009027BC38DD}"
	R(10) = "display.staticunselnear:Default:{39039063-DD77-11d3-9E9F-009027BC38DD}"
	R(11) = "display.staticunselfar:Default:{39039065-DD77-11d3-9E9F-009027BC38DD}"
	Object_Display = R
End Function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function Object_Visibility ()
	Dim R(4)
	R(0) = "Name"
	R(1) = "Type:Script:vbscript~spreadsheet.vbs~GetObjType"
	R(2) = "visibility.viewvis:Default:{D636F4D0-D94B-11D1-B0ED-00A024C79287}"
	R(3) = "visibility.rendvis:Default:{A9D242E0-D948-11D1-B0ED-00A024C79287}"
	R(4) = "visibility.selectability:Default:{4256027B-C691-11d2-B740-0008C7A011A6}"
	Object_Visibility = R
End Function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function Object_Geometry ()
	Dim R(8)
	R(0) = "Name"
	R(1) = "Type:Script:vbscript~spreadsheet.vbs~GetObjType"
	R(2) = "Triangles:Script:vbscript~spreadsheet.vbs~GetNbrTriangles"
	R(3) = "Points:Script:vbscript~spreadsheet.vbs~GetNbPoints"
	R(4) = "Segments:Script:vbscript~spreadsheet.vbs~GetNbSegments"
	R(5) = "Facets:Script:vbscript~spreadsheet.vbs~GetNbFacets"
	R(6) = "Particles:Script:vbscript~spreadsheet.vbs~GetNbParticles"
	R(7) = "geomapprox.gapproxmosl:Default:Disp Subdiv"
	R(8) = "geomapprox.gapproxmordrsl:Default:Ren. Subdiv"
	Object_Geometry = R
End Function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function fMatSurfaceShader_params ()
	Dim R(37)
	R(0) = "material.name:Default:Material Name"
	R(1) = "material.surface.out.name:Default:SurfShader Name"
	R(2) = "material.surface.out.diffuse_inuse:Default:Enable Diffuse"
	R(3) = "material.surface.out.diffuse.red:Default:Diffuse Red"
	R(4) = "material.surface.out.diffuse.green:Default:Diffuse Green"
	R(5) = "material.surface.out.diffuse.blue:Default:Diffuse Blue"
	R(6) = "material.surface.out.ambient.red:Default:Ambient Red"
	R(7) = "material.surface.out.ambient.green:Default:Ambient Green"
	R(8) = "material.surface.out.ambient.blue:Default:Ambient Blue"
	R(9) = "material.surface.out.specular_inuse:Default:Enable Specular"
	R(10) = "material.surface.out.specular.red:Default:Specular Red"
	R(11)= "material.surface.out.specular.green:Default:Specular Green"
	R(12)= "material.surface.out.specular.blue:Default:Specular Blue"
	R(13)= "material.surface.out.shiny:Default:Specular Decay"
	R(14)= "material.surface.out.refract_inuse:Default:Enable Transparency"
	R(15)= "material.surface.out.transparency.red:Default:Transparency Red"
	R(16)= "material.surface.out.transparency.green:Default:Transparency Green"
	R(17)= "material.surface.out.transparency.blue:Default:Transparency Blue"
	R(18)= "material.surface.out.trans_glossy:Default:Transparent Glossy"
	R(19)= "material.surface.out.transparent_samples:Default:Transparent Samples"
	R(20)= "material.surface.out.index_of_refraction:Default:Index Of Refraction"
	R(21)= "material.surface.out.reflect_inuse:Default:Enable Reflection"
	R(22)= "material.surface.out.reflectivity.red:Default:Reflectivity Red"
	R(23)= "material.surface.out.reflectivity.green:Default:Reflectivity Green"
	R(24)= "material.surface.out.reflectivity.blue:Default:Reflectivity Blue"
	R(25)= "material.surface.out.reflect_glossy:Default:Reflect Glossy"
	R(26)= "material.surface.out.reflect_samples:Default:Reflect Samples"
	R(27)= "material.surface.out.notrace:Default:Reflection Mode"
	R(28)= "material.surface.out.translucent_inuse:Default:Enable translucent"
	R(29)= "material.surface.out.translucency:Default:Translucency"
	R(30)= "material.surface.out.incand_inuse:Default:Enable incandesence"
	R(31)= "material.surface.out.incandescence.red:Default:Incandescence Red"
	R(32)= "material.surface.out.incandescence.green:Default:Incandescence Green"
	R(33)= "material.surface.out.incandescence.blue:Default:Incandescence Blue"
	R(34)= "material.surface.out.inc_inten:Default:Incandescence Intensity"
	R(35)= "material.surface.out.radiance.red:Default:Radiance Red"
	R(36)= "material.surface.out.radiance.green:Default:Radiance Green"
	R(37)= "material.surface.out.radiance.blue:Default:Radiance Blue"
	fMatSurfaceShader_params = R
End Function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function Object_Transformations ()
	Dim R(17)
	R(0) = "kine.local.posx:Default:Local posx"
	R(1) = "kine.local.posy:Default:Local posy"
	R(2) = "kine.local.posz:Default:Local posz"
	R(3) = "kine.local.rotx:Default:Local rotx"
	R(4) = "kine.local.roty:Default:Local roty"
	R(5) = "kine.local.rotz:Default:Local rotz"
	R(6) = "kine.local.sclx:Default:Local sclx"
	R(7) = "kine.local.scly:Default:Local scly"
	R(8) = "kine.local.sclz:Default:Local sclz"
	R(9) = "kine.global.posx:Default:Global posx"
	R(10) = "kine.global.posy:Default:Global posy"
	R(11) = "kine.global.posz:Default:Global posz"
	R(12) = "kine.global.rotx:Default:Global rotx"
	R(13) = "kine.global.roty:Default:Global roty"
	R(14) = "kine.global.rotz:Default:Global rotz"
	R(15) = "kine.global.sclx:Default:Global sclx"
	R(16) = "kine.global.scly:Default:Global scly"
	R(17) = "kine.global.sclz:Default:Global sclz"
	Object_Transformations = R
End Function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function Object_Visibility
	Dim R(2)
	R(0) = "visibility.viewvis:Default:{D636F4D0-D94B-11D1-B0ED-00A024C79287}"
	R(1) = "visibility.rendvis:Default:{A9D242E0-D948-11D1-B0ED-00A024C79287}"
	R(2) = "visibility.selectability:Default:{4256027B-C691-11d2-B740-0008C7A011A6}"
	Object_Visibility = R
End Function

'----------------------------------------------------------------------------------------
' ShaderPort_Params
' this function assumes we have a path to the material already (see Object_SurfaceShader) 
' for a way to get to the material
' ShaderPort_Params is really glued to ShaderPorts for relation definition
'----------------------------------------------------------------------------------------
Function ShaderPort_Params()
	Dim R(0)
	R(0) = "out.name:Default:Shader Name"
	ShaderPort_Params = R
End Function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function Object_Annotations ()
	Dim R(4)
	R(0) = "Name:Default:Name"
	R(1) = "Annotation.text:Default:Comments"
	R(2) = "Annotation.keyword:Default:Keyword"
	R(3) = "Annotation.flag1:Default:Flag 1"
	R(4) = "Annotation.flag2:Default:Flag 2"
	Object_Annotations = R
End Function


'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function Chain_Element ()
	Dim R(14)
	R(0) = "Name"
	R(1) = "Type:Script:vbscript~spreadsheet.vbs~GetObjType"
	R(2) = "chain.solver:Default:{05750D63-08CE-11d3-8450-00A0C961747D}"
	R(3) = "chain.solverangles:Default:{B0C63EE1-3B23-11d3-A4CE-00A024191BAC}"
	R(4) = "chain.blendik:Default:Blend IK/FK"
	R(5) = "chain.forceik:Default:Force IK"
	R(6) = "joint.chntype:Default:{15D2A361-2510-11d3-A4C7-00A024191BAC}"
	R(7) = "joint.pseudoroot_active:Default:Pseudo Root"
	R(8) = "joint.stiffness_active:Default:Use Stiffness"
	R(9) = "joint.stiffness:Default:Stiffness"
	R(10) = "joint.prefrotx:Default:Pref Rot X"
	R(11) = "joint.prefroty:Default:Pref Rot Y"
	R(12) = "joint.prefrotz:Default:Pref Rot Z"
	R(13) = "visibility.viewvis:Default:{D636F4D0-D94B-11D1-B0ED-00A024C79287}"
	R(14) = "visibility.selectability:Default:{4256027B-C691-11d2-B740-0008C7A011A6}"
	Chain_Element = R
End Function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function Group_Info ()
	Dim R(1)
	R(0) = "Name"
	R(1) = "Members:Script:vbscript~spreadsheet.vbs~GetNbGrpMembers"

	Group_Info = R
End Function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function Cluster_Info ()
	Dim R(2)
	R(0) = "Name"
	R(1) = "Type:Script:vbscript~spreadsheet.vbs~GetObjType"
	R(2) = "Components:Script:vbscript~spreadsheet.vbs~GetNbClsComponents"

	Cluster_Info = R
End Function


'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function fExpressions_params()
	Dim R(1)
	R(0) = "Active"
	R(1) = "Expression:Script:vbscript~spreadsheet.vbs~fExpressions_string"
	fExpressions_params = R
End Function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function fExpressions_string( in_obj )
	dim expr, string, item
	fExpressions_string = " "
	set expr = getsource( in_obj )(0)
	for each item in enumelements( expr )
		if item.name = "Definition" then
			string = item.value
		end if
	next
	fExpressions_string = string
End Function


'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function fConstraints_params()
	Dim R(4)
	R(0) = "Type:Script:vbscript~spreadsheet.vbs~GetObjType"
	R(1) = "Active"
	R(2) = "Blendweight"
	R(3) = "UpVct_Active"
	R(4) = "Input(s):Script:vbscript~spreadsheet.vbs~GetCnsInputs"
	fConstraints_params = R
End Function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function fFcurves_params()
	Dim R(4)
	R(0) = "Number of keys:Script:vbscript~spreadsheet.vbs~FCurvesGetnbKeys"
	R(1) = "Value when no key:Script:vbscript~spreadsheet.vbs~FCurvesGetnokeyval"
	R(2) = "Curve type:Script:vbscript~spreadsheet.vbs~FCurvesGetcrvtype"
	R(3) = "Extrapolation:Script:vbscript~spreadsheet.vbs~FCurvesGetextrap"
	R(4) = "Sequence Type:Script:vbscript~spreadsheet.vbs~FCurvesGetseq"
	fFcurves_params = R
End Function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function ClipsUsers_Params()
	Dim R(0)
	R(0) = "name:Default:name"
	ClipsUsers_Params = R
End Function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function ShaderPorts( in_obj )
	Dim l_ports(7)

	dim strObj
	strObj = in_obj
	strObj = strObj + ".material"

	l_ports(0) = strObj + ".surface"
	l_ports(1) = strObj + ".volume"
	l_ports(2) = strObj + ".environement"
	l_ports(3) = strObj + ".contour"
	l_ports(4) = strObj + ".displacement"
	l_ports(5) = strObj + ".shadow"
	l_ports(6) = strObj + ".photon"
	l_ports(7) = strObj + ".photonvolume"

	ShaderPorts = l_ports
End Function


'==============================================================================
'==============================================================================
'
' Relation Object Definition script
'
'==============================================================================
'==============================================================================

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function GroupMembers( in_grp )
	Dim l_grp, i, l_members

	Dim l_mArray()
	set l_grp = GetObject( in_grp )
	if typename(l_grp) = "Group" then
		set l_members = l_grp.members

		ReDim l_mArray( l_members.count - 1 )
		for i = 0 to l_members.count - 1
			l_mArray(i) = l_members.Item(i)
		next
	end if
	 

	GroupMembers = l_mArray
end function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function ObjectClusters( in_obj )
	Dim l_obj, i, l_geom, l_clusters, l_cluster

	set l_obj = GetObject( in_obj )

	Dim l_cArray()	
	if typename(l_obj) = "X3DObject" and not (l_obj.type = "Texture Support") then

		set l_geom = l_obj.activeprimitive.geometry
		set l_clusters = l_geom.clusters

		if ( l_clusters.count > 0 ) then
			ReDim l_cArray( l_clusters.count - 1 )
			for i = 0 to l_clusters.count - 1
				l_cArray(i) = l_clusters.Item(i)
			next
		else
			ReDim l_cArray(0)
		end if
	else
		ReDim l_cArray(0)
	end if
	 
	ObjectClusters = l_cArray
end function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function CloudParTypes( in_obj )
	Dim oCloud, i, oCloudPrim, oParTypes, oParType, objType
	
	set oCloud = GetObject( in_obj )

	Dim l_cArray()	
	if typename(oCloud) = "ParticleCloud" then

		set oCloudPrim = oCloud.activeprimitive
		set oParTypes = EnumElements( oCloudPrim & ".ParTypes" )

		if ( oParTypes.count > 0 ) then
			ReDim l_cArray( oParTypes.count - 1 )
			for i = 0 to oParTypes.count - 1
				l_cArray(i) = oParTypes.Item(i)
			next
		else
			ReDim l_cArray(0)
		end if
	else
		ReDim l_cArray(0)
	end if
	 
	CloudParTypes = l_cArray
end function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function CloudEmitters( in_obj )
	Dim oCloud, i, oCloudPrim, oEmitters, oEmitter, oSimOp, oEmitterObj, oInputPorts, oEmitterColl, oInPort, objType
	
	set oCloud = GetObject( in_obj )

	set oEmitterColl = CreateObject("XSI.Collection")
	oEmitterColl.Unique = True

	if typename(oCloud) = "ParticleCloud" then

		set oCloudPrim = oCloud.activeprimitive

		for each oSimOp in  oCloudPrim.constructionhistory
			if oSimOp.type = "ParticlesOp" or oSimOp.type = "ExplosionOp" or oSimOp.type = "FluidOp"  then
				set oInputPorts = oSimOp.inputports
				for each oInPort in oInputPorts 
					if oInPort.isconnected then
						if oInPort.target2.type = "EmissionProp" then
							oEmitterColl.Add oInPort.target2
						end if
					end if
				next
			end if 		
		next	
	end if


	Dim l_cArray()
	redim l_cArray( oEmitterColl.count )
		
	for i = 0 to oEmitterColl.count - 1
		l_cArray(i)  = oEmitterColl.Item(i)
	next

	CloudEmitters = l_cArray
end function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function CloudEvents( in_obj )
	Dim oCloud, i, oCloudPrim, oEvents, oEvent, oSimOp, oInputPorts, oEventColl, oInPort, objType
	
	set oCloud = GetObject( in_obj )

	set oEventColl = CreateObject("XSI.Collection")
	oEventColl.Unique = True

	if typename(oCloud) = "ParticleCloud" then

		set oCloudPrim = oCloud.activeprimitive

		for each oSimOp in  oCloudPrim.constructionhistory
			if oSimOp.type = "ParticlesOp" then
				set oInputPorts = oSimOp.inputports
				for each oInPort in oInputPorts 
					if oInPort.isconnected then
						if oInPort.target2.type = "ParticleEvent" then
						oEventColl.Add oInPort.target2
						end if
					end if
				next		
			end if
		next	
	end if


	Dim l_cArray()
	redim l_cArray( oEventColl.count )
		
	for i = 0 to oEventColl.count - 1
		l_cArray(i)  = oEventColl.Item(i)
	next

	CloudEvents = l_cArray
end function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function IsSupportedObjectType( in_obj )
	dim objType

	objType = in_obj.type
	

	IsSupportedObjectType = ( _
		(objType = "mesh") or (objType = "surfmesh") or (objType = "hair"))
end function




Function HairObjects( in_obj )
	Dim oHair, oObj, i, oHairPrim, oHairs, oSimOp, oHairObj, oInputPorts, oHairColl, oInPort, objType

	set oObj = GetObject( in_obj )
	
	if oObj.Type="hair" then
		set oHair=oObj 
	elseif (oObj.Type = "polymsh") or (oObj.Type = "surfmsh") then
	
		set oHair=oObj.Children("hair")
	end if		

	set oHairColl = CreateObject("XSI.Collection")
	oHairColl.Unique = True

	if typename(oHair) = "X3DObject" then
		if oHair.type = "hair" then
			set oHairPrim = oHair.activeprimitive
			oHairColl.Add oHair
		end if
	end if

	Dim l_cArray()
	redim l_cArray( oHairColl.count )
		
	for i = 0 to oHairColl.count - 1
		l_cArray(i)  = oHairColl.Item(i)
	next

	HairObjects = l_cArray
end function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function Obstacles( in_obj )
	Dim oObj, i, oCloud, oCloudPrim, oPrim, oHair, oHairPrim, oCloth, oSoftBody, oObstacles, oObstacle, oSimOp, oObstacleObj, oInputPorts, oObstacleColl, oInPort, objType
		
	set oObj = GetObject( in_obj )

	set oObstacleColl = CreateObject("XSI.Collection")
	oObstacleColl.Unique = True

	objType = oObj.type
	
      if (objType = "cloud") or (objType = "hair") or (objType = "polymsh") or (objType = "surfmsh") then
            set oPrim = oObj.activeprimitive
				
		for each oSimOp in  oPrim.constructionhistory
			
			if oSimOp.type = "ParticlesOp" or oSimOp.type = "ExplosionOp" or oSimOp.type = "FluidOp" or oSimOp.type = "hairGenOp" or oSimOp.type = "hairDynamicsOp" or oSimOp.type = "SplineDynamicsOp" or oSimOp.type = "SoftBodyOp" or oSimOp.type = "ClothOp" then
				set oInputPorts = oSimOp.inputports
				
				for each oInPort in oInputPorts 
					if oInPort.isconnected then	
						if oInPort.target2.type = "ObstacleProp" then
						oObstacleColl.Add oInPort.target2
						end if
					end if

				next
			end if		
		next	
	end if

	Dim l_cArray()
	redim l_cArray( oObstacleColl.count )
		
	for i = 0 to oObstacleColl.count - 1
		l_cArray(i)  = oObstacleColl.Item(i)
	next

	Obstacles = l_cArray
end function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------

Function IsForceInfluencedOp( in_obj )
		       
	if in_obj.type = "ParticlesOp" or _ 
		 in_obj.type = "FluidOp" or _
		 in_obj.type = "ExplosionOp" or _
		 in_obj.type = "hairGenOp" or _
		 in_obj.type = "hairDynamicsOp" or _ 
		 in_obj.type = "splineDynamicsOp" or _ 
		 in_obj.type = "SoftBodyOp" or _ 
		 in_obj.type = "ClothOp"  then
		IsForceInfluencedOp	= true
	else
		IsForceInfluencedOp = false
	end if
end function


Function IsSupportedObjectType( in_obj )
	dim objType

	objType = in_obj.type
	
	IsSupportedObjectType = ( _
		(objType = "cloud") or (objType = "hair") or _
		(objType = "polymsh") or (objType = "surfmsh") )
end function



Function Forces( in_obj )
	Dim oObj, i, oPrim, oCloudPrim, oCloud, oHair 
	Dim oHairPrim, oCloth, oSoftBody, oForces, oForce
	Dim oSimOp, oForceObj, oInputPorts, oForceColl, oInPort

	set oForceColl = CreateObject("XSI.Collection")
	oForceColl.Unique = True

	set oObj = GetObject( in_obj )

	if IsSupportedObjectType( oObj ) then

		set oPrim = oObj.activeprimitive

		for each oSimOp in  oPrim.constructionhistory
		
		  if IsForceInfluencedOp( oSimOp ) then

			set oInputPorts = oSimOp.inputports
			  for each oInPort in oInputPorts	
		   		if oInPort.isconnected then												
				
					dim bIsForce 
					bIsForce = false
									
					on error resume next					
					bIsForce = oInPort.Target2.BelongsTo("Forces") 
					on error goto 0						
					
					if ( bIsForce ) then					
						oForceColl.Add oInPort.target2
					end if						
				end if
			next
		end if           
		next   
	end if

	Dim l_cArray()
	redim l_cArray( oForceColl.count )
           
	for i = 0 to oForceColl.count - 1
	  l_cArray(i)  = oForceColl.Item(i)
	next

	Forces = l_cArray
end function

'----------------------------------------------------------------------------------------
' Creator: Rejean Gagne
' fConstraints(in_obj)
' List all the constraints applied to the object, if any
'----------------------------------------------------------------------------------------
Function fConstraints(in_obj)
	Dim MyObj, MyConstraints, fItem, pArray, icount
	fConstraints = " "
	if IsEmpty(in_obj) Or TypeName(in_obj) = "Nothing" then
		exit function
	end if	
	set MyObj = getvalue(in_obj) 
	set MyConstraints = MyObj.Kinematics.Constraints
	if MyConstraints.count = 0 then
		exit function
	end if
	redim pArray(MyConstraints.count - 1)
	icount = 0
	For Each fItem in MyConstraints
		pArray(icount) = CStr(fItem)
		icount = icount + 1
	Next 
	fConstraints = pArray
End Function


'----------------------------------------------------------------------------------------
' Creator: Dave Lajoie
' fExpressions(in_obj)
' List all the parameters driven by expressions
'----------------------------------------------------------------------------------------
Function fExpressions(in_obj)
	Dim MyObj, MyAnimatedParameters, fItem, pArray, icount
	fExpressions = " "
	if IsEmpty(in_obj) Or TypeName(in_obj) = "Nothing" then
		exit function
	end if	
	set MyObj = getvalue(in_obj) 
	set MyAnimatedParameters = MyObj.AnimatedParameters( siExpressionSource )
	if MyAnimatedParameters.count = 0 then
		exit function
	end if
	redim pArray(MyAnimatedParameters.count - 1)
	icount = 0
	For Each fItem in MyAnimatedParameters
		pArray(icount) = CStr(fItem)
		icount = icount + 1
	Next 
	fExpressions = pArray
End Function

'----------------------------------------------------------------------------------------
' Creator: Dave Lajoie
' fFcurves(in_obj)
' List all the parameters driven by fcruves
'----------------------------------------------------------------------------------------
Function fFcurves(in_obj)
	Dim MyObj, MyAnimatedParameters, fItem, pArray, icount
	fFcurves = " "
	if IsEmpty(in_obj) Or TypeName(in_obj) = "Nothing" then
		exit function
	end if	
	set MyObj = getvalue(in_obj) 
	set MyAnimatedParameters = MyObj.AnimatedParameters( siFCurveSource )
	if MyAnimatedParameters.count = 0 then
		exit function
	end if
	redim pArray(MyAnimatedParameters.count - 1)
	icount = 0
	For Each fItem in MyAnimatedParameters
		pArray(icount) = CStr(fItem)
		icount = icount + 1
	Next 
	fFcurves = pArray
End Function

'----------------------------------------------------------------------------------------
' Creator: Rejean Gagne
'
' If the object has a geometry, returns a list that contains the object itself
' plus all of the polygon clusters (if any).
'----------------------------------------------------------------------------------------
Function fObjectAndPolyClusters( in_obj )

	Dim R(), l_count, l_obj, l_size, oGeometry, oClusters, oCluster
 
'logmessage " fObjectAndPolyClusters " & in_obj
	fObjectAndPolyClusters = " "
	if IsEmpty(in_obj) Or TypeName(in_obj) = "Nothing" then
		exit function
	end if	

	set l_obj = getvalue(in_obj) 
	set oGeometry = l_obj.activeprimitive.geometry

	' make sure we have an object with a geometry
	if ( typename(oGeometry) = "Nothing" ) then
		exit function
	end if

	' Now count the number of poly clusters we will have to return
	' start count to 1 because we will include the object itself
	' in the list
	l_count = 1
	set oClusters = oGeometry.Clusters
	for each oCluster in oClusters
		if ( oCluster.Type = "poly" ) then
			l_count = l_count + 1
		end if
	next

	' Dimension the array properly
'logmessage " count " & l_count
	l_size = CInt(l_count-1)
	ReDim R(l_size)

	' Now reset the index and add the items to the array
	l_count = 0

	' start by adding the object
	R( l_count ) = l_obj
	l_count = l_count + 1
			
	set oClusters = oGeometry.Clusters
	for each oCluster in oClusters
		if ( oCluster.Type = "poly" ) then

'logmessage " adding " & oCluster.name
			R( l_count ) = oCluster
			l_count = l_count + 1
		end if
	next

	fObjectAndPolyClusters = R
End Function

Function All_Materials ()
	Dim R()
	Dim sceneObjectList
	set sceneObjectList =  SIFilter( "*", "geometry",,siQuickSearch)

	if typename(sceneObjectList) = "Nothing" then
		All_Materials = R
		Exit Function
	end if

	if sceneObjectList.Count = 0 then
		All_Materials = R
		Exit Function
	end if

	Dim ObjectWithMaterialsList
	set ObjectWithMaterialsList = CreateObject("XSI.Collection")

	Dim i
	Dim oGeometry
	Dim oClusters
	Dim cluster
	for i = 0 to sceneObjectList.Count - 1
		ObjectWithMaterialsList.Add sceneObjectList(i)
		set oGeometry = sceneObjectList(i).activeprimitive.geometry
		if ( typename(oGeometry) <> "Nothing" ) then
			set oClusters = oGeometry.Clusters
			for each cluster in oClusters
				if ( cluster.Type = "poly" ) then
					ObjectWithMaterialsList.Add cluster
				end if
			next
		end if
	next

	ReDim R(ObjectWithMaterialsList.Count)
	i = 0
	Dim o
	for each o in ObjectWithMaterialsList
		R(i) = o
		i = i + 1
	next

	All_Materials = R
End Function


'----------------------------------------------------------------------------------------
' Creator: Dave Lajoie
' ObjectToClips(in_obj)
' 	This function will enumerate the all the elements that use the clip.
' 	if the path contains ".Material", then we remove the path up to
'	".Material" so we can list only the object, if there is not ".Material"
'	then we leave the path as is.
'----------------------------------------------------------------------------------------
Function ObjectToClips(in_obj)
	dim ClipsOwnersOrg, ClipsOwnersFiltered, tempCollection
	dim owner
	dim trim, i, myArray, tmpString

	set ClipsOwnersOrg = EnumElements(in_obj, FALSE)
	set ClipsOwnersFiltered = CreateObject("XSI.Collection")
	set tempCollection = CreateObject("XSI.Collection")
	for each owner in ClipsOwnersOrg
		if CStr(owner) <> "Clips.Image" then 					'Remove Clips.Image
			tmpString = owner
			if InStr(1,tmpString,".Material",vbTextCompare) <> 0 then	'contains .Material?
				trim = InStr(1,tmpString,".Material",vbTextCompare)	'find where is .material located in string
				tmpString = left(tmpString, trim+8)				'removing .material to the end
				trim = InstrRev(tmpString,".", -1, 0)			'removing the last item ".*" in path
				tmpString= left(tmpString, trim-1)
			end if
			ClipsOwnersFiltered.Add tmpString					'copy result in new collection
		end if
	next
	
	myArray = split(CStr(ClipsOwnersFiltered),",")					'convert collection to array
	ObjectToClips = myArray									'done!
End Function

'----------------------------------------------------------------------------------------
' Creator: Dave Lajoie
' ShadersToClips(in_obj)
' 	This function will enumerate the all the elements that use the clip.
'----------------------------------------------------------------------------------------
Function ListLightAssociation(in_obj)
	Dim ObjList
	set ObjList =  EnumElements(in_obj & ".Associated Models.Members")
	if TypeName(ObjList) = "Nothing" then
		ListLightAssociation = " "
		exit function
	end if 
	ListLightAssociation = split(CStr(ObjList),",")	'cover collection to array
End Function

'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function ShadersToClips(in_obj)
	dim trim, i, myArray, ClipsOwnersOrg, ClipsOwnersFiltered, owner
	set ClipsOwnersOrg = EnumElements(in_obj, FALSE)
	set ClipsOwnersFiltered = CreateObject("XSI.Collection")
	for each owner in ClipsOwnersOrg
		if CStr(owner) <> "Clips.Image" then	'remove Clips.Image
			ClipsOwnersFiltered.Add owner
		end if
	next
	
	myArray = split(CStr(ClipsOwnersFiltered),",")	'convert collection to array
	For i= 0 to Ubound(myArray)
		trim = InstrRev(myArray(i),".", -1, 0)	'removing the last item ".*" in path
		myArray(i)= left(myArray(i), trim-1)
	Next
	ShadersToClips = myArray
End Function




'----------------------------------------------------------------------------------------
'----------------------------------------------------------------------------------------
Function Children( in_obj )
	Dim l_ChildrenNodes

	Children = ""

	if IsEmpty(in_obj) Then
		exit function
	end if

	dim l_obj
	set l_obj = GetValue(in_obj)
	 
	set l_ChildrenNodes = EnumElements( l_obj & ".Children" )
	
	if IsEmpty(l_ChildrenNodes) Or TypeName(l_ChildrenNodes) = "Nothing" Then
		exit function
	end if

	Children = l_ChildrenNodes
end function

Function CheckPSet_ByTypeAndName( in_pset, in_type, in_name )

	if Not in_pset.type = in_type then
		CheckPSet_ByTypeAndName = false
		exit Function
	end if

	'logmessage "CheckPSet_ByTypeAndName " & in_pset.name & " vs " & in_name
	CheckPSet_ByTypeAndName = InStr( in_pset.name, in_name ) > 0
end function


'==============================================================================
'==============================================================================
'
' Misc. tests
'
'==============================================================================
'==============================================================================

Function KineWithChildren ()
	Dim l_col(5)
	l_col(0) = "NbrTriangles:Script:vbscript~spreadsheet.vbs~GetNbrTriangles"
	l_col(1) = "Kine.local.pos.posx"
	l_col(2) = "Kine.local.pos.posy"
	l_col(3) = "Kine.local.pos.posz"
	l_col(4) = "Comments:Text"
	l_col(5) = "Children:Relation"
	KineWithChildren = l_col
End Function

Function GetTexture ( in_obj )
	'FGetDefaultTexturePorts

	GetTexture = in_obj
End Function

Function ColUndefined ()
	Dim R(1)
	R(0) = "UndefinedText:Text"
	R(1) = "Testing:Relation"
	ColUndefined = R
End Function

Function ColExternal ()
	Dim R(1)
	R(0) = "ExternalText:Text"
	R(1) = "Test2:Relation:[<vbscript~spreadsheet.vbs~KinePos>]"
	ColExternal = R
End Function

Function RelObj ( inObj )
	RelObj = inObj
End Function