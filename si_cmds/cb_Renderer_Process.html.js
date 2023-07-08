var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Process</title>\n\
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
            <h1>Process</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Process</h2>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Description</h3>\n\
<div><p><a name=\"Description\"> </a>	<p>\n\
				Fired whenever the rendering engine is requested to perform a process (for example, render a frame). \n\
				For sequences, all the frames in a sequence will be called before switching to another render job \n\
				(although the render can be terminated before the sequence is done). This guarantees that the renderer \n\
				can recycle previous frame\'s data. \n\
			</p>\n\
	<p>\n\
				The Process callback uses the <a href=\"#!/url=./si_cpp/classXSI_1_1RendererContext.html\">RendererContext</a> \n\
				to retrieve the <a href=\"#!/url=./si_cpp/classXSI_1_1SceneRenderProperty.html\">renderer options property</a>, \n\
				get <a href=\"#!/url=./si_cpp/classXSI_1_1Framebuffer.html\">Framebuffer</a> information, and send tile data \n\
				back to the Render Manager.\n\
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
<td class=\"example\"><pre class=\"cplusplus\">CStatus &lt;renderer_name&gt;_Process( CRef&amp; in_context )\n\
{ \n\
	... \n\
}</pre></td></tr>\n\
</table>\n\
</div>	<p><span style=\"font-family: courier, monospace;\">&lt;renderer_name&gt;</span> is the name specified in the call to \n\
				<a href=\"#!/url=./si_cpp/classXSI_1_1PluginRegistrar.html#RegisterRenderer\">PluginRegistrar::RegisterRenderer</a>, \n\
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
			<td><a href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>&</td>\n\
			<td>A reference to the <a href=\"#!/url=./si_cpp/classXSI_1_1RendererContext.html\">RendererContext</a> object. \n\
					<a href=\"#!/url=./si_cpp/classXSI_1_1Context.html#GetSource\">Context::GetSource</a> \n\
					returns the <a href=\"#!/url=./si_cpp/classXSI_1_1Renderer.html\">Renderer</a>.</td>\n\
</tr>\n\
</table>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Context Attributes</h3>\n\
<div><p><a name=\"ContextAttributes\"> </a><a name=\"ContextAttributes_Renderers\"></a>	<table>		<tr>			<th>Attribute</th>\n\
			<th>Type</th>\n\
			<th>Description</th>\n\
</tr>\n\
		<tr>			<td class=\"example\">RenderID</td>\n\
			<td>unsigned int</td>\n\
			<td>\n\
						The unique identifier for this particular rendering job. Softimage creates a rendering\n\
						job whenever it needs a rendered output. So a single pass render is one render job,\n\
						each shaderball image is a render job, each render region is a separate render job, and\n\
						so forth.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">Process</td>\n\
			<td><a href=\"#!/url=./si_om/siRenderProcessType.html\">siRenderProcessType</a></td>\n\
			<td>\n\
						The process type requested by the render manager.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">RenderType</td>\n\
			<td><a href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a></td>\n\
			<td>\n\
						The current type of rendering being performed. For example <span style=\"font-family: courier, monospace;\">\"Pass\"</span>, \n\
						<span style=\"font-family: courier, monospace;\">\"Region\"</span> or <span style=\"font-family: courier, monospace;\">\"Shaderball\"</span>.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">Scene</td>\n\
			<td><a href=\"#!/url=./si_cpp/classXSI_1_1CRefArray.html\">CRefArray</a> of <a href=\"#!/url=./si_cpp/classXSI_1_1Model.html\">Model</a> objects</td>\n\
			<td>\n\
						A list of models that together make up the scene to render. When rendering the current scene, \n\
						this is simply the scene root model. When rendering shaderballs this can be a composite of the \n\
						hero object (for example, the apple) and the background object (for example, the checkerboard pattern).\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">ObjectList</td>\n\
			<td><a href=\"#!/url=./si_cpp/classXSI_1_1CRefArray.html\">CRefArray</a> of <a href=\"#!/url=./si_cpp/classXSI_1_1X3DObject.html\">X3DObject</a>s</td>\n\
			<td>\n\
						(Optional) A subset of objects to render from the scene root(s) given in the <span style=\"font-family: courier, monospace;\">\"Scene\"</span> \n\
						attribute. These objects override any currently selected object, including the <span style=\"font-family: courier, monospace;\">\"SelectionOnly\"</span> \n\
						only attribute. The <span style=\"font-family: courier, monospace;\">\"TrackSelection\"</span> attribute also changes its behaviour to enclose \n\
						the objects given in this list, rather than the current selection.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">DirtyList</td>\n\
			<td><a href=\"#!/url=./si_cpp/classXSI_1_1CRefArray.html\">CRefArray</a> of <a href=\"#!/url=./si_cpp/classXSI_1_1X3DObject.html\">X3DObject</a>s</td>\n\
			<td>\n\
						If defined, lists the objects that have been changed since this rendering engine got \n\
						called last. If the list is empty, then nothing has changed and the user has most likely\n\
						just requested a refresh of the render. If the attribute is not defined, then the whole\n\
						scene can be considered as dirty. Use \n\
						<a href=\"#!/url=./si_cpp/classXSI_1_1RendererContext.html#SetObjectClean\">RendererContext::SetObjectClean</a>\n\
						to selectively remove items from the dirty list so that they don\'t show up at the next render.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">Lights</td>\n\
			<td><a href=\"#!/url=./si_cpp/classXSI_1_1CRefArray.html\">CRefArray</a> of <a href=\"#!/url=./si_cpp/classXSI_1_1Light.html\">Light</a> objects</td>\n\
			<td>\n\
						The list of scene lights. This is more of a convenience list and saves the renderer having to traverse \n\
						the scene models to grab all the lights and check their visibility, etc..\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">Camera</td>\n\
			<td><a href=\"#!/url=./si_cpp/classXSI_1_1Primitive.html\">Primitive</a></td>\n\
			<td>\n\
						The viewing camera <a href=\"#!/url=./si_cpp/classXSI_1_1Primitive.html\">Primitive</a> for this render. Use \n\
						<a href=\"#!/url=./si_cpp/classXSI_1_1ProjectItem.html#GetParent3DObject\">ProjectItem::GetParent3DObject</a> \n\
						to get the owner <a href=\"#!/url=./si_cpp/classXSI_1_1X3DObject.html\">X3DObject</a> in order to access the kinematic state and \n\
						other properties of the camera.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">Material</td>\n\
			<td><a href=\"#!/url=./si_cpp/classXSI_1_1Material.html\">Material</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1Shader.html\">Shader</a></td>\n\
			<td>\n\
						The material or shader to use if an object\'s material has nothing connected to it. This is used for \n\
						shaderball previews only. \n\
						\n\
									<div class=\"tip\">\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td class=\"label\">Warning</td>\n\
					<td class=\"emph\">This attribute is not provided for region and pass rendering.</td>\n\
				</tr>\n\
			</table>\n\
			</div>\n\
</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">ImageWidth</td>\n\
			<td>unsigned int</td>\n\
			<td>\n\
						The width of the image output in pixels.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">ImageHeight</td>\n\
			<td>unsigned int</td>\n\
			<td>\n\
						The height of the image output in pixels.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">CropLeft</td>\n\
			<td>unsigned int</td>\n\
			<td>\n\
						The left offset of the crop rectangle.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">CropBottom</td>\n\
			<td>unsigned int</td>\n\
			<td>\n\
						The bottom offset of the crop rectangle.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">CropWidth</td>\n\
			<td>unsigned int</td>\n\
			<td>\n\
							The width of the crop rectangle.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">CropHeight</td>\n\
			<td>unsigned int</td>\n\
			<td>\n\
						The height of the crop rectangle.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">SelectionOnly</td>\n\
			<td>bool</td>\n\
			<td>\n\
						Only render objects that are selected.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">TrackSelection</td>\n\
			<td>bool</td>\n\
			<td>\n\
						Automatically adjust the crop window to fit the object selection (in screen space). \n\
						In this case the specified crop values should be ignored.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">MotionBlur</td>\n\
			<td>bool</td>\n\
			<td>\n\
						Motion blur enabled.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">ShutterSpeed</td>\n\
			<td>double</td>\n\
			<td>\n\
						Shutter open time in frames.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">ShutterOffset</td>\n\
			<td>double</td>\n\
			<td>\n\
						Shutter offset in frames.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">ShutterType</td>\n\
			<td><a href=\"#!/url=./si_om/siRenderShutterType.html\">siRenderShutterType</a></td>\n\
			<td>\n\
						The three shutter types (center, end on frame and start on frame).\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">MotionBlurDeformation</td>\n\
			<td>bool</td>\n\
			<td>\n\
						Motion blur affect deformations and not only transforms.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">FileOutput</td>\n\
			<td>bool</td>\n\
			<td>\n\
						Images should be written to disk, otherwise only send fragments.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">SkipExistingFiles</td>\n\
			<td>bool</td>\n\
			<td>\n\
						Skip existing files, if they\'re deemed rendered already. Locking must be done in order \n\
						for two machines not to overwrite each others\' files.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">FieldRender</td>\n\
			<td>bool</td>\n\
			<td>\n\
						Field rendering enabled.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">FieldInterleave</td>\n\
			<td><a href=\"#!/url=./si_om/siRenderFieldType.html\">siRenderFieldType</a></td>\n\
			<td>\n\
						Field interleave type ( none, Even/NTSC, Odd/PAL).\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">ArchiveFileName</td>\n\
			<td><a href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a></td>\n\
			<td>\n\
						The current frame\'s archive filename to use. For multi-frame archives, \n\
						this will be the same filename for all the frames in the sequence. \n\
						\n\
									<div class=\"tip\">\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td class=\"label\">Note</td>\n\
					<td class=\"emph\">This attribute and the next one are only set if the process \n\
						type is <a href=\"#!/url=./si_om/siRenderProcessType.html#siRenderProcessExportArchive\">siRenderProcessExportArchive</a> or \n\
						<a href=\"#!/url=./si_om/siRenderProcessType.html#siRenderProcessExportObjectArchive\">siRenderProcessExportObjectArchive</a>.</td>\n\
				</tr>\n\
			</table>\n\
			</div>\n\
</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">ArchiveMultiFrame</td>\n\
			<td>bool</td>\n\
			<td>\n\
						Embed all frames into a single archive file.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">ArchiveDisplayProxies</td>\n\
			<td>bool</td>\n\
			<td>\n\
						The render engine should generate a set of three images for each\n\
						exported frame. The images are used to show a cardboard-style\n\
						representation of the object archive contents in the viewport.\n\
						The three images are generated as projected on the XY, XZ, and YZ\n\
						axis planes, looking down the -Z, -Y, and -X axes, respectively, in\n\
						orthographic camera mode. The camera should also be placed be \n\
						outside the bounding box in order to capture all the geometry.\n\
									<div class=\"tip\">\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td class=\"label\">Note</td>\n\
					<td class=\"emph\">\n\
							This attribute is only set if the process type is \n\
							<a href=\"#!/url=./si_om/siRenderProcessType.html#siRenderProcessExportObjectArchive\">siRenderProcessExportObjectArchive</a>.\n\
						</td>\n\
				</tr>\n\
			</table>\n\
			</div>\n\
</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">RenderMapList</td>\n\
			<td><a href=\"#!/url=./si_cpp/classXSI_1_1CRefArray.html\">CRefArray</a> of <a href=\"#!/url=./si_cpp/classXSI_1_1Property.html\">Property</a> objects</td>\n\
			<td>\n\
						The list of RenderMap properties to generate coming from the <a href=\"#!/url=./si_cmds/RegenerateMaps.html\">RegenerateMaps</a> command.\n\
									<div class=\"tip\">\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td class=\"label\">Note</td>\n\
					<td class=\"emph\">\n\
							This attribute is only set if the process type is\n\
							<a href=\"#!/url=./si_om/siRenderProcessType.html#siRenderProcessRenderMap\">siRenderProcessRenderMap</a>.\n\
						</td>\n\
				</tr>\n\
			</table>\n\
			</div>\n\
</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">RenderMapTileSize</td>\n\
			<td>unsigned int</td>\n\
			<td>\n\
						The tile size coming from the <a href=\"#!/url=./si_cmds/RegenerateMaps.html\">RegenerateMaps</a> command.\n\
									<div class=\"tip\">\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td class=\"label\">Note</td>\n\
					<td class=\"emph\">\n\
							This attribute is only set if the process type is\n\
							<a href=\"#!/url=./si_om/siRenderProcessType.html#siRenderProcessRenderMap\">siRenderProcessRenderMap</a>.\n\
						</td>\n\
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
<div><p><a name=\"ReturnValue\"> </a>	<p><a href=\"#!/url=./files/CStatus.htm\">CStatus</a></p>\n\
	<p>\n\
				The Process callback should return a status code depending upon whether the render succeeded, \n\
				was aborted or there was an internal failure.\n\
			</p>\n\
	<table>		<tr>			<th>Status</th>\n\
			<th>Description</th>\n\
</tr>\n\
		<tr>			<td class=\"example\"><a href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#OK\">CStatus::OK</a></td>\n\
			<td>\n\
						Render completed successfully, in other words, all requested data was successfully written \n\
						out or passed back to Softimage.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"example\"><a href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#Abort\">CStatus::Abort</a></td>\n\
			<td>\n\
						This can only be returned if the Process callback is responding to a call to the \n\
						<a href=\"#!/url=./si_cmds/cb_Renderer_Abort.html\">Abort</a> callback. It should not be returned \n\
						under any other circumstances.\n\
					</td>\n\
</tr>\n\
		<tr>			<td class=\"example\"><a href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#Fail\">CStatus::Fail</a></td>\n\
			<td>\n\
						Non-fatal error condition was encountered, such as missing textures, abort request from an event (from the \n\
						<a href=\"#!/url=./si_cpp/classXSI_1_1RendererContext.html#TriggerEvent\">RendererContext::TriggerEvent</a> call), etc. \n\
						In this case one-shot render operations such as pass renders or exports are canceled. Continuous \n\
						render operations (such as render region or shaderballs) simply stop updating until refreshed.\n\
					</td>\n\
</tr>\n\
		<tr>			<td>(any other failure code)</td>\n\
			<td>\n\
						Renderer encountered a catastrophic failure. At this point the whole render job is \n\
						canceled. If the job was created by the region, the region will close automatically. \n\
						If the failure happened to a shaderball, that shaderball stops updating.\n\
					</td>\n\
</tr>\n\
</table>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Examples</h3>\n\
<div><p><a name=\"Examples\"> </a><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"cplusplus\">//\n\
// Example rendering engine\n\
//\n\
\n\
// There is only ever *one* instance of this plug-in running so global variables\n\
// are \"ok\".\n\
\n\
#include &lt;xsi_application.h&gt;\n\
#include &lt;xsi_camera.h&gt;\n\
#include &lt;xsi_context.h&gt;\n\
#include &lt;xsi_decl.h&gt;\n\
#include &lt;xsi_longarray.h&gt;\n\
#include &lt;xsi_math.h&gt;\n\
#include &lt;xsi_pluginregistrar.h&gt;\n\
#include &lt;xsi_renderer.h&gt;\n\
#include &lt;xsi_renderercontext.h&gt;\n\
#include &lt;xsi_customproperty.h&gt;\n\
#include &lt;xsi_ppglayout.h&gt;\n\
#include &lt;xsi_pass.h&gt;\n\
#include &lt;xsi_project.h&gt;\n\
#include &lt;xsi_scene.h&gt;\n\
#include &lt;xsi_passcontainer.h&gt;\n\
#include &lt;xsi_primitive.h&gt;\n\
#include &lt;xsi_x3dobject.h&gt;\n\
\n\
#define WIN32_LEAN_AND_MEAN\n\
#include &lt;windows.h&gt;\n\
\n\
using namespace XSI; \n\
\n\
SICALLBACK XSILoadPlugin( PluginRegistrar&amp; in_reg )\n\
{\n\
	in_reg.PutAuthor(L\"Softimage\");\n\
	in_reg.PutName(L\"Color Renderer\");\n\
	in_reg.PutEmail(L\"support@softimage.com\");\n\
	in_reg.PutURL(L\"http://www.softimage.com\");\n\
	in_reg.PutVersion(1,0);\n\
	in_reg.RegisterProperty( L\"Color Renderer Options\" );\n\
	in_reg.RegisterRenderer( L\"Color Renderer\" );\n\
\n\
	return CStatus::OK;\n\
}\n\
\n\
////////////////////////////////////////////////////////////////////////////////\n\
// Rendering Engine Section\n\
\n\
/*! Abort handling.\n\
*/\n\
static bool				g_bAborted;\n\
HANDLE					g_hAbort;\n\
CRITICAL_SECTION		g_barrierAbort;\n\
\n\
void setAbort( bool in_bAbort )\n\
{\n\
	::EnterCriticalSection( &amp;g_barrierAbort );\n\
	g_bAborted = in_bAbort;\n\
	if( in_bAbort )\n\
		::SetEvent( g_hAbort );\n\
	else\n\
		::ResetEvent( g_hAbort );\n\
	::LeaveCriticalSection( &amp;g_barrierAbort );\n\
}\n\
\n\
bool isAborted( )\n\
{\n\
	bool		bAbort;\n\
	::EnterCriticalSection( &amp;g_barrierAbort );\n\
	bAbort= g_bAborted;\n\
	::LeaveCriticalSection( &amp;g_barrierAbort );\n\
\n\
	return( bAbort );\n\
}\n\
\n\
\n\
/*! Initialization function for the renderer, called when the\n\
	plug-in is loaded.\n\
\n\
	This is where the rendering engine tells the environment what \n\
	process types it can perform (render, export archives etc.), \n\
	which property to use for its options and which output formats \n\
	it supports (and how those formats are defined).\n\
\n\
	The renderer can perform any other one-time initialization here also.\n\
*/\n\
SICALLBACK ColorRenderer_Init( CRef &amp;in_ctxt )\n\
{\n\
	Context		ctxt( in_ctxt );\n\
	Renderer	renderer = ctxt.GetSource();\n\
\n\
	// Tell the render manager what render processes we support.\n\
	CLongArray	process;\n\
	process.Add( siRenderProcessRender );\n\
	renderer.PutProcessTypes( process );\n\
\n\
	// Specify the custom property to use for the renderer options\n\
	renderer.AddProperty( siRenderPropertyOptions, L\"Color Renderer.Color Renderer Options\" );\n\
\n\
	// Add the Softimage PIC format as an output format.\n\
	renderer.AddOutputImageFormat( L\"Softimage PIC\", L\"pic\" );\n\
	renderer.AddOutputImageFormatSubType( siRenderChannelColorType, L\"RGBA\", siImageBitDepthInteger8 );\n\
\n\
	// And some arbitrary image format.\n\
	renderer.AddOutputImageFormat( L\"Foo Format\", L\"foo\" );\n\
	renderer.AddOutputImageFormatSubType( siRenderChannelColorType, L\"RGBA\", siImageBitDepthInteger8 );\n\
	renderer.AddOutputImageFormatSubType( siRenderChannelColorType, L\"RGBA\", siImageBitDepthInteger16 );\n\
	renderer.AddOutputImageFormatSubType( siRenderChannelColorType, L\"RGB\", siImageBitDepthInteger8 );\n\
	renderer.AddOutputImageFormatSubType( siRenderChannelGrayscaleType, L\"Gray\", siImageBitDepthInteger16 );\n\
\n\
	// Create the handles for a thread-safe abort\n\
	g_bAborted = false;\n\
	::InitializeCriticalSection( &amp;g_barrierAbort );\n\
	g_hAbort = ::CreateEvent( NULL, FALSE, FALSE, NULL );\n\
	\n\
	return( CStatus::OK );\n\
}\n\
\n\
\n\
/*! This is called when the plug-in is unloaded.\n\
	The rendering engine should shut down completely and clean \n\
	out any global data. Any rendering jobs using this engine\n\
	have already been terminated at this point.\n\
*/\n\
SICALLBACK ColorRenderer_Term( CRef &amp;in_ctxt )\n\
{\n\
	::DeleteObject( g_hAbort );\n\
	::DeleteCriticalSection( &amp;g_barrierAbort );\n\
\n\
	g_hAbort = NULL;\n\
	::ZeroMemory( &amp;g_barrierAbort, sizeof( g_barrierAbort ) );\n\
\n\
	return( CStatus::OK );\n\
}\n\
\n\
class MyFragment : public RendererImageFragment\n\
{\n\
public:\n\
	MyFragment( \n\
		unsigned int in_offX, unsigned int in_offY, unsigned int in_width, unsigned int in_height, \n\
		double in_color[ 4 ] )\n\
	{\n\
		offX = in_offX;\n\
		offY = in_offY;\n\
		width = in_width;\n\
		height = in_height;\n\
\n\
		unsigned int		r, g, b, a;\n\
\n\
		r = (unsigned int)( in_color[ 0 ] * 255.0 );\n\
		g = (unsigned int)( in_color[ 1 ] * 255.0 );\n\
		b = (unsigned int)( in_color[ 2 ] * 255.0 );\n\
		a = (unsigned int)( in_color[ 3 ] * 255.0 );\n\
\n\
		color = ( a &lt;&lt; 24 ) | ( b &lt;&lt; 16 ) | ( g &lt;&lt; 8 ) | ( r );\n\
	}\n\
\n\
	unsigned int GetOffsetX( ) const { return( offX ); }\n\
	unsigned int GetOffsetY( ) const { return( offY ); }\n\
	unsigned int GetWidth( ) const { return( width ); }\n\
	unsigned int GetHeight( ) const { return( height ); }\n\
	bool GetScanlineRGBA( unsigned int in_uiRow, siImageBitDepth in_eBitDepth, unsigned char *out_pScanline ) const\n\
	{\n\
		unsigned int		*pScanline = (unsigned int *)out_pScanline;\n\
		for( unsigned int i = 0; i &lt; width; i++ )\n\
			pScanline[ i ] = color;\n\
\n\
		return( true );\n\
	}\n\
\n\
private:\n\
	unsigned int	offX, offY, width, height;\n\
	unsigned int	color;\n\
};\n\
\n\
/*! This is the main function that gets called by the render manager\n\
	whenever the rendering engine is requested to perform a process\n\
	(render a frame, export an archive, etc.).\n\
\n\
	It is called with a specialized Context object, called RendererContext.\n\
	The RendererContext allows to retrieving the renderer options property,\n\
	getting framebuffer information and sending tile data back to the render \n\
	manager.\n\
*/\n\
SICALLBACK ColorRenderer_Process( CRef &amp;in_ctxt )\n\
{\n\
	setAbort( false );\n\
\n\
	RendererContext	ctxt( in_ctxt );\n\
	Renderer		renderer = ctxt.GetSource();\n\
\n\
	// The LockSceneData method *must* be called before accessing any potential\n\
	// scene data. This is to ensure that multiple threads do not concurrently access\n\
	// and/or modify the scene data. It is also important that the renderer does *not*\n\
	// modify any scene data at all. It can modify its own private data but nothing\n\
	// that is a part of the scene or the current application state, unless explicitly\n\
	// allowed.\n\
	if( renderer.LockSceneData() != CStatus::OK )\n\
		return( CStatus::Abort );\n\
\n\
	Primitive			camera_prim = ctxt.GetAttribute( L\"Camera\" );\n\
	X3DObject			camera_obj	= camera_prim.GetOwners( )[ 0 ];\n\
	Camera				camera		= camera_obj;\n\
	CString				camera_name	= camera_obj.GetName();\n\
	const wchar_t		*wcsCameraName = camera_name.GetWideString();\n\
\n\
	// Get the size of the image to render (in pixels). The origin is defiend as the\n\
	// bottom-left corner of the image.\n\
	unsigned int		width, height;\n\
	width = (ULONG)ctxt.GetAttribute( L\"ImageWidth\" );\n\
	height = (ULONG)ctxt.GetAttribute( L\"ImageHeight\" );\n\
\n\
	// Check if there is a crop area defined. If the offset is 0,0 and the crop \n\
	// width/height is the same as the image width/height, then no cropping should take\n\
	// place. The crop window is always fully inside of the rendered image.\n\
	unsigned int		cropOffsetX, cropOffsetY;\n\
	unsigned int		cropWidth, cropHeight;\n\
\n\
	cropOffsetX = (ULONG)ctxt.GetAttribute( L\"CropLeft\" );\n\
	cropOffsetY = (ULONG)ctxt.GetAttribute( L\"CropBottom\" );\n\
	cropWidth = (ULONG)ctxt.GetAttribute( L\"CropWidth\" );\n\
	cropHeight = (ULONG)ctxt.GetAttribute( L\"CropHeight\" );\n\
\n\
	// Get our render property evaluated at the correct time. If rendering fields, any \n\
	// parameter that is animated, needs to be evaluated at the half-frame in between the\n\
	// current frame and the next frame after. Same goes potentially for motion blur, unless\n\
	// the renderer is incapable of interpolating the data, in which case it should use\n\
	// the current frame as a base.\n\
	CTime		evalTime = ctxt.GetTime();\n\
\n\
	Property	myProp = ctxt.GetRendererProperty( evalTime );\n\
\n\
	double			color[ 4 ];\n\
	\n\
	color[ 0 ] = myProp.GetParameterValue( L\"Color_R\", evalTime );\n\
	color[ 1 ] = myProp.GetParameterValue( L\"Color_G\", evalTime );\n\
	color[ 2 ] = myProp.GetParameterValue( L\"Color_B\", evalTime );\n\
	color[ 3 ] = myProp.GetParameterValue( L\"Color_A\", evalTime );\n\
\n\
	// Unlock the scene data *before* we start rendering and sending tile data back.\n\
	renderer.UnlockSceneData();\n\
	\n\
	// Check after the scene data has been evaluted whether the abort flag is set.\n\
	if( isAborted() )\n\
		return( CStatus::Abort );\n\
\n\
	// Notify the renderer manager that a new frame is about to begin. This is necessary so\n\
	// that any recipient tile sink can re-adjust its own size to accommodate.\n\
	ctxt.NewFrame( width, height );\n\
\n\
	unsigned int	 tileSize = 32;\n\
\n\
	for( unsigned y = 0; y &lt;= ( cropHeight / tileSize ); y++ )\n\
	{\n\
		for( unsigned x = 0; x &lt;= ( cropWidth / tileSize ); x++ )\n\
		{\n\
			unsigned int		ox, oy, sx, sy;\n\
\n\
			ox = x * tileSize;\n\
			oy = y * tileSize;\n\
			sx = tileSize;\n\
			sy = tileSize;\n\
\n\
			if( ( ox + tileSize ) &gt; cropWidth )\n\
				sx = width - ox;\n\
			else\n\
				sx = tileSize;\n\
\n\
			if( ( oy + tileSize ) &gt; cropHeight )\n\
				sy = height - oy;\n\
			else\n\
				sy = tileSize;\n\
\n\
			MyFragment		fragment( \n\
				ox + cropOffsetX, oy + cropOffsetY, sx, sy, color );\n\
\n\
			// Send back a new tile.\n\
			ctxt.NewFragment( fragment );\n\
\n\
			DWORD		dwResult = ::WaitForSingleObject( g_hAbort, 40 );\n\
			if( dwResult != WAIT_TIMEOUT )\n\
				return( CStatus::Abort );\n\
		}\n\
	}\n\
\n\
	return( CStatus::OK );\n\
}\n\
\n\
/*! Called by the render manager when the renderer should do a full \n\
	cleanup of any data that got created by the Process function. \n\
	This is usually called when the current scene is being destroyed,\n\
	or if the specific render process (region, pass render, export)\n\
	requests that data be cleaned up after the process has completed.\n\
*/\n\
SICALLBACK ColorRenderer_Cleanup( CRef &amp;in_ctxt )\n\
{\n\
	Context		ctxt( in_ctxt );\n\
	Renderer	renderer = ctxt.GetSource();\n\
	\n\
	return( CStatus::OK );\n\
}\n\
\n\
\n\
/*! Called when the render needs to be aborted. The function should\n\
	trigger an abort and return as quickly as possible. It should\n\
	*not* refer to any scene data and not perform any processing\n\
	besides triggering the abort. It is up to the Process function\n\
	to ensure a clean abort is done upon the receipt of an abort\n\
	signal.\n\
*/\n\
SICALLBACK ColorRenderer_Abort( CRef &amp;in_ctxt )\n\
{\n\
	Context		ctxt( in_ctxt );\n\
	Renderer	renderer = ctxt.GetSource();\n\
\n\
	setAbort( true );\n\
\n\
	return( CStatus::OK );\n\
}\n\
\n\
\n\
/*! This function serves two purposes: To return the current \"quality\"\n\
	level of the render options and to set a preset for the given\n\
	\"quality\" level. The calculated quality level should be simply\n\
	the value that corresponds to the closest match to a level\n\
	preset.\n\
	\\note This mechanism might be aborted shortly and replaced by\n\
		something else that gets handled by Softimage directly.\n\
*/\n\
SICALLBACK ColorRenderer_Quality( CRef &amp;in_ctxt )\n\
{\n\
	Context		ctxt( in_ctxt );\n\
	Renderer	renderer = ctxt.GetSource();\n\
\n\
	CValue		quality = ctxt.GetAttribute( L\"Quality\" );\n\
	Property	prop = ctxt.GetAttribute( L\"Property\" );\n\
\n\
	static const double levels[ 5 ][ 4 ] = {\n\
		{ 1.0, 0.0, 0.0, 1.0 },\n\
		{ 0.0, 1.0, 0.0, 1.0 },\n\
		{ 1.0, 0.0, 1.0, 1.0 },\n\
		{ 1.0, 0.5, 0.5, 1.0 },\n\
		{ 0.7, 0.4, 0.3, 0.5 },\n\
	};\n\
\n\
	if( quality.IsEmpty() )\n\
	{\n\
		double	color[ 4 ];\n\
		int		closest = -1;\n\
		double	maxclose = DBL_MAX;\n\
\n\
		color[ 0 ] = prop.GetParameterValue( L\"Color_R\", CTime() );\n\
		color[ 1 ] = prop.GetParameterValue( L\"Color_G\", CTime() );\n\
		color[ 2 ] = prop.GetParameterValue( L\"Color_B\", CTime() );\n\
		color[ 3 ] = prop.GetParameterValue( L\"Color_A\", CTime() );\n\
\n\
		// We\'re being asked for the quality value (0-4).\n\
		// Find the closest color match.\n\
		for( int i = 0; i &lt; 5; i++ )\n\
		{\n\
			double		close;\n\
			double		dist = 0.0;\n\
\n\
			for( int j = 0; j &lt; 4; j++ )\n\
			{\n\
				dist += ( color[ j ] - levels[ i ][ j ] ) * ( color[ j ] - levels[ i ][ j ] );\n\
			}\n\
			close = sqrt( dist );\n\
			if( close &lt; maxclose )\n\
			{\n\
				maxclose = close;\n\
				closest = i;\n\
			}\n\
		}\n\
\n\
		ctxt.PutAttribute( L\"Quality\", closest );\n\
	}\n\
	else\n\
	{\n\
		// Set a quality value based on the five levels (0-4).\n\
		prop.PutParameterValue( L\"Color_R\", levels[ (ULONG)quality ][ 0 ] );\n\
		prop.PutParameterValue( L\"Color_G\", levels[ (ULONG)quality ][ 1 ] );\n\
		prop.PutParameterValue( L\"Color_B\", levels[ (ULONG)quality ][ 2 ] );\n\
		prop.PutParameterValue( L\"Color_A\", levels[ (ULONG)quality ][ 3 ] );\n\
	}\n\
\n\
	return( CStatus::OK );\n\
}\n\
\n\
\n\
////////////////////////////////////////////////////////////////////////////////\n\
// Renderer Options Property\n\
\n\
SICALLBACK ColorRendererOptions_Define( CRef&amp; in_ctxt )\n\
{\n\
	Context ctxt( in_ctxt );\n\
	CustomProperty oCustomProperty;\n\
	Parameter oParam;\n\
	oCustomProperty = ctxt.GetSource();\n\
	oCustomProperty.AddParameter(L\"Color_R\",CValue::siDouble,siPersistable,L\"\",L\"\",0l,0l,1l,0l,1l,oParam);\n\
	oCustomProperty.AddParameter(L\"Color_G\",CValue::siDouble,siPersistable,L\"\",L\"\",0l,0l,1l,0l,1l,oParam);\n\
	oCustomProperty.AddParameter(L\"Color_B\",CValue::siDouble,siPersistable,L\"\",L\"\",0l,0l,1l,0l,1l,oParam);\n\
	oCustomProperty.AddParameter(L\"Color_A\",CValue::siDouble,siPersistable,L\"\",L\"\",0l,0l,1l,0l,1l,oParam);\n\
	return CStatus::OK;\n\
}\n\
\n\
SICALLBACK ColorRendererOptions_DefineLayout( CRef&amp; in_ctxt )\n\
{\n\
	Context ctxt( in_ctxt );\n\
	PPGLayout oLayout;\n\
	PPGItem oItem;\n\
	oLayout = ctxt.GetSource();\n\
	oLayout.Clear();\n\
	oLayout.AddColor(L\"Color_R\",L\"Color\",true);\n\
	return CStatus::OK;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>See Also</h3>\n\
<div><p><a name=\"SeeAlso\"> </a><ul>\n\
	<li><a href=\"#!/url=./si_cmds/cb_Renderer_Init.html\">Init (Renderer)</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_Renderer_Abort.html\">Abort</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_Renderer_Quality.html\">Quality</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_Renderer_Query.html\">Query</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_Renderer_Cleanup.html\">Cleanup</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/callbacks.html\">Renderer Callbacks</a></li>\n\
</ul>\n\
</p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";