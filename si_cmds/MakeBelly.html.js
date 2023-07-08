var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MakeBelly</title>\n\
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
            <h1>MakeBelly</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">MakeBelly</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Creates a belly rig consisting of two springs attached to a rectangular rod. The rod is a one-bone \n\
chain created using two guide objects. The guide objects determine the top and bottom position of \n\
the rod. One spring connects the base of the rod to the given hip object, the other spring connects \n\
the top of the rod to the vertebra object. The ForwardRotationPerc argument can be used to move the \n\
spring connection points away from the hip and vertebra closer to the rod. \n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oBelly = MakeBelly( HipObject, VertebraObject, GuideObjectCollection, [ForwardRotationPerc] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns a <a href=\"#!/url=./files/CDKBelly.htm\">Belly</a> JScript object.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">HipObject		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The rigging parent that makes up the lower part of the belly assembly.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">VertebraObject		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The rigging parent for the upper part of the assembly. Typically the first vertebra after the hip.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">GuideObjectCollection		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
A collection of two objects in the order: the lower stomach guide marker; the upper stomach guide marker.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ForwardRotationPerc		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
The percentage the rotation points of the belly mass are forward from the spine and hip plate.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0.25			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example creates a belly attached to a hip icon.\n\
	As the hip is rotated or translated the belly will\n\
	swing with it.	\n\
*/\n\
//\n\
// Create and position the hip\n\
//\n\
var guide = GetPrim(\"Null\", \"Guide_Hip\") \n\
var hip = MakeHip(guide,\n\
		0,3,-1.5,	//top  XYZ\n\
		4,0,0);	//side XYZ\n\
var lXfm = hip.Kinematics.Global.Transform;\n\
lXfm.SetTranslationFromValues(0,0,-4);\n\
hip.Kinematics.Global.Transform = lXfm;\n\
//\n\
// Create a null to act as the base of the spine\n\
// parent it to and position it above the hip\n\
//\n\
var Vertebra = GetPrim(\"Null\", \"Vertebra\"); \n\
var lXfm = Vertebra.Kinematics.Global.Transform;\n\
lXfm.SetTranslationFromValues(0,4,-5);\n\
Vertebra.Kinematics.Global.Transform = lXfm;\n\
hip.AddChild(Vertebra);\n\
//\n\
// Position the stomach guides\n\
//\n\
var guidecoll = new ActiveXObject(\"XSI.Collection\");\n\
guidecoll.Add( GetPrim(\"Null\", \"LowerStomach\") ); \n\
guidecoll.Add( GetPrim(\"Null\", \"UpperStomach\") ); \n\
var lXfm = guidecoll(0).Kinematics.Global.Transform;\n\
lXfm.SetTranslationFromValues(0,0,0);\n\
guidecoll(0).Kinematics.Global.Transform = lXfm;\n\
lXfm.SetTranslationFromValues(0,4,0);\n\
guidecoll(1).Kinematics.Global.Transform = lXfm;\n\
var Belly = MakeBelly(hip, Vertebra , guidecoll);\n\
DumpBelly(Belly);\n\
function DumpBelly(inBelly)\n\
{\n\
	logmessage (\"Data in the returned belly object:\");\n\
	logmessage (\"---------------------------------\");\n\
	logmessage (\"BellyRoot :\"+ inBelly.BellyRoot  );\n\
	logmessage (\"BellyBone :\"+ inBelly.BellyBone  );\n\
	logmessage (\"BellyEff  :\"+ inBelly.BellyEff   );\n\
	logmessage (\"UpperRoot :\"+ inBelly.UpperRoot  );\n\
	logmessage (\"UpperBone :\"+ inBelly.UpperBone  );\n\
	logmessage (\"UpperEff  :\"+ inBelly.UpperEff   );\n\
	logmessage (\"LowerRoot :\"+ inBelly.LowerRoot  );\n\
	logmessage (\"LowerBone :\"+ inBelly.LowerBone  );\n\
	logmessage (\"LowerEff  :\"+ inBelly.LowerEff   );\n\
	logmessage (\"Hidden    :\"+ inBelly.Hidden     );\n\
	logmessage (\"Envelope  :\"+ inBelly.Envelope   );\n\
}\n\
//results of running this script: \n\
//INFO : \"Data in the returned belly object:\"\n\
//INFO : \"---------------------------------\"\n\
//INFO : \"BellyRoot :BellyRoot\"\n\
//INFO : \"BellyBone :Belly\"\n\
//INFO : \"BellyEff  :BellyEff\"\n\
//INFO : \"UpperRoot :UpperBellyRoot\"\n\
//INFO : \"UpperBone :UpperBellyBone\"\n\
//INFO : \"UpperEff  :UpperBellyEff\"\n\
//INFO : \"LowerRoot :LowerBellyRoot\"\n\
//INFO : \"LowerBone :LowerBellyBone\"\n\
//INFO : \"LowerEff  :LowerBellyEff\"\n\
//INFO : \"Hidden    :BellyRoot,UpperBellyRoot,LowerBellyRoot,BellyEff,UpperBellyEff,LowerBellyEff\"\n\
//INFO : \"Envelope  :Belly\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/MakeTorso.html\">MakeTorso</a> <a href=\"#!/url=./si_cmds/MakeSpine.html\">MakeSpine</a> <a href=\"#!/url=./si_cmds/MakeTail.html\">MakeTail</a> <a href=\"#!/url=./si_cmds/Make2PointSlide.html\">Make2PointSlide</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";