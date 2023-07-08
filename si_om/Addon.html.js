var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Addon</title>\n\
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
            <h1>Addon</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Addon</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_Addon\">Object Hierarchy</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\">Addon</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v3.5</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> The Addon object lets you package, install, and uninstall add-ons through scripting. \n\
An add-on is a collection of plug-in items such as toolbars, custom commands, and layouts  \n\
that can be easily packaged and deployed to other computers.\n\
<br /><br />\n\
Note: The Addon object gives you precise control over the contents of an .xsiaddon file, but\n\
requires that you add each file individually. The <a href=\"#!/url=./si_cmds/PackageAddon.html\">PackageAddon</a> command\n\
provides a easier way to build .xsiaddon files.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Addon.AddItem.html\">AddItem</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Addon.AddOtherItem.html\">AddOtherItem</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Addon.Save.html\">Save</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Addon.SetAddonDetail.html\">SetAddonDetail</a>		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Addon.DefaultInstallationPath.html\">DefaultInstallationPath</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Addon.SubDirectory.html\">SubDirectory</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*	--------------------------------------------------------------\n\
		This example creates and registers a custom\n\
		command and then shows how you can package it \n\
		as an add-on through scripting.\n\
	----------------------------------------------------------------- */\n\
/*\n\
	PART ONE: SET UP THE COMMAND\n\
*/\n\
// Start off with a clean slate\n\
NewScene( null, false );\n\
Application.RemoveCommand( \"Howdy\" );\n\
// Get the factory (installation) path and use it to build the filename and path\n\
var sPath = InstallationPath( siUserPath );\n\
var sCmdFileName = XSIUtils.BuildPath( sPath, \"Data\", \"Scripts\", \"HelloWorld.js\" );\n\
// Create a \"hello world\" script file\n\
var fso = new ActiveXObject( \"Scripting.FileSystemObject\" );\n\
var fHWFile = fso.CreateTextFile( sCmdFileName  );\n\
fHWFile.WriteLine( \"function SayHi()\" );\n\
fHWFile.WriteLine( \"{\" );\n\
fHWFile.WriteLine( \"\\tApplication.LogMessage( \\\"Hello, World!\\\" );\" );\n\
fHWFile.WriteLine( \"}\" );\n\
fHWFile.Close();\n\
// Add it to the command map in Softimage\n\
var oCmd = Application.CreateCommand( \"Howdy\", siExportCategory );\n\
oCmd.Description = \"Display the traditional greeting\";\n\
oCmd.ScriptingName = \"Howdy\";\n\
oCmd.Handler = \"SayHi\";\n\
oCmd.FileName = sCmdFileName;\n\
oCmd.Language = \"JScript\";\n\
Application.AddCommand( oCmd );\n\
// Run it make sure it works\n\
oCmd.Execute();\n\
/*\n\
	PART TWO: PACKAGE IT AS AN ADD-ON\n\
*/\n\
// Set up the add-on package object\n\
var oAddOn = Application.CreateAddon();\n\
// Add the new command to the add-on package\n\
oAddOn.AddItem( siScriptCmdAddonItemType, oCmd );\n\
// Set the default installation path and subdirectory for installation\n\
oAddOn.DefaultInstallationPath = siUserAddonPath;\n\
oAddOn.SubDirectory = \"HiyaProject\";\n\
// Save the .xsiaddon file to disk\n\
var sAddOnFileName = XSIUtils.BuildPath( sPath, \"myAddOn.xsiaddon\" );\n\
oAddOn.Save( sAddOnFileName );\n\
// Remove the custom command we created and then install the add-on\n\
Application.RemoveCommand(\"Howdy\");\n\
fso.DeleteFile( sCmdFileName, true );\n\
oCmd = null;\n\
oAddOn = null;\n\
Application.InstallAddon( sAddOnFileName, siUserAddonPath );\n\
// Run the command to make sure it still works after we removed it and\n\
// then reinstalled it from our new add-on package\n\
Commands( \"Howdy\" ).Execute();\n\
// Clean up and remove the add-on package\n\
sInstalledAddOnFileName = XSIUtils.BuildPath( InstallationPath( siUserAddonPath ), \"InstalledAddons\", \"myAddOn.xsiaddon\" );\n\
Application.UninstallAddon( sInstalledAddOnFileName );\n\
// --------------------------------------------------------------\n\
// Output of the above script is:\n\
//\n\
//INFO : \"Hello, World!\"\n\
//Howdy(null);\n\
//INFO : \"Hello, World!\"\n\
//Howdy(null);</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/XSIApplication.CreateAddon.html\">XSIApplication.CreateAddon</a> <a href=\"#!/url=./si_om/XSIApplication.InstallAddon.html\">XSIApplication.InstallAddon</a> <a href=\"#!/url=./si_om/XSIApplication.UnInstallAddon.html\">XSIApplication.UnInstallAddon</a> <a href=\"#!/url=./si_cmds/PackageAddon.html\">PackageAddon</a> <a href=\"#!/url=./si_cmds/CreateAddonDirectories.html\">CreateAddonDirectories</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";