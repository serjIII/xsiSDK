 ////////////////////////////////////////
// Make Control Spline Component
// misner Dec 2003



	/*

	Used to setup control splines for layered deformation with precise control
	over evenly distributed sliding and offsets.  Especially useful for spline
	based facial setups.


	inCurveCollection = a collection of curves to hookup controllers to.
				  		A single curve can also be passed.  If multilple
						curves are passed they will be searched for matching
						start and end points to share Point Markers

	inNbDivisions	 = the number of equally spaced division along the curve
						to place Path Markers.
	inScale = the scale to draw the controllers at.

	inParent = the parent for the Point Marker Nodes.  If empty will be the Scene Root.

	inPointMarkerType = the type of control object for the points of the curves

							0 = No controller
							1 = Null Controller
							2 = Cube Controller
							3 = Square Controller
							4 = Pyramid Controller
							5 = Diamond Controller

	inPathMarkerType = the type of control object divided along the curve

							0 = No controller
							1 = Null Controller
							2 = Cube Controller
							3 = Square Controller
							4 = Pyramid Controller
							5 = Diamond Controller

	inOffsetMarkerType = the type of control object which is a child of the
					   PathMarkers for position and roll offsets.
					   Offsets will not be made if the PathMakerType is set to 0.

							0 = No controller
							1 = Null Controller
							2 = Cube Controller
							3 = Square Controller
							4 = Pyramid Controller
							5 = Diamond Controller



	inPointColor = the color of the point control objects.

	inPathColor = the color of the path control objects.

	inOffsetColor = the color of the offset control objects.


	=======================================
	Returns an Control Spline object where:

	inCSpline.PointControls = An XSI Collection of control objects for the points
					     	of the curves.
	inCSpline.PathControls = An XSI Collection of control objects path contrained
					     	to the curves.

	inCSpline.Controls = An XSI Collection of control objects that are children of path controls

	*/

//******************************************************************************
// String Constants (used to translate)
//******************************************************************************
var IDS_MAKE_CONTROL_SPLINE_TITLE		= 1166;

// Add a push method to the JScript Array Object
// (Array.Push was added in Jscript 5.5 but we cannot rely on this)
var push = function(item){return this[this.length++] = item;}
Array.prototype.push = push;

