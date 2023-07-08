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
      <meta name=\"topicid\" content=\"GUID-7B354DB5-E896-4F69-ACF1-E8A2046146A2\" />\n\
      <meta name=\"indexterm\" content=\"RGB Color Control\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>RGB Color Control</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-7B354DB5-E896-4F69-ACF1-E8A2046146A2\"></a></span><div class=\"head\">\n\
            <h1> RGB Color Control</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\"><img src=\"../images/GUID-32916ABD-52A7-40EF-A913-A57E4F64BCE1-low.png\" /><p><span class=\"anchor_wrapper\"><a name=\"GUID-3BAAEF6C-DE8E-4112-BCCC-F7811EDB52DA\"></a></span>RGB Color controls display a preview pane, the RGB/HLS/HSV toggle button, a numerical\n\
               edit box and a color slider along with an optional animation divot and an optional\n\
               label. They are associated to three underlying <em class=\"strong\">Float</em> or <em class=\"strong\">Double</em> parameters.\n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-3B16EB6A-CABF-4D24-98F7-2BB0B7BBFB3C\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-9AAEFF67-18BA-48EF-B2D0-6F011943CAD7\"></a></span>It is crucial to create the underlying parameters in the R-G-B order when defining\n\
                     them for this control, because the control takes the name of the red parameter only\n\
                     and assumes that the green is the next, and the blue following.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-FE15EEAD-580C-4FD2-A9F9-15FFFBEBC8D7\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-1A7B6926-0D83-430C-AA0B-57D36F462DB8\"></a></span>To provide a valid value range for your slider, set the <a href=\"#!/url=./si_om/Parameter.Min.html\">Parameter.Min</a> or Parameter::GetMin and <a href=\"#!/url=./si_om/Parameter.Max.html\">Parameter.Max</a> or Parameter::GetMax properties when you create each parameter.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-089CF264-0249-4B2A-9333-5081A94042EB\"></a></span>You create them using the <a href=\"#!/url=./si_om/PPGLayout.AddColor.html\">PPGLayout.AddColor</a> or PPGLayout::AddColor method (RGB is the default for type of color control):\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// during parameter definition (for example, in the <a href=\"#!/url=./si_cmds/cb_Property_DefineLayout.html\">DefineLayout</a> callback)\n\
oCustomProperty.AddParameter3( \"MyRed\", siDouble, 0, 0, 255 );\n\
oCustomProperty.AddParameter3( \"MyGreen\", siDouble, 0, 0, 255 );\n\
oCustomProperty.AddParameter3( \"MyBlue\", siDouble, 0, 0, 255 );\n\
// ...\n\
\n\
// during control creation (for example, in the <a href=\"#!/url=./si_cmds/cb_Property_DefineLayout.html\">DefineLayout</a> callback)\n\
var oItem = oLayout.AddColor( \"MyRed\", \"Pick a Color\" );</pre></div>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-E4512D4B-5D7A-453C-8FBF-B47E97C30D61\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-FFE5C570-CBE2-4418-BC18-C18B7D05D4F7\"></a></span>You can also use the <a href=\"#!/url=./si_om/PPGLayout.AddItem.html\">PPGLayout.AddItem</a> or PPGLayout::AddItem method with the <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlRGB</a> control type enum, but the <a href=\"#!/url=./si_om/PPGLayout.AddColor.html\">PPGLayout.AddColor</a> or PPGLayout::AddColor method is a little more convenient.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-2E5A9561-DC4E-40B9-989A-8568EBC461C5\"></a></span>The following item attributes are available:\n\
            </p>\n\
            <div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-926ED233-EB12-472F-8BDE-BE9C210F7D52\"></a></span><p class=\"table-heading\">Available on all Controls also as a property on the PPGItem object:</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0F9938B4-339B-4E5A-B722-35A0B4FFBBDA\"></a></span><p class=\"table-heading\">Common to many Controls:</p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> \n\
                        <ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-25435BEC-5F99-47BA-AA5A-699AF3058410\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUILabel</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-9E50637B-7A8E-46F3-843D-187FBE2B2F39\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIItems</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-AC9D775D-5B7D-49CF-9A47-594D00D6363F\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIType</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-0A61D713-8607-414C-9B3E-D94C03D5048E\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIWidthPercentage</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-4F8036D0-4815-4940-8279-8EB7F80A9EEC\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUILabelPercentage</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-643AAA8A-F24C-4387-9D1D-6A9BE792CD04\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUILabelMinPixels</a> \n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> \n\
                        <ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-2AFC710D-54B0-4BE8-9E49-FB5F67D8210C\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUINoLabel</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-6816F567-1E0B-4CDC-8E83-3CD04CD9EBB1\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIValueOnly</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-859B88D5-308C-49B0-8200-3260949B480D\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIContinue</a> \n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";