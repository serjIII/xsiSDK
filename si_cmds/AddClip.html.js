var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>AddClip</title>\n\
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
            <h1>AddClip</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">AddClip</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Creates a <a href=\"#!/url=./si_om/Clip.html\">Clip</a> and adds it to the <a href=\"#!/url=./si_om/Mixer.html\">Mixer</a> of the specified \n\
<a href=\"#!/url=./si_om/Model.html\">Model</a>. A clip is an instance of an <a href=\"#!/url=./si_om/ActionSource.html\">ActionSource</a> (action\n\
or shape animation) or an audio Source object. \n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = AddClip( Model, Source, [Compound], [Track], [Time], [Name], [ConnectionMappingTemplate], [ValueMappingTemplate], [ShareParent], [IgnoreMissingConnections] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns a <a href=\"#!/url=./si_om/Clip.html\">Clip</a> object.</p></div>\n\
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
 Model to add the clip to. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Source		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Source for the clip.  Typically, a \"source\" is an action. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Compound		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Compound container (track owner) to add this clip to. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Track		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Track to add this clip to. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Time		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Frame at which to add the clip. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current frame			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Name for the new clip. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ConnectionMappingTemplate		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 The connection mapping template to use for the new clip. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
The active connection mapping template.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ValueMappingTemplate		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 The value mapping template to use for the new clip. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
The active value mapping template			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ShareParent		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 Share the source (when coming from another model). 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
True			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">IgnoreMissingConnections		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 If true, ignores missing connections by skipping the connection resolution dialog. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example creates a simple Action and instantiates it\n\
\' on two different objects using a connection mapping template.\n\
\' It shows very basic mixer scripting -- creating Actions, tracks\n\
\' and clips, as well as a simple mapping template.\n\
\'\n\
\' Create objects for our example.\n\
set oSphere = CreatePrim( \"Sphere\", \"MeshSurface\" )\n\
set oCone = CreatePrim( \"Cone\", \"MeshSurface\" )\n\
posParams = \"/kine.local.posx,kine.local.posy,kine.local.posz\"\n\
\' Make an Action with it moving diagonally over 20 frames.\n\
SetPositionKey oSphere, 1, -5, -5, 0\n\
SetPositionKey oSphere, 20, 5, 5, 0\n\
set oSource = StoreAction( , oSphere &amp; posParams, 2, \"Diagonal\", True, 1, 20 )\n\
\' Create a track and instantiate the Action onto it, starting at frame 10.\n\
set oTrack = AddTrack( \"Scene_Root\", , 0 )\n\
set oClip = AddClip( \"Scene_Root\", oSource, , oTrack, 10 )\n\
\' Make the clip play with three bounce cycles.\n\
SetValue oClip &amp; \".actionclip.timectrl.extrapaft_type\", 3\n\
SetValue oClip &amp; \".actionclip.timectrl.extrapaft_nbbounces\", 3\n\
\' Now create a connection mapping template so that the same\n\
\' Action source can be applied to the cone.\n\
CreateConnectionMap oCone, oSphere, oCnxMap\n\
\' Use the connection map to add another clip, so it will\n\
\' drive the cone instead.  We don\'t specify a track so it\n\
\' will create a new one for the clip.\n\
set oClip = AddClip( \"Scene_Root\", oSource, , , 1, \"Slow\", oCnxMap )\n\
\' Slow the cone\'s clip to play at one-quarter speed.\n\
SetValue oClip &amp; \".actionclip.timectrl.scale\", 1/4\n\
\'==================================================\n\
\' Helper method to key an object somewhere at a given frame.\n\
\'==================================================\n\
sub SetPositionKey( in_oObj, in_frame, in_posX, in_posY, in_posZ )\n\
	Translate in_oObj, in_posX, in_posY, in_posZ, siAbsolute, siParent, siObj, siXYZ\n\
	SaveKey in_oObj &amp; posParams, in_frame\n\
end sub</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/CreateConnectionMap.html\">CreateConnectionMap</a> <a href=\"#!/url=./si_cmds/CreateValueMap.html\">CreateValueMap</a> <a href=\"#!/url=./si_cmds/StoreAction.html\">StoreAction</a> <a href=\"#!/url=./si_om/Clip.html\">Clip</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";