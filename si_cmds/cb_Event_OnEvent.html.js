var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>OnEvent</title>\n\
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
            <h1>OnEvent</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">OnEvent</h2>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Description</h3>\n\
<div><p><a name=\"Description\"> </a>	<p>\n\
				Fired when an event occurs. For example, the OnEvent callback for a <a href=\"#!/url=./si_om/siEventID.html#siOnBeginNewScene\">siOnBeginNewScene</a> event \n\
				is fired when a new scene is created with File > New Scene, the Project Manager, or the \n\
				<a href=\"#!/url=./si_cmds/NewScene.html\">NewScene</a> command. \n\
			</p>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Applies To</h3>\n\
<div><p><a name=\"AppliesTo\"> </a>	<p>\n\
				Events registered with <a href=\"#!/url=./si_om/PluginRegistrar.RegisterEvent.html\">PluginRegistrar.RegisterEvent</a> (for <a href=\"#!/url=./si_om/EventInfo.html\">EventInfo</a>s). or \n\
				<a href=\"#!/url=./si_om/PluginRegistrar.RegisterTimerEvent.html\">PluginRegistrar.RegisterTimerEvent</a> (for <a href=\"#!/url=./si_om/TimerEvent.html\">TimerEvent</a>s). \n\
			</p>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Supported Events</h3>\n\
<div><p><a name=\"SupportedEvents\"> </a>	<p>See <a href=\"#!/url=./si_om/siEventID.html\">siEventID</a> for a list of supported events.</p>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Syntax</h3>\n\
<div><p><a name=\"Syntax\"> </a><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"csharp\">public class &lt;event_name&gt;\n\
{\n\
	public bool OnEvent( Context in_context )\n\
	{\n\
		...\n\
	}\n\
}</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"cplusplus\">CStatus &lt;event_name&gt;_OnEvent( CRef&amp; in_context )\n\
{ \n\
	... \n\
}</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">function &lt;event_name&gt;_OnEvent( in_context )\n\
{ \n\
	... \n\
}</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">def &lt;event_name&gt;_OnEvent( in_context ):\n\
	...</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">Function &lt;event_name&gt;_OnEvent( in_context )\n\
	...\n\
