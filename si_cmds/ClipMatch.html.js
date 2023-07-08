var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ClipMatch</title>\n\
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
            <h1>ClipMatch</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ClipMatch</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v3.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>Matches up two clips by determining the proper PoseOffset to use to have them match at the start of the second clip.</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>ClipMatch( [InputObj] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">InputObj		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of exactly two clips to match up. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' Create a sphere and some paths for it to travel along.\n\
\'\n\
set newSph = CreatePrim( \"Sphere\", \"MeshSurface\" )\n\
set crv1 = SICreateCurve( \"crvlist\", 3, 0 )\n\
SIAddPointOnCurveAtEnd crv1, -15, 0, 18, False\n\
SIAddPointOnCurveAtEnd crv1, -6, 0, 5, False\n\
SIAddPointOnCurveAtEnd crv1, -6, 0, -9, False\n\
SIAddPointOnCurveAtEnd crv1, -23, 0, -14, False\n\
set crv2 = SICreateCurve( \"crvlist\", 3, 0 )\n\
SIAddPointOnCurveAtEnd crv2, 25, 0, -5, False\n\
SIAddPointOnCurveAtEnd crv2, 14, 0, -4, False\n\
SIAddPointOnCurveAtEnd crv2, 5, 0, -9, False\n\
SIAddPointOnCurveAtEnd crv2, -4, 0, -10, False\n\
SIAddPointOnCurveAtEnd crv2, -11, 0, 4, False\n\
SIAddPointOnCurveAtEnd crv2, -3, 0, 10, False\n\
SIAddPointOnCurveAtEnd crv2, 7, 0, 8, False\n\
\'\n\
\' Plot Actions of it moving along those paths (then delete the paths).\n\
\'\n\
ApplyPath newSph, crv1, 1, 40, 2, True, True\n\
set act1 = PlotToAction( newSph, newSph &amp; \"/kine.local.posx,kine.local.posy,kine.local.posz,kine.local.rotx,kine.local.roty,kine.local.rotz\", \"plot\", 1, 40, 1, 20, 3, False, 0.01 )\n\
DeleteObj crv1\n\
ApplyPath newSph, crv2, 1, 40, 2, True, True\n\
set act2 = PlotToAction( newSph, \"sphere.kine.local.posx,sphere.kine.local.posy,sphere.kine.local.posz,sphere.kine.local.rotx,sphere.kine.local.roty,sphere.kine.local.rotz,sphere.kine.local.sclx,sphere.kine.local.scly,sphere.kine.local.sclz\", \"plot\", 1, 40, 1, 20, 3, False, 0.01 )\n\
DeleteObj crv2\n\
\'\n\
\' Put the Actions on the mixer, overlapping by a number of frames.\n\
\'\n\
set trk1 = AddTrack( ActiveSceneRoot, , 0 )\n\
set trk2 = AddTrack( ActiveSceneRoot, , 0 )\n\
set clip1 = AddClip( ActiveSceneRoot, act1, , trk1, 20 )\n\
set clip2 = AddClip( ActiveSceneRoot, act2, , trk2, 40 )\n\
\'\n\
\' Apply a character tag to indicate which object\'s transform to examine\n\
\' when determining the appropriate pose offset.  If you run ClipMatch\n\
\' non-interactively, you don\'t need this, you can just specify any \"reference\n\
\' object\" as the third-selected object.  A character tag is required\n\
\' when running the command interactively.\n\
\'\n\
SelectObj newSph, , True\n\
TagObject newSph, \"CenterOfGravity\"\n\
\'\n\
\' Run ClipMatch command, to determine the appropriate pose offset to\n\
\' apply to the \"target\" object, so that the reference object has the\n\
\' same global transform at the \"match time\".\n\
\'\n\
ClipMatch clip1 &amp; \",\" &amp; clip2 &amp; \",\" &amp; newSph\n\
AddTransition clip1, clip2, 0\n\
SelectObj newSph, , True</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/OffsetValueMap.html\">OffsetValueMap</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";