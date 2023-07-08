var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MoveICECompoundPortsAndLayoutGroups</title>\n\
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
            <h1>MoveICECompoundPortsAndLayoutGroups</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">MoveICECompoundPortsAndLayoutGroups</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v13.0 (2015)</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Moves the ICE compound ports and its PPG layout group hierarchy. You can pass a list containing the name of compound ports or the name of PPG layout groups.<br /><br />\n\
Note: It\'s able to move a port within a same group, or into another group. Also can move a group that will lead of moving a bunch of ports inside it.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>MoveICECompoundPortsAndLayoutGroups( Compound, Names, Marker, [MoveAction] );</pre>		</td>	</tr>\n\
</table>\n\
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
		<td class=\"name\">Compound		</td>\n\
		<td><a href=\"#!/url=./files/objectexpr.htm\">Object Name</a> (or a pointer to it).		</td>\n\
		<td>\n\
<a href=\"#!/url=./si_om/ICECompoundNode.html\">ICECompoundNode</a> which you want to edit.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Names		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/String.htm\">String</a>s		</td>\n\
		<td>\n\
 Names of the ports and PPG Layout groups to move.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Marker		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Specifies the marker item(port or layout group) as the moving destination.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">MoveAction		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 Specifies where item will be moved: first child, before/after the reference item, or last child.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
1			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>Move to become the first child.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>Move just before the marker item.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">2					</td>\n\
					<td>Move just after the marker item.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">3					</td>\n\
					<td>Move to become the last child.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
# This example shows how to move ICE compound ports and the layout groups.\n\
#\n\
from sipyutils import si		# win32com.client.Dispatch(\'XSI.Application\')\n\
si = si()\n\
si.NewScene( \"\", False )\n\
si.CreatePrim(\"Grid\", \"MeshSurface\", \"\", \"\")\n\
si.ICEFlow_CreateParticles(\"\", \"\", \"\")\n\
# Move the ports to \"General Values\" layout group that\'s nested underneath \"Initial Values\" layout group\n\
aProps = si.GetICECompoundPortProperties(\"pointcloud.pointcloud.ICETree.Emit_from_Geometry.Color\") \n\
si.EditExposedParamInICECompoundNode(\"pointcloud.pointcloud.ICETree.Emit_from_Geometry.Color\", aProps[0], aProps[1], aProps[2], aProps[3], aProps[4], aProps[5], aProps[6], \"Initial Values;General Values\" )\n\
aProps = si.GetICECompoundPortProperties(\"pointcloud.pointcloud.ICETree.Emit_from_Geometry.Shape\") \n\
si.EditExposedParamInICECompoundNode(\"pointcloud.pointcloud.ICETree.Emit_from_Geometry.Shape\", aProps[0], aProps[1], aProps[2], aProps[3], aProps[4], aProps[5], aProps[6], \"Initial Values;General Values\" )\n\
# Move the port to become the first child\n\
si.MoveICECompoundPortsAndLayoutGroups(\"pointcloud.pointcloud.ICETree.Emit_from_Geometry\", [\"State_ID\"], \"General Values\", 0)\n\
# Move the port to become the last child\n\
si.MoveICECompoundPortsAndLayoutGroups(\"pointcloud.pointcloud.ICETree.Emit_from_Geometry\", [\"Mass\"], \"General Values\", 3)\n\
# Move the port \"Mass\" before \"Color\"\n\
si.MoveICECompoundPortsAndLayoutGroups(\"pointcloud.pointcloud.ICETree.Emit_from_Geometry\", [\"Shape\", \"Mass\"], \"Color\", \"\")\n\
# Move the layout group \"General Values\" after \"Initial Values\"\n\
si.MoveICECompoundPortsAndLayoutGroups(\"pointcloud.pointcloud.ICETree.Emit_from_Geometry\", [\"General Values\"], \"Initial Values\", 2)</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/AddAttributeToSetDataICENode.html\">AddAttributeToSetDataICENode</a> <a href=\"#!/url=./si_cmds/AddICECompoundNode.html\">AddICECompoundNode</a> <a href=\"#!/url=./si_cmds/AddExposedParamToICECompoundNode.html\">AddExposedParamToICECompoundNode</a> <a href=\"#!/url=./si_cmds/AddICENode.html\">AddICENode</a> <a href=\"#!/url=./si_cmds/AddNodeToICECompoundNode.html\">AddNodeToICECompoundNode</a> <a href=\"#!/url=./si_cmds/AddPortToICENode2.html\">AddPortToICENode2</a> <a href=\"#!/url=./si_cmds/CleanDisconnectedICENodes.html\">CleanDisconnectedICENodes</a> <a href=\"#!/url=./si_cmds/ConnectICENodes.html\">ConnectICENodes</a> <a href=\"#!/url=./si_cmds/CreateICECompoundNode.html\">CreateICECompoundNode</a> <a href=\"#!/url=./si_cmds/DisconnectICENodePort.html\">DisconnectICENodePort</a> <a href=\"#!/url=./si_cmds/EditExposedParamInICECompoundNode.html\">EditExposedParamInICECompoundNode</a> <a href=\"#!/url=./si_cmds/EditICECompoundPPGLogic.html\">EditICECompoundPPGLogic</a> <a href=\"#!/url=./si_cmds/EditICECompoundProperties.html\">EditICECompoundProperties</a> <a href=\"#!/url=./si_cmds/ExplodeICECompoundNode.html\">ExplodeICECompoundNode</a> <a href=\"#!/url=./si_cmds/GetICECompoundPortProperties.html\">GetICECompoundPortProperties</a> <a href=\"#!/url=./si_cmds/GetICECompoundProperties.html\">GetICECompoundProperties</a> <a href=\"#!/url=./si_cmds/RemoveAttributeFromSetDataICENode.html\">RemoveAttributeFromSetDataICENode</a> <a href=\"#!/url=./si_cmds/RemoveExposedParamFromICECompoundNode.html\">RemoveExposedParamFromICECompoundNode</a> <a href=\"#!/url=./si_cmds/RemoveNodeFromICECompoundNode.html\">RemoveNodeFromICECompoundNode</a> <a href=\"#!/url=./si_cmds/RemovePortFromICENode.html\">RemovePortFromICENode</a> <a href=\"#!/url=./si_cmds/RenameICEPPGLayoutGroup.html\">RenameICEPPGLayoutGroup</a> <a href=\"#!/url=./si_cmds/CreateLayoutGroupInICECompoundNode.html\">CreateLayoutGroupInICECompoundNode</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";