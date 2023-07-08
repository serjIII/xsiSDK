var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SubComponent</title>\n\
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
            <h1>SubComponent</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SubComponent</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_SubComponent\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1SubComponent.html\">SubComponent</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\">SubComponent</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v2.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Provides access to sub-elements of an <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a>\'s <a href=\"#!/url=./si_om/Geometry.html\">Geometry</a>. \n\
The most common uses for the SubComponent object include:\n\
<br /><br />\n\
- Accessing the components that are selected (see <a href=\"#!/url=./si_om/CollectionItem.SubComponent.html\">CollectionItem.SubComponent</a> and\n\
<a href=\"#!/url=./si_om/Selection.Item.html\">Selection.Item</a>)\n\
<br /><br />\n\
- Accessing a geometry-specific collection of components on an object (see SubComponent.ComponentCollection)\n\
<br /><br />\n\
- Dynamically working with a subset of components (see <a href=\"#!/url=./si_om/SubComponent.AddElement.html\">SubComponent.AddElement</a> and\n\
<a href=\"#!/url=./si_om/SubComponent.RemoveElement.html\">SubComponent.RemoveElement</a>)\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SubComponent.AddElement.html\">AddElement</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SubComponent.CreateCluster.html\">CreateCluster</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SubComponent.RemoveElement.html\">RemoveElement</a>		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Properties</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SubComponent.ClusterType.html\">ClusterType</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SubComponent.ComponentCollection.html\">ComponentCollection</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SubComponent.ElementArray.html\">ElementArray</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SubComponent.Parent3DObject.html\">Parent3DObject</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SubComponent.Type.html\">Type</a>		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to determine which edges are selected\n\
	in the UI by using the SubComponent object via the Selection\n\
*/ \n\
NewScene( null, false );\n\
// Setup: create a polygon mesh and select some edges on it\n\
var disc = Application.ActiveSceneRoot.AddGeometry( \"Disc\", \"MeshSurface\" );\n\
Selection.Clear();\n\
Selection.SetAsText( disc.Name + \".edge[113,115,117,119,121]\" );\n\
// When components are selected, the first member of the Selection\n\
// is returned as a CollectionItem which can then be converted to a\n\
// SubComponent object. From there, the ComponentCollection property\n\
// converts it to the proper collection type (in this case an EdgeCollection)\n\
var selected = Selection(0).SubComponent.ComponentCollection;\n\
for (var i=0; i&lt;selected.Count; i++) {\n\
	var sel = selected(i);\n\
	Application.LogMessage( \"edge[\" + sel.Index + \"] is selected.\" );\n\
}\n\
// Expected results:\n\
//INFO : edge[113] is selected.\n\
//INFO : edge[115] is selected.\n\
//INFO : edge[117] is selected.\n\
//INFO : edge[119] is selected.\n\
//INFO : edge[121] is selected.</pre></td></tr>\n\
</table>\n\
</div><h4>2. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
# This example demonstrates how to access a NURBS-specific property\n\
# on a NurbsSurfaceMesh. First it starts out getting the generic\n\
# Points collection. From the PointCollection it creates a SubComponent.\n\
# From the SubComponent, it gets the NURBS-specific ControlPointCollection\n\
# \n\
app = Application\n\
app.NewScene( \"\", 0 )\n\
# Setup: create a NURBS mesh and get its point collection\n\
grid = app.ActiveSceneRoot.AddGeometry( \"Grid\", \"NurbsSurface\" )\n\
pnts = grid.GetActivePrimitive3().Geometry.Points\n\
# Convert it to SubComponent and just for fun, consider only ten points \n\
# chosen at random\n\
subcmp = pnts.SubComponent\n\
subset = [13, 92, 24, 65, 11, 2, 4, 64, 100, 111]\n\
subcmp.ElementArray = subset\n\
# Now convert the SubComponent to a ControlPointCollection using the\n\
# SubComponent.ComponentCollection property and then loop through the \n\
# array, checking to see if we have any boundaries\n\
for ctrlpnt in subcmp.ComponentCollection :\n\
	msg = \"CtrlPnt[\" + str(ctrlpnt.Index) + \"]\"\n\
	if ctrlpnt.IsBoundary :\n\
		msg += \" on the NurbsSurface and is a boundary.\" \n\
	else :\n\
		msg += \" on the NurbsSurface and is NOT a boundary.\" \n\
	app.LogMessage( msg )\n\
# Expected results:\n\
#INFO : CtrlPnt[13] on the NurbsSurface and is NOT a boundary.\n\
#INFO : CtrlPnt[92] on the NurbsSurface and is NOT a boundary.\n\
#INFO : CtrlPnt[24] on the NurbsSurface and is NOT a boundary.\n\
#INFO : CtrlPnt[65] on the NurbsSurface and is a boundary.\n\
#INFO : CtrlPnt[11] on the NurbsSurface and is a boundary.\n\
#INFO : CtrlPnt[2] on the NurbsSurface and is a boundary.\n\
#INFO : CtrlPnt[4] on the NurbsSurface and is a boundary.\n\
#INFO : CtrlPnt[64] on the NurbsSurface and is NOT a boundary.\n\
#INFO : CtrlPnt[100] on the NurbsSurface and is NOT a boundary.\n\
#INFO : CtrlPnt[111] on the NurbsSurface and is a boundary.</pre></td></tr>\n\
</table>\n\
</div><h4>3. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// Create a sample scene and select four points on a grid\n\
var oGrid = ActiveSceneRoot.AddGeometry( \"Grid\", \"NurbsSurface\" ) ;\n\
SelectObj( oGrid ) ;\n\
ActivateVertexSelTool();\n\
AddToSelection(oGrid.Name+\".pnt[(0,0),(1,0),(2,0),(3,0)]\", null, true);\n\
// Print out information that is available from the OM\n\
Application.LogMessage( ClassName( Selection(0) ) ) ;\n\
var oSubComponent = Selection(0).SubComponent ;\n\
Application.LogMessage( oSubComponent.Parent3DObject ) ;\n\
Application.LogMessage( oSubComponent.Type ) ;\n\
Application.LogMessage( ClassName( oSubComponent.ComponentCollection ) ) ;\n\
Application.LogMessage( oSubComponent.ComponentCollection.Count ) ;\n\
// Result of running this script:\n\
//INFO : \"CollectionItem\"\n\
//INFO : \"grid\"\n\
//INFO : \"pntSubComponent\"\n\
//INFO : \"PointCollection\"\n\
//INFO : \"4\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/PointCollection.SubComponent.html\">PointCollection.SubComponent</a> <a href=\"#!/url=./si_om/SegmentCollection.SubComponent.html\">SegmentCollection.SubComponent</a> <a href=\"#!/url=./si_om/FacetCollection.SubComponent.html\">FacetCollection.SubComponent</a> <a href=\"#!/url=./si_om/CollectionItem.SubComponent.html\">CollectionItem.SubComponent</a> <a href=\"#!/url=./si_om/Geometry.CreateSubComponent.html\">Geometry.CreateSubComponent</a> <a href=\"#!/url=./si_om/Cluster.CreateSubComponent.html\">Cluster.CreateSubComponent</a> <a href=\"#!/url=./si_om/ClusterTypes.html\">ClusterTypes</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";