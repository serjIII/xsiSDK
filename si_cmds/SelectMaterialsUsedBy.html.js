var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SelectMaterialsUsedBy</title>\n\
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
            <h1>SelectMaterialsUsedBy</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SelectMaterialsUsedBy</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Selects all the materials being \'used by\' the input object(s) which can include \n\
3DObjects, clusters, groups, layers and partitions.  For a 3DObject this includes \n\
the materials on clusters and subsurfaces.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SelectMaterialsUsedBy( InputObjs );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">InputObjs		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of objects 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' The following example creates a couple of objects and places them in a group.\n\
\' Then it adds a material (green in color) to the group.  Thus that material is\n\
\' inherited by the two objects.  Then it demonstates this command.\n\
\'\n\
NewScene , False\n\
\' Create a couple of objects\n\
SetDisplayMode \"Camera\", \"shaded\"\n\
set oRoot = Application.ActiveSceneRoot\n\
set oCube = oRoot.AddGeometry(\"Cube\",\"MeshSurface\", \"Green_Cube\")\n\
set oCone = oRoot.AddGeometry(\"Cone\",\"MeshSurface\", \"Green_Cone\")\n\
Translate \"Green_Cone\", 7.57946639200555, -4.14387414395287E-02, 4.14387414395287E-03, siRelative, siView, siObj, siXYZ, , , , , , , , , , 0\n\
\' Create a group and add the two objects\n\
set oGroup = oRoot.AddGroup\n\
oGroup.AddMember(oCube)\n\
oGroup.AddMember(oCone)\n\
\' Create a material (green in color) on the group\n\
set oMaterial = oGroup.AddMaterial(\"Phong\", siBranch, \"GREEN_Material\")\n\
SetValue \"Sources.Materials.DefaultLib.GREEN_Material.GREEN_Material.diffuse.red\", 0\n\
SetValue \"Sources.Materials.DefaultLib.GREEN_Material.GREEN_Material.diffuse.green\", 1\n\
SetValue \"Sources.Materials.DefaultLib.GREEN_Material.GREEN_Material.diffuse.blue\", 0\n\
\' Select the material \'used by\' an object in the group.\n\
DeselectAll\n\
SelectMaterialsUsedBy \"Green_Cone\"\n\
\' The material \'GREEN_Material\' should now be selected.</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	The following example creates an object and adds a material (red in color)\n\
	on it.  Then it demonstates this command.\n\
*/\n\
NewScene( null, false );\n\
// Create an object\n\
SetDisplayMode(\"Camera\", \"shaded\");\n\
var oRoot = Application.ActiveSceneRoot;\n\
var oObject = oRoot.AddGeometry( \"Cylinder\", \"MeshSurface\" );\n\
// Add a material (red in color) on it\n\
var oMaterial = oObject.AddMaterial( \"Phong\", siNode, \"RED_Material\" );\n\
SetValue(\"Sources.Materials.DefaultLib.RED_Material.RED_Material.diffuse.red\", 1, null);\n\
SetValue(\"Sources.Materials.DefaultLib.RED_Material.RED_Material.diffuse.green\", 0, null);\n\
SetValue(\"Sources.Materials.DefaultLib.RED_Material.RED_Material.diffuse.blue\", 0, null);\n\
// Select the material(s) used by the object\n\
DeselectAll();\n\
SelectMaterialsUsedBy(\"cylinder\");\n\
// The material \'RED_Material\' should now be selected.\n\
//</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/SelectObjectsUsingMaterial.html\">SelectObjectsUsingMaterial</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";