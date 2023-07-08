var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>FileReference</title>\n\
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
            <h1>FileReference</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">FileReference</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_FileReference\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1FileReference.html\">FileReference</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\">FileReference</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> This object represents a reference to a file on disk. When you specify a file \n\
location in a property page (for example, when you specify the image\n\
file for a texture map), the file path string is represented by a FileReference object.\n\
<br /><br />\n\
The FileReference object uses two levels of path: the user path and \n\
the resolved path. You can access the user path using the <a href=\"#!/url=./si_om/FileReference.Path.html\">FileReference.Path</a> \n\
property, which can contain environment variables (using either the Windows \n\
syntax, %MY_VAR% or the Linux syntax, $MY_VAR) and can be relative to a project.\n\
<br /><br />\n\
You can access the resolved path using the read-only \n\
<a href=\"#!/url=./si_om/FileReference.ResolvedPath.html\">FileReference.ResolvedPath</a> property or the \n\
<a href=\"#!/url=./si_om/FileReference.UNCPath.html\">FileReference.UNCPath</a> property, which represents \n\
the actual full path (as a local or a <a href=\"#!/url=./files/UNCPath.htm\">UNC path</a>).<br /><br />\n\
You can get FileReference objects from the <a href=\"#!/url=./si_om/FileReferenceCollection.html\">FileReferenceCollection</a> returned by  \n\
<a href=\"#!/url=./si_om/Model.ExternalFiles.html\">Model.ExternalFiles</a> and <a href=\"#!/url=./si_om/Scene.ExternalFiles.html\">Scene.ExternalFiles</a>.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FileReference.FileExists.html\">FileExists</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FileReference.GetFileInSequence.html\">GetFileInSequence</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Properties</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FileReference.FileType.html\">FileType</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FileReference.GUID.html\">GUID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FileReference.NumberOfFilesInSequence.html\">NumberOfFilesInSequence</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FileReference.Owners.html\">Owners</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FileReference.Path.html\">Path</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FileReference.ResolvedPath.html\">ResolvedPath</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FileReference.UNCPath.html\">UNCPath</a>		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/* \n\
	This example shows how to get the resolved path\n\
	on each member of the external files list and how to \n\
	change the path on the fly.\n\
	Note: To see the UNC path in action, change the location \n\
	of the NewFile variable to a valid UNC path \n\
	(for example, \"\\\\\\\\mymachine\\\\toto\\\\Man_Face.emdl\") that is \n\
	mapped to a drive letter (such as Q:) and rerun the example.\n\
*/\n\
NewScene( null, false );\n\
// ---------------------------------------------------------------------------\n\
// 	Setup\n\
//\n\
// First import a model so we have some external files to find\n\
var FPath = XSIUtils.BuildPath(\n\
	Application.InstallationPath( siFactoryPath ),\n\
	\"Data\", \"XSI_SAMPLES\", \"Models\", \"Man_Face.emdl\"\n\
);\n\
var oISIVTColl = ImportModel( FPath, null, true );\n\
// Now copy the reference-model file to a local directory\n\
var NewFile = \"C:\\\\temp\\\\Man_Face.emdl\";\n\
var fso = new ActiveXObject( \"Scripting.FileSystemObject\" );\n\
fso.CopyFile( FPath, NewFile, true );\n\
// ---------------------------------------------------------------------------\n\
// 	Using the FileReference Object\n\
//\n\
// Get the collection of all external files on the scene\n\
var oModel = oISIVTColl.Value(\"Value\");\n\
var l_extFileList = oModel.ExternalFiles;\n\
// Loop through the list and change only the \n\
// referenced model file to point to the one we put in c:\\temp\n\
for ( var i=0; i&lt;l_extFileList.Count; i++ ) {\n\
	// Get the FileReference object and print the path\n\
	printFileInfo( l_extFileList(i) );\n\
	// Change the path to point to the temp directory\n\
	if ( l_extFileList(i).FileType == \"Models\" ) {\n\
		// Make sure the original path exists, change it to \n\
		// the new one, and print the new path for confirmation\n\
		if ( l_extFileList(i).FileExists() ) {\n\
			var OldPath = l_extFileList(i).Path;\n\
			Application.LogMessage( \"ORIGINAL PATH: \" + OldPath );\n\
			l_extFileList(i).Path = NewFile;\n\
			Application.LogMessage( \"MODIFIED PATH: \" + l_extFileList(i).Path );\n\
			// Restore original name\n\
			l_extFileList(i).Path = OldPath;\n\
		}\n\
	}\n\
}\n\
// ---------------------------------------------------------------------------\n\
// 	Convenience function\n\
//\n\
function printFileInfo( in_file ) {\n\
	try {\n\
		Application.LogMessage( Application.ClassName(in_file) );\n\
	} catch(e) {\n\
		if ( typeof(in_file).toLowerCase() == \"object\" ) {\n\
			Application.LogMessage( in_file.FileType );\n\
		} else {\n\
			Application.LogMessage( typeof(in_file) );\n\
		}\n\
	}\n\
	if ( in_file.FileExists() ) {\n\
		// Get the original path \n\
		var o_path = in_file;\n\
		// Get the resolved path\n\
		var r_path = o_path.ResolvedPath;\n\
		// Get the UNC path\n\
		var u_path = o_path.UNCPath;\n\
		// Print all three results\n\
		Application.LogMessage( \"ORIGINAL: \" + o_path );\n\
		Application.LogMessage( \"RESOLVED: \" + r_path ); \n\
		Application.LogMessage( \"UNC     : \" + u_path );\n\
	} else {\n\
		Application.LogMessage( \"Skipping non-existent file\" );\n\
	}\n\
}\n\
// ---------------------------------------------------------------------------\n\
// 	OUTPUT\n\
//\n\
// INFO : FileReference\n\
// INFO : ORIGINAL: &lt;factory_path&gt;\\Data\\XSI_SAMPLES\\Models\\Man_Face.emdl\n\
// INFO : RESOLVED: &lt;factory_path&gt;\\Data\\XSI_SAMPLES\\Models\\Man_Face.emdl\n\
// INFO : UNC     : &lt;factory_path&gt;\\Data\\XSI_SAMPLES\\Models\\Man_Face.emdl\n\
// INFO : ORIGINAL PATH: &lt;factory_path&gt;\\Data\\XSI_SAMPLES\\Models\\Man_Face.emdl\n\
// INFO : MODIFIED PATH: C:\\temp\\Man_Face.emdl\n\
// INFO : FileReference\n\
// INFO : Skipping non-existent file</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";