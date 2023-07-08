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
      <meta name=\"topicid\" content=\"GUID-4C1EBCA3-982E-4FED-95F6-5DBAB0D195F9\" />\n\
      <meta name=\"indexterm\" content=\"transformation referential mode\" />\n\
      <meta name=\"indexterm\" content=\"preferences: transformation referential mode\" />\n\
      <meta name=\"indexterm\" content=\"user preferences: transformation referential mode\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Manipulation Mode Values</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-4C1EBCA3-982E-4FED-95F6-5DBAB0D195F9\"></a></span><div class=\"head\">\n\
            <h1> Manipulation Mode Values</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-5B9BD2E1-BF43-4885-8DDE-852FC5976063\"></a></span>Possible bitfield values for getting or setting the Manipulation Mode (sometimes called\n\
               <em class=\"mild\">transformation referential mode</em>) through these scripting commands:\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-7180219A-22DA-4F29-8FC8-F8C555D6C97F\"></a></span><a href=\"#!/url=./si_cmds/GetUserPref.html\">GetUserPref</a> (returns a bitfield of these values)\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-E4C60D28-8715-49B3-A1EB-86804E7FEA0D\"></a></span><a href=\"#!/url=./si_cmds/SetUserPref.html\">SetUserPref</a> (pass a bitfield of these <em class=\"strong\">values</em> in the Value argument)\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-91777BF6-256C-4B8B-AF83-AC8D5E83A4B4\"></a></span>SetTransformRefMode (pass either the <span class=\"char_link\"><a href=\"#!/url=./files/dev_components-2.htm#WS0712F8CE7932674FBBDF8F8482ED1B3D-0033\">Major Manipulation Mode</a></span> values or the <span class=\"char_link\"><a href=\"#!/url=./files/dev_components-2.htm#WS0712F8CE7932674FBBDF8F8482ED1B3D-0034\">Manipulation Modifier Flag</a></span> values in the <em class=\"strong\">Mode</em> argument)\n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6602D37A-7831-431A-B93B-BF4A51F9F2B1\"></a></span><p class=\"table-heading\">Value</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-36E00829-7CB6-4A90-BA2B-078E26E933D3\"></a></span><p class=\"table-heading\">Description</p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-832FEB6F-5693-40EA-A7C1-58D1E461FC22\"></a></span><p class=\"table-body\">0</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-84375D8F-1405-46DF-8F3E-63BC44E7690F\"></a></span><p class=\"table-body\">Undefined</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS0712F8CE7932674FBBDF8F8482ED1B3D-0033\"></a></span><p class=\"table-body\"> <em class=\"strong\">Major Manipulation Mode</em> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9EFEDAA7-4F1E-4BCD-B821-BDAA12D08E3C\"></a></span><p class=\"table-body\">0x01</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-310214B2-CDF0-4F9F-A3E7-4A4B7E29B44A\"></a></span><p class=\"table-body\"> <em class=\"strong\">Global mode</em>. Use the scene\'s global axes to perform translation or rotation.\n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CF069CB5-3B7C-4F66-989A-E745F5B84DA1\"></a></span><p class=\"table-body\">0x02</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5594C3CC-175A-4BA5-B6BD-456696E1ED23\"></a></span><p class=\"table-body\"> <em class=\"strong\">Local mode</em>. Use the axes of the object\'s local coordinate system as defined by its center to\n\
                           perform translation, rotation, or scaling.\n\
                        </p> \n\
                        <div><span class=\"anchor_wrapper\"><a name=\"GUID-44DC275A-C619-4AD8-B9CF-1363667BED0B\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-69D0BEA4-83B7-4C9F-A5B1-2AC1ED72FD2E\"></a></span>This is the only major manipulation mode supported for scaling.\n\
                              </p> \n\
                           </div>\n\
                        </div> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B092D33F-3869-44E2-BE10-2770D61EA871\"></a></span><p class=\"table-body\">0x03</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4FA68C8B-6F05-4A1D-A3F3-C8745A6E5915\"></a></span><p class=\"table-body\"> <em class=\"strong\">By Reference mode</em>. Use the X, Y, and Z axes of another element or an arbitrary reference plane to perform\n\
                           translation, rotation, or scaling.\n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-234F0616-9F9C-4589-A876-B517CFCCE364\"></a></span><p class=\"table-body\">0x04</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9822266A-5949-443B-9F4E-0388C3DBC618\"></a></span><p class=\"table-body\"> <em class=\"strong\">View mode</em>. For translations, use the viewing plane of the active 3D view. For rotations, use\n\
                           an axis perpendicular to the viewing plane of the active 3D view.\n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6F1924C8-AAF9-487C-AC19-C5234BE78112\"></a></span><p class=\"table-body\">0x05</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9B87C313-6588-44E6-9426-D730FC7BC583\"></a></span><p class=\"table-body\"> <em class=\"strong\">Depth of Field mode</em>. Manipulation is performed in Depth of Field.\n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DC932E19-CA36-45E4-8E5D-243F8E3826EE\"></a></span><p class=\"table-body\">0x06</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D783FA81-578F-453A-8606-497A168F8D8B\"></a></span><p class=\"table-body\"> <em class=\"strong\">Object Parent mode</em>. Use the axes of the object\'s parent to perform translation or rotation.\n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6584F258-F953-4EDF-959D-E800AB7263B2\"></a></span><p class=\"table-body\">0x07</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6C7B6159-9699-4F22-9085-F9AAE5F7B72D\"></a></span><p class=\"table-body\"> <em class=\"strong\">Plane mode</em>. For translations, lets you drag an object along the XZ plane of another element\n\
                           or an arbitrary reference plane. For rotations, lets you rotate an object using an\n\
                           axis (by default, Y) of another element or an arbitrary reference plane.\n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-46F4ADBC-13F8-47BD-B872-A5922F3FB52D\"></a></span><p class=\"table-body\">0x08</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CB92B891-BE28-4D13-B0BD-86116417997D\"></a></span><p class=\"table-body\"> <em class=\"strong\">Center Pivot mode</em>. If there is no center pivot, this is the same as Object Parent mode (0x06).\n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1EF4DA90-51F9-455B-AE26-D7741A8E4388\"></a></span><p class=\"table-body\">0x0F (15)</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-99BBAB03-0853-4B4F-B940-78BED53A2A15\"></a></span><p class=\"table-body\">Major manipulation mode mask.</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS0712F8CE7932674FBBDF8F8482ED1B3D-0034\"></a></span><p class=\"table-body\"> <em class=\"strong\">Manipulation Modifier Flag</em> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1D8E5122-D241-41BA-B67E-ACBE9AC46E32\"></a></span><p class=\"table-body\">1&lt;&lt;4 (16)</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A2834631-538A-4DFE-B224-3CE6D83D3F04\"></a></span><p class=\"table-body\"> <em class=\"strong\">Center of Geometry</em>. Use the center of geometry (the average position of all points) for translation\n\
                           (affects snapping with multiple objects), rotation (pivot position), and scaling.\n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7BE5F638-6DD5-402F-8D85-E1761EE9C3FB\"></a></span><p class=\"table-body\">1&lt;&lt;5 (32)</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-29E9AD93-E3DF-435B-B61D-290D59C66904\"></a></span><p class=\"table-body\"> <em class=\"strong\">Relative Grid Snap</em>. Activates snapping to grid (allows you to define a global coordinate grid and a\n\
                           camera viewing plane, as well as any arbitrary reference planes for snapping).\n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-204A5774-4FBB-440F-AD79-1BD7940772F9\"></a></span><p class=\"table-body\">1&lt;&lt;6 (64)</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-44C3A9D0-EE1A-49AB-BAE7-01E13FDBBB0F\"></a></span><p class=\"table-body\"> <em class=\"strong\">Additive Rotation</em>. Controls the object\'s local X, Y, and Z rotations as stored relative to its parent.\n\
                           This is especially useful when animating bones and other objects in hierarchies.\n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C49769F1-B0CC-4E59-B596-93F2E4925666\"></a></span><p class=\"table-body\">1&lt;&lt;7 (128)</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9B6CEB65-6660-44A3-98DC-BFAC0DF176F3\"></a></span><p class=\"table-body\"> <em class=\"strong\">Absolute Snap</em>. Activates aboslute snapping (compare with Relative Grid Snap).\n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4BDFDF83-6784-4E85-A237-1852331225E9\"></a></span><p class=\"table-body\">1&lt;&lt;8 (256)</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-91C6D91F-888F-4DE0-8B83-0251BB93CFC3\"></a></span><p class=\"table-body\"> <em class=\"strong\">Uniform Scale</em>. Scales along all active local axes at the same time with a single mouse button.\n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D84AE8B8-408F-4648-9EDF-8827BF6BEA59\"></a></span><p class=\"table-body\">1&lt;&lt;9 (512)</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A2F67BD9-EBBC-4B4F-9508-423F79AEDFA7\"></a></span><p class=\"table-body\"> <em class=\"strong\">View Reference</em>. Activates view reference mode.\n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-159FF3B1-0D64-4E23-80F9-E5F5C5E7E429\"></a></span><p class=\"table-body\">1&lt;&lt;10 (1024)</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0D6EBABC-56DC-4343-8DBF-780EE79E74A0\"></a></span><p class=\"table-body\"> <em class=\"strong\">Volume Scale</em>. Scales along one or two local axes, while automatically compensating the other axes\n\
                           so that the volume of the object\'s bounding box remains constant.\n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3070FDC4-76B2-4B3A-8BFF-29E062AB7064\"></a></span><p class=\"table-body\">1&lt;&lt;11 (2048)</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-676756ED-819E-4F3F-81D6-E10FFD8B1B20\"></a></span><p class=\"table-body\"> <em class=\"strong\">Symmetry</em>. Activates symmetrical manipulation.\n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EFDD5C5B-F3EA-4EF2-964F-FFD8809D7A61\"></a></span><p class=\"table-body\">1&lt;&lt;12 (4096)</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-45D505A7-D968-4DC8-A0A0-74F30B824D45\"></a></span><p class=\"table-body\">Last bit.</p> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";