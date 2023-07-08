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
      <meta name=\"topicid\" content=\"GUID-BBE2C0B9-2C43-4390-8B21-819B6AA21886\" />\n\
      <meta name=\"indexterm\" content=\"operators: applying\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Applying Operators</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-BBE2C0B9-2C43-4390-8B21-819B6AA21886\"></a></span><div class=\"head\">\n\
            <h1> Applying Operators</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-29B5C41E-0E65-4CDC-8BD5-3062D46AF2B5\"></a></span>You can apply any operator with the <a href=\"#!/url=./si_cmds/ApplyOp.html\">ApplyOp</a> command, including custom operators. In addition, there are a number of other scripting\n\
               commands that can also apply operators; these are a more specialized version of ApplyOp:\n\
            </p>\n\
            <div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8121DA3D-DEB8-40E8-8148-AFB6091988E8\"></a></span><p class=\"table-heading\">Operator Type</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-62BEA0F3-6A46-4AA4-9A1F-3278B15EEEE3\"></a></span><p class=\"table-heading\">Name</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\">&nbsp; <span class=\"anchor_wrapper\"><a name=\"GUID-1B6A5328-EFA1-4175-A787-FAA50EE2C5DF\"></a></span><p class=\"table-heading\" /> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BFC3CF77-0117-468C-BFBD-FBD98B6711BA\"></a></span><p class=\"table-body\"> <em class=\"strong\">Generic</em> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BA7FD179-3F11-4F5E-9188-6FDE3C0465E5\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/ApplyOp.html\">ApplyOp</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-ABF91602-EB4A-4186-88E1-764A0F7B5A1D\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/ApplyOperator.html\">ApplyOperator</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-00270C34-3B3E-4D03-B2F4-B1D437CFFD7B\"></a></span><p class=\"table-body\"> <em class=\"strong\">Generator</em> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B5CB37AF-EB82-489A-980C-8AF69F1B0208\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/ApplyGenOp.html\">ApplyGenOp</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\">&nbsp; <span class=\"anchor_wrapper\"><a name=\"GUID-1EF37B9C-0EFF-4950-B78F-FCDE638566C5\"></a></span><p class=\"table-body\" /> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F5051DCA-80CC-43E7-9A75-641DB0A05375\"></a></span><p class=\"table-body\"> <em class=\"strong\">Topology</em> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B7C69DF2-39D3-445B-A2FB-DAC0D88D9D85\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/ApplyTopoOp.html\">ApplyTopoOp</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BEB75016-9001-4A70-B037-BA3BFEF85844\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/TrimWith.html\">TrimWith</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3B363289-BF93-4C04-8C37-1CC59C5A01B1\"></a></span><p class=\"table-body\"> <em class=\"strong\">Deformer</em> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7744D853-A915-4FC1-BC00-364CB2D5CD85\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/ApplyKinematicOp.html\">ApplyKinematicOp</a> \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-A5E13B38-ADA3-4CCE-8FA1-5FB2B53967BA\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/ApplyDeformByCage.html\">ApplyDeformByCage</a> \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-E420523E-E3F1-4DAD-877A-F46B3E3C1348\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/ApplyDeformBySpine.html\">ApplyDeformBySpine</a> \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-94163ACD-D459-4646-9899-9AA821F9AAC8\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/ApplyPropVolumeOp.html\">ApplyPropVolumeOp</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5260799B-89E4-4737-9503-2619A877664C\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/ApplySnapFaceOp.html\">ApplySnapFaceOp</a> \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-484B668C-C534-4567-BB65-5E0944E6543A\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/SIApplyDeformByCage.html\">SIApplyDeformByCage</a> \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-E84013CD-24CC-40B2-BDFA-5D3D628C1C8A\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/SIApplyDeformBySpine.html\">SIApplyDeformBySpine</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-60E32FE2-CCBD-4C5D-89CC-0CC890C57FCE\"></a></span><p class=\"table-body\"> <em class=\"strong\">Assignment</em> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-71E28009-BB2C-4DB3-B05A-D01222941D06\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/ApplyFlexEnv.html\">ApplyFlexEnv</a> \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-60FB6A22-6732-4A27-92F0-FB4111331DE1\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/LocalAssignFlexEnv.html\">LocalAssignFlexEnv</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B29CF8A6-AFA6-4E68-8044-0CF4B8433849\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/SIApplyFlexEnv.html\">SIApplyFlexEnv</a> \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-0B00934A-5F13-4EF2-9E8A-2B0436CA303F\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/SILocalAssignFlexEnv.html\">SILocalAssignFlexEnv</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8186E82C-63EA-4990-B7EE-1376AB11082A\"></a></span><p class=\"table-body\"> <em class=\"strong\">Simulation</em> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3883A75F-E08C-4B60-813E-B8A5706A7C5B\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/ApplyHairOp.html\">ApplyHairOp</a> \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-FD51EAEF-762E-458C-99E8-E43053B42813\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/ApplyHairAttenuateOp.html\">ApplyHairAttenuateOp</a> \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-1568FCE4-EE85-4DA7-A184-CEDCA4F28929\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/ApplyHairClumpOp.html\">ApplyHairClumpOp</a> \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-10276AD6-E9C0-446C-AAFB-B5CED6A96185\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/ApplyHairCombNormalOp.html\">ApplyHairCombNormalOp</a> \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-A18E00A8-18A2-470D-A18E-67C234C95036\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/ApplyHairCombOp.html\">ApplyHairCombOp</a> \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-F51A86AE-D62A-4F02-94AD-54DDD7B0EF24\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/ApplyHairCutOp.html\">ApplyHairCutOp</a> \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-C2BF6590-D759-4871-BF23-1D3BEA8B7D52\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/ApplyHairDynamicsOp.html\">ApplyHairDynamicsOp</a> \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-5C9A1194-C60F-4FD0-A46D-41B8E04CF968\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/ApplyHairLockOp.html\">ApplyHairLockOp</a> \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-4838CE60-876B-45F0-AF5E-92E57AD4262A\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/ApplyHairMergeOp.html\">ApplyHairMergeOp</a> \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-F5861A95-5FC3-4173-ADDE-29E65DE11EA8\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/ApplyHairPopOp.html\">ApplyHairPopOp</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3588DE3D-B25D-4317-8C97-5FB0F50AE7BF\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/ApplyHairPopSelectedOp.html\">ApplyHairPopSelectedOp</a> \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-E3CA8F67-A1D4-4F4F-8E1B-BBDB2E055115\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/ApplyHairPuffOp.html\">ApplyHairPuffOp</a> \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-CE0814F9-AB16-47E3-8FE6-15590F2E09F8\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/ApplyHairRecombOp.html\">ApplyHairRecombOp</a> \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-2BA27132-FA50-454A-A717-74D39DBE4AC3\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/ApplyHairResampleOp.html\">ApplyHairResampleOp</a> \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-4AEF85E8-0C27-4534-B8CF-BA380E8E96DC\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/ApplyHairRotateOp.html\">ApplyHairRotateOp</a> \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-C8155533-2556-43E2-9B89-E0287DCD64B0\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/ApplyHairScaleOp.html\">ApplyHairScaleOp</a> \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-3ED5BFD8-B5F2-40C4-B165-0DF376D57542\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/ApplyHairShatterOp.html\">ApplyHairShatterOp</a> \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-A2835CBB-DA85-4F7A-984A-D2661A00C9BE\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/ApplyHairSplineGenOp.html\">ApplyHairSplineGenOp</a> \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-29887685-E973-4A73-B4F0-CFB980552051\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/ApplyHairSplitOp.html\">ApplyHairSplitOp</a> \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-BCA172B1-5B03-4CAC-9591-F45C7AD3AFCE\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/ApplyHairUnlockOp.html\">ApplyHairUnlockOp</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-7A5DB5CE-BBBC-446C-8546-8FAF8A9B731E\"></a></span>The ApplyOp command is the most common way to apply an operator. However, if you are\n\
               creating an operator on the fly (and therefore already have a pointer to it) you can\n\
               also use the <a href=\"#!/url=./si_om/Operator.Connect.html\">Operator.Connect</a> or <a href=\"#!/url=./si_om/Operator.ConnectToGroup.html\">Operator.ConnectToGroup</a> methods in the object model. For the C++ API, the <a href=\"#!/url=./si_cpp/classXSI_1_1Operator.html\">Operator::Connect</a> function is available.\n\
            </p>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";