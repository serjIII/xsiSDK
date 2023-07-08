var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../../../../../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=ISO-8859-1\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SimpleCommand</title>\n\
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
</style><link href=\"examples/Addons/SimpleCommand/doc/shared/examples.css\" type=\"text/css\" rel=\"StyleSheet\" /><script>$(document).ready(function() { yepnope.injectJs(\"./examples/Addons/SimpleCommand/doc/shared/utils.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./examples/Addons/scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./examples/Addons/scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>SimpleCommand</h1>\n\
         </div>\n\
\n\
		<div class=\"body\"><a name=\"top\"></a><img class=\"netview\" style=\"PADDING-RIGHT: 6px; FLOAT: left\" src=\"netview_SimpleCommand.jpg\" />\n\
			<h1>Custom Command Examples</h1>\n\
			<p>These examples demonstrate how to implement self-installing custom commands using various implementation languages.\n\
			</p><br />\n\
			<p /><strong>Simple Command</strong><br />\n\
			This example implements a simple custom command that takes one argument and logs\n\
			the argument value to the command history. The example includes JScript,\n\
			Python, VBScript, C++ and C# versions of the command. You can run the command from\n\
			the Script Editor or add the command to a toolbar.\n\
\n\
			The C# version included is more elaborated as it takes a selected object as input and logs all its parameters.\n\
			<p>Custom commands are one of the main building blocks for more sophisticated\n\
			plug-in tools. The SimpleCommand example shows the basic code framework for a\n\
			custom command. When you\'re ready to start writing your own custom commands,\n\
			you could use it as a starting point. Or, even better, you can use the Command\n\
			Wizard to generate a more complete code skeleton.\n\
			</p>\n\
			<p><strong>Simple Undoable Command</strong><br />\n\
			This example demonstrates how to implement an undoable custom command using the C++ API. This example creates a NetView view\n\
			at <tt>0,100</tt> and the undoable command moves the window to<tt> 200,100</tt>. The positioning of the window can be undone\n\
			and redone through the Undo and Redo built-in Softimage commands. The sample command can be accessed from the\n\
			\'Undoable Custom Command\' menu located in the main menu bar.\n\
			</p>\n\
			<h2>Example Files</h2>\n\
			<table>\n\
				<tr>\n\
					<td><strong>Location</strong></td>\n\
					<td><span class=\"installPath\"></span></td>\n\
				</tr>\n\
				<tr>\n\
					<td><strong>Files</strong></td>\n\
					<td>\n\
						<div class=\"examplefile\">simplejscommand.js</div>\n\
						<div class=\"examplefile\">simplepycommand.py</div>\n\
						<div class=\"examplefile\">simplevbscommand.vbs</div>\n\
						<div class=\"examplefile\">simplecommand.cpp</div>\n\
						<div class=\"examplefile\">GNUmakefile</div>\n\
						<div class=\"examplefile\">simplecommand.vcproj</div>\n\
						<div class=\"examplefile\">simplecscommand.cs</div>\n\
						<div class=\"examplefile\">simplecscommand.csproj</div>\n\
						<div class=\"examplefile\" folder=\"UndoRedo\">simpleundoredocommand.cpp</div>\n\
						<div class=\"examplefile\" folder=\"UndoRedo\">simpleundoredocommand.vcproj</div>\n\
						<div class=\"examplefile\" folder=\"UndoRedo\">GNUmakefile</div>\n\
					</td>\n\
				</tr>\n\
			</table>\n\
			<a name=\"build\"></a>\n\
			<h2>Running the Examples</h2>\n\
			<div id=\"toinstall\" style=\"DISPLAY: none\">\n\
				<p class=\"proc-head\">To install the example</p>\n\
				<ul>\n\
					<li>\n\
						<p>Connect to the Softimage SDK workgroup at\n\
							<span class=\"workgroupPath\">%XSISDK_ROOT%\\examples\\workgroup</span>.</p>\n\
						<ol>\n\
					<li>\n\
						In the <strong>Plug-in Manager</strong>, click the <strong>Workgroups</strong> tab.\n\
					<li>\n\
						Click <strong>File</strong> and then click <strong>Connect</strong>.\n\
					<li>\n\
						In the <strong>Connect to Workgroup</strong> dialog box, click <img src=\"..\\..\\doc\\shared\\bBrowse.gif\" />,\n\
						locate the workgroup folder and then click <strong>Select</strong>.\n\
					</li>\n\
					</li></li></ol></li></ul>\n\
				<p class=\"proc-head\">To view the help page for an example</p>\n\
				<ul>\n\
					<li>\n\
						Do one of the following:\n\
						<ul>\n\
							<li>\n\
								In the Plug-in Tree, expand the SDK examples workgroup, right-click the example\n\
								add-on and then click <strong>Help</strong>.\n\
							<li>\n\
								Open a Net View and click <img style=\"BOTTOM: -6px; POSITION: relative\" src=\"..\\..\\doc\\shared\\xsiweb.png\" />\n\
								to go to XSI Net local. In the top navigation bar, click <strong>add-ons</strong>,\n\
								and then click the SDK example add-on.\n\
							</li>\n\
						</li></ul>\n\
					\n\
				</li></ul>\n\
			</div>\n\
			<div>\n\
				<p class=\"proc-head\">To run the Simple Command example</p>\n\
				<ul>\n\
					<li>\n\
						<p>In the script editor, type the command and click <strong>Run</strong>:</p>\n\
						<pre><span class=\"comment\">// [JScript]</span>\n\
SimpleJSCommand( \"Hello\" );\n\
SimpleJSCommand();\n\
SimpleJSCommand( 33 );\n\
						<pre><span class=\"comment\"># [Python] </span>\n\
Application.SimplePYCommand( \"Python\" )\n\
						<pre><span class=\"comment\">\' [VBScript]</span>\n\
SimpleVBSCommand \"How you doing?\"\n\
						<pre><span class=\"comment\">// [C++]</span>\n\
SimpleCPPCommand( \"Goodbye\" );\n\
						<pre><span class=\"comment\">// [C#]</span>\n\
CreatePrim( \"Cone\", \"MeshSurface\" )\n\
SimpleCSCommand( null, True );\n\
</pre>\n\
					</pre></pre></pre></pre></li>\n\
				</ul>\n\
			</div>\n\
			<div>\n\
				<p class=\"proc-head\">To run the Simple Undoable Custom Command example</p>\n\
				<ul>\n\
					<li>\n\
						From the <strong>Undoable Custom Command</strong> menu in the main menu bar, select <strong>Create Sample View</strong>\n\
						to create one or more NetView windows.\n\
					<li>\n\
						Select the Undo menu item in the Edit menu of the main menu bar. The first NetView window created should go\n\
						back to its original position.\n\
					<li>\n\
						Select Redo to move the window back in place.</li>\n\
				</li></li></ul>\n\
			</div>\n\
\n\
			<a name=\"build\"></a>\n\
			<h2>Building the C++ Examples</h2>\n\
			<p>Follow the instructions below to build the examples.</p>\n\
			<div id=\"windows-build\">\n\
				<p class=\"proc-head\">To build the Simple Command example on Windows</p>\n\
				<ol>\n\
					<li>\n\
						<p><span class=\"sishell\">Open</span>\n\
							a Softimage command prompt, and type <strong>devenv</strong> to start Visual Studio\n\
							.NET.</p>\n\
						<p>Starting Visual Studio .NET from a Softimage command prompt ensures that environment\n\
							variables such as XSISDK_ROOT are set (otherwise you\'ll get build and link\n\
							errors).</p>\n\
						<p><strong>Tip</strong> To load the\n\
							<span class=\"devenv\" vcproj=\"simplecommand.vcproj\">Simple Command</span>\n\
							project from the command line, type:</p>\n\
						<pre>devenv <span class=\"installPath\">cppsrc\\simplecommand.vcproj</span></pre>\n\
					<li>\n\
					In Visual Studio .NET, open the project file .vcproj.\n\
					<li>\n\
						Select a configuration (Win32/Win64 Release or Debug) and build the DLL.\n\
					</li>\n\
				</li></li></ol>\n\
			</div>\n\
			<div id=\"linux-build\">\n\
				<p class=\"proc-head\">To build the Simple Command example on Linux</p>\n\
				<ol>\n\
					<li>\n\
						<p>In a shell (tcsh) window, type:</p>\n\
						<pre>source $XSI_HOME/<span class=\"linuxExt\">.xsi_&lt;xsi_version&gt;</span></pre>\n\
					<li>\n\
						<p>Change directories to</p>\n\
						<pre><span class=\"installPath\">cppsrc</span></pre>\n\
					<li>\n\
						<p>To remove all intermediate files before building the example, run this command:</p>\n\
						<pre>gmake clean</pre>\n\
					<li>\n\
						<p />\n\
						To compile the example, run this command:\n\
						<p /><pre>gmake</pre>\n\
					</li>\n\
				</li></li></li></ol>\n\
			</div>\n\
			<div id=\"windows-build\">\n\
				<p class=\"proc-head\">To build the Simple Undoable Command example on Windows</p>\n\
				<ol>\n\
					<li>\n\
						<p><span class=\"sishell\">Open</span>\n\
							a Softimage command prompt, and type <strong>devenv</strong> to start Visual Studio\n\
							.NET.</p>\n\
						<p>Starting Visual Studio .NET from a Softimage command prompt ensures that environment\n\
							variables such as XSISDK_ROOT are set (otherwise you\'ll get build and link\n\
							errors).</p>\n\
						<p><strong>Tip</strong> To load the\n\
							<span class=\"devenv\" vcproj=\"simpleundoredocommand.vcproj\">Simple Undoable Command</span>\n\
							project from the command line, type:</p>\n\
						<pre>devenv <span class=\"installPath\">UndoRedo\\simpleundoredocommand.vcproj</span></pre>\n\
					<li>\n\
					In Visual Studio .NET, open the project file .vcproj.\n\
					<li>\n\
						Select a configuration (Win32/Win64 Release or Debug) and build the DLL.\n\
					</li>\n\
				</li></li></ol>\n\
			</div>\n\
			<div id=\"linux-build\">\n\
				<p class=\"proc-head\">To build the Simple Undoable Command example on Linux</p>\n\
				<ol>\n\
					<li>\n\
						<p>In a shell (tcsh) window, type:</p>\n\
						<pre>source $XSI_HOME/<span class=\"linuxExt\">.xsi_&lt;xsi_version&gt;</span></pre>\n\
					<li>\n\
						<p>Change directories to</p>\n\
						<pre><span class=\"installPath\">UndoRedo</span></pre>\n\
					<li>\n\
						<p>To remove all intermediate files before building the example, run this command:</p>\n\
						<pre>gmake clean</pre>\n\
					<li>\n\
						<p />\n\
						To compile the example, run this command:\n\
						<p /><pre>gmake</pre>\n\
					</li>\n\
				</li></li></li></ol>\n\
			</div>\n\
			<h2>Building the C# Simple Custom Example</h2>\n\
			<p>Follow these instructions to build the C# plug-in.</p>\n\
			<p><b>Note:</b> You can either use Visual Stusio .NET 2005 or Visual C# 2005 Express Edition to build the example. Visual C# Express can be dowloaded freely at http://msdn.microsoft.com/vstudio/express/visualcsharp/.</p>\n\
			<div id=\"windows-build\">\n\
				<p class=\"proc-head\">To build the example on Windows</p>\n\
				<ol>\n\
					<li>\n\
						<p><span class=\"sishell\" cssrc=\"cssrc\">Open</span>\n\
							a Softimage command prompt, and type <strong>devenv</strong> to start Visual Studio .NET.</p>\n\
						<p>Starting Visual Studio .NET or Visual C# Express from a Softimage command prompt ensures that environment variables such as XSI_USERHOME are set (otherwise you\'ll get build and link errors).</p>\n\
						<p><strong>Tip</strong> To load the <span class=\"devenv\" csproj=\"cssrc\\SimpleCSCommand.csproj\">SimpleCommand</span> project from the command line, type:</p>\n\
						<pre>devenv <span class=\"installPath\">cssrc\\SimpleCSCommand.csproj</span></pre>\n\
					<li>\n\
					In Visual Studio .NET, open the project file .csproj.\n\
					<li>\n\
						Select a configuration (Release or Debug) and build the DLL.\n\
					</li>\n\
				</li></li></ol>\n\
			</div>\n\
\n\
			<div id=\"keywords\">\n\
				<h2>Keywords</h2>\n\
				<p>This example uses the following keywords:</p>\n\
				<p>C++, JScript, Python, VBScript, C++ example, JScript example, Python example, VBScript example, C# example,\n\
					RegisterCommand, Init, Execute, ArgumentArray, GetArguments, PutUserData, Undo, Redo,\n\
					CValue::siPtrType, Command, Context, GetSource,\n\
				</p>\n\
			</div>\n\
		</div>\n\
	      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";