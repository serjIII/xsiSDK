var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MakeDogLeg</title>\n\
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
            <h1>MakeDogLeg</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">MakeDogLeg</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Creates a three-bone leg with an and up-vector control object, and a rigged three bone foot \n\
(see <a href=\"#!/url=./si_cmds/MakeFoot.html\">MakeFoot</a>). The leg and foot bones are created from a collection of \n\
9 or more guide objects (see the GuideObjectCollection parameter below for guide requirements).<br /><br />\n\
MakeDogLeg can optionally add roll divisions to the thigh. Roll divisions are used to distribute \n\
the roll difference between adjacent bones over the length of a bone. When used as deformers on \n\
an envelope they evenly distribute twist along the length of a bone giving a more natural skin \n\
deformation. Roll divisions can also be added separately using the <a href=\"#!/url=./si_cmds/MakeBicepRoll.html\">MakeBicepRoll</a> command.<br /><br />\n\
Optionally a shadow rig can be attached to the leg. Shadow objects are created for each chain element in the \n\
leg, and shadow bones are pose constrained to the actual leg bones. Shadow rigs can be used to plot animation \n\
off of a rig. \n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oDogLeg = MakeDogLeg( Model, Parent, FootParent, GuideObjectCollection, [ShortPrefix], [FullPrefix], Sliders, [NbThighDivisions], [ShadowType], [ShadowParent] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns a <a href=\"#!/url=./files/CDKDogLeg.htm\">DogLeg</a> JScript object.</p></div>\n\
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
The model that the dog leg will belong to.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Parent		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The parent of the dog leg root.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">FootParent		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The parent of the dog leg\'s foot controls		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">GuideObjectCollection		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		A list of at least 9 objects to search for when making the leg: Femur; Tibia; Metarsal; \n\
		Middle Pivot; Right Pivot; Left Pivot; and at least 3 objects running from the start of \n\
		the foot to the end of the toe (this means the foot must be at least a two bone chain). \n\
		Extra items are added onto the length of the foot.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ShortPrefix		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		The short name (typically \"L\" or \"R\") to be used in the new rig. If the prefix is \n\
		not given a dialog box appears prompting for one.\n\
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
		<td class=\"name\">Sliders		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
A slider PPG for dog leg parameters.  If none is supplied a slider page is created.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">NbThighDivisions		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
The number of roll divisions on the upper leg. If the value is zero no roll is created.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
3			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ShadowType		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
The type of shadow rig to attach to the dog leg. Shadow rigs can be used to transfer or remap animation.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
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
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This script creates a dog leg using a collection\n\
	of nulls as the guide objects. \n\
*/\n\
var guidecoll = new ActiveXObject(\"XSI.Collection\");\n\
guidecoll.Add( GetPrim(\"Null\", \"Guide_Femur\") ); \n\
guidecoll.Add( GetPrim(\"Null\", \"Guide_Tibia\") ); \n\
guidecoll.Add( GetPrim(\"Null\", \"Guide_Metarsal\") ); \n\
guidecoll.Add( GetPrim(\"Null\", \"Guide_MiddlePivot\") ); \n\
guidecoll.Add( GetPrim(\"Null\", \"Guide_RightPivot\") ); \n\
guidecoll.Add( GetPrim(\"Null\", \"Guide_LeftPivot\") ); \n\
guidecoll.Add( GetPrim(\"Null\", \"Guide_Ankle\") ); \n\
guidecoll.Add( GetPrim(\"Null\", \"Guide_Foot\") ); \n\
guidecoll.Add( GetPrim(\"Null\", \"Guide_Toe\") ); \n\
var lXfm = guidecoll(0).Kinematics.Global.Transform\n\
var lNull = GetPrim(\"Null\", \"Legs\");\n\
/*\n\
	Left Leg\n\
*/\n\
//Leg\n\
lXfm.SetTranslationFromValues(1,11,-0.5);\n\
guidecoll(0).Kinematics.Global.Transform = lXfm;\n\
lXfm.SetTranslationFromValues(1.5,7.5,0.5);\n\
guidecoll(1).Kinematics.Global.Transform = lXfm;\n\
lXfm.SetTranslationFromValues(2,4,-1);\n\
guidecoll(2).Kinematics.Global.Transform = lXfm;\n\
//Pivots\n\
lXfm.SetTranslationFromValues(2,0,-0.5);\n\
guidecoll(3).Kinematics.Global.Transform = lXfm;\n\
lXfm.SetTranslationFromValues(2.5,0,-0.5);\n\
guidecoll(4).Kinematics.Global.Transform = lXfm;\n\
lXfm.SetTranslationFromValues(1.5,0,-0.5);\n\
guidecoll(5).Kinematics.Global.Transform = lXfm;\n\
//Foot\n\
lXfm.SetTranslationFromValues(2,1,0.25);\n\
guidecoll(6).Kinematics.Global.Transform = lXfm;\n\
lXfm.SetTranslationFromValues(2,0.5,1);\n\
guidecoll(7).Kinematics.Global.Transform = lXfm;\n\
lXfm.SetTranslationFromValues(2,0,2);\n\
guidecoll(8).Kinematics.Global.Transform = lXfm;\n\
var LLeg= MakeDogLeg(lNull,\n\
			GetPrim(\"Null\", \"LLegParent\"),\n\
			GetPrim(\"Null\", \"LFootParent\"),\n\
			guidecoll, \"L\", \"Left\" );\n\
DumpLeg(LLeg);\n\
function DumpLeg(inLeg)\n\
{\n\
	logmessage (\"Data in the returned leg:\");\n\
	logmessage (\"------------------------\");\n\
	logmessage (\"Root        : \" + inLeg.Root);\n\
	logmessage (\"Foot Root   : \" + inLeg.Foot.Root);\n\
	logmessage (\"UpVector    : \" + inLeg.Knee);\n\
	logmessage (\"Tarsus      : \" + inLeg.Tarsus);\n\
	logmessage (\"BaseGuide   : \" + inLeg.Foot.BaseGuide);\n\
	logmessage (\"UpVector    : \" + inLeg.UpVec);\n\
	logmessage (\"Skeleton    : \" + inLeg.Skel);\n\
	logmessage (\"Hidden      : \" + inLeg.Hidden);\n\
	logmessage (\"Envelope    : \" + inLeg.Envelope);\n\
	logmessage (\"ShadowsStart: \" + inLeg.ShadowStart);\n\
	logmessage (\"ShadowsEnds : \" + inLeg.ShadowEnds);\n\
	logmessage (\"Shadows     : \" + inLeg.Shadows);\n\
}\n\
//results from running this script:\n\
//INFO : Data in the returned leg:\n\
//INFO : ------------------------\n\
//INFO : Root        : LLegRoot\n\
//INFO : Foot Root   : LFootRoot\n\
//INFO : UpVector    : LkneeGuide\n\
//INFO : Tarsus      : LtarsusGuide\n\
//INFO : BaseGuide   : LFootGuide3\n\
//INFO : UpVector    : LUpVector\n\
//INFO : Skeleton    : LLegRoot,LFemur,LTibia,LMetarsal,LLegEff\n\
//INFO : Hidden      : LLegRoot,LLegEff,LUpVectorParent,LkneeGuide,LtarsusGuide,lastboneUpV,baseNull\n\
//INFO : Envelope    : LTibia,LMetarsal,LBicepRoll1,LBicepRoll2,LBicepRoll3,LBicepRoll_4\n\
//INFO : ShadowsStart: undefined\n\
//INFO : ShadowsEnds : undefined\n\
//INFO : Shadows     : undefined</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/MakeLeg.html\">MakeLeg</a> <a href=\"#!/url=./si_cmds/MakeArm.html\">MakeArm</a> <a href=\"#!/url=./si_cmds/MakeThighSlide.html\">MakeThighSlide</a> <a href=\"#!/url=./si_cmds/MakeFoot.html\">MakeFoot</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";