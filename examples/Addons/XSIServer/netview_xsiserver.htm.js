var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../../../../../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=ISO-8859-1\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSIServer</title>\n\
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
</style><link href=\"examples/Addons/XSIServer/doc/shared/examples.css\" type=\"text/css\" rel=\"StyleSheet\" /><script>$(document).ready(function() { yepnope.injectJs(\"./examples/Addons/XSIServer/doc/shared/utils.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./examples/Addons/scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./examples/Addons/scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>XSIServer</h1>\n\
         </div>\n\
\n\
		<div class=\"body\"><a name=\"top\"></a><img class=\"netview\" style=\"PADDING-RIGHT: 6px; FLOAT: left\" src=\"netview_xsiserver.jpg\" />\n\
			<h1>Softimage TCP Server</h1>\n\
			<p /><br /><br />			\n\
This plugin provides 2 examples of a TCP/IP server implementation for Softimage. The first example is a C# server which manages \n\
client connections asynchronously and can execute requests received from client connections.\n\
\n\
<ul>\n\
<b>Note</b>: The C# example is not available on Linux.\n\
</ul>\n\
<p />\n\
<br />\n\
The XSIClientSample command-line application can be used for sending requests to the Softimage server. <br />\n\
\n\
<ul>\n\
Example:<br />\n\
<pre>\n\
XSIClientSample.exe \"log|my message\" -> logs \"my message\" in the history window.\n\
XSIClientSample.exe \"script|c:\\\\temp\\\\test.vbs\" -> executes the test.vbs script in Softimage (any Softimage script language can be used)\n\
</pre>\n\
Note: The above examples work if the XSIServer is connected on the localhost (127.0.0.1) on port 10000.<br /><br />\n\
\n\
You can also specify the full address and connection port to XSIClientSample.exe:\n\
<pre>\n\
XSIClientSample.exe \"log|Send to 172.24.40.132 on port 50010\" \"172.24.40.132\" 50010\n\
XSIClientSample.exe \"script|c:\\\\temp\\\\test.vbs\" \"172.24.40.126\" 50010\n\
</pre>\n\
</ul>\n\
<p />\n\
The second example is a python TCP server which also manage client connections asynchronously. The tcpclient.py example \n\
can be used for sending requests to the TCP server.\n\
\n\
<ul>\n\
Example:<br />\n\
<pre>\n\
##tcpclient.py\n\
from socket import *\n\
 \n\
HOST = \'localhost\'\n\
PORT = 5007    #our port from before\n\
ADDR = (HOST,PORT)\n\
BUFSIZE = 4096\n\
 \n\
cli = socket( AF_INET,SOCK_STREAM)\n\
cli.connect((ADDR))\n\
\n\
cli.send(\'xyz_request:Torus\')\n\
 \n\
data = cli.recv(1024)\n\
	\n\
print \'request result %s\' % (data) \n\
\n\
cli.close()\n\
</pre>\n\
\n\
\n\
			<p />\n\
			<h2>Example Files</h2>\n\
			<div class=\"body\">\n\
				<table>\n\
					<tr>\n\
						<td><strong>Location</strong></td>\n\
						<td><span class=\"installPath\"></span></td>\n\
					</tr>\n\
					<tr>\n\
						<td><strong>Files</strong></td>\n\
						<td>\n\
							<div class=\"examplefile\" folder=\"cssrc\">XSIServer.cs</div>\n\
							<div class=\"examplefile\" folder=\"cssrc\">XSITCP.cs</div>\n\
							<div class=\"examplefile\" folder=\"cssrc\">XSIServiceProvider.cs</div>\n\
							<div class=\"examplefile\" folder=\"cssrc\">XSIHelpers.cs</div>\n\
							<div class=\"examplefile\" folder=\"XSIClientSample\">main.cs</div>\n\
							<div class=\"examplefile\" folder=\"Application/Plugins\">si_tcp_server.py</div>\n\
							<div class=\"examplefile\" folder=\"Application/Plugins\">tcpclient.py</div>\n\
						</td>\n\
					</tr>\n\
				</table>\n\
				<a name=\"build\"></a>\n\
				<h2>Running the examples</h2>\n\
				<div id=\"toinstall\" style=\"DISPLAY: none\">\n\
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
									to go to Softimage Net local. In the top navigation bar, click <strong>add-ons</strong>,\n\
									and then click the SDK example add-on.\n\
								</li>\n\
							</li></ul>\n\
						\n\
					</li></ul>\n\
				</div>\n\
				<div>\n\
					<p class=\"proc-head\">To run the C# TCP Server Example</p>\n\
					<ul>\n\
						<li>\n\
							From the <strong>XSIServer_Menu</strong> menu located in the main menu bar, click <strong>\n\
							Properties</strong>. The Softimage Server property page opens.\n\
						</li>\n\
						<li>Click the <strong>Start</strong> radio-button.</li>\n\
						<li>\n\
							<p><span class=\"sishell\" cssrc=\"XSIClientSample\">Open</span> a Softimage command prompt, and type the following:</p>\n\
							<pre>XSIClientSample.exe \"log|Message sent from XSIClientSample\"</pre>\n\
						</li>\n\
						<li>\n\
							The Softimage Scripting Editor window displays the message (if you have activated the <strong>Log Verbose Messages</strong> preference).\n\
						</li>\n\
					</ul>\n\
				</div>\n\
\n\
				<div>\n\
					<p class=\"proc-head\">To run the python TCP Server Example</p>\n\
					<ul>\n\
						<li>\n\
							From the <strong>SI TCP Server</strong> menu located in the main menu bar, click <strong>\n\
							Start</strong> to run the server. \n\
						</li>\n\
						<li>\n\
							<p><span class=\"sishell\">Open</span> a Softimage command prompt, and type the following:</p>\n\
							<pre>python.exe tcpclient.py</pre>\n\
						</li>						\n\
						<li>\n\
							A new torus should be created in Softimage and the following is logged on the command-line<strong>request result done</strong>.\n\
						</li>\n\
						\n\
					</ul>\n\
				</div>\n\
\n\
				<a name=\"build\"></a>\n\
				<h2>Building the Softimage C# TCP Server Example</h2>\n\
				<p>\n\
				Softimage SDK includes a compiled version of XSIServer and XSIClientSample. If you want to modify the\n\
				code, you can rebuild the example by following these instructions.</p>\n\
			<div id=\"windows-build\">\n\
				<p class=\"proc-head\">To build the example on Windows</p>\n\
				<ol>\n\
					<li>\n\
						<p><span class=\"sishell\" cssrc=\"cssrc\">Open</span>\n\
							an Softimage command prompt, and type <strong>devenv</strong> to start Visual Studio\n\
							.NET.</p>\n\
						<p>Starting Visual Studio .NET from an Softimage command prompt ensures that environment\n\
							variables such as XSI_HOME are set (otherwise you\'ll get build and link\n\
							errors).</p>\n\
						<p><strong>Tip</strong> To load the\n\
							<span class=\"devenv\" csproj=\"cssrc\\XSIServer.csproj\">XSIServer</span>\n\
							project from the command line, type:</p>\n\
						<pre>devenv <span class=\"installPath\">cssrc\\XSIServer.csproj</span></pre>\n\
					<li>In Visual Studio .NET, open the project file <tt>XSIServer.csproj</tt>.</li>\n\
					<li>Select a configuration (Release or Debug) and build the DLL.</li>\n\
					<li>To build XSIClientSample: open the project file <span class=\"devenv\" csproj=\"XSIClientSample\\XSIClientSample.csproj\">XSIClientSample.csproj</span>.</li>\n\
					<li>Select a configuration (Release or Debug) and build the DLL.</li>\n\
\n\
				</li></ol>\n\
			</div>\n\
\n\
				<div id=\"keywords\">\n\
					<h2>Keywords</h2>\n\
					<p>This example uses the following keywords:</p>\n\
					<p>C#, TCP/IP, RegisterCommand, RegisterProperty, RegisterMenu, RegisterTimerEvent.\n\
					</p>\n\
				</div>\n\
			</div>\n\
		</ul></div>\n\
	      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";