var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>FCurve Editor Attributes</title>\n\
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
            <h1>FCurve Editor Attributes</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">FCurve Editor Attributes</h2>\n\
\n\
<div>\n\
	<p>View attribute for the <a href=\"http://softimage.wiki.softimage.com/xsidocs/fcurves_ViewingFunctionCurves.htm\">FCurve Editor</a> (see <a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>).</p>\n\
<div class=\"tip\">\n\
<table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<td class=\"label\">Note</td>\n\
		<td class=\"emph\">See <a href=\"#!/url=./si_cmds/ViewAttributes.html#\">ViewAttributes</a> for a complete list of types of attributes that you can use when customizing your Relational Views.</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
</div>\n\
\n\
<div><table class=\"values\">\n\
	<tr>\n\
		<th>Attribute Name</th>\n\
		<th>Description</th>\n\
		<th>Supports</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">ripple</td>\n\
		<td>\n\
Determines whether or not existing keys are pushed ahead on the timeline when you parse keys on an fcurve or when you scale a region of keys.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">false</td>\n\
					<td>(Default) Turns off ripple mode. Note: Use the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">true</td>\n\
					<td>Turns on ripple mode. Note: Use the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">snaptogrid</td>\n\
		<td>\n\
Determines whether or not the FCurve editor will use the snap-to-grid feature.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>(Default) No snapping to grid. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>Use the snap-to-grid feature. Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">snaptoframe</td>\n\
		<td>\n\
Determines whether or not the FCurve editor will use the snap-to-frame feature.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>(Default) No snapping to frame. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>Use the snap-to-frame feature. Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">snapslopes</td>\n\
		<td>\n\
Determines whether or not the slope handles on key points will snap when manipulated.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>(Default) No snapping slope handles on key points. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>The slope handles on key points will snap when manipulated. Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">autosnaptoframes</td>\n\
		<td>\n\
Determines whether or not the keys will be kept on frames when scaling regions.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>(Default) Keys will not be snapped to frames. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>The keys will be kept on frames when scaling regions. Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">selectedcurves</td>\n\
		<td>\n\
Returns or sets the selected FCurve objects as a comma delimited string containing the full name of the FCurve\'s parent. If nothing is selected, it returns an empty string.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;string&gt;</td>\n\
					<td>The Parent\'s <a href=\"#!/url=./si_om/SIObject.FullName.html\">SIObject.FullName</a> of FCurve Object(s).					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">frameall</td>\n\
		<td>\n\
Frames all displayed fcurves.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;any value&gt;</td>\n\
					<td>This value is ignored.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a> only.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">frameselection</td>\n\
		<td>\n\
Frames selection.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;any value&gt;</td>\n\
					<td>This value is ignored.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a> only.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">frameplaybackrange</td>\n\
		<td>\n\
Frames all the fcurves within the time span specified by the timeline.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;any value&gt;</td>\n\
					<td>This value is ignored.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a> only.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">frameselectedkeys</td>\n\
		<td>\n\
Frames selected keys.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;any value&gt;</td>\n\
					<td>This value is ignored.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a> only.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">frameselectedcurves</td>\n\
		<td>\n\
Frames selected fcurves.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;any value&gt;</td>\n\
					<td>This value is ignored.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a> only.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">frameregion</td>\n\
		<td>\n\
Frames a region.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;any value&gt;</td>\n\
					<td>This value is ignored.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a> only.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">centercurrenttime</td>\n\
		<td>\n\
