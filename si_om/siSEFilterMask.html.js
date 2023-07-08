var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siSEFilterMask</title>\n\
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
            <h1>siSEFilterMask</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siSEFilterMask</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
The string constants to use to set the FilterMask on any scene explorer using the <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a> \n\
\"FilterMask\" property.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>StringModule.siSEFilterActionNodes                                          // Action\n\
StringModule.siSEFilterAllNodeTypes                                         // AllNodeTypes\n\
StringModule.siSEFilterAnimatableNodes                                      // Animatable\n\
StringModule.siSEFilterAnimatedNodes                                        // Animated\n\
StringModule.siSEFilterClusterNodes                                         // Cluster\n\
StringModule.siSEFilterGroupNodes                                           // Group\n\
StringModule.siSEFilterKeywordAll                                           // AllKeywords\n\
StringModule.siSEFilterKeywordAnimation                                     // Animation\n\
StringModule.siSEFilterKeywordCustom                                        // Custom\n\
StringModule.siSEFilterKeywordGeneral                                       // General\n\
StringModule.siSEFilterKeywordKinematics                                    // Kinematics\n\
StringModule.siSEFilterKeywordModeling                                      // Modeling\n\
StringModule.siSEFilterKeywordRendering                                     // Rendering\n\
StringModule.siSEFilterKeywordViewing                                       // Viewing\n\
StringModule.siSEFilterMaterialNodes                                        // Material\n\
StringModule.siSEFilterMiscellaneousNodes                                   // Miscellaneous\n\
StringModule.siSEFilterModelNodes                                           // Model\n\
StringModule.siSEFilterObjectNodes                                          // Object\n\
StringModule.siSEFilterOperatorNodes                                        // Operator\n\
StringModule.siSEFilterParameterNodes                                       // Parameter\n\
StringModule.siSEFilterPrimitiveNodes                                       // Primitive\n\
StringModule.siSEFilterPropertyNodes                                        // Property\n\
StringModule.siSEFilterSceneNodes                                           // Scene\n\
StringModule.siSEFilterShaderNodes                                          // Shader</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterActionNodes\"> </a>siSEFilterActionNodes		</td>\n\
		<td class=\"example\">Action		</td>\n\
		<td>\n\
Show only Action nodes.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterAllNodeTypes\"> </a>siSEFilterAllNodeTypes		</td>\n\
		<td class=\"example\">AllNodeTypes		</td>\n\
		<td>\n\
Show All Node types.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterAnimatableNodes\"> </a>siSEFilterAnimatableNodes		</td>\n\
		<td class=\"example\">Animatable		</td>\n\
		<td>\n\
Show only Animatable parameter nodes.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterAnimatedNodes\"> </a>siSEFilterAnimatedNodes		</td>\n\
		<td class=\"example\">Animated		</td>\n\
		<td>\n\
Show only Animated parameter nodes.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterClusterNodes\"> </a>siSEFilterClusterNodes		</td>\n\
		<td class=\"example\">Cluster		</td>\n\
		<td>\n\
Show only Cluster nodes.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterGroupNodes\"> </a>siSEFilterGroupNodes		</td>\n\
		<td class=\"example\">Group		</td>\n\
		<td>\n\
Show only Group nodes.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterKeywordAll\"> </a>siSEFilterKeywordAll		</td>\n\
		<td class=\"example\">AllKeywords		</td>\n\
		<td>\n\
Show nodes with any keyword set.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterKeywordAnimation\"> </a>siSEFilterKeywordAnimation		</td>\n\
		<td class=\"example\">Animation		</td>\n\
		<td>\n\
Show nodes with Animation keyword set.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterKeywordCustom\"> </a>siSEFilterKeywordCustom		</td>\n\
		<td class=\"example\">Custom		</td>\n\
		<td>\n\
Show nodes with Custom keyword set.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterKeywordGeneral\"> </a>siSEFilterKeywordGeneral		</td>\n\
		<td class=\"example\">General		</td>\n\
		<td>\n\
Show nodes with General keyword set.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterKeywordKinematics\"> </a>siSEFilterKeywordKinematics		</td>\n\
		<td class=\"example\">Kinematics		</td>\n\
		<td>\n\
Show nodes with Kinematics keyword set.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterKeywordModeling\"> </a>siSEFilterKeywordModeling		</td>\n\
		<td class=\"example\">Modeling		</td>\n\
		<td>\n\
Show nodes with Modeling keyword set.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterKeywordRendering\"> </a>siSEFilterKeywordRendering		</td>\n\
		<td class=\"example\">Rendering		</td>\n\
		<td>\n\
Show nodes with Rendering keyword set.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterKeywordViewing\"> </a>siSEFilterKeywordViewing		</td>\n\
		<td class=\"example\">Viewing		</td>\n\
		<td>\n\
Show nodes with Viewing keyword set.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterMaterialNodes\"> </a>siSEFilterMaterialNodes		</td>\n\
		<td class=\"example\">Material		</td>\n\
		<td>\n\
Show only Material nodes.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterMiscellaneousNodes\"> </a>siSEFilterMiscellaneousNodes		</td>\n\
		<td class=\"example\">Miscellaneous		</td>\n\
		<td>\n\
Show only Miscellaneous nodes.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterModelNodes\"> </a>siSEFilterModelNodes		</td>\n\
		<td class=\"example\">Model		</td>\n\
		<td>\n\
Show only Model nodes.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterObjectNodes\"> </a>siSEFilterObjectNodes		</td>\n\
		<td class=\"example\">Object		</td>\n\
		<td>\n\
Show only Object nodes.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterOperatorNodes\"> </a>siSEFilterOperatorNodes		</td>\n\
		<td class=\"example\">Operator		</td>\n\
		<td>\n\
Show only Operator nodes.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterParameterNodes\"> </a>siSEFilterParameterNodes		</td>\n\
		<td class=\"example\">Parameter		</td>\n\
		<td>\n\
Show only regular Parameter (non-animatable) nodes.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterPrimitiveNodes\"> </a>siSEFilterPrimitiveNodes		</td>\n\
		<td class=\"example\">Primitive		</td>\n\
		<td>\n\
Show only Primitive nodes.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterPropertyNodes\"> </a>siSEFilterPropertyNodes		</td>\n\
		<td class=\"example\">Property		</td>\n\
		<td>\n\
Show only Property nodes.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterSceneNodes\"> </a>siSEFilterSceneNodes		</td>\n\
		<td class=\"example\">Scene		</td>\n\
		<td>\n\
Show only Scene nodes.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterShaderNodes\"> </a>siSEFilterShaderNodes		</td>\n\
		<td class=\"example\">Shader		</td>\n\
		<td>\n\
Show only Shader nodes.		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/ExplorerAttributes.html#\">Explorer Attributes reference</a> <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a> <a href=\"#!/url=./si_cpp/classXSI_1_1View.html#PutAttributeValue\">View::PutAttributeValue</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";