var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ShaderParamDef</title>\n\
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
            <h1>ShaderParamDef</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ShaderParamDef</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_ShaderParamDef\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1ShaderParamDef.html\">ShaderParamDef</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\">ShaderParamDef</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v9.0 (2011)</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> This object represents a definition for a <a href=\"#!/url=./si_om/ShaderParameter.html\">ShaderParameter</a>. Shader parameter definitions\n\
are stored on the <a href=\"#!/url=./si_om/ShaderDef.html\">ShaderDef</a> object in a special <a href=\"#!/url=./si_om/ShaderParamDefContainer.html\">ShaderParamDefContainer</a> \n\
object, which allows you to access existing parameter definitions or add new ones. To access the \n\
ShaderParamDefContainer object, call <a href=\"#!/url=./si_om/ShaderDef.InputParamDefs.html\">ShaderDef.InputParamDefs</a> or \n\
<a href=\"#!/url=./si_om/ShaderDef.OutputParamDefs.html\">ShaderDef.OutputParamDefs</a>. From the ShaderParamDefContainer you can add new parameter\n\
definitions by calling <a href=\"#!/url=./si_om/ShaderParamDefContainer.AddParamDef.html\">ShaderParamDefContainer.AddParamDef</a> or \n\
<a href=\"#!/url=./si_om/ShaderParamDefContainer.AddArrayParamDef.html\">ShaderParamDefContainer.AddArrayParamDef</a> with a set of <a href=\"#!/url=./si_om/ShaderParamDefOptions.html\">ShaderParamDefOptions</a>.\n\
<br /><br />\n\
To access a specific shader parameter definition from an instantiated shader definition, use the \n\
<a href=\"#!/url=./si_om/ShaderParamDefContainer.GetParamDefByName.html\">ShaderParamDefContainer.GetParamDefByName</a> method. To iterate over the entire list of input or \n\
output parameter definitions for an instantiated shader definition, use the \n\
<a href=\"#!/url=./si_om/ShaderParamDefContainer.Definitions.html\">ShaderParamDefContainer.Definitions</a> property. \n\
<br /><br />\n\
To access existing shader parameter definitions from a <a href=\"#!/url=./si_om/ShaderParameter.html\">ShaderParameter</a> instance, use the\n\
<a href=\"#!/url=./si_om/ShaderParameter.Definition.html\">ShaderParameter.Definition</a> property. \n\
<br /><br />\n\
To add an array parameter (<a href=\"#!/url=./si_om/ShaderArrayParamDef.html\">ShaderArrayParamDef</a>), use the \n\
<a href=\"#!/url=./si_om/ShaderParamDefContainer.AddArrayParamDef.html\">ShaderParamDefContainer.AddArrayParamDef</a> method. For all other parameter types, use the\n\
<a href=\"#!/url=./si_om/ShaderParamDefContainer.AddParamDef.html\">ShaderParamDefContainer.AddParamDef</a> method.\n\
<br /><br />\n\
Note: This object is a generic interface. There are special accessors on the specializations of this object \n\
for the array and struct parameter types. See the <a href=\"#!/url=./si_om/ShaderArrayParamDef.html\">ShaderArrayParamDef</a> and \n\
<a href=\"#!/url=./si_om/ShaderStructParamDef.html\">ShaderStructParamDef</a> reference pages for more details on these specializations.\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderParamDef.Attributes.html\">Attributes</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderParamDef.Capabilities.html\">Capabilities</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderParamDef.DataType.html\">DataType</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderParamDef.DefaultValue.html\">DefaultValue</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderParamDef.DisplayName.html\">DisplayName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderParamDef.HasDefaultValue.html\">HasDefaultValue</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderParamDef.IsArray.html\">IsArray</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderParamDef.IsInput.html\">IsInput</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderParamDef.IsOutput.html\">IsOutput</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderParamDef.IsStructure.html\">IsStructure</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderParamDef.MainPort.html\">MainPort</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderParamDef.MaxValue.html\">MaxValue</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderParamDef.MinValue.html\">MinValue</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderParamDef.SuggestedMaxValue.html\">SuggestedMaxValue</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderParamDef.SuggestedMinValue.html\">SuggestedMinValue</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderParamDef.Texturable.html\">Texturable</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\"># \n\
# This example demonstrates how to create a dynamic shader definition \n\
# with 2 output and 1 input parameters. It also connects the new\n\
# shader definition in to a cube and displays it in the render tree\n\
#\n\
from win32com.client import constants as cns\n\
app = Application\n\
app.NewScene(\"\", False)\n\
oShaderDef = XSIFactory.CreateShaderDef(\"MyShaderef\", \"MySimpleParamDemo\", 1, 3)\n\
oShaderDef.AddShaderFamily(\"mrTexture\")\n\
oShaderDef.DisplayName = \"Demo\"\n\
oShaderDef.Category = \"Demo Items\"\n\
app.LogMessage(\"Shader definition name: \" + oShaderDef.Name)\n\
# OUT PARAMETER 1\n\
# Set up shader parameter definition options to use with new parameters\n\
oShaderParamDefOptions = XSIFactory.CreateShaderParamDefOptions()\n\
oShaderParamDefOptions.SetAnimatable(True)\n\
oShaderParamDefOptions.SetTexturable(True)\n\
oShaderParamDefOptions.SetInspectable(True)\n\
oShaderParamDefOptions.SetShortName(\"Output\")\n\
# Add output parameter to definition\n\
oOutputParams = oShaderDef.OutputParamDefs\n\
oOutputParams.AddParamDef2(\"result\", cns.siColorParameterType, oShaderParamDefOptions)\n\
oOutputParams.GetParamDefByName2(\"result\").DisplayName = \"Colour Output\"\n\
app.LogMessage(oOutputParams.GetParamDefByName(\"result\").DisplayName)\n\
# OUT PARAMETER 2\n\
# Change existing shader parameter definition options to use with new output parameter\n\
oShaderParamDefOptions.SetShortName(\"Valid?\")\n\
# Add 2nd output parameter to definition\n\
oOutputParams.AddParamDef2(\"valid\", cns.siBooleanParameterType, oShaderParamDefOptions)\n\
# IN PARAMETER\n\
# More changes to param def options\n\
oShaderParamDefOptions.SetSoftLimit(-50, 50)\n\
oShaderParamDefOptions.SetHardLimit(-10, 10)\n\
oShaderParamDefOptions.SetDefaultValue(5)\n\
oShaderParamDefOptions.SetShortName(\"Vexatious\")\n\
# Add input parameter (direct access)\n\
oShaderDef.InputParamDefs.AddParamDef2(\"vex\", cns.siScalarParameterType, oShaderParamDefOptions)\n\
# RESULTS\n\
# Now print info to see what we have\n\
for oShaderOutParamDef in oShaderDef.OutputParamDefs.Definitions :\n\
	app.LogMessage(\"Input parameter name: \" + oShaderOutParamDef.DisplayName)\n\
	app.LogMessage(\"\\tClassName: \" + app.ClassName(oShaderOutParamDef))\n\
	app.LogMessage(\"\\tType: \" + str(oShaderOutParamDef.DataType))\n\
# Connect this shader in the RenderTree and pop up the RenderTree view to see it\n\
cube = app.ActiveSceneRoot.AddGeometry(\"Cube\", \"MeshSurface\")\n\
app.CreateShaderFromProgID(\"MyShaderef.MySimpleParamDemo.1.3\", \"Sources.Materials.DefaultLib.Scene_Material\", \"\")\n\
app.SIConnectShaderToCnxPoint( \"Sources.Materials.DefaultLib.Scene_Material.Demo.result\", \n\
	\"Sources.Materials.DefaultLib.Scene_Material.Photon\", False)\n\
app.SelectObj(cube)\n\
app.OpenView(\"Render Tree\", False)\n\
# INFO : Shader definition name: None.MySimpleParamDemo.1.3\n\
# INFO : Input parameter name: Output\n\
# INFO : 	ClassName: ShaderParamDef\n\
# INFO : 	Type: 4\n\
# INFO : Input parameter name: Valid?\n\
# INFO : 	ClassName: ShaderParamDef\n\
# INFO : 	Type: 1</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/ShaderParamDefContainer.AddParamDef.html\">ShaderParamDefContainer.AddParamDef</a> <a href=\"#!/url=./si_om/ShaderParamDefContainer.AddArrayParamDef.html\">ShaderParamDefContainer.AddArrayParamDef</a> <a href=\"#!/url=./si_om/ShaderParameter.Definition.html\">ShaderParameter.Definition</a> <a href=\"#!/url=./si_om/ShaderParamDefContainer.html\">ShaderParamDefContainer</a> <a href=\"#!/url=./files/cus_shaders_ParamsData.htm\">Shader Parameter Definitions</a> <a href=\"#!/url=./examples/Addons/ShaderDefinitions/netview_ShaderDefs.htm\">Shader Definition examples installed with Softimage</a> <a href=\"#!/url=./examples/Addons/ShaderParser/netview_ShaderParser.htm\">Shader Parser examples installed with Softimage</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";