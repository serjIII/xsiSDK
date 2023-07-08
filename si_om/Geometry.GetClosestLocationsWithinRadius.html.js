var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Geometry.GetClosestLocationsWithinRadius</title>\n\
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
            <h1>Geometry.GetClosestLocationsWithinRadius</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Geometry.html\">Geometry</a>.GetClosestLocationsWithinRadius <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns a <a href=\"#!/url=./si_om/PointLocatorData.html\">PointLocatorData</a> containing closest surface locations\n\
from the input position within a search sphere of a specific radius. By default, \n\
the input positions have to be defined in the object\'s local space reference. Optionally, \n\
the search can be restricted to return a maximum number of locations. In order to \n\
avoid volumetric restrictions, simply specify a very large radius.\n\
<br /><br />\n\
Some aspects of the closest locations\'s computation such as the reference pose\n\
or the method (closest surface, closest vertex or knot, ...) can be set up\n\
using <a href=\"#!/url=./si_om/Geometry.SetupPointLocatorQueries.html\">Geometry.SetupPointLocatorQueries</a>. This setup will\n\
affect all subsequent calls to GetClosestLocationsWithinRadius and to \n\
<a href=\"#!/url=./si_om/Geometry.GetClosestLocations.html\">Geometry.GetClosestLocations</a>.\n\
<br /><br />\n\
If the search was set up with <a href=\"#!/url=./si_om/Geometry.SetupPointLocatorQueries.html\">Geometry.SetupPointLocatorQueries</a>\n\
to be a closest surface or smoothed closest surface search, then it returns \n\
one point locator per connected island for <a href=\"#!/url=./si_om/PolygonMesh.html\">PolygonMesh</a>es.\n\
Such connected islands are defined so that you cannot walk between 2 returned point \n\
locators without leaving the search radius (this walking is through polygon adjacency,\n\
not vertex adjacency). For <a href=\"#!/url=./si_om/NurbsSurfaceMesh.html\">NurbsSurfaceMesh</a>es, it \n\
returns at most one point locator.\n\
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
		<td class=\"example\"><pre>PointLocatorData Geometry.GetClosestLocationsWithinRadius( Object in_PositionToSearchFrom, Double in_dRadius, Int32 in_lNbToSearch );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = Geometry.GetClosestLocationsWithinRadius( Position, Radius, [MaxNbToFind] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Position		</td>\n\
		<td>1D <a href=\"#!/url=./files/Array.htm\">Array</a> or <a href=\"#!/url=./si_om/SIVector3.html\">SIVector3</a>		</td>\n\
		<td>\n\
The position to search from, either a vector or an XYZ array.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Radius		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
Radius defining a spherical restriction volume for the search.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">MaxNbToFind		</td>\n\
		<td><a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
