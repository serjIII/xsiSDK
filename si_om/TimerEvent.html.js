var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>TimerEvent</title>\n\
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
            <h1>TimerEvent</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">TimerEvent</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_TimerEvent\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1TimerEvent.html\">TimerEvent</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\"><a href=\"#!/url=./si_om/EventInfo.html\">EventInfo</a></p>\n\
<p class=\"level3\">TimerEvent</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.1</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> A TimerEvent represents a system timer and allows you to specify the interval \n\
and the delay time at which a timer elapses. Timers in Softimage are independent \n\
of the timeline clock and can be used to produce recurrent work accurately. For\n\
example, you can implement an autosave mechanism with a TimerEvent.\n\
<br /><br />\n\
The TimerEvent object derives from <a href=\"#!/url=./si_om/EventInfo.html\">EventInfo</a> and can be managed like \n\
a regular Softimage event. Use <a href=\"#!/url=./si_om/PluginRegistrar.RegisterTimerEvent.html\">PluginRegistrar.RegisterTimerEvent</a> \n\
to register them and <a href=\"#!/url=./si_om/XSIApplication.EventInfos.html\">XSIApplication.EventInfos</a> to access them. Timer \n\
events can be suspended with muting and resumed by un-muting (see \n\
<a href=\"#!/url=./si_om/EventInfo.Mute.html\">EventInfo.Mute</a>). You can reset a timer with <a href=\"#!/url=./si_om/TimerEvent.Reset.html\">TimerEvent.Reset</a>.\n\
<br /><br />\n\
Note: Timer events are based on Windows timers and are processed by Softimage with a low \n\
priority. Although they can be set with milliseconds accuracy, timer events can \n\
sometimes be delayed due to the current activity of Softimage. \n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/TimerEvent.Reset.html\">Reset</a>		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Properties</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/EventInfo.Attributes.html\">Attributes</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/EventInfo.CustomData.html\">CustomData</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/TimerEvent.Delay.html\">Delay</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/EventInfo.FileName.html\">FileName</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/EventInfo.Handler.html\">Handler</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/TimerEvent.Interval.html\">Interval</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/EventInfo.Language.html\">Language</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/EventInfo.Mute.html\">Mute</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to register a timer event and to change its\n\
values.\n\
	To try out this example save it into the Plugins directory \n\
	(User, Factory or Workgroup). Once you have restarted Softimage, the current \n\
	scene will be saved automatically every 15 secs.\n\
	( You can also load the plug-in without restarting Softimage - see\n\
	XSIApplication.LoadPlugin )\n\
*/\n\
function XSILoadPlugin( in_reg )\n\
{\n\
	in_reg.Author = \"Softimage SDK Team\" ;\n\
	in_reg.Name = \"SDK Example - Save scene timer\" ;\n\
	in_reg.Major = 1 ;\n\
	in_reg.Minor = 0 ;\n\
	// Register the save scene timer. The timer elapses every 15 secs. (0==no delay)\n\
	in_reg.RegisterTimerEvent( \"AutoSaveSceneTimer\", 15000, 0 );\n\
	in_reg.RegisterProperty( \"AutoSaveProp\" );\n\
	in_reg.RegisterMenu( siMenuMainTopLevelID, \"Auto Save Demo\", true, false );\n\
	return true ;\n\
}\n\
function AutoSaveSceneTimer_OnEvent( ctxt )\n\
{		\n\
	// Save current scene\n\
	Application.SaveScene( );\n\
	// Log time\n\
	var strFileName = ActiveProject.ActiveScene.Parameters(\"Filename\").Value;\n\
	var today = new Date();\n\
	var strTime = today.toDateString();\n\
	strTime += \", \" + today.toTimeString();\n\
	Application.LogMessage( \"&lt;\"+strFileName+\"&gt;\" + \" saved on \" + strTime );\n\
	// Do not mute the timer\n\
	return false;\n\
}\n\
function GetAutoSaveProp( )\n\
{\n\
	var strName = \"AutoSaveProp\";\n\
	var root = ActiveSceneRoot;\n\
	var prop = root.Properties.Item( strName ) ;\n\
	if ( prop == null )\n\
	{\n\
		return root.AddProperty( strName );\n\
	}\n\
	else\n\
	{\n\
		return prop ;\n\
	}\n\
}\n\
function AutoSaveDemo_Init( in_ctxt )\n\
{\n\
	var menu = in_ctxt.source;\n\
	menu.AddCallbackItem( \"Launch Auto Save Demo\", \"ShowAutoSaveProp\" );\n\
	return true;\n\
}\n\
function ShowAutoSaveProp( )\n\
{\n\
	InspectObj( GetAutoSaveProp( ), \"\", \"\", siLock );\n\
}\n\
function AutoSaveProp_Define( ctxt )\n\
{\n\
	var pset;\n\
	pset = ctxt.Source;\n\
	pset.AddParameter2(\"Auto_Save_Interval\",siInt4,15,0,50,null,null,0,siPersistable);\n\
	pset.AddParameter2(\"Auto_Save_Delay\",siInt4,0,0,50,null,null,0,siPersistable);\n\
	pset.AddParameter2(\"Auto_Save_Scene\",siBool,true,null,null,null,null,0,siPersistable);\n\
	return true;\n\
}\n\
function AutoSaveProp_DefineLayout( ctxt )\n\
{\n\
	var layout,oItem;\n\
	layout = ctxt.Source;\n\
	layout.Clear();\n\
	layout.AddGroup();\n\
	layout.AddItem(\"Auto_Save_Interval\", \"Interval (secs)\" );\n\
	layout.AddItem(\"Auto_Save_Delay\", \"Delay (secs)\" );\n\
	layout.EndGroup();\n\
	layout.AddGroup();\n\
	layout.AddRow( );\n\
	layout.AddButton( \"Auto_Save_Reset\",\"Reset Timer\" ) ;\n\
	layout.AddGroup();\n\
	layout.EndGroup();\n\
	layout.AddItem( \"Auto_Save_Scene\", \"Enable\" );\n\
	layout.EndRow( );	\n\
	layout.EndGroup();\n\
	return true;\n\
}\n\
function AutoSaveProp_OnInit( ctxt )\n\
{\n\
	var evTimer = Application.EventInfos( \"AutoSaveSceneTimer\" );\n\
	var p = PPG.Auto_Save_Interval;\n\
	p.Value = evTimer.Interval / 1000;\n\
	p = PPG.Auto_Save_Delay;\n\
	p.Value = evTimer.Delay / 1000;\n\
}\n\
//--------------------------------------------------------------------------\n\
// Reset Timer button callback to restart the Auto Save timer with new values\n\
//--------------------------------------------------------------------------\n\
function AutoSaveProp_Auto_Save_Reset_OnClicked()\n\
{\n\
	var p = PPG.Auto_Save_Interval;\n\
	var interval = p.Value * 1000;\n\
	p = PPG.Auto_Save_Delay;\n\
	var delay = p.Value * 1000;\n\
	var evTimer = Application.EventInfos( \"AutoSaveSceneTimer\" );\n\
	evTimer.Reset( interval, delay );\n\
	// update the UI\n\
	PPG.Auto_Save_Scene.Value = true;	\n\
} \n\
//--------------------------------------------------------------------------\n\
// Start/Stop the AutoSaveSceneTimer timer.\n\
//--------------------------------------------------------------------------\n\
function AutoSaveProp_Auto_Save_Scene_OnChanged( )\n\
{\n\
	var paramVal = PPG.Auto_Save_Scene.Value;\n\
	var evTimer = Application.EventInfos( \"AutoSaveSceneTimer\" );\n\
	evTimer.Mute = paramVal==false;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";