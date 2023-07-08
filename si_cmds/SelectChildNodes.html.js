var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SelectChildNodes</title>\n\
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
            <h1>SelectChildNodes</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SelectChildNodes</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Returns an <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> consisting of all the nodes in the input \n\
collection, with branch selections being expanded into node selections of their members.<br /><br />\n\
Note: If you try to use an object (or object list) for the SelectionList argument \n\
that is node-selected only, the command returns only the specified object (or object \n\
list). Ie., no expansion is possible unless the object is branch-selected.<br /><br />\n\
Tip: You can set the branch flag to \"BRANCH\" by either using the <a href=\"#!/url=./si_cmds/SelectObj.html\">SelectObj</a> \n\
command with the SelectionMode parameter set to \"BRANCH\" and then get the SelectionList\n\
or you can prefix \"B:\" to the name of the object you want to branch-select.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = SelectChildNodes( [SelectionList], [AffectSelectionList], [CheckObjectSelectability] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns an <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> containing the expanded set of objects.</p></div>\n\
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
<a href=\"#!/url=./files/listexpr.htm\">List</a> of 3D objects to expand.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">AffectSelectionList		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
True to select the expanded objects and return them as a collection; False to return the collection of expanded objects without changing the selection. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
True			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">CheckObjectSelectability		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 Specifies whether to select objects that are marked as unselectable. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
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
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'************************************************************\n\
\'	This script demonstrates how to use SelectChildNodes\n\
\'	expands branch items but leaves node items intact.\n\
\'************************************************************\n\
\' Get the scene root in node\n\
ExpandNodes ActiveSceneRoot\n\
LogMessage vbLf &amp; \"------------------------------------------\"\n\
\' Now get the root in branch (it\'s exactly the same object,\n\
\' except that the branch flag is set to BRANCH).\n\
ExpandNodes \"B:\" &amp; ActiveSceneRoot\n\
function ExpandNodes( in_object )\n\
	\' Clear the selection list \n\
	DeselectAll\n\
	\' Expand the object as an XSICollection\n\
	Set oFamily = SelectChildNodes( in_object )\n\
	\' Iterate over the collection to get each member\n\
	for each oItem in oFamily\n\
		\' If the object was node-selected only, we get a\n\
		\' collection of one item. If it was branch-selected,\n\
		\' we get any object in the branch.\n\
		Application.LogMessage oItem.FullName\n\
	next\n\
end function\n\
\'************************************************************\n\
\' Output of above script:\n\
\'DeselectAll\n\
\'SelectChildNodes \"Scene_Root\"\n\
\'INFO : \"Scene_Root\"\n\
\'INFO : \"\n\
\'------------------------------------------\"\n\
\'DeselectAll\n\
\'SelectChildNodes \"B:Scene_Root\"\n\
\'INFO : \"Scene_Root\"\n\
\'INFO : \"Camera_Root\"\n\
\'INFO : \"Camera\"\n\
\'INFO : \"Camera_Interest\"\n\
\'INFO : \"light\"\n\
\'************************************************************</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'************************************************************\n\
\'	This script demonstrates how to use SelectChildNodes\n\
\'	to expand the current selection list. Notice that\n\
\'	the item to be expanded has to be branch-selected\n\
\'	in order for SelectChildNodes to work properly.\n\
\'************************************************************\n\
\' Set up a cube to work with\n\
CreatePrim \"Cone\", \"MeshSurface\", \"Mom\"\n\
CreatePrim \"Cube\", \"MeshSurface\", \"Junior\", \"Mom\"\n\
\' Find the object in the scene (this finds the first\n\
\' mesh geometry under the scene root)\n\
Set oParent = ActiveSceneRoot.FindChild( ,, siMeshFamily )\n\
\' Make sure the object was found\n\
if ClassName( oParent ) &lt;&gt; \"Nothing\" then\n\
	\' Clear the selection and branch-select the parent \n\
	DeselectAll\n\
	SelectObj oParent, siSelectBranch\n\
	\' Get the branch-selected parent\n\
	Set oSelList = GetValue( \"SelectionList\" )\n\
	\' Expand the parent down the branch\n\
	Set oFamily = SelectChildNodes( oSelList )\n\
	for each oItem in oFamily\n\
		Application.LogMessage oItem.FullName\n\
	next\n\
end if\n\
\'************************************************************\n\
\' Output of above script:\n\
\'CreatePrim \"Cone\", \"MeshSurface\", \"Mom\"\n\
\'CreatePrim \"Cube\", \"MeshSurface\", \"Junior\", \"Mom\"\n\
\'DeselectAll\n\
\'SelectObj \"Mom\", 2\n\
\'SelectChildNodes \"B:Mom\"\n\
\'INFO : \"Mom\"\n\
\'INFO : \"Junior\"\n\
\'************************************************************</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/XSICollection.Expand.html\">XSICollection.Expand</a> <a href=\"#!/url=./si_om/siSelectMode.html\">siSelectMode</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";