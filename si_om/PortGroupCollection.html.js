var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PortGroupCollection</title>\n\
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
            <h1>PortGroupCollection</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">PortGroupCollection</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> A collection of <a href=\"#!/url=./si_om/PortGroup.html\">PortGroup</a> objects that represent the port \n\
groups defined by an <a href=\"#!/url=./si_om/Operator.html\">Operator</a> object. This collection is 0-based.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PortGroupCollection.Filter.html\">Filter</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PortGroupCollection.Find.html\">Find</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PortGroupCollection.GetAsText.html\">GetAsText</a>		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PortGroupCollection.Count.html\">Count</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PortGroupCollection.Item.html\">Item</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
<td class=\"example\"><pre class=\"jscript\">// This example illustrates how to browse the port groups\n\
// of an operator.\n\
newscene( null, false );\n\
CreatePrim(\"Cylinder\", \"MeshSurface\", null, null);\n\
var col = ApplyOp(\"Shear\", \"cylinder\", 3, siPersistentOperation);\n\
var op = col(0);\n\
dump_portgroups(op);\n\
function dump_portgroups(op)\n\
{\n\
	if ( ! op.belongsto(\"Operators\") )\n\
		return;\n\
	var ePortGroups = new Enumerator(op.portgroups);\n\
	for ( ; ! ePortGroups.atEnd(); ePortGroups.moveNext() )\n\
	{\n\
		var portgroup = ePortGroups.item();\n\
		var str = \"\"; \n\
		str += \"group name: \" + portgroup.name;\n\
		str += \", type: \" + portgroup.type;\n\
		str += \", parent: \" + portgroup.parent;\n\
		str += \", index: \" + portgroup.index;\n\
		str += \", flags: \" + portgroup.flags;\n\
		str += \", min: \" + portgroup.min;\n\
		str += \", max: \" + portgroup.max;\n\
		str += \", filter: \" + portgroup.filter;\n\
		str += \", pickprompt: \" + portgroup.pickprompt;\n\
		str += \", optional: \" + portgroup.isoptional();\n\
		str += \", branchgroup: \" + portgroup.SupportsBranchGroup();\n\
		logmessage( str ); \n\
		var ePorts = new Enumerator(portgroup.ports);\n\
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
	str += \"port name: \" + port.name;\n\
	str += \", type: \" + port.type;\n\
	str += \", porttype: \" + port.porttype;\n\
	str += \", connected: \" + port.isconnected;\n\
	if ( port.isconnected)\n\
		str += \", target: \" + port.target2; \n\
	str += \", parent: \" + port.parent;\n\
	str += \", index: \" + port.index;\n\
	str += \", flags: \" + port.flags;\n\
	if ( port.type == \"InputPort\" )\n\
		str += \", optional: \" + port.optional;\n\
	if ( port.type == \"OutputPort\" )\n\
		str += \", created: \" + port.created;\n\
	str += \", branchgroup: \" + port.BranchGroup;\n\
	str += \", groupname: \" + port.groupname;\n\
	str += \", groupindex: \" + port.groupindex;\n\
	str += \", groupinstance: \" + port.groupinstance;\n\
	logmessage( str ); \n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Operator.PortGroups.html\">Operator.PortGroups</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";