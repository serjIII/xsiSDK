var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>RenderRegionToggleAutoRefresh</title>\n\
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
            <h1>RenderRegionToggleAutoRefresh</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">RenderRegionToggleAutoRefresh</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v6.0</p></div>\n\
\n\
<h3>Deprecated</h3>\n\
<div><p>v11.0 (2013)--see <a href=\"#!/url=./si_cmds/RenderRegionSetRefreshMode.html\">RenderRegionSetRefreshMode</a></p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Toggles the render region\'s refresh mode in the specified viewport(s) between the interactive mode and\n\
the camera, time and region state mode.\n\
When the refresh mode is set to the interactive mode, the render region will re-render its contents upon\n\
any render-relevant change in the scene. When the refresh mode is set to camera, time and region state mode,\n\
it only obeys explicit refresh requests or changes to the camera, to the time or to the region state. \n\
<br /><br />\n\
Note: When toggling the refresh mode for all regions at the same time, \n\
if at least one region is set to the interactive mode, then the refresh mode \n\
of all regions will be set to the camera, time and region state mode by this command. Otherwise it will be\n\
set to the interactive mode. Also note that changing the refresh mode of all regions will also \n\
change the global default and preferences.\n\
<br /><br />\n\
This command replaces the obsolete command ToggleFreezeRefresh.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>RenderRegionToggleAutoRefresh( [Viewport] );</pre>		</td>	</tr>\n\
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
The viewport(s) containing the render region with the refresh mode to toggle.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siViewportAll			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// Toggles the refresh mode of the render region in the viewport A (the top view).\n\
RenderRegionToggleAutoRefresh( siViewportA );</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/RenderRegionCreate.html\">RenderRegionCreate</a> <a href=\"#!/url=./si_cmds/RenderRegionClose.html\">RenderRegionClose</a> <a href=\"#!/url=./si_cmds/RenderRegionToggleVisibility.html\">RenderRegionToggleVisibility</a> <a href=\"#!/url=./si_cmds/RenderRegionRefresh.html\">RenderRegionRefresh</a> <a href=\"#!/url=./si_cmds/RenderRegionToggleSelectionTracking.html\">RenderRegionToggleSelectionTracking</a> <a href=\"#!/url=./si_cmds/RenderRegionSave.html\">RenderRegionSave</a> <a href=\"#!/url=./si_cmds/RenderRegionSetDisplayType.html\">RenderRegionSetDisplayType</a> <a href=\"#!/url=./si_cmds/RenderRegionSetRefreshMode.html\">RenderRegionSetRefreshMode</a> <a href=\"#!/url=./si_cmds/RenderRegionSetRenderChannel.html\">RenderRegionSetRenderChannel</a> <a href=\"#!/url=./si_cmds/RenderRegionGetDisplayType.html\">RenderRegionGetDisplayType</a> <a href=\"#!/url=./si_cmds/RenderRegionGetRefreshMode.html\">RenderRegionGetRefreshMode</a> <a href=\"#!/url=./si_cmds/RenderRegionGetRenderChannel.html\">RenderRegionGetRenderChannel</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";