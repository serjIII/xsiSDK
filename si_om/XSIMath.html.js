var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSIMath</title>\n\
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
            <h1>XSIMath</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">XSIMath</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_XSIMath\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/namespaceXSI_1_1MATH.html\">XSIMATH</a></p>\n\
\n\
<h3>Description</h3>\n\
<div><p> XSIMath is an intrinsic object that provides basic 3D mathematics functionality. An \n\
intrinsic object is one that you can refer to by name in your code without creating \n\
an instance of it first. The scripting engine creates the XSIMath object when the \n\
engine is loaded. All of its methods and properties are available to your script at \n\
all times. <br /><br />\n\
This object is designed to allow scripters to easily create Math objects, including <a href=\"#!/url=./si_om/SIVector3.html\">SIVector3</a>, \n\
<a href=\"#!/url=./si_om/SIMatrix3.html\">SIMatrix3</a>, <a href=\"#!/url=./si_om/SIMatrix4.html\">SIMatrix4</a>,  <a href=\"#!/url=./si_om/SITransformation.html\">SITransformation</a>,\n\
<a href=\"#!/url=./si_om/SIRotation.html\">SIRotation</a> and <a href=\"#!/url=./si_om/SIQuaternion.html\">SIQuaternion</a>.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIMath.CreateMatrix3.html\">CreateMatrix3</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIMath.CreateMatrix4.html\">CreateMatrix4</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIMath.CreateQuaternion.html\">CreateQuaternion</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIMath.CreateRotation.html\">CreateRotation</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIMath.CreateTransform.html\">CreateTransform</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIMath.CreateVector3.html\">CreateVector3</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIMath.DegreesToRadians.html\">DegreesToRadians</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIMath.MapObjectOrientationToObjectSpace.html\">MapObjectOrientationToObjectSpace</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIMath.MapObjectOrientationToWorldSpace.html\">MapObjectOrientationToWorldSpace</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIMath.MapObjectPoseToObjectSpace.html\">MapObjectPoseToObjectSpace</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIMath.MapObjectPoseToWorldSpace.html\">MapObjectPoseToWorldSpace</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIMath.MapObjectPositionToObjectSpace.html\">MapObjectPositionToObjectSpace</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIMath.MapObjectPositionToWorldSpace.html\">MapObjectPositionToWorldSpace</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIMath.MapWorldOrientationToObjectSpace.html\">MapWorldOrientationToObjectSpace</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIMath.MapWorldPoseToObjectSpace.html\">MapWorldPoseToObjectSpace</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIMath.MapWorldPositionToObjectSpace.html\">MapWorldPositionToObjectSpace</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIMath.RadiansToDegrees.html\">RadiansToDegrees</a>		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIMath.PI.html\">PI</a>		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">Dim v3 \n\
set v3 = XSIMath.CreateVector3(10.0, 10.0, 10.0)\n\
v3.ScaleInPlace 2\n\
Application.LogMessage join( v3.get2, \", \" )\n\
\'Output:\n\
\'INFO : 20, 20, 20</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">var v3 = XSIMath.CreateVector3( 10.0, 10.0, 10.0 ) ;\n\
v3.ScaleInPlace( 2 ) ;\n\
Application.LogMessage( v3.x +\", \"+v3.y+\", \"+v3.z ) ;\n\
//Output:\n\
//INFO : 20, 20, 20</pre></td></tr>\n\
</table>\n\
</div><h4>3. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
# This example demonstrates how to create and manipulate an SIVector3\n\
# object in Python.\n\
#\n\
Application.NewScene( \"\", False )\n\
v3 = XSIMath.CreateVector3(10.0, 20.0, 30.0) \n\
v3.ScaleInPlace(2) \n\
x=y=z=0 \n\
x, y, z = v3.Get(x,y,z) \n\
Application.LogMessage( \'%(x).2f %(y).2f %(z).2f\' % vars() ) \n\
# Output of above script:\n\
#INFO : 20.00 40.00 60.00</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/XSIRound.html\">XSIRound</a> <a href=\"#!/url=./si_om/Geometry.GetBoundingBox.html\">Geometry.GetBoundingBox</a> <a href=\"#!/url=./si_om/Kinematics.html\">Kinematics</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";