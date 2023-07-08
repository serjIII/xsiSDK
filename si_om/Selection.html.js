var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Selection</title>\n\
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
            <h1>Selection</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Selection</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_Selection\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1Selection.html\">Selection</a></p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> The selection object represents the global selection for the application. The user \n\
can change the global selection in the views, explorer, MCA (selection sub-panel in \n\
the main control panel), and through scripting (for example, see \n\
<a href=\"#!/url=./si_cmds/SelectObj.html\">SelectObj</a>, <a href=\"#!/url=./si_cmds/AddToSelection.html\">AddToSelection</a>, \n\
<a href=\"#!/url=./si_cmds/RemoveFromSelection.html\">RemoveFromSelection</a>, <a href=\"#!/url=./si_cmds/ToggleSelection.html\">ToggleSelection</a>, \n\
<a href=\"#!/url=./si_cmds/DeselectAll.html\">DeselectAll</a>, etc.).<br /><br />\n\
Note: Selection provides access to its members through the <a href=\"#!/url=./si_om/Selection.Item.html\">Selection.Item</a> \n\
property. Depending on what is selected, the Selection.Item property returns either the\n\
object or a <a href=\"#!/url=./si_om/CollectionItem.html\">CollectionItem</a>. For example, if you select the whole sphere,\n\
the Selection.Item property returns the sphere as an <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a>; however,\n\
if you select only a subcomponent (like an edge), it returns the edge as a \n\
<a href=\"#!/url=./si_om/CollectionItem.html\">CollectionItem</a>.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Selection.Add.html\">Add</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Selection.Clear.html\">Clear</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Selection.GetAsText.html\">GetAsText</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Selection.Remove.html\">Remove</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Selection.SetAsText.html\">SetAsText</a>		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Properties</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Selection.Count.html\">Count</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Selection.Filter.html\">Filter</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Selection.Item.html\">Item</a>		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'This example demonstrates how a script can find the selected vertices \n\
\'in a selection of multiple objects.\n\
\'Set up a little scenario \n\
coneName = CreatePrim( \"Cone\", \"MeshSurface\" )\n\
sphereName = CreatePrim(\"Sphere\", \"MeshSurface\" )\n\
DeselectAll\n\
AddToSelection coneName &amp;\".pnt[4,7,10]\", , True\n\
AddToSelection sphereName &amp;\".pnt[1,2,3]\", , True\n\
\'Now iterate through the selection using the OM selection object\n\
set oSelection = Application.Selection  \n\
for i = 0 to (oSelection.Count - 1)  \n\
	if ( oSelection(i).Type = \"pntSubComponent\" ) then\n\
		logmessage \"Found the following selected vertices on \" &amp; oSelection(i).Subcomponent.Parent3DObject.Name\n\
		\'Selection of points \n\
		set subComponent = oSelection(i).SubComponent\n\
		selectedIndices = subComponent.ElementArray\n\
		for j = 0 to Ubound( selectedIndices, 1 )\n\
			logmessage selectedIndices(j)\n\
		next	\n\
	else\n\
		logmessage \"Nothing to do with \" &amp; oSelection(i).Name &amp; \"Type (\" &amp; oSelection(i).Type &amp; \")\"\n\
	end if	\n\
next  \n\
\'Output of the above script is:\n\
\'\"Found the following selected vertices on cone\"\n\
\'\"4\"\n\
\'\"7\"\n\
\'\"10\"\n\
\'\"Found the following selected vertices on sphere\"\n\
\'\"1\"\n\
\'\"2\"\n\
\'\"3\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example shows how to save the current selection into \n\
\' an XSICollection object.  This can be very useful if you want \n\
\' to remember what objects were selected before running \n\
\' commands that might change the selection\n\
\'\n\
\' Note: Although this example sets up its own selection, you \n\
\' could remove the SETUP section and run this example with\n\
\' your own selection instead.\n\
\'\n\
\' SETUP\n\
NewScene , false\n\
set arc = CreatePrim( \"Arc\", \"NurbsCurve\" )\n\
set disc = CreatePrim( \"Disc\", \"MeshSurface\" )\n\
CreatePrim \"Cylinder\", \"MeshSurface\"\n\
set oSelection = Application.Selection\n\
oSelection.Clear\n\
oSelection.Add arc\n\
oSelection.Add disc\n\
\' MAIN\n\
Application.LogMessage \"Current selection: \" &amp; oSelection.GetAsText()\n\
strSelection = oSelection.GetAsText()\n\
set oColl = CreateObject( \"XSI.Collection\" ) \n\
oColl.SetAsText strSelection \n\
Application.LogMessage \"Contents of XSICollection: \" &amp; oColl.GetAsText\n\
\' RESULTS\n\
\'INFO : Current selection: arc,disc\n\
\'INFO : Contents of XSICollection: arc,disc</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";