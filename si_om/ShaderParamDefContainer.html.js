var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ShaderParamDefContainer</title>\n\
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
            <h1>ShaderParamDefContainer</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ShaderParamDefContainer</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_ShaderParamDefContainer\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1ShaderParamDefContainer.html\">ShaderParamDefContainer</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\">ShaderParamDefContainer</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v9.0 (2011)</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> This object allows you to manage the list of input and output parameters defined on a shader\n\
definition object (<a href=\"#!/url=./si_om/ShaderDef.html\">ShaderDef</a>). It is kind of like an extra level of abstraction\n\
on the <a href=\"#!/url=./si_om/ShaderParamDefCollection.html\">ShaderParamDefCollection</a> which allows you to add and remove members but\n\
also access the real ShaderParamDefCollection (via the <a href=\"#!/url=./si_om/ShaderParamDefContainer.Definitions.html\">ShaderParamDefContainer.Definitions</a> \n\
member) to iterate over the list of parameters.\n\
<br /><br />\n\
There are three properties which return a ShaderParamDefContainer: <a href=\"#!/url=./si_om/ShaderDef.InputParamDefs.html\">ShaderDef.InputParamDefs</a>,\n\
<a href=\"#!/url=./si_om/ShaderDef.OutputParamDefs.html\">ShaderDef.OutputParamDefs</a>, and <a href=\"#!/url=./si_om/ShaderStructParamDef.SubParamDefs.html\">ShaderStructParamDef.SubParamDefs</a>.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderParamDefContainer.AddArrayParamDef.html\">AddArrayParamDef</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderParamDefContainer.AddArrayParamDef2.html\">AddArrayParamDef2</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderParamDefContainer.AddParamDef.html\">AddParamDef</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderParamDefContainer.AddParamDef2.html\">AddParamDef2</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderParamDefContainer.GetParamDefByName.html\">GetParamDefByName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderParamDefContainer.GetParamDefByName2.html\">GetParamDefByName2</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Properties</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShaderParamDefContainer.Definitions.html\">Definitions</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
<td class=\"example\"><pre class=\"python\"># \n\
# This example demonstrates how to create a dynamic shader definition \n\
# and then access/populate its input and output parameters via the \n\
# ShaderParamDefContainer interface.\n\
#\n\
from win32com.client import constants as cns\n\
app = Application\n\
oShaderDef = XSIFactory.CreateShaderDef(\"baddog\", \"mr_piddles\", 1, 0)#\n\
oShaderDef.AddShaderFamily(\"mrTexture\")\n\
app.LogMessage(\"Shader definition name: \" + oShaderDef.Name)\n\
# Set up shader parameter definition options to use with new input parameter\n\
oShaderInParamDefOptions = XSIFactory.CreateShaderParamDefOptions();\n\
oShaderInParamDefOptions.SetAnimatable(False)\n\
oShaderInParamDefOptions.SetTexturable(True)\n\
oShaderInParamDefOptions.SetInspectable(True)\n\
oShaderInParamDefOptions.SetShortName(\"Bones-y\")\n\
# Add input parameter to definition\n\
oInputParams = oShaderDef.InputParamDefs\n\
oInputParams.AddParamDef2(\"bonesy\", cns.siShaderDataTypeColor4, oShaderInParamDefOptions)\n\
# Set up shader parameter definition options to use with new output parameter\n\
oShaderOutParamDefOptions = XSIFactory.CreateShaderParamDefOptions()\n\
oShaderOutParamDefOptions.SetAnimatable(False)\n\
oShaderOutParamDefOptions.SetTexturable(True)\n\
oShaderOutParamDefOptions.SetInspectable(True)\n\
oShaderOutParamDefOptions.SetShortName(\"Chew Toys\")\n\
# Add output parameter to definition\n\
oOutputParams = oShaderDef.OutputParamDefs\n\
oOutputParams.AddArrayParamDef2(\"chewtoys\", cns.siShaderDataTypeStructure, oShaderOutParamDefOptions)\n\
# Now print info to see what we have\n\
for oShaderInParamDef in oShaderDef.InputParamDefs.Definitions :\n\
	Application.LogMessage(\"Input parameter name: \" + oShaderInParamDef.DisplayName)\n\
for oShaderOutParamDef in oShaderDef.OutputParamDefs.Definitions :\n\
	Application.LogMessage(\"Output parameter name: \" + oShaderOutParamDef.DisplayName)\n\
# Expected results:\n\
# INFO : Shader definition name: baddog.mr_piddles.1.0\n\
# INFO : Input parameter name: Bones-y\n\
# INFO : Output parameter name: Chew Toys</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// See the example under the ShaderParamDefContainer.GetParamDefByName method reference page</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/ShaderDef.InputParamDefs.html\">ShaderDef.InputParamDefs</a> <a href=\"#!/url=./si_om/ShaderDef.OutputParamDefs.html\">ShaderDef.OutputParamDefs</a> <a href=\"#!/url=./si_om/ShaderStructParamDef.SubParamDefs.html\">ShaderStructParamDef.SubParamDefs</a> <a href=\"#!/url=./si_om/ShaderParamDef.html\">ShaderParamDef</a> <a href=\"#!/url=./si_om/ShaderDef.html\">ShaderDef</a> <a href=\"#!/url=./files/cus_shaders_ParamsData.htm\">Shader Parameter Definitions</a> <a href=\"#!/url=./examples/Addons/ShaderDefinitions/netview_ShaderDefs.htm\">Shader Definition examples installed with Softimage</a> <a href=\"#!/url=./examples/Addons/ShaderParser/netview_ShaderParser.htm\">Shader Parser examples installed with Softimage</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";