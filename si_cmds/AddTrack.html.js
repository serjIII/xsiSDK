var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>AddTrack</title>\n\
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
            <h1>AddTrack</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">AddTrack</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Creates a track for the specified animation mixer. Tracks are the clip containers \n\
used to sequence clips in the animation <a href=\"#!/url=./si_om/Mixer.html\">Mixer</a>. There are five \n\
types of tracks in the mixer: animation, shape, audio, animation layer and cache.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = AddTrack( Model, [Compound], [Type], [Name], [InsertPosition] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns the <a href=\"#!/url=./si_om/Track.html\">Track</a> object.</p></div>\n\
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
 The model to add the track to. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Compound		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 The compound container (track owner) to add this track to. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Type		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 Type of mixer track to add. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Determine track type from context.			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>Animation track					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>Shape track					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">2					</td>\n\
					<td>Audio track					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">3					</td>\n\
					<td>Image track (not supported)					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">4					</td>\n\
					<td>Switching track (not supported)					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">5					</td>\n\
					<td>Animation Layer track					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">6					</td>\n\
					<td>Cache track					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">7					</td>\n\
					<td>Speech track					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">8					</td>\n\
					<td>Shot track					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Name of the new track. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">InsertPosition		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 Which track to insert this one on top of 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example builds a simple keyframed animation, puts it in an\n\
\' Action and instantiates it on the mixer, transitioning to a second\n\
\' (static) clip.\n\
\'\n\
posParams = \"/kine.local.posx,kine.local.posy,kine.local.posz\"\n\
\' Create the object for our example.\n\
set oSphere = CreatePrim( \"Sphere\", \"MeshSurface\" )\n\
\' Animate it and store an Action for the motion.\n\
SetPositionKey oSphere, 1, -5, -5, 0\n\
SetPositionKey oSphere, 30, 5, 5, 0\n\
set oSourceAnim1 = StoreAction( , oSphere &amp; posParams, 2, \"Diagonal\", True, 1, 30 )\n\
\' Store another source which is a static snapshot.\n\
Translate oSphere, -5, 5, 0, siAbsolute, siView, siObj, siXYZ\n\
set oSourceAnim2 = StoreAction( , oSphere &amp; posParams, 1, \"Static\", True, 1, 10 )\n\
\' Create a track for the clips.\n\
set oTrackAnim = AddTrack( oSphere, , 0, \"SimpleAnim\" )\n\
\' Instantiate the animation sources onto the track.\n\
set oClipAnim1 = AddClip( \"Scene_Root\", oSourceAnim1, , oTrackAnim, 1 )\n\
set oClipAnim2 = AddClip( \"Scene_Root\", oSourceAnim2, , oTrackAnim, 91 )\n\
\' Put a transition between the two clips.\n\
AddTransition oClipAnim1, oClipAnim2, 0\n\
\'==================================================\n\
\' Helper method to key an object somewhere at a given frame.\n\
\'==================================================\n\
sub SetPositionKey( in_oObj, in_frame, in_posX, in_posY, in_posZ )\n\
	Translate in_oObj, in_posX, in_posY, in_posZ, siAbsolute, siParent, siObj, siXYZ\n\
	SaveKey in_oObj &amp; posParams, in_frame\n\
end sub</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' This example demonstrates several mixer-related commands.  It\n\
\' makes a couple of shape keys and instantiates them on the mixer,\n\
\' transitioning between them.  Then it takes the shape animation,\n\
\' puts it into a compound clip and finally adds a bit more shape\n\
\' animation inside the compound.\n\
\' Create the object for our example.\n\
set oSphere = CreatePrim( \"Sphere\", \"MeshSurface\" )\n\
\' Store a couple of shape keys (we use the temporarily-applied bulge\n\
\' just to have an interesting shape for the second key.\n\
set oSourceShape1 = StoreShapeKey( oSphere, , siShapeLocalReferenceMode )\n\
set oBulge = ApplyOp( \"Bulge\", oSphere, 3, siPersistentOperation )\n\
set oSourceShape2 = StoreShapeKey( oSphere, , siShapeLocalReferenceMode )\n\
DeleteObj oBulge\n\
\' Create a temporary track to put the clips onto.\n\
set oTrackTemp = AddTrack( oSphere, , 1 )\n\
\' Instantiate the shape sources onto the track.\n\
set oClipShape1 = AddClip( \"Scene_Root\", oSourceShape1, , oTrackTemp, 1 )\n\
set oClipShape2 = AddClip( \"Scene_Root\", oSourceShape2, , oTrackTemp, 90 )\n\
\' Put a transition between the two clips.\n\
AddTransition oClipShape1, oClipShape2, 0\n\
\' Create a track for a shape compound, then put the two\n\
\' shape clips into it.\n\
set oTrackCpd = AddTrack( \"Scene_Root\", , 1, \"ForCompound\" )\n\
set oCompound = CreateCompound( \"Scene_Root\", oClipShape1 &amp; \",\" &amp; oClipShape2, _\n\
	, oTrackCpd, 1, \"MyCompound\" )\n\
\' Add a new track inside the shape compound, on which\n\
\' we will instantiate a couple more sources.  Note that\n\
\' we insert it before the other track in the compound,\n\
\' so it will appear first.\n\
set oTrackInsideCpd = AddTrack( \"Scene_Root\", oCompound, , \"Extras\", 0 )\n\
set oClipShape1 = AddClip( \"Scene_Root\", oSourceShape2, , oTrackInsideCpd, 30 )\n\
set oClipShape2 = AddClip( \"Scene_Root\", oSourceShape1, , oTrackInsideCpd, 50 )\n\
SetValue oClipShape2 &amp; \".actionclip.timectrl.scale\", 0.5\n\
SetDefaultWeight oClipShape1, siWeightGaussian, 0\n\
SetDefaultWeight oClipShape2, siWeightGaussian, 0\n\
\' Get rid of this temporary track...\n\
DeleteObj oTrackTemp</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";