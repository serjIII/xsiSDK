var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>NurbsCurveList.Get2</title>\n\
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
            <h1>NurbsCurveList.Get2</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/NurbsCurveList.html\">NurbsCurveList</a>.Get2 <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns a complete data description of the Nurbs Curve list.\n\
The data is returned in a 1-dimensional array and is ordered the same as for\n\
the <a href=\"#!/url=./si_om/NurbsCurveList.Get.html\">NurbsCurveList.Get</a> method output arguments. \n\
<br /><br />\n\
Note: This method must be used with scripting languages that don\'t support arguments passed by reference \n\
such as JScript and PerlScript. For more information on getting output arguments, see \n\
<a href=\"#!/url=./files/OutputArgArrays.htm\">About Output Argument Arrays</a>.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Object NurbsCurveList.Get2( siNurbsFormat in_eNurbsFormat );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oArray = NurbsCurveList.Get2( [NurbsFormat] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./files/Array.htm\">Array</a> ordered as Count, ControlPoints, NbControlPoints, Knots, \n\
NbKnots, Closed, Degree, Parameterization.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">NurbsFormat		</td>\n\
		<td><a href=\"#!/url=./si_om/siNurbsFormat.html\">siNurbsFormat</a>		</td>\n\
		<td>\n\
 Specifies how the data is formatted. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siSINurbs			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
