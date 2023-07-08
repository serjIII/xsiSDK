var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SetGlobal</title>\n\
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
            <h1>SetGlobal</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SetGlobal</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
SetGlobal and its companion command <a href=\"#!/url=./si_cmds/GetGlobal.html\">GetGlobal</a>\n\
provide a simple means to store and retrieve values\n\
which act like \"global variables\".  Each variable is indentified\n\
by a unique string.  To change the value of a previously\n\
set variable call this command with a new value.  To erase\n\
a global variable call this command with null as the value.\n\
<br /><br />\n\
These variables are accessible from any script and remain\n\
active during the duration of the Softimage session.  \n\
<br /><br />\n\
Warning: For persistent Global values it is better to use a \n\
<a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> or a Custom <a href=\"#!/url=./si_om/Preferences.html\">Preferences</a> object.\n\
<br /><br />\n\
Tip 1: It is possible to store a Softimage object inside a global\n\
variable.  However when storing a reference to a Softimage object,\n\
it is often safer to store the fullname string of the object rather\n\
than the object itself.  This ensures that even if the scene is closed,\n\
reopened or significantly changed you can get a valid reference\n\
to the object (as long as the object isn\'t renamed).  This is \n\
demonstrated in the examples below.\n\
<br /><br />\n\
Tip 2: This command will convert any JScript Array or\n\
user-created script object into a SAFEARRAY (see <a href=\"#!/url=./files/Array.htm\">Array</a>).\n\
To maintain the data in its original form use <a href=\"#!/url=./si_cmds/SetGlobalObject.html\">SetGlobalObject</a>.\n\
<br /><br />\n\
Tip 3: It is unnecessary to use this functionality if the entire plug-in \n\
is implemented inside a single script, because any variable within\n\
the global scope is accessible inside all functions. (The only exception \n\
is <a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a> logic callbacks, which cannot read\n\
the values of global variables set by non-PPGLayout callbacks.)\n\
<br /><br />\n\
Tip 4: Global variables can be very useful, but usage should be kept\n\
to a minimum to avoid unexpected side-effects, \"spagetti\" code\n\
and code that is difficult to read, debug and maintain.\n\
Each global variable name should be well chosen to avoid\n\
potential conflict with other scripts.  For example if two plug-ins\n\
both try to use a global variable named \"x\" then both will be\n\
prone to random or unexpected failure.\n\
<br /><br />\n\
Tip 5: This feature is implemented as a self-installed\n\
JScript <a href=\"#!/url=./si_om/Plugin.html\">Plugin</a> using the powerful \n\
\"Scripting.Dictionary\" object which is available to both \n\
VBScript and JScript.  For more details refer to the\n\
actual implementation code (GlobalVarPlugin.js).\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SetGlobal( in_VariableName, in_Value );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">in_VariableName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The name of the global variable		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">in_Value		</td>\n\
		<td><a href=\"#!/url=./files/Variant.htm\">Variant</a>		</td>\n\
		<td>\n\
A new value for the global variable		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// Example test for GetGlobal/SetGlobal\n\
NewScene( null, false ) ;\n\
// null returned when Global hasn\'t been set\n\
ASSERT( null == GetGlobal( \"X\" ) ) ;\n\
SetGlobal( \"X\", 67 ) ;\n\
ASSERT( 67 == GetGlobal( \"X\" ) ) ;\n\
// You can change the value of the global\n\
SetGlobal( \"X\", \"foo\" ) ;\n\
ASSERT( \"foo\" == GetGlobal( \"X\" ) ) ;\n\
// Remove the global\n\
SetGlobal( \"X\", null ) ;\n\
// Handle Softimage Object\n\
var oGrid = ActiveSceneRoot.AddGeometry( \"Grid\", \"MeshSurface\", \"mygrid\" );\n\
// You could store a Softimage object as a Global\n\
SetGlobal( \"InterestingObj\", oGrid ) ;\n\
ASSERT( oGrid.Name == GetGlobal( \"InterestingObj\" ).Name ) ;\n\
// But it is better to store the string fullname\n\
// because oGrid won\'t survive saving and reloading the scene,\n\
SetGlobal( \"InterestingObj\", oGrid.FullName ) ;\n\
// Simulate the user closing and reopening the scene\n\
var strTestScene = Application.InstallationPath( siProjectPath ) + \"\\\\Scenes\\\\Test.Scn\" ;\n\
SaveSceneAs( strTestScene ) ;\n\
OpenScene( strTestScene, false ) ;\n\
var strGrid = GetGlobal( \"InterestingObj\" ) ;\n\
// Turn the string back into an object\n\
var oGridRevived = Dictionary.GetObject( strGrid ) ;\n\
ASSERT( oGridRevived.Name == \"mygrid\" ) ;\n\
// Demonstrate that it really is a valid reference to the grid\n\
oGridRevived.posx = 4 ;\n\
LogMessage( \"Test complete\" ) ;\n\
function ASSERT(in_val)\n\
{\n\
	if ( !in_val )\n\
		throw new Error( 0, \"test failed\" );\n\
}</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' Example test for GetGlobal/SetGlobal\n\
NewScene ,false \n\
\' null returned when Global hasn\'t been set\n\
ASSERT( Null = GetGlobal( \"X\" ) )\n\
SetGlobal \"X\", 67 \n\
ASSERT( 67 = GetGlobal( \"X\" ) )\n\
\' You can change the value of the global\n\
SetGlobal \"X\", \"foo\" \n\
ASSERT( \"foo\" = GetGlobal( \"X\" ) ) \n\
\' Remove the global\n\
SetGlobal \"X\", Null \n\
\' Handle Softimage Object\n\
set oGrid = ActiveSceneRoot.AddGeometry( \"Grid\", \"MeshSurface\", \"mygrid\" )\n\
\' You could store a Softimage object as a Global\n\
SetGlobal \"InterestingObj\", oGrid \n\
ASSERT( oGrid.Name = GetGlobal( \"InterestingObj\" ).Name )\n\
\' But it is better to store the string fullname\n\
\' because oGrid won\'t survive saving and reloading the scene,\n\
SetGlobal \"InterestingObj\", oGrid.FullName \n\
\' Simulate the user closing and reopening the scene\n\
strTestScene = Application.InstallationPath( siProjectPath ) &amp; \"\\Scenes\\Test.Scn\"\n\
SaveSceneAs strTestScene \n\
OpenScene strTestScene, false \n\
strGrid = GetGlobal( \"InterestingObj\" ) \n\
\' Turn the string back into an object\n\
set oGridRevived = Dictionary.GetObject( strGrid )\n\
ASSERT( oGridRevived.Name = \"mygrid\" )\n\
\' Demonstrate that it really is a valid reference to the grid\n\
oGridRevived.posx = 4 \n\
LogMessage \"Test complete\"\n\
sub ASSERT( in_test )\n\
	if NOT in_test then\n\
		LogMessage \"Test Failed\", siError \n\
	end if\n\
end sub</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/GetGlobal.html\">GetGlobal</a> <a href=\"#!/url=./si_cmds/SetGlobalObject.html\">SetGlobalObject</a> <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> <a href=\"#!/url=./si_om/XSIFactory.CreateObject.html\">XSIFactory.CreateObject</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";