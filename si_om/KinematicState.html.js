var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>KinematicState</title>\n\
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
            <h1>KinematicState</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">KinematicState</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_KinematicState\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1KinematicState.html\">KinematicState</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\"><a href=\"#!/url=./si_om/Parameter.html\">Parameter</a></p>\n\
<p class=\"level3\">KinematicState</p>\n\
\n\
<h3>Description</h3>\n\
<div><p> The KinematicState object represents the current pose of a <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> object \n\
whereas the base pose of an object is represented by the <a href=\"#!/url=./si_om/StaticKinematicState.html\">StaticKinematicState</a>\n\
property.\n\
<br /><br />\n\
The transformation state of the KinematicState object is accessible both through the\n\
<a href=\"#!/url=./si_om/KinematicState.Transform.html\">KinematicState.Transform</a> property and through its \n\
<a href=\"#!/url=./si_om/ParameterCollection.html\">ParameterCollection</a>.  Both expose the same transformation data,\n\
but the KinematicState.Transform is convenient for mathematical manipulation\n\
(see <a href=\"#!/url=./si_om/XSIMath.html\">XSIMath</a>), while the ParameterCollection exposes the\n\
transform as it is shown on the KinematicState property page.\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.GetInstanceValue.html\">GetInstanceValue</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/KinematicState.GetTransform2.html\">GetTransform2</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.GetValue2.html\">GetValue2</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.IsAnimated.html\">IsAnimated</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.IsLocked.html\">IsLocked</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.IsSupportedInstanceValue.html\">IsSupportedInstanceValue</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/KinematicState.PutTransform2.html\">PutTransform2</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.PutValue2.html\">PutValue2</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.SetCapabilityFlag.html\">SetCapabilityFlag</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.SetInstanceValue.html\">SetInstanceValue</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.SetLock.html\">SetLock</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Show.html\">Show</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.UnSetLock.html\">UnSetLock</a>		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Marked.html\">Marked</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Max.html\">Max</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Min.html\">Min</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Model.html\">Model</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.OriginalValue.html\">OriginalValue</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.OverridenObject.html\">OverridenObject</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.OverridingObject.html\">OverridingObject</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Parameters.html\">Parameters</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Parent3DObject.html\">Parent3DObject</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.ReadOnly.html\">ReadOnly</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.ScriptName.html\">ScriptName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Source.html\">Source</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Sources.html\">Sources</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.SuggestedMax.html\">SuggestedMax</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.SuggestedMin.html\">SuggestedMin</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Tags.html\">Tags</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/KinematicState.Transform.html\">Transform</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Parameter.Value.html\">Value</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
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
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	Example of using the SITransformation to read the local\n\
	and global transforms of an object\n\
