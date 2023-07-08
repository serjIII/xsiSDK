var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>FilterPSet</title>\n\
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
            <h1>FilterPSet</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">FilterPSet</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Filters a list of property sets to produce a list that includes or excludes \n\
all the property sets complying with a specified parent-child relationship.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = FilterPSet( [InputObjs], [Relationship], [Include] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns an <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> object that contains the filtered list.</p></div>\n\
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
<a href=\"#!/url=./files/listexpr.htm\">List</a> of property sets. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Relationship		</td>\n\
		<td><a href=\"#!/url=./si_om/siPSetRelationship.html\">siPSetRelationship</a>		</td>\n\
		<td>\n\
 Relationship to filter on. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siContainedPSet			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Include		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 True to include (False to exclude) property sets that match the relationship. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
True			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' create objects for example\n\
CreatePrim \"Cone\", \"MeshSurface\"\n\
\' test the pset relationship of visibility, display and material properties\n\
set psets = FilterPSet( \"Camera_Interest.visibility\", siLocalPSet, True )\n\
if TypeName( psets ) &lt;&gt; \"Nothing\" then\n\
	LogMessage \"Camera_Interest.visibility property is local.\"\n\
else\n\
	LogMessage \"Camera_Interest.visibility property is shared.\"\n\
end if\n\
set psets = FilterPSet( \"Camera_Interest.display\", siSharedPSet, True )\n\
if TypeName( psets ) &lt;&gt; \"Nothing\" then\n\
	LogMessage \"Camera_Interest.display property is shared.\"\n\
else\n\
	LogMessage \"Camera_Interest.display property is local.\"\n\
end if\n\
set psets = FilterPSet( \"cone.Scene_Material\", siSharedPSet, True )\n\
if TypeName( psets ) &lt;&gt; \"Nothing\" then\n\
	LogMessage \"cone.Scene_Material is inherited.\"\n\
else\n\
	LogMessage \"cone.Scene_Material is local.\"\n\
end if \n\
\'INFO : \"Camera_Interest.visibility property is local.\"\n\
\'INFO : \"Camera_Interest.display property is shared.\"\n\
\'INFO : \"cone.Scene_Material is inherited.\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' Is the camera interest display property a local property set of its parent?\n\
set l_PSets = FilterPSet( \"Camera_Interest.display\", siLocalPSet )\n\
if TypeName( l_PSets ) &lt;&gt; \"Nothing\" then\n\
LogMessage \"Camera_Interest.display is a local property set.\"\n\
else\n\
LogMessage \"Camera_Interest.display is an inherited property set.\"\n\
end if\n\
\'--------------------------------------\n\
\' The following message will be logged:\n\
\'    \'INFO : \"Camera_Interest.display is an inherited property set.\"\n\
\' Create a cone and select its material.\n\
set MyCone = CreatePrim( \"Cone\", \"MeshSurface\" )\n\
SelectObj MyCone.Material\n\
\' Is the selected cone material an inherited property set?\n\
set l_PSets = FilterPSet( , siSharedPSet )\n\
if TypeName( l_PSets ) &lt;&gt; \"Nothing\" then\n\
LogMessage \"The cone material is an inherited property set.\"\n\
else\n\
LogMessage \"The cone material is a local property set.\"\n\
end if\n\
\'--------------------------------------\n\
\' The following message will be logged:\n\
\'    \'INFO : \"The cone material is an inherited property set.\"\n\
\' Create a grid.\n\
CreatePrim \"Grid\", \"MeshSurface\"\n\
\' List all the inherited property sets of the grid.\n\
set l_PSets = FilterPSet( \"grid.*\", siSharedPset )\n\
if TypeName( l_PSets ) &lt;&gt; \"Nothing\" then\n\
	LogMessage \"Inherited property sets of the grid:\"\n\
	for each p in l_Psets\n\
		LogMessage \"   \" &amp; p.name\n\
	next\n\
else\n\
	LogMessage \"No shared PSets\"\n\
end if\n\
\'--------------------------------------\n\
\' The following message will be logged:\n\
\'    \'INFO : \"Inherited property sets of the grid:\"\n\
\'    \'INFO : \"   Ambient Lighting\"\n\
\'    \'INFO : \"   Scene_Material\"\n\
\'    \'INFO : \"   Geometry Approximation\"\n\
\'    \'INFO : \"   Display\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/MakeLocal.html\">MakeLocal</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";