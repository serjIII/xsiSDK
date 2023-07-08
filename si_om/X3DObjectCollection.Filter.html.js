var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>X3DObjectCollection.Filter</title>\n\
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
            <h1>X3DObjectCollection.Filter</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/X3DObjectCollection.html\">X3DObjectCollection</a>.Filter</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns a subset of this collection as a new collection of \n\
<a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> objects matching the filter criteria. If no \n\
items are found, Filter returns \"Nothing\", which you can use to trap errors.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>X3DObjectCollection X3DObjectCollection.Filter( String in_filter, Object in_famArray, String in_path );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = X3DObjectCollection.Filter( [Type], [Families], [Path] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Collection of <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> objects.\n\
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
		<td class=\"name\">Type		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		The type of object defined by <a href=\"#!/url=./si_om/siType.html\">siType</a> or an empty string if \n\
		no type is used. The type can be a specific X3DObject type such as \n\
		siModelType and si3DObjectType or a primitive type such as siPolyMeshType \n\
		or siSrfMeshPrimType. If a primitive type is supplied, the function \n\
		considers only the objects defined with a primitive of this type. \n\
				<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siPolyMeshType					</td>\n\
					<td>Polygon Mesh type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">si3DObjectType					</td>\n\
					<td>3D Object type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siArcPrimType					</td>\n\
					<td>Implicit Arc Primitive type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siAttractorCtrlType					</td>\n\
					<td>Attractor Control Object type (electric force)					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siCameraPrimType					</td>\n\
					<td>Camera Primitive type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siCameraRootPrimType					</td>\n\
					<td>Camera Root primitive type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siChainBonePrimType					</td>\n\
					<td>Chain Bone Primitive type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siChainEffPrimType					</td>\n\
					<td>Chain End Effector Primitive type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siChainRootPrimType					</td>\n\
					<td>Chain Root Primitive type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siCirclePrimType					</td>\n\
					<td>Implicit Circle Primitive type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siCloudPrimType					</td>\n\
					<td>Cloud Primitive type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siConePrimType					</td>\n\
					<td>Cone Primitive type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siCrvListAggregatePrimType					</td>\n\
					<td>NURBS Curve List Aggregate Primitive type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siCrvListPrimType					</td>\n\
					<td>NURBS Curve List Primitive type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siCubePrimType					</td>\n\
					<td>Cube Primitive type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siCylinderPrimType					</td>\n\
					<td>Cylinder Primitive type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siDiscPrimType					</td>\n\
					<td>Disc Primitive type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siDodecahedronPrimType					</td>\n\
					<td>Dodecahedron Primitive type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siDragCtrlPrimType					</td>\n\
					<td>Drag Control Primitive type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siEddyCtrlPrimType					</td>\n\
					<td>Eddy Control Primitive type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siFanType					</td>\n\
					<td>Fan Force Object type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siFurPrimType					</td>\n\
					<td>Fur Primitive type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siGeoShaderPrimType					</td>\n\
					<td>GeoShader Primitive Type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siGravityCtrlType					</td>\n\
					<td>Gravity Force Control Object type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siGridPrimType					</td>\n\
					<td>Grid Primitive type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siIcosahedronPrimType					</td>\n\
					<td>Icosahedron Primitive type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siLatticePrimType					</td>\n\
					<td>Lattice Primitive type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siLightPrimType					</td>\n\
					<td>Light Primitive type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siModelNullPrimType					</td>\n\
					<td>Model Null Primitive type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siModelType					</td>\n\
					<td>3D Model type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siNullPrimType					</td>\n\
					<td>Null Primitive type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siOctahedronPrimType					</td>\n\
					<td>Octahedron Primitive type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siPointCloudPrimType					</td>\n\
					<td>PointCloud Primitive type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siSpherePrimType					</td>\n\
					<td>Sphere Primitive type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siSpiralPrimType					</td>\n\
					<td>Implicit Spiral Primitive type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siSpotInterestPrimType					</td>\n\
					<td>Spot Interest Primitive type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siSpotRootPrimType					</td>\n\
					<td>Spot Root Primitive type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siSquarePrimType					</td>\n\
					<td>Implicit Square Primitive type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siSrfMeshPrimType					</td>\n\
					<td>NURBS Surface Mesh Primitive type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siTetrahedronPrimType					</td>\n\
					<td>Tetrahedron Primitive type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siTorusPrimType					</td>\n\
					<td>Torus Primitive type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siTurbulenceCtrlPrimType					</td>\n\
					<td>Turbulence Control Primitive type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siVolumeDeformType					</td>\n\
					<td>Volume Deform type (implicit sphere volume)					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siVortexCtrlType					</td>\n\
					<td>Vortex Control Object type (magnetic force)					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siWaveCtrlType					</td>\n\
					<td>Wave Control Object type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siWindType					</td>\n\
					<td>Wind Force Object type					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Families		</td>\n\
		<td><a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
		<td>\n\
