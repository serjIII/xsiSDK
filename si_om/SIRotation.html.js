var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SIRotation</title>\n\
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
            <h1>SIRotation</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SIRotation</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_SIRotation\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CRotation.html\">CRotation</a></p>\n\
\n\
<h3>Description</h3>\n\
<div><p> This object represents a rotation in 3D space.  It supports three representation methods:\n\
X, Y and Z Euler angles, Quaternion and 3 by 3 matrix. <br /><br />\n\
Note: When represented as X,Y,Z Euler angles the values are always in Radians, not degrees.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIRotation.Copy.html\">Copy</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIRotation.GetAxisAngle.html\">GetAxisAngle</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIRotation.GetAxisAngle2.html\">GetAxisAngle2</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIRotation.GetMatrix3.html\">GetMatrix3</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIRotation.GetQuaternion.html\">GetQuaternion</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIRotation.GetXYZAngles.html\">GetXYZAngles</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIRotation.GetXYZAnglesValues.html\">GetXYZAnglesValues</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIRotation.GetXYZAnglesValues2.html\">GetXYZAnglesValues2</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIRotation.Invert.html\">Invert</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIRotation.InvertInPlace.html\">InvertInPlace</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIRotation.Mul.html\">Mul</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIRotation.MulInPlace.html\">MulInPlace</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIRotation.SetFromAxisAngle.html\">SetFromAxisAngle</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIRotation.SetFromMatrix3.html\">SetFromMatrix3</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIRotation.SetFromQuaternion.html\">SetFromQuaternion</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIRotation.SetFromXYZAngles.html\">SetFromXYZAngles</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIRotation.SetFromXYZAnglesValues.html\">SetFromXYZAnglesValues</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIRotation.SetFromXYZAxes.html\">SetFromXYZAxes</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIRotation.SetIdentity.html\">SetIdentity</a>		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIRotation.Quaternion.html\">Quaternion</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIRotation.RotX.html\">RotX</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIRotation.RotY.html\">RotY</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIRotation.RotZ.html\">RotZ</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIRotation.XYZAngles.html\">XYZAngles</a>		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
	Demonstrates different representations of a rotation: \n\
	-As a SIRotation object\n\
	-As a 3x3 matrix\n\
	-As a 4x4 matrix\n\
	-As a SITransformation object\n\
	-As a SIVector3 object\n\
*/\n\
var oSIRotation = XSIMath.CreateRotation( \n\
				XSIMath.DegreesToRadians( 45 ),\n\
				XSIMath.DegreesToRadians( 30 ),\n\
				XSIMath.DegreesToRadians( 15 ) ) ;\n\
oSIMatrix3 = XSIMath.CreateMatrix3() ;\n\
oSIRotation.GetMatrix3( oSIMatrix3 ) ;\n\
oSIMatrix4 = ConvertMatrix3ToMatrix4( oSIMatrix3 ) ;\n\
oSITransformation = XSIMath.CreateTransform() ;\n\
oSITransformation.SetMatrix4( oSIMatrix4 ) ;\n\
var oSIVector3 = XSIMath.CreateVector3() ;\n\
oSITransformation.GetRotationXYZAngles( oSIVector3 ) ;\n\
// Prove that we haven\'t lost the original rotation values\n\
Application.LogMessage( \"Rotation \" + \n\
			XSIMath.RadiansToDegrees( oSIVector3.X ) + \", \" +\n\
			XSIMath.RadiansToDegrees( oSIVector3.Y ) + \", \" +\n\
			XSIMath.RadiansToDegrees( oSIVector3.Z ) ) ;\n\
// Output (notice very small rounding problems that occur\n\
// when dealing with pi and trig functions):\n\
//INFO : Rotation 45, 29.999999999999996, 14.999999999999998\n\
function ConvertMatrix3ToMatrix4( oM3 )\n\
{\n\
	// Helper function to convert 3x3 rotation matrix\n\
	// to equivalent 4x4 transformation matrix:\n\
	//\n\
	// r11 r12 r13 0\n\
	// r21 r22 r23 0\n\
	// r31 r32 r33 0\n\
	// 0   0    0  1\n\
	oSIMatrix4 = XSIMath.CreateMatrix4(\n\
		oM3(0,0), oM3(0,1), oM3(0,2), 0,\n\
		oM3(1,0), oM3(1,1), oM3(1,2), 0,\n\
		oM3(2,0), oM3(2,1), oM3(2,2), 0,\n\
		0,        0,        0,        1 ) ;\n\
	return oSIMatrix4 ;	\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/SIVector3.html\">SIVector3</a> <a href=\"#!/url=./si_om/SIMatrix3.html\">SIMatrix3</a> <a href=\"#!/url=./si_om/SIMatrix4.html\">SIMatrix4</a> <a href=\"#!/url=./si_om/SIRotation.html\">SIRotation</a> <a href=\"#!/url=./si_om/SITransformation.html\">SITransformation</a> <a href=\"#!/url=./si_om/SIQuaternion.html\">SIQuaternion</a> <a href=\"#!/url=./si_om/XSIMath.DegreesToRadians.html\">XSIMath.DegreesToRadians</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";