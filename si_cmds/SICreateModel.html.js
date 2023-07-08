var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SICreateModel</title>\n\
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
            <h1>SICreateModel</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SICreateModel</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Creates a new <a href=\"#!/url=./si_om/Model.html\">Model</a> in the <a href=\"#!/url=./si_om/Scene.html\">Scene</a>. If you do \n\
not explicitly specify what objects (including other models) that the new model \n\
will contain (via the InputObj parameter), then any objects that are currently \n\
selected become children of the created node.\n\
<br /><br />\n\
You can also specify which node to parent the new model under (via the InputObj \n\
parameter).\n\
<br /><br />\n\
This command is similar in syntax and behavior to the <a href=\"#!/url=./si_cmds/CreateModel.html\">CreateModel</a> \n\
command, except that it does not change the selection.\n\
<br /><br />\n\
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
		<td class=\"example\"><pre>SICreateModel( [InputObj], [Name], [Parent], [Value] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">InputObj		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of objects \n\
		(including other models) to be reparented under the new model.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Name of the model 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Parent		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Object or  model to use as the parent of the new model 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Value		</td>\n\
		<td><a href=\"#!/url=./si_om/Model.html\">Model</a>		</td>\n\
		<td>\n\
 Returns the model 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#---------------------------------------------------------\n\
# This example demonstrates how to use the SICreateModel \n\
# command in Python.\n\
#---------------------------------------------------------\n\
app = Application\n\
app.NewScene( \"\", 0 )\n\
# First create a node off of the scene root.\n\
ivtInfo = app.SICreateModel( \"\", \"Root_Node\" )\n\
Root_NodeObj = ivtInfo.Value( \"Value\" )\n\
app.LogMessage( \"Created \" + Root_NodeObj.Name )\n\
# Now create a sub-node, and make it the child of a \n\
# third node. Notice that since \"Sub-node\" is selected \n\
# when \"Another_Root\" is created, it becomes a child.\n\
ivtInfo = app.SICreateModel( \"\", \"Sub-node\" )\n\
Sub_NodeObj = ivtInfo.Value( \"Value\" )\n\
app.LogMessage( \"Created \" + Sub_NodeObj.Name )\n\
app.SelectObj( \"Sub-node\" )\n\
ivtInfo = app.SICreateModel( \"\", \"Another_Root\" )\n\
Another_RootObj = ivtInfo.Value( \"Value\" )\n\
app.LogMessage( \"Created \" + Another_RootObj.Name )\n\
app.DeselectAll()\n\
# Now make another node, with parent \"Another_Root\", \n\
# and child \"Root_Node\". Notice that now, \"Another_Root\" \n\
# is the only top-level model, with children \"Mid_Root\" \n\
# and \"Sub-node\", and \"Mid_Root\" has child \"Root_Node\"\n\
ivtInfo = app.SICreateModel( \"Root_Node\", \"Mid_Root\", \"Another_Root\" )\n\
Mid_RootObj = ivtInfo.Value( \"Value\" )\n\
app.LogMessage( \"Created \" + Mid_RootObj.Name )\n\
app.DeselectAll()\n\
#---------------------------------------------------------\n\
# Output from this script:\n\
#---------------------------------------------------------\n\
#INFO : Created Root_Node\n\
#INFO : Created Sub-node\n\
#INFO : Created Another_Root\n\
#INFO : Created Mid_Root</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/SICreateModel.html\">SICreateModel</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";