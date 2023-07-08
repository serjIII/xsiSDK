var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>CreatePassWithPartition</title>\n\
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
            <h1>CreatePassWithPartition</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">CreatePassWithPartition</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Creates a new pass and allows the user to set visibility on background partition. \n\
This is the scripting equivalent of selecting Render > Pass - Partition > New \n\
with the object(s) you want to add to the partition already selected.<br /><br />\n\
A PARTITION is a division of a pass, which behaves like a group. Partitions \n\
are used to organize scene elements within a pass. There are only two types \n\
of partitions, object and light. Light partitions can only contain lights, \n\
and object partitions can only contain geometric objects. <br /><br />\n\
Each PASS that you create has at least two partitions, a background objects \n\
partition, which contains most or all of the scene\'s objects, and a background \n\
lights partition, which contains most or all of the scene\'s lights. \n\
The objects and lights that appear in the background partitions depend on \n\
how you create the pass. For example, if you create an empty pass, all of \n\
the scene\'s objects and lights are placed in the background partitions. \n\
Some pass presets, on the other hand, automatically create partitions (besides \n\
the background partitions) containing the objects that were selected when you \n\
created the pass. <br /><br />\n\
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
		<td class=\"example\"><pre>CreatePassWithPartition( [PresetObj], [Name], [ParamName], [InputObjs], [Value] );</pre>		</td>	</tr>\n\
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
If not specified, the name is automatically generated.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ParamName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Name of the new partition. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
If not specified, the name is automatically generated.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">InputObjs		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of objects to go in the partition. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Selected objects			</p>\n\
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
\'	This example demonstrates how to create a depth pass with \n\
\'	a partition containing a cone. It also shows how you can \n\
\'	access partition information from a particular pass.\n\
\'\n\
\' Create a new scene \n\
NewScene , false\n\
\' Create a cone to add to one of the partitions\n\
Set oCone = GetPrim( \"Cone\", \"MeshSurface\" )\n\
\' Create a depth pass with a partition for the cone\n\
CreatePassWithPartition InstallationPath( siFactoryPath ) _\n\
	&amp; \"\\Data\\DSPresets\\Groups\\Depth_Pass.Preset\", _\n\
	\"Deep_Pass\", \"Coney_Island\", oCone, oPass\n\
\' Print partition info\n\
Application.LogMessage \"Partitions for \" &amp; oPass &amp; \":\"\n\
Application.LogMessage \"--------------------------------\"\n\
\' Create an XSICollection with the partition info\n\
set oParts = CreateObject( \"XSI.Collection\" )\n\
oParts.SetAsText( \"Passes.Deep_Pass.Partitions.*\" )\n\
For Each p In oParts\n\
	Application.LogMessage p\n\
Next\n\
\' Output of the above script:\n\
\'INFO : \"Partitions for Passes.Deep_Pass:\"\n\
\'INFO : \"--------------------------------\"\n\
\'INFO : \"Passes.Deep_Pass.Background_Objects_Partition\"\n\
\'INFO : \"Passes.Deep_Pass.Background_Lights_Partition\"\n\
\'INFO : \"Passes.Deep_Pass.Coney_Island\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/RenderPasses.html\">RenderPasses</a> <a href=\"#!/url=./si_cmds/CreateLayer.html\">CreateLayer</a> <a href=\"#!/url=./si_cmds/CreatePass.html\">CreatePass</a> <a href=\"#!/url=./si_cmds/SICreatePass.html\">SICreatePass</a> <a href=\"#!/url=./si_cmds/SICreatePartition.html\">SICreatePartition</a> <a href=\"#!/url=./si_cmds/SICreateLayer.html\">SICreateLayer</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";