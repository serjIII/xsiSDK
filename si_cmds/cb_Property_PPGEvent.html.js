var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PPGEvent</title>\n\
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
            <h1>PPGEvent</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">PPGEvent</h2>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Description</h3>\n\
<div><p><a name=\"Description\"> </a>	<p>\n\
				This callback is fired when a user interacts with a property page. \n\
			</p>\n\
	<p>\n\
				Use this callback to handle user interface events on a property page. The callback is fired when a user:\n\
			</p>\n\
<ul>\n\
	<li>Opens the property page.</li>\n\
	<li>Clicks a button.</li>\n\
	<li>Clicks the Close button (or the equivalent with a keyboard shortcut).</li>\n\
	<li>Changes a parameter value in a property page control (for example, by selecting an item from a list, \n\
					changing the value in a field, or selecting a check box).</li>\n\
	<li>Clicks a tab.</li>\n\
</ul>\n\
	<p>\n\
				The callback may also be triggered by scripting code that opens the property page or changes a parameter value.\n\
			</p>\n\
<div class=\"tip\">\n\
<table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<td class=\"label\">Warning</td>\n\
		<td class=\"emph\">\n\
				This callback is available in the object model for C# only. For scripting, there is a separate callback for \n\
				each PPG event in the object model. The scripting callbacks have no input arguments, instead the global \n\
				<a href=\"#!/url=./si_om/PPG.html\">PPG</a> object is used to access to the controls and layout of the property page.\n\
			</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Applies To</h3>\n\
<div><p><a name=\"AppliesTo\"> </a>\n\
			C++ and C# <a href=\"#!/url=./files/cus_ppg.htm\">Custom Properties</a></p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Syntax</h3>\n\
<div><p><a name=\"Syntax\"> </a><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"csharp\">public class &lt;property_name&gt;\n\
{\n\
	public bool PPGEvent( Context in_context )\n\
	{\n\
		...\n\
	}\n\
}</pre></td></tr>\n\
</table>\n\
</div><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"cplusplus\">CStatus &lt;property_name&gt;_PPGEvent( CRef&amp; in_context )\n\
{ \n\
	... \n\
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
<h3>Parameters</h3>\n\
<div><p><a name=\"Parameters\"> </a>	<table>		<tr>			<th>Parameter</th>\n\
			<th>Language</th>\n\
			<th>Type</th>\n\
			<th>Description</th>\n\
</tr>\n\
		<tr>			<td class=\"name\">in_context</td>\n\
			<td>C#</td>\n\
			<td><a href=\"#!/url=./si_om/PPGEventContext.html\">PPGEventContext</a></td>\n\
			<td>The <a href=\"#!/url=./si_om/PPGEventContext.html\">PPGEventContext</a> object.<br /><br />\n\
					PPGEventContext.EventID identifies the event that triggered the callback.<br /><br />\n\
					For the <a href=\"#!/url=./si_om/siPPGEventID.html#siOnInit\">siOnInit</a>, <a href=\"#!/url=./si_om/siPPGEventID.html#siOnClose\">siOnClose</a>, \n\
					<a href=\"#!/url=./si_om/siPPGEventID.html#siTabChange\">siTabChange</a>, and <a href=\"#!/url=./si_om/siPPGEventID.html#siButtonClicked\">siButtonClicked</a> events, \n\
					PPGEvent<a href=\"#!/url=./si_om/Context.Source.html\">Context.Source</a> returns the <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a>.<br /><br />\n\
					For <a href=\"#!/url=./si_om/siPPGEventID.html#siParameterChange\">siParameterChange</a> events, PPGEvent<a href=\"#!/url=./si_om/Context.Source.html\">Context.Source</a> \n\
					returns the <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> object. You can get the <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> by \n\
					calling the <a href=\"#!/url=./si_om/SIObject.Parent.html\">SIObject.Parent</a> property on the <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a>.</td>\n\
</tr>\n\
		<tr>			<td class=\"name\"></td>\n\
			<td>C++</td>\n\
			<td><a href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>& </td>\n\
			<td>A reference to a <a href=\"#!/url=./si_cpp/classXSI_1_1PPGEventContext.html\">PPGEventContext</a>.<br /><br /><a href=\"#!/url=./si_cpp/classXSI_1_1PPGEventContext.html#GetEventID\">PPGEventContext::GetEventID</a> \n\
					identifies the event that triggered the callback.<br /><br />\n\
					For the <a href=\"#!/url=./si_om/siPPGEventID.html#siOnInit\">siOnInit</a>, <a href=\"#!/url=./si_om/siPPGEventID.html#siOnClose\">siOnClose</a>, \n\
					<a href=\"#!/url=./si_om/siPPGEventID.html#siTabChange\">siTabChange</a>, and <a href=\"#!/url=./si_om/siPPGEventID.html#siButtonClicked\">siButtonClicked</a> events, \n\
					<a href=\"#!/url=./si_cpp/classXSI_1_1PPGEventContext.html#GetSource\">PPGEventContext::GetSource</a> returns the \n\
					<a href=\"#!/url=./si_cpp/classXSI_1_1CustomProperty.html\">CustomProperty</a>.<br /><br />\n\
					For <a href=\"#!/url=./si_om/siPPGEventID.html#siParameterChange\">siParameterChange</a> events, \n\
					<a href=\"#!/url=./si_cpp/classXSI_1_1PPGEventContext.html#GetSource\">PPGEventContext::GetSource</a> returns \n\
					the <a href=\"#!/url=./si_cpp/classXSI_1_1Parameter.html\">Parameter</a> object. You can get \n\
					the <a href=\"#!/url=./si_cpp/classXSI_1_1CustomProperty.html\">CustomProperty</a> from \n\
					<a href=\"#!/url=./si_cpp/classXSI_1_1Parameter.html#GetParent\">Parameter::GetParent</a>.\n\
					</td>\n\
</tr>\n\
</table>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Context Attributes</h3>\n\
<div><p><a name=\"ContextAttributes\"> </a>	<table>		<tr>			<th>Attribute</th>\n\
			<th>Description</th>\n\
</tr>\n\
		<tr>			<td class=\"example\">Button</td>\n\
			<td>For a <a href=\"#!/url=./si_om/siPPGEventID.html#siButtonClicked\">siButtonClicked</a> event, specifies the name of the button that was clicked.</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">Close</td>\n\
			<td>Set to true to force Softimage to close the property page.</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">Refresh</td>\n\
			<td>Set to true to force Softimage to update the layout of the property page.</td>\n\
</tr>\n\
		<tr>			<td class=\"example\">Tab</td>\n\
			<td>For a <a href=\"#!/url=./si_om/siPPGEventID.html#siTabChange\">siTabChange</a> event, specifies the name of the tab that was clicked.</td>\n\
</tr>\n\
</table>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Example</h3>\n\
<div><p><a name=\"Examples\"> </a><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"cplusplus\">// PPGEvent callback generated by the Custom Property Wizard\n\
\n\
SICALLBACK MyCppProperty_PPGEvent( const CRef&amp; in_ctxt )\n\
{\n\
 // This callback is called when events happen in the user interface\n\
 // This is where you implement the \"logic\" code.\n\
\n\
 // If the value of a parameter changes but the UI is not shown then this\n\
 // code will not execute.  Also this code is not re-entrant, so any changes\n\
 // to parameters inside this code will not result in further calls to this function\n\
\n\
 Application app ;\n\
\n\
 // The context object is used to determine exactly what happened\n\
 // We don\'t use the same \"PPG\" object that is used from Script-based logic code \n\
 // but through the C++ API we can achieve exactly the same functionality.\n\
 PPGEventContext ctxt( in_ctxt ) ;\n\
\n\
 PPGEventContext::PPGEvent eventID = ctxt.GetEventID() ;\n\
\n\
 if ( eventID == PPGEventContext::siOnInit )\n\
 {\n\
     // This event meant that the UI was just created.\n\
     // It gives us a chance to set some parameter values.\n\
     // We could even change the layout completely at this point.\n\
\n\
     // For this event Source() of the event is the CustomProperty object\n\
\n\
     CustomProperty prop = ctxt.GetSource() ;\n\
\n\
     app.LogMessage( L\"OnInit called for \" + prop.GetFullName() ) ;\n\
\n\
     /* If you regenerate the layout then call this:\n\
     ctxt.PutAttribute(L\"Refresh\",true);\n\
     */\n\
 }\n\
 else if ( eventID == PPGEventContext::siOnClose )\n\
{\n\
     // This event meant that the UI was just closed by the user.\n\
     // For this event Source() of the event is the CustomProperty object\n\
     CustomProperty prop = ctxt.GetSource() ;\n\
     app.LogMessage( L\"OnClose called for \" + prop.GetFullName() ) ;\n\
 }\n\
 else if ( eventID == PPGEventContext::siButtonClicked )\n\
 {\n\
     // If there are multiple buttons\n\
     // we can use this attribute to figure out which one was clicked.\n\
     CValue buttonPressed = ctxt.GetAttribute( L\"Button\" ) ;\n\
\n\
    app.LogMessage( L\"Button pressed: \" + buttonPressed.GetAsText() ) ;\n\
 }\n\
 else if ( eventID == PPGEventContext::siTabChange )\n\
 {\n\
     // We will be called when the PPG is first opened\n\
     // and every time the tab changes\n\
\n\
     // Retrieve the label of the tab that is now active\n\
     CValue tabLabel = ctxt.GetAttribute( L\"Tab\" ) ;\n\
\n\
     app.LogMessage( L\"Tab changed to: \" + tabLabel .GetAsText() ) ;\n\
 }\n\
 else if ( eventID == PPGEventContext::siParameterChange )\n\
 {\n\
     // For this event the Source of the event is the parameter\n\
     // itself\n\
     Parameter changed = ctxt.GetSource() ;\n\
     CustomProperty prop = changed.GetParent() ;\n\
     CString   paramName = changed.GetScriptName() ; \n\
\n\
     app.LogMessage( L\"Parameter Changed: \" + paramName ) ;\n\
 }\n\
\n\
 return CStatus::OK ;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>See Also</h3>\n\
<div><p><a name=\"SeeAlso\"> </a><ul>\n\
	<li><a href=\"#!/url=./si_cmds/cb_Property_Define.html\">Define</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_Property_DefineLayout.html\">DefineLayout</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_Property_OnChanged.html\">OnChanged</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_Property_OnClicked.html\">OnClicked</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_Property_OnInit.html\">OnInit</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_Property_OnClosed.html\">OnClosed</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/cb_Property_OnTab.html\">OnTab</a></li>\n\
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