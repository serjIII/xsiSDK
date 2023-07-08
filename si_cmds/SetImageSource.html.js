var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SetImageSource</title>\n\
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
            <h1>SetImageSource</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SetImageSource</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Sets the image source for an image clip or a list of image clips. At least one <a href=\"#!/url=./si_om/ImageClip.html\">ImageClip</a> and an image \n\
source file are required for this command.<br /><br />\n\
This command is available under the property page of an <a href=\"#!/url=./si_om/ImageClip.html\">ImageClip</a>, in the Source group, in the \n\
filename field.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SetImageSource( [Source], [InputObjs] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Source		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Source to set		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">InputObjs		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of clips to set the source 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'---------------------------------------------------------\n\
\' VBScript example : Setting image clip sources. This script\n\
\' demonstrates the use of SetImageSource to set the source\n\
\' image for image clips.\n\
\'---------------------------------------------------------\n\
\' Get the filenames of some image sources.\n\
Dim XSIsrc, Teethsrc, Jiosrc\n\
Source1 = Application.InstallationPath( siFactoryPath ) &amp; \"\\Data\\XSI_SAMPLES\\Pictures\\xsilogo.jpg\"\n\
Source2 = Application.InstallationPath( siFactoryPath ) &amp; \"\\Data\\XSI_SAMPLES\\Pictures\\top_teeth.jpg\"\n\
Source3 = Application.InstallationPath( siFactoryPath ) &amp; \"\\Data\\XSI_SAMPLES\\Pictures\\jio.jpg\"\n\
\' Now create some image clips with the images assigned.\n\
Dim XSIClip, TeethClip, JioClip\n\
SICreateImageClip Source1, \"XSI\", XSIClip\n\
SICreateImageClip Source2, \"Teeth\", TeethClip\n\
SICreateImageClip Source3, \"Jio\", JioClip\n\
logmessage \"Image clip \" &amp; XSIClip &amp; \" created with source \" &amp; Source1\n\
logmessage \"Image clip \" &amp; TeethClip &amp; \" created with source \" &amp; Source2\n\
logmessage \"Image clip \" &amp; JioClip &amp; \" created with source \" &amp; Source3\n\
\' If the image clips are inspected at this point, notice that each clip\n\
\' has a source image related to its name. (i.e Clips.XSI source = xsilogo.jpg).\n\
\' Now we can change the image sources, so that they are associated with different clips\n\
SetImageSource \"Sources.xsilogo_jpg\", JioClip\n\
SetImageSource \"Sources.jio_jpg\", TeethClip &amp; \",\" &amp; XSIClip\n\
\'---------------------------------------------------------\n\
\' Output from this script:\n\
\'INFO : \"Image clip Clips.XSI created with source &lt;FatoryPath&gt;\\Data\\XSI_SAMPLES\\Pictures\\xsilogo.jpg\"\n\
\'INFO : \"Image clip Clips.Teeth created with source &lt;FatoryPath&gt;\\XSI_SAMPLES\\Pictures\\top_teeth.jpg\"\n\
\'INFO : \"Image clip Clips.Jio created with source &lt;FatoryPath&gt;\\Data\\XSI_SAMPLES\\Pictures\\jio.jpg\"\n\
\'---------------------------------------------------------</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/AddImageSource.html\">AddImageSource</a> <a href=\"#!/url=./si_cmds/SICreateImageClip.html\">SICreateImageClip</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";