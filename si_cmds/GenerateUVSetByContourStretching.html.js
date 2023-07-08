var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>GenerateUVSetByContourStretching</title>\n\
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
            <h1>GenerateUVSetByContourStretching</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">GenerateUVSetByContourStretching</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Create a new set of texture coordinates by contour stretching the polygon inputs onto a \"surface\" pinned on the contour of the polygon inputs.  \n\
A proper contour of the polygon inputs must exist to guide the contour stretching process.<br /><br /></p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = GenerateUVSetByContourStretching( InputObjs, PropertyName, [ContourStretchingMethod], [MaintainAspect], [CornerPoints] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns an <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> object that contains two <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> objects.\n\
The first is a list of the created properties. The second is a list of the created operators.</p></div>\n\
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
<a href=\"#!/url=./files/listexpr.htm\">List</a> of polygon inputs to which the polygon UV texture coordinate contour stretching operator is applied. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Selected objects			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PropertyName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Name suggestion for the texture coordinates. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ContourStretchingMethod		</td>\n\
		<td><a href=\"#!/url=./si_om/siTxtContourStretchingMethod.html\">siTxtContourStretchingMethod</a>		</td>\n\
		<td>\n\
 Polygon cluster contour stretching method. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siContourStretchingWalkingOnMesh			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">MaintainAspect		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 Whether to maintain aspect ratio. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">CornerPoints		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">Optional list</a> of point inputs that define corners on the contour of the polygon inputs.\n\
Each input may contain from 0 to N points and only up to the first 4 points of each will be used to define corners.\n\
If the input corners are not part of the contour of the polygon inputs then they are ignored.\n\
			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Empty.  Corners are derived automatically internally.			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">Dim l_CreatedObjects\n\
NewScene\n\
\'This example will create a texture space by contour stretching the contour of \n\
\'set of input polygons.\n\
CreatePrim \"Sphere\", \"MeshSurface\"\n\
ActivateRaycastPolySelTool\n\
SelectGeometryComponents \"sphere.poly[3,4,11,12,19,20,27,28]\"\n\
CreateCluster\n\
\'Translate a point and notice that the texture follows the deformation\n\
Translate \"sphere.pnt[20]\", 0.15, 4.8, -0.48, siRelative, siView, siObj, siXYZ\n\
\'Stretch the polygons - Method is by spatial distance, Default for MaintainAspect = FALSE, Pass-in corners.\n\
set l_CreatedObjects = GenerateUVSetByContourStretching( \"sphere.polymsh.cls.Polygon\", \"Texture_Projection\", siContourStretchingSpatialDistance, , \"sphere.pnt[4,6,32,34]\" )\n\
\' What was created\n\
logmessage \"Created Properties: \" &amp; l_CreatedObjects(0)\n\
logmessage \"Created Operators:\" &amp; l_CreatedObjects(1)\n\
\'Use the generated texture space.\n\
ActivateObjectSelTool\n\
ApplyShader , , , , siLetLocalMaterialsOverlap\n\
SIApplyShaderToCnxPoint \"Image\", \"sphere.Material.Phong.diffuse\"\n\
SetInstanceDataValue , \"sphere.Material.Phong.Image.tspace_id\", \"Texture_Projection\"\n\
SetDisplayMode \"Camera\", \"textured\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/ModifyUVSetByContourStretching.html\">ModifyUVSetByContourStretching</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";