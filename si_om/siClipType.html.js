var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siClipType</title>\n\
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
            <h1>siClipType</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siClipType</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>Specifies the different fundamental types of <a href=\"#!/url=./si_om/Clip.html\">Clip</a> objects.</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>StringModule.siClipAnimationLayerType                                       // mixerlayerclip\n\
StringModule.siClipAnimationType                                            // mixeranimclip\n\
StringModule.siClipAnimCompoundType                                         // AnimActionCompoundClip\n\
StringModule.siClipAudioType                                                // mixeraudioclip\n\
StringModule.siClipCacheType                                                // mixercacheclip\n\
StringModule.siClipImageType                                                // ImageClip\n\
StringModule.siClipMixerType                                                // Mixer\n\
StringModule.siClipShapeCompoundType                                        // ShapeActionCompoundClip\n\
StringModule.siClipShapeType                                                // mixershapeclip\n\
StringModule.siClipShotType                                                 // camerashotclip</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClipAnimationLayerType\"> </a>siClipAnimationLayerType		</td>\n\
		<td class=\"example\">mixerlayerclip		</td>\n\
		<td>\n\
Represents clip objects which are instances of animation layers.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClipAnimationType\"> </a>siClipAnimationType		</td>\n\
		<td class=\"example\">mixeranimclip		</td>\n\
		<td>\n\
Represents clip objects which are instances of \n\
		<a href=\"#!/url=./si_om/AnimationSource.html\">AnimationSource</a>s containing <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a>s, <a href=\"#!/url=./si_om/StaticSource.html\">StaticSource</a>s, or \n\
		<a href=\"#!/url=./si_om/Constraint.html\">Constraint</a>s.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClipAnimCompoundType\"> </a>siClipAnimCompoundType		</td>\n\
		<td class=\"example\">AnimActionCompoundClip		</td>\n\
		<td>\n\
Represents clip objects which are used to nest other \n\
		animation clip objects.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClipAudioType\"> </a>siClipAudioType		</td>\n\
		<td class=\"example\">mixeraudioclip		</td>\n\
		<td>\n\
Represents clip objects which are instances of audio files.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClipCacheType\"> </a>siClipCacheType		</td>\n\
		<td class=\"example\">mixercacheclip		</td>\n\
		<td>\n\
Represents clip objects which are instances of cache files.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClipImageType\"> </a>siClipImageType		</td>\n\
		<td class=\"example\">ImageClip		</td>\n\
		<td>\n\
Represents an <a href=\"#!/url=./si_om/ImageClip.html\">ImageClip</a> object.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClipMixerType\"> </a>siClipMixerType		</td>\n\
		<td class=\"example\">Mixer		</td>\n\
		<td>\n\
Represents clip objects which are the top-level container for all other clip objects.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClipShapeCompoundType\"> </a>siClipShapeCompoundType		</td>\n\
		<td class=\"example\">ShapeActionCompoundClip		</td>\n\
		<td>\n\
Represents clip objects which are used to nest other \n\
		shape clip objects.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClipShapeType\"> </a>siClipShapeType		</td>\n\
		<td class=\"example\">mixershapeclip		</td>\n\
		<td>\n\
Represents clip objects which are instances of sources containing \n\
		<a href=\"#!/url=./si_om/ShapeKey.html\">ShapeKey</a>s.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClipShotType\"> </a>siClipShotType		</td>\n\
		<td class=\"example\">camerashotclip		</td>\n\
		<td>\n\
Represents clip objects for the time(s) at which a particular \n\
		<a href=\"#!/url=./si_om/Camera.html\">Camera</a> is active.		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_om/SIObject.Type.html\">SIObject.Type</a> <a href=\"#!/url=./si_cpp/classXSI_1_1SIObject.html#GetType\">SIObject::GetType</a></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Clip.html\">Clip</a> <a href=\"#!/url=./files/SourcesAndClips.htm\">About Sources and Clips</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";