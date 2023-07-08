var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>DefineLayout</title>\n\
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
            <h1>DefineLayout</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">DefineLayout</h2>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Description</h3>\n\
<div><p><a name=\"Description\"> </a>	<p>\n\
				Defines the layout of controls on a property page (including a property page defined for a custom operator). \n\
			</p>\n\
	<p>\n\
				Use this callback to define how the property page will appear. This is where you define the controls (such \n\
				as buttons, tabs, text fields, and combo boxes) and the overall layout (such as where the lines break, the \n\
				spacing between controls, and the width and alignment of controls). \n\
			</p>\n\
	<p>\n\
				This callback is fired immediately after the <a href=\"#!/url=./files/Define.htm\">Define</a> callback is fired for the first time in \n\
				a Softimage session. You can also force it to fire when you use the <a href=\"#!/url=./si_om/PPG.Refresh.html\">PPG.Refresh</a> method.\n\
			</p>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Applies To</h3>\n\
<div><p><a name=\"AppliesTo\"> </a><a href=\"#!/url=./files/cus_ops.htm\">Custom Operators</a><a href=\"#!/url=./files/cus_ppg.htm\">Custom Properties</a></p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Syntax</h3>\n\
<div><p><a name=\"Syntax\"> </a><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"csharp\">public class &lt;plugin-item_name&gt;\n\
{\n\
	public bool DefineLayout( Context in_context )\n\
	{\n\
		...\n\
	}\n\
}</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"cplusplus\">CStatus &lt;plugin-item_name&gt;_DefineLayout( CRef&amp; in_context ) \n\
{ \n\
	... \n\
}</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">function &lt;plugin-item_name&gt;_DefineLayout( in_context ) \n\
{ \n\
	... \n\
}</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">def &lt;plugin-item_name&gt;_DefineLayout( in_context ):\n\
	...</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">Function &lt;plugin-item_name&gt;_DefineLayout( in_context )\n\
	...\n\
End Function</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"perlscript\">sub &lt;plugin-item_name&gt;_DefineLayout \n\
{ \n\
	my $in_context = shift; \n\
}</pre></td></tr>\n\
</table>\n\
</div>	<p><span style=\"font-family: courier, monospace;\">&lt;plugin-item-name&gt;</span> is the name specified in the call to \n\
				<a href=\"#!/url=./si_om/PluginRegistrar.RegisterProperty.html\">PluginRegistrar.RegisterProperty</a> or \n\
				<a href=\"#!/url=./si_om/PluginRegistrar.RegisterOperator.html\">PluginRegistrar.RegisterOperator</a>, with any spaces converted to underscores. For example, \n\
				if you register a property with the name <span style=\"font-family: courier, monospace;\">\"My Property\"</span>, the callback \n\
				function names start with <span style=\"font-family: courier, monospace;\">\"My_Property\"</span>. \n\
			</p>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Parameters</h3>\n\
<div><p><a name=\"Parameters\"> </a>	<table>		<tr>			<th>Parameter</th>\n\
			<th>Language</th>\n\
			<th>Type</th>\n\
			<th>Description</th>\n\
</tr>\n\
		<tr>			<td class=\"name\">in_context</td>\n\
			<td>Scripting and C#</td>\n\
			<td><a href=\"#!/url=./si_om/Context.html\">Context</a> (scripting)</td>\n\
			<td><a href=\"#!/url=./si_om/Context.Source.html\">Context.Source</a> returns the <a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a>.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td>C++</td>\n\
			<td><a href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>& </td>\n\
			<td>A reference to the <a href=\"#!/url=./si_cpp/classXSI_1_1PPGLayout.html\">PPGLayout</a>.</td>\n\
</tr>\n\
</table>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>See Also</h3>\n\
<div><p><a name=\"SeeAlso\"> </a><ul>\n\
	<li><a href=\"#!/url=./si_om/PluginRegistrar.RegisterProperty.html\">PluginRegistrar.RegisterProperty</a></li>\n\
	<li><a href=\"#!/url=./si_om/PluginRegistrar.RegisterOperator.html\">PluginRegistrar.RegisterOperator</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_Property_Define.html\">Define</a></li>\n\
	<li><a href=\"#!/url=./si_om/CustomProperty.AddParameter2.html\">CustomProperty.AddParameter2</a></li>\n\
	<li><a href=\"#!/url=./si_om/CustomProperty.AddFCurveParameter.html\">CustomProperty.AddFCurveParameter</a></li>\n\
	<li><a href=\"#!/url=./si_om/CustomProperty.AddGridParameter.html\">CustomProperty.AddGridParameter</a></li>\n\
	<li><a href=\"#!/url=./si_om/CustomProperty.AddProxyParameter.html\">CustomProperty.AddProxyParameter</a></li>\n\
	<li><a href=\"#!/url=./si_om/CustomProperty.AddParameterFromDef.html\">CustomProperty.AddParameterFromDef</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/callbacks.html\">Property Callbacks</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/callbacks.html\">Operator Callbacks</a></li>\n\
</ul>\n\
</p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";