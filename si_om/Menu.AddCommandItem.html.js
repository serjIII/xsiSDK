var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Menu.AddCommandItem</title>\n\
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
</style><link rel=\"stylesheet\" href=\"si_om/css/en.css\" type=\"text/css\" /><script>$(document).ready(function() { yepnope.injectJs(\"./si_om/lib/utils.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Menu.AddCommandItem</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Menu.html\">Menu</a>.AddCommandItem</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Adds a menu item at the end of the menu and attaches a command. The command \n\
is fired when the menu item is selected. You can attach any native or custom \n\
commands you want to a menu item. If your menu is attached to a contextual \n\
menu and one of your command\'s arguments takes the selected object(s) by \n\
default, then the currently selected objects is passed to your command. The \n\
target object under the cursor is also passed in as part of the selected \n\
objects. However if no objects are selected, then only the target is passed \n\
in. See  <a href=\"#!/url=./si_om/ArgumentCollection.AddWithHandler.html\">ArgumentCollection.AddWithHandler</a> for defining a \n\
custom command\'s argument that takes the selected objects by default.\n\
<br /><br />\n\
Tip: See any of the examples for creating a\n\
<a href=\"#!/url=./examples/Addons/SimpleMenu/netview_SimpleMenu.htm\">Simple Menu plug-in</a>\n\
to see this method in action.\n\
<br /><br />Note: This method could return an invalid object in python, use <a href=\"#!/url=./si_om/Menu.AddCommandItem2.html\">Menu.AddCommandItem2</a> instead.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>MenuItem Menu.AddCommandItem( String in_pLabel, Object in_cmd );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = Menu.AddCommandItem( Label, Command );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>The newly created <a href=\"#!/url=./si_om/MenuItem.html\">MenuItem</a> object.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Label		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The menu item label.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Command		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a> or <a href=\"#!/url=./si_om/Command.html\">Command</a>		</td>\n\
		<td>\n\
\n\
		The name of a command or a command object that \n\
		will be invoked when the menu item is selected.\n\
		This is the real name (<a href=\"#!/url=./si_om/SIObject.Name.html\">SIObject.Name</a>) \n\
		of the command, not the <a href=\"#!/url=./si_om/Command.ScriptingName.html\">Command.ScriptingName</a>.\n\
		You can find the Name of a command by running it and then checking \n\
		the Edit menu (where the Name of the last executed command always \n\
		appears after \'Repeat\' and \'Undo\').  Commands are also listed by\n\
		name in the customize toolbar dialog and the scene explorer.\n\
			</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/MenuItem.html\">MenuItem</a> <a href=\"#!/url=./si_om/Command.html\">Command</a> <a href=\"#!/url=./si_om/Command.Enabled.html\">Command.Enabled</a> <a href=\"#!/url=./si_om/Command.ScriptingName.html\">Command.ScriptingName</a> <a href=\"#!/url=./si_om/MenuItem.Command.html\">MenuItem.Command</a> <a href=\"#!/url=./si_om/ArgumentCollection.AddWithHandler.html\">ArgumentCollection.AddWithHandler</a> <a href=\"#!/url=./si_om/siMenuAnchorPoints.html\">siMenuAnchorPoints</a> <a href=\"#!/url=./si_cmds/callbacks.html\">Definition Callbacks for Menus</a> <a href=\"#!/url=./examples/Addons/SimpleMenu/netview_SimpleMenu.htm\">Simple Menu plug-in example</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";