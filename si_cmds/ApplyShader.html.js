var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ApplyShader</title>\n\
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
            <h1>ApplyShader</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ApplyShader</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Creates and connects a shader to the material property of an object, group, layer, partition or cluster. If the object \n\
does not own a material property, but rather inherits it, then one is created and added to the object. For 3D objects \n\
you can control whether the material is added locally or on branch by using the PropagationType argument; by default \n\
the material is added locally. Groups, Layers, Partitions, and Clusters do not support both local and branch properties. \n\
Materials on clusters are always added locally; and for Groups, Layers, and Partitions, materials are always added in \n\
branch mode. <br /><br />\n\
Note: If you use the ApplyShader command on an object that already has either a local or branch material property, the \n\
material property is deleted and replaced with a new material property.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>ApplyShader( [PresetObj], [InputObjs], [Name], [PropagationType], [ActionWhenLocalMaterialsOverlap] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PresetObj		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a> or a preset object (for example, an object obtained from <a href=\"#!/url=./si_cmds/SIGetPreset.html\">SIGetPreset</a>)		</td>\n\
		<td>\n\
\n\
		One of the <a href=\"#!/url=./si_cmds/ShaderPreset.html\">Shader Presets</a> representing the shader you want to connect. \n\
		<br /><br />\n\
		Warning: The default value (\"Phong\") does not work with some objects. For instance, if the target\n\
		object is a light, then Preset must be specified since phongs don\'t apply to a light.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"Phong\" (Phong shader)			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">InputObjs		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 The <a href=\"#!/url=./files/listexpr.htm\">list</a> of objects to connect the shader to.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Name of the shader 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Default shader name			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PropagationType		</td>\n\
		<td><a href=\"#!/url=./si_om/siBranchFlag.html\">siBranchFlag</a>		</td>\n\
		<td>\n\
 Propagation type of the shader, node or branch 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siUnspecified			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ActionWhenLocalMaterialsOverlap		</td>\n\
		<td><a href=\"#!/url=./si_om/siActionWhenLocalMaterialsOverlap.html\">siActionWhenLocalMaterialsOverlap</a>		</td>\n\
		<td>\n\
 What to do when the material is applied on a cluster which overlaps with another.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siPromptUser (unless user pref dictates otherwise)			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example demonstrates how to apply different kinds of shaders\n\
\' to scene objects. It also shows how you can set individual values\n\
\' on your shader material once it is applied.\n\
\'\n\
NewScene , false\n\
\' Get the default pass\n\
Set oDefPass = GetValue( \"Passes.Default_Pass\" )\n\
\' Create a sphere and apply a default shader to it (since the\n\
\' sphere is already selected we don\'t need to specify it as \n\
\' an input object)\n\
Set oSphere = CreatePrim( \"Sphere\", \"MeshSurface\" )\n\
ApplyShader\n\
\' Tweak the color values on the sphere\'s material using the Shader\n\
\' parameter shortcuts \"diffuse\" and \"ambient\"\n\
Set oPhong = oSphere.Material.Shaders( \"Phong\" )\n\
oPhong.diffuse.Parameters( \"red\" ).Value = 0.9\n\
oPhong.diffuse.Parameters( \"green\" ).Value = 0.5\n\
oPhong.ambient.Parameters( \"green\" ).Value = 0.7\n\
\' View the results in a rendered frame. (You can see the sphere\n\
\' has a magenta color)\n\
RenderPasses oDefPass, 1, 1\n\
\' Create a default light and apply a preset shader to it\n\
Set oLight = GetPrimLight()\n\
Translate oLight, 8, 3.0, 3, siAbsolute, siView, siObj, siXYZ\n\
ApplyShader \"Light\\Fast_light_effects\", oLight\n\
\' View the results in a rendered frame. (You can see the sphere\n\
\' now has the default texture wrapped around it)\n\
RenderPasses oDefPass, 1, 1\n\
\' Create a cube\n\
Set oCube = CreatePrim( \"Cube\", \"MeshSurface\" )\n\
Scale oCube, 0.3, 0.3, 0.3, siAbsolute, siParent, siObj, siXYZ\n\
Translate oCube, 3.5, -2.5, 4, siAbsolute, siView, siObj, siXYZ\n\
\' Add the cube to a new layer \n\
CreateLayer , \"CubeLayer\", oCube, oLayer\n\
\' Apply a shader to the layer and tweak its values\n\
ApplyShader \"Illumination\\Blinn_shading\", oLayer\n\
Set oBlinn = oLayer.Material.Shaders( \"Blinn_shading\" )\n\
oBlinn.ambient.Parameters( \"green\").Value = 0.9\n\
\' View the results in a rendered frame. (Now there is a small\n\
\' cube next to the sphere and on its top the sphere\'s texture \n\
\' is reflected)\n\
RenderPasses oDefPass, 1, 1</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/AddObjectsToShader.html\">AddObjectsToShader</a> <a href=\"#!/url=./si_cmds/RemoveObjectsFromShader.html\">RemoveObjectsFromShader</a> <a href=\"#!/url=./si_cmds/RemoveShaderFromCnxPoint.html\">RemoveShaderFromCnxPoint</a> <a href=\"#!/url=./si_cmds/RemoveAllShadersFromCnxPoint.html\">RemoveAllShadersFromCnxPoint</a> <a href=\"#!/url=./si_cmds/SIConnectShaderToCnxPoint.html\">SIConnectShaderToCnxPoint</a> <a href=\"#!/url=./si_cmds/ReplaceShaderWithPreset.html\">ReplaceShaderWithPreset</a> <a href=\"#!/url=./si_cmds/ReplaceShaderWithProgID.html\">ReplaceShaderWithProgID</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";