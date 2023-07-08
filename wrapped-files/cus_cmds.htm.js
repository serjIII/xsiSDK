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
      <meta name=\"topicid\" content=\"GUID-481B219A-239E-48E9-AFEA-E8979842DB30\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Custom Commands</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-481B219A-239E-48E9-AFEA-E8979842DB30\"></a></span><div class=\"head\">\n\
            <h1>Custom Commands</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-2DEE3213-A752-4C4D-A9DB-85B46CB58E20\"></a></span>A custom command is a reusable block of scripting or C++ code that performs a specific\n\
            task. A custom command can be run by other commands and scripts, by menu items, by\n\
            keyboard shortcuts, and by toolbar buttons.\n\
         </p><span class=\"noindex\">\n\
            <div class=\"topic-list\">\n\
               <h4 class=\"related\">Topics in this section</h4>\n\
               <ul class=\"jumplist\">\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_cmds_WhatisaCustomCommand.htm\">What is a Custom Command?</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_cmds_wizard.htm\">Custom Command Wizard</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_cmds_RegisteringCommands.htm\">Registering Commands</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_cmds_SettingCommandCapabilities.htm\">Setting Command Capabilities</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_cmds_ProvidingUserInterfaceTextforaCommand.htm\">Providing User Interface Text for a Command</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_cmds_AddingArguments.htm\">Adding Arguments</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_cmds_WorkingwithArguments.htm\">Working with Arguments</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_cmds_ReturningValues.htm\">Returning Values </a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_cmds_ExportingCCallbacks.htm\">Exporting C++ Callbacks</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_cmds_CallingCCustomCommandsfromScripting.htm\">Calling C++ Custom Commands from Scripting</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_cmds_AddingCommandstoMenus.htm\">Adding Commands to Menus</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_cmds_UndoingAndRedoingCustomCommands.htm\">Undoing and Redoing Custom Commands</a></li>\n\
               </ul>\n\
            </div></span><div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";