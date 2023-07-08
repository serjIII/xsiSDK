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
      <meta name=\"topicid\" content=\"GUID-BCC733C1-D0FE-4B49-8171-DE434D9BC4DA\" />\n\
      <meta name=\"indexterm\" content=\"renderers: defining for dynamic shaders\" />\n\
      <meta name=\"indexterm\" content=\"custom shaders: defining renderers\" />\n\
      <meta name=\"indexterm\" content=\"dynamic shaders: defining renderers\" />\n\
      <meta name=\"indexterm\" content=\"renderer options: defining for dynamic shaders\" />\n\
      <meta name=\"indexterm\" content=\"custom shaders: renderer options\" />\n\
      <meta name=\"indexterm\" content=\"dynamic shaders: renderer options\" />\n\
      <meta name=\"indexterm\" content=\"custom shaders: mental ray options\" />\n\
      <meta name=\"indexterm\" content=\"dynamic shaders: mental ray options\" />\n\
      <meta name=\"indexterm\" content=\"renderers: mental ray options\" />\n\
      <meta name=\"indexterm\" content=\"mental ray options\" />\n\
      <meta name=\"indexterm\" content=\"scanline option (dynamic shaders)\" />\n\
      <meta name=\"indexterm\" content=\"environment trace&gt; option (dynamic shaders)\" />\n\
      <meta name=\"indexterm\" content=\"shadow option (dynamic shaders)\" />\n\
      <meta name=\"indexterm\" content=\"face option (dynamic shaders)\" />\n\
      <meta name=\"indexterm\" content=\"autovolume option (dynamic shaders)\" />\n\
      <meta name=\"indexterm\" content=\"framebuffers option (dynamic shaders)\" />\n\
      <meta name=\"indexterm\" content=\"pass channel option (dynamic shaders)\" />\n\
      <meta name=\"indexterm\" content=\"version option (dynamic shaders)\" />\n\
      <meta name=\"indexterm\" content=\"derivative1 option (dynamic shaders)\" />\n\
      <meta name=\"indexterm\" content=\"derivative2 option (dynamic shaders)\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Providing Renderer Information</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"shadow\", \"si_cpp/group__RenderMapDefine.html#ga2779bc97d58f2cac3fde332db7516177\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"version\", \"si_cpp/group__RenderMapDefine.html#gad6034d1c8c050eba0cf6533a8e6f3785\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"diffuse\", \"si_cpp/group__RenderMapDefine.html#gac02a5759faf727e79c12be067fe7f928\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"specular\", \"si_cpp/group__RenderMapDefine.html#ga3943ae8b3f125eecca1b864e7a1e7316\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-BCC733C1-D0FE-4B49-8171-DE434D9BC4DA\"></a></span><div class=\"head\">\n\
            <h1>Providing Renderer Information</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-517448E8-4EAE-4671-ABCC-D3072424D9D8\"></a></span>Each shader definition can have one or more renderer definitions associated with it,\n\
               storing vital information, such as:\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-8B1BA911-400F-4F54-BEF8-2901C1771F50\"></a></span>the location of the renderer\'s implementation\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-F6D144D1-34DE-42FE-A619-C161897D7819\"></a></span>the name of the entry point (procedure to call)\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-877E6EBD-36E8-456B-B2FD-63E41B571E38\"></a></span>special options (set of name-value pairs)\n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSEE80B7B3C7C7E74A9E14EA8F7E4C08A5-0052\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-C306EEA4-FE69-43FD-9B4D-BAFA167EFFEF\"></a></span>Specifying a Renderer Definition\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-E1EB3AEB-2D95-4F71-903C-E5A9A3741C56\"></a></span>Add a renderer definition to the shader definition using the <a href=\"#!/url=./si_om/ShaderDef.AddRendererDef.html\">ShaderDef.AddRendererDef</a> or ShaderDef::AddRendererDef method, where you specify the name of your renderer,\n\
                  and which returns the new definition as a <a href=\"#!/url=./si_om/MetaShaderRendererDef.html\">MetaShaderRendererDef</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1MetaShaderRendererDef.html\">MetaShaderRendererDef</a> object. The MetaShaderRendererDef object allows you to specify the following:\n\
               </p> \n\
               <div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                     </colgroup>\n\
                     <tr class=\"ruledHeading\">\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E1BF4E32-FBAA-494D-92A2-79E440190127\"></a></span><p class=\"table-heading\">MetaShaderRendererDef Access</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-49E1A748-4CF3-443E-AE9A-C404D048B557\"></a></span><p class=\"table-heading\">Matching SPDL declaration (Renderer section)</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-551DFD63-59A5-4061-8291-9C84796B8C7C\"></a></span><p class=\"table-heading\">Description</p> \n\
                        </th>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F6199965-D968-4A54-92FD-38AC00836669\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/MetaShaderRendererDef.SymbolName.html\">MetaShaderRendererDef.SymbolName</a> or MetaShaderRendererDef::PutSymbolName \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F25D7D66-824A-4642-B9A1-71230D3AD60E\"></a></span><p class=\"table-body\">Name</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5BCFBE87-AFA2-4A6E-824A-0F3CE9E87FCD\"></a></span><p class=\"table-body\">Indicates the symbol name of the shader code to use. For example with mental ray shaders\n\
                              this would indicate the prefix for the symbol (callback) name in the DLL/DSO where\n\
                              the code for the shader is.\n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6CD43FD3-68CA-46C2-9CA1-41917CD2AE6A\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/MetaShaderRendererDef.CodePath.html\">MetaShaderRendererDef.CodePath</a> or MetaShaderRendererDef::PutCodePath \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-88E1FCE3-34F7-44F2-A02B-8D7A249BCE59\"></a></span><p class=\"table-body\">FileName</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C67068AC-1EDD-45A7-9C5A-59029BAEC9AE\"></a></span><p class=\"table-body\">The name of the DLL/DSO that contains the shader code. For example <span class=\"code\" translate=\"no\">\"{LIBS}/sibase.{EXT}\"</span>.\n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6B4B6C62-54B5-4432-B0ED-96A88CDCFA28\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/MetaShaderRendererDef.CodeText.html\">MetaShaderRendererDef.CodeText</a> or MetaShaderRendererDef::PutCodeText \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0F9CCDB7-9307-449C-BC7A-5EEC6548F7C4\"></a></span><p class=\"table-body\">BeginText...EndText</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4F652D7F-E9B0-4458-B472-56097B3DE9C8\"></a></span><p class=\"table-body\">Provides a placeholder for any arbitrary text that can then be interpreted or compiled\n\
                              into a shader by the rendering engine, including the implementation of a shader. For\n\
                              example:\n\
                           </p> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
{\n\
   float4 retcolor;\n\
\n\
   retcolor.x = factor.x * (input.x + input.y + input.z) / 3.0;\n\
   retcolor.y = retcolor.x;\n\
   retcolor.z = retcolor.x;\n\
   retcolor.w = retcolor.x;\n\
\n\
   return retcolor;\n\
}</pre></div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-71E5C5E7-3296-4034-AC1D-70D44AC2ED03\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/MetaShaderRendererDef.RendererOptions.html\">MetaShaderRendererDef.RendererOptions</a> or MetaShaderRendererDef::GetRendererOptions \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1F320200-CD0E-4514-BE3C-B1B9FCB3483C\"></a></span><p class=\"table-body\">Options</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-69FAE86E-A0FC-4A64-8CAF-4F0E3E68E868\"></a></span><p class=\"table-body\">See <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders_Renderers.htm#WSEE80B7B3C7C7E74A9E14EA8F7E4C08A5-0054\">Setting Renderer Options</a></span>.\n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSEE80B7B3C7C7E74A9E14EA8F7E4C08A5-0053\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-94B41B77-0E21-4610-A78F-43398CCDBE8E\"></a></span>Python Example: Setting up a Single Renderer Definition\n\
                  </h3> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
