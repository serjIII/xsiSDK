var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../../../../../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=ISO-8859-1\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SimpleMenu</title>\n\
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
</style><link rel=\"StyleSheet\" href=\"examples/Addons/SimpleMenu/doc/shared/examples.css\" type=\"text/css\" /><script>$(document).ready(function() { yepnope.injectJs(\"./examples/Addons/SimpleMenu/doc/shared/utils.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./examples/Addons/scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./examples/Addons/scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>SimpleMenu</h1>\n\
         </div>\n\
\n\
<div class=\"body\"><a name=\"top\"></a>\n\
\n\
\n\
\n\
<img class=\"netview\" src=\"netview_SimpleMenu.jpg\" style=\"PADDING-RIGHT:6px;FLOAT:left\" />\n\
<h1>Simple Menu</h1>\n\
\n\
<p>This example shows how to add custom menus in Softimage. The\n\
example includes JScript, Python, VBScript, and C++ versions.\n\
</p>\n\
\n\
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
<td><strong>Files</strong></td>\n\
<td>\n\
	<div class=\"examplefile\">simplejsmenu.js</div>\n\
      <div class=\"examplefile\">simplepymenu.py</div>\n\
	<div class=\"examplefile\">simplevbsmenu.vbs</div>\n\
	<div class=\"examplefile\">simplemenu.cpp</div>\n\
	<div class=\"examplefile\">GNUmakefile</div>\n\
	<div class=\"examplefile\">simplemenu.vcproj</div>\n\
</td>\n\
</tr>\n\
\n\
\n\
</table>\n\
\n\
\n\
<a name=\"build\"></a><h2>Running the Example</h2>\n\
\n\
<div id=\"toinstall\" style=\"DISPLAY:none\">\n\
<p class=\"proc-head\">To install the example</p>\n\
<ul>\n\
<li><p>Connect to the Softimage SDK workgroup at <span class=\"workgroupPath\">%XSISDK_ROOT%\\examples\\workgroup</span>.</p>\n\
	<ol>\n\
	<li>In the <strong>Plug-in Manager</strong>, click the <strong>Workgroups</strong>\n\
    tab.\n\
\n\
	<li>Click <strong>File</strong> and then click <strong>Connect</strong>.\n\
\n\
	<li>In the <strong>Connect to Workgroup</strong> dialog box, click <img src=\"..\\..\\doc\\shared\\bBrowse.gif\" />, locate the workgroup folder and then click <strong>Select</strong>.</li>\n\
	</li></li></ol>\n\
\n\
</li></ul>\n\
\n\
<p class=\"proc-head\">To view the help page for an example</p>\n\
\n\
<ul>\n\
<li>Do one of the following:\n\
\n\
<ul>\n\
<li>In the Plug-in Tree, expand the SDK examples workgroup, right-click the example add-on and then click <strong>Help</strong>.\n\
\n\
<li>\n\
Open a Net View and click <img style=\"BOTTOM:-6px;POSITION:relative\" src=\"..\\..\\doc\\shared\\xsiweb.png\" /> to go to Softimage Net local. In the top navigation bar, click <strong>add-ons</strong>, and then click the SDK example add-on.\n\
</li>\n\
</li></ul>\n\
</li></ul>\n\
</div>\n\
\n\
<div>\n\
<p class=\"proc-head\">To run the example</p>\n\
\n\
<p>The VBScript, Python and JScript versions of the plug-in each add a <strong>More</strong> menu item to the <strong>Get &gt; Primitive &gt; Polygon Mesh</strong> menu in the Model toolbar. The <strong>More</strong> menus contain more menu items for creating meshes. Both plug-ins also add a menu item to the Help menu on the main Softimage menubar. The help menu items display this page in a NetView window.\n\
  </p>\n\
\n\
<p>The C++ version of the plug-in adds the following menu items:</p>\n\
\n\
\n\
<ul>\n\
<li>On the Model toolbar:\n\
\n\
<ul>\n\
<li>Modify &gt; Deform &gt; Simple Deform Menu<br />\n\
Applies a deformation operator to a polygon mesh\n\
</li>\n\
</ul>\n\
<li>On the main Softimage menubar:\n\
\n\
<ul>\n\
<li>File &gt; Simple Save Scene\n\
\n\
<li>File &gt; Simple Load Project\n\
\n\
<li>File &gt; Export &gt; Simple Export\n\
\n\
<li>File &gt; Import &gt; Simple Import\n\
\n\
<li>Window &gt; Cascades<br />\n\
arranges floating windows in an overlapping cascade so\n\
    you can see all title bars\n\
\n\
<li>Help &gt; C++ Simple Help Menu</li>\n\
</li></li></li></li></li></ul>\n\
<li>On the context menu in a 3D view or the explorer for\n\
  a polygon cluster:\n\
\n\
<ul>\n\
<li>Log Cluster Polygon</li>\n\
</ul></li>\n\
</li></li></ul>\n\
\n\
\n\
\n\
</div>\n\
\n\
\n\
<a name=\"build\"></a><h2>Building the C++ Example</h2>\n\
\n\
<p>\n\
Softimage SDK includes a compiled version of SimpleMenu. If you want to modify the code, you can rebuild the example by following these instructions.</p>\n\
\n\
<div id=\"windows-build\">\n\
<p class=\"proc-head\">To build the example on Windows</p>\n\
<ol>\n\
<li><p><span class=\"sishell\">Open</span> an Softimage command prompt, and type <strong>devenv</strong> to start Visual Studio .NET.</p>\n\
<p>Starting Visual Studio .NET from an Softimage command prompt ensures that environment variables such as XSISDK_ROOT are set (otherwise you\'ll get build and link errors).</p>\n\
\n\
<p><strong>Tip</strong> To load the <span class=\"devenv\" vcproj=\"SimpleMenu.vcproj\">SimpleMenu</span> project from the command line, type:</p>\n\
<pre>devenv <span class=\"installPath\">SimpleMenu.vcproj</span></pre>\n\
<li>In Visual Studio .NET, open the project file .vcproj.\n\
\n\
\n\
<li>Select a configuration (Win32 Release or Win32 Debug) and build the DLL.</li>\n\
</li></li></ol>\n\
</div>\n\
\n\
\n\
<div id=\"linux-build\">\n\
<p class=\"proc-head\">To build the example on Linux</p>\n\
<ol>\n\
<li>\n\
<p>In a shell (tcsh) window, type:</p>\n\
<pre>source $XSI_HOME/<span class=\"linuxExt\">.xsi_&lt;xsi_version&gt;</span></pre>\n\
\n\
<li>\n\
<p>Change directories to</p>\n\
<pre><span class=\"installPath\">cppsrc</span></pre>\n\
\n\
<li>\n\
<p>To remove all intermediate files before building the example, run this command:</p>\n\
<pre>gmake clean</pre>\n\
\n\
<li>\n\
<p />To compile the example, run this command:<p />\n\
<pre>gmake</pre>\n\
</li>\n\
</li></li></li></ol>\n\
</div>\n\
\n\
\n\
<div id=\"keywords\">\n\
<h2>Keywords</h2>\n\
<p>This example uses the following keywords:</p>\n\
<p>\n\
C++, JScript,\n\
Python, VBScript, C++\n\
example, JScript example,&nbsp;Python example, VBScript example,\n\
RegisterMenu,\n\
Init,\n\
AddCallbackItem,\n\
Menu,\n\
MenuItem,\n\
Layout,\n\
GetDesktop,\n\
GetActiveLayout,\n\
CRefArray,\n\
GetViews,\n\
GetFloating,\n\
Move,\n\
PutState,\n\
CreateView,\n\
netview,\n\
CStatus,\n\
Succeeded,\n\
GetCode,\n\
Plugins,\n\
GetPlugins,\n\
AddCommandItem,\n\
siMenuItemSubmenu,\n\
PutFilter,\n\
ExecuteCommand,\n\
GetActivePrimitive,\n\
GetGeometry,\n\
IsA,\n\
siPolygonMeshID,\n\
SetAttributeValue,\n\
url\n\
\n\
</p>\n\
</div>\n\
\n\
</div>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";