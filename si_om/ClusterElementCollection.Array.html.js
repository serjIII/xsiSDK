var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ClusterElementCollection.Array</title>\n\
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
            <h1>ClusterElementCollection.Array</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/ClusterElementCollection.html\">ClusterElementCollection</a>.Array <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Sets or returns an array of element values. <br /><br />\n\
In the case of a <a href=\"#!/url=./si_om/Cluster.html\">Cluster</a>, this provides read-only access to\n\
a 1-dimensional <a href=\"#!/url=./files/Array.htm\">Array</a> of the associated geometry indices \n\
(<a href=\"#!/url=./files/Integer.htm\">Integer</a>s) for each component.<br /><br />\n\
In the case of a <a href=\"#!/url=./si_om/ClusterProperty.html\">ClusterProperty</a>, this allows you to get or \n\
set a 2-dimensional <a href=\"#!/url=./files/Array.htm\">Array</a> containing all the data of the cluster \n\
property (<a href=\"#!/url=./files/Double.htm\">Double</a>s). The size of the first dimension depends on \n\
the ClusterProperty. For example for a weight map there is only 1 element but for \n\
an envelope weight map the size is equal to the number of deformers. The second \n\
dimension is the size of the cluster.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Object rtn = ClusterElementCollection.Array;\n\
// set accessor\n\
ClusterElementCollection.Array = Object;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">dim oRoot, oGrid, oCluster, aElements\n\
set oRoot = Application.ActiveProject.ActiveScene.Root\n\
set oGrid = oRoot.AddGeometry(\"Grid\",\"MeshSurface\")\n\
set oCluster = oGrid.ActivePrimitive.Geometry.AddCluster( _\n\
	siPolygonCluster, \"PolygonClusterOnGrid\", _\n\
	array(59,60,61))\n\
aElements  = oCluster.Elements.Array\n\
LogMessage \"lbound(aElements,1) \" &amp; lbound(aElements,1)\n\
LogMessage \"ubound(aElements,1) \" &amp; ubound(aElements,1)\n\
for iIndex=lbound(aElements,1) to ubound(aElements,1)\n\
	iElement = aElements(iIndex)\n\
	LogMessage \"element(\" &amp; iIndex &amp; \") = \" &amp; _\n\
		oCluster.Type &amp; \"(\" &amp; iElement &amp; \") \"\n\
next</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to work with the safearray returned\n\
	from ClusterElementCollection.Array using the GridData object\n\
*/\n\
// ***************************************\n\
//\n\
// 		SETUP\n\
//\n\
// Create scene with sphere\n\
NewScene( null, false );\n\
var obj = ActiveSceneRoot.AddGeometry( \"Grid\", \"MeshSurface\" ) ;\n\
obj.subdivu = 2;\n\
obj.subdivv = 1;\n\
AddVertexColorsToMesh( obj )\n\
// ***************************************\n\
//\n\
// 		FIND VERTEX COLORS\n\
//\n\
// Get current polygon mesh geometry\n\
var polymesh = obj.ActivePrimitive.Geometry;    \n\
// Returns a ClusterPropertyCollection\n\
var vertexcolors = polymesh.VertexColors;\n\
Application.LogMessage( vertexcolors.Count );\n\
for ( var j=0; j&lt;vertexcolors.Count; j++ ) { \n\
	// Gets a ClusterProperty\n\
	var vertexcolor = vertexcolors(j);\n\
	Application.LogMessage( vertexcolor.Fullname );\n\
	// Returns a ClusterElementCollection\n\
	var cls_prop_elems = vertexcolor.Elements;\n\
	// Returns a VBArray\n\
	var vbValues = cls_prop_elems.Array;\n\
	Application.LogMessage( \"# of dimensions: \" + vbValues.dimensions() );\n\
	for ( var d=1; d&lt;=vbValues.dimensions(); d++ ) {\n\
		Application.LogMessage( \"range of dimension \" + d + \": \" + vbValues.lbound(d) + \"..\" + vbValues.ubound(d) );\n\
	}\n\
	// DISPLAY INFO\n\
	var gridtable = MakeMeAPPG( vbValues );\n\
	var canceled = InspectObj( gridtable, \"\", \"\", siModal, false );\n\
	// CHANGE INFO\n\
	if ( !canceled ) {\n\
		grid_mod = gridtable.Parameters(\"VertexColorChart\").Value;\n\
		grid_mod.SetCell( 0, 0, 1.23 );\n\
		DeleteObj( gridtable );\n\
		gridtable = MakeMeAPPG( grid_mod.Data );\n\
		// RE-DISPLAY MODIFIED INFO\n\
		InspectObj( gridtable, \"\", \"\", siModal, false );\n\
	}\n\
}  \n\
// ***************************************\n\
//\n\
// 		ADD VERTEX COLORS\n\
//\n\
function AddVertexColorsToMesh( in_Mesh ) \n\
{\n\
	// Get mesh\'s material\n\
	var mat = in_Mesh.Material;\n\
	// If material is not local add one\n\
	if ( mat.IsA(siSharedPSet) ) {\n\
		mat = in_Mesh.AddMaterial();\n\
	}      \n\
	// Get polygon mesh geometry\n\
	var polymesh = in_Mesh.ActivePrimitive.Geometry;    \n\
	polymesh.AddVertexColor();\n\
}\n\
// ***************************************\n\
//\n\
// 		Functions to support PPG\n\
//\n\
function MakeMeAPPG( in_VBArray )\n\
{\n\
	var gprop = ActiveSceneRoot.AddProperty( \"CustomProperty\", false, \"Visual2DArray\" );			\n\
	var gparam = gprop.AddGridParameter( \"VertexColorChart\" );\n\
	var ugrid = gparam.Value;\n\
	// Set bounds of this grid\n\
	ugrid.ColumnCount = in_VBArray.ubound(1)+1;\n\
	ugrid.RowCount = in_VBArray.ubound(2)+1;\n\
	ugrid.Data = in_VBArray;\n\
	// Set up the labels\n\
	var tmp = new Array( \"R\", \"G\", \"B\", \"A\" );\n\
	for ( var c=0; c&lt;ugrid.ColumnCount; c++ ) {\n\
		ugrid.SetColumnLabel( c, tmp[c]) ;\n\
	}\n\
	for ( var r=0; r&lt;ugrid.RowCount; r++ ) {\n\
		ugrid.SetRowLabel( r, \"Cluster \" + r.toString() );\n\
	}\n\
	// Return the Property Set (not the Grid itself)\n\
	return gprop;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";