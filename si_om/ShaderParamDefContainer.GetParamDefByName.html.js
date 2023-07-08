var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ShaderParamDefContainer.GetParamDefByName</title>\n\
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
            <h1>ShaderParamDefContainer.GetParamDefByName</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/ShaderParamDefContainer.html\">ShaderParamDefContainer</a>.GetParamDefByName <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v9.0 (2011)</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns the <a href=\"#!/url=./si_om/ShaderParamDef.html\">ShaderParamDef</a> that matches the specified name from this container. This \n\
is preferable to calling <a href=\"#!/url=./si_om/ShaderParamDefContainer.Definitions.html\">ShaderParamDefContainer.Definitions</a>(in_ParameterName) if you\n\
don\'t need to iterate over the whole <a href=\"#!/url=./si_om/ShaderParamDefCollection.html\">ShaderParamDefCollection</a>.\n\
<br /><br />Note: This method could return an invalid object in python, use <a href=\"#!/url=./si_om/ShaderParamDefContainer.GetParamDefByName2.html\">ShaderParamDefContainer.GetParamDefByName2</a> instead.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>ShaderParamDef ShaderParamDefContainer.GetParamDefByName( String in_ParameterName );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = ShaderParamDefContainer.GetParamDefByName( in_ParameterName );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/ShaderParamDef.html\">ShaderParamDef</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">in_ParameterName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The registered name of the shader parameter definition to return.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to get a specific shader parameter\n\
	definition implemented on a shader definition by name \n\
*/\n\
var app = Application;\n\
var oShaderDef = XSIFactory.CreateShaderDef(\"chucky\", \"cheez\", 1, 0);\n\
oShaderDef.AddShaderFamily(\"mrTexture\");\n\
app.LogMessage(\"Shader definition name: \"+oShaderDef.Name);\n\
// Set up shader parameter definition options to use with new input \n\
// parameters: all the settings will be the same except for the name\n\
// so we will just change that on the ShaderParamDefOptions each time\n\
var oShaderInParamDefOptions = XSIFactory.CreateShaderParamDefOptions();\n\
oShaderInParamDefOptions.SetAnimatable(true);\n\
oShaderInParamDefOptions.SetTexturable(true);\n\
oShaderInParamDefOptions.SetInspectable(true);\n\
oShaderInParamDefOptions.SetShortName(\"Out\");\n\
// Add output parameter to the definition\n\
var oOutputParams = oShaderDef.OutputParamDefs;\n\
oOutputParams.AddParamDef(\"out\", siShaderDataTypeColor4, oShaderInParamDefOptions);\n\
// Add another parameter to the definition\n\
oShaderInParamDefOptions.SetShortName(\"Name\");\n\
oOutputParams.AddParamDef(\"name\", siShaderDataTypeString, oShaderInParamDefOptions);\n\
// Add one more parameter to the definition\n\
oShaderInParamDefOptions.SetShortName(\"Valid\");\n\
oOutputParams.AddParamDef(\"valid\", siShaderDataTypeBoolean, oShaderInParamDefOptions);\n\
// How many input parameters are there?\n\
app.LogMessage(\"There are \"+oShaderDef.OutputParamDefs.Definitions.Count+\" parameter(s) defined here\");\n\
// Get them by name \n\
var oParamDef3 = oShaderDef.OutputParamDefs.GetParamDefByName(\"valid\");\n\
var oParamDef1 = oShaderDef.OutputParamDefs.GetParamDefByName(\"out\");\n\
var oParamDef2 = oShaderDef.OutputParamDefs.GetParamDefByName(\"name\");\n\
app.LogMessage(\"Here are the names as they will appear in the UI:\");\n\
app.LogMessage(\"\\t- \"+oParamDef1.DisplayName);\n\
app.LogMessage(\"\\t- \"+oParamDef2.DisplayName);\n\
app.LogMessage(\"\\t- \"+oParamDef3.DisplayName);\n\
// Expected results:\n\
// INFO : Shader definition name: chucky.cheez.1.0\n\
// INFO : There are 3 parameter(s) defined here\n\
// INFO : Here are the names as they will appear in the UI:\n\
// INFO : 	- Out\n\
// INFO : 	- Name\n\
// INFO : 	- Valid</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/ShaderParamDefContainer.Definitions.html\">ShaderParamDefContainer.Definitions</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";