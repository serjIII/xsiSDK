var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>AddProp</title>\n\
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
</style><link rel=\"stylesheet\" href=\"si_cmds/css/en.css\" type=\"text/css\" /><script>$(document).ready(function() { yepnope.injectJs(\"./si_cmds/lib/utils.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>AddProp</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">AddProp</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Adds properties to objects.<br /><br />\n\
Notice that UV cluster properties and vertex color properties can only be added to \n\
clusters which are always complete, see <a href=\"#!/url=./si_om/Geometry.AddCluster.html\">Geometry.AddCluster</a> method.<br /><br />\n\
Note: This command uses <a href=\"#!/url=./files/OutArgDefined.htm\">output arguments</a>. C# and some \n\
scripting languages (such as JScript, PerlScript and Python) don\'t support arguments passed by reference so you \n\
need to use the best workaround for your situation:\n\
<br /><br />\n\
For scripting languages this command returns an <a href=\"#!/url=./files/ISIVTCollection.htm\">ISIVTCollection</a> \n\
which you can use to get the output arguments. \n\
<br /><br />\n\
For C# you can use the <a href=\"#!/url=./si_om/XSIApplication.ExecuteCommand.html\">XSIApplication.ExecuteCommand</a> method to call this command. ExecuteCommand \n\
packs the output arguments into a C# System.Object containing an <a href=\"#!/url=./files/Array.htm\">Array</a> of the output arguments (see\n\
<a href=\"#!/url=./files/csharp_understand_CallingCommandsfromCSharp.htm\">Calling Commands from C#</a>).\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>AddProp( PresetObj, [InputObjs], [Propagation], [PropertyName], [Value] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PresetObj		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a> or a preset object (see <a href=\"#!/url=./si_cmds/SIGetPreset.html\">SIGetPreset</a>)		</td>\n\
		<td>\n\
One of the <a href=\"#!/url=./si_cmds/PropPreset.html\">Property Presets</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">InputObjs		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of objects. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Currently selected objects			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Propagation		</td>\n\
		<td><a href=\"#!/url=./si_om/siPropagationType.html\">siPropagationType</a>		</td>\n\
		<td>\n\
 Propagation type for property 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siDefaultPropagation (node)			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PropertyName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Name of property 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Value		</td>\n\
		<td><a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a>		</td>\n\
		<td>\n\
Returns the new properties in an <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a>.<br /><br /> Note: For backwards compatibility, ClassName returns \"Object\" when you test this collection, but if you test it with <a href=\"#!/url=./si_om/XSICollection.Type.html\">XSICollection.Type</a>, it returns \"XSICollection\".<br /><br /> Tip: Each member of the returned collection is a <a href=\"#!/url=./si_om/Property.html\">Property</a> object.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example demonstrates how to add the RenderMap property to both a sphere and \n\
\' a cube and then shows how you can use the returned Property objects by accessing\n\
\' them as members of the returned collection.\n\
\'\n\
\' Note: In this example we are using the XSIApplication.ClassName method instead\n\
\' 	of the VBScript TypeName function to provide a distinction between\n\
\'	class type and what we test with the Type property, but you can use\n\
\'	either.\n\
\'\n\
NewScene , false\n\
\' Add a sphere to the scene\n\
Set oSphere = CreatePrim( \"Sphere\", \"NurbsSurface\" )\n\
\' Add a sphere to the scene\n\
Set oCube = CreatePrim( \"Cube\", \"NurbsSurface\" )\n\
\' Create rendermaps on the sphere and cube; the AddProp command returns the \n\
\' output object as an XSICollection of 2, so you can get each RenderMap \n\
\' as a Property object from the returned collection\n\
AddProp \"RenderMap\", oSphere &amp; \",\" &amp; oCube, , , oRtnColl\n\
\' Test the type of the return value \n\
PrintInfo oRtnColl\n\
\' Get only the sphere\'s rendermap as a Property object\n\
\' Note: We could also use \'Set oRMap = oRtnColl(0)\' to\n\
\'	accomplish the same thing, but this is more precise\n\
For Each mbr In oRtnColl\n\
	If mbr.Parent = oSphere Then\n\
		Set oRMap = mbr\n\
	End If\n\
Next\n\
\' Specify a destination directory and name for the new image file\n\
\' Note: Since the new object is a real Property object, we can use\n\
\' 		the object model to get its parameters\n\
oRMap.Parameters( \"imagefile\" ).Value = InstallationPath( siUserPath ) _\n\
			&amp; \"\\temp\\rendermap.pic\"\n\
\' Add a texture projection to the sphere and attach the rendermap to it\n\
CreateProjection oSphere, siTxtUV, siTxtDefaultSpherical, sSupport, sProj\n\
SetInstanceDataValue , oRMap.Parameters( \"uvprop\" ), sProj\n\
\' Now add an annotation property to the sphere and test it\n\
AddProp \"Annotation\", oSphere, , , oNewRtnColl\n\
PrintInfo oNewRtnColl\n\
\' This is just a utility function to separate the printing procedure\n\
\' from the rest of the example\n\
function PrintInfo( in_coll )\n\
	\' Print the class type (ie., Object, X3DObject, Property, etc.)\n\
	LogMessage \"=========\"\n\
	LogMessage \"ClassName: \" &amp; ClassName( in_coll )\n\
	\' This prevents an error if the specified object is invalid\n\
	if ClassName( in_coll ) &lt;&gt; \"Nothing\" then\n\
		\' This prevents us from trying to use collection functions\n\
		\' on a non-collection object (XSICollections returned from\n\
		\' commands report that they have the \"Object\" class type:\n\
		\' this is for backwards compatibility)\n\
		if ( ClassName( in_coll ) = \"Object\" AND in_coll.Type = \"XSICollection\" ) _\n\
		OR ClassName( in_coll ) = \"ISIVTCollection\" _\n\
		then \n\
			\' ISIVTCollections can be enumerated but they don\'t \n\
			\' support the Type property, so we\'ll skip that for\n\
			\' ISIVTCollections\n\
			if ClassName( in_coll ) = \"ISIVTCollection\" then \n\
				\' Convert the ISIVTCollection to an XSICollection (now \n\
				\' we can continue with the XSICollection-specific tests)\n\
				Set in_coll = in_coll.item(1)\n\
				\' Test it again to make sure it\'s really an XSICollection\n\
				LogMessage \"Type after conversion: \" &amp; in_coll.Type\n\
			end if\n\
			\' Loop through the collection and print the name, type and \n\
			\' class type of each item\n\
			LogMessage \"\"\n\
			LogMessage \"This collection contains the following ( \" _\n\
				&amp; in_coll.Count &amp; \" ) members ........\"\n\
			for each member in in_coll\n\
				\' Note: None of this information will be printed if the \n\
				\' collection is empty\n\
				LogMessage vbTab &amp; \"Name: \" &amp; member.Name\n\
				LogMessage vbTab &amp; \"Type: \" &amp; member.Type\n\
				LogMessage vbTab &amp; \"ClassName: \" &amp; ClassName( member )\n\
				LogMessage \"---------\"\n\
			next\n\
		elseif ClassName( in_coll ) = \"CollectionItem\" then\n\
			\' Print the name, type and class type of the item\n\
			LogMessage vbTab &amp; \"Name: \" &amp; member.Name\n\
			LogMessage vbTab &amp; \"Type: \" &amp; member.Type\n\
			LogMessage vbTab &amp; \"ClassName: \" &amp; ClassName( member )\n\
		end if\n\
	end if\n\
	LogMessage \"End of collection information..................................\"\n\
end function\n\
\' Output of above script:\n\
\'INFO : \"=========\"\n\
\'INFO : \"ClassName: Object\"\n\
\'INFO : \"\"\n\
\'INFO : \"This collection contains the following ( 2 ) members ........\"\n\
\'INFO : \"	Name: RenderMap\"\n\
\'INFO : \"	Type: rendermap\"\n\
\'INFO : \"	ClassName: Property\"\n\
\'INFO : \"---------\"\n\
\'INFO : \"	Name: RenderMap\"\n\
\'INFO : \"	Type: rendermap\"\n\
\'INFO : \"	ClassName: Property\"\n\
\'INFO : \"---------\"\n\
\'INFO : \"End of collection information..................................\"\n\
CreateProjection \"sphere\", siTxtUV, siTxtDefaultSpherical, , \"Texture_Projection\", , siRelDefault\n\
SetInstanceDataValue , \"sphere.RenderMap.uvprop\", \"Texture_Projection\"\n\
AddProp \"Annotation\", \"sphere\", siDefaultPropagation\n\
\'INFO : \"=========\"\n\
\'INFO : \"ClassName: Object\"\n\
\'INFO : \"\"\n\
\'INFO : \"This collection contains the following ( 1 ) members ........\"\n\
\'INFO : \"	Name: Annotation\"\n\
\'INFO : \"	Type: customparamset\"\n\
\'INFO : \"	ClassName: CustomProperty\"\n\
\'INFO : \"---------\"\n\
\'INFO : \"End of collection information..................................\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This JScript example illustrates how to use the AddProp command to add an \n\
	annotation property to a null object. Of special interest in this example\n\
	is how we use the returned object to extract an array of output arguments\n\
	(since JScript does not support output arguments).\n\
	Note: In this example we are using the XSIApplication.ClassName method \n\
	which is the equivalent of the VBScript TypeName function (for which\n\
	there is no native JScript equivalent).\n\
*/\n\
NewScene( null , false );\n\
// Add a null to the scene\n\
var oSphere = GetPrim( \"Null\" );\n\
// Add an annotation to the null; the AddProp command returns the output \n\
// object as an XSICollection of 1, so you can get the actual annotation \n\
// as a Property object by resetting the object pointer to the first \n\
// member of the returned collection\n\
var oRtnColl = AddProp( \"Annotation\", oSphere, siDefaultPropagation, \"Jenny\" );\n\
// Test the type of the return value \n\
PrintInfo( oRtnColl );\n\
// To get the Property object, set the reference to the first member of\n\
// the collection\n\
//var oRMap = oRtnColl(0);\n\
// This is just a utility function to separate the printing procedure\n\
// from the rest of the example\n\
function PrintInfo( in_coll )\n\
{\n\
	// Print the class type (ie., Object, X3DObject, Property, etc.)\n\
	LogMessage( \"=========\" );\n\
	LogMessage( \"ClassName: \" + ClassName( in_coll ) );\n\
	// This prevents an error if the specified object is invalid\n\
	if ( ClassName( in_coll ) != \"Nothing\" ) \n\
	{\n\
		// This prevents us from trying to use collection functions\n\
		// on a non-collection object (XSICollections returned from\n\
		// commands report that they have the \"Object\" class type:\n\
		// this is for backwards compatibility)\n\
		if ( ( ClassName( in_coll ) == \"Object\" &amp;&amp; in_coll.Type() == \"XSICollection\" ) || \n\
			ClassName( in_coll ) == \"ISIVTCollection\" )\n\
		{ \n\
			// ISIVTCollections can be enumerated but they don\'t \n\
			// support the Type property, so we\'ll skip that for\n\
			// ISIVTCollections\n\
			if ( ClassName( in_coll ) == \"ISIVTCollection\" )\n\
			{\n\
				// Convert the ISIVTCollection to an XSICollection (now \n\
				// we can continue with the XSICollection-specific tests)\n\
				in_coll = in_coll.item(1);\n\
				// Test it again to make sure it\'s really an XSICollection\n\
				LogMessage( \"Type after conversion: \" + in_coll.Type );\n\
			}\n\
			// Loop through the collection and print the name, type and \n\
			// class type of each item\n\
			LogMessage( \"\" );\n\
			LogMessage( \"This collection contains the following ( \" \n\
				+ in_coll.Count + \" ) members ........\" );\n\
			for ( i=0; i&lt;in_coll.count; i++ )\n\
			{\n\
				LogMessage( \"\\tName: \" + in_coll.item(i).Name );\n\
				LogMessage( \"\\tType: \" + in_coll.item(i).Type);\n\
				LogMessage( \"\\tClassName: \" + ClassName( in_coll.item(i) ) );\n\
			} \n\
		}\n\
		else \n\
		{\n\
			// Print error message \n\
			LogMessage( \"Object is not a collection at all.\" );\n\
		}\n\
	}\n\
	LogMessage( \"End of collection information..................................\" );\n\
}\n\
// Output of above script:\n\
//INFO : \"=========\"\n\
//INFO : \"ClassName: ISIVTCollection\"\n\
//INFO : \"Type after conversion: XSICollection\"\n\
//INFO : \"\"\n\
//INFO : \"This collection contains the following ( 1 ) members ........\"\n\
//INFO : \"	Name: Jenny\"\n\
//INFO : \"	Type: customparamset\"\n\
//INFO : \"	ClassName: CustomProperty\"\n\
//INFO : \"End of collection information..................................\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/SIAddProp.html\">SIAddProp</a> <a href=\"#!/url=./si_om/SceneItem.AddProperty.html\">SceneItem.AddProperty</a> <a href=\"#!/url=./si_om/Property.html\">Property</a> <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";