End Function</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"perlscript\">sub &lt;event_name&gt;_OnEvent \n\
{ \n\
	my $in_context = shift; \n\
}</pre></td></tr>\n\
</table>\n\
</div>	<p><span style=\"font-family: courier, monospace;\">&lt;event_name&gt;</span> is the name specified in the call to <a href=\"#!/url=./si_om/PluginRegistrar.RegisterEvent.html\">PluginRegistrar.RegisterEvent</a>, \n\
				with any spaces converted to underscores. For example, if you register the event with the name <span style=\"font-family: courier, monospace;\">\"My New Scene\"</span>, then the \n\
				callback name is <span style=\"font-family: courier, monospace;\">\"My_New_Scene_OnEvent\"</span>.\n\
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
			<td><a href=\"#!/url=./si_om/Context.Source.html\">Context.Source</a> returns the event <a href=\"#!/url=./si_om/PluginItem.html\">PluginItem</a>.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td>C++</td>\n\
			<td><a href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>&</td>\n\
			<td>A reference to the <a href=\"#!/url=./si_cpp/classXSI_1_1Context.html\">Context</a> object.</td>\n\
</tr>\n\
</table>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Context Attributes</h3>\n\
<div><p><a name=\"ContextAttributes\"> </a><a name=\"ContextAttributes_Events\"></a>	<table>		<tr>			<th>Event</th>\n\
			<th>Attribute</th>\n\
			<th>Description</th>\n\
</tr>\n\
		<tr>			<td class=\"name\"><a href=\"#!/url=./si_om/siEventID.html#siOnActivate\">siOnActivate</a><a name=\"ctxt_siOnActivate\"></a></td>\n\
			<td class=\"example\">State</td>\n\
			<td>Boolean value which indicates whether the application has been activated (true) or deactivated (false).</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"><a href=\"#!/url=./si_om/siEventID.html#siOnBeginCommand\">siOnBeginCommand</a><a name=\"ctxt_siOnBeginCommand\"></a></td>\n\
			<td class=\"example\">Command</td>\n\
			<td>\n\
						Fired when a <a href=\"#!/url=./si_om/Command.html\">Command</a> is about to be executed. The event can be used to abort the command execution, modify \n\
						the command argument values or launch other commands. \n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"><a href=\"#!/url=./si_om/siEventID.html#siOnEndCommand\">siOnEndCommand</a><a name=\"ctxt_siOnEndCommand\"></a></td>\n\
			<td class=\"example\">Command</td>\n\
			<td>\n\
						Fired when a <a href=\"#!/url=./si_om/Command.html\">Command</a> has been executed. The event can be used to access the command return value or output argument values. \n\
						Contrary to other event types, this event is always fired when the current command has been aborted by a previous event.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">Aborted</td>\n\
			<td>\n\
						Boolean denoting whether the command was aborted.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">ReturnValue</td>\n\
			<td>\n\
						Value returned by the command (if any).\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"><a href=\"#!/url=./si_om/siEventID.html#siOnBeginFileExport\">siOnBeginFileExport</a><a name=\"ctxt_siOnBeginFileExport\"></a><br /><br /><a href=\"#!/url=./si_om/siEventID.html#siOnEndFileExport\">siOnEndFileExport</a><a name=\"ctxt_siOnEndFileExport\"></a></td>\n\
			<td class=\"example\">Input</td>\n\
			<td>The objects being exported:\n\
								<ul>\n\
				<li><a href=\"#!/url=./si_om/ActionSource.html\">ActionSource</a> for siFileTypeAction</li>\n\
				<li><a href=\"#!/url=./si_om/Library.html\">Library</a> for siFileTypeMatLib</li>\n\
				<li><a href=\"#!/url=./si_om/Mixer.html\">Mixer</a> for siFileTypeMixer</li>\n\
				<li><a href=\"#!/url=./si_om/Model.html\">Model</a> for siFileTypeModel</li>\n\
				<li><a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> for siFileTypedotXSI and siFileTypeIGES file types</li>\n\
				<li>Custom objects for siFileTypeCustom</li>\n\
			</ul>\n\
</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">FileName</td>\n\
			<td>The full path name of the exported file.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">FileType</td>\n\
			<td>An <a href=\"#!/url=./si_om/siFileType.html\">siFileType</a> value that specifies the type of file being exported. Possible values are:\n\
								<ul>\n\
				<li><a href=\"#!/url=./si_om/siFileType.html#siFileTypeAction\">siFileTypeAction</a></li>\n\
				<li><a href=\"#!/url=./si_om/siFileType.html#siFileTypeCustom\">siFileTypeCustom</a></li>\n\
				<li><a href=\"#!/url=./si_om/siFileType.html#siFileTypedotXSI\">siFileTypedotXSI</a></li>\n\
				<li><a href=\"#!/url=./si_om/siFileType.html#siFileTypeIGES\">siFileTypeIGES</a></li>\n\
				<li><a href=\"#!/url=./si_om/siFileType.html#siFileTypeMatLib\">siFileTypeMatLib</a></li>\n\
				<li><a href=\"#!/url=./si_om/siFileType.html#siFileTypeMixer\">siFileTypeMixer</a></li>\n\
				<li><a href=\"#!/url=./si_om/siFileType.html#siFileTypeModel\">siFileTypeModel</a></li>\n\
			</ul>\n\
</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"><a href=\"#!/url=./si_om/siEventID.html#siOnBeginFileImport\">siOnBeginFileImport</a><a name=\"ctxt_siOnBeginFileImport\"></a><br /><br /><a href=\"#!/url=./si_om/siEventID.html#siOnEndFileImport\">siOnEndFileImport</a><a name=\"ctxt_siOnEndFileImport\"></a></td>\n\
			<td class=\"example\">FileName</td>\n\
			<td>The full path name of the file to import.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">FileType</td>\n\
			<td>An <a href=\"#!/url=./si_om/siFileType.html\">siFileType</a> value that specifies the type of file being imported. Possible values are:\n\
								<ul>\n\
				<li><a href=\"#!/url=./si_om/siFileType.html#siFileTypeAction\">siFileTypeAction</a></li>\n\
				<li><a href=\"#!/url=./si_om/siFileType.html#siFileTypeCustom\">siFileTypeCustom</a></li>\n\
				<li><a href=\"#!/url=./si_om/siFileType.html#siFileTypedotXSI\">siFileTypedotXSI</a></li>\n\
				<li><a href=\"#!/url=./si_om/siFileType.html#siFileTypeIGES\">siFileTypeIGES</a></li>\n\
				<li><a href=\"#!/url=./si_om/siFileType.html#siFileTypeMatLib\">siFileTypeMatLib</a></li>\n\
				<li><a href=\"#!/url=./si_om/siFileType.html#siFileTypeMixer\">siFileTypeMixer</a></li>\n\
				<li><a href=\"#!/url=./si_om/siFileType.html#siFileTypeModel\">siFileTypeModel</a></li>\n\
			</ul>\n\
</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">Parent</td>\n\
			<td>The parent of the model created during import, empty if not specified.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">Reference</td>\n\
			<td>Specifies whether a reference model is being imported. Applies only when importing .emdl (siFileTypeModel), \n\
					.xsi (siFileTypedotXSI) files and custom files (siFileTypeCustom).</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">Name</td>\n\
			<td>The name of the reference model created during the import, if there is one. This field will be blank for dotXSI imported models.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"><a href=\"#!/url=./si_om/siEventID.html#siOnBeginFrame\">siOnBeginFrame</a><a name=\"ctxt_siOnBeginFrame\"></a><br /><br /><a href=\"#!/url=./si_om/siEventID.html#siOnEndFrame\">siOnEndFrame</a><a name=\"ctxt_siOnEndFrame\"></a><br /><br /><a href=\"#!/url=./si_om/siEventID.html#siOnBeginSequence\">siOnBeginSequence</a><a name=\"ctxt_siOnBeginSequence\"></a><br /><br /><a href=\"#!/url=./si_om/siEventID.html#siOnEndSequence\">siOnEndSequence</a><a name=\"ctxt_siOnEndSequence\"></a><br /><br /><a href=\"#!/url=./si_om/siEventID.html#siOnRenderAbort\">siOnRenderAbort</a><a name=\"ctxt_siOnRenderAbort\"></a></td>\n\
			<td class=\"example\">RenderType</td>\n\
			<td>A <a href=\"#!/url=./si_om/siRenderType.html\">siRenderType</a> value that specifies the type of render operation being performed:\n\
								<ul>\n\
				<li><a href=\"#!/url=./si_om/siRenderType.html#siRenderSequence\">siRenderSequence</a></li>\n\
				<li><a href=\"#!/url=./si_om/siRenderType.html#siRenderFramePreview\">siRenderFramePreview</a></li>\n\
				<li><a href=\"#!/url=./si_om/siRenderType.html#siRenderExportArchive\">siRenderExportArchive</a></li>\n\
			</ul>\n\
</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">FileName</td>\n\
			<td>List of file names being rendered.<br /><br />\n\
					The file names given are resolved from the file name template before being passed to the event handler.\n\
					The file name template is specified in the individual <a href=\"#!/url=./si_om/Framebuffer.html\">Framebuffer</a> object of each <a href=\"#!/url=./si_om/Pass.html\">Pass</a> property.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">Frame</td>\n\
			<td>The frame number of the frame being rendered.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">Sequence</td>\n\
			<td>Frame sequence number. The sequence number represents the number of frames rendered so far. \n\
					For example, if frames 20 to 30 are being rendered, then the sequence number for frame 20 is 1, and \n\
					the sequence number for frame 30 is 11.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">RenderField</td>\n\
			<td>\n\
						A <a href=\"#!/url=./si_om/siRenderFieldType.html\">siRenderFieldType</a> value that specifies whether field rendering is enabled:\n\
									<ul>\n\
				<li><a href=\"#!/url=./si_om/siRenderFieldType.html#siRenderFieldNone\">siRenderFieldNone</a></li>\n\
				<li><a href=\"#!/url=./si_om/siRenderFieldType.html#siRenderFieldOdd\">siRenderFieldOdd</a></li>\n\
				<li><a href=\"#!/url=./si_om/siRenderFieldType.html#siRenderFieldEven\">siRenderFieldEven</a></li>\n\
			</ul>\n\
</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">RenderError</td>\n\
			<td>						\n\
						A <a href=\"#!/url=./si_om/siRenderErrorType.html\">siRenderErrorType</a> value that specifies the type of render error:\n\
									<ul>\n\
				<li><a href=\"#!/url=./si_om/siRenderingErrorType.html#siRenderNoError\">siRenderNoError</a></li>\n\
				<li><a href=\"#!/url=./si_om/siRenderingErrorType.html#siRenderAbort\">siRenderAbort</a></li>\n\
				<li><a href=\"#!/url=./si_om/siRenderingErrorType.html#siRenderFailure\">siRenderFailure</a></li>\n\
			</ul>\n\
\n\
						Available with <a href=\"#!/url=./si_om/siEventID.html#siOnRenderAbort\">siOnRenderAbort</a> only.<br /><br /></td>\n\
</tr>\n\
		<tr>			<td class=\"name\"><a href=\"#!/url=./si_om/siEventID.html#siOnBeginRenderPass\">siOnBeginRenderPass</a><a name=\"ctxt_siOnBeginRenderPass\"></a><br /><br /><a href=\"#!/url=./si_om/siEventID.html#siOnEndRenderPass\">siOnEndRenderPass</a><a name=\"ctxt_siOnEndRenderPass\"></a></td>\n\
			<td class=\"example\">Pass</td>\n\
			<td>The pass object that is about to get rendered.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">Frames</td>\n\
			<td>An array of frames (times) that are about to get rendered.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"><a href=\"#!/url=./si_om/siEventID.html#siOnBeginPassChange\">siOnBeginPassChange</a><a name=\"ctxt_siOnBeginPassChange\"></a><br /><br /><a href=\"#!/url=./si_om/siEventID.html#siOnEndPassChange\">siOnEndPassChange</a><a name=\"ctxt_siOnEndPassChange\"></a></td>\n\
			<td class=\"example\">SourcePass</td>\n\
			<td>The name of the old pass to switch from.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">TargetPass</td>\n\
			<td>The name of the new pass to switch to.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"><a href=\"#!/url=./si_om/siEventID.html#siOnBeginSceneOpen\">siOnBeginSceneOpen</a><a name=\"ctxt_siOnBeginSceneOpen\"></a><br /><br /><a href=\"#!/url=./si_om/siEventID.html#siOnEndSceneOpen\">siOnEndSceneOpen</a><a name=\"ctxt_siOnEndSceneOpen\"></a><br /><br /><a href=\"#!/url=./si_om/siEventID.html#siOnBeginSceneSaveAs\">siOnBeginSceneSaveAs</a><a name=\"ctxt_siOnBeginSceneSaveAs\"></a><br /><br /><a href=\"#!/url=./si_om/siEventID.html#siOnEndSceneSaveAs\">siOnEndSceneSaveAs</a><a name=\"ctxt_siOnEndSceneSaveAs\"></a><br /><br /><a href=\"#!/url=./si_om/siEventID.html#siOnBeginSceneSave2\">siOnBeginSceneSave2</a><a name=\"ctxt_siOnBeginSceneSave2\"></a><br /><br /><a href=\"#!/url=./si_om/siEventID.html#siOnEndSceneSave2\">siOnEndSceneSave2</a><a name=\"ctxt_siOnEndSceneSave2\"></a><br /><br /><a href=\"#!/url=./si_om/siEventID.html#siOnBeginSceneSaveBackup\">siOnBeginSceneSaveBackup</a><a name=\"ctxt_siOnBeginSceneSaveBackup\"></a><br /><br /><a href=\"#!/url=./si_om/siEventID.html#siOnEndSceneSaveBackup\">siOnEndSceneSaveBackup</a><a name=\"ctxt_siOnEndSceneSaveBackup\"></a></td>\n\
			<td class=\"example\">FileName</td>\n\
			<td>Full path name of the scene.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"><a href=\"#!/url=./si_om/siEventID.html#siOnBeginScrubbing\">siOnBeginScrubbing</a><a name=\"ctxt_siOnBeginScrubbing\"></a><br /><br /><a href=\"#!/url=./si_om/siEventID.html#siOnEndScrubbing\">siOnEndScrubbing</a><a name=\"ctxt_siOnEndScrubbing\"></a></td>\n\
			<td class=\"example\">Objects</td>\n\
			<td>\n\
						An array of parameter object(s) being set.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">Value</td>\n\
			<td>\n\
						The parameter value to set. The siOnBeginScrubbing callback receives the current parameter(s) value and the siOnEndScrubbing callback receives the new parameter(s) value.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">Frame</td>\n\
			<td>\n\
						The frame number at which the parameter(s) is being set.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"><a href=\"#!/url=./si_om/siEventID.html#siOnChangeProject\">siOnChangeProject</a><a name=\"ctxt_siOnChangeProject\"></a></td>\n\
			<td class=\"example\">NewProjectPath</td>\n\
			<td>The newly activated project path.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">OldProjectPath</td>\n\
			<td>The path of the previously active project.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"><a href=\"#!/url=./si_om/siEventID.html#siOnConnectShader\">siOnConnectShader</a><a name=\"ctxt_siOnConnectShader\"></a><br /><br /><a href=\"#!/url=./si_om/siEventID.html#siOnDisconnectShader\">siOnDisconnectShader</a><a name=\"ctxt_siOnDisconnectShader\"></a></td>\n\
			<td class=\"example\">Source</td>\n\
			<td>\n\
						An output <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> object on a <a href=\"#!/url=./si_om/Shader.html\">Shader</a> that is being \n\
						connected to or disconnected from another shader object\'s input parameter.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">SourceProgID</td>\n\
			<td>A string id that was used to create the source shader object.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">Target</td>\n\
			<td>\n\
						An input <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> object on a <a href=\"#!/url=./si_om/Shader.html\">Shader</a> that is being \n\
						connected to or disconnected from another shader object\'s output parameter.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">TargetProgID</td>\n\
			<td>A string id that was used to create the target shader object.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"><a href=\"#!/url=./si_om/siEventID.html#siOnCreateShader\">siOnCreateShader</a><a name=\"ctxt_siOnCreateShader\"></a></td>\n\
			<td class=\"example\">Shader</td>\n\
			<td>\n\
						The <a href=\"#!/url=./si_om/Shader.html\">Shader</a> object that just got created.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">ProgID</td>\n\
			<td>A string id that was used to create the shader.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"><a href=\"#!/url=./si_om/siEventID.html#siOnCreateShaderDef\">siOnCreateShaderDef</a><a name=\"ctxt_siOnCreateShaderDef\"></a></td>\n\
			<td class=\"example\">ShaderDef</td>\n\
			<td>\n\
						The <a href=\"#!/url=./si_om/ShaderDef.html\">ShaderDef</a> object that just got created.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">ProgID</td>\n\
			<td>\n\
						A string id that uniquely identifies the shader definition. For more information, see\n\
						<a href=\"#!/url=./files/cus_shaders_ProgID.htm\">Instantiating Shader Definitions and the ProgID</a>.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"><a href=\"#!/url=./si_om/siEventID.html#siOnPreDefineShaderDef\">siOnPreDefineShaderDef</a><a name=\"ctxt_siOnPreDefineShaderDef\"></a></td>\n\
			<td class=\"example\">ShaderDef</td>\n\
			<td>\n\
						The <a href=\"#!/url=./si_om/ShaderDef.html\">ShaderDef</a> object that just got created.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">ProgID</td>\n\
			<td>\n\
						A string id that uniquely identifies the shader definition. For more information, see\n\
						<a href=\"#!/url=./files/cus_shaders_ProgID.htm\">Instantiating Shader Definitions and the ProgID</a>.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"><a href=\"#!/url=./si_om/siEventID.html#siOnPreParseShaderDef\">siOnPreParseShaderDef</a><a name=\"ctxt_siOnPreParseShaderDef\"></a></td>\n\
			<td class=\"example\">ShaderDef</td>\n\
			<td>\n\
						The <a href=\"#!/url=./si_om/ShaderDef.html\">ShaderDef</a> object that just got created.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">ProgID</td>\n\
			<td>\n\
						A string id that uniquely identifies the shader definition. For more information, see\n\
						<a href=\"#!/url=./files/cus_shaders_ProgID.htm\">Instantiating Shader Definitions and the ProgID</a>.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"><a href=\"#!/url=./si_om/siEventID.html#siOnCustomFileExport\">siOnCustomFileExport</a><a name=\"ctxt_siOnCustomFileExport\"></a></td>\n\
			<td class=\"example\">Target</td>\n\
			<td>The objects to be exported.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">FileName</td>\n\
			<td>The full path name of the custom exported file.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">FileType</td>\n\
			<td>An <a href=\"#!/url=./si_om/siFileType.html\">siFileType</a> value that specifies the type of file being exported.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">Frame</td>\n\
			<td>Frame at which to export the specified objects.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">UserData</td>\n\
			<td>\n\
						Any data that needs to be accessible to the custom converter export event callback. The data is set when exporting\n\
						with Crosswalk or when exporting attributes with the <a href=\"#!/url=./si_cmds/CacheObjectsIntoFile.html\">CacheObjectsIntoFile</a> command. In the context\n\
						of Crosswalk, the data is set with the name of the current Crosswalk custom property. With CacheObjectsIntoFile, the user \n\
						data is set with the <span style=\"font-family: courier, monospace;\">Attributes</span> argument (i.e. comma-separated list) that is passed in to the command.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"><a href=\"#!/url=./si_om/siEventID.html#siOnCustomFileImport\">siOnCustomFileImport</a><a name=\"ctxt_siOnCustomFileImport\"></a></td>\n\
			<td class=\"example\">Target</td>\n\
			<td>The parent of the content imported from the custom file.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">FileName</td>\n\
			<td>The full path name of the custom file to import.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">FileType</td>\n\
			<td>An <a href=\"#!/url=./si_om/siFileType.html\">siFileType</a> value that specifies the type of file being imported.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">Frame</td>\n\
			<td>Frame at which to import the contents of the custom file</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">UserData</td>\n\
			<td>\n\
						Any data that needs to be accessible to the custom converter import event callback. The data is set in the \n\
						context of Crosswalk with the name of the current Crosswalk custom property.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"><a href=\"#!/url=./si_om/siEventID.html#siOnCustomShaderExport\">siOnCustomShaderExport</a><a name=\"ctxt_siOnCustomShaderExport\"></a></td>\n\
			<td class=\"example\">Target</td>\n\
			<td>The objects to be exported.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">Filename</td>\n\
			<td>The full path name of the custom exported shader.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">Displayname</td>\n\
			<td>\n\
						Name of the shader definition as it appears in the Preset Manager. For more information, see \n\
						<a href=\"#!/url=./si_cmds/cus_shaders_PresetMgr.html\">Populating the Preset Manager</a>.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">Category</td>\n\
			<td>\n\
						Category in the Preset Manager for the shader definition. For more information, see \n\
						<a href=\"#!/url=./si_cmds/cus_shaders_PresetMgr.html\">Populating the Preset Manager</a>.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"><a href=\"#!/url=./si_om/siEventID.html#siOnDragAndDrop\">siOnDragAndDrop</a><a name=\"ctxt_siOnDragAndDrop\"></a></td>\n\
			<td class=\"example\">DragAndDropAction</td>\n\
			<td> A <a href=\"#!/url=./si_om/siDragAndDropAction.html\">siDragAndDropAction</a> value that specifies the type of action that needs to be processed by the callback:\n\
									<ul>\n\
				<li><a href=\"#!/url=./si_om/siDragAndDropAction.html#siSourceDragAction\">siSourceDragAction</a></li>\n\
				<li><a href=\"#!/url=./si_om/siDragAndDropAction.html#siSourceDropAction\">siSourceDropAction</a></li>\n\
			</ul>\n\
</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">DragSource</td>\n\
			<td> The source object that is being dragged / dropped.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">DragSourceID</td>\n\
			<td> A <a href=\"#!/url=./si_om/siVariantType.html\">siVariantType</a> value that specifies the identification of the source object that is being dragged / dropped. The only supported type is <span style=\"font-family: courier, monospace;\">siString</span> for now. </td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">DragSourceSupported</td>\n\
			<td> Output argument. When the <span style=\"font-family: courier, monospace;\">DragAndDropAction</span> parameter is equal to <a href=\"#!/url=./si_om/siDragAndDropAction.html#siSourceDragAction\">siSourceDragAction</a>, the callback should set this variable to true if the source is supported. False by default.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"><a href=\"#!/url=./si_om/siEventID.html#siOnDragAndDrop2\">siOnDragAndDrop2</a><a name=\"ctxt_siOnDragAndDrop2\"></a></td>\n\
			<td class=\"example\">DragAndDropAction</td>\n\
			<td> A <a href=\"#!/url=./si_om/siDragAndDropAction2.html\">siDragAndDropAction2</a> value that specifies the type of action that needs to be processed by the callback:\n\
									<ul>\n\
				<li><a href=\"#!/url=./si_om/siDragAndDropAction2.html#siDragOverAction\">siDragOverAction</a></li>\n\
				<li><a href=\"#!/url=./si_om/siDragAndDropAction2.html#siDropAction\">siDropAction</a></li>\n\
				<li><a href=\"#!/url=./si_om/siDragAndDropAction2.html#siDragEnterAction\">siDragEnterAction</a></li>\n\
				<li><a href=\"#!/url=./si_om/siDragAndDropAction2.html#siDragLeaveAction\">siDragLeaveAction</a></li>\n\
			</ul>\n\
</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">DragSourceObjects</td>\n\
			<td> Array of source objects being dragged. Can be an array of Softimage SDK objects or strings.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">DragTargetObjects</td>\n\
			<td> Array of targets over which the source is being dragged, consisting of Softimage SDK objects.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">DragTargetView</td>\n\
			<td>\n\
						The <a href=\"#!/url=./si_om/View.html\">View</a> in which the drag and drop 2 operation occurs.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">DragMouseCoordinates</td>\n\
			<td> Array (2 elements) representing the mouse coordinates (x,y) in the view client space.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">Drag3DCoordinates</td>\n\
			<td>\n\
						Array (3 elements) representing the 3D coordinates (x,y,z) with respect to the mouse position.\n\
						Only valid when the <span style=\"font-family: courier, monospace;\">DragTargetView</span> attribute object is a viewport.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">DragModifiers</td>\n\
			<td><a href=\"#!/url=./si_om/siDragModifiers.html\">siDragModifiers</a> flags specifying the combination of modifiers currently being applied:\n\
									<ul>\n\
				<li><a href=\"#!/url=./si_om/siDragModifiers.html#siDragModifierLButton\">siDragModifierLButton</a></li>\n\
				<li><a href=\"#!/url=./si_om/siDragModifiers.html#siDragModifierRButton\">siDragModifierRButton</a></li>\n\
				<li><a href=\"#!/url=./si_om/siDragModifiers.html#siDragModifierShift\">siDragModifierShift</a></li>\n\
				<li><a href=\"#!/url=./si_om/siDragModifiers.html#siDragModifierCtrl\">siDragModifierCtrl</a></li>\n\
				<li><a href=\"#!/url=./si_om/siDragModifiers.html#siDragModifierMButton\">siDragModifierMButton</a></li>\n\
				<li><a href=\"#!/url=./si_om/siDragModifiers.html#siDragModifierAlt\">siDragModifierAlt</a></li>\n\
			</ul>\n\
</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">DragSourceSupported</td>\n\
			<td>\n\
						Output argument. When the <span style=\"font-family: courier, monospace;\">DragAndDropAction</span> attribute is equal to\n\
						<a href=\"#!/url=./si_om/siDragAndDropAction.html#siDragOverAction\">siDragOverAction</a>, the callback should set this\n\
						output attribute to true if the source is supported. false is the value by default for\n\
						this output attribute. If true is returned under these circumstances, Softimage will\n\
						launch a siOnDragAndDrop2 event when the source is dropped\n\
						(with a <span style=\"font-family: courier, monospace;\">DragAndDropAction</span> equal to\n\
						<a href=\"#!/url=./si_om/siDragAndDropAction.html#siDropAction\">siDropAction</a>. If false is returned, then\n\
						Softimage will determine internally whether the siDropAction will be called or not.\n\
						In other words, returning false has the same effect as if no siDragAndDrop2 event was\n\
						connected. It is only possible to add support for new source / target combination with\n\
						this output attribute.\n\
						Note: The event callback code should return a consistent value for this attribute. In\n\
						other words, if a sources / targets pair yields a true DragSourceSupported return attribute\n\
						for a siOnDragOverAction call, it should also return true for the siDropAction call.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">DragDropEffect</td>\n\
			<td>\n\
						Output argument. When the <span style=\"font-family: courier, monospace;\">DragSourceSupported</span> attribute is equal to\n\
						true, this attribute will control the icon used for the mouse pointer. Possible values are:\n\
									<ul>\n\
				<li><a href=\"#!/url=./si_om/siDropEffect.html#siDropEffectCopy\">siDropEffectCopy</a></li>\n\
				<li><a href=\"#!/url=./si_om/siDropEffect.html#siDropEffectMove\">siDropEffectMove</a></li>\n\
				<li><a href=\"#!/url=./si_om/siDropEffect.html#siDropEffectLink\">siDropEffectLink</a></li>\n\
			</ul>\n\
</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"><a href=\"#!/url=./si_om/siEventID.html#siOnKeyUp\">siOnKeyUp</a><a name=\"ctxt_siOnKeyUp\"></a><br /><br /><a href=\"#!/url=./si_om/siEventID.html#siOnKeyDown\">siOnKeyDown</a><a name=\"ctxt_siOnKeyDown\"></a></td>\n\
			<td class=\"example\">KeyCode</td>\n\
			<td>The <a href=\"http://msdn.microsoft.com/library/default.asp?url=/library/en-us/winui/WinUI/WindowsUserInterface/UserInput/VirtualKeyCodes.asp\">virtual key code</a> \n\
					(in decimal) of the key that caused the event.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">ShiftMask</td>\n\
			<td>Specifies the state of the Shift, Alt, and Ctrl modifier keys when the key was pressed.<br /><br />ShiftMask \n\
					is an integer value that is the sum of the siKeyboardState values for the modifier keys pressed.<br /><br />For \n\
					example, if Shift+Ctrl+Alt is pressed, ShiftMask is equal to siShiftMask + siCtrlMask + siAltMask.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">Consumed</td>\n\
			<td>Specifies whether the event propagates up to Softimage.<br /><br />If an handler consumes the event, the event is \n\
					not passed on to Softimage. By default, events are not consumed.<br /><br />Set this attribute to true with \n\
					<a href=\"#!/url=./si_om/Context.SetAttribute.html\">Context.SetAttribute</a> if you don\'t want Softimage to process the key.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"><a name=\"ctxt_siOnNestedObjectsChange\"><object idref=\"siEventID#siOnNestedObjectsChange\"></object></a></td>\n\
			<td class=\"example\">Objects</td>\n\
			<td>Collection of <a href=\"#!/url=./si_om/SIObject.html\">SIObject</a> whose children or other nested objects may have changed since the last UI update.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"><a href=\"#!/url=./si_om/siEventID.html#siOnObjectAdded\">siOnObjectAdded</a><a name=\"ctxt_siOnObjectAdded\"></a></td>\n\
			<td class=\"example\">Objects</td>\n\
			<td>The list of objects that were added.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"><a href=\"#!/url=./si_om/siEventID.html#siOnObjectRemoved\">siOnObjectRemoved</a><a name=\"ctxt_siOnObjectRemoved\"></a></td>\n\
			<td class=\"example\">ObjectNames</td>\n\
			<td>The list containing the names of the removed objects.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"><a href=\"#!/url=./si_om/siEventID.html#siOnSelectionChange\">siOnSelectionChange</a><a name=\"ctxt_siOnSelectionChange\"></a></td>\n\
			<td class=\"example\">ChangeType</td>\n\
			<td>A <a href=\"#!/url=./si_om/siSelectionChangeType.html\">siSelectionChangeType</a> value that specifies how the selection list changed:\n\
								<ul>\n\
				<li><a href=\"#!/url=./si_om/siSelectionChangeType.html#siAddedToSelection\">siAddedToSelection</a> if one or more objects were added to the selection</li>\n\
				<li><a href=\"#!/url=./si_om/siSelectionChangeType.html#siRemovedFromSelection\">siRemovedFromSelection</a> if one or more objects were removed from the selection.</li>\n\
			</ul>\n\
</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"><a href=\"#!/url=./si_om/siEventID.html#siOnSourcePathChange\">siOnSourcePathChange</a><a name=\"ctxt_siOnSourcePathChange\"></a></td>\n\
			<td class=\"example\">FileName</td>\n\
			<td>Full path name of the source file. The event can change this path using <a href=\"#!/url=./si_om/Context.SetAttribute.html\">Context.SetAttribute</a> on the event\'s context. If you change the path, the source uses that path instead of the original path. All path validation proceeds as usual though.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">SourceType</td>\n\
			<td>A <a href=\"#!/url=./si_om/siSourcePathType.html\">siSourcePathType</a> value that specifies the type of source:\n\
								<ul>\n\
				<li><a href=\"#!/url=./si_om/siSourcePathType.html#siSourcePathImageSource\">siSourcePathImageSource</a></li>\n\
				<li><a href=\"#!/url=./si_om/siSourcePathType.html#siSourcePathWritableImageSource\">siSourcePathWritableImageSource</a></li>\n\
				<li><a href=\"#!/url=./si_om/siSourcePathType.html#siSourcePathModelSource\">siSourcePathModelSource</a></li>\n\
			</ul>\n\
</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"><a href=\"#!/url=./si_om/siEventID.html#siOnTimeChange\">siOnTimeChange</a><a name=\"ctxt_siOnTimeChange\"></a></td>\n\
			<td class=\"example\">Frame</td>\n\
			<td>Current frame number.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"><a name=\"ctxt_siOnTimeTransportChange\"><object idref=\"siEventID#siOnTimeTransportChange\"></object></a></td>\n\
			<td class=\"example\">TimeTransportName</td>\n\
			<td>String handle assign to instance of TimeTransport object. Used to determine if the time transport event came from this plug-in or another plug-in.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">CurrentState</td>\n\
			<td>Current state of time transport. This is a mask of the current states defined by the siTimeTransportState enumeration type.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">CurrentTime</td>\n\
			<td>Current time in seconds.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">TimeFormat</td>\n\
			<td>Time format used by time transport. PlayControl Enumerate type. Use CTime::ConvertFromPlayControlFormat(lFormat) to convert to CTime type.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">TimeFormatRate</td>\n\
			<td>Time format rate used by time transport only applicable for user defined time.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"><a href=\"#!/url=./si_om/siEventID.html#siOnValueChange\">siOnValueChange</a><a name=\"ctxt_siOnValueChange\"></a></td>\n\
			<td class=\"example\">Object</td>\n\
			<td>The object that was changed.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">FullName</td>\n\
			<td>The full name of the object that was changed.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"example\">PreviousValue</td>\n\
			<td>The value of the object before it was changed. 			<div class=\"tip\">\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td class=\"label\">Note</td>\n\
					<td class=\"emph\">This is only available for the <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> object type.</td>\n\
				</tr>\n\
			</table>\n\
			</div>\n\
</td>\n\
</tr>\n\
</table>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Return Value</h3>\n\
<div><p><a name=\"ReturnValue\"> </a>	<p><a href=\"#!/url=./files/Boolean.htm\">Boolean</a></p>\n\
	<p>\n\
				True to abort the operation that triggered the event, and False to continue. PerlScript and some versions of \n\
				Python (prior to 2.2.1) do not define the True and False keywords, so use 1 for True and 0 for False.\n\
			</p>\n\
	<p><span style=\"font-family: courier, monospace;\">CStatus::OK</span> to abort the operation, and <span style=\"font-family: courier, monospace;\">CStatus::False</span> (or any other CStatus \n\
				value except OK) to continue.\n\
			</p>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Examples</h3>\n\
<div><p><a name=\"Examples\"> </a><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"cplusplus\">// C++ code generated by the Event Wizard\n\
#include &lt;xsi_application.h&gt;\n\
#include &lt;xsi_context.h&gt;\n\
#include &lt;xsi_pluginregistrar.h&gt;\n\
#include &lt;xsi_status.h&gt;\n\
using namespace XSI; \n\
\n\
SICALLBACK XSILoadPlugin( PluginRegistrar&amp; in_reg )\n\
{\n\
 in_reg.PutAuthor(L\"sblair\");\n\
 in_reg.PutName(L\"NewEvent Plug-in\");\n\
 in_reg.PutEmail(L\"\");\n\
 in_reg.PutURL(L\"\");\n\
 in_reg.PutVersion(1,0);\n\
 in_reg.RegisterEvent(L\"siOnSelectionChangeEvent\",siOnSelectionChange);\n\
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
// Callback for the siOnSelectionChangeEvent event.\n\
\n\
SICALLBACK siOnSelectionChangeEvent_OnEvent( CRef&amp; in_ctxt )\n\
{\n\
 Context ctxt( in_ctxt );\n\
 Application().LogMessage(L\"siOnSelectionChangeEvent_OnEvent called\");\n\
\n\
 Application().LogMessage(L\"ChangeType: \" + CString(ctxt.GetAttribute(L\"ChangeType\")));\n\
\n\
//  TODO: Put your code here.\n\
\n\
//  Returns CStatus::False if you don\'t want to abort the event.\n\
 return CStatus::False;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>See Also</h3>\n\
<div><p><a name=\"SeeAlso\"> </a><ul>\n\
	<li><a href=\"#!/url=./si_cmds/callbacks.html\">Custom Display (View) Callbacks</a></li>\n\
</ul>\n\
</p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";