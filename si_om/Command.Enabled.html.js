var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Command.Enabled</title>\n\
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
            <h1>Command.Enabled</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Command.html\">Command</a>.Enabled</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns or sets a <a href=\"#!/url=./files/Boolean.htm\">Boolean</a> indicating whether the command \n\
is enabled (true) or not (false) This flag only affects the user interface; \n\
it does not block the command from being executed from a script. This \n\
property is often used in conjunction with the <a href=\"#!/url=./si_om/Menu.html\">Menu</a> API. \n\
You must call <a href=\"#!/url=./si_om/Command.Update.html\">Command.Update</a> to make sure the command \n\
state is updated.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Boolean rtn = Command.Enabled;\n\
// set accessor\n\
Command.Enabled = Boolean;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	Example showing how custom commands\n\
	can be defined and added to custom menus inside a\n\
	self installed plug-in.\n\
	Adds two entries to the \"Window\" menu \n\
	The first item is greyed out\n\
	The second item allows you to enable or disable the first item. \n\
*/\n\
function XSILoadPlugin( in_reg )\n\
{\n\
	// Called on startup of Softimage to defined\n\
	// what is contained in the script.  (We could potentially\n\
	// implement many PluginItems in the same script)\n\
	in_reg.Author = \"Softimage SDK Team\" ;\n\
	in_reg.Name = \"SDK Example - Enabled Command\" ;\n\
	in_reg.Major = 1 ;\n\
	in_reg.Minor = 1 ;\n\
	in_reg.RegisterMenu( siMenuMainWindowID, \"DemoMenu\", false ) ;\n\
	in_reg.RegisterCommand( \"DemoDisabled\", \"DemoDisabled\" );\n\
	in_reg.RegisterCommand( \"EnableDemoDisabled\", \"EnableDemoDisabled\" );\n\
	return true ;\n\
}\n\
function DemoMenu_Init( in_oCtxt )\n\
{\n\
	var menu = in_oCtxt.Source\n\
	menu.Name = \"&amp;Custom Deform\" ;\n\
	menu.AddCommandItem( \"&amp;Demo Disabled\", \"DemoDisabled\" ) ;\n\
	menu.AddCommandItem( \"&amp;Toggle Demo Disabled\", \"EnableDemoDisabled\" ) ;\n\
}\n\
function DemoDisabled_Init(in_oCtxt)\n\
{\n\
	var cmd = in_oCtxt.Source ;\n\
	cmd.Enabled = false ;\n\
	cmd.ReturnValue = false ;\n\
}\n\
function DemoDisabled_Execute()\n\
{\n\
	LogMessage( \"Thanks for enabling me finally\" ) ;\n\
}\n\
function EnableDemoDisabled_Init(in_oCtxt)\n\
{\n\
	var cmd = in_oCtxt.Source ;\n\
	cmd.Enabled = true ;\n\
	cmd.ReturnValue = false ;\n\
}\n\
function EnableDemoDisabled_Execute()\n\
{\n\
	var cmd = Application.Commands( \"DemoDisabled\" ) ;\n\
	// Toggle the enabled bit\n\
	if ( cmd.Enabled )\n\
		cmd.Enabled = false ;\n\
	else\n\
		cmd.Enabled = true ;\n\
	// Update the definition\n\
	cmd.Update() ;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";