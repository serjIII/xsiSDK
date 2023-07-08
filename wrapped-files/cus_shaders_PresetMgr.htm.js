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
      <meta name=\"topicid\" content=\"GUID-DDF3B467-FE48-427C-9B8D-183AD9D11002\" />\n\
      <meta name=\"indexterm\" content=\"render tree: populating\" />\n\
      <meta name=\"indexterm\" content=\"DisplayName\" />\n\
      <meta name=\"indexterm\" content=\"Category\" />\n\
      <meta name=\"indexterm\" content=\"preset manager: populating\" />\n\
      <meta name=\"indexterm\" content=\"dynamic shaders: preset manager\" />\n\
      <meta name=\"indexterm\" content=\"custom shaders: preset manager\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Populating the Preset Manager</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"Texture\", \"si_cpp/classXSI_1_1Texture.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"version\", \"si_cpp/group__RenderMapDefine.html#gad6034d1c8c050eba0cf6533a8e6f3785\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-DDF3B467-FE48-427C-9B8D-183AD9D11002\"></a></span><div class=\"head\">\n\
            <h1>Populating the Preset Manager</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-DAA5C0B7-7175-4B43-8C0B-DB9F5D0BAC28\"></a></span>There are two components you need to specify in order to make your custom shader definition\n\
               appear in the preset manager: \n\
            </p><span class=\"anchor_wrapper\"><a name=\"UL_DDA75317D58D403A928A4D119BF68F18\"></a></span><ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-2A6C270A-79F0-4C07-827C-16CEE0580AB7\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders_PresetMgr.htm#WSEE80B7B3C7C7E74A9E14EA8F7E4C08A5-0010\">Display Names</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-7A9402E9-D4D1-4E12-B409-36BF8C77DCBC\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders_PresetMgr.htm#WSEE80B7B3C7C7E74A9E14EA8F7E4C08A5-0011\">Categories</a></span> \n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-5D989EA9-698D-4D01-931B-14851CF88A92\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-A79B959C-5C0E-4B9A-B956-A3DFDC447530\"></a></span>Specifying the display name is optional (cosmetic), but if you do not specify a category,\n\
                     the shader definition will <em class=\"mild\">not</em> appear in the preset manager. \n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSEE80B7B3C7C7E74A9E14EA8F7E4C08A5-0010\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-77254806-EB85-4AE1-9B77-DBAC16CB186C\"></a></span>Display Names\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-DB43D827-B105-4643-9BC6-A3DD464EE7A8\"></a></span>Without specifying the DisplayName, the name that appears in the preset manager defaults\n\
                  to the shader definition ClassName. To specify a display name, use the strategy that\n\
                  matches your situation: \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"TABLE_A271EE1331444BDD979BF7772E110A22\"></a></span><div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                     </colgroup>\n\
                     <tr class=\"ruledHeading\">\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-67518291-712E-41D4-AC19-990BD617D9C2\"></a></span><p class=\"table-heading\">In the context of... </p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CDDFA1EA-587F-4E10-8B35-D28D88D84A20\"></a></span><p class=\"table-heading\">... use the following: </p> \n\
                        </th>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9764BFE6-5441-4121-8547-DAA4C2F657DD\"></a></span><p class=\"table-body\">shader definition plug-in </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7C8F28DA-F5F5-4A4B-9E0E-F9A28FC049BB\"></a></span><p class=\"table-body\">the <a href=\"#!/url=./si_cmds/cb_Shader_DefineInfo.html#ContextAttributes\">DisplayName</a> attribute on the <a href=\"#!/url=./si_om/Context.html\">Context</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1Context.html\">Context</a> object: \n\
                           </p> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
