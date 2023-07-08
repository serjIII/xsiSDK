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
      <meta name=\"topicid\" content=\"GUID-46114D81-3B5F-4F27-981A-8F65BF1BA0DB\" />\n\
      <meta name=\"indexterm\" content=\"add-ons: cross-platform\" />\n\
      <meta name=\"indexterm\" content=\"workgroups: cross-platform\" />\n\
      <meta name=\"indexterm\" content=\"cross-platform: add-ons\" />\n\
      <meta name=\"indexterm\" content=\"shaders: cross-platform deployment\" />\n\
      <meta name=\"indexterm\" content=\"self-installing plug-ins: cross-platform deployment\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Cross-Platform Deployment</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-46114D81-3B5F-4F27-981A-8F65BF1BA0DB\"></a></span><div class=\"head\">\n\
            <h1>Cross-Platform Deployment</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-A67A744D-A0AA-4FEA-8AC4-364412847EEF\"></a></span> You can create workgroups and add-on packages that support both Windows and Linux.\n\
               \n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-00A9\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-23A08659-AE0D-499B-BA81-90833553F502\"></a></span>Shader and Self-installing Plug-in Deployment \n\
               </h2>   \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-3C8D0578-93E3-45B2-B3F8-71B05CAC731B\"></a></span>Create separate subfolders (such as linux\\x64) that map to each platform. For plug-ins,\n\
                  this is the folder structure: \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\\Application\n\
	\\Plugins\n\
		\\bin\n\
			\\nt-x86-64\\MyPlugin.dll\n\
			\\linux\\x64\\MyPlugin.so</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-429068F3-8791-4819-B446-AFE3A555AE4A\"></a></span>Softimage scans the folders according to the current machine architecture. Use the\n\
                  same basename for each plug-in library file. \n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-8C5D8630-AC5E-4FAD-9BAA-AF89B489D7A9\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span>When Softimage starts, the platform-specific directories are searched, even if the\n\
                     <span class=\"char_link\"><a href=\"#!/url=./files/cus_addons_WhatsinAnAddonPackage.htm#WS8AD400B78794354E8F5A74BCE7CD86FD-007A\">Scan sub-folders</a></span> preference is turned off. \n\
                  </div>\n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";