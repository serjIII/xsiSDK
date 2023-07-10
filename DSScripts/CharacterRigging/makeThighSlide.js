////////////////////////////////////////
// Make Thigh Slide
///////////////////////////
// Made as part of the component SDK
/// Dec 2003 Michael Isner
///////////////


/*=================================

--------- PARAMETERS -------------------

	inPrefix = the prefix for the newly created slide nulls.


	inGuideObjects > an XSI Collection of items to search for when making the dog Leg.
			 it must have a minimum of 5 items where

			1) The first 2 objects are the Guide Points for the back slide, in the order:
				 Top of Slide, Bottom of Slide;
			2) The 3rd Object is the Guide Point for the Bottom of the Slide at the side of the hip.
			3) The 4th and 5th objecst are the line runing down the center of the thigh, in the
				 order: Start of leg, Knee.


	inUpperParent > the parent for the upper part of the thigh slide assembly, typically the hip.
	inLowerParent > the parent for the lower part of the thigh slide assembly, typically the thigh bone.



--------- RETURNS -------------------

Returns a ThighSlide Object where:


	ThighSlide.BindNull = the new bound center point
	ThighSlide.TopNull = is the first constraint point
	ThighSlide.BaseNull = is the second constraint point
	ThighSlide.Volume = is the new implicit volume being avoided by the slide

====================================*/


/*--------------------------------
 Make Thigh Slide
--------------------------------*/
function  makeThighSlide(inPrefix, inGuideObjects, inUpperParent, inLowerParent){

	//because arghandlers are used all the input objects are collections. On the last two
	//arguments we only want the first object from collection.
	var l_bExit = false;
	for (i = 2; i < arguments.length; i++)
	{
		if(arguments[i]){arguments[i] = arguments[i](0);}
		if(!arguments[i]){ logmessage("makeThighSlide: argument " + i + " is invalid", siError); l_bExit = true;}
	}
	if(l_bExit) return;

	var thighSlide = new Object;

	thighSlide.Guides = inGuideObjects;

	thighSlide = findPositions(thighSlide);


	// get the points and vectors needed


	var backTop = thighSlide.Pos[0];
	var backBottom = thighSlide.Pos[1];
	var hipSide =  thighSlide.Pos[2];
	var leg = thighSlide.Pos[3];
	var knee = thighSlide.Pos[4];




	// plane point is halfway betten the back slide objects

	var PlanePoint = XSIMath.CreateVector3();
	PlanePoint.LinearlyInterpolate(backTop, backBottom, .5);


	// plane normal is the line of the leg

	var PlaneNormal = XSIMath.CreateVector3();
	PlaneNormal.sub(leg, knee);



	// next project the side of the hip onto our plane, and
	// get the vector going to the center of the bone.  Then exend that
	// vector to meet the x = 0 plane (InnerPoint).


	var hipSide2 = ProjectOnPlane (hipSide, PlaneNormal, PlanePoint);

	var HipOnBone =	ProjectOnVector (hipSide2, leg, knee);

	// ok here get a point that projects the line you have onto x plane.
	// that way the thighs are not overlapping past the origin.


	var PlaneNormal2 = XSIMath.CreateVector3()
	var PlanePoint2 = XSIMath.CreateVector3()
	PlaneNormal2.set (-1,0,0);
	PlanePoint2.set (0,0,0);

	var InnerPoint = VectorPlaneIntersection (hipSide2, HipOnBone, PlaneNormal2, PlanePoint2);



	// now it's the center of this extended vector that becomes
	// the center of our volume.

	var VolumePoint= XSIMath.CreateVector3()
	VolumePoint.LinearlyInterpolate (hipSide2, InnerPoint, .5);


	thighSlide.Volume = inLowerParent.AddPrimitive("Sphere", inPrefix + "ThighVolume")

	var radius = XSIMath.CreateVector3();
	radius.sub(PlanePoint, VolumePoint)

	thighSlide.Volume.Parameters("Radius").value = radius.Length();

	// orient towards PlanePoint and hipSide2


	var v1 = XSIMath.CreateVector3();
	var v2 = XSIMath.CreateVector3();

	v1.sub(VolumePoint, PlanePoint);
	v2.sub(VolumePoint, hipSide2);

	var axis1 = XSIMath.CreateVector3();
	var axis2 = XSIMath.CreateVector3();

	axis1.set(0,0,-1);
	axis2.set(1,0,0);

	var volTrans = RotationFromTwoVectors(v1, v2, axis1, axis2);
	volTrans.SetTranslation(VolumePoint);


	// now set the scale of the Volume
	var  zDist = XSIMath.CreateVector3()
	zDist.sub(VolumePoint,  hipSide2);

	var xScale = zDist.Length()/radius.Length()

	volTrans.SetScalingFromValues(xScale,2,1);

	thighSlide.Volume.Kinematics.Global.Transform = volTrans;

	thighSlide.Volume.AddProperty("Display Property")
	thighSlide.Volume.properties("display").wirecol.value = 728



	// make sliding here

	var Slide = make2PointSlide (inPrefix, thighSlide.Guides(0), thighSlide.Guides(1), inUpperParent, inLowerParent, inUpperParent, thighSlide.Volume)

	thighSlide.BindNull = Slide.BindNull;
	thighSlide.TopNull = Slide.TopNull;
	thighSlide.BaseNull = Slide.BaseNull;


	return thighSlide;

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

	return T2;

}

