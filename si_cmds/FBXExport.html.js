var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>FBXExport</title>\n\
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
            <h1>FBXExport</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">FBXExport</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v6.02</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Exports an FBX file.  You can customize what information to export by running any of the\n\
FBXExport* commands before running this command. The available FBXExport* commands are listed\n\
in the See Also section on this page. To set options that don\'t have assciated FBXExport* \n\
command you can use FBXExport \"option\" to create the export options property page and \n\
use SetValue to modify it.<br /><br />\n\
Note: The FBXExport* commands are the scripting equivalent of setting the same values for \n\
exporting FBX files through the UI (FBX Exporter dialog). \n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oBoolean = FBXExport( FilePathName );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./files/Boolean.htm\">Boolean</a> value indicating whether command succeeded or failed.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">FilePathName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Full path and filename of FBX file to export to.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
If not specified, a file browser pops up to specify the file to export.			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
# This example demonstrates how to export an FBX file, \n\
# temporarily preserving XSI effectors\n\
#\n\
app = Application\n\
# First get the old effects setting\n\
oldEffPref = app.FBXExportKeepXSIEffectors()\n\
# Now set up the export to preserve effectors\n\
app.FBXExportKeepXSIEffectors( 1 )\n\
# Export to FBX and then restore the original setting\n\
app.FBXExport( \"C:\\\\temp\\\\testing.fbx\" )\n\
app.FBXExportKeepXSIEffectors( oldEffPref )</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/FBXImport.html\">FBXImport</a> <a href=\"#!/url=./si_cmds/FBXExportAnimation.html\">FBXExportAnimation</a> <a href=\"#!/url=./si_cmds/FBXExportAscii.html\">FBXExportAscii</a> <a href=\"#!/url=./si_cmds/FBXExportCameras.html\">FBXExportCameras</a> <a href=\"#!/url=./si_cmds/FBXExportConvert2Tif.html\">FBXExportConvert2Tif</a> <a href=\"#!/url=./si_cmds/FBXExportDeformerAsSkeleton.html\">FBXExportDeformerAsSkeleton</a> <a href=\"#!/url=./si_cmds/FBXExportEmbedMedias.html\">FBXExportEmbedMedias</a> <a href=\"#!/url=./si_cmds/FBXExportFrameRate.html\">FBXExportFrameRate</a> <a href=\"#!/url=./si_cmds/FBXExportGeometries.html\">FBXExportGeometries</a> <a href=\"#!/url=./si_cmds/FBXExportHardEdges.html\">FBXExportHardEdges</a> <a href=\"#!/url=./si_cmds/FBXExportKeepXSIEffectors.html\">FBXExportKeepXSIEffectors</a> <a href=\"#!/url=./si_cmds/FBXExportLights.html\">FBXExportLights</a> <a href=\"#!/url=./si_cmds/FBXExportSelection.html\">FBXExportSelection</a> <a href=\"#!/url=./si_cmds/FBXExportShapes.html\">FBXExportShapes</a> <a href=\"#!/url=./si_cmds/FBXExportSkins.html\">FBXExportSkins</a> <a href=\"#!/url=./si_cmds/FBXExportUnit.html\">FBXExportUnit</a> <a href=\"#!/url=./si_cmds/FBXExportAutomaticUnit.html\">FBXExportAutomaticUnit</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";