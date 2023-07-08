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
      <meta name=\"topicid\" content=\"GUID-3ECF7989-A93A-4592-A966-EFEE267A2A66\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Example: Making an Octopus Rig</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"positions\", \"si_cpp/group__RenderMapDefine.html#ga4ff6c20401928cc896711bb86fab2870\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"color\", \"si_cpp/group__RenderMapDefine.html#ga9b982a36d73688fd43fe5f3539824d21\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"name\", \"si_cpp/group__RenderMapDefine.html#ga882c17490314f92c7159d6d7d69696e7\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"type\", \"si_cpp/group__RenderMapDefine.html#ga7117e14e60390664f1862525dd6acaf6\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"shadow\", \"si_cpp/group__RenderMapDefine.html#ga2779bc97d58f2cac3fde332db7516177\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-3ECF7989-A93A-4592-A966-EFEE267A2A66\"></a></span><div class=\"head\">\n\
            <h1>Example: Making an Octopus Rig</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-CCCC075F-B108-4BE6-9F22-4BD3EB733E1D\"></a></span>This example build an octopus rig. It consists of:\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-0CDF7591-BD26-4921-9444-97ACEF48D97C\"></a></span>A head component (<a href=\"#!/url=./si_cmds/MakeHead.html\">MakeHead</a> command)\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-31D4F5CB-BD37-41A0-ACDD-CE06E76E221C\"></a></span>Eight tail components for the tentacles (<a href=\"#!/url=./si_cmds/MakeTail.html\">MakeTail</a> command)\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-2FAEDE97-A295-4193-99B0-AA4A5C590120\"></a></span>A few rig icon components for controls (<a href=\"#!/url=./si_cmds/MakeRigIcon.html\">MakeRigIcon</a> command).\n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-7D52E69B-1E50-47CA-A929-9CDFA310A51F\"></a></span>A collections of guide nulls are passed to each command to position the elements.\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// build list of guide object <a href=\"javascript:void(0)\" data=\"positions\" class=\"a_multireflink\">positions</a> and names\n\
BuildGuideArrays();\n\
\n\
var Octopus = new Object();\n\
\n\
/*\n\
	MAKE MODEL AND GLOBAL SRT ICON\n\
*/\n\
Octopus.Model = ActiveSceneRoot.AddModel();\n\
Octopus.Model.Name = \"Octopus\"\n\
Octopus.GlobalSRT = makeRigIcon(Octopus.Model, 4, \n\
									 0,0,0, 			//position\n\
									 1,1,1,   			//icon length,width,height\n\
									 893, 			//<a href=\"javascript:void(0)\" data=\"color\" class=\"a_multireflink\">color</a>\n\
									 \"GlobalSRT\"		 //<a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
						);\n\
\n\
//Make the main octopus controller\n\
Octopus.BodyCtrl = makeRigIcon(Octopus.GlobalSRT, 2, \n\
									 0,4.5,0, 			//position\n\
									 5,1.4,5,   			//icon length,width,height\n\
									 253, 			//<a href=\"javascript:void(0)\" data=\"color\" class=\"a_multireflink\">color</a>\n\
									 \"BodyCtrl\"			 //<a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
						);\n\
						\n\
//Make the tentacle control (manipulate to settle the tentacles)\n\
Octopus.TentacleCtrl = makeRigIcon(Octopus.BodyCtrl, 2, \n\
									 0,4.5,0, 			//position\n\
									 2.5,1,2.5,   		//icon length,width,height\n\
									 49, 			//<a href=\"javascript:void(0)\" data=\"color\" class=\"a_multireflink\">color</a>\n\
									 \"TentacleCtrl\"			 //<a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
						);\n\
\n\
Octopus.TentacleCtrl.Kinematics.AddConstraint(\"Pose\",Octopus.BodyCtrl,true);																			\n\
			\n\
/*\n\
	MAKE THE HEAD\n\
*/\n\
guidecoll = CreateGuideColl(guidepos, guidename, Array(0,1,2));  \n\
						\n\
Octopus.Head = MakeHead(Octopus.BodyCtrl, //head parent\n\
						guidecoll, //guide collection\n\
						\"Octo\",					 //object <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a> prefix\n\
						1,					//spine head and neck\n\
						0,					//head <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> (ignored unless creating box <a href=\"javascript:void(0)\" data=\"shadow\" class=\"a_multireflink\">shadow</a>)\n\
						3,					 //number of vertebrae\n\
						1,					 //stretch spine\n\
						null, //spine sliders\n\
						null, //ear guide collection\n\
						0,					 //<a href=\"javascript:void(0)\" data=\"shadow\" class=\"a_multireflink\">shadow</a> <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
						null); //<a href=\"javascript:void(0)\" data=\"shadow\" class=\"a_multireflink\">shadow</a> parent\n\
						\n\
