 ////////////////////////////////////////
// Make Spine Rigging Component
// misner Dec 2003



	/*

	inModel = the model of the hand guide
	inParent = the object to make the new hand under

	inNbVertebra = the number of Vertebra on the spine
	inType  = is the type of Spine and controls used. to use implicit Vertebra controls or not.  If not, polygons are used.

		     0 > make quaternion spine with polygon divisions
  		     1 > make quaternion spine with implicit divisions
		     2 > make skeleton spine

	inStretch = make a stretchy spine that doesn't clip length.

	inBase = bottom of the spine, should be pointing y+ along the path of the spine.
	inTop = top of the spine, should be pointing y+ out from the Curve.

	inSpineDepth = goal for a 4 point bezier going through the spine.  If empty will be computed automatically.
	inTopDepth = goal for a 4 point bezier going through the spine.  If empty will be computed automatically.

	inChestTop = Top of chest goal.  If filled will use the spine top as a position reference
	             only and build an icon from spineTop to chestTop.  If empty there will be no
	             extra icon on top of the spine, only an implicit cube will be used.

	inSliders =  A slider PPG to put the spine parameters on.  If none is supplied a slider page will be
	  		 added on the spine Curve

	inShadowType = the type of shadow rig to constrain to the arm
		   	0 > no shadow
			1 > SI|3D skeleton shadow rig
			2 > XSI  skeleton shadow rig						
			3 > Null shadow rig
			4 > Box shadow rig
			
	inShadowParent = parent of the shadow rig hiearchy.  If empty, no shadow rig will be generated.


	=======================================
	Returns an Spine object where:


	Spine.Curve =  the Curve object of the newly created spine
	Spine.TopVertebra = the top Vertebra of the new spine.  If a chest top object was supplied, a chest icon
		 		  will be returned, otherwise it will be an implicit cube.
	Spine.Shadows = a collection of box shadows
	Spine.Envelope = is a collection of objects to be Enveloped
	Spine.Vertebra = a collection of spine vertebra

	*/

// Add a push method to the JScript Array Object
// (Array.Push was added in Jscript 5.5 but we cannot rely on this)
var push = function(item){return this[this.length++] = item;}
Array.prototype.push = push;

/*--------------------------------
 Make Spine
--------------------------------*/
function makeSpine(inModel, inParent, inNbVertebra, inType, inStretch, inBase, inTop, inBaseDepth, inTopDepth, inChestTop, inSliders,
                   inShadowType, inShadowParent, inVertebraName, inCharacterSetName, inShadowCharacterSetName )
{

	var l_aArgsToConvert = Array(0,1,5,6,7,8,9,10,12);
	var a;
	for (i = 0; i < l_aArgsToConvert.length; i++)
	{
		a = l_aArgsToConvert[i];
		if(arguments[a]) { arguments[a] = arguments[a](0);}	//extract first object from coll.
	}

	//check required arguments
	var l_aRequiredArgs = Array(1,5,6,7,8);
	var l_bExit;
	for (i = 0; i < l_aRequiredArgs.length; i++)
	{
		a = l_aRequiredArgs[i];
		if(!arguments[a]){ logmessage("makeSpine: argument " + a + " is invalid", siError); l_bExit = true;	}
	}
	if(l_bExit) return;

	var spine = new Object();

	spine.Envelope = new ActiveXObject("XSI.Collection");
	spine.Hidden = new ActiveXObject("XSI.Collection");

	spine.nb = inNbVertebra
	spine.parent = inParent;
	spine.sliders = inSliders;
	spine.stretch = inStretch;
	spine.Type = inType;

    spine.vertebraName = inVertebraName;

    spine.CharacterSetName = inCharacterSetName;
    spine.ShadowCharacterSetName = inShadowCharacterSetName;

	spine.ShadowType = inShadowType;
	spine.ShadowParent = inShadowParent;

	spine.base = inBase;
	spine.top = inTop;
	spine.baseDepth = inBaseDepth;
	spine.topDepth = inTopDepth;
	spine.chestTop = inChestTop;

	spine = getPositions(spine);
	spine = makeCurve(spine);

	if(spine.Type == 2){
		spine = drawSkeleton(spine);
	}
	else{
		spine = bind_Curve(spine);
		spine = createTopVertebra(spine);
		spine = makeVertebra(spine);
	}

	if(spine.ShadowType >= 1 && spine.ShadowType <= 3){
		spine = makeSkelShadows(spine);
	}
	if(spine.ShadowType > 3){
		spine = makeBoxShadows(spine);
	}

	spine = HideSetup(spine);

	return spine;

}
/*--------------------------------
 Hide Setup
--------------------------------*/
function HideSetup(inSpine){

	if(inSpine.parent.model.Groups.Item("Hidden")) {
		if(inSpine.Hidden.count > 0){
			inSpine.HiddenGroup = inSpine.parent.model.Groups.Item("Hidden");
			inSpine.HiddenGroup.AddMember(inSpine.Hidden);
		}
	}
	else {
		Logmessage(inSpine.Hidden(m).FullName);
		for(var m = 0;m < inSpine.Hidden.count;m++){
			inSpine.Hidden(m).properties("visibility").viewvis.value = false;
		}
	}

	if(inSpine.parent.model.Groups.Item("Envelope_group")) {
		if(inSpine.Envelope){
			inSpine.envGroup = inSpine.parent.model.Groups.Item("Envelope_group");
			inSpine.envGroup.AddMember(inSpine.Envelope);
		}
	}

	return inSpine;
}

