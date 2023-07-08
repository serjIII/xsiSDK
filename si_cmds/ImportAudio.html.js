var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ImportAudio</title>\n\
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
            <h1>ImportAudio</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ImportAudio</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Imports an audio file into current scene. Puts the new Audio source into the audio \n\
source list of the given model. If there is no <a href=\"#!/url=./si_om/Mixer.html\">Mixer</a> object in the \n\
current model, then it is added (so it can contain the audio source).<br /><br /> \n\
Note: Supported audio file formats include the Microsoft\'s Audio Video Interleave \n\
(.avi), the Apple Audio Interchange File Format (.aif, .aiff, or .aifc), Quicktime \n\
formats (.mov and .qt), and WAV files (.wav)<br /><br />\n\
This command supports downloading files off the internet. If the filename\n\
specified is a URL then the file is downloaded locally before the command\n\
is executed.<br /><br />\n\
Warning: You must have an audio source file on disk to execute this command.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = ImportAudio( Model, [FileName], [Name] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns the new audio <a href=\"#!/url=./si_om/Source.html\">Source</a>. </p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Model		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 The model into which to import the audio. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">FileName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Full path to the file to import. <br /><br />Returns an error if \n\
the file specified is not an audio file.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
File browser pops up			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 The name to use for the new audio source. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
File name			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'---------------------------------------------------------\n\
\' This example shows how to import audio files into a \n\
\' model. Note: You must choose an audio source from a \n\
\' dialog box in this example\n\
\'---------------------------------------------------------\n\
\' First create a model to hold the sound clip.\n\
dim oModel\n\
SICreateModel , \"AudioModel\", , oModel\n\
logmessage oModel + \" model created.\"\n\
\' Now import an audio source file.\n\
dim oAudioSource, Fullname, Filename, SamplingRate, ChannelCnt, Duration\n\
set oAudioSource = ImportAudio( oModel, , \"Sound\" )\n\
\' Now display information about the clip created.\n\
Fullname = GetValue( oAudioSource.FullName )\n\
Filename = GetValue( oAudioSource.FileName )\n\
SamplingRate = GetValue( oAudioSource.SamplingRate )\n\
ChannelCnt = GetValue( oAudioSource.ChannelCount )\n\
Duration = GetValue( oAudioSource.Duration )\n\
logmessage \"Audio source created: \" &amp; Fullname\n\
logmessage \"Audio filename      : \" &amp; Filename\n\
logmessage \"Audio Sampling Rate : \" &amp; CInt(SamplingRate)\n\
logmessage \"Audio Channel Count : \" &amp; CInt(ChannelCnt)\n\
logmessage \"Audio Duration      : \" &amp; Duration\n\
\'---------------------------------------------------------\n\
\' Output from this script:\n\
\'INFO : \"Audio source created: Sources.Sound\"\n\
\'INFO : \"Audio filename      : &lt;filename&gt;\"\n\
\'INFO : \"Audio Sampling Rate : &lt;sampling rate&gt;\"\n\
\'INFO : \"Audio Channel Count : &lt;channel count&gt;\"\n\
\'INFO : \"Audio Duration      : &lt;duration (sec.)&gt;\"\n\
\'---------------------------------------------------------</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/AddAudioClip.html\">AddAudioClip</a> <a href=\"#!/url=./si_cmds/DeleteUnusedAudioSources.html\">DeleteUnusedAudioSources</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";