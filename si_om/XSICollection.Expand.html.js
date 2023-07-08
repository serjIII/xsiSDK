var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSICollection.Expand</title>\n\
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
            <h1>XSICollection.Expand</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a>.Expand</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Expands each item in collection: \n\
<br /><br />\n\
- If the item is a group, it replaces the group with its members. \n\
<br /><br />\n\
- If the group member was added in branch then it expands the members \n\
as though it was a collection item added with the branch flag set. \n\
<br /><br />\n\
- If the item is a <a href=\"#!/url=./si_om/CollectionItem.html\">CollectionItem</a> containing an \n\
<a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> and its <a href=\"#!/url=./si_om/ProjectItem.BranchFlag.html\">ProjectItem.BranchFlag</a> \n\
property is set then it traverses the branch and adds each \n\
<a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> in the branch to the collection.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>CXSICollection XSICollection.Expand();</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = XSICollection.Expand();</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a></p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">Dim oColl		\' object pointer for collection\n\
Dim oExpColl		\' object pointer for expanded collection\n\
\' Create the new collection &amp; populate it \n\
Set oColl = CreateObject( \"XSI.Collection\" )\n\
oColl.Add ActiveSceneRoot\n\
checkContents \"oColl\", oColl\n\
\' Expand the collection and save it as a new collection\n\
LogMessage \"----------------\"\n\
Set oRoot = oColl.Item(0)\n\
oRoot.BranchFlag = siBranch\n\
Set oExpColl = oColl.Expand\n\
checkContents \"oExpColl\", oExpColl \n\
\' Now start again but this time don\'t set the branch flag\n\
LogMessage \"----------------\"\n\
oExpColl.RemoveAll\n\
oRoot.BranchFlag = siNode\n\
Set oExpColl = oColl.Expand\n\
checkContents \"oExpColl\", oExpColl \n\
\'--------------------------------------------------\n\
function checkContents( in_name, in_coll )\n\
	If in_coll.Count &gt; 0 Then\n\
		LogMessage in_name &amp; \" collection now contains \" &amp; in_coll.GetAsText \n\
	Else\n\
		LogMessage in_name &amp; \" collection is empty.\"\n\
	End If\n\
end function\n\
\'--------------------------------------------------\n\
\' Output of above script:\n\
\'INFO : \"oColl collection now contains Scene_Root\"\n\
\'INFO : \"----------------\"\n\
\'INFO : \"oExpColl collection now contains Scene_Root,Camera_Root,Camera,Camera_Interest,light\"\n\
\'INFO : \"----------------\"\n\
\'INFO : \"oExpColl collection now contains Scene_Root\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/siBranchFlag.html\">siBranchFlag</a> <a href=\"#!/url=./si_cmds/SelectChildNodes.html\">SelectChildNodes</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";