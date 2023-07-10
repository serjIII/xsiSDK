////////////////////////////////////////
// Make Shadow Chain Rigging Component
// misner Dec 2003


/*


	--------- ARGUMENTS -------------------


	Shadow.Chain > An XSI Collection of Skeleton elements to be traced, in the order defined
		  by GetSkeleton();

	Shadow.Parent > the parent of the new shadow hierarchy.

	inSI3D > whether to draw a SI3D chain or a standard XSI one.

			0 = standard XSI Chain
			1 = SI3D Chain

	inScale > a number describing the scale of the spine.  Will be used to control
		  the icon scale of the skeleton.

	inNullShadow > if true a null hierarchy will be used instead of skeleton hierarchy

	--------- RETURNS -------------------





*/

/*--------------------------------
 Make shadow Chain
--------------------------------*/
function makeShadowChain(inChain, inParent, inSI3D, inScale, inNullShadow, inShadowCharacterSetName){

	//scale cannot be zero
	if(inScale == 0.0)
	{
		logmessage("makeShadowChain: shadow scale cannot be zero, using scale of 1.0", siWarning);
		inScale = 1.0;
	}

	//note: because arghandlers are used all the input objects are collections.
	//Get the first object from collection.
	if(!inParent(0)) { logmessage("makeShadowChain: argument 0 is invalid"); return ; }
	else 			 { inParent = inParent(0); }

	var Shadow = new Object();

	Shadow.Hidden = new ActiveXObject("XSI.Collection");
	Shadow.Envelope = new ActiveXObject("XSI.Collection");
	Shadow.Scale = inScale;
	Shadow.ShadowModel = inParent.model;
	
	Shadow.ShadowCharacterSetName = inShadowCharacterSetName;
	
	Shadow.Chain = inChain;
	Shadow.Parent = inParent;
	Shadow.SI3D = inSI3D;

	Shadow.ShadowEnds = new ActiveXObject("XSI.Collection");
	Shadow.Shadows = new ActiveXObject("XSI.Collection");

	if(inNullShadow){ NullTraceConstrain(Shadow);}
	else{ SkeltonTraceConstrain(Shadow); }

	return Shadow
}
/*--------------------------------
 Skeleton Trace Constrian
--------------------------------*/
function SkeltonTraceConstrain(inShadow){

	// convert the chain into an array of positions

	var pos =new Array();

	for(c=1;c<inShadow.Chain.count;c++){
		pos[c-1] = XSIMath.CreateVector3();
		inShadow.Chain(c).Kinematics.Global.Transform.GetTranslation(pos[c-1]);
	}


	// next get the transform from the first chain
	// the chain normal is the z axis

	var rot = XSIMath.CreateRotation();
	inShadow.Chain(0).Kinematics.Global.Transform.GetRotation(rot);

	var cNormal = XSIMath.CreateVector3();
	cNormal.Set(0,0,1);
	cNormal.MulByRotationInPlace(rot);

	//pschretl: need extra parenting step because of bug 98400
	inShadow.Root = ActiveSceneRoot.Add2DChain(pos[0], pos[1], cNormal, 3);
	AlignFirstBone(inShadow.Chain, inShadow.Root);		
	inShadow.Parent.AddChild(inShadow.Root);

	for(c=2;c<inShadow.Chain.count-1;c++){
		inShadow.Root.AddBone(pos[c], 2, "tempName");
	}

	inShadow.Skel = GetSkeleton(inShadow.Root);

	inShadow.Hidden.Add(inShadow.Skel(0));


	for(c=0;c<inShadow.Chain.count;c++){
		inShadow.Skel(c).AddProperty("Display Property");
		inShadow.Skel(c).properties("display").wirecol.value = 805;
	}


	setChainScale(inShadow.Skel, inShadow.Scale)


	// make it a 3X style skeleton if flagged
	if(inShadow.SI3D == 1){
		inShadow.Skel(inShadow.Skel.count -1).cnsori = false;
		inShadow.Skel(inShadow.Skel.count -1).cnspos = false;

		inShadow.Skel(inShadow.Skel.count -2).AddChild(inShadow.Skel(inShadow.Skel.count -1));

	}

	// copy naming

	for(c=0;c<inShadow.Chain.count-1;c++){inShadow.Skel(c).name = inShadow.Chain(c).name;}

	if(inShadow.Chain(1).joint.chntype.value == 2 && inShadow.Chain.count > 4)
	{
			
	
		inShadow.Skel(1).joint.chntype.value = 2;
		//SetValue(inShadow.Skel(1) + ".chain.solverangles", 0, null);
		for(c=1;c<inShadow.Chain.count-1;c++)
		{
			inShadow.Skel(c).joint.prefrotx.value = inShadow.Chain(c).joint.prefrotx.value;
			inShadow.Skel(c).joint.prefroty.value = inShadow.Chain(c).joint.prefroty.value;
			inShadow.Skel(c).joint.prefrotz.value = inShadow.Chain(c).joint.prefrotz.value;
		}
	}

	//
	// constraint the shadow to the rig
	//
	for(c=1;c<inShadow.Chain.count-1;c++){
		var cnst = inShadow.Skel(c).Kinematics.AddConstraint("Pose", inShadow.Chain(c), true);
		inShadow.Envelope.Add(inShadow.Skel(c));
	}

	// copy the Preffered Axis parameters on the chain you are tracing.
	if (inShadow.Chain(1).joint.pref_relRoot.value == true){

		// now update using the preferred axis
		inShadow.Skel(1).joint.pref_relRoot.value = inShadow.Chain(1).joint.pref_relRoot.value;
		inShadow.Skel(1).joint.prefx.value = inShadow.Chain(1).joint.prefx.value;
		inShadow.Skel(1).joint.prefy.value = inShadow.Chain(1).joint.prefy.value;
		inShadow.Skel(1).joint.prefz.value = inShadow.Chain(1).joint.prefz.value;

		inShadow.Skel(1).joint.resplane.value = 1;

		SetValue(inShadow.Skel(1) + ".joint.resplane", 1, null);

		// if you set these things, you need an extra pull to update them
		var updateTrans = XSIMath.CreateTransform();
		updateTrans = inShadow.Skel(inShadow.Skel.count-1).Kinematics.Global.Transform;
		inShadow.Skel(inShadow.Skel.count-1).Kinematics.Global.Transform = updateTrans;
	}

	inShadow = hideSetup(inShadow);

	inShadow.ShadowStart = inShadow.Skel(0);

	inShadow.Shadows = inShadow.Skel
	inShadow.ShadowEnds.Add(inShadow.Skel(inShadow.Skel.count - 1));
	
	// setup marking set
	for(c=1;c<inShadow.Chain.count-1;c++){
		addMarkingSet(inShadow.Skel(c), null, 1, null, inShadow.ShadowCharacterSetName);
	}

	return inShadow;

}

