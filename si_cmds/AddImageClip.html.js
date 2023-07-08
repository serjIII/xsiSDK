var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>AddImageClip</title>\n\
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
            <h1>AddImageClip</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">AddImageClip</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Creates and adds a new image clip to the Clips container from an image source. To perform this command you need an \n\
image source in the Sources container. You can create an image source with the <a href=\"#!/url=./si_cmds/AddImageSource.html\">AddImageSource</a> \n\
command. This command is similar in syntax and behavior to the <a href=\"#!/url=./si_cmds/SIAddImageClip.html\">SIAddImageClip</a> command, except that\n\
it returns a value from the function call, instead of through a parameter.<br /><br />\n\
Tip: You can also use <a href=\"#!/url=./si_cmds/CreateImageClip.html\">CreateImageClip</a> as a shortcut to go straight from a filename to a clip \n\
(does the same as a combination of <a href=\"#!/url=./si_cmds/AddImageSource.html\">AddImageSource</a> and <a href=\"#!/url=./si_cmds/AddImageClip.html\">AddImageClip</a>).\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = AddImageClip( Source, [Name] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns the new <a href=\"#!/url=./si_om/ImageClip.html\">ImageClip</a></p></div>\n\
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
 Source to use to create the clip. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 The name to use for the new clip. 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'------------------------------------------------------------------\n\
\' This example shows how to add an image clip from an image source.\n\
\'------------------------------------------------------------------\n\
option explicit\n\
\' First, add an image source.\n\
Dim oSourceObj, ImageFile\n\
ImageFile = Application.InstallationPath( siFactoryPath ) &amp; \"/Data/XSI_SAMPLES/Pictures/xsilogo.jpg\"\n\
SIAddImageSource ImageFile, \"XSIlogo\", oSourceObj\n\
\' Now create an image clip from the image source.\n\
Dim oClipObj \n\
set oClipObj = AddImageClip( oSourceObj, \"XSIlogo_Clip\" )\n\
\' Now output some information about the clip, and its source.\n\
Dim SourceName, SourceFile, XRes, YRes\n\
SourceName = GetValue( oClipObj &amp; \".Source.Name\" )\n\
logmessage oClipObj &amp; \" Source       : \" &amp; CStr(SourceName)\n\
SourceFile = GetValue( oClipObj &amp; \".SourceFileName\" )\n\
logmessage oClipObj &amp; \" Source File  : \" &amp; CStr(SourceFile)\n\
XRes = GetValue( \"Sources.\" &amp; SourceName &amp; \".XRes\" )\n\
logmessage oClipObj &amp; \" X Resolution : \" &amp; CInt(XRes)\n\
YRes = GetValue( \"Sources.\" &amp; SourceName &amp; \".YRes\" )\n\
logmessage oClipObj &amp; \" Y Resolution : \" &amp; CInt(YRes)\n\
\'---------------------------------------------------------\n\
\' Output from this script:\n\
\'INFO : \"Clips.XSIlogo_Clip Source       : XSIlogo\"\n\
\'INFO : \"Clips.XSIlogo_Clip Source File  : &lt;FactoryPath&gt;\\Data\\XSI_SAMPLES\\Pictures\\xsilogo.jpg\"\n\
\'INFO : \"Clips.XSIlogo_Clip X Resolution : 500\"\n\
\'INFO : \"Clips.XSIlogo_Clip Y Resolution : 513\"\n\
\'---------------------------------------------------------</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/SIAddImageClip.html\">SIAddImageClip</a> <a href=\"#!/url=./si_cmds/CreateImageClip.html\">CreateImageClip</a> <a href=\"#!/url=./si_cmds/AddImageSource.html\">AddImageSource</a> <a href=\"#!/url=./si_cmds/SIAddImageSource.html\">SIAddImageSource</a> <a href=\"#!/url=./si_cmds/DeleteUnusedImageClips.html\">DeleteUnusedImageClips</a> <a href=\"#!/url=./si_cmds/DeleteUnusedImageSources.html\">DeleteUnusedImageSources</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";