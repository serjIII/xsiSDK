var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>StaticKinematicState</title>\n\
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
            <h1>StaticKinematicState</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">StaticKinematicState</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_StaticKinematicState\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1StaticKinematicState.html\">StaticKinematicState</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\"><a href=\"#!/url=./si_om/ProjectItem.html\">ProjectItem</a></p>\n\
<p class=\"level3\"><a href=\"#!/url=./si_om/Property.html\">Property</a></p>\n\
<p class=\"level4\">StaticKinematicState</p>\n\
\n\
<h3>Description</h3>\n\
<div><p> The StaticKinematicState object represents the base pose of an object. \n\
Objects that have access to the StaticKinematicState object include: <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> \n\
and <a href=\"#!/url=./si_om/Cluster.html\">Cluster</a>.<br /><br />\n\
The static kinematic state on objects is created when applying envelopes, deform by spine or deform by curve. \n\
Currently an object can only have one static kinematic state. It represents a snapshot of the pose of the object \n\
when the Envelope, DeformBySpine or DeformByCage operator was applied. It is also changed when doing Set Reference \n\
Pose in the Animate|Deform|Envelope menu. If an object has all 3 operations applied on the same object \n\
they will all share the same static kinematic state. When doing a cage deform on top of a \n\
envelope for example the later operation will reset the static kinematic state. This means that \n\
it\'s usually better to be in the reference pose when adding these deforms (reset actor).<br /><br />\n\
The static kinematic state on clusters is created when the cluster is translated, rotated or \n\
scaled by the MoveComponent operator. The static kinematic state is the transformation applied \n\
by the MoveComponent operator on the cluster. There is one or possibly two static kine \n\
state per move component on a cluster.  Therefore you end-up with multiple static \n\
kine states on a cluster if you transform the cluster many times. The second static kine \n\
state on the cluster is created when moving clusters in relative mode.\n\
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
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/StaticKinematicState.GetTransform2.html\">GetTransform2</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsA.html\">IsA</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsAnimated2.html\">IsAnimated2</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsKindOf.html\">IsKindOf</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsLocked.html\">IsLocked</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsSelected.html\">IsSelected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockOwners.html\">LockOwners</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.RemoveICEAttribute.html\">RemoveICEAttribute</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetAsSelected.html\">SetAsSelected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetCapabilityFlag.html\">SetCapabilityFlag</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetLock.html\">SetLock</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.TaggedParameters.html\">TaggedParameters</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.UnSetLock.html\">UnSetLock</a>		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.EvaluationID.html\">EvaluationID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Families.html\">Families</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.HierarchicalEvaluationID.html\">HierarchicalEvaluationID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.ICEAttributes.html\">ICEAttributes</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockLevel.html\">LockLevel</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockMasters.html\">LockMasters</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockType.html\">LockType</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Model.html\">Model</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Parent3DObject.html\">Parent3DObject</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Selected.html\">Selected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Property.Singleton.html\">Singleton</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/StaticKinematicState.Transform.html\">Transform</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
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
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'=======================================================================================\n\
\'	This script demonstrates how to get the StaticKinematicState object\n\
\'	from a cluster. Notice that this object only exists after the cluster\n\
\'	has been transformed.\n\
\'=======================================================================================\n\
\' Set up a cluster on a torus \n\
set oRoot = ActiveSceneRoot\n\
set oTorus = oRoot.AddGeometry( \"Torus\",\"MeshSurface\" )\n\
set oPimple = oTorus.ActivePrimitive.Geometry.AddCluster( _\n\
			siVertexCluster, _\n\
			\"Pimple\", _\n\
			Array( 0,2,8,10 ) _\n\
			)\n\
\' Print out position information before moving the cluster\n\
getBasePositionInfo oPimple \n\
\' Translate the cluster in X and Z\n\
Translate oPimple, 0, 3.54998625973143, -0.354998625973143, siRelative, siView, siObj, siXYZ\n\
\' Print out position information after applying envelope\n\
getBasePositionInfo oPimple\n\
function getBasePositionInfo( in_cluster )\n\
	\' The cluster will only have it after a MoveComponent\n\
	\' operator has been applied\n\
	if in_cluster.HasStaticKinematicState then\n\
		set oBasePose = in_cluster.GetStaticKinematicStates\n\
		for each oPose in oBasePose\n\
			\' Create an SIVector3 math object to hold the translation\n\
			set oTranslation = XSIMath.CreateVector3 \n\
			\' Print out the translation information from the base pose\n\
			oPose.Transform.GetTranslation oTranslation\n\
			logmessage \"The StaticKinematicState property position is \" _\n\
						&amp; \"(as X, Y, Z): \" &amp; oTranslation.X &amp; \", \" _\n\
						&amp; oTranslation.Y &amp; \", \" &amp; oTranslation.Z\n\
		next\n\
	else\n\
		\' Default situation\n\
		logmessage \"There\'s no StaticKinematicState property on this object.\"\n\
	end if\n\
end function\n\
\'=======================================================================================\n\
\' Output of above script is:\n\
\'\n\
\'INFO : \"There\'s no StaticKinematicState property on this object.\"\n\
\'INFO : \"The StaticKinematicState property position is (as X, Y, Z): 0, 0, 0\"\n\
\'INFO : \"The StaticKinematicState property position is (as X, Y, Z): 0, 3.54998625973143, -0.354998625973143\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'=======================================================================================\n\
\'	This script demonstrates how to get the StaticKinematicState object\n\
\'	from an object. Notice that the StaticKinematicState only exists \n\
\'	after an envelope or deform operation has been performed on the object.\n\
\'=======================================================================================\n\
\' Set up a null to envelope \n\
set oRoot = ActiveSceneRoot\n\
set oNull = oRoot.AddPrimitive( \"Null\",\"MyNull\")\n\
oNull.Kinematics.Global.Parameters( \"posy\" ).Value = 6.0\n\
\' Set up the object to use as an envelope\n\
set oCube = oRoot.AddGeometry( \"Cube\",\"MeshSurface\" )\n\
\' Print out position information before applying envelope\n\
getBasePositionInfo oCube \n\
\' Set up the envelope\n\
oCube.ApplyEnvelope oNull \n\
\' Print out position information after applying envelope\n\
getBasePositionInfo oCube \n\
function getBasePositionInfo( in_object )\n\
	\' The object will only have it after an envelope or deform\n\
	\' operator has been applied\n\
	if in_object.HasStaticKinematicState then\n\
		set oTranslation = XSIMath.CreateVector3\n\
		in_object.GetStaticKinematicState.Transform.GetTranslation oTranslation\n\
		logmessage \"The StaticKinematicState property position is (as X, Y, Z): \" &amp; _\n\
				oTranslation.X &amp; \", \" &amp; oTranslation.Y &amp; \", \" &amp; oTranslation.Z\n\
	else\n\
		logmessage \"There\'s no StaticKinematicState property on this object.\"\n\
	end if\n\
end function\n\
\'=======================================================================================\n\
\' Output of above script is:\n\
\'\n\
\'INFO : \"There\'s no StaticKinematicState property on this object.\"\n\
\'INFO : \"The StaticKinematicState property position is (as X, Y, Z): 0, 0, 0\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Cluster.HasStaticKinematicState.html\">Cluster.HasStaticKinematicState</a> <a href=\"#!/url=./si_om/Cluster.GetStaticKinematicStates.html\">Cluster.GetStaticKinematicStates</a> <a href=\"#!/url=./si_om/KinematicState.html\">KinematicState</a> <a href=\"#!/url=./si_om/X3DObject.HasStaticKinematicState.html\">X3DObject.HasStaticKinematicState</a> <a href=\"#!/url=./si_om/X3DObject.GetStaticKinematicState.html\">X3DObject.GetStaticKinematicState</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";