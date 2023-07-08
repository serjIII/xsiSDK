var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Segment.SubComponent</title>\n\
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
            <h1>Segment.SubComponent</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Segment.html\">Segment</a>.SubComponent <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v3.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Creates a <a href=\"#!/url=./si_om/SubComponent.html\">SubComponent</a> from this segment. The new SubComponent\n\
allows you to access the specific type of <a href=\"#!/url=./si_om/Geometry.html\">Geometry</a> (the \n\
<a href=\"#!/url=./si_om/Edge.html\">Edge</a> for a <a href=\"#!/url=./si_om/PolygonMesh.html\">PolygonMesh</a> object).\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
SubComponent rtn = Segment.SubComponent;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example demonstrates how to work with a subset of segments on a polygon mesh\n\
\'\n\
NewScene , false\n\
dim oObj, oSubComponent \n\
set oObj = Application.ActiveSceneRoot.AddGeometry(\"Cube\",\"MeshSurface\")\n\
set oSegColl = oObj.ActivePrimitive.Geometry.Edges\n\
set oSubComponent = oSegColl(4).SubComponent\n\
Application.LogMessage oSubComponent &amp; \" has \" &amp; UBound(oSubComponent.ElementArray)+1 &amp; _\n\
	\" components of type \" &amp; TypeName(oSubComponent.ComponentCollection(0))\n\
set oObj = Application.ActiveSceneRoot.AddGeometry(\"Cube\",\"MeshSurface\")\n\
set oSubComponent = oObj.ActivePrimitive.Geometry.Edges(7).SubComponent\n\
oSubComponent.AddElement 4\n\
Application.LogMessage oSubComponent &amp; \" has \" &amp; UBound(oSubComponent.ElementArray)+1 &amp; _\n\
	\" components of type \" &amp; TypeName(oSubComponent.ComponentCollection(0))\n\
\' Expected results:\n\
\'INFO : cube.edge[4] has 1 components of type Edge\n\
\'INFO : cube1.edge[4,7] has 2 components of type Edge</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to access a PolygonMesh-specific property.\n\
	First it starts out getting the generic Segments collection. From the \n\
	SegmentCollection it creates a SubComponent. From the SubComponent, it \n\
	gets the PolygonMesh-specific EdgeCollection\n\
*/\n\
NewScene( null, false );\n\
// Setup: create a PolygonMesh and get its segment collection\n\
var cyl = Application.ActiveSceneRoot.AddGeometry( \"Disc\", \"MeshSurface\" );\n\
var fcs = cyl.ActivePrimitive.Geometry.Segments;\n\
// Convert it to SubComponent and just for fun, select edges in the middle\n\
var subcmp = fcs.SubComponent;\n\
var subset = new Array(23,40,31,12,6,15,22,39);\n\
subcmp.ElementArray = subset;\n\
// Now convert the SubComponent to a EdgeCollection using the\n\
// SubComponent.ComponentCollection property and then loop \n\
// through the list of Edges, finding whether it is a boundary\n\
var edgs = subcmp.ComponentCollection;\n\
for (var i=0; i&lt;edgs.Count; i++) {\n\
	var results = ( edgs(i).IsBoundary ) ? \"\" : \"NOT \";\n\
	Application.LogMessage( \"Edge[\" + i + \"] at index \" + edgs(i).Index \n\
		+ \" is \" + results + \"a boundary.\" );\n\
}\n\
// Expected results:\n\
//INFO : Edge[0] at index 23 is a boundary.\n\
//INFO : Edge[1] at index 40 is a boundary.\n\
//INFO : Edge[2] at index 31 is NOT a boundary.\n\
//INFO : Edge[3] at index 12 is NOT a boundary.\n\
//INFO : Edge[4] at index 6 is NOT a boundary.\n\
//INFO : Edge[5] at index 15 is NOT a boundary.\n\
//INFO : Edge[6] at index 22 is NOT a boundary.\n\
//INFO : Edge[7] at index 39 is NOT a boundary.</pre></td></tr>\n\
</table>\n\
</div><h4>3. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
# This example demonstrates how to determine which edges are selected\n\
# in the UI by using the SubComponent object via the Selection\n\
# \n\
app = Application\n\
app.NewScene( \"\", 0 )\n\
# Setup: create a polygon mesh and select some edges on it\n\
disc = app.ActiveSceneRoot.AddGeometry( \"Disc\", \"MeshSurface\" )\n\
app.Selection.Clear()\n\
app.Selection.SetAsText( disc.Name + \".edge[113,115,117,119,121]\" );\n\
# When components are selected, the first member of the Selection\n\
# is returned as a CollectionItem which can then be converted to a\n\
# SubComponent object. From there, the ComponentCollection property\n\
# converts it to the proper collection type (in this case an EdgeCollection)\n\
selected = app.Selection(0).SubComponent.ComponentCollection\n\
for sel in selected :\n\
	app.LogMessage( \"edge[%s] is selected.\" % (sel.Index) )\n\
# Expected results:\n\
#INFO : edge[113] is selected.\n\
#INFO : edge[115] is selected.\n\
#INFO : edge[117] is selected.\n\
#INFO : edge[119] is selected.\n\
#INFO : edge[121] is selected.</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";