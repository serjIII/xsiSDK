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
      <meta name=\"topicid\" content=\"GUID-7878CC55-83A7-4FCA-9257-6D21C157344D\" />\n\
      <meta name=\"indexterm\" content=\"custom properties: creating controls: Folder Widget\" />\n\
      <meta name=\"indexterm\" content=\"Folder Widget: creating: in a property page\" />\n\
      <meta name=\"indexterm\" content=\"Folder Widget\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Folder Widget</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-7878CC55-83A7-4FCA-9257-6D21C157344D\"></a></span><div class=\"head\">\n\
            <h1> Folder Widget</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\"><img src=\"../images/GUID-F69A3B76-DBDD-4A7E-AC76-E05C2F274E2D-low.png\" /><p><span class=\"anchor_wrapper\"><a name=\"GUID-49F242F3-23B7-4248-9CB0-3027BBA4692D\"></a></span>Folder widget controls display an editable text box and a folder widget along with\n\
               an optional label. They are associated to an underlying <em class=\"strong\">String</em> parameter.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F62A492F-F7A3-4C40-90BF-B589BC666DE9\"></a></span>Clicking on the folder widget launches a Folder Picker which can be used to identify\n\
               the path for a folder. When the user clicks OK on the Folder Picker, it updates the\n\
               associated text box with the selected path.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-C2312F05-4435-4ACB-8BCF-384C7D0687E9\"></a></span>You create them using the <a href=\"#!/url=./si_om/PPGLayout.AddItem.html\">PPGLayout.AddItem</a> or PPGLayout::AddItem method with the <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlFolder</a> control type enum:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">var oItem = oLayout.AddItem( \"Directory\", \"\", siControlFolder );</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-5F2C4F13-2E0F-486D-94D4-BE501BB071D5\"></a></span>You can also set up a folder location to open by default. This process is the same\n\
               as for the file brower widget, as outlined in <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_FileBrowserWidget.htm#WS34BA39B437A993419C80CAB58E3BEFA1-005A\">To specify a default directory</a></span>.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-6DF47EA1-61D6-4ABB-B8D6-A8CE4EA1783A\"></a></span>The following item attributes are available:\n\
            </p>\n\
            <div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D03DED3C-3818-4BBC-AA8F-2D6488BB5BEC\"></a></span><p class=\"table-heading\">Available on all Controls also as a property on the PPGItem object:</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3883DEF2-9DF4-4E7F-8DA9-21EA8D73B447\"></a></span><p class=\"table-heading\">Common to many Controls:</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-90AD51E0-8405-4558-9589-EAE6590C6DF2\"></a></span><p class=\"table-heading\">Specific to the Folder Picker control:</p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> \n\
                        <ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-077E0A7A-79D4-4695-BC6C-3F9ACF09471C\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUILabel</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-DD600B06-FB3B-43C6-A42A-5AC8B4DA596E\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIItems</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-C00EE6C1-0E6A-48A2-8A7F-B2B6A9CE5422\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIType</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-42F44B03-EC34-4AB5-8601-48623A7977E4\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIWidthPercentage</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-F303C527-6150-4C51-B98C-01A929932040\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUILabelPercentage</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-AA212891-75B4-4459-9D44-F8D22D6006AA\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUILabelMinPixels</a> \n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> \n\
                        <ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-B0F6D6E6-F26F-47EA-BB76-747FD0A8EADD\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUINoLabel</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-758FF51D-A25F-4D51-A49D-ECEE19047594\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIValueOnly</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-25125EDA-D1D5-4DF9-84A7-2650F571ACEB\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIContinue</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-540F3D9E-C9C6-4327-B939-2317C8FDDDBA\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUICX</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-B8A503DC-4CA1-4145-9FE6-38C2849C77C7\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUICY</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-7822E869-0EE5-43C3-9E3E-71DBFDD48A62\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIStyle</a> \n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> \n\
                        <ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-8757D176-7BF3-4F15-8CA4-F7E468337844\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIInitialDir</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-97E0A7FB-C320-4FE0-BA1A-5087F5DE0A56\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUISubFolder</a> \n\
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