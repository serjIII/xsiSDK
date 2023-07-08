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
      <meta name=\"topicid\" content=\"GUID-84AAF38F-B0FC-4B09-9F84-8FF8F44F00B6\" />\n\
      <meta name=\"indexterm\" content=\"custom properties: creating controls: List Box\" />\n\
      <meta name=\"indexterm\" content=\"List Box: creating: in a property page\" />\n\
      <meta name=\"indexterm\" content=\"List Box\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>List Box</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-84AAF38F-B0FC-4B09-9F84-8FF8F44F00B6\"></a></span><div class=\"head\">\n\
            <h1> List Box</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\"><img src=\"../images/GUID-DB2D5CD7-213E-4F00-8FFD-8084A0A9D1A1-low.png\" /><p><span class=\"anchor_wrapper\"><a name=\"GUID-471EFD90-5699-4C0C-B6C4-36672876A957\"></a></span>List boxes display a read-only text box that presents several items or values along\n\
               with an optional animation divot and an optional label. They are associated to an\n\
               underlying parameter of any numeric type. \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-44535796-874C-4A75-B87A-19FD5F90D443\"></a></span>You create them using the <a href=\"#!/url=./si_om/PPGLayout.AddItem.html\">PPGLayout.AddItem</a> or PPGLayout::AddItem method with the <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlListBox</a> control type enum and then populate the list with the <a href=\"#!/url=./si_om/PPGItem.UIItems.html\">PPGItem.UIItems</a> or PPGItem::GetUIItems or PPGItem::PutUIItems property: \n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
var oListBox = oLayout.AddItem( \"MyList\", \"\", siControlListBox );\n\
oListBox.SetAttribute( siUICY, 100 );\n\
\n\
// 1D array of key,value pairs (since this is a string, just repeat them)\n\
var aListItems = new Array( \n\
	\"light\", \"light\", \n\
	\"sphere\", \"sphere\", \n\
	\"Camera\", \"Camera\", \n\
	\"Camera_Root\", \"Camera_Root\", \n\
	\"Camera_Interest\", \"Camera_Interest\" \n\
);\n\
oListBox.UIItems = aListItems;</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-1CB80239-6C66-4E40-8CF1-6AC6BE66FD84\"></a></span> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-45318BEE-E344-42D4-A1F0-FC6F328FA806\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span>If you set the default parameter to a value that is not in the array of allowed values,\n\
                     the selection in the list box is cleared. \n\
                  </div>\n\
               </div> \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F2D9FE2D-A6C8-42ED-84B6-AB0DAD5833D8\"></a></span>The following item attributes are available: \n\
            </p><span class=\"anchor_wrapper\"><a name=\"TABLE_23F68EB0FFB14071BA55D227278692B2\"></a></span><div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col width=\"50%\" align=\"left\" />\n\
                     <col width=\"50%\" align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-26A5CC29-E37F-4619-8F26-C0CDB71F3D1C\"></a></span><p class=\"table-heading\">Available on all Controls also as a property on the PPGItem object: </p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-291844C7-32F9-4D63-B840-233E080D1871\"></a></span><p class=\"table-heading\">Common to many Controls: </p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"UL_A7BB13CF02914D0C9EF7B417D82A3006\"></a></span><ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-DBC85DD7-6136-41EC-9F7E-E466CBB122E9\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUILabel</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-CEE8F76B-68E3-465B-8BCB-8F2D15740B9F\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIItems</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-CC6DDBFE-55C4-492F-B382-D0FC2CA5A765\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIType</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-EBB4F966-ED5E-4D7C-AA83-62930B264ACF\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIWidthPercentage</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-828066C4-DA0E-4C93-9688-5D1F1F11F661\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUILabelPercentage</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-A7F55260-F9FA-4425-9BF7-BA1A971C8181\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUILabelMinPixels</a> \n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"UL_E85E794461404275B2D3C1FB1AD01019\"></a></span><ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-6BAAAF08-9715-4D90-AA4E-DA4F0B662C97\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUINoLabel</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-85285A49-12DE-4C65-9228-F24DDA51CF71\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIValueOnly</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-A1A42DEE-3057-4705-BBB4-61F1091E84C0\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIContinue</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-3A74070F-CE18-4E0C-8B77-D42B83592D47\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUICX</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-AB58D67B-97EA-4FEA-85A2-D1FACED6CE3C\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUICY</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-568084DA-6DA1-4B6F-A9EC-6BF2DFB00896\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIStyle</a> \n\
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