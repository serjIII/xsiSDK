var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MakeArm</title>\n\
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
            <h1>MakeArm</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">MakeArm</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Creates a two bone arm and an up vector control object. The arm bones are created from a collection of guide \n\
objects, which should contain objects for shoulder, elbow, and hand positions respectively. A bicep bone will \n\
connect the shoulder and elbow objects, and a forearm bone will connect the elbow and hand objects. <br /><br />\n\
MakeArm can optionally add roll divisions to the bicep and forearm. Divisions are used to distribute the roll \n\
difference between adjacent bones over the length of a bone. When used as deformers on an envelope they \n\
evenly distribute twist along the length of a bone giving a more natural skin deformation. Roll divisions\n\
can also be added separately using the <a href=\"#!/url=./si_cmds/MakeBicepRoll.html\">MakeBicepRoll</a> and <a href=\"#!/url=./si_cmds/MakeForearmRoll.html\">MakeForearmRoll</a>\n\
commands. If using forearm roll, create the hand before calling MakeArm so that the hand root can be passed \n\
as an argument.<br /><br />\n\
Optionally a shadow rig can be attached to the arm. Shadow objects will be created for each chain element in \n\
the arm, and shadow arm bones will be pose constrained to the acutal arm bones. Shadow rigs can be used to \n\
plot animation off of a rig. \n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oArm = MakeArm( ArmParent, GuideObjectCollection, [Prefix], [ArmRootConstrainingObj], [NbForearmDivisions], [NbBicepDivisions], [ShadowType], [ShadowParent], [HandRoot], [NegativeScale] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns an <a href=\"#!/url=./files/CDKArm.htm\">Arm</a> JScript.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ArmParent		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The object to which the new arm will be parented.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">GuideObjectCollection		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
A collection of three guide objects for the shoulder, elbow, and hand respectively.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Prefix		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The prefix used to name new objects when making the new arm.  Example \"L\", \"R\"		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ArmRootConstrainingObj		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Object to which the arm root will be position-constrained. If not specified, no constraint is applied to the arm root.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">NbForearmDivisions		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
The number of forearm roll divisions (see the <a href=\"#!/url=./si_cmds/MakeForearmRoll.html\">MakeForearmRoll</a> command). If the value is zero there is no forearm roll			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">NbBicepDivisions		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
The number of bicep roll divisions (see the <a href=\"#!/url=./si_cmds/MakeBicepRoll.html\">MakeBicepRoll</a> command). If the value is zero there is no bicep roll.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ShadowType		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
The type of shadow rig to attach to the arm. Shadow rigs can be used to transfer or remap animation.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
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
		<td class=\"name\">HandRoot		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Object acting as hand root, required for forearm roll division. This object must be a chain element(root,bone,effector). If empty, forearm roll division will not be applied, but bicep roll will.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">NegativeScale		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
Negative scaling on the chain. Negative scaling is useful for manipulating the left and right arms symmetrically.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This script creates two arms, left and right\n\
	Left arm also has a hand bone and roll divisions.\n\
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
var RArm = MakeArm(GetPrim(\"Null\", \"RArmParent\"), guidecoll, \"R\",null, 0,0,0,null ,null, 0);\n\
Logmessage(\"Right RArm\");\n\
DumpArm(RArm);\n\
/*\n\
	Left Arm\n\
*/\n\
lXfm.SetTranslationFromValues(0,0,0);\n\
guidecoll(0).Kinematics.Global.Transform = lXfm;\n\
lXfm.SetTranslationFromValues(-4,0,2);\n\
guidecoll(1).Kinematics.Global.Transform = lXfm;\n\
lXfm.SetTranslationFromValues(-8,0,0);\n\
guidecoll(2).Kinematics.Global.Transform = lXfm;\n\
var lPosStart = XSIMath.CreateVector3();\n\
var lPosEnd = XSIMath.CreateVector3();\n\
lPosStart.Set(-8,0,0);\n\
lPosEnd.Set(-9,0,0);\n\
var HandChain = ActiveSceneRoot.Add2DChain(lPosStart, lPosEnd);\n\
var LArm = MakeArm(GetPrim(\"Null\", \"LArmParent\"), guidecoll, \"L\",null, 4,4,0,ActiveSceneRoot,HandChain, 0);\n\
Logmessage(\"Left Arm\");\n\
DumpArm(LArm);\n\
function DumpArm(inArm)\n\
{\n\
	logmessage (\"Data in the returned arm object:\");\n\
	logmessage (\"-------------------------------\");\n\
	logmessage (\"Bind Null : \" + inArm.Root);\n\
	logmessage (\"Top  Null : \" + inArm.Eff);\n\
	logmessage (\"Base Null : \" + inArm.UpVParent);\n\
	logmessage (\"#ForeDiv  : \" + inArm.ForearmDivisions);\n\
	if(inArm.BicepDivisions &gt; 0)\n\
	{\n\
		for(var b=0;b&lt;inArm.ForeArmRoll.Divisions.count;b++)\n\
		{logmessage (\"  RollDif\" + b + \": \" + inArm.ForeArmRoll.Divisions(b));}\n\
	}\n\
	logmessage (\"#BicepDiv : \" + inArm.BicepDivisions);\n\
	if(inArm.BicepDivisions &gt; 0)\n\
	{\n\
		for(var b=0;b&lt;inArm.BicepRoll.Divisions.count;b++)\n\
		{logmessage (\"  RollDif\" + b + \": \" + inArm.BicepRoll.Divisions(b));}\n\
	}\n\
	logmessage (\"Upvector  : \" + inArm.UpV);\n\
	logmessage (\"Hidden    : \" + inArm.Hidden);\n\
	logmessage (\"Envelope  : \" + inArm.Envelope);\n\
	logmessage (\"Shadows   : \" + inArm.Shadows);\n\
}\n\
//results of running this script\n\
//INFO : \"Right RArm\"\n\
//INFO : \"Data in the returned arm object:\"\n\
//INFO : \"-------------------------------\"\n\
//INFO : \"Bind Null : RRoot\"\n\
//INFO : \"Top  Null : RArmEff\"\n\
//INFO : \"Base Null : undefined\"\n\
//INFO : \"#ForeDiv  : 0\"\n\
//INFO : \"#BicepDiv : 0\"\n\
//INFO : \"Upvector  : RArmUpV\"\n\
//INFO : \"Hidden    : RRoot\"\n\
//INFO : \"Envelope  : RBicep,RForearm\"\n\
//INFO : \"Shadows   : undefined\"\n\
//INFO : \"Left Arm\"\n\
//INFO : \"Data in the returned arm object:\"\n\
//INFO : \"-------------------------------\"\n\
//INFO : \"Bind Null : LRoot\"\n\
//INFO : \"Top  Null : LArmEff\"\n\
//INFO : \"Base Null : undefined\"\n\
//INFO : \"#ForeDiv  : 4\"\n\
//INFO : \"  RollDif0: LElbow\"\n\
//INFO : \"  RollDif1: LForearmRoll\"\n\
//INFO : \"  RollDif2: LForearmRoll1\"\n\
//INFO : \"  RollDif3: LForearmRoll2\"\n\
//INFO : \"#BicepDiv : 4\"\n\
//INFO : \"  RollDif0: LBicepRoll1\"\n\
//INFO : \"  RollDif1: LBicepRoll2\"\n\
//INFO : \"  RollDif2: LBicepRoll3\"\n\
//INFO : \"  RollDif3: LBicepRoll4\"\n\
//INFO : \"  RollDif4: LBicepRoll_5\"\n\
//INFO : \"Upvector  : LArmUpV\"\n\
//INFO : \"Hidden    : LRoot\"\n\
//INFO : \"Envelope  : LBicepRoll1,LBicepRoll2,LBicepRoll3,LBicepRoll4,LBicepRoll_5,LElbow,LForearmRoll,LForearmRoll1,LForearmRoll2\"\n\
//INFO : \"Shadows   : undefined\"\n\
//</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/MakeForearmRoll.html\">MakeForearmRoll</a> <a href=\"#!/url=./si_cmds/MakeBicepRoll.html\">MakeBicepRoll</a> <a href=\"#!/url=./si_cmds/MakeHand.html\">MakeHand</a> <a href=\"#!/url=./si_cmds/MakeJointCompression.html\">MakeJointCompression</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";