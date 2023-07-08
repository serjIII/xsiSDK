var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>FindPeriods</title>\n\
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
            <h1>FindPeriods</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">FindPeriods</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.5</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Finds the periods of animated parameters. If the first algorithm is \n\
chosen, one period is computed for the overall orientation of the input objects. \n\
This period corresponds to the minimal time offset to apply to the input objects \n\
so as to get the same overall orientation as that of the start time. In this case, \n\
the input objects must be animated in rotation for FindPeriods to work. <br /><br />\n\
If the second algorithm is chosen, one period is computed for each input object. \n\
These periods correspond to the minimal time offsets to apply to each input objects \n\
so they take the same value as that at the start time. In this case the input objects \n\
must be animated parameters for FindPeriods to work. <br /><br />\n\
To use this command, you must select the objects/animated parameters for which you \n\
want to find periods. The animation of these objects will then be analyzed between \n\
the Start and End Frame to compute the periods.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = FindPeriods( InputObjs, [Algorithm], StartFrame, EndFrame, Minimum Period Length );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>\n\
Returns the periods of animated parameters. If no period is found in the range defined by both \n\
the minimum length and the animation length (End Frame - Start Frame), FindPeriods returns 0. \n\
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
<a href=\"#!/url=./files/listexpr.htm\">Objects</a> to use to find a cyle.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selected objects			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Algorithm		</td>\n\
		<td><a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
Algorithm to choose from			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
1			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>Works for rotations only.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>Works for any animated parameter.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">StartFrame		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Frame at which the periods suposedly starts.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">EndFrame		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Upper frame boundary where to look for a period.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Minimum Period Length		</td>\n\
		<td><a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
 Minimum length of the periods looked for (common estimate).			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
1			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' This example creates a simple skeleton and demonstrates using FindPeriods to\n\
\' detect cycles in its animation.  In the first case, we have a simple rotation\n\
\' animation.  In the second, we show cycle detection on an arbitrary parameter\n\
\' (we chose bone length).\n\
NewScene , False\n\
\' Create an object for us to use for this example.\n\
Create2DSkeleton 0, 0, 0, 0, 0, 3, 0, 1, 0, 0, oBone\n\
\'\n\
\' 1) Create an animation in which a cycle occurs for the rotation of a bone.\n\
\'\n\
SaveKey oBone &amp; \"/kine.local.rotx,kine.local.roty,kine.local.rotz\", 1\n\
Rotate oBone, 0, 0, 145, siRelative, siLocal, siObj, siXYZ\n\
SaveKey oBone &amp; \"/kine.local.rotx,kine.local.roty,kine.local.rotz\", 10\n\
Rotate oBone, 0, 0, 215, siRelative, siLocal, siObj, siXYZ\n\
SaveKey oBone &amp; \"/kine.local.rotx,kine.local.roty,kine.local.rotz\", 23\n\
Rotate oBone, 0, 0, 50, siRelative, siLocal, siObj, siXYZ\n\
SaveKey oBone &amp; \"/kine.local.rotx,kine.local.roty,kine.local.rotz\", 30\n\
\' Store the animation as an action and instantiate a clip in the mixer.\n\
set oAction = StoreAction( , oBone &amp; \"/kine.local.rotx,kine.local.roty,kine.local.rotz\", _\n\
				2, \"BoneRot\", True, 1, 30)\n\
set oClip = AddClip( \"Scene_Root\", oAction, , , 30 )\n\
\' Find the period of bone rotation (algorithm 0) from start of clip.\n\
clipStart = GetValue( oClip &amp; \".actionclip.timectrl.resin\" )\n\
clipEnd = GetValue( oClip &amp; \".actionclip.timectrl.resout\" )\n\
Periods = FindPeriods( oBone, 0, clipStart, clipEnd, 1 )\n\
LogMessage \"Period for bone rotation: \" &amp; Periods(0) &amp; \" frames\"\n\
\'\n\
\' 2) Animate the bone length to be periodic.\n\
\'\n\
SaveKey oBone &amp; \".bone.length\",  1, 3\n\
SaveKey oBone &amp; \".bone.length\",  5, 4\n\
SaveKey oBone &amp; \".bone.length\",  9, 3\n\
SaveKey oBone &amp; \".bone.length\", 13, 4\n\
SaveKey oBone &amp; \".bone.length\", 17, 3\n\
SaveKey oBone &amp; \".bone.length\", 21, 4\n\
SaveKey oBone &amp; \".bone.length\", 25, 3\n\
\' Store the animation as an action and instantiate a clip in the mixer.\n\
set oAction = StoreAction( , oBone &amp; \".bone.length\", 2, \"BoneLength\", True, 1, 24)\n\
set oClip = AddClip( \"Scene_Root\", oAction, , , 1 )\n\
\' Find the period of bone length (algorithm 1) from start of clip.\n\
clipStart = GetValue( oClip &amp; \".actionclip.timectrl.resin\" )\n\
clipEnd = GetValue( oClip &amp; \".actionclip.timectrl.resout\" )\n\
Periods = FindPeriods(\"bone.bone.length\", 1, clipStart, clipEnd, 1)\n\
LogMessage \"Period for bone length: \" &amp; Periods(0) &amp; \" frames\"\n\
\' Compute the number of cycles of the animation.\n\
NumPeriods = ((clipEnd - clipStart) / Periods(0))\n\
LogMessage \"Number of cycles: \" &amp; NumPeriods\n\
\' Running this script should log the following:\n\
\' ---------------------------------------------\n\
\'INFO : \"Period for bone rotation: 22 frames\"\n\
\' &lt;bunch of logged commands, and then:&gt;\n\
\'INFO : \"Period for bone length: 8 frames\"\n\
\'INFO : \"Number of cycles: 3\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";