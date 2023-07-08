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
      <meta name=\"topicid\" content=\"GUID-E51A38B2-A8F3-498A-AC94-978D73C0DE92\" />\n\
      <meta name=\"indexterm\" content=\"debugging: custom command and operator plug-ins\" />\n\
      <meta name=\"indexterm\" content=\"script editot: debugging plug-ins\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Making Coding Easier</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-E51A38B2-A8F3-498A-AC94-978D73C0DE92\"></a></span><div class=\"head\">\n\
            <h1>Making Coding Easier</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-277F8BE4-BBB9-484C-82C8-B83097468673\"></a></span> You can select different commands to modify the contents in the history and editing\n\
               panes. You can access these commands from the context menus, command bar menus, or\n\
               using the keyboard shortcuts. \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-1EB390BD-102B-4AEA-B41C-4273CD143CE9\"></a></span>These commands make scripting easier in the editing pane and are explained in the\n\
               following sections. \n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7764D933E362064489C22357B4B7178F-0016\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-5296E5FF-EC71-46B9-87B1-EC1B5EC6B600\"></a></span>Toggle Comments\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-540C91E5-8A7B-4157-AA1F-425637875F92\"></a></span>If you select one or more lines in the editing pane and then select <span class=\"MenuCascade\" id=\"GUID-34CB9BE6-2D52-4048-B294-56CE659C48E6\">Comment/Uncomment <img src=\"../images/ac.menuaro.gif\" /> Comment Selected Lines</span> from the context menu, the selected lines are commented (using the comment characters\n\
                  for the current language). To remove the comment characters, you can select <span class=\"MenuCascade\" id=\"GUID-BDBAA250-3193-4010-813D-B0A4E3A8072A\">Comment/Uncomment <img src=\"../images/ac.menuaro.gif\" /> Uncomment Selected Lines</span> from the context menu. Alternatively, you can use Ctrl + K to comment the selected\n\
                  lines, and Shift + Ctrl + K to remove the comment characters. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-0E7EA525-BA61-4056-8C22-F91796133BCF\"></a></span>This is helpful when you want to run disjointed snippets of code in the editing pane\n\
                  as shown in the following example. \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// I want to run this block\n\
var root = Application.ActiveSceneRoot;\n\
var n = Application.ActiveSceneRoot.AddNull();\n\
PerformSomeOperation(n);\n\
\n\
// I do not want to run this if-clause\n\
// if (n.Name == \"null\") {\n\
//	root.AddNull();\n\
// }\n\
\n\
// I want to run this block\n\
function PerformSomeOperation(in_obj) \n\
{\n\
	 ...\n\
}</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7764D933E362064489C22357B4B7178F-0017\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-FB4BBD5F-BDD0-41E6-9BBC-13733EF9786D\"></a></span>Set to &lt;language&gt;\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-10A4D5B0-45C4-4B30-BFBF-BFB5016FB671\"></a></span>If you use different languages to implement and test code, the <span class=\"MenuCascade\" id=\"GUID-E51E9775-4B37-4455-BD27-504331C1EA7C\">Set to &lt;language&gt;</span> command is an easy way to switch between languages. \n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7764D933E362064489C22357B4B7178F-0018\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-9694E76A-99C8-48C7-9518-339CBFB8905F\"></a></span>Syntax Highlighting\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-A8A7AF36-844E-4D8F-8FF6-ADE456F9626A\"></a></span>The supported scripting languages are color coded. For example, in Python the <span class=\"code\" translate=\"no\">def</span> keyword appears in blue, comments in green, and all strings appear in red. \n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7764D933E362064489C22357B4B7178F-0019\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-18D32AFE-0239-4D42-BEBC-E01DF77E7DC5\"></a></span>Tools\n\
               </h2>   \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-8A74BE83-AF19-44EC-8762-2D29C3585BE7\"></a></span>You can use the commands in the <span class=\"MenuCascade\" id=\"GUID-721880A4-67A6-4A8A-A010-80389F88BC1D\">Tools</span> submenu to create and debug scripts. \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"FIG_A2F244DC63C643F4BB4C5BCF68221D0F\"></a></span><div class=\"figure-anchor\"><img src=\"../images/GUID-955DD7FC-163B-4597-8BA2-18A06FDBBA13-low.jpg\" /></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-AB39FE3A-3DB5-4C31-89F5-0BC7D1F173B4\"></a></span>The following table describes these commands. \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"TABLE_17514475675541E195A299072892ECEE\"></a></span><div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col />\n\
                        <col />\n\
                     </colgroup>\n\
                     <tr class=\"ruledHeading\">\n\
                        <th class=\"table-heading\">Command </th>\n\
                        <th class=\"table-heading\">Description </th>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"MenuCascade\" id=\"GUID-188C7046-6467-4F2A-B251-AF461E0C718C\">Add Command</span> \n\
                        </td>\n\
                        <td class=\"table-body\">Launches the <a href=\"#!/url=./files/cus_cmds_wizard.htm\">Custom Command Wizard</a>. You can use the Custom Command Wizard to generate the code for a self-installing\n\
                           plug-in that contains a custom command. \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"MenuCascade\" id=\"GUID-7E97A267-681E-4896-80A6-3F827F771813\">Filename to Clipboard</span> \n\
                        </td>\n\
                        <td class=\"table-body\">Saves the full path and filename of the script file that is currently open in the\n\
                           script editor to the clipboard. \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"MenuCascade\" id=\"GUID-3305896A-656B-4A9F-A003-BC00599EE54E\">Set Breakpoint</span> \n\
                        </td>\n\
                        <td class=\"table-body\">Inserts a breakpoint call to the debugger for the current language at the insertion\n\
                           point (see <a href=\"#!/url=./files/script_debug.htm\">Debugging Scripts</a>). \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"><span class=\"MenuCascade\" id=\"GUID-B7724DDD-7B8F-4E21-8106-725783F51E0A\">Enable External Script Debugger</span>(for JScript and VBScript only) \n\
                        </td>\n\
                        <td class=\"table-body\">Enables Just In Time (JIT) debugging. JIT debugging invokes the Microsoft Script Debugger\n\
                           whenever your script either generates an error or contains a breakpoint (see <a href=\"#!/url=./files/script_debug.htm\">Debugging Scripts</a>). \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"MenuCascade\" id=\"GUID-55387182-D4B2-4D60-BF04-FB551C813641\">Enable Operator Debugging</span> \n\
                        </td>\n\
                        <td class=\"table-body\">When operator debugging is enabled, extra debugging information from the plug-in is\n\
                           logged to history. \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7764D933E362064489C22357B4B7178F-0020\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-8CE6F7E5-4C35-4A94-B180-6A3F360FB13F\"></a></span>Syntax Help\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-1C14595F-DEA1-4DAE-8137-9A14EF183046\"></a></span>You can use the options in the <span class=\"MenuCascade\" id=\"GUID-DF60A145-6060-4468-8EEF-7C1EDA9D8469\">Syntax Help</span> submenu to automatically insert different code snippets into the editing pane. The\n\
                  code snippets that you can insert are fundamental syntax constructions (standard for-loops,\n\
                  if-then-else clauses, and so on), intrinsic Softimage object creations (<a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a>, <a href=\"#!/url=./si_om/SIVector3.html\">SIVector3</a>, and so on), and more advanced constructions such as, JScript and Python custom objects\n\
                  (depending on the language preference). \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"FIG_5E4A3B8FC9DF4453AC5227F107ED925C\"></a></span><div class=\"figure-anchor\"><img src=\"../images/GUID-F3EA5A09-21DD-423F-9C7F-2F4C8C714D0B-low.jpg\" /></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-651741E3-A802-4E00-BB45-80BD44301EBD\"></a></span>When you select an option in the <span class=\"MenuCascade\" id=\"GUID-D6E0FA80-DF80-440D-9ECA-171D54EE294D\">Syntax Help</span> submenu, a code snippet in the currently selected language is inserted at the cursor\'s\n\
                  insertion point (any selected text is replaced). \n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-FBCAB2B8-ABC3-422F-9B26-304180DA5C69\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span>Each option inserts a syntax depending on the language preference. For example, you\n\
                     can view the different syntax constructions after inserting the <span class=\"MenuCascade\" id=\"GUID-0B897BC9-BD6C-41E2-A907-48EF1CF61331\">Catch Error</span> syntax in VBScript, JScript, and Python. \n\
                  </div>\n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";