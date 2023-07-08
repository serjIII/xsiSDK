var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SetValue</title>\n\
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
            <h1>SetValue</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SetValue</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Sets <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> values and returns the old value (that is, the parameter value before it \n\
was changed). This command, like its counterpart <a href=\"#!/url=./si_cmds/GetValue.html\">GetValue</a>, is a very powerful command \n\
because it can change the value of practically any parameter in the scene.<br /><br />\n\
Each time the user changes a Property Page the resulting SetValue call is logged into the script history.  \n\
By turning the script history contents into a simple script it is easy to automate repetitive tasks. <br /><br />\n\
SetValue provides powerful wildcard support so it is possible to set many parameters with a single call.\n\
However, because calling SetValue is logged in the Script History, it is sometimes faster to use the object \n\
model to change values; see <a href=\"#!/url=./si_om/Parameter.Value.html\">Parameter.Value</a>. <br /><br />\n\
For more information, see the documentation for the <a href=\"#!/url=./si_cmds/GetValue.html\">GetValue</a> command.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SetValue( Target, Value, [Time] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Target		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of <a href=\"#!/url=./files/paramexpr.htm\">parameters</a> to set. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Value		</td>\n\
		<td>Parameter-dependent		</td>\n\
		<td>\n\
 New parameter values. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Time		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 Frame at which to set the values. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current frame.			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' The following uses SetValue to set various parameters \n\
\' on some scene elements\n\
NewScene\n\
\' Create a sphere and change the wireframe color to red\n\
\' This demonstrates we can use SetValue for object properties.\n\
CreatePrim \"Sphere\", \"MeshSurface\"\n\
DeselectAll\n\
MakeLocal \"sphere.display\", siNodePropagation\n\
SetValue \"sphere.display.wirecol\", 15\n\
CreatePrim \"Circle\", \"NurbsCurve\"\n\
CreatePrim \"Circle\", \"NurbsCurve\"\n\
CreatePrim \"Circle\", \"NurbsCurve\"\n\
CreatePrim \"Circle\", \"NurbsCurve\"\n\
\' Set the radius of all circles to 1\n\
\' This demonstrates we can use SetValue in a bulk-edit fashion.\n\
SetValue \"circle*.circle.radius\", 1\n\
\' Set the radius of \"circle\" to 2, and the radius of \"circle1\" to 3\n\
\' This demonstrates we can use SetValue with an array of values.\n\
SetValue \"circle.circle.radius,circle1.circle.radius\", ARRAY(2, 3)\n\
\' Hide the grid in all views, for all cameras (except scene camera)\n\
\' This demonstrates we can use SetValue for cameras, views, etc.\n\
SetValue \"Views.*.*.camvis.gridvis\", False \n\
\' Change current frame to 30 \n\
\' This demonstrates we can use SetValue for playback settings\n\
	SetValue \"PlayControl.Current\", 30.000</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/GetValue.html\">GetValue</a> <a href=\"#!/url=./si_cmds/ToggleValue.html\">ToggleValue</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";