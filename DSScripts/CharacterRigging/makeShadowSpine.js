////////////////////////////////////////
// Make Shadow Spine Rigging Component
// misner Dec 2003


/*


	--------- ARGUMENTS -------------------

	inSpline > The Spline object of the spine to be traced.

	inBase

	inVertebra > An XSI Collection of vertebra on the spine to be traced.

	inTopVertebra > the top vertebra object on the spine to be traced.

	inShadowParent > the parent of the new Shadow hierarchy.

	inChestTop > (optional) the chest top object of the spine to be traced.  If
	 	      empty it will be assumed the spine was generated without this option


	inScale > a number describing the scale of the spine.  Will be used to control
		  the icon scale of the skeleton.

	inType > the type of Shadow tracing to be drawn.

			0 = no shadow
			1 = SI|3D skeleton
			2 = XSI skeleton
			3 = null

		for convenience the numbers align with the UI options for the Shadow type
		on the default rig generators.  Box Shadows are not traced here, but are
		done as components because they need to make assumptions about the volume
		of each component.


	--------- RETURNS -------------------


*/


/*--------------------------------
 Make Shadow Spine
--------------------------------*/
function makeShadowSpine(inSpline, inBase, inVertebra, inTopVertebra, inShadowParent, inChestTop, inScale, inType, inShadowCharacterSetName){

	var l_aArgsToConvert = Array(0,1,3,4,5);
	var a;
	for (i = 0; i < l_aArgsToConvert.length; i++)
	{
		a = l_aArgsToConvert[i];
		if(arguments[a])
			{ arguments[a] = arguments[a](0);}	//extract first object from coll.
	}

	//check required arguments
	var l_aRequiredArgs = Array(0,1,2,3);
	var l_bExit;
	for (i = 0; i < l_aRequiredArgs.length; i++)
	{
		a = l_aRequiredArgs[i];
		if(!arguments[a]){ logmessage("makeShadowSpine: argument " + a + " is invalid", siError); l_bExit = true;	}
	}
	if(l_bExit) return;

	var Shadow = new Object;

	Shadow.ShadowHidden 	= new ActiveXObject("XSI.Collection");
	Shadow.ShadowEnvelope 	= new ActiveXObject("XSI.Collection");
	Shadow.Hidden 			= new ActiveXObject("XSI.Collection");
	Shadow.Envelope 		= new ActiveXObject("XSI.Collection");

	Shadow.Base = inBase;

	Shadow.Spline = inSpline;
	Shadow.Vertebra = inVertebra;
	Shadow.TopVertebra = inTopVertebra;

	Shadow.Parent = inShadowParent;
	Shadow.ShadowModel = inShadowParent.Model;
	Shadow.RigModel = inVertebra(0).Model;

	Shadow.ChestTop = inChestTop;
	Shadow.Scale = inScale;
	
	Shadow.ShadowCharacterSetName = inShadowCharacterSetName;

	Shadow.ShadowEnds = new ActiveXObject("XSI.Collection");

	if(inType == 1 || inType == 2){

		if (   (Shadow.ChestTop) 
            && (Shadow.Vertebra.count > 1) )
		{
			Shadow = TraceSkeletonWithTop2(Shadow, inType);
			Shadow = ConstrainShadowSpine2(Shadow);

		    setChainScale(Shadow.Skel, Shadow.Scale)
		    setChainScale(Shadow.Skel2, Shadow.Scale)

		    Shadow = hideSetup(Shadow);

		    Shadow.ShadowStart = Shadow.Skel(0);
		    Shadow.Shadows = Shadow.Skel
		    Shadow.ShadowEnds.Add(Shadow.Skel2(Shadow.Skel2.count - 1));
		}
		else {

			Shadow = TraceSkeletonNoTop(Shadow, inType);
			Shadow = ConstrainShadowSpine(Shadow);

		    setChainScale(Shadow.Skel, Shadow.Scale)

		    Shadow = hideSetup(Shadow);

		    Shadow.ShadowStart = Shadow.Skel(0);
		    Shadow.Shadows = Shadow.Skel
    		Shadow.ShadowEnds.Add(Shadow.Skel(Shadow.Skel.count - 1));
		}
	}
	else if(inType == 3){
		Shadow = NullTraceConstrain(Shadow);
	}

	return Shadow;
}
/*--------------------------------
 Null Trace Constrian
--------------------------------*/
function NullTraceConstrain(inShadow){

	inShadow.Shadows = new ActiveXObject("XSI.Collection");

	var baseNull = TraceNull(inShadow.Base, inShadow.Base, inShadow.Scale *.3);
	var ActiveParent = baseNull;

	inShadow.Shadows.Add(baseNull);
	inShadow.ShadowStart = baseNull;

 	for(i = 0; i < inShadow.Vertebra.count; i ++){

		var ShadowNull = TraceNull(ActiveParent, inShadow.Vertebra(i), inShadow.Scale *.3);
		inShadow.Shadows.Add(ShadowNull);
		ActiveParent = ShadowNull;
	}

	var topNull = TraceNull(ActiveParent, inShadow.TopVertebra, inShadow.Scale *.3);

	inShadow.Shadows.Add(topNull);
	inShadow.ShadowEnds.Add(topNull);
	
	for(var s=0;s<inShadow.Shadows.Count;s++){
		addMarkingSet(inShadow.Shadows(s), null, 1, null, inShadow.ShadowCharacterSetName);
	}
	
	return inShadow;
}
/*--------------------------------
 Trace Null
--------------------------------*/
function TraceNull(inParent, inTarget, inScale){

	var newNull = inParent.AddPrimitive("Null", inTarget.name)

	newNull.AddProperty("Display Property")
	newNull.properties("display").wirecol.value = 381;
	newNull.size = inScale;

	var Cnst = newNull.Kinematics.AddConstraint("Pose", inTarget, false);

	return newNull

}
/*--------------------------------
 Trace Skeleton With Top
--------------------------------*/
function TraceSkeletonWithTop2(inShadow, inType){

	var size = inShadow.Vertebra.count;
	var oTrans = inShadow.Spline.model.Kinematics.Local.Transform;

	var pos = new Array();

 	for(i = 0; i < size + 1; i ++){
		var cPos = new VBArray(inShadow.Spline.ActivePrimitive.Geometry.Curves(0).EvaluatePositionFromPercentage((i/size) * 100));
		var curveData = cPos.getItem(0);
		pos[i] = XSIMath.MapObjectPositionToWorldSpace(oTrans, curveData);
 	}

	var plane = new Array(1, 0, 0);

	inShadow.Root = inShadow.Parent.Add2DChain( pos[0] , pos[1] , plane, 2);
	AlignFirstBone(inShadow.Root);

	for(i = 2; i < size + 1; i++){
		inShadow.Root.AddBone(pos[i]);
		poslast = pos[i];
	}

	var chestPos = XSIMath.CreateVector3();
	inShadow.ChestTop.Kinematics.Global.Transform.GetTranslation(chestPos);

	// fix the parenting (SI|3D skeleton) and naming
	inShadow.Skel = GetSkeleton(inShadow.Root);
        
	//~fix chest bone to be sepparate bone //jav
	inShadow.Root2 = inShadow.Skel(inShadow.Skel.count - 1).Add2DChain( poslast , chestPos, plane, 2); 
	inShadow.Root2.Bones(0).properties("Kinematic Chain").parameters("blendik").value = 0; //FKchain
        
	inShadow.Skel2 = GetSkeleton(inShadow.Root2);

	inShadow.Skel2(0).name = "ChestRoot";
	inShadow.Skel2(inShadow.Skel2.count - 2).name = "Chest";
	inShadow.Skel2(inShadow.Skel2.count - 1).name = "ChestEffector";

	for(i = 1; i < inShadow.Skel.count - 1; i++){
		inShadow.Skel(i).name = "Spine" + i
	}

	if( inType == 1 /*SI3D*/) {
		inShadow.Skel(inShadow.Skel.count - 2).addchild (inShadow.Skel(inShadow.Skel.count - 1));
		// make it a proper 3X style skeleton:
		inShadow.Skel(inShadow.Skel.count -1).cnsori = false;
		inShadow.Skel(inShadow.Skel.count -1).cnspos = false;
	}

	inShadow.Skel(0).name = "SpineRoot";

	for(i = 1; i < inShadow.Skel.count - 1; i++){
		addMarkingSet(inShadow.Skel(i), null, 1, null, inShadow.ShadowCharacterSetName)
	}
	//jav
	for(i = 1; i < inShadow.Skel2.count - 1; i++){
		addMarkingSet(inShadow.Skel2(i), null, 1, null, inShadow.ShadowCharacterSetName)
	}

	//color bones blue		
	for(i = 0; i < inShadow.Skel.count; i++){
		inShadow.Skel(i).AddProperty("Display Property")
		inShadow.Skel(i).properties("display").wirecol.value = 805;
	}
	//jav
	for(i = 0; i < inShadow.Skel2.count; i++){
		inShadow.Skel2(i).AddProperty("Display Property")
		inShadow.Skel2(i).properties("display").wirecol.value = 805;
	}

	inShadow.Hidden.add(inShadow.Skel(0))
	inShadow.Hidden.add(inShadow.Skel2(0))
	inShadow.Hidden.add(inShadow.Skel2(inShadow.Skel2.count-1))
	inShadow.Hidden.add(inShadow.Skel(inShadow.Skel.count-1))

	return inShadow;
}

