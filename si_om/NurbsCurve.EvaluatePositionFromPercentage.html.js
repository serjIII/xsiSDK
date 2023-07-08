var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>NurbsCurve.EvaluatePositionFromPercentage</title>\n\
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
            <h1>NurbsCurve.EvaluatePositionFromPercentage</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/NurbsCurve.html\">NurbsCurve</a>.EvaluatePositionFromPercentage <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns a 3D vector containing the position, tangent in U direction, \n\
normal and bi-normal at a given percentage along the curve. \n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Object NurbsCurve.EvaluatePositionFromPercentage( Double in_dPercentage );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oArray = NurbsCurve.EvaluatePositionFromPercentage( Percentage );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>A 1-dimensional <a href=\"#!/url=./files/Array.htm\">Array</a> containing the position, tangent, normal and bi-normal.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Percentage		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
The percentange (with values between 0.0 and 100.0 inclusive) of the length of the curve at which we want to evaluate the curve.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">set oRoot = Application.ActiveProject.ActiveScene.Root\n\
set oArc = oRoot.AddGeometry( \"Arc\", \"NurbsCurve\" )\n\
aValues = oArc.ActivePrimitive.Geometry.Curves(0).EvaluatePositionFromPercentage( 70.0 )\n\
set oPosition = aValues(0)\n\
logmessage \"The position at 70%% of the curve is x :\" &amp;  oPosition.x	&amp; \" y: \" &amp; oPosition.y &amp; \" z: \" &amp; oPosition.z\n\
set oUTangent = aValues(1)\n\
logmessage \"The tangent in U at 70%% of the curve is x :\" &amp; oUTangent.x &amp; \" y: \" &amp; oUTangent.y &amp; \" z: \" &amp; oUTangent.z\n\
set oNormal = aValues(2)\n\
logmessage \"The normal at 70%% of the curve is x :\" &amp; oNormal.x &amp; \" y: \" &amp; oNormal.y &amp; \" z: \" &amp; oNormal.z\n\
set oBiNormal = aValues(3)\n\
logmessage \"The bi-normal at 70%% of the curve is x :\" &amp; oBiNormal.x &amp; \" y: \" &amp; oBiNormal.y &amp; \" z: \" &amp; oBiNormal.z</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">SICreateCurve(\"crvlist\", 3, 0);\n\
SIAddPointOnCurveAtEnd(\"crvlist\", -3.951, 0.000, 1.651, false);\n\
SIAddPointOnCurveAtEnd(\"crvlist\", -3.214, 0.000, -1.884, false);\n\
SIAddPointOnCurveAtEnd(\"crvlist\", -0.592, 0.000, 1.146, false);\n\
SIAddPointOnCurveAtEnd(\"crvlist\", 1.660, 0.000, 2.856, false);\n\
SIAddPointOnCurveAtEnd(\"crvlist\", 3.272, 0.000, -1.224, false);\n\
GetNurbsCurveListInfo( GetValue(\"crvlist\") );\n\
function GetNurbsCurveListInfo( oCurveList )\n\
{\n\
	var oPosition, oUTangent, oNormal, oBiNormal;\n\
	var p = XSIMath.CreateVector3();\n\
	oGeometry = oCurveList.ActivePrimitive.Geometry;\n\
	// Display curve list info\n\
	LogMessage( \"    Name: \" + oCurveList.Name );\n\
	LogMessage( \"FullName: \" + oCurveList.FullName );\n\
	LogMessage( \"    Type: \" + oCurveList.Type );\n\
	// Display geometry info:\n\
	LogMessage( \"      Length: \" + oGeometry.Length );\n\
	LogMessage( \"      Closed: \" + oGeometry.Closed );\n\
	LogMessage( \"   Nb Points: \" + oGeometry.Points.Count );\n\
	LogMessage( \"  Nb Control: \" + oGeometry.ControlPoints.Count );\n\
	LogMessage( \"   Nb Curves: \" + oGeometry.Curves.Count );\n\
	LogMessage( \"   Nb Facets: \" + oGeometry.Facets.Count );\n\
	LogMessage( \" Nb Segments: \" + oGeometry.Segments.Count );\n\
	LogMessage( \" Nb Clusters: \" + oGeometry.Clusters.Count );\n\
	LogMessage( \"Nb Triangles: \" + oGeometry.Triangles.Count ); //crashes Softimage\n\
	// Get the lower-level stuff\n\
	for ( i = 0; i &lt; oGeometry.Curves.Count; i++ ) \n\
	{\n\
		LogMessage( \"--- Curve[\"+i+\"] ---\" );\n\
		oCurve = oGeometry.Curves(i);\n\
		// Find the midpont along the curve\n\
		var aValues = new VBArray(oCurve.EvaluatePositionFromPercentage( 50.0 ));\n\
		var oPosition = aValues.getItem(0);\n\
		var oUTangent = aValues.getItem(1);\n\
		var oNormal = aValues.getItem(2);\n\
		var oBiNormal = aValues.getItem(3);\n\
		LogMessage( \" Position[x,y,z]: \" + oPosition.x +\",\"+ oPosition.y +\",\"+ oPosition.z );\n\
		LogMessage( \"U Tangent[x,y,z]: \" + oUTangent.x +\",\"+ oUTangent.y +\",\"+ oUTangent.z );\n\
		LogMessage( \"   Normal[x,y,z]: \" + oNormal.x   +\",\"+ oNormal.y +\",\"+ oNormal.z   );\n\
		LogMessage( \"Bi Normal[x,y,z]: \" + oBiNormal.x +\",\"+ oBiNormal.y +\",\"+ oBiNormal.z );\n\
		// Display the info\n\
		LogMessage( \"   Nb Knots: \" + oCurve.Knots.Count );\n\
		LogMessage( \"   Degree: \"   + oCurve.Degree      );\n\
	}\n\
	return(0);\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/NurbsCurve.GetPercentageFromU.html\">NurbsCurve.GetPercentageFromU</a> <a href=\"#!/url=./si_om/NurbsCurve.GetUFromPercentage.html\">NurbsCurve.GetUFromPercentage</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";