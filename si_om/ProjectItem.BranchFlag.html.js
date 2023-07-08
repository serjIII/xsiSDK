var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ProjectItem.BranchFlag</title>\n\
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
            <h1>ProjectItem.BranchFlag</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/ProjectItem.html\">ProjectItem</a>.BranchFlag <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns the branch flag using one of the <a href=\"#!/url=./si_om/siBranchFlag.html\">siBranchFlag</a> enum values. The branch flag \n\
indicates whether an object was added to a <a href=\"#!/url=./si_om/Group.html\">Group</a> or to the <a href=\"#!/url=./si_om/Selection.html\">Selection</a> \n\
in branch mode.\n\
<br /><br />\n\
Note: Four different hierarchical levels are actually recognized: NODE, BRANCH, TREE, and MODEL (see\n\
<a href=\"#!/url=./files/dev_Select_DealingWithHierarchy.htm\">Dealing with Hierarchy</a>). \n\
However, this property always returns the <a href=\"#!/url=./si_om/siBranchFlag.html#siBranch\">siBranch</a> value when tested on items \n\
that are selected or added to a group in BRANCH, TREE, or MODEL mode.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
siBranchFlag rtn = ProjectItem.BranchFlag;\n\
// set accessor\n\
ProjectItem.BranchFlag = siBranchFlag;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\"># \n\
# This example demonstrates how to test each selected item to see whether\n\
# it is selected in branch (BRANCH/TREE/MODEL) or not.\n\
#\n\
from win32com.client import constants as cns\n\
app = Application\n\
# Create a bunch of objects for selection tests\n\
app.NewScene(\"\", 0)\n\
app.CreatePrim(\"Disc\", \"MeshSurface\")\n\
app.CreatePrim(\"Torus\", \"MeshSurface\")\n\
app.CreatePrim(\"Grid\", \"MeshSurface\")\n\
app.CreatePrim(\"Sphere\", \"MeshSurface\")\n\
app.CreatePrim(\"Cube\", \"MeshSurface\")\n\
app.CreatePrim(\"Cone\", \"MeshSurface\")\n\
# Select a number of objects with different hierarchical levels\n\
app.SelectObj(\"disc\", \"BRANCH\")\n\
app.AddToSelection(\"torus\", \"TREE\")\n\
app.AddToSelection(\"grid\", \"NODE\")\n\
app.AddToSelection(\"sphere\", \"MODEL\")\n\
app.AddToSelection(\"cube\")\n\
for sel in app.Selection :\n\
	strResults = \"\"\n\
	if sel.BranchFlag == 0 :\n\
		strResults = \"siNode\"\n\
	elif sel.BranchFlag == 1 :\n\
		strResults = \"siBranch\"\n\
	elif sel.BranchFlag == 3 :\n\
		strResults = \"siUnspecified\"\n\
	else :\n\
		strResults = \"&lt;unrecognized value&gt;\"\n\
	app.LogMessage( sel.FullName + \".BranchFlag == \" + strResults )\n\
# Expected results:\n\
# INFO : disc.BranchFlag == siBranch\n\
# INFO : torus.BranchFlag == siBranch\n\
# INFO : grid.BranchFlag == siNode\n\
# INFO : sphere.BranchFlag == siBranch\n\
# INFO : cube.BranchFlag == siNode</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">var xsi = Application;\n\
NewScene( null, false );\n\
var a = xsi.ActiveSceneRoot.AddGeometry( \"Cube\", \"MeshSurface\", \"A\" );\n\
a.length.Value = 2;\n\
var b = a.AddGeometry( \"Cube\", \"MeshSurface\", \"B\" );\n\
b.length.Value = 2;\n\
Translate( b, 5 );\n\
var c = b.AddGeometry( \"Cube\", \"MeshSurface\", \"C\" );\n\
c.length.Value = 2;\n\
Translate( c, 5 );\n\
// Create group\n\
var group = xsi.ActiveSceneRoot.AddGroup();\n\
// Add members to group\n\
group.AddMember( a, true );\n\
group.AddMember( b, false );\n\
xsi.LogMessage( \"Number of group members : \" + group.members.Count );\n\
// Determine which members were added in branch mode\n\
for ( var i=0; i&lt;group.Members.Count; i++ )\n\
{\n\
	var member = group.Members(i);\n\
	var bBranchMember = group.Members(i).BranchFlag ? \"true\" : \"false\";\n\
	xsi.LogMessage( member + \" added in branch mode? \" + bBranchMember );\n\
}\n\
// Expected results:\n\
//INFO : Number of group members : 2\n\
//INFO : A added in branch mode? true\n\
//INFO : B added in branch mode? false</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";