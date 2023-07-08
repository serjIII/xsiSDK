var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Geometry.GetRaycastIntersections</title>\n\
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
            <h1>Geometry.GetRaycastIntersections</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Geometry.html\">Geometry</a>.GetRaycastIntersections <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v6.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns a <a href=\"#!/url=./si_om/PointLocatorData.html\">PointLocatorData</a> object containing the surface intersections found \n\
by raycasting from the specified input positions and rays. By default, input positions have to be \n\
defined in the object\'s local space reference.\n\
<br /><br />\n\
In order to use this method you first need to specify siClosestSurfaceRaycastIntersection \n\
in the Method argument of <a href=\"#!/url=./si_om/Geometry.SetupPointLocatorQueries.html\">Geometry.SetupPointLocatorQueries</a>.\n\
<br /><br />\n\
When you call this method an acceleration cache is automatically created.\n\
See <a href=\"#!/url=./si_om/Geometry.SetupPointLocatorQueries.html\">Geometry.SetupPointLocatorQueries</a> for more information.\n\
<br /><br />\n\
Notice that the returned point locators can be evaluated on any Geometry\n\
instance having the same topology.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>PointLocatorData Geometry.GetRaycastIntersections( Object in_pPositions, Object in_pRays, siLineIntersectionType in_eLineType );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = Geometry.GetRaycastIntersections( Positions, Rays, LineType );</pre>		</td>	</tr>\n\
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
\n\
		An array of <a href=\"#!/url=./files/Double.htm\">Double</a>s, either formatted as a 1D array of \n\
		packed XYZ triplets, or as a 2D array of XYZ triplets.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Rays		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a>		</td>\n\
		<td>\n\
\n\
		An array of <a href=\"#!/url=./files/Double.htm\">Double</a>s, either formatted as a 1D array of \n\
		packed XYZ triplets, or as a 2D array of XYZ triplets. Each one of these \n\
		rays defines the vector used for the raycasting and whose length is \n\
		important if you pass siSegmentIntersection for the LineType argument.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">LineType		</td>\n\
		<td><a href=\"#!/url=./si_om/siLineIntersectionType.html\">siLineIntersectionType</a>		</td>\n\
		<td>\n\
The type of line.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siSemiLineIntersection			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	Example using GetRaycastIntersections to find the intersection with a ray and a mesh sphere\n\
*/\n\
NewScene();\n\
var NullObj = Application.ActiveSceneRoot.AddNull();\n\
Translate(NullObj, -2.0, 8.0, 5.0, siRelative, siView, siObj, siXYZ);\n\
var SphereObj = Application.ActiveSceneRoot.AddGeometry(\"Sphere\", \"MeshSurface\");\n\
var SphereGeom = SphereObj.ActivePrimitive.Geometry;\n\
var vbArr = new VBArray( NullObj.Kinematics.Global.Transform.GetTranslationValues2() ); \n\
var array = vbArr.toArray();\n\
var vbArr2 = new VBArray( SphereObj.Kinematics.Global.Transform.GetTranslationValues2() ); \n\
var array2 = vbArr2.toArray();\n\
array2[0] = array2[0] - array[0];\n\
array2[1] = array2[1] - array[1];\n\
array2[2] = array2[2] - array[2];\n\
var ClosestPointLocator = SphereGeom.GetRaycastIntersections( array, array2 );\n\
var ClosestPosition = SphereGeom.EvaluatePositions(ClosestPointLocator).toArray();\n\
var TriangleVertices = SphereGeom.GetTriangleVertexIndexArray(ClosestPointLocator).toArray();\n\
var TriangleWeights = SphereGeom.GetTriangleWeightArray(ClosestPointLocator).toArray();\n\
Application.LogMessage(\"The intersection of the mesh sphere and the ray starting where the Null is and ending at 0,0,0 is (\"\n\
	+ ClosestPosition[0] + \", \" + ClosestPosition[1] + \", \" + ClosestPosition[2] + \")\");\n\
Application.LogMessage(\"which corresponds to the triangle made of vertices (\"\n\
	+ TriangleVertices[0] + \", \" + TriangleVertices[1] + \", \" + TriangleVertices[2] + \").\");\n\
Application.LogMessage(\"The barycentric weight relatively to each triangle vertex is (\"\n\
	+ TriangleWeights[0] + \", \" + TriangleWeights[1] + \", \" + TriangleWeights[2] + \").\");\n\
//INFO : The intersection of the mesh sphere and the ray starting where the Null is and ending at 0,0,0 is (-0.7933665513992314, 3.1734662419917105, 1.9834164080087983)\n\
//INFO : which corresponds to the triangle made of vertices (14, 21, 22).\n\
//INFO : The barycentric weight relatively to each triangle vertex is (0.3966832756996155, 0.20538949966430664, 0.3979272246360779).</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/PointLocatorData.html\">PointLocatorData</a> <a href=\"#!/url=./si_om/Geometry.html\">Geometry</a> <a href=\"#!/url=./si_om/Geometry.GetClosestLocations.html\">Geometry.GetClosestLocations</a> <a href=\"#!/url=./si_om/Geometry.SetupPointLocatorQueries.html\">Geometry.SetupPointLocatorQueries</a> <a href=\"#!/url=./si_om/Geometry.GetSurfacePointLocatorsFromPoints.html\">Geometry.GetSurfacePointLocatorsFromPoints</a> <a href=\"#!/url=./si_om/Geometry.EvaluatePositions.html\">Geometry.EvaluatePositions</a> <a href=\"#!/url=./si_om/Geometry.EvaluateNormals.html\">Geometry.EvaluateNormals</a> <a href=\"#!/url=./si_om/Geometry.EvaluateClusterProperty.html\">Geometry.EvaluateClusterProperty</a> <a href=\"#!/url=./si_om/PolygonMesh.GetPolygonIndexArray.html\">PolygonMesh.GetPolygonIndexArray</a> <a href=\"#!/url=./si_om/PolygonMesh.GetTriangleVertexIndexArray.html\">PolygonMesh.GetTriangleVertexIndexArray</a> <a href=\"#!/url=./si_om/PolygonMesh.GetTriangleNodeIndexArray.html\">PolygonMesh.GetTriangleNodeIndexArray</a> <a href=\"#!/url=./si_om/PolygonMesh.GetTriangleWeightArray.html\">PolygonMesh.GetTriangleWeightArray</a> <a href=\"#!/url=./si_om/PolygonMesh.ConstructPointLocators.html\">PolygonMesh.ConstructPointLocators</a> <a href=\"#!/url=./si_om/NurbsSurfaceMesh.GetSubSurfaceIndexArray.html\">NurbsSurfaceMesh.GetSubSurfaceIndexArray</a> <a href=\"#!/url=./si_om/NurbsSurfaceMesh.GetNormalizedUVArray.html\">NurbsSurfaceMesh.GetNormalizedUVArray</a> <a href=\"#!/url=./si_om/NurbsSurfaceMesh.ConstructPointLocators.html\">NurbsSurfaceMesh.ConstructPointLocators</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";