in_ctxt.SetAttribute(\"DisplayName\", \"My Nice Name\");</pre></div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-72E882B9-3D2B-4637-8759-5DE07E08FFC7\"></a></span><p class=\"table-body\">shader language parser plug-in </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-352553E8-30EA-4185-A7EE-F683D8760BB3\"></a></span><p class=\"table-body\">the <a href=\"#!/url=./si_cmds/cb_ShaderParser_ParseInfo.html#ContextAttributes\">DisplayName attribute</a> on the <a href=\"#!/url=./si_om/Context.html\">Context</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1Context.html\">Context</a> object: \n\
                           </p> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Insert spaces before capitals to make a nicer <a href=\"javascript:void(0)\" data=\"version\" class=\"a_multireflink\">version</a> of the ClassName\n\
var sDisplayName = sClassID.replace(/_/g, \" \");\n\
sDisplayName = sDisplayName.replace(/([A-Z][a-z])/g, \" $1\");\n\
sDisplayName = sDisplayName.replace(/^ /, \"\");\n\
in_ctxt.SetAttribute(\"DisplayName\", sDisplayName);</pre></div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-53495933-1016-4A9F-BA10-78DA6A20D03D\"></a></span><p class=\"table-body\">directly from the <a href=\"#!/url=./si_om/ShaderDef.html\">ShaderDef</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ShaderDef.html\">ShaderDef</a> object \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F8E4A5B8-487C-4C88-8B58-B3D1E12CBE31\"></a></span><p class=\"table-body\">the <a href=\"#!/url=./si_om/ShaderDef.DisplayName.html\">ShaderDef.DisplayName</a> or ShaderDef::PutDisplayName member: \n\
                           </p> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
oShaderDef.DisplayName = \"My Nice Name\";</pre></div> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSEE80B7B3C7C7E74A9E14EA8F7E4C08A5-0011\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-2E940BBB-D4FA-41A6-9F1D-2EC4B1927374\"></a></span>Working with Categories\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-9C8E6BF2-4775-466E-85DD-ECF699698978\"></a></span>You need to specify a category to make your shader definition accessible from the\n\
                  preset manager. You can create your own category, or you can add your shader definition\n\
                  to an <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders_PresetMgr.htm#WSEE80B7B3C7C7E74A9E14EA8F7E4C08A5-0014\">existing Softimage category</a></span>, but you can only specify one category for each shader definition. To specify a custom\n\
                  category, use the strategy that matches your situation: \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"TABLE_CB828A048D904664A44E19C1B27D7606\"></a></span><div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                     </colgroup>\n\
                     <tr class=\"ruledHeading\">\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E73CD364-0F9D-4DD6-AC5D-A445D9141B49\"></a></span><p class=\"table-heading\">In the context of... </p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DF273F05-BC94-4D11-A577-0506C24A669D\"></a></span><p class=\"table-heading\">... use the following: </p> \n\
                        </th>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-55507874-CCE8-42B3-8889-AD0ADEEA7528\"></a></span><p class=\"table-body\">shader definition plug-in </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-894F3D3B-CEC5-493F-94E3-1BAE97DE76E2\"></a></span><p class=\"table-body\">the <a href=\"#!/url=./si_cmds/cb_Shader_DefineInfo.html#ContextAttributes\">Category</a> attribute on the <a href=\"#!/url=./si_om/Context.html\">Context</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1Context.html\">Context</a> object: \n\
                           </p> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
in_ctxt.SetAttribute(\"Category\", \"My Shaders\");</pre></div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-949898F5-DE7C-41DA-8175-B9B0AC145FA3\"></a></span><p class=\"table-body\">shader language parser plug-in </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-51130994-64DA-43C7-9DFF-0CA64D16E756\"></a></span><p class=\"table-body\">the <a href=\"#!/url=./si_cmds/cb_ShaderParser_ParseInfo.html#ContextAttributes\">Category</a> attribute on the <a href=\"#!/url=./si_om/Context.html\">Context</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1Context.html\">Context</a> object: \n\
                           </p> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Assign the main Category of \"Test Shaders\" and then put .pck files under \"Parsed (Good)\" \n\
// subcategory followed by the .bck files under \"Parsed (Bad)\" subcategory\n\
if (in_ctxt.GetAttribute(\"Filename\").match(/\\.pck$/i)) {\n\
	in_ctxt.SetAttribute(\"Category\", \"Test Shaders/Parsed (Good)@100\");\n\
} else if (in_ctxt.GetAttribute(\"Filename\").match(/\\.bck$/i)) {\n\
	in_ctxt.SetAttribute(\"Category\", \"Test Shaders/Parsed (Bad)@200\");\n\
} else {\n\
	in_ctxt.SetAttribute(\"Category\", \"Test Shaders@300\");\n\
}</pre></div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F81CBFDF-4D4A-4FC6-9155-304D370015BA\"></a></span><p class=\"table-body\">directly from the <a href=\"#!/url=./si_om/ShaderDef.html\">ShaderDef</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ShaderDef.html\">ShaderDef</a> object \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0C62939F-FE3A-4AD5-B1AC-7C064680AC44\"></a></span><p class=\"table-body\">the <a href=\"#!/url=./si_om/ShaderDef.DisplayName.html\">ShaderDef.DisplayName</a> or ShaderDef::PutDisplayName member: \n\
                           </p> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
oShaderDef.Category = \"My Shaders\";</pre></div> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-1727F1C3-ACA7-4A2C-9F8C-51E787E1C918\"></a></span>These examples demonstrate how to use a single custom category, but you can also refine\n\
                  how your shader definitions appear by using special syntax in the categories string\n\
                  to <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders_PresetMgr.htm#WSEE80B7B3C7C7E74A9E14EA8F7E4C08A5-0012\">group them</a></span> and/or <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders_PresetMgr.htm#WSEE80B7B3C7C7E74A9E14EA8F7E4C08A5-0013\">specify subcategories</a></span> (nesting them). \n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSEE80B7B3C7C7E74A9E14EA8F7E4C08A5-0012\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-DD3B66EC-7902-4928-B1F3-B94DE4857F0E\"></a></span>Grouping Items in Categories\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-E84BEB6E-B2C8-4EE1-A550-ED0530DF672E\"></a></span>To group items, you indicate group membership by the @ symbol followed by a number\n\
                     that identifies the group. It is best to use multiples of 100, to give maximum flexibility\n\
                     for interceding groups. For example, suffixing <span class=\"code\" translate=\"no\">@100</span> to the Category name for three out of five definitions means that those three will\n\
                     appear after the other two, and each of the two groups will be automatically sorted\n\
                     in alphabetical order. If you then added another set of shader definitions with the\n\
                     group indicator of <span class=\"code\" translate=\"no\">@200</span>, those will appear at then end. \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-23ADB04F-43F1-4807-B836-FC5366B39B07\"></a></span>Each grouping is indicated in the preset manager by a standard menu separator. For\n\
                     an example of grouping shader definitions in the preset manager, see the <a href=\"#!/url=./examples/Addons/ImportExport/netview_ImportExport.htm\">Puck Shader Language Parser</a> example. \n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSEE80B7B3C7C7E74A9E14EA8F7E4C08A5-0013\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-D42002B5-6BE0-4C18-8BAB-1016ABF9EB0B\"></a></span>Specifying Sub-Categories\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-B6B6F703-8910-4BE1-8420-F436EBC65B8A\"></a></span>Specify a sub-category using a forward slash (/) preceding each nested level (sub-category).\n\
                     You can nest an unlimited number of levels deep, although it is recommended for clarity\n\
                     and usability to only use up to two levels of depth. For an example of using sub-categorized\n\
                     shader definitions in the preset manager, see the <a href=\"#!/url=./examples/Addons/ImportExport/netview_ImportExport.htm\">Puck Shader Language Parser</a> example. \n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSEE80B7B3C7C7E74A9E14EA8F7E4C08A5-0014\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-61CA05F1-03A2-48C7-8BF2-B09FE063F0A8\"></a></span>Using Native Softimage Categories\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-0FEAA1AC-EEDE-4A2F-90EC-76930F08AD13\"></a></span>If you want to use a native Softimage category, you can piggyback on one of the categories\n\
                     defined in the <span class=\"filePath\" translate=\"no\">RTUserTools\\Application\\Plugins\\RTShaderCategories.js</span> script file under your factory add-ons location. For example, to add a list of custom\n\
                     texture shaders under the <em class=\"mild\">Retreads</em> sub-category to the end of the list of native Softimage textures in the preset manager,\n\
                     specify <span class=\"code\" translate=\"no\">\"<a href=\"javascript:void(0)\" data=\"Texture\" class=\"a_multireflink\">Texture</a>@100/Retreads@300\"</span> as the Category string: \n\
                  </p> <img src=\"../images/GUID-AD869252-C4DC-43A5-A65C-CAEEF3EA0EB4-low.png\" /> \n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";