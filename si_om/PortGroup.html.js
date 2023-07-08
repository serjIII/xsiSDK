var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PortGroup</title>\n\
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
            <h1>PortGroup</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">PortGroup</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_PortGroup\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1PortGroup.html\">PortGroup</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\">PortGroup</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> A portgroup is a group of <a href=\"#!/url=./si_om/Port.html\">Port</a> objects on an <a href=\"#!/url=./si_om/Operator.html\">Operator</a>. The port group is\n\
a logical grouping of multiple port connections that are normally scoped by a <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a>.\n\
A single portgroup can contain both <a href=\"#!/url=./si_om/InputPort.html\">InputPort</a>s and <a href=\"#!/url=./si_om/OutputPort.html\">OutputPort</a>s.\n\
<br /><br />\n\
Note: The PortGroup object should not be confused with the <a href=\"#!/url=./si_om/Group.html\">Group</a> object.\n\
<br /><br />\n\
You can determine the number of port groups defined by an operator using the \n\
<a href=\"#!/url=./si_om/Operator.GetNumPortGroups.html\">Operator.GetNumPortGroups</a> method and determine the number of ports in a PortGroup \n\
using the <a href=\"#!/url=./si_om/Operator.GetNumPortsInGroup.html\">Operator.GetNumPortsInGroup</a> method.\n\
<br /><br />\n\
For built-in <a href=\"#!/url=./si_om/Operator.html\">Operator</a>s the port groups contain all ports that will be connected\n\
to parts of the selected or picked object. For example, when the <a href=\"#!/url=./si_cmds/DeformOperatorPresets.html\">Twist</a> \n\
operator is applied to a selected object, the operator has ports that read from the object\'s local \n\
<a href=\"#!/url=./si_om/KinematicState.html\">KinematicState</a> and <a href=\"#!/url=./si_om/Geometry.html\">Geometry</a> and write to the result object\'s \n\
geometry.\n\
<br /><br />\n\
However, for typical Self-Installed Custom Operators, all outputs and inputs can be in a single PortGroup because\n\
the individual targets for each port are specifically provided at the time of calls to <a href=\"#!/url=./si_om/CustomOperator.AddInputPort.html\">CustomOperator.AddInputPort</a>\n\
or <a href=\"#!/url=./si_cmds/AddCustomOp.html\">AddCustomOp</a>.  In fact, the concept of PortGroup can be completely ignored for most \n\
custom operators.  However any dynamic input inside an advanced operators should be in its own PortGroup \n\
to permit usage of <a href=\"#!/url=./si_om/Operator.ConnectToGroup.html\">Operator.ConnectToGroup</a>.\n\
<br /><br />\n\
Multiple objects can connect to the same port group, for example, the loft operator may read from many \n\
curves to generate the resulting mesh. Each of these input curves are connected to the same port group \n\
and each connection is called a port group instance. You can determine the number of objects connected \n\
to a port group by using <a href=\"#!/url=./si_om/Operator.GetNumInstancesInGroup.html\">Operator.GetNumInstancesInGroup</a> or <a href=\"#!/url=./si_om/PortGroup.InstanceCount.html\">PortGroup.InstanceCount</a>.\n\
<br /><br />\n\
Use <a href=\"#!/url=./si_om/SIObject.Parent.html\">SIObject.Parent</a> to get the Operator for this PortGroup and <a href=\"#!/url=./si_om/SIObject.Name.html\">SIObject.Name</a> \n\
to get the name of this port group.\n\
<br /><br />\n\
From the port you can determine which port group a port belongs to using the <a href=\"#!/url=./si_om/Port.GroupName.html\">Port.GroupName</a> \n\
or <a href=\"#!/url=./si_om/Port.GroupIndex.html\">Port.GroupIndex</a> properties. You can determine which port group instance a port \n\
belongs to using the <a href=\"#!/url=./si_om/Port.GroupInstance.html\">Port.GroupInstance</a> property.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PortGroup.IsOptional.html\">IsOptional</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PortGroup.SupportsBranchGroup.html\">SupportsBranchGroup</a>		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Properties</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PortGroup.Filter.html\">Filter</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PortGroup.Flags.html\">Flags</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PortGroup.Index.html\">Index</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PortGroup.InstanceCount.html\">InstanceCount</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PortGroup.Max.html\">Max</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PortGroup.Min.html\">Min</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PortGroup.PickPrompt.html\">PickPrompt</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PortGroup.Ports.html\">Ports</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example illustrates how to browse the port groups of an operator.\n\
*/\n\
NewScene( null, false );\n\
CreatePrim( \"Cylinder\", \"MeshSurface\" );\n\
var op = ApplyOp( \"Shear\", \"cylinder\", 3, siPersistentOperation )(0);\n\
dump_portgroups(op);\n\
function dump_portgroups(op)\n\
{\n\
	if ( ! op.BelongsTo(\"Operators\") )\n\
		return;\n\
	var ePortGroups = new Enumerator( op.PortGroups );\n\
	for ( ; ! ePortGroups.atEnd(); ePortGroups.moveNext() )\n\
	{\n\
		var portgroup = ePortGroups.item();\n\
		var str = \"\"; \n\
		str += \"group name: \" + portgroup.Name;\n\
		str += \", type: \" + portgroup.Type;\n\
		str += \", parent: \" + portgroup.Parent;\n\
		str += \", index: \" + portgroup.Index;\n\
		str += \", flags: \" + portgroup.Flags;\n\
		str += \", min: \" + portgroup.Min;\n\
		str += \", max: \" + portgroup.Max;\n\
		str += \", filter: \" + portgroup.Filter;\n\
		str += \", pickprompt: \" + portgroup.PickPrompt;\n\
		str += \", optional: \" + portgroup.IsOptional();\n\
		str += \", branchgroup: \" + portgroup.SupportsBranchGroup();\n\
		Application.LogMessage( str ); \n\
		var ePorts = new Enumerator( portgroup.Ports );\n\
		for ( ; ! ePorts.atEnd(); ePorts.moveNext() )\n\
		{\n\
			var port = ePorts.item();\n\
			dump_port(port);\n\
		}\n\
	}\n\
}	\n\
function dump_port(port)\n\
{	\n\
	var str = \"\";\n\
	str += \"port name: \" + port.Name;\n\
	str += \", type: \" + port.Type;\n\
	str += \", porttype: \" + port.PortType;\n\
	str += \", connected: \" + port.IsConnected;\n\
	if ( port.IsConnected)\n\
		str += \", target: \" + port.Target2; \n\
	str += \", parent: \" + port.Parent;\n\
	str += \", index: \" + port.Index;\n\
	str += \", flags: \" + port.Flags;\n\
	if ( port.Type == \"InputPort\" )\n\
		str += \", optional: \" + port.Optional;\n\
	if ( port.type == \"OutputPort\" )\n\
		str += \", created: \" + port.Created;\n\
	str += \", branchgroup: \" + port.BranchGroup;\n\
	str += \", groupname: \" + port.GroupName;\n\
	str += \", groupindex: \" + port.GroupIndex;\n\
	str += \", groupinstance: \" + port.GroupInstance;\n\
	Application.LogMessage( str ); \n\
}\n\
// Expected result:\n\
//INFO : group name: Group_0, type: PortGroup, parent: cylinder.polymsh.shearop, index: 0, flags: 513, min: 1, max: 1, filter: DeformableComponent, pickprompt: Deformation Value, optional: false, branchgroup: true\n\
//INFO : port name: Port_0, type: InputPort, porttype: 0, connected: false, parent: cylinder.polymsh.shearop, index: 0, flags: 1026, optional: false, branchgroup: true, groupname: Group_0, groupindex: 0, groupinstance: -1\n\
//INFO : port name: Port_2, type: InputPort, porttype: 0, connected: false, parent: cylinder.polymsh.shearop, index: 1, flags: 1088, optional: false, branchgroup: true, groupname: Group_0, groupindex: 0, groupinstance: -1\n\
//INFO : port name: Port_3, type: InputPort, porttype: 0, connected: false, parent: cylinder.polymsh.shearop, index: 2, flags: 64, optional: false, branchgroup: false, groupname: Group_0, groupindex: 0, groupinstance: -1\n\
//INFO : port name: Port_4, type: InputPort, porttype: 0, connected: false, parent: cylinder.polymsh.shearop, index: 3, flags: 24, optional: true, branchgroup: false, groupname: Group_0, groupindex: 0, groupinstance: -1\n\
//INFO : port name: Port_5, type: InputPort, porttype: 0, connected: false, parent: cylinder.polymsh.shearop, index: 4, flags: 24, optional: true, branchgroup: false, groupname: Group_0, groupindex: 0, groupinstance: -1\n\
//INFO : port name: Port_1, type: OutputPort, porttype: 1, connected: false, parent: cylinder.polymsh.shearop, index: 5, flags: 525313, created: false, branchgroup: true, groupname: Group_0, groupindex: 0, groupinstance: -1\n\
//INFO : group name: Group_1, type: PortGroup, parent: cylinder.polymsh.shearop, index: 1, flags: 128, min: 0, max: 1, filter: , pickprompt: , optional: true, branchgroup: false\n\
//INFO : port name: Port_0, type: InputPort, porttype: 0, connected: false, parent: cylinder.polymsh.shearop, index: 0, flags: 24, optional: true, branchgroup: false, groupname: Group_1, groupindex: 1, groupinstance: -1</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Operator.GetNumInstancesInGroup.html\">Operator.GetNumInstancesInGroup</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";