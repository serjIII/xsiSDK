var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ExportCrosswalk</title>\n\
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
            <h1>ExportCrosswalk</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ExportCrosswalk</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v6.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
   Exports a Crosswalk file (dotXSI or Collada). This command replaces the deprecated ExportFTK.\n\
 </p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>ExportCrosswalk( arg0 );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">arg0		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
       The scripting name of the ExportCrosswalkOptions property that specifies the export options.\n\
       You use the <a href=\"#!/url=./si_cmds/CreateExportCrosswalkOptions.html\">CreateExportCrosswalkOptions</a> command to create this property.\n\
     		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example shows how to import/export a Crosswalk file\n\
*/\n\
NewScene( null, false );\n\
// Create something to export\n\
CreatePrim( \"Cylinder\", \"MeshSurface\" );\n\
// Create the export options property\n\
var myEProp = CreateExportCrosswalkOptions( \"Scene_Root\");\n\
// Specify the full path to the file you want to export\n\
myEProp.Parameters(\"Filename\").Value = \"C:\\\\temp.xsi\";\n\
// Export the file\n\
ExportCrosswalk( myEProp.Name );\n\
// Create the import options property\n\
var myIProp = CreateImportCrosswalkOptions( \"Scene_Root\", \"MyImportCrosswalkOptions\" );\n\
// Specify the full path to the file you want to import\n\
myIProp.Parameters(\"Filename\").Value = \"C:\\\\temp.xsi\";\n\
// Import the file\n\
ImportCrosswalk( myIProp.Name );\n\
// Expected results:\n\
// INFO : 458 mSec - cumulative: 458 mSec\n\
// INFO : Set version\n\
// INFO : 16 mSec - cumulative: 510 mSec\n\
// INFO : Converting scene info\n\
// INFO : 5 mSec - cumulative: 518 mSec\n\
// INFO : Converting environment\n\
// INFO : 8 mSec - cumulative: 530 mSec\n\
// INFO : Converting environment animations\n\
// INFO : 25 mSec - cumulative: 561 mSec\n\
// INFO : Converting image clips\n\
// INFO : 1 mSec - cumulative: 568 mSec\n\
// INFO : Converting image clip animations\n\
// INFO : 1 mSec - cumulative: 691 mSec\n\
// INFO : Converting materials\n\
// INFO : 29 mSec - cumulative: 725 mSec\n\
// INFO : Converting material animations\n\
// INFO : 8 mSec - cumulative: 739 mSec\n\
// INFO : Filtering pass\n\
// INFO : 1 mSec - cumulative: 745 mSec\n\
// INFO : Converting hierarchy - first pass\n\
// INFO : 198 mSec - cumulative: 949 mSec\n\
// INFO : Converting hierarchy - second pass\n\
// INFO : 4 mSec - cumulative: 958 mSec\n\
// INFO : Plotting animations\n\
// INFO : Plotting fcurves (1-3/3)\n\
// INFO : 64 mSec - cumulative: 1027 mSec\n\
// INFO : Writing file\n\
// INFO : Parser recognizes a dotXSI file\n\
// INFO : 54 mSec - cumulative: 1086 mSec\n\
// INFO : Export completed\n\
// INFO : 0 mSec - cumulative: 0 mSec\n\
// INFO : Reading file\n\
// INFO : Parser recognizes a dotXSI file\n\
// INFO : 511 mSec - cumulative: 522 mSec\n\
// INFO : Converting scene info\n\
// INFO : 8 mSec - cumulative: 535 mSec\n\
// INFO : Converting environment\n\
// INFO : 7 mSec - cumulative: 547 mSec\n\
// INFO : Converting environment animation\n\
// INFO : 1 mSec - cumulative: 553 mSec\n\
// INFO : Converting image clips\n\
// INFO : 1 mSec - cumulative: 559 mSec\n\
// INFO : Converting image clip animation\n\
// INFO : 0 mSec - cumulative: 563 mSec\n\
// INFO : Converting materials\n\
// INFO : 213 mSec - cumulative: 782 mSec\n\
// INFO : Converting material animation\n\
// INFO : 0 mSec - cumulative: 788 mSec\n\
// INFO : Converting hierarchies and primitives\n\
// INFO : 715 mSec - cumulative: 1508 mSec\n\
// INFO : Resolving instances\n\
// INFO : 1 mSec - cumulative: 1514 mSec\n\
// INFO : Converting hierarchy node data and animation\n\
// INFO : 29 mSec - cumulative: 1548 mSec\n\
// INFO : Connecting Operators\n\
// INFO : 1 mSec - cumulative: 1554 mSec\n\
// INFO : Applying hierarchy properties\n\
// INFO : 5 mSec - cumulative: 1564 mSec\n\
// INFO : Post processing\n\
// INFO : 1 mSec - cumulative: 1570 mSec\n\
// INFO : Optimize and Cleanup\n\
// INFO : 7 mSec - cumulative: 1583 mSec\n\
// INFO : Import completed</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/CreateExportCrosswalkOptions.html\">CreateExportCrosswalkOptions</a> <a href=\"#!/url=./si_cmds/ImportCrosswalk.html\">ImportCrosswalk</a> <a href=\"#!/url=./si_cmds/CreateImportCrosswalkOptions.html\">CreateImportCrosswalkOptions</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";