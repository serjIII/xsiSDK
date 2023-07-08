var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siRuleKind</title>\n\
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
            <h1>siRuleKind</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siRuleKind</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>Selects the kind type of rules we want to obtain from the <a href=\"#!/url=./si_om/Linktab.html\">Linktab</a> object.</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>siRuleKind.siRuleKind_Nt2Unix                                               // 0\n\
siRuleKind.siRuleKind_Unix2NT                                               // 1\n\
siRuleKind.siRuleKind_UNC                                                   // 2\n\
siRuleKind.siRuleKind_NT2Unix_MountedDrives                                 // 3\n\
siRuleKind.siRuleKind_Unix2NT_MountedDrives                                 // 4\n\
siRuleKind.siRuleKind_Token                                                 // 5\n\
siRuleKind.siRuleKind_All                                                   // 6</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRuleKind_Nt2Unix\"> </a>siRuleKind_Nt2Unix		</td>\n\
		<td class=\"example\">0		</td>\n\
		<td>\n\
NT to UNIX rules		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRuleKind_Unix2NT\"> </a>siRuleKind_Unix2NT		</td>\n\
		<td class=\"example\">1		</td>\n\
		<td>\n\
UNIX to NT rules		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRuleKind_UNC\"> </a>siRuleKind_UNC		</td>\n\
		<td class=\"example\">2		</td>\n\
		<td>\n\
UNC rules		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRuleKind_NT2Unix_MountedDrives\"> </a>siRuleKind_NT2Unix_MountedDrives		</td>\n\
		<td class=\"example\">4		</td>\n\
		<td>\n\
NT to UNIX Mounted drives rules		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRuleKind_Unix2NT_MountedDrives\"> </a>siRuleKind_Unix2NT_MountedDrives		</td>\n\
		<td class=\"example\">5		</td>\n\
		<td>\n\
UNIX to NT Mounted drives rules		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRuleKind_Token\"> </a>siRuleKind_Token		</td>\n\
		<td class=\"example\">5		</td>\n\
		<td>\n\
Token rules		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRuleKind_All\"> </a>siRuleKind_All		</td>\n\
		<td class=\"example\">6		</td>\n\
		<td>\n\
All the rules		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_om/LinktabRuleCollection.Filter.html\">LinktabRuleCollection.Filter</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";