Centers the fcurve graph around the timeline cursor\'s position, when the timeline cursor is visible.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;any value&gt;</td>\n\
					<td>This value is ignored.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a> only.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">autoframe</td>\n\
		<td>\n\
Determines whether or not animation editor will frame all fcurves automatically.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">false</td>\n\
					<td>(Default) Disables the automatic framing. Note: Use the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">true</td>\n\
					<td>Enables the automatic framing. Note: Use the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">interactiveupdate</td>\n\
		<td>\n\
Determines whether or not to see the effect of the changes in viewports as you edit the fcurves.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">false</td>\n\
					<td>(Default) \"Interactive update\" option is off. Note: Use the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">true</td>\n\
					<td>\"Interactive update\" option is on. Note: Use the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">showbuffercurves</td>\n\
		<td>\n\
Determines whether or not to display a temporary copy of the original function curve that has been saved into a buffer.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">false</td>\n\
					<td>(Default) Don\'t show the buffer curves. Note: Use the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">true</td>\n\
					<td>Shows the buffer curves. Note: Use the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">displaynormalized</td>\n\
		<td>\n\
Determines whether or not to display the normalized fcurves.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">false</td>\n\
					<td>(Default) Displays non-normalized fcurves. Note: Use the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">true</td>\n\
					<td>Displays normalized fcurves. Note: Use the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">classicmode</td>\n\
		<td>\n\
Switches between Suite and Classic Mode.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">false</td>\n\
					<td>Suite Mode is active which is designed to be used if you\'re running the Suite version of Softimage. Note: Use the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">true</td>\n\
					<td>(Default) Classic Mode is on to provide all tools that you are used to as a seasoned Softimage user. Note: Use the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">hle</td>\n\
		<td>\n\
Determines whether or not to enable the high-level editing (HLE) tool.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">false</td>\n\
					<td>(Default) Disables the high-level editing (HLE) tool. Note: Use the binary false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">true</td>\n\
					<td>Enables the high-level editing (HLE) tool. Note: Use the binary true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">hlecompensation</td>\n\
		<td>\n\
Determines whether or not to enable the high-level editing (HLE) compensation mode, when the HLE tool is activated.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">false</td>\n\
					<td>(Default) Disables the high-level editing (HLE) compensation mode. Note: Use the binary false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">true</td>\n\
					<td>Enables the high-level editing (HLE) compensation mode. Note: Use the binary true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">hleoperation</td>\n\
		<td>\n\
Determines which high-level editing (HLE) operation the HLE tool uses, when enabled.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">siHLEOperationRelativeOffset</td>\n\
					<td>The HLE tool uses the Relative Offset operation.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siHLEOperationAbsoluteOffset</td>\n\
					<td>(Default) The HLE tool uses the Absolute Offset operation.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siHLEOperationAbsoluteScaling</td>\n\
					<td>The HLE tool uses the Absolute Scaling operation.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">displayoptions</td>\n\
		<td>\n\
Determines which fcurves are displayed in the graph by default.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">siAllParam</td>\n\
					<td>Displays fcurves for all parameters of the selected object.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siMarkedParam</td>\n\
					<td>Displays fcurves only for the object\'s marked parameters.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siAnimatedParam</td>\n\
					<td>(Default) Displays fcurves only for the object\'s animated parameters.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siSelectedParam</td>\n\
					<td>Displays fcurves only for the object\'s selected parameters.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">isolatecurve</td>\n\
		<td>\n\
Determines whether or not to isolate the selected fcurves so that only they appear in the graph.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">false</td>\n\
					<td>(Default) Disables the isolating feature. Note: Use the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">true</td>\n\
					<td>Isolates the selected fcurves. Note: Use the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">clearallcurves</td>\n\
		<td>\n\
Hides all fcurves associated with the selected object without collapsing the animation explorer.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;any value&gt;</td>\n\
					<td>This value is ignored.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a> only.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">hidecurve</td>\n\
		<td>\n\
Hides the selected fcurves. This also deselects the fcurves.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;any value&gt;</td>\n\
					<td>This value is ignored.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a> only.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">unhideallcurves</td>\n\
		<td>\n\
Displays all hidden fcurves.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;any value&gt;</td>\n\
					<td>This value is ignored.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a> only.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">keysonunselectedcurves</td>\n\
		<td>\n\
Determines whether or not to display keys on all unselected curves.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">false</td>\n\
					<td>(Default) Hides keys on all unselected curves. Note: Use the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">true</td>\n\
					<td>Shows keys on all unselected curves. Note: Use the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">slopesonunselectedkeys</td>\n\
		<td>\n\
Determines whether or not to display the slope handles of all unselected keys on a selected curve.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">false</td>\n\
					<td>(Default) Hides slope handles of all unselected keys. Note: Use the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">true</td>\n\
					<td>Shows slope handles of all unselected keys. Note: Use the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">showlabels</td>\n\
		<td>\n\
Determines whether or not to display labels on all selected curves.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">false</td>\n\
					<td>(Default) Hides the curve and axis labels. Note: Use the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">true</td>\n\
					<td>Shows the curve and axis labels. Note: Use the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">keyscoordinates</td>\n\
		<td>\n\
Determines whether or not to display the X and Y coordinate values for each selected key.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">false</td>\n\
					<td>Hides the coordinate values. Note: Use the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">true</td>\n\
					<td>(Default) Shows the coordinate values. Note: Use the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">grid</td>\n\
		<td>\n\
Determines whether or not to display the X and Y axis grid lines.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">false</td>\n\
					<td>Hides the grid lines. Note: Use the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">true</td>\n\
					<td>(Default) Shows the grid lines. Note: Use the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">rulers</td>\n\
		<td>\n\
Determines whether or not to display the rulers on the horizontal X(time) and vertical Y(value) axes.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">false</td>\n\
					<td>Hides both X and Y axes. Note: Use the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">true</td>\n\
					<td>(Default) Shows both X and Y axes. Note: Use the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">timecursorvisible</td>\n\
		<td>\n\
Determines whether or not to display the red playback cursor in the fcurve graph.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">false</td>\n\
					<td>Hides the playback cursor. Note: Use the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">true</td>\n\
					<td>(Default) Shows the playback cursor. Note: Use the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">timecursorselectable</td>\n\
		<td>\n\
Determines whether or not the red playback cursor is selectable in the fcurve graph.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">false</td>\n\
					<td>(Default) Only can drag the cursor in the timeline area. Note: Use the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">true</td>\n\
					<td>Makes the playback cursor available in the graph so that you can also select and drag it in graph area. Note: Use the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">metacurveregion</td>\n\
		<td>\n\
Determines whether or not to display a bar below the graph showing an overview representation of all the keys of the selected fcurves. 			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">false</td>\n\
					<td>(Default) Hides the metacurve region. Note: Use the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">true</td>\n\
					<td>Shows the metacurve region. Note: Use the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">localtime</td>\n\
		<td>\n\
Determines whether or not to display the corresponding time of the animation between the action in the animation mixer and the fcurve editor.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">false</td>\n\
					<td>(Default) Disables this feature. Note: Use the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">true</td>\n\
					<td>Shows the local time of where the original action source is being evaluated in fcurve editor, and shows whether this point is in relation to the global time of the scene in Mixer. Note: Use the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">framerange</td>\n\
		<td>\n\
Returns or sets the frame range in frame values.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;start&gt;,&lt;end&gt;</td>\n\
					<td>Frame range, specified by a comma-delimited string containing the start and end frame values.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">timerange</td>\n\
		<td>\n\
Returns or sets the frame range in time values.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;start&gt;,&lt;end&gt;</td>\n\
					<td>Frame range, specified by a comma-delimited string containing the start and end time values.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">valuerange</td>\n\
		<td>\n\
Returns or sets the minimum/maximum values (Y axis) range.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;minimum&gt;,&lt;maximum&gt;</td>\n\
					<td>Value range, specified by a comma-delimited string containing the minimum and maximum values (Y axis).					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">displayedcurves</td>\n\
		<td>\n\
Returns or sets the displayed FCurve objects as a comma delimited string containing the full name of the FCurve\'s parent. If nothing is displayed, it returns an empty string.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;string&gt;</td>\n\
					<td>The Parent\'s <a href=\"#!/url=./si_om/SIObject.FullName.html\">SIObject.FullName</a> of FCurve Object(s).					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">selectedkeysatframes</td>\n\
		<td>\n\
\n\
					Returns or sets the selected keys of FCurve objects as a string. The string format is the following: \"<first fcurve\'s=\"\" parent=\"\" full=\"\" name=\"\">,<first frame=\"\">,<second frame=\"\">;<second fcurve\'s=\"\" parent=\"\" full=\"\" name=\"\">,<first frame=\"\">,<second frame=\"\">\". For example:\n\
					<div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// Selects keys at frame 1 and frame 25 of the local posx of the cone object and the frame 50 of the local sclx of the Model.sphere object.\n\
myView.SetAttributeValue( \"selectedkeysatframes\", \"cone.kine.local.posx,1,25;Model.sphere.local.kine.sclx,50\" );</pre></td></tr>\n\
</table>\n\
</div>			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;string&gt;</td>\n\
					<td>A string representing the selected keys in a context of frame values (X axis).					</td>\n\
				</tr>\n\
			</table>\n\
		</second></first></second></second></first></first></td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">selectedkeysattimes</td>\n\
		<td>\n\
\n\
					Returns or sets the selected keys of FCurve objects as a string. The string format is the following: \"<first fcurve\'s=\"\" parent=\"\" full=\"\" name=\"\">,<first time=\"\">,<second time=\"\">;<second fcurve\'s=\"\" parent=\"\" full=\"\" name=\"\">,<first time=\"\">,<second time=\"\">\". For example:\n\
					<div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// Selects keys at time 0.5 and time 4 of the local posx of the cone object and the time 8 of the local sclx of the Model.sphere object.\n\
myView.SetAttributeValue( \"selectedkeysattimes\", \"cone.kine.local.posx,0.5,4;Model.sphere.local.kine.sclx,8\" );</pre></td></tr>\n\
</table>\n\
</div>			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;string&gt;</td>\n\
					<td>A string representing the selected keys in a context of time values (X axis).					</td>\n\
				</tr>\n\
			</table>\n\
		</second></first></second></second></first></first></td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">savebuffer</td>\n\
		<td>\n\
Saves the buffer copy of the edited curve, when buffer curves option is active.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;any value&gt;</td>\n\
					<td>This value is ignored.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a> only.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">swapbuffer</td>\n\
		<td>\n\
Swaps between the edited curve and its buffer copy, when buffer curves option is active.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;any value&gt;</td>\n\
					<td>This value is ignored.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a> only.\n\
				</td>\n\
	</tr>\n\
</table>\n\
<br />\n\
\n\
</div>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";