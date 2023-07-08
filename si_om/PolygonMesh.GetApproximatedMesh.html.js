var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PolygonMesh.GetApproximatedMesh</title>\n\
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
            <h1>PolygonMesh.GetApproximatedMesh</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/PolygonMesh.html\">PolygonMesh</a>.GetApproximatedMesh</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Gives the geometry description of the subdivided mesh given the subdivision rule, the level of \n\
subdivision and the discontinuity angle if used. The geometry data is returned in a 1-dimensional \n\
array and contains the following values: <br /><br />\n\
1) vertices: polygon vertex 2D array (Nx3) of x,y,z values.<br /><br />\n\
2) polygon data: ordered array of polygon definitions, each polygon is defined by a list of elements, \n\
the first element of a polygon definition must be set with the number of indices for that polygon. \n\
The ordering of vertices must respect a ccw ordering to get out going normals (right-hand rule). \n\
For example, an array of polygons with 4 indices each: {4,0,1,4,3,4,1,2,5,4... }  <br /><br />\n\
3) polygon node normal array: 2D array containing the normal x,y,z values for every polygon node. <br /><br /> \n\
4) polygon node for each polygon face: 1D array containing the number of polygon nodes on each polygon \n\
face followed by the corresponding polygon node index.<br /><br />\n\
Note: The C++ API equivalent function, <a href=\"#!/url=./si_cpp/classXSI_1_1PolygonMesh.html\">PolygonMesh::GetGeometryAccessor</a>, \n\
returns the <a href=\"#!/url=./si_cpp/classXSI_1_1CGeometryAccessor.html\">CGeometryAccessor</a> object which allows you\n\
to get only the data you need, and is therefore a much more efficient way to access this data.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Object PolygonMesh.GetApproximatedMesh( siSubdivisionRuleType in_SubRule, Int32 in_lSubdivisionLevel, Boolean in_bDiscontinuity, Double in_dDiscontinuityAngle );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oArray = PolygonMesh.GetApproximatedMesh( SubdivisionRule, SubdivisionLevel, UseDiscontinuity, DiscontinuityAngle );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>1-dimensional <a href=\"#!/url=./files/Array.htm\">Array</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SubdivisionRule		</td>\n\
		<td><a href=\"#!/url=./si_om/siSubdivisionRuleType.html\">siSubdivisionRuleType</a>		</td>\n\
		<td>\n\
This parameter contains the subdivision rule to use for the approximation.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SubdivisionLevel		</td>\n\
		<td><a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
This parameter contains the subdivision rule to use for the approximation.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">UseDiscontinuity		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
  Specified if we want to use the discontinuity angle or not.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">DiscontinuityAngle		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
  Specifies the angle of discontinuity.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">set oCube = ActiveSceneRoot.AddGeometry( \"Cube\",\"MeshSurface\" )\n\
set oGApprox = oCube.Properties.Find(\"geomapprox\")\n\
MakeLocal oGApprox\n\
oGApprox.Parameters(\"gapproxmosl\").value = 1\n\
values = oCube.ActivePrimitive.Geometry.GetApproximatedMesh( _\n\
		oGApprox.Parameters(\"gapproxmosr\").value,_\n\
		oGApprox.Parameters(\"gapproxmosl\").value,_\n\
		oGApprox.Parameters(\"gapproxmoad\").value,_\n\
		oGApprox.Parameters(\"gapproxmoan\").value )\n\
aVertices = values(0)\n\
aPolygonData = values(1)\n\
set oApproximatedCube = ActiveSceneRoot.AddPolygonMesh( aVertices, aPolygonData )</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";