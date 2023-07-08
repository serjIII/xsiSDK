var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Menu Item Callbacks</title>\n\
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
            <h1>Menu Item Callbacks</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Menu Item Callbacks</h2>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Description</h3>\n\
<div><p><a name=\"Description\"> </a>	<p>\n\
				Callback function fired when a user clicks a menu item.\n\
			</p>\n\
	<p>\n\
				Menu item callbacks are added to a menu item with <a href=\"#!/url=./si_om/Menu.AddCallbackItem.html\">Menu.AddCallbackItem</a>.\n\
			</p>\n\
	<p>\n\
				Use this callback to define a special function that will execute when the user activates \n\
				the associated callback menu item. For example, you could implement a function that modifies \n\
				the current layout or changes some user preferences.\n\
			</p>\n\
	<p>\n\
				This differs from a command menu item associated to a custom command that you have defined in \n\
				the same plug-in in that a callback function does not get added to the Softimage command map.\n\
			</p>\n\
<div class=\"tip\">\n\
<table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<td class=\"label\">Tip</td>\n\
		<td class=\"emph\">\n\
				This callback is fired every time the menu callback function is invoked.\n\
			</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Applies To</h3>\n\
<div><p><a name=\"AppliesTo\"> </a>\n\
			Menu items added to a menu item with <a href=\"#!/url=./si_om/Menu.AddCallbackItem.html\">Menu.AddCallbackItem</a>.\n\
		</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Syntax</h3>\n\
<div><p><a name=\"Syntax\"> </a><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"csharp\">public class &lt;menu_name&gt;\n\
{\n\
	public bool &lt;menu-item_callback_name&gt;( Context in_context )\n\
	{\n\
		...\n\
	}\n\
}</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"cplusplus\">CStatus &lt;menu-item_callback_name&gt;( CRef&amp; in_context )\n\
{ \n\
	... \n\
}</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">function &lt;menu-item_callback_name&gt;( in_context )\n\
{ \n\
	... \n\
}</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">def &lt;menu-item_callback_name&gt;( in_context ):\n\
	...</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">Function &lt;menu-item_callback_name&gt;( in_context )\n\
	...\n\
