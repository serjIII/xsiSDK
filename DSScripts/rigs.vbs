
'===================================================
' Spine Maker 3
' By misner Nov 2001
'===================================================

'******************************************************************************
' String Constants (used to translate)
'******************************************************************************
const IDS_RIGS_PICK_HIP_OBJECT_MSG_LM			= 1127
const IDS_RIGS_PICK_CHEST_OBJECT_MSG_LM			= 1128

'--------------------------------------
' Spine Maker
'--------------------------------------
function CreateSpineFunc( byref hip, byref chest, byref nbVertebra, byref implicitVertebra, byref interactive  )
	
	dim valid
	dim guideCurve, spineCurve, chestDepth, hipDepth, dist
	dim topVertebra, refCnst, scaleSlider, sliders, l_binspectprev
	
	if ( interactive ) then
		pick_elements hip, chest, valid
		if valid = False then exit function
		
		get_dial nbVertebra, implicitVertebra, valid
		if valid = False then exit function
		
	end if

	' Set temporarily the autoinspect to off
	l_binspectprev = SetUserPref( siAutoInspect, False )

	' save preferences
	dim l_bCnsCompPrev : l_bCnsCompPrev = SetUserPref("SI3D_CONSTRAINT_COMPENSATION_MODE", 0)
	
	draw_curve chest, hip, spineCurve, chestDepth, hipDepth, dist	
	bind_curve spineCurve, hip, hipDepth, chestDepth, chest, sliders, scaleSlider
	Create_top_vertebra spineCurve, dist, nbVertebra, scaleSlider, topVertebra, refCnst	
	make_vertebra spineCurve, hip, chest, dist, nbVertebra, topVertebra, refCnst, implicitVertebra

	' restore preferences
	SetUserPref "SI3D_CONSTRAINT_COMPENSATION_MODE", l_bCnsCompPrev
		
	set CreateSpineFunc = sliders

	' Set the autoinspect back
	SetUserPref siAutoInspect, l_binspectprev
		
	if ( interactive ) then
		InspectObj sliders
	end if
	
	' set interactive false so that picking session is not replay when 
	' logged script is rerun
	interactive = False

end function

'--------------------------------------
' Get Elements
'--------------------------------------
function pick_elements ( byref out_hip, byref out_chest, byref out_valid)	
	
	dim button
	
	out_valid = False

	PickElement , XSIUtils.Translate( IDS_RIGS_PICK_HIP_OBJECT_MSG_LM, "XSISCRIPTS" ), XSIUtils.Translate( IDS_RIGS_PICK_HIP_OBJECT_MSG_LM, "XSISCRIPTS" ), out_hip, button 
	if button = 0 then exit function 

	PickElement , XSIUtils.Translate( IDS_RIGS_PICK_CHEST_OBJECT_MSG_LM, "XSISCRIPTS" ), XSIUtils.Translate( IDS_RIGS_PICK_CHEST_OBJECT_MSG_LM, "XSISCRIPTS" ), out_chest, button 
	if button = 0 then exit function 
	
	out_valid = True
	
end function	
'--------------------------------------
' Get Dialogue
'--------------------------------------
function get_Dial(byref out_nbVertebra, byref out_implicitVertebra, byref out_valid)
	
	dim SceneRoot, CPList 
	
	out_valid = False

	Set SceneRoot =  Application.ActiveProject.ActiveScene.Root
	Set oPset = SIAddProp("Custom_parameter_list", SceneRoot,, "Spine_Maker Keys").value("Value")
	
	SIAddCustomParameter oPset, "NumberOfVertebra", siInt4, _
		3, 1, 100, , siPersistable+siSilent, 1, 20, "Number of Vertebra", "Number of Vertebra"

	SIAddCustomParameter oPset, "ImplicitVertebra", siBool, _
		0, 0, 1, , siPersistable+siSilent, 0, 1, "Implicit Vertebra", "Implicit Vertebra"
		
	On Error Resume Next
	inspectobj oPset,,,siModal
	
	if Err.Number <> 0 then
		DeleteObj oPset
		exit function
	end if
	
	out_nbVertebra = GetValue( oPset & ".NumberOfVertebra" )
	out_implicitVertebra = GetValue( oPset & ".ImplicitVertebra" )

	DeleteObj oPset
	
	out_valid = True

