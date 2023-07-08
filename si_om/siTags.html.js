var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siTags</title>\n\
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
            <h1>siTags</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siTags</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> These are the different levels of tags</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>siTags.siTagNone                                                            // 0\n\
siTags.siTag1                                                               // 1\n\
siTags.siTag2                                                               // 2\n\
siTags.siTag3                                                               // 4\n\
siTags.siTag4                                                               // 8\n\
siTags.siTag5                                                               // 16\n\
siTags.siTag6                                                               // 32\n\
siTags.siTag7                                                               // 64\n\
siTags.siTag8                                                               // 128\n\
siTags.siTag9                                                               // 256\n\
siTags.siTag10                                                              // 512\n\
siTags.siTagAll                                                             // 65535</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTagNone\"> </a>siTagNone		</td>\n\
		<td class=\"example\">0		</td>\n\
		<td>\n\
Not tagged		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTag1\"> </a>siTag1		</td>\n\
		<td class=\"example\">1		</td>\n\
		<td>\n\
User-defined tag 1		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTag2\"> </a>siTag2		</td>\n\
		<td class=\"example\">2		</td>\n\
		<td>\n\
User-defined tag 2		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTag3\"> </a>siTag3		</td>\n\
		<td class=\"example\">4		</td>\n\
		<td>\n\
User-defined tag 3		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTag4\"> </a>siTag4		</td>\n\
		<td class=\"example\">8		</td>\n\
		<td>\n\
User-defined tag 4		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTag5\"> </a>siTag5		</td>\n\
		<td class=\"example\">16		</td>\n\
		<td>\n\
User-defined tag 5		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTag6\"> </a>siTag6		</td>\n\
		<td class=\"example\">32		</td>\n\
		<td>\n\
User-defined tag 6		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTag7\"> </a>siTag7		</td>\n\
		<td class=\"example\">64		</td>\n\
		<td>\n\
User-defined tag 7		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTag8\"> </a>siTag8		</td>\n\
		<td class=\"example\">128		</td>\n\
		<td>\n\
User-defined tag 8		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTag9\"> </a>siTag9		</td>\n\
		<td class=\"example\">256		</td>\n\
		<td>\n\
User-defined tag 9		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTag10\"> </a>siTag10		</td>\n\
		<td class=\"example\">512		</td>\n\
		<td>\n\
User-defined tag 10		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTagAll\"> </a>siTagAll		</td>\n\
		<td class=\"example\">0xFFFF		</td>\n\
		<td>\n\
All tags		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/Tag.html\">Tag</a> <a href=\"#!/url=./si_cmds/Untag.html\">Untag</a> <a href=\"#!/url=./si_om/Parameter.Tags.html\">Parameter.Tags</a> <a href=\"#!/url=./si_om/ProjectItem.TaggedParameters.html\">ProjectItem.TaggedParameters</a> <a href=\"#!/url=./si_cpp/classXSI_1_1Parameter.html#GetTags\">Parameter::GetTags</a> <a href=\"#!/url=./si_cpp/classXSI_1_1Parameter.html#PutTags\">Parameter::PutTags</a> <a href=\"#!/url=./si_cpp/classXSI_1_1ProjectItem.html#GetTaggedParameters\">ProjectItem::GetTaggedParameters</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";