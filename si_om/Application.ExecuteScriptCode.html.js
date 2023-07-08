var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Application.ExecuteScriptCode</title>\n\
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
</style><link rel=\"stylesheet\" href=\"si_om/css/en.css\" type=\"text/css\" /><script>$(document).ready(function() { yepnope.injectJs(\"./si_om/lib/utils.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Application.ExecuteScriptCode</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Application.html\">Application</a>.ExecuteScriptCode</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Executes a string of script code.\n\
<br /><br />\n\
Use ExecuteScriptCode when you need to generate and execute a fragment of code written\n\
in a different scripting language (for example, to run some VBScript code from JScript).\n\
<br /><br />\n\
Unlike <a href=\"#!/url=./si_om/Application.ExecuteScript.html\">Application.ExecuteScript</a>, which reads script code from a file, \n\
ExecuteScriptCode takes a string of script code as an argument.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Object Application.ExecuteScriptCode( String in_ScriptText, String in_LanguageProgID, String in_ProcName, Object& io_Params );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oVariant = Application.ExecuteScriptCode( Code, Language, [ProcName], [Params] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p> A <a href=\"#!/url=./files/Variant.htm\">Variant</a> containing the return value of the subroutine.  \n\
The return value is always empty if no subroutine argument is specified.\n\
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
		<td class=\"name\">Code		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
A string that contains valid script code.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Language		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Specifies the scripting language of the code (for example, \"VBScript\", \"JScript\", or \"Python\").		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ProcName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		Name of a procedure (a function or subroutine) to execute. When you execute a procedure, any global code \n\
		(code that is outside of a procedure) is also executed. <br /><br />\n\
		Tip: In VBScript, you can execute a subroutine (\"sub\") or a function (\"function\"). In JScript, procedures are\n\
		declared with the \"function\" keyword; in Python, with \"def\", and in PerlScript, with \"sub\".\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Params		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Variant.htm\">Variant</a>s		</td>\n\
		<td>\n\
Arguments to pass to the procedure.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">//JScript example that shows how to mix scripting languages\n\
vbscriptFragment = \"LogMessage \\\"Hello from VBScript\\\"\" ;\n\
pythonScriptFragment = \"Application.LogMessage( \\\"Hello from Python\\\" )\" ;\n\
jscriptFragment = \"LogMessage(\\\"Hello from JScript\\\")\" ;\n\
Application.ExecuteScriptCode( vbscriptFragment, \"VBScript\" ) ;\n\
Application.ExecuteScriptCode( pythonScriptFragment, \"Python\" ) ;\n\
// Eval is a built-in JScript function that does the same thing \n\
// as Application.ExecuteScriptCode, but only for JScript code\n\
eval( jscriptFragment ) ;\n\
// Errors in the executed script are logged and returned\n\
// to the caller, so you can catch and handle exceptions\n\
try\n\
{\n\
	Application.ExecuteScriptCode( \"Bad Script Code\", \"VBScript\" ) ;\n\
}\n\
catch( e )\n\
{\n\
	LogMessage( \"Script code failed: \" + e.description ) ;\n\
}\n\
//Expected output:\n\
//INFO : Hello from VBScript\n\
//INFO : Hello from Python\n\
//INFO : Hello from JScript\n\
//ERROR : Expected end of statement - [line 1]\n\
//INFO : Script code failed: Expected end of statement [Line 1 in Script Text]</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'VBScript example that shows how to use mix scripting languages\n\
vbscriptFragment = \"LogMessage \"\"Hello from VBScript\"\" \"\n\
pythonScriptFragment = \"Application.LogMessage( \"\"Hello from Python\"\" )\" \n\
jscriptFragment = \"LogMessage(\"\"Hello from JScript\"\")\" \n\
\' Execute is a built-in VBScript function that does the same \n\
\' thing as Application.ExecuteScriptCode, but only for VBScript code\n\
Execute( vbscriptFragment)\n\
Application.ExecuteScriptCode jscriptFragment , \"JScript\" \n\
\'This line fails if Python is not installed\n\
Application.ExecuteScriptCode pythonScriptFragment, \"Python\" \n\
\' Errors in the executed script are logged and returned\n\
\' to the caller, so you can catch and handle exceptions\n\
on error resume next\n\
Application.ExecuteScriptCode \"Bad Script Code\", \"VBScript\" \n\
if err &lt;&gt; 0 then\n\
	LogMessage \"Script code failed: \" &amp; err.description \n\
end if\n\
\'Expected output:\n\
\'INFO : Hello from VBScript\n\
\'INFO : Hello from Python\n\
\'INFO : Hello from JScript\n\
\'ERROR : Expected end of statement - [line 1]\n\
\'INFO : Script code failed: Expected end of statement [Line 1 in Script Text]</pre></td></tr>\n\
</table>\n\
</div><h4>3. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// JScript example that shows how to call a simple VBScript function from JScript, \n\
// and how to pass in arguments and get the return value\n\
var strVBRoutine = \"function VBRound( in_var )\\n\" + \n\
			\"VBRound = Round( in_var )\\n\" + \n\
			\"end function\" ;\n\
var aArgs = new Array ;\n\
aArgs[0] = 1.056879 ;\n\
LogMessage( Application.ExecuteScriptCode( strVBRoutine, \"VBScript\", \"VBRound\", aArgs) ) ;\n\
aArgs[0] = 99.9999 ;\n\
LogMessage( Application.ExecuteScriptCode( strVBRoutine, \"VBScript\", \"VBRound\", aArgs) ) ;\n\
// Expected results;\n\
//INFO : 1\n\
//INFO : 100</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Command.html\">Command</a> <a href=\"#!/url=./si_om/Application.ExecuteScript.html\">Application.ExecuteScript</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";