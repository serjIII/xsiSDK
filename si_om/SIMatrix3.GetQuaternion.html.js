var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SIMatrix3.GetQuaternion</title>\n\
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
            <h1>SIMatrix3.GetQuaternion</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/SIMatrix3.html\">SIMatrix3</a>.GetQuaternion</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v3.5</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>Returns the rotation quaternion representation of this matrix3.</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SIMatrix3.GetQuaternion( SIQuaternion out_pVal );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SIMatrix3.GetQuaternion( q );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">q		</td>\n\
		<td><a href=\"#!/url=./si_om/SIQuaternion.html\">SIQuaternion</a>		</td>\n\
		<td>\n\
The rotation quaternion containing the new matrix3 values.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example illustrates how to get the orientation of \n\
	one object relative to another.\n\
*/\n\
// CREATE OBJECTS A &amp; B\n\
var A = ActiveSceneRoot.AddNull(\"A\");\n\
var B = ActiveSceneRoot.AddNull(\"B\");\n\
// GET GLOBAL TRANSFORM OF A &amp; B\n\
var gksA = A.Kinematics.Global; \n\
var gksB = B.Kinematics.Global; \n\
var tgA = gksA.Transform;\n\
var tgB = gksB.Transform;\n\
// TRANSLATE &amp; ROTATE A\n\
var vA = XSIMath.CreateVector3(2, 2, 0);\n\
tgA.SetTranslation(vA);\n\
var rA = XSIMath.CreateRotation( 0, 0, XSIMath.DegreesToRadians(45) ); \n\
tgA.SetRotation(rA);\n\
gksA.Transform = tgA;\n\
// GET LOCAL TRANSFORM OF B RELATIVE TO A\n\
var mA = XSIMath.CreateMatrix3();\n\
var mB = XSIMath.CreateMatrix3();\n\
tgA.GetRotationMatrix3(mA);\n\
tgB.GetRotationMatrix3(mB);\n\
mA.TransposeInPlace();\n\
mB.MulInPlace(mA);\n\
// GET ORIENTATION OF B RELATIVE TO A AS A QUATERNION\n\
var qB = XSIMath.CreateQuaternion();\n\
mB.GetQuaternion(qB);\n\
// LOG RESULT\n\
Application.LogMessage(\"Q(\" + qB.w + \",\" + qB.x + \",\" + qB.y + \",\" + qB.z);	\n\
// Verify result by creating a child on A and transform it to\n\
// have the same orientation as B\n\
var oChild = A.AddNull(\"Child\");\n\
var lksChild = oChild.Kinematics.Local;\n\
var tlChild = XSIMath.CreateTransform();\n\
tlChild.SetRotationFromQuaternion(qB);\n\
lksChild.Transform = tlChild;\n\
// Expected results:\n\
// INFO : Q(0.9238795325112867,0,0,-0.3826834323650898</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/SIMatrix3.SetFromQuaternion.html\">SIMatrix3.SetFromQuaternion</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";