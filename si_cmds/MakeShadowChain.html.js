var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MakeShadowChain</title>\n\
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
            <h1>MakeShadowChain</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">MakeShadowChain</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Traces a new shadow hierarchy (a chain or null hierarchy) on top of an existing chain. The shadow objects \n\
will be pose-constrained to the original objects.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oShadow = MakeShadowChain( Chain, ShadowParent, [SI3DStyleChain], [IconScale], [ShadowType], [ShadowCharacterSetName] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns a <a href=\"#!/url=./files/CDKShadow.htm\">Shadow</a> JScript object.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Chain		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
A collection of chain objects to trace. Must be in the same order as order defined by the <a href=\"#!/url=./si_cmds/GetSkeleton.html\">GetSkeleton</a> command.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ShadowParent		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The object to which the new shadow hierarchy will be parented.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SI3DStyleChain		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
True to draw a SI|3D chain; False to draw a standard Softimage one.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">IconScale		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
Icon scale of the skeleton.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
1.0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ShadowType		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
\n\
		The type of shadow tracing to be drawn. for convenience the numbers align with the UI options for the shadow type\n\
		on the default rig generators.  Box Shadows are not traced here, but are done as components because they need to make \n\
		assumptions about the volume of each component.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>Skeleton shadow rig					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>Null shadow rig					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ShadowCharacterSetName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The name of the shadow character set that should be used for this chain; it gets stored in a \n\
Custom PSet for use.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"\"			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This script creates an arm, then creates two shadow \n\
	chains over top of it. The first uses nulls the other\n\
	uses a chain.\n\
*/\n\
var guidecoll = new ActiveXObject(\"XSI.Collection\");\n\
guidecoll.Add( GetPrim(\"Null\", \"ShoulderGuide\") ); \n\
guidecoll.Add( GetPrim(\"Null\", \"ElbowGuide\") ); \n\
guidecoll.Add( GetPrim(\"Null\", \"HandGuide\") ); \n\
var lXfm = guidecoll(0).Kinematics.Global.Transform\n\
var lPos = XSIMath.CreateVector3();\n\
/*\n\
	Right Arm\n\
*/\n\
lXfm.SetTranslationFromValues(0,0,0);\n\
guidecoll(0).Kinematics.Global.Transform = lXfm;\n\
lXfm.SetTranslationFromValues(4,0,-2);\n\
guidecoll(1).Kinematics.Global.Transform = lXfm;\n\
lXfm.SetTranslationFromValues(8,0,0);\n\
guidecoll(2).Kinematics.Global.Transform = lXfm;\n\
var RArm = MakeArm(ActiveSceneRoot, guidecoll, \"R\",null, 0,0,0,null ,null, 0);\n\
/*\n\
	Add a chain shadow\n\
*/\n\
//NULL shadow\n\
var shadow = MakeShadowChain( GetSkeleton(RArm.Root), ActiveSceneRoot,0,1.0,1);\n\
//BONE shadow\n\
shadow = MakeShadowChain( GetSkeleton(RArm.Root), ActiveSceneRoot,0,2.0,0);\n\
DumpShadow( shadow );\n\
function DumpShadow( inShadow )\n\
{\n\
logmessage (\"Data in the returned shadow object:\");\n\
logmessage (\"-----------------------------------\");\n\
	logmessage (\"ShadowParent : \" + inShadow.Root);\n\
logmessage (\"SI3DStyle    : \" + inShadow.Eff);\n\
logmessage (\"#ShadowObject: \" + inShadow.Shadows.count);\n\
	for(var b=0;b&lt;inShadow.Shadows.count;b++)\n\
	{logmessage (\" ShadowObj\" +  b + \"  : \" + inShadow.Shadows(b));}\n\
	logmessage (\"#ShadowEnds  : \" + inShadow.ShadowEnds.count);\n\
	for(var b=0;b&lt;inShadow.ShadowEnds.count;b++)\n\
	{logmessage (\" ShadowEnd\" + b + \"  : \" + inShadow.ShadowEnds(b));}\n\
	logmessage (\"Scale        : \" + inShadow.Scale);\n\
logmessage (\"Hidden       : \" + inShadow.Hidden);\n\
logmessage (\"Envelope     : \" + inShadow.Envelope);\n\
logmessage (\"ShadowModel  : \" + inShadow.ShadowModel);\n\
}\n\
//results from running this script:\n\
//INFO : \"Data in the returned shadow object:\"\n\
//INFO : \"-----------------------------------\"\n\
//INFO : \"ShadowParent : RRoot1\"\n\
//INFO : \"SI3DStyle    : undefined\"\n\
//INFO : \"#ShadowObject: 4\"\n\
//INFO : \" ShadowObj0  : RRoot1\"\n\
//INFO : \" ShadowObj1  : RBicep1\"\n\
//INFO : \" ShadowObj2  : RForearm1\"\n\
//INFO : \" ShadowObj3  : eff\"\n\
//INFO : \"#ShadowEnds  : 1\"\n\
//INFO : \" ShadowEnd0  : RRoot1\"\n\
//INFO : \"Scale        : 1\"\n\
//INFO : \"Hidden       : RRoot1\"\n\
//INFO : \"Envelope     : RBicep1,RForearm1\"\n\
//INFO : \"ShadowModel  : Scene_Root\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/MakeShadowSpine.html\">MakeShadowSpine</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";