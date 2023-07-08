var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siImageDataType</title>\n\
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
            <h1>siImageDataType</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siImageDataType</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v6.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>Specifies the different pre-defined data types available for <a href=\"#!/url=./si_om/Framebuffer.html\">Framebuffer</a>s \n\
and writable image sources. These image datatypes are not an exhaustive list but only\n\
a list of currently known shorthands. Each rendering engine may provide its own set of\n\
image data types in addition to the ones listed here.</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>StringModule.siImageDataTypeRGBA                                            // RGBA\n\
StringModule.siImageDataTypeRGB                                             // RGB\n\
StringModule.siImageDataTypeRGBE                                            // RGBE\n\
StringModule.siImageDataTypeAlpha                                           // Alpha\n\
StringModule.siImageDataTypeIntensity                                       // Intensity\n\
StringModule.siImageDataTypeDepth                                           // Depth\n\
StringModule.siImageDataTypeNormal                                          // Normal\n\
StringModule.siImageDataTypeMotion                                          // Motion\n\
StringModule.siImageDataTypeVector                                          // Vector\n\
StringModule.siImageDataTypePoint                                           // Vector\n\
StringModule.siImageDataTypeLabel                                           // Label\n\
StringModule.siImageDataTypeBitMask                                         // BitMask</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImageDataTypeRGBA\"> </a>siImageDataTypeRGBA		</td>\n\
		<td class=\"example\">RGBA		</td>\n\
		<td>\n\
Represents a four channel RGB color image, where the fourth channel is the alpha matte.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImageDataTypeRGB\"> </a>siImageDataTypeRGB		</td>\n\
		<td class=\"example\">RGB		</td>\n\
		<td>\n\
Represents a three channel, RGBA color image.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImageDataTypeRGBE\"> </a>siImageDataTypeRGBE		</td>\n\
		<td class=\"example\">RGBE		</td>\n\
		<td>\n\
Represents a four channel, RGB color image, where the fourth channel is an exponent. Used for HDR images.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImageDataTypeAlpha\"> </a>siImageDataTypeAlpha		</td>\n\
		<td class=\"example\">Alpha		</td>\n\
		<td>\n\
Represents a single channel, alpha matte image.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImageDataTypeIntensity\"> </a>siImageDataTypeIntensity		</td>\n\
		<td class=\"example\">Intensity		</td>\n\
		<td>\n\
Represents a single channel, grayscale intensity image.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImageDataTypeDepth\"> </a>siImageDataTypeDepth		</td>\n\
		<td class=\"example\">Depth		</td>\n\
		<td>\n\
Represents a single channel, depth value image.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImageDataTypeNormal\"> </a>siImageDataTypeNormal		</td>\n\
		<td class=\"example\">Normal		</td>\n\
		<td>\n\
Represents a three channel, vector image composed of normalized vectors.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImageDataTypeMotion\"> </a>siImageDataTypeMotion		</td>\n\
		<td class=\"example\">Motion		</td>\n\
		<td>\n\
Represents a three channel, motion vector image.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImageDataTypeVector\"> </a>siImageDataTypeVector		</td>\n\
		<td class=\"example\">Vector		</td>\n\
		<td>\n\
Represents a three channel image composed of arbitrary vectors.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImageDataTypePoint\"> </a>siImageDataTypePoint		</td>\n\
		<td class=\"example\">Point		</td>\n\
		<td>\n\
Represents a three channel image composed of arbitrary points in space.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImageDataTypeLabel\"> </a>siImageDataTypeLabel		</td>\n\
		<td class=\"example\">Labels		</td>\n\
		<td>\n\
Represents a single channel, object label image.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImageDataTypeBitMask\"> </a>siImageDataTypeBitMask		</td>\n\
		<td class=\"example\">BitMask		</td>\n\
		<td>\n\
Represents a single channel, single bit-mask image.		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_om/Framebuffer.html\">Framebuffer</a> <a href=\"#!/url=./si_om/Renderer.OutputFormatDef.html\">Renderer.OutputFormatDef</a> <a href=\"#!/url=./si_cmds/AddWritableImageSource.html\">AddWritableImageSource</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";