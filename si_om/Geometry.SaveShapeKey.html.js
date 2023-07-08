var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Geometry.SaveShapeKey</title>\n\
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
</style><link rel=\"stylesheet\" href=\"si_om/css/en.css\" type=\"text/css\" /><script>$(document).ready(function() { yepnope.injectJs(\"./si_om/lib/utils.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Geometry.SaveShapeKey</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Geometry.html\">Geometry</a>.SaveShapeKey</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Saves a shape key for this <a href=\"#!/url=./si_om/Geometry.html\">Geometry</a> and creates a new <a href=\"#!/url=./si_om/ShapeClip.html\">ShapeClip</a> \n\
object in the mixer to represent this shape. Shape keys have two parts: sources (a shape that you \n\
have stored) and clips (an instance of a shape key (source) at a particular position along a track \n\
in the animation mixer).\n\
<br /><br />\n\
There are two possible workflows for using this method: the first is to change the actual shape of \n\
the primitive and then call this method (which is similar to the <a href=\"#!/url=./si_cmds/SaveShapeKey.html\">SaveShapeKey</a> \n\
command); the second is to specify the shape using the PositionArray argument. The example below \n\
illustrates these two approaches.\n\
<br /><br />\n\
The actual data for the shape is stored as a <a href=\"#!/url=./si_om/ClusterProperty.html\">ClusterProperty</a>. It is possible to \n\
store a shape key that defines positions for only a subset of the points, by using the IndexArray \n\
argument.  This can save memory on a large object. Each subset of points with a shape key is \n\
represented by a separate <a href=\"#!/url=./si_om/Cluster.html\">Cluster</a>.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>ShapeClip Geometry.SaveShapeKey( Double in_time, Double in_clipDuration, siShapeReferenceMode in_refMode, siShapeInstanceMode in_instMode, String in_name, Object in_indexArray, Object in_positionArray, Object in_normalArray );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = Geometry.SaveShapeKey( Time, [ClipDuration], [RefMode], [InstMode], [Name], [IndexArray], [PositionArray], [NormalArray] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/ShapeClip.html\">ShapeClip</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Time		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
\n\
		Time in seconds.  The shape of the object is evaluated at this time, unless \n\
		the shape is explicitly defined by the PositionArray argument.  The time argument \n\
		is also used when adding the ShapeClip to the Mixer.  For example, if \n\
		siShapeMixedWeightMode is specified as the InstMode argument, then the new shape \n\
		will account for 100% of the shape at the specified time.  Only a single shape key \n\
		can be specified at any particular time.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ClipDuration		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
\n\
		Clip duration in seconds.  Specify -1.0 to have the default behavior, which depends \n\
		on the InstMode argument.  For example if siShapeMixedWeightMode is specified then \n\
		the ClipDuration is the entire scene duration, but if siShapeTransitionMode is \n\
		specified then clip will last 1 second.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
-1.0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RefMode		</td>\n\
		<td><a href=\"#!/url=./si_om/siShapeReferenceMode.html\">siShapeReferenceMode</a>		</td>\n\
		<td>\n\
\n\
		Shape reference mode. This specifies how the shape is stored and how the shape will \n\
		change if the underlying reference shape changes.  The reference mode is ignored when \n\
		more than one shape is saved on the same cluster, the reference mode of the first shape \n\
		key is used instead.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siShapeLocalReferenceMode			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">InstMode		</td>\n\
		<td><a href=\"#!/url=./si_om/siShapeInstanceMode.html\">siShapeInstanceMode</a>		</td>\n\
		<td>\n\
\n\
		Shape instantiation mode.  This controls the way the new <a href=\"#!/url=./si_om/ShapeClip.html\">ShapeClip</a> is\n\
		added to the Mixer.  With siShapeMixedWeightMode a new track is created, the new clip \n\
		added to this track, and the fcurves controlling the weighting are adjusted. With \n\
		siShapeInstanceOnlyMode the clips are added to separate tracks, but no fcurves are used \n\
		to weight between the shapes.  With siShapeTransitionMode all clips are added to the same \n\
		track, with transition effects applied between them.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siShapeMixedWeightMode			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		Name to use for the new <a href=\"#!/url=./si_om/ShapeClip.html\">ShapeClip</a>.  The <a href=\"#!/url=./si_om/ClusterProperty.html\">ClusterProperty</a> \n\
		associated with this shape is not affected by this argument.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"Point_AUTO_ShapeAction_Clip\"			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">IndexArray		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a>		</td>\n\
		<td>\n\
