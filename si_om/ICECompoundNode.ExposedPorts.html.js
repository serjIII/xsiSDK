var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ICECompoundNode.ExposedPorts</title>\n\
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
            <h1>ICECompoundNode.ExposedPorts</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/ICECompoundNode.html\">ICECompoundNode</a>.ExposedPorts</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns an <a href=\"#!/url=./files/Array.htm\">Array</a> of 2 <a href=\"#!/url=./si_om/ICENodePortCollection.html\">ICENodePortCollection</a> objects. The first \n\
collection contains the exposed ports and the second one the associated compound node ports also \n\
known as proxy ports. The collections work as a pair, the exposed port at position 0 in the first \n\
collection matches the node port at position 0 in the second collection, etc.\n\
<br /><br />\n\
The exposed ports are the contained nodes ports of a compound node and act as connection points to \n\
outer nodes. These ports can be either <a href=\"#!/url=./si_om/ICENodeInputPort.html\">ICENodeInputPort</a> or <a href=\"#!/url=./si_om/ICENodeOutputPort.html\">ICENodeOutputPort</a> \n\
objects. This property and the <a href=\"#!/url=./si_cmds/AddExposedParamToICECompoundNode.html\">AddExposedParamToICECompoundNode</a> command are \n\
typically used in pair for exposing the contained node ports to other graph nodes.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Object rtn = ICECompoundNode.ExposedPorts;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\"># Sample code to access the exposed ports on the compound nodes of a graph\n\
import win32com.client\n\
from win32com.client import constants\n\
xsi = Application\n\
# Recursive function for traversing a node graph\n\
def TraverseNodeGraph( in_node, level ):\n\
	indent = level * \'.\'\n\
	if in_node.IsClassOf( constants.siICECompoundNodeID ):\n\
		# Log the visited compound node name	\n\
		xsi.LogMessage( indent + in_node.Name )\n\
		# Get the exposed port info for the compound node\n\
		ports = in_node.ExposedPorts\n\
		# The exposed ports\n\
		exposedPorts = ports[0]\n\
		exposedPortsCount = exposedPorts.Count\n\
		# The compound node ports\n\
		nodePorts = ports[1]\n\
		for i in range(exposedPortsCount):\n\
			xsi.LogMessage( indent + \"Node port \" + str(i) + \": \" + str(nodePorts[i]) )\n\
			xsi.LogMessage( indent + \"Exposed port \" + str(i) + \": \" + str(exposedPorts[i]) )			\n\
	nodeCount = 0\n\
	nodes = ()\n\
	if in_node.IsClassOf( constants.siICENodeContainerID ):	\n\
		# The input node is a ICENodeContainer, let\'s get its inner compound nodes\n\
		nodes = in_node.CompoundNodes\n\
		nodeCount = nodes.Count\n\
	# Recursively traverse the graph\n\
	for i in range(nodeCount):\n\
		TraverseNodeGraph( nodes[i], level+2 )\n\
# Create a sample twist deformer graph first\n\
xsi.NewScene(\"\", \"\")\n\
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
xsi.CreateICECompoundNode(\"cube.polymsh.ICETree.3DVectorToScalarNode,cube.polymsh.ICETree.MultiplyNode,cube.polymsh.ICETree.ScalarToRotationNode\", \"Compound1\")\n\
xsi.CreateICECompoundNode(\"cube.polymsh.ICETree.Compound1.ScalarToRotationNode,cube.polymsh.ICETree.Compound1.MultiplyNode\", \"Compound2\")\n\
xsi.CreateICECompoundNode(\"cube.polymsh.ICETree.Compound1\", \"CompoundTop\")\n\
# Get the ICETree off the cube primitive and start iterating the graph\n\
cube = xsi.Selection(0)\n\
cubeICETree = cube.GetActivePrimitive3().ICETrees[0]\n\
level = 0\n\
TraverseNodeGraph( cubeICETree, level )</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";