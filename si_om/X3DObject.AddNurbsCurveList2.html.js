var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>X3DObject.AddNurbsCurveList2</title>\n\
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
            <h1>X3DObject.AddNurbsCurveList2</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a>.AddNurbsCurveList2</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Creates a <a href=\"#!/url=./si_om/NurbsCurveList.html\">NurbsCurveList</a> object. This is typically used for creating a \n\
nurbs surface from a set of geometry data.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>X3DObject X3DObject.AddNurbsCurveList2( Object in_vsalCount, Object in_vsaControlPoints, Object in_vsaNbControlPoints, Object in_vsadKnots, Object in_vsaNbKnots, Object in_vsabClosed, Object in_vsalDegree, Object in_vsalParam, siNurbsFormat in_eNurbsFormat, String in_bstrName );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = X3DObject.AddNurbsCurveList2( Count, ControlPoints, [NbControlPoints], [Knots], [NbKnots], [Closed], [Degree], [Parameterization], [NurbsFormat], [Name] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns a <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> object holding the new geometry; the new X3DObject is parented under this X3DObject.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Count		</td>\n\
		<td><a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
Number of curves.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ControlPoints		</td>\n\
		<td>2D <a href=\"#!/url=./files/Array.htm\">Array</a>		</td>\n\
		<td>\n\
The control points are stored in a 2-dimensional array. The array is 4 x (number of U ControlPoints)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">NbControlPoints		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Long.htm\">Long</a>s		</td>\n\
		<td>\n\
Specifies the number of ControlPoints per NurbsCurve. Optional if there\'s only one <a href=\"#!/url=./si_om/NurbsCurve.html\">NurbsCurve</a>.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Knots		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Double.htm\">Double</a>s		</td>\n\
		<td>\n\
An array of knot values.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Knots derived from control points.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">NbKnots		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Long.htm\">Long</a>s		</td>\n\
		<td>\n\
Specifies the number of Knots per NurbsCurve. Optional if there\'s only one <a href=\"#!/url=./si_om/NurbsCurve.html\">NurbsCurve</a>.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Closed		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
Specifies whether the nurbs curve is closed .			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Degree		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Long.htm\">Long</a>s		</td>\n\
		<td>\n\
Degree of the nurbs curves.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
3			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Parameterization		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./si_om/siKnotParameterization.html\">siKnotParameterization</a>		</td>\n\
		<td>\n\
The parameterization factor of the nurbs curve.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siNonUniformParameterization			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">NurbsFormat		</td>\n\
		<td><a href=\"#!/url=./si_om/siNurbsFormat.html\">siNurbsFormat</a>		</td>\n\
		<td>\n\
Specifies how the data is formatted. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siSINurbs			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
name of object 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">NewScene , false\n\
dim aControlVertex(3,18), aKnots\n\
aControlVertex(0,0) = 2.44921270764475E-16\n\
aControlVertex(1,0) = 4\n\
aControlVertex(2,0) = 0\n\
aControlVertex(3,0) = 1\n\
aControlVertex(0,1) = 0.130925984580936\n\
aControlVertex(1,1) = 4\n\
aControlVertex(2,1) = 0\n\
aControlVertex(3,1) = 1\n\
aControlVertex(0,2) = 0.392686645860565\n\
aControlVertex(1,2) = 3.987138627451\n\
aControlVertex(2,2) = 0\n\
aControlVertex(3,2) = 1\n\
aControlVertex(0,3) = 0.781619130526076\n\
aControlVertex(1,3) = 3.92944824405423\n\
aControlVertex(2,3) = 0\n\
aControlVertex(3,3) = 1\n\
aControlVertex(0,4) = 1.16300456042221\n\
aControlVertex(1,4) = 3.83391512600961\n\
aControlVertex(2,4) = 0\n\
aControlVertex(3,4) = 1\n\
aControlVertex(0,5) = 1.53319488189217\n\
aControlVertex(1,5) = 3.70145930948035\n\
aControlVertex(2,5) = 0\n\
aControlVertex(3,5) = 1\n\
aControlVertex(0,6) = 1.88861828877126\n\
aControlVertex(1,6) = 3.53335641633986\n\
aControlVertex(2,6) = 0\n\
aControlVertex(3,6) = 1\n\
aControlVertex(0,7) = 2.22585364684673\n\
aControlVertex(1,7) = 3.33122536952072\n\
aControlVertex(2,7) = 0\n\
aControlVertex(3,7) = 1\n\
aControlVertex(0,8) = 2.54165271631229\n\
aControlVertex(1,8) = 3.09701280083833\n\
aControlVertex(2,8) = 0\n\
aControlVertex(3,8) = 1\n\
aControlVertex(0,9) = 2.83297430783163\n\
aControlVertex(1,9) = 2.83297430783163\n\
aControlVertex(2,9) = 0\n\
aControlVertex(3,9) = 1\n\
aControlVertex(0,10) = 3.09701280083833\n\
aControlVertex(1,10) = 2.54165271631228\n\
aControlVertex(2,10) = 0\n\
aControlVertex(3,10) = 1\n\
aControlVertex(0,11) = 3.33122536952073\n\
aControlVertex(1,11) = 2.22585364684672\n\
aControlVertex(2,11) = 0\n\
aControlVertex(3,11) = 1\n\
aControlVertex(0,12) = 3.53335641633986\n\
aControlVertex(1,12) = 1.88861828877126\n\
aControlVertex(2,12) = 0\n\
aControlVertex(3,12) = 1\n\
aControlVertex(0,13) = 3.70145930948036\n\
aControlVertex(1,13) = 1.53319488189217\n\
aControlVertex(2,13) = 0\n\
aControlVertex(3,13) = 1\n\
aControlVertex(0,14) = 3.83391512600961\n\
aControlVertex(1,14) = 1.16300456042221\n\
aControlVertex(2,14) = 0\n\
aControlVertex(3,14) = 1\n\
aControlVertex(0,15) = 3.92944824405423\n\
aControlVertex(1,15) = 0.781619130526073\n\
aControlVertex(2,15) = 0\n\
aControlVertex(3,15) = 1\n\
aControlVertex(0,16) = 3.987138627451\n\
aControlVertex(1,16) = 0.392686645860562\n\
aControlVertex(2,16) = 0\n\
aControlVertex(3,16) = 1\n\
aControlVertex(0,17) = 4\n\
aControlVertex(1,17) = 0.130925984580933\n\
aControlVertex(2,17) = 0\n\
aControlVertex(3,17) = 1\n\
aControlVertex(0,18) = 4\n\
aControlVertex(1,18) = -2.22044604925031E-15\n\
aControlVertex(2,18) = 0\n\
aControlVertex(3,18) = 1\n\
aKnots = Array( 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 16, 16  )\n\
set oRoot = Application.ActiveSceneRoot\n\
\' creates a nurbs curve list from the default values\n\
set oNurbsCurveList = oRoot.AddNurbsCurveList2(1,aControlVertex,,,,,,,siSINurbs,\"MyDefaultNurbsCurve\")\n\
\' creates a nurbs curve list from explicit values\n\
aKnots = Array( 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 16, 16  )\n\
set oNurbsCurveList2 = oRoot.AddNurbsCurveList2( _\n\
	1, aControlVertex, , _\n\
	aKnots, _\n\
	21, _\n\
	Array(True), _\n\
	Array(4), _\n\
	Array(siUniformParameterization), _\n\
	siSINurbs, _\n\
	\"MyExplicitNurbsCurve\")</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/NurbsCurve.html\">NurbsCurve</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";