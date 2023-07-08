var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script>\n\
      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\n\
      <meta name=\"product\" content=\"SI\" />\n\
      <meta name=\"release\" content=\"2015\" />\n\
      <meta name=\"book\" content=\"Developer\" />\n\
      <meta name=\"created\" content=\"2014-03-13\" />\n\
      <meta name=\"topicid\" content=\"GUID-364745A5-F475-41AB-A25F-2613D6DB9CB5\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Working with User Preferences</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-364745A5-F475-41AB-A25F-2613D6DB9CB5\"></a></span><div class=\"head\">\n\
            <h1>Working with User Preferences</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-C35612C8-0CA5-4E0F-929A-97C6F8267D9F\"></a></span>User preferences in Softimage are stored in property sets, so they can be accessed\n\
            like any other object; however, there is a special class that provides easy access\n\
            and some extra functionality.\n\
         </p>\n\
         <div><span class=\"anchor_wrapper\"><a name=\"GUID-732333E3-AFA2-4371-B0BD-092221194BD5\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-155A1F1A-3D14-4934-8238-D27E53EDF632\"></a></span>The \"<span class=\"code\" translate=\"no\">Interaction.autoinspect</span>\" preference cannot be changed permanently via scripting. See <a href=\"#!/url=./files/script_editor_RunningScripts.htm\">Property Editor Automatic Inspection</a> for more information.\n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS869DDF2970BC7B46963769CF394EFA0D-0002\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-66AC4AE5-DADB-4D1D-A045-493707C82D63\"></a></span>Quick Access\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-DB50696C-7BC0-4B1A-8987-12BE550AA628\"></a></span>The object provides direct access to the object through its property. From there you\n\
               can browse through the or target a specific value ( and ). See the following examples:\n\
            </p> \n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-CB7B910C-F7F1-46A5-B21E-0CAE5EF33623\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/dev_userprefs.htm#WS869DDF2970BC7B46963769CF394EFA0D-0008\">JScript Example: Browsing through preference via categories</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-6C496E0B-9059-405A-BA15-6EB81890A7E7\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/dev_userprefs.htm#WS869DDF2970BC7B46963769CF394EFA0D-0007\">C++ Examples: Getting a specific preference value</a></span> \n\
                  </p> \n\
               </li>\n\
            </ul> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS869DDF2970BC7B46963769CF394EFA0D-0003\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-AD1813BA-BD73-4D0A-84C7-0165FE386CB4\"></a></span>Restoring Defaults\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-29B1193F-6E9B-4FB5-A98D-AFF08B432A17\"></a></span>The object provides the method, which allows you to restore defaults for a single\n\
               preference value or all values associated to a specific . See the following example:\n\
            </p> \n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-A3D0B004-2D4A-496E-BFB5-EFEC5451DBF5\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/dev_userprefs.htm#WS869DDF2970BC7B46963769CF394EFA0D-0006\">Python Example: Exporting, importing, and restoring preferences</a></span> \n\
                  </p> \n\
               </li>\n\
            </ul> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS869DDF2970BC7B46963769CF394EFA0D-0004\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-50C774EE-F017-4998-8224-858AD9EBE1C7\"></a></span>Exporting/Importing Preferences\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-FE6B436F-507D-4FEA-A8C5-C91D9D132AEB\"></a></span>The object provides the and methods, which allow you to save your preferences (both\n\
               native and custom) to an external file which you can either use as a backup or to\n\
               deploy as part of an add-on package. These methods allow you to specify one or more\n\
               categories, or nothing (which imports/exports all preferences). See the following\n\
               example:\n\
            </p> \n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-252C434E-F504-4F17-810D-137FCA5667D3\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/dev_userprefs.htm#WS869DDF2970BC7B46963769CF394EFA0D-0006\">Python Example: Exporting, importing, and restoring preferences</a></span> \n\
                  </p> \n\
               </li>\n\
            </ul> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS869DDF2970BC7B46963769CF394EFA0D-0005\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-1B352272-99CB-4465-B530-F2D4F2B7BD29\"></a></span>Examples\n\
            </h2> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS869DDF2970BC7B46963769CF394EFA0D-0006\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-02787394-3D93-4BA8-8D23-50738D2A8AF0\"></a></span>Python Example: Exporting, importing, and restoring preferences\n\
               </h3> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
