var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Output Shader Presets</title>\n\
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
            <h1>Output Shader Presets</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Output Shader Presets</h2>\n\
\n\
<div>\n\
	<p>\n\
				List of available Output <a href=\"#!/url=./si_om/Shader.html\">Shader</a> presets. Output shaders operate on images after they are rendered but before they are written to a file. They can perform operations such as filtering, blurring, compositing with other files, and writing to different file formats. \n\
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
		<td class=\"name\">Output\\2D_auto_depth_of_field.Preset</td>\n\
		<td><a name=\"Output2D_auto_depth_of_field\"></a>si_auto_depth_of_field mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_auto_dof_out_1_0.html\">Softimage.auto_dof_out.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrOutputPresets.html\">ConnectOutputShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Output\\2D_background_color.Preset</td>\n\
		<td><a name=\"Output2D_background_color\"></a>Background Color<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_bg_color_out_1_0.html\">Softimage.bg_color_out.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrOutputPresets.html\">ConnectOutputShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Output\\2D_background_pic.Preset</td>\n\
		<td><a name=\"Output2D_background_pic\"></a>Background Picture<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_bg_pic_out_1_0.html\">Softimage.bg_pic_out.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrOutputPresets.html\">ConnectOutputShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Output\\2D_contour.Preset</td>\n\
		<td><a name=\"Output2D_contour\"></a>si_contour mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_contour_out_1_0.html\">Softimage.contour_out.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrOutputPresets.html\">ConnectOutputShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Output\\2D_depth_cue.Preset</td>\n\
		<td><a name=\"Output2D_depth_cue\"></a>2D Depth Cue<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_depth_cue_1_0.html\">Softimage.sib_depth_cue.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrOutputPresets.html\">ConnectOutputShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Output\\2D_depth_of_field.Preset</td>\n\
		<td><a name=\"Output2D_depth_of_field\"></a>si_depth_of_field mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_dof_out_1_0.html\">Softimage.dof_out.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrOutputPresets.html\">ConnectOutputShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Output\\2D_fur.Preset</td>\n\
		<td><a name=\"Output2D_fur\"></a>Color Result<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_fur_1_0.html\">Softimage.sib_fur.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrOutputPresets.html\">ConnectOutputShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Output\\2D_glow.Preset</td>\n\
		<td><a name=\"Output2D_glow\"></a>oz_p_dglow mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_DGLOW_OUT_1_0.html\">Softimage.DGLOW_OUT.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrOutputPresets.html\">ConnectOutputShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Output\\2D_halo.Preset</td>\n\
		<td><a name=\"Output2D_halo\"></a>Halo Output Shader<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_halo_out_1_0.html\">Softimage.halo_out.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrOutputPresets.html\">ConnectOutputShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Output\\Flatten_depth.Preset</td>\n\
		<td><a name=\"OutputFlatten_depth\"></a>sib_flatten_depth output parameter<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_flatten_depth_1_0.html\">Softimage.sib_flatten_depth.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrOutputPresets.html\">ConnectOutputShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Output\\mental images\\Lume_Adjustments.Preset</td>\n\
		<td><a name=\"Outputmental imagesLume_Adjustments\"></a>Lume Adjustments mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_Lume_Adjustments_1_0.html\">Softimage.Lume_Adjustments.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrOutputPresets.html\">ConnectOutputShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Output\\mental images\\Lume_Glare.Preset</td>\n\
		<td><a name=\"Outputmental imagesLume_Glare\"></a>Lume_Glare output parameter<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_Lume_Glare_1_0.html\">Softimage.Lume_Glare.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrOutputPresets.html\">ConnectOutputShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Output\\mental images\\mip_Motion_Blur.Preset</td>\n\
		<td><a name=\"Outputmental imagesmip_Motion_Blur\"></a>mip Motionblur mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_mip_motionblur_1_0.html\">Softimage.mip_motionblur.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrOutputPresets.html\">ConnectOutputShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Output\\mental images\\mip_Motion_Vector.Preset</td>\n\
		<td><a name=\"Outputmental imagesmip_Motion_Vector\"></a>mip Motion Vector mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_mip_motion_vector_1_0.html\">Softimage.mip_motion_vector.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrOutputPresets.html\">ConnectOutputShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Output\\sib_rendermap_postprocess.Preset</td>\n\
		<td><a name=\"Outputsib_rendermap_postprocess\"></a>Rendermap Post-Processing mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_rendermap_postprocess_1_0.html\">Softimage.sib_rendermap_postprocess.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrOutputPresets.html\">ConnectOutputShader Example</a>		</td>\n\
	</tr>\n\
</table>\n\
<br />\n\
\n\
</div>\n\
<hr width=\"100%\" />\n\
<h3>ConnectOutputShader Example</h3>\n\
<div><p><a name=\"ConnectOutputShader\"> </a><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">function ConnectOutputShader( in_preset )\n\
{\n\
	NewScene( null, false );\n\
	Application.ActiveSceneRoot.AddGeometry(\"Cylinder\", \"MeshSurface\");\n\
	var obj = ActiveProject.ActiveScene.PassContainer.AddPass(\"Pass\", \"MyTestPass\");\n\
	var oShader = SIApplyShaderToCnxPoint(in_preset, \"Passes.MyTestPass.OutputShaderStack\", null, false);\n\
	if (!oShader) { return null; }\n\
	return (oShader.Type == \"XSICollection\") ? oShader(0) : oShader;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>ConnectOutputShader2 Example</h3>\n\
<div><p><a name=\"ConnectOutputShader2\"> </a><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">function ConnectOutputShader2( in_preset )\n\
{\n\
	NewScene( null, false );\n\
	var obj = ActiveProject.ActiveScene.PassContainer.AddPass( \"Pass\", \"MyTestNode\" );\n\
	SIApplyShaderToCnxPoint(in_preset, \"Passes.MyTestNode.OutputShaderStack\", null, false);\n\
	var oShaderColl = obj.GetAllShaders();\n\
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