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
      <meta name=\"topicid\" content=\"GUID-DE03A120-719D-4BA8-B5EF-E10018C5B1FA\" />\n\
      <meta name=\"indexterm\" content=\"shader definitions: overview\" />\n\
      <meta name=\"indexterm\" content=\"custom shaders: overview\" />\n\
      <meta name=\"indexterm\" content=\"dynamic shaders: about\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <meta name=\"keywords\" content=\"<plug-in_name&gt;, <parser_name&gt;\" />\n\
      <meta name=\"keyword\" content=\"<plug-in_name&gt;\" />\n\
      <meta name=\"keyword\" content=\"<parser_name&gt;\" />\n\
      <title>Understanding Softimage Custom Shaders</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-DE03A120-719D-4BA8-B5EF-E10018C5B1FA\"></a></span><div class=\"head\">\n\
            <h1>Understanding Softimage Custom Shaders</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-249035AF-CEB6-438C-BB0F-2217EAD26774\"></a></span>In Softimage, integrating shaders involves registering a set of parameters required\n\
               by the shader code and hooking in the renderer (whether that is mental ray or a third-party\n\
               renderer). In the past this was done by creating SPDL files, which required generating\n\
               GUIDs for each property set and parameter, registering each SPDL file in Softimage,\n\
               and then generating a preset from that SPDL.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-9FB134AD-A29A-4B7E-9175-019C407C8837\"></a></span>As of v9.0 (2011), Softimage now supports a lightweight mechanism for registering\n\
               the parameters and associating the renderer(s): the <em class=\"mild\">shader definition</em>. Shader definitions tell Softimage how to build a shader node in the render tree\n\
               by defining a set of parameters and associating one or more renderers with options\n\
               and attributes. These definitions now take the place of the old presets, allowing\n\
               you to integrate SPDL-less, or <em class=\"mild\">dynamic</em>, custom shaders.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSEE80B7B3C7C7E74A9E14EA8F7E4C08A5-0004\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-85C64C6C-5684-4F0A-94A6-8CC9E18D5BA9\"></a></span>How Shader Definitions Work in Softimage\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-0B868ACB-2ECA-4A20-8383-D5550C7E9537\"></a></span>When users build a render tree in the UI, they drag presets from the preset manager\n\
                  onto the render tree workspace. When a shader definition is created, it tells Softimage\n\
                  what <a href=\"#!/url=./si_om/ShaderDef.DisplayName.html\">ShaderDef.DisplayName</a> or ShaderDef::GetDisplayName or ShaderDef::PutDisplayName in the preset manager and\n\
                  where (<a href=\"#!/url=./si_om/ShaderDef.Category.html\">ShaderDef.Category</a> or ShaderDef::GetCategory or ShaderDef::PutCategory) to display it. Then, when the\n\
                  shader is actually instantiated, Softimage builds the shader node with its input and\n\
                  output parameters, including data type, restrictions on connections, default values,\n\
                  etc. This makes Softimage shaders extremely dynamic, since they are built in a just-in-time\n\
                  manner only when instantiated.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-C10D8588-BC95-427E-9BCB-2DF5D4D576BE\"></a></span>There are several ways to create shader definitions:\n\
               </p> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-5A4F1D8A-7CF7-4856-AC27-846939AF5074\"></a></span> <em class=\"strong\">Write a self-installing plug-in shader definition</em>.\n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-FF78BA4F-A1D6-4BDE-9A69-25B453A4F2A9\"></a></span>Shader definitions built this way are considered to be <em class=\"mild\">plug-in based</em> definitions (<a href=\"#!/url=./si_om/ShaderDef.PluginBased.html\">ShaderDef.PluginBased</a> or ShaderDef::GetPluginBased returns true). This is the most typical method of creating\n\
                        shader definitions.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-9198FF56-BEBE-42A7-8A29-8CDBC1C20C59\"></a></span> <em class=\"strong\">Provide a text-based file that a registered shader parser can use to build shader\n\
                           definition from</em>.\n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-12E94EF7-9FEC-45D9-9184-C5A27919CF6D\"></a></span>A shader parser allows you to create shader definitions in batch by defining a file\n\
                        format and writing a parser to read those files and use them to create shader definitions\n\
                        (see <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders_CreatingShaderParsers.htm\">Creating Shader Language Parser Definitions</a></span>). Softimage provides two realtime shader parsers: one for CGFX files and one for\n\
                        HLSL files. Shader definitions built by shader parsers are considered to be <em class=\"mild\">parser-based</em> (<a href=\"#!/url=./si_om/ShaderDef.ParserBased.html\">ShaderDef.ParserBased</a> or ShaderDef::GetParserBased returns true).\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-4A1EA251-4645-42A1-B707-C5303B81A170\"></a></span> <em class=\"strong\">Create a shader definition on the fly (not persisted)</em>.\n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-73C7E0C9-DF77-44F1-B7F2-A732214FA55E\"></a></span>You can do this by using the <a href=\"#!/url=./si_om/XSIFactory.CreateShaderDef.html\">XSIFactory.CreateShaderDef</a> or Factory::CreateShaderDef method. The shader definition won\'t be persisted. Shader\n\
                        definitions built on-the-fly are not really parser-based nor plug-in-based, but <a href=\"#!/url=./si_om/ShaderDef.ParserBased.html\">ShaderDef.ParserBased</a> or ShaderDef::GetParserBased still returns true. In addition, the <a href=\"#!/url=./si_om/ShaderDef.DefinitionPath.html\">ShaderDef.DefinitionPath</a> or ShaderDef::GetDefinitionPath is empty.\n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
         </div><span class=\"noindex\">\n\
            <div class=\"topic-list\">\n\
               <h4 class=\"related\">Topics in this section</h4>\n\
               <ul class=\"jumplist\">\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_shaders_ProgID.htm\">Instantiating Shader Definitions and the ProgID</a></li>\n\
               </ul>\n\
            </div></span><div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";