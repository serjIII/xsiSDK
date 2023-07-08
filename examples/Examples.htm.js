var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>List of SDK Examples</title>\n\
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
</style><link href=\"examples/doc/shared/examples.css\" rel=\"StyleSheet\" type=\"text/css\" /><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>List of SDK Examples</h1>\n\
         </div>\n\
\n\
<a name=\"top\" id=\"top\"></a>\n\
<h1>Softimage SDK Examples</h1>\n\
<p>The Softimage SDK include a wide variety of sample plug-ins\n\
implemented in C++, C#, JScript, Python and VBScript. The examples include\n\
self-installing plug-ins (such as commands, properties, filters,\n\
menus, and custom displays), operators, importers and exporters,\n\
relational views, realtime shaders, and UFOs.</p>\n\
<p>The Softimage SDK examples are located in the\n\
<strong>examples</strong> folder of the Softimage SDK installation\n\
folder:</p>\n\
<ul>\n\
<li><code>%XSISDK_ROOT%\\examples</code> (on Windows)</li>\n\
<li><code>$XSISDK_ROOT/examples</code> (on Linux)</li>\n\
</ul>\n\
<p>Most of the SDK examples are included in a workgroup, which\n\
makes it easy to load and try out the examples and to browse the\n\
source code.</p>\n\
<p class=\"proc-head\">To load and run the workgroup examples</p>\n\
<ol>\n\
<li>\n\
<p>Connect to the Softimage SDK workgroup at <span class=\"workgroupPath\">%XSISDK_ROOT%\\examples\\workgroup</span>.</p>\n\
<ul>\n\
<li>In the <strong>Plug-in Manager</strong>, click the\n\
<strong>Workgroups</strong> tab.</li>\n\
<li>Click <strong>File</strong> and then click\n\
<strong>Connect</strong>.</li>\n\
<li>In the <strong>Connect to Workgroup</strong> dialog box, click\n\
<strong>Try SDK Example Workgroup.</strong></li>\n\
</ul>\n\
</li>\n\
<li>In the Plug-in Tree, expand the SDK examples workgroup,\n\
right-click an example add-on and then click <strong>Help</strong>.\n\
<p>The NetView help page explains how to run the examples and gives\n\
you single-click access to the example source code.</p>\n\
</li>\n\
</ol>\n\
<hr style=\"color: #666666; height: 1px; margin-top: 24px;\" />\n\
<h2 style=\"margin-top: 2px\">Workgroup Examples</h2>\n\
<p class=\"example\"><a href=\"#!/url=./examples/Addons/CSharpScripting/netview_csharpscripting.htm\">C#\n\
Scripting</a> [ C# ]<br />\n\
This plug-in shows how to use C# as a scripting language from the\n\
Scripting Editor. You can use it when you need to test some simple\n\
C# code in Softimage without having to create a plug-in.</p>\n\
<p class=\"example\"><a href=\"#!/url=./examples/Addons/ConstraintOps/netview_ConstraintOps.htm\">Constraint\n\
Operators</a> [ C++, C#, JScript, Python ]<br />\n\
This add-on shows various self-installed custom operators that\n\
\"constrain\" objects together. This sort of operator is common when\n\
building rigs and is an alternative to the Constraint, Expression\n\
and Proxy Parameter features of Softimage.</p>\n\
<p class=\"example\"><a href=\"#!/url=./examples/Addons/ConverterEvent/netview_ConverterEvent.htm\">Converter\n\
Event</a> [ VBScript ]<br />\n\
This example shows how to implement import/export converter events\n\
as a self-installing plug-in with VBScript.</p>\n\
<p class=\"example\"><a href=\"#!/url=./examples/Addons/SimpleCommand/netview_SimpleCommand.htm\">Custom Command\n\
Examples</a> [ C++, C#, JScript, Python, VBScript ]<br />\n\
The Simple Command examples demonstrate how to implement\n\
self-installing custom commands using various implementation\n\
languages. The Simple Undoable Command also shows how to implement\n\
an undoable C++ API custom command.</p>\n\
<p class=\"example\"><a href=\"#!/url=./examples/Addons/CustomICENodes/netview_CustomICENodes.htm\">Custom\n\
ICENodes</a> [ C++ ]<br />\n\
These examples show how to implement custom ICE nodes as\n\
self-installing plug-ins.</p>\n\
<p class=\"example\"><a href=\"#!/url=./examples/Addons/CustomPrimitive/netview_CustomPrimitive.htm\">Custom Primitives\n\
</a> [ C++]<br />\n\
This example shows how to define custom primitives and use the related callbacks.</p>\n\
<p class=\"example\"><a href=\"#!/url=./examples/Addons/ShaderDefinitions/netview_ShaderDefs.htm\">Custom Shader\n\
Definition</a> [ C++, C#, JScript, Python, VBScript ]<br />\n\
These examples show how to create self-installing custom shader\n\
definitions.</p>\n\
<p class=\"example\"><a href=\"#!/url=./examples/Addons/ShaderParser/netview_ShaderParser.htm\">Custom Shader\n\
Parser</a> [ JScript ]<br />\n\
This example shows how to create a self-installing custom shader\n\
language parser.</p>\n\
<p class=\"example\" /><a href=\"#!/url=./examples/Addons/CustomTools/netview_CustomTools.htm\">Custom Tools [ C++ ]</a><br />\n\
<p>This addon shows various self-installing custom tools.<br />\n\
</p>\n\
<p class=\"example\"><a href=\"#!/url=./examples/Addons/CustomUITest/netview_CustomUITest.htm\">Custom UI Test</a> [\n\
C++ ]<br />\n\
This C++ example is a custom display that handles Softimage\n\
notifications and Win32 messages. The example shows how to define\n\
the interface and callbacks to Softimage, and how to access the\n\
notifications that Softimage pushes to the custom display host.</p>\n\
<p class=\"example\"><a href=\"#!/url=./examples/Addons/DragAndDrop/netview_DragAndDrop.htm\">Drag and Drop Event</a> [\n\
Python ]<br />\n\
This python examples demonstrates the use of the siDragAndDrop2 event.\n\
It shows how to use the event to allow duplicating of 3D objects by dragging from the scene\n\
explorer and dropping it into position in the viewports.\n\
</p>\n\
<p class=\"example\"><a href=\"#!/url=./examples/Addons/GridData/netview_GridData.htm\">GridData</a> [ C++, Python ]<br />\n\
This example shows how to use grid data object and widget to display object information in the scene and edit them via the Grid control. It shows the various GridData PPG events and how to handle them.</p>\n\
<p class=\"example\"><a href=\"#!/url=./examples/Addons/DeformOperators/netview_DeformOperators.htm\">Deform\n\
Operators</a> [ C++, C#, JScript ]<br />\n\
This example shows how to create deform operators. These are\n\
operators which change an existing polygon or nurbs mesh.</p>\n\
<p class=\"example\"><a href=\"#!/url=./examples/Addons/ImportExport/netview_ImportExport.htm\">Import/Export</a> [\n\
C++ ]<br />\n\
This example provides a good starting point for writing your own\n\
importer/exporter using the Softimage C++ API. The example shows\n\
how to create a user interface for a typical import/export\n\
application, export geometry using the\n\
<strong>CGeometryAccessor</strong> class, and import polygon meshes\n\
using the <strong>CMeshBuilder</strong> class.</p>\n\
<p class=\"example\"><a href=\"#!/url=./examples/Addons/ICEAttribute/netview_ICEAttribute.htm\">Inspect ICE\n\
Attributes</a> [ C++ ]<br />\n\
This example demonstrates how to navigate through the ICE\n\
attributes of a geometry or property and how to log all attribute\n\
values. The sample code uses a C++ API class template to log the\n\
values and operates with generic <strong>ICEAttribute</strong>\n\
types.</p>\n\
<p class=\"example\"><a href=\"#!/url=./examples/Addons/LightFilter/netview_LightFilter.htm\">Light Filter</a> [\n\
JScript ]<br />\n\
This example shows how to implement a custom filter as a\n\
self-installing plug-in that handles light objects.</p>\n\
<p class=\"example\"><a href=\"#!/url=./examples/Addons/myCache/netview_myCache.htm\">myCache Exporter</a> [ C++\n\
]<br />\n\
This C++ example demonstrates writing your own exporter for cache\n\
files. The example uses the MDAttribute as well as the\n\
CMDAttributeDataArray.</p>\n\
<p class=\"example\"><a href=\"#!/url=./examples/Addons/ParticleOp/netview_ParticleOp.htm\">ParticleOp</a> [ C++\n\
]<br />\n\
This C++ example shows how to write a particle operator that\n\
manipulates a particle cloud. The particle operator makes the\n\
particles in a cloud flock together. A custom property page allows\n\
you to tweak the variables that control the flocking behavior.</p>\n\
<p class=\"example\"><a href=\"#!/url=./examples/Addons/PDC_Export/netview_PDC_Export.htm\">PDC Export</a> [ C++\n\
]<br />\n\
This C++ example demonstrates writing your own exporter for Maya\n\
PDC cache files. The example uses the MDAttribute as well as the\n\
CMDAttributeDataArray.</p>\n\
<p class=\"example\"><a href=\"#!/url=./examples/Addons/PPGDemos/netview_PPGDemos.htm\">PPG Demos</a> [ JScript,\n\
VBScript ]<br />\n\
This example is a collection of examples that show how to build\n\
property pages (PPGs). A toolbar provides access to the different\n\
demos.</p>\n\
<p class=\"example\"><a href=\"#!/url=./examples/Addons/PSetUIDemo/netview_PSetUIDemo.htm\">PSet UI Demo</a> [\n\
JScript ]<br />\n\
This example shows how to use a custom property (a set of custom\n\
parameters) to build a user interface for a plug-in.</p>\n\
<p class=\"example\"><a href=\"#!/url=./examples/Addons/RealtimeShaders/netview_RealtimeShaders.htm\">Realtime Shaders</a> [ C++, CgFx ]<br />\n\
This add-on shows various real-time effect shaders written with the\n\
HLSL and CGFX language.</p>\n\
<p class=\"example\"><a href=\"#!/url=./examples/Addons/ProjectSelector/netview_projectselector.htm\">Project\n\
Selector</a> [ C#, JScript ]<br />\n\
This plug-in demonstrates how to use the change project event\n\
(siOnChangeProject) in JScript.</p>\n\
<p class=\"example\"><a href=\"#!/url=./examples/Addons/SampleDisplayCallback/netview_SampleDisplayCallback.htm\">Sample\n\
Display Callback</a> [ C++ ]<br />\n\
This example contains a Display Callback (MyClearScreenBuffer) and\n\
a Display Pass (MyCustomPass).</p>\n\
<p class=\"example\"><a href=\"#!/url=./examples/Addons/SampleShelves/netview_SampleShelves.htm\">Sample Shelves</a>\n\
[ XML ]<br />\n\
This example includes a number of different shelves.</p>\n\
<p class=\"example\"><a href=\"#!/url=./examples/Addons/SampleRVs/netview_SampleRVs.htm\">Sample Relational\n\
Views</a> [ XML ]<br />\n\
This example includes a number of different relational views.</p>\n\
<p class=\"example\"><a href=\"#!/url=./examples/Addons/Schematic/netview_SchematicDemo.htm\">Schematic API [ Python ]</a><br />\n\
This example shows how to navigate and rearrange a schematic view with the Schematic and SchematicNode API.\n\
</p>\n\
<p class=\"example\"><a href=\"#!/url=./examples/Addons/ShowEdges/netview_ShowEdges.htm\">ShowEdges [ C++ ]</a><br />\n\
This example includes two related examples:</p>\n\
<ul>\n\
<li><b>ShowEdges</b> is a basic mental ray shader that draws a\n\
thick border along the edges of a polygon mesh. ShowEdges renders\n\
the triangulated version of the mesh that is sent to mental\n\
ray.</li>\n\
<li>\n\
<p><b>Wireframe</b> also draws edges, but it shows the true edges\n\
(before tesselation). Wireframe uses a UserDataBlob to pass edge\n\
information to a shader (which shows how to map Softimage user data\n\
into mental ray user data). A custom operator populates the\n\
UserDataBlob with the edge information.n An operator is used rather\n\
than a custom command because whenever the geometry changes,\n\
Softimage re-evaluates the operator and re-renders the object. The\n\
operater and the shader are contained in the same DLL/SO.</p>\n\
</li>\n\
</ul>\n\
<p class=\"example\"><a href=\"#!/url=./examples/Addons/SimpleFilter/netview_SimpleFilter.htm\">SimpleFilter</a> [\n\
C++, C#, JScript, Python, VBScript ]<br />\n\
This example shows how to implement a custom filter as a\n\
self-installing plug-in. Softimage installs the custom filter at\n\
startup and automatically adds it to the filter menu in the Select\n\
panel of the main command area. When Simple Filter is the active\n\
selection filter, you cannot select polygon meshes with less than\n\
fifty vertices. The C# Triangle Filter limits the selection to\n\
triangles.</p>\n\
<p class=\"example\"><a href=\"#!/url=./examples/Addons/SimpleMenu/netview_SimpleMenu.htm\">SimpleMenu</a> [ C++,\n\
JScript, Python, VBScript ]<br />\n\
This example shows how to add custom menus in Softimage. The\n\
example includes JScript, VBScript, and C++ versions.</p>\n\
<p class=\"example\"><a href=\"#!/url=./examples/Addons/TimerEvent/netview_timertools.htm\">TimerEvent</a> [ JScript\n\
]<br />\n\
This example demonstrates how to use timer events in Softimage. The\n\
example includes a JScript version.</p>\n\
<p class=\"example\"><a href=\"#!/url=./examples/Addons/VertexColorMixer/netview_VertexColorMixer.htm\">VertexColorMixer</a>\n\
[ C++, SPDL ]<br />\n\
This example shows how to create an operator that reads from many\n\
vertex color properties and writes a \'processed\' result to a vertex\n\
color property acting as the mixed result. The code shows how to\n\
implement port group instances, a feature that allows you to\n\
connect many objects to the same port group, in this case\n\
\"Group_1\".</p>\n\
<p class=\"example\"><a href=\"#!/url=./examples/Addons/VertexColors/netview_VertexColors.htm\">Vertex Colors</a> [\n\
C++ ]<br />\n\
This example is a custom display that provides tools for editing\n\
vertex colors on polygon meshes.</p>\n\
<p class=\"example\"><a href=\"#!/url=./examples/Addons/XSIA/netview_XSIA.htm\">XSIA</a>\n\
[ JScript ]<br />\n\
This example shows how to implement a custom filter as a\n\
self-installing plug-in that handles light objects.</p>\n\
<p class=\"example\"><a href=\"#!/url=./examples/Addons/XSIGame/netview_XSIGame.htm\">XSIGame</a> [ C++, JScript\n\
]<br />\n\
This example shows how to integrate a game render window and\n\
modtool into Softimage.</p>\n\
<p class=\"example\"><a href=\"#!/url=./examples/Addons/XSIServer/netview_xsiserver.htm\">XSI Server</a> [ C#\n\
]<br />\n\
This plugin provides an example of a TCP/IP server implementation\n\
for Softimage.</p>\n\
<hr style=\"color: #666666; height: 1px;\" />\n\
<h2 style=\"margin-top: 2px\">Other Examples</h2>\n\
<p>In addition to the workgroup examples, you can find these other\n\
examples in the Softimage SDK <strong>examples</strong> folder.</p>\n\
<a name=\"realtimeshaders\" id=\"realtimeshaders\"></a>\n\
<p class=\"example\"><strong>examples\\realtimeshaders</strong> [ C++,\n\
SPDL ]<br />\n\
Source code for the CG, DirectX, and openGL realtime shaders. Also\n\
includes the XSI_OGLHelper project, a set of helper functions and\n\
macros for developing realtime OpenGL shaders.</p>\n\
<a name=\"graphicssequencer\" id=\"graphicssequencer\"></a>\n\
<p class=\"example\"><strong>examples\\graphicssequencer</strong> [\n\
C++ ]<br />\n\
C++ source code for the DX9Display display pass and display\n\
callback.</p>\n\
<a name=\"ufos\" id=\"ufos\"></a>\n\
<p class=\"example\"><strong>examples\\UFOs</strong> [ C ]<br />\n\
The folder examples\\ufos contains Media Illusion User Function\n\
Object plug-ins that are used in the Softimage Illusion FX\n\
Tree.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";