var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Argument</title>\n\
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
            <h1>Argument</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Argument</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_Argument\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1Argument.html\">Argument</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\">Argument</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v2.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> The Argument object represents an argument (or \"parameter\") of a Softimage <a href=\"#!/url=./si_om/Command.html\">Command</a>.\n\
For example the <a href=\"#!/url=./si_cmds/DeleteObj.html\">DeleteObj</a> command takes 1 argument (\"InputObj\").\n\
You add arguments to custom commands using the <a href=\"#!/url=./si_om/ArgumentCollection.Add.html\">ArgumentCollection.Add</a>,\n\
<a href=\"#!/url=./si_om/ArgumentCollection.AddWithHandler.html\">ArgumentCollection.AddWithHandler</a> or <a href=\"#!/url=./si_om/ArgumentCollection.AddObjectArgument.html\">ArgumentCollection.AddObjectArgument</a>\n\
method.<br /><br />\n\
Argument objects are used in three circumstances in Softimage:<br /><br />\n\
- For defining command arguments at creation time\n\
When a command is created, arguments are added to the Command object and the\n\
<a href=\"#!/url=./si_om/Argument.Value.html\">Argument.Value</a> is set to define the default value for that argument.  \n\
This default value is persisted and is used as the argument value in the case that no value \n\
is specified at invocation time.<br /><br />\n\
- For specifying argument values when invoking a command. \n\
When a command is invoked, <a href=\"#!/url=./si_om/Argument.Value.html\">Argument.Value</a> is used to specify the value of the\n\
argument that will be passed to the command.  You may also define an <a href=\"#!/url=./si_om/ArgumentHandler.html\">ArgumentHandler</a>\n\
to get a default value based on the selection or the scene content.  You can create an argument\n\
with a handler using the <a href=\"#!/url=./si_om/ArgumentCollection.AddWithHandler.html\">ArgumentCollection.AddWithHandler</a> method.<br /><br />\n\
-In the third case it is possible to change the definition of a custom command\n\
after it has been installed.  In this case <a href=\"#!/url=./si_om/Argument.Value.html\">Argument.Value</a> is \n\
used to specify new default values for the command, and it is possible to \n\
add and remove arguments.  Then <a href=\"#!/url=./si_om/Command.Update.html\">Command.Update</a> is called to\n\
commit the changes.<br /><br />\n\
For a detailed description\n\
of the workflow for creating custom commands, see the <a href=\"#!/url=./si_om/Command.html\">Command</a> object.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Argument.Flags.html\">Flags</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Argument.Handler.html\">Handler</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Argument.Value.html\">Value</a>		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
<td class=\"example\"><pre class=\"jscript\">/* ------------------------------------------------------------------------------\n\
	This JScript example demonstrates how to create a command with\n\
	arguments and then how to pass values to the command when executing it.\n\
------------------------------------------------------------------------------ */\n\
//  Start off with a clean slate\n\
Application.RemoveCommand( \"SillyPutty\" );\n\
//  Get the user path and use it to build the filename + path\n\
sFileName = InstallationPath( siUserPath ) + \"\\\\Data\\\\Scripts\\\\MySillyPutty.js\";\n\
//  Create the script on disk\n\
var fso = new ActiveXObject( \"Scripting.FileSystemObject\" );\n\
var fHWFile = fso.CreateTextFile( sFileName );\n\
fHWFile.WriteLine( \"function OnSillyPutty( gooey, mute )\" );\n\
fHWFile.WriteLine( \"{\" );\n\
fHWFile.WriteLine( \"\\tLogMessage( \\\"SillyPutty is working!\\\" );\" );\n\
fHWFile.WriteLine( \"\\tLogMessage( gooey );\" );\n\
fHWFile.WriteLine( \"\\tLogMessage( mute );\" );\n\
fHWFile.WriteLine( \"}\" );\n\
fHWFile.Close();\n\
//  Create the custom command\n\
var oCmd = CreateCommand( \"SillyPutty\", siNoCategory );\n\
oCmd.Description = \"Stretches and bends until it reaches the breaking point.\";\n\
oCmd.ScriptingName = \"SillyPutty\";\n\
oCmd.Handler = \"OnSillyPutty\";\n\
oCmd.FileName = sFileName;\n\
oCmd.Language = \"JScript\";\n\
//  Add some arguments\n\
var oArgs = oCmd.Arguments;\n\
oArgs.Add( \"Gooeyness\", siArgumentInput, 24.0, siDouble );\n\
oArgs.Add( \"Mute\", siArgumentInput, false, siBool );\n\
//  Register the new command\n\
AddCommand( oCmd );\n\
//  Populate the arguments and run the command\n\
var oRunCmd = Application.Commands( \"SillyPutty\" );\n\
oRunCmd.Arguments(0).Value = 50.0;\n\
oRunCmd.Arguments(1).Value = true;\n\
oRunCmd.Execute();\n\
/* ------------------------------------------------------------------------------\n\
	Output of above command:\n\
	INFO : \"SillyPutty is working!\"\n\
	INFO : \"50\"\n\
	INFO : \"True\"\n\
	SillyPutty(50, true, null);\n\
------------------------------------------------------------------------------ */</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'vbscript Custom Command Demo\n\
\'\n\
\'This script demontrates the Softimage support for creating a custom command and handling its\n\
\'arguments.\n\
\'\n\
\'This example uses an embedded command.\n\
\'When you run this script the following results will be logged in the script history:\n\
\'	INFO : \"Installing example command found in c:/temp/CmdDemo.vbs\"\n\
\'	INFO : \"Default arguments for command are : DefaultString 2.2\"\n\
\'	INFO : \"ExampleCommand is now installed\"\n\
\'	INFO : \"ExampleCommand called - DefaultString 2.2\"\n\
\'	INFO : \"ExampleCommand called - Another string 1.1\"\n\
dim cmd\n\
\'Remove any existing earlier registrations of this command\n\
if ( typename( Application.Commands( \"ExampleCommand\" ) ) = \"Command\" ) then\n\
	Application.RemoveCommand \"ExampleCommand\"\n\
end if\n\
set cmd = Application.CreateCommand(\"ExampleCommand\", siNoCategory)\n\
cmd.Description = \"Example custom command\"\n\
cmd.ScriptingName = \"ExampleCommand\"\n\
cmd.Handler = \"OnExampleCommand\"\n\
cmd.Code = _\n\
	\"function OnExampleCommand( StringArg, DblArg ) \" &amp; vbCrLf &amp; _\n\
	\"     \'Show the arguments we recieved\" &amp; vbCrLf &amp; _\n\
	\"     LogMessage \"\"ExampleCommand called - \"\" &amp; StringArg &amp; \"\" \"\" &amp; DblArg\" &amp; vtCrLf &amp; _\n\
	\"     \'Return this value\" &amp; vbCrLf &amp; _\n\
	\"     OnExampleCommand = 55 \" &amp; vbCrLf &amp; _\n\
	\"end function\"\n\
cmd.Language = \"VBScript\"\n\
\'Command is function, not a sub\n\
cmd.ReturnValue = true									\n\
cmd.Arguments.Add \"StringArg\", siArgumentInput, \"DefaultString\"\n\
cmd.Arguments.Add \"DblArg\", siArgumentInput, 2.2\n\
logmessage \"Default arguments for command are : \" &amp; cmd.Arguments(0).Value &amp; \" \" &amp; cmd.Arguments(1).Value\n\
Application.AddCommand cmd\n\
logmessage \"ExampleCommand is now installed\"\n\
\'Now that the command is installed we can look it up and execute it\n\
set cmdlookup = Application.Commands(\"ExampleCommand\")\n\
\'This will execute it with default values\n\
cmdlookup.execute\n\
\'Use these specific values\n\
cmdlookup.arguments(0).Value = \"Another string\"\n\
cmdlookup.arguments(1).Value = 1.1\n\
cmdlookup.execute</pre></td></tr>\n\
</table>\n\
</div><h4>3. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'VBScript example\n\
set args = Application.Commands(\"Twist\").Arguments\n\
for each a in args\n\
	LogString = a.Name &amp; \":\"\n\
	if a.Flags = siArgumentInput or a.Flags = siArgumentInputOutput then\n\
		LogString = LogString &amp; CStr(a.Value)\n\
	end if\n\
	LogMessage LogString\n\
next</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";