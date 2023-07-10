 ////////////////////////////////////////
// Make Hip Rigging Component
// misner Dec 2003


/*--------------------------------
 Make Hip
--------------------------------*/
function makeHip(inGuideObj, inTopX, inTopY, inTopZ, inSideX, inSideY, inSideZ)
{

	//get guide object from collection
	inGuideObj = inGuideObj(0);

	var hip = new Object();
	hip.topPos = XSIMath.CreateVector3();
	hip.sidePos = XSIMath.CreateVector3();
	hip.Trans = XSIMath.CreateTransform();

	if(!inGuideObj)
	{
		hip = getHipData(hip);
		if(!hip){return}
	}
	else
	{
		hip.Trans = inGuideObj.Kinematics.Global.Transform;
		hip.topPos.x = inTopX;
		hip.topPos.y = inTopY;
		hip.topPos.z = inTopZ;
		hip.sidePos.x = inSideX;
		hip.sidePos.y = inSideY;
		hip.sidePos.z = inSideZ;
	}

	var hip = createHip(hip);
	
	return hip.hipBone;
}
/*--------------------------------
 Get Hip Data
--------------------------------*/
function getHipData(inHip){

	var sel = GetValue("SelectionList");


	if (sel.count == 0){
		logmessage("Hip Maker Cancel, Requires and Object Selection to define Hip Transform", siError);
		return;
	}

	inHip.Trans = sel(0).Kinematics.Global.Transform;

	var pos = PickPosition("Pick Top of Hip Position", null);
	var button = pos.value("ButtonPressed");
	if(!button){return}

	inHip.topPos.x = pos.value("PosX");
	inHip.topPos.y = pos.value("PosY");
	inHip.topPos.z = pos.value("PosZ");


	var pos = PickPosition("Pick Side of Hip Position", null);
	var button = pos.value("ButtonPressed");
	if(!button){return}

	inHip.sidePos.x = pos.value("PosX");
	inHip.sidePos.y = pos.value("PosY");
	inHip.sidePos.z = pos.value("PosZ");

	return inHip;


}
/*--------------------------------
 Create Hip
--------------------------------*/
function createHip(inHip){

	// first get the midpoint which is the center of the hip plate



	inHip.hipBone = ActiveSceneRoot.AddGeometry ("Circle", "NurbsCurve", "HipPlate")
	inHip.hipBone.Kinematics.Global.Transform = inHip.Trans;

	inHip.hipBone.AddProperty("Display Property");
	inHip.hipBone.properties("display").wirecol.value = 49;

  	var rtOp = ApplyOp("HipIcon", inHip.hipBone, 0)(0);
//	var rtOp  = ConvertScriptedOp(sop);


	var p1 = XSIMath.MapWorldPositionToObjectSpace (inHip.Trans, inHip.sidePos);
	var p2 = XSIMath.MapWorldPositionToObjectSpace (inHip.Trans, inHip.topPos);

	SetValue(rtOp + ".spine_point_x", p2.x, null);
	SetValue(rtOp + ".spine_point_y", p2.y, null);
	SetValue(rtOp + ".spine_point_z", p2.z, null);

	SetValue(rtOp + ".leg_point_x", p1.x, null);
	SetValue(rtOp + ".leg_point_y", p1.y, null);
	SetValue(rtOp + ".leg_point_z", p1.z, null);

	SetValue(rtOp + ".height", 1.3, null);
	SetValue(rtOp + ".indent_height", 0.5, null);
	SetValue(rtOp + ".top_height", 0.4, null);
	SetValue(rtOp + ".socket_height", 0.3, null);
	SetValue(rtOp + ".socket_depth", 0.5, null);
	SetValue(rtOp + ".socket_width", 0.5, null);
	SetValue(rtOp + ".depth", .4, null);
	SetValue(rtOp + ".cap_width", 0.25, null);
	SetValue(rtOp + ".width", 0.7, null);


	return inHip;

}