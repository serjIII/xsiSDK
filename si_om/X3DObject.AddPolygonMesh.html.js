var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>X3DObject.AddPolygonMesh</title>\n\
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
            <h1>X3DObject.AddPolygonMesh</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a>.AddPolygonMesh</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Creates a <a href=\"#!/url=./si_om/PolygonMesh.html\">PolygonMesh</a> object. This is typically used for creating a \n\
polygon mesh from a set of geometry data.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>X3DObject X3DObject.AddPolygonMesh( Object in_vertices, Object in_polygonData, String in_bstrName );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = X3DObject.AddPolygonMesh( [Vertices], [PolygonData], [Name] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns the <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> parent of the new geometry. The new X3DObject is parented under this X3DObject. </p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Vertices		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a>		</td>\n\
		<td>\n\
Array representing the polygon vertices. The array is either a 1D ordered array of x,y,z values or a 2D array (Nx3) of x,y,z values.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PolygonData		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a>		</td>\n\
		<td>\n\
\n\
		An ordered array of polygon definitions, each polygon is defined by a list\n\
		of elements, the first element of a polygon definition must be set with the\n\
		number of indices for that polygon. The ordering of vertices must respect\n\
		a ccw ordering to get out going normals (right-hand rule). For example, an array of\n\
		polygons with 4 indices each = {4,0,1,4,3,4,1,2,5,4... }\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
name of object 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">NewScene , false\n\
points = Array(_\n\
	-1., 0., -1., _\n\
	-1., 0., 0., _\n\
	-1., 0., 1., _\n\
	0., 0., -1., _\n\
	0., 0., 0., _\n\
	0., 0., 1., _\n\
	1., 0., -1., _\n\
	1., 0., 0., _\n\
	1., 0., 1. _\n\
)\n\
data = Array( _\n\
	4,0,1,4,3, _\n\
	4,1,2,5,4, _\n\
	4,3,4,7,6, _\n\
	4,4,5,8,7 _\n\
)\n\
set oRoot = ActiveProject.ActiveScene.Root\n\
set oPolyMesh = oRoot.AddPolygonMesh( points, data, \"MyMesh\" )\n\
Application.LogMessage TypeName(oPolyMesh)\n\
\' Expected results:\n\
\'INFO : X3DObject</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">NewScene( null, false );\n\
var oRoot = Application.ActiveSceneRoot;\n\
var aVertices = new Array(0,0,0, 0,0,1, 1,0,1, 1,0,0);\n\
var aPolygons = new Array(4,0,1,2,3);\n\
oRoot.AddPolygonMesh( aVertices, aPolygons, \"MyPolygonMesh\" );</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";