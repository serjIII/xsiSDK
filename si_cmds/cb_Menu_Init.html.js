var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Init (Menu)</title>\n\
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
            <h1>Init (Menu)</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Init (Menu)</h2>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Description</h3>\n\
<div><p><a name=\"Description\"> </a>	<p>\n\
				For dynamic menus, this callback is fired every time the menu is accessed. For static menus, \n\
				this callback is fired the first time the menu is accessed after the plug-in is loaded.\n\
			</p>\n\
	<p>\n\
				This is where you add items and commands to a menu.\n\
			</p>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Applies To</h3>\n\
<div><p><a name=\"AppliesTo\"> </a><a href=\"#!/url=./files/cus_cmds.htm\">Standard and Contextual Menus</a></p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Syntax</h3>\n\
<div><p><a name=\"Syntax\"> </a><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"csharp\">public class &lt;menu_name&gt;\n\
{\n\
	public bool Init( Context in_context )\n\
	{\n\
		...\n\
	}\n\
}</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"cplusplus\">CStatus &lt;menu_name&gt;_Init( CRef&amp; in_context )\n\
{ \n\
	... \n\
}</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">function &lt;menu_name&gt;_Init( in_context )\n\
{ \n\
	... \n\
}</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">def &lt;menu_name&gt;_Init( in_context ):\n\
	...</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">Function &lt;menu_name&gt;_Init( in_context )\n\
	...\n\
