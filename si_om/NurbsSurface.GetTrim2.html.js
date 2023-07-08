var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>NurbsSurface.GetTrim2</title>\n\
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
            <h1>NurbsSurface.GetTrim2</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/NurbsSurface.html\">NurbsSurface</a>.GetTrim2 <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns a complete data description of a nurbs surface trim.\n\
A trim is a nurbs curve list that is projected on a nurbs surface.\n\
The data is returned in a 1-dimension array and is ordered the same as for\n\
the <a href=\"#!/url=./si_om/NurbsSurface.GetTrim.html\">NurbsSurface.GetTrim</a> method output arguments.  <br /><br />\n\
Note: This method must be used with scripting languages that don\'t support arguments passed by reference \n\
such as JScript and PerlScript. For more information on getting output arguments, see \n\
<a href=\"#!/url=./files/OutputArgArrays.htm\">About Output Argument Arrays</a>.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Object NurbsSurface.GetTrim2( Int32 in_nTrimIndex, siNurbsFormat in_eNurbsFormat );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oArray = NurbsSurface.GetTrim2( TrimIndex, [NurbsFormat] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./files/Array.htm\">Array</a> of values ordered as IsBoundary, ProjectionType, Count, ControlPoints, \n\
NbControlPoints, Knots, NbKnots, Closed, Degree, Parameterization</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">TrimIndex		</td>\n\
		<td><a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
 Specifies which trim must be described. 		</td>\n\
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
<td class=\"example\"><pre class=\"jscript\">// JScript example : shows how to retrieve the output arguments returned by NurbsSurface.GetTrim2\n\
// Create a sphere with some trims first\n\
CreatePrim(\"Sphere\", \"NurbsSurface\", null, null);\n\
CreatePrim(\"Square\", \"NurbsCurve\", null, null);\n\
Scale(null, -0.325581395348837, 1, 1, siRelative, siLocal, siObj, siXYZ, null, null, null, null, null, null, null, 0);\n\
Scale(null, 1, 0.732558139534884, 1, siRelative, siLocal, siObj, siXYZ, null, null, null, null, null, null, null, 0);\n\
SelectObj(\"sphere\", null, true);\n\
ApplyTopoOp(\"TrimByProjection\", \"sphere;square\", 3, siPersistentOperation, null);\n\
// get the trimmed surface\n\
var surfs = Application.Selection(0).ActivePrimitive.Geometry.Surfaces;\n\
// get the first trim parameters and convert VB array to JScript array\n\
var vbArgs = new VBArray(surfs(0).GetTrim2( 0, siSINurbs ));\n\
var args = vbArgs.toArray();\n\
// get the bondary flag of curves\n\
LogMessage(\"trim is boundary?: \" + args[0] );\n\
// get the projection type\n\
LogMessage(\"projection type: \" + args[1] );\n\
// get the number of curves\n\
LogMessage(\"number of curves: \" + args[2] );\n\
// get the number of control points per curve\n\
var vbArg4 = new VBArray(args[4]);\n\
var ncpoints = vbArg4.toArray();\n\
for (i = 0; i &lt; args[2]; i++)\n\
{\n\
	LogMessage(\"number of control points for curve \" + i + \": \" + ncpoints[i] );\n\
}\n\
// get the control points\n\
var vbArg3 = new VBArray(args[3]);\n\
var cpts = vbArg3.toArray();\n\
for ( i=0; i&lt;ncpoints.length; i++ )\n\
{\n\
	for ( j=0, k=0; k&lt;ncpoints[i]; k++, j+=4 )\n\
	{\n\
		LogMessage(\"crv\" + i + \"[\" + k + \"]: \" + cpts[j] + \", \" + cpts[j+1] + \", \" + cpts[j+2] + \", \" + cpts[j+3] );\n\
	}\n\
}\n\
// get the number knots per curve\n\
var vbArg6 = new VBArray(args[6]);\n\
var nknots = vbArg6.toArray();\n\
for (i = 0; i &lt; nknots.length; i++)\n\
{\n\
	LogMessage(\"number of knots for curve \" + i + \": \" + nknots[i] );\n\
}\n\
// get the knots\n\
var vbArg5 = new VBArray(args[5]);\n\
var knots = vbArg5.toArray();\n\
for ( j=0; j&lt;nknots.length; j++)\n\
{\n\
	for (i = 0; i &lt; nknots[j]; i++)\n\
	{\n\
		LogMessage(\"crv\" + j + \": \" + \"knots\" + i + \": \" + knots[i] );\n\
	}\n\
}\n\
// get nurbs curves closeness state\n\
var vbArg7 = new VBArray(args[7]);\n\
var closes = vbArg7.toArray();\n\
for (i = 0; i &lt; closes.length; i++)\n\
{\n\
	LogMessage(\"curve\" + i + \" closeness: \" + closes[i] );\n\
}\n\
// get nurbs degree\n\
var vbArg8 = new VBArray(args[8]);\n\
var degrees = vbArg8.toArray();\n\
for (i = 0; i &lt; degrees.length; i++)\n\
{\n\
	LogMessage(\"curve\" + i + \" degree: \" + degrees[i] );\n\
}\n\
// get nurbs parameterization factor\n\
var vbArg9 = new VBArray(args[9]);\n\
var params = vbArg9.toArray();\n\
for (i = 0; i &lt; params.length; i++)\n\
{\n\
	LogMessage(\"curve\" + i + \" parameterization: \" + params[i] );\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/NurbsSurfaceMesh.AddSurfaceWithTrim.html\">NurbsSurfaceMesh.AddSurfaceWithTrim</a> <a href=\"#!/url=./si_om/NurbsSurface.GetTrim.html\">NurbsSurface.GetTrim</a> <a href=\"#!/url=./si_om/NurbsSurface.TrimCount.html\">NurbsSurface.TrimCount</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";