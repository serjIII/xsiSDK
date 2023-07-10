////////////////////////////////////////
// Make 2 Point Slide
///////////////////////////
// Made as part of the component SDK
/// Dec 2003 Michael Isner
///////////////

/*=================================

--------- PARAMETERS -------------------

	inPrefix 			= the prefix for the newly created slide nulls.
	inGuidePoint1 		= object, whose pose will be assumed by the first slide point.
	inGuidePoint2 		= object, whose pose will be assumed by the second slide point.
	inParent1 			= the parent under which the first slide point will be place
	inParent2 			= the parent under which the second slide point will be place
	inUpVector 			= the up vector for the Binding Point (optional)
	inBoundingVolume 	= a bounding volume implicit to stay outside of when sliding (optional)


--------- RETURNS -------------------

Returns a PointSlide Object where:

	PointSlide.BindNull 	= the new bound center point
	PointSlide.TopNull 		= is the first constraint point
	PointSlide.BaseNull 	= is the second constraint point
	PointSlide.Constraint 	= is the new Constraint
	PointSlide.Hidden 		= is a collection of Hidden object
	PointSlide.Envelope 	= is a collection of objects to be Enveloped


/====================================*

/*--------------------------------
 Make 2 Point Slide
--------------------------------*/
function make2PointSlide (inPrefix, inGuidePoint1, inGuidePoint2, inParent1, inParent2, inUpVector, inBoundingVolume)
{

	//////////////////////////////////
	//Argument validation
	//////////////////////////////////

	var l_aArgsToConvert = Array(1,2,3,4,5,6);
	var a;
	for (i = 0; i < l_aArgsToConvert.length; i++)
	{
		a = l_aArgsToConvert[i];
		if(arguments[a]) { arguments[a] = arguments[a](0);}	//extract first object from coll.
	}

	//check required arguments
	var l_aRequiredArgs = Array(1,2,3,4);
	var l_bExit;
	for (i = 0; i < l_aRequiredArgs.length; i++)
	{
		a = l_aRequiredArgs[i];
		if(!arguments[a]){ logmessage("make2PointSlide: argument " + a + " is invalid", siError); l_bExit = true;	}
	}
	if(l_bExit) return;

	//////////////////////////////////
	//Create slide object
	//////////////////////////////////

	var Slide = new Object();

	Slide.model = inParent1.model;

	Slide.Hidden = new ActiveXObject("XSI.Collection");
	Slide.Envelope = new ActiveXObject("XSI.Collection");

	Slide.BindNull = inParent1.AddNull(inPrefix + "Bind");
	Slide.TopNull = inParent1.AddNull(inPrefix + "Top");
	Slide.BaseNull = inParent2.AddNull(inPrefix + "Base");


	var t1 = inGuidePoint1.Kinematics.Global.Transform;
	var t2 = inGuidePoint2.Kinematics.Global.Transform;
	Slide.TopNull.Kinematics.Global.Transform = t1;
	Slide.BaseNull.Kinematics.Global.Transform = t2;

	Slide.BindNull.AddProperty("Display Property")
	Slide.BindNull.properties("display").wirecol.value = 748;
	Slide.TopNull.AddProperty("Display Property")
	Slide.TopNull.properties("display").wirecol.value = 472;
	Slide.BaseNull.AddProperty("Display Property")
	Slide.BaseNull.properties("display").wirecol.value = 472;


	// need to calibrate the distance betwen the points because they need to scale with different sized guides.

	p1 = XSIMath.CreateVector3();
	t1.GetTranslation(p1);
	p2 = XSIMath.CreateVector3();
	t2.GetTranslation(p2);

	var dist2 = XSIMath.CreateVector3();
	dist2.Sub(p1, p2);



	Slide.BindNull.size.value = dist2.Length() *.1;
	Slide.TopNull.size.value =  dist2.Length() *.05;
	Slide.BaseNull.size.value = dist2.Length() *.05;


	var cObjs = new ActiveXObject("XSI.Collection");
	cObjs.add(Slide.TopNull);
	cObjs.add(Slide.BaseNull);

	Slide.Hidden.add(Slide.TopNull);
	Slide.Hidden.add(Slide.BaseNull);

	Slide.Envelope.add(Slide.BindNull);

	Slide.Constraint = Slide.BindNull.Kinematics.AddConstraint("TwoPoints", cObjs, false);

	if(inBoundingVolume){
		var bCnst = Slide.BindNull.Kinematics.AddConstraint("BoundingVolume", inBoundingVolume, false);
		bCnst.Parameters("type").value = 1;
	}

	if(inUpVector){
		Slide.Constraint.UpVectorReference = inUpVector;
	}

	Slide = hideSetup(Slide);

	return Slide;

}
/*--------------------------------
 Hide Setup
--------------------------------*/
function hideSetup(inSlide){


	if(inSlide.model.Groups.Item("Hidden")){

		inSlide.HiddenGroup = inSlide.model.Groups.Item("Hidden");
		inSlide.HiddenGroup.AddMember (inSlide.Hidden);

	}
	else{
		for(var m = 0;m < inSlide.Hidden.count;m++){
			inSlide.Hidden(m).properties("visibility").viewvis.value = false;
		}
	}

	if(inSlide.model.Groups.Item("Envelope_group")){

		inSlide.envGroup = inSlide.model.Groups.Item("Envelope_group");
		inSlide.envGroup.AddMember(inSlide.Envelope);

	}

	return inSlide;
}