*/\n\
NewScene(null,false) ;\n\
var oNull = Application.ActiveSceneRoot.AddNull( \"ParentNull\" ) ;\n\
//Change the position and rotation of the null\n\
//by providing a new transform\n\
oNewLocalTransform = XSIMath.CreateTransform() ;\n\
// Change posx, posy\n\
oNewLocalTransform.SetTranslationFromValues( 10, 20, 0 ) ;\n\
// set rotx to 90 degrees (pi/2 radians)\n\
oNewLocalTransform.SetRotationFromXYZAnglesValues( XSIMath.pi / 2, 0, 0 ) ; \n\
oNull.Kinematics.Local.Transform = oNewLocalTransform ;\n\
PrintLocalGlobalTransforms( oNull ) ;\n\
var oNullChild = oNull.AddNull( \"ChildNull\" ) ;\n\
PrintLocalGlobalTransforms( oNullChild ) ;\n\
// Show but the local and global SRT of an object\n\
function PrintLocalGlobalTransforms( in_obj )\n\
{\n\
	Application.LogMessage( \"--------\" + in_obj.Name + \"---------\" ) ;\n\
	var oLocalSITranformation = in_obj.Kinematics.Local.Transform ;\n\
	Application.LogMessage( \"Local Transform\" ) ;\n\
	PrintTransformation( oLocalSITranformation ) ;\n\
	Application.LogMessage( \"\" ) ;\n\
	Application.LogMessage( \"Global Transform\" ) ;\n\
	var oGlobalSITranformation = in_obj.Kinematics.Global.Transform ;\n\
	PrintTransformation( oGlobalSITranformation ) ;\n\
	Application.LogMessage( \"\" ) ;	\n\
}\n\
// Show the \"SRT: of a SITransformation object\n\
function PrintTransformation( in_oTransform )\n\
{\n\
	var oVector = XSIMath.CreateVector3();\n\
	in_oTransform.GetScaling( oVector ) ;\n\
	PrintVector( \"Scaling:\", oVector ) ;\n\
	// In Radians\n\
	in_oTransform.GetRotationXYZAngles( oVector ) ;\n\
	PrintVector( \"Rotation:\", oVector ) ;\n\
	in_oTransform.GetTranslation( oVector ) ;\n\
	PrintVector( \"Translation:\", oVector ) ;\n\
}\n\
// Print a vector.  Values are rounded to 3 decimal places\n\
function PrintVector( in_Prefix, in_oVec )\n\
{\n\
	Application.LogMessage( in_Prefix + \" \" + \n\
			XSIRound(in_oVec.x,3) + \", \" + \n\
			XSIRound(in_oVec.y,3) + \", \" + \n\
			XSIRound(in_oVec.z,3) ) ;\n\
}\n\
//Output: (note how the local transform of\n\
//the Child null is relative to the center \n\
//of the parent null)\n\
//\n\
//INFO : --------ParentNull---------\n\
//INFO : Local Transform\n\
//INFO : Scaling: 1, 1, 1\n\
//INFO : Rotation: 1.571, 0, 0\n\
//INFO : Translation: 10, 20, 0\n\
//INFO : \n\
//INFO : Global Transform\n\
//INFO : Scaling: 1, 1, 1\n\
//INFO : Rotation: 1.571, 0, 0\n\
//INFO : Translation: 10, 20, 0\n\
//INFO : \n\
//INFO : --------ChildNull---------\n\
//INFO : Local Transform\n\
//INFO : Scaling: 1, 1, 1\n\
//INFO : Rotation: -1.571, 0, 0\n\
//INFO : Translation: -10, 0, 20\n\
//INFO : \n\
//INFO : Global Transform\n\
//INFO : Scaling: 1, 1, 1\n\
//INFO : Rotation: 0, 0, 0\n\
//INFO : Translation: 0, 0, 0</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	Example of using the ParameterCollection of\n\
	a KinematicState object\n\
*/\n\
var oNull = ActiveSceneRoot.AddNull( \"Null\" ) ;\n\
// The transform can be set through the parameters\n\
// of the kinematicstate object\n\
var oLocalKinematics = oNull.Kinematics.Local ;\n\
oLocalKinematics.Parameters( \"posx\" ).Value = 10 ;\n\
oLocalKinematics.Parameters( \"posy\" ).Value = 20 ;\n\
oLocalKinematics.Parameters( \"rotx\" ).Value = 90 ;\n\
oLocalKinematics.Parameters( \"sclz\" ).Value = 3 ;\n\
// All the SRT values, plus many more parameters can \n\
// be read via the parameter collection\n\
var oAllParameters = oLocalKinematics.Parameters ;\n\
for ( var i = 0 ; i &lt; oAllParameters.Count ; i++ )\n\
{\n\
	Application.LogMessage( oAllParameters(i).ScriptName + \":\" + \n\
				oAllParameters(i).Value ) ;\n\
}\n\
//Output:\n\
//INFO : blendweight:1\n\
//INFO : active:true\n\
//INFO : posx:10\n\
//INFO : posy:20\n\
//INFO : posz:0\n\
//INFO : rotx:90\n\
//INFO : roty:0\n\
//INFO : rotz:0\n\
//INFO : quatw:0.7071067811865476\n\
//INFO : quatx:0.7071067811865475\n\
//INFO : quaty:0\n\
//INFO : quatz:0\n\
//INFO : sclx:1\n\
//INFO : scly:1\n\
//INFO : sclz:3\n\
//INFO : sclorix:0\n\
//INFO : scloriy:0\n\
//INFO : scloriz:0\n\
//INFO : cnsscl:true\n\
//INFO : cnsori:true\n\
//INFO : cnspos:true\n\
//INFO : affbyscl:true\n\
//INFO : affbyori:true\n\
//INFO : posxmaxactive:false\n\
//INFO : posxminactive:false\n\
//INFO : posymaxactive:false\n\
//INFO : posyminactive:false\n\
//INFO : poszmaxactive:false\n\
//INFO : poszminactive:false\n\
//INFO : rotxmaxactive:false\n\
//INFO : rotxminactive:false\n\
//INFO : rotymaxactive:false\n\
//INFO : rotyminactive:false\n\
//INFO : rotzmaxactive:false\n\
//INFO : rotzminactive:false\n\
//INFO : siscaling:true\n\
//INFO : rotorder:0\n\
//INFO : pivotactive:true\n\
//INFO : pposx:0\n\
//INFO : pposy:0\n\
//INFO : pposz:0\n\
//INFO : protx:0\n\
//INFO : proty:0\n\
//INFO : protz:0\n\
//INFO : psclx:1\n\
//INFO : pscly:1\n\
//INFO : psclz:1\n\
//INFO : pivotcompactive:true\n\
//INFO : pcposx:0\n\
//INFO : pcposy:0\n\
//INFO : pcposz:0\n\
//INFO : pcrotx:0\n\
//INFO : pcroty:0\n\
//INFO : pcrotz:0\n\
//INFO : pcsclx:1\n\
//INFO : pcscly:1\n\
//INFO : pcsclz:1\n\
//INFO : nposx:0\n\
//INFO : nposy:0\n\
//INFO : nposz:0\n\
//INFO : nrotx:0\n\
//INFO : nroty:0\n\
//INFO : nrotz:0\n\
//INFO : nsclx:1\n\
//INFO : nscly:1\n\
//INFO : nsclz:1\n\
//INFO : nsclorix:0\n\
//INFO : nscloriy:0\n\
//INFO : nscloriz:0</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Kinematics.Global.html\">Kinematics.Global</a> <a href=\"#!/url=./si_om/Kinematics.Local.html\">Kinematics.Local</a> <a href=\"#!/url=./si_om/StaticKinematicState.html\">StaticKinematicState</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";