var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PolygonMesh.GetApproximatedMeshAndAttributes</title>\n\
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
            <h1>PolygonMesh.GetApproximatedMeshAndAttributes</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/PolygonMesh.html\">PolygonMesh</a>.GetApproximatedMeshAndAttributes</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Gives the geometry description of the subdivided mesh given the subdivision rule, the level of subdivision \n\
and the discontinuity angle if used. The geometry data is returned in a one dimension array and contains \n\
the following values:  <br /><br />\n\
1) vertices: polygon vertex 2D array (Nx3) of x,y,z values.  <br /><br />\n\
2) polygon data: ordered array of polygon definitions, each polygon is defined by a list of elements, \n\
the first element of a polygon definition must be set with the number of indices for that polygon. \n\
The ordering of vertices must respect a ccw ordering to get out going normals (right-hand rule). \n\
For exampl, an array of polygons with 4 indices each : {4,0,1,4,3,4,1,2,5,4... }  <br /><br />\n\
3) polygon node normal array: 2D array containing the normal x,y,z values for every polygon node.  <br /><br />\n\
4) polygon node for each polygon face: 1D array containing the number of polygon nodes on each polygon \n\
face followed by the corresponding polygon node index.  <br /><br />\n\
5) UVW array: 1D array containing the successive UV cluster property <a href=\"#!/url=./si_om/ClusterProperty.html\">ClusterProperty</a> \n\
objects, each followed by the corresponding 1D array of UVW values for each polygon node for that UVW \n\
cluster property.<br /><br />\n\
6) color array: 1D array containing the successive vertex color cluster prop <a href=\"#!/url=./si_om/ClusterProperty.html\">ClusterProperty</a> \n\
objects, each followed by the corresponding 1D array of RGBA values for each polygon node for that vertex \n\
color property.<br /><br />\n\
7) material array: 1D array containing the successive polygon cluster <a href=\"#!/url=./si_om/Material.html\">Material</a> objects, \n\
each followed by the corresponding 1D array of interpolated polygon values of each polygon cluster.  <br /><br />\n\
8) weight array: not supported yet.  <br /><br />\n\
9) envelope weight array: not supported yet.<br /><br />\n\
Note: The C++ API equivalent function, <a href=\"#!/url=./si_cpp/classXSI_1_1PolygonMesh.html\">PolygonMesh::GetGeometryAccessor</a>, \n\
returns the <a href=\"#!/url=./si_cpp/classXSI_1_1CGeometryAccessor.html\">CGeometryAccessor</a> object which allows you\n\
to get only the data you need, and is therefore a much more efficient way to access this data.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Object PolygonMesh.GetApproximatedMeshAndAttributes( siSubdivisionRuleType in_SubRule, Int32 in_lSubdivisionLevel, Boolean in_bDiscontinuity, Double in_dDiscontinuityAngle );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oArray = PolygonMesh.GetApproximatedMeshAndAttributes( SubdivisionRule, SubdivisionLevel, UseDiscontinuity, DiscontinuityAngle );</pre>		</td>	</tr>\n\
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
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example illustrates how to create a nem PolygonMesh from an ApproximatedMesh\n\
\' and how to carry over the attributes.\n\
\'\n\
set oCube = ActiveSceneRoot.AddGeometry(\"Cube\",\"MeshSurface\")\n\
set oMaterial = oCube.AddMaterial(\"Blinn\")\n\
\'Add Polygon Material and texture\n\
set oPolygonCluster = oCube.ActivePrimitive.Geometry.AddCluster(siPolygonCluster, ,Array(4))\n\
set oMaterial	 = oPolygonCluster.AddMaterial(\"Phong\")\n\
set oImage = AddImageSource( \"$SI_HOME\\Data\\XSI_SAMPLES\\Pictures\\jio.jpg\" )\n\
set oImageClip = AddImageClip( oImage )\n\
set oPhong = oMaterial.Shaders(\"Phong\")\n\
set oColor8Mix1 = oPhong.ambient.connectfromprogid(\"Softimage.sib_color_8mix.1\")\n\
set oColor8Mix2 = oPhong.diffuse.connectfromprogid(\"Softimage.sib_color_8mix.1\")\n\
set oTex2D = oColor8Mix1.color1.connectfromprogid(\"Softimage.txt2d-image-explicit.1\")\n\
call oColor8Mix2.color1.connect(oTex2D)\n\
set oTex2D.tex.source = oImageClip\n\
\'Add Polygon Material\n\
set oPolygonCluster = oCube.ActivePrimitive.Geometry.AddCluster(siPolygonCluster,,Array(0,1))\n\
set oMaterial = oPolygonCluster.AddMaterial(\"Lambert\")\n\
\'Add UV and VertexColor Properties\n\
set oSamplePointCluster = oCube.ActivePrimitive.Geometry.AddCluster(siSampledPointCluster)\n\
set oUVProp = oSamplePointCluster.AddProperty(\"Texture Projection\")\n\
set oRGBAProp = oSamplePointCluster.AddProperty(\"Vertex Color\")\n\
set oGApprox = oCube.Properties.Find(\"geomapprox\")\n\
oGApprox.Parameters(\"gapproxmosl\").value = 1\n\
MakeLocal oGApprox\n\
ApproxVersion( oCube)\n\
\'This function will duplicate the approximated version of the\n\
if selection.count &gt; 0 then\n\
	ApproxVersion( selection(0))\n\
else\n\
	Application.LogMessage \"You must select a PolygonMesh\"\n\
end if		\n\
\'This function will duplicate the approximated version of the\n\
Sub ApproxVersion(in_obj)\n\
	Dim l_NewMesh\n\
	Dim l_Parent\n\
	Dim l_AllInputUVTxtAndCAV\n\
	Dim l_AllOutputUVTxtAndCAV\n\
	Dim l_GeometryApproximation\n\
	Dim l_NewLocalGeometryApproximation\n\
	Dim l_aVertices\n\
	Dim l_aPolygonData\n\
	Dim l_aPolygonNodeNormalArray\n\
	Dim l_aUVArray\n\
	Dim l_aColorArray\n\
	Dim l_aMaterialArray\n\
	Dim l_LocalProperties\n\
	Dim l_attribs\n\
	set l_AllInputUVTxtAndCAV = CreateObject( \"XSI.Collection\")\n\
	set l_AllOutputUVTxtAndCAV = CreateObject( \"XSI.Collection\")\n\
	\'Check that in_obj is an object\n\
	if not(IsObject(in_obj)) then\n\
		Application.LogMessage \"The inputed parameter must be a 3D Object.\"\n\
		Exit Sub\n\
	end if\n\
	if not(in_obj.BelongsTo(\"3D Object\")) then\n\
		Application.LogMessage \"The inputed object must be a 3D Object.\"\n\
		Exit Sub\n\
	end if\n\
	\'If the object is not a PolygonMesh than exit the function\n\
	if in_obj.activeprimitive.geometry.type &lt;&gt; \"PolygonMesh\" then\n\
		Application.LogMessage in_obj &amp; \" has to be a polymesh object\"\n\
		Exit Sub\n\
	end if\n\
	set l_GeometryApproximation = in_Obj.Properties.Find(\"geomapprox\")\n\
	l_attribs = in_obj.ActivePrimitive.Geometry.GetApproximatedMeshAndAttributes( _\n\
		l_GeometryApproximation.Parameters(\"gapproxmosr\").value,_\n\
		l_GeometryApproximation.Parameters(\"gapproxmosl\").value,_\n\
		l_GeometryApproximation.Parameters(\"gapproxmoad\").value,_\n\
		l_GeometryApproximation.Parameters(\"gapproxmoan\").value )\n\
	l_aVertices = l_attribs(0)\n\
	l_aPolygonData = l_attribs(1)\n\
	l_aPolygonNodeNormalArray = l_attribs(2)\n\
	l_aPolygonNodePolygonFaceIndexArray = l_attribs(3)\n\
	l_aPolygonFaceParentPolygonFaceIndexArray = l_attribs(4)\n\
	l_aUVArray = l_attribs(5)\n\
	l_aColorArray = l_attribs(6)\n\
	l_aMaterialArray = l_attribs(7)\n\
	set l_Parent  = 	in_obj.Parent\n\
	set l_NewMesh =	l_Parent.AddPolygonMesh(l_aVertices,l_aPolygonData)	\n\
	\'Copy local properties\n\
	set l_LocalProperties = in_obj.LocalProperties\n\
	for each iLocProp in l_LocalProperties\n\
			CopyPaste iLocProp,,l_NewMesh,2\n\
	next\n\
	\'If the geometry approximation is a local property we set the subdivision level to\n\
	\'0 as it is the most likely thing users want to do.\n\
	set l_NewLocalGeometryApproximation = l_NewMesh.LocalProperties.Find(\"geomapprox\")\n\
	if IsObject(l_NewLocalGeometryApproximation) and TypeName(l_NewLocalGeometryApproximation) &lt;&gt; \"Nothing\" then\n\
		l_NewLocalGeometryApproximation.Parameters(\"gapproxmosl\").value = 0\n\
	end if\n\
	\'Add a sample cluster if there\'s some VertexColors or UVProp\n\
	if IsArray(l_aUVArray) then\n\
		i = 0\n\
		do while i &lt; ubound(l_aUVArray)\n\
			set l_Cluster = l_NewMesh.ActivePrimitive.Geometry.AddCluster(siSampledPointCluster)\n\
			set l_UVProp = l_Cluster.AddProperty(\"Texture Projection\", ,l_aUVArray(i).Name &amp; \"_\" &amp; l_Cluster.Name)\n\
			ReDim l_UVPropArray(2,(l_Cluster.Elements.Count - 1))\n\
			for j = 0 to l_Cluster.Elements.Count-1\n\
				l_UVPropArray(0,j) = l_aUVArray(i+1)(j*3)\n\
				l_UVPropArray(1,j) = l_aUVArray(i+1)(j*3 + 1)\n\
				l_UVPropArray(2,j) = l_aUVArray(i+1)(j*3 + 2)\n\
			next\n\
			l_UVProp.Elements.Array  = l_UVPropArray\n\
			l_AllInputUVTxtAndCAV.Add l_aUVArray(i)\n\
			l_AllOutputUVTxtAndCAV.Add l_UVProp\n\
			i = i+2\n\
		Loop\n\
	end if\n\
	if IsArray(l_aColorArray) then\n\
		i = 0\n\
		do while i &lt; ubound(l_aColorArray)\n\
			set l_Cluster = l_NewMesh.ActivePrimitive.Geometry.AddCluster(siSampledPointCluster)\n\
			set l_ColorProp = l_Cluster.AddProperty(\"Vertex Color\", ,l_aColorArray(i).Name &amp; \"_\" &amp; l_Cluster.Name)\n\
			ReDim l_ColorPropArray(3,l_Cluster.Elements.Count - 1)\n\
			for j = 0 to l_Cluster.Elements.Count-1\n\
				l_ColorPropArray(0,j) = l_aColorArray(i+1)(j*4)\n\
				l_ColorPropArray(1,j) = l_aColorArray(i+1)(j*4 + 1)\n\
				l_ColorPropArray(2,j) = l_aColorArray(i+1)(j*4 + 2)\n\
				l_ColorPropArray(3,j) = l_aColorArray(i+1)(j*4 + 3)\n\
			next\n\
			l_ColorProp.Elements.Array  = l_ColorPropArray\n\
			l_AllInputUVTxtAndCAV.Add l_aColorArray(i)\n\
			l_AllOutputUVTxtAndCAV.Add l_ColorProp\n\
			i = i+2\n\
		Loop\n\
	end if\n\
	if IsArray(l_aMaterialArray) then\n\
		Dim l_bEmptyMaterialIndexArray\n\
		Dim l_CurrentMaterial\n\
		Dim l_NewMaterial\n\
		Dim l_NewCluster\n\
		Dim l_MaxIndex\n\
		Dim l_MaterialIndexArray\n\
		Dim l_Material\n\
		i = 0\n\
		do while i &lt; ubound(l_aMaterialArray)\n\
			set l_NewCluster = l_NewMesh.ActivePrimitive.Geometry.AddCluster(siPolygonCluster, , l_aMaterialArray(i+1))\n\
			MakeLocal l_NewCluster.Material\n\
			CopyPaste l_aMaterialArray(i),,l_NewCluster,2\n\
			SIRebindByNameUserData l_NewCluster.Material, l_AllInputUVTxtAndCAV, l_AllOutputUVTxtAndCAV\n\
			i = i+2\n\
		Loop\n\
	end if\n\
	\'Rebind the material that may be a local property at object level\n\
	SIRebindByNameUserData l_NewMesh.Material, l_AllInputUVTxtAndCAV, l_AllOutputUVTxtAndCAV\n\
	SelectObj l_NewMesh\n\
End Sub</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";