/*--------------------------------
 Make Control Splines
--------------------------------*/
function makeControlSplines(inCurveCollection, inNbDivisions, inScale, inParent, inPointMarkerType,
					inPathMarkerType, inOffsetMarkerType, inPointColor,
					inPathColor, inOffsetColor, inInspectUI){


	//arghandler converts object to collection -  retrieve the single object
	inParent = inParent(0);
	if(!inParent) inParent = ActiveSceneRoot;

	var cSpline = new Object;

	if(inInspectUI){

		var sel = GetValue("SelectionList");
		if(!sel){
			logmessage ("makeControlSplines requires a selection set of curves");
			return
		}
		var paths =  SIFilter (sel, siCurveFilter);
		if(!paths){
			logmessage ("makeControlSplines requires a selection set of curves");
			return
		}

		inCurveCollection = paths;

		var UI = get_ui();
		if(!UI){return}


		inNbDivisions = UI.Divisions;
		inScale = UI.Scale;
		inPointMarkerType = UI.PointType;
		inPathMarkerType = UI.PathType;
		inOffsetMarkerType = UI.OffsetType;
		inPointColor = UI.PointColor;
		inPathColor = UI.PathColor;
		inOffsetColor = UI.OffsetColor;

	}
	else{
		if(!inCurveCollection){return}
	}


	if (ClassName(inCurveCollection).type == "X3DObject"){
		var obj = inCurveCollection;
		inCurveCollection = new ActiveXObject("XSI.Collection");
		inCurveCollection.Add(obj);
	}


	cSpline.nbDivisions = inNbDivisions;
	cSpline.Curves = inCurveCollection;
	cSpline.PointType = inPointMarkerType;
	cSpline.PathType = inPathMarkerType;
	cSpline.OffsetType = inOffsetMarkerType;
	cSpline.PointColor = inPointColor;
	cSpline.PathColor = inPathColor;
	cSpline.OffsetColor = inOffsetColor;

	cSpline.Scale 	= inScale  ? inScale  : 1;
	cSpline.Parent 	= inParent ? inParent : ActiveSceneRoot;	

	if(inPointMarkerType > 0){


		cSpline = GetUniquePositions(cSpline);
		cSpline = HookUpPointControllers(cSpline);
	}


	if(inPathMarkerType > 0){


		cSpline = HookUpPathControllers(cSpline);

		if(inOffsetMarkerType > 0){
			cSpline = HookUpOffsetControllers(cSpline);
		}

	}

	return cSpline;
}
/*--------------------------------
 Get UI
--------------------------------*/
function get_ui()
{

	var sliders = ActiveSceneRoot.AddProperty("Custom_parameter_list",0,"Make Control Spline");

	var Divisions = sliders.AddParameter2("Divisions",siInt4 ,6,0,200,0,20,8,16,"Divisions","Divisions");
	var Scale = sliders.AddParameter2("Scale",siDouble ,1,0.001,1000,0.001,10,8,16,"Scale","Scale");
	var PointType = sliders.AddParameter2("PointType",siInt4 ,5,0,5,0,5,8,16,"Point Type","Point Type");
	var PointTypeItems = Array("No controller",0,"Null Controller",1,"Cube Controller",2,"Square Controller",3,"Pyramid Controller",4,"Diamond Controller",5);
	var PathType = sliders.AddParameter2("PathType",siInt4 ,1,0,5,0,5,8,16,"PathType","PathType");
	var PathTypeItems = Array("No controller",0,"Null Controller",1,"Cube Controller",2,"Square Controller",3,"Pyramid Controller",4,"Diamond Controller",5);
	var OffsetType = sliders.AddParameter2("OffsetType",siInt4 ,2,0,5,0,5,8,16,"OffsetType","OffsetType");
	var OffsetTypeItems = Array("No controller",0,"Null Controller",1,"Cube Controller",2,"Square Controller",3,"Pyramid Controller",4,"Diamond Controller",5);
	
	var PointColor = sliders.AddParameter2("PointColor",siInt4 ,377,0,1023,0,1023,8,16,"Point Color","Point Color");
	var PointColorR = sliders.AddParameter3( "PointColorR", siDouble, .5, 0,1,false);
	var PointColorG = sliders.AddParameter3( "PointColorG", siDouble, .5, 0,1,false);
	var PointColorB = sliders.AddParameter3( "PointColorB", siDouble, .5, 0,1,false);

	var PathColor = sliders.AddParameter2("PathColor",siInt4 ,65,0,1023,0,1023,8,16,"Path Color","Path Color");
	var PathColorR = sliders.AddParameter3( "PathColorR", siDouble, .5, 0,1,false);
	var PathColorG = sliders.AddParameter3( "PathColorG", siDouble, .5, 0,1,false);
	var PathColorB = sliders.AddParameter3( "PathColorB", siDouble, .5, 0,1,false);
	
	var OffsetColor = sliders.AddParameter2("OffsetColor",siInt4 ,560,0,1023,0,1023,8,16,"Offset Color","Offset Color");
	var OffsetColorR = sliders.AddParameter3( "OffsetColorR", siDouble, .5, 0,1,false);
	var OffsetColorG = sliders.AddParameter3( "OffsetColorG", siDouble, .5, 0,1,false);
	var OffsetColorB = sliders.AddParameter3( "OffsetColorB", siDouble, .5, 0,1,false);
	
	var layout = sliders.PPGLayout;
	var oItem;
	
	layout.Clear();
	
	//Set Help Path
    layout.SetAttribute( siUIHelpFile, "<FactoryPath>/Doc/<DocLangPref>/xsidocs.chm::/animtoolbar63.htm" );

	layout.AddGroup("Controller Setup");
	oItem = layout.AddItem("Divisions");
	oItem = layout.AddItem("Scale");
	layout.EndGroup();
	layout.AddGroup("Control Icon Types");
	oItem = layout.AddEnumControl("PointType",PointTypeItems,"PointType",siControlCombo);
	oItem = layout.AddEnumControl("PathType",PathTypeItems,"PathType",siControlCombo);
	oItem = layout.AddEnumControl("OffsetType",OffsetTypeItems,"OffsetType",siControlCombo);
	layout.EndGroup();
	layout.AddGroup("Control Icon Colors");
	
	layout.AddGroup("Point Color");	
	oItem = layout.AddColor( "PointColorR", "",false )
	oItem.SetAttribute("NoLabel", true )
	oItem = layout.AddItem("PointColor");
	layout.EndGroup();	
	
	layout.AddGroup("Path Color");	
	oItem = layout.AddColor( "PathColorR", "",false )
	oItem.SetAttribute("NoLabel", true )
	oItem = layout.AddItem("PathColor");
	layout.EndGroup();	
	
	layout.AddGroup("Offset Color");		
	oItem = layout.AddColor( "OffsetColorR", "",false )
	oItem.SetAttribute("NoLabel", true )
	oItem = layout.AddItem("OffsetColor");
	layout.EndGroup();	
	layout.EndGroup();

	layout.Logic = 	OnInit.toString() + 
			WirecolortoRGB.toString() +
			RGBtoWirecolor.toString() +
			RGBtoWirecolor.toString() +
			PointColor_OnChanged.toString() +
			PathColor_OnChanged.toString() +
			OffsetColor_OnChanged.toString() +
			PointColorR_OnChanged.toString() +
			PointColorG_OnChanged.toString() +
			PointColorB_OnChanged.toString() +
			PathColorR_OnChanged.toString() +
			PathColorG_OnChanged.toString() +
			PathColorB_OnChanged.toString() +
			OffsetColorR_OnChanged.toString() +
			OffsetColorG_OnChanged.toString() +
			OffsetColorB_OnChanged.toString() +
			PointType_OnChanged.toString() +
			PathType_OnChanged.toString() +
			OffsetType_OnChanged.toString();


	layout.Language = "JScript";

	try{
		inspectobj( sliders, "", XSIUtils.Translate( IDS_MAKE_CONTROL_SPLINE_TITLE, "XSISCRIPTS" ), siModal );
	}
	catch(e){
		deleteobj(sliders);
		logmessage ( e.description, siError);
		return;
	}

	var returnObj = new Object;

	returnObj.Divisions = Divisions.value;
	returnObj.Scale = Scale.value;
	returnObj.PointType = PointType.value;
	returnObj.PathType = PathType.value;
	returnObj.OffsetType = OffsetType.value;
	returnObj.PointColor = PointColor.value;
	returnObj.PathColor = PathColor.value;
	returnObj.OffsetColor = OffsetColor.value;

	deleteobj(sliders);

	return returnObj;

}

