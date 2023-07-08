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
      <meta name=\"topicid\" content=\"GUID-F8C8E751-AC21-4D96-BB6D-4EF94A65F711\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>What is a Self-Installing Plug-in?</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-F8C8E751-AC21-4D96-BB6D-4EF94A65F711\"></a></span><div class=\"head\">\n\
            <h1>What is a Self-Installing Plug-in?</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-69FE9859-12F0-4FDD-B44A-41C252663912\"></a></span>A self-installing plug-in is a script file or a compiled .dll/.so that implements\n\
            a function named <a href=\"#!/url=./si_cmds/cb_XSILoadPlugin.html\">XSILoadPlugin</a>. \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-55E738F4-2779-41B1-84BB-5BEA7F50BAC7\"></a></span>When Softimage starts, it looks in certain folders, such as <span class=\"filePath\" translate=\"no\">Application\\Plugins</span>, for plug-ins that implement <a href=\"#!/url=./si_cmds/cb_XSILoadPlugin.html\">XSILoadPlugin</a>. When Softimage finds a self-installing plug-in, Softimage loads the plug-in and\n\
            calls its <a href=\"#!/url=./si_cmds/cb_XSILoadPlugin.html\">XSILoadPlugin</a> function. \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-48B4D784-D272-49AD-A101-B64963188EAF\"></a></span> <a href=\"#!/url=./si_cmds/cb_XSILoadPlugin.html\">XSILoadPlugin</a> sets some plug-in properties (such as the name of the plug-in and the location of\n\
            its help file) and then registers the items that the plug-in implements. Plug-in items\n\
            can be commands, events, filters, menus, properties, as well as custom displays, viewport\n\
            modes or callbacks (graphic sequencer). \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-FA901CFF-11E8-4F9B-98EF-2E6D5B968512\"></a></span>For example, this <a href=\"#!/url=./si_cmds/cb_XSILoadPlugin.html\">XSILoadPlugin</a> registers a command and a menu: \n\
         </p>\n\
         <div class=\"codeBlock\"><pre class=\"prettyprint\">// JScript\n\
function XSILoadPlugin( in_pluginRegistrar )\n\
{\n\
	in_pluginRegistrar.Author = \"Command Wizard\";\n\
	in_pluginRegistrar.Name = \"My Commands\";\n\
	\n\
	// Register command\n\
	in_pluginRegistrar.RegisterCommand(\"MyCommand\",\"MyCommand\");\n\
	\n\
	// Register a custom menu\n\
	in_pluginRegistrar.RegisterMenu( siMenuMainHelpID, \"MyHelp_Menu\", false, false );\n\
	\n\
	in_pluginRegistrar.RegisterMenu(siMenuTbGetPropertyID,\"MyProperty_Menu\",false,false);\n\
	\n\
	return true;\n\
}</pre></div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-6EA3287C-000D-4920-8237-521067CB800F\"></a></span>For each plug-in item registered in <a href=\"#!/url=./si_cmds/cb_XSILoadPlugin.html\">XSILoadPlugin</a>, a self-installing plug-in also implements a number of callback functions. For example,\n\
            if a plug-in registers a command named <span class=\"code\" translate=\"no\">\"MyCommand\"</span>, then the plug-in will also provide an <a href=\"#!/url=./si_cmds/cb_Command_Execute.html\">Execute</a> callback, and possibly an <a href=\"#!/url=./si_cmds/cb_Command_Init.html\">Init callback</a> too, for the command. \n\
         </p>\n\
         <div class=\"codeBlock\"><pre class=\"prettyprint\">// JScript\n\
// Init and Execute callbacks for the custom command named \"MyCommand\"\n\
function MyCommand_Init() {\n\
	// Add arguments to the command\n\
}\n\
\n\
function MyCommand_Execute() {\n\
	// Implement the command\n\
}</pre></div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-C1CBD623-3F67-4A83-BBA6-174CEEC83301\"></a></span>A self-installing plug-in can also implement an <a href=\"#!/url=./si_cmds/cb_XSIUnloadPlugin.html\">XSIUnloadPlugin</a> function. Softimage calls <a href=\"#!/url=./si_cmds/cb_XSIUnloadPlugin.html\">XSIUnloadPlugin</a> whenever the plug-in is unloaded (for example, from the Plug-in Manager or when Softimage\n\
            exits). <a href=\"#!/url=./si_cmds/cb_XSIUnloadPlugin.html\">XSIUnloadPlugin</a> allows you to clean up any resources allocated by <a href=\"#!/url=./si_cmds/cb_XSILoadPlugin.html\">XSILoadPlugin</a>. \n\
         </p>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";