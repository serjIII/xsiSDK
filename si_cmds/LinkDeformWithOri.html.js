var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>LinkDeformWithOri</title>\n\
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
            <h1>LinkDeformWithOri</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">LinkDeformWithOri</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Sets up pose-based deformation so that shape animation can be driven by the orientation of one ore more specified \n\
objects. Once the pose-base deformation is set up using LinkDeformOri and deform keys are created (using \n\
<a href=\"#!/url=./si_cmds/ApplyDeformKey.html\">ApplyDeformKey</a> or <a href=\"#!/url=./si_cmds/SaveDeformKey.html\">SaveDeformKey</a>), the orientation of the selected objects \n\
drive the deformation of the geometry. The resulting deformation is interpolated smoothly between the shapes in the \n\
N-space defined by the N object orientations. For better results, the interpolation between the object orientations \n\
is done using quaternions.<br /><br />\n\
Pose-based deformation (which is based on multi-linked parameters) allows you to link the shape of a cluster to several \n\
parameters simultaneously. The resulting shapes are smoothly interpolated in the space defined by the parameters. Pose-based \n\
deformations are particularly useful to link the shape of muscles to bone orientations or other parameters. \n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = LinkDeformWithOri( Cluster, Parameter list, [LinkWithOri] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns an ISIVTCollection containing an <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> which contains the objects whose orientation is linked with the shape.</p></div>\n\
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
<a href=\"#!/url=./files/listexpr.htm\">List</a> of objects whose orientation will be linked with the shape. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Picked in scene.			</p>\n\
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
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example demonstrates how to link the deformation of a bicep \n\
\' to the orientation of the forearm\n\
\'\n\
NewScene , false\n\
SetValue \"Context.constructionmode\", siConstructionModeModeling\n\
\' First we create a cylinder which will serve as our arm for this example\n\
CreatePrim \"Cylinder\", \"MeshSurface\"\n\
SetValue \"cylinder.cylinder.height\", 10\n\
SetValue \"cylinder.polymsh.geom.subdivu\", 16\n\
SetValue \"cylinder.polymsh.geom.subdivv\", 20\n\
\' We create a skeleton for the arm bones\n\
Create2DSkeleton -3.89906576296024E-02, 4.97990543735225, 0, -0.896785125480857, 0.897163120567376, 0, 0, 0, 0, 4\n\
AppendBone \"eff\", -3.89906576296024E-02, -4.92789598108747, 0\n\
ApplyFlexEnv \"cylinder;bone,bone1,eff\", False\n\
\' We create the cluster of points that will model the muscle deformation\n\
CreateCluster \"cylinder.pnt[107-114,130-137,153-160,176-183,199-206,222-229,245-252,268-275,291-298]\"\n\
SetValue \"cylinder.polymsh.cls.Point.Name\", \"Bicep\"\n\
\' Next we will link the shape of the muscle to the orientation of the forearm bone\n\
LinkDeformWithOri \"cylinder.polymsh.cls.Bicep\", \"bone1\"\n\
\' Finally we save a couple of deform keys to define the shape of the muscle at a different arm rotation\n\
\' One can repeat this process for other bone orientations\n\
Translate \"eff\", 3.53515295841729, 4.31678486997636, 0, siRelative, siView, siObj, siXYZ\n\
SetUserPref \"3D_TRANSFO_PROPORTIONAL_CHANGED\", 1\n\
SetValue \"Context.constructionmode\", siConstructionModePrimaryShape\n\
Translate \"cylinder.pnt[157,158,180,181,203,204,226,227,249,250]\", 0.727825609085912, -0.156028368794326, 0, _\n\
	siRelative, siView, siObj, siXYZ\n\
SetValue \"cylinder.polymsh.movecomponentproportional.distlimit\", 1\n\
SaveDeformKey \"cylinder.pnt[157,158,180,181,203,204,226,227,249,250]\"\n\
SetValue \"Context.constructionmode\", siConstructionModeModeling\n\
SetValue \"PlayControl.Key\", 50\n\
SetValue \"PlayControl.Current\", 50\n\
SaveKey \"eff.kine.local.posx,eff.kine.local.posy,eff.kine.local.posz\", 50\n\
FirstFrame\n\
Translate \"eff\", -4.93881663308298, -3.66666666666667, 0, siRelative, siView, siObj, siXYZ\n\
SaveKey \"eff.kine.local.posx,eff.kine.local.posy,eff.kine.local.posz\", 1\n\
PlayForwardsFromStart\n\
\' The result is a deformation that is interpolated in the quaternion orientation space of the lower bone.\n\
\' One can also link the deformation to the orientation of more than one object.</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' \n\
\' The goal of the example is to show the script command\n\
\' \"LinkDeformOri\". \n\
\' Two objects are created; the sphere will be deformed according\n\
\' to the orientation of the cone (rotation around Z axis).\n\
\' First, an animation will be created on the cone (rotation\n\
\' of 90 degrees around Z axis) for playback purpose. \n\
\' A cluster is created with some points of the sphere. \n\
\' The cluster is \"linked\" for deform with the cone, such that \n\
\' changing the orientation of the cone will deform the sphere.\n\
\' Two deformation (i.e. moves) of the points of the cluster are \n\
\' performed at different frames, and each of the deformation acts\n\
\' as DeformKey.\n\
\' \n\
NewScene\n\
SetValue \"Context.constructionmode\", siConstructionModeModeling\n\
SetValue \"PlayControl.Out\", 40\n\
CreatePrim \"Sphere\", \"NurbsSurface\", \"MySphere\"\n\
CreatePrim \"Cone\", \"NurbsSurface\", \"MyCone\"\n\
\' \n\
\' Set key at different frames with different angle\n\
\' to create an animation of the cone.\n\
\'\n\
SaveKey \"MyCone.kine.local.rotz\", 1, -90\n\
SaveKey \"MyCone.kine.local.rotz\", 30, -40\n\
SaveKey \"MyCone.kine.local.rotz\", 40, 0\n\
\' \n\
\' Translate the objects to see clearly the cone and the\n\
\' effect on the sphere\n\
\'\n\
SelectObj \"MySphere\", , True\n\
Translate , -3, 0, 0, siAbsolute, siParent, siObj, siX\n\
SelectObj \"MyCone\", , True\n\
Translate , 6, 0, 0, siAbsolute, siParent, siObj, siX\n\
\'\n\
\' Create a cluster in the sphere, and create a LinkDeformOri\n\
\' with the cone.\n\
\'\n\
SetSelFilter \"Point\"\n\
AddToSelection \"MySphere.pnt[(0,6),(7,6),(6,6),(5,6),(4,6),(3,6),(6,5),(1,6),(1,5),(2,6),(7,5),(0,5),(2,5),(5,4),(5,5),(4,5)]\" \n\
CreateCluster \n\
LinkDeformWithOri \"MySphere.surfmsh.cls.Point\", \"MyCone\"\n\
\'\n\
\' Create the first Deform key at frame 1, with translation of\n\
\' points of the cluster\n\
\'\n\
SetValue \"Context.constructionmode\", siConstructionModePrimaryShape\n\
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
SetValue \"Context.constructionmode\", siConstructionModeModeling\n\
\'\n\
\' Playback the animation and see the effect of the rotation\n\
\' of the cone on the sphere\n\
\'\n\
SetDisplayMode \"Camera\", \"textured\"\n\
PlayForwardsFromStart</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/LinkDeform.html\">LinkDeform</a> <a href=\"#!/url=./si_cmds/SaveDeformKey.html\">SaveDeformKey</a> <a href=\"#!/url=./si_cmds/ApplyDeformKey.html\">ApplyDeformKey</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";