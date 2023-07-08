var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>X3DObjectCollection.Find</title>\n\
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
            <h1>X3DObjectCollection.Find</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/X3DObjectCollection.html\">X3DObjectCollection</a>.Find</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns the first member of this collection that matches the type criteria. \n\
If no item is found, it returns \"Nothing\", which you can use to trap errors.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>X3DObject X3DObjectCollection.Find( String in_filter );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = X3DObjectCollection.Find( [Type] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Type		</td>\n\
		<td><a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
		<td>\n\
\n\
		The type of object to look for defined by <a href=\"#!/url=./si_om/siType.html\">siType</a> or an \n\
		empty string if the type is not required. The type can be a specific \n\
		<a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> type such as siModelType and si3DObjectType or \n\
		a primitive type such as siPolyMeshType or siSrfMeshPrimType. If a primitive \n\
		type is supplied, the function returns the first child object defined with \n\
		a primitive of this type. \n\
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
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
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
set oCone = oGeoms.find( \"cone\" )\n\
set oCube = oGeoms.find( \"cube\" )\n\
set oGrid = oGeoms.find( \"grid\" )\n\
logmessage \"\"\n\
logmessage \"==========================================================================\"\n\
logmessage \" Stats for the collection:\"\n\
logmessage \" ------------------------\"\n\
logmessage \"	Total number of objects in collection: \" &amp; oGeoms.count\n\
logmessage \"	Name of the first cone in the collection: \" &amp; oCone.name\n\
logmessage \"	Name of the first cube in the collection: \" &amp; oCube.name\n\
\' Try some error trapping ( if you are trying to use a find criteria that returns Nothing, \n\
\' you will see this error message: \'ERROR : \"Object required: \'oCube1\'\" )\n\
set oCube1 = oGeoms.find( \"cube1\" )\n\
if typename( oCube1 ) = \"Nothing\" then\n\
	logmessage \"	Can\'t get the name of the other cube in the collection.\"\n\
else \n\
	logmessage \"	Name of the other cube in the collection: \" &amp; oCube1.name\n\
end if\n\
logmessage \"	Name of the first grid in the collection: \" &amp; oGrid.name\n\
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
\'INFO : \"	Name of the first cone in the collection: cone\"\n\
\'INFO : \"	Name of the first cube in the collection: cube\"\n\
\'INFO : \"	Can\'t get the name of the other cube in the collection.\"\n\
\'INFO : \"	Name of the first grid in the collection: grid\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";