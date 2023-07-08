var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MakeShadowSpine</title>\n\
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
            <h1>MakeShadowSpine</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">MakeShadowSpine</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Traces a shadow hierarchy (a chain or null hierarchy) on top of an existing spine. Shadow objects \n\
are created and pose-constrained for each vertebra in the spine.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oShadow = MakeShadowSpine( Spline, Base, Vertebra, TopVertebra, ShadowParent, [ChestTop], [IconScale], [ShadowType], [ShadowCharacterSetName] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns a <a href=\"#!/url=./files/CDKShadow.htm\">Shadow</a> JScript object.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Spline		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The Spline object of the spine to be traced.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Base		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The base object (hip) of the spine to be traced.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Vertebra		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
A collection of the vertebrae on the spine to be traced.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">TopVertebra		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The top vertebra object (chest) on the spine to be traced.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ShadowParent		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The parent of the new Shadow hierarchy.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ChestTop		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		(optional) The chest top object of the spine to be traced.  If empty it is assumed the\n\
		spine was generated without this option.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">IconScale		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
The scale value of the spine.  Used to control the icon scale of the shadow skeleton.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
1.0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ShadowType		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
\n\
		The type of Shadow tracing to be drawn. For convenience the numbers align with the UI options \n\
		for the Shadow type on the default rig generators.  Box Shadows are not traced here, but are\n\
		done as components because they need to make assumptions about the volume of each component.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
1			</p>\n\
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
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ShadowCharacterSetName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The name of the character set that should be used for this chain.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
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
	Make a spine with 3 vertebrae, then attach\n\
	a skeleton shadow to it\n\
*/\n\
var Base 	= GetPrim(\"Null\", \"Base\"); \n\
var Top  	= GetPrim(\"Null\", \"Top\"); \n\
var Depth 	= GetPrim(\"Null\", \"Depth\"); \n\
var TopDepth= GetPrim(\"Null\", \"TopDepth\"); \n\
/*\n\
	Make Spine\n\
*/\n\
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
/*\n\
	Make Shadow\n\
*/\n\
var ShadowSpine = MakeShadowSpine(Spine.Curve, Spine.base, Spine.Vertebra, Spine.TopVertebra, ActiveSceneRoot,Spine.chestTop);\n\
DumpShadowSpine(ShadowSpine);\n\
function DumpShadowSpine(inShadowSpine)\n\
{\n\
	logmessage (\"Data in the returned spine object:\");\n\
	logmessage (\"---------------------------------\");\n\
	logmessage (\"Spline      : \" + inShadowSpine.Spline);\n\
	logmessage (\"TopVertebra : \" + inShadowSpine.TopVertebra );\n\
	logmessage (\"Scale       : \" + inShadowSpine.Scale);\n\
	logmessage (\"Parent      : \" + inShadowSpine.Parent);\n\
	logmessage (\"#ShadowObj  : \" + inShadowSpine.Shadows.count);\n\
	for(var b=0;b&lt;inShadowSpine.Shadows.count;b++)\n\
		{logmessage (\"  Shadow\" + b + \": \" + inShadowSpine.Shadows(b));}\n\
	logmessage (\"#EnvelopeObj: \" + inShadowSpine.	Envelope.count);\n\
	for(var b=0;b&lt;inShadowSpine.Envelope.count;b++)\n\
		{logmessage (\"  EnvelopeObj\" + b + \": \" + inShadowSpine.Envelope(b));}\n\
	logmessage (\"#Vertebrae  : \" + inShadowSpine.Vertebra.count);\n\
	for(var b=0;b&lt;inShadowSpine.Vertebra.count;b++)\n\
		{logmessage (\"  Vertebra\" + b + \": \" + inShadowSpine.Vertebra(b));}\n\
	logmessage (\"#UpVectors  : \" + inShadowSpine.UpVectors.count);\n\
	for(var b=0;b&lt;inShadowSpine.UpVectors.count;b++)\n\
		{logmessage (\"  UpVector\" + b + \": \" + inShadowSpine.UpVectors(b));}\n\
}\n\
//results from running this script:\n\
//INFO : \"Data in the returned spine object:\"\n\
//INFO : \"---------------------------------\"\n\
//INFO : \"Spline      : crvlist\"\n\
//INFO : \"TopVertebra : TopVertebra\"\n\
//INFO : \"Scale       : 1\"\n\
//INFO : \"Parent      : Scene_Root\"\n\
//INFO : \"#ShadowObj  : 6\"\n\
//INFO : \"  Shadow0: SpineRoot\"\n\
//INFO : \"  Shadow1: Spine1\"\n\
//INFO : \"  Shadow2: Spine2\"\n\
//INFO : \"  Shadow3: Spine3\"\n\
//INFO : \"  Shadow4: Chest\"\n\
//INFO : \"  Shadow5: ChestEffector\"\n\
//INFO : \"#EnvelopeObj: 0\"\n\
//INFO : \"#Vertebrae  : 3\"\n\
//INFO : \"  Vertebra0: Vertebra\"\n\
//INFO : \"  Vertebra1: Vertebra1\"\n\
//INFO : \"  Vertebra2: Vertebra2\"\n\
//INFO : \"#UpVectors  : 4\"\n\
//INFO : \"  UpVector0: Shadow_upVa\"\n\
//INFO : \"  UpVector1: Shadow_upVa1\"\n\
//INFO : \"  UpVector2: Shadow_upVa2\"\n\
//INFO : \"  UpVector3: Shadow_upVa3\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/MakeShadowChain.html\">MakeShadowChain</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";