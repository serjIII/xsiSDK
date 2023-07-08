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
      <meta name=\"topicid\" content=\"GUID-B9889021-8DAA-4B18-8633-33ABDDF8483B\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Self-Installing Plug-ins</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-B9889021-8DAA-4B18-8633-33ABDDF8483B\"></a></span><div class=\"head\">\n\
            <h1>Self-Installing Plug-ins</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-71F829CC-07E4-456F-AFD3-DF2555EBEA86\"></a></span>A self-installing plug-in is a script file or a compiled .dll/.so that implements\n\
            a function named XSILoadPlugin.\n\
         </p><span class=\"noindex\">\n\
            <div class=\"topic-list\">\n\
               <h4 class=\"related\">Topics in this section</h4>\n\
               <ul class=\"jumplist\">\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_self_WhatisaSelfInstallingPlugin.htm\">What is a Self-Installing Plug-in?</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_self_PluginWizard.htm\">Getting Started with the Plug-in Wizard </a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_self_SettingPluginProperties.htm\">Setting Plug-in Properties</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_self_SpecifyingaHelpFileforaPlugin.htm\">Specifying a Help File for a Plug-in</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_self_RegisteringPluginItems.htm\">Registering Plug-in Items</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_self_NamingPluginItems.htm\">Naming Plug-in Items</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_self_ExportingCallbacks.htm\">Exporting Callbacks</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_self_DeployingSelfInstallingPlugins.htm\">Deploying Self-Installing Plug-ins</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_self_CallbacksforSelfInstallingPlugins.htm\">Callbacks for Self-Installing Plug-ins</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/GUID-D13D7878-95A3-4DB8-BC02-79B493A599DC.htm\">Internationalizing Plug-ins</a></li>\n\
               </ul>\n\
            </div></span><div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";