/*--------------------------------
 Get Positions
--------------------------------*/
function getPositions(inSpine){

	inSpine.pos = new Array();
	inSpine.objList = new Array();

	inSpine.objList[0] = inSpine.base;
	inSpine.objList[1] = inSpine.top;

	inSpine.pos[0] = XSIMath.CreateVector3();
	inSpine.pos[1] = XSIMath.CreateVector3();

	inSpine.base.Kinematics.Global.Transform.GetTranslation(inSpine.pos[0]);

	inSpine.objList[0].Kinematics.Global.Transform.GetTranslation(inSpine.pos[0]);
	inSpine.objList[1].Kinematics.Global.Transform.GetTranslation(inSpine.pos[1]);


	if(inSpine.baseDepth && inSpine.topDepth){

		inSpine.objList[2] = inSpine.baseDepth;
		inSpine.objList[3] = inSpine.topDepth;

		inSpine.pos[2] = XSIMath.CreateVector3();
		inSpine.pos[3] = XSIMath.CreateVector3();

		inSpine.objList[2].Kinematics.Global.Transform.GetTranslation(inSpine.pos[2]);
		inSpine.objList[3].Kinematics.Global.Transform.GetTranslation(inSpine.pos[3]);

	}
	else{
		inSpine = calculateDepths(inSpine);

	}

	if(inSpine.chestTop){

		inSpine.objList[4] = inSpine.chestTop;
		inSpine.pos[4] = XSIMath.CreateVector3();
		inSpine.objList[4].Kinematics.Global.Transform.GetTranslation(inSpine.pos[4]);

	}

	return inSpine;
}

