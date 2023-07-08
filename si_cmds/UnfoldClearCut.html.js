var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>UnfoldClearCut</title>\n\
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
            <h1>UnfoldClearCut</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">UnfoldClearCut</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v7.5</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Clears the cutting line associated with the specified Unfold <a href=\"#!/url=./si_om/Property.html\">Property</a>.\n\
<br /><br />\n\
Warning: This clears the entire cutting line for the property, even if you specify just a portion of it. For example,\n\
if a sphere\'s cutting line was originally set at \'sphere.edge[0,1,2,3,4]\' and you call this command with the Objects\n\
parameter set to \'sphere.edge[3,4]\', the sphere will have no cutting line at all set for the specified Unfold property.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oBoolean = UnfoldClearCut( UnfoldProperty, [Object(s)] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns a <a href=\"#!/url=./files/Boolean.htm\">Boolean</a> reporting whether or not the command was successful.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">UnfoldProperty		</td>\n\
		<td><a href=\"#!/url=./si_om/Property.html\">Property</a>		</td>\n\
		<td>\n\
The Unfold property from which you want to clear the cut(s).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Object(s)		</td>\n\
		<td><a href=\"#!/url=./files/listexpr.htm\">List of objects</a> or <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a>		</td>\n\
		<td>\n\
Object(s) containing the cutting line that you want to be removed from the Unfold property.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
If not specified, the current selection is used.			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to set up, modify, and remove \n\
	a cutting line for a grid on its Unfold property.\n\
*/\n\
NewScene(null, false);\n\
var g = CreatePrim(\"Grid\", \"MeshSurface\");\n\
// Apply the Unfold property to the grid and get a pointer to it\n\
UnfoldApply(g);\n\
var u = g.Properties(\"Unfold\");\n\
// Set the cutting line using 7 edges and log it\n\
UnfoldSetCut(u, \"grid.edge[14,34,51,68,71,73,75]\");\n\
LogCuts(u);\n\
// Add edges 2 and 3 to the current cutting line and log it again\n\
UnfoldAddToCut(\"grid.Unfold\", \"grid.edge[2,3]\");\n\
LogCuts(u);\n\
// Reset the cutting line \n\
UnfoldClearCut(\"grid.Unfold\", \"grid\");\n\
LogCuts(u);\n\
// Launch Unfolding computations (since there\'s no cutting line \n\
// there\'s nothing to do, as you can see from the Texture Editor)\n\
UnfoldUpdate(\"grid.Unfold\");\n\
OpenView(\"Texture Editor\");\n\
// -------------------------\n\
//\n\
//	Expected results\n\
//\n\
// INFO : Unfold cutting line: grid.edge[14,34,51,68,71,73,75]\n\
// INFO : Unfold cutting line: grid.edge[2,3,14,34,51,68,71,73,75]\n\
// INFO : Unfold cutting line: [empty]\n\
// -------------------------\n\
//\n\
//	Helper function\n\
//\n\
function LogCuts( in_prop )\n\
{\n\
	var a = Application;\n\
	UnfoldSelectCut(in_prop);\n\
	if (a.Selection.Count) { \n\
		a.LogMessage(in_prop.Name + \" cutting line: \" + a.Selection(0)); \n\
	} else { \n\
		a.LogMessage(in_prop.Name + \" cutting line: [empty]\"); \n\
	}\n\
	\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/UnfoldAddToCut.html\">UnfoldAddToCut</a> <a href=\"#!/url=./si_cmds/UnfoldAdjustUpdate.html\">UnfoldAdjustUpdate</a> <a href=\"#!/url=./si_cmds/UnfoldApply.html\">UnfoldApply</a> <a href=\"#!/url=./si_cmds/UnfoldApplySel.html\">UnfoldApplySel</a> <a href=\"#!/url=./si_cmds/UnfoldPackUpdate.html\">UnfoldPackUpdate</a> <a href=\"#!/url=./si_cmds/UnfoldRemoveFromCut.html\">UnfoldRemoveFromCut</a> <a href=\"#!/url=./si_cmds/UnfoldSelectCut.html\">UnfoldSelectCut</a> <a href=\"#!/url=./si_cmds/UnfoldSetCut.html\">UnfoldSetCut</a> <a href=\"#!/url=./si_cmds/UnfoldUpdate.html\">UnfoldUpdate</a> <a href=\"http://softimage.wiki.softimage.com/xsidocs/texmaps_props_Unfold.htm\">Unfold Property Editor reference</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";