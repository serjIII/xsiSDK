var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siFileType</title>\n\
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
            <h1>siFileType</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siFileType</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
This enum is used to determine the type of a file for the \n\
<a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnBeginFileExport\">OnBeginFileExport</a>,\n\
<a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnBeginFileImport\">OnBeginFileImport</a>, \n\
<a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnEndFileExport\">OnEndFileExport</a>,\n\
<a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnEndFileImport\">OnEndFileImport</a>,\n\
<a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnCustomFileExport\">OnCustomFileExport</a>, and \n\
<a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnCustomFileImport\">OnCustomFileImport</a> events.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>siFileType.siFileTypeDefault                                                // 0\n\
siFileType.siFileTypeScene                                                  // 1\n\
siFileType.siFileTypeModel                                                  // 2\n\
siFileType.siFileTypeImage                                                  // 3\n\
siFileType.siFileTypeAudio                                                  // 4\n\
siFileType.siFileTypeSI3D                                                   // 5\n\
siFileType.siFileTypeScript                                                 // 6\n\
siFileType.siFileTypeFcurve                                                 // 7\n\
siFileType.siFileTypeExpression                                             // 8\n\
siFileType.siFileTypeRenderPicture                                          // 9\n\
siFileType.siFileTypeAction                                                 // 10\n\
siFileType.siFileTypeShader                                                 // 11\n\
siFileType.siFileTypeBackup                                                 // 12\n\
siFileType.siFileTypeMI                                                     // 13\n\
siFileType.siFileTypeIgnore                                                 // 14\n\
siFileType.siFileTypeSimulation                                             // 15\n\
siFileType.siFileTypeReferencedModel                                        // 16\n\
siFileType.siFileTypeQuery                                                  // 17\n\
siFileType.siFileTypeSynoptic                                               // 18\n\
siFileType.siFileTypeDotXSI                                                 // 19\n\
siFileType.siFileTypeRenderMap                                              // 20\n\
siFileType.siFileTypeAddon                                                  // 21\n\
siFileType.siFileTypeMatLib                                                 // 22\n\
siFileType.siFileTypeThumbnail                                              // 23\n\
siFileType.siFileTypeMixer                                                  // 24\n\
siFileType.siFileTypeIges                                                   // 25\n\
siFileType.siFileTypeComposites                                             // 26\n\
siFileType.siFileTypeDelta                                                  // 27\n\
siFileType.siFileTypeCache                                                  // 28\n\
siFileType.siFileTypeICECompounds                                           // 29\n\
siFileType.siFileTypeRTCompounds                                            // 30\n\
siFileType.siFileTypeCustom                                                 // 31\n\
siFileType.siFileTypeLast                                                   // 32</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFileTypeDefault\"> </a>siFileTypeDefault		</td>\n\
		<td class=\"example\">0		</td>\n\
		<td>\n\
Unknown type.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFileTypeScene\"> </a>siFileTypeScene		</td>\n\
		<td class=\"example\">1		</td>\n\
		<td>\n\
Scene.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFileTypeModel\"> </a>siFileTypeModel		</td>\n\
		<td class=\"example\">2		</td>\n\
		<td>\n\
Model.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFileTypeImage\"> </a>siFileTypeImage		</td>\n\
		<td class=\"example\">3		</td>\n\
		<td>\n\
Image.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFileTypeAudio\"> </a>siFileTypeAudio		</td>\n\
		<td class=\"example\">4		</td>\n\
		<td>\n\
Audio.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFileTypeSI3D\"> </a>siFileTypeSI3D		</td>\n\
		<td class=\"example\">5		</td>\n\
		<td>\n\
SI3D scenes.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFileTypeScript\"> </a>siFileTypeScript		</td>\n\
		<td class=\"example\">6		</td>\n\
		<td>\n\
Script.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFileTypeFcurve\"> </a>siFileTypeFcurve		</td>\n\
		<td class=\"example\">7		</td>\n\
		<td>\n\
Animation file.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFileTypeExpression\"> </a>siFileTypeExpression		</td>\n\
		<td class=\"example\">8		</td>\n\
		<td>\n\
Expression.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFileTypeRenderPicture\"> </a>siFileTypeRenderPicture		</td>\n\
		<td class=\"example\">9		</td>\n\
		<td>\n\
Rendered Pictures.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFileTypeAction\"> </a>siFileTypeAction		</td>\n\
		<td class=\"example\">10		</td>\n\
		<td>\n\
Action files (.eani).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFileTypeShader\"> </a>siFileTypeShader		</td>\n\
		<td class=\"example\">11		</td>\n\
		<td>\n\
Shader file.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFileTypeBackup\"> </a>siFileTypeBackup		</td>\n\
		<td class=\"example\">12		</td>\n\
		<td>\n\
Scene Backup.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFileTypeMI\"> </a>siFileTypeMI		</td>\n\
		<td class=\"example\">13		</td>\n\
		<td>\n\
Mental Image (.mi) file.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFileTypeIgnore\"> </a>siFileTypeIgnore		</td>\n\
		<td class=\"example\">14		</td>\n\
		<td>\n\
Internal info.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFileTypeSimulation\"> </a>siFileTypeSimulation		</td>\n\
		<td class=\"example\">15		</td>\n\
		<td>\n\
Simulation cache.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFileTypeReferencedModel\"> </a>siFileTypeReferencedModel		</td>\n\
		<td class=\"example\">16		</td>\n\
		<td>\n\
Referenced model.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFileTypeQuery\"> </a>siFileTypeQuery		</td>\n\
		<td class=\"example\">17		</td>\n\
		<td>\n\
Query.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFileTypeSynoptic\"> </a>siFileTypeSynoptic		</td>\n\
		<td class=\"example\">18		</td>\n\
		<td>\n\
Synoptic.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFileTypeDotXSI\"> </a>siFileTypeDotXSI		</td>\n\
		<td class=\"example\">19		</td>\n\
		<td>\n\
dotXSI.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFileTypeRenderMap\"> </a>siFileTypeRenderMap		</td>\n\
		<td class=\"example\">20		</td>\n\
		<td>\n\
Render Map.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFileTypeAddon\"> </a>siFileTypeAddon		</td>\n\
		<td class=\"example\">21		</td>\n\
		<td>\n\
Addon.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFileTypeMatLib\"> </a>siFileTypeMatLib		</td>\n\
		<td class=\"example\">22		</td>\n\
		<td>\n\
Material Library.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFileTypeThumbnail\"> </a>siFileTypeThumbnail		</td>\n\
		<td class=\"example\">23		</td>\n\
		<td>\n\
Thumbnail.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFileTypeMixer\"> </a>siFileTypeMixer		</td>\n\
		<td class=\"example\">24		</td>\n\
		<td>\n\
Mixer (.mixer).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFileTypeIges\"> </a>siFileTypeIges		</td>\n\
		<td class=\"example\">25		</td>\n\
		<td>\n\
IGES.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFileTypeComposites\"> </a>siFileTypeComposites		</td>\n\
		<td class=\"example\">26		</td>\n\
		<td>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFileTypeDelta\"> </a>siFileTypeDelta		</td>\n\
		<td class=\"example\">27		</td>\n\
		<td>\n\
Model Delta.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFileTypeCache\"> </a>siFileTypeCache		</td>\n\
		<td class=\"example\">28		</td>\n\
		<td>\n\
Cache file.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFileTypeICECompounds\"> </a>siFileTypeICECompounds		</td>\n\
		<td class=\"example\">29		</td>\n\
		<td>\n\
ICE Compound file.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFileTypeRTCompounds\"> </a>siFileTypeRTCompounds		</td>\n\
		<td class=\"example\">30		</td>\n\
		<td>\n\
RT Compound file.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFileTypeCustom\"> </a>siFileTypeCustom		</td>\n\
		<td class=\"example\">31		</td>\n\
		<td>\n\
Custom.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFileTypeLast\"> </a>siFileTypeLast		</td>\n\
		<td class=\"example\">32		</td>\n\
		<td>\n\
Number of items total.		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnBeginFileExport\">OnBeginFileExport</a> <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnBeginFileImport\">OnBeginFileImport</a> <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnEndFileExport\">OnEndFileExport</a> <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnEndFileImport\">OnEndFileImport</a> <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnCustomFileExport\">OnCustomFileExport</a> <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html#ctxt_siOnCustomFileImport\">OnCustomFileImport</a> <a href=\"#!/url=./files/cus_events_ContextAttributes.htm\">Context Attributes</a></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./files/cus_events.htm\">Custom Events</a> <a href=\"#!/url=./si_cmds/callbacks.html\">OnEvent callback</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";