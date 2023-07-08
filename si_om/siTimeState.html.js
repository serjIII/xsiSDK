var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siTimeState</title>\n\
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
            <h1>siTimeState</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siTimeState</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>States for the time change notification <a href=\"#!/url=./si_cpp/classXSI_1_1CTimeChangeNotification.html\">CTimeChangeNotification</a>for \n\
<a href=\"#!/url=./files/cus_displayhost.htm\">Custom Displays</a>.</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>siTimeState.siTimeStateNull                                                 // 0\n\
siTimeState.siTimeStateStop                                                 // 1\n\
siTimeState.siTimeStatePreStop                                              // 2\n\
siTimeState.siTimeStatePlay                                                 // 4\n\
siTimeState.siTimeStatePrePlay                                              // 8\n\
siTimeState.siTimeStateRecord                                               // 16\n\
siTimeState.siTimeStatePreRecord                                            // 32\n\
siTimeState.siTimeStateFast                                                 // 64\n\
siTimeState.siTimeStatePreFast                                              // 128\n\
siTimeState.siTimeStatePreRoll                                              // 256\n\
siTimeState.siTimeStateStep                                                 // 512\n\
siTimeState.siTimeStatePostStep                                             // 1024\n\
siTimeState.siTimeStatePause                                                // 2048\n\
siTimeState.siTimeStatePrePause                                             // 4096\n\
siTimeState.siTimeStateSeek                                                 // 8192\n\
siTimeState.siTimeNotifyTime                                                // 16384\n\
siTimeState.siTimeNotifyScrub                                               // 65536\n\
siTimeState.siTimeNotifySeek                                                // 131072\n\
siTimeState.siTimeNotifyPortChange                                          // 262144\n\
siTimeState.siTimeNotifyFrameDrop                                           // 524288</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTimeStateNull\"> </a>siTimeStateNull		</td>\n\
		<td class=\"example\">0		</td>\n\
		<td>\n\
Null state.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTimeStateStop\"> </a>siTimeStateStop		</td>\n\
		<td class=\"example\">0x00001		</td>\n\
		<td>\n\
Stop state.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTimeStatePreStop\"> </a>siTimeStatePreStop		</td>\n\
		<td class=\"example\">0x00002		</td>\n\
		<td>\n\
Pre-Stop state.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTimeStatePlay\"> </a>siTimeStatePlay		</td>\n\
		<td class=\"example\">0x00004		</td>\n\
		<td>\n\
Play state.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTimeStatePrePlay\"> </a>siTimeStatePrePlay		</td>\n\
		<td class=\"example\">0x00008		</td>\n\
		<td>\n\
Pre-Play state.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTimeStateRecord\"> </a>siTimeStateRecord		</td>\n\
		<td class=\"example\">0x00010		</td>\n\
		<td>\n\
Record state.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTimeStatePreRecord\"> </a>siTimeStatePreRecord		</td>\n\
		<td class=\"example\">0x00020		</td>\n\
		<td>\n\
Pre-Record state.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTimeStateFast\"> </a>siTimeStateFast		</td>\n\
		<td class=\"example\">0x00040		</td>\n\
		<td>\n\
Fast state.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTimeStatePreFast\"> </a>siTimeStatePreFast		</td>\n\
		<td class=\"example\">0x00080		</td>\n\
		<td>\n\
Pre-Fast state.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTimeStatePreRoll\"> </a>siTimeStatePreRoll		</td>\n\
		<td class=\"example\">0x00100		</td>\n\
		<td>\n\
Pre-Roll state.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTimeStateStep\"> </a>siTimeStateStep		</td>\n\
		<td class=\"example\">0x00200		</td>\n\
		<td>\n\
Step state.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTimeStatePostStep\"> </a>siTimeStatePostStep		</td>\n\
		<td class=\"example\">0x00400		</td>\n\
		<td>\n\
Post-Step state.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTimeStatePause\"> </a>siTimeStatePause		</td>\n\
		<td class=\"example\">0x00800		</td>\n\
		<td>\n\
Pause state.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTimeStatePrePause\"> </a>siTimeStatePrePause		</td>\n\
		<td class=\"example\">0x01000		</td>\n\
		<td>\n\
Pre-Pause state.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTimeStateSeek\"> </a>siTimeStateSeek		</td>\n\
		<td class=\"example\">0x02000		</td>\n\
		<td>\n\
Seek state.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTimeNotifyTime\"> </a>siTimeNotifyTime		</td>\n\
		<td class=\"example\">0x04000		</td>\n\
		<td>\n\
Time notification.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTimeNotifyScrub\"> </a>siTimeNotifyScrub		</td>\n\
		<td class=\"example\">0x10000		</td>\n\
		<td>\n\
Scrub notification.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTimeNotifySeek\"> </a>siTimeNotifySeek		</td>\n\
		<td class=\"example\">0x20000		</td>\n\
		<td>\n\
Seek notification.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTimeNotifyPortChange\"> </a>siTimeNotifyPortChange		</td>\n\
		<td class=\"example\">0x40000		</td>\n\
		<td>\n\
Port Change notification.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTimeNotifyFrameDrop\"> </a>siTimeNotifyFrameDrop		</td>\n\
		<td class=\"example\">0x80000		</td>\n\
		<td>\n\
Frame Drop notification.		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_cpp/classXSI_1_1CTimeChangeNotification.html#GetState\">CTimeChangeNotification::GetState</a> <a href=\"#!/url=./files/cus_displayhost.htm\">Custom Displays</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";