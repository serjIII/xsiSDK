var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>CreateOperatorWizard</title>\n\
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
            <h1>CreateOperatorWizard</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">CreateOperatorWizard</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v7.5</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Creates an instance of a custom operator wizard you can use to generate self-installing <a href=\"#!/url=./si_om/CustomOperator.html\">CustomOperator</a>\n\
plug-ins. The resulting wizard is a <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> nested under the SDK wizard model which itself resides \n\
under the scene root.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = CreateOperatorWizard( [DestinationDir_Optional], [PropName_Optional] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Newly created custom operator wizard as a <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> object.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">DestinationDir_Optional		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The destination folder for the plug-in to generate.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
If no destination folder is specified, the wizard property will be created in the user path.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PropName_Optional		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Name of the operator to create.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Custom Operator Wizard			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to create a custom operator wizard \n\
	using the CreateOperatorWizard command and then generate a very \n\
	simple custom operator using the new wizard.\n\
*/\n\
var sicowiz = CreateOperatorWizard();\n\
sicowiz.OperatorName = \"XYZOp\";\n\
sicowiz.ScriptLanguage = \"JScript\";\n\
// Declare output port\n\
CreatePrim(\"Cone\", \"MeshSurface\", null, null);\n\
sicowiz.OutObj = \"cone.kine.global\";\n\
// Add input port\n\
GetPrim(\"Null\");\n\
AddInputPortToOperatorWizard(sicowiz, \"null.kine.global\");\n\
// Declare parameters\n\
sicowiz.ParamType = \"siBool\";\n\
sicowiz.ParamName = \"BoolParam\";\n\
AddParamToOperatorWizard(sicowiz);\n\
sicowiz.ParamType = \"siFloat\";\n\
sicowiz.ParamName = \"FloatParam\";\n\
AddParamToOperatorWizard(sicowiz);\n\
// Generates the XYZOp implementation and plug-in\n\
GenerateOperatorPlugin(sicowiz);</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/GenerateOperatorPlugin.html\">GenerateOperatorPlugin</a> <a href=\"#!/url=./si_cmds/AddInputPortToOperatorWizard.html\">AddInputPortToOperatorWizard</a> <a href=\"#!/url=./si_cmds/AddParamToOperatorWizard.html\">AddParamToOperatorWizard</a> <a href=\"#!/url=./files/cus_ops_wizard.htm\">Operator Wizard help</a> <a href=\"#!/url=./si_cmds/CreateCommandWizard.html\">CreateCommandWizard</a> <a href=\"#!/url=./si_cmds/CreatePropertyWizard.html\">CreatePropertyWizard</a> <a href=\"#!/url=./si_cmds/CreateEventWizard.html\">CreateEventWizard</a> <a href=\"#!/url=./si_cmds/CreateICENodeWizard.html\">CreateICENodeWizard</a> <a href=\"#!/url=./si_cmds/CreateFilterWizard.html\">CreateFilterWizard</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";