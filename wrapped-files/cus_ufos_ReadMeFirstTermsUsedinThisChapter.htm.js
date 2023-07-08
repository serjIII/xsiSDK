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
      <meta name=\"topicid\" content=\"GUID-8DA1B18B-5BFC-4EE3-A984-EBFE641882CB\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>UFO Terminology</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-8DA1B18B-5BFC-4EE3-A984-EBFE641882CB\"></a></span><div class=\"head\">\n\
            <h1>UFO Terminology</h1>\n\
         </div><span class=\"anchor_wrapper\"><a name=\"UL_6919492D61024036BB3E32688C96BE40\"></a></span><ul>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-037AA354-3AE3-4B19-B30E-B49B5EF70B60\"></a></span> <em class=\"strong\">UFO:</em> User Function Objects, the name of this API. The API is used to create custom Fx\n\
                  operators for Softimage. \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-F4637ACD-FD0F-4E7A-BE30-26BF6B270ADE\"></a></span> <em class=\"strong\">Process:</em> This is the image processing plug-in. The words Process and Plug-in are interchangeable.\n\
                  \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-87329E4E-FF0C-4724-A30F-1B51A58BD8D9\"></a></span>Only on Process can be found in a given dynamic library (.dll under Windows, or.so\n\
                  under Linux). The plug-in works by exporting an agreed upon list of functions, all\n\
                  of them optional except for <em class=\"strong\">ufoProcessDefine()</em> and one of the rendering callbacks, either <em class=\"strong\">ufoProcessRenderPixel</em>, <em class=\"strong\">ufoProcessRenderLine</em> or <em class=\"strong\">ufoProcessRenderRectangle</em>. \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-4D759E7B-43BB-4DA7-8E5B-51D1381332EF\"></a></span> <em class=\"strong\">Raster</em>: A raster is one image, a bottom-up rectangle of pixels allocated from a given lower\n\
                  corner to an upper corner. The image does not necessarily start at 0,0. The image\n\
                  is allocated by the host prior to the rendering function, and cannot be resized afterwards.\n\
                  Another callback, <em class=\"strong\">ufoProcessCalcDefinedRectangle</em>, can be exposed by the Process to override the output image size normally calculated\n\
                  by the host, for example to implement a resize plug-in. The plug-in should also implement\n\
                  <em class=\"strong\">ufoProcessCalcNeedRectangles</em>() to tell the host which region it needs from the input images to produce the output\n\
                  image, if they aren\'t the same. For example, a blur usually requires a slightly larger\n\
                  region from the inputs to calculate the output. The host will validate and clip the\n\
                  coordinate automatically as appropriate. \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-032B1178-22A4-48E8-9FAD-4463E4448AD6\"></a></span> <em class=\"strong\">Editor</em>: An Editor is the set of callbacks a Process can implement to implement an interactive\n\
                  tool in the image viewer. The Process will use standard OpenGL calls to implement\n\
                  any overlay it to be drawn on the image. Note that while we use the term \'overlay\',\n\
                  we do not use OpenGL Overlays, it simply means that, in this context, whatever is\n\
                  drawn will be drawn on top of the image. The display is not limited to paletted colors.\n\
                  The OpenGL matrices are set up in such a way that the coordinate system is in pixels,\n\
                  with 0,0 being at the bottom left of the image, and the top right is the size of the\n\
                  image. Zooming and proxy-scaling is handled automatically by the viewer so the Editor\n\
                  does not have to account for it and can simply draw everything at full scale. The\n\
                  host function <em class=\"strong\">ufoEditorGetPixelSize</em> can be used to get the actual size of a pixel on screen, so that lines can be kept\n\
                  the same size at any viewing zoom \n\
               </p> \n\
            </li>\n\
         </ul>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";