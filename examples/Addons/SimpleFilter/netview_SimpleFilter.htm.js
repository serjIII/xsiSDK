var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../../../../../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=ISO-8859-1\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SimpleFilter</title>\n\
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
</style><link rel=\"StyleSheet\" href=\"examples/Addons/SimpleFilter/doc/shared/examples.css\" type=\"text/css\" /><script>$(document).ready(function() { yepnope.injectJs(\"./examples/Addons/SimpleFilter/doc/shared/utils.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./examples/Addons/scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./examples/Addons/scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>SimpleFilter</h1>\n\
         </div>\n\
\n\
		<div class=\"body\"><a name=\"top\"></a> <img class=\"netview\" src=\"netview_SimpleFilter.jpg\" style=\"PADDING-RIGHT:6px;FLOAT:left\" />\n\
			<h1>Simple Filter</h1>\n\
			<p>\n\
				This example shows how to implement a custom filter as a self-installing\n\
				plug-in. Softimage installs the custom filter at startup and automatically adds it to\n\
				the filter menu in the Select panel of the main command area. When Simple\n\
				Filter is the active selection filter, you cannot select polygon meshes with\n\
				less than fifty vertices.\n\
			</p>\n\
			<p>\n\
				The example includes JScript, Python, VBScript, and C++ versions of the filter.\n\
				A more advanced C# filter called Triangle Filter is also included here.\n\
				You can find more examples of custom filters in the\n\
				%XSISDK_ROOT%\\Application\\Filters folder.\n\
			</p>\n\
			<h2>Example Files</h2>\n\
			<table>\n\
				<tr>\n\
					<td><strong>Location</strong></td>\n\
					<td><span class=\"installPath\"></span>\n\
					</td>\n\
				</tr>\n\
				<tr>\n\
					<td><strong>Files</strong></td>\n\
					<td>\n\
						<div class=\"examplefile\">simplejsfilter.js</div>\n\
						<div class=\"examplefile\">simplepyfilter.py</div>\n\
						<div class=\"examplefile\">simplevbsfilter.vbs</div>\n\
						<div class=\"examplefile\">simplefilter.cpp</div>\n\
						<div class=\"examplefile\">GNUmakefile</div>\n\
						<div class=\"examplefile\">simplefilter.vcproj</div>\n\
						<div class=\"examplefile\" folder=\"cssrc_TriangleFilter\">CSTriangleFilter.cs</div>\n\
						<div class=\"examplefile\" folder=\"cssrc_TriangleFilter\">CSTriangleFilter.csproj</div>\n\
					</td>\n\
				</tr>\n\
			</table>\n\
			<!--\n\
<a name=\"build\"></a><h2>Running the Example</h2>\n\
 -->\n\
			<div id=\"toinstall\" style=\"DISPLAY:none\">\n\
				<p class=\"proc-head\">To install the example</p>\n\
				<ul>\n\
					<li>\n\
						<p>Connect to the Softimage SDK workgroup at\n\
							<span class=\"workgroupPath\">%XSISDK_ROOT%\\examples\\workgroup</span>.</p>\n\
						<ol>\n\
					<li>\n\
						In the <strong>Plug-in Manager</strong>, click the <strong>Workgroups</strong>\n\
					tab.\n\
					<li>\n\
						Click <strong>File</strong> and then click <strong>Connect</strong>.\n\
					<li>\n\
						In the <strong>Connect to Workgroup</strong> dialog box, click <img src=\"..\\..\\doc\\shared\\bBrowse.gif\" />,\n\
						locate the workgroup folder and then click <strong>Select</strong>.</li>\n\
					</li></li></ol> \n\
				</li></ul>\n\
				<p class=\"proc-head\">To view the help page for an example</p>\n\
				<ul>\n\
					<li>\n\
						Do one of the following:\n\
						<ul>\n\
							<li>\n\
								In the Plug-in Tree, expand the SDK examples workgroup, right-click the example\n\
								add-on and then click <strong>Help</strong>.\n\
							<li>\n\
								Open a Net View and click <img style=\"BOTTOM:-6px;POSITION:relative\" src=\"..\\..\\doc\\shared\\xsiweb.png\" />\n\
								to go to Softimage Net local. In the top navigation bar, click <strong>add-ons</strong>,\n\
								and then click the SDK example add-on.\n\
							</li>\n\
						</li></ul>\n\
					\n\
				</li></ul>\n\
			</div>\n\
			<div>\n\
				<p class=\"proc-head\">To run the example</p>\n\
				<ol>\n\
					<li>\n\
					Create some polygon mesh objects, such as a cube and a sphere.\n\
					<li>\n\
						<p>In the Select panel, click <img src=\"../../doc/shared/drop-arrow.gif\" /> to\n\
							display the list of filters.</p>\n\
						<div>\n\
							<img src=\"../../doc/shared/filters.gif\" />\n\
						</div>\n\
					<li>\n\
						In the list of filters, click <strong>Simple Filter</strong> (or <strong>JScript\n\
							Simple Filter</strong> or&nbsp;<strong>Python Simple Filter </strong>or <strong>\n\
							VBScript Simple Filter</strong> or <strong>CSTriangleFilter</strong>).\n\
					<li>\n\
						Try to select different polygon meshes. The custom filter limits the selection to meshes with at least fifty points. <br>\n\
						<b>Note 1:</b> The C# Triangle Filter limits the selection to triangles.</br>\n\
						<b>Note 2:</b> The python filter can be configured by clicking the PythonFilterMenu | PPG menu in the main menu bar.\n\
				        </li>\n\
				</li></li></li></ol>\n\
			</div>\n\
\n\
			<a name=\"build\"></a>\n\
			<h2>Building the C++ Example</h2>\n\
			<p>\n\
				Softimage SDK includes a compiled version of SimpleFilter. If you want to modify the\n\
				code, you can rebuild the example by following these instructions.</p>\n\
			<div id=\"windows-build\">\n\
				<p class=\"proc-head\">To build the example on Windows</p>\n\
				<ol>\n\
					<li>\n\
						<p><span class=\"sishell\">Open</span>\n\
							an Softimage command prompt, and type <strong>devenv</strong> to start Visual Studio\n\
							.NET.</p>\n\
						<p>Starting Visual Studio .NET from an Softimage command prompt ensures that environment\n\
							variables such as XSISDK_ROOT are set (otherwise you\'ll get build and link\n\
							errors).</p>\n\
						<p><strong>Tip</strong> To load the\n\
							<span class=\"devenv\" vcproj=\"SimpleFilter.vcproj\">SimpleFilter</span>\n\
							project from the command line, type:</p>\n\
						<pre>devenv <span class=\"installPath\">SimpleFilter.vcproj</span></pre>\n\
					<li>In Visual Studio .NET, open the project file <tt>.vcproj</tt>.</li>\n\
					<li>Select a configuration (Win32 Release or Win32 Debug) and build the DLL.</li>\n\
				</li></ol>\n\
			</div>\n\
			<div id=\"linux-build\">\n\
				<p class=\"proc-head\">To build the example on Linux</p>\n\
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
						To compile the example, run this command:<p />\n\
							<pre>gmake</pre>\n\
					</li>\n\
				</li></li></li></ol>\n\
			</div>\n\
