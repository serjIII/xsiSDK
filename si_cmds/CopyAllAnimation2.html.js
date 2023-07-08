var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>CopyAllAnimation2</title>\n\
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
            <h1>CopyAllAnimation2</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">CopyAllAnimation2</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Copies all the animation under the specified object to the clipboard. You can use \n\
the ParameterMask to specify which kinds of parameters to copy from. This saves you \n\
from having to explicitly specify the parameters to target in the InputObjs parameter.<br /><br />\n\
This command usually tries to match the parameter by path. If the parameters cannot \n\
be found by path, it tries to copy them by ordinal (the order in which they are enumerated). \n\
For example, running CopyAllAnimation2 on a kine.pos would copy x-y-z on the red green blue \n\
of a shader if pasted there.<br /><br />\n\
Use this command in conjunction with the <a href=\"#!/url=./si_cmds/PasteAllAnimation.html\">PasteAllAnimation</a> command\n\
to copy animation between objects.<br /><br />\n\
Use this command instead of <a href=\"#!/url=./si_cmds/CopyAllAnimation.html\">CopyAllAnimation</a>.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>CopyAllAnimation2( InputObjs, [SourceMask], [ParameterMask], [RemoveAnimation], [BaseAnimation], [LayerAnimation] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">InputObjs		</td>\n\
		<td><a href=\"#!/url=./files/objectexpr.htm\">Object</a> or property name (anything selectable)		</td>\n\
		<td>\n\
The object (or property) under which we can find the animation to copy. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SourceMask		</td>\n\
		<td><a href=\"#!/url=./si_om/siSourceType.html\">siSourceType</a>		</td>\n\
		<td>\n\
 Type of animation to remove. <br /><br />Currently, only FCurves and Expressions are copied.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siAnySource			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ParameterMask		</td>\n\
		<td><a href=\"#!/url=./si_om/siParameterFilter.html\">siParameterFilter</a>		</td>\n\
		<td>\n\
Parameters containing animation to copy. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siAllParam			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RemoveAnimation		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
True to disconnect the animation after copying (not supported for now) 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
false			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">BaseAnimation		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 If True the command will copy animation on the base layer. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
True			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">LayerAnimation		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 If True the command will copy animation on all layers except the base layer. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
True			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to copy the scaling animation with the\n\
	CopyAllAnimation2 command and then paste it onto another object with\n\
	the PasteAllAnimation command.\n\
*/\n\
NewScene( \"\", false );\n\
// Create a disc and animate its scaling in X\n\
var disc1 = CreatePrim( \"Disc\", \"MeshSurface\" );\n\
var keys = new Array( 2, 1.4, 47, 2, 84, 0.15 );\n\
disc1.sclx.AddFCurve2( keys );\n\
// Create another disc onto which we will paste this animation\n\
var disc2 = CreatePrim( \"Disc\", \"MeshSurface\" );\n\
// Copy the animation from disc1 to disc2 (scaling parameters only)\n\
CopyAllAnimation2( disc1, siAnySource, siScl );\n\
PasteAllAnimation( disc2, true );\n\
// Now delete disc1 just to prove that the animation you see is\n\
// really on disc2, then start the playback\n\
DeleteObj( disc1 );\n\
PlayForwardsFromStart();\n\
// You will see that the disc still scales up and down, even though the \n\
// original disc has been deleted.</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/PasteAllAnimation.html\">PasteAllAnimation</a> <a href=\"#!/url=./si_cmds/CopyAnimation.html\">CopyAnimation</a> <a href=\"#!/url=./si_cmds/PasteAnimation.html\">PasteAnimation</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";