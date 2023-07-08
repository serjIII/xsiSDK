var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>AddClipRelation</title>\n\
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
            <h1>AddClipRelation</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">AddClipRelation</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Creates a master-slave relation between two clips. By default the relation \n\
binds the Start Offset, Clip In and Clip Out of the <a href=\"#!/url=./si_om/TimeControl.html\">TimeControl</a> \n\
object for the two <a href=\"#!/url=./si_om/Clip.html\">Clip</a> objects.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = AddClipRelation( [From], [To], [Name] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns the relation (a <a href=\"#!/url=./si_om/ClipRelation.html\">ClipRelation</a> object).</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">From		</td>\n\
		<td>The <a href=\"#!/url=./si_om/Clip.html\">Clip</a> object itself or its <a href=\"#!/url=./files/objectexpr.htm\">object name</a>		</td>\n\
		<td>\n\
The master clip of the relation.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection. If nothing is selected, a pick session starts.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">To		</td>\n\
		<td>The <a href=\"#!/url=./si_om/Clip.html\">Clip</a> object itself or its <a href=\"#!/url=./files/objectexpr.htm\">object name</a>		</td>\n\
		<td>\n\
The slave clip of the relation.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection. If nothing is selected, a pick session starts.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
New name for the <a href=\"#!/url=./si_om/ClipRelation.html\">ClipRelation</a>. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"Relation\"			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example shows how to create a ClipRelation using the AddClipRelation command.\n\
*/\n\
NewScene(null, false);\n\
// Set up the scene with a cone and then store its translation as a static pose\n\
CreatePrim(\"Cone\", \"MeshSurface\", null, null);\n\
Translate(null, 5.57429595406375, 0.195303936039821, -1.95303936039821E-02, \n\
	siRelative, siView, siObj, siXYZ, null, null, siXYZ, \n\
	null, null, null, null, null, null, 0);\n\
var sParams = \"cone.kine.local.sclx,cone.kine.local.scly,cone.kine.local.sclz\"\n\
	+ \",cone.kine.local.rotx,cone.kine.local.roty,cone.kine.local.rotz\"\n\
	+ \",cone.kine.local.posx,cone.kine.local.posy,cone.kine.local.posz\";\n\
StoreAction(null, sParams, 1, \"StoredStaticPose\", true, 1, 5, false, false);\n\
SelectObj(\"cone\", null, true);\n\
// Set up the mixer with two tracks and add the pose to both tracks at different frames\n\
AddTrack(\"Scene_Root\", \"Scene_Root\", 0, null, null);\n\
AddTrack(\"Scene_Root\", \"Scene_Root\", 0, null, null);\n\
AddClip(\"Scene_Root\", \"Sources.Scene_Root.StoredStaticPose\", null, \n\
	\"Mixer.Mixer_Anim_Track\", 19, null, null, null, null);\n\
AddClip(\"Scene_Root\", \"Sources.Scene_Root.StoredStaticPose\", null, \n\
	\"Mixer.Mixer_Anim_Track1\", 47, null, null, null, null);\n\
// Set up a master-slave relation between the two clips\n\
AddClipRelation(\"Mixer.Mixer_Anim_Track.StoredStaticPose_Clip\", \n\
	\"Mixer.Mixer_Anim_Track1.StoredStaticPose_Clip1\", null);</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";