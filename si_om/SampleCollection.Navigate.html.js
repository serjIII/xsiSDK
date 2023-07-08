var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SampleCollection.Navigate</title>\n\
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
            <h1>SampleCollection.Navigate</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/SampleCollection.html\">SampleCollection</a>.Navigate</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v3.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Allows you to navigate through the samples of the associated geometry. This method\n\
returns one <a href=\"#!/url=./si_om/Sample.html\">Sample</a> for each corresponding component in the collection. \n\
For example, if you have a <a href=\"#!/url=./si_om/SampleCollection.html\">SampleCollection</a> containing 5 members and \n\
you call this method with the direction set to siLastComponent, the returned collection \n\
will contain 5 instances of the last sample in the original SampleCollection.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SampleCollection SampleCollection.Navigate( siNavigateComponentType in_siNavigate );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = SampleCollection.Navigate( Navigation );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/SampleCollection.html\">SampleCollection</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Navigation		</td>\n\
		<td><a href=\"#!/url=./si_om/siNavigateComponentType.html\">siNavigateComponentType</a>		</td>\n\
		<td>\n\
 Select the direction of navigation.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">var obj = ActiveSceneRoot.AddGeometry( \"Cube\", \"MeshSurface\" );\n\
var samplelist = obj.ActivePrimitive.Geometry.Facets(2).Samples;\n\
var results = \"\";\n\
var fs = new Enumerator( samplelist.Navigate(siFirstComponent) );\n\
for ( ; ! fs.atEnd(); fs.moveNext() ) {\n\
	var firstsample = fs.item();\n\
	results += firstsample.Index + \" \";\n\
}\n\
LogMessage( \"The associated first samples are \" + results );\n\
results = \"\";\n\
var ls = new Enumerator( samplelist.Navigate(siLastComponent) );\n\
for ( ; ! ls.atEnd(); ls.moveNext() ) {\n\
	var lastsample = ls.item();\n\
	results += lastsample.Index + \" \";\n\
}\n\
LogMessage( \"The associated last samples are \" + results );\n\
results = \"\";\n\
var ns = new Enumerator( samplelist.Navigate(siNextComponent) );\n\
for ( ; ! ns.atEnd(); ns.moveNext() ) {\n\
	var nextsample = ns.item();\n\
	results += nextsample.Index + \" \";\n\
}\n\
LogMessage( \"The associated next samples are \" + results );\n\
results = \"\";\n\
var ps = new Enumerator( samplelist.Navigate(siPreviousComponent) );\n\
for ( ; ! ps.atEnd(); ps.moveNext() ) {\n\
	var prevsample = ps.item();\n\
	results += prevsample.Index + \" \";\n\
}\n\
LogMessage( \"The associated previous samples are \" + results );\n\
// Expected results:\n\
//INFO : The associated first samples are 0 0 0 0 \n\
//INFO : The associated last samples are 23 23 23 23 \n\
//INFO : The associated next samples are 9 10 11 12 \n\
//INFO : The associated previous samples are 7 8 9 10</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Sample.Navigate.html\">Sample.Navigate</a> <a href=\"#!/url=./si_om/Geometry.Samples.html\">Geometry.Samples</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";