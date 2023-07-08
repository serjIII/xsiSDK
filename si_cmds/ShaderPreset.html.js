var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Shader Presets</title>\n\
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
            <h1>Shader Presets</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Shader Presets</h2>\n\
\n\
<div>\n\
	<p>\n\
				List of available <a href=\"#!/url=./si_om/Shader.html\">Shader</a> presets which can be used with the following commands and methods:\n\
			</p>\n\
	<table>		<tr>			<th>Commands</th>\n\
			<th>Methods</th>\n\
</tr>\n\
		<tr>			<td>			<ul>\n\
				<li><a href=\"#!/url=./si_cmds/AddPresetTextureLayer.html\">AddPresetTextureLayer</a></li>\n\
				<li><a href=\"#!/url=./si_cmds/ApplyShader.html\">ApplyShader</a></li>\n\
				<li><a href=\"#!/url=./si_cmds/BlendInTextureLayers.html\">BlendInTextureLayers</a></li>\n\
				<li><a href=\"#!/url=./si_cmds/BlendInTextureLayersInsp.html\">BlendInTextureLayersInsp</a></li>\n\
				<li><a href=\"#!/url=./si_cmds/BlendInTextureLayersWithPorts.html\">BlendInTextureLayersWithPorts</a></li>\n\
				<li><a href=\"#!/url=./si_cmds/BlendInTextureLayersWithPortsInsp.html\">BlendInTextureLayersWithPortsInsp</a></li>\n\
				<li><a href=\"#!/url=./si_cmds/CreateShaderFromPreset.html\">CreateShaderFromPreset</a></li>\n\
				<li><a href=\"#!/url=./si_cmds/InsertShader.html\">InsertShader</a></li>\n\
				<li><a href=\"#!/url=./si_cmds/ReplaceShaderWithPreset.html\">ReplaceShaderWithPreset</a></li>\n\
				<li><a href=\"#!/url=./si_cmds/SIAddShaderEntryToOverride.html\">SIAddShaderEntryToOverride</a></li>\n\
				<li><a href=\"#!/url=./si_cmds/SIApplyShader.html\">SIApplyShader</a></li>\n\
				<li><a href=\"#!/url=./si_cmds/SIApplyShaderToCnxPoint.html\">SIApplyShaderToCnxPoint</a></li>\n\
				<li><a href=\"#!/url=./si_cmds/SICreateMaterial.html\">SICreateMaterial</a></li>\n\
			</ul>\n\
</td>\n\
			<td>			<ul>\n\
				<li><a href=\"#!/url=./si_om/SceneItem.AddMaterial.html\">SceneItem.AddMaterial</a></li>\n\
				<li><a href=\"#!/url=./si_om/Parameter.Connect.html\">Parameter.Connect</a></li>\n\
				<li><a href=\"#!/url=./si_om/Parameter.ConnectFromFile.html\">Parameter.ConnectFromFile</a></li>\n\
				<li><a href=\"#!/url=./si_om/Parameter.ConnectFromPreset.html\">Parameter.ConnectFromPreset</a></li>\n\
				<li><a href=\"#!/url=./si_om/XSIFactory.CreateObjectFromPreset.html\">XSIFactory.CreateObjectFromPreset</a></li>\n\
			</ul>\n\
</td>\n\
</tr>\n\
</table>\n\
<div class=\"tip\">\n\
<table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<td class=\"label\">Warning</td>\n\
		<td class=\"emph\">\n\
				Although most of these presets will work with the above commands and methods, there are some restrictions based on the target object and the type of shader to be applied. For example, the <span style=\"font-family: courier, monospace;\">AddMaterial</span> method can only use presets that connect to a material or shader, so conversion and math shaders will fail. In that case, you should use one of the <span style=\"font-family: courier, monospace;\">Connect</span> methods on the <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> object or the <a href=\"#!/url=./si_cmds/SIApplyShaderToCnxPoint.html\">SIApplyShaderToCnxPoint</a> command to specify the precise way to connect.\n\
				<br /><br />\n\
				In addition, a number of shaders can be used as global shaders when they are applied to <a href=\"#!/url=./si_om/Pass.html\">Pass</a> objects via the <a href=\"#!/url=./si_cmds/SIApplyShaderToCnxPoint.html\">SIApplyShaderToCnxPoint</a> command. These include the <a href=\"#!/url=./si_cmds/EnvironmentShaderPresets.html\">Environment</a>, <a href=\"#!/url=./si_cmds/OutputShaderPresets.html\">Output</a>, and <a href=\"#!/url=./si_cmds/VolumeShaderPresets.html\">Volume</a> shader presets.\n\
			</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
	<p>The presets are organized by category:</p>\n\
<ul>\n\
	<li><a href=\"#!/url=./si_cmds/mrEnvironmentPresets.html\">Environment</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/mrGeometryPresets.html\">Geometry</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/mrLensPresets.html\">Lens</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/mrLightPresets.html\">Light</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/mrLightmapPresets.html\">Lightmap</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/mrOutputPresets.html\">Output</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/mrPhenomenonMatPresets.html\">Material</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/mrTexturePresets.html\">Texture</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/mrVolumePresets.html\">Volume</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/rtCommentPresets.html\">Comment</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">RealTime</a></li>\n\
</ul>\n\
</div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";