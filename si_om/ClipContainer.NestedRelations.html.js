var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ClipContainer.NestedRelations</title>\n\
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
</style><link rel=\"stylesheet\" href=\"si_om/css/en.css\" type=\"text/css\" /><script>$(document).ready(function() { yepnope.injectJs(\"./si_om/lib/utils.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>ClipContainer.NestedRelations</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/ClipContainer.html\">ClipContainer</a>.NestedRelations</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns a <a href=\"#!/url=./si_om/ClipRelationCollection.html\">ClipRelationCollection</a> containing each <a href=\"#!/url=./si_om/ClipRelation.html\">ClipRelation</a> object \n\
nested under the ClipContainer object. For now only the <a href=\"#!/url=./si_om/Mixer.html\">Mixer</a> object can nest clip \n\
relations. \n\
<br /><br />\n\
Note: To get the collection of <a href=\"#!/url=./si_om/ClipRelation.html\">ClipRelation</a> objects that affect a particular clip use \n\
<a href=\"#!/url=./si_om/Clip.Relations.html\">Clip.Relations</a> instead.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
ClipRelationCollection rtn = ClipContainer.NestedRelations;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example shows how to create a ClipRelation.\n\
*/\n\
NewScene(null, false);\n\
CreatePrim(\"Cone\", \"MeshSurface\", null, null);\n\
Translate(null, 5.57429595406375, 0.195303936039821, -1.95303936039821E-02, \n\
		siRelative, siView, siObj, siXYZ, null, null, siXYZ, \n\
		null, null, null, null, null, null, 0);\n\
sParams = \"cone.kine.local.sclx,cone.kine.local.scly,cone.kine.local.sclz\"\n\
	+ \",cone.kine.local.rotx,cone.kine.local.roty,cone.kine.local.rotz\"\n\
	+ \",cone.kine.local.posx,cone.kine.local.posy,cone.kine.local.posz\";\n\
StoreAction(null, sParams, 1, \"StoredStaticPose\", true, 1, 5, false, false);\n\
SelectObj(\"cone\", null, true);\n\
AddTrack(\"Scene_Root\", \"Scene_Root\", 0, null, null);\n\
AddTrack(\"Scene_Root\", \"Scene_Root\", 0, null, null);\n\
var myClip  = AddClip(\"Scene_Root\", \"Sources.Scene_Root.StoredStaticPose\", \n\
	null, \"Mixer.Mixer_Anim_Track\", 19, null, null, null, null);\n\
var myClip1  = AddClip(\"Scene_Root\", \"Sources.Scene_Root.StoredStaticPose\", \n\
	null, \"Mixer.Mixer_Anim_Track1\", 47, null, null, null, null);\n\
var oRootMixer = ActiveSceneRoot.Mixer;\n\
var myClipRelation = oRootMixer.AddRelation(myClip, myClip1 , \"myRelation\");\n\
var myNestedRelations = oRootMixer.NestedRelations;\n\
var myRelations = oRootMixer.Relations;\n\
LogMessage( \"The number of clip relation(s) nested under the mixer is: \" \n\
	+ myNestedRelations.count );\n\
LogMessage( \"The number of clip relation(s) affecting the mixer is: \" \n\
	+ myRelations.count );</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";