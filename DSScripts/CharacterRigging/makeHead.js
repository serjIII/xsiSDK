 ////////////////////////////////////////
// Make Head Rigging Component
// misner Dec 2003



	/*

	inParent = the object to make the new hand under
	inGuideObjects = an XSI Collection of 3 guide objects, running from the base of the head up
	inPrefix = the prefix used to name new objects when making the new head.  Example "L", "R", ect...

	inAssemblyType = the style of head assembly to be used

			0 > skeleton head and neck
			1 > spine head and neck

	inHeadType = the type of head, used in the creation of box shadows

			0 > biped head
			1 > quadruped head

	inNbDivisions = the number of divisions on the neck if a spine head assembly is choosen


	inStretch = whether the neck spine should stretch automatically to follow the head
	            of try to maintain a constant length.
	            0 > stretches by spine scale slider
	            1 > stretches to meet Chest controller

	inSliderPage = where to place the custom parameters for the spine.  If not passed
		       a new parameter set will be made under the spine curve

	inEars 	    =  collection of starting objects for ear spring chains.  If empty, no ears will be created.

	inShadowType = the type of shadow rig to constrain to the head
		   	0 > no shadow
			1 > SI|3D skeleton shadow rig
			2 > XSI  skeleton shadow rig						
			3 > Null shadow rig
			4 > Box shadow rig

	inShadowParent = parent of the shadow rig hiearchy.  If empty, no shadow rig will be generated.

	=======================================
	Returns a head Object where:

	Head.Root  = the Root of the head chain
	Head.Skel = a skeleton collection of head bones
	Head.JawSkel = a skeleton collection of jaw bones
	Head.JawRoot = the root of the Jaw chain, if duplicates of the second Guide object are found
	Head.Shadows = the boxShadow objects
	Hand.Hidden = is a collection of Hidden object
	Hand.Envelope = is a collection of objects to be Enveloped

	*/

// Add a push method to the JScript Array Object
// (Array.Push was added in Jscript 5.5 but we cannot rely on this)
var push = function(item){return this[this.length++] = item;}
Array.prototype.push = push;

/*--------------------------------
 Make Head
--------------------------------*/
function makeHead(inParent, inGuideObjects, inPrefix, inAssemblyType, inHeadType, inNbDivisions, inStretch, inSliderPage, inEars, inShadowType, inShadowParent){

	////////////////////////////
	// Validate arguments
	////////////////////////////

	//convert collections to objects
	var l_aArgsToConvert = Array(0,10);
	var a;
	for (i = 0; i < l_aArgsToConvert.length; i++)
	{
		a = l_aArgsToConvert[i];
		if(arguments[a]) { arguments[a] = arguments[a](0);}	//extract first object from coll.
	}

	//check for required arguments
	if(inGuideObjects.count!=3){ logmessage("makeHead: guide collection (argument 1) needs 3 objects. Contains "
	+ inGuideObjects.count + " objects", siError); return;}

	//need parent object
	if(!inParent){ logmessage("makeHead: required argument 0 is invalid", siError); return;	}

	////////////////////////////

	var head = new Object();

	head.parent = inParent;

	head.guides = inGuideObjects;
	head.prefix = inPrefix;
	
	head.CharacterSetName = "Upper." + inPrefix + "Head_Neck";
    head.ShadowCharacterSetName = "ShadowUpper.Shadow" + inPrefix + "Head_Neck";

	head.ShadowType = inShadowType;
	head.ShadowParent = inShadowParent;
	head.Type = inHeadType;

	head.Ears = inEars;

	if(!inNbDivisions){head.inNbDivisions = 2}
	else{head.inNbDivisions = inNbDivisions}

	head.Stretch = inStretch;
	head.Sliders = inSliderPage;

	head.AssemblyType = inAssemblyType;

	head.Hidden = new ActiveXObject("XSI.Collection");
	head.Envelope = new ActiveXObject("XSI.Collection");

	head = findPositions(head);
	if(!head){return}

	head = getScale(head);

	if( head.AssemblyType == 0){
		head = drawHead(head);
	}
	else{
		head = spineHead(head);
	}

	if (head.Ears){
		head = createEars(head);
	}


	head = drawJaw(head);


	if(head.ShadowType >= 1 && head.ShadowType <= 3){
		head = makeSkelShadows(head);
	}
	if(head.ShadowType > 3){
		head = makeBoxShadows(head);
	}

	head = hideSetup(head);


	var returnItems = new ActiveXObject("XSI.Collection");



	return head;
}
/*--------------------------------
 Find Positions
--------------------------------*/
function findPositions(inHead){

	inHead.pos = new Array();
	inHead.objs = new Array();

	for(var t=0;t<3;t++){
		inHead.objs[t] = inHead.guides(t);
		inHead.pos[t] = XSIMath.CreateVector3();
		inHead.objs[t].Kinematics.Global.Transform.GetTranslation(inHead.pos[t]);
	}

	// if the last object ends in a number, or it has no number and we can find and increment of "1",
	// keep searching for additional objects.


	// here we search for the head and if the last head guide was duplicated to draw a longer chain


	var extraHead = DuplicationSearch(inHead.objs[2], inHead.guides(0).model);

	inHead.pos = inHead.pos.concat(extraHead.pos);
	inHead.objs = inHead.objs.concat(extraHead.objs);



	// here we search in the second guide object was duplicated.  The idea is it can be used to
	// create a jaw or snout


	var extraJaw = DuplicationSearch(inHead.objs[1], inHead.guides(0).model);

	inHead.JawPos = extraJaw.pos;
	inHead.JawObjs = extraJaw.objs;

	return inHead;

}

