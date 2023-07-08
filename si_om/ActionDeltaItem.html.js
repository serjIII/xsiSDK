var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ActionDeltaItem</title>\n\
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
            <h1>ActionDeltaItem</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ActionDeltaItem</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_ActionDeltaItem\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1ActionDeltaItem.html\">ActionDeltaItem</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\">ActionDeltaItem</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v6.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> The ActionDeltaItem object tracks changes made on a parameter that is part of a reference model. \n\
Each ActionDeltaItem represents a single change, or modification, to a referenced parameter. So each \n\
time there a change to a static value, an fcurve, a constraint, an expression or a group relation, \n\
a new ActionDeltaItem is generated. \n\
<br /><br />\n\
You can also create new ActionDeltaItems from a data set using one of these methods: \n\
<a href=\"#!/url=./si_om/ActionDelta.AddConstraintItem.html\">ActionDelta.AddConstraintItem</a>, <a href=\"#!/url=./si_om/ActionDelta.AddExpressionItem.html\">ActionDelta.AddExpressionItem</a>, \n\
<a href=\"#!/url=./si_om/ActionDelta.AddFCurveItem.html\">ActionDelta.AddFCurveItem</a>, or <a href=\"#!/url=./si_om/ActionDelta.AddStaticValueItem.html\">ActionDelta.AddStaticValueItem</a>.\n\
<br /><br />\n\
ActionDeltaItem objects of the same type (see <a href=\"#!/url=./si_om/siModificationDeltaType.html\">siModificationDeltaType</a>) are stored \n\
in an <a href=\"#!/url=./si_om/ActionDelta.html\">ActionDelta</a> (<a href=\"#!/url=./si_om/ActionDeltaItemCollection.html\">ActionDeltaItemCollection</a>) which is accessible \n\
via the <a href=\"#!/url=./si_om/ActionDelta.Items.html\">ActionDelta.Items</a> property.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ActionDeltaItem.AuditInfo.html\">AuditInfo</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ActionDeltaItem.Mute.html\">Mute</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ActionDeltaItem.Value.html\">Value</a>		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to assign a new value to an ActionDeltaItem\n\
*/\n\
NewScene(null, false);\n\
// Create a reference model from a cube\n\
var oRoot = Application.ActiveProject.ActiveScene.Root;\n\
var oCube = oRoot.AddGeometry(\"Cube\", \"MeshSurface\");\n\
var emdlFileRefModel = XSIUtils.BuildPath(Application.InstallationPath(siProjectPath), \"Models\", \"MyModel.emdl\"); \n\
CreateModelAndConvertToRef(oCube, emdlFileRefModel );\n\
// Translate the cube that also generate a delta\n\
Translate(oCube, 2.0, 1.3, 0, siRelative, siView, siObj, siXYZ, null, null, null, null, null, null, null, null, null, 0, null);\n\
// Get the Delta object\n\
var oDelta = Dictionary.GetObject(\"Model.Delta\");\n\
// Get the ActionDeltaItem collection of the first ActionDelta\n\
var oActionDeltaItemsColl = oDelta.ActionDeltas(0).Items;\n\
for (var i=0; i&lt;oActionDeltaItemsColl.Count; i++) {\n\
	 // Print info about the current ActionDeltaItem\n\
	 Application.LogMessage(\"ActionSourceItem[\" + i + \"]\");\n\
	 Application.LogMessage(\"Name: \" + oActionDeltaItemsColl(i).Name)\n\
	 Application.LogMessage(\"Type: \" + oActionDeltaItemsColl(i).Type)\n\
	 //Print the current value\n\
	 Application.LogMessage(\"Initiale Value: \" +oActionDeltaItemsColl(i).Value)\n\
	 // Change the value of the item\n\
	 oActionDeltaItemsColl(i).Value = 1.2 * i\n\
	 // Print the new value\n\
	 Application.LogMessage(\"New Value: \"+ oActionDeltaItemsColl(i).Value)\n\
	 Application.LogMessage(\"\");\n\
}\n\
// Apply modification on the target reference asset container (the reference model)\n\
oDelta.Apply()\n\
// Output of above script:\n\
//INFO : ActionSourceItem[0]\n\
//INFO : Name: cube.kine.local.posx\n\
//INFO : Type: siModificationDeltaStaticValue\n\
//INFO : Initiale Value: 2\n\
//INFO : New Value: 0\n\
//INFO : \n\
//INFO : ActionSourceItem[1]\n\
//INFO : Name: cube.kine.local.posy\n\
//INFO : Type: siModificationDeltaStaticValue\n\
//INFO : Initiale Value: 1.3\n\
//INFO : New Value: 1.2\n\
//INFO : \n\
//INFO : ActionSourceItem[2]\n\
//INFO : Name: cube.kine.local.posz\n\
//INFO : Type: siModificationDeltaStaticValue\n\
//INFO : Initiale Value: 0\n\
//INFO : New Value: 2.4\n\
//INFO :</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to set the name of the item\n\
*/\n\
NewScene(null, false);\n\
// Create a reference model from a cube\n\
var oRoot = Application.ActiveProject.ActiveScene.Root;\n\
var oCube = oRoot.AddGeometry(\"Cube\", \"MeshSurface\");\n\
var emdlFileRefModel = XSIUtils.BuildPath(Application.InstallationPath(siProjectPath), \"Models\", \"MyModel.emdl\"); \n\
CreateModelAndConvertToRef(oCube, emdlFileRefModel );\n\
// Add the Delta object\n\
var oDelta = AddDelta(oCube.Model);\n\
// Add an action of type siModificationDeltaStaticValue\n\
var oDeltaAction = oDelta.AddAction(siModificationDeltaStaticValue)\n\
// Add the Static value item	\n\
var oActionDeltaItem = oDeltaAction.AddStaticValueItem(oCube + \".kine.global.posx\", 10);\n\
// Get the relative name for the sclx parameter\n\
var rp = GetRelativeNameForTarget(oCube.sclx);\n\
// Replace posx parameter by sclx\n\
oActionDeltaItem.name = rp;\n\
// Apply modification on the target reference asset container (the reference model)\n\
oDelta.Apply()\n\
// Reload the reference model to reset cube.kine.local.posx value\n\
UpdateReferencedModel(\"Model\");\n\
// Convenience function\n\
function GetRelativeNameForTarget(in_param) {\n\
	var mdlname = in_param.Model.FullName;\n\
	if (mdlname == \"Scene_Root\") {\n\
		return in_param.FullName;\n\
	} else {\n\
		var tmp = in_param.FullName;\n\
		var re = new RegExp(mdlname + \".\", \"i\");\n\
		return tmp.replace(re, \"\");\n\
	}\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/ActionDelta.html\">ActionDelta</a> <a href=\"#!/url=./si_om/ActionDelta.Items.html\">ActionDelta.Items</a> <a href=\"#!/url=./si_om/ActionDelta.AddFCurveItem.html\">ActionDelta.AddFCurveItem</a> <a href=\"#!/url=./si_om/ActionDelta.AddStaticValueItem.html\">ActionDelta.AddStaticValueItem</a> <a href=\"#!/url=./si_om/ActionDelta.AddExpressionItem.html\">ActionDelta.AddExpressionItem</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";