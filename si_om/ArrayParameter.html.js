var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ArrayParameter</title>\n\
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
            <h1>ArrayParameter</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ArrayParameter</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_ArrayParameter\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1ArrayParameter.html\">ArrayParameter</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\"><a href=\"#!/url=./si_om/Parameter.html\">Parameter</a></p>\n\
<p class=\"level3\">ArrayParameter</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> An <a href=\"#!/url=./files/Array.htm\">Array</a> parameter is a special kind of parameter that \n\
can contain a variable number of entries, all of the same type. The \n\
array can have entries added (<a href=\"#!/url=./si_om/ArrayParameter.Add.html\">ArrayParameter.Add</a>),\n\
removed (<a href=\"#!/url=./si_om/ArrayParameter.Remove.html\">ArrayParameter.Remove</a>) or moved around \n\
(<a href=\"#!/url=./si_om/ArrayParameter.Move.html\">ArrayParameter.Move</a>) within the array.<br /><br />\n\
Note: The ArrayParameter is zero-based.\n\
<br /><br />\n\
Warning: The following properties are unsupported for the ArrayParameter \n\
object: <br /><br /><a href=\"#!/url=./si_om/Parameter.Source.html\">Parameter.Source</a><br /><br /><a href=\"#!/url=./si_om/Parameter.Sources.html\">Parameter.Sources</a><br /><br /><a href=\"#!/url=./si_om/Parameter.Value.html\">Parameter.Value</a><br /><br /><a href=\"#!/url=./si_om/Parameter.OriginalValue.html\">Parameter.OriginalValue</a></p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ArrayParameter.Add.html\">Add</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.AddCustomOp.html\">AddCustomOp</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.AddExpression.html\">AddExpression</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.AddFCurve.html\">AddFCurve</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.AddFCurve2.html\">AddFCurve2</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.AddScriptedOp.html\">AddScriptedOp</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.AddScriptedOpFromFile.html\">AddScriptedOpFromFile</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ArrayParameter.AddValue.html\">AddValue</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.AnimatedParameters.html\">AnimatedParameters</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Connect.html\">Connect</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.ConnectFromFile.html\">ConnectFromFile</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.ConnectFromFile2.html\">ConnectFromFile2</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.ConnectFromPreset.html\">ConnectFromPreset</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.ConnectFromPreset2.html\">ConnectFromPreset2</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.ConnectFromProgID.html\">ConnectFromProgID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.ConnectFromProgID2.html\">ConnectFromProgID2</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Disconnect.html\">Disconnect</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Enable.html\">Enable</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.GetInstanceValue.html\">GetInstanceValue</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.GetValue2.html\">GetValue2</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.IsAnimated.html\">IsAnimated</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.IsLocked.html\">IsLocked</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.IsSupportedInstanceValue.html\">IsSupportedInstanceValue</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ArrayParameter.Move.html\">Move</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.PutValue2.html\">PutValue2</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ArrayParameter.Remove.html\">Remove</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.SetCapabilityFlag.html\">SetCapabilityFlag</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.SetInstanceValue.html\">SetInstanceValue</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.SetLock.html\">SetLock</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Show.html\">Show</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.UnSetLock.html\">UnSetLock</a>		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Animatable.html\">Animatable</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Capabilities.html\">Capabilities</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ArrayParameter.Count.html\">Count</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Default.html\">Default</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Description.html\">Description</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.HasInstanceValue.html\">HasInstanceValue</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Keyable.html\">Keyable</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.LockLevel.html\">LockLevel</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.LockType.html\">LockType</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Marked.html\">Marked</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Max.html\">Max</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Min.html\">Min</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Model.html\">Model</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.OriginalValue.html\">OriginalValue</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.OverridenObject.html\">OverridenObject</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.OverridingObject.html\">OverridingObject</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Parameters.html\">Parameters</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Parent3DObject.html\">Parent3DObject</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.ReadOnly.html\">ReadOnly</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.ScriptName.html\">ScriptName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Source.html\">Source</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Sources.html\">Sources</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.SuggestedMax.html\">SuggestedMax</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.SuggestedMin.html\">SuggestedMin</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Tags.html\">Tags</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Value.html\">Value</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.ValueType.html\">ValueType</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
<td class=\"example\"><pre class=\"jscript\">/*\n\
This example creates a cube, applies the XSIColorMixer shader to\n\
the material\'s surface port and adds a new layer.\n\
*/\n\
NewScene( null, false );\n\
oCube = ActiveSceneRoot.AddGeometry( \"Cube\", \"MeshSurface\" );\n\
oMat = oCube.AddMaterial( \"Phong\" );\n\
oMixer = oMat.surface.ConnectFromProgid( \"Softimage.XSIColorMixer.1\" );\n\
oLayers = oMixer.layers;\n\
LogMessage( \"Before adding: \" + oLayers.Count );\n\
oNewLayer = oLayers.Add( );\n\
LogMessage( \"After adding: \" + oLayers.Count );\n\
oLayers.Remove( 0 );\n\
LogMessage( \"Before removing: \" + oLayers.Count );</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> <a href=\"#!/url=./si_om/ParameterCollection.html\">ParameterCollection</a> <a href=\"#!/url=./si_om/ProjectItem.Parameters.html\">ProjectItem.Parameters</a> <a href=\"#!/url=./si_om/Property.html\">Property</a> <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> <a href=\"#!/url=./si_om/CustomProperty.AddParameter.html\">CustomProperty.AddParameter</a> <a href=\"#!/url=./si_om/CustomProperty.AddParameter2.html\">CustomProperty.AddParameter2</a> <a href=\"#!/url=./si_om/CustomProperty.AddParameter3.html\">CustomProperty.AddParameter3</a> <a href=\"#!/url=./si_om/ProjectItem.html\">ProjectItem</a> <a href=\"#!/url=./si_om/Shader.html\">Shader</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";