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
      <meta name=\"topicid\" content=\"GUID-A2F70E08-EAA3-4DE6-BFAF-7119923D3EEB\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Shader Definition and Parser Examples</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-A2F70E08-EAA3-4DE6-BFAF-7119923D3EEB\"></a></span><div class=\"head\">\n\
            <h1>Shader Definition and Parser Examples</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-99E8F92A-2CDD-473D-8B78-825D7599D195\"></a></span>The following examples are installed with Softimage and are available from the XSISDK\n\
               workgroup: \n\
            </p><span class=\"anchor_wrapper\"><a name=\"TABLE_6A9B024CEB8342CD8A45C8BC9733320F\"></a></span><div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col width=\"40%\" align=\"left\" />\n\
                     <col width=\"20%\" align=\"left\" />\n\
                     <col width=\"40%\" align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-36609D2B-9CC9-474B-B9B9-D8A8E252097A\"></a></span><p class=\"table-heading\">Example </p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2EA2B95C-1BF2-4598-A329-38F865ECFA3D\"></a></span><p class=\"table-heading\">Implementation Language </p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-28F52C48-4B21-434A-BF44-AB4D9B672316\"></a></span><p class=\"table-heading\">Description </p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DCFA1A3A-E712-4274-9CD2-3E746CD27E6C\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./examples/Addons/ShaderDefinitions/netview_ShaderDefs.htm\">Color Sampler</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"UL_2DB78088A957416F9DC0F5BAF5DD1958\"></a></span><ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-C1B7B2AC-B5EB-4931-A319-0C781F00573A\"></a></span>C++ \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-8D7D6054-4BC4-4358-8636-CC8B56026D92\"></a></span>JScript \n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BAFDBBC0-51C1-4B31-98DA-534B1DBDCF17\"></a></span><p class=\"table-body\">These examples were ported from the SPDL-based Color Sampler Lightmap shader. They\n\
                           demonstrate how to create a custom lightmap output parameter, and how to create a\n\
                           property page widget that allows the user to specify a texture space id. \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-92B5D2BC-51C1-406C-8FA1-2599577D0A1D\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./examples/Addons/ShaderDefinitions/netview_ShaderDefs.htm\">Environment Blur</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"UL_215726B88C464B91AFD84D221F82EBDA\"></a></span><ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-D14D8E06-93B9-4D03-A8A9-3C6873248695\"></a></span>C# \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-463726E3-F1CD-4FAB-B86F-4351D41ACC0E\"></a></span>JScript \n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D0F86895-6834-46C6-83AB-659CB5B67310\"></a></span><p class=\"table-body\">These examples were ported from the SPDL-based Environment Blur shader. It demonstrates\n\
                           how to create a property page widget that allows the user to select a shader. \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-77013F34-FF9B-431C-A8DF-A5852BC34A58\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./examples/Addons/ShaderDefinitions/netview_ShaderDefs.htm\">Fast Volume Effects</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"UL_2909A30877444D39BA8D3874EB3C55A9\"></a></span><ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-53B0CB71-622A-40E4-80DD-96330AC62E99\"></a></span>VBScript \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-8C185FB6-E048-493F-A572-EF41509321A2\"></a></span>JScript \n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4C978F13-A663-45BB-B383-7621F4FDFDB4\"></a></span><p class=\"table-body\">These examples were ported from the SPDL-based Fast Volume Effects shader. It demonstrates\n\
                           how to define structure and array parameters and how to modify the property page layout.\n\
                           \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-977A9B94-FE3C-4C77-ABE8-8F4C5F8BF8B2\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./examples/Addons/ShaderDefinitions/netview_ShaderDefs.htm\">Model Map</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"UL_05CCF43D82C742548DA85F0884C00C75\"></a></span><ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-97270269-D0B2-4F52-BD96-7A7971807AB4\"></a></span>Python \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-9C37771F-B0B5-4DB1-8C79-B6CBEF97AC74\"></a></span>JScript \n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8EB274F7-3F0A-47B4-9A83-13487E7109FB\"></a></span><p class=\"table-body\">These examples were ported from the SPDL-based Model Map shader. It demonstrates how\n\
                           to create property page widgets that allow the user to specify a texture space id\n\
                           and a CAV. They also demonstrate how to define a drop-down list of values. \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-187BEE11-3E0E-4332-A13E-B0BA55FF4484\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./examples/Addons/ShaderParser/netview_ShaderParser.htm\">Custom Shader Parser</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"UL_59053A0641A64F23AE83B19DE0C14F7C\"></a></span><ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-295D7A5C-7F22-4C9A-AD97-FDF85D27393D\"></a></span>JScript \n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5C422263-710E-43B2-A640-8BBC4E406096\"></a></span><p class=\"table-body\">This example shows how to create a self-installing custom shader language parser in\n\
                           JScript. A number of parseable file definitions (with the .bck and .pck extensions)\n\
                           are included to demonstrate how the parser system works, both valid and invalid. \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";