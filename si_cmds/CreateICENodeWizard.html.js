var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>CreateICENodeWizard</title>\n\
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
            <h1>CreateICENodeWizard</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">CreateICENodeWizard</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v7.5</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Creates an instance of an ICENode wizard you can use to generate self-installing <a href=\"#!/url=./si_om/ICENode.html\">ICENode</a> plug-ins. \n\
The resulting wizard is a <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> nested under the SDK wizard model which itself resides \n\
under the scene root.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = CreateICENodeWizard( [DestinationDir], [ICENodeTypeName] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Newly created ICENode wizard as a <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> object.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">DestinationDir		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The destination folder for the plug-in to generate.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
If no destination folder is specified, the wizard property will be created in the user path.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ICENodeTypeName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		The name which uniquely identifies the type of the new custom ICENode object. This eventually becomes the \n\
		name of the custom ICENode. It can also be specified using \'nodewiz.ICENodeName = \"XYZNode\";\' instead, as \n\
		the example below demonstrates.\n\
		<br /><br />\n\
		Note: This is different from the ICENode instance name which is only specified at creation time. For example, \n\
		if you added two instances of the XYZNode type of ICENode to your ICE tree, one will appear as \"XYZNode\" in \n\
		the explorer, and the other will appear as \"XYZNode[1]\".\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
MyCustomICENode			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to create an ICENode wizard using \n\
	the CreateICENodeWizard command and then generate a very simple \n\
	custom ICENode using the new wizard.\n\
*/\n\
var nodewiz = CreateICENodeWizard();\n\
nodewiz.ICENodeType = \"XYZNode\";\n\
nodewiz.CodingLanguage = \"Cpp\";\n\
nodewiz.ICENodeCategory = \"XYZ ICENode\"\n\
nodewiz.InitCB = true;\n\
// Generate one input port\n\
nodewiz.InPortName = \"in\"\n\
nodewiz.InPortDataType = \"siICENodeDataFloat\";\n\
nodewiz.InPortStructType = \"siICENodeStructureSingle\";\n\
nodewiz.InPortContextType = \"siICENodeContextAny\";\n\
nodewiz.InPortGroupID = 101;\n\
AddInputPortToICENodeWizard(nodewiz);\n\
// Generate one output port\n\
nodewiz.OutPortName = \"out\"\n\
nodewiz.OutPortDataType = \"siICENodeDataFloat\";\n\
nodewiz.OutPortStructType = \"siICENodeStructureSingle\";\n\
nodewiz.OutPortContextType = \"siICENodeContextAny\";\n\
AddOutputPortToICENodeWizard(nodewiz);\n\
// Generates the XYZNode implementation and plug-in\n\
GenerateICENodePlugin(nodewiz);</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/GenerateICENodePlugin.html\">GenerateICENodePlugin</a> <a href=\"#!/url=./si_cmds/AddInputPortToICENodeWizard.html\">AddInputPortToICENodeWizard</a> <a href=\"#!/url=./si_cmds/AddOutputPortToICENodeWizard.html\">AddOutputPortToICENodeWizard</a> <a href=\"#!/url=./files/cus_icenodes_wizard.htm\">ICENode Wizard help</a> <a href=\"#!/url=./si_cmds/CreateCommandWizard.html\">CreateCommandWizard</a> <a href=\"#!/url=./si_cmds/CreatePropertyWizard.html\">CreatePropertyWizard</a> <a href=\"#!/url=./si_cmds/CreateEventWizard.html\">CreateEventWizard</a> <a href=\"#!/url=./si_cmds/CreateFilterWizard.html\">CreateFilterWizard</a> <a href=\"#!/url=./si_cmds/CreateOperatorWizard.html\">CreateOperatorWizard</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";