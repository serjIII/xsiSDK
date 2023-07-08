var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ImportModel</title>\n\
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
            <h1>ImportModel</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ImportModel</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Imports a model from an .emdl file. To execute this command a .emdl file is required.\n\
<br /><br />\n\
By default the model is imported as a regular model, but if the argument Reference is True, the model\n\
will be imported as a referenced model. When importing a referenced model, the model is loaded in the scene\n\
but a referenced model is never saved with a scene. Each time a scene that contains referenced models is loaded,\n\
all referenced models are imported from their original location. \n\
<br /><br />\n\
Note: There is a preference to add a prefix (referenced_) to the model name when importing a referenced model. \n\
The option is turned on by default. The preference is located under: preferences.General.refmodelprefix\n\
<br /><br />\n\
You can access this command from the main menu in File->Import->Model.\n\
<br /><br />\n\
This command supports the downloading of files off the internet. If the filename\n\
specified is a URL then the file will be downloaded locally before the command\n\
is executed.\n\
<br /><br />\n\
Warning: This command is undoable since version 4, but note that when undoing an import model, only the model is \n\
deleted, all objects that are nested under a different container like materials, image clip, etc. are not deleted. \n\
You can use the different commands to cleanup un-used material or image clips. Undoing ImportModel on a referenced \n\
model has no effect.\n\
<br /><br />\n\
Note: This command uses <a href=\"#!/url=./files/OutArgDefined.htm\">output arguments</a>. C# and some \n\
scripting languages (such as JScript, PerlScript and Python) don\'t support arguments passed by reference so you \n\
need to use the best workaround for your situation:\n\
<br /><br />\n\
For scripting languages this command returns an <a href=\"#!/url=./files/ISIVTCollection.htm\">ISIVTCollection</a> \n\
which you can use to get the output arguments. \n\
<br /><br />\n\
For C# you can use the <a href=\"#!/url=./si_om/XSIApplication.ExecuteCommand.html\">XSIApplication.ExecuteCommand</a> method to call this command. ExecuteCommand \n\
packs the output arguments into a C# System.Object containing an <a href=\"#!/url=./files/Array.htm\">Array</a> of the output arguments (see\n\
<a href=\"#!/url=./files/csharp_understand_CallingCommandsfromCSharp.htm\">Calling Commands from C#</a>).\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>ImportModel( FileName, [Parent], [Reference], [Value], [Name], [ShareOptions], [ExternalCnxMappingTemplate] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">FileName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Name of the model file to import. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Parent		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Object or  model to use as the parent of the imported model 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Reference		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
\n\
		As of v6.0, this parameter is obsolete. To import model as a referenced model, use the \n\
		<a href=\"#!/url=./si_cmds/CreateRefModel.html\">CreateRefModel</a> command instead. \n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Value		</td>\n\
		<td><a href=\"#!/url=./si_om/Model.html\">Model</a>		</td>\n\
		<td>\n\
 Returns the model 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The name to give to the model imported		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ShareOptions		</td>\n\
		<td><a href=\"#!/url=./si_om/siImportShareOptions.html\">siImportShareOptions</a>		</td>\n\
		<td>\n\
\n\
		Bit field values of type <a href=\"#!/url=./files/Integer.htm\">Integer</a> that specify the different options \n\
		for sharing objects when importing a model.<br /><br />\n\
		See <a href=\"#!/url=./si_om/siImportShareOptions.html\">siImportShareOptions</a> to know what can be shared during model import.<br /><br />\n\
		Sharing image clips: Image clips are identical if they \n\
		refer to the same image source and all their parameters are equal, therefore FCurves \n\
		on the parameters are ignored for the comparaison. <br /><br />\n\
		Note that the image sources are always shared when importing a model.<br /><br />\n\
		Sharing Materials: Materials are identical based on their name, their library, their number of shaders\n\
		and their shaders\' order. If we find a material with the same library.materialName, the same number of shaders\n\
		which appear in the same order, we reuse it. <br /><br />\n\
		Sharing Layers/Partitions: Layers and partitions are shared also based on their name. When the \n\
		model is exported, it remembers the name of the layers and partitions for each objects, so when \n\
		importing a model, if there is a layer or a partition with the same name, the object goes in it. <br /><br />\n\
		Referenced models share only image clips that are locked by referenced models, or if \n\
		the image clip is unused. Standard models share only imageclips that are not locked \n\
		at all.<br /><br />			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siImportShareOptionsImageClips AND siImportShareOptionsLayers AND siImportShareOptionsPartitions			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ExternalCnxMappingTemplate		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		This parameter contains a list of model separated by a comma, that is used to resolved \n\
		the objects that we try to reconnect at the end of the import of referenced models.<br /><br />\n\
		If this parameter is not null, the model is reconnected at the end of the import, else no \n\
		reconnection is done. <br /><br />\n\
		For referenced model only (when the parameter Reference is True): We always reconnect\n\
		the model. If this parameter is null we will try to reconnect it to the original model \n\
		name when the model was first exported.\n\
			</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
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
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' This will import test.emdl as a ref model and reconnect envelop operators on deformers which are in model test2\n\
ImportModel \"T:\\XSI_Project\\Models\\test.emdl\", , True, ,,true, \"test2\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/ExportModel.html\">ExportModel</a> <a href=\"#!/url=./si_cmds/ImportDotXSI.html\">ImportDotXSI</a> <a href=\"#!/url=./si_cmds/ImportRefModels.html\">ImportRefModels</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";