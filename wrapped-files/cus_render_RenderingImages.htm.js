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
      <meta name=\"topicid\" content=\"GUID-6EF1F8FD-D7E6-4516-B355-1D7DE5AF8B21\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Rendering Images</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"Scene\", \"si_cpp/classXSI_1_1Scene.html\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-6EF1F8FD-D7E6-4516-B355-1D7DE5AF8B21\"></a></span><div class=\"head\">\n\
            <h1>Rendering Images</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-54B0E8C8-AE3D-4BE2-ACE0-D2DF5AD5F1F0\"></a></span>In this mode, the rendering engine is expected to render the objects specified by\n\
               the <span class=\"code\" translate=\"no\">\"<a href=\"javascript:void(0)\" data=\"Scene\" class=\"a_multireflink\">Scene</a>\"</span><a href=\"#!/url=./si_cmds/cb_Renderer_Process.html\">context attribute</a> and periodically send image data back to Softimage using the RendererContext::NewFrame\n\
               and RendererContext::NewFragment calls.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-BDBD5772-3DBF-4D19-BE7D-05DCAAFB0642\"></a></span>The renderer can also write out this rendered data to disk, depending on the state\n\
               of the <span class=\"code\" translate=\"no\">\"FileOutput\"</span><a href=\"#!/url=./si_cmds/cb_Renderer_Process.html\">context attribute</a>.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-BCF2D76F-A17F-4DE2-8DE0-BFD0219C00C8\"></a></span>If the renderer supports rendering multiple render channels, the render channel to\n\
               give back as fragment data to Softimage is specified by the return value of the RendererContext::GetDisplayFramebuffer\n\
               call.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-575D3F21-BDB6-4F15-AA23-88287800D78A\"></a></span>The renderer should also inform Softimage of the current state of the render by calling\n\
               the RendererContext::ProgressUpdate call. It is best to keep the short message under\n\
               30 characters or so. The long message can be up to 100 characters or whichever fits\n\
               best in the render preview window, assuming a PAL or NTSC render.\n\
            </p>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";