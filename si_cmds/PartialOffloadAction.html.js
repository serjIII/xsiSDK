var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PartialOffloadAction</title>\n\
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
            <h1>PartialOffloadAction</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">PartialOffloadAction</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Partially offloads one or many fcurve action sources for a given range of frames. The action \n\
source needs to have external storage in order to be able to execute this command. \n\
<br /><br />\n\
Before offloading an action source, if the action is dirty it is exported. Once offloaded or \n\
partially offloaded, an action source never exports the data again. When an action source is \n\
partially offloaded, the Status parameter of the source becomes siActionStatusPartiallyLoaded\n\
(see <a href=\"#!/url=./si_om/siAssetStatus.html\">siAssetStatus</a>).\n\
<br /><br />\n\
Note: This applies only to the <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a> action sources.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>PartialOffloadAction( [InputObjs], StartFrame, EndFrame, [Remember] );</pre>		</td>	</tr>\n\
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
	<tr>\n\
		<td class=\"name\">StartFrame		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
\n\
		The frame to start offloading the fcurve keys. If smaller than the AnimStart parameter \n\
		on the action, the AnimStart value is used instead.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">EndFrame		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
\n\
		The frame to end offloading the fcurve keys. If greater than the AnimEnd parameter on \n\
		the action, the AnimEnd value is used instead.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Remember		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
\n\
		If true, the range of frames is appended to the parameter OffloadedRanges of \n\
		the action, so when the scene is reloaded the partial offload will be processed. \n\
		Otherwise, it is only temporarily offloaded.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example shows how to partially offload an animation source.\n\
