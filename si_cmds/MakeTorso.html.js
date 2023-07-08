var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MakeTorso</title>\n\
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
            <h1>MakeTorso</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">MakeTorso</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Creates a torso rig consisting of a spine, left and right shoulders, and a hip. The torso is \n\
rigged with controls for the chest, hip and upper body.<br /><br />\n\
A collection of 10 or 11 guide objects defines the torso. The first four guide objects determine \n\
the shape of the spine. The next six define the left side of the torso (left leg base, left \n\
shouder base, left shoulder tip, right leg base, right shouder base, right shoulder tip). An 11th \n\
guide object can be added to create a chest bone. A hip icon is created with hip sockets positioned \n\
at the leg bases, and the top of the hip is positioned at the base of the spine. One bone shoulder \n\
is created using the shoulder base and tip guide objects.<br /><br /> \n\
A tail can be generated using MakeTorso by duplicating the spine base control object, the first object in the \n\
guide object collection. A minimum of 3 spine base duplicates are needed to generate a tail (see example).\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oTorso = MakeTorso( Parent, [NbDivisions], [StretchType], GuideObjectCollection, [ControlType], [SpineType], Sliders, [ShadowType], [ShadowParent], [NegativeScale] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns a <a href=\"#!/url=./files/CDKTorso.htm\">Torso</a> JScript object.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Parent		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The object to which the torso will be parented. This is usually the global SRT.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">NbDivisions		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
The number of spine divisions. The number of vertebra will be NbDivisions+1 .			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
2			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">StretchType		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
Whether the spine should stretch to follow the chest controller, or maintain a constant length.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>Stretches by spine scale slider.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>Stretches to meet the chest controller.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">GuideObjectCollection		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		A collection of 10 or 11 guide objects (an 11th guide object can be used as the target \n\
		for a chest bone). The first four bones describe the spine path: 1) spine base, 2) spine \n\
		base depth, 3) spine end depth, 4) spine end; the next three define the left side appendages \n\
		of the torso: 5) left leg start, 6) left shoulder start, 7) left shoulder end; the next \n\
		three define the right side appendages: 8) right leg start, 9) right shoulder start, 10) \n\
		right shoulder end. The 11th object is optional and describes the chest bone position. If \n\
		included, MakeTorso draws a spine to the end of this position and makes a chest bone between \n\
		the position and the spine end (item #4).\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ControlType		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
Type of icon to use for chest, hip, and upper body controls.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>Use square controllers.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>Use cube controllers.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SpineType		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
The style of head assembly to be used.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>make quaternion spine with polygon divisions.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>make quaternion spine with implicit divisions.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">2					</td>\n\
					<td>make skeleton spine.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Sliders		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
A slider PPG to put the spine parameters on.  If none is supplied a slider page is added on the spine Curve.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ShadowType		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
The type of shadow rig to attach. Shadow rigs can be used to transfer or remap animation.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
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
		<td class=\"name\">NegativeScale		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
