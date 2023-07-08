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
      <meta name=\"topicid\" content=\"GUID-2504412E-1CD0-4693-89C1-3DD15CD42699\" />\n\
      <meta name=\"indexterm\" content=\"Windows Scripting Host\" />\n\
      <meta name=\"indexterm\" content=\"Python ActiveX\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Debugging Scripts</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-2504412E-1CD0-4693-89C1-3DD15CD42699\"></a></span><div class=\"head\">\n\
            <h1>Debugging Scripts</h1>\n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS74602FA0B9B41E4C91B574963E250A95-0002\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-D86D13E9-35EC-42B5-A96A-2B33FBBA0505\"></a></span> Windows Scripting Host\n\
            </h2>  \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-17E00689-A351-4EFB-B79D-864EA97D592B\"></a></span>Softimage does not currently offer an Integrated Development Environment (IDE) for\n\
               VBScript or JScript. However, you can write your code in the Softimage script editor\n\
               and use the Microsoft Script Debugger to debug it interactively. \n\
            </p> \n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-3B4DCD51-3CB7-4C59-A15E-B11E247AFCF7\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span>You can also use the Visual Studio debugger instead of the free version. You are prompted\n\
                  to select the debugger to use when you invoke it for the first time. For information\n\
                  about how to use it, see the Visual Studio help. \n\
               </div>\n\
            </div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS74602FA0B9B41E4C91B574963E250A95-0003\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-BBC9EC24-28FD-4E44-9E0E-A4AE10BE7552\"></a></span> Python ActiveX\n\
            </h2>  \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F083B1C9-9D15-4473-A0BF-98AA2152A5A0\"></a></span>Python uses its own debugger which can be called by setting a breakpoint in the editing\n\
               pane (<span class=\"MenuCascade\" id=\"GUID-CE5CD4AE-A772-4BAE-BDF2-0C99282184D3\">Tools <img src=\"../images/ac.menuaro.gif\" /> Set Breakpoint</span> from the context menu). You can debug your code in an interactive shell that also\n\
               interacts directly with Softimage. \n\
            </p> \n\
         </div><span class=\"noindex\">\n\
            <div class=\"topic-list\">\n\
               <h4 class=\"related\">Topics in this section</h4>\n\
               <ul class=\"jumplist\">\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/script_debug_UsingtheMicrosoftScriptDebugger.htm\">Using the Microsoft Script Debugger</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/script_debug_UsingthePyWinDebugger.htm\">Using the PyWin Debugger</a></li>\n\
               </ul>\n\
            </div></span><div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";