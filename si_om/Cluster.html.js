var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Cluster</title>\n\
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
            <h1>Cluster</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Cluster</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_Cluster\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1Cluster.html\">Cluster</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\"><a href=\"#!/url=./si_om/ProjectItem.html\">ProjectItem</a></p>\n\
<p class=\"level3\"><a href=\"#!/url=./si_om/SceneItem.html\">SceneItem</a></p>\n\
<p class=\"level4\">Cluster</p>\n\
\n\
<h3>Description</h3>\n\
<div><p> A cluster represents a set of components on a <a href=\"#!/url=./si_om/Geometry.html\">Geometry</a>. For example, the \n\
polygons of the left arm of a human model might be grouped together by creating a cluster.<br /><br />\n\
A cluster has a <a href=\"#!/url=./si_om/SIObject.Type.html\">SIObject.Type</a> which corresponds to the component type that \n\
it contains, (pnt, knot, poly). A geometry can have multiple clusters, including clusters of \n\
different types.  Any particular component might be included in multiple clusters. The \n\
<a href=\"#!/url=./si_om/ClusterTypes.html\">ClusterTypes</a> that are supported on a geometry depend on the type of object.  \n\
For example only <a href=\"#!/url=./si_om/NurbsSurface.html\">NurbsSurface</a> or <a href=\"#!/url=./si_om/NurbsCurve.html\">NurbsCurve</a> can have a \n\
siKnotCluster. <br /><br />\n\
Clusters can be created on the geometry of a <a href=\"#!/url=./si_om/ParticleCloud.html\">ParticleCloud</a>. These clusters \n\
are of type siVertexCluster but they contain <a href=\"#!/url=./si_om/Particle.html\">Particle</a>s.<br /><br />\n\
A cluster that includes all the components of a particular type is said to be \"always complete\", \n\
which you can verify with the <a href=\"#!/url=./si_om/Cluster.IsAlwaysComplete.html\">Cluster.IsAlwaysComplete</a> method. An always-complete \n\
cluster always covers all components of the geometry, even when components are added by a modeling \n\
operation; however, notice that a cluster which covers all components of a geometry is not necessarily \n\
always-complete. Other clusters may contain a subset of components. In all cases the indices of the \n\
components in the cluster do not directly match the indices of the component on the geometry.  \n\
The mapping between cluster indices and geometry indices is available through \n\
<a href=\"#!/url=./si_om/Cluster.Elements.html\">Cluster.Elements</a> and <a href=\"#!/url=./si_om/Cluster.FindIndices.html\">Cluster.FindIndices</a>.<br /><br />\n\
Clusters are useful for storing per-component data with a <a href=\"#!/url=./si_om/ClusterProperty.html\">ClusterProperty</a> or \n\
<a href=\"#!/url=./si_om/UserDataMap.html\">UserDataMap</a>. Clusters can also have their own <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> \n\
objects. All these properties can be created with <a href=\"#!/url=./si_om/SceneItem.AddProperty.html\">SceneItem.AddProperty</a> and\n\
enumerated with <a href=\"#!/url=./si_om/SceneItem.LocalProperties.html\">SceneItem.LocalProperties</a>. Notice that some types of \n\
<a href=\"#!/url=./si_om/ClusterProperty.html\">ClusterProperty</a> require the cluster to be always complete.<br /><br />\n\
Warning: Operations that change the geometry, for example adding an edge to a mesh, can result \n\
in the cluster growing or shrinking.<br /><br />\n\
Note: As of v5.0, the base property SIObject.Parent called on a Cluster object returns \n\
a <a href=\"#!/url=./si_om/Primitive.html\">Primitive</a> instead of an <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a>.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddCustomOp.html\">AddCustomOp</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SceneItem.AddCustomProperty.html\">AddCustomProperty</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddICEAttribute.html\">AddICEAttribute</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SceneItem.AddMaterial.html\">AddMaterial</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SceneItem.AddProperty.html\">AddProperty</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddScriptedOp.html\">AddScriptedOp</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddScriptedOpFromFile.html\">AddScriptedOpFromFile</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AnimatedParameters2.html\">AnimatedParameters2</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SceneItem.ApplyEnvelope.html\">ApplyEnvelope</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.BelongsTo.html\">BelongsTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Cluster.CreateSubComponent.html\">CreateSubComponent</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.EvaluateAt.html\">EvaluateAt</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Cluster.FindIndex.html\">FindIndex</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Cluster.FindIndices.html\">FindIndices</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.GetICEAttributeFromName.html\">GetICEAttributeFromName</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SceneItem.GetLocalPropertyFromName.html\">GetLocalPropertyFromName</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SceneItem.GetLocalPropertyFromName2.html\">GetLocalPropertyFromName2</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SceneItem.GetPropertyFromName.html\">GetPropertyFromName</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SceneItem.GetPropertyFromName2.html\">GetPropertyFromName2</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Cluster.GetStaticKinematicStates.html\">GetStaticKinematicStates</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Cluster.HasStaticKinematicState.html\">HasStaticKinematicState</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsA.html\">IsA</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Cluster.IsAlwaysComplete.html\">IsAlwaysComplete</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsAnimated2.html\">IsAnimated2</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsKindOf.html\">IsKindOf</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsLocked.html\">IsLocked</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsSelected.html\">IsSelected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockOwners.html\">LockOwners</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.RemoveICEAttribute.html\">RemoveICEAttribute</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetAsSelected.html\">SetAsSelected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetCapabilityFlag.html\">SetCapabilityFlag</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetLock.html\">SetLock</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SceneItem.SetMaterial.html\">SetMaterial</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.TaggedParameters.html\">TaggedParameters</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.UnSetLock.html\">UnSetLock</a>		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.BranchFlag.html\">BranchFlag</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Capabilities.html\">Capabilities</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Cluster.CenterReference.html\">CenterReference</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Cluster.Elements.html\">Elements</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SceneItem.Envelopes.html\">Envelopes</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.EvaluationID.html\">EvaluationID</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Families.html\">Families</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.HierarchicalEvaluationID.html\">HierarchicalEvaluationID</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.ICEAttributes.html\">ICEAttributes</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SceneItem.LocalProperties.html\">LocalProperties</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockLevel.html\">LockLevel</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockMasters.html\">LockMasters</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockType.html\">LockType</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SceneItem.Material.html\">Material</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Model.html\">Model</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.ObjectID.html\">ObjectID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Owners.html\">Owners</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.PPGLayout.html\">PPGLayout</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Parameters.html\">Parameters</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Parent3DObject.html\">Parent3DObject</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SceneItem.Properties.html\">Properties</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Selected.html\">Selected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\'	This example shows how to create many different cluster types.\n\
\'	It also shows how to find all clusters in a scene\n\
\'\n\
NewScene ,false\n\
set oRoot = Application.ActiveProject.ActiveScene.Root\n\
set grid = oRoot.AddGeometry(\"Grid\",\"MeshSurface\")\n\
set gridGeometry = grid.ActivePrimitive.Geometry\n\
\'Only certain types makes sense on a MeshSurface	\n\
\'This cluster we will create as a subset of the vertices\n\
gridGeometry.AddCluster siVertexCluster,\"PntCluster\",Array(1,4,7,10,13,16,19,22)\n\
\'The rest we will create as complete clusters\n\
gridGeometry.AddCluster siPolygonCluster,\"PolygonC\"\n\
gridGeometry.AddCluster siEdgeCluster\n\
gridGeometry.AddCluster siSampledPointCluster\n\
\'A different set makes sense with Nurbs\n\
set torus = oRoot.AddGeometry(\"Torus\",\"NurbsSurface\")\n\
set torusGeometry = torus.ActivePrimitive.Geometry\n\
torusGeometry.AddCluster siVertexCluster,\"PntCluster\"\n\
torusGeometry.AddCluster siSampledPointCluster\n\
torusGeometry.AddCluster siSurfaceCurveCluster \n\
torusGeometry.AddCluster siKnotCurveUCluster\n\
torusGeometry.AddCluster siKnotCurveVCluster\n\
torusGeometry.AddCluster siBoundaryCluster\n\
torusGeometry.AddCluster siKnotCluster \n\
torusGeometry.AddCluster siTrimCurveCluster\n\
torusGeometry.AddCluster siIsoLineUCluster \n\
torusGeometry.AddCluster siIsoLineVCluster\n\
torusGeometry.AddCluster siSubSurfaceCluster\n\
set circle = oRoot.AddGeometry(\"Circle\",\"NurbsCurve\")\n\
set circleGeometry = circle.ActivePrimitive.Geometry\n\
circleGeometry.AddCluster siIsoPointCluster\n\
circleGeometry.AddCluster siVertexCluster,\"PntCluster\"\n\
circleGeometry.AddCluster siKnotCluster \n\
set particleCloud = CreateParticleCloud().Item(0)\n\
particleCloud.ActivePrimitive.Geometry.AddCluster siVertexCluster, \"MyParticles\"\n\
\' Now traverse the scene finding all the clusters\n\
logmessage \"Clusters in Scene......................\"\n\
set oSceneObjs = ActiveSceneRoot.FindChildren()\n\
for each oItem in oSceneObjs\n\
	\'Use error handling to skip over the objects that don\'t\n\
	\'support clusters		\n\
	on error resume next	\n\
	set oClusters = oItem.ActivePrimitive.Geometry.Clusters\n\
	if ( err = 0 ) then\n\
		logmessage oItem &amp; \" has \" &amp; oClusters.Count &amp; \" Clusters: \"\n\
		for each oCls in oClusters\n\
			logmessage \"    \" &amp; oCls &amp; \" (type: \" &amp; oCls.Type &amp; \")\"\n\
		next\n\
	end if	\n\
next\n\
\'The output of this script is:\n\
\'INFO : \"Clusters in Scene......................\"\n\
\'INFO : \"grid has 4 Clusters: \"\n\
\'INFO : \"    grid.polymsh.cls.PntCluster (type: pnt)\"\n\
\'INFO : \"    grid.polymsh.cls.edge.clslist.Edge (type: edge)\"\n\
\'INFO : \"    grid.polymsh.cls.PolygonC (type: poly)\"\n\
\'INFO : \"    grid.polymsh.cls.sample.clslist.Sample (type: sample)\"\n\
\'INFO : \"torus has 11 Clusters: \"\n\
\'INFO : \"    torus.surfmsh.cls.V_Knot_Curve (type: knotcrvv)\"\n\
\'INFO : \"    torus.surfmsh.cls.U_Knot_Curve (type: knotcrvu)\"\n\
\'INFO : \"    torus.surfmsh.cls.sample.clslist.Sample (type: sample)\"\n\
\'INFO : \"    torus.surfmsh.cls.PntCluster (type: pnt)\"\n\
\'INFO : \"    torus.surfmsh.cls.Surface_Curve (type: srfcrv)\"\n\
\'INFO : \"    torus.surfmsh.cls.V_Isoline (type: isolinev)\"\n\
\'INFO : \"    torus.surfmsh.cls.knot.clslist.Knot (type: knot)\"\n\
\'INFO : \"    torus.surfmsh.cls.Boundary (type: bndry)\"\n\
\'INFO : \"    torus.surfmsh.cls.Subsurface (type: subsrf)\"\n\
\'INFO : \"    torus.surfmsh.cls.U_Isoline (type: isolineu)\"\n\
\'INFO : \"    torus.surfmsh.cls.Trim_Curve (type: trimcrv)\"\n\
\'INFO : \"circle has 3 Clusters: \"\n\
\'INFO : \"    circle.crvlist.cls.Isopoint (type: isopnt)\"\n\
\'INFO : \"    circle.crvlist.cls.PntCluster (type: pnt)\"\n\
\'INFO : \"    circle.crvlist.cls.knot.clslist.Knot (type: knot)\"\n\
\'INFO : \"cloud has 1 Clusters: \"\n\
\'INFO : \"    cloud.cloud.cls.MyParticles (type: pnt)\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">//Step 1: Simulate the user creating a scene and selecting\n\
//some points on a grid\n\
var oGrid = ActiveSceneRoot.AddGeometry( \"Grid\", \"MeshSurface\" ) ;\n\
SelectObj( oGrid ) ;\n\
ActivateVertexSelTool();\n\
AddToSelection( oGrid.Name + \".pnt[0-8]\", null, true);\n\
//Step 2: Get the selected components using OM\n\
var oSubComponent = Selection(0).SubComponent ;\n\
//Expect that 9 components were selected\n\
logmessage( oSubComponent.ComponentCollection.Count ) ;\n\
//Step 3: it is simple to create a cluster\n\
var oCluster = oSubComponent.CreateCluster() ;\n\
logmessage( oCluster.FullName  ) ;\n\
//Output of this example:\n\
//INFO : \"9\"\n\
//INFO : \"grid.polymsh.cls.Point\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/ClusterProperty.html\">ClusterProperty</a> <a href=\"#!/url=./si_om/Geometry.AddCluster.html\">Geometry.AddCluster</a> <a href=\"#!/url=./si_om/Geometry.Clusters.html\">Geometry.Clusters</a> <a href=\"#!/url=./si_om/Geometry.SaveShapeKey.html\">Geometry.SaveShapeKey</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";