/*--------------------------------
 Null Trace Constrian
--------------------------------*/
function NullTraceConstrain(inShadow){

	ActiveParent = inShadow.Parent;

	for(c=1;c<inShadow.Chain.count - 1;c++){

		var ShadowNull = TraceNull(ActiveParent, inShadow.Chain(c), inShadow.Scale *.3);
		inShadow.Shadows.Add(ShadowNull);
		inShadow.Envelope.Add(ShadowNull);		
		ActiveParent = ShadowNull;

		if(c == 1){
			inShadow.ShadowStart = ShadowNull;
		}
		addMarkingSet(ShadowNull, null, 1, null, inShadow.ShadowCharacterSetName);
	}

	inShadow = hideSetup(inShadow);	
	inShadow.ShadowEnds.Add(ShadowNull);

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
 Try to align the first shadow bone Y axis to point in the same direction as with the original 
 first bone Y axis

  (103441) When the chain is drawn, the Y axis of the bone may be more than a 90 degrees
 rotation (about the X axis) away from the root Y axis.
-------------------------------*/
function AlignFirstBone(inChain, inRoot){

	//get the Y axis of the first bone
	//get the Y axis of the root.

	//we want the angle between these to be less than 90 degrees (i.e. try to align the Y axis
	//of the first bone with the root). This is to maintain same behaviour after fix #103441 which
	//removed this alignment code from chain creation.
	var BoneYAxis = XSIMath.CreateVector3();
	var OrigBoneYAxis = XSIMath.CreateVector3();
	var RotMat = XSIMath.CreateMatrix3();

	inChain(1).Kinematics.Global.Transform.GetRotationMatrix3(RotMat);
	OrigBoneYAxis.Set(0,1,0);
	OrigBoneYAxis.MulByMatrix3InPlace(RotMat);

	Xfo = inRoot.Bones(0).Kinematics.Global.Transform;
	Xfo.GetRotationMatrix3(RotMat);
	BoneYAxis.Set(0,1,0);
	BoneYAxis.MulByMatrix3InPlace(RotMat);

	//if the angle between them is greater than 90, turn the bone 180 degrees
	if( OrigBoneYAxis.dot(BoneYAxis) < 0)
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
