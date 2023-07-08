var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PolygonMesh.ConstructPointLocators</title>\n\
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
            <h1>PolygonMesh.ConstructPointLocators</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/PolygonMesh.html\">PolygonMesh</a>.ConstructPointLocators <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Builds a <a href=\"#!/url=./si_om/PointLocatorData.html\">PointLocatorData</a> from PolygonMesh-specific\n\
topological information. Polygon indices, vertex indices and subtriangle barycentric \n\
weights (normalized and positive) are required in order to define each point locator. \n\
The vertex indices of a subtriangle must all be part of the corresponding input\n\
polygon. The triangle vertex and weight arrays should contain three values\n\
for each input polygon.\n\
<br /><br />\n\
In order to have more predictable results, it is recommended to\n\
specify the subtriangles of vertices corresponding to the actual\n\
triangulation of the polygons. Actual polygon triangulation can be retrieved\n\
with <a href=\"#!/url=./si_om/PolygonFace.TriangleSubIndexArray.html\">PolygonFace.TriangleSubIndexArray</a>.\n\
<br /><br />\n\
Notice that the returned point locators can be evaluated on any PolygonMesh\n\
instance having the same topology.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>PointLocatorData PolygonMesh.ConstructPointLocators( Object in_pPolygonIndices, Object in_pSubTriangleVertexIndices, Object in_pSubTriangleWeights );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = PolygonMesh.ConstructPointLocators( PolygonIndexArray, SubTriangleVertexIndexArray, SubTriangleWeightArray );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">PolygonIndexArray		</td>\n\
		<td>1-dimensional <a href=\"#!/url=./files/Array.htm\">Array</a>		</td>\n\
		<td>\n\
An array of polygon indices on which the point locators will be created.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SubTriangleVertexIndexArray		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a>		</td>\n\
		<td>\n\
\n\
		Can either be a 1-dimensional array of packed triplets, or a\n\
		2-dimensional array of triplets. The vertex index triplets define the polygon\n\
		subtriangle on which the point locators will be created. Vertices of each triplet\n\
		must be adjacent to the corresponding input polygon.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SubTriangleWeightArray		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a>		</td>\n\
		<td>\n\
\n\
		An array of <a href=\"#!/url=./files/Double.htm\">Double</a>, either formatted as a 1D array of \n\
		packed barycentric coordinate triplets, or as a 2D array of barycentric coordinate \n\
		triplets. In order to have proper results, the sum of the weights of each triplet\n\
		must be 1.0, and each weight should be a positive value.\n\
			</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">//\n\
