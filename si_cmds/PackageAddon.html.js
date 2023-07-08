var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PackageAddon</title>\n\
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
            <h1>PackageAddon</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">PackageAddon</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Provides a convenient way to package or repackage an .xsiaddon file based on the files you have on disk.<br /><br />\n\
Warning: The files you want to put in the .xsiaddon file must be stored in the correct directory structure.  \n\
All files and subdirectories must be in a subdirectory of the Addons directory of the User or Workgroup path. \n\
For example, the files for an add-on named \"MyParticleTool\" must be in the \"Addons/MyParticleTool\" subdirectory.\n\
In this subdirectory, the add-on files must be in the standard locations for the different file types. For \n\
example, all toolbars must be in \".../Addons/MyParticleTool/Application/toolbars\" and all self-installed plug-ins \n\
in \".../Addons/MyParticleTool/Application/Plugins\".<br /><br />\n\
Any .xsiaddon file that correctly specifies a subdirectory (see <a href=\"#!/url=./si_om/Addon.SubDirectory.html\">Addon.SubDirectory</a>) automatically\n\
follows this organization when it is installed.<br /><br />\n\
You can also use the Tree tab of the Plug-in Manager view to create and populate a properly-structured add-on.<br /><br />\n\
If the files that you want to package into an .xsiaddon are not located in an Addons subdirectory, you can either \n\
use the \"Package Addon\" dialog to select the files individually, or you can move files manually (using Windows \n\
Explorer or a command shell) into the correct directory structure before you run this command.<br /><br />\n\
The .xsiaddon file supports additional information, such as the author name, which is displayed when a user clicks \n\
Advanced in Install Add-On dialog box. This additional information is saved in the optional netview_ADDONNAME.xml \n\
file (where ADDONNAME is the name of the <a href=\"#!/url=./si_om/Addon.SubDirectory.html\">Addon.SubDirectory</a>).\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oString = PackageAddon( SrcDir, [DestinationPath], [Overwrite], [ExcludeDirs] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>\n\
An empty <a href=\"#!/url=./files/String.htm\">String</a> if successful, and an error message otherwise.\n\
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
		<td class=\"name\">SrcDir		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The full path of an add-on subdirectory. For example, \"\\\\myserver\\myworkgroup\\Addons\\MyParticleTool\".		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">DestinationPath		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		Full path of the .xsiaddon file to create. \n\
		For example, \"c:\\mytools\\MyParticleTool.xsiaddon\".\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\n\
		An .xsiaddon file named after the addon subdirectory is created in the \"Addons\" directory. \n\
		For example, \"\\\\myserver\\myworkgroup\\Addons\\MyParticleTool.xsiaddon\".\n\
				</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Overwrite		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
Specifies whether to automatically overwrite any existing file with the same name as the DestinationPath argument.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
true			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ExcludeDirs		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		A semicolon-separated list of directories to exclude.  For example, \"Debug;Ship\" excludes the \n\
		content of directories named Debug or Ship from the .xsiaddon file.  This is not a relative \n\
		path, so it excludes both \"...Addons/MyAddon/Debug\" and \"...Addons/MyAddon/Application/Debug\". \n\
		Any subdirectory in an excluded directory is also excluded. When you package C++ plug-ins, this \n\
		argument allows you to avoid including source code or temporary .obj files in the output file.\n\
			</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/CreateAddonDirectories.html\">CreateAddonDirectories</a> <a href=\"#!/url=./si_cmds/InstallAddon.html\">InstallAddon</a> <a href=\"#!/url=./si_om/XSIApplication.CreateAddon.html\">XSIApplication.CreateAddon</a> <a href=\"#!/url=./si_om/Addon.html\">Addon</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";