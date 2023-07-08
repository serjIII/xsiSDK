var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SIMatrix3.SetFromQuaternion</title>\n\
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
            <h1>SIMatrix3.SetFromQuaternion</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/SIMatrix3.html\">SIMatrix3</a>.SetFromQuaternion</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v3.5</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>Sets the matrix3 using a rotation quaternion.</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SIMatrix3.SetFromQuaternion( SIQuaternion out_pVal );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SIMatrix3.SetFromQuaternion( q );</pre>		</td>	</tr>\n\
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
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example illustrates how to interpolate the pose of object C\n\
\' between objects A and B \n\
\'\n\
option explicit\n\
dim alpha : alpha = 0.25\n\
\' CREATE OBJECTS A &amp; B\n\
dim A : set A = ActiveSceneRoot.AddNull(\"A\")\n\
dim B : set B = ActiveSceneRoot.AddNull(\"B\")\n\
\' GET GLOBAL TRANSFORM OF A &amp; B\n\
dim gksA : set gksA = A.Kinematics.Global \n\
dim gksB : set gksB = B.Kinematics.Global \n\
dim tgA : set tgA = gksA.Transform\n\
dim tgB : set tgB = gksB.Transform\n\
\' TRANSLATE &amp; ROTATE A\n\
dim vA : set vA = XSIMath.CreateVector3(2, 2, 0)\n\
tgA.SetTranslation vA 		\n\
dim rA : set rA = XSIMath.CreateRotation( 0, 0, XSIMath.DegreesToRadians(45) )\n\
tgA.SetRotation rA \n\
gksA.Transform = tgA\n\
\' TRANSLATE &amp; ROTATE B\n\
dim vB : set vB = XSIMath.CreateVector3(-2, 2, 0)\n\
tgB.SetTranslation vB 		\n\
dim rB : set rB = XSIMath.CreateRotation( 0, 0, XSIMath.DegreesToRadians(-45) )\n\
tgB.SetRotation rB \n\
gksB.Transform = tgB\n\
\' GET ROTATION MATRIX OF A &amp; B\n\
dim mA : set mA = XSIMath.CreateMatrix3\n\
tgA.GetRotationMatrix3 mA\n\
dim mB : set mB = XSIMath.CreateMatrix3\n\
tgB.GetRotationMatrix3 mB\n\
\' DO A SLERP BETWEEN THE ROTATION MATRICES\n\
dim qA : set qA = XSIMath.CreateQuaternion\n\
mA.GetQuaternion qA\n\
dim qB : set qB = XSIMath.CreateQuaternion\n\
mB.GetQuaternion qB\n\
dim qC : set qC = XSIMath.CreateQuaternion\n\
qC.Slerp qA, qB, alpha \n\
\' DO A LINEAR INTERPOLATE OF POSITION\n\
dim vC : set vC = XSIMath.CreateVector3\n\
vC.LinearlyInterpolate vA, vB, alpha\n\
\' CREATE A NEW OBJECT AND SET ITS ROTATION \n\
\' AND TRANSLATE WITH INTERPOLATED RESULTS\n\
dim C : set C = ActiveSceneRoot.AddNull(\"C\")\n\
dim gksC : set gksC = C.Kinematics.Global \n\
dim tgC : set tgC = gksC.Transform\n\
dim mC : set mC = XSIMath.CreateMatrix3\n\
mC.SetFromQuaternion qC\n\
tgC.SetRotationFromMatrix3 mC\n\
tgC.SetTranslation vC\n\
gksC.Transform = tgC</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/SIMatrix3.GetQuaternion.html\">SIMatrix3.GetQuaternion</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";