/*--------------------------------
 Duplication Search
--------------------------------*/
function DuplicationSearch(inObj, inModel){


	var lastName = inObj.name

	var searchReturn = new Object();

	searchReturn.pos = new Array();
	searchReturn.objs = new Array();

	var lastChar = lastName.charAt(lastName.length-1);

	// check if there's a number at the end and try to find increments of that number

	if(lastChar/2){
		// we have a number

		var searchString = lastName.slice(0,lastName.length-1)
		for(t=0;t<40;t++){

			lastChar++;

			var searchObj = inModel.FindChild(searchString + lastChar);
			if(!searchObj){return searchReturn}

			searchReturn.pos[t] = XSIMath.CreateVector3();
			searchObj.Kinematics.Global.Transform.GetTranslation(searchReturn.pos[t]);
			searchReturn.objs.push(searchObj);
		}

	}
	else{

		// just search for the same name with 1, 2, ect...

		var lastChar = 1;

		for(t=0;t<40;t++){

			var searchObj = inModel.FindChild(lastName + lastChar);

			if(!searchObj){
				return searchReturn;
			}

			searchReturn.pos[t] = XSIMath.CreateVector3();
			searchObj.Kinematics.Global.Transform.GetTranslation(searchReturn.pos[t]);
			searchReturn.objs.push(searchObj);
			lastChar++;
		}

	}

	return searchReturn;
}
/*--------------------------------
 Get Scale
--------------------------------*/
function getScale(inHead){

	// get the scale from the top of the head to the end

	var checkDist = XSIMath.CreateVector3();
	checkDist.sub(inHead.pos[0] , inHead.pos[2]);

	inHead.scale = checkDist.Length();

	return inHead;

}
/*--------------------------------
 Draw Head
--------------------------------*/
function drawHead(inHead){


	inHead.normalPlane = XSIMath.CreateVector3();
	inHead.normalPlane.Set(0,1,0);

	inHead.Root = inHead.parent.Add2DChain(inHead.pos[0], inHead.pos[1], inHead.normalPlane, 3)
	AlignFirstBone(inHead.Root);

	for(var i = 2; i < inHead.objs.length; i++){

		inHead.Root.AddBone(inHead.pos[i], 2, "tempName");

	}

	inHead.Skel = GetSkeleton(inHead.Root);


	var bicepTrans = inHead.Skel(1).Kinematics.Global.Transform;
	var RootTrans = inHead.Skel(0).Kinematics.Global.Transform;

	var rot = XSIMath.CreateVector3();

	setChainScale(inHead.Skel, inHead.scale * .3);

	for(var f = 0; f < inHead.Skel.count; f++){

		if(f==0){

			inHead.Hidden.Add(inHead.Skel(f));
			inHead.Skel(f).name = "HeadRoot";
		}

		else if(f == 1){

			// convert the bones to 3D chains
		 	inHead.Skel(f).Properties("Kinematic Joint").Parameters("chntype").value = 2;
			addMarkingSet(inHead.Skel(f), null, 1, null, inHead.CharacterSetName);
			inHead.Envelope.Add(inHead.Skel(f));
			inHead.Skel(f).name = "Neck";
			addMarkingSet(inHead.Skel(f), null, 1, null, inHead.CharacterSetName);
		}

		else if(f==inHead.Skel.count-2){
		 	inHead.Skel(f).Properties("Kinematic Joint").Parameters("chntype").value = 0;
			inHead.Envelope.Add(inHead.Skel(f));
			inHead.Skel(f).name = "Head";
			addMarkingSet(inHead.Skel(f), null, 1, null, inHead.CharacterSetName);
		}
		else if(f==inHead.Skel.count-1){
			inHead.Skel(f).name = "HeadEff";
		}
		else{
		 	inHead.Skel(f).Properties("Kinematic Joint").Parameters("chntype").value = 0;
			inHead.Envelope.Add(inHead.Skel(f));
			inHead.Skel(f).name = "Neck";
			addMarkingSet(inHead.Skel(f), null, 1, null, inHead.CharacterSetName);
		}

	}

	inHead.Head = inHead.Skel(inHead.Skel.count-2);

	return inHead;
}

