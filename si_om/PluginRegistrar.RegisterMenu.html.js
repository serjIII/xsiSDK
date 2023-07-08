var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PluginRegistrar.RegisterMenu</title>\n\
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
            <h1>PluginRegistrar.RegisterMenu</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/PluginRegistrar.html\">PluginRegistrar</a>.RegisterMenu</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Registers a custom <a href=\"#!/url=./si_om/Menu.html\">Menu</a> in Softimage. The menu is loaded and initialized only \n\
when the user opens it from the UI. The location of a menu is specified by anchor points \n\
(see <a href=\"#!/url=./si_om/siMenuAnchorPoints.html\">siMenuAnchorPoints</a> for a complete list). \n\
<br /><br />\n\
You can register the same menu at multiple locations, and multiple menus at the same location. \n\
A menu can be a submenu or a flat list of items. A menu can also be dynamic or static: a \n\
dynamic menu is rebuilt every time it is displayed, while a static menu is built once only.\n\
<br /><br />\n\
See <a href=\"#!/url=./si_om/Menu.html\">Menu</a> for details about creating a custom menu.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>PluginItem PluginRegistrar.RegisterMenu( siMenuAnchorPoints in_menuID, String in_menuName, Boolean in_bDisplayAsSubmenu, Boolean in_bDynamicMenu );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = PluginRegistrar.RegisterMenu( Anchor, Name, [DisplayAsSubmenu], [Dynamic] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Anchor		</td>\n\
		<td><a href=\"#!/url=./si_om/siMenuAnchorPoints.html\">siMenuAnchorPoints</a>		</td>\n\
		<td>\n\
Specifies the location of the menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		The name of the custom menu to register. It should begin with a letter and contain \n\
		only letters, numbers and the underscore character.\n\
		<br /><br />\n\
		If a menu name contains spaces (for example, \"My Custom Menu\"), the names of the menu \n\
		callback functions must omit the spaces (for example, \"MyCustomMenu_Init\").\n\
		<br /><br />\n\
		If the menu is a submenu (DisplayAsSubmenu == True), or if the menu is added to\n\
		the top-level of the Softimage main menubar (Anchor == siMenuMainTopLevelID), then the\n\
		menu name is used as the menu caption.\n\
		<br /><br />\n\
		You cannot change the caption of a top-level menu. For all other menus, you can\n\
		change the caption by setting the Menu.Name property in the Init callback.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">DisplayAsSubmenu		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
True to display the custom menu as a submenu.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
True			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Dynamic		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
\n\
		Sets the menu as dynamic or static: a dynamic menu is always rebuilt \n\
		before the menu opens whereas static menus are only built once.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
True			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*-------------------------------------------------------------------\n\
	This example shows how to register and implement a custom menu \n\
	plug-in\n\
	README: Copy and paste the example into the script editor \n\
	and run (F5).\n\
	The menu will install itself into the application\'s Window menu\n\
-------------------------------------------------------------------*/\n\
function  XSILoadPlugin( in_reg )\n\
{\n\
	in_reg.Author = \"Softimage Co.\";\n\
	in_reg.Name = \"PluginRegistrar.RegisterMenu Example\";\n\
	// register the menu item \n\
	in_reg.RegisterMenu( siMenuMainWindowID, \"Window_Menu\", false );\n\
	// \"Sample menu has been installed in the Window menu\"\n\
	return true;	\n\
} \n\
function  Window_Menu_Init( in_ctxt )\n\
{\n\
	var oMenu = in_ctxt.source;\n\
	oMenu.AddCallbackItem( \"Sample\", \"OnWindowMenu\");\n\
}\n\
function  OnWindowMenu( in_ctxt )\n\
{\n\
	var oMenuItem = in_ctxt.source;\n\
	Application.LogMessage(\"OnWindowMenu: \" + oMenuItem .name );\n\
}\n\
//--------------------------------------------------------------------\n\
// Code to bootstrap example into system\n\
//--------------------------------------------------------------------\n\
function ExampleSourceCode()\n\
{\n\
	return \"// XSISDK Doc Example\\n\" +	\n\
		Window_Menu_Init.toString() + \"\\n\" + \n\
		OnWindowMenu.toString() + \"\\n\" + \n\
		XSILoadPlugin.toString();\n\
}\n\
// if we are running from script editor save code to \n\
// examples addon folder in the user\'s directory.\n\
if (GetUserPref(\"ScriptingSessionActive\"))\n\
{\n\
	var ex_name 	= \"ExPluginRegistrarRegisterMenu\";\n\
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
<div><p><a href=\"#!/url=./si_om/Menu.html\">Menu</a> <a href=\"#!/url=./si_om/PluginItem.html\">PluginItem</a> <a href=\"#!/url=./si_cmds/callbacks.html\">Definition Callbacks for Menus</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";