var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Operator</title>\n\
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
            <h1>Operator</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Operator</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_Operator\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1Operator.html\">Operator</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\"><a href=\"#!/url=./si_om/ProjectItem.html\">ProjectItem</a></p>\n\
<p class=\"level3\">Operator</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.5</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> The Operator object represents an operator in the scene graph. Objects or <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a>s \n\
are connected to the operator via <a href=\"#!/url=./si_om/InputPort.html\">InputPort</a>s or <a href=\"#!/url=./si_om/OutputPort.html\">OutputPort</a>s, which\n\
may be organized into <a href=\"#!/url=./si_om/PortGroup.html\">PortGroup</a>s.  SDK users can create their own operators, which \n\
are represented in the Object Model as <a href=\"#!/url=./si_om/CustomOperator.html\">CustomOperator</a>s.\n\
<br /><br />\n\
The responsibility of an operator is to change the output object (or objects) with the result of some \n\
algorithm.  The only data the operator can read from the scene is via its input ports and parameters.\n\
For example, a typical operator might change the position of one object (the output) based on the position \n\
of several other objects (the inputs). The same object may act as both the input and the output of an \n\
operator, for example a typical deformation operator will read a geometry and output a modified version \n\
of the point positions of that same geometry.  Selecting an operator in the \"SDK Explorer\" view is a good \n\
way to learn more about its ports and parameters.\n\
<br /><br />\n\
To access individual ports from within the evaluation of a Self-Installed Custom Operator use the \n\
<a href=\"#!/url=./si_om/OperatorContext.html\">OperatorContext</a> object.  From outside the evaluation callback use the \n\
<a href=\"#!/url=./si_om/Operator.PortAt.html\">Operator.PortAt</a> method.\n\
<br /><br />\n\
Almost all Operators expose one or more <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a>s which control the behavior of the\n\
operator. For example, the \"subdivu\" and \"subdivv\" parameters on a polygon mesh geometry operator control \n\
the number of polygons that a polygon mesh is generated with.  \n\
<br /><br />\n\
The most common way to create and connect a built-in operator is by calling the <a href=\"#!/url=./si_cmds/ApplyOp.html\">ApplyOp</a>\n\
command. However, there are many specialized commands for creating operators, for example \n\
<a href=\"#!/url=./si_cmds/ApplyTopoOp.html\">ApplyTopoOp</a>, <a href=\"#!/url=./si_cmds/ApplyHairOp.html\">ApplyHairOp</a> and <a href=\"#!/url=./si_cmds/ApplyGenOp.html\">ApplyGenOp</a>.  Operators \n\
are also often created indirectly, for example calling <a href=\"#!/url=./si_om/X3DObject.AddGeometry.html\">X3DObject.AddGeometry</a> creates an \n\
operator that generates the geometry.\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AnimatedParameters2.html\">AnimatedParameters2</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.BelongsTo.html\">BelongsTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Operator.Connect.html\">Connect</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Operator.ConnectToGroup.html\">ConnectToGroup</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Operator.Copy.html\">Copy</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Operator.Disconnect.html\">Disconnect</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Operator.DisconnectGroup.html\">DisconnectGroup</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.EvaluateAt.html\">EvaluateAt</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.GetICEAttributeFromName.html\">GetICEAttributeFromName</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Operator.GetInputValue.html\">GetInputValue</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Operator.GetNumInstancesInGroup.html\">GetNumInstancesInGroup</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Operator.GetNumPortGroups.html\">GetNumPortGroups</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Operator.GetNumPortsInGroup.html\">GetNumPortsInGroup</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Operator.GetPort2.html\">GetPort2</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Operator.GetPort3.html\">GetPort3</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Operator.GetPortAt.html\">GetPortAt</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
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
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Operator.PortAt.html\">PortAt</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.RemoveICEAttribute.html\">RemoveICEAttribute</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetAsSelected.html\">SetAsSelected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetCapabilityFlag.html\">SetCapabilityFlag</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetLock.html\">SetLock</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Operator.SupportsBranchGroup.html\">SupportsBranchGroup</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.TaggedParameters.html\">TaggedParameters</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.UnSetLock.html\">UnSetLock</a>		</td>	</tr>\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.EvaluationID.html\">EvaluationID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Families.html\">Families</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.HierarchicalEvaluationID.html\">HierarchicalEvaluationID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.ICEAttributes.html\">ICEAttributes</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Operator.InputPorts.html\">InputPorts</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Operator.IsConnected.html\">IsConnected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockLevel.html\">LockLevel</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockMasters.html\">LockMasters</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockType.html\">LockType</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Model.html\">Model</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Operator.Mute.html\">Mute</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.ObjectID.html\">ObjectID</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Operator.OutputPorts.html\">OutputPorts</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Owners.html\">Owners</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.PPGLayout.html\">PPGLayout</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Parameters.html\">Parameters</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Parent3DObject.html\">Parent3DObject</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Operator.Port.html\">Port</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Operator.PortGroups.html\">PortGroups</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Selected.html\">Selected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example illustrates how to generate a mesh by using the loft operator and\n\
	a number of input curves. The code also illustrates how to traverse the operator\'s\n\
	port group, port group instances and ports and logs the name of the port, its type\n\
	and the full path name of the object connected to the port.\n\
*/\n\
NewScene( null, false );\n\
var arc = ActiveSceneRoot.AddGeometry( \"Arc\", \"NurbsCurve\" );\n\
// Duplicate arc 4 times and translate in y\n\
var args = new Array(19);\n\
args[0] = arc;                                       // source object\n\
args[1] = 4;                                         // number of copies\n\
args[9] = siApplyRepeatXForm;                        // Xform\n\
args[18] = 1;                                        // Ty\n\
var objs = Application.ExecuteScriptCommand( \"Duplicate\", args );\n\
// Create array containing arc and duplicates\n\
var aobjs = new Array(5)\n\
aobjs[0] = arc;\n\
for ( var i = 0; i &lt; objs.count; i++ ) aobjs[i+1] = objs(i);\n\
// Apply loft operator\n\
var op = ApplyOp( \"Loft\", aobjs )(0);\n\
// Traverse port group, instances and ports and log port connections\n\
// For each port group ...\n\
for ( var idxGroup = 0; idxGroup &lt; op.GetNumPortGroups(); idxGroup++ )\n\
{\n\
	// For each instance in a port group ...\n\
	for ( var idxInstance = 0; idxInstance &lt; op.GetNumInstancesInGroup( idxGroup ); idxInstance++ )\n\
	{\n\
		// For each port in a  port group instance ...\n\
		for ( var idxPort = 0; idxPort &lt; op.GetNumPortsInGroup( idxGroup ); idxPort++ )\n\
		{\n\
			// Get a specific port\n\
			var port = op.PortAt( idxPort, idxGroup, idxInstance );\n\
			// If the port is an input port ...\n\
			if ( port.PortType == siPortInput )\n\
				porttypestr = \"input\"\n\
			else if ( port.PortType == siPortOutput )\n\
				porttypestr = \"output\"\n\
			else\n\
				porttypestr = \"error\"\n\
			var target = port.Target2;\n\
			// ... and the connected type is an object connection\n\
			if ( typeof(target) == \"object\" )\n\
			{\n\
				Application.LogMessage( op.Name + \" group:\" + port.GroupIndex + \" \" + \" instance:\" + port.GroupInstance \n\
								+ \" \" + porttypestr + \"port:\" + port.Index + \":\" + target.FullName );\n\
			}\n\
		} \n\
	}\n\
}\n\
// Expected results:\n\
//INFO : \"Loft group:0  instance:0 inputport:0:arc.crvlist\"\n\
//INFO : \"Loft group:0  instance:0 inputport:1:arc.kine.global\"\n\
//INFO : \"Loft group:0  instance:1 inputport:0:arc1.crvlist\"\n\
//INFO : \"Loft group:0  instance:1 inputport:1:arc1.kine.global\"\n\
//INFO : \"Loft group:0  instance:2 inputport:0:arc2.crvlist\"\n\
//INFO : \"Loft group:0  instance:2 inputport:1:arc2.kine.global\"\n\
//INFO : \"Loft group:0  instance:3 inputport:0:arc3.crvlist\"\n\
//INFO : \"Loft group:0  instance:3 inputport:1:arc3.kine.global\"\n\
//INFO : \"Loft group:0  instance:4 inputport:0:arc4.crvlist\"\n\
//INFO : \"Loft group:0  instance:4 inputport:1:arc4.kine.global\"\n\
//INFO : \"Loft group:1  instance:0 inputport:0:surfmsh.kine.global\"\n\
//INFO : \"Loft group:1  instance:0 outputport:1:surfmsh.surfmsh\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/ConstructionHistory.html\">ConstructionHistory</a> <a href=\"#!/url=./si_om/CustomOperator.html\">CustomOperator</a> <a href=\"#!/url=./si_om/Envelope.html\">Envelope</a> <a href=\"#!/url=./si_cmds/ApplyOp.html\">ApplyOp</a> <a href=\"#!/url=./si_cmds/FreezeObj.html\">FreezeObj</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";