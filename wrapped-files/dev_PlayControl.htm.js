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
      <meta name=\"topicid\" content=\"GUID-21827734-41E9-489B-BCB2-278042583DF2\" />\n\
      <meta name=\"indexterm\" content=\"playback controls: overview\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Playback Controls</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-21827734-41E9-489B-BCB2-278042583DF2\"></a></span><div class=\"head\">\n\
            <h1>Playback Controls</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-FC89835A-2635-4FCB-AD2F-941D292768D8\"></a></span>Controls are fundamentally a set of parameters that control how the user moves around\n\
               in the timeline and how the scene is played back. This set of parameters is contained\n\
               in the Play Control property set (its scripting name is <span class=\"code\" translate=\"no\">PlayControl</span>). Some of the most useful parameters include: \n\
            </p><span class=\"anchor_wrapper\"><a name=\"UL_ECC4298F6BB24715A98BD24F431D9703\"></a></span><ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-C114BFB7-9732-40C0-B248-C484D48F0AA7\"></a></span> <span class=\"code\" translate=\"no\">Current</span>: Contains the current frame number (see <span class=\"char_link\"><a href=\"#!/url=./files/dev_PlayControl_CurrFrame.htm\">Getting and Changing the Current Frame</a></span>). \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-BCFB878E-5AB9-413A-AF72-032C0E6901FD\"></a></span> <span class=\"code\" translate=\"no\">In</span> and <span class=\"code\" translate=\"no\">Out</span>: Contains the first and last frame numbers (see <span class=\"char_link\"><a href=\"#!/url=./files/dev_PlayControl_Moving.htm\">Moving Around in the Timeline</a></span>). \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-63E8C238-4744-4640-8C6C-4B0474DC87A2\"></a></span> <span class=\"code\" translate=\"no\">Loop</span>: True for continuous playback (looping). \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-0752E23A-61C4-4208-B5AC-21E72B98F9CA\"></a></span> <span class=\"code\" translate=\"no\">Step</span>: Sets the interval at which frames are played back in the viewport. A value of <span class=\"code\" translate=\"no\">2</span> causes the viewports to display only every second frame in the viewport during playback.\n\
                     \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-B8E007B9-3862-4D33-9CDC-22D466316A1B\"></a></span> <span class=\"code\" translate=\"no\">Format</span> and <span class=\"code\" translate=\"no\">Rate</span>: Control the frame rate for the PAL, NTSC, Film, and HDTV formats (see <span class=\"char_link\"><a href=\"#!/url=./files/dev_PlayControl_ControllingFrameRateAndFormat.htm\">Controlling the Frame Rate and Format</a></span> for more information). \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-5FB346C5-5CE0-466D-827F-0A62B09608F5\"></a></span> <span class=\"code\" translate=\"no\">KeepFrameTiming</span>: Determines whether to save fcurve keys in frames (relative) or seconds (absolute).\n\
                     \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-7018F6E0-ACF0-444E-AF1C-7E164D8091BE\"></a></span> <span class=\"code\" translate=\"no\">OnFrameChangeCommand</span>: Allows you to run simple VBScript code each time the frame changes (see <span class=\"char_link\"><a href=\"#!/url=./files/dev_PlayControl_OnFrameChange.htm\">Running Commands During Playback at Each Frame Change</a></span> for more information). \n\
                  </p> \n\
               </li>\n\
               <li><span class=\"code\" translate=\"no\">SequencerIn</span> and <span class=\"code\" translate=\"no\">SequencerOut</span>: Contains the first and last frame numbers in the Sequencer Timeline. The Camera\n\
                  Sequencer feature introduces a second timeline (Sequencer Time) in Softimage to playback\n\
                  the original scene in another timing while keeping the original animation. See the\n\
                  Softimage user\'s guide for more information about the Camera Sequencer. \n\
               </li>\n\
               <li><span class=\"code\" translate=\"no\">CurrentSequencer</span>: Contains the current frame number in the Sequencer Timeline. \n\
               </li>\n\
            </ul>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-B06C6D26-8294-46AB-930F-1AF1C6420001\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-592AD953-A30F-4CDB-B735-7A9ECC94DEB6\"></a></span>PlayControl does not have a special class implemented in the object model or C++ API.\n\
                     Most functionality is available through scripting commands, but you can also access\n\
                     it in the object model and the C++ API like any other <a href=\"#!/url=./si_om/Property.html\">Property</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1Property.html\">Property</a> object, which is demonstrated in <span class=\"char_link\"><a href=\"#!/url=./files/dev_PlayControl_Accessing.htm\">Accessing the PlayControl Property Set</a></span>. \n\
                  </p> \n\
               </div>\n\
            </div>\n\
         </div><span class=\"noindex\">\n\
            <div class=\"topic-list\">\n\
               <h4 class=\"related\">Topics in this section</h4>\n\
               <ul class=\"jumplist\">\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/dev_PlayControl_Accessing.htm\">Accessing the PlayControl Property Set</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/dev_PlayControl_CurrFrame.htm\">Getting and Changing the Current Frame</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/dev_PlayControl_Moving.htm\">Moving Around in the Timeline</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/dev_PlayControl_StartPlayback.htm\">Starting the Playback in Any Direction</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/dev_PlayControl_Options.htm\">Changing the PlayControl Options</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/dev_PlayControl_ControllingFrameRateAndFormat.htm\">Controlling the Frame Rate and Format</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/dev_PlayControl_OnFrameChange.htm\">Running Commands During Playback at Each Frame Change</a></li>\n\
               </ul>\n\
            </div></span><div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";