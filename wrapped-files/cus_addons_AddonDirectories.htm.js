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
      <meta name=\"topicid\" content=\"GUID-F449B505-51FE-4B1E-8B9C-78ACDFEA98BA\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Add-on Directories</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-F449B505-51FE-4B1E-8B9C-78ACDFEA98BA\"></a></span><div class=\"head\">\n\
            <h1>Add-on Directories</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-1A469897-306C-49E1-81E4-8109D7C24E27\"></a></span>If you have a number of different tools and plug-ins, and you don\'t want to lump them\n\
               all together in a workgroup, you can use <em class=\"strong\">Add-on directories</em>. An Add-on directory is located in the Addons folder of a workgroup. Each Add-on\n\
               directory has its own Application and Data folders.\n\
            </p><img src=\"../images/GUID-3383C7B5-CAC4-4A9A-8660-187365CC6FDC-low.png\" /><p><span class=\"anchor_wrapper\"><a name=\"GUID-F96E2767-2406-4FE1-99D3-5CEA1AFB3077\"></a></span>You can put a self-installing plug-in, a shader, or any other customization in an\n\
               Add-on directory. Add-on directories are an easy way to organize and share add-on\n\
               customizations with users who can access the workgroup. If you want to distribute\n\
               add-ons using .xsiaddon files, you can easily package Add-on directories as .xsiaddon\n\
               files using the Plug-in Manager.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-0062\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-833062BE-287C-4D47-A41B-8482C0957A74\"></a></span>To build and distribute an add-on\n\
               </h2> <span class=\"anchor_wrapper\"><a name=\"GUID-EA874BE3-936C-4341-9EA5-9C4FAD01C187\"></a></span><ol type=\"1\" start=\"1\">\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-2D46F491-E26E-4CDC-8CFB-0C11B77EA5AE\"></a></span>In the <em class=\"strong\">Plug-in Tree</em>, right-click a workgroup, choose <span class=\"MenuCascade\" id=\"GUID-940666FC-CF26-46AE-849E-233A9430F085\">New</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-0A406882-0AE9-406E-B7E8-01E34FEECF0B\">Add-on Directory</span>, and then type a name for the add-on.\n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-8E6BC688-B338-4E99-84FA-1ABA69A2D862\"></a></span>This creates an Add-on directory (for example, <span class=\"filePath\" translate=\"no\">MyWorkgroup\\Addons\\MyAddon</span>) that contains the standard Application and Data folder structures.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-52BD08EA-1E90-4ABE-9259-49CA7944BCB4\"></a></span>Put the add-on source code and other customized content in the Add-on directory.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-95466354-7366-4C6A-AFF4-7A8DF55395BF\"></a></span>When you\'re ready to distribute the add-on, in the Plug-in Tree, right-click the add-on\n\
                        and choose <span class=\"MenuCascade\" id=\"GUID-5ED0528A-33B6-4297-8183-D2C7247685C3\">Package Add-on</span>.\n\
                     </p> \n\
                  </li>\n\
               </ol> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";