End Function</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"perlscript\">sub &lt;menu_name&gt;_Init \n\
{ \n\
	my $in_context = shift; \n\
}</pre></td></tr>\n\
</table>\n\
</div>	<p><span style=\"font-family: courier, monospace;\">&lt;menu_name&gt;</span> is the name specified in the call to \n\
				<a href=\"#!/url=./si_om/PluginRegistrar.RegisterMenu.html\">PluginRegistrar.RegisterMenu</a>, with any spaces converted to underscores.\n\
			</p>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Parameters</h3>\n\
<div><p><a name=\"Parameters\"> </a>	<table>		<tr>			<th>Parameter</th>\n\
			<th>Language</th>\n\
			<th>Type</th>\n\
			<th>Description</th>\n\
</tr>\n\
		<tr>			<td class=\"name\">in_context</td>\n\
			<td>Scripting and C#</td>\n\
			<td><a href=\"#!/url=./si_om/Context.html\">Context</a></td>\n\
			<td><a href=\"#!/url=./si_om/Context.Source.html\">Context.Source</a> returns the <a href=\"#!/url=./si_om/Menu.html\">Menu</a>.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"name\">C++</td>\n\
			<td><a href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>&</td>\n\
			<td>A reference to the <a href=\"#!/url=./si_cpp/classXSI_1_1Context.html\">Context</a> object. \n\
					<a href=\"#!/url=./si_cpp/classXSI_1_1Context.html#GetSource\">Context::GetSource</a> \n\
					returns the <a href=\"#!/url=./si_cpp/classXSI_1_1Menu.html\">Menu</a>.</td>\n\
</tr>\n\
</table>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Examples</h3>\n\
<div><p><a name=\"Examples\"> </a><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// JScript code generated by the Command Wizard\n\
// Shows the Init callbacks for a command and for a menu\n\
function XSILoadPlugin( in_reg )\n\
{\n\
 in_reg.Author = \"sblair\";\n\
 in_reg.Name = \"MyCommandPlugin\";\n\
 in_reg.Email = \"\";\n\
 in_reg.URL = \"\";\n\
 in_reg.Major = 1;\n\
 in_reg.Minor = 0;\n\
\n\
 in_reg.RegisterCommand(\"MyCommand\",\"MyCommand\");\n\
 in_reg.RegisterMenu(siMenuTbGetPropertyID,\"MyCommand_Menu\",false,false);\n\
 //RegistrationInsertionPoint - do not remove this line\n\
\n\
 return true;\n\
}\n\
\n\
function XSIUnloadPlugin( in_reg )\n\
{\n\
 strPluginName = in_reg.Name;\n\
 Application.LogMessage(strPluginName + \" has been unloaded.\");\n\
 return true;\n\
}\n\
\n\
function MyCommand_Init( ctxt )\n\
{\n\
 var oCmd;\n\
 oCmd = ctxt.Source;\n\
 oCmd.Description = \"\";\n\
 oCmd.ReturnValue = true;\n\
\n\
 var oArgs;\n\
 oArgs = oCmd.Arguments;\n\
 oArgs.Add(\"Arg0\",siArgumentInput);\n\
 return true;\n\
}\n\
\n\
function MyCommand_Execute( Arg0 )\n\
{\n\
\n\
 Application.LogMessage(\"MyCommand_Execute called\");\n\
 // \n\
 // TODO: Put your command implementation here.\n\
 // \n\
 return true;\n\
}\n\
\n\
function MyCommand_Menu_Init( ctxt )\n\
{\n\
 var oMenu;\n\
 oMenu = ctxt.Source;\n\
 oMenu.AddCommandItem(\"Run My Command\",\"MyCommand\");\n\
 return true;\n\
}</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"cplusplus\">// C++ code generated by the Command Wizard\n\
// Shows the Init callbacks for a command and a menu\n\
#include &lt;xsi_application.h&gt;\n\
#include &lt;xsi_context.h&gt;\n\
#include &lt;xsi_pluginregistrar.h&gt;\n\
#include &lt;xsi_status.h&gt;\n\
#include &lt;xsi_argument.h&gt;\n\
#include &lt;xsi_command.h&gt;\n\
#include &lt;xsi_menu.h&gt;\n\
using namespace XSI; \n\
\n\
SICALLBACK XSILoadPlugin( PluginRegistrar&amp; in_reg )\n\
{\n\
 in_reg.PutAuthor(L\"sblair\");\n\
 in_reg.PutName(L\"My_CppCommandPlugin\");\n\
 in_reg.PutEmail(L\"\");\n\
 in_reg.PutURL(L\"\");\n\
 in_reg.PutVersion(1,0);\n\
 in_reg.RegisterCommand(L\"My_CppCommand\",L\"My_CppCommand1\");\n\
 in_reg.RegisterMenu(siMenuTbGetPropertyID,L\"My_CppCommand_Menu\",false,false);\n\
 //RegistrationInsertionPoint - do not remove this line\n\
\n\
 return CStatus::OK;\n\
}\n\
\n\
SICALLBACK XSIUnloadPlugin( const PluginRegistrar&amp; in_reg )\n\
{\n\
 CString strPluginName = in_reg.GetName();\n\
 Application().LogMessage(strPluginName + L\" has been unloaded.\");\n\
 return CStatus::OK;\n\
}\n\
\n\
SICALLBACK My_CppCommand_Init( CRef&amp; in_ctxt )\n\
{\n\
 Context ctxt( in_ctxt );\n\
 Command oCmd;\n\
 oCmd = ctxt.GetSource();\n\
 oCmd.PutDescription(L\"\");\n\
 oCmd.EnableReturnValue(true);\n\
\n\
 ArgumentArray oArgs;\n\
 oArgs = oCmd.GetArguments();\n\
 oArgs.Add(L\"Arg0\");\n\
 return CStatus::OK;\n\
}\n\
\n\
SICALLBACK My_CppCommand_Execute( CRef&amp; in_ctxt )\n\
{\n\
 Context ctxt( in_ctxt );\n\
 CValueArray args = ctxt.GetAttribute(L\"Arguments\");\n\
 CValue Arg0 = args[0];\n\
\n\
 Application().LogMessage(L\"My_CppCommand_Execute called\");\n\
 // \n\
 // TODO: Put your command implementation here.\n\
 // \n\
 // Return a value by setting this attribute:\n\
 ctxt.PutAttribute( L\"ReturnValue\", true );\n\
\n\
 // Return CStatus::Fail if you want to raise a script error\n\
 return CStatus::OK;\n\
}\n\
\n\
SICALLBACK My_CppCommand_Menu_Init( CRef&amp; in_ctxt )\n\
{\n\
 Context ctxt( in_ctxt );\n\
 Menu oMenu;\n\
 oMenu = ctxt.GetSource();\n\
 MenuItem oNewItem;\n\
 oMenu.AddCommandItem(L\"My_CppCommand\",L\"My_CppCommand\",oNewItem);\n\
 return CStatus::OK;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>See Also</h3>\n\
<div><p><a name=\"SeeAlso\"> </a><ul>\n\
	<li><a href=\"#!/url=./si_cmds/cb_MenuItem_Callback.html\">Menu Item Callbacks</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/callbacks.html\">Menu Callbacks</a></li>\n\
</ul>\n\
</p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";