/*--------------------------------
 Spine Head
--------------------------------*/
function spineHead(inHead){

	// first figure out how many positions we have on the head.  If we have 2 or 3, then
	// use the first 2 to define the start and end of the spine.
	// if we have 4 or more, use the first 4 to define the four points of the spine.
	var s = inHead.scale * .3

	if(inHead.objs.length < 2){
		inHead = drawHead(inHead);

		return inHead;
	}

	if(inHead.objs.length < 4){

		var yLen = XSIMath.CreateVector3();
		yLen.Sub(inHead.pos[1], inHead.pos[2]);
		var yl = yLen.Length() * 2;
		
		inHead.HeadScale = yl;
		
		inHead.Head = curveCube(inHead.parent, inHead.pos[1], yl*.8, yl, yl*.8, 253, "Head");
		addMarkingSet(inHead.Head, 1, 1, null, inHead.CharacterSetName);
		inHead.NeckBase = makeGuideNull(inHead.parent, "NeckBase", inHead.pos[0], s * .3, 484)

		HeadAlignment(inHead.Head, inHead.pos[1], inHead.pos[2], inHead.pos[2])
		HeadAlignment(inHead.NeckBase, inHead.pos[0], inHead.pos[1], inHead.pos[0])

		// we have 3 points that make an L shape for the guide shape of the spine.  Place the
		// 2 middle points of our 4 point bezier at the mid-point of the L, 25% towards the
		// ends on either wing.  inHead.pos[1] is the center of the L.

		var BaseDepthPos = XSIMath.CreateVector3();
		var TopDepthPos = XSIMath.CreateVector3();

		BaseDepthPos.LinearlyInterpolate(inHead.pos[1], inHead.pos[0], .25);
		TopDepthPos.LinearlyInterpolate(inHead.pos[1], inHead.pos[2], .25);

		inHead.BaseDepth = makeGuideNull(inHead.NeckBase, "BaseDepth", BaseDepthPos, s * .3, 770)
		inHead.TopDepth = makeGuideNull(inHead.Head, "TopDepth", TopDepthPos, s * .3, 253)

		inHead.Spine = makeSpine(inHead.model, inHead.parent, inHead.inNbDivisions, 1,  inHead.Stretch, inHead.NeckBase , inHead.Head, inHead.BaseDepth, 
		                         inHead.TopDepth, null, inHead.Sliders ,inHead.ShadowType, inHead.ShadowParent, "NeckVertebra", 
		                         inHead.CharacterSetName, inHead.ShadowCharacterSetName);
		inHead.Hidden.Add(inHead.NeckBase);

		SetNeutralPose(inHead.Head, siSRT,false);

		return inHead;
	}

	// here we have at least four positions so build the in between depth nulls from the markers:
	var yLen = XSIMath.CreateVector3();
	yLen.Sub(inHead.pos[2], inHead.pos[3]);
	var yl = yLen.Length() * 2;

	inHead.HeadScale = yl;
		
	inHead.Head = curveCube(inHead.parent, inHead.pos[3], yl*.8, yl, yl*.8, 253, "Head");
	inHead.NeckBase = makeGuideNull(inHead.parent, "NeckBase", inHead.pos[0], s * .3, 484)

	HeadAlignment(inHead.Head, inHead.pos[inHead.pos.length - 2], inHead.pos[inHead.pos.length - 1], inHead.pos[3])

	// now the base is pointing y+  from the start of the head to the 4th marker
	HeadAlignment(inHead.NeckBase, inHead.pos[0], inHead.pos[3], inHead.pos[0])


	inHead.BaseDepth = makeGuideNull(inHead.NeckBase, "BaseDepth", inHead.pos[1], s * .3, 770)
	inHead.TopDepth = makeGuideNull(inHead.Head, "TopDepth", inHead.pos[2], s * .3, 253)

	inHead.Spine = makeSpine(inHead.model, inHead.parent, inHead.inNbDivisions, 1,  inHead.Stretch, inHead.NeckBase , 
	                         inHead.Head, inHead.BaseDepth, inHead.TopDepth, null, inHead.Sliders ,inHead.ShadowType, inHead.ShadowParent,
	                         "NeckVertebra", inHead.CharacterSetName, inHead.ShadowCharacterSetName);
	inHead.Hidden.Add(inHead.NeckBase);

	SetNeutralPose(inHead.Head, siSRT,false);

	return inHead;

}

