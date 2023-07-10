////////////////////////////////////////
// Make Joint Compression
///////////////////////////
// Made as part of the component SDK
/// Dec 2003 Michael Isner
///////////////



/*=================================

--------- PARAMETERS -------------------

	inPrefix = the prefix for the newly created slide nulls.

	inUpperBone > the parent for the upper part of the joint assembly.

	inLowerBone > the parent for the lower part of the joint assembly.


	inGuideObjects > an XSI Collection of guide objects.

			1) The first guide elements are the boxes defining a line on the upper joint.
	        The first the one closest to the root (and farthes from the joint)
	        The second is the one closest to the joint.
			2) The third object is the box control in the middle of the raidus curve on the
			   lower joint.
			3) The fourth object is the small sphere that acts as a center point of the radius curve.

	inRollDivisions > a collection of roll division objects so this assembly can bind to to roll
	                  instead of the bone (optional).


	--------- RETURNS -------------------

	Returns a Joint Object where:

		Joint.UpperJoint = The volume avoidance null closest to the root
		Joint.LowerJoint = The volume avoidance null closest to the joint
		Joint.Volume = is the new implicit volume being avoided by the slide
		Joint.Envelope = is a collection of objects to be Enveloped


/====================================*

/*--------------------------------
 Make Joint Compression
--------------------------------*/
function makeJointCompression(inPrefix, inUpperBone, inLowerBone, inGuideObjects, inRollDivisions ){

	//////////////////////////////////
	//Arugment validation
	//////////////////////////////////

	var l_aArgsToConvert = Array(1,2);
	var a;
	for (i = 0; i < l_aArgsToConvert.length; i++)
	{
		a = l_aArgsToConvert[i];
		if(arguments[a])
			{ arguments[a] = arguments[a](0);}	//extract first object from coll.
	}

	//check required arguments
	var l_aRequiredArgs = Array(1,2,3);
	var l_bExit;
	for (i = 0; i < l_aRequiredArgs.length; i++)
	{
		a = l_aRequiredArgs[i];
		if(!arguments[a]){ logmessage("makeJointCompression: argument " + a + " is invalid", siError); l_bExit = true;	}
	}
	if(l_bExit) return;

	//////////////////////////////////
	var Joint = new Object;

	Joint.UpperBone = inUpperBone;
	Joint.LowerBone = inLowerBone;

	Joint.UpperTarget = inGuideObjects(0);
	Joint.LowerTarget = inGuideObjects(1);
	Joint.CurveTarget = inGuideObjects(2);
	Joint.CurveCenter = inGuideObjects(3);


	Joint.model = Joint.UpperBone.model;
	Joint.Envelope = new ActiveXObject("XSI.Collection");

	Joint.Volume = Joint.LowerBone.AddPrimitive("Sphere", inPrefix + "BendVolume");


	targetPos = XSIMath.CreateVector3();
	Joint.CurveTarget.Kinematics.Global.Transform.GetTranslation(targetPos);
	centerPos = XSIMath.CreateVector3();
	Joint.CurveCenter.Kinematics.Global.Transform.GetTranslation(centerPos);


	var dist = XSIMath.CreateVector3();
	dist.sub(centerPos, targetPos);

	Joint.Volume.Parameters("Radius").value = dist.Length();



	// translate back 75% of the radius

	dist.ScaleInPlace(.25);

	volCenter = XSIMath.CreateVector3();
	volCenter.Add(centerPos, dist);

	var trans = XSIMath.CreateTransform();
	trans.SetTranslation(volCenter);
	Joint.Volume.Kinematics.Global.Transform = trans;


	// if there was roll subdivision on the leg then you
	// need to parent under the closest divider.  Otherwise, use
	// parent under the thigh bone

	if(inRollDivisions.count > 0){
		var UpperJointParent = FindClosestObject(Joint.UpperTarget, inRollDivisions);
		var LowerJointParent = FindClosestObject(Joint.UpperTarget, inRollDivisions);
	}
	else{
		var UpperJointParent = Joint.UpperBone;
		var LowerJointParent = Joint.UpperBone;
	}

	Joint.UpperJoint = UpperJointParent.AddNull(inPrefix + "UpperJoint")
	Joint.LowerJoint = LowerJointParent.AddNull(inPrefix + "LowerJoint")

	var t1 = Joint.UpperTarget.Kinematics.Global.Transform;
	var t2 = Joint.LowerTarget.Kinematics.Global.Transform;

	//
	// 97740: reset the scaling to [1,1,1] so we don't have huge compression nulls when guide is scaled.
	//
	t1.SetScalingFromValues(1,1,1);
	t2.SetScalingFromValues(1,1,1);	
	Joint.UpperJoint.Kinematics.Global.Transform = t1;
	Joint.LowerJoint.Kinematics.Global.Transform = t2;



	var p1 = Joint.UpperJoint.Kinematics.AddConstraint("Pose", UpperJointParent, true)
	var p2 = Joint.LowerJoint.Kinematics.AddConstraint("Pose", LowerJointParent, true)

	var b1 = Joint.UpperJoint.Kinematics.AddConstraint("BoundingVolume", Joint.Volume, false)
	var b2 = Joint.LowerJoint.Kinematics.AddConstraint("BoundingVolume", Joint.Volume, false)


	Joint.Volume.AddProperty("Display Property")
	Joint.Volume.properties("display").wirecol.value = 728

	Joint.UpperJoint.AddProperty("Display Property")
	Joint.UpperJoint.properties("display").wirecol.value = 748
	Joint.LowerJoint.AddProperty("Display Property")
	Joint.LowerJoint.properties("display").wirecol.value = 748

	// need to calibrate the distance betwen the joints because they need to scale with different sized guides.

	p1 = XSIMath.CreateVector3();
	t1.GetTranslation(p1);
	p2 = XSIMath.CreateVector3();
	t2.GetTranslation(p2);

	var dist2 = XSIMath.CreateVector3();
	dist2.Sub(p1, p2);


	Joint.UpperJoint.size =  dist2.Length() * .4
	Joint.LowerJoint.size = dist2.Length() * .4

	Joint.Envelope.add(Joint.UpperJoint);
	Joint.Envelope.add(Joint.LowerJoint);

	Joint = groupSetup(Joint);

	return Joint;
}
/*--------------------------------
 Find Closest Object
--------------------------------*/
function FindClosestObject(inObj, inObjList){

		var goal = XSIMath.CreateVector3();
		inObj.Kinematics.Global.Transform.GetTranslation(goal);

		for(var i = 0; i < inObjList.count; i++){

			var canidate = XSIMath.CreateVector3();
			inObjList(i).Kinematics.Global.Transform.GetTranslation(canidate);

			canidate.SubinPlace(goal);
			grade = canidate.length();

			if(i ==0){
				var bestGrade = grade;
				var bestMatch = inObjList(i)
			}
			else{
				if (grade < bestGrade){
					bestGrade = grade;
					bestMatch = inObjList(i)
				}
			}
		}

		return bestMatch;

}
/*--------------------------------
 Group Setup
--------------------------------*/
function groupSetup(inJoint){

	if(inJoint.model.Groups.Item("Envelope_group")){

		inJoint.envGroup = inJoint.model.Groups.Item("Envelope_group");
		inJoint.envGroup.AddMember(inJoint.Envelope);

	}

	return inJoint;
}




