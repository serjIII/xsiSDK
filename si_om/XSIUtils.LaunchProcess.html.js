var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSIUtils.LaunchProcess</title>\n\
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
</style><link rel=\"stylesheet\" href=\"si_om/css/en.css\" type=\"text/css\" /><script>$(document).ready(function() { yepnope.injectJs(\"./si_om/lib/utils.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>XSIUtils.LaunchProcess</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/XSIUtils.html\">XSIUtils</a>.LaunchProcess</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Launches an external process such as a batch file, external text editor or command prompt. <br /><br />\n\
On Linux this method is identical to the <a href=\"#!/url=./si_cmds/System.html\">System</a> command except that no message is logged \n\
in the Script History window. On Windows the <a href=\"#!/url=./si_cmds/System.html\">System</a> command will pop up a temporary command \n\
prompt, but this method will not.  For further details please refer to the Win32 documentation for CreateProcess.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Int32 XSIUtils.LaunchProcess( String in_AppAndCommandLineArgs, Boolean in_bBlock, Object& in_Directory );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oLong = XSIUtils.LaunchProcess( CommandLine, [Blocking], [StartupDirectory] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./files/Long.htm\">Long</a> - When blocking is set to true the exit code of the child process is returned</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">CommandLine		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		The executable name and any command line options.  Be sure to use extra quote characters if there\n\
		are space characters in any path or filename in the string.  For example the quotes in \n\
		\'\"C:\\My Programs\\myeditor.exe\"\' prevent Softimage from trying to execute an executable named \'C:\\My.exe\'.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Blocking		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
\n\
		If blocking is set to true then Softimage will not return from this method until the child process \n\
		has finished execution.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
false			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">StartupDirectory		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		An initial directory for the process.  When not set the Process will launch with the same\n\
		directory as the current Softimage working directory.  This option is useful when launching \n\
		command prompts.\n\
			</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\'	This example launchs a command prompt with the directory set \n\
\'	to the current user path\n\
\'\n\
\' The new command prompt inherits all the environmental variables\n\
\' from Softimage so it will behave like a Softimage command prompt\n\
startDir = Application.InstallationPath( siUserPath )\n\
bBlocking = false 		\' We don\'t want the command prompt to freeze Softimage\n\
if Application.Platform = \"Win32\" then\n\
	XSIUtils.LaunchProcess \"cmd /C start cmd /K title Softimage Command Prompt\", bBlocking, startDir  \n\
else\n\
	XSIUtils.LaunchProcess \"xterm\", bBlocking, startDir\n\
end if</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example shows how the XSIUtils.LaunchProcess method can be used to execute an \n\
	external process. In this case it shows spdlcheck can be used to test a spdl directly \n\
	from within scripting.\n\
*/\n\
if ( Application.Platform == \"Win32\" )\n\
{\n\
	var slash = \"\\\\\" ;	\n\
}\n\
else\n\
{\n\
	var slash = \"/\" ;\n\
}\n\
// Path to one of the spdl files that ships with Softimage\n\
var twistSpdl = Application.InstallationPath( siFactoryPath ) + slash + \"Application\" \n\
			+ slash + \"spdl\" + slash + \"twistop.spdl\" ;\n\
var strResults = SpdlCheckFile( twistSpdl ) ;\n\
if ( strResults == \"\" )\n\
{\n\
	LogMessage( \"Spdl is OK\" ) ;\n\
}\n\
else\n\
{\n\
	LogMessage( \"Spdl is busted:\\n\" + strResults ) ;\n\
}\n\
// Helper function that runs spdlcheck on the provided file path. \n\
// Returns:\n\
//  - an empty string if the spdl is ok.  \n\
//  - the error details output by spdlcheck if there is a problem.\n\
function SpdlCheckFile( in_file )\n\
{			\n\
	// We will launch \"spdlcheck\" and tell it to output\n\
	// its results into a temporary file	\n\
	var tmpFile = Application.InstallationPath( siUserPath ) + slash\n\
			+ \"spdlcheckoutput.tmp\" ;\n\
	var cmd = \"spdlcheck -nologo -noverbose -out \\\"\" + tmpFile + \"\\\" \\\"\" + in_file + \"\\\"\";\n\
	Logmessage( \"This command line will be executed:\\n\" + cmd ) ;\n\
	// Specify true for the blocking argument so that our script waits until spdlcheck\n\
	// has finished before trying to read the output file\n\
	XSIUtils.LaunchProcess( cmd, true ) ;\n\
	var oFSO = new ActiveXObject( \"Scripting.FileSystemObject\" ) ;\n\
	var oTextFile = oFSO.OpenTextFile(tmpFile, 1 ) ;\n\
	// We expect a string like:\n\
	// \"Compilation succeeded c:\\Softimage\\&lt;....&gt;\\Application\\spdl\\twistop.spdl (XSI Object)\"\n\
	fileAsStr = oTextFile.ReadAll() ;\n\
	oTextFile.Close() ;\n\
	oFSO.DeleteFile( tmpFile ) ;\n\
	// If we find the string \"Compilation succeeded\" then we would know that \n\
	// we were successful\n\
	if ( -1 != fileAsStr.search( /Compilation succeeded/ ) )\n\
	{\n\
		return \"\" ;\n\
	}\n\
	// Return the error details\n\
	return fileAsStr ;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/System.html\">System</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";