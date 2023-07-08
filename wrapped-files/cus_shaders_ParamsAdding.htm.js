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
      <meta name=\"topicid\" content=\"GUID-ACE71042-17A9-4432-959E-74A1E4EBAF5F\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Adding Parameter Definitions</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"color\", \"si_cpp/group__RenderMapDefine.html#ga9b982a36d73688fd43fe5f3539824d21\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"data\", \"si_cpp/group__RenderMapDefine.html#gadd4f4d7b7bb549a29e5ea45fe633c5c3\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"type\", \"si_cpp/group__RenderMapDefine.html#ga7117e14e60390664f1862525dd6acaf6\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"name\", \"si_cpp/group__RenderMapDefine.html#ga882c17490314f92c7159d6d7d69696e7\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-ACE71042-17A9-4432-959E-74A1E4EBAF5F\"></a></span><div class=\"head\">\n\
            <h1>Adding Parameter Definitions</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-CE0A6C27-716B-4F66-8788-9338F5CDEAE4\"></a></span>Adding parameter definitions to a <a href=\"#!/url=./si_om/ShaderParamDefContainer.html\">ShaderParamDefContainer</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ShaderParamDefContainer.html\">ShaderParamDefContainer</a> is the similar for all parameter data types: for array parameters, you use the <a href=\"#!/url=./si_om/ShaderParamDefContainer.AddArrayParamDef.html\">ShaderParamDefContainer.AddArrayParamDef</a> or ShaderParamDefContainer::AddArrayParamDefmethod, and for everything else you use\n\
               the <a href=\"#!/url=./si_om/ShaderParamDefContainer.AddParamDef.html\">ShaderParamDefContainer.AddParamDef</a> or ShaderParamDefContainer::AddParamDef method.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-4C7990F8-C8D5-4B77-8DA2-9A012C04A0E5\"></a></span>These methods allow you to specify the name and data type, and requires that you pass\n\
               in a special object that further defines the new parameter definition: <a href=\"#!/url=./si_om/ShaderParamDefOptions.html\">ShaderParamDefOptions</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ShaderParamDefOptions.html\">ShaderParamDefOptions</a>. This object allows you to specify the parameter definition\'s display name, its capabilities\n\
               (texturable, animatable, inspectable), what default value to use, the valid value\n\
               range, etc. To create an instance, you can call the <a href=\"#!/url=./si_om/XSIFactory.CreateShaderParamDefOptions.html\">XSIFactory.CreateShaderParamDefOptions</a> or XSIFactory::CreateShaderParamDefOptions method and set any values on it before\n\
               you call the Add method for the parameter definition.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-6FC37A3D-E753-4FC5-BFD1-07BFB1E6BAE4\"></a></span>You can reuse the same options over again, only changing what you need before you\n\
               call the Add methods, if necessary. For example, if you are creating only texturable\n\
               parameters and don\'t need to specify a display name, default values, or a value range,\n\
               you can use the same object in each call to the Add methods. You can also modify one\n\
               or more options and keep the rest of the options, or get a new instance of the object\n\
               to reset the values. The <a href=\"#!/url=./si_om/ShaderParamDefOptions.html\">ShaderParamDefOptions</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ShaderParamDefOptions.html\">ShaderParamDefOptions</a> is also instrumental in applying filters for reference and property look-up data\n\
               types, and for creating custom parameter.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-12B07C98-B2D6-4F10-B167-1112DB6667BE\"></a></span>The principle behind adding the simple parameter definition data types applies to\n\
               the more complex types, such as structures, property look-ups, and references; however\n\
               there are also a few extra measures to take which are explained in the sections below:\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-3197C636-0349-43BA-830A-6A3665877A7B\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders_ParamsAdding.htm#WSEE80B7B3C7C7E74A9E14EA8F7E4C08A5-003D\">To add simple parameter definitions</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-ABC26914-2E8C-4D17-864A-2D17D06858EB\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders_ParamsAdding.htm#WSEE80B7B3C7C7E74A9E14EA8F7E4C08A5-003E\">To add array parameter definitions</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-9CC1C0DA-7164-45BD-A6C7-ADE56A826116\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders_ParamsAdding.htm#WSEE80B7B3C7C7E74A9E14EA8F7E4C08A5-0040\">To add a structure parameter definition</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-EA5B1D3B-E998-4D7D-BC06-6B67A993CB90\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders_ParamsAdding.htm#WSEE80B7B3C7C7E74A9E14EA8F7E4C08A5-0041\">To add a property look-up parameter definition (CAV, texture map, normal, etc.)</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-19DFCE60-8E1E-4E48-B833-2872291401D2\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders_ParamsAdding.htm#WSEE80B7B3C7C7E74A9E14EA8F7E4C08A5-0042\">To add a reference parameter definition</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-76E952D3-D7AE-4497-9F71-5D0A431711B9\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders_ParamsAdding.htm#WSEE80B7B3C7C7E74A9E14EA8F7E4C08A5-0043\">Bonus: To add an output parameter definition for a lightmap (custom)</a></span> \n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSEE80B7B3C7C7E74A9E14EA8F7E4C08A5-003D\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-469A61FC-EFB1-49E6-9588-419217844C3D\"></a></span>To add simple parameter definitions\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-11F96376-19AE-4960-A786-D579E9E0414E\"></a></span>Before calling the <a href=\"#!/url=./si_om/ShaderParamDefContainer.AddParamDef.html\">ShaderParamDefContainer.AddParamDef</a> or ShaderParamDefContainer::AddParamDef method, set up the shader parameter definition\n\
                  options. This example uses the <a href=\"#!/url=./si_om/ShaderParamDefOptions.SetLongName.html\">ShaderParamDefOptions.SetLongName</a> or ShaderParamDefOptions::SetLongName method to set the name that appears in the\n\
                  UI, and the <a href=\"#!/url=./si_om/ShaderParamDefOptions.SetTexturable.html\">ShaderParamDefOptions.SetTexturable</a> or ShaderParamDefOptions::SetTexturable method to allow this parameter to be connected\n\
                  in the render tree.\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Set up an RGBA <a href=\"javascript:void(0)\" data=\"color\" class=\"a_multireflink\">color</a> <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
