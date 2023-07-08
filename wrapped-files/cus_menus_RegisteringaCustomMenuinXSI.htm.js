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
      <meta name=\"topicid\" content=\"GUID-7DD42B4D-B6F6-41EA-B90E-EFC0B7C25B2C\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Registering a Custom Menu in Softimage</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-7DD42B4D-B6F6-41EA-B90E-EFC0B7C25B2C\"></a></span><div class=\"head\">\n\
            <h1>Registering a Custom Menu in Softimage</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-0FE97A81-56CA-4DFC-8968-9EC677119715\"></a></span>Custom Menus in Softimage only exist as self-installing plug-ins. They are added to\n\
               the list of plug-in items when Softimage loads and then get removed again once the\n\
               Softimage session is done.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-912C0F4E-1D13-44C6-BA38-A565F7F08486\"></a></span>To successfully register your menu plug-in, use the plug-in <a href=\"#!/url=./si_cmds/callbacks.html#cb_menu\">Menu Callbacks</a> which tell Softimage how to install your menu automatically. There is only one registration\n\
               entry point (<em class=\"strong\">XSILoadPlugin</em>) for the entire implementation file regardless of how many items are implemented\n\
               in it.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-2C224E33-D264-4272-ADD5-E9F5717D2C13\"></a></span>Softimage creates one <a href=\"#!/url=./si_om/Plugin.html\">Plugin</a> object for each implementation file based on this callback, which defines one or\n\
               more <a href=\"#!/url=./si_om/PluginItem.html\">PluginItem</a> objects either using the <em class=\"mild\">implementation</em> callbacks or a method on the <a href=\"#!/url=./si_om/PluginRegistrar.html\">PluginRegistrar</a> object. In the case of a custom menu, use the <a href=\"#!/url=./si_om/PluginRegistrar.RegisterMenu.html\">RegisterMenu (PluginRegistrar)</a> method.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-8BEDA1D3-54CA-4209-9B18-4957D5FF695B\"></a></span>The XSILoadPlugin callback takes the PluginRegistrar object as input (supplied by\n\
               Softimage) which you can use to access the RegisterMenu method. This method uses the\n\
               following pieces of information to register the command in Softimage:\n\
            </p>\n\
            <div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-294A151E-A42A-4130-AD6C-5CFCED3D6C6C\"></a></span><p class=\"table-heading\">Argument Name</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F1BEA632-A05D-4ED7-9A78-0B6BDD0EC4B5\"></a></span><p class=\"table-heading\">What It Specifies</p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-34DB1A3D-E184-44E7-8905-CAA9AB683AA6\"></a></span><p class=\"table-body\">Anchor</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8DBB60DF-4640-4AD7-8E12-FEB82625CE92\"></a></span><p class=\"table-body\">Where the menu will appear (see <span class=\"char_link\"><a href=\"#!/url=./files/cus_menus_HowtoMakeYourOwnMenus.htm#WS209F6C4D71DA954DB0E0FF512CF0DEBA-0018\">Understanding Menu Anchor Points</a></span>).\n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FAD49545-1801-4B41-A550-DDDEA8B32610\"></a></span><p class=\"table-body\">Name</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E04602C4-5F1C-4545-8754-487A0C7B27D6\"></a></span><p class=\"table-body\">The name of the menu. This becomes the name you use to identify the menu and for submenus,\n\
                           it is the name that appears as your submenu\'s anchor point (see <span class=\"char_link\"><a href=\"#!/url=./files/cus_menus_HowtoMakeYourOwnMenus.htm#WS209F6C4D71DA954DB0E0FF512CF0DEBA-0023\">Naming: Using Labels</a></span>).\n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5414915F-9C83-4C64-92D6-A664679E3A6E\"></a></span><p class=\"table-body\">DisplayAsSubmenu</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B2CBCE7D-4021-4957-848E-FE920F46A68B\"></a></span><p class=\"table-body\">True to display the custom menu as a drop-down menu from the anchor point (see <span class=\"char_link\"><a href=\"#!/url=./files/cus_menus_HowtoMakeYourOwnMenus.htm#WS209F6C4D71DA954DB0E0FF512CF0DEBA-001D\">Nesting: Using SubMenus</a></span>).\n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-359599D9-7088-4980-8EDB-3B1D9A289C91\"></a></span><p class=\"table-body\">Dynamic</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B772D4BE-3895-4C8A-B72A-2D81C1970287\"></a></span><p class=\"table-body\">True to rebuild the menu each time its parent menu opens.</p> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-99EB44CE-E957-47FB-B941-CF5CE29E6F03\"></a></span>In addition, the PluginRegistrar object allows you to set some general information\n\
               about the whole plug-in (that is, information that is not specific to the command\n\
               plug-in item). For more information, see <a href=\"#!/url=./files/cus_self.htm\">Self-Installing Plug-ins</a>.\n\
            </p>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";