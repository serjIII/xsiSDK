var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ApplyDeformBySpine</title>\n\
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
            <h1>ApplyDeformBySpine</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ApplyDeformBySpine</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Applies a deformation by spine, which causes objects and/or clusters to be deformed in response to the \n\
deformations of one or more curves.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = ApplyDeformBySpine( ConnectionSet, [ConstructionMode] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns the Object Name of the newly created Spine WeightMap operator(s).</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ConnectionSet		</td>\n\
		<td><a href=\"#!/url=./files/cnxset.htm\">ConnectionSet</a>		</td>\n\
		<td>\n\
 Specifies the objects connected to an operator. <br /><br />The first group of the ConnectionSet contains vertex based objects. The second group of the ConnectionSet contains NURBS curve objects. <br /><br />		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ConstructionMode		</td>\n\
		<td><a href=\"#!/url=./si_om/siConstructionMode.html\">siConstructionMode</a>		</td>\n\
		<td>\n\
The mode indicating the purpose of the deformations.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current construction mode.			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'This example shows how to deform a model using two circles.\n\
\'The circles are the curve spines used to deform the model.\n\
\'Get model and curves.\n\
newscene\n\
GetPresetModel \"Man\", \"Man\"\n\
freezeobj\n\
\'Circles are positioned around the torso.\n\
CreatePrim \"Circle\", \"NurbsCurve\"\n\
Rotate , 90, 0, 0, siAbsolute, siParent, siObj, siX\n\
Translate , 0, 12.0711948943489, 0, siRelative, siView, siObj, siXYZ\n\
Duplicate \"circle\", , 2, 1, 1, 0, 0, 1, 0, 1\n\
Translate , 0, 3.15622985769674, 0, siRelative, siView, siObj, siXYZ\n\
Scale , 0.66, 0.66, 0.66, siRelative, siLocal, siObj, siXYZ\n\
\'Deform by spine is launched.\n\
\'The command\'s interaction permits picking a second circle.\n\
SelectObj \"circle\", , True\n\
Scale , 0.66, 0.66, 0.66, siRelative, siLocal, siObj, siXYZ\n\
SelectObj \"Man.Man\", , True\n\
ApplyDeformBySpine \"Man.Man;circle1,circle\"\n\
\'Scale circles to change shape of the object.\n\
SelectObj \"circle\", , True\n\
Scale , 0.1, 0.1, 0.1, siRelative, siLocal, siObj, siXYZ\n\
SelectObj \"circle1\", , True\n\
Scale , 2.0, 2.0, 2.0, siRelative, siLocal, siObj, siXYZ\n\
\'Deform by spine has an adjunct property like flexible envelopes do.\n\
\'It is found under DeformBySpineWeightCls cluster.\n\
\'Here we change the radius of influence.\n\
SetValue \"Man.Man.polymsh.cls.DeformBySpineWeightCls.Envelope_Weights.spinewgtmapop.radius\", 3\n\
\'View results\n\
SelectObj \"Man.Man\", , True\n\
SetValue \"Man.Man.geomapprox.gapproxmosl,Man.Man.geomapprox.gapproxmordrsl\", Array(1, 1)\n\
SetDisplayMode \"Camera\", \"shaded\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' Create a Mesh Grid and Nurbs circle objects:\n\
set CircleObj = CreatePrim( \"Circle\", \"NurbsCurve\" )\n\
set GridObj = CreatePrim( \"Grid\", \"MeshSurface\" )\n\
Rotate , 90, 0, 0\n\
\' Apply a Spine deform on the Grid, using the circle as deformer:\n\
DeformSpineOp = ApplyDeformBySpine( GridObj &amp; \";\" &amp; CircleObj )\n\
Application.LogMessage DeformSpineOp\n\
\' Now translate the circle and notice the deformation:\n\
Translate CircleObj, 0, 0, 3\n\
\'========================================================\n\
\'OUTPUT:\n\
\'INFO : \"grid.polymsh.cls.DeformBySpineWeightCls.Envelope_Weights.spinewgtmapop\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/SIApplyDeformBySpine.html\">SIApplyDeformBySpine</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";