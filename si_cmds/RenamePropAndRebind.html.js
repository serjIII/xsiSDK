var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>RenamePropAndRebind</title>\n\
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
            <h1>RenamePropAndRebind</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">RenamePropAndRebind</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v3.5</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Renames a property and ensures that all references to the property are maintained. For example, while renaming \n\
a UV property, the command updates every reference to the property in every shader, rendermap, texturemap and \n\
material of the object, so that the reference still points to the same property.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>RenamePropAndRebind( [Properties], NewName, [UpdateRefs], [UpdateWildcards] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Properties		</td>\n\
		<td>Property		</td>\n\
		<td>\n\
 Property to rename 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">NewName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 New name for the property 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
If not specified, a new name is automatically created for this property.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">UpdateRefs		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
True to update references to the property in shaders, materials, rendermaps etc. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
true			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">UpdateWildcards		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 True to update references containing wildcards (e.g. uvprop*)			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
false			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'-------------------------------------------------------------------------------\n\
\'\n\
\' This example demonstrates how to rename a texture map when it is applied to a \n\
\' whole group (consisting of two spheres).\n\
\'\n\
NewScene , false\n\
\' Create the smaller ball\n\
Set oBall_1 = ActiveSceneRoot.AddGeometry( \"Sphere\", \"MeshSurface\", \"smBall\" )\n\
oBall_1.radius.Value = 2\n\
\' Create the larger ball\n\
Set oBall_2 = ActiveSceneRoot.AddGeometry( \"Sphere\", \"MeshSurface\", \"lgBall\" )\n\
oBall_2.radius.Value = 3\n\
\' Create a group based on the selection (the two balls)\n\
Selection.Clear\n\
For Each mbr In ActiveSceneRoot.Children.Filter( , siMeshFamily )\n\
	LogMessage \"Adding \" &amp; mbr &amp; \" to the selection.\"\n\
	Selection.Add mbr\n\
Next\n\
Set oGroup = ActiveSceneRoot.AddGroup( Selection, \"Onion\" )\n\
\' Now create a texture map for the whole group (notice that we don\'t need to \n\
\' specify input objects because we are using the current selection)\n\
Set oMapMembers = Create2DMapWithProjection( oGroup )\n\
\' Are these the same members as our selection?\n\
LogMessage \"The texture map was added to \" &amp; oMapMembers.GetAsText &amp; \".......\"\n\
\' Find all texture maps in the scene\n\
checkForMaps\n\
\' Rename the texture map \n\
RenamePropAndRebind oGroup.Properties( \"Texture_Map\" ), \"Superciliousness\", True\n\
\' Check to make sure we renamed all texture maps in the scene\n\
checkForMaps\n\
\'-------------------------------------------------------------------------------\n\
function checkForMaps()\n\
	For Each mesh_item In ActiveSceneRoot.Children.Filter( , siMeshFamily )\n\
		For Each prop in mesh_item.Properties\n\
			If (prop.Name = \"Superciliousness\") _\n\
			OR (prop.name = \"Texture_Map\") Then\n\
				LogMessage \"Found \" &amp; prop.Name _\n\
					&amp; \" under \" &amp; mesh_item.Name\n\
			End If\n\
		Next\n\
	Next\n\
end function\n\
\'-------------------------------------------------------------------------------\n\
\' Output of above script:\n\
\'INFO : \"Adding smBall to the selection.\"\n\
\'INFO : \"Adding lgBall to the selection.\"\n\
\'\n\
\'INFO : \"The texture map was added to Onion.Texture_Map.......\"\n\
\'\n\
\'INFO : \"Found Texture_Map under smBall\"\n\
\'INFO : \"Found Texture_Map under lgBall\"\n\
\'\n\
\'INFO : \"Found Superciliousness under smBall\"\n\
\'INFO : \"Found Superciliousness under lgBall\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";