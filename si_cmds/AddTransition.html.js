var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>AddTransition</title>\n\
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
            <h1>AddTransition</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">AddTransition</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Creates a transition between two clips. A transition curve is associated with \n\
this transition (the default curve is linear, but this can be edited after creation).\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = AddTransition( [From], [To], [Type], [Name] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns the transition (a <a href=\"#!/url=./si_om/Transition.html\">Transition</a> object).</p></div>\n\
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
 The target clip to which to transition.					<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection, if empty: pick session			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Type		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 The type of transition to create.						<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>Standard transition.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>Cardinal transition.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">2					</td>\n\
					<td>Bridge   transition.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Name of the transition. 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' This example creates a simple 2-bone skeleton and puts it in a model.\n\
\' Then it duplicates the model so we can compare Standard versus Cardinal\n\
\' transitions.  Next it makes three poses for the first model.  Finally,\n\
\' it applies these source clips onto both models and uses Standard\n\
\' transitions for the first model and Cardinals for the second.  Cardinal\n\
\' transitions require at least four consecutive clips in a row, and they\n\
\' give a smoother interpolation than Standard.  It ends by plotting the\n\
\' effector position to a curve, to illustrate the difference.\n\
\' Create the skeleton for our example.\n\
set oSkelRoot = Create2DSkeleton( 0, 4, 0, 0, 0, 0, , , , , oBone1, oEff )\n\
oBone2 = AppendBone( oEff, 4, 0, 0 )\n\
\' Put the skeleton in its own model, pretend it\'s a \"character\".\n\
CreateModel oSkelRoot, \"Standard\", , oModel\n\
\' Because AppendBone just returns a string, not the object,\n\
\' we prepend the model name onto the front (now that it\'s inside one).\n\
oBone2 = oModel &amp; \".\" &amp; oBone2\n\
\' Duplicate the model in Branch mode (\"B:\" indicates branch), rename\n\
\' the new model \"Cardinal\" (the first model is called \"Standard\").\n\
set oOtherModel = Duplicate( \"B:\" &amp; oModel, 1 )\n\
SetValue oOtherModel &amp; \".name\", \"Cardinal\"\n\
\' The model is the first member of the collection returned by Duplicate.\n\
oOtherModel = oOtherModel(0)\n\
\' Take a few \"snapshot\" poses.  For this example, we translate the\n\
\' effector (IK), but capture the values of the bone rotations (FK)\n\
\' for later use in the mixer.\n\
rotParams = \"/kine.local.rotx,kine.local.roty,kine.local.rotz\"\n\
paramStr = oBone1 &amp; \",\" &amp; oBone2 &amp; rotParams\n\
dim oPoses(5)\n\
posCoords = Array( Array(4,0,0), Array(0,2,0), Array(-1,-3,0), _\n\
			Array(0,-3.5,0), Array(1,-1,0), Array(4,0,0) )\n\
for i = 0 to 5\n\
	SnapshotPose oModel, oEff, oPoses(i), _\n\
			posCoords(i)(0), posCoords(i)(1), posCoords(i)(2), paramStr\n\
next\n\
\' Create tracks for the clips (one track in each model).\n\
dim oTracks(1), oClips(5,1)\n\
set oTracks(0) = AddTrack( oModel, , 0 )\n\
set oTracks(1) = AddTrack( oOtherModel, , 0 )\n\
\' Now go through and instantiate the sources into single-frame clips on\n\
\' the two mixers.  For the first mixer we will add standard transitions\n\
\' between each pair of consecutive clips.  For the second one, we\n\
\' will add Cardinal transitions.\n\
for i = 0 to 5\n\
	set oClips(i,0) = AddClip( oModel, oPoses((i)), , oTracks(0), i * 19 + 1 )\n\
	set oClips(i,1) = AddClip( oOtherModel, oPoses((i)), , oTracks(1), i * 19 + 1 )\n\
	if i &gt; 0 then\n\
		AddTransition oClips(i-1,0), oClips(i,0), 0	\' Standard\n\
		AddTransition oClips(i-1,1), oClips(i,1), 1	\' Cardinal\n\
	end if\n\
next\n\
\' Just offset the two models so we can see them separately.\n\
SetValue oModel &amp; \".kine.local.posx\", -5\n\
SetValue oOtherModel &amp; \".kine.local.posx\", 5\n\
\' Get the second effector\'s full name by prepending the\n\
\' second model\'s name to the first effector\'s \"simple\" name.\n\
oEff1 = oOtherModel &amp; \".\" &amp; oEff.name\n\
\' Finally, plot the effector positions to compare the paths.\n\
PlotCurve oEff &amp; \",\" &amp; oEff1, , 1, 96, 1\n\
\'==================================================\n\
\' Helper method to create a snapshot Action for the chain.\n\
\'==================================================\n\
sub SnapshotPose( in_oModel, in_oEff, io_oPose, in_X, in_Y,in_Z, in_paramStr )\n\
	Translate in_oEff, in_X, in_Y, in_Z, siAbsolute, siView, siObj, siXYZ\n\
	Refresh \' needed because StoreAction just looks at current values.\n\
	set io_oPose = StoreAction( in_oModel, in_paramStr, 1, , True, 1, 1 )\n\
end sub</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/AddBridgeTransition.html\">AddBridgeTransition</a> <a href=\"#!/url=./si_om/Transition.html\">Transition</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";