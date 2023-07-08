var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSICollection.Filter</title>\n\
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
            <h1>XSICollection.Filter</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a>.Filter</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v11.0 (2013)</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns a subset of this collection as a new collection of objects matching the filter criteria.\n\
If no items are found, Filter returns \"Nothing\", which allows you to trap errors.<br /><br />\n\
You can set up the filter criteria by using the \'Type\', \'Families\', and/or \'Path\' parameters which\n\
roughly correspond to searching by type as outlined in the <a href=\"#!/url=./si_om/siType.html\">siType</a> constant, searching\n\
by family as outlined in the <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a> constant, or searching by name of the object\n\
(see <a href=\"#!/url=./files/objectexpr.htm\">Object Name</a> for more about valid syntax\n\
for the Path parameter).<br /><br />\n\
Note: If you combine these parameters, they will narrow the scope of your search, not broaden it.\n\
For example, if you specify \'Nurbs Surface Mesh Geometries\' (siNurbsSurfaceMeshFamily) for the \n\
Families parameter and \'Cone*\' for the Path parameter, the return collection will contain any Nurbs\n\
cone that was in the original collection, but no Polygon Mesh cones and no Nurbs cubes, spheres, etc.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>CXSICollection XSICollection.Filter( String in_filter, Object in_famArray, String in_path );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = XSICollection.Filter( [Type], [Families], [Path] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> (subset of original collection).</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Type		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./si_om/siType.html\">siType</a> (for example, \"Model\", \"cube\", \"torus\", etc.).  Providing a type \n\
		argument is equivalent to testing each object with the <a href=\"#!/url=./si_om/ProjectItem.IsKindOf.html\">ProjectItem.IsKindOf</a> method.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Empty string			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Families		</td>\n\
		<td><a href=\"#!/url=./si_om/siFamily.html\">siFamily</a> or <a href=\"#!/url=./files/Array.htm\">Array</a> of siFamily values		</td>\n\
		<td>\n\
\n\
		Specifies the families that objects must belong to. To match the filter, an object must belong to at least one of the specified families.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Empty <a href=\"#!/url=./files/Variant.htm\">Variant</a>			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Path		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		An <a href=\"#!/url=./files/objectexpr.htm\">Object Name</a>. This can be a partial name using wildcards. For example, \n\
		\"a*\" returns all matches that begin with the character \"a\".\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Empty string			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// Build a new scene with lots of objects to filter and return the scene root\n\
var child_coll = CreateCollection();\n\
// Using this criterion will match either nulls or srfmesh elements\n\
families2find = new Array( \"Nurbs Surface Mesh Geometries\", \"Nulls\" )\n\
WriteCollection( child_coll.Filter( \"\", \"\",\"*Cone\" ), \"filter( , ,\'*Cone\' )\", \"any item with a name ending in \'Cone\'\" );\n\
WriteCollection( child_coll.Filter( \"\", \"\",\"MyAwesome*\" ), \"filter( \'\', \'\', \'*Awesome*\' )\", \"any item with a name starting with \'MyAwesome\'\" );\n\
WriteCollection( child_coll.Filter( \"Cone\", families2find,\"MyAwesome*\" ), \"filter( \'Cone\', new Array( \'Nurbs Surface Mesh Geometries\', \'Nulls\' ), \'MyAwesome*\' )\", \"any cone with a name starting with \'MyAwesome\' that is either a surfmsh or a null\" );\n\
WriteCollection( child_coll.Filter( \"Cone\", families2find ), \"filter( \'Cone\', new Array( \'Nurbs Surface Mesh Geometries\', \'Nulls\' ) )\",\"any cone that is either a surfmsh or a null\" );\n\
WriteCollection( child_coll.Filter( \"\", families2find ), \"filter( \'\', Array( \'Nurbs Surface Mesh Geometries\', \'Nulls\' ) )\", \"any item that is either a surfmsh or a null\"  );\n\
WriteCollection( child_coll.Filter( \"Cone\", \"Nurbs Surface Mesh Geometries\" ),  \"filter( \'Cone\', \'Nurbs Surface Mesh Geometries\' )\", \"any surfmsh cone\"  );\n\
WriteCollection( child_coll.Filter( \"Cone\" ), \"filter( \'Cone\' )\", \"any cone\"  );\n\
WriteCollection( child_coll.Filter( \"Torus\", \"\",\"*Super*\" ), \"filter( \'Torus\', \'\', \'*Super*\' )\", \"any torus with a name containing \'Super\'\"  );\n\
WriteCollection( child_coll.Filter( \"\", \"Nurbs Surface Mesh Geometries\" ), \"filter( \'\', \'Nurbs Surface Mesh Geometries\' )\", \"any surfmsh\" );\n\
WriteCollection( child_coll.Filter( \"\", \"Mesh Geometries\" ), \"filter( \'\', Mesh Geometries )\", \"any polymsh\"   );\n\
WriteCollection( child_coll.Filter( \"\", \"Mesh Geometries\",\"*Cone\" ), \"filter( \'\', \'Mesh Geometries\', \'*Cone\' )\", \"any polymsh item with a name ending in \'Cone\'\" );\n\
/* --------------------------------------------------------------\n\
This function adds the following items to the scene root:\n\
Name                Primitive Type      Geometry Type\n\
---------------     --------------      -------------\n\
MySuperCone         polymsh             Cone\n\
MySuperCylinder     polymsh             Cylinder\n\
MyAwesomeCone       surfmsh             Cone\n\
MyAwesomeTorus      polymsh             Torus\n\
MySuperTorus        surfmsh             Torus\n\
MyImplicitCube      cube                Cube\n\
MyAwesomeNull       --                  Null\n\
CameraRoot          --                  CameraRig\n\
camera1             --                  Camera\n\
CameraInterest      --                  Null\n\
*/\n\
function CreateCollection( )\n\
{\n\
	NewScene( null, false );\n\
	var root = ActiveProject.ActiveScene.Root;\n\
	root.AddGeometry( \"cone\", \"meshsurface\", \"MySuperCone\" ); \n\
	root.AddGeometry( \"Cylinder\", \"meshsurface\", \"MySuperCylinder\" ); \n\
	root.AddGeometry( \"cone\", \"nurbssurface\", \"MyAwesomeCone\" ); \n\
	root.AddGeometry( \"Torus\", \"nurbssurface\", \"MySuperTorus\"  ); \n\
	root.AddGeometry( \"Torus\", \"meshsurface\", \"MyAwesomeTorus\" ); \n\
	root.AddPrimitive( \"cube\", \"MyImplicitCube\" ); \n\
	root.AddNull( \"MyAwesomeNull\" ); \n\
	root.AddCameraRig( \"Camera\" ); \n\
	var coll = new ActiveXObject( \"XSI.Collection\" );        \n\
	var children = root.Children\n\
	for (var i=0; i&lt;children.count; i++)\n\
	{  			\n\
		coll.Add( children(i) );\n\
	}\n\
	return coll;\n\
	}\n\
/* --------------------------------------------------------------\n\
This function prints the collection information\n\
*/\n\
function WriteCollection( in_collection, in_filter_text, in_plain_text )\n\
{\n\
	// Make sure the script doesn\'t break\n\
	try \n\
	{\n\
		LogMessage( \"-----\" );\n\
		LogMessage( \"TEST: \" + in_filter_text );\n\
		LogMessage( \"      [\" + in_plain_text + \"]\" );\n\
		LogMessage( \"Size of collection: \" + in_collection.Count );\n\
		for ( var i=0; i&lt;in_collection.Count; i++ ) {\n\
			LogMessage( \"\\titem #\" + (i+1) + \": \" + in_collection(i).Name + \" (type = \" + in_collection(i).Type + \")\" );\n\
		}\n\
		return 1;\n\
	} \n\
	catch(e) \n\
	{\n\
		LogMessage( \"Encountered a problem with the input collection. Quitting...\" );\n\
		return 0;\n\
	}\n\
}\n\
/* --------------------------------------------------------------\n\
	Output of the above script:\n\
*/\n\
//INFO : -----\n\
//INFO : TEST: filter( , ,\'*Cone\' )\n\
//INFO :       [any item with a name ending in \'Cone\']\n\
//INFO : Size of collection: 2\n\
//INFO : 	item #1: MySuperCone (type = polymsh)\n\
//INFO : 	item #2: MyAwesomeCone (type = surfmsh)\n\
//INFO : -----\n\
//INFO : TEST: filter( \'\', \'\', \'*Awesome*\' )\n\
//INFO :       [any item with a name starting with \'MyAwesome\']\n\
//INFO : Size of collection: 3\n\
//INFO : 	item #1: MyAwesomeCone (type = surfmsh)\n\
//INFO : 	item #2: MyAwesomeTorus (type = polymsh)\n\
//INFO : 	item #3: MyAwesomeNull (type = null)\n\
//INFO : -----\n\
//INFO : TEST: filter( \'Cone\', new Array( \'Nurbs Surface Mesh Geometries\', \'Nulls\' ), \'MyAwesome*\' )\n\
//INFO :       [any cone with a name starting with \'MyAwesome\' that is either a surfmsh or a null]\n\
//INFO : Size of collection: 1\n\
//INFO : 	item #1: MyAwesomeCone (type = surfmsh)\n\
//INFO : -----\n\
//INFO : TEST: filter( \'Cone\', new Array( \'Nurbs Surface Mesh Geometries\', \'Nulls\' ) )\n\
//INFO :       [any cone that is either a surfmsh or a null]\n\
//INFO : Size of collection: 1\n\
//INFO : 	item #1: MyAwesomeCone (type = surfmsh)\n\
//INFO : -----\n\
//INFO : TEST: filter( \'\', Array( \'Nurbs Surface Mesh Geometries\', \'Nulls\' ) )\n\
//INFO :       [any item that is either a surfmsh or a null]\n\
//INFO : Size of collection: 5\n\
//INFO : 	item #1: Camera_Root (type = CameraRoot)\n\
//INFO : 	item #2: MyAwesomeCone (type = surfmsh)\n\
//INFO : 	item #3: MySuperTorus (type = surfmsh)\n\
//INFO : 	item #4: MyAwesomeNull (type = null)\n\
//INFO : 	item #5: CameraRoot (type = CameraRoot)\n\
//INFO : -----\n\
//INFO : TEST: filter( \'Cone\', \'Nurbs Surface Mesh Geometries\' )\n\
//INFO :       [any surfmsh cone]\n\
//INFO : Size of collection: 1\n\
//INFO : 	item #1: MyAwesomeCone (type = surfmsh)\n\
//INFO : -----\n\
//INFO : TEST: filter( \'Cone\' )\n\
//INFO :       [any cone]\n\
//INFO : Size of collection: 2\n\
//INFO : 	item #1: MySuperCone (type = polymsh)\n\
//INFO : 	item #2: MyAwesomeCone (type = surfmsh)\n\
//INFO : -----\n\
//INFO : TEST: filter( \'Torus\', \'\', \'*Super*\' )\n\
//INFO :       [any torus with a name containing \'Super\']\n\
//INFO : Size of collection: 1\n\
//INFO : 	item #1: MySuperTorus (type = surfmsh)\n\
//INFO : -----\n\
//INFO : TEST: filter( \'\', \'Nurbs Surface Mesh Geometries\' )\n\
//INFO :       [any surfmsh]\n\
//INFO : Size of collection: 2\n\
//INFO : 	item #1: MyAwesomeCone (type = surfmsh)\n\
//INFO : 	item #2: MySuperTorus (type = surfmsh)\n\
//INFO : -----\n\
//INFO : TEST: filter( \'\', Mesh Geometries )\n\
//INFO :       [any polymsh]\n\
//INFO : Size of collection: 3\n\
//INFO : 	item #1: MySuperCone (type = polymsh)\n\
//INFO : 	item #2: MySuperCylinder (type = polymsh)\n\
//INFO : 	item #3: MyAwesomeTorus (type = polymsh)\n\
//INFO : -----\n\
//INFO : TEST: filter( \'\', \'Mesh Geometries\', \'*Cone\' )\n\
//INFO :       [any polymsh item with a name ending in \'Cone\']\n\
//INFO : Size of collection: 1\n\
//INFO : 	item #1: MySuperCone (type = polymsh)</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";