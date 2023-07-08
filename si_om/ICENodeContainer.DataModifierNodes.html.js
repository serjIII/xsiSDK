var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ICENodeContainer.DataModifierNodes</title>\n\
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
            <h1>ICENodeContainer.DataModifierNodes</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/ICENodeContainer.html\">ICENodeContainer</a>.DataModifierNodes</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns an <a href=\"#!/url=./si_om/ICEDataModifierNodeCollection.html\">ICEDataModifierNodeCollection</a> containing all <a href=\"#!/url=./si_om/ICEDataModifierNode.html\">ICEDataModifierNode</a> objects \n\
in this container. This differs from <a href=\"#!/url=./si_om/ICENodeContainer.Nodes.html\">ICENodeContainer.Nodes</a>, which only returns the immediate\n\
ICEDataModifierNode objects. See <a href=\"#!/url=./si_om/ICENodeContainer.Nodes.html\">ICENodeContainer.Nodes</a> for more information. \n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
ICEDataModifierNodeCollection rtn = ICENodeContainer.DataModifierNodes;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\"># Sample code to log all the data modifier nodes in a graph\n\
import win32com.client\n\
from win32com.client import constants\n\
xsi = Application\n\
xsi.NewScene( \"\", 0 )\n\
# Recursive function for traversing a node graph\n\
def TraverseNodeGraph( in_node, level ):\n\
	indent = level * \'.\'\n\
	# Log the visited node name\n\
	xsi.LogMessage( indent + in_node.Name )\n\
	nodeCount = 0\n\
	nodes = ()\n\
	if in_node.IsClassOf( constants.siICENodeContainerID ):	\n\
		# The input node might be a ICETree or ICECompoundNode, let\'s get their ICEDataModifierNodes \n\
		nodes = in_node.DataModifierNodes\n\
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
TraverseNodeGraph( cubeICETree, level )\n\
# Expected results:\n\
# INFO : ICETree\n\
# INFO : ..Set Data</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/ICENodeContainer.CompoundNodes.html\">ICENodeContainer.CompoundNodes</a> <a href=\"#!/url=./si_om/ICENodeContainer.Nodes.html\">ICENodeContainer.Nodes</a> <a href=\"#!/url=./si_om/ICENodeContainer.DataProviderNodes.html\">ICENodeContainer.DataProviderNodes</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";