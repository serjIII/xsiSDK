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
      <meta name=\"topicid\" content=\"GUID-EE4F4D56-2512-4E48-ADF8-A4CD06EEEB7B\" />\n\
      <meta name=\"indexterm\" content=\"custom properties: creating controls: File Browser Widget\" />\n\
      <meta name=\"indexterm\" content=\"File Browser Widget: creating: in a property page\" />\n\
      <meta name=\"indexterm\" content=\"File Browser Widget\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>File Browser Widget</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-EE4F4D56-2512-4E48-ADF8-A4CD06EEEB7B\"></a></span><div class=\"head\">\n\
            <h1> File Browser Widget</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\"><img src=\"../images/GUID-526C57DE-8501-4521-9EC4-2121E0D90BD5-low.png\" /><p><span class=\"anchor_wrapper\"><a name=\"GUID-B51D1CEF-963D-40E9-9FCB-4AB81543FA31\"></a></span>File Browser controls display an editable text box and a file browser widget along\n\
               with an optional label. They are associated to an underlying <em class=\"strong\">String</em> parameter.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-76389E5C-CBE8-4E5C-9DCB-88DB3D835508\"></a></span>Clicking on the file browser widget launches a File Browser which can be used to identify\n\
               a path and filename. When the user clicks OK on the File Browser, it updates the associated\n\
               text box with the selected path and filename.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-EAD1596B-EA28-4960-A647-6AAED677A550\"></a></span>You create them using the <a href=\"#!/url=./si_om/PPGLayout.AddItem.html\">PPGLayout.AddItem</a> or PPGLayout::AddItem method with the <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlFilePath</a> control type enum:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">var oItem = oLayout.AddItem( \"ScriptFile\", \"Script File\", siControlFilePath );</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-967D8CE3-8D2B-455B-87CA-A225C57754C9\"></a></span>Here are some tips and tricks for how to set up some of the special features for file\n\
               browser widget:\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-0D4368A2-5406-4D91-9713-62B21346F6BA\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_FileBrowserWidget.htm#WS34BA39B437A993419C80CAB58E3BEFA1-0059\">To indicate files to Save vs. Open</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-4200F831-DF31-48EF-8FEB-8690C975FCF4\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_FileBrowserWidget.htm#WS34BA39B437A993419C80CAB58E3BEFA1-005A\">To specify a default directory</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-ED79FF50-D6D7-40FE-8F4F-B51A5DBD1480\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_FileBrowserWidget.htm#WS34BA39B437A993419C80CAB58E3BEFA1-005B\">To specify a file extension filter</a></span> \n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-8DAFB925-38E4-48D6-BD0D-A710FF0FBF67\"></a></span>The following item attributes are available:\n\
            </p>\n\
            <div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C59B575D-F03D-44B9-B77F-5F6957687994\"></a></span><p class=\"table-heading\">Available on all Controls also as a property on the PPGItem object:</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B2427182-0374-40FC-ACF9-DDA969CDFB0C\"></a></span><p class=\"table-heading\">Common to many Controls:</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C9A40518-D72C-46D4-AC84-0B4631271368\"></a></span><p class=\"table-heading\">Specific to the File Browser control:</p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> \n\
                        <ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-1383CD9D-3244-4649-ABF6-1F0D1ACC4E31\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUILabel</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-1A050E17-73C1-49FE-9706-2553EE5DC7AA\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIItems</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-CC670E33-F61D-4140-A020-9D97BD48D9D7\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIType</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-0C636FF3-D74C-47F8-B543-53BA031F6158\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIWidthPercentage</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-0EAF680E-6E9A-4ACE-83F5-A149DC2AC966\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUILabelPercentage</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-8F17A3B5-4B76-45A3-B702-E0542DF4EA0A\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUILabelMinPixels</a> \n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> \n\
                        <ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-57A65377-E1D1-4DC9-92AA-637A48736D3F\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUINoLabel</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-712DD89E-1DC1-45D0-A6DE-7013D390DBC7\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIValueOnly</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-9ED419AB-6652-453B-808E-46D4948BE286\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIContinue</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-CC76F1EA-6952-4F88-A4D6-2211FDC7B0FC\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUICX</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-AE24188F-8D59-4093-B4D1-9692C34A61F8\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUICY</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-9239DA7A-F433-4159-8060-0580402160A4\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIStyle</a> \n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> \n\
                        <ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-EB7CE4EB-42FD-4D6F-A124-4FD5756773E3\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIFileFilter</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-E7E12BE4-BBEE-4EB2-8F52-DD7C59E1A33F\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIInitialDir</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-EA3F755E-0DA0-4A17-9B3E-0153DFA2CC65\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUISubFolder</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-53472C80-3FAB-43D7-AD4A-290D549858A9\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIAudioFile</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-832DF968-9574-40CC-AEE3-A89F6B60686E\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIImageFile</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-D934AC1D-3C5C-45BB-A11D-57FC7B925D7D\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIOpenFile</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-8A31DD81-2B8E-442D-B78A-2377C6E4B8FE\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIFileMustExist</a> \n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-0059\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-B90D0B35-C82B-43FC-AF80-46359E02DCCE\"></a></span>To indicate files to Save vs. Open\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-D7991F95-E96F-4E04-BB4E-A82ED2B806D3\"></a></span>By default, the file browser provides the name and location of an existing file (ie.,\n\
                  an Open action). However, if you need a way to get the user to specify the file name\n\
                  and location for a file to write to (Save action), you can set the <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIOpenFile</a> and the <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIFileMustExist</a> attributes to false:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">oItem.SetAttribute( siUIOpenFile, false );\n\
oItem.SetAttribute( siUIFileMustExist, false );</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-005A\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-88361A6A-1B20-4664-924D-6C34E90C9DD5\"></a></span>To specify a default directory\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-D89BAEF6-2BF8-4167-94D6-072F223C1274\"></a></span>You can specify the directory for the browser widget to initially display:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">var path = XSIUtils.BuildPath(\n\
	Application.InstallationPath(siFactoryPath),\n\
	\"Application\", \"Plugins\"\n\
);\n\
oItem.SetAttribute( siUIInitialDir, path );</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-542CF85B-6FE4-4823-AABA-31FB210E9E59\"></a></span>If the path doesn\'t exist, Softimage will use a generic location (eg., the Desktop\n\
                  on Windows) instead of throwing an error.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-005B\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-D336EC41-8EC8-4F6F-BA82-769691112F7A\"></a></span>To specify a file extension filter\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-D1F1E8CF-4F9D-4CA3-A03D-0BD2BED06F29\"></a></span>You can filter the files by any file extension you want with the <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIFileFilter</a> attribute:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">var filterstring = \"Script files (*.js *.vbs *.py)|*.js:*.vbs:*.py|\";\n\
filterstring += \"Source files (*.cpp *.cs)|*.cpp:*.cs|\";\n\
filterstring += \"Text files (*.txt *.text)|*.txt:*.text|\";\n\
filterstring += \"All Files (*.*)|*.*||\";\n\
oItem.SetAttribute( siUIFileFilter, filterstring );</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-D70378FC-FFF1-4B67-B707-B3CEA13262DA\"></a></span>There are also two special attributes that encapsulate all image and audio types:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">oItem.SetAttribute( siUIImageFile, true );</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-CDF5D253-B67D-4579-A607-ECDC9D1BB77F\"></a></span>... and ...\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">oItem.SetAttribute( siUIAudioFile, true );</pre></div> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-5F36B9A6-49E7-4780-BDB0-DE42B4C8767E\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-AAFA152A-E45E-4D9A-81AD-F37702985FE2\"></a></span>If you try to set the <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIFileFilter</a> attribute in addition to the <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIAudioFile</a> and <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIImageFile</a> attribute(s), only the image filter will be used if specified; otherwise only the\n\
                        audio filter will be used. Any custom filter string you specify will be ignored.\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";