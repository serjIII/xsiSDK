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
      <meta name=\"topicid\" content=\"GUID-B6FD2238-6532-429A-B9CC-E5FAB225EA8D\" />\n\
      <meta name=\"indexterm\" content=\"UFOs\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>What is a Custom Fx Operator?</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-B6FD2238-6532-429A-B9CC-E5FAB225EA8D\"></a></span><div class=\"head\">\n\
            <h1>What is a Custom Fx Operator?</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-08730517-87C2-49E0-9CBE-757077500DB7\"></a></span>Fx operators let users perform compositing and effects tasks ranging from modifying\n\
            and fine-tuning clips to verifying and tweaking the results of a multi-pass render.\n\
            Complex special effects sequences can be created by connecting Fx operators in the\n\
            Fx tree.\n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-8BFE9377-0B40-46FD-B9BA-4C4C2A0CFB4D\"></a></span>The Softimage Compositor currently includes over 130 film quality effects whose parameters\n\
            are completely animatable using expressions or function curves. Using the UFO API,\n\
            you can create your own Fx operators for use inside the Fx tree.\n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-7F2C3124-1AEF-4C3B-844A-5AE28C3E6F7A\"></a></span>Fx operators perform a specific image-processing effect. They contain a selection\n\
            from a set of pre-defined user functions. Once loaded into the Fx tree, they are automatically\n\
            used like any factory Fx operator shipped with the Softimage Compositor. The user\n\
            interface is built automatically for you based on the parameters exposed in the operator\'s\n\
            implementation.\n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-9FED1E75-F624-4A7A-B6F4-8BB448641B53\"></a></span>Anybody with experience with C or C++ and has an understanding of the effect they\n\
            want to achieve can write a custom Fx operator.\n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-44ADC50E-0408-4101-A457-837B8203877C\"></a></span>Note that the UFO API is for defining Fx operators only. You cannot write anything\n\
            back to the Softimage scene. However you should be able link with libraries and call\n\
            any function in a Fx operator, including global functions in the Softimage object\n\
            model or C++ API. Note, however, these limitations:\n\
         </p>\n\
         <ul>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-FBBEBCB1-E102-4892-B635-57DF3BB24EF4\"></a></span>You cannot call any function that requires anything that an update context provides\n\
                  to a Softimage operator, since Fx operators do not have one.\n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-476694C8-41CB-40C9-B8A8-1448C0BA0091\"></a></span>You cannot make calls to the object model inside a callback such as <em class=\"strong\">ufoRenderLine</em> or <em class=\"strong\">ufoRenderPixel</em> since these functions run in parallel on multiple CPUs and Softimage is not thread-safe.\n\
               </p> \n\
            </li>\n\
         </ul>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";