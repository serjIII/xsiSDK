var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Camera</title>\n\
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
            <h1>Camera</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Camera</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_Camera\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1Camera.html\">Camera</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\"><a href=\"#!/url=./si_om/ProjectItem.html\">ProjectItem</a></p>\n\
<p class=\"level3\"><a href=\"#!/url=./si_om/SceneItem.html\">SceneItem</a></p>\n\
<p class=\"level4\"><a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a></p>\n\
<p class=\"level5\"><a href=\"#!/url=./si_om/DirectedObject.html\">DirectedObject</a></p>\n\
<p class=\"level6\">Camera</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> The Camera object represents a Softimage camera within a scene. The Camera object\n\
is always created with its interest located at the origin of the scene\'s 3D\n\
world. Camera can be created with <a href=\"#!/url=./si_om/X3DObject.AddCamera.html\">X3DObject.AddCamera</a> \n\
or <a href=\"#!/url=./si_om/X3DObject.AddCameraRig.html\">X3DObject.AddCameraRig</a>.\n\
<br /><br />\n\
It is possible to find all cameras in a scene using the <a href=\"#!/url=./si_om/X3DObject.FindChildren.html\">X3DObject.FindChildren</a> method,\n\
as demonstrated in the first example below.\n\
<br /><br />\n\
Most important attributes of a Camera object, including the Field of View Angle (fov) \n\
and Projection Type (proj) are \n\
exposed as <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> objects on the <a href=\"#!/url=./si_om/Primitive.html\">Primitive</a> returned by calling\n\
<a href=\"#!/url=./si_om/X3DObject.ActivePrimitive.html\">X3DObject.ActivePrimitive</a>.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.Add2DChain.html\">Add2DChain</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.Add3DChain.html\">Add3DChain</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.AddAnnotation.html\">AddAnnotation</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.AddCamera.html\">AddCamera</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.AddCameraRig.html\">AddCameraRig</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.AddChild.html\">AddChild</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.AddControl.html\">AddControl</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddCustomOp.html\">AddCustomOp</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SceneItem.AddCustomProperty.html\">AddCustomProperty</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.AddFxTree.html\">AddFxTree</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.AddGeometry.html\">AddGeometry</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddICEAttribute.html\">AddICEAttribute</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.AddLattice.html\">AddLattice</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.AddLight.html\">AddLight</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.AddLightRig.html\">AddLightRig</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SceneItem.AddMaterial.html\">AddMaterial</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.AddModel.html\">AddModel</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.AddNull.html\">AddNull</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.AddNurbsCurve.html\">AddNurbsCurve</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.AddNurbsCurveList.html\">AddNurbsCurveList</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.AddNurbsCurveList2.html\">AddNurbsCurveList2</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.AddNurbsSurface.html\">AddNurbsSurface</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.AddNurbsSurfaceMesh.html\">AddNurbsSurfaceMesh</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.AddNurbsSurfaceMesh2.html\">AddNurbsSurfaceMesh2</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.AddPolygonMesh.html\">AddPolygonMesh</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.AddPrimitive.html\">AddPrimitive</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SceneItem.AddProperty.html\">AddProperty</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddScriptedOp.html\">AddScriptedOp</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddScriptedOpFromFile.html\">AddScriptedOpFromFile</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AnimatedParameters2.html\">AnimatedParameters2</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SceneItem.ApplyEnvelope.html\">ApplyEnvelope</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.BelongsTo.html\">BelongsTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.EvaluateAt.html\">EvaluateAt</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.FindChild.html\">FindChild</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.FindChild2.html\">FindChild2</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.FindChildren.html\">FindChildren</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.FindChildren2.html\">FindChildren2</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Camera.FindShaders.html\">FindShaders</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.GetActivePrimitive2.html\">GetActivePrimitive2</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.GetActivePrimitive3.html\">GetActivePrimitive3</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Camera.GetAllShaders.html\">GetAllShaders</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.GetBoundingBox.html\">GetBoundingBox</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.GetICEAttributeFromName.html\">GetICEAttributeFromName</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SceneItem.GetLocalPropertyFromName.html\">GetLocalPropertyFromName</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SceneItem.GetLocalPropertyFromName2.html\">GetLocalPropertyFromName2</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.GetModels2.html\">GetModels2</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SceneItem.GetPropertyFromName.html\">GetPropertyFromName</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SceneItem.GetPropertyFromName2.html\">GetPropertyFromName2</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Camera.GetShaderInputType.html\">GetShaderInputType</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.GetStaticKinematicState.html\">GetStaticKinematicState</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.HasStaticKinematicState.html\">HasStaticKinematicState</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsA.html\">IsA</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsAnimated2.html\">IsAnimated2</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsKindOf.html\">IsKindOf</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsLocked.html\">IsLocked</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.IsNodeAnimated.html\">IsNodeAnimated</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsSelected.html\">IsSelected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockOwners.html\">LockOwners</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.NodeAnimatedParameters.html\">NodeAnimatedParameters</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.RemoveChild.html\">RemoveChild</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.RemoveFromParent.html\">RemoveFromParent</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.RemoveICEAttribute.html\">RemoveICEAttribute</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetAsSelected.html\">SetAsSelected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetCapabilityFlag.html\">SetCapabilityFlag</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetLock.html\">SetLock</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SceneItem.SetMaterial.html\">SetMaterial</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.ShapeAnimatedClusters.html\">ShapeAnimatedClusters</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.TaggedParameters.html\">TaggedParameters</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.UnSetLock.html\">UnSetLock</a>		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.ActivePrimitive.html\">ActivePrimitive</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Camera.AllImageClips.html\">AllImageClips</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.BranchFlag.html\">BranchFlag</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Capabilities.html\">Capabilities</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.Children.html\">Children</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SceneItem.Envelopes.html\">Envelopes</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.EvaluationID.html\">EvaluationID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Families.html\">Families</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.HierarchicalEvaluationID.html\">HierarchicalEvaluationID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.ICEAttributes.html\">ICEAttributes</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/DirectedObject.Interest.html\">Interest</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.Kinematics.html\">Kinematics</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SceneItem.LocalProperties.html\">LocalProperties</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.LocalRotation.html\">LocalRotation</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.LocalScaling.html\">LocalScaling</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.LocalTranslation.html\">LocalTranslation</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockLevel.html\">LockLevel</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockMasters.html\">LockMasters</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockType.html\">LockType</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SceneItem.Material.html\">Material</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.Materials.html\">Materials</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Model.html\">Model</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.Models.html\">Models</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Parent3DObject.html\">Parent3DObject</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/X3DObject.Primitives.html\">Primitives</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SceneItem.Properties.html\">Properties</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Selected.html\">Selected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Camera.Shaders.html\">Shaders</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'vbscript example demonstrating how to access all Cameras in the\n\
\'scene.\n\
\'Create a sample scene with different cameras\n\
NewScene ,false\n\
GetPrimCamera\n\
GetPrimCamera \"Telephoto.Preset\", \"Telephoto\"\n\
GetPrimCamera \"Orthographic.Preset\", \"Ortho\"\n\
\'Put the orthographic camera inside a model\n\
CreateModel\n\
GetPrimCamera \"Wide_Angle.Preset\", \"WideAngle\"\n\
\'Hide one of the cameras underneath a cone\n\
GetPrim \"Cone\"\n\
CopyPaste \"WideAngle_Root\", ,\"cone\", 1\n\
GetPrimCamera \"Wide_Angle.Preset\", \"WideAngle\"\n\
\'Perform a recursive search for all the cameras in the scene\n\
set oCamerasCollection = ActiveSceneRoot.FindChildren( ,siCameraFilter )\n\
\'Print out some information about the Cameras in the scene \n\
logmessage \"The scene contains \" &amp; oCamerasCollection.count &amp; \" cameras\"\n\
for i = 0 to oCamerasCollection.count - 1\n\
	set oCamera = oCamerasCollection.Item( i )\n\
	PrintCameraInfo oCamera		\n\
next\n\
sub PrintCameraInfo( in_obj )\n\
	dim oCamera\n\
	set oCamera = in_obj\n\
	logmessage \"-----------------------Camera \" &amp; i &amp; \"------------------------\"\n\
	logmessage \"Camera Name: \" &amp; oCamera.Name\n\
	logmessage \"Camera Root: \" &amp; oCamera.Parent\n\
	logmessage \"Camera Primitive: \" &amp; oCamera.ActivePrimitive\n\
	\'The Interest a \"sibling\" of the Camera so\n\
	\'we find it via the parent\n\
	set oChildrenOfParent = oCamera.Parent.Children\n\
	dim oInterest\n\
	for each o in oChildrenOfParent\n\
		if ( o.type = \"CameraInterest\" ) then\n\
			set oInterest = o\n\
			exit for\n\
		end if\n\
	next\n\
	logmessage \"Camera Interest: \" &amp; oInterest	\n\
	\'Many aspects of the camera can be manipulated by reading and\n\
	\'writing the parameters on these various objects\n\
	if ( oCamera.ActivePrimitive.Parameters(\"proj\").Value = 1 ) then\n\
		logmessage \"Projection: Perspective\"\n\
	else\n\
		logmessage \"Projection: Orthographic\"\n\
	end if\n\
	logmessage \"Field of View: \" &amp; oCamera.ActivePrimitive.Parameters(\"fov\").Value\n\
	\'Although these parameters actual belong to the local kinematic property,\n\
	\'these shortforms are available to vbscript to make it even more convenient\n\
	logmessage \"Interest Pos(local): (\" &amp; oInterest.posx.Value &amp; _\n\
						\",\" &amp; oInterest.posy.Value &amp; _\n\
						\",\" &amp; oInterest.posz.Value &amp; \")\"\n\
	set oGlobalKine = oInterest.Kinematics.Global\n\
	logmessage \"Interest Pos(global): (\" &amp; oGlobalKine.Parameters(\"posx\").Value &amp; _\n\
						\",\" &amp; oGlobalKine.Parameters(\"posy\").Value &amp; _\n\
						\",\" &amp; oGlobalKine.Parameters(\"posz\").Value &amp; \")\"\n\
end sub\n\
\'This is part of the output from running this example:\n\
\'INFO : \"-----------------------Camera 2------------------------\"\n\
\'INFO : \"Camera Name: Telephoto\"\n\
\'INFO : \"Camera Root: Telephoto_Root\"\n\
\'INFO : \"Camera Primitive: Telephoto.camera\"\n\
\'INFO : \"Camera Interest: Telephoto_Interest\"\n\
\'INFO : \"Projection: Perspective\"\n\
\'INFO : \"Field of View: 6.662\"\n\
\'INFO : \"Interest Pos(local): (0,-2,-20)\"\n\
\'INFO : \"Interest Pos(global): (0,0,0)\"\n\
\'INFO : \"-----------------------Camera 3------------------------\"\n\
\'INFO : \"Camera Name: Ortho\"\n\
\'INFO : \"Camera Root: Model.Ortho_Root\"\n\
\'INFO : \"Camera Primitive: Model.Ortho.camera\"\n\
\'INFO : \"Camera Interest: Model.Ortho_Interest\"\n\
\'INFO : \"Projection: Orthographic\"\n\
\'INFO : \"Field of View: 53.638\"\n\
\'INFO : \"Interest Pos(local): (0,-2,-20)\"\n\
\'INFO : \"Interest Pos(global): (0,0,0)\"\n\
\'etc.....</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'VBScript example : display the properties of a camera\n\
Option Explicit\n\
CreateCamera()\n\
sub CreateCamera()\n\
	dim oCam\n\
	set oCam = ActiveProject.ActiveScene.Root.AddCameraRig( \"Camera\" ).camera\n\
	LogMessage \"camera interest\"\n\
	LogMessage oCam.name &amp; \".interest.name: \" &amp; oCam.interest.name\n\
	LogMessage \"camera parameters\"\n\
	oCam.near.value = oCam.near.value * 2\n\
	oCam.far.value = oCam.far.value * 2\n\
	oCam.orthoheight.value = oCam.orthoheight.value * 2\n\
	oCam.fov.value = oCam.fov.value * 2\n\
	LogMessage oCam &amp; \".near: \" &amp; oCam.near.value\n\
	LogMessage oCam &amp; \".far: \" &amp; oCam.far.value\n\
	LogMessage oCam &amp; \".orthoheight: \" &amp; oCam.orthoheight.value\n\
	LogMessage oCam &amp; \".fov: \" &amp; oCam.fov.value\n\
	LogMessage \"camera marking\"\n\
	oCam.near.marked = true\n\
	oCam.far.marked = true\n\
	oCam.orthoheight.marked = true\n\
	oCam.fov.marked = true\n\
	LogMessage oCam &amp; \".near.marked: \" &amp; oCam.near.marked\n\
	LogMessage oCam &amp; \".far.marked: \" &amp; oCam.far.marked\n\
	LogMessage oCam &amp; \".orthoheight.marked: \" &amp; oCam.orthoheight.marked\n\
	LogMessage oCam &amp; \".fov.marked: \" &amp; oCam.fov.marked\n\
	LogMessage \"camera capabilities\"\n\
	LogMessage oCam &amp; \".near.capabilities: \" &amp; oCam.near.capabilities\n\
	LogMessage oCam &amp; \".far.capabilities: \" &amp; oCam.far.capabilities\n\
	LogMessage oCam &amp; \".orthoheight.capabilities: \" &amp; oCam.orthoheight.capabilities\n\
	LogMessage oCam &amp; \".fov.capabilities: \" &amp; oCam.fov.capabilities\n\
	LogMessage \"camera kinematics position\"\n\
	oCam.posx.value = oCam.posx.value * 2\n\
	oCam.posy.value = oCam.posy.value * 2\n\
	oCam.posz.value = oCam.posz.value * 2\n\
	LogMessage oCam &amp; \".posx: \" &amp; oCam.posx.value\n\
	LogMessage oCam &amp; \".posy: \" &amp; oCam.posy.value\n\
	LogMessage oCam &amp; \".posz: \" &amp; oCam.posz.value\n\
	LogMessage \"camera kinematics rotation\"\n\
	oCam.rotx.value = oCam.rotx.value * 2\n\
	oCam.roty.value = oCam.roty.value * 2\n\
	oCam.rotz.value = oCam.rotz.value * 2\n\
	LogMessage oCam &amp; \".rotx: \" &amp; oCam.rotx.value\n\
	LogMessage oCam &amp; \".roty: \" &amp; oCam.roty.value\n\
	LogMessage oCam &amp; \".rotz: \" &amp; oCam.rotz.value\n\
	LogMessage \"camera kinematics scaling\"\n\
	oCam.sclx.value = oCam.sclx.value * 2\n\
	oCam.scly.value = oCam.scly.value * 2\n\
	oCam.sclz.value = oCam.sclz.value * 2\n\
	LogMessage oCam &amp; \".sclx: \" &amp; oCam.sclx.value\n\
	LogMessage oCam &amp; \".scly: \" &amp; oCam.scly.value\n\
	LogMessage oCam &amp; \".sclz: \" &amp; oCam.sclz.value\n\
	LogMessage \"camera kinematics constrained transfo\"\n\
	oCam.cnsscl.value = false\n\
	oCam.cnsori.value = false\n\
	oCam.cnspos.value = false\n\
	LogMessage oCam &amp; \".cnsscl: \" &amp; oCam.cnsscl.value\n\
	LogMessage oCam &amp; \".cnsori: \" &amp; oCam.cnsori.value\n\
	LogMessage oCam &amp; \".cnspos: \" &amp; oCam.cnspos.value\n\
end sub</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/CameraRig.html\">CameraRig</a> <a href=\"#!/url=./si_om/DirectedObject.Interest.html\">DirectedObject.Interest</a> <a href=\"#!/url=./si_cmds/GetPrimCamera.html\">GetPrimCamera</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";