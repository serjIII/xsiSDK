var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>FCurveKey.Locked</title>\n\
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
            <h1>FCurveKey.Locked</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/FCurveKey.html\">FCurveKey</a>.Locked</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Sets or returns the locked state of the <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a> key as a <a href=\"#!/url=./files/Boolean.htm\">Boolean</a>.<br /><br />\n\
Setting this property may raise an \"Access Denied\" error. See more information in the FCurveKey object description.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Boolean rtn = FCurveKey.Locked;\n\
// set accessor\n\
FCurveKey.Locked = Boolean;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example displays the properties of an fcurve\'s keys\n\
*/\n\
NewScene( null, false );\n\
var oCube = Application.ActiveSceneRoot.AddGeometry( \"Cube\",\"MeshSurface\" );\n\
var aValues = new Array( 0,5, 1,6, 2,7, 3,8, 4,9, 5,10 );\n\
var oFCurve = oCube.PosX.AddFCurve2( aValues );\n\
// Write the fcurve keys\n\
for ( var k=0; k&lt;oFCurve.Keys.Count; k++ ) {\n\
	var fckey = oFCurve.Keys(k);\n\
	Application.LogMessage( fckey.Name + \" Value: \" + fckey.Value );\n\
	Application.LogMessage( fckey.Name + \" Locked: \" + fckey.Locked );\n\
	Application.LogMessage( fckey.Name + \" Left: \" + fckey.Left );\n\
	Application.LogMessage( fckey.Name + \" Right: \" + fckey.Right );\n\
	Application.LogMessage( fckey.Name + \" LeftTanX: \" + fckey.LeftTanX );\n\
	Application.LogMessage( fckey.Name + \" LeftTanY: \" + fckey.LeftTanY );\n\
	Application.LogMessage( fckey.Name + \" RightTanX: \" + fckey.RightTanX );\n\
	Application.LogMessage( fckey.Name + \" RightTanY: \" + fckey.RightTanY );\n\
	Application.LogMessage( fckey.Name + \" Interpolation: \" + fckey.Interpolation );\n\
	Application.LogMessage( fckey.Name + \" Constraint(siParameterConstraint): \" + fckey.Constraint(siParameterConstraint) );\n\
	Application.LogMessage( fckey.Name + \" Time: \" + fckey.Time );\n\
}\n\
// Expected results:\n\
//INFO :  Value: 5\n\
//INFO :  Locked: false\n\
//INFO :  Left: 5\n\
//INFO :  Right: 5\n\
//INFO :  LeftTanX: -0.3333333333333333\n\
//INFO :  LeftTanY: 0\n\
//INFO :  RightTanX: 0.3333333333333333\n\
//INFO :  RightTanY: 0\n\
//INFO :  Interpolation: 3\n\
//INFO :  Constraint(siParameterConstraint): false\n\
//INFO :  Time: 0\n\
//INFO :  Value: 6\n\
//\n\
//INFO :  Locked: false\n\
//INFO :  Left: 6\n\
//INFO :  Right: 6\n\
//INFO :  LeftTanX: -0.33333333333333326\n\
//INFO :  LeftTanY: -0.33333333333333303\n\
//INFO :  RightTanX: 0.33333333333333326\n\
//INFO :  RightTanY: 0.33333333333333303\n\
//INFO :  Interpolation: 3\n\
//INFO :  Constraint(siParameterConstraint): false\n\
//INFO :  Time: 1\n\
// etc.</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example displays the properties of an fcurve\'s keys\n\
\'\n\
NewScene , false\n\
set oCube = Application.ActiveSceneRoot.AddGeometry(\"Cube\",\"MeshSurface\")\n\
dim aValues\n\
aValues = array(0.00, 5.00, 1.00, 6.00, 2.00, 7.00, 3.00, 8.00, 4.00, 9.00, 5.00, 10.00)\n\
set oFCurve = oCube.PosX.AddFCurve2( aValues)\n\
\' Write the fcurve keys\n\
for each k in oFCurve.Keys\n\
	Application.LogMessage k.Name &amp;\" Value: \" &amp; k.Value\n\
	Application.LogMessage k.Name &amp;\" Locked: \" &amp; k.Locked\n\
	Application.LogMessage k.Name &amp;\" Left: \" &amp; k.Left\n\
	Application.LogMessage k.Name &amp;\" Right: \" &amp; k.Right\n\
	Application.LogMessage k.Name &amp;\" LeftTanX: \" &amp; k.LeftTanX\n\
	Application.LogMessage k.Name &amp;\" LeftTanY: \" &amp; k.LeftTanY\n\
	Application.LogMessage k.Name &amp;\" RightTanX: \" &amp; k.RightTanX\n\
	Application.LogMessage k.Name &amp;\" RightTanY: \" &amp; k.RightTanY\n\
	Application.LogMessage k.Name &amp;\" Interpolation: \" &amp; k.Interpolation\n\
	Application.LogMessage k.Name &amp;\" Constraint(siParameterConstraint): \" &amp; k.Constraint(siParameterConstraint)\n\
	Application.LogMessage k.Name &amp;\" Time: \" &amp; k.Time\n\
next\n\
\' Expected results:\n\
\'INFO :  Value: 5\n\
\'INFO :  Locked: False\n\
\'INFO :  Left: 5\n\
\'INFO :  Right: 5\n\
\'INFO :  LeftTanX: -0.333333333333333\n\
\'INFO :  LeftTanY: 0\n\
\'INFO :  RightTanX: 0.333333333333333\n\
\'INFO :  RightTanY: 0\n\
\'INFO :  Interpolation: 3\n\
\'INFO :  Constraint(siParameterConstraint): False\n\
\'INFO :  Time: 0\n\
\'\n\
\'INFO :  Value: 6\n\
\'INFO :  Locked: False\n\
\'INFO :  Left: 6\n\
\'INFO :  Right: 6\n\
\'INFO :  LeftTanX: -0.333333333333333\n\
\'INFO :  LeftTanY: -0.333333333333333\n\
\'INFO :  RightTanX: 0.333333333333333\n\
\'INFO :  RightTanY: 0.333333333333333\n\
\'INFO :  Interpolation: 3\n\
\'INFO :  Constraint(siParameterConstraint): False\n\
\'INFO :  Time: 1\n\
\' etc.</pre></td></tr>\n\
</table>\n\
</div><h4>3. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
# This example displays the properties of an fcurve\'s keys\n\
#\n\
from win32com.client import constants as c\n\
Application.NewScene( \"\", 0 )\n\
oCube = Application.ActiveSceneRoot.AddGeometry( \"Cube\",\"MeshSurface\" )\n\
aValues = [ 0,5, 1,6, 2,7, 3,8, 4,9, 5,10 ]\n\
oFCurve = oCube.PosX.AddFCurve2( aValues )\n\
# Write the fcurve keys\n\
for fckey in oFCurve.Keys :\n\
	Application.LogMessage( fckey.Name + \" Value: \" + str(fckey.Value) )\n\
	Application.LogMessage( fckey.Name + \" Locked: \" + str(fckey.Locked) )\n\
	Application.LogMessage( fckey.Name + \" Left: \" + str(fckey.Left) )\n\
	Application.LogMessage( fckey.Name + \" Right: \" + str(fckey.Right) )\n\
	Application.LogMessage( fckey.Name + \" LeftTanX: \" + str(fckey.LeftTanX) )\n\
	Application.LogMessage( fckey.Name + \" LeftTanY: \" + str(fckey.LeftTanY) )\n\
	Application.LogMessage( fckey.Name + \" RightTanX: \" + str(fckey.RightTanX) )\n\
	Application.LogMessage( fckey.Name + \" RightTanY: \" + str(fckey.RightTanY) )\n\
	Application.LogMessage( fckey.Name + \" Interpolation: \" + str(fckey.Interpolation) )\n\
	Application.LogMessage( fckey.Name + \" Constraint(siParameterConstraint): \" + str(fckey.Constraint(c.siParameterConstraint)) )\n\
	Application.LogMessage( fckey.Name + \" Time: \" + str(fckey.Time) )\n\
# Expected results:\n\
#INFO :  Value: 5.0\n\
#INFO :  Locked: False\n\
#INFO :  Left: 5.0\n\
#INFO :  Right: 5.0\n\
#INFO :  LeftTanX: -0.333333333333\n\
#INFO :  LeftTanY: 0.0\n\
#INFO :  RightTanX: 0.333333333333\n\
#INFO :  RightTanY: 0.0\n\
#INFO :  Interpolation: 3\n\
#INFO :  Constraint(siParameterConstraint): False\n\
#INFO :  Time: 0.0\n\
#\n\
#INFO :  Value: 6.0\n\
#INFO :  Locked: False\n\
#INFO :  Left: 6.0\n\
#INFO :  Right: 6.0\n\
#INFO :  LeftTanX: -0.333333333333\n\
#INFO :  LeftTanY: -0.333333333333\n\
#INFO :  RightTanX: 0.333333333333\n\
#INFO :  RightTanY: 0.333333333333\n\
#INFO :  Interpolation: 3\n\
#INFO :  Constraint(siParameterConstraint): False\n\
#INFO :  Time: 1.0\n\
# etc.</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";