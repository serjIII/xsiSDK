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
      <meta name=\"topicid\" content=\"GUID-02157D3F-00C2-456A-9FCB-913522435669\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>VBScript Example: Grouping Ports in the Render Tree</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"color\", \"si_cpp/group__RenderMapDefine.html#ga9b982a36d73688fd43fe5f3539824d21\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-02157D3F-00C2-456A-9FCB-913522435669\"></a></span><div class=\"head\">\n\
            <h1>VBScript Example: Grouping Ports in the Render Tree</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-12D503D8-B07D-453B-8EF5-9C02084E0515\"></a></span>This example produces the following UI:\n\
            </p><img src=\"../images/GUID-D94E441E-89C2-4478-8D9F-625829D64939-low.png\" /><div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
function XSILoadPlugin( in_reg ) \n\
	in_reg.Author = \"SDK Documentation\"\n\
	in_reg.Name = \"LayoutTests\"\n\
	in_reg.Major = 1\n\
	in_reg.Minor = 0\n\
	in_reg.RegisterShader \"RTLayoutEx\", 1, 0 			\' group 2 out of the 5 parameters in the RTLayout\n\
	\n\
	XSILoadPlugin = true\n\
end function\n\
\n\
\n\
function LayoutTests_RTLayoutEx_1_0_DefineInfo( in_ctxt )\n\
	in_ctxt.SetAttribute \"Category\", \"Test Shaders/Layout@700\"\n\
	LayoutTests_RTLayoutEx_1_0_DefineInfo = true\n\
end function\n\
\n\
\n\
function LayoutTests_RTLayoutEx_1_0_Define( in_ctxt ) \n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oShaderDef = in_ctxt.GetAttribute(\"Definition\")\n\
	oShaderDef.AddShaderFamily siShaderFamilyTexture\n\
	\n\
	\' Add 3 input parameters as connectable ports\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oInputParamsContainer = oShaderDef.InputParamDefs\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oPDefOptions = XSIFactory.CreateShaderParamDefOptions \n\
	oPDefOptions.SetTexturable true\n\
	oPDefOptions.SetInspectable false\n\
	oInputParamsContainer.AddParamDef \"port1\", siShaderDataTypeColor4, oPDefOptions\n\
	oInputParamsContainer.AddParamDef \"port2\", siShaderDataTypeInteger, oPDefOptions\n\
	oInputParamsContainer.AddParamDef \"port3\", siShaderDataTypeScalar, oPDefOptions\n\
\n\
	\' Add 2 input parameters on property page\n\
	oPDefOptions.SetTexturable false\n\
	oPDefOptions.SetInspectable true\n\
	oInputParamsContainer.AddParamDef \"param1\", siShaderDataTypeString, oPDefOptions\n\
	oInputParamsContainer.AddParamDef \"param2\", siShaderDataTypeBoolean, oPDefOptions\n\
\n\
	\' Add the output <a href=\"javascript:void(0)\" data=\"color\" class=\"a_multireflink\">color</a>\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oOutputParamsContainer = oShaderDef.OutputParamDefs\n\
	oPDefOptions.SetInspectable false\n\
	oOutputParamsContainer.AddParamDef \"out\", siShaderDataTypeColor4, oPDefOptions\n\
	\n\
	\' Fix the RTLayout\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> RTLayout = oShaderDef.RenderTreeLayout\n\
	RTLayout.AddGroup \"Solo\"\n\
		RTLayout.AddItem \"port1\"\n\
	RTLayout.EndGroup\n\
	RTLayout.AddGroup \"Duo\"\n\
		RTLayout.AddItem \"port2\"\n\
		RTLayout.AddItem \"port3\"\n\
	RTLayout.EndGroup\n\
	\n\
	\' Add renderer info\n\
	\n\
	LayoutTests_RTLayoutEx_1_0_Define = true\n\
end function</pre></div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";