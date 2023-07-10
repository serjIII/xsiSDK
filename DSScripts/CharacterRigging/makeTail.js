////////////////////////////////////////
// Make Tail Rigging Component
// misner Dec 2003


	/*

	inParent = the object to make the new hand under
	inGuideObjects = an XSI Collection of guide objects for the tail

	inBoneNumber = the number of bones on the tracing chain

	inShadowType = the type of shadow rig to constrain to the arm
		   	0 > no shadow
			1 > SI|3D skeleton shadow rig
			2 > XSI  skeleton shadow rig						
			3 > Null shadow rig
			4 > Box shadow rig

	inShadowParent = parent of the shadow rig hiearchy.  If empty, no shadow rig will be generated.

	=======================================
	Returns a tail Object where:

	Tail.nbPoints = the number of points if a curve was handed as a control.
	Tail.ControlChains = an XSICollection of control chain elements in the order: root, bone, effector, root, bone, effector, ect...
	Tail.TraceChain = a XSICollection of the chain following a bspline path through the control points.  The collection is in the same order as GetSkeleton (root, bone1, bone2, ect..... , effector)


	Tail.Hidden = is a collection of Hidden object
	Tail.Envelope = is a collection of objects to be Enveloped

	Tail.ShadowStart = an object at the start of the shadow hierachy
	Tail.ShadowEnds = a collection of Shadow End object.  In the tail the end with always be Tail.ShadowEnds(0).
	Tail.Shadows = a collection of box shadows 	

	Tail.Root = the root of the Control Chain
	Tail.TraceRoot = the root of the TraceChain

	*/

var USEBLENDCTRL = true;	

//******************************************************************************
// String Constants (used to translate)
//******************************************************************************
var IDS_MAKE_TAIL_TITLE			= 1171;


// Add a push method to the JScript Array Object
// (Array.Push was added in Jscript 5.5 but we cannot rely on this)
var push = function(item){return this[this.length++] = item;}
Array.prototype.push = push;

/*--------------------------------
 Make Tail
--------------------------------*/
function makeTail(inParent, inGuideObjects, inBoneNumber, inShadowType, inShadowParent, inCharacterSetName, inShadowCharacterSetName){

	////////////////////////////
	// Validate arguments
	////////////////////////////

	//convert collections to objects
	var l_aArgsToConvert = Array(0,4);
	var a;
	for (i = 0; i < l_aArgsToConvert.length; i++)
	{
		a = l_aArgsToConvert[i];
		if(arguments[a]) { arguments[a] = arguments[a](0);}	//extract first object from coll.
	}

	////////////////////////////
	// Make Tail
	////////////////////////////

	var data = new Object();
	
	data.obj = null;
	
	if(!inGuideObjects || inGuideObjects.count == 0)
	{
		data = getSelection(data);
		if(!data){return}

		data = getCurve(data);
		if(!data){return}
	}
	else if(inGuideObjects(0).type == "crvlist")
	{
		data.obj = inGuideObjects(0);
		data = getCurve(data);
	}
	else
	{
		data.guides = inGuideObjects;
		var data = pointsFromGuides(data);

		data.ShadowType = inShadowType;
		data.ShadowParent = inShadowParent;
	}

    data.CharacterSetName = inCharacterSetName;
    data.ShadowCharacterSetName = inShadowCharacterSetName;

	if(!inParent){
		//if no parent but there's a curve use the same model as the curve 
		//this way the model in which to put the cache source can be specified by the user.
		data.parent = data.obj ? data.obj.model : ActiveSceneRoot;
	}
	else{
		data.parent = inParent;
	}

	if (!inBoneNumber){

		var ui = get_ui();
		if(!ui){return}
		data.boneNumber = ui.boneNumber;
	}
	else{
		data.boneNumber = inBoneNumber;
	}

	data.Hidden = new ActiveXObject("XSI.Collection");
	data.Envelope = new ActiveXObject("XSI.Collection");

	data = getChainPlane(data);

	var data = makeChains(data);

	var data = chainDisplay(data);


	var data = traceCurve(data);
	var data = traceChain(data);

	data.Root = data.skelArray[0](0)

	data.parent.AddChild(data.skelArray[0](0))

	var data = applySprings(data);

	if(inGuideObjects){
		if(data.ShadowType >= 1 && data.ShadowType <= 3){
			data = makeSkelShadows(data);
		}
		if(data.ShadowType > 3){
			data = makeBoxShadows(data);
		}
	}

	SetNeutralPose(data.skelArray[0](0), siSRT, false)

	data = HideSetup(data)

	data.TraceRoot = data.TraceChain(0);

	return data;
}

