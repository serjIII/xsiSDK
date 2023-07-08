var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siWeightPresets</title>\n\
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
            <h1>siWeightPresets</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siWeightPresets</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>Presets for the PresetWeight command</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>siWeightPresets.siWeightEaseIn                                              // 1\n\
siWeightPresets.siWeightEaseOut                                             // 2\n\
siWeightPresets.siWeightLinearEaseIn                                        // 3\n\
siWeightPresets.siWeightLinearEaseOut                                       // 4\n\
siWeightPresets.siWeightExponentialIn                                       // 5\n\
siWeightPresets.siWeightExponentialOut                                      // 6\n\
siWeightPresets.siWeightGaussian                                            // 7\n\
siWeightPresets.siWeightGaussianReverse                                     // 8\n\
siWeightPresets.siWeightSquare                                              // 9\n\
siWeightPresets.siWeightSquareReverse                                       // 10\n\
siWeightPresets.siWeightOscillate                                           // 11\n\
siWeightPresets.siWeightConstant                                            // 12\n\
siWeightPresets.siWeightFlipX                                               // 13\n\
siWeightPresets.siWeightFlipY                                               // 14</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWeightEaseIn\"> </a>siWeightEaseIn		</td>\n\
		<td class=\"example\">1		</td>\n\
		<td>\n\
Ease-in preset		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWeightEaseOut\"> </a>siWeightEaseOut		</td>\n\
		<td class=\"example\">2		</td>\n\
		<td>\n\
Ease-out preset		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWeightLinearEaseIn\"> </a>siWeightLinearEaseIn		</td>\n\
		<td class=\"example\">3		</td>\n\
		<td>\n\
Linear ease-in preset		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWeightLinearEaseOut\"> </a>siWeightLinearEaseOut		</td>\n\
		<td class=\"example\">4		</td>\n\
		<td>\n\
Linear ease-out preset		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWeightExponentialIn\"> </a>siWeightExponentialIn		</td>\n\
		<td class=\"example\">5		</td>\n\
		<td>\n\
Exponential-in preset		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWeightExponentialOut\"> </a>siWeightExponentialOut		</td>\n\
		<td class=\"example\">6		</td>\n\
		<td>\n\
Exponential-out presett		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWeightGaussian\"> </a>siWeightGaussian		</td>\n\
		<td class=\"example\">7		</td>\n\
		<td>\n\
Gaussian preset		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWeightGaussianReverse\"> </a>siWeightGaussianReverse		</td>\n\
		<td class=\"example\">8		</td>\n\
		<td>\n\
Reverse gaussian preset		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWeightSquare\"> </a>siWeightSquare		</td>\n\
		<td class=\"example\">9		</td>\n\
		<td>\n\
Square preset		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWeightSquareReverse\"> </a>siWeightSquareReverse		</td>\n\
		<td class=\"example\">10		</td>\n\
		<td>\n\
Reverse square preset		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWeightOscillate\"> </a>siWeightOscillate		</td>\n\
		<td class=\"example\">11		</td>\n\
		<td>\n\
Oscillation preset		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWeightConstant\"> </a>siWeightConstant		</td>\n\
		<td class=\"example\">12		</td>\n\
		<td>\n\
Constant preset		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWeightFlipX\"> </a>siWeightFlipX		</td>\n\
		<td class=\"example\">13		</td>\n\
		<td>\n\
Flip X of weight curve		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWeightFlipY\"> </a>siWeightFlipY		</td>\n\
		<td class=\"example\">14		</td>\n\
		<td>\n\
Flip Y of weight curve		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/SetDefaultWeight.html\">SetDefaultWeight</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";