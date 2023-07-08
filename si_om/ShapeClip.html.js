var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ShapeClip</title>\n\
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
            <h1>ShapeClip</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ShapeClip</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_ShapeClip\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1ShapeClip.html\">ShapeClip</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\"><a href=\"#!/url=./si_om/ProjectItem.html\">ProjectItem</a></p>\n\
<p class=\"level3\"><a href=\"#!/url=./si_om/Clip.html\">Clip</a></p>\n\
<p class=\"level4\">ShapeClip</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.5</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> A ShapeClip object is an instance of a shape key (source) at a particular position along a shape track \n\
in the animation mixer. You can create shape clips using the <a href=\"#!/url=./si_om/Geometry.SaveShapeKey.html\">Geometry.SaveShapeKey</a>\n\
method. To enumerate existing shape clips you must pass the full string path of the shape  \n\
track\'s ClipList to the <a href=\"#!/url=./si_cmds/EnumElements.html\">EnumElements</a> command which returns a collection of\n\
ShapeClip objects.<br /><br />\n\
You can create multiple clips of the same source (using the <a href=\"#!/url=./si_cmds/AddClip.html\">AddClip</a> command), \n\
thereby returning to the same shape several times in the same animation, or rearrange the order \n\
of the shape clips on the tracks to change the shape animation completely. <br /><br /> \n\
The ShapeClip object allows you to access the shape animation stored in clusters by using the \n\
<a href=\"#!/url=./si_om/Clip.MappedItems.html\">Clip.MappedItems</a> method. Each <a href=\"#!/url=./si_om/MappedItem.html\">MappedItem</a> object returns the \n\
<a href=\"#!/url=./si_om/ShapeKey.html\">ShapeKey</a> object (a specialized kind of <a href=\"#!/url=./si_om/ClusterProperty.html\">ClusterProperty</a>) from\n\
the <a href=\"#!/url=./si_om/MappedItem.Source2.html\">MappedItem.Source2</a> method. <a href=\"#!/url=./si_om/ShapeKey.html\">ShapeKey</a>s contain shape \n\
animation data and you can use the ShapeKey\'s base property <a href=\"#!/url=./si_om/SIObject.Parent.html\">SIObject.Parent</a> to\n\
get the shape-animated <a href=\"#!/url=./si_om/Cluster.html\">Cluster</a> object.<br /><br /> \n\
When you save a shape key in local reference mode (siShapeLocalReferenceMode) only the deltas\n\
to the point\'s local referential are stored. If you need to get the absolute position for \n\
each point in the  shape you will need the local referential for the point and the original position of \n\
the point before the shape key was applied. <br /><br /> \n\
In order to get the local referential (<a href=\"#!/url=./si_om/Geometry0D.LocalReferenceFrame.html\">Geometry0D.LocalReferenceFrame</a>) and the \n\
original position for each point you will need to mute the shape combiner and all other operators above \n\
it using the <a href=\"#!/url=./si_cmds/DeactivateAbove.html\">DeactivateAbove</a> command. \n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddCustomOp.html\">AddCustomOp</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddICEAttribute.html\">AddICEAttribute</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Clip.AddProperty.html\">AddProperty</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Clip.AddProperty2.html\">AddProperty2</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddScriptedOp.html\">AddScriptedOp</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddScriptedOpFromFile.html\">AddScriptedOpFromFile</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AnimatedParameters2.html\">AnimatedParameters2</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.BelongsTo.html\">BelongsTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.EvaluateAt.html\">EvaluateAt</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.GetICEAttributeFromName.html\">GetICEAttributeFromName</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsA.html\">IsA</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsAnimated2.html\">IsAnimated2</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsKindOf.html\">IsKindOf</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsLocked.html\">IsLocked</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsSelected.html\">IsSelected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockOwners.html\">LockOwners</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.RemoveICEAttribute.html\">RemoveICEAttribute</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetAsSelected.html\">SetAsSelected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetCapabilityFlag.html\">SetCapabilityFlag</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetLock.html\">SetLock</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.TaggedParameters.html\">TaggedParameters</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.UnSetLock.html\">UnSetLock</a>		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Properties</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.BranchFlag.html\">BranchFlag</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Capabilities.html\">Capabilities</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Clip.Effect.html\">Effect</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.EvaluationID.html\">EvaluationID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Families.html\">Families</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.HierarchicalEvaluationID.html\">HierarchicalEvaluationID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.ICEAttributes.html\">ICEAttributes</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockLevel.html\">LockLevel</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockMasters.html\">LockMasters</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockType.html\">LockType</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Clip.MappedItems.html\">MappedItems</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Model.html\">Model</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.ObjectID.html\">ObjectID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Owners.html\">Owners</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.PPGLayout.html\">PPGLayout</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Parameters.html\">Parameters</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Parent3DObject.html\">Parent3DObject</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Clip.Properties.html\">Properties</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Clip.Relations.html\">Relations</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Selected.html\">Selected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Clip.Source.html\">Source</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Clip.TimeControl.html\">TimeControl</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' The following example illustrates how to access the position\n\
\' information stored in a shape key. Adding a shape key using  \n\
\' local reference mode will store the positions as deltas to \n\
\' the local referential of each point. To calculate the \n\
\' absolute position for each point you need the local\n\
\' referential for the point and the original position before\n\
\' the shape was applied. \n\
\'\n\
\' Create the scene with an object with a shape clip	\n\
NewScene , false\n\
set root = ActiveSceneRoot\n\
set c1 = root.AddGeometry( \"Cube\", \"MeshSurface\" )\n\
set c2 = Duplicate( c1, , 2, 1, 1, 0, 0, 1, 0, 1 )(0)\n\
Translate c2, 10, 0, -2, siRelative, siView, siObj, siXYZ\n\
Translate c2 &amp; \".pnt[2,3,6,LAST]\", -6, -4, 4, siRelative, siView, siObj, siXYZ\n\
\' Add a shapeclip where the position data is stored as deltas to \n\
\' the point\'s local referential. You can also store the shape in\n\
\' absolute mode in which case the cluster property contains \n\
\' for the shape the actual point data or you can store it in \n\
\' object mode in which case deltas are stored in the object\n\
\' referential (i.e. the pose of the object). \n\
set key = SelectShapeKey( c1, c2, siShapeLocalReferenceMode )\n\
dim mix\n\
if root.HasMixer() then\n\
	set mix = root.Mixer\n\
else\n\
	set mix = root.AddMixer()\n\
end if\n\
set shapetrack = AddTrack( root, mix, 1 )\n\
AddClip root, key, , shapetrack, 1, , , , False\n\
\'\n\
\' Get the shapeclip \n\
\' \n\
dim clip\n\
for each c in mix.Clips\n\
	if c.Type = siClipShapeType then\n\
		set clip = c\n\
	end if\n\
next\n\
\' We need to mute the shape combiner and all the operators above it \n\
\' inorder to get the local reference frame and position of each\n\
\' point before the shape animation was applied to the geometry. \n\
\' (This gives the position values before the shape that was stored \n\
\' and does not include the result of deformations applied afterwards.) \n\
set geom = Nothing\n\
set oMatrix33 = XSIMath.CreateMatrix3\n\
set oDelta = XSIMath.CreateVector3\n\
set oXAxis = XSIMath.CreateVector3\n\
set oYAxis = XSIMath.CreateVector3\n\
set oZAxis = XSIMath.CreateVector3\n\
for idx=0 to clip.MappedItems.Count-1\n\
	set mi = clip.MappedItems(idx)\n\
	LogMessage TypeName(mi)\n\
	LogMessage TypeName(mi.Source2)\n\
	\' Get the cluster property/shape key stored in the shapeclip\n\
	set clsprop = mi.Source2\n\
	\' Since the geometry for each mappeditem will be\n\
	\' the same we\'ll only need to get it once.	\n\
	if TypeName(geom) = \"Nothing\" then\n\
		\' Get the cluster, primitive and geometry from the \n\
		\' cluster property\n\
		set cls = clsprop.Parent\n\
		set geom = cls.Parent\n\
		set prim = geom.Parent\n\
		\' Deactivate all operators above and including the shape combiner\n\
		DeactivateAbove prim.FullName &amp; \".clustershapecombiner\", True\n\
		\' Get the position array from the geometry\n\
		aPosition = geom.Points.PositionArray\n\
		\' Get the old Geometry0D object to access \n\
		\' the local reference frame for each point\n\
		set geomv1 = geom.Parent.Obj\n\
		set o0DGeometry = geomv1.Geometry0D \n\
	end if\n\
	\' Assume that the number of cluster property elements\n\
	\' matches the geometry and that they are same order i.e. \n\
	\' point0 == clusterelement0\n\
	\' Get the delta position array from the clusterproperty\n\
	aDelta = clsprop.Elements.Array\n\
	\' Figure out the absolute position value using the deltas,\n\
	\' the original point position and the local referential \n\
	\' of each point\n\
	for i=LBound( aDelta, 2 ) to UBound( aDelta, 2 )\n\
		\' Set a vector3 with the delta for the position\n\
		oDelta.Set aDelta( 0, i ), aDelta( 1, i ), aDelta( 2, i )\n\
		\' Get the local reference frame for the point\n\
		o0DGeometry.LocalReferenceFrame i, _\n\
			oXAxis, oXAxisValid, _\n\
			oYAxis, oYAxisValid, _\n\
			oZAxis, oZAxisValid\n\
		\' Get the transformation matrix to go from point\n\
		\' local reference frame to object referential\n\
		oMatrix33.Set _\n\
				oXAxis.X , oXAxis.Y, oXAxis.Z, _\n\
				oYAxis.X , oYAxis.Y, oYAxis.Z, _\n\
				oZAxis.X , oZAxis.Y, oZAxis.Z \n\
		oDelta.MulByMatrix3 oDelta, oMatrix33 \n\
		\' Set a vector3 with the point position		\n\
		set oPosition = XSIMath.CreateVector3\n\
		oPosition.Set _\n\
			aPosition( 0, i ), _\n\
			aPosition( 1, i ), _\n\
			aPosition( 2, i )\n\
		\' Compute the absolute position by adding the delta\n\
		oPosition.AddInPlace oDelta\n\
		\' Log the absolute position values for the point\n\
		LogMessage oPosition.X &amp; \",\" &amp; oPosition.Y &amp; \",\" &amp; oPosition.Z		\n\
	next\n\
next\n\
\' Reactivate shapecombiner and all operators above it \n\
if TypeName(prim) &lt;&gt; \"Nothing\" then\n\
	DeactivateAbove prim.FullName &amp; \".clustershapecombiner\", False\n\
end if	\n\
\' Enumerate the shapeclips under the mixer shape track.\n\
for each t in ActiveSceneRoot.Mixer.Tracks\n\
	if t.Type = siTrackShapeType then\n\
		set shapetrack = t\n\
		exit for\n\
	end if\n\
next\n\
for each shapeclip in shapetrack.Clips\n\
	LogMessage shapeclip\n\
next\n\
\'Expected results:\n\
\'INFO : MappedItem\n\
\'INFO : ShapeKey\n\
\'INFO : -4,-4,-4\n\
\'INFO : 4,-4,-4\n\
\'INFO : -10,1.33226762955019E-15,-1.33226762955019E-15\n\
\'INFO : -2,1.33226762955019E-15,-1.33226762955019E-15\n\
\'INFO : -4,-4,4\n\
\'INFO : 4,-4,4\n\
\'INFO : -10,8.88178419700125E-16,8\n\
\'INFO : -2,8.88178419700125E-16,8\n\
\'INFO : Mixer.Mixer_Shape_Track.cube1_ShapeKey_Clip</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This Shape Animation example demonstrates how to use GetDrivingActions() \n\
	to get at the ShapeClips which animate an object. It also demonstrates \n\
	how to access the fcurves on each clip\n\
*/\n\
// Create a little sample scene with a simple animated sphere\n\
NewScene( null, false );\n\
// Make sure we are in Mixed Weight Mode\n\
SetUserPref( \"ShapeInstancingMode\", 1 );\n\
var oSphere = ActiveSceneRoot.AddGeometry( \"Sphere\", \"MeshSurface\" );\n\
SaveShapeKey( \"sphere\", null, null, 1, null, null, null, null, \n\
	siShapeLocalReferenceMode );\n\
// Move a vertice and record that as the shape at frame 20\n\
SelectGeometryComponents( \"sphere.pnt[33]\" );\n\
Translate( null, 3, 0, 0, siRelative, siView, siObj, siXYZ );\n\
SaveShapeKey( oSphere + \".pnt[33]\", null, null, 20, null, null, null, null, \n\
	siShapeLocalReferenceMode );\n\
// Move another point as shape for frame 30\n\
SelectGeometryComponents( \"sphere.pnt[1]\" );\n\
Translate( null, 0, 3, 0, siRelative, siView, siObj, siXYZ );\n\
SaveShapeKey( oSphere + \".pnt[1]\", null, null, 30, null, null, null, null, \n\
	siShapeLocalReferenceMode );\n\
// Access the ShapeClips which have been created on the object\n\
var oClips = GetDrivingActions( oSphere, false, null, false, false );\n\
for ( var i=0; i&lt;oClips.Count; i++ ) {\n\
	// Get the clip\n\
	var oClip = oClips(i);\n\
	// Access the animated parameter which controls the weight of the clip\n\
	// in the mixer\n\
	var oParam = Dictionary.GetObject( oClip + \".actionclip.weight\" );\n\
	var oFCurve = oParam.Source;\n\
	// At frame 40 we will do an equal blend of all the shapes\n\
	oFCurve.AddKey( 40, 1 );\n\
	// Print out the keys	\n\
	var oFCurveKeys = oFCurve.Keys;\n\
	LogMessage( \"FCurve on \" + oClip );\n\
	for ( var j=0; j&lt;oFCurveKeys.Count; j++ ) {\n\
		var oFCurveKey = oFCurveKeys.Item( i );\n\
		LogMessage( \"    Time:\" + oFCurveKey.Time + \"-\" + oFCurveKey.Value );\n\
	}\n\
}\n\
// Expected result:\n\
//INFO : FCurve on Mixer.Mixer_Shape_Track.Shape_ClusterClip.Mixer_Shape_Track3.ShapeKey2_Clip\n\
//INFO :     Time:20-0\n\
//INFO :     Time:20-0\n\
//INFO :     Time:20-0\n\
//INFO : FCurve on Mixer.Mixer_Shape_Track.Shape_ClusterClip.Mixer_Shape_Track2.ShapeKey1_Clip\n\
//INFO :     Time:20-1\n\
//INFO :     Time:20-1\n\
//INFO :     Time:20-1\n\
//INFO :     Time:20-1\n\
//INFO : FCurve on Mixer.Mixer_Shape_Track.Shape_ClusterClip.Mixer_Shape_Track1.ShapeKey_Clip\n\
//INFO :     Time:40-1\n\
//INFO :     Time:40-1\n\
//INFO :     Time:40-1</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Geometry.SaveShapeKey.html\">Geometry.SaveShapeKey</a> <a href=\"#!/url=./si_cmds/GetDrivingActions.html\">GetDrivingActions</a> <a href=\"#!/url=./si_cmds/EnumElements.html\">EnumElements</a> <a href=\"#!/url=./si_om/Dictionary.GetObject.html\">Dictionary.GetObject</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";