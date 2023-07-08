var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Property.Singleton</title>\n\
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
            <h1>Property.Singleton</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Property.html\">Property</a>.Singleton <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>Returns True if only one object of this type is allowed on its parent</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Boolean rtn = Property.Singleton;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'VBScript example showing how the Material Property is a singleton \n\
set oRoot = application.activeproject.activescene.root\n\
set oGroup = oRoot.addgroup()\n\
set oMaterial = oGroup.AddMaterial(\"Phong\")\n\
if oMaterial.Singleton then\n\
	logmessage \"Only one material is allowed per object\"\n\
else\n\
	logmessage \"Multiple materials are allowed on an object\"\n\
end if\n\
\'Output of this script:\n\
\'INFO : \"Only one material is allowed per object\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'VBScript example showing Singleton and Branch values properties of an object\n\
newscene ,false\n\
set oSphere = ActiveSceneRoot.AddGeometry( \"Sphere\",\"MeshSurface\")\n\
\'There are already default properties on any X3DObject, and we can also \n\
\'add another\n\
oSphere.AddProperty \"CustomProperty\",, \"MyCustomParam\"\n\
logmessage \"Properties of \" &amp; oSphere\n\
for each oProp in oSphere.Properties\n\
	logmessage vbTab &amp; oProp.Name &amp; vbLf &amp; _\n\
		vbTab &amp; vbTab &amp; \"Singleton: \" &amp; oProp.Singleton &amp; vbLf &amp; _\n\
		vbTab &amp; vbTab &amp; \"Branch: \" &amp; oProp.Branch\n\
next\n\
\'Output of this script:\n\
\'INFO : \"Property info on sphere\"\n\
\'INFO : \"	Kinematics\n\
\'		Singleton: False\n\
\'		Branch: False\"\n\
\'INFO : \"	Visibility\n\
\'		Singleton: True\n\
\'		Branch: False\"\n\
\'INFO : \"	Ambient Lighting\n\
\'		Singleton: True\n\
\'		Branch: True\"\n\
\'INFO : \"	Scene_Material\n\
\'		Singleton: True\n\
\'		Branch: True\"\n\
\'INFO : \"	Geometry Approximation\n\
\'		Singleton: True\n\
\'		Branch: True\"\n\
\'INFO : \"	Display\n\
\'		Singleton: True\n\
\'		Branch: True\"\n\
\'INFO : \"	MyCustomParam\n\
\'		Singleton: False\n\
\'		Branch: False\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/siBranchFlag.html\">siBranchFlag</a> <a href=\"#!/url=./si_om/SceneItem.Properties.html\">SceneItem.Properties</a> <a href=\"#!/url=./si_om/SceneItem.LocalProperties.html\">SceneItem.LocalProperties</a> <a href=\"#!/url=./si_om/Scene.Properties.html\">Scene.Properties</a> <a href=\"#!/url=./si_om/XSIProject.Properties.html\">XSIProject.Properties</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";