var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script>\n\
      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\n\
      <meta name=\"product\" content=\"SI\" />\n\
      <meta name=\"release\" content=\"2015\" />\n\
      <meta name=\"book\" content=\"Developer\" />\n\
      <meta name=\"created\" content=\"2014-03-13\" />\n\
      <meta name=\"topicid\" content=\"GUID-C7D630DF-001E-48CC-B508-F959BA4721A5\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Example: Anatomy of a Custom Rig Script</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"positions\", \"si_cpp/group__RenderMapDefine.html#ga4ff6c20401928cc896711bb86fab2870\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"color\", \"si_cpp/group__RenderMapDefine.html#ga9b982a36d73688fd43fe5f3539824d21\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"name\", \"si_cpp/group__RenderMapDefine.html#ga882c17490314f92c7159d6d7d69696e7\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"shadow\", \"si_cpp/group__RenderMapDefine.html#ga2779bc97d58f2cac3fde332db7516177\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"type\", \"si_cpp/group__RenderMapDefine.html#ga7117e14e60390664f1862525dd6acaf6\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-C7D630DF-001E-48CC-B508-F959BA4721A5\"></a></span><div class=\"head\">\n\
            <h1>Example: Anatomy of a Custom Rig Script</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-CDD733B4-BDE6-410A-ABE1-AB75124DE02E\"></a></span>This example builds a simple biped using the Character Development Kit\'s rigging kit\n\
               commands. You\'ll notice that the commands have the same options you have in the interface—for\n\
               example, you can choose a quaternion spine for the torso, define forearm and bicep\n\
               divisions, control the location of the leg\'s up vector, etc.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-471905C7-76C4-4E74-8675-56435B750031\"></a></span>Each command reads from an array of positioned \"guide\" nulls (see the end of the script).\n\
               You can either set up your own guide objects, or use the guides available in the Softimage\'s\n\
               default guides (see <span class=\"char_link\"><a href=\"#!/url=./files/cus_cdk_IdentifyingGuideObjectsintheDefaultGuides.htm\">Identifying Guide Objects in the Default Guides</a></span>).\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-A06FB640-AF4D-4FC6-A01A-8F9A26BFA4FD\"></a></span>Each command also returns a list of objects created, which helps you determine the\n\
               name of object the rig component should be parented to. In this script, however, the\n\
               script writer knew the names of the objects each command creates (this is easy to\n\
               figure out by consulting the <span class=\"char_link\"><a href=\"#!/url=./files/cdkref.htm\">CDK Object Reference</a></span> or the <a href=\"#!/url=./si_cmds/_scriptref.html\">Commands and Scripting Reference</a>). You can also use return values to add components to envelopes or hidden groups,\n\
               etc. For more information about using return values, refer to <span class=\"char_link\"><a href=\"#!/url=./files/cus_cdk_WorkingwithReturnValues.htm\">Working with Return Values</a></span>.\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// build list of guide object <a href=\"javascript:void(0)\" data=\"positions\" class=\"a_multireflink\">positions</a> and names\n\
BuildGuideArrays();\n\
\n\
var Biped = new Object();\n\
\n\
// make the model and the globalSRT icon\n\
Biped.Model = ActiveSceneRoot.AddModel();\n\
Biped.GlobalSRT = makeRigIcon(Biped.Model, 4, \n\
									 0,0,0, 				//position\n\
									 1,1,1, 				//icon length,width,height\n\
									 893, 						//<a href=\"javascript:void(0)\" data=\"color\" class=\"a_multireflink\">color</a>\n\
									 \"GlobalSRT\"			 //<a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
						);\n\
\n\
// make the torso\n\
guidecoll = CreateGuideColl(guidepos, guidename, Array(0,1,2,3,4,5,6,7,8,9));  \n\
Biped.Torso = makeTorso(Biped.GlobalSRT , 										//parent object\n\
										4, 				//nb of torso divisions\n\
									 	false, 			//use fixed length spine\n\
										guidecoll, 		//torso guides: \n\
										0,			 //use square icons for torso controls\n\
										1,			 //spine head and neck\n\
										null,		 //spine parameter sliders\n\
										0,			 //no <a href=\"javascript:void(0)\" data=\"shadow\" class=\"a_multireflink\">shadow</a>\n\
										null,		 //no <a href=\"javascript:void(0)\" data=\"shadow\" class=\"a_multireflink\">shadow</a> parent\n\
										0);			 //don\'t use negative scaling\n\
