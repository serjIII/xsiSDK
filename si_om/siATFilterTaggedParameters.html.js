var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siATFilterTaggedParameters</title>\n\
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
            <h1>siATFilterTaggedParameters</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siATFilterTaggedParameters</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v7.5</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
The string constants to use to set the Filter Tagged Parameters on any animation editor using the <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a> \n\
\"TaggedParameters\" property.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>StringModule.siATFilterTaggedAll                                            // TagAll\n\
StringModule.siATFilterTagged1                                              // Tag1\n\
StringModule.siATFilterTagged2                                              // Tag2\n\
StringModule.siATFilterTagged3                                              // Tag3\n\
StringModule.siATFilterTagged4                                              // Tag4\n\
StringModule.siATFilterTagged5                                              // Tag5\n\
StringModule.siATFilterTagged6                                              // Tag6\n\
StringModule.siATFilterTagged7                                              // Tag7\n\
StringModule.siATFilterTagged8                                              // Tag8\n\
StringModule.siATFilterTagged9                                              // Tag9\n\
StringModule.siATFilterTagged10                                             // Tag10</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterTaggedAll\"> </a>siATFilterTaggedAll		</td>\n\
		<td class=\"example\">TagAll		</td>\n\
		<td>\n\
Filter all tagged parameters.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterTagged1\"> </a>siATFilterTagged1		</td>\n\
		<td class=\"example\">Tag1		</td>\n\
		<td>\n\
Filter the tagged 1 parameters.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterTagged2\"> </a>siATFilterTagged2		</td>\n\
		<td class=\"example\">Tag2		</td>\n\
		<td>\n\
Filter the tagged 2 parameters.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterTagged3\"> </a>siATFilterTagged3		</td>\n\
		<td class=\"example\">Tag3		</td>\n\
		<td>\n\
Filter the tagged 3 parameters.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterTagged4\"> </a>siATFilterTagged4		</td>\n\
		<td class=\"example\">Tag4		</td>\n\
		<td>\n\
Filter the tagged 4 parameters.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterTagged5\"> </a>siATFilterTagged5		</td>\n\
		<td class=\"example\">Tag5		</td>\n\
		<td>\n\
Filter the tagged 5 parameters.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterTagged6\"> </a>siATFilterTagged6		</td>\n\
		<td class=\"example\">Tag6		</td>\n\
		<td>\n\
Filter the tagged 6 parameters.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterTagged7\"> </a>siATFilterTagged7		</td>\n\
		<td class=\"example\">Tag7		</td>\n\
		<td>\n\
Filter the tagged 7 parameters.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterTagged8\"> </a>siATFilterTagged8		</td>\n\
		<td class=\"example\">Tag8		</td>\n\
		<td>\n\
Filter the tagged 8 parameters.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterTagged9\"> </a>siATFilterTagged9		</td>\n\
		<td class=\"example\">Tag9		</td>\n\
		<td>\n\
Filter the tagged 9 parameters.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterTagged10\"> </a>siATFilterTagged10		</td>\n\
		<td class=\"example\">Tag10		</td>\n\
		<td>\n\
Filter the tagged 10 parameters.		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/AnimationEditorAttributes.html#\">TaggedParameters attribute</a> <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a> <a href=\"#!/url=./si_cpp/classXSI_1_1View.html#PutAttributeValue\">View::PutAttributeValue</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";