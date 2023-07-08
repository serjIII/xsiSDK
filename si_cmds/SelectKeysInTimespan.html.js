var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SelectKeysInTimespan</title>\n\
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
            <h1>SelectKeysInTimespan</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SelectKeysInTimespan</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v6.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Manipulates the key selection for all keys in the timespan (from StartFrame to EndFrame)\n\
on each of the curves from the input list according to the specified selection mode.\n\
The selection mode defines how to manipulate the current key selection: that is, whether\n\
to reset, append, toggle, or remove keys from the selection (use the <a href=\"#!/url=./si_cmds/DeselectAllKeys.html\">DeselectAllKeys</a>\n\
command to clear the selection).<br /><br />\n\
Tip: You specify each fcurve to paste onto by identifying the parameter it drives in the InputObjs argument.<br /><br />\n\
Note: Key selection is used and shown in the DopeSheet.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SelectKeysInTimespan( [InputObjs], Mode, [StartFrame], [EndFrame], [Type] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Mode		</td>\n\
		<td><a href=\"#!/url=./si_om/siFCurveKeySelectionMode.html\">siFCurveKeySelectionMode</a>		</td>\n\
		<td>\n\
 Mode of key selection to perform. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siSetKeySelection			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">StartFrame		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
Start frame of the range of keys to change selection on. <br /><br />Leave both Start and End blank for all keys. <br /><br />Value range -Inf, +Inf		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">EndFrame		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
End frame of the range of keys to change selection on. <br /><br />Leave both Start and End blank for all keys. <br /><br />Value range -Inf, +Inf		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Type		</td>\n\
		<td><a href=\"#!/url=./si_om/siParameterScope.html\">siParameterScope</a>		</td>\n\
		<td>\n\
 Parameter scope of the operation 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siInputParameters			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example demonstrates how to use the SelectKeysInTimespan command by creating\n\
\' a simple null, animating it and then selecting some of its keys.  If you want to \n\
\' use the DopeSheet to view keys selected via SelectKeysInTimespan, make sure you\n\
\' comment out the last line of the example (DeselectAllKeys).\n\
\'\n\
\' Create a null and animate it\n\
NewScene, False\n\
GetPrim \"Null\"\n\
Translate , -6.53833089859819, 3.35653805660097, -0.335653805660097, siRelative, siView, siObj, siXYZ, , , , , , , , , , 0\n\
SaveKey \"null.kine.local.posx,null.kine.local.posy,null.kine.local.posz\", 1\n\
SetValue \"PlayControl.Key\", 25\n\
SetValue \"PlayControl.Current\", 25\n\
Translate , 13.2015980564052, 0.828774828790348, -8.28774828790347E-02, siRelative, siView, siObj, siXYZ, , , , , , , , , , 0\n\
SaveKey \"null.kine.local.posx,null.kine.local.posy,null.kine.local.posz\", 25\n\
SetValue \"PlayControl.Key\", 50\n\
SetValue \"PlayControl.Current\", 50\n\
Translate , -12.2437534024705, -6.75451485464142, 0.675451485464142, siRelative, siView, siObj, siXYZ, , , , , , , , , , 0\n\
SaveKey \"null.kine.local.posx,null.kine.local.posy,null.kine.local.posz\", 50\n\
SetValue \"PlayControl.Key\", 75\n\
SetValue \"PlayControl.Current\", 75\n\
Translate , 10.2864186748647, -1.78186588189925, 0.178186588189925, siRelative, siView, siObj, siXYZ, , , , , , , , , , 0\n\
SaveKey \"null.kine.local.posx,null.kine.local.posy,null.kine.local.posz\", 75\n\
SetValue \"PlayControl.Key\", 100\n\
SetValue \"PlayControl.Current\", 100\n\
Translate , -10.9943908103816, 8.70213570229867, -0.870213570229867, siRelative, siView, siObj, siXYZ, , , , , , , , , , 0\n\
SaveKey \"null.kine.local.posx,null.kine.local.posy,null.kine.local.posz\", 100\n\
\' Select all the keys between frames 25 and 50 (inclusive) on each of the posx, posy and posz curves.\n\
SelectKeysInTimespan \"null.kine.local.posx,null.kine.local.posy,null.kine.local.posz\", siSetKeySelection, 25, 50\n\
\' If you wish you can now view that key selection opening a DopeSheet.  The\n\
\' selected keys will be drawn in yellow.\n\
\' Select all the keys between frames 23 and 31 (inclusive) on each of the posx, posy and posz curves.\n\
\' And then add all the keys between frames 48 and 53 (inclusive) again on those same curves.\n\
SelectKeysInTimespan \"null.kine.local.posx,null.kine.local.posy,null.kine.local.posz\", siSetKeySelection, 23, 31\n\
SelectKeysInTimespan \"null.kine.local.posx,null.kine.local.posy,null.kine.local.posz\", siAddToKeySelection, 48, 53\n\
\' Deselect all the keys\n\
DeselectAllKeys</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/DeselectAllKeys.html\">DeselectAllKeys</a> <a href=\"#!/url=./si_cmds/ScaleAndOffset.html\">ScaleAndOffset</a> <a href=\"#!/url=./si_cmds/CopyKeys.html\">CopyKeys</a> <a href=\"#!/url=./si_cmds/CutKeys.html\">CutKeys</a> <a href=\"#!/url=./si_cmds/DeleteKeys.html\">DeleteKeys</a> <a href=\"#!/url=./si_cmds/PasteKeys.html\">PasteKeys</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";