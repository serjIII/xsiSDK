var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MakeSpine</title>\n\
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
            <h1>MakeSpine</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">MakeSpine</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Creates a quaternion or skeleton spine given four objects: chest control, hip control, chest depth, hip depth.\n\
These four objects define 4 point bezier curve along which the vertebrae are traced. On a skeleton spine the \n\
vertebrae are bones, on a quaterion spine the vertebrae can be implicit or polygon cubes. On a quaternion spine \n\
these four objects also control the spine\'s curve (each object controls one of the curve\'s control points).<br /><br />\n\
Optionally a shadow rig can be attached to the arm. Shadow objects are created for each chain element in the \n\
arm, and shadow arm bones are pose-constrained to the acutal arm bones. Shadow rigs can be used to plot \n\
animation off of a rig. \n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oSpine = MakeSpine( Model, Parent, [NbVertebrae], [SpineType], [Stretchy], SpineBaseObject, SpineTopObject, [BottomDepthObject], [TopDepthObject], [ChestTop], Sliders, [ShadowType], [ShadowParent], [VertebraeName], [CharacterSetName], [ShadowCharacterSetName] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns a <a href=\"#!/url=./files/CDKSpine.htm\">Spine</a> JScript object.</p></div>\n\
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
The model the spine will belong to.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Parent		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The object to which the spine will be parented.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">NbVertebrae		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
The number of Vertebra on the spine.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
3			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SpineType		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
The type of Spine and controls objects used.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>Make quaternion spine with polygon divisions.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>Make quaternion spine with implicit divisions.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">2					</td>\n\
					<td>Make skeleton spine.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Stretchy		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
Make a stretchy spine that doesn\'t clip length.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
True			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SpineBaseObject		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Bottom of the spine, should be pointing y+ along the path of the spine.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SpineTopObject		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Top of the spine, should be pointing y+ out from the Curve.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">BottomDepthObject		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Goal for a 4 point bezier going through the spine.  If empty will be computed automatically.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">TopDepthObject		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Goal for a 4 point bezier going through the spine.  If empty will be computed automatically.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ChestTop		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		(optional) Top of chest goal.  If filled, this command uses the spine top as a position reference\n\
		only and builds an icon from spineTop to chestTop.  If empty there is no extra icon on top of the \n\
		spine, only an implicit cube is used.\n\
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
The type of shadow rig to attach to the spine. Shadow rigs can be used to transfer or remap animation.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
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
		<td class=\"name\">VertebraeName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The name that should be used for the vertebrae.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"\"			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">CharacterSetName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The name of the character set that should be used for this chain; it gets stored in a \n\
Custom PSet for use.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"\"			</p>\n\
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
	Makes a spine with 3 vertebrae\n\
*/\n\
var Base 	= GetPrim(\"Null\", \"Base\"); \n\
var Top  	= GetPrim(\"Null\", \"Top\"); \n\
var Depth 	= GetPrim(\"Null\", \"Depth\"); \n\
var TopDepth= GetPrim(\"Null\", \"TopDepth\"); \n\
var lXfm = XSIMath.CreateTransform();\n\
lXfm.SetTranslationFromValues(0,0,0);\n\
Base.Kinematics.Global.Transform = lXfm;\n\
lXfm.SetTranslationFromValues(0,8,0);\n\
Top.Kinematics.Global.Transform = lXfm;\n\
lXfm.SetTranslationFromValues(0,2,0);\n\
Depth.Kinematics.Global.Transform = lXfm;\n\
lXfm.SetTranslationFromValues(0,6,0);\n\
TopDepth.Kinematics.Global.Transform = lXfm;\n\
var Spine = MakeSpine(	ActiveSceneRoot, 	//model \n\
				ActiveSceneRoot, 	//parent\n\
				3,			//number of vertebrae\n\
				0, 			//quat spine with polygon vertebrae\n\
				false,			//non-stretchy\n\
				Base, Top,\n\
				Depth,TopDepth);\n\
DumpSpine(Spine);\n\
function DumpSpine(inSpine)\n\
{\n\
	logmessage (\"Data in the returned spine object:\");\n\
	logmessage (\"----------------------------------\");\n\
	logmessage (\"Curve       : \" + inSpine.Curve);\n\
	logmessage (\"TopVertebra : \" + inSpine.TopVertebra);\n\
	if(inSpine.Shadows)\n\
	{\n\
		logmessage (\"#ShadowObj  : \" + inSpine.Shadows.count);\n\
		for(var b=0; inSpine.Shadows &amp;&amp; b&lt;inSpine.Shadows.count;b++)\n\
			{logmessage (\"  Shadow\" + b + \": \" + inSpine.Shadows(b));}\n\
	}\n\
		logmessage (\"#ShadowObj  : \" + 0);\n\
	logmessage (\"#EnvelopeObj: \" + inSpine.Envelope.count);\n\
	for(var b=0;b&lt;inSpine.Envelope.count;b++)\n\
		{logmessage (\"  EnvelopeObj\" + b + \": \" + inSpine.Envelope(b));}\n\
	logmessage (\"#Vertebrae  : \" + inSpine.Vertebra.count);\n\
	for(var b=0;b&lt;inSpine.Vertebra.count;b++)\n\
		{logmessage (\"  Vertebra\" + b + \": \" + inSpine.Vertebra(b));}\n\
}\n\
//result of running this script\n\
//INFO : \"Data in the returned spine object:\"\n\
//INFO : \"----------------------------------\"\n\
//INFO : \"Curve       : crvlist2\"\n\
//INFO : \"TopVertebra : TopVertebra2\"\n\
//INFO : \"#ShadowObj  : 0\"\n\
//INFO : \"#EnvelopeObj: 4\"\n\
//INFO : \"  EnvelopeObj0: TopVertebra2\"\n\
//INFO : \"  EnvelopeObj1: Vertebra6\"\n\
//INFO : \"  EnvelopeObj2: Vertebra7\"\n\
//INFO : \"  EnvelopeObj3: Vertebra8\"\n\
//INFO : \"#Vertebrae  : 3\"\n\
//INFO : \"  Vertebra0: Vertebra6\"\n\
//INFO : \"  Vertebra1: Vertebra7\"\n\
//INFO : \"  Vertebra2: Vertebra8\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/MakeShadowSpine.html\">MakeShadowSpine</a> <a href=\"#!/url=./si_cmds/MakeTorso.html\">MakeTorso</a> <a href=\"#!/url=./si_cmds/MakeHead.html\">MakeHead</a> <a href=\"#!/url=./si_cmds/MakeHip.html\">MakeHip</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";