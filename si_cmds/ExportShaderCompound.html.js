var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ExportShaderCompound</title>\n\
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
            <h1>ExportShaderCompound</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ExportShaderCompound</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v7.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Exports a shader compound. Shader compounds can only be used outside the scene\n\
in which they are created if they are saved to disk in the XML-based format\n\
that defines shader compounds: .xsirtcompound (Softimage Render Tree Compound).\n\
<br /><br />\n\
By default, shader compounds are saved in text format and do not save any\n\
nested shaders embedded directly in the file, but rather reference them.\n\
However, if the nested shaders have not yet been exported themselves or their\n\
file cannot be found, they will be embedded in the .xsirtcompound file.\n\
<br /><br />\n\
Once you have exported a shader compound, you can import it and reference it\n\
in any scene, or distribute it. If you would like to protect your compound by\n\
saving it in an encoded format, you can change the default behavior by passing\n\
True to the Private argument.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = ExportShaderCompound( [Compound], FullPath, ForceEmbedded );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Nothing</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Compound		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Compound to export.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">FullPath		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Where to save the compound on disk.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ForceEmbedded		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
\n\
		True to force any nested shader compounds to be embedded inside the same exported \n\
		.xsirtcompound file, instead of being referenced, as is the usual case. \n\
		<br /><br />\n\
		Note: If any nested shaders have not been exported already (that is, if there is \n\
		no .xsirtcompound file on disk), they will be embedded, regardless of this setting.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to set up and export a shader compound containing another nested\n\
	shader compound, where the nested shader compound can be either embedded or referenced.\n\