//////////////////////////////////////////////////////////
//
// Wire Color to RGB (FOR UI LOGIC)
//
// Wirecolor is a 10 bit value (0 to 1023), with the least
// significant bit igonred. 
//
// Each of the R,G,B channels is 3 bits (a number from 0 to 7).
// Encoded as:
//
// bit   9  8  7  6  5  4  3  2  1  0  
//     |B2|B1|B0|G2|G1|G0|R2|R1|R0| 0|
//     ---------|--------|--------|--|
//        blue    green     red 
//
///////////////////////////////////////////////////////////
function WirecolortoRGB(oWireColor,oR,oG,oB)
{
	oR.value = ((oWireColor >>> 1) & 0x7)/7;
	oG.value = ((oWireColor >>> 4) & 0x7)/7;
	oB.value = ((oWireColor >>> 7) & 0x7)/7;
}

//////////////////////////////////////////////////////////
//
// RGB to Wire Color (FOR UI LOGIC)
//
// Wirecolor is a 10 bit value (0 to 1023), with the least
// significant bit igonred. 
// Each of the R,G,B channels is 3 bits (a number from 0 to 7).
// Encoded as:
//
// bit   9  8  7  6  5  4  3  2  1  0  
//     |B2|B1|B0|G2|G1|G0|R2|R1|R0| 0|
//     ---------|--------|--------|--|
//        blue    green     red 
//
// To convert to wirecolor, trucate each channel down to 3 bits
// and leftshift 1bit for Red, 4bits for Green and 7bits for blue.
//
///////////////////////////////////////////////////////////
function RGBtoWirecolor(oWireColor,R,G,B)
{
	//convert RGB to wirecolor
	var wirecolR,wirecolG,wirecolB;

	wirecolR = (Math.round(R * 7)) << 1
	wirecolG = (Math.round(G * 7)) << 4
	wirecolB = (Math.round(B * 7)) << 7

	oWireColor.value = wirecolR | wirecolG | wirecolB;
}

//
// UI LOGIC
//
function OnInit()
{
	PointColor_OnChanged();
	PathColor_OnChanged();
	OffsetColor_OnChanged();
	PointType_OnChanged();
}

