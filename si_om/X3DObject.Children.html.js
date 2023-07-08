var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>X3DObject.Children</title>\n\
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
            <h1>X3DObject.Children</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a>.Children</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns an <a href=\"#!/url=./si_om/X3DObjectCollection.html\">X3DObjectCollection</a> containing all <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> \n\
children parented under the object.  No recursive search is performed, in other words only \n\
direct children are returned, not children of children.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
X3DObjectCollection rtn = X3DObject.Children;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">set oRoot = Application.ActiveProject.ActiveScene.Root\n\
oRoot.AddGeometry \"Sphere\", \"MeshSurface\"\n\
oRoot.AddNull\n\
for each oChild in oRoot.Children\n\
	Application.LogMessage oChild.Name &amp; \", \" &amp; oChild.Type\n\
next\n\
\' Expected results:\n\
\'INFO : Camera_Root, CameraRoot\n\
\'INFO : light, light\n\
\'INFO : sphere, polymsh\n\
\'INFO : null, null</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	Compare this example with the similar example \n\
	for X3DObject.FindChildren\n\
*/\n\
// Create a sample scene\n\
NewScene( null, false ) ;\n\
var oRoot = Application.ActiveSceneRoot;\n\
var oNull = oRoot.AddNull( \"MyNull\" ) ;\n\
var oSphere = oRoot.AddGeometry( \"Sphere\", \"MeshSurface\", \"MySphere\" ) ;\n\
var oNestedSphere = oNull.AddNull( \"NestedNull\" ) ;\n\
var oConeInModel = oRoot.AddGeometry( \"Cone\", \"NurbsSurface\", \"ConeInMdl\" ) ;\n\
var oModel = oRoot.AddModel(oConeInModel, \"MyModel\") ;\n\
// The X3DObject.Children collection returns all X3DObjects \n\
// but it is not recursive.\n\
PrintChildren( \"Children of SceneRoot:\", oRoot.Children ) ;\n\
PrintChildren( \"Children of Null:\", oNull.Children ) ;\n\
PrintChildren( \"Children of Model:\", oModel.Children ) ;\n\
// Expected result:\n\
//INFO : Children of SceneRoot:\n\
//INFO :		Camera_Root\n\
//INFO :		light\n\
//INFO :		MyNull\n\
//INFO :		MySphere\n\
//INFO :		MyModel\n\
//INFO : ----------------------------\n\
//INFO : Children of Null:\n\
//INFO :		NestedNull\n\
//INFO : ----------------------------\n\
//INFO : Children of Model:\n\
//INFO :		MyModel.ConeInMdl\n\
//INFO : ----------------------------\n\
// Helper function showing the contents of a collection\n\
function PrintChildren( in_msg, in_oChildren )\n\
{\n\
	Application.LogMessage( in_msg ) ;\n\
	for ( var i=0 ; i&lt;in_oChildren.Count; i++ ) {\n\
		Application.LogMessage( \"\\t\" + in_oChildren.Item(i).FullName ) ;\n\
	}\n\
	Application.LogMessage( \"----------------------------\" ) ;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/X3DObject.FindChildren.html\">X3DObject.FindChildren</a> <a href=\"#!/url=./si_om/X3DObject.FindChildren2.html\">X3DObject.FindChildren2</a> <a href=\"#!/url=./si_om/X3DObject.FindChild.html\">X3DObject.FindChild</a> <a href=\"#!/url=./si_om/X3DObject.FindChild2.html\">X3DObject.FindChild2</a> <a href=\"#!/url=./si_cmds/EnumElements.html\">EnumElements</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";