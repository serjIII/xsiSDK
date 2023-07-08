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
      <meta name=\"topicid\" content=\"GUID-DF15E09B-AEC1-49F1-BDC7-8F392EC44911\" />\n\
      <meta name=\"indexterm\" content=\"script editor: customizing\" />\n\
      <meta name=\"indexterm\" content=\"preferences: script editor\" />\n\
      <meta name=\"indexterm\" content=\"tools development environment\" />\n\
      <meta name=\"indexterm\" content=\"tde\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Customizing Your Scripting Environment</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-DF15E09B-AEC1-49F1-BDC7-8F392EC44911\"></a></span><div class=\"head\">\n\
            <h1>Customizing Your Scripting Environment</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-D18E10CE-3E1F-4C79-9441-10D976B899FF\"></a></span>You can customize the script editor in the following ways: \n\
            </p><span class=\"anchor_wrapper\"><a name=\"UL_029856672B574A3DA8D6B2D317811722\"></a></span><ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-22CB8609-9346-44C8-8EFB-29FC73837E5D\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_editor_CustomizingYourScriptingEnvironment.htm#WS7764D933E362064489C22357B4B7178F-0024\">Setting Scripting Preferences</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-9AE7A384-9A06-438A-A862-2AC8E4460CC7\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_editor_CustomizingYourScriptingEnvironment.htm#WS7764D933E362064489C22357B4B7178F-0027\">Setting Script Editor Preferences</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-7DADFF51-4F9A-489E-952C-1B7530DAA0AC\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_editor_CustomizingYourScriptingEnvironment.htm#WS7764D933E362064489C22357B4B7178F-002C\">Using the Tools Development Environment</a></span> \n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-C77DA11A-7F4D-44A5-A1A4-BE212703CFFA\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span>You can zoom in and out of the editing and history panes by clicking in the pane,\n\
                  then pressing the <span class=\"MenuCascade\" id=\"GUID-496A31C4-85B7-4CC2-90F4-245E0E5F481C\">Ctrl</span> key and moving the scroll wheel (up for zooming in or down for zooming out). This\n\
                  action only affects the display and does not affect the <span class=\"char_link\"><a href=\"#!/url=./files/script_editor_CustomizingYourScriptingEnvironment.htm#WS7764D933E362064489C22357B4B7178F-002A\">script editor preferences</a></span> for text size. \n\
               </div>\n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7764D933E362064489C22357B4B7178F-0024\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-1CF1E829-33D4-4793-B2DD-84F57162BB6B\"></a></span>Setting the Scripting Preferences\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-BF595C16-B558-4D65-87C2-531F4912CB82\"></a></span>You can use the scripting preferences to customize how Softimage logs information\n\
                  and for selecting a scripting language. To access the scripting preferences, select\n\
                  <span class=\"MenuCascade\" id=\"GUID-DBB341AA-88CC-4713-B6DC-3E027F84284E\">File <img src=\"../images/ac.menuaro.gif\" /> Preferences</span> from the command bar. \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"FIG_07C2B76351EF441190B088507FC7EB95\"></a></span><div class=\"figure-anchor\"><img src=\"../images/GUID-A8F4E637-B245-440F-B56B-F63DD85C5CDE-low.png\" /></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-6F0A719A-13FD-467C-AA7C-07F47783A760\"></a></span>One of the interesting settings is the <span class=\"MenuCascade\" id=\"GUID-52DB1A8F-538F-4F0B-82D6-315F0AEF681C\">Show Command Hyperlinks</span> check box. When this check box is selected, the command names appear as hyperlinks\n\
                  in the history pane. The Command Details dialog appears to display information about\n\
                  the command when you click on the associated hyperlink. \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"FIG_C012200121384038B399D2BC51E81010\"></a></span><div class=\"figure-anchor\"><img src=\"../images/GUID-FD674BD4-3BA9-4ADF-B823-014D29ADE7FC-low.png\" /></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7764D933E362064489C22357B4B7178F-0027\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-45D23D44-F81E-40DD-A870-A77197AEC657\"></a></span>Setting the Script Editor Preferences\n\
               </h2>   \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-0B1555B3-A32F-4631-8E65-24096681D7E5\"></a></span>You can customize different properties such as indentation, font, and others in the\n\
                  editing pane using the script editor preferences. In addition, you can specify how\n\
                  find and replace works in the script editor. To access the script editor preferences,\n\
                  select <span class=\"MenuCascade\" id=\"GUID-96878570-CFD0-47FB-863C-0FFFAC2D7B6E\">File <img src=\"../images/ac.menuaro.gif\" /> Preferences</span> from the command bar. Alternatively, you can select <span class=\"MenuCascade\" id=\"GUID-383D180A-7116-4883-A746-5A024B04B9E1\">File <img src=\"../images/ac.menuaro.gif\" /> Preferences</span> from the application menu bar, expand the <span class=\"MenuCascade\" id=\"GUID-47A58996-9113-4F55-A1F5-081AAD601E1C\">Editors</span> node, and click <span class=\"MenuCascade\" id=\"GUID-CACBB9EC-1111-45F5-B45A-7E7C7CAD6047\">Script Editor</span>. \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"FIG_F85025261B49496C8C60E7BFD05DAB1E\"></a></span><div class=\"figure-anchor\"><img src=\"../images/GUID-A03C27C7-9D2F-4202-BAEA-68A5E8D3EEE6-low.png\" /></div> <span class=\"anchor_wrapper\"><a name=\"TABLE_8DB9F513288B4FDD9BCF18AF7E141C0F\"></a></span><div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col width=\"33.33333333333333%\" align=\"left\" />\n\
                        <col width=\"66.66666666666666%\" align=\"left\" />\n\
                     </colgroup>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-42D5E8FB-F795-48E9-B0D9-130127A71008\"></a></span><p class=\"table-body\"> <em class=\"strong\">A</em> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"WS7764D933E362064489C22357B4B7178F-0029\"></a></span><p class=\"table-body\"> Script Editor-Specific Options </p> <span class=\"anchor_wrapper\"><a name=\"UL_DD87A1DE58B040B5B40D82A4157A2814\"></a></span><ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-BEDA339D-197A-4680-9B01-43E604D5D275\"></a></span> <span class=\"MenuCascade\" id=\"GUID-4B9F0FF9-1FEA-4640-B85A-1516BAE130B6\">Automatically Indent New Lines</span> \n\
                                 </p> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-3B116F59-0F19-40CD-BE2C-E42E32198F8C\"></a></span>Indents a new line with the same number of tabs or spaces as the previous line. By\n\
                                    default, this option is enabled. \n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-3801C939-D6C5-4C82-B4CC-1060532141D3\"></a></span> <span class=\"MenuCascade\" id=\"GUID-D66FF786-EC4A-4EB4-90AF-8FEEA6A8F3AC\">Use Tab/Shift-Tab to Indent Selected Lines</span> \n\
                                 </p> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-6E7DBBF4-BC5D-4929-9FAB-D28B0A0F4382\"></a></span>You can select one or more lines and press Tab to increase the indent. You can press\n\
                                    Shift+Tab to decrease the indent. By default, this option is enabled. \n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-A114BD32-0506-4C55-8793-EEAE9DEB0434\"></a></span> <span class=\"MenuCascade\" id=\"GUID-5AAEA04C-9D5A-44F9-8100-6E533F1432D2\">Automatically Reload Externally Modified Scripts</span> \n\
                                 </p> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-DD7721A1-23CE-47BF-B857-0AD16C7BE78C\"></a></span>Reloads any open file that has changed (for example, if the file is modified in another\n\
                                    text editor or by another instance of Softimage). By default, this option is disabled\n\
                                    and Softimage prompts you to reload externally modified files. \n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-0F4DE50A-503A-49E2-BAEA-EC374DB4C581\"></a></span> <span class=\"MenuCascade\" id=\"GUID-8A0AC55A-3133-45CD-B198-B5353F34CBAD\">Auto Focus on the Script Editor</span> \n\
                                 </p> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-9598A366-B23A-4219-933D-F197BB0931CE\"></a></span>Controls whether the script editor automatically pops in front of other windows as\n\
                                    soon as the mouse pointer moves over it so that you do not need to click in the editing\n\
                                    pane to start typing. By default, this feature is disabled. \n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1D550490-A46B-43FC-AAAC-7E533A0D6993\"></a></span><p class=\"table-body\"> <em class=\"strong\">B</em> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"WS7764D933E362064489C22357B4B7178F-002A\"></a></span><p class=\"table-body\"> General Text Editor (Scintilla) Features </p> <span class=\"anchor_wrapper\"><a name=\"UL_AA4B92E0C8994FAC811088E43A1630FD\"></a></span><ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-24BA7F1A-FDF8-45B4-B225-A443B8A1C0F3\"></a></span> <span class=\"MenuCascade\" id=\"GUID-EBD3EE7C-174A-41A7-9BB4-8736DC054C35\">Font</span> \n\
                                 </p> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-E706F672-C48A-477A-879D-6D1702A113FD\"></a></span>The font to use in the script editor. You can type the name of any font in this text\n\
                                    box. If the specified font is installed in your system, the editor uses the font.\n\
                                    If it is not installed or recognized, the font defaults to the closest match. \n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-01F8D91F-6B0E-4480-84D0-C1657DC9712B\"></a></span> <span class=\"MenuCascade\" id=\"GUID-A3149A5A-8D1C-476F-824E-E8B78D3A594D\">Font Size</span> \n\
                                 </p> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-62AFD2A3-F6E0-4E24-97AA-24967865F60B\"></a></span>The font size in points to use in the script editor. You can select a font size in\n\
                                    points from the drop-down list between <span class=\"code\" translate=\"no\">4</span> to <span class=\"code\" translate=\"no\">60</span>. \n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-4D6D664A-4A29-4D7F-A949-5CD2E214B6AE\"></a></span> <span class=\"MenuCascade\" id=\"GUID-3DCAB3F6-485B-4475-992A-B14B56A614BB\">Tab Size</span> \n\
                                 </p> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-36F4A112-B7CF-4B51-8A98-13EFAE680DD0\"></a></span>The number of spaces used to represent tab characters. You can set the tab size between\n\
                                    <span class=\"code\" translate=\"no\">1</span> to <span class=\"code\" translate=\"no\">16</span> spaces. \n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-6099E63D-DE33-4BF6-9F07-D786E3FFDB55\"></a></span> <span class=\"MenuCascade\" id=\"GUID-4FF42BA8-2AED-41A8-A35B-2CE4EEF38067\">Insert spaces instead of tabs </span> \n\
                                 </p> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-7E255A52-D586-4F1D-82DA-F1149DE25135\"></a></span>Enabling this option inserts spaces when you press the Tab key. \n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-0995773D-5DB2-4371-9D60-2191AF6A2D2A\"></a></span> <span class=\"MenuCascade\" id=\"GUID-52C52252-36CA-472F-A966-5D3D6FAC9520\"> Show Indentation Guides</span> \n\
                                 </p> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-EFEDAE16-5C4E-4CAD-AF80-11F920EC6ABC\"></a></span>Displays the indentation guides in the editing pane. By default, this option is enabled.\n\
                                    \n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-E8AE1AA6-643B-4CD2-8B2C-34651B73CBD0\"></a></span> <span class=\"MenuCascade\" id=\"GUID-A221EF64-DB6C-423D-B9BF-97887B47F9BF\">Show Line Numbers</span> \n\
                                 </p> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-C31FA25F-D527-48BD-9209-046E27293006\"></a></span>Displays line numbers in the left margin. This is very helpful when working with large\n\
                                    scripts. By default, line numbers appear in the left margin. \n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-7AB24A2E-112E-46BC-82FF-C3AF82990BEB\"></a></span> <span class=\"MenuCascade\" id=\"GUID-FC42A340-2FBC-4B80-AA0A-74F922580A86\">Enable Folding</span> \n\
                                 </p> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-46F66CB3-CE80-4627-AD29-633D9279363D\"></a></span>Displays folding controls in the left margin. There are two folding controls: \"<em class=\"strong\">-</em>\" (collapses lines within a syntactic block such as an if-clause or a function), and\n\
                                    \"<em class=\"strong\">+</em>\" (expands any previously collapsed syntactic blocks). Folding blocks in your code\n\
                                    makes it easier to read and navigate long files. By default, this option is disabled.\n\
                                    \n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-1F1A775C-353D-4A85-BE76-DDC26A4A8570\"></a></span> <span class=\"MenuCascade\" id=\"GUID-7BC621B1-B370-408A-A62E-4874B7E06C6A\">Show Whitespace</span> \n\
                                 </p> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-FB01022B-4D9C-4701-AB63-FABBBEE8FD45\"></a></span>Displays spaces as dots and tabs as arrows in the editing pane. This can be very helpful\n\
                                    when you are working with a language like Python, where tabs are syntactically significant.\n\
                                    By default, this option is disabled. \n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"WS7764D933E362064489C22357B4B7178F-002B\"></a></span> <span class=\"MenuCascade\" id=\"GUID-A7C00DA7-91F4-40B8-B734-AB7F86666F62\">Selection Margin</span> \n\
                                 </p> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-CF4134B1-EA4F-4FC5-A011-8CC20760A2DE\"></a></span>Sets the width of the margin which is used to indicate <span class=\"char_link\"><a href=\"#!/url=./files/script_editor_EditingScripts.htm#WS7764D933E362064489C22357B4B7178F-0011\">bookmarking</a></span> in the editing pane. If the margin size is 0 (default), bookmarked lines appear with\n\
                                    light blue highlighting in the editing pane. Any other value (between <span class=\"code\" translate=\"no\">1</span> to <span class=\"code\" translate=\"no\">22</span>) indicates a bookmarked line using a light blue square in the margin. You can click\n\
                                    in this area to select an entire line. \n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-72A327A0-AB71-4A77-919C-F24761DEB38F\"></a></span> <span class=\"MenuCascade\" id=\"GUID-0D6B4E2A-4E71-4F2A-A531-FFC616F7ED6B\"> Smart Highlighting</span> \n\
                                 </p> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-91835344-0408-4295-BC6E-C3035588776C\"></a></span>When you select a word in the editing pane, the script editor highlights all the occurrences\n\
                                    of the word. By default, this option is enabled. \n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D677A339-C46F-4323-B758-75A9ECFC7C84\"></a></span><p class=\"table-body\"> <em class=\"strong\">C</em> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BC417C53-BF9F-448A-813D-F8F3CBC7D87A\"></a></span><p class=\"table-body\">Find and Replace Features </p> <span class=\"anchor_wrapper\"><a name=\"UL_8D8CDC7B0C264194BE0086ED5AD56DD9\"></a></span><ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-7AA845C6-FF4E-48F8-9272-C19444282B2A\"></a></span> <span class=\"MenuCascade\" id=\"GUID-0CDE1BD6-8559-46F4-852C-50F77E3C7268\">Wrap Around Search</span> \n\
                                 </p> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-DAA45C9D-9E46-4F7A-A62F-C1CE1C41EA9B\"></a></span>Continues searching from the beginning of the file after reaching the end. If this\n\
                                    option is disabled, text searches start at the cursor position and stop at the end\n\
                                    of the file. \n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-D4D70CEE-377C-4449-A49F-A8DF5870C3BD\"></a></span> <span class=\"MenuCascade\" id=\"GUID-8B978E50-7F7C-4391-A760-C832785924BD\">On Unsuccessful Find</span> \n\
                                 </p> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-ECCDFBF7-9993-4EBC-A75A-953802695DFD\"></a></span>You can specify an action to perform when the search string is not found. Available\n\
                                    options are <span class=\"MenuCascade\" id=\"GUID-3D4E60E3-AA2C-4F3D-8D02-88FB612EAC75\">Do Nothing</span>, <span class=\"MenuCascade\" id=\"GUID-03C8D70A-9475-463C-BC8D-010279AC0F99\">Beep</span>, and <span class=\"MenuCascade\" id=\"GUID-EBD96732-A4A4-4FF2-BD6E-F98216D9659D\">Display Alert</span> (default). \n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7764D933E362064489C22357B4B7178F-002C\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-EA5FEEB9-0CC9-452D-B63C-472AA79B7C4C\"></a></span>Using the Tools Development Environment\n\
               </h2>   \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-35DF3029-A802-44C9-BDE0-978544C8F0A7\"></a></span>You can use the tools development environment for developing tools and plug-ins. To\n\
                  access the tools development environment, select <span class=\"MenuCascade\" id=\"GUID-948C2778-C9BC-424C-A6C8-7CE4AD947FC9\">View <img src=\"../images/ac.menuaro.gif\" /> Layouts <img src=\"../images/ac.menuaro.gif\" /> Tools Development Environment</span> from the application menu bar. \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"FIG_AAB4B6F21DFA431FBC95B725326BC1A1\"></a></span><div class=\"figure-anchor\"><img src=\"../images/GUID-156AD8AF-0C09-407A-AFA5-198D1C654FD1-low.png\" /></div> <span class=\"anchor_wrapper\"><a name=\"TABLE_309FAAB568094DD0BC1BDE76E68F19AB\"></a></span><div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col width=\"33.33333333333333%\" align=\"left\" />\n\
                        <col width=\"66.66666666666666%\" align=\"left\" />\n\
                     </colgroup>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7F78FED2-A57A-4A62-9025-69C5688FC7B7\"></a></span><p class=\"table-body\"> <em class=\"strong\">A</em> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5CDBA196-C182-4A89-AD8D-F4D40D2B4001\"></a></span><p class=\"table-body\">The <span class=\"MenuCascade\" id=\"GUID-69254CBB-EE65-4ECF-A806-06B660C325C1\">Plug-ins <img src=\"../images/ac.menuaro.gif\" /> Tree</span> tab provides easy access to the file structure for creating and maintaining self-installing\n\
                              plug-ins. \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2838A367-1BD4-41F4-8C80-0D2BBB17E28D\"></a></span><p class=\"table-body\"> <em class=\"strong\">B</em> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7492860D-73D2-4187-85CE-16CDE44A557A\"></a></span><p class=\"table-body\">Context-sensitive menus in the plug-in tree. For example, you can invoke the Custom\n\
                              Command wizard or Custom Property wizard in the plug-ins context while the Shader\n\
                              wizard is available in the SPDLs context. \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-017BAF77-3EFE-4C76-A151-0AF8D35D37FF\"></a></span><p class=\"table-body\"> <em class=\"strong\">C</em> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-29DD6FCB-216F-46C9-A2FC-11C9BD3C0FDD\"></a></span><p class=\"table-body\">You can use separate editing panes containing code snippets to run on the fly and\n\
                              load files (even text and HTML files). \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-0A310B40-FEB8-4C7E-8DEE-263796F87454\"></a></span>The work area is divided in two as shown in the following figure. On the left, you\n\
                  can toggle between the Softimage content, Plugins Tree, SDK Explorer, Netview, Browser,\n\
                  Explorers, and ICE Tree. On the right, you can toggle between the editing panes and\n\
                  view the common history pane. \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"FIG_B54532C3BEFF47DA8AAE177F8DDC4840\"></a></span><div class=\"figure-anchor\"><img src=\"../images/GUID-3F1FA66D-BE18-41BB-9700-1EDAC44580F1-low.png\" /></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";