Negative scaling on the shoulders.  Negative scaling is useful for manipulating the left and right shoulders symmetrically.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>No negative Scaling					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>Negative scaling on the Right Shoulder					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">2					</td>\n\
					<td>Negative Scaling on the Left Shoulder					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This script builds a collection of torso guide objects\n\
	places them and constructs a torso using the makeTorso\n\
	command.\n\
*/\n\
var guidecoll = new ActiveXObject(\"XSI.Collection\");\n\
guidecoll.Add( GetPrim(\"Null\", \"Guide_SpineBase\") ); \n\
guidecoll.Add( GetPrim(\"Null\", \"Guide_SpineDepth\") ); \n\
guidecoll.Add( GetPrim(\"Null\", \"Guide_SpineEndDepth\") ); \n\
guidecoll.Add( GetPrim(\"Null\", \"Guide_SpineEnd\") ); \n\
guidecoll.Add( GetPrim(\"Null\", \"Guide_LLegStart\") ); \n\
guidecoll.Add( GetPrim(\"Null\", \"Guide_LShoulderStart\") ); \n\
guidecoll.Add( GetPrim(\"Null\", \"Guide_LShoulderEnd\") ); \n\
guidecoll.Add( GetPrim(\"Null\", \"Guide_RLegStart\") ); \n\
guidecoll.Add( GetPrim(\"Null\", \"Guide_RShoulderStart\") ); \n\
guidecoll.Add( GetPrim(\"Null\", \"Guide_RShoulderEnd\") ); \n\
var lXfm = guidecoll(0).Kinematics.Global.Transform;\n\
lXfm.SetTranslationFromValues(0,0,0);\n\
guidecoll(0).Kinematics.Global.Transform = lXfm;\n\
lXfm.SetTranslationFromValues(0,2,0);\n\
guidecoll(1).Kinematics.Global.Transform = lXfm;\n\
lXfm.SetTranslationFromValues(0,4,0);\n\
guidecoll(2).Kinematics.Global.Transform = lXfm;\n\
lXfm.SetTranslationFromValues(0,6,0);\n\
guidecoll(3).Kinematics.Global.Transform = lXfm;\n\
lXfm.SetTranslationFromValues(2,0,0);\n\
guidecoll(4).Kinematics.Global.Transform = lXfm;\n\
lXfm.SetTranslationFromValues(2,6,0);\n\
guidecoll(5).Kinematics.Global.Transform = lXfm;\n\
lXfm.SetTranslationFromValues(4,6,0);\n\
guidecoll(6).Kinematics.Global.Transform = lXfm;\n\
lXfm.SetTranslationFromValues(-2,0,0);\n\
guidecoll(7).Kinematics.Global.Transform = lXfm;\n\
lXfm.SetTranslationFromValues(-2,6,0);\n\
guidecoll(8).Kinematics.Global.Transform = lXfm;\n\
lXfm.SetTranslationFromValues(-4,6,0);\n\
guidecoll(9).Kinematics.Global.Transform = lXfm;\n\
//\n\
// Duplicate the spine base guide to generate a tail.\n\
// At least 3 duplicates are required.\n\
//\n\
var tail0 = GetPrim(\"Null\", \"Guide_SpineBase1\");  \n\
var tail1 = GetPrim(\"Null\", \"Guide_SpineBase2\");  \n\
var tail2 = GetPrim(\"Null\", \"Guide_SpineBase3\");  \n\
lXfm.SetTranslationFromValues(0,0,-2); \n\
tail0.Kinematics.Global.Transform = lXfm; \n\
lXfm.SetTranslationFromValues(0,0,-4); \n\
tail1.Kinematics.Global.Transform = lXfm; \n\
lXfm.SetTranslationFromValues(0,0,-6); \n\
tail2.Kinematics.Global.Transform = lXfm; \n\
//\n\
// Make the torso\n\
// \n\
var Torso= MakeTorso( ActiveSceneRoot,	//parent\n\
			 3,			//# vertebrae\n\
			 0,			//stretch using spine scale\n\
			 guidecoll,		//guide objects\n\
			 1,			//cube controls\n\
			 0);			//quat spine with polygon divs\n\
DumpTorso(Torso);\n\
function DumpTorso(inTorso)\n\
{\n\
	logmessage(\"Data in the returned torso object:\");\n\
	logmessage(\"Parent         : \"+ inTorso.Parent);\n\
	logmessage(\"Spine Curve    : \"+ inTorso.Spine.Curve);\n\
	logmessage(\"Hip Bone       : \"+ inTorso.HipBone);\n\
	logmessage(\"Right Effector : \"+ inTorso.REff);\n\
	logmessage(\"Left Effector  : \"+ inTorso.LEff);\n\
	logmessage(\"Right Skeleton : \"+ inTorso.RSkel);\n\
	logmessage(\"Left Skeleton  : \"+ inTorso.LSkel);\n\
	logmessage(\"Spine Vertebrae: \"+ inTorso.Spine.Vertebra);\n\
	logmessage(\"Upper Body     : \"+ inTorso.UpperBody);\n\
	logmessage(\"Hip            : \"+ inTorso.Hip);\n\
	logmessage(\"Chest          : \"+ inTorso.Chest);\n\
	logmessage(\"Hidden         : \"+ inTorso.Hidden);\n\
	logmessage(\"Envelope       : \"+ inTorso.Envelope);\n\
	logmessage(\"Shadows        : \"+ inTorso.Shadows);\n\
}\n\
//results from running this script:\n\
//INFO : \"Data in the returned torso object:\"\n\
//INFO : \"Parent         : undefined\"\n\
//INFO : \"Spine Curve    : crvlist\"\n\
//INFO : \"Hip Bone       : Hip\"\n\
//INFO : \"Right Effector : RShoulderRoot\"\n\
//INFO : \"Left Effector  : LShoulderRoot\"\n\
//INFO : \"Right Skeleton : RShoulder,RShoulderEff,RShoulderRoot\"\n\
//INFO : \"Left Skeleton  : LShoulder,LShoulderEff,LShoulderRoot\"\n\
//INFO : \"Spine Vertebrae: Vertebra,Vertebra1,Vertebra2\"\n\
//INFO : \"Upper Body     : UpperBody\"\n\
//INFO : \"Hip            : Hip1\"\n\
//INFO : \"Chest          : Chest\"\n\
//INFO : \"Hidden         : SpineStart,SpineEnd,RShoulderRoot,LShoulderRoot\"\n\
//INFO : \"Envelope       : Hip,RShoulderEff,LShoulderEff\"\n\
//INFO : \"Shadows        : undefined\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/MakeSpine.html\">MakeSpine</a> <a href=\"#!/url=./si_cmds/MakeArm.html\">MakeArm</a> <a href=\"#!/url=./si_cmds/MakeLeg.html\">MakeLeg</a> <a href=\"#!/url=./si_cmds/MakeDogLeg.html\">MakeDogLeg</a> <a href=\"#!/url=./si_cmds/MakeHead.html\">MakeHead</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";