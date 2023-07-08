var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siShaderParameterDataType</title>\n\
   \n\
</head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style>\n\
/*  These settings override ones in the default stylesheets\n\
	used by the merged files that cause problems in combination\n\
	with the standard HTML help styles and page templates. */\n\
\n\
div, div.example, div.tip {\n\
	 margin:0;\n\
}\n\
\n\
td.example {\n\
	background: inherit;\n\
}\n\
\n\
/* This fixes a problem with nested pre blocks on an example page */\n\
pre pre {\n\
	display:block;\n\
	padding:0;\n\
	border-style:none;\n\
}\n\
</style><link rel=\"stylesheet\" href=\"si_om/css/en.css\" type=\"text/css\" /><script>$(document).ready(function() { yepnope.injectJs(\"./si_om/lib/utils.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>siShaderParameterDataType</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siShaderParameterDataType</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v9.0 (2011)</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Defines the <a href=\"#!/url=./si_om/Shader.html\">Shader</a> parameter type for a <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> object belonging to \n\
<a href=\"#!/url=./si_om/Shader.html\">Shader</a>, <a href=\"#!/url=./si_om/Material.html\">Material</a>, <a href=\"#!/url=./si_om/Light.html\">Light</a> or <a href=\"#!/url=./si_om/Camera.html\">Camera</a>.\n\
Shader parameter types only apply to parameters that support the <a href=\"#!/url=./si_om/siCapabilities.html#siTexturable\">siTexturable</a> \n\
capability. This can be tested using the <a href=\"#!/url=./si_om/Parameter.Capabilities.html\">Parameter.Capabilities</a> property. The output type of\n\
a shader can be checked using the <a href=\"#!/url=./si_om/Shader.OutputType.html\">Shader.OutputType</a> property.\n\
<br /><br />\n\
Note: Each data type, apart from <a href=\"#!/url=./si_om/siShaderParameterDataType.html#siShaderDataTypeUnknown\">siShaderDataTypeUnknown</a>, has also\n\
an equivalent string name that can be used to create shader parameter definitions using type strings, instead\n\
of this enum. Custom port types can\'t be registered using those built-in string names. The string names are\n\
shown in brackets after each type\'s description.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>siShaderParameterDataType.siShaderDataTypeUnknown                           // -1\n\
siShaderParameterDataType.siShaderDataTypeBoolean                           // 0\n\
siShaderParameterDataType.siShaderDataTypeInteger                           // 1\n\
siShaderParameterDataType.siShaderDataTypeScalar                            // 2\n\
siShaderParameterDataType.siShaderDataTypeVector2                           // 3\n\
siShaderParameterDataType.siShaderDataTypeVector3                           // 4\n\
siShaderParameterDataType.siShaderDataTypeVector4                           // 5\n\
siShaderParameterDataType.siShaderDataTypeQuaternion                        // 6\n\
siShaderParameterDataType.siShaderDataTypeMatrix33                          // 7\n\
siShaderParameterDataType.siShaderDataTypeMatrix44                          // 8\n\
siShaderParameterDataType.siShaderDataTypeColor3                            // 9\n\
siShaderParameterDataType.siShaderDataTypeColor4                            // 10\n\
siShaderParameterDataType.siShaderDataTypeString                            // 11\n\
siShaderParameterDataType.siShaderDataTypeProperty                          // 16\n\
siShaderParameterDataType.siShaderDataTypeProfileCurve                      // 17\n\
siShaderParameterDataType.siShaderDataTypeGradient                          // 18\n\
siShaderParameterDataType.siShaderDataTypeLightProfile                      // 19\n\
siShaderParameterDataType.siShaderDataTypeReference                         // 32\n\
siShaderParameterDataType.siShaderDataTypeImage                             // 33\n\
siShaderParameterDataType.siShaderDataTypeCustom                            // 48\n\
siShaderParameterDataType.siShaderDataTypeStructure                         // 64\n\
siShaderParameterDataType.siShaderDataTypeArray                             // 65</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderDataTypeArray\"> </a>siShaderDataTypeArray		</td>\n\
		<td class=\"example\">65		</td>\n\
		<td>\n\
An array container [\"array\"]		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderDataTypeBoolean\"> </a>siShaderDataTypeBoolean		</td>\n\
		<td class=\"example\">0		</td>\n\
		<td>\n\
A boolean value [\"boolean\"]		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderDataTypeColor3\"> </a>siShaderDataTypeColor3		</td>\n\
		<td class=\"example\">9		</td>\n\
		<td>\n\
A 3-scalar component color value (red, green, and blue) [\"color3\"]		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderDataTypeColor4\"> </a>siShaderDataTypeColor4		</td>\n\
		<td class=\"example\">10		</td>\n\
		<td>\n\
A 4-scalar component color value (red, green, blue, and alpha) [\"color4\"]		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderDataTypeCustom\"> </a>siShaderDataTypeCustom		</td>\n\
		<td class=\"example\">48		</td>\n\
		<td>\n\
Custom data type. Used with the <a href=\"#!/url=./si_om/siShaderCustomDataType.html\">siShaderCustomDataType</a> \n\
		shader definition attribute. [\"custom\"]		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderDataTypeGradient\"> </a>siShaderDataTypeGradient		</td>\n\
		<td class=\"example\">18		</td>\n\
		<td>\n\
A color gradient [\"gradient\"]		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderDataTypeImage\"> </a>siShaderDataTypeImage		</td>\n\
		<td class=\"example\">33		</td>\n\
		<td>\n\
An image input (texture map) [\"image\"]		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderDataTypeInteger\"> </a>siShaderDataTypeInteger		</td>\n\
		<td class=\"example\">1		</td>\n\
		<td>\n\
A signed integer value [\"integer\"]		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderDataTypeLightProfile\"> </a>siShaderDataTypeLightProfile		</td>\n\
		<td class=\"example\">19		</td>\n\
		<td>\n\
A light profile parameter [\"lightprofile\"]		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderDataTypeMatrix33\"> </a>siShaderDataTypeMatrix33		</td>\n\
		<td class=\"example\">7		</td>\n\
		<td>\n\
A 9-scalar component matrix value [\"matrix33\"]		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderDataTypeMatrix44\"> </a>siShaderDataTypeMatrix44		</td>\n\
		<td class=\"example\">8		</td>\n\
		<td>\n\
A 16-scalar component matrix value [\"matrix44\"]		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderDataTypeProfileCurve\"> </a>siShaderDataTypeProfileCurve		</td>\n\
		<td class=\"example\">17		</td>\n\
		<td>\n\
A profile curve (scalar fcurve) [\"fcurve\"].		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderDataTypeProperty\"> </a>siShaderDataTypeProperty		</td>\n\
		<td class=\"example\">16		</td>\n\
		<td>\n\
A property lookup parameter. Used with the \n\
		<a href=\"#!/url=./si_om/siShaderPropertyFilterType.html\">siShaderPropertyFilterType</a> shader definition attribute. [\"property\"]		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderDataTypeQuaternion\"> </a>siShaderDataTypeQuaternion		</td>\n\
		<td class=\"example\">6		</td>\n\
		<td>\n\
A 4-scalar component quaternion value [\"quaternion\"]		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderDataTypeReference\"> </a>siShaderDataTypeReference		</td>\n\
		<td class=\"example\">32		</td>\n\
		<td>\n\
A reference input. Used with the <a href=\"#!/url=./si_om/siShaderReferenceFilterType.html\">siShaderReferenceFilterType</a> \n\
		shader definition attribute. [\"reference\"]		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderDataTypeScalar\"> </a>siShaderDataTypeScalar		</td>\n\
		<td class=\"example\">2		</td>\n\
		<td>\n\
A scalar (floating point) value [\"scalar\"]		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderDataTypeString\"> </a>siShaderDataTypeString		</td>\n\
		<td class=\"example\">11		</td>\n\
		<td>\n\
A string value [\"string\"]		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderDataTypeStructure\"> </a>siShaderDataTypeStructure		</td>\n\
		<td class=\"example\">64		</td>\n\
		<td>\n\
A strucure container [\"structure\"]		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderDataTypeUnknown\"> </a>siShaderDataTypeUnknown		</td>\n\
		<td class=\"example\">-1		</td>\n\
		<td>\n\
Not a known type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderDataTypeVector2\"> </a>siShaderDataTypeVector2		</td>\n\
		<td class=\"example\">3		</td>\n\
		<td>\n\
A 2-scalar component vector value [\"vector2\"]		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderDataTypeVector3\"> </a>siShaderDataTypeVector3		</td>\n\
		<td class=\"example\">4		</td>\n\
		<td>\n\
A 3-scalar component vector value [\"vector3\"]		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderDataTypeVector4\"> </a>siShaderDataTypeVector4		</td>\n\
		<td class=\"example\">5		</td>\n\
		<td>\n\
A 4-scalar component vector value [\"vector4\"]		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_om/ShaderParamDef.DataType.html\">ShaderParamDef.DataType</a> <a href=\"#!/url=./si_om/ShaderParameter.DataType.html\">ShaderParameter.DataType</a> <a href=\"#!/url=./si_om/ShaderParamDefContainer.AddArrayParamDef.html\">ShaderParamDefContainer.AddArrayParamDef</a> <a href=\"#!/url=./si_om/ShaderParamDefContainer.AddParamDef.html\">ShaderParamDefContainer.AddParamDef</a> <a href=\"#!/url=./si_cpp/classXSI_1_1ShaderParamDef.html#GetDataType\">ShaderParamDef::GetDataType</a> <a href=\"#!/url=./si_cpp/classXSI_1_1ShaderParameter.html#GetDataType\">ShaderParameter::GetDataType</a> <a href=\"#!/url=./si_cpp/classXSI_1_1ShaderParamDefContainer.html#AddArrayParamDef\">ShaderParamDefContainer::AddArrayParamDef</a> <a href=\"#!/url=./si_cpp/classXSI_1_1ShaderParamDefContainer.html#AddParamDef\">ShaderParamDefContainer::AddParamDef</a></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/XSIApplication.RegisterShaderCustomParameterType.html\">XSIApplication.RegisterShaderCustomParameterType</a> <a href=\"#!/url=./si_cpp/classXSI_1_1Application.html#RegisterShaderCustomParameterType\">Application::RegisterShaderCustomParameterType</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";