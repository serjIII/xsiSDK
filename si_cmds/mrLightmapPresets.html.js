var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Lightmap Shader Presets</title>\n\
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
            <h1>Lightmap Shader Presets</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Lightmap Shader Presets</h2>\n\
\n\
<div>\n\
	<p>\n\
				List of available Lightmap <a href=\"#!/url=./si_om/Shader.html\">Shader</a> presets. Lightmap shaders are used to sample object surfaces and store the result in a file that can be used later. For example, you can use a lightmap shader to bake a complex material into a single texture file. Lightmaps are also used by the Fast Subsurface Scattering and Fast Skin shaders to store information about scattered light. \n\
			</p>\n\
<div class=\"tip\">\n\
<table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<td class=\"label\">Note</td>\n\
		<td class=\"emph\">\n\
				See <a href=\"#!/url=./si_cmds/ShaderPreset.html\">Shader Presets</a> for a list of different shader preset types. Also see <a href=\"#!/url=./si_cmds/AlphabeticalListOfAllShaderPresets.html\">Alphabetical Listing of All Shader Presets</a> for a complete list of available shaders.\n\
			</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
</div>\n\
\n\
<div><table class=\"values\">\n\
	<tr>\n\
		<th>Preset</th>\n\
		<th>Shaders</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Lightmap\\Color_Sampler.Preset</td>\n\
		<td><a name=\"LightmapColor_Sampler\"></a>Color Sampler mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_lightmap_color_sampler_1_0.html\">Softimage.sib_lightmap_color_sampler.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrLightmapPresets.html\">ConnectLightMapShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Lightmap\\mental images\\misss_lightmap_write.Preset</td>\n\
		<td><a name=\"Lightmapmental imagesmisss_lightmap_write\"></a>misss Lightmap Write mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_misss_lightmap_write_1_0.html\">Softimage.misss_lightmap_write.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrLightmapPresets.html\">ConnectLightMapShader Example</a>		</td>\n\
	</tr>\n\
</table>\n\
<br />\n\
\n\
</div>\n\
<hr width=\"100%\" />\n\
<h3>ConnectLightMapShader Example</h3>\n\
<div><p><a name=\"ConnectLightMapShader\"> </a><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">function ConnectLightMapShader( in_preset )\n\
{\n\
	NewScene( null, false );\n\
	CreatePrim(\"Grid\", \"MeshSurface\");\n\
	var oShader = CreateShaderFromPreset(in_preset, \"Sources.Materials.DefaultLib.Scene_Material\");\n\
	SIConnectShaderToCnxPoint(oShader.FullName+\".out\", \n\
		\"Sources.Materials.DefaultLib.Scene_Material.lightmap\", false);\n\
	if (!oShader) { return null; }\n\
	return (oShader.Type == \"XSICollection\") ? oShader(0) : oShader;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";