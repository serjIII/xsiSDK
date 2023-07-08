var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>RemoveTextureLayers</title>\n\
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
            <h1>RemoveTextureLayers</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">RemoveTextureLayers</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Removes a list of texture layers from a container (shader or material). If no container is provided, then it removes\n\
the layer(s) from all containers, effectively deleting them. </p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>RemoveTextureLayers( [InputObjs], [Container] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">InputObjs		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of layers which are to be removed from a container. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Container		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a> or object		</td>\n\
		<td>\n\
 The <a href=\"#!/url=./files/objectexpr.htm\">container</a> from which to remove the layers (if it currently contains them). If not specified, then the layers will be deleted from all containers in which they are found. 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example creates two shaders in a simple render tree, and applies\n\
\' texture layers to them.  Then it removes some of the layers, illustrating\n\
\' the RemoveTextureLayers command.\n\
\' In particular, it builds the following stacks of layers.\n\
\'\n\
\' Phong      Fractal\n\
\'   A           A\n\
\'   B           B\n\
\'   C           C\n\
\'\n\
option explicit\n\
dim oSph, oPhong, oFractal, oLyr(2)\n\
\' Build our shaders (a Phong and a Fractal), which will be the \"texture\n\
\' layer containers\" that will each be able to hold a stack of layers.\n\
NewScene , False\n\
set oSph = CreatePrim( \"Sphere\", \"MeshSurface\" )\n\
set oPhong = SIApplyShader( \"Phong\", oSph )\n\
set oFractal = BlendInPresetsInsp( \"Fractal\", , , True, siReplaceNoBlend, False, False, True )\n\
\' Now create and add all the layers, as indicated above.\n\
\' Add \'A\', \'B\' and \'C\' to both containers at the end.\n\
set oLyr(0) = AddTextureLayer( , oPhong &amp; \",\" &amp; oFractal, \"A\", True )\n\
set oLyr(1) = AddTextureLayer( , oPhong &amp; \",\" &amp; oFractal, \"B\", True )\n\
set oLyr(2) = AddTextureLayer( , oPhong &amp; \",\" &amp; oFractal, \"C\", True )\n\
\'\n\
\' Now start removing.  First we\'ll remove layer \'A\' from just one\n\
\' of the containers.\n\
RemoveTextureLayers oLyr(0), oPhong(0)\n\
\' Now we\'ll remove layer \'B\' from all containers which hold it.\n\
RemoveTextureLayers oLyr(1)\n\
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
\'INFO : Texture Layers in Container: sphere.Material.Phong\n\
\'    C\n\
\'\n\
\'INFO : Texture Layers in Container: sphere.Material.Phong.Fractal\n\
\'    A\n\
\'    C\n\
\'</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/AddTextureLayer.html\">AddTextureLayer</a> <a href=\"#!/url=./si_cmds/MoveTextureLayers.html\">MoveTextureLayers</a> <a href=\"#!/url=./si_cmds/AddTextureLayerPorts.html\">AddTextureLayerPorts</a> <a href=\"#!/url=./si_om/Shader.RemoveTextureLayer.html\">Shader.RemoveTextureLayer</a> <a href=\"#!/url=./si_om/Material.RemoveTextureLayer.html\">Material.RemoveTextureLayer</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";