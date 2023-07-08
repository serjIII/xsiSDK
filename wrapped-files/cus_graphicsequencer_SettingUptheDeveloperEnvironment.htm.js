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
      <meta name=\"topicid\" content=\"GUID-E6616F51-79CE-4028-8A8D-736B6D0DA359\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Creating Softimage Graphic Sequencer (XGS) Plug-ins</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-E6616F51-79CE-4028-8A8D-736B6D0DA359\"></a></span><div class=\"head\">\n\
            <h1>Creating Softimage Graphic Sequencer (XGS) Plug-ins</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-A47ECD3A-CB96-422F-9BB3-81D9B4AEB36B\"></a></span>Viewport modes and callbacks use Softimage\'s C++ API. Before you begin, make sure\n\
               you have set up your environment as described in Building C++ Plug-ins. In addition\n\
               to these settings, the xsi_graphicsequencer.h and xsi_graphicsequencercontext.h header\n\
               files are required when developing graphic sequencer plug-ins. \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-DD469650-8563-43E2-8ED0-E877B7405E86\"></a></span>Viewport modes and callbacks are implemented in C++ as self-installing plug-ins, so\n\
               you need to implement <a href=\"#!/url=./si_cmds/cb_XSILoadPlugin.html\">XSILoadPlugin</a> to call the <a href=\"#!/url=./si_cpp/classXSI_1_1PluginRegistrar.html#RegisterDisplayCallback\">PluginRegistrar::RegisterDisplayCallback</a> (to register a viewport callback) and <a href=\"#!/url=./si_cpp/classXSI_1_1PluginRegistrar.html#RegisterDisplayPass\">PluginRegistrar::RegisterDisplayPass</a> (to register a viewport mode) functions, which instantiate the <a href=\"#!/url=./si_cpp/classXSI_1_1CGraphicSequencer.html\">CGraphicSequencer</a> object. The <a href=\"#!/url=./si_cpp/classXSI_1_1CGraphicSequencer.html\">CGraphicSequencer</a> object provides services to enable custom rendering passes in the OpenGL viewport.\n\
               \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-34C3B0CC-0305-4C83-BEEA-7825C444A00A\"></a></span>In the <a href=\"#!/url=./si_cmds/cb_XGS_Init.html\">Init callback</a> you get a pointer to the <a href=\"#!/url=./si_cpp/classXSI_1_1CGraphicSequencer.html\">CGraphicSequencer</a> object via the <a href=\"#!/url=./si_cpp/classXSI_1_1GraphicSequencerContext.html\">GraphicSequencerContext</a> which you can use to: \n\
            </p><span class=\"anchor_wrapper\"><a name=\"UL_5FEC1C73659E4D67A65F93418F646F2A\"></a></span><ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-B51F3363-CFE5-41F7-9092-04EBF7031718\"></a></span>Register a new viewport callback, via <a href=\"#!/url=./si_cpp/classXSI_1_1CGraphicSequencer.html#RegisterViewportCallback\">CGraphicSequencer::RegisterViewportCallback</a> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-38D881B1-6037-49A2-93BD-62A68EFD0482\"></a></span>Register a new viewport mode, via <a href=\"#!/url=./si_cpp/classXSI_1_1CGraphicSequencer.html#RegisterViewportMode\">CGraphicSequencer::RegisterViewportMode</a> \n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-155A1AD6-482B-410C-AFE7-01E6960D0E2B\"></a></span>These registration functions allow you to declare <span class=\"char_link\"><a href=\"#!/url=./files/cus_graphicsequencer_Overview.htm\">what type of viewport callback</a></span> you want to define as well as <a href=\"#!/url=./si_om/siViewMode.html\">which view mode</a> will be used. \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-471721F4-3EE1-42AA-8F5E-D8EFDC3471F2\"></a></span>The <a href=\"#!/url=./si_cmds/cb_XGS_Execute.html\">Execute callback</a> is the real workhorse function: it is where you implement what happens when the <span class=\"char_link\"><a href=\"#!/url=./files/cus_graphicsequencer_Overview.htm\">matching viewport callback</a></span> is fired. \n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-5FC314A1-05E0-4863-A34E-164C1B4DDA73\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-2DE0172C-DBF8-4E07-97FF-F7A921E64DE4\"></a></span>See the <a href=\"#!/url=./si_cmds/callbacks.html#cb_graphicsequencer\">Graphic Sequencer Callbacks</a> reference for more details about the list of callbacks you need to implement in your\n\
                     graphic sequencer plug-in. \n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-3DFC2D8F-F356-40C0-B6A1-98DAC8E30F1E\"></a></span>You can also see the <a href=\"#!/url=./examples/Addons/SampleDisplayCallback/netview_SampleDisplayCallback.htm\">SampleDisplayCallback</a> example that shows a Display Callback (MyClearScreenBuffer) and a Display Pass (MyCustomPass).\n\
               This example is available in the examples folder of the Softimage SDK installation\n\
               directory. \n\
            </p>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";