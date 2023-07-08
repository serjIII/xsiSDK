var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PluginRegistrar.RegisterFilter</title>\n\
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
            <h1>PluginRegistrar.RegisterFilter</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/PluginRegistrar.html\">PluginRegistrar</a>.RegisterFilter</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>Registers a custom filter in Softimage.</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>PluginItem PluginRegistrar.RegisterFilter( String in_name, siFilterType in_Type );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = PluginRegistrar.RegisterFilter( Name, Type );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/PluginItem.html\">PluginItem</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		The name of the custom filter to register. It should begin with a letter and contain \n\
		only letters, numbers and the underscore character.\n\
		<br /><br />\n\
		The filter name is used to name the filter callback functions such as \n\
		<a href=\"#!/url=./si_cmds/cb_Filter_Match.html\">Match</a> and \n\
		<a href=\"#!/url=./si_cmds/cb_Filter_Subset.html\">Subset</a>.\n\
		For example, the Match callback for a filter named \"My3DObjectFilter\" is \"My3DObjectFilter_Match\".\n\
		If a filter name contains spaces (for example, \"My 3D Object Filter\"), the callback function names \n\
		must omit the spaces (for example, \"My3DObjectFilter_Match\").\n\
		<br /><br />\n\
		The filter name also appears in the Softimage user interface, and is the name you use to reference the \n\
		filter in scripting or C++ code. If the filter name contains spaces, you must replace the spaces \n\
		with underscores to use the filter with scripting commands or the object model. For example, if you \n\
		register a filter with the name \"My Custom Filter\", then to get the filter from the FiltersCollection,\n\
		you need to replace the spaces with underscores:\n\
		<br /><br />\n\
		var oFilter = Application.Filters.Item( \"My_Custom_Filter\" );\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Type		</td>\n\
		<td><a href=\"#!/url=./si_om/siFilterType.html\">siFilterType</a>		</td>\n\
		<td>\n\
Type of filter to register.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*-------------------------------------------------------------------\n\
	This example shows how to register, implement and use a \n\
	custom filter.\n\
	README: Copy and paste the example into the script editor \n\
	and run (F5).\n\
	The filter will now be listed in the Scene Explorer \n\
	filter list when the \"Source/Clips\" view context  is\n\
	selected.\n\
-------------------------------------------------------------------*/\n\
function  XSILoadPlugin( in_reg )\n\
{\n\
	in_reg.Author = \"Softimage Co.\" \n\
	in_reg.Name = \"PluginRegistrar.RegisterFilter Example\" \n\
	// register the cone filter plug-in item\n\
	in_reg.RegisterFilter( \"ExRegisterFilter_ConePrimitive\", siFilterObject );\n\
	// register a command to illustrate usage\n\
	in_reg.RegisterCommand( \"ExRegisterFilterDemo\", \"ExRegisterFilterDemo\" );\n\
	return true;\n\
} \n\
function  ExRegisterFilter_ConePrimitive_Match( in_context )\n\
{\n\
	var obj = in_context.GetAttribute(\"Input\");\n\
	return obj.IsKindOf( siConePrimType );\n\
}\n\
// This command shows how to use the ConePrimitive filter \n\
function  ExRegisterFilterDemo_Execute()\n\
{\n\
	Application.LogMessage(\"Running ExRegisterFilterDemo\");\n\
	var filter = Application.Filters( \"ExRegisterFilter_ConePrimitive\" );\n\
	Application.LogMessage( \"Filter: \" + filter.Name + \" type=\" + filter.Type );\n\
	var sphere = ActiveSceneRoot.AddGeometry( \"Sphere\", \"MeshSurface\", \"sphere\" );\n\
	var cone = ActiveSceneRoot.AddGeometry( \"Cone\", \"MeshSurface\", \"cone\" );\n\
	// log all objects that match the filter\n\
	var eChildren = new Enumerator(ActiveSceneRoot.Children);\n\
	for (;!eChildren.atEnd();eChildren.moveNext())\n\
	{\n\
		var child = eChildren.item();\n\
		Application.LogMessage( child.name + \" is a cone: \" + filter.Match( child ) );\n\
	}\n\
}\n\
//--------------------------------------------------------------------\n\
// Code to bootstrap example into system\n\
//--------------------------------------------------------------------\n\
function ExampleSourceCode()\n\
{\n\
	return \"//XSISDK Doc Example\\n\" +\n\
		ExRegisterFilter_ConePrimitive_Match.toString() + \"\\n\" + \n\
		ExRegisterFilterDemo_Execute.toString() + \"\\n\" + \n\
		XSILoadPlugin.toString();\n\
}\n\
// if we are running from script editor save code to \n\
// examples addon folder in the user\'s directory.\n\
if (GetUserPref(\"ScriptingSessionActive\"))\n\
{\n\
	var ex_name 		= \"ExPluginRegistrarRegisterFilter\";\n\
	var ex_subfolder 	= \"Plugins\";\n\
	var ex_folder 		= \"XSISDKDocExamples\";\n\
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
	// run demo\n\
	ExRegisterFilterDemo();\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Plugin.Items.html\">Plugin.Items</a> <a href=\"#!/url=./si_cmds/callbacks.html\">Definition Callbacks for Filters</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";