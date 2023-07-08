var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>CurveDirectManip</title>\n\
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
            <h1>CurveDirectManip</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">CurveDirectManip</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Manipulates a point of a curve (isopoint) to control its position or one of its tangents.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = CurveDirectManip( [SubComp], [ImmediateMode], [Mode], [X], [Y], [Z] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>An <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> of <a href=\"#!/url=./si_om/Operator.html\">Operator</a> objects.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SubComp		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
A curve isopoint as <a href=\"#!/url=./files/compexpr.htm\">Components</a>.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ImmediateMode		</td>\n\
		<td><a href=\"#!/url=./si_om/siOperationMode.html\">siOperationMode</a>		</td>\n\
		<td>\n\
Specifies whether or not the operator should be immediately frozen.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siPersistentOperation			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Mode		</td>\n\
		<td><a href=\"#!/url=./si_om/siCurveIsopointManipMode.html\">siCurveIsopointManipMode</a>		</td>\n\
		<td>\n\
Mode of manipulation			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siCurveIsopointPositionManipMode			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">X		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
\n\
		Displacement along the X axis of the object frame.<br /><br />\n\
		For a position modification the new isopoint position will be: posX = posX + X<br /><br />\n\
		For a tangent modification the new tangent will be: tangentX = tangentX + X			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0.000000			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Y		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
\n\
		Displacement along the Y axis of the object frame.<br /><br />\n\
		For a position modification the new isopoint position will be: posY = posY + Y<br /><br />\n\
		For a tangent modification the new tangent will be: tangentY = tangentY + Y			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0.000000			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Z		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
\n\
		Displacement along the Z axis of the object frame.<br /><br />\n\
		For a position modification the new isopoint position will be: posZ = posZ + Z<br /><br />\n\
		For a tangent modification the new tangent will be: tangentZ = tangentZ + Z			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0.000000			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' \n\
\'	This example creates a m-shape cubic curve, converts the middle knot to Bezier, then controls\n\
\'	its position, its forward tangent and finally its backward tangent so the end result is \n\
\'	a nice m shape consisting of two adjacent identical arcs.\n\
\' \n\
SICreateCurve \"crvlist\", 3, 0\n\
SIAddPointOnCurveAtEnd \"crvlist\", -4.00195694716243, -2.00677710843373, 0, False, 0\n\
SIAddPointOnCurveAtEnd \"crvlist\", -4.00195694716243, -9.78915662650515E-03, 0, False, 0\n\
SIAddPointOnCurveAtEnd \"crvlist\", -2.00587084148728, 1.98719879518072, 0, False, 0\n\
SIAddPointOnCurveAtEnd \"crvlist\", -9.78473581213335E-03, -2.00677710843373, 0, False, 0\n\
SIAddPointOnCurveAtEnd \"crvlist\", 1.98630136986301, 1.98719879518072, 0, False, 0\n\
SIAddPointOnCurveAtEnd \"crvlist\", 3.98238747553816, -9.78915662650581E-03, 0, False, 0\n\
SIAddPointOnCurveAtEnd \"crvlist\", 3.98238747553816, -2.00677710843373, 0, False, 0\n\
SetCurveKnotMultiplicity \"crvlist.knot[2]\", 3, siPersistentOperation\n\
CurveDirectManip \"crvlist.isopnt[(0,0.500)]\", siPersistentOperation, siCurveIsopointPositionAndTangentsManipMode, 1.66533453693773E-16, -1.33132530120482\n\
CurveDirectManip \"crvlist.isopnt[(0,0.500)]\", siPersistentOperation, siCurveIsopointFwdTangentManipMode, -1.99608610567515, 5.99096385542169\n\
CurveDirectManip \"crvlist.isopnt[(0,0.500)]\", siPersistentOperation, siCurveIsopointBwdTangentManipMode, 1.99608610567515, 5.99096385542169</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/* \n\
	This example creates a m-shape cubic curve, converts the middle knot to Bezier, then controls\n\
	its position, its forward tangent and finally its backward tangent so the end result is \n\
	a nice m shape consisting of two adjacent identical arcs.\n\
*/ \n\
SICreateCurve(\"crvlist\", 3, 0);\n\
SIAddPointOnCurveAtEnd(\"crvlist\", -4.00195694716243, -2.00677710843373, 0, false, 0, null);\n\
SIAddPointOnCurveAtEnd(\"crvlist\", -4.00195694716243, -9.78915662650515E-03, 0, false, 0, null);\n\
SIAddPointOnCurveAtEnd(\"crvlist\", -2.00587084148728, 1.98719879518072, 0, false, 0, null);\n\
SIAddPointOnCurveAtEnd(\"crvlist\", -9.78473581213335E-03, -2.00677710843373, 0, false, 0, null);\n\
SIAddPointOnCurveAtEnd(\"crvlist\", 1.98630136986301, 1.98719879518072, 0, false, 0, null);\n\
SIAddPointOnCurveAtEnd(\"crvlist\", 3.98238747553816, -9.78915662650581E-03, 0, false, 0, null);\n\
SIAddPointOnCurveAtEnd(\"crvlist\", 3.98238747553816, -2.00677710843373, 0, false, 0, null);\n\
SetCurveKnotMultiplicity(\"crvlist.knot[2]\", 3, siPersistentOperation);\n\
CurveDirectManip(\"crvlist.isopnt[(0,0.500)]\", siPersistentOperation, siCurveIsopointPositionAndTangentsManipMode, 1.66533453693773E-16, -1.33132530120482, null);\n\
CurveDirectManip(\"crvlist.isopnt[(0,0.500)]\", siPersistentOperation, siCurveIsopointFwdTangentManipMode, -1.99608610567515, 5.99096385542169, null);\n\
CurveDirectManip(\"crvlist.isopnt[(0,0.500)]\", siPersistentOperation, siCurveIsopointBwdTangentManipMode, 1.99608610567515, 5.99096385542169, null);</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";