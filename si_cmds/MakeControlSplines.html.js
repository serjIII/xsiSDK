var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MakeControlSplines</title>\n\
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
</style><link rel=\"stylesheet\" href=\"si_cmds/css/en.css\" type=\"text/css\" /><script>$(document).ready(function() { yepnope.injectJs(\"./si_cmds/lib/utils.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>MakeControlSplines</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">MakeControlSplines</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Attaches controllers to a curve or curves, giving layered deformation with precise control over evenly \n\
distributed slides and offsets.  Especially useful for spline based facial setups.<br /><br />\n\
Three controllers are created for each control point on the curve. Point controllers move the control points\n\
of the curve. Path controllers are path constrained to the curve at evenly spaced length percentages. Offset controls\n\
are used for additional translation (like pinching of wrinkes in facial expressions) or twising along a curve. \n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oControlSpline = MakeControlSplines( CurveCollection, [NbDivisions], [Scale], Parent, [PointMarkerType], [PathMarkerType], [OffsetMarkerType], [PointColor], [PathColor], [OffsetColor], [InputFromUI] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns a <a href=\"#!/url=./files/CDKControlSpline.htm\">ControlSpline</a> JScript object.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">CurveCollection		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		A collection of curves to attach controllers to. A single curve can also be passed. \n\
		If multilple curves are passed they are searched for matching start and end points \n\
		to share point markers.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">NbDivisions		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
The number of equally spaced divisions along the curve to place path markers.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
6			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Scale		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
The scale at which to draw the controllers.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
1.0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Parent		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The parent for the point marker objects. If empty the scene root is used.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PointMarkerType		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
The type of control object for the points of the curves.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
5 (diamond)			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>No controller					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>Null Controller					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">2					</td>\n\
					<td>Cube Controller					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">3					</td>\n\
					<td>Square Controller					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">4					</td>\n\
					<td>Pyramid Controller					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">5					</td>\n\
					<td>Diamond Controller					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PathMarkerType		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
The type of control object divided along the curve.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
1 (null)			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>No controller					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>Null Controller					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">2					</td>\n\
					<td>Cube Controller					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">3					</td>\n\
					<td>Square Controller					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">4					</td>\n\
					<td>Pyramid Controller					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">5					</td>\n\
					<td>Diamond Controller					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">OffsetMarkerType		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
\n\
		The type of control object which is a child of the PathMarkers for position and \n\
		roll offsets. Offsets are not be made if the PathMakerType is set to 0.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
2 (cube)			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>No controller					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>Null Controller					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">2					</td>\n\
					<td>Cube Controller					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">3					</td>\n\
					<td>Square Controller					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">4					</td>\n\
					<td>Pyramid Controller					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">5					</td>\n\
					<td>Diamond Controller					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PointColor		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
The type of shadow rig to constrain to the spine.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
377 (light green)			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PathColor		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
The type of shadow rig to constrain to the spine.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
65 (dark green)			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">OffsetColor		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
The color of the offset control objects.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
560 (blue)			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">InputFromUI		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
Allows the above parameters to be selected from a dialog box.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
false			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">var curve = SICreateCurve(\"crvlist\", 3, 0);\n\
SIAddPointOnCurveAtEnd(\"crvlist\", -5, 0, 0, false, 0);\n\
SIAddPointOnCurveAtEnd(\"crvlist\", -3, 0, -4, false, 0);\n\
SIAddPointOnCurveAtEnd(\"crvlist\", 2, 0, -6, false, 0);\n\
SIAddPointOnCurveAtEnd(\"crvlist\", 5, 0, -3, false, 0);\n\
SIAddPointOnCurveAtEnd(\"crvlist\", 5, 0, 2, false, 0);\n\
MakeControlSplines(curve);</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";