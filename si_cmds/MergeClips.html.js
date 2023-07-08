var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MergeClips</title>\n\
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
            <h1>MergeClips</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">MergeClips</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v2.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>Create a new source that contains a copy of the keys of each fcurve in the selected clips.  This is similar to a plot, except that the data is not generated with a key at every frame. <br /><br />Note: Clips should not overlap, or be weighted against other clips, or have timewarps. Only works with FCurve and static value items.</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = MergeClips( InputObjs );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns the new <a href=\"#!/url=./si_om/ActionSource.html\">ActionSource</a> created.</p></div>\n\
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
<a href=\"#!/url=./files/listexpr.htm\">List</a> of clips to merge. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' This example creates three clips on a track.  Then\n\
\' it merges the data (static values and fcurve keys)\n\
\' from those three sources into a new source Action.\n\
\' Finally it instantiates this merged Action onto the\n\
\' mixer.\n\
option explicit\n\
dim oSph, strParams, oTrack(1), oAct(2), oClip(2), oMerged\n\
\' Create an object for us to play with.\n\
strParams = \"/kine.local.posx,kine.local.posy,kine.local.posz\"\n\
NewScene , False\n\
set oSph = CreatePrim( \"Sphere\", \"MeshSurface\" )\n\
\' Create an Action containing fcurve sources.\n\
Translate oSph, -6, 4, 0, siAbsolute, siParent, siObj, siXYZ\n\
SaveKey oSph &amp; strParams, 1\n\
Translate oSph, -8, -6, 0, siAbsolute, siParent, siObj, siXYZ\n\
SaveKey oSph &amp; strParams, 10\n\
Translate oSph, 6, -4, 0, siAbsolute, siParent, siObj, siXYZ\n\
SaveKey oSph &amp; strParams, 20\n\
set oAct(0) = StoreAction( , oSph &amp; strParams, 2, \"StoredFcvPose\", True, 1, 20, False, False )\n\
\' Create a couple of Actions with static (snapshot) sources.\n\
Translate oSph, 8, 6, 0, siAbsolute, siParent, siObj, siXYZ\n\
set oAct(1) = StoreAction( , oSph &amp; strParams, 1, \"StoredStaticAction\", True, 1, 1, False, False )\n\
Translate oSph, 0, 0, -10, siAbsolute, siParent, siObj, siZ\n\
set oAct(2) = StoreAction( , oSph &amp; strParams, 1, \"StoredStaticAction\", True, 1, 1, False, False )\n\
\' Instantiate these three Actions on the mixer.\n\
set oTrack(0) = AddTrack( \"Scene_Root\", \"Scene_Root\", 0 )\n\
set oClip(0) = AddClip( \"Scene_Root\", oAct(1), , oTrack(0), 5, , , , False )\n\
set oClip(1) = AddClip( \"Scene_Root\", oAct(0), , oTrack(0), 15, , , , False )\n\
set oClip(2) = AddClip( \"Scene_Root\", oAct(2), , oTrack(0), 45, , , , False )\n\
\' Merge together the three clips into a new Action.\n\
set oMerged = MergeClips( oClip(0) &amp; \",\" &amp; oClip(1) &amp; \",\" &amp; oClip(2) )\n\
\' Finally, add this as a new clip, muting the first track.\n\
SetValue oTrack(0) &amp; \".mute\", True\n\
set oTrack(1) = AddTrack( \"Scene_Root\", \"Scene_Root\", 0 )\n\
AddClip \"Scene_Root\", oMerged, , oTrack(1), 5, , , , False</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";