var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ClusterProperty.Elements</title>\n\
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
            <h1>ClusterProperty.Elements</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/ClusterProperty.html\">ClusterProperty</a>.Elements <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>Returns a <a href=\"#!/url=./si_om/ClusterElementCollection.html\">ClusterElementCollection</a> containing cluster property elements.</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
ClusterElementCollection ClusterProperty.get_Elements();\n\
// set accessor\n\
ClusterProperty.set_Elements( Object pVal );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example demonstrates how to access a vertex color cluster property\n\
\'\n\
set oRoot = Application.ActiveSceneRoot\n\
set oObj = oRoot.AddGeometry(\"Cube\", \"MeshSurface\")\n\
CreateVertexColorSupport, , oObj\n\
set oGeom = oObj.ActivePrimitive.Geometry\n\
set oSamplePointClusters = oGeom.Clusters.Filter(\"sample\")\n\
\' Find vertexcolor for list of sample points\n\
set oVertexColor = Nothing\n\
for each oSamplePointCluster in oSamplePointClusters \n\
	set oVertexColor = oSamplePointCluster.Properties.Find(\"vertexcolor\")\n\
	if TypeName(oVertexColor) &lt;&gt; \"Nothing\" then\n\
		exit for\n\
	end if\n\
next\n\
aClusterToGeometryMapping = oSamplePointCluster.Elements.Array\n\
aRGBA = oVertexColor.Elements.Array\n\
\' Print out the first 10 elements of the ClusterProperty\n\
\' (to go though the whole array use \"0 to ubound(aRGBA,2)\" )\n\
for iIndex = 0 to 9 \n\
	Application.LogMessage \"Sample [\" &amp;_\n\
		aClusterToGeometryMapping(iIndex) &amp;_\n\
		\"] has RGBA(\" &amp; _\n\
		round( aRGBA(0,iIndex), 2) &amp; \",\" &amp; _\n\
		round( aRGBA(1,iIndex), 2) &amp; \",\" &amp; _\n\
		round( aRGBA(2,iIndex), 2) &amp; \",\" &amp; _\n\
		round( aRGBA(3,iIndex), 2) &amp; \")\"\n\
next\n\
\' Results of this script:\n\
\'INFO : \"Sample [0] has RGBA(0.75,0.75,0.75,1)\"\n\
\'INFO : \"Sample [1] has RGBA(0.75,0.75,0.75,1)\"\n\
\'INFO : \"Sample [2] has RGBA(0.75,0.75,0.75,1)\"\n\
\'INFO : \"Sample [3] has RGBA(0.75,0.75,0.75,1)\"\n\
\'INFO : \"Sample [4] has RGBA(0.75,0.75,0.75,1)\"\n\
\'INFO : \"Sample [5] has RGBA(0.75,0.75,0.75,1)\"\n\
\'INFO : \"Sample [6] has RGBA(0.75,0.75,0.75,1)\"\n\
\'INFO : \"Sample [7] has RGBA(0.75,0.75,0.75,1)\"\n\
\'INFO : \"Sample [8] has RGBA(0.75,0.75,0.75,1)\"\n\
\'INFO : \"Sample [9] has RGBA(0.75,0.75,0.75,1)\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'vbscript example that randomizes the length of hairs on a sphere\n\
\'by modifying a weight map cluster property\n\
option explicit\n\
\'Step 1 - Create a little scene\n\
newscene ,false\n\
dim oObj, oObjVertexCluster, oWM, oWMOnHair, oHair\n\
set oObj = ActiveSceneRoot.AddGeometry(\"Grid\",\"MeshSurface\")\n\
SetValue oObj &amp; \".polymsh.geom.subdivu\", 4\n\
SetValue oObj &amp; \".polymsh.geom.subdivv\", 1\n\
ApplyHairOp oObj.Name\n\
set oHair = oObj.Children( \"Hair\" )\n\
\'Step 2 - Create the weight map and connect it to the hair\n\
set oObjVertexCluster= oObj.ActivePrimitive.Geometry.AddCluster( siVertexCluster, \"MyCluster\" ) \n\
\'Create the weightmap on the sphere\n\
CreateWeightMap , oObjVertexCluster.FullName, \"MyWeightMap\"\n\
set oWM = oObjVertexCluster.Properties( \"MyWeightMap\" )\n\
PropertyTransfer oHair, oWM.FullName\n\
\'Get pointer to the weight map that has been transfered\n\
set oWMOnHair = oHair.ActivePrimitive.Geometry.Clusters( \"MyCluster\" ).Properties( \"MyWeightMap\" )\n\
\'Connect the weightmap to the Cut parameter.  The tricky thing is specifying the\n\
\'three different objects that will be connected - the original weight map, the cut parameter\n\
\'and transfered weight map on the qhair cluster.  However once the relationship is\n\
\'established we just work with the original weight map\n\
ApplyOp \"MapCompOp\",  oWM.FullName &amp; \";\" &amp; oHair.Name &amp; \".hair.Cut;\" &amp; oWMOnHair\n\
\'Step 3 - set random values in the original weight map\n\
dim oWMElements\n\
set oWMElements = oWM.Elements  \n\
dim Cnt\n\
Cnt = oWMElements.count\n\
\'Get an array of all the weights (it has dimensions 1 x NumberElements)\n\
dim ElArray\n\
ElArray = oWMElements.Array\n\
\'We can adjust the values in this array as we see fit			\n\
Randomize\n\
dim i\n\
for i = 0 to Cnt - 1\n\
	\'Pick a number between 0 and 1\n\
	ElArray( 0, i ) = rnd\n\
	\'Tip: To Pick a random number between 0.2 and 1.0\n\
	\'the forumula would be 0.2 + (0.8 * rnd ) instead\n\
next\n\
\'Set the values back\n\
oWMElements.Array = ElArray\n\
\'If you render the hair now you will see that the lengths\n\
\'have been randomized</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";