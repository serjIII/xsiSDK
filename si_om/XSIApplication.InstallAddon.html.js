var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSIApplication.InstallAddon</title>\n\
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
            <h1>XSIApplication.InstallAddon</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/XSIApplication.html\">XSIApplication</a>.InstallAddon</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Installs an .xsiaddon file in Softimage. An add-on file is a set of customized items (like layout, toolbar, \n\
preset, etc.) that are packaged in a single file. You can package, install and uninstall an add-on \n\
through the Softimage object model.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>XSIApplication.InstallAddon( String in_bszFileName, siInstallationPath in_eInstallDir, Boolean in_bBatch );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>XSIApplication.InstallAddon( FileName, [InstallDir], [NoUI] );</pre>		</td>	</tr>\n\
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
File path of the add-on file to install.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">InstallDir		</td>\n\
		<td><a href=\"#!/url=./si_om/siInstallationPath.html\">siInstallationPath</a>		</td>\n\
		<td>\n\
\n\
		Destination directory, where the add-on is installed. <br /><br /> \n\
		siUserAddonPath and siWorkgroupAddonPath are the recommended values. If \n\
		siUnknownPath is specified then the add-on will be installed at the default \n\
		location specified inside the add-on file.<br /><br />\n\
		Note: In the case of multiple workgroups, this method always installs\n\
		to the first workgroup in the list. \n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siUnknownPath			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">NoUI		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
\n\
		Use this optional parameter to avoid displaying the warning message boxes that\n\
		are shown during the installation of certain addons.  This is automatically set \n\
		when running Softimage in batch mode.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
false			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">//\n\
// This example demonstrates how to install an add-on package.\n\
//\n\
// Get the first available workgroup as the add-on destination \n\
var sPath = Application.InstallationPath( siWorkgroupPath );\n\
if ( !sPath ) {\n\
	// If the workgroup doesn\'t already exist, then add it\n\
	var tmppath = XSIUtils.BuildPath( Application.InstallationPath(siUserPath), \"TempWorkgrp\" );\n\
	var fso = new ActiveXObject( \"Scripting.FileSystemObject\" );\n\
	if ( !fso.FolderExists(tmppath) ) { fso.CreateFolder(tmppath); }\n\
	Application.AddWorkgroup( tmppath );\n\
	sPath = Application.InstallationPath( siWorkgroupPath );\n\
}\n\
var sHTMLName = makeHTMLPage();\n\
// Create the add-on package object\n\
var oAddOn = Application.CreateAddon();\n\
// Add the HTML page to the add-on package\n\
oAddOn.AddOtherItem( sHTMLName );\n\
// Save the package in the Addons directory\n\
sPath = XSIUtils.BuildPath( sPath, \"Addons\" );\n\
XSIUtils.EnsureFolderExists( sPath );\n\
var sAddOnFileName = XSIUtils.BuildPath( sPath, \"myHelpPkg.xsiaddon\" );\n\
oAddOn.Save( sAddOnFileName );\n\
Application.LogMessage( \"Created add-on file: \" + sAddOnFileName );\n\
// Install the add-on package containing the HTML page\n\
Application.InstallAddOn( sAddOnFileName, siWorkgroupAddonPath );\n\
// Comment out the following line if you want to see the add-on file \n\
// (you will have to uninstall the add-on manually):\n\
Application.UnInstallAddon( sAddOnFileName );\n\
// **********************************\n\
// This function just provide the means to remove the details of \n\
// creating the HTML page. \n\
function makeHTMLPage()\n\
{\n\
	// Build the filename &amp; path\n\
	var sUserPath = Application.InstallationPath( siUserPath );\n\
	var sHelpFileName = XSIUtils.BuildPath( sUserPath, \"Data\", \"HelpMe.html\" );\n\
	// Create a standard hello world script file\n\
	var fso = new ActiveXObject( \"Scripting.FileSystemObject\" );\n\
	var fHWFile = fso.CreateTextFile( sHelpFileName );\n\
	fHWFile.WriteLine( \"&lt;html&gt;\" );\n\
	fHWFile.WriteLine( \"&lt;head&gt;\" );\n\
	fHWFile.WriteLine( \"\\t&lt;title&gt;Help Page for Testing Add-ons&lt;/title&gt;\" );\n\
	fHWFile.WriteLine( \"&lt;/head&gt;\" );\n\
	fHWFile.WriteLine( \"&lt;body&gt;\" );\n\
	fHWFile.WriteLine( \"\\n&lt;p&gt;Help! I\'m trapped inside this HTML code!&lt;/p&gt;\" );\n\
	fHWFile.WriteLine( \"&lt;/body&gt;\" );\n\
	fHWFile.WriteLine( \"&lt;/html&gt;\" );\n\
	fHWFile.Close();\n\
	// Return the name of the new html page\n\
	return sHelpFileName;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/XSIApplication.UnInstallAddon.html\">XSIApplication.UnInstallAddon</a> <a href=\"#!/url=./si_om/XSIApplication.CreateAddon.html\">XSIApplication.CreateAddon</a> <a href=\"#!/url=./si_cmds/PackageAddon.html\">PackageAddon</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";