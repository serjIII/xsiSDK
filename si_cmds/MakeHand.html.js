var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MakeHand</title>\n\
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
            <h1>MakeHand</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">MakeHand</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Creates a one-bone hand and a set of finger bones using guide objects to position and orient \n\
the bone joints. Two collections of guide objects are necessary to create a hand: a collection \n\
of finger guide objects to position finger joints; and a collection of \"blade\" objects that control \n\
the curl direction of the fingers. The finger chain is set up so that bone Z rotation is in the \n\
plane of the blade. <br /><br />\n\
Optionally a shadow rig can be attached to the hand and fingers. A shadow object is created for each \n\
chain element in the arm, and pose constrained to that element. Shadow rigs can be used to plot \n\
animation off of a rig. \n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oHand = MakeHand( HandParent, FingerGuideCollection, BladeGuideCollection, HandGuideCollection, [Prefix], [FingerBoneType], [ShadowType], [ShadowParent], [NegativeScale] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns a <a href=\"#!/url=./files/CDKHand.htm\">Hand</a> JScript object.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">HandParent		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The object to which the new hand will be parented.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">FingerGuideCollection		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		A collection of guides objects for the start of each finger.  Given a guide object in the collection \n\
		like \"LRing1\" make hand will search for \"LRing2\", \"LRing3\", etc. until it can\'t find more joints. \n\
		At least one extra joint per root needs to be found in the scene for a bone to be drawn.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">BladeGuideCollection		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		A collection of blade objects showing the orientation of the fingers being drawn. Needs to be \n\
		in the same order as the Root Guides.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">HandGuideCollection		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
A collection of two objects in the order: start of hand bone, end of hand bone.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Prefix		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The prefix used to name new objects when making the new hand.  For example, \"L\" and \"R\".		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">FingerBoneType		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
Option to construct finger bones from 2D or 3D chains.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>Fingers are 2D chains and the preference angles orient with Finger blades.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>Fingers are 3D chains and preference angles are the pose of the guide.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ShadowType		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
The type of shadow rig to attach to the hand. Shadow rigs can be used to transfer or remap animation.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
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
				<tr>\n\
					<td class=\"name\">9					</td>\n\
					<td>SI|3D Skeleton hand shadow (no fingers)					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">10					</td>\n\
					<td>XSI Skeleton hand shadow (no fingers)					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">11					</td>\n\
					<td>Null hand shadow (no fingers)					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">12					</td>\n\
					<td>Box hand shadow (no fingers)					</td>\n\
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
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
Negative scaling on the chain. Negative scaling is useful for manipulating the left and right hands or fingers symmetrically.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
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
	Loads the Biped Guide then generates a left \n\
	hand matched to the guide\n\
*/\n\
GetProportionalGuide(\"Biped_Guide\", 0, 0);\n\
var Guide    = ActiveSceneRoot.FindChild(\"Biped_Guide\" );\n\
var LFingers = new ActiveXObject(\"XSI.Collection\");\n\
var LBlades  = new ActiveXObject(\"XSI.Collection\");\n\
var handKeys = new Array(\"Pinky\", \"Ring\", \"Middle\", \"Index\", \"Thumb\");\n\
for(i=0;i&lt;handKeys.length;i++){\n\
	var finger = Guide.FindChild(\"L\" + handKeys[i] + 1);\n\
	var blade  = Guide.FindChild(\"L\" + handKeys[i] + \"_fingerBlade\");\n\
	if(finger &amp;&amp; blade){\n\
		LFingers.add(finger);\n\
		LBlades.add(blade);\n\
	}\n\
}\n\
var LHBone = new ActiveXObject(\"XSI.Collection\");\n\
LHBone.add(Guide + \".LHand\");\n\
LHBone.add(Guide + \".LHandEnd\");\n\
var LHand = makeHand(ActiveSceneRoot, LFingers, LBlades, LHBone, \"L\", 0, 0, null, 0);\n\
DumpHand(LHand);\n\
//Delete the guide\n\
DeleteObj(\"B:\"+Guide);\n\
//Move hand to the origin \n\
var xfo\n\
xfo = LHand.Root.Kinematics.Global.Transform;\n\
xfo.SetTranslationFromValues(0,0,0);\n\
LHand.Root.Kinematics.Global.Transform = xfo;\n\
function DumpHand(inHand)\n\
{\n\
		logmessage (\"Data in the returned hand object:\");\n\
		logmessage (\"---------------------------------\");\n\
		logmessage (\"HandRoot  : \" + inHand.Root);\n\
		logmessage (\"HandEff   : \" + inHand.Eff);\n\
		logmessage (\"#FingRoots: \" + inHand.FingerRoots.count);\n\
		for(var b=0;b&lt;inHand.FingerRoots.count;b++)\n\
		{logmessage (\" FingerRoot\" + b + \": \" + inHand.FingerRoots(b));}\n\
		logmessage (\"Hidden    : \" + inHand.Hidden);\n\
		logmessage (\"Envelope  : \" + inHand.Envelope);\n\
		logmessage (\"Shadows   : \" + inHand.Shadows);\n\
}\n\
//results from running this script:\n\
//INFO : \"Data in the returned hand object:\"\n\
//INFO : \"---------------------------------\"\n\
//INFO : \"HandRoot  : LHandRoot\"\n\
//INFO : \"HandEff   : LHandEffector\"\n\
//INFO : \"#FingRoots: 5\"\n\
//INFO : \" FingerRoot0: LPinkyRoot\"\n\
//INFO : \" FingerRoot1: LRingRoot\"\n\
//INFO : \" FingerRoot2: LMiddleRoot\"\n\
//INFO : \" FingerRoot3: LIndexRoot\"\n\
//INFO : \" FingerRoot4: LThumbRoot\"\n\
//INFO : \"Hidden    : LPinkyRoot,LPinkyEffector,LRingRoot,LRingEffector,LMiddleRoot,LMiddleEffector,LIndexRoot,LIndexEffector,LThumbRoot,LThumbEffector,LHandRoot,LHandEffector\"\n\
//INFO : \"Envelope  : LPinky1,LPinky2,LPinky3,LRing1,LRing2,LRing3,LMiddle1,LMiddle2,LMiddle3,LIndex1,LIndex2,LIndex3,LThumb1,LThumb2,LThumb3,LHand\"\n\
//INFO : \"Shadows   : undefined\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/MakeArm.html\">MakeArm</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";