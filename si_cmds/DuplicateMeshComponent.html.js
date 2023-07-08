var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>DuplicateMeshComponent</title>\n\
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
            <h1>DuplicateMeshComponent</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">DuplicateMeshComponent</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.5</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>Duplicates (aka: extrudes) a mesh component</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>DuplicateMeshComponent( [ConnectionSet], [ImmediateMode], [Length], [NbSubdivs], [Merge], [Tx], [Ty], [Tz], [Rx], [Ry], [Rz], [Sx], [Sy], [Sz], [DuplicatePolygons] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">ConnectionSet		</td>\n\
		<td><a href=\"#!/url=./files/cnxset.htm\">ConnectionSet</a>		</td>\n\
		<td>\n\
 Specifies the components to duplicate (extrude).  			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Currently selected objects are used as the main group.<br /><br />Warning: An error occurs if the connection set is invalid. Please verify the connection set required for this operator to avoid breaking your scripts.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ImmediateMode		</td>\n\
		<td><a href=\"#!/url=./si_om/siOperationMode.html\">siOperationMode</a>		</td>\n\
		<td>\n\
Specifies whether or not the operator should be immediately frozen.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siPersistentOperation			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Length		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Length of the extrusion 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">NbSubdivs		</td>\n\
		<td><a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
 Number of subdivisions to use 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Merge		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 Whether or not adjacent components should be handled as a whole or independently 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
1			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Tx		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Translation in X to apply to each subdivision 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Ty		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Translation in Y to apply to each subdivision 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Tz		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Translation in Z to apply to each subdivision 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Rx		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Euler Rotation in X to apply to each subdivision 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Ry		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Euler Rotation in Y to apply to each subdivision 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Rz		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Euler Rotation in Z to apply to each subdivision 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Sx		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Scaling in X to apply to each subdivision 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
1			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Sy		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Scaling in Y to apply to each subdivision 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
1			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Sz		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Scaling in Z to apply to each subdivision 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
1			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">DuplicatePolygons		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 Specifies if polygons should be duplicated (TRUE) or extruded (FALSE) 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'This example will duplicate  an edge.\n\
newscene\n\
\'Create 4 spheres and place them\n\
CreatePrim \"Sphere\", \"MeshSurface\", \"Sphere1\"\n\
CreatePrim \"Sphere\", \"MeshSurface\", \"Sphere2\"\n\
CreatePrim \"Sphere\", \"MeshSurface\", \"Sphere3\"\n\
CreatePrim \"Sphere\", \"MeshSurface\", \"Sphere4\"\n\
Translate \"Sphere1\", -8, 8,  0, siAbsolute, siParent, siObj, siXYZ\n\
Translate \"Sphere2\",  8, 8,  0, siAbsolute, siParent, siObj, siXYZ\n\
Translate \"Sphere3\", -8, -8, 0, siAbsolute, siParent, siObj, siXYZ\n\
Translate \"Sphere4\",  8, -8, 0, siAbsolute, siParent, siObj, siXYZ\n\
\'Duplicate polygons (extrude) along common normal.\n\
\'Duplicate is 10 SOFTIMAGE units long and has 10 subdivisions.\n\
\'First case polygons are merged\n\
\'Second case, they are not merged.  Note how they move along their local normal\n\
DuplicateMeshComponent \"sphere1.poly[12,13,20,21]\", siUnspecified, 10, 10, True\n\
DuplicateMeshComponent \"sphere1.poly[10,18]\", siUnspecified, 10, 10, False\n\
\'Same basic duplication as previous but with translation in X of 1 unit at each step.\n\
\'X translation is applied in the local reference frame of the selected polygons.\n\
DuplicateMeshComponent \"sphere2.poly[12,13,20,21]\", siUnspecified, 10, 10, True, 1,0,0\n\
DuplicateMeshComponent \"sphere2.poly[10,18]\", siUnspecified, 10, 10, False, 1,0,0\n\
\'Same basic duplication as previous but with rotation around Y axis of 10 degrees (normal to the polygons).\n\
\'Y axis rotation is applied in the local reference frame of the selected polygons.\n\
DuplicateMeshComponent \"sphere3.poly[12,13,20,21]\", siUnspecified, 10, 10, True, 1, 0, 0, 0, 10, 0\n\
DuplicateMeshComponent \"sphere3.poly[10,18]\", siUnspecified, 10, 10, False, 1, 0, 0, 0, 10, 0\n\
\'Same basic duplication as previous but with scaling factor of 0.8 in X and Z of 0.8.\n\
\'X and Z scaling is applied in the local reference frame of the selected polygons.\n\
DuplicateMeshComponent \"sphere4.poly[12,13,20,21]\", siUnspecified, 10, 10, True, 1, 0, 0, 0, 10, 0, 0.8, 1, 0.8\n\
DuplicateMeshComponent \"sphere4.poly[10,18]\", siUnspecified, 10, 10, False, 1, 0, 0, 0, 10, 0, 0.8, 1, 0.8\n\
\'Duplicate also applies to other components: points and edges\n\
DuplicateMeshComponent \"sphere1.pnt[100]\", siUnspecified, 10, 10\n\
DuplicateMeshComponent \"sphere2.edge[204]\", siUnspecified, 10, 10\n\
\'Duplicated objects can be mixed. Here we apply duplicate to points and edges.\n\
DuplicateMeshComponent \"sphere3.pnt[100], sphere3.edge[204]\", siUnspecified, 10, 10</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/ApplyTopoOp.html\">ApplyTopoOp</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";