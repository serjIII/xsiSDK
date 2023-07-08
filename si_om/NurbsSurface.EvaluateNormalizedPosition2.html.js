var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>NurbsSurface.EvaluateNormalizedPosition2</title>\n\
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
            <h1>NurbsSurface.EvaluateNormalizedPosition2</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/NurbsSurface.html\">NurbsSurface</a>.EvaluateNormalizedPosition2 <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns the Position, U tangent, V Tangent and Normal at a given normalized UV value in the\n\
same order as the output arguments in <a href=\"#!/url=./si_om/NurbsSurface.EvaluateNormalizedPosition.html\">NurbsSurface.EvaluateNormalizedPosition</a>.<br /><br />\n\
Note: This method must be used with scripting languages that don\'t support arguments passed by reference \n\
such as JScript and PerlScript. For more information on getting output arguments, see \n\
<a href=\"#!/url=./files/OutputArgArrays.htm\">About Output Argument Arrays</a>.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Object NurbsSurface.EvaluateNormalizedPosition2( Double in_dUValueNormalized, Double in_dVValueNormalized );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oArray = NurbsSurface.EvaluateNormalizedPosition2( UValueNormalized, VValueNormalized );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./files/Array.htm\">Array</a> that contains <a href=\"#!/url=./si_om/SIVector3.html\">SIVector3</a> objects representing \n\
the position, u tangent, v tangent and normal at the given UV.\n\
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
		<td class=\"name\">UValueNormalized		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
The normalized UValue(0.0 to 1.0) at which we want to evaluate the surface.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">VValueNormalized		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
The normalized VValue(0.0 to 1.0) at which we want to evaluate the surface.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example illustrates how to retrieve the normalized UV value from a specific Knot\n\
	and how to use that to evaluate its position. \n\
*/\n\
var oSphere = ActiveSceneRoot.AddGeometry( \"Sphere\", \"NurbsSurface\" );\n\
var oSurfaces = oSphere.ActivePrimitive.Geometry.Surfaces;\n\
var oSurface  = oSurfaces(0);\n\
var aUKnotValues = new VBArray(oSurface.UKnots.Array);\n\
var aVKnotValues = new VBArray(oSurface.VKnots.Array);\n\
var aUVNormalizedValues = new VBArray( oSurface.GetNormalizedUVFromUV2(aUKnotValues.getItem(3),aVKnotValues.getItem(4)));\n\
var aValues = new VBArray(oSurface.EvaluateNormalizedPosition2( aUVNormalizedValues.getItem(0), aUVNormalizedValues.getItem(1)));\n\
var oPosition = aValues.getItem(0);\n\
var oUTangent = aValues.getItem(1);\n\
var oVTangent = aValues.getItem(2);\n\
var oNormal = aValues.getItem(3);\n\
LogMessage( \"Position: \" + oPosition.x + \", \" + oPosition.y + \", \" + oPosition.z );\n\
LogMessage( \"Tan U: \" + oUTangent.x + \", \" + oUTangent.y + \", \" + oUTangent.z );\n\
LogMessage( \"Tan V: \" + oVTangent .x + \", \" + oVTangent .y + \", \" + oVTangent .z );\n\
LogMessage( \"Normal: \" + oNormal.x + \", \" + oNormal.y + \", \" + oNormal.z );\n\
//--------------------------------------------------\n\
// Output of above script:\n\
//INFO : \"Position: -4.718447854656915e-16, -2.828427124746189, 2.8284271247461916\"\n\
//INFO : \"Tan U: 1, 0, 1.8784326741201244e-16\"\n\
//INFO : \"Tan V: -5.3007381947367376e-17, 0.706986783671791, 0.7072267583409271\"\n\
//INFO : \"Normal: -1.3280270746201882e-16, -0.7072267583409272, 0.7069867836717909\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";