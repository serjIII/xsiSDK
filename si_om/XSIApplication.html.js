var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSIApplication</title>\n\
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
            <h1>XSIApplication</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">XSIApplication</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_XSIApplication\">Object Hierarchy</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\"><a href=\"#!/url=./si_om/Application.html\">Application</a></p>\n\
<p class=\"level3\">XSIApplication</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.5</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> The XSIApplication object derives from the <a href=\"#!/url=./si_om/Application.html\">Application</a>; its properties and methods are \n\
specific to Softimage, whereas <a href=\"#!/url=./si_om/Application.html\">Application</a> contains only generic properties and methods. \n\
XSIApplication manages access to high-level objects such as the Softimage active <a href=\"#!/url=./si_om/Project.html\">Project</a>, \n\
<a href=\"#!/url=./si_om/Selection.html\">Selection</a> object, Softimage <a href=\"#!/url=./si_om/Command.html\">Command</a> objects, etc.<br /><br /> \n\
XSIApplication is an intrinsic object that represents the running instance of the Softimage application.\n\
An intrinsic (global) object is one that you can refer to by name in your code without creating an \n\
instance of it first; in this case the name is Application. In other words, script writers can assume that \n\
there is a global variable with the name \'Application\' of type \'XSIApplication\'. <br /><br />\n\
However, within NetView scripts this object is not available as an intrinsic so it is neccessary to \n\
explicitly create an instance of the <a href=\"#!/url=./si_om/XSIApplication.html\">XSIApplication</a> object. The scripting syntax for \n\
explicitly creating an XSIApplication object within NetView is illustrated below in the examples. <br /><br />\n\
In normal (non-Netview) VBScript and JScript code it is possible to drop the \"Application.\" prefix and \n\
call methods and properties of this object directly. For example calling \"LogMessage\" is actually a short \n\
form for \"Application.LogMessage\".  This syntactic shortcut is not available to Python or PerlScript. <br /><br />\n\
It is also possible to invoke all Softimage <a href=\"#!/url=./si_om/Command.html\">Command</a>s as if they were methods of XSIApplication.\n\
This is the best way to invoke commands inside Python and PerlScript and for all script languages that run \n\
inside Netview.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.ActivateWorkgroup.html\">ActivateWorkgroup</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.AddCommand.html\">AddCommand</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.AddWorkgroup.html\">AddWorkgroup</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Application.ClassName.html\">ClassName</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.CloseUndo.html\">CloseUndo</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.CreateAddon.html\">CreateAddon</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.CreateCommand.html\">CreateCommand</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.CreateProject.html\">CreateProject</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.CreateProject2.html\">CreateProject2</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.ExecuteCommand.html\">ExecuteCommand</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Application.ExecuteScript.html\">ExecuteScript</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Application.ExecuteScriptCode.html\">ExecuteScriptCode</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.ExecuteScriptCommand.html\">ExecuteScriptCommand</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.FindObjects2.html\">FindObjects2</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.GetCommandByScriptingName.html\">GetCommandByScriptingName</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.GetCustomPropertyCount.html\">GetCustomPropertyCount</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.GetInstallationPath2.html\">GetInstallationPath2</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.GetObjectFromID.html\">GetObjectFromID</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.GetObjectFromID2.html\">GetObjectFromID2</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.GetShaderDef.html\">GetShaderDef</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.InstallAddon.html\">InstallAddon</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.LoadPlugin.html\">LoadPlugin</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Application.LogMessage.html\">LogMessage</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.OpenUndo.html\">OpenUndo</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.RegisterShaderCustomParameterType.html\">RegisterShaderCustomParameterType</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.RegisterShaderFamily.html\">RegisterShaderFamily</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.RemoveCommand.html\">RemoveCommand</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.RemoveWorkgroup.html\">RemoveWorkgroup</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.RescanWorkgroups.html\">RescanWorkgroups</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.UnInstallAddon.html\">UnInstallAddon</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.UnloadPlugin.html\">UnloadPlugin</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.UpdatePlugins.html\">UpdatePlugins</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Application.Version.html\">Version</a>		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Properties</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.ActiveProject2.html\">ActiveProject2</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.ActiveProject3.html\">ActiveProject3</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.ActiveSceneRoot.html\">ActiveSceneRoot</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.ActiveToolName.html\">ActiveToolName</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.Commands.html\">Commands</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.Desktop.html\">Desktop</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.Devices.html\">Devices</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.Dictionary.html\">Dictionary</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.EventInfos.html\">EventInfos</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.FCurveSelection.html\">FCurveSelection</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.Filters.html\">Filters</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.InstallationPath.html\">InstallationPath</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.Interactive.html\">Interactive</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.IsUndoing.html\">IsUndoing</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.License.html\">License</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.Platform.html\">Platform</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.Plugins.html\">Plugins</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.Preferences.html\">Preferences</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.Renderers.html\">Renderers</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.Selection.html\">Selection</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.ShaderDefinitions.html\">ShaderDefinitions</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Application.StatusBar.html\">StatusBar</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSIApplication.Workgroups.html\">Workgroups</a>		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\'	hello world from vbscript\n\
\'\n\
Application.LogMessage \"Hello Softimage world\"\n\
\'In vbscript we don\'t need to specify \n\
\'the Application. prefix\n\
LogMessage \"Shortcut of Hello World\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' How to create an instance of the Application Object\n\
\' from VBScript for use within a NetView html page.\n\
\'\n\
Dim oApplication\n\
set oApplication = CreateObject(\"XSI.Application\") \n\
\'Use SIObject.Application to convert from Application object \n\
\'to XSIApplication\n\
Dim oXSIApplication\n\
set oXSIApplication = oApplication.Application\n\
oXSIApplication.Application.LogMessage \"Hello from Netview\"</pre></td></tr>\n\
</table>\n\
</div><h4>3. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	hello world from jscript\n\
*/\n\
Application.LogMessage(\"Hello Softimage world\");\n\
//This shortcut is equivalent\n\
LogMessage(\"Hello from ShortCut code\");</pre></td></tr>\n\
</table>\n\
</div><h4>4. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	How to create an instance of the Application Object\n\
	from JScript for use within a NetView html page.\n\
*/\n\
var oApplication = new ActiveXObject(\"XSI.Application\"); \n\
var oXSIApplication = oApplication.Application;\n\
oXSIApplication.LogMessage( \"There are \" + oXSIApplication.Plugins.Count + \" plugins installed\" ) ;</pre></td></tr>\n\
</table>\n\
</div><h4>5. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
#	hello world from pythonscript\n\
#\n\
Application.LogMessage(\"Hello Softimage world\")</pre></td></tr>\n\
</table>\n\
</div><h4>6. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#Python script example, using the global Application\n\
#object to invoke the NewScene command.\n\
Application.NewScene( \"\",0 )</pre></td></tr>\n\
</table>\n\
</div><h4>7. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
#	How to create an instance of the Application Object\n\
#	from pythonscript for use within a NetView html page.\n\
#\n\
# Normally you create a instance of an automation object using:\n\
# import win32com.client;\n\
# o=win32com.client.Dispatch(\'XSI.Application\')	\n\
# however win32com is not a trusted module so you get around\n\
# this by defining a vbscript function called getXSIApp() \n\
# that returns the Application object.\n\
try :\n\
	Application = window.getXSIApp()\n\
except :\n\
	print(\"No browser\")\n\
# Note: Python is not a fully functional choice for web programming.\n\
# We recommend writing the Python code as Softimage Custom Commands\n\
# which are invoked using a little JScript or VBScript embedded in the\n\
# html.</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Application.html\">Application</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";