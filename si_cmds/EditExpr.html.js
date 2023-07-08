var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>EditExpr</title>\n\
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
            <h1>EditExpr</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">EditExpr</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Opens the Expression Editor for the expressions on the given parameters.<br /><br />\n\
An expression is a string of characters that may include object and \n\
parameter names, mathematical operators, and tokens representing \n\
functions or constants. For example, to constrain object A\'s Y rotation \n\
to object B\'s X translation, you would set an expression on \n\
A.kine.local.roty consisting of the string B.kine.local.posx.<br /><br />\n\
An expression is a mathematical formula that you can use to control any \n\
parameter that can be animated, such as translation, rotation, scaling, \n\
material, or texture. You can create almost any connection you like between \n\
parameters, from simple \"A = B\" relationships to very complex ones using \n\
predefined variables, standard math functions, random number generators, \n\
and more. <br /><br />\n\
For more information on expressions, see the Animation guide.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>EditExpr( [InputObj] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">InputObj		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of parameters (for example \"cone*/kine.local.pos\"). 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Currently selected and marked parameters			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example sets an expression on a parameter using the SetExpr \n\
\' command and then uses the EditExpr command to open the Expression \n\
\' Editor to inspect the new expression.\n\
\'\n\
NewScene , false\n\
\' Create the object on which to set the expression\n\
set oDonut = CreatePrim( \"Torus\", \"NurbsSurface\" )\n\
\' Make sure the last frame will be set to 100\n\
SetValue \"PlayControl.Out\", 100\n\
\' Set a key frame at frame 1, with XPos = -30\n\
SaveKey oDonut &amp; \".kine.local.posx\", 1, -30\n\
\' Set another key frame at frame 100, with XPos = 30\n\
SaveKey oDonut &amp; \".kine.local.posx\", 100, 30\n\
\' Temporarily disable cycle checking (this \n\
\' expression creates a cycle on purpose)\n\
bCyclePref = GetValue( \"preferences.data_management.disable_cycle_checking\" )\n\
SetValue \"preferences.data_management.disable_cycle_checking\", True\n\
\' Animate the YPos parameter with an expression \n\
SetExpr oDonut &amp; \".kine.local.posy\", _\n\
		\"5*sin(\" &amp; oDonut &amp; \".kine.local.posx * 15)\"\n\
\' Restore cycle checking to its previous value\n\
SetValue \"preferences.data_management.disable_cycle_checking\", bCyclePref\n\
\' Now display the Expression Editor to see the results\n\
EditExpr oDonut &amp; \".kine.local.posy\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Expression.html\">Expression</a> <a href=\"#!/url=./si_cmds/AddExpr.html\">AddExpr</a> <a href=\"#!/url=./si_cmds/SetExpr.html\">SetExpr</a> <a href=\"#!/url=./si_cmds/RemoveAnimation.html\">RemoveAnimation</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";