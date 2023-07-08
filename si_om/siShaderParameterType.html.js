var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siShaderParameterType</title>\n\
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
            <h1>siShaderParameterType</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siShaderParameterType</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>These represent the shader parameter data types for instantated shaders. \n\
<br /><br />\n\
Note: For shader parameter definitions, the <a href=\"#!/url=./si_om/siShaderParameterDataType.html\">siShaderParameterDataType</a> values are used instead.</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>siShaderParameterType.siUnknownParameterType                                // 0\n\
siShaderParameterType.siArrayParameterType                                  // 25\n\
siShaderParameterType.siBooleanParameterType                                // 1\n\
siShaderParameterType.siColorParameterType                                  // 4\n\
siShaderParameterType.siColor3ParameterType                                 // 29\n\
siShaderParameterType.siCustomParameterType                                 // 28\n\
siShaderParameterType.siDataParameterType                                   // 14\n\
siShaderParameterType.siGradientParameterType                               // 26\n\
siShaderParameterType.siIntegerParameterType                                // 2\n\
siShaderParameterType.siLensParameterType                                   // 10\n\
siShaderParameterType.siLightParameterType                                  // 11\n\
siShaderParameterType.siLightmapParameterType                               // 20\n\
siShaderParameterType.siMaterialParameterType                               // 12\n\
siShaderParameterType.siMatrixParameterType                                 // 15\n\
siShaderParameterType.siMatrix3ParameterType                                // 24\n\
siShaderParameterType.siModelParameterType                                  // 13\n\
siShaderParameterType.siProfileCurveParameterType                           // 21\n\
siShaderParameterType.siQuaternionParameterType                             // 27\n\
siShaderParameterType.siRealTimeParameterType                               // 16\n\
siShaderParameterType.siReferenceParameterType                              // 17\n\
siShaderParameterType.siScalarParameterType                                 // 3\n\
siShaderParameterType.siShaderReferenceParameterType                        // 18\n\
siShaderParameterType.siStringParameterType                                 // 8\n\
siShaderParameterType.siStructParameterType                                 // 19\n\
siShaderParameterType.siTextureParameterType                                // 7\n\
siShaderParameterType.siTextureSpaceParameterType                           // 6\n\
siShaderParameterType.siVectorParameterType                                 // 5\n\
siShaderParameterType.siVector2ParameterType                                // 22\n\
siShaderParameterType.siVector4ParameterType                                // 23</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUnknownParameterType\"> </a>siUnknownParameterType		</td>\n\
		<td class=\"example\">0		</td>\n\
		<td>\n\
Unknown parameter type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siArrayParameterType\"> </a>siArrayParameterType		</td>\n\
		<td class=\"example\">25		</td>\n\
		<td>\n\
Array shader parameter type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siBooleanParameterType\"> </a>siBooleanParameterType		</td>\n\
		<td class=\"example\">1		</td>\n\
		<td>\n\
Boolean shader parameter type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siColorParameterType\"> </a>siColorParameterType		</td>\n\
		<td class=\"example\">4		</td>\n\
		<td>\n\
Color RGBA shader parameter type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siColor3ParameterType\"> </a>siColor3ParameterType		</td>\n\
		<td class=\"example\">29		</td>\n\
		<td>\n\
Color RGB shader parameter type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCustomParameterType\"> </a>siCustomParameterType		</td>\n\
		<td class=\"example\">28		</td>\n\
		<td>\n\
Custom shader parameter type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDataParameterType\"> </a>siDataParameterType		</td>\n\
		<td class=\"example\">14		</td>\n\
		<td>\n\
Data shader parameter type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGradientParameterType\"> </a>siGradientParameterType		</td>\n\
		<td class=\"example\">26		</td>\n\
		<td>\n\
Gradient shader parameter type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siIntegerParameterType\"> </a>siIntegerParameterType		</td>\n\
		<td class=\"example\">2		</td>\n\
		<td>\n\
Integer shader parameter type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLensParameterType\"> </a>siLensParameterType		</td>\n\
		<td class=\"example\">10		</td>\n\
		<td>\n\
Lens shader parameter type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLightParameterType\"> </a>siLightParameterType		</td>\n\
		<td class=\"example\">11		</td>\n\
		<td>\n\
Light shader parameter type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLightmapParameterType\"> </a>siLightmapParameterType		</td>\n\
		<td class=\"example\">20		</td>\n\
		<td>\n\
Lightmap shader parameter type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMaterialParameterType\"> </a>siMaterialParameterType		</td>\n\
		<td class=\"example\">12		</td>\n\
		<td>\n\
Material shader parameter type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMatrixParameterType\"> </a>siMatrixParameterType		</td>\n\
		<td class=\"example\">15		</td>\n\
		<td>\n\
Transform matrix 4x4 shader parameter type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMatrix3ParameterType\"> </a>siMatrix3ParameterType		</td>\n\
		<td class=\"example\">24		</td>\n\
		<td>\n\
Transform matrix 3x3 shader parameter type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siModelParameterType\"> </a>siModelParameterType		</td>\n\
		<td class=\"example\">13		</td>\n\
		<td>\n\
Model parameter type, maps shader output type that can write to geometry shader.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siProfileCurveParameterType\"> </a>siProfileCurveParameterType		</td>\n\
		<td class=\"example\">21		</td>\n\
		<td>\n\
Profile curve parameter type.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siQuaternionParameterType\"> </a>siQuaternionParameterType		</td>\n\
		<td class=\"example\">27		</td>\n\
		<td>\n\
Quaterninon shader parameter type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRealTimeParameterType\"> </a>siRealTimeParameterType		</td>\n\
		<td class=\"example\">16		</td>\n\
		<td>\n\
Realtime shader parameter type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siReferenceParameterType\"> </a>siReferenceParameterType		</td>\n\
		<td class=\"example\">17		</td>\n\
		<td>\n\
Reference shader parameter type, input type only.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siScalarParameterType\"> </a>siScalarParameterType		</td>\n\
		<td class=\"example\">3		</td>\n\
		<td>\n\
Scalar shader parameter type; <a href=\"#!/url=./files/Float.htm\">Float</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderReferenceParameterType\"> </a>siShaderReferenceParameterType		</td>\n\
		<td class=\"example\">18		</td>\n\
		<td>\n\
Shader reference shader parameter type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siStringParameterType\"> </a>siStringParameterType		</td>\n\
		<td class=\"example\">8		</td>\n\
		<td>\n\
String shader parameter type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siStructParameterType\"> </a>siStructParameterType		</td>\n\
		<td class=\"example\">19		</td>\n\
		<td>\n\
Struct shader parameter type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTextureParameterType\"> </a>siTextureParameterType		</td>\n\
		<td class=\"example\">7		</td>\n\
		<td>\n\
Texture shader parameter type; normally a <a href=\"#!/url=./si_om/ImageClip.html\">ImageClip</a> object (in the object model) or ImageClip2 class (in the C++ API).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTextureSpaceParameterType\"> </a>siTextureSpaceParameterType		</td>\n\
		<td class=\"example\">6		</td>\n\
		<td>\n\
Texturespace shader parameter type; ; such as a vertexcolor, UV texture, weightmap <a href=\"#!/url=./si_om/ClusterProperty.html\">ClusterProperty</a> object or a texture map <a href=\"#!/url=./si_om/Property.html\">Property</a>.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siVectorParameterType\"> </a>siVectorParameterType		</td>\n\
		<td class=\"example\">5		</td>\n\
		<td>\n\
Vector3d shader parameter type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siVector2ParameterType\"> </a>siVector2ParameterType		</td>\n\
		<td class=\"example\">22		</td>\n\
		<td>\n\
Vector2d shader parameter type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siVector4ParameterType\"> </a>siVector4ParameterType		</td>\n\
		<td class=\"example\">23		</td>\n\
		<td>\n\
Vector4d shader parameter type		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_om/Camera.GetShaderInputType.html\">Camera.GetShaderInputType</a> <a href=\"#!/url=./si_om/Light.GetShaderInputType.html\">Light.GetShaderInputType</a> <a href=\"#!/url=./si_om/Material.GetShaderInputType.html\">Material.GetShaderInputType</a> <a href=\"#!/url=./si_om/Shader.GetShaderInputType.html\">Shader.GetShaderInputType</a> <a href=\"#!/url=./si_om/Shader.OutputType.html\">Shader.OutputType</a> <a href=\"#!/url=./si_cpp/classXSI_1_1Camera.html#GetShaderInputType\">Camera::GetShaderInputType</a> <a href=\"#!/url=./si_cpp/classXSI_1_1Light.html#GetShaderInputType\">Light::GetShaderInputType</a> <a href=\"#!/url=./si_cpp/classXSI_1_1Material.html#GetShaderInputType\">Material::GetShaderInputType</a> <a href=\"#!/url=./si_cpp/classXSI_1_1Shader.html#GetOutputType2\">Shader::GetOutputType2</a> <a href=\"#!/url=./si_cpp/classXSI_1_1Shader.html#GetShaderInputType\">Shader::GetShaderInputType</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";