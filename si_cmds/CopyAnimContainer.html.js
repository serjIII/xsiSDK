var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>CopyAnimContainer</title>\n\
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
            <h1>CopyAnimContainer</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">CopyAnimContainer</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Copies parameter animation between properties (properties contain parameters).\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>CopyAnimContainer( InputObj, Target );</pre>		</td>	</tr>\n\
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
		<td>Properties or sub component of a property		</td>\n\
		<td>\n\
 The container containing the animated parameters for which the animation must be copied 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Target		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of properties (for example, \"sphere*.kine.local.pos\"). 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to copy animation from one property\n\
	set to one or more others by using the CopyAnimContainer command\n\
*/\n\
// Create a null and 3 spheres\n\
NewScene( null, false );\n\
GetPrim( \"Null\" );\n\
CreatePrim( \"Sphere\", \"MeshSurface\" );\n\
CreatePrim( \"Sphere\", \"MeshSurface\" );\n\
CreatePrim( \"Sphere\", \"MeshSurface\" );\n\
// Set some animation on the null\n\
SetValue(\"PlayControl.Key\", 1, null);\n\
SetValue(\"PlayControl.Current\", 1, null);\n\
Translate(\"null\", -6.97865149659886, 0.234776770384885, -2.34776770384885E-02, \n\
	siRelative, siView, siObj, siXYZ, null, null, null, null, null, null, null, null, null, 0, null);\n\
SaveKey(\"null.kine.local.posx,null.kine.local.posy,null.kine.local.posz\", 1, null, null, null);\n\
SetValue(\"PlayControl.Key\", 33, null);\n\
SetValue(\"PlayControl.Current\", 33, null);\n\
Translate(\"null\", 6.45996793941922, -3.8503390343121, 0.38503390343121, \n\
	siRelative, siView, siObj, siXYZ, null, null, null, null, null, null, null, null, null, 0, null);\n\
SaveKey(\"null.kine.local.posx,null.kine.local.posy,null.kine.local.posz\", 33, null, null, null);\n\
SetValue(\"PlayControl.Key\", 59, null);\n\
SetValue(\"PlayControl.Current\", 59, null);\n\
Translate(\"null\", 4.99822336918567, 0.657374957077674, -6.57374957077675E-02, \n\
	siRelative, siView, siObj, siXYZ, null, null, null, null, null, null, null, null, null, 0, null);\n\
SaveKey(\"null.kine.local.posx,null.kine.local.posy,null.kine.local.posz\", 59, null, null, null);\n\
SetValue(\"PlayControl.Key\", 75, null);\n\
SetValue(\"PlayControl.Current\", 75, null);\n\
Translate(\"null\", 3.01779524177248, 2.25385699569489, -0.225385699569489, \n\
	siRelative, siView, siObj, siXYZ, null, null, null, null, null, null, null, null, null, 0, null);\n\
SaveKey(\"null.kine.local.posx,null.kine.local.posy,null.kine.local.posz\", 75, null, null, null);\n\
SetValue(\"PlayControl.Key\", 97, null);\n\
SetValue(\"PlayControl.Current\", 97, null);\n\
Translate(\"null\", 0.188612202610777, 7.8884994849321, -0.78884994849321, \n\
	siRelative, siView, siObj, siXYZ, null, null, null, null, null, null, null, null, null, 0, null);\n\
SaveKey(\"null.kine.local.posx,null.kine.local.posy,null.kine.local.posz\", 97, null, null, null);\n\
// Copy the animation over to all the spheres\n\
CopyAnimContainer( \"null.kine.local.pos\", \"sphere*.kine.local.pos\" );</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/ConnectSource.html\">ConnectSource</a> <a href=\"#!/url=./si_cmds/SaveKey.html\">SaveKey</a> <a href=\"#!/url=./si_cmds/CopyAnimation.html\">CopyAnimation</a> <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";