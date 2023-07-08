var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSIUtils.GetLocationType</title>\n\
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
            <h1>XSIUtils.GetLocationType</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/XSIUtils.html\">XSIUtils</a>.GetLocationType</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns the value from the <a href=\"#!/url=./si_om/siInstallationPath.html\">siInstallationPath</a> enum that best describes \n\
where the specified file (complete path) is located. It is not necessary for the path to \n\
point to an existing file.<br /><br />\n\
A possible use of this method is to determine if a file is stored locally in the user\'s \n\
settings, or comes from a workgroup location.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Int32 XSIUtils.GetLocationType( String in_pathtotest );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = XSIUtils.GetLocationType( path );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/siInstallationPath.html\">siInstallationPath</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">path		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Complete path to a file or directory.  The location does not need to exist.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to use the GetLocationType to see find out whether the\n\
	file originated in the project path.\n\
*/\n\
var userpath = Application.InstallationPath( siUserPath ) ;\n\
userpath = ConvertInstallationPathToString( XSIUtils.GetLocationType(userpath) );\n\
Application.LogMessage( userpath ) ;\n\
// Any file, directory below the user path (even if it doesn\'t exist yet) will\n\
// be identified as being part of the user path\n\
userpath += \"/Application/Plugins/foo.vbs\" ;\n\
// Adjust slashes in case we are running on Windows\n\
userpath = XSIUtils.ResolvePath( userpath ) ;\n\
userpath = ConvertInstallationPathToString( XSIUtils.GetLocationType(userpath) );\n\
Application.LogMessage( userpath ) ;\n\
// Demonstrate how you could easily test if a scene file is part of the\n\
// current project\n\
var projpath = Application.InstallationPath( siProjectPath ) ;\n\
projpath += \"/Scenes/somescene.scn\" ;\n\
projpath = XSIUtils.ResolvePath( projpath ) ;\n\
if ( XSIUtils.GetLocationType(projpath) == siProjectPath ) {\n\
	Application.LogMessage( \"This scene is part of the current project\" ) ;\n\
}\n\
// Expected results:\n\
//INFO : siUserPath\n\
//INFO : siProjectPath\n\
//INFO : This scene is part of the current project\n\
// Convenience function\n\
function ConvertInstallationPathToString( in_location )\n\
{\n\
	switch ( in_location ) {\n\
		case siProjectPath :\n\
			return \"siProjectPath\" ;\n\
		case siUserPath :\n\
			return \"siUserPath\" ;	\n\
		case siWorkgroupPath :\n\
			return \"siWorkgroupPath\" ;	\n\
		case siFactoryPath :\n\
			return \"siFactoryPath\" ;	\n\
		case siAddonPath :\n\
			return \"siAddonPath\" ;	\n\
		case siUserAddonPath :\n\
			return \"siUserAddonPath\" ;	\n\
		case siWorkgroupAddonPath :\n\
			return \"siWorkgroupAddonPath\" ;	\n\
		case siCustomPath :\n\
			return \"siCustomPath\" ;	\n\
		default :\n\
			return \"siUnknownPath\" ;	\n\
	}\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/XSIApplication.InstallationPath.html\">XSIApplication.InstallationPath</a> <a href=\"#!/url=./si_om/SIObject.Origin.html\">SIObject.Origin</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";