var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ImageClip.GetScaledDownImage</title>\n\
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
            <h1>ImageClip.GetScaledDownImage</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/ImageClip.html\">ImageClip</a>.GetScaledDownImage</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> This method is identical to <a href=\"#!/url=./si_om/ImageClip.GetImage.html\">ImageClip.GetImage</a>, \n\
except that it returns a scaled-down version of the image. This \n\
can be a major performance enhancement if the source image is very \n\
large but where full resolution is not important: for example, when \n\
generating a thumbnail.\n\
<br /><br />\n\
Note: the user preferences preferences.rendering.maximum_proxy_level and\n\
preferences.rendering.minimum_proxy_size can influence the results of this call.\n\
The image returned may be larger than requested.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Image ImageClip.GetScaledDownImage( siImageRatio in_Ratio, Object in_vFrame );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = ImageClip.GetScaledDownImage( Ratio, [Variant] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/Image.html\">Image</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Ratio		</td>\n\
		<td><a href=\"#!/url=./si_om/siImageRatio.html\">siImageRatio</a>		</td>\n\
		<td>\n\
Ratio value which defines how much the image should be reduced		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Variant		</td>\n\
		<td><a href=\"#!/url=./files/Variant.htm\">Variant</a>		</td>\n\
		<td>\n\
\n\
		Frame at which to retrieve the image.  This is only meaningful when the ImageClip\n\
		represents an image sequence or movie file.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\n\
		Frame corresponding to the play cursor at the time that the ImageClip\n\
		instance was created.\n\
				</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">var factoryImages = Application.InstallationPath(siFactoryPath) + \n\
			\"/Data/XSI_SAMPLES/Pictures/\"	\n\
	var strImagePath = factoryImages + \"jio.jpg\" ;\n\
	var oImageClip = CreateImageClip( strImagePath, \"ScalingClip\" ) ;\n\
	var oImage = oImageClip.GetScaledDownImage( siImageRatio1x1 ) ;\n\
	LogMessage( \"Full res image is \" + oImage.ResX + \"x\" + oImage.ResY ) ;\n\
	oClip = oImageClip.GetScaledDownImage( siImageRatio2x1 ) ;\n\
	LogMessage( \"2:1 image is \" + oImage.ResX + \"x\" + oImage.ResY ) ;\n\
	oClip = oImageClip.GetScaledDownImage( siImageRatio4x1 ) ;\n\
	LogMessage( \"4:1 image is \" + oImage.ResX + \"x\" + oImage.ResY ) ;\n\
	oClip = oImageClip.GetScaledDownImage( siImageRatio8x1 ) ;\n\
	LogMessage( \"8:1 image is \" + oImage.ResX + \"x\" + oImage.ResY ) ;\n\
	oClip = oImageClip.GetScaledDownImage( siImageRatio16x1 ) ;\n\
	LogMessage( \"16:1 image is \" + oImage.ResX + \"x\" + oImage.ResY ) ;\n\
	oClip = oImageClip.GetScaledDownImage( siImageRatioThumbnail ) ;\n\
	LogMessage( \"Thumbnail image is \" + oImage.ResX + \"x\" + oImage.ResY ) ;</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";