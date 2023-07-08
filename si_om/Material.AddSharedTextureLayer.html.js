var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Material.AddSharedTextureLayer</title>\n\
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
            <h1>Material.AddSharedTextureLayer</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Material.html\">Material</a>.AddSharedTextureLayer</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Adds an existing texture layer to the container.  The layer already belongs\n\
to at least one other texture layer container (either <a href=\"#!/url=./si_om/Shader.html\">Shader</a>\n\
or <a href=\"#!/url=./si_om/Material.html\">Material</a>).<br /><br />\n\
A texture layer is an object which simplifies layering of texture effects on top of shaders and\n\
materials. Each layer has a set of properties which describe its characteristics (such as color,\n\
mixing mode, weight) to specify how it will affect the shader ports it drives. The order\n\
that layers appear under a container indicates the order the layering is applied, similar to the\n\
way a \"mix N colors\" shader node works. Texture layer port objects (see\n\
<a href=\"#!/url=./si_om/TextureLayer.AddTextureLayerPort.html\">TextureLayer.AddTextureLayerPort</a>) are owned by layers, and are used to specify\n\
which shader ports the layer should affect.  <br /><br />\n\
A <a href=\"#!/url=./si_om/Shader.html\">Shader</a> can also be a texture layer container, and has the same set of related\n\
methods. \n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Material.AddSharedTextureLayer( Object in_varLayerToAdd, Boolean in_bAfter, Object in_varRefLayer );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Material.AddSharedTextureLayer( Layer, [After], [Reference] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Layer		</td>\n\
		<td><a href=\"#!/url=./si_om/TextureLayer.html\">TextureLayer</a> or <a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Texture layer to add to this container. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">After		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
\n\
		True to insert the new texture layer after the reference layer. False to insert\n\
		it before. If no reference layer, then True will add at the end of the container\'s list,\n\
		False will add it at the start. \n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
