var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Define (Shader)</title>\n\
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
            <h1>Define (Shader)</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Define (Shader)</h2>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Description</h3>\n\
<div><p><a name=\"Description\"> </a>	<p>\n\
				Defines the shader definition, including all parameters that underlie the controls on the property page. \n\
				This is where you define the number of parameters, their type, any defaults, value limitations, and so on.\n\
			</p>\n\
	<p>\n\
				This callback is fired the first time a shader is initialized. Once the definition is intialized, the shader \n\
				definition is in the system and does not need to be redefined.\n\
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
	public bool Define( Context in_context )\n\
	{\n\
		...\n\
	}\n\
}</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"cplusplus\">CStatus &lt;plugin-item_name&gt;_Define( CRef&amp; in_context ) \n\
{ \n\
	... \n\
}</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">function &lt;plugin-item_name&gt;_Define( in_context ) \n\
{ \n\
	... \n\
}</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">def &lt;plugin-item_name&gt;_Define( in_context ):\n\
	...</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">Function &lt;plugin-item_name&gt;_Define( in_context )\n\
	...\n\
End Function</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"perlscript\">sub &lt;plugin-item_name&gt;_Define \n\
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
			<td><a href=\"#!/url=./si_om/Context.GetAttribute.html\">Context.GetAttribute</a>(\"Definition\") returns the <a href=\"#!/url=./si_om/ShaderDef.html\">ShaderDef</a>. </td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td>C++</td>\n\
			<td><a href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>& </td>\n\
			<td><a href=\"#!/url=./si_cpp/classXSI_1_1Context.html#GetAttribute\">Context::GetAttribute</a>(\"Definition\") \n\
						returns a reference to the <a href=\"#!/url=./si_cpp/classXSI_1_1ShaderDef.html\">ShaderDef</a>.\n\
					</td>\n\
</tr>\n\
</table>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Context Attributes</h3>\n\
<div><p><a name=\"ContextAttributes\"> </a><a name=\"ContextAttributes_ShaderDefine\"></a>	<table>		<tr>			<th>Attribute</th>\n\
			<th>Get/Set</th>\n\
			<th>Description</th>\n\
</tr>\n\
		<tr>			<td class=\"example\">Definition</td>\n\
			<td>Returns or sets a <a href=\"#!/url=./si_om/ShaderDef.html\">ShaderDef</a></td>\n\
			<td>The shader definition to populate/query.</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">Errors</td>\n\
			<td>Returns a <a href=\"#!/url=./files/String.htm\">String</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a></td>\n\
			<td>The parser can output parse errors.</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">Warnings</td>\n\
			<td>Returns a <a href=\"#!/url=./files/String.htm\">String</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a></td>\n\
			<td>The parser can output parse warnings.</td>\n\
</tr>\n\
</table>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Example</h3>\n\
<div><p><a name=\"Examples\"> </a><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"cplusplus\">SICALLBACK UtShaderPlugin_ColorShare_1_0_Define( CRef&amp; in_ctxt  )\n\
{\n\
	XSI::Context ctxt(in_ctxt);\n\
	XSI::ShaderDef shaderDef = ctxt.GetAttribute( L\"Definition\" );\n\
\n\
	// Check if the user attribute is there\n\
	{\n\
		CValue valDune = shaderDef.GetAttributes().GetAttribute( L\"{F2EF07FE-1B57-4245-BF08-F5556212BFDF}\" );\n\
		assert( !valDune.IsEmpty() );\n\
	}\n\
\n\
	// Define PassThrough ports\n\
	definePassThroughPorts( shaderDef, XSI::siColorParameterType );\n\
\n\
	// Fill Meta shader section\n\
	{	\n\
		shaderDef.AddType( L\"texture\" );\n\
\n\
		MetaShaderRendererDef rendererDef = shaderDef.AddRendererDef( L\"Mental Ray\");\n\
		assert( rendererDef.IsValid() );\n\
		rendererDef.PutSymbolName( L\"sib_color_passthrough\" );\n\
		rendererDef.PutCodePath( L\"{LIBS}/sibase.{EXT}\" );\n\
		rendererDef.GetRendererOptions().SetAttribute( L\"version\", CValue((LONG)1) );\n\
	}\n\
\n\
	return CStatus::OK;\n\
}\n\
\n\
\n\
// Helper function\n\
void definePassThroughPorts( ShaderDef&amp; in_ShaderDef, XSI::siShaderParameterType in_eParamType )\n\
{\n\
	XSI::Application app;\n\
	XSI::Factory fact=app.GetFactory();\n\
\n\
	XSI::ShaderParamDefOptions optDefault= fact.CreateShaderParamDefOptions();\n\
	optDefault.SetTexturable(true);\n\
\n\
	ShaderParamDefOptions opt= fact.CreateShaderParamDefOptions();\n\
	opt.SetTexturable(true);\n\
\n\
	// Add input + 8 channels + output\n\
	if( in_eParamType==XSI::siColorParameterType )\n\
	{\n\
		XSI::CValueArray valArray;\n\
		valArray.Add( 0.5f );\n\
		valArray.Add( 0.5f );\n\
		valArray.Add( 0.5f );\n\
		valArray.Add( 1.0f );\n\
		optDefault.SetDefaultValue( valArray );\n\
	}\n\
	\n\
	XSI::ShaderParamDef pdef;\n\
	pdef = in_ShaderDef.GetInputParamDefs().AddParamDef( L\"input\", in_eParamType, optDefault );\n\
	pdef = in_ShaderDef.GetInputParamDefs().AddParamDef( L\"channel1\", in_eParamType, opt );\n\
	pdef = in_ShaderDef.GetInputParamDefs().AddParamDef( L\"channel2\", in_eParamType, opt );\n\
	pdef = in_ShaderDef.GetInputParamDefs().AddParamDef( L\"channel3\", in_eParamType, opt );\n\
	pdef = in_ShaderDef.GetInputParamDefs().AddParamDef( L\"channel4\", in_eParamType, opt );\n\
	pdef = in_ShaderDef.GetInputParamDefs().AddParamDef( L\"channel5\", in_eParamType, opt );\n\
	pdef = in_ShaderDef.GetInputParamDefs().AddParamDef( L\"channel6\", in_eParamType, opt );\n\
	pdef = in_ShaderDef.GetInputParamDefs().AddParamDef( L\"channel7\", in_eParamType, opt );\n\
	pdef = in_ShaderDef.GetInputParamDefs().AddParamDef( L\"channel8\", in_eParamType, opt );\n\
	pdef = in_ShaderDef.GetOutputParamDefs().AddParamDef( L\"out_result\", in_eParamType );\n\
	\n\
	// Get the ShaderDefs Layouts\n\
	XSI::PPGLayout layoutPPG = in_ShaderDef.GetPPGLayout();\n\
	XSI::PPGLayout layoutRT = in_ShaderDef.GetRenderTreeLayout();\n\
\n\
	// Define the PPG Layout.. only input should be visible\n\
	layoutPPG.AddItem( L\"name\", L\"Name\" );\n\
	layoutPPG.AddItem( L\"input\", L\"Input\" );\n\
\n\
	// Define the RT Layout.. input alone, then all the channels in a group\n\
	{\n\
		layoutRT.AddItem( L\"input\", L\"Input\" );\n\
		layoutRT.AddGroup( L\"Channels\", false );\n\
			layoutRT.AddItem( L\"channel1\", L\"Channel 1\" );\n\
			layoutRT.AddItem( L\"channel2\", L\"Channel 2\" );\n\
			layoutRT.AddItem( L\"channel3\", L\"Channel 3\" );\n\
			layoutRT.AddItem( L\"channel4\", L\"Channel 4\" );\n\
			layoutRT.AddItem( L\"channel5\", L\"Channel 5\" );\n\
			layoutRT.AddItem( L\"channel6\", L\"Channel 6\" );\n\
			layoutRT.AddItem( L\"channel7\", L\"Channel 7\" );\n\
			layoutRT.AddItem( L\"channel8\", L\"Channel 8\" );\n\
		layoutRT.EndGroup();\n\
	}\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>See Also</h3>\n\
<div><p><a name=\"SeeAlso\"> </a><ul>\n\
	<li><a href=\"#!/url=./si_om/PluginRegistrar.RegisterShader.html\">PluginRegistrar.RegisterShader</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_Shader_DefineInfo.html\">DefineInfo</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/callbacks.html\">Shader Callbacks</a></li>\n\
</ul>\n\
</p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";