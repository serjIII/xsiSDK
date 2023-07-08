var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SetKeyableAttributes</title>\n\
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
            <h1>SetKeyableAttributes</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SetKeyableAttributes</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Sets or clears the keyable attributes on the list of parameters created by using the marking parameter string \n\
on the input list of objects.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SetKeyableAttributes( [InputObjs], [Params], [Attribute] );</pre>		</td>	</tr>\n\
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
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of objects. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Currently selected objects			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Params		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Parameter list, for example: kine.local.posx,kine.local.posy,kine.local.posz 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"\"			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Attribute		</td>\n\
		<td><a href=\"#!/url=./si_om/siKeyableAttributeType.html\">siKeyableAttributeType</a>		</td>\n\
		<td>\n\
 What action to peform? 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siKeyableAttributeKeyable			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' Create a primitive cone and add custom parameter on it, then make that custom parameter keyable\n\
NewScene , False\n\
CreatePrim \"Cone\", \"MeshSurface\"\n\
SIAddCustomParameter \"cone\", \"MyFloat\", siDouble, 0, 0, 1, , 5, 0, 1\n\
SetKeyableAttributes \"cone\", \"CustomPSet.MyFloat\", siKeyableAttributeKeyable</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// Create two Null objects and make their kine.local.active parameter keyable\n\
NewScene(null, false);\n\
GetPrim(\"Null\", null, null, null);\n\
GetPrim(\"Null\", null, null, null);\n\
SetKeyableAttributes(\"null,null1\", \"kine.local.active\", siKeyableAttributeKeyable);</pre></td></tr>\n\
</table>\n\
</div><h4>3. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' Change the scaling and rotation parameters on all the selected objects (the two nulls) from their default keyable to non-keyable visible\n\
NewScene , False\n\
GetPrim \"Null\"\n\
GetPrim \"Null\"\n\
SelectObj \"Null,Null1\"\n\
SetKeyableAttributes , \"kine.local.scl,kine.local.ori.euler\", siKeyableAttributeNonKeyableVisible</pre></td></tr>\n\
</table>\n\
</div><h4>4. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// Clear the keyable attribute on the scaling parameters of the Null and Null1 objects\n\
NewScene( null, false );\n\
GetPrim( \"Null\" );\n\
GetPrim( \"Null\" );\n\
SetKeyableAttributes( \"null,null1\", \"kine.local.scl.sclx,kine.local.scl.scly,kine.local.scl.sclz\", siKeyableAttributeClear );</pre></td></tr>\n\
</table>\n\
</div><h4>5. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\"># Clear the keyable attributes on the rotation parameters of all the selected objects (the two nulls)\n\
from win32com.client import constants as c\n\
Application.NewScene( \"\", 0 )\n\
Application.GetPrim( \"Null\" )\n\
Application.GetPrim( \"Null\" )\n\
Application.SelectObj( \"Null,Null1\" )\n\
Application.SetKeyableAttributes( \"\", \"kine.local.ori.euler\", c.siKeyableAttributeClear )</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/SaveKeyOnKeyable.html\">SaveKeyOnKeyable</a> <a href=\"#!/url=./si_cmds/SaveKeyOnMarkedKeyable.html\">SaveKeyOnMarkedKeyable</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";