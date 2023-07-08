var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>FBXImport</title>\n\
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
            <h1>FBXImport</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">FBXImport</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v6.02</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Imports an FBX file. You can customize what information to import by running any of the\n\
FBXImport* commands before running this command. The available FBXImport* commands are listed\n\
in the See Also section on this page. To set options that don\'t have assciated FBXExport*\n\
command you can use FBXImport \"option\" to create the import options property page and\n\
use SetValue to modify it.<br /><br />\n\
Note: The FBXImport* commands are the scripting equivalent of setting the same values for \n\
importing FBX files through the UI (FBX Importer dialog) with the exception of the\n\
<a href=\"#!/url=./si_cmds/FBXImportNamespaceReplacement.html\">FBXImportNamespaceReplacement</a> command. \n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oBoolean = FBXImport( FilePathName, [TakeNb] );</pre>		</td>	</tr>\n\
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
Full path and filename of FBX file to import.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
If not specified, a file browser pops up to pick the file to import.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">TakeNb		</td>\n\
		<td><a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
\n\
		Number of the take to be imported. Specifying TakeID \"0\" is the equivalent of \n\
		specifying No Animation - it loads the last take in the file. Any number greater \n\
		than or equal to the number of takes in the file does not load the animation.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
-1			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to import a specific animation \n\
	take from an FBX file.\n\
*/\n\
var fbxfile = \"C:\\\\temp\\\\testing.fbx\";\n\
var fso = new ActiveXObject( \"Scripting.FileSystemObject\" );\n\
if ( fso.FileExists(fbxfile) ) {\n\
	// First make sure the FBX Import settings are set to take animation\n\
	FBXImportAnimation( true );\n\
	// Then specify take 1 while importing\n\
	FBXImport( fbxfile, 1 );\n\
} else {\n\
	Application.LogMessage( \"Couldn\'t find \" + fbxfile, siWarning );\n\
}</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example demonstrates how to import an FBX file without \n\
\' cameras or lights\n\
\'\n\
dim fbxfile\n\
fbxfile = \"C:\\temp\\testing.fbx\"\n\
set fso = CreateObject( \"Scripting.FileSystemObject\" )\n\
if fso.FileExists(fbxfile) then\n\
	\' First make sure the FBX Import settings are set to skip cameras &amp; lights\n\
	FBXImportCameras False\n\
	FBXImportLights False\n\
	\n\
	\' Now do the import\n\
	FBXImport fbxfile\n\
else\n\
	Application.LogMessage \"Couldn\'t find \" &amp; fbxfile, siWarning \n\
end if</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/FBXExport.html\">FBXExport</a> <a href=\"#!/url=./si_cmds/FBXImportAnimation.html\">FBXImportAnimation</a> <a href=\"#!/url=./si_cmds/FBXImportCameras.html\">FBXImportCameras</a> <a href=\"#!/url=./si_cmds/FBXImportForceNormEnvelope.html\">FBXImportForceNormEnvelope</a> <a href=\"#!/url=./si_cmds/FBXImportHardEdges.html\">FBXImportHardEdges</a> <a href=\"#!/url=./si_cmds/FBXImportKeepXSIEffectors.html\">FBXImportKeepXSIEffectors</a> <a href=\"#!/url=./si_cmds/FBXImportLights.html\">FBXImportLights</a> <a href=\"#!/url=./si_cmds/FBXImportMode.html\">FBXImportMode</a> <a href=\"#!/url=./si_cmds/FBXImportNamespaceReplacement.html\">FBXImportNamespaceReplacement</a> <a href=\"#!/url=./si_cmds/FBXImportProtectExprDrivenFC.html\">FBXImportProtectExprDrivenFC</a> <a href=\"#!/url=./si_cmds/FBXImportSetEnvelopes.html\">FBXImportSetEnvelopes</a> <a href=\"#!/url=./si_cmds/FBXImportSkeletonsAsNulls.html\">FBXImportSkeletonsAsNulls</a> <a href=\"#!/url=./si_cmds/FBXImportUnit.html\">FBXImportUnit</a> <a href=\"#!/url=./si_cmds/FBXImportAutomaticUnit.html\">FBXImportAutomaticUnit</a> <a href=\"#!/url=./si_cmds/FBXImportCacheFile.html\">FBXImportCacheFile</a> <a href=\"#!/url=./si_cmds/FBXImportFrameRate.html\">FBXImportFrameRate</a> <a href=\"#!/url=./si_cmds/FBXImportFillTimeline.html\">FBXImportFillTimeline</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";