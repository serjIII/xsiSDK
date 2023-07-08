var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Lens Shader Presets</title>\n\
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
            <h1>Lens Shader Presets</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Lens Shader Presets</h2>\n\
\n\
<div>\n\
	<p>\n\
				List of available Lens <a href=\"#!/url=./si_om/Shader.html\">Shader</a> presets. Lens shaders are used when a primary ray is cast by the camera. They may modify the ray\'s origin and direction to implement cameras other than the standard pinhole camera and they may modify the result of the primary ray to implement effects such as lens flares or a cartoon effect. <br /><br />For more information, see <a href=\"http://softimage.wiki.softimage.com/xsidocs/cameras_AddingLensShaderstotheCamera.htm\">the user guide</a></p>\n\
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
		<td class=\"name\">Lens\\Camera_projection.Preset</td>\n\
		<td><a name=\"LensCamera_projection\"></a>mib Lookup Background mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_mib_lookup_background_1_0.html\">Softimage.mib_lookup_background.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrLensPresets.html\">ConnectLensShader2 Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Lens\\Cartoon.Preset</td>\n\
		<td><a name=\"LensCartoon\"></a>ari_toon_lens mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_toon_len_1_0.html\">Softimage.toon_len.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrLensPresets.html\">ConnectLensShader2 Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Lens\\Depth_of_field.Preset</td>\n\
		<td><a name=\"LensDepth_of_field\"></a>Depth Of Field mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_dof_1_0.html\">Softimage.sib_dof.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrLensPresets.html\">ConnectLensShader2 Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Lens\\Fast_lens_effects.Preset</td>\n\
		<td><a name=\"LensFast_lens_effects\"></a>Bionic_Lens mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_Bionic_Lens_len_1_0.html\">Softimage.Bionic_Lens_len.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrLensPresets.html\">ConnectLensShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Lens\\Fisheye.Preset</td>\n\
		<td><a name=\"LensFisheye\"></a>sib_fisheye output parameter<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_fisheye_1_0.html\">Softimage.sib_fisheye.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrLensPresets.html\">ConnectLensShader2 Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Lens\\Flare.Preset</td>\n\
		<td><a name=\"LensFlare\"></a>oz_len_flares mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_FLARES_LEN_1_0.html\">Softimage.FLARES_LEN.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrLensPresets.html\">ConnectLensShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Lens\\Lens_Effects.Preset</td>\n\
		<td><a name=\"LensLens_Effects\"></a>sib_fx_lens output parameter<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_fx_lens_1_0.html\">Softimage.sib_fx_lens.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrLensPresets.html\">ConnectLensShader2 Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Lens\\Panoramic.Preset</td>\n\
		<td><a name=\"LensPanoramic\"></a>Cylindric mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_Cylindric_len_1_0.html\">Softimage.Cylindric_len.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrLensPresets.html\">ConnectLensShader2 Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Lens\\Self_antialiasing.Preset</td>\n\
		<td><a name=\"LensSelf_antialiasing\"></a>Color Result<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sprite_len_1_0.html\">Softimage.sprite_len.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrLensPresets.html\">ConnectLensShader2 Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Lens\\Starburst_flare.Preset</td>\n\
		<td><a name=\"LensStarburst_flare\"></a>Color Result<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_Flares_Stars_len_1_0.html\">Softimage.Flares_Stars_len.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrLensPresets.html\">ConnectLensShader2 Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Lens\\Stereoscopic.Preset</td>\n\
		<td><a name=\"LensStereoscopic\"></a>nstereo mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_NSTEREO_LEN_1_0.html\">Softimage.NSTEREO_LEN.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrLensPresets.html\">ConnectLensShader2 Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Lens\\Toon_Ink_Lens.Preset</td>\n\
		<td><a name=\"LensToon_Ink_Lens\"></a>sitoon_ink output parameter<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sitoon_ink_1_0.html\">Softimage.sitoon_ink.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrLensPresets.html\">ConnectLensShader2 Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Lens\\True_lens_emulator.Preset</td>\n\
		<td><a name=\"LensTrue_lens_emulator\"></a>Color Result<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_real_camera_len_1_0.html\">Softimage.real_camera_len.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrLensPresets.html\">ConnectLensShader2 Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Lens\\Z_depth.Preset</td>\n\
		<td><a name=\"LensZ_depth\"></a>Lens Depth mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_lens_depth_1_0.html\">Softimage.sib_lens_depth.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrLensPresets.html\">ConnectLensShader2 Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Lens\\mental images\\Lume_Distortion.Preset</td>\n\
		<td><a name=\"Lensmental imagesLume_Distortion\"></a>Lume_Distortion output parameter<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_Lume_Distortion_1_0.html\">Softimage.Lume_Distortion.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrLensPresets.html\">ConnectLensShader2 Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Lens\\mental images\\mia_Bokeh_Lens.Preset</td>\n\
		<td><a name=\"Lensmental imagesmia_Bokeh_Lens\"></a>mia Lens Bokeh mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_mia_lens_bokeh_1_0.html\">Softimage.mia_lens_bokeh.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrLensPresets.html\">ConnectLensShader2 Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Lens\\mental images\\mia_Photographic_Exposure.Preset</td>\n\
		<td><a name=\"Lensmental imagesmia_Photographic_Exposure\"></a>mia Photographic Exposure mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_mia_exposure_photographic_1_0.html\">Softimage.mia_exposure_photographic.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrLensPresets.html\">ConnectLensShader2 Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Lens\\mental images\\mia_Simple_Tone_Mapping.Preset</td>\n\
		<td><a name=\"Lensmental imagesmia_Simple_Tone_Mapping\"></a>mia Exposure Simple mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_mia_exposure_simple_1_0.html\">Softimage.mia_exposure_simple.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrLensPresets.html\">ConnectLensShader2 Example</a>		</td>\n\
	</tr>\n\
</table>\n\
<br />\n\
\n\
</div>\n\
<hr width=\"100%\" />\n\
<h3>ConnectLensShader Example</h3>\n\
<div><p><a name=\"ConnectLensShader\"> </a><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">function ConnectLensShader( in_preset )\n\
{\n\
	// Set up a scene with a couple lights and a camera\n\
	NewScene( null, false );\n\
	GetPrimLight(\"Neon.Preset\", \"Neon\");\n\
	GetPrimLight(\"LightFlat.Preset\");\n\
	GetPrimCamera(\"Telephoto\", \"camera\");\n\
	\n\
	// Plug in the new lens shader\n\
	SIAddArrayElement(\"camera1.camera.lensshader\");\n\
	var oShaderList = InsertShader(in_preset, \"camera1.camera.Item\");\n\
	\n\
	// InsertShader returns a collection, which we can use to build a convenient string\n\
	var sInputObjs = \"camera1.camera.\"+oShaderList(0).Name+\".lights\";\n\
	\n\
	// Now connect the two lights into the light list\n\
	SIAddArrayElement(sInputObjs);\n\
	SetReference2(sInputObjs+\".lights\", \"light1\", null);\n\
	SIAddArrayElement(sInputObjs);\n\
	SetReference2(sInputObjs+\".lights[1]\", \"Neon\", null);\n\
	\n\
	// Return the lens shader\n\
	return oShaderList(0);\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>ConnectLensShader2 Example</h3>\n\
<div><p><a name=\"ConnectLensShader2\"> </a><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">function ConnectLensShader2( in_preset )\n\
{\n\
	NewScene( null, false );\n\
	var obj = Application.ActiveSceneRoot.AddCamera( \"Telephoto\", \"MyTestNode\" );\n\
	obj.AddMaterial( in_preset, true, \"MyTestNode\" ); \n\
	var oShader = Dictionary.GetObject(\"MyTestNode.camera.MyTestNode\");\n\
	return oShader;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";