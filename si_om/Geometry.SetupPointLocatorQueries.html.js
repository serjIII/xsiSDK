var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Geometry.SetupPointLocatorQueries</title>\n\
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
            <h1>Geometry.SetupPointLocatorQueries</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Geometry.html\">Geometry</a>.SetupPointLocatorQueries <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v6.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Sets up how subsequent calls to <a href=\"#!/url=./si_om/Geometry.GetClosestLocations.html\">Geometry.GetClosestLocations</a>,\n\
<a href=\"#!/url=./si_om/Geometry.GetClosestLocationsWithinRadius.html\">Geometry.GetClosestLocationsWithinRadius</a> and \n\
<a href=\"#!/url=./si_om/Geometry.GetRaycastIntersections.html\">Geometry.GetRaycastIntersections</a> will operate.\n\
<br /><br />\n\
An acceleration cache is built either on the first call to this method or to \n\
<a href=\"#!/url=./si_om/Geometry.GetClosestLocations.html\">Geometry.GetClosestLocations</a> or\n\
<a href=\"#!/url=./si_om/Geometry.GetClosestLocationsWithinRadius.html\">Geometry.GetClosestLocationsWithinRadius</a>.\n\
The cache assumes that the geometry is not deformed during all \n\
subsequent calls to <a href=\"#!/url=./si_om/Geometry.GetClosestLocations.html\">Geometry.GetClosestLocations</a>, \n\
<a href=\"#!/url=./si_om/Geometry.GetClosestLocationsWithinRadius.html\">Geometry.GetClosestLocationsWithinRadius</a> and \n\
<a href=\"#!/url=./si_om/Geometry.GetRaycastIntersections.html\">Geometry.GetRaycastIntersections</a>. If that is not the\n\
case, you should get the geometry again or force a rebuild of the acceleration \n\
cache by calling this method, otherwise you may get wrong results.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Geometry.SetupPointLocatorQueries( Int32 in_Method, Object in_Transfo, Object in_FacetsToRestrictSearch, Int32 in_NbLocatorsToBeQueried );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Geometry.SetupPointLocatorQueries( Method, Reference, Facets, NbLocatorsToBeQueried );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Method		</td>\n\
		<td><a href=\"#!/url=./si_om/siClosestLocationMethod.html\">siClosestLocationMethod</a>		</td>\n\
		<td>\n\
\n\
Method to use when searching the closest location. This must be set to \n\
siClosestSurfaceRaycastIntersections if you will be calling \n\
<a href=\"#!/url=./si_om/Geometry.GetRaycastIntersections.html\">Geometry.GetRaycastIntersections</a> next.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siClosestSurface			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Reference		</td>\n\
		<td><a href=\"#!/url=./si_om/SITransformation.html\">SITransformation</a>		</td>\n\
		<td>\n\
\n\
		Allows you to specify the reference transformation in which the input positions \n\
		will be interpreted, and in which the search will be executed. Notice that the \"closest distance\"\n\
		relationship may change relative to the spatial reference of the geometry and the input \n\
		positions. For instance, if you copy closest locations of an object\'s points onto another one, \n\
		you will generally have different results if you scale both of them non-uniformly or if you \n\
		add some shearing to the pose. In such case, computing the closest locations in local space \n\
		will lead to different results from computing the closest locations in global space.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Facets		</td>\n\
		<td>1-dimensional <a href=\"#!/url=./files/Array.htm\">Array</a>		</td>\n\
		<td>\n\
\n\
		Restricts the search to a subset of facets (instead of all the geometry).\n\
		This allows faster searches and a lower memory usage for the acceleration cache.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">NbLocatorsToBeQueried		</td>\n\
		<td><a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
\n\
		Approximate number of point locators that will be queried after the call.\n\
		This helps improving the overall performance.\n\
		Pass -1 if you have no clue.\n\
			</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example uses PointLocatorData to shrink-wrap a sphere on only\n\
	two faces of a cube\n\
*/\n\
NewScene( null, false );\n\
var root = Application.ActiveSceneRoot;\n\
var CubeGeom = root.AddGeometry(\"Cube\", \"MeshSurface\").ActivePrimitive.Geometry;\n\
var SphereObj = root.AddGeometry(\"Sphere\", \"MeshSurface\");\n\
SphereObj.subdivv = 24;\n\
SphereObj.subdivu = 24;\n\
// Freeze it, otherwise its position array cannot be set:\n\
FreezeObj(SphereObj);\n\
var SphereGeom = SphereObj.ActivePrimitive.Geometry;\n\
var Facets = new Array(2);\n\
var Transform = XSIMath.CreateTransform();\n\
Facets[0] = 2;\n\
Facets[1] = 3;\n\
CubeGeom.SetupPointLocatorQueries(siClosestSurface,Transform,Facets,-1);\n\
var SphereOnCubePointLocators = CubeGeom.GetClosestLocations(SphereGeom.Points.PositionArray);\n\
SphereGeom.Points.PositionArray = CubeGeom.EvaluatePositions(SphereOnCubePointLocators);</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/PointLocatorData.html\">PointLocatorData</a> <a href=\"#!/url=./si_om/Geometry.html\">Geometry</a> <a href=\"#!/url=./si_om/Geometry.GetClosestLocations.html\">Geometry.GetClosestLocations</a> <a href=\"#!/url=./si_om/Geometry.GetClosestLocationsWithinRadius.html\">Geometry.GetClosestLocationsWithinRadius</a> <a href=\"#!/url=./si_om/Geometry.GetRaycastIntersections.html\">Geometry.GetRaycastIntersections</a> <a href=\"#!/url=./si_om/Geometry.GetSurfacePointLocatorsFromPoints.html\">Geometry.GetSurfacePointLocatorsFromPoints</a> <a href=\"#!/url=./si_om/Geometry.EvaluatePositions.html\">Geometry.EvaluatePositions</a> <a href=\"#!/url=./si_om/Geometry.EvaluateNormals.html\">Geometry.EvaluateNormals</a> <a href=\"#!/url=./si_om/Geometry.EvaluateClusterProperty.html\">Geometry.EvaluateClusterProperty</a> <a href=\"#!/url=./si_om/PolygonMesh.GetPolygonIndexArray.html\">PolygonMesh.GetPolygonIndexArray</a> <a href=\"#!/url=./si_om/PolygonMesh.GetTriangleVertexIndexArray.html\">PolygonMesh.GetTriangleVertexIndexArray</a> <a href=\"#!/url=./si_om/PolygonMesh.GetTriangleNodeIndexArray.html\">PolygonMesh.GetTriangleNodeIndexArray</a> <a href=\"#!/url=./si_om/PolygonMesh.GetTriangleWeightArray.html\">PolygonMesh.GetTriangleWeightArray</a> <a href=\"#!/url=./si_om/PolygonMesh.ConstructPointLocators.html\">PolygonMesh.ConstructPointLocators</a> <a href=\"#!/url=./si_om/NurbsSurfaceMesh.GetSubSurfaceIndexArray.html\">NurbsSurfaceMesh.GetSubSurfaceIndexArray</a> <a href=\"#!/url=./si_om/NurbsSurfaceMesh.GetNormalizedUVArray.html\">NurbsSurfaceMesh.GetNormalizedUVArray</a> <a href=\"#!/url=./si_om/NurbsSurfaceMesh.ConstructPointLocators.html\">NurbsSurfaceMesh.ConstructPointLocators</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";