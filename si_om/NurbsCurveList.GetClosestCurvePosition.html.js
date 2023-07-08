var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>NurbsCurveList.GetClosestCurvePosition</title>\n\
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
            <h1>NurbsCurveList.GetClosestCurvePosition</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/NurbsCurveList.html\">NurbsCurveList</a>.GetClosestCurvePosition <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns the curve index, position of the point on it, U value and squared distance\n\
from the given position.\n\
<br /><br />\n\
Note: This method uses <a href=\"#!/url=./files/OutArgDefined.htm\">output arguments</a>. C# and some \n\
scripting languages (such as JScript and PerlScript) don\'t support arguments passed by reference. However, there is a \n\
alternate version of this method which is considered safe to use with C#, JScript and PerlScript: \n\
<a href=\"#!/url=./si_om/NurbsCurveList.GetClosestCurvePosition2.html\">NurbsCurveList.GetClosestCurvePosition2</a>.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>NurbsCurveList.GetClosestCurvePosition( Object in_vPosition, Object& out_pvCurveIndex, Object& out_pvSquaredDistance, Object& out_pvUValue, Object& out_pvPosition );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>NurbsCurveList.GetClosestCurvePosition( Position, [CurveIndex], [SquaredDistance], [UValue], [Position] );</pre>		</td>	</tr>\n\
</table>\n\
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
	<tr>\n\
		<td class=\"name\">CurveIndex		</td>\n\
		<td><a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
The curve index to which the position is the closest.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SquaredDistance		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
The squared distance of the inputed position to the curve point.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">UValue		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
The corresponding UValue on the NurbsCurve.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Position		</td>\n\
		<td><a href=\"#!/url=./si_om/SIVector3.html\">SIVector3</a>		</td>\n\
		<td>\n\
The actual curve point position at UV values.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">set oRoot = Application.activeproject.activescene.root\n\
set oArc = oRoot.AddGeometry( \"Arc\", \"NurbsCurve\" )\n\
\'Translate the sphere\n\
oArc.Kinematics.Global.Parameters(\"posx\").value = oArc.Kinematics.Global.Parameters(\"posx\").value + 13\n\
set oPos = XSIMath.CreateVector3\n\
oPos.Set 0.0, 0.0, 0.0\n\
set oPosition = XSIMath.MapWorldPositionToObjectSpace(oArc.Kinematics.local.transform, oPos) \n\
oArc.ActivePrimitive.Geometry.GetClosestCurvePosition oPosition, CurveIndex, squaredDistance, UValue, CurvePosition\n\
logmessage \"The origin is closest to curve : \" &amp; CurveIndex &amp; \" its distance from it is \" &amp; sqr(squaredDistance)\n\
logmessage \"The U values is \" &amp; UValue\n\
logmessage \"The corresponding position is X : \" &amp; CurvePosition.X &amp; \" Y :\" &amp; CurvePosition.Y &amp; \" Z :\" &amp; CurvePosition.Z\n\
oArc.ActivePrimitive.Geometry.GetClosestCurvePosition Array(0.0, 0.0, 0.0), CurveIndex, squaredDistance, UValue, CurvePosition\n\
logmessage \"The origin is closest to surface : \" &amp; CurveIndex &amp; \" its distance from it is \" &amp; sqr(squaredDistance)\n\
logmessage \"The U values is \" &amp; UValue\n\
logmessage \"The corresponding position is X : \" &amp; CurvePosition.X &amp; \" Y :\" &amp; CurvePosition.Y &amp; \" Z :\" &amp; CurvePosition.Z</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";