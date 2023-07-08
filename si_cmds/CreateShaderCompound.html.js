var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>CreateShaderCompound</title>\n\
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
</style><link rel=\"stylesheet\" href=\"si_cmds/css/en.css\" type=\"text/css\" /><script>$(document).ready(function() { yepnope.injectJs(\"./si_cmds/lib/utils.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>CreateShaderCompound</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">CreateShaderCompound</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v7.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>Creates a shader compound.</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = CreateShaderCompound( InputObj, [Name] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>The new shader compound node as a <a href=\"#!/url=./si_om/Shader.html\">Shader</a> or <a href=\"#!/url=./si_om/Texture.html\">Texture</a> object.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">InputObj		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Shaders to be compounded.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
If not specified, the user is prompted to make a selection.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Name of the new shader compound.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"\"			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to use the CreateShaderCompound command.\n\
*/\n\
NewScene(null, false);\n\
CreatePrim(\"Sphere\", \"MeshSurface\", null, null);\n\
// Create an Image Shader using its ProgID and nest it under the material\n\
CreateShaderFromProgID( \"Softimage.txt2d-image-explicit.1\", \n\
	\"Sources.Materials.DefaultLib.Scene_Material\", \"Image\");\n\
SIConnectShaderToCnxPoint(\"Sources.Materials.DefaultLib.Scene_Material.Image\", \n\
	\"Sources.Materials.DefaultLib.Scene_Material.Phong.diffuse\", false);\n\
// Create a shader compound containing the Phong Shader and automatically \n\
// exposing the Diffuse Port because there is a connection on it.\n\
CreateShaderCompound(\"Sources.Materials.DefaultLib.Scene_Material.Phong\", \"MyCompound\");\n\
// Create a Fractal Shader using its ProgID and nest it under the shader compound.\n\
CreateShaderFromProgID( \"Softimage.txt3d-fractal_v3.1\", \n\
	\"Sources.Materials.DefaultLib.Scene_Material.MyCompound\", \"Fractal\");\n\
SIConnectShaderToCnxPoint(\"Sources.Materials.DefaultLib.Scene_Material.MyCompound.Fractal\", \n\
	\"Sources.Materials.DefaultLib.Scene_Material.MyCompound.Phong.specular\", false);</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example demonstrates how to build a very simple shader compound.\n\
\'\n\
NewScene , false\n\
CreatePrim \"Torus\", \"MeshSurface\"\n\
\' Connect a Texture Grid shader to the Phong\'s Ambient property\n\
CreateShaderFromPreset \"Shaders\\Texture\\Grid.Preset\", _\n\
	\"Sources.Materials.DefaultLib.Scene_Material\"\n\
SIConnectShaderToCnxPoint \"Sources.Materials.DefaultLib.Scene_Material.Grid\", _\n\
	\"Sources.Materials.DefaultLib.Scene_Material.Phong.ambient\", False\n\
\' Connect a Gradient shader to the Texture Grid\'s Line Color property\n\
CreateShaderFromPreset \"Shaders\\Texture\\Gradient.Preset\",  _\n\
	\"Sources.Materials.DefaultLib.Scene_Material\"\n\
SIConnectShaderToCnxPoint \"Sources.Materials.DefaultLib.Scene_Material.Gradient\", _\n\
	\"Sources.Materials.DefaultLib.Scene_Material.Grid.line_color\", False\n\
\' Create a shader compound out of the Gradient and Grid shaders and expose some input ports\n\
\' (the output port was automatically created since the Grid was connected to the Phong\n\
CreateShaderCompound \"Sources.Materials.DefaultLib.Scene_Material.Gradient,\" _\n\
	+ \"Sources.Materials.DefaultLib.Scene_Material.Grid\"\n\
AddShaderCompoundPort \"Sources.Materials.DefaultLib.Scene_Material.ShaderCompound.Gradient.range_min\", _\n\
	\"Sources.Materials.DefaultLib.Scene_Material.ShaderCompound\"\n\
AddShaderCompoundPort \"Sources.Materials.DefaultLib.Scene_Material.ShaderCompound.Gradient.range_max\", _\n\
	\"Sources.Materials.DefaultLib.Scene_Material.ShaderCompound\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/CreateShaderFromPreset.html\">CreateShaderFromPreset</a> <a href=\"#!/url=./si_cmds/CreateShadersFromMaterialPreset.html\">CreateShadersFromMaterialPreset</a> <a href=\"#!/url=./si_cmds/CreateShaderFromCLSID.html\">CreateShaderFromCLSID</a> <a href=\"#!/url=./si_cmds/CreateShaderFromProgID.html\">CreateShaderFromProgID</a> <a href=\"#!/url=./si_cmds/NestShaders.html\">NestShaders</a> <a href=\"#!/url=./si_cmds/UnnestShaders.html\">UnnestShaders</a> <a href=\"#!/url=./si_cmds/AddShaderCompoundPort.html\">AddShaderCompoundPort</a> <a href=\"#!/url=./si_cmds/RemoveShaderCompoundPort.html\">RemoveShaderCompoundPort</a> <a href=\"#!/url=./si_cmds/MoveShaderCompoundPort.html\">MoveShaderCompoundPort</a> <a href=\"#!/url=./si_cmds/RenameShaderCompoundPort.html\">RenameShaderCompoundPort</a> <a href=\"#!/url=./si_cmds/ExportShaderCompound.html\">ExportShaderCompound</a> <a href=\"#!/url=./si_cmds/ImportShaderCompound.html\">ImportShaderCompound</a> <a href=\"#!/url=./si_cmds/ExplodeShaderCompound.html\">ExplodeShaderCompound</a> <a href=\"#!/url=./si_cmds/SetShaderCompoundPropertiesEx.html\">SetShaderCompoundPropertiesEx</a> <a href=\"#!/url=./si_cmds/GetShaderCompoundProperties.html\">GetShaderCompoundProperties</a> <a href=\"#!/url=./si_cmds/EditShaderCompoundPPGLogic.html\">EditShaderCompoundPPGLogic</a> <a href=\"#!/url=./si_om/ShaderContainer.CreateCompound.html\">ShaderContainer.CreateCompound</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";