var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSIMath.MapObjectPositionToObjectSpace</title>\n\
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
            <h1>XSIMath.MapObjectPositionToObjectSpace</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/XSIMath.html\">XSIMath</a>.MapObjectPositionToObjectSpace</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>Converts a position described in an ObjectSpace to a position in a different ObjectSpace.</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SIVector3 XSIMath.MapObjectPositionToObjectSpace( SITransformation in_pObjectSpace, SITransformation in_pSpace, SIVector3 in_pPosition );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = XSIMath.MapObjectPositionToObjectSpace( ObjectSpace, Space, Position );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/SIVector3.html\">SIVector3</a> (position)</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ObjectSpace		</td>\n\
		<td><a href=\"#!/url=./si_om/SITransformation.html\">SITransformation</a>		</td>\n\
		<td>\n\
 ObjectSpace in which the position is described.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Space		</td>\n\
		<td><a href=\"#!/url=./si_om/SITransformation.html\">SITransformation</a>		</td>\n\
		<td>\n\
 Space in which we want to convert the position .		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Position		</td>\n\
		<td><a href=\"#!/url=./si_om/SIVector3.html\">SIVector3</a>		</td>\n\
		<td>\n\
 Position to convert.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">var	oCube = ActiveSceneRoot.AddGeometry(\"Cube\",\"MeshSurface\");\n\
oCube.Kinematics.Global.Parameters(\"posy\").value = 4.0;\n\
oCube.Kinematics.Global.Parameters(\"posx\").value = 2.0;\n\
var	oGrid = ActiveSceneRoot.AddGeometry(\"Grid\", \"MeshSurface\");\n\
oGrid.Kinematics.Global.Parameters(\"posy\").value = -2.0;\n\
if( Above(oCube, oGrid) )\n\
	 Application.LogMessage ( \"The Cube is above the Grid\" );\n\
else\n\
	 Application.LogMessage ( \"The Cube is not above the Grid\" );\n\
//Function that returns true if in_obj1 is above in_obj2.\n\
//Which means that all \" y\" values of in_obj1 vertices relative to in_obj2 are bigger\n\
//than in_obj2 \"y\" values\n\
function  Above(in_obj1, in_obj2)\n\
{\n\
	 var l_trans1, l_trans2, l_pos, l_biggesty;\n\
	 l_biggesty = 0;\n\
	 var oGeometry2 = in_obj2.activeprimitive.geometry;\n\
	 var l_nbPoints = oGeometry2.Points.Count;\n\
	 //Determine the upper position on in_obj2\n\
	 for(var i = 0; i &lt; l_nbPoints; i++) \n\
	 { \n\
		if (oGeometry2.Points(i).position.y &gt; l_biggesty)\n\
			l_biggesty = oGeometry2.Points(i).position.y;\n\
	 }\n\
	 l_trans1 = in_obj1.Kinematics.Global.Transform;\n\
	 l_trans2 = in_obj2.Kinematics.Global.Transform;\n\
	 var oGeometry1 = in_obj1.activeprimitive.geometry;\n\
	 l_nbPoints = oGeometry1.Points.Count;\n\
	 //Determine if all vertices of in_obj1 are above in_obj2\n\
	 for(var i = 0; i &lt; l_nbPoints; i++) \n\
	 { \n\
		l_pos = oGeometry1.Points(i).position;\n\
		l_pos = XSIMath.MapObjectPositionToObjectSpace(l_trans1, l_trans2, l_pos);;\n\
		if( l_pos.y &lt; l_biggesty )\n\
			return false;\n\
	 }\n\
	return true;\n\
}\n\
//OUTPUT\n\
//INFO : The Cube is above the Grid</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">set oRoot = Application.ActiveProject.ActiveScene.Root\n\
	set oCube = oRoot.AddGeometry(\"Cube\",\"MeshSurface\")\n\
	oCube.Kinematics.Global.Parameters(\"posy\").value = 4.0\n\
	oCube.Kinematics.Global.Parameters(\"posx\").value = 2.0\n\
	set oGrid = oRoot.AddGeometry(\"Grid\", \"MeshSurface\")\n\
	oGrid.Kinematics.Global.Parameters(\"posy\").value = -2.0\n\
	if Above(oCube, oGrid) then\n\
			Application.LogMessage \"The Cube is above the Grid\"\n\
	else\n\
			Application.LogMessage \"The Cube is not above the Grid\"\n\
	end if\n\
	\'Function that returns true if in_obj1 is above in_obj2.\n\
	\'Which means that all \" y\" values of in_obj1 vertices relative to in_obj2 are bigger\n\
	\'than in_obj2 \"y\" values\n\
	Function Above(in_obj1, in_obj2)\n\
		Dim l_trans1, l_trans2, l_pos, l_biggesty\n\
		l_biggesty = 0\n\
		\'Determine the upper position on in_obj2\n\
		for each p in in_obj2.activeprimitive.geometry.points\n\
			if p.position.y &gt; l_biggesty then\n\
				l_biggesty = p.position.y\n\
			end if\n\
		next\n\
		set l_trans1 = in_obj1.Kinematics.Global.Transform\n\
		set l_trans2 = in_obj2.Kinematics.Global.Transform\n\
		\'Determine if all vertices of in_obj1 are above in_obj2\n\
		for each p in in_obj1.activeprimitive.geometry.points\n\
			set l_pos = p.position\n\
			set l_pos = xsimath.MapObjectPositionToObjectSpace(l_trans1, l_trans2, l_pos)\n\
			if l_pos.y &lt; l_biggesty then\n\
				Above = False\n\
				Exit Function\n\
			end if\n\
		next\n\
		Above = True\n\
	End Function</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";