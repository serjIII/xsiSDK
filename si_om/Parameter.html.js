var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Parameter</title>\n\
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
            <h1>Parameter</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Parameter</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_Parameter\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1Parameter.html\">Parameter</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\">Parameter</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.5</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Represents a parameter value, which defines an attribute of an object; for example, \n\
the angle parameter of the twist operator or the color of a light. Parameters (sometimes \n\
called properties), are the \'atomic\' elements of a parameter set (the posx in \n\
Cone.kine.ltransfo.pos.posx) whose values determine the behavior of something. <br /><br />\n\
Note: A parameter set (often called a \'property set\') is a collection of parameters \n\
whose values can determine the appearance, behavior, or simply provide information about \n\
an element in a scene. Parameter sets (the <a href=\"#!/url=./si_om/Property.html\">Property</a> object for scripting) \n\
define the visual aspect of objects as displayed in the viewport; some provide motion \n\
information such as time; and others are used internally to control the way specific \n\
operations are performed. <br /><br />\n\
In the user interface, you can edit and animate the parameters of most parameter sets using property \n\
editors. Related parameters are usually displayed as a property page within a property editor. <br /><br />\n\
In the object model, the Parameter object is a member of the <a href=\"#!/url=./si_om/ParameterCollection.html\">ParameterCollection</a>, \n\
which you can get using <a href=\"#!/url=./si_om/ProjectItem.Parameters.html\">ProjectItem.Parameters</a>. For custom-defined parameters, \n\
you can create them on the <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> object (see \n\
<a href=\"#!/url=./si_om/CustomProperty.AddParameter.html\">CustomProperty.AddParameter</a> and <a href=\"#!/url=./si_om/CustomProperty.AddParameter2.html\">CustomProperty.AddParameter2</a>).\n\
<br /><br />\n\
Besides representing a regular parameter in Softimage, this object is the base class for a number \n\
of specializations, including the <a href=\"#!/url=./si_om/ArrayParameter.html\">ArrayParameter</a>, <a href=\"#!/url=./si_om/ShaderParameter.html\">ShaderParameter</a>, \n\
<a href=\"#!/url=./si_om/ProxyParameter.html\">ProxyParameter</a>, etc. \n\
<br /><br />For more information, see \"Object Hierarchy\" in the Softimage user guide. \n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.AddCustomOp.html\">AddCustomOp</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.AddExpression.html\">AddExpression</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.AddFCurve.html\">AddFCurve</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.AddFCurve2.html\">AddFCurve2</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.AddScriptedOp.html\">AddScriptedOp</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.AddScriptedOpFromFile.html\">AddScriptedOpFromFile</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.AnimatedParameters.html\">AnimatedParameters</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.Connect.html\">Connect</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.ConnectFromFile.html\">ConnectFromFile</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.ConnectFromFile2.html\">ConnectFromFile2</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.ConnectFromPreset.html\">ConnectFromPreset</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.ConnectFromPreset2.html\">ConnectFromPreset2</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.ConnectFromProgID.html\">ConnectFromProgID</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.ConnectFromProgID2.html\">ConnectFromProgID2</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.Disconnect.html\">Disconnect</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.Enable.html\">Enable</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.GetInstanceValue.html\">GetInstanceValue</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.GetValue2.html\">GetValue2</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.IsAnimated.html\">IsAnimated</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.IsLocked.html\">IsLocked</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.IsSupportedInstanceValue.html\">IsSupportedInstanceValue</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.PutValue2.html\">PutValue2</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.SetCapabilityFlag.html\">SetCapabilityFlag</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.SetInstanceValue.html\">SetInstanceValue</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.SetLock.html\">SetLock</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.Show.html\">Show</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.UnSetLock.html\">UnSetLock</a>		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.Animatable.html\">Animatable</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.Capabilities.html\">Capabilities</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.Default.html\">Default</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.Description.html\">Description</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.HasInstanceValue.html\">HasInstanceValue</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.Keyable.html\">Keyable</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.LockLevel.html\">LockLevel</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.LockType.html\">LockType</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.Marked.html\">Marked</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.Max.html\">Max</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.Min.html\">Min</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.Model.html\">Model</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.OriginalValue.html\">OriginalValue</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.OverridenObject.html\">OverridenObject</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.OverridingObject.html\">OverridingObject</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.Parameters.html\">Parameters</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.Parent3DObject.html\">Parent3DObject</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.ReadOnly.html\">ReadOnly</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.ScriptName.html\">ScriptName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.Source.html\">Source</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.Sources.html\">Sources</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.SuggestedMax.html\">SuggestedMax</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.SuggestedMin.html\">SuggestedMin</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.Tags.html\">Tags</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.Value.html\">Value</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Parameter.ValueType.html\">ValueType</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' \n\
\' This example shows how to loop through all parameters on the object\n\
\'\n\
NewScene , false\n\
\' Access Parameters Directly Off the Object\n\
Set oRoot = Application.ActiveProject.ActiveScene.Root\n\
Set oCube =  oRoot.AddGeometry(\"Cube\", \"MeshSurface\", \"MyCube\")\n\
\' Print the names of all parameter exposed by the cube object\n\
For Each oParameter In oCube.Parameters\n\
	LogMessage oParameter.ScriptName &amp; \" = \" &amp; oParameter.Value\n\
Next\n\
\' Expected results:\n\
\'INFO : \"Name = MyCube\"\n\
\'INFO : \"blendweight = 1\"\n\
\'INFO : \"active = True\"\n\
\'INFO : \"posx = 0\"\n\
\'INFO : \"posy = 0\"\n\
\'INFO : \"posz = 0\"\n\
\'INFO : \"rotx = 0\"\n\
\'INFO : \"roty = 0\"\n\
\'INFO : \"rotz = 0\"\n\
\'INFO : \"quatw = 1\"\n\
\'INFO : \"quatx = 0\"\n\
\'INFO : \"quaty = 0\"\n\
\'INFO : \"quatz = 0\"\n\
\'INFO : \"sclx = 1\"\n\
\'INFO : \"scly = 1\"\n\
\'INFO : \"sclz = 1\"\n\
\'INFO : \"sclorix = 0\"\n\
\'INFO : \"scloriy = 0\"\n\
\'INFO : \"scloriz = 0\"\n\
\'INFO : \"cnsscl = True\"\n\
\'INFO : \"cnsori = True\"\n\
\'INFO : \"cnspos = True\"\n\
\'INFO : \"affbyscl = True\"\n\
\'INFO : \"affbyori = True\"\n\
\'INFO : \"posxmaxactive = False\"\n\
\'INFO : \"posxminactive = False\"\n\
\'INFO : \"posymaxactive = False\"\n\
\'INFO : \"posyminactive = False\"\n\
\'INFO : \"poszmaxactive = False\"\n\
\'INFO : \"poszminactive = False\"\n\
\'INFO : \"rotxmaxactive = False\"\n\
\'INFO : \"rotxminactive = False\"\n\
\'INFO : \"rotymaxactive = False\"\n\
\'INFO : \"rotyminactive = False\"\n\
\'INFO : \"rotzmaxactive = False\"\n\
\'INFO : \"rotzminactive = False\"\n\
\'INFO : \"siscaling = True\"\n\
\'INFO : \"rotorder = 0\"\n\
\'INFO : \"subdivu = 1\"\n\
\'INFO : \"subdivv = 1\"\n\
\'INFO : \"subdivbase = 1\"\n\
\'INFO : \"length = 8\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' \n\
\' This example demonstrates how to get at individual parameters; if you change the value of\n\
\' a parameter you want to access through the UI, you can get its name to use in your script.\n\
\' For example, toggling the View Visibility parameter of a torus logs the following message \n\
\' to the Script Editor History pane:\n\
\'\n\
\'		SetValue \"torus.visibility.viewvis\", False\n\
\'\n\
NewScene , false\n\
\' \n\
\' 	How to Access Parameters (the Long Way)\n\
\' \n\
\' First get the camera (Camera object)\n\
Set oCamera = ActiveSceneRoot.FindChild( , \"camera\" )\n\
\' Underneath the camera are its properties (Properties returns the PropertyCollection)\n\
Set oProps = oCamera.Properties\n\
\' Once you have all the property sets (PropertyCollection) you can specify the one you \n\
\' want (the Property object is returned)\n\
Set oVis = oProps( \"visibility\" )\n\
\' Now you have a single Property (property set), so you need to get all the \n\
\' parameters for that property set (Parameters returns the ParameterCollection)\n\
Set oParams = oVis.Parameters\n\
\' Again you choose the single parameter you want from the collection (the \n\
\' Parameter object is returned)\n\
Set oViewVis = oParams( \"viewvis\" )\n\
\' \n\
\' How to Get Parameter Values\n\
\' \n\
\' And once you have a single Parameter object, you can get it\'s value...\n\
bOldValue = oViewVis.Value\n\
LogMessage \"Parameter originally was set to \" &amp; oViewVis.Value\n\
\' \n\
\' How to Set Parameter Values\n\
\' \n\
\' ...or set it...\n\
oViewVis.Value = not(bOldValue)\n\
LogMessage \"Parameter has been changed to \" &amp; oViewVis.Value\n\
\' \n\
\' How to Access Parameters (the Short Way)\n\
\' \n\
\' ...and you can make as many shortcuts as you like, so...\n\
oCamera.Properties(\"visibility\").Parameters(\"viewvis\").Value = not(bOldValue)\n\
LogMessage \"Parameter is back to \" &amp; oViewVis.Value\n\
\' Expected result:\n\
\'INFO : \"Parameter originally was set to False\"\n\
\'INFO : \"Parameter has been changed to True\"\n\
\'INFO : \"Parameter is back to True\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/ParameterCollection.html\">ParameterCollection</a> <a href=\"#!/url=./si_om/ProjectItem.Parameters.html\">ProjectItem.Parameters</a> <a href=\"#!/url=./si_om/Property.html\">Property</a> <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> <a href=\"#!/url=./si_om/CustomProperty.AddParameter.html\">CustomProperty.AddParameter</a> <a href=\"#!/url=./si_om/CustomProperty.AddParameter2.html\">CustomProperty.AddParameter2</a> <a href=\"#!/url=./si_om/ProjectItem.html\">ProjectItem</a> <a href=\"#!/url=./si_cmds/SIAddCustomParameter.html\">SIAddCustomParameter</a> <a href=\"#!/url=./si_cmds/EditParameterDefinition.html\">EditParameterDefinition</a> <a href=\"#!/url=./si_cmds/RemoveCustomParam.html\">RemoveCustomParam</a> <a href=\"#!/url=./si_cmds/AddProxyParam.html\">AddProxyParam</a> <a href=\"#!/url=./si_cmds/RemoveProxyParam.html\">RemoveProxyParam</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";