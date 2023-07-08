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
      <meta name=\"topicid\" content=\"GUID-696F66B9-7C24-4D31-A08D-0C5716043B4C\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Applying Custom ICENodes</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-696F66B9-7C24-4D31-A08D-0C5716043B4C\"></a></span><div class=\"head\">\n\
            <h1>Applying Custom ICENodes</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-5D769C37-D4B4-4201-B55C-E103CE25FF74\"></a></span>To use a custom <a href=\"#!/url=./si_cpp/classXSI_1_1ICENode.html\">ICENode</a> in Softimage, follow these steps:\n\
            </p><span class=\"anchor_wrapper\"><a name=\"GUID-274371A4-F2CE-4D4F-B82F-17126B4B9001\"></a></span><ol type=\"1\" start=\"1\">\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-1C6FAEBF-CC9E-475D-8EB6-CB4561B909AD\"></a></span>Build and register the ICENode:\n\
                  </p> \n\
                  <ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-2FCACDD1-41D1-45E2-A5AC-71EDBD625047\"></a></span>Use the Custom ICENode wizard to build your custom ICENodes.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-78D467A3-831D-437A-B052-A8FD65037608\"></a></span>Fill the required callback with the proper implementation code.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-125E6516-E0AC-4AA2-B448-27B4D72AF523\"></a></span>Softimage registers the ICENode when the plug-in is loaded.\n\
                        </p> \n\
                     </li>\n\
                  </ul> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-EA699DF1-CF03-48D2-A541-2670FB4C1D42\"></a></span>Create the ICENode instance. There are two ways you can do this:\n\
                  </p> \n\
                  <ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-463B2241-040A-454E-BF21-5F2361D8E1CF\"></a></span> <em class=\"strong\">From the Softimage user interface</em>:\n\
                        </p> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-C74A1F7D-E35D-49D6-A573-9E126735ED2D\"></a></span>See the instructions in the Softimage user guide for working in the ICE Tree.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-C33FC894-1041-4430-B8A7-6D0CDA166318\"></a></span> <em class=\"strong\">From scripting</em>:\n\
                        </p> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-0C06484D-EB3E-4402-B420-419FA7E54D5C\"></a></span>Use the <a href=\"#!/url=./si_cmds/ApplyICEOp.html\">ApplyICEOp</a> command to apply your ICENode on a specific <a href=\"#!/url=./si_om/ICETree.html\">ICETree</a> operator.\n\
                        </p> \n\
                     </li>\n\
                  </ul> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-FA79943A-E521-43E0-81E8-7BA34644D9D2\"></a></span>Connect your ICENode to other ICENode ports of a graph.\n\
                  </p> \n\
               </li>\n\
            </ol>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";