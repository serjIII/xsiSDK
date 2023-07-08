var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSICollection</title>\n\
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
            <h1>XSICollection</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">XSICollection</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_XSICollection\">Object Hierarchy</a></p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> A Collection is an object that stores a \"list\" or \"grouping\" of multiple objects.  The XSICollection \n\
is normally used to create, and subsequently process, a temporary list of objects from within the scene. \n\
A typical use of XSICollection is demonstrated in one of the examples for the <a href=\"#!/url=./si_om/Shader.html\">Shader</a> object.<br /><br />\n\
Instances of the XSICollection are not persisted and, unlike the <a href=\"#!/url=./si_om/Group.html\">Group</a> object, are not \n\
part of the <a href=\"#!/url=./si_om/Scene.html\">Scene</a>. One way to persist the contents of an XSICollection is to store the \n\
return value of <a href=\"#!/url=./si_om/XSICollection.GetAsText.html\">XSICollection.GetAsText</a> inside a <a href=\"#!/url=./files/String.htm\">String</a><a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> \n\
in a <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a>. <br /><br />\n\
The Object Model also contains many other collection objects, for example, the <a href=\"#!/url=./si_om/PropertyCollection.html\">PropertyCollection</a>\n\
and the <a href=\"#!/url=./si_om/ParameterCollection.html\">ParameterCollection</a>.  Enumerating through all these objects is identical (using the Item \n\
and Count properties).  However these other collections only contain objects of one single type and the script writer \n\
cannot add or remove objects in these collections.  For this reason XSICollection is the most suitable choice for \n\
most scripts. <br /><br />\n\
Each script language also provides its own <a href=\"#!/url=./files/Array.htm\">Array</a> support which can be similar to the XSICollection \n\
object. This \"native\" collection support can be useful inside the implementation of a script but cannot be easily \n\
understood by C++ or other scripting languages.  For example, custom <a href=\"#!/url=./si_om/Command.html\">Command</a>s cannot receive JScript \n\
arrays as arguments. These collection objects also do not have the same convenient capability that the XSICollection \n\
has for converting between the string representation of an object and the Object Model representation (see\n\
<a href=\"#!/url=./si_om/XSICollection.SetAsText.html\">XSICollection.SetAsText</a>). <br /><br />\n\
The equivalent object in the C++ API is the CRefArray.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSICollection.Add.html\">Add</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSICollection.AddItems.html\">AddItems</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSICollection.Expand.html\">Expand</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSICollection.Filter.html\">Filter</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSICollection.FindObjectsByMarkingAndCapabilities.html\">FindObjectsByMarkingAndCapabilities</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSICollection.GetAsText.html\">GetAsText</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSICollection.Remove.html\">Remove</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSICollection.RemoveAll.html\">RemoveAll</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSICollection.RemoveItems.html\">RemoveItems</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSICollection.SetAsText.html\">SetAsText</a>		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSICollection.Count.html\">Count</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSICollection.Item.html\">Item</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSICollection.Type.html\">Type</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/XSICollection.Unique.html\">Unique</a>		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">Dim oColl			\' object pointer for collection\n\
Dim oItem			\' for enumerating the collection\n\
Dim iCounter		\' for looping through the collection\n\
\' Create the collection as an ActiveX object\n\
Set oColl = CreateObject(\"XSI.Collection\")\n\
\' Add some items to it \n\
oColl.Add \"Camera\"\n\
oColl.Add \"Light\"\n\
\' You can enumerate the collection...\n\
For Each oItem In oColl\n\
	Application.LogMessage oItem\n\
Next\n\
\' ... or loop through it...\n\
For iCounter = 0 To oColl.Count - 1\n\
	Application.LogMessage oColl(iCounter)\n\
Next\n\
\' ... or convert it to a string expression\n\
Application.LogMessage oColl.GetAsText\n\
\' You can also find out if the collection is unique\n\
Application.LogMessage \"Is the collection unique? -- \" &amp; oColl.Unique\n\
\'--------------------------------------------------\n\
\' Output of above script:\n\
\'INFO : \"Camera\"\n\
\'INFO : \"light\"\n\
\'INFO : \"Camera\"\n\
\'INFO : \"light\"\n\
\'INFO : \"Camera,light\"\n\
\'INFO : \"Is the collection unique? -- False\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// Create the collection as an ActiveX object\n\
var oColl = new ActiveXObject(\"XSI.Collection\") ;\n\
// Add the default camera by name\n\
oColl.Add( \"Camera\" ) ;\n\
// Add an item by its Object Model reference\n\
var oNull = ActiveSceneRoot.AddNull() ;\n\
oColl.Add( oNull ) ;\n\
// You can enumerate the collection...\n\
var eCollItems = new Enumerator( oColl );\n\
eCollItems.moveFirst();\n\
for (; !eCollItems.atEnd(); eCollItems.moveNext() )\n\
{\n\
	var oItem = eCollItems.item();\n\
	Application.LogMessage( oItem ) ;\n\
}\n\
// ... or loop through it...\n\
for (var iCounter = 0 ; iCounter &lt; oColl.Count ; iCounter++ )\n\
{\n\
	Application.LogMessage( oColl(iCounter) ) ;\n\
}\n\
// ... or convert it to a string expression\n\
Application.LogMessage( oColl.GetAsText() ) ;\n\
// By default collections are not set to Unique\n\
Application.LogMessage( \"Is the collection unique? -- \" + oColl.Unique ) ;\n\
//--------------------------------------------------\n\
// Output of above script:\n\
//INFO : Camera\n\
//INFO : null\n\
//INFO : Camera\n\
//INFO : null\n\
//INFO : Camera,null\n\
//INFO : Is the collection unique? -- false</pre></td></tr>\n\
</table>\n\
</div><h4>3. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'===========================================================\n\
\' This example demonstrates how to create an XSICollection,\n\
\' how to work with collection items, and how to set the \n\
\' get its family information \n\
\' Create the collection and the main object to go in it\n\
Set oXSIColl = CreateObject( \"XSI.Collection\" )\n\
Set oStuff = CreatePrim( \"Torus\", \"MeshSurface\" )\n\
\' Add the object to the new collection and print out\n\
\' the family info\n\
getMembers oStuff\n\
\' Apply an operator to make the Families seach more \n\
\' interesting on the construction history \n\
ApplyOp \"Twist\"\n\
\' Add each operator to the collection, etc.\n\
Set oThingey = oStuff.ActivePrimitive.ConstructionHistory\n\
For Each s in oThingey\n\
	getMembers s\n\
Next\n\
\' Finally, what is in the XSICollection?\n\
LogMessage \"This collection contains these members:\"\n\
For Each c in oXSIColl\n\
	LogMessage vbTab &amp; c &amp; \" (\" &amp; typename( c ) &amp; \")\"\n\
Next\n\
\'========================================================\n\
function getMembers( in_object )\n\
	\' Make an empty collection item and assign an \n\
	\' object to it.\n\
	Set oCache = CreateObject( \"XSI.CollectionItem\" )\n\
	oCache.Value = in_object\n\
	\' Print out the family information on the new item\n\
	aMembership = oCache.Families\n\
	LogMessage in_object &amp; \" is a member of these families: \" \n\
	LogMessage vbTab &amp; aMembership &amp; vbLf\n\
	\' Assign the new collection item to the collection\n\
	oXSIColl.Add oCache\n\
end function\n\
\'========================================================\n\
\'OUTPUT:\n\
\'INFO : \"torus is a member of these families: \"\n\
\'INFO : \"	3D Objects\n\
\'\"\n\
\'INFO : \"torus.polymsh.twistop is a member of these families: \"\n\
\'INFO : \"	Operators,DeformOperators\n\
\'\"\n\
\'INFO : \"torus.polymsh.geom is a member of these families: \"\n\
\'INFO : \"	Operators,Converters\n\
\'\"\n\
\'INFO : \"This collection contains these members:\"\n\
\'INFO : \"	torus (X3DObject)\"\n\
\'INFO : \"	torus.polymsh.twistop (Operator)\"\n\
\'INFO : \"	torus.polymsh.geom (Operator)\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/CollectionItem.html\">CollectionItem</a> <a href=\"#!/url=./si_om/siBranchFlag.html\">siBranchFlag</a> <a href=\"#!/url=./si_om/ArgumentHandler.html\">ArgumentHandler</a> <a href=\"#!/url=./si_om/Shader.html\">Shader</a> <a href=\"#!/url=./si_om/Group.AddMember.html\">Group.AddMember</a> <a href=\"#!/url=./files/Array.htm\">Array</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";