var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SITransformation</title>\n\
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
            <h1>SITransformation</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SITransformation</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_SITransformation\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CTransformation.html\">CTransformation</a></p>\n\
\n\
<h3>Description</h3>\n\
<div><p> This object represents a transformation which is the result of the combination \n\
of a Scaling, a Rotation and a Translation, in the S.R.T order.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.AddLocalRotation.html\">AddLocalRotation</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.AddLocalScaling.html\">AddLocalScaling</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.AddLocalTranslation.html\">AddLocalTranslation</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.AddParentRotation.html\">AddParentRotation</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.AddParentScaling.html\">AddParentScaling</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.AddParentTranslation.html\">AddParentTranslation</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.Copy.html\">Copy</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.GetMatrix4.html\">GetMatrix4</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.GetRotation.html\">GetRotation</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.GetRotationAxisAngle.html\">GetRotationAxisAngle</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.GetRotationAxisAngle2.html\">GetRotationAxisAngle2</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.GetRotationMatrix3.html\">GetRotationMatrix3</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.GetRotationQuaternion.html\">GetRotationQuaternion</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.GetRotationXYZAngles.html\">GetRotationXYZAngles</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.GetRotationXYZAnglesValues.html\">GetRotationXYZAnglesValues</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.GetRotationXYZAnglesValues2.html\">GetRotationXYZAnglesValues2</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.GetScaling.html\">GetScaling</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.GetScalingOrientationXYZAngles.html\">GetScalingOrientationXYZAngles</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.GetScalingOrientationXYZAngles2.html\">GetScalingOrientationXYZAngles2</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.GetScalingValues.html\">GetScalingValues</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.GetScalingValues2.html\">GetScalingValues2</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.GetTranslation.html\">GetTranslation</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.GetTranslationValues.html\">GetTranslationValues</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.GetTranslationValues2.html\">GetTranslationValues2</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.HasScalingOrientation.html\">HasScalingOrientation</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.Mul.html\">Mul</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.MulInPlace.html\">MulInPlace</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.SetIdentity.html\">SetIdentity</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.SetMatrix4.html\">SetMatrix4</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.SetRotation.html\">SetRotation</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.SetRotationFromAxisAngle.html\">SetRotationFromAxisAngle</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.SetRotationFromMatrix3.html\">SetRotationFromMatrix3</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.SetRotationFromQuaternion.html\">SetRotationFromQuaternion</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.SetRotationFromXYZAngles.html\">SetRotationFromXYZAngles</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.SetRotationFromXYZAnglesValues.html\">SetRotationFromXYZAnglesValues</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.SetRotationFromXYZAxes.html\">SetRotationFromXYZAxes</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.SetScaling.html\">SetScaling</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.SetScalingFromValues.html\">SetScalingFromValues</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.SetScalingOrientationFromXYZAngles.html\">SetScalingOrientationFromXYZAngles</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.SetTranslation.html\">SetTranslation</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.SetTranslationFromValues.html\">SetTranslationFromValues</a>		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.Matrix4.html\">Matrix4</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.PosX.html\">PosX</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.PosY.html\">PosY</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.PosZ.html\">PosZ</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.RotX.html\">RotX</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.RotY.html\">RotY</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.RotZ.html\">RotZ</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.Rotation.html\">Rotation</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.Scaling.html\">Scaling</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.SclX.html\">SclX</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.SclY.html\">SclY</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.SclZ.html\">SclZ</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SITransformation.Translation.html\">Translation</a>		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
	Example of how to use the SITransformation to read and write \n\
	the scaling, rotation and translation of an object\n\
*/\n\
var oNull = Application.ActiveSceneRoot.AddNull( \"MyNull\" ) ;\n\
// Change the position and rotation of the null\n\
// by providing a new transform\n\
oNewLocalTransform = XSIMath.CreateTransform() ;\n\
// Change posx, posy\n\
oNewLocalTransform.PosX = 5; \n\
oNewLocalTransform.PosX = 6; \n\
// Set rotx to 180 degrees\n\
oNewLocalTransform.RotX = 180;\n\
// Scale y-axis (scly)\n\
oNewLocalTransform.SclY = 2; \n\
oNull.Kinematics.Local.Transform = oNewLocalTransform ;\n\
PrintTransformation( oNull.Kinematics.Local.Transform ) ;\n\
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
// Output:\n\
//INFO : Scaling: 1, 2, 1\n\
//INFO : Rotation: 3.142, 0, 0\n\
//INFO : Translation: 5, 6, 0</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">dim transfo\n\
set transfo = XSIMath.CreateTransform\n\
Application.LogMessage TypeName(transfo)</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/SIVector3.html\">SIVector3</a> <a href=\"#!/url=./si_om/SIMatrix3.html\">SIMatrix3</a> <a href=\"#!/url=./si_om/SIMatrix4.html\">SIMatrix4</a> <a href=\"#!/url=./si_om/SIRotation.html\">SIRotation</a> <a href=\"#!/url=./si_om/SITransformation.html\">SITransformation</a> <a href=\"#!/url=./si_om/SIQuaternion.html\">SIQuaternion</a> <a href=\"#!/url=./si_om/KinematicState.Transform.html\">KinematicState.Transform</a> <a href=\"#!/url=./si_om/StaticKinematicState.Transform.html\">StaticKinematicState.Transform</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";