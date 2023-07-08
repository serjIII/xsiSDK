var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ShapeKey</title>\n\
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
            <h1>ShapeKey</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ShapeKey</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_ShapeKey\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1ShapeKey.html\">ShapeKey</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\"><a href=\"#!/url=./si_om/ProjectItem.html\">ProjectItem</a></p>\n\
<p class=\"level3\"><a href=\"#!/url=./si_om/Property.html\">Property</a></p>\n\
<p class=\"level4\"><a href=\"#!/url=./si_om/ClusterProperty.html\">ClusterProperty</a></p>\n\
<p class=\"level5\">ShapeKey</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> The ShapeKey object represents a special <a href=\"#!/url=./si_om/ClusterProperty.html\">ClusterProperty</a> which is used to store a \n\
specific geometry. ShapeKeys provide information about how the shape of a cluster changes by either \n\
storing its absolute value, an offset based on the object referential or values base on the local \n\
reference frame of vertices. <br /><br />\n\
You can find out the key\'s reference mode by getting the value of the KeyType <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a>. \n\
To convert from one reference mode to the other, use the <a href=\"#!/url=./si_cmds/ConvertShapeReferenceMode.html\">ConvertShapeReferenceMode</a> command.<br /><br />\n\
Warning: The KeyType parameter uses a different set of values from the \n\
<a href=\"#!/url=./si_om/siShapeReferenceMode.html\">siShapeReferenceMode</a> enum. For more information, see \n\
<a href=\"#!/url=./files/ShapeAnimation.htm\">Shape Animation</a>.<br /><br />\n\
Because a ShapeKey modifies scene content when instantiated, it is an <a href=\"#!/url=./si_om/AnimationSource.html\">AnimationSource</a> \n\
and as such can be accessed by using the <a href=\"#!/url=./si_om/AnimationSourceItem.Source.html\">AnimationSourceItem.Source</a> method.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddCustomOp.html\">AddCustomOp</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddICEAttribute.html\">AddICEAttribute</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddScriptedOp.html\">AddScriptedOp</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddScriptedOpFromFile.html\">AddScriptedOpFromFile</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AnimatedParameters2.html\">AnimatedParameters2</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.BelongsTo.html\">BelongsTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.EvaluateAt.html\">EvaluateAt</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.GetICEAttributeFromName.html\">GetICEAttributeFromName</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsA.html\">IsA</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsAnimated2.html\">IsAnimated2</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsKindOf.html\">IsKindOf</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsLocked.html\">IsLocked</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsSelected.html\">IsSelected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockOwners.html\">LockOwners</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.RemoveICEAttribute.html\">RemoveICEAttribute</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetAsSelected.html\">SetAsSelected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetCapabilityFlag.html\">SetCapabilityFlag</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetLock.html\">SetLock</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.TaggedParameters.html\">TaggedParameters</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.UnSetLock.html\">UnSetLock</a>		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Properties</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Property.Branch.html\">Branch</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.BranchFlag.html\">BranchFlag</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Capabilities.html\">Capabilities</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ClusterProperty.Elements.html\">Elements</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.EvaluationID.html\">EvaluationID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Families.html\">Families</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.HierarchicalEvaluationID.html\">HierarchicalEvaluationID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.ICEAttributes.html\">ICEAttributes</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockLevel.html\">LockLevel</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockMasters.html\">LockMasters</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockType.html\">LockType</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Model.html\">Model</a>		</td>	</tr>\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Parent3DObject.html\">Parent3DObject</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Selected.html\">Selected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ShapeKey.ShapeGroupName.html\">ShapeGroupName</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Property.Singleton.html\">Singleton</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	The following example illustrates how to access the position\n\
	information stored in a shape key. Adding a shape key using\n\
	local reference mode will store the positions as deltas to\n\
	the local referential of each point. To calculate the\n\
	absolute position for each point you need the local\n\
	referential for the point and the original position before\n\
	the shape was applied.\n\
*/\n\
// Create the scene with an object with a shape clip\n\
NewScene( null, false );\n\
var root = Application.ActiveSceneRoot;\n\
var c1 = root.AddGeometry( \"Cube\", \"MeshSurface\" );\n\
var c2 = Duplicate( c1, 1, 2, 1, 1, 0, 0, 1, 0, 1 )(0);\n\
Translate( c2, 10, 0, -2, siRelative, siView, siObj, siXYZ );\n\
Translate( c2 + \".pnt[2,3,6,LAST]\", -6, -4, 4, siRelative, siView, siObj, siXYZ );\n\
// Add a shapeclip where the position data is stored as deltas to\n\
// the point\'s local referential. You can also store the shape in\n\
// absolute mode in which case the cluster property contains\n\
// for the shape the actual point data or you can store it in\n\
// object mode in which case deltas are stored in the object\n\
// referential (i.e. the pose of the object).\n\
var key = SelectShapeKey( c1, c2, siShapeLocalReferenceMode );\n\
var mix = ( root.HasMixer() ) ? root.Mixer : root.AddMixer();\n\
var shapetrack = AddTrack( root, mix, 1 );\n\
AddClip( root, key, \"\", shapetrack, 1, null, \"\", \"\", false );\n\
//\n\
// Get the shapeclip\n\
//\n\
var clip;\n\
var c = new Enumerator( mix.Clips );\n\
for ( ; !c.atEnd(); c.moveNext() ) {\n\
	if ( c.item().Type == siClipShapeType ) {\n\
		clip = c.item();\n\
	}\n\
}\n\
// We need to mute the shape combiner and all the operators above it\n\
// in order to get the local reference frame and position of each\n\
// point before the shape animation was applied to the geometry.\n\
// (This gives the position values before the shape that was stored\n\
// and does not include the result of deformations applied afterwards.)\n\
var geom = null;\n\
for ( var idx=0; idx&lt;clip.MappedItems.Count; idx++ ) {\n\
	var mi = clip.MappedItems(idx);\n\
	Application.LogMessage( Application.ClassName(mi) );\n\
	Application.LogMessage( Application.ClassName(mi.Source2) );\n\
	// Get the cluster property/shape key stored in the shapeclip\n\
	var clsprop = mi.Source2;\n\
	// Since the geometry for each mappeditem will be\n\
	// the same we\'ll only need to get it once.\n\
	if ( !geom ) {\n\
		// Get the primitive and geometry from the cluster property\n\
		geom = clsprop.Parent.Parent;\n\
		var prim = geom.Parent;\n\
		// Deactivate all operators above and including the shape combiner\n\
		DeactivateAbove( prim.FullName + \".clustershapecombiner\", true );\n\
		// Get the position array from the geometry\n\
		var aPosition = geom.Points.PositionArray;\n\
		// Get the old Geometry0D object to access\n\
		// the local reference frame for each point\n\
		var geomv1 = geom.Parent.Obj;\n\
		var o0DGeometry = geomv1.Geometry0D;\n\
	}\n\
	// Assume that the number of cluster property elements\n\
	// matches the geometry and that they are same order i.e.\n\
	// point0 == clusterelement0\n\
	// Get the delta position array from the clusterproperty\n\
	var vbaDelta = clsprop.Elements.Array;\n\
	// Figure out the absolute position value using the deltas,\n\
	// the original point position and the local referential\n\
	// of each point\n\
	for ( var i=vbaDelta.lbound(2); i&lt;=vbaDelta.ubound(2); i++ ) {\n\
		// Set a vector3 with the delta for the position\n\
		var oDelta = XSIMath.CreateVector3(\n\
			vbaDelta.getItem(0,i),\n\
			vbaDelta.getItem(1,i),\n\
			vbaDelta.getItem(2,i)\n\
		);\n\
		// Get the local reference frame for the point\n\
		var oXAxis = XSIMath.CreateVector3();\n\
		var oYAxis = XSIMath.CreateVector3();\n\
		var oZAxis = XSIMath.CreateVector3();\n\
		var oXAxisValid, oYAxisValid, oZAxisValid;\n\
		var rtn = o0DGeometry.LocalReferenceFrame( i, oXAxis, oXAxisValid, oYAxis, oYAxisValid, oZAxis, oZAxisValid );\n\
		// Get the transformation matrix to go from point\n\
		// local reference frame to object referential\n\
		var oMatrix33 = XSIMath.CreateMatrix3(\n\
			oXAxis.X , oXAxis.Y, oXAxis.Z,\n\
			oYAxis.X , oYAxis.Y, oYAxis.Z,\n\
			oZAxis.X , oZAxis.Y, oZAxis.Z\n\
		);\n\
		oDelta.MulByMatrix3( oDelta, oMatrix33 );\n\
		// Set a vector3 with the point position\n\
		var oPosition = XSIMath.CreateVector3(\n\
			aPosition.getItem(0,i),\n\
			aPosition.getItem(1,i),\n\
			aPosition.getItem(2,i)\n\
		);\n\
		// Compute the absolute position by adding the delta\n\
		oPosition.AddInPlace( oDelta );\n\
		// Log the absolute position values for the point\n\
		Application.LogMessage( oPosition.X + \",\" + oPosition.Y + \",\" + oPosition.Z	);\n\
	}\n\
}\n\
// Reactivate shapecombiner and all operators above it\n\
if ( !prim ) {\n\
	DeactivateAbove( prim.FullName + \".clustershapecombiner\", false );\n\
}\n\
// Enumerate the shapeclips under the mixer shape track.\n\
var t = new Enumerator( ActiveSceneRoot.Mixer.Tracks );\n\
for ( ; !t.atEnd(); t.moveNext() ) {\n\
	if ( t.item().Type == siTrackShapeType ) {\n\
		var shapetrack = t.item();\n\
		break;\n\
	}\n\
}\n\
for ( var s=0; s&lt;shapetrack.Clips.Count; s++ ) {\n\
	var shapeclip = shapetrack.Clips(s);\n\
	Application.LogMessage( shapeclip );\n\
}\n\
// Expected results:\n\
// INFO : MappedItem\n\
// INFO : ShapeKey\n\
// INFO : -4,-4,-4\n\
// INFO : 4,-4,-4\n\
// INFO : -10,-8.881784197001252e-16,8.881784197001252e-16\n\
// INFO : -2.000000000000001,-8.881784197001252e-16,8.881784197001252e-16\n\
// INFO : -4,-4,4\n\
// INFO : 4,-4,4\n\
// INFO : -10.000000000000001,-8.881784197001252e-16,8.000000000000001\n\
// INFO : -2.0000000000000017,-1.7763568394002505e-15,8\n\
// INFO : Mixer.Mixer_Shape_Track.cube1_ShapeKey_Clip</pre></td></tr>\n\
</table>\n\
</div><h4>2. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\"># \n\
# Three cones are created with identical animation although \n\
# they use different Reference Modes to record the shape \n\
# \n\
from win32com.client import constants as c\n\
app = Application\n\
app.NewScene( \"\", 0 )\n\
root = app.ActiveSceneRoot\n\
# Local mode\n\
obj1 = root.AddGeometry( \"Cone\", \"MeshSurface\" )\n\
app.ApplyOp( \"bend\", obj1 )\n\
obj1.posz.Value = -3\n\
geom1 = obj1.GetActivePrimitive3().Geometry\n\
clip1 = geom1.SaveShapeKey( 1, 1, c.siShapeLocalReferenceMode, c.siShapeInstanceOnlyMode, \"MyShapeKey1\", [1], [1,1,0] )\n\
# Absolute mode\n\
obj2 = root.AddGeometry( \"Cone\", \"MeshSurface\" )\n\
app.ApplyOp( \"bend\", obj2 )\n\
geom2 = obj2.GetActivePrimitive3().Geometry\n\
clip2 = geom2.SaveShapeKey( 1, 1, c.siShapeAbsoluteReferenceMode, c.siShapeInstanceOnlyMode, \"MyShapeKey2\", [1], [1,1,0] )\n\
# Object mode\n\
obj3 = root.AddGeometry( \"Cone\", \"MeshSurface\" )\n\
app.ApplyOp( \"bend\", obj3 )\n\
obj3.posz.Value = 3\n\
geom3 = obj3.GetActivePrimitive3().Geometry\n\
clip3 = geom3.SaveShapeKey( 1, 1, c.siShapeObjectReferenceMode, c.siShapeInstanceOnlyMode, \"MyShapeKey3\", [1], [1,1,0] )</pre></td></tr>\n\
</table>\n\
</div><h4>3. C# Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"csharp\">/*\n\
	This example demonstrates how you access the shape information for a particular shape key by looking\n\
	at the cluster properties which store this data\n\
*/\n\
using System;\n\
using Softimage.XSIOM; // Softimage object model\n\
using Softimage.XSIMath;\n\
using Softimage.XSIUtil;\n\
using System.Text.RegularExpressions;	// for Regex class instanced in ShowShapeInformation\n\
public class XSIPlugin\n\
{\n\
	public bool Load( PluginRegistrar in_reg )\n\
	{\n\
		in_reg.Author = \"ShapeKeyDemo\";\n\
		in_reg.Name = \"ShapeKeyCSexamplePlugin\";\n\
		in_reg.Major = 1;\n\
		in_reg.Minor = 0;\n\
		in_reg.RegisterCommand(\"ShapeKeyCSexample\", \"ShapeKeyCSexample\");\n\
		return true;\n\
	}\n\
}\n\
public class ShapeKeyCSexample : XSIPlugin\n\
{\n\
	public bool Init( Context in_ctxt )\n\
	{\n\
		Command oCmd = null;\n\
		oCmd = (Command)in_ctxt.Source;\n\
		oCmd.Description = \"ShapeKey object example written in CSharp\";\n\
		oCmd.Tooltip = \"CSharp ShapeKey example\";\n\
		oCmd.ReturnValue = false;\n\
		return true;\n\
	}\n\
	// --------------------------------------------------------------------------\n\
	// Gets the shape clusters on the specified object, accesses their shape keys\n\
	// and reports on their reference mode and position\n\
	public bool ShowShapeInformation( X3DObject in_obj )\n\
	{\n\
		CXSIApplicationClass app = new CXSIApplicationClass();\n\
		try {\n\
			ClusterCollection oClusters = in_obj.ShapeAnimatedClusters();\n\
			app.LogMessage( \"Dump of shape key data on object \" + in_obj.FullName, siSeverity.siInfo );\n\
			long cntFoundShapes = 0;\n\
			// Go through the various clusters on the object\n\
			// (in practice only the Point clusters will have shape keys)\n\
			foreach ( Cluster oCluster in oClusters ) {\n\
				// Cluster indices are not the same as the indices on the\n\
				// geometry, but we can easily determine the relationship with\n\
				// this array:\n\
				ClusterElementCollection oClusterElementsCollection = oCluster.Elements;\n\
				Array aElements = (Array)oClusterElementsCollection.Array;\n\
				// Only search for the shape keys, which have type \"clskey\"\n\
				PropertyCollection oLocalProps = oCluster.LocalProperties;\n\
				PropertyCollection oClsKeyProps = oLocalProps.Filter(\"clskey\", null, null);\n\
				foreach ( ShapeKey oProperty in oClsKeyProps ) {\n\
					// Found a shape key\n\
					cntFoundShapes++;\n\
					Regex rx = new Regex(@\"ResultClusterKey$\", RegexOptions.IgnoreCase);\n\
					if ( rx.IsMatch(oProperty.Name) ) {\n\
						// There may also be an internal cluster property\n\
						// called \"ResultClusterKey\" which stores the\n\
						// result of blending the various shapes at the\n\
						// current time\n\
						app.LogMessage( \"Blended shape at current time: \" + oProperty.FullName, siSeverity.siInfo );\n\
					} else {\n\
						app.LogMessage( \"Shape key: \" + oProperty.FullName, siSeverity.siInfo );\n\
					}\n\
					// The reference mode is available from the KeyType parameter\n\
					Parameter oClsKeyTypeParam = oProperty.Parameters[\"KeyType\"];\n\
					Object ReferenceType =	oClsKeyTypeParam.get_Value(null);\n\
					switch ( ReferenceType.ToString() ) {\n\
						case \"0\" :\n\
						case \"6\" :\n\
							app.LogMessage( \"\\tUses: Absolute Reference Mode\", siSeverity.siInfo );\n\
							break;\n\
						case \"1\" :\n\
						case \"5\" :\n\
							app.LogMessage( \"\\tUses: Local Reference Mode\", siSeverity.siInfo );\n\
							break;\n\
						case \"2\" :\n\
						case \"3\" :\n\
							app.LogMessage( \"\\tUses: Object Reference Mode\", siSeverity.siInfo );\n\
							break;\n\
						default :\n\
							app.LogMessage( \"\\tReference Mode = \" + ReferenceType.ToString(), siSeverity.siInfo );\n\
							break;\n\
					}\n\
					// The contents of the cluster can be found in this safearray\n\
					// (which we can read via the VBArray object)\n\
					ClusterElementCollection oShapeKeyElements = oProperty.get_Elements();\n\
					Array aXYZArray = (Array)oShapeKeyElements.Array;\n\
					for ( int i=0; i&lt;aXYZArray.GetLength(aXYZArray.Rank-1); i++ ) {\n\
						// Print out the x,y,z values\n\
						app.LogMessage( \"\\tpnt[\"+ aElements.GetValue(i).ToString() + \"] has position (\"\n\
							+ Math.Round( (double)aXYZArray.GetValue(0,i), 3 ).ToString() + \",\"\n\
							+ Math.Round( (double)aXYZArray.GetValue(1,i), 3 ).ToString() + \",\"\n\
							+ Math.Round( (double)aXYZArray.GetValue(2,i), 3 ).ToString() + \")\",\n\
							siSeverity.siInfo\n\
						);\n\
					}\n\
				}\n\
			}\n\
			if ( cntFoundShapes == 0 ) {\n\
				app.LogMessage( \"There are no shapes on this object\", siSeverity.siInfo );\n\
			}\n\
		} catch {\n\
			app.LogMessage( \"Please select a 3D Object\", siSeverity.siInfo );\n\
			return false;\n\
		}\n\
		return true;\n\
	}\n\
	public bool Execute( Context in_ctxt )\n\
	{\n\
		// Set up a little scene\n\
		CXSIApplicationClass app = new CXSIApplicationClass();\n\
		Object[] args = new Object[2] { null, false };\n\
		Object rtn = app.ExecuteCommand( \"NewScene\", args );\n\
		Model root = app.ActiveSceneRoot;\n\
		X3DObject oCircle = root.AddGeometry( \"Sphere\", \"MeshSurface\", null );\n\
		// Move the top and bottom point of the sphere outwards\n\
		Primitive oPrim = oCircle.ActivePrimitive;\n\
		Geometry oGeom = oPrim.get_Geometry( null );\n\
		Object[] aIndexArray = new Object[2] { 1, 0  };\n\
		Object[] aPositionArray = new Object[6] { 0,6,0, 0,-6,0 };\n\
		oGeom.SaveShapeKey( 0.5, 3.0, siShapeReferenceMode.siShapeAbsoluteReferenceMode,\n\
			siShapeInstanceMode.siShapeInstanceOnlyMode, \"ShapeKey1\", aIndexArray, aPositionArray, null );\n\
		// Move two different points - this creates a new, independent cluster\n\
		// We can use a different reference mode for this, but we still specify the\n\
		// point positions in Absolute terms.\n\
		aIndexArray = new Object[2] { 5, 33  };\n\
		aPositionArray = new Object[6] { -2,0,0, 2,0,0 };\n\
		oGeom.SaveShapeKey( 0.8, 1.0, siShapeReferenceMode.siShapeLocalReferenceMode,\n\
			siShapeInstanceMode.siShapeInstanceOnlyMode, \"ShapeKey2\", aIndexArray, aPositionArray, null );\n\
		if ( ShowShapeInformation(oCircle) ) {\n\
			return true;\n\
		} else {\n\
			app.LogMessage(\"ShowShapeInformation failed.\", siSeverity.siInfo);\n\
			return false;\n\
		}\n\
	}\n\
}\n\
// --------------------------------------------------------------------------\n\
// Expected output:\n\
// INFO : Dump of shape key data on object sphere\n\
// INFO : Blended shape at current time: sphere.polymsh.cls.Shape.ResultClusterKey\n\
// INFO : 	Uses: Absolute Reference Mode\n\
// INFO : 	pnt[1] has position (0,0,0)\n\
// INFO : 	pnt[0] has position (0,0,0)\n\
// INFO : Shape key: sphere.polymsh.cls.Shape.ShapeKey\n\
// INFO : 	Uses: Absolute Reference Mode\n\
// INFO : 	pnt[1] has position (0,6,0)\n\
// INFO : 	pnt[0] has position (0,-6,0)\n\
// INFO : Blended shape at current time: sphere.polymsh.cls.Shape1.ResultClusterKey\n\
// INFO : 	Uses: Local Reference Mode\n\
// INFO : 	pnt[5] has position (0,0,0)\n\
// INFO : 	pnt[33] has position (0,0,0)\n\
// INFO : Shape key: sphere.polymsh.cls.Shape1.ShapeKey2\n\
// INFO : 	Uses: Local Reference Mode\n\
// INFO : 	pnt[5] has position (0,-2,0)\n\
// INFO : 	pnt[33] has position (0,-2,0)</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/ShapeClip.html\">ShapeClip</a> <a href=\"#!/url=./si_om/ActionSource.html\">ActionSource</a> <a href=\"#!/url=./si_om/Clip.Source.html\">Clip.Source</a> <a href=\"#!/url=./si_cmds/StoreShapeKey.html\">StoreShapeKey</a> <a href=\"#!/url=./si_cmds/SelectShapeKey.html\">SelectShapeKey</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";