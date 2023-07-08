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
      <meta name=\"topicid\" content=\"GUID-8A540AC2-EAA0-4746-8048-8DF02EE40516\" />\n\
      <meta name=\"indexterm\" content=\"custom properties: creating controls: Bitmap Widget\" />\n\
      <meta name=\"indexterm\" content=\"Bitmap Widget: creating: in a property page\" />\n\
      <meta name=\"indexterm\" content=\"Bitmap Widget\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Bitmap Widget</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-8A540AC2-EAA0-4746-8048-8DF02EE40516\"></a></span><div class=\"head\">\n\
            <h1> Bitmap Widget</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\"><img src=\"../images/GUID-5394952D-56EB-4B57-AEDE-85339B6BA050-low.png\" /><p><span class=\"anchor_wrapper\"><a name=\"GUID-A818EAA0-43D0-4DD6-8CBF-8ECBAA20F82F\"></a></span>Bitmap widgets display a bitmap (like a logo), along with an optional animation divot\n\
               and an optional label. They are associated to an underlying parameter of any data\n\
               type. The type you choose is unimportant because these widgets do not use the data\n\
               in any real way, but just display the bitmap image specified through the layout.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-67B97DAD-005E-4656-AF99-C1D84FDD0C78\"></a></span>You create them using the <a href=\"#!/url=./si_om/PPGLayout.AddItem.html\">PPGLayout.AddItem</a> or PPGLayout::AddItem method with the <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlBitmap</a> control type enum:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
oLayout.AddItem( \"MyBMP\", \"When you hit a brick wall...\", siControlBitmap );\n\
</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-C0AFACBE-DC74-427C-8F2D-F9AEC657F93F\"></a></span>Unlike many other controls, the image that is displayed is controlled through the\n\
               property page layout, not through its associated parameter on the underlying property\n\
               set. This means that you have to set the path and filename of the image to display\n\
               by calling the <a href=\"#!/url=./si_om/PPGLayout.SetAttribute.html\">PPGLayout.SetAttribute</a> or PPGLayout::PutAttribute method with the <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIFilePath</a> PPG item attribute and the image location.\n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-9A062B72-230B-4D2F-A3C8-2F2285238B24\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-527F39C9-1880-4B2A-9C1C-DA321D0B465E\"></a></span>You can update this image dynamically, but because the value of the image location\n\
                     is actually controlled by the layout of the property page (rather than a parameter\n\
                     in the underlying property set), you need to use the <a href=\"#!/url=./si_om/PPG.Refresh.html\">PPG.Refresh</a> method to update the display.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-A70DD4E1-B9C7-43F6-8BEA-547F254C451C\"></a></span>The following item attributes are available:\n\
            </p>\n\
            <div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2F2A49D6-C086-4299-8814-7F714A2A0704\"></a></span><p class=\"table-heading\">Available on all Controls also as a property on the PPGItem object:</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-102749B0-F318-44AB-BBF4-C66E6E72CCEF\"></a></span><p class=\"table-heading\">Common to many Controls:</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4E8A7931-D56B-4091-866D-F9750CE86186\"></a></span><p class=\"table-heading\">Specific to the Bitmap control:</p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> \n\
                        <ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-597511C6-2552-4E8E-92DF-65BEC906ABBE\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUILabel</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-941B3B37-68AC-4E22-A001-F5CA84D807B9\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIItems</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-FC698D82-605D-4508-A395-DCE285B7A66E\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIType</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-FAE40EB4-E694-4790-A2FA-2D7D815DCF1C\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIWidthPercentage</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-5A4C4464-58E3-4C6D-A387-7837945EE4B5\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUILabelPercentage</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-592E15D7-2D08-4CAA-A374-5BE2A7EAE0A6\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUILabelMinPixels</a> \n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> \n\
                        <ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-DDD553C7-91E0-4E83-A944-A1DE94CC4A39\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUINoLabel</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-A9C2ABF5-52AA-450B-B269-54C42B244E33\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIValueOnly</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-34C477DD-DD68-4C70-B398-7FF1108BB02D\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIContinue</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-805C0A54-6369-427D-9BF6-0A3B42892476\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUICX</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-CDDEA67A-09CA-47AC-AB4E-E769C32CBBAA\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUICY</a> \n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> \n\
                        <ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-F2ECFB63-603D-43BE-9C72-D818A183948B\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIFilePath</a> \n\
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