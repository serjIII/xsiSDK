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
      <meta name=\"topicid\" content=\"GUID-36209B38-4B0B-4B83-BB93-3ADE62750AE7\" />\n\
      <meta name=\"indexterm\" content=\"wizards: creating commands\" />\n\
      <meta name=\"indexterm\" content=\"To create a custom command using the SDK Command Wizard\" />\n\
      <meta name=\"indexterm\" content=\"Plug-in Definition\" />\n\
      <meta name=\"indexterm\" content=\"Command Definition\" />\n\
      <meta name=\"indexterm\" content=\"Arguments (for custom commands)\" />\n\
      <meta name=\"indexterm\" content=\"custom commands: argument handlers (EditCommand window)\" />\n\
      <meta name=\"indexterm\" content=\"argument handlers (EditCommand window)\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Custom Command Wizard</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"Command\", \"si_cpp/classXSI_1_1Command.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"Plugin\", \"si_cpp/classXSI_1_1Plugin.html\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-36209B38-4B0B-4B83-BB93-3ADE62750AE7\"></a></span><div class=\"head\">\n\
            <h1>Custom Command Wizard</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-25999107-207E-4D38-8842-709A634D2830\"></a></span> You can use the Custom Command Wizard to generate the code for a self-installing\n\
               plug-in that contains a custom command. In addition to generating the skeleton code\n\
               for the plug-in and the command, the wizard can also generate the code required to\n\
               add the command to a menu. \n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-000B\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-A0CA1B56-E054-4109-8042-DF68FE665100\"></a></span> To create a custom command using the Custom Command Wizard\n\
               </h2>  <span class=\"anchor_wrapper\"><a name=\"GUID-1D9D2B2C-12E5-4E46-A6B3-486D51A925AC\"></a></span><ol type=\"1\" start=\"1\">\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-8A447838-9363-4B3C-9C92-B4F8BA52CA8B\"></a></span>Click <span class=\"MenuCascade\" id=\"GUID-76E7A530-0A43-4264-8008-B3784A3283E1\">File</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-D7DA9AC0-9132-45BA-B291-87151D538345\">Plug-ins</span> to open the Plug-in Manager. \n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-A906BCDE-6F91-401A-9C13-7677E504968F\"></a></span>In the Tools Development Environment layout, you can click the <span class=\"MenuCascade\" id=\"GUID-F6267C4B-56D0-4DDD-9F40-08AE93CA9529\">Plug-ins</span> tab to switch to the Plug-in Manager view. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-AAE1C4CD-3017-4E92-B15D-77045BD1D59E\"></a></span>Do one of the following: \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"UL_16170B3A1A1A4E1AA8F607FC6613C2A8\"></a></span><ul>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-2B206F65-40DD-4858-AB3F-716ABBB2BBAD\"></a></span>To create the command in the User location, click <span class=\"MenuCascade\" id=\"GUID-EDFC932B-4D4B-4DA7-9647-817EEBC10C96\">File</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-A9D0CDAB-55D5-4D37-8575-E556546047EB\">New</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-47021E1F-BD3F-4C57-9336-E977225CF6D0\">Command</span>. \n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-9EBAF7C3-1DCB-4552-9A11-B331D60155D4\"></a></span>To create the command in a different location (such as a workgroup or an Add-on directory),\n\
                              expand the location in the Plug-in Tree, right-click the <span class=\"MenuCascade\" id=\"GUID-6EBF6F33-FBD5-4284-96DF-AC371BC87070\">Plugins</span> folder and click <span class=\"MenuCascade\" id=\"GUID-56C8549B-8D58-497D-A976-0120B979842E\">New</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-85DAF0D5-9AC0-4291-9FCD-E81C3CB172B8\">Command</span>. \n\
                           </p> \n\
                        </li>\n\
                     </ul> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-C2DF6A40-C358-4427-ADAD-3C05CB0956B2\"></a></span>The command wizard appears. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-D823C7BC-0C78-4FF1-A875-ABC239150E90\"></a></span>In the <span class=\"char_link\"><a href=\"#!/url=./files/cus_cmds_wizard.htm#WSD74ADB6ECD122649867B3D8C4DDB866E-000E\">\n\
                              Command Name\n\
                              </a></span> box, type a <span class=\"char_link\"><a href=\"#!/url=./files/cus_self_NamingPluginItems.htm\">plug-in item name</a></span> for the command. \n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-A54E6AC0-E404-4BE4-B54C-529432787E76\"></a></span>The first character in a command name should be a letter. Subsequent characters can\n\
                        be letters, numbers, or underscore (_) characters. \n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-4EF8164F-3530-48C8-8EE5-918C9678F119\"></a></span>The wizard automatically replaces spaces with underscores. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-88C00D82-9AC2-473E-A795-32900E79F10A\"></a></span>If you want to change the plug-in name, type a different name in the <span class=\"char_link\"><a href=\"#!/url=./files/cus_cmds_wizard.htm#WSD74ADB6ECD122649867B3D8C4DDB866E-000F\">\n\
                              Plug-in Name\n\
                              </a></span> box. By default, the plug-in name is based on the command name (although spaces are\n\
                        not replaced by underscores). \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-FDDB88BA-DA2B-47C5-9084-AAE182A862C4\"></a></span>From the <span class=\"char_link\"><a href=\"#!/url=./files/cus_cmds_wizard.htm#WSD74ADB6ECD122649867B3D8C4DDB866E-0011\">\n\
                              Coding Language\n\
                              </a></span> list, select the language you want to generate. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-570FD478-8BEC-4EA4-ACF3-C57C2B487DBB\"></a></span>If you want to add the command to a menu: \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"UL_060F2D2DC6334FC088807079332C701A\"></a></span><ul>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-A05A8CFD-3441-4D07-A9CF-61BA4D4A56AC\"></a></span>From the <span class=\"char_link\"><a href=\"#!/url=./files/cus_cmds_wizard.htm#WSD74ADB6ECD122649867B3D8C4DDB866E-0012\">Add to Menu</a></span> list, select a <a href=\"#!/url=./si_om/siMenuAnchorPoints.html\">menu anchor point</a>. \n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-E0705725-D4AF-46D8-8B37-59765C0A37DC\"></a></span>In the <span class=\"char_link\"><a href=\"#!/url=./files/cus_cmds_wizard.htm#WSD74ADB6ECD122649867B3D8C4DDB866E-0013\">\n\
                                    Menu Label\n\
                                    </a></span> box, type the text you want to appear on the menu. \n\
                           </p> \n\
                        </li>\n\
                     </ul> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-14416E4C-C098-4C7A-8644-CD95C4FDC878\"></a></span>Click the <span class=\"char_link\"><a href=\"#!/url=./files/cus_cmds_wizard.htm#WSD74ADB6ECD122649867B3D8C4DDB866E-0015\">\n\
                              Command Definition\n\
                              </a></span> tab, and then type a description and tooltip for the command. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-88CBE489-E70C-405A-B33B-C457EA237506\"></a></span>If the command will not return a value, clear the <span class=\"char_link\"><a href=\"#!/url=./files/cus_cmds_wizard.htm#WSD74ADB6ECD122649867B3D8C4DDB866E-001B\">\n\
                              Return Value\n\
                              </a></span> check box. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-8C3DC5CC-C71B-4CAB-87CB-5A3968F9997C\"></a></span>For C++ API, you can get the wizard to include the skeleton code for the <a href=\"#!/url=./si_cmds/Undo.html\">Undo</a>, <a href=\"#!/url=./si_cmds/Redo.html\">Redo</a>, and <a href=\"#!/url=./si_cmds/cb_Command_TermUndoRedo.html\">TermUndoRedo</a> callbacks by checking the <span class=\"char_link\"><a href=\"#!/url=./files/cus_cmds_wizard.htm#WSD74ADB6ECD122649867B3D8C4DDB866E-001C\">\n\
                              Undo/Redo Callbacks (C++ only)\n\
                              </a></span> check box. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-8C80D954-354C-406F-862A-ECD1C59AB5BC\"></a></span>If you want to add arguments to the command: \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"UL_25DAB9DF4DD44CA08F8F9D1C2570CB3C\"></a></span><ul>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-9E55AB2B-4E6A-496A-ACA1-4B5A915F36D4\"></a></span>Under <span class=\"char_link\"><a href=\"#!/url=./files/cus_cmds_wizard.htm#WSD74ADB6ECD122649867B3D8C4DDB866E-001D\">Arguments</a></span>, click <span class=\"MenuCascade\" id=\"GUID-B47F10EC-0D00-4913-A2E2-B97D0E415E94\">Add</span>. \n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-9C952F69-867A-4B61-9807-9409F89F5A57\"></a></span>Click in the <span class=\"char_link\"><a href=\"#!/url=./files/cus_cmds_wizard.htm#WSD74ADB6ECD122649867B3D8C4DDB866E-001E\">\n\
                                    Name\n\
                                    </a></span> box and type a name for the argument. \n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-65010DB8-E9AB-4C94-BADB-638F7C3E20CA\"></a></span>If you want to specify a default value, click in the <span class=\"char_link\"><a href=\"#!/url=./files/cus_cmds_wizard.htm#WSD74ADB6ECD122649867B3D8C4DDB866E-001F\">\n\
                                    Default Value\n\
                                    </a></span> box and then type the value. For strings, <em class=\"mild\">do not</em> include the quotation marks: the wizard adds the quotation marks when it generates\n\
                              the code. \n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-1315AAC2-C5E6-4651-8008-457F4D62992C\"></a></span>If you want to use an argument handler, click in the <span class=\"char_link\"><a href=\"#!/url=./files/cus_cmds_wizard.htm#WSD74ADB6ECD122649867B3D8C4DDB866E-0021\">\n\
                                    Handler\n\
                                    </a></span> box, and then click an <span class=\"char_link\"><a href=\"#!/url=./files/cus_cmds_wizard.htm#WSD74ADB6ECD122649867B3D8C4DDB866E-0021\">argument handler</a></span>. \n\
                           </p> \n\
                        </li>\n\
                     </ul> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-B694DECE-220A-4408-8A6E-F6F98122D0F4\"></a></span>Click <span class=\"MenuCascade\" id=\"GUID-C895FA20-AE3D-45BA-86D5-195F45873AFF\">Generate Code</span> to generate the custom command. \n\
                     </p> \n\
                  </li>\n\
               </ol> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-776E0716-28AA-4361-B5EF-6EE30290A62D\"></a></span>The generated plug-in is automatically loaded and executed, and the code is loaded\n\
                  into the script editor. \n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-000C\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-DDCB4120-C4AF-4D23-A005-03A1876275AA\"></a></span>Notes\n\
               </h2> <span class=\"anchor_wrapper\"><a name=\"UL_D5265FEB769F406F9C7E99F86555BCA2\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-1F80B2E3-D5CB-4555-9BE9-93F0799155E9\"></a></span>You can use the wizard to add commands to an existing plug-in. Open the plug-in in\n\
                        a text editor or script editor, right-click in the editing pane, point to <span class=\"MenuCascade\" id=\"GUID-2AD69DFC-BD39-49FA-9925-E260FC8BADB4\">Tools</span>, and then click <span class=\"MenuCascade\" id=\"GUID-45FC0FC8-C560-4667-A724-BA11EBDA011E\">Add Command</span>. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-142F8B46-52CE-4BDE-88A3-F2BF7E6C8CAB\"></a></span>To remove an argument, select the argument row by clicking the first column of the\n\
                        row (the empty box). Then click <span class=\"MenuCascade\" id=\"GUID-0F669DAF-85F3-4DDE-A0EE-BA54C2AB69AB\">Remove</span>. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-3666560D-A7FE-4D5E-AD4E-ABF2197767D3\"></a></span>You can save wizard presets for types of commands that you frequently want to generate.\n\
                        \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-3652BD3D-061E-45FF-9CC9-2BFD24135217\"></a></span>The wizard creates a model named <span class=\"MenuCascade\" id=\"GUID-2B881F20-905C-40D4-8E3D-809E27E3252F\">SDK_Wizards</span>, and under that model puts a custom property for each command you create. You can\n\
                        open the wizard for a command by double-clicking the corresponding custom property.\n\
                        \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-000D\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-1901ED9B-77C3-48AE-B108-B8AFB2055037\"></a></span> Plug-in Definition\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-98B964EB-2658-4265-9D1D-49C0685B8B70\"></a></span>The <span class=\"MenuCascade\" id=\"GUID-5A1082B3-E9A5-4AFD-8D07-331106B2E335\">Plug-in Definition</span> tab allows you to enter the information required to generate the <a href=\"#!/url=./si_cmds/cb_XSILoadPlugin.html\">XSLLoadPlugin</a> function, which registers the plug-in items such as commands and menus with Softimage.\n\
                  \n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-000E\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-9DF4F187-9F11-4262-AE54-82AD42D06C7D\"></a></span>Command Name\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-13DBE199-829A-4082-A1CD-07ACFF107306\"></a></span>Specifies the <span class=\"char_link\"><a href=\"#!/url=./files/cus_self_NamingPluginItems.htm\">name</a></span> of the command (the plug-in item name). The first character should be a letter. Subsequent\n\
                     characters can be letters, numbers, or underscore (_) characters. \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-6BF4A8F8-027E-4FEA-9E0F-8B195CDE6874\"></a></span>By default, this name is used both as the command name (in the user interface and\n\
                     in the list returned by <a href=\"#!/url=./si_om/XSIApplication.Commands.html\">XSIApplication.Commands</a> or Application::GetCommands and as the scripting name (the name used to run the command).\n\
                     The command name is also used to name the generated callback functions. \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-D8523D1E-F65A-4B1C-B9F6-5BF792FF19BB\"></a></span>If you want to have different names (for example, a longer, more descriptive name\n\
                     for the user interface and a shorter name for scripting), you\'ll have to edit the\n\
                     call to <a href=\"#!/url=./si_om/PluginRegistrar.RegisterCommand.html\">PluginRegistrar.RegisterCommand</a> or PluginRegistrar::RegisterCommand in the generated <a href=\"#!/url=./si_cmds/cb_XSILoadPlugin.html\">XSILoadPlugin</a> function. Note that changing the command name (the first argument to <span class=\"code\" translate=\"no\">RegisterCommand</span>) means you have to change the names of the command callback functions (such as <a href=\"#!/url=./si_cmds/cb_Command_Execute.html\">Execute</a> and <a href=\"#!/url=./si_cmds/cb_Command_Init.html\">Init</a>). \n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-000F\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-1F7C93B7-2AAB-4AEF-A42D-7987CB0F45F0\"></a></span>Plug-in Name\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-C7991F7D-B222-4FCA-87A6-C1BA95491B2B\"></a></span>Specifies the name of the plug-in. By default, the plug-in name is based on the command\n\
                     name. You may want to change this name if the plug-in will contain more than one command,\n\
                     or other plug-in items such as properties. \n\
                  </p> \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-3D5A0247-EE50-4104-B512-9862FBFFD79D\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-DD03699E-BBA4-44D5-8E96-394AE371EAD1\"></a></span>If you change the command name more than once the wizard overwrites your plug-in name\n\
                           again with a newly generated name based on the command name. \n\
                        </p> \n\
                     </div>\n\
                  </div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-6E36C73D-7C81-4218-87D4-4EB0C4D5FE19\"></a></span>For example, if you initially change the command name from <span class=\"code\" translate=\"no\">NewCommand</span> to <span class=\"code\" translate=\"no\">My <a href=\"javascript:void(0)\" data=\"Command\" class=\"a_multireflink\">Command</a></span> and then tab to the Plug-in Name box, the command name and plug-in name will be <span class=\"code\" translate=\"no\">My_Command</span> and <span class=\"code\" translate=\"no\">My CommandPlugin</span> respectively. If you change the name of the plug-in to <span class=\"code\" translate=\"no\">My Cmd <a href=\"javascript:void(0)\" data=\"Plugin\" class=\"a_multireflink\">Plugin</a></span>, the command name stays the same. If you go back to the Command Name box again and\n\
                     change the command name to <span class=\"code\" translate=\"no\">XYZ</span>, the plug-in name automatically changes to <span class=\"code\" translate=\"no\">XYZPlugin</span>. \n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-0010\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-C791CFC3-6047-4C02-A0F4-3E974183D78A\"></a></span>Author\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-DA11E8D8-8D40-4CB8-943C-CE8D93FE2221\"></a></span>Identifies the author of the custom command (for example, type your name or the name\n\
                     of your organization). The Plug-in Manager displays this information for each plug-in.\n\
                     \n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-0011\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-9487CC71-8A8C-4315-9A81-D8F0FFB0FE3F\"></a></span>Coding Language\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-7FB9A331-7629-4E03-A271-FC7832E69F6F\"></a></span>Specifies the type of code (C++, C#, JScript, VBScript, Python) you want to generate.\n\
                     \n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-0012\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-68981918-76BB-4C23-A00B-765419323066\"></a></span>Add to Menu\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-C38D4175-42E4-4FDF-9394-8B6CAC6B9870\"></a></span>Specifies a menu anchor point for the custom command. An anchor point is a specific\n\
                     location on a menu (for example, <span class=\"code\" translate=\"no\">siMenuTbGetPrimitivePolygonMeshBasicID</span> inserts a menu item between <em class=\"strong\">Torus</em> and <em class=\"strong\">Dodecahedron</em> on the <span class=\"MenuCascade\" id=\"GUID-654D5B91-368D-4A45-A16F-B0891716CFA3\">Get</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-CB4A475C-0CFE-4DB4-98A8-01E0F5115A84\">Primitive</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-659C3440-FE7C-4143-8E69-0B0938B8C8C6\">Polygon Mesh menu</span>). Click <em class=\"strong\">?</em> for a description of available menu anchor points. \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-67806511-3631-496C-95EC-CE5C960A5B34\"></a></span>Leave <span class=\"code\" translate=\"no\">None</span> in this drop-down box if you don\'t want to add your custom command to a menu. \n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-0013\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-EE0C8A6A-ADE3-43A0-8BAF-DFE6F1800658\"></a></span>Menu Label\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-5F8C9369-913C-45B9-BC2C-6E7577CB1570\"></a></span>Specifies the text that appears on the menu. \n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-0014\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-160F71B4-1F31-4146-84E8-58D1B0216775\"></a></span>Output Directory\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-3ECE80A1-E8E5-4F8B-90F3-84B5EEB53116\"></a></span>Specifies the location of the generated files. \n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-0015\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-F9FFB63E-D118-4E2A-AB74-3A483DD9A96E\"></a></span> Command Definition\n\
                  </h3>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-43A4A985-7D1A-42CF-B83B-3AC0F8D46189\"></a></span>The <span class=\"MenuCascade\" id=\"GUID-BC5568F8-F596-4F73-8A92-15CC585F6FF2\">Command Definition</span> tab allows you to set command properties and define the command arguments. \n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-0016\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-DB556583-B4BC-4BF4-B18C-DF28BB9939EE\"></a></span>Description\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-358A60C4-9D3D-4855-BB3D-1CD6FC056EC5\"></a></span>Specifies a brief description of the command. This description is displayed in the\n\
                     Softimage user interface (for example, in the Customize Toolbar and Keyboard Mapping\n\
                     dialog boxes). \n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-0017\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-9183C489-99B1-477E-B77E-6E3DDBB970A8\"></a></span>Tooltip\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-3D70638F-75F4-4185-B168-1685BFAC0385\"></a></span>Specifies a short description displayed when the user points to the command button\n\
                     on a toolbar. If no tooltip is defined, the description is displayed instead, and\n\
                     if no description is defined, the command name is displayed. \n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-0018\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-943DD1B0-A91C-4F47-A30B-4DEE3A677F30\"></a></span>Supports Key Assignment\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-0E1C2CF5-B4E8-4A84-898A-AB1BFB160DE1\"></a></span>Specifies whether a keyboard shortcut can be assigned to the command in the Keyboard\n\
                     Mapping dialog box. Clear this check box if the command is a low-level helper function\n\
                     that you don\'t want to expose for general use. \n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-0019\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-D1013223-5E86-438F-97B5-C598FDC79FE4\"></a></span>Cannot Be Used In Batch\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-C82F7F6A-9E38-4005-BFFC-2A1886C1935A\"></a></span>Specifies whether the command can be used in scripts run from the command line using\n\
                     <em class=\"strong\">xsibatch</em> or <em class=\"strong\">xsi -script</em>. Select this check box if the command requires user input. \n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-001A\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-0532A63A-C7B7-4E3F-B56E-AF1793E5A6D4\"></a></span>Not Logged\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-EE46D630-3806-4998-9A84-89E941C87043\"></a></span>Specifies whether the command is logged to the command history. Disabling logging\n\
                     can improve performance; for example, if the custom command is called frequently by\n\
                     other scripts, or if the command takes a large collection of objects as an argument.\n\
                     \n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-001B\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-446C10DA-9F3D-40E1-B4B2-31C6EC2C1BEE\"></a></span>Return Value\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-3032B93E-7B7B-44C0-B7B8-BFD4B9DA193E\"></a></span>Specifies whether the command returns a value. Clear this check box if you command\n\
                     does not to return a value. If this check box is selected, but the command does not\n\
                     return a value, Softimage returns an empty Variant. If the check box is not selected,\n\
                     Softimage ignores any value returned by the command. \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-B610DF94-7367-4167-A5C2-91FFC4A904B9\"></a></span>For a VBScript command, this check box determines whether the wizard generates a subroutine\n\
                     (cannot return a value) or a function (can return a value). \n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-001C\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-0C8B3101-C3E2-4D0E-9C72-5D58D9218740\"></a></span>Undo/Redo Callbacks (C++ only)\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-22544C75-2EBF-4533-89E8-0EC9BE1EE890\"></a></span>Check this option to generate the skeleton code for the optional <a href=\"#!/url=./si_cmds/Undo.html\">Undo</a>, <a href=\"#!/url=./si_cmds/Redo.html\">Redo</a>, and <a href=\"#!/url=./si_cmds/cb_Command_TermUndoRedo.html\">TermUndoRedo</a> callbacks if you are implementing the plug-in with the C++ API. \n\
                  </p> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-001D\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-02D71A9A-BE82-40F9-9D23-D31110AF5CB4\"></a></span> Arguments\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-25742837-2F02-4EA8-AF83-08F7A8A5D8FE\"></a></span>This section allows you to define the command arguments. \n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-001E\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-C51DE64C-3B2D-480F-84F7-E7760C24FB39\"></a></span>Name\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-C731B043-571E-4EC3-B8A8-8412F41FFD5E\"></a></span>Specifies the name of the argument. The name must be a valid identifier (in general,\n\
                     the first character must be a letter and subsequent characters can be letters, numbers,\n\
                     or underscore (_) characters). \n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-001F\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-345B5864-4648-4DDD-A221-A4C01186B3D8\"></a></span>Default Value\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-03AC4D5A-EBF7-43DA-B76D-636A565352CB\"></a></span>Specifies a default value for the argument. Do not include quotation marks when you\n\
                     type the default value. The wizard adds quotation marks when it generates the code.\n\
                     \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-015AECE2-943B-4BE0-92AB-9AE2849DFFFA\"></a></span>Softimage determines the argument type from the default value, and tries to convert\n\
                     the argument value to that type when a user runs the command. For example, if the\n\
                     default value is <span class=\"code\" translate=\"no\">true</span>, the argument is a boolean value, and Softimage converts values such as 0, \"0\", and\n\
                     \"false\" to <span class=\"code\" translate=\"no\">false</span>. An argument value that cannot be converted to a boolean, such as \"<span class=\"filePath\" translate=\"no\">C:\\Softimage</span>\", will cause a type mismatch error. \n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-0020\"></a></span> <span class=\"anchor_wrapper\"><a name=\"TABLE_1436AB0B9E8B4EFF91536105DC277BDF\"></a></span><div class=\"table_Ruled\">\n\
                     <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                        <colgroup>\n\
                           <col align=\"left\" />\n\
                           <col align=\"left\" />\n\
                        </colgroup>\n\
                        <tr class=\"ruledHeading\">\n\
                           <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-42F1EC93-6112-4CEA-A849-963BEE8FFA07\"></a></span><p class=\"table-heading\">To add this type of argument: </p> \n\
                           </th>\n\
                           <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B350B77A-BF92-473D-93E1-753AE17312EA\"></a></span><p class=\"table-heading\">Do this: </p> \n\
                           </th>\n\
                        </tr>\n\
                        <tr class=\"ruledOddRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5808F1CE-0358-439D-95D4-288FD18C5764\"></a></span><p class=\"table-body\">boolean </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F85E24C0-E2F2-43D6-83FE-8FCF4FB21220\"></a></span><p class=\"table-body\">In the <span class=\"MenuCascade\" id=\"GUID-86D7887F-F2A9-41FE-90EE-6B9C23EBF88F\">Default Value</span> box, type <span class=\"code\" translate=\"no\">true</span> or <span class=\"code\" translate=\"no\">false</span>. Do not add quotation marks. \n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledEvenRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AA6423EF-D355-4572-A3B5-8EA5AB005AE4\"></a></span><p class=\"table-body\">string </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0619B1CB-D8B9-4356-AC01-7F60BB6B7384\"></a></span><p class=\"table-body\">In the <span class=\"MenuCascade\" id=\"GUID-DF0D5809-A0A5-495F-98B4-8A8C99AB854F\">Default Value</span> box, type a string. Do not add quotation marks. \n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledOddRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0FE9BBA9-031A-44FF-9E09-E4847DE9CDCD\"></a></span><p class=\"table-body\">number </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-255FAD14-EBC8-4BF7-B488-3286D646A804\"></a></span><p class=\"table-body\">In the <span class=\"MenuCascade\" id=\"GUID-C09F6ACF-2784-46D4-96D5-29497216E675\">Default Value</span> box, type a number. The wizard automatically adds quotation marks around the number,\n\
                                 so you must edit the generated <a href=\"#!/url=./si_om/ArgumentCollection.Add.html\">ArgumentCollection.Add</a> or ArgumentArray::Add and remove the quotation marks. \n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledEvenRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D097D7F0-5947-4F35-85ED-03B292C034FA\"></a></span><p class=\"table-body\">Any type </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6B3239A5-423D-494A-B4B1-B65FEE44C9C8\"></a></span><p class=\"table-body\">Leave the <span class=\"MenuCascade\" id=\"GUID-92450064-E184-4252-91C0-6260D52EF1B2\">Default Value</span> box empty and <span class=\"MenuCascade\" id=\"GUID-4B5CA7DA-1303-47BF-8E73-3C7DA74A2B66\">Handler</span> set to <span class=\"code\" translate=\"no\">None</span>. You\'ll be able to pass in any type of value: boolean, string, number, array, or\n\
                                 Softimage object. \n\
                              </p> <span class=\"anchor_wrapper\"><a name=\"GUID-F6F66795-8D92-4BAC-89CC-1550F9A23AEA\"></a></span><p class=\"table-body\">To be able to pass in <span class=\"char_link\"><a href=\"#!/url=./files/cus_cmds_AddingArguments.htm#WSD74ADB6ECD122649867B3D8C4DDB866E-0030\">JScript objects</a></span>, you\'ll need to edit the generated <a href=\"#!/url=./si_om/ArgumentCollection.Add.html\">ArgumentCollection.Add</a> or ArgumentArray::Add and set the argument type to <span class=\"code\" translate=\"no\">siDispatch</span>. \n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                     </table>\n\
                  </div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-0021\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-EEC82E4D-24CB-48DF-8DAE-332CEB7D9C8B\"></a></span> Handler\n\
                  </h3>   \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-82AB32A3-5B69-4DA3-BDEC-0379FCCC0868\"></a></span>Specifies an argument handler that processes the argument values passed to the command.\n\
                     For example, the Collection/Selection argument handler converts strings such as <span class=\"code\" translate=\"no\">\"cube,cone\"</span> to collections, and null values into the current Selection. \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-1B5CA8E1-CE60-49EE-A4B7-6E2BA3385D0F\"></a></span>If a command takes Softimage objects as arguments, you should consider using the SingleObj\n\
                     or Collection/Selection argument handlers. \n\
                  </p> <span class=\"anchor_wrapper\"><a name=\"TABLE_4179D6F7585A496E84DCF646BF9326D8\"></a></span><div class=\"table_Ruled\">\n\
                     <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                        <colgroup>\n\
                           <col align=\"left\" />\n\
                           <col align=\"left\" />\n\
                        </colgroup>\n\
                        <tr class=\"ruledHeading\">\n\
                           <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6E12DEB4-5BE1-404A-B545-000468ECDACC\"></a></span><p class=\"table-heading\">Argument Handler </p> \n\
                           </th>\n\
                           <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A3CA0F85-D568-4FAC-BA5A-6050D7AF690A\"></a></span><p class=\"table-heading\">Description </p> \n\
                           </th>\n\
                        </tr>\n\
                        <tr class=\"ruledOddRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A225CB05-B662-41E8-B2DE-F428C1DF83E6\"></a></span><p class=\"table-body\">None </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C3573380-1BB1-45CA-A9B8-F6C9FEF9EFF3\"></a></span><p class=\"table-body\">Specifies that no pre-processing is performed on the argument. </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledEvenRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F31D112D-B571-4B1A-8C95-034BA0ACCF8F\"></a></span><p class=\"table-body\">Animatable Marked Parameters </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6B046601-8B14-4F67-A70F-9AB9AD72FA8C\"></a></span><p class=\"table-body\">Converts strings such as <span class=\"code\" translate=\"no\">\"Grid1,Grid2/Name\"</span> to an <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1CRefArray.html\">CRefArray</a>of animatable marked parameters. Similar to the Marked Parameters handler, but also\n\
                                 filters out non-animatable parameters. \n\
                              </p> <span class=\"anchor_wrapper\"><a name=\"GUID-9C1BE6CC-3037-4DEC-BE03-62AAC5E3DED8\"></a></span><p class=\"table-body\">If you want a default value for the argument, then in the Default Value box, type\n\
                                 a marking list such as <span class=\"code\" translate=\"no\">\"/kine.pos\"</span>. \n\
                              </p> <span class=\"anchor_wrapper\"><a name=\"GUID-AFCF97BE-97BC-402D-9D18-EC31CE30F7CA\"></a></span><p class=\"table-body\"> <em class=\"strong\">Default value</em>: an <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1CRefArray.html\">CRefArray</a> of all animatable marked parameters on the selected objects. \n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledOddRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-53AF43DF-6B89-4732-A37D-DEB2648071A7\"></a></span><p class=\"table-body\">Collection/Selection </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-73CD0704-CAC3-4CA3-A1AB-8042618B5CE0\"></a></span><p class=\"table-body\">Converts strings such as <span class=\"code\" translate=\"no\">\"*\", \"*.polymsh\"</span>, and <span class=\"code\" translate=\"no\">\"cube,grid,light\"</span> to an <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1CRefArray.html\">CRefArray</a> of objects. \n\
                              </p> <span class=\"anchor_wrapper\"><a name=\"GUID-287F363F-88DA-4274-A3B8-AF18DE48EC95\"></a></span><p class=\"table-body\">If you type an object list such as <span class=\"code\" translate=\"no\">\"*\", \"*#model*\"</span>, or <span class=\"code\" translate=\"no\">\"*#3dobject\"</span> in the Default Value box, the Collection/Selection handler provides the specified\n\
                                 collection of objects as the default argument value. \n\
                              </p> <span class=\"anchor_wrapper\"><a name=\"GUID-C2F73E6D-DC71-4AFD-BECA-10957FF0C6AA\"></a></span><p class=\"table-body\"> <em class=\"strong\">Default value</em>: an <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1CRefArray.html\">CRefArray</a> containing the currently selected objects. \n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledEvenRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BA4FB230-2C88-41A3-9119-8C42552F5B3D\"></a></span><p class=\"table-body\">SingleObj </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E6C4D7A6-14B5-4C89-8F58-59245AB66FAF\"></a></span><p class=\"table-body\">Converts a string such as <span class=\"code\" translate=\"no\">\"MyGrid\"</span> to the corresponding X3DObject. \n\
                              </p> <span class=\"anchor_wrapper\"><a name=\"GUID-431EDDC5-674C-44A9-91C5-EB051839C99A\"></a></span><p class=\"table-body\"> <em class=\"strong\">Default value</em>: a null value (an empty object). \n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledOddRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3790C624-35BF-4523-993D-37E597338EE6\"></a></span><p class=\"table-body\">Frame </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-25B390F6-D0E4-4CE8-9BBD-04E87A5D452D\"></a></span><p class=\"table-body\">Provides the current frame number. Does nothing if a value (or a default value) is\n\
                                 specified for the argument. \n\
                              </p> <span class=\"anchor_wrapper\"><a name=\"GUID-E3657113-8D25-4973-9676-6EAD26CCB9D4\"></a></span><p class=\"table-body\"> <em class=\"strong\">Default value</em>: the current frame number. \n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledEvenRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3C8BB6EF-A7CA-4E9C-B569-699D5D53C3CA\"></a></span><p class=\"table-body\">Frame Rate </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F20970EE-E0F4-4ABD-8DB4-731E53AA9F32\"></a></span><p class=\"table-body\">Provides the frame rate. Does nothing if a value (or a default value) is specified\n\
                                 for the argument. \n\
                              </p> <span class=\"anchor_wrapper\"><a name=\"GUID-AD4ED5E6-9462-42DA-B77A-C40BCDFF25FB\"></a></span><p class=\"table-body\"> <em class=\"strong\">Default value</em>: the current frame rate. \n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledOddRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7AC8E711-8A6D-426A-A508-B9F5C04E847C\"></a></span><p class=\"table-body\">Marked Parameters </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4F7F19A9-2F83-46DA-AF28-1E31F284E7F4\"></a></span><p class=\"table-body\">Converts strings such as <span class=\"code\" translate=\"no\">\"Grid1,Grid2/Name\"</span> to an <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1CRefArray.html\">CRefArray</a>of marked parameters. If you want a default value for the argument, then in the Default\n\
                                 Value box, type a marking list such as <span class=\"code\" translate=\"no\">\"/kine.pos\"</span>. \n\
                              </p> <span class=\"anchor_wrapper\"><a name=\"GUID-97CEB671-F1AD-4E7C-9438-AA7EFAFFE55D\"></a></span><p class=\"table-body\"> <em class=\"strong\">Default value</em>: an <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1CRefArray.html\">CRefArray</a> of all marked parameters on the selected objects. \n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                     </table>\n\
                  </div> \n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";