var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>TextureLayer.RemoveTextureLayerPort</title>\n\
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
            <h1>TextureLayer.RemoveTextureLayerPort</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/TextureLayer.html\">TextureLayer</a>.RemoveTextureLayerPort</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Removes a <a href=\"#!/url=./si_om/TextureLayerPort.html\">TextureLayerPort</a> from the texture layer. This actually\n\
disconnects it and causes the layer to no longer affect that shader property.\n\
<br /><br />\n\
It is valid to have texture layers which have no port connections, these empty layers act\n\
like placeholders, and do not affect the rendered result in any way.  They will maintain their\n\
ordering in the containers in which they appear.  Of course, new port connections\n\
can be added to them at any time.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>TextureLayer.RemoveTextureLayerPort( Object in_varPort );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>TextureLayer.RemoveTextureLayerPort( Port );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Port		</td>\n\
		<td><a href=\"#!/url=./si_om/TextureLayerPort.html\">TextureLayerPort</a> or <a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Texture layer port to remove from this texture layer. 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// This example shows creation of texture layer ports,\n\
// plus enumerating and removing them.\n\
oRoot = ActiveProject.ActiveScene.Root;\n\
oSph = oRoot.AddGeometry( \"Sphere\", \"MeshSurface\" );\n\
oMat = oSph.AddMaterial( \"Phong\" );\n\
oPhong = oMat.Shaders(0);\n\
// Add a layer at the end.\n\
oLayer = oPhong.CreateTextureLayer( \"DirtLayer\" );\n\
// Add some texture layer port connections on this layer.\n\
oPorts = new Array(3);\n\
oPorts[0] = oLayer.AddTextureLayerPort( oPhong.parameters( \"ambient\" ) );\n\
oPorts[1] = oLayer.AddTextureLayerPort( oPhong.parameters( \"diffuse\" ) );\n\
oPorts[2] = oLayer.AddTextureLayerPort( oPhong.parameters( \"specular\" ) );\n\
Application.LogMessage( \"Created \" + oLayer.TextureLayerPorts.count + \" ports.\" );\n\
for ( i = 0; i &lt; oLayer.TextureLayerPorts.count; i++ )\n\
{\n\
	oPort = oLayer.TextureLayerPorts(i);\n\
	Application.LogMessage( (i+1) + \": \" + oPort );\n\
}\n\
oLayer.RemoveTextureLayerPort( oPorts[1] );\n\
oLayer.RemoveTextureLayerPort( oLayer.fullname + \".\" + oPorts[2].name );\n\
count = oLayer.TextureLayerPorts.count;\n\
Application.LogMessage( \"Only \" + count + \" remain(s) after removal.\" );\n\
for ( i = 0; i &lt; count; i++ )\n\
{\n\
	Application.LogMessage( (i+1) + \": \" + oLayer.TextureLayerPorts.item(i) );\n\
}\n\
// This example should log something like:\n\
//INFO : \"Created 3 ports.\"\n\
//INFO : \"1: sphere.Material.Phong.DirtLayer.ambient\"\n\
//INFO : \"2: sphere.Material.Phong.DirtLayer.diffuse\"\n\
//INFO : \"3: sphere.Material.Phong.DirtLayer.specular\"\n\
//INFO : \"Only 1 remain(s) after removal.\"\n\
//INFO : \"1: sphere.Material.Phong.DirtLayer.ambient\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' This example shows creation of texture layer ports,\n\
\' plus enumerating and removing them.\n\
set oRoot = ActiveProject.ActiveScene.Root\n\
set oSph = oRoot.AddGeometry( \"Sphere\", \"MeshSurface\" )\n\
set oMat = oSph.AddMaterial( \"Phong\" )\n\
set oPhong = oMat.Shaders(0)\n\
\' Add a layer at the end.\n\
set oLayer = oPhong.CreateTextureLayer( \"DirtLayer\" )\n\
\' Add some texture layer port connections on this layer.\n\
dim oPorts(2)\n\
set oPorts(0) = oLayer.AddTextureLayerPort( oPhong.parameters( \"ambient\" ) )\n\
set oPorts(1) = oLayer.AddTextureLayerPort( oPhong.parameters( \"diffuse\" ) )\n\
set oPorts(2) = oLayer.AddTextureLayerPort( oPhong.parameters( \"specular\" ) )\n\
logmessage \"Created \" &amp; oLayer.TextureLayerPorts.count &amp; \" ports.\"\n\
i = 1\n\
for each oPort in oLayer.TextureLayerPorts\n\
	logmessage i &amp; \": \" &amp; oPort\n\
	i = i + 1\n\
next\n\
oLayer.RemoveTextureLayerPort oPorts(1)\n\
oLayer.RemoveTextureLayerPort oLayer.fullname &amp; \".\" &amp; oPorts(2).name\n\
count = oLayer.TextureLayerPorts.count\n\
logmessage \"Only \" &amp; count &amp; \" remain(s) after removal.\"\n\
for i = 0 to count - 1\n\
	logmessage i + 1 &amp; \": \" &amp; oLayer.TextureLayerPorts.item(i)\n\
next\n\
\' This example should log something like:\n\
\'INFO : \"Created 3 ports.\"\n\
\'INFO : \"1: sphere.Material.Phong.DirtLayer.ambient\"\n\
\'INFO : \"2: sphere.Material.Phong.DirtLayer.diffuse\"\n\
\'INFO : \"3: sphere.Material.Phong.DirtLayer.specular\"\n\
\'INFO : \"Only 1 remain(s) after removal.\"\n\
\'INFO : \"1: sphere.Material.Phong.DirtLayer.ambient\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/DeleteObj.html\">DeleteObj</a> <a href=\"#!/url=./si_om/TextureLayer.AddTextureLayerPort.html\">TextureLayer.AddTextureLayerPort</a> <a href=\"#!/url=./si_om/TextureLayer.TextureLayerPorts.html\">TextureLayer.TextureLayerPorts</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";