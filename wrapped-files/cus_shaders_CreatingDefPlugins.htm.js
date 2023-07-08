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
      <meta name=\"topicid\" content=\"GUID-5A3A7E3E-2BCF-4E2F-A706-BF62E84AD812\" />\n\
      <meta name=\"indexterm\" content=\"shader definitions: workflow\" />\n\
      <meta name=\"indexterm\" content=\"custom shaders: workflow\" />\n\
      <meta name=\"indexterm\" content=\"dynamic shaders: workflow\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Creating Shader Definition Plug-ins</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-5A3A7E3E-2BCF-4E2F-A706-BF62E84AD812\"></a></span><div class=\"head\">\n\
            <h1>Creating Shader Definition Plug-ins</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-563FC808-713B-405F-839B-0399BCECF7E1\"></a></span>In the <a href=\"#!/url=./si_cmds/cb_XSILoadPlugin.html\">XSILoadPlugin</a> callback, the ClassName and Major and Minor version are registered using the <a href=\"#!/url=./si_om/PluginRegistrar.RegisterShader.html\">PluginRegistrar.RegisterShader</a> or PluginRegistrar::RegisterShader method. These three pieces of information, along\n\
               with the name of the plug-in itself are used to build the <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders_ProgID.htm\">ProgID</a></span>, which uniquely identifies the shader definition in Softimage. \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-AA4EF4A1-1B54-4CED-AA1F-9C81842B2ED3\"></a></span>When a shader is loaded in Softimage, the <a href=\"#!/url=./si_cmds/cb_Shader_DefineInfo.html\">DefineInfo</a> callback is fired. The DefineInfo callback is responsible for adding the name of\n\
               the shader definition to the preset manager. You can indicate how and where the new\n\
               shader definition will appear in the preset manager by specifying the <a href=\"#!/url=./si_om/ShaderDef.DisplayName.html\">ShaderDef.DisplayName</a> or ShaderDef::PutDisplayName and the <a href=\"#!/url=./si_om/ShaderDef.Category.html\">ShaderDef.Category</a> or ShaderDef::PutCategory using <a href=\"#!/url=./si_cmds/cb_Shader_DefineInfo.html\">context attributes</a>. For more information, see <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders_PresetMgr.htm\">Populating the Preset Manager</a></span>. \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-852C322B-88A3-4C44-9289-C212FAE6A886\"></a></span>Finally, when the shader is instantiated, the <a href=\"#!/url=./si_cmds/cb_Shader_Define.html\">Define</a> callback is fired. The Define callback is the real workhorse, because it allows access\n\
               to the <a href=\"#!/url=./si_om/ShaderDef.html\">ShaderDef</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ShaderDef.html\">ShaderDef</a> object (returned from the <span class=\"code\" translate=\"no\">Definition</span> <a href=\"#!/url=./si_cmds/cb_Shader_Define.html\">context attribute</a>), which allows you to: \n\
            </p><span class=\"anchor_wrapper\"><a name=\"UL_09B966FF724B4D30B060919B8E169133\"></a></span><ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-5985A674-7EE2-46B4-A6F2-4216DFB2D871\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders_Families.htm\">Assign shader families</a></span>. \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-DEF7F3D9-3566-44E8-9FF7-C0F9FA6C998B\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders-1.htm\">Define the input and output parameters</a></span>. \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-735ECD7B-CCB3-4EA9-97B8-EBEB708C1FD1\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders_Renderers.htm\">Associate the renderers</a></span>. \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-CC152DB1-CFE2-47AD-8FDD-5A7D3BB7DBE6\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders_Attributes.htm\">Set up any custom attributes</a></span>. \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-D8097BA6-22DE-4878-94A9-22185F749C4A\"></a></span>Customize the associated shaderball. \n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-D14C27DC-F87E-4E11-AEC1-97DEA0F47E6D\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-F7D5DE0F-47C9-49E1-AFCC-672D896B5645\"></a></span>To refer to a code example, see the <a href=\"#!/url=./examples/Addons/ShaderDefinitions/netview_ShaderDefs.htm\">Custom Shader</a> example in the SDK examples section. \n\
                  </p> \n\
               </div>\n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";