/*--------------------------------
 Calculate Depths
--------------------------------*/
function calculateDepths(inSpine){

	// if you don't have the depths (points between the bottom and top of the
	// spine you need to calculate them by heuristic of 40% and 60% between
	// these two points.

	inSpine.pos[2] = XSIMath.CreateVector3();
	inSpine.pos[3] = XSIMath.CreateVector3();

	inSpine.pos[2].LinearlyInterpolate(inSpine.pos[0], inSpine.pos[1], .40);
	inSpine.pos[3].LinearlyInterpolate(inSpine.pos[0], inSpine.pos[1], .60);

	inSpine.baseDepth = inSpine.objList[0].AddPrimitive("Null", "BaseDepth");
	inSpine.topDepth = inSpine.objList[1].AddPrimitive("Null", "TopDepth");

	var dist = XSIMath.CreateVector3();
	dist.Sub(inSpine.pos[0], inSpine.pos[1]);

	inSpine.baseDepth.Size.value = dist.Length() * .1
	inSpine.topDepth.Size.value = dist.Length() * .1

	var t1 = XSIMath.CreateTransform();
	t1.SetTranslation(inSpine.pos[2])
	inSpine.baseDepth.Kinematics.global.transform = t1

	t1.SetTranslation(inSpine.pos[3]);
	inSpine.topDepth.Kinematics.global.transform = t1

	inSpine.baseDepth.AddProperty("Display Property");
	inSpine.baseDepth.properties("display").wirecol.value = 770;


	inSpine.topDepth.AddProperty("Display Property");
	inSpine.topDepth.properties("display").wirecol.value = 253;


	inSpine.objList[2] = inSpine.baseDepth;
	inSpine.objList[3] = inSpine.topDepth;

	return inSpine;

}
/*--------------------------------
 Bind Curve
--------------------------------*/
function makeCurve(inSpine){

	var CurvePoints = new Array();

	CurvePoints = pushCurve(CurvePoints, inSpine.pos[0]);
	CurvePoints = pushCurve(CurvePoints, inSpine.pos[2]);
	CurvePoints = pushCurve(CurvePoints, inSpine.pos[3]);
	CurvePoints = pushCurve(CurvePoints, inSpine.pos[1]);

 	var knots = new Array(0,0,0,1,1,1);

	inSpine.Curve = ActiveSceneRoot.AddNurbsCurve(CurvePoints, knots, 0, 3, 0 ,siSINurbs, "spinecurve");
        
	if(inSpine.ShadowType >= 1 && inSpine.ShadowType <= 3&&inSpine.Type!=2){
		inSpine.ShadowCurve = inSpine.parent.AddNurbsCurve(CurvePoints, knots, 0, 3, 0 ,siSINurbs, "shadowspinecurve");
	}
	
	// get the length
	inSpine.length = inSpine.Curve.ActivePrimitive.Geometry.Curves(0).length;


	// if you are just tracing a skeleton, keep the curve under the scene root to read positions easier
	if(inSpine.Type != 2){

		// now you've read the length you can set parenting (this avoided scaling causing a misread)
		inSpine.parent.AddChild(inSpine.Curve);

		inSpine.Curve.AddProperty("Display Property");
		inSpine.Curve.properties("display").wirecol.value = 49;
	}

	return inSpine;
}
/*--------------------------------
 Draw Skeleton
--------------------------------*/
function drawSkeleton(inSpine){

	var CurvePos = new Array();

 	for(var i = 0; i < inSpine.nb + 1; i++){
		var cPos = new VBArray(inSpine.Curve.ActivePrimitive.Geometry.Curves(0).EvaluatePositionFromPercentage((i/inSpine.nb) * 100));
		CurvePos[i] = cPos.getItem(0);
 	}

	inSpine.normalPlane = XSIMath.CreateVector3();
	inSpine.normalPlane.Set(1,0,0);
	inSpine.Root = inSpine.parent.Add2DChain(CurvePos[0], CurvePos[1], inSpine.normalPlane, 3)
	AlignFirstBone(inSpine.Root);	

	for(var i = 2; i < CurvePos.length; i++){
		inSpine.Root.AddBone(CurvePos[i], 2, "tempName");
	}

	if(inSpine.chestTop){
		inSpine.Root.AddBone(inSpine.pos[4], 2, "tempName");
	}

	inSpine.Skel = GetSkeleton(inSpine.Root);

	inSpine.Eff = inSpine.Skel(inSpine.Skel.Count - 1);
	inSpine.TopVertebra = inSpine.Eff;

	setChainScale(inSpine.Skel, inSpine.length * .4);

    var previousCharacterSet = null;
	for(var f = 0; f < inSpine.Skel.Count; f++){
		if(f==0){

			inSpine.Hidden.Add(inSpine.Skel(f));
			inSpine.Skel(f).name = "SpineEff";
		}

		else if(f==inSpine.Skel.count-1){
			inSpine.Skel(f).name = "SpineRoot";
		}
		else{
			inSpine.Envelope.Add(inSpine.Skel(f));
			inSpine.Skel(f).name = "Lumbar" + f;
			addMarkingSet(inSpine.Skel(f), null, 1, null, inSpine.CharacterSetName);
		}
	}

	// feign vertebra so the belly op can hook up to it
	inSpine.Vertebra = new ActiveXObject("XSI.Collection");
	for(var f = 2; f < inSpine.Skel.count; f++){
		inSpine.Vertebra.Add(inSpine.Skel(f));
	}

	DeleteObj(inSpine.Curve);

	return inSpine;
}

