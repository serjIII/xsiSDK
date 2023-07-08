var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MakeJointCompression</title>\n\
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
            <h1>MakeJointCompression</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">MakeJointCompression</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Joint compression is a technique used to model two parts of a character pushing into each other, \n\
usually the arms or the legs. A bounding volume sphere is used on the LowerBone to do the pushing, \n\
and two nulls are used on the UpperBone to be pushed. For example, when the forearm comes into the \n\
bicep, the bicep deforms slightly as it is pushed by the forearm. The bounding volume is attached\n\
to the forearm and the nulls to the bicep to get a more realistic skin deformation.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oJoint = MakeJointCompression( [Prefix], UpperBone, LowerBone, GuideObjectCollection, [RollDivisionCollection] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns a <a href=\"#!/url=./files/CDKJoint.htm\">Joint</a> JScript object.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Prefix		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The name prefix for the newly created compression nulls.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">UpperBone		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The parent for the upper part of the joint assembly.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">LowerBone		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The parent for the lower part of the joint assembly.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">GuideObjectCollection		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		A list of 4 objects: 1) the boxes defining a line on the upper joint, closest to the root;\n\
		2) the boxes defining a line on the upper joint, closest to the joint; 3) The box control \n\
		in the middle of the radius curve on the lower joint; and 4) the small sphere that acts as \n\
		a center point of the radius curve.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RollDivisionCollection		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		A collection of roll division objects so this assembly can bind to a roll division instead of\n\
		a bone (optional).\n\
			</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This script makes a 2 bone arm\n\
	and attaches joint compression nulls\n\
	to the bicep.\n\
*/\n\
//\n\
// Draw an arm-like two bone chain\n\
//\n\
var lPosStart = XSIMath.CreateVector3();\n\
var lPosEnd = XSIMath.CreateVector3();\n\
lPosStart.Set(0,0,0);\n\
lPosEnd.Set(3,0,-1);\n\
var HandChain = ActiveSceneRoot.Add2DChain(lPosStart, lPosEnd);\n\
lPosEnd.Set(6,0,0);\n\
HandChain.AddBone(lPosEnd, 2);\n\
//\n\
// Create guide objects and position them\n\
//\n\
var guidecoll = new ActiveXObject(\"XSI.Collection\");\n\
guidecoll.Add( GetPrim(\"Null\", \"RootGuide\") ); \n\
guidecoll.Add( GetPrim(\"Null\", \"JointGuide\") ); \n\
guidecoll.Add( GetPrim(\"Null\", \"SphereCenter\") ); \n\
guidecoll.Add( GetPrim(\"Null\", \"RadiusControl\") ); \n\
var Xfm = XSIMath.CreateTransform();\n\
Xfm.SetTranslationFromValues(2,0,0.5);\n\
guidecoll(0).Kinematics.Global.Transform = Xfm;\n\
Xfm.SetTranslationFromValues(2.5,0,0.5);\n\
guidecoll(1).Kinematics.Global.Transform = Xfm;\n\
Xfm.SetTranslationFromValues(2,0,-1);\n\
guidecoll(2).Kinematics.Global.Transform = Xfm;\n\
Xfm.SetTranslationFromValues(4,0,-1);\n\
guidecoll(3).Kinematics.Global.Transform = Xfm;\n\
var JointCmp = MakeJointCompression(\"ABC_\",HandChain.Bones(0),HandChain.Bones(1),guidecoll);\n\
logmessage (\"Data in the returned joint compression object:\");\n\
logmessage (\"---------------------------------------------\");\n\
logmessage (\"UpperJoint: \" + JointCmp.UpperJoint);\n\
logmessage (\"LowerJoint: \" + JointCmp.LowerJoint);\n\
logmessage (\"Volume    : \" + JointCmp.Volume);\n\
logmessage (\"Envelope  : \" + JointCmp.Envelope);\n\
//results of running this script: \n\
//INFO : \"Data in the returned joint compression object:\"\n\
//INFO : \"---------------------------------------------\"\n\
//INFO : \"UpperJoint: ABC_UpperJoint\"\n\
//INFO : \"LowerJoint: ABC_LowerJoint\"\n\
//INFO : \"Volume    : ABC_BendVolume\"\n\
//INFO : \"Envelope  : ABC_UpperJoint,ABC_LowerJoint\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/MakeArm.html\">MakeArm</a> <a href=\"#!/url=./si_cmds/MakeLeg.html\">MakeLeg</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";