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
      <meta name=\"topicid\" content=\"GUID-10EE1F46-F0D5-4A1B-AE20-957D6D9B1661\" />\n\
      <meta name=\"indexterm\" content=\"Components\" />\n\
      <meta name=\"indexterm\" content=\"components: naming conventions (scripting)\" />\n\
      <meta name=\"indexterm\" content=\"scripts: components\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Components</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-10EE1F46-F0D5-4A1B-AE20-957D6D9B1661\"></a></span><div class=\"head\">\n\
            <h1> Components</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-734ED7A0-96D4-4725-A068-69D1B9661C72\"></a></span>Components are the parts of a geometric object such as points, edges, and polygons.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-314A9B0C-C8F2-4187-8C3E-02F814A870B6\"></a></span>Individual components are referenced using an number called an index. For example,\n\
               the following expression refers to the point at index number 3 on the cube \"aCube\":\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-AA8B7A90-B313-467B-9998-F5D1271665D6\"></a></span> <span class=\"code\" translate=\"no\">\"aCube.pnt[3]\"</span> \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-E2AB32D2-8FF9-41D5-88C4-DDC02EC967B3\"></a></span>Component indexes start at 0, so the first point is:\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-04BD2CEA-E028-4D8A-89B6-96905CF2DAB9\"></a></span> <span class=\"code\" translate=\"no\">\"aCube.pnt[0]\"</span> \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-08EFD371-89EE-4120-9E92-0906435CE8BC\"></a></span>For this reason, it is easier to think of <span class=\"code\" translate=\"no\">aCube.pnt[3]</span> as point number 3 instead of as the fourth point.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-AE0ED4F2-2C14-40D9-B657-3D195DE756D8\"></a></span>Geometric components such as points are indexed from 0 to <span class=\"code\" translate=\"no\">LAST</span>.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-D00345F8-5176-41F0-ACE3-85EFE454F99A\"></a></span>Examples:\n\
            </p>\n\
            <div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EE8DB60D-91D4-4206-A838-B0248C89C3BD\"></a></span><p class=\"table-heading\">Expression</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B6A7519F-DBF0-4C8A-BF8F-C4A7CA37F4DB\"></a></span><p class=\"table-heading\">What it indicates</p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3F162C77-CE3F-4B4A-A400-F026E8B13565\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"Cone.pnt[3,6,8]\"</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D51F17C2-F106-4569-BA1F-CFCD12CEC72E\"></a></span><p class=\"table-body\">Points 3, 6 and 8 on an object named \"Cone\"</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-618DD691-E7E4-476B-83BB-AD2BE5DD17B3\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"Cone.pnt[3-8,10]\"</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6EC6214C-93FE-402C-9F05-EF6A767D4C1F\"></a></span><p class=\"table-body\">Points 3 to 8 and 10</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D5C38684-6368-4403-8FD9-B8116D8C4150\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"Cone.pnt[*]\"</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0A9FC9CB-80F5-4E9A-8879-2871275E9D08\"></a></span><p class=\"table-body\">All the points on the object (equivalent to <span class=\"code\" translate=\"no\">Cone.point[0-LAST]</span>)\n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FE11E27C-5A40-4057-AB83-923B58D0EA01\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"cube.poly[1]\"</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6725850F-7AA6-4905-ADDD-6EDC55B232D6\"></a></span><p class=\"table-body\">The polygon</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-644052A3-53EE-45BF-AD68-E026CE90F914\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"cube.edge[1-3,6,LAST]\"</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4CEBC041-5C9B-4974-A11E-2B5A7E989FD4\"></a></span><p class=\"table-body\">Points 1 to 3, 6, and the last point</p> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-E5460891-25B5-4978-89DE-91BB889216A0\"></a></span>Here\'s some examples for a nurbs surface:\n\
            </p>\n\
            <div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A17DFCA6-8FDC-46CD-8EFB-F2D117915A91\"></a></span><p class=\"table-heading\">Expression</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A9DABB39-3E58-48EC-9B71-A4B06DB4B051\"></a></span><p class=\"table-heading\">What it indicates</p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1AB2249A-8E32-412C-A430-7F1D109D7786\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"sphere.pnt[(2,4)]\"</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E066405C-00AF-4AFA-A21A-6D907D375954\"></a></span><p class=\"table-body\">Point (at u=2 and v=4)</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-241A5B2D-7F37-4F58-9984-7CDD244E293A\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"sphere.pnt[(4,2),(4,6)]\"</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9D41661B-FA7B-4A29-AD29-3BB4E681733B\"></a></span><p class=\"table-body\">Two points</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0137344F-BE0C-4705-A619-A5E9269885EA\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"sphere.isopnt[(0.621,0.682)]\"</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BFE59638-9FAC-49D6-8731-D5733C813CEF\"></a></span><p class=\"table-body\">An isopoint</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EA01B0E3-C7D1-4A9B-96FD-CC45E35D7A13\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"sphere.knotcrvu[2,3]\"</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4B19F639-761D-416C-847E-B76D0EE4AEF7\"></a></span><p class=\"table-body\">A knot curve</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D187542C-4D6C-4BA3-8D0C-9715D9BAAF31\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"sphere.isolineu[0.594]\"</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E38BF58E-16AE-4A49-8D1A-0F8B376F061B\"></a></span><p class=\"table-body\">An isoline</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E89CEECB-E5DB-4E69-85C8-EEC0A0D4E4BA\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"sphere.bndry[*]\"</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-549F09A7-D10D-4650-8CEA-E8A63585859F\"></a></span><p class=\"table-body\">A boundary</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-326B852B-407B-4FC1-8D1B-B1F7D82A00C4\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"sphere.subsrf[0]\"</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6713E59A-981A-4163-B47D-BB196F0F30DF\"></a></span><p class=\"table-body\">A subsurface</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E2760525-4866-4A0B-9A11-BD41D9DDA46E\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"sphere.knot[(7,2)]\"</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BB4AB807-8C8C-42F6-B424-F733472591F8\"></a></span><p class=\"table-body\">A knot</p> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";