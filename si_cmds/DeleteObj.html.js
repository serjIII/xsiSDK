var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>DeleteObj</title>\n\
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
            <h1>DeleteObj</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">DeleteObj</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Deletes the object(s) specified by name (<a href=\"#!/url=./si_om/SIObject.Name.html\">SIObject.Name</a>). There are special rules\n\
for deleting objects in hierarchy, such as parent nodes or models. To delete the entire hierarchy,\n\
you must use branch-deletion: either use the \"B:\" prefix in the InputObj argument or first branch-select\n\
the target and leave the InputObj argument empty. See the Python example for a demonstration of both \n\
of these methods.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>DeleteObj( [InputObj] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">InputObj		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of objects to delete. 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\'	Simple example of how to delete a scene object.\n\
\'\n\
GetPrim \"Null\"\n\
DeleteObj \"Null\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to delete a custom property from the scene.\n\
*/\n\
// Quick setup: custom property set on a torus\n\
NewScene( null, false );\n\
CreatePrim( \"Torus\", \"MeshSurface\", \"InnerTube\" );\n\
AddProp( \"Custom_parameter_list\", \"\", \"\", \"Buoyancy\" );\n\
SIAddCustomParameter( \"InnerTube.Buoyancy\", \"Sideways\", siDouble, 0, 0, 1, null, 5, 0, 1 );\n\
SIAddCustomParameter( \"InnerTube.Buoyancy\", \"Active\", siBool, 0, 0, 1, null, 5, 0, 1 );\n\
// Inspect the property set modally, then delete it if the user presses Cancel\n\
var canceled = false;\n\
while ( !canceled ) {\n\
	canceled = InspectObj( \"InnerTube.Buoyancy\", \"\", \"Buoyancy Settings\", siModal, false );\n\
}\n\
// Deleting the property set completely removes it from the scene\n\
DeleteObj( \"InnerTube.Buoyancy\" );</pre></td></tr>\n\
</table>\n\
</div><h4>3. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
#  This example shows how to delete a model.\n\
#\n\
app = Application\n\
from win32com.client import constants as cns\n\
app.NewScene(\"\", 0);\n\
# First create 2 simple models containing a sphere and a disc (respectively)\n\
sph = app.CreatePrim(\"Sphere\", \"MeshSurface\")\n\
mdl1 = app.CreateModel(sph, \"MySphModel\")(0)\n\
sph = app.CreatePrim(\"Disc\", \"MeshSurface\")\n\
mdl2 = app.CreateModel(sph, \"MyDscModel\")(0)\n\
app.LogMessage(app.ActiveSceneRoot.Models.GetAsText())\n\
# INFO : MySphModel,MyDscModel\n\
# Try deleting it without any special selection mode\n\
app.SelectObj(mdl1.Name)\n\
app.DeleteObj()\n\
app.LogMessage(app.ActiveSceneRoot.Models.GetAsText())\n\
# INFO : MySphModel,MyDscModel\n\
# The command failed because it wasn\'t selected in branch\n\
# Now delete it in branch. Models must be branch-selected when deleting\n\
app.SelectObj(mdl1.Name, \"BRANCH\")\n\
app.DeleteObj()\n\
app.LogMessage(app.ActiveSceneRoot.Models.GetAsText())\n\
# INFO : MyDscModel\n\
# Try the \"B:\" prefix without any selection mode for the second model\n\
app.DeselectAll()\n\
app.DeleteObj(\"B:\"+mdl2.Name)\n\
app.LogMessage(app.ActiveSceneRoot.Models.GetAsText())\n\
# INFO :</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./files/dev_select_ExamplesHierarchicalSelection.htm\">Dealing with Hierarchy</a> <a href=\"#!/url=./si_cmds/SelectObj.html\">SelectObj</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";