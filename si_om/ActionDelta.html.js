var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ActionDelta</title>\n\
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
            <h1>ActionDelta</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ActionDelta</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_ActionDelta\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1ActionDelta.html\">ActionDelta</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\">ActionDelta</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v6.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> The ActionDelta object tracks changes made on a parameter that is part of a reference model. Every \n\
ActionDelta contains one or more <a href=\"#!/url=./si_om/ActionDeltaItem.html\">ActionDeltaItem</a>s, each of which represents a single \n\
change, or modification, to a referenced parameter. Each ActionDelta object has a specific type \n\
(see <a href=\"#!/url=./si_om/siModificationDeltaType.html\">siModificationDeltaType</a>) and each ActionDeltaItem it contains is of the same type.\n\
<br /><br />\n\
ActionDeltas are stored in the <a href=\"#!/url=./si_om/Delta.html\">Delta</a> (<a href=\"#!/url=./si_om/ActionDeltaCollection.html\">ActionDeltaCollection</a>)\n\
and are accessible via the <a href=\"#!/url=./si_om/Delta.ActionDeltas.html\">Delta.ActionDeltas</a> property. To add a new ActionDelta\n\
to an existing Delta object, use the <a href=\"#!/url=./si_om/Delta.AddAction.html\">Delta.AddAction</a> method.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ActionDelta.AddConstraintItem.html\">AddConstraintItem</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ActionDelta.AddExpressionItem.html\">AddExpressionItem</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ActionDelta.AddFCurveItem.html\">AddFCurveItem</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ActionDelta.AddStaticValueItem.html\">AddStaticValueItem</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ActionDelta.RemoveAllItems.html\">RemoveAllItems</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ActionDelta.RemoveItem.html\">RemoveItem</a>		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Properties</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ActionDelta.Items.html\">Items</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
	This example demonstrates how to add an ActionDeltaItem of type siModificationDeltaConstraint to a ActionDelta.\n\
*/\n\
NewScene (null, false);\n\
// Create a reference model from a cube\n\
var oRoot = Application.ActiveProject.ActiveScene.Root;\n\
var oCube = oRoot.AddGeometry(\"Cube\",\"MeshSurface\");\n\
var emdlFileRefModel = XSIUtils.BuildPath(Application.InstallationPath(siProjectPath), \"Models\", \"MyModel.emdl\"); \n\
CreateModelAndConvertToRef(oCube, emdlFileRefModel );\n\
// Create a cone\n\
var oCone = oRoot.AddGeometry(\"Cone\",\"MeshSurface\");\n\
Translate(oCone, 3.20, 0.00, 1.65, siRelative, siView, siObj, siXYZ, null, null, null, null, null, null, null, null, null, 0, null);\n\
// Add the Delta object\n\
var oDelta = AddDelta(oCube.Model);\n\
// Add an action of type siModificationDeltaConstraint\n\
var oActionDelta = oDelta.AddAction(siModificationDeltaConstraint);\n\
// Add the fcurve item\n\
var oActionDeltaItems = oActionDelta.AddConstraintItem(\"Position\",oCube,oCone);\n\
for(var i=0; i&lt;oActionDeltaItems.Count; i++) {\n\
	Application.LogMessage ( \" The item \" +  oActionDeltaItems(i).Name + \" is active: \" + oActionDeltaItems(i).Mute );\n\
}\n\
// Apply modification\n\
oDelta.Apply();\n\
// Output of above script:\n\
//INFO :  The item cube.kine.global.sclx is active: true\n\
//INFO :  The item cube.kine.global.scly is active: true\n\
//INFO :  The item cube.kine.global.sclz is active: true\n\
//INFO :  The item cube.kine.global.rotx is active: true\n\
//INFO :  The item cube.kine.global.roty is active: true\n\
//INFO :  The item cube.kine.global.rotz is active: true\n\
//INFO :  The item cube.kine.global.posx is active: false\n\
//INFO :  The item cube.kine.global.posy is active: false\n\
//INFO :  The item cube.kine.global.posz is active: false</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to get the type of the item.\n\
*/\n\
NewScene (null, false);\n\
// Create a reference model from a cube\n\
var oRoot = Application.ActiveProject.ActiveScene.Root;\n\
var oCube = oRoot.AddGeometry(\"Cube\",\"MeshSurface\");\n\
var emdlFileRefModel = XSIUtils.BuildPath(Application.InstallationPath(siProjectPath), \"Models\", \"MyModel.emdl\"); \n\
CreateModelAndConvertToRef(oCube, emdlFileRefModel );\n\
// Add the Delta object\n\
var oDelta = AddDelta(oCube.Model);\n\
// Add an action of type siModificationDeltaStaticValue\n\
var oDeltaAction = oDelta.AddAction(siModificationDeltaStaticValue)\n\
// Add a static value item	\n\
oDeltaAction.AddStaticValueItem ( oCube + \".kine.global.posx\",  10 );\n\
// Get the first ActionDeltaItem in the first ActionDelta\n\
var oActionDelta = oDelta.ActionDeltas(0);\n\
// Print the type\n\
Application.LogMessage(oActionDelta.Type);\n\
// Output of above script:\n\
//INFO : siModificationDeltaStaticValue</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";