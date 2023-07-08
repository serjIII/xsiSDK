var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Unload</title>\n\
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
            <h1>Unload</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Unload</h2>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Description</h3>\n\
<div><p><a name=\"Description\"> </a>	<p>\n\
				Unload is called when the plug-in is unloaded from the cache. \n\
			</p>\n\
	<p>\n\
				A plug-in is unloaded from the cache when a user right-clicks a plug-in in the plug-in tree and clears the \n\
				<b>Cached</b> check. This unloads the plug-in (the .dll/.so file, or the script file) from memory, \n\
				but does not \"unload\" the plug-in from Softimage. The <a href=\"#!/url=./si_om/Plugin.html\">Plugin</a> and <a href=\"#!/url=./si_om/PluginItem.html\">PluginItem</a> \n\
				objects still exist in Softimage, and the plug-in is still registered. \n\
			</p>\n\
	<p>\n\
				When a plug-in is not cached, it is loaded and unloaded every time a plug-in item (such as a command) is invoked. \n\
				This triggers the <a href=\"#!/url=./si_cmds/cb_Plugin_Reload.html\">Reload</a> and Unload callbacks.\n\
			</p>\n\
	<p>\n\
				Softimage releases any user data stored in the context after the Unload callback returns. Softimage also releases the user \n\
				data after <a href=\"#!/url=./si_cmds/cb_Plugin_Term.html\">Term</a> returns.\n\
			</p>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Applies To</h3>\n\
<div><p><a name=\"AppliesTo\"> </a>\n\
			All plug-in items except <a href=\"#!/url=./files/cus_ppg.htm\">Custom Properties</a>.\n\
		</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Syntax</h3>\n\
<div><p><a name=\"Syntax\"> </a><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"csharp\">public class &lt;plugin-item_name&gt;\n\
{\n\
	public bool Unload( Context in_context )\n\
	{\n\
		...\n\
	}\n\
}</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"cplusplus\">CStatus &lt;plugin-item_name&gt;_Unload( CRef&amp; in_context ) \n\
{ \n\
	... \n\
}</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">function &lt;plugin-item_name&gt;_Unload( in_context ) \n\
{ \n\
	... \n\
}</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">def &lt;plugin-item_name&gt;_Unload( in_context ):\n\
	...</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">Function &lt;plugin-item_name&gt;_Unload( in_context )\n\
	...\n\
End Function</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"perlscript\">sub &lt;plugin-item_name&gt;_Unload \n\
{ \n\
	my $in_context = shift; \n\
}</pre></td></tr>\n\
</table>\n\
</div>	<p><span style=\"font-family: courier, monospace;\">&lt;plugin-item-name&gt;</span> is the name specified in \n\
				<a href=\"#!/url=./si_cmds/cb_XSILoadPlugin.html\">XSILoadPlugin</a>, with any spaces converted to underscores.\n\
			</p>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Parameters</h3>\n\
<div><p><a name=\"Parameters\"> </a>	<table>		<tr>			<th>Parameter</th>\n\
			<td>Language</td>\n\
			<th>Type</th>\n\
			<th>Description</th>\n\
</tr>\n\
		<tr>			<td class=\"name\">in_context</td>\n\
			<td>Scripting and C#</td>\n\
			<td><a href=\"#!/url=./si_om/Context.html\">Context</a></td>\n\
			<td><a href=\"#!/url=./si_om/Context.Source.html\">Context.Source</a> returns the plug-in item. </td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td>C++</td>\n\
			<td><a href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>& </td>\n\
			<td>A reference to the <a href=\"#!/url=./si_cpp/classXSI_1_1Context.html\">Context</a> object.</td>\n\
</tr>\n\
</table>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>See Also</h3>\n\
<div><p><a name=\"SeeAlso\"> </a><ul>\n\
	<li><a href=\"#!/url=./si_cmds/cb_Plugin_Reload.html\">Reload</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_XSILoadPlugin.html\">XSILoadPlugin</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_XSIUnloadPlugin.html\">XSIUnloadPlugin</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_Command_Init.html\">Init (Command)</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_CustomDisplay_Init.html\">Init (Custom Display)</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_Filter_Init.html\">Init (Filter)</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_Menu_Init.html\">Init (Menu)</a></li>\n\
</ul>\n\
</p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";