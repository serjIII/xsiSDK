var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MakeLeg</title>\n\
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
            <h1>MakeLeg</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">MakeLeg</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Creates a two bone leg with an up vector control object. The leg bones are created from a collection \n\
of guide objects, containing a guide for the hip socket, the knee joint, and the ankle respectively.<br /><br />\n\
MakeLeg can optionally add roll divisions to the thigh. Roll divisions are used to distribute the roll \n\
difference between adjacent bones over the length of a bone. When used as deformers on an envelope they \n\
evenly distribute twist along the length of a bone giving a more natural skin deformation. Roll divisions\n\
can also be added separately using the <a href=\"#!/url=./si_cmds/MakeBicepRoll.html\">MakeBicepRoll</a> command. <br /><br />\n\
Optionally a shadow rig can be attached to the leg. Shadow objects are created for each chain element in the \n\
leg, and shadow bones are pose-constrained to the acutal leg bones. Shadow rigs can be used to plot animation \n\
off of a rig. \n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oLeg = MakeLeg( Model, Parent, [Prefix], GuideObjectCollection, [UpVectorBehindLeg], [NbThighDivisions], [ShadowType], [ShadowParent] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns a <a href=\"#!/url=./files/CDKLeg.htm\">Leg</a> JScript object.</p></div>\n\
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
The model the leg will belong to.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Parent		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The parent of the new leg.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Prefix		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The naming prefix for the newly created leg objects.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">GuideObjectCollection		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
A list of 3 objects to search for when making the leg: 1) Top of leg; 2)Knee joint; 3)Ankle.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">UpVectorBehindLeg		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
Determines whether the upvector is places behind the leg (-z globally) or in front (+z globally).			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">NbThighDivisions		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
The number of roll divisions. If the value is zero no roll is created.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
3			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ShadowType		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
The type of shadow rig to attach to the leg. Shadow rigs can be used to transfer or remap animation.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
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
Parent of the shadow rig hiearchy. If empty, no shadow rig is generated.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This script creates two legs, left and right\n\
	Left  leg has thigh roll divisions\n\
	Right leg has a box shadow hierarchy\n\
*/\n\
var guidecoll = new ActiveXObject(\"XSI.Collection\");\n\
guidecoll.Add( GetPrim(\"Null\", \"Guide_HipJoint\") ); \n\
guidecoll.Add( GetPrim(\"Null\", \"Guide_KneeJoint\") ); \n\
guidecoll.Add( GetPrim(\"Null\", \"Guide_AnkleJoint\") ); \n\
var lXfm = guidecoll(0).Kinematics.Global.Transform\n\
var lNull = GetPrim(\"Null\", \"Legs\");\n\
/*\n\
	Right Leg\n\
*/\n\
lXfm.SetTranslationFromValues(2,4,0);\n\
guidecoll(0).Kinematics.Global.Transform = lXfm;\n\
lXfm.SetTranslationFromValues(2,0,-1);\n\
guidecoll(1).Kinematics.Global.Transform = lXfm;\n\
lXfm.SetTranslationFromValues(2,-4,0);\n\
guidecoll(2).Kinematics.Global.Transform = lXfm;\n\
var RLeg= MakeLeg(lNull, GetPrim(\"Null\", \"RLegParent\"),\"R\", guidecoll, true, 0, 4, GetPrim(\"Null\", \"RShadowParent\") );\n\
Logmessage(\"Right Leg\");\n\
DumpLeg(RLeg);\n\
/*\n\
	Left Leg\n\
*/\n\
lXfm.SetTranslationFromValues(-2,4,0);\n\
guidecoll(0).Kinematics.Global.Transform = lXfm;\n\
lXfm.SetTranslationFromValues(-2,0,-1);\n\
guidecoll(1).Kinematics.Global.Transform = lXfm;\n\
lXfm.SetTranslationFromValues(-2,-4,0);\n\
guidecoll(2).Kinematics.Global.Transform = lXfm;\n\
var LLeg = MakeLeg(lNull , GetPrim(\"Null\", \"LLegParent\"),\"L\", guidecoll);\n\
Logmessage(\"Left Leg\");\n\
DumpLeg(LLeg);\n\
function DumpLeg(inLeg)\n\
{\n\
	logmessage (\"Data in the returned leg:\");\n\
	logmessage (\"------------------------\");\n\
	logmessage (\"Root        : \" + inLeg.Root);\n\
	logmessage (\"Effector    : \" + inLeg.Eff);\n\
	logmessage (\"UpVector    : \" + inLeg.upV);\n\
	logmessage (\"Skeleton    : \" + inLeg.Skel);\n\
	if(inLeg.ThighDivisions&gt;0)\n\
	{logmessage (\"Thigh Divs  : \" + inLeg.ThighRoll.Divisions);}\n\
	logmessage (\"Hidden      : \" + inLeg.Hidden);\n\
	logmessage (\"Envelope    : \" + inLeg.Envelope);\n\
	logmessage (\"ShadowsStart: \" + inLeg.ShadowStart);\n\
	logmessage (\"ShadowsEnds : \" + inLeg.ShadowEnds);\n\
	logmessage (\"Shadows     : \" + inLeg.Shadows);\n\
}\n\
//results of running this command:\n\
//INFO : Right Leg\n\
//INFO : Data in the returned leg:\n\
//INFO : ------------------------\n\
//INFO : Root        : RRoot\n\
//INFO : Effector    : RlegEff\n\
//INFO : UpVector    : RlegUpV\n\
//INFO : Skeleton    : RRoot,RThigh,RShin,RlegEff\n\
//INFO : Hidden      : RRoot,RlegEff\n\
//INFO : Envelope    : RThigh,RShin\n\
//INFO : ShadowsStart: RThigh1\n\
//INFO : ShadowsEnds : RForeleg\n\
//INFO : Shadows     : RThigh1,RForeleg\n\
//\n\
//INFO : Left Leg\n\
//INFO : Data in the returned leg:\n\
//INFO : ------------------------\n\
//INFO : Root        : LRoot\n\
//INFO : Effector    : LlegEff\n\
//INFO : UpVector    : LlegUpV\n\
//INFO : Skeleton    : LRoot,LThigh,LShin,LlegEff\n\
//INFO : Thigh Divs  : LBicepRoll1,LBicepRoll2,LBicepRoll3,LBicepRoll_4\n\
//INFO : Hidden      : LRoot,LlegEff\n\
//INFO : Envelope    : LShin,LBicepRoll1,LBicepRoll2,LBicepRoll3,LBicepRoll_4\n\
//INFO : ShadowsStart: undefined\n\
//INFO : ShadowsEnds : undefined\n\
//INFO : Shadows     : undefined</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/MakeDogLeg.html\">MakeDogLeg</a> <a href=\"#!/url=./si_cmds/MakeArm.html\">MakeArm</a> <a href=\"#!/url=./si_cmds/MakeThighSlide.html\">MakeThighSlide</a> <a href=\"#!/url=./si_cmds/MakeFoot.html\">MakeFoot</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";