/*--------------------------------
 Get Selection
--------------------------------*/
function getSelection(inData){

	inData.sel = GetValue("SelectionList");

	if (inData.sel.count == 0){
		logmessage("Tail Maker Cancel, Requires Linear Curve Selection", siError);
		return;
	}

	if (inData.sel(0).type != "crvlist"){
		logmessage("Tail Maker Cancel, Requires Linear Curve Selection", siError);
		return;
	}

	inData.obj = inData.sel(0);

	return inData;
}

/*--------------------------------
 Get Curve
--------------------------------*/
function getCurve(inData){

	var geom  = inData.obj.activeprimitive.geometry

	var lPositions = geom.points.positionarray.toArray();

	inData.nbPoints = lPositions.length/3

	if (inData.nbPoints < 3){
		logmessage("Tail Maker Cancel, Requires Linear Curve of at least 3 points", siError);
		return;
	}


	inData.positions = new Array();

	var sumLength;
	var increment = XSIMath.CreateVector3();
	// points and in local space, so to get a good length we need to convert to global
	var gtrans = inData.obj.Kinematics.Global.Transform;

	for(i=0;i < inData.nbPoints; i++){

		inData.positions[i] = readPosition(lPositions, i, inData.obj);



		if (i > 0){
			increment.Sub(inData.positions[i-1], inData.positions[i]);
			increment = XSIMath.MapObjectPositionToWorldSpace(gtrans, increment);
			sumLength =+ increment.Length();
		}
	}

	inData.length = sumLength/inData.nbPoints;
	return inData;
}

/*--------------------------------
 Points From Guides
--------------------------------*/
function pointsFromGuides(inData){



	inData.positions = new Array();

	inData.nbPoints = inData.guides.count;



	var sumLength;
	var increment = XSIMath.CreateVector3();
	// points and in local space, so to get a good length we need to convert to global

	for(var t=0;t<inData.guides.count;t++){

//		logmessage("GUIDES(" + t + "): " + inData.guides(t));

		inData.positions[t] = XSIMath.CreateVector3();
		inData.guides(t).Kinematics.Global.Transform.GetTranslation(inData.positions[t]);

		if (t > 0){
			increment.Sub(inData.positions[t-1], inData.positions[t]);
			sumLength =+ increment.Length();
		}
	}

	inData.length = sumLength/inData.nbPoints;


	return inData;

}
/*--------------------------------
 Get UI
--------------------------------*/
function get_ui()
{

	var mysliders = ActiveSceneRoot.AddProperty("Custom_parameter_list",0,"Tail Maker");

	var boneNumber = mysliders.AddParameter2("boneNumber",  siInt4, 10  ,2, 100, 2 , 50, 8, 16, "bone number", "bone number");

	var layout = mysliders.PPGLayout;
	//Set Help ID and Path
    layout.SetAttribute( siUIHelpFile, "<FactoryPath>/Doc/<DocLangPref>/xsidocs.chm::/animtoolbar62.htm" );

	try{
		inspectobj( mysliders, "", XSIUtils.Translate( IDS_MAKE_TAIL_TITLE, "XSISCRIPTS" ), siModal );
	}
	catch(e){
		deleteobj(mysliders);
		logmessage ( e.description, siError);
		return;
	}


	var returnObj = new Object;

	returnObj.boneNumber = boneNumber.value;

	deleteobj(mysliders);

	return returnObj;

}
/*--------------------------------
 Read Position
--------------------------------*/
function readPosition(inArray, inIndex, inObj){


	var point = XSIMath.CreateVector3();

	var gtrans = inObj.Kinematics.Global.Transform;

	point.x = inArray[inIndex * 3]		// the x
	point.y = inArray[inIndex * 3 + 1]		// the y
	point.z = inArray[inIndex * 3 + 2]		// the z

	var newPoint = XSIMath.MapObjectPositionToWorldSpace( gtrans, point);

	return newPoint;
}

