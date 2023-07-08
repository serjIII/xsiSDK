var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSIInputBox</title>\n\
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
            <h1>XSIInputBox</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">XSIInputBox</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Exposes VBScript\'s InputBox to other scripting languages. This is a very useful little function for getting information\n\
from a user.  It displays a modal dialog box with a question and an edit box for the user to enter some data.<br /><br />\n\
Note: When running in batch mode XSIInputBox will just return the value of the Default argument.<br /><br />\n\
Tip: To collect more sophisticated information from the user, for example file paths, colors, or options out of a list, it\n\
is better the create a <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> or use the services of the <a href=\"#!/url=./si_om/XSIUIToolkit.html\">XSIUIToolkit</a> or \n\
<a href=\"#!/url=./si_om/XSIDialog.html\">XSIDialog</a> objects. \n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oString = XSIInputBox( [Prompt], [Title], [Default] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>The <a href=\"#!/url=./files/String.htm\">String</a> entered by the user, or an empty string if the user cancelled or chose not to enter anything.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Prompt		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Text that tells the user what they should type in		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Title		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Text to show in the title bar of the dialog box		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Default		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
A suggested response for the user, which is automatically returned if running in batch mode.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	Example showing how to ask the user for a unique name for a grid object.  A loop is used to give \n\
	the user another chance if they pick the name of an existing object\n\
*/\n\
while(true)\n\
{\n\
	var strObjName = XSIInputBox( \n\
						\"Please pick a name for the new object\", \n\
						\"Time for a Decision\", \n\
						\"Foo\" ) ;\n\
	if ( strObjName != \"\" )\n\
	{\n\
		var oExisting = Dictionary.GetObject( strObjName, false ) ;\n\
		\n\
		if ( oExisting == null )\n\
		{			\n\
			ActiveSceneRoot.AddGeometry( \"Grid\",\"MeshSurface\", strObjName ) ;\n\
			break ;			\n\
		}\n\
		else\n\
		{\n\
			XSIUIToolkit.MsgBox( \"That object already exists\\n\"+\n\
					\"You have to think of a new name\" ) ;\n\
		}\n\
	}\n\
	else\n\
	{\n\
		// User cancelled\n\
		break ;\n\
	}\n\
}</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\'	Example showing how to ask the user for a unique name for a grid object.  A loop is used \n\
\'	to give the user another chance if they pick the name of an existing object\n\
\'\n\
do while true\n\
	strObjName = XSIInputBox( _\n\
						\"Please pick a name for the new object\", _\n\
						\"Time for a Decision\", _\n\
						\"Foo\" )\n\
	if strObjName &lt;&gt; \"\" then\n\
		set oExisting = Dictionary.GetObject( strObjName, false )\n\
		\n\
		if typename( oExisting ) = \"Nothing\" then\n\
			ActiveSceneRoot.AddGeometry \"Grid\",\"MeshSurface\", strObjName \n\
			exit do\n\
		else\n\
			XSIUIToolkit.MsgBox( \"That object already exists\" &amp; vbCrLf &amp; _\n\
					\"You have to think of a new name\" )\n\
		end if	\n\
	else\n\
		\' User cancelled\n\
		exit do\n\
	end if\n\
loop</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/XSIUIToolkit.html\">XSIUIToolkit</a> <a href=\"#!/url=./si_om/XSIDialog.html\">XSIDialog</a> <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> <a href=\"#!/url=./si_om/PickFolder.html\">PickFolder</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";