var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>AddRefModelResolution</title>\n\
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
            <h1>AddRefModelResolution</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">AddRefModelResolution</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v6.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Adds a resolution to a referenced <a href=\"#!/url=./si_om/Model.html\">Model</a>. A referenced model \n\
can have an unlimited number of resolutions. Each resolution has a name and a file.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>AddRefModelResolution( Model, [ResolutionName], [FileName] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Model		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The model where you want to add a resolution.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ResolutionName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 The name of the resolution. If not specified a default name is given.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">FileName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 The filename to use for this new resolution. By default the file path is not set.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/* \n\
	This example illustrates how to add and remove resolutions on a reference model. It also demonstrates\n\
	how to navigate through the resolution information on a reference model (see the convenience functions\n\
	at the bottom of the example, especially GetAllResolutions).\n\
*/\n\
// Import a referenced model.\n\
NewScene( null, false );\n\
var sModelPath =  XSIUtils.BuildPath( Application.InstallationPath(siFactoryPath), \n\
	\"Data\", \"XSI_SAMPLES\", \"Models\", \"ManSkeleton_Basic.emdl\" );\n\
ImportModel( sModelPath, null, true );\n\
// Add a new resolution\n\
var oRefModel = Application.ActiveSceneRoot.Models.Item(0);\n\
AddRefModelResolution( oRefModel, \"MyRes\", sModelPath );\n\
// Display the current resolutions\n\
LogResolutions( oRefModel );\n\
// Now remove the original resolution and verify that the new resolution is there\n\
var iTargetRes = GetResolutionIndexByName( oRefModel, \"res1\" );\n\
if ( iTargetRes &gt; -1 ) {\n\
	var iCurrentRes = oRefModel.NestedObjects(\"Active Resolution\").Value;\n\
	if ( iCurrentRes == iTargetRes ) {\n\
		// Change the active resolution to the new one and remove the original\n\
		oRefModel.NestedObjects(\"Active Resolution\").Value = iTargetRes + 1;\n\
		RemoveRefModelResolution( oRefModel, \"res1\", true );\n\
	}\n\
	// Display again the resolutions\n\
	LogResolutions( oRefModel );\n\
}\n\
// Expected results:\n\
// INFO : res0\n\
// INFO :     file =  \n\
// INFO :     name =  Offloaded\n\
// INFO : res1\n\
// INFO :     file =  Models\\ManSkeleton_Basic.emdl\n\
// INFO :     name =  res1\n\
// INFO : res2\n\
// INFO :     file =  Models\\ManSkeleton_Basic.emdl\n\
// INFO :     name =  MyRes\n\
// INFO : res0\n\
// INFO :     file =  \n\
// INFO :     name =  Offloaded\n\
// INFO : res1\n\
// INFO :     file =  Models\\ManSkeleton_Basic.emdl\n\
// INFO :     name =  MyRes\n\
/*\n\
	These are convenience functions that do most of the work of navigating through\n\
	the resolutions information nested under each reference model. The resolutions \n\
	info is never displayed in the UI, but you can think of its structure like so:\n\
		ReferenceModel (model)\n\
			- Resolutions (special container)\n\
				- res0 (compound parameter)\n\
					- File parameter (eg., \"&lt;installationpath&gt;/Data/XSI_SAMPLES/Models/ManSkeleton_Basic.emdl\")\n\
					- Name parameter (eg., \"MyRes\")\n\
				+ res1\n\
				  ...\n\
				+ resN\n\
	In order to access this info you need to use the SIObject.NestedObjects property\n\
	on the ReferenceModel, the Resolutions container, and then each resolution parameter.\n\
*/\n\
function GetAllResolutions( in_oRefModel )\n\
{\n\
	var e = new Enumerator( in_oRefModel.NestedObjects );\n\
	for ( ; !e.atEnd(); e.moveNext() ) {\n\
		var oCurrentContainer = e.item();\n\
		if ( oCurrentContainer.Name == \"Resolutions\" ) {\n\
			return oCurrentContainer.NestedObjects;\n\
		}\n\
	}\n\
}\n\
/* \n\
	Logs the file and name values of each resolution to history\n\
*/\n\
function LogResolutions( in_oRefModel )\n\
{\n\
	// Visit each resolution and find its name and file info\n\
	var oResolutions = GetAllResolutions( in_oRefModel );\n\
	for ( var i=0; i&lt;oResolutions.Count; i++ ) {\n\
		var oResolutionParameter = oResolutions(i);\n\
		Application.LogMessage( oResolutionParameter.Name );\n\
		// The file and name parameters are nested under the compound resolution parameter\n\
		var oResInfo = oResolutionParameter.NestedObjects;\n\
		for ( var j=0; j&lt;oResInfo.Count; j++ ) {\n\
			Application.LogMessage( \"    \" + oResInfo(j).Name + \" =  \" + oResInfo(j).Value );\n\
		}\n\
	}\n\
}\n\
/* \n\
	Returns the index number of the resolution given its name\n\
*/\n\
function GetResolutionIndexByName( in_oModel, in_sResName )\n\
{\n\
	// Visit each resolution and check its name against the specified name\n\
	var oResolutions = GetAllResolutions( in_oModel );\n\
	for ( var i=0; i&lt;oResolutions.Count; i++ ) {\n\
		var oResolutionParameter = oResolutions(i);\n\
		if ( oResolutionParameter.NestedObjects(\"name\").Value == in_sResName ) {\n\
			return i;\n\
		}\n\
	}\n\
	// If not found, return a negative value\n\
	return -1;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/RemoveRefModelResolution.html\">RemoveRefModelResolution</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";