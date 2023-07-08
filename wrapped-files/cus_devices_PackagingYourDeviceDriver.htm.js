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
      <meta name=\"topicid\" content=\"GUID-3077D135-3D06-4EEB-9C93-6F5CE5C67A7D\" />\n\
      <meta name=\"indexterm\" content=\"device drivers: packaging\" />\n\
      <meta name=\"indexterm\" content=\"To package a device driver plug-in\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Packaging Your Device Driver</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-3077D135-3D06-4EEB-9C93-6F5CE5C67A7D\"></a></span><div class=\"head\">\n\
            <h1>Packaging Your Device Driver</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-68BC4B25-F73F-4D8B-848B-FB38A3BE6859\"></a></span>To distribute the device driver, you need to create an Add-on package and add your\n\
               files to it. \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F0A002C1-2A24-4CD2-B5B6-4968F6870B42\"></a></span>To share your custom device driver with others, you can package it with its support\n\
               files (if required) in an <span class=\"filePath\" translate=\"no\">*.xsiaddon</span> file for easy deployment. Along with the library or script file containing the implementation\n\
               of the device, you might also want to include any of these files: \n\
            </p><span class=\"anchor_wrapper\"><a name=\"TABLE_7BF781DF37FE4E4FBD806B285BAAD1B8\"></a></span><div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col width=\"33.33333333333333%\" align=\"left\" />\n\
                     <col width=\"66.66666666666666%\" align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3FFFF912-813A-40A0-B727-D25A10528695\"></a></span><p class=\"table-heading\">File Type </p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B5CA9F1F-389C-4B22-AE88-071B886A01AB\"></a></span><p class=\"table-heading\">Description </p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FD40B94C-832A-423B-9266-8C480B0D7F04\"></a></span><p class=\"table-body\">*.xsidevice </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A1FA3BA2-D482-4B02-A8B5-F7C2301FA633\"></a></span><p class=\"table-body\">The device description file. See the following <em class=\"mild\">To package a device driver plug-in</em> section for instructions about how to add this file to your add-on package. \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-85A5B2D3-BCC9-4B7F-BCAB-CA4BC485F936\"></a></span><p class=\"table-body\">*.dll/so file or *.vbs/js/pls/py </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F499842E-DEA7-424F-AB8B-F0D3D6663374\"></a></span><p class=\"table-body\">Any support files (for example, extra libraries) that the device might need to call\n\
                           while running. \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7E66E539-4945-4946-9C1D-2C70F802ECF8\"></a></span><p class=\"table-body\">*.spdl file and/or *.preset file </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EF5993E5-0830-46A3-A967-9DF46E60307B\"></a></span><p class=\"table-body\">If you call a dialog or any custom property page in your implementation that must\n\
                           remain in the scene, you need to provide a SPDL file with the definition and a preset\n\
                           file to create the dialog, or a self-installing custom property. \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-DF628B2D-6DF7-4897-8C13-7E4BED0413ED\"></a></span><p class=\"table-body\">For more information on self-installing properties, see <a href=\"#!/url=./files/cus_ppg.htm\">Custom Properties</a>. \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6CCCCBDF-DA0C-4635-B24D-074524FF28A4\"></a></span><p class=\"table-body\">*.html/htm/chm/hlp (or ReadMe.txt file) </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8A016D00-5B27-463F-AE71-0E42435FACBC\"></a></span><p class=\"table-body\">If you provide a help page (or site), you must package it with the rest of your device.\n\
                           \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-97F66A9F-0C5E-41B1-BB5D-DDBA3E63DDF0\"></a></span><p class=\"table-body\">*.jpg/gif/bmp/ico </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-140C6DD9-AD13-409E-8CB6-6CA7815B3C4D\"></a></span><p class=\"table-body\">Any image files that are required for the dialogs or help pages. </p> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB99CDE6FAF7EBE47995BFF85208422B1-0033\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-A131501A-693C-43E3-85B9-3E690A6A38AC\"></a></span> To package a device driver plug-in\n\
               </h2>  <span class=\"anchor_wrapper\"><a name=\"GUID-7C520811-5B3C-4F9C-8461-F4043F25F345\"></a></span><ol type=\"1\" start=\"1\">\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-02C9EB31-CECD-4C65-AADC-356EAB6A13CE\"></a></span>Select <span class=\"MenuCascade\" id=\"GUID-B4F231A0-82BB-465A-9FBF-5FCC02DD8456\">File <img src=\"../images/ac.menuaro.gif\" /> Add-on <img src=\"../images/ac.menuaro.gif\" /> Package</span>. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-08661938-E2FA-4AFD-B852-D05FEF239111\"></a></span>Click <span class=\"MenuCascade\" id=\"GUID-EDB7B697-E1B7-49F8-87E5-546DD6F079CE\">Others</span> in the <span class=\"MenuCascade\" id=\"GUID-0A9347BA-FC5A-4466-837C-588165D7B20B\">Type</span> list. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-2A85A10C-42BB-4DA1-AE17-BF80C9F04CD6\"></a></span>Click <span class=\"MenuCascade\" id=\"GUID-F6785796-F9D1-4B7B-96FA-073E39CE035C\">Add</span> to select your library file and <span class=\"filePath\" translate=\"no\">.xsidevice</span> file. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-89F69958-F6A2-4804-B99B-2AE6888A9926\"></a></span>In the <span class=\"MenuCascade\" id=\"GUID-915E724D-53EB-4220-ABEC-16747E291685\">Installation Sub-Directory</span> box, specify one of the following paths: \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"UL_F1DDE9BABD1F4CE69CA61ABA4340FC39\"></a></span><ul>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-8FBCAA99-6392-4AFD-BB6B-106EFE848587\"></a></span>For Windows: <span class=\"filePath\" translate=\"no\">Application\\bin\\nt-x86-64</span> \n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-F39D7539-4377-46C8-BC0F-9E7808EFDFBE\"></a></span>For Linux: <span class=\"filePath\" translate=\"no\">Application/bin/linux/x64</span> \n\
                           </p> \n\
                        </li>\n\
                     </ul> \n\
                  </li>\n\
               </ol> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";