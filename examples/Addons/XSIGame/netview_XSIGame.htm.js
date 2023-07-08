var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../../../../../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=ISO-8859-1\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSIGame</title>\n\
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
</style><link rel=\"StyleSheet\" href=\"examples/Addons/XSIGame/doc/shared/examples.css\" type=\"text/css\" /><script>$(document).ready(function() { yepnope.injectJs(\"./examples/Addons/XSIGame/doc/shared/utils.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./examples/Addons/scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./examples/Addons/scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>XSIGame</h1>\n\
         </div>\n\
\n\
<div class=\"body\"><a name=\"top\"></a>\n\
\n\
\n\
\n\
<img class=\"netview\" src=\"netview_XSIGame.jpg\" style=\"float:left;padding-right:6px;\" />\n\
<h1>XSIGame</h1>\n\
\n\
<p>\n\
This example shows how to integrate a game render window and modtool into Softimage.\n\
</p>\n\
\n\
<p>Features demonstrated in this example:</p>\n\
<ul>\n\
<li>Custom Display Host</li>\n\
<li>Custom Views</li>\n\
<li>Custom User Preference</li>\n\
<li>Custom Scripted User Interface</li>\n\
<li>Customized NxN Integration</li>\n\
</ul>\n\
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
<div class=\"examplefile\">XSIGameControlPanel2.js</div>\n\
<br />\n\
<div class=\"examplefile\" folder=\"CDHInterface\">XSIGameControlPanelUI.cpp</div>\n\
<div class=\"examplefile\" folder=\"CDHInterface\">XSIGameControlPanelUI.h</div>\n\
<div class=\"examplefile\" folder=\"CDHInterface\">XSIGameInterface.cpp</div>\n\
<div class=\"examplefile\" folder=\"CDHInterface\">XSIGameInterface.h</div>\n\
<div class=\"examplefile\" folder=\"CDHInterface\">XSIGameInterface.vcproj</div>\n\
<div class=\"examplefile\" folder=\"CDHInterface\">XSIGameInterfaceUI.cpp</div>\n\
<div class=\"examplefile\" folder=\"CDHInterface\">XSIGameInterfaceUI.h</div>\n\
<br />\n\
<div class=\"examplefile\" folder=\"CharacterOptimizer\">CharacterOptimizer.cpp</div>\n\
<div class=\"examplefile\" folder=\"CharacterOptimizer\">CharacterOptimizer.h</div>\n\
<div class=\"examplefile\" folder=\"CharacterOptimizer\">CharacterOptimizer.vcproj</div>\n\
<br />\n\
<p>The Engine and Game folders contain the code for the actual game.</p>\n\
<!--\n\
<br/>\n\
<div id=\"examplefile\" folder=\"Engine\">BillboardManager.cpp</div>\n\
<div id=\"examplefile\" folder=\"Engine\">BillboardManager.h</div>\n\
<div id=\"examplefile\" folder=\"Engine\">BoundingBox.cpp</div>\n\
<div id=\"examplefile\" folder=\"Engine\">BoundingBox.h</div>\n\
<div id=\"examplefile\" folder=\"Engine\">Camera.cpp</div>\n\
<div id=\"examplefile\" folder=\"Engine\">Camera.h</div>\n\
<div id=\"examplefile\" folder=\"Engine\">CgProgramShader.cpp</div>\n\
<div id=\"examplefile\" folder=\"Engine\">CgProgramShader.h</div>\n\
<div id=\"examplefile\" folder=\"Engine\">CubicTextureShader.cpp</div>\n\
<div id=\"examplefile\" folder=\"Engine\">CubicTextureShader.h</div>\n\
<div id=\"examplefile\" folder=\"Engine\">debug.cpp</div>\n\
<div id=\"examplefile\" folder=\"Engine\">debug.h</div>\n\
<div id=\"examplefile\" folder=\"Engine\">DiskGameFlow.cpp</div>\n\
<div id=\"examplefile\" folder=\"Engine\">DiskGameFlow.h</div>\n\
<div id=\"examplefile\" folder=\"Engine\">Display.cpp</div>\n\
<div id=\"examplefile\" folder=\"Engine\">Display.h</div>\n\
<div id=\"examplefile\" folder=\"Engine\">dotXSI.cpp</div>\n\
<div id=\"examplefile\" folder=\"Engine\">dotXSI.h</div>\n\
<div id=\"examplefile\" folder=\"Engine\">dotXSILOD.cpp</div>\n\
<div id=\"examplefile\" folder=\"Engine\">dotXSILOD.h</div>\n\
<div id=\"examplefile\" folder=\"Engine\">ElectricField.cpp</div>\n\
<div id=\"examplefile\" folder=\"Engine\">ElectricField.h</div>\n\
<div id=\"examplefile\" folder=\"Engine\">Enemy.cpp</div>\n\
<div id=\"examplefile\" folder=\"Engine\">Enemy.h</div>\n\
<div id=\"examplefile\" folder=\"Engine\">engine.h</div>\n\
<div id=\"examplefile\" folder=\"Engine\">Engine.vcproj</div>\n\
<div id=\"examplefile\" folder=\"Engine\">GameState.cpp</div>\n\
<div id=\"examplefile\" folder=\"Engine\">GameState.h</div>\n\
<div id=\"examplefile\" folder=\"Engine\">GenericLevel.cpp</div>\n\
<div id=\"examplefile\" folder=\"Engine\">GenericLevel.h</div>\n\
<div id=\"examplefile\" folder=\"Engine\">Geometry.cpp</div>\n\
<div id=\"examplefile\" folder=\"Engine\">Geometry.h</div>\n\
<div id=\"examplefile\" folder=\"Engine\">Level.cpp</div>\n\
<div id=\"examplefile\" folder=\"Engine\">Level.h</div>\n\
<div id=\"examplefile\" folder=\"Engine\">LevelParser.cpp</div>\n\
<div id=\"examplefile\" folder=\"Engine\">LevelParser.h</div>\n\
<div id=\"examplefile\" folder=\"Engine\">Makefile</div>\n\
<div id=\"examplefile\" folder=\"Engine\">MaterialSystem.cpp</div>\n\
<div id=\"examplefile\" folder=\"Engine\">MaterialSystem.h</div>\n\
<div id=\"examplefile\" folder=\"Engine\">OpenGLDisplay.cpp</div>\n\
<div id=\"examplefile\" folder=\"Engine\">OpenGLDisplay.h</div>\n\
<div id=\"examplefile\" folder=\"Engine\">Player.cpp</div>\n\
<div id=\"examplefile\" folder=\"Engine\">Player.h</div>\n\
<div id=\"examplefile\" folder=\"Engine\">PowerUp.cpp</div>\n\
<div id=\"examplefile\" folder=\"Engine\">PowerUp.h</div>\n\
<div id=\"examplefile\" folder=\"Engine\">Readme.txt</div>\n\
<div id=\"examplefile\" folder=\"Engine\">Shader.cpp</div>\n\
<div id=\"examplefile\" folder=\"Engine\">Shader.h</div>\n\
<div id=\"examplefile\" folder=\"Engine\">Shield.cpp</div>\n\
<div id=\"examplefile\" folder=\"Engine\">Shield.h</div>\n\
<div id=\"examplefile\" folder=\"Engine\">SIBCArray.h</div>\n\
<div id=\"examplefile\" folder=\"Engine\">Sky.cpp</div>\n\
<div id=\"examplefile\" folder=\"Engine\">Sky.h</div>\n\
<div id=\"examplefile\" folder=\"Engine\">SkyBox.cpp</div>\n\
<div id=\"examplefile\" folder=\"Engine\">SkyBox.h</div>\n\
<div id=\"examplefile\" folder=\"Engine\">SpeedUp.cpp</div>\n\
<div id=\"examplefile\" folder=\"Engine\">SpeedUp.h</div>\n\
<div id=\"examplefile\" folder=\"Engine\">TexCoordShader.cpp</div>\n\
<div id=\"examplefile\" folder=\"Engine\">TexCoordShader.h</div>\n\
<div id=\"examplefile\" folder=\"Engine\">TextureShader.cpp</div>\n\
<div id=\"examplefile\" folder=\"Engine\">TextureShader.h</div>\n\
<div id=\"examplefile\" folder=\"Engine\">vector.h</div>\n\
<br/>\n\
<div id=\"examplefile\" folder=\"Game\">Game.cpp</div>\n\
<div id=\"examplefile\" folder=\"Game\">Game.vcproj</div>\n\
 -->\n\
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
	<li>In the <strong>Connect to Workgroup</strong> dialog box, click <img src=\"..\\..\\doc\\shared\\bBrowse.gif\" />, locate the workgroup folder, and then click <strong>Select</strong>.</li>\n\
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
<div>\n\
<p class=\"proc-head\">To run the example</p>\n\
<ol>\n\
<li>\n\
In viewport A, click the view name (\"Top\") to open the <strong>Views</strong> menu. In the <strong>Views</strong> menu, choose <strong>Custom Displays &gt; XSIGameView</strong>.\n\
</li>\n\
<li>Click in viewport A to start the game.</li>\n\
<li>If you edit the track in viewport B, the changes are automatically applied in the game view.</li>\n\
<li>To orbit the camera in the game view, orbit the camera in the wireframe view of viewport B.</li>\n\
</ol>\n\
\n\
\n\
</div>\n\
\n\
\n\
<a name=\"build\"></a><h2>Building the Example</h2>\n\
<div>\n\
<p>\n\
Softimage SDK includes a compiled version of XSIGame. If you modify the code, you can rebuild the game by following these instructions.\n\
</p>\n\
\n\
<p class=\"proc-head\">To build the example on Windows</p>\n\
\n\
<ol>\n\
\n\
<li>\n\
	<p>Download and install the required libraries:</p>\n\
    <ul>\n\
		<li><a target=\"_blank\" href=\"http://xml.apache.org/xerces-c/\">Xerces 2.1.0</a></li>\n\
		<li><p><a target=\"_blank\" href=\"http://www.opengl.org/resources/libraries/glut/\">GLUT 3.7</a></p>\n\
		<div class=\"note\"><strong>Important</strong> Install GLUT in a folder named gl (for example, <code>C:\\Glut\\gl</code>).</div>\n\
		</li>\n\
		<li><a target=\"_blank\" href=\"http://developer.nvidia.com/object/cg_toolkit.html\">CG 1.2</a></li>\n\
    </ul>\n\
    \n\
</li>\n\
\n\
<li><p><span class=\"sishell\" cppsrc=\"INSTALL_FOLDER\">Open</span> an Softimage command prompt.</p>\n\
<p>Opening an Softimage command prompt ensures that environment variables such as XSISDK_ROOT are set.</p>\n\
</li>\n\
\n\
<li>\n\
<p>In the Softimage command prompt, set the <strong>XERCESC_INC_PATH</strong>, <strong>GLEXT_INC_PATH</strong>, <strong>GLEXT_LIB_PATH</strong>, and <strong>CG_INC_PATH</strong> environment variables .</p>\n\
\n\
<ul>\n\
<li>\n\
<p>For example, if you installed XERCES in the folder <code>C:\\xerces\\bin</code>, GLUT in the folder <code>C:\\Glut\\gl</code>, then set the GLEXT environment variables like this:</p>\n\
<pre>\n\
set XERCESC_INC_PATH=C:\\xerces\\bin\n\
set GLEXT_INC_PATH=C:\\Glut\n\
set GLEXT_LIB_PATH=C:\\Glut\\gl\n\
</pre>\n\
</li>\n\
<li>The Cg installer may have already set <strong>CG_INC_PATH</strong>.</li>\n\
</ul>\n\
</li>\n\
\n\
<li>\n\
<p>Start devenv and load the project you want to build:</p>\n\
<ul>\n\
<li>Engine\\Engine.vcproj</li>\n\
<li>Game\\Game.vcproj</li>\n\
<li>CDHInterface\\XSIGameInterface.vcproj</li>\n\
<li>CharacterOptimizer\\CharacterOptimizer.vcproj</li>\n\
<li>CGShaderHandler\\CGShaderHandler.vcproj</li>\n\
</ul>\n\
\n\
<div class=\"note\">\n\
<p><strong>Tip</strong> To load a project from the command line, type the name of the project in the <strong>devenv</strong> command line. For example:</p>\n\
<pre>devenv Engine\\Engine.vcproj</pre>\n\
</div>\n\
\n\
\n\
</li>\n\
\n\
<!--\n\
<li><p>In <span class=\"installPath\">xsivcvars32.bat</span>, set the values of the GLUT_ROOT and CG_ROOT environment variables . For example:</p>\n\
<pre>\n\
set XSISDK_ROOT=&quot;C:\\Softimage\\XSI_4.5\\XSISDK&quot;\n\
set GLUT_ROOT=&quot;C:\\glut-3.7&quot;\n\
set CG_ROOT=&quot;C:\\Program Files\\NVIDIA Corporation\\Cg-1.2&quot;</pre>\n\
</li>\n\
\n\
<li><p>Run <strong>xsivcvars32.bat</strong>.</p>\n\
</li>\n\
-->\n\
\n\
<!-- These files are writable already\n\
<li><p>Ensure that you have permission to overwrite the existing modules.</p>\n\
<pre>\n\
attrib -R .\\Application\\Plugins\\XSIGameInterface.dll\n\
attrib -R .\\Application\\bin\\nt-x86\\Game.exe\n\
</pre>\n\
</li>\n\
-->\n\
\n\
<li><p>Compile a specific configuration (Release or Debug) of XSIGame using Visual Studio .NET.</p>\n\
<!--\n\
<pre>\n\
devenv .\\Engine\\Engine.vcproj /useenv /build Debug\n\
devenv .\\CDHInterface\\XSIGameInterface.vcproj /useenv /build Debug\n\
devenv .\\Game\\Game.vcproj /useenv /build Debug\n\
</pre>\n\
-->\n\
</li>\n\
\n\
</ol>\n\
\n\
</div>\n\
\n\
\n\
\n\
\n\
<a name=\"build\"></a><h2>Setting Up AlienBrain</h2>\n\
<div>\n\
\n\
<p class=\"proc-head\">To set up AlienBrain</p>\n\
\n\
<ol>\n\
<li>\n\
<p>Install version 7.2 of the <a href=\"http://www.alienbrain.com\">Alienbrain</a> client and the Softimage integration.</p>\n\
</li>\n\
\n\
<li>Use the subst drive H: for your local Alienbrain database.</li>\n\
\n\
<li>\n\
<p>Add the XSIGame files to Alienbrain server.</p>\n\
<p>The idea is to put all the files (3D assets and code files) into alienbrain and base the asset management workflow on AlienBrain.</p>\n\
   <ul>\n\
      <li>Create a Project called XSIGame on the Alienbrain server.</li>\n\
      <li>Add all files under XSISDK\\examples\\workgroup\\Addons\\XSIGame\\\n\
        to the Alienbrain project.</li>\n\
    </ul>\n\
  </li>\n\
  <li>Set the XSIGame working path:\n\
    <ul>\n\
      <li>Start Softimage.</li>\n\
      <li>Open the control panel (XSIGame &gt; Control Panel).</li>\n\
      <li>Set the Data Folder path to <a href=\"file:///H:/XSIGame\">H:\\XSIGame</a>.\n\
        Note that the data location is stored in a file called\n\
        datalocation.txt located at the root folder of the example. The game engine is\n\
        uses the content of this file to find the data files.</li>\n\
      <li>Now you can start manipulating the data using alienbrain within Softimage.</li>\n\
    </ul>\n\
  </li>\n\
</ol>\n\
</div>\n\
\n\
<div id=\"keywords\">\n\
<h2>Keywords</h2>\n\
<p>This example uses the following keywords:</p>\n\
<p>\n\
C++ example,\n\
ViewContext,\n\
PutUserData,\n\
GetUserData,\n\
Notify,\n\
CreateDialog,\n\
RegisterCustomDisplay,\n\
siEventID,\n\
GetNotificationData,\n\
AlienBrain,\n\
Custom Display Host\n\
</p>\n\
</div>\n\
\n\
\n\
\n\
\n\
</div><!-- end of body div -->\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";