var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Clip</title>\n\
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
            <h1>Clip</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Clip</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_Clip\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1Clip.html\">Clip</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\"><a href=\"#!/url=./si_om/ProjectItem.html\">ProjectItem</a></p>\n\
<p class=\"level3\">Clip</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.5</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Clips are instances of animation and shape actions (<a href=\"#!/url=./si_om/ActionSource.html\">ActionSource</a>), audio \n\
and image sources (<a href=\"#!/url=./si_om/Source.html\">Source</a>) and compound clips (<a href=\"#!/url=./si_om/ClipContainer.html\">ClipContainer</a>). \n\
You can check to see the clip type (such as an audio clip) using the <a href=\"#!/url=./si_om/SIObject.Type.html\">SIObject.Type</a> \n\
property which returns one of the values contained in the <a href=\"#!/url=./si_om/siClipType.html\">siClipType</a> enum. <br /><br />\n\
This object also provides access to clip features such as its timing (<a href=\"#!/url=./si_om/TimeControl.html\">TimeControl</a>),\n\
any links to other clips (<a href=\"#!/url=./si_om/ClipRelation.html\">ClipRelation</a>), and any applied effects\n\
(<a href=\"#!/url=./si_om/ClipEffect.html\">ClipEffect</a>). In addition, you can get the underlying source on which this\n\
clip is instantiated (the <a href=\"#!/url=./si_om/Source.html\">Source</a> object via <a href=\"#!/url=./si_om/Clip.Source.html\">Clip.Source</a>) \n\
or the elements of that source (using either the <a href=\"#!/url=./si_om/MappedItem.html\">MappedItem</a> object via \n\
<a href=\"#!/url=./si_om/Clip.MappedItems.html\">Clip.MappedItems</a> or the <a href=\"#!/url=./si_om/AnimationSourceItem.html\">AnimationSourceItem</a> object via \n\
<a href=\"#!/url=./si_om/ActionSource.SourceItems.html\">ActionSource.SourceItems</a>).<br /><br />\n\
Important: While the Clip object represents compound, audio, and image clips, not all Clip \n\
methods and properties are available for these types. For example, the <a href=\"#!/url=./si_om/Clip.MappedItems.html\">Clip.MappedItems</a>\n\
property will fail and report that it is not implemented for these clip types (ie., returns\n\
E_NOTIMPL).<br /><br />\n\
Tip: There is no function in the object model to create clips from sources, but you can use\n\
the <a href=\"#!/url=./si_cmds/AddClip.html\">AddClip</a> command, which returns this object. To access existing Clip\n\
objects, you can get the <a href=\"#!/url=./si_om/ClipCollection.html\">ClipCollection</a> on the <a href=\"#!/url=./si_om/Mixer.html\">Mixer</a> via \n\
the <a href=\"#!/url=./si_om/ClipContainer.Clips.html\">ClipContainer.Clips</a> property.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddCustomOp.html\">AddCustomOp</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddICEAttribute.html\">AddICEAttribute</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Clip.AddProperty.html\">AddProperty</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Clip.AddProperty2.html\">AddProperty2</a>		</td>	</tr>\n\
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
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Clip.Effect.html\">Effect</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.EvaluationID.html\">EvaluationID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Families.html\">Families</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.HierarchicalEvaluationID.html\">HierarchicalEvaluationID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.ICEAttributes.html\">ICEAttributes</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockLevel.html\">LockLevel</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockMasters.html\">LockMasters</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockType.html\">LockType</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Clip.MappedItems.html\">MappedItems</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Model.html\">Model</a>		</td>	</tr>\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Parent3DObject.html\">Parent3DObject</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Clip.Properties.html\">Properties</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Clip.Relations.html\">Relations</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Selected.html\">Selected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Clip.Source.html\">Source</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Clip.TimeControl.html\">TimeControl</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
# This example demonstrates how to create a Clip containing the static\n\
# values of the local position of an object.\n\
#\n\
oRoot = Application.ActiveSceneRoot\n\
oCube = oRoot.AddGeometry( \"Cube\", \"MeshSurface\" )\n\
# Creating the first animation source\n\
sParams = \"cube.kine.local.posx,cube.kine.local.posy,cube.kine.local.posz\"\n\
oSource = Application.StoreAction( oRoot, sParams, 1, \"StoredStaticPose\", 1, 1, 5, 0, 0) \n\
# Creating the first clip\n\
oClip = Application.AddClip( oRoot, oSource )	\n\
Application.LogMessage( \"First created clip \" + oClip.FullName )\n\
# Creating the second animation source\n\
oCube.Parameters(\"posx\").Value = 3.0\n\
oSource2 = Application.StoreAction( oRoot, sParams, 1, \"StoredStaticPose\", 1, 7, 9, 0, 0 )\n\
# Creating the second clip\n\
oClip2 = Application.AddClip(oRoot, oSource2)\n\
Application.LogMessage(\"Second created clip \" + oClip2.FullName)\n\
# Expected results:\n\
#INFO : First created clip Mixer.Mixer_Anim_Track.StoredStaticPose_Clip\n\
#INFO : Second created clip Mixer.Mixer_Anim_Track1.StoredStaticPose1_Clip</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
This example demonstrates working with action and audio sources and clips\n\
*/\n\
NewScene( null, false );\n\
// Do it on a nested model\n\
var mdl = ActiveSceneRoot.AddModel();\n\
mdl.Name = \"TestModel\";\n\
// ----------------------\n\
// Create an fcurve source and instantiate a clip in the mixer\n\
var obj = mdl.AddNull();\n\
// Set FCurves on the null\'s scaling\n\
var keys = new Array( 5, 1.2,  20, 1.7,  45, 2.0,  90, 2.5 );	// X\n\
obj.sclx.AddFCurve2( keys );\n\
var keyfactor = Math.random() * 10;					// Y\n\
var posfactor = Math.random();\n\
for ( var i=0; i&lt;keys.length; i=i+2 ) {\n\
	keys[i] = keys[i] + keyfactor;\n\
	keys[i+1] = keys[i+1] * posfactor;\n\
}\n\
obj.scly.AddFCurve2( keys );\n\
var keyfactor = Math.random() * 10;					// Z\n\
var posfactor = Math.random();\n\
for ( var i=0; i&lt;keys.length; i=i+2 ) {\n\
	keys[i] = keys[i] - keyfactor;\n\
	keys[i+1] = keys[i+1] * posfactor;\n\
}\n\
obj.sclz.AddFCurve2( keys );\n\
// Get list of parameters to mark\n\
var params = obj.sclx.FullName + \",\";\n\
params += obj.scly.FullName + \",\";\n\
params += obj.sclz.FullName;\n\
// Make the FCurves into an Action\n\
var src = StoreAction( mdl, params, 2, \"StoredAnimFCrvAction\" );\n\
AddClip( mdl, src );\n\
// ----------------------\n\
// Add an audio clip to the mixer\n\
var mix;\n\
if ( mdl.HasMixer() ) {\n\
	mix = mdl.Mixer; \n\
} else {\n\
	mix = mdl.AddMixer();\n\
}\n\
var aud_track = AddTrack( mdl, mix, 2 );\n\
var aud_src_path = XSIUtils.BuildPath( Application.InstallationPath( siFactoryPath ), \"Data\", \"XSI_SAMPLES\", \"Audio\", \"Torefaction.wav\" );\n\
var aud_src = ImportAudio( mdl, aud_src_path );\n\
AddAudioClip( mdl, aud_src );\n\
// ----------------------\n\
// Find the clips under the mixer\n\
var cliplist = mdl.Mixer.Clips;\n\
for ( var c=0; c&lt;cliplist.Count; c++ ) {\n\
	var clip = cliplist(c);\n\
	LogMessage( \"----------------------\" );\n\
	LogMessage( \"Found a clip of type \" + clip.Type + \" under \" + mdl.Mixer );\n\
	// Get the underlying source items associated with this clip, but make sure\n\
	// we skip the audio files\n\
	if ( clip.Type == siClipAnimationType ) {\n\
		LogMessage( \"Found \" + clip.MappedItems.Count + \" mapped items on \" + clip );\n\
		for ( var m=0; m&lt;clip.MappedItems.Count; m++ ) {\n\
			var itm = clip.MappedItems(m);\n\
			LogMessage( \"Found this mapped item: \" + itm.Source2 + \" (a \" + ClassName(itm.Source2) + \")\" );\n\
		}\n\
	}\n\
}\n\
// Expected results:\n\
//INFO : ----------------------\n\
//INFO : Found a clip of type mixeranimclip under TestModel.Mixer\n\
//INFO : Found 3 mapped items on TestModel.Mixer.Mixer_Anim_Track.StoredAnimFCrvAction_Clip\n\
//INFO : Found this mapped item: FCurve (a FCurve)\n\
//INFO : Found this mapped item: FCurve (a FCurve)\n\
//INFO : Found this mapped item: FCurve (a FCurve)\n\
//INFO : ----------------------\n\
//INFO : Found a clip of type mixeraudioclip under TestModel.Mixer</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/AddClip.html\">AddClip</a> <a href=\"#!/url=./si_om/ClipContainer.Clips.html\">ClipContainer.Clips</a> <a href=\"#!/url=./si_om/Track.Clips.html\">Track.Clips</a> <a href=\"#!/url=./si_cmds/CopyClipToTrack.html\">CopyClipToTrack</a> <a href=\"#!/url=./si_cmds/AddAudioClip.html\">AddAudioClip</a> <a href=\"#!/url=./si_cmds/ImportAudioAndAddClip.html\">ImportAudioAndAddClip</a> <a href=\"#!/url=./si_cmds/ApplyShapeKey.html\">ApplyShapeKey</a> <a href=\"#!/url=./si_cmds/SaveShapeKey.html\">SaveShapeKey</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";