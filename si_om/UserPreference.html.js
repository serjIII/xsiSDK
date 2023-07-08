var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>UserPreference</title>\n\
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
            <h1>UserPreference</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">UserPreference</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>All user preference string constants. <br /><br />Note: You can use either the name of the constant (under the Constant column) or the string it represents (under the Value column), as long as you remember that the Value is a string (so you need to use quotation marks), but the Constant is an enum, so you can\'t use quotation marks.</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>StringModule.siAutoInspect                                                  // AutoInspectEnabled\n\
StringModule.siCompensationFlag                                             // SI3D_CONSTRAINT_COMPENSATION_MODE\n\
StringModule.siCustomCommandLibCache                                        // CustomCommandLibCache\n\
StringModule.siCustomOperatorLibCache                                       // CustomOperatorLibCache\n\
StringModule.siDisplayCallbackLibCache                                      // DisplayCallbackLibCache\n\
StringModule.siDisplayLibCache                                              // DisplayLibCache\n\
StringModule.siDisplayPassLibCache                                          // DisplayPassLibCache\n\
StringModule.siEventLibCache                                                // EventLibCache\n\
StringModule.siFilterLibCache                                               // FilterLibCache\n\
StringModule.siMenuLibCache                                                 // MenuLibCache\n\
StringModule.siPropertyLibCache                                             // PropertyLibCache\n\
StringModule.siRTShaderLibCache                                             // RealTimeShaderLibCache\n\
StringModule.siScrCommandLogEnabled                                         // SCR_CMDLOG_ENABLED\n\
StringModule.siScrCommandLogFileName                                        // SCR_CMDLOG_FILENAME\n\
StringModule.siScrCommandLogMaxSize                                         // SCR_CMDLOG_MAXSIZE\n\
StringModule.siScrCommandLogToFile                                          // SCR_CMDLOG_TOFILE\n\
StringModule.siScrCommandLogUnlimitedSize                                   // SCR_CMDLOG_UNLIMITEDSIZE\n\
StringModule.siScrLanguage                                                  // ScriptLanguage\n\
StringModule.siScrMessageLogEnabled                                         // SCR_MSGLOG_ENABLED\n\
StringModule.siScrRealTimeMessagingEnabled                                  // SCR_RTMSG_ENABLED\n\
StringModule.siTimeDisplayFormatDisplayAsFrames                             // SI3D_TIMEDISPLAYFORMAT_DISPLAYASFRAMES\n\
StringModule.siTimeDisplayFormatDisplayUserFormat                           // SI3D_TIMEDISPLAYFORMAT_DISPLAYUSERFORMAT\n\
StringModule.siTimeDisplayFormatUserFormat                                  // SI3D_TIMEDISPLAYFORMAT_USERFORMAT\n\
StringModule.siTimeFormatDefaultFrameFormat                                 // SI3D_TIMEFORMAT_DEFAULTFRAMEFORMAT\n\
StringModule.siTimeFormatDefaultFrameRate                                   // SI3D_TIMEFORMAT_DEFAULTFRAMERATE\n\
StringModule.siTransformAxisMode                                            // 3D_TRANSFO_EDITED_AXIS_CHANGED\n\
StringModule.siTransformRefMode                                             // 3D_TRANSFO_REFERENTIAL_CHANGED\n\
StringModule.siUILayoutDefault                                              // UI_LAYOUT_DEFAULT</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siAutoInspect\"> </a>siAutoInspect		</td>\n\
		<td class=\"example\">AutoInspectEnabled		</td>\n\
		<td>\n\
TRUE to force the property dialogs to automatically pop up on object creation.<br /><br />Corresponds to User Preferences > Interaction > General > Automatically Popup Property Editors on Node Creation in the User Interface. <br /><br />Note: This preference cannot be changed permanently via scripting. See <a href=\"#!/url=./files/script_editor_RunningScripts.htm\">Property Editor Automatic Inspection</a> for more information.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCompensationFlag\"> </a>siCompensationFlag		</td>\n\
		<td class=\"example\">SI3D_CONSTRAINT_COMPENSATION_MODE		</td>\n\
		<td>\n\
Toggle the Comp button in the Constrain panel.<br /><br />Possible values are:<br /><br />0 = off<br /><br />1 = on<br /><br />Corresponds to Constrain < compensation=\"\" in=\"\" the=\"\" main-menu.=\"\" /></td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCustomCommandLibCache\"> </a>siCustomCommandLibCache		</td>\n\
		<td class=\"example\">CustomCommandLibCache		</td>\n\
		<td>\n\
 This preference enables or disables the custom command library cache. Disabling the cache allows developers to recompile an add-on library without having to unload it explicitly. Disabling a cache can drastically affect the performance of Softimage, therefore it is recommended to disable it only in the context of add-ons development. For performance reasons, the state of the cache is not persisted with the scene. By default the cache is enabled at startup, therefore users have to disable it at each session. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCustomOperatorLibCache\"> </a>siCustomOperatorLibCache		</td>\n\
		<td class=\"example\">CustomOperatorLibCache		</td>\n\
		<td>\n\
 This preference enables or disables the custom operator library cache. Disabling the cache allows developers to recompile an add-on library without having to unload it explicitly. Disabling a cache can drastically affect the performance of Softimage, therefore it is recommended to disable it only in the context of add-ons development. For performance reasons, the state of the cache is not persisted with the scene. By default the cache is enabled at startup, therefore users have to disable it at each session. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDisplayCallbackLibCache\"> </a>siDisplayCallbackLibCache		</td>\n\
		<td class=\"example\">DisplayCallbackLibCache		</td>\n\
		<td>\n\
 This preference enables or disables the custom display callback library cache. Disabling the cache allows developers to recompile a plug-in library without having to unload it explicitly. Disabling a cache can drastically affect the performance of Softimage, therefore it is recommended to disable it only in the context of add-ons development. For performance reasons, the state of the cache is not persisted with the scene. By default the cache is enabled at startup, therefore users have to disable it at each session. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDisplayLibCache\"> </a>siDisplayLibCache		</td>\n\
		<td class=\"example\">DisplayLibCache		</td>\n\
		<td>\n\
 This preference enables or disables the custom view library cache. Disabling the cache allows developers to recompile a plug-in library without having to unload it explicitly. Disabling a cache can drastically affect the performance of Softimage, therefore it is recommended to disable it only in the context of add-ons development. For performance reasons, the state of the cache is not persisted with the scene. By default the cache is enabled at startup, therefore users have to disable it at each session. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDisplayPassLibCache\"> </a>siDisplayPassLibCache		</td>\n\
		<td class=\"example\">DisplayPassLibCache		</td>\n\
		<td>\n\
 This preference enables or disables the custom display pass library cache. Disabling the cache allows developers to recompile a plug-in library without having to unload it explicitly. Disabling a cache can drastically affect the performance of Softimage, therefore it is recommended to disable it only in the context of add-ons development. For performance reasons, the state of the cache is not persisted with the scene. By default the cache is enabled at startup, therefore users have to disable it at each session. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siEventLibCache\"> </a>siEventLibCache		</td>\n\
		<td class=\"example\">EventLibCache		</td>\n\
		<td>\n\
 This preference enables or disables the event library cache. Disabling the cache allows developers to recompile an add-on library without having to unload it explicitly. Disabling a cache can drastically affect the performance of Softimage, therefore it is recommended to disable it only in the context of add-ons development. For performance reasons, the state of the cache is not persisted with the scene. By default the cache is enabled at startup, therefore users have to disable it at each session. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFilterLibCache\"> </a>siFilterLibCache		</td>\n\
		<td class=\"example\">FilterLibCache		</td>\n\
		<td>\n\
 This preference enables or disables the custom filter library cache. Disabling the cache allows developers to recompile a plug-in library without having to unload it explicitly. Disabling a cache can drastically affect the performance of Softimage, therefore it is recommended to disable it only in the context of add-ons development. For performance reasons, the state of the cache is not persisted with the scene. By default the cache is enabled at startup, therefore users have to disable it at each session. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuLibCache\"> </a>siMenuLibCache		</td>\n\
		<td class=\"example\">MenuLibCache		</td>\n\
		<td>\n\
 This preference enables or disables the custom menu library cache. Disabling the cache allows developers to recompile a plug-in library without having to unload it explicitly. Disabling a cache can drastically affect the performance of Softimage, therefore it is recommended to disable it only in the context of add-ons development. For performance reasons, the state of the cache is not persisted with the scene. By default the cache is enabled at startup, therefore users have to disable it at each session. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPropertyLibCache\"> </a>siPropertyLibCache		</td>\n\
		<td class=\"example\">PropertyLibCache		</td>\n\
		<td>\n\
 This preference enables or disables the custom property library cache. Disabling the cache allows developers to recompile a plug-in library without having to unload it explicitly. Disabling a cache can drastically affect the performance of Softimage, therefore it is recommended to disable it only in the context of add-ons development. For performance reasons, the state of the cache is not persisted with the scene. By default the cache is enabled at startup, therefore users have to disable it at each session. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRTShaderLibCache\"> </a>siRTShaderLibCache		</td>\n\
		<td class=\"example\">RTShaderLibCache		</td>\n\
		<td>\n\
 This preference enables or disables the Realtime shader library cache. Disabling the cache allows developers to recompile an add-on library without having to unload it explicitly. Disabling a cache can drastically affect the performance of Softimage, therefore it is recommended to disable it only in the context of add-ons development. For performance reasons, the state of the cache is not persisted with the scene. By default the cache is enabled at startup, therefore users have to disable it at each session. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siScrCommandLogEnabled\"> </a>siScrCommandLogEnabled		</td>\n\
		<td class=\"example\">SCR_CMDLOG_ENABLED		</td>\n\
		<td>\n\
Set to True to enable command execution logging in the scripting history window.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siScrCommandLogFileName\"> </a>siScrCommandLogFileName		</td>\n\
		<td class=\"example\">SCR_CMDLOG_FILENAME		</td>\n\
		<td>\n\
Use this user preference to specify the name of the file to use for logging commands and messages. Use siSrcCommandLogToFile to enable logging to file.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siScrCommandLogMaxSize\"> </a>siScrCommandLogMaxSize		</td>\n\
		<td class=\"example\">SCR_CMDLOG_MAXSIZE		</td>\n\
		<td>\n\
Use this user preference to get and set the maximum size for the scripting command/message log.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siScrCommandLogToFile\"> </a>siScrCommandLogToFile		</td>\n\
		<td class=\"example\">SCR_CMDLOG_TOFILE		</td>\n\
		<td>\n\
Set to True to log the scripting command/message to a file. Use siSrcCommandLogFileName to specify the log file name.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siScrCommandLogUnlimitedSize\"> </a>siScrCommandLogUnlimitedSize		</td>\n\
		<td class=\"example\">SCR_CMDLOG_UNLIMITEDSIZE		</td>\n\
		<td>\n\
Set to True to allow the scripting command/message log to be of an unlimited size.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siScrLanguage\"> </a>siScrLanguage		</td>\n\
		<td class=\"example\">SCR_LANGUAGE		</td>\n\
		<td>\n\
Use this user preference to get and set the preferred scripting language. Possible values are: <br /><br />\"VBScript\" <br /><br /> \"JScript\" <br /><br />\"PerlScript\" <br /><br />\"Python\"<br /><br />		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siScrMessageLogEnabled\"> </a>siScrMessageLogEnabled		</td>\n\
		<td class=\"example\">SCR_MSGLOG_ENABLED		</td>\n\
		<td>\n\
Set to True to enable message logging in the scripting history window.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siScrRealTimeMessagingEnabled\"> </a>siScrRealTimeMessagingEnabled		</td>\n\
		<td class=\"example\">SCR_RTMSG_ENABLED		</td>\n\
		<td>\n\
Set to True to enable real-time message logging in the scripting history window. Messages are delivered immediately as they arrive instead of reported at the end of the command execution.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTimeDisplayFormatDisplayAsFrames\"> </a>siTimeDisplayFormatDisplayAsFrames		</td>\n\
		<td class=\"example\">SI3D_TIMEDISPLAYFORMAT_DISPLAYASFRAMES		</td>\n\
		<td>\n\
Set to True to display time as frame.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTimeDisplayFormatDisplayUserFormat\"> </a>siTimeDisplayFormatDisplayUserFormat		</td>\n\
		<td class=\"example\">SI3D_TIMEDISPLAYFORMAT_DISPLAYUSERFORMAT		</td>\n\
		<td>\n\
Set to True to use the default frame format or false for a user selected format for display purposes.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTimeDisplayFormatUserFormat\"> </a>siTimeDisplayFormatUserFormat		</td>\n\
		<td class=\"example\">SI3D_TIMEDISPLAYFORMAT_USERFORMAT		</td>\n\
		<td>\n\
Use this user preference to specify the user display frame format. The value will be corresponding to <a href=\"#!/url=./si_om/siDisplayTimeFormat.html\">siDisplayTimeFormat</a>.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTimeFormatDefaultFrameFormat\"> </a>siTimeFormatDefaultFrameFormat		</td>\n\
		<td class=\"example\">SI3D_TIMEFORMAT_DEFAULTFRAMEFORMAT		</td>\n\
		<td>\n\
Use this user preference to specify the default frame format. The value will be corresponding to <a href=\"#!/url=./si_om/siDefaultTimeFormat.html\">siDefaultTimeFormat</a>.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTimeFormatDefaultFrameRate\"> </a>siTimeFormatDefaultFrameRate		</td>\n\
		<td class=\"example\">SI3D_TIMEFORMAT_DEFAULTFRAMERATE		</td>\n\
		<td>\n\
Use this user preference to access the default frame rate.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTransformAxisMode\"> </a>siTransformAxisMode		</td>\n\
		<td class=\"example\">3D_TRANSFO_EDITED_AXIS_CHANGED		</td>\n\
		<td>\n\
Set the Transformation Axis Mode. <br /><br />The values to provide are actually bitmasks with bit zero for X, bit one for Y, and bit two for Z.<br /><br />		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTransformRefMode\"> </a>siTransformRefMode		</td>\n\
		<td class=\"example\">3D_TRANSFO_REFERENTIAL_CHANGED		</td>\n\
		<td>\n\
Set the Transformation Reference Mode. See <a href=\"#!/url=./si_om/siRefMode.html\">siRefMode</a> for a list of possible values.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUILayoutDefault\"> </a>siUILayoutDefault		</td>\n\
		<td class=\"example\">UI_LAYOUT_DEFAULT		</td>\n\
		<td>\n\
Use this user preference to specify the default current layout that will be used when starting Softimage.		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/GetUserPref.html\">GetUserPref</a> <a href=\"#!/url=./si_cmds/SetUserPref.html\">SetUserPref</a> <a href=\"#!/url=./si_om/siDefaultTimeFormat.html\">siDefaultTimeFormat</a> <a href=\"#!/url=./si_om/siDisplayTimeFormat.html\">siDisplayTimeFormat</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";