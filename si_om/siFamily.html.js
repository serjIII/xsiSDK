var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siFamily</title>\n\
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
            <h1>siFamily</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siFamily</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>The Softimage object family constant strings.</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>StringModule.si0DComponentFamily                                            // 0DComponent\n\
StringModule.si1DComponentFamily                                            // 1DComponent\n\
StringModule.si2DComponentFamily                                            // 2DComponent\n\
StringModule.si3DObjectFamily                                               // 3D Objects\n\
StringModule.siAssignmentOperatorFamily                                     // AssignmentOperators\n\
StringModule.siCameraFamily                                                 // Camera\n\
StringModule.siChainElementFamily                                           // Chain Elements\n\
StringModule.siClusterableComponentFamily                                   // Clusterable Components\n\
StringModule.siClusterFamily                                                // Clusters\n\
StringModule.siConstraintFamily                                             // Constraints\n\
StringModule.siContourContrastShaderFamily                                  // Contour Contrast Shaders\n\
StringModule.siContourShaderFamily                                          // Contour Shaders\n\
StringModule.siContourStoreShaderFamily                                     // Contour Store Shaders\n\
StringModule.siControlObjectFamily                                          // Control Objects\n\
StringModule.siControlObjectNurbsTextureFamily                              // Control Objects Nurbs Texture\n\
StringModule.siControlObjectTextureFamily                                   // Control Objects Texture\n\
StringModule.siControlObjectTextureProjectionFamily                         // Control Objects Texture Projection\n\
StringModule.siConverterOperatorFamily                                      // Converters\n\
StringModule.siCurveFamily                                                  // Curves\n\
StringModule.siDeformOperatorFamily                                         // DeformOperators\n\
StringModule.siDisplacementShaderFamily                                     // Displacement Shaders\n\
StringModule.siEnvironmentShaderFamily                                      // Environment Shaders\n\
StringModule.siFxOperatorFamily                                             // FxOperator\n\
StringModule.siGeneratorOperatorFamily                                      // GeneratorOperators\n\
StringModule.siGeometryFamily                                               // Geometries\n\
StringModule.siGeometryShaderFamily                                         // Geometry Shaders\n\
StringModule.siGroupFamily                                                  // Groups\n\
StringModule.siImageOperatorFamily                                          // Image Operators\n\
StringModule.siImplicitGeometryFamily                                       // Geometry\n\
StringModule.siKineInfoFamily                                               // KineInfo\n\
StringModule.siLatticeFamily                                                // Lattices\n\
StringModule.siLensShaderFamily                                             // Lens Shaders\n\
StringModule.siLightPhotonShaderFamily                                      // Light Photon Shaders\n\
StringModule.siLightPrimitiveFamily                                         // Lights\n\
StringModule.siLightShaderFamily                                            // Light Shaders\n\
StringModule.siMarkerOperatorFamily                                         // MarkerOperators\n\
StringModule.siMaterialFamily                                               // Material\n\
StringModule.siMaterialShaderFamily                                         // Material Shaders\n\
StringModule.siMeshFamily                                                   // Mesh Geometries\n\
StringModule.siNullPrimitiveFamily                                          // Nulls\n\
StringModule.siNurbsCurveListFamily                                         // Nurbs CurveList Geometries\n\
StringModule.siNurbsSurfaceMeshFamily                                       // Nurbs Surface Mesh Geometries\n\
StringModule.siOperatorFamily                                               // Operators\n\
StringModule.siOutputShaderFamily                                           // Output Shaders\n\
StringModule.siParticleControlObjectFamily                                  // Particle Control Object\n\
StringModule.siParticleFamily                                               // Particle\n\
StringModule.siPassFamily                                                   // Pass\n\
StringModule.siPatchNetworkFamily                                           // Patch Networks\n\
StringModule.siPhotonShaderFamily                                           // Photon Shaders\n\
StringModule.siPlanarObjectFamily                                           // Planar Objects\n\
StringModule.siPointCloudFamily                                             // Point Cloud Geometries\n\
StringModule.siPropertyFamily                                               // Properties\n\
StringModule.siRealTimeShaderFamily                                         // RealTime Shaders\n\
StringModule.siShaderFamily                                                 // Shaders\n\
StringModule.siShadowShaderFamily                                           // Shadow Shaders\n\
StringModule.siSubComponentFamily                                           // SubComponents\n\
StringModule.siSurfaceCurveFamily                                           // Surface Curves\n\
StringModule.siSurfaceFamily                                                // Surfaces\n\
StringModule.siTextureShaderFamily                                          // Texture Shaders\n\
StringModule.siTopologyOperatorFamily                                       // TopologyOperators\n\
StringModule.siVirtualComponentFamily                                       // Virtual Components\n\
StringModule.siVirtualCurveFamily                                           // Virtual Curves\n\
StringModule.siVolumeShaderFamily                                           // Volume Shaders</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"si0DComponentFamily\"> </a>si0DComponentFamily		</td>\n\
		<td class=\"example\">0DComponent		</td>\n\
		<td>\n\
0D Component family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"si1DComponentFamily\"> </a>si1DComponentFamily		</td>\n\
		<td class=\"example\">1DComponent		</td>\n\
		<td>\n\
1D Component family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"si2DComponentFamily\"> </a>si2DComponentFamily		</td>\n\
		<td class=\"example\">2DComponent		</td>\n\
		<td>\n\
2D Component family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"si3DObjectFamily\"> </a>si3DObjectFamily		</td>\n\
		<td class=\"example\">3D Objects		</td>\n\
		<td>\n\
3D Object family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siAssignmentOperatorFamily\"> </a>siAssignmentOperatorFamily		</td>\n\
		<td class=\"example\">AssignmentOperators		</td>\n\
		<td>\n\
Assignment operator family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCameraFamily\"> </a>siCameraFamily		</td>\n\
		<td class=\"example\">Camera		</td>\n\
		<td>\n\
Camera family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siChainElementFamily\"> </a>siChainElementFamily		</td>\n\
		<td class=\"example\">Chain Elements		</td>\n\
		<td>\n\
Chain Element family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClusterableComponentFamily\"> </a>siClusterableComponentFamily		</td>\n\
		<td class=\"example\">Clusterable Components		</td>\n\
		<td>\n\
Clusterable Component family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClusterFamily\"> </a>siClusterFamily		</td>\n\
		<td class=\"example\">Clusters		</td>\n\
		<td>\n\
Cluster family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siConstraintFamily\"> </a>siConstraintFamily		</td>\n\
		<td class=\"example\">Constraints		</td>\n\
		<td>\n\
Constraint property family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siContourContrastShaderFamily\"> </a>siContourContrastShaderFamily		</td>\n\
		<td class=\"example\">Contour Contrast Shaders		</td>\n\
		<td>\n\
Contour Contrast shader family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siContourShaderFamily\"> </a>siContourShaderFamily		</td>\n\
		<td class=\"example\">Contour Shaders		</td>\n\
		<td>\n\
Contour shader family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siContourStoreShaderFamily\"> </a>siContourStoreShaderFamily		</td>\n\
		<td class=\"example\">Contour Store Shaders		</td>\n\
		<td>\n\
Contour Store shader family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlObjectFamily\"> </a>siControlObjectFamily		</td>\n\
		<td class=\"example\">Control Objects		</td>\n\
		<td>\n\
Control Object family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlObjectNurbsTextureFamily\"> </a>siControlObjectNurbsTextureFamily		</td>\n\
		<td class=\"example\">Control Objects Nurbs Texture		</td>\n\
		<td>\n\
Control Object Nurbs Texture family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlObjectTextureFamily\"> </a>siControlObjectTextureFamily		</td>\n\
		<td class=\"example\">Control Objects Texture		</td>\n\
		<td>\n\
Control Object Texture family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlObjectTextureProjectionFamily\"> </a>siControlObjectTextureProjectionFamily		</td>\n\
		<td class=\"example\">Control Objects Texture Projection		</td>\n\
		<td>\n\
Control Object Texture Projection family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siConverterOperatorFamily\"> </a>siConverterOperatorFamily		</td>\n\
		<td class=\"example\">Converters		</td>\n\
		<td>\n\
Converter operator family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCurveFamily\"> </a>siCurveFamily		</td>\n\
		<td class=\"example\">Curves		</td>\n\
		<td>\n\
Curve Geometry family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDeformOperatorFamily\"> </a>siDeformOperatorFamily		</td>\n\
		<td class=\"example\">DeformOperators		</td>\n\
		<td>\n\
Deform operator family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDisplacementShaderFamily\"> </a>siDisplacementShaderFamily		</td>\n\
		<td class=\"example\">Displacement Shaders		</td>\n\
		<td>\n\
Displacement shader family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siEnvironmentShaderFamily\"> </a>siEnvironmentShaderFamily		</td>\n\
		<td class=\"example\">Environment Shaders		</td>\n\
		<td>\n\
Environment shader family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFxOperatorFamily\"> </a>siFxOperatorFamily		</td>\n\
		<td class=\"example\">FxOperator		</td>\n\
		<td>\n\
Fx Operator family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGeneratorOperatorFamily\"> </a>siGeneratorOperatorFamily		</td>\n\
		<td class=\"example\">GeneratorOperators		</td>\n\
		<td>\n\
Generator operator family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGeometryFamily\"> </a>siGeometryFamily		</td>\n\
		<td class=\"example\">Geometries		</td>\n\
		<td>\n\
Geometry family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGeometryShaderFamily\"> </a>siGeometryShaderFamily		</td>\n\
		<td class=\"example\">Geometry Shaders		</td>\n\
		<td>\n\
Geometry shader family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGroupFamily\"> </a>siGroupFamily		</td>\n\
		<td class=\"example\">Groups		</td>\n\
		<td>\n\
Group family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImageOperatorFamily\"> </a>siImageOperatorFamily		</td>\n\
		<td class=\"example\">Image Operators		</td>\n\
		<td>\n\
Image Operator family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImplicitGeometryFamily\"> </a>siImplicitGeometryFamily		</td>\n\
		<td class=\"example\">Geometry		</td>\n\
		<td>\n\
Implicit Geometry family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siKineInfoFamily\"> </a>siKineInfoFamily		</td>\n\
		<td class=\"example\">KineInfo		</td>\n\
		<td>\n\
KineInfo property family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLatticeFamily\"> </a>siLatticeFamily		</td>\n\
		<td class=\"example\">Lattices		</td>\n\
		<td>\n\
Lattice family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLensShaderFamily\"> </a>siLensShaderFamily		</td>\n\
		<td class=\"example\">Lens Shaders		</td>\n\
		<td>\n\
Lens shader family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLightPhotonShaderFamily\"> </a>siLightPhotonShaderFamily		</td>\n\
		<td class=\"example\">Light Photon Shaders		</td>\n\
		<td>\n\
Light Photon shader family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLightPrimitiveFamily\"> </a>siLightPrimitiveFamily		</td>\n\
		<td class=\"example\">Lights		</td>\n\
		<td>\n\
Light Primitive family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLightShaderFamily\"> </a>siLightShaderFamily		</td>\n\
		<td class=\"example\">Light Shaders		</td>\n\
		<td>\n\
Light shader family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMarkerOperatorFamily\"> </a>siMarkerOperatorFamily		</td>\n\
		<td class=\"example\">MarkerOperators		</td>\n\
		<td>\n\
Marker operator family (mainly the construction regions)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMaterialFamily\"> </a>siMaterialFamily		</td>\n\
		<td class=\"example\">Material		</td>\n\
		<td>\n\
Material property family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMaterialShaderFamily\"> </a>siMaterialShaderFamily		</td>\n\
		<td class=\"example\">Material Shaders		</td>\n\
		<td>\n\
Material shader family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMeshFamily\"> </a>siMeshFamily		</td>\n\
		<td class=\"example\">Mesh Geometries		</td>\n\
		<td>\n\
Mesh Geometry family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siNullPrimitiveFamily\"> </a>siNullPrimitiveFamily		</td>\n\
		<td class=\"example\">Nulls		</td>\n\
		<td>\n\
Null Primitive family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siNurbsCurveListFamily\"> </a>siNurbsCurveListFamily		</td>\n\
		<td class=\"example\">Nurbs CurveList Geometries		</td>\n\
		<td>\n\
Nurbs CurveList Geometry family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siNurbsSurfaceMeshFamily\"> </a>siNurbsSurfaceMeshFamily		</td>\n\
		<td class=\"example\">Nurbs Surface Mesh Geometries		</td>\n\
		<td>\n\
Nurbs Surface Mesh Geometry family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOperatorFamily\"> </a>siOperatorFamily		</td>\n\
		<td class=\"example\">Operators		</td>\n\
		<td>\n\
Operator family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOutputShaderFamily\"> </a>siOutputShaderFamily		</td>\n\
		<td class=\"example\">Output Shaders		</td>\n\
		<td>\n\
Output shader family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siParticleControlObjectFamily\"> </a>siParticleControlObjectFamily		</td>\n\
		<td class=\"example\">Particle Control Object		</td>\n\
		<td>\n\
Particle Control Object family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siParticleFamily\"> </a>siParticleFamily		</td>\n\
		<td class=\"example\">Particle		</td>\n\
		<td>\n\
Particle family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPassFamily\"> </a>siPassFamily		</td>\n\
		<td class=\"example\">Pass		</td>\n\
		<td>\n\
Pass family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPatchNetworkFamily\"> </a>siPatchNetworkFamily		</td>\n\
		<td class=\"example\">Patch Networks		</td>\n\
		<td>\n\
Patch Network family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPhotonShaderFamily\"> </a>siPhotonShaderFamily		</td>\n\
		<td class=\"example\">Photon Shaders		</td>\n\
		<td>\n\
Photon shader family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPlanarObjectFamily\"> </a>siPlanarObjectFamily		</td>\n\
		<td class=\"example\">Planar Objects		</td>\n\
		<td>\n\
Planar Object family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPointCloudFamily\"> </a>siPointCloudFamily		</td>\n\
		<td class=\"example\">Point Cloud Geometries		</td>\n\
		<td>\n\
Point Cloud Geometry family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPropertyFamily\"> </a>siPropertyFamily		</td>\n\
		<td class=\"example\">Properties		</td>\n\
		<td>\n\
Property family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRealTimeShaderFamily\"> </a>siRealTimeShaderFamily		</td>\n\
		<td class=\"example\">RealTime Shaders		</td>\n\
		<td>\n\
RealTime shader family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderFamily\"> </a>siShaderFamily		</td>\n\
		<td class=\"example\">Shaders		</td>\n\
		<td>\n\
Shader family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShadowShaderFamily\"> </a>siShadowShaderFamily		</td>\n\
		<td class=\"example\">Shadow Shaders		</td>\n\
		<td>\n\
Shadow shader family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSubComponentFamily\"> </a>siSubComponentFamily		</td>\n\
		<td class=\"example\">SubComponents		</td>\n\
		<td>\n\
SubComponent family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSurfaceCurveFamily\"> </a>siSurfaceCurveFamily		</td>\n\
		<td class=\"example\">Surface Curves		</td>\n\
		<td>\n\
Surface Curve Geometry family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSurfaceFamily\"> </a>siSurfaceFamily		</td>\n\
		<td class=\"example\">Surfaces		</td>\n\
		<td>\n\
Surface Geometry family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTextureShaderFamily\"> </a>siTextureShaderFamily		</td>\n\
		<td class=\"example\">Texture Shaders		</td>\n\
		<td>\n\
Texture shader family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTopologyOperatorFamily\"> </a>siTopologyOperatorFamily		</td>\n\
		<td class=\"example\">TopologyOperators		</td>\n\
		<td>\n\
Topology operator family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siVirtualComponentFamily\"> </a>siVirtualComponentFamily		</td>\n\
		<td class=\"example\">Virtual Components		</td>\n\
		<td>\n\
Virtual Component family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siVirtualCurveFamily\"> </a>siVirtualCurveFamily		</td>\n\
		<td class=\"example\">Virtual Curves		</td>\n\
		<td>\n\
Virtual Curve family		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siVolumeShaderFamily\"> </a>siVolumeShaderFamily		</td>\n\
		<td class=\"example\">Volume Shaders		</td>\n\
		<td>\n\
Volume shader family		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_om/ConstructionHistory.Filter.html\">ConstructionHistory.Filter</a> <a href=\"#!/url=./si_om/Dictionary.Info.html\">Dictionary.Info</a> <a href=\"#!/url=./si_om/Parameter.ConnectFromPreset.html\">Parameter.ConnectFromPreset</a> <a href=\"#!/url=./si_om/ProjectItem.BelongsTo.html\">ProjectItem.BelongsTo</a> <a href=\"#!/url=./si_om/X3DObject.FindChild.html\">X3DObject.FindChild</a> <a href=\"#!/url=./si_om/X3DObject.FindChildren.html\">X3DObject.FindChildren</a> <a href=\"#!/url=./si_om/X3DObjectCollection.Filter.html\">X3DObjectCollection.Filter</a> <a href=\"#!/url=./si_cpp/classXSI_1_1X3DObject.html#FindChild\">X3DObject::FindChild</a> <a href=\"#!/url=./si_cpp/classXSI_1_1X3DObject.html#FindChildren\">X3DObject::FindChildren</a></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Dictionary.html\">Dictionary</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";