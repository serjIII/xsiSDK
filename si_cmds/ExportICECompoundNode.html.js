var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ExportICECompoundNode</title>\n\
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
            <h1>ExportICECompoundNode</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ExportICECompoundNode</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v7.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Exports the specified <a href=\"#!/url=./si_om/ICECompoundNode.html\">ICECompoundNode</a> to a file.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oString = ExportICECompoundNode( [Compound], FullPath, Directory, Name, Version, [Private], [ForceEmbedded] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./files/String.htm\">String</a></p></div>\n\
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
		<td><a href=\"#!/url=./files/listexpr.htm\">SelectionList</a> or <a href=\"#!/url=./si_om/Selection.html\">Selection</a>		</td>\n\
		<td>\n\
The compound you want to export			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
If no argument is specified, the current selection is used.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">FullPath		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
If this parameter is used, the compound will be exported to that particular path and filename		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Directory		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		If FullPath is not defined, the path is built using Directory, Name and Version. \n\
		The extension is provided automatically based on the Private flag.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		Name of the compound. If not defined, it uses the current class name of the compound. \n\
		If this value is different from the compound classname, it uses this value as the new \n\
		compound classname.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Version		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Version of the compound. If undefined, it uses the current version of the compound.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Private		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
\n\
		Export the compound in the XML format or as an encoded binary version. Private compounds \n\
		cannot be edited in the IceTree view and all internal compounds are saved as ForceEmbedded.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
false			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ForceEmbedded		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
\n\
		If true, all internal compounds are saved inside the file. If false, exported compounds are \n\
		saved as if they were factory nodes.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
false			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to use the ExportICECompoundNode command to\n\
	create both an XML and private (binary) version of a compound.\n\
*/\n\
NewScene(null , false);\n\
CreatePrim(\"Cone\", \"MeshSurface\");\n\
ApplyOp(\"ICETree\", \"cone\", siNode, siPersistentOperation, null, siConstructionModeModeling);\n\
// Create a new ICE Compound\n\
AddICECompoundNode(\"Set Data\", \"cone.polymsh.ICETree\");\n\
SetValue(\"cone.polymsh.ICETree.Set_Data.Reference\", \"Self.PointPosition\");\n\
AddPortToICENode(\"cone.polymsh.ICETree.Set_Data.Value\", siNodePortDataInsertionLocationAfter);\n\
SetValue(\"cone.polymsh.ICETree.Set_Data.Reference1\", \"Self.PointVelocity\");\n\
AddPortToICENode(\"cone.polymsh.ICETree.Set_Data.Value1\", siNodePortDataInsertionLocationAfter);\n\
SetValue(\"cone.polymsh.ICETree.Set_Data.Reference2\", \"Self.Color\");\n\
CreateICECompoundNode(\"cone.polymsh.ICETree.Set_Data\", \"PointValues\");\n\
// Export a public version of the compound (using XML format)\n\
var userCompounds = XSIUtils.BuildPath( Application.InstallationPath(siUserPath), \"Data\", \"Compounds\" );\n\
var exportPath = XSIUtils.BuildPath(userCompounds, \"PointValues.xsicompound\");\n\
XSIUtils.EnsureFolderExists(exportPath, true);\n\
var pubCmpd = ExportICECompoundNode(\"cone.polymsh.ICETree.PointValues\", exportPath);\n\
Application.LogMessage(pubCmpd);\n\
SetValue(\"cone.polymsh.ICETree.PointValues.Set_Data.Value_x\", 5);\n\
SetValue(\"cone.polymsh.ICETree.PointValues.Set_Data.Value_y\", 5);\n\
SetValue(\"cone.polymsh.ICETree.PointValues.Set_Data.Value_z\", 5);\n\
// Export a private version \n\
Application.LogMessage( ExportICECompoundNode(\"cone.polymsh.ICETree.PointValues\", \"\", \n\
	userCompounds, \"MyPrivatePointValue\", \"1.1\", true) );\n\
// INFO : &lt;user_path&gt;\\Data\\Compounds\\PointValues.xsicompound\n\
// INFO : &lt;user_path&gt;\\Data\\Compounds\\MyPrivatePointValue.1.1.xsicompoundp</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/CreateICECompoundNode.html\">CreateICECompoundNode</a> <a href=\"#!/url=./si_cmds/EditExposedParamInICECompoundNode.html\">EditExposedParamInICECompoundNode</a> <a href=\"#!/url=./si_cmds/EditICECompoundPPGLogic.html\">EditICECompoundPPGLogic</a> <a href=\"#!/url=./si_cmds/EditICECompoundProperties.html\">EditICECompoundProperties</a> <a href=\"#!/url=./si_cmds/GetICECompoundPortProperties.html\">GetICECompoundPortProperties</a> <a href=\"#!/url=./si_cmds/GetICECompoundProperties.html\">GetICECompoundProperties</a> <a href=\"#!/url=./si_om/ICECompoundNode.html\">ICECompoundNode</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";