/*--------------------------------
 Trace Skeleton With Top
--------------------------------*/
function TraceSkeletonWithTop(inShadow, inType){

	var size = inShadow.Vertebra.count;
	var oTrans = inShadow.Spline.model.Kinematics.Local.Transform;

	var pos = new Array();

 	for(i = 0; i < size + 1; i ++){
		var cPos = new VBArray(inShadow.Spline.ActivePrimitive.Geometry.Curves(0).EvaluatePositionFromPercentage((i/size) * 100));
		var curveData = cPos.getItem(0);
		pos[i] = XSIMath.MapObjectPositionToWorldSpace(oTrans, curveData);
 	}

	var plane = new Array(1, 0, 0);

	inShadow.Root = inShadow.Parent.Add2DChain( pos[0] , pos[1] , plane, 2);
	AlignFirstBone(inShadow.Root);

	for(i = 2; i < size + 1; i++){
		inShadow.Root.AddBone(pos[i])
	}

	var chestPos = XSIMath.CreateVector3();
	inShadow.ChestTop.Kinematics.Global.Transform.GetTranslation(chestPos);
	inShadow.Root.AddBone(chestPos)

	// fix the parenting (SI|3D skeleton) and naming
	inShadow.Skel = GetSkeleton(inShadow.Root);

	for(i = 1; i < inShadow.Skel.count - 2; i++){
		inShadow.Skel(i).name = "Spine" + i
	}

	if( inType == 1 /*SI3D*/) {
		inShadow.Skel(inShadow.Skel.count - 2).addchild (inShadow.Skel(inShadow.Skel.count - 1));
		// make it a proper 3X style skeleton:
		inShadow.Skel(inShadow.Skel.count -1).cnsori = false;
		inShadow.Skel(inShadow.Skel.count -1).cnspos = false;

	}
	inShadow.Skel(inShadow.Skel.count -2).name = "Chest";
	inShadow.Skel(inShadow.Skel.count -1).name = "ChestEffector";
	inShadow.Skel(0).name = "SpineRoot";

	for(i = 1; i < inShadow.Skel.count - 1; i++){
		addMarkingSet(inShadow.Skel(i), null, 1, null, inShadow.ShadowCharacterSetName)
	}

	//color bones blue		
	for(i = 0; i < inShadow.Skel.count; i++){
		inShadow.Skel(i).AddProperty("Display Property")
		inShadow.Skel(i).properties("display").wirecol.value = 805;
	}

	return inShadow;
}
/*--------------------------------
 Trace Skeleton No Top
--------------------------------*/
function TraceSkeletonNoTop(inShadow, inType){
    
	var size = inShadow.Vertebra.count + 1;

	var oTrans = inShadow.Spline.model.Kinematics.Local.Transform;

	var pos = new Array();

 	for(i = 0; i < size + 1; i ++){
		var perc = ((i)/size) * 100 ;

		var cPos = new VBArray(inShadow.Spline.ActivePrimitive.Geometry.Curves(0).EvaluatePositionFromPercentage(perc));
		var curveData = cPos.getItem(0);
		pos[i] = XSIMath.MapObjectPositionToWorldSpace(oTrans, curveData);
	}


	var plane = new Array(1, 0, 0);

	inShadow.Root = inShadow.Parent.Add2DChain( pos[0] , pos[1] , plane, 2);
	AlignFirstBone(inShadow.Root);	

	for(i = 2; i < pos.length; i++){
		inShadow.Root.AddBone(pos[i])
	}

	// fix the parenting and naming
	inShadow.Skel = GetSkeleton(inShadow.Root);

	for(i = 1; i < inShadow.Skel.count - 2; i++){
		inShadow.Skel(i).name = "Spine" + i
	}

	if( inType == 1 /*SI3D*/) {
		inShadow.Skel(inShadow.Skel.count - 2).addchild (inShadow.Skel(inShadow.Skel.count - 1));
		// make it a proper 3X style skeleton:
		inShadow.Skel(inShadow.Skel.count -1).cnsori = false;
		inShadow.Skel(inShadow.Skel.count -1).cnspos = false;

	}
	
	inShadow.Skel(inShadow.Skel.count -2).name = "Chest";
	inShadow.Skel(inShadow.Skel.count -1).name = "ChestEffector";
	inShadow.Skel(0).name = "SpineRoot";

	for(i = 1; i < inShadow.Skel.count - 1; i++){
		addMarkingSet(inShadow.Skel(i), null, 1, null, inShadow.ShadowCharacterSetName)
	}

	for(i = 0; i < inShadow.Skel.count; i++){
		inShadow.Skel(i).AddProperty("Display Property")
		inShadow.Skel(i).properties("display").wirecol.value = 805;
	}

	return inShadow;

}

