var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MakeFoot</title>\n\
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
            <h1>MakeFoot</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">MakeFoot</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Creates a rigged three bone foot. The foot rig is created from a collection of 6 or more guide objects\n\
(see the GuideObjectCollection parameter below for guide requirements). <br /><br />\n\
The rig created by MakeFoot contains a foot control and roll control. It can optionally create a \n\
distribution control, typically used for the dog leg IK distribution. This IK distribution control \n\
is created by default by <a href=\"#!/url=./si_cmds/MakeDogLeg.html\">MakeDogLeg</a>. <br /><br />\n\
Optionally a shadow rig can be attached to the foot. Shadow objects are created for each chain element \n\
in the foot, and shadow bones are pose-constrained to the acutal foot bones. Shadow rigs can be used to \n\
plot animation off of a rig. \n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oFoot = MakeFoot( Model, Parent, [ShortPrefix], [FullPrefix], GuideObjectCollection, Sliders, [Extension], [ShadowType], [ShadowParent], [ThreeBoneToe] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns a <a href=\"#!/url=./files/CDKFoot.htm\">Foot</a> JScript object.</p></div>\n\
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
The model that the foot will belong to.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Parent		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The parent of the foot controls		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ShortPrefix		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		The short name (typically \"L\" or \"R\") to be used in the new rig. If the prefix \n\
		is not given a dialog box appears prompting for one.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">FullPrefix		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		The long name (typically \"Left\" or \"Right\") to be used in the new rig. If the prefix \n\
		is not given a dialog box appears prompting for one.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">GuideObjectCollection		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		A list of at least 6 objects to search for when making the foot: Middle Pivot; Right Pivot; Left Pivot; and at \n\
		least 3 objects running from the start of the foot to the end of the toe (this means the foot must be at least \n\
		a two bone chain). Extra items are added onto the length of the foot.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Sliders		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
A slider PPG for foot parameters.  If none is supplied a slider page is created.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Extension		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
Whether or not an Extension object is made for controlling dog leg IK distribution. If true ,an extension icon is created.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ShadowType		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
The type of shadow rig to attach to the foot. Shadow rigs can be used to transfer or remap animation.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>No shadow					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>SI|3D Skeleton shadow rig					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">2					</td>\n\
					<td>XSI Skeleton shadow rig					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">3					</td>\n\
					<td>Null shadow rig					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">4					</td>\n\
					<td>Box shadow rig					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ShadowParent		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Parent of the shadow rig hiearchy.  If empty, no shadow rig is generated.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ThreeBoneToe		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
True to create three-bone toes.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
True			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This script creates a three bone foot. \n\
*/\n\
var guidecoll = new ActiveXObject(\"XSI.Collection\");\n\
guidecoll.Add( GetPrim(\"Null\", \"Guide_MiddlePivot\") ); \n\
guidecoll.Add( GetPrim(\"Null\", \"Guide_RightPivot\") ); \n\
guidecoll.Add( GetPrim(\"Null\", \"Guide_LeftPivot\") ); \n\
guidecoll.Add( GetPrim(\"Null\", \"Guide_Ankle\") ); \n\
guidecoll.Add( GetPrim(\"Null\", \"Guide_Foot\") ); \n\
guidecoll.Add( GetPrim(\"Null\", \"Guide_Toe\") ); \n\
guidecoll.Add( GetPrim(\"Null\", \"Guide_Toe2\") ); \n\
var lXfm = guidecoll(0).Kinematics.Global.Transform\n\
var lNull = GetPrim(\"Null\", \"Feet\");\n\
/*\n\
	Left Leg\n\
*/\n\
//Pivots\n\
lXfm.SetTranslationFromValues(2,0,-0.5);\n\
guidecoll(0).Kinematics.Global.Transform = lXfm;\n\
lXfm.SetTranslationFromValues(2.5,0,-0.5);\n\
guidecoll(1).Kinematics.Global.Transform = lXfm;\n\
lXfm.SetTranslationFromValues(1.5,0,-0.5);\n\
guidecoll(2).Kinematics.Global.Transform = lXfm;\n\
//Foot\n\
lXfm.SetTranslationFromValues(2,4 ,0.25);\n\
guidecoll(3).Kinematics.Global.Transform = lXfm;\n\
lXfm.SetTranslationFromValues(2,1,2);\n\
guidecoll(4).Kinematics.Global.Transform = lXfm;\n\
lXfm.SetTranslationFromValues(2,0.25,5);\n\
guidecoll(5).Kinematics.Global.Transform = lXfm;\n\
lXfm.SetTranslationFromValues(2,0,8);\n\
guidecoll(6).Kinematics.Global.Transform = lXfm;\n\
var threeFoot = MakeFoot(lNull, GetPrim(\"Null\", \"ThreeBone\"), \"ABC\", \"ABCDE\", guidecoll, null, null, null, null, true);\n\
var twoFoot = MakeFoot(lNull, GetPrim(\"Null\", \"TwoBone\"), \"ABC\", \"ABCDE\", guidecoll, null, null, null, null, false);\n\
SelectObj(\"ThreeBone\", \"BRANCH\", null);\n\
Translate(null, -8.93099040438492, 0, 0, siRelative, siLocal, siObj, siXYZ, null, null, null, null, null, null, null, null, null, 0, null);\n\
DumpFoot(twoFoot);\n\
DumpFoot(threeFoot);\n\
function DumpFoot(inFoot)\n\
{\n\
	logmessage (\"------------------------\");\n\
	logmessage (\"Data in the returned foot [\" + inFoot.Parent + \"]:\");\n\
	logmessage (\"------------------------\");\n\
	logmessage (\"Root        : \" + inFoot.Root);\n\
	logmessage (\"Parent      : \" + inFoot.Parent);\n\
	logmessage (\"BaseGuide   : \" + inFoot.BaseGuide);\n\
	logmessage (\"FootGuides  : \" + inFoot.FootGuides);\n\
	logmessage (\"Foot        : \" + inFoot.Foot);\n\
	logmessage (\"Roll        : \" + inFoot.Roll);\n\
	logmessage (\"Hidden      : \" + inFoot.Hidden);\n\
	logmessage (\"Envelope    : \" + inFoot.Envelope);\n\
	logmessage (\"Shadows     : \" + inFoot.Shadows);\n\
	logmessage (\"ShadowsEnds : \" + inFoot.ShadowEnds);\n\
	logmessage (\"Shadows     : \" + inFoot.Shadows);\n\
}\n\
//results from running this script:\n\
//INFO : Data in the returned foot:\n\
//INFO : ------------------------\n\
//INFO : Root        : ABCFootRoot\n\
//INFO : Parent      : Parent\n\
//INFO : BaseGuide   : ABCFootGuide4\n\
//INFO : FootGuides  : ABCFootGuide1,ABCFootGuide2,ABCFootGuide3,ABCFootGuide4\n\
//INFO : Foot        : ABCDEFoot\n\
//INFO : Roll        : ABCDERoll\n\
//INFO : Hidden      : ABCFootRoot,ABCFootEff,ABCFootBind1,ABCFootBind2,ABCFootBind3,ABCPivotBase,ABCPlacePivot,ABCPivotLeft,ABCPivotRight,ABCFootGuide1,ABCFootGuide2,ABCFootGuide3,ABCFootGuide4,ABCFootUpV1,ABCFootUpV2,ABCFootUpV3\n\
//INFO : Envelope    : ABCFootBone1,ABCFootBone2,ABCFootBone3\n\
//INFO : ShadowsStart: undefined\n\
//INFO : ShadowsEnds : undefined\n\
//INFO : Shadows     : undefined</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/MakeLeg.html\">MakeLeg</a> <a href=\"#!/url=./si_cmds/MakeDogLeg.html\">MakeDogLeg</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";