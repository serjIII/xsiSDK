var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>X3DObject.AddGeometry</title>\n\
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
            <h1>X3DObject.AddGeometry</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a>.AddGeometry</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Creates and adds a new geometry as child of the X3DObject. For example, you can add \n\
a new NURBS cube to the scene by using \'ActiveSceneRoot.AddGeometry \"Cube\", \"NurbsSurface\"\'.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>X3DObject X3DObject.AddGeometry( Object in_geomPreset, Object in_convPreset, String in_name );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = X3DObject.AddGeometry( Preset, [Type], [Name] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Preset		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		One of the presets for <a href=\"#!/url=./si_cmds/GeometryPrimitives.html#\">Geometry Primitives</a> \n\
		or <a href=\"#!/url=./si_cmds/ImplicitPrimitives.html#\">Implicit Primitives</a> (for example, \n\
		\"Sphere\", \"Torus\", \"Disc\", etc.). \n\
		<br /><br />\n\
		Note: If you specify a geometry type in the Type argument, you can only use\n\
		primitive presets that can support the specified geometry as listed below.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Type		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Type of geometry.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Implicit object created			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\"><empty>					</empty></td>\n\
					<td>Implicit only, no geometry. Supports all <a href=\"#!/url=./si_cmds/PrimPreset.html\">Primitive Presets</a>.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">NurbsCurve					</td>\n\
					<td>NURBS curve geometry. Supports only Circle, Spiral, Square, and Text primitives.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">MeshSurface					</td>\n\
					<td>Polygon mesh geometry. Supports only Cone, Cube, Cylinder, Disc, Grid, Sphere, Torus, Dodecahedron, Icosahedron, Octahedron, and Tetrahedron primitives.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">NurbsSurface					</td>\n\
					<td>NURBS surface mesh geometry. Supports only Cone, Cube, Cylinder, Disc, Grid, Sphere, and Torus primitives.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">PointCloud					</td>\n\
					<td><a href=\"#!/url=./si_om/PointCloudGeometry.html\">PointCloudGeometry</a>. Supports only Cone, Cube, Cylinder, Disc, Grid, Sphere, and Torus primitives.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Name of child		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">oRoot = Application.ActiveSceneRoot;\n\
oMeshSphere = oRoot.AddGeometry( \"Sphere\", \"MeshSurface\" );\n\
oNurbsSphere = oRoot.AddGeometry( \"Sphere\", \"NurbsSurface\" );\n\
oNurbsArc = oRoot.AddGeometry( \"Arc\", \"NurbsCurve\" );\n\
// Create an implicit object, which is the same as calling AddPrimitive()\n\
oGrid = oRoot.AddGeometry( \"Arc\" );</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">set oRoot = Application.ActiveProject.ActiveScene.Root\n\
set oMeshSphere = oRoot.AddGeometry( \"Sphere\", \"MeshSurface\" )\n\
set oNurbsSphere = oRoot.AddGeometry( \"Sphere\", \"NurbsSurface\" )\n\
set oNurbsArc = oRoot.AddGeometry( \"Arc\", \"NurbsCurve\" )\n\
\' Create an implicit object, which is the same as calling AddPrimitive()\n\
set oGrid = oRoot.AddGeometry( \"Arc\" )</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/CreatePrim.html\">CreatePrim</a> <a href=\"#!/url=./si_om/X3DObject.AddPrimitive.html\">X3DObject.AddPrimitive</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";