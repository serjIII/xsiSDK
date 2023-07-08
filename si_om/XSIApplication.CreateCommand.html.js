var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSIApplication.CreateCommand</title>\n\
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
            <h1>XSIApplication.CreateCommand</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/XSIApplication.html\">XSIApplication</a>.CreateCommand</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Defines a new custom command in Softimage. A new <a href=\"#!/url=./si_om/Command.html\">Command</a> object is returned and \n\
can be used to define the command.  This definition includes the location of the implementation \n\
(<a href=\"#!/url=./si_om/Command.FileName.html\">Command.FileName</a>), and the arguments that command takes \n\
(<a href=\"#!/url=./si_om/ArgumentCollection.Add.html\">ArgumentCollection.Add</a>). After the definition of the command has been completed \n\
the <a href=\"#!/url=./si_om/XSIApplication.AddCommand.html\">XSIApplication.AddCommand</a> method must be called to actually register the command in Softimage.<br /><br />\n\
Note: The recommended way to create custom commands is to define them as part of a self-installed plug-in. \n\
See <a href=\"#!/url=./si_om/PluginRegistrar.RegisterCommand.html\">PluginRegistrar.RegisterCommand</a>.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Command XSIApplication.CreateCommand( String in_name, siCommandCategory in_category );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = XSIApplication.CreateCommand( Name, [Category] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/Command.html\">Command</a></p></div>\n\
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
		The unique name identifying the new command. <br /><br />\n\
		Note: The command is not created if one with this name already exists.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Category		</td>\n\
		<td><a href=\"#!/url=./si_om/siCommandCategory.html\">siCommandCategory</a>		</td>\n\
		<td>\n\
\n\
		Where (on which Softimage standard menu) the command will appear in the user \n\
		interface. For more information, see the <a href=\"#!/url=./si_om/siCommandCategory.html\">siCommandCategory</a> \n\
		enum documentation.\n\
			</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">//-------------------------------------------------------------------\n\
// This example defines &amp; runs a custom command examples\n\
//\n\
//\n\
// README: Copy and paste the example into the script editor \n\
// and run (F5).\n\
//\n\
// The command will be listed in the customize toolbar dialog in\n\
// the \'Custom Commands\' group.\n\
//-------------------------------------------------------------------\n\
function ExCreateCommandDemo()\n\
{\n\
	Application.RemoveCommand(\"XYZ\");\n\
	var cmd = Application.CreateCommand(\"XYZ\");\n\
	cmd.Description = \"XYZ custom command.\";\n\
	cmd.ScriptingName = \"XYZ\";\n\
	cmd.Handler = \"OnXYZCommand\";\n\
	cmd.FileName = filename;\n\
	cmd.Language = \"JScript\";\n\
	cmd.Arguments.Add( \"argument0\" );\n\
	Application.AddCommand( cmd );\n\
	// call command\n\
	XYZ( \"this is a string argument\" );\n\
}\n\
// This sample defines the XYZ command\'s function handler\"\n\
function OnXYZCommand( in_arg )\n\
{\n\
	LogMessage( \"Executing XYZ command with the argument: \" + in_arg );\n\
}\n\
//--------------------------------------------------------------------\n\
// Code to bootstrap example into system\n\
//--------------------------------------------------------------------\n\
function ExampleSourceCode()\n\
{\n\
	return \"//XSISDK Doc Example\\n\" +\n\
		OnXYZCommand.toString();\n\
}\n\
// if we are running from script editor save code to \n\
// examples addon folder in the user\'s directory.\n\
if (GetUserPref(\"ScriptingSessionActive\"))\n\
{\n\
	var ex_name 		= \"ExXSIApplicationCreateCommand\";\n\
	var ex_subfolder 	= \"Scripts\";\n\
	var ex_folder 		= \"XSISDKDocExamples\";\n\
	var ex_langsuffix	= \".js\";\n\
	CreateAddonDirectories( InstallationPath(siUserPath), ex_folder );\n\
	var fso = XSIFactory.CreateActiveXObject(\"Scripting.FileSystemObject\");\n\
	var filename = XSIUtils.BuildPath( \n\
		InstallationPath(siUserAddonPath), \n\
		ex_folder,\n\
		\"Data\",\n\
		ex_subfolder,\n\
		ex_name+ex_langsuffix );\n\
	if (!fso.FileExists(filename))\n\
	{\n\
		var f = fso.CreateTextFile ( filename );\n\
		f.write( ExampleSourceCode() );\n\
		f.close();\n\
	}\n\
	// run demo\n\
	ExCreateCommandDemo();\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/XSIApplication.AddCommand.html\">XSIApplication.AddCommand</a> <a href=\"#!/url=./si_om/Command.html\">Command</a> <a href=\"#!/url=./si_om/ArgumentCollection.html\">ArgumentCollection</a> <a href=\"#!/url=./si_om/Argument.html\">Argument</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";