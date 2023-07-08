var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ClusterElementCollection.ItemsByIndex</title>\n\
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
            <h1>ClusterElementCollection.ItemsByIndex</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/ClusterElementCollection.html\">ClusterElementCollection</a>.ItemsByIndex <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Sets or returns cluster element values by index.<br /><br />\n\
In the case of a <a href=\"#!/url=./si_om/Cluster.html\">Cluster</a>s this provides read-only access to a 1-dimensional \n\
<a href=\"#!/url=./files/Array.htm\">Array</a> of the associated geometry indices (<a href=\"#!/url=./files/Integer.htm\">Integer</a>s) for the \n\
requested cluster indices. The size of this array is the same as the number of requested indices.<br /><br />\n\
In the case of a <a href=\"#!/url=./si_om/ClusterProperty.html\">ClusterProperty</a>, this allows you to get or set a 2-dimensional \n\
<a href=\"#!/url=./files/Array.htm\">Array</a> containing the data on the requested cluster indices (<a href=\"#!/url=./files/Double.htm\">Double</a>s). \n\
The size of the first dimension depends on the ClusterProperty. For example for a weight map there \n\
is only 1 element but for an envelope weight map the size is equal to the number of deformers.  The \n\
size of the second dimension is the same as the number of requested indices.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Object ClusterElementCollection.get_ItemsByIndex( Object vIndices );\n\
// set accessor\n\
ClusterElementCollection.set_ItemsByIndex( Object vIndices, Object pVal );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Indices		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a>		</td>\n\
		<td>\n\
Array of element indicies		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example shows how to use ItemsByIndex on a Cluster\n\
\'\n\
dim oRoot, oGrid, oCluster, aValues, iElement\n\
set oRoot = Application.ActiveProject.ActiveScene.Root\n\
set oGrid = oRoot.AddGeometry(\"Grid\",\"MeshSurface\")\n\
set oCluster = oGrid.ActivePrimitive.Geometry.AddCluster( _\n\
					siPolygonCluster, \"PolygonClusterOnGrid\", _\n\
					array(59,60,61))\n\
\'Ask for items 0,1,2 of the cluster - which corresponds to\n\
\'pnt 59,60,61.  In fact this is the entire cluster.\n\
aValues = oCluster.Elements.ItemsByIndex( Array(0,1,2) )\n\
\'Show the ranges of the returned 1-dimensional array\n\
LogMessage \"lbound(aValues,1) = \" &amp; lbound(aValues,1)\n\
LogMessage \"ubound(aValues,1) = \" &amp; ubound(aValues,1)\n\
\'Print out the geometry indices of the requested cluster\n\
\'elements\n\
for iIndex=lbound(aValues,1) to ubound(aValues,1)\n\
	iElement = aValues(iIndex)\n\
	LogMessage \"element(\" &amp; iIndex &amp; \") = \" &amp; _\n\
			oCluster.type &amp; \"(\" &amp; iElement &amp; \") \"\n\
next\n\
\' Output of above script:\n\
\'INFO : \"lbound(aValues,1) = 0\"\n\
\'INFO : \"ubound(aValues,1) = 2\"\n\
\'INFO : \"element(0) = poly(59) \"\n\
\'INFO : \"element(1) = poly(60) \"\n\
\'INFO : \"element(2) = poly(61) \"</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example demonstrates how to use ClusterElementCollection.ItemsByIndex to read \n\
\' and write values on a VertexColor ClusterProperty object\n\
\'\n\
NewScene ,false\n\
set oSphere = ActiveSceneRoot.AddGeometry(\"Sphere\",\"MeshSurface\")\n\
SelectObj oSphere\n\
\'This command will create a complete sample cluster\n\
\'and a cluster property called MyVertexColor\n\
CreateVertexColorSupport , \"MyVertexColor\"\n\
set oClusters = oSphere.ActivePrimitive.Geometry.Clusters\n\
set oVertexColors = oClusters(0).LocalProperties( \"MyVertexColor\" )\n\
\'Get the RGB values on sample point 2 and 3.\n\
\'This returns a 2-dimensional array, with the RGBA values\n\
\'for the two samples we request.\n\
ElArray = oVertexColors.Elements.ItemsByIndex( Array( 2, 3 ) )\n\
\'Set the G value at Sample 2\n\
ElArray( 1, 0 ) = 0.0\n\
\'Set the B value at Sample 2\n\
ElArray( 2, 0 ) = 0.5\n\
\'Set the R value at Sample 3\n\
ElArray( 0, 1 ) = 0.3\n\
\'Set the A value at Sample 3\n\
ElArray( 3, 1 ) = 0.2\n\
\'Assign our changes back\n\
oVertexColors.Elements.ItemsByIndex( Array( 2, 3 ) ) = ElArray\n\
\'Double check by looking at the entire array\n\
AllRGBAValues = oVertexColors.Elements.Array\n\
logmessage \"G Value at Sample 2: \" &amp; Round( AllRGBAValues( 1, 2 ), 1 )\n\
logmessage \"B Value at Sample 2: \" &amp; Round( AllRGBAValues( 2, 2 ), 1 )\n\
logmessage \"R Value at Sample 3: \" &amp; Round( AllRGBAValues( 0, 3 ), 1 )\n\
logmessage \"A Value at Sample 3: \" &amp; Round( AllRGBAValues( 3, 3 ), 1 )\n\
\'Output of this script:\n\
\'INFO : \"G Value at Sample 2: 0\"\n\
\'INFO : \"B Value at Sample 2: 0.5\"\n\
\'INFO : \"R Value at Sample 2: 0.3\"\n\
\'INFO : \"A Value at Sample 2: 0.2\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";