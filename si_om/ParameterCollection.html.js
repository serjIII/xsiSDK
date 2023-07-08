var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ParameterCollection</title>\n\
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
            <h1>ParameterCollection</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ParameterCollection</h2>\n\
\n\
<p>Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1CParameterRefArray.html\">CParameterRefArray</a></p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.5</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> A collection of objects that implement the <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> interface. In other\n\
words, each member of this collection is either of class Parameter or of\n\
any descendent class (<a href=\"#!/url=./si_om/ShaderParameter.html\">ShaderParameter</a>, <a href=\"#!/url=./si_om/ShaderArrayParameter.html\">ShaderArrayParameter</a>, \n\
<a href=\"#!/url=./si_om/KinematicState.html\">KinematicState</a>, etc.). For a list of interfaces that implement the Parameter \n\
interface, see <a href=\"#!/url=./si_om/_hier.html#oh_Parameter\">its object hierarchy</a>.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ParameterCollection.Filter.html\">Filter</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ParameterCollection.Find.html\">Find</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ParameterCollection.GetAsText.html\">GetAsText</a>		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Properties</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ParameterCollection.Count.html\">Count</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ParameterCollection.Item.html\">Item</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to access a shader\'s parameter collection \n\
*/\n\
NewScene(null, false);\n\
// Set up a cylinder with a Color Ramp shader \n\
CreatePrim(\"Cylinder\", \"MeshSurface\");\n\
var sh = CreateShaderFromProgID(\"MetaSL.Generator_color_ramp.1.0\", \"Sources.Materials.DefaultLib.Scene_Material\");\n\
SIConnectShaderToCnxPoint(\"Sources.Materials.DefaultLib.Scene_Material.Color_Ramp.result\", \n\
	\"Sources.Materials.DefaultLib.Scene_Material.Phong.ambient\", false);\n\
// Check the class of each parameter in the collection\n\
for (var i=0; i&lt;sh.Parameters.Count; i++) {\n\
	var param = sh.Parameters.Item(i);\n\
	Application.LogMessage( param.ScriptName + \" is a(n) \" + Application.ClassName(param) );\n\
}\n\
// Expected output:\n\
// INFO : Name is a(n) Parameter\n\
// INFO : location is a(n) ShaderParameter\n\
// INFO : inputs is a(n) ShaderArrayParameter\n\
// INFO : interpolation_style is a(n) ShaderParameter\n\
// INFO : result is a(n) ShaderParameter</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">set oRoot = Application.ActiveProject.ActiveScene.Root\n\
set oCube = oRoot.AddGeometry( \"Cube\", \"MeshSurface\" )\n\
for each oParam in oCube.Parameters\n\
	LogMessage oParam.Name\n\
next</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Parameter.AnimatedParameters.html\">Parameter.AnimatedParameters</a> <a href=\"#!/url=./si_om/Parameter.Parameters.html\">Parameter.Parameters</a> <a href=\"#!/url=./si_om/ProjectItem.Parameters.html\">ProjectItem.Parameters</a> <a href=\"#!/url=./si_om/ProjectItem.AnimatedParameters2.html\">ProjectItem.AnimatedParameters2</a> <a href=\"#!/url=./si_om/Shader.Parameters.html\">Shader.Parameters</a> <a href=\"#!/url=./si_om/Shader.Parameters.html\">Shader.Parameters</a> <a href=\"#!/url=./si_om/ShaderParameter.Targets.html\">ShaderParameter.Targets</a> <a href=\"#!/url=./si_om/X3DObject.NodeAnimatedParameters.html\">X3DObject.NodeAnimatedParameters</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";