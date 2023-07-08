var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Menu.AddCallbackItem</title>\n\
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
            <h1>Menu.AddCallbackItem</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Menu.html\">Menu</a>.AddCallbackItem</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Adds a menu item to the end of the menu and attaches a callback function. The \n\
callback is fired when the menu item is selected. \n\
<br /><br />\n\
The callback function must be implemented in the plug-in file as described in \n\
<a href=\"#!/url=./si_cmds/callbacks.html\">Definition Callbacks for Menus</a>. If \n\
your menu is attached to a contextual menu, the currently selected objects are \n\
passed in to your callback. The target object under the cursor is also passed in \n\
as part of the selected objects. However if no objects are selected, then only \n\
the target is passed in. The objects can be retrieved through the \n\
<a href=\"#!/url=./si_om/Context.GetAttribute.html\">Context.GetAttribute</a> method with \"Target\" specified as the \n\
value for the AttributeName parameter. The selected/target objects are not passed \n\
in to the callback of a custom menu item attached to a regular menu.\n\
<br /><br />\n\
Note: It is a bit easier to use this method to write script code as a menu callback \n\
rather than using <a href=\"#!/url=./si_om/Menu.AddCommandItem.html\">Menu.AddCommandItem</a> and implementing a custom \n\
<a href=\"#!/url=./si_om/Command.html\">Command</a>. However the advantage of using a custom command is that\n\
it can also be invoked, without user involvement, from scripting.\n\
<br /><br />\n\
Tip: See any of the examples for creating a\n\
<a href=\"#!/url=./examples/Addons/SimpleMenu/netview_SimpleMenu.htm\">Simple Menu plug-in</a>\n\
to see this method in action.\n\
<br /><br />Note: This method could return an invalid object in python, use <a href=\"#!/url=./si_om/Menu.AddCallbackItem2.html\">Menu.AddCallbackItem2</a> instead.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>MenuItem Menu.AddCallbackItem( String in_pLabel, String in_pszCallback );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = Menu.AddCallbackItem( Label, Callback );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>The newly created <a href=\"#!/url=./si_om/MenuItem.html\">MenuItem</a> object.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Label		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The menu item label.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Callback		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
The name of the callback function. <br /><br /> \n\
Important: The function must be implemented in the self-installed menu \n\
plug-in file.\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">//-------------------------------------------------------------------\n\
// This example shows how to implement a menu for accessing\n\
// the target of an anchor hook. Run the example from the\n\
// Softimage Script Editor and then follow the MANUAL STEPS.\n\
//-------------------------------------------------------------------\n\
// Start by building the plug-in on disk\n\
BuildDemoPlugin();\n\
// Then create a mesh and activate vertex selection\n\
CreatePrim(\"Torus\", \"MeshSurface\");\n\
SetSelFilter(\"Vertex\");\n\
/*\n\
	MANUAL STEPS:\n\
	Now right-click on the torus and select \'Get Target Info\' from the\n\
	pop-up menu. Something like the following will log:\n\
	// Menu Target torus contains 1 item(s):\n\
	//    Target item torus is a X3DObject\n\
	//    Target contains 4 NestedObject(s):\n\
	//       torus.Name (Parameter)\n\
	//       torus.primitive (Parameter)\n\
	//       torus.nodecurrent (Parameter)\n\
	//       torus.Children (Parameter)\n\
	// \n\
	// MenuItem Callback: LogTargetInfo\n\
	// MenuItem Name: Get Target Info\n\
	// MenuItem Origin: siUnknownPath\n\
*/\n\
//-------------------------------------------------------------------\n\
// Utility function to create the demo plug-in on disk\n\
function BuildDemoPlugin()\n\
{\n\
	var sPluginFile = XSIUtils.BuildPath(\n\
		Application.InstallationPath(siUserPath),\n\
		\"Application\", \"Plugins\", \"MenuDemo.js\"\n\
	);\n\
	var fso = new ActiveXObject(\"Scripting.FileSystemObject\");\n\
	if (!fso.FileExists(sPluginFile)) {\n\
		var ts = fso.CreateTextFile(sPluginFile);\n\
		ts.Write(\n\
			XSILoadPlugin.toString() +\n\
			DemoContextMenu_Init.toString() +\n\
			LogTargetInfo.toString() +\n\
			MakeInstallPathReadable.toString() +\n\
			Log.toString()\n\
		);\n\
		ts.Close();\n\
	}\n\
}\n\
//-------------------------------------------------------------------\n\
/*\n\
	BELOW IS THE IMPLEMENTATION OF THE MENU PLUG-IN\n\
*/\n\
// Registration callback\n\
function XSILoadPlugin( in_reg )\n\
{\n\
	in_reg.Author = \"Softimage\";\n\
	in_reg.Name   = \"MyContextMenu\";\n\
	in_reg.Major  = 1;\n\
	in_reg.Minor  = 0;\n\
	in_reg.RegisterMenu(siMenu3DViewObjectSelectContextID, \"DemoContextMenu\", false, false);\n\
}\n\
// Init callback\n\
function DemoContextMenu_Init(in_ctxt)\n\
{\n\
	in_ctxt.Source.AddCallbackItem(\'Get Target Info\', \"LogTargetInfo\");\n\
	return true;\n\
}\n\
// AddCallbackItem handler\n\
function LogTargetInfo(in_ctxt)\n\
{\n\
	// Context.GetAttribute(\"Target\") allows you to access the target of the \n\
	// anchor point by returning an XSICollection containing the target(s)\n\
	var oTargetColl = in_ctxt.GetAttribute(\"Target\");\n\
	Log(\"Menu Target contains \"+oTargetColl.Count+\" item(s):\");\n\
	for ( var i=0; i&lt;oTargetColl.Count; i++ ) {\n\
		var oTarget = oTargetColl.Item(i);\n\
		Log(\"   Target item \"+oTarget+\" is a \"+Application.ClassName(oTarget));\n\
		Log(\"   Target contains \"+oTarget.NestedObjects.Count+\" NestedObject(s):\");\n\
		for ( var j=0; j&lt;oTarget.NestedObjects.Count; j++ ) {\n\
			var oNested = oTarget.NestedObjects.Item(j);\n\
			Log(\"      \"+oNested+\" (\"+Application.ClassName(oNested)+\")\");\n\
		}\n\
	}\n\
	var oMenuItem = in_ctxt.Source;\n\
	Log(\"\\nMenuItem Callback: \"+oMenuItem.Callback);\n\
	Log(\"MenuItem Name: \"+oMenuItem.Name);\n\
	Log(\"MenuItem Origin: \"+MakeInstallPathReadable(oMenuItem.Origin));\n\
}\n\
// Workhorse functions\n\
function MakeInstallPathReadable(in_path)\n\
{\n\
	switch (in_path) {\n\
		case siProjectPath :		return \"siProjectPath\";\n\
		case siUserPath :			return \"siUserPath\";\n\
		case siWorkgroupPath :		return \"siWorkgroupPath\";\n\
		case siFactoryPath :		return \"siFactoryPath\";\n\
		case siAddonPath :			return \"siAddonPath\";\n\
		case siUserAddonPath :		return \"siUserAddonPath\";\n\
		case siWorkgroupAddonPath :	return \"siWorkgroupAddonPath\";\n\
		case siUnknownPath :		return \"siUnknownPath\";\n\
		case siCustomPath :			return \"siCustomPath\";\n\
	}\n\
}\n\
function Log(in_msg)\n\
{\n\
	Application.LogMessage(in_msg, siComment);\n\
}</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">//-------------------------------------------------------------------\n\
// This example shows how to implement a menu for calling \n\
// commands with and without hardcoded arguments through a \n\
// callback function.\n\
//\n\
// README: Copy and paste the example into the script editor \n\
// and run (F5).\n\
//\n\
// The menu will install itself into the application\'s main menubar\n\
//-------------------------------------------------------------------\n\
function XSILoadPlugin( in_reg )\n\
{\n\
	in_reg.Author = \"Softimage Co.\";\n\
	in_reg.Name = \"Menu.AddCallbackItem Example\";\n\
	// Sdd a custom menu under the Application menu in the main menu bar\n\
	in_reg.RegisterMenu( siMenuMainApplicationID, \"ApplyOp_Menu\" );\n\
	LogMessage( in_reg.Name + \" has been loaded.\" );\n\
	return true;\n\
}\n\
function ApplyOp_Menu_Init( in_ctxt )\n\
{\n\
	var menu = in_ctxt.source;\n\
	menu.Name = \"Apply Deform operators\";\n\
	menu.AddCallbackItem( \"Twist\", \"OnApplyOp\" );\n\
	menu.AddCallbackItem( \"Bend\", \"OnApplyOp\" );\n\
	menu.AddCallbackItem( \"Bulge\", \"OnApplyOp\" );\n\
	menu.AddCallbackItem( \"Shear\", \"OnApplyOp\" );\n\
	menu.AddCallbackItem( \"Taper\", \"OnApplyOp\" );\n\
	menu.AddSeparatorItem();\n\
	menu.AddCallbackItem( \"Push\", \"OnApplyOp\" );\n\
	menu.AddCallbackItem( \"Relax\", \"OnApplyOp\" );\n\
	menu.AddCallbackItem( \"Smooth\", \"OnApplyOp\" );\n\
	menu.AddCallbackItem( \"QStretch\", \"OnApplyOp\" );\n\
	menu.AddCallbackItem( \"Randomize\", \"OnApplyOp\" );\n\
	return true;\n\
}\n\
function OnApplyOp( in_ctxt )\n\
{\n\
	var item = in_ctxt.Source;\n\
	switch( item.Name )\n\
	{\n\
		case \"QStretch\":\n\
			ApplyKinematicOp( \"QStretch\", null, siBranch );\n\
			break;\n\
		case \"Randomize\":\n\
			ApplyOp( \"Randomize\", null, siBranch );\n\
			break;\n\
		default:\n\
			ApplyOp( item.Name );\n\
	}\n\
	return true;\n\
}\n\
//--------------------------------------------------------------------\n\
// Code to bootstrap example into system\n\
//--------------------------------------------------------------------\n\
function ExampleSourceCode()\n\
{\n\
	return \"// XSISDK Doc Example\\n\" +	\n\
		ApplyOp_Menu_Init.toString() + \"\\n\" + \n\
		OnApplyOp.toString() + \"\\n\" + \n\
		XSILoadPlugin.toString();\n\
}\n\
// If we are running from script editor save code to \n\
// examples addon folder in the user\'s directory.\n\
if (GetUserPref(\"ScriptingSessionActive\"))\n\
{\n\
	var ex_name 	= \"ExMenuAddCallbackItem\";\n\
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
<div><p><a href=\"#!/url=./si_om/MenuItem.html\">MenuItem</a> <a href=\"#!/url=./si_om/MenuItem.Callback.html\">MenuItem.Callback</a> <a href=\"#!/url=./si_cmds/callbacks.html\">Definition Callbacks for Menus</a> <a href=\"#!/url=./examples/Addons/SimpleMenu/netview_SimpleMenu.htm\">Simple Menu plug-in example</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";