var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>BlendClipsInTextureLayersWithPorts</title>\n\
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
            <h1>BlendClipsInTextureLayersWithPorts</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">BlendClipsInTextureLayersWithPorts</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Adds new texture layers to the ports to blend in the provided clips.<br /><br />\n\
If a source is provided, a clip is automatically created and connected.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = BlendClipsInTextureLayersWithPorts( ClipList, [InputObjs] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns the layers created as an <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a>.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ClipList		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of clips to blend in.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">InputObjs		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of shader connections to blend in new layers			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">NewScene , false\n\
\' Create a default cube, add a texture projection and apply a default Phong shader:\n\
Dim oBox\n\
Set oBox = ActiveSceneRoot.AddGeometry( \"Cube\", \"MeshSurface\" )\n\
CreateProjection oBox, , siTxtDefaultPlanarXY, , \"Texture_Projection\"\n\
ApplyShader , oBox\n\
\' Apply a second projection, offset it\n\
CreateProjection oBox, , siTxtDefaultPlanarXY, , \"Texture_Projection\"\n\
Translate \"Texture_Support1\", 3.32038834951456, -4.87670131554974E-17, 0.796452068099767, siRelative, siView, siObj, siXYZ\n\
Translate \"Texture_Support1\", -0.529657563043749, -2.59749993985792, 0.259749993985792, siRelative, siView, siObj, siXYZ\n\
\' First, add an image source.\n\
Dim oSourceObj, ImageFile\n\
ImageFile = Application.InstallationPath( siFactoryPath ) &amp; \"/Data/XSI_SAMPLES/Pictures/xsilogo.jpg\"\n\
SIAddImageSource ImageFile, \"XSIlogo\", oSourceObj\n\
\' Now create an image clip from the image source.\n\
Dim oClipObj \n\
set oClipObj = AddImageClip( oSourceObj, \"XSIlogo_Clip\" )\n\
\' Blend in the clip\n\
Dim result, item\n\
set result = BlendClipsInTextureLayersWithPorts(oClipObj, oBox.material &amp; \".Phong.diffuse\")\n\
for each item in result\n\
	logmessage \"Added layer \" &amp; item\n\
next \n\
\' Blending in a source automatically creates a clip\n\
set result = BlendClipsInTextureLayersWithPorts(oSourceObj, oBox.material &amp; \".Phong.ambient\")\n\
for each item in result\n\
	logmessage \"Added layer \" &amp; item\n\
next \n\
\' Change the blending mode of the newly added layer\n\
SetValue result(0) &amp; \".mode\", 4\n\
\' Change the texture projection\n\
Dim shader\n\
set shader = SIGetShaderOnCnxPoint( result(0) &amp; \".color\" )\n\
SetInstanceDataValue , shader &amp; \".tspace_id\", \"Texture_Projection1\"\n\
\'---------------------------------------------------------\n\
\' If you draw a region, you should see two Softimage logos shifted relative to each other.\n\
\' If you open up the texture layer editor or rendertree on the cube, you will see two layers,\n\
\' one bleneded into the ambient port and one into the diffuse port.\n\
\' Output from this script:\n\
\'INFO : \"Added layer Sources.DefaultLib.Material.Phong.XSIlogo_Clip_Layer\"\n\
\'INFO : \"Added layer Sources.DefaultLib.Material.Phong.XSIlogo_Layer\"\n\
\'---------------------------------------------------------</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/BlendClipsInTextureLayers.html\">BlendClipsInTextureLayers</a> <a href=\"#!/url=./si_cmds/BlendClipsInTextureLayersInsp.html\">BlendClipsInTextureLayersInsp</a> <a href=\"#!/url=./si_cmds/BlendClipsInTextureLayersWithPortsInsp.html\">BlendClipsInTextureLayersWithPortsInsp</a> <a href=\"#!/url=./si_cmds/BlendInTextureLayers.html\">BlendInTextureLayers</a> <a href=\"#!/url=./si_cmds/BlendInTextureLayersInsp.html\">BlendInTextureLayersInsp</a> <a href=\"#!/url=./si_cmds/BlendInTextureLayersWithPortsInsp.html\">BlendInTextureLayersWithPortsInsp</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";