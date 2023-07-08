var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SIImportDotXSIFile</title>\n\
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
            <h1>SIImportDotXSIFile</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SIImportDotXSIFile</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Imports a dotXSI file. The import file must be in dotXSI format, \n\
and have .xsi as a file extension.<br /><br />This command is accessed through the main \n\
menu by selecting File->Export->dotXSI, then by selecting the desired import options and \n\
pressing Ok. This command is equivalent to the <a href=\"#!/url=./si_cmds/ImportDotXSI.html\">ImportDotXSI</a> command, \n\
except that the user is not prompted for import options.\n\
<br /><br />\n\
This command supports the downloading of files off the internet. If the filename\n\
specified is a URL then the file will be downloaded locally before the command\n\
is executed.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SIImportDotXSIFile( FileName, [Parent] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">FileName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Name of the dotXSI file to import. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Parent		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Object or  model to use as the parent 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'---------------------------------------------------------\n\
\' VBScript example : Importing and exporting a dotXSI file.\n\
\' This example uses the SIImportDotXSIFile and SIExportDotXSIFile\n\
\' commands, which do not prompt for the user for validation of \n\
\' import/export parameters like ImportDotXSI and ExportDotXSI.\n\
\'---------------------------------------------------------\n\
\' Create a model, with some primitives.\n\
dim ExportRoot\n\
SICreateModel , \"ExportRoot\", , ExportRoot\n\
CreatePrim \"Torus\", \"MeshSurface\", \"Torus\", ExportRoot\n\
CreatePrim \"Cube\", \"NurbsSurface\", \"Cube\", ExportRoot\n\
\' Since we are not getting a dialog to modify dotXSIExport options,\n\
\' We can specify them here, if we wish. To see what each parameter corresponds to,\n\
\' goto the .spdl file, &lt;InstallationPath&gt;\\Application\\spdl\\C3DdotXSIExportOpt.spdl.\n\
SetValue \"dotXSIExportOptions.project_name\", ActiveProject.Name\n\
SetValue \"dotXSIExportOptions.output_file_format\", 1 \' 0 = Binary, 1 = Ascii\n\
SetValue \"dotXSIExportOptions.output_file_format_version\", 360 \' \"3.0\" = 300, \"3.5\" = 350, \"3.6\" = 360\n\
SetValue \"dotXSIExportOptions.sceneroot\", False\n\
SetValue \"dotXSIExportOptions.polymesh\", True\n\
SetValue \"dotXSIExportOptions.tesselation\", False\n\
SetValue \"dotXSIExportOptions.nrbssrf\", True\n\
SetValue \"dotXSIExportOptions.nrbscrv\", True\n\
SetValue \"dotXSIExportOptions.animall\", True\n\
SetValue \"dotXSIExportOptions.constraint\", True\n\
SetValue \"dotXSIExportOptions.custompset\", True\n\
\' Now specify to export the model to a dotXSI file\n\
dotXSIFile = Application.InstallationPath( siUserPath ) &amp; \"\\MyModel.xsi\"\n\
SIExportDotXSIFile ExportRoot, dotXSIFile\n\
\' Now delete the primitives and model, and re-import them.\n\
DeleteObj \"ExportRoot.Torus\"\n\
DeleteObj \"ExportRoot.Cube\"\n\
DeleteObj \"ExportRoot\"\n\
\' Again, since we do not get a dialog box to change import options, change them\n\
\' now programmatically. To see what each parameter corresponds to, goto the\n\
\' .spdl file, &lt;InstallationPath&gt;\\Application\\spdl\\C3DdotXSIImportOpt.spdl.\n\
SetValue \"dotXSIImportOptions.anim_import\", True\n\
SetValue \"dotXSIImportOptions.classical_scaling\", True\n\
SetValue \"dotXSIImportOptions.mat_import\", True\n\
SetValue \"dotXSIImportOptions.txt_import\", True\n\
\' Now import the same model that was just exported.\n\
SIImportDotXSIFile dotXSIFile\n\
\'---------------------------------------------------------\n\
\' Output from this script (user specifies ok on both dialogs):\n\
\'INFO : \"4004 - Begin: Export .xsi file\"\n\
\'INFO : \"4005 - End: Export .xsi file\"\n\
\'INFO : \"4002 - Begin: Import .xsi file\"\n\
\'INFO : \"4003 - End: Import .xsi file\"\n\
\' Object: ExportRoot.Torus\n\
\' Object: ExportRoot.Cube\n\
\'---------------------------------------------------------</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/ImportDotXSI.html\">ImportDotXSI</a> <a href=\"#!/url=./si_cmds/ExportDotXSI.html\">ExportDotXSI</a> <a href=\"#!/url=./si_cmds/ImportModel.html\">ImportModel</a> <a href=\"#!/url=./si_cmds/SIExportDotXSIFile.html\">SIExportDotXSIFile</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";