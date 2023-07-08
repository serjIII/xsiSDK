var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SICreatePass</title>\n\
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
            <h1>SICreatePass</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SICreatePass</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Creates a new <a href=\"#!/url=./si_om/Pass.html\">Pass</a>. A render pass creates a picture layer of a \n\
scene that can be composited with any other passes to create a complete image. <br /><br />\n\
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
		<td class=\"example\"><pre>SICreatePass( [PresetObj], [Name], [Value] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">PresetObj		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a> or a preset object (see <a href=\"#!/url=./si_cmds/SIGetPreset.html\">SIGetPreset</a>)		</td>\n\
		<td>\n\
Any of the <a href=\"#!/url=./si_cmds/PassPresets.html\">Pass Presets</a>			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"Pass\" (default pass)			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Name of the new pass. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Default pass name (ie., \"Ambient_Pass\")			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Value		</td>\n\
		<td><a href=\"#!/url=./si_om/Pass.html\">Pass</a>		</td>\n\
		<td>\n\
 Returns the new pass. 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\'	This example demonstrates how to create different types of passes\n\
\'	based on pass presets. It also shows how to get a list of all\n\
\'	passes in the scene as an XSICollection.\n\
\'\n\
\' Create a new scene \n\
NewScene , false\n\
\' Print out the current list of passes\n\
getPassInfo\n\
Application.LogMessage \"-------------------\"\n\
\' Create a diffuse pass\n\
SICreatePass InstallationPath( siFactoryPath ) _\n\
	&amp; \"\\Data\\DSPresets\\Groups\\Diffuse_Pass.Preset\", \"Different_Pass\"\n\
\' Create a depth pass\n\
SICreatePass InstallationPath( siFactoryPath ) _\n\
	&amp; \"\\Data\\DSPresets\\Groups\\Depth_Pass.Preset\", \"Deep_Pass\"\n\
\' Print out the new list of passes\n\
getPassInfo\n\
function getPassInfo()\n\
	\' We can use a string expression with a wildcard to specify all passes \n\
	\' and then convert it to an XSICollection for easier navigation \n\
	Set oPasses = CreateObject( \"XSI.Collection\" )\n\
	oPasses.SetAsText \"Passes.*\"\n\
	\' Loop through the passes and print their names\n\
	For Each p In oPasses\n\
		Application.LogMessage p.Name\n\
	Next\n\
end function\n\
\' Output of the above script (the current pass is repeated):\n\
\'INFO : \"List\"\n\
\'INFO : \"Default_Pass\"\n\
\'INFO : \"Default_Pass\"\n\
\'INFO : \"-------------------\"\n\
\'INFO : \"List\"\n\
\'INFO : \"Default_Pass\"\n\
\'INFO : \"Different_Pass\"\n\
\'INFO : \"Deep_Pass\"\n\
\'INFO : \"Deep_Pass\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/RenderPasses.html\">RenderPasses</a> <a href=\"#!/url=./si_cmds/RenderAllPasses.html\">RenderAllPasses</a> <a href=\"#!/url=./si_cmds/CreatePartition.html\">CreatePartition</a> <a href=\"#!/url=./si_cmds/CreateLayer.html\">CreateLayer</a> <a href=\"#!/url=./si_cmds/CreatePass.html\">CreatePass</a> <a href=\"#!/url=./si_cmds/GetCurrentPass.html\">GetCurrentPass</a> <a href=\"#!/url=./si_cmds/SetCurrentPass.html\">SetCurrentPass</a> <a href=\"#!/url=./si_cmds/DeleteCurrentPass.html\">DeleteCurrentPass</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";