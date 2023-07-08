var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Envelope</title>\n\
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
            <h1>Envelope</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Envelope</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_Envelope\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1Envelope.html\">Envelope</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\"><a href=\"#!/url=./si_om/ProjectItem.html\">ProjectItem</a></p>\n\
<p class=\"level3\"><a href=\"#!/url=./si_om/Operator.html\">Operator</a></p>\n\
<p class=\"level4\">Envelope</p>\n\
\n\
<h3>Description</h3>\n\
<div><p> The Envelope object represents an Envelope <a href=\"#!/url=./si_om/Operator.html\">Operator</a> on an object. For example \n\
an envelope can be used to deform a mesh surface according to changes in the positions of \n\
<a href=\"#!/url=./si_om/ChainBone.html\">ChainBone</a>s.\n\
<br /><br />\n\
It is possible to add an envelope operator to a point <a href=\"#!/url=./si_om/Cluster.html\">Cluster</a> using \n\
<a href=\"#!/url=./si_om/SceneItem.ApplyEnvelope.html\">SceneItem.ApplyEnvelope</a>.  It is also possible to call ApplyEnvelope on an  \n\
<a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a>, in which case a complete point cluster is automatically created.\n\
<br /><br />\n\
A <a href=\"#!/url=./si_om/ClusterProperty.html\">ClusterProperty</a> is used to store the influence that each deformer has on each\n\
point.  This data can be read and updated from the Object Model via the <a href=\"#!/url=./si_om/Envelope.Weights.html\">Envelope.Weights</a>\n\
property.\n\
<br /><br />\n\
The Envelope Operators on an object can be accessed via the <a href=\"#!/url=./si_om/Primitive.ConstructionHistory.html\">Primitive.ConstructionHistory</a>\n\
property (see <a href=\"#!/url=./si_om/X3DObject.ActivePrimitive.html\">X3DObject.ActivePrimitive</a>).  Alternatively an envelope can be accessed via \n\
the <a href=\"#!/url=./si_om/SceneItem.Envelopes.html\">SceneItem.Envelopes</a> property on the Cluster.\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AnimatedParameters2.html\">AnimatedParameters2</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.BelongsTo.html\">BelongsTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Operator.Connect.html\">Connect</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Operator.ConnectToGroup.html\">ConnectToGroup</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Operator.Copy.html\">Copy</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Operator.Disconnect.html\">Disconnect</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Operator.DisconnectGroup.html\">DisconnectGroup</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.EvaluateAt.html\">EvaluateAt</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Envelope.GetDeformerColor.html\">GetDeformerColor</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Envelope.GetDeformerWeights.html\">GetDeformerWeights</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.GetICEAttributeFromName.html\">GetICEAttributeFromName</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Operator.GetInputValue.html\">GetInputValue</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Operator.GetNumInstancesInGroup.html\">GetNumInstancesInGroup</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Operator.GetNumPortGroups.html\">GetNumPortGroups</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Operator.GetNumPortsInGroup.html\">GetNumPortsInGroup</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Operator.GetPort2.html\">GetPort2</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Operator.GetPort3.html\">GetPort3</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Operator.GetPortAt.html\">GetPortAt</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Envelope.GetWeights2.html\">GetWeights2</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsA.html\">IsA</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsAnimated2.html\">IsAnimated2</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsKindOf.html\">IsKindOf</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsLocked.html\">IsLocked</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsSelected.html\">IsSelected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockOwners.html\">LockOwners</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Operator.PortAt.html\">PortAt</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.RemoveICEAttribute.html\">RemoveICEAttribute</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetAsSelected.html\">SetAsSelected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetCapabilityFlag.html\">SetCapabilityFlag</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Envelope.SetDeformerColor.html\">SetDeformerColor</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Envelope.SetDeformerWeights.html\">SetDeformerWeights</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Envelope.SetDeformerWeights2.html\">SetDeformerWeights2</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetLock.html\">SetLock</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Operator.SupportsBranchGroup.html\">SupportsBranchGroup</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.BranchFlag.html\">BranchFlag</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Capabilities.html\">Capabilities</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Envelope.Deformers.html\">Deformers</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Envelope.Elements.html\">Elements</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.EvaluationID.html\">EvaluationID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Families.html\">Families</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.HierarchicalEvaluationID.html\">HierarchicalEvaluationID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.ICEAttributes.html\">ICEAttributes</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Operator.InputPorts.html\">InputPorts</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Operator.IsConnected.html\">IsConnected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockLevel.html\">LockLevel</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockMasters.html\">LockMasters</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockType.html\">LockType</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Model.html\">Model</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Operator.Mute.html\">Mute</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.ObjectID.html\">ObjectID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Operator.OutputPorts.html\">OutputPorts</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Owners.html\">Owners</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.PPGLayout.html\">PPGLayout</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Parameters.html\">Parameters</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Parent3DObject.html\">Parent3DObject</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Operator.Port.html\">Port</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Operator.PortGroups.html\">PortGroups</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Selected.html\">Selected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Envelope.Weights.html\">Weights</a>		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
<td class=\"example\"><pre class=\"vbscript\">\'vbscript example how to access and change the weights of an envelope\n\
newscene , false\n\
set oRoot = Application.ActiveProject.ActiveScene.Root\n\
set oSphere = oRoot.AddGeometry( \"Sphere\", \"MeshSurface\")\n\
set oChainRoot = oRoot.Add3DChain\n\
\' apply envelope to geometry\n\
set oEnvelope = oSphere.ApplyEnvelope( oChainRoot, siBranch )\n\
\' Here is another way to get this new envelope:\n\
set oEnvelope = oSphere.Envelopes(0)\n\
\' get 2D array of element/deformer weights\n\
aWeights = oEnvelope.Weights.Array\n\
\' change the weights so each deformer has equal influence\n\
equalWeight = 100 / oEnvelope.Deformers.Count\n\
for iElement=lbound(aWeights,2) to ubound(aWeights,2)\n\
	for iDeformer=lbound(aWeights,1) to ubound(aWeights,1)\n\
		aWeights(iDeformer,iElement) = equalWeight		\n\
	next\n\
next\n\
\' after manipulating the weights set the updated\n\
\' weights back on the envelope\n\
oEnvelope.Weights.Array = aWeights</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">//jscript example how to access and change the weights of an envelope\n\
var dft \n\
newscene(dft, false ) ;\n\
var oRoot = Application.ActiveProject.ActiveScene.Root\n\
var oSphere = oRoot.AddGeometry( \"Sphere\", \"MeshSurface\") ;\n\
var oChainRoot = oRoot.Add3DChain() ;\n\
//apply envelope to geometry\n\
var oEnvelope = oSphere.ApplyEnvelope( oChainRoot, siBranch ) ;\n\
//Here is another way to get this new envelope:\n\
var oEnvelope = oSphere.Envelopes(0) ;\n\
//get 2D array of element/deformer weights\n\
var aVBWeights = new VBArray( oEnvelope.Weights.Array ) ;\n\
//convert to a jscript (1D) array object\n\
var aWeights = aVBWeights.toArray() ;\n\
//change the weights so each deformer has equal influence\n\
equalWeight = 100 / oEnvelope.Deformers.Count ;\n\
for ( iElement = 0 ; iElement &lt; aWeights.length ; iElement++ )\n\
{\n\
	aWeights[iElement] = equalWeight ;\n\
}\n\
//after manipulating the weights set the updated\n\
//weights back on the envelope\n\
oEnvelope.Weights.Array = aWeights</pre></td></tr>\n\
</table>\n\
</div><h4>3. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'vbscript example that demonstrates how to apply an envelope to\n\
\'a cluster.\n\
\'It demonstrates how the index in the weights array are based on the\n\
\'cluster index, but how this can easily be translated to the \n\
\'true vertex index\n\
newscene ,false\n\
set oSphere = ActiveSceneRoot.AddGeometry( \"Sphere\", \"MeshSurface\" )\n\
\'Create a cluster that only contains some of the points.\n\
\'These are the only points that will be inflenced by the skeleton\n\
set oCluster = oSphere.ActivePrimitive.Geometry.AddCluster( _\n\
				siVertexCluster, \"MyFrontPoints\", Array( 18,19,20,25,26,27) ) \n\
\'Create the skeleton\n\
set oChainRoot = ActiveSceneRoot.Add3DChain\n\
set oEffPos = XSIMath.CreateVector3\n\
oEffPos.Set 3,3,3\n\
set oBone1 = oChainRoot.AddBone(oEffPos)\n\
set oEnvelope = oCluster.ApplyEnvelope( oChainRoot, siBranch )\n\
aWeights = oEnvelope.Weights.Array\n\
for iElement=lbound(aWeights,2) to ubound(aWeights,2)\n\
	\'Build a string with all the deformer weights\n\
	strElementWeights=\"\"\n\
	for iDeformer=lbound(aWeights,1) to ubound(aWeights,1)\n\
		strElementWeights = strElementWeights &amp; Round( aWeights(iDeformer,iElement), 2) &amp; \",\"\n\
	next\n\
	\'Calculate the index of the point that corresponds to this\n\
	\'index in the cluster	\n\
	iVertex = oEnvelope.Elements.Item( iElement ) \n\
	\'an equivalent way to calculate this same result is as follows:\n\
	\'iVertex = oCluster.Elements.Item( iElement ) 	\n\
	logmessage \"Cluster element \" &amp; iElement &amp; _ \n\
		     \" (pnt \" &amp; iVertex &amp; \") has weights \" &amp; strElementWeights	\n\
next\n\
\'Output of this script is:\n\
\'INFO : \"Cluster element 0 (pnt 18) has weights 0,50.26,49.74,0,\"\n\
\'INFO : \"Cluster element 1 (pnt 19) has weights 0,37.73,62.27,0,\"\n\
\'INFO : \"Cluster element 2 (pnt 20) has weights 0,21.99,78.01,0,\"\n\
\'INFO : \"Cluster element 3 (pnt 25) has weights 0,41.27,58.73,0,\"\n\
\'INFO : \"Cluster element 4 (pnt 26) has weights 0,14.34,85.66,0,\"\n\
\'INFO : \"Cluster element 5 (pnt 27) has weights 0,0.29,99.71,0,\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/ChainRoot.html\">ChainRoot</a> <a href=\"#!/url=./si_om/SceneItem.ApplyEnvelope.html\">SceneItem.ApplyEnvelope</a> <a href=\"#!/url=./si_om/Envelope.Weights.html\">Envelope.Weights</a> <a href=\"#!/url=./si_om/Cluster.html\">Cluster</a> <a href=\"#!/url=./si_om/ClusterProperty.html\">ClusterProperty</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";