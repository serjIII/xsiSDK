var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>AddTextureLayer</title>\n\
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
            <h1>AddTextureLayer</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">AddTextureLayer</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Adds a texture layer to one or more containers (a container can be either a shader or a material). The command does\n\
some error checking, such as preventing layers from being added in a way that would introduce cycles between various containers,\n\
and preventing adding layers to containers contained in different render trees. <br /><br />\n\
A texture layer is an object which simplifies layering of shader effects on top of shaders and materials.  Each layer has a set of\n\
properties which describe its characteristics (such as color, mixing mode, scale factor) to specify how it will affect the\n\
shader ports it drives.  The order that layers appear under a container indicates the order the layering is applied, similar to the\n\
way a \"mix N colors\" shader node works.  Texture layer port objects (see <a href=\"#!/url=./si_cmds/AddTextureLayerPorts.html\">AddTextureLayerPorts</a> command) are owned by\n\
layers, and are used to specify which shader ports the layer should affect. </p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = AddTextureLayer( [Object], [InputObjs], [Name], [After], [Reference] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Object		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a> or object		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/objectexpr.htm\">Texture layer</a> to add to the container(s). If not specified, then a new texture layer is created to add. 		</td>\n\
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
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example creates two shaders in a simple render tree, and applies\n\
\' texture layers to them, illustrating inserting before/after, sharing layers\n\
\' between containers, and other fun things.\n\
\' In particular, it builds the following stacks of layers (in a slightly\n\
\' convoluted way, to show various features of the AddTextureLayer command)...\n\
\'\n\
\' Phong      Fractal\n\
\'   A           A\n\
\'   B           D\n\
\'   C           E\n\
\'   D\n\
\'\n\
option explicit\n\
dim oSph, oPhong, oFractal, oLyr(4)\n\
\' Build our shaders (a Phong and a Fractal), which will be the \"texture\n\
\' layer containers\" that will each be able to hold a stack of layers.\n\
NewScene , False\n\
set oSph = CreatePrim( \"Sphere\", \"MeshSurface\" )\n\
set oPhong = SIApplyShader( \"Phong\", oSph )\n\
set oFractal = BlendInPresetsInsp( \"Fractal\", , , True, siReplaceNoBlend, False, False, True )\n\
\' Now create and add all the layers, as indicated above.\n\
\' Add \'D\' to (the end of) the first container.\n\
set oLyr(3) = AddTextureLayer( , oPhong, \"D\", True )\n\
\' Add \'A\' to both containers at the start.\n\
set oLyr(0) = AddTextureLayer( , oPhong &amp; \",\" &amp; oFractal, \"A\", False )\n\
\' Insert \'B\' after \'A\'.\n\
set oLyr(1) = AddTextureLayer( , oPhong, \"B\", True, oLyr(0) )\n\
\' Insert \'C\' before \'D\'.\n\
set oLyr(2) = AddTextureLayer( , oPhong, \"C\", False, oLyr(3) )\n\
\' Add \'E\' to the end of the second container.\n\
set oLyr(4) = AddTextureLayer( , oFractal, \"E\", True )\n\
\' Add existing layer \'D\' to the second container, before \'E\'.\n\
AddTextureLayer oLyr(3), oFractal, , False, oLyr(4)\n\
PrintTextureLayersInContainer oPhong\n\
PrintTextureLayersInContainer oFractal\n\
sub PrintTextureLayersInContainer( in_cont )\n\
	dim oStack, oItem, oStr\n\
	oStr = \"Texture Layers in Container: \" &amp; in_cont &amp; vbCrLf\n\
	set oStack = EnumElements( in_cont &amp; \".TextureLayers\" )\n\
	for each oItem in oStack\n\
		oStr = oStr &amp; \"    \" &amp; oItem.name &amp; vbCrLf\n\
	next\n\
	logmessage oStr\n\
end sub\n\
\'\n\
\' The output from the example should look something like this:\n\
\'\n\
\'INFO : \"Texture Layers in Container: sphere.Material.Phong\n\
\'    A\n\
\'    B\n\
\'    C\n\
\'    D\n\
\'\n\
\'INFO : \"Texture Layers in Container: sphere.Material.Phong.Fractal\n\
\'    A\n\
\'    D\n\
\'    E\n\
\'</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/RemoveTextureLayers.html\">RemoveTextureLayers</a> <a href=\"#!/url=./si_cmds/MoveTextureLayers.html\">MoveTextureLayers</a> <a href=\"#!/url=./si_cmds/AddTextureLayerPorts.html\">AddTextureLayerPorts</a> <a href=\"#!/url=./si_cmds/AddImageTextureLayer.html\">AddImageTextureLayer</a> <a href=\"#!/url=./si_cmds/AddClipTextureLayer.html\">AddClipTextureLayer</a> <a href=\"#!/url=./si_cmds/AddPresetTextureLayer.html\">AddPresetTextureLayer</a> <a href=\"#!/url=./si_om/Shader.CreateTextureLayer.html\">Shader.CreateTextureLayer</a> <a href=\"#!/url=./si_om/Shader.AddSharedTextureLayer.html\">Shader.AddSharedTextureLayer</a> <a href=\"#!/url=./si_om/Material.CreateTextureLayer.html\">Material.CreateTextureLayer</a> <a href=\"#!/url=./si_om/Material.AddSharedTextureLayer.html\">Material.AddSharedTextureLayer</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";