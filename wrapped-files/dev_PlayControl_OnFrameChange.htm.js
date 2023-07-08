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
      <meta name=\"topicid\" content=\"GUID-7DA81BB9-EEDC-4FB6-8A4A-A5A3EAEF66AF\" />\n\
      <meta name=\"indexterm\" content=\"playback controls: playback events\" />\n\
      <meta name=\"indexterm\" content=\"OnFrameChange: playback events\" />\n\
      <meta name=\"indexterm\" content=\"rendering: event handlers for\" />\n\
      <meta name=\"indexterm\" content=\"event handlers: for rendering\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Running Commands During Playback at Each Frame Change</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-7DA81BB9-EEDC-4FB6-8A4A-A5A3EAEF66AF\"></a></span><div class=\"head\">\n\
            <h1>Running Commands During Playback at Each Frame Change</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-AF454BC3-291A-4A3E-B83D-0D1DD8642BD9\"></a></span>You may need to run a quick command at every frame change during playback, such as\n\
               logging some scene information based on the current animation. There is a parameter\n\
               on the PlayControl property set which can hold a simple VBScript snippet that will\n\
               run whenever the frame changes. This is the <span class=\"code\" translate=\"no\">OnFrameChangeCommand</span> parameter (see <span class=\"char_link\"><a href=\"#!/url=./files/dev_PlayControl_OnFrameChange.htm#WS00FA839CE9F5F148906F76DDEF5331DD-0081\">VBScript Example: Logging an Object\'s Position at Each Frame Change</a></span>).\n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-B3E95254-563F-4F73-9C1F-E0BAC88DE1D8\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-EE5FF6DC-110D-4628-A018-CF237FE7F157\"></a></span>This parameter is only triggered during playback. If you are looking for an event\n\
                     that will be triggered by a frame change during rendering, you must implement an event\n\
                     handler for the <em class=\"strong\">OnBeginFrame</em> or <em class=\"strong\">OnEndFrame</em> event. For more information, see <span class=\"char_link\"><a href=\"#!/url=./files/dev_PlayControl_OnFrameChange.htm#WS00FA839CE9F5F148906F76DDEF5331DD-0082\">A Note About Event Handlers for Rendering</a></span>.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0081\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-B947AF35-43CF-4778-8F11-41FE5A6F2569\"></a></span>VBScript Example: Logging an Object\'s Position at Each Frame Change\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-F84C4734-55BE-47A2-B3F1-6071AAA8FC0D\"></a></span>This example logs the null\'s position in 3 separate calls to Application.LogMessage.\n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-23D6D34F-8843-4F4F-B7E0-996DEF4452CF\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-F38AF1F6-C1D7-41E5-AFBA-264518C142FC\"></a></span>VBScript is the only supported language for this command. Note that since VBScript\n\
                        marks the end of lines with a return character, if you want to run more than a one-line\n\
                        command you must separate each line of code with <span class=\"code\" translate=\"no\">vbCrLf</span> (VBScript enum for the return character).\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
dim cmd2run\n\
cmd2run = \"Application.LogMessage GetValue(\" &amp; Chr(34) &amp; \"null.kine.local.posx\" &amp; Chr(34) &amp; \")\" &amp; vbCrLf _\n\
&amp; \"Application.LogMessage GetValue(\" &amp; Chr(34) &amp; \"null.kine.local.posy\" &amp; Chr(34) &amp; \")\" &amp; vbCrLf _\n\
&amp; \"Application.LogMessage GetValue(\" &amp; Chr(34) &amp; \"null.kine.local.posz\" &amp; Chr(34) &amp; \")\"\n\
SetValue \"PlayControl.OnFrameChangeCommand\", cmd2run\n\
</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0082\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-8D9A34EC-495E-4CE4-A430-BC7437494B0F\"></a></span> A Note About Event Handlers forRendering\n\
               </h2>   \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-72CDD01C-ACCF-4557-90B8-C26407B87D07\"></a></span>If you need to run something at every frame update during rendering, you can use one\n\
                  of these events (for more information about how to implement these events, see <a href=\"#!/url=./files/cus_events.htm\">Custom Events</a>):\n\
               </p> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-C41686E5-F357-4FCF-BB00-C8AC342C5A1E\"></a></span> <em class=\"strong\">OnBeginFrame</em>—triggered before a frame gets rendered. These events are registered with the <a href=\"#!/url=./si_om/siEventID.html\">siOnBeginFrame</a> enum.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-3A448E65-0292-483A-9EE8-C1C94174F586\"></a></span> <em class=\"strong\">OnEndFrame</em>—triggered after a frame gets rendered. These events are registered with the <a href=\"#!/url=./si_om/siEventID.html\">siOnEndFrame</a> enum.\n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-5E0F68E5-BDD4-4C11-9A77-EDB1530C9893\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-3DEBF261-0829-402E-A22B-102BC4011FD6\"></a></span>If you want a frame change during rendering to trigger an event, you must use either\n\
                        the <a href=\"#!/url=./si_om/siEventID.html\">siOnBeginFrame</a> or <a href=\"#!/url=./si_om/siEventID.html\">siOnEndFrame</a> event handlers. The <span class=\"code\" translate=\"no\">OnFrameChangeCommand</span> parameter is only triggered during playback.\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";