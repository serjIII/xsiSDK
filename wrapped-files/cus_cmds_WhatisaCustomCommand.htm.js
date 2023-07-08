var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script>\n\
      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\n\
      <meta name=\"product\" content=\"SI\" />\n\
      <meta name=\"release\" content=\"2015\" />\n\
      <meta name=\"book\" content=\"Developer\" />\n\
      <meta name=\"created\" content=\"2014-03-13\" />\n\
      <meta name=\"topicid\" content=\"GUID-5954B7C9-7257-4439-84A5-450BBD004A74\" />\n\
      <meta name=\"indexterm\" content=\"custom commands: overview\" />\n\
      <meta name=\"indexterm\" content=\"JScript Example: Skeleton code for a custom command\" />\n\
      <meta name=\"indexterm\" content=\"C++ Example: Skeleton code for a C++ custom command\" />\n\
      <meta name=\"indexterm\" content=\"Callbacks (commands)\" />\n\
      <meta name=\"indexterm\" content=\"Init callback: custom commands\" />\n\
      <meta name=\"indexterm\" content=\"custom commands: Init callback\" />\n\
      <meta name=\"indexterm\" content=\"Execute callback: custom commands\" />\n\
      <meta name=\"indexterm\" content=\"custom commands: Execute callback\" />\n\
      <meta name=\"indexterm\" content=\"Execute\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>What is a Custom Command?</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"xsi_application.h\", \"si_cpp/xsi__application_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_context.h\", \"si_cpp/xsi__context_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_pluginregistrar.h\", \"si_cpp/xsi__pluginregistrar_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_status.h\", \"si_cpp/xsi__status_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_argument.h\", \"si_cpp/xsi__argument_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_command.h\", \"si_cpp/xsi__command_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_menu.h\", \"si_cpp/xsi__menu_8h.html\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-5954B7C9-7257-4439-84A5-450BBD004A74\"></a></span><div class=\"head\">\n\
            <h1>What is a Custom Command?</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-138A1F5A-CEDB-4EC6-AB1A-2D828D25C88E\"></a></span> A custom command is a reusable block of scripting or C++ code that performs a specific\n\
            task. A custom command can be run by other commands and scripts, by menu items, by\n\
            keyboard shortcuts, and by toolbar buttons. \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-375B96B7-45C8-4A91-A44A-29E49C720491\"></a></span>In a self-installing plug-in, a custom command is implemented by two callbacks: <a href=\"#!/url=./si_cmds/cb_Command_Init.html\">Init</a> and <a href=\"#!/url=./si_cmds/cb_Command_Execute.html\">Execute</a>. For custom commands implemented with the C++ API, you can also handle undoing and\n\
            redoing changes to user data with the <a href=\"#!/url=./si_cmds/cb_Command_Undo.html\">Undo</a>, <a href=\"#!/url=./si_cmds/cb_Command_Redo.html\">Redo</a>, and <a href=\"#!/url=./si_cmds/cb_Command_TermUndoRedo.html\">TermUndoRedo</a> callbacks. \n\
         </p>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-0004\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-A2CED56F-30EE-4018-81E3-BB4289850166\"></a></span> JScript Example: Skeleton code for a custom command\n\
            </h2>  \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
