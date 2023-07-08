var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PolygonFace.TriangleSubIndexArray</title>\n\
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
            <h1>PolygonFace.TriangleSubIndexArray</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/PolygonFace.html\">PolygonFace</a>.TriangleSubIndexArray <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns a 1-dimensional packed <a href=\"#!/url=./files/Array.htm\">Array</a> of triangulation descriptions \n\
corresponding to the tesselation of the polygon. The polygon is tesselated into \n\
(NbPoints - 2) triangles, and 3 indices in the range (0..NbPoints-1) are returned \n\
for each triangle. Each index triplet describes a subtriangle of the polygon, and \n\
the indices correspond to the vertex or node ordering within the polygon.\n\
<br /><br />\n\
Notice that the triangulation of a polygon may change accordingly to the deformation\n\
of the geometry.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Object rtn = PolygonFace.TriangleSubIndexArray;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to describe the triangulation of some polygons.\n\
*/\n\
NewScene( null, false );\n\
var SphereGeom = Application.ActiveSceneRoot.AddGeometry(\"Sphere\", \"MeshSurface\").ActivePrimitive.Geometry;\n\
var Polygons = SphereGeom.Polygons;\n\
for(i = 0; i &lt; Polygons.Count; i++)\n\
{\n\
	var Polygon = Polygons.Item(i);\n\
	var NbTriangles = Polygon.NbPoints-2;\n\
	var PolygonVertices = Polygon.Vertices;\n\
	var PolygonNodes = Polygon.Nodes;\n\
	var TriangleSubIndices = Polygon.TriangleSubIndexArray.toArray();\n\
	for(j = 0; j &lt; NbTriangles; j++)\n\
	{\n\
		Application.LogMessage(\"SubTriangle \" + j + \" of Polygon \" + i + \" correspond to vertices (\" + \n\
			PolygonVertices.Item(TriangleSubIndices[j*3]).Index + \", \" +\n\
			PolygonVertices.Item(TriangleSubIndices[j*3+1]).Index + \", \" +\n\
			PolygonVertices.Item(TriangleSubIndices[j*3+2]).Index + \") and nodes (\" +\n\
			PolygonNodes.Item(TriangleSubIndices[j*3]).Index + \", \" +\n\
			PolygonNodes.Item(TriangleSubIndices[j*3+1]).Index + \", \" +\n\
			PolygonNodes.Item(TriangleSubIndices[j*3+2]).Index + \").\");\n\
	}\n\
}\n\
// Expected results:\n\
//INFO : SubTriangle 0 of Polygon 0 correspond to vertices (9, 2, 0) and nodes (0, 1, 2).\n\
//INFO : SubTriangle 0 of Polygon 1 correspond to vertices (2, 9, 10) and nodes (3, 4, 5).\n\
//INFO : SubTriangle 1 of Polygon 1 correspond to vertices (2, 10, 3) and nodes (3, 5, 6).\n\
//INFO : SubTriangle 0 of Polygon 2 correspond to vertices (3, 10, 11) and nodes (7, 8, 9).\n\
//INFO : SubTriangle 1 of Polygon 2 correspond to vertices (3, 11, 4) and nodes (7, 9, 10).\n\
//etc.</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/PolygonFace.Vertices.html\">PolygonFace.Vertices</a> <a href=\"#!/url=./si_om/PolygonFace.Nodes.html\">PolygonFace.Nodes</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";