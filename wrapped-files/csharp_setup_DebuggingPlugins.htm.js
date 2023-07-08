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
      <meta name=\"topicid\" content=\"GUID-607932C0-A970-4F95-999D-962F4D791255\" />\n\
      <meta name=\"indexterm\" content=\"debugging: C# plug-ins\" />\n\
      <meta name=\"indexterm\" content=\"plug-ins: debugging, C#\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Debugging Plug-ins</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-607932C0-A970-4F95-999D-962F4D791255\"></a></span><div class=\"head\">\n\
            <h1>Debugging Plug-ins</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS1D1057D35CC4FA4FBF44F4C18EA3351F-0013\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-54F4D3FF-3B6E-441E-9B1C-60155A8812E0\"></a></span>To debug the plug-in:\n\
               </h2> <span class=\"anchor_wrapper\"><a name=\"GUID-BE70CEAB-A086-4252-B355-42DE0CF47E8F\"></a></span><ol type=\"1\" start=\"1\">\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-23C4E550-D535-478F-A818-F5EC159C42DA\"></a></span>Compile a Debug version of your plug-in and then start Softimage. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-BE0B40C7-ADC8-479B-88BA-0BE9450DC3AA\"></a></span>In Visual Studio, select <span class=\"MenuCascade\" id=\"GUID-2B84F0A4-C131-41DA-A065-56BE9085F2E3\">Debug <img src=\"../images/ac.menuaro.gif\" /> Attach to Process</span>. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-AFC7249E-2525-4F20-9FDA-C3EDDFB44883\"></a></span>In the <span class=\"MenuCascade\" id=\"GUID-618556E2-E221-40C6-A400-4BDD03DEE321\">Attach to Processes</span> dialog, select <span class=\"filePath\" translate=\"no\">XSI.exe</span> in the list of <span class=\"MenuCascade\" id=\"GUID-86929BCD-2BEA-44B9-AEC4-7A85B3BDB9CF\">Available Processes</span>. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-D9453693-B16C-437D-ADB8-A4C3F5B8756D\"></a></span>Click <span class=\"MenuCascade\" id=\"GUID-6EAC9A5B-3DB5-4786-8DD7-94F2EB9807B2\">Attach</span>. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-FBFC011F-A6BB-42AE-9698-D5B64ED45BBA\"></a></span>Set some breakpoints and start debugging. \n\
                     </p> \n\
                  </li>\n\
               </ol> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";