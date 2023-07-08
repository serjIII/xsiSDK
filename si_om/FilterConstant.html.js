var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>FilterConstant</title>\n\
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
            <h1>FilterConstant</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">FilterConstant</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>All filter string constants</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>StringModule.siBoundaryFilter                                               // boundary\n\
StringModule.siCameraFilter                                                 // camera\n\
StringModule.siChainElementFilter                                           // chainelement\n\
StringModule.siClusterFilter                                                // cluster\n\
StringModule.siConstraintFilter                                             // constraint\n\
StringModule.siControlFilter                                                // controlobject\n\
StringModule.siCurveFilter                                                  // curve\n\
StringModule.siEdgeFilter                                                   // edge\n\
StringModule.siEffectorFilter                                               // effector\n\
StringModule.siGenericObjectFilter                                          // object\n\
StringModule.siGeometryFilter                                               // geometry\n\
StringModule.siGroupFilter                                                  // group\n\
StringModule.siImplicitFilter                                               // implicit\n\
StringModule.siIsopointFilter                                               // isopoint\n\
StringModule.siKnotFilter                                                   // knot\n\
StringModule.siLatticeFilter                                                // lattice\n\
StringModule.siLayerFilter                                                  // layer\n\
StringModule.siLightFilter                                                  // light\n\
StringModule.siLightPartitionFilter                                         // lightpartition\n\
StringModule.siModelFilter                                                  // model\n\
StringModule.siNullFilter                                                   // null\n\
StringModule.siObjectFilter                                                 // sceneobject\n\
StringModule.siObjectPartitionFilter                                        // objectpartition\n\
StringModule.siOperatorFilter                                               // operator\n\
StringModule.siPointCloudFilter                                             // PointCloud\n\
StringModule.siPointFilter                                                  // point\n\
StringModule.siPolygonFilter                                                // polygon\n\
StringModule.siPolyMeshFilter                                               // polygonmesh\n\
StringModule.siPrimitiveFilter                                              // primitive\n\
StringModule.siPropertyFilter                                               // property\n\
StringModule.siSceneFilter                                                  // scene\n\
StringModule.siShaderFilter                                                 // shader\n\
StringModule.siSkeletonJointFilter                                          // joint\n\
StringModule.siSubComponentFilter                                           // subcomponent\n\
StringModule.siSubSurfaceFilter                                             // SubSurface\n\
StringModule.siSurfaceCurveFilter                                           // SurfaceCurve\n\
StringModule.siSurfaceMeshFilter                                            // surfacemesh\n\
StringModule.siTextureControlFilter                                         // texturecontrol\n\
StringModule.siTrimCurveFilter                                              // trimcurve\n\
StringModule.siUIsolineFilter                                               // uisoline\n\
StringModule.siVIsolineFilter                                               // visoline\n\
StringModule.siUKnotCurveFilter                                             // uknotcurve\n\
StringModule.siVKnotCurveFilter                                             // vknotcurve\n\
StringModule.siWaveFilter                                                   // wave</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siBoundaryFilter\"> </a>siBoundaryFilter		</td>\n\
		<td class=\"example\">boundary		</td>\n\
		<td>\n\
Filters by boundaries (on active NURBS objects)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCameraFilter\"> </a>siCameraFilter		</td>\n\
		<td class=\"example\">camera		</td>\n\
		<td>\n\
Filters by cameras		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siChainElementFilter\"> </a>siChainElementFilter		</td>\n\
		<td class=\"example\">chainelement		</td>\n\
		<td>\n\
Filters by chain elements		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClusterFilter\"> </a>siClusterFilter		</td>\n\
		<td class=\"example\">cluster		</td>\n\
		<td>\n\
Filters by clusters		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siConstraintFilter\"> </a>siConstraintFilter		</td>\n\
		<td class=\"example\">constraint		</td>\n\
		<td>\n\
Filters by constraints		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlFilter\"> </a>siControlFilter		</td>\n\
		<td class=\"example\">controlobject		</td>\n\
		<td>\n\
Filters by control objects		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCurveFilter\"> </a>siCurveFilter		</td>\n\
		<td class=\"example\">curve		</td>\n\
		<td>\n\
Filters by curves		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siEdgeFilter\"> </a>siEdgeFilter		</td>\n\
		<td class=\"example\">edge		</td>\n\
		<td>\n\
Filters by edges (on active 3D objects)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siEffectorFilter\"> </a>siEffectorFilter		</td>\n\
		<td class=\"example\">effector		</td>\n\
		<td>\n\
Filters by chain effectors		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGenericObjectFilter\"> </a>siGenericObjectFilter		</td>\n\
		<td class=\"example\">object		</td>\n\
		<td>\n\
Filters by any object		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGeometryFilter\"> </a>siGeometryFilter		</td>\n\
		<td class=\"example\">geometry		</td>\n\
		<td>\n\
Filters by any type of geometric 3D object		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGroupFilter\"> </a>siGroupFilter		</td>\n\
		<td class=\"example\">group		</td>\n\
		<td>\n\
Filters by groups		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImplicitFilter\"> </a>siImplicitFilter		</td>\n\
		<td class=\"example\">implicit		</td>\n\
		<td>\n\
Filters by implicit primitives		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siIsopointFilter\"> </a>siIsopointFilter		</td>\n\
		<td class=\"example\">isopoint		</td>\n\
		<td>\n\
Filters by isopoints (on active 3D objects)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siKnotFilter\"> </a>siKnotFilter		</td>\n\
		<td class=\"example\">knot		</td>\n\
		<td>\n\
Filters by knots (on active 3D objects)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLatticeFilter\"> </a>siLatticeFilter		</td>\n\
		<td class=\"example\">lattice		</td>\n\
		<td>\n\
Filters by implicit lattices 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLayerFilter\"> </a>siLayerFilter		</td>\n\
		<td class=\"example\">layer		</td>\n\
		<td>\n\
Filters by layers		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLightFilter\"> </a>siLightFilter		</td>\n\
		<td class=\"example\">light		</td>\n\
		<td>\n\
Filters by lights		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLightPartitionFilter\"> </a>siLightPartitionFilter		</td>\n\
		<td class=\"example\">lightpartition		</td>\n\
		<td>\n\
Filters by light partitions		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siModelFilter\"> </a>siModelFilter		</td>\n\
		<td class=\"example\">model		</td>\n\
		<td>\n\
Filters by models		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siNullFilter\"> </a>siNullFilter		</td>\n\
		<td class=\"example\">null		</td>\n\
		<td>\n\
Filters by nulls		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siObjectFilter\"> </a>siObjectFilter		</td>\n\
		<td class=\"example\">sceneobject		</td>\n\
		<td>\n\
Filters by 3D objects only		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siObjectPartitionFilter\"> </a>siObjectPartitionFilter		</td>\n\
		<td class=\"example\">objectpartition		</td>\n\
		<td>\n\
Filters by object partitions		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOperatorFilter\"> </a>siOperatorFilter		</td>\n\
		<td class=\"example\">operator		</td>\n\
		<td>\n\
Filters by operators		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPointCloudFilter\"> </a>siPointCloudFilter		</td>\n\
		<td class=\"example\">PointCloud		</td>\n\
		<td>\n\
Filters by point clouds 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPointFilter\"> </a>siPointFilter		</td>\n\
		<td class=\"example\">point		</td>\n\
		<td>\n\
Filters by points		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPolygonFilter\"> </a>siPolygonFilter		</td>\n\
		<td class=\"example\">polygon		</td>\n\
		<td>\n\
Filters by polygons		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPolyMeshFilter\"> </a>siPolyMeshFilter		</td>\n\
		<td class=\"example\">polygonmesh		</td>\n\
		<td>\n\
Filters by polygon meshes		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPrimitiveFilter\"> </a>siPrimitiveFilter		</td>\n\
		<td class=\"example\">primitive		</td>\n\
		<td>\n\
Filters by primitives		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPropertyFilter\"> </a>siPropertyFilter		</td>\n\
		<td class=\"example\">property		</td>\n\
		<td>\n\
Filters by properties		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSceneFilter\"> </a>siSceneFilter		</td>\n\
		<td class=\"example\">scene		</td>\n\
		<td>\n\
Filters by scenes		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderFilter\"> </a>siShaderFilter		</td>\n\
		<td class=\"example\">shader		</td>\n\
		<td>\n\
Filters by shaders.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSkeletonJointFilter\"> </a>siSkeletonJointFilter		</td>\n\
		<td class=\"example\">joint		</td>\n\
		<td>\n\
Filters by skeleton joint properties 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSubComponentFilter\"> </a>siSubComponentFilter		</td>\n\
		<td class=\"example\">subcomponent		</td>\n\
		<td>\n\
Filters by subcomponents		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSubSurfaceFilter\"> </a>siSubSurfaceFilter		</td>\n\
		<td class=\"example\">subsurface		</td>\n\
		<td>\n\
Filters by subsurfaces (on active 3D objects)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSurfaceCurveFilter\"> </a>siSurfaceCurveFilter		</td>\n\
		<td class=\"example\">surfacecurve		</td>\n\
		<td>\n\
Filters by surface curves (on active 3D objects)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSurfaceMeshFilter\"> </a>siSurfaceMeshFilter		</td>\n\
		<td class=\"example\">surfacemesh		</td>\n\
		<td>\n\
Filters by surface meshes		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTextureControlFilter\"> </a>siTextureControlFilter		</td>\n\
		<td class=\"example\">texturecontrol		</td>\n\
		<td>\n\
Filters by texture controls		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTrimCurveFilter\"> </a>siTrimCurveFilter		</td>\n\
		<td class=\"example\">trimcurve		</td>\n\
		<td>\n\
Filters by trim curves (on active 3D objects)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIsolineFilter\"> </a>siUIsolineFilter		</td>\n\
		<td class=\"example\">uisoline		</td>\n\
		<td>\n\
Filters by U isolines (on active 3D objects)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siVIsolineFilter\"> </a>siVIsolineFilter		</td>\n\
		<td class=\"example\">visoline		</td>\n\
		<td>\n\
Filters by V isolines (on active 3D objects)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUKnotCurveFilter\"> </a>siUKnotCurveFilter		</td>\n\
		<td class=\"example\">uknotcurve		</td>\n\
		<td>\n\
Filters by U knot curves (on active 3D objects)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siVKnotCurveFilter\"> </a>siVKnotCurveFilter		</td>\n\
		<td class=\"example\">vknotcurve		</td>\n\
		<td>\n\
Filters by V knot curves (on active 3D objects)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWaveFilter\"> </a>siWaveFilter		</td>\n\
		<td class=\"example\">wave		</td>\n\
		<td>\n\
Filters by wave controls		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/ConvertSelection.html\">ConvertSelection</a> <a href=\"#!/url=./si_cmds/ConvertSelectionToEdges.html\">ConvertSelectionToEdges</a> <a href=\"#!/url=./si_cmds/ConvertSelectionToPoints.html\">ConvertSelectionToPoints</a> <a href=\"#!/url=./si_cmds/ConvertSelectionToPolygons.html\">ConvertSelectionToPolygons</a> <a href=\"#!/url=./si_cmds/DeselectAllUsingFilter.html\">DeselectAllUsingFilter</a> <a href=\"#!/url=./si_cmds/InvertSelection.html\">InvertSelection</a> <a href=\"#!/url=./si_cmds/PickElement.html\">PickElement</a> <a href=\"#!/url=./si_cmds/SelectAdjacent.html\">SelectAdjacent</a> <a href=\"#!/url=./si_cmds/SelectAllUsingFilter.html\">SelectAllUsingFilter</a> <a href=\"#!/url=./si_cmds/SelectFilter.html\">SelectFilter</a> <a href=\"#!/url=./si_cmds/SetSelFilter.html\">SetSelFilter</a> <a href=\"#!/url=./si_cmds/SIFilter.html\">SIFilter</a></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Filter.html\">Filter</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";