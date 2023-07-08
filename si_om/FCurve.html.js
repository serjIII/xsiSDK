var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>FCurve</title>\n\
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
            <h1>FCurve</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">FCurve</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_FCurve\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1FCurve.html\">FCurve</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\"><a href=\"#!/url=./si_om/AnimationSource.html\">AnimationSource</a></p>\n\
<p class=\"level3\">FCurve</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> The FCurve (function curve) object provides access to a set of functions for getting \n\
and setting Softimage fcurve attributes, as well as creating, retrieving, modifying and \n\
deleting fcurve keys. <br /><br />\n\
FCurves can be created and connected to parameters using the <a href=\"#!/url=./si_om/Parameter.AddFCurve.html\">Parameter.AddFCurve</a>\n\
and <a href=\"#!/url=./si_om/Parameter.AddFCurve2.html\">Parameter.AddFCurve2</a> methods. To access an existing FCurve on a \n\
<a href=\"#!/url=./si_om/Parameter.html\">Parameter</a>, use the <a href=\"#!/url=./si_om/Parameter.Source.html\">Parameter.Source</a> method. FCurves are \n\
supported by the following parameter types: siDouble, siFloat, siInt4, siInt2, siByte, siUInt4, \n\
siUInt2 and siUByte (see <a href=\"#!/url=./si_om/siVariantType.html\">siVariantType</a> for definitions of these types). <br /><br />\n\
When defining <a href=\"#!/url=./si_om/FCurveKey.html\">FCurveKey</a>s, the key value is coerced to meet the key value\'s \n\
type criteria. For boolean and integer fcurves, the values supplied are rounded. \n\
For example, if you provide the value 3.5 to an integer fcurve, it is rounded \n\
down to 3. For boolean fcurves, non-zero values are interpreted as true. <br /><br /><a href=\"#!/url=./si_om/SIObject.Parent.html\">SIObject.Parent</a> returns the parent of the fcurve. For fcurves \n\
connected to parameters, the <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> object is considered to be \n\
the parent. For fcurves contained by <a href=\"#!/url=./si_om/ActionSource.html\">ActionSource</a> objects the parent \n\
is the <a href=\"#!/url=./si_om/AnimationSourceItem.html\">AnimationSourceItem</a> object. <br /><br />\n\
Note: For more information, see \"FCurve Interpolation and Extrapolation\" in the Softimage user guide. <br /><br />\n\
If setting one property or calling one method raises an \"Access Denied\" error, this may due to different reasons:\n\
the function curve or the function curve key(s) are locked (see <a href=\"#!/url=./si_om/FCurve.Locked.html\">FCurve.Locked</a> and <a href=\"#!/url=./si_om/FCurveKey.Locked.html\">FCurveKey.Locked</a>) or\n\
the function curve is used by a locked animation layer (see <a href=\"#!/url=./si_cmds/IsAnimationLayerLocked.html\">IsAnimationLayerLocked</a>).\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.AddKey.html\">AddKey</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.BeginEdit.html\">BeginEdit</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.EndEdit.html\">EndEdit</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.Eval.html\">Eval</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.ExtendCycle.html\">ExtendCycle</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.Fit.html\">Fit</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.GetKey.html\">GetKey</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.GetKeyAtIndex.html\">GetKeyAtIndex</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.GetKeyFrame.html\">GetKeyFrame</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.GetKeyIndex.html\">GetKeyIndex</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.GetKeyValue.html\">GetKeyValue</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.GetKeysBetween.html\">GetKeysBetween</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.GetMaxKeyFrame.html\">GetMaxKeyFrame</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.GetMaxKeyValue.html\">GetMaxKeyValue</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.GetMidKeyFrame.html\">GetMidKeyFrame</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.GetMidKeyValue.html\">GetMidKeyValue</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.GetMinKeyFrame.html\">GetMinKeyFrame</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.GetMinKeyValue.html\">GetMinKeyValue</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.GetNumKeys.html\">GetNumKeys</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.InsertKeyAtFrame.html\">InsertKeyAtFrame</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.IsEditing.html\">IsEditing</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.KeyExists.html\">KeyExists</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.MakeRotationsContinuous.html\">MakeRotationsContinuous</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.Offset.html\">Offset</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.OffsetKeys.html\">OffsetKeys</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.RemoveKey.html\">RemoveKey</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.RemoveKeyAtIndex.html\">RemoveKeyAtIndex</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.RemoveKeys.html\">RemoveKeys</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.RemoveKeysAtIndex.html\">RemoveKeysAtIndex</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.Resample.html\">Resample</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.Scale.html\">Scale</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.ScaleKeys.html\">ScaleKeys</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.Set.html\">Set</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.SetKey.html\">SetKey</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.SetKeyTangents.html\">SetKeyTangents</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.SetKeys.html\">SetKeys</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.Smooth.html\">Smooth</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.SnapToNearestFrame.html\">SnapToNearestFrame</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.UndoEdit.html\">UndoEdit</a>		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.DependsOnFrameRate.html\">DependsOnFrameRate</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.Extrapolation.html\">Extrapolation</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.HighClamp.html\">HighClamp</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.Interpolation.html\">Interpolation</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.Keys.html\">Keys</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.Locked.html\">Locked</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.LowClamp.html\">LowClamp</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.Mute.html\">Mute</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.NoKeyValue.html\">NoKeyValue</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.SI3DStyle.html\">SI3DStyle</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.Selected.html\">Selected</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.SelectedKeys.html\">SelectedKeys</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurve.Type.html\">Type</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
	This example demonstrates how to get the parent of an fcurve.\n\
