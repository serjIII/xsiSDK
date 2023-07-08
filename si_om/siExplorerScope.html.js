var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siExplorerScope</title>\n\
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
            <h1>siExplorerScope</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siExplorerScope</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>The list of scopes supported by the Scene Explorer.</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>siExplorerScope.siExplorerScopeDefault                                      // 0\n\
siExplorerScope.siExplorerScopeProject                                      // 1\n\
siExplorerScope.siExplorerScopePreferences                                  // 2\n\
siExplorerScope.siExplorerScopeScene                                        // 3\n\
siExplorerScope.siExplorerScopeLayers                                       // 4\n\
siExplorerScope.siExplorerScopePasses                                       // 5\n\
siExplorerScope.siExplorerScopeEnvironments                                 // 6\n\
siExplorerScope.siExplorerScopeParTypes                                     // 7\n\
siExplorerScope.siExplorerScopeSelection                                    // 8\n\
siExplorerScope.siExplorerScopeCustom                                       // 9\n\
siExplorerScope.siExplorerScopeCurrentLayer                                 // 10\n\
siExplorerScope.siExplorerScopeCurrentPass                                  // 11\n\
siExplorerScope.siExplorerScopeCurrentEnvironment                           // 12\n\
siExplorerScope.siExplorerScopeCurrentParType                               // 13\n\
siExplorerScope.siExplorerScopeSourcesClips                                 // 14\n\
siExplorerScope.siExplorerScopeSourcesClipsAnimation                        // 15\n\
siExplorerScope.siExplorerScopeSourcesClipsAudio                            // 16\n\
siExplorerScope.siExplorerScopeSourcesClipsImages                           // 17\n\
siExplorerScope.siExplorerScopeSourcesClipsMaterials                        // 18\n\
siExplorerScope.siExplorerScopeSourcesClipsModels                           // 19\n\
siExplorerScope.siExplorerScopeCommands                                     // 20</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExplorerScopeDefault\"> </a>siExplorerScopeDefault		</td>\n\
		<td class=\"example\">0		</td>\n\
		<td>\n\
Default scope.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExplorerScopeProject\"> </a>siExplorerScopeProject		</td>\n\
		<td class=\"example\">1		</td>\n\
		<td>\n\
Project (Content Container) scope.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExplorerScopePreferences\"> </a>siExplorerScopePreferences		</td>\n\
		<td class=\"example\">2		</td>\n\
		<td>\n\
Preferences scope.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExplorerScopeScene\"> </a>siExplorerScopeScene		</td>\n\
		<td class=\"example\">3		</td>\n\
		<td>\n\
Scene scope.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExplorerScopeLayers\"> </a>siExplorerScopeLayers		</td>\n\
		<td class=\"example\">4		</td>\n\
		<td>\n\
Layers scope.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExplorerScopePasses\"> </a>siExplorerScopePasses		</td>\n\
		<td class=\"example\">5		</td>\n\
		<td>\n\
Passes scope.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExplorerScopeEnvironments\"> </a>siExplorerScopeEnvironments		</td>\n\
		<td class=\"example\">6		</td>\n\
		<td>\n\
Environments scope.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExplorerScopeParTypes\"> </a>siExplorerScopeParTypes		</td>\n\
		<td class=\"example\">7		</td>\n\
		<td>\n\
The Particle Types scope is no longer supported.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExplorerScopeSelection\"> </a>siExplorerScopeSelection		</td>\n\
		<td class=\"example\">8		</td>\n\
		<td>\n\
Selection scope.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExplorerScopeCustom\"> </a>siExplorerScopeCustom		</td>\n\
		<td class=\"example\">9		</td>\n\
		<td>\n\
Custom scope.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExplorerScopeCurrentLayer\"> </a>siExplorerScopeCurrentLayer		</td>\n\
		<td class=\"example\">10		</td>\n\
		<td>\n\
Current Layer scope.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExplorerScopeCurrentPass\"> </a>siExplorerScopeCurrentPass		</td>\n\
		<td class=\"example\">11		</td>\n\
		<td>\n\
Current Pass scope.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExplorerScopeCurrentEnvironment\"> </a>siExplorerScopeCurrentEnvironment		</td>\n\
		<td class=\"example\">12		</td>\n\
		<td>\n\
The Current Environment scope is no longer supported.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExplorerScopeCurrentParType\"> </a>siExplorerScopeCurrentParType		</td>\n\
		<td class=\"example\">13		</td>\n\
		<td>\n\
Current Particle Type scope.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExplorerScopeSourcesClips\"> </a>siExplorerScopeSourcesClips		</td>\n\
		<td class=\"example\">14		</td>\n\
		<td>\n\
Sources and Clips scope.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExplorerScopeSourcesClipsAnimation\"> </a>siExplorerScopeSourcesClipsAnimation		</td>\n\
		<td class=\"example\">15		</td>\n\
		<td>\n\
Sources and Clips (Animation Only) scope.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExplorerScopeSourcesClipsAudio\"> </a>siExplorerScopeSourcesClipsAudio		</td>\n\
		<td class=\"example\">16		</td>\n\
		<td>\n\
Sources and Clips (Audio Only) scope.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExplorerScopeSourcesClipsImages\"> </a>siExplorerScopeSourcesClipsImages		</td>\n\
		<td class=\"example\">17		</td>\n\
		<td>\n\
Sources and Clips (Images Only) scope.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExplorerScopeSourcesClipsMaterials\"> </a>siExplorerScopeSourcesClipsMaterials		</td>\n\
		<td class=\"example\">18		</td>\n\
		<td>\n\
Sources and Clips (Materials Only) scope.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExplorerScopeSourcesClipsModels\"> </a>siExplorerScopeSourcesClipsModels		</td>\n\
		<td class=\"example\">19		</td>\n\
		<td>\n\
The Sources and Clips (Models Only) scope is no longer supported.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExplorerScopeCommands\"> </a>siExplorerScopeCommands		</td>\n\
		<td class=\"example\">20		</td>\n\
		<td>\n\
The Commands scope is no longer supported.		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/OpenXSIExplorer.html\">OpenXSIExplorer</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";