var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>UnInstallAddon</title>\n\
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
</style><link rel=\"stylesheet\" href=\"si_cmds/css/en.css\" type=\"text/css\" /><script>$(document).ready(function() { yepnope.injectJs(\"./si_cmds/lib/utils.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>UnInstallAddon</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">UnInstallAddon</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Uninstalls an add-on file from Softimage. This must be a file in either the add-on path (siAddonPath), or the user add-on path \n\
(siUserAddonPath). Attempting to uninstall an add-on from the original installation path results in an error.<br /><br />\n\
This command is the scripting equivalent of launching the Uninstall option from the File > Addon location in the main menu.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>UnInstallAddon( FileName );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">FileName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 The .xsiaddon file. 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/* ---------------------------------------------------------\n\
	This script demonstrates how to install and uninstall \n\
	user add-ons and factory add-ons.\n\
--------------------------------------------------------- */\n\
// Get the filename of an available add-on file, and install it, in the user add-on path.\n\
var myAddonFile = createAddonForDemo( siUserPath );\n\
Application.LogMessage( \"Installing: \" + myAddonFile );\n\
InstallAddon( myAddonFile, siUserAddonPath );\n\
// Now find the installed file.\n\
myAddonFile = XSIUtils.BuildPath( Application.InstallationPath(siUserAddonPath), \"DemoAddon.xsiaddon\" );\n\
Application.LogMessage( \"Uninstalling: \" + myAddonFile );\n\
UnInstallAddon( myAddonFile );\n\
killCmdForDemo();		// clean up the command that was loaded from the add-on\n\
// Now re-install it to the AddonPath.\n\
myAddonFile = createAddonForDemo( siFactoryPath );\n\
Application.LogMessage( \"Installing: \" + myAddonFile );\n\
InstallAddon( myAddonFile, siAddonPath );\n\
// Now uninstall the add-on (again).\n\
myAddonFile = XSIUtils.BuildPath( Application.InstallationPath(siAddonPath), \"DemoAddon.xsiaddon\" );\n\
Application.LogMessage( \"Uninstalling: \" + myAddonFile );\n\
UnInstallAddon( myAddonFile );\n\
killCmdForDemo();		// the plug-in is not automatically unloaded when the add-on is uninstalled\n\
//---------------------------------------------------------\n\
// Output from this script:\n\
//INFO : \"Installing: &lt;UserPath&gt;\\Addons\\DemoAddon.xsiaddon\"\n\
//INFO : \"Uninstalling: &lt;UserPath&gt;\\Addons\\DemoAddon.xsiaddon\"\n\
//INFO : \"Installing: &lt;FactoryPath&gt;\\Addons\\DemoAddon.xsiaddon\"\n\
//INFO : \"Uninstalling: &lt;FactoryPath&gt;\\Addons\\InstalledAddons\\DemoAddon.xsiaddon\"\n\
//---------------------------------------------------------\n\
// 	*** Helper functions *** \n\
//\n\
// Create an add-on package on the fly\n\
function createAddonForDemo( in_Where )\n\
{\n\
	var l_AddonFile = GetAddonFileLocation( in_Where );\n\
	var l_PluginFile = createCmdForDemo();\n\
	var l_AddonObj = Application.CreateAddon();\n\
	l_AddonObj.AddItem( siPluginAddonItemType, l_PluginFile );\n\
	l_AddonObj.Save( l_AddonFile );\n\
	// Now that it\'s in the .xsiaddon file, kill the source\n\
	killCmdForDemo(); \n\
	return l_AddonFile;\n\
}\n\
// Validate the add-on file location\n\
function GetAddonFileLocation( in_Where )\n\
{\n\
	var l_folderLocation = (in_Where == siUserPath) \n\
		? Application.InstallationPath( siUserAddonPath )\n\
		: Application.InstallationPath( siAddonPath );\n\
	var l_fso = new ActiveXObject( \"Scripting.FileSystemObject\" );\n\
	// Make sure the Addons folder exists \n\
	if (! l_fso.FolderExists(l_folderLocation) ) {\n\
		l_fso.CreateFolder( l_folderLocation );\n\
	}\n\
	return XSIUtils.BuildPath( l_folderLocation, \"DemoAddon.xsiaddon\" );\n\
}\n\
// Create the self-installing command plug-in on disk and load it\n\
function createCmdForDemo()\n\
{\n\
	var l_fileLocation = XSIUtils.BuildPath( Application.InstallationPath(siUserPath), \n\
		\"Application\", \"Plugins\", \"JSCmdForAddonsDemoPlugin.js\" );\n\
	var l_fso = new ActiveXObject( \"Scripting.FileSystemObject\" );\n\
	var l_ts = l_fso.CreateTextFile( l_fileLocation );\n\
	l_ts.Write( writeCmdImpl() );\n\
	l_ts.Close();\n\
	Application.LoadPlugin( l_fileLocation );\n\
	return l_fileLocation;\n\
}\n\
// Supply the implementation of the self-installing command plug-in\n\
function writeCmdImpl()\n\
{\n\
	return XSILoadPlugin.toString() + \"\\n\\n\" \n\
		+ JSCmdForAddonsDemo_Init.toString() + \"\\n\\n\" \n\
		+ JSCmdForAddonsDemo_Execute.toString();\n\
}\n\
function XSILoadPlugin( in_reg )\n\
{\n\
	in_reg.Author = \"InstallAddonDemo\";\n\
	in_reg.Name = \"JSCmdForAddonsDemoPlugin\";\n\
	in_reg.Major = 1;\n\
	in_reg.Minor = 0;\n\
	in_reg.RegisterCommand(\"JSCmdForAddonsDemo\",\"JSCmdForAddonsDemo\");\n\
	return true;\n\
}\n\
function JSCmdForAddonsDemo_Init( in_ctxt )\n\
{\n\
	var oCmd = in_ctxt.Source;\n\
	oCmd.Description = \"\'Hello World\' command for demonstration\";\n\
	oCmd.ReturnValue = false;\n\
	return true;\n\
}\n\
function JSCmdForAddonsDemo_Execute(  )\n\
{\n\
	Application.LogMessage(\"Hello, World!\", siInfo);\n\
	return true;\n\
}\n\
// Remove the self-installing command plug-in (and delete from disk)\n\
function killCmdForDemo()\n\
{\n\
	var p = new Enumerator( Application.Plugins );\n\
	for ( ; !p.atEnd(); p.moveNext() ) {\n\
		var plugin = p.item();\n\
		if ( plugin.Name == \"JSCmdForAddonsDemoPlugin\" ) {\n\
			Application.UnloadPlugin( plugin.Filename, true );\n\
			break;\n\
		}\n\
	}\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/InstallAddon.html\">InstallAddon</a> <a href=\"#!/url=./si_om/XSIApplication.InstallAddon.html\">XSIApplication.InstallAddon</a> <a href=\"#!/url=./si_om/XSIApplication.UnInstallAddon.html\">XSIApplication.UnInstallAddon</a> <a href=\"#!/url=./si_om/Addon.html\">Addon</a> <a href=\"#!/url=./si_om/Plugin.html\">Plugin</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";