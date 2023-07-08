var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SetMappingRule</title>\n\
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
            <h1>SetMappingRule</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SetMappingRule</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>Modifies a rule in a connection or value mapping template, or in a clip\'s local value map. <br /><br /> Note that you cannot change the left-hand side (the Items part) of a rule in a clip\'s value map.</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SetMappingRule( MappingTemplate, From, [To], [Index], [Active], [PoseOffset] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">MappingTemplate		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Mapping template or a clip value map. The value map of a clip is named \"<clipname>.actionclip\". 		</clipname></td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">From		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 The Map From part of a connection mapping rule, the Parameter part of a value mapping rule, or the Item part of a clip value mapping rule. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">To		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 The Map To part of a connection mapping rule, the Expression part of a value mapping rule, or the Expr part of a clip value mapping rule. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Index		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 Specifies the rule to modify. Rules are numbered starting at 1, but an index of 0 or 1 refers to the first rule. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0 (the first rule)			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Active		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 Sets the activeness of the rule. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
-1			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">-1					</td>\n\
					<td>Don\'t change the current activeness setting.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>Deactivate the rule					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>Activate the rule.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PoseOffset		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 Sets the pose offset activeness for the object. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
-1			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">-1					</td>\n\
					<td>Don\'t change the current pose offset setting.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>Deactivate the pose offset.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>Activate the pose offset.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' This example illustrates several mapping template commands.\n\
\' It creates an Action on a sphere, then uses a value mapping\n\
\' template to create an offset effect when this Action is instanced.\n\
\' Then it creates a connection mapping template so the sphere\n\
\' animation can be applied to a number of different objects (using a\n\
\' wildcard to do this).  Finally, the second clip (driving the cones)\n\
\' is accessed as a value map itself, and clip effects on it are\n\
\' created using SetMappingRule.\n\
NewScene , False\n\
\' Create some objects for our example.\n\
set oSphere = CreatePrim( \"Sphere\", \"MeshSurface\" )\n\
set oCone = CreatePrim( \"Cone\", \"MeshSurface\" )\n\
Duplicate oCone, 4\n\
posParams = \"/kine.local.posx,kine.local.posy,kine.local.posz\"\n\
\' Make an Action with the sphere moving diagonally.\n\
SetPositionKey oSphere, 1, -5, -3, 0\n\
SetPositionKey oSphere, 50, 5, 3, 0\n\
set oSource = StoreAction( , oSphere &amp; posParams, 2, \"Diagonal\", True, 1, 50 )\n\
\' Create a value map and add some rules to it to map the\n\
\' sphere animation to be negated in X position and offset\n\
\' in Y.  We use a big index to indicate the rule should\n\
\' be added at the end.\n\
CreateEmptyValueMap \"Scene_Root\", oValMap\n\
AddMappingRule oValMap, oSphere &amp; \".kine.local.posx\", \"(this)*-1\", 10000\n\
AddMappingRule oValMap, oSphere &amp; \".kine.local.posy\", \"(this)-5\", 10000\n\
\' Instantiate a clip which uses this value map to modify\n\
\' the sphere animation.\n\
set oClip = AddClip( \"Scene_Root\", oSource, , , 1, \"Sphere\", , oValMap )\n\
\' Create a connection map, and add a single rule to it\n\
\' that will map the sphere animation to all cones, using\n\
\' a wildcard.\n\
CreateEmptyConnectionMap \"Scene_Root\", oCnxMap\n\
AddMappingRule oCnxMap, oSphere, \"cone*\"\n\
\' Instantiate a clip which uses this connection map to\n\
\' connect the sphere source to all the cones.\n\
set oClip = AddClip( \"Scene_Root\", oSource, , , 1, \"Cones\", oCnxMap )\n\
\' Bonus part...  For fun we\'ll modify the value mapping of each\n\
\' item in the cone clip, treating it like it\'s a fixed-size value\n\
\' map (can\'t add new items to it).\n\
clip = oClip &amp; \".actionclip\"\n\
offsetAmt = 0\n\
n = GetNumMappingRules( clip )\n\
for i = 1 to n\n\
	GetMappingRule clip, i, param, expr, active\n\
	if right( param, 4 ) = \"posy\" then\n\
		SetMappingRule clip, param, \"(this)+time*\" &amp; offsetAmt, i, active\n\
		offsetAmt = offsetAmt + 1\n\
	end if\n\
next\n\
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
<div><p><a href=\"#!/url=./si_cmds/AddMappingRule.html\">AddMappingRule</a> <a href=\"#!/url=./si_cmds/CreateConnectionMap.html\">CreateConnectionMap</a> <a href=\"#!/url=./si_cmds/CreateValueMap.html\">CreateValueMap</a> <a href=\"#!/url=./si_cmds/DeleteMappingRule.html\">DeleteMappingRule</a> <a href=\"#!/url=./si_cmds/GetMappingRule.html\">GetMappingRule</a> <a href=\"#!/url=./si_cmds/GetNumMappingRules.html\">GetNumMappingRules</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";