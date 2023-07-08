var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Application.ExecuteScript</title>\n\
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
            <h1>Application.ExecuteScript</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Application.html\">Application</a>.ExecuteScript</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Executes a script file. This routine allows a single plug-in to be written with more than one language.\n\
For example, a VBScript script could call a helper function written in JScript.  It is also a useful way \n\
for a COM C++ plug-in to execute script code. <br /><br />\n\
Alternatively, you can register the script as a custom command. One advantage of that approach is that \n\
the calling script does not need to know the full path to the called script. <br /><br />\n\
If there is an error the global ErrorInfo contains detailed information, For example, if there was a \n\
parsing error or script error the details of what went wrong are recorded in the ErrorInfo.Description \n\
property and the line number is recorded in the ErrorInfo.HelpContext property. How you can extract this \n\
information depends on the language; for example, see \'GetErrorInfo()\' in C++, \'err\' in VBScript, and \n\
\'Error object\' in JScript.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Object Application.ExecuteScript( String in_FileName, String in_LanguageProgID, String in_ProcName, Object& io_Params );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oVariant = Application.ExecuteScript( FileName, [Language], [ProcName], [Params] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>A <a href=\"#!/url=./files/Variant.htm\">Variant</a> containing the return value of the procedure</p></div>\n\
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
		<td><a href=\"#!/url=./files/String.htm\">String</a> or <a href=\"#!/url=./si_om/Expression.html\">Expression</a>		</td>\n\
		<td>\n\
Full path to the script file		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Language		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a> or <a href=\"#!/url=./si_om/Expression.html\">Expression</a>		</td>\n\
		<td>\n\
Language used to author the script.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Determined based on filename extension.			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">VBScript					</td>\n\
					<td>VBScript language (the only recognized filename extension is \'.vbs\')					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">JScript					</td>\n\
					<td>JScript language (the only recognized filename extension is \'.js\')					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">Python					</td>\n\
					<td>Python ActiveX scripting language (the only recognized filename extensions are \'.py\' and \'.pys\')					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">PythonScript					</td>\n\
					<td>Python ActiveX scripting language (the only recognized filename extensions are \'.py\' and \'.pys\')					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">PerlScript					</td>\n\
					<td>Perl scripting language (the only recognized filename extensions are \'.pl\' and \'.pls\')					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ProcName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		Name of subroutine to execute.  By the nature of scripting languages, any global code \n\
		(code that is not part of a subroutine) is also executed. <br /><br />\n\
		Tip: In VBScript subroutines are called \"sub\" or \"function\", in JScript \"function\", \n\
		in PerlScript \"sub\", and in Python \"def\".\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Params		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Variant.htm\">Variant</a>s		</td>\n\
		<td>\n\
 Arguments to pass to subroutine 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">Dim fso, wText, bInteractive, TestFile\n\
TestFile=\"c:\\temp\\test.vbs\"\n\
Main()\n\
\'------------------------------------------------------------------------------\n\
\' NAME:		FillFile\n\
\'\n\
\' INPUT:\n\
\'\n\
\' DESCRIPTION:	Fill the test file\n\
\'------------------------------------------------------------------------------\n\
sub FillFile (in_file)\n\
	wText.WriteLine \"Main()\"\n\
	wText.WriteLine \"\"\n\
	wText.WriteLine \"sub log_some_messages(an_int, a_string)\"\n\
	wText.WriteLine \"logmessage \"\"the int : \"\" &amp; an_int\"\n\
	wText.WriteLine \"logmessage \"\"the string : \"\" &amp; a_string\"\n\
	wText.WriteLine \"end sub\"\n\
	wText.WriteLine \"\"\n\
	wText.WriteLine \"sub main()\"\n\
	wText.WriteLine \"CreatePrim \"\"Sphere\"\", \"\"NurbsSurface\"\"\"\n\
	wText.WriteLine \"end sub\"\n\
	wText.Close\n\
end sub\n\
sub main()\n\
	Set fso = CreateObject(\"Scripting.FileSystemObject\")\n\
	Set wText = fso.CreateTextFile( TestFile, 1)\n\
	FillFile TestFile\n\
	ExecuteScript TestFile\n\
	dim aParams\n\
	aParams = Array(123456789, \"toto\")\n\
	ExecuteScript TestFile,,\"log_some_messages\", aParams\n\
end sub</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/XSIApplication.ExecuteScriptCommand.html\">XSIApplication.ExecuteScriptCommand</a> <a href=\"#!/url=./si_om/Application.ExecuteScriptCode.html\">Application.ExecuteScriptCode</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";