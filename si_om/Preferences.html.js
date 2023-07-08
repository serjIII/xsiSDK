var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Preferences</title>\n\
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
            <h1>Preferences</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Preferences</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_Preferences\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1Preferences.html\">Preferences</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\">Preferences</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> The Preferences object can be used to manage preferences in Softimage. Each preference is in a category \n\
which is represented by a node under the Preferences object under the Application. To identify a \n\
preference the category must be specified: (category.preference) Ex: \"scripting.language\".\n\
<br /><br />\n\
There are 2 kinds of preferences: native and custom. Native preferences come with Softimage and can be \n\
viewed with the File->Preferences dialog. Initially all preference values are set to the factory \n\
defaults.  When the user changes the value of a preference the new value is stored in the default.xsipref \n\
file found in the \\Data\\Preference directory, and this value overrides the factory setting.\n\
<br /><br />\n\
For custom preferences, you can create new preferences in an .xsipref file. However, preferences created \n\
this way have no UI and can only be accessed via scripting.\n\
<br /><br />\n\
You can also create custom preferences by creating a <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> object and calling \n\
<a href=\"#!/url=./si_cmds/InstallCustomPreferences.html\">InstallCustomPreferences</a>.  The only way to delete such a custom preference is to delete \n\
the associated Preset file that is found in the \\Data\\Preferences directory.  \n\
<br /><br />\n\
Note: Unlike native preferences, custom preferences created in this fashion are also loaded from the Workgroup \n\
location.  \n\
<br /><br />\n\
Only a subset of parameter types are supported for Custom Preferences, they are siInt4, siString, siBool and \n\
siDouble (see <a href=\"#!/url=./si_om/siVariantType.html\">siVariantType</a>).\n\
<br /><br />\n\
Many custom plug-ins use a CustomProperty as a way of providing a user interface.  For example, a plug-in that \n\
exports data may ask the user to choose the output file and other configuration settings by calling \n\
<a href=\"#!/url=./si_cmds/InspectObj.html\">InspectObj</a> with a CustomProperty.  Installing such a CustomProperty as a custom preference \n\
can be useful because the values are not forgotten from one session to the next, the object does not clutter \n\
the current scene and the information is centralized in the Preferences section of the Scene Explorer.  However, \n\
because of the limitations of supported parameter types it can often be more flexible to achieve the same thing \n\
by calling <a href=\"#!/url=./si_cmds/SavePreset.html\">SavePreset</a> and <a href=\"#!/url=./si_cmds/LoadPreset.html\">LoadPreset</a> directly from within the plug-in.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Preferences.Export.html\">Export</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Preferences.GetPreferenceValue.html\">GetPreferenceValue</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Preferences.Import.html\">Import</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Preferences.RestoreDefault.html\">RestoreDefault</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Preferences.SaveChanges.html\">SaveChanges</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Preferences.SetPreferenceValue.html\">SetPreferenceValue</a>		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Properties</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Preferences.Categories.html\">Categories</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">from win32com.client import constants as cns\n\
app = Application\n\
# Get the preferences object on the application\n\
oPrefs = app.Preferences\n\
# Show the current language\n\
app.LogMessage(oPrefs.GetPreferenceValue (\"scripting.language\"))\n\
# or\n\
app.LogMessage(oPrefs.Categories(\"scripting\").Language.Value)\n\
# Export all data_management preferences\n\
oPrefs.Export( XSIUtils.BuildPath(app.InstallationPath(cns.siFactoryPath), \"myDMprefs.xsipref\"), \"data_management\")\n\
# Now reset all preferences of the category data_management\n\
oPrefs.RestoreDefault(\"data_management\")\n\
# Expected results:\n\
# INFO : Python\n\
# INFO : Python</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/* \n\
	This example demonstrates how to temporarily change the user\'s\n\
	AutoInspect preference (if enabled, property pages always pop\n\
	up for objects newly created via command). It also illustrates\n\
	how Softimage automatically reverts any scripting change to this \n\
	preference after the script runs.\n\
*/\n\
var app = Application;\n\
// Current value of AutoInspect\n\
app.LogMessage( app.Preferences.GetPreferenceValue(\"Interaction.autoinspect\") );\n\
// Toggle the orginal value and re-log the value\n\
app.Preferences.SetPreferenceValue( \n\
	\"Interaction.autoinspect\", \n\
	!app.Preferences.GetPreferenceValue(\"Interaction.autoinspect\") \n\
);\n\
app.LogMessage( app.Preferences.GetPreferenceValue(\"Interaction.autoinspect\") );\n\
// If your AutoInspect preference was enabled originally, the History Log \n\
// would display the following:\n\
// INFO : True\n\
// INFO : False\n\
// VERBOSE : Restoring preference changed by script: Interaction.autoinspect\n\
// If your AutoInspect preference was disabled originally, the History Log \n\
// would display the following:\n\
// INFO : False\n\
// INFO : True\n\
// VERBOSE : Restoring preference changed by script: Interaction.autoinspect</pre></td></tr>\n\
</table>\n\
</div><h4>3. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' This example show how to navigate in preferences object\n\
\' All categories and all preferences in each category will be printed.\n\
set oPrefs = Application.Preferences\n\
set oCategories = oPrefs.categories\n\
For each oCategory in oCategories\n\
Application.LogMessage \"The preferences for category \" &amp; oCategory &amp; \" are:\"\n\
set oPreferences = oCategory.Parameters\n\
For each oPref in oPreferences\n\
Application.LogMessage \"   -\" &amp; oPref &amp; \" = \" &amp; oPref.Value\n\
Next\n\
Next\n\
\' The script logs information like the following:\n\
\' ....\n\
\' INFO : The preferences for category preferences.units are:\n\
\' INFO :    -preferences.units.colorspace = 1\n\
\' INFO :    -preferences.units.length = 2\n\
\' INFO :    -preferences.units.angle = 2\n\
\' INFO :    -preferences.units.time = 2\n\
\' INFO :    -preferences.units.mass = 2\n\
\' ....</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/XSIApplication.Preferences.html\">XSIApplication.Preferences</a> <a href=\"#!/url=./si_cmds/InstallCustomPreferences.html\">InstallCustomPreferences</a> <a href=\"#!/url=./si_cmds/SetUserPref.html\">SetUserPref</a> <a href=\"#!/url=./si_cmds/GetUserPref.html\">GetUserPref</a> <a href=\"#!/url=./si_om/UserPreference.html\">UserPreference</a> <a href=\"#!/url=./files/dev_userprefs.htm\">Working with User Preferences</a> <a href=\"#!/url=./files/script_editor_RunningScripts.htm\">Property Editor Automatic Inspection</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";