/*------------------------------
 Head Alignment
------------------------------*/
function HeadAlignment(inObject, inAlignmentCenter, inPointAt, inPosition){

	var v1 = XSIMath.CreateVector3();
	var v2 = XSIMath.CreateVector3();
	var dominantAxis = XSIMath.CreateVector3();
	var secondaryAxis = XSIMath.CreateVector3();

	v1.Sub(inPointAt, inAlignmentCenter);
	v2.Set(1,0,0);
	dominantAxis.Set(0,1,0);
	secondaryAxis.Set(1,0,0);

	var headTrans = TransformFromTwoVectors(v1, v2, dominantAxis, secondaryAxis, inPosition);
	inObject.Kinematics.Global.Transform = headTrans;

}
/*------------------------------
 Rotation from Two Vectors
------------------------------*/
function TransformFromTwoVectors(inVector1, inVector2, inDominantAxis, inSecondaryAxis, inPosition){

	var cp = XSIMath.CreateVector3();
	cp.Cross(inDominantAxis, inVector1);

	var ang = inDominantAxis.Angle(inVector1);
	var T1 = XSIMath.CreateTransform();

	T1.SetRotationFromAxisAngle (cp, ang)

	inSecondaryAxis.MulByTransformationInPlace (T1);

	var projected = ProjectOnOriginPlane(inVector2, inVector1);
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

	T2.SetTranslation(inPosition);

	return T2;

}

/*------------------------------
 Project On Origin Plane
------------------------------*/
function ProjectOnOriginPlane(inPoint, inPlaneNormal)
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
 Draw Jaw
