var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>UserDataMap</title>\n\
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
            <h1>UserDataMap</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">UserDataMap</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_UserDataMap\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1UserDataMap.html\">UserDataMap</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\"><a href=\"#!/url=./si_om/ProjectItem.html\">ProjectItem</a></p>\n\
<p class=\"level3\"><a href=\"#!/url=./si_om/Property.html\">Property</a></p>\n\
<p class=\"level4\">UserDataMap</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v3.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> The UserDataMap is a <a href=\"#!/url=./si_om/Property.html\">Property</a> that can be attached to any cluster.  It permits the \n\
storage of variable length binary user data on the individual components of a geometry. The data is \n\
stored as part of the scene file and can be accessed via plug-ins using the Object Model.\n\
<br /><br />\n\
Softimage plug-ins (both persistent and immediate effects) can use this property to save and retrieve data \n\
that is associated with individual vertices, polygons, edges, or other components of an object. Example \n\
data possibilities include custom game structures, raw simulation data, matrices, comments and images.  \n\
<br /><br />\n\
There are two ways that a UserDataMap can be used - for binary data or for templated data. With a Binary \n\
UserDataMap, the structure of the user data is left completely up to the plug-in.  This is well suited \n\
to C++ plug-ins.  However, as the examples below demonstrate, it is possible to access this data through \n\
scripting by using strings.  The second type of UserDataMap uses a <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> to \n\
strictly define the structure of the user data (see <a href=\"#!/url=./si_om/UserDataMap.Template.html\">UserDataMap.Template</a>). Templated \n\
user data can be inspected in the UI (see <a href=\"#!/url=./si_cmds/InspectUserData.html\">InspectUserData</a>) in addition to scripting \n\
and C++ access.\n\
<br /><br />\n\
UserDataMaps are created with <a href=\"#!/url=./si_cmds/CreateUserDataMap.html\">CreateUserDataMap</a> or <a href=\"#!/url=./si_om/SceneItem.AddProperty.html\">SceneItem.AddProperty</a>.\n\
<br /><br />\n\
UserDataMap differs from the <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> and <a href=\"#!/url=./si_om/UserDataBlob.html\">UserDataBlob</a> objects \n\
in that it stores separate data for each individual component of a cluster.  For example a cluster with \n\
ten polygons will have ten different <a href=\"#!/url=./si_om/UserDataItem.html\">UserDataItem</a> objects.  It is possible to enumerate \n\
the UserDataItem objects in a UserDataMap using <a href=\"#!/url=./si_om/UserDataMap.Item.html\">UserDataMap.Item</a>, or the VBScript \"for each\" \n\
loop construct, or the JScript Enumerator object.  It is also possible to access the contents of a UserDataMap \n\
directly with <a href=\"#!/url=./si_om/UserDataMap.ItemValue.html\">UserDataMap.ItemValue</a>.\n\
<br /><br />\n\
The UserDataMap is similar to a <a href=\"#!/url=./si_om/ClusterProperty.html\">ClusterProperty</a>, which also stores per-component data, but \n\
the UserDataMap allows variable length data, whereas the ClusterProperty objects always store a fixed number \n\
of Doubles at each component.\n\
<br /><br />\n\
The User Data Map provides similar functionality to that available from the SAAPHIRE SAA_subelement* UserData \n\
functions.  For example, the Name of the property corresponds to the Tag argument to functions like \n\
SAA_subelementSetUserData.\n\
<br /><br />\n\
It is possible to save a preset of a user data map and to reapply the user data on a different object. However, \n\
for the best results, the number of components in both clusters should be the same.\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AnimatedParameters2.html\">AnimatedParameters2</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.BelongsTo.html\">BelongsTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/UserDataMap.Clear.html\">Clear</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/UserDataMap.ClearItem.html\">ClearItem</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.EvaluateAt.html\">EvaluateAt</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.GetICEAttributeFromName.html\">GetICEAttributeFromName</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/UserDataMap.GetItem2.html\">GetItem2</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/UserDataMap.GetItemSize2.html\">GetItemSize2</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/UserDataMap.GetItemValue2.html\">GetItemValue2</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsA.html\">IsA</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsAnimated2.html\">IsAnimated2</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Property.Branch.html\">Branch</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.BranchFlag.html\">BranchFlag</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Capabilities.html\">Capabilities</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/UserDataMap.Count.html\">Count</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.EvaluationID.html\">EvaluationID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Families.html\">Families</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.HierarchicalEvaluationID.html\">HierarchicalEvaluationID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.ICEAttributes.html\">ICEAttributes</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/UserDataMap.IsEmpty.html\">IsEmpty</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/UserDataMap.Item.html\">Item</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/UserDataMap.ItemSize.html\">ItemSize</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/UserDataMap.ItemValue.html\">ItemValue</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/UserDataMap.LittleEndian.html\">LittleEndian</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockLevel.html\">LockLevel</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockMasters.html\">LockMasters</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockType.html\">LockType</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Model.html\">Model</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.ObjectID.html\">ObjectID</a>		</td>	</tr>\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/Property.Singleton.html\">Singleton</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/UserDataMap.Template.html\">Template</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'example giving an overview of accessing per-component\n\
\'user data on a cluster\n\
dim oObj, oCluster, oUDProp, i, oUserDataAtIndex2\n\
set oObj = CreatePrim( \"Sphere\", \"MeshSurface\" )\n\
SetValue oObj &amp; \".polymsh.geom.subdivu\", 1\n\
SetValue oObj &amp; \".polymsh.geom.subdivv\", 1\n\
\'Create a cluster covering all edges on the geometry\n\
set oCluster = oObj.ActivePrimitive.Geometry.AddCluster( siEdgeCluster,\"UserDataCls\" )	\n\
set oUDProp = oCluster.AddProperty( \"UserDataMap\",,\"UserDataExample\" )	\n\
\'UserDataMap\n\
logmessage oUDProp.Type\n\
\'Assign user data to a particular index\n\
oUDProp.ItemValue(2) = \"Some String Data\"\n\
\'Another way to do the same thing is to use a UserDataItem object\n\
oUDProp.Item(3).Value = \"String data for index 3\"\n\
\'Erase the data we just placed at 3\n\
oUDProp.ClearItem(3)\n\
\'Now look at all the user data in the property looking for non-empty content\n\
for i = 0 to oUDProp.Count\n\
	if ( not oUDProp.IsEmpty(i) ) then\n\
		logmessage \"Found data with size \" &amp; oUDProp.ItemSize(i) &amp; \" at cluster index \" &amp; i\n\
	end if\n\
next \n\
\'Output of this script is:\n\
\'INFO : \"UserDataMap\"\n\
\'INFO : \"Found data with size 32 at cluster index 2\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">//example giving an overview of accessing per-component\n\
//user data on a cluster\n\
var oObj = CreatePrim( \"Sphere\", \"MeshSurface\" ) ;\n\
SetValue( oObj + \".polymsh.geom.subdivu\", 1 ) ;\n\
SetValue( oObj + \".polymsh.geom.subdivv\", 1 ) ;\n\
//Create a cluster covering all edges on the geometry\n\
var oCluster = oObj.ActivePrimitive.Geometry.AddCluster( siEdgeCluster, \"UserDataCls\" ) ;\n\
var oUDProp = oCluster.AddProperty( \"UserDataMap\",false,\"UserDataExample\" ) ;\n\
//UserDataMap\n\
logmessage( oUDProp.Type ) ;\n\
//Assign user data to a particular index\n\
oUDProp.ItemValue(2) = \"Some String Data\"\n\
//Or we can use a UserDataItem object as another way to set data\n\
oUDProp.Item(3).Value = \"String data for index 3\"\n\
//Erase the data we just placed at 3\n\
oUDProp.ClearItem(3)\n\
//Now look at all the user data in the property looking for non-empty content\n\
for( var i = 0 ; i &lt; oUDProp.Count ; i++ )\n\
{\n\
	if ( !oUDProp.IsEmpty(i) )\n\
	{\n\
		logmessage( \"Found data with size \" + oUDProp.ItemSize(i) + \" at cluster index \" +  i ) ;\n\
	}\n\
}\n\
//Output of this script is:\n\
//INFO : \"UserDataMap\"\n\
//INFO : \"Found data with size 32 at cluster index 2\"</pre></td></tr>\n\
</table>\n\
</div><h4>3. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'example demonstrating the how to display the entire contents\n\
\'of a binary user data map in the command history window.\n\
\'(For an example showing how to show the contents of a templated user data map\n\
\'see the Info OM Netview page that is part of XSI Local\\Tools)\n\
dim oObj, oCluster, oUDProp, i\n\
\'First set up a little demo scenario\n\
set oObj = CreatePrim( \"Arc\", \"NurbsCurve\" )\n\
set oCluster = oObj.ActivePrimitive.Geometry.AddCluster( siVertexCluster,\"PntCluster\",Array(1,4,7,10,13,16) )	\n\
set oUDProp = oCluster.AddProperty( \"UserDataMap\",,\"UserDataExample\" )	\n\
\'Fill in the user data with the string version of the index\n\
for i = 0 to oUDProp.Count - 1\n\
	oUDProp.Item( i ).Value = CStr( i )\n\
next\n\
SelectObj oUDProp\n\
\'Then dump out all the content that was added\n\
TraceSelectedUserDataMap\n\
\'Output of this script will look approximately like this:\n\
\'INFO : \"User Data Map: arc.crvlist.cls.PntCluster.UserDataExample\"\n\
\'INFO : \"Size of User Data Map 6- Size of Cluster 6\"\n\
\'INFO : \"Property was created on little-endian computer\"\n\
\'INFO : \"Contents:\"\n\
\'INFO : \"Item 0 pnt(1): 0 \"\n\
\'INFO : \"Item 1 pnt(4): 1 \"\n\
\'INFO : \"Item 2 pnt(7): 2 \"\n\
\'INFO : \"Item 3 pnt(10): 3 \"\n\
\'INFO : \"Item 4 pnt(13): 4 \"\n\
\'INFO : \"Item 5 pnt(16): 5 \"\n\
\'The number of components with user data could get huge so this constant \n\
\'constrains the size of the output to reasonable proportions\n\
const g_MapItemsDisplay = 256\n\
const g_ShowEmptyItems = false\n\
sub TraceSelectedUserDataMap\n\
	\'This example could easily to enhanced to loop through multiple selections\n\
	\'but for the sake of simplicity it only looks at the first item\n\
	if ( selection.Count &gt; 0 ) then\n\
		if ( typename( selection( 0 ) ) = \"UserDataMap\" ) then\n\
			TraceUserDataMap( selection( 0 ) )\n\
		else\n\
			logmessage \"Please select a user data map and try again\"\n\
		end if\n\
	else\n\
		logmessage \"Please select a user data map and try again\"\n\
	end if\n\
end sub\n\
sub TraceUserDataMap( in_oUDM )\n\
	dim i, oItem, cntCluster, byteString, j, str, val\n\
	cntCluster = in_oUDM.Parent.Elements.Count\n\
	Logmessage \"User Data Map: \" &amp; in_oUDM.FullName\n\
	Logmessage \"Size of User Data Map \" &amp; in_oUDM.Count &amp; \"- Size of Cluster \" &amp; cntCluster\n\
	Logmessage \"Contents:\"\n\
	dim oCluster, oClusterElementsCollection, aElements\n\
	set oCluster = in_oUDM.Parent      \n\
	set oClusterElementsCollection = oCluster.Elements\n\
	aElements = oClusterElementsCollection.Array  \n\
	dim iElementInCluster, strItemDesc\n\
	dim cntItems\n\
	cntItems = in_oUDM.Count\n\
	dim cntDisplayedItems\n\
	cntDisplayedItems = 0\n\
	for i = 0 to ( cntItems - 1)\n\
		if ( i &lt; cntCluster ) then\n\
			iElementInCluster = aElements(i)  \n\
			strItemDesc = \"Item \" &amp; i &amp; \" \" &amp; oCluster.type &amp; \"(\" &amp; iElementInCluster &amp; \"): \"\n\
		else		\n\
			strItemDesc = \"Item \" &amp; i &amp; \" \" &amp; oCluster.type &amp; \"(INVALID INDEX): \"		\n\
		end if\n\
		set oItem = in_oUDM.Item( i )\n\
		if ( not oItem.IsEmpty ) then\n\
			\'We convert the contents into a byte by byte description\n\
			\'because we don\'t know if this is a safe to display unicode string\n\
			strItemDesc = strItemDesc &amp; GetUserDataContentsString( oItem )\n\
			logmessage strItemDesc\n\
			cntDisplayedItems = cntDisplayedItems + 1\n\
			if ( cntDisplayedItems = g_MapItemsDisplay ) then\n\
				exit for\n\
			end if\n\
		elseif ( g_ShowEmptyItems ) then\n\
			logmessage strItemDesc &amp; \" is empty\"\n\
		end if		\n\
	next\n\
end sub\n\
\'Produces a string representation of the user data\n\
function GetUserDataContentsString( in_UserDataItem )\n\
	dim strValue\n\
	strValue = in_UserDataItem.Value\n\
	dim j\n\
	\'Also attempt to produce a string representation\n\
	dim strAsString\n\
	for j = 1 to Len( strValue )\n\
		val = Asc( Mid( strValue, j, 1 ) )\n\
		\'We only accept the basic ascii values - other content is\n\
		\'not necessary safe to print.  For supporting non-English \n\
		\'characters, line breaks and tabs this logic would need \n\
		\'to be more sophisticated\n\
		if (( val &lt; 127 ) AND ( val &gt; 31 )) then\n\
			strAsString = strAsString &amp; Chr( val )\n\
		else\n\
			\'we assume that there is binary content\n\
			strAsString = strAsString &amp; \".\"\n\
		end if\n\
	next \n\
	GetUserDataContentsString = strAsString\n\
end function</pre></td></tr>\n\
</table>\n\
</div><h4>4. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'example of how to access a templated UserDataMap from from scripting.\n\
\'In this example we create user data for an imaginary game on the vertices of \n\
\'a sphere.\n\
\'\n\
\'The user data template is designed to match an associated structure in the game engine,\n\
\'and consists of 5 parameters (\"ImagePath\", \"AttachmentPoint\", \"FixedPoint\", \"ZetaFactor\",\n\
\'and \"Friction\")\n\
\'\n\
\'This example creates the object and sets some example values on a few points.  (A user could also\n\
\'add and edit these values from the user interface using the InspectUserData command)\n\
\'\n\
\'When you run this example this is the output in the log window:\n\
\'\n\
\'INFO : \"User data on sphere.polymsh.cls.AllVertices.GameData\"\n\
\'INFO : \"pnt[12]:  ZetaFactor:0.2 Friction:64 AttachmentPoint Image: image12.tif\"\n\
\'INFO : \"pnt[31]:  ZetaFactor:0.9 Friction:12 AttachmentPoint FixedPoint Image: unknown\"\n\
\'INFO : \"pnt[44]:  ZetaFactor:0.5 Friction:28 FixedPoint Image: image1.jpg\"\n\
option explicit\n\
const g_ClusterName = \"AllVertices\"\n\
const g_UserDataMapName = \"GameData\"\n\
const g_TemplateName = \"VertexInfoTemplate\"\n\
newscene ,false\n\
dim oSphere, oUserDataMap\n\
set oSphere = ActiveSceneRoot.AddGeometry( \"Sphere\", \"MeshSurface\" )\n\
\'Create templated user data map - currently it is has no user data\n\
set oUserDataMap = SetupObject( oSphere )\n\
\'Set these user data values on vertex 44\n\
call AddUserData( oUserDataMap , 44, \"image1.jpg\", false, true, 0.5, 28 )\n\
\'Set different values on points 12\n\
call AddUserData( oUserDataMap , 12, \"background14.tif\", true, false, 0.1, 39 )\n\
\'Change our minds about point 12\n\
call AddUserData( oUserDataMap , 12, \"image12.tif\", true, false, 0.2, 64 )\n\
call AddUserData( oUserDataMap , 31, \"unknown\", true, true, 0.9, 12 )\n\
call LogUserData( oUserDataMap )\n\
\'On the given object create a UserDataMap for the game data\n\
function SetupObject( in_oObj )\n\
	dim oCluster, oPSet, oUserDataMap\n\
	\'Test if we have already setup this object\n\
	on error resume next\n\
	set oUserDataMap = in_oObj.ActivePrimitive.Geometry._\n\
						   Clusters( g_ClusterName ).Properties( g_UserDataMapName )\n\
	on error goto 0\n\
	if typename( oUserDataMap ) = \"UserDataMap\" then\n\
		\'Our user data map already exists\n\
		set SetupObject = oUserDataMap\n\
		exit function\n\
	end if \n\
	set oCluster = in_oObj.ActivePrimitive.Geometry.AddCluster( siVertexCluster, g_ClusterName ) \n\
	set oPSet = CreateTemplate( oCluster )	\n\
	set oUserDataMap = oCluster.AddProperty( \"UserDataMap\",,g_UserDataMapName )\n\
	\'Associate the template with our user data map\n\
	set oUserDataMap.Template = oPSet\n\
	\'Return the newly created User Data Map\n\
	set SetupObject = oUserDataMap\n\
end function\n\
\'This function creates the template that defines the format of the data inside our UserDataMap\n\
\'The new template is returned.\n\
\'Note: this function does not associate the template with any user data map, or set any values on\n\
\'the user data map.\n\
function CreateTemplate( in_oParentObject )\n\
	dim oPSet\n\
	set oPSet = in_oParentObject.AddProperty( \"Custom_parameter_list\",, g_TemplateName )\n\
	oPSet.AddParameter \"ImagePath\", siString\n\
	oPSet.AddParameter \"AttachmentPoint\", siBool, , , ,, , false\n\
	oPSet.AddParameter \"FixedPoint\", siBool, , , ,, , false\n\
	oPSet.AddParameter \"ZetaFactor\", siDouble, , , , , , 0.0, 0.0, 1.0\n\
	oPSet.AddParameter \"Friction\", siUByte, , , , , , 64, 0, 128\n\
	set CreateTemplate = oPSet\n\
end function\n\
\'Given specific game parameter values, this routine will save those values\n\
\'on the specified vertex of the UserDataMap\n\
sub AddUserData( in_oUDM, in_CompIndex, in_ImagePath, in_AttachPoint, in_FixedPoint, in_ZetaFactor, in_Friction )\n\
	\'Get access to the Template for this user data map\n\
	dim oTemplate\n\
	set oTemplate = in_oUDM.Template\n\
	\'Fill in the parameters on the template\n\
	oTemplate.Parameters( \"ImagePath\" ).Value = in_ImagePath\n\
	oTemplate.Parameters( \"AttachmentPoint\" ).Value = in_AttachPoint\n\
	oTemplate.Parameters( \"FixedPoint\" ).Value = in_FixedPoint\n\
	oTemplate.Parameters( \"ZetaFactor\" ).Value = in_ZetaFactor\n\
	oTemplate.Parameters( \"Friction\" ).Value = in_Friction\n\
	\'Now that the parameters are specified we need to associated\n\
	\'these values with the specified vertex\n\
	in_oUDM.ItemValue(in_CompIndex) = oTemplate.BinaryData			\n\
end sub\n\
\'This routine prints out the contents of our user data map\n\
sub LogUserData( in_oUDM )\n\
	dim oTemplate, i, strAttachPnt, strFixedPnt\n\
	Logmessage \"User data on \" &amp; in_oUDM\n\
	set oTemplate = in_oUDM.Template\n\
	for i = 0 to in_oUDM.count\n\
		\'We can only print out non-empty user data items\n\
		if ( NOT in_oUDM.IsEmpty( i ) ) then\n\
			\'Take the values from the user data and put them in the template\n\
			\'so that we can read them				\n\
			oTemplate.BinaryData = in_oUDM.ItemValue( i )\n\
			\'Look at the boolean values to convert into readable strings			\n\
			if ( oTemplate.Parameters(\"AttachmentPoint\").Value ) then			\n\
				strAttachPnt = \"AttachmentPoint \"\n\
			else\n\
				strAttachPnt = \"\"\n\
			end if\n\
			if ( oTemplate.Parameters(\"FixedPoint\").Value ) then			\n\
				strFixedPnt = \"FixedPoint \"\n\
			else\n\
				strFixedPnt = \"\"\n\
			end if		\n\
			\'Print a 1 line representation of all the values on this particular point			\n\
			logmessage \"pnt[\" &amp; i &amp; \"]: \" &amp; _\n\
			           \" ZetaFactor:\" &amp; oTemplate.Parameters(\"ZetaFactor\").Value &amp; _\n\
			           \" Friction:\" &amp; oTemplate.Parameters(\"Friction\").Value &amp; _\n\
			           \" \" &amp; strAttachPnt &amp; strFixedPnt &amp; _\n\
						 \"Image: \" &amp; oTemplate.Parameters(\"ImagePath\").Value 	\n\
		end if\n\
	next \n\
end sub</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/UserDataItem.html\">UserDataItem</a> <a href=\"#!/url=./si_om/UserDataBlob.html\">UserDataBlob</a> <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> <a href=\"#!/url=./si_om/Cluster.html\">Cluster</a> <a href=\"#!/url=./si_om/ClusterProperty.html\">ClusterProperty</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";