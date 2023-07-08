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
      <meta name=\"topicid\" content=\"GUID-BD6DE9E0-FFAC-43BE-A617-4DD584E1F43A\" />\n\
      <meta name=\"indexterm\" content=\"UFOs: screen drawing\" />\n\
      <meta name=\"indexterm\" content=\"UFOs: screen interaction\" />\n\
      <meta name=\"indexterm\" content=\"screen: drawing, in UFOs\" />\n\
      <meta name=\"indexterm\" content=\"screen: interaction, in UFOs\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Screen Drawing and Screen Interaction</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-BD6DE9E0-FFAC-43BE-A617-4DD584E1F43A\"></a></span><div class=\"head\">\n\
            <h1>Screen Drawing and Screen Interaction</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-2EE0C2F1-FE3E-499B-AAB2-568BE34262C3\"></a></span>You can provide screen drawing through the <em class=\"mild\">UFOEditorRGBDraw</em> and <em class=\"mild\">UFOEditorOverlayDraw</em> user functions. They let the user draw OpenGL graphics in the RGB image plane and\n\
               the overlay image plane respectively.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-CA5BF580-CFBE-471D-B3C2-5C7E9558CBB2\"></a></span>You can provide screen interaction using the following user functions; any subset\n\
               of which may be combined to produce the desired interface. <em class=\"mild\">ufoEditorMouseDown</em>, <em class=\"mild\">ufoEditorMouseUp</em>, <em class=\"mild\">ufoEditorMouseDrag</em>, and <em class=\"mild\">ufoEditorMousePosition</em> are called on the corresponding mouse events and <em class=\"mild\">ufoEditorKeyEvent</em> is called on a keyboard key press. The <em class=\"mild\">ufoEditorDraw</em> library function causes the editor to set up context for OpenGL drawing, and calls\n\
               <em class=\"mild\">ufoEditorOverlayDraw</em> or <em class=\"mild\">ufoEditorRGBDraw</em>. This speeds up screen drawing during screen or GUI interaction.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-84225709-0DAD-4983-8004-0EEA193BFA3B\"></a></span>OpenGL projections are set up for projection of the full or master raster resolution\n\
               coordinate space on the screen. For mouse interaction, the supplied X,Y position will\n\
               be in full or master raster resolution pixel coordinates.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-9DEA25B7-E1B0-4E2B-B64D-855761504126\"></a></span>The Softimage Compositor lets you zoom the viewed raster during editing by an arbitrary\n\
               factor. The <em class=\"mild\">ufoEditorRGBDraw</em> and <em class=\"mild\">ufoEditorOverlayDraw</em> user functions may need to take into account any raster zooming. The UFO library\n\
               function <em class=\"mild\">ufoEditorGetPixelSize</em> gets the X and Y pixel size of the viewed raster indicating the zoom factor.\n\
            </p>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";