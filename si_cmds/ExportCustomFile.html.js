var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ExportCustomFile</title>\n\
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
            <h1>ExportCustomFile</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ExportCustomFile</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v8.0 (2010)</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Exports the scene contents to a custom file. The custom file type must be registered in \n\
an export custom converter event (see <a href=\"#!/url=./si_om/PluginRegistrar.RegisterConverterEvent.html\">PluginRegistrar.RegisterConverterEvent</a>\n\
for more information about how to specify the extension of the filename).\n\
<br /><br />\n\
This command fires the following events: <a href=\"#!/url=./si_om/siEventID.html#siOnBeginFileExport\">siOnBeginFileExport</a>, \n\
the custom exporter registered for the matching file extension, and \n\
<a href=\"#!/url=./si_om/siEventID.html#siOnEndFileExport\">siOnEndFileExport</a>, in that order.\n\
<br /><br />\n\
The <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnCustomFileExport\">FileType context attribute</a> of the\n\
<a href=\"#!/url=./si_om/siEventID.html#siOnBeginFileExport\">siOnBeginFileExport</a>, <a href=\"#!/url=./si_om/siEventID.html#siOnCustomFileExport\">siOnCustomFileExport</a>\n\
and <a href=\"#!/url=./si_om/siEventID.html#siOnEndFileExport\">siOnEndFileExport</a> events will have the <a href=\"#!/url=./si_om/siFileType.html#siFileTypeCustom\">siFileTypeCustom</a>\n\
value when this command is called.\n\
<br /><br />\n\
Warning: If there is no custom exporter event registered with the matching file extension,\n\
the command will fail and an error will be logged.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>ExportCustomFile( FileName, [Target], [Frame], [UserData] );</pre>		</td>	</tr>\n\
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
The full path name of the custom exported file.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Target		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The objects to be exported.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Selected object			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Frame		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
\n\
		Frame at which to export the specified objects. This information is only accessible from the\n\
		custom converter export event callback.\n\
			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current frame.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">UserData		</td>\n\
		<td>Parameter-dependent		</td>\n\
		<td>\n\
Any data that needs to be accessible from the custom converter export event callback.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
# First of all, an export converter event must be registered with the extension of the file to export.\n\
#\n\
from win32com.client import constants as c\n\
def XSILoadPlugin( in_reg ) :\n\
	in_reg.Author = \"ABC\"\n\
	in_reg.Name = \"ABC Text Converter plugin\"\n\
	in_reg.Major = 1\n\
	in_reg.Minor = 0\n\
	in_reg.URL = \"www.abc.com\"\n\
	# Let XSI know that this plug-in implements custom import/export events for ABC files\n\
	in_reg.RegisterConverterEvent( \"ABCTextImport\", c.siOnCustomFileImport, \"ABC\" )\n\
	in_reg.RegisterConverterEvent( \"ABCTextExport\", c.siOnCustomFileExport, \"ABC\" )\n\
	return 1\n\
def ABCTextImport_OnEvent( in_ctxt ) :\n\
	app = Application\n\
	app.LogMessage( \"ABC Text Import Event called...\" )\n\
	app.LogMessage( \"FileName: \" + in_ctxt.GetAttribute(\"FileName\") )\n\
	app.LogMessage( \"Target: \" + str(in_ctxt.GetAttribute(\"Target\")) )\n\
	app.LogMessage( \"FileType: \" + str(in_ctxt.GetAttribute(\"FileType\")) )\n\
	app.LogMessage( \"Frame: \" + str(in_ctxt.GetAttribute(\"Frame\")) )\n\
	app.LogMessage( \"UserData: \" + str(in_ctxt.GetAttribute(\"UserData\")) )\n\
def ABCTextExport_OnEvent( in_ctxt ) :\n\
	app = Application\n\
	app.LogMessage( \"ABC Text Export Event called...\");\n\
	app.LogMessage( \"FileName: \" + in_ctxt.GetAttribute(\"FileName\") );\n\
	app.LogMessage( \"Target: \" + str(in_ctxt.GetAttribute(\"Target\")) );\n\
	app.LogMessage( \"FileType: \" + str(in_ctxt.GetAttribute(\"FileType\")) )\n\
	app.LogMessage( \"Frame: \" + str(in_ctxt.GetAttribute(\"Frame\")) )\n\
	app.LogMessage( \"UserData: \" + str(in_ctxt.GetAttribute(\"UserData\")) );\n\
#\n\
# Then, the ExportCustomFile command may be called from any script.\n\
#\n\
Application.ExportCustomFile( \"MyABCfile.abc\", \"Scene_Root\", 50, \"ABCExportOptions\" )\n\
#---------------------------------------------------------\n\
# Output from this script:\n\
# INFO : ABC Text Export Event called...\n\
# INFO : FileName: MyABCfile.abc\n\
# INFO : Target: Scene_Root\n\
# INFO : FileType: 31\n\
# INFO : Frame: 50.0\n\
# INFO : UserData: ABCExportOptions\n\
#---------------------------------------------------------</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/ImportCustomFile.html\">ImportCustomFile</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";