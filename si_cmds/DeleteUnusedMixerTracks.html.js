var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>DeleteUnusedMixerTracks</title>\n\
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
            <h1>DeleteUnusedMixerTracks</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">DeleteUnusedMixerTracks</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>Deletes all tracks (of all types) on the mixer which are currently not in use (i.e. have no clips on them).\n\
Note that it will also recurse into compound clips to find and remove any unused tracks there. </p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>DeleteUnusedMixerTracks( [InputObj] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">InputObj		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of models to process. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// This JScript example shows creation of a bunch of dummy\n\
// mixer tracks (of various kinds) and their subsequent removal\n\
// using the DeleteUnusedMixerTracks command.\n\
// Try running with and without the last line to see the\n\
// difference...it ends up deleting all but two of the tracks\n\
// it creates.\n\
// Create a sphere and a simple static Action.\n\
NewScene( null, false );\n\
newSph = CreatePrim( \"Sphere\", \"MeshSurface\" );\n\
oAction = StoreAction( \"\", \"sphere/kine.local.posx,kine.local.posy,kine.local.posz\",\n\
	1, \"StoredStaticPose\", true, 1, 5, false, false );\n\
// Create some tracks (mostly left empty to be deleted later).\n\
count = 10\n\
oTracks = new Array(count)\n\
for ( i = 0; i &lt; count; i++ )\n\
{\n\
	if ( i &lt; 0.5 * count )\n\
		trackType = 0;		// Animation Tracks\n\
	else if ( i &lt; 0.8 * count )\n\
		trackType = 1;		// Shape Tracks\n\
	else\n\
		trackType = 2;		// Audio Tracks\n\
	oTracks[i] = AddTrack(\"Scene_Root\", \"Scene_Root\", trackType, null, null);\n\
}\n\
// Add sources on some tracks.\n\
AddClip( ActiveSceneRoot, oAction, null, oTracks[1], 1, null, null, null, null );\n\
AddClip( ActiveSceneRoot, oAction, null, oTracks[4], 10, null, null, null, null );\n\
// Finally, delete the unused ones.\n\
DeleteUnusedMixerTracks( ActiveSceneRoot );</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/AddTrack.html\">AddTrack</a> <a href=\"#!/url=./si_cmds/DeleteUnusedAnimationSources.html\">DeleteUnusedAnimationSources</a> <a href=\"#!/url=./si_cmds/DeleteUnusedAudioSources.html\">DeleteUnusedAudioSources</a> <a href=\"#!/url=./si_cmds/DeleteUnusedCacheSources.html\">DeleteUnusedCacheSources</a> <a href=\"#!/url=./si_cmds/DeleteUnusedImageClips.html\">DeleteUnusedImageClips</a> <a href=\"#!/url=./si_cmds/DeleteUnusedImageSources.html\">DeleteUnusedImageSources</a> <a href=\"#!/url=./si_cmds/DeleteUnusedMaterials.html\">DeleteUnusedMaterials</a> <a href=\"#!/url=./si_cmds/DeleteAllUnusedMaterials.html\">DeleteAllUnusedMaterials</a> <a href=\"#!/url=./si_cmds/DeleteUnusedShaders.html\">DeleteUnusedShaders</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";