/*--------------------------------
 Get Chain Plane
--------------------------------*/
function getChainPlane(inData){

	var p1 = inData.positions[0];
	var p2 = inData.positions[1];
	var p3 = inData.positions[2];

	var v1 = XSIMath.CreateVector3();
	var v2 = XSIMath.CreateVector3();

	v1.sub(p2, p1);
	v2.sub(p3, p1);
	inData.plane = XSIMath.CreateVector3();
	inData.plane.cross(v1,v2);
	//inData.plane.addinPlace(p1);

	//DrawLine(p1, inData.plane);

	return inData;
}
/*--------------------------------
 Make Chains
--------------------------------*/
function makeChains(inData){

	var dominantAxis = XSIMath.CreateVector3();
	var secondaryAxis = XSIMath.CreateVector3();
	var bDominantAxis = XSIMath.CreateVector3();
	var bSecondaryAxis = XSIMath.CreateVector3();

	dominantAxis.set(0,-1,0);
	secondaryAxis.set(1,0,0);

	bDominantAxis.set(1,0,0);
	bSecondaryAxis.set(0,1,0);

	var pointers = new Array();
	var chainTransforms = new Array();
	inData.skelArray = new Array();

	inData.ControlChains = new ActiveXObject("XSI.Collection");

	for(i=0;i < inData.nbPoints - 1; i++){


		var oChain = ActiveSceneRoot.Add2DChain(inData.positions[i] ,inData.positions[i+1] , inData.plane, 2)
		var bIndex;
		inData.skelArray[i] = GetSkeleton(oChain, bIndex );

		inData.ControlChains.AddItems(inData.skelArray[i]);

		// get a rotation that's pointing -y to the next point and x+ on the plane.
		pointers[i] = XSIMath.CreateVector3();
		pointers[i].sub(inData.positions[i+1], inData.positions[i]);

		dominantAxis.set(0,-1,0);
		secondaryAxis.set(1,0,0);

		var Trans = RotationFromTwoVectors(pointers[i], inData.plane, dominantAxis, secondaryAxis);
		Trans.SetTranslation(inData.positions[i]);


		inData.skelArray[i](0).Kinematics.Global.Transform = Trans;


		// for the bone a rotation that's pointing x to the next point and z+ on the plane.
		var inData = getChainPlane(inData)

		bDominantAxis.set(1,0,0);
		bSecondaryAxis.set(0,1,0);

		chainTransforms[i] = XSIMath.CreateTransform();
		chainTransforms[i] = RotationFromTwoVectors(pointers[i], inData.plane, bDominantAxis, bSecondaryAxis);

		chainTransforms[i].SetTranslation(inData.positions[i]);
		inData.skelArray[i](1).Kinematics.Global.Transform = chainTransforms[i];
		
		if(i!=0 && USEBLENDCTRL) inData.Hidden.Add(inData.skelArray[i](0));
		inData.Hidden.Add(inData.skelArray[i](2));

		addMarkingSet(inData.skelArray[i](0), null, 1, null, inData.CharacterSetName);

		// Now that the root has been positioned, lock the pos of the root 
		// relative its parent (effector of previous chain)
		if (i > 0){
			inData.skelArray[i-1](2).AddChild(inData.skelArray[i](0));
			inData.skelArray[i](0).Kinematics.AddConstraint("Position",inData.skelArray[i-1](2));
		}


	}




	return inData;

}
/*------------------------------
 Chain Display
------------------------------*/
function chainDisplay(inData){

	var s = inData.length;
	if(s < .01){s = .01};

	for(i=0;i < inData.nbPoints - 1; i++){

		//inData.skelArray[i](2).properties("visibility").viewvis.value = false;

		//blendObjs(i).AddProperty("Display Property")
	//	blendObjs(i).properties("display").wirecol.value = 380

		inData.skelArray[i](0).primary_icon.value = 0;
		inData.skelArray[i](0).shadow_icon.value = 4;

		inData.skelArray[i](0).shadow_scaleX.value = s;
		inData.skelArray[i](0).radius.value = s;
		inData.skelArray[i](0).shadow_scaleZ.value = s;

		inData.skelArray[i](1).primary_icon.value = 0;
		inData.skelArray[i](1).shadow_icon.value = 7;
		inData.skelArray[i](1).radius.value = s;
		inData.skelArray[i](1).shadow_scaleZ.value = s;

		inData.skelArray[i](2).shadow_icon.value  = 1;
		inData.skelArray[i](2).primary_icon.value  = 0;
		inData.skelArray[i](2).shadow_scaleX.value = s;
		inData.skelArray[i](2).radius.value  = s;
		inData.skelArray[i](2).shadow_scaleZ.value  = s;

	}

	return inData;
}
/*------------------------------
 Trace Curve
------------------------------*/
function traceCurve(inData){

	var curvePoints = new Array();

	for(i=0;i < inData.nbPoints; i++)
	{
		curvePoints.push(inData.positions[i].x);
		curvePoints.push(inData.positions[i].y);
		curvePoints.push(inData.positions[i].z);
		curvePoints.push(1);
	}

	switch(inData.nbPoints)
	{
   		case 3:
			curvePoints.push(inData.positions[2].x);
			curvePoints.push(inData.positions[2].y);
			curvePoints.push(inData.positions[2].z);
			curvePoints.push(1);
			var knots = new Array(0,0,0,1,1,1);
			break;

		case 4:
			var knots = new Array(0,0,0,1,1,1);
			break;

		default:
			var knots = new Array();
			var cKnot = 0;
			for(i=0;i < inData.nbPoints + 2; i++)
			{
				if (i > 2 && i < inData.nbPoints ){cKnot++;}
				knots.push(cKnot);
			}
	}


	inData.traceCurve = inData.skelArray[0](0).AddNurbsCurve(curvePoints, knots, 0, 3, 0 ,siSINurbs, "tailcurve");

	inData.traceCurve.AddProperty("Display Property");
	inData.traceCurve.properties("display").wirecol.value = 49;


	inData.traceCurve.properties("visibility").viewvis.value = false;

	// now bind the curve to the chain

	if (inData.nbPoints == 3){

		ApplyOp("ClusterCenter", inData.traceCurve + ".pnt[0];" + inData.skelArray[0](0), 3, siPersistentOperation);
		ApplyOp("ClusterCenter", inData.traceCurve + ".pnt[1];" + inData.skelArray[1](0), 3, siPersistentOperation);
		ApplyOp("ClusterCenter", inData.traceCurve + ".pnt[2,3];" + inData.skelArray[1](2), 3, siPersistentOperation);
	}
	else{

		for(i=0;i < inData.nbPoints - 1; i++){
			ApplyOp("ClusterCenter", inData.traceCurve + ".pnt["+i+"];" + inData.skelArray[i](0), 3, siPersistentOperation);
		}

		var p = inData.nbPoints-1;
		ApplyOp("ClusterCenter", inData.traceCurve + ".pnt["+p+"];" + inData.skelArray[p-1](2), 3, siPersistentOperation);
	}

	return inData;

}
/*------------------------------
 Trace Chain
------------------------------*/
function traceChain(inData){

	var traceRoot = CreateChainfromCurve(inData.traceCurve , inData.boneNumber, true)(0);

	var cruveSkel = GetSkeleton(traceRoot);
	var linearCurve = cruveSkel(2).Kinematics.Constraints(0).Constraining(0);

	linearCurve.AddProperty("Display Property");
	linearCurve.properties("display").wirecol.value = 49;

	//inData.skelArray[0](0).AddChild(linearCurve);

	inData.TraceChain = GetSkeleton(traceRoot, bIndex);


	// set the upvector of the first chain

	cruveSkel(1).joint.resplane.value = 2;
	cruveSkel(1).joint.upx.value = 0;
	cruveSkel(1).joint.upy.value = 1;
	cruveSkel(1).joint.upz.value = 0;
	cruveSkel(1).joint.upvct_relroot.value = true;



	var bIndex;

	inData.skelArray[0](0).AddChild(traceRoot);


	traceRoot.properties("visibility").viewvis.value = false;

	inData.TraceChain(inData.TraceChain.count - 1).properties("visibility").viewvis.value = false;

	var s = inData.length * .5;
	if(s < .01){s = .01};

	for(var t = 1; t< inData.TraceChain.count;t++){

		inData.TraceChain(t).name = "Tail" + t;

		inData.Envelope.Add(inData.TraceChain(t));

		inData.TraceChain(t).primary_icon.value = 0;
		inData.TraceChain(t).shadow_icon.value = 1;
		inData.TraceChain(t).radius.value = s;
		inData.TraceChain(t).shadow_scaleZ.value = s;

		inData.TraceChain(t).AddProperty("Display Property");
		inData.TraceChain(t).properties("display").wirecol.value = 378;
	}

	return inData;
}
/*------------------------------
 Apply Springs
------------------------------*/
function applySprings(inData){

	var nbSprings = inData.nbPoints-1;
	var s = inData.length;

	//
	// Tail controls pset
	//
	oPSet = inData.Root.AddProperty("TailControl",0,"TailControl");
	
	var oMute		= oPSet.Parameters("Mute");
	var oSpeed		= oPSet.Parameters("Speed");
	var oCaching		= oPSet.Parameters("Caching");
	var oGrid    		= oPSet.Parameters("Grid");	
	
	if(USEBLENDCTRL)
		var oBlend 	= oPSet.Parameters("Blend");	
	
	var proxyname;
	var oGridData = oGrid.Value;			
	
	//
	// Rig the springs to the tail controls
	//
	
	for(i=0;i < nbSprings; i++)
	{
	
		//
		// APPLY SIMULATION OPERATOR
		//
		var myop = ApplySpringOp (inData.skelArray[i](2)+","+ inData.skelArray[i](0))(1);


		if(USEBLENDCTRL)
		{
			////////////////////////////////////////////////////////////////////////
			//
			// ANIMATION CONTROLLER		
			//
			// The pivot controller drives the ANIMATION
			//
			var tailctrl = MakeTailPivotController(inData);

			// position constrain effector to the tail control - this will give position animation
			// for us to blend against for simulation->animation blending
			inData.skelArray[i](2).Kinematics.AddConstraint("Position",tailctrl);

			////////////////////////////////////////////////////////////////////////
			// 
			// SIMULATION CONTROLLER
			//
			// Add null parented to root but pos constrained to the tail control.
			// Drive the spring rest position with the local position of this null 
			// (can't use the tail control directly because its local position dosen't change).
			//
			// This null drives the SIMULATION.
			//
			var springtarget = inData.skelArray[i](0).AddNull("springtarget");		
			var oScl = XSIMath.CreateVector3(); 	oScl.Set(s/10,s/10,s/10);
			springtarget.LocalScaling 	= oScl;		
			var oRot = XSIMath.CreateRotation(); 	
			oRot.SetFromXYZAnglesValues(XSIMath.DegreesToRadians(90),0,0);			
			springtarget.LocalRotation 	= oRot;	
			springtarget.Kinematics.AddConstraint("Position",tailctrl);

			AddExpr(myop + ".RestPosX", springtarget.Kinematics.Local.Parameters("posx"), true);				
			AddExpr(myop + ".RestPosY", springtarget.Kinematics.Local.Parameters("posy"), true);				
			AddExpr(myop + ".RestPosZ", springtarget.Kinematics.Local.Parameters("posz"), true);						

			inData.Hidden.Add(springtarget);		
			////////////////////////////////////////////////////////////////////////		
		}		
		
		// rig the parameters in each spring to proxy parameters controlled by the tail control pset.
		SetValue (myop + ".Scale", s*3);
		
		AddProxyParam( oPSet, myop + ".mass", "m"+i);
		AddProxyParam( oPSet, myop + ".LinearStiffness","k"+i);
		AddProxyParam( oPSet, myop + ".LinearDamping","d"+i);
	
		oGridData.SetRowLabel(i, "Spring"+i);
		
		AddExpr(myop + ".mute", oMute.Fullname+"==true", true);		
		AddExpr(myop + ".simtimectrl.caching", oCaching.Fullname, true);		
		AddExpr(myop + ".StepSize", oSpeed.Fullname, true);				
		
		if(USEBLENDCTRL) 
			AddExpr(inData.skelArray[i](2) + ".kine.global.Evolve.Blend", oBlend.Fullname, true);
	}
	
	oGridData.RowCount = nbSprings; 
	for(i=0;i < nbSprings; i++)
		oGridData.SetRowLabel(i, "Spring"+i);		

	oPSet.Parameters("NbSprings").Value = nbSprings;			

	colvals = new Array(nbSprings); 

	oFCurve = oPSet.Parameters("MassDistrib").Value;		
	oFCurve.RemoveKeys();
	oFCurve.AddKey(0, 60);
	oFCurve.AddKey(nbSprings-1, 40); 
	for(i=0;i<nbSprings;i++) colvals[i] = Math.round(oFCurve.Eval(i)*100)/100; //only display two decimal places
	oGridData.SetColumnValues( 0, colvals) ; 		

	oFCurve = oPSet.Parameters("StiffDistrib").Value;		
	oFCurve.RemoveKeys();
	oFCurve.AddKey(0, 150);
	oFCurve.AddKey(nbSprings-1, 100); 
	for(i=0;i<nbSprings;i++) colvals[i] = Math.round(oFCurve.Eval(i)*100)/100; //only display two decimal places
	oGridData.SetColumnValues( 1, colvals) ; 		

	oFCurve = oPSet.Parameters("DampingDistrib").Value;		
	oFCurve.RemoveKeys();
	oFCurve.AddKey(0, 150);
	oFCurve.AddKey(nbSprings-1, 100); 
	for(i=0;i<nbSprings;i++) colvals[i] = Math.round(oFCurve.Eval(i)*100)/100; //only display two decimal places
	oGridData.SetColumnValues( 2, colvals) ; 		

	return inData;

}


