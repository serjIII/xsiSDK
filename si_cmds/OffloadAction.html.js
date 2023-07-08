var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>OffloadAction</title>\n\
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
            <h1>OffloadAction</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">OffloadAction</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Offloads one or many action sources. Offloading action source allows you to manage large \n\
scenes as it will disconnect heavy sources like those that contain motion capture fcurves \n\
from clips in the scene. You can reload (reconnect) the sources at a later time (see \n\
<a href=\"#!/url=./si_cmds/ReloadAction.html\">ReloadAction</a>).<br /><br />\n\
This command saves the source to disk and removes all animation source items (like fcurves \n\
and target objects), but it won\'t delete the action source. All animation clips that use \n\
this action source will still exist but they will be disconnected. When reloading the action \n\
source, all clips are reconnected. <br /><br />\n\
The source storage must be set to external and the file must be valid. Animation sources with \n\
internal storage cannot be offloaded. If the animation source has changed in any way, it is \n\
saved before offloading.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>OffloadAction( [InputObjs] );</pre>		</td>	</tr>\n\
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
<a href=\"#!/url=./files/listexpr.htm\">List</a> of action sources to process. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// JScript example that shows how to offload and reload an animation source.\n\
NewScene( null, false );\n\
// ----------------------------------------------------------------------------------\n\
// SETUP\n\
// Create an animation source on a sphere.\n\
CreatePrim( \"Sphere\", \"MeshSurface\", null, null );\n\
Translate( null, -6.70417330973736, 0.299143577255684, -2.99143577255684E-02, \n\
	siRelative, siView, siObj, siXYZ, null, null, null, null, null, null, null, null, null );\n\
SaveKey( \"sphere.kine.local.posx,sphere.kine.local.posy,sphere.kine.local.posz\", 1, null, null );\n\
SetValue( \"PlayControl.Key\", 40, null );\n\
SetValue( \"PlayControl.Current\", 40, null );\n\
Translate( null, 15.6330498702397, 0.32905793498125, -3.29057934981251E-02, \n\
	siRelative, siView, siObj, siXYZ, null, null, null, null, null, null, null, null, null );\n\
SaveKey( \"sphere.kine.local.posx,sphere.kine.local.posy,sphere.kine.local.posz\", 40, null, null );\n\
CreateModel( null, null, null );\n\
SelectObj( \"Model.sphere\", null, null );\n\
StoreAction( \"\", \"Model.sphere.kine.local.sclx,Model.sphere.kine.local.scly, Model.sphere.kine.local.sclz,Model.sphere.kine.local.rotx,Model.sphere.kine.local.roty, Model.sphere.kine.local.rotz,Model.sphere.kine.local.posx,Model.sphere.kine.local.posy, Model.sphere.kine.local.posz,Model.sphere.kine.global.sclx,Model.sphere.kine.global.scly, Model.sphere.kine.global.sclz,Model.sphere.kine.global.rotx,Model.sphere.kine.global.roty, Model.sphere.kine.global.rotz,Model.sphere.kine.global.posx,Model.sphere.kine.global.posy, Model.sphere.kine.global.posz\", 2, \"simplemove\", true, 1, 40, false, false );\n\
// Add a clip of the source in the mixer\n\
SelectObj( \"Model\", null, null );\n\
AddTrack( \"Model\", \"Model\", 0, null, null );\n\
AddClip( \"Model\", \"Sources.Animation.Model.simplemove\", null, \n\
	\"Model.Mixer.Mixer_Anim_Track\", 1, null, null, null, null );\n\
SetValue(\"PlayControl.Key\", 20, null);\n\
SetValue(\"PlayControl.Current\", 20, null);\n\
// We need to set the external storage to external if we want to be able to offload the source\n\
SetValue( \"Sources.Animation.Model.simplemove.storage\", 3, null );\n\
// ----------------------------------------------------------------------------------\n\
// OFFLOAD\n\
// Now offload the source\n\
OffloadAction( \"Sources.Animation.Model.simplemove\" );\n\
// The clip in the mixer is now gray and has no more effect on the sphere.\n\
SetValue(\"PlayControl.Key\", 10, null);\n\
SetValue(\"PlayControl.Current\", 10, null);\n\
// ----------------------------------------------------------------------------------\n\
// RELOAD\n\
// Finally, reload the source and reconnect the clip.:\n\
ReloadAction(\"Sources.Animation.Model.simplemove\");</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/ReloadAction.html\">ReloadAction</a> <a href=\"#!/url=./si_cmds/PartialOffloadAction.html\">PartialOffloadAction</a> <a href=\"#!/url=./si_om/ActionSource.Offload.html\">ActionSource.Offload</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";