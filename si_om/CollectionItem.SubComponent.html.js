var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>CollectionItem.SubComponent</title>\n\
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
            <h1>CollectionItem.SubComponent</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/CollectionItem.html\">CollectionItem</a>.SubComponent</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns the <a href=\"#!/url=./si_om/SubComponent.html\">SubComponent</a> object if the CollectionItem is a\n\
subelement container. Otherwise it will return \"nothing\". For example, if \n\
geometry components are selected, then <a href=\"#!/url=./si_om/Selection.Item.html\">Selection.Item</a> returns \n\
a CollectionItem containing those subelements (points, edges, facets, etc.). By\n\
converting the CollectionItem into a SubComponent, you can use the\n\
<a href=\"#!/url=./si_om/SubComponent.ComponentCollection.html\">SubComponent.ComponentCollection</a> property to work with the\n\
specific geometry interfaces (<a href=\"#!/url=./si_om/ControlPoint.html\">ControlPoint</a>, <a href=\"#!/url=./si_om/Vertex.html\">Vertex</a>,\n\
<a href=\"#!/url=./si_om/Edge.html\">Edge</a>, <a href=\"#!/url=./si_om/NurbsCurve.html\">NurbsCurve</a>, etc.).\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
SubComponent rtn = CollectionItem.SubComponent;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\'	This example demonstrates how to determine which edges are selected\n\
\'	in the UI by using the SubComponent object via the Selection\n\
\' \n\
NewScene , false\n\
\' Setup: create a polygon mesh and select some edges on it\n\
set disc = Application.ActiveSceneRoot.AddGeometry( \"Disc\", \"MeshSurface\" )\n\
Selection.Clear()\n\
Selection.SetAsText( disc.Name &amp; \".edge[113,115,117,119,121]\" )\n\
\' When components are selected, the first member of the Selection\n\
\' is returned as a CollectionItem which can then be converted to a\n\
\' SubComponent object. From there, the ComponentCollection property\n\
\' converts it to the proper collection type (in this case an EdgeCollection)\n\
set selected = Selection(0).SubComponent.ComponentCollection\n\
for each sel in selected\n\
	Application.LogMessage \"edge[\" &amp; sel.Index &amp; \"] is selected.\" \n\
next\n\
\' Expected results:\n\
\'INFO : edge[113] is selected.\n\
\'INFO : edge[115] is selected.\n\
\'INFO : edge[117] is selected.\n\
\'INFO : edge[119] is selected.\n\
\'INFO : edge[121] is selected.</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">set oRoot = Application.ActiveProject.ActiveScene.Root\n\
set oObject = oRoot.AddGeometry(\"Cube\", \"MeshSurface\", \"MyCube\")\n\
set oItem = CreateObject(\"XSI.CollectionItem\")\n\
oItem.Value = oObject.FullName &amp; \".\" &amp; siVertexCluster &amp; \"[*]\"\n\
set oSubComponent = oItem.SubComponent</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Selection.html\">Selection</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";