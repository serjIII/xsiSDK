var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>AddBridgeTransition</title>\n\
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
            <h1>AddBridgeTransition</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">AddBridgeTransition</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.5</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>Creates a bridge transition between two periodic animation clips. Both clips have to overlap. The \"From\" clip has to start before the \"To\" clip. The \"To\" clip has to start before the \"From\" clip ends. The periods of both clips are assumed to be the duration of the clips (i.e. time Clip out - Clip in). </p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = AddBridgeTransition( [From], [To], [Name] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns the <a href=\"#!/url=./si_om/Transition.html\">Transition</a>.</p></div>\n\
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
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 The source clip from which to transition.				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection, if empty: pick session			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">To		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 The target clip to which to transition.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection, if empty: pick session			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Name of the transition.  Currently not used.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' This example builds a couple of Actions, one which has\n\
\' the sphere moving slowly on a three-sided path, the other\n\
\' which has the sphere moving quickly on a four-sided path.\n\
\' It then uses a bridge transition to perform a correct\n\
\' transition between these two looped motions (which have\n\
\' different periods). \n\
slowPeriod = 30		\' period of the slow looping Action\n\
fastPeriod = 12		\' period of the fast looping Action\n\
preFade = 60		\' approx time to cycle before starting transition\n\
crossFade = 100		\' approx desired duration of transition\n\
posParams = \"/kine.local.posx,kine.local.posy,kine.local.posz\"\n\
\' Create an object for our example.\n\
set oObj = CreatePrim( \"Sphere\", \"MeshSurface\" )\n\
\' Make an Action with it moving slowly in a wide (three-sided) loop.\n\
BuildLoop oObj, slowPeriod, 15, false\n\
set oSlowSource = StoreAction( , oObj &amp; posParams, 2, \"Slow\", True, _\n\
				0, slowPeriod - 1 )\n\
\' Make an Action with it moving quickly in a tight (four-sided) loop.\n\
BuildLoop oObj, fastPeriod, 3, true\n\
set oFastSource = StoreAction( , oObj &amp; posParams, 2, \"Fast\", True, _\n\
				0, fastPeriod - 1 )\n\
\' Instantiate the Actions on the mixer -- cycled,\n\
\' overlapped and ready for the Bridge Transition.\n\
set oSlowClip = AddClip( \"Scene_Root\", oSlowSource, , , 1 )\n\
set oFastClip = AddClip( \"Scene_Root\", oFastSource, , , _\n\
				round( preFade / slowPeriod ) * slowPeriod + 1 )\n\
overlapSlowCycles = round( ( crossFade + preFade - slowPeriod ) / slowPeriod )\n\
SetValue oSlowClip &amp; \".actionclip.timectrl.extrapaft_type\", 2\n\
SetValue oSlowClip &amp; \".actionclip.timectrl.extrapaft_nbcycles\", overlapSlowCycles\n\
SetValue oFastClip &amp; \".actionclip.timectrl.extrapaft_type\", 2\n\
SetValue oFastClip &amp; \".actionclip.timectrl.extrapaft_nbcycles\", _\n\
				round( overlapSlowCycles * slowPeriod / fastPeriod ) + 1\n\
\' Apply the Bridge Transition, which will match the\n\
\' frequency of the periodic motions.  Compare it to\n\
\' a regular transition, where the motions tend to\n\
\' cancel each other out if they are at different frequencies.\n\
AddBridgeTransition oSlowClip, oFastClip\n\
\' Set a suitable timeline start/end for playback of this example.\n\
SetValue \"PlayControl.In\", 1\n\
SetValue \"PlayControl.Out\", GetValue( oFastClip &amp; \".actionclip.timectrl.resout\" )\n\
\'==================================================\n\
\' Helper method to create the looping paths (three- or four-sided).\n\
\'==================================================\n\
sub BuildLoop( in_oObj, in_period, in_size, in_bFourSided )\n\
	SetPositionKey in_oObj, 0,				-0.5 * in_size, -0.5 * in_size, 0\n\
	if in_bFourSided then\n\
		SetPositionKey in_oObj, in_period / 4,	0.5 * in_size, -0.5 * in_size, 0\n\
		SetPositionKey in_oObj, in_period / 2,	0.5 * in_size, 0.5 * in_size, 0\n\
		SetPositionKey in_oObj, 3 * in_period / 4,	-0.5 * in_size, 0.5 * in_size, 0\n\
	else\n\
		SetPositionKey in_oObj, in_period / 3,	0.5 * in_size, -0.5 * in_size, 0\n\
		SetPositionKey in_oObj, 2 * in_period / 3,	0, 0.5 * in_size, 0\n\
	end if\n\
	SetPositionKey in_oObj, in_period,			-0.5 * in_size, -0.5 * in_size, 0\n\
end sub\n\
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
<div><p><a href=\"#!/url=./si_cmds/AddTransition.html\">AddTransition</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";