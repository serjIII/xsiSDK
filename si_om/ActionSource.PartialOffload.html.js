var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ActionSource.PartialOffload</title>\n\
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
            <h1>ActionSource.PartialOffload</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/ActionSource.html\">ActionSource</a>.PartialOffload</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Partially offloads the fcurve items one or many action sources for a given range of frames.  Note that this applies \n\
only to <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a> items in the action.\n\
<br /><br />\n\
The action source needs to have an external storage in order to be able to execute this command. Before offloading \n\
an action source, if the action is dirty it will be exported. Once offloaded or partially offloaded, an action source \n\
will never export the data again. When an action source is partially offloaded, the status parameter of the source \n\
is reset to 1 (roughly equivalent to the <a href=\"#!/url=./si_om/siAssetStatus.html#siAssetStatusPartiallyLoaded\">siAssetStatusPartiallyLoaded</a> enum value.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>ActionSource.PartialOffload( Int32 in_dStartFrame, Int32 in_dEndFrame, Boolean in_bRemember );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>ActionSource.PartialOffload( FrameStart, FrameEnd, [Remember] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">FrameStart		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 The frame to start offloading the fcurve keys. If smaller than AnimStart parameter on the action, AnimStart will be used instead.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">FrameEnd		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 The frame to end offloading the fcurve keys. If greater than AnimEnd parameter on the action, AnimStart will be used instead.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Remember		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
\n\
		If true, the range of frames will be appended to the OffloadedRanges parameter of the action, so when the scene \n\
		is reloaded the partial offload will be processed. If false, the range of frames is only temporarily offloaded.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
false			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
This example demonstrates how to partially offload an animation source.\n\
*/\n\
NewScene( null, false );\n\
// Create an animation source of a sphere.\n\
CreatePrim(\"Cone\", \"MeshSurface\", null, null);\n\
Translate(null, -7.85065649868519, 0.715575131336405, -7.15575131336405E-02, \n\
	siRelative, siView, siObj, siXYZ, null, null, null, null, null, null, null, null, null);\n\
SaveKey(\"cone.kine.local.posx,cone.kine.local.posy,cone.kine.local.posz\", 1, null, null);\n\
SetValue(\"PlayControl.Key\", 10, null);\n\
SetValue(\"PlayControl.Current\", 10, null);\n\
Translate(null, 4.19500728937374, 7.06630442194682, -0.706630442194682, \n\
	siRelative, siView, siObj, siXYZ, null, null, null, null, null, null, null, null, null);\n\
SaveKey(\"cone.kine.local.posx,cone.kine.local.posy,cone.kine.local.posz\", 10, null, null);\n\
SetValue(\"PlayControl.Key\", 20, null);\n\
SetValue(\"PlayControl.Current\", 20, null);\n\
Translate(null, 4.25493596493627, -7.84151081422792, 0.784151081422792, \n\
	siRelative, siView, siObj, siXYZ, null, null, null, null, null, null, null, null, null);\n\
SaveKey(\"cone.kine.local.posx,cone.kine.local.posy,cone.kine.local.posz\", 20, null, null);\n\
SetValue(\"PlayControl.Key\", 30, null);\n\
SetValue(\"PlayControl.Current\", 30, null);\n\
Translate(null, 4.1350786138113, 7.57317013997673, -0.757317013997673, \n\
	siRelative, siView, siObj, siXYZ, null, null, null, null, null, null, null, null, null);\n\
SaveKey(\"cone.kine.local.posx,cone.kine.local.posy,cone.kine.local.posz\", 30, null, null);\n\
SetValue(\"PlayControl.Key\", 40, null);\n\
SetValue(\"PlayControl.Current\", 40, null);\n\
Translate(null, 2.21736099581185, -7.48372324855972, 0.748372324855972, \n\
	siRelative, siView, siObj, siXYZ, null, null, null, null, null, null, null, null, null);\n\
SaveKey(\"cone.kine.local.posx,cone.kine.local.posy,cone.kine.local.posz\", 40, null, null);\n\
CreateModel(null, null, null);\n\
SelectObj(\"Model.Cone\", null, null);\n\
StoreAction(\"\", \"Model.Cone.kine.local.sclx,Model.Cone.kine.local.scly,\"\n\
	+ \"Model.Cone.kine.local.sclz,Model.Cone.kine.local.rotx,Model.Cone.\"\n\
	+ \"kine.local.roty,Model.Cone.kine.local.rotz,Model.Cone.kine.local.\"\n\
	+ \"posx,Model.Cone.kine.local.posy,Model.Cone.kine.local.posz,Model.\"\n\
	+ \"Cone.kine.global.sclx,Model.Cone.kine.global.scly,Model.Cone.kine.\"\n\
	+ \"global.sclz,Model.Cone.kine.global.rotx,Model.Cone.kine.global.roty\"\n\
	+ \",Model.Cone.kine.global.rotz,Model.Cone.kine.global.posx,Model.Cone\"\n\
	+ \".kine.global.posy,Model.Cone.kine.global.posz\", 2, \"simplemove\", \n\
	true, 1, 40, false, false);\n\
// Add a clip of the source in the mixer\n\
SelectObj(\"Model\", null, null);\n\
AddTrack(\"Model\", \"Model\", 0, null, null);\n\
AddClip(\"Model\", \"Sources.Animation.Model.simplemove\", null, \n\
	\"Model.Mixer.Mixer_Anim_Track\", 1, null, null, null, null);\n\
SetValue(\"PlayControl.Key\", 20, null);\n\
SetValue(\"PlayControl.Current\", 20, null);\n\
// We need to set the external storage to external if we want to be able \n\
// to offload the source\n\
SetValue(\"Sources.Animation.Model.simplemove.storage\", 3);\n\
var oAction = GetValue(\"Sources.Animation.Model.simplemove\");\n\
// Now offload the fcurve in the section of frames 10 to 20\n\
oAction.PartialOffload( 10,20, false );\n\
LogMessage(oAction.status.Value);\n\
LogMessage(oAction.OffloadedRanges.Value);\n\
// Note that this partial offload as not been added to the OffloadedRanges parameter of the source.\n\
// reloading the action will dispose the temporary offloaded ranges\n\
oAction.Reload();\n\
oAction.PartialOffload( 12,22, true );\n\
LogMessage(oAction.status.Value);\n\
LogMessage(oAction.OffloadedRanges.Value);\n\
// Expected result:\n\
//INFO : 1\n\
//INFO : \n\
//INFO : 1\n\
//INFO : 12,22</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/PartialOffloadAction.html\">PartialOffloadAction</a> <a href=\"#!/url=./si_om/ActionSource.Offload.html\">ActionSource.Offload</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";