var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siMsgBoxFlags</title>\n\
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
            <h1>siMsgBoxFlags</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siMsgBoxFlags</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Flags values supported by the <a href=\"#!/url=./si_om/XSIUIToolkit.MsgBox.html\">XSIUIToolkit.MsgBox</a> command.  \n\
These are identical the arguments supported by the VBScript MsgBox() and\n\
Win32 ::MessageBox() functions.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>siMsgBoxFlags.siMsgOkOnly                                                   // 0\n\
siMsgBoxFlags.siMsgOkCancel                                                 // 1\n\
siMsgBoxFlags.siMsgAbortRetryIgnore                                         // 2\n\
siMsgBoxFlags.siMsgYesNoCancel                                              // 3\n\
siMsgBoxFlags.siMsgYesNo                                                    // 4\n\
siMsgBoxFlags.siMsgRetryCancel                                              // 5\n\
siMsgBoxFlags.siMsgCritical                                                 // 16\n\
siMsgBoxFlags.siMsgQuestion                                                 // 32\n\
siMsgBoxFlags.siMsgExclamation                                              // 48\n\
siMsgBoxFlags.siMsgInformation                                              // 64\n\
siMsgBoxFlags.siMsgDefaultButton1                                           // 0\n\
siMsgBoxFlags.siMsgDefaultButton2                                           // 256\n\
siMsgBoxFlags.siMsgDefaultButton3                                           // 512</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMsgOkOnly\"> </a>siMsgOkOnly		</td>\n\
		<td class=\"example\">0		</td>\n\
		<td>\n\
Display OK button only.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMsgOkCancel\"> </a>siMsgOkCancel		</td>\n\
		<td class=\"example\">1		</td>\n\
		<td>\n\
Display OK and Cancel buttons.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMsgAbortRetryIgnore\"> </a>siMsgAbortRetryIgnore		</td>\n\
		<td class=\"example\">2		</td>\n\
		<td>\n\
Display Abort, Retry, and Ignore buttons.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMsgYesNoCancel\"> </a>siMsgYesNoCancel		</td>\n\
		<td class=\"example\">3		</td>\n\
		<td>\n\
Display Yes, No, and Cancel buttons.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMsgYesNo\"> </a>siMsgYesNo		</td>\n\
		<td class=\"example\">4		</td>\n\
		<td>\n\
Display Yes and No buttons.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMsgRetryCancel\"> </a>siMsgRetryCancel		</td>\n\
		<td class=\"example\">5		</td>\n\
		<td>\n\
Display Retry and Cancel buttons.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMsgCritical\"> </a>siMsgCritical		</td>\n\
		<td class=\"example\">16		</td>\n\
		<td>\n\
Display Critical Message icon. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMsgQuestion\"> </a>siMsgQuestion		</td>\n\
		<td class=\"example\">32		</td>\n\
		<td>\n\
Display Query icon.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMsgExclamation\"> </a>siMsgExclamation		</td>\n\
		<td class=\"example\">48		</td>\n\
		<td>\n\
Display Warning Message icon.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMsgInformation\"> </a>siMsgInformation		</td>\n\
		<td class=\"example\">64		</td>\n\
		<td>\n\
Display Information Message icon.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMsgDefaultButton1\"> </a>siMsgDefaultButton1		</td>\n\
		<td class=\"example\">0		</td>\n\
		<td>\n\
First button is default.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMsgDefaultButton2\"> </a>siMsgDefaultButton2		</td>\n\
		<td class=\"example\">256		</td>\n\
		<td>\n\
Second button is default.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMsgDefaultButton3\"> </a>siMsgDefaultButton3		</td>\n\
		<td class=\"example\">512		</td>\n\
		<td>\n\
Third button is default.		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_om/XSIUIToolkit.MsgBox.html\">XSIUIToolkit.MsgBox</a> <a href=\"#!/url=./si_cpp/classXSI_1_1UIToolkit.html#MsgBox\">UIToolkit::MsgBox</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";