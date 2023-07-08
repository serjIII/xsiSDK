var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ShaderArrayParamDef</title>\n\
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
            <h1>ShaderArrayParamDef</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ShaderArrayParamDef</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_ShaderArrayParamDef\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1ShaderArrayParamDef.html\">ShaderArrayParamDef</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\"><a href=\"#!/url=./si_om/ShaderParamDef.html\">ShaderParamDef</a></p>\n\
<p class=\"level3\">ShaderArrayParamDef</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v9.0 (2011)</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> This object represents a definition for a <a href=\"#!/url=./si_om/ShaderArrayParameter.html\">ShaderArrayParameter</a> instance. It allows you to set and \n\
get the array elements contained by this shader parameter (<a href=\"#!/url=./si_om/ShaderArrayParamDef.ItemInitialValues.html\">ShaderArrayParamDef.ItemInitialValues</a>, \n\
which returns a <a href=\"#!/url=./si_om/ValueMap.html\">ValueMap</a> object that you can populate or query).\n\
<br /><br />\n\
To create a ShaderArrayParamDef object, use the <a href=\"#!/url=./si_om/ShaderParamDefContainer.AddArrayParamDef.html\">ShaderParamDefContainer.AddArrayParamDef</a>\n\
method when adding a new parameter definition to the shader parameter definition container.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Properties</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ShaderParamDef.Attributes.html\">Attributes</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ShaderParamDef.Capabilities.html\">Capabilities</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ShaderParamDef.DataType.html\">DataType</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ShaderParamDef.DefaultValue.html\">DefaultValue</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ShaderParamDef.DisplayName.html\">DisplayName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ShaderParamDef.HasDefaultValue.html\">HasDefaultValue</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ShaderParamDef.IsArray.html\">IsArray</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ShaderParamDef.IsInput.html\">IsInput</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ShaderParamDef.IsOutput.html\">IsOutput</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ShaderParamDef.IsStructure.html\">IsStructure</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderArrayParamDef.ItemDef.html\">ItemDef</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderArrayParamDef.ItemDef2.html\">ItemDef2</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderArrayParamDef.ItemInitialCount.html\">ItemInitialCount</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderArrayParamDef.ItemInitialValues.html\">ItemInitialValues</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderArrayParamDef.ItemName.html\">ItemName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ShaderParamDef.MainPort.html\">MainPort</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ShaderParamDef.MaxValue.html\">MaxValue</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ShaderParamDef.MinValue.html\">MinValue</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderArrayParamDef.StaticArray.html\">StaticArray</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ShaderParamDef.SuggestedMaxValue.html\">SuggestedMaxValue</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ShaderParamDef.SuggestedMinValue.html\">SuggestedMinValue</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ShaderParamDef.Texturable.html\">Texturable</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/* \n\
	This example demonstrates how to create a dynamic shader definition \n\
	with an input array parameter and then populate the array using the\n\
	ValueMap object created via the ItemInitialValues property.\n\
*/\n\
app = Application;\n\
app.NewScene(\"\", false);\n\
var oShaderDef = XSIFactory.CreateShaderDef(\"MyParser\", \"MyArrayDemo\", 1, 0);\n\
oShaderDef.AddShaderFamily(siShaderFamilyTexture);\n\
app.LogMessage(\"Shader definition name: \" + oShaderDef.Name);\n\
// Set up shader parameter definition options to use with new input parameter\n\
oShaderInParamDefOptions = XSIFactory.CreateShaderParamDefOptions();\n\
oShaderInParamDefOptions.SetAnimatable(false);\n\
oShaderInParamDefOptions.SetTexturable(true);\n\
oShaderInParamDefOptions.SetInspectable(true);\n\
oShaderInParamDefOptions.SetShortName(\"Fluffy Bunnies\");\n\
// Add input parameter to definition\n\
oInputParams = oShaderDef.InputParamDefs;\n\
var oArrayParamDef = oInputParams.AddArrayParamDef(\"flurry\", siScalarParameterType, oShaderInParamDefOptions);\n\
// Make it an array of 6 items and populate the array via the ValueMap interface\n\
oArrayParamDef.ItemInitialCount = 6;\n\
var oValueMap = oArrayParamDef.ItemInitialValues;\n\
oValueMap.Set(\"a\", 0);\n\
oValueMap.Set(\"b\", 8);\n\
oValueMap.Set(\"c\", 16);\n\
oValueMap.Set(\"d\", 32);\n\
oValueMap.Set(\"e\", 64);\n\
oValueMap.Set(\"f\", 128);\n\
// Now print info to see what we have\n\
for (var i=0; i&lt;oShaderDef.InputParamDefs.Definitions.Count; i++) {\n\
	LogParamInfo(\"\\t\", oShaderDef.InputParamDefs.Definitions.Item(i));\n\
}	\n\
// INFO : Shader definition name: MyParser.MyArrayDemo.1.0\n\
// INFO : 	Parameter name: Fluffy Bunnies\n\
// INFO : 	ClassName: ShaderArrayParamDef\n\
// INFO : 	Family: 65\n\
// INFO : 	Yes, I\'m an array!\n\
// INFO : 	I\'m an INPUT parameter\n\
// INFO : 		Parameter name: Item\n\
// INFO : 		ClassName: ShaderStructParamDef\n\
// INFO : 		Family: 3\n\
// INFO : 		I\'m an INPUT parameter\n\
// INFO : 		ItemName: Item\n\
// INFO : 		ItemInitialCount: 6\n\
// INFO : 		ItemInitialValues: \n\
// INFO : 			Names: a, b, c, d, e, f\n\
// INFO : 			Values: 0, 8, 16, 32, 64, 128\n\
// Convenience function to log info iteratively\n\
function LogParamInfo( in_indent, in_paramdef )\n\
{\n\
	app.LogMessage(in_indent + \"Parameter name: \" + in_paramdef.DisplayName);\n\
	app.LogMessage(in_indent + \"ClassName: \" + app.ClassName(in_paramdef));\n\
	app.LogMessage(in_indent + \"Family: \" + in_paramdef.DataType);\n\
	if (in_paramdef.IsArray) {\n\
		app.LogMessage(in_indent + \"Yes, I\'m an array!\");\n\
	}\n\
	if (in_paramdef.IsInput) {\n\
		app.LogMessage(in_indent + \"I\'m an INPUT parameter\");\n\
	}\n\
	if (in_paramdef.IsOutput) {\n\
		app.LogMessage(in_indent + \"I\'m an OUTPUT parameter\");\n\
	}\n\
	if (in_paramdef.DataType == siShaderDataTypeArray) {\n\
		LogParamInfo(in_indent + \"\\t\", in_paramdef.ItemDef);\n\
		in_indent += \"\\t\";\n\
		app.LogMessage(in_indent + \"ItemName: \" + in_paramdef.ItemName);\n\
		if (in_paramdef.StaticArray) {\n\
			app.LogMessage(in_indent + \"Is a Static Array\");\n\
		}\n\
		app.LogMessage(in_indent + \"ItemInitialCount: \" + in_paramdef.ItemInitialCount);\n\
		if (in_paramdef.ItemInitialCount) {\n\
			app.LogMessage(in_indent + \"ItemInitialValues: \");\n\
			var vbaInitNames = new VBArray(in_paramdef.ItemInitialValues.Names);\n\
			var aInitNames = vbaInitNames.toArray();\n\
			var vbaInitValues = new VBArray(in_paramdef.ItemInitialValues.Values);\n\
			var aInitValues = vbaInitValues.toArray();\n\
			app.LogMessage(in_indent + \"\\tNames: \" + aInitNames.join(\", \"));\n\
			app.LogMessage(in_indent + \"\\tValues: \" + aInitValues.join(\", \"));\n\
		}\n\
	}\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/ShaderParamDefContainer.AddParamDef.html\">ShaderParamDefContainer.AddParamDef</a> <a href=\"#!/url=./si_om/ShaderParamDefContainer.AddArrayParamDef.html\">ShaderParamDefContainer.AddArrayParamDef</a> <a href=\"#!/url=./si_om/ShaderParameter.Definition.html\">ShaderParameter.Definition</a> <a href=\"#!/url=./si_om/ShaderParamDefContainer.html\">ShaderParamDefContainer</a> <a href=\"#!/url=./si_om/ShaderStructParamDef.html\">ShaderStructParamDef</a> <a href=\"#!/url=./examples/Addons/ShaderDefinitions/netview_ShaderDefs.htm\">Shader Definition examples installed with Softimage</a> <a href=\"#!/url=./examples/Addons/ShaderParser/netview_ShaderParser.htm\">Shader Parser examples installed with Softimage</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";