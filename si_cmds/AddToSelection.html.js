var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>AddToSelection</title>\n\
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
            <h1>AddToSelection</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">AddToSelection</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Adds elements to the current selection.\n\
<br /><br />\n\
Note: If the SelectionList argument contains an error, the command fails.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>AddToSelection( SelectionList, [HierarchyLevel], [CheckObjectSelectability] );</pre>		</td>	</tr>\n\
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
<a href=\"#!/url=./files/listexpr.htm\">List</a> of elements to add to the selection. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
n/a			</p>\n\
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
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' The following uses \"AddToSelection\" to add an object (ie: \"cylinder\") \n\
\' to the selection list\n\
\'\n\
NewScene\n\
CreatePrim \"Cylinder\", \"MeshSurface\"\n\
CreatePrim \"Cylinder\", \"MeshSurface\"\n\
Translate , 3.48352677058841, 0.127331217177334, -1.27331217177334E-02, _\n\
	siRelative, siView, siObj, siXYZ, , , siXYZ\n\
AddToSelection \"cylinder\"\n\
Application.LogMessage \"object called cylinder should now be part of the selection list\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' The following uses \"AddToSelection\" to add an object (ie: \"cone\")\n\
\' to the selection as a branch selected element.\n\
\'\n\
NewScene\n\
CreatePrim \"Cone\", \"MeshSurface\"\n\
CreatePrim \"Cylinder\", \"MeshSurface\"\n\
Translate , -0.118156772275078, -5.87851913444323, 0.587851913444323, _\n\
	siRelative, siView, siObj, siXYZ\n\
ParentObj \"cone\", \"cylinder\"\n\
DeselectAll\n\
AddToSelection \"cone\", \"BRANCH\"\n\
Application.LogMessage \"The object cone should now be branch selected\"\n\
Application.LogMessage \"The cylinder child should be highlighted in gray to reflect this.\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Selection.html\">Selection</a> <a href=\"#!/url=./si_cmds/SelectObj.html\">SelectObj</a> <a href=\"#!/url=./si_cmds/RemoveFromSelection.html\">RemoveFromSelection</a> <a href=\"#!/url=./si_cmds/SelectBranch.html\">SelectBranch</a> <a href=\"#!/url=./si_cmds/SelectTree.html\">SelectTree</a> <a href=\"#!/url=./si_cmds/SelectModel.html\">SelectModel</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";