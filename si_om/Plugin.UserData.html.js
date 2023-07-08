var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Plugin.UserData</title>\n\
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
            <h1>Plugin.UserData</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Plugin.html\">Plugin</a>.UserData</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v6.01</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Sets or returns <a href=\"#!/url=./files/Variant.htm\">Variant</a> data inside the Plugin object. Softimage does not care about the content \n\
or meaning of the data. You can store a wide variety of data, including simple types, <a href=\"#!/url=./files/Array.htm\">Array</a>s \n\
and object references. Once added the data remains active as long as Softimage is running or until you manually \n\
unload the plug-in. The user data is not persisted. <br /><br />\n\
Note: Plugin.UserData is commonly used for storing a value that can be accessed locally in the plug-in module or \n\
globally by other plug-ins. For scripted plug-ins, it is strongly recommended to use Plugin.UserData as instead\n\
of using global variables defined in the plug-in module. This is particularly important in the context of \n\
rendering operations where plug-ins get executed in multiple threads. When a plug-in gets executed in a different \n\
thread, Softimage makes a copy of its running scripting engine and parses the plug-in file again which re-initializes \n\
any plug-in global variables that are referred to in the plug-in implementation. Plugin.UserData on the other \n\
hand ensures the data integrity across threads. \n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Object rtn = Plugin.UserData;\n\
// set accessor\n\
Plugin.UserData = Object;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\"># How to access a plug-in user data\n\
from win32com.client.dynamic import Dispatch \n\
# Optional global variable to speed up data access\n\
g_userdata = None\n\
def GetUserData():\n\
	if ( g_userdata == None ):\n\
		# Dictionary not defined yet\n\
		# Get the plug-in object storing the dictionary\n\
		myPlugin = Application.Plugins(\"My plugin\");\n\
		if ( myPlugin.UserData == None ):		\n\
			# Dictionary not defined yet, create it and add some object\n\
			dict = Dispatch( \"Scripting.Dictionary\" )\n\
			dict[ \'SurfPos\' ] = XSIMath.CreateVector3()\n\
			dict[ \'OutPos\' ] = XSIMath.CreateVector3()\n\
			# Store the new dictionary in the plug-in\n\
			myPlugin.UserData = dict\n\
		# Cache the dictionary in this module for fast access\n\
		g_userdata = myPlugin.UserData\n\
	return g_userdata</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/XSIApplication.UnloadPlugin.html\">XSIApplication.UnloadPlugin</a> <a href=\"#!/url=./si_om/PluginRegistrar.UserData.html\">PluginRegistrar.UserData</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";