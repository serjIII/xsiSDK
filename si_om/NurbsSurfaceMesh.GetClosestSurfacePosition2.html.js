var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>NurbsSurfaceMesh.GetClosestSurfacePosition2</title>\n\
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
            <h1>NurbsSurfaceMesh.GetClosestSurfacePosition2</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/NurbsSurfaceMesh.html\">NurbsSurfaceMesh</a>.GetClosestSurfacePosition2 <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns the surface index, position of the point on it, UV values and squared \n\
distance from the given position. The data is returned in a 1-dimensional array \n\
and is ordered the same as for the \n\
<a href=\"#!/url=./si_om/NurbsSurfaceMesh.GetClosestSurfacePosition.html\">NurbsSurfaceMesh.GetClosestSurfacePosition</a> method output \n\
arguments.  <br /><br />\n\
Note: This method must be used with scripting languages that don\'t support arguments passed by reference \n\
such as JScript and PerlScript. For more information on getting output arguments, see \n\
<a href=\"#!/url=./files/OutputArgArrays.htm\">About Output Argument Arrays</a>.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Object NurbsSurfaceMesh.GetClosestSurfacePosition2( Object in_vPosition );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oArray = NurbsSurfaceMesh.GetClosestSurfacePosition2( Position );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Variant.htm\">Variant</a>s ordered as Index, SquaredDistance, UValue, VValue, Position.</p></div>\n\
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
A position expressed in the NurbsSurfaceMesh object frame of reference.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// This example shows how to retrieve the control points returned by \n\
// NurbsSurface.GetClosestSurfacePosition2\n\
var oRoot = Application.ActiveProject.ActiveScene.Root;\n\
var oSphere = oRoot.AddGeometry( \"Sphere\", \"NurbsSurface\" );\n\
// Translate the sphere\n\
oSphere.Kinematics.Global.Parameters(\"posx\").value = oSphere.Kinematics.Global.Parameters(\"posx\").value + 13;\n\
var oPosition = XSIMath.CreateVector3();\n\
oPosition.Set( 0.0, 0.0, 0.0 );\n\
// convert VB array to JScript array\n\
var vbArgs = new VBArray(oSphere.ActivePrimitive.Geometry.GetClosestSurfacePosition2(oPosition));\n\
var args = vbArgs.toArray();\n\
LogMessage( \"The origin is closest to surface : \" + args[0] + \" its distance from it is \" + Math.sqrt(args[1]) );\n\
LogMessage( \"The UV values are U : \" + args[2] + \" V :\" + args[3] );\n\
LogMessage( \"The corresponding position is X : \" + args[4].X + \" Y :\" + args[4].Y + \" Z :\" + args[4].Z );</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/NurbsSurfaceMesh.GetClosestSurfacePosition.html\">NurbsSurfaceMesh.GetClosestSurfacePosition</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";