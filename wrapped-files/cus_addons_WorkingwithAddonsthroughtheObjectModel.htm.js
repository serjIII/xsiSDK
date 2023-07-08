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
      <meta name=\"topicid\" content=\"GUID-D23C0A80-C965-48D5-9ECA-A0EBE9B0D0FC\" />\n\
      <meta name=\"indexterm\" content=\"scripting: packaging add-ons\" />\n\
      <meta name=\"indexterm\" content=\"add-ons: packaging: through scripting\" />\n\
      <meta name=\"indexterm\" content=\"install: add-ons: via scripting\" />\n\
      <meta name=\"indexterm\" content=\"add-ons: installing: through scripting\" />\n\
      <meta name=\"indexterm\" content=\"uninstall: add-ons: via scripting\" />\n\
      <meta name=\"indexterm\" content=\"add-ons: uninstalling: scripting\" />\n\
      <meta name=\"indexterm\" content=\"add-ons: installing: a single legacy add-on\" />\n\
      <meta name=\"indexterm\" content=\"add-ons: uninstalling: a single legacy add-on\" />\n\
      <meta name=\"indexterm\" content=\"legacy add-ons: single installation/uninstallation\" />\n\
      <meta name=\"indexterm\" content=\"install: single legacy add-on\" />\n\
      <meta name=\"indexterm\" content=\"uninstall: single legacy add-on\" />\n\
      <meta name=\"indexterm\" content=\"add-ons: installing: all legacy add-ons\" />\n\
      <meta name=\"indexterm\" content=\"add-ons: uninstalling: all legacy add-ons\" />\n\
      <meta name=\"indexterm\" content=\"legacy add-ons: install/uninstall all\" />\n\
      <meta name=\"indexterm\" content=\"install: all legacy add-ons\" />\n\
      <meta name=\"indexterm\" content=\"uninstall: all legacy add-ons\" />\n\
      <meta name=\"indexterm\" content=\"add-ons: remove legacy add-ons from the cache\" />\n\
      <meta name=\"indexterm\" content=\"legacy add-ons: removing from cache\" />\n\
      <meta name=\"indexterm\" content=\"caching: removing legacy add-ons\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Working with Add-ons through the Object Model</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"name\", \"si_cpp/group__RenderMapDefine.html#ga882c17490314f92c7159d6d7d69696e7\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-D23C0A80-C965-48D5-9ECA-A0EBE9B0D0FC\"></a></span><div class=\"head\">\n\
            <h1>Working with Add-ons through the Object Model</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-C50CDC7C-95E7-4E51-AA93-09786EFE0193\"></a></span>You can use the Autodesk Softimage SDK object model to package, install and uninstall\n\
               Softimage add-ons. These features are available either through a simple script or\n\
               through a compiled library file:\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-B13E9121-E80B-4BE2-B8D9-EFBDA237D4F8\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_addons_WorkingwithAddonsthroughtheObjectModel.htm#WS8AD400B78794354E8F5A74BCE7CD86FD-009B\">To package an add-on through scripting</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-61782C3F-E7F4-49F4-8B89-3172B841C4A7\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_addons_WorkingwithAddonsthroughtheObjectModel.htm#WS8AD400B78794354E8F5A74BCE7CD86FD-009C\">To install an add-on package through scripting</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-7EB96B66-034F-4E17-8EE0-5A49E901F688\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_addons_WorkingwithAddonsthroughtheObjectModel.htm#WS8AD400B78794354E8F5A74BCE7CD86FD-009D\">To uninstall an add-on package through the object model</a></span> \n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-6D4C9E54-843F-4586-AB30-A37859A4E8CD\"></a></span>In addition there are several scripting commands which can help you debug v1.0 plug-ins.\n\
               These simulate some of the tasks you can perform in the Plug-in Manager:\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-A8CF566E-CF55-4D68-A040-39044D7178D8\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_addons_WorkingwiththePluginTree.htm#WS8AD400B78794354E8F5A74BCE7CD86FD-002F\">Update a plug-in</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-A607A8A5-CD18-4AAE-B9D3-7BB9BD845C72\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_addons_WorkingwiththePluginTree.htm#WS8AD400B78794354E8F5A74BCE7CD86FD-002E\">Unload a plug-in</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-2A86034B-F7E8-4AAC-AA5C-7193475171DA\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_addons_WorkingwiththePluginTree.htm#WS8AD400B78794354E8F5A74BCE7CD86FD-0030\">Remove a plug-in from the cache</a></span> \n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-009B\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-C9629C5C-4859-42A3-8CD1-D24F1E3B74B4\"></a></span> To package an add-on through scripting\n\
               </h2>   \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-8F12D3D9-494D-402F-9878-F66C5B7D5DCE\"></a></span>The easiest way to package an add-on is to use the <a href=\"#!/url=./si_cmds/PackageAddon.html\">PackageAddon</a> command, which packages an entire add-on directory (for example, <span class=\"filePath\" translate=\"no\">\\myserver\\myworkgroup\\Addons\\MyParticleTool</span>).\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-8F2C3AD3-1BF4-4593-8F4C-08DC786DE376\"></a></span>You can also create an Addon object and add items one at a time. The basic workflow\n\
                  of using packaging an add-on this way through scripting is very similar to packaging\n\
                  the add-on through the Package Add-on dialog:\n\
               </p> <span class=\"anchor_wrapper\"><a name=\"GUID-C4673732-B445-450E-8664-045C0E53DD71\"></a></span><ol type=\"1\" start=\"1\">\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-A7123C1E-9AED-40A6-88A8-561428CC6BB8\"></a></span>Get a pointer to the object using <a href=\"#!/url=./si_om/XSIApplication.CreateAddon.html\">XSIApplication.CreateAddon</a>:\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oAddOn = Application.CreateAddon</pre></div> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-39067E14-3D75-42F1-B6D6-17C395FA1A68\"></a></span>Add the components of your customization as required. You can add the same types of\n\
                        items as you can through the UI by using the Addon.AddItem:\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">oAddOn.AddItem siToolbarAddonItemType, \"MyToolbar\" \n\
		oAddOn.AddItem siScriptCmdAddonItemType, \"myCmd\"</pre></div> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-C9E9E7EB-5272-47C5-820B-F58F6C52019F\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-C03AFDDE-FACE-4BFC-A5E3-984134E2EA68\"></a></span>To make your add-on creation script more portable, use the system information to get\n\
                              the user path:\n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">sPath = InstallationPath( siUserPath )\n\
		oAddOn.AddItem siOtherAddonItemType, sPath &amp; \"\\Data\\MyHelpPage.html\"</pre></div> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-D0BA9088-D155-402B-AFA6-D4CE1ED57DDD\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-7BDD6DA3-4C8E-40C5-8671-132874F62A54\"></a></span>You can use either the <a href=\"#!/url=./si_om/Addon.AddItem.html\">Addon.AddItem</a> method with <span class=\"code\" translate=\"no\">siOtherAddonItemType</span> or just use the <a href=\"#!/url=./si_om/Addon.AddOtherItem.html\">Addon.AddOtherItem</a> method. The difference is that AddOtherItem allows you to specify a destination directory,\n\
                              whereas AddItem does not. The equivalent to the last line above is:\n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">oAddOn.AddOtherItem sPath &amp; _\n\
		\"\\Data\\MyHelpPage.html\", \"Help\"</pre></div> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-1D5D2575-20E6-40D7-ADF0-45EA894F482E\"></a></span>If you want to specify a default installation path for your add-on, use the <a href=\"#!/url=./si_om/Addon.DefaultInstallationPath.html\">Addon.DefaultInstallationPath</a> property:\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">oAddOn.DefaultInstallationPath = siFactoryPath\n\
		oAddOn.SubDirectory = \"ToxicTools\"</pre></div> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-6728B152-18D8-456C-B8A5-E95ADD2181FF\"></a></span>When you are finished adding items, use the <a href=\"#!/url=./si_om/Addon.Save.html\">Addon.Save</a> method to save the new .xsiaddon file:\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">oAddOn.Save sPath &amp; \"\\addons\\myAddOn.xsiaddon\"</pre></div> \n\
                  </li>\n\
               </ol> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-009C\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-DE5E0F60-FFA8-4E08-8DA7-1101E17EB06E\"></a></span> To install an add-on package through scripting\n\
               </h2>   \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-97C09C9A-19BC-4E1F-BEE9-F47BAADBBC06\"></a></span>You can use the <a href=\"#!/url=./si_om/XSIApplication.InstallAddon.html\">XSIApplication.InstallAddon</a> method which takes the full path of the .xsiaddon file and where you want the add-on\n\
                        to be installed (the <span class=\"filePath\" translate=\"no\">Addons\\InstalledAddons</span> path—see <a href=\"#!/url=./si_om/siInstallationPath.html\">siInstallationPath</a>):\n\
                     </p> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-33F1A486-A270-425E-941C-C58A64E24046\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-7B758B75-C1A8-4292-8642-650E0BCF1EC1\"></a></span>The target location can be either of these values:\n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                     <ul>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-AF8E7F29-A920-415F-99EC-AD8CA0B640C8\"></a></span> <span class=\"code\" translate=\"no\">4 or siAddonPath</span> (the Add-on directory path)\n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-C80AF817-F45E-459E-BCDF-B9303B22FE61\"></a></span> <span class=\"code\" translate=\"no\">5 or siUserAddonPath</span> (the User Add-on directory path)\n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-0B41A7FD-A92F-440E-B52C-2C88DE2A6277\"></a></span> <span class=\"code\" translate=\"no\">6 or siWorkgroupAddonPath</span> (the Workgroup Add-on directory path)\n\
                           </p> \n\
                        </li>\n\
                     </ul> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\' Install myAddon.xsiaddon in the workgroup\n\
		sPath = InstallationPath( siUserPath )\n\
		InstallAddon \"\\myAddon.xsiaddon\", siWorkgroupAddonPath</pre></div> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-3978DB16-6A44-4CE9-A867-C5309B11B02E\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-ED024CA1-6C2F-4A16-87A6-E74C213A0E9C\"></a></span>Since the <a href=\"#!/url=./si_om/XSIApplication.html\">XSIApplication</a> object is an intrinsic object that represents the running instance of Softimage,\n\
                              you do not need to specify the Application object explicitly inside Softimage.\n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-009D\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-9EFA77C4-4145-44FF-ACC9-D221444F3987\"></a></span> To uninstall an add-on package through the object model\n\
               </h2>   \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-9EDD2277-ADC7-4F9F-BB71-51B77ABD6171\"></a></span>You can use the <a href=\"#!/url=./si_om/XSIApplication.UnInstallAddon.html\">UnInstallAddon (XSIApplication)</a> method which takes the full installation path (the <span class=\"filePath\" translate=\"no\">Addons\\InstalledAddons</span> path) of the .xsiaddon file:\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\' Uninstall the add-on by <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
		sPath = InstallationPath( siWorkgroupAddonPath )\n\
		UninstallAddon sPath &amp; \"\\myAddon.xsiaddon\"</pre></div> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-009E\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-758E23E6-7324-47C0-95E5-4466ECE03452\"></a></span> To load and unload a single add-on library\n\
               </h2>      \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-D204A478-4482-44FF-91DD-4F22FFB0914B\"></a></span>You can use the <a href=\"#!/url=./si_cmds/UnloadAddonLib.html\">UnloadAddonLib</a> command to unload a single specified v1.0 plug-in library from memory. This allows\n\
                        you to easily fix and recompile your libraries in your development environment and\n\
                        then load them in again with the <a href=\"#!/url=./si_cmds/ReloadAddonLib.html\">ReloadAddonLib</a> command.\n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-97B5999D-A4F7-4885-AA47-0243C0BF3D6F\"></a></span>These commands both take the full path of the library file as the only argument but\n\
                  return no value.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-009F\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-DC9EA8C6-0AB5-40D3-B4CE-4DC14202A2F4\"></a></span> To load and unload all add-on libraries at once\n\
               </h2>      \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-08C49DB0-953F-467B-840E-1EB825A5C327\"></a></span>You can use the <a href=\"#!/url=./si_cmds/UnloadAllAddonLibs.html\">UnloadAllAddonLibs</a> command to unload all currently loaded v1.0 plug-in libraries from memory. This allows\n\
                        you to easily fix and recompile your libraries in your development environment and\n\
                        then load them in again with the <a href=\"#!/url=./si_cmds/ReloadAllAddonLibs.html\">ReloadAllAddonLibs</a> command.\n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-51A1F9B3-6F30-486A-BDEE-0BD5B34E6E21\"></a></span>These commands take no arguments and return no values.\n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-00A0\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-93CEDB89-C3A6-4989-9CDB-E9B6767B2FDA\"></a></span> To flush COM (ActiveX) DLLs from memory\n\
               </h2>    \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-01C7D4AF-D171-40F7-BA00-41601925775E\"></a></span>You can use the <a href=\"#!/url=./si_cmds/UnloadAllCOMLibs.html\">UnloadAllCOMLibs</a> command to explicitly free unused ActiveX libraries.\n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-B3974A5D-FBDE-4B39-9496-51C2A0462C15\"></a></span>This command takes no arguments and does not return a value.\n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";