var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>InsertCurveKnot</title>\n\
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
            <h1>InsertCurveKnot</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">InsertCurveKnot</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Inserts a new knot with the given multiplicity at the specified curve location. A multiplicity \n\
of one will create only one CV (control vertex) for this knot but without discontinuity control \n\
(unless the curve is linear). A multiplicity of three for a cubic curve will create three CVs \n\
for this knot and thus will let you have full control of the discontinuity (creating a corner, \n\
for example).\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = InsertCurveKnot( [ConnectionSet], [Multiplicity], [ImmediateMode] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> of <a href=\"#!/url=./si_om/Operator.html\">Operator</a>s. <br /><br />Note: If the ImmediateMode parameter is set to siImmediateOperation, no operators are returned. </p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ConnectionSet		</td>\n\
		<td><a href=\"#!/url=./files/cnxset.htm\">ConnectionSet</a>		</td>\n\
		<td>\n\
Specifies the curve location for inserting the new knot.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Currently selected components.<br /><br />Warning: An error occurs if the connection set is invalid. Please verify the connection set required for this operator to avoid breaking your scripts.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Multiplicity		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
Multiplicity of the knots			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
1			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>Simple Knot (Bezier-like knot for a nurbs linear curve)					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">2					</td>\n\
					<td>Double Knot (Bezier-like knot for a nurbs quadratic curve)					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">3					</td>\n\
					<td>Triple Knot (Bezier-like knot for a nurbs cubic curve)					</td>\n\
				</tr>\n\
			</table>\n\
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
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' \n\
\'	This example creates a simple curve, selects an isopoint, and creates a bezier-knot\n\
\'	at this location.\n\
\' \n\
SICreateCurve \"crvlist\", 3, 0\n\
SIAddPointOnCurveAtEnd \"crvlist\", -4, 2, 0, False, 0\n\
SIAddPointOnCurveAtEnd \"crvlist\", -5, -2, 0, False, 0\n\
SIAddPointOnCurveAtEnd \"crvlist\", -2, -2, 0, False, 0\n\
SIAddPointOnCurveAtEnd \"crvlist\", -1, 2, 0, False, 0\n\
SIAddPointOnCurveAtEnd \"crvlist\", 2, 2, 0, False, 0\n\
SIAddPointOnCurveAtEnd \"crvlist\", 2, -2, 0, False, 0\n\
SetSelFilter \"Isopoint\"\n\
SelectObj \"crvlist.isopnt[(0,0.489)]\"\n\
InsertCurveKnot \"crvlist.isopnt[(0,0.489)]\", 3, siPersistentOperation</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example creates a simple curve, selects an isopoint, and creates a bezier-knot\n\
	at this location.\n\
*/\n\
SICreateCurve(\"crvlist\", 3, 0);\n\
SIAddPointOnCurveAtEnd(\"crvlist\", -4, 2, 0, false, 0);\n\
SIAddPointOnCurveAtEnd(\"crvlist\", -5, -2, 0, false, 0);\n\
SIAddPointOnCurveAtEnd(\"crvlist\", -2, -2, 0, false, 0);\n\
SIAddPointOnCurveAtEnd(\"crvlist\", -1, 2, 0, false, 0);\n\
SIAddPointOnCurveAtEnd(\"crvlist\", 2, 2, 0, false, 0);\n\
SIAddPointOnCurveAtEnd(\"crvlist\", 2, -2, 0, false, 0);\n\
SetSelFilter(\"Isopoint\");\n\
SelectObj(\"crvlist.isopnt[(0,0.489)]\", null, null);\n\
InsertCurveKnot(\"crvlist.isopnt[(0,0.489)]\", 3, siPersistentOperation);</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";