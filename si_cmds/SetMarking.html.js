var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SetMarking</title>\n\
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
            <h1>SetMarking</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SetMarking</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Sets the current <a href=\"#!/url=./files/markingexpr.htm\">marked parameter list</a>. \n\
Marking parameters is a way of indicating which parameters you want to use for another task. For \n\
example, you can mark parameters so that only their animation is copied or removed, or you can mark\n\
the parameters you want to store in an action to be used in the animation mixer. You can also mark \n\
parameters to be used when scaling or offsetting an animation, or with linked parameters or scripted operators.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SetMarking( PathList );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">PathList		</td>\n\
		<td><a href=\"#!/url=./files/markingexpr.htm\">Marked parameter list</a>		</td>\n\
		<td>\n\
List of relative object or parameter paths to mark. 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' Use marking to key an null\'s X scaling, Y orientation and Z position \n\
\'\n\
dim oNull,m,p\n\
set oNull = GetPrim(\"Null\")\n\
\'\n\
\' Mark sclx, roty, and posz, then key the marked \n\
\' parameters at the current frame\n\
\'\n\
SetMarking \"kine.local.sclx,kine.local.roty,kine.local.posz\"\n\
SaveKey\n\
\'\n\
\' Log the parameters that are marked (we prepend the \n\
\' name of oNull to make the output easier to compare, \n\
\' and because we know we only marked oNull\'s parameters).\n\
\'\n\
for each m in GetMarking()\n\
	logmessage oNull &amp; \".\" &amp; m &amp; \" is marked\"\n\
next\n\
\'\n\
\' Use the X3DObject.NodeAnimatedParameters property to \n\
\' log the null\'s animated parameters.\n\
\'\n\
for each p in oNull.NodeAnimatedParameters( siAnySource )\n\
	logmessage p.FullName &amp; \" is animated\"\n\
next \n\
\' Results of running this script:\n\
\'INFO : \"null.kine.local.sclx is marked\"\n\
\'INFO : \"null.kine.local.roty is marked\"\n\
\'INFO : \"null.kine.local.posz is marked\"\n\
\'INFO : \"null.kine.local.posz is animated\"\n\
\'INFO : \"null.kine.local.roty is animated\"\n\
\'INFO : \"null.kine.local.sclx is animated\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/ClearMarking.html\">ClearMarking</a> <a href=\"#!/url=./si_cmds/AddToMarking.html\">AddToMarking</a> <a href=\"#!/url=./si_cmds/RemoveFromMarking.html\">RemoveFromMarking</a> <a href=\"#!/url=./si_cmds/GetMarking.html\">GetMarking</a> <a href=\"#!/url=./si_om/Parameter.Marked.html\">Parameter.Marked</a> <a href=\"#!/url=./si_om/XSICollection.FindObjectsByMarkingAndCapabilities.html\">XSICollection.FindObjectsByMarkingAndCapabilities</a> <a href=\"#!/url=./si_om/ArgumentHandler.html\">ArgumentHandler</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";