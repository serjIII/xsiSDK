var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSIUIToolkit.MsgBox</title>\n\
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
            <h1>XSIUIToolkit.MsgBox</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/XSIUIToolkit.html\">XSIUIToolkit</a>.MsgBox</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> This method is identical to the vbscript MsgBox function and provides the ability \n\
to pop up a simple modal message window in Softimage. The application is frozen and the \n\
user is forced to click a button to dismiss the window.  \n\
<br /><br />\n\
By default only an OK button is displayed, but flags like siMsgAbortRetryIgnore\n\
and siMsgYesNo are supported to change this behavior.\n\
<br /><br />\n\
By default no icon is displayed, but flags like siMsgQuestion can be used to help \n\
indicate the nature and importance of the message.  \n\
<br /><br />\n\
This method is better to use than the vbscript native MsgBox function because it \n\
does not block execution of scripts in batch mode.  When Softimage runs in batch mode\n\
the routine returns immediately with the default button as the returned value.  \n\
By default the first button is considered the default button, but this can be \n\
changed by specifying the flag siMsgDefaultButton2 or siMsgDefaultButton3.\n\
<br /><br />\n\
For further details please refer to the vbscript documentation on MsgBox or\n\
the Win32 documentation on MessageBox.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Int32 XSIUIToolkit.MsgBox( String in_Msg, Int32 in_flags, String in_Caption );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = XSIUIToolkit.MsgBox( Message, [Flags], [Caption] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/siMsgButtonPressed.html\">siMsgButtonPressed</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Message		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Message to display on the screen		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Flags		</td>\n\
		<td><a href=\"#!/url=./si_om/siMsgBoxFlags.html\">siMsgBoxFlags</a>		</td>\n\
		<td>\n\
Flags to control the appearance of the dialog.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Caption		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		Text to show in the title of the Message Box.  Often this is used\n\
		to describe the source of the message box, for example the name of \n\
		a plug-in or perhaps a script filename.  By default the standard \n\
		Softimage title is used.\n\
			</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// In batch mode buttonPressed is always \"siMsgYes\"\n\
var buttonPressed = XSIUIToolkit.Msgbox( \"Is this example exciting?\", \n\
			siMsgYesNo | siMsgQuestion, \"SDK Example\" ) ;\n\
if ( buttonPressed == siMsgNo )\n\
{\n\
	LogMessage( \"I am sorry, I will try harder next time.\" ) ;\n\
}\n\
else\n\
{\n\
	LogMessage( \"Thanks, if software had emotions I\'d be feeling good\" ) ;\n\
}\n\
// Try to encourage the user to select the second button\n\
// In batch mode buttonPressed is always siMsgCancel\n\
buttonPressed = XSIUIToolkit.Msgbox( \"Please click cancel\", siMsgOKCancel | siMsgDefaultButton2 );\n\
if ( buttonPressed == siMsgCancel )\n\
{\n\
	LogMessage( \"Thank you\" ) ;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";