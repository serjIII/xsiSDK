var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ScaleAndOffset</title>\n\
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
            <h1>ScaleAndOffset</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ScaleAndOffset</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Offsets or scales the animation of the specified objects by offsetting (stretching) or \n\
scaling (shrinking) the portion of an fcurve between a start and end \n\
frame using a specified pivot point, then translating the resulting scaled fcurve portion. \n\
You can use this command to change the timing of all animation in a scene at once. <br /><br />\n\
By default, the ripple effect is active, meaning that the region offsets other keys that are \n\
further along on the timeline (to the right). The rest of the function curve is moved to the \n\
right of the inserted region, causing a ripple effect. You can turn this feature off by setting \n\
the Ripple argument to False. <br /><br /> \n\
ScaleAndOffset is the command equivalent of moving or scaling a keyframe region in the dopesheet. \n\
It should be used when trying to emulate dopesheet behaviour. The <a href=\"#!/url=./si_cmds/Sequence.html\">Sequence</a> \n\
command is similar in effect but is the command equivalent of doing Animation > Sequence Animation. \n\
When emulating Animation > Sequence Animation behaviour, use <a href=\"#!/url=./si_cmds/Sequence.html\">Sequence</a> instead.<br /><br />\n\
Note: If the Layer argument is set to -1 (All layers), the command will modify the parameters\n\
on all layers, even on those locked. For each parameter on a locked animation layer that is modified\n\
by this command, a warning will be logged to inform the user the locked animation layer(s) have been modified.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>ScaleAndOffset( [InputObjs], [Type], [Offset], [Scale], [StartFrame], [EndFrame], [Pivot], [Ripple], Mode, [Discrete Time], [SelectedKeysOnly], [Layer] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Type		</td>\n\
		<td><a href=\"#!/url=./si_om/siParameterScope.html\">siParameterScope</a>		</td>\n\
		<td>\n\
 Parameter scope of the operation.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siAnimatedParameters			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Offset		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Value of the offset you want to apply to the fcurve(s). <br /><br />Value range -Inf, +Inf		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Scale		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Value of the scaling factor you want to apply to the fcurve(s). <br /><br />Value range 0, +Inf		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">StartFrame		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Start frame of the region of the fcurve(s) you want to operate. <br /><br />Value range -Inf, +Inf		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">EndFrame		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 End frame of the region of the fcurve(s) you want to operate. <br /><br />Value range -Inf, +Inf		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Pivot		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Pivot frame is the frame w.r.t which you wish to scale. <br /><br />Value range 0, +Inf		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Ripple		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 Ripple effect of resulting fcurve.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>False					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>True					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Mode		</td>\n\
		<td><a href=\"#!/url=./si_om/siSequenceMode.html\">siSequenceMode</a>		</td>\n\
		<td>\n\
 Affected items for SequenceAll only. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siFCurvesAnimationSources			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Discrete Time		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 Make sure that all the keys will fall on frames.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>False					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>True					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SelectedKeysOnly		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 \n\
		True to scale and offset only the selected keys within the timerange (from StartFrame to EndFrame). To create or modify a key selection, \n\
		use the <a href=\"#!/url=./si_cmds/SelectKeysInTimespan.html\">SelectKeysInTimespan</a> command. <br /><br /> \n\
		By default (false), this command operates on all keys within the timerange.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>False					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>True					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Layer		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
\n\
		Animation layer to scale and offset. If the Type parameter is set to siAllAnimatedParameters,\n\
		this argument is ignored and the default value is used (all layers).\n\
			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
All layers (-1)			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' Create a cube and a null with identical animation,\n\
\' then scale the cube\'s animation by half and offset it 50 frames.\n\
\'\n\
dim oNull,oCube\n\
set oCube = CreatePrim(\"Cube\", \"MeshSurface\")\n\
oCube.length = 1\n\
set oNull = GetPrim(\"Null\")\n\
AddToMarking \"kine.local.pos.posx,kine.local.pos.posz\"\n\
Translate oNull, -3, 0, 3, siAbsolute, siView, siObj, siXYZ\n\
SaveKey ,1\n\
Translate oNull, 0, 0, -3, siAbsolute, siView, siObj, siXYZ\n\
SaveKey , 50\n\
Translate oNull, 3, 0, 3, siAbsolute, siView, siObj, siXYZ\n\
SaveKey , 100\n\
\'copy null\'s animation over to the cube\n\
CopyAllAnimation2 oNull, siAnySource, siAllParam, False\n\
PasteAllAnimation oCube\n\
\'\n\
\' Now Scale and offset the cube animation\n\
\' The begining of the animation is offset to frame 50\n\
\' and the entire sequence is scaled by 0.5 \n\
\'\n\
ScaleAndOffset oCube, siAnimParams, 50, 0.5, 1, 100, 1, True, , False\n\
\'\n\
\' The cube will stay at its initial position till\n\
\' frame 50, then catch up to the null\n\
\'\n\
PlayForwardsFromStart</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/FCurve.html\">FCurve</a> <a href=\"#!/url=./si_cmds/Sequence.html\">Sequence</a> <a href=\"#!/url=./si_cmds/ActivateFCurve.html\">ActivateFCurve</a> <a href=\"#!/url=./si_cmds/SelectKeysInTimespan.html\">SelectKeysInTimespan</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";