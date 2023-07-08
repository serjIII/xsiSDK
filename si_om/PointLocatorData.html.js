var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PointLocatorData</title>\n\
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
            <h1>PointLocatorData</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">PointLocatorData</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_PointLocatorData\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1PointLocatorData.html\">PointLocatorData</a></p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> A PointLocatorData object represents a collection of point locators. A point locator is\n\
a geometric surface coordinate, and represents a precise location on a geometry.\n\
Point locators are topologically defined, so they are not dependent on\n\
the position or the deformation of the geometry (they \"stick\" to the surface).\n\
The actual data defining a point locator is abstracted and depends on the geometry\n\
type.\n\
<br /><br />\n\
Point locators are a generalization of <a href=\"#!/url=./si_om/Point.html\">Point</a>s.\n\
As points, point locators can be processed independently from the\n\
geometry type. Like point indices, point locators are not related to\n\
a particular geometry instance. You can query any geometry having\n\
the same topology with the same PointLocatorData. For instance,\n\
you can use point locators to evaluate positions of an animated geometry\n\
at different times.\n\
<br /><br />\n\
Because point locators don\'t apply to a particular geometry instance,\n\
the PointLocatorData object has no functionality by itself.\n\
Most methods related to PointLocatorData are defined in <a href=\"#!/url=./si_om/Geometry.html\">Geometry</a>,\n\
<a href=\"#!/url=./si_om/PolygonMesh.html\">PolygonMesh</a> and <a href=\"#!/url=./si_om/NurbsSurfaceMesh.html\">NurbsSurfaceMesh</a>. PointLocatorData\n\
can be created by methods <a href=\"#!/url=./si_om/Geometry.GetClosestLocations.html\">Geometry.GetClosestLocations</a>,\n\
<a href=\"#!/url=./si_om/Geometry.GetClosestLocationsWithinRadius.html\">Geometry.GetClosestLocationsWithinRadius</a>, <a href=\"#!/url=./si_om/Geometry.GetRaycastIntersections.html\">Geometry.GetRaycastIntersections</a>, \n\
<a href=\"#!/url=./si_om/Geometry.GetSurfacePointLocatorsFromPoints.html\">Geometry.GetSurfacePointLocatorsFromPoints</a><a href=\"#!/url=./si_om/PolygonMesh.ConstructPointLocators.html\">PolygonMesh.ConstructPointLocators</a> and <a href=\"#!/url=./si_om/NurbsSurfaceMesh.ConstructPointLocators.html\">NurbsSurfaceMesh.ConstructPointLocators</a>.\n\
<br /><br />\n\
Other examples of PointLocatorData usage can be found in various related methods such as\n\
<a href=\"#!/url=./si_om/PointLocatorData.Count.html\">PointLocatorData.Count</a> and <a href=\"#!/url=./si_om/PolygonMesh.ConstructPointLocators.html\">PolygonMesh.ConstructPointLocators</a>.\n\
<br /><br />\n\
Note: Point locators are currently only supported by <a href=\"#!/url=./si_om/NurbsSurfaceMesh.html\">NurbsSurfaceMesh</a>\n\
and <a href=\"#!/url=./si_om/PolygonMesh.html\">PolygonMesh</a> objects.\n\
</p></div>\n\
\n\
<h3>Properties</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PointLocatorData.Count.html\">Count</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
#	This example uses PointLocatorData to shrink-wrap a sphere to a cube,\n\
#	and then pushes the sphere along cube\'s normals.\n\
#\n\
app = Application\n\
app.NewScene( \"\", 0 )\n\
root = app.ActiveSceneRoot\n\
CubeGeom = root.AddGeometry(\"Cube\", \"MeshSurface\").GetActivePrimitive3().Geometry\n\
SphereObj = root.AddGeometry(\"Sphere\", \"MeshSurface\")\n\
SphereObj.subdivv = 24\n\
SphereObj.subdivu = 24\n\
# Freeze it, otherwise its position array cannot be set:\n\
app.FreezeObj(SphereObj)\n\
SphereGeom = SphereObj.GetActivePrimitive3().Geometry\n\
SphereOnCubePointLocators = CubeGeom.GetClosestLocations(SphereGeom.Points.PositionArray)\n\
SphereOnCubePositions = CubeGeom.EvaluatePositions(SphereOnCubePointLocators)\n\
SphereOnCubeNormals = CubeGeom.EvaluateNormals(SphereOnCubePointLocators)\n\
SphereNewPositions = []\n\
i = 0\n\
while i &lt; len(SphereOnCubePositions) :\n\
	j = 0\n\
	tmplist = []\n\
	while j &lt; len(SphereOnCubePositions[i]) :\n\
		tmplist.append( SphereOnCubeNormals[i][j]*3 )\n\
		j = j + 1\n\
	SphereNewPositions.append(tmplist)\n\
	i = i + 1\n\
SphereGeom.Points.PositionArray = SphereNewPositions;</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example uses PointLocatorData to deform a polygon mesh based on\n\
	the closest weight map value of a NURBS surface mesh.\n\
*/\n\
// Scene creation:\n\
//     Polygon mesh grid and a NURBS surface grid.\n\
//     On the NURBS grid, a weight map having a radial gradient\n\
NewScene( null, false );\n\
var root = Application.ActiveSceneRoot;\n\
var MeshGridObj = root.AddGeometry(\"Grid\", \"MeshSurface\");\n\
MeshGridObj.subdivu = 24;\n\
MeshGridObj.subdivv = 24;\n\
// We must freeze it, otherwise setting its position array will be forbidden:\n\
FreezeObj(MeshGridObj);\n\
var MeshGridGeom = MeshGridObj.ActivePrimitive.Geometry;\n\
var NURBSGridObj = root.AddGeometry(\"Grid\", \"NurbsSurface\");\n\
NURBSGridObj.subdivu = 2;\n\
NURBSGridObj.subdivv = 2;\n\
var NURBSGridGeom = NURBSGridObj.ActivePrimitive.Geometry;\n\
var NURBSWeightMap = CreateWeightMap(null, NURBSGridObj, \"Weight_Map\").item(0);\n\
SetValue(NURBSWeightMap + \".weightmapop.type\", 5);\n\
SetValue(NURBSWeightMap + \".weightmapop.weight\", 1);\n\
SetValue(NURBSWeightMap + \".weightmapop.invert\", true);\n\
NURBSWeightMap = GetValue(NURBSWeightMap);	// Get the weight map again to have an updated copy\n\
// Applying the deformation\n\
var MeshGridPos = MeshGridGeom.Points.PositionArray.toArray();\n\
var MeshGridOnNURBSGridPointLocators = NURBSGridGeom.GetClosestLocations(MeshGridPos);\n\
var WeightMapValuesForMesh = NURBSGridGeom.EvaluateClusterProperty(	MeshGridOnNURBSGridPointLocators,\n\
									NURBSWeightMap.Parent,\n\
									NURBSWeightMap ).toArray();\n\
// Push mesh vertices along Y, modulated by NURBS grid\'s closest surface\'s weight map value\n\
for(i = 0; i &lt; MeshGridPos.length; i+=3)\n\
	MeshGridPos[i+1] += WeightMapValuesForMesh[i/3]*5;\n\
MeshGridGeom.Points.PositionArray = MeshGridPos;</pre></td></tr>\n\
</table>\n\
</div><h4>3. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// The following example is more complex but shows the PointLocatorData \n\
// at work in the context of a relatively complex scripted operator.\n\
//\n\
// This example creates a \"skinning\" custom operator, which a kind\n\
// of shrink wrap-based cage deform operator. This operator\n\
// wraps a deformed \"body\" object with a \"skin\" object having a different\n\
// topology. In order to create the surface correspondance between\n\
// the skin and the body, it uses a static copy of the \"body\", which\n\
// is not animated and stands as a reference. The operator supports,\n\
// too, arbitrary poses on each object.\n\
//\n\
// Since the skin and the reference body are not animated, the\n\
// custom operator can create the point locators only once,\n\
// at the first evaluation, and then only need to evaluate\n\
// them on the deformed body at each frame. This improves a lot\n\
// the performance since creating point locators from spatial\n\
// proximity is much more costly than simply evaluating their\n\
// positions or normals.\n\
//\n\
// Additionally, in order to improve the skinning result, the\n\
// operator pushes the sking along the normals of the body,\n\
// and the amplitude of this push can be controlled by a parameter.\n\
NewScene( null, false );\n\
var root = Application.ActiveSceneRoot;\n\
Translate(\"Camera\", 0, 0, 50.0, siRelative, siView, siObj, siXYZ);\n\
// Create the reference body object, non-animated object (a cube),\n\
// and move it to a non-trivial pose\n\
var ReferenceCubeObj = root.AddGeometry(\"Cube\", \"MeshSurface\");\n\
Translate(ReferenceCubeObj, -25.0, 0, 0, siRelative, siView, siObj, siXYZ);\n\
// Create the skin object (a sphere with more resolution),\n\
// and move it to a non-trivial pose\n\
var ShrinkWrappedSphereObj = root.AddGeometry(\"Sphere\", \"MeshSurface\");\n\
ShrinkWrappedSphereObj.subdivu = 25;\n\
ShrinkWrappedSphereObj.subdivv = 25;\n\
Rotate(ShrinkWrappedSphereObj, 0, 0, -60.0, siRelative, siLocal, siObj, siXYZ);\n\
Scale(ShrinkWrappedSphereObj, 1.5, 1.5, 1.5, siRelative, siLocal, siObj, siXYZ);\n\
Translate(ShrinkWrappedSphereObj, -25.0, 0, 0, siRelative, siView, siObj, siXYZ);\n\
// Create the animated target body object.\n\
// In order to show the scripted op at work, add kinematic and\n\
// shape animation.\n\
var TargetCubeObj = root.AddGeometry(\"Cube\", \"MeshSurface\");\n\
Translate(TargetCubeObj, 10.0, 10.0, 0, siRelative, siView, siObj, siXYZ);\n\
SetValue(\"Context.constructionmode\", 1);\n\
Scale(\"cube1.pnt[2,3,6,LAST]\", 0.3, 0.3, 0.3, siRelative, siLocal, siObj, siXYZ);\n\
SaveShapeKey(\"cube1.pnt[2,3,6,LAST]\", null, null, 1);\n\
Scale(\"cube1.pnt[2,3,6,LAST]\", 10.0, 10.0, 10.0, siRelative, siLocal, siObj, siXYZ);\n\
SaveShapeKey(\"cube1.polymsh.cls.Shape\", null, null, 100);\n\
SaveKey(\"cube1.kine.local.posx,cube1.kine.local.posy,cube1.kine.local.posz\");\n\
SaveKey(\"cube1.kine.local.rotx,cube1.kine.local.roty,cube1.kine.local.rotz\");\n\
Rotate(TargetCubeObj, 50.0, 0, 50.0, siRelative, siLocal, siObj, siXYZ);\n\
SetValue(\"PlayControl.Current\", 100);\n\
SaveKey(\"cube1.kine.local.rotx,cube1.kine.local.roty,cube1.kine.local.rotz\", 100);\n\
Translate(TargetCubeObj, -15.0, -15.0, 0.0, siRelative, siView, siObj, siXYZ);\n\
SaveKey(\"cube1.kine.local.posx,cube1.kine.local.posy,cube1.kine.local.posz\", 100);\n\
SetValue(\"PlayControl.Current\", 1);\n\
// Apply the scripted op to the skin.\n\
var SkinOp = ApplySkinOp( ShrinkWrappedSphereObj, ReferenceCubeObj, TargetCubeObj );\n\
SetValue(\"PlayControl.Loop\", true);\n\
PlayForwardsFromStart();\n\
InspectObj(SkinOp);\n\
function ApplySkinOp( inSkinObj, inReferenceBody, inTargetBody )\n\
{\n\
	var op = XSIFactory.CreateScriptedOp( \"MySkinOp\", MySkinOp_Update.toString(), \"JScript\" );\n\
	// Define connections\n\
	var skin_group = op.AddPortGroup( \"SkinGroup\" );\n\
	op.AddIOPort( inSkinObj.ActivePrimitive, \"Geom\", skin_group.Index );\n\
	op.AddInputPort( inSkinObj.Kinematics.Global, \"Pose\", skin_group.Index );\n\
	var ref_group = op.AddPortGroup( \"ReferenceBodyGroup\" );\n\
	op.AddInputPort( inReferenceBody.ActivePrimitive, \"Geom\", ref_group.Index );\n\
	op.AddInputPort( inReferenceBody.Kinematics.Global, \"Pose\", ref_group.Index );\n\
	var tgt_group = op.AddPortGroup( \"TargetBodyGroup\" );\n\
	op.AddInputPort( inTargetBody.ActivePrimitive, \"Geom\", tgt_group.Index );\n\
	op.AddInputPort( inTargetBody.Kinematics.Global, \"Pose\", tgt_group.Index );\n\
	// Define a parameter for the push amplitude\n\
	var pdef = XSIFactory.CreateParamDef2( \"PushAmplitude\", siDouble, 2, -1, 5 );\n\
	op.AddParameter(pdef);\n\
	// Connect operator\n\
	op.Connect(inSkinObj + \";\" + inReferenceBody + \";\" + inTargetBody);\n\
	return op;\n\
}\n\
// This function contains the implementation of the scripted operator.\n\
function MySkinOp_Update( ctx, out, InSkinGeom, InSkinPose, InReferenceBodyGeom, InReferenceBodyPose, InTargetBodyGeom, InTargetBodyPose )\n\
{\n\
	// TransformPositionArray: transforms in place an array of packed XYZ vectors\n\
	function TransformPositionArray( array, transfo )\n\
	{\n\
		for (i = 0; i &lt; array.length; i+=3)\n\
		{\n\
			var TempVector3 = XSIMath.CreateVector3()\n\
			TempVector3.Set(array[i], array[i+1], array[i+2]);\n\
			TempVector3.MulByTransformationInPlace(transfo);\n\
			var XYZArray = TempVector3.Get2().toArray();\n\
			array[i] = XYZArray[0];\n\
			array[i+1] = XYZArray[1];\n\
			array[i+2] = XYZArray[2];\n\
		}\n\
	}\n\
	var SkinGeom = InSkinGeom.Value.Geometry;\n\
	var ReferenceBodyGeom = InReferenceBodyGeom.Value.Geometry;\n\
	/////////////////////////////////////////////////////////\n\
	//1) Create skin point locators relatively to the surface \n\
	//   proximity to the reference body. We intentionally keep\n\
	//   a snapshot of the point locators to speed up the \n\
	//   next evaluations; we assume that InSkinGeom, InSkinPose, \n\
	//   InReferenceBodyGeom and InReferenceBodyPose are not\n\
	//   animated.\n\
	var SkinPointLocators = ctx.UserData;\n\
	if(SkinPointLocators == null)	// No user data means that this is the first evaluation of the operator\n\
	{\n\
		// The skin object and the reference may have different poses, so we\n\
		// will compute the surface proximity computation in global space.\n\
		// We will use the closest smoothed surface method (2==siClosestSmoothedSurface).\n\
		ReferenceBodyGeom.SetupPointLocatorQueries(2, InReferenceBodyPose.Value.Transform); \n\
		// Transform the skin positions in global space\n\
		var SkinGeomPosArray = SkinGeom.Points.PositionArray.toArray();\n\
		// TransformPositionArray: transforms in place an array of packed XYZ vectors\n\
		TransformPositionArray( SkinGeomPosArray, InSkinPose.Value.Transform );\n\
		SkinPointLocators = ReferenceBodyGeom.GetClosestLocations(SkinGeomPosArray);\n\
		ctx.UserData = SkinPointLocators;\n\
	}\n\
	/////////////////////////////////////////////////////////\n\
	//2) Evaluate the point locators on the target body, and\n\
	//   displace them along target body\'s normals, with the\n\
	//   amplitude given by the scirted op parameter.\n\
	var TargetBodyGeom = InTargetBodyGeom.Value.Geometry;\n\
	var SkinOnTargetBodyPositions = TargetBodyGeom.EvaluatePositions(SkinPointLocators).toArray();\n\
	var SkinOnTargetBodyNormals = TargetBodyGeom.EvaluateNormals(SkinPointLocators).toArray();\n\
	var SkinToTargetTransform = XSIMath.MapWorldPoseToObjectSpace(InSkinPose.Value.Transform, InTargetBodyPose.Value.Transform);\n\
	var dPushAmplitude = ctx.Parameters(\"PushAmplitude\").Value\n\
	for (i = 0; i &lt; SkinOnTargetBodyPositions.length; i++)\n\
		SkinOnTargetBodyPositions[i] += SkinOnTargetBodyNormals[i]*dPushAmplitude;\n\
	// TransformPositionArray: transforms in place an array of packed XYZ vectors\n\
	TransformPositionArray( SkinOnTargetBodyPositions, SkinToTargetTransform );\n\
	SkinGeom.Points.PositionArray = SkinOnTargetBodyPositions;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Geometry.html\">Geometry</a> <a href=\"#!/url=./si_om/Geometry.GetClosestLocations.html\">Geometry.GetClosestLocations</a> <a href=\"#!/url=./si_om/Geometry.GetClosestLocationsWithinRadius.html\">Geometry.GetClosestLocationsWithinRadius</a> <a href=\"#!/url=./si_om/Geometry.GetRaycastIntersections.html\">Geometry.GetRaycastIntersections</a> <a href=\"#!/url=./si_om/Geometry.SetupPointLocatorQueries.html\">Geometry.SetupPointLocatorQueries</a> <a href=\"#!/url=./si_om/Geometry.GetSurfacePointLocatorsFromPoints.html\">Geometry.GetSurfacePointLocatorsFromPoints</a> <a href=\"#!/url=./si_om/Geometry.EvaluatePositions.html\">Geometry.EvaluatePositions</a> <a href=\"#!/url=./si_om/Geometry.EvaluateNormals.html\">Geometry.EvaluateNormals</a> <a href=\"#!/url=./si_om/Geometry.EvaluateClusterProperty.html\">Geometry.EvaluateClusterProperty</a> <a href=\"#!/url=./si_om/PolygonMesh.GetPolygonIndexArray.html\">PolygonMesh.GetPolygonIndexArray</a> <a href=\"#!/url=./si_om/PolygonMesh.GetTriangleVertexIndexArray.html\">PolygonMesh.GetTriangleVertexIndexArray</a> <a href=\"#!/url=./si_om/PolygonMesh.GetTriangleNodeIndexArray.html\">PolygonMesh.GetTriangleNodeIndexArray</a> <a href=\"#!/url=./si_om/PolygonMesh.GetTriangleWeightArray.html\">PolygonMesh.GetTriangleWeightArray</a> <a href=\"#!/url=./si_om/PolygonMesh.ConstructPointLocators.html\">PolygonMesh.ConstructPointLocators</a> <a href=\"#!/url=./si_om/NurbsSurfaceMesh.GetSubSurfaceIndexArray.html\">NurbsSurfaceMesh.GetSubSurfaceIndexArray</a> <a href=\"#!/url=./si_om/NurbsSurfaceMesh.GetNormalizedUVArray.html\">NurbsSurfaceMesh.GetNormalizedUVArray</a> <a href=\"#!/url=./si_om/NurbsSurfaceMesh.ConstructPointLocators.html\">NurbsSurfaceMesh.ConstructPointLocators</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";