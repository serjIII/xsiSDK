var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PolygonMesh.CurrentVertexColor</title>\n\
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
            <h1>PolygonMesh.CurrentVertexColor</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/PolygonMesh.html\">PolygonMesh</a>.CurrentVertexColor</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v3.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Sets or returns the current vertex color property (<a href=\"#!/url=./si_om/ClusterProperty.html\">ClusterProperty</a>) \n\
used by the polygon mesh\'s material. When you first create a polygonmesh it inherits \n\
a material but doesn\'t automatically have a vertex color. You need to explicitly set \n\
the vertex color to be used by the material (this then becomes the current vertex color \n\
proprety). The current color at vertices property may not be set, in which case the \n\
first vertex color property found will be returned. If the polygon mesh has no vertex \n\
color properties then Nothing is returned. Test to see if your variable equals Nothing \n\
to check if the cluster property is valid.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
ClusterProperty rtn = PolygonMesh.CurrentVertexColor;\n\
// set accessor\n\
PolygonMesh.CurrentVertexColor = ClusterProperty;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">NewScene( null, false );\n\
CreatePrim(\"Sphere\", \"MeshSurface\", null, null);\n\
// get selected elements from scene\n\
if ( Selection.count == 0 ) {\n\
	 LogMessage( \"Nothing selected\", siError );\n\
} else {	\n\
	 var objs = Selection;\n\
	// get selected meshes from selection list\n\
	var meshes = SIFilter( objs, \"polygon_mesh\", true, siQuickSearch );\n\
	if ( !meshes ) {\n\
		LogMessage( \"No polygon meshes selected\", siError );\n\
	}\n\
	// process selected models\n\
	freezeNormalColors( meshes );\n\
}\n\
function freezeNormalColors( objs )\n\
{\n\
	// process all meshes\n\
	for ( var i = 0; i &lt; objs.count; i++ )\n\
	{\n\
		// get current mesh (type : \"polyMsh\")\n\
		var obj = objs( i );\n\
		// get obj material\n\
		var mat = obj.Material;\n\
		// if material is not local add one\n\
		if ( mat.IsA(siSharedPSet) ) {\n\
			mat = obj.AddMaterial();\n\
		}		\n\
		// get polygon mesh geometry\n\
		var polymesh = obj.ActivePrimitive.Geometry;\n\
		// get current vertex color property\n\
		var vc = polymesh.CurrentVertexColor;\n\
		// current vertex color property not set yet\n\
		if ( vc == null ) {\n\
			// no vertex color properties installed, add one. \n\
			vc = polymesh.AddVertexColor();\n\
			// set the vc to be used by the polgon obj\'s \n\
			// material.\n\
			polymesh.CurrentVertexColor = vc;\n\
		}\n\
		// set vertex colours from shading normal vectors\n\
		// the parent of the vertex color is\n\
		// a cluster. This maintains the relationship\n\
		// between the actual node index and the corresponding\n\
		// cluster index.\n\
		var vcClsElems = vc.parent.elements;\n\
		var nodes2 = new VBArray( vc.Elements.Array ); \n\
		var nodes = nodes2.toArray();\n\
		var clsElemIndex = 0;\n\
		// visit all polygons\n\
		for ( var j = 0; j &lt; polymesh.Polygons.Count; j++ ) {\n\
			// get pointer on polygon\n\
			poly = polymesh.Polygons( j );\n\
			// visit all polynodes\n\
			var polynodes = poly.Nodes\n\
			for ( var k = 0; k &lt; polynodes.Count; k++ ) {\n\
				var node = polynodes( k );\n\
				// get polynode normal\n\
				var normal = node.normal;\n\
				// lookup node index for vertex color\n\
				clsElemIndex = vcClsElems.FindIndex( node.Index ) * 4;\n\
				// compute corresponding color channels\n\
				nodes[ clsElemIndex ]	 = ( normal.x + 1.0 ) * 0.5;\n\
				nodes[ clsElemIndex + 1 ] = ( normal.y + 1.0 ) * 0.5;\n\
				nodes[ clsElemIndex + 2 ] = ( normal.z + 1.0 ) * 0.5;\n\
				nodes[ clsElemIndex + 3 ] = 1.0;\n\
			}\n\
		}\n\
		// put the new colors back into the vertex colour \n\
		vc.Elements.Array = nodes;\n\
	}\n\
	return;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Material.CurrentUV.html\">Material.CurrentUV</a> <a href=\"#!/url=./si_om/PolygonMesh.AddVertexColor.html\">PolygonMesh.AddVertexColor</a> <a href=\"#!/url=./si_om/PolygonMesh.VertexColors.html\">PolygonMesh.VertexColors</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";