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
      <meta name=\"topicid\" content=\"GUID-0E24C953-AC6C-4BBB-B9A0-2F51090BAA5D\" />\n\
      <meta name=\"indexterm\" content=\"add-ons: legacy add-ons (location)\" />\n\
      <meta name=\"indexterm\" content=\"legacy add-ons: installation location\" />\n\
      <meta name=\"indexterm\" content=\"install: legacy add-ons (location)\" />\n\
      <meta name=\"indexterm\" content=\"Plug-in Manager: working with: plug-ins\" />\n\
      <meta name=\"indexterm\" content=\"Plug-in Manager: working with: toolbars\" />\n\
      <meta name=\"indexterm\" content=\"Plug-in Manager: working with: add-ons\" />\n\
      <meta name=\"indexterm\" content=\"Plug-in Manager: Softimage command prompts (opening)\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <meta name=\"keywords\" content=\"<AddonName&gt;\" />\n\
      <meta name=\"keyword\" content=\"<AddonName&gt;\" />\n\
      <title>Working with the Plug-in Tree</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"Application\", \"si_cpp/classXSI_1_1Application.html\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-0E24C953-AC6C-4BBB-B9A0-2F51090BAA5D\"></a></span><div class=\"head\">\n\
            <h1>Working with the Plug-in Tree</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-2D3E2544-D55C-45F9-A6B0-18A449E7E9B5\"></a></span>The Plug-in Tree is a hierarchical view of the plug-ins installed in Softimage. The\n\
               tree lists the plug-ins, toolbars, views, and add-ons found in various locations on\n\
               the file system: \n\
            </p><span class=\"anchor_wrapper\"><a name=\"UL_E345A50E1E2E47988C5621151476A587\"></a></span><ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-7F70FC72-3AA6-4FCD-A561-2B3686204F21\"></a></span>User Root, which is the location of the user\'s personal customizations (for example,\n\
                     <span class=\"filePath\" translate=\"no\">C:\\users\\tamu\\Softimage\\Softimage_<span class=\"charspan-msgph\" translate=\"no\">2015</span></span> or <span class=\"filePath\" translate=\"no\">~/Softimage/Softimage_<span class=\"charspan-msgph\" translate=\"no\">2015</span></span>). \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-224A110F-E7D5-4648-9B92-E4871CA470D0\"></a></span>Factory Root, which is the location of the plug-ins shipped with Softimage (for example,\n\
                     <span class=\"filePath\" translate=\"no\">C:\\Softimage\\Softimage_<span class=\"charspan-msgph\" translate=\"no\">2015</span></span>). \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-7FA8DF21-E6C6-44A4-A022-CB00443E07B5\"></a></span>Workgroups \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-AF7BA4C8-45B9-4299-A3CE-3DB46C4D11FC\"></a></span>Custom locations, which are locations specified by the <span class=\"code\" translate=\"no\">XSI_PLUGINS</span> environment variable \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-F393B221-9F0A-4A0A-8B22-B74028BB1BCD\"></a></span>Folder locations of plug-ins loaded after Softimage starts up (for example, plug-ins\n\
                     loaded manually from the Plug-in Manager) \n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-0EAA0BFD-5E76-4C2A-8C8F-5B1CF9829302\"></a></span>The Plug-in Tree provides a focused view of the plug-ins installed in Softimage. The\n\
               tree does not show every file and folder in every location; instead, the tree provides\n\
               a higher-level view. For example, the tree lists the plug-ins and plug-in items (such\n\
               as commands, operators and properties), not the individual source files that contain\n\
               the plug-in implementations. \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-16F7C2EE-A355-4C42-8AAE-62BE9C273F30\"></a></span>However, when you need access to the file system, you can open Softimage command prompts,\n\
               Softimage file browsers, and Microsoft Explorer windows from the Plug-in Tree. \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-21545929-9048-498F-9B3B-15CD63B83AB1\"></a></span>The Plug-in Tree allows you to edit, create, and manage plug-ins and other customizations.\n\
               For example, you can create commands, operators and properties using wizards, load\n\
               and unload plug-ins, install add-ons, create new toolbars, drag commands to the toolbars,\n\
               and drag plug-ins from one location to another. \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-E0FA36E2-7D05-4C61-AAC2-1619367CFD69\"></a></span>To perform actions in the Plug-in Tree, you either use the command buttons (such as\n\
               File and Selection) at the top of the Plug-in Tree tab, or you can right-click nodes\n\
               in the tree to display context menus. \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-081BBCB2-9D97-4091-BF90-1CD8165F108D\"></a></span> Legacy addons are addons are not installed in these workgroup folders: \n\
            </p><span class=\"anchor_wrapper\"><a name=\"UL_6BC02FF582F24F95BF1A840B444CD750\"></a></span><ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-D3889555-6345-4055-9B9B-687D76C55E2E\"></a></span> <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"Application\" class=\"a_multireflink\">Application</a>\\Plugins</span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-F0F58E6B-B014-45C0-9808-35B8AF760520\"></a></span> <span class=\"code\" translate=\"no\">Addons\\<span class=\"keyword\">&lt;AddonName&gt;</span>\\<a href=\"javascript:void(0)\" data=\"Application\" class=\"a_multireflink\">Application</a>\\Plugins</span> \n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-AE0292B1-62C0-4AF7-AAE8-18D9A2875A08\"></a></span>For example, if an add-on installs files in the folder <span class=\"code\" translate=\"no\">MyWorkgroup\\Addons\\<a href=\"javascript:void(0)\" data=\"Application\" class=\"a_multireflink\">Application</a>\\Plugins</span>, that add-on will appear under Legacy Addons in the plug-in tree. \n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-002C\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-0E0B5D2F-845C-4300-B516-AF52185FAFF6\"></a></span>Plug-in Tree Command Buttons\n\
               </h2> <span class=\"anchor_wrapper\"><a name=\"TABLE_0F5972B1FC0D4A83B60A0E6E601DFBC8\"></a></span><div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col />\n\
                        <col />\n\
                     </colgroup>\n\
                     <tr class=\"ruledHeading\">\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F8F20729-13CA-46AD-A298-39016ADA695A\"></a></span><p class=\"table-heading\">Button </p> \n\
                        </th>\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F9477EAA-4692-4588-A376-5142A1BAD908\"></a></span><p class=\"table-heading\">Description </p> \n\
                        </th>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E1FA3863-45F1-4B13-A5CD-97A155FE8DE1\"></a></span><p class=\"table-body\">File </p> \n\
                        </td>\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BEC96026-0B42-4A92-B5BE-AD821E3984AC\"></a></span><p class=\"table-body\">Provides general-purpose commands that apply to all plug-ins or to the Plug-in Tree\n\
                              as a whole. \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"UL_7AC53F5EFB614C33AA9351C048E9FC6F\"></a></span><ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-4DA5F0BE-89C0-4098-991D-A0F81A4B0C5A\"></a></span> <span class=\"MenuCascade\" id=\"GUID-AF55DB9E-D29D-4081-B79F-ECA9DFE28D51\">File</span> <img src=\"../images/ac.menuaro.gif\" /> <span class=\"MenuCascade\" id=\"GUID-8D707587-C747-4D11-A64D-9A37C7A7A180\">New</span> provides access to wizards for creating plug-ins, shaders, and toolbars. By default,\n\
                                    the wizards create the plug-ins in the User location. \n\
                                 </p> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-EA998A31-401D-4A73-9FB8-37DBC109CB02\"></a></span>To create a plug-in in a specific location, expand the location in the tree, right-click\n\
                                    the Plug-ins folder, click New, and choose the type of plug-in you want to create.\n\
                                    \n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-7A2E1CFD-F6C4-4DCB-9F98-D9480D8F53C3\"></a></span> <span class=\"MenuCascade\" id=\"GUID-789C9C08-C5A9-4B33-950B-CF45093DBF25\">File</span> <img src=\"../images/ac.menuaro.gif\" /> <span class=\"MenuCascade\" id=\"GUID-C0314424-1D13-4799-A5FC-18D73DAA44AD\">Load Plug-in</span> opens a browser that allows you to locate and load plug-ins. \n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-2F4F0456-8827-40DA-A226-DCD443DA2905\"></a></span> <span class=\"MenuCascade\" id=\"GUID-6C5F3BB2-3B95-4FA1-9DD1-8CDB2707AFEF\">File</span> <img src=\"../images/ac.menuaro.gif\" /> <span class=\"MenuCascade\" id=\"GUID-29CCDBDC-6352-4626-8631-32CD660824A6\">Update All</span> reloads all self-installing plug-ins. \n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-B6645A30-A09D-4289-9E51-FA57BAF77B01\"></a></span> <span class=\"MenuCascade\" id=\"GUID-948F6022-65E3-4DB5-853A-7007CAD2F313\">File</span> <img src=\"../images/ac.menuaro.gif\" /> <span class=\"MenuCascade\" id=\"GUID-B8BA8C8C-1CD2-4BD5-84A0-76AFA8FFBF27\">Show Errors</span> expands the Plug-in Tree to show the plug-ins that caused errors during loading.\n\
                                    \n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-4D9B71EB-3E92-4330-9A40-8E3B533B5713\"></a></span> <span class=\"MenuCascade\" id=\"GUID-D5B10CE7-87E8-4F73-8D02-4372CCF97154\">File</span> <img src=\"../images/ac.menuaro.gif\" /> <span class=\"MenuCascade\" id=\"GUID-944A6E3F-8F29-4C6F-8AF5-74FCDCE38216\">Preferences</span> allows you to configure how Softimage resolves conflicts when it finds multiple copies\n\
                                    of the same plug-in, and what information is displayed in the Plug-in Tree \n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-65BEA2ED-737B-4032-991A-2222DD975622\"></a></span><p class=\"table-body\">Selection </p> \n\
                        </td>\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E5AA57CB-4511-4DCC-A748-44FD5419F20C\"></a></span><p class=\"table-body\">Provides commands that apply to the currently selected node in the Plug-in Tree. </p> <span class=\"anchor_wrapper\"><a name=\"GUID-ED06ABFE-92FA-4481-851A-28D0C6B5FCD1\"></a></span><p class=\"table-body\">You can access the same commands by right-clicking a node in the tree. For example,\n\
                              to create a new toolbar in a workgroup, right-click the Toolbars folder and then choose\n\
                              <span class=\"MenuCascade\" id=\"GUID-48A85C8A-9023-42B9-9199-4330846853CE\">New</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-4E7A876E-1B65-48D0-B98C-B368231B30EC\">Toolbar</span>. \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9F32048B-6CF6-43F7-9B50-34CED52CA7A6\"></a></span><p class=\"table-body\">Load </p> \n\
                        </td>\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-33D377E0-98A9-4AA6-9900-42D8CD140777\"></a></span><p class=\"table-body\">Loads a self-installing plug-in. </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FF53F135-9E27-4323-8C1F-69C3CDDDF1B0\"></a></span><p class=\"table-body\">Update All </p> \n\
                        </td>\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9AA394F9-5931-4867-802B-33D377075FF1\"></a></span><p class=\"table-body\">Reloads all self-installing plug-ins. </p> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-002D\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-A745C305-4459-41B6-A6F4-8ED5B06F3105\"></a></span> Working with Plug-ins\n\
               </h2>  <span class=\"anchor_wrapper\"><a name=\"TABLE_1227006324134FC2845F2B85282FF11A\"></a></span><div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col />\n\
                        <col />\n\
                     </colgroup>\n\
                     <tr class=\"ruledHeading\">\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3CB12791-B261-4848-AC9E-CC93DFBBB240\"></a></span><p class=\"table-heading\">To do this </p> \n\
                        </th>\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-614CA2E4-4BE6-497E-8B2C-0DE4080E7BAE\"></a></span><p class=\"table-heading\">Do this </p> \n\
                        </th>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5028C37C-5DC9-4516-A238-C4BB7EAF8520\"></a></span><p class=\"table-body\">Create a self-installing plug-in </p> \n\
                        </td>\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9738D805-5705-471D-92C1-BB258F8DE719\"></a></span><p class=\"table-body\">In the Plug-in Tree, expand a location (such as a workgroup or an Add-on directory)\n\
                              and right-click the Plugins folder. Click New and choose the type of plug-in you want\n\
                              to create (Command, Operator, Property, or Event). \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-28F3D120-47B0-4C38-A171-66DDD639CA70\"></a></span><p class=\"table-body\">Choose <span class=\"MenuCascade\" id=\"GUID-B7C1C0AB-059B-4C89-BD1F-2778436BA502\">New</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-92810DDF-E49D-4AA8-8CC3-2224C3917442\">Empty Plug-in</span> if you want to create a different type of plug-in, such as a filter. \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-56ADE7B4-3A0E-48FD-BF94-BCA3529C5DF9\"></a></span><p class=\"table-body\">Edit a self-installing plug-in </p> \n\
                        </td>\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E80D833C-2B94-4F18-BE6A-1B6EF39B85E9\"></a></span><p class=\"table-body\">Do one of the following: </p> <span class=\"anchor_wrapper\"><a name=\"UL_708C31B7BAC54B009F88381B5223DB05\"></a></span><ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-9816C009-F994-4C2B-9A1C-7B9D40C442A6\"></a></span>Right-click a plug-in and choose <span class=\"MenuCascade\" id=\"GUID-1AC17AB6-8C7C-4A20-9154-DC403AC9EB29\">Edit</span>. \n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-39525725-2011-4A2F-AE21-EF93665069AE\"></a></span>Drag the plug-in to a script editor. \n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B8628A61-770D-4C6E-A11F-2FC57558C811\"></a></span><p class=\"table-body\">Run a command </p> \n\
                        </td>\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-04F17F93-72AB-48AC-97D4-5B35C420CA0E\"></a></span><p class=\"table-body\">Expand a plug-in, right-click the custom command, and choose <span class=\"MenuCascade\" id=\"GUID-2FB6EF8E-0489-4D58-8B61-3A1B519FD58A\">Invoke &lt;Command-Name&gt;</span>, where &lt;Command-Name&gt; is the actual name of the command. \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-249AF848-FFDB-4F48-8DA9-AC0DCED90BE1\"></a></span><p class=\"table-body\">Create a property </p> \n\
                        </td>\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7D41E18C-E992-4B56-96AC-7CD6E47F9758\"></a></span><p class=\"table-body\">Expand a plug-in, right-click the property, and choose <span class=\"MenuCascade\" id=\"GUID-F0FAAD92-3815-48A5-B410-652B3D039B66\">Create Property</span>. This adds the custom property to the scene root and opens the property page. \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-002E\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/cus_addons_WorkingwiththePluginTree.htm\">Unload a plug-in</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E3238ECE-65EC-48ED-9858-8BF5E3A0037A\"></a></span><p class=\"table-body\">Right-click the plug-in and choose <span class=\"MenuCascade\" id=\"GUID-893A5C01-816E-41FC-98C8-D3E2398493FD\">Unload</span>. \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-CE443FEE-E333-47AA-821D-A4409A2546D6\"></a></span><p class=\"table-body\">To load the plug-in again, you have to click <span class=\"MenuCascade\" id=\"GUID-0C1FD3CD-57F1-408F-A614-082C24DD47E1\">Load</span> or <span class=\"MenuCascade\" id=\"GUID-630648A2-5ED4-4536-ADE7-01B3D15F3D57\">Update All</span>, or use the <span class=\"MenuCascade\" id=\"GUID-517F1EF7-F599-4297-AE1E-F574D3356DF1\">LoadPlugin</span> command. If the plug-in is in a workgroup, you could disable and then re-enable the\n\
                              workgroup (rescanning the workgroups reloads <span class=\"MenuCascade\" id=\"GUID-4FA743D9-7F6C-4EF7-9E7B-EEF1B446F269\">all</span> workgroups). \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-002F\"></a></span><p class=\"table-body\"> Update a plug-in </p> \n\
                        </td>\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-82E8B8AE-21BC-488E-9C2B-33A16D13129A\"></a></span><p class=\"table-body\">Right-click the plug-in and choose <span class=\"MenuCascade\" id=\"GUID-DBAA21BF-A5E8-4E55-AB8B-798168248320\">Update</span>. This unloads and reloads the plug-in. \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D8DAB20B-D7CD-4CC2-BBB6-53B7DF0ABAAA\"></a></span><p class=\"table-body\">Delete a plug-in </p> \n\
                        </td>\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FBA7CDD6-DCD1-4D27-9A78-070880AEE8A1\"></a></span><p class=\"table-body\">Right-click the plug-in and choose <span class=\"MenuCascade\" id=\"GUID-36CA3D34-11EF-491F-A68A-B63D4614DB79\">Delete</span>. \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-0030\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/cus_addons_WorkingwiththePluginTree.htm\">Cached</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A9DC2607-A2F4-4C06-A8BF-912AC91BBDEF\"></a></span><p class=\"table-body\">Right-click the plug-in and click <span class=\"MenuCascade\" id=\"GUID-F4161553-30B4-4F26-BFCC-EC47CE42BE6E\">Cached</span> to clear the check mark. \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-0031\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-B60AD307-3D47-4019-920F-E22385262D84\"></a></span> Working with Toolbars\n\
               </h2>  <span class=\"anchor_wrapper\"><a name=\"TABLE_8B343E18DCFB418EBE77E41C0F7F06E9\"></a></span><div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col />\n\
                        <col />\n\
                     </colgroup>\n\
                     <tr class=\"ruledHeading\">\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BF620182-903F-4D3D-9D4F-3CA1987A8FD2\"></a></span><p class=\"table-heading\">To do this </p> \n\
                        </th>\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4A790903-F066-4316-A78B-2A714EE43591\"></a></span><p class=\"table-heading\">In the Plug-in Tree, do this </p> \n\
                        </th>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8E9A5F22-D712-4F96-8A49-0483532D1607\"></a></span><p class=\"table-body\">Create a toolbar </p> \n\
                        </td>\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DD491898-917C-4A5D-AABF-F3EEA6820290\"></a></span><p class=\"table-body\">Expand a location (such as a workgroup or an Add-on directory) and right-click the\n\
                              Toolbars folder. Choose <span class=\"MenuCascade\" id=\"GUID-890E9848-6B21-4D52-B212-3A180B0E9BFB\">New</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-83355F43-419E-4F7F-A99F-4BC8069173CA\">Toolbar</span>. \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B6E109DE-1863-449E-8385-E8F95BF88C8C\"></a></span><p class=\"table-body\">Add a command to a toolbar </p> \n\
                        </td>\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-66DB6E0D-2010-4976-BE79-DC95D2EDD7E3\"></a></span><p class=\"table-body\">Double-click the toolbar to open it. Then drag a custom command from the Plug-in Tree\n\
                              to the toolbar. \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5EC83DD0-C182-40C8-AE94-CF1B69F57A1D\"></a></span><p class=\"table-body\">Edit a toolbar </p> \n\
                        </td>\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-47798860-CAC6-4D50-A006-5719CD469AE3\"></a></span><p class=\"table-body\">To customize a toolbar, double-click the toolbar to open it. Then right-click the\n\
                              toolbar and choose <span class=\"MenuCascade\" id=\"GUID-B387B226-59E4-43A2-87DB-2167DCECA4B6\">Customize</span> Toolbar. \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-BFEA3051-D3C2-43F8-A5CA-F3A2882B0385\"></a></span><p class=\"table-body\">To edit the <span class=\"filePath\" translate=\"no\">.xsitb</span> file, do one of the following: \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"UL_BBB76D9BBE7B4DF38282B36232A3371A\"></a></span><ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-332D5269-A751-4CEF-B496-5B7B43FDE5FD\"></a></span>Right-click a toolbar and choose <span class=\"MenuCascade\" id=\"GUID-1CD24CED-23E4-4B9F-B5FA-4DCB546DEB56\">Edit</span>. \n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-64EC10EA-4127-4E42-BFA8-7E73A99C84FF\"></a></span>Drag the toolbar to a script editor. \n\
                                 </p> \n\
                                 <div><span class=\"anchor_wrapper\"><a name=\"GUID-85D1D172-56AC-4AFF-B5AE-6C43BEF39111\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                                       <p><span class=\"anchor_wrapper\"><a name=\"GUID-F65F3B8C-8178-446A-84C9-82C5DB0F8634\"></a></span>You can edit a toolbar directly in a workgroup (as long as the file is not read-only).\n\
                                          \n\
                                       </p> \n\
                                    </div>\n\
                                 </div> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-0032\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-D26B6F21-3D88-4108-A763-DB4099FD8B7A\"></a></span> Working with Add-ons\n\
               </h2>  <span class=\"anchor_wrapper\"><a name=\"TABLE_4378401B91D1466B874250BBC8989ACC\"></a></span><div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col />\n\
                        <col />\n\
                     </colgroup>\n\
                     <tr class=\"ruledHeading\">\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8D4A4192-95CF-4091-B5FF-C8C13720047D\"></a></span><p class=\"table-heading\">To do this </p> \n\
                        </th>\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F824C02F-6528-4182-A3F2-B5D3D2998008\"></a></span><p class=\"table-heading\">In the Plug-in Tree, do this </p> \n\
                        </th>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1D51E9A9-7C8F-4110-B3EA-DD0D45DB673D\"></a></span><p class=\"table-body\">Package an add-on </p> \n\
                        </td>\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DD244F00-C52A-4D51-9266-C870A461EEEA\"></a></span><p class=\"table-body\">Right-click an add-on and choose <span class=\"MenuCascade\" id=\"GUID-27B4EC47-A58D-4E01-BF78-C23237D78BA3\">Package Add-on</span>. \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-3250B43E-397F-42B3-890C-0AA940907989\"></a></span><p class=\"table-body\">In the <span class=\"MenuCascade\" id=\"GUID-2D239E6D-6886-4EE9-9F3C-5E2B02C3ED24\">Package Location Options</span> dialog box, set the packaging options: \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"UL_6AB1491CA35946CCBDD846A9847C8419\"></a></span><ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-26FE5134-9F83-4E7B-AF00-98E47C1FA4D7\"></a></span> <em class=\"strong\">Source</em> is the location of the Add-on directory. The .xsiaddon file will contain everything\n\
                                    under the source folder. \n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-1C2FAED7-F878-45A4-ABAD-F9A243B5B865\"></a></span> <em class=\"strong\">Destination</em> is where the .xsiaddon file will be created. \n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-3B7F510C-8B42-40CA-81D0-A009A2EA54A7\"></a></span> <em class=\"strong\">Directories to Exclude</em> is a semi-colon (;) separated list of folders that you do not want to include in\n\
                                    the .xsiaddonfile. \n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-54B69F03-A701-46B1-B992-AFAB0614DCCF\"></a></span><p class=\"table-body\">Install an add-on </p> \n\
                        </td>\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8A987EF3-19CD-40C9-AA12-03798E9BA251\"></a></span><p class=\"table-body\">Right-click the <span class=\"MenuCascade\" id=\"GUID-2CF104EF-54B9-4C61-96D5-63EE958402FE\">first</span> workgroup in the tree, and choose <span class=\"MenuCascade\" id=\"GUID-CAA11243-FEDF-4CCA-805E-97F9383E43D3\">Install .xsiaddon</span>. In the <span class=\"MenuCascade\" id=\"GUID-05825B34-9D84-47AD-A3DE-685AFA289B21\">Select Add-on File</span>, Locate the .xsiaddon file and click <span class=\"MenuCascade\" id=\"GUID-8CAE95F0-7EE0-4815-81E1-13C68DD8AE0E\">OK</span>. \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-B9488D8A-8659-41C4-B778-919C7F718B54\"></a></span><p class=\"table-body\">If you want to install an add-on in a different workgroup (a workgroup that is not\n\
                              first in the tree), click the <span class=\"MenuCascade\" id=\"GUID-D75CB4E3-9B99-4AC8-A8EC-3828CB38A4C6\">Workgroup</span> tab, click the workgroup, and then click <span class=\"MenuCascade\" id=\"GUID-0F4152BE-76D3-4F73-A1FA-6924E4620B39\">Move Up</span> until the workgroup is the first workgroup. \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0CD490D9-BE83-4087-A2C7-21A89A87B1BE\"></a></span><p class=\"table-body\">Uninstall an add-on </p> \n\
                        </td>\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0D4A1E1C-91B5-43EC-BD46-8DE7ABAF4225\"></a></span><p class=\"table-body\">Right-click the add-on node and then choose <span class=\"MenuCascade\" id=\"GUID-05DD0685-18BA-40F2-8C9C-E43DD2DF9074\">Uninstall Add-on</span>. \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-30E9DEC9-4C7F-41C8-ABE3-FB74C34A8578\"></a></span><p class=\"table-body\">Generate a help page for an add-on </p> \n\
                        </td>\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F542CB5A-1949-4327-B0F2-F958DA21405A\"></a></span><p class=\"table-body\">Right-click an Add-on and choose <span class=\"MenuCascade\" id=\"GUID-95508CDF-168D-48EB-A02C-E7D157DDB46C\">New</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-80850F26-B91A-481F-944D-F46875F2905A\">Add-on Help</span>. Type a brief description and click <span class=\"MenuCascade\" id=\"GUID-69B1FFED-D4E4-4456-BFD4-9FBA4CE71406\">OK</span>. \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-0033\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-7C2C4088-240D-46E3-9F4E-D680846D780D\"></a></span> Opening Command Prompts\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-CF3AF140-3742-424A-ACD8-A19E587164EA\"></a></span>From the Plug-in Tree, you can start a Softimage command prompt in a workgroup folder,\n\
                  an Add-on directory, and many other locations. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-F9BE38A7-9D5F-49E7-9EB9-F55E0954AD58\"></a></span>To open a command prompt, right-click a workgroup, add-on, plug-in, or other node\n\
                  and choose <span class=\"MenuCascade\" id=\"GUID-9C7F6C32-42F3-4EFB-839F-779A37A418EA\">Command Prompt</span>. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-CE875DE8-364A-43CD-92A1-747583E4BABC\"></a></span>When you open a command prompt from the Plug-in Tree, the command prompt inherits\n\
                  the Softimage environment variable settings. Note that while Softimage is running,\n\
                  it modifies the user environment variables TMP and TEMP to point to a temporary folder\n\
                  created by Softimage. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-75A2CCFC-0383-410B-8A49-231CBDE06A84\"></a></span>If you start Microsoft Visual Studio from the command prompt, Visual Studio will use\n\
                  the TMP folder for intermediate files. This in itself is not a problem, but the next\n\
                  time you start Visual Studio (perhaps days later), or if you exit Softimage and keep\n\
                  Visual Studio open, the TMP environment variable will be different, and you will get\n\
                  errors like this when you try to build your project: \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
c1xx : fatal error C1083: Cannot open compiler intermediate file: \'C:\\DOCUME~1\\sblair\\LOCALS~1\\Temp\\XSI_Temp_2116\\_CL_aaa04008ex\': No such file or directory</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";