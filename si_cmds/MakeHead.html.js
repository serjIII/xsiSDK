var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MakeHead</title>\n\
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
            <h1>MakeHead</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">MakeHead</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Creates a spine or skeleton head rig from three guide objects. The guide objects position the base of the head,\n\
the neck and the head. Optionally guide objects can also be passed to generate ears (a form of tail, see\n\
<a href=\"#!/url=./si_cmds/MakeTail.html\">MakeTail</a> ).<br /><br />\n\
Optionally a shadow rig can be attached to the head. Shadow objects are created for each chain element or spine\n\
vertebra in the head, and pose-constrained to these objects. Shadow rigs can be used to plot animation \n\
off of a rig.<br /><br /> \n\
A jaw can be generated using MakeHead by duplicating the neck guide object (the second object in the guide\n\
collection). A minimum of 2 neck guide duplicates are needed to generate a jaw (see the example).<br /><br />\n\
If a skeleton style head is used, extra bones can be added to the neck by duplicating the head guide object\n\
(the third object in the guide collection). An extra bone will be created for each duplicate (see the example).\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oHead = MakeHead( Parent, GuideObjectCollection, [Prefix], [AssemblyType], [HeadType], [NbDivisions], [StretchType], Sliders, EarGuideCollection, [ShadowType], [ShadowParent] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns a <a href=\"#!/url=./files/CDKHead.htm\">Head</a> JScript object.</p></div>\n\
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
The object to which the new head will be parented.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">GuideObjectCollection		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
An collection of 3 guide objects, consisting of the base of the head, the neck, and the head.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Prefix		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The prefix used to name new objects when making the new head.  Example \"L\", \"R\".		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">AssemblyType		</td>\n\
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
					<td>Skeleton head and neck.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>Spine head and neck.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">HeadType		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
The type of head, used in the creation of box shadows.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>Biped head.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>Quadruped head.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">NbDivisions		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
The number of divisions on the neck if a spine head assembly is choosen.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
2			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">StretchType		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
Whether the neck spine should stretch automatically to follow the head, or try to maintain a constant length.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
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
					<td>Stretches to meet the head controller.					</td>\n\
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
		<td class=\"name\">EarGuideCollection		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Collection of starting objects for ear spring chains.  If empty, no ears are created.		</td>\n\
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
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example makes two heads using the same three \n\
	guide objects. The first head uses a spine, the \n\
	second head uses a skeleton.\n\
*/\n\
var guidecoll = new ActiveXObject(\"XSI.Collection\");\n\
guidecoll.Add( GetPrim(\"Null\", \"Guide_Base\") ); \n\
guidecoll.Add( GetPrim(\"Null\", \"Guide_Neck\") ); \n\
guidecoll.Add( GetPrim(\"Null\", \"Guide_Head\") ); \n\
//\n\
// Can duplicate the neck guide to generate a jaw.\n\
// At least two duplicates are required to create a jaw.\n\
//\n\
jaw0 = GetPrim(\"Null\", \"Guide_Neck1\");  //duplicated neck for jaw\n\
jaw1 = GetPrim(\"Null\", \"Guide_Neck2\");  //duplicated neck for jaw\n\
var lXfm = guidecoll(0).Kinematics.Global.Transform;\n\
lXfm.SetTranslationFromValues(0,0,0);\n\
guidecoll(0).Kinematics.Global.Transform = lXfm;\n\
lXfm.SetTranslationFromValues(0,2,0);\n\
guidecoll(1).Kinematics.Global.Transform = lXfm;\n\
lXfm.SetTranslationFromValues(0,4,0);\n\
guidecoll(2).Kinematics.Global.Transform = lXfm;\n\
lXfm.SetTranslationFromValues(1,2,0); \n\
jaw0.Kinematics.Global.Transform = lXfm; \n\
lXfm.SetTranslationFromValues(2,2,0); \n\
jaw1.Kinematics.Global.Transform = lXfm; \n\
//\n\
// Make the heads.\n\
//\n\
var Head= MakeHead(	ActiveSceneRoot,//parent\n\
					guidecoll,			//guide objects\n\
					\"ABC\",				//prefix\n\
					1,					//spine head and neck\n\
					0,					//biped head\n\
					3,					//nb of spine divisions\n\
					0);					//stretch using spine scale\n\
lXfm.SetTranslationFromValues(-4,0,0);\n\
guidecoll(0).Kinematics.Global.Transform = lXfm;\n\
lXfm.SetTranslationFromValues(-4,2,0);\n\
guidecoll(1).Kinematics.Global.Transform = lXfm;\n\
lXfm.SetTranslationFromValues(-4,4,0);\n\
guidecoll(2).Kinematics.Global.Transform = lXfm;\n\
lXfm.SetTranslationFromValues(-3,2,0); \n\
jaw0.Kinematics.Global.Transform = lXfm; \n\
lXfm.SetTranslationFromValues(-2,2,0); \n\
jaw1.Kinematics.Global.Transform = lXfm; \n\
//\n\
// Can duplicate the head guide to make a longer head.\n\
//\n\
head0= GetPrim(\"Null\", \"Guide_Head1\");  \n\
head1= GetPrim(\"Null\", \"Guide_Head2\");  \n\
head2= GetPrim(\"Null\", \"Guide_Head3\");  \n\
head3= GetPrim(\"Null\", \"Guide_Head4\");  \n\
head4= GetPrim(\"Null\", \"Guide_Head5\");  \n\
lXfm.SetTranslationFromValues(-4,5,0); head0.Kinematics.Global.Transform = lXfm; \n\
lXfm.SetTranslationFromValues(-4,6,0); head1.Kinematics.Global.Transform = lXfm; \n\
lXfm.SetTranslationFromValues(-4,7,0); head2.Kinematics.Global.Transform = lXfm; \n\
lXfm.SetTranslationFromValues(-4,8,0); head3.Kinematics.Global.Transform = lXfm; \n\
lXfm.SetTranslationFromValues(-4,9,0); head4.Kinematics.Global.Transform = lXfm; \n\
//\n\
// Make the skeleton head with extended neck\n\
// \n\
Head = MakeHead(	ActiveSceneRoot,	//parent\n\
					guidecoll,			//guide objects\n\
					\"123\",				//prefix\n\
					0,					//skeleton neck\n\
					0,					//biped head\n\
					3,					//nb of spine divisions\n\
					0);					//stretch using spine scale</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/MakeTorso.html\">MakeTorso</a> <a href=\"#!/url=./si_cmds/MakeSpine.html\">MakeSpine</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";