\n\
		An array of families defined by siFamily or an empty array if none are required. \n\
		The families are used for narrowing down the search, the array can contain \n\
		X3DObject families like si3DObjectFamily or primitive families such as \n\
		siNurbsSurfaceMeshFamily or siNullPrimitiveFamily. Only the objects that \n\
		match the supplied families are considered. If primitive families are \n\
		supplied then only the objects defined with a primitive that belongs to one \n\
		of them are considered.\n\
				<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">si3DObjectFamily					</td>\n\
					<td>3D Object family					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siCameraFamily					</td>\n\
					<td>Camera family					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siChainElementFamily					</td>\n\
					<td>Chain Element family					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siControlObjectFamily					</td>\n\
					<td>Control Object family					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siCurveFamily					</td>\n\
					<td>Curve Geometry family					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siGeometryFamily					</td>\n\
					<td>Geometry family					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siGeometryShaderFamily					</td>\n\
					<td>Geometry shader family					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siImplicitGeometryFamily					</td>\n\
					<td>Implicit Geometry family					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siLatticeFamily					</td>\n\
					<td>Lattice family					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siLightPrimitiveFamily					</td>\n\
					<td>Light Primitive family					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siMeshFamily					</td>\n\
					<td>Mesh Geometry family					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siNullPrimitiveFamily					</td>\n\
					<td>Null Primitive family					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siNurbsCurveListFamily					</td>\n\
					<td>Nurbs CurveList Geometry family					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siNurbsSurfaceMeshFamily					</td>\n\
					<td>Nurbs Surface Mesh Geometry family					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siPointCloudFamily					</td>\n\
					<td>Point Cloud family					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siSurfaceCurveFamily					</td>\n\
					<td>Surface Curve Geometry family					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siSurfaceFamily					</td>\n\
					<td>Surface Geometry family					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Path		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
