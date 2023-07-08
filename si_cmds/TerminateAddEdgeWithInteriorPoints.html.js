var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>TerminateAddEdgeWithInteriorPoints</title>\n\
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
            <h1>TerminateAddEdgeWithInteriorPoints</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">TerminateAddEdgeWithInteriorPoints</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Completes a new edge sequence that started from a point or an edge, that includes \n\
one or more points in the interior of the polygon and will now terminate to a \n\
a given position along the edge specified.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>TerminateAddEdgeWithInteriorPoints( Operator, PolygonID, EdgeID, [Ratio] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Operator		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Specifies the add-edge operator used to create the final edge sequence.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PolygonID		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
ID of the polygon		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">EdgeID		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 ID of the destination edge where the new edge sequence terminates.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Ratio		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
Ratio where to split the destination edge.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0.0			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>The new edge sequence will terminate to the start point of the destination edge					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0< /><100></100></td>\n\
					<td>The destination edge will be split accordingly before terminating the new edge sequence.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">100					</td>\n\
					<td>The new edge sequence will terminate to the end point of the destination edge					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example uses AddEdge and at some point adds a point in the interior \n\
\' of a quad. The edge is terminated using TerminateAddEdgeWithInteriorPoints \n\
\' to split the edge 3 at 27.8%\n\
\'\n\
NewScene , false\n\
CreatePrim \"Grid\", \"MeshSurface\"\n\
SetValue \"grid.polymsh.geom.subdivu\", 1\n\
SetValue \"grid.polymsh.geom.subdivv\", 1\n\
SplitEdge \"grid.edge[1]\", 64.9271844660194, False, True, siPersistentOperation\n\
ApplyTopoOp \"AddEdge\", \"grid.pnt[LAST];grid.edge[1];grid.poly[0]\"\n\
AddPointInteriorToPolygon \"grid.polymsh.addedgeop\", 0, 0, 1, 2, 0.394370594438662, 0.102825667243581, 0.502803738317757\n\
TerminateAddEdgeWithInteriorPoints \"grid.polymsh.addedgeop\", 0, 3, 27.7912621359223</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/ApplyOp.html\">ApplyOp</a> <a href=\"#!/url=./si_cmds/ConnectNewPolygonToEdge.html\">ConnectNewPolygonToEdge</a> <a href=\"#!/url=./si_cmds/ConnectNewPolygonToPoint.html\">ConnectNewPolygonToPoint</a> <a href=\"#!/url=./si_cmds/AddPointToNewPolygon.html\">AddPointToNewPolygon</a> <a href=\"#!/url=./si_cmds/RemovePointFromPolygon.html\">RemovePointFromPolygon</a> <a href=\"#!/url=./si_cmds/AddPointInteriorToPolygon.html\">AddPointInteriorToPolygon</a> <a href=\"#!/url=./si_cmds/RemoveLastPointInteriorToPolygon.html\">RemoveLastPointInteriorToPolygon</a> <a href=\"#!/url=./si_cmds/SnapOffsetToPointForSlicePolygons.html\">SnapOffsetToPointForSlicePolygons</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";