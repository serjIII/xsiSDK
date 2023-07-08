var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>AddExposedParamToICECompoundNode</title>\n\
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
</style><link rel=\"stylesheet\" href=\"si_cmds/css/en.css\" type=\"text/css\" /><script>$(document).ready(function() { yepnope.injectJs(\"./si_cmds/lib/utils.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>AddExposedParamToICECompoundNode</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">AddExposedParamToICECompoundNode</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v7.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Adds an exposed <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> to the <a href=\"#!/url=./si_om/ICECompoundNode.html\">ICECompoundNode</a> and returns a new port as an \n\
<a href=\"#!/url=./si_om/ICENodeInputPort.html\">ICENodeInputPort</a> or <a href=\"#!/url=./si_om/ICENodeOutputPort.html\">ICENodeOutputPort</a> object.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = AddExposedParamToICECompoundNode( Parameter, Compound, [ExistingPort], [Name] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>New <a href=\"#!/url=./si_om/ICENodeInputPort.html\">ICENodeInputPort</a> or <a href=\"#!/url=./si_om/ICENodeOutputPort.html\">ICENodeOutputPort</a> object.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Parameter		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> to add.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Compound		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./si_om/ICECompoundNode.html\">ICECompoundNode</a> target for the exposed parameter.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ExistingPort		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Port that is already exposed.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Name for the parameter.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"\"			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
# Basic example to demonstrate how to use AddExposedParamToICECompoundNode.\n\
#\n\
from sipyutils import *\n\
si = si()\n\
si.NewScene(\"\", False)\n\
si.CreatePrim(\"Cone\", \"MeshSurface\", \"\", \"\")\n\
si.ApplyOp(\"ICETree\", \"cone\", \"siNode\", C.siPersistentOperation, \"\", 0)\n\
si.AddICENode(\"ScalarNode\", \"cone.polymsh.ICETree\")\n\
si.AddICECompoundNode(\"Pi\", \"cone.polymsh.ICETree\")\n\
si.CreateICECompoundNode(\"cone.polymsh.ICETree.Pi,cone.polymsh.ICETree.ScalarNode\", \"\")\n\
port = si.AddExposedParamToICECompoundNode(\"cone.polymsh.ICETree.CompoundNode.ScalarNode.result\", \"cone.polymsh.ICETree.CompoundNode\", \"\", \"Scalar Result\" )\n\
logf( \'%s: %s\', si.ClassName( port ), port )\n\
# INFO : ICENodeOutputPort: cone.polymsh.ICETree.CompoundNode.Scalar_Result\n\
port = si.AddExposedParamToICECompoundNode(\"cone.polymsh.ICETree.CompoundNode.Pi.Result\", \"cone.polymsh.ICETree.CompoundNode\", \"\", \"Pi Result\" )\n\
logf( \'%s: %s\', si.ClassName( port ), port )\n\
# INFO : ICENodeOutputPort: cone.polymsh.ICETree.CompoundNode.Pi_Result\n\
port = si.AddExposedParamToICECompoundNode(\"cone.polymsh.ICETree.CompoundNode.Pi.ScalarNode.value\", \"cone.polymsh.ICETree.CompoundNode.Pi\", \"\", \"Pi Scalar\" )\n\
logf( \'%s: %s\', si.ClassName( port ), port )\n\
# INFO : ICENodeInputPort: cone.polymsh.ICETree.CompoundNode.Pi.Pi_Scalar</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/AddAttributeToSetDataICENode.html\">AddAttributeToSetDataICENode</a> <a href=\"#!/url=./si_cmds/AddICECompoundNode.html\">AddICECompoundNode</a> <a href=\"#!/url=./si_cmds/AddICENode.html\">AddICENode</a> <a href=\"#!/url=./si_cmds/AddNodeToICECompoundNode.html\">AddNodeToICECompoundNode</a> <a href=\"#!/url=./si_cmds/CleanDisconnectedICENodes.html\">CleanDisconnectedICENodes</a> <a href=\"#!/url=./si_cmds/ConnectICENodes.html\">ConnectICENodes</a> <a href=\"#!/url=./si_cmds/CreateICECompoundNode.html\">CreateICECompoundNode</a> <a href=\"#!/url=./si_cmds/DisconnectICENodePort.html\">DisconnectICENodePort</a> <a href=\"#!/url=./si_cmds/EditExposedParamInICECompoundNode.html\">EditExposedParamInICECompoundNode</a> <a href=\"#!/url=./si_cmds/EditICECompoundPPGLogic.html\">EditICECompoundPPGLogic</a> <a href=\"#!/url=./si_cmds/EditICECompoundProperties.html\">EditICECompoundProperties</a> <a href=\"#!/url=./si_cmds/ExplodeICECompoundNode.html\">ExplodeICECompoundNode</a> <a href=\"#!/url=./si_cmds/GetICECompoundPortProperties.html\">GetICECompoundPortProperties</a> <a href=\"#!/url=./si_cmds/GetICECompoundProperties.html\">GetICECompoundProperties</a> <a href=\"#!/url=./si_cmds/MoveICECompoundPort.html\">MoveICECompoundPort</a> <a href=\"#!/url=./si_cmds/RemoveAttributeFromSetDataICENode.html\">RemoveAttributeFromSetDataICENode</a> <a href=\"#!/url=./si_cmds/RemoveExposedParamFromICECompoundNode.html\">RemoveExposedParamFromICECompoundNode</a> <a href=\"#!/url=./si_cmds/RemoveNodeFromICECompoundNode.html\">RemoveNodeFromICECompoundNode</a> <a href=\"#!/url=./si_cmds/RenameICEPPGLayoutGroup.html\">RenameICEPPGLayoutGroup</a> <a href=\"#!/url=./si_cmds/MoveICECompoundPortsAndLayoutGroups.html\">MoveICECompoundPortsAndLayoutGroups</a> <a href=\"#!/url=./si_om/ICECompoundNode.ExposedPorts.html\">ICECompoundNode.ExposedPorts</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";