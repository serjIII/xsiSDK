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
      <meta name=\"topicid\" content=\"GUID-A10FA29A-C251-450C-9ED1-2A54605D2AE7\" />\n\
      <meta name=\"indexterm\" content=\"add-ons: creating packages\" />\n\
      <meta name=\"indexterm\" content=\"add-ons: packaging\" />\n\
      <meta name=\"indexterm\" content=\"Plug-in Manager: packaging add-ons\" />\n\
      <meta name=\"indexterm\" content=\"add-ons: packaging: with the Plug-in Manager\" />\n\
      <meta name=\"indexterm\" content=\"add-ons: editing packages\" />\n\
      <meta name=\"indexterm\" content=\"add-ons: repackaging\" />\n\
      <meta name=\"indexterm\" content=\"editing add-on packages\" />\n\
      <meta name=\"indexterm\" content=\"modifying add-on packages\" />\n\
      <meta name=\"indexterm\" content=\"add-ons: modifying\" />\n\
      <meta name=\"indexterm\" content=\"packages: modifying add-ons\" />\n\
      <meta name=\"indexterm\" content=\"Plug-in Manager: installing plug-ins\" />\n\
      <meta name=\"indexterm\" content=\"add-ons: installing: plug-ins\" />\n\
      <meta name=\"indexterm\" content=\"plug-ins: installing\" />\n\
      <meta name=\"indexterm\" content=\"customization: installing\" />\n\
      <meta name=\"indexterm\" content=\"install: customizations\" />\n\
      <meta name=\"indexterm\" content=\"install: plug-ins\" />\n\
      <meta name=\"indexterm\" content=\"install: add-ons: via the Plug-in Manager\" />\n\
      <meta name=\"indexterm\" content=\"Plug-in Manager: uninstalling plug-ins\" />\n\
      <meta name=\"indexterm\" content=\"add-ons: uninstalling: plug-ins\" />\n\
      <meta name=\"indexterm\" content=\"plug-ins: uninstalling\" />\n\
      <meta name=\"indexterm\" content=\"customization: uninstalling\" />\n\
      <meta name=\"indexterm\" content=\"uninstall: customizations\" />\n\
      <meta name=\"indexterm\" content=\"uninstall: add-ons: via the Plug-in Manager\" />\n\
      <meta name=\"indexterm\" content=\"install: add-ons: via the Plug-in Manager\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Using the Package Dialogs</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-A10FA29A-C251-450C-9ED1-2A54605D2AE7\"></a></span><div class=\"head\">\n\
            <h1>Using the Package Dialogs</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-191F8B27-389D-4A21-8006-886F19A4B817\"></a></span>The recommended way to package, edit, and install add-ons is through the Plug-in Tree.\n\
            However, you can still use the Package Add-on, Edit Add-on, and Install Add-on dialogs\n\
            to perform those tasks.\n\
         </p>\n\
         <ul>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-FA3A3436-A09A-4CA9-B229-A6173D3B469C\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_addons_UsingthePackageDialogs.htm#WS8AD400B78794354E8F5A74BCE7CD86FD-0080\">Creating Add-on Packages</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-4DBAF3E9-4A41-480C-A61D-50C34E5A79BC\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_addons_UsingthePackageDialogs.htm#WS8AD400B78794354E8F5A74BCE7CD86FD-0085\">Editing Add-on Packages</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-1A7644C8-6FBC-4DC6-B27E-26E9775B562A\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_addons_UsingthePackageDialogs.htm#WS8AD400B78794354E8F5A74BCE7CD86FD-0086\">Installing Add-ons</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-648DC8AF-7890-400C-B2CB-9A64CB54E430\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_addons_UsingthePackageDialogs.htm#WS8AD400B78794354E8F5A74BCE7CD86FD-008A\">Uninstalling Add-ons</a></span> \n\
               </p> \n\
            </li>\n\
         </ul>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-0080\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-1F0CF048-8B7D-4E9D-9553-3A1E8180ACD5\"></a></span> Creating Add-on Packages\n\
            </h2>   \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-473C3AB4-CBE8-47EF-9377-EEDB1B8D325A\"></a></span>The recommended way to create add-on packages is to use the <span class=\"char_link\"><a href=\"#!/url=./files/cus_addons_PackageLocation.htm\">Package Location</a></span> feature.\n\
            </p> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-0081\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-78E89A89-C7E6-4048-860A-ABBC8C9569EC\"></a></span> To package your add-on through the UI\n\
               </h3>   <span class=\"anchor_wrapper\"><a name=\"GUID-F6356ECB-805E-4FFB-9785-E3742FF319EF\"></a></span><ol type=\"1\" start=\"1\">\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-E5FAB892-43B3-476B-9414-47949F3F41E1\"></a></span>Choose <span class=\"MenuCascade\" id=\"GUID-BFCA5B1F-0A2C-4A42-9646-FEEB2DCBF1C6\">File</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-2845C0AE-45AB-4E58-BE27-0AF7AF6A6C47\">Add-On</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-3ED2BEAF-9FD7-46C7-BC46-0C482056FBC8\">Package Location</span>. The Package Location Options window appears.\n\
                     </p> \n\
                  </li>\n\
               </ol>\n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-C54B54D7-8DE5-4CFD-9A38-DC506274A09B\"></a></span> <img src=\"../images/GUID-CDF4B4BA-F986-4143-96F1-1B7EB663C2FE-low.png\" /> \n\
               </p>\n\
               <ol type=\"1\" start=\"2\">\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-778D0285-E4CA-4F42-8538-0B7405E3FE86\"></a></span>Click the file browser widget <img src=\"../images/GUID-CA12E479-81AE-48EF-ABA8-5CC88D61B75C-low.png\" /> next to the <span class=\"MenuCascade\" id=\"GUID-74F38AC9-371B-487F-8865-1D686970A8BB\">Source</span> text box to select the root folder of your add-on.\n\
                     </p> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-2ADC03F3-D7DC-4DD0-8D5D-A0A4A698E034\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-4A20C37B-365B-42B9-A48C-363D6AF451E7\"></a></span>You can only specify a folder contained inside your $user or $workgroup Addon folder.\n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-9F84367D-F488-4526-A16E-0167A2478CCC\"></a></span>Click the file browser widget <img src=\"../images/GUID-CA12E479-81AE-48EF-ABA8-5CC88D61B75C-low.png\" /> next to the <span class=\"MenuCascade\" id=\"GUID-B9DF0825-8A9D-4793-8F5E-5BD1A8522CE9\">Destination</span> text box to specify the filename of your add-on package.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-6043823D-EAC7-458D-98BF-2B26BE8CD0AC\"></a></span>Fill in any information you want to associate with this add-on, and click <span class=\"MenuCascade\" id=\"GUID-A2B65691-23FB-4B1E-B35F-C0CABF1382B4\">OK</span> to close the window.\n\
                     </p> \n\
                  </li>\n\
               </ol> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-0BF12E34-AE95-4D38-A4B6-04B097A74EE9\"></a></span>A message will appear in the log window of the script editor reporting on the success\n\
                  or failure:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// INFO : looking for &lt;userpath&gt;\\Addons\\XYZ_IK\\IKsolver.dll\n\
// INFO : looking for &lt;userpath&gt;\\Addons\\XYZ_IK\\IKsolver.html\n\
// INFO : Packaging: &lt;userpath&gt;\\Addons\\XYZ_IK\n\
// INFO : Destination: &lt;userpath&gt;\\XYZ_IK.xsiaddon\n\
// INFO : Packaging of 2 files complete (0.107 seconds)</pre></div> \n\
            </div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-0085\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-B4258BB7-D632-4D5C-B6E9-083BD7E8F5B6\"></a></span>Editing Add-on Packages\n\
            </h2>       \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-ABF50AEA-34F1-44F3-A79E-075980150B06\"></a></span>The recommended way to edit an add-on package is to use the <span class=\"char_link\"><a href=\"#!/url=./files/cus_addons_PackageLocation.htm\">Package Location</a></span> feature to repackage the modified Add-on directory.\n\
            </p> \n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-7E431656-6DE6-493A-A594-C38467A3E9D8\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-FC1828B2-8E58-48E9-B2CE-1BB35BDC4C3C\"></a></span>Before you can edit an add-on package you need to have all its elements on your machine.\n\
                     If you try to edit the package when you are missing its components, an error message\n\
                     appears and the missing components do not appear in your add-on package.\n\
                  </p> \n\
               </div>\n\
            </div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-0086\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-30054DEC-4702-4D26-9B9E-2CADA79C2301\"></a></span>Installing Add-ons\n\
            </h2>       \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-15EC521B-EE3D-4BF9-BD33-AF0558D003EF\"></a></span>The workflow for installing and uninstalling add-ons is the same for single add-ons\n\
               like toolbars or keyboard maps, as it is for more involved add-ons, such as a shader,\n\
               with compiled library files, and a help file.\n\
            </p> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-E314F7D1-CCA2-4977-8518-F323E09A0D04\"></a></span>You can install add-on packages in the user, factory, or workgroup locations. To install\n\
               an add-on, you need to select the .xsiaddon file from a file browser window.\n\
            </p> \n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-C791399C-5FA9-491F-B25D-15CE7191CA30\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-FFDB9BAD-7E0E-4940-86B2-08BEF908D656\"></a></span>Since the workgroup path can actually contain several paths separated by semicolons\n\
                     (for example <span class=\"filePath\" translate=\"no\">\\bob\\wkg1;\\jill\\wkg2;\\lucie\\wkg3</span>), installing an add-on to the workgroup location installs it in the first available\n\
                     workgroup location (in this example, <span class=\"filePath\" translate=\"no\">\\bob\\wkg1</span>).\n\
                  </p> \n\
               </div>\n\
            </div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-0087\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-FEBC9E78-9443-478E-8347-05CE9244ED05\"></a></span> To install your add-on\n\
               </h3>  <span class=\"anchor_wrapper\"><a name=\"GUID-99022D30-6FB2-4BC9-97FC-E66F589ED180\"></a></span><ol type=\"1\" start=\"1\">\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-7D1469CF-53B9-4DF7-8EC4-333D42042017\"></a></span>Choose <span class=\"MenuCascade\" id=\"GUID-636A24A5-17E3-4099-B2B6-15503FCD2E0E\">Add-On</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-C5391F3A-4D0E-4EA7-A04D-B2C494F58667\">Install</span> from the <span class=\"MenuCascade\" id=\"GUID-26365F5D-C08E-46CF-A467-5EB27298B09B\">File</span> menu. The Install Add-On window appears.\n\
                     </p> <img src=\"../images/GUID-6AF4296B-CB0B-45C7-AB83-EEA3DCD367B2-low.png\" /> \n\
                     <div class=\"table_Ruled\">\n\
                        <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                           <colgroup>\n\
                              <col align=\"left\" />\n\
                              <col align=\"left\" />\n\
                           </colgroup>\n\
                           <tr class=\"ruledOddRow\">\n\
                              <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-78347623-E5AF-454A-85BC-8AB13BD0E9A3\"></a></span><p class=\"table-body\"> <em class=\"strong\">A</em> \n\
                                 </p> \n\
                              </td>\n\
                              <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EEE90DBD-0D09-4923-8B48-9D9082954362\"></a></span><p class=\"table-body\">File type selection list</p> \n\
                              </td>\n\
                           </tr>\n\
                           <tr class=\"ruledEvenRow\">\n\
                              <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AEB62298-E5A3-40FC-87C2-8028210259CA\"></a></span><p class=\"table-body\"> <em class=\"strong\">B</em> \n\
                                 </p> \n\
                              </td>\n\
                              <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-61E666F3-1F31-43D7-8794-212A166229A3\"></a></span><p class=\"table-body\">Main selection box</p> \n\
                              </td>\n\
                           </tr>\n\
                           <tr class=\"ruledOddRow\">\n\
                              <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-25666B86-D94E-4F28-80C5-D4E16C44FB66\"></a></span><p class=\"table-body\"> <em class=\"strong\">C</em> \n\
                                 </p> \n\
                              </td>\n\
                              <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-29EAB631-6498-42EA-853B-F58C86DF6F60\"></a></span><p class=\"table-body\">Browse button</p> \n\
                              </td>\n\
                           </tr>\n\
                        </table>\n\
                     </div> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-CB43F968-C32D-4E7B-86B3-34E32064814F\"></a></span>Click the <span class=\"MenuCascade\" id=\"GUID-058C3E1E-A4E6-4868-B702-A0E8B7A2ABF4\">Browse</span> button beside the <span class=\"MenuCascade\" id=\"GUID-93B9B30F-7096-4595-A96B-8F54CF020D1D\">Filename</span> text box. A file browser appears.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-2D7F9567-F7D9-4459-95F8-11518713B64A\"></a></span>Select the .xsiaddon file you want to install from the file browser. The package items\n\
                        appear in the main selection box on the Install Add-On window.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-A66B871F-638A-4C12-9BF3-0D3CE52BF2EA\"></a></span>From the file <span class=\"MenuCascade\" id=\"GUID-5A8217BF-386C-4324-867B-D8FC0E307F8D\">Type</span> selection list, click the kind of the file (for example, layout, preset, or library)\n\
                        you want to include in your installation. A list of files matching the type you selected\n\
                        appears in the main selection box.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-C947A523-C2AD-466D-9ACC-C487D36AFB04\"></a></span>You can click the check box to the left of each file to toggle between including and\n\
                        excluding it from the installation. By default, all files are checked.\n\
                     </p> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-5905D68D-23F3-48A1-AB62-49EBFD9A77E9\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-A8C55DF1-E44B-4F95-A09A-8086FF2E09F6\"></a></span>In some cases you cannot select or deselect individual items that are dependents of\n\
                              another item.\n\
                           </p> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-1BFEC6A9-186F-43B5-A049-A0FE98869419\"></a></span>You can also use the <span class=\"MenuCascade\" id=\"GUID-D8A922FB-545D-47A5-A1C8-DF1644722BB5\">Select All</span> button if you want to select every add-on file type available.\n\
                           </p> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-942F98A4-A482-4BAD-9B96-EF2FF7E4E4B7\"></a></span>Alternatively, use the Select <span class=\"MenuCascade\" id=\"GUID-5A2BC07E-D376-423F-B0A8-4FBFAA40F77F\">None button</span> to remove every add-on file from your selection.\n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-681B916A-92A9-4DAE-8F6C-268048141361\"></a></span>Click <span class=\"MenuCascade\" id=\"GUID-32B90036-CF0E-4569-AE36-CFBD043B1D11\">Install</span>. If the add-on manager detects items that already exist on your system, a message\n\
                        box pops up for each item asking if you want to overwrite it.\n\
                     </p> <img src=\"../images/GUID-A9A3CB50-B6F0-4805-857C-8DA3544CFBC4-low.png\" /> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-20AC277F-7706-4280-8A44-41C1BD74882A\"></a></span>Click Yes to replace the existing item or No to skip it. When each item has either\n\
                        been successfully installed or skipped, the Install Add-On window closes.\n\
                     </p> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-B2A66EA3-911F-4C5F-94D3-A1F4EF6A3A7A\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-090FB31B-5F22-469E-BAC1-074DDFDC5D72\"></a></span>The contents of the .xsiaddon file are installed to the factory, user, or workgroup\n\
                              folder, depending on what you specified in User <span class=\"MenuCascade\" id=\"GUID-43917E51-3718-4612-A42F-F2D18ED33998\">Preferences</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-5983CB51-795A-43CC-99EC-01209A394D0F\">Data Management</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-74734A5F-CACC-4890-8CC3-514F7242E9D1\">Application Data Path</span>.\n\
                           </p> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-2248BD86-96E6-4754-8202-5D6D69B9CF07\"></a></span>If Softimage cannot find a folder for presets in this location, the presets will be\n\
                              copied to the $user folder.\n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                  </li>\n\
               </ol> \n\
            </div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-008A\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-AA9D7831-74D9-470B-BF75-9E480BB7F5AE\"></a></span>Uninstalling Add-ons\n\
            </h2>       \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-B40BCF96-8769-4948-ADE4-1B593FC40748\"></a></span>To uninstall an add-on, you need to select an .xsiaddon file.\n\
            </p> \n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-97405D5B-26A5-4075-8C32-FD75B122510B\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-C0130B80-A5B3-429F-9135-64B0B696E6BE\"></a></span>You cannot uninstall the individual components of the add-on files. The entire .xsiaddon\n\
                     file and its components will be removed.\n\
                  </p> \n\
               </div>\n\
            </div> \n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-FA1A2FA9-E999-463F-A146-242DCE9250D7\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-9A0EE7BE-7332-48F6-A1E8-3991D03C3DFD\"></a></span>If you uninstall an add-on containing a shader that was applied in the current scene,\n\
                     you must restart Softimage before continuing to avoid unpredictable behavior. You\n\
                     do not need to restart Softimage if the add-on you are uninstalling does not contain\n\
                     a shader plug-in.\n\
                  </p> \n\
               </div>\n\
            </div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-008B\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-FFB885F8-5C1B-4CE4-9761-2362BC7CD707\"></a></span> To uninstall your add-on\n\
               </h3>  <span class=\"anchor_wrapper\"><a name=\"GUID-DAD2FC14-BC32-48BD-A696-BF5AB4123F07\"></a></span><ol type=\"1\" start=\"1\">\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-5CA22EAF-D0ED-46A7-BF10-07C6DC592C04\"></a></span>Choose <span class=\"MenuCascade\" id=\"GUID-32DD5949-AD14-4930-BA77-527923A7FC61\">Add-On</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-98728EEE-89F3-456C-9FFE-6B3F59CAC501\">UnInstall</span> from the <span class=\"MenuCascade\" id=\"GUID-54B7258B-3ED0-40C8-A39E-9C2053A13FE9\">File</span> menu. The UnInstalling Add-Ons window displays each add-on file separated into three\n\
                        columns: Name, Location, and File Path.\n\
                     </p> <img src=\"../images/GUID-61C3C8AE-8413-4D7B-9AB0-0F2D1CBB8A88-low.png\" /> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-EA266F71-17F9-4E9A-BA35-BAEC75B3F619\"></a></span>Select the file you want to uninstall. The current location (User Add-on, Factory\n\
                        Add-on, or Workgroup Add-on) of each add-on appears in the Location column, and the\n\
                        full path and filename appear under the File Path column.\n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-D0F4DEBD-37D1-4682-BF95-3C13C878263D\"></a></span>You can access the information saved with an add-on package by selecting the .xsiaddon\n\
                        file from the Name column and clicking <span class=\"MenuCascade\" id=\"GUID-6C306E3D-42E0-4FA6-B2AA-D212206D94F5\">Properties</span>.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-AA87033F-3EC3-4495-86FF-664FF0D536AA\"></a></span>Click <span class=\"MenuCascade\" id=\"GUID-791781AD-5B0F-429F-B672-18D7BBFFEAA8\">Uninstall</span> to remove the add-on from Autodesk Softimage. A dialog box appears asking you to\n\
                        confirm the removal of the add-on package.\n\
                     </p> <img src=\"../images/GUID-1484724E-F308-4EF0-8A47-FC8023ABBF92-low.png\" /> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-365FB9C4-CA42-4218-BE97-AF165082A45A\"></a></span>Click <span class=\"MenuCascade\" id=\"GUID-21E787C5-4E8B-4AB1-980B-E54BF7B28E2E\">Yes</span> to proceed with removing the add-on package. All files that were installed with the\n\
                        add-on disappear from the UnInstalling Add-Ons window and are removed from your machine.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-16EA4AA9-6ABF-4878-9570-A95095DB6B86\"></a></span>When you have finished removing all the add-ons you want from your machine, click\n\
                        <span class=\"MenuCascade\" id=\"GUID-29A6CD3A-7E62-4A6C-86D1-2910B6945CF0\">Done</span> to close the window.\n\
                     </p> \n\
                  </li>\n\
               </ol> \n\
            </div> \n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";