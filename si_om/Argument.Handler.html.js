var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Argument.Handler</title>\n\
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
            <h1>Argument.Handler</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Argument.html\">Argument</a>.Handler</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns or sets the <a href=\"#!/url=./si_om/ArgumentHandler.html\">ArgumentHandler</a> of the argument.<br /><br />\n\
A null reference is returned when the argument has no handler. You may\n\
remove an argument handler by setting the handler property to a null reference.<br /><br />\n\
You may also use a string to set an argument handler. The string must\n\
match the unique name of an argument handler. See \n\
<a href=\"#!/url=./si_om/siArgumentHandler.html\">siArgumentHandler</a> for a complete list\n\
of the available argument handlers.<br /><br />\n\
Warning: Calling this method flushes any existing value associated with\n\
the Argument, see <a href=\"#!/url=./si_om/Argument.Value.html\">Argument.Value</a>.<br /><br />\n\
Note: this method should not be confused with <a href=\"#!/url=./si_om/Command.Handler.html\">Command.Handler</a> which\n\
returns the name of the script function that implements the command.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
ArgumentHandler Argument.get_Handler();\n\
// set accessor\n\
Argument.set_Handler( Object out_ppArgumentHandler );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// JScript example demonstrating how you can\n\
// find out about ArgumentHandlers associated \n\
// with the arguments of a Command\n\
// Cleanup\n\
RemoveCommand(\"CmdWithHandler\");\n\
// Command creation\n\
var oCmd = CreateCommand(\"CmdWithHandler\");\n\
oCmd.Code = CmdImpl.toString(); // Embedded command\n\
oCmd.Language = \"JScript\";\n\
var oCmdArgs = oCmd.Arguments;\n\
var noValue; \n\
oCmdArgs.AddWithHandler(\"myArgument\", \"Collection\");\n\
oCmdArgs.Add(\"myArgWithoutHandler\", siArgumentInput, \"defaultValue\");\n\
AddCommand(oCmd);\n\
// display the arguments\n\
for (i=0; i &lt; oCmdArgs.Count; i++)\n\
{\n\
		var currentArg = oCmdArgs(i);\n\
		var argHandler = currentArg.Handler;\n\
		if (null != argHandler)\n\
		{\n\
			LogMessage(currentArg.Name + \" has the following handler: \" + argHandler.Name );\n\
		}\n\
		else\n\
		{\n\
			LogMessage(currentArg.Name + \" does not have a handler.\");\n\
		}\n\
}\n\
// let\'s remove the argument handler\n\
var oArgWithHandler = oCmdArgs(\"myArgument\");\n\
oArgWithHandler = noValue;\n\
// Implementation of the custom command\n\
function CmdImpl( collectionArg, basicArg )\n\
{\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";