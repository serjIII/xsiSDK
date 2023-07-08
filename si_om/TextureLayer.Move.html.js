var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>TextureLayer.Move</title>\n\
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
            <h1>TextureLayer.Move</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/TextureLayer.html\">TextureLayer</a>.Move</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Moves texture layers up or down in the ordered stacks of layers. This considers \n\
the overall order of layers in other containers (<a href=\"#!/url=./si_om/Shader.html\">Shader</a> or \n\
<a href=\"#!/url=./si_om/Material.html\">Material</a>) that share the given texture layers, so that the \n\
ordering is always consistent.  If you move a layer up or down, its ordering will \n\
potentially also change in other containers, if it is shared. This is to prevent \n\
cycles from occurring, for example if shader Phong had layers A,B but shader \n\
Lambert shared those layers in the order B,A. \n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>TextureLayer.Move( Int32 in_lOffset );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>TextureLayer.Move( [Offset] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Offset		</td>\n\
		<td><a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
 \n\
		Amount to move the layer. A negative value moves it up in the list, positive \n\
		moves it down.  The absolute value is the number of steps to move in that \n\
		direction.\n\
		<br /><br />\n\
		Any value is valid, if more offset steps are requested than are actually available,\n\
		the layer will simply move to the end (for positive offsets) or beginning (for negative\n\
		offsets) of all the containers where it exists.  So specifying a very large value\n\
		of offset is a good way to set a layer to be the final layer in all containers where\n\
		it appears.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
-1			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// This example shows moving texture layers up\n\
// and down within their containers.\n\
oRoot = ActiveProject.ActiveScene.Root;\n\
oSph = oRoot.AddGeometry( \"Sphere\", \"MeshSurface\" );\n\
oMat = oSph.AddMaterial( \"Phong\" );\n\
oPhong = oMat.Shaders(0);\n\
// Add three layers.\n\
oLayers = new Array(3);\n\
oLayers[0] = oPhong.CreateTextureLayer( \"A\" );\n\
oLayers[1] = oPhong.CreateTextureLayer( \"B\" );\n\
oLayers[2] = oPhong.CreateTextureLayer( \"C\" );\n\
Application.LogMessage( \"Created \" + oPhong.TextureLayers.count + \" layers.\" );\n\
DumpLayerOrder( oPhong );\n\
oLayers[2].Move( -2 );\n\
Application.LogMessage( \"Moved layer C up two.\" );\n\
DumpLayerOrder( oPhong );\n\
oLayers[0].Move( 1 );\n\
Application.LogMessage( \"Moved layer A down one.\" );\n\
DumpLayerOrder( oPhong );\n\
function DumpLayerOrder( in_container )\n\
{\n\
	for ( i = 0; i &lt; in_container.TextureLayers.count; i++ )\n\
	{\n\
		oLayer = in_container.TextureLayers(i);\n\
		Application.LogMessage( (i+1) + \": \" + oLayer.fullname );\n\
	}\n\
}\n\
// This example should log something like:\n\
//INFO : \"Created 3 layers.\"\n\
//INFO : \"1: sphere.Material.Phong.A\"\n\
//INFO : \"2: sphere.Material.Phong.B\"\n\
//INFO : \"3: sphere.Material.Phong.C\"\n\
//INFO : \"Moved layer C up two.\"\n\
//INFO : \"1: sphere.Material.Phong.C\"\n\
//INFO : \"2: sphere.Material.Phong.A\"\n\
//INFO : \"3: sphere.Material.Phong.B\"\n\
//INFO : \"Moved layer A down one.\"\n\
//INFO : \"1: sphere.Material.Phong.C\"\n\
//INFO : \"2: sphere.Material.Phong.B\"\n\
//INFO : \"3: sphere.Material.Phong.A\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' This example shows moving texture layers up\n\
\' and down within their containers.\n\
set oRoot = ActiveProject.ActiveScene.Root\n\
set oSph = oRoot.AddGeometry( \"Sphere\", \"MeshSurface\" )\n\
set oMat = oSph.AddMaterial( \"Phong\" )\n\
set oPhong = oMat.Shaders(0)\n\
\' Add three layers.\n\
dim oLayers(2)\n\
set oLayers(0) = oPhong.CreateTextureLayer( \"A\" )\n\
set oLayers(1) = oPhong.CreateTextureLayer( \"B\" )\n\
set oLayers(2) = oPhong.CreateTextureLayer( \"C\" )\n\
logmessage \"Created \" &amp; oPhong.TextureLayers.count &amp; \" layers.\"\n\
DumpLayerOrder oPhong\n\
oLayers(2).Move -2\n\
logmessage \"Moved layer C up two.\"\n\
DumpLayerOrder oPhong\n\
oLayers(0).Move 1\n\
logmessage \"Moved layer A down one.\"\n\
DumpLayerOrder oPhong\n\
sub DumpLayerOrder( in_container )\n\
	dim i, oLayer\n\
	i = 1\n\
	for each oLayer in in_container.TextureLayers\n\
		logmessage i &amp; \": \" &amp; oLayer.fullname\n\
		i = i + 1\n\
	next\n\
end sub\n\
\' This example should log something like:\n\
\'INFO : \"Created 3 layers.\"\n\
\'INFO : \"1: sphere.Material.Phong.A\"\n\
\'INFO : \"2: sphere.Material.Phong.B\"\n\
\'INFO : \"3: sphere.Material.Phong.C\"\n\
\'INFO : \"Moved layer C up two.\"\n\
\'INFO : \"1: sphere.Material.Phong.C\"\n\
\'INFO : \"2: sphere.Material.Phong.A\"\n\
\'INFO : \"3: sphere.Material.Phong.B\"\n\
\'INFO : \"Moved layer A down one.\"\n\
\'INFO : \"1: sphere.Material.Phong.C\"\n\
\'INFO : \"2: sphere.Material.Phong.B\"\n\
\'INFO : \"3: sphere.Material.Phong.A\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/MoveTextureLayers.html\">MoveTextureLayers</a> <a href=\"#!/url=./si_om/Material.TextureLayers.html\">Material.TextureLayers</a> <a href=\"#!/url=./si_om/Shader.TextureLayers.html\">Shader.TextureLayers</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";