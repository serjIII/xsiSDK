var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Parameter.Tags</title>\n\
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
            <h1>Parameter.Tags</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Parameter.html\">Parameter</a>.Tags <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns or sets the tags (<a href=\"#!/url=./si_om/siTags.html\">siTags</a>) on a parameter. Tags are similar \n\
to marked parameters except that you can use tags to flag a parameter for further \n\
processing by a script or custom command. Also, tags are saved with the scene, unlike \n\
marked parameters.\n\
<br /><br />\n\
Tags are easy to query and organize, and you can key, plot, store, and transfer tags \n\
to another program through scripting. You can set one tag on a parameter or up to 10 \n\
tags named Tag1, Tag2, etc. Many parameters can be tagged with the same Tag value, which \n\
allows you to easily get the list of all parameters for a specific tag.\n\
<br /><br />\n\
Note: Unlike the <a href=\"#!/url=./si_cmds/Tag.html\">Tag</a> command which adds tags to the current set \n\
of tags on a parameter, this property is destructive. When you use this property to \n\
set the tags for this parameter, the old tags are completely replaced with the new \n\
specified tags.\n\
<br /><br />\n\
Tip: To remove tags without adding any new tags, use siTagNone (0).\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
siTags rtn = Parameter.Tags;\n\
// set accessor\n\
Parameter.Tags = siTags;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to manipulate the tags on a parameter\n\
*/\n\
NewScene( null,false );\n\
var oObj = Application.ActiveSceneRoot.AddGeometry( \"Cone\", \"MeshSurface\" );\n\
var oParam = oObj.subdivu;\n\
// The parameter shouldn\'t have any tags, so it should be siTagNone (0)\n\
Application.LogMessage( \"The parameter\'s tags are: \" + oParam.Tags );\n\
// Set the siTag2 to the parameter\n\
oParam.Tags = siTag2;\n\
Application.LogMessage( \"The parameter\'s tags are: \" + oParam.Tags );\n\
// Set the siTag5 to the parameter, this will remove the siTag2, \n\
oParam.Tags = siTag5;\n\
Application.LogMessage( \"The parameter\'s tags are: \" + oParam.Tags );\n\
// Now set a combination of tags \n\
oParam.Tags = siTag5 + siTag3 + siTag6;\n\
Application.LogMessage( \"The parameter\'s tags are: \" + oParam.Tags );\n\
// Remove all tags\n\
oParam.Tags = siTagNone\n\
Application.LogMessage( \"The parameter\'s tags are: \" + oParam.Tags );\n\
// Expected results:\n\
//INFO : The parameter\'s tags are: 0\n\
//INFO : The parameter\'s tags are: 2\n\
//INFO : The parameter\'s tags are: 16\n\
//INFO : The parameter\'s tags are: 52\n\
//INFO : The parameter\'s tags are: 0</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Parameter.IsLocked.html\">Parameter.IsLocked</a> <a href=\"#!/url=./si_om/ProjectItem.TaggedParameters.html\">ProjectItem.TaggedParameters</a> <a href=\"#!/url=./si_cmds/Tag.html\">Tag</a> <a href=\"#!/url=./si_cmds/Untag.html\">Untag</a> <a href=\"#!/url=./si_om/Parameter.Marked.html\">Parameter.Marked</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";