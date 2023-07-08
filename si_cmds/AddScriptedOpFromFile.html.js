var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>AddScriptedOpFromFile</title>\n\
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
            <h1>AddScriptedOpFromFile</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">AddScriptedOpFromFile</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Creates a runtime scripted operator whose definition is saved within the scene. A runtime \n\
scripted operator is one that is embedded within the scene and doesn\'t require the installation of \n\
a SPDL file or Self-Installed Custom Operator.<br /><br />\n\
The implementation of the scripted operator comes from a specified file (on disk). To specify \n\
an implementation on the fly (eg., in a string variable), use the <a href=\"#!/url=./si_cmds/AddScriptedOp.html\">AddScriptedOp</a>\n\
command instead.  Once instantiated the operator will store a copy of the code\n\
and not refer to the contents of the specified file anymore.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = AddScriptedOpFromFile( OutputObjs, FileName, InputObjs, [Name], [Language], [ConstructionMode] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns an <a href=\"#!/url=./si_om/CustomOperator.html\">CustomOperator</a> that contains a runtime-designed scripted operator</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">OutputObjs		</td>\n\
		<td><a href=\"#!/url=./files/listexpr.htm\">List</a>		</td>\n\
		<td>\n\
List of objects or parameters to connect the output ports too.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">FileName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The script filename containing the implementation of the scripted operator.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">InputObjs		</td>\n\
		<td><a href=\"#!/url=./files/listexpr.htm\">List</a>		</td>\n\
		<td>\n\
List of objects or parameters to be connected to input ports.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The name of the new operator			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
ScriptedOp			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Language		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The script language of the operator.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Value from Application.Preferences.Scripting.Language			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ConstructionMode		</td>\n\
		<td><a href=\"#!/url=./si_om/siConstructionMode.html\">siConstructionMode</a>		</td>\n\
		<td>\n\
Specifies which construction mode the operator will be applied. This only applies to output connections made to <a href=\"#!/url=./si_om/Geometry.html\">Geometry</a> objects, \n\
the mode will be ignored for all other types of connections.\n\
			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Use the current construction mode			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to create and connect a scripted operator\n\
	that constrains the local posx of an object to the value of 2.\n\
*/\n\
// ------------------------------------------------------------\n\
//\n\
//	This is an easy way to specify the code as a string:\n\
//	define it as a regular function as part of this\n\
//	example and then use the JScript function toString()\n\
//	to set the contents of the new implementation file.\n\
//\n\
function fred_Update( ctx, out ) \n\
{ \n\
	LogMessage( \"fred::Update()\" );\n\
	out.Value = 2;\n\
}\n\
// Create the script file on disk using the JScript FileSystemObject \n\
// utility (consult a JScript scripting guide for more details).\n\
var file_loc = InstallationPath( siUserPath ) + \"\\\\Data\\\\Scripts\\\\fred_sop.js\";\n\
var fso = new ActiveXObject( \"Scripting.FileSystemObject\" );\n\
var ts = fso.CreateTextFile( file_loc, true );\n\
ts.Write( fred_Update.toString() );\n\
ts.Close();\n\
// ------------------------------------------------------------\n\
//\n\
//	Set up the null and apply the scripted operator to\n\
//	its posx parameter. Print the value of the posx\n\
//	parameter before and after.\n\
//\n\
// Create scene and apply operator\n\
NewScene( null, false );\n\
GetPrim( \"null\" );\n\
// Get the value of posx before applying the operator\n\
Application.LogMessage( \"posx = \" + GetValue( \"null.kine.local.posx\" ) );\n\
// Create and apply the operator to the null\'s posx\n\
var op = AddScriptedOpFromFile( \"null.kine.local.posx\", file_loc, null, \"fred\" );\n\
// Get the constrained value\n\
Application.LogMessage( \"posx = \" + GetValue( \"null.kine.local.posx\" ) );\n\
// ------------------------------------------------------------\n\
//\n\
//	Since the scripted operator is returned, we can use\n\
//	the methods and properties of the Operator object.\n\
//\n\
// Log details of operator\n\
Application.LogMessage( \"Scripted Operator: \" + op.FullName );\n\
Application.LogMessage( \"\\tClassName: \" + ClassName(op) );\n\
Application.LogMessage( \"\\tType: \"+ op.Type );\n\
Application.LogMessage( \"\\tLanguage: \"+ op.Language );\n\
Application.LogMessage( \"\\tAlwaysEvaluate: \"+ op.AlwaysEvaluate );\n\
Application.LogMessage( \"\\tDebug: \"+ op.Debug );\n\
Application.LogMessage( \"\\tMute: \"+ op.Mute );\n\
Application.LogMessage( \"\\tFileName: \"+ op.FileName );\n\
Application.LogMessage( \"\\tCode: \"+ op.Code );\n\
// ------------------------------------------------------------\n\
//\n\
//	Output of this example. Notice that Code returns the\n\
//	contents of the implementation file:\n\
//\n\
//INFO : \"posx = 0\"\n\
//\n\
//INFO : \"fred::Update()\"\n\
//INFO : \"posx = 2\"\n\
//INFO : \"Scripted Operator: null.kine.local.fred\"\n\
//INFO : \"	ClassName: CustomOperator\"\n\
//INFO : \"	Type: fred\"\n\
//INFO : \"	Language: JScript\"\n\
//INFO : \"	AlwaysEvaluate: false\"\n\
//INFO : \"	Debug: 0\"\n\
//INFO : \"	Mute: false\"\n\
//INFO : \"	FileName: &lt;your_user_path&gt;\\Data\\Scripts\\fred_sop.js\"\n\
//INFO : \"	Code: function fred_Update( ctx, out ) \n\
//{ \n\
//	LogMessage( \"fred::Update()\" );\n\
//\n\
//	out.Value = 2;\n\
//}\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/ApplyOp.html\">ApplyOp</a> <a href=\"#!/url=./si_cmds/AddScriptedOp.html\">AddScriptedOp</a> <a href=\"#!/url=./si_cmds/AddCustomOp.html\">AddCustomOp</a> <a href=\"#!/url=./si_cmds/ConvertScriptedOp.html\">ConvertScriptedOp</a> <a href=\"#!/url=./si_om/ProjectItem.AddScriptedOpFromFile.html\">ProjectItem.AddScriptedOpFromFile</a> <a href=\"#!/url=./si_om/CustomOperator.html\">CustomOperator</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";