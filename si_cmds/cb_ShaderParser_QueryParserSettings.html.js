var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>QueryParserSettings</title>\n\
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
            <h1>QueryParserSettings</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">QueryParserSettings</h2>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Description</h3>\n\
<div><p><a name=\"Description\"> </a>	<p>\n\
				Tells Softimage where to find the files to parse (<span style=\"font-family: courier, monospace;\">Folders</span> attribute) and what \n\
				extension(s) (<span style=\"font-family: courier, monospace;\">FileTypes</span> attribute) they will have.\n\
			</p>\n\
	<p>\n\
				This callback is fired at startup or when updating the preset manager prior to \n\
				<a href=\"#!/url=./si_cmds/cb_ShaderParser_ParseInfo.html\">ParseInfo</a>.\n\
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
	public bool QueryParserSettings( Context in_context )\n\
	{\n\
		...\n\
	}\n\
}</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"cplusplus\">CStatus &lt;plugin-item_name&gt;_QueryParserSettings( CRef&amp; in_context ) \n\
{ \n\
	... \n\
}</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">function &lt;plugin-item_name&gt;_QueryParserSettings( in_context ) \n\
{ \n\
	... \n\
}</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">def &lt;plugin-item_name&gt;_QueryParserSettings( in_context ):\n\
	...</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">Function &lt;plugin-item_name&gt;_QueryParserSettings( in_context )\n\
	...\n\
End Function</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"perlscript\">sub &lt;plugin-item_name&gt;_QueryParserSettings \n\
{ \n\
	my $in_context = shift; \n\
}</pre></td></tr>\n\
</table>\n\
</div>	<p><span style=\"font-family: courier, monospace;\">&lt;plugin-item-name&gt;</span> is the parser name specified in the call to \n\
				<a href=\"#!/url=./si_om/PluginRegistrar.RegisterShaderLanguageParser.html\">PluginRegistrar.RegisterShaderLanguageParser</a> with any spaces converted to underscores. For example, if you \n\
				register a parser in a plug-in called <span style=\"font-family: courier, monospace;\">\"My Parser\"</span>, the callback function names \n\
				start with <span style=\"font-family: courier, monospace;\">\"My_Parser\"</span>. \n\
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
			<td><a href=\"#!/url=./si_om/Context.SetAttribute.html\">Context.SetAttribute</a>(\"FileTypes\") sets the list of file extensions for files to parse. </td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td>C++</td>\n\
			<td><a href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>& </td>\n\
			<td><a href=\"#!/url=./si_cpp/classXSI_1_1Context.html#SetAttribute\">Context::SetAttribute</a>(\"FileTypes\") \n\
						sets the list of file extensions for files to parse.\n\
					</td>\n\
</tr>\n\
</table>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Context Attributes</h3>\n\
<div><p><a name=\"ContextAttributes\"> </a><a name=\"ContextAttributes_ShaderParse\"></a>	<table>		<tr>			<th>Attribute</th>\n\
			<th>Get/Set</th>\n\
			<th>Description</th>\n\
</tr>\n\
		<tr>			<td class=\"example\">Folders</td>\n\
			<td>Sets a <a href=\"#!/url=./files/String.htm\">String</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a></td>\n\
			<td>\n\
						Folder location(s) under the factory <span style=\"font-family: courier, monospace;\">Application</span> folder of the files to parse. \n\
						To specify multiple locations, separate each folder name with a semi-colon (<span style=\"font-family: courier, monospace;\">;</span>). For example,\n\
						setting this attribute to <span style=\"font-family: courier, monospace;\">ParserABC;ParserXYZ</span> means that all files found under \n\
						the <span style=\"font-family: courier, monospace;\">%XSI_USERHOME%\\Application\\ParserABC</span> and \n\
						<span style=\"font-family: courier, monospace;\">%XSI_USERHOME%\\Application\\Shaders\\Cgfx</span> directories will be parsed (if they have \n\
						the extension(s) specified in the <span style=\"font-family: courier, monospace;\">FileTypes</span> attribute).\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">FileTypes</td>\n\
			<td>Sets a <a href=\"#!/url=./files/String.htm\">String</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a></td>\n\
			<td>\n\
						File extensions to parse. List of strings separated by a semi-colon (<span style=\"font-family: courier, monospace;\">;</span>). For example,\n\
						<span style=\"font-family: courier, monospace;\">\".mi;.spdl\"</span>.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">IgnoreFiles </td>\n\
			<td>\n\
						Sets a <a href=\"#!/url=./files/String.htm\">String</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a></td>\n\
			<td>\n\
						Filenames to be ignored by the parser. List of strings separated by a semi-colon (<span style=\"font-family: courier, monospace;\">;</span>). For example,\n\
						<span style=\"font-family: courier, monospace;\">\"internal.mi;builtins.msl\"</span>.\n\
					</td>\n\
</tr>\n\
</table>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Example</h3>\n\
<div><p><a name=\"Examples\"> </a><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"cplusplus\">SICALLBACK UtShaderLanguageParser_QueryParserSettings( CRef&amp; in_ctxt )\n\
{\n\
	XSI::Context ctxt(in_ctxt);\n\
	ctxt.PutAttribute( L\"Folders\", L\"sltest\" );\n\
	ctxt.PutAttribute( L\"FileTypes\", L\".sltest\" );\n\
	return CStatus::OK;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>See Also</h3>\n\
<div><p><a name=\"SeeAlso\"> </a><ul>\n\
	<li><a href=\"#!/url=./si_om/PluginRegistrar.RegisterShaderLanguageParser.html\">PluginRegistrar.RegisterShaderLanguageParser</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_ShaderParser_Parse.html\">Parse</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_ShaderParser_ParseInfo.html\">ParseInfo</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/callbacks.html\">Shader Parser Callbacks</a></li>\n\
</ul>\n\
</p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";