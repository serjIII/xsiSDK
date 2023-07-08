var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>LinkDeform</title>\n\
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
            <h1>LinkDeform</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">LinkDeform</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Sets up pose-based deformation so that shape animation can be driven by one or more specified parameters \n\
(the position and orientation of an element in a scene, for example). Once the pose-base deformation is \n\
set up using LinkDeform and deform keys are created (using <a href=\"#!/url=./si_cmds/ApplyDeformKey.html\">ApplyDeformKey</a> or \n\
<a href=\"#!/url=./si_cmds/SaveDeformKey.html\">SaveDeformKey</a>), the selected parameters drive the deformation of the geometry. The \n\
resulting deformation is interpolated smoothly between the shapes in the N-space defined by the N \n\
parameters selected.<br /><br />\n\
Pose-based deformation (which is based on multi-linked parameters) allows you to link the shape of a \n\
cluster to several parameters simultaneously. The resulting shapes are smoothly interpolated in the \n\
space defined by the parameters. Pose-based deformations are particularly useful to link the shape of \n\
muscles to bone orientations or other parameters. \n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = LinkDeform( [Cluster], [Parameter list], [LinkWithOri] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns an ISIVTCollection containing an <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> which contains the objects whose numerical parameters are linked with the shape.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Cluster		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Cluster to consider for future deformations 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Parameter list		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of numerical parameters to link with the shape. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Picked in explorer.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">LinkWithOri		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 True to link deformation with rotation.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' This example illustrates how to control the shape of an object (a sphere) based on two parameters\n\
\' its position in x and in z.\n\
NewScene\n\
\' Here we create the geometry that will be deformed\n\
CreatePrim \"Sphere\", \"MeshSurface\"\n\
\' We create the specific cluster that will be deformed\n\
SelectGeometryComponents \"sphere.pnt[4-6,11-13,18-20,25-27,32-34,39-41,46-48,53-55]\"\n\
CreateCluster\n\
\' We link the deformation of the new cluster to the position of the sphere in x and z\n\
LinkDeform \"sphere.polymsh.cls.Point\", \"sphere.kine.global.posz,sphere.kine.global.posx\"\n\
\' Finally we model and save deform keys defining the relationship between the different\n\
\' sphere positions and the shape\n\
Translate \"Sphere\", -10, 0, 0, siAbsolute, siParent, siObj, siX\n\
ActivateVertexSelTool\n\
Scale \"sphere.polymsh.cls.Point\", 0.267441860465116, 1, 1, siRelative, siLocal, siObj, siXYZ\n\
SaveDeformKey \"sphere.polymsh.cls.Point\"\n\
Translate \"Sphere\", 10, 0, 0, siAbsolute, siParent, siObj, siX\n\
Scale \"sphere.polymsh.cls.Point\", 0.313953488372093, 1, 1, siRelative, siLocal, siObj, siXYZ\n\
SaveDeformKey \"sphere.polymsh.cls.Point\"\n\
Translate \"Sphere\", 0, 0, 10, siAbsolute, siParent, siObj, siZ\n\
Scale \"sphere.polymsh.cls.Point\", 1, 1, 0.302325581395349, siRelative, siLocal, siObj, siXYZ\n\
SaveDeformKey \"sphere.polymsh.cls.Point\"\n\
Translate \"Sphere\", 0, 0, -10, siAbsolute, siParent, siObj, siZ\n\
Scale \"sphere.polymsh.cls.Point\", 1, 1, 0.27906976744186, siRelative, siLocal, siObj, siXYZ\n\
SaveDeformKey \"sphere.polymsh.cls.Point\"\n\
\' To see the result translate the sphere in the XZ plane. The multi-link interpolator will\n\
\' calculate a smooth blending between the deform keys over the space defined by the two parameters</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' \n\
\' In this example, an animation is created (on Y axis) on\n\
\' a sphere. A cluster is created with some points of the \n\
\' sphere, and the cluster is \"linked\" for deform with the\n\
\' local YPos parameter of the sphere. In this way, changes\n\
\' on YPos of the sphere will deform its shape. \n\
\' Two deformations (i.e. moves) of the points of the cluster are\n\
\' performed in different frames, and each of the deformation acts\n\
\' as DeformKey.\n\
\' \n\
NewScene\n\
CreatePrim \"Sphere\", \"NurbsSurface\", \"MySphere\"\n\
\' Create anim key of YPos of the sphere, at different frames\n\
SetValue \"PlayControl.Out\", 40\n\
SaveKey \"MySphere.kine.local.posy\", 1, -3.0\n\
SaveKey \"MySphere.kine.local.posy\", 30, 3.0\n\
SaveKey \"MySphere.kine.local.posy\", 40, 1.5\n\
\' Create a cluster in the sphere, and create a LinkDeform\n\
SetSelFilter \"Point\"\n\
AddToSelection \"MySphere.pnt[(0,6),(7,6),(6,6),(5,6),(4,6),(3,6),(6,5),(1,6),(1,5),(2,6),(7,5),(0,5),(2,5),(5,4),(5,5),(4,5)]\" \n\
CreateCluster \n\
LinkDeform \"MySphere.surfmsh.cls.Point\", \"MySphere.kine.local.posy\" \n\
\' Create the first Deform key at frame 1, with translation of\n\
\' points of the cluster\n\
SetValue \"PlayControl.Current\", 1\n\
Translate \"MySphere.pnt[(0,6)]\", -1.74522900164809, 0.27627214396616, -0.027627214396616, siRelative, siView, siObj, siXYZ\n\
Translate \"MySphere.pnt[(0,5)]\", -1.63879153625736, 7.95443183208384E-02, -7.95443183208383E-03, siRelative, siView, siObj, siXYZ\n\
Translate \"MySphere.pnt[(4,6)]\", 2.5, 0.5, 0, siRelative, siView, siObj, siXYZ\n\
Translate \"MySphere.pnt[(4,5)]\", 2.5, -0.3, 0, siRelative, siView, siObj, siXYZ\n\
Translate \"MySphere.pnt[(3,5)]\", 2, -1.5, 0, siRelative, siView, siObj, siXYZ\n\
Translate \"MySphere.pnt[(1,5)]\", -1.5, -0.4, 0, siRelative, siView, siObj, siXYZ\n\
Translate \"MySphere.pnt[(7,6)]\", -1.2, 1.26649251503908, -0.2, siRelative, siView, siObj, siXYZ\n\
Translate \"MySphere.pnt[(5,6)]\", 1.5, 1.53788376826177, -0.2, siRelative, siView, siObj, siXYZ\n\
SelectObj \"MySphere.surfmsh.cls.Point\"\n\
SaveDeformKey\n\
\' Create the second Deform key at frame 30, with translation of\n\
\' points of the cluster\n\
SetValue \"PlayControl.Current\", 30\n\
Translate \"MySphere.pnt[(0,6)]\", 6.0, -0.5, 0, siRelative, siView, siObj, siXYZ\n\
Translate \"MySphere.pnt[(0,5)]\", 5.4, 0, 0, siRelative, siView, siObj, siXYZ\n\
Translate \"MySphere.pnt[(1,5)]\", 4.0, 1.3, -0.13, siRelative, siView, siObj, siXYZ\n\
Translate \"MySphere.pnt[(4,5)]\", -5.5, 0.12, 0, siRelative, siView, siObj, siXYZ\n\
Translate \"MySphere.pnt[(4,6)]\", -6.0, -0.5, 0, siRelative, siView, siObj, siXYZ\n\
Translate \"MySphere.pnt[(5,4)]\", -1.7, 0.5, 0, siRelative, siView, siObj, siXYZ\n\
Translate \"MySphere.pnt[(3,6)]\", -2.0, 0, 0, siRelative, siView, siObj, siXYZ\n\
SaveDeformKey \"MySphere.surfmsh.cls.Point\"\n\
\' Playback the animation\n\
SetDisplayMode \"Camera\", \"textured\"\n\
PlayForwardsFromStart</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/SaveDeformKey.html\">SaveDeformKey</a> <a href=\"#!/url=./si_cmds/ApplyDeformKey.html\">ApplyDeformKey</a> <a href=\"#!/url=./si_cmds/LinkDeformWithOri.html\">LinkDeformWithOri</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";