var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PointCollection.PositionArray</title>\n\
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
            <h1>PointCollection.PositionArray</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/PointCollection.html\">PointCollection</a>.PositionArray <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Sets or returns the point positions as a 2-dimensional <a href=\"#!/url=./files/Array.htm\">Array</a>, \n\
(the first dimension contains the x,y,z values). For non-scripted operators \n\
this property can only be set if the object has been frozen. This operation\n\
is not undoable.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Object rtn = PointCollection.PositionArray;\n\
// set accessor\n\
PointCollection.PositionArray = Object;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">set oRoot = application.activeproject.activescene.root\n\
set oObj = oRoot.addgeometry( \"Cube\", \"MeshSurface\" )\n\
FreezeObj oObj\n\
set oGeometry = oObj.activeprimitive.geometry\n\
dGlobalPosY = oObj.Kinematics.global.parameters(\"posy\").value\n\
\' get the geometry points in an array of x,y,z values\n\
aPositions = oGeometry.Points.PositionArray\n\
\' squish all the points that are below the Y=0 axis\n\
dSquishFactor = 3\n\
for i = LBound(aPositions, 2) to UBound(aPositions, 2)\n\
	\' Compute the point\'s global Y position.\n\
	dGlobalYPnt = aPositions(1, i) + dGlobalPosY \n\
	\' If the point is below the Y=0 plane...\n\
	If dGlobalYPnt &lt; 0 Then\n\
		\' Compute the squish factor for the point.\n\
		dSquishPnt = 1.0 - dGlobalYPnt * dSquishFactor\n\
		\' Squish the point.\n\
		aPositions(0, i) = aPositions(0, i) * dSquishFactor\n\
		aPositions(1, i) = - dGlobalPosY\n\
		aPositions(2, i) = aPositions(2, i) * dSquishFactor\n\
	End If	\n\
next\n\
\' set the geometry points using the modified position array\n\
oGeometry.Points.PositionArray = aPositions</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">TestPointsPositionArray();\n\
function TestPointsPositionArray()\n\
{\n\
LogMessage( \"----- Test PointCollection.PositionArray -----\" );\n\
var oCube = CreatePrim(\"Cube\", \"MeshSurface\");\n\
FreezeObj( oCube.name );\n\
LogMessage( \"--- current position array ---\" );\n\
var aPos = new VBArray(oCube.ActivePrimitive.Geometry.Points.PositionArray);\n\
for (i = 0; i &lt;= aPos.ubound(2); i++) {\n\
LogMessage(i + \" \" + aPos.getItem(0, i) + \" \" + aPos.getItem(1, i) + \" \" + aPos.getItem(2, i));\n\
}\n\
LogMessage( \"--- current position array (1 dim) ---\" );\n\
var aPos2 = aPos.toArray();\n\
LogMessage(typeof(aPos2));\n\
LogMessage(aPos2.length);\n\
for (i = 0; i &lt; aPos2.length; i += 3) {\n\
LogMessage(i + \" \" + aPos2[i] + \" \" + aPos2[i+1] + \" \" + aPos2[i+2]);\n\
}\n\
aPos2[0] = -4;\n\
aPos2[1] = -4;\n\
aPos2[2] = -4;\n\
aPos2[3] = 4;\n\
aPos2[4] = -4;\n\
aPos2[5] = -4;\n\
aPos2[6] = -1;\n\
aPos2[7] = 4;\n\
aPos2[8] = -1;\n\
aPos2[9] = 1;\n\
aPos2[10] = 4;\n\
aPos2[11] = -1;\n\
aPos2[12] = -4;\n\
aPos2[13] = -4;\n\
aPos2[14] = 4;\n\
aPos2[15] = 4;\n\
aPos2[16] = -4;\n\
aPos2[17] = 4;\n\
aPos2[18] = -1;\n\
aPos2[19] = 4;\n\
aPos2[20] = 1;\n\
aPos2[21] = 1;\n\
aPos2[22] = 4;\n\
aPos2[23] = 1;\n\
oCube.ActivePrimitive.Geometry.Points.PositionArray = aPos2;\n\
LogMessage( \"--- new position array ---\" );\n\
var aPos = new VBArray(oCube.ActivePrimitive.Geometry.Points.PositionArray);\n\
for (i = 0; i &lt;= aPos.ubound(2); i++) {\n\
LogMessage(i + \" \" + aPos.getItem(0, i) + \" \" + aPos.getItem(1, i) + \" \" + aPos.getItem(2, i));\n\
}\n\
return 0;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";