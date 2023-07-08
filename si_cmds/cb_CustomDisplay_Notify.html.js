var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Notify</title>\n\
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
            <h1>Notify</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Notify</h2>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Description</h3>\n\
<div><p><a name=\"Description\"> </a>	<p>\n\
				Use this callback to manage the interaction between and custom display and Softimage. When there is a \n\
				change to the selection, a value or the time, Softimage sends a notification that can be trapped by the \n\
				corresponding notification object. \n\
			</p>\n\
	<p>\n\
				This callback takes the <a href=\"#!/url=./si_cpp/classXSI_1_1ViewContext.html\">ViewContext</a> object as input which you can \n\
				use to get one of the View Notification objects: \n\
			</p>\n\
<ul>\n\
	<li><a href=\"#!/url=./si_cpp/classXSI_1_1CSelectionChangeNotification.html\">CSelectionChangeNotification</a>--holds information about a \n\
					selection change event.</li>\n\
	<li><a href=\"#!/url=./si_cpp/classXSI_1_1CValueChangeNotification.html\">CValueChangeNotification</a>--holds information about a value \n\
					change event.</li>\n\
	<li><a href=\"#!/url=./si_cpp/classXSI_1_1CTimeChangeNotification.html\">CTimeChangeNotification</a>--holds information about a time \n\
					change event.</li>\n\
</ul>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Applies To</h3>\n\
<div><p><a name=\"AppliesTo\"> </a><a href=\"#!/url=./files/cus_displayhost.htm\">Custom Display Host</a></p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Syntax</h3>\n\
<div><p><a name=\"Syntax\"> </a><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"cplusplus\">void &lt;custom_display_name&gt;_Notify( CRef&amp; in_context )\n\
{ \n\
	... \n\
}</pre></td></tr>\n\
</table>\n\
</div>	<p><span style=\"font-family: courier, monospace;\">&lt;custom_display_name&gt;</span> is the name specified in the call to \n\
				<a href=\"#!/url=./si_cpp/classXSI_1_1PluginRegistrar.html\">PluginRegistrar::RegisterCustomDisplay</a>, \n\
				with any spaces converted to underscores.\n\
			</p>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Parameters</h3>\n\
<div><p><a name=\"Parameters\"> </a>	<table>		<tr>			<th>Parameter</th>\n\
			<th>Type</th>\n\
			<th>Description</th>\n\
</tr>\n\
		<tr>			<td class=\"name\">in_context</td>\n\
			<td><a href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>& </td>\n\
			<td>A reference to a <a href=\"#!/url=./si_cpp/classXSI_1_1ViewContext.html\">ViewContext</a> object.</td>\n\
</tr>\n\
</table>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Examples</h3>\n\
<div><p><a name=\"Examples\"> </a><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"cplusplus\">CStatus XSILoadPlugin( PluginRegistrar&amp; in_reg  ) \n\
{\n\
	// Set installation options \n\
	in_reg.PutVersion( 1, 0 );\n\
\n\
	// ... (see PluginRegistrar for details)\n\
\n\
	// Register your custom display (view)\n\
	CStatus in_reg.RegisterCustomDisplay( L\"MyCustomDisplayName\" );\n\
}\n\
\n\
CStatus MyCustomDisplayName_Init( CRef&amp; in_context )\n\
{\n\
// Get the Softimage parent window handle to use to create a child window\n\
	ViewContext ctx( in_context );\n\
	HWND hParent = ctx.GetParentWindowHandle();\n\
// Create a new window as a child of the Softimage parent window\n\
	HWND hChild = CreateDialog(  MyDllInstance, \n\
	MAKEINTRESOURCE(IDD_MYCUSTOMWINDOW), hParent, (DLGPROC)MyWindowProc );\n\
\n\
	// ...\n\
}\n\
\n\
CStatus MyCustomDisplayName_Notify( CRef&amp; in_context )\n\
{\n\
	// Get the notification data through the ViewContext object\n\
	ViewContext ctx( in_context );\n\
	siEventID in_eNotifcation;\n\
	void* in_pData;\n\
	ctx.GetNotificationData ( in_eNotifcation, &amp;in_pData );\n\
\n\
	// Notification handlers\n\
	switch ( in_eNotifcation )\n\
	{\n\
			case siOnSelectionChange: \n\
			{ \n\
				// If selection changed... \n\
			}\n\
			case siOnTimeChange: \n\
			{\n\
				// If time changed... \n\
			}\n\
			case siOnValueChange: \n\
			{ \n\
				// If value changed... \n\
			}\n\
	}\n\
\n\
	// ... \n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>See Also</h3>\n\
<div><p><a name=\"SeeAlso\"> </a><ul>\n\
	<li><a href=\"#!/url=./si_cmds/cb_CustomDisplay_Init.html\">Init (Custom Display)</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_CustomDisplay_Term.html\">Term (Custom Display)</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/callbacks.html\">Custom Display (View) Callbacks</a></li>\n\
</ul>\n\
</p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";