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
      <meta name=\"topicid\" content=\"GUID-39F80A4F-F39C-41EF-AE30-796C2C5720BE\" />\n\
      <meta name=\"indexterm\" content=\"graphic sequencer: callbacks\" />\n\
      <meta name=\"indexterm\" content=\"callbacks: for graphic sequencer\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Viewport Callback Types</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-39F80A4F-F39C-41EF-AE30-796C2C5720BE\"></a></span><div class=\"head\">\n\
            <h1>Viewport Callback Types</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-B21ADE3E-61C9-4613-8F0C-D290239A4C9B\"></a></span>The sequence that Softimage follows when rendering a viewport looks like this:\n\
            </p>\n\
            <div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FE612734-B2F1-45C5-AA4B-C8D1EBDCA9FD\"></a></span><p class=\"table-heading\">Callback Type</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C10A85F2-113A-4109-B3F9-7D45B1CBAEB0\"></a></span><p class=\"table-heading\">siDisplayCallback Value To Use</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A22A2316-E13F-433B-87E2-4161C644CAB2\"></a></span><p class=\"table-heading\">Viewport Rendering Loop</p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6B100EEC-91C8-4EA0-8F14-90E452A8DEE4\"></a></span><p class=\"table-body\"> <em class=\"strong\">Pre-begin Frame</em> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F1721C14-3116-4F58-A5B2-D973A424B212\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siDisplayCallback.html\">siPreBeginFrame</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-01246913-F7EA-4389-BB48-D3FF21911001\"></a></span><p class=\"table-body\">Optionally set up an OpenGL P-buffer for real-time shadow rendering.</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2D28AFEE-25B4-4C65-A150-62DEA1329A79\"></a></span><p class=\"table-body\"> <em class=\"strong\">Begin Frame</em> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4B74910F-51F4-4526-897D-0864D1404383\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siDisplayCallback.html\">siBeginFrame</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F3012B27-5638-4D76-A236-95CA471F010C\"></a></span><p class=\"table-body\">Clear the OpenGL buffers (clear back buffer, Z-buffer, ...).</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9E456B39-37A9-444B-B9AD-0E7A76BA223E\"></a></span><p class=\"table-body\"> <em class=\"strong\">Post-begin Frame</em> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-60B9DCE8-B787-49B9-92EA-F0B2CA492DF4\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siDisplayCallback.html\">siPostBeginFrame</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\">&nbsp;</td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\" colspan=\"3\" align=\"left\">&nbsp;</td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-724CAA7C-899E-466A-AD90-D2B1374DF4FF\"></a></span><p class=\"table-body\"> <em class=\"strong\">Pre-Pass</em> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A86C86D5-057E-40E4-9160-CF89BA989100\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siDisplayCallback.html\">siPrePass</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\">&nbsp;</td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D437CB92-E927-4287-8CA8-9C0A27A1ABB2\"></a></span><p class=\"table-body\"> <em class=\"strong\">Begin Pass</em> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1B94C9C5-A1B9-4CBE-8B8C-71B0F22D0132\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siDisplayCallback.html\">siPass</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AEDA1F3B-3E35-464B-8159-1EC5B00E2869\"></a></span><p class=\"table-body\">Render the scene using the viewport display mode. This is where you would call:</p> \n\
                        <ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-EC2B7D02-0274-42C8-BA19-0C975C2E1773\"></a></span> <a href=\"#!/url=./si_cpp/classXSI_1_1CGraphicSequencer.html#RenderSceneUsingMode\">CGraphicSequencer::RenderSceneUsingMode</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-005E0278-86BD-47F0-9A24-11B0F776076D\"></a></span> <a href=\"#!/url=./si_cpp/classXSI_1_1CGraphicSequencer.html#RenderSceneUsingMaterial\">CGraphicSequencer::RenderSceneUsingMaterial</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-C7E736A8-85BF-4D4E-AD82-79A4EBECD7A7\"></a></span> <a href=\"#!/url=./si_cpp/classXSI_1_1CGraphicSequencer.html#RenderListUsingMode\">CGraphicSequencer::RenderListUsingMode</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-F2D038EB-4261-45AD-9D85-7A408908C459\"></a></span> <a href=\"#!/url=./si_cpp/classXSI_1_1CGraphicSequencer.html#RenderListUsingMaterial\">CGraphicSequencer::RenderListUsingMaterial</a> \n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-64C75366-15C6-45E3-84D1-125CEE17B5AE\"></a></span><p class=\"table-body\"> <em class=\"strong\">Post-Pass</em> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-066882A1-8E02-4FF0-A0F1-C17BF18A9CA0\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siDisplayCallback.html\">siPostPass</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\">&nbsp;</td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\" colspan=\"3\" align=\"left\">&nbsp;</td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-21DAA4DD-4CB8-4083-94AC-50B84496B072\"></a></span><p class=\"table-body\"> <em class=\"strong\">Pre-end Frame</em> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0A052CA4-BD4E-4566-911E-75E91674AE95\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siDisplayCallback.html\">siPreEndFrame</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BED98CAE-1186-411C-AB2F-9E8805E44D36\"></a></span><p class=\"table-body\">Draw the grid and rulers and optionally save OpenGL Frame buffers.</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8C2121DE-E8F0-48C0-BE6F-CEE92E2341EC\"></a></span><p class=\"table-body\"> <em class=\"strong\">End Frame</em> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-87FB3BD1-390C-499B-A306-24F40C710AE5\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siDisplayCallback.html\">siEndFrame</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-674DDAD9-7E86-4D85-8F85-7E0EDD7179EC\"></a></span><p class=\"table-body\">Swap the OpenGL buffers.</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-32D1D67F-54FA-46A8-B3C0-3BD36B97609F\"></a></span><p class=\"table-body\"> <em class=\"strong\">Post-end Frame</em> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AFC2EF45-56F3-4D47-9CEE-8ABEA4571EB0\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siDisplayCallback.html\">siPostEndFrame</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\">&nbsp;</td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-552CD672-2950-4882-91B3-9900AFC1BC7A\"></a></span><p class=\"table-body\"> <em class=\"strong\">Post Frame Render (mr or render region)</em> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-87E2821B-B7E0-4C06-ADD5-0BB6117DD430\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siDisplayCallback.html\">siRenderFrame</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\">&nbsp;</td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-10C99C6E-6AFC-4672-B8A9-0B33EA5A2278\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-9FAE67A1-8B89-4E55-8657-215AF04B9EA4\"></a></span>When more than one function is registered for a specific type of callback, their execution\n\
                     order is undefined.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-1659678F-BA11-4BC6-8EB8-BCE2C1E7E1FF\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-9939B115-E4C0-48BE-AB22-E66DACDDE8DB\"></a></span>Graphic sequencer plug-ins share the OpenGL state machine with Softimage. If a plug-in\n\
                     needs to change the OpenGL state, the plug-in should restore the original state when\n\
                     it is finished.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";