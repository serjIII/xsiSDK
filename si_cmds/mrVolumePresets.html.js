var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Volume Shader Presets</title>\n\
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
            <h1>Volume Shader Presets</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Volume Shader Presets</h2>\n\
\n\
<div>\n\
	<p>\n\
				List of available Volume <a href=\"#!/url=./si_om/Shader.html\">Shader</a> presets. Volume shaders modify rays as they pass through an object (local volume shader) or the scene as a whole (global volume shader). They can simulate effects such as clouds, smoke, and fog. <br /><br />For more information, see <a href=\"http://softimage.wiki.softimage.com/xsidocs/mat_volume_effects_shaders.htm\">the user guide</a></p>\n\
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
		<td class=\"name\">Volume\\Constant_density.Preset</td>\n\
		<td><a name=\"VolumeConstant_density\"></a>Constant Density mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_dense_vol_1_0.html\">Softimage.dense_vol.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrVolumePresets.html\">ConnectVolumeShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Volume\\Fast_volume_effects.Preset</td>\n\
		<td><a name=\"VolumeFast_volume_effects\"></a>Bionic_Volume mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_Bionic_Volume_vol_1_0.html\">Softimage.Bionic_Volume_vol.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrVolumePresets.html\">ConnectVolumeShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Volume\\Particle_Volume_Cloud.Preset</td>\n\
		<td><a name=\"VolumeParticle_Volume_Cloud\"></a>BA_volume_cloud output parameter<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_BA_volume_cloud_1_0.html\">Softimage.BA_volume_cloud.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrVolumePresets.html\">ConnectVolumeShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Volume\\Particle_vol_ExplosionV2.Preset</td>\n\
		<td><a name=\"VolumeParticle_vol_ExplosionV2\"></a>Explosion V2 by Phoenix Tools<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_ExplosionV2vol_1_0.html\">Softimage.ExplosionV2-vol.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrVolumePresets.html\">ConnectVolumeShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Volume\\Particle_vol_FluidV2.Preset</td>\n\
		<td><a name=\"VolumeParticle_vol_FluidV2\"></a>Fluid V2 by Phoenix Tools<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_FluidV2vol_1_0.html\">Softimage.FluidV2-vol.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrVolumePresets.html\">ConnectVolumeShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Volume\\Particle_vol_blob.Preset</td>\n\
		<td><a name=\"VolumeParticle_vol_blob\"></a>Blob - Phoenix Tools<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_blobvol_1_0.html\">Softimage.blob-vol.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrVolumePresets.html\">ConnectVolumeShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Volume\\Particle_vol_blowup.Preset</td>\n\
		<td><a name=\"VolumeParticle_vol_blowup\"></a>Blow Up - Phoenix Tools<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_blowupvol_1_0.html\">Softimage.blowup-vol.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrVolumePresets.html\">ConnectVolumeShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Volume\\Particle_vol_hyperflow.Preset</td>\n\
		<td><a name=\"VolumeParticle_vol_hyperflow\"></a>HyperFlow - Phoenix Tools<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_hyperflowvol_1_0.html\">Softimage.hyperflow-vol.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrVolumePresets.html\">ConnectVolumeShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Volume\\Particle_vol_sparks.Preset</td>\n\
		<td><a name=\"VolumeParticle_vol_sparks\"></a>Sparks - Phoenix Tools<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sparksvol_1_0.html\">Softimage.sparks-vol.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrVolumePresets.html\">ConnectVolumeShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Volume\\Volume_cigarette_smoke.Preset</td>\n\
		<td><a name=\"VolumeVolume_cigarette_smoke\"></a>oz_V_march_smoke mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_March_Smoke_vol_1_0.html\">Softimage.March_Smoke_vol.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrVolumePresets.html\">ConnectVolumeShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Volume\\Volume_effects.Preset</td>\n\
		<td><a name=\"VolumeVolume_effects\"></a>oz_V_march_fractal mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_March_Fractal_vol_1_0.html\">Softimage.March_Fractal_vol.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrVolumePresets.html\">ConnectVolumeShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Volume\\Volume_fog.Preset</td>\n\
		<td><a name=\"VolumeVolume_fog\"></a>soft_fog mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_soft_fog_1_0.html\">Softimage.soft_fog.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrVolumePresets.html\">ConnectVolumeShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Volume\\Volume_layered_fog.Preset</td>\n\
		<td><a name=\"VolumeVolume_layered_fog\"></a>soft_layered_fog mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_soft_layered_fog_1_0.html\">Softimage.soft_layered_fog.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrVolumePresets.html\">ConnectVolumeShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Volume\\Volume_lightning.Preset</td>\n\
		<td><a name=\"VolumeVolume_lightning\"></a>Color Result<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_lightning_1_0.html\">Softimage.sib_lightning.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrVolumePresets.html\">ConnectVolumeShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Volume\\Volume_smoke.Preset</td>\n\
		<td><a name=\"VolumeVolume_smoke\"></a>smoke mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_smoke_vol_1_0.html\">Softimage.smoke_vol.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrVolumePresets.html\">ConnectVolumeShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Volume\\mental images\\Lume_Beam.Preset</td>\n\
		<td><a name=\"Volumemental imagesLume_Beam\"></a>Lume_Beam output parameter<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_Lume_Beam_1_0.html\">Softimage.Lume_Beam.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrVolumePresets.html\">ConnectVolumeShader Example</a>		</td>\n\
	</tr>\n\
</table>\n\
<br />\n\
\n\
</div>\n\
<hr width=\"100%\" />\n\
<h3>ConnectVolumeShader Example</h3>\n\
<div><p><a name=\"ConnectVolumeShader\"> </a><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">function ConnectVolumeShader( in_preset )\n\
{\n\
	NewScene( null, false );\n\
	var obj = Application.ActiveSceneRoot.AddGeometry(\"Cube\",\"MeshSurface\");\n\
	Application.Selection.SetAsText(obj);\n\
	var oShader = SIApplyShaderToCnxPoint(in_preset, obj.Material.volume, null, false);\n\
	if (!oShader) { return null; }\n\
	return (oShader.Type == \"XSICollection\") ? oShader(0) : oShader;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>ConnectVolumeShader2 Example</h3>\n\
<div><p><a name=\"ConnectVolumeShader2\"> </a><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">function ConnectVolumeShader2( in_preset )\n\
{\n\
	NewScene( null, false );\n\
	var obj = ActiveProject.ActiveScene.PassContainer.AddPass( \"Pass\", \"MyTestNode\" );\n\
	SIApplyShaderToCnxPoint(in_preset, \"Passes.MyTestNode.VolumeShaderStack\", null, false);\n\
	var oShader = obj.GetAllShaders();\n\
	return (oShader.Type == \"XSICollection\") ? oShader(0) : oShader;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";