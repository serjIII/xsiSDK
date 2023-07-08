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
      <meta name=\"topicid\" content=\"GUID-7346C820-B921-40DF-AD86-949C4CECB637\" />\n\
      <meta name=\"indexterm\" content=\"parser plug-ins for shader languages\" />\n\
      <meta name=\"indexterm\" content=\"custom shaders: plug-ins: parsers\" />\n\
      <meta name=\"indexterm\" content=\"shader parsers: custom plug-ins\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Creating Shader Language Parser Definitions</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-7346C820-B921-40DF-AD86-949C4CECB637\"></a></span><div class=\"head\">\n\
            <h1>Creating Shader Language Parser Definitions</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-85677629-47AB-4B77-9D80-AE51F14DFF68\"></a></span>Custom shader language parsers allow you to provide instructions to Softimage on how\n\
               to build shader definitions for a specific file format. Typically, this can be used\n\
               to import established file formats, such as .cgfx, .mi, .sl, etc., but you can also\n\
               use it to develop a custom lightweight file format that can batch-create shader definitions\n\
               for any renderer. \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-BF706696-B170-4C94-9E05-EAB50617EAB9\"></a></span>In the <a href=\"#!/url=./si_cmds/cb_XSILoadPlugin.html\">XSILoadPlugin</a> callback, the parser ClassName is registered using the <a href=\"#!/url=./si_om/PluginRegistrar.RegisterShaderLanguageParser.html\">PluginRegistrar.RegisterShaderLanguageParser</a> or PluginRegistrar::RegisterShaderLanguageParser method. The parser ClassName together\n\
               with the shader definition\'s ClassName, Major and Minor information (set up in the\n\
               <a href=\"#!/url=./si_cmds/cb_ShaderParser_ParseInfo.html\">ParseInfo</a> callback) define the <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders_ProgID.htm\">ProgID</a></span>, which uniquely identifies the shader definition in Softimage. See <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders_ProgID.htm\">Instantiating Shader Definitions and the ProgID</a></span> for details. \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-E50178F4-F06D-4D9E-A0B7-A514085E50D7\"></a></span>When the shader parser plug-in is loaded in Softimage, the <a href=\"#!/url=./si_cmds/cb_ShaderParser_QueryParserSettings.html\">QueryParserSettings</a> callback tells Softimage which folder locations to look in by setting the <span class=\"code\" translate=\"no\">Folders</span> attribute, and what file extensions to look for by setting the <span class=\"code\" translate=\"no\">FileTypes</span> attribute. Based on these settings, Softimage will begin parsing each file in the\n\
               specified location(s) that have the specified file extension(s). \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-1E45563B-EBBD-4917-975E-C926754912CB\"></a></span>Each time a file is parsed, the <a href=\"#!/url=./si_cmds/cb_ShaderParser_ParseInfo.html\">ParseInfo</a> callback is fired. The ParseInfo callback is responsible for defining the ClassName,\n\
               Major and Minor version numbers used to build the <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders_ProgID.htm\">ProgID</a></span>. It is also responsible for adding the name of the shader definition to the preset\n\
               manager. You indicate how and where the new shader definition will appear in the preset\n\
               manager by specifying the <a href=\"#!/url=./si_om/ShaderDef.DisplayName.html\">ShaderDef.DisplayName</a> or ShaderDef::PutDisplayName and the <a href=\"#!/url=./si_om/ShaderDef.Category.html\">ShaderDef.Category</a> or ShaderDef::PutCategory using <a href=\"#!/url=./si_cmds/cb_ShaderParser_ParseInfo.html\">context attributes</a>. For more information, see <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders_PresetMgr.htm\">Populating the Preset Manager</a></span>. \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F83412B9-2BCB-4F8A-B6C6-BFD3C110F9EA\"></a></span>Finally, when the shader is instantiated, the <a href=\"#!/url=./si_cmds/cb_ShaderParser_Parse.html\">Parse</a> callback is fired. The Parse callback allows access to the <a href=\"#!/url=./si_om/ShaderDef.html\">ShaderDef</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ShaderDef.html\">ShaderDef</a> object (returned from the <span class=\"code\" translate=\"no\">Definition</span><a href=\"#!/url=./si_cmds/cb_Shader_Define.html\">context attribute</a>), which allows you to: \n\
            </p><span class=\"anchor_wrapper\"><a name=\"UL_0183F323281F42ECB3A40D99B114C22A\"></a></span><ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-442D9105-7789-4883-B395-BC168B83E603\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders_Families.htm\">Assign shader families</a></span>. \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-31703A16-889C-4D4E-9075-B9718191A18C\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders-1.htm\">Define the input and output parameters</a></span>. \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-253D2119-823D-4B1F-A5AB-34D4A64CFC48\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders_Renderers.htm\">Associate the renderers</a></span>. \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-7CC6B169-10AE-4AAE-9649-16F5D7035F05\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders_Attributes.htm\">Set up any custom attributes</a></span>. \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-1ABCEF9B-E990-40FD-AB2E-F28811C74826\"></a></span>Customize the associated shaderball. \n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-84636C0D-B744-466C-A5FE-AE0E08358D05\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-4C285B8C-A583-4994-ACFE-46FF8674CDDD\"></a></span>If you want to skip right to look at some code, check out the example. \n\
                  </p> \n\
               </div>\n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";