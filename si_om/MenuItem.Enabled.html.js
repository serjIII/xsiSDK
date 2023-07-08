var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MenuItem.Enabled</title>\n\
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
            <h1>MenuItem.Enabled</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/MenuItem.html\">MenuItem</a>.Enabled</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Sets or returns a <a href=\"#!/url=./files/Boolean.htm\">Boolean</a> indicating whether the menu item is enabled\n\
(true) or not. Menu objects can also be enabled or disabled which means all menu items \n\
defined in a menu are affected. This property is typically used for updating a menu \n\
item based on a specific context.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Boolean rtn = MenuItem.Enabled;\n\
// set accessor\n\
MenuItem.Enabled = Boolean;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example showing how to enable/disable custom menus defined in \n\
	a self-installing plug-in.\n\
	Adds a menu in the top menu bar with 3 menu items.\n\
	The first item is a greyed out menu item\n\
	The second item is greyed out submenu item\n\
	The third item allows you to enable or disable the first and second item. \n\
*/\n\
function XSILoadPlugin( in_reg )\n\
{\n\
	in_reg.Author = \"Softimage SDK team\";\n\
	in_reg.Name = \"DemoMenuPlugin\";\n\
	in_reg.Major = 1;\n\
	in_reg.Minor = 0;\n\
	var bSubmenu = true; // value ignored for top level menus\n\
	var bDynamic = true;\n\
	in_reg.RegisterMenu(siMenuMainTopLevelID,\"Demo Menu\",bSubmenu,bDynamic);\n\
	return true;\n\
}\n\
function DemoMenu_Init( ctxt )\n\
{	\n\
	if ( ctxt.UserData == undefined )\n\
	{\n\
		// disable demo menu items if the user data is not set yet\n\
		ctxt.UserData = false;\n\
	}\n\
	var menu = ctxt.Source;\n\
	var bEnabled = ctxt.UserData;\n\
	var strTitle = \"Demo menu item is enabled\";\n\
	var strSubmenuTitle = \"Demo sub menu is enabled\";\n\
	if ( bEnabled == false )\n\
	{\n\
		strTitle = \"Demo menu item is disabled\";\n\
		strSubmenuTitle = \"Demo sub menu is disabled\";\n\
	}\n\
	var menuitem = menu.AddCallbackItem(strTitle,\"OnDemoMenuItem\");\n\
	menuitem.Enabled = bEnabled;\n\
	var submenu = menu.AddItem( strSubmenuTitle, siMenuItemSubmenu );\n\
	submenu.AddCallbackItem(strTitle,\"OnDemoMenuItem\");\n\
	submenu.Enabled = bEnabled;	\n\
	menu.AddCallbackItem(\"Toggle Demo menu\",\"OnToggleDemoMenuItem\");\n\
	return true;\n\
}\n\
function OnDemoMenuItem( in_ctxt )\n\
{\n\
	LogMessage( \"OnDemoMenuItem\" );\n\
}\n\
function OnToggleDemoMenuItem( in_ctxt )\n\
{	\n\
	// toggles the enabled flag\n\
	if ( in_ctxt.UserData == true )\n\
	{\n\
		in_ctxt.UserData = false;\n\
	}\n\
	else\n\
	{\n\
		in_ctxt.UserData = true;\n\
	}\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";