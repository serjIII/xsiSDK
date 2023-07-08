var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>CopyPaste</title>\n\
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
            <h1>CopyPaste</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">CopyPaste</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Pastes a copy of something without going through the clipboard. This is the scripting \n\
equivalent of a drag-and-drop operation. You can use this command to move items that\n\
already exist in the scene (for example, reparenting a scene object) or to paste\n\
items that are sitting in the TransientObjectContainer (for example, instances of \n\
built-in property sets such as the Annotation). \n\
<br /><br />\n\
Note: The CopyPaste command is the only way to transfer things from the TransientObjectContainer \n\
to the current scene, because the TransientObjectContainer is inaccessible from the UI. \n\
<br /><br />\n\
Warning: Prior to v7.0, you could also use this command to create a shader from preset \n\
and copy it to the TransientObjectContainer until you were ready to connect it in the\n\
RenderTree. However, this command no longer supports that functionality: now you must \n\
create a temporary copy of the shader in the scene\'s material library \n\
(\"Sources.Materials.DefaultLib.Scene_Material\") using the <a href=\"#!/url=./si_cmds/CreateShaderFromPreset.html\">CreateShaderFromPreset</a>\n\
command instead. See the <a href=\"#!/url=./si_cmds/ReplaceShader.html\">ReplaceShader</a> reference page for an example.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>CopyPaste( [Source], [FileName], Target, [Mode] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Source		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/objectexpr.htm\">Object</a> to copy 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">FileName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 File or preset to import in the scene 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Target		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Target <a href=\"#!/url=./files/objectexpr.htm\">object</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Mode		</td>\n\
		<td>vbCopyPaste constant or <a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
The (VisualBasic) mode to copy paste.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
vbDefaultCopyPaste			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">vbDefaultCopyPaste (0)					</td>\n\
					<td>Use the default mode of copy paste.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">vbCutSource (1)					</td>\n\
					<td>Cut and paste					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">vbCopySource (2)					</td>\n\
					<td>Copy and paste					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">vbLinkSource (3)					</td>\n\
					<td>Link source to destination.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
# Example of creating a temporary custom property (aka custom pset)\n\
# which can be written to before actually depositing in the scene\n\
# \n\
app = Application\n\
from win32com.client import constants as c\n\
app.NewScene( \"\", 0 )\n\
# Demonstrate how you can use it to create a built-in custom pset\n\
presetFullPath = XSIUtils.BuildPath( \n\
	app.InstallationPath(c.siFactoryPath), \n\
	\"Data\", \"DSPresets\", \"Properties\", \"Annotation.Preset\"\n\
)\n\
oAnnotation = app.CreateObjectFromPreset2( presetFullPath, \"Notes\" )\n\
if ( oAnnotation ) :\n\
	# Even though it only exists on the clipboard you can still populate it\n\
	app.InspectObj( oAnnotation, \"\", \"Annotation Test\", \"siModal\", 0 )\n\
	# Notice how the owner of this annotation doesn\'t have to \n\
	# exist until you are ready to cut-and-paste it\n\
	oNull = app.ActiveSceneRoot.AddModel(\"\", \"Jerry\")\n\
	app.CopyPaste(oAnnotation, \"\", oNull, 1)\n\
	# Just to prove that it exists any modifications \n\
	for oParam in oNull.Properties(\"Notes\").Parameters :\n\
		app.LogMessage( oParam.Name + \": \" + str(oParam.Value) )\n\
else :\n\
	app.LogMessage( \"Couldn\'t create Annotatation property.\" )\n\
# Expected results (similar to):\n\
# INFO : Title: \n\
# INFO : Text: need to refine right bicep\n\
# INFO : Keyword: modeling\n\
# INFO : Flag 1: False\n\
# INFO : Flag 2: True</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to use the CopyPaste command to \n\
	reparent scene objects by physically moving objects under \n\
	their new parents (a la drag-and-drop in the UI).\n\
*/\n\
// Create a new scene with 4 nulls\n\
var app = Application;\n\
NewScene(null, false);\n\
GetPrim(\"Null\");\n\
GetPrim(\"Null\");\n\
GetPrim(\"Null\");\n\
GetPrim(\"Null\");\n\
// Reparent null2 and null3 under null1\n\
CopyPaste(\"null3\", null, \"null1\", 1);\n\
CopyPaste(\"null2\", null, \"null1\", 1);\n\
// Reparent null under null2\n\
CopyPaste(\"null\", null, \"null2\", 1);\n\
// Print the visual hierarchy\n\
ShowMeTheHierarchy(app.ActiveSceneRoot, \"\");\n\
// Expected results:\n\
// INFO : Camera_Root\n\
// INFO : ...Camera\n\
// INFO : ...Camera_Interest\n\
// INFO : light\n\
// INFO : null1\n\
// INFO : ...null3\n\
// INFO : ...null2\n\
// INFO : ......null\n\
// Convenience function to print out a graphical representation \n\
// of the hierarchy in the scene starting at the specified object\n\
function ShowMeTheHierarchy(in_parent, in_depth)\n\
{\n\
	var kid = new Enumerator(in_parent.Children);\n\
	for (; !kid.atEnd(); kid.moveNext()) {\n\
		app.LogMessage(in_depth + kid.item().FullName);\n\
		if (kid.item().Children.Count) {\n\
			ShowMeTheHierarchy(kid.item(), in_depth + \"...\");\n\
		}\n\
	}\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/Copy.html\">Copy</a> <a href=\"#!/url=./si_cmds/Cut.html\">Cut</a> <a href=\"#!/url=./si_cmds/Paste.html\">Paste</a> <a href=\"#!/url=./si_cmds/CopyAnimation.html\">CopyAnimation</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";