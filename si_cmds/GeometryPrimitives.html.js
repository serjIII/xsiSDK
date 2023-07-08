var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Geometry Primitives</title>\n\
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
            <h1>Geometry Primitives</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Geometry Primitives</h2>\n\
\n\
<div>\n\
	<p>These primitive presets can be used with either primitive-creating functions (<a href=\"#!/url=./si_om/X3DObject.AddPrimitive.html\">X3DObject.AddPrimitive</a> method, <a href=\"#!/url=./si_cmds/GetPrim.html\">GetPrim</a> and <a href=\"#!/url=./si_cmds/SIGetPrim.html\">SIGetPrim</a> commands) or geometry-creating functions (<a href=\"#!/url=./si_om/X3DObject.AddGeometry.html\">X3DObject.AddGeometry</a> method, <a href=\"#!/url=./si_cmds/CreatePrim.html\">CreatePrim</a> and <a href=\"#!/url=./si_cmds/DrawPrimitiveTool.html\">DrawPrimitiveTool</a>).</p>\n\
<div class=\"tip\">\n\
<table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<td class=\"label\">Note</td>\n\
		<td class=\"emph\">See <a href=\"#!/url=./si_cmds/PrimPreset.html\">Primitive Presets</a> for list of the possible types of primitives. Also see <a href=\"#!/url=./si_cmds/AlphabeticalListOfAllPrimitives.html#\">Alphabetical Listing of All Primitive Presets</a> for a complete list of available primitive types.</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
</div>\n\
\n\
<div><table class=\"values\">\n\
	<tr>\n\
		<th>Preset</th>\n\
		<th>Primitives</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Cone</td>\n\
		<td><a name=\"Cone\"></a><a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/cone.html\">Cone</a>s can be <a href=\"#!/url=./si_om/PolygonMesh.html\">PolygonMesh</a>es, <a href=\"#!/url=./si_om/NurbsSurfaceMesh.html\">NurbsSurfaceMesh</a>es, <a href=\"#!/url=./si_om/PointCloudGeometry.html\">PointCloudGeometry</a> objects, or implicit objects (non-renderable shapes commonly used to define bounding volumes for envelopes, particles, etc.)<br /><br />		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Cube</td>\n\
		<td><a name=\"Cube\"></a><a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/cube.html\">Cube</a>s can be <a href=\"#!/url=./si_om/PolygonMesh.html\">PolygonMesh</a>es, <a href=\"#!/url=./si_om/NurbsSurfaceMesh.html\">NurbsSurfaceMesh</a>es, <a href=\"#!/url=./si_om/PointCloudGeometry.html\">PointCloudGeometry</a> objects, or implicit objects (non-renderable shapes commonly used to define bounding volumes for envelopes, particles, etc.)<br /><br />		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Cylinder</td>\n\
		<td><a name=\"Cylinder\"></a><a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/cylinder.html\">Cylinder</a>s can be <a href=\"#!/url=./si_om/PolygonMesh.html\">PolygonMesh</a>es, <a href=\"#!/url=./si_om/NurbsSurfaceMesh.html\">NurbsSurfaceMesh</a>es, <a href=\"#!/url=./si_om/PointCloudGeometry.html\">PointCloudGeometry</a> objects, or implicit objects (non-renderable shapes commonly used to define bounding volumes for envelopes, particles, etc.)<br /><br />		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Disc</td>\n\
		<td><a name=\"Disc\"></a><a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/disc.html\">Disc</a>s can be <a href=\"#!/url=./si_om/PolygonMesh.html\">PolygonMesh</a>es, <a href=\"#!/url=./si_om/NurbsSurfaceMesh.html\">NurbsSurfaceMesh</a>es, <a href=\"#!/url=./si_om/PointCloudGeometry.html\">PointCloudGeometry</a> objects, or implicit objects (non-renderable shapes commonly used to define bounding volumes for envelopes, particles, etc.)<br /><br />		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Dodecahedron</td>\n\
		<td><a name=\"Dodecahedron\"></a><a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/dodecahedron.html\">Dodecahedron</a>s are <a href=\"#!/url=./si_om/PolygonMesh.html\">PolygonMesh</a>es.<br /><br />		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Grid</td>\n\
		<td><a name=\"Grid\"></a><a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/grid.html\">Grid</a>s can be <a href=\"#!/url=./si_om/PolygonMesh.html\">PolygonMesh</a>es, <a href=\"#!/url=./si_om/NurbsSurfaceMesh.html\">NurbsSurfaceMesh</a>es, <a href=\"#!/url=./si_om/PointCloudGeometry.html\">PointCloudGeometry</a> objects, or implicit objects (non-renderable shapes commonly used to define bounding volumes for envelopes, particles, etc.)<br /><br />		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Icosahedron</td>\n\
		<td><a name=\"Icosahedron\"></a><a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/icosahedron.html\">Icosahedron</a>s are <a href=\"#!/url=./si_om/PolygonMesh.html\">PolygonMesh</a>es.<br /><br />		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Null</td>\n\
		<td><a name=\"Null\"></a><a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/null.html\">Null</a>s are objects that have no geometry, but do have a position in space. They are useful for organizing scenes into hierarchies and when used as control objects in a character rig.<br /><br />		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Octahedron</td>\n\
		<td><a name=\"Octahedron\"></a><a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/octahedron.html\">Octahedron</a>s are <a href=\"#!/url=./si_om/PolygonMesh.html\">PolygonMesh</a>es.<br /><br />		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Rhombicosidodecahedron</td>\n\
		<td><a name=\"Rhombicosidodecahedron\"></a>Rhombicosidodecahedrons are <a href=\"#!/url=./si_om/PolygonMesh.html\">PolygonMesh</a>es.<br /><br />		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SoccerBall</td>\n\
		<td><a name=\"SoccerBall\"></a>Soccer Balls are <a href=\"#!/url=./si_om/PolygonMesh.html\">PolygonMesh</a>es.<br /><br />		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Sphere</td>\n\
		<td><a name=\"Sphere\"></a><a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/sphere.html\">Sphere</a>s can be <a href=\"#!/url=./si_om/PolygonMesh.html\">PolygonMesh</a>es, <a href=\"#!/url=./si_om/NurbsSurfaceMesh.html\">NurbsSurfaceMesh</a>es, <a href=\"#!/url=./si_om/PointCloudGeometry.html\">PointCloudGeometry</a> objects, or implicit objects (non-renderable shapes commonly used to define bounding volumes for envelopes, particles, etc.)<br /><br />		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Tetrahedron</td>\n\
		<td><a name=\"Tetrahedron\"></a><a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/tetrahedron.html\">Tetrahedron</a>s are <a href=\"#!/url=./si_om/PolygonMesh.html\">PolygonMesh</a>es.<br /><br />		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Text</td>\n\
		<td><a name=\"Text\"></a><a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/text.html\">3D Text</a> information is immediately converted to curves which can be optionally converted to planar or extruded <a href=\"#!/url=./si_om/PolygonMesh.html\">PolygonMesh</a>es. Strictly speaking, text is not a true type of geometric object in XSI but can still be created using the geometry-creating <a href=\"#!/url=./si_om/X3DObject.AddGeometry.html\">X3DObject.AddGeometry</a> method and the <a href=\"#!/url=./si_cmds/CreatePrim.html\">CreatePrim</a> and <a href=\"#!/url=./si_cmds/DrawPrimitiveTool.html\">DrawPrimitiveTool</a> commands. Also see the <a href=\"#!/url=./si_cmds/CreateMeshText.html\">CreateMeshText</a> command.<br /><br />		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Torus</td>\n\
		<td><a name=\"Torus\"></a><a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/torus.html\">Torus</a>es can be <a href=\"#!/url=./si_om/PolygonMesh.html\">PolygonMesh</a>es, <a href=\"#!/url=./si_om/NurbsSurfaceMesh.html\">NurbsSurfaceMesh</a>es, <a href=\"#!/url=./si_om/PointCloudGeometry.html\">PointCloudGeometry</a> objects, or implicit objects (non-renderable shapes commonly used to define bounding volumes for envelopes, particles, etc.)<br /><br />		</td>\n\
	</tr>\n\
</table>\n\
<br />\n\
\n\
</div>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";