# You need to <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> up at least one renderer definition for each shader definition.\n\
# Renderer definitions are available via the ShaderDef.RendererDefs property and\n\
# allow you to tell Softimage which renderer to use, which procedure to call, how\n\
# to <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> any renderer options, etc.\n\
oRendererDef = oShaderDef.AddRendererDef(\"mental ray\")\n\
oRendererDef.SymbolName = \"XSIModelMap\"\n\
oRendererDef.CodePath = \"{LIBS}/xsibase.{EXT}\"\n\
\n\
# Set the <a href=\"javascript:void(0)\" data=\"version\" class=\"a_multireflink\">version</a> option\n\
oRendererOpts = oRendererDef.RendererOptions\n\
oRendererOpts.Set(\"<a href=\"javascript:void(0)\" data=\"version\" class=\"a_multireflink\">version</a>\", 1)</pre></div> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSEE80B7B3C7C7E74A9E14EA8F7E4C08A5-0054\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-DB1298B3-CE68-4FA0-8982-61B29CF74E21\"></a></span>Setting Renderer Options\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-1E6E6418-D3B8-4406-9F7E-BD0460EEBCEF\"></a></span>Renderer options comprise a list of string/value pairs that are passed to the renderer.\n\
                  The option name can be any string. The value can be boolean, integer, float or string.\n\
                  Depending on the renderer, the Options list is used in different ways:\n\
               </p> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-C66ADA3D-A2B5-4B30-BDFF-3BB55162549D\"></a></span>For mental ray, the Options list stores the rendering restrictions for this particular\n\
                        shader, such as whether shadows are on or off. See <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders_Renderers.htm#WSEE80B7B3C7C7E74A9E14EA8F7E4C08A5-0056\">mental ray Options</a></span> for details.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-84FAF9AD-4257-4A50-842A-D6C652046198\"></a></span>For realtime renderers, the Options section can be used to store parameter pairs.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-95812B28-8EDC-4DBB-A412-6CD1240A65B2\"></a></span>For other renderers, the Options section could provide a path for the location of\n\
                        the source code of the shader. For example, this is useful for the RenderMan shader\n\
                        library where the all the code for a large shader library could be provided as one\n\
                        big SL file. For mental ray, you could also provide a source code which would then\n\
                        be compiled at render time.\n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSEE80B7B3C7C7E74A9E14EA8F7E4C08A5-0055\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-BF89CB6A-1BED-49DE-B14C-C7458315547D\"></a></span>Python Example: Setting up a Two Renderers (One with Cg Code to Run, Both with Options)\n\
                  </h3> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	# Add a mental ray renderer definition with the location of the library where it is defined\n\
	oRendererDef = oShaderDef.AddRendererDef(\"mental ray\")\n\
	oRendererDef.SymbolName = \"material-phong\"\n\
	oRendererDef.CodePath = \"{LIBS}/sibase.{EXT}\"\n\
	oRendOpts = oRendererDef.RendererOptions\n\
	oRendOpts.Set(\"<a href=\"javascript:void(0)\" data=\"version\" class=\"a_multireflink\">version</a>\", 1)\n\
	oRendOpts.Set(\"pass channel\", \"Ambient,Diffuse,Specular,Irradiance,Reflection,Refraction\")\n\
	\n\
	# Add a Cg <a href=\"javascript:void(0)\" data=\"version\" class=\"a_multireflink\">version</a> with the code embedded in the definition\n\
	oRendererDef = oShaderDef.AddRendererDef(\"Cg\")\n\
	oRendererDef.SymbolName = \"mib_color_average_cg\"\n\
	oRendererDef.CodeText = \"\\tBeginText\\n\\t{\\n\\t\\t float4 retcolor;\\n\\n\\t\\t retcolor.x = factor.x * (input.x + input.y + input.z) / 3.0;\\n\\t\\t retcolor.y = retcolor.x;\\n\\t\\t retcolor.z = retcolor.x;\\n\\t\\t retcolor.w = retcolor.x;\\n\\n\\t\\t return retcolor;\\n\\t}\\n\\tEndText\"\n\
	oRendOpts = oRendererDef.RendererOptions\n\
	oRendOpts.Set(\"param0\", \"ambient\")\n\
	oRendOpts.Set(\"param1\", \"<a href=\"javascript:void(0)\" data=\"diffuse\" class=\"a_multireflink\">diffuse</a>\")\n\
	oRendOpts.Set(\"param2\", \"<a href=\"javascript:void(0)\" data=\"specular\" class=\"a_multireflink\">specular</a>\")\n\
	oRendOpts.Set(\"param3\", \"ambience\")\n\
	oRendOpts.Set(\"param4\", \"shiny\")\n\
	oRendOpts.Set(\"const0\", \"diffuse_inuse\")\n\
	oRendOpts.Set(\"const1\", \"specular_inuse\")\n\
	oRendOpts.Set(\"param7\", \"radiance\")</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSEE80B7B3C7C7E74A9E14EA8F7E4C08A5-0056\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-56DD7064-A3F9-46B2-8C2E-211FF900876C\"></a></span>mental ray Options\n\
                  </h3> \n\
                  <div class=\"table_Ruled\">\n\
                     <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                        <colgroup>\n\
                           <col align=\"left\" />\n\
                           <col align=\"left\" />\n\
                           <col align=\"left\" />\n\
                        </colgroup>\n\
                        <tr class=\"ruledHeading\">\n\
                           <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CBCF445C-880C-4AAF-A9D2-2128B6646B5F\"></a></span><p class=\"table-heading\">Option values</p> \n\
                           </th>\n\
                           <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C445DB2E-2BC9-46BB-B33C-2FFA7D3D9129\"></a></span><p class=\"table-heading\">Description</p> \n\
                           </th>\n\
                           <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-82105191-A4CC-4937-8DD7-A6238AED2260\"></a></span><p class=\"table-heading\">Examples</p> \n\
                           </th>\n\
                        </tr>\n\
                        <tr class=\"ruledOddRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DE07E59D-B605-42ED-9D8F-2A7C349F77D9\"></a></span><p class=\"table-body\"> <em class=\"strong\">scanline</em> option\n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" colspan=\"2\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-014DCD4A-4134-43CC-854D-99D48FC3FC28\"></a></span><p class=\"table-body\">Scanline rendering speeds up rendering of objects visible from the camera.</p> <span class=\"anchor_wrapper\"><a name=\"GUID-E66FA0CA-B98B-4678-A1B3-18058D4D756F\"></a></span><p class=\"table-body\">If disabled mental ray will use raytracing for all rendering. Lens shaders which modify\n\
                                 the ray direction from the camera should disable scanline rendering.\n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledEvenRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-438C5BC6-1087-484D-9325-72FF385AD47A\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">on</span> \n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-409DEBFE-3B82-4994-A8D6-8308B857A6CD\"></a></span><p class=\"table-body\">Scanline should always be on (be it default, opengl or rapid)</p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AFC4F8E0-E36A-43F5-93A7-417E3AE0ACFF\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"scanline\", \"on\"</span> \n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledOddRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9F3B7AB0-9121-46B9-A996-A3B8F209E7A5\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">off</span> \n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6BC846FA-6A16-448B-AD04-E5CF666518BB\"></a></span><p class=\"table-body\">Scanline should always be off.</p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-84CDD51C-C14C-4D44-A7AB-81C4BF1407D0\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"scanline\", \"off\"</span> \n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledEvenRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BE7A9D27-42B7-4F62-B465-EF4D132EFEAE\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"opengl\"</span> \n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-901D0A6A-6BCF-4019-9E0A-76B5D10B529E\"></a></span><p class=\"table-body\">Scanline should use OpenGL acceleration.</p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-743BDEAF-FD99-46B3-A12F-356CAB125A4E\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"scanline\", \"opengl\"</span> \n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledOddRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CC20AEF4-285B-4E05-B18F-9693A3EC7B53\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"rapid\"</span> \n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0A4C14D4-440C-4652-ABA8-C35F6B0218EA\"></a></span><p class=\"table-body\">Always render using rapid motion blur.</p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-748147E6-CD5E-4FB2-B272-6BBBF435A6E8\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"scanline\", \"rapid\"</span> \n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledEvenRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-29F3CE40-6E7F-4E9C-BEA3-CC4501F3AA13\"></a></span><p class=\"table-body\"> <em class=\"strong\">environment trace</em> option\n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" colspan=\"2\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-501DC0A7-CFA0-4766-9877-5FB9B244B212\"></a></span><p class=\"table-body\">Controls whether raytracing is enabled for secondary rays (or, if scanline is disabled,\n\
                                 for all rays).\n\
                              </p> <span class=\"anchor_wrapper\"><a name=\"GUID-5CAD327B-1F9D-4838-A55B-AE41D03C36A9\"></a></span><p class=\"table-body\">If ray tracing is off, shadows will not be rendered except for lights casting shadows\n\
                                 using shadow maps.\n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledOddRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4408E3E1-CE52-4651-8A46-7113751EE64D\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">on</span> \n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1C45261A-F679-44D3-A958-B3A1EC9E70E3\"></a></span><p class=\"table-body\">Raytracing should be enabled.</p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-42145904-3241-46CA-9143-6FFC7C80CB28\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"environment trace\", \"on\"</span> \n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledEvenRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FFCC3CFA-1782-4617-86F1-CBF572EA8D6E\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">off</span> \n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-25BB8505-CAA4-4030-A7A0-770321D8211A\"></a></span><p class=\"table-body\">Raytracing should be disabled. No secondary rays are allowed. <span class=\"code\" translate=\"no\">mi_trace_reflection</span> and <span class=\"code\" translate=\"no\">mi_trace_refraction</span> will always return miFALSE.\n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4D16976B-A056-46AB-BAEB-D35BDF56EF24\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"environment trace\", \"off\"</span> \n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledOddRow\">\n\
                           <td class=\"table-body\" colspan=\"3\"> <span class=\"anchor_wrapper\"><a name=\"GUID-035A0E1C-823D-46F7-A5F0-AFDA25660405\"></a></span><p class=\"table-body\"> shadow option</p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledEvenRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-659ED006-44E9-44FC-958D-BF0F8A4028AB\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">on</span> \n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FA94FA43-0FA3-430F-B1DD-2383C3C32579\"></a></span><p class=\"table-body\">Shadows can be on for the scene. Any type of shadow mode is allowed.</p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-83C93327-9C5B-4E35-8CFE-5F2FA7721A7C\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"<a href=\"javascript:void(0)\" data=\"shadow\" class=\"a_multireflink\">shadow</a>\", \"on\"</span> \n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledOddRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3ACFE5F0-877D-4E2E-A96B-8388F2F4853A\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">off</span> \n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B83381A0-E1B2-46DE-A063-E7783FC6BC87\"></a></span><p class=\"table-body\">Shadows disabled for the scene.</p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FC73EB37-8537-4D41-BB72-16D0D57E0234\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"<a href=\"javascript:void(0)\" data=\"shadow\" class=\"a_multireflink\">shadow</a>\", \"off\"</span> \n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledEvenRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0EF366DB-C797-4E4A-BEF7-0CFDEF0910AB\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"sort\"</span> \n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-572596AA-74AA-4A65-A384-4CC8242B6F69\"></a></span><p class=\"table-body\">Shadow calculations have to be either in sorted or segmented mode.</p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CA3EECA3-2208-4D0A-A3A2-21A3BBA59B98\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"<a href=\"javascript:void(0)\" data=\"shadow\" class=\"a_multireflink\">shadow</a>\", \"sort\"</span> \n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledOddRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B4D9B196-9BE5-4999-B4E9-108B3A21C257\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"segment\"</span> \n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E76A838E-280D-40D9-ACBA-D3E55EFF5DED\"></a></span><p class=\"table-body\">Shadows can only be segmented.</p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E89C1688-6B15-4246-97D4-6160F5BD615C\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"<a href=\"javascript:void(0)\" data=\"shadow\" class=\"a_multireflink\">shadow</a>\", \"segment\"</span> \n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledEvenRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FDC5299F-8A91-40DB-9E9A-1AD2A627A522\"></a></span><p class=\"table-body\"> <em class=\"strong\">face</em> option\n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" colspan=\"2\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-60806C3B-755D-49A0-98A0-CE01D5B4132A\"></a></span><p class=\"table-body\">A triangle is considered frontfacing if its normal points to the direction of the\n\
                                 ray.\n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledOddRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BE56E584-4E2E-4201-B6DB-B42A54BA5384\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"both\"</span> \n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-54E2731E-7284-4F85-921C-9C26E1E1CCF8\"></a></span><p class=\"table-body\">Both backfacing and frontfacing triangles will be rendered. This is recommended if\n\
                                 the shader performs volumetric effects on objects, since the volume needs both in\n\
                                 and out points to work properly.\n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1EAE9499-81C3-40F0-824C-B51BC87FF63A\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"face\", \"both\"</span> \n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledEvenRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B3E15994-5E78-41C7-AAA4-7ADCAC83B8EC\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"front\"</span> \n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6A997D5A-8CF1-4826-800C-1618BC0D1129\"></a></span><p class=\"table-body\">Only frontfacing triangles will be rendered.</p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B3335835-08B7-4475-9174-411FCA576BA1\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"face\", \"front\"</span> \n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledOddRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-60CBBEEE-677D-4F87-BCC5-B60A2E3A895D\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"back\"</span> \n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8AA998A7-1B9F-43A6-B056-A9CA02848EDE\"></a></span><p class=\"table-body\">Only backfacing triangles will be rendered.</p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-61CC9F2C-3A93-4AF8-A217-AF2A1B8D9197\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"face\", \"back\"</span> \n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledEvenRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9FB6ED7A-4C74-4433-9CDF-690BDED25260\"></a></span><p class=\"table-body\"> <em class=\"strong\">autovolume</em> option\n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" colspan=\"2\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-41602FEA-2C55-4672-9A5D-CF52F9657A24\"></a></span><p class=\"table-body\">Autovolumes are an extension to volume rendering, where mental ray will assist where\n\
                                 multiple volume objects overlap. They\'re slightly more expensive to compute but will\n\
                                 allow, if the shader supports autovolume cooperation, overlapping volume effects.\n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledOddRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B35B5A65-1415-4AAB-9AAD-BC7DBBC1740D\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">on</span> \n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-370BA155-2896-41D5-8918-93C21025DAFF\"></a></span><p class=\"table-body\">mental ray will return a list of volumes the shader is to be called for, if necessary.\n\
                                 Use the functions <span class=\"code\" translate=\"no\">mi_volume_num_shaders, mi_volume_cur_shader, mi_volume_tags</span> and <span class=\"code\" translate=\"no\">mi_volume_instances</span> to work with the autovolume algorithm.\n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B0C99D6C-2BE4-4B6E-A0B3-EEFFA9A0D1F1\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"autovolume\", \"on\"</span> \n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledEvenRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-61C722DB-2139-414F-ABD2-7193168C63C6\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">off</span> \n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B6E8836F-143C-412E-B013-E9CB646421F6\"></a></span><p class=\"table-body\">mental ray will use the old method of dealing with volumes, where each volume effect\n\
                                 is called in turn. This may lead to rendering artifacts if volume objects overlap.\n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D81ABBF2-B2D2-427A-B0AD-8950A5369915\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"autovolume\", \"off\"</span> \n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledOddRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6A10B425-6BA7-4530-A845-3407427CB7F4\"></a></span><p class=\"table-body\">\"<em class=\"strong\">framebuffers</em>\" option\n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-01AD6FC5-E71B-4F00-B1B1-198D3B4D85E7\"></a></span><p class=\"table-body\">A framebuffer requirement specification. This option is used for output shaders to\n\
                                 determine what types of framebuffers it will need to compute its effects. See section\n\
                                 1.28 of the mental ray user guide for further information.\n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-59AEC612-6141-4D81-BCB0-9886EA5795C6\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"framebuffers\", \"rgba_fp,-tag\"</span> \n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledEvenRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9536EEC0-9C29-498B-9AB7-073021066A57\"></a></span><p class=\"table-body\">\"<em class=\"strong\">pass channel</em>\" option\n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-00EEB6FF-4EBF-42F3-AB64-0C78317EA1A3\"></a></span><p class=\"table-body\">A comma-separated list of pass channels. Each pass channel can optionally specify\n\
                                 an image type in brackets. For example, <span class=\"code\" translate=\"no\">\"Normal Buffer(normal)\"</span> adds a pass channel named \"Normal Buffer\" with a normal image type, which maps to\n\
                                 the mental ray <span class=\"code\" translate=\"no\">miIMG_TYPE_N</span> image type.\n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BA294B02-900E-4D93-A05A-9F7D4D6B4EF2\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"pass channel\", \"Ambient,Diffuse,Specular,Irradiance,Reflection,Refraction\"</span> \n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledOddRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-40A2381F-ECCE-463A-9463-DDA5C73E7187\"></a></span><p class=\"table-body\">\"<span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"version\" class=\"a_multireflink\">version</a></span>\" option\n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-647BA442-2412-4169-8574-1C6796EF5C90\"></a></span><p class=\"table-body\">This option indicates the version of the shader as an integer. The value should correspond\n\
                                 to the return value of the <span class=\"code\" translate=\"no\">_version</span> shader callback.\n\
                              </p> \n\
                              <div><span class=\"anchor_wrapper\"><a name=\"GUID-68DDA95D-EBE6-4B4D-8F15-3D6AD0650B03\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-5660A6B0-9425-44CA-B339-ED808AEA997C\"></a></span>If this option is omitted, Softimage assumes the shader version is 1 by default.\n\
                                    </p> \n\
                                 </div>\n\
                              </div> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BA9730FC-2E11-435F-85C8-96B96E62B5E7\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"<a href=\"javascript:void(0)\" data=\"version\" class=\"a_multireflink\">version</a>\", \"1\"</span> \n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledEvenRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C302F986-9A44-4C7D-8645-C1C09B496F2F\"></a></span><p class=\"table-body\">\"<em class=\"strong\">derivative1</em>\" option\n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" colspan=\"2\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-901E16E0-2B50-477B-A79D-C381775FE094\"></a></span><p class=\"table-body\">Whether or not mental ray should compute the first derivative of a surface for each\n\
                                 intersection point (gradient). The <span class=\"code\" translate=\"no\">miState::deriv</span> array will hold the derivative values at offset <span class=\"code\" translate=\"no\">0</span> and <span class=\"code\" translate=\"no\">1</span>.\n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledOddRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1C249B9A-FE25-4486-B604-310026DC1C17\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">on</span> \n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F33E4BFC-920C-4004-BE4B-C698B0B5563A\"></a></span><p class=\"table-body\">On to compute first derivative</p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C9759E51-0F46-4D04-844E-EA0E3E9747B1\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"derivative1\", \"on\"</span> \n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledEvenRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-78B37B0B-E6EB-4D2D-B75B-159422FE5C01\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">off</span> \n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-285536F8-CDEE-458A-BAE9-E307728DFED0\"></a></span><p class=\"table-body\">Do not compute first derivative</p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BC73108C-1323-43C5-A154-FC5AAA7E7905\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"derivative1\", \"off\"</span> \n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledOddRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-635A7500-FD94-47CD-8902-1BC87D698203\"></a></span><p class=\"table-body\">\"<em class=\"strong\">derivative2</em>\" option\n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" colspan=\"2\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1D2F750F-FC94-4B14-A972-8A4AF6B96333\"></a></span><p class=\"table-body\">Whether or not mental ray should compute the second derivative of a surface for each\n\
                                 intersection point (curvature). The <span class=\"code\" translate=\"no\">miState::deriv</span> array will hold the derivative values at offset <span class=\"code\" translate=\"no\">2</span> to <span class=\"code\" translate=\"no\">3</span>.\n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledEvenRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-38AB62C6-7A42-4F31-9706-F193119707E7\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">on</span> \n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-708E60F1-4BA8-4275-B546-D1350667F46B\"></a></span><p class=\"table-body\">On to compute second derivative</p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-639BB965-ABB2-4615-9BEF-F8B785FA952F\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"derivative2\", \"on\"</span> \n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledOddRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D437402F-7EB5-4A37-BFA3-4D15D71D6A85\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">off</span> \n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-26C48759-3060-42E3-B5EA-4E175652340A\"></a></span><p class=\"table-body\">Do not compute second derivative</p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EF2509A5-2978-405C-B982-030F1AFF82B1\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">\"derivative2\", \"off\"</span> \n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                     </table>\n\
                  </div> \n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";