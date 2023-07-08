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
      <meta name=\"topicid\" content=\"GUID-12DAAF3C-980A-4E85-ABDA-2B8EB2257C31\" />\n\
      <meta name=\"indexterm\" content=\"dynamic shaders: instantiating\" />\n\
      <meta name=\"indexterm\" content=\"shader definitions: instantiating\" />\n\
      <meta name=\"indexterm\" content=\"ClassName: custom shaders\" />\n\
      <meta name=\"indexterm\" content=\"ProgID: custom shaders\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <meta name=\"keywords\" content=\"<plug-in_name&gt;, <parser_name&gt;\" />\n\
      <meta name=\"keyword\" content=\"<plug-in_name&gt;\" />\n\
      <meta name=\"keyword\" content=\"<parser_name&gt;\" />\n\
      <title>Instantiating Shader Definitions and the ProgID</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"version\", \"si_cpp/group__RenderMapDefine.html#gad6034d1c8c050eba0cf6533a8e6f3785\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-12DAAF3C-980A-4E85-ABDA-2B8EB2257C31\"></a></span><div class=\"head\">\n\
            <h1>Instantiating Shader Definitions and the ProgID</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-6223A755-132B-4719-A4CF-44C923466991\"></a></span>Shader definitions can be instantiated with the <a href=\"#!/url=./si_cmds/CreateShaderFromProgID.html\">CreateShaderFromProgID</a> command and connected with the <a href=\"#!/url=./si_cmds/SIConnectShaderToCnxPoint.html\">SIConnectShaderToCnxPoint</a> command. The <a href=\"#!/url=./si_om/ShaderDef.ProgID.html\">ShaderDef.ProgID</a> or ShaderDef::GetProgID uniquely identifies the shader definition in Softimage using\n\
               four components: \n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\"ParserName.ClassName.MajorVersion.MinorVersion\"</pre></div><span class=\"anchor_wrapper\"><a name=\"UL_F3EDC9A09FF949FA811988D9D34E5291\"></a></span><ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-320ECF0B-F447-41EA-97FF-E7EF794B5CCE\"></a></span> <em class=\"strong\">Parser Name</em>—This is the name of the parser or plug-in that implemented the shader definition.\n\
                     Depending on how the shader definition was created, the parser name comes from one\n\
                     of the following sources: \n\
                  </p> <span class=\"anchor_wrapper\"><a name=\"TABLE_66ABE19D522942BBB95CAD9D8C1F8500\"></a></span><div class=\"table_Ruled\">\n\
                     <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                        <colgroup>\n\
                           <col align=\"left\" />\n\
                           <col align=\"left\" />\n\
                           <col align=\"left\" />\n\
                        </colgroup>\n\
                        <tr class=\"ruledHeading\">\n\
                           <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F2D73650-C894-4128-8C83-4F53996F96D7\"></a></span><p class=\"table-heading\">Shader Definition Source </p> \n\
                           </th>\n\
                           <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B1856067-8D6F-4B83-86CF-809314E3B217\"></a></span><p class=\"table-heading\">Parser Name </p> \n\
                           </th>\n\
                           <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-269816DC-5AD4-4385-9847-00CE6FD6838F\"></a></span><p class=\"table-heading\">Description </p> \n\
                           </th>\n\
                        </tr>\n\
                        <tr class=\"ruledOddRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5D3B436D-DFA8-4268-8E59-31321828B94E\"></a></span><p class=\"table-body\">Softimage native shader definitions built from SPDL files </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F6BC26FA-68F2-4112-84FF-350922ADF4D9\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">Softimage</span> \n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CCBB7F22-E051-4130-A2BE-4193F45B06BC\"></a></span><p class=\"table-body\">Name of native SPDL parser. For example, the Phong\'s ProgID is <span class=\"code\" translate=\"no\">\"Softimage.material-phong.1.0\"</span> and the Cloud texture\'s is <span class=\"code\" translate=\"no\">\"Softimage.txt3d-cloud.1.0\"</span>. \n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledEvenRow\">\n\
                           <td class=\"table-body\" rowspan=\"2\"> <span class=\"anchor_wrapper\"><a name=\"GUID-91991927-E430-4D72-B328-DEF482A42184\"></a></span><p class=\"table-body\">Softimage-provided Realtime shader definitions </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-34C3ECA5-203E-4770-9AF5-92995BCB0687\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">CgFXParser</span> \n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DA592E0C-DB5E-428A-818D-4144464BF6C1\"></a></span><p class=\"table-body\">Name of parser for .cgfx files provided by Softimage. For example, the ProgID of the\n\
                                 shader definition generated from the <span class=\"code\" translate=\"no\">ThinFilm.cgfx</span> file is <span class=\"code\" translate=\"no\">\"CgFXParser.ThinFilm.1.0\"</span>. \n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D60545F9-2B7B-4C11-82DA-A9E7AF428EA3\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">HLSLParser</span> \n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-85E22595-483F-4C30-8DBF-019B7C026DB9\"></a></span><p class=\"table-body\">Name of parser for .fx files provided by Softimage. For example, the ProgID of the\n\
                                 shader definition generated from the <span class=\"code\" translate=\"no\">cage.fx</span> file is <span class=\"code\" translate=\"no\">\"HLSLParser.cage.1.0\"</span>. \n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledOddRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C7F55691-2291-470D-8470-60747DCA1736\"></a></span><p class=\"table-body\">Shader definitions built from a custom shader definition plug-in </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-19B38F5D-AF77-4904-A3AF-EF4A1F7C2A76\"></a></span><p class=\"table-body\"> <span class=\"keyword\">&lt;plug-in_name&gt;</span> \n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D8F2D6EC-D5FC-40B5-A2FE-CE31BDC9C3B3\"></a></span><p class=\"table-body\">Name used to register the plug-in via <a href=\"#!/url=./si_om/SIObject.Name.html\">SIObject.Name</a> or SIObject::PutName (in the <a href=\"#!/url=./si_cmds/cb_XSILoadPlugin.html\">XSLLoadPlugin</a> callback). For example, the ProgID of the <span class=\"code\" translate=\"no\">MyShaderDefName</span> shader definition registered in the <span class=\"code\" translate=\"no\">MyPluginName</span> plug-in is <span class=\"code\" translate=\"no\">\"MyPluginName.MyShaderDefName.1.5\"</span>. \n\
                              </p> \n\
                              <div><span class=\"anchor_wrapper\"><a name=\"GUID-0295FB40-4120-4A39-BCA7-8CBCB718AF4F\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-59A24595-AFF7-4195-AD4B-4D9570909FF6\"></a></span>This is the name of the plug-in that implements the shader definition, not the name\n\
                                       of the shader definition itself. \n\
                                    </p> \n\
                                 </div>\n\
                              </div> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledEvenRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-048DAAB4-1995-430E-934D-D1016776416C\"></a></span><p class=\"table-body\">Shader definitions built from custom file formats parsed by a custom shader parser\n\
                                 plug-in. \n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-11CB5F4B-E8DD-4A1A-8DFE-5E6DFC23D2C6\"></a></span><p class=\"table-body\"> <span class=\"keyword\">&lt;parser_name&gt;</span> \n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B8134537-78EB-41E1-ADED-734D9D2142A9\"></a></span><p class=\"table-body\">Name used to register the shader parser via <a href=\"#!/url=./si_om/PluginRegistrar.RegisterShaderLanguageParser.html\">PluginRegistrar.RegisterShaderLanguageParser</a> or PluginRegistrar::RegisterShaderLanguageParser (in the <a href=\"#!/url=./si_cmds/cb_XSILoadPlugin.html\">XSILoadPlugin</a> callback). For example, the ProgID of the shader definition read from a parseable\n\
                                 file and created in the <a href=\"#!/url=./si_cmds/cb_ShaderParser_ParseInfo.html\">ParseInfo</a> callback is <span class=\"code\" translate=\"no\">\"MyParserName.MyDefParsedFromFile.2.0\"</span>. \n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                     </table>\n\
                  </div> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-6F9DFEE6-1DC9-4886-8FE1-66B9A8184720\"></a></span> <em class=\"strong\">Class Name</em>—For shader definition plug-ins, this is the name used to register the shader definition\n\
                     via <a href=\"#!/url=./si_om/PluginRegistrar.RegisterShader.html\">PluginRegistrar.RegisterShader</a> or PluginRegistrar::RegisterShader (in the <a href=\"#!/url=./si_cmds/cb_XSILoadPlugin.html\">XSLLoadPlugin</a> callback). \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-B83B6FC6-D47A-4414-8567-6E46D086CCD7\"></a></span> <em class=\"strong\">Major Version Number</em>—This is the major portion of this shader definition\'s version number. For example,\n\
                     <span class=\"code\" translate=\"no\">2</span> is the major portion of <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"version\" class=\"a_multireflink\">version</a> 2.6</span>. \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-A01B1F66-501C-4307-9945-1781C116C255\"></a></span> <em class=\"strong\">Minor Version Number</em>—This is the minor portion of this shader definition\'s version number. For example,\n\
                     <span class=\"code\" translate=\"no\">6</span> is the minor portion of <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"version\" class=\"a_multireflink\">version</a> 2.6</span>. \n\
                  </p> \n\
               </li>\n\
            </ul>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";