/*--------------------------------
 Set Chain Scale
-------------------------------*/
function setChainScale(inSkel, inScale){

    for(var f = 0; f < inSkel.count; f++){

	    inSkel(f).shadow_icon.value  = 1;
	    inSkel(f).primary_icon.value  = 0;


	    if(f==0 || f==inSkel.count-1){
		    inSkel(f).shadow_scaleX.value  = inScale * .5;
		    inSkel(f).radius.value  = inScale * .5;
		    inSkel(f).shadow_scaleZ.value  = inScale * .5;
	    }
	    else{
		    inSkel(f).radius.value  = inScale;
		    inSkel(f).shadow_scaleZ.value  = inScale;
	    }
    }
}
/*--------------------------------
 Push Curve
--------------------------------*/
function pushCurve(inCurve, inVec){

	inCurve.push(inVec.x);
	inCurve.push(inVec.y);
	inCurve.push(inVec.z);
	inCurve.push(1);

	return inCurve;
}
/*--------------------------------
 Bind Curve
--------------------------------*/
function bind_Curve(inSpine){

	if(!inSpine.sliders){
		inSpine.sliders = inSpine.Curve.AddProperty("Custom_parameter_list",false,"Spine_Control");
	}

	inSpine.scaleSlider = inSpine.sliders.AddParameter ("spine_scale", siDouble, siClassifVisualization , siAnimatable, "spine_scale", "spine_scale",false, 1, .01, 10000,.01,10)
	inSpine.volumeSlider = inSpine.sliders.AddParameter ("volume_factor", siDouble, siClassifVisualization , siAnimatable, "volume_factor", "volume_factor",false, 0, -10000, 10000,0,10)

	if(inSpine.stretch == 0){

		inSpine.CurveOp = ApplyOp ("SpineCurve", inSpine.Curve +","+ inSpine.base +","+ inSpine.baseDepth +","+ inSpine.topDepth +","+ inSpine.top)(0);
		SetValue (inSpine.CurveOp + ".lgoal", inSpine.length);
		AddExpr (inSpine.CurveOp + ".lScale", inSpine.scaleSlider, true);
	}
	else{

		ApplyOp("ClusterCenter", inSpine.Curve + ".pnt[0];" + inSpine.base, 3, siPersistentOperation);
		ApplyOp("ClusterCenter", inSpine.Curve + ".pnt[1];" + inSpine.baseDepth, 3, siPersistentOperation	);
		ApplyOp("ClusterCenter", inSpine.Curve + ".pnt[2];" + inSpine.topDepth , 3, siPersistentOperation);
		ApplyOp("ClusterCenter", inSpine.Curve + ".pnt[3];" + inSpine.top, 3, siPersistentOperation);

	}

	return inSpine;

}
/*--------------------------------
bind_ShadowSpineCurve
--------------------------------*/
function bind_ShadowCurve(inSpine){

	if(!inSpine.sliders){
		inSpine.sliders = inSpine.Curve.AddProperty("Custom_parameter_list",false,"Spine_Control");
	}

	inSpine.scaleSlider = inSpine.sliders.AddParameter ("spine_scale", siDouble, siClassifVisualization , siAnimatable, "spine_scale", "spine_scale",false, 1, .01, 10000,.01,10)
	inSpine.volumeSlider = inSpine.sliders.AddParameter ("volume_factor", siDouble, siClassifVisualization , siAnimatable, "volume_factor", "volume_factor",false, 0, -10000, 10000,0,10)

	if(inSpine.stretch == 0){

		inSpine.ShadowCurveOp = ApplyOp ("SpineCurve", inSpine.ShadowCurve +","+ inSpine.base +","+ inSpine.baseDepth +","+ inSpine.topDepth +","+ inSpine.TopVertebra)(0);
		SetValue (inSpine.ShadowCurveOp + ".lgoal", inSpine.length);
		AddExpr (inSpine.ShadowCurveOp + ".lScale", inSpine.CurveOp + ".lScale", true);
	}
	else{
		ApplyOp("ClusterCenter", inSpine.ShadowCurve + ".pnt[0];" + inSpine.base, 3, siPersistentOperation);
		ApplyOp("ClusterCenter", inSpine.ShadowCurve + ".pnt[1];" + inSpine.baseDepth, 3, siPersistentOperation);
		ApplyOp("ClusterCenter", inSpine.ShadowCurve + ".pnt[2];" + inSpine.topDepth , 3, siPersistentOperation);
		ApplyOp("ClusterCenter", inSpine.ShadowCurve + ".pnt[3];" + inSpine.TopVertebra, 3, siPersistentOperation);

	}

	return inSpine;
}

