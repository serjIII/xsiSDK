var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Environment Shader Presets</title>\n\
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
            <h1>Environment Shader Presets</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Environment Shader Presets</h2>\n\
\n\
<div>\n\
	<p>\n\
				List of available Environment <a href=\"#!/url=./si_om/Shader.html\">Shader</a> presets. Environment shaders are used instead of surface shaders when a visible ray leaves the scene entirely without intersecting an object or when the maximum ray depth is reached. For example, an environment shader might evaluate a texture mapped on an imaginary infinite sphere enclosing the scene. Environment shaders can also be used to light a scene with a high dynamic range image. <br /><br />For more information, see <a href=\"http://softimage.wiki.softimage.com/xsidocs/tex_maps_CreatingaReflectionEnvironmentMap.htm\">the user guide</a></p>\n\
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
		<td class=\"name\">Environment\\Cubic_mapping_6.Preset</td>\n\
		<td><a name=\"EnvironmentCubic_mapping_6\"></a>Six Map Cubic Environment mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_env_cubic6_1_0.html\">Softimage.sib_env_cubic6.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrEnvironmentPresets.html\">ConnectEnvironmentShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Environment\\Environment.Preset</td>\n\
		<td><a name=\"EnvironmentEnvironment\"></a>sib_environment output parameter<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_environment_1_0.html\">Softimage.sib_environment.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrEnvironmentPresets.html\">ConnectEnvironmentShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Environment\\Tool\\Cubic1.Preset</td>\n\
		<td><a name=\"EnvironmentToolCubic1\"></a>mib Lookup Cube 1 mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_mib_lookup_cube1_1_0.html\">Softimage.mib_lookup_cube1.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrEnvironmentPresets.html\">ConnectEnvironmentShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Environment\\Tool\\Cubic6.Preset</td>\n\
		<td><a name=\"EnvironmentToolCubic6\"></a>mib Lookup Cube 6 mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_mib_lookup_cube6_1_0.html\">Softimage.mib_lookup_cube6.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrEnvironmentPresets.html\">ConnectEnvironmentShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Environment\\Tool\\Spherical.Preset</td>\n\
		<td><a name=\"EnvironmentToolSpherical\"></a>mib Lookup Spherical mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_mib_lookup_spherical_1_0.html\">Softimage.mib_lookup_spherical.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrEnvironmentPresets.html\">ConnectEnvironmentShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Environment\\mental images\\mia_Environment_Blur.Preset</td>\n\
		<td><a name=\"Environmentmental imagesmia_Environment_Blur\"></a>mia Environment Blur mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_mia_envblur_1_0.html\">Softimage.mia_envblur.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrEnvironmentPresets.html\">ConnectEnvironmentShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Environment\\mental images\\mia_Physical_Sky.Preset</td>\n\
		<td><a name=\"Environmentmental imagesmia_Physical_Sky\"></a>mia Physical Sky mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_mia_physicalsky_1_0.html\">Softimage.mia_physicalsky.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrEnvironmentPresets.html\">ConnectEnvironmentShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Environment\\mental images\\mip_Gray_Ball.Preset</td>\n\
		<td><a name=\"Environmentmental imagesmip_Gray_Ball\"></a>mip Grayball mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_mip_grayball_1_0.html\">Softimage.mip_grayball.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrEnvironmentPresets.html\">ConnectEnvironmentShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Environment\\mental images\\mip_Mirror_Ball.Preset</td>\n\
		<td><a name=\"Environmentmental imagesmip_Mirror_Ball\"></a>mip Mirrorball mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_mip_mirrorball_1_0.html\">Softimage.mip_mirrorball.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrEnvironmentPresets.html\">ConnectEnvironmentShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Environment\\mental images\\mip_Rayswitch_Environment.Preset</td>\n\
		<td><a name=\"Environmentmental imagesmip_Rayswitch_Environment\"></a>mip Rayswitch Environment mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_mip_rayswitch_environment_1_0.html\">Softimage.mip_rayswitch_environment.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrEnvironmentPresets.html\">ConnectEnvironmentShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Environment\\soft3d\\Legacy_Atmosphere.Preset</td>\n\
		<td><a name=\"Environmentsoft3dLegacy_Atmosphere\"></a>ozlib_env_r_atm mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_Env_Atmosphere_tx3_1_0.html\">Softimage.Env_Atmosphere_tx3.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrEnvironmentPresets.html\">ConnectEnvironmentShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Environment\\soft3d\\Legacy_Ball.Preset</td>\n\
		<td><a name=\"Environmentsoft3dLegacy_Ball\"></a>oz_env_r_ball mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_ENV_BALL_TX3_1_0.html\">Softimage.ENV_BALL_TX3.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrEnvironmentPresets.html\">ConnectEnvironmentShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Environment\\soft3d\\Legacy_Cubic.Preset</td>\n\
		<td><a name=\"Environmentsoft3dLegacy_Cubic\"></a>oz_env_r_cubic mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_Env_Cubic_tx3_1_0.html\">Softimage.Env_Cubic_tx3.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrEnvironmentPresets.html\">ConnectEnvironmentShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Environment\\soft3d\\Legacy_Day.Preset</td>\n\
		<td><a name=\"Environmentsoft3dLegacy_Day\"></a>oz_env_r_horizon_day mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_Env_Horizon_Day_tx3_1_0.html\">Softimage.Env_Horizon_Day_tx3.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrEnvironmentPresets.html\">ConnectEnvironmentShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Environment\\soft3d\\Legacy_Map.Preset</td>\n\
		<td><a name=\"Environmentsoft3dLegacy_Map\"></a>oz_env_r_horizon_map mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_Env_Horizon_Map_tx3_1_0.html\">Softimage.Env_Horizon_Map_tx3.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrEnvironmentPresets.html\">ConnectEnvironmentShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Environment\\soft3d\\Legacy_Night.Preset</td>\n\
		<td><a name=\"Environmentsoft3dLegacy_Night\"></a>oz_env_r_horizon_night mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_Env_Horizon_Night_tx3_1_0.html\">Softimage.Env_Horizon_Night_tx3.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrEnvironmentPresets.html\">ConnectEnvironmentShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Environment\\soft3d\\Legacy_Sphere.Preset</td>\n\
		<td><a name=\"Environmentsoft3dLegacy_Sphere\"></a>oz_env_r_sphere mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_Env_Sphere_tx3_1_0.html\">Softimage.Env_Sphere_tx3.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrEnvironmentPresets.html\">ConnectEnvironmentShader Example</a>		</td>\n\
	</tr>\n\
</table>\n\
<br />\n\
\n\
</div>\n\
<hr width=\"100%\" />\n\
<h3>ConnectEnvironmentShader Example</h3>\n\
<div><p><a name=\"ConnectEnvironmentShader\"> </a><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">function ConnectEnvironmentShader( in_preset )\n\
{\n\
	NewScene( null, false );\n\
	var obj = Application.ActiveSceneRoot.AddGeometry(\"Cube\",\"MeshSurface\");\n\
	Application.Selection.SetAsText(obj);\n\
	var oShader = SIApplyShaderToCnxPoint(in_preset, obj.Material.environment, null, false);\n\
	if (!oShader) { return null; }\n\
	return (oShader.Type == \"XSICollection\") ? oShader(0) : oShader;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>ConnectEnvironmentShader2 Example</h3>\n\
<div><p><a name=\"ConnectEnvironmentShader2\"> </a><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">function ConnectEnvironmentShader2( in_preset )\n\
{\n\
	NewScene( null, false );\n\
	var obj = ActiveProject.ActiveScene.PassContainer.AddPass( \"Pass\", \"MyTestNode\" );\n\
	SIApplyShaderToCnxPoint(in_preset, \"Passes.MyTestNode.EnvironmentShaderStack\", null, false);\n\
	var oShader = obj.GetAllShaders();\n\
	return (Application.ClassName(oShaderColl) == \"ShaderCollection\") \n\
		? oShaderColl(0) : oShaderColl;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";