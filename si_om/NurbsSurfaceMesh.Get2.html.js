var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>NurbsSurfaceMesh.Get2</title>\n\
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
            <h1>NurbsSurfaceMesh.Get2</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/NurbsSurfaceMesh.html\">NurbsSurfaceMesh</a>.Get2 <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns a complete data description of a NurbsSurfaceMesh. The data is \n\
returned in a 1-dimensional array and is ordered the same as for the \n\
<a href=\"#!/url=./si_om/NurbsSurfaceMesh.Get.html\">NurbsSurfaceMesh.Get</a> method output arguments. \n\
<br /><br />\n\
Note: This method must be used with scripting languages that don\'t support arguments passed by reference \n\
such as JScript and PerlScript. For more information on getting output arguments, see \n\
<a href=\"#!/url=./files/OutputArgArrays.htm\">About Output Argument Arrays</a>.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Object NurbsSurfaceMesh.Get2( siNurbsFormat in_eNurbsFormat );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oArray = NurbsSurfaceMesh.Get2( [NurbsFormat] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Variant.htm\">Variant</a>s ordered as Count, UVControlPoints, NbUControlPoints, \n\
NbVControlPoints, UKnots, NbUKnots, VKnots, NbVKnots, UClosed, VClosed, UDegree, \n\
VDegree, UParam, VParam.\n\
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
<td class=\"example\"><pre class=\"jscript\">// This example shows how to retrieve the output arguments returned by NurbsCurveList.Get2\n\
var oRoot = Application.ActiveProject.ActiveScene.Root;\n\
var oGrid = oRoot.AddGeometry( \"Grid\", \"NurbsSurface\" );\n\
oGrid.subdivu = 1;\n\
oGrid.subdivv = 1;\n\
Duplicate( \"grid\", null, 2, 1, 1, 0, 0, 1, 0, 1 );\n\
AddToSelection( \"grid,grid1\", null, 1 );\n\
SIAssembleNurbsMesh( null, 0.150, 0, 0, 1 );\n\
SelectObj( \"surfmsh\" );\n\
// convert VB array to JScript array\n\
var vbArgs = new VBArray(Selection(0).ActivePrimitive.Geometry.Get2( siSINurbs ));\n\
// get the number of surfaces\n\
numSurfs = vbArgs.getItem(0);\n\
LogMessage(\"number of surfaces: \" + numSurfs);\n\
// get the number of control points in U per surface\n\
var uncpts = vbArgs.getItem(2);\n\
uSize = uncpts.ubound(1)-uncpts.lbound(1)+1;\n\
for (i = 0; i &lt; uSize; i++) \n\
{\n\
	LogMessage(\"number of control points in U for surface \" + i + \": \" + uncpts.getItem(i) );\n\
}\n\
// get the number of control points in V per surface\n\
var vncpts = vbArgs.getItem(3)\n\
vSize = vncpts.ubound(1)-vncpts.lbound(1)+1;\n\
for (i = 0; i &lt; vSize; i++) \n\
{\n\
	LogMessage(\"number of control points in V for surface \" + i + \": \" + vncpts.getItem(i) );\n\
}\n\
// get the control point array\n\
var cpts = vbArgs.getItem(1);\n\
// dump all control points\n\
for ( k=0, offset=0; k&lt;numSurfs; offset += uncpts.getItem(k), k++ )\n\
{\n\
	for ( i=0; i&lt;vncpts.getItem(k); i++ ) // V\n\
	{\n\
		for ( j=0; j&lt;uncpts.getItem(k); j++ ) // U\n\
		{\n\
			idx = j+offset;\n\
	 		LogMessage(\"surf\" + k + \": cpts[0]\" + \"[\" + i + \"]\" + \"[\" + idx + \"]: \" + cpts.getItem(0,i,idx));\n\
			LogMessage(\"surf\" + k + \": cpts[1]\" + \"[\" + i + \"]\" + \"[\" + idx + \"]: \" + cpts.getItem(1,i,idx));\n\
	 		LogMessage(\"surf\" + k + \": cpts[2]\" + \"[\" + i + \"]\" + \"[\" + idx + \"]: \" + cpts.getItem(2,i,idx));\n\
	 		LogMessage(\"surf\" + k + \": cpts[3]\" + \"[\" + i + \"]\" + \"[\" + idx + \"]: \" + cpts.getItem(3,i,idx));\n\
		}\n\
	}\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/NurbsSurfaceMesh.Get.html\">NurbsSurfaceMesh.Get</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";