var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script>\n\
<script type=\"text/javascript\" src=\"../scripts/lib/jquery-1.9.1.min.js\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title></title>\n\
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
</style><link rel=\"stylesheet\" href=\"si_cmds/css/en.css\" type=\"text/css\"/><script>$(document).ready(function() { yepnope.injectJs(\"./si_cmds/lib/utils.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1></h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"></h2>\n\
\n\
<div><table class=\"values\">\n\
	<tr>\n\
		<th>Views</th>\n\
		<th>Description</th>\n\
	</tr>\n\
	<tr>\n\
		<td>Animation Editor</td>\n\
		<td>Opens the Animation Editor (multiple instances supported). See also <a href=\"#!/url=./si_cmds/OpenAnimationEditor.html\">OpenAnimationEditor</a>.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Animation Layer Manager</td>\n\
		<td>Opens the Animation Layer Manager (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Animation Mixer</td>\n\
		<td>Opens the Animation Mixer (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Animation Panel</td>\n\
		<td>Opens the Animation Panel (single instance only). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Attribute Transfer</td>\n\
		<td>Opens the Attribute Transfer (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Audio Output Monitor</td>\n\
		<td>Opens the Audio Output Monitor (single instance only). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Browser</td>\n\
		<td>Opens the Browser (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Command Line</td>\n\
		<td>Opens the Command Line (single instance only). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Compound Version Manager</td>\n\
		<td>Opens the Compound Version Manager (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Constraint Panel</td>\n\
		<td>Opens the Constraint Panel (single instance only). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Context Properties</td>\n\
		<td>Opens the Context Properties (single instance only). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Context Switcher</td>\n\
		<td>Opens the Context Switcher (single instance only). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Custom Display Host</td>\n\
		<td>Opens the Custom Display Host (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Custom Parameter Set Editor</td>\n\
		<td>Opens the Custom Parameter Set Editor (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Debug Notification</td>\n\
		<td>Opens the Debug Notification (single instance only). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>DopeSheet</td>\n\
		<td>Opens the DopeSheet (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Edit Panel</td>\n\
		<td>Opens the Edit Panel (single instance only). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Explorer</td>\n\
		<td>Opens the Explorer (multiple instances supported). See also <a href=\"#!/url=./si_cmds/OpenXSIExplorer.html\">OpenXSIExplorer</a> and <a href=\"#!/url=./si_cmds/OpenTransientExplorer.html\">OpenTransientExplorer</a>.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Expression Editor</td>\n\
		<td>Opens the Expression Editor (single instance only). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>FCurve Editor</td>\n\
		<td>Opens the FCurve Editor (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Fx Color Selector</td>\n\
		<td>Opens the Fx Color Selector (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Fx Operator Selector</td>\n\
		<td>Opens the Fx Operator Selector (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Fx Paint Brush List</td>\n\
		<td>Opens the Fx Paint Brush List (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Fx Tree</td>\n\
		<td>Opens the Fx Tree (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Fx Viewer</td>\n\
		<td>Opens the Fx Viewer (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Hair Panel</td>\n\
		<td>Opens the Hair Panel (single instance only). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>ICE Tree</td>\n\
		<td>Opens the ICE Tree (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Image Clip Viewer</td>\n\
		<td>Opens the Image Clip Viewer (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Keyable Parameters Editor</td>\n\
		<td>Opens the Keyable Parameters Editor (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Keying Panel</td>\n\
		<td>Opens the Keying Panel (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Layer Panel</td>\n\
		<td>Opens the Layer Panel (single instance only). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Lip Sync</td>\n\
		<td>Opens the Lip Sync (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Material Manager</td>\n\
		<td>Opens the Material Manager (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Material Panel</td>\n\
		<td>Opens the Material Panel (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Menu Window</td>\n\
		<td>Opens the Menu Window (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Mini Transform Panel</td>\n\
		<td>Opens the Mini Transform Panel (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Netview</td>\n\
		<td>Opens the Netview (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Object View</td>\n\
		<td>Opens the Object View (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Parameter Connection Editor</td>\n\
		<td>Opens the Parameter Connection Editor (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Playback Panel</td>\n\
		<td>Opens the Playback Panel (single instance only). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Plugin Manager</td>\n\
		<td>Opens the Plugin Manager (single instance only). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Preset Manager</td>\n\
		<td>Opens the Preset Manager (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Property Editor</td>\n\
		<td>Opens the Property Editor (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Property Panel</td>\n\
		<td>Opens the Property Panel (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Quick Scene Search</td>\n\
		<td>Opens the Quick Scene Search (single instance only). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Relational View</td>\n\
		<td>Opens the Relational View (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Relational View Editor</td>\n\
		<td>Opens the Relational View Editor (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Render Preview</td>\n\
		<td>Opens the Render Preview (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Render Tree</td>\n\
		<td>Opens the Render Tree (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Render View</td>\n\
		<td>Opens the Render View (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Render Viewer</td>\n\
		<td>Opens the Render Viewer (single instance only). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Scene Debugger</td>\n\
		<td>Opens the Scene Debugger (single instance only). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Scene Layer Manager</td>\n\
		<td>Opens the Scene Layer Manager (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Scene Search</td>\n\
		<td>Opens the Scene Search (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Schematic</td>\n\
		<td>Opens the Schematic (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Script Editor</td>\n\
		<td>Opens the Script Editor (single instance only). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Script History</td>\n\
		<td>Opens the Script History (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Scripted Operator Editor</td>\n\
		<td>Opens the Scripted Operator Editor (single instance only). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Selection Panel</td>\n\
		<td>Opens the Selection Panel (single instance only). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Shader Code Editor</td>\n\
		<td>Opens the Shader Code Editor (single instance only). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Shader Version Manager</td>\n\
		<td>Opens the Shader Version Manager (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Shaderball Viewer</td>\n\
		<td>Opens the Shaderball Viewer (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Shape Manager</td>\n\
		<td>Opens the Shape Manager (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Shelf</td>\n\
		<td>Opens the Shelf (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Snap Panel</td>\n\
		<td>Opens the Snap Panel (single instance only). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>SpreadSheet</td>\n\
		<td>Opens the SpreadSheet (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Standalone DopeSheet</td>\n\
		<td>Opens the Standalone DopeSheet (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Synoptic Editor</td>\n\
		<td>Opens the Synoptic Editor (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Synoptic View</td>\n\
		<td>Opens the Synoptic View (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Text Editor</td>\n\
		<td>Opens the Text Editor (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Texture Editor</td>\n\
		<td>Opens the Texture Editor (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Texture Layer Editor</td>\n\
		<td>Opens the Texture Layer Editor (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Timeline</td>\n\
		<td>Opens the Timeline (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Timeline 3D</td>\n\
		<td>Opens the Timeline 3D (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Timerange</td>\n\
		<td>Opens the Timerange (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Toolbar Panel</td>\n\
		<td>Opens the Toolbar Panel (single instance only). <br/><br/>Hint: If you need to change the menu once this toolbar is visible, use the <a href=\"#!/url=./si_cmds/SwitchToolbar.html\">SwitchToolbar</a> command.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Transformation Panel</td>\n\
		<td>Opens the Transformation Panel (single instance only). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>User Canvas</td>\n\
		<td>Opens the User Canvas (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>User Canvas Editor</td>\n\
		<td>Opens the User Canvas Editor (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>View Manager</td>\n\
		<td>Opens the View Manager (single instance only). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Viewer</td>\n\
		<td>Opens the Viewer (single instance only). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Weight Editor</td>\n\
		<td>Opens the Weight Editor (multiple instances supported). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>Weight Paint Panel</td>\n\
		<td>Opens the Weight Paint Panel (single instance only). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td>XSI Explorer</td>\n\
		<td>Opens the XSI Explorer (multiple instances supported). <br/><br/>Note: If you want to open the XSI Explorer with specific objects appearing in the Viewer pane, use the <a href=\"#!/url=./si_cmds/OpenXSIExplorer.html\">OpenXSIExplorer</a> command instead.		</td>\n\
	</tr>\n\
</table>\n\
<br/>\n\
\n\
</div>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";