End Function</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"perlscript\">sub &lt;menu-item_callback_name&gt; \n\
{ \n\
	my $in_context = shift; \n\
}</pre></td></tr>\n\
</table>\n\
</div>	<p><span style=\"font-family: courier, monospace;\">&lt;menu-item_callback_name&gt;</span> is the name specified in the call to \n\
				<a href=\"#!/url=./si_om/Menu.AddCallbackItem.html\">Menu.AddCallbackItem</a>, with any spaces converted to underscores.\n\
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
			<td><a href=\"#!/url=./si_om/Context.html\">Context</a></td>\n\
			<td><a href=\"#!/url=./si_om/Context.Source.html\">Context.Source</a> returns the <a href=\"#!/url=./si_om/MenuItem.html\">MenuItem</a>.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td class=\"name\">C++</td>\n\
			<td><a href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>&</td>\n\
			<td>A reference to the <a href=\"#!/url=./si_cpp/classXSI_1_1Context.html\">Context</a> object. \n\
					<a href=\"#!/url=./si_cpp/classXSI_1_1Context.html#GetSource\">Context::GetSource</a> \n\
					returns the <a href=\"#!/url=./si_cpp/classXSI_1_1MenuItem.html\">MenuItem</a>.</td>\n\
</tr>\n\
</table>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Context Attributes</h3>\n\
<div><p><a name=\"ContextAttributes\"> </a>	<p>\n\
				For most context menus, the Target attribute contains the selected objects and the object under \n\
				the mouse pointer.\n\
			</p>\n\
	<p>\n\
				For regular menus (except for the File menu in the Plug-in Manager), the Target attribute is not set).\n\
			</p>\n\
	<table>		<tr>			<th>Attribute</th>\n\
			<th>Menus</th>\n\
			<th>Description</th>\n\
</tr>\n\
		<tr>			<td>Target</td>\n\
			<td>3D View and SE context menus</td>\n\
			<td><b>Scripting and C#</b><br /><br /><a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> containing the selected objects and the object under the cursor.<br /><br /><br /><br /><b>C++</b><br /><br /><a href=\"#!/url=./si_cpp/classXSI_1_1CValue.html\">CValue</a> containing a <a href=\"#!/url=./si_cpp/classXSI_1_1CValueArray.html\">CValueArray</a>. The array \n\
						contains the selected objects and the object under the cursor.\n\
					</td>\n\
</tr>\n\
		<tr>			<td></td>\n\
			<td>Animation Mixer menus</td>\n\
			<td>The <a href=\"#!/url=./si_om/View.html\">View</a> object for the Animation Mixer.</td>\n\
</tr>\n\
		<tr>			<td></td>\n\
			<td>FCurve Editor menus</td>\n\
			<td>The <a href=\"#!/url=./si_om/View.html\">View</a> object for the FCurve Editor.</td>\n\
</tr>\n\
		<tr>			<td></td>\n\
			<td>Property Editor context menu</td>\n\
			<td>The object whose parameters are displayed on the property page (for example, a <a href=\"#!/url=./si_om/KinematicState.html\">KinematicState</a> \n\
					object for the Global Transform property page).</td>\n\
</tr>\n\
		<tr>			<td></td>\n\
			<td>Plug-in Manager and  menus (context and normal menus)<br /><br />Workgroup Manager File menu</td>\n\
			<td>The <a href=\"#!/url=./si_om/View.html\">View</a> object for the Plug-in Manager.</td>\n\
</tr>\n\
		<tr>			<td></td>\n\
			<td>Script Editor context menus</td>\n\
			<td><b>History pane </b><br /><br />\n\
						The selected text or, if no text is selected, the current line.<br /><br /><br /><br /><b>Editing pane </b><br /><br />\n\
						The View object for the script editor.\n\
					</td>\n\
</tr>\n\
		<tr>			<td></td>\n\
			<td>Schematic View and View Context menus</td>\n\
			<td>\n\
						The Target attribute contains the Schematic View object.\n\
					</td>\n\
</tr>\n\
		<tr>			<td></td>\n\
			<td>Schematic Node context menus</td>\n\
			<td><b>Scripting and C#</b><br /><br /><a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> containing the view object and the object under the cursor.<br /><br /><br /><br /><b>C++</b><br /><br /><a href=\"#!/url=./si_cpp/classXSI_1_1CValue.html\">CValue</a> containing a <a href=\"#!/url=./si_cpp/classXSI_1_1CValueArray.html\">CValueArray</a>. The array\n\
						contains the view object and the object under the cursor.\n\
					</td>\n\
</tr>\n\
		<tr>			<td></td>\n\
			<td>Scene Layer Manager menus</td>\n\
			<td>The <a href=\"#!/url=./si_om/View.html\">View</a> object for the Scene Layer Manager.</td>\n\
</tr>\n\
		<tr>			<td></td>\n\
			<td>Scene Layer Manager context menus</td>\n\
			<td><b>Scripting and C#</b><br /><br /><a href=\"#!/url=./si_om/Layer.html\">Layer</a> containing the layer object under the cursor.<br /><br /><br /><br /><b>C++</b><br /><br /><a href=\"#!/url=./si_cpp/classXSI_1_1Layer.html\">Layer</a> containing the layer object under the cursor.\n\
					</td>\n\
</tr>\n\
		<tr>			<td></td>\n\
			<td>Material Manager menus</td>\n\
			<td>\n\
                      The <a href=\"#!/url=./si_om/View.html\">View</a> object for the Material Manager.\n\
                  </td>\n\
</tr>\n\
		<tr>			<td></td>\n\
			<td>Shader Code Editor menus</td>\n\
			<td>The <a href=\"#!/url=./si_om/View.html\">View</a> object for the Shader Code Editor.</td>\n\
</tr>\n\
</table>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>See Also</h3>\n\
<div><p><a name=\"SeeAlso\"> </a><ul>\n\
	<li><a href=\"#!/url=./si_cmds/cb_Menu_Init.html\">Init (Menu)</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/callbacks.html\">Menu Callbacks</a></li>\n\
	<li><a href=\"#!/url=./files/cus_cmds.htm\">Standard and Contextual Menus</a></li>\n\
</ul>\n\
</p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";