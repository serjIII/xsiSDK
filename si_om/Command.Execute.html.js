var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Command.Execute</title>\n\
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
            <h1>Command.Execute</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Command.html\">Command</a>.Execute</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Executes the underlying command. In the case of a new custom command, \n\
the command needs to be installed inside Softimage before this works, \n\
using <a href=\"#!/url=./si_om/XSIApplication.AddCommand.html\">XSIApplication.AddCommand</a>. Use the \n\
<a href=\"#!/url=./si_om/Command.Arguments.html\">Command.Arguments</a> property to specify \n\
arguments for the command.<br /><br />\n\
Note: If the command expects arguments and none is specified then it is invoked \n\
with the default arguments.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Object Command.Execute();</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oVariant = Command.Execute();</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p> A <a href=\"#!/url=./files/Variant.htm\">Variant</a> containing the value returned from the command.\n\
If the command has no return value explicitly defined, Execute returns all output \n\
arguments in an <a href=\"#!/url=./files/Array.htm\">Array</a> object. However, if the command defines a \n\
return value, you cannot extract any output arguments from it. This is because the \n\
command is not returning an output argument array, but a specific value. You can \n\
check the Return Value section in the reference documentation to see whether \n\
it uses an explicit return value and what that value is.\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\'	VBScript example\n\
\'\n\
set cmd = Application.Commands(\"Duplicate/Instantiate Options\")\n\
cmd.Execute</pre></td></tr>\n\
</table>\n\
</div><h4>2. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\"># This sample demonstrates how to execute commands with specific arguments and inspect the return values.\n\
Application.CreatePrim(\"Grid\", \"MeshSurface\", \"\", \"\")\n\
# Note: The base commands for \'Quick Stretch\', \'Bend\' and \'Bevel\' return the newly created operators in a list \n\
# so you have get the operator at position 0 in the list.\n\
op = Application.Commands( \"Quick Stretch\" ).Execute()[0]\n\
op2 = Application.Commands( \"Bend\" ).Execute()[0]\n\
bevelCmd = Application.Commands( \"Bevel\" )\n\
setarg = bevelCmd.Arguments(\"ConnectionSet\")\n\
setarg.Value = \"grid.poly[52,53]\"\n\
op3 = bevelCmd.Execute()[0]\n\
ops = [op, op2, op3]\n\
Application.InspectObj( ops )\n\
# History log\n\
# Application.CreatePrim(\"Grid\", \"MeshSurface\", \"\", \"\")\n\
# Application.ApplyKinematicOp(\"QStretch\", \"grid\", \"\")\n\
# Application.ApplyOp(\"Bend\", \"grid\", 3, \"siPersistentOperation\", \"\", 0)\n\
# Application.ApplyTopoOp(\"BevelComponent\", \"grid.poly[52,53]\", \"siUnspecified\", \"siPersistentOperation\", \"\")</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";