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
      <meta name=\"topicid\" content=\"GUID-5736CCC6-D4F3-4CF1-81B6-399F968D02E0\" />\n\
      <meta name=\"indexterm\" content=\"attributes: on dynamic shaders\" />\n\
      <meta name=\"indexterm\" content=\"custom shaders: attributes\" />\n\
      <meta name=\"indexterm\" content=\"dynamic shaders: attributes\" />\n\
      <meta name=\"indexterm\" content=\"shader parameters: attributes\" />\n\
      <meta name=\"indexterm\" content=\"writable image\" />\n\
      <meta name=\"indexterm\" content=\"parameter data type: writable image\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Setting ShaderDef Attributes</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"name\", \"si_cpp/group__RenderMapDefine.html#ga882c17490314f92c7159d6d7d69696e7\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"attributes\", \"si_cpp/group__RenderMapDefine.html#ga846eefb80d8eb3fd3e0fd17e1fee1e63\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-5736CCC6-D4F3-4CF1-81B6-399F968D02E0\"></a></span><div class=\"head\">\n\
            <h1>Setting ShaderDef Attributes</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-B73FB5D2-FD56-491A-A371-EA85E46E3F63\"></a></span>Attributes can be defined on the shader definition as well as per parameter definition.\n\
               For example, you can set one of the <a href=\"#!/url=./si_om/siPPGLayoutAttribute.html\">PPGLayout attributes</a> directly on a shader definition, such as setting the <a href=\"#!/url=./si_om/siPPGLayoutAttribute.html\">help file location</a>. On shader parameter definitions, attributes can be used to specify the parameter\n\
               data type, set which property look-up or reference widget to use on the associated\n\
               property page, or set the colour for a custom data type.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-6EBD172D-37F6-4C15-B0AE-887CF62DE197\"></a></span>Like renderer options, attributes are stored on a <a href=\"#!/url=./si_om/ValueMap.html\">ValueMap</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ValueMap.html\">ValueMap</a>, which is similar to an associative array, being composed of name/value pairs. You\n\
               access the value map containing a shader definition\'s attributes via the <a href=\"#!/url=./si_om/ShaderDef.Attributes.html\">ShaderDef.Attributes</a> or ShaderDef::GetAttributes member.\n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-9F62743B-B48E-4769-B7E0-B0BEA6DBB76B\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-A34CAA03-5D60-4EE9-8E8B-0E482E6FA6F4\"></a></span>You can also set attribute values before <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders_ParamsAdding.htm\">adding parameter definitions</a></span> using the <a href=\"#!/url=./si_om/ShaderParamDefOptions.SetAttribute.html\">ShaderParamDefOptions.SetAttribute</a> or ShaderParamDefOptions::SetAttribute method, as the <a href=\"#!/url=./si_om/ShaderParamDefOptions.html\">ShaderParamDefOptions</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ShaderParamDefOptions.html\">ShaderParamDefOptions</a> object stores parameter attributes and other settings\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-0D8F6E8F-1E58-4246-9DF6-55A26B2096AA\"></a></span>Here are the tasks you can perform on a ValueMap:\n\
            </p>\n\
            <div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B598FC0B-4672-4EB9-9A15-6E3A252DB8F1\"></a></span><p class=\"table-heading\">Task to perform</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CB7DC534-DADA-49E6-BF02-E014F023FD6C\"></a></span><p class=\"table-heading\">ValueMap member</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9877CAE3-14E8-4529-9244-9B2F65372D21\"></a></span><p class=\"table-heading\">Comments</p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D6F479D4-9DCE-408A-9681-1D20072D99A8\"></a></span><p class=\"table-body\">Adding or modifying a single entry</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8C75C2D7-98FC-4696-A456-D7C528C62480\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/ValueMap.Set.html\">ValueMap.Set</a> or ValueMap::Set\n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C9A935AF-A3C9-4E25-BBD7-947B9D6BF8E0\"></a></span><p class=\"table-body\">Takes the name and value as its arguments. If there is no entry matching the specified\n\
                           name, a new entry is added; otherwise the existing value is overwritten.\n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-693D73ED-C0C8-4400-BA11-1A1737737CEB\"></a></span><p class=\"table-body\">Retrieving a single entry</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8E5EF1A8-C2E3-42C1-82C2-350B78B94093\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/ValueMap.Get.html\">ValueMap.Get</a> or ValueMap::Get\n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6DC6CB5D-8674-45D7-87D0-C6237E7DF97E\"></a></span><p class=\"table-body\">Gets the value for the entry matching the specified name.</p> \n\
                        <div><span class=\"anchor_wrapper\"><a name=\"GUID-684DB208-155F-459E-BE99-371427997D30\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-28A6529F-031E-48CF-B9F3-2A90D83E9194\"></a></span>If the value is undefined, the method throws an error.\n\
                              </p> \n\
                           </div>\n\
                        </div> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E905E3DA-8611-4378-8616-27DA88586061\"></a></span><p class=\"table-body\">Deleting a single entry</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B65E805F-FB76-4908-9AA8-5C7E3B299A63\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/ValueMap.Remove.html\">ValueMap.Remove</a> or ValueMap::Remove\n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B6BC2459-FC63-4958-92FF-E057D08D305F\"></a></span><p class=\"table-body\">Removes the entry matching the specified name. The method will not throw an error\n\
                           if no match is found.\n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\" rowspan=\"2\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8C448A0B-6BDD-4ED1-A16D-E945188C107B\"></a></span><p class=\"table-body\">Iterating over the list of entries</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3B634E65-D8D0-4713-AC73-DC333B16E6DF\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/ValueMap.Names.html\">Names</a> and <a href=\"#!/url=./si_om/ValueMap.Values.html\">Values</a> properties (Object Model)\n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" rowspan=\"2\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5C1BCD1C-6EDC-42AE-A1CF-D6821AAEF7EC\"></a></span><p class=\"table-body\">The ValueMap interface gives you access to the list of names as well as the list of\n\
                           values, so you can skip the names completely and just iterate over the values, or\n\
                           you can iterate over the names and use each entry to access the matching value via\n\
                           the <a href=\"#!/url=./si_om/ValueMap.Get.html\">ValueMap.Get</a> or ValueMap::Get member.\n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FAF280DB-D00F-4EE5-A7EB-A856A9D2098A\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_cpp/classXSI_1_1ValueMap.html#GetAll\">ValueMap::GetAll</a> function (C++ API), which takes names and values output arrays as arguments\n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSEE80B7B3C7C7E74A9E14EA8F7E4C08A5-004E\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-FB5373A2-642E-4016-B920-5A8762D9983B\"></a></span>Python Example: Setting, Removing, and Iterating Over ShaderDef Attributes\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-ABE52DD7-5B6A-493B-ADF2-174AFD1E7851\"></a></span>Python and VBScript work well with safearrays, so iterating over the entries in a\n\
                  ValueMap is quite straightforward:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
