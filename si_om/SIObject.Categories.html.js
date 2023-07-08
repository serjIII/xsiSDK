var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SIObject.Categories</title>\n\
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
            <h1>SIObject.Categories</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a>.Categories</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Sets or returns the categories defined for this object. Categories are used to extend the categorization \n\
of objects. Categories of SPDL objects are initialized with the values of the Keyword field whereas the \n\
categories of custom objects (such as <a href=\"#!/url=./si_om/Filter.html\">Filter</a> and <a href=\"#!/url=./si_om/Command.html\">Command</a>) can be set \n\
when plug-in items are registered with <a href=\"#!/url=./si_om/PluginRegistrar.html\">PluginRegistrar</a>. \n\
<br /><br />\n\
Categories are returned as as an <a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/String.htm\">String</a>s. If no categories are \n\
specified, an empty array is returned. \n\
<br /><br />\n\
Categories must be set in a comma-separated string. Use <a href=\"#!/url=./si_om/PluginRegistrar.html\">PluginRegistrar</a>.Categories to \n\
set the categories for all plug-in items defined in a plug-in or use <a href=\"#!/url=./si_om/PluginItem.html\">PluginItem</a>.Categories \n\
to set the categories of a specific plug-in item. No other interfaces support the \'set\' component of this\n\
property.\n\
<br /><br />\n\
Note: For the deprecated (v1.0) style of creating commands, you can only set the categories by specifying\n\
one of the <a href=\"#!/url=./si_om/siCommandCategory.html\">siCommandCategory</a> enum values in the Category parameter of the \n\
<a href=\"#!/url=./si_om/XSIApplication.CreateCommand.html\">XSIApplication.CreateCommand</a> method.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Object SIObject.get_Categories();\n\
// set accessor\n\
SIObject.set_Categories( String pArrayVal );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\'	This example shows how to get the categories of a SPDL object\n\
\'\n\
set cone = ActiveSceneRoot.AddPrimitive( \"cone\" )\n\
cat = cone.Categories\n\
for i=LBound( cat, 1 ) to UBound( cat, 1 )\n\
	LogMessage \"category: \" &amp; cat(i)\n\
next\n\
\'the example above will output the following:\n\
\'INFO: category: General\n\
\'INFO: category: Primitive\n\
\'INFO: category: Modeling</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\'	This example shows how to set the categories of a plug-in and specific plug-in items\n\
\'\n\
Function XSILoadPlugin( in_reg )\n\
	\' register plugin information\n\
	in_reg.Author = \"Softimage Co.\" \n\
	in_reg.Name = \"Mesh Filter plugin\"\n\
	in_reg.URL = \"http://www.softimage.com\"\n\
	in_reg.Email = \"webmaster@softimage.com\"\n\
	in_reg.Categories = \"Mesh component filter\"\n\
	\' set the version number of this plugin\n\
	in_reg.Major = 1\n\
	in_reg.Minor = 0 \n\
	\' register filter plugin items\n\
	set item = in_reg.RegisterFilter( \"Border Edge\", siFilterSubComponentEdge )\n\
	item.Categories = \"Mesh,Edge\"\n\
	set item = in_reg.RegisterFilter( \"Triangle\", siFilterSubComponentPolygon )\n\
	item.Categories = \"Mesh\"\n\
	set item = in_reg.RegisterFilter( \"Quad\", siFilterSubComponentPolygon )\n\
	item.Categories = \"Mesh\"\n\
	set item = in_reg.RegisterFilter( \"N-gon\", siFilterSubComponentPolygon )\n\
	item.Categories = \"Mesh\"\n\
	set item = in_reg.RegisterFilter( \"Border Point\", siFilterSubComponentPoint )\n\
	item.Categories = \"Point\"\n\
	set item = in_reg.RegisterFilter( \"Polygon Island\", siFilterSubComponentPolygon )\n\
	item.Categories = \"Mesh,Polygon\"\n\
	in_reg.RegisterFilter \"Local Material\", siFilterProperty\n\
	XSILoadPlugin = true\n\
end Function</pre></td></tr>\n\
</table>\n\
</div><h4>3. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example shows how to get the plug-in items categories\n\
*/\n\
var items = Application.Plugins(\"Mesh Filter plugin\").Items;\n\
for (var i=0; i&lt;items.Count; i++) \n\
{\n\
	LogMessage( items(i).Name + \" categories: \" );\n\
	var vba = new VBArray(items(i).Categories);\n\
	var	categories = vba.toArray();\n\
	for (var j=0; j&lt;categories.length; j++) \n\
	{\n\
		LogMessage( categories[j] );		\n\
	} \n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";