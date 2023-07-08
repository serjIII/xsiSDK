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
      <meta name=\"topicid\" content=\"GUID-0454AF07-84A8-4FE0-9C91-CFA39607BB6F\" />\n\
      <meta name=\"indexterm\" content=\"hardware shaders\" />\n\
      <meta name=\"indexterm\" content=\"custom shaders: plug-ins: realtime\" />\n\
      <meta name=\"indexterm\" content=\"realtime shaders: custom plug-ins\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Creating Realtime (Hardware) Shader Plug-ins</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-0454AF07-84A8-4FE0-9C91-CFA39607BB6F\"></a></span><div class=\"head\">\n\
            <h1>Creating Realtime (Hardware) Shader Plug-ins</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-76092D2A-6860-4CB2-BEC9-78F92A181AD2\"></a></span>Writing Realtime Shader (sometimes called <em class=\"mild\">Hardware Shader</em>) plug-ins in Softimage is like writing regular <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders_CreatingDefPlugins.htm\">shader definition</a></span> and <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders_CreatingShaderParsers.htm\">shader language parser</a></span> plug-ins with a few extra <a href=\"#!/url=./si_cmds/callbacks.html#cb_rtshaders\">callbacks</a> to implement. \n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-D05E6342-8F83-4B6A-A9A7-D7C92BD83455\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-4A62FB68-9955-4DDB-B707-17CFF737148B\"></a></span>For more information about Realtime Shaders in Softimage from a user\'s perspective,\n\
                     see the user guide. \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-4CC65679-1AE2-4484-8754-42CE7DEFFFAD\"></a></span>For information about backwards compatibility with Softimage Realtime Shaders and\n\
                     your plug-ins, see Compatibility Information. \n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSEE80B7B3C7C7E74A9E14EA8F7E4C08A5-000D\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-DD621F3D-C283-4D28-AE8C-D9B3E01BB8F9\"></a></span>Execution Flow\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-889629C2-79EB-422C-9CF6-29F925FBFA28\"></a></span>The following table describes the execution flow for a realtime shader in Softimage:\n\
                  \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"TABLE_17D958731DFF427392B8419B3089057A\"></a></span><div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col width=\"33.33333333333333%\" align=\"left\" />\n\
                        <col width=\"66.66666666666666%\" align=\"left\" />\n\
                     </colgroup>\n\
                     <tr class=\"ruledHeading\">\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EF20C2E5-54EA-434C-B99F-11727E9BD5F4\"></a></span><p class=\"table-heading\">Phase </p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FB384E52-4E10-4203-82E8-2BD6379F64A5\"></a></span><p class=\"table-heading\">Description </p> \n\
                        </th>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-73AA51FB-E31E-414C-BAC0-0645A6627345\"></a></span><p class=\"table-body\"> <em class=\"strong\">DLL Initialization</em> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-91EF03B1-013C-4657-84D1-CBE083C25159\"></a></span><p class=\"table-body\">When the .dll/.so is initialized, the first function to be called is <a href=\"#!/url=./si_cmds/cb_RTShaders_GetVersion.html\">RTS_GetVersion</a>. This function should return <span class=\"code\" translate=\"no\">4</span>. \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-85296682-5377-43BA-A304-FCA3F69A8E05\"></a></span><p class=\"table-body\"> <em class=\"strong\">Realtime Shader Initialization</em> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2CFE81C4-8910-4ECC-9FA7-EF5C68C27D50\"></a></span><p class=\"table-body\">When realtime shaders can be executed (that is, when the viewport is set to one of\n\
                              the realtime shader display modes), and a realtime shader is created, the <a href=\"#!/url=./si_cmds/cb_RTShaders_Init.html\">Init</a> function is called. This is where you can create and initialize instance user data.\n\
                              \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9653958A-A0F3-4744-B871-761195E951AC\"></a></span><p class=\"table-body\"> <em class=\"strong\">Attribute Definition</em> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F9A28321-AC0D-4ED4-9AE9-1FA5A5501209\"></a></span><p class=\"table-body\">You can define which attributes should be rendered by declaring <a href=\"#!/url=./si_cpp/classXSI_1_1CHardwareAttributeArray.html\">CHardwareAttributeArrays</a> for the <a href=\"#!/url=./si_cmds/cb_RTShaders_GetAttributeList.html\">GetAttributeList</a> callback function to return. Softimage takes this list of references to <a href=\"#!/url=./si_cpp/classXSI_1_1CHardwareAttribute.html\">CHardwareAttribute</a> objects and passes it to the <a href=\"#!/url=./si_cmds/cb_RTShaders_Execute.html\">Execute</a> callback function when it is time to draw. At that time you can set certain conditions\n\
                              under which each <a href=\"#!/url=./si_cpp/classXSI_1_1CHardwareAttribute.html\">CHardwareAttribute</a> will be used to define how to render the geometry. \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FDB6745A-31B3-4166-ACF3-22C79ED554E0\"></a></span><p class=\"table-body\"> <em class=\"strong\">Realtime Shader Execution</em> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-75C98E05-0BEF-4E96-9B16-D413C4FFD9A4\"></a></span><p class=\"table-body\">Every time the object that uses the material to which the shader is attached needs\n\
                              to be redrawn, the <a href=\"#!/url=./si_cmds/cb_RTShaders_Execute.html\">Execute</a> function is called. The <span class=\"code\" translate=\"no\">Execute</span> callback function is where you can perform several tasks, such as: \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"UL_D553F263668F49E2B5A481F19F60E8B2\"></a></span><ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-3684E4E9-CD1A-4C23-8F07-6C19F0D8C71C\"></a></span>Accessing scene data \n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-2DA72192-F90E-404C-B3C8-08FB35051B92\"></a></span>Rendering geometry \n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-FF93053C-D130-44A9-AB47-48C3BF4E7382\"></a></span>Raising errors \n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-9389E964-01AB-4D74-8CD2-F36AF5363D46\"></a></span>Getting legacy information \n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-46CD941A-1A77-43AB-A09C-4D040713560B\"></a></span>etc. \n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-275B0F74-32B3-4D59-8C15-21DB72E5DCEF\"></a></span><p class=\"table-body\"> <em class=\"strong\">Realtime Shader Termination</em> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-131D4D55-7C29-4D9B-9DDE-BCF7276BCA96\"></a></span><p class=\"table-body\">When a realtime shader is destroyed, the <a href=\"#!/url=./si_cmds/cb_Plugin_Term.html\">Term</a> function is called. \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-D88633EB-D319-4BC0-ACC9-DC9BECC98E5E\"></a></span>You can also see the <a href=\"#!/url=./examples/Addons/RealtimeShaders/netview_RealtimeShaders.htm\">Real-Time Shader</a> examples located in the examples folder of the Softimage SDK installation directory.\n\
                  \n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";