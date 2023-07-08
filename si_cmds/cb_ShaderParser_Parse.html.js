var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Parse</title>\n\
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
            <h1>Parse</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Parse</h2>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Description</h3>\n\
<div><p><a name=\"Description\"> </a>	<p>\n\
				Populates the shader definition with information from the associated file. This is the second pass at parsing the \n\
				associated file, since the <a href=\"#!/url=./si_cmds/cb_ShaderParser_ParseInfo.html\">ParseInfo</a> callback first parses it \n\
				to compile enough information to register the shader definition and populate the preset manager.\n\
			</p>\n\
	<p>\n\
				This callback is fired when a shader implemented with this parser\'s language is instantiated. \n\
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
	public bool Parse( Context in_context )\n\
	{\n\
		...\n\
	}\n\
}</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"cplusplus\">CStatus &lt;plugin-item_name&gt;_Parse( CRef&amp; in_context ) \n\
{ \n\
	... \n\
}</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">function &lt;plugin-item_name&gt;_Parse( in_context ) \n\
{ \n\
	... \n\
}</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">def &lt;plugin-item_name&gt;_Parse( in_context ):\n\
	...</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">Function &lt;plugin-item_name&gt;_Parse( in_context )\n\
	...\n\
End Function</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"perlscript\">sub &lt;plugin-item_name&gt;_Parse \n\
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
<div><p><a name=\"ContextAttributes\"> </a><a name=\"ContextAttributes_ShaderParse\"></a>	<table>		<tr>			<th>Attribute</th>\n\
			<th>Get/Set</th>\n\
			<th>Description</th>\n\
</tr>\n\
		<tr>			<td class=\"example\">Filename</td>\n\
			<td>Sets a <a href=\"#!/url=./files/String.htm\">String</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a></td>\n\
			<td>The full path to the file to pre-parse.</td>\n\
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
<td class=\"example\"><pre class=\"cplusplus\">SICALLBACK UtShaderLanguageParser_Parse( CRef&amp; in_ctxt  )\n\
{\n\
	XSI::Application app;\n\
	XSI::Factory fact = app.GetFactory();\n\
\n\
	/*	For this example, we use a very simple format to define the shader.\n\
		First line represents the prog id.\n\
		Following lines have this format:\n\
			Type space Input space Texturable space PortName\n\
			color|float|boolean|integer|vector2|vector3|vector4 in|out on|off $PortName\n\
		Until a line with a single dot is found.\n\
		Then, 2 strings separated by a space give the MR function name and library.			*/\n\
	XSI::Context ctxt(in_ctxt);\n\
	XSI::CString strFilename = ctxt.GetAttribute( L\"FileName\" );\n\
	XSI::ShaderDef shaderDef = ctxt.GetAttribute( L\"Definition\" );\n\
\n\
	// We\'ll just check if our user attribute is there\n\
	{\n\
		XSI::CValue valDune;\n\
		valDune = shaderDef.GetAttributes().GetAttribute( L\"{F2EF07FE-1B57-4245-BF08-F5556212BFDF}\" );\n\
		assert( !valDune.IsEmpty() );\n\
	}\n\
\n\
	std::ifstream in( strFilename.GetAsciiString() );\n\
	if(!in) \n\
	{\n\
		ctxt.PutAttribute( L\"Errors\", L\"Cannot open file: \" + strFilename + L\"\\n\" );\n\
		return CStatus::Fail;\n\
	}\n\
\n\
	char buf[255];\n\
\n\
	// Skip First Line\n\
	in.getline( buf, 255 );\n\
\n\
	XSI::ShaderParamDefOptions optTexturableInput = fact.CreateShaderParamDefOptions();\n\
	optTexturableInput.SetTexturable(true);\n\
\n\
	// Port Defs \n\
	XSI::ShaderStructParamDef currentStructDef;\n\
	while( in.getline( buf, 255 ).eof()==false )\n\
	{\n\
		if( strlen( buf ) &gt; 0 )\n\
		{\n\
			CSIString str(buf);\n\
			std::vector&lt;CSIString&gt; tokens;\n\
			str.Split( L\" \", tokens );\n\
\n\
			// Strip the enum tokens\n\
			XSI::CValue valEnumValues;\n\
			{\n\
				CSIString strEnumValues;\n\
				std::vector&lt;CSIString&gt;::iterator itEraseStart = tokens.end();\n\
				bool bStartedEnum=false;\n\
				for( std::vector&lt;CSIString&gt;::iterator it=tokens.begin(); it!=tokens.end(); ++it )\n\
				{\n\
					// Skip the enum token\n\
					if( *it == L\"enum\" )\n\
					{\n\
						\n\
						itEraseStart = it;\n\
						bStartedEnum = true;\n\
					}\n\
					// Gather the enum tokens and remove them from the token list\n\
					else if( bStartedEnum )\n\
					{\n\
						\n\
						std::vector&lt;CSIString&gt; enumTokens;\n\
						it-&gt;Split( L\"=\", enumTokens );\n\
						if( enumTokens.size() == 2 )\n\
						{\n\
							//Replace \'_\' by \' \'\n\
							for( ULONG i=0; i&lt;enumTokens[0].Length(); ++i )\n\
							{\n\
								if( ((LPCWSTR)enumTokens[0])[i] == L\'_\' )\n\
								{\n\
									enumTokens[0].SetAt( i, L\' \' );\n\
								}\n\
							}\n\
\n\
							strEnumValues += enumTokens[0];\n\
							strEnumValues += L\",\";\n\
							strEnumValues += enumTokens[1];\n\
							strEnumValues += L\";\";\n\
						}\n\
					}\n\
				}\n\
			\n\
				if( bStartedEnum )\n\
				{\n\
					if( itEraseStart!=tokens.end() )\n\
						tokens.erase( itEraseStart, tokens.end() );\n\
\n\
					if( !strEnumValues.IsEmpty() )\n\
					{\n\
						valEnumValues = (LPCWSTR)strEnumValues;\n\
					}\n\
				}\n\
			}\n\
			\n\
\n\
			if( tokens.size()==1  )\n\
			{\n\
				if( str==L\".\" )\n\
					break;\n\
				else if( str==L\"endstruct\")\n\
					currentStructDef=CRef();\n\
			}\n\
			else if( tokens.size()==4 )\n\
			{\n\
				XSI::CString strParamName = (LPCWSTR)tokens[3];\n\
				\n\
				CSIString strType = tokens[0];\n\
\n\
				bool bIsInput= tokens[1]==L\"in\";\n\
				bool bTexturable= tokens[2]==L\"on\";\n\
				bool bIsArray =false;\n\
\n\
				if( strType.Right(2) == L\"[]\" )\n\
				{\n\
					bIsArray = true;\n\
					strType.TruncateRight(2);\n\
				}\n\
				\n\
				XSI::siShaderParameterType eType = siScalarParameterType;\n\
				if( strType == L\"color\"  )\n\
					eType = siColorParameterType;\n\
				if( strType == L\"float\" )\n\
					eType = siScalarParameterType;\n\
				else if( strType == L\"vector2\" )\n\
					eType = siVector2ParameterType;\n\
				else if( strType == L\"vector3\" )\n\
					eType = siVectorParameterType;\n\
				else if( strType == L\"vector4\" )\n\
					eType = siVector4ParameterType;\n\
				else if( strType == L\"boolean\" )\n\
					eType = siBooleanParameterType;\n\
				else if( strType == L\"integer\" )\n\
					eType = siIntegerParameterType;\n\
				else if( strType == L\"reference\" )\n\
					eType = siReferenceParameterType;\n\
				else if ( strType == L\"matrix4\")\n\
					eType = siMatrixParameterType;\n\
				else if ( strType == L\"matrix3\")\n\
					eType = siMatrix3ParameterType;\n\
				else if ( strType == L\"string\")\n\
					eType = siStringParameterType;\n\
				else if ( strType == L\"quaternion\")\n\
					eType = siQuaternionParameterType;\n\
				else if ( strType == L\"fcurve\")\n\
					eType = siProfileCurveParameterType;\n\
				else if ( strType == L\"gradient\")\n\
					eType = siGradientParameterType;\n\
				else if ( strType == L\"texture\")\n\
					eType = siTextureParameterType;\n\
				else if ( strType == L\"tspace\")\n\
					eType = siTextureSpaceParameterType;\n\
				else if ( strType == L\"struct\" &amp;&amp; !currentStructDef.IsValid() )\n\
					eType = siStructParameterType;\n\
\n\
				// Now add the port.\n\
				XSI::ShaderParamDef paramDef;\n\
\n\
				bTexturable &amp;= bIsInput;\n\
\n\
				XSI::ShaderParamDefContainer pdefContainer;\n\
				if( currentStructDef.IsValid() )\n\
					pdefContainer = currentStructDef.GetSubParamDefs();\n\
				else if( bIsInput )\n\
					pdefContainer = shaderDef.GetInputParamDefs();\n\
				else\n\
					pdefContainer = shaderDef.GetOutputParamDefs();\n\
\n\
\n\
				if( !bIsArray )\n\
				{\n\
					paramDef = pdefContainer.AddParamDef( strParamName, eType, bTexturable ? optTexturableInput :CRef() );\n\
\n\
					if( eType == siStructParameterType )\n\
					{\n\
						currentStructDef = paramDef;\n\
					}\n\
				}\n\
				else\n\
				{\n\
					paramDef = pdefContainer.AddArrayParamDef( strParamName, eType, bTexturable ? optTexturableInput :CRef() );\n\
\n\
					XSI::ShaderArrayParamDef arrayDef = paramDef;\n\
					\n\
					XSI::ShaderParamDef itemDef = arrayDef.GetArrayItemDef();\n\
					\n\
					if( eType == siStructParameterType )\n\
					{\n\
						currentStructDef = itemDef;\n\
					}\n\
				}\n\
\n\
				// Set the enum values\n\
				if( !valEnumValues.IsEmpty() )\n\
					paramDef.GetAttributes().SetAttribute( L\"PPGPortEnumValues\", valEnumValues );\n\
				\n\
				// Set tspace filter\n\
				if( strType==L\"tspace\" )\n\
				{\n\
					paramDef.GetAttributes().SetAttribute( siPropertyFilterAttribute, (LONG)siUVPropertyFilter );\n\
				}\n\
			}\n\
		}\n\
	}\n\
\n\
	if( in.getline( buf, 255 ).eof()==true )\n\
	{\n\
		CSIString str(buf);\n\
		std::vector&lt;CSIString&gt; tokens;\n\
		str.Split( L\" \", tokens );\n\
		\n\
		// Fill MR MetaShaderDef\n\
		if( tokens.size()==2 || tokens.size()==3 )\n\
		{\n\
			// Texture type can connect to anything.\n\
			shaderDef.AddType( L\"texture\" );\n\
\n\
			XSI::MetaShaderRendererDef rendererDef = shaderDef.AddRendererDef( L\"Mental Ray\");\n\
			rendererDef.PutSymbolName( (LPCWSTR)tokens[0] );\n\
			rendererDef.PutCodePath( (LPCWSTR)tokens[1] );\n\
\n\
			CValue valVersion;\n\
\n\
			if( tokens.size()==2 )\n\
			{\n\
				valVersion=(LONG)1;\n\
			}\n\
			else\n\
			{\n\
				valVersion = (LPCWSTR)tokens[2];\n\
				valVersion.ChangeType( XSI::CValue::siInt8 );\n\
			}\n\
\n\
			XSI::AttributeMap rendererOptions = rendererDef.GetRendererOptions();\n\
			rendererOptions.SetAttribute( L\"version\", valVersion );\n\
\n\
			// Hardcoded options by shader types.\n\
			if( tokens[0] == L\"sib_uvwgen\" )\n\
			{\n\
				rendererOptions.SetAttribute( L\"derivative1\", L\"on\" );\n\
				rendererOptions.SetAttribute( L\"derivative2\", L\"on\" );\n\
			}\n\
		}\n\
		else\n\
		{\n\
			ctxt.PutAttribute( L\"Errors\", L\"Cannot find the DLL Code Section.\\n\" );\n\
			in.close();\n\
			return CStatus::Fail;\n\
		}\n\
	}\n\
	else\n\
	{\n\
		ctxt.PutAttribute( L\"Errors\", L\"Cannot find the DLL Code Section.\\n\" );\n\
		in.close();\n\
		return CStatus::Fail;\n\
	}\n\
	\n\
	in.close();\n\
	return CStatus::OK;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>See Also</h3>\n\
<div><p><a name=\"SeeAlso\"> </a><ul>\n\
	<li><a href=\"#!/url=./si_om/PluginRegistrar.RegisterShaderLanguageParser.html\">PluginRegistrar.RegisterShaderLanguageParser</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_ShaderParser_ParseInfo.html\">ParseInfo</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_ShaderParser_QueryParserSettings.html\">QueryParserSettings</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/callbacks.html\">Shader Parser Callbacks</a></li>\n\
</ul>\n\
</p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";