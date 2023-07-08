var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Scene.GetExternalFile</title>\n\
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
            <h1>Scene.GetExternalFile</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Scene.html\">Scene</a>.GetExternalFile</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns a <a href=\"#!/url=./si_om/FileReference.html\">FileReference</a> object which corresponds to the specified GUID. <br /><br />\n\
Note: Only source files are in the external file list (for example, graphics files, audio files, \n\
referenced model files, etc.).\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>FileReference Scene.GetExternalFile( String in_Guid );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = Scene.GetExternalFile();</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/FileReference.html\">FileReference</a></p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"JScript\">/*\n\
	This JScript example demonstrates how to get the external file matching the specified GUID\n\
*/\n\
NewScene (0, false);\n\
// First import a model so we have some external files to find\n\
var FPath = InstallationPath( siFactoryPath );\n\
ImportModel( FPath + \"\\\\Data\\\\XSI_SAMPLES\\\\Models\\\\Man_Face.emdl\", null, true );\n\
// Get the GUID of the first file related to the current (active) scene\n\
var oFilePath = Application.ActiveProject.ActiveScene.ExternalFiles(0);\n\
printFileInfo( oFilePath );\n\
var sGuid = oFilePath.GUID;\n\
// Use that GUID to get the same object\n\
var oFilePath2 = Application.ActiveProject.ActiveScene.GetExternalFile( sGuid );\n\
// The 2 filespaths are the same!\n\
printFileInfo( oFilePath2 );\n\
// Expected result (your GUIDs will be different from the ones below, of course):\n\
//INFO : FileType: Pictures\n\
//INFO : FileExists: 1\n\
//INFO : ORIGINAL: &lt;factory location&gt;\\Application\\rsrc\\noIcon.pic\n\
//INFO : RESOLVED: &lt;factory location&gt;\\Application\\rsrc\\noIcon.pic\n\
//INFO : UNC     : &lt;factory location&gt;\\Application\\rsrc\\noIcon.pic\n\
//INFO : GUID    : {C3416DDC-F75C-421F-9415-CD689DE8DF37}\n\
//INFO : FileType: Pictures\n\
//INFO : FileExists: 1\n\
//INFO : ORIGINAL: &lt;factory location&gt;\\Application\\rsrc\\noIcon.pic\n\
//INFO : RESOLVED: &lt;factory location&gt;\\Application\\rsrc\\noIcon.pic\n\
//INFO : UNC     : &lt;factory location&gt;\\Application\\rsrc\\noIcon.pic\n\
//INFO : GUID    : {C3416DDC-F75C-421F-9415-CD689DE8DF37}\n\
// Helper function to print info about the specified FileReference object\n\
function printFileInfo( in_file ) {\n\
	// Verifying that this is a good object\n\
	LogMessage( \"FileType: \" + in_file.FileType );\n\
	LogMessage( \"FileExists: \" + in_file.FileExists() );\n\
	// Get the original path \n\
	var o_path = in_file;\n\
	// Get the resolved path\n\
	var r_path = o_path.ResolvedPath;\n\
	// Get the UNC path\n\
	var u_path = o_path.UNCPath;\n\
	// Get the GUID\n\
	var s_GUID = o_path.GUID;\n\
	// Print all results\n\
	LogMessage( \"ORIGINAL: \" + o_path );\n\
	LogMessage( \"RESOLVED: \" + r_path ); \n\
	LogMessage( \"UNC     : \" + u_path );\n\
	LogMessage( \"GUID    : \" + s_GUID );\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Model.ExternalFiles.html\">Model.ExternalFiles</a> <a href=\"#!/url=./si_om/Scene.ExternalFiles.html\">Scene.ExternalFiles</a> <a href=\"#!/url=./si_om/FileReference.GUID.html\">FileReference.GUID</a> <a href=\"#!/url=./si_om/FileReference.html\">FileReference</a> <a href=\"#!/url=./si_om/FileReferenceCollection.html\">FileReferenceCollection</a> <a href=\"#!/url=./si_cmds/CopyExtFilesIntoProject.html\">CopyExtFilesIntoProject</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";