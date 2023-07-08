var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>InstallAddon</title>\n\
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
            <h1>InstallAddon</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">InstallAddon</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Installs an add-on file in Softimage. To execute this command, you need to have an add-on file saved on disk. Add-on files \n\
for Softimage have the .xsiaddon extension. Add-on files contain settings for the layout of Softimage, toolbars, keymaps, custom \n\
commands, etc.<br /><br />\n\
This command is the scripting equivalent of launching the Install option from the File > Addon location in the main menu.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>InstallAddon( FileName, [InstallPath] );</pre>		</td>	</tr>\n\
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
	<tr>\n\
		<td class=\"name\">InstallPath		</td>\n\
		<td><a href=\"#!/url=./si_om/siInstallationPath.html\">siInstallationPath</a>		</td>\n\
		<td>\n\
\n\
		Use this to specify a installation location for the addon. siUserAddonPath and siWorkgroupAddonPath \n\
		are the recommended values. If siUnknownPath is specified then the add-on will be installed at the \n\
		default location specified inside the add-on file (see <a href=\"#!/url=./si_om/Addon.DefaultInstallationPath.html\">Addon.DefaultInstallationPath</a>).  \n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
7 (siUnknownPath)			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'---------------------------------------------------------\n\
\' This script demonstrates how to install and uninstall \n\
\' user add-ons and factory add-ons.\n\
\'---------------------------------------------------------\n\
\' Get the filename of an available add-on file, and install it, in the user add-on path.\n\
myAddonFile = createAddonForDemo( siUserPath )\n\
Application.LogMessage \"Installing: \" &amp; myAddonFile\n\
InstallAddon myAddonFile, siUserAddonPath\n\
\' Now find the installed file.\n\
myAddonFile = XSIUtils.BuildPath( Application.InstallationPath(siUserAddonPath), \"DemoAddon.xsiaddon\" )\n\
Application.LogMessage \"Uninstalling: \" &amp; myAddonFile\n\
UnInstallAddon myAddonFile\n\
killCmdForDemo		\' clean up the command that was loaded from the add-on\n\
\' Now re-install it to the AddonPath.\n\
myAddonFile = createAddonForDemo( siFactoryPath )\n\
Application.LogMessage \"Installing: \" &amp; myAddonFile\n\
InstallAddon myAddonFile, siAddonPath\n\
\' Now uninstall the add-on (again).\n\
myAddonFile = XSIUtils.BuildPath( Application.InstallationPath(siAddonPath), \"DemoAddon.xsiaddon\" )\n\
Application.LogMessage \"Uninstalling: \" &amp; myAddonFile\n\
UnInstallAddon myAddonFile\n\
killCmdForDemo		\' the plug-in is not automatically unloaded when the add-on is uninstalled\n\
\'---------------------------------------------------------\n\
\' Output from this script:\n\
\'INFO : \"Installing: &lt;UserPath&gt;\\Addons\\DemoAddon.xsiaddon\"\n\
\'INFO : \"Uninstalling: &lt;UserPath&gt;\\Addons\\DemoAddon.xsiaddon\"\n\
\'INFO : \"Installing: &lt;FactoryPath&gt;\\Addons\\DemoAddon.xsiaddon\"\n\
\'INFO : \"Uninstalling: &lt;FactoryPath&gt;\\Addons\\InstalledAddons\\DemoAddon.xsiaddon\"\n\
\'---------------------------------------------------------\n\
\' 	*** Helper functions *** \n\
\'\n\
\' Create an add-on package on the fly\n\
function createAddonForDemo( in_Where )\n\
	dim l_AddonFile, l_PluginFile, l_AddonObj\n\
	l_AddonFile = GetAddonFileLocation( in_Where )\n\
	l_PluginFile = createCmdForDemo()\n\
	Set l_AddonObj = Application.CreateAddon()\n\
	l_AddonObj.AddItem siPluginAddonItemType, l_PluginFile\n\
	l_AddonObj.Save l_AddonFile\n\
	\' Now that it\'s in the .xsiaddon file, kill the source\n\
	killCmdForDemo \n\
	createAddonForDemo = l_AddonFile\n\
end function\n\
\' Validate the add-on file location\n\
function GetAddonFileLocation( in_Where )\n\
	dim l_folderLocation, l_fso\n\
	If in_Where = siUserPath Then\n\
		l_folderLocation = Application.InstallationPath( siUserAddonPath )\n\
	Else\n\
		l_folderLocation = Application.InstallationPath( siAddonPath )\n\
	End If\n\
	Set l_fso = CreateObject( \"Scripting.FileSystemObject\" )\n\
	\' Make sure the Addons folder exists \n\
	If Not l_fso.FolderExists(l_folderLocation) Then \n\
		l_fso.CreateFolder l_folderLocation\n\
	End If\n\
	GetAddonFileLocation = XSIUtils.BuildPath( l_folderLocation, \"DemoAddon.xsiaddon\" )\n\
end function\n\
\' Create the self-installing command plug-in on disk and load it\n\
function createCmdForDemo()\n\
	dim l_fileLocation, l_fso, l_ts\n\
	l_fileLocation = XSIUtils.BuildPath( Application.InstallationPath(siUserPath), _\n\
		\"Application\", \"Plugins\", \"VBSCmdForAddonsDemoPlugin.vbs\" )\n\
	Set l_fso = CreateObject( \"Scripting.FileSystemObject\" )\n\
	Set l_ts = l_fso.CreateTextFile( l_fileLocation )\n\
	l_ts.Write writeCmdImpl()\n\
	l_ts.Close\n\
	Application.LoadPlugin l_fileLocation\n\
	createCmdForDemo = l_fileLocation\n\
end function\n\
\' Supply the implementation of the self-installing command plug-in\n\
function writeCmdImpl()\n\
	writeCmdImpl = \"function XSILoadPlugin( in_reg )\" &amp; vbCrLf _\n\
	&amp; vbTab &amp; \"in_reg.Author = \" &amp; Chr(34) &amp; \"InstallAddonDemo\" &amp; Chr(34) &amp; vbCrLf _\n\
	&amp; vbTab &amp; \"in_reg.Name = \" &amp; Chr(34) &amp; \"VBSCmdForAddonsDemoPlugin\" &amp; Chr(34) &amp; vbCrLf _\n\
	&amp; vbTab &amp; \"in_reg.Major = 1\" &amp; vbCrLf _\n\
	&amp; vbTab &amp; \"in_reg.Minor = 0\" &amp; vbCrLf _\n\
	&amp; \"\" &amp; vbCrLf _\n\
	&amp; vbTab &amp; \"in_reg.RegisterCommand \" &amp; Chr(34) &amp; \"VBSCmdForAddonsDemo\" &amp; Chr(34) &amp; \", \" &amp; Chr(34) &amp; \"VBSCmdForAddonsDemo\" &amp; Chr(34) &amp; vbCrLf _\n\
	&amp; vbTab &amp; \"XSILoadPlugin = True\" &amp; vbCrLf _\n\
	&amp; \"end function\" &amp; vbCrLf _\n\
	&amp; \"\" &amp; vbCrLf _\n\
	&amp; \"function VBSCmdForAddonsDemo_Init( in_ctxt )\" &amp; vbCrLf _\n\
	&amp; vbTab &amp; \"Set oCmd = in_ctxt.Source\" &amp; vbCrLf _\n\
	&amp; vbTab &amp; \"oCmd.Description = \" &amp; Chr(34) &amp; \"\'Hello World\' command for demonstration\" &amp; Chr(34) &amp; vbCrLf _\n\
	&amp; vbTab &amp; \"oCmd.ReturnValue = False\" &amp; vbCrLf _\n\
	&amp; vbTab &amp; \"VBSCmdForAddonsDemo_Init = True\" &amp; vbCrLf _\n\
	&amp; \"end function\" &amp; vbCrLf _\n\
	&amp; \"\" &amp; vbCrLf _\n\
	&amp; \"function VBSCmdForAddonsDemo_Execute(  )\" &amp; vbCrLf _\n\
	&amp; vbTab &amp; \"Application.LogMessage \" &amp; Chr(34) &amp; \"Hello, World!\" &amp; Chr(34) &amp; \", siInfo\" &amp; vbCrLf _\n\
	&amp; vbTab &amp; \"VBSCmdForAddonsDemo_Execute = True\" &amp; vbCrLf _\n\
	&amp; \"end function\"	\n\
end function\n\
\' Remove the self-installing command plug-in (and delete from disk)\n\
sub killCmdForDemo()\n\
	For Each p In Application.Plugins\n\
		If p.Name = \"VBSCmdForAddonsDemoPlugin\" Then\n\
			Application.UnloadPlugin p.Filename, true\n\
			Exit For\n\
		End If\n\
	Next\n\
end sub</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/UnInstallAddon.html\">UnInstallAddon</a> <a href=\"#!/url=./si_om/XSIApplication.InstallAddon.html\">XSIApplication.InstallAddon</a> <a href=\"#!/url=./si_om/XSIApplication.UnInstallAddon.html\">XSIApplication.UnInstallAddon</a> <a href=\"#!/url=./si_om/Addon.html\">Addon</a> <a href=\"#!/url=./si_om/Plugin.html\">Plugin</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";