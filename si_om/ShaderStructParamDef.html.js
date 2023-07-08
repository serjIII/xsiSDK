var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ShaderStructParamDef</title>\n\
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
            <h1>ShaderStructParamDef</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ShaderStructParamDef</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_ShaderStructParamDef\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1ShaderStructParamDef.html\">ShaderStructParamDef</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\"><a href=\"#!/url=./si_om/ShaderParamDef.html\">ShaderParamDef</a></p>\n\
<p class=\"level3\">ShaderStructParamDef</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v9.0 (2011)</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> This object is a specialization of the <a href=\"#!/url=./si_om/ShaderParamDef.html\">ShaderParamDef</a> object. It allows you to access the\n\
sub-elements contained by this shader parameter (<a href=\"#!/url=./si_om/ShaderStructParamDef.SubParamDefs.html\">ShaderStructParamDef.SubParamDefs</a>, which\n\
returns a list of sub parameter definitions in a <a href=\"#!/url=./si_om/ShaderParamDefContainer.html\">ShaderParamDefContainer</a>).\n\
<br /><br />\n\
To create a ShaderStructParamDef object, specify the <a href=\"#!/url=./si_om/siShaderParameterDataType.html#siShaderDataTypeStructure\">siShaderDataTypeStructure</a>\n\
shader parameter type in the call to <a href=\"#!/url=./si_om/ShaderParamDefContainer.AddParamDef.html\">ShaderParamDefContainer.AddParamDef</a> or \n\
<a href=\"#!/url=./si_om/ShaderParamDefContainer.AddArrayParamDef.html\">ShaderParamDefContainer.AddArrayParamDef</a>.\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/ShaderParamDef.IsOutput.html\">IsOutput</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ShaderParamDef.IsStructure.html\">IsStructure</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ShaderParamDef.MainPort.html\">MainPort</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ShaderParamDef.MaxValue.html\">MaxValue</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ShaderParamDef.MinValue.html\">MinValue</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderStructParamDef.SubParamDefs.html\">SubParamDefs</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ShaderParamDef.SuggestedMaxValue.html\">SuggestedMaxValue</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ShaderParamDef.SuggestedMinValue.html\">SuggestedMinValue</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ShaderParamDef.Texturable.html\">Texturable</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' \n\
\' This example demonstrates how to create a dynamic shader definition \n\
\' with an input struct parameter and then populate it with some\n\
\' sub parameters.\n\
\'\n\
set app = Application\n\
set oShaderDef = XSIFactory.CreateShaderDef(\"MyParser\", \"MyStructDemo\", 1, 0)\n\
oShaderDef.AddShaderFamily \"mrTexture\"\n\
app.LogMessage \"Shader definition name: \" &amp; oShaderDef.Name\n\
\' Set up shader parameter definition options to use with new input parameter\n\
set oShaderInParamDefOptions = XSIFactory.CreateShaderParamDefOptions()\n\
oShaderInParamDefOptions.SetAnimatable False\n\
oShaderInParamDefOptions.SetTexturable True\n\
oShaderInParamDefOptions.SetInspectable True\n\
oShaderInParamDefOptions.SetShortName \"Main Struct\"\n\
\' Add input parameter to definition\n\
set oInputParams = oShaderDef.InputParamDefs\n\
oInputParams.AddParamDef \"main\", siShaderDataTypeStructure, oShaderInParamDefOptions\n\
\' Now print info to see what we have\n\
for each oShaderInParamDef in oShaderDef.InputParamDefs.Definitions \n\
	app.LogMessage \"Input parameter name: \" &amp; oShaderInParamDef.DisplayName\n\
	app.LogMessage vbTab &amp; \"ClassName: \" &amp; app.ClassName(oShaderInParamDef)\n\
	app.LogMessage vbTab &amp; \"DataType: \" &amp; oShaderInParamDef.DataType\n\
	if oShaderInParamDef.DataType =  siShaderDataTypeStructure then\n\
		set oSubContainer = oShaderInParamDef.SubParamDefs\n\
		oShaderInParamDefOptions.SetShortName \"SubColor 1\"\n\
		oSubContainer.AddParamDef \"sub1\", siShaderDataTypeColor4, oShaderInParamDefOptions\n\
		oShaderInParamDefOptions.SetShortName \"SubColor 2\"\n\
		oSubContainer.AddParamDef \"sub2\", siShaderDataTypeString, oShaderInParamDefOptions\n\
		oShaderInParamDefOptions.SetShortName \"SubColor 3\"\n\
		oSubContainer.AddParamDef \"sub3\", siShaderDataTypeGradient, oShaderInParamDefOptions\n\
		app.LogMessage vbTab &amp; \"Number of sub parameter definitions: \" &amp; oShaderInParamDef.SubParamDefs.Definitions.Count\n\
		for each oSubParamDef in oShaderInParamDef.SubParamDefs.Definitions\n\
			app.LogMessage vbTab &amp; \"Sub parameter name: \" &amp; oSubParamDef.DisplayName\n\
			app.LogMessage vbTab &amp; vbTab &amp; \"ClassName: \" &amp; app.ClassName(oSubParamDef)\n\
			app.LogMessage vbTab &amp; vbTab &amp; \"DataType: \" &amp; oSubParamDef.DataType\n\
		next\n\
	end if\n\
next\n\
\' Expected result:\n\
\' INFO : Shader definition name: MyParser.MyStructDemo.1.0\n\
\' INFO : Input parameter name: Main Struct\n\
\' INFO : 	ClassName: ShaderStructParamDef\n\
\' INFO : 	DataType: 64\n\
\' INFO : 	Number of sub parameter definitions: 3\n\
\' INFO : 	Sub parameter name: SubColor 1\n\
\' INFO : 		ClassName: ShaderStructParamDef\n\
\' INFO : 		DataType: 10\n\
\' INFO : 	Sub parameter name: SubColor 2\n\
\' INFO : 		ClassName: ShaderParamDef\n\
\' INFO : 		DataType: 11\n\
\' INFO : 	Sub parameter name: SubColor 3\n\
\' INFO : 		ClassName: ShaderStructParamDef\n\
\' INFO : 		DataType: 18</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/ShaderParamDefContainer.AddParamDef.html\">ShaderParamDefContainer.AddParamDef</a> <a href=\"#!/url=./si_om/ShaderParamDefContainer.AddArrayParamDef.html\">ShaderParamDefContainer.AddArrayParamDef</a> <a href=\"#!/url=./si_om/ShaderParameter.Definition.html\">ShaderParameter.Definition</a> <a href=\"#!/url=./si_om/ShaderParamDefContainer.html\">ShaderParamDefContainer</a> <a href=\"#!/url=./si_om/ShaderArrayParamDef.html\">ShaderArrayParamDef</a> <a href=\"#!/url=./examples/Addons/ShaderDefinitions/netview_ShaderDefs.htm\">Shader Definition examples installed with Softimage</a> <a href=\"#!/url=./examples/Addons/ShaderParser/netview_ShaderParser.htm\">Shader Parser examples installed with Softimage</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";