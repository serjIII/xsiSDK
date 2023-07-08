var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SaveDeformKey</title>\n\
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
            <h1>SaveDeformKey</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SaveDeformKey</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Saves a key on a pose-based deformation. Given a cluster of points, the shape \n\
of which is linked to a set of parameters with the LinkDeform command, this \n\
command associates the current positions of the points in the cluster to \n\
the current parameter values it is linked to. <br /><br />\n\
Pose-based deformation (which is based on multi-linked parameters) allows \n\
you to link the shape of a cluster to several parameters simultaneously. The \n\
resulting shapes are smoothly interpolated in the space defined by the parameters. \n\
Pose-based deformations are particularily useful to link the shape of muscles to \n\
bone orientations or other parameters.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = SaveDeformKey( [InputObj], ClusterShapeKey );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns the key.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">InputObj		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Points, clusters, or an object. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ClusterShapeKey		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Cluster shape key to use for setting the deform 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' This example illustrates how to control the shape of an object (a sphere) based \n\
\' on two parameters: its position in x and in z.\n\
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
\' To see the result translate the sphere in the XZ plane. The multi-link interpolator \n\
\' calculates a smooth blending between the deform keys over the space defined by the \n\
\' two parameters.</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/LinkDeform.html\">LinkDeform</a> <a href=\"#!/url=./si_cmds/ApplyDeformKey.html\">ApplyDeformKey</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";