/*------------------------------
 MakeTailPivotController
 The controller uses a pivot point to change its global position via
 local rotation. Local position is unaffected. 
------------------------------*/
function MakeTailPivotController(inData)
{
	var s = inData.length;

	var tailctrl = inData.skelArray[i](0).AddGeometry("Sphere","NurbsSurface","tailctrl");
	tailctrl.Parameters("subdivu").value = 4;
	tailctrl.Parameters("subdivv").value = 2;		

	oRot = tailctrl.LocalRotation; 		oRot.SetIdentity(); 	tailctrl.LocalRotation = oRot;
	oTrs = tailctrl.LocalTranslation; 	oTrs.SetNull(); 	tailctrl.LocalTranslation = oTrs;			

	tailctrl.AddProperty("Display Property");
	tailctrl.properties("display").wirecol.value = RGBtoWirecolor(0,0.429,0);

	centerop = ApplyOp("CenterManip",tailctrl)(0);
	centerop.Parameters("sclx").value = s/10;
	centerop.Parameters("scly").value = s/10;		
	centerop.Parameters("sclz").value = s/10;				
	centerop.Parameters("posx").value = -inData.skelArray[i](2).LocalTranslation.x;
	centerop.Parameters("posy").value = -inData.skelArray[i](2).LocalTranslation.y;		
	centerop.Parameters("posz").value = -inData.skelArray[i](2).LocalTranslation.z;				
	FreezeObj(centerop);

	tailctrl.LocalTranslation = inData.skelArray[i](2).LocalTranslation;

	//Set the pivot point
	tailctrl.Kinematics.Local.Parameters("pposy").value = -inData.skelArray[i](2).LocalTranslation.y;
	tailctrl.Kinematics.Local.Parameters("protx").value = 180;		

	//Lock local position on the object with expressions (can't use locks because locks
	//do not stop child compensation), and constriants will use global position which the control is changing via
	//the pivot;
	AddExpr(tailctrl.Kinematics.Local.Parameters("posx"), null , true);		
	AddExpr(tailctrl.Kinematics.Local.Parameters("posy"), null , true);				
	AddExpr(tailctrl.Kinematics.Local.Parameters("posz"), null , true);				

	//Need an upvector
	var tailctrl_upv = tailctrl.AddNull("tailctrl_upv");
	oRot = tailctrl_upv.LocalRotation; oRot.SetIdentity(); tailctrl_upv.LocalRotation = oRot;
	oTrs.Set(-1,0,0);
	oTrs.AddInPlace(tailctrl.LocalTranslation);
	oTrs.NegateInPlace();
	tailctrl_upv.LocalTranslation = oTrs;

	inData.skelArray[i](1).Joint.UpVectorReference = tailctrl_upv;
	inData.Hidden.Add(tailctrl_upv);
	
	return tailctrl
}

