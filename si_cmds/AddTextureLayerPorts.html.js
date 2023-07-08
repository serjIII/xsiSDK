var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>AddTextureLayerPorts</title>\n\
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
            <h1>AddTextureLayerPorts</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">AddTextureLayerPorts</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Adds texture layer ports (shader connections) to a texture layer. These indicate what shader ports are being\n\
driven by the layer. If the layer has ports added to it from containers it is currently not part of, it will be added to\n\
these containers (at the correct place in the stack, according to the order dependencies). </p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = AddTextureLayerPorts( [InputObj], [InputObjs] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns the newly-created ports as an <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a>.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">InputObj		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a> or object		</td>\n\
		<td>\n\
 The <a href=\"#!/url=./files/objectexpr.htm\">layer</a> to which to add new port connections. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">InputObjs		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of targets (ports on shaders or materials) to which to add texture layer port connections (that is, to be driven by the given layer).  Note that if a target is specified on a (valid) container which currently does not nest the layer, the layer will be added to that container (see <a href=\"#!/url=./si_cmds/AddTextureLayer.html\">AddTextureLayer</a> command). 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection.			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example creates two shaders in a simple render tree, and applies\n\
\' texture layers to one of them.  Then it adds port connections to that\n\
\' layer, indicating what shader ports the layer should affect.\n\
\' In particular, it builds the following stack of layers.\n\
\'\n\
\' Phong\n\
\'   A\n\
\'   B\n\
\'\n\
option explicit\n\
dim oSph, oPhong, oMat, oLyr(1), oPorts, oPort\n\
\' Build our shaders (a Phong and a Fractal), which will be the \"texture\n\
\' layer containers\" that will each be able to hold a stack of layers.\n\
NewScene , False\n\
set oSph = CreatePrim( \"Sphere\", \"MeshSurface\" )\n\
set oPhong = SIApplyShader( \"Phong\", oSph )\n\
\' Now create and add all the layers, as indicated above.\n\
\' Add \'A\' and \'B\' to the Phong at the end.\n\
set oLyr(0) = AddTextureLayer( , oPhong, \"A\", True )\n\
set oLyr(1) = AddTextureLayer( , oPhong, \"B\", True )\n\
\'\n\
\' Now start adding port connections, indicating what these layers will\n\
\' affect.\n\
\' Start by making layer \'A\' affect ambient and diffuse on the Phong.\n\
set oPorts = AddTextureLayerPorts( oLyr(0), oPhong &amp; \".ambient,\" &amp; oPhong &amp; \".diffuse\" )\n\
for each oPort in oPorts\n\
	logmessage \"Created port: \" &amp; oPort\n\
next\n\
\' Now let\'s add some ports on the \'B\' layer, which affect the Phong\'s\n\
\' diffuse and specular, but also affect the material\'s environment.  We\n\
\' have not added the layer explicitly to the material texture layer\n\
\' container, so it will be done implicitly by this command.\n\
set oMat = oPhong(0).parent\n\
set oPorts = AddTextureLayerPorts( oLyr(1), _\n\
			oPhong &amp; \".specular,\" &amp; _\n\
			oPhong &amp; \".diffuse,\" &amp; _\n\
			oMat &amp; \".environment\" )\n\
for each oPort in oPorts\n\
	logmessage \"Created port: \" &amp; oPort\n\
next\n\
PrintTextureLayersAndPortsInContainer oPhong\n\
PrintTextureLayersAndPortsInContainer oMat\n\
sub PrintTextureLayersAndPortsInContainer( in_cont )\n\
	dim oLayerStack, oLayer, oPortList, oPort, oStr\n\
	oStr = \"Texture Layers in Container: \" &amp; in_cont &amp; vbCrLf\n\
	set oLayerStack = EnumElements( in_cont &amp; \".TextureLayers\" )\n\
	for each oLayer in oLayerStack\n\
		oStr = oStr &amp; \"    \" &amp; oLayer.name &amp; \" -- has ports:\" &amp; vbCrLf\n\
		set oPortList = EnumElements( in_cont &amp; \".TextureLayers.\" &amp; oLayer.name &amp; \".ports\" )\n\
		for each oPort in oPortList\n\
			oStr = oStr &amp; \"      \" &amp; oPort.name &amp; vbCrLf\n\
		next\n\
	next\n\
	logmessage oStr\n\
end sub\n\
\'\n\
\' The output from the example should look something like this:\n\
\'\n\
\'INFO : \"Created port: sphere.Material.Phong.A.ports.ambient\"\n\
\'INFO : \"Created port: sphere.Material.Phong.A.ports.diffuse\"\n\
\'INFO : \"Created port: sphere.Material.Phong.B.ports.specular\"\n\
\'INFO : \"Created port: sphere.Material.Phong.B.ports.diffuse\"\n\
\'INFO : \"Created port: sphere.Material.Phong.B.ports.environment\"\n\
\'INFO : \"Texture Layers in Container: sphere.Material.Phong\n\
\'    A -- has ports:\n\
\'      ambient\n\
\'      diffuse\n\
\'    B -- has ports:\n\
\'      specular\n\
\'      diffuse\n\
\'      Environment\n\
\'\n\
\'INFO : \"Texture Layers in Container: sphere.Material\n\
\'    B -- has ports:\n\
\'      specular\n\
\'      diffuse\n\
\'      Environment\n\
\'</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/AddTextureLayer.html\">AddTextureLayer</a> <a href=\"#!/url=./si_cmds/RemoveTextureLayers.html\">RemoveTextureLayers</a> <a href=\"#!/url=./si_cmds/MoveTextureLayers.html\">MoveTextureLayers</a> <a href=\"#!/url=./si_om/TextureLayer.AddTextureLayerPort.html\">TextureLayer.AddTextureLayerPort</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";