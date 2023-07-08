var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Callbacks for Self-Installing Plug-ins</title>\n\
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
            <h1>Callbacks for Self-Installing Plug-ins</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Callbacks for Self-Installing Plug-ins</h2>\n\
\n\
<div>\n\
	<p>\n\
				A plug-in must implement the <a href=\"#!/url=./si_cmds/cb_XSILoadPlugin.html\">XSILoadPlugin</a> callback, which is \n\
				responsible for registering plug-in items such as commands and properties.\n\
			</p>\n\
	<p>\n\
				Plug-in items properties are implemented by callback functions. For example, to implement a custom command, you \n\
				write an <a href=\"#!/url=./si_cmds/cb_Command_Execute.html\">Execute</a> callback. If the command is named, \n\
				<span style=\"font-family: courier, monospace;\">\"MyCommand\"</span>, then Softimage expects a callback function named \n\
				<span style=\"font-family: courier, monospace;\">\"MyCommand_Execute\"</span>.\n\
			</p>\n\
	<p>\n\
				If the name of a plug-in item includes spaces, you must remove the spaces from the callback function names. For \n\
				example, if a property is named <span style=\"font-family: courier, monospace;\">\"My Custom Property\"</span>), then the \n\
				<a href=\"#!/url=./si_cmds/cb_Property_Define.html\">Define</a> callback function for the property must be named \n\
				<span style=\"font-family: courier, monospace;\">\"MyCustomProperty_Define\"</span>.\n\
			</p>\n\
	<p>\n\
				Callbacks are available in this section organized by plug-in type:\n\
			</p>\n\
<ul>\n\
	<li><a href=\"#cb_plugins\">Callbacks Common to All Plug-ins</a></li>\n\
	<li><a href=\"#cb_command\">Command Callbacks</a></li>\n\
	<li><a href=\"#cb_custom_display_view\">Custom Displays (Views) Callbacks</a></li>\n\
	<li><a href=\"#cb_event\">Event Callbacks</a></li>\n\
	<li><a href=\"#cb_filter\">Filter Callbacks</a></li>\n\
	<li><a href=\"#cb_graphicsequencer\">Graphic Sequencer Callbacks</a></li>\n\
	<li><a href=\"#cb_icenodes\">ICENode Callbacks</a></li>\n\
	<li><a href=\"#cb_menu\">Menu Callbacks</a></li>\n\
	<li><a href=\"#cb_operator\">Operator Callbacks</a></li>\n\
	<li><a href=\"#cb_primitive\">Primitive Callbacks</a></li>\n\
	<li><a href=\"#cb_property\">Property Callbacks</a></li>\n\
	<li><a href=\"#cb_rtshaders\">Realtime Shader Callbacks</a></li>\n\
	<li><a href=\"#cb_renderer\">Renderer Callbacks</a></li>\n\
	<li><a href=\"#cb_shader\">Shader Callbacks</a></li>\n\
	<li><a href=\"#cb_shaderparser\">Shader Parser Callbacks</a></li>\n\
</ul>\n\
</div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Plug-in Callbacks</h3>\n\
<div><p><a name=\"cb_plugins\"> </a>	<p>		<table>			<tr>				<th>Callback</th>\n\
				<th>Description</th>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_XSILoadPlugin.html\">XSILoadPlugin</a></td>\n\
				<td>\n\
							When Softimage starts, it looks in certain folders, such as the <span style=\"font-family: courier, monospace;\">Application\\Plugins</span> folders \n\
							in the User location and in workgroups, for plug-ins that implement XSILoadPlugin. When Softimage finds a \n\
							self-installing plug-in, Softimage loads the plug-in and calls its XSILoadPlugin function.\n\
							<br /><br />\n\
							XSILoadPlugin registers plug-in items (such as commands, menus, and properties) and sets plug-in \n\
							properties (such as the version number and the location of the help file).\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_XSIUnloadPlugin.html\">XSIUnloadPlugin</a></td>\n\
				<td>Fired when Softimage unloads the plug-in.</td>\n\
</tr>\n\
</table>\n\
</p>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Command Callbacks</h3>\n\
<div><p><a name=\"cb_command\"> </a>	<p>		<table>			<tr>				<th>Callback</th>\n\
				<th>Description</th>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Command_Execute.html\">Execute (Command)</a></td>\n\
				<td>\n\
							Fired when the command is invoked. Gets the command arguments (if any), executes the command, \n\
							and returns the result (if any).\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Command_Init.html\">Init (Command)</a></td>\n\
				<td>\n\
							Optional. Fired the first time a command is invoked after the plug-in is loaded. Specifies \n\
							the return value and arguments of the command.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Command_Undo.html\">Undo</a></td>\n\
				<td>\n\
							Optional, C++ API only. Fired when a custom command is being undone. The return value is ignored.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Command_Redo.html\">Redo</a></td>\n\
				<td>\n\
							Optional, C++ API only. Fired when a custom command is being redone. The return value is ignored.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Command_TermUndoRedo.html\">TermUndoRedo</a></td>\n\
				<td>\n\
							Optional, C++ API only. Fired when a custom command undo event is removed from the Softimage undo stack. This callback is typically used to release any memory required for undoing this command. The return value is ignored.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Plugin_Term.html\">Term</a></td>\n\
				<td>\n\
							Optional. Fired when a plug-in is removed from Softimage (just before Softimage calls \n\
							<a href=\"#!/url=./si_cmds/cb_XSIUnloadPlugin.html\">XSIUnloadPlugin</a>). For example, \n\
							Term is triggered when you exit Softimage or unload the plug-in.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Plugin_Unload.html\">Unload</a>, <a href=\"#!/url=./si_cmds/cb_Plugin_Reload.html\">Reload</a></td>\n\
				<td>\n\
							Fired when the plug-in is cached (reloaded) and uncached (unloaded). By default, all plug-ins \n\
							are cached, but users can remove a plug-in from the cache (by right-clicking a plug-in in the \n\
							plug-in tree and clearing the <i>Cached</i> checkmark). \n\
						</td>\n\
</tr>\n\
</table>\n\
</p>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Operator Callbacks</h3>\n\
<div><p><a name=\"cb_operator\"> </a>	<p>		<table>			<tr>				<th>Callback</th>\n\
				<th>Description</th>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Property_Define.html\">Define</a></td>\n\
				<td>\n\
							Fired when a operator is applied to an object (for example, using <a href=\"#!/url=./si_om/ProjectItem.AddCustomOp.html\">ProjectItem.AddCustomOp</a> \n\
							or <a href=\"#!/url=./si_om/Parameter.AddCustomOp.html\">Parameter.AddCustomOp</a>). This is where you add custom parameters to the operator. \n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Property_DefineLayout.html\">DefineLayout</a></td>\n\
				<td>\n\
							Fired immediately after the <a href=\"#!/url=./si_cmds/cb_Property_Define.html\">Define</a> callback is fired \n\
							for the first time in a Softimage session. You can also force it to fire when you use the \n\
							<a href=\"#!/url=./si_om/PPG.Refresh.html\">PPG.Refresh</a> method. This is where you define the layout of UI \n\
							controls on the property page for the operator\'s parameters. \n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Operator_Init.html\">Init (Operator)</a></td>\n\
				<td>\n\
							Fired when an instance of the operator is instantiated. Unlike \n\
							<a href=\"#!/url=./si_cmds/cb_Property_Define.html\">Define</a>, Init is called both \n\
							for newly created operators and for operators loaded from persistence. This is where you \n\
							initialize cached operator data. \n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Property_OnInit.html\">OnInit</a></td>\n\
				<td>\n\
							Fired each time the property page is displayed (for example, each time the property is inspected \n\
							with <a href=\"#!/url=./si_cmds/InspectObj.html\">InspectObj</a>). Allows you to set the initial values of the UI controls.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Property_OnChanged.html\">OnChanged</a></td>\n\
				<td>\n\
							Fired each time a UI control changes value.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Property_OnClicked.html\">OnClicked</a></td>\n\
				<td>\n\
							Fired when a command button is clicked.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Property_OnClosed.html\">OnClosed</a></td>\n\
				<td>\n\
							Fired when the property page is closed via the <i>Close</i> button or the keyboard shortcut.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Property_OnTab.html\">OnTab</a></td>\n\
				<td>\n\
							Fired when a user clicks a tab.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Property_PPGEvent.html\">PPGEvent</a></td>\n\
				<td>\n\
							C++ and C# callback for all property page events (<a href=\"#!/url=./si_cmds/cb_Property_OnInit.html\">OnInit</a>, \n\
							<a href=\"#!/url=./si_cmds/cb_Property_OnChanged.html\">OnChanged</a>, \n\
							<a href=\"#!/url=./si_cmds/cb_Property_OnClicked.html\">OnClicked</a>, \n\
							<a href=\"#!/url=./si_cmds/cb_Property_OnClosed.html\">OnClosed</a>, and \n\
							<a href=\"#!/url=./si_cmds/cb_Property_OnTab.html\">OnTab</a>).\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Plugin_Unload.html\">Unload</a>, <a href=\"#!/url=./si_cmds/cb_Plugin_Reload.html\">Reload</a></td>\n\
				<td>\n\
							Fired when the plug-in is cached (reloaded) and uncached (unloaded). By default, all plug-ins \n\
							are cached, but users can remove a plug-in from the cache (by right-clicking a plug-in in the \n\
							plug-in tree and clearing the <i>Cached</i> checkmark). \n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Operator_Update.html\">Update</a></td>\n\
				<td>\n\
							Fired whenever an operator is expected to evaluate itself. This is the most important callback, \n\
							called whenever an operator is expected to evaluate itself.\n\
							\n\
											<div class=\"tip\">\n\
				<table cellpadding=\"5\" cellspacing=\"5\">\n\
					<tr>\n\
						<td class=\"label\">Note</td>\n\
						<td class=\"emph\">If there are multiple outputs the Update function is called once per output port. </td>\n\
					</tr>\n\
				</table>\n\
				</div>\n\
</td>\n\
</tr>\n\
</table>\n\
</p>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Primitive Callbacks</h3>\n\
<div><p><a name=\"cb_primitive\"> </a>	<p>		<table>			<tr>				<th>Callback</th>\n\
				<th>Description</th>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Property_Define.html\">Define</a></td>\n\
				<td>\n\
							Fired whenever the custom primitive is created. This is where you can add parameters to the \n\
							custom primitive.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Property_DefineLayout.html\">DefineLayout</a></td>\n\
				<td>\n\
							Fired immediately after the <a href=\"#!/url=./si_cmds/cb_Property_Define.html\">Define</a> callback is \n\
							fired for the first time in a Softimage session. You can also force it to fire when you use the \n\
							<a href=\"#!/url=./si_om/PPG.Refresh.html\">PPG.Refresh</a> method. This is where you define the layout of UI \n\
							controls on the property page.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Property_PPGEvent.html\">PPGEvent</a></td>\n\
				<td>\n\
							C++ callback for all property page events.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Primitive_Draw.html\">Draw</a></td>\n\
				<td>\n\
							Fired when there is a request for the custom primitive to be drawn. At this point the GL state is setup and the plug-in is expected to draw the primitive. \n\
							The drawing coordinates are set to the object\'s local space. \n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Primitive_BoundingBox.html\">BoundingBox</a></td>\n\
				<td>\n\
							Fired when there is a request for the custom primitive\'s Bounding Box. The plug-in is to populate\n\
							the lower and upper bounds of the Bounding Box via the callback context attributes.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Primitive_ConvertToGeom.html\">ConvertToGeom</a></td>\n\
				<td>\n\
							Fired when the custom primitive is passed into the CreatePrim or SIConvert commands. The plug-in \n\
							is to update the Geometry structure retrieved from the callback to perform the geometry \n\
							conversion. Only PolygonMesh is currently supported. \n\
            \n\
							The \'CustomPrimitiveContext\' contains a CustomPrimitiveContext::GetGeometry() method that will \n\
							return a Geometry object. Since this callback currently only supports PolygonMesh, it is safe to \n\
							expect a PolygonMesh object, however for future extensibility, it is recommended to check for a \n\
							valid PolygonMesh.\n\
						</td>\n\
</tr>\n\
</table>\n\
</p>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Property Callbacks</h3>\n\
<div><p><a name=\"cb_property\"> </a>	<p>		<table>			<tr>				<th>Callback</th>\n\
				<th>Description</th>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Property_Define.html\">Define</a></td>\n\
				<td>\n\
							Fired when a property is added to an object (for example, using <a href=\"#!/url=./si_om/SceneItem.AddProperty.html\">SceneItem.AddProperty</a>,\n\
							<a href=\"#!/url=./si_om/Renderer.AddProperty.html\">Renderer.AddProperty</a>, etc.). This is where you add parameters to the property.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Property_DefineLayout.html\">DefineLayout</a></td>\n\
				<td>\n\
							Fired immediately after the <a href=\"#!/url=./si_cmds/cb_Property_Define.html\">Define</a> callback is fired \n\
							for the first time in a Softimage session. You can also force it to fire when you use the \n\
							<a href=\"#!/url=./si_om/PPG.Refresh.html\">PPG.Refresh</a> method. This is where you define the layout of UI \n\
							controls on the property page.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Property_OnInit.html\">OnInit</a></td>\n\
				<td>\n\
							Fired each time the property page is displayed (for example, each time the property is inspected \n\
							with <a href=\"#!/url=./si_cmds/InspectObj.html\">InspectObj</a>). Allows you to change and redraw the UI controls.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Property_OnChanged.html\">OnChanged</a></td>\n\
				<td>\n\
							Fired each time a UI control changes value.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Property_OnClicked.html\">OnClicked</a></td>\n\
				<td>\n\
							Fired when a command button is clicked.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Property_OnClosed.html\">OnClosed</a></td>\n\
				<td>\n\
							Fired when the property page is closed via the <i>Close</i> button or the keyboard shortcut.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Property_OnTab.html\">OnTab</a></td>\n\
				<td>\n\
							Fired when a user clicks a tab.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Property_PPGEvent.html\">PPGEvent</a></td>\n\
				<td>\n\
							C++ and C# callback for all property page events (<a href=\"#!/url=./si_cmds/cb_Property_OnInit.html\">OnInit</a>, \n\
							<a href=\"#!/url=./si_cmds/cb_Property_OnChanged.html\">OnChanged</a>, \n\
							<a href=\"#!/url=./si_cmds/cb_Property_OnClicked.html\">OnClicked</a>, \n\
							<a href=\"#!/url=./si_cmds/cb_Property_OnClosed.html\">OnClosed</a>, and \n\
							<a href=\"#!/url=./si_cmds/cb_Property_OnTab.html\">OnTab</a>).\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Plugin_Term.html\">Term</a></td>\n\
				<td>\n\
							Fired when a property is deleted.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_GridData_OnBeginValueChange.html\">OnBeginValueChange (GridData)</a></td>\n\
				<td>\n\
							Fired before applying modifications to a grid data parameter.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_GridData_OnEndValueChange.html\">OnEndValueChange (GridData)</a></td>\n\
				<td>\n\
							Fired after modifications have been applied to a grid data parameter.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_GridData_OnBeginSelectionChange.html\">OnBeginSelectionChange (GridData)</a></td>\n\
				<td>\n\
							Fired before applying a selection change to a grid widget associated with a grid data parameter.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_GridData_OnEndSelectionChange.html\">OnEndSelectionChange (GridData)</a></td>\n\
				<td>\n\
							Fired after a selection change has been applied to a grid widget associated with a grid data parameter.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_GridData_OnButtonClicked.html\">OnButtonClicked (GridData)</a></td>\n\
				<td>\n\
							Fired when a button gets clicked in a grid widget associated with a grid data parameter.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_GridData_OnHeaderDoubleClick.html\">OnHeaderDoubleClick (GridData)</a></td>\n\
				<td>\n\
							Fired when a header gets double-clicked in a grid widget associated with a grid data parameter.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_GridData_OnContextMenuInit.html\">OnContextMenuInit (GridData)</a></td>\n\
				<td>\n\
							Fired when a mouse right-click occurs over a grid widget associated with a grid data parameter.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_GridData_OnContextMenuSelected.html\">OnContextMenuSelected (GridData)</a></td>\n\
				<td>\n\
							Fired when a contextual menu item is selected over a grid widget associated with a grid data parameter.\n\
						</td>\n\
</tr>\n\
</table>\n\
</p>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Event Callbacks</h3>\n\
<div><p><a name=\"cb_event\"> </a>	<p>		<table>			<tr>				<th>Callback</th>\n\
				<th>Description</th>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html\">OnEvent</a></td>\n\
				<td>\n\
							Fired when the associated event occurs (for example, the <span style=\"font-family: courier, monospace;\">OnEvent</span> callback \n\
							for a <a href=\"#!/url=./si_om/siEventID.html#siOnSelectionChange\">siOnSelectionChange</a> event fires when a user selects or \n\
							deselects objects).\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Plugin_Term.html\">Term</a></td>\n\
				<td>\n\
							Fired when a property is deleted.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Plugin_Unload.html\">Unload</a>, <a href=\"#!/url=./si_cmds/cb_Plugin_Reload.html\">Reload</a></td>\n\
				<td>\n\
							Fired when the plug-in is cached (reloaded) and uncached (unloaded). By default, all plug-ins \n\
							are cached, but users can remove a plug-in from the cache (by right-clicking a plug-in in the \n\
							plug-in tree and clearing the <i>Cached</i> checkmark). \n\
						</td>\n\
</tr>\n\
</table>\n\
</p>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Filter Callbacks</h3>\n\
<div><p><a name=\"cb_filter\"> </a>	<p>		<table>			<tr>				<th>Callback</th>\n\
				<th>Description</th>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Filter_Match.html\">Match</a></td>\n\
				<td>\n\
							Fired when a user selects objects in 3D views and the schematic. Match determines whether an \n\
							element matches the filter requirements. \n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Filter_Subset.html\">Subset</a></td>\n\
				<td>\n\
							Fired when a user selects subcomponents in a 3D view, or to filter the nodes displayed in an \n\
							explorer view. Subset takes a collection of elements (objects or subcomponents) and determines \n\
							the subset of elements that match the filter requirements. \n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Filter_IsApplicable.html\">IsApplicable</a></td>\n\
				<td>\n\
							Fired by Softimage to determine whether a filter applies to the current selection (for example, a \n\
							subcomponent filter does not apply to 3D objects). \n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Filter_Init.html\">Init (Filter)</a></td>\n\
				<td>\n\
							Fired after the plug-in loaded (that is, after <a href=\"#!/url=./si_cmds/cb_XSILoadPlugin.html\">XSILoadPlugin</a> \n\
							returns). For example, Init is fired when you start Softimage or load the plug-in in the Plugin Manager. \n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Plugin_Term.html\">Term</a></td>\n\
				<td>\n\
							Fired when a plug-in is removed from Softimage (just before Softimage calls \n\
							<a href=\"#!/url=./si_cmds/cb_XSIUnloadPlugin.html\">XSIUnloadPlugin</a>). For example, Term is triggered \n\
							when you exit Softimage or unload the plug-in.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Plugin_Unload.html\">Unload</a>, <a href=\"#!/url=./si_cmds/cb_Plugin_Reload.html\">Reload</a></td>\n\
				<td>\n\
							Fired when the plug-in is cached (reloaded) and uncached (unloaded). By default, all plug-ins \n\
							are cached, but users can remove a plug-in from the cache (by right-clicking a plug-in in the \n\
							plug-in tree and clearing the <i>Cached</i> checkmark). \n\
						</td>\n\
</tr>\n\
</table>\n\
</p>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Graphic Sequencer Callbacks</h3>\n\
<div><p><a name=\"cb_graphicsequencer\"> </a>	<p>		<table>			<tr>				<th>Callback</th>\n\
				<th>Description</th>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_XGS_Init.html\">Init (Graphic Sequencer)</a></td>\n\
				<td>\n\
							Fired after the plug-in loaded (that is, after <a href=\"#!/url=./si_cmds/cb_XSILoadPlugin.html\">XSILoadPlugin</a> \n\
							returns). For example, <span style=\"font-family: courier, monospace;\">Init</span> is fired when you start Softimage or load the plug-in in \n\
							the Plugin Manager. This is where you register a viewport mode or callback with the graphic sequencer.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_XGS_Execute.html\">Execute (Graphic Sequencer)</a></td>\n\
				<td>\n\
							Executes the viewport mode or callback.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_XGS_Term.html\">Term (Graphic Sequencer)</a></td>\n\
				<td>\n\
							Optional. This is where you initialize and free any instance-specific data used by a viewport mode or \n\
							callback.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Plugin_Unload.html\">Unload</a>, <a href=\"#!/url=./si_cmds/cb_Plugin_Reload.html\">Reload</a></td>\n\
				<td>\n\
							Fired when the plug-in is cached (reloaded) and uncached (unloaded). By default, all plug-ins \n\
							are cached, but users can remove a plug-in from the cache (by right-clicking a plug-in in the \n\
							plug-in tree and clearing the <i>Cached</i> checkmark). \n\
						</td>\n\
</tr>\n\
</table>\n\
</p>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Menu Callbacks</h3>\n\
<div><p><a name=\"cb_menu\"> </a>	<p>		<table>			<tr>				<th>Callback</th>\n\
				<th>Description</th>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Menu_Init.html\">Init (Menu)</a></td>\n\
				<td>\n\
							For dynamic menus, this callback is fired every time the menu is accessed. For static menus, \n\
							this callback is fired the first time the menu is accessed after the plug-in is loaded.\n\
							This is where you add items and commands to a menu.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_MenuItem_Callback.html\">Menu Item Callbacks</a></td>\n\
				<td>\n\
							Fired when a user selects the menu item. The name of a menu item callback is specified in the \n\
							call to <a href=\"#!/url=./si_om/Menu.AddCallbackItem.html\">Menu.AddCallbackItem</a> in the Init callback.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Plugin_Term.html\">Term</a></td>\n\
				<td>\n\
							Fired when a plug-in is removed from Softimage (just before Softimage calls \n\
							<a href=\"#!/url=./si_cmds/cb_XSIUnloadPlugin.html\">XSIUnloadPlugin</a>). For example, Term is triggered \n\
							when you exit Softimage or unload or update the plug-in.\n\
							<br /><br />\n\
							Term is fired only if <a href=\"#!/url=./si_cmds/cb_Menu_Init.html\">Init (Menu)</a> was fired at some point. \n\
							If the menu was never opened, then Term has nothing to do.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Plugin_Unload.html\">Unload</a>, <a href=\"#!/url=./si_cmds/cb_Plugin_Reload.html\">Reload</a></td>\n\
				<td>\n\
							Fired when the plug-in is cached (reloaded) and uncached (unloaded). By default, all plug-ins \n\
							are cached, but users can remove a plug-in from the cache (by right-clicking a plug-in in the \n\
							plug-in tree and clearing the <i>Cached</i> checkmark). \n\
						</td>\n\
</tr>\n\
</table>\n\
</p>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Custom Display (View) Callbacks</h3>\n\
<div><p><a name=\"cb_custom_display_view\"> </a>	<p>		<table>			<tr>				<th>Callback</th>\n\
				<th>Description</th>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_CustomDisplay_Init.html\">Init (Custom Display)</a></td>\n\
				<td>\n\
							Fired after the plug-in loaded (that is, after <a href=\"#!/url=./si_cmds/cb_XSILoadPlugin.html\">XSILoadPlugin</a> \n\
							returns). For example, Init is fired when you start Softimage or load the plug-in in the Plugin Manager. Used \n\
							to initialize the custom display window.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_CustomDisplay_Notify.html\">Notify</a></td>\n\
				<td>\n\
							Fired when something happens in the scene, such as a parameter change or selection change.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_CustomDisplay_Term.html\">Term (Custom Display)</a></td>\n\
				<td>\n\
							Fired when the top-level window is destroyed.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Plugin_Unload.html\">Unload</a>, <a href=\"#!/url=./si_cmds/cb_Plugin_Reload.html\">Reload</a></td>\n\
				<td>\n\
							Fired when the plug-in is cached (reloaded) and uncached (unloaded). By default, all plug-ins \n\
							are cached, but users can remove a plug-in from the cache (by right-clicking a plug-in in the \n\
							plug-in tree and clearing the <i>Cached</i> checkmark). \n\
						</td>\n\
</tr>\n\
</table>\n\
</p>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Renderer Callbacks</h3>\n\
<div><p><a name=\"cb_renderer\"> </a>	<p>		<table>			<tr>				<th>Callback</th>\n\
				<th>Description</th>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Renderer_Init.html\">Init (Renderer)</a></td>\n\
				<td>\n\
							Fired after the plug-in loaded (that is, after <a href=\"#!/url=./si_cmds/cb_XSILoadPlugin.html\">XSILoadPlugin</a> \n\
							returns). For example, Init is fired when you start Softimage or load the plug-in in the Plugin Manager. Used \n\
							to tell Softimage which process types the rendering engine supports, which custom property to use for the renderer \n\
							options, and which image file formats it can output.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Renderer_Process.html\">Process</a></td>\n\
				<td>\n\
							Fired whenever the rendering engine is requested to perform a process (for example, render a frame). \n\
							This is the most important callback for a custom renderer plug-in.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Renderer_Abort.html\">Abort</a></td>\n\
				<td>\n\
							Fired when the Render Manager needs to abort a process. This callback function is simply the \n\
							messenger, it should trigger an abort and return as quickly as possible.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Renderer_Query.html\">Query</a></td>\n\
				<td>\n\
							Fired when the Render Manager needs to query the renderer for some information.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Renderer_Quality.html\">Quality</a></td>\n\
				<td>\n\
							Optional. Called by the Render Manager to both return the current \"quality\" level of the render \n\
							options and to set a preset for the given quality level.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Renderer_Cleanup.html\">Cleanup</a></td>\n\
				<td>\n\
							Optional. Fired when the current scene is being destroyed, or if the specific render process \n\
							(region, pass render, etc.) requests that data be cleaned up after the process has completed.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Plugin_Unload.html\">Unload</a>, <a href=\"#!/url=./si_cmds/cb_Plugin_Reload.html\">Reload</a></td>\n\
				<td>\n\
							Fired when the plug-in is cached (reloaded) and uncached (unloaded). By default, all plug-ins \n\
							are cached, but users can remove a plug-in from the cache (by right-clicking a plug-in in the \n\
							plug-in tree and clearing the <i>Cached</i> checkmark). \n\
						</td>\n\
</tr>\n\
</table>\n\
</p>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>ICENode Callbacks</h3>\n\
<div><p><a name=\"cb_icenodes\"> </a>	<p>		<table>			<tr>				<th>Callback</th>\n\
				<th>Description</th>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_ICENodes_Init.html\">Init (ICE Nodes)</a></td>\n\
				<td>\n\
							Fired after the plug-in loaded (that is, after <a href=\"#!/url=./si_cmds/cb_XSILoadPlugin.html\">XSILoadPlugin</a> \n\
							returns). For example, Init is fired when you start Softimage or load the plug-in in the Plugin Manager. \n\
							This is where you initialize cached user data.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_ICENode_BeginEvaluate.html\">BeginEvaluate</a></td>\n\
				<td>\n\
							This callback must be implemented for each registered <a href=\"#!/url=./si_cpp/classXSI_1_1ICENode.html\">ICENode</a>. \n\
							The evaluation phase can be called in single-threaded or in multi-threaded context depending on the \n\
							threading processing mode in use.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_ICENode_EndEvaluate.html\">EndEvaluate</a></td>\n\
				<td>\n\
							This optional callback is a single-threaded task for freeing up memory, cleaning resources, or anything \n\
							required to undone the work performed in <a href=\"#!/url=./si_cmds/cb_ICENode_BeginEvaluate.html\">BeginEvaluate</a>.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_ICENode_Evaluate.html\">Evaluate</a></td>\n\
				<td>\n\
							This optional callback is called during a single-threaded phase where memory is usually allocated in \n\
							preparation for the multi-threaded evaluation phase.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_ICENode_SubmitEvaluationPhaseInfo.html\">SubmitEvaluationPhaseInfo</a></td>\n\
				<td>\n\
							This callback is required in the multi-phase evaluation mode for specifying the ports to be pulled for \n\
							the current evaluation phase.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Plugin_Unload.html\">Unload</a>, <a href=\"#!/url=./si_cmds/cb_Plugin_Reload.html\">Reload</a></td>\n\
				<td>\n\
							Fired when the plug-in is cached (reloaded) and uncached (unloaded). By default, all plug-ins \n\
							are cached, but users can remove a plug-in from the cache (by right-clicking a plug-in in the \n\
							plug-in tree and clearing the <i>Cached</i> checkmark). \n\
						</td>\n\
</tr>\n\
</table>\n\
</p>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Shader Callbacks</h3>\n\
<div><p><a name=\"cb_shader\"> </a>	<p>		<table>			<tr>				<th>Callback</th>\n\
				<th>Description</th>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Shader_DefineInfo.html\">DefineInfo</a></td>\n\
				<td>\n\
							Fired after the shader plug-in loads (that is, after <a href=\"#!/url=./si_cmds/cb_XSILoadPlugin.html\">XSILoadPlugin</a> \n\
							returns). For example, DefineInfo is fired when you start Softimage or load the plug-in in the Plugin Manager. \n\
							This is where you register a custom shader definition so that it will appear in the Render Tree preset list.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Shader_Define.html\">Define (Shader)</a></td>\n\
				<td>\n\
							Fired when a shader is instantiated in the render tree or by connecting it to a parameter. This callback is\n\
							responsible for populating the definition, including the list of parameters and any <a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a> \n\
							required by the custom shader.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Plugin_Unload.html\">Unload</a>, <a href=\"#!/url=./si_cmds/cb_Plugin_Reload.html\">Reload</a></td>\n\
				<td>\n\
							Fired when the plug-in is cached (reloaded) and uncached (unloaded). By default, all plug-ins \n\
							are cached, but users can remove a plug-in from the cache (by right-clicking a plug-in in the \n\
							plug-in tree and clearing the <i>Cached</i> checkmark). \n\
						</td>\n\
</tr>\n\
</table>\n\
</p>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Shader Parser Callbacks</h3>\n\
<div><p><a name=\"cb_shaderparser\"> </a>	<p>		<table>			<tr>				<th>Callback</th>\n\
				<th>Description</th>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_ShaderParser_QueryParserSettings.html\">QueryParserSettings</a></td>\n\
				<td>\n\
							Fired at startup or when updating the preset manager prior to when the\n\
							<a href=\"#!/url=./si_cmds/cb_ShaderParser_ParseInfo.html\">ParseInfo</a> callback fires. Tells Softimage where to find \n\
							the files to parse and what extension(s) to look for.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_ShaderParser_ParseInfo.html\">ParseInfo</a></td>\n\
				<td>\n\
							Fired when Softimage parses a file matching the location and type set in the \n\
							<a href=\"#!/url=./si_cmds/cb_ShaderParser_QueryParserSettings.html\">QueryParserSettings</a> callback. The ParseInfo \n\
							callback is responsible for building the list of shader definitions from the information in the file.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_ShaderParser_Parse.html\">Parse</a></td>\n\
				<td>\n\
							Fired when a shader implemented with this parser\'s language is instantiated.  Parses the associated shader \n\
							file and populates the shader definition with its parameter definitions and attributes.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_Plugin_Unload.html\">Unload</a>, <a href=\"#!/url=./si_cmds/cb_Plugin_Reload.html\">Reload</a></td>\n\
				<td>\n\
							Fired when the plug-in is cached (reloaded) and uncached (unloaded). By default, all plug-ins \n\
							are cached, but users can remove a plug-in from the cache (by right-clicking a plug-in in the \n\
							plug-in tree and clearing the <i>Cached</i> checkmark). \n\
						</td>\n\
</tr>\n\
</table>\n\
</p>\n\
</p></div>\n\
\n\
<hr width=\"100%\" />\n\
<h3>Realtime Shader Callbacks</h3>\n\
<div><p><a name=\"cb_rtshaders\"> </a>	<p>		<table>			<tr>				<th>Callback</th>\n\
				<th>Description</th>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_RTShaders_GetVersion.html\">RTS_GetVersion (Realtime Shaders)</a></td>\n\
				<td>\n\
							Must be implemented by every Realtime Shader plug-in.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_RTShaders_Init.html\">Init (Realtime Shaders)</a></td>\n\
				<td>\n\
							Fired the first time the shader is instantiated in a session.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_RTShaders_GetAttributeList.html\">GetAttributeList</a></td>\n\
				<td>\n\
							Enables a shader to tell Softimage which attribute it needs in order to perform rendering.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_RTShaders_Execute.html\">Execute (Realtime Shaders)</a></td>\n\
				<td>\n\
							Main entry point for rendering the realtime shader.\n\
						</td>\n\
</tr>\n\
			<tr>				<td class=\"name\"><a href=\"#!/url=./si_cmds/cb_RTShaders_Term.html\">Term (Realtime Shaders)</a></td>\n\
				<td>\n\
							Fired when the shader is deleted. \n\
						</td>\n\
</tr>\n\
</table>\n\
</p>\n\
</p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";