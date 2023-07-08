var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>CrosswalkExportMatLib</title>\n\
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
            <h1>CrosswalkExportMatLib</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">CrosswalkExportMatLib</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v7.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Exports a given material library to a Crosswalk file (.xsi v6.0 or .xsiml). The file will contain \n\
a single material library, with all the related materials, shaders, texture layers and image clips\n\
including the associated user keywords.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>CrosswalkExportMatLib( Filename, MatLib, Binary, ExportUsedImageClipsOnly );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Filename		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The path and filename of the file.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">MatLib		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The script name of the material library to export.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Binary		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
True to export to a dotXSI file using the Binary format; false to use the ASCII format.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
false			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ExportUsedImageClipsOnly		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
True to export only the image clips related to the material library; false to export all image clips.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
true			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example shows how to export/import a material library using Crosswalk\n\
*/\n\
// ---------------\n\
// Export:\n\
NewScene(null, false);\n\
// Add a new material library called \"MyMatLib\" and make it current\n\
CreateLibrary(\"MyMatLib\");\n\
SetCurrentMaterialLibrary(\"Sources.Materials.MyMatLib\");\n\
// Add a material to the MyMatLib library\n\
SICreateMaterial(\"Phong\", \"Phong\", null, null, false);\n\
// Export the MyMatLib library\n\
CrosswalkExportMatLib(\"C:\\\\temp\\\\MyMatLib.xsiml\", \"MyMatLib\", false, true);\n\
// ---------------\n\
// Import:\n\
NewScene(null, false);\n\
// Import the material library\n\
CrosswalkImportMatLib(\"C:\\\\temp\\\\MyMatLib.xsiml\" );\n\
// ---------------\n\
// Expected results:\n\
// INFO : 70 mSec - cumulative: 70 mSec\n\
// INFO : Set version\n\
// INFO : 5 mSec - cumulative: 98 mSec\n\
// INFO : Converting scene info\n\
// INFO : 19 mSec - cumulative: 121 mSec\n\
// INFO : Converting environment\n\
// INFO : 26 mSec - cumulative: 150 mSec\n\
// INFO : Converting image clips\n\
// INFO : 3 mSec - cumulative: 163 mSec\n\
// INFO : Converting image clip animations\n\
// INFO : 2 mSec - cumulative: 170 mSec\n\
// INFO : Converting materials\n\
// INFO : 117 mSec - cumulative: 294 mSec\n\
// INFO : Converting material animations\n\
// INFO : 32 mSec - cumulative: 332 mSec\n\
// INFO : Writing file\n\
// INFO : Parser recognizes a dotXSI file\n\
// INFO : 11 mSec - cumulative: 349 mSec\n\
// INFO : Export completed\n\
// INFO : Parser recognizes a dotXSI file</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/CrosswalkImportMatLib.html\">CrosswalkImportMatLib</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";