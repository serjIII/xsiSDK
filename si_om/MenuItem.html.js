var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MenuItem</title>\n\
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
            <h1>MenuItem</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">MenuItem</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_MenuItem\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1MenuItem.html\">MenuItem</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\"><a href=\"#!/url=./si_om/UIObject.html\">UIObject</a></p>\n\
<p class=\"level3\">MenuItem</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> The MenuItem object represents an individual item of a custom <a href=\"#!/url=./si_om/Menu.html\">Menu</a>. \n\
With the MenuItem object you can attach a command or a callback function to \n\
a menu item and fire it when you click on the menu item. <br /><br />\n\
Other features of custom menu items include:<br /><br />\n\
- Menu items set with a command are greyed out if the command is disabled.<br /><br />\n\
- Menu items will show the origin of the command or callback ([u] for user, \n\
[w] for workgroup). <br /><br />\n\
- Menu items that point to a command will show the hotkey associated with \n\
the command. <br /><br />\n\
- Set them with a <a href=\"#!/url=./si_om/Filter.html\">Filter</a> to validate the menu items \n\
against the selected/target object(s) before opening the menu. Custom menus \n\
are greyed out or removed if the filter criteria is not satisfied.<br /><br />\n\
- Callback functions are undoable provided that commands or object model \n\
methods they used supports undo and redo. <br /><br />\n\
A menu item can be defined as a standard menu item on which you can attach a \n\
command or callback function (Note: If for some reasons you assign both a\n\
command and a callback to your menu item, the callback will have precedence \n\
over the command when the menu item is selected). You can also create a \n\
menu item as a separator or as a sub menu. See the <a href=\"#!/url=./si_om/Menu.html\">Menu</a> \n\
object documentation for more details about adding menu items to a custom \n\
menu.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/MenuItem.SetBackgroundColor.html\">SetBackgroundColor</a>		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/MenuItem.Callback.html\">Callback</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/MenuItem.Checked.html\">Checked</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/MenuItem.Command.html\">Command</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/MenuItem.Enabled.html\">Enabled</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/MenuItem.Filter.html\">Filter</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/MenuItem.Style.html\">Style</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// JScript implementation example of a custom menu item \n\
// This function is required to register the menu in Softimage\n\
//\n\
// README: Copy and paste the example into the script editor \n\
// and run (F5).\n\
//\n\
// The menu will install itself into the main window menu\n\
//-------------------------------------------------------------------\n\
function  XSILoadPlugin( in_reg )\n\
{\n\
	// register plug-in information\n\
	in_reg.Author = \"Softimage Co.\" ;\n\
	in_reg.Name = \"MenuItem Example\";\n\
	//  the version number of this plug-in\n\
	in_reg.Major = 1;\n\
	in_reg.Minor = 0 ;\n\
	// install a custom menu in the window menu \n\
	in_reg.RegisterMenu( siMenuMainWindowID, \"ExMenuItem\", true, true );\n\
	return true;\n\
}\n\
// This is the callback function used for building the menu. Since the menu is\n\
// dynamic, the function is called each time the menu opens.\n\
function  ExMenuItem_Init( in_ctxt )	\n\
{\n\
	// retrieve the menu object to build \n\
	menu = in_ctxt.Source;\n\
	// attach a menu item to the menu along with its function handler\n\
	menu.AddCallbackItem( \"Custom menu item\", \"OnMenuItem\" );\n\
	return true;\n\
}\n\
//This callback function is called by Softimage when the menu item is selected\n\
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
		ExMenuItem_Init.toString() + \"\\n\" + \n\
		OnMenuItem.toString() + \"\\n\" + \n\
		XSILoadPlugin.toString();\n\
}\n\
// if we are running from script editor save code to \n\
// examples addon folder in the user\'s directory.\n\
if (GetUserPref(\"ScriptingSessionActive\"))\n\
{\n\
	var ex_name 	= \"ExMenuItem\";\n\
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
}\n\
//</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Menu.html\">Menu</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";