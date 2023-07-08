var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Pass Presets</title>\n\
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
</style><link rel=\"stylesheet\" href=\"si_cmds/css/en.css\" type=\"text/css\" /><script>$(document).ready(function() { yepnope.injectJs(\"./si_cmds/lib/utils.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Pass Presets</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Pass Presets</h2>\n\
\n\
<div>\n\
	<p><a href=\"#!/url=./si_om/Pass.html\">Pass</a> presets are stored in the <span style=\"font-family: courier, monospace;\">Data\\DSPresets\\Groups</span> folder under XSI\'s factory location. \n\
			</p>\n\
<div class=\"tip\">\n\
<table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<td class=\"label\">Note</td>\n\
		<td class=\"emph\">\n\
				All of these presets can be used with the <a href=\"#!/url=./si_cmds/CreatePass.html\">CreatePass</a>, <a href=\"#!/url=./si_cmds/CreatePassWithPartition.html\">CreatePassWithPartition</a>, and <a href=\"#!/url=./si_cmds/SICreatePass.html\">SICreatePass</a> commands.\n\
			</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
</div>\n\
\n\
<div><table class=\"values\">\n\
	<tr>\n\
		<th>Preset</th>\n\
		<th>Passes</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Ambient_Diffuse_Pass</td>\n\
		<td>Pass containing all of a scene\'s ambient and diffuse information		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Ambient_Pass</td>\n\
		<td>Pass containing all of a scene\'s ambient color.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Caustic_Pass</td>\n\
		<td>Pass of all of the scene\'s caustic effects.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Default_New_Pass</td>\n\
		<td>Empty pass with empty object and light partitions. Use this option to build a pass from \"scratch\"		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Depth_Pass</td>\n\
		<td>Pass of the entire scene\'s depth information. <br /><br />Also called a <b>Z-pass</b>, this type of pass contains depth information for objects based on the distance from the camera.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Diffuse_Pass</td>\n\
		<td>Pass containing all of a scene\'s diffuse color.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Global_Illumination_Pass</td>\n\
		<td>Pass of all of the scene\'s global illumination effects.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Glow_Pass</td>\n\
		<td>Pass of every selected objects\' glow property.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Highlight_Pass</td>\n\
		<td>Pass containing the highlight of the entire scene. A highlight pass (sometimes called specular) contains all of a scene\'s specular highlights or hotspots.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Isolate_Matte_Pass</td>\n\
		<td>Matte pass of the selected objects. Each matte object is isolated from non-matte objects, meaning that a matte is generated for areas of matte objects that are overlapped by non-matte objects.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Lens_Flare_Pass</td>\n\
		<td>Flare pass for the selected camera or light. A lens flare partition is created for the light(s) that create the flare. Flare properties are applied to the partition and the render pass camera.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Pass</td>\n\
		<td>See <span style=\"font-family: courier, monospace;\">Default_New_Pass</span>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Reflection_Pass</td>\n\
		<td>Pass containing every selected object\'s reflections		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Refraction_Pass</td>\n\
		<td>Pass containing every selected object\'s refractions		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RGBA_Matte_Pass</td>\n\
		<td>Matte pass of the selected objects. This type of pass is regularly used to composite overlapping objects. <br /><br />Background objects and lights are not rendered but matte objects are rendered with their original RGB settings.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Selective_Shadow_Pass</td>\n\
		<td>Shadow pass that includes only shadows projected on the selected objects.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Shadow_Pass</td>\n\
		<td>Shadow pass of the entire scene. Rendering a shadow on its own and being able to composite it back in the final render allows you to edit a shadow\'s blur, intensity, and color without any additional rendering.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Toon</td>\n\
		<td>Pass in which scene objects are rendered using the Toon Paint and Host material shader. <br /><br />If additional inking is needed, you can apply the Toon Ink Lens shader to the camera.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Volumic_Pass</td>\n\
		<td>Volume pass for each selected object in your scene.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">White_Matte_Pass</td>\n\
		<td>Matte pass with a constant white RGBA channel of selected objects. This type of pass is regularly used to composite overlapping objects. <br /><br />The white matte pass renders matte objects in white, while background objects and lights are rendered black.		</td>\n\
	</tr>\n\
</table>\n\
<br />\n\
\n\
</div>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";