function PointColor_OnChanged(){	WirecolortoRGB(PPG.PointColor, PPG.PointColorR, PPG.PointColorG, PPG.PointColorB); }
function PathColor_OnChanged(){		WirecolortoRGB(PPG.PathColor, PPG.PathColorR, PPG.PathColorG, PPG.PathColorB); }
function OffsetColor_OnChanged(){	WirecolortoRGB(PPG.OffsetColor, PPG.OffsetColorR, PPG.OffsetColorG, PPG.OffsetColorB); }

function PointColorR_OnChanged(){	RGBtoWirecolor(PPG.PointColor, PPG.PointColorR, PPG.PointColorG, PPG.PointColorB); }
function PointColorG_OnChanged(){	RGBtoWirecolor(PPG.PointColor, PPG.PointColorR, PPG.PointColorG, PPG.PointColorB); }
function PointColorB_OnChanged(){	RGBtoWirecolor(PPG.PointColor, PPG.PointColorR, PPG.PointColorG, PPG.PointColorB); }

function PathColorR_OnChanged()	{	RGBtoWirecolor(PPG.PathColor, PPG.PathColorR, PPG.PathColorG, PPG.PathColorB); }
function PathColorG_OnChanged()	{	RGBtoWirecolor(PPG.PathColor, PPG.PathColorR, PPG.PathColorG, PPG.PathColorB); }
function PathColorB_OnChanged()	{	RGBtoWirecolor(PPG.PathColor, PPG.PathColorR, PPG.PathColorG, PPG.PathColorB); }

function OffsetColorR_OnChanged(){	RGBtoWirecolor(PPG.OffsetColor, PPG.OffsetColorR, PPG.OffsetColorG, PPG.OffsetColorB); }
function OffsetColorG_OnChanged(){	RGBtoWirecolor(PPG.OffsetColor, PPG.OffsetColorR, PPG.OffsetColorG, PPG.OffsetColorB); }
function OffsetColorB_OnChanged(){	RGBtoWirecolor(PPG.OffsetColor, PPG.OffsetColorR, PPG.OffsetColorG, PPG.OffsetColorB); }

function PointType_OnChanged(){		PPG.PointColor.Enable(PPG.PointType!=0);
					PPG.PointColorR.Enable(PPG.PointType!=0);}
function PathType_OnChanged(){		PPG.PathColor.Enable(PPG.PathType!=0);
					PPG.PathColorR.Enable(PPG.PathType!=0);}
function OffsetType_OnChanged(){	PPG.OffsetColor.Enable(PPG.OffsetType!=0);
					PPG.OffsetColorR.Enable(PPG.OffsetType!=0);}


