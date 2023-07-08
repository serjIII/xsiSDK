var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Image</title>\n\
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
            <h1>Image</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Image</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_Image\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1Image.html\">Image</a></p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v2.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> This class provides read-access to the representation of an image in memory.<br /><br />\n\
For the vast majority of image files, Softimage represents the data \n\
in memory as uncompressed 8-bit RGBA.  This is true even if the original file\n\
has no alpha information.  The format of the data can be determined\n\
with <a href=\"#!/url=./si_om/Image.NumChannels.html\">Image.NumChannels</a> and <a href=\"#!/url=./si_om/Image.ChannelSize.html\">Image.ChannelSize</a>.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Image.GetPixel.html\">GetPixel</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Image.GetPixelArray.html\">GetPixelArray</a>		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Properties</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Image.ChannelSize.html\">ChannelSize</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Image.NumChannels.html\">NumChannels</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Image.ResX.html\">ResX</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Image.ResY.html\">ResY</a>		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' The script demonstrates the relationship between the Image, ImageClip and Source\n\
\' objects\n\
Option Explicit\n\
\' ----------------------------------------------------------------\n\
\' create a new image clip\n\
\' ----------------------------------------------------------------\n\
newscene , false\n\
dim oImageClip \n\
set oImageClip = CreateImageClip( _\n\
		\"$SI_HOME\\Data\\XSI_SAMPLES\\Pictures\\jio.jpg\", _\n\
		\"MyImage\" )\n\
logmessage \"image familes-&gt;\" &amp; oImageClip.families\n\
\' ----------------------------------------------------------------\n\
\' get startframe, endframe, xdimension and ydimension parameters\n\
\' ----------------------------------------------------------------\n\
if typename(oImageClip) &lt;&gt; \"Nothing\" then\n\
	\'Use the source to get image information\n\
	dim oImageSource : set oImageSource = oImageClip.Source\n\
	logmessage \"startframe-&gt;\" &amp; oImageSource.FrameStart.Value\n\
	logmessage \"endframe-&gt;\" &amp;  oImageSource.FrameEnd.Value\n\
	logmessage \"xdimension -&gt;\" &amp;  oImageSource.XRes.Value\n\
	logmessage \"ydimension -&gt;\" &amp;  oImageSource.YRes.Value\n\
	\'Read bottom left pixel \n\
	dim oImage : set oImage = oImageClip.GetImage\n\
	dim oPixel : set oPixel = oImage.GetPixel( 0, 0 )\n\
	logmessage \"The pixel color is:\"\n\
	logmessage \"R: \" &amp; oPixel.Red \n\
	logmessage \"G: \" &amp; oPixel.Green\n\
	logmessage \"B: \" &amp; oPixel.Blue\n\
	logmessage \"A: \" &amp; oPixel.Alpha\n\
	logmessage \"xdimension (method2) -&gt;\" &amp;  oImage.ResX\n\
	logmessage \"ydimension (method2)-&gt;\" &amp;  oImage.ResY\n\
	logmessage \"Channels -&gt;\" &amp;  oImage.NumChannels\n\
	logmessage \"Channel Size (bytes) -&gt;\" &amp;  oImage.ChannelSize	\n\
end if\n\
\' ----------------------------------------------------------------\n\
\' Demonstrate how to find all image clips in the scene\n\
\' ----------------------------------------------------------------\n\
logmessage \"All image clips in Scene:\"\n\
dim oImageClips : set oImageClips = Project_GetImageClips()\n\
for each oImageClip in oImageClips\n\
	logmessage \"Image Clip-&gt;\" &amp;oImageClip \n\
next \n\
\' ----------------------------------------------------------------\n\
\' Return collection of project image clips\n\
\' ----------------------------------------------------------------\n\
function Project_GetImageClips()\n\
	dim oCol : set oCol = enumelements( \"Clips.Image\" )\n\
	set Project_GetImageClips = sifilter( oCol, \"Image Clips\", ,siSearchFamilies )\n\
end function</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/ImageClip.GetImage.html\">ImageClip.GetImage</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";