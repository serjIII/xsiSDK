var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ImportCustomFile</title>\n\
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
            <h1>ImportCustomFile</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ImportCustomFile</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v8.0 (2010)</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Imports the contents of the specified custom file into the scene . The custom file type \n\
must be registered in an import custom converter event (see \n\
<a href=\"#!/url=./si_om/PluginRegistrar.RegisterConverterEvent.html\">PluginRegistrar.RegisterConverterEvent</a> for more information about how to \n\
specify the extension of the filename).\n\
<br /><br />\n\
This command fires the following events: <a href=\"#!/url=./si_om/siEventID.html#siOnBeginFileImport\">siOnBeginFileImport</a>, \n\
the custom importer registered for the matching file extension, and \n\
<a href=\"#!/url=./si_om/siEventID.html#siOnEndFileImport\">siOnEndFileImport</a>, in that order.\n\
<br /><br />\n\
The <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnCustomFileImport\">FileType context attribute</a> of the\n\
<a href=\"#!/url=./si_om/siEventID.html#siOnBeginFileImport\">siOnBeginFileImport</a>, <a href=\"#!/url=./si_om/siEventID.html#siOnCustomFileImport\">siOnCustomFileImport</a>\n\
and <a href=\"#!/url=./si_om/siEventID.html#siOnEndFileImport\">siOnEndFileImport</a> events will have the <a href=\"#!/url=./si_om/siFileType.html#siFileTypeCustom\">siFileTypeCustom</a>\n\
value when this command is called.\n\
<br /><br />\n\
Warning: If there is no custom importer event registered with the matching file extension,\n\
the command will fail and an error will be logged.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>ImportCustomFile( FileName, [Target], [Reference], [Name], [Frame], [UserData] );</pre>		</td>	</tr>\n\
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
The full path name of the custom file to import.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Target		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The parent of the content imported from the custom file.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Scene_Root			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Reference		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
\n\
		Specifies whether a reference model is being imported, if applicable. This information \n\
		is only accessible from the <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnBeginFileImport\">Reference context attribute</a> \n\
		for the <a href=\"#!/url=./si_om/siEventID.html#siOnBeginFileImport\">siOnBeginFileImport</a> and <a href=\"#!/url=./si_om/siEventID.html#siOnEndFileImport\">siOnEndFileImport</a> \n\
		events.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		The name of the reference model created during the import. This information \n\
		is only accessible from the <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnBeginFileImport\">Name context attribute</a> \n\
		for the <a href=\"#!/url=./si_om/siEventID.html#siOnBeginFileImport\">siOnBeginFileImport</a> and <a href=\"#!/url=./si_om/siEventID.html#siOnEndFileImport\">siOnEndFileImport</a>\n\
		events.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"\"			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Frame		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
\n\
		Frame at which to import the contents of the custom file. This information is only accessible from the\n\
		custom converter import event callback.\n\
			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current frame.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">UserData		</td>\n\
		<td>Parameter-dependent		</td>\n\
		<td>\n\
Any data that needs to be accessible from the custom converter import event callback.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	First of all, an import converter event must be registered with the extension of the file to import.\n\
*/\n\
function XSILoadPlugin( in_reg )\n\
{\n\
	in_reg.Author = \"ABC\" ;\n\
	in_reg.Name = \"ABC Text Converter plugin\" ;\n\
	in_reg.Major = 1;\n\
	in_reg.Minor = 0;\n\
	in_reg.URL = \"www.abc.com\"\n\
	// Let XSI know that this plug-in implements custom import/export events for ABC files\n\
	in_reg.RegisterConverterEvent(\"ABCTextImport\",siOnCustomFileImport, \"ABC\");\n\
	in_reg.RegisterConverterEvent(\"ABCTextExport\",siOnCustomFileExport, \"ABC\");\n\
	return true ;\n\
}\n\
function ABCTextImport_OnEvent( in_ctxt )\n\
{\n\
	Application.LogMessage(\"ABC Text Import Event called...\");\n\
	Application.LogMessage(\"FileName: \" + in_ctxt.GetAttribute(\"FileName\"));\n\
	Application.LogMessage(\"Target: \" + in_ctxt.GetAttribute(\"Target\"));\n\
	Application.LogMessage(\"FileType: \" + in_ctxt.GetAttribute(\"FileType\"));\n\
	Application.LogMessage(\"Frame: \" + in_ctxt.GetAttribute(\"Frame\"));\n\
	Application.LogMessage(\"UserData: \" + in_ctxt.GetAttribute(\"UserData\"));\n\
}\n\
function ABCTextExport_OnEvent( in_ctxt )\n\
{\n\
	Application.LogMessage(\"ABC Text Export Event called...\");\n\
	Application.LogMessage(\"FileName: \" + in_ctxt.GetAttribute(\"FileName\"));\n\
	Application.LogMessage(\"Target: \" + in_ctxt.GetAttribute(\"Target\"));\n\
	Application.LogMessage(\"FileType: \" + in_ctxt.GetAttribute(\"FileType\"));\n\
	Application.LogMessage(\"Frame: \" + in_ctxt.GetAttribute(\"Frame\"));\n\
	Application.LogMessage(\"UserData: \" + in_ctxt.GetAttribute(\"UserData\"));\n\
}\n\
/*\n\
	Then, the ImportCustomFile command may be called from any script.\n\
*/\n\
ImportCustomFile(\"MyABCfile.abc\", \"Scene_Root\", false, \"myImportFile\", 40, \"ABCImportOptions\");\n\
//---------------------------------------------------------\n\
// Output from this script:\n\
// INFO : ABC Text Import Event called...\n\
// INFO : FileName: MyABCfile.abc\n\
// INFO : Target: Scene_Root\n\
// INFO : FileType: 31\n\
// INFO : Frame: 40\n\
// INFO : UserData: ABCImportOptions\n\
//---------------------------------------------------------</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/ExportCustomFile.html\">ExportCustomFile</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";