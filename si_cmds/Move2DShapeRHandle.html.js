var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Move2DShapeRHandle</title>\n\
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
            <h1>Move2DShapeRHandle</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Move2DShapeRHandle</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v3.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Moves the right handle of a point on a Bezier 2D shape to adjust its shape.\n\
This is the scripting equivalent of clicking and dragging anywhere on the \n\
line between any two points on a Bezier shape to get the handles and then\n\
adjusting the right handle.<br /><br />\n\
Note: You can also use the <a href=\"#!/url=./si_cmds/Move2DShapePoint.html\">Move2DShapePoint</a> command to \n\
move a point on the shape. \n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Move2DShapeRHandle( [Shape], [index], [x], [y] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Shape		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/paramexpr.htm\">Parameter path name</a> for the shape whose handles you are moving.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection. <br /><br />Note: If the current selection is not a valid shape, an error occurs.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">index		</td>\n\
		<td><a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
Specifies the index of the point to manipulate.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
If no value is specified for this argument, the right handle on the first point in the shape is moved.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">x		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
Specifies the new position in X for the handle.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">y		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
Specifies the new position in Y for the handle.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example demonstrates how to set a garbage matte mask for a \n\
\' ColorCorrect operator in the FxTree and then use the bezier handles\n\
\' to refine it.\n\
\'\n\
\' Create a new FxTree \n\
set oTree = CreateFxTree()\n\
\' Get the projects path for the current system\n\
sPath = InstallationPath( siProjectPath )\n\
set oClip = CreateImageClip( sPath &amp; \"\\Pictures\\noIcon.pic\", \"NewClip\" )\n\
\' Use the clip to create a new image clip operator\n\
set oOperator = AddImageClipFxOp( oTree, oClip )\n\
\' Add a Color Correct operator to the same tree\n\
set oCCOp = AddFxOp( oTree, \"Color Correct\" )\n\
\' Connect the two operators\n\
ConnectFxOp oOperator, oCCOp, \"1\" \n\
\' Since the ConnectFxOp command does not return the new operator,\n\
\' you need to get it from the OperatorCollection on the FxTree object\n\
for each oMember in oTree.FxOperators\n\
	if oMember.Name = \"ColorCorrect\" then\n\
		set oGBMatteOp = oMember\n\
		exit for\n\
	end if\n\
next\n\
\' Adjust the HSV Offset and Gain levels so you can see the \n\
\' results of the color correction\n\
SetValue oGBMatteOp.FullName &amp; \".MasterHueShift,\" _\n\
		&amp; oGBMatteOp.FullName &amp; \".MasterOffset,\" _\n\
		&amp; oGBMatteOp.FullName &amp; \".MasterGain\", _\n\
		Array(0, 0.820731514055631, 0.852844886888196)\n\
\' Add the 2D shape (mask shape) to the GarbageMatte and reshape it so you can see\n\
\' the shape when you open the Fx Viewer with the ColorCorrect operator selected\n\
set oRotospline = Add2DShape( oGBMatteOp &amp; \".GarbageShapes\", \"Bezier\" )\n\
Move2DShapePin oRotospline, 124.333333333333, 145.166666666667\n\
aPointPositions = Array(56, 207, 196, 170, 179, 85, 132, 142, 108, 105, 75, 162)\n\
Add2DShapePointArray oRotospline, aPointPositions\n\
\' Move the right handle of the first point and the left handle of the second\n\
\' point to create an arc on the top part of the shape\n\
Move2DShapeRHandle oRotospline, , 15.0845123157596, 50.9829157526202\n\
Move2DShapeLHandle oRotospline, 1, 15.0845123157597, 50.9829157526202</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/Add2DShape.html\">Add2DShape</a> <a href=\"#!/url=./si_cmds/Insert2DShapePoint.html\">Insert2DShapePoint</a> <a href=\"#!/url=./si_cmds/Move2DShapePoint.html\">Move2DShapePoint</a> <a href=\"#!/url=./si_cmds/Move2DShapeLHandle.html\">Move2DShapeLHandle</a> <a href=\"#!/url=./si_cmds/Delete2DShapePoint.html\">Delete2DShapePoint</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";