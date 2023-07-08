var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Cluster.IsAlwaysComplete</title>\n\
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
            <h1>Cluster.IsAlwaysComplete</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Cluster.html\">Cluster</a>.IsAlwaysComplete <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns true if the cluster is maintained as always complete. An always-complete cluster always covers all\n\
the components of the <a href=\"#!/url=./si_om/Geometry.html\">Geometry</a>, even when new components are added by a modeling operation;\n\
however, notice that a cluster which covers all components of a geometry is not necessarily always-complete.\n\
See <a href=\"#!/url=./si_om/Geometry.AddCluster.html\">Geometry.AddCluster</a> in for details on how to create a cluster that is always-complete.<br /><br />\n\
Notice that some <a href=\"#!/url=./si_om/ClusterProperty.html\">ClusterProperty</a> types can only be added to clusters that are always complete. \n\
These types are vertex color, uv and symmetry map properties.<br /><br />\n\
Note: It is not possible to remove elements from an always-complete cluster.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Boolean Cluster.IsAlwaysComplete();</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oBoolean = Cluster.IsAlwaysComplete();</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./files/Boolean.htm\">Boolean</a></p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">NewScene(null);\n\
// Create a 1X1 grid. Such geometry only have 4 sampled points: 0,1,2,3.\n\
oGrid = CreatePrim(\"Grid\", \"MeshSurface\", null, null);\n\
SetValue(\"grid.polymsh.geom.subdivu\", 1, null);\n\
SetValue(\"grid.polymsh.geom.subdivv\", 1, null);\n\
// Add a sampled point cluster covering all sampled points. By passing an\n\
// explicit array, it will create a cluster which is not always complete.\n\
oCluster = oGrid.ActivePrimitive.Geometry.AddCluster( siSampledPointCluster,\"NonCompleteCluster\",Array(0,1,2,3));\n\
logmessage(\"Is cluster \" + oCluster + \" complete? \" + (oCluster.IsAlwaysComplete() ? \"yes\" : \"no\"));\n\
// Add a sampled point cluster covering all sampled points. By passing no \n\
// explicit array, it will create a cluster which is always complete.\n\
oCompleteCluster = oGrid.ActivePrimitive.Geometry.AddCluster( siSampledPointCluster,\"CompleteCluster\" );\n\
logmessage(\"Is cluster \" + oCompleteCluster + \" complete? \" + (oCompleteCluster.IsAlwaysComplete() ? \"yes\" : \"no\"));\n\
try\n\
{\n\
	oProperty = oCluster.AddProperty(\"Texture Projection\", false, \"UV Property\");\n\
}\n\
catch( e )\n\
{\n\
	logmessage(\"Error; can\'t add a UV cluster property on cluster\" + oCluster);\n\
}\n\
oProperty = oCompleteCluster.AddProperty(\"Texture Projection\", false, \"UV Property\");\n\
logmessage(\"UV cluster property \" + oProperty + \" was added to complete cluster \" + oCompleteCluster);\n\
// The output of this script is:\n\
//\n\
//INFO : Is cluster grid.polymsh.cls.NonCompleteCluster complete? no\n\
//INFO : Is cluster grid.polymsh.cls.CompleteCluster complete? yes\n\
//ERROR : 2000 - The cluster property could not cannot be added. This type of cluster property requires the parent cluster to be always complete. See \"AddProperty\" method reference for more information about this.\n\
//INFO : Error; can\'t add a UV cluster property on clustergrid.polymsh.cls.NonCompleteCluster\n\
//INFO : UV cluster property grid.polymsh.cls.CompleteCluster.UV_Property was added to complete cluster grid.polymsh.cls.CompleteCluster</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Geometry.AddCluster.html\">Geometry.AddCluster</a> <a href=\"#!/url=./si_om/SceneItem.AddProperty.html\">SceneItem.AddProperty</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";