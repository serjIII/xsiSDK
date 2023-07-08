var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>CustomProperty.BinaryData</title>\n\
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
            <h1>CustomProperty.BinaryData</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a>.BinaryData <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v3.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns or sets the binary representation of the CustomProperty. This data is a compact representation, \n\
encoded in a BSTR (see <a href=\"#!/url=./files/String.htm\">String</a>).  This is a byte string, containing binary information.  \n\
This string does not contain human readable text.  C++ developers are responsible for freeing this string \n\
with ::SysFreeString, whereas script writers have the luxury of automatic resource management.Unlike a \n\
Preset, only the actual values are stored in the binary representation, this is done for memory efficiency.  \n\
Animation is not preserved in the Binary Data - it stores a snapshot of the <a href=\"#!/url=./si_om/Parameter.Value.html\">Parameter.Value</a>s. \n\
The binary representation is well suited for storing inside a <a href=\"#!/url=./si_om/UserDataItem.html\">UserDataItem</a> using \n\
<a href=\"#!/url=./si_om/UserDataItem.Value.html\">UserDataItem.Value</a>.  This functionality allows you to easily store per-component data \n\
inside a <a href=\"#!/url=./si_om/UserDataMap.html\">UserDataMap</a>, but to view and edit this data using an associated Custom Property set.\n\
<br /><br />\n\
You should not attempt to set the binary representation on a custom property object which is different from \n\
the custom property from which the binary representation was retrieved.  In particular the number of \n\
parameters, the order of the parameters and the type of the parameters must match.  If the custom property \n\
is different the API call will fail or will result in the custom property set being filled with bogus values.  \n\
However it is possible to rearrange the order in which parameters are displayed on the property page for a \n\
Custom Property. (by editing the spdl file \"Layout\" section), without any incorrect results.\n\
<br /><br />\n\
In the case of animated parameters the value recorded in the binary representation will be the value at the \n\
current frame.  Similarily, the current value of any proxy parameters will be recorded in the binary \n\
representation.\n\
<br /><br />\n\
Normally SDK developers will not need to be concerned with the internal format of this binary data.  However, \n\
the following information will be useful in cases where the data will be generated or processed outside of Softimage.\n\
The binary representation begins with a two byte header that serve as a \"magic number\" for error handling purposes.\n\
The rest of the buffer is a concatenation of the raw values of the properties of the custom property, in exactly \n\
the order they were originally added to the custom property, and stored in little endian byte order. For example, \n\
a double takes up 8 bytes, a float 4 bytes and a unsigned char (siUByte) takes 1 byte. Strings start with a \n\
32-bit count of the number of characters, followed by the 16-bit unicode representation of each character, with \n\
no string termination character.  For the case of an Parameter that is an object instead of a simple type, such \n\
as an FCurve, there is a 32-bit buffer size followed by a binary representation of the object.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
String rtn = CustomProperty.BinaryData;\n\
// set accessor\n\
CustomProperty.BinaryData = String;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' This example demonstrates how the BinaryData property could be used to roll back \n\
\' changes that a user might have made on a custom property set. The property set is \n\
\' shown as a modal dialog, with OK/CANCEL buttons and if the user clicks Cancel we \n\
\' restore the property set values back to their original values.\n\
\'\n\
dim oRoot, oPropSet\n\
\' Set up the example\n\
set oRoot = Application.ActiveProject.ActiveScene.Root\n\
set oPropSet = oRoot.AddProperty(\"Custom_parameter_list\", , \"ExamplePSet\")\n\
SIAddCustomParameter oPropSet, \"TestVal\", siDouble, 5, 0, 10\n\
call ModalInspectCustomProperty(oPropSet)\n\
\' Convenience routine to do the work\n\
sub ModalInspectCustomProperty( in_oPropertySet )\n\
	dim strOriginalValues\n\
	strOriginalValues = in_oPropertySet.BinaryData\n\
	\' If cancel is pressed then Inspect object will fail.  This \"on error\" \n\
	\' statement says that we want to handle the error rather than have the \n\
	\' whole script fail.\n\
	on error resume next\n\
	InspectObj in_oPropertySet, , , siModal\n\
	if ( err &lt;&gt; 0 ) then\n\
		\' User pressed cancel - roll back any changes that they made\n\
		in_oPropertySet.BinaryData = strOriginalValues\n\
	end if\n\
end sub</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// \n\
// This example shows how FCurves can be stored inside a UserDataMap,\n\
// and edited via a Custom Property. It demonstrates: (a) how to create \n\
// a single script plug-in; (b) how to use a templated UserDataMap object \n\
// to store data on points; (c) how to use CustomProperty.BinaryData to \n\
// store and retrieve FCurves represented as strings; and (d) how to use \n\
// the PPGLayout to build dynamic user interfaces (with no SPDL).\n\
// \n\
BuildSampleScene() ;\n\
function BuildSampleScene()\n\
{\n\
	NewScene(null, false);\n\
	var oGrid = ActiveSceneRoot.AddGeometry(\"Grid\", \"MeshSurface\", \"GridWithUserData\");\n\
	oGrid.subdivu = 1;\n\
	oGrid.subdivv = 1;\n\
	var oCluster = oGrid.ActivePrimitive.Geometry.AddCluster(\"pnt\");\n\
	var oUserDataMap = oCluster.AddProperty(\"UserDataMap\", false, \"FCurveData\");\n\
	var oCustomProperty = CreateUserDataTemplate(oCluster);\n\
	oUserDataMap.Template = oCustomProperty;\n\
	InspectObj(oCustomProperty);\n\
	SelectObj(oGrid, null, true);\n\
	SetSelFilter(\"Point\");\n\
}\n\
function CreateUserDataTemplate( in_oCluster )\n\
{\n\
	var oCustomProperty = in_oCluster.AddProperty(\"CustomProperty\", false, \"DataTemplate\");\n\
	oCustomProperty.AddFCurveParameter(\"CurveData\");\n\
	var oLayout = oCustomProperty.PPGLayout;\n\
	var oLayoutItem = oLayout.AddFCurve(\"CurveData\", 150);\n\
	oLayout.AddRow();\n\
	oLayout.AddButton(\"ReadFromSelection\", \"Read from selected Point\");\n\
	oLayout.AddButton(\"SaveFromSelection\", \"Save on selected Point(s)\");\n\
	oLayout.AddButton(\"Instructions\");\n\
	oLayout.EndRow() ;\n\
	oLayout.Language = \"JScript\";\n\
	oLayout.Logic = ReadFromSelection_OnClicked.toString() + \n\
			SaveFromSelection_OnClicked.toString() +\n\
			Instructions_OnClicked.toString() +\n\
			GetSelectedPoints.toString() + \n\
			GetUserDataMap.toString();\n\
	return oCustomProperty;\n\
}\n\
//\n\
// The following code is Logic code for the Property Page\n\
//\n\
function GetSelectedPoints()\n\
{\n\
	// Find out what points are selected. They are returned as an array of \n\
	// Cluster Indices (-1 is returned in the array if the selected point \n\
	// is not part of the cluster)\n\
	var oSubComp = null;\n\
	for ( var i=0; i&lt;Selection.Count; i++) {\n\
		var oObj = Selection(i);	\n\
		if (oObj.Type == \"pntSubComponent\") {\n\
			oSubComp = oObj.SubComponent;\n\
			break;\n\
		}\n\
	}\n\
	if (oSubComp == null) {\n\
		Application.LogMessage(\"Please select a point\");\n\
		return null;\n\
	}\n\
	// (We could also double check that the points are selected on the\n\
	// right object using the parent property!)\n\
	var aVBSelectedElements = new VBArray(oSubComp.ElementArray);\n\
	var aGeometryIndices = aVBSelectedElements.toArray();\n\
	// Index on a cluster is not necessarily identical to a \n\
	// geometry index.  Use the Cluster object to do a lookup	\n\
	var oThisCustomProperty = PSet.Inspected.Item(0);\n\
	var oCluster = oThisCustomProperty.Parent;		\n\
	for ( var j=0; j&lt;aGeometryIndices.length; j++) {\n\
		aGeometryIndices[j] = oCluster.FindIndex(aGeometryIndices[j]);\n\
	}\n\
	return aGeometryIndices;	\n\
}\n\
function GetUserDataMap()\n\
{\n\
	// Find the UserDataMap associated with this Custom Property\n\
	// We know they are both nested under the same Cluster\n\
	// and what the name of the User Data Map is\n\
	var oThisCustomProperty = PSet.Inspected.Item(0);\n\
	var oCluster = oThisCustomProperty.Parent;		\n\
	return oCluster.Properties.Item(\"FCurveData\");\n\
}\n\
function ReadFromSelection_OnClicked()\n\
{\n\
	var aSelectedElements = GetSelectedPoints();\n\
	if (aSelectedElements == null || aSelectedElements.length == 0) {\n\
		return;\n\
	}\n\
	// If more than one item is selected we only look at the first one\n\
	var clusterIndex  = aSelectedElements[0];	\n\
	if (clusterIndex == -1) {\n\
		Application.LogMessage(\"The selected index is not part of the cluster\");\n\
		return;\n\
	}\n\
	var oUserDataMap = GetUserDataMap();\n\
	if ( oUserDataMap.IsEmpty(clusterIndex) ) {\n\
		Application.LogMessage(\"There is no user data stored on this item yet\");\n\
		return; \n\
	}\n\
	// Transfer the data from the UserDataMap\n\
	// to the ClusterProperty\n\
	var oThisCustomProperty = PSet.Inspected.Item(0);\n\
	oThisCustomProperty.BinaryData = oUserDataMap.ItemValue(clusterIndex);\n\
}\n\
function SaveFromSelection_OnClicked()\n\
{\n\
	var aSelectedElements = GetSelectedPoints();\n\
	if (!aSelectedElements || !aSelectedElements.length) {\n\
		Application.LogMessage(\"You must select at least one point in order to save this fcurve\");\n\
		return;\n\
	}\n\
	var oThisCustomProperty = PSet.Inspected.Item(0);	\n\
	binarySnapShotOfCustomProperty = oThisCustomProperty.BinaryData;\n\
	var oUserDataMap = GetUserDataMap() ;\n\
	for ( var k=0; k&lt;aSelectedElements.length; k++) {\n\
		if (aSelectedElements[k] != -1) {\n\
			oUserDataMap.ItemValue(aSelectedElements[k]) = binarySnapShotOfCustomProperty;\n\
		}\n\
	}			\n\
}\n\
function Instructions_OnClicked()\n\
{\n\
	// There are lots of different ways to show information to a user, for example popping \n\
	// up netview, showing a message box, or putting static text right on the dialog.\n\
	// \n\
	// For demonstration purposes we create a temporary custom pset with a multiline edit \n\
	// box, which we fill with text. This doesn\'t have ideal usability but shows some of \n\
	// the potential for doing totally dynamic UI\n\
	var oInfoPSet = ActiveSceneRoot.AddProperty(\"CustomProperty\", false, \"Info\");\n\
	var oParameter = oInfoPSet.AddParameter3(\"Info\", siString);\n\
	oParameter.ReadOnly = true;\n\
	oParameter.Value = \"Plug-in Instructions\\r\\n\\r\\n\" +						\n\
	  \"This example demonstrates how to store FCurves as User Data.\\r\\n\" +\n\
	  \"Each of the 4 vertices of the Grid can store a different Curve\\r\\n\\r\\n\" +\n\
	  \"To view the FCurve on a vertex, select it and press the \\r\\n\" +\n\
	  \"\'Read from Selected Point\' button.\\r\\n\\r\\n\" +\n\
	  \"To set the fcurve, change the fcurve in the view, \" +\n\
	  \"select one or more points\\r\\n\" +\n\
	  \"and then press the \'Save on selected Point(s)\' button\"  	  \n\
	var oLayoutItem = oInfoPSet.PPGLayout.AddString(\"Info\", \"\", true, 300);\n\
	oLayoutItem.SetAttribute(\"ValueOnly\", true);\n\
	InspectObj(oInfoPSet, null, null, siModal, false);\n\
	DeleteObj(oInfoPSet);\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/UserDataItem.html\">UserDataItem</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";