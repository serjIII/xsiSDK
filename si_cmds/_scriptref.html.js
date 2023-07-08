var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Commands and Scripting Reference</title>\n\
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
            <h1>Commands and Scripting Reference</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Commands and Scripting Reference</h2>\n\
\n\
<div><p>\n\
Scripting in Softimage is a set of features that allows you to develop scripts. A script is a series of calls to\n\
Softimage functions (commands or object model functions) written in a particular scripting language, together with\n\
logic and variables as permitted by the language. <br /><br />\n\
The Autodesk Softimage SDK supports more than just scripting. Scripting is interpreted line by line as it runs, but\n\
you can also write code that is compiled from the source into binary files that can then be distributed, either as an\n\
executable (*.exe file) or a library (*.dll for Windows and *.so for Linux). <br /><br />\n\
If a path constraint already exists, a position is added onto the existing curve and a  key is added on the path\n\
percentage property ( ObjectName.kine.PathCns.Percentage ) of the constraint at the given time.\n\
The type of development you decide to do depends largely on what you need to accomplish and what you are capable of doing,\n\
so it&#8217;s really an individual decision. For example, you may be a C++ programmer who is interested in creating a compiled\n\
plug-in for Autodesk Softimage; or you may be a technical director who just needs to automate some repetitive tasks. <br /><br />\n\
Softimage&#8217;s SDK can accommodate both types of users, since it supports four scripting languages\n\
(VBScript, JScript, Perl, and Python) for Windows and two for and Linux (VBScript and JScript) and you can access components\n\
of the object model from a programming language like C++.\n\
</p></div>\n\
\n\
<h3>Available Reference Topics</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Topics		</th>\n\
		<th title=\"Description of the parameter\">Information Provided		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a href=\"#!/url=./si_cmds/_az.html\">Commands</a>		</td>\n\
		<td>Native Softimage scripting commands.			<p />\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a href=\"#!/url=./si_om/_azobj.html\">Objects</a>, <a href=\"#!/url=./si_om/_azmeth.html\">Methods</a>, <a href=\"#!/url=./si_om/_azprop.html\">Properties</a>, <a href=\"#!/url=./si_om/_azconst.html\">Constants</a>, and <a href=\"#!/url=./si_om/_azcol.html\">Collections</a>		</td>\n\
		<td>Softimage Object Model library.			<p />\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a href=\"#!/url=./si_om/_hier.html\">Object Model Hierarchy</a>		</td>\n\
		<td>List of object model classes presented with indenting to indicate hierarchical relationships.	<p />\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a href=\"#!/url=./si_cmds/_presets.html\">Presets</a>		</td>\n\
		<td>Lists of valid preset strings to be used in various commands and object model methods. 			<p />\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a href=\"#!/url=./si_cmds/ViewAttributes.html\">View Attributes</a>		</td>\n\
		<td>List of valid attributes that can be used to customize and control various View windows in the Softimage UI.	<p />\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a href=\"#!/url=./si_cmds/Views.html\">View Definitions</a>		</td>\n\
		<td>List of all names recognized by Softimage as possible view IDs. These names can be specified in the <a href=\"#!/url=./si_cmds/OpenView.html\">OpenView</a> command to open and instance of the given name.	<p />\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a href=\"#!/url=./si_cmds/callbacks.html\">Callbacks</a>		</td>\n\
		<td>List of all callbacks for self-installing plug-ins.	<p />\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";