# Get the ValueMap from the shader definition and add a couple of entries\n\
oAttribs = oShaderDef.Attributes\n\
oAttribs.Set(\"user\", \"test\")\n\
oAttribs.Set(\"a\", 123456)\n\
\n\
# Get the safearray of names and use each <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a> to find the matching value\n\
aAttribNames = oAttribs.Names\n\
Application.LogMessage(\"Before removal there are %d <a href=\"javascript:void(0)\" data=\"attributes\" class=\"a_multireflink\">attributes</a>\" % len(aAttribNames))\n\
for vKey in aAttribNames :\n\
	Application.LogMessage(\"Attribute key,value: %s, %s\" % (vKey, str(oAttribs.Get(vKey))))\n\
\n\
# Remove one of the entries from the list\n\
oAttribs.Remove(\"user\")\n\
aAttribValues = oAttribs.Values\n\
Application.LogMessage(\"After removal there are %d attribute(s) left\" % len(aAttribValues))\n\
\n\
# Results:\n\
# INFO : Before removal there are 2 <a href=\"javascript:void(0)\" data=\"attributes\" class=\"a_multireflink\">attributes</a>\n\
# INFO : Attribute key,value: a, 123456\n\
# INFO : Attribute key,value: user, test\n\
# INFO : After removal there are 1 attribute(s) left</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSEE80B7B3C7C7E74A9E14EA8F7E4C08A5-004F\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-B3162F78-3062-4F71-B70D-5F2B6207ACB0\"></a></span>JScript Example: Setting a Writable Image Type for a ShaderParamDef\n\
               </h2>   \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-83555DE4-A1CF-427E-B5DA-96AAE4008876\"></a></span>This example demonstrates how to set a shader parameter definition as a writable image\n\
                  data type.\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// When you <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> up the options for your shader parameter definition you could\n\
// <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> parameter <a href=\"javascript:void(0)\" data=\"attributes\" class=\"a_multireflink\">attributes</a> using the ShaderParamDefOptions object\n\
var oParamDefOpts = XSIFactory.CreateShaderParamDefOptions();\n\
oParamDefOpts.SetAttribute(siWritableImageAttribute, true);\n\
oParamDefOpts.SetTexturable(true);\n\
oParamDefOpts.SetInspectable(false);\n\
\n\
// Alternatively, you could use the Attributes property to get the ValueMap and\n\
// <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> the siWritableImageAttribute directly on the ValueMap\n\
var oInParamDefs = oShaderDef.InputParamDefs;\n\
var oParamDef = oInParamDefs.AddParamDef(\"texture\", siShaderDataTypeImage, oParamDefOpts);\n\
oParamDef.Attributes.Set(siWritableImageAttribute, true);</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";