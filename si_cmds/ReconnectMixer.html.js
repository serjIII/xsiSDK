var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ReconnectMixer</title>\n\
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
            <h1>ReconnectMixer</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ReconnectMixer</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v3.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>Reconnect the animation mixer.</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>ReconnectMixer( [Model] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Model		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Model to add the clip to. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Scene root.			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example shows the purpose of the command ReconnectMixer.\n\
\' It exports a mixer that drive the object : sphere\n\
\' after the sphere is deleted as well as the mixer.\n\
\' the mixer is imported back and it gives warning because the \n\
\' sphere is missing. Using ReconnectMixer fixes the problem.\n\
\'\n\
NewScene , false\n\
\' Create the configuration\n\
sMixerPath = XSIUtils.BuildPath( _\n\
	Application.InstallationPath(siProjectPath), _\n\
	\"Models\", \"MyImportedMixer.xsimixer\" _\n\
)\n\
CreatePrim \"Sphere\", \"MeshSurface\"\n\
SaveKey \"sphere.kine.local.sclx,sphere.kine.local.scly,sphere.kine.local.sclz\", 1\n\
SetValue \"PlayControl.Key\", 30\n\
SetValue \"PlayControl.Current\", 30\n\
Scale , 9.29203539823009E-02, 9.29203539823009E-02, 9.29203539823009E-02, siRelative, siLocal, siObj, siXYZ\n\
SaveKey \"sphere.kine.local.sclx,sphere.kine.local.scly,sphere.kine.local.sclz\", 30\n\
StoreAction , \"sphere.kine.local.sclx,sphere.kine.local.scly,sphere.kine.local.sclz,sphere.kine.local.rotx,sphere.kine.local.roty,sphere.kine.local.rotz,sphere.kine.local.posx,sphere.kine.local.posy,sphere.kine.local.posz,sphere.kine.global.sclx,sphere.kine.global.scly,sphere.kine.global.sclz,sphere.kine.global.rotx,sphere.kine.global.roty,sphere.kine.global.rotz,sphere.kine.global.posx,sphere.kine.global.posy,sphere.kine.global.posz\", 2, \"StoredFcvPose\", True, 1, 30, False, False\n\
AddTrack \"Scene_Root\", \"Mixer\", 0\n\
AddClip \"Scene_Root\", \"Sources.Scene_Root.StoredFcvPose\", , \"Mixer.Mixer_Anim_Track\", 5\n\
ExportMixer \"sphere\", sMixerPath\n\
\' Delete the sphere and the mixer\n\
DeleteObj \"Mixer\"\n\
DeleteObj \"sphere\"\n\
\' Import the sphere and recreate the sphere\n\
ImportMixer sMixerPath, \"Scene_Root\"\n\
CreatePrim \"Sphere\", \"MeshSurface\"\n\
\' Here the sphere is not driven by the mixer,\n\
\' Call the ReconnectMixer command to reconnect the animation.\n\
ReconnectMixer \"Scene_Root\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";