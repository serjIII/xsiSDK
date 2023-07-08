var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SIObject.Help</title>\n\
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
            <h1>SIObject.Help</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a>.Help</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Specifies the help file for an object as a <a href=\"#!/url=./files/String.htm\">String</a> (an empty string is \n\
returned if an object has no help file).<br /><br />\n\
The Help property is read-only for all objects except <a href=\"#!/url=./si_om/PluginItem.html\">PluginItem</a> and \n\
<a href=\"#!/url=./si_om/PluginRegistrar.html\">PluginRegistrar</a>. <br /><br />\n\
A plug-in (and plug-in item) help file can be an HTML page.<br /><br />\n\
By default, Softimage looks for a plug-in (and for a plug-in item) help file in the \"doc\" subfolder of the plug-in \n\
installation folder. Softimage assumes the help file has the same name as the plug-in (and as the plug-in item). For example, \n\
if the plug-in MyPlugin.js is located in the folder \"C:\\MyWorkgroup\\Application\\Plugins\" \n\
then Softimage looks in the folder \"C:\\MyWorkgroup\\Application\\Plugins\\Doc\" for a help file named \n\
MyPlugin.html, or MyPlugin.htm.<br /><br />\n\
If a plug-in (and plug-in item) help file has a different name or location, you can set this property on the\n\
PluginItem or PluginRegistrar object to specify the names of help files and, optionally, \n\
their locations. <br /><br />\n\
Notes:<br /><br />\n\
To specify the help file for a dynamic custom property (a property created with \n\
<a href=\"#!/url=./si_om/SceneItem.AddCustomProperty.html\">SceneItem.AddCustomProperty</a>) use <a href=\"#!/url=./si_om/PPGLayout.SetAttribute.html\">PPGLayout.SetAttribute</a> \n\
to set the siUIHelpFile attribute.\n\
<br /><br />\n\
The help file string for SPDL objects contains the location of the help file. It can also be accompanied \n\
by an identifier for indexing the help file. For example, \n\
\'HelpFile = \"C:\\MyWorkgroup\\Application\\Plugins\\Doc\\MyCustomHelp.htm\";\' and \'HelpID = 37;\'.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
String rtn = SIObject.Help;\n\
// set accessor\n\
SIObject.Help = String;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/* \n\
	This example shows how to specify the help\n\
	for a plug-in and for a custom property.\n\
*/\n\
function XSILoadPlugin( in_reg )\n\
{\n\
	in_reg.Author = \"sblair\";\n\
	in_reg.Name = \"MyPlugin\";\n\
	// Help file is in the same folder as the plug-in\n\
	var sHtm = \"MyPluginHelp.htm\";\n\
	in_reg.Help = XSIUtils.BuildPath( in_reg.OriginPath, sHtm );\n\
	var oPluginItem = in_reg.RegisterProperty(\"MyProperty\");\n\
	// Open a specific help topic for the property\n\
	sHtm = \"MyProperty.htm\";\n\
	oPluginItem.Help = XSIUtils.BuildPath( in_reg.OriginPath, sHtm );\n\
	//RegistrationInsertionPoint - do not remove this line\n\
	return true;\n\
}</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example shows how to specify help files for a plug-in \n\
\' and for specific plug-in items. The help files are assumed\n\
\' to be in the \"doc\" subfolder of the plug-in installation folder.\n\
\'\n\
Function XSILoadPlugin( in_reg )\n\
	\' register plugin information\n\
	in_reg.Author = \"Softimage Co.\" \n\
	in_reg.Name = \"Mesh Filter plugin\"\n\
	in_reg.Help = \"MeshFilter.htm\"\n\
	in_reg.URL = \"http://www.softimage.com\"\n\
	in_reg.Email = \"webmaster@softimage.com\"\n\
	\' set the version number of this plugin\n\
	in_reg.Major = 1\n\
	in_reg.Minor = 0 \n\
	\' register filter plugin items\n\
	set item = in_reg.RegisterFilter( \"Border Edge\", siFilterSubComponentEdge )\n\
	item.help = \"BorderEdge.htm\"\n\
	set item = in_reg.RegisterFilter( \"Triangle\", siFilterSubComponentPolygon )\n\
	item.help = \"Triangle.htm\"\n\
	in_reg.RegisterFilter \"Quad\", siFilterSubComponentPolygon \n\
	in_reg.RegisterFilter \"N-gon\", siFilterSubComponentPolygon \n\
	in_reg.RegisterFilter \"Border Point\", siFilterSubComponentPoint \n\
	in_reg.RegisterFilter \"Polygon Island\", siFilterSubComponentPolygon \n\
	XSILoadPlugin = true\n\
end Function</pre></td></tr>\n\
</table>\n\
</div><h4>3. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example shows how to get the plug-in items help files\n\
*/\n\
var items = Application.Plugins(\"Mesh Filter plugin\").Items;\n\
for (var i=0; i&lt;items.Count; i++) \n\
{\n\
	Application.LogMessage( items(i).Name + \" help file is \" + items(i).Help );\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/XSIUtils.BuildPath.html\">XSIUtils.BuildPath</a> <a href=\"#!/url=./si_om/PluginItem.HelpButton.html\">PluginItem.HelpButton</a> <a href=\"#!/url=./si_om/PluginRegistrar.HelpButton.html\">PluginRegistrar.HelpButton</a> <a href=\"#!/url=./si_om/Plugin.HelpButton.html\">Plugin.HelpButton</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";