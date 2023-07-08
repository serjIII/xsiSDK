var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>RegenerateMaps</title>\n\
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
            <h1>RegenerateMaps</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">RegenerateMaps</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Regenerates the specified RenderMaps. This is the scripting equivalent of\n\
clicking the Regenerate Map button in the RenderMap property editor. To add\n\
a RenderMap, use the \'<a href=\"#!/url=./si_cmds/AddProp.html\">AddProp</a> \"RenderMap\"\' command.<br /><br />\n\
RenderMaps allow you to \'bake\' complex texturing and rendertree information \n\
into a single texture image, which you can use for previewing textures in\n\
the textured viewing modes, creating textures for games and realtime\n\
rendering, or for generally speeding up rendering.<br /><br />\n\
Note: You cannot generate a rendermap for an object unless there is a texture\n\
projection attached to the image and the texture projection cannot be a spatial \n\
texture projection (use a UV projection instead).\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>RegenerateMaps( [Properties], [TileSize] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Properties		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of RenderMaps to regenerate. \n\
		RenderMaps are properties, for example, \"sphere.RenderMap\".\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">TileSize		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
\n\
		Increase or decrease the likelihood that satellite machines will be used in the render \n\
		(see <a href=\"http://softimage.wiki.softimage.com/xsidocs/rendermap_RenderMapAndRenderVertexTips.htm\">the Softimage user guide</a> \n\
		for more information about tiles). <br /><br />\n\
		Suggested values are 8, 16, 32, and 64. <br /><br />\n\
		Accepted values are in the range of 8 to 512 inclusive.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
32			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example creates a sphere with a rendermap, and then connects a rendermap \n\
\' using a UV projection to the sphere and regenerates the map.\n\
\'\n\
NewScene , false\n\
\' Add a sphere to the scene\n\
Set oSphere = CreatePrim( \"Sphere\", \"NurbsSurface\" )\n\
\' Create a rendermap on the sphere; the AddProp command returns the output \n\
\' object as an XSICollection of 1, so you can get the actual RenderMap as\n\
\' a Property object by resetting the object pointer to the first member\n\
\' of the returned collection\n\
AddProp \"RenderMap\", oSphere, , , oRMap\n\
Set oRMap = oRMap(0)\n\
\' Specify a destination directory and name for the new image file\n\
\' Note: You must specify the image filename with an extension\n\
oRMap.Parameters( \"imagefile\" ).Value = InstallationPath( siUserPath ) _\n\
			&amp; \"\\temp\\rendermap.pic\"\n\
\'\n\
\' Tip: You can also use the SetValue command instead of accessing the \n\
\' 	parameter through the object model:\n\
\' SetValue oSphere &amp; \".RenderMap.imagefile\", InstallationPath( siUserPath ) _\n\
\' 			&amp; \"\\temp\\rendermap.pic\"\n\
\'\n\
\' Add a texture projection to the sphere and attach the rendermap to it\n\
CreateProjection oSphere, siTxtUV, siTxtDefaultSpherical, sSupport, sProj\n\
SetInstanceDataValue , oRMap.Parameters( \"uvprop\" ), sProj\n\
\'\n\
\' Tip: You can also use the SetInstanceDataValue command instead of \n\
\' 	accessing the parameter through the object model:\n\
\' SetInstanceDataValue , oSphere &amp; \".RenderMap.uvprop\", sProj\n\
\'\n\
\' Regenerate the rendermap with a tile size of 16\n\
RegenerateMaps oRMap, 16</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/AddProp.html\">AddProp</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";