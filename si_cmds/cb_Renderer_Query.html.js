var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Query</title>\n\
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
            <h1>Query</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Query</h2>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Description</h3>\n\
<div><p><a name=\"Description\"> </a>	<p>\n\
				This optional callback is used by the Render Manager to query the rendering engine for information\n\
				based on the <a href=\"#!/url=./si_om/siRenderQueryType.html\">siRenderQueryType</a> enumeration value given in the <span style=\"font-family: courier, monospace;\">QueryType</span> \n\
				attribute.\n\
			</p>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Applies To</h3>\n\
<div><p><a name=\"AppliesTo\"> </a><a href=\"#!/url=./files/cus_render.htm\">Custom Renderers</a></p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Syntax</h3>\n\
<div><p><a name=\"Syntax\"> </a><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"cplusplus\">CStatus &lt;renderer_name&gt;_Query( CRef&amp; in_context )\n\
{\n\
	...\n\
}</pre></td></tr>\n\
</table>\n\
</div>	<p><span style=\"font-family: courier, monospace;\">&lt;renderer_name&gt;</span> is the name specified in the call to\n\
				<a href=\"#!/url=./si_cpp/classXSI_1_1PluginRegistrar.html#RegisterRenderer\">PluginRegistrar::RegisterRenderer</a>,\n\
				with any spaces converted to underscores.\n\
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
			<td class=\"name\">C++</td>\n\
			<td><a href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>&\n\
					</td>\n\
			<td>\n\
						A reference to the <a href=\"#!/url=./si_cpp/classXSI_1_1RendererContext.html\">RendererContext</a> object.\n\
						<a href=\"#!/url=./si_cpp/classXSI_1_1Context.html#GetSource\">Context::GetSource</a>\n\
						returns the <a href=\"#!/url=./si_cpp/classXSI_1_1Renderer.html\">Renderer</a>.\n\
					</td>\n\
</tr>\n\
</table>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Context Attributes</h3>\n\
<div><p><a name=\"ContextAttributes\"> </a>	<p>\n\
			    The context attributes for the query callback are different depending on the\n\
				query type. However, in all cases the <span style=\"font-family: courier, monospace;\">QueryType</span> attribute\n\
				is set.\n\
			</p>\n\
	<table>		<tr>			<th>Attribute</th>\n\
			<th>Type</th>\n\
			<th>Description</th>\n\
</tr>\n\
		<tr>			<td>QueryType</td>\n\
			<td><a href=\"#!/url=./si_om/siRenderQueryType.html\">siRenderQueryType</a></td>\n\
			<td>\n\
						The type of information being queried for. See table below for\n\
						context attributes specific for each query.</td>\n\
</tr>\n\
</table>\n\
	<table>		<tr>			<th>Query Type</th>\n\
			<th>Attribute</th>\n\
			<th>Type</th>\n\
			<th>Description</th>\n\
</tr>\n\
		<tr>			<td><a href=\"#!/url=./si_om/siRenderQueryType.html#siRenderQueryArchiveIsValid\">siRenderQueryArchiveIsValid</a></td>\n\
			<td>Filename</td>\n\
			<td><a href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a></td>\n\
			<td>\n\
						A file path to an object archive.\n\
					</td>\n\
</tr>\n\
		<tr>			<td></td>\n\
			<td>Valid</td>\n\
			<td>bool</td>\n\
			<td>\n\
						On return should be set to <span style=\"font-family: courier, monospace;\">true</span> indicating that \n\
						the object archive given in <span style=\"font-family: courier, monospace;\">Filename</span> is a valid \n\
						archive for this renderer, or <span style=\"font-family: courier, monospace;\">false</span> if it isn\'t.\n\
					</td>\n\
</tr>\n\
		<tr>			<td></td>\n\
			<td>MultiFrame</td>\n\
			<td>bool</td>\n\
			<td>\n\
						On return should be set to <span style=\"font-family: courier, monospace;\">true</span> indicating\n\
						whether the archive, if valid, is a multi-frame archive.\n\
					</td>\n\
</tr>\n\
		<tr>			<td><a href=\"#!/url=./si_om/siRenderQueryType.html#siRenderQueryArchiveProxies\">siRenderQueryArchiveProxies</a></td>\n\
			<td>Filename</td>\n\
			<td><a href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a></td>\n\
			<td>\n\
						A file path to an object archive.\n\
					</td>\n\
</tr>\n\
		<tr>			<td></td>\n\
			<td>Frame</td>\n\
			<td>int</td>\n\
			<td>\n\
						The frame number within the archive that the proxies should be\n\
						returned for. Only needed for multi-frame archives. For single-frame\n\
						archives, the <span style=\"font-family: courier, monospace;\">Filename</span> attribute value is sufficient.\n\
					</td>\n\
</tr>\n\
		<tr>			<td></td>\n\
			<td>\n\
						ProxyXY<br /><br />ProxyXZ<br /><br />ProxyYZ\n\
					</td>\n\
			<td><a href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a></td>\n\
			<td>\n\
						If display proxies were generated for the object archive\n\
						given in <span style=\"font-family: courier, monospace;\">Filename</span>, these attribute values should\n\
						be set by the callback, as absolute paths to the display proxies for \n\
						the XY, XZ and YZ planes.\n\
						The display proxies are drawn to fit the bounding box of the archive.\n\
						The display proxy images should be saved in a format that Softimage\n\
						recognises.\n\
					</td>\n\
</tr>\n\
		<tr>			<td><a href=\"#!/url=./si_om/siRenderQueryType.html#siRenderQueryArchiveBBox\">siRenderQueryArchiveBBox</a></td>\n\
			<td>Filename</td>\n\
			<td><a href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a></td>\n\
			<td>\n\
						A file path to an object archive.\n\
					</td>\n\
</tr>\n\
		<tr>			<td></td>\n\
			<td>Frame</td>\n\
			<td>int</td>\n\
			<td>\n\
						The frame number within the archive that the bounding box should be\n\
						returned for. Only needed for multi-frame archives. For single-frame\n\
						archives, the <span style=\"font-family: courier, monospace;\">Filename</span> attribute value is sufficient.\n\
					</td>\n\
</tr>\n\
		<tr>			<td></td>\n\
			<td>\n\
						BBoxMin<br /><br />BBoxMax\n\
					</td>\n\
			<td><a href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CVector3.html\">CVector3</a></td>\n\
			<td>\n\
						These attribute values should be set by the callback as the full\n\
						bounding box of the renderable geometry contained inside the\n\
						object archive. The minimum and maximum extents should be set as\n\
						<a href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CVector3.html\">CVector3</a> values for an axis-aligned\n\
						bounding box.\n\
					</td>\n\
</tr>\n\
		<tr>			<td><a href=\"#!/url=./si_om/siRenderQueryType.html#siRenderQueryArchiveFrameRange\">siRenderQueryArchiveFrameRange</a></td>\n\
			<td>Filename</td>\n\
			<td><a href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a></td>\n\
			<td>\n\
						A file path to an object archive.\n\
					</td>\n\
</tr>\n\
		<tr>			<td></td>\n\
			<td>\n\
						FrameStart<br /><br />FrameEnd\n\
					</td>\n\
			<td>int</td>\n\
			<td>\n\
						These attribute values should be set by the callback as the frame\n\
						range for the multi-frame object archive given by the \n\
						<span style=\"font-family: courier, monospace;\">Filename</span> attribute. This is only called if the\n\
						callback has identified the object archive as a multi-frame archive.\n\
						Both values are inclusive.\n\
					</td>\n\
</tr>\n\
		<tr>			<td><a href=\"#!/url=./si_om/siRenderQueryType.html#siRenderQueryDisplayBitDepths\">siRenderQueryDisplayBitDepths</a></td>\n\
			<td>BitDepths</td>\n\
			<td><a href=\"#!/url=./si_cpp/classXSI_1_1CLongArray.html\">CLongArray</a></td>\n\
			<td>\n\
						This attribute should be set by the callback as an array of \n\
						<a href=\"#!/url=./si_om/siImageBitDepth.html\">siImageBitDepth</a> values, indicating which bit \n\
						depths Softimage can ask the renderer to returns image fragments for (see\n\
						<a href=\"#!/url=./si_cpp/classXSI_1_1RendererImageFragment.html#GetScanlineRGBA\">RendererImageFragment::GetScanlineRGBA</a>).\n\
						<br /><br />\n\
						Values currently understood by Softimage are: \n\
									<ul>\n\
				<li><a href=\"#!/url=./si_om/siImageBitDepth.html#siImageBitDepthInteger8\">siImageBitDepthInteger8</a></li>\n\
				<li><a href=\"#!/url=./si_om/siImageBitDepth.html#siImageBitDepthInteger16\">siImageBitDepthInteger16</a></li>\n\
				<li><a href=\"#!/url=./si_om/siImageBitDepth.html#siImageBitDepthFloat16\">siImageBitDepthFloat16</a></li>\n\
				<li><a href=\"#!/url=./si_om/siImageBitDepth.html#siImageBitDepthFloat32\">siImageBitDepthFloat32</a></li>\n\
			</ul>\n\
</td>\n\
</tr>\n\
		<tr>			<td><a href=\"#!/url=./si_om/siRenderQueryType.html#siRenderQueryWantDirtyList\">siRenderQueryWantDirtyList</a></td>\n\
			<td>WantDirtyList</td>\n\
			<td>bool</td>\n\
			<td>\n\
						This attribute should be set, prior to return, to indicate whether\n\
						the renderer requires a dirty list or not. If upon return this\n\
						value is true, a dirty list will be supplied to the render upon\n\
						each call to the <a href=\"#!/url=./si_cmds/cb_Renderer_Process.html\">Process</a>\n\
						callback. If set to false, no dirty list will be supplied.\n\
						<br /><br />\n\
						By default a dirty list is supplied, whether this query code is\n\
						handled or not. This is mainly an optimization hint for renderers\n\
						that don\'t mirror the scene graph.\n\
					</td>\n\
</tr>\n\
		<tr>			<td><a href=\"#!/url=./si_om/siRenderQueryType.html#siRenderQueryVersionString\">siRenderQueryVersionString</a></td>\n\
			<td>Version</td>\n\
			<td><a href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a></td>\n\
			<td>\n\
						This attribute should be set on return with the rendering\n\
						engine\'s version identifier. This version identifier can\n\
						be different from the plugin version, in case they carry\n\
						different version numbers. There is no restriction on the\n\
						formatting of the version identifier.\n\
					</td>\n\
</tr>\n\
</table>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>See Also</h3>\n\
<div><p><a name=\"SeeAlso\"> </a><ul>\n\
	<li><a href=\"#!/url=./si_cmds/cb_Renderer_Init.html\">Init (Renderer)</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_Renderer_Abort.html\">Abort</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_Renderer_Process.html\">Process</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_Renderer_Quality.html\">Quality</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/callbacks.html\">Renderer Callbacks</a></li>\n\
</ul>\n\
</p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";