var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>StoreShapeKey</title>\n\
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
            <h1>StoreShapeKey</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">StoreShapeKey</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Stores a shape key. When you store shape keys, a shape key is \n\
created for the current shape and added to the model\'s list of \n\
shape sources (in the model\'s Mixer > Sources > Shape folder) but \n\
it does not create a shape clip in the mixer. <br /><br />\n\
Storing shape keys is a good way to build up a library of shapes \n\
that you can use later. The first shape created on a geometry \n\
installs a cluster shape combiner operator and serves to define \n\
the reference shape. <br /><br />\n\
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
<a href=\"http://softimage.wiki.softimage.com/xsidocs/components_Clusters.htm\">the Softimage user guide</a>. <br /><br />\n\
A shape key is static if the duration specified is zero. Otherwise,\n\
the deformation of the geometry is captured at the sampling specified.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = StoreShapeKey( [InputObj], [Name], [RefMode], [Frame], [Duration], [Sampling], [Content], [Force deform stripping] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns the <a href=\"#!/url=./si_om/ShapeKey.html\">ShapeKey</a>.</p></div>\n\
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
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Name of the shape key. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RefMode		</td>\n\
		<td><a href=\"#!/url=./si_om/siShapeReferenceMode.html\">siShapeReferenceMode</a>		</td>\n\
		<td>\n\
 The reference mode of the shape key created 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siShapeObjectReferenceMode			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Frame		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Frame for which to store the shape key. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current frame			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Duration		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 The duration of the shape key in frames. \n\
	When the duration is non-zero we plot deformations into the shape key, \n\
	otherwise the shape key will contain only the deformation at the provided frame.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Zero duration. Store the shape key as a static shape at the provided frame.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Sampling		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 The sampling at which to plot the deformations. The sampling the the number of frames\n\
	in between samples.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Zero sampling. Store the shape key as a static shape at the provided frame.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Content		</td>\n\
		<td><a href=\"#!/url=./si_om/siShapeContent.html\">siShapeContent</a>		</td>\n\
		<td>\n\
 Determines which deformations should get stored in the shape.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siShapeContentSecondaryShape			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Force deform stripping		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
Forces the removal of any deformations above the shape combiner.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
false			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">NewScene , false\n\
CreatePrim \"Sphere\", \"NurbsSurface\" \n\
SetSelFilter \"Point\" \n\
AddToSelection \"sphere.pnt[(5,4),(6,4),(7,4),(0,5),(1,5),(2,5),(3,5),(4,5),(5,5),(6,5),(7,5),(0,6),(1,6),(2,6),(3,6)]\" \n\
CreateCluster \n\
StoreShapeKey \"sphere.surfmsh.cls.Point\", \"MyShape\", siShapeObjectReferenceMode</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/SaveShapeKey.html\">SaveShapeKey</a> <a href=\"#!/url=./si_cmds/ApplyShapeKey.html\">ApplyShapeKey</a> <a href=\"#!/url=./si_cmds/SelectShapeKey.html\">SelectShapeKey</a> <a href=\"#!/url=./si_cmds/StoreShapeKey.html\">StoreShapeKey</a> <a href=\"#!/url=./si_cmds/CreateShapeGroup.html\">CreateShapeGroup</a> <a href=\"#!/url=./si_cmds/SetShapeGroup.html\">SetShapeGroup</a> <a href=\"#!/url=./si_om/ShapeKey.ShapeGroupName.html\">ShapeKey.ShapeGroupName</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";