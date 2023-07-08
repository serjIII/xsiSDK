var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>FCurveKeyCollection.Filter</title>\n\
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
            <h1>FCurveKeyCollection.Filter</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/FCurveKeyCollection.html\">FCurveKeyCollection</a>.Filter</h2>\n\
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
		<td class=\"example\"><pre>FCurveKeyCollection FCurveKeyCollection.Filter( String in_filter, Object in_famArray, String in_path );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = FCurveKeyCollection.Filter( [Type], [Families], [Path] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Collection of objects (subset of original collection).</p></div>\n\
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
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\'	This example demonstrates how to use the Filter method to separate specific types of\n\
\'	objects out from the rest of the collection by families.\n\
\' Set up the example using a mesh grid, cube, cone, and a nurbs cube:\n\
set oRoot = ActiveSceneRoot\n\
oRoot.AddGeometry \"grid\", \"meshsurface\"\n\
oRoot.AddGeometry \"cube\", \"meshsurface\"\n\
oRoot.AddGeometry \"cone\", \"meshsurface\"\n\
oRoot.AddGeometry \"cube\", \"nurbssurface\"\n\
\' Use the X3DObject.FindChildren method, limited to geometry objects\n\
set oGeoms = oRoot.FindChildren( , , siGeometryFamily )\n\
LogMessage \"The collection of geometry objects under the root is a \" &amp; ClassName( oGeoms ) \n\
LogMessage \"There are \" &amp; oGeoms.Count &amp; \" geometry objects under the root.\" \n\
LogMessage \"\"\n\
for each geomobj in oGeoms\n\
	LogMessage geomobj.Name &amp; \" is a \" &amp; geomobj.Type &amp; \" \" &amp; ClassName( geomobj )\n\
next\n\
\' Filtering by family \n\
set oNurbFam = oGeoms.Filter( , siNurbsSurfaceMeshFamily )\n\
set oPolyFam = oGeoms.Filter( , siMeshFamily )\n\
\' Filtering by type\n\
set oCones = oGeoms.Filter( \"cone\" )\n\
set oCubes = oGeoms.Filter( \"cube\" )\n\
\' Filtering by both gives you a more narrow hitlist\n\
set oPolyCubes = oGeoms.Filter( \"cube\", siMeshFamily )\n\
\' Now print out the results\n\
LogMessage \"\"\n\
LogMessage \"==========================================================================\"\n\
LogMessage \" Stats for the collection:\"\n\
LogMessage \" ------------------------\"\n\
LogMessage \"	Total number of objects in collection: \" &amp; oGeoms.Count\n\
LogMessage \"	Number of Nurbs objects in collection: \" &amp; oNurbFam.Count\n\
LogMessage \"	Number of Mesh objects in collection: \" &amp; oPolyFam.Count\n\
LogMessage \"	Number of cones in collection: \" &amp; oCones.Count\n\
LogMessage \"	Number of cubes in collection: \" &amp; oCubes.Count\n\
LogMessage \"	Number of Mesh cubes in collection: \" &amp; oPolyCubes.Count\n\
\' Output of above script is:\n\
\'INFO : The collection of geometry objects under the root is a X3DObjectCollection\n\
\'INFO : There are 10 geometry objects under the root.\n\
\'INFO : \n\
\'INFO : MySuperCone is a polymsh X3DObject\n\
\'INFO : MySuperCylinder is a polymsh X3DObject\n\
\'INFO : MyAwesomeCone is a surfmsh X3DObject\n\
\'INFO : MySuperTorus is a surfmsh X3DObject\n\
\'INFO : MyAwesomeTorus is a polymsh X3DObject\n\
\'INFO : MyImplicitCube is a cube X3DObject\n\
\'INFO : grid is a polymsh X3DObject\n\
\'INFO : cube is a polymsh X3DObject\n\
\'INFO : cone is a polymsh X3DObject\n\
\'INFO : cube1 is a surfmsh X3DObject\n\
\'INFO : \n\
\'INFO : ==========================================================================\n\
\'INFO :  Stats for the collection:\n\
\'INFO :  ------------------------\n\
\'INFO : 	Total number of objects in collection: 10\n\
\'INFO : 	Number of Nurbs objects in collection: 3\n\
\'INFO : 	Number of Mesh objects in collection: 6\n\
\'INFO : 	Number of cones in collection: 3\n\
\'INFO : 	Number of cubes in collection: 3\n\
\'INFO : 	Number of Mesh cubes in collection: 1</pre></td></tr>\n\
</table>\n\
</div><h4>2. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
#	This example demonstrates how to use the Filter method to find any owners\n\
#	who are of a specific family (in this case, the \"Groups\" family).\n\
#\n\
# 	It also demonstrates a number of issues related to working with Python in\n\
# 	the SDK, such as how to call commands and methods or properties on global\n\
# 	objects (instrinsic), and how to get around using output arguments.\n\
#\n\
# Set up a new scene (Python needs all commands to be treated as methods of the \n\
# Application object and all global objects to be explicitly named)\n\
Application.NewScene( \"\", 0 )\n\
# Python can\'t handle the output object, so we use an ISIVTCollection instead\n\
# when we add a new camera to the scene\n\
cam3DObj = Application.SIGetPrimCamera( \"Camera\" )(0)\n\
Application.LogMessage( \"Collection contains these items:\" )\n\
for i in cam3DObj.Owners:\n\
	Application.LogMessage( \" - item \" + i.Name )\n\
Application.LogMessage( \"------------\" )\n\
# The Family filter criteria will include both groups and cameras\n\
family_list = [ \"Groups\", \"Camera\" ]\n\
# Get a list of owners for the new camera (but only if they are members\n\
# of either the \"Groups\" or \"Camera\" families\n\
coll2filter = cam3DObj.Owners.Filter( \"\", family_list )\n\
Application.LogMessage( \"Filtered collection now contains these items:\" )\n\
for fi in coll2filter:\n\
	Application.LogMessage( \"found item \" + fi.Name )\n\
# Output of the above script:\n\
#INFO : Collection contains these items:\n\
#INFO :  - item Scene_Root\n\
#INFO :  - item Layer_Default\n\
#INFO : ------------\n\
#INFO : Filtered collection now contains these items:\n\
#INFO : found item Layer_Default</pre></td></tr>\n\
</table>\n\
</div><h4>3. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/* --------------------------------------------------------------\n\
	This example demonstrates how to combine the parameters of \n\
	the Filter method to fine-tune the search criteria\n\
*/\n\
// Build a new scene with lots of objects to filter and return the scene root\n\
var child_coll = CreateScene().Children;\n\
// Using this criterion will match either nulls or srfmesh elements\n\
families2find = new Array( \"Nurbs Surface Mesh Geometries\", \"Nulls\" )\n\
WriteCollection( child_coll.Filter( \"\", \"\",\"*Cone\" ), \n\
	\"filter( , ,\'*Cone\' )\", \"any item with a name ending in \'Cone\'\" );\n\
WriteCollection( child_coll.Filter( \"\", \"\",\"MyAwesome*\" ), \n\
	\"filter( \'\', \'\', \'*Awesome*\' )\", \"any item with a name starting with \'MyAwesome\'\" );\n\
WriteCollection( child_coll.Filter( \"Cone\", families2find,\"MyAwesome*\" ), \n\
	\"filter( \'Cone\', new Array( \'Nurbs Surface Mesh Geometries\', \'Nulls\' ), \'MyAwesome*\' )\",\n\
	\"any cone with a name starting with \'MyAwesome\' that is either a surfmsh or a null\" );\n\
WriteCollection( child_coll.Filter( \"Cone\", families2find ), \n\
	\"filter( \'Cone\', new Array( \'Nurbs Surface Mesh Geometries\', \'Nulls\' ) )\",\n\
	\"any cone that is either a surfmsh or a null\" );\n\
WriteCollection( child_coll.Filter( \"\", families2find ), \n\
	\"filter( \'\', Array( \'Nurbs Surface Mesh Geometries\', \'Nulls\' ) )\",\n\
	\"any item that is either a surfmsh or a null\"  );\n\
WriteCollection( child_coll.Filter( \"Cone\", \"Nurbs Surface Mesh Geometries\" ), \n\
	\"filter( \'Cone\', \'Nurbs Surface Mesh Geometries\' )\",\n\
	\"any surfmsh cone\"  );\n\
WriteCollection( child_coll.Filter( \"Cone\" ), \n\
	\"filter( \'Cone\' )\", \"any cone\"  );\n\
WriteCollection( child_coll.Filter( \"Torus\", \"\",\"*Super*\" ), \n\
	\"filter( \'Torus\', \'\', \'*Super*\' )\", \n\
	\"any torus with a name containing \'Super\'\"  );\n\
WriteCollection( child_coll.Filter( \"\", \"Nurbs Surface Mesh Geometries\" ), \n\
	\"filter( \'\', \'Nurbs Surface Mesh Geometries\' )\", \n\
	\"any surfmsh\" );\n\
WriteCollection( child_coll.Filter( \"\", \"Mesh Geometries\" ), \n\
	\"filter( \'\', Mesh Geometries )\", \"any polymsh\"   );\n\
WriteCollection( child_coll.Filter( \"\", \"Mesh Geometries\",\"*Cone\" ), \n\
	\"filter( \'\', \'Mesh Geometries\', \'*Cone\' )\", \n\
	\"any polymsh item with a name ending in \'Cone\'\" );\n\
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
function CreateScene()\n\
{\n\
	NewScene( null, false );\n\
	var root = ActiveProject.ActiveScene.Root;\n\
	root.AddGeometry( \"cone\", \"meshsurface\", \"MySuperCone\" );\n\
	root.AddGeometry( \"Cylinder\", \"meshsurface\", \"MySuperCylinder\" );\n\
	root.AddGeometry( \"cone\", \"nurbssurface\", \"MyAwesomeCone\" );\n\
	root.AddGeometry( \"Torus\", \"nurbssurface\", \"MySuperTorus\" );\n\
	root.AddGeometry( \"Torus\", \"meshsurface\", \"MyAwesomeTorus\" );\n\
	root.AddPrimitive( \"cube\", \"MyImplicitCube\" );\n\
	root.AddNull( \"MyAwesomeNull\" );\n\
	root.AddCameraRig( \"Camera\" );\n\
	return root;\n\
}\n\
/* --------------------------------------------------------------\n\
	This function prints the collection information\n\
*/\n\
function WriteCollection( in_collection, in_filter_text, in_plain_text )\n\
{\n\
	// Make sure the script doesn\'t break\n\
	try {\n\
		LogMessage( \"-----\" );\n\
		LogMessage( \"TEST: \" + in_filter_text );\n\
		LogMessage( \"      [\" + in_plain_text + \"]\" );\n\
		LogMessage( \"Size of collection: \" + in_collection.Count );\n\
		for ( var i=0; i&lt;in_collection.Count; i++ ) {\n\
			LogMessage( \"\\titem #\" + (i+1) + \": \" + in_collection(i).Name \n\
				+ \" (type = \" + in_collection(i).Type + \")\" );\n\
		}\n\
		return 1;\n\
	} catch(e) {\n\
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
</div><h4>4. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
#	This example uses the Path argument of the PropertyCollection.Filter method\n\
#	to find Properties based on their names.\n\
#\n\
# Helper function for displaying contents of a PropertyCollection\n\
def WriteCollection( in_collection, in_filter_text, in_plain_text ) :\n\
	Application.LogMessage( \"-----\" )\n\
	Application.LogMessage( \"TEST: \" + in_filter_text )\n\
	Application.LogMessage( \"      [\" + in_plain_text + \"]\" )\n\
	Application.LogMessage( \"Size of collection: \" + str(in_collection.Count) )\n\
	for oProp in in_collection:\n\
		Application.LogMessage( \"\\titem #\" + \": \" + oProp.FullName \n\
			+ \" (type = \" + oProp.Type + \")\" )\n\
# Build a sample scene\n\
Application.NewScene( \"\", 0 )\n\
oModel = Application.ActiveSceneRoot.AddModel( None, \"PropModel\" )\n\
oNull = oModel.AddNull( \"NullWithProps\" )\n\
# Add a whole lot of properties\n\
oNull.AddProperty( \"CustomProperty\", 0, \"Prop1\" ) ;\n\
oNull.AddProperty( \"CustomProperty\", 0, \"Prop2\" ) ;\n\
oNull.AddProperty( \"CustomProperty\", 0, \"Prop3\" ) ;\n\
oNull.AddProperty( \"CustomProperty\", 0, \"MyProp\" ) ;\n\
oNull.AddProperty( \"CustomProperty\", 0, \"Other\" ) ;\n\
oNull.AddProperty( \"CustomProperty\", 0, \"PROP4\" ) ;\n\
#\n\
# 	Demonstrate the Filter method:\n\
#\n\
# Filtering by Object Name works based on the FullName of the property\n\
WriteCollection( oNull.Properties.Filter( \"\",\"\",\"PropModel.NullWithProps.Prop*\" ), \n\
	\"Filter(,,\\\"PropModel.NullWithProps.Prop*\\\")\", \n\
	\"All Properties under the Null starting with Prop\" ) ;\n\
WriteCollection( oNull.Properties.Filter( \"\",\"\",\"PropModel.NullWithProps.*Prop*\" ), \n\
	\"Filter(,,\\\"PropModel.NullWithProps.*Prop*\\\")\", \n\
	\"All Properties under the Null containing Prop\" ) ;\n\
# Because the matching is done by the full name, we might accidentally match \n\
# with other properties because the Model and Null also have \"Prop\" in their names\n\
WriteCollection( oNull.Properties.Filter( \"\",\"\",\"*Prop*\" ), \n\
	\"Filter(,,\\\"*Prop*\\\")\", \n\
	\"Properties under the Null with Prop somewhere in the FullName\" ) ;\n\
# Expected Results:\n\
#INFO : -----\n\
#INFO : TEST: Filter(,,\"PropModel.NullWithProps.Prop*\")\n\
#INFO :       [All Properties under the Null starting with Prop]\n\
#INFO : Size of collection: 4\n\
#INFO : 	item #: PropModel.NullWithProps.Prop1 (type = customparamset)\n\
#INFO : 	item #: PropModel.NullWithProps.Prop2 (type = customparamset)\n\
#INFO : 	item #: PropModel.NullWithProps.Prop3 (type = customparamset)\n\
#INFO : 	item #: PropModel.NullWithProps.PROP4 (type = customparamset)\n\
#INFO : -----\n\
#INFO : TEST: Filter(,,\"PropModel.NullWithProps.*Prop*\")\n\
#INFO :       [All Properties under the Null containing Prop]\n\
#INFO : Size of collection: 5\n\
#INFO : 	item #: PropModel.NullWithProps.Prop1 (type = customparamset)\n\
#INFO : 	item #: PropModel.NullWithProps.Prop2 (type = customparamset)\n\
#INFO : 	item #: PropModel.NullWithProps.Prop3 (type = customparamset)\n\
#INFO : 	item #: PropModel.NullWithProps.MyProp (type = customparamset)\n\
#INFO : 	item #: PropModel.NullWithProps.PROP4 (type = customparamset)\n\
#INFO : -----\n\
#INFO : TEST: Filter(,,\"*Prop*\")\n\
#INFO :       [Properties under the Null with Prop somewhere in the FullName]\n\
#INFO : Size of collection: 7\n\
#INFO : 	item #: PropModel.NullWithProps.Prop1 (type = customparamset)\n\
#INFO : 	item #: PropModel.NullWithProps.Prop2 (type = customparamset)\n\
#INFO : 	item #: PropModel.NullWithProps.Prop3 (type = customparamset)\n\
#INFO : 	item #: PropModel.NullWithProps.MyProp (type = customparamset)\n\
#INFO : 	item #: PropModel.NullWithProps.Other (type = customparamset)\n\
#INFO : 	item #: PropModel.NullWithProps.PROP4 (type = customparamset)\n\
#INFO : 	item #: PropModel.NullWithProps.Scene_Material (type = material)</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";