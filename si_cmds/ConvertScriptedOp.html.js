var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ConvertScriptedOp</title>\n\
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
            <h1>ConvertScriptedOp</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ConvertScriptedOp</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v2.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Converts a preset-based scripted operator into a runtime-designed scripted operator. The \n\
difference between a preset-based and runtime-designed operator are as follows:\n\
<br /><br /> \n\
Runtime-based scripted operators are saved as part of the scene. Preset-based plug-in \n\
operators, either compiled or scripted, are saved as references and have an associated \n\
preset file (.preset file extension) and spdl file (.spdl file extension). \n\
<br /><br />\n\
You cannot load a scene that has references to the preset-based scripted operator if you \n\
do not have the plug-in operator installed on your system. To determine which scripted \n\
operators are installed you can use the \'xsi -l\' command line option or view the list of \n\
installed scripted operators in the add-on packaging dialog.\n\
<br /><br />\n\
Note: The Self-Installed Custom Operator (SICO) is the preferred way to implement custom\n\
operators in Softimage; however, this command cannot convert SICOs to runtime operators.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = ConvertScriptedOp( [Source] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns an <a href=\"#!/url=./si_om/Operator.html\">Operator</a> that contains a runtime-designed version of the preset-based scripted operator</p></div>\n\
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
		<td><a href=\"#!/url=./si_om/Operator.html\">Operator</a>		</td>\n\
		<td>\n\
 The preset-based scripted operator 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Currently selected preset-based scripted operator			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to use the ConvertScriptedOp command to generate a\n\
	legacy runtime operator from a preset-based operator definition. Since the preferred\n\
	implementation for custom operators is now Self-Installing Custom Operator, this\n\
	example first creates a legacy runtime operator, and then writes it to a spdl file \n\
	and registers the new spdl file so that we have a preset-based legacy operator to use.\n\
	Once a preset-based legacy operator has been saved to disk and registered in Softimage, this\n\
	example creates a new scene and runs the ConvertScriptedOp command to create a new\n\
	runtime version of the preset-based operator.\n\
*/\n\
// ---------------------------------------------------\n\
// SET UP A PRESET-BASED OPERATOR\n\
//\n\
// Create scene and apply operator\n\
NewScene( null, false );\n\
GetPrim( \"null\" );\n\
// Create and apply the operator to the null\'s posx\n\
var str = DemoSpdlFile_Update.toString();\n\
var op = AddScriptedOp( \"null.kine.local.posx\", str, null, \"DemoSpdlFile\" );\n\
// Create a preset from it \n\
spdlpath = XSIUtils.BuildPath( \n\
	Application.InstallationPath(siUserPath), \n\
	\"Application\", \"spdl\" \n\
);\n\
var fso = XSIFactory.CreateActiveXObject( \"Scripting.FileSystemObject\" );\n\
if ( !fso.FolderExists(spdlpath) ) {	// Create the directory if it doesn\'t exist\n\
	fso.CreateFolder(spdlpath);\n\
}\n\
spdlpath = XSIUtils.BuildPath( spdlpath, \"DemoSpdlFile.spdl\" );\n\
CreateDemoSpdlFileOnDisk( spdlpath );\n\
XSIUtils.RegisterSPDL( spdlpath, true );\n\
// ---------------------------------------------------\n\
// RUN THE CONVERTSCRIPTEDOP COMMAND\n\
//\n\
// Now run the ConvertScriptedOp command in a new scene\n\
NewScene( null, false );\n\
var myNull = GetPrim( \"null\" );\n\
var myPresetBasedOp = ApplyOp( \"DemoSpdlFile\", myNull )(0);\n\
var myRuntimeDesignedOp = ConvertScriptedOp( myPresetBasedOp );\n\
// ---------------------------------------------------\n\
// HELPER FUNCTION\n\
//\n\
// Update function\n\
function DemoSpdlFile_Update( ctx, out ) \n\
{ \n\
	Application.LogMessage( \"DemoSpdlFile::Update()\" );\n\
	out.Value = 2;\n\
}\n\
// Create SPDL file\n\
function CreateDemoSpdlFileOnDisk( in_path )\n\
{\n\
	// Set up text to write to spdl file\n\
	var spdltext = \"SPDL\\nVersion = \\\"2.0.0.2\\\";\\nReference = \\\"{CE89DBEF-EA05-4378-B507-4A6718\"\n\
		+ \"25641F}\\\";\\nName = \\\"DemoSpdlFile\\\";\\n\\nPropertySet \\\"DemoSpdlFile_Params\\\"\\n{\\n\"\n\
		+ \"\\tParameter \\\"DemoSpdlFile\\\"\\n\\t{\\n\\t\\tName\\t= \\\"DemoSpdlFile\\\";\\n\\t\\tGuid\\t= \\\"\"\n\
		+ \"{CE89DBEF-EA05-4378-B507-4A671825641F}\\\";\\n\\t\\tCaps\\t= Persistable;\\n\\t\\tType\\t=\"\n\
		+ \" VT_EMPTY;\\n\\t}\\n\\n}\\n\\n\\nLayout \\\"Default\\\"\\n{\\n}\\nPortSet \\\"DemoSpdlFile_Ports\"\n\
		+ \"\\\"\\n{\\n\\tGroup \\\"Group_0\\\"\\n\\t{\\n\\t\\tOrigin = Select;\\n\\t\\tPickMessage = \\\"Group\"\n\
		+ \"_0\\\";\\n\\n\\t\\tOutput \\\"Outposx\\\"\\n\\t\\t{\\n\\t\\t\\tMajor = {9E04FCEE-10F3-11D0-943A-0\"\n\
		+ \"0AA006D3165};\\n\\t\\t\\tMinor = {4125B131-86EF-11D1-B1AB-0800360BFF02};\\n\\t\\t\\tComp\"\n\
		+ \"onent = {06294283-B94B-11D2-B87F-00A0C92469BE};\\n\\t\\t\\tAttributes = 0x00009001;\\n\"\n\
		+ \"\\t\\t}\\n\\t}\\n}\\n\\nPlugin = Scripted\\n{\\n\\tLanguage = \\\"JScript\\\";\\n\\n\\tUpdate =\\n\"\n\
		+ \"\\tBeginScript\\n\\tDemoSpdlFile_Update(In_UpdateContext, Out);\\n\\n\\tEndScript\\n\\n\"\n\
		+ \"\\tHelpers =\\n\\tBeginScript\\nfunction DemoSpdlFile_Update( ctx, out ) \\n{ \\n   Ap\"\n\
		+ \"plication.LogMessage( \\\"DemoSpdlFile::Update()\\\" );\\n   out.Value = 2;\\n}\\n\\tEnd\"\n\
		+ \"Script\\n}\";\n\
	// Create a spdl file on disk\n\
	var fso = new ActiveXObject( \"Scripting.FileSystemObject\" );\n\
	var ts = fso.CreateTextFile( in_path );\n\
	ts.Write( spdltext );\n\
	ts.Close();\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";