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
      <meta name=\"topicid\" content=\"GUID-6F5C6934-36FB-479E-8BB0-D1CEE5FFC2AA\" />\n\
      <meta name=\"indexterm\" content=\"Joint (character development kit)\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Joint</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"Envelope\", \"si_cpp/classXSI_1_1Envelope.html\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-6F5C6934-36FB-479E-8BB0-D1CEE5FFC2AA\"></a></span><div class=\"head\">\n\
            <h1> Joint</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-7390EA74-24AC-45A8-86BD-C956F9FBD417\"></a></span>The <em class=\"strong\">Joint</em> object represents <em class=\"mild\">joint compression</em>, which is a technique used to model two parts of a character pushing into each other,\n\
               usually the arms or the legs. A bounding volume sphere is used on the LowerBone to\n\
               do the pushing, and two nulls are used on the UpperBone to be pushed. For example,\n\
               when the forearm comes into the bicep, the bicep deforms slightly as it is pushed\n\
               by the forearm. The bounding volume is attached to the forearm and the nulls to the\n\
               bicep to get a more realistic skin deformation.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-00A5\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-EB436904-BEDA-4CD5-8BC1-2973F042EF38\"></a></span>Returned by\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-03AE110A-04D8-4E6B-8DE8-EABE518B7A61\"></a></span> <a href=\"#!/url=./si_cmds/MakeJointCompression.html\">MakeJointCompression</a> \n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-00A6\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-F237C3CC-0092-4088-940A-A36F1653FA3B\"></a></span>Also available via\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-AEC22E2A-9842-4728-A947-B83356EEFA46\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/CDKBiped.htm#WS59CC1705BE42794BBCB80457F107A6E8-0051\">Biped.RElbow</a></span> \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-D27818C9-49CA-4454-9A2E-3F459C84352E\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/CDKBiped.htm#WS59CC1705BE42794BBCB80457F107A6E8-0052\">Biped.RKnee</a></span> \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-CE5BAAA2-74CD-4D2A-A68C-46F3FD3C9790\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/CDKBiped.htm#WS59CC1705BE42794BBCB80457F107A6E8-005A\">Biped.LElbow</a></span> \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-2A019B4F-8372-4B30-B8D7-18D7CE72A9E2\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/CDKBiped.htm#WS59CC1705BE42794BBCB80457F107A6E8-005B\">Biped.LKnee</a></span> \n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-00A7\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-91DD227E-CAB7-4C7B-8AD9-DA8AC3CB24D6\"></a></span>Properties\n\
               </h2> \n\
               <div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                     </colgroup>\n\
                     <tr class=\"ruledHeading\">\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-371B2FE6-AB00-46B9-8DF4-F2C6839A27EB\"></a></span><p class=\"table-heading\">Property Name</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D3F1A800-C33E-4A6E-A1D3-BEF8747E1F12\"></a></span><p class=\"table-heading\">Type</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-49AF6EE1-4F0A-41A1-80C7-F8C31506C222\"></a></span><p class=\"table-heading\">Description</p> \n\
                        </th>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0F5DE2D0-CFD3-469D-B474-2575624A8580\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">UpperJoint</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3B786F4A-010F-424D-8ACA-420F1434A588\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Null.html\">Null</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6816A022-6870-4FC8-895D-42ED7743CDB1\"></a></span><p class=\"table-body\">the volume avoidance null closest to the root</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F95187ED-B784-42CF-8190-3051F5EF87E7\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">LowerJoint</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C277B090-9025-483D-9362-C26C2B19D64B\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Null.html\">Null</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6F6FA007-BF28-471E-82E2-6DDD1C63F5F7\"></a></span><p class=\"table-body\">the volume avoidance null closest to the joint</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B2FD0350-250A-4618-A9BB-7D4088B6A0E9\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">Volume</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CA91D3D0-C13A-4849-8129-9327455A8721\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D4F70A17-9191-4A69-9460-3D6F886430D5\"></a></span><p class=\"table-body\">the new implicit volume being avoided by the slide</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-555BDF33-6A52-4A02-9347-8FC94CB154AB\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"Envelope\" class=\"a_multireflink\">Envelope</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FB00C7D4-F96A-405D-BF27-8C48189A9CBE\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EF1EF920-DFCE-4788-80AC-2DCF124C43F8\"></a></span><p class=\"table-body\">a collection of objects to be Enveloped</p> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-E97BFDEC-BA29-4D1F-BC41-AF8A9D891871\"></a></span>See <span class=\"char_link\"><a href=\"#!/url=./files/cdkref.htm\">CDK Object Reference</a></span> for complete list of objects available in the Character Development Kit.\n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";