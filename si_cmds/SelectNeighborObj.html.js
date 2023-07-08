var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SelectNeighborObj</title>\n\
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
            <h1>SelectNeighborObj</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SelectNeighborObj</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Selects parent, child, or sibling objects.  You should consider using \n\
<a href=\"#!/url=./si_cmds/NavigateNode.html\">NavigateNode</a> if you do not want to select the elements.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SelectNeighborObj( [InputObjs], [NavigDirection], [HierarchyLevel], [AddToSelection] );</pre>		</td>	</tr>\n\
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
<a href=\"#!/url=./files/listexpr.htm\">List</a> of objects. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">NavigDirection		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 Direction to navigate 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>Select parent					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>Select child					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">2					</td>\n\
					<td>Select previous sibling					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">3					</td>\n\
					<td>Select next sibling					</td>\n\
				</tr>\n\
			</table>\n\
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
		<td class=\"name\">AddToSelection		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 True to add to the selection, False to replace the selection. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' Given this hierarchy:\n\
\'\n\
\' cube\n\
\'   cube1\n\
\'     cube2\n\
\'     sphere\n\
\'     cone\n\
\'\n\
\' the following example will invoke SelectNeighborObj many times\n\
\' each time selecting a different part of the hierarchy.\n\
NewScene\n\
CreatePrim \"Cube\", \"MeshSurface\"\n\
SetValue \"cube.cube.length\", 12\n\
CreatePrim \"Cube\", \"MeshSurface\"\n\
SetValue \"cube1.cube.length\", 10\n\
CopyPaste \"cube1\", , \"cube\", 1\n\
CreatePrim \"Cube\", \"MeshSurface\"\n\
CopyPaste \"cube2\", , \"cube1\", 1\n\
CreatePrim \"Sphere\", \"MeshSurface\"\n\
CopyPaste \"sphere\", , \"cube1\", 1\n\
CreatePrim \"Cone\", \"MeshSurface\"\n\
CopyPaste \"cone\", , \"cube1\", 1\n\
MsgBox \"Let\'s now select the parent of cube2 (cube1)\"\n\
SelectNeighborObj \"cube2\"\n\
MsgBox \"Let\'s now select the first child of cube1 (cube2)\"\n\
SelectNeighborObj \"cube1\", 1\n\
MsgBox \"Let\'s now select the next sibling of sphere (cone)\"\n\
SelectNeighborObj \"sphere\", 3\n\
MsgBox \"Let\'s now add the parent of cube2 (cube1) to the selection\"\n\
SelectNeighborObj \"cube2\", , , True\n\
MsgBox \"Let\'s now select the parent of cube (scene root)\"\n\
SelectNeighborObj \"cube\"\n\
MsgBox \"Let\'s now go through all direct children of the scene root and log its name\"\n\
dim obj, first, child\n\
\' get first child (Camera_Root) of the scene root\n\
SelectObj \"Scene_Root\"\n\
set obj = GetValue( \"SelectionList\" )\n\
SelectNeighborObj obj(0), 1\n\
set first = GetValue( \"SelectionList\" )\n\
\' lets log the name of that first child\n\
LogMessage \"First child of \" &amp; obj(0) &amp; \" is \" &amp; first\n\
\' get sibling of that object (light)\n\
SelectNeighborObj first, 3	\' get next sibling\n\
set child = GetValue( \"SelectionList\" )\n\
\' log its name and get new sibling\n\
\' and loop until no more sibling \n\
do until child = first\n\
	LogMessage \"Next sibling is \" &amp; child\n\
	SelectNeighborObj child, 3		\' get next sibling\n\
	set child = GetValue( \"SelectionList\" )\n\
loop \n\
\' The log of the example above should be :\n\
\'INFO : \"First child of Scene_Root is Camera_Root\"\n\
\'INFO : \"Next sibling is light\"\n\
\'INFO : \"Next sibling is cube\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/NavigateNode.html\">NavigateNode</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";