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
      <meta name=\"topicid\" content=\"GUID-766DEE4E-3EE9-493E-A708-2985DDEDD7DB\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Limitations</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-766DEE4E-3EE9-493E-A708-2985DDEDD7DB\"></a></span><div class=\"head\">\n\
            <h1>Limitations</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-006E\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-2936319F-8712-410E-9A0B-00F96C9D026E\"></a></span>Data Type\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-06B85E64-CB0A-498F-8CAE-1375B6951178\"></a></span>The following port data types are not supported for custom <a href=\"#!/url=./si_cpp/classXSI_1_1ICENode.html\">ICENodes</a>:\n\
               </p> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-DFDDAB2E-581A-4719-BBAF-9469D78EE9B2\"></a></span> <a href=\"#!/url=./si_om/siICENodeDataType.html\">siICENodeDataLocation</a> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-8BFCB44E-D598-4018-9B62-A84C8539AB0B\"></a></span> <a href=\"#!/url=./si_om/siICENodeDataType.html\">siICENodeDataExecute</a> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-1D8707A3-D865-4185-9577-D8A504E3C604\"></a></span> <a href=\"#!/url=./si_om/siICENodeDataType.html\">siICENodeDataReference</a> \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-006F\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-B9718221-14EC-49E2-8773-C1FDC2CFA491\"></a></span>Data Access\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-A421C899-15E3-42CD-9522-619AF04BFE9D\"></a></span>In general, calls to C++ API methods for accessing and creating scene objects is not\n\
                  recommended during the evaluation of <a href=\"#!/url=./si_cpp/classXSI_1_1ICENode.html\">ICENodes</a>. It is not recommended to use any of the object model or scripting commands during\n\
                  an evaluation either, as Softimage may become unstable due to possible operator cycles,\n\
                  topology changes or multi-threading issues.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-0070\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-4E86E6C2-C22E-4EEE-8467-FFA302D9AE8E\"></a></span>Port and Group Identifiers\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-7CA639DC-C88E-4EF4-BBBF-072811C97298\"></a></span>Port and group identifiers must not be modified or removed once the <a href=\"#!/url=./si_cpp/classXSI_1_1ICENode.html\">ICENode</a> has been deployed and saved in a scene. Failure to do so may break backward compatibility\n\
                  of older scenes with the current version of the ICENode.\n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";