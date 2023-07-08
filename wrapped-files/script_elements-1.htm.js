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
      <meta name=\"topicid\" content=\"GUID-5A42CEBC-9750-4989-B5C2-860410BD3AB4\" />\n\
      <meta name=\"indexterm\" content=\"scripts: unmarked parameters\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Parameters</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-5A42CEBC-9750-4989-B5C2-860410BD3AB4\"></a></span><div class=\"head\">\n\
            <h1>Parameters</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-56D760C9-2B19-4676-B9D8-98A4181239F6\"></a></span>Properties and parameters are specified using a dot notation. For example, the following\n\
               string is the local X position of the object named \"myCube\":\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-B6C383D9-F747-46B0-9F8F-E80AF996EB04\"></a></span> <span class=\"code\" translate=\"no\">\"aModel.myCube.kine.local.posx\"</span> \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-2FE523B4-C840-46BC-A8FC-B6B52F8B7331\"></a></span>This string represents a path through the scene hierarchy where:\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-19E701F7-A743-4046-B020-129AA98206A5\"></a></span> <span class=\"code\" translate=\"no\">\"aModel\"</span> is the name of a model.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-45983234-424F-4205-A868-C997AB225152\"></a></span> <span class=\"code\" translate=\"no\">\"myCube\"</span> is the name of an object in <span class=\"code\" translate=\"no\">aModel</span>.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-00F73C1B-8928-45E6-A8E7-ED264EA65D11\"></a></span> <span class=\"code\" translate=\"no\">\"kine\"</span> is the scripting name of the Kinematics property.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-BBEC4E0C-5308-4AED-B237-C2CB8F8377F3\"></a></span> <span class=\"code\" translate=\"no\">\"kine.local\"</span> is the scripting name of the Local Transforms property.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-1563BB9A-A642-4878-AB7D-31BE9B15D803\"></a></span> <span class=\"code\" translate=\"no\">\"posx\"</span> is the scripting name of the X position parameter.\n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-5A7227F6-4DA6-4699-807A-74F510980E04\"></a></span>A property (sometimes called a property set) is a container for a group of related\n\
               parameters. For example, the <em class=\"strong\">Local</em> Transforms (local) property contains the <em class=\"strong\">X</em>, <em class=\"strong\">Y</em>, and <em class=\"strong\">Z</em> position parameters. A property can also contain other properties. For example, the\n\
               <em class=\"strong\">Kinematics</em> property contains the <em class=\"strong\">Local</em> Transforms, <em class=\"strong\">Global</em> Transforms, and <em class=\"strong\">Constraints</em> property.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-1C717CB5-3B57-48C8-A2E5-44889C09733B\"></a></span>If an object is not part of a model, you can omit the model name. For example, write:\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-EC882CC3-2E00-4EBA-B80F-E62D1052986D\"></a></span> <span class=\"code\" translate=\"no\">\"aCube\"</span> \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-C787EE56-8A34-4C14-915E-ED0401BA9B6B\"></a></span>instead of\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-6A20B4C7-1493-42AE-A1D9-CCEEDD639B2E\"></a></span> <span class=\"code\" translate=\"no\">\"Scene_Root.aCube\"</span> \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-EEC8BA29-DB30-42E7-8C4B-1D3656F1E1EE\"></a></span>If you are applying a command to the currently selected object, you can omit the object\n\
               name. For example, the following is theglobal X position of the currently selected\n\
               object:\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-2ACE9A78-16C9-4738-B661-CA919683F4A6\"></a></span> <span class=\"code\" translate=\"no\">\"kine.global.posx\"</span> \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-EBA984A3-320C-47B1-B8E0-56245F071915\"></a></span> <em class=\"strong\">Loca</em>l transforms are the default, so you do not have to explicity refer to it. For example,\n\
               the following is the local X position of the currently selected object:\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-0034A8F2-39D6-4151-B481-5C82B743AAD0\"></a></span> <span class=\"code\" translate=\"no\">\"kine.posx\"</span> \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-54A9838E-856E-4663-9E69-D072B8CAC42F\"></a></span>You can also omit property names such as <em class=\"strong\">surfmsh</em>, <em class=\"strong\">polymsh</em>, and <em class=\"strong\">crvlist</em>. For example:\n\
            </p>\n\
            <div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-60A2624D-EB24-4E66-96E4-37596E0918A4\"></a></span><p class=\"table-heading\">This expression is the equivalent ...</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7C0349DA-C4F9-4B3F-928D-2F8E1AA49B79\"></a></span><p class=\"table-heading\">to this expression ...</p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-01829AB2-AF8F-46F3-A690-EF199FFC8102\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"aBall.surfmsh.geom.subdivu\"</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-078DAB18-F978-4760-A671-47B983BCABAB\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"aBall.geom.subdivu\"</span> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CD1AD3B7-9807-4326-B65E-D64BC0231E8D\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"cube.polymsh.cls.Point.red\"</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CAF9F883-8D22-448B-A33C-B50C006413FE\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"cube.cls.Point.red\"</span> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5C2E60F1-53D6-48C1-AD38-414732345306\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"circle.crvlist.geom.subdivu\"</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-352E3D96-C003-4E4D-BECC-0CC7A24802F4\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"circle.geom.subdivu\"</span> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-5828E18A-C65E-4D6F-A91B-5FA22CD6BB69\"></a></span>If there are multiple properties with the same name, you can reference them using\n\
               square brackets:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">SelectObj \"null1.kine.poscns[2]\"</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-EDD32A3B-A7C9-4114-B875-F23DA519DE9B\"></a></span>When separating a list of objects and a list of parameters, use a slash (/) character.\n\
               For example, the following command saves a key on the local position of objects named\n\
               \"Fluffy\" and \"Sparky\":\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">SaveKey \"{Fluffy,Sparky}/kine.local.pos\"</pre></div>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-26B465CF-0B9B-4905-801A-A08B39909ECC\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-0B08210C-D9AC-4D25-94D5-3E4C1B3C8741\"></a></span>To determine a parameter name, change the parameter value in a property editor and\n\
                     see what gets logged in the command history. Alternatively, set <span class=\"MenuCascade\" id=\"GUID-4F3C8FBF-AE84-4526-9C4F-45A452A9A3F2\">Show</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-3E6FB294-064F-4E39-970C-4518898538F2\">Use Script Names</span> in an explorer.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";