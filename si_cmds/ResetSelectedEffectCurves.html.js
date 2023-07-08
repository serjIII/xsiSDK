var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ResetSelectedEffectCurves</title>\n\
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
            <h1>ResetSelectedEffectCurves</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ResetSelectedEffectCurves</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.5</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>Resets the effect curves for the selected object(s) in the \n\
selected action clips This will only be called (for now) from the effect \n\
contextual menu.<br /><br />\n\
Note: The object where the action clip is defined must be selected before calling this command.<br /><br /></p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>ResetSelectedEffectCurves( Clip );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Clip		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Selected Clips 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example shows how to create an offset clip effect.\n\
\' First, an animation is created on the sphere, and \n\
\' a CreateOffsetEffect is created on the action clip.\n\
\' Then, offset keys are added to the Fcurve of the clip effect.\n\
\' \n\
\' At the end, ResetSelectedEffectCurves will be called to reset all infos\n\
\' on the effect of the current selected object, \n\
\' but keeping the effect.\n\
\'\n\
NewScene\n\
CreatePrim \"Sphere\", \"NurbsSurface\", \"MySphere\"\n\
SetValue \"PlayControl.Out\", 40\n\
\' Setting a key frame on XPos at frame 1\n\
SaveKey \"MySphere.kine.local.posx\", 1, -9.0\n\
\' Setting a key frame on XPos at frame 10\n\
SaveKey \"MySphere.kine.local.posx\", 10, 3.0\n\
\' Setting a key frame on XPos at frame 30\n\
SaveKey \"MySphere.kine.local.posx\", 30,-3.0\n\
\' Setting a key frame on XPos at frame 40\n\
SaveKey \"MySphere.kine.local.posx\", 40, 9.0\n\
\' Return to frame 1\n\
SetValue \"PlayControl.Current\", 1\n\
\' Store fcurve into source Actions\n\
StoreAction \"MySphere\", \"MySphere.kine.local.posX\", 2, \"XPosAction\" , True, 1, 40, True, False\n\
\' Add a track into the mixer, and add action clip to it.\n\
AddTrack \"Scene_Root\", \"Scene_Root\", 0\n\
AddClip \"Scene_Root\", \"Sources.Animation.XPosAction\", , \"Mixer.Mixer_Anim_Track\", 0\n\
\' Create an Offset Effect on XPosActionClip\n\
CreateOffsetEffect \"Mixer.Mixer_Anim_Track.XPosAction_Clip\"\n\
\' Goto Frame 15 and set the XPos of the sphere to -3.75.\n\
\' When calling cmd SaveOffsetKeys, the system will save\n\
\' into the fcurve of offset clip effect the difference\n\
\' between the XPos value in the clip, and -3.75\n\
SetValue \"PlayControl.Current\", 15\n\
Translate \"MySphere\", -3.75, 0, 0, siAbsolute, siParent, siObj, siX\n\
SaveOffsetKeys \"Mixer.Mixer_Anim_Track.XPosAction_Clip\",siAllParamsInClip , 15\n\
\' Create another offset key (key on the fcurve of the clip effect)\n\
\' at frame 30\n\
SetValue \"PlayControl.Current\", 30\n\
Translate \"MySphere\", 2, 0, 0, siAbsolute, siParent, siObj, siX\n\
SaveOffsetKeys \"Mixer.Mixer_Anim_Track.XPosAction_Clip\", siAllParamsInClip, 30\n\
SelectObj \"MySphere\"\n\
\' Now reset the offset effect curve created.\n\
ResetSelectedEffectCurves \"Mixer.Mixer_Anim_Track.XPosAction_Clip\"\n\
\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\n\
\' To see the result, go to the animation mixer, \n\
\' right-click the XPosAction_Clip, and select Animation Editor\n\
\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/CreateOffsetEffect.html\">CreateOffsetEffect</a> <a href=\"#!/url=./si_cmds/CreateScaleEffect.html\">CreateScaleEffect</a> <a href=\"#!/url=./si_cmds/RemoveEffect.html\">RemoveEffect</a> <a href=\"#!/url=./si_cmds/ResetAllEffectCurves.html\">ResetAllEffectCurves</a> <a href=\"#!/url=./si_cmds/ResetEffectAtFrame.html\">ResetEffectAtFrame</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";