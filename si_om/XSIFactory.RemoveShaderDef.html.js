var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSIFactory.RemoveShaderDef</title>\n\
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
            <h1>XSIFactory.RemoveShaderDef</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/XSIFactory.html\">XSIFactory</a>.RemoveShaderDef <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v9.0 (2011)</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>Removes the specified shader definition from Softimage.</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>XSIFactory.RemoveShaderDef( ShaderDef in_ShaderDef );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>XSIFactory.RemoveShaderDef( in_ShaderDef );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">in_ShaderDef		</td>\n\
		<td><a href=\"#!/url=./si_om/ShaderDef.html\">ShaderDef</a>		</td>\n\
		<td>\n\
Shader definition to remove		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to create a completely bogus shader \n\
	definition on the fly (ie., not to be persisted), instantiate it \n\
	on a scene object, and then remove it.\n\
*/\n\
NewScene(\"\", false);\n\
// First check to make sure the parser name isn\'t already registered\n\
// Create the shader definition on the fly and get its ProgID\n\
var sProgID = CreateDefOnTheFly();\n\
// Now create a cube and instantiate this shader on it\n\
var oCube = CreatePrim(\"Cube\", \"MeshSurface\");\n\
CreateShaderFromProgID(sProgID, \"Sources.Materials.DefaultLib.Scene_Material\");\n\
SIConnectShaderToCnxPoint(\"Sources.Materials.DefaultLib.Scene_Material.Chauncey.splish\", \n\
	\"Sources.Materials.DefaultLib.Scene_Material.Phong.ambient\", false);\n\
// List all the on-the-fly shader definitions found\n\
FindOnTheFlyDefs();\n\
// Now remove it\n\
var oRemoveMe = Application.ShaderDefinitions(sProgID);\n\
if (oRemoveMe) {\n\
	XSIFactory.RemoveShaderDef(oRemoveMe);\n\
	// List any remaining on-the-fly shader definitions \n\
	FindOnTheFlyDefs();\n\
} else {\n\
	Application.LogMessage(\"Couldn\'t find \"+sProgID+\" shader definition\");\n\
}\n\
// Expected output:\n\
// INFO : Found 2 on-the-fly definition(s): RendererUserPorts.mental ray.1.0, Gardiner.Chauncey.1.0\n\
// INFO : Found 1 on-the-fly definition(s): RendererUserPorts.mental ray.1.0\n\
// This function demonstrates how to find a a list of on-the-fly shader definitions \n\
function FindOnTheFlyDefs ()\n\
{\n\
	var aOTFDefs = new Array();\n\
	var e = new Enumerator(Application.ShaderDefinitions);\n\
	for (; !e.atEnd(); e.moveNext()) {\n\
		var oMaybe = e.item();\n\
		if (oMaybe.ParserBased &amp;&amp; !oMaybe.DefinitionPath) {\n\
			aOTFDefs.push(oMaybe);\n\
		}\n\
	}\n\
	// Write out results\n\
	if (aOTFDefs.length) {\n\
		Application.LogMessage(\"Found \"+aOTFDefs.length+\" on-the-fly definition(s): \"+aOTFDefs.join(\", \"));\n\
	} else {\n\
		Application.LogMessage(\"No on-the-fly definitions found\");\n\
	}\n\
}\n\
// This function creates a bogus shader definition on the fly and returns its ProgID\n\
function CreateDefOnTheFly () \n\
{\n\
	var otmpShaderDef = XSIFactory.CreateShaderDef(\"Gardiner\", \"Chauncey\", 1, 0);\n\
	otmpShaderDef.Category = \"Test Shaders\";\n\
	// family\n\
	otmpShaderDef.AddShaderFamily(\"mrTexture\");\n\
	// paramdef options (in)\n\
	var otmpShadPDefOpts = XSIFactory.CreateShaderParamDefOptions();\n\
	otmpShadPDefOpts.SetTexturable(true);\n\
	otmpShadPDefOpts.SetShortName(\"squelch\");\n\
	// paramdef (in)\n\
	var otmpInParams = otmpShaderDef.InputParamDefs;\n\
	otmpInParams.AddParamDef(\"squerch\", siColorParameterType, otmpShadPDefOpts);\n\
	// paramdef options (out)\n\
	otmpShadPDefOpts = XSIFactory.CreateShaderParamDefOptions();\n\
	otmpShadPDefOpts.SetTexturable(true);\n\
	otmpShadPDefOpts.SetShortName(\"splosh\");\n\
	// paramdef (out)\n\
	var otmpOutParams = otmpShaderDef.OutputParamDefs;\n\
	otmpOutParams.AddParamDef(\"splish\", siColorParameterType, otmpShadPDefOpts);\n\
	// renderer\n\
	var otmpRendDef = otmpShaderDef.AddRendererDef(\"whoops\");\n\
	otmpRendOpts = otmpRendDef.RendererOptions;\n\
	otmpRendOpts.Set(\"plain\", false);\n\
	// attributes\n\
	var otmpAttrs = otmpShaderDef.Attributes;\n\
	otmpAttrs.Set(\"chuckle\", \"on\");\n\
	otmpAttrs.Set(\"nbr\", 456123);\n\
	// return the ProgID of the new shader\n\
	return otmpShaderDef.ProgID;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/XSIFactory.CreateShaderDef.html\">XSIFactory.CreateShaderDef</a> <a href=\"#!/url=./si_om/XSIFactory.CreateShaderParamDefOptions.html\">XSIFactory.CreateShaderParamDefOptions</a> <a href=\"#!/url=./si_om/XSIApplication.ShaderDefinitions.html\">XSIApplication.ShaderDefinitions</a> <a href=\"#!/url=./si_om/XSIApplication.GetShaderDef.html\">XSIApplication.GetShaderDef</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";