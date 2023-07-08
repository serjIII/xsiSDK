var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siSnapType</title>\n\
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
            <h1>siSnapType</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siSnapType</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v2012(10)</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>ToolContext snapping type flags.</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>siSnapType.siSnapNone                                                       // 0\n\
siSnapType.siSnapPoint                                                      // 1\n\
siSnapType.siSnapKnot                                                       // 2\n\
siSnapType.siSnapCenter                                                     // 4\n\
siSnapType.siSnapMidPoint                                                   // 8\n\
siSnapType.siSnapBBox                                                       // 32\n\
siSnapType.siSnap0D                                                         // 65535\n\
siSnapType.siSnapEdge                                                       // 65536\n\
siSnapType.siSnapCurve                                                      // 131072\n\
siSnapType.siSnapUIsocurve                                                  // 262144\n\
siSnapType.siSnapVIsocurve                                                  // 524288\n\
siSnapType.siSnapBoundary                                                   // 1048576\n\
siSnapType.siSnap1D                                                         // 16711680\n\
siSnapType.siSnapFace                                                       // 16777216\n\
siSnapType.siSnapSurface                                                    // 33554432\n\
siSnapType.siSnap2D                                                         // 1056964608\n\
siSnapType.siSnapGrid                                                       // 1073741824</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSnapNone\"> </a>siSnapNone		</td>\n\
		<td class=\"example\">0		</td>\n\
		<td>\n\
Nothing was snapped.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSnapPoint\"> </a>siSnapPoint		</td>\n\
		<td class=\"example\">0x1		</td>\n\
		<td>\n\
Snap to points.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSnapKnot\"> </a>siSnapKnot		</td>\n\
		<td class=\"example\">0x2		</td>\n\
		<td>\n\
snap to knots.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSnapCenter\"> </a>siSnapCenter		</td>\n\
		<td class=\"example\">0x4		</td>\n\
		<td>\n\
Snap to centers.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSnapMidPoint\"> </a>siSnapMidPoint		</td>\n\
		<td class=\"example\">0x8		</td>\n\
		<td>\n\
Snap to mid-points.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSnapBBox\"> </a>siSnapBBox		</td>\n\
		<td class=\"example\">0x20		</td>\n\
		<td>\n\
Snap to bounding box points		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSnap0D\"> </a>siSnap0D		</td>\n\
		<td class=\"example\">0xFFFF		</td>\n\
		<td>\n\
Snap to any 0D feature.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSnapEdge\"> </a>siSnapEdge		</td>\n\
		<td class=\"example\">0x10000		</td>\n\
		<td>\n\
Snap to mesh edges.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSnapCurve\"> </a>siSnapCurve		</td>\n\
		<td class=\"example\">0x20000		</td>\n\
		<td>\n\
Snap to curves.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSnapUIsocurve\"> </a>siSnapUIsocurve		</td>\n\
		<td class=\"example\">0x40000		</td>\n\
		<td>\n\
Snap to surface U curves.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSnapVIsocurve\"> </a>siSnapVIsocurve		</td>\n\
		<td class=\"example\">0x80000		</td>\n\
		<td>\n\
Snap to surface V curves.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSnapBoundary\"> </a>siSnapBoundary		</td>\n\
		<td class=\"example\">0x100000		</td>\n\
		<td>\n\
Snap to surface boundary curves.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSnap1D\"> </a>siSnap1D		</td>\n\
		<td class=\"example\">0xFF0000		</td>\n\
		<td>\n\
Snap to any 1D feature.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSnapFace\"> </a>siSnapFace		</td>\n\
		<td class=\"example\">0x1000000		</td>\n\
		<td>\n\
Snap to mesh faces.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSnapSurface\"> </a>siSnapSurface		</td>\n\
		<td class=\"example\">0x2000000		</td>\n\
		<td>\n\
Snap to surfaces.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSnap2D\"> </a>siSnap2D		</td>\n\
		<td class=\"example\">0x3F000000		</td>\n\
		<td>\n\
Snap to any 2D feature.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSnapGrid\"> </a>siSnapGrid		</td>\n\
		<td class=\"example\">0x40000000		</td>\n\
		<td>\n\
Snap to grid.		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_om/ToolContext.html\">ToolContext</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";