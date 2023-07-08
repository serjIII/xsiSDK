var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>GetValue</title>\n\
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
            <h1>GetValue</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">GetValue</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Returns the value of a parameter at a specific frame. This is a very \n\
powerful command because it can apply to any parameter, and it can \n\
convert a return value to an object in some cases. It also isn\'t \n\
necessarily tied to a parameter, as in the case of using it to return\n\
a collection of selected objects.<br /><br />\n\
The example below demonstrates how versatile this command is. It returns\n\
whatever value the parameter contains, no matter what type of value it is.\n\
If the parameter or entity is attached to an object, then the object is\n\
returned, rather than a simple data value (like a string with the name of\n\
the object). For example, the following statement returns an \n\
<a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> of selected items:<br /><br />\n\
Set objSel = GetValue( \"SelectionList\" )<br /><br />\n\
Note: If this command returns an object (instead of a simple data value) \n\
and you are using VBScript, you must use the \'Set\' keyword in order to \n\
get the object. If you omit \'Set\', the string name of the object(s) is\n\
returned instead.<br /><br />\n\
On the other hand, if you try to assign a simple data value to an object,\n\
this command generates an \'Object required\' error message. For example, if\n\
you tried to assign the returned posx value as an object as in this case:<br /><br />\n\
Set dblX = GetValue( \"circle.kine.local.pos.posx\" )<br /><br />\n\
You can usually test for the return value by using the TypeName() function\n\
for VBScript (which reports back object type as well as simple data type).\n\
For JScript, you can use the ClassName() method, which reports on the object\n\
type or the typeof operator, which reports only on the simple data type.<br /><br />\n\
The counterpart to this command is the <a href=\"#!/url=./si_cmds/SetValue.html\">SetValue</a> command, \n\
which allows you to set parameter values. <br /><br />\n\
The Object Model provides alternatives to GetValue and SetValue. For example, \n\
parameter values can be retrieved and modified using <a href=\"#!/url=./si_om/Parameter.Value.html\">Parameter.Value</a>\n\
as demonstrated in the second example below.  In addition, objects can be retrieved \n\
using <a href=\"#!/url=./si_om/Dictionary.GetObject.html\">Dictionary.GetObject</a>.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oVariant = GetValue( Target, [Time] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./files/Variant.htm\">Variant</a></p></div>\n\
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
<a href=\"#!/url=./files/paramexpr.htm\">Parameter</a> value to retrieve. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Time		</td>\n\
		<td>Number		</td>\n\
		<td>\n\
 Frame at which to get the value. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current frame.			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\'    This example just demonstrates some of the different values \n\
\'    you can find using this command. \n\
\'       NB: If you want to use the GetValue command to return\n\
\'           an object, you need to use the \'Set\' keyword for VBScript\n\
\'\n\
rtn = GetValue(\"Camera.aspect\")\n\
LogMessage TypeName(rtn)				\' returns Double\n\
rtn = GetValue(\"Camera.kine.posz\", 25)\n\
LogMessage TypeName(rtn)				\' returns Boolean\n\
rtn = GetValue(\"light.Name\")\n\
LogMessage TypeName(rtn)				\' returns String\n\
\' GetValue() on an object just returns the object:\n\
set rtn = GetValue(\"Layers.Layer_Default\")\n\
LogMessage TypeName(rtn)				\' returns Layer\n\
\' You can also convert the selection list to the selection object\n\
set rtn = GetValue(\"SelectionList\")\n\
LogMessage TypeName(rtn)				\' returns Object (= collection)\n\
LogMessage rtn.Type					\' returns XSICollection\n\
LogMessage TypeName(rtn(0))				\' returns X3DObject</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
This example demonstrates how you can get and set parameter values\n\
using one of the following:\n\
(1) GetValue or SetValue scripting commands\n\
(2) the Parameter object (long version)\n\
(3) a shortcut to the Parameter object\n\
*/\n\
NewScene( null, false);\n\
// First start by getting an object pointer to the sphere, which we will\n\
// use with the object model versions\n\
ActiveSceneRoot.AddGeometry( \"sphere\", \"meshsurface\" );\n\
var oSphere = ActiveSceneRoot.FindChild( \"Sphere\" );\n\
// (1) Change the sphere\'s posx value using commands:\n\
dblX = GetValue( \"sphere.kine.local.pos.posx\" );\n\
dblX = dblX - 1.25;\n\
SetValue( \"sphere.kine.local.pos.posx\", dblX );\n\
// (2) Restore the value but this time use the OM (long way)\n\
dblX = oSphere.Kinematics.Local.Parameters( \"posx\" ).Value;\n\
dblX = dblX + 1.25;\n\
oSphere.Kinematics.Local.Parameters( \"posx\" ).Value = dblX;\n\
// (3) Change the value back again with the OM shortcut\n\
dblX = oSphere.posx.Value;\n\
dblX = dblX + 1.25;\n\
oSphere.posx.Value = dblX;</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/SetValue.html\">SetValue</a> <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> <a href=\"#!/url=./si_om/Dictionary.GetObject.html\">Dictionary.GetObject</a> <a href=\"#!/url=./si_cmds/ToggleValue.html\">ToggleValue</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";