/*--------------------------------
 Constrain Shadow Spine
--------------------------------*/
function ConstrainShadowSpine2(inShadow){

	if(inShadow.ChestTop){
		//var size = inShadow.Skel.count - 2
		var size = inShadow.Skel.count - 1
	}
	else{
		var size = inShadow.Skel.count - 1
	}
        
    if(!inShadow.ChestTop){
		inShadow.Skel(inShadow.Skel.count - 1).Kinematics.AddConstraint("Position", inShadow.TopVertebra, false)
	}
	else{
		//~ inShadow.Skel(inShadow.Skel.count - 1).Kinematics.AddConstraint("Pose", inShadow.TopVertebra, true)
		//~ inShadow.Skel(inShadow.Skel.count - 2).Kinematics.AddConstraint("Position", inShadow.TopVertebra, false)
		inShadow.Skel(inShadow.Skel.count - 1).Kinematics.AddConstraint("Position", inShadow.TopVertebra, false)
		inShadow.Root2.Kinematics.AddConstraint("Position", inShadow.TopVertebra, false)
		inShadow.Skel2(inShadow.Skel2.count - 2).Kinematics.AddConstraint("Pose", inShadow.TopVertebra, true)
	}

	//constrain in position
	for(i = 0; i < size; i++){
		// don't need to constrain the first bone.
		if (i == 1){continue}

		var perc = (i - 1)/(size - 1)* 100;
		var Cnst = inShadow.Skel(i).Kinematics.AddConstraint("Path", inShadow.Spline, false);
		Cnst.perc = perc;
		Cnst.lockcnsed.value = true;
	}

	var offset = XSIMath.CreateVector3();
	offset.set(0,1,0);

	inShadow.UpVectors = new ActiveXObject("XSI.Collection");

	for(i = 0; i < inShadow.Vertebra.count; i++){
		var trans = inShadow.Skel(i+1).Kinematics.Global.Transform;
		trans.AddLocalTranslation(offset);

		var UpV = inShadow.Vertebra(i).AddPrimitive("Null", "Shadow_upVa")
		UpV.Kinematics.Global.Transform = trans;

		inShadow.Hidden.Add(UpV);
		inShadow.UpVectors.Add(UpV);
	}

	// if we have a chest bone we need to hang and upvector off it.
	var trans = inShadow.Skel(inShadow.Skel.Count-2).Kinematics.Global.Transform;
	trans.AddLocalTranslation(offset);

	var UpV = inShadow.TopVertebra.AddPrimitive("Null", "Shadow_upVa")
	UpV.Kinematics.Global.Transform = trans;

	inShadow.Hidden.Add(UpV);
	inShadow.UpVectors.Add(UpV);

	//attach up vectors and set the size
	for(i = 0; i < inShadow.UpVectors.count; i++){
		inShadow.Skel(i+1).joint.UpVectorReference = inShadow.UpVectors(i);
		inShadow.UpVectors(i).size = inShadow.Scale *.1;
	}


	// fill the envelope group
	for(i=1;i < inShadow.Skel.count - 1; i++){
		inShadow.ShadowEnvelope.Add(inShadow.Skel(i))
	}
    for(i=1;i < inShadow.Skel2.count - 1; i++){
		inShadow.ShadowEnvelope.Add(inShadow.Skel2(i))
	}

	return inShadow;
}
/*--------------------------------
 Constrain Shadow Spine
--------------------------------*/
function ConstrainShadowSpine(inShadow){

	if(inShadow.ChestTop){
		var size = inShadow.Skel.count - 2
	}
	else{
		var size = inShadow.Skel.count - 1
	}
        
    if(!inShadow.ChestTop){
		inShadow.Skel(inShadow.Skel.count - 1).Kinematics.AddConstraint("Position", inShadow.TopVertebra, false)
	}
	else{
        inShadow.Skel(inShadow.Skel.count - 1).Kinematics.AddConstraint("Pose", inShadow.TopVertebra, true)
        inShadow.Skel(inShadow.Skel.count - 2).Kinematics.AddConstraint("Position", inShadow.TopVertebra, false)
	}

	//constrain in position
	for(i = 0; i < size; i++){
		// don't need to constrain the first bone.
		if (i == 1){continue}

		var perc = (i - 1)/(size - 1)* 100;
		var Cnst = inShadow.Skel(i).Kinematics.AddConstraint("Path", inShadow.Spline, false);
		Cnst.perc = perc;
		Cnst.lockcnsed.value = true;
	}

	var offset = XSIMath.CreateVector3();
	offset.set(0,1,0);

	inShadow.UpVectors = new ActiveXObject("XSI.Collection");

	for(i = 0; i < inShadow.Vertebra.count; i++){

		var trans = inShadow.Skel(i+1).Kinematics.Global.Transform;
		trans.AddLocalTranslation(offset);

		var UpV = inShadow.Vertebra(i).AddPrimitive("Null", "Shadow_upVa")
		UpV.Kinematics.Global.Transform = trans;

		inShadow.Hidden.Add(UpV);
		inShadow.UpVectors.Add(UpV);
	}



	// if we have a chest bone we need to hang and upvector off it.
	var trans = inShadow.Skel(inShadow.Skel.Count-2).Kinematics.Global.Transform;
	trans.AddLocalTranslation(offset);


	var UpV = inShadow.TopVertebra.AddPrimitive("Null", "Shadow_upVa")
	UpV.Kinematics.Global.Transform = trans;

	inShadow.Hidden.Add(UpV);
	inShadow.UpVectors.Add(UpV);

	//attach up vectors and set the size
	for(i = 0; i < inShadow.UpVectors.count; i++){
		inShadow.Skel(i+1).joint.UpVectorReference = inShadow.UpVectors(i);
		inShadow.UpVectors(i).size = inShadow.Scale *.1;
	}


	// fill the envelope group
	for(i=1;i < inShadow.Skel.count - 1; i++){
		inShadow.ShadowEnvelope.Add(inShadow.Skel(i))
	}

	return inShadow;
}
/*--------------------------------
 Set Chain Scale
-------------------------------*/
function setChainScale(inSkel, inScale){


		for(var f = 0; f < inSkel.count; f++){

			inSkel(f).Shadow_icon.value  = 1;
			inSkel(f).primary_icon.value  = 0;

			if(f==0 || f==inSkel.count-1){
				inSkel(f).Shadow_scaleX.value  = inScale * .5;
				inSkel(f).radius.value  = inScale * .5;
				inSkel(f).Shadow_scaleZ.value  = inScale * .5;
			}
			else{
				inSkel(f).radius.value  = inScale;
				inSkel(f).Shadow_scaleZ.value  = inScale;
			}

		}

}
/*--------------------------------
 Add Marking Set
--------------------------------*/
function addMarkingSet(inObj, inPos, inRot, inSingle, inCharacterSetName){

	var pStrings = new Array("posx","posy","posz");
	var rStrings = new Array("rotx","roty","rotz");

	var mset = inObj.AddProperty("Custom_parameter_list",0,"MarkingSet");

	for (var mark = 0;(inPos && mark<pStrings.length);mark++)
		{AddProxyParam ( mset, inObj + ".kine.local." + pStrings[mark], null);}

	for (var mark = 0;(inRot && mark<rStrings.length);mark++)
		{AddProxyParam ( mset, inObj + ".kine.local." + rStrings[mark], null);}

	for (var mark = 0;(inSingle && mark<rStrings.length);mark++)
		{AddProxyParam ( mset, inObj + ".kine.local." + inSingle, null);}

	// add this in so that we can specify/store the character key set that this marking set will
	// be converted to
    mset.AddParameter2("CharacterKeySet",siString,inCharacterSetName,0,0,0,0,0,0,"CharacterKeySet","CharacterKeySet");
}

/*--------------------------------
 Hide Setup
--------------------------------*/
function hideSetup(inShadow){
	inShadow.HiddenGroup = FindGroupUnderModel(inShadow.ShadowModel, "Shadow_hidden");
	if (inShadow.HiddenGroup) {
		if (inShadow.Hidden.count > 0) {		
			inShadow.HiddenGroup.AddMember(inShadow.Hidden);
		}
	}
	else{
		for(var m = 0;m < inShadow.Hidden.count;m++) {
			inShadow.Hidden(m).properties("visibility").viewvis.value = false;
		}
	}

	if(inShadow.Envelope.Count < 1){return inShadow}

	inShadow.envGroup = FindGroupUnderModel(inShadow.ShadowModel, "Shadow_envelope_group");
	if (inShadow.envGroup) {
		if (inShadow.Envelope) {
			inShadow.envGroup.AddMember(inShadow.Envelope);
		}
	}

	return inShadow;
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

function FindGroupUnderModel( in_model, in_strType ) {
    var oGrps = in_model.Groups;

    for (var g=0; g < oGrps.Count; g++) {
		if (oGrps(g).FullName.indexOf(in_strType) != -1)
		{
			return oGrps(g);
		}
	}
	
	// not found
	return null;
}