*/ \n\
// Set up the scene with a custom pset on a null\n\
NewScene( null, false );\n\
var n = ActiveSceneRoot.AddNull();\n\
var pset = n.AddCustomProperty( \"CustomPSet\" );\n\
var x = pset.AddParameter3( \"X\", siDouble, 0, 0, 100 );\n\
LogMessage( \"x value = \" + x.value, siInfo )\n\
LogMessage( \"x min/max = \" + x.min + \", \" + x.max, siInfo )\n\
// Set an fcurve on the custom parameter\n\
var fc = x.AddFCurve2( null, null );\n\
var param = fc.Parent;\n\
LogMessage( \"parent of fcurve = \" + param.FullName, siInfo );\n\
LogMessage( \"param isequal to x = \" + param.IsEqualTo(x), siInfo );\n\
// Outputs:\n\
//INFO : \"x value = 0\"\n\
//INFO : \"x min/max = 0, 100\"\n\
//INFO : \"parent of fcurve = null.CustomPSet.X\"\n\
//INFO : \"param isequal to x = true\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' ==========================================================================\n\
\'   This part of the script just sets up the sphere, curve, and the path\n\
\'   constraint between them.\n\
\' --------------------------------------------------------------------------\n\
\' Set up scene context\n\
Set oRoot = ActiveSceneRoot\n\
\' Create sphere that will be animated with path constraint\n\
Set oSphere = oRoot.AddGeometry( \"Sphere\", \"MeshSurface\" )\n\
\' Create curve for path constraint\n\
Set oCrv = SICreateCurve( \"crvlist\", 3, 0 )\n\
SIAddPointOnCurveAtEnd oCrv, _\n\
	-7.87711815167134, -1.9399113143663, 0.193991131436629, False\n\
SIAddPointOnCurveAtEnd oCrv, _\n\
	8.74360114835504, -5.93730432578764, 0.593730432578766, False\n\
SIAddPointOnCurveAtEnd oCrv, _\n\
	7.60141901636287, 5.15350177452872, -0.515350177452866, False\n\
SIAddPointOnCurveAtEnd oCrv, _\n\
	-6.30169452133709, 5.03593139183983, -0.50359313918398, False\n\
SIAddPointOnCurveAtEnd oCrv, _\n\
	2.71760576232661, -6.21163521872843, 0.621163521872845, False\n\
\' Apply path constraint to sphere \n\
SelectObj oSphere, , True\n\
ApplyPath oSphere, oCrv, 10.0, 95.5, 2, False, False\n\
\n\
\' ==========================================================================\n\
\'   This part of the script finds the existing fcurve &amp; gets the time in \n\
\'   frames of the first and last key.\n\
\' --------------------------------------------------------------------------\n\
\' Get all the meshes under the root\n\
Set oMeshes = oRoot.FindChildren(,,siMeshFamily)\n\
LogMessage \"Number of meshes found: \" &amp; oMeshes.Count\n\
\' Iterate over the meshes to find the one with the fcurve\n\
For Each s In oMeshes\n\
	\' Get the path constraint on the object\n\
	Set oCns = s.Kinematics.Constraints(\"PathCns\")\n\
	\' Just to make sure script doesn\'t crash if not found\n\
	If oCns &lt;&gt; \"Nothing\" Then\n\
		\' Getting path percentage to check that it\'s ok\n\
		LogMessage \"Path percentage = \" &amp; oCns.perc.Value\n\
		\' Get fcurve attached to path percentage\n\
		Set oFCurve = oCns.perc.Source\n\
		\' Getting first &amp; last curves on source\n\
		If oFCurve.Keys.Count &gt; 0 Then\n\
			dFCKeyA = oFCurve.Keys(0).Time\n\
			dFCKeyZ = oFCurve.Keys(oFCurve.Keys.Count - 1).Time\n\
			\' Print values\n\
			LogMessage \"First key in time is at frame \" &amp; dFCKeyA\n\
			LogMessage \"Last key in time is at frame \" &amp; dFCKeyZ\n\
		End If\n\
	End If\n\
Next\n\
\' Output of above script is:\n\
\' --------------------------\n\
\'INFO : \"Number of meshes found: 1\"\n\
\'INFO : \"Path percentage = 100\"\n\
\'INFO : \"First key in time is at frame 4.126\"\n\
\'INFO : \"Last key in time is at frame 90.274\"</pre></td></tr>\n\
</table>\n\
</div><h4>3. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' \n\
\' This example manipulates the FCurve that drives a Linked Parameter\n\
\' \n\
dim oControlPSet, oControlledPSet\n\
set oControlPSet = ActiveSceneRoot.AddProperty( \"CustomProperty\", false, \"ControlPSet\" )\n\
oControlPSet.AddParameter2 \"LinkSrc\", siInt4, 5, 0, 20, 0, 20, 0, siAnimatable \n\
set oControlledPSet = ActiveSceneRoot.AddProperty( \"CustomProperty\", false, \"ControlledPSet\" )\n\
oControlledPSet.AddParameter2 \"LinkDest\", siInt4, 5, 0, 20, 0, 20, 0, siAnimatable \n\
\'Create linked parameter\n\
SetExpr \"ControlledPSet.LinkDest\", \"l_fcv( ControlPset.LinkSrc )\"\n\
\'Important: This is how you get to the FCurve so you can\n\
\'create the specific relationship\n\
dim oFCurve, oExpr	\n\
set oExpr = oControlledPSet.Parameters( \"LinkDest\" ).Source			\n\
set oFCurve = oExpr.Parameters( \"l_fcv\" ).Source\n\
oFCurve.BeginEdit\n\
oFCurve.RemoveKeys\n\
oFCurve.Interpolation = siLinearInterpolation\n\
\'Important: Linked fcurves are time independant.  So the in_Frame value is\n\
\'used directly as input (i.e. no conversion from frames to seconds is done).\n\
\'When linksrc is 0 then linkdest is 0\n\
oFCurve.AddKey 0, 1\n\
\'when linksrc is 1 then linkdest is 3\n\
oFCurve.AddKey 1, 3\n\
\'when linksrc is 2 then listdest is 2\n\
oFCurve.AddKey 2, 2\n\
\'When linksrc is 10 the listdest is 20\n\
oFCurve.AddKey 10, 20\n\
oFCurve.EndEdit\n\
\'Demonstrate the relationship\n\
oControlPSet.LinkSrc.Value = 1\n\
Logmessage oControlledPSet.LinkDest.Value \n\
oControlPSet.LinkSrc.Value = 10\n\
Logmessage oControlledPSet.LinkDest.Value \n\
\'Expected results:\n\
\'INFO : 3\n\
\'INFO : 20</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/FCurveKey.html\">FCurveKey</a> <a href=\"#!/url=./si_om/FCurveKeyCollection.html\">FCurveKeyCollection</a> <a href=\"#!/url=./si_om/Parameter.AddFCurve.html\">Parameter.AddFCurve</a> <a href=\"#!/url=./si_cmds/GetFCurveInfo.html\">GetFCurveInfo</a> <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> <a href=\"#!/url=./si_om/AnimationSourceItem.html\">AnimationSourceItem</a> <a href=\"#!/url=./si_om/Parameter.Max.html\">Parameter.Max</a> <a href=\"#!/url=./si_om/Parameter.Source.html\">Parameter.Source</a> <a href=\"#!/url=./si_om/CustomProperty.AddFCurveParameter.html\">CustomProperty.AddFCurveParameter</a> <a href=\"#!/url=./si_om/PPGLayout.AddFCurve.html\">PPGLayout.AddFCurve</a> <a href=\"#!/url=./si_cmds/Sequence.html\">Sequence</a> <a href=\"#!/url=./si_cmds/ScaleAndOffset.html\">ScaleAndOffset</a> <a href=\"#!/url=./si_cmds/ActivateFCurve.html\">ActivateFCurve</a> <a href=\"#!/url=./si_cmds/CopyAnimation.html\">CopyAnimation</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";