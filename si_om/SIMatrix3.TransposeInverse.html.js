var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SIMatrix3.TransposeInverse</title>\n\
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
            <h1>SIMatrix3.TransposeInverse</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/SIMatrix3.html\">SIMatrix3</a>.TransposeInverse</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>Sets this matrix to the transpose of the inverse of the input matrix m (if not singular): this = Transpose(m^-1) </p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Int32 SIMatrix3.TransposeInverse( SIMatrix3 in_pMatrix );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oBoolean = SIMatrix3.TransposeInverse( m );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./files/Boolean.htm\">Boolean</a> True if the matrix m has been inverted (not singular); otherwise False.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">m		</td>\n\
		<td><a href=\"#!/url=./si_om/SIMatrix3.html\">SIMatrix3</a>		</td>\n\
		<td>\n\
 Matrix operand 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">dim m1, m2\n\
\' Create 3x3 matrices.\n\
set m1 = XSIMath.CreateMatrix3(2.0, 3.0, 0.0, 1.0, 4.0, 0.0, 0.0, 0.0, 1.0)\n\
set m2 = XSIMath.CreateMatrix3\n\
if m2.TransposeInverse( m1 ) then\n\
\'do something\n\
else\n\
\'do another thing\n\
end if</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">NewScene (null, false);\n\
var oRoot = Application.ActiveProject.ActiveScene.Root\n\
// Create two cubes, the first one is rotated by 45 degrees and second\n\
// is the transpose inverse of the first one=\"SIMatrix4.TransposeInverseInPlace\n\
var oCube = oRoot.AddGeometry(\"Cube\",\"MeshSurface\", \"CubeParent\")	\n\
var oCube2 = oRoot.AddGeometry(\"Cube\",\"MeshSurface\", \"CubeParent\")	\n\
var oTrans = oCube.Kinematics.Local.Transform\n\
var oTrans2 = oCube2.Kinematics.Local.Transform\n\
var oMat3 = XSIMath.CreateMatrix3()\n\
oTrans2.GetRotationMatrix3 ( oMat3 );\n\
// Modify the matrix to scale and rotate around z\n\
oMat3.value(0,0) = 2 * Math.cos (45);\n\
oMat3.value(0,1) = -2 * Math.sin (45);\n\
oMat3.value(1,1) = 2 * Math.cos (45);\n\
oMat3.value(1,0) = 2 * Math.sin (45);\n\
oTrans.SetRotationFromMatrix3 ( oMat3 );	\n\
oCube.Kinematics.Local.Transform = oTrans;\n\
var vbArr = new VBArray( oMat3.Get2() );\n\
var array = vbArr.toArray();\n\
Application.LogMessage( \"SIMatrix3 before transpose \" +\n\
	\" m00:\" + array[0] + \" m01:\" + array[1] + \" m02:\" + array[2] + \n\
	\" m10:\" + array[3] + \" m11:\" + array[4] + \" m12:\" + array[5] + \n\
	\" m20:\" + array[6] + \" m21:\" + array[7] + \" m22:\" + array[8] );\n\
var oMat3Trans = XSIMath.CreateMatrix3()\n\
oMat3Trans.TransposeInverse(oMat3)\n\
oTrans2.SetRotationFromMatrix3 ( oMat3Trans );\n\
var vbArr = new VBArray( oMat3Trans.Get2() );\n\
var array = vbArr.toArray();\n\
Application.LogMessage( \"SIMatrix3 after transpose \" +\n\
	\" m00:\" + array[0] + \" m01:\" + array[1] + \" m02:\" + array[2] + \n\
	\" m10:\" + array[3] + \" m11:\" + array[4] + \" m12:\" + array[5] + \n\
	\" m20:\" + array[6] + \" m21:\" + array[7] + \" m22:\" + array[8] );\n\
oCube2.Kinematics.Local.Transform = oTrans2;\n\
// Expected results:\n\
//INFO : SIMatrix3 before transpose  \n\
//			m00:1.0506439776354594	m01:-1.7018070490682368 m02:0 \n\
//			m10:1.7018070490682368	m11:1.0506439776354594	m12:0 \n\
//			m20:0                   m21:0                   m22:1\n\
//INFO : SIMatrix3 after transpose  \n\
//			m00:0.26266099440886486 m01:-0.4254517622670592 m02:0 \n\
//			m10:0.4254517622670592	m11:0.26266099440886486 m12:0 \n\
//			m20:0                   m21:0                   m22:1</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/SIMatrix3.TransposeInverseInPlace.html\">SIMatrix3.TransposeInverseInPlace</a> <a href=\"#!/url=./si_om/SIVector3.html\">SIVector3</a> <a href=\"#!/url=./si_om/SIMatrix3.html\">SIMatrix3</a> <a href=\"#!/url=./si_om/SIMatrix4.html\">SIMatrix4</a> <a href=\"#!/url=./si_om/SIRotation.html\">SIRotation</a> <a href=\"#!/url=./si_om/SITransformation.html\">SITransformation</a> <a href=\"#!/url=./si_om/SIQuaternion.html\">SIQuaternion</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";