/*--------------------------------
 Get Unique Positions
--------------------------------*/
function GetUniquePositions(inCSpline){


	var StartEndPositions = new Array();
	var OtherPositions = new Array();
	var NonRepeatingPositions = new Array();


	// cycle through spline objects

	inCSpline.EndPoints = new Array();
	inCSpline.CurveLookUp = new Array();
	inCSpline.IndexLookUp = new Array();
	inCSpline.NonEndNodes = new Array();


	for (var o = 0; o < inCSpline.Curves.count; o++){



		var geom  = inCSpline.Curves(o).activeprimitive.geometry


		var pArray = geom.points.positionarray.toArray();
		var nb = pArray.length/3

		var gtrans = inCSpline.Curves(o).Kinematics.Global.Transform;


		// if your curve has less that 4 points it will have lots of
		// point doubling, so it's best to treat the whole curves
		// as start and end points.

		if(nb > 4){

			var startPoint = readPosition(pArray, 0, gtrans)
			var endPoint = readPosition(pArray, nb - 1, gtrans)


			inCSpline.EndPoints.push(startPoint);
			inCSpline.EndPoints.push(endPoint);

			inCSpline.CurveLookUp.push(inCSpline.Curves(o));
			inCSpline.CurveLookUp.push(inCSpline.Curves(o));

			inCSpline.IndexLookUp.push(0);
			inCSpline.IndexLookUp.push(nb - 1);


			for(var i=1;i < nb - 1; i++){
				var nonEndPoint = readPosition(pArray, i, gtrans);
				var NonEndNode = new Node(nonEndPoint, inCSpline.Curves(o), i);
				inCSpline.NonEndNodes.push(NonEndNode);
			}

		}
		else{

			for(var i=0;i < nb; i++){

				var Point = readPosition(pArray, i, gtrans);
				inCSpline.EndPoints.push(Point);
				inCSpline.CurveLookUp.push(inCSpline.Curves(o));
				inCSpline.IndexLookUp.push(i);
			}

		}
	}

	// now remove duplicates from the StartEndPositions
	inCSpline = RemoveDuplicatePoints(inCSpline);


	return inCSpline;

}
/*--------------------------------
 Remove Duplicate Points
--------------------------------*/
function RemoveDuplicatePoints(inCSpline){


	// this is a system that takes a list of nodes and goes through them
	// looking for a proximity match.  All object within the tolerance
	// promity share a controller.  So new controllers are added if you have no matches
	// and controller groups are added to when you arrive at matches.



	// first make a pile of Nodes
	var Nodes = new Array();

	for(var p=0;p < inCSpline.EndPoints.length; p++){
		Nodes[p] = new Node(inCSpline.EndPoints[p], inCSpline.CurveLookUp[p], inCSpline.IndexLookUp[p]);
	}


	// now cycle through the nodes, comparing each one with the rest of the pile
	var CurrentController = 0;
	var tolerance = .01; // ie to be considered matchs, points need to be snapped.
	var testLen = XSIMath.CreateVector3();


	for(var n=0;n < Nodes.length; n++){

		var activeNode = Nodes[n];

		// if you already have a Controller, don't bother doing any comparision
		if(activeNode.Controller || activeNode.Controller == 0){
			continue;
		}
		var match = false;
		for(var c=n+ 1;c < Nodes.length;c++){

			var compareNode = Nodes[c];


			testLen.Sub(activeNode.Vector, compareNode.Vector);

			if(testLen.Length() < tolerance){

				// if compareNode has a Controller, use that
				// otherwise get a new controller and increment the CurrentController.

				if(activeNode.Controller || activeNode.Controller == 0){
					compareNode.Controller = activeNode.Controller;

				}
				else if(compareNode.Controller || compareNode.Controller == 0){
					activeNode.Controller = compareNode.Controller;

				}
				else{
					// there's a match, but neither of them have controllers yet
					activeNode.Controller = CurrentController;
					compareNode.Controller = CurrentController;

				}
				match = true;
				Nodes[c] = compareNode;
			}
		}

		if(match){
			// you found a match, increment the controller number to be assigned next time
			Nodes[n] = activeNode;
			CurrentController++;
		}
		else{
			// so you didn't find a match, this Node needs a fresh controller
			activeNode.Controller = CurrentController;
			Nodes[n] = activeNode;
			CurrentController++;
		}
	}

	// now make a list of controllers and the nodes grouped into them

	inCSpline.EndControllers = new Array();
	for(c = 0; c < CurrentController;c++){
		inCSpline.EndControllers[c] = new Array();
	}

	for(var n=0;n < Nodes.length; n++){
		var currentControl = Nodes[n].Controller;
		inCSpline.EndControllers[currentControl].push(Nodes[n]);
	}

	return inCSpline;

}
/*--------------------------------
 Node Object
--------------------------------*/
function Node(inVector, inCurve, inPointID, inController){

	this.Vector = inVector;
	this.Curve = inCurve;
	this.PointID = inPointID;
	this.Controller = inController;

}
/*--------------------------------
 Hookup Point Controllers
--------------------------------*/
function HookUpPointControllers(inCSpline){


	// first hookup Controllers on the Non End Points


	inCSpline.PointControls = new ActiveXObject("XSI.Collection");

	for(var i=0;i < inCSpline.NonEndNodes.length; i++){


		var controlTrans = XSIMath.CreateTransform();

		var node = inCSpline.NonEndNodes[i];

		controlTrans.SetTranslation(node.Vector);

		var num = i + 1;

		var control = GetControl(inCSpline.Parent, inCSpline.PointType , controlTrans, inCSpline.Scale,
							   inCSpline.PointColor, "PointControl", num);

		inCSpline.PointControls.Add(control);

		ApplyOp("ClusterCenter", node.Curve + ".pnt["+node.PointID+"];" + control, 3, siPersistentOperation);


	}



	// now hookup Controllers on the End Points

	for(var i=0;i < inCSpline.EndControllers.length; i++){

		// each EndController is an array of nodes (at least one) that attach
		// to a single controller.

		var nodes = inCSpline.EndControllers[i];

		var controlTrans = XSIMath.CreateTransform();
		controlTrans.SetTranslation(nodes[0].Vector);


		var num = i + 1;

		var control = GetControl(inCSpline.Parent, inCSpline.PointType , controlTrans, inCSpline.Scale,
							   inCSpline.PointColor, "PointControl", num);
		inCSpline.PointControls.Add(control);


		// now cycle through all the nodes hooking them up
		for(n =0; n < nodes.length;n++){
			ApplyOp("ClusterCenter", nodes[n].Curve + ".pnt["+nodes[n].PointID+"];" + control, 3, siPersistentOperation);
			refresh();
		}
	}


	return inCSpline;
}
/*--------------------------------
 Hookup Path Controllers
--------------------------------*/
function HookUpPathControllers(inCSpline){

	inCSpline.nbDivisions = inCSpline.nbDivisions + 2;

	inCSpline.PathControls = new ActiveXObject("XSI.Collection");

	for (var o = 0; o < inCSpline.Curves.count; o++){

		for(var i=1;i < inCSpline.nbDivisions-1; i++){

			var perc = i/(inCSpline.nbDivisions - 1) * 100;
			var num = i + 1;

			var control = GetControl(inCSpline.Parent, inCSpline.PathType , null, inCSpline.Scale,
						 inCSpline.PathColor, "PathControl" + num);


			var pathCns = control.Kinematics.AddConstraint("Path", inCSpline.Curves(o), false)
			pathCns.tangent = true;
			pathCns.perc.Value = perc;
			pathCns.upvct_active = true;
			pathCns.lockcnsed = true;

			inCSpline.PathControls.Add(control);
		}

	}


	return inCSpline;

}
/*--------------------------------
 Hookup Offset Controllers
--------------------------------*/
function HookUpOffsetControllers(inCSpline){

	inCSpline.Controls =  new ActiveXObject("XSI.Collection");

	for(var i=0;i < inCSpline.PathControls.count; i++){

		var num = i + 1;
		var gTrans = inCSpline.PathControls(i).Kinematics.Global.Transform;

		var control = GetControl(inCSpline.PathControls(i), inCSpline.OffsetType, gTrans, inCSpline.Scale,
					 inCSpline.OffsetColor, "Offset" + num);

		control.Kinematics.Global.Transform = gTrans;
		inCSpline.Controls.Add(control);		
	}

	var aEmptyRef = new Array();		
	inCSpline.EnvGroup = inCSpline.Parent.model.AddGroup(aEmptyRef);
	inCSpline.EnvGroup.name = "envelope_group";
	
	inCSpline.EnvGroup.AddMember(inCSpline.Controls);
	
	return inCSpline;
}
/*--------------------------------
 Get Control
--------------------------------*/
function GetControl(inParent, inType, inTransform, inScale, inColor, inName){

	var pos = XSIMath.CreateVector3();

	if(inTransform){inTransform.GetTranslation(pos);}

	switch (inType){

  	 case 1:
  	 	// Null Controller
		var Control = inParent.AddNull(inName);

		Control.size = inScale;
		if(inTransform){Control.Kinematics.Global.Transform = inTransform;}
		
		Control.AddProperty("Display Property")
		Control.properties("display").wirecol.value = inColor;
		
	 break

	 case 2:
	 	// Cube Controller
		var Control = makeRigIcon(inParent, 3, pos.x, pos.y, pos.z, inScale, inScale, inScale, inColor, inName);
  	 break

	 case 3:
	 	// Square Controller
		var Control = makeRigIcon(inParent, 0, pos.x, pos.y, pos.z, inScale, inScale, inScale, inColor, inName);
  	 break

	 case 4:
	 	// Pyramid Controller
		var Control = makeRigIcon(inParent, 4, pos.x, pos.y, pos.z, inScale, inScale, inScale, inColor, inName);
  	 break

	 case 5:
	 	// Diamond Controller
		var Control = makeRigIcon(inParent, 8, pos.x, pos.y, pos.z, inScale, inScale, inScale, inColor, inName);
  	 break

	}

	return Control ;

}
/*--------------------------------
 Read Position
--------------------------------*/
function readPosition(inArray, inIndex, inTrans){


	var point = XSIMath.CreateVector3();

	point.x = inArray[inIndex * 3]		// the x
	point.y = inArray[inIndex * 3 + 1]		// the y
	point.z = inArray[inIndex * 3 + 2]		// the z

	var newPoint = XSIMath.MapObjectPositionToWorldSpace( inTrans, point);

	return newPoint;
}


