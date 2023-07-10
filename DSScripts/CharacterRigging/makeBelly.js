////////////////////////////////////////
// Make Belly
///////////////////////////
// Made as part of the component SDK
/// Dec 2003 Michael Isner
///////////////


/*=================================

--------- PARAMETERS -------------------


	inHip > the rigging parent the lower part of the belly assembly.

	inVertebra > the rigging parent for the upper part of the assembly.
		 				  typically the first vertebra after the hip.


	inGuideObjects > an XSI Collection of guide objects.

			1) The first object is the lower stomach guide marker.
			2) The second object is the upper stomach guide marker

	inPerc	> the percentage the rotation points of the belly mass are forward from the
	         spine and hip plate.  By default .25 (25%).


	--------- RETURNS -------------------

	Returns a Belly Object where:

	Belly.BellyRoot = Root of the Belly Chain
	Belly.BellyBone = Bone of the Belly Chain;
	Belly.BellyEff = Effector of the Belly Chain

	Belly.UpperRoot = Root of the Belly Chain
	Belly.UpperBone = Bone of the Belly Chain;
	Belly.UpperEff = Effector of the Belly Chain

	Belly.LowerRoot = Root of the Belly Chain
	Belly.LowerBone = Bone of the Belly Chain;
	Belly.LowerEff = Effector of the Belly Chain

	Belly.Hidden = is a collection of Hidden object
	Belly.Envelope = is a collection of objects to be Enveloped

/====================================*

/*--------------------------------
 Make Belly
--------------------------------*/
function makeBelly(inHip, inVertebra, inGuideObjects, inPerc){

	var belly;

	//check for required arguments
	//because arghandlers are used, input objects are collections. If we are expecting a single object get the first object in the collection.
	if(!arguments[0](0))	{ logmessage("makeBelly: argument 0 is invalid"); return belly; }
	if(!arguments[1](0))	{ logmessage("makeBelly: argument 1 is invalid"); return belly; }
	//assumption: guide collection has at 2 objects
	if(inGuideObjects.count != 2)	{ logmessage("makeBelly: Guide collection needs 2 objects. Collection has" + inGuideObjects.count + "objects"); return arm;}

	belly = new Object;

	belly.Guides 	= inGuideObjects;

	//because arghandlers are used, input objects are collections. If expecting a single object get the first object in the collection.
	belly.Hip 		= inHip(0);
	belly.Vertebra 	= inVertebra(0);
	belly.Model 	= belly.Hip.Model;
	belly.Perc = inPerc;	

	belly.Hidden = new ActiveXObject("XSI.Collection");
	belly.Envelope = new ActiveXObject("XSI.Collection");

	belly.hipPos = XSIMath.CreateVector3();
	belly.vertPos = XSIMath.CreateVector3();
	belly.lowerPos = XSIMath.CreateVector3();
	belly.upperPos = XSIMath.CreateVector3();

	belly.Hip.Kinematics.Global.Transform.GetTranslation(belly.hipPos);
	belly.Vertebra.Kinematics.Global.Transform.GetTranslation(belly.vertPos);
	inGuideObjects(0).Kinematics.Global.Transform.GetTranslation(belly.lowerPos);
	inGuideObjects(1).Kinematics.Global.Transform.GetTranslation(belly.upperPos);

	belly = makeAssembly(belly);
	belly = NamingAndGrouping(belly);
	belly = SetScaling(belly)

	belly = hideSetup(belly);


	applySpring(belly.LowerRoot, belly.LowerEff, belly.SpringScale);
	applySpring(belly.UpperRoot, belly.UpperEff, belly.SpringScale);




	return belly;
}
/*------------------------------
 Make Assembly
------------------------------*/
function makeAssembly(inBelly){

	// make the assembly with a chain for the front of the stomach to
	// minimize stretching from competing springs.


	inBelly.startLower = XSIMath.CreateVector3();
	inBelly.startUpper = XSIMath.CreateVector3();
	inBelly.startLower.LinearlyInterpolate(inBelly.hipPos, inBelly.lowerPos, inBelly.Perc);
	inBelly.startUpper.LinearlyInterpolate(inBelly.vertPos, inBelly.upperPos, inBelly.Perc);

	//Enforce a minimum length of 0.01
	vBoneVectorLower = XSIMath.CreateVector3();
	vBoneVectorUpper = XSIMath.CreateVector3();
	
	vBoneVectorLower.Sub(inBelly.startLower, inBelly.lowerPos);
	vBoneVectorUpper.Sub(inBelly.startUpper, inBelly.upperPos);	
	
	if(vBoneVectorLower.Length() <= 0.01)
	{
		vBoneVectorLower.Sub(inBelly.hipPos, inBelly.lowerPos);
		vBoneVectorLower.NormalizeInPlace();
		inBelly.startLower.ScaleAdd( 0.015, vBoneVectorLower, inBelly.lowerPos );
	
	}
	if(vBoneVectorUpper.Length() <= 0.05)
	{
		vBoneVectorUpper.Sub(inBelly.vertPos, inBelly.upperPos);	
		vBoneVectorUpper.NormalizeInPlace();
		inBelly.startUpper.ScaleAdd( 0.015, vBoneVectorUpper, inBelly.upperPos );
	}

	var chainNormal= XSIMath.CreateVector3();
	chainNormal.set(0,90,0);

	inBelly.BellyRoot = ActiveSceneRoot.Add2DChain(inBelly.lowerPos, inBelly.upperPos, chainNormal, 1);
	inBelly.BellySkel = GetSkeleton(inBelly.BellyRoot);
	inBelly.BellyEff = inBelly.BellySkel(2);

	inBelly.UpperRoot = DrawSpringChain(inBelly.Vertebra, inBelly.startUpper, inBelly.upperPos, chainNormal);
	inBelly.UpperSkel = GetSkeleton(inBelly.UpperRoot);
	inBelly.UpperEff = inBelly.UpperSkel(2);


	inBelly.LowerRoot = DrawSpringChain(inBelly.Hip, inBelly.startLower, inBelly.lowerPos, chainNormal);
	inBelly.LowerSkel = GetSkeleton(inBelly.LowerRoot);
	inBelly.LowerEff = inBelly.LowerSkel(2);


	// wire the assembly together

	inBelly.LowerEff.AddChild(inBelly.BellyRoot);
	inBelly.BellySkel(1).joint.UpVectorReference = inBelly.Hip;
	inBelly.BellyEff.Kinematics.AddConstraint("Position", inBelly.UpperEff, false);


	return inBelly;
}
/*------------------------------
 Set Scaling
------------------------------*/
function SetScaling(inBelly){

	// get the scale from an average of the two bone lengths

	var d1 = XSIMath.CreateVector3();
	var d2 = XSIMath.CreateVector3();
	d1.Sub(inBelly.lowerPos, inBelly.startLower);
	d2.Sub(inBelly.upperPos, inBelly.startUpper);

	inBelly.Scale = ((d1.Length() + d2.Length())/2 * .1) ;
	inBelly.SpringScale = ((d1.Length() + d2.Length())/2 )  * .4


	setChainScale(inBelly.BellySkel, inBelly.Scale * 2)
	setChainScale(inBelly.UpperSkel, inBelly.Scale)
	setChainScale(inBelly.LowerSkel, inBelly.Scale)


	inBelly.BellyBone.shadow_icon.value = 6;

	inBelly.UpperBone.shadow_icon.value = 7;
	inBelly.LowerBone.shadow_icon.value = 7;

	return inBelly;
}
/*------------------------------
 Naming and Grouping
------------------------------*/
function NamingAndGrouping(inBelly){

	inBelly.BellyBone = inBelly.BellySkel(1);
	inBelly.UpperBone = inBelly.UpperSkel(1);
	inBelly.LowerBone = inBelly.LowerSkel(1);


	inBelly.BellyRoot.Name = "BellyRoot";
	inBelly.BellyBone.Name = "Belly";
	inBelly.BellyEff.Name = "BellyEff";

	inBelly.UpperRoot.Name = "UpperBellyRoot";
	inBelly.UpperBone.Name = "UpperBellyBone";
	inBelly.UpperEff.Name = "UpperBellyEff";

	inBelly.LowerRoot.Name = "LowerBellyRoot";
	inBelly.LowerBone.Name = "LowerBellyBone";
	inBelly.LowerEff.Name = "LowerBellyEff";

	inBelly.Hidden.add(inBelly.BellyRoot);
	inBelly.Hidden.add(inBelly.UpperRoot);
	inBelly.Hidden.add(inBelly.LowerRoot);
	inBelly.Hidden.add(inBelly.BellyEff);
	inBelly.Hidden.add(inBelly.UpperEff);
	inBelly.Hidden.add(inBelly.LowerEff);

	inBelly.Envelope.add(inBelly.BellyBone);

	return inBelly;

}
/*------------------------------
 Draw Spring Chain
------------------------------*/
function DrawSpringChain(inParent, inStart, inEnd, inNormal){


	var springNormal = XSIMath.CreateVector3();
	springNormal.set(0,1,0)

	var sChain = inParent.Add2DChain(inStart, inEnd, inNormal, 1);

	var skel = GetSkeleton(sChain);

	// get a rotation that's pointing -y to the next point and x+ on the plane.

	var dominantAxis = XSIMath.CreateVector3();
	var secondaryAxis = XSIMath.CreateVector3();

	dominantAxis.set(0,-1,0);
	secondaryAxis.set(1,0,0);

	var boneVec = XSIMath.CreateVector3();

	boneVec.sub(inEnd, inStart);


	var Trans1 = RotationFromTwoVectors(boneVec, springNormal, dominantAxis, secondaryAxis);
	Trans1.SetTranslation(inStart);
	skel(0).Kinematics.Global.Transform = Trans1;


	// give the bone a rotation that's pointing x to the next point and z+ on the plane.

	var bDominantAxis = XSIMath.CreateVector3();
	var bSecondaryAxis = XSIMath.CreateVector3();

	bDominantAxis.set(1,0,0);
	bSecondaryAxis.set(0,1,0);

	var Trans2 = RotationFromTwoVectors(boneVec, springNormal, bDominantAxis, bSecondaryAxis);
	Trans2.SetTranslation(inStart);
	skel(1).Kinematics.Global.Transform = Trans2;

	return sChain;

}
/*------------------------------
 Apply Spring
------------------------------*/
function applySpring(inRoot, inEff, inScale){

	var myop = ApplySpringOp (inEff +","+ inRoot)	

}
/*--------------------------------
 Set Chain Scale
-------------------------------*/
function setChainScale(inSkel, inScale){


		for(var f = 0; f < inSkel.count; f++){

			inSkel(f).shadow_icon.value  = 1;
			inSkel(f).primary_icon.value  = 0;


			var bsize;
			if(f==0 || f==inSkel.count-1){

				bsize = (inScale <= 0.02 ) ? 0.01 : inScale * .5;

				inSkel(f).shadow_scaleX.value  = bsize;
				inSkel(f).radius.value  = bsize;
				inSkel(f).shadow_scaleZ.value  = bsize;
			}
			else{
			
				bsize = (inScale <= 0.01 ) ? 0.01 : inScale;
				inSkel(f).radius.value  = bsize;
				inSkel(f).shadow_scaleZ.value  = bsize;
			}

		}

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
 Hide Setup
--------------------------------*/
function hideSetup(inBelly){


	if(inBelly.Model.Groups.Item("Hidden")){

		inBelly.HiddenGroup = inBelly.Model.Groups.Item("Hidden");
		inBelly.HiddenGroup.AddMember (inBelly.Hidden);

	}
	else{
		for(var m = 0;m < inBelly.Hidden.count;m++){
			inBelly.Hidden(m).properties("visibility").viewvis.value = false;
		}
	}

	if(inBelly.Model.Groups.Item("Envelope_group")){

		inBelly.envGroup = inBelly.Model.Groups.Item("Envelope_group");
		inBelly.envGroup.AddMember(inBelly.Envelope);

	}

	return inBelly;
}
