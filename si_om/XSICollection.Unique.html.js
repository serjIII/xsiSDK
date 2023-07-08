var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSICollection.Unique</title>\n\
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
            <h1>XSICollection.Unique</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a>.Unique</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns or sets a <a href=\"#!/url=./files/Boolean.htm\">Boolean</a> value indicating whether or not this \n\
collection is unique. A collection is unique if it contains only one copy of an \n\
object (ie., no duplicates). However, you can have several different objects in \n\
a unique collection.\n\
<br /><br />\n\
Note: XSICollection is non-unique by default: you have to explicitly set the Unique \n\
flag to True in order to get a unique collection. Once a collection is unique, all \n\
duplicates are removed and you cannot add any more duplicates.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Boolean rtn = XSICollection.Unique;\n\
// set accessor\n\
XSICollection.Unique = Boolean;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">Dim oColl		\' object pointer for collection\n\
\' Create a non-unique collection as an ActiveX object\n\
Set oColl = CreateObject(\"XSI.Collection\")\n\
\' Add a bunch of duplicates\n\
oColl.Add ActiveSceneRoot\n\
oColl.Add ActiveSceneRoot\n\
oColl.Add ActiveSceneRoot\n\
oColl.Add ActiveSceneRoot\n\
oColl.Add ActiveSceneRoot\n\
\' How many members are in this collection?\n\
countMembers oColl\n\
\' Explicitly set\n\
oColl.Unique = True\n\
\' Now how many members are in this collection?\n\
countMembers oColl\n\
\'--------------------------------------------------\n\
function countMembers( in_coll )\n\
	\' How many members are in this collection\n\
	LogMessage \"This collection contains \" &amp; in_coll.Count &amp; \" members.\"\n\
end function\n\
\'--------------------------------------------------\n\
\' Output of above script:\n\
\'INFO : \"This collection contains 5 members.\"\n\
\'INFO : \"This collection contains 1 members.\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how you can remove all instances\n\
	of an object using either the Unique property or using the\n\
	RemoveItems method iteratively\n\
*/\n\
NewScene( null, false );\n\
// Add multiple instances of the Scene_Root to two collections\n\
var oQuints1 = new ActiveXObject( \"XSI.Collection\" );\n\
var oQuints2 = new ActiveXObject( \"XSI.Collection\" );\n\
for ( i=0; i&lt;5; i++)\n\
{\n\
	oQuints1.Add( ActiveSceneRoot );\n\
	oQuints2.Add( ActiveSceneRoot );\n\
}\n\
LogMessage( \"-------------------------------\" );\n\
LogMessage( \"oQuints1 before removing: \" + oQuints1.GetAsText() );\n\
LogMessage( \"oQuints2 before removing: \" + oQuints2.GetAsText() );\n\
// Reduce the first collection to one scene root using the Unique property\n\
oQuints1.Unique = true;\n\
LogMessage( \"-------------------------------\" );\n\
LogMessage( \"oQuints2 after Unique: \" + oQuints2.GetAsText() );\n\
// Now create an XSICollection with a single scene root so we can remove\n\
// a single instance of the root one at a time\n\
var oRemoveMe = new ActiveXObject( \"XSI.Collection\" );\n\
oRemoveMe.Add( ActiveProject.ActiveScene.Root );\n\
// One a time, remove all instances of the root\n\
LogMessage( \"-------------------------------\" );\n\
while ( oQuints2.RemoveItems( oRemoveMe ).Count != 0 )\n\
{\n\
	LogMessage( \"Another one bites the dust (\" + oQuints2.Count + \" items now remain in the collection).\" );\n\
}\n\
LogMessage( \"-------------------------------\" );\n\
LogMessage( \"oQuints2 after RemoveItems: \" + oQuints2.GetAsText() );\n\
//--------------------------------------------------\n\
// Output of above script:\n\
//INFO : \"-------------------------------\"\n\
//INFO : \"oQuints1 before removing: Scene_Root,Scene_Root,Scene_Root,Scene_Root,Scene_Root\"\n\
//INFO : \"oQuints2 before removing: Scene_Root,Scene_Root,Scene_Root,Scene_Root,Scene_Root\"\n\
//INFO : \"-------------------------------\"\n\
//INFO : \"oQuints2 after Unique: Scene_Root,Scene_Root,Scene_Root,Scene_Root,Scene_Root\"\n\
//INFO : \"-------------------------------\"\n\
//INFO : \"Another one bites the dust (4 items now remain in the collection).\"\n\
//INFO : \"Another one bites the dust (3 items now remain in the collection).\"\n\
//INFO : \"Another one bites the dust (2 items now remain in the collection).\"\n\
//INFO : \"Another one bites the dust (1 items now remain in the collection).\"\n\
//INFO : \"Another one bites the dust (0 items now remain in the collection).\"\n\
//INFO : \"-------------------------------\"\n\
//INFO : \"oQuints2 after RemoveItems: \"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/XSICollection.RemoveItems.html\">XSICollection.RemoveItems</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";