Maximum point locations to find (no limit if value is -1).			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
-1			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example uses PointLocatorData to find closest vertices on a polygon mesh\n\
\' within a specific radius, and then creates a cluster on these points.\n\
\'\n\
NewScene , false\n\
set root = Application.ActiveSceneRoot\n\
set GridObj = root.AddGeometry(\"Grid\", \"MeshSurface\")\n\
set GridGeom = GridObj.ActivePrimitive.Geometry\n\
Translate GridObj, 0, 0, -2.0, siRelative, siView, siObj, siXYZ\n\
\' Set up to closest vertex search\n\
GridGeom.SetupPointLocatorQueries siClosestVertexOrKnot, GridObj.Kinematics.Global.Transform, null, -1\n\
\' Get all vertices within a radius of 2 units relatively to the world center\n\
set PositionToQuery = XSIMath.CreateVector3()\n\
PositionToQuery.Set 0,0,0\n\
set PointLocatorsWithinTwoUnits = GridGeom.GetClosestLocationsWithinRadius(PositionToQuery, 2.0)\n\
VerticesString = \" \"\n\
Dim PtLocIndexToQuery(0)\n\
Dim ClosestVerticesArray()\n\
ReDim ClosestVerticesArray(PointLocatorsWithinTwoUnits.Count-1)\n\
for i = 0 to PointLocatorsWithinTwoUnits.Count-1\n\
	\' Even though the point locators have be defined to exactly match the vertex \n\
	\' positions, the search data is returned as a position on a specific triangle, \n\
	\' just as any other use of the Point Locator.  However the vertex that matches \n\
	\' can be determined because it will be weighted at 100%.\n\
	PtLocIndexToQuery(0) = i\n\
	SubTriangleVertices = GridGeom.GetTriangleVertexIndexArray(PointLocatorsWithinTwoUnits, PtLocIndexToQuery)\n\
	SubTriangleWeights = GridGeom.GetTriangleWeightArray(PointLocatorsWithinTwoUnits, PtLocIndexToQuery)\n\
	for ctr = 0 to UBound(SubTriangleVertices,2)\n\
		VtxIdx = SubTriangleVertices(0,ctr)\n\
		if SubTriangleWeights(1,ctr) &gt; SubTriangleWeights(0,ctr) &amp; SubTriangleWeights(1,ctr) &gt; SubTriangleWeights(2,ctr) then\n\
			VtxIdx = SubTriangleVertices(1,ctr)\n\
		elseif SubTriangleWeights(2,ctr) &gt; SubTriangleWeights(0,ctr) &amp; SubTriangleWeights(2,ctr) &gt; SubTriangleWeights(1,ctr) then \n\
			VtxIdx = SubTriangleVertices(2,ctr)\n\
		end if\n\
		ClosestVerticesArray(i) = VtxIdx\n\
		VerticesString = VerticesString &amp; VtxIdx\n\
		if i &lt;&gt; PointLocatorsWithinTwoUnits.Count - 1 then\n\
			VerticesString = VerticesString &amp; \", \"\n\
		end if\n\
	next\n\
next\n\
\' Create a cluster on these vertices\n\
GridGeom.AddCluster siVertexCluster, \"ClosestVertices\", ClosestVerticesArray\n\
Application.LogMessage \"There are \" &amp; PointLocatorsWithinTwoUnits.Count &amp; \" grid vertices in the 2 unit sphere located at the world center.\"\n\
Application.LogMessage \"These vertices are (ordered by proximity):\"\n\
Application.LogMessage VerticesString\n\
\' Expected results:\n\
\'INFO : There are 13 grid vertices in the 2 unit sphere located at the world center.\n\
\'INFO : These vertices are (ordered by proximity):\n\
\'INFO :  42, 51, 41, 33, 43, 52, 32, 50, 34, 24, 60, 40, 44</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/PointLocatorData.html\">PointLocatorData</a> <a href=\"#!/url=./si_om/Geometry.html\">Geometry</a> <a href=\"#!/url=./si_om/Geometry.GetClosestLocations.html\">Geometry.GetClosestLocations</a> <a href=\"#!/url=./si_om/Geometry.GetRaycastIntersections.html\">Geometry.GetRaycastIntersections</a> <a href=\"#!/url=./si_om/Geometry.SetupPointLocatorQueries.html\">Geometry.SetupPointLocatorQueries</a> <a href=\"#!/url=./si_om/Geometry.GetSurfacePointLocatorsFromPoints.html\">Geometry.GetSurfacePointLocatorsFromPoints</a> <a href=\"#!/url=./si_om/Geometry.EvaluatePositions.html\">Geometry.EvaluatePositions</a> <a href=\"#!/url=./si_om/Geometry.EvaluateNormals.html\">Geometry.EvaluateNormals</a> <a href=\"#!/url=./si_om/Geometry.EvaluateClusterProperty.html\">Geometry.EvaluateClusterProperty</a> <a href=\"#!/url=./si_om/PolygonMesh.GetPolygonIndexArray.html\">PolygonMesh.GetPolygonIndexArray</a> <a href=\"#!/url=./si_om/PolygonMesh.GetTriangleVertexIndexArray.html\">PolygonMesh.GetTriangleVertexIndexArray</a> <a href=\"#!/url=./si_om/PolygonMesh.GetTriangleNodeIndexArray.html\">PolygonMesh.GetTriangleNodeIndexArray</a> <a href=\"#!/url=./si_om/PolygonMesh.GetTriangleWeightArray.html\">PolygonMesh.GetTriangleWeightArray</a> <a href=\"#!/url=./si_om/PolygonMesh.ConstructPointLocators.html\">PolygonMesh.ConstructPointLocators</a> <a href=\"#!/url=./si_om/NurbsSurfaceMesh.GetSubSurfaceIndexArray.html\">NurbsSurfaceMesh.GetSubSurfaceIndexArray</a> <a href=\"#!/url=./si_om/NurbsSurfaceMesh.GetNormalizedUVArray.html\">NurbsSurfaceMesh.GetNormalizedUVArray</a> <a href=\"#!/url=./si_om/NurbsSurfaceMesh.ConstructPointLocators.html\">NurbsSurfaceMesh.ConstructPointLocators</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";