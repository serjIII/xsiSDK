var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>TransferShapeAnimationAcrossGenOp</title>\n\
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
            <h1>TransferShapeAnimationAcrossGenOp</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">TransferShapeAnimationAcrossGenOp</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Transfers the shape animation from the specified object to the output geometry connected to the specified generator operator.\n\
This command takes care of transferring all the shape animation information contained in the mixer to the\n\
destination object.<br /><br />\n\
Note: The shapekey cluster properties should have been transferred previously using \n\
<a href=\"#!/url=./si_cmds/TransferClusterPropertiesAcrossGenOp.html\">TransferClusterPropertiesAcrossGenOp</a>. \n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>TransferShapeAnimationAcrossGenOp( Operator, Object );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Operator		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Specifies the generator operator for which the transfer of shape animation will be performed. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Object		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Specifies an input object from which the shape animation will be gathered.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example transfers shape animation across generator operators.\n\
*/\n\
NewScene( null, false );\n\
SetValue(\"Context.constructionmode\", 1, null);\n\
CreatePrim(\"Sphere\", \"MeshSurface\", null, null);\n\
CreatePrim(\"Cone\", \"MeshSurface\", null, null);\n\
//Create some shape animation\n\
ActivateVertexSelTool(null);\n\
SelectGeometryComponents(\"cone.pnt[1]\");\n\
Translate(null, 2.4284957846203, 0, 0, siRelative, siGlobal, siObj, siXYZ, null, null, siXYZ, null, null, null, null, null, null, 1);\n\
SaveShapeKey(\"cone.pnt[1]\", null, null, 1, null, null, null, null, siShapeObjectReferenceMode);\n\
SetValue(\"PlayControl.Key\", 48, null);\n\
SetValue(\"PlayControl.Current\", 48, null);\n\
ActivateVertexSelTool(null);\n\
Translate(null, -6.11040874839948, 0, 0, siRelative, siGlobal, siObj, siXYZ, null, null, siXYZ, null, null, null, null, null, null, 1);\n\
SaveShapeKey(\"cone.pnt[1]\", null, null, 48, null, null, null, null, siShapeObjectReferenceMode);\n\
ActivateObjectSelTool(null);\n\
SelectObj(\"sphere,polymsh\", null, true);\n\
SelectFilter(\"object\");\n\
AddToSelection(\"cone\", null, true);\n\
ApplyGenOp(\"MeshMerge\", null, \"sphere,cone\", siUnspecified, siPersistentOperation, siKeepGenOpInputs, null);\n\
SelectObj(\"polymsh.polymsh.mergemesh\", null, null);\n\
//Transfer the cluster properties on the generated geometry\n\
TransferClusterPropertiesAcrossGenOp(\"polymsh.polymsh.mergemesh\", \"polymsh\", \"cone.polymsh.cls.Shape.ResultClusterKey\", \"ResultClusterKey\", true);\n\
TransferClusterPropertiesAcrossGenOp(\"polymsh.polymsh.mergemesh\", \"polymsh\", \"cone.polymsh.cls.Shape.ShapeKey\", \"ShapeKey\", true);\n\
TransferClusterPropertiesAcrossGenOp(\"polymsh.polymsh.mergemesh\", \"polymsh\", \"cone.polymsh.cls.Shape.ShapeKey1\", \"ShapeKey1\", true);\n\
//Transfer the mixer part of the animation across the generated geometry \n\
TransferShapeAnimationAcrossGenOp(\"polymsh.polymsh.mergemesh\", \"cone\");\n\
SetValue(\"cone.polymsh.clustershapecombiner.Mute\", true, null);</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/TransferShapeAnimation.html\">TransferShapeAnimation</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";