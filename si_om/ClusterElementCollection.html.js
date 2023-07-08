var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ClusterElementCollection</title>\n\
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
            <h1>ClusterElementCollection</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ClusterElementCollection</h2>\n\
\n\
<p>Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1CClusterElementArray.html\">CClusterElementArray</a></p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> A collection of cluster elements in a <a href=\"#!/url=./si_om/Cluster.html\">Cluster</a> object\n\
or <a href=\"#!/url=./si_om/ClusterProperty.html\">ClusterProperty</a> object.<br /><br />\n\
The purpose of the data stored in this object depends whether it is on a Cluster or\n\
a ClusterProperty.<br /><br />\n\
The ClusterElementCollection returned by <a href=\"#!/url=./si_om/Cluster.Elements.html\">Cluster.Elements</a> (and \n\
<a href=\"#!/url=./si_om/Envelope.Elements.html\">Envelope.Elements</a>) provides the mapping between an index of a \n\
component in a cluster with the index of the component on the <a href=\"#!/url=./si_om/Geometry.html\">Geometry</a>.\n\
For example index 10 on a polygon Cluster might refer to Polygon 45 on the geometry,\n\
in which case ClusterElementCollection.Item(10) has the value 45. This data is read-only.<br /><br />\n\
When trying to find if a particular geometry component is part of a cluster \n\
it would be possible to search through this array.  However a more convenient and\n\
efficient method is to use <a href=\"#!/url=./si_om/Cluster.FindIndex.html\">Cluster.FindIndex</a>. <br /><br />\n\
On the other hand, the ClusterElementCollection returned by \n\
<a href=\"#!/url=./si_om/ClusterProperty.Elements.html\">ClusterProperty.Elements</a> (and <a href=\"#!/url=./si_om/Envelope.Weights.html\">Envelope.Weights</a>) \n\
provides read/write access to the actual data of the ClusterProperty.  For example in \n\
the case of a Vertex Color property this provides access to the RGB values stored for \n\
each component.  In this case the first dimension has size 3, corresponding to the RGB \n\
values and the second dimension corresponds to the index of the component.  The values \n\
are always represented as <a href=\"#!/url=./files/Double.htm\">Double</a>s.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ClusterElementCollection.FindIndex.html\">FindIndex</a>		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ClusterElementCollection.Array.html\">Array</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ClusterElementCollection.Count.html\">Count</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ClusterElementCollection.ItemsByIndex.html\">ItemsByIndex</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example demonstrates how to read and write the values on\n\
\' a weight map, using the ClusterElementCollection object.\n\
\' It also demonstrates how the indices on the cluster property\n\
\' correspond to the indices of the cluster, but that these indices do\n\
\' not directly correspond to the indices on the geometry.\n\
NewScene ,false\n\
set oSphere = ActiveSceneRoot.AddGeometry(\"Sphere\",\"NurbsSurface\")\n\
\' Create a weight map on a cluster that includes only a subset of the points\n\
set oCluster = oSphere.ActivePrimitive.Geometry.AddCluster( _\n\
	siVertexCluster, \"MyFrontPoints\", Array( 18,19,20,25,26,27) ) \n\
CreateWeightMap , oCluster.FullName, \"MyWeightMap\"\n\
set oWM = oCluster.LocalProperties( \"MyWeightMap\" )\n\
\' Use the ClusterElementCollection.Array to access all the weights in a \n\
\' single 2-dimensional array\n\
ElArray = oWM.Elements.Array\n\
\' Set the weight on second item in the cluster, (which is point 19), to 100\n\
ElArray(0,1) = 100\n\
\' Set the weight on point 25 to 99\n\
ElArray(0,3) = 99\n\
\' Copy our altered array of values back onto the weight map\n\
oWM.Elements.Array = ElArray\n\
\' Use ClusterElementCollection.Item to set an individual weight on the \n\
\' Weight Map.  Notice how it is still using an array\n\
\'Create a 1 Dimensional array with 1 element	\n\
dim myWeight(0)\n\
myWeight(0) = 10\n\
\'Assign the value	\n\
oWM.Elements.Item( 2 ) = myWeight\n\
\'Print out the contents	\n\
set oCluster = oWM.Parent	\n\
for i = 0 to oWM.Elements.Count - 1	\n\
	indexOnGeometry = oCluster.Elements.Item(i)	\n\
	logmessage \"Weight at \" &amp; i &amp; \" (pnt\" &amp; indexOnGeometry  &amp; _\n\
		\") is \" &amp; oWM.Elements.Item(i)(0)\n\
next\n\
\'Output of running this script is:	\n\
\'INFO : \"Weight at 0 (pnt18) is 1\"\n\
\'INFO : \"Weight at 1 (pnt19) is 100\"\n\
\'INFO : \"Weight at 2 (pnt20) is 10\"\n\
\'INFO : \"Weight at 3 (pnt25) is 99\"\n\
\'INFO : \"Weight at 4 (pnt26) is 1\"\n\
\'INFO : \"Weight at 5 (pnt27) is 1\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Cluster.Elements.html\">Cluster.Elements</a> <a href=\"#!/url=./si_om/ClusterProperty.Elements.html\">ClusterProperty.Elements</a> <a href=\"#!/url=./si_om/Envelope.Weights.html\">Envelope.Weights</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";