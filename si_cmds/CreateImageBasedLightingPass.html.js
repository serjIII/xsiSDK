var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>CreateImageBasedLightingPass</title>\n\
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
            <h1>CreateImageBasedLightingPass</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">CreateImageBasedLightingPass</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Creates a new image-based lighting pass and makes it the current pass. You can\n\
use an image saved to disk by specifying the filename in the Filename parameter,\n\
or use an image clip already created (see <a href=\"#!/url=./si_cmds/CreateImageClip.html\">CreateImageClip</a>) by\n\
specifying the name of the image clip in the ImageClip parameter. If you pass\n\
empty parameters, a browser prompts the user to select either an image clip or an\n\
image file.<br /><br />\n\
To speed up the process of lighting your scene with an image, you can use the \n\
Image Based Lighting render pass preset. Creating a new render pass using \n\
this preset automatically applies the Environment shader to the pass and \n\
enables final gathering in the render options. You can modify the pass to \n\
alter the image-based lighting effect or limit the number of objects that \n\
it affects.<br /><br />\n\
Note: This command uses output arguments. Some scripting languages don\'t \n\
support arguments passed by reference (such as JScript and Python). For more \n\
information on how to handle getting output arguments through a return-value array, \n\
see <a href=\"#!/url=./files/OutputArgArrays.htm\">Output Arguments, Return Values and Output Value Arrays</a>.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>CreateImageBasedLightingPass( [Filename], Clip );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Filename		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Image filename to use for image-based lighting.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"\"			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Clip		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Image clip to use for image-based lighting.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
If no value is specified, a browser asks the user whether they want to use an existing image clip or create one from an image file.			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\'	This example demonstrates how to create one pass from an image\n\
\'	clip and another one from an image file saved on disk.\n\
\'\n\
\' First create the image clip to use in the lighting pass\n\
NewScene , false\n\
Set oClip = CreateImageClip( InstallationPath( siFactoryPath ) _\n\
	&amp; \"\\Data\\XSI_SAMPLES\\Pictures\\cloud.19.pic\", \"Jeremy\" )\n\
\' Then create the pass using that clip in the ImageClip parameter\n\
CreateImageBasedLightingPass , oClip\n\
\' Print out the new list of passes\n\
getPassInfo\n\
Application.LogMessage \"------------------------------------------\"\n\
\'                      *****************\n\
\' Now create another image-based pass by specifying an image\n\
\' filename for the Filename parameter (here we are using a string\n\
\' variable to store the name, but you can also use the name itself)\n\
sImageFile = InstallationPath( siFactoryPath ) _\n\
	&amp; \"\\Data\\XSI_SAMPLES\\Pictures\\Aniso2.tga\"\n\
CreateImageBasedLightingPass sImageFile\n\
\' Print out the new list of passes\n\
getPassInfo\n\
function getPassInfo()\n\
	\' Loop through the passes and print their names\n\
	SelectObj \"Passes.*\"\n\
	Set oPasses = Selection\n\
	For Each p In oPasses\n\
		Application.LogMessage p.Name\n\
	Next\n\
end function\n\
\' Output of the above script:\n\
\'INFO : \"List\"\n\
\'INFO : \"Default_Pass\"\n\
\'INFO : \"HDRI\"\n\
\'INFO : \"------------------------------------------\"\n\
\'INFO : \"List\"\n\
\'INFO : \"Default_Pass\"\n\
\'INFO : \"HDRI\"\n\
\'INFO : \"HDRI1\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/CreateImageClip.html\">CreateImageClip</a> <a href=\"#!/url=./si_cmds/CreatePass.html\">CreatePass</a> <a href=\"#!/url=./si_cmds/SICreatePass.html\">SICreatePass</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";