var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SIMatrix4</title>\n\
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
            <h1>SIMatrix4</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SIMatrix4</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_SIMatrix4\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CMatrix4.html\">CMatrix4</a></p>\n\
\n\
<h3>Description</h3>\n\
<div><p> A double precision floating point 4 by 4 matrix. Where the translation values are found in m12, m13, m14, m15.<br /><br />\n\
	| m0  m1  m2  m3  |<br /><br />\n\
	| m4  m5  m6  m7  |<br /><br />\n\
	| m8  m9  m10 m11 |<br /><br />\n\
	| m12 m13 m14 m15 |<br /><br /></p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIMatrix4.Get.html\">Get</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIMatrix4.Get2.html\">Get2</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIMatrix4.Invert.html\">Invert</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIMatrix4.InvertInPlace.html\">InvertInPlace</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIMatrix4.Mul.html\">Mul</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIMatrix4.MulInPlace.html\">MulInPlace</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIMatrix4.Set.html\">Set</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIMatrix4.SetIdentity.html\">SetIdentity</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIMatrix4.Transpose.html\">Transpose</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIMatrix4.TransposeInPlace.html\">TransposeInPlace</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIMatrix4.TransposeInverse.html\">TransposeInverse</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIMatrix4.TransposeInverseInPlace.html\">TransposeInverseInPlace</a>		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Properties</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIMatrix4.Value.html\">Value</a>		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
	Demonstration of the Matrix4 object used to \n\
	print the contents of a Transformation\n\
*/\n\
var oNull = ActiveSceneRoot.AddNull() ;\n\
var oSITransformation = oNull.Kinematics.Local.Transform ;\n\
Application.LogMessage( \"Default Transformation Matrix\" ) ;\n\
PrintTransformationAsMatrix( oSITransformation ) ; \n\
oSITransformation.SetTranslationFromValues( 5, 6, 7) ;\n\
oSITransformation.SetScalingFromValues( 1, 4, 1) ;\n\
Application.LogMessage( \"Transformation with scaling and translation\" ) ;\n\
PrintTransformationAsMatrix( oSITransformation ) ; \n\
function PrintTransformationAsMatrix( in_Transform )\n\
{\n\
	var oMatrix4 = XSIMath.CreateMatrix4(); \n\
	oSITransformation.GetMatrix4(oMatrix4) ;\n\
	for ( var row = 0 ; row &lt; 4 ; row++ )\n\
	{	\n\
		strLine = \"\" ;\n\
		for( var col = 0 ; col &lt; 4 ; col++ )\n\
		{\n\
			strLine += oMatrix4.Value( row, col ) + \"\\t\\t\";\n\
		}\n\
		Application.LogMessage( strLine ) ;\n\
	}\n\
}\n\
//Output:\n\
//INFO : Default Transformation Matrix\n\
//INFO : 1		0		0		0		\n\
//INFO : 0		1		0		0		\n\
//INFO : 0		0		1		0		\n\
//INFO : 0		0		0		1		\n\
//INFO : Transformation with scaling and translation\n\
//INFO : 1		0		0		0		\n\
//INFO : 0		4		0		0		\n\
//INFO : 0		0		1		0		\n\
//INFO : 5		6		7		1</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This illustrates how to convert a position from local coordinates\n\
\' to global coordinates\n\
\'\n\
set oRoot = Application.ActiveProject.ActiveScene.Root\n\
if Selection.Count = 0 then\n\
	\' create a sample scene\n\
	set oModel = oRoot.AddModel\n\
	oModel.posx.value = 5\n\
	set oObject = oModel.AddNull\n\
	oObject.posx.value = 5\n\
else\n\
	set oObject = Selection(0)\n\
end if\n\
\'\n\
\' Create transformation matrix4 from global transform\n\
\'\n\
set oGlobalParameters = oObject.kinematics.global.parameters\n\
Set globalScl = XSIMath.CreateVector3\n\
call globalScl.Set( _\n\
	oGlobalParameters(\"sclx\").value, _\n\
	oGlobalParameters(\"scly\").value, _\n\
	oGlobalParameters(\"sclz\").value )\n\
Set globalRot = XSIMath.CreateVector3\n\
call globalRot.Set( _\n\
	oGlobalParameters(\"rotx\").value, _\n\
	oGlobalParameters(\"roty\").value, _\n\
	oGlobalParameters(\"rotz\").value )\n\
Set globalTrs = XSIMath.CreateVector3\n\
call globalTrs.Set( _\n\
	oGlobalParameters(\"posx\").value, _\n\
	oGlobalParameters(\"posy\").value, _\n\
	oGlobalParameters(\"posz\").value )\n\
set m4Global = CreateMatrix4(globalScl,globalRot,globalTrs)\n\
\'\n\
\' get local position\n\
\'\n\
Set v3Pos = XSIMath.CreateVector3\n\
call v3Pos.Set( oObject.posx.value, oObject.posy.value, oObject.posz.value )\n\
Application.LogMessage \"local position = \" &amp; v3Pos.x &amp; \", \" &amp; v3Pos.y &amp; \", \" &amp; v3Pos.z\n\
\'\n\
\' transform local to global position\n\
\'\n\
Set v3Pos = XSIMath.CreateVector3\n\
call v3Pos.MulByMatrix4( v3Pos, m4Global )\n\
Application.LogMessage \"global position = \" &amp; v3Pos.x &amp; \", \" &amp; v3Pos.y &amp; \", \" &amp; v3Pos.z\n\
\'\n\
\' Create and initialize SIMatrix4 using from the scaling, rotation and\n\
\' translation values (SIVector3)\n\
\'\n\
Function CreateMatrix4( inv3Scl, inv3Rot, inv3Pos )\n\
	Dim l_Rot, l_Trs, l_Matrix, l_RadToDeg, l_DegToRad\n\
	Set l_Rot = XSIMath.CreateVector3\n\
	Set l_Trs = XSIMath.CreateTransform\n\
	Set l_Matrix = XSIMath.CreateMatrix4\n\
	l_RadToDeg = 180.0 / 3.1415926535897932\n\
	l_DegToRad = 3.1415926535897932 / 180.0\n\
	\'Conversion of the rotation angles into radians\n\
	l_Rot.Copy inv3Rot\n\
	l_Rot.ScaleInPlace l_DegToRad\n\
	\'Create an SI Transform first.\n\
	l_Trs.SetScaling inv3Scl\n\
	l_Trs.SetTranslation inv3Pos\n\
	l_Trs.SetRotationFromXYZAngles l_Rot\n\
	\'Extract a Matrix from that transform.\n\
	l_Trs.GetMatrix4 l_Matrix\n\
	Set CreateMatrix4 = l_Matrix\n\
End Function</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/SIMatrix4.Set.html\">SIMatrix4.Set</a> <a href=\"#!/url=./si_om/SIVector3.html\">SIVector3</a> <a href=\"#!/url=./si_om/SIMatrix3.html\">SIMatrix3</a> <a href=\"#!/url=./si_om/SIMatrix4.html\">SIMatrix4</a> <a href=\"#!/url=./si_om/SIRotation.html\">SIRotation</a> <a href=\"#!/url=./si_om/SITransformation.GetMatrix4.html\">SITransformation.GetMatrix4</a> <a href=\"#!/url=./si_om/SIQuaternion.html\">SIQuaternion</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";