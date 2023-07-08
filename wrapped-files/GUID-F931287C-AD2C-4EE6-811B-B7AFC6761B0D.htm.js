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
      <meta name=\"topicid\" content=\"GUID-F931287C-AD2C-4EE6-811B-B7AFC6761B0D\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Types of Customization in Softimage</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-F931287C-AD2C-4EE6-811B-B7AFC6761B0D\"></a></span><div class=\"head\">\n\
            <h1>Types of Customization in Softimage</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-2515439D-B369-42BA-AECD-3B8D4B85F22A\"></a></span>You can create add-on packages and plug-ins for customization in Softimage. Plug-in\n\
            items can be commands, events, filters, menus, properties, custom displays, viewport\n\
            modes or callbacks (graphic sequencer). The difference between an add-on package and\n\
            a plug-in is that an add-on package is a set of plug-ins packaged together for easy\n\
            installation, and a plug-in is a single item that extends the functionality of Softimage,\n\
            such as a shader, a script, or a compiled operator. \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-D21792A1-97B2-4422-B8A0-67459CCDF861\"></a></span>You can create plug-ins that are self-installing, or you can create a single add-on\n\
            package that contains the main library or script file and any additional files, such\n\
            as preset files, help files, images files, and others. However, only these tools can\n\
            be self-installing: \n\
         </p><span class=\"anchor_wrapper\"><a name=\"UL_6FD9D0BD8D594D34A9FB9B38AFD24494\"></a></span><ul>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-BCA6270F-0A20-41BE-94F6-E6F299F6CB28\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_cmds.htm\">Custom Commands</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-E96CA1AC-752E-417A-915B-DFE84735E097\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops.htm\">Custom Operators</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-9122204C-5677-447D-8128-1E570C4C0F3D\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg.htm\">Custom Properties</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-036FD7B0-2C6F-4980-90BB-81175DB57240\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_icenodes.htm\">Custom ICENodes</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-2ADD68AF-1776-4625-89BE-A78F469D8322\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_render.htm\">Custom Renderers</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-45FEBAFD-EC86-4A02-9A1B-F142B2527FBD\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders.htm\">Custom Shaders</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-B9B0665E-0C96-4F69-B777-6AC9E1BF7836\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_filters.htm\">Custom Filters</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-567C0005-DF26-47FE-8782-214B4010B967\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_events.htm\">Custom Events</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-2D5BF214-42BB-480F-8145-9B5C45AB9F3B\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_menus.htm\">Standard and Contextual Menus</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-FEB42997-395A-41D3-83B7-5A050797D9BF\"></a></span><span class=\"char_link\"><a href=\"#!/url=./files/cus_displayhost.htm\">Custom Display Host</a></span> Callbacks \n\
               </p> \n\
            </li>\n\
         </ul>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-0E9F807C-8571-47CB-BC48-ECAE97F4454A\"></a></span>If you are deploying tools that are not in this list (for example, a <span class=\"char_link\"><a href=\"#!/url=./files/cus_queries_PackagingSpreadsheetQueries.htm\">Custom Fx Operators</a></span> cannot be self-installing), you can use add-on packages. For more information, see\n\
            <span class=\"char_link\"><a href=\"#!/url=./files/cus_addons_WhataremyOptions.htm\">What are my Deployment Options?</a></span>. \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-39689D5A-DEBA-4F78-A5CA-BAEF6798DF9E\"></a></span> For more information on customization possibilities, see <span class=\"char_link\"><a href=\"#!/url=./files/cus_intro.htm\">Customizing Softimage using the SDK</a></span>. \n\
         </p>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";