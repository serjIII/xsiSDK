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
      <meta name=\"topicid\" content=\"GUID-919EC646-7638-4324-A255-6AA4D747B202\" />\n\
      <meta name=\"indexterm\" content=\"Interpolation\" />\n\
      <meta name=\"indexterm\" content=\"Extrapolation\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>FCurve Interpolation and Extrapolation</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-919EC646-7638-4324-A255-6AA4D747B202\"></a></span><div class=\"head\">\n\
            <h1>FCurve Interpolation and Extrapolation</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-192ABF07-D6D0-4382-8C77-959A2CD0D8DC\"></a></span>Function curve <em class=\"strong\">extrapolation</em> determines the shape of an fcurve <em class=\"mild\">before the first key and after the last key</em>. Extrapolation extends the curve\'s ends based on the position of these two extreme\n\
               points.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0033\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-AFE9A942-F307-4A53-8E5D-307F7E36DA8F\"></a></span>SDK Access\n\
               </h2> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-7F65B75B-1A27-43FC-9FF5-EEEAFC03A027\"></a></span><a href=\"#!/url=./si_om/FCurve.Extrapolation.html\">FCurve.Extrapolation</a> or FCurve::GetExtrapolation or FCurve::PutExtrapolation\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-CFD5FF81-032F-413D-87EB-1671491EBF61\"></a></span><a href=\"#!/url=./si_om/siFCurveExtrapolation.html\">siFCurveExtrapolation</a> or <a href=\"#!/url=./si_om/siFCurveExtrapolation.html\">siFCurveExtrapolation</a></p> \n\
                  </li>\n\
               </ul> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-3D43ED3D-AAC7-470A-BDEA-BA1BF928CCCA\"></a></span>Function curve <em class=\"strong\">interpolation</em> is a way of estimating how animation progresses <em class=\"mild\">between</em> keys. Interpolation can be constant, linear, or cubic. <em class=\"mild\">Cubic</em> means that a Bezier curve is calculated as the interpolation between the keys. Softimage\n\
                  uses cubic Bezier curves defined as follows:\n\
               </p>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-A5B8FB47-D20D-46AC-A370-25FA5D93D4E5\"></a></span>\"Four points A, B, C and D in the plane or in three-dimensional space define a cubic\n\
                  Bezier curve. The curve starts at A going toward B and arrives at D coming from the\n\
                  direction of C. In general, it will not pass through B or C; these points are only\n\
                  there to provide directional information. The distance between A and B determines\n\
                  \"how long\" the curve moves into direction B before turning towards D.\"\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-2E05C459-3EE9-4D77-8071-5F9851D102C6\"></a></span>(from de Casteljau\'s algorithm)\n\
               </p>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-4A8DC468-C3CD-4590-B8DF-1D8334F5951A\"></a></span>The parametric form of the curve is:\n\
               </p> <span class=\"code\" translate=\"no\">B(t) = A(1-t)^3 + 3Bt(1-t)^2 + 3Ct^2(1-t) + Dt^3</span> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0034\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-53946061-6B5D-4C18-BD4F-3DA0ABC73472\"></a></span>SDK Access\n\
               </h2> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-0D45D61C-FCD0-4EB0-8399-AFE9F0860CE8\"></a></span><a href=\"#!/url=./si_om/FCurve.Interpolation.html\">FCurve.Interpolation</a> or FCurve::GetInterpolation or FCurve::PutInterpolation\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-7324925B-E6B1-4E30-B478-157BA5FB9BF1\"></a></span><a href=\"#!/url=./si_om/FCurveKey.Interpolation.html\">FCurveKey.Interpolation</a> or FCurveKey::GetInterpolation or FCurveKey::PutInterpolation\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-FDF2DEB5-3878-431A-BC7C-44D50810D9F8\"></a></span><a href=\"#!/url=./si_om/siFCurveInterpolation.html\">siFCurveInterpolation</a> or <a href=\"#!/url=./si_om/siFCurveInterpolation.html\">siFCurveInterpolation</a></p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-3538EDD5-C1C9-4856-B91B-3FC5E549D3FC\"></a></span><a href=\"#!/url=./si_om/siFCurveKeyInterpolation.html\">siFCurveKeyInterpolation</a> or <a href=\"#!/url=./si_om/siFCurveKeyInterpolation.html\">siFCurveKeyInterpolation</a></p> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";