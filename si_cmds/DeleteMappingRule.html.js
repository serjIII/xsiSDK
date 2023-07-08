var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>DeleteMappingRule</title>\n\
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
            <h1>DeleteMappingRule</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">DeleteMappingRule</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>Deletes a rule from a connection or value mapping template.</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>DeleteMappingRule( MappingTemplate, Index );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">MappingTemplate		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Mapping template from which the rule is deleted. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Index		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 Specifies the rule to delete. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' This example illustrates various mapping template commands, in\n\
\' particular how to add and remove rules and examine the contents.\n\
NewScene , False\n\
\' Create a connection mapping template.\n\
CreateEmptyConnectionMap \"Scene_Root\", oCnxMap\n\
theRules = Array( Array( \"from\", \"to\" ), _\n\
			Array( \"me\", \"you\" ), _\n\
			Array( \"HERE\", \"THERE\" ) )\n\
i = 1\n\
for each rule in theRules\n\
	AddMappingRule oCnxMap, rule(0), rule(1), i\n\
	i = i + 1\n\
next\n\
\' Let\'s take a look at the connection templates at the start.\n\
DumpTemplateInfo oCnxMap\n\
\' Delete a couple of rules.\n\
DeleteMappingRule oCnxMap, 0\n\
DeleteMappingRule oCnxMap, 0\n\
\' Let\'s take another look, now that it\'s been edited.\n\
DumpTemplateInfo oCnxMap\n\
\'==================================================\n\
\' Helper method to dump some mapping template info.\n\
\'==================================================\n\
sub DumpTemplateInfo( in_Templ )\n\
	\' Get the actual object referenced by name in the argument.\n\
	set oTempl = GetValue( in_Templ )\n\
	msg = \"Template: \" &amp; oTempl.fullname &amp; Chr(10)\n\
	numRules = GetNumMappingRules( in_Templ )\n\
	if oTempl.type = \"actionclip\" then\n\
		msg = msg &amp; \"(Clip acting as value map)\" &amp; Chr(10)\n\
		bSupportsActive = true\n\
	else\n\
		bSupportsActive = false\n\
	end if\n\
	for i = 1 to numRules\n\
		GetMappingRule in_Templ, i, param, expr, active\n\
		msg = msg &amp; Chr(9) &amp; \"Rule \" &amp; i &amp; \": \"\n\
		if bSupportsActive then\n\
			if active then\n\
				msg = msg &amp; \"( active ) \"\n\
			else\n\
				msg = msg &amp; \"(inactive) \"\n\
			end if\n\
		end if\n\
		msg = msg &amp; param &amp; \" -&gt; \" &amp; expr &amp; Chr(10)\n\
	next\n\
	LogMessage msg \n\
end sub\n\
\' Running this script should log the following:\n\
\' ---------------------------------------------\n\
\'INFO : \"Template: Mixer.MappingTemplate\n\
\'	Rule 1: from -&gt; to\n\
\'	Rule 2: me -&gt; you\n\
\'	Rule 3: HERE -&gt; THERE\n\
\'\"\n\
\'INFO : \"Template: Mixer.MappingTemplate\n\
\'	Rule 1: HERE -&gt; THERE\n\
\'\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/AddMappingRule.html\">AddMappingRule</a> <a href=\"#!/url=./si_cmds/CreateConnectionMap.html\">CreateConnectionMap</a> <a href=\"#!/url=./si_cmds/CreateValueMap.html\">CreateValueMap</a> <a href=\"#!/url=./si_cmds/GetNumMappingRules.html\">GetNumMappingRules</a> <a href=\"#!/url=./si_cmds/GetMappingRule.html\">GetMappingRule</a> <a href=\"#!/url=./si_cmds/SetMappingRule.html\">SetMappingRule</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";