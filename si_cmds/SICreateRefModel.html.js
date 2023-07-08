var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SICreateRefModel</title>\n\
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
            <h1>SICreateRefModel</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SICreateRefModel</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v6.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Creates a referenced model in the scene. You can use this command to create a new instance of an existing\n\
model on disk or specify the name of a model file that does not yet exist. It also allows you to specify\n\
whether to activate the new model, what resolution to use, and under which model or object to parent it.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = SICreateRefModel( [FileName], [ModelName], [ResolutionName], [Parent], [Activate], [CreateFile], [ExternalCnxMappingTemplate], [ShareOptions] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>The new referenced <a href=\"#!/url=./si_om/Model.html\">Model</a></p></div>\n\
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
 If a filename is specified, it is loaded and used for the first resolution.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ModelName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 The model name. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
The name of the file (specified in Filename)			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ResolutionName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 The name of the first resolution. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
res1			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Parent		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Object or  model to use as the parent of the imported model 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Scene Root			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Activate		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
True to import the model for the first resolution. If false, the model stays offloaded. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
True			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">CreateFile		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 \n\
		If the file specified does not exist yet, this argument tells Softimage to automatically create a \n\
		dummy model file (directories are also created). This is useful in a multiple-artist production \n\
		pipeline to prepare the layout of a shot for a top-down approach before all the files exist.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ExternalCnxMappingTemplate		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		This parameter contains a list of model separated by a comma, that is used to resolved \n\
		the objects that we try to reconnect at the end of the import of referenced models.<br /><br />\n\
		The model is reconnected at the end of the import. If this parameter is null we will try \n\
		to reconnect it to the original model name when the model was first exported.\n\
			</td>\n\
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
		model is exported it remember the name of the layers and partitions for each objects, so when \n\
		importing a model, and there is a layer or a partition with the same name the object goes in it. <br /><br />\n\
		Referenced models share only image clips that are locked by referenced models, or if \n\
		the image clip is unused. Standard models share only imageclips that are not locked \n\
		at all.<br /><br />			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siImportShareOptionsAll			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/CreateRefModel.html\">CreateRefModel</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";