end function
'--------------------------------------
' Draw Curve
'--------------------------------------
function draw_curve(in_chest, in_hip, out_curve, out_chestDepth, out_hipDepth, out_dist)

	dim t1, dist, root
	
	Set Root = ActiveProject.ActiveScene.Root
	
	redim vectors(3)
	'create a 4 point curve stored in 4vectors.
	
	'first get the start and end.
	set vectors(0) = xsimath.CreateVector3
	in_hip.Kinematics.Global.Transform.GetTranslation vectors(0)
	
	set vectors(3) = xsimath.CreateVector3
	in_chest.Kinematics.Global.Transform.GetTranslation vectors(3)
	
	'The other two points are 48% and 52% between these two points.
	set vectors(1) = xsimath.CreateVector3
	set vectors(2) = xsimath.CreateVector3
	vectors(1).LinearlyInterpolate vectors(0), vectors(3), .40 
	vectors(2).LinearlyInterpolate vectors(0), vectors(3), .60 	
		
	'convert the vectors into an array for Curve Points
	dim i
	redim curvePoints(3,3)
	
	for i = 0 to 3
		curvePoints(0,i) = vectors(i).x
		curvePoints(1,i) = vectors(i).y
		curvePoints(2,i) = vectors(i).z
		curvePoints(3,i) = 1				
	next
	
	
	set out_curve = root.AddNurbsCurve(curvePoints,,,,,,"spineCurve")

	'create chestDepth and hipDepth
	set out_chestDepth = in_chest.AddPrimitive("Null", "chestDepth")
	set out_hipDepth= in_hip.AddPrimitive("Null", "hipDepth")

	set t1 = xsimath.createTransform
	t1.SetTranslation vectors(2)	
	out_chestDepth.Kinematics.global.transform = t1

	t1.SetTranslation vectors(1)	
	out_hipDepth.Kinematics.global.transform = t1

	'calculate the distance
	set dist = xsimath.createvector3
	dist.sub vectors(0), vectors(3)	
	out_dist = dist.length

end function
'--------------------------------------
' Bind Curve
'--------------------------------------
function bind_curve(in_guideCurve, in_hip, in_hipDepth, in_chestDepth, in_chest, out_sliders, out_ScaleSlider)
	
	dim myOp, rtOp, length, sliders, ScaleSlider
	
	set out_sliders = in_guideCurve.AddProperty("Custom_parameter_list",,"Spine_Control")  
	set out_ScaleSlider = out_sliders.AddParameter ("scale", siDouble, siClassifVisualization , siAnimatable, "scale", "scale", , 1, .01, 10000,.01,10)  
	
	'set the length
	length =  in_guideCurve.ActivePrimitive.Geometry.curves(0).length
	       
	set myOp = ApplyOp ("SpineCurve", in_guideCurve &","& in_hip &","& in_hipDepth &","& in_chestDepth&","& in_chest)(0)	
	
	SetValue myOp & ".lgoal", length
	
	AddExpr myOp & ".lScale", out_ScaleSlider
	
end function
'--------------------------------------
' Create Top Vertebra
'--------------------------------------
function Create_top_vertebra(in_curve, in_dist, in_nbVertebra, in_scaleSlider, out_topVertebra, out_refCnst)
 
	 ' the top vertebra functions as a marker to maintain a constant length.

	dim cLength, myOp, rtOp, length

	cLength = in_dist/in_nbVertebra * .8

	set out_topVertebra = in_curve.AddPrimitive("Cube", "vertebra")
	out_topVertebra.length = cLength

	'constrain the icon to the curve
	set out_refCnst = out_topVertebra.Kinematics.AddConstraint("Path", in_curve, False)
	out_refCnst.tangent = True
	out_refCnst.Parameters("upvct_active").Value = True

	'apply the scripted operator for fixed Spine length	
	set myOp = ApplyOp ("FixedLength", out_topVertebra&","&in_curve)(0)	
		
	length =  in_curve.ActivePrimitive.Geometry.curves(0).length
	SetValue myOp & ".init_length", length
	
	AddExpr myOp & ".lScale", in_scaleSlider

