var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Shader.TextureLayers</title>\n\
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
            <h1>Shader.TextureLayers</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Shader.html\">Shader</a>.TextureLayers</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns a <a href=\"#!/url=./si_om/TextureLayerCollection.html\">TextureLayerCollection</a> containing each <a href=\"#!/url=./si_om/TextureLayer.html\">TextureLayer</a> \n\
object owned by the shader.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
TextureLayerCollection rtn = Shader.TextureLayers;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This JScript example demonstrates creating texture layers on\n\
	a shader, plus enumerating and removing them.\n\
*/\n\
oRoot = ActiveProject.ActiveScene.Root;\n\
oSph = oRoot.AddGeometry( \"Sphere\", \"MeshSurface\" );\n\
oMat = oSph.AddMaterial( \"Phong\" );\n\
oPhong = oMat.Shaders(0);\n\
// Add a layer at the end (since there are no others the \"After\"\n\
// flag is irrelevant).\n\
oLayers = new Array(3);\n\
oLayers[0] = oPhong.CreateTextureLayer( \"B\", true );\n\
// Add another layer before the other one.\n\
oLayers[1] = oPhong.CreateTextureLayer( \"A\", false, oLayers[0] );\n\
// Create a third layer at the very start.\n\
oLayers[2] = oPhong.CreateTextureLayer( \"base\", false );\n\
Application.LogMessage( \"Created \" + oPhong.TextureLayers.Count + \" layers.\" );\n\
for ( i = 0; i &lt; oPhong.TextureLayers.count; i++ )\n\
{\n\
	oLayer = oPhong.TextureLayers(i);\n\
	Application.LogMessage( (i+1) + \": \" + oLayer );\n\
}\n\
oPhong.RemoveTextureLayer( oLayers[1] );\n\
oPhong.RemoveTextureLayer( oPhong.FullName + \".\" + oLayers[2].Name );\n\
count = oPhong.TextureLayers.Count;\n\
Application.LogMessage( \"Only \" + count + \" remains after removal.\" );\n\
for ( i = 0; i &lt; count; i++ )\n\
{\n\
	Application.LogMessage( (i+1) + \": \" + oPhong.TextureLayers.Item(i) );\n\
}\n\
// This example should log something like:\n\
//INFO : \"Created 3 layers.\"\n\
//INFO : \"1: sphere.Material.Phong.base\"\n\
//INFO : \"2: sphere.Material.Phong.A\"\n\
//INFO : \"3: sphere.Material.Phong.B\"\n\
//INFO : \"Only 1 remains after removal.\"\n\
//INFO : \"1: sphere.Material.Phong.B\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This VBScript example demonstrates creating texture layers on\n\
\' a shader, plus enumerating and removing them.\n\
\'\n\
set oRoot = ActiveProject.ActiveScene.Root\n\
set oSph = oRoot.AddGeometry( \"Sphere\", \"MeshSurface\" )\n\
set oMat = oSph.AddMaterial( \"Phong\" )\n\
set oPhong = oMat.Shaders(0)\n\
\' Add a layer at the end (since there are no others the \"After\"\n\
\' flag is irrelevant).\n\
dim oLayers(2)\n\
set oLayers(0) = oPhong.CreateTextureLayer( \"B\", True )\n\
\' Add another layer before the other one.\n\
set oLayers(1) = oPhong.CreateTextureLayer( \"A\", False, oLayers(0) )\n\
\' Create a third layer at the very start.\n\
set oLayers(2) = oPhong.CreateTextureLayer( \"base\", False )\n\
LogMessage \"Created \" &amp; oPhong.TextureLayers.Count &amp; \" layers.\"\n\
i = 1\n\
for each oLayer in oPhong.TextureLayers\n\
	LogMessage i &amp; \": \" &amp; oLayer\n\
	i = i + 1\n\
next\n\
oPhong.RemoveTextureLayer oLayers(1)\n\
oPhong.RemoveTextureLayer oPhong.FullName &amp; \".\" &amp; oLayers(2).Name\n\
count = oPhong.TextureLayers.Count\n\
LogMessage \"Only \" &amp; count &amp; \" remains after removal.\"\n\
for i = 0 to count - 1\n\
	LogMessage i + 1 &amp; \": \" &amp; oPhong.TextureLayers.Item(i)\n\
next\n\
\' This example should log something like:\n\
\'INFO : \"Created 3 layers.\"\n\
\'INFO : \"1: sphere.Material.Phong.base\"\n\
\'INFO : \"2: sphere.Material.Phong.A\"\n\
\'INFO : \"3: sphere.Material.Phong.B\"\n\
\'INFO : \"Only 1 remains after removal.\"\n\
\'INFO : \"1: sphere.Material.Phong.B\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Material.TextureLayers.html\">Material.TextureLayers</a> <a href=\"#!/url=./si_om/Material.CreateTextureLayer.html\">Material.CreateTextureLayer</a> <a href=\"#!/url=./si_om/Material.AddSharedTextureLayer.html\">Material.AddSharedTextureLayer</a> <a href=\"#!/url=./si_om/Shader.CreateTextureLayer.html\">Shader.CreateTextureLayer</a> <a href=\"#!/url=./si_om/Shader.AddSharedTextureLayer.html\">Shader.AddSharedTextureLayer</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";