from win32com.client import constants\n\
app = Application\n\
\n\
# Export the current scripting preferences\n\
app.Preferences.Export( app.InstallationPath(constants.siFactoryPath) + \"/myprefs.xsipref\", \"scripting\" )\n\
\n\
# Restore the default values\n\
app.Preferences.RestoreDefault( \"scripting\" )\n\
\n\
# Now import back the scripting preferences\n\
app.Preferences.Import( app.InstallationPath(constants.siFactoryPath) + \"/myprefs.xsipref\" )\n\
</pre></div> \n\
            </div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS869DDF2970BC7B46963769CF394EFA0D-0007\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-7F82E51B-D92B-4F33-971E-F26982F2CE92\"></a></span>C++ Examples: Getting a specific preference value\n\
               </h3> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
using namespace XSI;\n\
Application app;\n\
Preferences prefs = app.GetPreferences();\n\
\n\
CString lang;\n\
prefs.GetPreferenceValue( L\"scripting.language\", lang );\n\
\n\
app.LogMessage( lang );\n\
</pre></div> \n\
            </div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS869DDF2970BC7B46963769CF394EFA0D-0008\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-878DBC01-D9C4-497F-9C74-D8C36C8E29CD\"></a></span>JScript Example: Browsing through preference via categories\n\
               </h3> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
/*\n\
	This example show how to navigate in preferences object\n\
	All categories and all preferences in each category will be printed.\n\
*/\n\
var oPrefs = Application.Preferences;\n\
\n\
var oCategories = oPrefs.Categories;\n\
for (var i=0; i&lt;oCategories.Count; i++) {\n\
	var oCategory = oCategories.Item(i);\n\
	Application.LogMessage( \"The preferences for category \" + oCategory + \" are.....\" );\n\
	var oPrefs = oCategory.Parameters;\n\
	for (var j=0; j&lt;oPrefs.Count; j++) {\n\
		var opref = oPrefs.Item(j);\n\
		Application.LogMessage( \"\\t-\" + opref + \" = \" + opref.Value );\n\
	}\n\
}\n\
\n\
\n\
// Expected output:\n\
// INFO : The preferences for category preferences.animation_editor are.....\n\
// INFO : 	-preferences.animation_editor.track_sel = false\n\
// INFO : 	-preferences.animation_editor.parameter_sort = 1\n\
// INFO : 	-preferences.animation_editor.max_nb_curves = 0\n\
// INFO : 	-preferences.animation_editor.auto_select_marked = false\n\
// INFO : 	-preferences.animation_editor.auto_select_keyed = false\n\
// INFO : 	-preferences.animation_editor.always_show_root_objects = true\n\
// INFO : 	-preferences.animation_editor.simplified_mode = true\n\
// INFO : 	-preferences.animation_editor.prevent_movement_on_lmb = false\n\
// INFO : 	-preferences.animation_editor.translate_on_mmb = true\n\
// INFO : 	-preferences.animation_editor.fcurveeditor_multisel_expansion = 1\n\
// INFO : 	-preferences.animation_editor.dopesheet_multisel_expansion = 0\n\
// ...\n\
//\n\
// INFO : The preferences for category preferences.units are.....\n\
// INFO : 	-preferences.units.colorspace = 1\n\
// INFO : 	-preferences.units.length = 2\n\
// INFO : 	-preferences.units.angle = 2\n\
// INFO : 	-preferences.units.time = 2\n\
// INFO : 	-preferences.units.mass = 2\n\
</pre></div> \n\
            </div> \n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";