/*--------------------------------
 Create Stretchy Spine Lower
--------------------------------*/

function applyStretchyVetebra(inVertebraColl,inCurve,inDivisions){

    var vertCount = 0;
    var bottomPerc;
    var topPerc;

    for(var ii=0; ii<inVertebraColl.count;ii++){ 

        if (inVertebraColl(ii).type != "bone"){continue;} 
        
        bottomPerc = 0.01 +((vertCount*100)/inDivisions)
        topPerc = ((vertCount+1)*100)/inDivisions
        
        if (topPerc>100){topPerc = 100;}
        if (bottomPerc>100){bottomPerc = 100;}
        if (bottomPerc<=0){bottomPerc = 0.01;}
        if (topPerc<=0){topPerc = 0.01;}
        
        var cOut = XSIFactory.CreateActiveXObject("XSI.Collection"); 
        var cIn = XSIFactory.CreateActiveXObject("XSI.Collection"); 

        cOut.add(inVertebraColl(ii).parameters("Length"));
        cIn.add(inCurve.ActivePrimitive);
        var opStretchVertebra = AddCustomOp ("RIG_stretchVertebraOp", cOut, cIn, "stretchVertebraOp");
        SetValue(opStretchVertebra + ".topPerc", topPerc, null);
        SetValue(opStretchVertebra + ".bottomPerc", bottomPerc, null);
        
        vertCount++;
    }
}


/*--------------------------------
 Create Top Vertebra
--------------------------------*/
function createTopVertebra(inSpine){

	// the top Vertebra functions as a marker to maintain a constant length.

	inSpine.vertDist = inSpine.length/inSpine.nb * .5;

	if(inSpine.chestTop){
		inSpine = getChestIcon(inSpine);
	}
	else{
		inSpine.TopVertebra = inSpine.Curve.AddPrimitive("Cube", "TopVertebra")
		inSpine.TopVertebra.length = inSpine.vertDist

		inSpine.TopVertebra.AddProperty("Display Property");
		inSpine.TopVertebra.properties("display").wirecol.value = 49;

	}

	inSpine.pathCns = ApplyPathConstraint(inSpine.TopVertebra, inSpine.Curve);

	// apply the scripted operator for fixed Spine length

	if(inSpine.stretch == 0){

		inSpine.lengthOp = ApplyOp ("FixedLength", inSpine.TopVertebra +","+ inSpine.Curve)(0)

		SetValue (inSpine.lengthOp + ".init_length", inSpine.length);
		AddExpr (inSpine.lengthOp + ".lScale", inSpine.scaleSlider, true);
	}
	else {
		inSpine.pathCns.perc.Value = 100;
		AddExpr (inSpine.scaleSlider , "ctr_dist( "+ inSpine.top +".kine.global , "+ inSpine.base +".kine.global )/ " + inSpine.length, true);
	}


	AddExpr (inSpine.TopVertebra + ".kine.local.sclx", "pow( " + inSpine.scaleSlider + ", " + inSpine.volumeSlider + " * -1  )", true);
	AddExpr (inSpine.TopVertebra + ".kine.local.sclz", "pow( " + inSpine.scaleSlider + ", " + inSpine.volumeSlider + " * -1  )", true);

	// if you used a chest Icon, the end will be misaligned because the orientation will be pointing
	// along the tangency of the end of the Curve.  So this is the correct location to position the end of the icon.


	if(inSpine.chestTop){

		var trans = inSpine.TopVertebra.Kinematics.Global.Transform;
		var p1 = XSIMath.MapWorldPositionToObjectSpace (trans, inSpine.pos[4]);

		SetValue(inSpine.boneIcon + ".top_point_x", p1.x, null);
		SetValue(inSpine.boneIcon + ".top_point_y", p1.y, null);
		SetValue(inSpine.boneIcon + ".top_point_z", p1.z, null);
	}

	inSpine.Envelope.add(inSpine.TopVertebra);
	
	return inSpine;
}

