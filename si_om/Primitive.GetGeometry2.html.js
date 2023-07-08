var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Primitive.GetGeometry2</title>\n\
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
            <h1>Primitive.GetGeometry2</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Primitive.html\">Primitive</a>.GetGeometry2</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v6.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns a <a href=\"#!/url=./si_om/Geometry.html\">Geometry</a> object containing the object\'s geometry. \n\
<br /><br /><br /><br />Note: This method could return an invalid object in python, use <a href=\"#!/url=./si_om/Primitive.GetGeometry3.html\">Primitive.GetGeometry3</a> instead.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Geometry Primitive.GetGeometry2( Object, siConstructionMode in_mode );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = Primitive.GetGeometry2( [Time], [Mode] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/Geometry.html\">Geometry</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Time		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
Time (in frames) at which to get property.<br /><br />Note: This argument is ignored inside operators.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current time in frames			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Mode		</td>\n\
		<td><a href=\"#!/url=./si_om/siConstructionMode.html\">siConstructionMode</a>		</td>\n\
		<td>\n\
 \n\
		The construction mode is used to access a version of the geometry with specific \n\
		deforms. The geometry positions you get depends on the mode you pass in. By \n\
		default this argument is set to siConstructionModeSecondaryShape which combines \n\
		the geometry positions with the shape, the envelope deformation and the deforms \n\
		installed above the envelope such as the move point operators. This mode is typically \n\
		used for plotting the final results of shape and envelope deformation. \n\
		<br /><br />\n\
		Other modes of interest:\n\
		<br /><br />\n\
		siConstructionModeModeling:	Gets the original geometry positions. This mode \n\
		is typically used in export applications where geometry, shape and envelope positions \n\
		are exported separately.\n\
		<br /><br />\n\
		siConstructionModePrimaryShape:	Combines the geometry positions with the shape deformation.\n\
		<br /><br />\n\
		siConstructionModeAnimation: Combines the geometry positions with the shape and envelope \n\
		deformation altogether.\n\
		<br /><br />\n\
		siConstructionModeDefault: Uses the current construction mode set in Softimage.\n\
		<br /><br />\n\
		Note: This argument is ignored inside operators.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siConstructionModeSecondaryShape			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
# This example demontrates how to get position of a point at a specific time frame\n\
#\n\
# Import the constants \n\
from win32com.client import constants as c\n\
import sys, types\n\
Application.NewScene(\"\", 0)\n\
oGrid = Application.ActiveSceneRoot.AddGeometry( \"Grid\", \"MeshSurface\" )\n\
Application.SetValue (oGrid.Name + \".polymsh.geom.subdivu\", 1)\n\
Application.SetValue (oGrid.Name + \".polymsh.geom.subdivv\", 1)\n\
Application.Scale( oGrid, 0.25, 0.25, 0.25, c.siAbsolute, c.siParent, c.siObj, c.siXYZ)\n\
startTimeInSeconds = 5 / 29.97\n\
duration = startTimeInSeconds * 2\n\
# Start at frame 5 &amp;&amp; last 100 frames\n\
oClip = oGrid.GetActivePrimitive3().Geometry.SaveShapeKey( \n\
				startTimeInSeconds, \n\
				duration, \n\
				c.siShapeAbsoluteReferenceMode, \n\
				c.siShapeInstanceOnlyMode, \n\
				\"Clip\", ( 0,1,2,3), \n\
				( -4,0,-4, \n\
				  -4,0, 4, \n\
				   4,0, 0, \n\
				   4,0, 4 ))\n\
# Frame 3 should be the original grid\n\
oPoints = oGrid.GetActivePrimitive3().GetGeometry2(3,c.siConstructionModeSecondaryShape).Points\n\
oPos = oPoints[2].Position\n\
Application.LogMessage( \"%f,%f,%f\" % ( oPos.X,oPos.Y,oPos.Z ) )\n\
# Frame 10 should the modified grid in the clip\n\
oPoints = oGrid.GetActivePrimitive3().GetGeometry2(10).Points\n\
oPos = oPoints[2].position\n\
Application.LogMessage( \"%f,%f,%f\" % ( oPos.X,oPos.Y,oPos.Z ) )\n\
# Expected results:\n\
#INFO : 4.000000,0.000000,-4.000000\n\
#INFO : 4.000000,0.000000,0.000000</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Primitive.Geometry.html\">Primitive.Geometry</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";