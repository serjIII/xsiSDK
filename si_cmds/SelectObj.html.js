var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SelectObj</title>\n\
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
            <h1>SelectObj</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SelectObj</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Selects objects, property sets, and other elements using the selection mode \n\
specified in the HierarchyLevel parameter. \n\
<br /><br />\n\
Note: This command resets the <a href=\"#!/url=./si_om/Selection.html\">Selection</a> to only those items \n\
specified in the SelectionList parameter. If you want to modify the selection, \n\
use <a href=\"#!/url=./si_cmds/AddToSelection.html\">AddToSelection</a> or <a href=\"#!/url=./si_cmds/RemoveFromSelection.html\">RemoveFromSelection</a>.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SelectObj( [SelectionList], [HierarchyLevel], [CheckObjectSelectability] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">SelectionList		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of elements to select. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">HierarchyLevel		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Specifies how to select objects in a hierarchy. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"ASITIS\"			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">ASITIS					</td>\n\
					<td>Select the object as it is.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">NODE					</td>\n\
					<td>Select the object.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">BRANCH					</td>\n\
					<td>Select the object and its children.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">TREE					</td>\n\
					<td>Select the entire hierarchy of objects.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">MODEL					</td>\n\
					<td>Select the model and the hierarchy of objects.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">CheckObjectSelectability		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 Specifies whether to select objects that marked as unselectable. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">False					</td>\n\
					<td>Select objects even if they are marked as unselectable.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">True					</td>\n\
					<td>Do not select objects if they are marked as unselectable.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' Create objects for demonstration\n\
NewScene , false\n\
set cube = CreatePrim(\"Cube\", \"MeshSurface\")\n\
SelectObj \"cube.poly[4]\", , True\n\
CreateCluster\n\
ApplyShader\n\
BlendInPresetsInsp , , , True, True\n\
set cube1 = CreatePrim( \"Cube\", \"MeshSurface\",,cube )\n\
Translate cube1, -2, 0.000, 0.000, siAbsolute, siParent, siObj, siXYZ \n\
set cube2 = CreatePrim(\"Cube\", \"MeshSurface\",,cube1 )\n\
Translate cube2, -2, 0.000, 0.000, siAbsolute, siParent, siObj, siXYZ \n\
set cube3 = CreatePrim( \"Cube\", \"MeshSurface\",,cube2 )\n\
Translate cube3, -2, 0.000, 0.000, siAbsolute, siParent, siObj, siXYZ \n\
CreateGroup\n\
\' Select the objects named \"cube\" and \"cube1\"\n\
SelectObj \"cube,cube1\"\n\
Application.LogMessage \"select objects by name: \" &amp; Selection.GetAsText\n\
\' Select all models in the scene.\n\
SelectObj \"#model\"\n\
Application.LogMessage \"select all models: \" &amp; Selection.GetAsText\n\
\' Select all 3D objects in the scene.\n\
SelectObj \"*#3dobject\"\n\
Application.LogMessage \"select all objects: \" &amp; Selection.GetAsText\n\
\' Select all passes in the scene.\n\
SelectObj \"*.#pass\"\n\
Application.LogMessage \"select all passes: \" &amp; Selection.GetAsText\n\
\' Select all groups in the scene.\n\
SelectObj \"#group\"\n\
Application.LogMessage  \"select all groups: \" &amp; Selection.GetAsText\n\
\' Select all materials\n\
SelectObj \"*.material\"\n\
Application.LogMessage \"select all materials: \" &amp; Selection.GetAsText\n\
\' Select all polygon cluster material\n\
SelectObj \"*.polymsh.cls.Polygon.Material\"\n\
Application.LogMessage \"select all  polygon cluster materials: \" &amp; Selection.GetAsText\n\
\'***************************************************************************\n\
\' To process the selection list, use the Selection object\n\
SelectObj \"*.material\"\n\
Application.LogMessage \"select all local object materials: \" &amp; Selection.GetAsText\n\
\'***************************************************************************\n\
\' When you branch, tree, or model select, only one object\n\
\' appears in the SelectionList. For example, given this\n\
\' hierarchy:\n\
\' 	cube &gt; cube1 &gt; cube2 &gt; cube3\n\
\'\n\
\' Selecting in branch gives these results:\n\
\' 	- cube1 is selected (white highlight)\n\
\' 	- cube2 and cube3 have light grey highlight\n\
\' 	- cube1 is the only item in the selection list\n\
SelectObj \"cube1\", \"BRANCH\"\n\
Application.LogMessage \"select cube1 in branch: \" &amp; Selection.GetAsText\n\
\'INFO : \"select objects by name: cube,cube1\"\n\
\'INFO : \"select all models: Scene_Root\"\n\
\'INFO : \"select all objects: Camera,Camera_Interest,Camera_Root,cube,cube1,cube2,cube3,light\"\n\
\'INFO : \"select all passes: Passes.Default_Pass\"\n\
\'INFO : \"select all groups: Group\"\n\
\'INFO : \"select all materials: Camera.Scene_Material\"\n\
\'INFO : \"select all  polygon cluster materials: cube.polymsh.cls.Polygon.Material\"\n\
\'INFO : \"select all local object materials: Camera.Scene_Material\"\n\
\'INFO : \"select cube1 in branch: cube1\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Selection.html\">Selection</a> <a href=\"#!/url=./si_cmds/AddToSelection.html\">AddToSelection</a> <a href=\"#!/url=./si_cmds/RemoveFromSelection.html\">RemoveFromSelection</a> <a href=\"#!/url=./si_cmds/SelectBranch.html\">SelectBranch</a> <a href=\"#!/url=./si_cmds/SelectTree.html\">SelectTree</a> <a href=\"#!/url=./si_cmds/SelectModel.html\">SelectModel</a> <a href=\"#!/url=./files/dev_Select_DealingWithHierarchy.htm\">Dealing with Hierarchy</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";