/*--------------------------------
 Apply Path Constraint
--------------------------------*/
function ApplyPathConstraint(inObject, inPath){

	// constrain the icon to the Curve

	var pathCns = inObject.Kinematics.AddConstraint("Path", inPath, false)

	pathCns.tangent = true;
	pathCns.Parameters("upvct_active").Value = true;

	//tangency
	pathCns.dirx.value = 0;
	pathCns.diry.value = 1;
	pathCns.dirz.value = 0;

	// affected axis
	pathCns.upx.value = 0;
	pathCns.upy.value = 0;
	pathCns.upz.value = -1;

	// point at
	pathCns.pointatx.value = 0;
	pathCns.pointaty.value = 0;
	pathCns.pointatz.value = -1;

	pathCns.lockcnsed.value = true

	return pathCns;
}

/*--------------------------------
 Get Chest Icon
--------------------------------*/
function getChestIcon(inSpine){

	var trans = XSIMath.CreateTransform();
	trans.SetTranslation(inSpine.pos[1]);

	inSpine.TopVertebra = inSpine.parent.AddGeometry ("Circle", "NurbsCurve", "ChestBone")
	inSpine.TopVertebra.Kinematics.Global.Transform = trans;

	inSpine.TopVertebra.AddProperty("Display Property");
	inSpine.TopVertebra.properties("display").wirecol.value = 49;

  	inSpine.boneIcon = ApplyOp("chestBone", inSpine.TopVertebra, 0)(0);

	SetValue(inSpine.boneIcon + ".width", 0.4, null);
	SetValue(inSpine.boneIcon + ".depth", 0.4, null);
	SetValue(inSpine.boneIcon + ".tip_height", 0.15, null);

	SetValue(inSpine.boneIcon + ".upx", 1, null);
	
	return inSpine;
}

