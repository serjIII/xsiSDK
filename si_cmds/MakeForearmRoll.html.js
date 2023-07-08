var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MakeForearmRoll</title>\n\
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
            <h1>MakeForearmRoll</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">MakeForearmRoll</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Creates roll nulls along the length of a bone. When used as deformers on an envelope they evenly distribute twist\n\
along the length of a bone giving a more natural skin deformation.<br /><br />\n\
The start and end rotations are determined differently for a forearm roll and bicep roll (<a href=\"#!/url=./si_cmds/MakeBicepRoll.html\">MakeBicepRoll</a>). \n\
In forearm roll, the starting rotation is the forearm\'s rotation minus any spin, calculated using the bicep\'s rotation. The end \n\
rotation is the next bone\'s rotation (wrist) with spin. Roll division rotations are then interpolated between the start and end.\n\
In the case of bicep roll the bicep bone is used for both start and end rotations. The start rotation is the bone\'s rotation minus spin,\n\
the end rotation is its rotation with spin.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oForeArmRoll = MakeForearmRoll( Bicep, Forearm, ArmEff, HandEff, HandBone, [Prefix], [NbDivisions], [RollOffset] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns a <a href=\"#!/url=./files/CDKForeArmRoll.htm\">ForeArmRoll</a> JScript object.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Bicep		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The chain element before the forearm, used to calculate the unspun forearm rotation.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Forearm		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The object to which the roll nulls will be parented.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ArmEff		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Effector of the chain that contains the bicep and forearm.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">HandEff		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The effector of the wrist chain.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">HandBone		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The wrist or hand bone, used to calculate the end rotation.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Prefix		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Prefix added to the name of the new dividers.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">NbDivisions		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
The number of roll divisions. If the value is zero no roll is created.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
3			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RollOffset		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
\n\
		Offset in degrees to roll the forearm.  The roll has a range of -180 to 180 and this lets you place the seam of that roll.\n\
		The value is driving a custom parameter that will be placed under the Hand Bone to interactively control this value.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This script creates an arm, then puts roll division\n\
	on the forearm.\n\
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
	Add a Hand\n\
*/\n\
var lPosStart = XSIMath.CreateVector3();\n\
var lPosEnd = XSIMath.CreateVector3();\n\
lPosStart.Set(8,0,0);\n\
lPosEnd.Set(9,0,0);\n\
var HandChain = ActiveSceneRoot.Add2DChain(lPosStart, lPosEnd);\n\
var ForeArmRoll = MakeForearmRoll(	RArm.Root.Bones(0),	//bicep\n\
					RArm.Root.Bones(1), 	//forearm\n\
					RArm.Eff,		//arm effector\n\
					HandChain.Effector,	//hand effector\n\
					HandChain.Bones(0),	//hand\n\
					\"R\");			//new object name prefix\n\
DumpForearmRoll(ForeArmRoll );\n\
function DumpForearmRoll(inForeArmRoll )\n\
{\n\
	logmessage (\"Data in the returned arm object:\");\n\
	logmessage (\"-------------------------------\");\n\
	logmessage (\"Sliders   : \" + inForeArmRoll.Sliders);\n\
	logmessage (\"RollOffset: \" + inForeArmRoll.RollOffset.value);\n\
	logmessage (\"#Divisions: \" + inForeArmRoll.Nb);\n\
	for(var b=0;b&lt;ForeArmRoll.Divisions.count;b++)\n\
		{logmessage (\"  RollDif\" + b + \": \" + inForeArmRoll.Divisions(b));}\n\
}\n\
//results of running this script:\n\
//INFO : \"Data in the returned arm object:\"\n\
//INFO : \"-------------------------------\"\n\
//INFO : \"Sliders   : bone.Roll_Compensation\"\n\
//INFO : \"RollOffset: 0\"\n\
//INFO : \"#Divisions: 3\"\n\
//INFO : \"  RollDif0: RElbow\"\n\
//INFO : \"  RollDif1: RForearmRoll\"\n\
//INFO : \"  RollDif2: RForearmRoll1\"\n\
//</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/MakeBicepRoll.html\">MakeBicepRoll</a> <a href=\"#!/url=./si_cmds/MakeArm.html\">MakeArm</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";