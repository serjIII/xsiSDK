var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Filter</title>\n\
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
            <h1>Filter</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Filter</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_Filter\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1Filter.html\">Filter</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\">Filter</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> The Filter object represents an instance of a Softimage filter. Filters are used by\n\
Softimage interactive tools and OM objects for validating the use of a set of \n\
objects in a given context. Softimage already defines a set of native filters \n\
available to users and can be extended with custom filter objects. <br /><br />\n\
Custom filters are defined with a plug-in which can be either compiled or scripted (see \n\
<a href=\"#!/url=./files/cus_addons.htm\">Building and Deploying Customizations</a> \n\
for a detailed workflow). The mapping between a Filter object and a custom filter \n\
plug-in is transparent to the user, each method of the Filter object maps to a\n\
specific function callback supplied by the custom filter. The callback functions \n\
are documented with each method of the Filter object, please refer to these \n\
methods documentation for further details.<br /><br />\n\
The <a href=\"#!/url=./si_om/siFilterType.html\">siFilterType</a> enum lists the supported filter types (the \n\
type of a filter specifies what  the filter does; for example, a filter of type \n\
<a href=\"#!/url=./si_om/siFilterType.html#siFilter3DObject\">siFilter3DObject</a> filters 3D objects).<br /><br />\n\
The <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a> enum lists the built-in filters that you can use.<br /><br />\n\
Like native filters, custom filters can also be used with other base filter \n\
functions defined in the SDK such as <a href=\"#!/url=./si_cmds/SIFilter.html\">SIFilter</a>, \n\
<a href=\"#!/url=./si_om/X3DObjectCollection.Filter.html\">X3DObjectCollection.Filter</a>, etc...\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Filter.IsApplicable.html\">IsApplicable</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Filter.Match.html\">Match</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Filter.Subset.html\">Subset</a>		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
<td class=\"example\"><pre class=\"jscript\">// display all filters defined in Softimage\n\
var app = Application;\n\
var filterArray = app.Filters;\n\
for (var i=0; i&lt;filterArray.Count; i++)\n\
{\n\
	app.LogMessage( filterArray(i).Name );\n\
}\n\
// sample filter tests\n\
var root = app.ActiveSceneRoot;\n\
var sphere = root.AddGeometry( \"Sphere\", \"MeshSurface\", \"sphere\" );\n\
TestFilter( \"Object\", root );\n\
TestFilter( \"PolygonMesh\", sphere );	\n\
var arr = root.Children;\n\
var strTest = root.Name + \" children\";\n\
TestFilter2( \"Object\", strTest, arr );\n\
TestFilter2( \"Light\", strTest, arr );\n\
TestFilter2( \"Camera\", strTest, arr );\n\
TestFilter2( \"PolygonMesh\", strTest, arr );\n\
arr = root.Properties;\n\
strTest = root.Name + \" properties\";\n\
TestFilter2( \"Object\", strTest, arr );\n\
TestFilter2( \"Light\", strTest, arr );\n\
// helper functions for logging filter operations results\n\
function TestFilter( in_strFilter, in_ref )\n\
{\n\
	var app = Application;\n\
	var filter = app.Filters( in_strFilter );	\n\
	var bApplicable = filter.IsApplicable(in_ref);\n\
	var bMatch = filter.Match(in_ref);	\n\
	app.LogMessage( \"*** Filter: \" + filter.Name );\n\
	app.LogMessage( \"   Target: \" + in_ref.Name );\n\
	app.LogMessage( \"   Applicable: \" + bApplicable );\n\
	app.LogMessage( \"   Match: \" + bMatch );\n\
}\n\
function TestFilter2( in_strFilter, in_strTest, in_arr )\n\
{\n\
	var app = Application;\n\
	var filter = app.Filters( in_strFilter );	\n\
	var bApplicable = filter.IsApplicable(in_arr);\n\
	var bMatch = filter.Match(in_arr);	\n\
	var subArray = filter.Subset(in_arr);\n\
	app.LogMessage( \"*** Filter: \" + filter.Name );\n\
	app.LogMessage( \"   Target: \" + in_strTest + \" count: \" + in_arr.Count );	\n\
	app.LogMessage( \"   Applicable: \" + bApplicable );\n\
	app.LogMessage( \"   Match: \" + bMatch );\n\
	app.LogMessage( \"   Subset: \" + subArray.Count );\n\
}\n\
// Output will include items like this:\n\
//INFO : \"object\"\n\
//INFO : \"Null\"\n\
//INFO : \"Curve\"\n\
//INFO : \"PolygonMesh\"\n\
//INFO : \"SurfaceMesh\"\n\
//INFO : \"Implicit\"\n\
// etc...\n\
//INFO : \"*** Filter: object\"\n\
//INFO : \"   Target: Scene_Root\"\n\
//INFO : \"   Applicable: true\"\n\
//INFO : \"   Match: true\"\n\
//INFO : \"*** Filter: PolygonMesh\"\n\
//INFO : \"   Target: sphere\"\n\
//INFO : \"   Applicable: true\"\n\
//INFO : \"   Match: true\"\n\
//INFO : \"*** Filter: object\"\n\
//INFO : \"   Target: Scene_Root children count: 3\"\n\
//INFO : \"   Applicable: true\"\n\
//INFO : \"   Match: true\"\n\
//INFO : \"   Subset: 3\"\n\
//INFO : \"*** Filter: Light\"\n\
//INFO : \"   Target: Scene_Root children count: 3\"\n\
//INFO : \"   Applicable: true\"\n\
//INFO : \"   Match: false\"\n\
//INFO : \"   Subset: 1\"\n\
//INFO : \"*** Filter: Camera\"\n\
//INFO : \"   Target: Scene_Root children count: 3\"\n\
//INFO : \"   Applicable: true\"\n\
//INFO : \"   Match: false\"\n\
//INFO : \"   Subset: 0\"\n\
//INFO : \"*** Filter: PolygonMesh\"\n\
//INFO : \"   Target: Scene_Root children count: 3\"\n\
//INFO : \"   Applicable: true\"\n\
//INFO : \"   Match: false\"\n\
//INFO : \"   Subset: 1\"\n\
//INFO : \"*** Filter: object\"\n\
//INFO : \"   Target: Scene_Root properties count: 5\"\n\
//INFO : \"   Applicable: true\"\n\
//INFO : \"   Match: true\"\n\
//INFO : \"   Subset: 5\"\n\
//INFO : \"*** Filter: Light\"\n\
//INFO : \"   Target: Scene_Root properties count: 5\"\n\
//INFO : \"   Applicable: true\"\n\
//INFO : \"   Match: false\"\n\
//INFO : \"   Subset: 0\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">//--------------------------------------------------------------------\n\
// JScript example of the Large Mesh filter implementation for  \n\
// IsApplicable and Match. The plug-in is used for filtering polygon \n\
// mesh geometries  containing more than 50 points. Note: The \n\
// IsApplicable function is not required for the filter to work.\n\
//\n\
// Copy and paste the example into the script editor and run (F5).\n\
//\n\
// The filter will now be listed in the Main Control Panel (MCP) \n\
// filter list.\n\
//-------------------------------------------------------------------\n\
function IsLargeMesh( in_object )\n\
{\n\
	if ( ClassName(in_object) != \"X3DObject\") {		\n\
		return;\n\
	}\n\
	return (in_object.ActivePrimitive.Geometry.Points.Count &gt; 50);\n\
}\n\
function LargeMesh_Match( in_context )\n\
{\n\
	return IsLargeMesh(in_context.GetAttribute(\"Input\"));\n\
}\n\
function LargeMesh_IsApplicable( in_context )\n\
{\n\
	var obj = in_context.GetAttribute(\"Input\")\n\
	return (ClassName(obj) == \"X3DObject\" );\n\
}\n\
function LargeMesh_Subset( in_context )	\n\
{\n\
	var coll = XSIFactory.CreateActiveXObject(\"XSI.Collection\");\n\
	var in_objects = in_context.GetAttribute(\"Input\");\n\
	var eObjects = new Enumerator(in_objects);\n\
	for (;!eObjects.atEnd();eObjects.moveNext())\n\
	{\n\
		var obj = eObjects.item();\n\
		if (IsLargeMesh(obj)) \n\
		{\n\
			coll.Add(obj);\n\
		}\n\
	}\n\
	in_context.SetAttribute(\"Output\", coll);\n\
	return (coll.Count &gt; 0);\n\
}\n\
//--------------------------------------------------------------------\n\
//The Large Mesh filter is registered in Softimage by defining the following \n\
//entry-point in your plug-in implementation file:\n\
//--------------------------------------------------------------------\n\
function XSILoadPlugin( in_reg )\n\
{\n\
	// register plug-in information\n\
	in_reg.Author = \"Softimage Co.\";\n\
	in_reg.Name = \"Filter Example\";\n\
	// register filter plug-in item\n\
	in_reg.RegisterFilter(\"LargeMesh\", siFilter3DObject);\n\
	return true;\n\
}\n\
//--------------------------------------------------------------------\n\
// Code to bootstrap example into system\n\
//--------------------------------------------------------------------\n\
function ExampleSourceCode()\n\
{\n\
	return \"// XSISDK Doc Example\" + \"\\n\" + \n\
	 	IsLargeMesh.toString() + \"\\n\" + \n\
	 	LargeMesh_Match.toString() + \"\\n\" + \n\
	 	LargeMesh_IsApplicable.toString() + \"\\n\" + \n\
	 	LargeMesh_Subset.toString() + \"\\n\" + \n\
	 	XSILoadPlugin.toString();\n\
}\n\
// if we are running from script editor save code to \n\
// examples addon folder in the user\'s directory.\n\
if (GetUserPref(\"ScriptingSessionActive\"))\n\
{\n\
	var ex_name 	= \"ExFilter\";\n\
	var ex_subfolder 	= \"Plugins\";\n\
	var ex_folder 	= \"XSISDKDocExamples\";\n\
	var ex_langsuffix	= \".js\";\n\
	CreateAddonDirectories( InstallationPath(siUserPath), ex_folder );\n\
	var fso = XSIFactory.CreateActiveXObject(\"Scripting.FileSystemObject\");\n\
	var filename = XSIUtils.BuildPath( \n\
		InstallationPath(siUserAddonPath), \n\
		ex_folder,\n\
		\"Application\",\n\
		ex_subfolder,\n\
		ex_name+ex_langsuffix );\n\
	if (!fso.FileExists(filename))\n\
	{\n\
		var f = fso.CreateTextFile ( filename );\n\
		f.write( ExampleSourceCode() );\n\
		f.close();\n\
		Application.LoadPlugin(filename);	\n\
	}\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/SIFilter.html\">SIFilter</a> <a href=\"#!/url=./si_cmds/SetSelFilter.html\">SetSelFilter</a> <a href=\"#!/url=./si_om/ClusterCollection.Filter.html\">ClusterCollection.Filter</a> <a href=\"#!/url=./si_om/X3DObject.FindChild.html\">X3DObject.FindChild</a> <a href=\"#!/url=./si_om/X3DObject.FindChildren.html\">X3DObject.FindChildren</a> <a href=\"#!/url=./si_om/siFilterType.html\">siFilterType</a> <a href=\"#!/url=./si_om/PluginRegistrar.RegisterFilter.html\">PluginRegistrar.RegisterFilter</a> <a href=\"#!/url=./si_om/ConstructionHistory.Filter.html\">ConstructionHistory.Filter</a> <a href=\"#!/url=./si_om/ConstructionHistory.Find.html\">ConstructionHistory.Find</a> <a href=\"#!/url=./si_om/XSIApplication.Filters.html\">XSIApplication.Filters</a> <a href=\"#!/url=./si_cmds/callbacks.html\">Definition Callbacks for Filters</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";