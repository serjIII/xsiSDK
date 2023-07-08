var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Camera Primitives</title>\n\
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
            <h1>Camera Primitives</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Camera Primitives</h2>\n\
\n\
<div>\n\
	<p><a href=\"#!/url=./si_om/Camera.html\">Camera</a> primitive presets can be used with either the <a href=\"#!/url=./si_om/X3DObject.AddPrimitive.html\">X3DObject.AddPrimitive</a> or <a href=\"#!/url=./si_om/X3DObject.AddCamera.html\">X3DObject.AddCamera</a> methods or one of the camera-creation commands (<a href=\"#!/url=./si_cmds/GetPrimCamera.html\">GetPrimCamera</a>, <a href=\"#!/url=./si_cmds/SIGetPrimCamera.html\">SIGetPrimCamera</a>). All camera types use the same <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/camera.html\">set of camera parameters</a> configured differently.</p>\n\
<div class=\"tip\">\n\
<table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<td class=\"label\">Note</td>\n\
		<td class=\"emph\">See <a href=\"#!/url=./si_cmds/PrimPreset.html\">Primitive Presets</a> for list of the possible types of primitives. Also see <a href=\"#!/url=./si_cmds/AlphabeticalListOfAllPrimitives.html#\">Alphabetical Listing of All Primitive Presets</a> for a complete list of available primitive types.</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
</div>\n\
\n\
<div><table class=\"values\">\n\
	<tr>\n\
		<th>Preset</th>\n\
		<th>Primitives</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Camera</td>\n\
		<td><a name=\"Camera\"></a>Perspective cameras use a perspective projection, which simulates depth and are useful for simulating a physical camera. The default camera in any new scene is a perspective camera.<br /><br />		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Orthographic</td>\n\
		<td><a name=\"Orthographic\"></a>Orthographic cameras make all of the camera rays parallel. Objects stay the same size regardless of their distance from the camera. These projections are useful for architectural and engineering renderings.<br /><br />		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Telephoto</td>\n\
		<td><a name=\"Telephoto\"></a>Telephoto cameras use a perspective projection and a small angle of view (5&#176;) to simulate a telephoto lens view where objects are <span class=\"i\">zoomed</span>.<br /><br />		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Wide_Angle</td>\n\
		<td><a name=\"Wide_Angle\"></a>Wide angle cameras create a wide-angle view by using a perspective projection and a large angle (100&#176;) of view. Wide angle cameras have a very large field of view and can often distort the perspective.<br /><br />		</td>\n\
	</tr>\n\
</table>\n\
<br />\n\
\n\
</div>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";