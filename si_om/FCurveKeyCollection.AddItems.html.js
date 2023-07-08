var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>FCurveKeyCollection.AddItems</title>\n\
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
            <h1>FCurveKeyCollection.AddItems</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/FCurveKeyCollection.html\">FCurveKeyCollection</a>.AddItems</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v6.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>Adds an <a href=\"#!/url=./si_om/FCurveKeyCollection.html\">FCurveKeyCollection</a> to an existing collection.\n\
The keys will be added to the collection if they belong to the same <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a>\n\
as the other keys in the collection. Any keys in the input collection that are already\n\
present in the existing collection will be ignored.<br /><br />\n\
Note: FCurveKeyCollection is maintained in sorted order by parameter so new keys\n\
will be inserted at the proper location according to their parameter values.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>FCurveKeyCollection.AddItems( FCurveKeyCollection in_pVal );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>FCurveKeyCollection.AddItems( Keys );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Keys		</td>\n\
		<td><a href=\"#!/url=./si_om/FCurveKeyCollection.html\">FCurveKeyCollection</a>		</td>\n\
		<td>\n\
Keys to add to this collection		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// \n\
// This example illustrates how to add keys to an existing FCurveKeyCollection.\n\
// Create a new scene\n\
NewScene(null, false);\n\
// Create a null\n\
oNull = Application.GetPrim(\"Null\");\n\
// Get the posx parameter of the null\n\
oPosX = oNull.posx\n\
// Create array of time-value pairs\n\
aKeys = new Array( 0.00, 5.00,\n\
				1.00, 6.00,\n\
				2.00, 7.00,\n\
				3.00, 8.00,\n\
				4.00, 9.00,\n\
				5.00, 10.00 );\n\
// Create an empty FCurve\n\
oFCurve = oPosX.AddFCurve2( null, siStandardFCurve );\n\
// Set the fcurve keys\n\
oFCurve.SetKeys( aKeys );\n\
// Get two key collections\n\
var keys = oFCurve.GetKeysBetween( 4, 5 );\n\
var keys2 = oFCurve.GetKeysBetween( 0, 1 );\n\
// Merge the two collections\n\
keys.AddItems( keys2 );\n\
// Print out the contents of the collection\n\
for (var i = 0; i &lt; keys.Count; i++) \n\
{\n\
	Application.LogMessage( \'Time: \' + keys(i).Time + \', Value: \' + keys(i).Value, siInfo );\n\
}\n\
// Produces the following output:\n\
//\n\
//INFO : Time: 0, Value: 5\n\
//INFO : Time: 1, Value: 6\n\
//INFO : Time: 4, Value: 9\n\
//INFO : Time: 5, Value: 10</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/FCurveKeyCollection.Add.html\">FCurveKeyCollection.Add</a> <a href=\"#!/url=./si_om/FCurveKeyCollection.Remove.html\">FCurveKeyCollection.Remove</a> <a href=\"#!/url=./si_om/FCurveKeyCollection.RemoveAt.html\">FCurveKeyCollection.RemoveAt</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";