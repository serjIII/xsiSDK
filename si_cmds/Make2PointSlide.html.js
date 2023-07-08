var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Make2PointSlide</title>\n\
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
            <h1>Make2PointSlide</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Make2PointSlide</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Uses two guide objects to create a two-point slide setup. A two-point slide setup consists of \'Bind\' object \n\
and two control objects, \'Top\' and \'Base\' that control the Bind object by a two point constraint. Optionally \n\
the orientation of the Bind object can be controlled with an upvector, and constrained to avoid an implicit \n\
volume object (bounding volume). \n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oPointSlide = Make2PointSlide( [Prefix], GuidePoint1, GuidePoint2, Parent1, Parent2, [UpVector], [BoundingVolume] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns a <a href=\"#!/url=./files/CDKPointSlide.htm\">PointSlide</a> JScript object.</p></div>\n\
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
		<td class=\"name\">GuidePoint1		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
3D Object, whose pose will be assumed by the first slide object.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">GuidePoint2		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
3D Object, whose pose will be assumed by the second slide object.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Parent1		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The parent under which the first slide object will be placed.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Parent2		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The parent under which the second slide object will be placed.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">UpVector		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
An upvector object to control the orientation of the Binding Point.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">BoundingVolume		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
A bounding volume implicit to stay outside of when sliding.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example creates a two point slide where the bind null is bounding\n\
	volume constrained and controlled by an upvector.\n\
*/\n\
var Target1 	= GetPrim(\"Null\", \"Target1\", null);\n\
var Target2 	= GetPrim(\"Null\", \"Target2\", null);\n\
var Parent1 	= GetPrim(\"Null\", \"Parent1\", null);\n\
var Parent2 	= GetPrim(\"Null\", \"Parent2\", null);\n\
var UpVector 	= GetPrim(\"Null\", \"UpV\", null);\n\
var BoundingVol = GetPrim(\"Sphere\", \"BoundingVol\" , null);\n\
//\n\
// Position the guide objects\n\
//\n\
var lXfm = Target1.Kinematics.Global.Transform;\n\
lXfm.SetTranslationFromValues(-2,0,0);\n\
Target1.Kinematics.Global.Transform = lXfm;\n\
lXfm.SetTranslationFromValues(-2,5,0);\n\
Target2.Kinematics.Global.Transform = lXfm;\n\
// upvector\n\
lXfm.SetTranslationFromValues(0,3,0);\n\
UpVector.Kinematics.Global.Transform = lXfm;\n\
var TwoPtSlide = Make2PointSlide(\"ABC\",Target1,Target2,Parent1,Parent2,UpVector,BoundingVol);\n\
logmessage (\"Data in the returned two point slide object:\");\n\
logmessage (\"-------------------------------------------\");\n\
logmessage (\"Bind Null : \" + TwoPtSlide.BindNull);\n\
logmessage (\"Top  Null : \" + TwoPtSlide.TopNull);\n\
logmessage (\"Base Null : \" + TwoPtSlide.BaseNull);\n\
logmessage (\"Constraint: \" + TwoPtSlide.Constraint);\n\
logmessage (\"Hidden    : \" + TwoPtSlide.Hidden);\n\
logmessage (\"Envelope  : \" + TwoPtSlide.Envelope);\n\
//results of running this script: \n\
//INFO : \"Data in the returned two point slide object:\"\n\
//INFO : \"-------------------------------------------\"\n\
//INFO : \"Bind Null : ABCBind\"\n\
//INFO : \"Top  Null : ABCTop\"\n\
//INFO : \"Base Null : ABCBase\"\n\
//INFO : \"Constraint: ABCBind.kine.2ptscns\"\n\
//INFO : \"Hidden    : ABCTop,ABCBase\"\n\
//INFO : \"Envelope  : ABCBind\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/MakeThighSlide.html\">MakeThighSlide</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";