/*--------------------------------
 Make Vertebra
--------------------------------*/
function makeVertebra(inSpine){

	var size = inSpine.nb - 1;

	inSpine.Vertebra = new ActiveXObject("XSI.Collection");

	for(var i = 0; i < inSpine.nb; i++){

		var vert;

		if (inSpine.Type  != 0){
			vert = inSpine.Curve.AddPrimitive("Cube", inSpine.vertebraName);
			inSpine.Vertebra.Add(vert);
			inSpine.Vertebra(i).Parameters("length").value = inSpine.vertDist;

		}
		else{
			vert = inSpine.Curve.AddGeometry("Cube", "MeshSurface",inSpine.vertebraName);
			inSpine.Vertebra.Add(vert);
			inSpine.Vertebra(i).length = inSpine.vertDist;
		}

		var pCnst = ApplyPathConstraint(inSpine.Vertebra(i), inSpine.Curve);

		var distributionPerc = (i+1)/(inSpine.nb + 1);
		//cannot use toFixed (requires JScript 5.5). Convert to string and truncate to 8 characters.
		distributionPerc = distributionPerc.toString();
		if( distributionPerc.length > 8 ) distributionPerc = distributionPerc.substr(0,8);

		AddExpr(pCnst + ".perc", inSpine.pathCns + ".perc * " +  distributionPerc, true);

		AddExpr(inSpine.Vertebra(i) + ".kine.local.sclx", "pow( " + inSpine.scaleSlider + ", " + inSpine.volumeSlider + " * -1 )", true);
		AddExpr(inSpine.Vertebra(i) + ".kine.local.sclz", "pow( " + inSpine.scaleSlider + ", " + inSpine.volumeSlider + " * -1 )", true);

		inSpine.Envelope.add(inSpine.Vertebra(i));

	}

	for(var i = 0; i < inSpine.nb; i++){
		var myOp = ApplyOp ("SpinePointAt", inSpine.Vertebra(i) +","+ inSpine.top +","+inSpine.base)(0);
		SetValue (myOp  + ".slider", 1 - (i)/(size + 2) - 1 /(size + 2));

		inSpine.Vertebra(i).AddProperty("Display Property");
		inSpine.Vertebra(i).properties("display").wirecol.value = 49;
	}

	var myOp = ApplyOp ("SpinePointAt", inSpine.TopVertebra +","+inSpine.top +","+inSpine.base)(0)
	SetValue(myOp  + ".slider", 0);

	if(inSpine.chestTop){

		var trans = inSpine.TopVertebra.Kinematics.Global.Transform;
		var p1 = XSIMath.MapWorldPositionToObjectSpace (trans, inSpine.pos[4]);

		SetValue(inSpine.boneIcon + ".top_point_x", p1.x, null);
		SetValue(inSpine.boneIcon + ".top_point_y", p1.y, null);
		SetValue(inSpine.boneIcon + ".top_point_z", p1.z, null);
	}

	return inSpine;
}

/*--------------------------------
 Make Skel Shadows
-------------------------------*/
function makeSkelShadows(inSpine){

	if(!inSpine.ShadowParent) return inSpine;

	inSpine.Shadows = new ActiveXObject("XSI.Collection");
	inSpine.Hidden = new ActiveXObject("XSI.Collection");

	if(inSpine.Type == 2){
		inSpine.ShadowSpine = makeShadowChain(inSpine.Skel, inSpine.ShadowParent, inSpine.ShadowType==1 /*SI3D*/, inSpine.length * .4, inSpine.ShadowType==3 /*NULL*/, inSpine.ShadowCharacterSetName);
	}
	else{

		inSpine = bind_ShadowCurve(inSpine);

		inSpine.ShadowSpine = makeShadowSpine(inSpine.ShadowCurve, inSpine.base, inSpine.Vertebra, inSpine.TopVertebra, inSpine.ShadowParent,
				      inSpine.chestTop, inSpine.length * .4, inSpine.ShadowType, inSpine.ShadowCharacterSetName);

		if (inSpine.stretch){
			applyStretchyVetebra(inSpine.ShadowSpine.Shadows,inSpine.Curve,inSpine.nb)
		}
	}

	inSpine.Shadows = inSpine.ShadowSpine.Shadows;
	inSpine.ShadowStart = inSpine.ShadowSpine.ShadowStart;
	inSpine.ShadowEnds = inSpine.ShadowSpine.ShadowEnds;

	return inSpine;
}

/*--------------------------------
 Make Box Shadows
--------------------------------*/
function makeBoxShadows(inSpine){

	if(!inSpine.ShadowParent) return inSpine;

	var boxScale = inSpine.length  * .3;

	inSpine.Shadows = new ActiveXObject("XSI.Collection");
	inSpine.ShadowEnds = new ActiveXObject("XSI.Collection");

	var taperPerc = .65;


	var currentStart = inSpine.base;
	var currentNext;

	for(var b=0;b<inSpine.Vertebra.count;b++){

		currentNext = inSpine.Vertebra(b);

		var boxShadow = makeShadowBox(inSpine.ShadowParent, "Lumbar" + b, currentStart, currentNext, boxScale, 0, 0, 1, null)
		inSpine.ShadowParent = boxShadow;
		inSpine.Shadows.Add(boxShadow);

		currentStart = currentNext;

		if(b == 0){
			inSpine.ShadowStart = boxShadow;
		}

	}

	var boxShadow = makeShadowBox(inSpine.ShadowParent, "Lumbar" + b, currentStart, inSpine.TopVertebra, boxScale, 0, 0, 1, null)
	inSpine.Shadows.Add(boxShadow);

	inSpine.ShadowEnds.Add(boxShadow);

	return inSpine;
}

