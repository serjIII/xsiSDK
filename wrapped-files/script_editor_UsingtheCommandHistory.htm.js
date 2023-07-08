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
      <meta name=\"topicid\" content=\"GUID-31BEA879-F0BA-4FBD-A298-BA2ABCACFAF0\" />\n\
      <meta name=\"indexterm\" content=\"immediate mode: script commands and\" />\n\
      <meta name=\"indexterm\" content=\"scripts: immediate mode and\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Using the Command History</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-31BEA879-F0BA-4FBD-A298-BA2ABCACFAF0\"></a></span><div class=\"head\">\n\
            <h1>Using the Command History</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-2A77E230-4131-405C-A3B3-FEAAAF8006DF\"></a></span>The history pane displays the most recently used commands in your current session.\n\
               It also displays any messages such as, information, warnings, and errors. \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-BFD39F6C-EB2E-44B6-819C-274C7FE05388\"></a></span>You cannot edit the text in the history pane, but you can use it as a source for dragging\n\
               and dropping or pasting into the editing pane. You can set your preferences for the\n\
               history pane such as, the number of lines that are displayed, whether to display commands,\n\
               and so on. \n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7764D933E362064489C22357B4B7178F-0031\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-327290B8-08FD-4CF9-8772-C2DBDD1DCDC6\"></a></span>Clearing the History\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-3E741C40-968B-41A7-BA21-F03A045049E7\"></a></span> You might want to clear the history pane when it becomes cluttered with commands\n\
                  and messages. For example, instead of scrolling through the history pane to select\n\
                  certain commands, you can clear the history pane, make changes in the scene to log\n\
                  the commands, and then copy the logged commands that you need to the editing pane.\n\
                  \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-E769F268-2043-401D-898C-95BB93519722\"></a></span>To clear the history, right-click in the history pane and select <span class=\"MenuCascade\" id=\"GUID-74983174-DD34-47CD-BE0E-3D7624312CB9\">Clear All</span> in the context menu. Alternatively, you can select <span class=\"MenuCascade\" id=\"GUID-79FD6113-B5AB-4992-8F55-DF028C43FF64\">Edit <img src=\"../images/ac.menuaro.gif\" /> Clear History Log</span>. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-A042D0D3-438F-4191-9993-368B14CD1FCE\"></a></span>To clear both the editing pane and history pane, you can select <span class=\"MenuCascade\" id=\"GUID-6EB00603-CA1B-4EE4-A988-3BB043E13163\">Edit <img src=\"../images/ac.menuaro.gif\" /> Clear Both</span>. \n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7764D933E362064489C22357B4B7178F-0033\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-07884165-4B86-4600-8EBF-CD0BB921D2B9\"></a></span>Setting the Size of the History\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-87EAE0A2-6B12-4A59-A460-4F1CA9619FE6\"></a></span>You can set the number of maximum lines that are logged in the history pane. Changing\n\
                  this value does not have a significant effect on Softimage\'s memory consumption or\n\
                  performance. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-BFC14055-7C4F-45E1-8213-C9B6CD42F4CD\"></a></span>To set the maximum number of lines: <span class=\"anchor_wrapper\"><a name=\"GUID-65C5B000-26B6-4DD9-99C9-2333BB272B33\"></a></span><ol type=\"1\" start=\"1\">\n\
                     <li>Do one of the following: <span class=\"anchor_wrapper\"><a name=\"UL_2EDA00BEDBF24C07B61DBFEC16C00C7A\"></a></span><ul>\n\
                           <li>Select <span class=\"MenuCascade\" id=\"GUID-F5F18F0C-2C93-427F-B724-AC87E6F4547C\">File <img src=\"../images/ac.menuaro.gif\" /> Preferences</span> from the application menu bar. The Preferences dialog appears as shown in the following\n\
                              figure. <span class=\"anchor_wrapper\"><a name=\"FIG_114B961290AB45CEB15BFFDD1D1B8EAD\"></a></span><div class=\"figure-anchor\"><img src=\"../images/GUID-05EE7DA8-E5D4-4A82-A323-4A4C9D269C5E-low.png\" /></div> \n\
                           </li>\n\
                           <li>Select <span class=\"MenuCascade\" id=\"GUID-39BD5881-D6A2-45E1-BBEC-BA8F656569FE\">File <img src=\"../images/ac.menuaro.gif\" /> Preferences</span> from the command bar in the script editor. The Preferences dialog appears as shown\n\
                              in the following figure. <span class=\"anchor_wrapper\"><a name=\"FIG_D3BE487E10A445429E7D61E84D96D957\"></a></span><div class=\"figure-anchor\"><img src=\"../images/GUID-3FB6C037-6BFF-4D78-A3E1-BE669CFE6EF4-low.png\" /></div> \n\
                           </li>\n\
                        </ul> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-89B7955F-7CCD-46A6-8790-7E9D63B40B22\"></a></span>In the <span class=\"MenuCascade\" id=\"GUID-95AF8D4F-486A-4C5B-B5A9-33EE95DCA576\">Scripting</span> preferences, specify the number of lines in the <em class=\"strong\">Log Size</em> option or select the <span class=\"MenuCascade\" id=\"GUID-C9929739-D8E9-4879-B6D0-342BD7FD5BBE\">Unlimited</span> option. \n\
                        </p> \n\
                     </li>\n\
                  </ol> \n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7764D933E362064489C22357B4B7178F-0037\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-2AA40D7D-FD61-4410-9A9E-45F9F8911D11\"></a></span>Disabling and Enabling Command and Message Logging\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-F8778A18-3EF4-44CF-8D25-DAE02FF1B9C4\"></a></span>You can enable and disable the logging of commands and messages in the history pane.\n\
                  To enable the logging: \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-25825E1B-E82A-4D62-A188-E28F17D34CE9\"></a></span> <span class=\"anchor_wrapper\"><a name=\"OL_F4AA262994804381BE143BDAC65CC03E\"></a></span><ol type=\"1\" start=\"1\">\n\
                     <li>Select <span class=\"MenuCascade\" id=\"GUID-B5606F4B-E622-467B-BB37-1ACEF8750835\">File <img src=\"../images/ac.menuaro.gif\" /> Preferences</span> from the application menu bar or command bar in the script editor. \n\
                     </li>\n\
                     <li>In the <span class=\"MenuCascade\" id=\"GUID-93346544-4064-40E9-A163-35CE230160A7\">Scripting</span> preferences, select the <span class=\"MenuCascade\" id=\"GUID-38719BBE-3454-4A71-A9E6-E92FE1F53298\">Log Commands</span> check box and <span class=\"MenuCascade\" id=\"GUID-C1DB63B5-9BB5-429E-BA03-820370B37F64\">Log Messages</span> check box. \n\
                     </li>\n\
                  </ol> \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-775B7F7B-B7E9-4527-8F28-59E2D92F03A7\"></a></span>Disabling the logging might speed up the performance of Softimage. Additionally, you\n\
                  can disable the command logging temporarily while running a script. For more information,\n\
                  see <span class=\"char_link\"><a href=\"#!/url=./files/script_editor_RunningScripts.htm#WS7764D933E362064489C22357B4B7178F-0052\">Disabling Command Logging Temporarily</a></span>. \n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7764D933E362064489C22357B4B7178F-0035\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-AEF958F2-62AB-4D1B-8AF0-7A48A231CEC2\"></a></span>Using Logged Commands and Immediate Mode\n\
               </h2>   \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-890DF4D8-A57C-448F-9DA0-224CE8B07D63\"></a></span>If you want to replay commands from the history, do not use the immediate mode in\n\
                  the Softimage interface. When you get a primitive or apply an operator in the immediate\n\
                  mode, the corresponding property editor opens with <span class=\"MenuCascade\" id=\"GUID-73874071-7299-4831-AB1C-DFB98358A4D2\">OK</span> and <span class=\"MenuCascade\" id=\"GUID-844F4505-7E19-4903-9457-9A7B7B148F6B\">Cancel</span> buttons. If you change a parameter value while the property editor is open, the <span class=\"MenuCascade\" id=\"GUID-2B01F7E1-EEC5-48D2-8F0D-3AC51F1C546C\">SetValue</span> command is not logged in the history pane. Therefore, when you replay commands from\n\
                  the history, it shows different results. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-0872BB91-5E7B-40B9-9421-A568B8ADDFA0\"></a></span>The following figure shows the immediate mode in Softimage. \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"FIG_2A0306EC30484FD99A60A54001F5B800\"></a></span><div class=\"figure-anchor\"><img src=\"../images/GUID-EC385EC9-36D3-4B9E-BA23-E8CD6FDA0D1F-low.png\" /></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";