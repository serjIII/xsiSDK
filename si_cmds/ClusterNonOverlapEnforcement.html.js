var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ClusterNonOverlapEnforcement</title>\n\
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
            <h1>ClusterNonOverlapEnforcement</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ClusterNonOverlapEnforcement</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Resolves the ambiguity when clusters overlap in a context of a given property \n\
type (e.g.: material). This command is used primarily by <a href=\"#!/url=./si_cmds/ApplyShader.html\">ApplyShader</a>.<br /><br />\n\
It either removes the overlap from the selected clusters, from the existing clusters, or \n\
simply lets the overlap happen.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = ClusterNonOverlapEnforcement( InputObjs, Property, ActionWhenLocalMaterialsOverlap );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns an <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> containing the clusters found to be overlapping with the target cluster(s).</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">InputObjs		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of clusters (probably selected) against which all clusters will be tested for overlapping.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Property		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Example of a property the existing clusters must have in order to be tested.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ActionWhenLocalMaterialsOverlap		</td>\n\
		<td><a href=\"#!/url=./si_om/siActionWhenLocalMaterialsOverlap.html\">siActionWhenLocalMaterialsOverlap</a>		</td>\n\
		<td>\n\
What to do with the clusters found to be overlapping with the target cluster(s).			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siRemoveFromSelectedClusters			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' The following example demonstrates how to use ClusterNonOverlapEnforcement to resolve conflicts\n\
\' when clusters with a given type of property (eg: material) overlaps.\n\
\' The example is not really a good one because ApplyShader already does all this internally\n\
\' let\'s create a grid\n\
NewScene\n\
CreatePrim \"Grid\", \"MeshSurface\"\n\
\' now lets make the four corners red\n\
ActivateRaycastPolySelTool\n\
SelectGeometryComponents \"grid.poly[0]\"\n\
AddToSelection \"grid.poly[0,1,8,9]\", , True\n\
AddToSelection \"grid.poly[48,49,56,57]\", , True\n\
AddToSelection \"grid.poly[6,7,14,15]\", , True\n\
AddToSelection \"grid.poly[54,55,62,LAST]\", , True\n\
set l_Shader = ApplyShader\n\
SetValue \"grid.polymsh.cls.Polygon.Material.Phong.diffuse.red\", 1\n\
SetValue \"grid.polymsh.cls.Polygon.Material.Phong.diffuse.green\", 0\n\
SetValue \"grid.polymsh.cls.Polygon.Material.Phong.diffuse.blue\", 0\n\
SetDisplayMode \"Views.ViewA.TopCamera\", \"shaded\"\n\
\' to make the remaining polygons green lets simply select\n\
\' all the polygons and use ClusterNonOverlapEnforcement with\n\
\' siRemoveFromSelectedClusters to not override the corners\n\
SelectAllUsingFilter \"Polygon\", siCheckComponentVisibility\n\
set l_Cluster = CreateCluster\n\
ClusterNonOverlapEnforcement l_Cluster, \"grid.polymsh.cls.Polygon.Material\", siRemoveFromSelectedClusters\n\
ApplyShader\n\
SetValue \"grid.polymsh.cls.Polygon1.Material.Phong.diffuse.red\", 0\n\
SetValue \"grid.polymsh.cls.Polygon1.Material.Phong.diffuse.green\", 1\n\
SetValue \"grid.polymsh.cls.Polygon1.Material.Phong.diffuse.blue\", 0\n\
\' now to make the 4 polygons blue in the center\n\
\' lets use ClusterNonOverlapEnforcement this time with siRemoveFromExistingClusters\n\
SelectGeometryComponents \"grid.poly[27,28,35,36]\"\n\
set l_Cluster = CreateCluster\n\
ClusterNonOverlapEnforcement l_Cluster, \"grid.polymsh.cls.Polygon.Material\", siRemoveFromExistingClusters\n\
ApplyShader\n\
SetValue \"grid.polymsh.cls.Polygon2.Material.Phong.diffuse.red\", 0\n\
SetValue \"grid.polymsh.cls.Polygon2.Material.Phong.diffuse.green\", 0\n\
SetValue \"grid.polymsh.cls.Polygon2.Material.Phong.diffuse.blue\", 1\n\
DeselectAll</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/ApplyShader.html\">ApplyShader</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";