*/\n\
// For readability, we are always saving to the user\'s RTCompounds directory\n\
var path = XSIUtils.BuildPath(\n\
	Application.InstallationPath(siUserPath),\n\
	\"Data\", \"RTCompounds\"\n\
);\n\
// Convenience function to create and export a shader compound (innerSC.xsirtcompound)\n\
// that we will reference/nest in the outerSC*.xsirtcompound shader compounds.\n\
function CreateInnerCompound()\n\
{\n\
	NewScene( null, false );\n\
	CreatePrim( \"Torus\", \"MeshSurface\" );\n\
	CreateShaderFromPreset( \"Shaders\\\\Texture\\\\Gradient.Preset\", \n\
		\"Sources.Materials.DefaultLib.Scene_Material\" );\n\
	CreateShaderFromPreset( \"Shaders\\\\Texture\\\\Grid.Preset\", \n\
		\"Sources.Materials.DefaultLib.Scene_Material\" );\n\
	SIConnectShaderToCnxPoint( \"Sources.Materials.DefaultLib.Scene_Material.Grid\", \n\
		\"Sources.Materials.DefaultLib.Scene_Material.Phong.ambient\", false );\n\
	SIConnectShaderToCnxPoint( \"Sources.Materials.DefaultLib.Scene_Material.Gradient\", \n\
		\"Sources.Materials.DefaultLib.Scene_Material.Grid.line_color\", false );\n\
	CreateShaderCompound( \"Sources.Materials.DefaultLib.Scene_Material.Gradient,\"\n\
		+ \"Sources.Materials.DefaultLib.Scene_Material.Grid\" );\n\
	ExportShaderCompound( \"Sources.Materials.DefaultLib.Scene_Material.ShaderCompound\", \n\
		path+\"\\\\innerSC.xsirtcompound\" );\n\
}\n\
// Convenience function to create and export two shader compounds (outerSCembedd*.xsirtcompound)\n\
// and outerSCreffed.xsirtcompound), both of which contain the nested shader compound created\n\
// with the CreateInnerCompound() function. This function can be called to export the shader\n\
// compound with either a referenced (default) nested shader, or an embedded nested shader.\n\
function CreateOuterCompound( in_embed )\n\
{\n\
	NewScene( null, false );\n\
	CreatePrim( \"Torus\", \"MeshSurface\" );\n\
	// This is where we reference and connect the exported shader compound already\n\
	// created in the CreateInnerCompound() function\n\
	ImportShaderCompound( \"Sources.Materials.DefaultLib.Scene_Material\", \n\
		path+\"\\\\innerSC.xsirtcompound\" );\n\
	SIConnectShaderToCnxPoint( \"Sources.Materials.DefaultLib.Scene_Material.ShaderCompound.ambient\", \n\
		\"Sources.Materials.DefaultLib.Scene_Material.Phong.ambient\", false );\n\
	CreateShaderFromPreset( \"Shaders\\\\Texture\\\\Fractal.Preset\", \n\
		\"Sources.Materials.DefaultLib.Scene_Material\" );\n\
	SIConnectShaderToCnxPoint( \"Sources.Materials.DefaultLib.Scene_Material.Fractal\", \n\
		\"Sources.Materials.DefaultLib.Scene_Material.Phong.specular\", false );\n\
	CreateShaderFromPreset( \"Shaders\\\\Texture\\\\Ripple.Preset\", \n\
		\"Sources.Materials.DefaultLib.Scene_Material\" );\n\
	SIConnectShaderToCnxPoint( \"Sources.Materials.DefaultLib.Scene_Material.Ripple\", \n\
		\"Sources.Materials.DefaultLib.Scene_Material.Phong.diffuse\", false );\n\
	CreateShaderCompound( \"Sources.Materials.DefaultLib.Scene_Material.ShaderCompound,\"\n\
		+ \"Sources.Materials.DefaultLib.Scene_Material.Fractal,\"\n\
		+ \"Sources.Materials.DefaultLib.Scene_Material.Ripple\" );\n\
	// Embedded or Referenced? This setting corresponds to the innerSC.xsirtcompound, which\n\
	// was imported and connected earlier in this function\n\
	if (in_embed) {\n\
		ExportShaderCompound( \"Sources.Materials.DefaultLib.Scene_Material.ShaderCompound1\", \n\
			path+\"\\\\outerSCembedd.xsirtcompound\", true );\n\
	} else {\n\
		ExportShaderCompound( \"Sources.Materials.DefaultLib.Scene_Material.ShaderCompound1\", \n\
			path+\"\\\\outerSCreffed.xsirtcompound\", false );\n\
	}\n\
}\n\
// Create a shader compound and save it disk\n\
CreateInnerCompound();\n\
// Create a shader compound which references the first one (innerSC.xsirtcompound)\n\
// and then export two versions: one referenced (outerSCreffed.xsirtcompound) and\n\
// the other embedded (outerSCembedd.xsirtcompound)\n\
CreateOuterCompound();\n\
CreateOuterCompound(true);</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/CreateShaderFromPreset.html\">CreateShaderFromPreset</a> <a href=\"#!/url=./si_cmds/CreateShadersFromMaterialPreset.html\">CreateShadersFromMaterialPreset</a> <a href=\"#!/url=./si_cmds/CreateShaderFromCLSID.html\">CreateShaderFromCLSID</a> <a href=\"#!/url=./si_cmds/CreateShaderFromProgID.html\">CreateShaderFromProgID</a> <a href=\"#!/url=./si_cmds/CreateShaderCompound.html\">CreateShaderCompound</a> <a href=\"#!/url=./si_cmds/NestShaders.html\">NestShaders</a> <a href=\"#!/url=./si_cmds/UnnestShaders.html\">UnnestShaders</a> <a href=\"#!/url=./si_cmds/AddShaderCompoundPort.html\">AddShaderCompoundPort</a> <a href=\"#!/url=./si_cmds/RemoveShaderCompoundPort.html\">RemoveShaderCompoundPort</a> <a href=\"#!/url=./si_cmds/MoveShaderCompoundPort.html\">MoveShaderCompoundPort</a> <a href=\"#!/url=./si_cmds/RenameShaderCompoundPort.html\">RenameShaderCompoundPort</a> <a href=\"#!/url=./si_cmds/ImportShaderCompound.html\">ImportShaderCompound</a> <a href=\"#!/url=./si_cmds/ExplodeShaderCompound.html\">ExplodeShaderCompound</a> <a href=\"#!/url=./si_cmds/SetShaderCompoundPropertiesEx.html\">SetShaderCompoundPropertiesEx</a> <a href=\"#!/url=./si_cmds/GetShaderCompoundProperties.html\">GetShaderCompoundProperties</a> <a href=\"#!/url=./si_cmds/EditShaderCompoundPPGLogic.html\">EditShaderCompoundPPGLogic</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";