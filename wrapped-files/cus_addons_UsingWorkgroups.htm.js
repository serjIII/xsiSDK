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
      <meta name=\"topicid\" content=\"GUID-E0B99B6E-6F7B-4C8F-AA46-9497B0F1A7E1\" />\n\
      <meta name=\"indexterm\" content=\"workgroups: defined\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Using Workgroups</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-E0B99B6E-6F7B-4C8F-AA46-9497B0F1A7E1\"></a></span><div class=\"head\">\n\
            <h1>Using Workgroups</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-9925CBAB-366B-45C6-8F06-BF02BAEF0755\"></a></span> <em class=\"strong\">Workgroups are the recommended way</em> to build and deploy customizations such as shaders and self-installing plug-ins.\n\
               You can develop your plug-ins and other customizations in a workgroup and then make\n\
               the workgroup available to users, or copy the customizations to an existing workgroup.\n\
               \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-04229E62-651E-472E-BD9E-C387B2013233\"></a></span>When a user connects to a workgroup, Softimage automatically loads the plug-ins and\n\
               other customizations stored in the workgroup (no restart required, with only a few\n\
               exceptions). You can also programmatically connect to workgroups so, for example,\n\
               you can make it easier for users to connect to workgroups located in predefined locations.\n\
               \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-E3A9FF81-B25D-4D1C-808E-BB85B072D1ED\"></a></span> <em class=\"strong\">No restart required, except for...</em>Layouts, UFOs, devices, non-self-installing commands and operators, and keymaps. Softimage\n\
               automatically loads all other types of customizations (including shaders). \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-BD0AF499-4CDE-41C2-9DE5-71C2200A0C60\"></a></span> <em class=\"strong\">Shaders are loaded once, for the duration of the render</em> During rendering, shaders installed in workgroups are loaded <em class=\"strong\">once</em> from the network drive into memory on each render machine, for the duration of the\n\
               render. \n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-0038\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-90A59DC0-196E-478C-864B-A6CC205D5A4A\"></a></span>What is a Workgroup?\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-47EDFEC0-5AA6-4D22-9CDC-9F1E886F3728\"></a></span>A workgroup is a set of folders with a specific structure. For example, when you create\n\
                  a workgroup in the Plug-in Manager (or by calling CreateWorkgroupDirectories), you\n\
                  get this default folder structure, which is the same folder structure as in the <em class=\"strong\">User</em> location. \n\
               </p> <img src=\"../images/GUID-1F83E26E-D334-4E47-99C8-48BFECCA1BE5-low.png\" /> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-9981C717-06B3-418F-9BC6-1A0E000A031F\"></a></span>Workgroups can be local or shared network folders, and you can have multiple workgroups.\n\
                  \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-8864087A-5B61-4C59-AA20-DC40D7DA226D\"></a></span>Using workgroups is a simple, effective way to distribute plug-ins and tools that\n\
                  consist of more than just a single file. For example, a custom tool may include a\n\
                  self-installing plug-in, a toolbar, and a custom preference. and so on. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-003A\"></a></span> The Softimage SDK distribution includes an example workgroup that contains most of\n\
                  the SDK examples. You can try out the examples by connecting to the workgroup at <span class=\"filePath\" translate=\"no\">%XSISDK_ROOT%\\examples\\workgroup</span> folder. \n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";