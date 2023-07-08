var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PolygonFaceCollection.PolygonNodePolygonFaceIndexArray</title>\n\
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
            <h1>PolygonFaceCollection.PolygonNodePolygonFaceIndexArray</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/PolygonFaceCollection.html\">PolygonFaceCollection</a>.PolygonNodePolygonFaceIndexArray <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns a 1-dimensional <a href=\"#!/url=./files/Array.htm\">Array</a> containing the number of \n\
<a href=\"#!/url=./si_om/PolygonNode.html\">PolygonNode</a>s on each <a href=\"#!/url=./si_om/PolygonFace.html\">PolygonFace</a> \n\
followed by each index <a href=\"#!/url=./si_om/PolygonNode.html\">PolygonNode</a> ordered within the \n\
PolygonFaceCollection. For example, if you have a mesh containing 3 PolygonNodes \n\
you might get this array: \'4, 0, 1, 2, 3, 3, 4, 5, 6, 4, 7, 8, 9, 10\'.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Object rtn = PolygonFaceCollection.PolygonNodePolygonFaceIndexArray;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">NewScene , false\n\
\' Create a cube and then slice one of the polygons (to get an irregular # of nodes)\n\
set oObject = Application.ActiveProject.ActiveScene.Root.AddGeometry(\"Cube\",\"MeshSurface\")\n\
ApplyTopoOp \"SlicePolygons\", oObject &amp; \".poly[4]\", siUnspecified, siPersistentOperation\n\
\' Get the facets on the mesh\n\
set oPolygonMesh = oObject.ActivePrimitive.Geometry\n\
set oPolygonFaceCollection = oPolygonMesh.Polygons\n\
\' Get the node number/index array and loop through the array, printing the info\n\
aPolygonNodePolygonFaceIndexArray = oPolygonFaceCollection.PolygonNodePolygonFaceIndexArray\n\
i = 0\n\
for each oPolygonFace in oPolygonFaceCollection\n\
	Application.LogMessage \"There are \" &amp; aPolygonNodePolygonFaceIndexArray(i) &amp; \" PolygonNodes on this PolygonFace \"\n\
	nodecount = aPolygonNodePolygonFaceIndexArray(i)\n\
	i = i + 1\n\
	results = vbTab &amp; \"The indices for those PolygonNodes are :\"\n\
	for j = 0 to nodecount-1\n\
		results = results &amp; \" \" &amp; aPolygonNodePolygonFaceIndexArray(i)\n\
		i = i + 1\n\
	next	\n\
	Application.LogMessage results \n\
next\n\
\' Expected results:\n\
\'INFO : There are 5 PolygonNodes on this PolygonFace \n\
\'INFO : 	The indices for those PolygonNodes are : 0 1 26 2 3\n\
\'INFO : There are 4 PolygonNodes on this PolygonFace \n\
\'INFO : 	The indices for those PolygonNodes are : 4 5 6 7\n\
\'INFO : There are 4 PolygonNodes on this PolygonFace \n\
\'INFO : 	The indices for those PolygonNodes are : 8 9 10 11\n\
\'INFO : There are 4 PolygonNodes on this PolygonFace \n\
\'INFO : 	The indices for those PolygonNodes are : 12 13 14 15\n\
\'INFO : There are 4 PolygonNodes on this PolygonFace \n\
\'INFO : 	The indices for those PolygonNodes are : 16 17 24 27\n\
\'INFO : There are 5 PolygonNodes on this PolygonFace \n\
\'INFO : 	The indices for those PolygonNodes are : 20 21 22 25 23\n\
\'INFO : There are 4 PolygonNodes on this PolygonFace \n\
\'INFO : 	The indices for those PolygonNodes are : 18 19 29 28</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";