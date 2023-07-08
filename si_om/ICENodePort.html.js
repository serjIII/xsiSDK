var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ICENodePort</title>\n\
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
            <h1>ICENodePort</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ICENodePort</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_ICENodePort\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1ICENodePort.html\">ICENodePort</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\">ICENodePort</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v7.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> ICENodePort is the base class for <a href=\"#!/url=./si_om/ICENode.html\">ICENode</a> ports such as <a href=\"#!/url=./si_om/ICENodeInputPort.html\">ICENodeInputPort</a> and\n\
<a href=\"#!/url=./si_om/ICENodeOutputPort.html\">ICENodeOutputPort</a>. An ICENodePort is a connection point on an ICENode and connects to other\n\
ICENodePort objects. ICENodePort may be connected to something or not connected at all. Ports are organized in groups similar \n\
to the Softimage operator <a href=\"#!/url=./si_om/Port.html\">Port</a>s, where groups are logical groupings of multiple port connections. \n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ICENodePort.ConnectedNodes.html\">ConnectedNodes</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ICENodePort.ConnectedPorts.html\">ConnectedPorts</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ICENodePort.ContextType.html\">ContextType</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ICENodePort.CustomDataTypes.html\">CustomDataTypes</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ICENodePort.DataType.html\">DataType</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ICENodePort.GroupIndex.html\">GroupIndex</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ICENodePort.GroupInstanceIndex.html\">GroupInstanceIndex</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ICENodePort.Index.html\">Index</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ICENodePort.IsConnected.html\">IsConnected</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ICENodePort.IsOutput.html\">IsOutput</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ICENodePort.Parameters.html\">Parameters</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ICENodePort.StructureType.html\">StructureType</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
# This example shows how to access the ports of ICENode objects\n\
#\n\
import win32com.client\n\
from win32com.client import constants\n\
xsi = Application\n\
# ICENodePort introspection\n\
def LogICENodePort( in_nodeport, level ):\n\
	indent = level * \'.\'\n\
	xsi.LogMessage( \"* * * \" )\n\
	xsi.LogMessage( indent + \"node port: \" + in_nodeport.FullName )\n\
	xsi.LogMessage( indent + \"node port parent: \" + in_nodeport.Parent.FullName )\n\
	xsi.LogMessage( indent + \"node port class: \" + xsi.ClassName( in_nodeport ) )\n\
	xsi.LogMessage( indent + \"output node port: \" + str(in_nodeport.IsOutput) )\n\
	xsi.LogMessage( indent + \"connected: \" + str(in_nodeport.IsConnected) )\n\
	xsi.LogMessage( indent + \"group port index: \" + str(in_nodeport.Index) )\n\
	xsi.LogMessage( indent + \"group index: \" + str(in_nodeport.GroupIndex) )\n\
	xsi.LogMessage( indent + \"group instance index: \" + str(in_nodeport.GroupInstanceIndex) )\n\
	xsi.LogMessage( indent + \"type: \" + str(in_nodeport.DataType) )\n\
	xsi.LogMessage( indent + \"structure type: \" + str(in_nodeport.StructureType) )\n\
	xsi.LogMessage( indent + \"evaluation context type: \" + str(in_nodeport.ContextType) )\n\
	connectednodes = in_nodeport.ConnectedNodes\n\
	count = connectednodes.Count\n\
	xsi.LogMessage( indent + \"connected nodes: \" + str(count) )	\n\
	for i in range(count):\n\
		xsi.LogMessage( indent + \"connected node: \" + connectednodes[i].Name )\n\
	# Log the port parameters\n\
	params = in_nodeport.Parameters\n\
	for param in params:\n\
		xsi.LogMessage( indent + \"parameter: \" + param.ScriptName + \":\" + str(param.GetValue2()) )\n\
# Recursive function for traversing a node graph\n\
def TraverseNodeGraph( in_node, level ):\n\
	indent = level * \'.\'\n\
	# Log the visited node name\n\
	xsi.LogMessage( indent + in_node.Name )\n\
	# Log all ICENodePorts for this node\n\
	inPorts = in_node.InputPorts\n\
	inputPortCount = inPorts.Count\n\
	xsi.LogMessage( indent + \"node input ports: \" + str(inputPortCount) )\n\
	for i in range(inputPortCount ):\n\
		nodeport = inPorts[i]\n\
		LogICENodePort( nodeport, level+2 )			\n\
	outPorts = in_node.OutputPorts\n\
	outputPortCount = outPorts.Count\n\
	xsi.LogMessage( indent + \"node output ports: \" + str(outputPortCount) )\n\
	for i in range(outputPortCount ):\n\
		nodeport = outPorts[i]\n\
		LogICENodePort( nodeport, level+2 )			\n\
	nodeCount = 0\n\
	nodes = ()\n\
	if in_node.IsClassOf( constants.siICENodeContainerID ):	\n\
		# The input node might be a ICETree or ICECompoundNode, let\'s get their ICENodes\n\
		nodes = in_node.Nodes\n\
		nodeCount = nodes.Count\n\
	# Recursively traverse the graph\n\
	for i in range(nodeCount):\n\
		TraverseNodeGraph( nodes[i], level+2 )\n\
# Create a sample twist deformer graph first\n\
xsi.CreatePrim( \"Cube\", \"MeshSurface\" )\n\
xsi.SetValue( \"cube.polymsh.geom.subdivu\", 15 )\n\
xsi.SetValue( \"cube.polymsh.geom.subdivv\", 14 )\n\
xsi.ApplyOp( \"ICETree\", \"cube\", None, None, None, 0 )\n\
xsi.AddICENode( \"GetDataNode\", \"cube.polymsh.ICETree\" )\n\
xsi.SetValue( \"cube.polymsh.ICETree.SceneReferenceNode.Reference\", \"cube.polymsh.PointPosition\" )\n\
xsi.AddICENode( \"RotateVectorNode\", \"cube.polymsh.ICETree\" )\n\
xsi.AddICENode( \"3DVectorToScalarNode\", \"cube.polymsh.ICETree\" )\n\
xsi.AddICENode( \"SetData\", \"cube.polymsh.ICETree\" )\n\
xsi.SetValue( \"cube.polymsh.ICETree.SetData.PredefinedAttributeName\", \"PointPosition\" )\n\
xsi.AddAttributeToSetDataICENode( \"cube.polymsh.ICETree.SetData\", \"PointPosition\", constants.siComponentDataTypeVector3, constants.siComponentDataContextComponent0D, constants.siComponentDataStructureSingle )\n\
xsi.ConnectICENodes( \"cube.polymsh.ICETree.port1\", \"cube.polymsh.ICETree.SetData.set\" )\n\
xsi.ConnectICENodes( \"cube.polymsh.ICETree.RotateVectorNode.vector\", \"cube.polymsh.ICETree.SceneReferenceNode.value\" )\n\
xsi.ConnectICENodes( \"cube.polymsh.ICETree.SetData.pointposition\", \"cube.polymsh.ICETree.RotateVectorNode.result\" )\n\
xsi.ConnectICENodes( \"cube.polymsh.ICETree.3DVectorToScalarNode.vector\", \"cube.polymsh.ICETree.SceneReferenceNode.value\" )\n\
xsi.AddICENode( \"MultiplyNode\", \"cube.polymsh.ICETree\" )\n\
xsi.ConnectICENodes( \"cube.polymsh.ICETree.MultiplyNode.value1\", \"cube.polymsh.ICETree.3DVectorToScalarNode.y\" )\n\
xsi.AddICENode( \"ScalarToRotationNode\", \"cube.polymsh.ICETree\" )\n\
xsi.ConnectICENodes( \"cube.polymsh.ICETree.ScalarToRotationNode.angle\", \"cube.polymsh.ICETree.MultiplyNode.result\" )\n\
xsi.ConnectICENodes( \"cube.polymsh.ICETree.RotateVectorNode.rotation\", \"cube.polymsh.ICETree.ScalarToRotationNode.rotation\" )\n\
xsi.SetValue( \"cube.polymsh.ICETree.ScalarToRotationNode.y\", 1 )\n\
xsi.SetValue( \"cube.polymsh.ICETree.ScalarToRotationNode.x\", 0 )\n\
xsi.SetValue( \"cube.polymsh.ICETree.MultiplyNode.value2\", 20 )\n\
xsi.CreateICECompoundNode(\"cube.polymsh.ICETree.3DVectorToScalarNode,cube.polymsh.ICETree.MultiplyNode,cube.polymsh.ICETree.ScalarToRotationNode\", \"\")\n\
# Get the ICETree off the cube primitive and start iterating in the graph\n\
cube = xsi.Selection(0)\n\
cubeICETree = cube.GetActivePrimitive3().ICETrees[0]\n\
level = 0\n\
TraverseNodeGraph( cubeICETree, level )</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";