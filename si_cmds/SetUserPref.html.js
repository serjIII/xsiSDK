var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SetUserPref</title>\n\
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
            <h1>SetUserPref</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SetUserPref</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Sets a user preference and returns the previous setting. Some of these user preference \n\
settings correspond to the available settings in the User Preference dialog box, and \n\
some correspond to preferences that can be set from the Main Control Panel. For a list \n\
of possible settings, see <a href=\"#!/url=./si_om/UserPreference.html\">UserPreference</a>.\n\
<br /><br />\n\
Note: The \"AutoInspectEnabled\" (<a href=\"#!/url=./si_om/UserPreference.html#siAutoInspect\">siAutoInspect</a>) preference \n\
cannot be changed permanently through scripting. For more information, see \n\
<a href=\"#!/url=./files/script_editor_RunningScripts.htm\">Property Editor Automatic Inspection</a>.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oVariant = SetUserPref( Target, Value );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns previous value (last value before update) as a <a href=\"#!/url=./files/Variant.htm\">Variant</a>.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Target		</td>\n\
		<td><a href=\"#!/url=./si_om/UserPreference.html\">UserPreference</a>		</td>\n\
		<td>\n\
 User preference to set. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Value		</td>\n\
		<td><a href=\"#!/url=./files/Variant.htm\">Variant</a>		</td>\n\
		<td>\n\
 \n\
		New value for user preference. These values vary depending on what you \n\
		specify for the UserPreference parameter.\n\
		<br /><br />\n\
		See <a href=\"#!/url=./si_om/UserPreference.html\">UserPreference</a> for lists of possible value types \n\
		available for each UserPreference setting.\n\
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
app.LogMessage( app.GetUserPref(cns.siAutoInspect) )\n\
# Toggle the orginal value and re-log the value\n\
app.SetUserPref( cns.siAutoInspect, not(app.GetUserPref(cns.siAutoInspect)) )\n\
app.LogMessage( app.GetUserPref(cns.siAutoInspect) )\n\
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
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' Current value of AutoInspect\n\
Application.LogMessage GetUserPref(siAutoInspect)\n\
\' Save old setting while turning on AutoInspect and display the new value\n\
dim prevval\n\
prevval = SetUserPref(siAutoInspect, False)\n\
Application.LogMessage GetUserPref(siAutoInspect)\n\
\' Restore former setting and display its value again (explicitly reverting\n\
\' back to the original value isn\'t necessary, as Softimage will do that automatically\n\
\' after the script has run its course)\n\
SetUserPref siAutoInspect, prevval\n\
Application.LogMessage GetUserPref(siAutoInspect)\n\
\' If your AutoInspect preference was enabled originally, the History Log \n\
\' would display the following:\n\
\' \'INFO : \"True\"\n\
\' \'INFO : \"False\"\n\
\' \'INFO : \"True\"</pre></td></tr>\n\
</table>\n\
</div><h4>3. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// Get a sphere and switch into T, Local and X/Z modes\n\
CreatePrim(\"Sphere\", \"NurbsSurface\");\n\
TranslateTool();\n\
SetUserPref(\"3D_TRANSFO_REFERENTIAL_CHANGED\", 2);\n\
SetUserPref(\"3D_TRANSFO_EDITED_AXIS_CHANGED\", 5);</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/GetUserPref.html\">GetUserPref</a> <a href=\"#!/url=./si_om/Preferences.SetPreferenceValue.html\">Preferences.SetPreferenceValue</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";