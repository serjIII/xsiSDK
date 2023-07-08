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
      <meta name=\"topicid\" content=\"GUID-62FCF43E-DFC1-4C63-ABAF-00A17ED6513C\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Managing Workgroups</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-62FCF43E-DFC1-4C63-ABAF-00A17ED6513C\"></a></span><div class=\"head\">\n\
            <h1>Managing Workgroups</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-EB261C4F-6D9D-485E-A28B-FA07502566D7\"></a></span>You use the Plug-in Manager to manage workgroups. The Plug-in Manager updates the\n\
               workgroup path stored in the user preferences. \n\
            </p><span class=\"anchor_wrapper\"><a name=\"TABLE_7AFCDE844C384924975D7F9F4F8A9E75\"></a></span><div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8F325AF6-DBC0-4A6E-BC5F-744BD6A4F633\"></a></span><p class=\"table-heading\">To do this </p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-45E66233-7FF7-45CD-AB6B-431B33856AB0\"></a></span><p class=\"table-heading\">On the Workgroup tab, do this: </p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F62CE01D-743F-40B6-9EAC-A531123EB71E\"></a></span><p class=\"table-body\">Connect to a workgroup </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BADFD9EC-7564-452B-A7D8-398D41BB3F3A\"></a></span><p class=\"table-body\">Choose <span class=\"MenuCascade\" id=\"GUID-9986F1AB-9CF7-4839-B1A3-76770CBE93DC\">File</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-3C1F4BCB-B95F-4F73-962D-EB7547BE90FF\">Connect</span>. Click <span class=\"MenuCascade\" id=\"GUID-5BC8420B-EA0D-4928-BEB1-23027B406D8E\"> <img src=\"../images/GUID-9C395550-4D3B-45D0-BA13-1273A20DD935-low.png\" /> </span> and locate the root folder of a workgroup. Click the root folder and then click <span class=\"MenuCascade\" id=\"GUID-CC9A7524-86E3-4180-A862-57A951646CD8\">Select</span>. \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-8905EA1B-02C9-4264-B724-7D018F0C5F84\"></a></span><p class=\"table-body\">You can also connect to a workgroup from the command line or by using a data file.\n\
                           See <span class=\"char_link\"><a href=\"#!/url=./files/cus_addons_UsingtheCommandLineforInstallingFilesandMore.htm#WS8AD400B78794354E8F5A74BCE7CD86FD-0096\">Setting Your Workgroup from the Command Line</a></span> and <span class=\"char_link\"><a href=\"#!/url=./files/cus_addons_ManagingWorkgroups.htm#WS8AD400B78794354E8F5A74BCE7CD86FD-003F\">Connecting to Workgroups Using a Data File</a></span>. \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9714BC51-E7B7-4001-8D6A-DC299A935F51\"></a></span><p class=\"table-body\">Create a workgroup </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-60005820-E856-455D-A7F5-65292DFB8D18\"></a></span><p class=\"table-body\">Choose <span class=\"MenuCascade\" id=\"GUID-79BCF1B3-6107-40D5-B6A1-706A59363C00\">File</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-CEA98BDB-E084-4A71-A848-A1A7ED0734AF\">Create</span>. \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-C6DC2BDF-AE14-4935-AA1A-30DEF0CBD8B9\"></a></span><p class=\"table-body\">In the <span class=\"MenuCascade\" id=\"GUID-F1F357FA-18FA-42C1-AA5B-091E40756E26\">Workgroup Folder Name</span> box, type a name for the workgroup. \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-8DEFB455-148B-4454-8842-B794B5B12DAF\"></a></span><p class=\"table-body\">In the <span class=\"MenuCascade\" id=\"GUID-2D155142-10EA-4FF8-A007-6F8364F72EA3\">Location</span> box, type a path or click <span class=\"MenuCascade\" id=\"GUID-1028058B-6A51-45B2-90DC-B558C8F77F94\"> <img src=\"../images/GUID-9C395550-4D3B-45D0-BA13-1273A20DD935-low.png\" /> </span> and locate the folder that will contain the workgroup. \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E63C86F7-F794-43FA-A2DE-3DC84A8F5D55\"></a></span><p class=\"table-body\">Change the order of the workgroups (for example, move a workgroup to the top of the\n\
                           list) \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-943B5733-778E-4020-BF8E-2ED7AD7706FD\"></a></span><p class=\"table-body\">Click a workgroup and then click <span class=\"MenuCascade\" id=\"GUID-4988D509-2B7B-4583-9955-54FD53653590\">Move Up</span> or <span class=\"MenuCascade\" id=\"GUID-21380DAA-82EB-4F39-9C59-71F7D240E345\">Move Down</span>. \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EA7027FB-4DF1-4949-AEF5-3B38EDDA0C6A\"></a></span><p class=\"table-body\">Disconnect from a workgroup </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5C9D0EED-C10C-4872-BCAA-9DAC00588033\"></a></span><p class=\"table-body\">Click a workgroup and then choose <span class=\"MenuCascade\" id=\"GUID-9A9986B5-C2EE-48BE-BEA0-3CA6775DCA28\">Selection</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-3D63D9F1-9E54-4556-A01C-AA328EF55DC4\">Disconnect</span>. \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-440531F0-514C-4AB4-BA18-D53B848F5445\"></a></span><p class=\"table-body\">Deactivate (disable) a workgroup </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2270D338-A761-4AB7-906A-5A2D19BE4C5A\"></a></span><p class=\"table-body\">Clear the check box beside the workgroup. </p> <span class=\"anchor_wrapper\"><a name=\"GUID-F8369161-35E6-490B-84A0-257015792B99\"></a></span><p class=\"table-body\">When you deactivate a workgroup, Softimage disconnects from the workgroup but keeps\n\
                           the workgroup in the list of workgroups. \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-E63C89B3-2964-4882-BF0E-D4753647AC8D\"></a></span><p class=\"table-body\">You can also deactivate a workgroup in the Plug-in Tree. In the tree, right-click\n\
                           a workgroup and choose <span class=\"MenuCascade\" id=\"GUID-A73C0BB8-B4CE-4FE7-B770-EDFA15CA185F\">Disable</span>. \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-808B275E-1786-46A6-800A-1A92694800F3\"></a></span><p class=\"table-body\">Activate (enable) a workgroup </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4CABE7C9-F42F-4883-A382-E08DC7D9D0B8\"></a></span><p class=\"table-body\">Click the check box beside the workgroup. </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7E54B5DB-1496-493A-B202-7C11B4CB40F8\"></a></span><p class=\"table-body\">Reload all workgroup customizations and plug-ins </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1C99FD03-94F1-49C3-B883-E96C022D644A\"></a></span><p class=\"table-body\">Choose <span class=\"MenuCascade\" id=\"GUID-34505A0B-A8E4-4FED-8410-2037D2F1F01C\">File</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-56FA3E06-2686-41BB-ACD9-BC1D3BCA1689\">Rescan</span>. \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-3C646FDF-6728-4ADD-B042-F71730CB6E4B\"></a></span><p class=\"table-body\">Softimage rescans all activated workgroups. </p> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-003F\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-77BFBBCC-41B3-4889-8ACE-534FB51687D4\"></a></span>Connecting to Workgroups Using a .wkg File\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-336430A5-A453-4898-B8DD-BBC9F45AB81E\"></a></span>An alternative way of managing workgroups is to store the workgroup paths to which\n\
                  you want to connect in a file (<em class=\"strong\">.wkg</em> extension) and then placing this file in the Data folder of the Softimage installation\n\
                  (factory) location, or the User location. Softimage automatically scans these locations\n\
                  at startup and if one or multiple <em class=\"strong\">.wkg</em> files are found, Softimage will connect to the workgroup path of each entry it finds.\n\
                  \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-8DAB6402-D830-4A5A-9012-CAB318AC726A\"></a></span><em class=\"strong\">.wkg</em> files are simple text files which contain multiple directory paths and can be named\n\
                  any way you want. Each path must be added on a separate line and each line must end\n\
                  with a newline character. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-7B53F947-5D16-4539-8260-1BEA33D6A997\"></a></span>To disconnect from a workgroup: <span class=\"anchor_wrapper\"><a name=\"OL_0EDDD9C10C46411680E9739D87911A40\"></a></span><ol type=\"1\" start=\"1\">\n\
                     <li>On the Workgroups tab of the Plug-in Manager, click on the workgroup to select it\n\
                        in the list. \n\
                     </li>\n\
                     <li>Choose Selection Disconnect. Any plug-ins in the workgroup are unloaded are are no\n\
                        longer available. \n\
                     </li>\n\
                  </ol> \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-A969785B-1B6D-4D60-96BD-8BC45CC97241\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span>Workgroups added through .wkg files can be disconnected by simply removing the .wkg\n\
                        file from the Data folder. \n\
                     </div>\n\
                  </div> \n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";