/*------------------------------
 Convert RGB value to wirecolor
------------------------------*/
function RGBtoWirecolor(R,G,B)
{
	//convert RGB to wirecolor
	var wirecolR,wirecolG,wirecolB, result;

	wirecolR = (Math.round(R * 7)) << 1
	wirecolG = (Math.round(G * 7)) << 4
	wirecolB = (Math.round(B * 7)) << 7

	return wirecolR | wirecolG | wirecolB;
}

/*------------------------------
 Rotation from Two Vectors
------------------------------*/
function RotationFromTwoVectors(inVector1, inVector2, inDominantAxis, inSecondaryAxis){

	var cp = XSIMath.CreateVector3();
	cp.Cross(inDominantAxis, inVector1);

	var ang = inDominantAxis.Angle(inVector1);
	var T1 = XSIMath.CreateTransform();

	T1.SetRotationFromAxisAngle (cp, ang)

	inSecondaryAxis.MulByTransformationInPlace (T1);

	var projected = ProjectOnPlane(inVector2, inVector1);
	var ang2 = inSecondaryAxis.Angle(projected);


	var cp2 = XSIMath.CreateVector3();
	cp2.Cross(inSecondaryAxis, projected)

	var Neg = XSIMath.CreateVector3();
	axisCheck1= XSIMath.CreateVector3();
	axisCheck2 = XSIMath.CreateVector3();

	Neg.Negate(inVector1);
	axisCheck1.Sub(cp2,inVector1);
	axisCheck2.Sub(cp2,Neg);

	if (axisCheck2.Length() < axisCheck1.Length() ){ang2 = ang2 * -1}

	var T2 = XSIMath.CreateTransform();
	T2.SetRotationFromAxisAngle (inDominantAxis, ang2)

	T2.MulInPlace(T1);


	return T2;

}
/*------------------------------
 Project On Plane
------------------------------*/
function ProjectOnPlane(inPoint, inPlaneNormal)
{

	var vProjection = XSIMath.CreateVector3();
	var pProjection = XSIMath.CreateVector3();

	dot = inPoint.Dot(inPlaneNormal);
	var ScaleChange = (dot/Math.pow(inPlaneNormal.Length() , 2));
	vProjection.Scale(ScaleChange, inPlaneNormal);
	pProjection.Sub(inPoint, vProjection);


	return pProjection;

}
/*--------------------------------
 Draw Line
--------------------------------*/
function DrawLine(inStart, inEnd, inName){
	var s = inStart;
	var e = inEnd;
	var curvePoints = new Array(s.x,s.y,s.z,1,e.x,e.y,e.z,1);
	var knots = new Array(0,1);
	var line = ActiveSceneRoot.AddNurbsCurve(curvePoints, knots, 0, 1, 1, siSINurbs);

	line.name = inName;
}
/*--------------------------------
 Add Marking Set
--------------------------------*/
function addMarkingSet(inObj, inPos, inRot, inSingle, inCharacterSetName){

	var pStrings = new Array("posx","posy","posz");
	var rStrings = new Array("rotx","roty","rotz");
	var sStrings = new Array("sclx","scly","sclz");

	var mset = inObj.AddProperty("Custom_parameter_list",0,"MarkingSet");

	for (var mark = 0;mark<pStrings.length;mark++) {
	    if (inPos) {
	        SetKeyableAttributes( inObj, ".kine.local." + pStrings[mark], siKeyableAttributeKeyable );
		    AddProxyParam ( mset, inObj + ".kine.local." + pStrings[mark], null);
		}
		else {
	        SetKeyableAttributes( inObj, ".kine.local." + pStrings[mark], siKeyableAttributeClear );
        }		
	}

	for (var mark = 0;mark<rStrings.length;mark++) {
	    if (inRot) {
	        SetKeyableAttributes( inObj, ".kine.local." + rStrings[mark], siKeyableAttributeKeyable );
		    AddProxyParam ( mset, inObj + ".kine.local." + rStrings[mark], null);
		}
		else {
	        SetKeyableAttributes( inObj, ".kine.local." + rStrings[mark], siKeyableAttributeClear );
        }		
	}

	for (var mark = 0;mark<rStrings.length;mark++) {
	    if (inSingle) {
	        SetKeyableAttributes( inObj, ".kine.local." + inSingle, siKeyableAttributeKeyable );
		    AddProxyParam ( mset, inObj + ".kine.local." + inSingle, null);
		}
	}

	if (inSingle) {
		AddProxyParam ( mset, inObj + ".kine.local." + inSingle, null);
	}

	// add this in so that we can specify/store the character key set that this marking set will
	// be converted to
    mset.AddParameter2("CharacterKeySet",siString,inCharacterSetName,0,0,0,0,0,0,"CharacterKeySet","CharacterKeySet");
}