*/\n\
// ----------------------------------------------------------------------------------\n\
// \n\
// 	SETUP\n\
// Create an animation source of a sphere.\n\
NewScene( null, false );\n\
CreatePrim( \"Cone\", \"MeshSurface\", null, null );\n\
Translate( null, -7.85065649868519, 0.715575131336405, -7.15575131336405E-02, \n\
	siRelative, siView, siObj, siXYZ, null, null, null, null, null, null, null, null, null );\n\
SaveKey( \"cone.kine.local.posx,cone.kine.local.posy,cone.kine.local.posz\", 1, null, null );\n\
SetValue( \"PlayControl.Key\", 10, null );\n\
SetValue( \"PlayControl.Current\", 10, null);\n\
Translate(null, 4.19500728937374, 7.06630442194682, -0.706630442194682, \n\
	siRelative, siView, siObj, siXYZ, null, null, null, null, null, null, null, null, null );\n\
SaveKey( \"cone.kine.local.posx,cone.kine.local.posy,cone.kine.local.posz\", 10, null, null );\n\
SetValue( \"PlayControl.Key\", 20, null );\n\
SetValue( \"PlayControl.Current\", 20, null );\n\
Translate( null, 4.25493596493627, -7.84151081422792, 0.784151081422792, \n\
	siRelative, siView, siObj, siXYZ, null, null, null, null, null, null, null, null, null );\n\
SaveKey( \"cone.kine.local.posx,cone.kine.local.posy,cone.kine.local.posz\", 20, null, null );\n\
SetValue( \"PlayControl.Key\", 30, null );\n\
SetValue( \"PlayControl.Current\", 30, null );\n\
Translate( null, 4.1350786138113, 7.57317013997673, -0.757317013997673, \n\
	siRelative, siView, siObj, siXYZ, null, null, null, null, null, null, null, null, null );\n\
SaveKey( \"cone.kine.local.posx,cone.kine.local.posy,cone.kine.local.posz\", 30, null, null );\n\
SetValue( \"PlayControl.Key\", 40, null );\n\
SetValue( \"PlayControl.Current\", 40, null );\n\
Translate( null, 2.21736099581185, -7.48372324855972, 0.748372324855972, \n\
	siRelative, siView, siObj, siXYZ, null, null, null, null, null, null, null, null, null );\n\
SaveKey( \"cone.kine.local.posx,cone.kine.local.posy,cone.kine.local.posz\", 40, null, null );\n\
CreateModel( null, null, null );\n\
SelectObj( \"Model.Cone\", null, null );\n\
StoreAction( \"\", \"Model.Cone.kine.local.sclx,Model.Cone.kine.local.scly,\"\n\
	+ \"Model.Cone.kine.local.sclz,Model.Cone.kine.local.rotx,Model.Cone.kine.local.roty,\"\n\
	+ \"Model.Cone.kine.local.rotz,Model.Cone.kine.local.posx,Model.Cone.kine.local.posy,\"\n\
	+ \"Model.Cone.kine.local.posz,Model.Cone.kine.global.sclx,Model.Cone.kine.global.scly,\"\n\
	+ \"Model.Cone.kine.global.sclz,Model.Cone.kine.global.rotx,Model.Cone.kine.global.roty,\"\n\
	+ \"Model.Cone.kine.global.rotz,Model.Cone.kine.global.posx,Model.Cone.kine.global.posy,\"\n\
	+ \"Model.Cone.kine.global.posz\", 2, \"simplemove\", true, 1, 40, false, false );\n\
// Add a clip of the source in the mixer\n\
SelectObj( \"Model\", null, null );\n\
AddTrack( \"Model\", \"Model\", 0, null, null );\n\
AddClip( \"Model\", \"Sources.Animation.Model.simplemove\", null, \"Model.Mixer.Mixer_Anim_Track\", \n\
	1, null, null, null, null );\n\
SetValue( \"PlayControl.Key\", 20, null );\n\
SetValue( \"PlayControl.Current\", 20, null );\n\
// We need to set the external storage to external if we want to be able to offload the source\n\
SetValue( \"Sources.Animation.Model.simplemove.storage\", 3, null );\n\
var oAction = GetValue( \"Sources.Animation.Model.simplemove\" );\n\
// ----------------------------------------------------------------------------------\n\
// \n\
// 	OFFLOAD\n\
// Note that this partial offload has not been added to the OffloadedRanges parameter \n\
// of the source.\n\
PartialOffloadAction( \"Sources.Animation.Model.simplemove\", 10, 20, false );\n\
Application.LogMessage ( FindActionStatus(oAction.status.Value) );\n\
Application.LogMessage ( oAction.OffloadedRanges.Value );\n\
// ----------------------------------------------------------------------------------\n\
// \n\
// 	RELOAD\n\
// Reloading the action will dispose the temporary offloaded ranges\n\
oAction.Reload();\n\
PartialOffloadAction( \"Sources.Animation.Model.simplemove\", 12, 22, true );\n\
Application.LogMessage ( FindActionStatus(oAction.status.Value) );\n\
Application.LogMessage ( oAction.OffloadedRanges.Value );\n\
// ----------------------------------------------------------------------------------\n\
// \n\
// 	OUTPUT\n\
//INFO : The action source contains section that are offloaded.\n\
//INFO : \n\
//INFO : The action source contains section that are offloaded.\n\
//INFO : 12,22\n\
// ----------------------------------------------------------------------------------\n\
// \n\
// 	HELPER\n\
function FindActionStatus( in_Val ) \n\
{\n\
	var results = \"\";\n\
	switch ( in_Val ) {\n\
		case siActionStatusOffloaded :\n\
			results = \"The action source is offloaded on disk.\";\n\
			break;\n\
		case siActionStatusPartiallyLoaded :\n\
			results = \"The action source contains section that are offloaded.\";\n\
			break;\n\
		case siActionStatusLoaded :\n\
			results = \"The action source is loaded.\";\n\
			break;\n\
		default :\n\
			results = \"Unrecognized action status.\";\n\
	}\n\
	return results;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/OffloadAction.html\">OffloadAction</a> <a href=\"#!/url=./si_om/ActionSource.Offload.html\">ActionSource.Offload</a> <a href=\"#!/url=./si_om/ActionSource.PartialOffload.html\">ActionSource.PartialOffload</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";