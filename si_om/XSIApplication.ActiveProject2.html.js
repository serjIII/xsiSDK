var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSIApplication.ActiveProject2</title>\n\
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
            <h1>XSIApplication.ActiveProject2</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/XSIApplication.html\">XSIApplication</a>.ActiveProject2</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v6.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns or sets the active <a href=\"#!/url=./si_om/XSIProject.html\">XSIProject</a> object.\n\
<br /><br />\n\
Note: If you are setting the active project with scene currently loaded, a file \n\
browser will prompt you to save the current scene as a new file the next time you \n\
save the scene. This is because you are now in a new project so the location of \n\
the \'current\' scene file has changed. \n\
<br /><br />Note: This method could return an invalid object in python, use <a href=\"#!/url=./si_om/XSIApplication.ActiveProject3.html\">XSIApplication.ActiveProject3</a> instead.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Project rtn = XSIApplication.ActiveProject2;\n\
// set accessor\n\
XSIApplication.ActiveProject2 = Project;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// \n\
// This example demonstrates how to set the current project with jscript\n\
//\n\
// Backup the current project\n\
var sOriginalProjectPath = Application.ActiveProject2.Path\n\
Application.LogMessage( \"Original Active Project: \" + sOriginalProjectPath );\n\
// Set the active project to be XSI_Samples\n\
var sPath = XSIUtils.BuildPath(\n\
	Application.InstallationPath(siFactoryPath), \n\
	\"Data\", \"NewProject\"\n\
);\n\
Application.ActiveProject2 = Application.CreateProject(sPath);\n\
Application.LogMessage ( \"New Active Project: \" + Application.ActiveProject2.Path );\n\
// Set back the original project\n\
Application.ActiveProject2 = Application.CreateProject( sOriginalProjectPath );\n\
Application.LogMessage ( \"New Active Project: \" + Application.ActiveProject2.Path );// INFO : Original Active Project: C:\\Program Files\\Autodesk\\Softimage 2011 289 ship/Data/NewProject\n\
// INFO : Original Active Project: C:\\Program Files\\Autodesk\\Softimage 2011 289 ship/Data/NewProject\n\
// INFO : New Active Project: C:\\Program Files\\Autodesk\\Softimage 2011 289 ship/Data/NewProject\n\
// INFO : New Active Project: C:\\Program Files\\Autodesk\\Softimage 2011 289 ship/Data/NewProject</pre></td></tr>\n\
</table>\n\
</div><h4>2. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
# This example demonstrates how to set the current project with python\n\
#\n\
app = Application\n\
from win32com.client import constants as cns\n\
# Backup the current project\n\
sOriginalProjectPath = app.ActiveProject3.Path;\n\
app.LogMessage( \"Original Active Project: \" + sOriginalProjectPath );\n\
# Set the active project to be XSI_Samples\n\
sPath = app.InstallationPath( cns.siFactoryPath );\n\
sPath += \"/Data/NewProject\";\n\
app.ActiveProject3 = app.CreateProject2( sPath );\n\
app.LogMessage( \"New Active Project: \" + app.ActiveProject3.Path );\n\
# Set back the original project\n\
app.ActiveProject3 = app.CreateProject2( sOriginalProjectPath );\n\
app.LogMessage( \"New Active Project: \" + app.ActiveProject3.Path );</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/XSIApplication.CreateProject.html\">XSIApplication.CreateProject</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";