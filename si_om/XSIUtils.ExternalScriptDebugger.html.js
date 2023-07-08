var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSIUtils.ExternalScriptDebugger</title>\n\
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
            <h1>XSIUtils.ExternalScriptDebugger</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/XSIUtils.html\">XSIUtils</a>.ExternalScriptDebugger</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Sets or returns the <a href=\"#!/url=./files/Boolean.htm\">Boolean</a> value on the registry key \n\
(HKEY_CURRENT_USER\\Software\\Microsoft\\Windows Script\\Settings\\JITDebug) that controls whether the \n\
external script debugger starts when a script error occurs in Softimage.<br /><br />\n\
Script debugging requires a debugger such as Microsoft Script Debugger or the Microsoft Visual Studio \n\
.Net debugger.<br /><br />\n\
The debugger starts when a script error occurs, or when a VBScript stop statement or JScript \n\
debugger statement is executed.<br /><br />\n\
You cannot edit your scripting code in the debugger, but you can often solve tough scripting problems\n\
by checking variable values and stepping through code line by line and viewing variable values.<br /><br />\n\
Typically, it is more convenient to enable the external debugger only when you want to debug your scripts, and \n\
to disable it during normal use. If you leave the debugger enabled, errors that are normally handled by Softimage may\n\
stop execution of your script. For example, clicking Cancel on a modal property page can raise an error that is\n\
normally handled by Softimage, but which will start the debugger if it is enabled.<br /><br />\n\
Tip: You can enable the external debugger from the script editor (for VBScript and JScript code). In the editing pane, \n\
right-click and then click Tools > Enable External Debugger.<br /><br />\n\
Note: ExternalScriptDebugger does not apply to Python scripts (which have their own debugger), Linux, or \n\
Netview-based script code. It is a global setting, so it may also cause \"Just-In-Time Debugger\" messages\n\
to appear when viewing Web pages in Internet Explorer.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Boolean rtn = XSIUtils.ExternalScriptDebugger;\n\
// set accessor\n\
XSIUtils.ExternalScriptDebugger = Boolean;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This script demonstrates how XSIUtils.EnableScriptDebugger works when \n\
	a simple runtime error occurs.\n\
*/\n\
XSIUtils.ExternalScriptDebugger = true ;\n\
// Runtime error - calling a function that doesn\'t exist\n\
// will open the debugger\n\
BogusFunction() ;</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This script demonstrates how XSIUtils.EnableScriptDebugger works with \n\
	exception handling.\n\
*/\n\
XSIUtils.ExternalScriptDebugger = true ;\n\
// Try/catch is great for robust code,\n\
// but because it handles script errors it\n\
// can be harder to debug\n\
try {\n\
	BogusFunction() ;\n\
} catch(e) {\n\
	Application.LogMessage( \"Caught error before debugger sees it\" ) ;\n\
}\n\
// If you want to find out where inside a try/catch\n\
// the error actually happens, you can either temporarily\n\
// comment out the try/catch, or step through the\n\
// code line by line by adding a temporary call\n\
// to \"debugger\"\n\
try {\n\
	debugger ;\n\
	BogusFunction() ;\n\
} catch(e) {\n\
	Application.LogMessage( \"Code jumps here, but you are already in debugger\" ) ;\n\
}</pre></td></tr>\n\
</table>\n\
</div><h4>3. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' 	This script demonstrates how the XSIUtils.EnableScripDebugger works with \n\
\'	a simple runtime error.\n\
\'\n\
option explicit\n\
XSIUtils.ExternalScriptDebugger = true\n\
\' Runtime error - uninitialized variable\n\
\' starts the script debugger\n\
\' (the error is caught because option explicit is enabled)\n\
x = 45</pre></td></tr>\n\
</table>\n\
</div><h4>4. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' Demonstration of how \"on error resume next\"\n\
\' interfers with the script debugger\n\
\'\n\
\' 	This script demonstrates how \"on error resume next\" interferes with the \n\
\'	XSIUtils.EnableScriptDebugger.\n\
\'\n\
option explicit\n\
XSIUtils.ExternalScriptDebugger = true\n\
\' This On Error statement means that VBscript \n\
\' ignores the undefined variable name, even\n\
\' though Option Explicit is on\n\
on error resume next\n\
x = 45\n\
\' The error info is stored in the \"err\"\n\
\' global object\n\
Application.LogMessage err.description\n\
\' To debug this sort of code, try temporarily\n\
\' commenting out all \"On Error Resume Next\" statements, \n\
\' or set a break point (with the \"stop\" keyword)\n\
\' and step line by line through the code\n\
stop \n\
x = 45</pre></td></tr>\n\
</table>\n\
</div><h4>5. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
#	This script demonstrates how Python ignores the ExternalScriptDebugger\n\
#\n\
XSIUtils.ExternalScriptDebugger = 1\n\
# So if you uncomment this line it \n\
# will just log an error inside Softimage\n\
#Foobar()\n\
# However you can open a debugger like this\n\
import pywin.debugger\n\
pywin.debugger.brk()\n\
# And then step to reach this error within\n\
# the debugger\n\
Foobar()</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";