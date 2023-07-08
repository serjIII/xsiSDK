var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ClipRelation</title>\n\
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
            <h1>ClipRelation</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ClipRelation</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_ClipRelation\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1ClipRelation.html\">ClipRelation</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\"><a href=\"#!/url=./si_om/ProjectItem.html\">ProjectItem</a></p>\n\
<p class=\"level3\">ClipRelation</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> The ClipRelation object represents a relationship between two <a href=\"#!/url=./si_om/Clip.html\">Clip</a>\n\
objects in the animation mixer. Clip relations are particularly useful for maintaining\n\
a relationship between clips of different types, such as an animation clip and an audio clip.\n\
The ClipRelation object provides methods for establishing these links and getting and \n\
setting their properties without using the mixer.<br /><br />\n\
By default a clip relation creates relationships among the start offset, clip in and clip out \n\
values of the linked clips\'s <a href=\"#!/url=./si_om/TimeControl.html\">TimeControl</a>. Clip relations are bi-directional \n\
in the sense that, by modifying the value of one of the related parameters (either on the master \n\
or slave clip) it proportionally affects the value of the other clip. <br /><br />\n\
For each individual relationship there\'s an active state <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> (StartActiveness, \n\
ClipInActiveness and ClipOutActiveness) and an offset. The offset represents the difference \n\
between the value of the master clip parameter and the slave clip parameter.  Modifying the value \n\
of an offset results in changing the value of the slave clip relative to the master clip.  You \n\
can inverse the master and slave clip by using <a href=\"#!/url=./si_om/ClipRelation.SwapMasterAndSlaveClip.html\">ClipRelation.SwapMasterAndSlaveClip</a>. <br /><br />\n\
You can create a ClipRelation using <a href=\"#!/url=./si_om/ClipContainer.AddRelation.html\">ClipContainer.AddRelation</a> and you can \n\
access a ClipRelation using either <a href=\"#!/url=./si_om/Clip.Relations.html\">Clip.Relations</a>  or \n\
<a href=\"#!/url=./si_om/ClipContainer.NestedRelations.html\">ClipContainer.NestedRelations</a>. In order to access the master or slave clip you \n\
can use <a href=\"#!/url=./si_om/ClipRelation.MasterClip.html\">ClipRelation.MasterClip</a> or <a href=\"#!/url=./si_om/ClipRelation.SlaveClip.html\">ClipRelation.SlaveClip</a>.\n\
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
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ClipRelation.SwapMasterAndSlaveClip.html\">SwapMasterAndSlaveClip</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.TaggedParameters.html\">TaggedParameters</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.UnSetLock.html\">UnSetLock</a>		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.EvaluationID.html\">EvaluationID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Families.html\">Families</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.HierarchicalEvaluationID.html\">HierarchicalEvaluationID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.ICEAttributes.html\">ICEAttributes</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockLevel.html\">LockLevel</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockMasters.html\">LockMasters</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockType.html\">LockType</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ClipRelation.MasterClip.html\">MasterClip</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Model.html\">Model</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.ObjectID.html\">ObjectID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Owners.html\">Owners</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.PPGLayout.html\">PPGLayout</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Parameters.html\">Parameters</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Parent3DObject.html\">Parent3DObject</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Selected.html\">Selected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ClipRelation.SlaveClip.html\">SlaveClip</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/* --------------------------------------------------------------------------------------------------\n\
	This example shows how to create a ClipRelation, how to access its offsets and how modifying\n\
	one makes an impact on the TimeControl of the master and slave clip.\n\
*/\n\
NewScene(null, false);\n\
// Set up scene with a cone and add some animation\n\
CreatePrim(\"Cone\", \"MeshSurface\", null, null);\n\
Translate(null, 5.57429595406375, 0.195303936039821, -1.95303936039821E-02, \n\
	siRelative, siView, siObj, siXYZ, null, null, siXYZ, null, null, null, null, null, null, 0);\n\
var myTforms = \"cone.kine.local.sclx,cone.kine.local.scly,cone.kine.local.sclz,\";\n\
myTforms += \"cone.kine.local.rotx,cone.kine.local.roty,cone.kine.local.rotz\";\n\
myTforms += \"cone.kine.local.posx,cone.kine.local.posy,cone.kine.local.posz\";\n\
StoreAction(null, myTforms, 1, \"StoredStaticPose\", true, 1, 5, false, false);\n\
SelectObj(\"cone\", null, true);\n\
// Add 2 tracks to the mixer and create 2 separate clips for the stored animation\n\
AddTrack(\"Scene_Root\", \"Scene_Root\", 0, null, null);\n\
AddTrack(\"Scene_Root\", \"Scene_Root\", 0, null, null);\n\
var myClip = AddClip(\"Scene_Root\", \"Sources.Scene_Root.StoredStaticPose\", null, \n\
	\"Mixer.Mixer_Anim_Track\", 19, null, null, null, null);\n\
var myClip1 = AddClip(\"Scene_Root\", \"Sources.Scene_Root.StoredStaticPose\", null, \n\
	\"Mixer.Mixer_Anim_Track1\", 47, null, null, null, null);\n\
var oRootMixer = ActiveSceneRoot.Mixer;\n\
// Set up a clip relation between the two clips\n\
var myClipRelation = oRootMixer.AddRelation(myClip, myClip1, \"myRelation\");\n\
LogMessage(\"&gt;&gt;&gt;Original ClipRelation information.\");\n\
Print_ClipRelation_Info(myClipRelation);\n\
LogMessage(\"&gt;&gt;&gt;Modifying the startoffset value of the ClipRelation.\");\n\
myClipRelation.Parameters(\"StartOffset\").value = myClipRelation.Parameters(\"StartOffset\").Value + 3;\n\
Print_ClipRelation_Info(myClipRelation);\n\
LogMessage(\"&gt;&gt;&gt;Modifying the start value of the TimeControl of the master clip.\");\n\
var myMasterClipTC = myClipRelation.MasterClip.TimeControl;\n\
myMasterClipTC.Parameters(\"StartOffset\").Value = myMasterClipTC.Parameters(\"StartOffset\").Value + 4;\n\
Print_ClipRelation_Info(myClipRelation);\n\
LogMessage(\"&gt;&gt;&gt;Swapping master and slave clip.\");\n\
myClipRelation.SwapMasterAndSlaveClip();\n\
Print_ClipRelation_Info(myClipRelation);\n\
LogMessage(\"&gt;&gt;&gt;Modifying the startoffset value of the ClipRelation.\");\n\
myClipRelation.Parameters(\"StartOffset\").Value = myClipRelation.Parameters(\"StartOffset\").Value + 3;\n\
Print_ClipRelation_Info(myClipRelation);\n\
/* --------------------------------------------------------------------------------------------------\n\
	Utility function to print relation information, including its name and offset values.\n\
*/\n\
function Print_ClipRelation_Info( in_ClipRelation )\n\
{\n\
	LogMessage( \"The clip relation name is: \" + in_ClipRelation.Name );\n\
	// Printing the offset between the master and slave clips\n\
	LogMessage( \"The start offset is: \" + in_ClipRelation.Parameters(\"StartOffset\").Value );\n\
	LogMessage( \"The ClipIn offset is: \" + in_ClipRelation.Parameters(\"ClipInOffset\").Value );\n\
	LogMessage( \"The ClipOut offset is: \" + in_ClipRelation.Parameters(\"ClipOutOffset\").Value );\n\
	// Printing the master clip values\n\
	var masterClip = in_ClipRelation.MasterClip;\n\
	LogMessage( \"The master clip name is: \" + masterClip.Name );\n\
	var masterTimeControl = masterClip.TimeControl;\n\
	LogMessage( \"The master clip start value is: \" + masterTimeControl.StartOffset);\n\
	LogMessage( \"The master clip ClipIn value is: \" + masterTimeControl.ClipIn);\n\
	LogMessage( \"The master clip ClipOut value is: \" + masterTimeControl.ClipOut );\n\
	// Printing the slave clip values\n\
	var slaveClip = in_ClipRelation.SlaveClip;\n\
	LogMessage( \"The slave clip name is: \" + slaveClip.Name );\n\
	var slaveTimeControl = slaveClip.TimeControl;\n\
	LogMessage( \"The slave clip start value is: \" + slaveTimeControl.StartOffset );\n\
	LogMessage( \"The slave clip ClipIn value is: \" + slaveTimeControl.ClipIn );\n\
	LogMessage( \"The slave clip ClipOut value is: \" + slaveTimeControl.ClipOut );\n\
	LogMessage( \" \");\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Clip.Relations.html\">Clip.Relations</a> <a href=\"#!/url=./si_om/ClipContainer.AddRelation.html\">ClipContainer.AddRelation</a> <a href=\"#!/url=./si_cmds/AddClipRelation.html\">AddClipRelation</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";