\n\
		A 1-dimensional array of geometry point indices.  Only these points will be included in the \n\
		shape definition.  If no other shapes use this subset of points then a new \n\
		<a href=\"#!/url=./si_om/Cluster.html\">Cluster</a> will be created.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
If not specified the shape key is saved for every point on the geometry			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PositionArray		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a>		</td>\n\
		<td>\n\
\n\
		A 1- or 2- dimensional array of key position points used for computing the offsets of the geometry \n\
		points referred by the array of indices.  The points must be specified in absolute coordinates. \n\
		A 1-dimensional array must be formatted as a sequence of x,y,z values: {Xo,Yo,Zo,...X(n-1),Y(n-1),Z(n-1)}. \n\
		A 2 dimensional array must be formatted as a Nx3 array of x,y,z values. This argument is only considered \n\
		if the IndexArray argument is specified, and must specify the same number of points as the IndexArray.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Shape key is based on the current positions of the geometry points			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">NormalArray		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a>		</td>\n\
		<td>\n\
A 1 or 2 dimensional array of normal points. Normals are not yet supported.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example shows how it is possible to create shape animations from the object model.\n\
\' Two techniques are used to create the same animation on two polygons\n\
\'\n\
dim oGrid1, oGrid2\n\
\' Technique one is similar to the process used when interactively \n\
\' saving shape keys - we change the shape of the object and then save a\n\
\' shape key\n\
\' Create a polygon\n\
set oGrid1 = CreatePrim( \"Grid\", \"MeshSurface\" )\n\
SetValue oGrid1 &amp; \".polymsh.geom.subdivu\", 1\n\
SetValue oGrid1 &amp; \".polymsh.geom.subdivv\", 1\n\
Scale oGrid1, 0.25, 0.25, 0.25, siAbsolute, siParent, siObj, siXYZ\n\
Translate  oGrid1, -2, 0, 0, siRelative, siParent, siObj, siXYZ	\n\
\' Our animation will start with the initial shape at frame 1 and\n\
\' morph to the second shape until frame 30\n\
dim frameRate, frame1Seconds, frame30Seconds\n\
frameRate = GetValue( \"PlayControl.Rate\" )	\n\
frame1Seconds = 1 / frameRate\n\
frame30Seconds = 30 / frameRate\n\
\' Save the current shape as the reference\n\
\' This remembers the locations of each vertex.  This information will\n\
\' be all zeros because we haven\'t moved any vertices and use siShapeLocalReferenceMode\n\
call oGrid1.ActivePrimitive.Geometry.SaveShapeKey( frame1Seconds, -1.0, _\n\
	siShapeLocalReferenceMode, siShapeMixedWeightMode )\n\
\' Move some of the points\n\
Translate oGrid1 &amp; \".pnt[0]\" , 0, 0, -1, siRelative, siGlobal, siObj, siXYZ\n\
Translate oGrid1 &amp; \".pnt[2]\" , 0, 0, 1, siRelative, siGlobal, siObj, siXYZ\n\
Translate oGrid1 &amp; \".pnt[3]\" , 0, 0, -1, siRelative, siGlobal, siObj, siXYZ\n\
\' Take a second snap shot of the object\n\
call oGrid1.ActivePrimitive.Geometry.SaveShapeKey( frame30Seconds, -1.0, _\n\
	siShapeLocalReferenceMode, siShapeMixedWeightMode )\n\
\' Technique two is direct.  We describe the actual positions\n\
\' of the vertices for each shape.\n\
set oGrid2 = CreatePrim( \"Grid\", \"MeshSurface\" )\n\
SetValue oGrid2 &amp; \".polymsh.geom.subdivu\", 1\n\
SetValue oGrid2 &amp; \".polymsh.geom.subdivv\", 1\n\
Scale oGrid2, 0.25, 0.25, 0.25, siAbsolute, siParent, siObj, siXYZ\n\
Translate oGrid2, +2, 0, 0, siRelative, siParent, siObj, siXYZ	\n\
\' We only specify the vertices that actually move.  In the case of \n\
\' a large object this could save a lot of memory\n\
call oGrid2.ActivePrimitive.Geometry.SaveShapeKey( frame1Seconds, -1.0, _\n\
	siShapeLocalReferenceMode, siShapeMixedWeightMode, ,_\n\
	Array( 0,2,3 ), Array( -4,0,-4,  4,0,-4,  4,0,4) )\n\
call oGrid2.ActivePrimitive.Geometry.SaveShapeKey( frame30Seconds, -1.0, _\n\
	siShapeLocalReferenceMode, siShapeMixedWeightMode, ,_\n\
	Array( 0,2,3 ), Array( -4,0,-8,  4,0,0,  4,0,0) )</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' \n\
\' Three cones are created with identical animation\n\
\' although they use different Reference Modes to record the shape \n\
\' \n\
set root = Application.ActiveProject.ActiveScene.Root\n\
set obj = root.AddGeometry( \"Cone\", \"MeshSurface\" )\n\
ApplyOp \"bend\", obj\n\
obj.posz.Value = -3\n\
set geometry = obj.ActivePrimitive.Geometry\n\
\' Move the point to 1,1,0 in local mode\n\
set clip = geometry.SaveShapeKey( 1, 1, siShapeLocalReferenceMode, _\n\
	siShapeInstanceOnlyMode, \"MyShapeKey\", Array(1), Array(1.,1.,0) )\n\
set obj = root.AddGeometry( \"Cone\", \"MeshSurface\" )\n\
ApplyOp \"bend\", obj\n\
set geometry = obj.ActivePrimitive.Geometry\n\
\' Move the point to 1,1,0 in absolute mode\n\
set clip = geometry.SaveShapeKey( 1, 1, siShapeAbsoluteReferenceMode, _\n\
	siShapeInstanceOnlyMode, \"MyShapeKey\", Array(1), Array(1.,1.,0) )\n\
set obj = root.AddGeometry( \"Cone\", \"MeshSurface\" )\n\
ApplyOp \"bend\", obj\n\
obj.posz.value = 3\n\
set geometry = obj.ActivePrimitive.Geometry\n\
\' Move the point to 1,1,0 in object mode\n\
set clip = geometry.SaveShapeKey( 1, 1, siShapeObjectReferenceMode, _\n\
	siShapeInstanceOnlyMode, \"MyShapeKey\", Array(1), Array(1.,1.,0) )</pre></td></tr>\n\
</table>\n\
</div><h4>3. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' \n\
\' This example demonstrates how you access the shape information for a particular shape key by looking \n\
\' at the cluster properties which store this data\n\
\' \n\
option explicit\n\
\' Set up a little scene\n\
dim oCircle\n\
set oCircle = CreatePrim( \"Sphere\", \"MeshSurface\" )\n\
\' Move the top and bottom point of the sphere outwards\n\
oCircle.ActivePrimitive.Geometry.SaveShapeKey 0.5, 3.0, _\n\
	siShapeAbsoluteReferenceMode, siShapeInstanceOnlyMode, ,_\n\
	Array( 1, 0 ), Array( 0,6,0,  0,-6,0 )\n\
\' Move two different points - this creates a new, independent cluster\n\
\' We can use a different reference mode for this, but we still specify the\n\
\' point positions in Absolute terms.\n\
oCircle.ActivePrimitive.Geometry.SaveShapeKey 0.8, 1.0, _\n\
	siShapeLocalReferenceMode, siShapeInstanceOnlyMode,, _\n\
	Array( 5, 33 ), Array( -2,0,0, 2,0,0 )\n\
ShowShapeInformation( oCircle )\n\
sub ShowShapeInformation( in_obj )\n\
	dim oClusters, oCluster, oProperties, oProperty, cntFoundShapes\n\
	on error resume next\n\
	set oClusters = in_obj.ShapeAnimatedClusters\n\
	if ( err &lt;&gt; 0 ) then\n\
		Application.LogMessage \"Please select a 3D Object\"\n\
		exit sub\n\
	end if\n\
	on error goto 0\n\
	Application.LogMessage \"Dump of shape key data on object \" &amp; in_obj.Fullname\n\
	cntFoundShapes = 0\n\
	\' Go through the various clusters on the object\n\
	\' (In practice only the Point clusters will have shape keys)\n\
	for each oCluster in oClusters\n\
		\' Cluster indices are not the same as the indices on the\n\
		\' geometry, but we can easily determine the relationship with\n\
		\' this array:		\n\
		dim oClusterElementsCollection, aElements\n\
		set oClusterElementsCollection = oCluster.Elements\n\
		aElements = oClusterElementsCollection.Array  \n\
		\' Only search for the shape keys, which have type \"clskey\"		\n\
		set oProperties = oCluster.LocalProperties.filter( \"clskey\" )\n\
		for each oProperty in oProperties\n\
			\' Found a shape key					\n\
			dim i, XYZArray\n\
			cntFoundShapes = cntFoundShapes + 1\n\
			if InstrRev( oProperty, \".ResultClusterKey\" ) &lt;&gt; 0 then\n\
				\' There may also be an internal cluster property \n\
				\' called \"ResultClusterKey\" which stores the \n\
				\' result of blending the various shapes at the \n\
				\' current time						\n\
				Application.LogMessage \"Blended shape at this time: \" &amp; oProperty\n\
			else\n\
				Application.LogMessage \"Shape key: \" &amp; oProperty\n\
			end if		\n\
			\' The reference mode is available from the KeyType parameter\n\
			dim ReferenceType\n\
			ReferenceType =	oProperty.Parameters(\"KeyType\").Value\n\
			if ( ReferenceType = 0 ) then\n\
				Logmessage \"        Uses: Absolute Reference Mode\"\n\
			elseif ( ReferenceType = 1 ) then\n\
				Logmessage \"        Uses: Local Reference Mode\"			\n\
			elseif ( ReferenceType = 2 ) then\n\
				Logmessage \"        Uses: Object Reference Mode\"\n\
			end if\n\
			\' The contents of the cluster can be found in this safearray	\n\
			XYZArray = oProperty.Elements.Array\n\
			For i=0 to UBound(oProperty.Elements.Array,2)\n\
				\' Print out the x,y,z values\n\
				LogMessage \"        pnt[\"&amp; aElements( i ) &amp; \"] has position (\" _ \n\
					&amp; Round(XYZArray(0,i),3) &amp; \",\" &amp; Round(XYZArray(1,i),3) &amp; \",\"_\n\
					&amp; Round(XYZArray(2,i),3) &amp; \")\"\n\
			Next		\n\
		next\n\
	next	\n\
	if ( cntFoundShapes = 0 ) then\n\
		LogMessage \"There are no shapes on this object\"\n\
	end if\n\
end sub</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/SaveShapeKey.html\">SaveShapeKey</a> <a href=\"#!/url=./si_om/Cluster.html\">Cluster</a> <a href=\"#!/url=./si_om/ClusterProperty.html\">ClusterProperty</a> <a href=\"#!/url=./si_om/ShapeClip.html\">ShapeClip</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";