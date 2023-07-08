var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siEventID</title>\n\
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
            <h1>siEventID</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siEventID</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>This enumerator provides the identifiers for the Softimage events, they can be used for implementing C++ \n\
event handlers in order to identify the events fired by Softimage.</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>siEventID.siOnBeginNewScene                                                 // 542179328\n\
siEventID.siOnEndNewScene                                                   // 542179329\n\
siEventID.siOnBeginSceneOpen                                                // 542179330\n\
siEventID.siOnEndSceneOpen                                                  // 542179331\n\
siEventID.siOnBeginSceneSave                                                // 542179332\n\
siEventID.siOnEndSceneSave                                                  // 542179333\n\
siEventID.siOnBeginSceneSaveAs                                              // 542179334\n\
siEventID.siOnEndSceneSaveAs                                                // 542179335\n\
siEventID.siOnTerminate                                                     // 542179336\n\
siEventID.siOnSelectionChange                                               // 542179337\n\
siEventID.siOnBeginFrame                                                    // 542179338\n\
siEventID.siOnEndFrame                                                      // 542179339\n\
siEventID.siOnBeginSequence                                                 // 542179340\n\
siEventID.siOnEndSequence                                                   // 542179341\n\
siEventID.siOnKeyUp                                                         // 542179342\n\
siEventID.siOnKeyDown                                                       // 542179343\n\
siEventID.siOnValueChange                                                   // 542179344\n\
siEventID.siOnTimeChange                                                    // 542179345\n\
siEventID.siOnWindowEvent                                                   // 542179346\n\
siEventID.siOnBeginFileExport                                               // 542179347\n\
siEventID.siOnEndFileExport                                                 // 542179348\n\
siEventID.siOnBeginFileImport                                               // 542179349\n\
siEventID.siOnEndFileImport                                                 // 542179350\n\
siEventID.siOnStartup                                                       // 542179351\n\
siEventID.siOnSourcePathChange                                              // 542179352\n\
siEventID.siOnObjectAdded                                                   // 542179353\n\
siEventID.siOnObjectRemoved                                                 // 542179354\n\
siEventID.siOnTimer                                                         // 542179355\n\
siEventID.siOnBeginSceneSave2                                               // 542179356\n\
siEventID.siOnEndSceneSave2                                                 // 542179357\n\
siEventID.siOnCloseScene                                                    // 542179358\n\
siEventID.siOnActivate                                                      // 542179359\n\
siEventID.siOnMaximize                                                      // 542179360\n\
siEventID.siOnMinimize                                                      // 542179361\n\
siEventID.siOnChangeProject                                                 // 542179362\n\
siEventID.siOnRefModelModSave                                               // 542179363\n\
siEventID.siOnBeginRefModelModLoad                                          // 542179364\n\
siEventID.siOnEndRefModelModLoad                                            // 542179365\n\
siEventID.siOnCustomFileImport                                              // 542179366\n\
siEventID.siOnCustomFileExport                                              // 542179367\n\
siEventID.siOnDragAndDrop                                                   // 542179368\n\
siEventID.siOnBeginPassChange                                               // 542179369\n\
siEventID.siOnEndPassChange                                                 // 542179370\n\
siEventID.siOnStartAnimation                                                // 542179371\n\
siEventID.siOnStopAnimation                                                 // 542179372\n\
siEventID.siOnRefModelLoad                                                  // 542179373\n\
siEventID.siOnConnectShader                                                 // 542179374\n\
siEventID.siOnDisconnectShader                                              // 542179375\n\
siEventID.siOnAddShaderPort                                                 // 542179376\n\
siEventID.siOnRemoveShaderPort                                              // 542179377\n\
siEventID.siOnCreateShader                                                  // 542179378\n\
siEventID.siOnCreateShaderDef                                               // 542179379\n\
siEventID.siOnCustomShaderExport                                            // 542179380\n\
siEventID.siOnRenderAbort                                                   // 542179381\n\
siEventID.siOnBeginScrubbing                                                // 542179382\n\
siEventID.siOnEndScrubbing                                                  // 542179383\n\
siEventID.siOnPreParseShaderDef                                             // 542179384\n\
siEventID.siOnPreDefineShaderDef                                            // 542179385\n\
siEventID.siOnTimeTransportChange                                           // 542180328\n\
siEventID.siOnBeginRenderPass                                               // 542180329\n\
siEventID.siOnEndRenderPass                                                 // 542180330\n\
siEventID.siOnBeginSceneSaveBackup                                          // 542180331\n\
siEventID.siOnEndSceneSaveBackup                                            // 542180332\n\
siEventID.siOnEndCommand                                                    // 542181329\n\
siEventID.siOnNestedObjectsChange                                           // 542181330\n\
siEventID.siOnBeginCommand                                                  // 542181331\n\
siEventID.siOnDragAndDrop2                                                  // 542181332</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnActivate\"> </a>siOnActivate		</td>\n\
		<td class=\"example\">542179359		</td>\n\
		<td>\n\
OnActivate event identifier. Fired when the Softimage application is activated or deactivated. The Softimage application is activated when a window belonging to a different application than Softimage is about to be deactivated. This results typically from a user action such as changing the focus or closing the window. See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnActivate\">Context Attributes</a> for this event.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnAddShaderPort\"> </a>siOnAddShaderPort		</td>\n\
		<td class=\"example\">542179376		</td>\n\
		<td>\n\
OnAddShaderPort event identifier. Not implemented.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnBeginCommand\"> </a>siOnBeginCommand		</td>\n\
		<td class=\"example\">542181331		</td>\n\
		<td>\n\
OnBeginCommand event identifier. Fired before a <a href=\"#!/url=./si_om/Command.html\">Command</a> is executed. This event is fired for top-level commands only, sub-commands executed while a top-level command is running will not trigger this event. <br /><br />See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnBeginCommand\">Context Attributes</a> for this event.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnBeginFileExport\"> </a>siOnBeginFileExport		</td>\n\
		<td class=\"example\">542179347		</td>\n\
		<td>\n\
OnBeginFileExport event identifier. This event occurs at the beginning of a file export. <br /><br />See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnBeginFileExport\">Context Attributes</a> for this event.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnBeginFileImport\"> </a>siOnBeginFileImport		</td>\n\
		<td class=\"example\">542179349		</td>\n\
		<td>\n\
OnBeginFileImport event identifier. This event occurs at the beginning of a file import. <br /><br />See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnBeginFileImport\">Context Attributes</a> for this event.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnBeginFrame\"> </a>siOnBeginFrame		</td>\n\
		<td class=\"example\">542179338		</td>\n\
		<td>\n\
OnBeginFrame event identifier. Fired when a frame is rendered. See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnBeginFrame\">Context Attributes</a> for this event.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnBeginNewScene\"> </a>siOnBeginNewScene		</td>\n\
		<td class=\"example\">542179328		</td>\n\
		<td>\n\
OnBeginNewScene event identifier. Fired when a new scene is created.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnBeginPassChange\"> </a>siOnBeginPassChange		</td>\n\
		<td class=\"example\">542179369		</td>\n\
		<td>\n\
OnBeginPassChange event identifier. Fired before a renderpass is changed. See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnBeginPassChange\">Context Attributes</a> for this event.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnBeginRefModelModLoad\"> </a>siOnBeginRefModelModLoad		</td>\n\
		<td class=\"example\">542179364		</td>\n\
		<td>\n\
OnRefModelPostLoad event identifier. Fired just before loading the modification of the current reference model resolution.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnBeginRenderPass\"> </a>siOnBeginRenderPass		</td>\n\
		<td class=\"example\">542180329		</td>\n\
		<td>\n\
OnBeginRenderPass event identifier. Fired before a pass gets rendered. This callback can be used to modify the scene before the rendering starts. See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnBeginRenderPass\">Context Attributes</a> for this event.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnBeginSceneOpen\"> </a>siOnBeginSceneOpen		</td>\n\
		<td class=\"example\">542179330		</td>\n\
		<td>\n\
OnBeginSceneOpen event identifier. Fired after a user clicks OK in the Load Scene dialog box. See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnBeginSceneOpen\">Context Attributes</a> for this event.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnBeginSceneSave\"> </a>siOnBeginSceneSave		</td>\n\
		<td class=\"example\">542179332		</td>\n\
		<td>\n\
OnBeginSceneSave event identifier. Fired when a scene is saved.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnBeginSceneSave2\"> </a>siOnBeginSceneSave2		</td>\n\
		<td class=\"example\">542179356		</td>\n\
		<td>\n\
OnBeginSceneSave2 event identifier. Same as siOnBeginSceneSave except this version allows you to pass in the full path name of the scene via <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnBeginSceneSave2\">Context Attributes</a>.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnBeginSceneSaveAs\"> </a>siOnBeginSceneSaveAs		</td>\n\
		<td class=\"example\">542179334		</td>\n\
		<td>\n\
OnBeginSceneSaveAs event identifier. Fired when a scene is saved using File > Save As. See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnBeginSceneSaveAs\">Context Attributes</a> for this event.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnBeginSceneSaveBackup\"> </a>siOnBeginSceneSaveBackup		</td>\n\
		<td class=\"example\">542180331		</td>\n\
		<td>\n\
OnBeginSceneSaveBackup event identifier. Fired when a scene is backup using File > Save Backup. See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnBeginSceneSaveBackup\">Context Attributes</a> for this event.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnBeginSequence\"> </a>siOnBeginSequence		</td>\n\
		<td class=\"example\">542179340		</td>\n\
		<td>\n\
OnBeginSequence event identifier. Fired before the first OnBeginFrame event when a sequence is rendered. See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnBeginSequence\">Context Attributes</a> for this event.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnBeginScrubbing\"> </a>siOnBeginScrubbing		</td>\n\
		<td class=\"example\">542179382		</td>\n\
		<td>\n\
OnBeginScrubbing event identifier. Fired before setting a parameter value(s) with a PPG slider control. See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnBeginScrubbing\">Context Attributes</a> for this event.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnChangeProject\"> </a>siOnChangeProject		</td>\n\
		<td class=\"example\">542179362		</td>\n\
		<td>\n\
OnChangeProject event identifier. Fired when the project changes in Softimage. This can occur when one of the following actions takes place: <br /><br /> - a new project is created <br /><br /> - a project is activated <br /><br /> - a new scene is loaded <br /><br /> - during a crash recovery operation <br /><br />Note: The event is not fired when a project gets closed due to Softimage terminating. <br /><br />See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnChangeProject\">Context Attributes</a> for this event.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnCloseScene\"> </a>siOnCloseScene		</td>\n\
		<td class=\"example\">542179358		</td>\n\
		<td>\n\
OnCloseScene event identifier. Fired when a scene is closing. This event occurs before a new scene or a new project is created, or before a scene is loaded.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnConnectShader\"> </a>siOnConnectShader		</td>\n\
		<td class=\"example\">542179374		</td>\n\
		<td>\n\
OnConnectShader event identifier. Fired after a shader port is connected. See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnConnectShader\">Context Attributes</a> for this event.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnCreateShader\"> </a>siOnCreateShader		</td>\n\
		<td class=\"example\">542179378		</td>\n\
		<td>\n\
OnCreateShader event identifier. Fired after a shader is created. See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnCreateShader\">Context Attributes</a> for this event.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnCreateShaderDef\"> </a>siOnCreateShaderDef		</td>\n\
		<td class=\"example\">542179379		</td>\n\
		<td>\n\
OnCreateShaderDef event identifier. Fired after a shader definition is created. See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnCreateShaderDef\">Context Attributes</a> for this event. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnCustomFileExport\"> </a>siOnCustomFileExport		</td>\n\
		<td class=\"example\">542179367		</td>\n\
		<td>\n\
OnCustomFileExport event identifier. Fired when exporting an asset with a custom file-extension. <br /><br />See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnCustomFileExport\">Context Attributes</a> for this event. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnCustomFileImport\"> </a>siOnCustomFileImport		</td>\n\
		<td class=\"example\">542179366		</td>\n\
		<td>\n\
OnCustomFileImport event identifier. Fired when importing an asset with a custom file-extension. <br /><br />See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnCustomFileImport\">Context Attributes</a> for this event. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnCustomShaderExport\"> </a>siOnCustomShaderExport		</td>\n\
		<td class=\"example\">542179380		</td>\n\
		<td>\n\
siOnCustomShaderExport event identifier. Fired when exporting a shader or shader tree in the RenderTree with a custom file-extension. See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnCustomShaderExport\">Context Attributes</a> for this event. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnDisconnectShader\"> </a>siOnDisconnectShader		</td>\n\
		<td class=\"example\">542179375		</td>\n\
		<td>\n\
OnDisconnectShader event identifier. Fired after a shader port is disconnected. See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnDisconnectShader\">Context Attributes</a> for this event.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnDragAndDrop\"> </a>siOnDragAndDrop		</td>\n\
		<td class=\"example\">542179368		</td>\n\
		<td>\n\
OnDragAndDrop event identifier. Fired when a source is dragged over or dropped in a view and no default Softimage handlers dealt with it. See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnDragAndDrop\">Context Attributes</a> for this event. It is recommended to use the siOnDragAndDrop2 event instead of the siOnDragAndDrop event since it offers more flexibility to plug-ins.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnDragAndDrop2\"> </a>siOnDragAndDrop2		</td>\n\
		<td class=\"example\">542181332		</td>\n\
		<td>\n\
OnDragAndDrop event identifier. Fired when a source enters, leaves, is dragged over or is dropped into a supported view (Scene Explorer, Viewport.) See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnDragAndDrop2\">Context Attributes</a> for this event. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnEndCommand\"> </a>siOnEndCommand		</td>\n\
		<td class=\"example\">542181329		</td>\n\
		<td>\n\
OnEndCommand event identifier. Fired when a <a href=\"#!/url=./si_om/Command.html\">Command</a> terminates. This event is fired for top-level commands only, sub-commands executed while a top-level command is running will not trigger this event. <br /><br />See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnEndCommand\">Context Attributes</a> for this event.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnEndFileExport\"> </a>siOnEndFileExport		</td>\n\
		<td class=\"example\">542179348		</td>\n\
		<td>\n\
OnEndFileExport event identifier. This event occurs at the end of a file export. <br /><br />See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnEndFileExport\">Context Attributes</a> for this event.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnEndFileImport\"> </a>siOnEndFileImport		</td>\n\
		<td class=\"example\">542179350		</td>\n\
		<td>\n\
OnEndFileImport event identifier. This event occurs at the end of a file import. <br /><br />See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnEndFileImport\">Context Attributes</a> for this event.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnEndFrame\"> </a>siOnEndFrame		</td>\n\
		<td class=\"example\">542179339		</td>\n\
		<td>\n\
OnEndFrame event identifier. Fired when a frame is rendered. See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnEndFrame\">Context Attributes</a> for this event.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnEndNewScene\"> </a>siOnEndNewScene		</td>\n\
		<td class=\"example\">542179329		</td>\n\
		<td>\n\
OnEndNewScene event identifier. Fired when a new scene is created.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnEndPassChange\"> </a>siOnEndPassChange		</td>\n\
		<td class=\"example\">542179370		</td>\n\
		<td>\n\
OnEndPassChange event identifier. Fired after a renderpass has been changed. See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnEndPassChange\">Context Attributes</a> for this event.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnEndRefModelModLoad\"> </a>siOnEndRefModelModLoad		</td>\n\
		<td class=\"example\">542179365		</td>\n\
		<td>\n\
OnEndRefModelModLoad event identifier. Fired just after loading the modification of the current reference model resolution. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnEndRenderPass\"> </a>siOnEndRenderPass		</td>\n\
		<td class=\"example\">542180330		</td>\n\
		<td>\n\
OnEndRenderPass event identifier. Fired after a pass has been rendered. See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnEndRenderPass\">Context Attributes</a> for this event.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnEndSceneOpen\"> </a>siOnEndSceneOpen		</td>\n\
		<td class=\"example\">542179331		</td>\n\
		<td>\n\
OnEndSceneOpen event identifier. Fired after the scene is loaded. See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnEndSceneOpen\">Context Attributes</a> for this event.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnEndSceneSave\"> </a>siOnEndSceneSave		</td>\n\
		<td class=\"example\">542179333		</td>\n\
		<td>\n\
OnEndSceneSave event identifier. Fired when a scene is saved.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnEndSceneSave2\"> </a>siOnEndSceneSave2		</td>\n\
		<td class=\"example\">542179357		</td>\n\
		<td>\n\
OnEndSceneSave2 event identifier. Same as siOnEndSceneSave except this version allows you to pass in the full path name of the scene via <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnEndSceneSave2\">Context Attributes</a>.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnEndSceneSaveAs\"> </a>siOnEndSceneSaveAs		</td>\n\
		<td class=\"example\">542179335		</td>\n\
		<td>\n\
OnEndSceneSaveAs event identifier. Fired when a scene is saved using File > Save As. See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnEndSceneSaveAs\">Context Attributes</a> for this event.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnEndSceneSaveBackup\"> </a>siOnEndSceneSaveBackup		</td>\n\
		<td class=\"example\">542180332		</td>\n\
		<td>\n\
OnEndSceneSaveBackup event identifier. Fired when a scene is backup using File > Save Backup. See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnEndSceneSaveBackup\">Context Attributes</a> for this event.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnEndSequence\"> </a>siOnEndSequence		</td>\n\
		<td class=\"example\">542179341		</td>\n\
		<td>\n\
OnEndSequence event identifier. Fired after the last OnEndFrame event when a sequence is rendered. See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnEndSequence\">Context Attributes</a> for this event.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnEndScrubbing\"> </a>siOnEndScrubbing		</td>\n\
		<td class=\"example\">542179383		</td>\n\
		<td>\n\
OnEndScrubbing event identifier. Fired after a parameter value(s) have been changed with a slider control. See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnEndScrubbing\">Context Attributes</a> for this event.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnKeyDown\"> </a>siOnKeyDown		</td>\n\
		<td class=\"example\">542179343		</td>\n\
		<td>\n\
OnKeyDown event identifier. Fired when a user presses a key. OnKeyDown is not fired if the window with the focus handles keyboard events. See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnKeyDown\">Context Attributes</a> for this event.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnKeyUp\"> </a>siOnKeyUp		</td>\n\
		<td class=\"example\">542179342		</td>\n\
		<td>\n\
OnKeyUp event identifier. Fired when a user releases a key. OnKeyUp is not fired if the window with the focus handles keyboard events. See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnKeyUp\">Context Attributes</a> for this event.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnMaximize\"> </a>siOnMaximize		</td>\n\
		<td class=\"example\">542179360		</td>\n\
		<td>\n\
OnMaximize event identifier. Fired when the Softimage application window is maximized. The Maximize action activates the application which therefore triggers an siOnActivate event with a state set to true.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnMinimize\"> </a>siOnMinimize		</td>\n\
		<td class=\"example\">542179361		</td>\n\
		<td>\n\
OnMinimize event identifier. Fired when the Softimage application window is minimized. The Minimize action de-activates the application which therefore triggers an siOnActivate event with a state set to false.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnNestedObjectsChange\"> </a>siOnNestedObjectsChange		</td>\n\
		<td class=\"example\">542181330		</td>\n\
		<td>\n\
OnNestedObjectsChange event identifier.  Fired for objects that have gained or lost an object nested under it since the last UI update. This event is mainly intended to help keep a custom UI up to date. Common examples of when this event fires include when an object gains or loses a child, property, or operator; when a mixer track gains or loses a clip; when an item is added to or removed from a group or layer. If, between two UI updates, an object has a change in the objects nested underneath and is then deleted, this event will not fire for that object (see \"siOnObjectRemoved\" event). See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnNestedObjectsChange\">Context Attributes</a> for this event.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnObjectAdded\"> </a>siOnObjectAdded		</td>\n\
		<td class=\"example\">542179353		</td>\n\
		<td>\n\
OnObjectAdded event identifier. Fired when an object has been added to the scene. See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnObjectAdded\">Context Attributes</a> for this event.<br /><br />Note: Prior to v6.5 this was only available for the <a href=\"#!/url=./files/cus_displayhost.htm\">Custom Display Host</a>.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnObjectRemoved\"> </a>siOnObjectRemoved		</td>\n\
		<td class=\"example\">542179354		</td>\n\
		<td>\n\
OnObjectRemoved event identifier. Fired when an object has been removed from the scene. See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnObjectRemoved\">Context Attributes</a> for this event.<br /><br />Note: Prior to v6.5 this was only available for the <a href=\"#!/url=./files/cus_displayhost.htm\">Custom Display Host</a>.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnPreParseShaderDef\"> </a>siOnPreParseShaderDef		</td>\n\
		<td class=\"example\">542179384		</td>\n\
		<td>\n\
OnPreParseShaderDef event identifier. Fired after a shader definition is pre parsed. See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnPreParseShaderDef\">Context Attributes</a> for this event. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnPreDefineShaderDef\"> </a>siOnPreDefineShaderDef		</td>\n\
		<td class=\"example\">542179385		</td>\n\
		<td>\n\
OnPreDefineShaderDef event identifier. Fired after a shader definition is pre defined. See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnPreDefineShaderDef\">Context Attributes</a> for this event. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnRefModelLoad\"> </a>siOnRefModelLoad		</td>\n\
		<td class=\"example\">542179373		</td>\n\
		<td>\n\
OnRefModelLoad event identifier. Fired before the current resolution gets loaded for a referenced model		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnRefModelModSave\"> </a>siOnRefModelModSave		</td>\n\
		<td class=\"example\">542179363		</td>\n\
		<td>\n\
OnRefModelModSave event identifier. Fired just before saving the modification of the current reference model resolution.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnRemoveShaderPort\"> </a>siOnRemoveShaderPort		</td>\n\
		<td class=\"example\">542179377		</td>\n\
		<td>\n\
OnRemoveShaderPort event identifier. Not implemented. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnRenderAbort\"> </a>siOnRenderAbort		</td>\n\
		<td class=\"example\">542179381		</td>\n\
		<td>\n\
OnRenderAbort event identifier. Fired when a render sequence has been aborted by the user. The event can also be sent when a render region job is re-executed as a result of a scene change.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnSelectionChange\"> </a>siOnSelectionChange		</td>\n\
		<td class=\"example\">542179337		</td>\n\
		<td>\n\
OnSelectionChange event identifier. Fired when the selection lists change. See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnSelectionChange\">Context Attributes</a> for this event. This event is supported only by the <a href=\"#!/url=./files/cus_displayhost.htm\">Custom Display Host</a>.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnSourcePathChange\"> </a>siOnSourcePathChange		</td>\n\
		<td class=\"example\">542179352		</td>\n\
		<td>\n\
OnSourcePathChange event identifier. Fired when a Softimage source path is changed. See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnSourcePathChange\">Context Attributes</a> for this event.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnStartup\"> </a>siOnStartup		</td>\n\
		<td class=\"example\">542179351		</td>\n\
		<td>\n\
OnStartup event identifier. Fired when Softimage starts.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnStartAnimation\"> </a>siOnStartAnimation		</td>\n\
		<td class=\"example\">542179371		</td>\n\
		<td>\n\
OnStartAnimation event identifier. Fired when animation playback has been started with the timeline play button or animation scrubbing has been started. The event can also be fired when one of these commands has been executed: <a href=\"#!/url=./si_cmds/PlayBackwards.html\">PlayBackwards</a>, <a href=\"#!/url=./si_cmds/PlayBackwardsFromEnd.html\">PlayBackwardsFromEnd</a>, <a href=\"#!/url=./si_cmds/PlayForwards.html\">PlayForwards</a>, <a href=\"#!/url=./si_cmds/PlayForwardsFromStart.html\">PlayForwardsFromStart</a>, <a href=\"#!/url=./si_cmds/PlayFrame.html\">PlayFrame</a>, <a href=\"#!/url=./si_cmds/PlayRealTime.html\">PlayRealTime</a>, or <a href=\"#!/url=./si_cmds/PlayRealTimeFromStart.html\">PlayRealTimeFromStart</a>. <br /><br />Note: This event has no specific attributes.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnStopAnimation\"> </a>siOnStopAnimation		</td>\n\
		<td class=\"example\">542179372		</td>\n\
		<td>\n\
siOnStopAnimation event identifier. Fired after animation playback has been stopped with the timeline play button or animation scrubbing has been stopped. The event can also be fired after one of these commands has been executed: <a href=\"#!/url=./si_cmds/PlaybackStop.html\">PlaybackStop</a>, <a href=\"#!/url=./si_cmds/PlayBackwards.html\">PlayBackwards</a>, <a href=\"#!/url=./si_cmds/PlayBackwardsFromEnd.html\">PlayBackwardsFromEnd</a>, <a href=\"#!/url=./si_cmds/PlayForwards.html\">PlayForwards</a>, <a href=\"#!/url=./si_cmds/PlayForwardsFromStart.html\">PlayForwardsFromStart</a>, <a href=\"#!/url=./si_cmds/PlayFrame.html\">PlayFrame</a>, <a href=\"#!/url=./si_cmds/PlayRealTime.html\">PlayRealTime</a>, or <a href=\"#!/url=./si_cmds/PlayRealTimeFromStart.html\">PlayRealTimeFromStart</a>. <br /><br />Note: This event has no specific attributes.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnTerminate\"> </a>siOnTerminate		</td>\n\
		<td class=\"example\">542179336		</td>\n\
		<td>\n\
OnTerminate event identifier. Fired when Softimage exits. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnTimeChange\"> </a>siOnTimeChange		</td>\n\
		<td class=\"example\">542179345		</td>\n\
		<td>\n\
OnTimeChange event identifier. Fired when the time line changes. See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnTimeChange\">Context Attributes</a> for this event.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnTimeTransportChange\"> </a>siOnTimeTransportChange		</td>\n\
		<td class=\"example\">542180328		</td>\n\
		<td>\n\
OnTimeTransportChange event identifier. Fired when the time transport changes. See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnTimeTransportChange\">Context Attributes</a> for this event.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnTimer\"> </a>siOnTimer		</td>\n\
		<td class=\"example\">542179355		</td>\n\
		<td>\n\
OnTimer event identifier. Fired when a timer elapses.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnValueChange\"> </a>siOnValueChange		</td>\n\
		<td class=\"example\">542179344		</td>\n\
		<td>\n\
OnValueChange event identifier. Fired when a parameter value or scene object is changed. See the list of available <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnValueChange\">Context Attributes</a> for this event.<br /><br />Note: This event is a regular Softimage event but is also supported by the <a href=\"#!/url=./files/cus_displayhost.htm\">Custom Display Host</a>. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOnWindowEvent\"> </a>siOnWindowEvent		</td>\n\
		<td class=\"example\">542179346		</td>\n\
		<td>\n\
OnWindowEvent event identifier. Fired when a custom display changes position or get refreshed. This event is supported only by the <a href=\"#!/url=./files/cus_displayhost.htm\">Custom Display Host</a>.		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_om/PluginRegistrar.RegisterConverterEvent.html\">PluginRegistrar.RegisterConverterEvent</a> <a href=\"#!/url=./si_om/PluginRegistrar.RegisterEvent.html\">PluginRegistrar.RegisterEvent</a> <a href=\"#!/url=./si_cpp/classXSI_1_1PluginRegistrar.html#RegisterEvent\">PluginRegistrar::RegisterEvent</a> <a href=\"#!/url=./si_cpp/classXSI_1_1ViewContext.html#GetNotificationData\">ViewContext::GetNotificationData</a></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/siSourcePathType.html\">siSourcePathType</a> <a href=\"#!/url=./si_om/SIObject.Type.html\">SIObject.Type</a> <a href=\"#!/url=./si_cmds/callbacks.html\">OnEvent callback</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";