end function
'--------------------------------------
' Make Vertebra
'--------------------------------------
function make_vertebra(in_curve, in_hip, in_chest, in_dist, in_nbVertebra, in_topVertebra, in_refCnst, in_implicitVertebra)

	dim cLength, i, pCnst, size, myOp, rtOp
	size = in_nbVertebra - 1
	
	redim vertebra(size)

	cLength = in_dist/in_nbVertebra * .6

	for i = 0 to size
		if ( in_implicitVertebra ) then
			set vertebra(i) = in_curve.AddPrimitive("Cube", "vertebra")
		else
			set vertebra(i) = in_curve.AddGeometry("Cube", "MeshSurface","vertebra" )
		end if
		vertebra(i).length = cLength
		set pCnst = vertebra(i).Kinematics.AddConstraint("Path", in_curve, False)
		pCnst.tangent = True
		pCnst.Parameters("upvct_active").Value = True

		AddExpr pCnst & ".perc", in_refCnst & ".perc * " & replace(cstr(round((i+1)/(in_nbVertebra + 1),6)),",",".")		
	next
	
	for i = 0 to size 
		set myOp = ApplyOp ("SpinePointAt", vertebra(i) &","&in_chest&","&in_hip )(0)		
		SetValue myOp  & ".slider", 1 - (i)/(size + 2) - 1 /(size + 2)
	next
	
	set myOp = ApplyOp ("SpinePointAt", in_topVertebra &","&in_chest&","&in_hip )(0)
	SetValue myOp  & ".slider", 0

	
end function
'--------------------------------------

'--------------------------------------
' Tail Maker
'
' There are several dummy arguments so 
' that the command logs the same was as
' the generic MakeTail command.
'--------------------------------------
sub CreateTailProc( in_ParentDummy, in_collGuideObjects, inout_nbBones, in_ShadowTypeDummy, in_ShadowParentDummy )
	
	On Error Resume Next

	dim oTail
	set oTail = MakeTail( ,in_collGuideObjects,inout_nbBones)
	
	'MakeTail uses Jscript which dosen't support output arguments. Get value from tail object.
	if(oTail<>empty) then inout_nbBones = oTail.boneNumber

end sub

'--------------------------------------
' Tail Maker
'
' There are several dummy arguments so 
' that the command logs the same was as
' the generic MakeTail command.
'--------------------------------------
sub CreateControlSplinesProc(	inCurveCollection, NbDivisions, inoutScale, inoutParent, _
								inoutPointMarkerType, inoutPathMarkerType, inoutOffsetMarkerType,	_
								inoutPointColor, inoutPathColor, inoutOffsetColor, inoutFromUI		)
	
	On Error Resume Next

	'need to extract the dialog box values somehow?

	dim oControlSpline
	set oControlSpline = MakeControlSplines(	inCurveCollection, _
												inoutNbDivisions, _
												inoutScale, _
												inoutParent, _
												inoutPointMarkerType, _
												inoutPathMarkerType, _
												inoutOffsetMarkerType, _
												inoutPointColor, _
												inoutPathColor, _
												inoutOffsetColor, _
												inoutFromUI )
													
	'MakeTail uses Jscript which dosen't support output arguments. Get value from ControlSpline object.
	if(oControlSpline<>empty) then 

		inoutScale				= oControlSpline.Scale
		inoutParent				= oControlSpline.Parent
		inoutNbDivisions		= oControlSpline.nbDivisions
		inoutPointMarkerType	= oControlSpline.PointType
		inoutPathMarkerType		= oControlSpline.PathType
		inoutOffsetMarkerType	= oControlSpline.OffsetType
		inoutPointColor			= oControlSpline.PointColor
		inoutPathColor			= oControlSpline.PathColor
		inoutOffsetColor		= oControlSpline.OffsetColor

	end if

	'turn off the dialog box swith so don't get a popup when playing back script history
	inoutFromUI = 0

end sub