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
      <meta name=\"topicid\" content=\"GUID-66A752C8-139C-4903-B0AF-72FAD19F0B73\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <meta name=\"keywords\" content=\"<addon-name&gt;\" />\n\
      <meta name=\"keyword\" content=\"<addon-name&gt;\" />\n\
      <title>Add-on Packages</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-66A752C8-139C-4903-B0AF-72FAD19F0B73\"></a></span><div class=\"head\">\n\
            <h1>Add-on Packages</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-8EAA77DA-2F16-449A-9BBD-83D4907A1B05\"></a></span>This section explains how you can package and distribute your customizations (such\n\
            as custom commands, custom operators, and custom filters) as add-on packages (.xsiaddon\n\
            files).\n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-8EDFBB6A-AE03-4153-AA57-990DF2E1B8C3\"></a></span>An .xsiaddon file provides an easy way to distribute customizations, especially to\n\
            external users (for internal users, you can use workgroups to deploy your customizations).\n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-4BB57907-A411-476F-997D-F81A64FD8D24\"></a></span>If you intend to distribute add-on packages, the recommended way to develop your add-ons\n\
            is to use a workgroup, and to create a separate <span class=\"char_link\"><a href=\"#!/url=./files/cus_addons_AddonDirectories.htm\">Add-on directory</a></span> for each add-on. Developing add-ons in Add-on directories allows you to package add-ons\n\
            by location: Softimage can create an .xsiaddon file that contains all the files and\n\
            folders in a specified location. So instead of adding files one-by-one to an add-on\n\
            package, you can simply specify a folder and everything in that folder is put in the\n\
            add-on package.\n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-64AC6B77-F2A9-417B-AE49-4E7DFFB9CCB4\"></a></span>Users who want to upgrade their copy of the add-on should uninstall the old .xsiaddon\n\
            first, then install the latest .xsiaddon.\n\
         </p><span class=\"noindex\">\n\
            <div class=\"topic-list\">\n\
               <h4 class=\"related\">Topics in this section</h4>\n\
               <ul class=\"jumplist\">\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_addons_AddonDirectories.htm\">Add-on Directories</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_addons_AddonDocWizard.htm\">Documenting Add-ons</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_addons_PackageLocation.htm\">Packaging Add-ons</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_addons_EditingAddonPackages.htm\">Editing Add-on Packages</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_addons_InstallingandUninstallingAddons.htm\">Installing and Uninstalling Add-ons</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_addons_WhatsinAnAddonPackage.htm\">What\'s in an Add-on Package?</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_addons_UsingInstallShieldtoInstallXSIPlugins.htm\">Using Install Shield to Install Softimage Plug-ins</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_addons_UsingthePackageDialogs.htm\">Using the Package Dialogs</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_addons_UsingtheCommandLineforInstallingFilesandMore.htm\">Using the Command Line for Installing Files and More</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_addons_WorkingwithAddonsthroughtheObjectModel.htm\">Working with Add-ons through the Object Model</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_addons_Limitations.htm\">Limitations</a></li>\n\
               </ul>\n\
            </div></span><div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";