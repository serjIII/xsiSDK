var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ResetFlexEnvPtsAssignment</title>\n\
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
            <h1>ResetFlexEnvPtsAssignment</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ResetFlexEnvPtsAssignment</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Resets the assignment of envelope points so that they are no longer affected\n\
by deformer objects. Every point in an envelope is assigned to one or more\n\
deformers. For each point, weights control the relative influence of its\n\
deformers. <br /><br />\n\
Deformers are the objects that control the shape of the envelope. You pick\n\
the deformers when you first create an envelope deformation, but you can\n\
still add and remove deformers later if necessary. <br /><br />\n\
Although it is common to use skeletons as deformers, you can actually use\n\
any object. The geometry of a deformer does not matter because the points\n\
of the envelope are assigned to its center. (Bones are the exception--points\n\
are deformed by the whole length of a bone.) <br /><br />\n\
Whether you use a cube, a sphere, or a null, all transformations of the\n\
surrounding envelope are relative in size, orientation, and position to\n\
the deformer\'s center, not its shape. Nulls and implicit objects are good\n\
choices because they do not render.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = ResetFlexEnvPtsAssignment( [SubComp], [ConnectionSet] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Nothing</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SubComp		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 List of points to be reassigned. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ConnectionSet		</td>\n\
		<td><a href=\"#!/url=./files/cnxset.htm\">ConnectionSet</a>		</td>\n\
		<td>\n\
 Specifies the envelope and the bone.  			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Currently selected objects are used as the main group.<br /><br />Warning: An error occurs if the connection set is invalid. Please verify the connection set required for this operator to avoid breaking your scripts.			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'This example creates an envelope on \"BodyMan\" model, with less bones\n\
\'than usual (2 nulls for the body, 1 bone per arm).\n\
\'\n\
\'The default envelope assignment doesn\'t give a correct separation\n\
\'between the arms and the body, so we will use LocalAssignFlexEnv,\n\
\'SISmoothEnvWght and SymEnvWeight in order to modify the weight assignment.\n\
NewScene\n\
GetPresetModel \"Man\", \"Man\"\n\
\'Create basic skeletons: 2 for the arms, plus 2 nulls for the body\n\
Create2DSkeleton -1.9, 17.0, 0, -5.15, 17.0, 0, 0, 0, 0, 4\n\
Set Null0 = GetPrim(\"Null\")\n\
Translate Null0, 0, 15.049359948647, 0, siRelative, siView, siObj, siXYZ\n\
Set Null1 = GetPrim(\"Null\")\n\
Translate Null1, 0, 3.76822515334527, 0, siRelative, siView, siObj, siXYZ\n\
DuplicateSymmetry \"B:root\", True, False, 1, 0, 0, 0, True\n\
ApplyFlexEnv \"Man.Man;root1,bone1,eff1,root,bone,eff,null,null1\", False\n\
\'We want the head and the center of the body to be only assigned\n\
\'to the 2 Nulls, so let\'s do it using LocalAssignFlexEnv\n\
ResetFlexEnvPtsAssignment \"Man.Man.pnt[0,2-23,25,26,28-30,34-99,101,103-109,\"_\n\
&amp; \"113,116-120,122,124-143,145-203,212-220,222-227,229-250,252-279,\"_\n\
&amp; \"281-284,286-295,297-299,302,304-307,310-315,317,319,321,322,324,\"_\n\
&amp; \"326-329,332-350,353-359,361,362,365,366,368-379,381,383,385,387,\"_\n\
&amp; \"389,391,393,395-414,625,629-694,696,698-704,708,711-715,717,719-738,\"_\n\
&amp; \"740-778,787-795,797-802,804-825,827-854,856-859,861-870,872-874,877,\"_\n\
&amp; \"879-882,885-890,892,894,896,897,899,901-904,907-925,928-934,936,937,\"_\n\
&amp; \"940,941,943-954,956,958,960,962,964,966,968,970-989]\",_\n\
\"Man.Man;null,null1\"\n\
Rotate \"bone\", 0, 0, 58.5, siRelative, siAdd, siObj, siXYZ\n\
Translate Null1, 0, 2, 4.0, siRelative, siView, siObj, siXYZ\n\
\'Because of the local reassignment, we can see that the shoulder\'s weight\n\
\'assignation is no longer smooth. Let\'s smooth it using SISmoothEnvWght.\n\
\'We increase the smoothing depth for better results.\n\
Set SmoothOp = SISmoothEnvWght( , \"Man.Man.pnt[0,2-23,25,26,28-30,34-99,\"_\n\
&amp; \"101,103-109,113,116-120,122,124-143,145-183,186-189,197-203,215,217-219,\"_\n\
&amp; \"221,228,229,251,259,271,280,285,287,289,290,292,294,296,298,300,301,303,\"_\n\
&amp; \"307-309,316,318,320,322,323,325,330,331,333,338,341,345,349,351,352,360,\"_\n\
&amp; \"363,364,366,367,369,371,402-406,409-432,434,436,439-446,625,629-694,696,\"_\n\
&amp; \"698-700,702,703,708,711-715,717,719-738,740-778,793,804,834,864,865,867,\"_\n\
&amp; \"873,897,908,913,924,941,944,977,980,981,985,986,989]\")\n\
SetValue SmoothOp &amp; \".neighborhooddepth\", 3\n\
Rotate \"bone1\", 0, 0, 59.625, siRelative, siAdd, siObj, siXYZ\n\
\'The same problem occurs on the right shoulder. Since we have corrected the\n\
\'left shoulder, let\'s simply mirror the weights from left to right in order\n\
\'to propagate the changes symmetrically.\n\
Set SymTemplate = CreateSymmetryMappingTemplate(\"Man.Man\", True, 0, True)\n\
SymEnvWeight , \"Man.Man.pnt[0-32,34-101,103-113,115-219,221-224,226-230,\"_\n\
&amp; \"233-236,239-262,264-266,268-275,277-285,287-318,320-326,328-354,356-390,\"_\n\
&amp; \"392-400,402-621]\", SymTemplate</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/ApplyFlexEnv.html\">ApplyFlexEnv</a> <a href=\"#!/url=./si_cmds/SILocalAssignFlexEnv.html\">SILocalAssignFlexEnv</a> <a href=\"#!/url=./si_cmds/SIApplyFlexEnv.html\">SIApplyFlexEnv</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";