var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Texture Shader Presets</title>\n\
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
            <h1>Texture Shader Presets</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Texture Shader Presets</h2>\n\
\n\
<div>\n\
	<p>\n\
				List of available Texture <a href=\"#!/url=./si_om/Shader.html\">Shader</a> presets. 2D texture shaders apply a two-dimensional texture onto an object, just as 3D texture shaders implement a three-dimensional texture into an object. They are used by a surface shader when an object has a defined texture. Texture shaders also include the necessary shaders to create bump maps. <br /><br />For more information, see <a href=\"http://softimage.wiki.softimage.com/xsidocs/tex_concept_HowSurfaceandTextureShadersWorkTogether.htm\">the user guide</a></p>\n\
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
		<td class=\"name\">Texture\\Attribute\\Attribute_Boolean.Preset</td>\n\
		<td><a name=\"TextureAttributeAttribute_Boolean\"></a>Boolean Attribute mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_attribute_boolean_1_0.html\">Softimage.sib_attribute_boolean.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Attribute\\Attribute_Color.Preset</td>\n\
		<td><a name=\"TextureAttributeAttribute_Color\"></a>Color Attribute mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_attribute_color_1_0.html\">Softimage.sib_attribute_color.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Attribute\\Attribute_Integer.Preset</td>\n\
		<td><a name=\"TextureAttributeAttribute_Integer\"></a>Integer Attribute mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_attribute_integer_1_0.html\">Softimage.sib_attribute_integer.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Attribute\\Attribute_Scalar.Preset</td>\n\
		<td><a name=\"TextureAttributeAttribute_Scalar\"></a>Scalar Attribute mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_attribute_scalar_1_0.html\">Softimage.sib_attribute_scalar.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Attribute\\Attribute_Transform.Preset</td>\n\
		<td><a name=\"TextureAttributeAttribute_Transform\"></a>Transform Attribute mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_attribute_transform_1_0.html\">Softimage.sib_attribute_transform.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Attribute\\Attribute_Vector.Preset</td>\n\
		<td><a name=\"TextureAttributeAttribute_Vector\"></a>Vector Attribute mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_attribute_vector_1_0.html\">Softimage.sib_attribute_vector.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Bump\\Bump_Flakes.Preset</td>\n\
		<td><a name=\"TextureBumpBump_Flakes\"></a>mi Bump Flakes mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_mi_bump_flakes_1_0.html\">Softimage.mi_bump_flakes.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Bump\\Bumpmap.Preset</td>\n\
		<td><a name=\"TextureBumpBumpmap\"></a>Bump Map mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_zbump_1_0.html\">Softimage.sib_zbump.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Bump\\Bumpmap_Old.Preset</td>\n\
		<td><a name=\"TextureBumpBumpmap_Old\"></a>Bump Add mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_bump_1_0.html\">Softimage.sib_bump.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Bump\\Bumpmap_generator.Preset</td>\n\
		<td><a name=\"TextureBumpBumpmap_generator\"></a>Bumpmap generator<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_bumpmap_gen_1_0.html\">Softimage.sib_bumpmap_gen.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Bump\\Rounded_Corners.Preset</td>\n\
		<td><a name=\"TextureBumpRounded_Corners\"></a>mia Round Corners mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_mia_roundcorners_1_0.html\">Softimage.mia_roundcorners.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Bump\\XSINormalMap.Preset</td>\n\
		<td><a name=\"TextureBumpXSINormalMap\"></a>XSINormalMap output parameter<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_XSINormalMap_1_0.html\">Softimage.XSINormalMap.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Bump\\XSINormalMap2.Preset</td>\n\
		<td><a name=\"TextureBumpXSINormalMap2\"></a>XSINormalMap output parameter<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_XSINormalMap2_1_0.html\">Softimage.XSINormalMap2.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Bump\\XSINormalMap3.Preset</td>\n\
		<td><a name=\"TextureBumpXSINormalMap3\"></a>XSINormalMap3 output parameter<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_XSINormalMap3_1_0.html\">Softimage.XSINormalMap3.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Cell.Preset</td>\n\
		<td><a name=\"TextureCell\"></a>Cell<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_txt3dcellular_v3_1_0.html\">Softimage.txt3d-cellular_v3.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Cell_Scalar.Preset</td>\n\
		<td><a name=\"TextureCell_Scalar\"></a>Cell Scalar mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_BA_cell_scl_1_0.html\">Softimage.BA_cell_scl.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Checkerboard.Preset</td>\n\
		<td><a name=\"TextureCheckerboard\"></a>Checkerboard mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_txt3dcheckerboard_1_0.html\">Softimage.txt3d-checkerboard.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Cloud.Preset</td>\n\
		<td><a name=\"TextureCloud\"></a>Cloud<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_txt3dcloud_1_0.html\">Softimage.txt3d-cloud.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Color_Channels\\Color2alpha.Preset</td>\n\
		<td><a name=\"TextureColor_ChannelsColor2alpha\"></a>mib Color Alpha mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_mib_color_alpha_1_0.html\">Softimage.mib_color_alpha.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Color_Channels\\HLSA_combine.Preset</td>\n\
		<td><a name=\"TextureColor_ChannelsHLSA_combine\"></a>Combine HLSA mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_hlsa_combine_1_0.html\">Softimage.sib_hlsa_combine.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Color_Channels\\HSVA_combine.Preset</td>\n\
		<td><a name=\"TextureColor_ChannelsHSVA_combine\"></a>Combine HSVA mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_hsva_combine_1_0.html\">Softimage.sib_hsva_combine.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Color_Channels\\Pick_channel.Preset</td>\n\
		<td><a name=\"TextureColor_ChannelsPick_channel\"></a>Color Pick Channel mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_channel_picker_1_0.html\">Softimage.sib_channel_picker.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Color_Channels\\RGBA_combine.Preset</td>\n\
		<td><a name=\"TextureColor_ChannelsRGBA_combine\"></a>Scalars To Color mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_color_combine_1_0.html\">Softimage.sib_color_combine.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Color_Matte.Preset</td>\n\
		<td><a name=\"TextureColor_Matte\"></a>Color Matte mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_color_transparency_matte_1_0.html\">Softimage.sib_color_transparency_matte.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Constant.Preset</td>\n\
		<td><a name=\"TextureConstant\"></a>Constant<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_matte_1_0.html\">Softimage.sib_matte.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Constant_Black.Preset</td>\n\
		<td><a name=\"TextureConstant_Black\"></a>Constant<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_matte_1_0.html\">Softimage.sib_matte.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Conversion\\Color_to_Boolean.Preset</td>\n\
		<td><a name=\"TextureConversionColor_to_Boolean\"></a>Color To Boolean mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_color_to_boolean_1_0.html\">Softimage.sib_color_to_boolean.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Conversion\\Color_to_Scalar.Preset</td>\n\
		<td><a name=\"TextureConversionColor_to_Scalar\"></a>Color To Scalar mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_color_to_scalar_1_0.html\">Softimage.sib_color_to_scalar.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Conversion\\Color_to_Vector.Preset</td>\n\
		<td><a name=\"TextureConversionColor_to_Vector\"></a>Color To Vector mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_color_to_vector_1_0.html\">Softimage.sib_color_to_vector.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Conversion\\HSV_to_RGB.Preset</td>\n\
		<td><a name=\"TextureConversionHSV_to_RGB\"></a>HSV To RGB mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_color_hsv_to_rgb_1_0.html\">Softimage.sib_color_hsv_to_rgb.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Conversion\\Integer_to_Scalar.Preset</td>\n\
		<td><a name=\"TextureConversionInteger_to_Scalar\"></a>Integer To Scalar mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_integer_to_scalar_1_0.html\">Softimage.sib_integer_to_scalar.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Conversion\\RGB_to_HSV.Preset</td>\n\
		<td><a name=\"TextureConversionRGB_to_HSV\"></a>RGBA to HSVA<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_color_rgb_to_hsv_1_0.html\">Softimage.sib_color_rgb_to_hsv.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Conversion\\Scalar_to_Boolean.Preset</td>\n\
		<td><a name=\"TextureConversionScalar_to_Boolean\"></a>Scalar To Boolean mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_scalar_to_boolean_1_0.html\">Softimage.sib_scalar_to_boolean.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Conversion\\Scalar_to_Color.Preset</td>\n\
		<td><a name=\"TextureConversionScalar_to_Color\"></a>Scalar To Color mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_scalar_to_color_1_0.html\">Softimage.sib_scalar_to_color.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Conversion\\Scalar_to_Integer.Preset</td>\n\
		<td><a name=\"TextureConversionScalar_to_Integer\"></a>Scalar To Integer mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_scalar_to_integer_1_0.html\">Softimage.sib_scalar_to_integer.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Conversion\\Scalars_to_Vector.Preset</td>\n\
		<td><a name=\"TextureConversionScalars_to_Vector\"></a>Scalars To Vector mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_scalars_to_vector_1_0.html\">Softimage.sib_scalars_to_vector.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Conversion\\Vector_coordinate_convertor.Preset</td>\n\
		<td><a name=\"TextureConversionVector_coordinate_convertor\"></a>Vector Space Conversion<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_space_conversion_1_0.html\">Softimage.sib_space_conversion.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Conversion\\Vector_to_Color.Preset</td>\n\
		<td><a name=\"TextureConversionVector_to_Color\"></a>Vector To Color mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_vector_to_color_1_0.html\">Softimage.sib_vector_to_color.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Conversion\\Vector_to_Scalar.Preset</td>\n\
		<td><a name=\"TextureConversionVector_to_Scalar\"></a>Vector To Scalar mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_vector_to_scalar_1_0.html\">Softimage.sib_vector_to_scalar.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Fabric.Preset</td>\n\
		<td><a name=\"TextureFabric\"></a>Fabric<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_txt2dfabric_1_0.html\">Softimage.txt2d-fabric.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Flagstone.Preset</td>\n\
		<td><a name=\"TextureFlagstone\"></a>Flagstone<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_txt3dflagstone_v3_1_0.html\">Softimage.txt3d-flagstone_v3.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Fractal.Preset</td>\n\
		<td><a name=\"TextureFractal\"></a>Fractal<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_txt3dfractal_v3_1_0.html\">Softimage.txt3d-fractal_v3.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Fractal_Scalar.Preset</td>\n\
		<td><a name=\"TextureFractal_Scalar\"></a>Fractal Scalar mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_BA_fractal4d2_scl_1_0.html\">Softimage.BA_fractal4d2_scl.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Gradient.Preset</td>\n\
		<td><a name=\"TextureGradient\"></a>Gradient<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_txt2dgradient_v2_1_0.html\">Softimage.txt2d-gradient_v2.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Grid.Preset</td>\n\
		<td><a name=\"TextureGrid\"></a>Grid<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_txt2dgrid_1_0.html\">Softimage.txt2d-grid.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Illumination\\Photon_irradiance.Preset</td>\n\
		<td><a name=\"TextureIlluminationPhoton_irradiance\"></a>Photon Irradiance mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_photon_matte_1_0.html\">Softimage.sib_photon_matte.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Image.Preset</td>\n\
		<td><a name=\"TextureImage\"></a>Image 2D<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_txt2dimageexplicit_1_0.html\">Softimage.txt2d-image-explicit.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Image_Processing\\Color_Balance.Preset</td>\n\
		<td><a name=\"TextureImage_ProcessingColor_Balance\"></a>sib_color_balance output parameter<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_color_balance_1_0.html\">Softimage.sib_color_balance.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Image_Processing\\Color_correction.Preset</td>\n\
		<td><a name=\"TextureImage_ProcessingColor_correction\"></a>Color Correction mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_color_correction_1_0.html\">Softimage.sib_color_correction.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Image_Processing\\HLS_Adjust.Preset</td>\n\
		<td><a name=\"TextureImage_ProcessingHLS_Adjust\"></a>sib_color_hls_adjust output parameter<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_color_hls_adjust_1_0.html\">Softimage.sib_color_hls_adjust.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Image_Processing\\Intensity.Preset</td>\n\
		<td><a name=\"TextureImage_ProcessingIntensity\"></a>mib Color Intensity mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_mib_color_intensity_1_0.html\">Softimage.mib_color_intensity.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Image_Processing\\Invert.Preset</td>\n\
		<td><a name=\"TextureImage_ProcessingInvert\"></a>sib_color_invert mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_color_invert_1_0.html\">Softimage.sib_color_invert.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Image_Processing\\RGBA_keyer.Preset</td>\n\
		<td><a name=\"TextureImage_ProcessingRGBA_keyer\"></a>Color Keyer mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_rgba_keyer_1_0.html\">Softimage.rgba_keyer.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Image_Processing\\Scalar_Invert.Preset</td>\n\
		<td><a name=\"TextureImage_ProcessingScalar_Invert\"></a>Scalar Invert mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_scalar_invert_1_0.html\">Softimage.sib_scalar_invert.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Map_lookup_boolean.Preset</td>\n\
		<td><a name=\"TextureMap_lookup_boolean\"></a>Boolean Map Lookup mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_map_lookup_boolean_1_0.html\">Softimage.map_lookup_boolean.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Map_lookup_color.Preset</td>\n\
		<td><a name=\"TextureMap_lookup_color\"></a>Color Map Lookup mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_map_lookup_color_1_0.html\">Softimage.map_lookup_color.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Map_lookup_integer.Preset</td>\n\
		<td><a name=\"TextureMap_lookup_integer\"></a>Integer Map Lookup mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_map_lookup_integer_1_0.html\">Softimage.map_lookup_integer.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Map_lookup_scalar.Preset</td>\n\
		<td><a name=\"TextureMap_lookup_scalar\"></a>Scalar Map Lookup mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_map_lookup_scalar_1_0.html\">Softimage.map_lookup_scalar.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Map_lookup_vector.Preset</td>\n\
		<td><a name=\"TextureMap_lookup_vector\"></a>Vector Map Lookup mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_map_lookup_vector_1_0.html\">Softimage.map_lookup_vector.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Marble.Preset</td>\n\
		<td><a name=\"TextureMarble\"></a>Marble<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_txt3dmarble_1_0.html\">Softimage.txt3d-marble.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Math\\Average.Preset</td>\n\
		<td><a name=\"TextureMathAverage\"></a>mib Color Average mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_mib_color_average_1_0.html\">Softimage.mib_color_average.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Math\\Boolean_Math_Logic.Preset</td>\n\
		<td><a name=\"TextureMathBoolean_Math_Logic\"></a>Boolean Logic Math mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_boolean_math_logic_1_0.html\">Softimage.sib_boolean_math_logic.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Math\\Boolean_negate.Preset</td>\n\
		<td><a name=\"TextureMathBoolean_negate\"></a>Boolean Invert mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_boolean_negate_1_0.html\">Softimage.sib_boolean_negate.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Math\\Change_range.Preset</td>\n\
		<td><a name=\"TextureMathChange_range\"></a>Scalar Change Range mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_interp_linear_1_0.html\">Softimage.sib_interp_linear.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Math\\Color_Math_Basic.Preset</td>\n\
		<td><a name=\"TextureMathColor_Math_Basic\"></a>Color Basic Math mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_color_math_basic_1_0.html\">Softimage.sib_color_math_basic.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Math\\Color_Math_Curve.Preset</td>\n\
		<td><a name=\"TextureMathColor_Math_Curve\"></a>Color Curve Math mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_color_math_curve_1_0.html\">Softimage.sib_color_math_curve.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Math\\Color_Math_Exponent.Preset</td>\n\
		<td><a name=\"TextureMathColor_Math_Exponent\"></a>Color Exponent Math mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_color_math_exponent_1_0.html\">Softimage.sib_color_math_exponent.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Math\\Color_Math_Logic.Preset</td>\n\
		<td><a name=\"TextureMathColor_Math_Logic\"></a>Color Logic Math mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_color_math_logic_1_0.html\">Softimage.sib_color_math_logic.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Math\\Color_Math_Unary.Preset</td>\n\
		<td><a name=\"TextureMathColor_Math_Unary\"></a>Color Unary Math mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_color_math_unary_1_0.html\">Softimage.sib_color_math_unary.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Math\\Color_Smooth_Range.Preset</td>\n\
		<td><a name=\"TextureMathColor_Smooth_Range\"></a>Color Smooth Range mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_color_smoothrange_1_0.html\">Softimage.sib_color_smoothrange.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Math\\Exponent_falloff.Preset</td>\n\
		<td><a name=\"TextureMathExponent_falloff\"></a>Exponential Interpolation<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_atten_exp_1_0.html\">Softimage.sib_atten_exp.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Math\\Inrange.Preset</td>\n\
		<td><a name=\"TextureMathInrange\"></a>Color In Range mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_color_inrange_1_0.html\">Softimage.sib_color_inrange.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Math\\Linear_falloff.Preset</td>\n\
		<td><a name=\"TextureMathLinear_falloff\"></a>Linear Interpolation<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_atten_linear_1_0.html\">Softimage.sib_atten_linear.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Math\\Scalar_Math_Basic.Preset</td>\n\
		<td><a name=\"TextureMathScalar_Math_Basic\"></a>Scalar Basic Math mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_scalar_math_basic_1_0.html\">Softimage.sib_scalar_math_basic.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Math\\Scalar_Math_Curve.Preset</td>\n\
		<td><a name=\"TextureMathScalar_Math_Curve\"></a>Scalar Curve Math mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_scalar_math_curve_1_0.html\">Softimage.sib_scalar_math_curve.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Math\\Scalar_Math_Exponent.Preset</td>\n\
		<td><a name=\"TextureMathScalar_Math_Exponent\"></a>Scalar Exponent Math mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_scalar_math_exponent_1_0.html\">Softimage.sib_scalar_math_exponent.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Math\\Scalar_Math_Logic.Preset</td>\n\
		<td><a name=\"TextureMathScalar_Math_Logic\"></a>Scalar Logic Math mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_scalar_math_logic_1_0.html\">Softimage.sib_scalar_math_logic.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Math\\Scalar_Math_Unary.Preset</td>\n\
		<td><a name=\"TextureMathScalar_Math_Unary\"></a>Scalar Unary Math mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_scalar_math_unary_1_0.html\">Softimage.sib_scalar_math_unary.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Math\\Scalar_Multi_Math.Preset</td>\n\
		<td><a name=\"TextureMathScalar_Multi_Math\"></a>BA_fast_math output parameter<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_BA_fast_math_1_0.html\">Softimage.BA_fast_math.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Math\\Scalar_Smooth_Range.Preset</td>\n\
		<td><a name=\"TextureMathScalar_Smooth_Range\"></a>Scalar Smooth Range mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_scalar_smoothrange_1_0.html\">Softimage.sib_scalar_smoothrange.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Math\\Scalar_inrange.Preset</td>\n\
		<td><a name=\"TextureMathScalar_inrange\"></a>Scalar In Range mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_scalar_inrange_1_0.html\">Softimage.sib_scalar_inrange.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Math\\Vector_math_scalar.Preset</td>\n\
		<td><a name=\"TextureMathVector_math_scalar\"></a>Vector-Scalar Math mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_vector_math_scalar_1_0.html\">Softimage.sib_vector_math_scalar.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Math\\Vector_math_vector.Preset</td>\n\
		<td><a name=\"TextureMathVector_math_vector\"></a>Vector-Vector Math mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_vector_math_vector_1_0.html\">Softimage.sib_vector_math_vector.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Mixers\\Color_interpolate.Preset</td>\n\
		<td><a name=\"TextureMixersColor_interpolate\"></a>mib Color Interpolate mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_mib_color_interpolate_1_0.html\">Softimage.mib_color_interpolate.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Mixers\\Gradient.Preset</td>\n\
		<td><a name=\"TextureMixersGradient\"></a>Gradient output parameter<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_color_gradient_1_0.html\">Softimage.sib_color_gradient.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Mixers\\Mix_2colors.Preset</td>\n\
		<td><a name=\"TextureMixersMix_2colors\"></a>Color 2 Channel Mixer mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_color_2mix_1_0.html\">Softimage.sib_color_2mix.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Mixers\\Mix_8colors.Preset</td>\n\
		<td><a name=\"TextureMixersMix_8colors\"></a>Color 8 Channel Mixer mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_color_8mix_1_0.html\">Softimage.sib_color_8mix.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Mixers\\Toon_Node_Mix.Preset</td>\n\
		<td><a name=\"TextureMixersToon_Node_Mix\"></a>sitoon_node_mix output parameter<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sitoon_node_mix_1_0.html\">Softimage.sitoon_node_mix.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Particle\\Particle_Gradient.Preset</td>\n\
		<td><a name=\"TextureParticleParticle_Gradient\"></a>BA_particle_gradient_phen output parameter<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_BA_particle_gradient_phen_1_0.html\">Softimage.BA_particle_gradient_phen.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Particle\\Particle_Gradient_Control.Preset</td>\n\
		<td><a name=\"TextureParticleParticle_Gradient_Control\"></a>BA_particle_gradientcontrol output parameter<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_BA_particle_gradientcontrol_1_0.html\">Softimage.BA_particle_gradientcontrol.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Particle\\Particle_Info.Preset</td>\n\
		<td><a name=\"TextureParticleParticle_Info\"></a>BA_particle_info output parameter<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_BA_particle_info_1_0.html\">Softimage.BA_particle_info.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Particle_Old\\Particle_Billboard.Preset</td>\n\
		<td><a name=\"TextureParticle_OldParticle_Billboard\"></a>Particle Billboard mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_pt_billboard_1_0.html\">Softimage.pt_billboard.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Particle_Old\\Particle_Blob.Preset</td>\n\
		<td><a name=\"TextureParticle_OldParticle_Blob\"></a>Particle Blob mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_pt_blob_1_0.html\">Softimage.pt_blob.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Particle_Old\\Particle_Color.Preset</td>\n\
		<td><a name=\"TextureParticle_OldParticle_Color\"></a>Particle Get Color mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_pt_get_color_1_0.html\">Softimage.pt_get_color.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Particle_Old\\Particle_Gradient.Preset</td>\n\
		<td><a name=\"TextureParticle_OldParticle_Gradient\"></a>Particle Gradient<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_pt_gradient_1_0.html\">Softimage.pt_gradient.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Particle_Old\\Particle_Scalar.Preset</td>\n\
		<td><a name=\"TextureParticle_OldParticle_Scalar\"></a>Particle Get Scalar mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_pt_get_scalar_1_0.html\">Softimage.pt_get_scalar.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Particle_Old\\Particle_Shape.Preset</td>\n\
		<td><a name=\"TextureParticle_OldParticle_Shape\"></a>Particle Shape mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_pt_shape_1_0.html\">Softimage.pt_shape.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Particle_Old\\Particle_Sphere.Preset</td>\n\
		<td><a name=\"TextureParticle_OldParticle_Sphere\"></a>Particle Sphere mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_pt_sphere_1_0.html\">Softimage.pt_sphere.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Particle_Old\\Particle_Sprite.Preset</td>\n\
		<td><a name=\"TextureParticle_OldParticle_Sprite\"></a>Particle Sprite mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_pt_sprite_1_0.html\">Softimage.pt_sprite.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Particle_Old\\Particle_Vector.Preset</td>\n\
		<td><a name=\"TextureParticle_OldParticle_Vector\"></a>Particle Get Vector mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_pt_get_vector_1_0.html\">Softimage.pt_get_vector.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Raytracing\\Opaque.Preset</td>\n\
		<td><a name=\"TextureRaytracingOpaque\"></a>mib Opacity mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_mib_opacity_1_0.html\">Softimage.mib_opacity.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Raytracing\\Photon.Preset</td>\n\
		<td><a name=\"TextureRaytracingPhoton\"></a>mib Photon Basic mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_mib_photon_basic_1_0.html\">Softimage.mib_photon_basic.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Raytracing\\Photon_render_tree.Preset</td>\n\
		<td><a name=\"TextureRaytracingPhoton_render_tree\"></a>Photon Material mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_illum_photon_1_0.html\">Softimage.sib_illum_photon.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Raytracing\\Reflection.Preset</td>\n\
		<td><a name=\"TextureRaytracingReflection\"></a>mib Reflection mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_mib_reflect_1_0.html\">Softimage.mib_reflect.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Raytracing\\Reflection_diffuse.Preset</td>\n\
		<td><a name=\"TextureRaytracingReflection_diffuse\"></a>Diffuse Reflection<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_diffuse_reflection_1_0.html\">Softimage.sib_diffuse_reflection.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Raytracing\\Refraction.Preset</td>\n\
		<td><a name=\"TextureRaytracingRefraction\"></a>mib Refraction mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_mib_refract_1_0.html\">Softimage.mib_refract.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Raytracing\\Thickness.Preset</td>\n\
		<td><a name=\"TextureRaytracingThickness\"></a>Thickness mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_thickness_1_0.html\">Softimage.sib_thickness.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Raytracing\\Transparency.Preset</td>\n\
		<td><a name=\"TextureRaytracingTransparency\"></a>Transparency mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_transparency_1_0.html\">Softimage.sib_transparency.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Render_Channels\\Boolean_StoreInChannel.Preset</td>\n\
		<td><a name=\"TextureRender_ChannelsBoolean_StoreInChannel\"></a>Boolean Render Channel mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_boolean_storeinchannel_1_0.html\">Softimage.sib_boolean_storeinchannel.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Render_Channels\\Color_StoreInChannel.Preset</td>\n\
		<td><a name=\"TextureRender_ChannelsColor_StoreInChannel\"></a>Color Render Channel mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_color_storeinchannel_1_0.html\">Softimage.sib_color_storeinchannel.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Render_Channels\\Integer_StoreInChannel.Preset</td>\n\
		<td><a name=\"TextureRender_ChannelsInteger_StoreInChannel\"></a>Integer Render Channel mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_integer_storeinchannel_1_0.html\">Softimage.sib_integer_storeinchannel.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Render_Channels\\Scalar_StoreInChannel.Preset</td>\n\
		<td><a name=\"TextureRender_ChannelsScalar_StoreInChannel\"></a>Scalar Render Channel mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_scalar_storeinchannel_1_0.html\">Softimage.sib_scalar_storeinchannel.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Render_Channels\\Vector_StoreInChannel.Preset</td>\n\
		<td><a name=\"TextureRender_ChannelsVector_StoreInChannel\"></a>Vector Render Channel mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_vector_storeinchannel_1_0.html\">Softimage.sib_vector_storeinchannel.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Ripple.Preset</td>\n\
		<td><a name=\"TextureRipple\"></a>Ripple<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_txt2dripple_v3_1_0.html\">Softimage.txt2d-ripple_v3.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Rock.Preset</td>\n\
		<td><a name=\"TextureRock\"></a>Rock<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_txt3drock_v3_1_0.html\">Softimage.txt3d-rock_v3.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\ScalarImage.Preset</td>\n\
		<td><a name=\"TextureScalarImage\"></a>Scalar Image mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_txt2dscalarimageexplicit_1_0.html\">Softimage.txt2d-scalarimage-explicit.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Scalar_Matte.Preset</td>\n\
		<td><a name=\"TextureScalar_Matte\"></a>Scalar Matte mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_scalar_transparency_matte_1_0.html\">Softimage.sib_scalar_transparency_matte.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Share\\Boolean_share.Preset</td>\n\
		<td><a name=\"TextureShareBoolean_share\"></a>Boolean Passthrough mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_boolean_passthrough_1_0.html\">Softimage.sib_boolean_passthrough.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Share\\Color_share.Preset</td>\n\
		<td><a name=\"TextureShareColor_share\"></a>Color Passthrough mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_color_passthrough_1_0.html\">Softimage.sib_color_passthrough.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Share\\Integer_share.Preset</td>\n\
		<td><a name=\"TextureShareInteger_share\"></a>Integer Passthrough mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_integer_passthrough_1_0.html\">Softimage.sib_integer_passthrough.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Share\\Scalar_share.Preset</td>\n\
		<td><a name=\"TextureShareScalar_share\"></a>Scalar Passthrough mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_scalar_passthrough_1_0.html\">Softimage.sib_scalar_passthrough.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Share\\Vector_share.Preset</td>\n\
		<td><a name=\"TextureShareVector_share\"></a>Vector Passthrough mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_vector_passthrough_1_0.html\">Softimage.sib_vector_passthrough.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Snow.Preset</td>\n\
		<td><a name=\"TextureSnow\"></a>Snow<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_txt3dsnow_1_0.html\">Softimage.txt3d-snow.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\State\\Color_savestate.Preset</td>\n\
		<td><a name=\"TextureStateColor_savestate\"></a>Color Save State mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_savestate_color_1_0.html\">Softimage.sib_savestate_color.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\State\\Scalar_savestate.Preset</td>\n\
		<td><a name=\"TextureStateScalar_savestate\"></a>Scalar Save State mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_savestate_scalar_1_0.html\">Softimage.sib_savestate_scalar.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\State\\Scalar_state.Preset</td>\n\
		<td><a name=\"TextureStateScalar_state\"></a>Scalar State mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_state_scalar_1_0.html\">Softimage.sib_state_scalar.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\State\\Vector_savestate.Preset</td>\n\
		<td><a name=\"TextureStateVector_savestate\"></a>Vector Save State mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_savestate_vector_1_0.html\">Softimage.sib_savestate_vector.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\State\\Vector_state.Preset</td>\n\
		<td><a name=\"TextureStateVector_state\"></a>Vector State mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_state_vector_1_0.html\">Softimage.sib_state_vector.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Surface\\Incidence.Preset</td>\n\
		<td><a name=\"TextureSurfaceIncidence\"></a>sib_incidence_v2 output parameter<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_incidence_v2_1_0.html\">Softimage.sib_incidence_v2.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Switch\\Color_Boolean_Switch.Preset</td>\n\
		<td><a name=\"TextureSwitchColor_Boolean_Switch\"></a>Color Switcher mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_color_switch_1_0.html\">Softimage.sib_color_switch.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Switch\\Color_Multi_Switch.Preset</td>\n\
		<td><a name=\"TextureSwitchColor_Multi_Switch\"></a>Color Multi-Switch mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_color_multi_switch_1_0.html\">Softimage.sib_color_multi_switch.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Switch\\Front_Back.Preset</td>\n\
		<td><a name=\"TextureSwitchFront_Back\"></a>mib Two Sided mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_mib_twosided_1_0.html\">Softimage.mib_twosided.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Switch\\Ray_Type.Preset</td>\n\
		<td><a name=\"TextureSwitchRay_Type\"></a>Ray Type Switcher<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_color_rayswitch_1_0.html\">Softimage.sib_color_rayswitch.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Switch\\Scalar_Boolean_Switch.Preset</td>\n\
		<td><a name=\"TextureSwitchScalar_Boolean_Switch\"></a>Scalar Switch mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_scalar_switch_1_0.html\">Softimage.sib_scalar_switch.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Switch\\Scalar_Multi_Switch.Preset</td>\n\
		<td><a name=\"TextureSwitchScalar_Multi_Switch\"></a>Scalar Multi-Switch mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_scalar_multi_switch_1_0.html\">Softimage.sib_scalar_multi_switch.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Switch\\Vector_Boolean_Switch.Preset</td>\n\
		<td><a name=\"TextureSwitchVector_Boolean_Switch\"></a>Vector Switch mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_vector_switch_1_0.html\">Softimage.sib_vector_switch.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Switch\\Vector_Multi_Switch.Preset</td>\n\
		<td><a name=\"TextureSwitchVector_Multi_Switch\"></a>Vector Multi-Switch mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_vector_multi_switch_1_0.html\">Softimage.sib_vector_multi_switch.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Terrain.Preset</td>\n\
		<td><a name=\"TextureTerrain\"></a>Terrain<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_txt2dterrain_1_0.html\">Softimage.txt2d-terrain.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Vein.Preset</td>\n\
		<td><a name=\"TextureVein\"></a>Vein<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_txt3dvein_v3_1_0.html\">Softimage.txt3d-vein_v3.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Vertex_rgba.Preset</td>\n\
		<td><a name=\"TextureVertex_rgba\"></a>Colored Vertices<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_vertex_color_alpha_1_0.html\">Softimage.sib_vertex_color_alpha.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\Wood.Preset</td>\n\
		<td><a name=\"TextureWood\"></a>Wood<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_txt3dwood_1_0.html\">Softimage.txt3d-wood.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\XSI_Model_Map.Preset</td>\n\
		<td><a name=\"TextureXSI_Model_Map\"></a>Model Map mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_XSIModelMap_1_0.html\">Softimage.XSIModelMap.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\mental images\\mi_Bump_Flakes.Preset</td>\n\
		<td><a name=\"Texturemental imagesmi_Bump_Flakes\"></a>mi Bump Flakes mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_mi_bump_flakes_1_0.html\">Softimage.mi_bump_flakes.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\mental images\\mia_Light_Surface.Preset</td>\n\
		<td><a name=\"Texturemental imagesmia_Light_Surface\"></a>mia Light Surface mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_mia_light_surface_1_0.html\">Softimage.mia_light_surface.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\mental images\\mip_Cameramap.Preset</td>\n\
		<td><a name=\"Texturemental imagesmip_Cameramap\"></a>mip Cameramap mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_mip_cameramap_1_0.html\">Softimage.mip_cameramap.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\mental images\\mip_Rayswitch.Preset</td>\n\
		<td><a name=\"Texturemental imagesmip_Rayswitch\"></a>mip Rayswitch mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_mip_rayswitch_1_0.html\">Softimage.mip_rayswitch.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\mental images\\mip_Rayswitch_Advanced.Preset</td>\n\
		<td><a name=\"Texturemental imagesmip_Rayswitch_Advanced\"></a>mip Rayswitch Advanced mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_mip_rayswitch_advanced_1_0.html\">Softimage.mip_rayswitch_advanced.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\mental images\\misss_Call_Shader.Preset</td>\n\
		<td><a name=\"Texturemental imagesmisss_Call_Shader\"></a>misss Call Shader mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_misss_call_shader_1_0.html\">Softimage.misss_call_shader.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\texture_generators\\2D_Gradient.Preset</td>\n\
		<td><a name=\"Texturetexture_generators2D_Gradient\"></a>Gradient output parameter<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_color_gradient_1_0.html\">Softimage.sib_color_gradient.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\texture_generators\\2D_Image_Implicit.Preset</td>\n\
		<td><a name=\"Texturetexture_generators2D_Image_Implicit\"></a>Image Implicit<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_txt2dimage_1_0.html\">Softimage.txt2d-image.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\texture_generators\\2D_checkerboard.Preset</td>\n\
		<td><a name=\"Texturetexture_generators2D_checkerboard\"></a>mib Texture Checkerboard mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_mib_texture_checkerboard_1_0.html\">Softimage.mib_texture_checkerboard.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\texture_generators\\2D_dot.Preset</td>\n\
		<td><a name=\"Texturetexture_generators2D_dot\"></a>mib Texture Polkadot mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_mib_texture_polkadot_1_0.html\">Softimage.mib_texture_polkadot.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\texture_generators\\2D_fabric.Preset</td>\n\
		<td><a name=\"Texturetexture_generators2D_fabric\"></a>2D Fabric<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_texture2d_fabric_1_0.html\">Softimage.sib_texture2d_fabric.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\texture_generators\\2D_grid.Preset</td>\n\
		<td><a name=\"Texturetexture_generators2D_grid\"></a>2D Grid<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_texture2d_grid_1_0.html\">Softimage.sib_texture2d_grid.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\texture_generators\\2D_ripple.Preset</td>\n\
		<td><a name=\"Texturetexture_generators2D_ripple\"></a>2D Ripple<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_texture2d_ripple_1_0.html\">Softimage.sib_texture2d_ripple.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\texture_generators\\2D_terrain.Preset</td>\n\
		<td><a name=\"Texturetexture_generators2D_terrain\"></a>3D Terrain<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_texture2d_terrain_1_0.html\">Softimage.sib_texture2d_terrain.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\texture_generators\\3D_cloud.Preset</td>\n\
		<td><a name=\"Texturetexture_generators3D_cloud\"></a>Cloud mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_texture_cloud_1_0.html\">Softimage.sib_texture_cloud.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\texture_generators\\3D_fractal.Preset</td>\n\
		<td><a name=\"Texturetexture_generators3D_fractal\"></a>3D Fractal<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_texture_fractal_1_0.html\">Softimage.sib_texture_fractal.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\texture_generators\\3D_lattice.Preset</td>\n\
		<td><a name=\"Texturetexture_generators3D_lattice\"></a>3D Lattice<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_texture_lattice_1_0.html\">Softimage.sib_texture_lattice.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\texture_generators\\3D_marble.Preset</td>\n\
		<td><a name=\"Texturetexture_generators3D_marble\"></a>3D Marble<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_texture_marble_1_0.html\">Softimage.sib_texture_marble.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\texture_generators\\3D_rock.Preset</td>\n\
		<td><a name=\"Texturetexture_generators3D_rock\"></a>3D Rock<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_texture_rock_1_0.html\">Softimage.sib_texture_rock.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\texture_generators\\3D_snow.Preset</td>\n\
		<td><a name=\"Texturetexture_generators3D_snow\"></a>3D Snow<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_texture_snow_1_0.html\">Softimage.sib_texture_snow.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\texture_generators\\3D_turbulence.Preset</td>\n\
		<td><a name=\"Texturetexture_generators3D_turbulence\"></a>mib Texture Turbulence mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_mib_texture_turbulence_1_0.html\">Softimage.mib_texture_turbulence.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\texture_generators\\3D_vein.Preset</td>\n\
		<td><a name=\"Texturetexture_generators3D_vein\"></a>3D Vein<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_texture_vein_1_0.html\">Softimage.sib_texture_vein.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\texture_generators\\3D_wave.Preset</td>\n\
		<td><a name=\"Texturetexture_generators3D_wave\"></a>mib Texture Wave mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_mib_texture_wave_1_0.html\">Softimage.mib_texture_wave.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\texture_generators\\3D_wood.Preset</td>\n\
		<td><a name=\"Texturetexture_generators3D_wood\"></a>3D Wood<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_texture_wood_1_0.html\">Softimage.sib_texture_wood.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\texture_generators\\Image_lookup.Preset</td>\n\
		<td><a name=\"Texturetexture_generatorsImage_lookup\"></a>mib Texture Lookup mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_mib_texture_lookup_1_0.html\">Softimage.mib_texture_lookup.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\texture_space_controller\\3Dwarp.Preset</td>\n\
		<td><a name=\"Texturetexture_space_controller3Dwarp\"></a>3DWarp UV mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_texture3Dwarp_1_0.html\">Softimage.sib_texture3Dwarp.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\texture_space_controller\\Kaleidoscope.Preset</td>\n\
		<td><a name=\"Texturetexture_space_controllerKaleidoscope\"></a>Kaleidoscopic UV Remap mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_txt2dremap_kalid_1_0.html\">Softimage.sib_txt2dremap_kalid.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\texture_space_controller\\Texture_edit.Preset</td>\n\
		<td><a name=\"Texturetexture_space_controllerTexture_edit\"></a>Texture Space Edit<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_mib_texture_remap_1_0.html\">Softimage.mib_texture_remap.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\texture_space_generators\\Texture_Projection_Lookup.Preset</td>\n\
		<td><a name=\"Texturetexture_space_generatorsTexture_Projection_Lookup\"></a>Projection Lookup mental ray Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_sib_texproj_lookup_1_0.html\">Softimage.sib_texproj_lookup.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture\\texture_space_generators\\Texture_space_generator.Preset</td>\n\
		<td><a name=\"Texturetexture_space_generatorsTexture_space_generator\"></a>Texture Space Generator<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_mib_texture_vector_1_0.html\">Softimage.mib_texture_vector.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/mrTexturePresets.html\">ConnectTextureShader Example</a>		</td>\n\
	</tr>\n\
</table>\n\
<br />\n\
\n\
</div>\n\
<hr width=\"100%\" />\n\
<h3>ConnectTextureShader Example</h3>\n\
<div><p><a name=\"ConnectTextureShader\"> </a><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">function ConnectTextureShader( in_preset )\n\
{\n\
	NewScene( null, false );\n\
	var obj = Application.ActiveSceneRoot.AddGeometry( \"Sphere\", \"MeshSurface\" );\n\
	CreateProjection( obj, siTxtUV, siTxtDefaultPlanarXY, \"\", \"Texture_Projection\" );\n\
	Application.Selection.SetAsText(obj);\n\
	var oShader = CreateShaderFromPreset(in_preset, \"Sources.Materials.DefaultLib.Scene_Material\");\n\
	SIConnectShaderToCnxPoint(oShader.FullName+\".out\", \n\
		\"Sources.Materials.DefaultLib.Scene_Material.surface\", false);\n\
	if (!oShader) { return null; }\n\
	return (oShader.Type == \"XSICollection\") ? oShader(0) : oShader;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>ConnectTextureShader2 Example</h3>\n\
<div><p><a name=\"ConnectTextureShader2\"> </a><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">function ConnectTextureShader2( in_preset )\n\
{\n\
	NewScene( null, false );\n\
	var obj = Application.ActiveSceneRoot.AddGeometry( \"Sphere\", \"MeshSurface\" );\n\
	CreateProjection( obj, siTxtUV, siTxtDefaultPlanarXY, \"\", \"Texture_Projection\" );\n\
	obj.AddMaterial( in_preset, true, \"MyTestNode\" ); \n\
	var oShader = Dictionary.GetObject(\"Sources.Materials.DefaultLib.Material.MyTestNode\");\n\
	return oShader;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";