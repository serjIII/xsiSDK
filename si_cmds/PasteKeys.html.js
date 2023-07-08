var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PasteKeys</title>\n\
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
            <h1>PasteKeys</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">PasteKeys</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Pastes <a href=\"#!/url=./si_om/FCurveKey.html\">FCurveKey</a>s from the buffer onto one or more <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a>s for the \n\
specified timerange (from StartFrame to EndFrame). FCurve keys are placed in the buffer by using the \n\
<a href=\"#!/url=./si_cmds/CutKeys.html\">CutKeys</a> or <a href=\"#!/url=./si_cmds/CopyKeys.html\">CopyKeys</a> commands.\n\
<br /><br />\n\
Tip: You specify each fcurve to paste onto by identifying the parameter it drives in the InputObjs \n\
argument.\n\
<br /><br />\n\
PasteKeys is the command equivalent of the paste action in the dopesheet and should be used when \n\
trying to emulate dopesheet behaviour.\n\
<br /><br />\n\
Note: This command uses <a href=\"#!/url=./files/OutArgDefined.htm\">output arguments</a>. C# and some \n\
scripting languages (such as JScript, PerlScript and Python) don\'t support arguments passed by reference so you \n\
need to use the best workaround for your situation:\n\
<br /><br />\n\
For scripting languages this command returns an <a href=\"#!/url=./files/ISIVTCollection.htm\">ISIVTCollection</a> \n\
which you can use to get the output arguments. \n\
<br /><br />\n\
For C# you can use the <a href=\"#!/url=./si_om/XSIApplication.ExecuteCommand.html\">XSIApplication.ExecuteCommand</a> method to call this command. ExecuteCommand \n\
packs the output arguments into a C# System.Object containing an <a href=\"#!/url=./files/Array.htm\">Array</a> of the output arguments (see\n\
<a href=\"#!/url=./files/csharp_understand_CallingCommandsfromCSharp.htm\">Calling Commands from C#</a>).\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>PasteKeys( [InputObjs], [StartFrame], [EndFrame], [Ripple], [Merge], [Type], [Offset], [Relative], [LeftContinuity], [RightContinuity] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">InputObjs		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of animatable parameters \n\
		(for example \"cone*/kine.local.pos\"). This parameter uses the Type parameter to\n\
		interpret which parameters to use in this way: <br /><br />\n\
		- If Type == siInputParameters then InputObjs is used exactly as input (either from the \n\
		specified list or the animatable parameters on the selected objects). <br /><br />\n\
		- If Type == siAnimatedParameters then InputObjs is expected to be a list of objects on\n\
		which each animatable parameter will be affected. <br /><br />\n\
		- If Type == siAllAnimatedParameters then the value of InputObjs is ignored and instead\n\
		the command uses all animated parameters on all objects in the entire scene.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
 \n\
		If no value is specified for this parameter, the Object List will use the selected\n\
		objects or parameters respecting the scope indicated by the Type argument.\n\
				</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">StartFrame		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Lower bound of the frame interval 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
1			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">EndFrame		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Upper bound of the frame interval 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
100			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Ripple		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 Flag to ripple the keys 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
True			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Merge		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 Flag to specify whether we merge (default) or replace keys when pasting			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
True			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Type		</td>\n\
		<td><a href=\"#!/url=./si_om/siParameterScope.html\">siParameterScope</a>		</td>\n\
		<td>\n\
 Parameter scope of the operation 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siInputParameters			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Offset		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Offset (new Upper Bound) from the Lower Bound of the pasted frame interval 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Relative		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 Flag to specify whether the key values should be pasted relative to the start frame.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">LeftContinuity		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 This parameter controls how the first pasted key value is determined.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>Use key value					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>Use fcurve value					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">2					</td>\n\
					<td>Use average of fcurve and pasted key value					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RightContinuity		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 This parameter controls how the last pasted key value is determined.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>Use key value					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>Use fcurve value					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">2					</td>\n\
					<td>Use average of fcurve and pasted key value					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/SelectKeysInTimespan.html\">SelectKeysInTimespan</a> <a href=\"#!/url=./si_cmds/DeselectAllKeys.html\">DeselectAllKeys</a> <a href=\"#!/url=./si_cmds/CopyKeys.html\">CopyKeys</a> <a href=\"#!/url=./si_cmds/CutKeys.html\">CutKeys</a> <a href=\"#!/url=./si_cmds/DeleteKeys.html\">DeleteKeys</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";