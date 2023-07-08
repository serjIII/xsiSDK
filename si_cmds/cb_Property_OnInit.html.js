var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>OnInit</title>\n\
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
            <h1>OnInit</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">OnInit</h2>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Description</h3>\n\
<div><p><a name=\"Description\"> </a>	<p>\n\
				This callback is fired when a property page is opened (inspected).\n\
			</p>\n\
	<p>\n\
				Use this callback to initialize a property page. To access the property page, use the <a href=\"#!/url=./si_om/PPG.html\">PPG</a> \n\
				object in your OnInit callback. \n\
			</p>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Applies To</h3>\n\
<div><p><a name=\"AppliesTo\"> </a><a href=\"#!/url=./files/cus_ppg.htm\">Custom Properties</a> implemented in a scripting language.\n\
		</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Syntax</h3>\n\
<div><p><a name=\"Syntax\"> </a><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">function &lt;property_name&gt;_OnInit() \n\
{ \n\
	... \n\
}</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">def &lt;property_name&gt;_OnInit( in_context ):\n\
	...</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">Function &lt;property_name&gt;_OnInit( in_context )\n\
	...\n\
End Function</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"perlscript\">sub &lt;property_name&gt;_OnInit \n\
{ \n\
	my $in_context = shift; \n\
}</pre></td></tr>\n\
</table>\n\
</div>	<p><span style=\"font-family: courier, monospace;\">&lt;property_name&gt;</span> is the name specified in the call to \n\
				<a href=\"#!/url=./si_om/PluginRegistrar.RegisterProperty.html\">PluginRegistrar.RegisterProperty</a>, with any spaces converted to underscores. For example, \n\
				if you register a property with the name <span style=\"font-family: courier, monospace;\">\"My Property\"</span>, the callback \n\
				function names start with <span style=\"font-family: courier, monospace;\">\"My_Property\"</span>. \n\
			</p>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>See Also</h3>\n\
<div><p><a name=\"SeeAlso\"> </a><ul>\n\
	<li><a href=\"#!/url=./si_cmds/cb_Property_Define.html\">Define</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_Property_DefineLayout.html\">DefineLayout</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_Property_OnChanged.html\">OnChanged</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_Property_OnClicked.html\">OnClicked</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_Property_OnClosed.html\">OnClosed</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_Property_OnTab.html\">OnTab</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_Property_PPGEvent.html\">PPGEvent</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_GridData_OnBeginValueChange.html\">OnBeginValueChange (GridData)</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_GridData_OnEndValueChange.html\">OnEndValueChange (GridData)</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_GridData_OnBeginSelectionChange.html\">OnBeginSelectionChange (GridData)</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_GridData_OnEndSelectionChange.html\">OnEndSelectionChange (GridData)</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_GridData_OnButtonClicked.html\">OnButtonClicked (GridData)</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_GridData_OnHeaderDoubleClick.html\">OnHeaderDoubleClick (GridData)</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_GridData_OnContextMenuInit.html\">OnContextMenuInit (GridData)</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_GridData_OnContextMenuSelected.html\">OnContextMenuSelected (GridData)</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/callbacks.html\">Property Callbacks</a></li>\n\
</ul>\n\
</p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";