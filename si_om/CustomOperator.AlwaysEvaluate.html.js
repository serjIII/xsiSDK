var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>CustomOperator.AlwaysEvaluate</title>\n\
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
            <h1>CustomOperator.AlwaysEvaluate</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/CustomOperator.html\">CustomOperator</a>.AlwaysEvaluate</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns or sets whether the custom operator is always evaluated on each request for data\n\
as a <a href=\"#!/url=./files/Boolean.htm\">Boolean</a> (true to always evaluate). This property is off by default, \n\
which means that Softimage will not consider the custom operator as needing a new evaluation unless \n\
the operator\'s input or parameters change. However this optimization is not suitable for some \n\
simulation-style operators, in which case this property should be set to true. \n\
<br /><br />\n\
Note: Because of the \"lazy-evaluation\" pull model of Softimage this property does not guarantee that \n\
the operator will actual evaluate at each frame - it is still necessary for the UI, a script, \n\
rendering or some dependent object to request the operator\'s output.\n\
<br /><br />\n\
The recommended callback for setting this property in a Self-Installed Custom Operator is in \n\
the _Define callback.\n\
<br /><br />\n\
Note: You can read this property from within the update function of a custom operator but setting \n\
this property is blocked.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Boolean rtn = CustomOperator.AlwaysEvaluate;\n\
// set accessor\n\
CustomOperator.AlwaysEvaluate = Boolean;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">NewScene( null, false );\n\
var null1 = GetPrim(\"null\");\n\
SetExpr( null1.posx, \"10\");\n\
var sop = null1.posx.AddScriptedOp( MyExpr_Update.toString(), null,\"MyExpr\", \"JScript\" );\n\
SetValue( \"PlayControl.Current\", 3, null );\n\
sop.AlwaysEvaluate = true;\n\
val = GetValue( \"null.kine.local.posx\" );\n\
Application.LogMessage( val );\n\
SetValue( \"PlayControl.Current\", 4, null );\n\
val = GetValue( \"null.kine.local.posx\" );\n\
Application.LogMessage( val );\n\
// Force scene to reevaluate \n\
sop.AlwaysEvaluate = false;\n\
Refresh();\n\
SetValue( \"PlayControl.Current\", 5, null );\n\
val = GetValue( \"null.kine.local.posx\" );\n\
Application.LogMessage( val );\n\
// Scripted operator\'s update function\n\
function MyExpr_Update(ctx,out)\n\
{\n\
	Application.LogMessage( \"MyExpr_Update: \" + out.name );\n\
	out.Value = ctx.CurrentFrame;\n\
}\n\
// Expected results:\n\
//INFO : MyExpr_Update: Outposx\n\
//INFO : 3\n\
//INFO : MyExpr_Update: Outposx\n\
//INFO : 4\n\
//INFO : MyExpr_Update: Outposx\n\
//INFO : 4</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";