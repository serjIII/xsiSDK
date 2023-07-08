var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ClusterProperty</title>\n\
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
            <h1>ClusterProperty</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ClusterProperty</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_ClusterProperty\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1ClusterProperty.html\">ClusterProperty</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\"><a href=\"#!/url=./si_om/ProjectItem.html\">ProjectItem</a></p>\n\
<p class=\"level3\"><a href=\"#!/url=./si_om/Property.html\">Property</a></p>\n\
<p class=\"level4\">ClusterProperty</p>\n\
\n\
<h3>Description</h3>\n\
<div><p> A property of a <a href=\"#!/url=./si_om/Cluster.html\">Cluster</a> that stores separate data for each\n\
component of the cluster.  <br /><br />\n\
The data type of the value stored for each component is \n\
an <a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Double.htm\">Double</a>s.  The size depends on the type of\n\
the cluster property.  Size of a weight map is 1.  Size of a UV property is 3 (UVW).\n\
Size of a Shape Animation property is 3 (XYZ).  Size of a vertex color property is 4 (RGBA).\n\
Size of an envelope weight property is equal to the number of deformers\n\
Size of a User Motion property is 3 (XYZ).<br /><br />\n\
The values contained by the cluster property can be accessed via the\n\
<a href=\"#!/url=./si_om/ClusterProperty.Elements.html\">ClusterProperty.Elements</a>. You can access\n\
the entire 2-dimensional value array using <a href=\"#!/url=./si_om/ClusterElementCollection.Array.html\">ClusterElementCollection.Array</a> or\n\
individual values via <a href=\"#!/url=./si_om/ClusterElementCollection.ItemsByIndex.html\">ClusterElementCollection.ItemsByIndex</a>. The data type\n\
of the value returned by <a href=\"#!/url=./si_om/ClusterElementCollection.ItemsByIndex.html\">ClusterElementCollection.ItemsByIndex</a> is always an <a href=\"#!/url=./files/Array.htm\">Array</a>.<br /><br />\n\
Use the <a href=\"#!/url=./si_om/SceneItem.LocalProperties.html\">SceneItem.LocalProperties</a> property to find ClusterProperties \n\
on a <a href=\"#!/url=./si_om/Cluster.html\">Cluster</a>.<br /><br />\n\
Notice that some cluster property types can only be added to <a href=\"#!/url=./si_om/Cluster.html\">Cluster</a> objects that are always-complete\n\
(see <a href=\"#!/url=./si_om/Cluster.IsAlwaysComplete.html\">Cluster.IsAlwaysComplete</a>).\n\
These types are vertex color, uv, symmetry map and user motion properties.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddCustomOp.html\">AddCustomOp</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddICEAttribute.html\">AddICEAttribute</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddScriptedOp.html\">AddScriptedOp</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddScriptedOpFromFile.html\">AddScriptedOpFromFile</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AnimatedParameters2.html\">AnimatedParameters2</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.BelongsTo.html\">BelongsTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.EvaluateAt.html\">EvaluateAt</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.GetICEAttributeFromName.html\">GetICEAttributeFromName</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsA.html\">IsA</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsAnimated2.html\">IsAnimated2</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsKindOf.html\">IsKindOf</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsLocked.html\">IsLocked</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsSelected.html\">IsSelected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockOwners.html\">LockOwners</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.RemoveICEAttribute.html\">RemoveICEAttribute</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetAsSelected.html\">SetAsSelected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetCapabilityFlag.html\">SetCapabilityFlag</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetLock.html\">SetLock</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.TaggedParameters.html\">TaggedParameters</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.UnSetLock.html\">UnSetLock</a>		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Properties</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Property.Branch.html\">Branch</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.BranchFlag.html\">BranchFlag</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Capabilities.html\">Capabilities</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ClusterProperty.Elements.html\">Elements</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.EvaluationID.html\">EvaluationID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Families.html\">Families</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.HierarchicalEvaluationID.html\">HierarchicalEvaluationID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.ICEAttributes.html\">ICEAttributes</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockLevel.html\">LockLevel</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockMasters.html\">LockMasters</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockType.html\">LockType</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Model.html\">Model</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.ObjectID.html\">ObjectID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Owners.html\">Owners</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.PPGLayout.html\">PPGLayout</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Parameters.html\">Parameters</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Parent3DObject.html\">Parent3DObject</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Selected.html\">Selected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Property.Singleton.html\">Singleton</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">//JScript example showing how to read UV values in a \n\
//UV Cluster Property\n\
var oRoot = Application.ActiveProject.ActiveScene.Root;\n\
var oObject = oRoot.AddGeometry( \"Cube\", \"MeshSurface\" );\n\
BlendInPresets( \"Image\", oObject, 1, false );\n\
CreateTextureSupport( oObject, siTxtUV, siTxtDefaultSpherical, \"Texture_Support\" );\n\
SetInstanceDataValue(null, \"cube.Scene_Material.UV\", \"Texture_Support\");\n\
var oUVWProp = oObject.Material.CurrentUV;\n\
// Output the first 5 UV text coords\n\
var vbaUVW = new VBArray(oUVWProp.Elements.Array);\n\
// Use this to map from index in the Cluster back to index in the Geometry\n\
// If the cluster is not complete or if topology changes are done then\n\
// the geometry index is not necessarily the same as the cluster index\n\
var vbaClusterElement = new VBArray(oUVWProp.Parent.Elements.Array);\n\
for ( iIndex = 0; iIndex &lt; 4; iIndex++ )\n\
{\n\
		logmessage ( \"Sample(\" + vbaClusterElement.getItem(iIndex) + \") = UV(\" + \n\
			   vbaUVW.getItem(0,iIndex) + \",\" + vbaUVW.getItem(1,iIndex) + \")\"  ) ;\n\
}\n\
//INFO : \"Sample(0) = UV(0.125,0.30408671498298645)\"\n\
//INFO : \"Sample(1) = UV(0.125,0.6959132552146912)\"\n\
//INFO : \"Sample(2) = UV(-0.125,0.6959132552146912)\"\n\
//INFO : \"Sample(3) = UV(-0.125,0.30408671498298645)\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'VBScript example showing how to read UV values in a \n\
\'UV Cluster Property\n\
set oRoot = application.activeproject.activescene.root\n\
set oObject = oRoot.addgeometry( \"Cube\", \"MeshSurface\" )\n\
BlendInPresets \"Image\", oObject, 1, False\n\
CreateTextureSupport oObject, siTxtUV, siTxtDefaultSpherical, \"Texture_Support\"\n\
SetInstanceDataValue , oObject &amp; \".Scene_Material.UV\", \"Texture_Support\"\n\
set oUVWProp = oObject.Material.CurrentUV\n\
\' output uv text coords\n\
aUVW=oUVWProp.elements.array\n\
\'Use this to map from index in the Cluster back to index in the Geometry\n\
\'If the cluster is not complete or if topology changes are done then\n\
\'the geometry index is not necessarily the same as the cluster index\n\
aClusterIndices = oUVWProp.Parent.elements.array\n\
\' Print out just the first few elements\n\
for iIndex=0 to 3 \n\
	logmessage \"Sample(\" &amp; aClusterIndices(iIndex) &amp; \") = UV(\" &amp; _\n\
		   aUVW(0,iIndex) &amp; \",\" &amp; aUVW(1,iIndex) &amp; \")\" \n\
next\n\
\'Result of running this script:\n\
\'INFO : \"Sample(0) = UV(0.125,0.304086714982986)\"\n\
\'INFO : \"Sample(1) = UV(0.125,0.695913255214691)\"\n\
\'INFO : \"Sample(2) = UV(-0.125,0.695913255214691)\"\n\
\'INFO : \"Sample(3) = UV(-0.125,0.304086714982986)\"</pre></td></tr>\n\
</table>\n\
</div><h4>3. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' VBScript example showing how to find the\n\
\' texture projection UV values associated\n\
\' with each vertex of a polygon\n\
set oRoot = application.activeproject.activescene.root\n\
set oObject = oRoot.addgeometry(\"Grid\", \"MeshSurface\")\n\
setValue oObject &amp; \".polymsh.geom.subdivu\", 2\n\
setValue oObject &amp; \".polymsh.geom.subdivv\", 1\n\
BlendInPresets \"Image\", oObject, 1, False\n\
CreateTextureSupport oObject, siTxtPlanarXZ, siTxtDefaultPlanarXZ, \"Texture_Support\"\n\
set oUVWProp = oObject.Material.CurrentUV\n\
set oGeom = oObject.activeprimitive.geometry\n\
\' get UVW array\n\
aUVW = oUVWProp.elements.Array\n\
\' The cluster knows the relationship between\n\
\' indices of the Samples and indices of the Sample cluster\n\
set oCluster = oUVWProp.Parent\n\
for Each oPolygon In oGeom.Polygons\n\
	\' get polygon index\n\
	oPolygonId = oPolygon.Index\n\
	\' get points index array under polygon\n\
	aPntsIndex = oPolygon.Points.IndexArray\n\
	logMessage \"Polygon\" &amp; oPolygonId\n\
	\' get sample indices\n\
	set oSamples = oPolygon.Samples\n\
	for i = 0 To oSamples.Count - 1	\n\
		\'Map from the geometry index to the cluster index\n\
		indexInCluster = oCluster.FindIndex( oSamples(i).Index )\n\
		if ( indexInCluster &lt;&gt; -1 ) then	\n\
			logMessage \"Point\" &amp; aPntsIndex(i) &amp; \":\" &amp; \"UV(\"_\n\
				&amp; aUVW(0, oSamples(i).Index) &amp; _\n\
				\",\" &amp; aUVW(1, oSamples(i).Index) &amp; \")\"\n\
		end if\n\
	next\n\
next</pre></td></tr>\n\
</table>\n\
</div><h4>4. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' This example demonstrates applying a file as a texture to an object, and explicitly setting \n\
\' the UV values to specify how the texture maps onto the geometry\n\
option explicit\n\
\'This Texture should be a unique name to avoid conflicts with any other possible textures\n\
\'The projection and the uv cluster property will use this name\n\
const g_ProjectionName = \"MyTexture\"\n\
\'Set up a sample scene\n\
dim oObj1, oObj2, ImageFile\n\
ImageFile = Application.InstallationPath(siFactoryPath) &amp; \"\\Data\\XSI_SAMPLES\\Pictures\\jaiqua_face.jpg\"\n\
NewScene ,false\n\
SetDisplayMode \"Camera\", \"texturedecal\"\n\
set oObj1 = ActiveSceneRoot.AddGeometry( \"Sphere\", \"MeshSurface\" )\n\
ApplyFileAsTexture oObj1,ImageFile \n\
set oObj2 = ActiveSceneRoot.AddGeometry( \"Torus\", \"MeshSurface\" )\n\
Translate oObj2, 0, 5, 0, siRelative, siView, siObj, siY\n\
ApplyFileAsTexture oObj2,ImageFile\n\
sub ApplyFileAsTexture( in_obj, in_FileName )\n\
	AttachImageFileToObj in_obj, in_FileName \n\
	dim oUVProp\n\
	set oUVProp = FindClusterProperty( in_obj, g_ProjectionName)\n\
	SetUVsOnProperty in_obj, oUVProp 		\n\
end sub\n\
\'Subroutine: Attach Image File to Object\n\
\'\n\
\'This method creates a texture project, and image clip\n\
\'and a small render tree that uses the image as the object\'s texture\n\
sub AttachImageFileToObj( in_obj, in_FileName )\n\
	Dim oTextureProj\n\
	set oTextureProj = CreateProjection( in_obj, , siTxtUV, , g_ProjectionName )\n\
	\'Create a local copy of the material and attach the default (phong shader)\n\
	in_obj.AddMaterial \"Phong\" \n\
	dim oPhongShader, oAmbientParam, oDiffuseParam\n\
	set oPhongShader = in_obj.Material.Shaders(0)\n\
	set oAmbientParam = oPhongShader.Parameters( \"ambient\" )\n\
	set oDiffuseParam = oPhongShader.Parameters( \"diffuse\" )	\n\
	dim oImageClip\n\
	SICreateImageClip in_FileName, ,oImageClip		\n\
	dim oImageNode\n\
	set oImageNode = oAmbientParam.connectfrompreset(\"Image\", siTextureShaderFamily)\n\
	\'Diffuse will be driven by the same image node\n\
	oDiffuseParam.Connect( oImageNode )\n\
	oImageNode.parameters( \"tex\" ).Connect(oImageClip)\n\
	\'Tell the image node that the uv values we are going to write into\n\
	\'the cluster property are the ones to use for this image\n\
	oImageNode.parameters( \"tspace_id\" ).SetInstanceValue in_obj, oTextureProj, true\n\
	\'Connect the image to the image node		\n\
	oImageNode.Parameters( \"tex\" ).Connect( oImageClip )	\n\
end sub	\n\
\'Subroutine: SetUVOnProperty\n\
\'\n\
\'Given an object and a Cluster Property of UV\'s \n\
\'this routine will fill in values.\n\
\'Currently it just show the entire texture on \n\
\'each polygon.  However it could also be adjusted \n\
\'to take the UV values as arguments\n\
sub SetUVsOnProperty( in_oObj, in_oUVProp )\n\
	dim oUVElements, oCluster, cnt\n\
	\'get the ClusterElementCollection	\n\
	set oUVElements = in_oUVProp.Elements  \n\
	set oCluster = in_oUVProp.Parent\n\
	cnt = oUVElements.Count\n\
	\'Get an array of all the UV Values\n\
	dim ElArray, i\n\
	ElArray = oUVElements.Array\n\
	\'Zero out the u,v,w values in the array\n\
	for i = 0 to cnt - 1\n\
		ElArray( 0, i ) = 0\n\
		ElArray( 1, i ) = 0\n\
		ElArray( 2, i ) = 0\n\
	next\n\
	\'Traverse the facets (eg polygons on a polymesh)\n\
	\'setting the UV values for each sample	\n\
	dim oFacets, oFacet, oSamples, oSample, cntSamples\n\
	dim sample1ClusterIdx, sample2ClusterIdx, sample3ClusterIdx\n\
	set oFacets = in_oObj.ActivePrimitive.Geometry.Facets\n\
	for each oFacet in oFacets		\n\
		set oSamples = oFacet.Samples\n\
		cntSamples = oSamples.Count\n\
		\'In this example we will map each polygon to cover\n\
		\'the entire u/v space - eg the entire texture shows up on\n\
		\'each\n\
		\'Because values are already zeroed we only set\n\
		\'the values	we want as non-zero\n\
		sample1ClusterIdx = oCluster.FindIndex( oSamples(1).Index )\n\
		sample2ClusterIdx = oCluster.FindIndex( oSamples(2).Index )	\n\
		ElArray( 0, sample1ClusterIdx ) = 1\n\
		ElArray( 0, sample2ClusterIdx ) = 1\n\
		ElArray( 1, sample2ClusterIdx ) = 1\n\
		if ( cntSamples &gt;= 4 ) then\n\
			sample3ClusterIdx = oCluster.FindIndex( oSamples(2).Index )\n\
			ElArray( 1, oSamples(3).Index ) = 1\n\
		end if\n\
	next\n\
	\'Assign these values to the cluster property\n\
	oUVElements.Array = ElArray\n\
	\'Freezing the property provides the most efficient memory representation	\n\
	FreezeObj in_oUVProp\n\
end sub\n\
\'Subroutine: FindClusterProperty\n\
\'Give an object and a property name string,\n\
\'this will find the UV cluster property\n\
function FindClusterProperty( in_obj, in_Name )\n\
	dim oClusters, oCluster, oProps, oProp\n\
	\'Get the sample clusters\n\
	set oClusters = in_obj.ActivePrimitive.Geometry.Clusters.Filter( \"Sample\" )\n\
	for each oCluster in oClusters\n\
		set oProps = oCluster.Properties.Filter( \"uvspace\" )\n\
		for each oProp in oProps\n\
			if ( oProp.Name = in_Name ) then\n\
				set FindClusterProperty = oProp\n\
				exit function\n\
			end if				\n\
		next	\n\
	next\n\
	set FindClusterProperty = Nothing\n\
end function</pre></td></tr>\n\
</table>\n\
</div><h4>5. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'VBScript example showing how to find ClusterProperty objects\n\
\'on an Mesh\n\
\'Create a sample scene with many different cluster properties\n\
newscene ,false\n\
dim sphere\n\
set sphere = CreatePrim ( \"Sphere\", \"MeshSurface\" )\n\
\'Create a vertex color cluster property\n\
CreateVertexColorSupport , \"MyVertexColorProperty\", sphere \n\
\'Save a Shape\n\
SaveShapeKey \"sphere\", , , 1, , , , , siShapeLocalReferenceMode\n\
\'Create a symmetry map\n\
CreateSymmetryMap\n\
\'Save two weight maps (they will re-use the same\n\
\'cluster)\n\
CreateWeightMap , sphere, \"Weight_Map1\"\n\
CreateWeightMap , sphere, \"Weight_Map2\"\n\
\'Create an skeleton and envelop weight map\n\
Create2DSkeleton -5, 1, 0, 6, 1, 0, -6, 0, 0, 4\n\
AppendBone \"eff\", 5, 4, 0\n\
ApplyFlexEnv \"sphere;bone,bone1\", False\n\
\'Demonstrate how it is possible to find all the\n\
\'clusters and cluster properties\n\
logmessage \"List of Clusters and Cluster Properties on \" &amp; sphere.Name\n\
logmessage \"--------------------------------\"\n\
for each oCluster in sphere.ActivePrimitive.Geometry.Clusters	\n\
	logmessage \"Cluster: \" &amp; oCluster.Name\n\
	for each oLocalProp in oCluster.LocalProperties\n\
		if typename( oLocalProp ) = \"ClusterProperty\" then\n\
			logmessage \"   \" &amp; oLocalProp.Name &amp; \" (Type: \" &amp; oLocalProp.Type &amp; \")\"\n\
		end if\n\
	next	\n\
	logmessage \"--------------------------------\"\n\
next\n\
\'Demonstrate how we can be more direct if we are looking for a specific type\n\
\'of cluster property\n\
\'We know that weight maps are always on point clusters\n\
set oPntClusters = sphere.ActivePrimitive.Geometry.Clusters.Filter( \"pnt\" )\n\
for each oPntCluster in oPntClusters\n\
	set oWeightMaps = oPntCluster.LocalProperties.Filter( \"wtmap\" )\n\
	for each oWeightMap in oWeightMaps\n\
		logmessage \"Found weight map \" &amp; oWeightMap.FullName\n\
	next \n\
next</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Material.CurrentUV.html\">Material.CurrentUV</a> <a href=\"#!/url=./si_om/Geometry.SaveShapeKey.html\">Geometry.SaveShapeKey</a> <a href=\"#!/url=./si_om/PolygonMesh.AddVertexColor.html\">PolygonMesh.AddVertexColor</a> <a href=\"#!/url=./si_cmds/CreateVertexColorSupport.html\">CreateVertexColorSupport</a> <a href=\"#!/url=./si_cmds/CreateUserMotion.html\">CreateUserMotion</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";