--------------------------------*/
function drawJaw(inHead){

	if(inHead.JawObjs.length < 2){return inHead}

	inHead.JawRoot = inHead.Head.Add2DChain(inHead.JawPos[0], inHead.JawPos[1], inHead.normalPlane, 3)
	AlignFirstBone(inHead.JawRoot);

	for(var i = 2; i < inHead.JawObjs.length; i++){

		inHead.JawRoot.AddBone(inHead.JawPos[i], 2, "tempName");

	}

	inHead.JawSkel = GetSkeleton(inHead.JawRoot);

	var bicepTrans = inHead.JawSkel(1).Kinematics.Global.Transform;
	var RootTrans = inHead.JawSkel(0).Kinematics.Global.Transform;

	var rot = XSIMath.CreateVector3();

	setChainScale(inHead.JawSkel, inHead.scale * .3);

	for(var f = 0; f < inHead.JawSkel.count; f++){

		if(f==0){

			inHead.Hidden.Add(inHead.JawSkel(f));
			inHead.JawSkel(f).name = "JawRoot";
		}
		else if(f==inHead.JawSkel.count-1){
			inHead.Hidden.Add(inHead.JawSkel(f));
			inHead.JawSkel(f).name = "JawEff";
		}
		else{

			addMarkingSet(inHead.JawSkel(f), null, 1, null, inHead.CharacterSetName);
			inHead.Envelope.Add(inHead.JawSkel(f));
			inHead.JawSkel(f).name = "JawNeck";
		}
	}

	return inHead;
}
/*--------------------------------
 Temp Neutral Pose
--------------------------------*/
function tempNeutralPose(inObj, inScale){

	var tt = inObj.Kinematics.Global.Transform;
	var returnNull = inObj.parent.AddNull(inObj.name + "Parent");

	returnNull.Kinematics.Global.Transform = tt;
	returnNull.AddChild(inObj);

		returnNull.size = inScale *.1;

	return returnNull;

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
 Create Ears
-------------------------------*/
function createEars(inHead){
	// cycle through the ear roots looking for chains.
	inHead.EarChains = new ActiveXObject("XSI.Collection");

	for(e = 0; e < inHead.Ears.count; e++){
		var ear = new Object();

		ear.pos = new Array();
		ear.objs = new Array();

		ear.objs[0] = inHead.Ears(e);
		ear.pos[0] = XSIMath.CreateVector3();
		ear.objs[0].Kinematics.Global.Transform.GetTranslation(ear.pos[0]);

		var earChain = DuplicationSearch(inHead.Ears(e), inHead.guides(0).model);

		ear.pos = ear.pos.concat(earChain.pos);
		ear.objs = ear.objs.concat(earChain.objs);

		if(ear.objs.length < 2){continue}

		var nbDivisions = Math.round((ear.objs.length / 1.5) - 1)

		if(nbDivisions < 4){nbDivisions = 4}

		var earCollection = new ActiveXObject("XSI.Collection");
		earCollection.AddItems(ear.objs.join());

		earReturn = MakeTail(inHead.Head, earCollection, nbDivisions, 0, ActiveSceneRoot, inHead.CharacterSetName, inHead.ShadowCharacterSetName);

		inHead.EarChains.Add(earReturn.Root);

	}

	return inHead;

}

/*--------------------------------
 Make Skel Shadows
-------------------------------*/
function makeSkelShadows(inHead){

	inHead.Shadows = new ActiveXObject("XSI.Collection");
	inHead.ShadowEnds = new ActiveXObject("XSI.Collection");

	// trace the head.  If you have a spine head, it's pre-traced.
	if( inHead.AssemblyType == 0){

		inHead.HeadShadow = makeShadowChain(inHead.Skel, inHead.ShadowParent, inHead.ShadowType==1 /*SI3D*/, inHead.scale* .3, inHead.ShadowType==3 /*NULL*/, inHead.ShadowCharacterSetName);

		inHead.ShadowStart = inHead.HeadShadow.shadowStart;
		inHead.ShadowEnds.Add(inHead.HeadShadow.ShadowEnds(0));
		inHead.Shadows.AddItems(inHead.HeadShadow.Shadows);
	}
	else{
		inHead.HeadShadow = inHead.Spine;
		inHead.Shadows.AddItems(inHead.Spine.Shadows);
		inHead.ShadowStart = inHead.Spine.ShadowStart;
		inHead.ShadowEnds.Add(inHead.Spine.ShadowEnds(0));
	}

	// trace the jaw
	if(inHead.JawSkel){

		inHead.JawShadow = makeShadowChain(inHead.JawSkel, inHead.HeadShadow.Shadows(inHead.HeadShadow.Shadows.Count - 2),
		                   inHead.ShadowType==1 /*SI3D*/, inHead.scale* .3, inHead.ShadowType==3 /*NULL*/, inHead.ShadowCharacterSetName);

		inHead.ShadowEnds.Add(inHead.JawShadow.ShadowEnds(0));
		inHead.Shadows.AddItems(inHead.JawShadow.Shadows);
	}

	return inHead;

}
/*--------------------------------
 Make Box Shadows
--------------------------------*/
function makeBoxShadows(inHead){

	var boxScale = inHead.scale * .4;

	inHead.Shadows = new ActiveXObject("XSI.Collection");
	inHead.ShadowEnds = new ActiveXObject("XSI.Collection");

	var taperPerc = .65;
	var spin = true;

	// trace the head.  If you have a spine head, it's pre-traced.
	if( inHead.AssemblyType == 0){

		for(var b = 1; b < inHead.Skel.count - 1; b++){
	
			var taper = 1 - ((1-taperPerc)/(1+inHead.Skel.count))
	
			var boxShadow = makeShadowBox(inHead.ShadowParent, "Neck", inHead.Skel(b-1), inHead.Skel(b), boxScale, 90, 90, taper, spin)
			boxScale = boxScale * taper;
			inHead.ShadowParent = boxShadow;
			inHead.Shadows.Add(boxShadow);
			spin = false;
	
			if(b == 1){
				inHead.ShadowStart = boxShadow;
			}
		}
		
		inHead.ShadowEnds.Add(boxShadow);
		var b = inHead.Skel.count - 2

		var boxShadow = makeHeadBox(inHead.ShadowParent, "Head", inHead.Skel(b), inHead.Skel(b+1), inHead.Type, inHead.AssemblyType, null);
	}
	else{
		inHead.HeadShadow = inHead.Spine;
		inHead.Shadows.AddItems(inHead.Spine.Shadows);
		inHead.ShadowStart = inHead.Spine.ShadowStart;
		inHead.ShadowEnds.Add(inHead.Spine.ShadowEnds(0));
		
		var boxShadow = makeHeadBox(inHead.Spine.ShadowEnds(0), "Head", inHead.Spine.TopVertebra, null, inHead.Type, inHead.AssemblyType, inHead.HeadScale);
	}

	inHead.Shadows.Add(boxShadow);
	inHead.ShadowParent = boxShadow;

	if(inHead.JawObjs.length >= 2)
	{
	    for(var b = 1; b < inHead.JawSkel.count; b++){

		    var taper = 1 - ((1-taperPerc)/(1+inHead.JawSkel.count))

		    var boxShadow = makeShadowBox(inHead.ShadowParent, "Jaw", inHead.JawSkel(b-1), inHead.JawSkel(b), boxScale * .5, 90, 90, taper, spin)
		    boxScale = boxScale * taper;
		    inHead.ShadowParent = boxShadow;
		    inHead.Shadows.Add(boxShadow);
		    spin = false;
	    }

	    inHead.ShadowEnds.Add(boxShadow);
    }
    
	for(var s=0;s<inHead.Shadows.count;s++){
		addMarkingSet(inHead.Shadows(s), 0, 1, null, inHead.ShadowCharacterSetName);
	}	

	return inHead;
}

/*--------------------------------
 Make Head Box
--------------------------------*/
function makeHeadBox(inParent, inName, inStartObj, inEndObj, inType, inAssemblyType, inHeadScale){


	var shadowBox = inParent.AddGeometry("Cube", "MeshSurface", inName);

	var trans = inStartObj.Kinematics.Global.Transform;
	shadowBox.Kinematics.Global.Transform = trans;

	if(!inHeadScale){
		var p1 = XSIMath.CreateVector3();
		var p2 = XSIMath.Createvector3();
		inStartObj.Kinematics.Global.Transform.GetTranslation(p1);
		inEndObj.Kinematics.Global.Transform.GetTranslation(p2);
	
		var dist = XSIMath.CreateVector3();
		dist.sub(p2,p1);
		var headScale = dist.Length() * 2.3;
	}
	else{
		var headScale = inHeadScale;
	}	
	
	shadowBox.Kinematics.AddConstraint("Pose", inStartObj);

	var boxOp = ApplyOp ("Connector_Head", shadowBox)(0);

	SetValue(boxOp + ".height", headScale, null);
	SetValue(boxOp + ".width", headScale, null);
	SetValue(boxOp + ".sideWidth", headScale, null);


	if(inType == 1 && inAssemblyType == 0){
		// dog head, skeleton neck
		SetValue(boxOp + ".rotx", 90, null);
		SetValue(boxOp + ".rotz", 90, null);
		SetValue(boxOp + ".headType", 1, null);
	}

	if(inType == 1 && inAssemblyType == 1){
		// dog head, spine neck
		SetValue(boxOp + ".rotx", -90, null);
		SetValue(boxOp + ".headType", 1, null);
	}	
	
	if(inType == 0 && inAssemblyType == 0){
		// human head, skeleton neck
		SetValue(boxOp + ".rotz", -90, null);
	}
	
	if(inType == 0 && inAssemblyType == 1){
		// human head, spine neck
		// don't need to set anything
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
 Curve Cube
--------------------------------*/
function curveCube(inParent, inPos, inXlen, inYlen, inZlen, inColor, inName){

	var xlen = inXlen/2;
	var ylen = inYlen;
	var zlen = inZlen/2;

	// p is positive, N is negative
	var ppp = XSIMath.CreateVector3();
	var ppN = XSIMath.CreateVector3();
	var pNp = XSIMath.CreateVector3();
	var Npp = XSIMath.CreateVector3();
	var pNN = XSIMath.CreateVector3();
	var NNp = XSIMath.CreateVector3();
	var NpN = XSIMath.CreateVector3();
	var NNN = XSIMath.CreateVector3();

	ppp.set(xlen,ylen,zlen);
	ppN.set(xlen,ylen,zlen*-1);
	pNp.set(xlen,0,zlen);
	Npp.set(xlen*-1,ylen,zlen);
	pNN.set(xlen,0,zlen*-1);
	NNp.set(xlen*-1,0,zlen);
	NpN.set(xlen*-1,ylen,zlen*-1);
	NNN.set(xlen*-1,0,zlen*-1);

	var points = new Array();

	points = vectorPush(points, ppp);
	points = vectorPush(points, ppN);
	points = vectorPush(points, NpN);
	points = vectorPush(points, NNN);
	points = vectorPush(points, NNp);
	points = vectorPush(points, Npp);
	points = vectorPush(points, NpN);
	points = vectorPush(points, Npp);
	points = vectorPush(points, ppp);
	points = vectorPush(points, pNp);
	points = vectorPush(points, NNp);
	points = vectorPush(points, pNp);
	points = vectorPush(points, pNN);
	points = vectorPush(points, ppN);
	points = vectorPush(points, pNN);
	points = vectorPush(points, NNN);


	var curve = inParent.AddNurbsCurve(points,null,0, 1, siNonUniformParameterization, siSINurbs, inName);

	curve.AddProperty("Display Property")
	curve.properties("display").wirecol.value = inColor;

	var trans = XSIMath.CreateTransform();
	trans.SetTranslation(inPos);
	curve.Kinematics.Global.Transform = trans;

	return curve;

}

/*--------------------------------
 Vector Push
--------------------------------*/
function vectorPush(inArray, inVector){

	inArray.push(inVector.x);
	inArray.push(inVector.y);
	inArray.push(inVector.z);
	inArray.push(1);

	return inArray;
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
 Hide Setup
--------------------------------*/
function hideSetup(inHead){


	if(inHead.parent.model.Groups.Item("Hidden")){

		if(inHead.Hidden){

			inHead.HiddenGroup = inHead.parent.model.Groups.Item("Hidden");
			inHead.HiddenGroup.AddMember(inHead.Hidden);
		}
	}
	else{
		for(var m = 0;m < inHead.Hidden.count;m++){
			inHead.Hidden(m).properties("visibility").viewvis.value = false;
		}
	}


	if(inHead.Envelope.Count < 1){return inHead}


	if(inHead.parent.model.Groups.Item("Envelope_group")){

		if(inHead.Envelope){
			inHead.envGroup = inHead.parent.model.Groups.Item("Envelope_group");
			inHead.envGroup.AddMember(inHead.Envelope);
		}
	}

	return inHead;
}

/*--------------------------------
 Make Guide Null
--------------------------------*/
function makeGuideNull(inParent, inName, inPos, inScale, inColor){

	var newNull = inParent.AddNull(inName);
	newNull.size = inScale;

	var trans = XSIMath.CreateTransform();
	trans.SetTranslation(inPos);
	newNull.Kinematics.Global.Transform = trans;

	newNull.AddProperty("Display Property")
	newNull.properties("display").wirecol.value = inColor;

	return newNull;
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