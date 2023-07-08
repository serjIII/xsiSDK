var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>X3DObject.FindChildren2</title>\n\
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
            <h1>X3DObject.FindChildren2</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a>.FindChildren2</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v9.0 (2011)</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Finds all <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> children of an <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> \n\
object that match a set of search criteria. By  default the search is done \n\
recursively. The function returns all objects satisfying the following criteria: \n\
name, type and family(ies).  This method is typically used for hierarchically \n\
navigating a scene of 3D objects.\n\
<br /><br />\n\
To get the collection of all <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a>s children under a given\n\
<a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a>, including those nested inside all <a href=\"#!/url=./si_om/Model.html\">Model</a>s\n\
and parented under <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a>s, call this method with no arguments.\n\
For getting all <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> objects in a scene you may want to use\n\
<a href=\"#!/url=./si_cmds/FindObjects.html\">FindObjects</a> instead for better performance.\n\
<br /><br />\n\
This method differs from <a href=\"#!/url=./si_om/X3DObject.FindChildren.html\">X3DObject.FindChildren</a> because this method \n\
will not return itself if its family matches the specified family. For example, calling \n\
\'cube.FindChildren(\"\", \"\", si3DObjectFamily)\' will return a collection containing the \n\
cube itself but this method will return an empty collection.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>X3DObjectCollection X3DObject.FindChildren2( Object in_varName, String in_pbstrType, Object in_famArray, Boolean in_bRecursive );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = X3DObject.FindChildren2( [Name], [Type], [Family], [Recursive] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/X3DObjectCollection.html\">X3DObjectCollection</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a> or <a href=\"#!/url=./si_om/CollectionItem.html\">CollectionItem</a>		</td>\n\
		<td>\n\
\n\
		A name expression or a <a href=\"#!/url=./si_om/CollectionItem.html\">CollectionItem</a>, the expression can \n\
		also contain wildcard characters. \n\
			</td>\n\
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
		considers only the children objects defined with a primitive of this type. \n\
		The valid types are listed below.\n\
				<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
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
					<td class=\"name\">siPolyMeshType					</td>\n\
					<td>Polygon Mesh type					</td>\n\
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
		<td class=\"name\">Family		</td>\n\
		<td><a href=\"#!/url=./si_om/siFamily.html\">siFamily</a> or <a href=\"#!/url=./files/Array.htm\">Array</a> of siFamily elements.		</td>\n\
		<td>\n\
\n\
		An array of families defined by siFamily or an empty array if none are required. \n\
		The families are used for narrowing down the search, the array can contain \n\
		X3DObject families like si3DObjectFamily or primitive families such as \n\
		siNurbsSurfaceMeshFamily or siNullPrimitiveFamily. Only the children objects \n\
		that match the supplied families are considered. If primitive families are \n\
		supplied then only the objects defined with a primitive that belongs to one \n\
		of them are considered. The valid families are listed below.\n\
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
		<td class=\"name\">Recursive		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
\n\
		Recurse if True, otherwise the search is done on the immediate children.  This recursion will\n\
		include the contents of any <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a>s found nested underneath the object.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
True			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
# FindChildren vs. FindChildren2 Python Example\n\
#\n\
from win32com.client import constants as const\n\
Application.NewScene(\"\", False)\n\
# Create a cube\n\
Application.CreatePrim(\"Cube\", \"MeshSurface\", \"cube\", \"\")\n\
root = Application.ActiveSceneRoot\n\
cube = root.FindChild(\"cube\")\n\
# Use \"FindChildren\" to get the \"si3DObjectFamily\" children of the cube\n\
# NOTE: FindChildren includes the parent if it is of the same family\n\
children = cube.FindChildren(\"\", \"\", const.si3DObjectFamily, True)\n\
# The count will be one even if the cube has no children, because the\n\
# cube family is of si3DObjectFamily\n\
Application.LogMessage( \"FindChildren  count: \" + str(children.Count))\n\
# Use \"FindChildren2\" to get the \"si3DObjectFamily\" children of the cube\n\
# NOTE: FindChildren2 always ignore the parent regarless of its family\n\
children = cube.FindChildren2(\"\", \"\", const.si3DObjectFamily, True)\n\
# The count will be zero because the cube has no children\n\
Application.LogMessage( \"FindChildren2 count: \" + str(children.Count))\n\
# Expected Results:\n\
# INFO : FindChildren  count: 1\n\
# INFO : FindChildren2 count: 0</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/X3DObject.Children.html\">X3DObject.Children</a> <a href=\"#!/url=./si_om/X3DObject.FindChild.html\">X3DObject.FindChild</a> <a href=\"#!/url=./si_om/X3DObject.FindChild2.html\">X3DObject.FindChild2</a> <a href=\"#!/url=./si_cmds/EnumElements.html\">EnumElements</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";