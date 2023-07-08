var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SubComponent.ComponentCollection</title>\n\
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
            <h1>SubComponent.ComponentCollection</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/SubComponent.html\">SubComponent</a>.ComponentCollection <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v3.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns the collection object matching the specific component type for the current SubComponent. For example:\n\
<br /><br /> - <a href=\"#!/url=./si_om/VertexCollection.html\">VertexCollection</a> for <a href=\"#!/url=./si_om/Vertex.html\">Vertex</a> components (on \n\
<a href=\"#!/url=./si_om/PolygonMesh.html\">PolygonMesh</a>es)\n\
<br /><br /> - <a href=\"#!/url=./si_om/ControlPointCollection.html\">ControlPointCollection</a> for <a href=\"#!/url=./si_om/ControlPoint.html\">ControlPoint</a> \n\
components (on <a href=\"#!/url=./si_om/NurbsCurveList.html\">NurbsCurveList</a>s and <a href=\"#!/url=./si_om/NurbsSurfaceMesh.html\">NurbsSurfaceMesh</a>es)\n\
<br /><br /> - <a href=\"#!/url=./si_om/EdgeCollection.html\">EdgeCollection</a> for <a href=\"#!/url=./si_om/Edge.html\">Edge</a> components (on \n\
<a href=\"#!/url=./si_om/PolygonMesh.html\">PolygonMesh</a>es)\n\
<br /><br /> - <a href=\"#!/url=./si_om/PolygonFaceCollection.html\">PolygonFaceCollection</a> for <a href=\"#!/url=./si_om/PolygonFace.html\">PolygonFace</a> components\n\
<br /><br /> - <a href=\"#!/url=./si_om/NurbsSurfaceCollection.html\">NurbsSurfaceCollection</a> for subsurface (<a href=\"#!/url=./si_om/NurbsSurface.html\">NurbsSurface</a>) \n\
components (on <a href=\"#!/url=./si_om/NurbsSurfaceMesh.html\">NurbsSurfaceMesh</a>es)\n\
<br /><br />\n\
Note: If there is not an equivalent component collection, then an empty <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> \n\
is returned (for example, when a boundary or a knot is selected on a <a href=\"#!/url=./si_om/NurbsSurfaceMesh.html\">NurbsSurfaceMesh</a>).\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Object rtn = SubComponent.ComponentCollection;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to query the type of component\n\
	that is currently selected. This can be useful if you are\n\
	writing a tool that operates only on a specific subcomponent\n\
	and you are checking to make sure the correct type of\n\
	subcomponent has been selected by the user.\n\
*/\n\
NewScene( null, false );\n\
var root = Application.ActiveSceneRoot;\n\
// For the purposes of this example we are creating \n\
// the cube and adding it to the selection\n\
var box = root.AddGeometry( \"Cube\", \"MeshSurface\" );\n\
Selection.Add( box.ActivePrimitive.Geometry.Segments(0) );\n\
// With one facet selected, the Selection.Item property\n\
// returns a CollectionItem from which you can retrieve\n\
// the SubComponent \n\
var first_selected = Selection.Item(0).SubComponent;\n\
Application.LogMessage( Application.ClassName(first_selected) );\n\
// The SubComponent object gives you access to the actual\n\
// interface for the component type via its ComponentCollection\n\
// property (in this case, an Edge object)\n\
var component_collection = first_selected.ComponentCollection;\n\
Application.LogMessage( Application.ClassName(component_collection.Item(0)) );\n\
// Expected results:\n\
//INFO : SubComponent\n\
//INFO : Edge</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">set oObj = ActiveSceneRoot.AddGeometry(\"Cube\",\"MeshSurface\")\n\
set oPoint = oObj.ActivePrimitive.Geometry.Points(4)\n\
set oSubComponent = oPoint.SubComponent\n\
oSubComponent.AddElement 3\n\
set oPoints = oSubComponent.ComponentCollection\n\
for each point in oPoints\n\
	Application.LogMessage point.Index\n\
next</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/PointCollection.html\">PointCollection</a> <a href=\"#!/url=./si_om/SegmentCollection.html\">SegmentCollection</a> <a href=\"#!/url=./si_om/FacetCollection.html\">FacetCollection</a> <a href=\"#!/url=./si_om/NurbsCurveCollection.html\">NurbsCurveCollection</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";