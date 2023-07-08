var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>CustomOperator</title>\n\
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
            <h1>CustomOperator</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">CustomOperator</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_CustomOperator\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1CustomOperator.html\">CustomOperator</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\"><a href=\"#!/url=./si_om/ProjectItem.html\">ProjectItem</a></p>\n\
<p class=\"level3\"><a href=\"#!/url=./si_om/Operator.html\">Operator</a></p>\n\
<p class=\"level4\">CustomOperator</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> The CustomOperator object represents a custom operator defined by the user. This operator\n\
may have been created in any of the following ways:<br /><br />\n\
- in the Scripted Operator Editor<br /><br />\n\
- as a Self-Installed Custom Operator<br /><br />\n\
- on the fly by running a script (a \"runtime\" custom operator)<br /><br />\n\
Self-Installed Custom Operators are defined within a <a href=\"#!/url=./si_om/Plugin.html\">Plugin</a> and are the \n\
recommended way to create Custom Operators.  Runtime operators are still supported but \n\
they have a different callback convention and embed the entire implementation of the operator \n\
into the scene file. See <a href=\"#!/url=./si_cmds/AddScriptedOp.html\">AddScriptedOp</a> and \n\
<a href=\"#!/url=./si_om/XSIFactory.CreateScriptedOp.html\">XSIFactory.CreateScriptedOp</a> for more details about runtime operators.\n\
<br /><br />\n\
Prior to v5.1, Custom Operators were often created based on a Preset and SPDL file. This \n\
technique is still supported as a legacy feature but Self-Installed Custom Operators are now\n\
the recommended alternative.\n\
<br /><br />\n\
The easiest way to build a Self-Installed Custom Operator from scripting is by using the \n\
<a href=\"#!/url=./si_cmds/AddCustomOp.html\">AddCustomOp</a> command, (or similar <a href=\"#!/url=./si_om/Parameter.AddCustomOp.html\">Parameter.AddCustomOp</a> \n\
and <a href=\"#!/url=./si_om/ProjectItem.AddCustomOp.html\">ProjectItem.AddCustomOp</a> methods). \n\
<br /><br />\n\
It is also possible to build a custom operator using the methods of this object. For most \n\
operators there is only a single output object, (represented by a single \n\
<a href=\"#!/url=./si_om/OutputPort.html\">OutputPort</a>) and there may be inputs (represented by\n\
<a href=\"#!/url=./si_om/InputPort.html\">InputPort</a>s).  If the operator is a deform-style operator it must have both \n\
an output and an input to the same object.  The output ports should be added before the input \n\
ports (or by using <a href=\"#!/url=./si_om/CustomOperator.AddIOPort.html\">CustomOperator.AddIOPort</a>). Most operators only need a \n\
single <a href=\"#!/url=./si_om/PortGroup.html\">PortGroup</a>, which is created automatically. A typical operator can be \n\
defined entirely with these methods:<br /><br />\n\
- <a href=\"#!/url=./si_om/XSIFactory.CreateObject.html\">XSIFactory.CreateObject</a><br /><br />\n\
- <a href=\"#!/url=./si_om/CustomOperator.AddInputPort.html\">CustomOperator.AddInputPort</a><br /><br />\n\
- <a href=\"#!/url=./si_om/CustomOperator.AddOutputPort.html\">CustomOperator.AddOutputPort</a><br /><br />\n\
- <a href=\"#!/url=./si_om/XSIFactory.CreateParamDef.html\">XSIFactory.CreateParamDef</a><br /><br />\n\
- <a href=\"#!/url=./si_om/CustomOperator.AddParameter.html\">CustomOperator.AddParameter</a><br /><br />\n\
- <a href=\"#!/url=./si_om/Operator.Connect.html\">Operator.Connect</a><br /><br />\n\
More advanced operators, in particular ones that dynamically connect to objects after the operator \n\
has been created, also use the concept of <a href=\"#!/url=./si_om/PortGroup.html\">PortGroup</a> to organize the ports into \n\
groups as they are defined. These operators rely on <a href=\"#!/url=./si_om/CustomOperator.AddPortGroup.html\">CustomOperator.AddPortGroup</a>, \n\
<a href=\"#!/url=./si_om/Operator.ConnectToGroup.html\">Operator.ConnectToGroup</a>, and <a href=\"#!/url=./si_om/CustomOperator.AddInputPortByClassID.html\">CustomOperator.AddInputPortByClassID</a>.\n\
<br /><br />\n\
Certain objects are explicitly blocked from being connected to custom operators, these include:\n\
<a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> and <a href=\"#!/url=./si_om/Kinematics.html\">Kinematics</a>. Instead of connecting to these\n\
objects the operator should connect to the specific data underneath those objects, for example\n\
a <a href=\"#!/url=./si_om/Primitive.html\">Primitive</a>, <a href=\"#!/url=./si_om/Property.html\">Property</a> or <a href=\"#!/url=./si_om/KinematicState.html\">KinematicState</a>.\n\
<br /><br />\n\
The actual algorithm of a Self-Installed Custom Operator is implemented in the \n\
<a href=\"#!/url=./si_cmds/cb_Operator_Update.html\">Update</a> callback. Unlike runtime operators it takes \n\
a single argument which is an <a href=\"#!/url=./si_om/OperatorContext.html\">OperatorContext</a> object. Other callbacks include \n\
the <a href=\"#!/url=./si_cmds/cb_Property_Define.html\">Define</a>, \n\
<a href=\"#!/url=./si_cmds/cb_Property_DefineLayout.html\">DefineLayout</a>, \n\
<a href=\"#!/url=./si_cmds/cb_Operator_Init.html\">Init</a>, \n\
<a href=\"#!/url=./si_cmds/cb_Plugin_Term.html\">Term</a> and the \n\
PPG Logic callbacks (<a href=\"#!/url=./si_cmds/cb_Property_PPGEvent.html\">PPGEvent</a> for C# and\n\
<a href=\"#!/url=./si_cmds/cb_Property_OnClicked.html\">OnClicked</a>, \n\
<a href=\"#!/url=./si_cmds/cb_Property_OnInit.html\">OnInit</a>, and \n\
<a href=\"#!/url=./si_cmds/cb_Property_OnTab.html\">OnTab</a>). <br /><br />\n\
For more information, see \n\
<a href=\"#!/url=./files/cus_ops.htm\">the Custom Operators topic</a>.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddCustomOp.html\">AddCustomOp</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddICEAttribute.html\">AddICEAttribute</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/CustomOperator.AddIOPort.html\">AddIOPort</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/CustomOperator.AddIOPortByClassID.html\">AddIOPortByClassID</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/CustomOperator.AddInputPort.html\">AddInputPort</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/CustomOperator.AddInputPortByClassID.html\">AddInputPortByClassID</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/CustomOperator.AddOutputPort.html\">AddOutputPort</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/CustomOperator.AddOutputPortByClassID.html\">AddOutputPortByClassID</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/CustomOperator.AddParameter.html\">AddParameter</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/CustomOperator.AddPortGroup.html\">AddPortGroup</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddScriptedOp.html\">AddScriptedOp</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddScriptedOpFromFile.html\">AddScriptedOpFromFile</a>		</td>	</tr>\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.GetICEAttributeFromName.html\">GetICEAttributeFromName</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Operator.GetInputValue.html\">GetInputValue</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Operator.GetNumInstancesInGroup.html\">GetNumInstancesInGroup</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Operator.GetNumPortGroups.html\">GetNumPortGroups</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Operator.GetNumPortsInGroup.html\">GetNumPortsInGroup</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Operator.GetPort2.html\">GetPort2</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Operator.GetPort3.html\">GetPort3</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Operator.GetPortAt.html\">GetPortAt</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/Operator.PortAt.html\">PortAt</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.RemoveICEAttribute.html\">RemoveICEAttribute</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/CustomOperator.RemoveParameter.html\">RemoveParameter</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetAsSelected.html\">SetAsSelected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetCapabilityFlag.html\">SetCapabilityFlag</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetLock.html\">SetLock</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Operator.SupportsBranchGroup.html\">SupportsBranchGroup</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.TaggedParameters.html\">TaggedParameters</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.UnSetLock.html\">UnSetLock</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/CustomOperator.Validate.html\">Validate</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/CustomOperator.AlwaysEvaluate.html\">AlwaysEvaluate</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.BranchFlag.html\">BranchFlag</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Capabilities.html\">Capabilities</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/CustomOperator.Code.html\">Code</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/CustomOperator.Debug.html\">Debug</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.EvaluationID.html\">EvaluationID</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Families.html\">Families</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/CustomOperator.FileName.html\">FileName</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.HierarchicalEvaluationID.html\">HierarchicalEvaluationID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.ICEAttributes.html\">ICEAttributes</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Operator.InputPorts.html\">InputPorts</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Operator.IsConnected.html\">IsConnected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/CustomOperator.Language.html\">Language</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockLevel.html\">LockLevel</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockMasters.html\">LockMasters</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockType.html\">LockType</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Model.html\">Model</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Operator.Mute.html\">Mute</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.ObjectID.html\">ObjectID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Operator.OutputPorts.html\">OutputPorts</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Owners.html\">Owners</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.PPGLayout.html\">PPGLayout</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Parameters.html\">Parameters</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Parent3DObject.html\">Parent3DObject</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Operator.Port.html\">Port</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Operator.PortGroups.html\">PortGroups</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Selected.html\">Selected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
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
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Parameter.AddCustomOp.html\">Parameter.AddCustomOp</a> <a href=\"#!/url=./si_om/ProjectItem.AddCustomOp.html\">ProjectItem.AddCustomOp</a> <a href=\"#!/url=./si_om/XSIFactory.CreateObject.html\">XSIFactory.CreateObject</a> <a href=\"#!/url=./si_om/XSIFactory.CreateParamDef.html\">XSIFactory.CreateParamDef</a> <a href=\"#!/url=./si_om/OperatorContext.html\">OperatorContext</a> <a href=\"#!/url=./si_om/Operator.html\">Operator</a> <a href=\"#!/url=./si_cmds/AddCustomOp.html\">AddCustomOp</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";