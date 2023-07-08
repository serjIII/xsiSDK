var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Menu</title>\n\
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
            <h1>Menu</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Menu</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_Menu\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1Menu.html\">Menu</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\"><a href=\"#!/url=./si_om/UIObject.html\">UIObject</a></p>\n\
<p class=\"level3\"><a href=\"#!/url=./si_om/MenuItem.html\">MenuItem</a></p>\n\
<p class=\"level4\">Menu</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> The Menu object provides the basic support for creating custom menus. With \n\
custom menus, you can: <br /><br />\n\
- Build menus on demand through a callback function when the end-user opens \n\
the menu. <br /><br />\n\
- Attach custom menus to a Softimage menu (sometimes called a \"hosting menu\"). \n\
The hosting menu can be a regular or contextual menu within a specific Softimage \n\
view. <br /><br />\n\
- Create them as either a dynamic or static menu: a dynamic menu is always \n\
rebuilt each time the menu opens, whereas static menus are built once. <br /><br />\n\
- Display them as either as a submenu or as a flat list of items in the \n\
hosting menu.<br /><br />\n\
- Indentify anchor points indicating the of the custom menu. See \n\
<a href=\"#!/url=./si_om/siMenuAnchorPoints.html\">siMenuAnchorPoints</a> for a complete list. <br /><br />\n\
- Make multiple views share the same custom menu. The same menu can be \n\
registered in different views with different anchor points and display \n\
options. This maximizes the code reusability of custom menus in Softimage.<br /><br />\n\
Custom menus are self-installed plug-ins and are integrated in Softimage by \n\
dropping the plug-in file in the Application\\Plugins folder. You cannot create \n\
a custom menu by running a script from the script editor; rather, you must \n\
implement a menu plug-in. Therefore, you must register the custom menu  \n\
at startup time by using <a href=\"#!/url=./si_om/PluginRegistrar.RegisterMenu.html\">PluginRegistrar.RegisterMenu</a>, \n\
The registration function doesn\'t load the custom menu explicitly in memory;\n\
Softimage will load the menu only when it is requested by the user. See \n\
<a href=\"#!/url=./files/cus_self_RegisteringPluginItems.htm\">Registering Plug-in Items</a> \n\
for more details regarding implementing these kinds of self-installing items. <br /><br />\n\
You must implement a callback function in order to build a menu and add menu \n\
items. The callback function is called by Softimage when the user opens the \n\
menu. The function name must be formatted as {plug-in_item_name}_Init where \n\
plug-in_item_name is the string passed to <a href=\"#!/url=./si_om/PluginRegistrar.RegisterMenu.html\">PluginRegistrar.RegisterMenu</a> \n\
to identify the menu plug-in item. For more information, see \n\
<a href=\"#!/url=./si_cmds/callbacks.html\">Definition Callbacks for Menus</a>.<br /><br />\n\
Note: The function return value is not required by Softimage.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Menu.AddCallbackItem.html\">AddCallbackItem</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Menu.AddCallbackItem2.html\">AddCallbackItem2</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Menu.AddCommandItem.html\">AddCommandItem</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Menu.AddCommandItem2.html\">AddCommandItem2</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Menu.AddItem.html\">AddItem</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Menu.AddItem2.html\">AddItem2</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Menu.AddSeparatorItem.html\">AddSeparatorItem</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Menu.AddSubMenu.html\">AddSubMenu</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/MenuItem.SetBackgroundColor.html\">SetBackgroundColor</a>		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/MenuItem.Callback.html\">Callback</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/MenuItem.Checked.html\">Checked</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/MenuItem.Command.html\">Command</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/MenuItem.Enabled.html\">Enabled</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/MenuItem.Filter.html\">Filter</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/MenuItem.Style.html\">Style</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">//-------------------------------------------------------------------\n\
// JScript implementation example of a custom menu plug-in.\n\
//\n\
// README: Copy and paste the example into the script editor \n\
// and run (F5).\n\
//\n\
// The menu will install itself into the modelling toolbar\n\
// in the modify deform section.\n\
//-------------------------------------------------------------------\n\
// This function is required to register the menu in Softimage\n\
function XSILoadPlugin( in_reg )\n\
{\n\
	// register plug-in information\n\
	in_reg.Author = \"Softimage Corp.\";\n\
	in_reg.Name = \"Menu Example\";\n\
	// var the version number of this plug-in\n\
	in_reg.Major = 1;\n\
	in_reg.Minor = 0;\n\
	// install a dynamic custom menu in the spatial section in the deform menu (model toolbar)\n\
	in_reg.RegisterMenu( siMenuTbDeformSpatialID, \"MenuExample\", true, true );\n\
	return true;\n\
}\n\
// This is the callbackfunction used for building the menu. Since the menu is\n\
// dynamic, thefunction is called each time the menu opens.\n\
function MenuExample_Init( in_ctxt )	\n\
{\n\
	// retrieve the menu object to build \n\
	var menu = in_ctxt.Source;\n\
	// var the menu caption\n\
	menu.Name = \"&amp;Custom Deform\";\n\
	// attach the Twist command to the first menu item\n\
	menu.AddCommandItem( \"&amp;Twist\", \"Twist\" );\n\
	// adds a separator	\n\
	menu.AddSeparatorItem();\n\
	// adds other menu items and attach afunction callback\n\
	var item = menu.AddItem( \"Custom &amp;1\", siMenuItem );\n\
	item.Callback = \"OnMenuItem\";\n\
	menu.AddCallbackItem( \"Custom &amp;2\", \"OnMenuItem\" );\n\
	menu.AddCallbackItem( \"Custom &amp;3\", \"OnMenuItem\" );\n\
	menu.AddSeparatorItem();\n\
	var submenu = menu.AddSubMenu( \"&amp;function menu\" );\n\
	submenu.AddCommandItem( \"Sub&amp;divide\", \"Subdivide\" );\n\
	// var the submenu menu with a polygon filter, the menu will be enabled only \n\
	// if polygons are selected.\n\
	submenu.Filter = \"Polygon\";\n\
	return true;\n\
}\n\
// This callbackfunction is called by Softimage when the menu item 1 or 2 are \n\
// selected\n\
function OnMenuItem( in_ctxt )\n\
{\n\
	var menuitem = in_ctxt.source;\n\
	LogMessage( menuitem.name + \":\" + menuitem.callback );\n\
}\n\
//--------------------------------------------------------------------\n\
// Code to bootstrap example into system\n\
//--------------------------------------------------------------------\n\
function ExampleSourceCode()\n\
{\n\
	return \"// XSISDK Doc Example\\n\" +	\n\
		MenuExample_Init.toString() + \"\\n\" + \n\
		OnMenuItem.toString() + \"\\n\" + \n\
		XSILoadPlugin.toString();\n\
}\n\
// if we are running from script editor save code to \n\
// examples addon folder in the user\'s directory.\n\
if (GetUserPref(\"ScriptingSessionActive\"))\n\
{\n\
	var ex_name 		= \"ExMenu\";\n\
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
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/MenuItem.html\">MenuItem</a> <a href=\"#!/url=./si_cmds/callbacks.html\">Definition Callbacks for Menus</a> <a href=\"#!/url=./examples/Addons/SimpleMenu/netview_SimpleMenu.htm\">Simple Menu plug-in example</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";