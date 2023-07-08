var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ImportRefModels</title>\n\
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
            <h1>ImportRefModels</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ImportRefModels</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v3.5</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Imports multiple models as referenced models from .emdl files. This allows you to \n\
import characters composed of multiple models, where the envelope is in a different \n\
model than the skeleton rig. <br /><br />\n\
The models\' file names are separated by commas. All referenced models are reconnected \n\
(for envelopes) to outside objects, if necessary. This is done once all models are loaded. <br /><br />\n\
Note: This command is not accessible from the UI.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = ImportRefModels( FileName, [Parent], [ExternalCnxMappingTemplate] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns the imported models as an <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a>.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">FileName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
File names of the model file to import, separated by commas. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Parent		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Name of the object or model to use as the parent of the imported models.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"\" (or \"Scene_Root\")			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ExternalCnxMappingTemplate		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		This parameter contains a list of models separated by commas, which is used to resolve the objects \n\
		that we try to reconnect at the end of the import of referenced models.<br /><br />\n\
		Note: All imported models are automatically added at the begining of this parameter.\n\
			</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">NewScene,false\n\
\' Create 2 models, one envelope and one skeleton rig\n\
CreatePrim \"Sphere\", \"MeshSurface\"\n\
Create2DSkeleton -4.31164311296239E-02, 4.0721568627451, 0, -4.31164311296239E-02, 3.45098039215692E-02, 0, 0, 0, 0, 4\n\
AppendBone \"eff\", -8.62328622592479E-03, -4.00313725490196, 0\n\
SelectObj \"sphere\", , True\n\
ApplyFlexEnv \"sphere;root,bone,bone1,eff\", False\n\
CreateModel\n\
SetValue \"Model.Name\", \"MyEnvelope\"\n\
SelectObj \"root\", \"BRANCH\"\n\
CreateModel\n\
SetValue \"Model.Name\", \"MyRig\"\n\
\' Export each model\n\
emdlFileEnv = Application.InstallationPath( siUserPath ) &amp; \"/Data/MyEnvelope.emdl\"\n\
emdlFileRig = Application.InstallationPath( siUserPath ) &amp; \"/Data/MyRig.emdl\"\n\
ExportModel \"MyEnvelope\", emdlFileEnv\n\
ExportModel \"MyRig\", emdlFileRig\n\
\' Delete them since we want to import them as reference\n\
DeleteObj \"B:myrig,B:myenvelope\"\n\
\' Now import both models at the same time.\n\
set oModels = ImportRefModels (emdlFileEnv &amp; \",\" &amp; emdlFileRig , \"\", \"Referenced_MyRig\")</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/ExportModel.html\">ExportModel</a> <a href=\"#!/url=./si_cmds/ImportModel.html\">ImportModel</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";