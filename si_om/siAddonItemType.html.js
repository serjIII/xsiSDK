var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siAddonItemType</title>\n\
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
            <h1>siAddonItemType</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siAddonItemType</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>This enumeration type specifies the type of item supported by add-ons. \n\
Depending on which type you use with the <a href=\"#!/url=./si_om/Addon.AddItem.html\">Addon.AddItem</a> method, \n\
you need to supply only a name, or a path and file name, or you may be able to use \n\
either as indicated below.</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>siAddonItemType.siLayoutAddonItemType                                       // 1\n\
siAddonItemType.siToolbarAddonItemType                                      // 2\n\
siAddonItemType.siKeyMapAddonItemType                                       // 3\n\
siAddonItemType.siScriptCmdAddonItemType                                    // 4\n\
siAddonItemType.siPresetAddonItemType                                       // 5\n\
siAddonItemType.siSpdlAddonItemType                                         // 6\n\
siAddonItemType.siLibraryAddonItemType                                      // 7\n\
siAddonItemType.siOtherAddonItemType                                        // 8\n\
siAddonItemType.siEventAddonItemType                                        // 9\n\
siAddonItemType.siDeviceAddonItemType                                       // 10\n\
siAddonItemType.siShelfAddonItemType                                        // 11\n\
siAddonItemType.siPluginAddonItemType                                       // 12\n\
siAddonItemType.siHelpAddonItemType                                         // 13\n\
siAddonItemType.siViewAddonItemType                                         // 14</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLayoutAddonItemType\"> </a>siLayoutAddonItemType		</td>\n\
		<td class=\"example\">1		</td>\n\
		<td>\n\
\n\
	Layout. \n\
	To specify a layout, use either the name of the layout or the full path and file name.\n\
	<br /><br />\n\
	The name appears in the File > Addons > Package dialog (eg., \"myLayout\").\n\
	<br /><br />\n\
	The full path and file name is similar to this:\n\
	<br /><br />\n\
	InstallationPath( siUserPath ) & \"\\Data\\Layouts\\myLayout.xsily\"\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siToolbarAddonItemType\"> </a>siToolbarAddonItemType		</td>\n\
		<td class=\"example\">2		</td>\n\
		<td>\n\
\n\
	Toolbar created before version 4.0 (with the .DSToolbar file extension). \n\
	To specify such a toolbar, use either the name of the toolbar or the full path and file name.\n\
	<br /><br /> \n\
	The name appears in the File > Addons > Package dialog (eg., \"myToolbar\").\n\
	<br /><br />\n\
	The full path and file name is similar to this:<br /><br /> InstallationPath( siUserPath ) & \"\\Data\\Preferences\\Toolbars\\MyToolbar{FB913D3E-F14E-11D3-9F04-009027318C6F}.DSToolbar\"\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siKeyMapAddonItemType\"> </a>siKeyMapAddonItemType		</td>\n\
		<td class=\"example\">3		</td>\n\
		<td>\n\
\n\
	Key Map. \n\
	To specify a keymap, use either the name of the keymap or the full path and file name.\n\
	<br /><br />\n\
	The name appears in the File > Addons > Package dialog (eg., \"myKeyMap\").\n\
	<br /><br />\n\
	The full path and file name is similar to this:\n\
	<br /><br />\n\
	InstallationPath( siUserPath ) & \"\\Data\\Preferences\\KeyMaps\\myKeyMap.DSKeymap\"\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siScriptCmdAddonItemType\"> </a>siScriptCmdAddonItemType		</td>\n\
		<td class=\"example\">4		</td>\n\
		<td>\n\
\n\
	Custom Command (script based or compiled). \n\
	To specify a custom command, use the name of the command as it appears in the history pane of the Script Editor (eg., \"myCustomCommand\").  \n\
	If the command is part of a self-installed plug-in use siPluginAddonItemType (12) instead.\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPresetAddonItemType\"> </a>siPresetAddonItemType		</td>\n\
		<td class=\"example\">5		</td>\n\
		<td>\n\
\n\
	Preset. \n\
	To specify a preset, use the full path and file name (eg., InstallationPath( siUserPath ) & \"\\Data\\DSPresets\\Properties\\MyCustomPreset.Preset\").\n\
	<br /><br />\n\
	When the Preset refers to a SPDL based custom property then the SPDL will automatically be packaged as well.  \n\
	<br /><br />\n\
	When the Preset refers to a custom compiled operator or real-time shader then both the SPDL file and binary (.dll or .so) \n\
	will automatically be packaged.\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSpdlAddonItemType\"> </a>siSpdlAddonItemType		</td>\n\
		<td class=\"example\">6		</td>\n\
		<td>\n\
\n\
	SPDL. \n\
	To specify a SPDL, use the full path and file name (eg., InstallationPath( siUserPath ) & \"\\Data\\DSPresets\\spdl\\MyCustomDialog.spdl\").\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLibraryAddonItemType\"> </a>siLibraryAddonItemType		</td>\n\
		<td class=\"example\">7		</td>\n\
		<td>\n\
\n\
	Library file, (.dll or .so). (NOT CURRENTLY SUPPORTED)\n\
	You can use siPluginAddonItemType (12) instead to package any libraries in an .xsiaddon file.\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOtherAddonItemType\"> </a>siOtherAddonItemType		</td>\n\
		<td class=\"example\">8		</td>\n\
		<td>\n\
\n\
	Other kind of file\n\
	The \'Other\' category includes HTML files containing help pages for your application, an image file used by your application, etc. \n\
	To specify an additional file, use the full path and file name (eg., InstallationPath( siUserPath ) & \"\\Data\\VCCProject\\HelpPages\\MyHTMLHelp.html\").\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siEventAddonItemType\"> </a>siEventAddonItemType		</td>\n\
		<td class=\"example\">9		</td>\n\
		<td>\n\
\n\
	Event. \n\
	To specify an event, use the name of the event as it appears in the File > Addons > Package dialog (eg., \"myCustomEvent\").\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDeviceAddonItemType\"> </a>siDeviceAddonItemType		</td>\n\
		<td class=\"example\">10		</td>\n\
		<td>\n\
\n\
	Device Driver. (NOT CURRENTLY SUPPORTED)\n\
	You can use siPluginAddonItemType (12) instead to package any .xsidevice and .dll/.so files in an .xsiaddon file. \n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShelfAddonItemType\"> </a>siShelfAddonItemType		</td>\n\
		<td class=\"example\">11		</td>\n\
		<td>\n\
\n\
	New format toolbar or shelf.  \n\
	Toolbars created starting with version 4.0 are .xsitb files found in the \\Application\\toolbars directory.  \n\
	All Presets and Custom Commands referenced by the toolbar will also be packaged in the add-on automatically.\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPluginAddonItemType\"> </a>siPluginAddonItemType		</td>\n\
		<td class=\"example\">12		</td>\n\
		<td>\n\
\n\
	A self-installed <a href=\"#!/url=./si_om/Plugin.html\">Plugin</a>.  \n\
	This is a single script file or dll which can contain one or more Commands, Custom Properties or other items. \n\
	You can specify this type of add-on item either by plug-in name or by its full path.\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHelpAddonItemType\"> </a>siHelpAddonItemType		</td>\n\
		<td class=\"example\">13		</td>\n\
		<td>\n\
\n\
	A Windows Help (.hlp) file. (NOT CURRENTLY SUPPORTED)\n\
	You can use siPluginAddonItemType (12) instead to package any .hlp files in an .xsiaddon file. \n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siViewAddonItemType\"> </a>siViewAddonItemType		</td>\n\
		<td class=\"example\">14		</td>\n\
		<td>\n\
\n\
	A custom relational view.\n\
		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_om/Addon.AddItem.html\">Addon.AddItem</a></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/XSIApplication.CreateAddon.html\">XSIApplication.CreateAddon</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";