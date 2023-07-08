var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSICollection.RemoveItems</title>\n\
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
            <h1>XSICollection.RemoveItems</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a>.RemoveItems</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Removes one or more items to the collection. Compare this method to \n\
<a href=\"#!/url=./si_om/XSICollection.Remove.html\">XSICollection.Remove</a>, which only removes a single item \n\
at a time and <a href=\"#!/url=./si_om/XSICollection.RemoveAll.html\">XSICollection.RemoveAll</a> which empties \n\
the collection completely.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Object XSICollection.RemoveItems( Object in_newVal );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = XSICollection.RemoveItems( Items );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>The removed items as an <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a>.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Items		</td>\n\
		<td><a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a>, <a href=\"#!/url=./files/Array.htm\">Array</a> or <a href=\"#!/url=./files/objectexpr.htm\">object name</a>		</td>\n\
		<td>\n\
The items to remove. 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">Dim oColl1		\' object pointer for first collection\n\
Dim oColl2		\' object pointer for second collection\n\
Dim aItems		\' array of items to add all at once\n\
\' Create the first collection &amp; populate it \n\
Set oColl1 = CreateObject( \"XSI.Collection\" )\n\
oColl1.SetAsText \"Camera,Light\"\n\
checkContents oColl1\n\
\' Create the second collection &amp; populate it \n\
LogMessage \"----------------\"\n\
Set oColl2 = CreateObject( \"XSI.Collection\" )\n\
oColl2.AddItems oColl1\n\
\' Since the Unique property hasn\'t been set to True, we can \n\
\' add another instance of the camera to the collection\n\
oColl2.Add \"Camera\"\n\
checkContents oColl2\n\
\' Remove the light and one instance of the camera\n\
LogMessage \"----------------\"\n\
oColl2.RemoveItems oColl1\n\
checkContents oColl2\n\
\'--------------------------------------------------\n\
function checkContents( in_coll )\n\
	If in_coll.Count &gt; 0 Then\n\
		LogMessage \"Collection now contains \" &amp; in_coll.GetAsText \n\
	Else\n\
		LogMessage \"Collection is empty.\"\n\
	End If\n\
end function\n\
\'--------------------------------------------------\n\
\' Output of above script:\n\
\'INFO : \"Collection now contains Camera,light\"\n\
\'INFO : \"----------------\"\n\
\'INFO : \"Collection now contains Camera,light,Camera\"\n\
\'INFO : \"----------------\"\n\
\'INFO : \"Collection now contains Camera\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to split a collection into 2\n\
*/\n\
NewScene( null, false );\n\
// ----------------------------------------------------\n\
// Create a collection &amp; populate it\n\
var oFolks = new ActiveXObject( \"XSI.Collection\" );\n\
var oSammy = ActiveSceneRoot.AddNull( \"Sammy\" );\n\
oFolks.Add( oSammy );\n\
var oRoger = ActiveSceneRoot.AddNull( \"Roger\" );\n\
oFolks.Add( oRoger );\n\
var oBelinda = ActiveSceneRoot.AddNull( \"Belinda\" );\n\
oFolks.Add( oBelinda );\n\
var oAgnes = ActiveSceneRoot.AddNull( \"Agnes\" );\n\
oFolks.Add( oAgnes );\n\
// This will tell us that Sammy, Roger, Belinda, and Agnes\n\
// are all members of the folks collection\n\
checkContents( oFolks, \"oFolks\" );\n\
Application.LogMessage( \"----------------\" );\n\
// ----------------------------------------------------\n\
// Remove Sammy and Roger and save the removed ones\n\
// in another collection, leaving the original with the\n\
// two women and the new collection with two men\n\
var oMen = oFolks.RemoveItems( \"Sammy,Roger\" );\n\
checkContents( oFolks, \"oFolks\" );\n\
checkContents( oMen, \"oMen\" );\n\
//--------------------------------------------------\n\
function checkContents( in_coll, in_id )\n\
{\n\
	if ( in_coll.Count &gt; 0 )\n\
	{\n\
		LogMessage( in_id + \" collection contains: \" + in_coll.GetAsText() );\n\
	}\n\
	else\n\
	{\n\
		Application.LogMessage( in_id + \" collection is empty.\" );\n\
	}\n\
}\n\
//--------------------------------------------------\n\
// Output of above script:\n\
//INFO : \"oFolks collection contains: Sammy,Roger,Belinda,Agnes\"\n\
//INFO : \"----------------\"\n\
//INFO : \"oFolks collection contains: Belinda,Agnes\"\n\
//INFO : \"oMen collection contains: Sammy,Roger\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/XSICollection.Unique.html\">XSICollection.Unique</a> <a href=\"#!/url=./si_om/XSICollection.Remove.html\">XSICollection.Remove</a> <a href=\"#!/url=./si_om/XSICollection.RemoveAll.html\">XSICollection.RemoveAll</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";