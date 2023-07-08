var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PlotCurve</title>\n\
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
            <h1>PlotCurve</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">PlotCurve</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Plots the trajectory of an object into a curve. The plotted curve is a \n\
cubic curve created by interpolation.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = PlotCurve( [InputObjs], Name, [StartFrame], [EndFrame], [StepFrame] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns the plotted NURBS CurveList as an <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> of one <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a>.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">InputObjs		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of objects \n\
		whose trajectories are plotted.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current Selection			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Name of the curve. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">StartFrame		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 First frame to plot 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">EndFrame		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 Last frame to plot 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">StepFrame		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 Step between frames 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
1			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'This example shows how to plot a curve from an animation\n\
NewScene , false\n\
\'Create a simple primitive and animate it.\n\
CreatePrim \"Cone\", \"MeshSurface\"\n\
SaveKey \"cone.kine.local.posx,cone.kine.local.posy,cone.kine.local.posz\", 1\n\
SetValue \"PlayControl.Key\", 50\n\
SetValue \"PlayControl.Current\", 50\n\
Translate , 5, 0, 0, siAbsolute, siParent, siObj, siX\n\
SaveKey \"cone.kine.local.posx,cone.kine.local.posy,cone.kine.local.posz\", 50\n\
SetValue \"PlayControl.Key\", 100\n\
SetValue \"PlayControl.Current\", 100\n\
Translate , 0, 0, 5, siAbsolute, siParent, siObj, siZ\n\
SaveKey \"cone.kine.local.posx,cone.kine.local.posy,cone.kine.local.posz\", 100\n\
\'Plot from frame 0 t0 100 by step of 5. Creates curve MyPlot\n\
PlotCurve \"Cone\", \"MyPlot\", 0, 100, 5</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' This example shows plotting curves on components (points) of an object.\n\
\' The curves create trails of each chosen component through space.\n\
NewScene , False\n\
\' Create an object for our example.\n\
set oObj = CreatePrim( \"Torus\", \"MeshSurface\" )\n\
SetValue oObj &amp; \".polymsh.geom.subdivu\", 6\n\
SetValue oObj &amp; \".polymsh.geom.subdivv\", 3\n\
\' Put some animation on it.\n\
SaveKey oObj &amp; \"/kine.local.posx,kine.local.posy,kine.local.posz\", 1\n\
SaveKey oObj &amp; \"/kine.local.rotx,kine.local.roty,kine.local.rotz\", 1\n\
Translate oObj, 10, 9, 0, siRelative, siView, siObj, siXYZ\n\
SaveKey oObj &amp; \"/kine.local.posx,kine.local.posy,kine.local.posz\", 50\n\
LastFrame\n\
Translate oObj, 10, -9, 0, siRelative, siView, siObj, siXYZ\n\
SaveKey oObj &amp; \"/kine.local.posx,kine.local.posy,kine.local.posz\", 100\n\
Rotate oObj, -161, -434, -18, siAbsolute, siLocal, siObj, siXYZ\n\
SaveKey oObj &amp; \"/kine.local.rotx,kine.local.roty,kine.local.rotz\", 100\n\
\' Do the actual plotting of all the points in the mesh.\n\
\' Note: \"Refresh\" makes sure the animation is evaluated for the start\n\
\' frame, so we don\'t get trails from the \"current\" (end frame) position\n\
\' to the start position.\n\
FirstFrame\n\
refresh\n\
PlotCurve oObj &amp; \".pnt[*]\", \"TorusPoints\", 1, 100, 5</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/PlotShape.html\">PlotShape</a> <a href=\"#!/url=./si_cmds/CreateCurve.html\">CreateCurve</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";