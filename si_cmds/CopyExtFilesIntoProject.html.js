var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>CopyExtFilesIntoProject</title>\n\
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
            <h1>CopyExtFilesIntoProject</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">CopyExtFilesIntoProject</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Copies all external files used by the current scene into the current project or any \n\
given project. This command can be used to centralize all external files used by a \n\
scene, so the scene is self-contained in the project. In other words you can zip the \n\
project and extract it on another machine and all external files (like pictures, audio, \n\
etc.) will be there and valid. \n\
<br /><br />\n\
Files are copied into their corresponding directories (for example, a picture is copied \n\
into the Pictures directory).\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>CopyExtFilesIntoProject( SceneFileName, [Overwrite], [Models], [UpdateSourcePaths], [Files], [IgnoreFilesFromRefModel], [ConsiderOnlyFilesUnderProject], [ExcludedPaths] );</pre>		</td>	</tr>\n\
</table>\n\
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
		<td class=\"name\">SceneFileName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Full path name of the scene, or the project path of the destination. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Overwrite		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 True to overwrite the files if they exist. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Models		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		If a <a href=\"#!/url=./files/listexpr.htm\">list</a> of models is specified, \n\
		only files that relate to these models will be copied.<br /><br />\n\
		Note: External files contained in folders (and subfolders) specified by the ExcludedPaths \n\
		parameter will not be copied.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Selected objects.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">UpdateSourcePaths		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
\n\
		If true, all sources objects that have files that have been copied will be updated in the scene. \n\
		This way the scene will use the new files copied to the current project, so they will be relative \n\
		paths to the current project. If false, the files are copied locally but the scene still use the \n\
		files where they were before they were copied. This is true when using a SaveAs command.  \n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
True			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Files		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		With this argument you can specify which files are to be copied. When this argument is not empty \n\
		the Models argument is ignored. The files can be either the resolved path or the GUID of the file \n\
		path. Using a GUID will be more performing. Many files can be specified, they need to be separated \n\
		by a semi-colon (;).<br /><br />\n\
		Note: External files contained in folders (and subfolders) specified by the ExcludedPaths \n\
		parameter will not be copied.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Empty string.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">IgnoreFilesFromRefModel		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
\n\
		The files that are used by objects in a referenced model cannot be changed because the data is really \n\
		in the original model, not in the scene. Each time you load a scene, any models referenced  in that \n\
		scene are imported from the original location. So because of that you may want to ignore copying these \n\
		files for efficiency. <br /><br /> \n\
		Note: If this parameter is false, the files that are used by the referenced models will be copied but \n\
		the object owner of the path will not be changed because the objects are locked.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
True			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ConsiderOnlyFilesUnderProject		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
\n\
		If true, only the external files that are hierarchically under the current project will be copied over the given project.\n\
		This might be useful when using external files shared by many projects that are not located hierarchically under projects,\n\
		by preventing copying them into projects. If false, all external files will be copied over the given project.\n\
		Note: This parameter only makes sense when copying the external files from the current project to another project path.\n\
		When copying external files into the current project, having the parameter set to true won\'t copy any external files.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ExcludedPaths		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		External files contained in the specified excluded paths will not be copied.\n\
		When this parameter is not set (not to be confused with an empty string),\n\
		the \"Data Management > Excluded path(s) when copying external files\" preference value will be used.\n\
		Many paths can be specified, they need to be separated by a semi-colon (;).\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
The \"Data Management > Excluded path(s) when copying external files\" preference value.			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example shows how to use CopyExtFilesIntoProject command to copy the \n\
	external files used by a scene to a new destination.\n\
*/\n\
NewScene( \"\", false );\n\
Application.LogMessage ( \"Current project: \" + Application.ActiveProject );\n\
var sPathNewProject = XSIUtils.BuildPath(\n\
	Application.InstallationPath( siFactoryPath ), \n\
	\"Data\", \"NewProject\"\n\
);\n\
Application.CreateProject( sPathNewProject );\n\
var sPathScn = XSIUtils.BuildPath(\n\
	Application.InstallationPath( siProjectPath ),\n\
	\"Scenes\", \"Texturing\", \"Head.scn\"\n\
);\n\
// Load a scene with textures\n\
OpenScene( sPathScn, false );\n\
var oScene = Application.ActiveProject.ActiveScene;\n\
// Now copy all files in the new project, by setting the last argument to false \n\
// the source path is not updated but the file is copied.\n\
var oImageSource = oScene.ImageClips(0).Source;\n\
Application.LogMessage( \"Before: \" + oImageSource.Parameters(\"FileName\").Value );\n\
CopyExtFilesIntoProject( sPathNewProject, true, null, false );\n\
Application.LogMessage( \"After: \" + oScene.ImageClips(0).Source.Parameters(\"FileName\").Value );\n\
// Now do the same but set the last argument to true, so we change the source\n\
Application.LogMessage( \"Before: \" + oScene.ImageClips(0).Source.Parameters(\"FileName\").Value );\n\
CopyExtFilesIntoProject( sPathNewProject, true, null, true )\n\
Application.LogMessage( \"After: \" + oScene.ImageClips(0).Source.Parameters(\"FileName\").Value );\n\
Application.LogMessage ( \"Current project: \" + Application.ActiveProject);\n\
// Expected results (note that your_current_project_path will not change): \n\
// INFO : Current project: $XSI_HOME\\Data\\XSI_SAMPLES\n\
// INFO : Before: $XSI_HOME/Application/rsrc/noIcon.pic\n\
// INFO : After: $XSI_HOME/Application/rsrc/noIcon.pic\n\
// INFO : Before: $XSI_HOME/Application/rsrc/noIcon.pic\n\
// INFO : After: $XSI_HOME/Application/rsrc/noIcon.pic\n\
// INFO : Current project: $XSI_HOME\\Data\\XSI_SAMPLES</pre></td></tr>\n\
</table>\n\
</div><h4>2. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
#     This example shows how to use CopyExtFilesIntoProject command to copy some \n\
#     specific files. This example is theorical because we copy some files that\n\
#     are already under the project.\n\
#\n\
from win32com.client import constants as c\n\
app = Application\n\
sFactory = app.InstallationPath( c.siFactoryPath )\n\
sProject = app.InstallationPath( c.siProjectPath )\n\
sScene2Open = XSIUtils.BuildPath( sProject, \"Scenes\", \"Texturing\", \"Head.scn\" )\n\
app.OpenScene( sScene2Open, 0, 0 )\n\
# Note that the files are separated by a semi-colon\n\
sFile1 = XSIUtils.BuildPath( sProject, \"Pictures\", \"Checks.pic\" )\n\
sFile2 = XSIUtils.BuildPath( sFactory, \"Application\", \"rsrc\", \"noIcon.pic\" )\n\
sFiles = sFile1 + \";\" + sFile2\n\
app.CopyExtFilesIntoProject( sProject, 1, \"\", 0, sFiles, 1 )</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/SaveSceneAs.html\">SaveSceneAs</a> <a href=\"#!/url=./si_cmds/ExportModel.html\">ExportModel</a> <a href=\"#!/url=./si_cmds/FileReference.GUID.html\">FileReference.GUID</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";