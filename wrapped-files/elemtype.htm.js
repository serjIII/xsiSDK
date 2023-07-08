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
      <meta name=\"topicid\" content=\"GUID-327D058E-FF27-483B-8F97-4BFA63348C0B\" />\n\
      <meta name=\"indexterm\" content=\"Element Types\" />\n\
      <meta name=\"indexterm\" content=\"scripts: element types\" />\n\
      <meta name=\"indexterm\" content=\"elements: types in scripts\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Element Types</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-327D058E-FF27-483B-8F97-4BFA63348C0B\"></a></span><div class=\"head\">\n\
            <h1> Element Types</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-8530BE9E-2ECF-4E05-A24B-63E2D721D092\"></a></span>You can use the # character in strings to work with a specific type of element. The\n\
               path is important. If you do not specify any path, * is assumed. For example, the\n\
               following selects all 3D objects that are not under any other model than the scene\n\
               root:\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-FC4B3773-AEEA-4364-B49E-B0C4C594B64D\"></a></span> <span class=\"code\" translate=\"no\">SelectObj \"#3dobject\"</span> \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-D67A5F38-22A9-44DD-A0E6-BD2DCB66E56F\"></a></span>The following selects all 3D objects that are the first child of any object (including\n\
               the first child of models and the scene root):\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-74C5F1CD-3C0B-417C-A5E0-7AB64CA10369\"></a></span> <span class=\"code\" translate=\"no\">SelectObj \"*.#3dobject\"</span> \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-74AEFEFD-1A67-434E-BDC9-32707FB22996\"></a></span>Add a * at the end to continue searching after the first element in each path is found.\n\
               For example, the following selects all 3D objects that are a child of any object (including\n\
               children of models and the scene root) — in other words, it selects all 3D objects:\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-8A020D89-7804-4C08-ADC3-20116EF073CC\"></a></span> <span class=\"code\" translate=\"no\">SelectObj \"*.#3dobject*\"</span> \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-5CC7BC51-0AEF-405B-84D4-4D968F2E8886\"></a></span>You can also use a specific object or model as the root of the path. The following\n\
               selects the first child of an object or model called Fluffy:\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-BF6D6818-2FDE-4887-9D13-0B21D5D77EA7\"></a></span> <span class=\"code\" translate=\"no\">SelectObj \"Fluffy.#3dobject\"</span> \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-5FEF3303-CAE5-455D-B20A-EB0A298B6ADB\"></a></span>The following selects all children of Fluffy:\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-57295618-D165-4767-BBB7-BF7D3B967F88\"></a></span> <span class=\"code\" translate=\"no\">SelectObj \"Fluffy.#3dobject*\"</span> \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-9696F767-D0C1-42D2-92DB-F27317A4D844\"></a></span>The following selects all children of both Fluffy and Sparky:\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-46712F25-79E0-44B4-96D6-014BB132C5DC\"></a></span> <span class=\"code\" translate=\"no\">SelectObj \"{Fluffy,Sparky}.#3dobject*\"</span> \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-969CA784-9679-4A1E-99B6-DAB2C8D7E8FA\"></a></span>You can use the following element types:\n\
            </p>\n\
            <div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-97B9E029-28CD-45FD-BE2F-E1FF08CB5C4D\"></a></span><p class=\"table-heading\">To do this...</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0F6358C2-E4DE-4CF2-8347-958B24B916F3\"></a></span><p class=\"table-heading\">Use this...</p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FB212A76-9F32-44A9-85AE-B8BFD270B20B\"></a></span><p class=\"table-body\">Specify overrides</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A661379D-3C36-4690-8A86-8F6ED56DE757\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"#override\"</span> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5AD2B17F-19C0-4890-8967-3DF7E2B0FD74\"></a></span><p class=\"table-body\">Specify models</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0583F591-17CE-4176-9E88-00CFB167FAC4\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"#model\"</span> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-79A35B7E-E183-426D-96B5-7D4D2837E788\"></a></span><p class=\"table-body\">Specify 3D objects</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7D14081F-2996-44DF-80B7-4B81E2F1CF06\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"#3dobject\"</span> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A8416BA7-EBEA-4EC1-80C6-EAAF739333E1\"></a></span><p class=\"table-body\">Specify passes</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4C1615F8-901C-42BF-8824-16452687592F\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"#pass\"</span> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1112BEF9-EDEA-4BDE-8854-D1D7A2C8F599\"></a></span><p class=\"table-body\">Specify groups</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-17E7104E-5CBA-4765-A382-BA5E31DB78F2\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"#group\"</span> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";