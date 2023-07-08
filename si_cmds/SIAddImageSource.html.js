var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SIAddImageSource</title>\n\
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
            <h1>SIAddImageSource</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SIAddImageSource</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Creates and adds a new image source in the Sources container. To execute \n\
this command you must have an image source file on disk. Image sources \n\
are used by <a href=\"#!/url=./si_om/ImageClip.html\">ImageClip</a> objects in order to perform image \n\
compositing effects, such as texturing. <br /><br />\n\
This command is similar in syntax and behavior to the <a href=\"#!/url=./si_cmds/AddImageClip.html\">AddImageClip</a> \n\
command, except that it returns a value through a parameter, instead \n\
of from the function directly.<br /><br />\n\
It is accessed from the main menu under Render->Get - Clip->Create Source \n\
From File, and then choosing an image source file.<br /><br />\n\
This command supports the downloading of files off the internet. If the filename\n\
specified is a URL then the file will be downloaded locally before the command\n\
is executed.<br /><br />\n\
Note: This command uses <a href=\"#!/url=./files/OutArgDefined.htm\">output arguments</a>. C# and some \n\
scripting languages (such as JScript, PerlScript and Python) don\'t support arguments passed by reference so you \n\
need to use the best workaround for your situation:\n\
<br /><br />\n\
For scripting languages this command returns an <a href=\"#!/url=./files/ISIVTCollection.htm\">ISIVTCollection</a> \n\
which you can use to get the output arguments. \n\
<br /><br />\n\
For C# you can use the <a href=\"#!/url=./si_om/XSIApplication.ExecuteCommand.html\">XSIApplication.ExecuteCommand</a> method to call this command. ExecuteCommand \n\
packs the output arguments into a C# System.Object containing an <a href=\"#!/url=./files/Array.htm\">Array</a> of the output arguments (see\n\
<a href=\"#!/url=./files/csharp_understand_CallingCommandsfromCSharp.htm\">Calling Commands from C#</a>).\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SIAddImageSource( [FileName], [Name], [Source] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">FileName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Full path of the new image source. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
User is prompted to select a file			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 The name to use for the new source. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Source		</td>\n\
		<td><a href=\"#!/url=./si_om/Source.html\">Source</a>		</td>\n\
		<td>\n\
 Returns the source 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'---------------------------------------------------------\n\
\' VBScript example : Adding image sources. This script \n\
\' demonstrates the use of SIAddImageSource to add image sources\n\
\' to the scene.\n\
\'---------------------------------------------------------\n\
\' Get the filenames of some image sources.\n\
Dim Source1, Source2, Source3\n\
Source1 = Application.InstallationPath( siFactoryPath ) &amp; \"\\Data\\XSI_SAMPLES\\Pictures\\xsilogo.jpg\"\n\
Source2 = Application.InstallationPath( siFactoryPath ) &amp; \"\\Data\\XSI_SAMPLES\\Pictures\\top_teeth.jpg\"\n\
Source3 = Application.InstallationPath( siFactoryPath ) &amp; \"\\Data\\XSI_SAMPLES\\Pictures\\jio.jpg\"\n\
\' Now create image sources from the filenames.\n\
Dim XSIsrc, Teethsrc, Jiosrc\n\
SIAddImageSource Source1, \"XSI\", XSIsrc\n\
SIAddImageSource Source2, \"Teeth\", Teethsrc\n\
SIAddImageSource Source3, \"Jio\", Jiosrc\n\
logmessage XSIsrc &amp; \" created with source file : \" &amp; Source1\n\
logmessage Teethsrc &amp; \" created with source file : \" &amp; Source2\n\
logmessage Jiosrc &amp; \" created with source file : \" &amp; Source3\n\
\'---------------------------------------------------------\n\
\' Output from this script:\n\
\'INFO : \"Sources.XSI created with source file : &lt;FactoryPath&gt;\\Data\\XSI_SAMPLES\\Pictures\\xsilogo.jpg\"\n\
\'INFO : \"Sources.Teeth created with source file : &lt;FactoryPath&gt;\\Data\\XSI_SAMPLES\\Pictures\\top_teeth.jpg\"\n\
\'INFO : \"Sources.Jio created with source file : &lt;FactoryPath&gt;\\Data\\XSI_SAMPLES\\Pictures\\jio.jpg\"\n\
\'---------------------------------------------------------</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/AddImageSource.html\">AddImageSource</a> <a href=\"#!/url=./si_cmds/AddImageClip.html\">AddImageClip</a> <a href=\"#!/url=./si_cmds/CreateImageClip.html\">CreateImageClip</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";