/*--------------------------------
 Make Shadow Box
--------------------------------*/
function makeShadowBox(inParent, inName, inStartObj, inEndObj, inScale, inTopRot, inBottomRot, inTaper, inSplit){


	var shadowBox = inParent.AddGeometry("Cube", "MeshSurface", inName);

	var trans = inStartObj.Kinematics.Global.Transform;

	shadowBox.Kinematics.Global.Transform = trans;

	var shallowScale = inScale * .6;


	shadowBox.Kinematics.AddConstraint("Pose", inStartObj);


	var boxOp = ApplyOp ("Connector_Box", shadowBox+","+ inStartObj +","+ inEndObj)(0);

	SetValue(boxOp + ".topOffset_z", inTopRot, null);
	SetValue(boxOp + ".bottomOffset_z", inBottomRot, null);
	SetValue(boxOp + ".topWidth", inScale, null);
	SetValue(boxOp + ".topDepth", shallowScale, null);
	SetValue(boxOp + ".bottomWidth", inScale * inTaper, null);
	SetValue(boxOp + ".bottomDepth", shallowScale * inTaper, null);
	SetValue(boxOp + ".invert", true, null);

	if(inSplit){
		SetValue(boxOp + ".split", true, null);
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

	if (inSingle) {
		AddProxyParam ( mset, inObj + ".kine.local." + inSingle, null);
	}

    // turn off scaling as a keyable parameter for all
	for (var mark = 0;(mark<sStrings.length);mark++) {
	    SetKeyableAttributes( inObj, ".kine.local." + sStrings[mark], siKeyableAttributeClear );
	}

	// add this in so that we can specify/store the character key set that this marking set will
	// be converted to
    mset.AddParameter2("CharacterKeySet",siString,inCharacterSetName,0,0,0,0,0,0,"CharacterKeySet","CharacterKeySet");
}
/*--------------------------------
 AlignFirstBone
 Try to align the first bone Y axis with the root Y axis

  (103441) When the chain is drawn, the Y axis of the bone may be more than a 90 degrees
 rotation (about the X axis) away from the root Y axis.
-------------------------------*/
function AlignFirstBone(inRoot){

	//get the Y axis of the first bone
	//get the Y axis of the root.

	//we want the angle between these to be less than 90 degrees (i.e. try to align the Y axis
	//of the first bone with the root). This is to maintain same behaviour after fix #103441 which
	//removed this alignment code from chain creation.
	var BoneYAxis = XSIMath.CreateVector3();
	var RootYAxis = XSIMath.CreateVector3();
	var RotMat = XSIMath.CreateMatrix3();

	inRoot.Kinematics.Global.Transform.GetRotationMatrix3(RotMat);
	RootYAxis.Set(0,1,0);
	RootYAxis.MulByMatrix3InPlace(RotMat);

	Xfo = inRoot.Bones(0).Kinematics.Global.Transform;
	Xfo.GetRotationMatrix3(RotMat);
	BoneYAxis.Set(0,1,0);
	BoneYAxis.MulByMatrix3InPlace(RotMat);

	//if the angle between them is greater than 90, turn the bone 180 degrees
	if( RootYAxis.dot(BoneYAxis) < -1e-6)
	{
		var rot = XSIMath.CreateRotation();
		rot.SetFromXYZAnglesValues(XSIMath.DegreesToRadians(180),0,0);
		Xfo.AddLocalRotation(rot);
		inRoot.Bones(0).Kinematics.Global.Transform = Xfo;
	}
}