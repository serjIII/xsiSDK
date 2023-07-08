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
      <meta name=\"topicid\" content=\"GUID-956F8FFD-FC62-4902-B8EB-897BCE65DF10\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <meta name=\"keywords\" content=\"<button-name&gt;, <tab-label&gt;,  <property_name&gt;, <parameter_name&gt;, <userpath&gt;, <plug-in_name&gt;, <parser_name&gt;, <DeviceType&gt;, <line_def&gt;, <col_def&gt;, <AddonName&gt;, <addon-name&gt;\" />\n\
      <meta name=\"keyword\" content=\"<button-name&gt;\" />\n\
      <meta name=\"keyword\" content=\"<tab-label&gt;\" />\n\
      <meta name=\"keyword\" content=\" <property_name&gt;\" />\n\
      <meta name=\"keyword\" content=\"<parameter_name&gt;\" />\n\
      <meta name=\"keyword\" content=\"<userpath&gt;\" />\n\
      <meta name=\"keyword\" content=\"<plug-in_name&gt;\" />\n\
      <meta name=\"keyword\" content=\"<parser_name&gt;\" />\n\
      <meta name=\"keyword\" content=\"<DeviceType&gt;\" />\n\
      <meta name=\"keyword\" content=\"<line_def&gt;\" />\n\
      <meta name=\"keyword\" content=\"<col_def&gt;\" />\n\
      <meta name=\"keyword\" content=\"<AddonName&gt;\" />\n\
      <meta name=\"keyword\" content=\"<addon-name&gt;\" />\n\
      <title>Customizing Softimage using the SDK</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-956F8FFD-FC62-4902-B8EB-897BCE65DF10\"></a></span><div class=\"head\">\n\
            <h1>Customizing Softimage using the SDK</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-39689D5A-DEBA-4F78-A5CA-BAEF6798DF9E\"></a></span>The Autodesk Softimage SDK allows you to solve production problems by creating your\n\
            own tools to work inside Softimage. This section presents detailed instructions for\n\
            each customizable element or tool so you can choose which customization to create\n\
            and which ones would work best for your needs. The customization possibilities fall\n\
            into the following categories: \n\
         </p>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSF56A87D185C55B4CB4D0CB0A898B2CDA-0004\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-A62BACD7-0A57-4358-9048-C93170002822\"></a></span>Custom versions of Softimage scene elements\n\
            </h2> <span class=\"anchor_wrapper\"><a name=\"UL_FDAAD9495D3C4499902C52EC3AA13473\"></a></span><ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-34D54214-CF43-43FA-8521-8076565C445C\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_cmds.htm\">Custom Commands</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-2D1A5191-399D-4EFD-A49F-8F9B1AB1F4B8\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops.htm\">Custom Operators</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-AFB29A20-0072-4769-9704-7B5D4ACBBD26\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg.htm\">Custom Properties</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-E14E1254-6CB4-498C-BE2E-55441AC6F9A8\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_icenodes.htm\">Custom ICENodes</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-EC16046D-5899-4F76-AE0E-84137C1ACC58\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders.htm\">Custom Shaders</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-810D5A1D-EA87-4DE4-B95C-C324543342E1\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_queries_PackagingSpreadsheetQueries.htm\">Custom Fx Operators</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-2A29DCAE-71B9-49DC-BB69-272920165589\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_cdk.htm\">Character Development Kit</a></span> (Customized Rigs) \n\
                  </p> \n\
               </li>\n\
            </ul> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSF56A87D185C55B4CB4D0CB0A898B2CDA-0005\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-C15C49E3-9C2E-4702-AB9C-E06F7856513A\"></a></span>Custom versions of Softimage features\n\
            </h2> <span class=\"anchor_wrapper\"><a name=\"UL_73577FAFC5AF430C8913F296011580D9\"></a></span><ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-E3FFC669-D79D-4C01-AA1B-6B5520BCE9BF\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_filters.htm\">Custom Filters</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-7B3C592E-76CE-4486-AAC4-3C21F4DAD80C\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_events.htm\">Custom Events</a></span> \n\
                  </p> \n\
               </li>\n\
            </ul> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSF56A87D185C55B4CB4D0CB0A898B2CDA-0006\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-A908E40E-6F2F-48F1-B941-424FB9A3A890\"></a></span>Special tools to support interaction between Softimage and an external device or program\n\
            </h2> <span class=\"anchor_wrapper\"><a name=\"UL_24BD62DB5C6F4127BD91172A6F3428DB\"></a></span><ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-F2B7B11A-8328-4175-9C9C-DBA309936ADF\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_displayhost.htm\">Custom Display Host</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-53CD54E0-8620-4EA6-815F-1974EFA7752C\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_render.htm\">Custom Renderers</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-5802215F-57EE-4718-B012-22DDB8B4EE67\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_devices.htm\">Device Drivers</a></span> \n\
                  </p> \n\
               </li>\n\
            </ul> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSF56A87D185C55B4CB4D0CB0A898B2CDA-0007\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-47539A17-44A3-4297-9D47-5B1CA13D7A7C\"></a></span>Manipulating the working environment and deploying tools\n\
            </h2> <span class=\"anchor_wrapper\"><a name=\"UL_122901CC8FD8490D8E9BAF05E937B209\"></a></span><ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-98D63947-E442-4860-896E-9BF80E9E812F\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_menus.htm\">Standard and Contextual Menus</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-2897C0CB-EE50-4C78-A476-BBF797CD9C22\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_queries.htm\">Spreadsheet Queries</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-33241958-86EC-4E22-B5E2-D8A6881BA8D7\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_self_SpecifyingaHelpFileforaPlugin.htm\">Providing Help</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-EC77F032-E5CA-42AF-8645-5239A9B18F7D\"></a></span><span class=\"char_link\"><a href=\"#!/url=./files/cus_addons.htm\">Building and Deploying Customizations</a></span> (Packaging) \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-847A08DD-5A43-45C4-BAE8-EE1593661784\"></a></span>See the Softimage User\'s Guide for how to customize keyboard maps, toolbars, buttons,\n\
                     layouts, relational views, synoptic views, as well as how to develop for Net View.\n\
                     \n\
                  </p> \n\
               </li>\n\
            </ul> \n\
         </div><span class=\"noindex\">\n\
            <div class=\"topic-list\">\n\
               <h4 class=\"related\">Topics in this section</h4>\n\
               <ul class=\"jumplist\">\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_self.htm\">Self-Installing Plug-ins</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/GUID-30DA3B7D-EB49-41DF-97DC-142EE4B9F364.htm\">Custom Primitives</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_cmds.htm\">Custom Commands</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_ops.htm\"> Custom Operators</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_ppg.htm\">Custom Properties</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_icenodes.htm\">Custom ICENodes</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_shaders.htm\">Custom Shaders</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_queries_PackagingSpreadsheetQueries.htm\">Custom Fx Operators</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_cdk.htm\">Character Development Kit</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_filters.htm\"> Custom Filters</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_events.htm\"> Custom Events</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_displayhost.htm\"> Custom Display Host</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_render.htm\">Custom Renderers</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_devices.htm\">Device Drivers</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_menus.htm\"> Standard and Contextual Menus</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_queries.htm\">Spreadsheet Queries</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_addons.htm\">Building and Deploying Customizations</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_graphicsequencer.htm\">Graphic Sequencer</a></li>\n\
               </ul>\n\
            </div></span><div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";