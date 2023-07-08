var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SIGetModel</title>\n\
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
            <h1>SIGetModel</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SIGetModel</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>Gets the model that is a common parent of a list of given objects.</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = SIGetModel( InputObjs );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>\n\
Returns the <a href=\"#!/url=./si_om/Model.html\">Model</a> that contains the given objects. If InputObj contains \n\
objects that are in different models, the returned model is the model in the model \n\
hierarchy that contains all the different models (for example, Scene_Root).\n\
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
		<td class=\"name\">InputObjs		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of objects 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Selected objects			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'---------------------------------------------------------\n\
\' VBScript example : Getting model parents. This script \n\
\' demonstrates how to use the SIGetModel to find the common parent\n\
\' model of a given group of models.\n\
\'---------------------------------------------------------\n\
\' First, create some models in a heirarcy.\n\
SICreateModel , \"Sub1\"\n\
SICreateModel , \"Sub2\"\n\
SICreateModel , \"Sub2_2\"\n\
SICreateModel \"Sub1\", \"Root1\"\n\
SICreateModel \"Sub2, Sub2_2\", \"Root2\"\n\
\' Now try to get the parent models of some models of models.\n\
Contains_Sub1 = SIGetModel(\"Sub1\")\n\
logmessage Contains_Sub1 &amp; \" contains Sub1.\"\n\
Contains_Sub2 = SIGetModel(\"Sub2\")\n\
logmessage Contains_Sub2 &amp; \" contains Sub2.\"\n\
Contains_Root1 = SIGetModel(\"Root1\")\n\
logmessage Contains_Root1 &amp; \" contains Root1.\"\n\
\' Now try some with groups of models.\n\
Contains_Sub2_Sub2_2 = SIGetModel(\"Sub2, Sub2_2\")\n\
logmessage Contains_Sub2_Sub2_2 &amp; \" contains Sub2 and Sub2_2.\"\n\
Contains_Sub1_Sub2 = SIGetModel(\"Sub1, Sub2\")\n\
logmessage Contains_Sub1_Sub2 &amp; \" contains Sub1 and Sub2\"\n\
Contains_Root1_Root2 = SIGetModel(\"Root1, Root2\")\n\
logmessage Contains_Root1_Root2 &amp; \" contains Root1 and Root2\"\n\
\'---------------------------------------------------------\n\
\' Output from the script:\n\
\' Object : \"Root1\"\n\
\' Object : \"Root1.Sub1\"\n\
\' Object : \"Root2\"\n\
\' Object : \"Root2.Sub2\"\n\
\' Object : \"Root2.Sub2_2\"\n\
\'INFO : \"Root1 contains Sub1.\"\n\
\'INFO : \"Root2 contains Sub2.\"\n\
\'INFO : \"Scene_Root contains Root1.\"\n\
\'INFO : \"Root2 contains Sub2 and Sub2_2.\"\n\
\'INFO : \"Scene_Root contains Sub1 and Sub2\"\n\
\'INFO : \"Scene_Root contains Root1 and Root2\"\n\
\'---------------------------------------------------------</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/CreateModel.html\">CreateModel</a> <a href=\"#!/url=./si_cmds/SICreateModel.html\">SICreateModel</a> <a href=\"#!/url=./si_cmds/ImportModel.html\">ImportModel</a> <a href=\"#!/url=./si_cmds/ExportModel.html\">ExportModel</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";