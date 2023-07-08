var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>CreateUserDataMap</title>\n\
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
            <h1>CreateUserDataMap</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">CreateUserDataMap</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>Creates a <a href=\"#!/url=./si_om/UserDataMap.html\">UserDataMap</a> cluster property for holding user data.</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = CreateUserDataMap( [InputObj], [PropertyName], [Template] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns a collection of the newly created properties. If no clusters are specified in the InputObjs argument the returned collection will be empty.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">InputObj		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
A cluster or a <a href=\"#!/url=./files/listexpr.htm\">list</a> of clusters to create user data on			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PropertyName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Name of the user data property.  To clearly identify the property and to avoid conflict with other plugins, it is recommended that the name reflects the plugin or author of the plugin.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"UserData\"			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Template		</td>\n\
		<td><a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a>		</td>\n\
		<td>\n\
Name of the a custom property that will serve as the template for the contents of the user data map.  This argument is not necessary if the user data map will be used for storing binary data.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'This vbscript example demonstrates how you can create user data maps on seperate \n\
	\'clusters with a single call to CreateUserDataMap\n\
	dim oRoot, oCircle, oCluster1, oCluster2, oCluster3, l_ClusterList, oUserDataMapList, oUserDataMap\n\
	set oRoot = Application.ActiveProject.ActiveScene.Root\n\
	set oCircle = oRoot.AddGeometry(\"Circle\",\"NurbsCurve\")\n\
	set oCluster1 = oCircle.ActivePrimitive.Geometry.AddCluster( siIsoPointCluster )		\n\
	set oCluster2 = oCircle.ActivePrimitive.Geometry.AddCluster( siVertexCluster,\"PntCluster\",Array(1,4,7,10,13,16) )		\n\
	set oCluster3 = oCircle.ActivePrimitive.Geometry.AddCluster( siKnotCluster )\n\
	\'Build a list of clusters, similar to what happens is you select multiple clusters\n\
	\'(the duplicates will be filtered out)\n\
	set l_ClusterList = CreateObject(\"XSI.Collection\")\n\
	l_ClusterList.Add oCluster1\n\
	l_ClusterList.Add oCluster2\n\
	l_ClusterList.Add oCluster3\n\
	l_ClusterList.Add oCluster1	\n\
	set oUserDataMapList = CreateUserDataMap( l_ClusterList, \"MultiCreatedUserData\" )	\n\
	\'We can get at the individual object in the collection\n\
	\'by iterating like this:	\n\
	for each oUserDataMap in oUserDataMapList\n\
		logmessage oUserDataMap.FullName\n\
	next\n\
	\'Output of this script is something like:\n\
	\'INFO : \"circle1.crvlist.cls.Isopoint.MultiCreatedUserData\"\n\
	\'INFO : \"circle1.crvlist.cls.PntCluster.MultiCreatedUserData\"\n\
	\'INFO : \"circle1.crvlist.cls.knot.clslist.Knot.MultiCreatedUserData\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'This vbscript example demonstrates creating a templated User Data Map using CreateUserDataMap\n\
	option explicit\n\
	dim oRoot, oObj, oCluster, oPSet, oUserDataMap\n\
	set oRoot = Application.ActiveProject.ActiveScene.Root\n\
	set oObj = oRoot.AddGeometry(\"Grid\",\"MeshSurface\")\n\
	set oCluster = oObj.ActivePrimitive.Geometry.AddCluster( siPolygonCluster, \"UserDataCls\" )	\n\
	\'Create a custom parameter that will serve as the template.  In this case we \n\
	\'choose to create it underneath the object, but we could create it elsewhere if we like\n\
	set oPSet = oObj.AddProperty( \"Custom_parameter_list\",,\"MyDataFormat\" )\n\
	oPSet.AddParameter \"MyFlag\", siBool,,,,,, true\n\
	oPSet.AddParameter \"Z\", siUInt4,,,,,, 100, 0, 1000\n\
	set oUserDataMap = CreateUserDataMap( oCluster, \"UserData\", oPSet ).Item( 0 )\n\
	logmessage \"Name of template for \" &amp; oUserDataMap.FullName &amp; \" is \" &amp; oUserDataMap.Template.FullName\n\
	\'Output of this script is the following:\n\
	\'INFO : \"Name of template for grid.polymsh.cls.UserDataCls.UserData is grid.MyDataFormat\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/UserDataMap.html\">UserDataMap</a> <a href=\"#!/url=./si_cmds/CreateWeightMap.html\">CreateWeightMap</a> <a href=\"#!/url=./si_om/Geometry.AddCluster.html\">Geometry.AddCluster</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";