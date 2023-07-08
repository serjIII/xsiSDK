var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSIApplication.CreateAddon</title>\n\
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
            <h1>XSIApplication.CreateAddon</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/XSIApplication.html\">XSIApplication</a>.CreateAddon</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Creates a new add-on package object to be used to package plug-ins. For example,\n\
you can package SPDL files, presets, layouts, toolbars, custom commands, devices, \n\
library files, etc. <br /><br />\n\
For more information on the kinds of items that can be part of and add-on package, \n\
see <a href=\"#!/url=./si_om/siAddonItemType.html\">siAddonItemType</a>.\n\
<br /><br />\n\
Note: In many cases it can be easier to create an add-on by calling \n\
<a href=\"#!/url=./si_cmds/PackageAddon.html\">PackageAddon</a>.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Addon XSIApplication.CreateAddon();</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = XSIApplication.CreateAddon();</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/Addon.html\">Addon</a></p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
# This example demonstrates how to install an add-on package.\n\
#\n\
import os							# for directory handling\n\
from win32com.client import constants as c\n\
# **********************************\n\
# This function just provide the means to remove the details of \n\
# creating the HTML page. \n\
def makeHTMLPage() :\n\
	# Build the filename &amp; path\n\
	sUserPath = Application.InstallationPath( c.siUserPath )\n\
	sHelpFileName = XSIUtils.BuildPath( sUserPath, \"Data\", \"HelpMe.html\" )\n\
	# Create a standard hello world script file\n\
	fHWFile = open( sHelpFileName, \"w\" )\n\
	fHWFile.write( \"&lt;html&gt;\\n\" )\n\
	fHWFile.write( \"&lt;head&gt;\\n\" )\n\
	fHWFile.write( \"\\t&lt;title&gt;Help Page for Testing Add-ons&lt;/title&gt;\\n\" )\n\
	fHWFile.write( \"&lt;/head&gt;\" )\n\
	fHWFile.write( \"&lt;body&gt;\\n\" )\n\
	fHWFile.write( \"\\n&lt;p&gt;Help! I\'m trapped inside this HTML code!&lt;/p&gt;\\n\" )\n\
	fHWFile.write( \"&lt;/body&gt;\\n\" )\n\
	fHWFile.write( \"&lt;/html&gt;\" )\n\
	fHWFile.close()\n\
	# Return the name of the new html page\n\
	return sHelpFileName\n\
# **********************************\n\
# Get the first available workgroup as the add-on destination \n\
sPath = Application.InstallationPath( c.siWorkgroupPath )\n\
if not sPath :\n\
	# If the workgroup doesn\'t already exist, then add it\n\
	tmppath = XSIUtils.BuildPath( Application.InstallationPath(c.siUserPath), \"TempWorkgrp\" )\n\
	if ( not os.access(tmppath, os.F_OK) ) :\n\
		os.mkdir( tmppath )\n\
	Application.AddWorkgroup( tmppath )\n\
	sPath = Application.InstallationPath( c.siWorkgroupPath )\n\
sHTMLName = makeHTMLPage()\n\
# Create the add-on package object\n\
oAddOn = Application.CreateAddon()\n\
# Add the HTML page to the add-on package\n\
oAddOn.AddOtherItem( sHTMLName )\n\
# Save the package in the Addons directory\n\
sPath = XSIUtils.BuildPath( sPath, \"Addons\" )\n\
XSIUtils.EnsureFolderExists( sPath )\n\
sAddOnFileName = XSIUtils.BuildPath( sPath, \"myHelpPkg.xsiaddon\" )\n\
oAddOn.Save( sAddOnFileName )\n\
Application.LogMessage( \"Created add-on file: \" + sAddOnFileName )\n\
# Install the add-on package containing the HTML page\n\
Application.InstallAddOn( sAddOnFileName, c.siWorkgroupAddonPath )\n\
# Comment out the following line if you want to see the add-on file \n\
# (you will have to uninstall the add-on manually):\n\
Application.UnInstallAddon( sAddOnFileName )\n\
#INFO : &amp;lt;YourWorkgrpPath&amp;gt;\\Addons\\myHelpPkg.xsiaddon</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";