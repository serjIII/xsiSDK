//******************************************************************************
// String Constants (used to translate)
//******************************************************************************
var IDS_STEP_DETECTION_TITLE		= 1050;

// RTK Setup
// Step Detection
// misner march 2002


/*--------------------------------
 Step Detection
--------------------------------*/
function TagStepMarksProc( in_sel )
{
	var lookup = new body( in_sel );
	
	logmessage ("RFoot: " + lookup.rfoot)
	logmessage ("LFoot: " + lookup.lfoot)	
	logmessage ("cog: " + lookup.cog)
		
	
	var ui = new get_ui();
	
	//cycle through the feet
	var topMarker = ActiveSceneRoot.AddPrimitive("Null", "Foot_Steps");
	

	place_markers(ui.fstart, ui.fend, ui.thresh , lookup.rfoot, topMarker);
	place_markers(ui.fstart, ui.fend, ui.thresh , lookup.lfoot, topMarker);
	
}
/*--------------------------------
 Body (get the parts)
--------------------------------*/
function body( in_sel )
{
	
	var sel = GetValue("SelectionList");
	if (sel.count == 0){
		var cModel = ActiveSceneRoot
	}
	else{
		if (Selection(0).type == "#model"){
			var cModel = Selection(0)
		}
		else{
			var cModel = Selection(0).model
		}
	}
	var rfeet = new ActiveXObject("XSI.Collection");
	var lfeet = new ActiveXObject("XSI.Collection");	
	var cogs = new ActiveXObject("XSI.Collection");
		
	rfeet = get_objectswithproperty(cModel , "RightFoot", rfeet);
	lfeet = get_objectswithproperty(cModel , "LeftFoot", lfeet);
	cogs = get_objectswithproperty(cModel , "CenterOfGravity", cogs);
	
	this.rfoot = rfeet(0);
	this.lfoot = lfeet(0);
	this.cog = cogs(0);
}
/*------------------------------------------
 Get Object containing a given property
--------------------------------------------*/
function get_objectswithproperty(in_obj, in_param, in_return)
{
	var i;
	var children = in_obj.children;
 	var check = in_obj.Properties(in_param)
	if(check != null){			
			in_return.add(in_obj);
	}

	for (i = 0; i < children.count; i++){				
  		in_return = get_objectswithproperty(children(i), in_param, in_return);	
	}
	
	return in_return;
}
/*--------------------------------
 Get UI
--------------------------------*/
function get_ui()
{
	
	
	var lstart = GetValue("Project.Data.PlayControl.In")
	var lend = GetValue("Project.Data.PlayControl.Out")
	
	var SceneRoot =  Application.ActiveProject.ActiveScene.Root
	var mysliders = SceneRoot.AddProperty("Custom_parameter_list",0,"Test_step_detection");
	var fstart = mysliders.AddParameter2("Start",  siInt4, lstart  ,-1000000, 1000000, lstart , lend, 8, 1, "Start", "Start");
	var fend = mysliders.AddParameter2("End",  siInt4, lend ,-1000000, 100000 , lstart , lend, 8, 1, "End", "End");
	
	var thresh = mysliders.AddParameter2("velocity_threshold", siDouble, .2 ,0 , 100, 0, 100, 8, 1, "Velocity Threshold", "Velocity Threshold");	

	if(inspectobj( mysliders, "", XSIUtils.Translate( IDS_STEP_DETECTION_TITLE, "XSISCRIPTS" ), siModal,0 )){	
		deleteobj(mysliders);
		logmessage ( "Command was cancelled !", siError);
		return;
	}	

	
	this.thresh = thresh.value;
	this.fstart = fstart.value;
	this.fend = fend.value;

	deleteobj(mysliders);	
}
/*--------------------------------
 Place Markers
--------------------------------*/
function place_markers(Cstart, Cend , in_threshold, in_foot, in_parent)
{
	var min_handle_dist = 5
	
	var midspan, startSpan ;
	
	var handles = new Array(1);
	var positions = new Array(Cend - Cstart)
	
	var footLock_timeSpan = 0; 
	var thresholdHit = null;
		
	for (i = Cstart; i <= Cend ; i++){
	 

		// get translation
		var pos = XSIMath.CreateVector3();	
		in_foot.Kinematics.Global.Transform(i).GetTranslation(pos);

		positions[i - Cstart] = pos;
		var ldelta = XSIMath.CreateVector3();
	
		// check we have passed the minimum threshold for new a marker
		
		if (i != Cstart && i != Cend){

			if(i - handles[handles.length - 1] > min_handle_dist || handles[0] == null){
			
			
				Previous = positions[i - Cstart - 1];
				ldelta.Sub(Previous, pos);
									
				if(ldelta.Length() < in_threshold){
					

					thresholdHit = 1;
					footLock_timeSpan = footLock_timeSpan + 1;
				
					// if we are on the second evaluation then we have to assume
					// the first was stepping (since there's no prior frame to determine velocity with).
					
					if(i == Cstart + 1){
						// if there is a step on the second evaluation we have to assume there
						// was one on the first (since there's no way to get velocity first time around).
						
						footLock_timeSpan = footLock_timeSpan + 1
					}
											
					
					// if we are at the end, clean up and close any running step span
					if(i == Cend){
						startSpan = positions[i - Cstart - footLock_timeSpan];
						var lCone = get_marker(startSpan, pos, in_parent);
					}
				}	
				else{
					
					// check if we are ending a timespan where the foot is locked.
					if(thresholdHit == 1){
					
						startSpan = positions[i - Cstart - footLock_timeSpan];
						var lCone = get_marker(startSpan, pos, in_parent);
				
						handles[handles.length] = midspan;
						
						thresholdHit = null;
						footLock_timeSpan = 0; 
					}			
				}
			}
		}
		else
		{
			startSpan = positions[i - Cstart];
			var lCone = get_marker(startSpan, pos, in_parent);
		}
	} 
}
/*--------------------------------
 Get Cone
--------------------------------*/
function get_cone(in_parent){
	
	var cube = in_parent.AddPrimitive("Cube", "Step");
  	cube.length= .5
  	
	cube.AddProperty("Display Property")
	cube.properties("display").wirecol.value = 638

	return cube;
	
}
/*--------------------------------
 Get Cone
--------------------------------*/
function get_marker(in_pos1, in_pos2, in_parent){
	
	 var cube = in_parent.AddPrimitive("Cube", "StartStep");
  	cube.length= .1
	//Translate(cube , in_pos1.x, in_pos1.y, in_pos1.z, siAbsolute, siView, siObj, siXYZ, null, null, null);
	
	cube.Kinematics.Global.parameters("posx").value = in_pos1.x;
	cube.Kinematics.Global.parameters("posy").value = in_pos1.y;
	cube.Kinematics.Global.parameters("posz").value = in_pos1.z;			
	
	cube.AddProperty("Display Property")
	cube.properties("display").wirecol.value = 302	
	
	var cube = in_parent.AddPrimitive("Cube", "EndStep");
	cube.length= .1
	// Translate(cube , in_pos2.x, in_pos2.y, in_pos2.z, siAbsolute, siView, siObj, siXYZ, null, null, null);
	cube.Kinematics.Global.parameters("posx").value = in_pos2.x;
	cube.Kinematics.Global.parameters("posy").value = in_pos2.y;
	cube.Kinematics.Global.parameters("posz").value = in_pos2.z;	
	
	cube.AddProperty("Display Property")
	cube.properties("display").wirecol.value = 302
	
	var Verticies = new Array(7);
	var knots = new Array(1);

	Verticies[0] = in_pos1.x;
	Verticies[1] = in_pos1.y;	
	Verticies[2] = in_pos1.z;	
	Verticies[3] = 1;	
	Verticies[4] = in_pos2.x;
	Verticies[5] = in_pos2.y;	
	Verticies[6] = in_pos2.z;	
	Verticies[7] = 1;		

	knots[0] = 0;
	knots[1] = 1;
		
	var line = in_parent.AddNurbsCurve(Verticies, knots, 0, 1, siNonUniformParameterization, siSINurbs);
	line.AddProperty("Display Property")
	line.properties("display").wirecol.value = 1022
	return cube;
}
//------------------------------------


/*--------------------------------
 Tag Center of Gravity
--------------------------------*/
function tagObjectProc( in_sel, in_tagstr )
{
	if(in_sel(0) == null)
	{
		logmessage("Please select an object to tag first", siWarning);
		return;
	}
	
	var i;
	for (i = 0; i < in_sel.count; i++)
	{
		var checkEffector = in_sel(i).Properties(in_tagstr);
			
		if( checkEffector == null)
		{
			var cProp = in_sel(i).AddProperty("Custom_parameter_list",0,in_tagstr);
			logmessage(in_sel(i) + " tagged as " + in_tagstr);	
 		}
 		else
		{
 			logmessage(in_sel(i) + " already tagged as " + in_tagstr);
 		}
	}
 
}
//---------------------------------