An <a href=\"#!/url=./files/objectexpr.htm\">Object Name</a>. This can be a partial name using wildcards. For example, \"a*\" returns all matches that begin with the character \"a\".		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'VBScript example\n\
\' Set up the example using a mesh grid, cube, cone, and a nurbs cube:\n\
set oRoot = activesceneroot\n\
oRoot.addgeometry \"grid\", \"meshsurface\"\n\
oRoot.addgeometry \"cube\", \"meshsurface\"\n\
oRoot.addgeometry \"cone\", \"meshsurface\"\n\
oRoot.addgeometry \"cube\", \"nurbssurface\"\n\
set oGeoms = oRoot.findchildren( ,,siGeometryFamily)\n\
logmessage \"The collection of geometry from the root is a \" &amp; typename( oGeoms ) \n\
logmessage \"There are \" &amp; oGeoms.count &amp; \" geometry objects under the root.\" \n\
logmessage \"\"\n\
for each item in oGeoms\n\
	logmessage item.name &amp; \" is a \" &amp; item.type &amp; \" \" &amp; typename( item )\n\
next\n\
set oNurbFam = oGeoms.filter( ,siNurbsSurfaceMeshFamily )\n\
set oPolyFam = oGeoms.filter( ,siMeshFamily )\n\
set oCones = oGeoms.filter( siConePrimType )\n\
set oCubes = oGeoms.filter( siCubePrimType )\n\
set oPolyCubes = oGeoms.filter( siCubePrimType, siMeshFamily )\n\
logmessage \"\"\n\
logmessage \"==========================================================================\"\n\
logmessage \" Stats for the collection:\"\n\
logmessage \" ------------------------\"\n\
logmessage \"	Total number of objects in collection: \" &amp; oGeoms.count\n\
logmessage \"	Number of Nurbs objects in collection: \" &amp; oNurbFam.count\n\
logmessage \"	Number of Mesh objects in collection: \" &amp; oPolyFam.count\n\
logmessage \"	Number of cones in collection: \" &amp; oCones.count\n\
logmessage \"	Number of cubes in collection: \" &amp; oCubes.count\n\
logmessage \"	Number of Mesh cubes in collection: \" &amp; oPolyCubes.count\n\
\' Output of above script is:\n\
\'INFO : \"The collection of geometry from the root is a X3DObjectCollection\"\n\
\'INFO : \"There are 4 geometry objects under the root.\"\n\
\'INFO : \"\"\n\
\'INFO : \"grid is a polymsh X3DObject\"\n\
\'INFO : \"cube is a polymsh X3DObject\"\n\
\'INFO : \"cone is a polymsh X3DObject\"\n\
\'INFO : \"cube1 is a surfmsh X3DObject\"\n\
\'INFO : \"\"\n\
\'INFO : \"==========================================================================\"\n\
\'INFO : \" Stats for the collection:\"\n\
\'INFO : \" ------------------------\"\n\
\'INFO : \"	Total number of objects in collection: 4\"\n\
\'INFO : \"	Number of Nurbs objects in collection: 1\"\n\
\'INFO : \"	Number of Mesh objects in collection: 3\"\n\
\'INFO : \"	Number of cones in collection: 1\"\n\
\'INFO : \"	Number of cubes in collection: 2\"\n\
\'INFO : \"	Number of Mesh cubes in collection: 1\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'VBScript example\n\
function create_scene()\n\
	NewScene , false\n\
	set root = ActiveProject.ActiveScene.Root\n\
	call root.AddGeometry( \"cone\", \"meshsurface\", \"MySuperCone\" )\n\
	call root.AddGeometry( \"Cylinder\", \"meshsurface\", \"MySuperCylinder\" )\n\
	call root.AddGeometry( \"cone\", \"nurbssurface\", \"MyAwesomeCone\" )\n\
	call root.AddGeometry( \"Torus\", \"nurbssurface\", \"MySuperTorus\" )\n\
	call root.AddGeometry( \"Torus\", \"meshsurface\", \"MyAwesomeTorus\" )\n\
	call root.AddPrimitive( \"cube\", \"MyImplicitCube\" )\n\
	call root.AddNull( \"MyAwesomeNull\" )\n\
	call root.AddCameraRig( \"Camera\" )\n\
	set create_scene = root\n\
end function\n\
function WriteCollection( in_collection, in_text )\n\
	on error resume next\n\
	LogMessage \"-----\"\n\
	LogMessage in_text\n\
	size = in_collection.count\n\
	LogMessage \"size of collection: \" &amp; size\n\
	if size = 0 then		\n\
		exit function\n\
	end if\n\
	for each i in in_collection\n\
		LogMessage i.type &amp; \":\" &amp; i.name \n\
	next\n\
end function\n\
set coll = create_scene().children\n\
arr = Array(siNurbsSurfaceMeshFamily,siNullPrimitiveFamily)\n\
WriteCollection coll.filter( , ,\"*Cone\" ), \"filter( , ,*Cone )\"	\n\
WriteCollection coll.filter( , ,\"MyAwesome*\" ), \"filter( ,,*Awesome* )\"\n\
WriteCollection coll.filter( siConePrimType, arr,\"MyAwesome*\" ), \"filter( Cone, Array(siNurbsSurfaceMeshFamily,siNullPrimitiveFamily), MyAwesome* )\"\n\
WriteCollection coll.filter( siConePrimType, arr ), \"filter( Cone, Array(siNurbsSurfaceMeshFamily,siNullPrimitiveFamily) )\"\n\
WriteCollection coll.filter( siConePrimType, siNurbsSurfaceMeshFamily ), \"filter( siConePrimType, siNurbsSurfaceMeshFamily )\"\n\
WriteCollection coll.filter( siConePrimType ), \"filter( Cone )\"\n\
WriteCollection coll.filter( siTorusPrimType, ,\"*Super*\" ), \"filter( Torus, ,*Super* )\"\n\
WriteCollection coll.filter( , siNurbsSurfaceMeshFamily ), \"filter( , siNurbsSurfaceMeshFamily )\"\n\
WriteCollection coll.filter( , siMeshFamily ), \"filter( , siMeshFamily )\"\n\
WriteCollection coll.filter( , siMeshFamily,\"*Cone\" ), \"filter( , siMeshFamily, *Cone )\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";