\n\
			<a name=\"build\"></a>\n\
			<h2>Building the C# Triangle Filter Example</h2>\n\
				<p>\n\
				Softimage SDK includes a compiled version of C# Triangle Filter. If you want to modify the\n\
				code, you can rebuild the example by following these instructions.</p>\n\
			<div id=\"windows-build\">\n\
				<p class=\"proc-head\">To build the example on Windows</p>\n\
				<ol>\n\
					<li>\n\
						<p><span class=\"sishell\" cssrc=\"cssrc_TriangleFilter\">Open</span>\n\
							an Softimage command prompt, and type <strong>devenv</strong> to start Visual Studio\n\
							.NET.</p>\n\
						<p>Starting Visual Studio .NET from an Softimage command prompt ensures that environment\n\
							variables such as XSI_HOME are set (otherwise you\'ll get build and link\n\
							errors).</p>\n\
						<p><strong>Tip</strong> To load the\n\
							<span class=\"devenv\" csproj=\"cssrc_TriangleFilter\\CSTriangleFilter.csproj\">CSTriangleFilter</span>\n\
							project from the command line, type:</p>\n\
						<pre>devenv <span class=\"installPath\">cssrc_TriangleFilter\\CSTriangleFilter.csproj</span></pre>\n\
					<li>In Visual Studio .NET, open the project file <tt>.csproj</tt>.</li>\n\
					<li>Select a configuration (Release or Debug) and build the DLL.</li>\n\
\n\
				</li></ol>\n\
			</div>\n\
\n\
			<div id=\"keywords\">\n\
				<h2>Keywords</h2>\n\
				<p>This example uses the following keywords:</p>\n\
				<p>\n\
					C++, JScript, Python, VBScript, C++ example, JScript example,&nbsp;Python\n\
					example, VBScript example, RegisterFilter, siFilter3DObject, X3DObject, IsA,\n\
					siX3DObjectID, siPrimitiveID, SIObject, GetParent, Match, Context,\n\
					GetAttribute, Input, IsValid, GetActivePrimitive, GetGeometry, GetPoints,\n\
					GetCount, Applicable, Subset, GetArrayAttribute, Input, PutArrayAttribute,\n\
					PutUserData, GetUserData, CValue::siPtrType, Init, Reload, Term, ClassName\n\
				</p>\n\
			</div>\n\
		</div>\n\
	      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";