DeleteObj( guidecoll );\n\
// make the arms. first the left arm, then the right arm\n\
// left arm\n\
guidecoll = CreateGuideColl(guidepos, guidename, Array(6,10,11));  \n\
\n\
Biped.LArm = MakeArm(Biped.Torso.LEff,  //parent object\n\
					guidecoll,				//guide objects\n\
					\"L\",				//arm object prefix\n\
					Biped.Torso.LEff,				//object to pos. constrain arm root to\n\
					0,					//#forearm divs\n\
					0,					//#bicep divs\n\
					0,					//no <a href=\"javascript:void(0)\" data=\"shadow\" class=\"a_multireflink\">shadow</a>\n\
					null,				//no <a href=\"javascript:void(0)\" data=\"shadow\" class=\"a_multireflink\">shadow</a> parent\n\
					null,				//hand root\n\
					0);					//don\'t use negative scale\n\
\n\
DeleteObj( guidecoll );\n\
\n\
// right arm \n\
guidecoll = CreateGuideColl(guidepos, guidename, Array(9,12,13));  \n\
\n\
Biped.LArm = MakeArm(Biped.Torso.REff,  //parent object\n\
					guidecoll,				//guide objects\n\
					\"R\",				//arm object prefix\n\
					Biped.Torso.REff,				//object to pos. constrain arm root to\n\
					0,					//#forearm divs\n\
					0,					//#bicep divs\n\
					0,					//no <a href=\"javascript:void(0)\" data=\"shadow\" class=\"a_multireflink\">shadow</a>\n\
					null,				//no <a href=\"javascript:void(0)\" data=\"shadow\" class=\"a_multireflink\">shadow</a> parent\n\
					null,				//hand root\n\
					0);					//don\'t use negative scale\n\
\n\
DeleteObj( guidecoll );\n\
\n\
// make the head\n\
guidecoll = CreateGuideColl(guidepos, guidename, Array(14,15,16));  \n\
\n\
Biped.Head = MakeHead(				Biped.Torso.Spine.TopVertebra, \n\
					 	guidecoll, \n\
					 	\"\",\n\
					 	1,				//use spine-<a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> head and neck \n\
					 	0, 				//box <a href=\"javascript:void(0)\" data=\"shadow\" class=\"a_multireflink\">shadow</a> head <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> \n\
					 	2,				//number of neck spine divisions\n\
					 	1,				//neck stretches to meet head controller\n\
					 	null,			//neck sliders\n\
					 	null,			//no ears (guide collection for ears) \n\
\n\
						0,				//no <a href=\"javascript:void(0)\" data=\"shadow\" class=\"a_multireflink\">shadow</a>\n\
						null);				//no <a href=\"javascript:void(0)\" data=\"shadow\" class=\"a_multireflink\">shadow</a> parent\n\
DeleteObj( guidecoll );\n\
\n\
\n\
// make the legs, first the left then the right\n\
//left leg\n\
guidecoll = CreateGuideColl(guidepos, guidename, Array(4,17,18));  \n\
Biped.LeftLeg = MakeLeg( 					Biped.Model, 				//rig model\n\
							Biped.Torso.HipBone,//leg parent\n\
							\"L\", 				//object <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a> prefix\n\
							guidecoll, 				//1)top of leg, 2)knee, 3)ankle\n\
							1, 					//place leg upvector behind leg\n\
							0, 					//#thigh divisions\n\
							0,					 //no <a href=\"javascript:void(0)\" data=\"shadow\" class=\"a_multireflink\">shadow</a>\n\
							null);					 //no <a href=\"javascript:void(0)\" data=\"shadow\" class=\"a_multireflink\">shadow</a> parent\n\
DeleteObj( guidecoll );\n\
\n\
//right leg\n\
guidecoll = CreateGuideColl(guidepos, guidename, Array(7,19,20));  \n\
Biped.RightLeg = MakeLeg( 					Biped.Model, 				//rig model\n\
							Biped.Torso.HipBone,//leg parent\n\
							\"R\", 				//object <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a> prefix\n\
							guidecoll, 				//1)top of leg, 2)knee, 3)ankle\n\
							1, 					//place leg upvector behind leg\n\
							0, 					//#thigh divisions\n\
							0,					 //no <a href=\"javascript:void(0)\" data=\"shadow\" class=\"a_multireflink\">shadow</a>\n\
							null);					 //no <a href=\"javascript:void(0)\" data=\"shadow\" class=\"a_multireflink\">shadow</a> parent\n\
DeleteObj( guidecoll );\n\
\n\
// make the feet, first the left, then the right\n\
//left foot\n\
guidecoll = CreateGuideColl(guidepos, guidename, Array(21,22,23,18,24,25,26));  \n\
\n\
Biped.LeftFoot = MakeFoot(					Biped.Model, 			//rig model\n\
						Biped.GlobalSRT,			//parent of foot controls\n\
						\"L\", 				//short object <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a> prefix\n\
						\"Left\", 				//long object <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a> prefix\n\
						guidecoll, 				//foot guide objects\n\
						null, 					//foot sliders\n\
						0, 					//create extenstion icon (used for dog leg)\n\
						0,					//no <a href=\"javascript:void(0)\" data=\"shadow\" class=\"a_multireflink\">shadow</a>\n\
						null);					//no <a href=\"javascript:void(0)\" data=\"shadow\" class=\"a_multireflink\">shadow</a> parent\n\
\n\
//attach the leg to the foot\n\
Biped.LeftLeg.Eff.AddChild(Biped.LeftFoot.Root);\n\
Biped.LeftLeg.Eff.Kinematics.AddConstraint(\"Position\", Biped.LeftFoot.BaseGuide , false);\n\
						\n\
DeleteObj( guidecoll );\n\
//right foot\n\
guidecoll = CreateGuideColl(guidepos, guidename, Array(27,28,29,20,30,31,32));  \n\
\n\
Biped.RightFoot = MakeFoot(					Biped.Model, 			//rig model\n\
						Biped.GlobalSRT,			//parent of foot controls\n\
						\"R\", 				//short object <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a> prefix\n\
						\"Right\", 				//long object <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a> prefix\n\
						guidecoll, 				//foot guide objects\n\
						null, 					//foot sliders\n\
						0, 					//create extenstion icon (used for dog leg)\n\
						0,					//no <a href=\"javascript:void(0)\" data=\"shadow\" class=\"a_multireflink\">shadow</a>\n\
						null);					//no <a href=\"javascript:void(0)\" data=\"shadow\" class=\"a_multireflink\">shadow</a> parent\n\
\n\
//attach the leg to the foot\n\
Biped.RightLeg.Eff.AddChild(Biped.RightFoot.Root);\n\
Biped.RightLeg.Eff.Kinematics.AddConstraint(\"Position\", Biped.RightFoot.BaseGuide , false);\n\
						\n\
DeleteObj( guidecoll );\n\
\n\
//----------------------------------------------\n\
// Builds an array of guide <a href=\"javascript:void(0)\" data=\"positions\" class=\"a_multireflink\">positions</a> and names\n\
//----------------------------------------------\n\
function BuildGuideArrays()\n\
{\n\
\n\
	guidepos  = new Array();\n\
	guidename = new Array();\n\
\n\
	for (i=0;i&lt;33;i++)\n\
	{ \n\
		guidepos[i] = XSIMath.CreateVector3(); \n\
	}\n\
\n\
	i=0;\n\
	\n\
	//0 to 3\n\
	guidepos[i].Set(0,18,-0.5);						guidename[i++] = \"SpineBase\";\n\
	guidepos[i].Set(0,20,-0.5);						guidename[i++] = \"SpineBaseDepth\";\n\
	guidepos[i].Set(0,22,-0.5);						guidename[i++] = \"SpineEndDepth\";\n\
	guidepos[i].Set(0,24,-0.5);						guidename[i++] = \"SpineEnd\";\n\
\n\
	//4 to 6\n\
	guidepos[i].Set(1.75,16,0);						guidename[i++] = \"LeftLegStart\";\n\
	guidepos[i].Set(2,24,0);						guidename[i++] = \"LeftShoulderStart\";\n\
	guidepos[i].Set(4,24,0);						guidename[i++] = \"LeftShoulderEnd\";\n\
\n\
	//7 to 9\n\
	guidepos[i].Set(-1.75,16,0);					guidename[i++] = \"RightLegStart\";\n\
	guidepos[i].Set(-2,24,0);						guidename[i++] = \"RightShoulderStart\";\n\
	guidepos[i].Set(-4,24,0);						guidename[i++] = \"RightShoulderEnd\";\n\
\n\
	//10 to 11\n\
	guidepos[i].Set(8,24,-1);						guidename[i++] = \"LeftElbow\";\n\
	guidepos[i].Set(12,24,0);						guidename[i++] = \"LeftHand\";\n\
\n\
	//12 to 13\n\
	guidepos[i].Set(-8,24,1);						guidename[i++] = \"RightElbow\";\n\
	guidepos[i].Set(-12,24,0);						guidename[i++] = \"RightHand\";\n\
		\n\
	//14 to 16\n\
	guidepos[i].Set(0,24,-0.5);						guidename[i++] = \"NeckBase\";\n\
	guidepos[i].Set(0,25,-0.5);						guidename[i++] = \"Neck\";\n\
	guidepos[i].Set(0,26,-0.5);						guidename[i++] = \"Head\";\n\
	\n\
	//17 to 18\n\
	guidepos[i].Set(1.75,9,0.5);					guidename[i++] = \"LeftKnee\";\n\
	guidepos[i].Set(1.75,2,0);						guidename[i++] = \"LeftAnkle\";\n\
\n\
	//19 to 20\n\
	guidepos[i].Set(-1.75,9,0.5);						guidename[i++] = \"RightKnee\";\n\
	guidepos[i].Set(-1.75,2,0);						guidename[i++] = \"RightAnkle\";\n\
\n\
	//21 to 26\n\
	guidepos[i].Set(1.75,0,0);						guidename[i++] = \"LMiddlePivot\";\n\
	guidepos[i].Set(1.65,0,0);						guidename[i++] = \"LRightPivot\";\n\
	guidepos[i].Set(1.85,0,0);						guidename[i++] = \"LLeftPivot\";\n\
	guidepos[i].Set(1.75,1,1);						guidename[i++] = \"LLeftFoot\";\n\
	guidepos[i].Set(1.75,0.5,2);					guidename[i++] = \"LLeftToe\";\n\
	guidepos[i].Set(1.75,0.5,3);					guidename[i++] = \"LLeftToe2\";\n\
	\n\
	//27 to 32\n\
	guidepos[i].Set(-1.75,0,0);						guidename[i++] = \"RMiddlePivot\";\n\
	guidepos[i].Set(-1.85,0,0);						guidename[i++] = \"RRightPivot\";\n\
	guidepos[i].Set(-1.65,0,0);						guidename[i++] = \"RLeftPivot\";\n\
	guidepos[i].Set(-1.75,1,1);						guidename[i++] = \"RLeftFoot\";\n\
	guidepos[i].Set(-1.75,0.5,2);						guidename[i++] = \"RLeftToe\";\n\
	guidepos[i].Set(-1.75,0.5,3);						guidename[i++] = \"RLeftToe2\";\n\
	\n\
}\n\
\n\
//-------------------------------------------------------\n\
// From array of <a href=\"javascript:void(0)\" data=\"positions\" class=\"a_multireflink\">positions</a> and names created in BuildGuideArrays(),\n\
// create a collection of guide nulls\n\
//-------------------------------------------------------\n\
function CreateGuideColl( in_aGuidePositions, in_aGuideNames, in_Indices)\n\
{\n\
\n\
	var lXfm = XSIMath.CreateTransform();\n\
	var guidecoll = new ActiveXObject(\"XSI.Collection\");\n\
	\n\
	var idx;\n\
	for(idx=0; idx&lt;in_Indices.length; idx++)\n\
	{\n\
//		logmessage(in_Indices[idx] + \"  \" + in_aGuideNames[in_Indices[idx]]);\n\
		guidecoll.Add( GetPrim(\"Null\", in_aGuideNames[in_Indices[idx]]) ); \n\
		lXfm.SetTranslation(in_aGuidePositions[in_Indices[idx]]);\n\
		guidecoll(idx).Kinematics.Global.Transform = lXfm;\n\
	}\n\
	\n\
	return guidecoll;\n\
}\n\
</pre></div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";