var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>AddPortToICENode2</title>\n\
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
            <h1>AddPortToICENode2</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">AddPortToICENode2</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v11.0 (2013)</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Adds a new port at the specified location and returns an <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> of new port object(s). Most of the time the collection\n\
will contain only one port. However, when a port group instance is added then the collection may contain multiple ports.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = AddPortToICENode2( Port, [InsertLocation] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> of new port object(s). If you add input port(s), a collection of <a href=\"#!/url=./si_om/ICENodeInputPort.html\">ICENodeInputPort</a> is returned. \n\
If you add output port(s), a collection of <a href=\"#!/url=./si_om/ICENodeOutputPort.html\">ICENodeOutputPort</a> is returned.\n\
</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Port		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The port after or before which to add the new port. The port full name needs to be specified.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">InsertLocation		</td>\n\
		<td><a href=\"#!/url=./si_om/siNodePortDataInsertionLocation.html\">siNodePortDataInsertionLocation</a>		</td>\n\
		<td>\n\
The relative location where the port will be added.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
<a href=\"#!/url=./si_om/siNodePortDataInsertionLocation.html#siNodePortDataInsertionLocationBefore\">siNodePortDataInsertionLocationBefore</a>			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
# Basic examples to demonstrate how to use AddPortToICENode2.\n\
#\n\
from sipyutils import *\n\
si = si()\n\
si.NewScene(\"\", \"\")\n\
si.CreatePrim(\"Cone\", \"MeshSurface\", \"\", \"\")\n\
si.ApplyOp(\"ICETree\", \"cone\", \"siNode\", \"\", \"\", 0)\n\
si.AddICENode(\"$XSI_DSPRESETS\\\\ICENodes\\\\BlendNode.Preset\", \"cone.polymsh.ICETree\")\n\
# Add a new port group instance\n\
ports = si.AddPortToICENode2(\"cone.polymsh.ICETree.BlendNode.value2\", C.siNodePortDataInsertionLocationAfter )\n\
for p in ports:\n\
	logf( \'%s: %s\', si.ClassName( p ), p )\n\
# Output\n\
# INFO : ICENodeInputPort: cone.polymsh.ICETree.BlendNode.value3\n\
# INFO : ICENodeInputPort: cone.polymsh.ICETree.BlendNode.weight3\n\
# Add a new port \n\
si.AddICENode(\"$XSI_DSPRESETS\\\\ICENodes\\\\BuildArrayNode.Preset\", \"cone.polymsh.ICETree\")\n\
ports = si.AddPortToICENode2(\"cone.polymsh.ICETree.BuildArrayNode.value1\", C.siNodePortDataInsertionLocationBefore )\n\
for p in ports:\n\
	logf( \'%s: %s\', si.ClassName( p ), p )\n\
# Output	\n\
# INFO : ICENodeInputPort: cone.polymsh.ICETree.BuildArrayNode.value1</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/AddAttributeToSetDataICENode.html\">AddAttributeToSetDataICENode</a> <a href=\"#!/url=./si_cmds/AddICECompoundNode.html\">AddICECompoundNode</a> <a href=\"#!/url=./si_cmds/AddExposedParamToICECompoundNode.html\">AddExposedParamToICECompoundNode</a> <a href=\"#!/url=./si_cmds/AddICENode.html\">AddICENode</a> <a href=\"#!/url=./si_cmds/AddNodeToICECompoundNode.html\">AddNodeToICECompoundNode</a> <a href=\"#!/url=./si_cmds/CleanDisconnectedICENodes.html\">CleanDisconnectedICENodes</a> <a href=\"#!/url=./si_cmds/ConnectICENodes.html\">ConnectICENodes</a> <a href=\"#!/url=./si_cmds/CreateICECompoundNode.html\">CreateICECompoundNode</a> <a href=\"#!/url=./si_cmds/DisconnectICENodePort.html\">DisconnectICENodePort</a> <a href=\"#!/url=./si_cmds/EditExposedParamInICECompoundNode.html\">EditExposedParamInICECompoundNode</a> <a href=\"#!/url=./si_cmds/ExplodeICECompoundNode.html\">ExplodeICECompoundNode</a> <a href=\"#!/url=./si_cmds/MoveICECompoundPort.html\">MoveICECompoundPort</a> <a href=\"#!/url=./si_cmds/RemoveAttributeFromSetDataICENode.html\">RemoveAttributeFromSetDataICENode</a> <a href=\"#!/url=./si_cmds/RemoveExposedParamFromICECompoundNode.html\">RemoveExposedParamFromICECompoundNode</a> <a href=\"#!/url=./si_cmds/RemoveNodeFromICECompoundNode.html\">RemoveNodeFromICECompoundNode</a> <a href=\"#!/url=./si_cmds/RemovePortFromICENode.html\">RemovePortFromICENode</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";