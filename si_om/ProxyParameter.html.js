var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ProxyParameter</title>\n\
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
            <h1>ProxyParameter</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ProxyParameter</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_ProxyParameter\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1ProxyParameter.html\">ProxyParameter</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\"><a href=\"#!/url=./si_om/Parameter.html\">Parameter</a></p>\n\
<p class=\"level3\">ProxyParameter</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v3.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> A Proxy parameter acts as a clone of another parameter that is elsewhere in the scene. If you look in the Scene Explorer, \n\
you can identify the proxy parameters because they appear in italics.  You can create a proxy parameter by calling \n\
<a href=\"#!/url=./si_om/CustomProperty.AddProxyParameter.html\">CustomProperty.AddProxyParameter</a>.  The proxy parameter has the same range and UI range as the original \n\
parameter.  It is possible to specify a new UI range by calling <a href=\"#!/url=./si_cmds/EditParameterDefinition.html\">EditParameterDefinition</a> but the actual \n\
range must not be changed.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.AddCustomOp.html\">AddCustomOp</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.AddExpression.html\">AddExpression</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.AddFCurve.html\">AddFCurve</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.AddFCurve2.html\">AddFCurve2</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.AddScriptedOp.html\">AddScriptedOp</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.AddScriptedOpFromFile.html\">AddScriptedOpFromFile</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.AnimatedParameters.html\">AnimatedParameters</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Connect.html\">Connect</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.ConnectFromFile.html\">ConnectFromFile</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.ConnectFromFile2.html\">ConnectFromFile2</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.ConnectFromPreset.html\">ConnectFromPreset</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.ConnectFromPreset2.html\">ConnectFromPreset2</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.ConnectFromProgID.html\">ConnectFromProgID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.ConnectFromProgID2.html\">ConnectFromProgID2</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Disconnect.html\">Disconnect</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Enable.html\">Enable</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.GetInstanceValue.html\">GetInstanceValue</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.GetValue2.html\">GetValue2</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.IsAnimated.html\">IsAnimated</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.IsLocked.html\">IsLocked</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.IsSupportedInstanceValue.html\">IsSupportedInstanceValue</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.PutValue2.html\">PutValue2</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Default.html\">Default</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Description.html\">Description</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.HasInstanceValue.html\">HasInstanceValue</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Keyable.html\">Keyable</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.LockLevel.html\">LockLevel</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.LockType.html\">LockType</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Marked.html\">Marked</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ProxyParameter.MasterParameter.html\">MasterParameter</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Max.html\">Max</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Min.html\">Min</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
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
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' Proxy Parameters are a useful way to centralize parameters from\n\
\' different objects on the same property, or even to build a simplified\n\
\' version of a property page.\n\
\'\n\
\' This example demonstrates creation of a custom property set\n\
\' that only shows a few items of the Shader that it controls,\n\
\' but maintains a pleasing layout.\n\
\'\n\
g_Logic = _\n\
\"sub Enable_OnChanged()\" &amp; vbCrLf &amp; _\n\
\"   bEnable = PPG.Enable.Value\" &amp; vbCrLf &amp; _\n\
\"	\'To disable the color control we just disable the proxy\" &amp; vbCrLf &amp; _\n\
\"	\' parameter representing the \"\"red\"\" component\" &amp; vbCrLf &amp; _\n\
\"	PPG.Ambient.Enable bEnable \" &amp; vbCrLf &amp; _\n\
\"	PPG.Diffuse.Enable bEnable \" &amp; vbCrLf &amp; _\n\
\"end sub\" &amp; vbCrLf\n\
NewScene , false \n\
set oSphere = ActiveSceneRoot.AddGeometry( \"Sphere\", \"MeshSurface\" )\n\
oSphere.AddMaterial \"Phong\"  \n\
set oPhongShader = oSphere.Material.Shaders(0)\n\
\' This is a Boolean for enabling diffuse\n\
set oDiffuseEnable = oPhongShader.Parameters( \"diffuse_inuse\" )\n\
\' These are CompoundParameters, each with R,G,B sub-parameters\n\
set oAmbientParam = oPhongShader.Parameters( \"ambient\" )\n\
set oDiffuseParam = oPhongShader.Parameters( \"diffuse\" )\n\
set oCustomProperty = oSphere.AddProperty(\"CustomProperty\",false,\"Proxies\") \n\
\' We specify a name to avoid having a long one like \"sphere_Material_Phong_diffuse_inuse\"\n\
oCustomProperty.AddProxyParameter oDiffuseEnable, \"Enable\", \"Enable\" \n\
oCustomProperty.AddProxyParameter oDiffuseParam.Parameters(\"red\"), \"Diffuse\", \"Diffuse\" \n\
oCustomProperty.AddProxyParameter oDiffuseParam.Parameters(\"green\")\n\
oCustomProperty.AddProxyParameter oDiffuseParam.Parameters(\"blue\")\n\
oCustomProperty.AddProxyParameter oAmbientParam.Parameters(\"red\"), \"Ambient\", \"Ambient\" \n\
oCustomProperty.AddProxyParameter oAmbientParam.Parameters(\"green\")\n\
oCustomProperty.AddProxyParameter oAmbientParam.Parameters(\"blue\")\n\
\' If we inspect the object now we would see 6 separate sliders,\n\
\' each controlling a different component of the colors\n\
\' We can create a custom layout to clean up the display\n\
set oLayout = oCustomProperty.PPGLayout\n\
oLayout.AddGroup \"Phong Diffuse\" \n\
	oLayout.AddItem \"Enable\" \n\
	\' Just for fun, show the ambient before the diffuse, which\n\
	\' is the opposite of the normal Phong Property Page\n\
	oLayout.AddColor \"Ambient\", \"Ambient\", false \n\
	oLayout.AddColor \"Diffuse\", \"Diffuse\", false \n\
oLayout.EndGroup\n\
oLayout.Logic = g_Logic \n\
oLayout.Language = \"VBScript\"\n\
\' Show both dialogs.  You will see that both items\n\
\' are identical.\n\
InspectObj oCustomProperty, , , siLock \n\
InspectObj oPhongShader, , , siLock</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/AddProxyParam.html\">AddProxyParam</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";