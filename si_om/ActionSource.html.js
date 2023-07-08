var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ActionSource</title>\n\
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
            <h1>ActionSource</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ActionSource</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_ActionSource\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1ActionSource.html\">ActionSource</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\"><a href=\"#!/url=./si_om/ProjectItem.html\">ProjectItem</a></p>\n\
<p class=\"level3\"><a href=\"#!/url=./si_om/Source.html\">Source</a></p>\n\
<p class=\"level4\">ActionSource</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.5</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> ActionSource objects are a specialized type of <a href=\"#!/url=./si_om/Source.html\">Source</a> object, representing\n\
sources for action and shape animation clips. These types of sources Action sources are composed \n\
of DataSource items (such as <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a>s, <a href=\"#!/url=./si_om/Expression.html\">Expression</a>s, etc.), \n\
which you can access as <a href=\"#!/url=./si_om/AnimationSourceItem.html\">AnimationSourceItem</a>s via the \n\
<a href=\"#!/url=./si_om/ActionSource.SourceItems.html\">ActionSource.SourceItems</a> property. See the \n\
<a href=\"#!/url=./si_om/siAnimationSourceItemType.html\">siAnimationSourceItemType</a> enum for a list of supported animation source types.<br /><br />\n\
Actions are based on changes to parameters, usually called \'low-level animation\' because it is\n\
parameter-based. Typically, action components are <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a>s, <a href=\"#!/url=./si_om/Constraint.html\">Constraint</a>s, \n\
<a href=\"#!/url=./si_om/StaticSource.html\">StaticSource</a>s (static poses), and <a href=\"#!/url=./si_om/ShapeKey.html\">ShapeKey</a>s. You can bundle these \n\
components as action sources using the <a href=\"#!/url=./si_om/Model.AddActionSource.html\">Model.AddActionSource</a> method. <br /><br />\n\
Shape animation is based on changes to the positions of points, thereby changing the overall shape \n\
of the geometry from the reference shape. (The reference shape comprises the results of the modeling \n\
operator stack.) These changes to the clusters are saved as <a href=\"#!/url=./si_om/ShapeKey.html\">ShapeKey</a>s under the \n\
Clusters node of the object\'s Geometry in the UI. In the <a href=\"#!/url=./si_om/Mixer.html\">Mixer</a>, the ShapeKey is \n\
instantiated as a <a href=\"#!/url=./si_om/ShapeClip.html\">ShapeClip</a>.<br /><br />\n\
Note: In action sources, the path to the parameter to which it will be applied by default is always \n\
stored as a <a href=\"#!/url=./files/RelativeName.htm\">Relative Name</a> so that sources can be instantiated \n\
under any other model without having to necessarily provide a connection mapping template. <br /><br />\n\
Action sources are often tied to the Mixer because of the Mixer\'s interaction with Clips; however,\n\
actions which have never been instantiated or which represent caching in the \n\
<a href=\"#!/url=./si_om/SimulationEnvironment.html\">SimulationEnvironment</a> object may not be associated with any Mixer or Model, but\n\
only under the Sources container or the Scene > Environments > Environment > Caches container. \n\
In these cases, some of the functionality is limited (for example, calling the base properties \n\
<a href=\"#!/url=./si_om/SIObject.Parent.html\">SIObject.Parent</a> or <a href=\"#!/url=./si_om/ProjectItem.Model.html\">ProjectItem.Model</a> will not work since there is\n\
no Model that contains these sources.<br /><br />\n\
To get a pointer to an existing action source from its clip, you can use the <a href=\"#!/url=./si_om/Clip.Source.html\">Clip.Source</a>\n\
property. All action sources, whether instantiated or not, are also available as a \n\
<a href=\"#!/url=./si_om/DataSourceCollection.html\">DataSourceCollection</a> from the <a href=\"#!/url=./si_om/Model.html\">Model</a> to which they belong via \n\
the <a href=\"#!/url=./si_om/Model.Sources.html\">Model.Sources</a> property. <br /><br />\n\
Important: Although these sources are available as a DataSourceCollection, when you iterate over\n\
them, you are actually getting ActionSource objects, not individual <a href=\"#!/url=./files/DataSource.htm\">DataSource</a> objects\n\
such as <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a>s, <a href=\"#!/url=./si_om/Expression.html\">Expression</a>s, etc. This is important to know because \n\
the ActionSource object gives access to a specific set of methods and properties. <br /><br />\n\
To create ActionSource objects using the object model, you can use the \n\
<a href=\"#!/url=./si_om/Model.AddActionSource.html\">Model.AddActionSource</a> method. There is also a variety of scripting commands that\n\
also create ActionSource objects by loading presets (<a href=\"#!/url=./si_cmds/LoadActionPreset.html\">LoadActionPreset</a>), storing\n\
current low-level animation (<a href=\"#!/url=./si_cmds/SIStoreAction.html\">SIStoreAction</a> and <a href=\"#!/url=./si_cmds/StoreAction.html\">StoreAction</a>), \n\
and by plotting (<a href=\"#!/url=./si_cmds/PlotToActions.html\">PlotToActions</a> and <a href=\"#!/url=./si_cmds/PlotAndApplyActions.html\">PlotAndApplyActions</a>). <br /><br />\n\
Note: If you are working in a version of Softimage older than v4.0, the ActionSource object will not \n\
support the <a href=\"#!/url=./si_om/Source.html\">Source</a> interface, which means that you cannot access the contents \n\
of the source via <a href=\"#!/url=./si_om/Clip.Source.html\">Clip.Source</a>. Calling the base property\n\
<a href=\"#!/url=./si_om/SIObject.Parent.html\">SIObject.Parent</a> on an ActionSource returns the \n\
<a href=\"#!/url=./si_om/Model.html\">Model</a>. If the ActionSource is an environment cache, the\n\
parent returned is the <a href=\"#!/url=./si_om/SimulationEnvironment.html\">SimulationEnvironment</a>.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddCustomOp.html\">AddCustomOp</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddICEAttribute.html\">AddICEAttribute</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Source.AddProperty.html\">AddProperty</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddScriptedOp.html\">AddScriptedOp</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddScriptedOpFromFile.html\">AddScriptedOpFromFile</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ActionSource.AddSourceItem.html\">AddSourceItem</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AnimatedParameters2.html\">AnimatedParameters2</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.BelongsTo.html\">BelongsTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsSelected.html\">IsSelected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockOwners.html\">LockOwners</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ActionSource.Offload.html\">Offload</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ActionSource.PartialOffload.html\">PartialOffload</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ActionSource.Reload.html\">Reload</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.RemoveICEAttribute.html\">RemoveICEAttribute</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetAsSelected.html\">SetAsSelected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetCapabilityFlag.html\">SetCapabilityFlag</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockType.html\">LockType</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Model.html\">Model</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>	</tr>\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/Source.Properties.html\">Properties</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Selected.html\">Selected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ActionSource.SourceItems.html\">SourceItems</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example illustrates how to create a simple actionsource from position animation. The \n\
\' AnimationSourceItem.Source property will be used to get the fcurve source and modify the keys.\n\
\'\n\
NewScene , false\n\
set oRoot = Application.ActiveProject.ActiveScene.Root\n\
\' These commands were cut and pasted from scripting history and modified to work in a script.\n\
\' They create a simple actionsource from animation on the null\'s position\n\
set oNull = GetPrim( \"Null\" )\n\
strPosParams = oNull &amp; \".kine.local.posx,\" &amp; oNull &amp; \".kine.local.posy,\" &amp; oNull &amp; \".kine.local.posz\"\n\
Translate oNull, -8.153, 7.015, -0.702, siRelative, siView, siObj, siXYZ\n\
SaveKey strPosParams, 1.000\n\
Translate oNull, 8.350, -8.935, 0.894, siRelative, siView, siObj, siXYZ\n\
SaveKey strPosParams, 50.000\n\
Translate oNull, 9.413, 8.935, -0.894, siRelative, siView, siObj, siXYZ\n\
SaveKey strPosParams, 100.000\n\
StoreAction oRoot, strPosParams, 2, \"StoredFcvAction\", True, 1, 100\n\
\' Get the actionsource from the model\n\
set oActionSource = oRoot.Sources(\"StoredFcvAction\")\n\
\' Find animation source item with posx and mute it\n\
for each oSourceItem in oActionSource.SourceItems\n\
	if instr(1,CStr(oSourceItem.Target),\"posx\",vbTextCompare)&lt;&gt;0 then\n\
		logmessage \"muting \" &amp; oSourceItem.Target\n\
		oSourceItem.Active = False\n\
		exit for\n\
	end if\n\
next\n\
\' Apply actionsource with muted posx\n\
ApplyAction oActionSource, oNull\n\
\' Output of above script:\n\
\'INFO : muting null.kine.local.posx</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Clip.Source.html\">Clip.Source</a> <a href=\"#!/url=./si_om/Model.Sources.html\">Model.Sources</a> <a href=\"#!/url=./si_om/Model.AddActionSource.html\">Model.AddActionSource</a> <a href=\"#!/url=./si_cmds/ImportAction.html\">ImportAction</a> <a href=\"#!/url=./si_cmds/LoadActionPreset.html\">LoadActionPreset</a> <a href=\"#!/url=./si_cmds/SIStoreAction.html\">SIStoreAction</a> <a href=\"#!/url=./si_cmds/StoreAction.html\">StoreAction</a> <a href=\"#!/url=./si_cmds/PlotToActions.html\">PlotToActions</a> <a href=\"#!/url=./si_cmds/PlotAndApplyActions.html\">PlotAndApplyActions</a> <a href=\"#!/url=./si_cmds/CreateEnvironmentCache.html\">CreateEnvironmentCache</a> <a href=\"#!/url=./si_cmds/StoreEnvironmentCacheToMixer.html\">StoreEnvironmentCacheToMixer</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";