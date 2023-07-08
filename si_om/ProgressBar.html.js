var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ProgressBar</title>\n\
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
            <h1>ProgressBar</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ProgressBar</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_ProgressBar\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1ProgressBar.html\">ProgressBar</a></p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v3.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> A progress bar is a control that indicates the progress of a lengthy operation by displaying a colored \n\
bar inside a horizontal rectangle. The length of the bar, in relation to the length of the rectangle, \n\
corresponds to the percentage of the operation that is complete. The progress bar can be created using \n\
the <a href=\"#!/url=./si_om/XSIUIToolkit.ProgressBar.html\">XSIUIToolkit.ProgressBar</a> property. The default minimum and maximum is between 0 \n\
and 100 with a step of 1.\n\
<br /><br />\n\
Warning: When using the ProgressBar from JScript you must explicitly set the Visible property to false \n\
when the script is done with it. In other languages the ProgressBar automatically removes itself from \n\
the screen as soon as all local variables referring to the ProgressBar object go out of scope. \n\
<br /><br />\n\
Note: A progress bar should only be updated a few times a second.  If is updated more frequently it can \n\
potentially slow down the script execution.  For example, an algorithm scanning 1,000,000 vectors would \n\
be slowed considerably if it updated a progress bar for each vector.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ProgressBar.Increment.html\">Increment</a>		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ProgressBar.CancelEnabled.html\">CancelEnabled</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ProgressBar.CancelPressed.html\">CancelPressed</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ProgressBar.Caption.html\">Caption</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ProgressBar.Maximum.html\">Maximum</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ProgressBar.Minimum.html\">Minimum</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ProgressBar.StatusText.html\">StatusText</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ProgressBar.Step.html\">Step</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ProgressBar.Value.html\">Value</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ProgressBar.Visible.html\">Visible</a>		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	Demonstrates how to properly finish with the progress bar. \n\
*/\n\
var oProgressBar = XSIUIToolkit.ProgressBar ;\n\
oProgressBar.Maximum = 100 ;\n\
oProgressBar.Step = 1;\n\
oProgressBar.Caption = \"Creating Nulls\";\n\
oProgressBar.CancelEnabled = true ;\n\
oProgressBar.Visible = true;\n\
while( oProgressBar.Value &lt; oProgressBar.Maximum )\n\
{\n\
	Application.ActiveSceneRoot.AddNull() ;\n\
	if ( oProgressBar.CancelPressed )\n\
		break ;\n\
	oProgressBar.Increment() ;\n\
}\n\
// Make sure the progress bar disappears\n\
oProgressBar.Visible = false ;</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' Demonstrates the use of the progress bar in displaying percentage complete. \n\
\'\n\
dim oProgressBar\n\
set oProgressBar = XSIUIToolkit.ProgressBar\n\
oProgressBar.Maximum = 65535\n\
oProgressBar.Step = 10\n\
oProgressBar.CancelEnabled = true\n\
oProgressBar.Caption = \"Processing\"\n\
oProgressBar.Visible= true\n\
Do While oProgressBar.CancelPressed&lt;&gt;True And oProgressBar.Value &lt; oProgressBar.Maximum\n\
	oProgressBar.Increment\n\
Loop</pre></td></tr>\n\
</table>\n\
</div><h4>3. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' Demonstrates the use of the progress bar in displaying progress per frame. \n\
\'\n\
dim oProgressBar\n\
set oProgressBar = XSIUIToolkit.ProgressBar\n\
oProgressBar.Maximum = 65535\n\
oProgressBar.Visible= true\n\
Do While oProgressBar.CancelPressed&lt;&gt;True And oProgressBar.Value &lt; oProgressBar.Maximum\n\
	i = oProgressBar.Increment\n\
	oProgressBar.StatusText = \"Frame \" &amp; i\n\
Loop</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/XSIUIToolkit.ProgressBar.html\">XSIUIToolkit.ProgressBar</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";