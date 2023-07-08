var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siShaderParameterAttribute</title>\n\
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
            <h1>siShaderParameterAttribute</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siShaderParameterAttribute</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v9.0 (2011)</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>Sets an attribute on the shader parameter definition. For example, to set a filter on a shader parameter\n\
definition of type reference, use siReferenceFilterAttribute as the attribute name and one of the \n\
<a href=\"#!/url=./si_om/siShaderReferenceFilterType.html\">siShaderReferenceFilterType</a> values when calling the SetAttribute method. The filter \n\
restricts which items the user can select with the widget.</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>StringModule.siReferenceFilterAttribute                                     // ReferenceFilter\n\
StringModule.siPropertyFilterAttribute                                      // PropertyFilter\n\
StringModule.siCustomTypeNameAttribute                                      // CustomTypeName\n\
StringModule.siShaderFamilyAttribute                                        // ShaderFamily\n\
StringModule.siDefaultConnectionAttribute                                   // DefaultConnection\n\
StringModule.siWritableImageAttribute                                       // WritableImage\n\
StringModule.siWritableImageTypeAttribute                                   // WritableImageType\n\
StringModule.siRenderTreeNodeColorRAttribute                                // RenderTreeNodeColorR\n\
StringModule.siRenderTreeNodeColorGAttribute                                // RenderTreeNodeColorG\n\
StringModule.siRenderTreeNodeColorBAttribute                                // RenderTreeNodeColorB\n\
StringModule.siUseRenderTreeLayoutPortDisplayNamesAttribute                 // UseRenderTreeLayoutPortDisplayNames\n\
StringModule.siRecompileMetaSLOnValueChange                                 // RecompileMetaSLOnValueChange\n\
StringModule.siCAVTangentsAttribute                                         // Tangents\n\
StringModule.siCAVBinormalsAttribute                                        // Binormals</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siReferenceFilterAttribute\"> </a>siReferenceFilterAttribute		</td>\n\
		<td class=\"example\">ReferenceFilter		</td>\n\
		<td>\n\
Type of filter for a shader\'s reference \n\
		parameter type. Set one of the <a href=\"#!/url=./si_om/siShaderReferenceFilterType.html\">siShaderReferenceFilterType</a> enum values.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPropertyFilterAttribute\"> </a>siPropertyFilterAttribute		</td>\n\
		<td class=\"example\">PropertyFilter		</td>\n\
		<td>\n\
Type of filter for a shader\'s property \n\
		parameter type. Set one of the <a href=\"#!/url=./si_om/siShaderPropertyFilterType.html\">siShaderPropertyFilterType</a> enum values.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCustomTypeNameAttribute\"> </a>siCustomTypeNameAttribute		</td>\n\
		<td class=\"example\">CustomTypeName		</td>\n\
		<td>\n\
Type of filter for a shader\'s custom type. \n\
		Set one of the <a href=\"#!/url=./si_om/siShaderCustomDataType.html\">siShaderCustomDataType</a> enum values.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderFamilyAttribute\"> </a>siShaderFamilyAttribute		</td>\n\
		<td class=\"example\">ShaderFamily		</td>\n\
		<td>\n\
Type of filter for a shader\'s family.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDefaultConnectionAttribute\"> </a>siDefaultConnectionAttribute		</td>\n\
		<td class=\"example\">DefaultConnection		</td>\n\
		<td>\n\
Default connection to make when \n\
		a shader is dropped on a port or an existing connection. Valid for input and outputs.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWritableImageAttribute\"> </a>siWritableImageAttribute		</td>\n\
		<td class=\"example\">WritebleImage		</td>\n\
		<td>\n\
Type of filter for a writable image.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWritableImageTypeAttribute\"> </a>siWritableImageTypeAttribute		</td>\n\
		<td class=\"example\">WritableImageType		</td>\n\
		<td>\n\
Type of filter for a writable image type.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRenderTreeNodeColorRAttribute\"> </a>siRenderTreeNodeColorRAttribute		</td>\n\
		<td class=\"example\">RenderTreeNodeColorR		</td>\n\
		<td>\n\
Type of filter to match the Red color for a RenderTree node.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRenderTreeNodeColorGAttribute\"> </a>siRenderTreeNodeColorGAttribute		</td>\n\
		<td class=\"example\">RenderTreeNodeColorG		</td>\n\
		<td>\n\
Type of filter to match the Green color for a RenderTree node.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRenderTreeNodeColorBAttribute\"> </a>siRenderTreeNodeColorBAttribute		</td>\n\
		<td class=\"example\">RenderTreeNodeColorB		</td>\n\
		<td>\n\
Type of filter to match the Blue color for a RenderTree node.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUseRenderTreeLayoutPortDisplayNamesAttribute\"> </a>siUseRenderTreeLayoutPortDisplayNamesAttribute		</td>\n\
		<td class=\"example\">UseRenderTreeLayoutPortDisplayNames		</td>\n\
		<td>\n\
Controls which display name to use in the Render Tree layout when no layout is given. By default, the ports will use the script name. Set this attribute to true to use the display name from the PPG.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRecompileMetaSLOnValueChange\"> </a>siRecompileMetaSLOnValueChange		</td>\n\
		<td class=\"example\">RecompileMetaSLOnValueChange		</td>\n\
		<td>\n\
When this attribute is set to true and the parameter value changes, the MetaSL viewport shader will be recompiled. This is needed when the number of light casting shadows changes or when switching light types.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCAVTangentsAttribute\"> </a>siCAVTangentsAttribute		</td>\n\
		<td class=\"example\">Tangents		</td>\n\
		<td>\n\
When this attribute is set to true, tangent data will be generated for this property for the MetaSL viewport shader. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCAVBinormalsAttribute\"> </a>siCAVBinormalsAttribute		</td>\n\
		<td class=\"example\">Binormals		</td>\n\
		<td>\n\
When this attribute is set to true, binormal data will be generated for this property for the MetaSL viewport shader. 		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_om/ShaderParamDefOptions.SetAttribute.html\">ShaderParamDefOptions.SetAttribute</a> <a href=\"#!/url=./si_om/MetaShaderRendererDef.RendererOptions.html\">MetaShaderRendererDef.RendererOptions</a> <a href=\"#!/url=./si_cpp/classXSI_1_1ShaderParamDefOptions.html#SetAttribute\">ShaderParamDefOptions::SetAttribute</a> <a href=\"#!/url=./files/cus_shaders_ParamsControls.htm\">Refining UI Controls for Parameter Definitions</a></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/siShaderReferenceFilterType.html\">siShaderReferenceFilterType</a> <a href=\"#!/url=./si_om/siShaderPropertyFilterType.html\">siShaderPropertyFilterType</a> <a href=\"#!/url=./si_om/siShaderCustomDataType.html\">siShaderCustomDataType</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";