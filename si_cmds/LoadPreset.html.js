var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>LoadPreset</title>\n\
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
            <h1>LoadPreset</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">LoadPreset</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Loads a preset file on the specified objects.<br /><br />\n\
This command is available from every property page, by clicking the \"Load\" button in the top\n\
right-hand corner.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>LoadPreset( [PresetObj], [InputObj] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">PresetObj		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		Name of the preset to load.  If the complete path is not specified then Softimage \n\
		searches standard preset locations for the file (see <a href=\"#!/url=./si_om/siPresetLocation.html\">siPresetLocation</a>).\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
If not specified, or the specified file could not be found, then a file browser prompts the user to pick the file.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">InputObj		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of objects or property sets that load the preset. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection.			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'---------------------------------------------------------\n\
\' Example: Saving an loading a preset file. This example \n\
\' demonstrates creating a custom p-set, saving it to a \n\
\' preset file, and then re-loading that file.\n\
\'---------------------------------------------------------\n\
\' Add a custom PSet to the scene root, with a parameter, and set its value to 8.\n\
SelectObj ActiveProject.ActiveScene.Root\n\
AddProp \"Custom_parameter_list\", , , \"MyPSet\"\n\
SIAddCustomParameter \"MyPSet\", \"MyParam\", siDouble, 5, 0, 10, null, 4, 0, 10, null, null\n\
SetValue \"MyPSet.MyParam\", 8, null\n\
\' Now save the \'MyPSet\' as a preset file named \'Example\'.\n\
SavePreset \"MyPSet\", \"Example\", null, siUser, null, false, null\n\
\' Change the value of the parameter to 6, and then load the example just saved.\n\
SetValue \"MyPSet.MyParam\", 6, null\n\
ParamVal = GetValue( \"MyPSet.MyParam\", null )\n\
LogMessage \"Value of MyPSet.MyParam = \" &amp; ParamVal\n\
PresetFile = Application.InstallationPath( siUserPath ) &amp; \"\\Data\\DSPresets\\Properties\\Example.Preset\"\n\
LoadPreset PresetFile, \"MyPSet\"\n\
\' Notice how custom property set has been renamed to the Preset name\n\
ParamVal = GetValue( \"Example.MyParam\", null )\n\
LogMessage \"Value of Example.MyParam = \" &amp; ParamVal\n\
\'---------------------------------------------------------\n\
\' Output from this script:\n\
\'INFO : \"Value of MyPSet.MyParam = 6\"\n\
\'INFO : \"Value of Example.MyParam = 8\"\n\
\' Object : \"Example.MyParam\"\n\
\'---------------------------------------------------------</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/SavePreset.html\">SavePreset</a> <a href=\"#!/url=./si_cmds/SILoadPreset.html\">SILoadPreset</a> <a href=\"#!/url=./si_om/CustomProperty.BinaryData.html\">CustomProperty.BinaryData</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";