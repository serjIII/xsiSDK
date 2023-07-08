var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>DefineInfo</title>\n\
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
            <h1>DefineInfo</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">DefineInfo</h2>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Description</h3>\n\
<div><p><a name=\"Description\"> </a>	<p>\n\
				Allows you to define information about your custom shader definition. For example, this is where you\n\
				can assign it a <a href=\"#!/url=./si_om/ShaderDef.Category.html\">ShaderDef.Category</a> so that it will appear in the Preset Manager.\n\
			</p>\n\
	<p>\n\
				This callback is fired after the shader plug-in loaded (that is, after \n\
				<a href=\"#!/url=./si_cmds/cb_XSILoadPlugin.html\">XSILoadPlugin</a> returns).\n\
			</p>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Applies To</h3>\n\
<div><p><a name=\"AppliesTo\"> </a><a href=\"#!/url=./files/cus_shaders.htm\">Custom Shaders</a></p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Syntax</h3>\n\
<div><p><a name=\"Syntax\"> </a><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"csharp\">public class &lt;plugin-item_name&gt;\n\
{\n\
	public bool DefineInfo( Context in_context )\n\
	{\n\
		...\n\
	}\n\
}</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"cplusplus\">CStatus &lt;plugin-item_name&gt;_DefineInfo( CRef&amp; in_context ) \n\
{ \n\
	... \n\
}</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">function &lt;plugin-item_name&gt;_DefineInfo( in_context ) \n\
{ \n\
	... \n\
}</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">def &lt;plugin-item_name&gt;_DefineInfo( in_context ):\n\
	...</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">Function &lt;plugin-item_name&gt;_DefineInfo( in_context )\n\
	...\n\
End Function</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"perlscript\">sub &lt;plugin-item_name&gt;_DefineInfo \n\
{ \n\
	my $in_context = shift; \n\
}</pre></td></tr>\n\
</table>\n\
</div>	<p><span style=\"font-family: courier, monospace;\">&lt;plugin-item-name&gt;</span> is a special string constructed from the plug-in name, the name \n\
				specified in the call to <a href=\"#!/url=./si_om/PluginRegistrar.RegisterShader.html\">PluginRegistrar.RegisterShader</a>, and the major and minor version \n\
				numbers, with any spaces converted to underscores. For example, if you register a shader definition in a plug-in called\n\
				<span style=\"font-family: courier, monospace;\">\"MyPlugin\"</span> with the shader class name <span style=\"font-family: courier, monospace;\">\"My Shader\"</span>, \n\
				and the version number <span style=\"font-family: courier, monospace;\">1.0</span>, the callback function names start with \n\
				<span style=\"font-family: courier, monospace;\">\"MyPlugin_My_Shader_1_0\"</span>. \n\
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
			<td>\n\
						Use the <a href=\"#!/url=./si_om/Context.GetAttribute.html\">Context.GetAttribute</a> method to get basic information, such as Category, \n\
						DisplayName, etc.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td>C++</td>\n\
			<td><a href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>& </td>\n\
			<td>\n\
					Use the <a href=\"#!/url=./si_om/Context.GetAttribute.html\">Context.GetAttribute</a> method to get basic information, such as Category, \n\
					DisplayName, etc.\n\
					</td>\n\
</tr>\n\
</table>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Context Attributes</h3>\n\
<div><p><a name=\"ContextAttributes\"> </a><a name=\"ContextAttributes_ShaderDefineInfo\"></a>	<table>		<tr>			<th>Attribute</th>\n\
			<th>Get/Set</th>\n\
			<th>Description</th>\n\
</tr>\n\
		<tr>			<td class=\"example\">ClassName</td>\n\
			<td>Returns a <a href=\"#!/url=./files/String.htm\">String</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a></td>\n\
			<td>\n\
						The class name of the shader. This is used to build the <a href=\"#!/url=./si_om/ShaderDef.ProgID.html\">ShaderDef.ProgID</a> with the parser \n\
						name and version number in this form: <span style=\"font-family: courier, monospace;\">\"ParserName.ClassName.MajorVersion.MinorVersion\"</span>.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">MajorVersion</td>\n\
			<td>Returns a <a href=\"#!/url=./files/Long.htm\">Long</a> or ULONG</td>\n\
			<td>\n\
						The major version of the shader definition. This is used to build the <a href=\"#!/url=./si_om/ShaderDef.ProgID.html\">ShaderDef.ProgID</a> with \n\
						the parser name, class name and minor version number in this form: <span style=\"font-family: courier, monospace;\">\"ParserName.ClassName.MajorVersion.MinorVersion\"</span>.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">MinorVersion</td>\n\
			<td>Returns a <a href=\"#!/url=./files/Long.htm\">Long</a> or ULONG</td>\n\
			<td>\n\
						The minor version of the shader definition. This is used to build the <a href=\"#!/url=./si_om/ShaderDef.ProgID.html\">ShaderDef.ProgID</a> with \n\
						the parser name, class name and major version number in this form: <span style=\"font-family: courier, monospace;\">\"ParserName.ClassName.MajorVersion.MinorVersion\"</span>.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">Category</td>\n\
			<td>Returns a <a href=\"#!/url=./files/String.htm\">String</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a></td>\n\
			<td>The category to use in the Preset Manager.</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">DisplayName</td>\n\
			<td>Returns a <a href=\"#!/url=./files/String.htm\">String</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a></td>\n\
			<td>The display name to use in the Preset Manager.</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">Errors</td>\n\
			<td>Returns a <a href=\"#!/url=./files/String.htm\">String</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a></td>\n\
			<td>The parser can output parse errors.</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">Warnings</td>\n\
			<td>Returns a <a href=\"#!/url=./files/String.htm\">String</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a></td>\n\
			<td>The parser can output parse warnings.</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">{XXXX-XXXX-XXXX-XXXX} or simple string attribute name</td>\n\
			<td>Sets a <a href=\"#!/url=./files/String.htm\">String</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a></td>\n\
			<td>You can set a custom shader attribute in the <a href=\"#!/url=./si_om/ShaderDef.html\">ShaderDef</a> by setting a string repesenting a GUID or the name of any attribute.</td>\n\
</tr>\n\
</table>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Example</h3>\n\
<div><p><a name=\"Examples\"> </a><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"cplusplus\">SICALLBACK UtShaderPlugin_ColorShare_1_0_DefineInfo( CRef&amp; in_ctxt )\n\
{\n\
	XSI::Context ctxt(in_ctxt);\n\
	\n\
	// Setting the location and appearance of the shader definition in the preset manager\n\
	ctxt.PutAttribute( L\"Category\", L\"UtShaderPlugin\" );\n\
	ctxt.PutAttribute( L\"DisplayName\", L\"Color Share UtShaderPlugin\" );\n\
\n\
	// Setting a user attribute\n\
	ctxt.PutAttribute( L\"{F2EF07FE-1B57-4245-BF08-F5556212BFDF}\", L\"User data\" );\n\
\n\
	return CStatus::OK;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>See Also</h3>\n\
<div><p><a name=\"SeeAlso\"> </a><ul>\n\
	<li><a href=\"#!/url=./si_om/PluginRegistrar.RegisterShader.html\">PluginRegistrar.RegisterShader</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_Shader_Define.html\">Define (Shader)</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/callbacks.html\">Shader Callbacks</a></li>\n\
</ul>\n\
</p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";