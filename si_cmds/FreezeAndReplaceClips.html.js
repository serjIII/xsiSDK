var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>FreezeAndReplaceClips</title>\n\
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
            <h1>FreezeAndReplaceClips</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">FreezeAndReplaceClips</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.5</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Freezes the input clips by plotting them into a new source action and replacing \n\
them with the newly created source action. It then deletes the input clips \n\
and creates a new track in the animation mixer, containing a new clip of the \n\
new frozen action.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oString = FreezeAndReplaceClips( [InputObj], [Name], [IgnoreInactiveChannels], [StepFrame], [FCurve Kind], [DefaultSegKind], [Fit FCurve], [Fit Tolerance], [ProcessContRots] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns the fullname of the action as a <a href=\"#!/url=./files/String.htm\">String</a>.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">InputObj		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of clips 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Name of the frozen action. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"FrozenAction\"			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">IgnoreInactiveChannels		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 Ignore inactive channels when freezing. If set to True, \n\
	inactive items will not be added in the frozen action. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
True			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">StepFrame		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
Step between frames.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
1			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">FCurve Kind		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 What kind of fcurve do we want to plot to?  			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
30			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">10					</td>\n\
					<td>BOOLEAN (value true or false)					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">15					</td>\n\
					<td>INTEGER (staircase-like fcurve with integer values)					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">20					</td>\n\
					<td>STANDARD (fcurve with spline/linear/constant interpolation)					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">30					</td>\n\
					<td>RAWDATA (linear fcurve: less storage than a standard fcurve but with linear interpolation only)					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">DefaultSegKind		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 What kind of interpolation do we want for the resulting fcurves? <br /><br />\n\
	Note: Only relevant when FCurveKind is 20 (Standard).			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
3			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>CONSTANT					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">2					</td>\n\
					<td>LINEAR					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">3					</td>\n\
					<td>CUBIC					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Fit FCurve		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 Do we want to fit an fcurve through the plotted values?				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Fit Tolerance		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 What tolerance do we want for the fit? 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0.01			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ProcessContRots		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
Do we want to process rotation curves to ensure their continuity?			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
True			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example sets up two action clips for a sphere (one on the\n\
\' X-position and one on the Y-position), stores the actions, and\n\
\' then freezes the clips, creating a new one on a new track.\n\
\'\n\
\' Set up the scene \n\
Set oRoot = ActiveSceneRoot\n\
Set oSphere = CreatePrim( \"Sphere\", \"NurbsSurface\", \"MySphere\" )\n\
\' Setting key frames on XPos and YPos at various frames\n\
SaveKey oSphere.posx, 1, -9.0\n\
SaveKey oSphere.posx, 10, 3.0\n\
SaveKey oSphere.posx, 30,-3.0\n\
SaveKey oSphere.posx, 40, 9.0\n\
SaveKey oSphere.posy, 1, -2.0\n\
SaveKey oSphere.posy, 30, 2.0\n\
\' Store fcurve into source Actions\n\
Set oAct1 = StoreAction( oSphere, oSphere.posX, 2, \"PlotXPosAction\" , _\n\
			True, 1, 40, True, False )\n\
Set oAct2 = StoreAction( oSphere, oSphere.posy, 2, \"PlotYPosAction\" , _\n\
			True, 1, 30, True, False )\n\
\' Add 2 tracks into the animation mixer, and add action clip with \n\
\' the 2 sources action in tracks\n\
Set oClip1 = AddClip( oRoot, oAct1, , , 1 )\n\
Set oClip2 = AddClip( oRoot, oAct2, , , 1 )\n\
\' Create an XSICollection containing the 2 action clips \n\
Set oInputClips = CreateObject( \"XSI.Collection\" )\n\
oInputClips.Add oClip1\n\
oInputClips.Add oClip2\n\
\' Freeze action clips, and create a new one clip on a new track with \n\
\' the clip collection\n\
FreezeAndReplaceClips oInputClips, \"FreezeXYPosAction\", True, 1, _\n\
			30, 3, False, 0.01, True</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/FreezeClips.html\">FreezeClips</a> <a href=\"#!/url=./si_cmds/StoreAction.html\">StoreAction</a> <a href=\"#!/url=./si_cmds/PlotToActions.html\">PlotToActions</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";