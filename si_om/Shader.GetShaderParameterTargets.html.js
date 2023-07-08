var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Shader.GetShaderParameterTargets</title>\n\
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
            <h1>Shader.GetShaderParameterTargets</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Shader.html\">Shader</a>.GetShaderParameterTargets</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v7.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns a <a href=\"#!/url=./si_om/ParameterCollection.html\">ParameterCollection</a> containing the object(s) connected to a \n\
shader output parameter. This traverses the render tree in the opposite direction as the\n\
<a href=\"#!/url=./si_om/Parameter.Source.html\">Parameter.Source</a> property:\n\
<br /><br />\n\
Shader1.Out <== shader2.in=\"\" (ie.,=\"\" \'shader2.in.source\'=\"\" returns=\"\" shader1.out)=\"\"></==><br /><br />\n\
Shader1.Out ==> Shader2.In (ie., \'Shader1.GetShaderParameterTargets(Shader1.Out)\' returns Shader2.In)\n\
<br /><br />\n\
Note: You can also use this method on a shader compound to get the exposed input ports. \n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>ParameterCollection Shader.GetShaderParameterTargets( String in_ParameterName );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = Shader.GetShaderParameterTargets( ParameterScriptName );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/ParameterCollection.html\">ParameterCollection</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ParameterScriptName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		Script name of the parameter. \n\
		<br /><br />\n\
		Tip: On single output shaders, you can use an empty scriptname to get the \n\
		shader connected to the output.\n\
			</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example creates a sample shader tree and shows how to traverse a shader \n\
	tree from left to right using the Source property and right to left using the \n\
	GetShaderParameterTargets method. Both shader compound ports and non-compound \n\
	ports are demonstrated.\n\
*/\n\
// Fill the Default Material with some shaders.\n\
NewScene(null,false);\n\
CreatePrim(\"Sphere\", \"MeshSurface\", null, null);\n\
SelectObj(\"Sources.Materials.DefaultLib.Scene_Material\", null, null);\n\
CreateShaderFromPreset(\"Shaders\\\\Texture\\\\Share\\\\Color_share.Preset\", \n\
	\"Sources.Materials.DefaultLib.Scene_Material\", null);\n\
SIConnectShaderToCnxPoint(\"Sources.Materials.DefaultLib.Scene_Material.Color_share\", \n\
	\"Sources.Materials.DefaultLib.Scene_Material.Phong.ambient\", false);\n\
CreateShaderFromPreset(\"Shaders\\\\Texture\\\\Share\\\\Color_share.Preset\", \n\
	\"Sources.Materials.DefaultLib.Scene_Material\", null);\n\
SIConnectShaderToCnxPoint(\"Sources.Materials.DefaultLib.Scene_Material.Color_share\", \n\
	\"Sources.Materials.DefaultLib.Scene_Material.Color_share1.input\", false);\n\
CreateShaderFromPreset(\"Shaders\\\\Texture\\\\Share\\\\Color_share.Preset\", \n\
	\"Sources.Materials.DefaultLib.Scene_Material\", null);\n\
SIConnectShaderToCnxPoint(\"Sources.Materials.DefaultLib.Scene_Material.Color_share\", \n\
	\"Sources.Materials.DefaultLib.Scene_Material.Color_share2.input\", false);\n\
CreateShaderCompound(\"Sources.Materials.DefaultLib.Scene_Material.Color_share2\", null);\n\
CreateShaderFromPreset(\"Shaders\\\\Texture\\\\Share\\\\Color_share.Preset\", \n\
	\"Sources.Materials.DefaultLib.Scene_Material\", null);\n\
SIConnectShaderToCnxPoint(\"Sources.Materials.DefaultLib.Scene_Material.Color_share2\", \n\
	\"Sources.Materials.DefaultLib.Scene_Material.Color_share.input\", false);\n\
CreateShaderFromPreset(\"Shaders\\\\Texture\\\\Share\\\\Color_share.Preset\", \n\
	\"Sources.Materials.DefaultLib.Scene_Material\", null);\n\
SIConnectShaderToCnxPoint(\"Sources.Materials.DefaultLib.Scene_Material.Color_share3\", \n\
	\"Sources.Materials.DefaultLib.Scene_Material.Color_share2.input\", false);\n\
CreateShaderCompound(\"Sources.Materials.DefaultLib.Scene_Material.Color_share3\", null);\n\
// Get the Shader Source (single output shader) connected to a shader input port using \n\
// the Parameter.Source property.\n\
Application.LogMessage( \"Source (Right to Left Traversal) of single output shader\" );\n\
var oColorShareShader = GetValue(\"Sources.Materials.DefaultLib.Scene_Material.Color_share\");\n\
var oColorShareInputParam = oColorShareShader.Parameters.Item(\"input\");\n\
var oSource = oColorShareInputParam.Source;\n\
if( oSource != null ) {\n\
	Application.LogMessage( \"  CnxSource: \"  + oSource.FullName + \", \" \n\
		+ \"CnxTarget: \" + oColorShareInputParam.FullName +\".\" );	\n\
}\n\
// Get the Parameter Source (multi-output shader) connected to a shader input port using \n\
// the Parameter.Source property.\n\
Application.LogMessage( \"Source (Right to Left Traversal) of multi-output shader\" );\n\
var oColorShareShader = GetValue(\"Sources.Materials.DefaultLib.Scene_Material.Color_share2\");\n\
var oColorShareInputParam = oColorShareShader.Parameters.Item(\"input\");\n\
var oSource = oColorShareInputParam.Source;\n\
if( oSource != null ) {\n\
	Application.LogMessage( \"  CnxSource: \"  + oSource.FullName + \", \" \n\
		+ \"CnxTarget: \" + oColorShareInputParam.FullName +\".\" );	\n\
}\n\
// Get each Parameter Target driven by this multi-output shader\'s output port using the \n\
// Shader.GetShaderParameterTargets method.\n\
Application.LogMessage( \"Target (Left to Right Traversal) for multi-output shader\" );\n\
var oColorShareShader = GetValue(\"Sources.Materials.DefaultLib.Scene_Material.Color_share\");\n\
var oTargets = oColorShareShader.GetShaderParameterTargets(\"\");\n\
if( oTargets != null ) {\n\
	for( var i=0; i&lt;oTargets.Count; i++ ) {\n\
		Application.LogMessage( \"  CnxSource: \"  + oColorShareShader.FullName + \", \" \n\
			+ \"CnxTarget: \" + oTargets.Item(i).FullName +\".\" );\n\
	}	\n\
}\n\
// Get the Parameter Source connected inside a shader compound output port using \n\
// the Parameter.Source property.\n\
Application.LogMessage( \"Source (Right to Left Traversal) of shader compound\" );\n\
var oShaderCompound = GetValue(\"Sources.Materials.DefaultLib.Scene_Material.ShaderCompound1\");\n\
var oShaderCompoundOutputParam = oShaderCompound.Parameters.Item(\"input\");\n\
var oSource = oShaderCompoundOutputParam.Source;\n\
if( oSource != null ) {\n\
	Application.LogMessage( \"  CnxSource: \"  + oSource.FullName + \", \" \n\
		+ \"CnxTarget: \" + oShaderCompoundOutputParam.FullName +\".\" );	\n\
}\n\
// Get the Parameter Target driven by this shader\'s output port (connected inside a shader \n\
// compound) using the Shader.GetShaderParameterTargets method.\n\
Application.LogMessage( \"Target (Left to Right Traversal) for compound shader\" ); \n\
var oShaderCompound = GetValue(\"Sources.Materials.DefaultLib.Scene_Material.ShaderCompound\");\n\
var oShaderCompoundInputParam = oShaderCompound.Parameters.Item(\"input\");\n\
var oTargets = oShaderCompound.GetShaderParameterTargets( oShaderCompoundInputParam.Name );\n\
if( oTargets != null ) {\n\
	for( var i=0; i&lt;oTargets.Count; i++ ) {\n\
		Application.LogMessage( \"  CnxSource: \"  + oShaderCompoundInputParam.FullName + \", \" \n\
			+ \"CnxTarget: \" + oTargets.Item(i).FullName +\".\" );\n\
	}	\n\
}\n\
// Expected results:\n\
// INFO : Source (Right to Left Traversal) of single output shader\n\
// INFO :   CnxSource: Sources.Materials.DefaultLib.Scene_Material.Color_share2, \n\
//          CnxTarget: Sources.Materials.DefaultLib.Scene_Material.Color_share.input.\n\
// INFO : Source (Right to Left Traversal) of multi-output shader\n\
// INFO :   CnxSource: Sources.Materials.DefaultLib.Scene_Material.ShaderCompound1.input, \n\
//          CnxTarget: Sources.Materials.DefaultLib.Scene_Material.Color_share2.input.\n\
// INFO : Target (Left to Right Traversal) for multi-output shader\n\
// INFO :   CnxSource: Sources.Materials.DefaultLib.Scene_Material.Color_share, \n\
//          CnxTarget: Sources.Materials.DefaultLib.Scene_Material.Phong.ambient.\n\
// INFO :   CnxSource: Sources.Materials.DefaultLib.Scene_Material.Color_share, \n\
//          CnxTarget: Sources.Materials.DefaultLib.Scene_Material.Color_share1.input.\n\
// INFO :   CnxSource: Sources.Materials.DefaultLib.Scene_Material.Color_share, \n\
//          CnxTarget: Sources.Materials.DefaultLib.Scene_Material.ShaderCompound.input.\n\
// INFO : Source (Right to Left Traversal) of shader compound\n\
// INFO :   CnxSource: Sources.Materials.DefaultLib.Scene_Material.ShaderCompound1.Color_share3, \n\
//          CnxTarget: Sources.Materials.DefaultLib.Scene_Material.ShaderCompound1.input.\n\
// INFO : Target (Left to Right Traversal) for compound shader\n\
// INFO :   CnxSource: Sources.Materials.DefaultLib.Scene_Material.ShaderCompound.input, \n\
//          CnxTarget: Sources.Materials.DefaultLib.Scene_Material.ShaderCompound.Color_share2.input.</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Shader.GetShaderParameterType.html\">Shader.GetShaderParameterType</a> <a href=\"#!/url=./si_om/Parameter.Source.html\">Parameter.Source</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";