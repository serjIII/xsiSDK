var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ExportModel</title>\n\
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
            <h1>ExportModel</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ExportModel</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Exports a model to an .emdl file.<br /><br />\n\
This command is accessed from the main menu in File->Export->Model.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>ExportModel( [Model], [FileName], [IncludeSubModels], [CopyExtFiles] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Model		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Model to be exported. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Selected model			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">FileName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Location of new .emdl to save. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
User is prompted to specify where to save the file.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">IncludeSubModels		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 True to include submodels. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
True			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">CopyExtFiles		</td>\n\
		<td><a href=\"#!/url=./si_om/siExternalFilesOperation.html\">siExternalFilesOperation</a>		</td>\n\
		<td>\n\
\n\
	The operation to execute with external files related to this model. Note that the destination must be valid Softimage Project, else the files will not be copied.<br /><br />\n\
	Note: External files contained in folders (and subfolders) specified by the \"Data Management > Excluded path(s) when copying external files\" preference value will not be copied.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siDoNotCopyExtFiles			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'---------------------------------------------------------\n\
\' VBScript example : Importing and exporting models using\n\
\' the ImportModel/ExportModel commands. Models and submodels\n\
\' are created and then exported and imported in this example.\n\
\'---------------------------------------------------------\n\
\' First create a model, a submodel, and primitives within them.\n\
SICreateModel , \"SubModel\"\n\
SICreateModel \"SubModel\", \"Model\"\n\
CreatePrim  \"Torus\", \"MeshSurface\", \"MyTorus\", \"SubModel\"\n\
CreatePrim  \"Cube\", \"MeshSurface\", \"MyCube\", \"Model\"\n\
\' Now export the models, once exporting submodels, and once not.\n\
emdlFile = Application.InstallationPath( siUserPath ) &amp; \"\\Model.emdl\"\n\
emdlSubFile = Application.InstallationPath( siUserPath ) &amp; \"\\Model_with_Submodels.emdl\"\n\
ExportModel \"Model\", emdlFile, False\n\
ExportModel \"Model\", emdlSubFile, True\n\
\' Now delete the models/primitives of the scene (so we can re-import them), \n\
DeleteObj \"Model.SubModel.MyTorus\"\n\
DeleteObj \"Model.SubModel\"\n\
DeleteObj \"Model.MyCube\"\n\
DeleteObj \"Model\"\n\
\' Now import the exported files. One as a referenced model, the other not.\n\
ImportModel emdlFile, , False, , \"Model (no submodels, not referenced)\"\n\
ImportModel emdlSubFile, , True, , \"Model (with submodels, referenced)\"\n\
\'---------------------------------------------------------\n\
\'INFO : Output from this script:\n\
\'INFO : \"4152 - Data loaded from file &lt;UserPath&gt;\\Model.emdl was created with build number: &lt;build_num&gt; - compatibility version: 300\"\n\
\'INFO : \"4152 - Data loaded from file &lt;UserPath&gt;\\Model_with_Submodels.emdl was created with build number: &lt;build_num&gt; - compatibility version: 300\"\n\
\'INFO : Object: \"Model___no_submodels__not_referenced_.MyCube\"\n\
\'INFO : Object: \"Model___with_submodels__referenced_.MyCube\"\n\
\'INFO : Object: \"Model___with_submodels__referenced_.SubModel.MyTorus\"\n\
\'---------------------------------------------------------</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/ImportModel.html\">ImportModel</a> <a href=\"#!/url=./si_cmds/ExportDotXSI.html\">ExportDotXSI</a> <a href=\"#!/url=./si_cmds/CopyExtFilesIntoProject.html\">CopyExtFilesIntoProject</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";