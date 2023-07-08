var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSIFactory.CreateShaderDef</title>\n\
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
            <h1>XSIFactory.CreateShaderDef</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/XSIFactory.html\">XSIFactory</a>.CreateShaderDef <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v9.0 (2011)</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Creates a new shader definition. Softimage shader definitions can be accessed via either \n\
<a href=\"#!/url=./si_om/XSIApplication.ShaderDefinitions.html\">XSIApplication.ShaderDefinitions</a> or by <a href=\"#!/url=./si_om/ShaderDef.ProgID.html\">ShaderDef.ProgID</a>\n\
via <a href=\"#!/url=./si_om/XSIApplication.GetShaderDef.html\">XSIApplication.GetShaderDef</a>.\n\
<br /><br />\n\
Note: Each shader definition has a unique ProgID which is built from the four specified components. For more information, see \n\
<a href=\"#!/url=./files/cus_shaders_ProgID.htm\">Instantiating Shader Definitions and the ProgID</a>.\n\
<br /><br />\n\
Tip: On-the-fly (nonpersisted) shader definitions act like parser-based shader definitions that are never parsed \n\
(<a href=\"#!/url=./si_om/ShaderDef.Parsed.html\">ShaderDef.Parsed</a> always returns false) and have no definition file (<a href=\"#!/url=./si_om/ShaderDef.DefinitionPath.html\">ShaderDef.DefinitionPath</a> \n\
is always empty). However, you must specify a parser name, and it cannot be either \"Softimage\" or the name of a parser already registered.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>ShaderDef XSIFactory.CreateShaderDef( String in_strParserName, String in_strClassName, UInt32 in_ulMajor, UInt32 in_ulMinor );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = XSIFactory.CreateShaderDef( in_strParserName, in_strClassName, in_ulMajor, in_ulMinor );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/ShaderDef.html\">ShaderDef</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">in_strParserName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		Name of the parser for the new shader definition. This is basically a dummy string, since shader \n\
		definitions created with this method are not defined by either plug-ins or parsers.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">in_strClassName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		Name of the shader class. If you don\'t specify a UI name for the shader definition, this \n\
		is the name that appears on the shader node when instantiated in the render tree.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">in_ulMajor		</td>\n\
		<td><a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
Major version number (\'2\' in v2.5)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">in_ulMinor		</td>\n\
		<td><a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
Minor version number (\'5\' in v2.5)		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
# This example demonstrates how to create a completely bogus shader \n\
# definition on the fly (ie., not to be persisted) and then how to\n\
# instantiate it on a scene object\n\
#\n\
from win32com.client import constants as si\n\
app = Application\n\
app.NewScene(\"\", False)\n\
# This function creates a bogus shader definition on the fly and returns its ProgID\n\
def CreateDefOnTheFly () :\n\
	otmpShaderDef = XSIFactory.CreateShaderDef(\"NoParser\", \"Nunce\", 1, 0)\n\
	otmpShaderDef.Category = \"Test Shaders\"\n\
	# family\n\
	otmpShaderDef.AddShaderFamily(\"mrTexture\")\n\
	# paramdef options (in)\n\
	otmpShadPDefOpts = XSIFactory.CreateShaderParamDefOptions()\n\
	otmpShadPDefOpts.SetTexturable(True)\n\
	otmpShadPDefOpts.SetShortName(\"squelch\")\n\
	# paramdef (in)\n\
	otmpInParams = otmpShaderDef.InputParamDefs\n\
	otmpInParams.AddParamDef2(\"west\", si.siColorParameterType, otmpShadPDefOpts)\n\
	# paramdef options (out)\n\
	otmpShadPDefOpts = XSIFactory.CreateShaderParamDefOptions()\n\
	otmpShadPDefOpts.SetTexturable(True)\n\
	otmpShadPDefOpts.SetShortName(\"splosh\")\n\
	# paramdef (out)\n\
	otmpOutParams = otmpShaderDef.OutputParamDefs\n\
	otmpOutParams.AddParamDef2(\"east\", si.siColorParameterType, otmpShadPDefOpts)\n\
	# renderer\n\
	otmpRendDef = otmpShaderDef.AddRendererDef(\"whoops\")\n\
	otmpRendOpts = otmpRendDef.RendererOptions\n\
	otmpRendOpts.Set(\"plain\", False)\n\
	# attributes\n\
	otmpAttrs = otmpShaderDef.Attributes\n\
	otmpAttrs.Set(\"chuckle\", \"on\")\n\
	otmpAttrs.Set(\"nbr\", 456123)\n\
	# return the ProgID of the new shader\n\
	return otmpShaderDef.ProgID\n\
# This function tests to see whether the specified parser name is \n\
# a registered parser name already (if it is, the script will not\n\
# attempt to create a definition on the fly (to avoid errors)\n\
def IsNotRegistered( in_name ) :\n\
	oPC = Application.Plugins\n\
	for p in oPC :\n\
		for pi in p.Items :\n\
			if pi.Type == \"Shader Language Parser\" :\n\
				if pi.Name == in_name :\n\
					return False\n\
	# If no match is found, return true\n\
	return True\n\
# First check to make sure the parser name isn\'t already registered\n\
if IsNotRegistered(\"NoParser\"):\n\
	# Create the shader definition on the fly and get its ProgID\n\
	sProgID = CreateDefOnTheFly()\n\
	# Now create a cube and instantiate this shader on it\n\
	oCube = app.CreatePrim(\"Cube\", \"MeshSurface\")\n\
	app.CreateShaderFromProgID(sProgID, \"Sources.Materials.DefaultLib.Scene_Material\")\n\
	app.SIConnectShaderToCnxPoint(\"Sources.Materials.DefaultLib.Scene_Material.Nunce.east\", \n\
		\"Sources.Materials.DefaultLib.Scene_Material.Phong.ambient\", False)\n\
	# Finally, remove it (we don\'t want to clutter up the system)\n\
	oRemoveMe = app.ShaderDefinitions(sProgID)\n\
	if oRemoveMe :\n\
		XSIFactory.RemoveShaderDef(oRemoveMe)\n\
else :\n\
	app.LogMessage(\"Parser name is already registered.\")</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/XSIFactory.RemoveShaderDef.html\">XSIFactory.RemoveShaderDef</a> <a href=\"#!/url=./si_om/XSIFactory.CreateShaderParamDefOptions.html\">XSIFactory.CreateShaderParamDefOptions</a> <a href=\"#!/url=./si_om/XSIApplication.ShaderDefinitions.html\">XSIApplication.ShaderDefinitions</a> <a href=\"#!/url=./si_om/XSIApplication.GetShaderDef.html\">XSIApplication.GetShaderDef</a> <a href=\"#!/url=./files/cus_shaders_ProgID.htm\">Instantiating Shader Definitions and the ProgID</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";