/*--------------------------------
 Make Skel Shadows
-------------------------------*/
function makeSkelShadows(inData){


	inData.ShadowEnds = new ActiveXObject("XSI.Collection");
	inData.Shadows = new ActiveXObject("XSI.Collection");

	inData.TailShadow = makeShadowChain(inData.TraceChain, inData.ShadowParent, inData.ShadowType==1 /*SI3D*/, inData.length * .5, inData.ShadowType==3 /*NULL*/, inData.ShadowCharacterSetName);

	inData.ShadowStart = inData.TailShadow.ShadowStart;
	inData.Shadows.AddItems(inData.TailShadow.Shadows);

	inData.ShadowEnds.Add(inData.TailShadow.ShadowEnds(0));

	return inData;

}
/*--------------------------------
 Make Box Shadows
--------------------------------*/
function makeBoxShadows(inData){

	var boxScale = inData.length;

	inData.Shadows = new ActiveXObject("XSI.Collection");
	inData.ShadowEnds = new ActiveXObject("XSI.Collection");

	var taperPerc = .6;

	if(inData.TraceChain.length < 2){return inData}


	var spin = false;

	for(var b = 2; b < inData.TraceChain.count; b++){

		var taper = 1 - ((1-taperPerc)/(1+inData.TraceChain.count))

		var boxShadow = makeShadowBox(inData.ShadowParent, "Jaw", inData.TraceChain(b-1), inData.TraceChain(b), boxScale * .5, 90, 90, taper, spin)

		if(b == 2){
			inData.ShadowStart = boxShadow;
		}

		boxShadow.Name = inData.TraceChain(b-1).name
		boxScale = boxScale * taper;
		inData.ShadowParent = boxShadow;
		inData.Shadows.Add(boxShadow);

	}

	inData.ShadowEnds.Add(boxShadow);
	
	
	for(var s=0;s<inData.Shadows.count;s++){
		addMarkingSet(inData.Shadows(s), 0, 1, null, inData.ShadowCharacterSetName);
	}		

	return inData;

}
/*--------------------------------
 Make Shadow Box
--------------------------------*/
function makeShadowBox(inParent, inName, inStartObj, inEndObj, inScale, inTopRot, inBottomRot, inTaper, inSpin){


	var shadowBox = inParent.AddGeometry("Cube", "MeshSurface", inName);

	var trans = inStartObj.Kinematics.Global.Transform;

	shadowBox.Kinematics.Global.Transform = trans;

	var shallowScale = inScale * .75;

	shadowBox.Kinematics.AddConstraint("Pose", inStartObj);

	var boxOp = ApplyOp ("Connector_Box", shadowBox+","+ inStartObj +","+ inEndObj)(0);

	SetValue(boxOp + ".topOffset_z", inTopRot, null);
	SetValue(boxOp + ".bottomOffset_z", inBottomRot, null);
	SetValue(boxOp + ".topWidth", inScale, null);
	SetValue(boxOp + ".topDepth", shallowScale, null);
	SetValue(boxOp + ".bottomWidth", inScale * inTaper, null);
	SetValue(boxOp + ".bottomDepth", shallowScale * inTaper, null);


	if(inSpin){
		SetValue(boxOp + ".topOffset_x", -90.255, null);
		SetValue(boxOp + ".topOffset_z", 180.318, null);
	}


	var matcolor = new Array(0.741, 0.653, 0.603, 0.845, 0.496, 0.300);

	var mat = shadowBox.addmaterial("Phong");

	mat.Shaders(0).diffuse.red.value = matcolor[0];
	mat.Shaders(0).diffuse.green.value = matcolor[1];
	mat.Shaders(0).diffuse.blue.value = matcolor[2];
	mat.Shaders(0).ambient.red.value = matcolor[3];
	mat.Shaders(0).ambient.green.value = matcolor[4];
	mat.Shaders(0).ambient.blue.value = matcolor[5];

	shadowBox.AddProperty("Display Property")
	shadowBox.properties("display").wirecol.value = 479;

	return shadowBox;

}

/*--------------------------------
 Hide Setup
--------------------------------*/
function HideSetup(inData){




	if(inData.parent.model.Groups.Item("Hidden")){
		inData.HiddenGroup = inData.parent.model.Groups.Item("Hidden");
		inData.HiddenGroup.AddMember(inData.Hidden);
	}
	else{
		for(var m = 0;m < inData.Hidden.count;m++){
			inData.Hidden(m).properties("visibility").viewvis.value = false;
		}
	}

	if(inData.parent.model.Groups.Item("Envelope_group")){

		inData.envGroup = inData.parent.model.Groups.Item("Envelope_group");
		inData.envGroup.AddMember(inData.Envelope);

	}

	return inData;
}