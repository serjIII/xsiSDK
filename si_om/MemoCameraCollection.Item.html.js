var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MemoCameraCollection.Item</title>\n\
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
            <h1>MemoCameraCollection.Item</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/MemoCameraCollection.html\">MemoCameraCollection</a>.Item <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>Sets or returns a member of the collection by index or key. If the collection is empty, this property returns \n\
\"Nothing\", which you can use to trap errors. \n\
<br /><br />\n\
Note: This property is only operator-compliant if the property used to get this collection is also operator-compliant.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
MemoCamera MemoCameraCollection.get_Item( Object idx );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">key		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a> or <a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 An expression that specifies the position or the name of a member of the collection. <br /><br />Note: To identify the collection item by name, use the <a href=\"#!/url=./si_om/SIObject.Name.html\">SIObject.Name</a> value as the key, unless you are working with the <a href=\"#!/url=./si_om/ParameterCollection.html\">ParameterCollection</a>. With <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a>s you can use the <a href=\"#!/url=./si_om/Parameter.ScriptName.html\">Parameter.ScriptName</a> value. For example, oConstraints.Item(\"Direction Cns\") will work, but oConstraints.Item(\"dircns\") will not.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' Set up the example using a mesh grid, cube, cone, and a nurbs cube:\n\
set oRoot = activesceneroot\n\
oRoot.addgeometry \"grid\", \"meshsurface\"\n\
oRoot.addgeometry \"cube\", \"meshsurface\"\n\
oRoot.addgeometry \"cone\", \"meshsurface\"\n\
oRoot.addgeometry \"cube\", \"nurbssurface\"\n\
set oGeoms = oRoot.findchildren( ,,siGeometryFamily)\n\
logmessage \"The collection of geometry from the root is a \" &amp; typename( oGeoms ) \n\
logmessage \"There are \" &amp; oGeoms.count &amp; \" geometry objects under the root.\" \n\
logmessage \"\"\n\
\' Use error trapping ( if you get an empty collection, you will \n\
\' see this error message: \'ERROR : \"Object required: \'oCube1\'\" )\n\
if typename( oGeoms ) = \"Nothing\" then\n\
	logmessage \"Collection is empty\"\n\
else \n\
	logmessage \"Collection has \" &amp; oGeoms.count &amp; \" member(s).\"\n\
	for i = 0 to oGeoms.count - 1\n\
		set oGeomItem = oGeoms.item(i)\n\
		logmessage oGeomItem.name &amp; \" is a \" &amp; oGeomItem.type &amp; \" \" &amp; typename( oGeomItem )\n\
		set oGeomItem = Nothing\n\
	next\n\
end if\n\
\' Output of above script is:\n\
\'INFO : \"The collection of geometry from the root is a X3DObjectCollection\"\n\
\'INFO : \"There are 4 geometry objects under the root.\"\n\
\'INFO : \"\"\n\
\'INFO : \"Collection has 4 member(s).\"\n\
\'INFO : \"grid is a polymsh X3DObject\"\n\
\'INFO : \"cube is a polymsh X3DObject\"\n\
\'INFO : \"cone is a polymsh X3DObject\"\n\
\'INFO : \"cube1 is a surfmsh X3DObject\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'VBScript example\n\
set oRoot = Application.ActiveProject.ActiveScene.Root\n\
set oGrid = oRoot.AddGeometry(\"Grid\",\"MeshSurface\")\n\
set oCluster = oGrid.ActivePrimitive.Geometry.AddCluster(siPolygonCluster, \"PolygonClusterOnGrid\", array(59,60,61))\n\
for i = 0 to (oCluster.Elements.Count - 1)\n\
	LogMessage \"Element(\" &amp; i &amp; \") = \" &amp; oCluster.Elements(i)\n\
next</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";