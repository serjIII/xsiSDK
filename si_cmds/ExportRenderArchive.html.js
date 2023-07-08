var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ExportRenderArchive</title>\n\
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
            <h1>ExportRenderArchive</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ExportRenderArchive</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v6.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Exports a sequence of frames from the specified passes, or the current pass \n\
if none specified. The render archive can subsequently then be used by a\n\
standalone version of the rendering engine that exported it.\n\
<br /><br />\n\
This command can optionally accept a start frame and an end frame to render\n\
to override the pass settings. If no start frame or end frame is provided\n\
the command uses the default settings from the pass (which can be either\n\
a sequence or a set of frames).\n\
<br /><br />\n\
This command replaces the deprecated command <a href=\"#!/url=./si_cmds/ExportMI2File.html\">ExportMI2File</a>.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>ExportRenderArchive( [Passes], [StartFrame], [EndFrame], [StepFrame], [Verbose] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Passes		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Passes to export			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current pass			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">StartFrame		</td>\n\
		<td>Number		</td>\n\
		<td>\n\
 Start frame for the export			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Pass Settings			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">EndFrame		</td>\n\
		<td>Number		</td>\n\
		<td>\n\
 End frame for the export			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Pass Settings			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">StepFrame		</td>\n\
		<td>Number		</td>\n\
		<td>\n\
 Frame step increment for the export			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Pass Settings			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Verbose		</td>\n\
		<td><a href=\"#!/url=./si_om/siRenderVerbosity.html\">siRenderVerbosity</a>		</td>\n\
		<td>\n\
Force progress report output on or off, or use values from the renderer\'s options			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siRenderVerbosityDefault			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\'	This example creates a cone with some animation on it and then\n\
\'	uses the default pass to export out every other frame.\n\
\'\n\
\' Create a new scene with only 6 frames \n\
NewScene , false\n\
SetValue \"PlayControl.Out\", 6\n\
\' Add a cone with some animation\n\
Set oCone = CreatePrim( \"Cone\", \"MeshSurface\" )\n\
SaveKey oCone &amp; \".kine.local.posx,\" _\n\
	&amp; oCone &amp; \".kine.local.posy,\" _\n\
	&amp; oCone &amp; \".kine.local.posz\", _\n\
	1\n\
SetValue \"PlayControl.Key\", 6\n\
SetValue \"PlayControl.Current\", 6\n\
Translate oCone, _\n\
	6.94824213992454, _\n\
	2.46082959410157, _\n\
	-0.246082959410157, _\n\
	siRelative, _\n\
	siView, _\n\
	siObj, _\n\
	siXYZ\n\
SaveKey oCone &amp; \".kine.local.posx,\" _\n\
	&amp; oCone &amp; \".kine.local.posy,\" _\n\
	&amp; oCone &amp; \".kine.local.posz\", _\n\
	6\n\
\' Render the default pass from frame 1 to frame 6 with a step of 2\n\
ExportRenderArchive \"Passes.Default_Pass\", 1, 6, 2</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/ExportRenderArchiveFrameSet.html\">ExportRenderArchiveFrameSet</a> <a href=\"#!/url=./si_cmds/ExportRenderArchiveAllPasses.html\">ExportRenderArchiveAllPasses</a> <a href=\"#!/url=./si_cmds/CreatePass.html\">CreatePass</a> <a href=\"#!/url=./si_cmds/GetCurrentPass.html\">GetCurrentPass</a> <a href=\"#!/url=./si_cmds/SetCurrentPass.html\">SetCurrentPass</a> <a href=\"#!/url=./si_cmds/DeleteCurrentPass.html\">DeleteCurrentPass</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";