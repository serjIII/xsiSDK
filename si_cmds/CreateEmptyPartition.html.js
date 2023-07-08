var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>CreateEmptyPartition</title>\n\
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
            <h1>CreateEmptyPartition</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">CreateEmptyPartition</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Creates a new empty partition of the specified type (either object or light) \n\
and inspects it. This is the scripting equivalent of deselecting everything\n\
in the scene and then selecting Pass - Partition > New from the Render \n\
menu. <br /><br />\n\
Note: After creating an empty partition, you can add items to it, but <a href=\"#!/url=./si_cmds/CreatePartition.html\">CreatePartition</a> \n\
and <a href=\"#!/url=./si_cmds/SICreatePartition.html\">SICreatePartition</a> command already performs both tasks simultaneously.<br /><br />\n\
A partition is a division of a pass and behaves like a group. Partitions \n\
are used to organize scene elements within a pass. There are only two types \n\
of partitions, object and light. A render pass creates a picture layer of a \n\
scene that can be composited with any other passes to create a complete image.<br /><br />\n\
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
		<td class=\"example\"><pre>CreateEmptyPartition( [Target], [Name], [Type], [Value] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Target		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Pass to add the partition to 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Selected pass, or current pass			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Name of the new partition 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"Partition\"			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Type		</td>\n\
		<td><a href=\"#!/url=./si_om/siPartitionType.html\">siPartitionType</a>		</td>\n\
		<td>\n\
Type of the partition to create 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siObjectPartition			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Value		</td>\n\
		<td><a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> containing a <a href=\"#!/url=./si_om/Group.html\">Group</a> object		</td>\n\
		<td>\n\
 Returns the new partition 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\'	This example demonstrates how to create an empty partition\n\
\'	and then add an object to it. It also shows how you can \n\
\'	access partition information from a particular pass.\n\
\'\n\
\' Create a new scene \n\
NewScene , false\n\
\' Create a cone to add to one of the partitions\n\
Set oCone = GetPrim( \"Cone\", \"MeshSurface\" )\n\
\' Create a standard (default) pass \n\
CreatePass , \"PassMeBy\", oPass\n\
\' Print partition info for default pass\n\
getPartInfo oPass\n\
\' Now add an empty light partition to the pass and add the light to it\n\
CreateEmptyPartition oPass, \"Sweet_Sorrow\", siLightPartition, oLightPart\n\
AddToPartition oLightPart(0), \"Light\"\n\
\' Print new partition info \n\
getPartInfo oPass\n\
function getPartInfo( in_pass )\n\
	Application.LogMessage \"Partitions for \" &amp; in_pass &amp; \":\"\n\
	Application.LogMessage \"--------------------------------\"\n\
	\' Create an XSICollection with the partition info\n\
	set oParts = CreateObject( \"XSI.Collection\" )\n\
	oParts.SetAsText in_pass &amp; \".Partitions.*\" \n\
	For Each p In oParts\n\
		Application.LogMessage p\n\
	Next\n\
end function\n\
\' Output of the above script:\n\
\'INFO : \"Partitions for Passes.PassMeBy:\"\n\
\'INFO : \"--------------------------------\"\n\
\'INFO : \"Passes.PassMeBy.Background_Objects_Partition\"\n\
\'INFO : \"Passes.PassMeBy.Background_Lights_Partition\"\n\
\'\n\
\'INFO : \"Partitions for Passes.PassMeBy:\"\n\
\'INFO : \"--------------------------------\"\n\
\'INFO : \"Passes.PassMeBy.Background_Objects_Partition\"\n\
\'INFO : \"Passes.PassMeBy.Background_Lights_Partition\"\n\
\'INFO : \"Passes.PassMeBy.Sweet_Sorrow\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/RenderPasses.html\">RenderPasses</a> <a href=\"#!/url=./si_cmds/CreateLayer.html\">CreateLayer</a> <a href=\"#!/url=./si_cmds/CreatePartition.html\">CreatePartition</a> <a href=\"#!/url=./si_cmds/CreatePass.html\">CreatePass</a> <a href=\"#!/url=./si_cmds/GetCurrentPass.html\">GetCurrentPass</a> <a href=\"#!/url=./si_cmds/SetCurrentPass.html\">SetCurrentPass</a> <a href=\"#!/url=./si_cmds/DeleteCurrentPass.html\">DeleteCurrentPass</a> <a href=\"#!/url=./si_cmds/SICreateLayer.html\">SICreateLayer</a> <a href=\"#!/url=./si_cmds/SICreateEmptyPartition.html\">SICreateEmptyPartition</a> <a href=\"#!/url=./si_cmds/AddToPartition.html\">AddToPartition</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";