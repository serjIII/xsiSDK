var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siCurveIsopointManipMode</title>\n\
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
            <h1>siCurveIsopointManipMode</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siCurveIsopointManipMode</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>This enum specifies the mode of manipulation of a curve isopoint in Softimage.</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>siCurveIsopointManipMode.siCurveIsopointPositionManipMode                   // 0\n\
siCurveIsopointManipMode.siCurveIsopointPositionAndTangentsManipMode        // 1\n\
siCurveIsopointManipMode.siCurveIsopointFwdTangentManipMode                 // 2\n\
siCurveIsopointManipMode.siCurveIsopointBwdTangentManipMode                 // 3\n\
siCurveIsopointManipMode.siCurveIsopointFwdThenBwdTangentManipMode          // 4\n\
siCurveIsopointManipMode.siCurveIsopointBwdThenFwdTangentManipMode          // 5\n\
siCurveIsopointManipMode.siCurveIsopointCVManipMode                         // 6</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCurveIsopointPositionManipMode\"> </a>siCurveIsopointPositionManipMode		</td>\n\
		<td class=\"example\">0		</td>\n\
		<td>\n\
Curve isopoint position manipulation mode. \n\
		<br /><br /> \n\
		To change the isopoint position with the tangent(s) free to update.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCurveIsopointPositionAndTangentsManipMode\"> </a>siCurveIsopointPositionAndTangentsManipMode		</td>\n\
		<td class=\"example\">1		</td>\n\
		<td>\n\
Curve isopoint position-with-tangents-locked manipulation mode. \n\
		<br /><br /> \n\
		To change the isopoint position with the tangent(s) locked.\n\
		<br /><br /> \n\
		But in the case where two consecutive knots are linked by a linear segment (corresponding control \n\
		points are aligned) the tangents will update such that the curve segment remains linear.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCurveIsopointFwdTangentManipMode\"> </a>siCurveIsopointFwdTangentManipMode		</td>\n\
		<td class=\"example\">2		</td>\n\
		<td>\n\
Curve isopoint forward tangent manipulation mode.\n\
		<br /><br /> \n\
		To change the forward tangent of the isopoint.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCurveIsopointBwdTangentManipMode\"> </a>siCurveIsopointBwdTangentManipMode		</td>\n\
		<td class=\"example\">3		</td>\n\
		<td>\n\
Curve isopoint backward tangent manipulation mode. \n\
		<br /><br /> \n\
		To change the backward tangent of the isopoint.\n\
		<br /><br /> \n\
		The backward tangent only makes sense for a full-multiplicity knot (for example, 3 for a cubic curve), \n\
		also known as a Bezier knot, where a discontinuity of the tangents on both sides of the knot is supported.\n\
		<br /><br /> \n\
		In the case where both tangents are aligned the backward tangent has the opposite direction as the forward tangent.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCurveIsopointFwdThenBwdTangentManipMode\"> </a>siCurveIsopointFwdThenBwdTangentManipMode		</td>\n\
		<td class=\"example\">4		</td>\n\
		<td>\n\
Curve isopoint forward-and-backward tangent manipulation mode.\n\
		<br /><br /> \n\
		Same as siCurveIsopointFwdTangentManipMode but the backward tangent is also updated by the same delta.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCurveIsopointBwdThenFwdTangentManipMode\"> </a>siCurveIsopointBwdThenFwdTangentManipMode		</td>\n\
		<td class=\"example\">5		</td>\n\
		<td>\n\
Curve isopoint backward-and-forward tangent manipulation mode.\n\
		<br /><br /> \n\
		Same as siCurveIsopointBwdTangentManipMode but the forward tangent is also updated by the same delta.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCurveIsopointCVManipMode\"> </a>siCurveIsopointCVManipMode		</td>\n\
		<td class=\"example\">6		</td>\n\
		<td>\n\
Curve isopoint CV position manipulation mode.\n\
		<br /><br /> \n\
		To change the position of the CV corresponding to the isopoint.\n\
		<br /><br /> \n\
		For a knot of multiplicity > 1 there are more than one CVs so this mode is ignored.		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/CurveDirectManip.html\">CurveDirectManip</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";