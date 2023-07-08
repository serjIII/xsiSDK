var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PluginRegistrar.RegisterEvent</title>\n\
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
            <h1>PluginRegistrar.RegisterEvent</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/PluginRegistrar.html\">PluginRegistrar</a>.RegisterEvent</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Registers an event as a <a href=\"#!/url=./si_om/PluginItem.html\">PluginItem</a> object. The plug-in item is used \n\
to create an <a href=\"#!/url=./si_om/EventInfo.html\">EventInfo</a> object by binding a user-defined function to \n\
an action associated with the registered event. \n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>PluginItem PluginRegistrar.RegisterEvent( String in_eventName, siEventID in_eventID );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = PluginRegistrar.RegisterEvent( Name, Type );</pre>		</td>	</tr>\n\
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
		The name of the custom event to register. It should begin with a letter and contain \n\
		only letters, numbers and the underscore character.\n\
		<br /><br />\n\
		The event name is used to name the \n\
		<a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html\">OnEvent</a> callback function.\n\
		For example, the OnEvent callback for an event named \"MySelectionChange\" is \"MySelectionChange_OnEvent\".\n\
		If an event name contains spaces (for example, \"My Selection Change\"), the OnEvent callback function name \n\
		must omit the spaces (for example, \"MySelectionChange_OnEvent\").\n\
		<br /><br />\n\
		This name is also the name of the event in the <a href=\"#!/url=./si_om/EventInfoCollection.html\">EventInfoCollection</a> returned by \n\
		<a href=\"#!/url=./si_om/XSIApplication.EventInfos.html\">XSIApplication.EventInfos</a>. \n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Type		</td>\n\
		<td><a href=\"#!/url=./si_om/siEventID.html\">siEventID</a>		</td>\n\
		<td>\n\
\n\
		Type of event to register.\n\
		<br /><br />\n\
		Note: The following identifiers are not supported: <a href=\"#!/url=./si_om/siEventID.html#siOnWindowEvent\">siOnWindowEvent</a>, <a href=\"#!/url=./si_om/siEventID.html#siOnTimer\">siOnTimer</a>,\n\
<a href=\"#!/url=./si_om/siEventID.html#siOnCustomFileImport\">siOnCustomFileImport</a>,<a href=\"#!/url=./si_om/siEventID.html#siOnCustomFileExport\">siOnCustomFileExport</a>.\n\
		Rather than this method, use <a href=\"#!/url=./si_om/PluginRegistrar.RegisterTimerEvent.html\">PluginRegistrar.RegisterTimerEvent</a> for the siOnTimer event type and\n\
		<a href=\"#!/url=./si_om/PluginRegistrar.RegisterConverterEvent.html\">PluginRegistrar.RegisterConverterEvent</a> for the siOnCustomFileImport and siOnCustomFileExport \n\
		event types.\n\
			</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*-------------------------------------------------------------------\n\
	The example shows how to register and implement an event plug-in.\n\
	README: Copy and paste the example into the script editor \n\
	and run (F5).\n\
	The events will now be listed in the plugin manager\'s pluginitem\n\
	tab and under the plugin node in the plugin browser tab.\n\
	The events will fire whenever there the user creates a newscene,\n\
	either from the menu File-&gt;New Scene or from scripting using\n\
	the NewScene() command.\n\
-------------------------------------------------------------------*/\n\
function  XSILoadPlugin( in_reg )\n\
{\n\
	in_reg.Author = \"Softimage Co.\" \n\
	in_reg.Name = \"PluginRegistrar.RegisterEvent Example\" \n\
	// register the event plug-in item \n\
	in_reg.RegisterEvent( \"ExRegisterEvent_BeginNewScene\", siOnBeginNewScene );\n\
	in_reg.RegisterEvent( \"ExRegisterEvent_EndNewScene\", siOnEndNewScene );\n\
	// register a command to illustrate events firing.\n\
	in_reg.RegisterCommand( \"ExRegisterEventDemo\", \"ExRegisterEventDemo\" );\n\
	return true;\n\
} \n\
function  ExRegisterEvent_BeginNewScene_OnEvent( in_context )\n\
{\n\
	Application.LogMessage( \"ExRegisterEvent_BeginNewScene_OnEvent called\" );\n\
}\n\
function  ExRegisterEvent_EndNewScene_OnEvent( in_context )\n\
{\n\
	Application.LogMessage( \"ExRegisterEvent_EndNewScene_OnEvent called\");\n\
}\n\
function  ExRegisterEventDemo_Execute()\n\
{\n\
	NewScene();\n\
}\n\
//--------------------------------------------------------------------\n\
// Code to bootstrap example into system\n\
//--------------------------------------------------------------------\n\
function ExampleSourceCode()\n\
{\n\
	return \"//XSISDK Doc Example\\n\" +\n\
		ExRegisterEvent_BeginNewScene_OnEvent.toString() + \"\\n\" + \n\
		ExRegisterEvent_EndNewScene_OnEvent.toString() + \"\\n\" + \n\
		ExRegisterEventDemo_Execute.toString() + \"\\n\" + \n\
		XSILoadPlugin.toString();\n\
}\n\
// if we are running from script editor save code to \n\
// examples addon folder in the user\'s directory.\n\
if (GetUserPref(\"ScriptingSessionActive\"))\n\
{\n\
	var ex_name 		= \"ExPluginRegistrarRegisterEvent\";\n\
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
	ExRegisterEventDemo();\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Plugin.Items.html\">Plugin.Items</a> <a href=\"#!/url=./si_cmds/callbacks.html\">Definition Callbacks for Events</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";