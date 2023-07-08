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
      <meta name=\"topicid\" content=\"GUID-9C1DA82B-4049-4B2B-88A7-93EDAED1F474\" />\n\
      <meta name=\"indexterm\" content=\"custom events: registering\" />\n\
      <meta name=\"indexterm\" content=\"C++ Example: Registering an event handler\" />\n\
      <meta name=\"indexterm\" content=\"custom commands: naming\" />\n\
      <meta name=\"indexterm\" content=\"names: commands\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Registering Event Handlers</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-9C1DA82B-4049-4B2B-88A7-93EDAED1F474\"></a></span><div class=\"head\">\n\
            <h1>Registering Event Handlers</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-C6C577BA-BF3C-427F-B70F-2789156F6858\"></a></span> You register event handlers in <a href=\"#!/url=./si_cmds/cb_XSILoadPlugin.html\">XSIL:oadPlugin</a>, which is called when Softimage loads a self-installing plug-in. <a href=\"#!/url=./si_cmds/cb_XSILoadPlugin.html\">XSIL:oadPlugin</a> gets a <a href=\"#!/url=./si_om/PluginRegistrar.html\">PluginRegistrar</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1PluginRegistrar.html\">PluginRegistrar</a> object from Softimage, and you use the <a href=\"#!/url=./si_om/PluginRegistrar.RegisterEvent.html\">PluginRegistrar.RegisterEvent</a> or PluginRegistrar::RegisterEvent method to register handlers for different events.\n\
               \n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSE6F22389D4AF5541AB13394556078574-000C\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-B83B326E-DF9C-4406-8B13-6D3AC1EBC952\"></a></span> C++ Example: Registering an event handler\n\
               </h2>  \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
XSIPLUGINCALLBACK CStatus XSILoadPlugin( PluginRegistrar&amp; in_reg )\n\
{\n\
	in_reg.PutAuthor(L\"Event Wizard User\");\n\
	in_reg.PutName(L\"MyCppEventHandlers\");\n\
	in_reg.PutVersion(1,0);\n\
	in_reg.RegisterEvent( L\"MyOnSelectionChange\", siOnSelectionChange );\n\
	return CStatus::OK;\n\
}</pre></div> <span class=\"anchor_wrapper\"><a name=\"UL_E1F277B6F5BA4913837A5B09B6E2F609\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-5FB233FD-8799-42EF-AA37-9992B2EC36CE\"></a></span> The first parameter to <a href=\"#!/url=./si_om/PluginRegistrar.RegisterEvent.html\">PluginRegistrar.RegisterEvent</a> or PluginRegistrar::RegisterEvent is the <span class=\"char_link\"><a href=\"#!/url=./files/cus_self_NamingPluginItems.htm\">name</a></span> of the event handler. This name is used to name the callback function that implements\n\
                        an event handler. For example, the <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html\">OnEvent</a> callback for an event handler named <span class=\"code\" translate=\"no\">\"MyOnSelectionChange\"</span> is <span class=\"code\" translate=\"no\">\"MyOnSelectionChange_OnEvent\"</span>. \n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-9E59DDB5-3909-46F9-A790-03E9B7C4D833\"></a></span>This name is also the name of the event in the <a href=\"#!/url=./si_om/EventInfoCollection.html\">EventInfoCollection</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1CRefArray.html\">CRefArray of EventInfo</a> returned by <a href=\"#!/url=./si_om/XSIApplication.EventInfos.html\">XSIApplication.EventInfos</a> or Application::GetEventInfos. \n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-F4EE083A-341C-45DA-BCE4-E158E85E8D26\"></a></span>The first character in an event handler name should be a letter. Subsequent characters\n\
                        can be letters, numbers, underscore (_) characters, or spaces. If an event handler\n\
                        name contains spaces (for example, \"My Event\"), then you must remove the spaces in\n\
                        the callback function name (for example, \"MyEvent_OnEvent\"). \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-15282FBE-CBF2-406B-816B-C43E06E96680\"></a></span>The second argument is the <a href=\"#!/url=./si_om/siEventID.html\">siEventID</a> of the <span class=\"char_link\"><a href=\"#!/url=./files/cus_events_SupportedEvents.htm\">event</a></span> that triggers the <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html\">OnEvent</a> callback. \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";