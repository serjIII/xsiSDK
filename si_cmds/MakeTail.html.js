var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MakeTail</title>\n\
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
            <h1>MakeTail</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">MakeTail</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Creates a tail rig from a collection of guide objects, or a guide curve. A tail (light green chain) \n\
is controlled by a set of one-bone control chains (dark green). The control chain roots (cubes) can \n\
be manipulated for animation control of the rig, while the control chain effectors (hidden) are \n\
connected to springs for a dyanmics effect. The number of guide objects / curve control points \n\
determines the number of control chains, while the NbTailBones argument determines the number of \n\
bones in the tail.<br /><br />\n\
Optionally a shadow rig can be attached to the tail. Shadow objects will be created for each chain \n\
element in the tail, and pose constrained to the tail objects. Shadow rigs can be used to plot \n\
animation off of a rig. \n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oTail = MakeTail( Parent, GuideObjectCollection, [NbTailBones], [ShadowType], [ShadowParent], [CharacterSetName], [ShadowCharacterSetName] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns a <a href=\"#!/url=./files/CDKTail.htm\">Tail</a> JScript object.</p></div>\n\
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
The object to which the new tail will be parented. If null, the scene root will be used.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">GuideObjectCollection		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		A collection of guide objects or a curve used to create the tail. At least three guide \n\
		objects are required, or if a curve is used the curve must have\n\
		at least three control points.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">NbTailBones		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
The number of bones on the tracing chain.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
2			</p>\n\
		</td>\n\
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
Parent of the shadow rig hiearchy. If empty, no shadow rig is generated.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">CharacterSetName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The name of the character set that should be used for this chain; it gets stored in a Custom PSet for use.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"\"			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ShadowCharacterSetName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The name of the shadow character set that should be used for this chain.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
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
	This example creates a 10-bone tail with a box shadow.\n\
*/\n\
var guidecoll = new ActiveXObject(\"XSI.Collection\");\n\
var lXfm = XSIMath.CreateTransform();\n\
for(var i=0;i&lt;5;i++)\n\
{\n\
	guidecoll.Add( GetPrim(\"Null\", \"Guide_Tail\") ); \n\
	lXfm.SetTranslationFromValues(2*i,0,0);\n\
	guidecoll(i).Kinematics.Global.Transform = lXfm;\n\
}\n\
var tail = MakeTail(null,        //Parent (if null uses scene root)\n\
		guidecoll,          //Guide Objects\n\
		10,                 //Nb Tail Bones\n\
		4,                  //Shadow type (4=box shadow)\n\
		ActiveSceneRoot);   //Shadow parent\n\
DumpTail(tail);\n\
function DumpTail(inTail)\n\
{\n\
	logmessage (\"Data in the tail object:\");\n\
	logmessage (\"------------------------\");\n\
	logmessage (\"Nb Points     : \" + inTail.nbPoints);\n\
	logmessage (\"Control Chains: \" + inTail.ControlChains);\n\
	logmessage (\"Control Root  : \" + inTail.Root);\n\
	logmessage (\"Trace Chain   : \" + inTail.TraceChain);\n\
	logmessage (\"Trace Root    : \" + inTail.TraceRoot);\n\
	logmessage (\"Hidden        : \" + inTail.Hidden);\n\
	logmessage (\"Envelope      : \" + inTail.Envelope);\n\
	logmessage (\"Shadow Start  : \" + inTail.ShadowStart);\n\
	logmessage (\"Shadow Ends   : \" + inTail.ShadowEnds);\n\
	logmessage (\"Shadow Objects: \" + inTail.Shadows);\n\
}\n\
//\n\
// Output from running this example:\n\
//\n\
//INFO : Data in the tail object:\n\
//INFO : ------------------------\n\
//INFO : Nb Points     : 5\n\
//INFO : Control Chains: root,bone,eff,root1,bone1,eff1,root2,bone2,eff2,root3,bone3,eff3\n\
//INFO : Control Root  : root\n\
//INFO : Trace Chain   : root4,Tail1,Tail2,Tail3,Tail4,Tail5,Tail6,Tail7,Tail8,Tail9,Tail10,Tail11\n\
//INFO : Trace Root    : root4\n\
//INFO : Hidden        : eff,eff1,eff2,eff3\n\
//INFO : Envelope      : Tail1,Tail2,Tail3,Tail4,Tail5,Tail6,Tail7,Tail8,Tail9,Tail10,Tail11\n\
//INFO : Shadow Start  : Tail12\n\
//INFO : Shadow Ends   : Tail21\n\
//INFO : Shadow Objects: Tail12,Tail13,Tail14,Tail15,Tail16,Tail17,Tail18,Tail19,Tail20,Tail21\n\
//</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/MakeTorso.html\">MakeTorso</a> <a href=\"#!/url=./si_cmds/MakeBelly.html\">MakeBelly</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";