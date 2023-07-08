var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSIApplication.ExecuteCommand</title>\n\
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
            <h1>XSIApplication.ExecuteCommand</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/XSIApplication.html\">XSIApplication</a>.ExecuteCommand</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v6.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Executes a Softimage <a href=\"#!/url=./si_om/Command.html\">Command</a> identified by its scripting name. \n\
This method can be used to execute any built-in or custom command. This method is\n\
similar to <a href=\"#!/url=./si_om/XSIApplication.ExecuteScriptCommand.html\">XSIApplication.ExecuteScriptCommand</a>, but unlike \n\
ExecuteScriptCommand, the method doesn\'t pack output arguments in an \n\
ISIVTCollection object but rather in a standard <a href=\"#!/url=./files/Array.htm\">Array</a>.<br /><br />\n\
Typically this method is not necessary from scripting because Softimage commands can be \n\
invoked directly. So the main purpose of this method is to enable applications \n\
written with C# to be able to call Softimage commands.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Object XSIApplication.ExecuteCommand( String in_bzScriptName, Object in_vsa );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oVariant = XSIApplication.ExecuteCommand( Name, [Arguments] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p> Returns a C# System.Object or a <a href=\"#!/url=./files/Variant.htm\">Variant</a> in scripting,\n\
containing the value returned from the command. If the command has no return value \n\
explicitly defined, ExecuteCommand returns all output arguments in an \n\
<a href=\"#!/url=./files/Array.htm\">Array</a> object. However, if the command defines a return value, \n\
you cannot extract any output arguments from it. This is because the \n\
command is not returning an output argument array, but a specific value. You can \n\
check the Return Value section in the Softimage reference documentation to see whether \n\
it uses an explicit return value and what that value is.\n\
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
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Command\'s script name		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Arguments		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Variant.htm\">Variant</a>s in scripting or array of System.Objects in C#.		</td>\n\
		<td>\n\
Array of all required command arguments, including output arguments. 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>C# Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"csharp\">//\n\
// This example illustrates how to use Softimage commands from C#.\n\
//\n\
CXSIApplication xsi = new CXSIApplication();\n\
try\n\
{\n\
	// Create a cube to add the new property\n\
	Object[] args = new Object[4] { \"Cube\", \"MeshSurface\", null, null };\n\
	xsi.ExecuteCommand(\"CreatePrim\", args);\n\
	// Add an Annotation property to the new cube\n\
	args = new Object[5] { \"Annotation\", null, null, \"Annotation\", null };\n\
	Array retVal = (Array)xsi.ExecuteCommand(\"SIAddProp\", args);\n\
	// Inspect the Annotation Property\n\
	args = new Object[5];\n\
	args[0] = retVal;\n\
	xsi.ExecuteCommand(\"InspectObj\", args);\n\
}\n\
catch (Exception e)\n\
{\n\
	xsi.LogMessage(\"Exception raised: \" + e.ToString(), siSeverity.siError);\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/XSIApplication.ExecuteScriptCommand.html\">XSIApplication.ExecuteScriptCommand</a> <a href=\"#!/url=./si_om/Command.html\">Command</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";