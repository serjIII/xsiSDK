var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MakeThighSlide</title>\n\
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
            <h1>MakeThighSlide</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">MakeThighSlide</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Creates a two-point slide setup (a bind null two-point constrained to two control objects, \n\
see <a href=\"#!/url=./si_cmds/Make2PointSlide.html\">Make2PointSlide</a>) and a spherical thigh volume object that bounding \n\
volume constrains the bind null. The collection of guide objects passed to MakeThighSlide \n\
determines the position of the slide, and the proportions of the thigh volume. <br /><br />\n\
The guide collection contains 5 objects. The first two objects are to position the top and \n\
bottom control objects of the slide. The bind point will be the midpoint between these two \n\
objects, and also determines the center of the thigh volume. The third object is the bottom \n\
of the hip, and will determine the radius of the thigh volume. The fourth and fifth objects \n\
are the base and tip of the thigh bone (leg and knee joints). The vector created by these \n\
two points defines the thigh bone and is used to align the thigh volume with the thigh bone.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oThighSlide = MakeThighSlide( [Prefix], GuideObjectCollection, UpperParent, LowerParent );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns a <a href=\"#!/url=./files/CDKThighSlide.htm\">ThighSlide</a> JScript object.</p></div>\n\
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
The name prefix for the newly created slide nulls.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">GuideObjectCollection		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
A list of items to search for when making the thigh slide. It must have a minimum of 5 items where:			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">Item 0					</td>\n\
					<td>Guide object for top of Slide					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">Item 1					</td>\n\
					<td>Guide object for bottom of Slide					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">Item 2					</td>\n\
					<td>Guide object for bottom of Slide at side of the hip					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">Item 3					</td>\n\
					<td>Guide object down center of thigh at start of leg					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">Item 4					</td>\n\
					<td>Guide object down center of thigh at knee					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">UpperParent		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The parent object for the upper part of the thigh slide assembly, typically the hip.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">LowerParent		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The parent object for the lower part of the thigh slide assembly, typically the thigh bone.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example creates a thigh slide setup on a one bone chain.\n\
	MakeThighSlide needs a collection of five guide objects as an argument.\n\
	Build a collection of five guide nulls and position them.\n\
*/\n\
var guidecoll = new ActiveXObject(\"XSI.Collection\");\n\
guidecoll.Add( GetPrim(\"Null\", \"SlideTop\") ); \n\
guidecoll.Add( GetPrim(\"Null\", \"SlideBottom\") ); \n\
guidecoll.Add( GetPrim(\"Null\", \"SlideSideHip\") ); \n\
guidecoll.Add( GetPrim(\"Null\", \"SlideThighLeg\") ); \n\
guidecoll.Add( GetPrim(\"Null\", \"SlideThighKnee\") ); \n\
//\n\
// Make the slide control nulls red\n\
//\n\
MakeLocal(guidecoll(0)+\".display\", siDefaultPropagation);\n\
SetValue( guidecoll(0)+\".display.wirecol\", 15, null);\n\
MakeLocal(guidecoll(1)+\".display\", siDefaultPropagation);\n\
SetValue( guidecoll(1)+\".display.wirecol\", 15, null);\n\
//\n\
// Position the guide objects\n\
//\n\
var lXfm = guidecoll(0).Kinematics.Global.Transform;\n\
// slide control guides\n\
lXfm.SetTranslationFromValues(-2,3,0);\n\
guidecoll(0).Kinematics.Global.Transform = lXfm;\n\
lXfm.SetTranslationFromValues(-1,-1,0);\n\
guidecoll(1).Kinematics.Global.Transform = lXfm;\n\
// hip bottom\n\
lXfm.SetTranslationFromValues(-6,0,0);\n\
guidecoll(2).Kinematics.Global.Transform = lXfm;\n\
// thigh bone base and tip\n\
var vThighBase = XSIMath.CreateVector3();\n\
var vThighTip = XSIMath.CreateVector3();\n\
vThighBase.Set(-3,3,0);\n\
vThighTip.Set(-3.5,-4,0);\n\
lXfm.SetTranslation(vThighBase);\n\
guidecoll(3).Kinematics.Global.Transform = lXfm;\n\
lXfm.SetTranslation(vThighTip);\n\
guidecoll(4).Kinematics.Global.Transform = lXfm;\n\
// Create a bone where the thigh bone is\n\
var ThighChain = ActiveSceneRoot.Add2DChain(vThighBase, vThighTip);\n\
var ThighSlide = MakeThighSlide(\"THIGH_\", guidecoll, GetPrim(\"Null\", \"UpperParent\"), ThighChain.Bones(0) );\n\
logmessage (\"Data in the returned thigh slide object:\");\n\
logmessage (\"---------------------------------------\");\n\
logmessage (\"Bind Null : \" + ThighSlide.BindNull);\n\
logmessage (\"Top  Null : \" + ThighSlide.TopNull);\n\
logmessage (\"Base Null : \" + ThighSlide.BaseNull);\n\
logmessage (\"Volume    : \" + ThighSlide.Volume);\n\
//INFO : \"Data in the returned thigh slide object:\"\n\
//INFO : \"---------------------------------------\"\n\
//INFO : \"Bind Null : THIGH_Bind\"\n\
//INFO : \"Top  Null : THIGH_Top\"\n\
//INFO : \"Base Null : THIGH_Base\"\n\
//INFO : \"Volume    : THIGH_ThighVolume\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/Make2PointSlide.html\">Make2PointSlide</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";