//------------------------------------------------------------------\n\
// Install callback for the plug-in\n\
//------------------------------------------------------------------\n\
function XSILoadPlugin( in_reg )\n\
{\n\
	in_reg.Author = \"Command Wizard User\";\n\
	in_reg.Name = \"MyCommands\";\n\
	in_reg.Major = 1;\n\
	in_reg.Minor = 0;\n\
	// Register a command named \"MyCommand\"\n\
	in_reg.RegisterCommand(\"MyCommand\",\"MyCommand\");\n\
	return true;\n\
}\n\
\n\
//------------------------------------------------------------------\n\
// Initialize the command named \"MyCommand\"\n\
//------------------------------------------------------------------\n\
function MyCommand_Init( ctxt )\n\
{\n\
	// Get the Command object from the Context object\n\
	var oCmd;\n\
	oCmd = ctxt.Source;\n\
\n\
	// Set some basic command properties\n\
	oCmd.Description = \"A skeleton command\";\n\
	oCmd.Tooltip = \"My command\";\n\
\n\
	// The command returns a value\n\
	oCmd.ReturnValue = true;\n\
\n\
	// Get the ArgumentCollection\n\
	var oArgs;\n\
	oArgs = oCmd.Arguments;\n\
\n\
	// Add an argument\n\
	oArgs.Add(\"Arg0\",siArgumentInput);\n\
	return true;\n\
}\n\
\n\
//------------------------------------------------------------------\n\
// Implement the command named \"MyCommand\"\n\
//------------------------------------------------------------------\n\
function MyCommand_Execute( Arg0 )\n\
{\n\
// TODO: Put your command implementation here.\n\
	return true;\n\
}</pre></div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-0005\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-7C7034B4-1DA9-4437-9EBE-F9D93D13BC65\"></a></span> C++ Example: Skeleton code for a C++ custom command\n\
            </h2>  \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_application.h\" class=\"a_multireflink\">xsi_application.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_context.h\" class=\"a_multireflink\">xsi_context.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_pluginregistrar.h\" class=\"a_multireflink\">xsi_pluginregistrar.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_status.h\" class=\"a_multireflink\">xsi_status.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_argument.h\" class=\"a_multireflink\">xsi_argument.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_command.h\" class=\"a_multireflink\">xsi_command.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_menu.h\" class=\"a_multireflink\">xsi_menu.h</a>&gt;\n\
using namespace XSI; \n\
\n\
//------------------------------------------------------------------\n\
// Install callback for the plug-in\n\
//------------------------------------------------------------------\n\
XSIPLUGINCALLBACK CStatus XSILoadPlugin( PluginRegistrar&amp; in_reg )\n\
{\n\
	in_reg.PutAuthor(L\"Command Wizard User\");\n\
	in_reg.PutName(L\"MyNewCPPCommandPlugin\");\n\
	in_reg.PutVersion(1,0);\n\
	// Register a command named \"MyCPPCommand\"\n\
	in_reg.RegisterCommand(L\"MyCPPCommand\",L\"MyCPPCommand\");\n\
	return CStatus::OK;\n\
}\n\
\n\
//------------------------------------------------------------------\n\
// Initialize the command named \"MyCommand\"\n\
//------------------------------------------------------------------\n\
XSIPLUGINCALLBACK CStatus MyCPPCommand_Init( CRef&amp; in_ctxt )\n\
{\n\
	// Construct a Context from the CRef\n\
	Context ctxt( in_ctxt );\n\
	// Get the Command object from the Context\n\
	Command oCmd;\n\
	oCmd = ctxt.GetSource();\n\
\n\
	// Set some basic command properties\n\
	oCmd.PutDescription(L\"My CPP Command\");\n\
	oCmd.PutTooltip(L\"MyCPPCommand\");\n\
\n\
	// The command returns a value\n\
	oCmd.EnableReturnValue(true);\n\
\n\
	// Add an argument\n\
	ArgumentArray oArgs;\n\
	oArgs = oCmd.GetArguments();\n\
	oArgs.Add(L\"Arg0\");\n\
\n\
	return CStatus::OK;\n\
}\n\
\n\
//------------------------------------------------------------------\n\
// Implement the command named \"MyCPPCommand\"\n\
//------------------------------------------------------------------\n\
XSIPLUGINCALLBACK CStatus MyCPPCommand_Execute( CRef&amp; in_ctxt )\n\
{\n\
	// Construct a Context from the CRef\n\
	Context ctxt( in_ctxt );\n\
\n\
	// Get the arguments from the Context\n\
	CValueArray args = ctxt.GetAttribute(L\"Arguments\");\n\
	CValue Arg0 = args[0];\n\
\n\
	// ...\n\
\n\
	// Put a return value in the Context\n\
	ctxt.PutAttribute( L\"ReturnValue\", Arg0 );\n\
\n\
	return CStatus::OK;\n\
}</pre></div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-0006\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-57786611-B673-4C87-99FB-A876A3D0D904\"></a></span> Callbacks\n\
            </h2>  \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-0007\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-551571EE-473E-4ED4-951C-D050ECAA7D04\"></a></span> Init\n\
               </h3>   \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-83CB153B-C491-4DB6-9414-369F64398E52\"></a></span>Softimage calls the <a href=\"#!/url=./si_cmds/cb_Command_Init.html\">Init</a> callback when the plug-in is loaded. The <span class=\"code\" translate=\"no\">Init</span> callback is where you define the command: \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"UL_0F73F7CA533C4D0984A231FD6CD1D54D\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-703475DF-D93D-49C6-8242-BFBC9769F821\"></a></span>What capabilities does the command support? Can it be assigned a keyboard shortcut?\n\
                        Logged to the command history? Used in batch mode? \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-CA61DE6D-6AA5-492B-8286-9FD97514BFE3\"></a></span>Does the command return a value? \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-4B06BC9D-79F3-4AEE-B44F-7A939198AFFE\"></a></span>What arguments does the command take? \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
function MyNewCommand_Init( ctxt )\n\
{\n\
	var oCmd;\n\
	oCmd = ctxt.Source;\n\
	oCmd.Description = \"A simple command\";\n\
	oCmd.Tooltip = \"Do nothing\";\n\
\n\
	// Set the command capabilities\n\
	oCmd.SetFlag(siSupportsKeyAssignment,false);	// true by default\n\
	oCmd.SetFlag(siCannotBeUsedInBatch,true);	// false by default\n\
	oCmd.SetFlag(siNoLogging,true);			// false by default\n\
\n\
	// Allow the command to return values\n\
	oCmd.ReturnValue = true;\n\
\n\
	// Add a single argument\n\
	var oArgs;\n\
	oArgs = oCmd.Arguments;\n\
	oArgs.Add(\"Arg0\",siArgumentInput);\n\
\n\
	return true;\n\
}</pre></div> \n\
            </div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-0008\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-960495D3-CF88-49AE-A6E4-6B1B67ECBCBA\"></a></span> Execute\n\
               </h3>    \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-0F584585-4F5B-4F79-AC5C-AADBB33E514D\"></a></span>The <a href=\"#!/url=./si_cmds/cb_Command_Execute.html\">Execute</a> callback implements the command. Softimage calls <span class=\"code\" translate=\"no\">Execute</span> every time the command is invoked. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-A6B2538F-F1B3-40F1-966D-975E35954566\"></a></span>If you use a scripting language to implement the command, the Execute callback function\n\
                  has the same arguments and return value as the command: \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
function MyNewCommand_Execute( Arg0 )\n\
{\n\
	Application.LogMessage(\"MyNewCommand_Execute\");\n\
\n\
	// TODO: Implement the command\n\
\n\
	// Return something\n\
	return Arg0;\n\
}</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-14D03CF0-D278-4FE3-90EC-AE7E142F6570\"></a></span>In C++, the command arguments and return value are stored as attributes in the callback\n\
                  context: \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
XSIPLUGINCALLBACK CStatus MyCPPCommand_Execute( CRef&amp; in_ctxt )\n\
{\n\
	Context ctxt( in_ctxt );\n\
	CValueArray args = <em class=\"strong\">ctxt.GetAttribute(L\"Arguments\");</em>\n\
	CValue Arg0 = args[0];\n\
\n\
	// TODO: Implement the command\n\
\n\
	// Return a value\n\
	ctxt.<em class=\"strong\">PutAttribute( L\"ReturnValue\", Arg0 );</em>\n\
\n\
	return CStatus::OK;\n\
}</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-26642ACE-6699-4E15-94FA-935C9B6D5140\"></a></span>See the <a href=\"#!/url=./examples/Addons/SimpleCommand/netview_SimpleCommand.htm\">Custom Command</a> example that demonstrates how to implement the self-installing custom commands. This\n\
                  example is located in the examples folder of the Softimage SDK installation directory.\n\
                  \n\
               </p> \n\
            </div> \n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";