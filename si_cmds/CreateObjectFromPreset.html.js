var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>CreateObjectFromPreset</title>\n\
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
            <h1>CreateObjectFromPreset</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">CreateObjectFromPreset</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Creates and returns a new object based on a preset. The object is created\n\
in the TransientObjectContainer meaning that it is not persisted in the scene\n\
or visible in the scene explorer.  This area is flushed each time a new scene\n\
is loaded.  This command can be useful for creating temporary \n\
<a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> objects as shown in the example below.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = CreateObjectFromPreset( PresetObj, [Name] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns the newly created object.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PresetObj		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		Preset object or full path of the preset file. See\n\
		<a href=\"#!/url=./si_cmds/ModelPresets.html\">Model Presets</a>,\n\
		<a href=\"#!/url=./si_cmds/PassPresets.html\">Pass Presets</a>,\n\
		<a href=\"#!/url=./si_cmds/PrimPreset.html\">Primitive Presets</a>,\n\
		<a href=\"#!/url=./si_cmds/PropPreset.html\">Property Presets</a>, and\n\
		<a href=\"#!/url=./si_cmds/ShaderPreset.html\">Shader Presets</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Name to give the created object 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	Example of creating a temporary custom property (aka custom pset).\n\
	This can be useful for showing a temporary yet non-modal custom pset\n\
	to the user.  The user doesn//t have to close the PPG immediately\n\
	yet the object does not clutter up the scene file.\n\
*/\n\
NewScene( \"\", false );\n\
// Demonstrate how you can use it to create a built-in custom pset\n\
var oAnnotation = CreateTemporaryCustomPSet( \"Annotation\", Application.InstallationPath(siFactoryPath), \"MyA\" );\n\
if ( oAnnotation ) {\n\
	InspectObj( oAnnotation, \"\", \"Annotation Test\", siModal, false );\n\
}\n\
// Create an instance of one of the SDK workgroup sample psets\n\
var presetpath = XSIUtils.BuildPath(\n\
	Application.InstallationPath( siFactoryPath ),\n\
	\"XSISDK\", \"examples\", \"workgroup\", \"Addons\", \"PSetUIDemo\"\n\
);\n\
var oPSetUIDemo = CreateTemporaryCustomPSet( \"PSetUIDemo\", presetpath, \"\" );\n\
if ( oPSetUIDemo ) {\n\
	InspectObj( oPSetUIDemo, \"\", \"PSetUIDemo Test\", siModal, false );\n\
}\n\
// Now the following lines will log, declaring that these instances live inside the TransientObjectContainer:\n\
// INFO : Full path of Annotation instance is: TransientObjectContainer.MyA\n\
// INFO : Full path of PSetUIDemo instance is: TransientObjectContainer.PSetUIDemo\n\
// ... but nothing exists under the Scene_Root...\n\
var oProp = Application.ActiveSceneRoot.Properties(\"PSetUIDemo\");\n\
if (oProp == null || typeof(oProp) == \"undefined\") {\n\
	Application.LogMessage( \"No instances found.\" );\n\
} else {\n\
	Application.LogMessage( \"Found an instance.\" );\n\
}\n\
// INFO : No instances found.\n\
// ... until you apply it\n\
Application.ActiveSceneRoot.AddProperty( XSIUtils.BuildPath(presetpath, \"Data\", \"DSPresets\", \"Properties\", \"PSetUIDemo.Preset\") );\n\
oProp = Application.ActiveSceneRoot.Properties(\"PSetUIDemo\");\n\
if (oProp == null || typeof(oProp) == \"undefined\") {\n\
	Application.LogMessage( \"No instances found.\" );\n\
} else {\n\
	Application.LogMessage( \"Found an instance.\" );\n\
}\n\
// INFO : Found an instance.\n\
// Function CreateTemporaryCustomPSet\n\
// Creates a temporary custom property set.  This does not appear in the scene explorer and you do not have to\n\
// worry about deleting it.\n\
//\n\
// in_PresetName - Name of the preset, which normally matches the name of the spdl file.  Do not include the extension\n\
// in_PresetLocation - May be one of the siInstallationPath values (e.g. siUserPath, siUserAddonPath, etc.) or a string path\n\
// in_CustomPSetName - Desired name for the new object, or leave empty for default behavior\n\
//\n\
// Return Value: newly created custom pset\n\
function CreateTemporaryCustomPSet( in_PresetName, in_PresetLocation, in_CustomPSetName )\n\
{\n\
	var oPSet;\n\
	// Last argument is optional\n\
	if ( in_CustomPSetName == \"\" ) {\n\
		in_CustomPSetName = in_PresetName;\n\
	}\n\
	// Figure out whether this is a string path or an siInstallationPath value\n\
	in_PresetLocation = ( typeof(in_PresetLocation) == \"string\" ) \n\
		? in_PresetLocation\n\
		: Application.InstallationPath(in_PresetLocation);\n\
	var presetFullPath = XSIUtils.BuildPath( \n\
		in_PresetLocation, \"Data\", \"DSPresets\", \"Properties\", in_PresetName + \".Preset\"\n\
	);\n\
	try {\n\
		oPSet = CreateObjectFromPreset( presetFullPath, in_CustomPSetName );\n\
		Application.LogMessage( \"Full path of \" + in_PresetName + \" instance is: \" + oPSet.FullName );\n\
	} catch(e) {\n\
		Application.LogMessage( \"Failed to create temporary instance of \" + in_PresetName + \" preset\", siWarning );\n\
		return null;\n\
	}\n\
	return oPSet;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/XSIFactory.CreateObjectFromPreset.html\">XSIFactory.CreateObjectFromPreset</a> <a href=\"#!/url=./si_cmds/CreatePreset.html\">CreatePreset</a> <a href=\"#!/url=./si_cmds/LoadPreset.html\">LoadPreset</a> <a href=\"#!/url=./si_cmds/SavePreset.html\">SavePreset</a> <a href=\"#!/url=./si_cmds/SIGetPreset.html\">SIGetPreset</a> <a href=\"#!/url=./si_cmds/SILoadPreset.html\">SILoadPreset</a> <a href=\"#!/url=./si_cmds/SIAddPropEx.html\">SIAddPropEx</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";