var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Command</title>\n\
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
            <h1>Command</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Command</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_Command\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1Command.html\">Command</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\">Command</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v2.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Represents a Softimage command (either built-in or custom). This object encapsulates \n\
information on a command such as the name, category, arguments, where it is implemented etc. \n\
Custom commands behave just like built-in Softimage commands--they are logged in the \n\
history window and can be exposed to scripting. <br /><br />\n\
The <a href=\"#!/url=./si_om/XSIApplication.Commands.html\">XSIApplication.Commands</a> property provides access to all the \n\
built-in and custom commands installed in the system.  \n\
For example, to get the definition of the Translate command, \n\
you can use \'set oCmd = Commands( \"Translate\" )\'.<br /><br />\n\
Note that the Commands property finds commands by <a href=\"#!/url=./si_om/SIObject.Name.html\">SIObject.Name</a>, not by \n\
<a href=\"#!/url=./si_om/Command.ScriptingName.html\">Command.ScriptingName</a>. You can find the Name of a command by running it and then \n\
checking the Edit menu (where the Name of the last executed command always appears after \'Repeat\' \n\
and \'Undo\').  You can also iterate over the entire collection of commands (see the first example below).<br /><br />\n\
To find a command by its scripting name, use <a href=\"#!/url=./si_om/XSIApplication.GetCommandByScriptingName.html\">XSIApplication.GetCommandByScriptingName</a>.\n\
You can find the ScriptingName of a command by running it and then checking the command log.<br /><br />\n\
Commands are primarily called from scripts, in which case they are invoked by\n\
calling the <a href=\"#!/url=./si_om/Command.ScriptingName.html\">Command.ScriptingName</a> with the scripting syntax\n\
for calling a function, in effect they appear as if they are \"helper functions\" \n\
available to the script writer.  For example to call the custom command \"Foo\" from\n\
jscript the syntax is \"Foo( arg1, arg2 );\"\n\
For scripts embedded inside Netview pages this syntax \n\
does not work, however all commands can be called as methods on the <a href=\"#!/url=./si_om/Application.html\">Application</a> \n\
object (for example oApplication.Foo( arg1, arg2 ) ;).  It is also possible\n\
to invoke a command through the <a href=\"#!/url=./si_om/Command.Execute.html\">Command.Execute</a> method.<br /><br />\n\
You can also place commands in toolbars (see <a href=\"#!/url=./si_cmds/CreateToolbarButton.html\">CreateToolbarButton</a>).  \n\
And there are two ways to place custom commands in Softimage menus.  The first is through the \n\
command category (see <a href=\"#!/url=./si_om/siCommandCategory.html\">siCommandCategory</a>) and the\n\
second, more powerful approach, is through the <a href=\"#!/url=./si_om/Menu.html\">Menu</a> API.<br /><br />\n\
The <a href=\"#!/url=./si_om/Argument.html\">Argument</a>s that a command accepts is part of its definition.\n\
All commands have a fixed number of arguments, and \n\
they are passed to the callback implementing the command in \n\
the order that they are defined in the <a href=\"#!/url=./si_om/ArgumentCollection.html\">ArgumentCollection</a>.\n\
It is possible to define a default value and an <a href=\"#!/url=./si_om/ArgumentHandler.html\">ArgumentHandler</a> \n\
for each argument, so commands are often invoked without specifying each \n\
argument value explicitly.<br /><br />\n\
Softimage supports three possible ways to define a custom command: the embedded command,\n\
the plug-in based command and the v1.5 command.  They are all based\n\
on the same Command object API but they have some subtle differences. <br /><br />\n\
The embedded approach, which is new with v4.0, involves storing the implementation code\n\
of the command directly inside the definition.  (See <a href=\"#!/url=./si_om/Command.Code.html\">Command.Code</a>).  \n\
This approach is convenient for simple commands and is the approach demonstrated widely \n\
in the examples under the Command and Argument objects.  The command definition is \n\
persisted in a .DSDynamicCommandMap file\n\
and can also be transferred to other machines by packaging it inside a xsiaddon file.\n\
Commands of this sort can be created interactively with <a href=\"#!/url=./si_cmds/CreateAndEditCommand.html\">CreateAndEditCommand</a>.\n\
The command definition can be changed interactively by calling <a href=\"#!/url=./si_cmds/EditCommand.html\">EditCommand</a>.\n\
It can be destroyed by calling <a href=\"#!/url=./si_om/XSIApplication.RemoveCommand.html\">XSIApplication.RemoveCommand</a>.<br /><br />\n\
The plug-in based approach, also new with v4.0, involves implementing the definition \n\
and implementation of the custom command inside a self-installed plug-in   \n\
(see <a href=\"#!/url=./si_om/PluginRegistrar.RegisterCommand.html\">PluginRegistrar.RegisterCommand</a>,\n\
the example in <a href=\"#!/url=./si_om/Command.Enabled.html\">Command.Enabled</a> and the SimpleCommand example that is\n\
part of the installation).  This approach is \n\
ideal for complex scripts and supports the C++ API.  Because multiple commands,\n\
<a href=\"#!/url=./si_om/Menu.html\">Menu</a>s, <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> objects and other elements \n\
can all be implemented inside the same <a href=\"#!/url=./si_om/Plugin.html\">Plugin</a> module it is often possible \n\
to write an entire sophisticated tool inside a single script file or dll.\n\
A command defined in this fashion is not persisted inside the .DSDynamicCommandMap file,\n\
instead its definition is regenerated by calling the Init callback each time the application is started.\n\
To edit the command definition, change the code inside the Init callback and \n\
reload the plug-in.  To remove the custom command, remove the plug-in script or dll.<br /><br />\n\
The older workflow, which was introduced in v1.5, is still fully supported.  The steps to\n\
defining a custom command with this approach are the following:<br /><br />\n\
	(1) Create a command object with <a href=\"#!/url=./si_om/XSIApplication.CreateCommand.html\">XSIApplication.CreateCommand</a><br /><br />\n\
	(2) Define the properties of the Command object using its properties. For example, \n\
		<a href=\"#!/url=./si_om/Command.Language.html\">Command.Language</a>, <a href=\"#!/url=./si_om/Command.ReturnValue.html\">Command.ReturnValue</a>, \n\
		<a href=\"#!/url=./si_om/Command.SetFlag.html\">Command.SetFlag</a>, etc.<br /><br />\n\
	(3) Add any arguments you want to specify with <a href=\"#!/url=./si_om/ArgumentCollection.Add.html\">ArgumentCollection.Add</a>\n\
		or <a href=\"#!/url=./si_om/ArgumentCollection.AddObjectArgument.html\">ArgumentCollection.AddObjectArgument</a>\n\
		For example, myCommand.Arguments.Add \"myArgName\", siArgumentInput, true, siBool.<br /><br />\n\
	(4) Create the script file on disk (<a href=\"#!/url=./si_om/Command.FileName.html\">Command.FileName</a>) and \n\
		create a function (<a href=\"#!/url=./si_om/Command.Handler.html\">Command.Handler</a>).  This function takes\n\
		the same number of arguments as were specified in the <a href=\"#!/url=./si_om/ArgumentCollection.html\">ArgumentCollection</a>\n\
		and it can return a value if <a href=\"#!/url=./si_om/Command.ReturnValue.html\">Command.ReturnValue</a> is true.<br /><br />\n\
	(5) Register the command in Softimage by using <a href=\"#!/url=./si_om/XSIApplication.AddCommand.html\">XSIApplication.AddCommand</a>.<br /><br />\n\
(6) The command is now available to be invoked. Softimage automatically stores the command definition\n\
so the command remains available in future Softimage sessions.<br /><br />\n\
(7) To change the definition of the command either call <a href=\"#!/url=./si_om/XSIApplication.RemoveCommand.html\">XSIApplication.RemoveCommand</a>\n\
and follow steps 2-5 again, or else call <a href=\"#!/url=./si_om/Command.Update.html\">Command.Update</a>.<br /><br />\n\
(8) To remove the command from Softimage, use <a href=\"#!/url=./si_om/XSIApplication.RemoveCommand.html\">XSIApplication.RemoveCommand</a>.<br /><br />\n\
Note: For instructions on how to package a custom command as an add-on, see  \n\
<a href=\"#!/url=./files/cus_addons_AddonPackages.htm\">Add-on Packages</a>.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Command.Execute.html\">Execute</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Command.GetFlag.html\">GetFlag</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Command.SetFlag.html\">SetFlag</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Command.Update.html\">Update</a>		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Command.Arguments.html\">Arguments</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Command.Builtin.html\">Builtin</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Command.CannotBeUsedInBatch.html\">CannotBeUsedInBatch</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Command.Category.html\">Category</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Command.Code.html\">Code</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Command.Description.html\">Description</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Command.Enabled.html\">Enabled</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Command.FileName.html\">FileName</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Command.Handler.html\">Handler</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Command.IsNotLogged.html\">IsNotLogged</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Command.Language.html\">Language</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Command.ReturnValue.html\">ReturnValue</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Command.ScriptingName.html\">ScriptingName</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Command.SupportsKeyAssignment.html\">SupportsKeyAssignment</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Command.Tooltip.html\">Tooltip</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Command.UID.html\">UID</a>		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
<td class=\"example\"><pre class=\"jscript\">// JScript Custom Command overview - Embedded Approach\n\
InstallCommands();\n\
DemoCommands() ;\n\
// Comment out this line if you want to experiment with the \n\
// commands created in this example\n\
CleanupCommands();\n\
function InstallCommands()\n\
{\n\
	// Remove any existing copies of the demo commands\n\
	CleanupCommands() ;\n\
	// each command needs to be defined.\n\
	// (Softimage will not forget this information\n\
	// until they are removed with a call to CleanupCommands() ;\n\
	//\n\
	// Define Command #1 : CommandHelloWorld\n\
	//\n\
	var cmd = Application.CreateCommand( \"CommandHelloWorld\" )\n\
	cmd.ScriptingName = \"CommandHelloWorld\" ;\n\
	cmd.Language = \"JScript\" ;\n\
	cmd.ReturnValue = false ;\n\
	cmd.Handler = \"HelloWorld\" ; \n\
	cmd.Code = HelloWorld.toString() ; // Embed the code directly in the definition\n\
	Application.AddCommand( cmd ) ;\n\
	//\n\
	// Define Command #2 : CommandSimple\n\
	//\n\
	cmd = Application.CreateCommand( \"CommandSimple\" )\n\
	cmd.ScriptingName = \"CommandSimple\" ;\n\
	cmd.Language = \"JScript\" ;\n\
	cmd.ReturnValue = true ;\n\
	cmd.Handler = \"Simple\" ; \n\
	cmd.Code = Simple.toString() ; // Embed the code directly in the definition\n\
	// You must mention the arguments you want.\n\
	// The name is not important but must be unique\n\
	cmd.Arguments.Add(\"a\")\n\
	cmd.Arguments.Add(\"b\")	\n\
	Application.AddCommand( cmd )\n\
	//\n\
	// Define Command #3 : CommandSimpleObjectArg\n\
	//\n\
	cmd = Application.CreateCommand( \"CommandSimpleObjectArg\" )\n\
	cmd.ScriptingName = \"CommandSimpleObjectArg\" ;\n\
	cmd.Language = \"JScript\" ;\n\
	cmd.ReturnValue = true ;\n\
	cmd.Handler = \"SimpleObjectArg\" ; \n\
	cmd.Code = SimpleObjectArg.toString() ; // Embed the code directly in the definition\n\
	cmd.Arguments.AddObjectArgument(\"obj\");\n\
	Application.AddCommand( cmd )\n\
}\n\
function DemoCommands()\n\
{\n\
	// It is simple to execute a custom command, especially one\n\
	// like this with no return value or arguments.\n\
	// Will log \"Hello World\"\n\
	CommandHelloWorld() ;\n\
	// Will log \"15\"\n\
	logmessage( CommandSimple( 5, 10 ) );\n\
	// Will log \"concat\"\n\
	logmessage( CommandSimple( \"con\",\"cat\" ) ) ;\n\
	newscene( null, false ) ;\n\
	var oSphere = ActiveSceneRoot.AddGeometry(\"Sphere\", \"NurbsSurface\") ;\n\
	//Will log:\n\
	//INFO : \"Name of the input object sphere\"\n\
	//INFO : \"grid\"		\n\
	logmessage( CommandSimpleObjectArg( oSphere ) ) ;\n\
	//Softimage can also turn an string to an object:\n\
	//INFO : \"Name of the input object grid\"\n\
	//INFO : \"grid1\"\n\
	logmessage( CommandSimpleObjectArg( \"grid\" ) ) ;\n\
}\n\
function CleanupCommands()\n\
{\n\
	Application.RemoveCommand( \"CommandHelloWorld\" ) ;\n\
	Application.RemoveCommand( \"CommandSimple\" ) ;\n\
	Application.RemoveCommand( \"CommandSimpleObjectArg\" ) ;	\n\
}\n\
// Implementation of CommandHelloWorld\n\
// The name of this function matches the string we provided as cmd.Handler\n\
function HelloWorld()\n\
{\n\
	LogMessage( \"Hello World\" ) ;\n\
}\n\
function Simple( in_a, in_b )\n\
{\n\
	return in_a + in_b ;\n\
}\n\
function SimpleObjectArg( in_obj )\n\
{\n\
	logmessage( \"Name of the input object \" + in_obj.Name ) ;	\n\
	// return a different object\n\
	return ActiveSceneRoot.AddGeometry(\"Grid\", \"MeshSurface\") ;		\n\
}</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// JScript Custom Command overview - Self-Installed Approach\n\
//\n\
// This example relies on a script on disk so you need to\n\
// follow an important step first before running this example:\n\
//\n\
// SAVE the following commented out code into commandexample.js \n\
// inside your %XSI_USERHOME%\\Application\\Plugins directory.\n\
//\n\
// Once you have saved the file you can run the script\n\
/*\n\
// BEGINNING OF CODE TO SAVE IN FILE\n\
function XSILoadPlugin( in_reg )\n\
{\n\
	in_reg.Author = \"Softimage SDK Team\" ;\n\
	in_reg.Name = \"SDK Example - Custom Commands\" ;\n\
	in_reg.Major = 1 ;\n\
	in_reg.Minor = 1 ;\n\
	in_reg.RegisterCommand( \"CommandHelloWorld\", \"CommandHelloWorld\" );\n\
	in_reg.RegisterCommand( \"CommandSimple\", \"CommandSimple\" );\n\
	in_reg.RegisterCommand( \"CommandSimpleObjectArg\", \"CommandSimpleObjectArg\" );\n\
	return true ;\n\
}\n\
//\n\
// Define Command #1 : CommandHelloWorld\n\
//\n\
function CommandHelloWorld_Init(in_oCtxt)\n\
{\n\
	var cmd = in_oCtxt.Source ;\n\
	cmd.ReturnValue = false ;\n\
	// We don\'t need to set cmd.Language, cmd.Handler, cmd.Code\n\
	// or cmd.FileName because this is automatically determined.\n\
	// Application.AddCommand is not called\n\
	// This command takes no arguments\n\
}\n\
//\n\
// Define Command #2 : CommandSimple\n\
//\n\
function CommandSimple_Init(in_oCtxt)\n\
{\n\
	var cmd = in_oCtxt.Source ;\n\
	cmd.ReturnValue = true ;\n\
	// You must mention the arguments you want.\n\
	// The name is not important but must be unique\n\
	cmd.Arguments.Add(\"a\")\n\
	cmd.Arguments.Add(\"b\")	\n\
}\n\
//\n\
// Define Command #3 : CommandSimpleObjectArg\n\
//\n\
function CommandSimpleObjectArg_Init(in_oCtxt)\n\
{\n\
	var cmd = in_oCtxt.Source ;\n\
	cmd.ReturnValue = true ;\n\
	// You must mention the arguments you want.\n\
	// The name is not important but must be unique\n\
	cmd.Arguments.AddObjectArgument(\"obj\");\n\
}\n\
// Implementation of CommandHelloWorld\n\
function CommandHelloWorld_Execute()\n\
{\n\
	LogMessage( \"Hello World\" ) ;\n\
}\n\
function CommandSimple_Execute( in_a, in_b )\n\
{\n\
	return in_a + in_b ;\n\
}\n\
function CommandSimpleObjectArg_Execute( in_obj )\n\
{\n\
	logmessage( \"Name of the input object \" + in_obj.Name ) ;	\n\
	// return a different object\n\
	return ActiveSceneRoot.AddGeometry(\"Grid\", \"MeshSurface\") ;		\n\
}\n\
// END OF CODE TO SAVE IN FILE\n\
*/\n\
// This loads the newly created file, which will define the commands inside Softimage.\n\
// It is unnecessary if you restart Softimage or use the Plugin Manager view\n\
Application.LoadPlugin( Application.InstallationPath( siUserPath ) + \n\
		\"/Application/Plugins/commandexample.js\" ) ;\n\
// Demonstrate the custom commands that are defined in the plug-in\n\
DemoCommands() ;\n\
function DemoCommands()\n\
{\n\
	// It is simple to execute a custom command, especially one\n\
	// like this with no return value or arguments.\n\
	// Will log \"Hello World\"\n\
	CommandHelloWorld() ;\n\
	// Will log \"15\"\n\
	logmessage( CommandSimple( 5, 10 ) );\n\
	// Will log \"concat\"\n\
	logmessage( CommandSimple( \"con\",\"cat\" ) ) ;\n\
	newscene( null, false ) ;\n\
	var oSphere = ActiveSceneRoot.AddGeometry(\"Sphere\", \"NurbsSurface\") ;\n\
	//Will log:\n\
	//INFO : \"Name of the input object sphere\"\n\
	//INFO : \"grid\"		\n\
	logmessage( CommandSimpleObjectArg( oSphere ) ) ;\n\
	//Softimage can also turn an string to an object:\n\
	//INFO : \"Name of the input object grid\"\n\
	//INFO : \"grid1\"\n\
	logmessage( CommandSimpleObjectArg( \"grid\" ) ) ;\n\
}</pre></td></tr>\n\
</table>\n\
</div><h4>3. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// JScript Custom Command overview - v1.5 Approach\n\
//\n\
// This example relies on a script on disk so you need to\n\
// follow an important step first before running this example:\n\
//\n\
// SAVE the following commented out code as\n\
// %XSI_USERHOME%\\Data\\Scripts\\commandexample.js\n\
//\n\
// Once you have saved the file you can run the script\n\
/*\n\
// BEGINNING OF CODE TO SAVE IN FILE\n\
// Implementation of CommandHelloWorld\n\
// The name of this function matches the string we provided as cmd.Handler\n\
function HelloWorld()\n\
{\n\
	LogMessage( \"Hello World\" ) ;\n\
}\n\
function Simple( in_a, in_b )\n\
{\n\
	return in_a + in_b ;\n\
}\n\
function SimpleObjectArg( in_obj )\n\
{\n\
	logmessage( \"Name of the input object \" + in_obj.Name ) ;	\n\
	// return a different object\n\
	return ActiveSceneRoot.AddGeometry(\"Grid\", \"MeshSurface\") ;		\n\
}\n\
// END OF CODE TO SAVE IN FILE\n\
*/\n\
InstallCommands();\n\
DemoCommands() ;\n\
// Comment out this line if you want to experiment with the \n\
// commands created in this example\n\
CleanupCommands();\n\
function InstallCommands()\n\
{\n\
	// Remove any existing copies of the demo commands\n\
	CleanupCommands() ;\n\
	// each command needs to be defined.\n\
	// (Softimage will not forget this information\n\
	// until they are removed with a call to CleanupCommands() ;\n\
	var fileNameWithPath = Application.InstallationPath( siUserPath ) + \"/Data/Scripts/commandexample.js\"\n\
	//\n\
	// Define Command #1 : CommandHelloWorld\n\
	//\n\
	var cmd = Application.CreateCommand( \"CommandHelloWorld\" )\n\
	cmd.ScriptingName = \"CommandHelloWorld\" ;\n\
	cmd.Language = \"JScript\" ;\n\
	cmd.ReturnValue = false ;\n\
	cmd.Handler = \"HelloWorld\" ; \n\
	cmd.FileName = fileNameWithPath;\n\
	Application.AddCommand( cmd ) ;\n\
	//\n\
	// Define Command #2 : CommandSimple\n\
	//\n\
	cmd = Application.CreateCommand( \"CommandSimple\" )\n\
	cmd.ScriptingName = \"CommandSimple\" ;\n\
	cmd.Language = \"JScript\" ;\n\
	cmd.ReturnValue = true ;\n\
	cmd.Handler = \"Simple\" ; \n\
	cmd.FileName = fileNameWithPath;\n\
	// You must mention the arguments you want.\n\
	// The name is not important but must be unique\n\
	cmd.Arguments.Add(\"a\")\n\
	cmd.Arguments.Add(\"b\")	\n\
	Application.AddCommand( cmd )\n\
	//\n\
	// Define Command #3 : CommandSimpleObjectArg\n\
	//\n\
	cmd = Application.CreateCommand( \"CommandSimpleObjectArg\" )\n\
	cmd.ScriptingName = \"CommandSimpleObjectArg\" ;\n\
	cmd.Language = \"JScript\" ;\n\
	cmd.ReturnValue = true ;\n\
	cmd.Handler = \"SimpleObjectArg\" ; \n\
	cmd.FileName = fileNameWithPath;\n\
	cmd.Arguments.AddObjectArgument(\"obj\");\n\
	Application.AddCommand( cmd )\n\
}\n\
function DemoCommands()\n\
{\n\
	// It is simple to execute a custom command, especially one\n\
	// like this with no return value or arguments.\n\
	// Will log \"Hello World\"\n\
	CommandHelloWorld() ;\n\
	// Will log \"15\"\n\
	logmessage( CommandSimple( 5, 10 ) );\n\
	// Will log \"concat\"\n\
	logmessage( CommandSimple( \"con\",\"cat\" ) ) ;\n\
	newscene( null, false ) ;\n\
	var oSphere = ActiveSceneRoot.AddGeometry(\"Sphere\", \"NurbsSurface\") ;\n\
	//Will log:\n\
	//INFO : \"Name of the input object sphere\"\n\
	//INFO : \"grid\"		\n\
	logmessage( CommandSimpleObjectArg( oSphere ) ) ;\n\
	//Softimage can also turn an string to an object:\n\
	//INFO : \"Name of the input object grid\"\n\
	//INFO : \"grid1\"\n\
	logmessage( CommandSimpleObjectArg( \"grid\" ) ) ;\n\
}\n\
function CleanupCommands()\n\
{\n\
	Application.RemoveCommand( \"CommandHelloWorld\" ) ;\n\
	Application.RemoveCommand( \"CommandSimple\" ) ;\n\
	Application.RemoveCommand( \"CommandSimpleObjectArg\" ) ;	\n\
}</pre></td></tr>\n\
</table>\n\
</div><h4>4. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' --------------------------------------------------------------\n\
\'\n\
\'	This VBScript example demonstrates how to find a built-in \n\
\' 	(or native) Softimage command using its scripting name.\n\
\'\n\
\' --------------------------------------------------------------\n\
\' Loop through the Softimage command collection looking for a name match\n\
for each c in Application.Commands\n\
	if c.ScriptingName = \"FreezeObj\" then\n\
		\' At this point, you could either... \n\
		\' ...get its name to use elsewhere ...\n\
		sScpName = c.Name\n\
		\' ...use it to create a Command object...\n\
		set oCmd = c\n\
		\' ...or perform whatever action you want on it, like demonstrating \n\
		\'    the difference between the Name and ScriptingName properties\n\
		Application.LogMessage \"FreezeObj info.......\" &amp; vbLf _\n\
			&amp; vbTab &amp; \"Name          = \" &amp; c.Name &amp; vbLf _\n\
			&amp; vbTab &amp; \"ScriptingName = \" &amp; c.ScriptingName\n\
	end if\n\
next\n\
\' With the new command pointer, we can access command information\n\
Application.LogMessage oCmd.Name &amp; \": Belongs to the \" &amp; oCmd.Category &amp; \" category/menu.\"\n\
\' Now that we know the command\'s full name, we can access the command using \n\
\' the name as the key in the command collection\n\
set oCommand = Application.Commands( sScpName )\n\
Application.LogMessage oCommand.Name &amp; \": \" &amp; oCommand.Description\n\
\' --------------------------------------------------------------------------\n\
\' Output of above script:\n\
\'INFO : \"FreezeObj info.......\n\
\'	Name          = Freeze Operator Stack\n\
\'	ScriptingName = FreezeObj\"\n\
\'INFO : \"Freeze Operator Stack: Belongs to the Edit category/menu.\"\n\
\'INFO : \"Freeze Operator Stack: Freeze all the operators of the selected object(s)\"</pre></td></tr>\n\
</table>\n\
</div><h4>5. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/* --------------------------------------------------------------\n\
	Hello World example, based on v1.5 workflow for defining a command\n\
	This JScript example creates and registers a custom\n\
	command and then demonstrates how you can find it in\n\
	the Softimage command collection using the Builtin property.\n\
----------------------------------------------------------- */\n\
// Start off with a clean slate\n\
Application.RemoveCommand(\"Howdy\");\n\
// Get the factory (installation) path and use it to build the filename &amp; path\n\
var sFileName = InstallationPath( siUserPath ) + \"\\\\Data\\\\Scripts\\\\HelloWorld.js\";\n\
// Create a standard hello world script file\n\
var fso = new ActiveXObject( \"Scripting.FileSystemObject\" );\n\
var fHWFile = fso.CreateTextFile( sFileName  );\n\
fHWFile.WriteLine( \"function SayHi()\" );\n\
fHWFile.WriteLine( \"{\" );\n\
fHWFile.WriteLine( \"\\tApplication.LogMessage( \\\"Hello, World!\\\" );\" );\n\
fHWFile.WriteLine( \"}\" );\n\
fHWFile.Close();\n\
// Add it to the command map in Softimage\n\
var oCmd = Application.CreateCommand( \"Howdy\", siExportCategory );\n\
oCmd.Description = \"Display the traditional greeting\";\n\
oCmd.ScriptingName = \"Howdy\";\n\
oCmd.Handler = \"SayHi\";\n\
oCmd.FileName = sFileName;\n\
oCmd.Language = \"JScript\";\n\
Application.AddCommand( oCmd );\n\
// Run it just to make sure it\'s working\n\
oCmd.Execute();\n\
// Now loop through the command collection and print the name and\n\
// scripting name of each custom command\n\
// (Tip: It is faster to use CommandCollection.Filter(\"Custom\") to\n\
// find all custom commands)\n\
var eCmdList = new Enumerator( Application.Commands );\n\
eCmdList.moveFirst();\n\
var c;\n\
for (; !eCmdList.atEnd(); eCmdList.moveNext() )\n\
{\n\
	c = eCmdList.item();\n\
	if(!(c.Builtin))\n\
	{\n\
		LogMessage( c.Name + \"(\" + c.ScriptingName + \") is a custom command.\" );\n\
	}\n\
}\n\
// Restore everything back to normal\n\
Application.RemoveCommand(\"Howdy\");\n\
fso.DeleteFile( sFileName, true );\n\
// --------------------------------------------------------------\n\
// Output of the above script is:\n\
//\n\
//INFO : \"Hello, World!\"\n\
//Howdy();\n\
//Followed by a list of all custom commands installed, including:\n\
//INFO : \"Howdy is a custom command.\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/XSIApplication.CreateCommand.html\">XSIApplication.CreateCommand</a> <a href=\"#!/url=./si_om/Application.ExecuteScript.html\">Application.ExecuteScript</a> <a href=\"#!/url=./si_cmds/CreateScriptCommand.html\">CreateScriptCommand</a> <a href=\"#!/url=./si_om/Argument.html\">Argument</a> <a href=\"#!/url=./si_om/ArgumentHandler.html\">ArgumentHandler</a> <a href=\"#!/url=./si_cmds/EditCommand.html\">EditCommand</a> <a href=\"#!/url=./si_cmds/CreateAndEditCommand.html\">CreateAndEditCommand</a> <a href=\"#!/url=./si_om/Menu.AddCommandItem.html\">Menu.AddCommandItem</a> <a href=\"#!/url=./si_om/XSIApplication.GetCommandByScriptingName.html\">XSIApplication.GetCommandByScriptingName</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";