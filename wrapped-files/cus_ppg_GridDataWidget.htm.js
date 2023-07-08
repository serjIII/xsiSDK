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
      <meta name=\"topicid\" content=\"GUID-CD587F65-4270-4AAE-B636-13824056264D\" />\n\
      <meta name=\"indexterm\" content=\"custom properties: creating controls: GridData Widget\" />\n\
      <meta name=\"indexterm\" content=\"GridData Widget: creating: in a property page\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>GridData Widget</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-CD587F65-4270-4AAE-B636-13824056264D\"></a></span><div class=\"head\">\n\
            <h1> GridData Widget</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\"><img src=\"../images/GUID-480079C7-7F77-4680-9FC8-69A4AB4C1E59-low.png\" /><p><span class=\"anchor_wrapper\"><a name=\"GUID-CAF86D2B-2ABC-4809-864D-0D59E77056E0\"></a></span>GridData controls display 2-dimensional data array as a grid of rows and columns with\n\
               an optional label. They are associated to an underlying <a href=\"#!/url=./si_om/GridData.html\">GridData</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1GridData.html\">GridData</a> parameter. \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-B120DAC2-61A6-4B92-A8D7-A0E017E7D8C6\"></a></span>You can create them using the <a href=\"#!/url=./si_om/PPGLayout.AddItem.html\">PPGLayout.AddItem</a> or PPGLayout::AddItem method with the <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlGrid</a> control type enum: \n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// ** during parameter definition (for example, in the Define callback) **\n\
// use the convenient method to add the grid to the custom property\n\
var oParam = oPSet.AddGridParameter( \"MyGrid\" );\n\
\n\
// now to get the actual grid from the parameter, use [Get]Value (not [Get]Source)\n\
var oGrid = oParam.Value;\n\
oGrid.BeginEdit();\n\
oGrid.RowCount = 4;\n\
oGrid.ColumnCount = 4;\n\
oGrid.SetRowValues( 0, new Array(0, 0.5, 0.75, 0.1) );\n\
oGrid.SetRowValues( 1, new Array(0.1, 0.5, 0.75, 0.1) );\n\
oGrid.SetRowValues( 2, new Array(0.2, 0.99, 0.75, 0.1) );\n\
oGrid.SetRowValues( 3, new Array(0.3, 0.5, 0.75, 0.1) );\n\
\n\
var aCols = new Array( \"R\", \"G\", \"B\", \"A\" );\n\
for ( var i=0; i&lt;4; i++ ) {\n\
	oGrid.SetRowLabel( i, \"Vertex \"+i );\n\
	oGrid.SetColumnLabel( i, aCols[i] );\n\
}\n\
oGrid.EndEdit();\n\
\n\
// ** during control creation (for example, in the DefineLayout callback) **\n\
// no convenient method for the grid control\n\
oLayout.AddItem( \"MyGrid\", \"\", siControlGrid );//oItem.SetAttribute(siDecimals, 0 );</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-56D2EC7A-5CF0-4468-979B-1A3A13D6BA56\"></a></span>The underlying <a href=\"#!/url=./si_om/GridData.html\">GridData</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1GridData.html\">GridData</a> parameter is a real instance of a <a href=\"#!/url=./si_om/GridData.html\">GridData</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1GridData.html\">GridData</a> object. All methods and properties available on the <a href=\"#!/url=./si_om/GridData.html\">GridData</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1GridData.html\">GridData</a> object are available dynamically through Logic, using <a href=\"#!/url=./si_om/Parameter.Value.html\">Parameter.Value</a> (from <a href=\"#!/url=./si_om/PPG.Inspected.html\">PPG.Inspected</a>), which returns a <a href=\"#!/url=./si_om/ProjectItemCollection.html\">ProjectItemCollection</a> that you can use to get the particular item\'s parameter and get a pointer to the\n\
               <a href=\"#!/url=./si_om/GridData.html\">GridData</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1GridData.html\">GridData</a> object (see <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_DynamicallyChangingCustomProperties.htm\">Dynamically Changing Custom Properties</a></span>). \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-7F3B67D4-832A-424D-80FA-AF2FB15F68AD\"></a></span>To know more about working with grid controls, see the examples in the documentation\n\
               for the <a href=\"#!/url=./si_om/GridData.html\">GridData</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1GridData.html\">GridData</a> object. \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-30CC36E3-966E-46FF-B225-A543AA8C65AE\"></a></span>The following attributes are available: \n\
            </p><span class=\"anchor_wrapper\"><a name=\"TABLE_5EC9757607724CA3BC5287C26E7F1302\"></a></span><div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col width=\"33.33333333333333%\" align=\"left\" />\n\
                     <col width=\"33.33333333333333%\" align=\"left\" />\n\
                     <col width=\"33.33333333333333%\" align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AD1E1B21-5221-4842-8EE7-5A35C6D95B8B\"></a></span><p class=\"table-heading\">Available on all Controls and also as a property on the PPGItem object: </p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-30DF69BC-E5FD-4E92-8983-DD7B14C2F1E3\"></a></span><p class=\"table-heading\">Common to many Controls: </p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0A58ECA8-3984-4871-9AF8-4181D2AF9B6A\"></a></span><p class=\"table-heading\">Specific to the GridData control: </p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"UL_442C8C1B68E9465286DE8662AC99E50A\"></a></span><ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-5E91601B-D2B8-43CA-9F8F-56D083C761A4\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUILabel</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-EA1705DF-A03F-4A20-9397-88BB632AECAC\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIItems</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-91716389-125F-4A56-AF2C-9E7B28BC92FA\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIType</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-3B53D0C2-87CA-49E5-B944-85C58D1D0518\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIWidthPercentage</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-B07890DF-4D68-4196-B69C-9E6279846BAC\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUILabelPercentage</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-AA2C4F7F-E72E-4477-9EC6-B9BF57355A7C\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUILabelMinPixels</a> \n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"UL_85C60552C6A0434D9CEC8ADC527E89E2\"></a></span><ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-047D6EC6-ED6D-4730-9DE3-9B20CAB255BA\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUINoLabel</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-BEABBA30-2C61-4FFC-ABD7-5C7CFF1EB166\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIValueOnly</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-C585B8ED-CD42-4E5F-A152-4F3E1C03F8EA\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIContinue</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-89F0813D-D087-456B-8B0C-A79222B4AA78\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUICX</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-A2316162-E54E-449B-A3CD-EEFFEDD03DC5\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUICY</a> \n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"UL_AF48041DC6064F7C945A18287891E0DC\"></a></span><ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-C0238973-3D47-4FC1-9D1C-F41C90AE4ACB\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIGridColumnWidths</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-3D5C45B6-8873-43BE-93B5-040FD2B1895F\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIGridLockColumnHeader</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-2147526A-A8C6-4DD3-81A4-71E007FA5AF3\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIGridLockRowHeader</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-3E71B841-CD37-4554-9CC3-5B86A877B058\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIGridHideColumnHeader</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-A58E14DC-5ECF-4AF7-B2C0-A85CAC660FC3\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIGridHideRowHeader</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-2C31EC34-1A67-470F-939C-D88D34A45654\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIGridReadOnlyColumns </a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-75C2F52C-A5D9-4FD6-A084-9B4324A758B2\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIGridSelectionMode </a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-55519FD4-93A5-47A8-B54A-D3CB74DBF7AE\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIGridShowColumns </a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-206D0ABE-CF49-42CF-BDEC-99D354381CB1\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIGridLockRowHeight </a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-D33E263F-4759-4516-B24E-1618DFE6A562\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIGridLockColumnWidth </a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-EF504CBE-089E-4E74-93F3-B6345C7FCDD9\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIGridThumbnailSize </a> \n\
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