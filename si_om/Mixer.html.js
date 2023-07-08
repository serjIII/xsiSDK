var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Mixer</title>\n\
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
            <h1>Mixer</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Mixer</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_Mixer\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1Mixer.html\">Mixer</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\"><a href=\"#!/url=./si_om/ProjectItem.html\">ProjectItem</a></p>\n\
<p class=\"level3\"><a href=\"#!/url=./si_om/Clip.html\">Clip</a></p>\n\
<p class=\"level4\"><a href=\"#!/url=./si_om/ClipContainer.html\">ClipContainer</a></p>\n\
<p class=\"level5\">Mixer</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> This object represents the Animation Mixer, which is nested directly under the \n\
<a href=\"#!/url=./si_om/Model.html\">Model</a>. The Mixer object is a <a href=\"#!/url=./si_om/ClipContainer.html\">ClipContainer</a> and\n\
so provides access to the standard elements of a mixer: its <a href=\"#!/url=./si_om/Track.html\">Track</a>s,\n\
<a href=\"#!/url=./si_om/Transition.html\">Transition</a>s, <a href=\"#!/url=./si_om/Clip.html\">Clip</a>s, and <a href=\"#!/url=./si_om/ClipRelation.html\">ClipRelation</a>s.<br /><br />\n\
You can check if an object has a mixer by calling the <a href=\"#!/url=./si_om/Model.HasMixer.html\">Model.HasMixer</a> method.\n\
If it doesn\'t, you can create one with the <a href=\"#!/url=./si_om/Model.AddMixer.html\">Model.AddMixer</a> method.<br /><br />\n\
The Mixer stores all of the <a href=\"#!/url=./si_om/Model.html\">Model</a>\'s high-level animation and audio clips, so \n\
when you call its base property <a href=\"#!/url=./si_om/ClipContainer.Clips.html\">ClipContainer.Clips</a>, you get a collection\n\
of clips only on the current model (there is no recursion). If any of these are compound clips,\n\
none of its contents are returned, just the top level.\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/ClipContainer.AddRelation.html\">AddRelation</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddScriptedOp.html\">AddScriptedOp</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddScriptedOpFromFile.html\">AddScriptedOpFromFile</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AnimatedParameters2.html\">AnimatedParameters2</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.BelongsTo.html\">BelongsTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.EvaluateAt.html\">EvaluateAt</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.GetICEAttributeFromName.html\">GetICEAttributeFromName</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsA.html\">IsA</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsAnimated2.html\">IsAnimated2</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsKindOf.html\">IsKindOf</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsLocked.html\">IsLocked</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsSelected.html\">IsSelected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockOwners.html\">LockOwners</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.RemoveICEAttribute.html\">RemoveICEAttribute</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetAsSelected.html\">SetAsSelected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetCapabilityFlag.html\">SetCapabilityFlag</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetLock.html\">SetLock</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.TaggedParameters.html\">TaggedParameters</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.UnSetLock.html\">UnSetLock</a>		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.BranchFlag.html\">BranchFlag</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Capabilities.html\">Capabilities</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ClipContainer.Clips.html\">Clips</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Clip.Effect.html\">Effect</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.EvaluationID.html\">EvaluationID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Families.html\">Families</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.HierarchicalEvaluationID.html\">HierarchicalEvaluationID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.ICEAttributes.html\">ICEAttributes</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockLevel.html\">LockLevel</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockMasters.html\">LockMasters</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockType.html\">LockType</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Clip.MappedItems.html\">MappedItems</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Model.html\">Model</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ClipContainer.NestedRelations.html\">NestedRelations</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.ObjectID.html\">ObjectID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Owners.html\">Owners</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.PPGLayout.html\">PPGLayout</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Parameters.html\">Parameters</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Parent3DObject.html\">Parent3DObject</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Clip.Properties.html\">Properties</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Clip.Relations.html\">Relations</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Selected.html\">Selected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Clip.Source.html\">Source</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Clip.TimeControl.html\">TimeControl</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ClipContainer.Tracks.html\">Tracks</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ClipContainer.Transitions.html\">Transitions</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to find all sources in the scene when there \n\
	are several levels of models all with their own sources. Something to note\n\
	is that only ActionSources are returned from the Model.\n\
*/\n\
NewScene( null, false );\n\
// Set up the scene (details are at the bottom of this example)\n\
var m1 = ActiveSceneRoot.AddModel(); m1.Name = \"Larry\"\n\
var m2 = m1.AddModel(); m2.Name = \"Curly\"\n\
var m3 = m2.AddModel(); m3.Name = \"Moe\"\n\
CreateModelSource( ActiveSceneRoot );\n\
CreateImageSource(m1);\n\
CreateShapeAction(m2);\n\
CreateAudioSource(m3);\n\
// Start with the top level model (the Scene_Root) and the use the Models property\n\
// to search recursively. Since all action sources are stored under the model, once\n\
// we\'ve visited each model, we will have found each source in the scene.\n\
LogMessage( \"RecursiveModelSearch results: \" + RecursiveModelSearch(ActiveSceneRoot) );\n\
// Expected Results:\n\
// INFO : MODEL: Scene_Root\n\
// INFO : MODEL: Larry\n\
// INFO : MODEL: Curly\n\
// INFO : MODEL: Moe\n\
// INFO : MODEL: Biped_Skeleton_Generated\n\
// INFO : RecursiveModelSearch results: Curly.Mixer.ShapeKey,Curly.Mixer.Shape_ClusterClip_source,Curly.Mixer.ShapeKey1,Curly.Mixer.ShapeKey2\n\
function RecursiveModelSearch( in_model )\n\
{\n\
	LogMessage( \"MODEL: \" + in_model.FullName );\n\
	// Start with the top-level model\n\
	// Get a comma-delimited string of all sources found under this model\n\
	var foundsrcs = ( in_model.Sources ) ? in_model.Sources.GetAsText() : \"\";\n\
	// For every model nested within this scene, check it for sources\n\
	var mdl = new Enumerator( in_model.Models(true) );\n\
	for ( ; ! mdl.atEnd(); mdl.moveNext() ) {\n\
		LogMessage( \"MODEL: \" + mdl.item().FullName );\n\
		var results = in_model.Sources;\n\
		if ( results ) {\n\
			foundsrcs += \",\" + mdl.item().Sources.GetAsText();\n\
		}\n\
	}\n\
	// Correct any instances of a double or leading/trailing commas which may have \n\
	// occurred when reading a model with no sources\n\
	foundsrcs = foundsrcs.replace( /,,/g, \",\" );\n\
	foundsrcs = foundsrcs.replace( /^,/, \"\" );\n\
	foundsrcs = foundsrcs.replace( /,$/, \"\" );\n\
	// Return the string, which can be used by the caller to set an XSICollection,\n\
	// populate a combo box, etc.\n\
	return foundsrcs;\n\
}\n\
// This is an handy function to have around if you\'re going to create an action \n\
// source or clip on a parameter that is in a nested model (ie., not directly \n\
// under the Scene_Root) because AddClip will force a mapping template if your \n\
// parameter is not relative.\n\
function GetRelativeNameForTarget( in_param )\n\
{\n\
	var mdlname = in_param.Model.FullName;\n\
	if ( mdlname == \"Scene_Root\" ) {\n\
		return in_param.FullName;\n\
	} else {\n\
		var tmp = in_param.FullName;\n\
		var re = new RegExp( mdlname + \".\", \"i\" );\n\
		return tmp.replace( re, \"\" );\n\
	}\n\
}\n\
// Helper functions to create &amp; instantiate sources\n\
function CreateShapeAction( in_model )\n\
{\n\
	var obj = in_model.AddGeometry( \"Cone\", \"MeshSurface\" );\n\
	var target = obj + \".pnt[0,2,5,8,11,14,17,20,23]\"\n\
	SetSelFilter( \"Vertex\" );\n\
	SelectGeometryComponents( target );\n\
	Translate( null, 0, -2, 0, siAbsolute, siPivot, siObj, siY, null, \n\
		null, null, null, null, null, null, null, null, 1 );\n\
	var clip = SaveShapeKey( target, null, null, 1, null, null, null, \n\
		null, siShapeObjectReferenceMode );\n\
	Translate( null, 0, -1, 0, siAbsolute, siPivot, siObj, siY, null, \n\
		null, null, null, null, null, null, null, null, 1 );\n\
	SaveShapeKey( target, null, null, 36, null, null, null, null, \n\
		siShapeObjectReferenceMode );\n\
	Translate( null, 0, 0, 0, siAbsolute, siPivot, siObj, siY, null, \n\
		null, null, null, null, null, null, null, null, 1 );\n\
	SaveShapeKey( target, null, null, 67, null, null, null, null, \n\
		siShapeObjectReferenceMode );\n\
}\n\
function CreateAudioSource( in_model )\n\
{\n\
	var mixmaster = ( in_model.HasMixer() ) ? in_model.Mixer : in_model.AddMixer();\n\
	var aud_track = AddTrack( in_model, mixmaster, 2 );\n\
	var aud_path = XSIUtils.BuildPath(\n\
		Application.InstallationPath(siFactoryPath),\n\
		\"Data\", \"XSI_SAMPLES\", \"Audio\", \"Torefaction.wav\"\n\
	);\n\
	var aud_src = ImportAudio( in_model, aud_path );\n\
	AddAudioClip( in_model, aud_src, mixmaster, aud_track, 22 );\n\
}\n\
function CreateImageSource( in_model )\n\
{\n\
	var cube = in_model.AddGeometry( \"Cube\", \"MeshSurface\" );\n\
	SelectObj( cube );\n\
	ApplyShader( null, null, null, siUnspecified, siLetLocalMaterialsOverlap );\n\
	CreateProjection( cube, siTxtSpherical, siTxtDefaultSpherical, \"\", \"Texture_Projection\", null, siRelDefault, \"\" );\n\
	BlendInTextureLayers( \"Image\", cube, 1, false, siReplaceAndBlendInPreset, true, true, false, false);\n\
}\n\
function CreateModelSource()\n\
{\n\
	ImportModel( \"S:\\\\Data\\\\XSI_SAMPLES\\\\Models\\\\Biped_Skeleton_Generated.emdl\", null, true, \n\
		null, null, null, null );\n\
}</pre></td></tr>\n\
</table>\n\
</div><h4>2. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\"># \n\
# This example demonstrates how to access every clip in the specified model. \n\
# In this case there are two clips in different models and only the top \n\
# model has been queried, so only the constraint action will be returned\n\
#\n\
def FindClipsUnderModel( in_model ) :\n\
	# First make sure we have a mixer\n\
	if  in_model.HasMixer()==0 :\n\
		return \"\"\n\
	mixer = in_model.Mixer\n\
	# We will return a comma-delimited string of all sources found\n\
	foundclips = \"\"\n\
	Application.LogMessage( \"\\n\\tSearching \" + mixer.FullName + \" for clips...\", c.siComment );\n\
	if mixer.Clips.Count &gt; 0 :\n\
		for clip in mixer.Clips :\n\
			Application.LogMessage( \"\\t\" + clip.FullName + \" is a \" + ClassName(clip) + \"/\" + clip.Type, c.siComment )\n\
			if foundclips == \"\" :\n\
				foundclips = foundclips + clip.FullName \n\
			else : \n\
				foundclips = foundclips + \",\" + clip.FullName\n\
	else :\n\
		Application.LogMessage( \"\\tNo sources found on \" + mixer.FullName, c.siComment )\n\
	return foundclips\n\
# Helper function to strip off model name for FullNames\n\
def GetRelativeNameForTarget( in_param ) :\n\
	mdlname = in_param.Model.FullName\n\
	if  mdlname == \"Scene_Root\" :\n\
		return in_param.FullName\n\
	else :\n\
		tmp = in_param.FullName\n\
		return tmp.replace( mdlname + \".\", \"\" )\n\
# Helper function to create constraint-based action\n\
def CreateConstraintAction( in_model ) :\n\
	# Build Orientation Constraint to null from cylinder\n\
	a = in_model.AddNull()\n\
	Application.SelectObj(a)\n\
	Application.Translate(\"\", 5.5173674053756, 2.96222253259053, \n\
		-0.296222253259053, c.siRelative, c.siView, c.siObj, \n\
		c.siXYZ, \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", 1)\n\
	b = in_model.AddGeometry(\"Cylinder\", \"MeshSurface\" )\n\
	Application.SetUserPref( \"SI3D_CONSTRAINT_COMPENSATION_MODE\", 1)\n\
	Application.ApplyCns( \"Orientation\", b, a, 1 )\n\
	Application.SetUserPref( \"SI3D_CONSTRAINT_COMPENSATION_MODE\", 0 )\n\
	# Relative names (needed for AddClip under a nested model)\n\
	relB = GetRelativeNameForTarget( b )\n\
	# Make it into an Action (constraints are always on global Kinematics)\n\
	# Get list of parameters to mark\n\
	params = relB + \"*/.kine.global.ori.euler\"\n\
	Application.StoreAction( in_model, params, 4, \n\
		\"StoredAnimCnsAction\", 1, 1, 100, 0, 0, 1, 1 )\n\
# Helper function to create fcurve-based action\n\
def CreateFCurveAction( in_model ) :\n\
	obj = in_model.AddNull()\n\
	# Set FCurves on the null\'s scaling\n\
	keys = [ 5, 1.2,  20, 1.7,  45, 2.0,  90, 2.5 ]\n\
	obj.sclx.AddFCurve2( keys )\n\
	keyfactor = 0.66\n\
	posfactor = 0.54\n\
	i=0\n\
	while i &lt; len(keys) :\n\
		keys[i] = keys[i] + keyfactor\n\
		keys[i+1] = keys[i+1] * posfactor\n\
		i = i + 2\n\
	obj.scly.AddFCurve2( keys )\n\
	keyfactor = 0.27\n\
	posfactor = 0.44\n\
	while i &lt; len(keys) :\n\
		keys[i] = keys[i] - keyfactor\n\
		keys[i+1] = keys[i+1] * posfactor\n\
		i = i + 2\n\
	obj.sclz.AddFCurve2( keys )\n\
	# Get list of parameters to mark\n\
	params = obj.sclx.FullName + \",\" + obj.scly.FullName + \",\" + obj.sclz.FullName\n\
	# Make the FCurves into an Action\n\
	src = Application.StoreAction( in_model, params, 2, \"StoredAnimFCrvAction\" )\n\
	clip = Application.AddClip( in_model, src )\n\
	# Add some clip effects to it\n\
	toclip = clip.Name + \".ActionClip\"\n\
	rtn = Application.GetMappingRule( toclip, 0 )\n\
	fromclip = rtn.Value( \"From\" )\n\
	Application.SetMappingRule( toclip, fromclip, \"this+5\", 1 )\n\
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\
# 	MAIN\n\
#\n\
Application.NewScene( \"\", 0)\n\
from win32com.client import constants as c\n\
# Set up some animation action nested inside models (see bottom for functions)\n\
CreateFCurveAction( Application.ActiveSceneRoot )\n\
m1 = Application.ActiveSceneRoot.AddModel()\n\
m1.Name = \"Sunshine\"\n\
CreateConstraintAction( m1 )\n\
# Get a collection of clips under every model\n\
results = FindClipsUnderModel( Application.ActiveSceneRoot )\n\
if results != \"\" :\n\
	cliplist = XSIFactory.CreateActiveXObject( \"XSI.Collection\" )\n\
	cliplist.AddItems( results )\n\
# Print out list\n\
for clip in cliplist :\n\
	Application.LogMessage( clip.Name + \" is a \" + clip.Type )\n\
# Expected results:\n\
#\n\
#	Searching Mixer for clips...\n\
#	Mixer.Mixer_Anim_Track.StoredAnimFCrvAction_Clip is a Clip/mixeranimclip\n\
#INFO : StoredAnimFCrvAction_Clip is a mixeranimclip</pre></td></tr>\n\
</table>\n\
</div><h4>3. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example demonstrates how to crawl through the Mixer to try and extract\n\
\' all the interesting pieces of data, through clips, sources, tracks, etc.\n\
\'\n\
NewScene , false\n\
\' Set up some clips in the mixer\n\
CreateStaticAction( ActiveSceneRoot )\n\
CreateShapeAction( ActiveSceneRoot )\n\
CreateAudioSource( ActiveSceneRoot )\n\
\' Traverse the mixer, finding as much info as we can\n\
ReadMixerContents ActiveSceneRoot.Mixer\n\
sub ReadMixerContents( in_mixer )\n\
	LogMessage vbTab &amp; \"Reading \" &amp; in_mixer.FullName &amp; \" in ReadMixerContents()\" \n\
	\' CLIPS\n\
	LogMessage vbTab &amp; vbTab &amp; \"Found \" &amp; in_mixer.Clips.Count &amp; \" clip(s).\"\n\
	ReadClipsFromContainer in_mixer \n\
	\' TRACKS\n\
	LogMessage vbTab &amp; vbTab &amp; \"Found \" &amp; in_mixer.Tracks.Count &amp; \" track(s).\"\n\
	for each trk in in_mixer.Tracks\n\
		\' TRACKS::CLIPS\n\
		ReadClipsFromContainer trk \n\
	next\n\
	\' TRANSITIONS\n\
	LogMessage vbTab &amp; vbTab &amp; \"Found \" &amp; in_mixer.Transitions.Count &amp; \" transition(s).\"\n\
	for each trns in in_mixer.Transitions\n\
		LogMessage vbTab &amp; vbTab &amp; vbTab &amp; \"Found the \" &amp; trns.FullName &amp;  _\n\
			\" transition which starts at frame \" &amp; trns.StartClip &amp;  _\n\
			\" and ends at frame \" &amp; trns.EndClip\n\
	next\n\
	\' NESTED RELATIONS\n\
	LogMessage vbTab &amp; vbTab &amp; \"Found \" &amp; in_mixer.NestedRelations.Count &amp; \" nested relation(s).\"\n\
	if in_mixer.NestedRelations.Count &gt; 0 then\n\
		ReadRelations in_mixer.NestedRelations\n\
	end if\n\
end sub\n\
sub ReadClipsFromContainer( in_can )\n\
	LogMessage vbTab &amp; \"Reading \" &amp; in_can.FullName &amp; \" in ReadClipsFromContainer()\"\n\
	for each clp in in_can.Clips\n\
		\' MAPPEDITEMS\n\
		if clp.Type &lt;&gt; siClipAudioType then\n\
			if TypeName(clp.MappedItems) &lt;&gt; \"Nothing\" then\n\
				LogMessage vbTab &amp; vbTab &amp; \"Found \" &amp; clp.MappedItems.Count &amp; \" mapped items(s)\"\n\
				for each mapping in clp.MappedItems\n\
					LogMessage vbTab &amp; vbTab &amp; vbTab &amp; mapping.FullName &amp; \": \" &amp; ClassName(mapping)\n\
					\' MAPPEDITEMS::CLIPEFFECTITEM\n\
					ReadClipEffectItem mapping.ClipEffectItem \n\
				next\n\
			end if\n\
		end if\n\
		\' TIMECONTROL\n\
		if  TypeName(clp.TimeControl) &lt;&gt; \"Nothing\" then\n\
			LogMessage vbTab &amp; vbTab &amp; \"Found this clip\'s time control: \" &amp; clp.TimeControl.FullName\n\
			set tc = clp.TimeControl\n\
			LogMessage vbTab &amp; vbTab &amp; vbTab &amp; \"Scaling Factor: \" &amp; tc.Scale \n\
			LogMessage vbTab &amp; vbTab &amp; vbTab &amp; \"Start Offset: \" &amp; tc.StartOffset \n\
			LogMessage vbTab &amp; vbTab &amp; vbTab &amp; \"First Frame: \" &amp; tc.ClipIn \n\
			LogMessage vbTab &amp; vbTab &amp; vbTab &amp; \"Last Frame: \" &amp; tc.ClipOut \n\
			LogMessage vbTab &amp; vbTab &amp; vbTab &amp; \"siTimeControlExtrapolationType before this clip: \" _\n\
				&amp; tc.ExtrapolationBeforeType &amp; \" (\" &amp; tc.ExtrapolationBeforeValue &amp; \")\" \n\
			LogMessage vbTab &amp; vbTab &amp; vbTab &amp; \"siTimeControlExtrapolationType after this clip: \" _\n\
				&amp; tc.ExtrapolationAfterType &amp; \" (\" &amp; tc.ExtrapolationAfterValue &amp; \")\" \n\
		else\n\
			LogMessage vbTab &amp; \"TimeControl is not available on this clip.\"\n\
		end if\n\
		\' SOURCE\n\
		LogMessage vbTab &amp; vbTab &amp; \"Found this clip\'s source: \" &amp; clp.Source.FullName &amp; \"(\" &amp; ClassName(clp.Source) &amp; \")\"\n\
		\' EFFECT\n\
		if TypeName(clp.Effect) &lt;&gt; \"Nothing\" then\n\
			LogMessage vbTab &amp; vbTab &amp; \"Found this clip\'s effect: \" &amp; clp.Effect.FullName \n\
			ReadClipEffect clp.Effect \n\
		end if\n\
		\' RELATIONS\n\
		LogMessage vbTab &amp; vbTab &amp; \"Found \" &amp; clp.Relations.Count &amp; \" relation(s) on this clip.\" \n\
		ReadRelations clp.Relations \n\
	next\n\
end sub\n\
sub ReadClipEffect( in_clpeff )\n\
	LogMessage vbTab &amp; \"Reading \" &amp; in_clpeff.FullName &amp; \" in ReadClipEffect()\"\n\
	\' CLIPEFFECTITEMS\n\
	LogMessage vbTab &amp; vbTab &amp; \"Found \" &amp; in_clpeff.Items.Count &amp; \" clip effect item(s)\" \n\
	for each thing in in_clpeff.Items\n\
		ReadClipEffectItem thing\n\
	next\n\
	\' VARIABLES\n\
	LogMessage vbTab &amp; vbTab &amp; \"Found \" &amp; in_clpeff.Variables.Count &amp; \" variables(s)\" \n\
	if  in_clpeff.Variables.Count &gt; 0 then\n\
		for each var in in_clpeff.Variables\n\
			LogMessage vbTab &amp; vbTab &amp; vbTab &amp; \"Found this variable on the clip effect: \" &amp; var.FullName\n\
		next\n\
	end if\n\
	\' TIMEREFERENCE\n\
	if TypeName(in_clpeff.TimeReference) &lt;&gt; \"Nothing\" then\n\
		dim trparams\n\
		if in_clpeff.TimeReference then\n\
			trparams = \"spans over extrapolation (siExtrapolatedClip)\"\n\
		else \n\
			trparams = \"repeats itself over time (siOriginalClip)\"\n\
		end if\n\
		LogMessage vbTab &amp; vbTab &amp; \"Found this time reference indicating that this clip effect item: \" &amp; trparams \n\
	else\n\
		LogMessage vbTab &amp; vbTab &amp; \"No time reference found on the clip effect\" \n\
	end if\n\
	\' POSEEFFECT\n\
	if TypeName(in_clpeff.PoseEffect) &lt;&gt; \"Nothing\" then\n\
		LogMessage vbTab &amp; vbTab &amp; \"Found this pose effect property on the clip effect: \" _\n\
			&amp; in_clpeff.PoseEffect.FullName &amp; \" containing \" _\n\
			&amp; in_clpeff.PoseEffect.Parameters.Count &amp; \" parameters....\"\n\
		set peparams = in_clpeff.PoseEffect.Parameters\n\
		for each p in peparams\n\
			LogMessage vbTab &amp; vbTab &amp; vbTab &amp; \"Found this parameter on the pose effect property: \" &amp; p.FullName \n\
		next\n\
	else\n\
		LogMessage vbTab &amp; vbTab &amp; \"No pose effect property found on the clip effect\" \n\
	end if\n\
	\' ISACTIVE\n\
	LogMessage vbTab &amp; vbTab &amp; \"Is this clip effect active? -- \" &amp; in_clpeff.IsActive \n\
	\' ISPOSEEFFECTACTIVE\n\
	LogMessage vbTab &amp; vbTab &amp; \"Is the pose effect on this clip effect active? -- \" &amp; in_clpeff.IsPoseEffectActive \n\
end sub\n\
sub ReadRelations( in_rels )\n\
	LogMessage vbTab &amp; \"Reading \" &amp; in_rels.GetAsText() &amp; \" in ReadRelations()\" \n\
	for each rel in in_rels\n\
		LogMessage vbTab &amp; vbTab &amp; vbTab &amp; \"Master: \" &amp; in_rels(r).MasterClip\n\
		LogMessage vbTab &amp; vbTab &amp; vbTab &amp; \"Slave: \" &amp; in_rels(r).SlaveClip\n\
	next\n\
end sub\n\
sub ReadClipEffectItem( in_clpeffitm )\n\
	LogMessage vbTab &amp; vbTab &amp; \"Reading \" &amp; in_clpeffitm.FullName &amp; \" in ReadClipEffectItem()\" \n\
	LogMessage vbTab &amp; vbTab &amp; vbTab &amp; \"Value of \" &amp; in_clpeffitm.Parameter.FullName &amp; \" = \" &amp; in_clpeffitm.Parameter.Value \n\
	dim str \n\
	if in_clpeffitm.Expression = \"\" then\n\
		str = \"(no expression)\" \n\
	else\n\
		str = in_clpeffitm.Expression\n\
	end if\n\
	LogMessage vbTab &amp; vbTab &amp; vbTab &amp; \"Value of ClipEffectItem.Expression = \" &amp; str \n\
end sub\n\
\' Expected Results:\n\
\'INFO : 	Reading Mixer in ReadMixerContents()\n\
\'INFO : 		Found 2 clip(s).\n\
\'INFO : 	Reading Mixer in ReadClipsFromContainer()\n\
\'INFO : 		Found 1 mapped items(s)\n\
\'INFO : 			MappedItem: MappedItem\n\
\'INFO : 		Reading  in ReadClipEffectItem()\n\
\'INFO : 			Value of Mixer.Mixer_Shape_Track.Shape_ClusterClip.actionclip.param = 0\n\
\'INFO : 			Value of ClipEffectItem.Expression = (no expression)\n\
\'INFO : 		Found this clip\'s time control: Mixer.Mixer_Shape_Track.Shape_ClusterClip.actionclip.timectrl\n\
\'INFO : 			Scaling Factor: 1\n\
\'INFO : 			Start Offset: 1\n\
\'INFO : 			First Frame: 1\n\
\'INFO : 			Last Frame: 100\n\
\'INFO : 			siTimeControlExtrapolationType before this clip: 0 (0)\n\
\'INFO : 			siTimeControlExtrapolationType after this clip: 0 (0)\n\
\'INFO : 		Found this clip\'s source: Mixer.Shape_ClusterClip_source(ActionSource)\n\
\'INFO : 		Found this clip\'s effect: \n\
\'INFO : 	Reading  in ReadClipEffect()\n\
\'INFO : 		Found 1 clip effect item(s)\n\
\'INFO : 		Reading  in ReadClipEffectItem()\n\
\'INFO : 			Value of Mixer.Mixer_Shape_Track.Shape_ClusterClip.actionclip.param = 0\n\
\'INFO : 			Value of ClipEffectItem.Expression = (no expression)\n\
\'INFO : 		Found 0 variables(s)\n\
\'INFO : 		Found this time reference indicating that this clip effect item: spans over extrapolation (siExtrapolatedClip)\n\
\'INFO : 		Found this pose effect property on the clip effect: Mixer.Mixer_Shape_Track.Shape_ClusterClip.actionclip.StaticKineState containing 9 parameters....\n\
\'INFO : 			Found this parameter on the pose effect property: Mixer.Mixer_Shape_Track.Shape_ClusterClip.actionclip.StaticKineState.sclx\n\
\'INFO : 			Found this parameter on the pose effect property: Mixer.Mixer_Shape_Track.Shape_ClusterClip.actionclip.StaticKineState.scly\n\
\'INFO : 			Found this parameter on the pose effect property: Mixer.Mixer_Shape_Track.Shape_ClusterClip.actionclip.StaticKineState.sclz\n\
\'INFO : 			Found this parameter on the pose effect property: Mixer.Mixer_Shape_Track.Shape_ClusterClip.actionclip.StaticKineState.posx\n\
\'INFO : 			Found this parameter on the pose effect property: Mixer.Mixer_Shape_Track.Shape_ClusterClip.actionclip.StaticKineState.posy\n\
\'INFO : 			Found this parameter on the pose effect property: Mixer.Mixer_Shape_Track.Shape_ClusterClip.actionclip.StaticKineState.posz\n\
\'INFO : 			Found this parameter on the pose effect property: Mixer.Mixer_Shape_Track.Shape_ClusterClip.actionclip.StaticKineState.orix\n\
\'INFO : 			Found this parameter on the pose effect property: Mixer.Mixer_Shape_Track.Shape_ClusterClip.actionclip.StaticKineState.oriy\n\
\'INFO : 			Found this parameter on the pose effect property: Mixer.Mixer_Shape_Track.Shape_ClusterClip.actionclip.StaticKineState.oriz\n\
\'INFO : 		Is this clip effect active? -- True\n\
\'INFO : 		Is the pose effect on this clip effect active? -- False\n\
\'INFO : 		Found 0 relation(s) on this clip.\n\
\'INFO : 	Reading  in ReadRelations()\n\
\'INFO : 		Found this clip\'s time control: Mixer.Mixer_Audio_Track.Clip.timectrl\n\
\'INFO : 			Scaling Factor: 1\n\
\'INFO : 			Start Offset: 22\n\
\'INFO : 			First Frame: 1\n\
\'INFO : 			Last Frame: 6.87475789516606\n\
\'INFO : 			siTimeControlExtrapolationType before this clip: 0 (0)\n\
\'INFO : 			siTimeControlExtrapolationType after this clip: 0 (0)\n\
\'INFO : 		Found this clip\'s source: Sources.NEWALERT_WAV(Source)\n\
\'INFO : 		Found 0 relation(s) on this clip.\n\
\'INFO : 	Reading  in ReadRelations()\n\
\'INFO : 		Found 2 track(s).\n\
\'INFO : 	Reading Mixer.Mixer_Shape_Track in ReadClipsFromContainer()\n\
\'INFO : 		Found 1 mapped items(s)\n\
\'INFO : 			MappedItem: MappedItem\n\
\'INFO : 		Reading  in ReadClipEffectItem()\n\
\'INFO : 			Value of Mixer.Mixer_Shape_Track.Shape_ClusterClip.actionclip.param = 0\n\
\'INFO : 			Value of ClipEffectItem.Expression = (no expression)\n\
\'INFO : 		Found this clip\'s time control: Mixer.Mixer_Shape_Track.Shape_ClusterClip.actionclip.timectrl\n\
\'INFO : 			Scaling Factor: 1\n\
\'INFO : 			Start Offset: 1\n\
\'INFO : 			First Frame: 1\n\
\'INFO : 			Last Frame: 100\n\
\'INFO : 			siTimeControlExtrapolationType before this clip: 0 (0)\n\
\'INFO : 			siTimeControlExtrapolationType after this clip: 0 (0)\n\
\'INFO : 		Found this clip\'s source: Mixer.Shape_ClusterClip_source(ActionSource)\n\
\'INFO : 		Found this clip\'s effect: \n\
\'INFO : 	Reading  in ReadClipEffect()\n\
\'INFO : 		Found 1 clip effect item(s)\n\
\'INFO : 		Reading  in ReadClipEffectItem()\n\
\'INFO : 			Value of Mixer.Mixer_Shape_Track.Shape_ClusterClip.actionclip.param = 0\n\
\'INFO : 			Value of ClipEffectItem.Expression = (no expression)\n\
\'INFO : 		Found 0 variables(s)\n\
\'INFO : 		Found this time reference indicating that this clip effect item: spans over extrapolation (siExtrapolatedClip)\n\
\'INFO : 		Found this pose effect property on the clip effect: Mixer.Mixer_Shape_Track.Shape_ClusterClip.actionclip.StaticKineState containing 9 parameters....\n\
\'INFO : 			Found this parameter on the pose effect property: Mixer.Mixer_Shape_Track.Shape_ClusterClip.actionclip.StaticKineState.sclx\n\
\'INFO : 			Found this parameter on the pose effect property: Mixer.Mixer_Shape_Track.Shape_ClusterClip.actionclip.StaticKineState.scly\n\
\'INFO : 			Found this parameter on the pose effect property: Mixer.Mixer_Shape_Track.Shape_ClusterClip.actionclip.StaticKineState.sclz\n\
\'INFO : 			Found this parameter on the pose effect property: Mixer.Mixer_Shape_Track.Shape_ClusterClip.actionclip.StaticKineState.posx\n\
\'INFO : 			Found this parameter on the pose effect property: Mixer.Mixer_Shape_Track.Shape_ClusterClip.actionclip.StaticKineState.posy\n\
\'INFO : 			Found this parameter on the pose effect property: Mixer.Mixer_Shape_Track.Shape_ClusterClip.actionclip.StaticKineState.posz\n\
\'INFO : 			Found this parameter on the pose effect property: Mixer.Mixer_Shape_Track.Shape_ClusterClip.actionclip.StaticKineState.orix\n\
\'INFO : 			Found this parameter on the pose effect property: Mixer.Mixer_Shape_Track.Shape_ClusterClip.actionclip.StaticKineState.oriy\n\
\'INFO : 			Found this parameter on the pose effect property: Mixer.Mixer_Shape_Track.Shape_ClusterClip.actionclip.StaticKineState.oriz\n\
\'INFO : 		Is this clip effect active? -- True\n\
\'INFO : 		Is the pose effect on this clip effect active? -- False\n\
\'INFO : 		Found 0 relation(s) on this clip.\n\
\'INFO : 	Reading  in ReadRelations()\n\
\'INFO : 	Reading Mixer.Mixer_Audio_Track in ReadClipsFromContainer()\n\
\'INFO : 		Found this clip\'s time control: Mixer.Mixer_Audio_Track.Clip.timectrl\n\
\'INFO : 			Scaling Factor: 1\n\
\'INFO : 			Start Offset: 22\n\
\'INFO : 			First Frame: 1\n\
\'INFO : 			Last Frame: 6.87475789516606\n\
\'INFO : 			siTimeControlExtrapolationType before this clip: 0 (0)\n\
\'INFO : 			siTimeControlExtrapolationType after this clip: 0 (0)\n\
\'INFO : 		Found this clip\'s source: Sources.NEWALERT_WAV(Source)\n\
\'INFO : 		Found 0 relation(s) on this clip.\n\
\'INFO : 	Reading  in ReadRelations()\n\
\'INFO : 		Found 0 transition(s).\n\
\'INFO : 		Found 0 nested relation(s).\n\
\' Helper routines to create the sources\n\
sub CreateStaticAction( in_model )\n\
	set obj = in_model.AddGeometry( \"Cone\", \"MeshSurface\" )\n\
	targets = Array( obj.rotx.FullName, obj.roty.FullName, obj.rotz.FullName )\n\
	statics = Array( 22.5, 90, 45 )\n\
	actives = Array( true, true, true )\n\
	in_model.AddActionSource \"StoredAnimStaticAction\", targets, statics, actives \n\
end sub\n\
sub CreateShapeAction( in_model )\n\
	set obj = in_model.AddGeometry( \"Cone\", \"MeshSurface\" )\n\
	target = obj &amp; \".pnt[0,2,5,8,11,14,17,20,23]\"\n\
	SetSelFilter \"Vertex\" \n\
	SelectGeometryComponents target \n\
	Translate , 0, -2, 0, siAbsolute, siPivot, siObj, siY, , , , , , , , , , 1 \n\
	set clip = SaveShapeKey( target, , , 1, , , , , siShapeObjectReferenceMode )\n\
	target = clip.Source.SourceItems(0).Target\n\
	Translate , 0, -1, 0, siAbsolute, siPivot, siObj, siY, , , , , , , , , , 1 \n\
	SaveShapeKey target, , , 36, , , , , siShapeObjectReferenceMode \n\
	Translate , 0, 0, 0, siAbsolute, siPivot, siObj, siY, , , , , , , , , , 1 \n\
	SaveShapeKey target, , , 67, , , , , siShapeObjectReferenceMode \n\
end sub\n\
sub CreateAudioSource( in_model )\n\
	if in_model.HasMixer() then\n\
		set mixmaster = in_model.Mixer \n\
	else\n\
		set mixmaster = in_model.AddMixer()\n\
	end if\n\
	set aud_track = AddTrack( in_model, mixmaster, 2 )\n\
	var aud_src_path = XSIUtils.BuildPath( Application.InstallationPath( siFactoryPath ), \"Data\", \"XSI_SAMPLES\", \"Audio\", \"Torefaction.wav\" );\n\
var aud_src = ImportAudio( mdl, aud_src_path );\n\
	AddAudioClip in_model, aud_src, mixmaster, aud_track, 22 \n\
end sub</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Model.HasMixer.html\">Model.HasMixer</a> <a href=\"#!/url=./si_om/Model.AddMixer.html\">Model.AddMixer</a> <a href=\"#!/url=./si_om/Model.Mixer.html\">Model.Mixer</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";