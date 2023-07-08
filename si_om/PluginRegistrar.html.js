var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PluginRegistrar</title>\n\
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
            <h1>PluginRegistrar</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">PluginRegistrar</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_PluginRegistrar\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1PluginRegistrar.html\">PluginRegistrar</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\">PluginRegistrar</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> The PluginRegistrar object is used by plug-in modules for registering plug-in items \n\
in Softimage along with other general information. The object is created by Softimage \n\
and contains information such as the directory where the plug-in is being loaded/unloaded \n\
and the filename of the plug-in. <br /><br />\n\
When Softimage starts up, a PluginRegistrar object is created for each plug-in to \n\
load and passed to the XSILoadPlugin function entry point exposed by the \n\
plug-in. The information gathered by Softimage is used for creating the plug-in \n\
items when required by the user. <br /><br />\n\
When a plug-in is unloaded, a PluginRegistrar object is created for this particular plug-in \n\
and passed to the <a href=\"#!/url=./si_cmds/cb_XSIUnloadPlugin.html\">XSIUnloadPlugin</a> function entry \n\
point exposed by the plug-in (see \n\
<a href=\"#!/url=./files/cus_self_CallbacksforSelfInstallingPlugins.htm\">Callbacks for Self-Installing Plug-ins</a>). \n\
The information registered by the plug-in can be accessed through the <a href=\"#!/url=./si_om/Plugin.html\">Plugin</a> object.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PluginRegistrar.RegisterCommand.html\">RegisterCommand</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PluginRegistrar.RegisterConverterEvent.html\">RegisterConverterEvent</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PluginRegistrar.RegisterEvent.html\">RegisterEvent</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PluginRegistrar.RegisterFilter.html\">RegisterFilter</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PluginRegistrar.RegisterMenu.html\">RegisterMenu</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PluginRegistrar.RegisterOperator.html\">RegisterOperator</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PluginRegistrar.RegisterProperty.html\">RegisterProperty</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PluginRegistrar.RegisterShader.html\">RegisterShader</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PluginRegistrar.RegisterShaderLanguageParser.html\">RegisterShaderLanguageParser</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PluginRegistrar.RegisterTimerEvent.html\">RegisterTimerEvent</a>		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Properties</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PluginRegistrar.Author.html\">Author</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PluginRegistrar.Email.html\">Email</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PluginRegistrar.Filename.html\">Filename</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PluginRegistrar.HelpButton.html\">HelpButton</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PluginRegistrar.Language.html\">Language</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PluginRegistrar.Major.html\">Major</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PluginRegistrar.Minor.html\">Minor</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PluginRegistrar.URL.html\">URL</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PluginRegistrar.UserData.html\">UserData</a>		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*--------------------------------------------------------------------------\n\
	This example demonstrates the how to the use PluginRegistrar object\n\
	README: Copy and paste the example into the script editor and run (F5).\n\
	The filter will now be listed in the Scene Explorer filter list when \n\
	the \"Source/Clips\" view context is selected.\n\
--------------------------------------------------------------------------*/\n\
// This function is required to register a plug-in in Softimage\n\
function  XSILoadPlugin( in_reg )\n\
{\n\
	Application.LogMessage( \"PluginRegistrar XSILoadPlugin called\" );\n\
	// register plug-in information with the PluginRegistrar object\n\
	in_reg.Author = \"Softimage Co.\" ;\n\
	in_reg.Name = \"PluginRegistrar Example\";\n\
	in_reg.Help = MakeHTMLPage();\n\
	in_reg.URL = \"www.softimage.com\";\n\
	in_reg.Email = \"webmaster@softimage.com\";\n\
	//  the version number of this plug-in\n\
	in_reg.Major = 1;\n\
	in_reg.Minor = 0 ;\n\
	Application.LogMessage( \"This plug-in language: \" + in_reg.Language );\n\
	// register the cone filter plug-in item \n\
	in_reg.RegisterFilter( \"ConePrimitive\", siFilterObject );\n\
	return true;\n\
}\n\
// This non-mandatory function is called when the plug-in is unloaded \n\
function  XSIUnloadPlugin( in_reg )\n\
{\n\
	Application.LogMessage( \"PluginRegistrar XSIUnloadPlugin called\" );\n\
	Application.LogMessage( \"Name: \" + in_reg.Name );\n\
	Application.LogMessage( \"Author: \" + in_reg.Author);\n\
	Application.LogMessage( \"Major: \" + in_reg.Major);\n\
	Application.LogMessage( \"Minor: \" + in_reg.Minor);\n\
	Application.LogMessage( \"Language: \" + in_reg.Language);\n\
	Application.LogMessage( \"URL: \" + in_reg.URL);\n\
	Application.LogMessage( \"Email: \" + in_reg.Email);\n\
	Application.LogMessage( \"Help: \" + in_reg.Help);\n\
	return(true);\n\
}\n\
function  ConePrimitive_Match( in_context )\n\
{\n\
	var obj = in_context.GetAttribute(\"Input\");\n\
	return obj.IsKindOf( siConePrimType );\n\
}\n\
function  MakeHTMLPage()\n\
{\n\
	// Build the filename + path\n\
	var sHelpFileName = XSIUtils.BuildPath( InstallationPath( siUserPath ), \"Data\", \"HelpMe.html\" );\n\
	// Create a standard hello world script file\n\
	fso = XSIFactory.CreateActiveXObject( \"Scripting.FileSystemObject\" );\n\
	var fHWFile = fso.CreateTextFile( sHelpFileName );\n\
	fHWFile.WriteLine( \"&lt;html&gt;\" );\n\
	fHWFile.WriteLine( \"&lt;head&gt;\" );\n\
	fHWFile.WriteLine( \"\\t\" + \"&lt;title&gt;Help Page for Testing PluginRegistrar&lt;/title&gt;\" );\n\
	fHWFile.WriteLine( \"&lt;/head&gt;\");\n\
	fHWFile.WriteLine( \"&lt;body&gt;\");\n\
	fHWFile.WriteLine( \"\\t\" + \"&lt;p&gt;Help! I//m trapped inside this HTML code!&lt;/p&gt;\" );\n\
	fHWFile.WriteLine( \"&lt;/body&gt;\" );\n\
	fHWFile.WriteLine( \"&lt;/html&gt;\" );\n\
	fHWFile.Close();\n\
	// Return the name of the new command\n\
	return sHelpFileName;\n\
}\n\
//--------------------------------------------------------------------\n\
// Code to bootstrap example into system\n\
//--------------------------------------------------------------------\n\
function ExampleSourceCode()\n\
{\n\
	return \"//XSISDK Doc Example\\n\" +\n\
		ConePrimitive_Match.toString() + \"\\n\" + \n\
		MakeHTMLPage.toString() + \"\\n\" + \n\
		XSIUnloadPlugin.toString() + \"\\n\" + \n\
		XSILoadPlugin.toString();\n\
}\n\
// if we are running from script editor save code to \n\
// examples addon folder in the user\'s directory.\n\
if (GetUserPref(\"ScriptingSessionActive\"))\n\
{\n\
	var ex_name 		= \"ExPluginRegistrar\";\n\
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
<div><p><a href=\"#!/url=./si_om/XSIApplication.Plugins.html\">XSIApplication.Plugins</a> <a href=\"#!/url=./files/cus_self_CallbacksforSelfInstallingPlugins.htm\">Callbacks for Self-Installing Plug-ins</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";