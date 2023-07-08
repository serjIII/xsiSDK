var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ApplyDeformKey</title>\n\
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
            <h1>ApplyDeformKey</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ApplyDeformKey</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Saves a pose-based deformation key. In addition to saving and selecting shape keys, you can also use \n\
pose-based deformation to create shape animations. To do this, you link one or more parameters to drive \n\
the deformation on a selected cluster, and then set deform keys for the different poses you want. <br /><br />\n\
For example, you can control the blending of a shape-animated object according to the position of a \n\
sphere (its position drives the shape animation). As the sphere gets closer to a deform key associated \n\
to a certain pose (as indicated by a small sphere), the target object takes on that shape: when the sphere \n\
is between deform keys, the target object takes on a combination (interpolation) of these deform keys.<br /><br />\n\
Tip: You can use an already defined shape to apply a deform key. Simply select the deform key and choose \n\
Deform > Shape > Apply Deform Key to apply it to the object for which you saved it at its current pose.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = ApplyDeformKey( [InputObj] );</pre>		</td>	</tr>\n\
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
 Cluster shape key to use for setting the deform 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example demonstrates how to use the ApplyDeformKey command to\n\
\' apply a shape deformation previously created\n\
\'\n\
NewScene , false\n\
\' First get the old construction mode\n\
iOldMode = GetValue( \"Context.ConstructionMode\" )\n\
SetValue \"Context.ConstructionMode\", siConstructionModePrimaryShape\n\
\' Create the object to deform\n\
CreatePrim \"Sphere\", \"NurbsSurface\"\n\
\' Select the points used for deformation and cluster them\n\
CreateCluster \"sphere.pnt[(5,4),(6,4),(7,4),(0,5),(1,5),(2,5),(3,5),(4,5),(5,5),(6,5),(7,5),(0,6),(1,6),(2,6),(3,6)]\"\n\
\' Link the deformation of the cluster with the parameter sphere.kine.local.posx\n\
LinkDeform \"sphere.surfmsh.cls.Point\", \"sphere.kine.local.posx\"\n\
\' Translate the sphere at X = -10\n\
Translate \"sphere\", -10, 0, 0, siAbsolute\n\
SaveDeformKey \"sphere.surfmsh.cls.Point\"\n\
SetValue \"sphere.surfmsh.cls.Point.PoseDeform1.Name\", \"SphereNormal\"\n\
\' Deform the sphere at X = 0 and save the deformation\n\
Translate \"sphere\", 0, 0, 0, siAbsolute\n\
Scale \"sphere.surfmsh.cls.Point\", 1, 1, 2, siAbsolute, siParent, siObj, siZ\n\
Scale \"sphere.surfmsh.cls.Point\", 2, 1, 1, siAbsolute, siParent, siObj, siX\n\
SaveDeformKey \"sphere.surfmsh.cls.Point\"\n\
SetValue \"sphere.surfmsh.cls.Point.PoseDeform1.Name\", \"SphereFat\"\n\
\' Translate the sphere at X = 10 and apply the deformation called SphereNormal\n\
Translate \"sphere\", 10, 0, 0, siAbsolute\n\
Refresh\n\
ApplyDeformKey \"sphere.surfmsh.cls.Point.SphereNormal\"\n\
\' Pop up a Deform Control window. If you left click on the slider, \n\
\' you will see the deformation of the sphere linked with the translation on the X axis\n\
InspectObj \"sphere.surfmsh.cls.Point.DeformControls\"\n\
\' Restore the original construction mode\n\
SetValue \"Context.ConstructionMode\", iOldMode</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/LinkDeform.html\">LinkDeform</a> <a href=\"#!/url=./si_cmds/SaveDeformKey.html\">SaveDeformKey</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";