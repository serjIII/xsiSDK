var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>RenderRegionSave</title>\n\
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
            <h1>RenderRegionSave</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">RenderRegionSave</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v6.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Saves the contents of the render region in the specified viewport(s) to disk. \n\
The command can save the contents that are already there or wait until the \n\
render is completed before saving. The default format is PNG, which is \n\
suitable for display in web pages.\n\
<br /><br />\n\
Note: If all viewports are specified and two or more regions are open, the\n\
command tries to intelligently name the files it saves by adding a suffix\n\
to the filename before the extension.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>RenderRegionSave( [Viewport], [FileName], [WaitUntilComplete] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Viewport		</td>\n\
		<td><a href=\"#!/url=./si_om/siViewport.html\">siViewport</a>		</td>\n\
		<td>\n\
The viewport(s) containing the render region to save.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siViewportCurrent (the viewport the cursor is currently hovering over)			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">FileName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Full path name of where to save the render region contents to.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
A file browser pops up			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">WaitUntilComplete		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
\n\
		Specifies whether to wait for the render to finish or not. If set to \n\
		false, whatever the render region has rendered so far will be saved.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
True			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// Creates a render region and saves out the center portion of it to disk.\n\
RenderRegionCreate( siViewportB, 0.25, 0.75, 0.25, 0.75 );\n\
RenderRegionSave( siViewportB, \"C:\\\\temp\\\\example.png\", true );</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/RenderRegionCreate.html\">RenderRegionCreate</a> <a href=\"#!/url=./si_cmds/RenderRegionClose.html\">RenderRegionClose</a> <a href=\"#!/url=./si_cmds/RenderRegionToggleVisibility.html\">RenderRegionToggleVisibility</a> <a href=\"#!/url=./si_cmds/RenderRegionRefresh.html\">RenderRegionRefresh</a> <a href=\"#!/url=./si_cmds/RenderRegionToggleSelectionTracking.html\">RenderRegionToggleSelectionTracking</a> <a href=\"#!/url=./si_cmds/RenderRegionSetDisplayType.html\">RenderRegionSetDisplayType</a> <a href=\"#!/url=./si_cmds/RenderRegionSetRefreshMode.html\">RenderRegionSetRefreshMode</a> <a href=\"#!/url=./si_cmds/RenderRegionSetRenderChannel.html\">RenderRegionSetRenderChannel</a> <a href=\"#!/url=./si_cmds/RenderRegionGetDisplayType.html\">RenderRegionGetDisplayType</a> <a href=\"#!/url=./si_cmds/RenderRegionGetRefreshMode.html\">RenderRegionGetRefreshMode</a> <a href=\"#!/url=./si_cmds/RenderRegionGetRenderChannel.html\">RenderRegionGetRenderChannel</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";