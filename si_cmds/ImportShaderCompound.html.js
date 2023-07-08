var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ImportShaderCompound</title>\n\
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
            <h1>ImportShaderCompound</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ImportShaderCompound</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v7.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>Imports a shader compound.</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = ImportShaderCompound( [Container], Path );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/Shader.html\">Shader</a> or <a href=\"#!/url=./si_om/Texture.html\">Texture</a> object.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Container		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Container to hold imported shader compound.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Path		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Location of shader compound on disk.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
# This example demonstrates how to set up shader compound, export it to disk, and\n\
# then import and connect it in a fresh scene.\n\
#\n\
app = Application\n\
from win32com.client import constants as xsi\n\
# For readability, we are always saving to the user\'s RTCompounds directory\n\
path = XSIUtils.BuildPath(\n\
	app.InstallationPath(xsi.siUserPath),\n\
	\"Data\", \"RTCompounds\"\n\
)\n\
XSIUtils.EnsureFolderExists(path, 0)\n\
# Convenience function to create and export a shader compound (innerSC.xsirtcompound)\n\
# that we will reference/nest in another shader compound.\n\
def CreateInnerCompound() :\n\
	app.NewScene( None, 0 )\n\
	app.CreatePrim( \"Torus\", \"MeshSurface\" )\n\
	app.CreateShaderFromPreset( \"Shaders\\\\Texture\\\\Gradient.Preset\", \n\
		\"Sources.Materials.DefaultLib.Scene_Material\" )\n\
	app.CreateShaderFromPreset( \"Shaders\\\\Texture\\\\Grid.Preset\", \n\
		\"Sources.Materials.DefaultLib.Scene_Material\" )\n\
	app.SIConnectShaderToCnxPoint( \"Sources.Materials.DefaultLib.Scene_Material.Grid\", \n\
		\"Sources.Materials.DefaultLib.Scene_Material.Phong.ambient\", 0 )\n\
	app.SIConnectShaderToCnxPoint( \"Sources.Materials.DefaultLib.Scene_Material.Gradient\", \n\
		\"Sources.Materials.DefaultLib.Scene_Material.Grid.line_color\", 0 )\n\
	app.CreateShaderCompound( \"Sources.Materials.DefaultLib.Scene_Material.Gradient,\"\n\
		+ \"Sources.Materials.DefaultLib.Scene_Material.Grid\" )\n\
	app.ExportShaderCompound( \"Sources.Materials.DefaultLib.Scene_Material.ShaderCompound\", \n\
		path+\"\\\\innerSC.xsirtcompound\" )\n\
# Create the shader compound to be nested and save it to disk\n\
CreateInnerCompound()\n\
# Set up a new scene with a torus again\n\
app.NewScene( None, 0 )\n\
app.CreatePrim( \"Torus\", \"MeshSurface\" )\n\
# Import the shader compound previously exported in the CreateInnerCompound() function\n\
app.ImportShaderCompound( \"Sources.Materials.DefaultLib.Scene_Material\", \n\
	path+\"\\\\innerSC.xsirtcompound\" )\n\
# Now connect the newly imported shader compound \n\
app.SIConnectShaderToCnxPoint( \"Sources.Materials.DefaultLib.Scene_Material.ShaderCompound.ambient\", \n\
	\"Sources.Materials.DefaultLib.Scene_Material.Phong.ambient\", 0 )\n\
# Add some more shader connections\n\
app.CreateShaderFromPreset( \"Shaders\\\\Texture\\\\Fractal.Preset\", \n\
	\"Sources.Materials.DefaultLib.Scene_Material\" )\n\
app.SIConnectShaderToCnxPoint( \"Sources.Materials.DefaultLib.Scene_Material.Fractal\", \n\
	\"Sources.Materials.DefaultLib.Scene_Material.Phong.specular\", 0 )\n\
app.CreateShaderFromPreset( \"Shaders\\\\Texture\\\\Ripple.Preset\", \n\
	\"Sources.Materials.DefaultLib.Scene_Material\" )\n\
app.SIConnectShaderToCnxPoint( \"Sources.Materials.DefaultLib.Scene_Material.Ripple\", \n\
	\"Sources.Materials.DefaultLib.Scene_Material.Phong.diffuse\", 0 )\n\
# Create a new shader compound which will have shaders and the newly imported shader compound\n\
app.CreateShaderCompound( \"Sources.Materials.DefaultLib.Scene_Material.ShaderCompound,\"\n\
	+ \"Sources.Materials.DefaultLib.Scene_Material.Fractal,\"\n\
	+ \"Sources.Materials.DefaultLib.Scene_Material.Ripple\" )</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/CreateShaderFromPreset.html\">CreateShaderFromPreset</a> <a href=\"#!/url=./si_cmds/CreateShadersFromMaterialPreset.html\">CreateShadersFromMaterialPreset</a> <a href=\"#!/url=./si_cmds/CreateShaderFromCLSID.html\">CreateShaderFromCLSID</a> <a href=\"#!/url=./si_cmds/CreateShaderFromProgID.html\">CreateShaderFromProgID</a> <a href=\"#!/url=./si_cmds/CreateShaderCompound.html\">CreateShaderCompound</a> <a href=\"#!/url=./si_cmds/NestShaders.html\">NestShaders</a> <a href=\"#!/url=./si_cmds/UnnestShaders.html\">UnnestShaders</a> <a href=\"#!/url=./si_cmds/AddShaderCompoundPort.html\">AddShaderCompoundPort</a> <a href=\"#!/url=./si_cmds/RemoveShaderCompoundPort.html\">RemoveShaderCompoundPort</a> <a href=\"#!/url=./si_cmds/MoveShaderCompoundPort.html\">MoveShaderCompoundPort</a> <a href=\"#!/url=./si_cmds/RenameShaderCompoundPort.html\">RenameShaderCompoundPort</a> <a href=\"#!/url=./si_cmds/ExportShaderCompound.html\">ExportShaderCompound</a> <a href=\"#!/url=./si_cmds/ExplodeShaderCompound.html\">ExplodeShaderCompound</a> <a href=\"#!/url=./si_cmds/SetShaderCompoundPropertiesEx.html\">SetShaderCompoundPropertiesEx</a> <a href=\"#!/url=./si_cmds/GetShaderCompoundProperties.html\">GetShaderCompoundProperties</a> <a href=\"#!/url=./si_cmds/EditShaderCompoundPPGLogic.html\">EditShaderCompoundPPGLogic</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";