var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ActionDelta.AddFCurveItem</title>\n\
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
            <h1>ActionDelta.AddFCurveItem</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/ActionDelta.html\">ActionDelta</a>.AddFCurveItem</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Adds a new <a href=\"#!/url=./si_om/ActionDeltaItem.html\">ActionDeltaItem</a> of type siModificationDeltaFCurves to \n\
an ActionDelta created with the <a href=\"#!/url=./si_om/Delta.AddAction.html\">Delta.AddAction</a> method.<br /><br />\n\
The ActionDelta should be of type siModificationDeltaFCurves to use this method\n\
(see <a href=\"#!/url=./si_om/siModificationDeltaType.html\">siModificationDeltaType</a> for a list of ActionDelta types).\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>ActionDeltaItem ActionDelta.AddFCurveItem( Object in_vTarget, Object in_KeyValueArray, Object in_vInterpolation, Object in_vType, Object in_vExtrapolation );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = ActionDelta.AddFCurveItem( Target, [KeyValueArray], [Interpolation], [Type], [Extrapolation] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/ActionDeltaItem.html\">ActionDeltaItem</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Target		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Target path for source item 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">KeyValueArray		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of key data		</td>\n\
		<td>\n\
\n\
		The array may be a 1- or 2-dimensional array. For 2-dimensional arrays\n\
		the first dimension must define the key values. These contain 6 values \n\
		per key for fcurves of interpolation type siCubicInterpolation (see \n\
		<a href=\"#!/url=./si_om/siFCurveInterpolation.html\">siFCurveInterpolation</a>) and 2 values for keys for the \n\
		other fcurve interpolation types. The first value is the key time (in \n\
		frames) and the second in the key value (in value units). For Cubic (or \n\
		bezier) fcurves the remaining 4 values are the tangency values for: \n\
		lefttanx (in frames), lefttany (in value units), righttanx (in frames), \n\
		and righttany (in value units).\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Interpolation		</td>\n\
		<td><a href=\"#!/url=./si_om/siFCurveInterpolation.html\">siFCurveInterpolation</a>		</td>\n\
		<td>\n\
 The interpolation of the FCurve 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siCubicInterpolation			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Type		</td>\n\
		<td><a href=\"#!/url=./si_om/siFCurveType.html\">siFCurveType</a>		</td>\n\
		<td>\n\
 The type of the FCurve.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siStandardFCurve			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Extrapolation		</td>\n\
		<td><a href=\"#!/url=./si_om/siFCurveExtrapolation.html\">siFCurveExtrapolation</a>		</td>\n\
		<td>\n\
 The extrapolation of the FCurve 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siConstantExtrapolation			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to add an ActionDeltaItem of type \n\
	siModificationDeltaFCurves to a ActionDelta.\n\
*/\n\
NewScene (null, false);\n\
// Create a reference model from a cube\n\
var oRoot = Application.ActiveProject.ActiveScene.Root;\n\
var oCube = oRoot.AddGeometry(\"Cube\", \"MeshSurface\");\n\
var emdlFileRefModel = XSIUtils.BuildPath(Application.InstallationPath(siProjectPath), \"Models\", \"MyModel.emdl\"); \n\
CreateModelAndConvertToRef(oCube, emdlFileRefModel);\n\
// Add the Delta object\n\
var oDelta = AddDelta(oCube.Model);\n\
// Add an action of type siModificationDeltaFCurves\n\
var oDeltaAction = oDelta.AddAction(siModificationDeltaFCurve);\n\
// Set the array\n\
var aKeyData = Array\n\
(\n\
1.00, 5.00, 0, 0, 0, 0,\n\
100.00, 8.00, 0, 0, 0, 0\n\
);\n\
// Add the fcurve item\n\
var oActionDeltaItem = oDeltaAction.AddFCurveItem(oCube + \".kine.global.posx\", aKeyData);\n\
// Apply modification\n\
oDelta.Apply();</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/ActionDelta.AddConstraintItem.html\">ActionDelta.AddConstraintItem</a> <a href=\"#!/url=./si_om/ActionDelta.AddStaticValueItem.html\">ActionDelta.AddStaticValueItem</a> <a href=\"#!/url=./si_om/ActionDelta.AddExpressionItem.html\">ActionDelta.AddExpressionItem</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";