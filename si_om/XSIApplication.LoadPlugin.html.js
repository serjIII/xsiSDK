var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSIApplication.LoadPlugin</title>\n\
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
            <h1>XSIApplication.LoadPlugin</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/XSIApplication.html\">XSIApplication</a>.LoadPlugin</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Loads a self-installable plug-in file. Files with the following extensions are considered \n\
valid: .dll,.so,.vbs, .pys,.ps,.js. This method returns a <a href=\"#!/url=./si_om/Plugin.html\">Plugin</a> object \n\
representing the newly loaded plug-in.<br /><br />\n\
If the plugin is already loaded, the existing plug-in is returned.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Plugin XSIApplication.LoadPlugin( String in_pluginName );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = XSIApplication.LoadPlugin( Path );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/Plugin.html\">Plugin</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Path		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The full file path of the plug-in to load.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">//--------------------------------------------------------------------\n\
//	This example shows how to define and load a plug-in in Softimage\n\
//\n\
// README: Copy and paste the example into the script editor \n\
// and run (F5).\n\
//--------------------------------------------------------------------\n\
function ExLoadPluginDemo(filename)\n\
{\n\
	// manually load the plugin\n\
	var oPlugin = Application.LoadPlugin( filename );\n\
	// Display the plug-in information\n\
	Application.LogMessage( \"Name: \" 		+ oPlugin.Name );\n\
	Application.LogMessage( \"Author: \"		+ oPlugin.Author );\n\
	Application.LogMessage( \"Major: \"		+ oPlugin.Major );\n\
	Application.LogMessage( \"Minor: \"		+ oPlugin.Minor );\n\
	Application.LogMessage( \"Language: \"	+ oPlugin.Language );\n\
	Application.LogMessage( \"Filename: \"	+ oPlugin.Filename );\n\
	Application.LogMessage( \"URL: \"			+ oPlugin.URL );\n\
	Application.LogMessage( \"Email: \"		+ oPlugin.Email );\n\
	Application.LogMessage( \"Help: \"		+ oPlugin.Help );\n\
	Application.LogMessage( \"HelpButton: \"	+ oPlugin.HelpButton );\n\
	Application.LogMessage( \"OriginPath: \"	+ oPlugin.OriginPath );\n\
	Application.LogMessage( \"Categories: \"	+ oPlugin.Categories.toArray().join(\",\") );\n\
	Application.LogMessage( \"Loaded: \"		+ oPlugin.Loaded );\n\
	// The above script logs the following results:\n\
	//INFO : Name: XSIApplication.LoadPlugin Example\n\
	//INFO : Author: Softimage Co.\n\
	//INFO : Major: 1\n\
	//INFO : Minor: 0\n\
	//INFO : Language: JScript\n\
	//INFO : Filename: [userpath]\\Addons\\XSISDKDocExamples\\Application\\Plugins\\ExXSIApplicationLoadPlugin.js\n\
	//INFO : URL: www.softimage.com\n\
	//INFO : Email: xsi@softimage.com\n\
	//INFO : Help: [factorypath]\\Addons\\XSISDKDocExamples\\Application\\Plugins\\doc\\ExXSIApplicationLoadPlugin.html\n\
	//INFO : OriginPath: [userpath]\\Addons\\XSISDKDocExamples\\Application\\Plugins\\\n\
	//INFO : Categories: Demo\n\
	//INFO : Loaded: True\n\
}\n\
function  XSILoadPlugin( in_reg )\n\
{\n\
	in_reg.Name = \"XSIApplication.LoadPlugin Example\";\n\
	in_reg.Author = \"Softimage Co.\"; \n\
	in_reg.Major = 1;\n\
	in_reg.Minor = 0;\n\
	in_reg.URL = \"www.softimage.com\"; \n\
	in_reg.Email = \"xsi@softimage.com\"; \n\
	in_reg.Categories = \"Demo\"; \n\
	// generate help files\n\
	GeneratePluginHelpFile(in_reg);\n\
	return true;\n\
} \n\
function GeneratePluginHelpFile( in_reg )\n\
{\n\
	var fso = XSIFactory.CreateActiveXObject(\"Scripting.FileSystemObject\");\n\
	var pluginfolder = fso.GetParentFolderName( in_reg.filename );\n\
	var helpfolder = fso.BuildPath( pluginfolder, \"Doc\" );\n\
	if ( ! fso.FolderExists(helpfolder ) )\n\
	{\n\
		fso.CreateFolder(helpfolder);	\n\
	}\n\
	var helpfilename = fso.GetBaseName(in_reg.filename);\n\
	var helpfile = fso.BuildPath( helpfolder, helpfilename + \".html\" );\n\
	var file = fso.CreateTextFile ( helpfile );\n\
	file .WriteLine( \"&lt;html&gt;\" );\n\
	file .WriteLine( \"&lt;head&gt;\" );\n\
	file .WriteLine( \"\\t&lt;title&gt;\" + in_reg.name + \"Help&lt;/title&gt;\" );\n\
	file .WriteLine( \"&lt;/head&gt;\");\n\
	file .WriteLine( \"&lt;body&gt;\");\n\
	file .WriteLine( \"\\t&lt;p&gt;description of \"+in_reg.name+\" plugin&lt;/p&gt;\" );\n\
	file .WriteLine( \"&lt;/body&gt;\" );\n\
	file .WriteLine( \"&lt;/html&gt;\" );\n\
	file.close();\n\
}\n\
//--------------------------------------------------------------------\n\
// Code to bootstrap example into system\n\
//--------------------------------------------------------------------\n\
function ExampleSourceCode()\n\
{\n\
	return \"// XSISDK Doc Example\\n\" +\n\
		GeneratePluginHelpFile.toString() + \"\\n\" +\n\
		XSILoadPlugin.toString();\n\
}\n\
// if we are running from script editor save code to \n\
// examples addon folder in the user\'s directory.\n\
if (GetUserPref(\"ScriptingSessionActive\"))\n\
{\n\
	var ex_name 		= \"ExXSIApplicationLoadPlugin\";\n\
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
	}\n\
	ExLoadPluginDemo( filename );\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/XSIApplication.UnloadPlugin.html\">XSIApplication.UnloadPlugin</a> <a href=\"#!/url=./si_om/XSIApplication.Plugins.html\">XSIApplication.Plugins</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";