DeleteObj( guidecoll );\n\
\n\
/*\n\
	MAKE THE TENTACLES\n\
*/\n\
\n\
guidecoll = CreateGuideColl(guidepos, guidename, Array(3,4,5,6,7)); \n\
 \n\
	var lXfm = XSIMath.CreateTransform();\n\
	lXfm.SetIdentity();\n\
	lXfm.SetRotationFromXYZAnglesValues(0,2*3.1415/8,0);\n\
	\n\
	Octopus.Tentacles = new Array();\n\
	\n\
	for(i=0;i&lt;8;i++)\n\
	{\n\
		OffsetGuideColl(guidecoll, lXfm);\n\
		Octopus.Tentacles[i] = MakeTail(Octopus.BodyCtrl, //head parent\n\
								guidecoll,				 //guide collection\n\
								6,					 //number of bones\n\
								0,					 //<a href=\"javascript:void(0)\" data=\"shadow\" class=\"a_multireflink\">shadow</a> <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
								null);				 //<a href=\"javascript:void(0)\" data=\"shadow\" class=\"a_multireflink\">shadow</a> parent\n\
				\n\
		 Octopus.Tentacles[i].Root.Kinematics.AddConstraint(\"Pose\",Octopus.TentacleCtrl,true);																				\n\
	}\n\
\n\
DeleteObj( guidecoll );\n\
Translate(Octopus.BodyCtrl, 0, 2, 0, siRelative, siView, siObj, siXYZ, null, null, null, null, null, null, null, null, null, 0);\n\
\n\
//----------------------------------------------\n\
// Build an array of guide <a href=\"javascript:void(0)\" data=\"positions\" class=\"a_multireflink\">positions</a> and names\n\
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
	i=0;\n\
	\n\
	//0 to 2\n\
	guidepos[i].Set(0,5,0);					guidename[i++] = \"SpineBase\";\n\
	guidepos[i].Set(0,7,0);					guidename[i++] = \"SpineBaseDepth\";\n\
	guidepos[i].Set(0,9,0);					guidename[i++] = \"SpineEndDepth\";\n\
\n\
	//3 to 7\n\
	guidepos[i].Set(1,5,0);					guidename[i++] = \"TentacleBase\";\n\
	guidepos[i].Set(3,5,0);					guidename[i++] = \"Tentacle1\";\n\
	guidepos[i].Set(5,5,0);					guidename[i++] = \"Tentacle2\";\n\
	guidepos[i].Set(7,5,0);					guidename[i++] = \"Tentacle3\";\n\
	guidepos[i].Set(9,5,0);					guidename[i++] = \"TentacleTip\";\n\
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
\n\
//		logmessage(in_Indices[idx] + \"  \" + in_aGuideNames[in_Indices[idx]]);\n\
		guidecoll.Add( GetPrim(\"Null\", in_aGuideNames[in_Indices[idx]]) ); \n\
		lXfm.SetTranslation(in_aGuidePositions[in_Indices[idx]]);\n\
		guidecoll(idx).Kinematics.Global.Transform = lXfm;\n\
	}\n\
	\n\
	return guidecoll;\n\
}\n\
\n\
function OffsetGuideColl( in_GuideColl, in_OffsetXfo)\n\
{\n\
	var GuideXfm, idx;\n\
	for(idx=0; idx&lt;in_GuideColl.count; idx++)\n\
	{\n\
		GuideXfm = in_GuideColl(idx).Kinematics.Global.Transform;\n\
		GuideXfm.Mul(GuideXfm,in_OffsetXfo);\n\
		in_GuideColl(idx).Kinematics.Global.Transform = GuideXfm;\n\
	}\n\
}</pre></div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";