var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Command.Code</title>\n\
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
            <h1>Command.Code</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Command.html\">Command</a>.Code</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Sets and returns the implementation of the Command as a <a href=\"#!/url=./files/String.htm\">String</a> value.\n\
Use this property as an alternative to storing the Command implementation\n\
in a file.  This is a convenient way to implement small, simple script-based \n\
custom commands.  The code is stored as part of the Command definition.<br /><br />\n\
Any script language can be represented as a string, but the \"toString()\" method\n\
in JScript is particularly convenient for turning a function into its string \n\
representation.<br /><br />\n\
The string must include a function with the name specified in the \n\
<a href=\"#!/url=./si_om/Command.Handler.html\">Command.Handler</a> property, and it can also contain \n\
helper functions or global variables.<br /><br />\n\
Note: Global variables will potentially be re-initialized each time the command is executed.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
String rtn = Command.Code;\n\
// set accessor\n\
Command.Code = String;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	Example of an embedded command\n\
*/\n\
// These are the two different implementations of\n\
// the command that we will use\n\
function FuncImpl1( arg )\n\
{\n\
	Application.LogMessage( arg ) ;\n\
}\n\
function FuncImpl2( arg )\n\
{\n\
	XSIUIToolkit.MsgBox( arg ) ;\n\
}\n\
Application.RemoveCommand( \"EmbeddedJScript\" ) ;\n\
var cmd = Application.CreateCommand( \"EmbeddedJScript\" ) ;\n\
cmd.ScriptingName = \"EmbeddedJScript\" ;\n\
cmd.Language = \"JScript\" ;\n\
cmd.Handler = \"FuncImpl1\" \n\
cmd.Code = FuncImpl1.toString(); // Embed the code directly in the definition\n\
cmd.Arguments.Add( \"arg1\") ;\n\
cmd.ReturnValue = false   // Optional, but makes it explicit that this is\n\
						  // is a subroutine\n\
Application.AddCommand( cmd ) ;\n\
//Tip: uncomment this line to see the command\n\
//that has just been defined\n\
//EditCommand( \"EmbeddedJScript\" ) ;\n\
//Execute the command\n\
//This will log:\n\
//INFO : \"56\"\n\
EmbeddedJScript( 56 ) ;\n\
//Change the code by updating the command with\n\
//a new function\n\
var cmd = Application.Commands( \"EmbeddedJScript\" ) ;\n\
cmd.Code = FuncImpl2.toString() ;\n\
cmd.Handler = \"FuncImpl2\" ;\n\
cmd.Update() ;\n\
//Execute the command\n\
//This will pop up a message box\n\
EmbeddedJScript( 56 ) ;\n\
//Cleanup \n\
Application.RemoveCommand( \"EmbeddedJScript\" ) ;</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\'	VBScript example of an embedded command\n\
\'\n\
\'The implementation of the command is stored in this string\n\
\'Clearly it would be awkward to write a huge command\n\
\'like that.  For large custom commands we recommend that\n\
\'you store the command in a file\n\
\'and set the Command.FileName property.\n\
dim strCommandImpl \n\
strCommandImp = _\n\
	\"sub FuncImpl( arg )\" &amp; vbCrLf &amp; _\n\
	\"	logmessage arg\" &amp; vbCrLf &amp; _\n\
	\"end sub\"\n\
Application.RemoveCommand \"EmbeddedVBScript\" \n\
set cmd = Application.CreateCommand( \"EmbeddedVBScript\" )\n\
cmd.ScriptingName = \"EmbeddedVBScript\" \n\
cmd.Language = \"VBScript\" \n\
cmd.Handler = \"FuncImpl\" \n\
cmd.Code = strCommandImp  \' Embed the code directly in the definition\n\
cmd.Arguments.Add \"arg1\"\n\
cmd.ReturnValue = false   \' Optional, but makes it explicit that this is\n\
						  \'is a subroutine\n\
Application.AddCommand( cmd )\n\
\'Tip: uncomment this line to see the command\n\
\'that has just been defined\n\
\'EditCommand \"EmbeddedVBScript\"\n\
\'Execute the command\n\
\'This will log:\n\
\'INFO : \"56\"\n\
EmbeddedVBScript 56\n\
\'Change the code by updating the command with\n\
\'a new function\n\
strCommandImp = _\n\
	\"sub FuncImpl( arg )\" &amp; vbCrLf &amp; _\n\
	\"	MsgBox arg\" &amp; vbCrLf &amp; _\n\
	\"end sub\"\n\
set cmd = Application.Commands( \"EmbeddedVBScript\" )\n\
cmd.Code = strCommandImp\n\
cmd.Update\n\
\'Execute the command\n\
\'This will pop up a message box\n\
EmbeddedVBScript 56\n\
\'Cleanup \n\
Application.RemoveCommand \"EmbeddedVBScript\"</pre></td></tr>\n\
</table>\n\
</div><h4>3. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#g_EmbeddedCmd is some simple python code that we will\n\
#use as the implementation of a custom command\n\
g_EmbeddedCmd = \"\"\"\n\
#This routine expects in_obj to be a light\n\
def FuncWithLightAsArgCmdImp( in_obj ):\n\
	Application.LogMessage( in_obj.Shaders.Count ) \n\
	Application.LogMessage( in_obj.Name ) \n\
\"\"\"\n\
#\n\
# Function that creates custom command, provides g_EmbeddedCmd\n\
# as the implementation and then calls it\n\
#\n\
def DemoObjectArgument():\n\
	oDefaultLight = Application.ActiveSceneRoot.Children( \"light\" )		\n\
	Application.RemoveCommand( \"pythontestcmd\" )\n\
	cmd = Application.CreateCommand( \"pythontestcmd\" )\n\
	cmd.ScriptingName = \"pythontestcmd\"\n\
	cmd.Code = g_EmbeddedCmd\n\
	cmd.Language = \"Python\"\n\
	cmd.Handler = \"FuncWithLightAsArgCmdImp\"\n\
	cmd.Arguments.AddObjectArgument( \"in_obj\" )\n\
	Application.AddCommand( cmd )\n\
	Application.pythontestcmd( oDefaultLight )\n\
	#Because of argument handler we can also call it \n\
	#with a string and it will automatically be converted\n\
	#into the object equivalent\n\
	Application.pythontestcmd( \"light\" )\n\
	Application.RemoveCommand( \"pythontestcmd\" )\n\
DemoObjectArgument()\n\
#Expected output\n\
#INFO : 2\n\
#INFO : light\n\
#INFO : 2\n\
#INFO : light</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Command.FileName.html\">Command.FileName</a> <a href=\"#!/url=./si_om/Command.Handler.html\">Command.Handler</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";