True			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Reference		</td>\n\
		<td><a href=\"#!/url=./si_om/TextureLayer.html\">TextureLayer</a> or <a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		Reference texture layer, to indicate where the newly-added layer should be\n\
		located in the stack. The layer will be inserted adjacent to (before or after) the\n\
		reference layer. If not specified, then the new layer will be added at the beginning or\n\
		the end, depending on the value of the following argument. \n\
			</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example shows how to create and share texture layers.  \n\
	It also shows how both Shaders and Materials can be texture \n\
	layer containers, and the same layer can drive ports on \n\
	each of them (if desired).\n\
*/\n\
oRoot = ActiveProject.ActiveScene.Root;\n\
oSph = oRoot.AddGeometry( \"Sphere\", \"MeshSurface\" );\n\
oMat = oSph.AddMaterial( \"Phong\" );\n\
oPhong = oMat.Shaders(0);\n\
// Add a layer to the Phong.\n\
oShared = oPhong.CreateTextureLayer( \"SharedLayer\" );\n\
// Add an unshared layer to the Material.\n\
oRough = oMat.CreateTextureLayer( \"Rough\" );\n\
// Add the first layer to the material, thereby sharing it.\n\
// We\'ll put it before the Rough layer.\n\
oMat.AddSharedTextureLayer( oShared, false, oRough );\n\
// Now for fun, let\'s create a Fractal, attach it to the\n\
// color input of the shared layer, and make it drive\n\
// both the Phong\'s diffuse and the Material\'s displacement.\n\
oParam = Application.Dictionary.GetObject( oShared + \".color\" );\n\
oFractal = oParam.ConnectFromPreset( \"Fractal\", siTextureShaderFamily );\n\
oDiffuse = oShared.AddTextureLayerPort( oPhong.Parameters( \"diffuse\" ) );\n\
oDispl = oShared.AddTextureLayerPort( oMat.Parameters( \"displacement\" ) );\n\
// Now let\'s explore what we have created...\n\
DumpTextureLayerContainer( oMat );\n\
function DumpTextureLayerContainer( in_cont )\n\
{\n\
	Application.LogMessage( \"CONTAINER: \" + in_cont.Name );\n\
	for ( var i = 0; i &lt; in_cont.TextureLayers.Count; i++ )\n\
	{\n\
		oTextureLayer = in_cont.TextureLayers(i);\n\
		DumpTextureLayer( oTextureLayer, i+1 );\n\
	}\n\
}\n\
function DumpTextureLayer( in_layer, in_index )\n\
{\n\
	Application.LogMessage( \"   Layer \" + in_index + \": \" + in_layer.Name );\n\
	oColorSrc = in_layer.color.source;\n\
	var empty;\n\
	if ( oColorSrc == empty )\n\
	{\n\
		Application.LogMessage( \"     Color: (\" + in_layer.Red.Value +\n\
						\",\" + in_layer.Green.Value +\n\
						\",\" + in_layer.Blue.Value + \")\" );\n\
	}\n\
	else\n\
	{\n\
		Application.LogMessage( \"     Color driven by: \" + oColorSrc.Name );\n\
	}\n\
	oPorts = in_layer.TextureLayerPorts;\n\
	count = oPorts.Count;\n\
	Application.LogMessage( \"     Layer drives:\" );\n\
	if ( count == 0 )\n\
		Application.LogMessage( \"       &lt;nothing&gt;\" );\n\
	else\n\
	{\n\
		for ( i = 0; i &lt; count; i++ )\n\
		{\n\
			Application.LogMessage( \"       \" + oPorts(i).Target.FullName );\n\
		}\n\
	}\n\
}\n\
// This example should log something like:\n\
//INFO : \"CONTAINER: Material\"\n\
//INFO : \"   Layer 1: SharedLayer\"\n\
//INFO : \"     Color driven by: Fractal\"\n\
//INFO : \"     Layer drives:\"\n\
//INFO : \"       sphere.Material.Phong.diffuse\"\n\
//INFO : \"       sphere.Material.Color2scalar.input\"\n\
//INFO : \"   Layer 2: Rough\"\n\
//INFO : \"     Color: (0.7,0.7,0.7)\"\n\
//INFO : \"     Layer drives:\"\n\
//INFO : \"       &lt;nothing&gt;\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example shows how to create and share texture layers.  \n\
\' It also shows how both Shaders and Materials can be texture \n\
\' layer containers, and the same layer can drive ports on each \n\
\' of them (if desired).\n\
\'\n\
set oRoot = ActiveProject.ActiveScene.Root\n\
set oSph = oRoot.AddGeometry( \"Sphere\", \"MeshSurface\" )\n\
set oMat = oSph.AddMaterial( \"Phong\" )\n\
set oPhong = oMat.Shaders(0)\n\
\' Add a layer to the Phong.\n\
set oShared = oPhong.CreateTextureLayer( \"SharedLayer\" )\n\
\' Add an unshared layer to the Material.\n\
set oRough = oMat.CreateTextureLayer( \"Rough\" )\n\
\' Add the first layer to the material, thereby sharing it.\n\
\' We\'ll put it before the Rough layer.\n\
oMat.AddSharedTextureLayer oShared, False, oRough\n\
\' Now for fun, let\'s create a Fractal, attach it to the\n\
\' color input of the shared layer, and make it drive\n\
\' both the Phong\'s diffuse and the Material\'s displacement.\n\
set oParam = Dictionary.GetObject( oShared &amp; \".color\" )\n\
set oFractal = oParam.ConnectFromPreset( \"Fractal\", siTextureShaderFamily )\n\
set oDiffuse = oShared.AddTextureLayerPort( oPhong.Parameters( \"diffuse\" ) )\n\
set oDispl = oShared.AddTextureLayerPort( oMat.Parameters( \"displacement\" ) )\n\
\' Now let\'s explore what we have created...\n\
DumpTextureLayerContainer oMat\n\
sub DumpTextureLayerContainer( in_cont )\n\
	Application.LogMessage \"CONTAINER: \" &amp; in_cont.Name\n\
	i = 1\n\
	for each oTextureLayer in in_cont.TextureLayers\n\
		DumpTextureLayer oTextureLayer, i\n\
		i = i + 1\n\
	next\n\
end sub\n\
sub DumpTextureLayer( in_layer, in_index )\n\
	Application.LogMessage \"   Layer \" &amp; in_index &amp; \": \" &amp; in_layer.Name\n\
	set oColorSrc = in_layer.color.source\n\
	if TypeName( oColorSrc ) = \"Nothing\" then\n\
		Application.LogMessage \"     Color: (\" &amp; in_layer.Red.Value &amp; _\n\
						\",\" &amp; in_layer.Green.Value &amp; _\n\
						\",\" &amp; in_layer.Blue.Value &amp; \")\"\n\
	else\n\
		Application.LogMessage \"     Color driven by: \" &amp; oColorSrc.Name\n\
	end if\n\
	set oPorts = in_layer.TextureLayerPorts\n\
	count = oPorts.Count\n\
	if count = 0 then\n\
		Application.LogMessage \"     &lt;layer driving no ports&gt;\"\n\
	else\n\
		Application.LogMessage \"     Layer drives:\"\n\
		for i = 0 to count - 1\n\
			Application.LogMessage \"       \" &amp; oPorts(i).Target.FullName\n\
		next				\n\
	end if\n\
end sub\n\
\' This example should log something like:\n\
\'INFO : \"CONTAINER: Material\"\n\
\'INFO : \"   Layer 1: SharedLayer\"\n\
\'INFO : \"     Color driven by: Fractal\"\n\
\'INFO : \"     Layer drives:\"\n\
\'INFO : \"       sphere.Material.Phong.diffuse\"\n\
\'INFO : \"       sphere.Material.Color2scalar.input\"\n\
\'INFO : \"   Layer 2: Rough\"\n\
\'INFO : \"     Color: (0.7,0.7,0.7)\"\n\
\'INFO : \"     &lt;layer driving no ports&gt;\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/AddTextureLayer.html\">AddTextureLayer</a> <a href=\"#!/url=./si_om/Material.CreateTextureLayer.html\">Material.CreateTextureLayer</a> <a href=\"#!/url=./si_om/Shader.CreateTextureLayer.html\">Shader.CreateTextureLayer</a> <a href=\"#!/url=./si_om/Shader.AddSharedTextureLayer.html\">Shader.AddSharedTextureLayer</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";