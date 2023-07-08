var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ArgumentCollection.AddWithHandler</title>\n\
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
            <h1>ArgumentCollection.AddWithHandler</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/ArgumentCollection.html\">ArgumentCollection</a>.AddWithHandler</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Appends an argument with an <a href=\"#!/url=./si_om/ArgumentHandler.html\">ArgumentHandler</a>.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Argument ArgumentCollection.AddWithHandler( String in_ArgumentName, Object in_ArgHandler, String in_DefaultValue );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = ArgumentCollection.AddWithHandler( ArgumentName, ArgumentHandler, [DefaultValue] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/Argument.html\">Argument</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ArgumentName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Name of the new argument to append		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ArgumentHandler		</td>\n\
		<td><a href=\"#!/url=./si_om/siArgumentHandler.html\">siArgumentHandler</a>		</td>\n\
		<td>\n\
Name of the argument handler to use.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">DefaultValue		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		Normally Argument Handlers do not require a default value, but some \n\
		adjust their behavior if a string is provided.  For example\n\
		if the string \"*\" is provided in conjunction with the \"Collection\"\n\
		Argument Handler then all the objects in the scene are sent\n\
		to the command rather than the current selection.  This behavior \n\
		is documented with the <a href=\"#!/url=./si_om/siArgumentHandler.html\">siArgumentHandler</a> enum.\n\
			</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// JScript example: Add argument handler that gets the current selection\n\
// Remove existing command\n\
Application.RemoveCommand(\"MyCommand\"); \n\
// Create a command named \"MyCommand\". You must create the file and paste \n\
// the \"MyCommandFunc\" function in the file to get the example to work\n\
var oCmd = Application.CreateCommand(\"MyCommand\");\n\
// Outputs all element that are currently selected\n\
function MyCommandFunc( in_CurrentSelection )\n\
{\n\
		Logmessage( \"MyCommandFunc was called with the following arguments: \" ) ;\n\
		for (i = 0; i &lt; in_CurrentSelection.Count; i++ )\n\
		{\n\
			var currentItem = in_CurrentSelection(i);\n\
			LogMessage( currentItem.Name );\n\
		}\n\
}\n\
// Set the handler code (this is an embedded command)\n\
oCmd.Code = MyCommandFunc.toString() ;\n\
oCmd.Language = \"Jscript\" ;\n\
// Function implementing the handling code (see MyCommandFunc for the actual function code)\n\
oCmd.Handler = \"MyCommandFunc\";		  \n\
// Adds an argument handler that gets the currently selected objects\n\
// when the user does not specify the argument value when invoking the\n\
// command.\n\
var oCmdArguments = oCmd.Arguments\n\
var noValue;\n\
oCmdArguments.AddWithHandler\n\
( \n\
		\"CurrentSelection\",			// name of the new argument\n\
		\"Collection\",				// name of the argument handler to use\n\
		noValue					// parameter to the argument handlers (stored in Argument.Value)\n\
);\n\
// Register the new command\n\
Application.AddCommand(oCmd);\n\
SelectObj( \"light\" ) ;\n\
// Call the updated command.  The \"CurrentSelection\" argument\n\
// will contain the current selection.  \n\
oCmd.Execute();\n\
// You can override the behavior by passing specific object\n\
oCmd.Arguments(0).Value = \"Camera_Root\" ;\n\
oCmd.Execute() ;\n\
// Remove the command\n\
Application.RemoveCommand(\"MyCommand\"); \n\
// Expected results:\n\
//INFO : \"MyCommandFunc was called with the following arguments: \"\n\
//INFO : \"light\"\n\
//INFO : \"MyCommandFunc was called with the following arguments: \"\n\
//INFO : \"Camera_Root\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/ArgumentHandler.html\">ArgumentHandler</a> <a href=\"#!/url=./si_om/ArgumentCollection.Add.html\">ArgumentCollection.Add</a> <a href=\"#!/url=./si_om/Command.Arguments.html\">Command.Arguments</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";