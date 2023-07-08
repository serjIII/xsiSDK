var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PPGEventContext</title>\n\
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
            <h1>PPGEventContext</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">PPGEventContext</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_PPGEventContext\">Object Hierarchy</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/Context.html\">Context</a></p>\n\
<p class=\"level2\">PPGEventContext</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v6.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> This object is provided as the context object in the <a href=\"#!/url=./si_cmds/cb_Property_PPGEvent.html\">PPGEvent</a> \n\
callback for a plug-in based <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> object implemented in C#. Using the information provided by this object, it \n\
is possible to implement PPG logic code using the .NET languages such as C# and VB.NET. For information about implementing logic with \n\
scripting languages (for both <a href=\"#!/url=./files/cus_ppg_DefiningOntheflyPropertyPages.htm\">on-the-fly</a> and \n\
<a href=\"#!/url=./files/cus_ppg_Creating.htm\">plug-in based</a> properties), see <a href=\"#!/url=./si_om/PPGLayout.Logic.html\">PPGLayout.Logic</a> and \n\
<a href=\"#!/url=./files/cus_ppg_DynamicallyChangingCustomProperties.htm\">Dynamically Changing Custom Properties</a>.\n\
<br /><br />\n\
The <a href=\"#!/url=./si_om/PPGEventContext.EventID.html\">PPGEventContext.EventID</a> function returns information about the specific event that occurred:\n\
<br /><br />\n\
* If the event is <a href=\"#!/url=./si_om/siPPGEventID.html#siOnInit\">siOnInit</a> or <a href=\"#!/url=./si_om/siPPGEventID.html#siOnClosed\">siOnClosed</a> then <a href=\"#!/url=./si_om/Context.Source.html\">Context.Source</a> \n\
returns the <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> object that is being inspected. \n\
<br /><br />\n\
* If the event is <a href=\"#!/url=./si_om/siPPGEventID.html#siParameterChange\">siParameterChange</a> then <a href=\"#!/url=./si_om/Context.Source.html\">Context.Source</a> returns the <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> \n\
that changed. \n\
<br /><br />\n\
* If the event is <a href=\"#!/url=./si_om/siPPGEventID.html#siButtonClicked\">siButtonClicked</a> then call <a href=\"#!/url=./si_om/Context.GetAttribute.html\">Context.GetAttribute</a> to get the  \n\
<a href=\"#!/url=./si_cmds/cb_Property_PPGEvent.html#PPGEvent_CtxtAttribs\">\"Button\" attribute</a>, which returns the script name of the Button \n\
that was clicked.  \n\
<br /><br />\n\
* If the event is <a href=\"#!/url=./si_om/siPPGEventID.html#siTabChange\">siTabChange</a> then call <a href=\"#!/url=./si_om/Context.GetAttribute.html\">Context.GetAttribute</a> to get the \n\
<a href=\"#!/url=./si_cmds/cb_Property_PPGEvent.html#PPGEvent_CtxtAttribs\">\"Tab\"</a> attribute, which returns the label of the Tab that was clicked.\n\
<br /><br />\n\
Tip: To force the user interface to be redrawn, call <a href=\"#!/url=./si_om/Context.SetAttribute.html\">Context.SetAttribute</a> to set the \n\
<a href=\"#!/url=./si_cmds/cb_Property_PPGEvent.html#PPGEvent_CtxtAttribs\">\"Refresh\" attribute</a> to true. This is useful if the context code \n\
changes the underlying <a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a> during its execution.  Similarly, it is possible to close the Property Page by setting the \n\
<a href=\"#!/url=./si_cmds/cb_Property_PPGEvent.html#PPGEvent_CtxtAttribs\">\"Close\" attribute</a>.  \n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Context.GetAttribute.html\">GetAttribute</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Context.SetAttribute.html\">SetAttribute</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PPGEventContext.EventID.html\">EventID</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PPGEventContext.InspectedObjects.html\">InspectedObjects</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Context.Source.html\">Source</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Context.UserData.html\">UserData</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/PPG.html\">PPG</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";