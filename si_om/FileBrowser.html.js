var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>FileBrowser</title>\n\
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
            <h1>FileBrowser</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">FileBrowser</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_FileBrowser\">Object Hierarchy</a></p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v2.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> A simple file browser that can be used in scripts to let users specify the full path name of a single file that needs to be either saved or opened.  You can access the FileBrowser through the <a href=\"#!/url=./si_om/XSIUIToolkit.html\">XSIUIToolkit</a> object. This is a concrete (leaf) object.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FileBrowser.ShowOpen.html\">ShowOpen</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FileBrowser.ShowSave.html\">ShowSave</a>		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Properties</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FileBrowser.DialogTitle.html\">DialogTitle</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FileBrowser.FileBaseName.html\">FileBaseName</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FileBrowser.FileExtension.html\">FileExtension</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FileBrowser.FileName.html\">FileName</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FileBrowser.FilePath.html\">FilePath</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FileBrowser.FilePathName.html\">FilePathName</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FileBrowser.Filter.html\">Filter</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FileBrowser.InitialDirectory.html\">InitialDirectory</a>		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'VBScript example\n\
dim oFileBrowser\n\
set oFileBrowser = XSIUIToolkit.FileBrowser\n\
oFileBrowser.DialogTitle = \"Select a file\"	\' set the title of the file browser\n\
oFileBrowser.InitialDirectory = \"c:\\\"		\' set the initial directory\n\
oFileBrowser.FileBaseName = \"foo\"			\' set the default file name\n\
oFileBrowser.Filter = \"Text (*.txt)|*.txt|All Files (*.*)|*.*||\"	\' set the filters\n\
oFileBrowser.ShowOpen					\' show an open file dialog\n\
logmessage VB_LF\n\
\' if the user selected a file\n\
If oFileBrowser.FilePathName &lt;&gt; \"\" Then\n\
\' display info on the selected file\n\
	logmessage \"Details on the file that was selected:\"\n\
	logmessage \"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\"\n\
	logmessage \"File path name : \" &amp; oFileBrowser.FilePathName\n\
	logmessage \"File Name      : \" &amp; oFileBrowser.FileName\n\
	logmessage \"File base name : \" &amp; oFileBrowser.FileBaseName\n\
	logmessage \"File extension : \" &amp; oFileBrowser.FileExtension\n\
	logmessage \"Path           : \" &amp; oFileBrowser.FilePath\n\
\' the user did not select a file\n\
Else\n\
logmessage \"User pressed cancel\"\n\
End If</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// JScript example of FileBrowser object\n\
var initialDir ;\n\
if ( Application.Platform == \"Win32\" )\n\
{\n\
	initialDir = \"c:\\\\temp\\\\\" ;\n\
}\n\
else\n\
{\n\
	initialDir = \"/var/tmp\" ;\n\
}\n\
var oUIToolkit = new ActiveXObject(\"XSI.UIToolKit\") ;\n\
var oFileBrowser = oUIToolkit.FileBrowser ;\n\
oFileBrowser.DialogTitle = \"Select a file\" ;\n\
oFileBrowser.InitialDirectory = initialDir ;\n\
oFileBrowser.Filter = \"All Files (*.*)|*.*||\" ;\n\
oFileBrowser.ShowOpen() ; \n\
if ( oFileBrowser.FilePathName != \"\" )\n\
{\n\
	//display info on the selected file\n\
	logmessage( \"\\nDetails on the file that was selected:\" );\n\
	logmessage( \"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\");\n\
	logmessage( \"File path name : \" + oFileBrowser.FilePathName);\n\
	logmessage( \"File Name      : \" + oFileBrowser.FileName);\n\
	logmessage( \"File base name : \" + oFileBrowser.FileBaseName);\n\
	logmessage( \"File extension : \" + oFileBrowser.FileExtension);\n\
	logmessage( \"Path           : \" + oFileBrowser.FilePath);\n\
}\n\
else\n\
{\n\
	logmessage( \"User pressed cancel\" ) ;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/XSIUIToolkit.html\">XSIUIToolkit</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";