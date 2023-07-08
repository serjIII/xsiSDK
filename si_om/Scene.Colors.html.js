var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Scene.Colors</title>\n\
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
            <h1>Scene.Colors</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Scene.html\">Scene</a>.Colors</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns the Scene Colors <a href=\"#!/url=./si_om/Property.html\">Property</a> (found under the scene\'s \n\
<a href=\"#!/url=./si_om/Preferences.html\">Preferences</a> in the UI). The Scene Colors property allows you \n\
to control the color that objects and components display in their selected, \n\
unselected, and unselectable state.\n\
<br /><br />\n\
The value of each color <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> represents an RGB value as a \n\
<a href=\"#!/url=./files/Long.htm\">Long</a> (0 to 1023). For more details, see the explanation for how \n\
Wireframe colors are represented in the <a href=\"#!/url=./si_om/Color.html\">Color</a> documentation.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Property rtn = Scene.Colors;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to access the scene colors\n\
*/\n\
NewScene( null, false );\n\
var colors = ActiveProject.ActiveScene.Colors;\n\
LogMessage( \"Current values for \" + colors + \": \" );\n\
for ( var i=0; i&lt;colors.Parameters.Count; i++ ) {\n\
	var col = colors.Parameters(i);\n\
	LogMessage( \"\\t\" + col.Name + \" = \" + col.Value );\n\
}\n\
// Expected Result:\n\
//INFO : Current values for preferences.Scenecolors: \n\
//INFO : 	3DO Selected = -1\n\
//INFO : 	Geometry = 255\n\
//INFO : 	Inherited Selection = -1183660289\n\
//INFO : 	Light = -850722561\n\
//INFO : 	Camera = 338206975\n\
//INFO : 	Ctrl Object = 6422783\n\
//INFO : 	Null = 6422783\n\
//INFO : 	Component = -16776961\n\
//INFO : 	Vertex = 65535\n\
//INFO : 	Normal = 65535\n\
//INFO : 	Curve ISO = 16711935\n\
//INFO : 	Curve Boundary = -16776961\n\
//INFO : 	Curve Surface = 65535\n\
//INFO : 	Cluster = 16711935\n\
//INFO : 	Subselection = -1598243585\n\
//INFO : 	Active = -3014401\n\
//INFO : 	Unselectable = 1431655935\n\
//INFO : 	Knot = -1522390529\n\
//INFO : 	Sampled Point = -762511361\n\
//INFO : 	Selected Cluster = -1\n\
//INFO : 	Highlight Color = -503316481\n\
//INFO : 	PSet Inspected Color = -8355585\n\
//INFO : 	Local PSet Inspected Color = -1865351169\n\
//INFO : 	Background Color = 2139062271\n\
//INFO : 	Grid Color = 421075455\n\
//INFO : 	Viewport Color = 1717987071\n\
//INFO : 	Tag Component Color = -1879047937</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Preferences.html\">Preferences</a> <a href=\"#!/url=./si_om/Color.html\">Color</a> <a href=\"#!/url=./si_om/Property.html\">Property</a> <a href=\"#!/url=./si_om/ProjectItem.Parameters.html\">ProjectItem.Parameters</a> <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";