var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>AddPresetTextureLayer</title>\n\
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
            <h1>AddPresetTextureLayer</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">AddPresetTextureLayer</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Adds a new texture layer on the input objects provided, connecting the specified \n\
shader to the layer.  See <a href=\"#!/url=./si_cmds/AddTextureLayer.html\">AddTextureLayer</a> for more details \n\
about layers.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = AddPresetTextureLayer( PresetObj, [InputObjs], [Name], [After], [Reference] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns the new <a href=\"#!/url=./si_om/TextureLayer.html\">TextureLayer</a> object, if one was created.</p></div>\n\
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
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
One of the <a href=\"#!/url=./si_cmds/ShaderPreset.html\">Shader Presets</a> representing the shader to attach		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">InputObjs		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of containers (shaders or materials) to which to add the texture layer.  Note that all containers must currently be contained in a single render tree. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Name to use for the new layer.  If an existing layer is being passed in, then this argument is ignored. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">After		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 True to insert the new texture layer after the reference layer.  False to insert it before.  If no reference layer, then True will add at the end of the container\'s list, False will add it at the start. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
True			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Reference		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a> or object		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/objectexpr.htm\">Reference texture layer</a>, to indicate where the newly-added layer should be located in the stack.  The layer will be inserted adjacent to (before or after) the reference layer.  If not specified, then the new layer will be added at the beginning or the end, depending on the value of the \"After\" argument. 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' Create a sphere, add a default material and texture projection\n\
NewScene , false\n\
set oSphere =  CreatePrim(\"Sphere\", \"MeshSurface\")\n\
ApplyShader , , , , siLetLocalMaterialsOverlap\n\
CreateProjection oSphere, siTxtPlanarXY, siTxtDefaultSpherical, \"Texture_Support\", \"Texture_Projection\"\n\
\' Add a new layer with an image shader\n\
Dim oLayer\n\
set oLayer = AddPresetTextureLayer(\"Image\", oSphere.material &amp; \".Phong\")\n\
logmessage \"Created Layer \" &amp; oLayer\n\
\' Add the diffuse port to the layer\n\
AddTextureLayerPorts oLayer, oSphere.material &amp; \".Phong.diffuse\"\n\
\' Add a layer with a cell shader\n\
set oLayer = AddPresetTextureLayer(\"Cell\", oSphere.material &amp; \".Phong\")\n\
logmessage \"Created Layer \" &amp; oLayer\n\
\' Make the cell shader\'s effect more pronounced\n\
SetValue oLayer &amp; \".weight\", 1\n\
\' Add the ambient port to the layer\n\
AddTextureLayerPorts oLayer, oSphere.material &amp; \".Phong.ambient\"\n\
\'-------------------------\n\
\' Output of script:\n\
\'\n\
\'INFO : \"Created Layer Sources.DefaultLib.Material.Phong.Image_Layer\"\n\
\'INFO : \"Created Layer Sources.DefaultLib.Material.Phong.Cell_Layer\"\n\
\'\n\
\' If you open the texture layer editor, you will find there are two layers, an Image layer\n\
\' affecting the diffuse component and a Cell shader affecting the ambient component.\n\
\' Rendering the sphere will give the sphere with an image, with a cell pattern on top.\n\
\'-------------------------</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/AddTextureLayer.html\">AddTextureLayer</a> <a href=\"#!/url=./si_cmds/RemoveTextureLayers.html\">RemoveTextureLayers</a> <a href=\"#!/url=./si_cmds/MoveTextureLayers.html\">MoveTextureLayers</a> <a href=\"#!/url=./si_cmds/AddTextureLayerPorts.html\">AddTextureLayerPorts</a> <a href=\"#!/url=./si_cmds/AddImageTextureLayer.html\">AddImageTextureLayer</a> <a href=\"#!/url=./si_cmds/AddClipTextureLayer.html\">AddClipTextureLayer</a> <a href=\"#!/url=./si_cmds/BlendInTextureLayers.html\">BlendInTextureLayers</a> <a href=\"#!/url=./si_om/Shader.CreateTextureLayer.html\">Shader.CreateTextureLayer</a> <a href=\"#!/url=./si_om/Shader.AddSharedTextureLayer.html\">Shader.AddSharedTextureLayer</a> <a href=\"#!/url=./si_om/Material.CreateTextureLayer.html\">Material.CreateTextureLayer</a> <a href=\"#!/url=./si_om/Material.AddSharedTextureLayer.html\">Material.AddSharedTextureLayer</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";