/*------------------------------
 Project On Plane
------------------------------*/
function ProjectOnPlane(inPoint, inPlaneNormal, inPlanePoint)
{

	var planeEnd = XSIMath.CreateVector3();
	var vec = XSIMath.CreateVector3();
	var vProjection = XSIMath.CreateVector3();
	var pProjection = XSIMath.CreateVector3();

	planeEnd.Add(inPlanePoint, inPlaneNormal);
	vec.sub(inPoint, inPlanePoint);

	dot = vec.Dot(inPlaneNormal);
	var ScaleChange = (dot/Math.pow(inPlaneNormal.Length() , 2));
	vProjection.Scale(ScaleChange, inPlaneNormal);
	pProjection.Sub(vec, vProjection);
	pProjection.AddInPlace(inPlanePoint);

	return pProjection;

}
/*------------------------------
 Project On Vector
------------------------------*/
function ProjectOnVector(inPoint, inVstart, inVend){


	var vec = XSIMath.CreateVector3();
	var vProjection = XSIMath.CreateVector3();

  var PointVector = XSIMath.CreateVector3();

	PointVector.Sub(inPoint, inVstart);
	vec.sub(inVend, inVstart);


	var dot = PointVector.Dot(vec)
	var ScaleChange = (dot/Math.pow(vec.Length() , 2));

	vProjection.Scale(ScaleChange, vec);

	vProjection.AddInPlace(inVstart);

	return vProjection;

}
/*------------------------------
  Vector Plane Intesection
------------------------------*/
function VectorPlaneIntersection(inPoint1, inPoint2, inPlaneNormal, inPlanePoint)
{

	var outPoint = XSIMath.CreateVector3	();

	// t = ( (inPlanePoint - inPoint1) dot(inPlaneNormal)) / ((inPoint2 - inPoint1)dot(inPlaneNormal)))
	// t = top / bottom
	// top = (inPlanePoint - inPoint1) dot(inPlaneNormal)
	// bottom = (inPoint2 - inPoint1)dot(inPlaneNormal)
	// outPoint = inPoint1 + t (inPoint2 - inPoint1)

	// first find top
	var topDif = XSIMath.CreateVector3();
	topDif.sub(inPlanePoint, inPoint1);
	var top = topDif.Dot(inPlaneNormal);

	// then the bottom
	var bottomDif = XSIMath.CreateVector3();
	bottomDif.sub(inPoint2, inPoint1);
	var bottom = bottomDif.Dot(inPlaneNormal);

	if (bottom == 0){
		outPoint.set(0,0,0);
		return outPoint;
	}

	var t = top/bottom

	var oDif = XSIMath.CreateVector3();
	oDif.sub(inPoint2, inPoint1);
	oDif.ScaleInPlace(t);
	var outPoint = XSIMath.CreateVector3	();
	outPoint.Add(inPoint1, oDif);

	return outPoint;

}

/*------------------------------
 Project On Plane
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
 Find Positions
--------------------------------*/
function findPositions(inThighSlide){

	inThighSlide.Pos = new Array();


	for(var t=0;t<inThighSlide.Guides.count;t++){

		inThighSlide.Pos[t] = XSIMath.CreateVector3();
		inThighSlide.Guides(t).Kinematics.Global.Transform.GetTranslation(inThighSlide.Pos[t]);
	}

	return inThighSlide;

}