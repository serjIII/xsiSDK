var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SelectShapeKey</title>\n\
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
            <h1>SelectShapeKey</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SelectShapeKey</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Selects a list of objects as shape keys for another object. Selecting \n\
shape keys can optionally set up a relation between the target object \n\
or cluster and the shape keys, allowing to you fine-tune the shape keys \n\
and have those adjustments appear on the target object or cluster. \n\
Selecting shape keys creates shape sources but you also have the option \n\
of automatically creating a shape clip in the mixer similarly to \n\
<a href=\"#!/url=./si_cmds/SaveShapeKey.html\">SaveShapeKey</a>.<br /><br />\n\
With shape animation (sometimes called morphing), you can change \n\
the shape of an object over time, animating the geometrical shape \n\
of an object using clusters of points (clusters made of polygons \n\
or edges are not supported). You can use surface (NURBS) or polygon \n\
objects to create shape animation, or even curves and lattices--any \n\
geometry that has a static number of points. <br /><br />\n\
In Softimage, all shape animation is done on clusters. This means that you \n\
can create different clusters on an object and create shape keys for \n\
each of them; or you can treat a complete object as one cluster and \n\
save shape keys for it. For more information on clusters in general, see \n\
<a href=\"http://softimage.wiki.softimage.com/xsidocs/components_Clusters.htm\">the Softimage user guide</a>. \n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = SelectShapeKey( InputObj, SourceObj, [RefMode], [Relational], [ApplyKeys] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns the shape key(s) as an <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> of <a href=\"#!/url=./si_om/ShapeKey.html\">ShapeKey</a> objects.</p></div>\n\
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
<a href=\"#!/url=./files/listexpr.htm\">List</a> of objects to be deformed. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SourceObj		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of objects that define the shape keys. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RefMode		</td>\n\
		<td><a href=\"#!/url=./si_om/siShapeReferenceMode.html\">siShapeReferenceMode</a>		</td>\n\
		<td>\n\
 The reference mode of the shape key created 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siShapeLocalReferenceMode			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Relational		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
Keep a modelling relation between the created shape and the selected geometry. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
True			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ApplyKeys		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
Apply the shapes on the mixer given the shape instancing mode.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'This example creates 3 spheres: 1 basic sphere and 2 deformed ones.\n\
\'The two deformed spheres have a different shape.\n\
\'\n\
\'The basic sphere will then use the two deformed spheres as shape\n\
\'sources, in order to morph between the two shapes.\n\
\'Create 3 sphere, give a different shape to 2 of them.\n\
NewScene\n\
CreatePrim \"Sphere\", \"MeshSurface\"\n\
SetValue \"sphere.sphere.radius\", 1\n\
Duplicate \"sphere\", , 2, 1, 1, 0, 0, 1, 0, 1\n\
Translate , -3, 0, -3, siRelative, siView, siObj, siXYZ\n\
SetSelFilter \"Point\"\n\
AddToSelection \"sphere1.pnt[0-8,30-36]\", , True\n\
AddToSelection \"sphere1.pnt[0,1,16-22,44-50]\", , True\n\
Scale , 1.9, 1.9, 1.9, siRelative, siGlobal, siObj, siXYZ\n\
Duplicate \"sphere\", , 2, 1, 1, 0, 0, 1, 0, 1\n\
Translate , 3, 0, -3, siRelative, siView, siObj, siXYZ\n\
SetSelFilter \"Point\"\n\
AddToSelection \"sphere2.pnt[*]\", , True\n\
RemoveFromSelection \"sphere2.pnt[0-8,30-36]\"\n\
RemoveFromSelection \"sphere2.pnt[0,1,16-22,44-50]\"\n\
Scale , 2.4, 2.4, 2.4, siRelative, siGlobal, siObj, siXYZ\n\
\'Call SelectShapeKey to create 2 shapes based on the 2 deformed spheres\n\
SelectShapeKey \"sphere\", \"sphere1,sphere2\",_\n\
siShapeLocalReferenceMode, True, False\n\
\'Apply the 2 shape keys\n\
ApplyShapeKey \"sphere.polymsh.cls.sphere1_ShapeKey.sphere1_ShapeKey,\"_\n\
&amp; \"sphere.polymsh.cls.sphere1_ShapeKey.sphere2_ShapeKey\", , , 1\n\
ApplyShapeKey \"sphere.polymsh.cls.sphere1_ShapeKey.sphere2_ShapeKey\", , , 2\n\
\'Change the weights in order to see the blend between \n\
\'the 2 shapes on the target sphere\n\
SetValue \"Mixer.Mixer_Shape_Track.sphere1_ShapeKey_ClusterClip.\"_\n\
&amp; \"Mixer_Shape_Track2.sphere2_ShapeKey_Clip.actionclip.weight\", 1\n\
\'Changing the sliders\' values of sphere.ShapeWeights will blend \n\
\'from one source shape to the other:\n\
InspectObj \"sphere.ShapeWeights\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/SaveShapeKey.html\">SaveShapeKey</a> <a href=\"#!/url=./si_cmds/ApplyShapeKey.html\">ApplyShapeKey</a> <a href=\"#!/url=./si_cmds/SelectShapeKey.html\">SelectShapeKey</a> <a href=\"#!/url=./si_cmds/StoreShapeKey.html\">StoreShapeKey</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";