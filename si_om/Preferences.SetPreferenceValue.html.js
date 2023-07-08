var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Preferences.SetPreferenceValue</title>\n\
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
            <h1>Preferences.SetPreferenceValue</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Preferences.html\">Preferences</a>.SetPreferenceValue</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Sets a value for a specified preference.\n\
<br /><br />\n\
Note: The \"Interaction.autoinspect\" preference cannot be changed permanently\n\
through scripting. For more information, see\n\
<a href=\"#!/url=./files/script_editor_RunningScripts.htm\">Property Editor Automatic Inspection</a>.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Preferences.SetPreferenceValue( String in_bstrPrefName, Object in_pVal );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Preferences.SetPreferenceValue( PreferenceName, Value );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">PreferenceName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		The name of the preference to get. The syntax for specifying \n\
		an individual preference is: \"category.preference\". \n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Value		</td>\n\
		<td><a href=\"#!/url=./files/Variant.htm\">Variant</a>		</td>\n\
		<td>\n\
The value to set.\n\
			</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\"># \n\
# This example demonstrates how to temporarily change the user\'s\n\
# AutoInspect preference (if enabled, property pages always pop\n\
# up for objects newly created via command). It also illustrates\n\
# how Softimage automatically reverts any scripting change to this \n\
# preference after the script runs.\n\
# \n\
from win32com.client import constants as cns\n\
app = Application\n\
# Current value of AutoInspect\n\
app.LogMessage( app.Preferences.GetPreferenceValue(\"Interaction.autoinspect\") )\n\
# Toggle the orginal value and re-log the value\n\
app.Preferences.SetPreferenceValue( \n\
	\"Interaction.autoinspect\", \n\
	not( app.Preferences.GetPreferenceValue(\"Interaction.autoinspect\") )\n\
);\n\
app.LogMessage( app.Preferences.GetPreferenceValue(\"Interaction.autoinspect\") )\n\
# If your AutoInspect preference was enabled originally, the History Log \n\
# would display the following:\n\
# INFO : True\n\
# INFO : False\n\
# VERBOSE : Restoring preference changed by script: Interaction.autoinspect\n\
# If your AutoInspect preference was disabled originally, the History Log \n\
# would display the following:\n\
# INFO : False\n\
# INFO : True\n\
# VERBOSE : Restoring preference changed by script: Interaction.autoinspect</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">var app = Application;\n\
app.LogMessage( app.Preferences.GetPreferenceValue(\"data_management.projects_auto_import_enable\") );\n\
app.Preferences.SetPreferenceValue(\"data_management.projects_auto_import_enable\", true);\n\
app.LogMessage( app.Preferences.GetPreferenceValue(\"data_management.projects_auto_import_enable\") );\n\
app.Preferences.SetPreferenceValue(\"data_management.projects_auto_import_enable\", false);\n\
app.LogMessage( app.Preferences.GetPreferenceValue(\"data_management.projects_auto_import_enable\") );\n\
// This script will log something like this:\n\
// INFO : False\n\
// INFO : True\n\
// INFO : False</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Preferences.GetPreferenceValue.html\">Preferences.GetPreferenceValue</a> <a href=\"#!/url=./si_cmds/SetUserPref.html\">SetUserPref</a> <a href=\"#!/url=./si_om/Preferences.Categories.html\">Preferences.Categories</a> <a href=\"#!/url=./si_om/Preferences.Import.html\">Preferences.Import</a> <a href=\"#!/url=./si_om/Preferences.Export.html\">Preferences.Export</a> <a href=\"#!/url=./si_om/Preferences.RestoreDefault.html\">Preferences.RestoreDefault</a> <a href=\"#!/url=./si_om/Preferences.SaveChanges.html\">Preferences.SaveChanges</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";