var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ShaderDef</title>\n\
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
            <h1>ShaderDef</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ShaderDef</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_ShaderDef\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1ShaderDef.html\">ShaderDef</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\">ShaderDef</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v9.0 (2011)</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> A shader definition is similar to a preset in that it stores a snapshot of a shader, often in a file on disk. However,\n\
a traditional Softimage .preset file is a binary file built from a SPDL, whereas a shader definition can be created\n\
and/or modified in several ways, including via a self-installing plug-in, a special XML file saved on disk (.xsishaderdef), \n\
or by coding on the fly.\n\
<br /><br />\n\
To create a self-installing, plug-in based shader definition you need to implement the \n\
<a href=\"#!/url=./si_cmds/cb_Shader_Define.html\">Define</a> and <a href=\"#!/url=./si_cmds/cb_Shader_DefineInfo.html\">DefineInfo</a> \n\
callbacks. For more information, see <a href=\"#!/url=./files/cus_shaders.htm\">Custom Shaders</a>.\n\
<br /><br />\n\
To create a shader definition on the fly, you can use <a href=\"#!/url=./si_om/XSIFactory.CreateShaderDef.html\">XSIFactory.CreateShaderDef</a> and then populate\n\
the definition using the returned ShaderDef object.\n\
<br /><br />\n\
Saving shader definitions to a .xsishaderdef file is the most reliable way to manage shader versions. You can then use the \n\
<a href=\"#!/url=./si_cmds/ReplaceShadersDefinition.html\">ReplaceShadersDefinition</a> command to upgrade a specific list of shaders to a new shader definition.\n\
<br /><br />\n\
To get a list of all shader definitions in the current session of Softimage, use the \n\
<a href=\"#!/url=./si_om/XSIApplication.ShaderDefinitions.html\">XSIApplication.ShaderDefinitions</a> property. You can also access a specific shader definition by ProgID\n\
by using the <a href=\"#!/url=./si_om/XSIApplication.GetShaderDef.html\">XSIApplication.GetShaderDef</a> method.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderDef.AddRendererDef.html\">AddRendererDef</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderDef.AddShaderFamily.html\">AddShaderFamily</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderDef.GetRendererDefByName.html\">GetRendererDefByName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderDef.IsShaderFamily.html\">IsShaderFamily</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderDef.RemoveRendererDef.html\">RemoveRendererDef</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderDef.Attributes.html\">Attributes</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderDef.Category.html\">Category</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderDef.DefinitionPath.html\">DefinitionPath</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderDef.DisplayName.html\">DisplayName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderDef.InputParamDefs.html\">InputParamDefs</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderDef.OutputParamDefs.html\">OutputParamDefs</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderDef.PPGLayout.html\">PPGLayout</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderDef.Parsed.html\">Parsed</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderDef.Parser.html\">Parser</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderDef.ParserBased.html\">ParserBased</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderDef.Plugin.html\">Plugin</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderDef.PluginBased.html\">PluginBased</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderDef.PluginFilename.html\">PluginFilename</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderDef.PrimaryShaderFamily.html\">PrimaryShaderFamily</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderDef.ProgID.html\">ProgID</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderDef.RenderTreeLayout.html\">RenderTreeLayout</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderDef.RendererDefs.html\">RendererDefs</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderDef.ShaderFamilies.html\">ShaderFamilies</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderDef.ShaderInstanceCount.html\">ShaderInstanceCount</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderDef.ShaderInstances.html\">ShaderInstances</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderDef.ShaderballOpts.html\">ShaderballOpts</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">from win32com.client import constants as si\n\
app = Application\n\
app.NewScene(\"\", 0)\n\
#\n\
#	SETUP\n\
#\n\
# Create a ShaderDef from the factory\n\
oShaderDef = XSIFactory.CreateShaderDef(\"NoParser\", \"Nunce\", 1, 0)\n\
# On-the-fly shader definitions won\'t show up in the preset manager \n\
# but just in case this definition eventually gets saved to file\n\
oShaderDef.Category = \"Test Shaders\"\n\
# Add the basic Texture family\n\
oShaderDef.AddShaderFamily(si.siShaderFamilyTexture)\n\
#\n\
#	PARAMETERS\n\
#\n\
# Create one set of parameter definition options for all \n\
oPDefOptions = XSIFactory.CreateShaderParamDefOptions()\n\
oPDefOptions.SetTexturable(True) # make it a port on the shader node\n\
# Get the ShaderParamDefContainers for both inputs and outputs. The\n\
# new parameter definitions will be added to these objects\n\
oInputPDefs = oShaderDef.InputParamDefs\n\
oOutputPDefs = oShaderDef.OutputParamDefs\n\
# Add color, scalar, and boolean ShaderParamDefs as inputs\n\
oInputPDefs.AddParamDef2(\"in_color\", si.siShaderDataTypeColor4 , oPDefOptions)\n\
oInputPDefs.AddParamDef2(\"in_scalar\", si.siShaderDataTypeScalar , oPDefOptions)\n\
oInputPDefs.AddParamDef2(\"in_boolean\", si.siShaderDataTypeBoolean , oPDefOptions)\n\
# Output a color\n\
oOutputPDefs.AddParamDef2(\"out\", si.siShaderDataTypeColor4, oPDefOptions)\n\
# Set up a Renderer\n\
oRendererDef = oShaderDef.AddRendererDef2(\"mental ray\")\n\
oRendererDef.SymbolName = \"sib_attribute_boolean\"\n\
oRendererDef.CodePath = \"{LIBS}/sibase.{EXT}\"\n\
oRendererOpts = oRendererDef.RendererOptions\n\
oRendererOpts.Set(\"version\", 1)\n\
#\n\
#	INSTANTIATION\n\
#\n\
# Generate a preset and connect it to a cone\n\
app.CreatePrim(\"Cone\", \"MeshSurface\")\n\
app.CreateShaderFromProgID(\"NoParser.Nunce.1.0\", \n\
	\"Sources.Materials.DefaultLib.Scene_Material\")\n\
app.SIConnectShaderToCnxPoint(\"Sources.Materials.DefaultLib.Scene_Material.Nunce.out\", \n\
	\"Sources.Materials.DefaultLib.Scene_Material.volume\", False)\n\
# Open the Render Tree with the cone selected to see it\n\
# Open the Synoptic viewer\n\
app.OpenView(\"Render Tree\")</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">//\n\
//	This example demonstrates how to instantiate and connect a shader\n\
//	definition, then how to get the shader definition from the system\n\
//	and use it to find its instance (shader)\n\
//\n\
app = Application;\n\
app.NewScene(\"\", false);\n\
var sProgID = \"Softimage.material-moviescreen.1.0\";\n\
LogInstances(sProgID);\n\
CreateShaderFromProgID(sProgID, \"Sources.Materials.DefaultLib.Scene_Material\");\n\
LogInstances(sProgID);\n\
// INFO : # of instances on Flat Light: 1\n\
// INFO : Found shader instance: Shader\n\
// INFO : Shader container: null\n\
// Set up a torus and a disc and connect the shader to both\n\
var obj1 = CreatePrim(\"Torus\", \"MeshSurface\");\n\
SIConnectShaderToCnxPoint(\"Sources.Materials.DefaultLib.Scene_Material.Flat_Light.out\", \n\
	\"Sources.Materials.DefaultLib.Scene_Material.Phong.reflectivity\", false);\n\
SIConnectShaderToCnxPoint(\"Sources.Materials.DefaultLib.Scene_Material.Flat_Light.out\", \n\
	\"Sources.Materials.DefaultLib.Scene_Material.Phong.radiance\", false);\n\
var obj2 = CreatePrim(\"Disc\", \"MeshSurface\");\n\
RemoveShaderFromCnxPoint(\"Sources.Materials.DefaultLib.Scene_Material.Flat_Light.out\", \n\
	\"Sources.Materials.DefaultLib.Scene_Material.Phong.reflectivity\", false);\n\
SIConnectShaderToCnxPoint(\"Sources.Materials.DefaultLib.Scene_Material.Flat_Light.out\", \n\
	\"Sources.Materials.DefaultLib.Scene_Material.Phong.reflectivity\", false);\n\
LogInstances(sProgID);\n\
// INFO : # of instances on Flat Light: 2\n\
// INFO : Found shader instance: Shader\n\
// INFO : Shader container: null\n\
// INFO : Found shader instance: Flat_Light\n\
// INFO : Shader container: Sources.Materials.DefaultLib.Scene_Material\n\
// Convenience function that will be called before and after \n\
// instantiating and after connecting the shader\n\
function LogInstances( in_name )\n\
{\n\
	var oShaderDef = app.ShaderDefinitions(in_name);\n\
	app.LogMessage(\"# of instances on \"+oShaderDef.DisplayName+\": \"+oShaderDef.ShaderInstanceCount);\n\
	if (oShaderDef.ShaderInstanceCount) {\n\
		for (var i=0; i&lt;oShaderDef.ShaderInstanceCount; i++) {\n\
			var oShader = oShaderDef.ShaderInstances(i);\n\
			app.LogMessage(\"Found shader instance: \"+oShader.Name);\n\
			app.LogMessage(\"Shader container: \"+oShader.GetShaderContainer());\n\
		}\n\
	}\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/XSIApplication.GetShaderDef.html\">XSIApplication.GetShaderDef</a> <a href=\"#!/url=./si_om/XSIFactory.CreateShaderDef.html\">XSIFactory.CreateShaderDef</a> <a href=\"#!/url=./si_om/Shader.ShaderDef.html\">Shader.ShaderDef</a> <a href=\"#!/url=./si_om/XSIFactory.RemoveShaderDef.html\">XSIFactory.RemoveShaderDef</a> <a href=\"#!/url=./si_cmds/callbacks.html\">Shader callbacks</a> <a href=\"#!/url=./files/cus_shaders.htm\">Custom Shaders</a> <a href=\"#!/url=./examples/Addons/ShaderDefinitions/netview_ShaderDefs.htm\">Shader Definition examples installed with Softimage</a> <a href=\"#!/url=./examples/Addons/ShaderParser/netview_ShaderParser.htm\">Shader Parser examples installed with Softimage</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";