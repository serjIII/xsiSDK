var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>RemoveScriptCommand</title>\n\
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
            <h1>RemoveScriptCommand</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">RemoveScriptCommand</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>Removes a command that runs a script.</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>RemoveScriptCommand( CommandName );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">CommandName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Name displayed in the user interface (on toolbar buttons, in the Customize menu). 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' create a simple script command file\n\
dim fso, f, filename\n\
filename=installationpath(siUserPath)&amp;\"\\Data\\Scripts\\\"&amp;\"helloworld.vbs\"\n\
set fso = CreateObject(\"Scripting.FileSystemObject\")\n\
set f = fso.CreateTextFile(filename, True)\n\
f.writeline \"logmessage \"&amp;chr(34)&amp;\"Hello World\" &amp; chr(34)\n\
f.close\n\
\'create script command\n\
strID = CreateScriptCommand( \"Hello World\" ,_\n\
						 \"HelloWorld\" ,_\n\
						 filename ,_\n\
						 \"\",_\n\
						 \"Example of a simple command\" )\n\
\' Use the strID with the CreateToolbarButton command\n\
\' print information about command	\n\
PrintCommand \"Hello World\"\n\
\' execute new command\n\
HelloWorld\n\
\' remove the command\n\
RemoveScriptCommand \"Hello World\"\n\
\' check that the command has been removed\n\
PrintCommand \"Hello World\"\n\
sub PrintCommand(name)\n\
	set cmd = Application.Commands(name)\n\
	if (typename(cmd) &lt;&gt; \"Nothing\") then\n\
		logmessage cmd.name &amp; \" command\"  &amp; vbCR &amp; vbLF &amp; _\n\
		\"  category: \"&amp; cmd.category  &amp; vbCR &amp; vbLF &amp; _  \n\
		\"  description: \"&amp; cmd.description  &amp; vbCR &amp; vbLF &amp; _\n\
		\"  tooltip: \"&amp; cmd.tooltip  &amp; vbCR &amp; vbLF &amp; _\n\
		\"  scriptingname: \"&amp; cmd.scriptingname  &amp; vbCR &amp; vbLF &amp; _\n\
		\"  handler: \" &amp; cmd.handler	 &amp; vbCR &amp; vbLF &amp; _ \n\
		\"  filename: \" &amp; cmd.filename  &amp; vbCR &amp; vbLF &amp; _\n\
		\"  language: \" &amp; cmd.language  &amp; vbCR &amp; vbLF &amp; _\n\
		\"  builtin: \" &amp; cmd.builtin  &amp; vbCR &amp; vbLF &amp; _\n\
		\"  returnvalue: \" &amp; cmd.returnvalue  &amp; vbCR &amp; vbLF \n\
		strArgs = \"Arguments:\" &amp; vbCR &amp; vbLF\n\
		index=0\n\
		for each arg in cmd.arguments\n\
			strArgs = strArgs &amp; vbTab &amp; \"Arg\" &amp; index &amp; _\n\
				\" name:\" &amp; arg.name &amp;_\n\
				\", flags:\"&amp; arg.flags &amp; _\n\
				\", value:\"&amp; arg.value&amp; vbCR &amp; vbLF \n\
			index=index+1\n\
		next\n\
		logmessage strArgs\n\
	else\n\
		logmessage name &amp; \"  command is not installed\"\n\
	end if\n\
end sub\n\
sub PrintArgument( arg )\n\
	logmessage \"     \" &amp; arg.name &amp;\":\"&amp; arg.flags \n\
end sub\n\
\'INFO : \"Hello World\"\n\
\'INFO : \"Hello World command\n\
\'  category: Custom\n\
\'  description: Example of a simple command\n\
\'  tooltip: \n\
\'  scriptingname: HelloWorld\n\
\'  handler: \n\
\'  filename: c:\\users\\username\\softimage\\xsi_3.0\\data\\scripts\\helloworld.vbs\n\
\'  language: VBScript\n\
\'  builtin: False\n\
\'  returnvalue: True\n\
\'\"\n\
\'INFO : \"Arguments:\n\
\'	Arg0 name:_ScriptEngine, flags:0, value:VBScript\n\
\'	Arg1 name:_ScriptName, flags:0, value:c:\\users\\username\\softimage\\xsi_3.0\\data\\scripts\\helloworld.vbs\n\
\'	Arg2 name:_ScriptProcedure, flags:0, value:\n\
\'	Arg3 name:_ScriptPathType, flags:0, value:0\n\
\'	Arg4 name:_ScriptResult, flags:-1, value:\n\
\'\"\n\
\'INFO : \"Hello World\"\n\
\'INFO : \"Hello World  command is not installed\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/XSIApplication.RemoveCommand.html\">XSIApplication.RemoveCommand</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";