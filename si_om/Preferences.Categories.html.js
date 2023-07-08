var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Preferences.Categories</title>\n\
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
            <h1>Preferences.Categories</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Preferences.html\">Preferences</a>.Categories</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns a <a href=\"#!/url=./si_om/ProjectItemCollection.html\">ProjectItemCollection</a> containing one \n\
<a href=\"#!/url=./si_om/ProjectItem.html\">ProjectItem</a> for each category nested under the \n\
Preferences node. \n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Object Preferences.get_Categories();\n\
// set accessor\n\
Preferences.set_Categories( String pArrayVal );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">set oCategories = Application.Preferences.Categories\n\
For each oCat in oCategories\n\
Application.LogMessage \"The Category \" &amp; oCat &amp; \" has \" &amp; oCat.Parameters.Count &amp; \" preferences item(s)\"\n\
Next\n\
\' This script logs something similar to the following:\n\
\' INFO : The Category preferences.animation_editor has 11 preferences item(s)\n\
\' INFO : The Category preferences.animation_mixer has 31 preferences item(s)\n\
\' INFO : The Category preferences.dopesheet has 47 preferences item(s)\n\
\' INFO : The Category preferences.explorer has 9 preferences item(s)\n\
\' INFO : The Category preferences.fcurve_editor has 62 preferences item(s)\n\
\' INFO : The Category preferences.keying_panel has 4 preferences item(s)\n\
\' INFO : The Category preferences.layercontrol has 6 preferences item(s)\n\
\' INFO : The Category preferences.MaterialManager has 10 preferences item(s)\n\
\' INFO : The Category preferences.MaterialPanel has 8 preferences item(s)\n\
\' INFO : The Category preferences.icetree has 3 preferences item(s)\n\
\' INFO : The Category preferences.netview has 1 preferences item(s)\n\
\' INFO : The Category preferences.objectview has 11 preferences item(s)\n\
\' INFO : The Category preferences.preset_manager has 8 preferences item(s)\n\
\' INFO : The Category preferences.render_tree has 7 preferences item(s)\n\
\' INFO : The Category preferences.schematic has 12 preferences item(s)\n\
\' INFO : The Category preferences.scripteditor has 12 preferences item(s)\n\
\' INFO : The Category preferences.texture_layer_editor has 10 preferences item(s)\n\
\' INFO : The Category preferences.weighteditor has 7 preferences item(s)\n\
\' INFO : The Category preferences.xsi_explorer has 3 preferences item(s)\n\
\' INFO : The Category preferences.Cg_Display has 1 preferences item(s)\n\
\' INFO : The Category preferences.ICEOperators has 9 preferences item(s)\n\
\' INFO : The Category preferences.SINet has 3 preferences item(s)\n\
\' INFO : The Category preferences.duplicate has 19 preferences item(s)\n\
\' INFO : The Category preferences.transformgroup has 1 preferences item(s)\n\
\' INFO : The Category preferences.Camera has 21 preferences item(s)\n\
\' INFO : The Category preferences.Polygon has 2 preferences item(s)\n\
\' INFO : The Category preferences.Select has 11 preferences item(s)\n\
\' INFO : The Category preferences.SnapProperties has 32 preferences item(s)\n\
\' INFO : The Category preferences.SymmetryProperties has 4 preferences item(s)\n\
\' INFO : The Category preferences.TransformProperties has 40 preferences item(s)\n\
\' INFO : The Category preferences.Tweak has 3 preferences item(s)\n\
\' INFO : The Category preferences.animation has 15 preferences item(s)\n\
\' INFO : The Category preferences.shape_animation has 5 preferences item(s)\n\
\' INFO : The Category preferences.Compositing has 18 preferences item(s)\n\
\' INFO : The Category preferences.data_management has 30 preferences item(s)\n\
\' INFO : The Category preferences.plugin_manager has 8 preferences item(s)\n\
\' INFO : The Category preferences.Display has 38 preferences item(s)\n\
\' INFO : The Category preferences.General has 6 preferences item(s)\n\
\' INFO : The Category preferences.Interaction has 25 preferences item(s)\n\
\' INFO : The Category preferences.modeling has 4 preferences item(s)\n\
\' INFO : The Category preferences.output_format has 19 preferences item(s)\n\
\' INFO : The Category preferences.rendering has 48 preferences item(s)\n\
\' INFO : The Category preferences.shaderball has 6 preferences item(s)\n\
\' INFO : The Category preferences.Scenecolors has 27 preferences item(s)\n\
\' INFO : The Category preferences.scripting has 12 preferences item(s)\n\
\' INFO : The Category preferences.simulation has 9 preferences item(s)\n\
\' INFO : The Category preferences.time has 5 preferences item(s)\n\
\' INFO : The Category preferences.units has 5 preferences item(s)</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Preferences.GetPreferenceValue.html\">Preferences.GetPreferenceValue</a> <a href=\"#!/url=./si_om/Preferences.SetPreferenceValue.html\">Preferences.SetPreferenceValue</a> <a href=\"#!/url=./si_om/Preferences.Import.html\">Preferences.Import</a> <a href=\"#!/url=./si_om/Preferences.Export.html\">Preferences.Export</a> <a href=\"#!/url=./si_om/Preferences.RestoreDefault.html\">Preferences.RestoreDefault</a> <a href=\"#!/url=./si_om/Preferences.SaveChanges.html\">Preferences.SaveChanges</a> <a href=\"#!/url=./si_om/UserPreference.html\">UserPreference</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";