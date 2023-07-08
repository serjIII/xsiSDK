var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSIApplication.Commands</title>\n\
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
            <h1>XSIApplication.Commands</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/XSIApplication.html\">XSIApplication</a>.Commands</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns a collection containing all the installed <a href=\"#!/url=./si_om/Command.html\">Command</a>s, including both \n\
built-in and custom commands as a <a href=\"#!/url=./si_om/CommandCollection.html\">CommandCollection</a>.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
CommandCollection rtn = XSIApplication.Commands;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/* \n\
		This example demonstrates some of the functionality of\n\
		filtering command collections by showing:\n\
			1. How to filter out everything but the modeling \n\
				commands (ie., subset{modeling})\n\
			2. How to filter out everything but the commands with \n\
				either \'modeling\' or \'deformation\' as keywords\n\
				(ie., union{modeling,deformation})\n\
			3. How to use nested filtering to produce a collection \n\
				of commands that match *both* \'modeling\' and \n\
				\'deformation\' (ie., intersection{modeling,deformation})\n\
	*/\n\
	// ------------------------------------------------------\n\
	// 1: SIMPLE SUBSET{modeling}\n\
	//\n\
	var coll_mo = Application.Commands.Filter( \"modeling\" );\n\
	LogMessage( \"Found \" + coll_mo.Count + \" modeling commands.\" );\n\
	// ------------------------------------------------------\n\
	// 2: UNION{modeling,deformation}\n\
	//\n\
	// You can use an array of keywords to get any command that \n\
	// has *either* \'modeling\' or \'deformation\' as a keyword.\n\
	aKeywords = new Array( \"modeling\", \"deformation\" );\n\
	var coll_umd = Application.Commands.Filter( aKeywords );\n\
	LogMessage( \"Found \" + coll_umd.Count \n\
			+ \" modeling and/or deformations commands.\" );\n\
	// ------------------------------------------------------\n\
	// 3: INTERSECT{modeling,deformation}\n\
	//\n\
	// To find each command that has *both* \'modeling\' and \n\
	// \'deformation\' as keywords, first filter for one value\n\
	// and then use the returned collection to filter for\n\
	// the other value.\n\
	var coll_do = Application.Commands.Filter( \"deformation\" );\n\
	var coll_imd = coll_do.Filter( \"modeling\" );\n\
	LogMessage( \"Found \" + coll_imd.Count \n\
			+ \" modeling and deformations commands:\" );\n\
	// You can enumerate over the collection using the JScript\n\
	// Enumerator object to access each member\n\
	var e = new Enumerator(coll_imd)\n\
	for ( ; !e.atEnd(); e.moveNext() ) {\n\
		LogMessage( \"\\t\" + e.item() );\n\
	}\n\
	// ------------------------------------------------------\n\
	// 		RESULTS:\n\
	//\n\
	//INFO : \"Found 235 modeling commands.\"\n\
	//INFO : \"Found 311 modeling and/or deformations commands.\"\n\
	//INFO : \"Found 13 modeling and deformations commands:\"\n\
	//INFO : \"	Disconnect Operator Parameter\"\n\
	//INFO : \"	Deform by Cluster Center with Nulls Creation\"\n\
	//INFO : \"	MCP Setting: Set Proportional Modeling\"\n\
	//INFO : \"	Deform by Cluster Center with Nulls Creation\"\n\
	//INFO : \"	Deform by Cluster Center\"\n\
	//INFO : \"	MoveComponent Tool\"\n\
	//INFO : \"	Move Point Tool\"\n\
	//INFO : \"	Curve Snap\"\n\
	//INFO : \"	Continuity Manager\"\n\
	//INFO : \"	MCP Setting: Set Frame Relative Move Component\"\n\
	//INFO : \"	MCP Setting: Unset Frame Relative Move Component\"\n\
	//INFO : \"	MCP Setting: Unset Proportional Modeling\"\n\
	//INFO : \"	Connect Operator Parameter\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Command.html\">Command</a> <a href=\"#!/url=./si_om/CommandCollection.html\">CommandCollection</a> <a href=\"#!/url=./si_om/CommandCollection.Filter.html\">CommandCollection.Filter</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";