var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SimulationEnvironment</title>\n\
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
            <h1>SimulationEnvironment</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SimulationEnvironment</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_SimulationEnvironment\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1SimulationEnvironment.html\">SimulationEnvironment</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\"><a href=\"#!/url=./si_om/ProjectItem.html\">ProjectItem</a></p>\n\
<p class=\"level3\">SimulationEnvironment</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.2</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> The SimulationEnvironment object represents a construct which is used to define \n\
a simulation.  For now SimulationEnvironment objects are used only for \n\
RigidBody simulations. A simulation environment is a set of connection containers, one \n\
for each kind of element in the simulation: the rigid body objects, the rigid body \n\
constraints and the forces. The environment keeps track of the relationships between \n\
the objects in the simulation and determines on which objects the dynamics\n\
operator is applied. The dynamics operator solves the simulation for all elements \n\
that are in this environment. As well, a <a href=\"#!/url=./si_om/TimeControl.html\">TimeControl</a> object \n\
determines how the simulation in this environment is played back.<br /><br />\n\
An environment is created as soon as you create a RigidBody object, which you can achieve \n\
by using <a href=\"#!/url=./si_cmds/CreateActiveRigidBody.html\">CreateActiveRigidBody</a> or <a href=\"#!/url=./si_cmds/CreatePassiveRigidBody.html\">CreatePassiveRigidBody</a>.\n\
You can also explicitly create an environment by using <a href=\"#!/url=./si_cmds/CreateEnvironment.html\">CreateEnvironment</a>.\n\
SimulationEnvironment object can be retrieved using <a href=\"#!/url=./si_om/Scene.ActiveSimulationEnvironment.html\">Scene.ActiveSimulationEnvironment</a> \n\
or <a href=\"#!/url=./si_om/Scene.SimulationEnvironments.html\">Scene.SimulationEnvironments</a>.\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AnimatedParameters2.html\">AnimatedParameters2</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.BelongsTo.html\">BelongsTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.EvaluateAt.html\">EvaluateAt</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SimulationEnvironment.FindCacheForModel.html\">FindCacheForModel</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.GetICEAttributeFromName.html\">GetICEAttributeFromName</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsA.html\">IsA</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsAnimated2.html\">IsAnimated2</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsKindOf.html\">IsKindOf</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsLocked.html\">IsLocked</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsSelected.html\">IsSelected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockOwners.html\">LockOwners</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.RemoveICEAttribute.html\">RemoveICEAttribute</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetAsSelected.html\">SetAsSelected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetCapabilityFlag.html\">SetCapabilityFlag</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetLock.html\">SetLock</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.TaggedParameters.html\">TaggedParameters</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.UnSetLock.html\">UnSetLock</a>		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.BranchFlag.html\">BranchFlag</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SimulationEnvironment.Caches.html\">Caches</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Capabilities.html\">Capabilities</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SimulationEnvironment.Containers.html\">Containers</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.EvaluationID.html\">EvaluationID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Families.html\">Families</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.ObjectID.html\">ObjectID</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SimulationEnvironment.Operators.html\">Operators</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Owners.html\">Owners</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.PPGLayout.html\">PPGLayout</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Parameters.html\">Parameters</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Parent3DObject.html\">Parent3DObject</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Selected.html\">Selected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SimulationEnvironment.SimulationTimeControl.html\">SimulationTimeControl</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
This example illustrates how to create a cached RigidBody simulation and \n\
apply that cache to animate the simulated objects directly without using\n\
the simulation.\n\
*/\n\
NewScene( null, false );\n\
var oCone = ActiveSceneRoot.AddGeometry( \"cone\",\"MeshSurface\" );\n\
var oModel = ActiveSceneRoot.AddModel();\n\
oModel.Name = \"Model\";\n\
var oGrid = oModel.AddGeometry( \"grid\",\"MeshSurface\" );\n\
// Move the cone\n\
oCone.posy.value = 6.0;\n\
// Modify the grid\n\
oGrid.ulength.value = 24;\n\
oGrid.vlength.value = 24;\n\
oGrid.subdivu.value = 24;\n\
oGrid.subdivv.value = 24;\n\
// The following line creates the SimulationEnvironment object.\n\
CreatePassiveRigidBody( oGrid );\n\
CreateActiveRigidBody( oCone );\n\
CreateForce( \"Gravity\" );\n\
var oEnvironment = ActiveProject.ActiveScene.ActiveSimulationEnvironment;\n\
var oSimulationTimeControl = oEnvironment.SimulationTimeControl;\n\
// Turn the caching on.\n\
oSimulationTimeControl.caching.value = true;\n\
oSimulationTimeControl.playmode.value = 0; //Standard play mode.\n\
// Simulate\n\
// To make sure that all frames get simulated\n\
for ( i=0; i&lt;100; i++ ) {\n\
	NextFrame();\n\
	Refresh();\n\
}\n\
// Get all models in the scene (getting the identifier of the Scene Root\'s class = Model)\n\
var sModelClassID = XSIUtils.DataRepository.GetIdentifier( ActiveSceneRoot, siObjectCLSID );\n\
var oModels = FindObjects( \"\", sModelClassID );\n\
ApplyCurrentEnvironmentCacheToSimulateObjectForModels( oModels );\n\
// The FCurve animated objects\n\
PlayForwardsFromStart();\n\
// This function takes the cached simulation and copies it directly\n\
// on the driven objects as FCurves. It also turns off the simulation\n\
// so that we could\n\
function ApplyCurrentEnvironmentCacheToSimulateObjectForModels( in_models )\n\
{\n\
	var eModels = new Enumerator( in_models );\n\
	var oCurrEnvironment = ActiveProject.ActiveScene.ActiveSimulationEnvironment;\n\
	var oSimulationTimeControl = oCurrEnvironment.SimulationTimeControl;\n\
	// Deactivate the simulation so that objects are driven by their \n\
	// animation.\n\
	oSimulationTimeControl.Active.Value = false;\n\
	for ( ; !eModels.atEnd(); eModels.moveNext() ) {\n\
		var oCurrModel = eModels.item();\n\
		var oCache = oCurrEnvironment.FindCacheForModel( oCurrModel );\n\
		var oSourceItems = oCache.SourceItems;\n\
		var eSourceItems = new Enumerator(oSourceItems);\n\
		for( ; !eSourceItems.atEnd(); eSourceItems.moveNext() ) {\n\
			var oSourceItem = eSourceItems.item();\n\
			strTarget = oSourceItem.Target;\n\
			if ( oCurrModel.IsEqualTo(ActiveSceneRoot) == false ) {\n\
				// ActionSource keeps the relative name of an\n\
				// animated parameter. We need to prepend the\n\
				// model name if the model owner is not the scene\n\
				// root in order to fetch the parameter.\n\
				strTarget = oCurrModel.Name + \".\" + strTarget;\n\
			}\n\
			var oTargetParameter = Dictionary.GetObject(strTarget);\n\
			// The RigidBody simulation caches linear acceleration which\n\
			// is not animatable. We won\'t be copying those values on \n\
			// the global transform.\n\
			if ( oTargetParameter.Animatable ) {\n\
				var oCachedFCurve = oSourceItem.Source;\n\
				CopyFCurveOnParameter( oCachedFCurve, oTargetParameter );\n\
			}\n\
		}\n\
	}\n\
}\n\
// This function creates a copy of an FCurve on a parameter by creating a new \n\
// FCurve on the parameter and adding all keys. It will take use the default\n\
// Tangent and Interpolation.\n\
function CopyFCurveOnParameter( in_FCurve, in_Parameter )\n\
{\n\
	var oNewFCurve = in_Parameter.AddFCurve2();\n\
	var oFCurveKeys = in_FCurve.Keys;\n\
	var eFCurveKeys = new Enumerator( oFCurveKeys );\n\
	oNewFCurve.BeginEdit();\n\
	for( ; !eFCurveKeys.atEnd(); eFCurveKeys.moveNext() ) {\n\
		var oCurrentKey = eFCurveKeys.item();\n\
		oNewFCurve.AddKey( oCurrentKey.time, oCurrentKey.value );\n\
	}\n\
	oNewFCurve.EndEdit();\n\
}</pre></td></tr>\n\
</table>\n\
</div><h4>2. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
#     This example illustrates how to create cached RigidBody simulations, export \n\
#     that cache as an action source, import it into a new scene, and then \n\
#     instantiate it as a clip in the new mixer.\n\
#\n\
from win32com.client import constants as c\n\
Application.NewScene( \"\", 0 )\n\
oRoot = Application.ActiveSceneRoot\n\
oCone = oRoot.AddGeometry( \"cone\",\"MeshSurface\" )\n\
oModel = oRoot.AddModel()\n\
oModel.Name = \"TestModel\"\n\
oGrid = oModel.AddGeometry( \"grid\",\"MeshSurface\" )\n\
# Move the cone\n\
oCone.posy.Value = 6.0\n\
# Modify the grid\n\
oGrid.ulength.Value = 24\n\
oGrid.vlength.Value = 24\n\
oGrid.subdivu.Value = 24\n\
oGrid.subdivv.Value = 24\n\
# The following line creates the SimulationEnvironment object.\n\
Application.CreatePassiveRigidBody( oGrid )\n\
Application.CreateActiveRigidBody( oCone )\n\
Application.CreateForce( \"Gravity\" )\n\
oEnvironment = Application.ActiveProject.ActiveScene.ActiveSimulationEnvironment\n\
oSimulationTimeControl = oEnvironment.SimulationTimeControl\n\
# Turn the caching on.\n\
oSimulationTimeControl.caching.Value = 1;\n\
oSimulationTimeControl.playmode.Value = 0; #Standard play mode.\n\
# Simulate, making sure that all frames get simulated\n\
i=0\n\
while i &lt; 100 :\n\
	Application.NextFrame()\n\
	Application.Refresh()\n\
	i = i + 1\n\
# Export the action sources\n\
aModelNames = [ \"two\", \"one\", \"two\", \"one\" ]\n\
sPath = Application.InstallationPath( c.siProjectPath )\n\
for oActionSource in oEnvironment.Caches :\n\
	Application.ExportAction( oActionSource, sPath + \"\\\\Actions\\\\SimCache\" \n\
		+ aModelNames.pop() + \".xsi\" )\n\
# Dump the current scene and open a new one\n\
Application.NewScene( \"\", 0 )\n\
oRoot = Application.ActiveSceneRoot\n\
oCone = oRoot.AddGeometry( \"cone\",\"MeshSurface\" )\n\
oGrid = oRoot.AddGeometry( \"grid\",\"MeshSurface\" )\n\
# Reload the sources\n\
oNewAction = Application.ImportAction( oRoot, sPath + \"\\\\Actions\\\\SimCache\" \n\
	+ aModelNames.pop() + \".xsi\", \"MyImportedAction1\", c.siSourceStorageTypeInternal )\n\
Application.AddClip( oRoot, oNewAction )\n\
oNewAction = Application.ImportAction( oRoot, sPath + \"\\\\Actions\\\\SimCache\" \n\
	+ aModelNames.pop() + \".xsi\", \"MyImportedAction2\", c.siSourceStorageTypeInternal )\n\
Application.AddClip( oRoot, oNewAction );\n\
# Playback the results\n\
Application.PlayForwardsFromStart()</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Scene.ActiveSimulationEnvironment.html\">Scene.ActiveSimulationEnvironment</a> <a href=\"#!/url=./si_om/Scene.SimulationEnvironments.html\">Scene.SimulationEnvironments</a> <a href=\"#!/url=./si_cmds/SetCurrentEnvironment.html\">SetCurrentEnvironment</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";