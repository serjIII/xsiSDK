var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Property</title>\n\
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
            <h1>Property</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Property</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_Property\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1Property.html\">Property</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\"><a href=\"#!/url=./si_om/ProjectItem.html\">ProjectItem</a></p>\n\
<p class=\"level3\">Property</p>\n\
\n\
<h3>Description</h3>\n\
<div><p>The Property object represents a property of a <a href=\"#!/url=./si_om/SceneItem.html\">SceneItem</a>.\n\
For example, Softimage objects which have Properties include <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a>, \n\
<a href=\"#!/url=./si_om/Model.html\">Model</a>, <a href=\"#!/url=./si_om/Null.html\">Null</a>, <a href=\"#!/url=./si_om/XSIProject.html\">XSIProject</a>, \n\
<a href=\"#!/url=./si_om/Group.html\">Group</a>, <a href=\"#!/url=./si_om/Scene.html\">Scene</a> and <a href=\"#!/url=./si_om/Cluster.html\">Cluster</a>.\n\
<br /><br />\n\
Note: It is important to distinguish between the Softimage Property, which is a specific \n\
type of object, and the properties that are part of a scripting object\'s API (along with \n\
its methods). Similarily it is important to distinguish this object from Softimage\n\
<a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> objects, which are usually individual numeric attributes of \n\
an object. One visual way to think of the difference is to realise that a Property is \n\
represented by a Property Page and its Parameters are the individual sliders on that page.\n\
<br /><br />\n\
Some properties, for example Visibility and Geometry Approximation, do not have specific \n\
objects in the Object Model and are represented with this Property object. Other Properties \n\
have their own specialized objects which inherit from Property, for example \n\
<a href=\"#!/url=./si_om/Material.html\">Material</a>, <a href=\"#!/url=./si_om/ClusterProperty.html\">ClusterProperty</a>, <a href=\"#!/url=./si_om/UserDataMap.html\">UserDataMap</a>, \n\
<a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> and <a href=\"#!/url=./si_om/StaticKinematicState.html\">StaticKinematicState</a>.\n\
<br /><br />\n\
A Property object may be local or shared.  The <a href=\"#!/url=./si_om/SceneItem.LocalProperties.html\">SceneItem.LocalProperties</a>\n\
property is convenient for finding just the local Properties on the parent object.  The \n\
<a href=\"#!/url=./si_cmds/MakeLocal.html\">MakeLocal</a> command can be used to make a local copy of a shared Property.  \n\
The <a href=\"#!/url=./si_om/ProjectItem.Owners.html\">ProjectItem.Owners</a> property can be used to find all owners of a shared \n\
Property.  Because a shared property has multiple parents, the <a href=\"#!/url=./si_om/SIObject.Parent.html\">SIObject.Parent</a> \n\
property can return different objects, depending on the context.\n\
<br /><br />\n\
Often, the state of a Property object is exposed as <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> objects. Other \n\
state is exposed as specific properties on the object, for example \n\
<a href=\"#!/url=./si_om/ClusterProperty.Elements.html\">ClusterProperty.Elements</a> and <a href=\"#!/url=./si_om/Material.CurrentImageClip.html\">Material.CurrentImageClip</a>.\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Property.Branch.html\">Branch</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.BranchFlag.html\">BranchFlag</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Capabilities.html\">Capabilities</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.EvaluationID.html\">EvaluationID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Families.html\">Families</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.HierarchicalEvaluationID.html\">HierarchicalEvaluationID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.ICEAttributes.html\">ICEAttributes</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockLevel.html\">LockLevel</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockMasters.html\">LockMasters</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockType.html\">LockType</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Model.html\">Model</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Parent3DObject.html\">Parent3DObject</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Selected.html\">Selected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Property.Singleton.html\">Singleton</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'VBScript Example demonstrating the creation of a custom property\n\
newscene ,false\n\
set nullObj = Application.ActiveProject.ActiveScene.Root.AddNull\n\
set customProp = nullObj.AddProperty(\"Custom_parameter_list\",, \"MyCustomParam\")\n\
\'You can also access this property by name\n\
set customProp = nullObj.Properties.Item(\"MyCustomParam\")\n\
\'Custom Properties allow you to create your own paramters\n\
customProp.AddParameter \"DoubleCustomParam\", siDouble, , siReadOnly, _\n\
								, , , 0.695, 0.0123, 10.456\n\
LogMessage \"Custom Property Name: \" &amp; customProp.Name\n\
LogMessage \"Custom Property Fullname: \" &amp; customProp.FullName\n\
LogMessage \"Custom Property Type: \" &amp; customProp.Type\n\
\'Output of this script:\n\
\'INFO : \"Custom Property Name: MyCustomParam\"\n\
\'INFO : \"Custom Property Fullname: null.MyCustomParam\"\n\
\'INFO : \"Custom Property Type: customparamset\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'vbscript: Example of Shared and Local Properties in Softimage\n\
newscene , false\n\
\'Create a cylinder.  By default it will have several \n\
\'local and inherited properties\n\
set oCyl = ActiveSceneRoot.AddGeometry( \"Cylinder\", \"NurbsSurface\" )\n\
PrintPropertyList oCyl.LocalProperties, \"LocalProperties of Cylinder\"\n\
PrintPropertyList oCyl.Properties, \"Properties of Cylinder\"\n\
\'We can access properties by name\n\
set oKine = oCyl.Properties( \"Kinematics\" )\n\
set oMaterial = oCyl.Properties( \"Scene_Material\" )\n\
\'However code like the previous line that assumes what the name \n\
\'of the material will be not ideal, because the material could \n\
\'be renamed as follows:\n\
oMaterial.Name = \"MyMaterial\"\n\
\'So this is a safer way to access the material property\n\
set oMaterial = oCyl.Material\n\
logmessage \"New material Name: \" &amp; oMaterial.Name\n\
\'Material is an example of a Shared Property\n\
PrintPropertyList oMaterial.Owners, \"Owners of Material \"\n\
\'Because we accessed the shared object via the Cylinder it will\n\
\'say that the cylinder is the parent\n\
logmessage \"Parent of Material: \" &amp; oMaterial.Parent\n\
\'This is still the same Material\n\
logmessage \"Another parent of same material: \" &amp; _\n\
			 ActiveSceneRoot.Material.Parent\n\
\'This will give the cylinder its own copy of the material\n\
MakeLocal oCyl.Material\n\
logmessage \"Number of owners after calling MakeLocal: \" &amp; _\n\
			 oCyl.Material.Owners.Count\n\
\'Little helper routine to print out a collection\n\
sub PrintPropertyList( in_PropCollection, in_strHeading )\n\
	logmessage in_strHeading &amp; \" : \"\n\
	dim	 oProp\n\
	for each oProp in in_PropCollection\n\
		logmessage \"        \" &amp; oProp.Name\n\
	next\n\
end sub</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/SceneItem.AddProperty.html\">SceneItem.AddProperty</a> <a href=\"#!/url=./si_om/SceneItem.Properties.html\">SceneItem.Properties</a> <a href=\"#!/url=./si_om/SceneItem.LocalProperties.html\">SceneItem.LocalProperties</a> <a href=\"#!/url=./si_om/Scene.Properties.html\">Scene.Properties</a> <a href=\"#!/url=./si_om/XSIProject.Properties.html\">XSIProject.Properties</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";