//	This example creates point locators at random surface locations,\n\
//	and positions a Null at each of these point locators.\n\
//	\n\
//	Even if these point locators are simply randomly constructed,\n\
//	this example shows how to do it in the most accurate way,\n\
//	which is to specify subtriangles which correspond to the actual\n\
//	polygon triangulation.\n\
//\n\
NewScene( null, false );\n\
var SphereGeom = CreatePrim(\"Sphere\", \"MeshSurface\").ActivePrimitive.Geometry;\n\
var NbPtLocators = 50;\n\
var PolygonIndexArray = new Array(NbPtLocators);\n\
var SubTriangleVertexArray = new Array(NbPtLocators*3);\n\
var SubTriangleWeightArray = new Array(NbPtLocators*3);\n\
var Polygons = SphereGeom.Polygons;\n\
for(i = 0; i &lt; NbPtLocators; i++) {\n\
	PolygonIndexArray[i] = Math.floor(Math.random() * 0.999999 * Polygons.Count);\n\
	var Polygon = Polygons.Item(PolygonIndexArray[i]);\n\
	var SubTri = Math.floor(Math.random() * 0.999999 * (Polygon.NbPoints-2));\n\
	var PolygonVertices = Polygon.Vertices;\n\
	var TriangleSubIndices = Polygon.TriangleSubIndexArray.toArray();\n\
	SubTriangleVertexArray[i*3] = PolygonVertices.Item(TriangleSubIndices[SubTri*3]).Index;\n\
	SubTriangleVertexArray[i*3+1] = PolygonVertices.Item(TriangleSubIndices[SubTri*3+1]).Index;\n\
	SubTriangleVertexArray[i*3+2] = PolygonVertices.Item(TriangleSubIndices[SubTri*3+2]).Index;\n\
	var W1 = Math.random();\n\
	var W2 = Math.random();\n\
	var W3 = Math.random();\n\
	var WSum = W1+W2+W3;\n\
	SubTriangleWeightArray[i*3] = W1/WSum;\n\
	SubTriangleWeightArray[i*3+1] = W2/WSum;\n\
	SubTriangleWeightArray[i*3+2] = W3/WSum;\n\
}\n\
var RandomPointLocators = SphereGeom.ConstructPointLocators(PolygonIndexArray, SubTriangleVertexArray, SubTriangleWeightArray);\n\
CreateNullsAtPointLocations(SphereGeom, RandomPointLocators);\n\
function CreateNullsAtPointLocations( InGeom, InPointLocators )\n\
{\n\
	var SpherePositions = InGeom.EvaluatePositions(InPointLocators).toArray();\n\
	var SphereNormals = InGeom.EvaluateNormals(InPointLocators).toArray();\n\
	var TempVector = XSIMath.CreateVector3();\n\
	var TempRotation = XSIMath.CreateRotation();\n\
	for (i = 0; i &lt; SpherePositions.length; i+=3)\n\
	{\n\
		var NullObj = GetPrim( \"Null\" );\n\
		TempVector.Set(SpherePositions[i], SpherePositions[i+1], SpherePositions[i+2]);\n\
		NullObj.LocalTranslation = TempVector;\n\
		TempVector.Set(SphereNormals[i], SphereNormals[i+1], SphereNormals[i+2]);\n\
		TempRotation.SetFromXYZAxes( TempVector, TempVector, TempVector );\n\
		NullObj.LocalRotation = TempRotation;\n\
	}\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/PointLocatorData.html\">PointLocatorData</a> <a href=\"#!/url=./si_om/Geometry.html\">Geometry</a> <a href=\"#!/url=./si_om/Geometry.GetClosestLocations.html\">Geometry.GetClosestLocations</a> <a href=\"#!/url=./si_om/Geometry.GetClosestLocationsWithinRadius.html\">Geometry.GetClosestLocationsWithinRadius</a> <a href=\"#!/url=./si_om/Geometry.SetupPointLocatorQueries.html\">Geometry.SetupPointLocatorQueries</a> <a href=\"#!/url=./si_om/Geometry.GetSurfacePointLocatorsFromPoints.html\">Geometry.GetSurfacePointLocatorsFromPoints</a> <a href=\"#!/url=./si_om/Geometry.EvaluatePositions.html\">Geometry.EvaluatePositions</a> <a href=\"#!/url=./si_om/Geometry.EvaluateNormals.html\">Geometry.EvaluateNormals</a> <a href=\"#!/url=./si_om/Geometry.EvaluateClusterProperty.html\">Geometry.EvaluateClusterProperty</a> <a href=\"#!/url=./si_om/PolygonMesh.GetPolygonIndexArray.html\">PolygonMesh.GetPolygonIndexArray</a> <a href=\"#!/url=./si_om/PolygonMesh.GetTriangleVertexIndexArray.html\">PolygonMesh.GetTriangleVertexIndexArray</a> <a href=\"#!/url=./si_om/PolygonMesh.GetTriangleNodeIndexArray.html\">PolygonMesh.GetTriangleNodeIndexArray</a> <a href=\"#!/url=./si_om/PolygonMesh.GetTriangleWeightArray.html\">PolygonMesh.GetTriangleWeightArray</a> <a href=\"#!/url=./si_om/NurbsSurfaceMesh.GetSubSurfaceIndexArray.html\">NurbsSurfaceMesh.GetSubSurfaceIndexArray</a> <a href=\"#!/url=./si_om/NurbsSurfaceMesh.GetNormalizedUVArray.html\">NurbsSurfaceMesh.GetNormalizedUVArray</a> <a href=\"#!/url=./si_om/NurbsSurfaceMesh.ConstructPointLocators.html\">NurbsSurfaceMesh.ConstructPointLocators</a> <a href=\"#!/url=./si_om/PolygonFace.TriangleSubIndexArray.html\">PolygonFace.TriangleSubIndexArray</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";