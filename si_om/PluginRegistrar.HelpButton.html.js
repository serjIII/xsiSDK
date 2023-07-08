var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PluginRegistrar.HelpButton</title>\n\
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
            <h1>PluginRegistrar.HelpButton</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/PluginRegistrar.html\">PluginRegistrar</a>.HelpButton</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v13.0 (2015)</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Sets or returns, as a <a href=\"#!/url=./files/String.htm\">String</a>, the help button file replacing the factory \"?\"\n\
button in the property pages of the plug-in items of this plug-in being registered.\n\
An empty string is returned if the plug-in has no help button file.<br /><br />\n\
The help button will be shown in a plug-in item property page only if there is a help file\n\
associated with the plug-in item.<br /><br />\n\
The plug-in help button file must be a BMP file with a height of 18 pixels and a width no wider than 100 pixels.\n\
If the help button file doesn\'t respect the criteria, the factory \"?\" button will be displayed in the plug-in items property pages.<br /><br />\n\
By default, Softimage looks for a plug-in help button file in the \"doc\" subfolder of the plug-in \n\
installation folder. Softimage assumes the help button file has the same name as the plug-in, with\n\
the \"_HelpButton\" string appended to it. For example, if the plug-in MyPlugin.js is located in \n\
the folder \"C:\\MyWorkgroup\\Application\\Plugins\" then Softimage looks in the folder \n\
\"C:\\MyWorkgroup\\Application\\Plugins\\Doc\" for a help button file named MyPlugin_HelpButton.bmp.<br /><br />\n\
If a plug-in help button file has a different name or location, you can set this property\n\
to specify the name of help button file and, optionally, its location.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
String rtn = PluginRegistrar.HelpButton;\n\
// set accessor\n\
PluginRegistrar.HelpButton = String;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example shows how to specify help button file to a plug-in \n\
\' and to specific plug-in items. The help button files are assumed\n\
\' to be in the \"doc\" subfolder of the plug-in installation folder.\n\
\'\n\
Function XSILoadPlugin( in_reg )\n\
	\' register plugin information\n\
	in_reg.Author = \"Autodesk Softimage\" \n\
	in_reg.Name = \"Testing Help Button\"\n\
	in_reg.Major = 1\n\
	in_reg.Minor = 0 \n\
	in_reg.Help = \"Testing_Help_Button.htm\"\n\
	in_reg.HelpButton = \"Testing_Help_Button.bmp\"\n\
	\' no need to set the help button file for this property,\n\
	\' the \"MyFirstProperty_HelpButton.bmp\" file located in the\n\
	\' \"doc\" subfolder will automatically be found by Softimage\n\
	set item = in_reg.RegisterProperty( \"MyFirstProperty\" )\n\
	\'item.HelpButton = \"MyFirstProperty_HelpButton.bmp\"\n\
	\' this help button file is in the same folder as the plug-in\n\
	set item = in_reg.RegisterProperty( \"MySecondProperty\" )\n\
	sHelpButton = \"MyHelpButtonFile.bmp\"\n\
	item.HelpButton = XSIUtils.BuildPath( in_reg.OriginPath, sHelpButton )\n\
	\' no need to set the help button file for this plug-in item,\n\
	\' the help button file set to the plug-in is suitable for this plug-in item\n\
	\' (considering there is no \"MyThirdProperty_HelpButton.bmp\" file located\n\
	\' in the \"doc\" subfolder of the plug-in installation folder)\n\
	in_reg.RegisterProperty \"MyThirdProperty\"\n\
	XSILoadPlugin = true\n\
end Function</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example shows how to get the plug-in items help button files\n\
*/\n\
var items = Application.Plugins( \"Testing Help Button\" ).Items;\n\
for( var i = 0; i &lt; items.Count; i++ ) \n\
{\n\
	Application.LogMessage( items( i ).Name + \" help button file is \" + items( i ).HelpButton );\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Plugin.HelpButton.html\">Plugin.HelpButton</a> <a href=\"#!/url=./si_om/PluginItem.HelpButton.html\">PluginItem.HelpButton</a> <a href=\"#!/url=./si_om/PPGLayout.SetAttribute.html\">PPGLayout.SetAttribute</a> <a href=\"#!/url=./si_om/SIObject.Help.html\">SIObject.Help</a> <a href=\"#!/url=./si_om/XSIUtils.BuildPath.html\">XSIUtils.BuildPath</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";