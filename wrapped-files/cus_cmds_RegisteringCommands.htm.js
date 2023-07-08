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
      <meta name=\"topicid\" content=\"GUID-1DE56DDE-6548-4FE8-A01E-B9B8B867814E\" />\n\
      <meta name=\"indexterm\" content=\"custom commands: registering\" />\n\
      <meta name=\"indexterm\" content=\"RegisterCommand (PluginRegistrar): using\" />\n\
      <meta name=\"indexterm\" content=\"PluginRegistrar object (registering commands)\" />\n\
      <meta name=\"indexterm\" content=\"C++ Example: Registering a custom command\" />\n\
      <meta name=\"indexterm\" content=\"JScript Example: Registering a custom command\" />\n\
      <meta name=\"indexterm\" content=\"Command Name\" />\n\
      <meta name=\"indexterm\" content=\"custom commands: naming\" />\n\
      <meta name=\"indexterm\" content=\"names: commands\" />\n\
      <meta name=\"indexterm\" content=\"Scripting Name\" />\n\
      <meta name=\"indexterm\" content=\"custom commands: scripting name\" />\n\
      <meta name=\"indexterm\" content=\"scripting names\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Registering Commands</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-1DE56DDE-6548-4FE8-A01E-B9B8B867814E\"></a></span><div class=\"head\">\n\
            <h1>Registering Commands</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-2EEEE8FC-D95A-481D-AD5D-1CE4C01B73C2\"></a></span>To make a command available in Softimage, you register it in <a href=\"#!/url=./si_cmds/cb_XSILoadPlugin.html\">XSILoadPlugin</a>, which is called when Softimage loads a self-installing plug-in. XSILoadPlugin gets\n\
               a <a href=\"#!/url=./si_om/PluginRegistrar.html\">PluginRegistrar</a> or <a href=\"#!/url=./si_om/PluginRegistrar.html\">PluginRegistrar</a> object from Softimage, and you use <a href=\"#!/url=./si_om/PluginRegistrar.RegisterCommand.html\">RegisterCommand</a> or RegisterCommandto register custom commands.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-0024\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-8F31A4F9-8484-472F-8B86-8AB04918F29D\"></a></span> C++ Example: Registering a custom command\n\
               </h2>  \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
XSIPLUGINCALLBACK CStatus XSILoadPlugin( PluginRegistrar&amp; in_reg )\n\
{\n\
	in_reg.PutAuthor(L\"Command Wizard User\");\n\
	in_reg.PutName(L\"MyCommands\");\n\
	in_reg.PutVersion(1,0);\n\
\n\
	// This plug-in contains two custom commands\n\
	in_reg.RegisterCommand(L\"MyCommand\",L\"MyCommand\");\n\
	in_reg.RegisterCommand(L\"My Other Command\",L\"MyCommand2\");\n\
\n\
	return CStatus::OK;\n\
}</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-0025\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-3982B24B-EE20-4335-A4A3-DD393CC7FF6B\"></a></span> JScript Example: Registering a custom command\n\
               </h2>  \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
function XSILoadPlugin( in_reg )\n\
{\n\
	in_reg.Author = \"Command Wizard User\";\n\
	in_reg.Name = \"MyNewCommandPlugin\";\n\
	in_reg.Major = 1;\n\
	in_reg.Minor = 0;\n\
\n\
	// This plug-in contains two custom commands\n\
	in_reg.RegisterCommand(\"MyNewCommand\",\"MyNewCommand\");\n\
\n\
	// Register a second command and <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> the plug-in categories\n\
	var myPluginItem = in_reg.RegisterCommand(L\"My Other Command\",L\"MyCommand2\");\n\
	myPluginItem.Categories = Array( \"Example\", \"Custom\" );\n\
\n\
	return true;\n\
}</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-0026\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-E36D3D86-6529-42FA-A150-ECA1742CBF88\"></a></span> Command Name\n\
               </h2>    \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-E736D5FA-EEA0-4EA7-BD07-644FD50ECC4A\"></a></span>The first parameter to <a href=\"#!/url=./si_om/PluginRegistrar.RegisterCommand.html\">RegisterCommand</a> or RegisterCommand is the command <span class=\"char_link\"><a href=\"#!/url=./files/cus_self_NamingPluginItems.htm\">name</a></span>. This is the name that appears in the Softimage user interface, and the name of the\n\
                  command in the commands collection returned by <a href=\"#!/url=./si_om/XSIApplication.Commands.html\">XSIApplication.Commands</a> or Application::GetCommands.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-A8C2FF43-05F8-4231-AACB-A5605DC6B4EE\"></a></span>The command name is also used to name the callback functions such as <a href=\"#!/url=./si_cmds/cb_Command_Execute.html\">Execute</a> and <a href=\"#!/url=./si_cmds/cb_Command_Init.html\">Init</a>. For example, the <span class=\"code\" translate=\"no\">Execute</span> callback for a command named \"MyCommand\" is <span class=\"code\" translate=\"no\">\"MyCommand_Execute\"</span>.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-68F74238-31F7-43FA-8203-FCA59AB1C148\"></a></span>The first character in a command name should be a letter. Subsequent characters can\n\
                  be letters, numbers, underscore (_) characters, or spaces. If a command name contains\n\
                  spaces (for example, \"My Simple Command\"), then you remove the spaces in the callback\n\
                  function names (for example, <span class=\"code\" translate=\"no\">\"MySimpleCommand_Init\"</span> and <span class=\"code\" translate=\"no\">\"MySimpleCommand_Execute\"</span>).\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-0027\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-079B1F9D-F995-473E-A9FE-FD1FC3414F94\"></a></span> Scripting Name\n\
               </h2>    \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-3E9F58AB-D01E-464E-8120-BEE8A1A0FE61\"></a></span>The second parameter to <a href=\"#!/url=./si_om/PluginRegistrar.RegisterCommand.html\">RegisterCommand</a> or RegisterCommand is the <a href=\"#!/url=./si_om/Command.ScriptingName.html\">Command.ScriptingName</a> or Command::GetScriptingName, the name used to run the command from scripting or\n\
                  C++ code. The first character should be a letter. Subsequent characters can be letters,\n\
                  numbers, or underscore (_) characters. The scripting name cannot contain spaces.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-2701E274-0FF2-4F43-94DF-0C89116B994F\"></a></span>If you want to be able to run the command from any scripting language, the first character\n\
                  must be a letter (VBScript does not support the underscore as the first character\n\
                  in a name).\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-17FB33ED-77C3-42BB-825D-F82CC4C7788E\"></a></span>The scripting name can include spaces, hyphens, or other characters, but then the\n\
                  command cannot be executed by referring to it by its scripting name. For example,\n\
                  if the scripting name is \"My-Command\", then the only way to execute the command is\n\
                  through the object model:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Command.Name = \"MyCommand\", Command.ScriptingName = \"My-Command\"\n\
var oCmd = Application.Commands( \"MyCommand\" );\n\
oCmd.Execute();\n\
\n\
Application.ExecuteScriptCommand( \"123MyCommand\" );</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";