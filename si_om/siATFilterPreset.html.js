var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siATFilterPreset</title>\n\
   \n\
</head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style>\n\
/*  These settings override ones in the default stylesheets\n\
	used by the merged files that cause problems in combination\n\
	with the standard HTML help styles and page templates. */\n\
\n\
div, div.example, div.tip {\n\
	 margin:0;\n\
}\n\
\n\
td.example {\n\
	background: inherit;\n\
}\n\
\n\
/* This fixes a problem with nested pre blocks on an example page */\n\
pre pre {\n\
	display:block;\n\
	padding:0;\n\
	border-style:none;\n\
}\n\
</style><link rel=\"stylesheet\" href=\"si_om/css/en.css\" type=\"text/css\" /><script>$(document).ready(function() { yepnope.injectJs(\"./si_om/lib/utils.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>siATFilterPreset</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siATFilterPreset</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v7.5</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
The string constants to use to set the FilterPreset on any animation editor using the <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a> \n\
\"FilterPreset\" property.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>StringModule.siATFilterPresetAll                                            // All\n\
StringModule.siATFilterPresetCustom                                         // Custom\n\
StringModule.siATFilterPresetGeneral                                        // General\n\
StringModule.siATFilterPresetModeling                                       // Modeling\n\
StringModule.siATFilterPresetAnimation                                      // Animation\n\
StringModule.siATFilterPresetKinematics                                     // Kinematics\n\
StringModule.siATFilterPresetRendering                                      // Rendering\n\
StringModule.siATFilterPresetViewing                                        // Viewing\n\
StringModule.siATFilterPresetLocalTransform                                 // LocalTransform\n\
StringModule.siATFilterPresetPosition                                       // Position\n\
StringModule.siATFilterPresetPositionX                                      // PositionX\n\
StringModule.siATFilterPresetPositionY                                      // PositionY\n\
StringModule.siATFilterPresetPositionZ                                      // PositionZ\n\
StringModule.siATFilterPresetRotation                                       // Rotation\n\
StringModule.siATFilterPresetRotationX                                      // RotationX\n\
StringModule.siATFilterPresetRotationY                                      // RotationY\n\
StringModule.siATFilterPresetRotationZ                                      // RotationZ\n\
StringModule.siATFilterPresetScaling                                        // Scaling\n\
StringModule.siATFilterPresetScalingX                                       // ScalingX\n\
StringModule.siATFilterPresetScalingY                                       // ScalingY\n\
StringModule.siATFilterPresetScalingZ                                       // ScalingZ\n\
StringModule.siATFilterPresetColor                                          // Color</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetAll\"> </a>siATFilterPresetAll		</td>\n\
		<td class=\"example\">All		</td>\n\
		<td>\n\
Display all nodes for the selected elements.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetCustom\"> </a>siATFilterPresetCustom		</td>\n\
		<td class=\"example\">Custom		</td>\n\
		<td>\n\
Display any type of custom parameter set for the selected elements. This includes proxy parameter sets, marking sets, and annotation properties.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetGeneral\"> </a>siATFilterPresetGeneral		</td>\n\
		<td class=\"example\">General		</td>\n\
		<td>\n\
Display only the general properties for the selected elements.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetModeling\"> </a>siATFilterPresetModeling		</td>\n\
		<td class=\"example\">Modeling		</td>\n\
		<td>\n\
Display only the modeling properties for the selected elements.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetAnimation\"> </a>siATFilterPresetAnimation		</td>\n\
		<td class=\"example\">Animation		</td>\n\
		<td>\n\
Display only the animation properties for the selected elements.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetKinematics\"> </a>siATFilterPresetKinematics		</td>\n\
		<td class=\"example\">Kinematics		</td>\n\
		<td>\n\
Display only the kinematics properties for the selected elements.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetRendering\"> </a>siATFilterPresetRendering		</td>\n\
		<td class=\"example\">Rendering		</td>\n\
		<td>\n\
Display only the rendering properties for the selected elements.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetViewing\"> </a>siATFilterPresetViewing		</td>\n\
		<td class=\"example\">Viewing		</td>\n\
		<td>\n\
Display only the viewing properties for the selected elements.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetLocalTransform\"> </a>siATFilterPresetLocalTransform		</td>\n\
		<td class=\"example\">LocalTransform		</td>\n\
		<td>\n\
Display only the local transform parameters for the selected elements.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetPosition\"> </a>siATFilterPresetPosition		</td>\n\
		<td class=\"example\">Position		</td>\n\
		<td>\n\
Display only the position parameters for the selected elements.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetPositionX\"> </a>siATFilterPresetPositionX		</td>\n\
		<td class=\"example\">PositionX		</td>\n\
		<td>\n\
Display only the position in X parameters for the selected elements.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetPositionY\"> </a>siATFilterPresetPositionY		</td>\n\
		<td class=\"example\">PositionY		</td>\n\
		<td>\n\
Display only the position in Y parameters for the selected elements.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetPositionZ\"> </a>siATFilterPresetPositionZ		</td>\n\
		<td class=\"example\">PositionZ		</td>\n\
		<td>\n\
Display only the position in Z parameters for the selected elements.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetRotation\"> </a>siATFilterPresetRotation		</td>\n\
		<td class=\"example\">Rotation		</td>\n\
		<td>\n\
Display only the rotation parameters for the selected elements.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetRotationX\"> </a>siATFilterPresetRotationX		</td>\n\
		<td class=\"example\">RotationX		</td>\n\
		<td>\n\
Display only the rotation in X parameters for the selected elements.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetRotationY\"> </a>siATFilterPresetRotationY		</td>\n\
		<td class=\"example\">RotationY		</td>\n\
		<td>\n\
Display only the rotation in Y parameters for the selected elements.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetRotationZ\"> </a>siATFilterPresetRotationZ		</td>\n\
		<td class=\"example\">RotationZ		</td>\n\
		<td>\n\
Display only the rotation in Z parameters for the selected elements.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetScaling\"> </a>siATFilterPresetScaling		</td>\n\
		<td class=\"example\">Scaling		</td>\n\
		<td>\n\
Display only the scaling parameters for the selected elements.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetScalingX\"> </a>siATFilterPresetScalingX		</td>\n\
		<td class=\"example\">ScalingX		</td>\n\
		<td>\n\
Display only the scaling in X parameters for the selected elements.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetScalingY\"> </a>siATFilterPresetScalingY		</td>\n\
		<td class=\"example\">ScalingY		</td>\n\
		<td>\n\
Display only the scaling in Y parameters for the selected elements.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetScalingZ\"> </a>siATFilterPresetScalingZ		</td>\n\
		<td class=\"example\">ScalingZ		</td>\n\
		<td>\n\
Display only the scaling in Z parameters for the selected elements.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetColor\"> </a>siATFilterPresetColor		</td>\n\
		<td class=\"example\">Color		</td>\n\
		<td>\n\
Display only the color parameters for the selected elements.		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/AnimationEditorAttributes.html#\">FilterPreset attribute</a> <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a> <a href=\"#!/url=./si_cpp/classXSI_1_1View.html#PutAttributeValue\">View::PutAttributeValue</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";