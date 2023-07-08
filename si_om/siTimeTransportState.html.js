var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siTimeTransportState</title>\n\
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
            <h1>siTimeTransportState</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siTimeTransportState</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v13.0 (2015)</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>Describes the current state of the transport. You are pass a value in the TimeTransport callback which is a combination of these flags.</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>siTimeTransportState.siTTStateStop                                          // 1\n\
siTimeTransportState.siTTStatePlay                                          // 4\n\
siTimeTransportState.siTTStateSeek                                          // 8192\n\
siTimeTransportState.siTTStateTimeChange                                    // 16384\n\
siTimeTransportState.siTTStateContextChange                                 // 32768\n\
siTimeTransportState.siTTStateScrubChange                                   // 65536\n\
siTimeTransportState.siTTStateSeekChange                                    // 131072\n\
siTimeTransportState.siTTStateDeviceChange                                  // 262144\n\
siTimeTransportState.siTTStateFrameDropChange                               // 524288</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTTStateStop\"> </a>siTTStateStop		</td>\n\
		<td class=\"example\">0x00001		</td>\n\
		<td>\n\
Stop		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTTStatePlay\"> </a>siTTStatePlay		</td>\n\
		<td class=\"example\">0x00004		</td>\n\
		<td>\n\
Play		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTTStateSeek\"> </a>siTTStateSeek		</td>\n\
		<td class=\"example\">0x02000		</td>\n\
		<td>\n\
Seek		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTTStateScrub\"> </a>siTTStateScrub		</td>\n\
		<td class=\"example\">0x10000		</td>\n\
		<td>\n\
Scrub		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTTStateTimeChange\"> </a>siTTStateTimeChange		</td>\n\
		<td class=\"example\">0x04000		</td>\n\
		<td>\n\
Time change		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTTStateContextChange\"> </a>siTTStateContextChange		</td>\n\
		<td class=\"example\">0x08000		</td>\n\
		<td>\n\
Context change		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTTStateScrubChange\"> </a>siTTStateScrubChange		</td>\n\
		<td class=\"example\">0x10000		</td>\n\
		<td>\n\
Scrub change		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTTStateSeekChange\"> </a>siTTStateSeekChange		</td>\n\
		<td class=\"example\">0x20000		</td>\n\
		<td>\n\
Seek change		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTTStateDeviceChange\"> </a>siTTStateDeviceChange		</td>\n\
		<td class=\"example\">0x40000		</td>\n\
		<td>\n\
Device change		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTTStateFrameDropChange\"> </a>siTTStateFrameDropChange		</td>\n\
		<td class=\"example\">0x80000		</td>\n\
		<td>\n\
Frame drop change		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnTimeTransportChange\">TimeTransport Context Attributes</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";