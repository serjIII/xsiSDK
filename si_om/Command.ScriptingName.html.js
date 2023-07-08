var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Command.ScriptingName</title>\n\
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
            <h1>Command.ScriptingName</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Command.html\">Command</a>.ScriptingName</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns and sets the scripting name for the command as a <a href=\"#!/url=./files/String.htm\">String</a>. \n\
<br /><br />\n\
The scripting name is used for executing a scripting command \n\
(\'ApplyOp \"Twist\"\'). This differs from the actual name of the \n\
command which you use to identify a specific command from the \n\
command collection using the Name property. For more information,\n\
see the description and examples for the <a href=\"#!/url=./si_om/SIObject.Name.html\">SIObject.Name</a>\n\
property.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
String rtn = Command.ScriptingName;\n\
// set accessor\n\
Command.ScriptingName = String;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\
\' This example demonstrates the relationship between the \n\
\' Twist command and the operator that results from it, \n\
\' particularly concerning the name information.\n\
\'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\
set oDisc = Application.ActiveSceneRoot.AddGeometry( \"Disc\", \"MeshSurface\" )\n\
Selection.Add oDisc\n\
\' Apply the twist operator after printing the name information\n\
set oCmd = Application.Commands( \"Twist\" )\n\
getInfo oCmd\n\
\' When Softimage runs this command, the following message is logged\n\
\' to the history pane of the Script Editor:\n\
\'	ApplyOp \"Twist\", \"disc\", 3, siPersistentOperation\n\
oCmd.Execute\n\
\' Get the operator that was just created from the operator \n\
\' stack (the ConstructionHistory object) and print the name\n\
\' information for the operator\n\
set oStack = oDisc.ActivePrimitive.ConstructionHistory\n\
for each oOp in oStack\n\
	if oOp.Name = \"Twist Op\" then\n\
		set oTwistOp = oOp\n\
	end if\n\
next\n\
getInfo oTwistOp\n\
\'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\
function getInfo( in_object )\n\
	Application.LogMessage in_object.Name\n\
	Application.LogMessage in_object.FullName\n\
	\' This ensures that you only try to use the ScriptingName\n\
	\' property on a Command object\n\
	if ClassName( in_object ) = \"Command\" then\n\
		Application.LogMessage in_object.ScriptingName\n\
	end if\n\
end function\n\
\'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\
\' Output of above script is:\n\
\'INFO : \"Twist\"\n\
\'INFO : \"Twist\"\n\
\'INFO : \"ApplyOp\"\n\
\'INFO : \"Twist Op\"\n\
\'INFO : \"disc.polymsh.twistop\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/SIObject.Name.html\">SIObject.Name</a> <a href=\"#!/url=./si_om/CommandCollection.Item.html\">CommandCollection.Item</a> <a href=\"#!/url=./si_om/XSIApplication.GetCommandByScriptingName.html\">XSIApplication.GetCommandByScriptingName</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";