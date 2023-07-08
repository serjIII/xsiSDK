var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Point.SubComponent</title>\n\
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
            <h1>Point.SubComponent</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Point.html\">Point</a>.SubComponent <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v3.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Creates a <a href=\"#!/url=./si_om/SubComponent.html\">SubComponent</a> from this point. The new SubComponent\n\
allows you to access the specific type of <a href=\"#!/url=./si_om/Geometry.html\">Geometry</a>, such as\n\
a <a href=\"#!/url=./si_om/Vertex.html\">Vertex</a> for a <a href=\"#!/url=./si_om/PolygonMesh.html\">PolygonMesh</a> object vs. a\n\
<a href=\"#!/url=./si_om/ControlPoint.html\">ControlPoint</a> for a <a href=\"#!/url=./si_om/NurbsSurfaceMesh.html\">NurbsSurfaceMesh</a>.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
SubComponent rtn = Point.SubComponent;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
# This example demonstrates how to work with a subset of points on a polygon mesh\n\
#\n\
app = Application\n\
app.NewScene( \"\", 0 )\n\
oObj = app.ActiveSceneRoot.AddGeometry( \"Cube\",\"MeshSurface\" )\n\
oPointColl = oObj.GetActivePrimitive3().Geometry.Points\n\
oSubComponent = oPointColl(2).SubComponent\n\
app.LogMessage( \"%s has %s components of type %s\" % ( oSubComponent.FullName , len(oSubComponent.ElementArray)+1, \\\n\
	app.ClassName(oSubComponent.ComponentCollection(0)) ) )\n\
oObj = app.ActiveSceneRoot.AddGeometry( \"Cube\",\"MeshSurface\" )\n\
oSubComponent = oObj.GetActivePrimitive3().Geometry.Points(2).SubComponent\n\
oSubComponent.AddElement(3)\n\
app.LogMessage( \"%s has %s components of type %s\" % ( oSubComponent.FullName , len(oSubComponent.ElementArray)+1, \\\n\
	app.ClassName(oSubComponent.ComponentCollection(0)) ) )\n\
# Expected results:\n\
#INFO : cube.pnt[2] has 2 components of type Vertex\n\
#INFO : cube1.pnt[2,3] has 3 components of type Vertex</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to access a NURBS-specific property\n\
	on a NurbsSurfaceMesh. First it starts out getting the generic\n\
	Points collection. From the PointCollection it creates a SubComponent.\n\
	From the SubComponent, it gets the NURBS-specific ControlPointCollection\n\
*/\n\
NewScene( null, false );\n\
// Setup: create a NURBS mesh and get its point collection\n\
var grid = Application.ActiveSceneRoot.AddGeometry( \"Grid\", \"NurbsSurface\" );\n\
var pnts = grid.ActivePrimitive.Geometry.Points;\n\
// Convert it to SubComponent and just for fun, consider only ten points \n\
// chosen at random\n\
var subcmp = pnts.SubComponent;\n\
var subset = new Array(13, 92, 24, 65, 11, 2, 4, 64, 100, 111);\n\
subcmp.ElementArray = subset;\n\
// Now convert the SubComponent to a ControlPointCollection using the\n\
// SubComponent.ComponentCollection property and then loop through the \n\
// array, checking to see if we have any boundaries\n\
var ctrlpnts = subcmp.ComponentCollection;\n\
for (var i=0; i&lt;ctrlpnts.Count; i++) {\n\
	var results = ( ctrlpnts(i).IsBoundary ) ? \"\" : \"NOT \";\n\
	Application.LogMessage( \"CtrlPnt[\" + i + \"] is at index \" + ctrlpnts(i).Index \n\
		+ \" on the NurbsSurface and is \" + results + \" a boundary.\" );\n\
}\n\
// Expected results:\n\
//INFO : CtrlPnt[0] is at index 13 on the NurbsSurface and is NOT  a boundary.\n\
//INFO : CtrlPnt[1] is at index 92 on the NurbsSurface and is NOT  a boundary.\n\
//INFO : CtrlPnt[2] is at index 24 on the NurbsSurface and is NOT  a boundary.\n\
//INFO : CtrlPnt[3] is at index 65 on the NurbsSurface and is  a boundary.\n\
//INFO : CtrlPnt[4] is at index 11 on the NurbsSurface and is  a boundary.\n\
//INFO : CtrlPnt[5] is at index 2 on the NurbsSurface and is  a boundary.\n\
//INFO : CtrlPnt[6] is at index 4 on the NurbsSurface and is  a boundary.\n\
//INFO : CtrlPnt[7] is at index 64 on the NurbsSurface and is NOT  a boundary.\n\
//INFO : CtrlPnt[8] is at index 100 on the NurbsSurface and is NOT  a boundary.\n\
//INFO : CtrlPnt[9] is at index 111 on the NurbsSurface and is  a boundary.</pre></td></tr>\n\
</table>\n\
</div><h4>3. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example demonstrates how to determine which points are selected\n\
\' in the UI by using the SubComponent object via the Selection\n\
\' \n\
NewScene , false\n\
\' Setup: create a polygon mesh and select some vertices on it\n\
set torus = Application.ActiveSceneRoot.AddGeometry( \"Torus\", \"MeshSurface\" )\n\
Selection.Clear\n\
Selection.SetAsText torus.Name &amp; \".pnt[2-7,17,18,21-23,26,29,47,51,55]\" \n\
\' When components are selected, the first member of the Selection\n\
\' is returned as a CollectionItem which can then be converted to a\n\
\' SubComponent object. From there, the ComponentCollection property\n\
\' converts it to the proper collection type (in this case a VertexCollection)\n\
set selected = Selection(0).SubComponent.ComponentCollection\n\
for each sel in selected \n\
	Application.LogMessage \"edge[\" &amp; sel.Index &amp; \"] is selected.\"\n\
next\n\
\' Expected results:\n\
\'INFO : edge[2] is selected.\n\
\'INFO : edge[3] is selected.\n\
\'INFO : edge[4] is selected.\n\
\'INFO : edge[5] is selected.\n\
\'INFO : edge[6] is selected.\n\
\'INFO : edge[7] is selected.\n\
\'INFO : edge[17] is selected.\n\
\'INFO : edge[18] is selected.\n\
\'INFO : edge[21] is selected.\n\
\'INFO : edge[22] is selected.\n\
\'INFO : edge[23] is selected.\n\
\'INFO : edge[26] is selected.\n\
\'INFO : edge[29] is selected.\n\
\'INFO : edge[47] is selected.\n\
\'INFO : edge[51] is selected.\n\
\'INFO : edge[55] is selected.</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";