This example shows how to retrieve the output arguments returned by\n\
NurbsCurveList.Get2\n\
*/\n\
var oRoot = Application.ActiveProject.ActiveScene.Root;\n\
var oText = oRoot.AddGeometry( \"Text\", \"NurbsCurve\" );\n\
oText.text = \"b\";\n\
// convert VB array to JScript array\n\
var vbArgs = new VBArray(oText.ActivePrimitive.Geometry.Get2( siSINurbs ));\n\
var args = vbArgs.toArray();\n\
// Number of curves\n\
LogMessage(\"number of curves: \" + args[0] );\n\
// Number of control points per curve\n\
var vbArg6 = new VBArray(args[2]);\n\
var ncpoints = vbArg6.toArray();\n\
for (i = 0; i &lt; ncpoints.length; i++)\n\
{\n\
LogMessage(\"number of control points for curve \" + i + \": \" + ncpoints[i] );\n\
}\n\
// Control points\n\
var vbArg1 = new VBArray(args[1]);\n\
var cp = vbArg1.toArray();\n\
for ( i=0; i&lt;cp.length; i++ )\n\
{\n\
for ( j=0, k=0; k&lt;cp[i]; k++, j+=4 )\n\
{\n\
LogMessage(\"crv\" + i + \"[\" + k + \"]: \" + cp[j] + \", \" + cp[j+1] + \", \" + cp[j+2] + \", \" + cp[j+3] );\n\
}\n\
}\n\
// Number of knots per curve\n\
var vbArg7 = new VBArray(args[4]);\n\
var nknots = vbArg7.toArray();\n\
for (i = 0; i &lt; nknots.length; i++)\n\
{\n\
LogMessage(\"number of knots for curve \" + i + \": \" + nknots[i] );\n\
}\n\
// Knots\n\
var vbArg2 = new VBArray(args[3]);\n\
var knots = vbArg2.toArray();\n\
for ( j=0; j&lt;knots.length; j++)\n\
{\n\
for (i = 0; i &lt; nknots[j]; i++)\n\
{\n\
LogMessage(\"crv\" + j + \": \" + \"knots\" + i + \": \" + knots[i] );\n\
}\n\
}\n\
// get nurbs curves closed state\n\
var vbArg3 = new VBArray(args[5]);\n\
var closes = vbArg3.toArray();\n\
for (i = 0; i &lt; closes.length; i++)\n\
{\n\
LogMessage(\"curve\" + i + \" closed: \" + closes[i] );\n\
}\n\
// get nurbs degree\n\
var vbArg4 = new VBArray(args[6]);\n\
var degrees = vbArg4.toArray();\n\
for (i = 0; i &lt; degrees.length; i++)\n\
{\n\
LogMessage(\"curve\" + i + \" degree: \" + degrees[i] );\n\
}\n\
// get nurbs parameterization\n\
var vbArg5 = new VBArray(args[7]);\n\
var params = vbArg5.toArray();\n\
for (i = 0; i &lt; params.length; i++)\n\
{\n\
LogMessage(\"curve\" + i + \" parameterization: \" + params[i] );\n\
}\n\
// Expected result:\n\
//INFO : number of curves: 2\n\
//INFO : number of control points for curve 0: 26\n\
//INFO : number of control points for curve 1: 16\n\
//INFO : crv0[0]: 0.8072018004501126, 0, 0, 1\n\
//INFO : crv0[1]: 0.8072018004501126, 0.1785915228807202, 0, 1\n\
//INFO : crv0[2]: 0.8072018004501126, 0.3571830457614404, 0, 1\n\
//INFO : crv0[3]: 1.0946642910727682, -0.06301575393848462, 0, 1\n\
//INFO : crv0[4]: 1.5996811702925732, -0.06301575393848462, 0, 1\n\
//INFO : crv0[5]: 2.1074174793698423, -0.06301575393848462, 0, 1\n\
//INFO : crv0[6]: 2.470062828207052, 0.3369748687171793, 0, 1\n\
//INFO : crv0[7]: 2.8327081770442612, 0.7369654913728433, 0, 1\n\
//INFO : crv0[8]: 2.8327081770442612, 1.4698049512378095, 0, 1\n\
//INFO : crv0[9]: 2.8327081770442612, 1.7785071267816954, 0, 1\n\
//INFO : crv0[10]: 2.7467882595648913, 2.049653038259565, 0, 1\n\
//INFO : crv0[11]: 2.6608683420855214, 2.3207989497374344, 0, 1\n\
//INFO : crv0[12]: 2.509166354088522, 2.5127297449362342, 0, 1\n\
//INFO : crv0[13]: 2.357464366091523, 2.7046605401350336, 0, 1\n\
//INFO : crv0[14]: 2.122538447111778, 2.8106948612153037, 0, 1\n\
//INFO : crv0[15]: 1.887612528132033, 2.916729182295574, 0, 1\n\
//INFO : crv0[16]: 1.624531132783196, 2.916729182295574, 0, 1\n\
//INFO : crv0[17]: 1.1492873218304575, 2.916729182295574, 0, 1\n\
//INFO : crv0[18]: 0.8432108027006752, 2.533992873218305, 0, 1\n\
//INFO : crv0[19]: 0.8432108027006752, 3.23548855963991, 0, 1\n\
//INFO : crv0[20]: 0.8432108027006752, 3.9369842460615154, 0, 1\n\
//INFO : crv0[21]: 0.6016504126031508, 3.9369842460615154, 0, 1\n\
//INFO : crv0[22]: 0.36009002250562644, 3.9369842460615154, 0, 1\n\
//INFO : crv0[23]: 0.36009002250562644, 1.9684921230307577, 0, 1\n\
//INFO : crv0[24]: 0.36009002250562644, 0, 0, 1\n\
//INFO : crv0[25]: 0.5836459114778695, 0, 0, 1\n\
//INFO : crv1[0]: 0.8072018004501126, 0, 0, 1\n\
//INFO : crv1[1]: 0.8072018004501126, 0.1785915228807202, 0, 1\n\
//INFO : crv1[2]: 0.8072018004501126, 0.3571830457614404, 0, 1\n\
//INFO : crv1[3]: 1.0946642910727682, -0.06301575393848462, 0, 1\n\
//INFO : crv1[4]: 1.5996811702925732, -0.06301575393848462, 0, 1\n\
//INFO : crv1[5]: 2.1074174793698423, -0.06301575393848462, 0, 1\n\
//INFO : crv1[6]: 2.470062828207052, 0.3369748687171793, 0, 1\n\
//INFO : crv1[7]: 2.8327081770442612, 0.7369654913728433, 0, 1\n\
//INFO : crv1[8]: 2.8327081770442612, 1.4698049512378095, 0, 1\n\
//INFO : crv1[9]: 2.8327081770442612, 1.7785071267816954, 0, 1\n\
//INFO : crv1[10]: 2.7467882595648913, 2.049653038259565, 0, 1\n\
//INFO : crv1[11]: 2.6608683420855214, 2.3207989497374344, 0, 1\n\
//INFO : crv1[12]: 2.509166354088522, 2.5127297449362342, 0, 1\n\
//INFO : crv1[13]: 2.357464366091523, 2.7046605401350336, 0, 1\n\
//INFO : crv1[14]: 2.122538447111778, 2.8106948612153037, 0, 1\n\
//INFO : crv1[15]: 1.887612528132033, 2.916729182295574, 0, 1\n\
//INFO : number of knots for curve 0: 27\n\
//INFO : number of knots for curve 1: 17\n\
//INFO : crv0: knots0: 0\n\
//INFO : crv0: knots1: 0\n\
//INFO : crv0: knots2: 1\n\
//INFO : crv0: knots3: 1\n\
//INFO : crv0: knots4: 2\n\
//INFO : crv0: knots5: 2\n\
//INFO : crv0: knots6: 3\n\
//INFO : crv0: knots7: 3\n\
//INFO : crv0: knots8: 4\n\
//INFO : crv0: knots9: 4\n\
//INFO : crv0: knots10: 5\n\
//INFO : crv0: knots11: 5\n\
//INFO : crv0: knots12: 6\n\
//INFO : crv0: knots13: 6\n\
//INFO : crv0: knots14: 7\n\
//INFO : crv0: knots15: 7\n\
//INFO : crv0: knots16: 8\n\
//INFO : crv0: knots17: 8\n\
//INFO : crv0: knots18: 9\n\
//INFO : crv0: knots19: 9\n\
//INFO : crv0: knots20: 10\n\
//INFO : crv0: knots21: 10\n\
//INFO : crv0: knots22: 11\n\
//INFO : crv0: knots23: 11\n\
//INFO : crv0: knots24: 12\n\
//INFO : crv0: knots25: 12\n\
//INFO : crv0: knots26: 13\n\
//INFO : crv1: knots0: 0\n\
//INFO : crv1: knots1: 0\n\
//INFO : crv1: knots2: 1\n\
//INFO : crv1: knots3: 1\n\
//INFO : crv1: knots4: 2\n\
//INFO : crv1: knots5: 2\n\
//INFO : crv1: knots6: 3\n\
//INFO : crv1: knots7: 3\n\
//INFO : crv1: knots8: 4\n\
//INFO : crv1: knots9: 4\n\
//INFO : crv1: knots10: 5\n\
//INFO : crv1: knots11: 5\n\
//INFO : crv1: knots12: 6\n\
//INFO : crv1: knots13: 6\n\
//INFO : crv1: knots14: 7\n\
//INFO : crv1: knots15: 7\n\
//INFO : crv1: knots16: 8\n\
//INFO : curve0 closed: true\n\
//INFO : curve1 closed: true\n\
//INFO : curve0 degree: 2\n\
//INFO : curve1 degree: 2\n\
//INFO : curve0 parameterization: 1\n\
//INFO : curve1 parameterization: 1</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/NurbsCurveList.Get.html\">NurbsCurveList.Get</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";