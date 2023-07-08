var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Geometry.GetClosestLocations</title>\n\
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
            <h1>Geometry.GetClosestLocations</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Geometry.html\">Geometry</a>.GetClosestLocations <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns a <a href=\"#!/url=./si_om/PointLocatorData.html\">PointLocatorData</a> object containing the closest surface locations\n\
from the specified input positions. By default, input positions have to be defined in the object\'s \n\
local space reference.\n\
<br /><br />\n\
Some aspects of the closest locations computation such as the reference pose\n\
or the method (closest surface, closest vertex or knot, ...) can be set up\n\
using <a href=\"#!/url=./si_om/Geometry.SetupPointLocatorQueries.html\">Geometry.SetupPointLocatorQueries</a>. This setup will\n\
affect all subsequent calls to GetClosestLocations and to \n\
<a href=\"#!/url=./si_om/Geometry.GetClosestLocationsWithinRadius.html\">Geometry.GetClosestLocationsWithinRadius</a>.\n\
<br /><br />\n\
When you call this method an acceleration cache is automatically created.\n\
See <a href=\"#!/url=./si_om/Geometry.SetupPointLocatorQueries.html\">Geometry.SetupPointLocatorQueries</a> for more information.\n\
<br /><br />\n\
Notice that the \"closest distance\" relationship may change relative to the spatial \n\
reference of the geometry and the input positions. See\n\
<a href=\"#!/url=./si_om/Geometry.SetupPointLocatorQueries.html\">Geometry.SetupPointLocatorQueries</a> for more information. \n\
<br /><br />\n\
Notice that the returned point locators can be evaluated on any Geometry\n\
instance having the same topology.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>PointLocatorData Geometry.GetClosestLocations( Object in_pPositions );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = Geometry.GetClosestLocations( Positions );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/PointLocatorData.html\">PointLocatorData</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Positions		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a>		</td>\n\
		<td>\n\
An array of <a href=\"#!/url=./files/Double.htm\">Double</a>s, either formatted as a 1D array of \n\
	packed XYZ triplets, or as a 2D array of XYZ triplets.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	Example using PointLocatorData to find the closest mesh sphere vertex from a Null\n\
*/\n\
NewScene();\n\
var NullObj = GetPrim(\"Null\", null, null, null);\n\
Translate(NullObj, -2.0, 8.0, 5.0, siRelative, siView, siObj, siXYZ);\n\
var SphereGeom = CreatePrim(\"Sphere\", \"MeshSurface\").ActivePrimitive.Geometry;\n\
var ClosestPointLocator = SphereGeom.GetClosestLocations(NullObj.Kinematics.Global.Transform.GetTranslationValues2());\n\
var ClosestPosition = SphereGeom.EvaluatePositions(ClosestPointLocator).toArray();\n\
var TriangleVertices = SphereGeom.GetTriangleVertexIndexArray(ClosestPointLocator).toArray();\n\
var TriangleWeights = SphereGeom.GetTriangleWeightArray(ClosestPointLocator).toArray();\n\
Application.LogMessage(\"The closest position on the mesh sphere from the Null is (\"\n\
	+ ClosestPosition[0] + \", \" + ClosestPosition[1] + \", \" + ClosestPosition[2] + \")\");\n\
Application.LogMessage(\"which corresponds to the triangle made of vertices (\"\n\
	+ TriangleVertices[0] + \", \" + TriangleVertices[1] + \", \" + TriangleVertices[2] + \").\");\n\
Application.LogMessage(\"The barycentric weight relatively to each triangle vertex is (\"\n\
	+ TriangleWeights[0] + \", \" + TriangleWeights[1] + \", \" + TriangleWeights[2] + \").\");\n\
//INFO : The closest position on the mesh sphere from the Null is (-0.6959691047668459, 3.2883720624894605, 1.8517908803876053)\n\
//INFO : which corresponds to the triangle made of vertices (14, 21, 22).\n\
//INFO : The barycentric weight relatively to each triangle vertex is (0.34798455238342285, 0.12156937271356582, 0.5304460525512695).</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example uses PointLocatorData to shrink-wrap a sphere to a cube,\n\
	and then push the sphere along the cube\'s normals.\n\
*/\n\
NewScene(null, false);\n\
var root = Application.ActiveSceneRoot;\n\
var CubeGeom = root.AddGeometry(\"Cube\", \"MeshSurface\").ActivePrimitive.Geometry;\n\
var SphereObj = root.AddGeometry(\"Sphere\", \"MeshSurface\");\n\
SphereObj.subdivv = 24;\n\
SphereObj.subdivu = 24;\n\
// We must freeze it, otherwise its position array cannot be set:\n\
FreezeObj(SphereObj);\n\
var SphereGeom = SphereObj.ActivePrimitive.Geometry;\n\
var SphereOnCubePointLocators = CubeGeom.GetClosestLocations(SphereGeom.Points.PositionArray);\n\
var SphereOnCubePositions = CubeGeom.EvaluatePositions(SphereOnCubePointLocators).toArray();\n\
var SphereOnCubeNormals = CubeGeom.EvaluateNormals(SphereOnCubePointLocators).toArray();\n\
for (i = 0; i &lt; SphereOnCubePositions.length; i++)\n\
	SphereOnCubePositions[i] += SphereOnCubeNormals[i]*3;\n\
SphereGeom.Points.PositionArray = SphereOnCubePositions;</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/PointLocatorData.html\">PointLocatorData</a> <a href=\"#!/url=./si_om/Geometry.html\">Geometry</a> <a href=\"#!/url=./si_om/Geometry.GetClosestLocationsWithinRadius.html\">Geometry.GetClosestLocationsWithinRadius</a> <a href=\"#!/url=./si_om/Geometry.GetRaycastIntersections.html\">Geometry.GetRaycastIntersections</a> <a href=\"#!/url=./si_om/Geometry.SetupPointLocatorQueries.html\">Geometry.SetupPointLocatorQueries</a> <a href=\"#!/url=./si_om/Geometry.GetSurfacePointLocatorsFromPoints.html\">Geometry.GetSurfacePointLocatorsFromPoints</a> <a href=\"#!/url=./si_om/Geometry.EvaluatePositions.html\">Geometry.EvaluatePositions</a> <a href=\"#!/url=./si_om/Geometry.EvaluateNormals.html\">Geometry.EvaluateNormals</a> <a href=\"#!/url=./si_om/Geometry.EvaluateClusterProperty.html\">Geometry.EvaluateClusterProperty</a> <a href=\"#!/url=./si_om/PolygonMesh.GetPolygonIndexArray.html\">PolygonMesh.GetPolygonIndexArray</a> <a href=\"#!/url=./si_om/PolygonMesh.GetTriangleVertexIndexArray.html\">PolygonMesh.GetTriangleVertexIndexArray</a> <a href=\"#!/url=./si_om/PolygonMesh.GetTriangleNodeIndexArray.html\">PolygonMesh.GetTriangleNodeIndexArray</a> <a href=\"#!/url=./si_om/PolygonMesh.GetTriangleWeightArray.html\">PolygonMesh.GetTriangleWeightArray</a> <a href=\"#!/url=./si_om/PolygonMesh.ConstructPointLocators.html\">PolygonMesh.ConstructPointLocators</a> <a href=\"#!/url=./si_om/NurbsSurfaceMesh.GetSubSurfaceIndexArray.html\">NurbsSurfaceMesh.GetSubSurfaceIndexArray</a> <a href=\"#!/url=./si_om/NurbsSurfaceMesh.GetNormalizedUVArray.html\">NurbsSurfaceMesh.GetNormalizedUVArray</a> <a href=\"#!/url=./si_om/NurbsSurfaceMesh.ConstructPointLocators.html\">NurbsSurfaceMesh.ConstructPointLocators</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";