var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ArgumentCollection</title>\n\
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
            <h1>ArgumentCollection</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ArgumentCollection</h2>\n\
\n\
<p>Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1ArgumentArray.html\">ArgumentArray</a></p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v2.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> This object is owned by a <a href=\"#!/url=./si_om/Command.html\">Command</a> object and holds a \n\
collection of <a href=\"#!/url=./si_om/Argument.html\">Argument</a> objects.<br /><br />\n\
Each Argument has a unique name, which is useful for documentation purposes\n\
and to faciliate the <a href=\"#!/url=./si_om/ArgumentCollection.Item.html\">ArgumentCollection.Item</a> method.\n\
However it is the order of the arguments in the collection which determines how\n\
they are passed to the command implementation.  For script-based \n\
implementations the number of arguments must exactly match the number of \n\
arguments expected by the function (or subroutine) that implements the command.\n\
(For commands implemented with the C++ API all the arguments are passed together\n\
in a CValueArray).<br /><br />\n\
Even though the number of arguments defined must exactly match those expected\n\
by the implementation, it is not always necessary to specify each argument when\n\
invoking a command.  In that case a default value is passed, based on the\n\
definition or the action of an <a href=\"#!/url=./si_om/ArgumentHandler.html\">ArgumentHandler</a>.<br /><br />\n\
This object can be used in two different ways - to define the arguments of a new \n\
custom command and to specify specific argument values when a command is executed.\n\
The definition of the arguments is normally done on a command after <a href=\"#!/url=./si_om/XSIApplication.CreateCommand.html\">XSIApplication.CreateCommand</a>\n\
has been called and before <a href=\"#!/url=./si_om/XSIApplication.AddCommand.html\">XSIApplication.AddCommand</a> is called.  Alternatively an existing \n\
custom command can be changed by changing the argument collection and then calling <a href=\"#!/url=./si_om/Command.Update.html\">Command.Update</a>.<br /><br />\n\
Note: You access a specific argument using the <a href=\"#!/url=./si_om/ArgumentCollection.Item.html\">ArgumentCollection.Item</a> method, \n\
for example, oCommand.Arguments.Item(\"strArgument\"). Usually the argument returns the value \n\
assigned; however, if the argument is not available, \"Nothing\" in VBScript or \"NULL\" \n\
in COM-based C++ is returned. \n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ArgumentCollection.Add.html\">Add</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ArgumentCollection.AddCopy.html\">AddCopy</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ArgumentCollection.AddObjectArgument.html\">AddObjectArgument</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ArgumentCollection.AddWithHandler.html\">AddWithHandler</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ArgumentCollection.Remove.html\">Remove</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ArgumentCollection.RemoveAll.html\">RemoveAll</a>		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Properties</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ArgumentCollection.Count.html\">Count</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ArgumentCollection.Item.html\">Item</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example finds the Argument names for the SICreateImageClip command. \n\
	When working with the ISIVTCollection returned by SICreateImageClip, you\n\
	need to know the exact names of the output arguments.\n\
*/\n\
var e = new Enumerator( Application.Commands );	\n\
for ( ; ! e.atEnd(); e.moveNext() ) {\n\
	if ( e.item().ScriptingName == \"SICreateImageClip\" ) {\n\
		var cmd = e.item();\n\
		for ( var i=0; i&lt;cmd.Arguments.Count; i++ ) {\n\
			// the pipe \'|\' characters allow you to see \n\
			// any spaces before or after the name\n\
			Application.LogMessage( \"|\" + cmd.Arguments(i).Name + \"|\" );\n\
		}\n\
	}\n\
}\n\
// Logs the following results:\n\
//INFO : |FileName|\n\
//INFO : |Name|\n\
//INFO : |Clip|</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">set args = Application.Commands(\"Twist\").Arguments\n\
LogMessage \"arguments count: \" &amp; args.count</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Command.Arguments.html\">Command.Arguments</a> <a href=\"#!/url=./si_om/Command.Execute.html\">Command.Execute</a> <a href=\"#!/url=./si_om/XSIApplication.CreateCommand.html\">XSIApplication.CreateCommand</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";