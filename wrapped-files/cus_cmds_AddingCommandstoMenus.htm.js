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
      <meta name=\"topicid\" content=\"GUID-571D0235-9E1B-4FC1-AD93-6F656D00A32D\" />\n\
      <meta name=\"indexterm\" content=\"custom commands: adding to menus\" />\n\
      <meta name=\"indexterm\" content=\"Registering Custom Menus\" />\n\
      <meta name=\"indexterm\" content=\"submenus\" />\n\
      <meta name=\"indexterm\" content=\"menus: submenus\" />\n\
      <meta name=\"indexterm\" content=\"menus: dynamic\" />\n\
      <meta name=\"indexterm\" content=\"Adding Commands\" />\n\
      <meta name=\"indexterm\" content=\"Init callbacks: menus\" />\n\
      <meta name=\"indexterm\" content=\"menus: Init callbacks\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Adding Commands to Menus</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"name\", \"si_cpp/group__RenderMapDefine.html#ga882c17490314f92c7159d6d7d69696e7\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-571D0235-9E1B-4FC1-AD93-6F656D00A32D\"></a></span><div class=\"head\">\n\
            <h1>Adding Commands to Menus</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-228EA09E-3D19-48A2-9BBA-A7581E7C95DD\"></a></span>To make one or more custom commands available from a menu in Softimage, you first\n\
               register a custom menu and then add the commands to that custom menu.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-4CC93F27-5E4A-4267-BB07-D655AA301857\"></a></span>A custom menu is not a menu in the same sense as the standard File, Edit, and Help\n\
               menus that you see in most applications. Rather, a custom menu is a set of commands\n\
               that Softimage inserts into an existing menu.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-0048\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-CA467F27-DBFF-42F0-B846-5266A0267506\"></a></span> Registering Custom Menus\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-8D878FDE-853D-47EC-8D83-B0786594F173\"></a></span>This <a href=\"#!/url=./si_cmds/cb_XSILoadPlugin.html\">XSILoadPlugin</a> function registers two custom menus that will be inserted in the Help menu on the\n\
                  main Softimage menubar:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
function XSILoadPlugin( in_reg )\n\
{\n\
	in_reg.Author = \"Me\";\n\
	in_reg.Name = \"MyCommands\";\n\
\n\
	// Register commands\n\
	in_reg.RegisterCommand(\"MyCommand1\",\"MyCommand1\");\n\
	in_reg.RegisterCommand(\"MyCommand2\",\"MyCommand2\");\n\
\n\
	// Register a custom menu\n\
	in_reg.RegisterMenu(\n\
				siMenuMainHelpID,// Anchor point for the Help menu on the main menubar\n\
					\"MyCommands_Menu\",	// Internal <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a> for the Menu object\n\
					false,					// DisplayAsSubmenu\n\
					false					// Dynamic (if true, Init is called everytime menu opens)\n\
				);\n\
\n\
	// Register another menu as a submenu\n\
	in_reg.RegisterMenu( siMenuMainHelpID, \"MyCommands_SubMenu\", true, false );\n\
\n\
	return true;\n\
}</pre></div> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-9992F3FC-99A3-417F-AB91-8FF92B0AB556\"></a></span>The first argument to <a href=\"#!/url=./si_om/PluginRegistrar.RegisterMenu.html\">RegisterMenu</a> or RegisterMenu is the menu anchor point, which specifies where the custom menu is\n\
                        inserted. The anchor point <a href=\"#!/url=./si_om/siMenuAnchorPoints.html\">siMenuMainHelpID</a> is on the Help menu of the main menubar.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-A83D6643-808A-4567-BBF6-C6C51A97DFBB\"></a></span>The second argument is name of the custom menu. You use this name to name the menu\n\
                        callback functions (for example, <span class=\"code\" translate=\"no\">MyCommands_Menu_Init</span>).\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-09BCB3E5-6E02-4D9B-8BA2-54D38B70418B\"></a></span>The third argument specifies whether to add commands directly to the Help menu or\n\
                        to put them on a submenu. For example, the following screen shot shows the two custom\n\
                        menus. Both menus have the same commands (\"My Command 1 and My Command 2), but one\n\
                        menu was added with <span class=\"code\" translate=\"no\">DisplayAsSubmenu= false</span>, and the other with <span class=\"code\" translate=\"no\">DisplayAsSubmenu=true</span>.\n\
                     </p> <img src=\"../images/GUID-D1630CC4-F9D8-4719-ACFA-372CDC94A01A-low.png\" /> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-F8FB7ED4-B0DB-4200-A8AC-654F77A27FD0\"></a></span>The fourth argument specifies whether the menu is dynamic. Dynamic means that Softimage\n\
                        calls the menu <a href=\"#!/url=./si_cmds/cb_Menu_Init.html\">Init</a> callback every time the menu is displayed. This allows you to dynamically change\n\
                        the contents of the menu.\n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-004A\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-77A73DD2-1A32-4340-B57A-0604EFEC98D7\"></a></span> Adding Commands\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-BB4C2569-16B9-4D49-8ABC-8C8DDDFAF886\"></a></span>To add commands to a menu, you write an <a href=\"#!/url=./si_cmds/cb_Menu_Init.html\">Init</a> callback for the custom menu:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Init callback for the menu named \"MyCommands_Menu\"\n\
function MyCommands_Menu_Init( ctxt )\n\
{\n\
	var oMenu;\n\
	oMenu = ctxt.Source;\n\
\n\
	// Add the commands to the menu\n\
	oMenu.AddCommandItem(\n\
			\"My Command 1\",// The text that appears on the menu\n\
			\"MyCommand1\"// The command that is invoked by the menu item\n\
			);\n\
\n\
	oMenu.AddCommandItem( \"My Command 2\", \"MyCommand2\" );\n\
\n\
	return true;\n\
}</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-6A309D4D-2C64-4D7A-9291-C6CE0942C60E\"></a></span>This Init callback adds the commands to a submenu.\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Init callback for the menu named \"MyCommands_SubMenu\"\n\
function MyCommands_SubMenu_Init( ctxt )\n\
{\n\
	var oMenu;\n\
	oMenu = ctxt.Source;\n\
\n\
	// Set the text that appears on the Softimage menu for this submenu\n\
	oMenu.name = \"My Commands\";\n\
\n\
	// Add the commands\n\
	oMenu.AddCommandItem(\"My Command 1\",\"MyCommand1\");\n\
	oMenu.AddCommandItem(\"My Command 2\",\"MyCommand2\");\n\
\n\
	return true;\n\
}</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";