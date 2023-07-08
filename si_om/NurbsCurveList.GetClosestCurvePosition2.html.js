var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>NurbsCurveList.GetClosestCurvePosition2</title>\n\
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
            <h1>NurbsCurveList.GetClosestCurvePosition2</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/NurbsCurveList.html\">NurbsCurveList</a>.GetClosestCurvePosition2 <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns the curve index, position of the point on it, U value and squared distance\n\
from the given position. The data is returned in a 1-dimensional array and is ordered \n\
the same as for the <a href=\"#!/url=./si_om/NurbsCurveList.GetClosestCurvePosition.html\">NurbsCurveList.GetClosestCurvePosition</a> method \n\
output arguments.  \n\
<br /><br />\n\
Note: This method must be used with scripting languages that don\'t support arguments passed by reference \n\
such as JScript and PerlScript. For more information on getting output arguments, see \n\
<a href=\"#!/url=./files/OutputArgArrays.htm\">About Output Argument Arrays</a>.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Object NurbsCurveList.GetClosestCurvePosition2( Object in_vPosition );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oArray = NurbsCurveList.GetClosestCurvePosition2( Position );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./files/Array.htm\">Array</a> containing the curve index (<a href=\"#!/url=./files/Long.htm\">Long</a>), squared distance \n\
from the given position (<a href=\"#!/url=./files/Double.htm\">Double</a>), U value (<a href=\"#!/url=./files/Double.htm\">Double</a>) and the \n\
position of the point on the curve (<a href=\"#!/url=./si_om/SIVector3.html\">SIVector3</a>).\n\
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
		<td class=\"name\">Position		</td>\n\
		<td><a href=\"#!/url=./si_om/SIVector3.html\">SIVector3</a> or 1D <a href=\"#!/url=./files/Array.htm\">Array</a> of 3 elements		</td>\n\
		<td>\n\
A position expressed in the NurbsCurveList object frame of reference.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// This example shows how to retrieve the control points returned by\n\
// NurbsSurface.GetClosestSurfacePosition2\n\
var oRoot = Application.ActiveProject.ActiveScene.Root;\n\
var oArc = oRoot.AddGeometry( \"Arc\", \"NurbsCurve\" );\n\
// Translate the sphere\n\
oArc.Kinematics.Global.Parameters(\"posx\").value = oArc.Kinematics.Global.Parameters(\"posx\").value + 13;\n\
var oPosition = XSIMath.CreateVector3();\n\
oPosition.Set( 0.0, 0.0, 0.0 );\n\
// convert VB array to JScript array\n\
var vbArgs = new VBArray(oArc.ActivePrimitive.Geometry.GetClosestCurvePosition2(oPosition));\n\
var args = vbArgs.toArray();\n\
LogMessage( \"The origin is closest to curve : \" + args[0] + \" its distance from it is \" + Math.sqrt(args[1]) );\n\
LogMessage( \"The U values are U : \" + args[2] );\n\
LogMessage( \"The corresponding position is X: \" + args[3].X + \" Y: \" + args[3].Y + \" Z: \" + args[3].Z );</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to work with curve lists. Of particular\n\
	interest is how to use the (object model) equivalents of EvaluateCurveAt.\n\
*/\n\
NewScene( null, false );\n\
// Create a NurbsCurveList\n\
var oSpine = SICreateCurve( \"crvlist\", 3, 0 );\n\
SIAddPointOnCurveAtEnd( \"crvlist\", -10, 0, -3, false, 0 );\n\
SIAddPointOnCurveAtEnd( \"crvlist\", 10, 0, -3, false, 0 );\n\
var oUKnots = oSpine.ActivePrimitive.Geometry.Curves(0).Knots \n\
LogMessage( \"Start Knot \" + oUKnots.item(0 ) )\n\
LogMessage( \"End Knot \" + oUKnots.item( oUKnots.Count - 1 ) )\n\
var xxx = 0;\n\
var vP = XSIMath.CreateVector3();\n\
var n;\n\
for ( var i=-10; i&lt;=10; i+=0.2 ) {\n\
	LogMessage( \"----------------\" );\n\
	vP.Set( i,0,-3 );\n\
	var Args = oSpine .ActivePrimitive.Geometry.GetClosestCurvePosition2( vP ).toArray();\n\
	uClosest = Args[2];\n\
	var atmp = oSpine.ActivePrimitive.Geometry.Curves( 0 ).EvaluatePosition( uClosest ).toArray();\n\
	LogMessage( \"Closest U Value \" + uClosest )\n\
	var ZeValues = atmp[0]\n\
	LogMessage( ZeValues.x );\n\
	// this is the null that corresponds to the closest point found\n\
	n = ActiveSceneRoot.AddNull();\n\
	n.Kinematics.Global.Parameters( \"posx\" ).Value = ZeValues.x;\n\
	// parallel null\n\
	n = ActiveSceneRoot.AddNull();\n\
	n.Kinematics.Global.Parameters( \"posx\" ).Value = i;\n\
	n.Kinematics.Global.Parameters( \"posy\" ).Value = -3;\n\
	// this value steadily increases!!!\n\
	DiffFromLast = uClosest - xxx;\n\
	LogMessage( uClosest + \" diff from last: \" + DiffFromLast );\n\
	xxx = uClosest;\n\
}\n\
// output:\n\
//INFO : Start Knot 0\n\
//INFO : End Knot 1\n\
//INFO : ----------------\n\
//INFO : Closest U Value 0\n\
//INFO : -10\n\
//INFO : 0 diff from last: 0\n\
//INFO : ----------------\n\
//INFO : Closest U Value 0.0033442415690163336\n\
//INFO : -9.80001579492262\n\
//INFO : 0.0033442415690163336 diff from last: 0.0033442415690163336\n\
//INFO : ----------------\n\
//INFO : Closest U Value 0.006710593551987059\n\
//INFO : -9.60006026699216\n\
//INFO : 0.006710593551987059 diff from last: 0.0033663519829707257\n\
//INFO : ----------------\n\
//		etc.\n\
//INFO : ----------------\n\
//INFO : Closest U Value 0.7842420051901503\n\
//INFO : 9.79912278091057\n\
//INFO : 0.7842420051901503 diff from last: 0.05569420207796605\n\
//INFO : ----------------\n\
//INFO : Closest U Value 0.999999999999987\n\
//INFO : 10\n\
//INFO : 0.999999999999987 diff from last: 0.2157579948098367</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/NurbsCurveList.GetClosestCurvePosition.html\">NurbsCurveList.GetClosestCurvePosition</a> <a href=\"#!/url=./si_om/NurbsCurve.EvaluatePosition.html\">NurbsCurve.EvaluatePosition</a> <a href=\"#!/url=./si_cmds/EvaluateCurveAt.html\">EvaluateCurveAt</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";