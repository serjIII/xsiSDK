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
      <meta name=\"topicid\" content=\"GUID-9A557A68-0BB6-4D06-9D09-759855245943\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>JScript Example: No UI for Parameter Definition</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"color\", \"si_cpp/group__RenderMapDefine.html#ga9b982a36d73688fd43fe5f3539824d21\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-9A557A68-0BB6-4D06-9D09-759855245943\"></a></span><div class=\"head\">\n\
            <h1>JScript Example: No UI for Parameter Definition</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-A1AE0CA7-3D38-48FE-B3A7-892A234EC5DC\"></a></span>This example produces the following UI:\n\
            </p><img src=\"../images/GUID-1A155940-0ACD-4211-BF0A-11D20F01FD15-low.png\" /><div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
function XSILoadPlugin( in_reg )\n\
{\n\
	in_reg.Author = \"SDK Documentation\";\n\
	in_reg.Name = \"LayoutTests\";\n\
	in_reg.Major = 1;\n\
	in_reg.Minor = 0;\n\
\n\
	in_reg.RegisterShader(\"NoLayoutEx\", 1, 0);\n\
	return true;\n\
}\n\
function LayoutTests_NoLayoutEx_1_0_DefineInfo( in_ctxt )\n\
{\n\
	in_ctxt.SetAttribute(\"Category\", \"Test Shaders/Layout@700\");\n\
	return true;\n\
}\n\
\n\
function LayoutTests_NoLayoutEx_1_0_Define( in_ctxt ) \n\
{\n\
	var oShaderDef = in_ctxt.GetAttribute(\"Definition\");\n\
	oShaderDef.AddShaderFamily(siShaderFamilyTexture);\n\
	\n\
	// Add 2 input parameters as connectable ports\n\
	var oInputParamsContainer = oShaderDef.InputParamDefs;\n\
	var oPDefOptions = XSIFactory.CreateShaderParamDefOptions();\n\
	oPDefOptions.SetTexturable(true);\n\
	oPDefOptions.SetInspectable(false);\n\
	oInputParamsContainer.AddParamDef(\"port1\", siShaderDataTypeColor4, oPDefOptions);\n\
	oInputParamsContainer.AddParamDef(\"port2\", siShaderDataTypeInteger, oPDefOptions);\n\
\n\
	// Add 2 input parameters on property page\n\
	oPDefOptions.SetTexturable(false);\n\
	oPDefOptions.SetInspectable(true);\n\
	oInputParamsContainer.AddParamDef(\"param1\", siShaderDataTypeString, oPDefOptions);\n\
	oInputParamsContainer.AddParamDef(\"param2\", siShaderDataTypeBoolean, oPDefOptions);\n\
\n\
	// Add 1 input parameters that won\'t appear in UI\n\
	oPDefOptions.SetInspectable(false);\n\
	oInputParamsContainer.AddParamDef(\"uiless\", siShaderDataTypeScalar, oPDefOptions);\n\
	// Add the output <a href=\"javascript:void(0)\" data=\"color\" class=\"a_multireflink\">color</a>\n\
	var oOutputParamsContainer = oShaderDef.OutputParamDefs;\n\
	oOutputParamsContainer.AddParamDef(\"out\", siShaderDataTypeColor4, oPDefOptions);\n\
	\n\
	// Add renderer info\n\
	\n\
	return true;\n\
}</pre></div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";