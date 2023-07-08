var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ActionDeltaItem.Value</title>\n\
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
            <h1>ActionDeltaItem.Value</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/ActionDeltaItem.html\">ActionDeltaItem</a>.Value</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Sets or returns the value of an ActionDeltaItem. Depending on the type of the \n\
ActionDeltaItem (see <a href=\"#!/url=./si_om/siModificationDeltaType.html\">siModificationDeltaType</a>), this property \n\
sets or returns different types of values:\n\
<br /><br />\n\
- For siModificationDeltaFCurves, sets/returns <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a>s\n\
<br /><br />\n\
- For siModificationDeltaStaticValue, sets/returns <a href=\"#!/url=./files/Double.htm\">Double</a>s\n\
<br /><br />\n\
- Otherwise, sets/returns <a href=\"#!/url=./files/String.htm\">String</a></p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Object ActionDeltaItem.get_Value();\n\
// set accessor\n\
ActionDeltaItem.set_Value( FCurve out_pvValue );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to set a value for ActionDeltaItem of type \n\
	siModificationTypeConstraints\n\
*/\n\
NewScene(null, false);\n\
// Create a reference model from a cube\n\
var oRoot = Application.ActiveProject.ActiveScene.Root;\n\
var oCube = oRoot.AddGeometry(\"Cube\", \"MeshSurface\");\n\
var emdlFileRefModel = XSIUtils.BuildPath(Application.InstallationPath(siProjectPath), \"Models\", \"MyModel.emdl\"); \n\
CreateModelAndConvertToRef(oCube, emdlFileRefModel );\n\
// Create a cone\n\
var oCone = oRoot.AddGeometry(\"Cone\", \"MeshSurface\");\n\
// Create a sphere\n\
var oSphere = oRoot.AddGeometry(\"Sphere\", \"MeshSurface\");\n\
// Translate the \n\
Translate(oCone, 3.0, 3.0, 0.0, siRelative, siView, siObj, siXYZ, null, null, null, null, null, null, null, null, null, 0, null);\n\
Translate(oSphere, -2.0, -2.0, 0.0, siRelative, siView, siObj, siXYZ, null, null, null, null, null, null, null, null, null, 0, null);\n\
ApplyCns(\"Position\", oCube, oCone, null);\n\
// Get the Delta object\n\
var oDelta = Dictionary.GetObject(\"Model.Delta\");\n\
// Get the collection of the first ActionDelta\n\
var oActionDeltaItemsColl = oDelta.ActionDeltas(0).Items;\n\
for (var i=0; i&lt;oActionDeltaItemsColl.Count; i++) {	\n\
	 // Replace the cone as constraining object by the Sphere\n\
	 oActionDeltaItemsColl(i).Value = \"Scene_Root.\" + oSphere.Fullname;\n\
}\n\
// Apply modification on the target reference asset container (the reference model)\n\
oDelta.Apply()\n\
// Reload the reference model to reset cube.kine.local.posx value\n\
UpdateReferencedModel(\"Model\");</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how get and set value for ActionDeltaItem of type siModificationDeltaFCurves\n\
*/\n\
NewScene(null, false);\n\
// Create a reference model from a cube\n\
var oRoot = Application.ActiveProject.ActiveScene.Root;\n\
var oCube = oRoot.AddGeometry(\"Cube\", \"MeshSurface\");\n\
var emdlFileRefModel = XSIUtils.BuildPath(Application.InstallationPath(siProjectPath), \"Models\", \"MyModel.emdl\"); \n\
CreateModelAndConvertToRef(oCube, emdlFileRefModel );\n\
// Create an FCurve on the model local kine\n\
SaveKey(\"Model.kine.local.posx,Model.kine.local.posy,Model.kine.local.posz\", 1, null, null, null);\n\
// Get the Delta object\n\
var oDelta = Dictionary.GetObject(\"Model.Delta\");\n\
// Get the Fcurve in the ActionDeltaItem of type siModificationDeltaFCurves\n\
var oFCurve = oDelta.ActionDeltas(0).Items(0).value;\n\
// Define the number of keys\n\
var nbkeys = 100;\n\
// Start editing the fcurve\n\
oFCurve.BeginEdit();\n\
// Add keys to the fcurve\n\
for (var i=0; i&lt;nbkeys; i++) {\n\
	val = (Math.sin( 1/(i+1) ) * 10);\n\
	oFCurve.AddKey( i, val );\n\
}\n\
// End editing the fcurve and put the undo event onto \n\
// the undo/redo stack\n\
oFCurve.EndEdit();\n\
// Set the Fcurve in the ActionDeltaItem of type siModificationDeltaFCurves\n\
oDelta.ActionDeltas(0).Items(0).value = oFCurve;\n\
// Apply the change\n\
oDelta.Apply();</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";