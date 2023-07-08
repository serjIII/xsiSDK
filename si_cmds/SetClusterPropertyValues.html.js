var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SetClusterPropertyValues</title>\n\
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
            <h1>SetClusterPropertyValues</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SetClusterPropertyValues</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v9.0 (2011)</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Sets the values of a cluster property.<br /><br />\n\
The offsets array designates the cluster elements offsets to modify. Specifying an empty value or\n\
an empty array will modify all cluster elements offsets with the specified values.<br /><br />\n\
The values array designated the values to set for the specified cluster element offsets. The size of\n\
values array must match one of the following: the size of an element size (e.g. RGBA = 4 values) or the size\n\
of the number of offsets specified multiplicated by the size of an element size (e.g. 2 offsets * RGB = 6 values).\n\
In the first case, the specified values will be set to all the specified cluster element offsets, while in the\n\
case, the specified values will be applied to their corresponding specified cluster element offset.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SetClusterPropertyValues( ClusterProp, Offsets, Values, [Mode], [ClampValues] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">ClusterProp		</td>\n\
		<td><a href=\"#!/url=./si_om/ClusterProperty.html\">ClusterProperty</a>		</td>\n\
		<td>\n\
Cluster property to modify		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Offsets		</td>\n\
		<td><a href=\"#!/url=./si_om/Array.html\">Array</a>		</td>\n\
		<td>\n\
Array of cluster element offsets to modify		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Values		</td>\n\
		<td><a href=\"#!/url=./si_om/Array.html\">Array</a>		</td>\n\
		<td>\n\
Array of values to set for the specified cluster element offsets		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Mode		</td>\n\
		<td><a href=\"#!/url=./si_om/siSetValueMode.html\">siSetValueMode</a>		</td>\n\
		<td>\n\
Specifies the mathematical mode when setting a new value to a current value.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siSetValueModeAbsolute			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ClampValues		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
\n\
		True to clamp values<br /><br />\n\
		Currently, only meaningful when setting values on WeightMap properties, which have a minimum and a maximum parameters.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
false			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example shows how to set values on cluster elements of a WeightMap\n\
\'\n\
\' Create a WeightMap on a sphere\n\
NewScene , False\n\
CreatePrim \"Sphere\", \"MeshSurface\"\n\
dim oWMapColl, oWMap, oWMapArray\n\
set oWMapColl = CreateWeightMap\n\
set oWMap = oWMapColl.Item(0)\n\
SetClusterPropertyValues oWMap, Array(0, 1), Array(0.25, 0.5)\n\
oWMapArray = oWMap.Elements.Array\n\
LogMessage( \"Setting different values on the first and second cluster elements\" )\n\
LogMessage( \"WeightMap value for cluster element 0 : \" &amp; oWMapArray( 0 , 0 ) )\n\
LogMessage( \"WeightMap value for cluster element 1 : \" &amp; oWMapArray( 0 , 1 ) )\n\
SetClusterPropertyValues oWMap, Array(10, 20, 30), 0.75\n\
oWMapArray = oWMap.Elements.Array\n\
LogMessage( \"Setting the same value on many cluster elements\" )\n\
LogMessage( \"WeightMap value for cluster element 10 : \" &amp; oWMapArray( 0 , 10 ) )\n\
LogMessage( \"WeightMap value for cluster element 20 : \" &amp; oWMapArray( 0 , 20 ) )\n\
LogMessage( \"WeightMap value for cluster element 30 : \" &amp; oWMapArray( 0 , 30 ) )\n\
SetClusterPropertyValues oWMap, , Array(0.25), siSetValueModeAdditive\n\
oWMapArray = oWMap.Elements.Array\n\
LogMessage( \"Adds the same value on all cluster elements\" )\n\
LogMessage( \"WeightMap value for cluster element 0  : \" &amp; oWMapArray( 0 , 0 ) )\n\
LogMessage( \"WeightMap value for cluster element 1  : \" &amp; oWMapArray( 0 , 1 ) )\n\
LogMessage( \"WeightMap value for cluster element 10 : \" &amp; oWMapArray( 0 , 10 ) )\n\
LogMessage( \"WeightMap value for cluster element 20 : \" &amp; oWMapArray( 0 , 20 ) )\n\
LogMessage( \"WeightMap value for cluster element 30 : \" &amp; oWMapArray( 0 , 30 ) )\n\
SetClusterPropertyValues oWMap, 10, -2, siSetValueModeAbsolute, True\n\
SetClusterPropertyValues oWMap, 20, -2, siSetValueModeAbsolute, False\n\
oWMapArray = oWMap.Elements.Array\n\
LogMessage( \"Playing with the ClampValues argument\" )\n\
LogMessage( \"WeightMap value for cluster element 0  : \" &amp; oWMapArray( 0 , 0 ) )\n\
LogMessage( \"WeightMap value for cluster element 1  : \" &amp; oWMapArray( 0 , 1 ) )\n\
LogMessage( \"WeightMap value for cluster element 10 : \" &amp; oWMapArray( 0 , 10 ) )\n\
LogMessage( \"WeightMap value for cluster element 20 : \" &amp; oWMapArray( 0 , 20 ) )\n\
LogMessage( \"WeightMap value for cluster element 30 : \" &amp; oWMapArray( 0 , 30 ) )\n\
\' Output:\n\
\' INFO : Setting different values on the first and second cluster elements\n\
\' INFO : WeightMap value for cluster element 0 : 0.25\n\
\' INFO : WeightMap value for cluster element 1 : 0.5\n\
\' INFO : Setting the same value on many cluster elements\n\
\' INFO : WeightMap value for cluster element 10 : 0.75\n\
\' INFO : WeightMap value for cluster element 20 : 0.75\n\
\' INFO : WeightMap value for cluster element 30 : 0.75\n\
\' INFO : Adds the same value on all cluster elements\n\
\' INFO : WeightMap value for cluster element 0  : 0.5\n\
\' INFO : WeightMap value for cluster element 1  : 0.75\n\
\' INFO : WeightMap value for cluster element 10 : 1\n\
\' INFO : WeightMap value for cluster element 20 : 1\n\
\' INFO : WeightMap value for cluster element 30 : 1\n\
\' INFO : Playing with the ClampValues argument\n\
\' INFO : WeightMap value for cluster element 0  : 0.5\n\
\' INFO : WeightMap value for cluster element 1  : 0.75\n\
\' INFO : WeightMap value for cluster element 10 : 0\n\
\' INFO : WeightMap value for cluster element 20 : -2\n\
\' INFO : WeightMap value for cluster element 30 : 1</pre></td></tr>\n\
</table>\n\
</div><h4>2. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
# This example shows how to set values on cluster elements of a CAV\n\
#\n\
from win32com.client import constants as c\n\
# Create a CAV on a sphere\n\
app = Application\n\
app.NewScene(\"\", False)\n\
app.CreatePrim(\"Sphere\", \"MeshSurface\", \"\", \"\")\n\
oCAVColl = app.CreateVertexColorSupport(\"\", \"\", \"\", \"\")\n\
oCAV = app.Dictionary.GetObject(\"sphere.polymsh.cls.UV_Cluster_AUTO.Vertex_Color\")\n\
app.ChangeVertexColorDatatype(oCAV, 1)\n\
app.SetClusterPropertyValues(oCAV, [0, 1], [0.25, 0.5, 0.75, 1, 1, 0.75, 0.5, 0.25])\n\
oCAVArray = oCAV.Elements.Array\n\
app.LogMessage( \"Setting different values on the first and second cluster elements\" )\n\
app.LogMessage( \"--------------------------------------\" )\n\
app.LogMessage( \"CAV value for cluster element 0, Red    : \" + str(oCAVArray[ 0 ][ 0 ]) )\n\
app.LogMessage( \"CAV value for cluster element 0, Green  : \" + str(oCAVArray[ 1 ][ 0 ]) )\n\
app.LogMessage( \"CAV value for cluster element 0, Blue   : \" + str(oCAVArray[ 2 ][ 0 ]) )\n\
app.LogMessage( \"CAV value for cluster element 0, Alpha  : \" + str(oCAVArray[ 3 ][ 0 ]) )\n\
app.LogMessage( \"--------------------------------------\" )\n\
app.LogMessage( \"CAV value for cluster element 1, Red    : \" + str(oCAVArray[ 0 ][ 1 ]) )\n\
app.LogMessage( \"CAV value for cluster element 1, Green  : \" + str(oCAVArray[ 1 ][ 1 ]) )\n\
app.LogMessage( \"CAV value for cluster element 1, Blue   : \" + str(oCAVArray[ 2 ][ 1 ]) )\n\
app.LogMessage( \"CAV value for cluster element 1, Alpha  : \" + str(oCAVArray[ 3 ][ 1 ]) )\n\
app.SetClusterPropertyValues(oCAV, [10, 20, 30], [0.5, 1, 0.25, 0.75])\n\
oCAVArray = oCAV.Elements.Array\n\
app.LogMessage( \"Setting the same value on many cluster elements\" )\n\
app.LogMessage( \"--------------------------------------\" )\n\
app.LogMessage( \"CAV value for cluster element 10, Red   : \" + str(oCAVArray[ 0 ][ 10 ]) )\n\
app.LogMessage( \"CAV value for cluster element 10, Green : \" + str(oCAVArray[ 1 ][ 10 ]) )\n\
app.LogMessage( \"CAV value for cluster element 10, Blue  : \" + str(oCAVArray[ 2 ][ 10 ]) )\n\
app.LogMessage( \"CAV value for cluster element 10, Alpha : \" + str(oCAVArray[ 3 ][ 10 ]) )\n\
app.LogMessage( \"--------------------------------------\" )\n\
app.LogMessage( \"CAV value for cluster element 20, Red   : \" + str(oCAVArray[ 0 ][ 20 ]) )\n\
app.LogMessage( \"CAV value for cluster element 20, Green : \" + str(oCAVArray[ 1 ][ 20 ]) )\n\
app.LogMessage( \"CAV value for cluster element 20, Blue  : \" + str(oCAVArray[ 2 ][ 20 ]) )\n\
app.LogMessage( \"CAV value for cluster element 20, Alpha : \" + str(oCAVArray[ 3 ][ 20 ]) )\n\
app.LogMessage( \"--------------------------------------\" )\n\
app.LogMessage( \"CAV value for cluster element 30, Red   : \" + str(oCAVArray[ 0 ][ 30 ]) )\n\
app.LogMessage( \"CAV value for cluster element 30, Green : \" + str(oCAVArray[ 1 ][ 30 ]) )\n\
app.LogMessage( \"CAV value for cluster element 30, Blue  : \" + str(oCAVArray[ 2 ][ 30 ]) )\n\
app.LogMessage( \"CAV value for cluster element 30, Alpha : \" + str(oCAVArray[ 3 ][ 30 ]) )\n\
app.SetClusterPropertyValues(oCAV, None, [0.75, 0.25, 1, 0.5])\n\
oCAVArray = oCAV.Elements.Array\n\
app.LogMessage( \"Setting the same value on all cluster elements\" )\n\
app.LogMessage( \"--------------------------------------\" )\n\
app.LogMessage( \"CAV value for cluster element 0, Red    : \" + str(oCAVArray[ 0 ][ 0 ]) )\n\
app.LogMessage( \"CAV value for cluster element 0, Green  : \" + str(oCAVArray[ 1 ][ 0 ]) )\n\
app.LogMessage( \"CAV value for cluster element 0, Blue   : \" + str(oCAVArray[ 2 ][ 0 ]) )\n\
app.LogMessage( \"CAV value for cluster element 0, Alpha  : \" + str(oCAVArray[ 3 ][ 0 ]) )\n\
app.LogMessage( \"--------------------------------------\" )\n\
app.LogMessage( \"CAV value for cluster element 1, Red    : \" + str(oCAVArray[ 0 ][ 1 ]) )\n\
app.LogMessage( \"CAV value for cluster element 1, Green  : \" + str(oCAVArray[ 1 ][ 1 ]) )\n\
app.LogMessage( \"CAV value for cluster element 1, Blue   : \" + str(oCAVArray[ 2 ][ 1 ]) )\n\
app.LogMessage( \"CAV value for cluster element 1, Alpha  : \" + str(oCAVArray[ 3 ][ 1 ]) )\n\
app.LogMessage( \"--------------------------------------\" )\n\
app.LogMessage( \"CAV value for cluster element 10, Red   : \" + str(oCAVArray[ 0 ][ 10 ]) )\n\
app.LogMessage( \"CAV value for cluster element 10, Green : \" + str(oCAVArray[ 1 ][ 10 ]) )\n\
app.LogMessage( \"CAV value for cluster element 10, Blue  : \" + str(oCAVArray[ 2 ][ 10 ]) )\n\
app.LogMessage( \"CAV value for cluster element 10, Alpha : \" + str(oCAVArray[ 3 ][ 10 ]) )\n\
app.LogMessage( \"--------------------------------------\" )\n\
app.LogMessage( \"CAV value for cluster element 20, Red   : \" + str(oCAVArray[ 0 ][ 20 ]) )\n\
app.LogMessage( \"CAV value for cluster element 20, Green : \" + str(oCAVArray[ 1 ][ 20 ]) )\n\
app.LogMessage( \"CAV value for cluster element 20, Blue  : \" + str(oCAVArray[ 2 ][ 20 ]) )\n\
app.LogMessage( \"CAV value for cluster element 20, Alpha : \" + str(oCAVArray[ 3 ][ 20 ]) )\n\
app.LogMessage( \"--------------------------------------\" )\n\
app.LogMessage( \"CAV value for cluster element 30, Red   : \" + str(oCAVArray[ 0 ][ 30 ]) )\n\
app.LogMessage( \"CAV value for cluster element 30, Green : \" + str(oCAVArray[ 1 ][ 30 ]) )\n\
app.LogMessage( \"CAV value for cluster element 30, Blue  : \" + str(oCAVArray[ 2 ][ 30 ]) )\n\
app.LogMessage( \"CAV value for cluster element 30, Alpha : \" + str(oCAVArray[ 3 ][ 30 ]) )\n\
app.SetClusterPropertyValues(oCAV, [10, 20, 30], [-10, None, None, None], c.siSetValueModeAddPercentage)\n\
oCAVArray = oCAV.Elements.Array\n\
app.LogMessage( \"Removing a 10% of the Red channel on many cluster elements\" )\n\
app.LogMessage( \"--------------------------------------\" )\n\
app.LogMessage( \"CAV value for cluster element 10, Red   : \" + str(oCAVArray[ 0 ][ 10 ]) )\n\
app.LogMessage( \"CAV value for cluster element 10, Green : \" + str(oCAVArray[ 1 ][ 10 ]) )\n\
app.LogMessage( \"CAV value for cluster element 10, Blue  : \" + str(oCAVArray[ 2 ][ 10 ]) )\n\
app.LogMessage( \"CAV value for cluster element 10, Alpha : \" + str(oCAVArray[ 3 ][ 10 ]) )\n\
app.LogMessage( \"--------------------------------------\" )\n\
app.LogMessage( \"CAV value for cluster element 20, Red   : \" + str(oCAVArray[ 0 ][ 20 ]) )\n\
app.LogMessage( \"CAV value for cluster element 20, Green : \" + str(oCAVArray[ 1 ][ 20 ]) )\n\
app.LogMessage( \"CAV value for cluster element 20, Blue  : \" + str(oCAVArray[ 2 ][ 20 ]) )\n\
app.LogMessage( \"CAV value for cluster element 20, Alpha : \" + str(oCAVArray[ 3 ][ 20 ]) )\n\
app.LogMessage( \"--------------------------------------\" )\n\
app.LogMessage( \"CAV value for cluster element 30, Red   : \" + str(oCAVArray[ 0 ][ 30 ]) )\n\
app.LogMessage( \"CAV value for cluster element 30, Green : \" + str(oCAVArray[ 1 ][ 30 ]) )\n\
app.LogMessage( \"CAV value for cluster element 30, Blue  : \" + str(oCAVArray[ 2 ][ 30 ]) )\n\
app.LogMessage( \"CAV value for cluster element 30, Alpha : \" + str(oCAVArray[ 3 ][ 30 ]) )\n\
# Output:\n\
# INFO : Setting different values on the first and second cluster elements\n\
# INFO : --------------------------------------\n\
# INFO : CAV value for cluster element 0, Red    : 0.25\n\
# INFO : CAV value for cluster element 0, Green  : 0.5\n\
# INFO : CAV value for cluster element 0, Blue   : 0.75\n\
# INFO : CAV value for cluster element 0, Alpha  : 1.0\n\
# INFO : --------------------------------------\n\
# INFO : CAV value for cluster element 1, Red    : 1.0\n\
# INFO : CAV value for cluster element 1, Green  : 0.75\n\
# INFO : CAV value for cluster element 1, Blue   : 0.5\n\
# INFO : CAV value for cluster element 1, Alpha  : 0.25\n\
# INFO : Setting the same value on many cluster elements\n\
# INFO : --------------------------------------\n\
# INFO : CAV value for cluster element 10, Red   : 0.5\n\
# INFO : CAV value for cluster element 10, Green : 1.0\n\
# INFO : CAV value for cluster element 10, Blue  : 0.25\n\
# INFO : CAV value for cluster element 10, Alpha : 0.75\n\
# INFO : --------------------------------------\n\
# INFO : CAV value for cluster element 20, Red   : 0.5\n\
# INFO : CAV value for cluster element 20, Green : 1.0\n\
# INFO : CAV value for cluster element 20, Blue  : 0.25\n\
# INFO : CAV value for cluster element 20, Alpha : 0.75\n\
# INFO : --------------------------------------\n\
# INFO : CAV value for cluster element 30, Red   : 0.5\n\
# INFO : CAV value for cluster element 30, Green : 1.0\n\
# INFO : CAV value for cluster element 30, Blue  : 0.25\n\
# INFO : CAV value for cluster element 30, Alpha : 0.75\n\
# INFO : Setting the same value on all cluster elements\n\
# INFO : --------------------------------------\n\
# INFO : CAV value for cluster element 0, Red    : 0.75\n\
# INFO : CAV value for cluster element 0, Green  : 0.25\n\
# INFO : CAV value for cluster element 0, Blue   : 1.0\n\
# INFO : CAV value for cluster element 0, Alpha  : 0.5\n\
# INFO : --------------------------------------\n\
# INFO : CAV value for cluster element 1, Red    : 0.75\n\
# INFO : CAV value for cluster element 1, Green  : 0.25\n\
# INFO : CAV value for cluster element 1, Blue   : 1.0\n\
# INFO : CAV value for cluster element 1, Alpha  : 0.5\n\
# INFO : --------------------------------------\n\
# INFO : CAV value for cluster element 10, Red   : 0.75\n\
# INFO : CAV value for cluster element 10, Green : 0.25\n\
# INFO : CAV value for cluster element 10, Blue  : 1.0\n\
# INFO : CAV value for cluster element 10, Alpha : 0.5\n\
# INFO : --------------------------------------\n\
# INFO : CAV value for cluster element 20, Red   : 0.75\n\
# INFO : CAV value for cluster element 20, Green : 0.25\n\
# INFO : CAV value for cluster element 20, Blue  : 1.0\n\
# INFO : CAV value for cluster element 20, Alpha : 0.5\n\
# INFO : --------------------------------------\n\
# INFO : CAV value for cluster element 30, Red   : 0.75\n\
# INFO : CAV value for cluster element 30, Green : 0.25\n\
# INFO : CAV value for cluster element 30, Blue  : 1.0\n\
# INFO : CAV value for cluster element 30, Alpha : 0.5\n\
# INFO : Removing a 10% of the Red channel on many cluster elements\n\
# INFO : --------------------------------------\n\
# INFO : CAV value for cluster element 10, Red   : 0.675\n\
# INFO : CAV value for cluster element 10, Green : 0.25\n\
# INFO : CAV value for cluster element 10, Blue  : 1.0\n\
# INFO : CAV value for cluster element 10, Alpha : 0.5\n\
# INFO : --------------------------------------\n\
# INFO : CAV value for cluster element 20, Red   : 0.675\n\
# INFO : CAV value for cluster element 20, Green : 0.25\n\
# INFO : CAV value for cluster element 20, Blue  : 1.0\n\
# INFO : CAV value for cluster element 20, Alpha : 0.5\n\
# INFO : --------------------------------------\n\
# INFO : CAV value for cluster element 30, Red   : 0.675\n\
# INFO : CAV value for cluster element 30, Green : 0.25\n\
# INFO : CAV value for cluster element 30, Blue  : 1.0\n\
# INFO : CAV value for cluster element 30, Alpha : 0.5</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";