var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../../../../../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ShowEdges</title>\n\
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
</style><script>$(document).ready(function() { yepnope.injectJs(\"./examples/Addons/scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./examples/Addons/scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>ShowEdges</h1>\n\
         </div>\n\
\n\
<div class=\"body\"><a name=\"top\"></a>\n\
\n\
\n\
\n\
<img class=\"netview\" src=\"netview_ShowEdges.jpg\" style=\"float:left;padding-right:6px;\" />\n\
<h1>Show Edges and Wireframe</h1>\n\
\n\
<p>\n\
This example includes two related examples:\n\
</p>\n\
<ul style=\"margin-top:16px\">\n\
<li>\n\
<b>ShowEdges</b> is a basic mental ray shader that draws a thick border along the edges of a polygon mesh. ShowEdges renders the triangulated version of the mesh that is sent to mental ray.\n\
</li>\n\
\n\
<li><p><b>Wireframe</b> also draws edges, but it shows the true edges (before tesselation). Wireframe uses a UserDataBlob to pass edge information to a shader (which shows how to map Softimage user data into mental ray user data). A custom operator populates the UserDataBlob with the edge information. An operator is used rather than a custom command because whenever the geometry changes, Softimage re-evaluates the operator and re-renders the object.\n\
The operater and the shader are contained in the same DLL/SO, and this file is located in the Application\\Plugins directory instead of the conventional shader directory (Application\\bin\\{CPU}) so\n\
that Softimage automatically loads it as a self-installed plugin.  This approach is convenient for implementing both a shader and an operator together in an single dll, but it means that\n\
the normal ability to have multiple platform binaries on a single workgroup would not work.  To support that configuration the example would be implemented as two separate dlls.\n\
</p>\n\
\n\
</li>\n\
</ul>\n\
\n\
<p>\n\
The difference between Wireframe and ShowEdges is illustrated in the figure below, which shows how the two examples render the same mesh.\n\
</p>\n\
\n\
<p style=\"margin-bottom:0px;font-size:10px\">Comparison of Wireframe and ShowEdges</p>\n\
<img src=\"Compare.png\" />\n\
\n\
\n\
\n\
<h2>Example Files</h2>\n\
<table><tr>\n\
<td><strong>Location</strong></td><td><span class=\"installPath\"></span>\n\
</td>\n\
</tr>\n\
\n\
<tr>\n\
<td><strong>ShowEdges</strong></td>\n\
<td>\n\
	<div class=\"examplefile\">show_edges.spdl</div>\n\
	<div class=\"examplefile\" folder=\"cppsrc_ShowEdges\">show_edges.cpp</div>\n\
	<div class=\"examplefile\" folder=\"cppsrc_ShowEdges\">show_edges.h</div>\n\
	<div class=\"examplefile\" folder=\"cppsrc_ShowEdges\">show_edges_dll.cpp</div>\n\
	<div class=\"examplefile\" folder=\"cppsrc_ShowEdges\">show_edges.vcproj</div>\n\
	<div class=\"examplefile\" folder=\"cppsrc_ShowEdges\">GNUmakefile</div>\n\
</td>\n\
</tr>\n\
\n\
<tr>\n\
<td><strong>WireFrame Files</strong></td>\n\
<td>\n\
	<div class=\"examplefile\" folder=\"cppsrc_WireFrame\">WireframeOp.cpp</div>\n\
	<div class=\"examplefile\" folder=\"cppsrc_WireFrame\">WireframeShader.cpp</div>\n\
	<div class=\"examplefile\">WireframeShader.spdl</div>\n\
	<div class=\"examplefile\" folder=\"cppsrc_WireFrame\">Wireframe.vcproj</div>\n\
	<div class=\"examplefile\" folder=\"cppsrc_WireFrame\">GNUmakefile</div>\n\
</td>\n\
</tr>\n\
\n\
\n\
</table>\n\
\n\
\n\
<a name=\"build\"></a><h2>Running the Example</h2>\n\
\n\
<div id=\"toinstall\" style=\"display:none\">\n\
<p class=\"proc-head\">To install the example</p>\n\
<ul>\n\
<li><p>Connect to the Softimage SDK workgroup at <span class=\"workgroupPath\">%XSISDK_ROOT%\\examples\\workgroup</span>.</p>\n\
	<ol>\n\
	<li>In the <strong>Plug-in Manager</strong>, click the <strong>Workgroups</strong> tab.</li>\n\
	<li>Click <strong>File</strong> and then click <strong>Connect</strong>.</li>\n\
	<li>In the <strong>Connect to Workgroup</strong> dialog box, click <img src=\"..\\..\\doc\\shared\\bBrowse.gif\" />, locate the workgroup folder and then click <strong>Select</strong>.</li>\n\
	</ol>\n\
</li>\n\
</ul>\n\
\n\
<p class=\"proc-head\">To view the help page for an example</p>\n\
\n\
<ul>\n\
<li>Do one of the following:</li>\n\
<ul>\n\
<li>In the Plug-in Tree, expand the SDK examples workgroup, right-click the example add-on and then click <strong>Help</strong>.\n\
</li>\n\
<li>\n\
Open a Net View and click <img style=\"position:relative;bottom:-6px;\" src=\"..\\..\\doc\\shared\\xsiweb.png\" /> to go to Softimage Net local. In the top navigation bar, click <strong>add-ons</strong>, and then click the SDK example add-on.\n\
</li>\n\
</ul>\n\
</ul>\n\
</div>\n\
\n\
\n\
<p class=\"proc-head\">To run the ShowEdges example</p>\n\
\n\
<ol>\n\
\n\
<li><p>In a script editor, <span class=\"runExample\" id=\"ShowEdges\">run</span> this <span class=\"loadScript\">demo script</span>:</p>\n\
<pre>\n\
// [ Jscript ] Demo script for ShowEdges\n\
\n\
NewScene( null, false );\n\
var oSphere = ActiveSceneRoot.AddGeometry( \"Sphere\", \"MeshSurface\" );\n\
SelectObj( oSphere );\n\
\n\
var oMaterial = oSphere.AddMaterial( \"show_edges.Preset\",false,\"ShowEdges\");\n\
InspectObj( oMaterial.Parameters(\"Surface\").Source );\n\
</pre>\n\
</li>\n\
\n\
\n\
<li>Draw a render region.</li>\n\
</ol>\n\
\n\
<p class=\"proc-head\">To run the Wireframe example</p>\n\
\n\
<ol>\n\
\n\
<li><p>In a script editor, <span class=\"runExample\" id=\"Wireframe\">run</span> this <span class=\"loadScript\">demo script</span>:</p>\n\
\n\
<pre>\n\
\'[VBScript] Demo program for the Wireframe Softimage shader example\n\
\n\
NewScene , false\n\
\n\
\' Create test sphere\n\
set object = ActiveSceneRoot.AddGeometry( \"Sphere\", \"MeshSurface\" )\n\
\n\
SetupObject object\n\
\n\
\'Shadow effect\n\
set oGrid = ActiveSceneRoot.AddGeometry( \"Grid\", \"MeshSurface\" )\n\
Translate oGrid, 0, -5, 0, siAbsolute, siParent, siObj, siY\n\
oGrid.ulength = 100\n\
oGrid.vlength = 100\n\
SetValue \"light.light.soft_light.shadow\", True\n\
\n\
sub SetupObject( in_obj )\n\
\n\
	\' Add the UserDataBlob property and set it renderable\n\
	\' The UserDataID must be set to the specific ID that\n\
	\' the shader is expecting\n\
\n\
	set prop = in_obj.AddProperty( \"UserDataBlob\" )\n\
	prop.RenderData = True\n\
	prop.UserDataID = 6789\n\
\n\
	on error resume next\n\
	prop.AddCustomOp \"WireframeOp\",in_obj.ActivePrimitive\n\
\n\
	if ( err &lt;&gt; 0 ) then\n\
		MsgBox \"Failed to create WriteframeOp Custom Operator\" & vbCrLf & _\n\
				\"Please make sure the example is fully installed\"\n\
		exit sub\n\
	end if\n\
\n\
	on error goto 0\n\
\n\
	\' Add wireframe shader to an empty material\n\
	set material = in_obj.AddMaterial\n\
	set oSurfParam = material.Parameters( \"surface\" )\n\
\n\
	set oSpriteShader = oSurfParam.connectfrompreset( \"Sprite\", siMaterialShaderFamily )\n\
\n\
	material.Parameters(\"Shadow\").Connect( oSpriteShader )\n\
\n\
\n\
	set inputParam = oSpriteShader.Parameters( \"input\" )\n\
\n\
	on error resume next\n\
	set oWireShader = inputParam.connectfrompreset( \"WireframeShader\", siTextureShaderFamily )\n\
\n\
	if ( err &lt;&gt; 0 ) then\n\
		MsgBox \"Failed to create WriteframeShader \" & vbCrLf & _\n\
				\"Please make sure the example is fully installed\"\n\
		exit sub\n\
	end if\n\
\n\
	oWireShader.Parameters(\"wire_width\").value = 0.1\n\
	oWireShader.Parameters(\"base_color\").Parameters(\"red\").value = 1\n\
	oWireShader.Parameters(\"base_color\").Parameters(\"green\").value = 1\n\
	oWireShader.Parameters(\"base_color\").Parameters(\"blue\").value = 1\n\
	oWireShader.Parameters(\"base_color\").Parameters(\"alpha\").value = 0\n\
\n\
	InspectObj oWireShader\n\
end sub\n\
</pre>\n\
</li>\n\
\n\
\n\
<li>Draw a render region.</li>\n\
</ol>\n\
\n\
\n\
\n\
<a name=\"build\"></a><h2>Building the C++ Example</h2>\n\
\n\
<p>\n\
The Softimage SDK includes a compiled version of ShowEdges. If you want to modify the code, you can rebuild the shader by following these instructions.</p>\n\
\n\
<div id=\"windows-build\">\n\
<p class=\"proc-head\">To build ShowEdges on Windows</p>\n\
<ol>\n\
<li><p><span class=\"sishell\" cppsrc=\"cppsrc_ShowEdges\">Open</span> an Softimage command prompt, and type <strong>devenv</strong> to start Visual Studio .NET.</p>\n\
<p>Starting Visual Studio .NET from an Softimage command prompt ensures that environment variables such as XSISDK_ROOT are set (otherwise you\'ll get build and link errors).</p>\n\
\n\
<p><strong>Tip</strong> To load the <span class=\"devenv\" vcproj=\"cppsrc_ShowEdges\\show_edges.vcproj\">show_edges</span> project from the command line, type:</p>\n\
<pre>devenv <span class=\"installPath\">cppsrc_ShowEdges\\show_edges.vcproj</span></pre>\n\
\n\
<!--\n\
<p>If devenv is in your path, <span class=\"devenv\" vcproj=\"show_edges.vcproj\">click here to start devenv</span> and load the <strong>show_edges</strong> project.</p>\n\
-->\n\
\n\
</li>\n\
<li>In Visual Studio .NET, open the project file .vcproj.</li>\n\
<li>Select a configuration (Release or Debug) and build the DLL.</li>\n\
</ol>\n\
</div>\n\
\n\
\n\
<div id=\"windows-build\">\n\
<p class=\"proc-head\">To build Wireframe on Windows</p>\n\
<ol>\n\
<li><p><span class=\"sishell\" cppsrc=\"cppsrc_Wireframe\">Open</span> an Softimage command prompt, and type <strong>devenv</strong> to start Visual Studio .NET.</p>\n\
<p>Starting Visual Studio .NET from an Softimage command prompt ensures that environment variables such as XSISDK_ROOT are set (otherwise you\'ll get build and link errors).</p>\n\
\n\
<p><strong>Tip</strong> To load the <span class=\"devenv\" vcproj=\"cppsrc_Wireframe\\Wireframe.vcproj\">Wireframe</span> project from the command line, type:</p>\n\
<pre>devenv <span class=\"installPath\">cppsrc_Wireframe\\Wireframe.vcproj</span></pre>\n\
\n\
<!--\n\
<p>If devenv is in your path, <span class=\"devenv\" vcproj=\"show_edges.vcproj\">click here to start devenv</span> and load the <strong>show_edges</strong> project.</p>\n\
-->\n\
\n\
</li>\n\
<li>In Visual Studio .NET, open the project file .vcproj.</li>\n\
<li>Select a configuration (Release or Debug) and build the DLL.</li>\n\
</ol>\n\
</div>\n\
\n\
\n\
\n\
<div id=\"linux-build\">\n\
<p class=\"proc-head\">To build the example on Linux</p>\n\
<ol>\n\
<li>\n\
<p>In a shell (tcsh) window, type:</p>\n\
<pre>source $XSI_HOME/<span class=\"linuxExt\">.xsi_&lt;xsi_version&gt;</span></pre>\n\
</li>\n\
\n\
<li>\n\
<p>Change directories to</p>\n\
<pre><span class=\"installPath\">cppsrc_ShowEdges</span></pre>\n\
</li>\n\
\n\
<li>\n\
<p>To remove all intermediate files before building the example, run this command:</p>\n\
<pre>gmake clean</pre>\n\
</li>\n\
\n\
<li>\n\
<p />To compile the example, run this command:<p />\n\
<pre>gmake</pre>\n\
</li>\n\
</ol>\n\
</div>\n\
\n\
<div id=\"keywords\">\n\
<h2>Keywords</h2>\n\
<p>This example uses the following keywords:</p>\n\
<p>\n\
mental ray, shader, tessellated, geometry, edges, polygon,\n\
C++ example, operator, Update, InputPort, OutputPort, UserData, UserDataBlob, GetUserData, user data,\n\
segments, CSegmentRefArray, GetSegments, CPointRefArray,\n\
MATH, CVector3,\n\
miQ_FUNC_USERPTR, miQ_INST_DATA, miQ_DATA_LABEL, miQ_DATA_PARAM\n\
</p>\n\
</div>\n\
\n\
\n\
\n\
</div>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";