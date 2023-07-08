var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>OpenView</title>\n\
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
            <h1>OpenView</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">OpenView</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Opens a new editor or other type of view in a floating window. This command also\n\
allows you to change which panel appears in the toolbar/palettes panel (provided\n\
that you haven\'t removed that panel from your customized layout -- see the warning\n\
below). You can display the Toolbar Panel (containing the main toolbar menus) or \n\
the Weight Paint Panel.<br /><br />\n\
You can use this command to open multiple instances of any view that supports \n\
multiple instances (for example, two explorers) by setting the Reuse parameter to \n\
False. The views that support multiple instances are noted in the value list of\n\
the Type parameter.<br /><br />\n\
Tip: There also some specialized commands available which take special arguments. \n\
For example, <a href=\"#!/url=./si_cmds/OpenNetView.html\">OpenNetView</a> allows you to specify which URL to open; \n\
<a href=\"#!/url=./si_cmds/OpenAnimationEditor.html\">OpenAnimationEditor</a> allows you to specify which animation view \n\
to show in the Animation Editor (for example, \"FCurve Editor\", \"DopeSheet\", etc.); \n\
and <a href=\"#!/url=./si_cmds/OpenXSIExplorer.html\">OpenXSIExplorer</a> allows you to specify which viewer to show \n\
in the XSI Explorer (for example \"Object View\", \"Schematic\", etc.). <br /><br />\n\
If you are looking for a way to open the transient explorer, you have to use \n\
<a href=\"#!/url=./si_cmds/OpenTransientExplorer.html\">OpenTransientExplorer</a> as there is no corresponding value for \n\
OpenView.<br /><br />\n\
Note: This command cannot switch between any of the toolbar menus on the Toolbar \n\
Panel. However, you can use this command with the Type argument set to \"Toolbar \n\
Panel\" to open the toolbar panel and then use the <a href=\"#!/url=./si_cmds/SwitchToolbar.html\">SwitchToolbar</a> \n\
command to switch between toolbar menus (Model, Animate, Render, Simulate, and Hair).<br /><br />\n\
Warning: If you are using a customized layout in which you have removed any of the \n\
embedded panels or views and you use this command to open one of those panels or \n\
views, it appears in a floating window. Conversely, if you have embedded a view in \n\
your customized layout and you use this command to open that view, it remains there\n\
and no extra window pops up (even if the view supports multiple instances).\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = OpenView( Type, [Reuse] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>\n\
Returns the view as an <a href=\"#!/url=./si_om/View.html\">View</a> object.\n\
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
		<td class=\"name\">Type		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 \n\
		Type of the new view. See <a href=\"#!/url=./si_cmds/Views.html#\">View Definitions</a> \n\
		for a list of the possible type strings you can use. \n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Reuse		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
\n\
		Reuse any existing floating view (has no effect on embedded panels or views). \n\
		<br /><br />\n\
		Note: This parameter only applies to views of the same type that are already \n\
		open. For example, it has no effect if you specify False when you are opening \n\
		the Script Editor for the first time.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
True			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' \n\
\' This example opens two explorers using the same floating window.\n\
\' \n\
OpenView \"Explorer\"\n\
OpenView \"Explorer\"\n\
\' If you move the one on top, you\'ll see there is no other explorer below.</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' \n\
\' This example opens two Render Trees using different floating windows.\n\
\' \n\
OpenView \"Render Tree\"\n\
OpenView \"Render Tree\", false\n\
\' If you move the one on top, you\'ll see there is another Render Tree below.</pre></td></tr>\n\
</table>\n\
</div><h4>3. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' \n\
\' This example opens the Weight Paint Panel, then the Toolbar Panel, then switches\n\
\' to the Simulate and then Hair menus on that panel. (It happens so fast\n\
\' that you can\'t really see it well in the UI, but you can run each line\n\
\' individually to see each result.)\n\
\' \n\
OpenView \"Weight Paint Panel\"\n\
OpenView \"Toolbar Panel\"\n\
SwitchToolbar 4\n\
SwitchToolbar 5</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/SwitchToView.html\">SwitchToView</a> <a href=\"#!/url=./si_cmds/SwitchToViewByType.html\">SwitchToViewByType</a> <a href=\"#!/url=./si_cmds/SwitchToolbar.html\">SwitchToolbar</a> <a href=\"#!/url=./si_cmds/OpenXSIExplorer.html\">OpenXSIExplorer</a> <a href=\"#!/url=./si_cmds/OpenAnimationEditor.html\">OpenAnimationEditor</a> <a href=\"#!/url=./si_cmds/OpenTransientExplorer.html\">OpenTransientExplorer</a> <a href=\"#!/url=./si_cmds/OpenNetView.html\">OpenNetView</a> <a href=\"#!/url=./si_om/Layout.CreateView.html\">Layout.CreateView</a> <a href=\"#!/url=./si_cmds/Views.html#\">View Definitions</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";