var oPDefOptions = XSIFactory.CreateShaderParamDefOptions();\n\
oPDefOptions.SetLongName(\"sweet\");		// this becomes the port <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a> in the UI\n\
oPDefOptions.SetTexturable(true);		// display as a node in render tree\n\
\n\
// You need to <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> up the options before you can add the param def\n\
var oInputParamsContainer = oShaderDef.InputParamDefs;\n\
oInputParamsContainer.AddParamDef(\"simple\", siShaderDataTypeColor4, oPDefOptions);\n\
\n\
// Change only the UI <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>, and keep the rest of the settings\n\
oPDefOptions.SetLongName(\"salty\");\n\
oInputParamsContainer.AddParamDef(\"simple2\", siShaderDataTypeColor4, oPDefOptions)\n\
\n\
// A similar parameter, this time appearing only as a parameter on the PPGLayout\n\
oPDefOptions.SetTexturable(false);		// display in associated property page only\n\
oPDefOptions.SetInspectable(true);\n\
oInputParamsContainer.AddParamDef(\"torque\", siShaderDataTypeScalar, oPDefOptions);\n\
\n\
# etc.</pre></div> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-1D85C736-5BE1-465D-A841-5DDC7DB693AC\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-70559ED8-5958-4645-B606-89D5F76FEEE0\"></a></span>For information on how to add more complex types, such as texture space ID or reference\n\
                        controls, see <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders_ParamsControls.htm\">Refining UI Controls for Parameter Definitions</a></span>.\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSEE80B7B3C7C7E74A9E14EA8F7E4C08A5-003E\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-1754C174-DB1F-4001-814C-725012BFABC5\"></a></span>To add array parameter definitions\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-5D97282C-D424-422D-A148-300FEA15F1A2\"></a></span>Adding array parmeter definitions is just like adding the single version of the same\n\
                  data object. The <a href=\"#!/url=./si_om/ShaderParamDefContainer.AddArrayParamDef.html\">ShaderParamDefContainer.AddArrayParamDef</a> or ShaderParamDefContainer::AddArrayParamDefmethod returns a <a href=\"#!/url=./si_om/ShaderArrayParamDef.html\">ShaderArrayParamDef</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ShaderArrayParamDef.html\">ShaderArrayParamDef</a> object.\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Add an array of gradients\n\
oParamDefOptions = XSIFactory.CreateShaderParamDefOptions();\n\
oParamDefOptions.SetTexturable(true);// connectable port\n\
oInputParams.AddArrayParamDef(\"train\", siShaderDataTypeGradient, oParamDefOptions);</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-449E10E8-477F-4199-B63D-BF3AD23A56C7\"></a></span>If you leave the code as is, your shader will initialize with an empty array, like\n\
                  this:\n\
               </p> <img src=\"../images/GUID-1969F469-E1DF-4282-96E8-F28806B78056-low.png\" /> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-94A04304-21DF-4542-9589-788BCB6C056B\"></a></span>However you can refine your array parameter definition in several ways:\n\
               </p> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-16520CC7-2AF8-4A53-A254-96A328761DA0\"></a></span>You can populate the array with a specific <a href=\"#!/url=./si_om/ShaderArrayParamDef.ItemInitialCount.html\">ShaderArrayParamDef.ItemInitialCount</a> or ShaderArrayParamDef::PutItemInitialCountset to specific <a href=\"#!/url=./si_om/ShaderArrayParamDef.ItemInitialValues.html\">ShaderArrayParamDef.ItemInitialValues</a> or ShaderArrayParamDef::GetItemInitialValues.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-2AA06043-9AE7-4A18-BBCD-229FA76DADB6\"></a></span>The name of each item is by default Item, but you can <a href=\"#!/url=./si_om/ShaderArrayParamDef.ItemName.html\">ShaderArrayParamDef.ItemName</a> or ShaderArrayParamDef::PutItemName.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-E50BB859-175A-4A69-9D35-5F913A42CD50\"></a></span>You can get a reference to the <a href=\"#!/url=./si_om/ShaderArrayParamDef.ItemDef.html\">ShaderArrayParamDef.ItemDef</a> or ShaderArrayParamDef::GetItemDef to refine it using specific members. For example,\n\
                        in the case of an array of structs, you need to add a number of sub-definitions to\n\
                        the struct, which you can do through the underlying <a href=\"#!/url=./si_om/ShaderStructParamDef.html\">ShaderStructParamDef</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ShaderStructParamDef.html\">ShaderStructParamDef</a> object.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-F0B54F0A-88EF-40DF-9164-8F8E9A0F6990\"></a></span>You can <a href=\"#!/url=./si_om/ShaderArrayParamDef.StaticArray.html\">ShaderArrayParamDef.StaticArray</a> or ShaderArrayParamDef::PutStaticArray, which prevents users from adding or removing\n\
                        items. In the property page, the Add and Clear buttons are disabled.\n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSEE80B7B3C7C7E74A9E14EA8F7E4C08A5-0040\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-982F29E9-B112-4F52-AA0D-25D5E6DA7CEB\"></a></span>To add a structure parameter definition\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-B6EC63EF-C90D-4D72-A8AE-23E2665E3B79\"></a></span>When you call the Add method you need to grab the return value, which is a <a href=\"#!/url=./si_om/ShaderStructParamDef.html\">ShaderStructParamDef</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ShaderStructParamDef.html\">ShaderStructParamDef</a> object. This specialized parameter definition implements the <a href=\"#!/url=./si_om/ShaderStructParamDef.SubParamDefs.html\">ShaderStructParamDef.SubParamDefs</a> or ShaderStructParamDef::GetSubParamDefs member which provides access to the <a href=\"#!/url=./si_om/ShaderParamDefContainer.html\">ShaderParamDefContainer</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ShaderParamDefContainer.html\">ShaderParamDefContainer</a>. From this container you can add sub-parmeter definitions using the Add methods.\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// This example of a struct builds the \"si_default\" input structure for the \n\
// Bionic Volume (Fast Volume Effects) shader implemented as a plug-in\n\
var oParamDefOpts = XSIFactory.CreateShaderParamDefOptions();\n\
oParamDefOpts.SetTexturable(false);\n\
\n\
// Add the structure <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> parameter to the shader definition\n\
var oInParamDefs = oShaderDef.InputParamDefs;\n\
var oStructParamDef = oInParamDefs.AddParamDef(\"si_default\", siShaderDataTypeStructure, oParamDefOpts);\n\
\n\
// Get the structure parameter container and start adding sub-parameter definitions\n\
var oSubParamDefs = oStructParamDef.SubParamDefs;\n\
oParamDefOpts = XSIFactory.CreateShaderParamDefOptions();\n\
\n\
// \"start\"\n\
oParamDefOpts.SetTexturable(false);\n\
oParamDefOpts.SetDefaultValue(5.0);\n\
oSubParamDefs.AddParamDef(\"start\", siShaderDataTypeScalar, oParamDefOpts);\n\
\n\
// \"stop\"\n\
oParamDefOpts.SetDefaultValue(100.0);\n\
oSubParamDefs.AddParamDef(\"stop\", siShaderDataTypeScalar, oParamDefOpts);\n\
\n\
// \"rate\"\n\
oParamDefOpts.SetDefaultValue(1.0);\n\
oSubParamDefs.AddParamDef(\"rate\", siShaderDataTypeScalar, oParamDefOpts);\n\
\n\
// \"transmit\"\n\
oParamDefOpts.SetDefaultValue(0.5);\n\
oSubParamDefs.AddParamDef(\"transmit\", siShaderDataTypeColor4, oParamDefOpts);\n\
\n\
// \"lightrays\"\n\
oParamDefOpts.SetDefaultValue(false);\n\
oSubParamDefs.AddParamDef(\"lightrays\", siShaderDataTypeBoolean, oParamDefOpts);</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSEE80B7B3C7C7E74A9E14EA8F7E4C08A5-0041\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-C4B896E2-F6BD-4AE4-BC2F-1251667963DA\"></a></span>To add a property look-up parameter definition (CAV, texture map, normal, etc.)\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-3DED87CF-F312-4BDF-8FFE-5C3AA25F87A0\"></a></span>Property type parameter definitions provide a property look-up widget for weight maps,\n\
                  texture maps, normals, color-at-vertices, etc. You can apply a <a href=\"#!/url=./si_om/siShaderPropertyFilterType.html\">filter</a> to get widgets for specific properties.\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Apply the Color-At-Vertices filter to the parameter definition options\n\
var oParamDefOptions = XSIFactory.CreateShaderParamDefOptions();\n\
oParamDefOptions.SetTexturable(false);								// PPGLayout only\n\
oParamDefOptions.SetAttribute(siPropertyFilterAttribute, siCAVPropertyFilter);\n\
\n\
// Add the \"VertexColor\" parameter definition to the input list as a property look-up <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
var oInputParams = oShaderDef.InputParamDefs;\n\
oInputParams.AddParamDef(\"VertexColor\", siShaderDataTypeProperty, oParamDefOptions);</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSEE80B7B3C7C7E74A9E14EA8F7E4C08A5-0042\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-DD716DFA-EBFE-4E1A-B9AD-A435E9F3E083\"></a></span>To add a reference parameter definition\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-DE76DBF1-5AC9-4A9E-B5E0-F69BBE3E8FC7\"></a></span>Reference type parameter definitions provide a widget for the user to pick an element\n\
                  in the scene. You can apply a <a href=\"#!/url=./si_om/siShaderReferenceFilterType.html\">filter</a> to limit the kind of items the user can pick from.\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Apply the Cameras filter to the parameter definition options to make sure \n\
// that the user can only pick cameras\n\
var oParamDefOptions = XSIFactory.CreateShaderParamDefOptions();\n\
oParamDefOptions.SetTexturable(false);									// PPGLayout only\n\
oParamDefOptions.SetInspectable(true);\n\
oParamDefOptions.SetAttribute(siReferenceFilterAttribute, siCameraReferenceFilter);\n\
\n\
// Add the reference parameter to the list of input parameter definitions\n\
var oInputParams = oShaderDef.InputParamDefs;\n\
oInputParams.AddParamDef(\"reference\", siShaderDataTypeReference, oParamDefOptions);</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSEE80B7B3C7C7E74A9E14EA8F7E4C08A5-0043\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-2269D209-D7E9-4ACE-AE23-04E77F62AF63\"></a></span>Bonus: To add an output parameter definition for a lightmap (custom)\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-BEB453DB-EEC0-4A18-80E5-0FCE28F1FF4E\"></a></span>Shader definitions of the <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders_FamiliesNative.htm#WSEE80B7B3C7C7E74A9E14EA8F7E4C08A5-0028\">mental ray Lightmap Shader</a></span> family always define the output parameter as a custom type, and then set a special\n\
                  <a href=\"#!/url=./si_om/siShaderCustomDataType.html\">attribute</a> on the parameter definition options to indicate that it is a lightmap:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Set the custom attribute to mrLmap on the options before adding them\n\
var oParamDefOpts = XSIFactory.CreateShaderParamDefOptions();\n\
oParamDefOpts.SetAttribute(siCustomTypeNameAttribute, siMentalRayLightmapPortType);\n\
\n\
// Then add the new method to the output parameters container\n\
var oOutParamDefs = oShaderDef.OutputParamDefs;\n\
oOutParamDefs.AddParamDef(\"out\", siShaderDataTypeCustom, oParamDefOpts);</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";