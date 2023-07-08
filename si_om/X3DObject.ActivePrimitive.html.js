var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>X3DObject.ActivePrimitive</title>\n\
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
            <h1>X3DObject.ActivePrimitive</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a>.ActivePrimitive</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns the 3D object\'s active <a href=\"#!/url=./si_om/Primitive.html\">Primitive</a>. \n\
<br /><br />\n\
Note: Although the scene root is a kind of <a href=\"#!/url=./si_om/Model.html\">Model</a> \n\
it does not support primitives. In this case this property return Nothing.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Primitive rtn = X3DObject.ActivePrimitive;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example illustrates how to get the active primitive object from an \n\
	X3DObject object and how to detect if the object supports primitives.\n\
*/\n\
var cone = Application.ActiveSceneRoot.AddGeometry( \"Cone\", \"MeshSurface\" );\n\
TestPrimitive( cone ) ;\n\
mynull = Application.ActiveSceneRoot.AddNull( \"MyNull\" )\n\
TestPrimitive( mynull ) ;\n\
TestPrimitive( Application.ActiveSceneRoot ) ;\n\
function TestPrimitive( in_obj )\n\
{\n\
	if ( in_obj.ActivePrimitive != null )\n\
	{\n\
		Application.LogMessage( \"\\n\\t\" +\n\
				\"Name: \" + in_obj.Name + \"\\n\\t\" +\n\
				\"Class: \" + Application.ClassName(in_obj) + \"\\n\\t\" +\n\
				\"Type: \" + in_obj.Type + \"\\n\\t\" +\n\
				\"Fullname: \" + in_obj.FullName + \"\\n\\t\" +\n\
				\"Parent: \" + in_obj.Parent.Name ) ;\n\
	}\n\
	else\n\
	{\n\
		Application.LogMessage( in_obj + \" does not have a primitive\" ) ;\n\
	}\n\
}\n\
// Expected results:\n\
//INFO : Sphere object\'s name: sphere\n\
//INFO : \n\
//	Name: cone\n\
//	Class: X3DObject\n\
//	Type: polymsh\n\
//	Fullname: cone\n\
//	Parent: Scene_Root\n\
//INFO : \n\
//	Name: MyNull\n\
//	Class: Null\n\
//	Type: null\n\
//	Fullname: MyNull\n\
//	Parent: Scene_Root\n\
//INFO : Scene_Root does not have a primitive</pre></td></tr>\n\
</table>\n\
</div><h4>2. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
#	This example illustrates how to get the active primitive object from an \n\
#	X3DObject object and how to detect if the object supports primitives.\n\
#\n\
cone = Application.ActiveSceneRoot.AddGeometry( \"Cone\", \"MeshSurface\" )\n\
if cone.ActivePrimitive:\n\
	Application.LogMessage( \"\\n\\tName: \" + cone.Name + \"\\n\\tClass: \" +\n\
	Application.ClassName(cone) + \"\\n\\tType: \" + cone.Type + \"\\n\\tFullname: \" +\n\
	cone.FullName + \"\\n\\tParent: \" + cone.Parent.Name )\n\
if not Application.ActiveSceneRoot.ActivePrimitive:\n\
	Application.LogMessage( \"The SceneRoot does not have a primitive.\" )\n\
# Expected results:\n\
#INFO : \n\
#	Name: cone\n\
#	Class: X3DObject\n\
#	Type: polymsh\n\
#	Fullname: cone\n\
#	Parent: Scene_Root\n\
#INFO : The SceneRoot does not have a primitive.</pre></td></tr>\n\
</table>\n\
</div><h4>3. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\'	This example illustrates how to get the active primitive object from an \n\
\'	X3DObject object and how to detect if the object supports primitives.\n\
\'\n\
NewScene , false\n\
set cone = Application.ActiveSceneRoot.AddGeometry( \"Cone\", \"MeshSurface\" )\n\
if TypeName(cone.ActivePrimitive) &lt;&gt; \"Nothing\" then\n\
	Application.LogMessage vbTab &amp; \"Name: \" &amp; vbTab &amp; cone.Name, siComment \n\
	Application.LogMessage vbTab &amp; \"Class: \" &amp; vbTab &amp; TypeName(cone), siComment \n\
	Application.LogMessage vbTab &amp; \"Type: \" &amp; vbTab &amp; cone.Type, siComment \n\
	Application.LogMessage vbTab &amp; \"FullName: \" &amp; vbTab &amp; cone.FullName, siComment \n\
	Application.LogMessage vbTab &amp; \"Parent: \" &amp; vbTab &amp; cone.Parent.Name, siComment \n\
end if\n\
if TypeName(Application.ActiveSceneRoot.ActivePrimitive) = \"Nothing\" then\n\
	Application.LogMessage \"The SceneRoot does not have a primitive.\", siComment \n\
end if\n\
\' Expected results:\n\
\' 	Name: 	cone\n\
\' 	Class: 	X3DObject\n\
\' 	Type: 	polymsh\n\
\' 	Fullname: 	cone\n\
\' 	Parent: 	Scene_Root\n\
\' The SceneRoot does not have a primitive.</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";