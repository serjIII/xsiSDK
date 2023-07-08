var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSIApplication.ExecuteScriptCommand</title>\n\
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
            <h1>XSIApplication.ExecuteScriptCommand</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/XSIApplication.html\">XSIApplication</a>.ExecuteScriptCommand</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Executes a Softimage <a href=\"#!/url=./si_om/Command.html\">Command</a>. This method can be used to execute any \n\
built-in or custom command.  The name of the method is misleading, because compiled \n\
custom commands can also be executed via this method.  For this reason the equivalent \n\
method in the C++ API has been renamed to Application::ExecuteCommand.<br /><br />\n\
Typically this method is not necessary from scripting because Softimage commands can be \n\
invoked directly. So the main purpose of this method is to enable C++ applications \n\
written with COM to be able to call Softimage commands.  With the advent of the C++ API it \n\
is rarely necessary to use this method.<br /><br />\n\
This method, in scripting, can only return arguments via the return value. In C++ \n\
the arguments are supplied to the command via a variant containing a SafeArray. \n\
Output arguments must be passed by reference; this is done by setting the variant\'s \n\
argument type to VT_VARIANT | VT_BYREF.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Object XSIApplication.ExecuteScriptCommand( String in_bzScriptName, Object in_vsa );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oVariant = XSIApplication.ExecuteScriptCommand( Name, [Arguments] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./files/Variant.htm\">Variant</a> (return value from script command)</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Command\'s script name		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Arguments		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Variant.htm\">Variant</a>s		</td>\n\
		<td>\n\
\n\
		Array of all required script command arguments, including output arguments \n\
		passed by reference. In C++ the argument is implemented as a variant containing \n\
		a SafeArray of variants.\n\
			</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\'	This example illustrates how to create a image clip and inspect it using\n\
\'	a modal property page.\n\
\'\n\
Dim clip, args\n\
args = Array(Application.InstallationPath( siFactoryPath ) &amp; \"\\Data\\XSI_SAMPLES\\Pictures\\A_Green_Suit.JPG\")\n\
set clip = ExecuteScriptCommand( \"CreateImageClip\", args )\n\
On Error Resume Next\n\
ExecuteScriptCommand \"InspectObj\", Array( clip,,,siModal)\n\
if Err.Number = siErrCancelled then\n\
	Application.LogMessage \"command cancelled\"\n\
end if\n\
On Error Goto 0</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\'	This example shows different ways to\n\
\'	call a Softimage command from vbscript\n\
\'\n\
\' Normal method.  This method will not work\n\
\' on Netview\n\
GetPrim \"Null\"\n\
\' This method will not work on Netview\n\
\' (because there is no global Application object)\n\
Application.GetPrim \"Null\"\n\
\' This is the method that works in a Netview\n\
\' script.  The oXsi object can be cached.\n\
set oXsi = CreateObject( \"XSI.Application\" )\n\
set oXsi = oXsi.Application\n\
oXsi.GetPrim \"Null\"\n\
\' Because of the convenience of the previous methods,\n\
\' this mechanism is not recommended from vbscript.\n\
\' it is most useful for COM C++ plug-ins\n\
Application.ExecuteScriptCommand \"GetPrim\", Array( \"Null\" )</pre></td></tr>\n\
</table>\n\
</div><h4>3. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
# Python Example\n\
#\n\
args = [\"Cone\",\"MeshSurface\",\"\",\"\"]\n\
retval = Application.ExecuteScriptCommand( \"CreatePrim\", args )\n\
args = [retval,\"\",\"\", 4]	# siModal=4\n\
try:\n\
	Application.ExecuteScriptCommand( \"InspectObj\", args )\n\
except:\n\
	Application.LogMessage(\"command cancelled\")</pre></td></tr>\n\
</table>\n\
</div><h4>4. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	JScript Example\n\
*/\n\
var obj,i=0;\n\
var aArgs1 = new Array();\n\
i=0;\n\
aArgs1[i++] = \"Cone\";\n\
aArgs1[i++] = \"MeshSurface\";\n\
aArgs1[i++] = null;\n\
aArgs1[i++] = null;\n\
obj = ExecuteScriptCommand(\"CreatePrim\", aArgs1 );\n\
var aArgs2 = new Array();\n\
i=0;\n\
aArgs2[i++] = obj\n\
aArgs2[i++] = null;\n\
aArgs2[i++] = null;\n\
aArgs2[i++] = siModal;\n\
try {\n\
	ExecuteScriptCommand(\"InspectObj\", aArgs2 );\n\
}\n\
catch (e) {\n\
	LogMessage(\"command cancelled\");\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Application.ExecuteScript.html\">Application.ExecuteScript</a> <a href=\"#!/url=./si_om/Command.html\">Command</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";