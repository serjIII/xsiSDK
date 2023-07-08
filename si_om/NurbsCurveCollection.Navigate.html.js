var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>NurbsCurveCollection.Navigate</title>\n\
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
            <h1>NurbsCurveCollection.Navigate</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/NurbsCurveCollection.html\">NurbsCurveCollection</a>.Navigate</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v3.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Allows you to navigate through the <a href=\"#!/url=./si_om/NurbsCurve.html\">NurbsCurve</a>s of the associated geometry. This method\n\
returns one NurbsCurve for each corresponding component in the collection. For example, if you have a \n\
NurbsCurveCollection containing 5 curves and you call this method with the direction set to siLastComponent, \n\
the returned collection will contain 5 instances of the last curve in the original NurbsCurveCollection.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>NurbsCurveCollection NurbsCurveCollection.Navigate( siNavigateComponentType in_siNavigate );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = NurbsCurveCollection.Navigate( Navigation );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/NurbsCurveCollection.html\">NurbsCurveCollection</a></p></div>\n\
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
<td class=\"example\"><pre class=\"jscript\">NewScene( \"\", false );\n\
// Get a nurbs curve object\n\
var obj = ActiveSceneRoot.AddGeometry( \"Arc\", \"NurbsCurve\" );\n\
FreezeObj( obj );\n\
var crvlist = obj.ActivePrimitive.Geometry;\n\
var crv = crvlist.Curves(0);\n\
// Get a complete data description of the arc\n\
var VBdata = crv.Get2( siSiNurbs );					// returns a safearray\n\
var data = VBdata.toArray();					// convert the safearray to a JS array\n\
// For clarity, extract and store the data in separate variables\n\
var crtlvertices = data[0];\n\
var knots = data[1];\n\
var isclosed = data[2];\n\
var degree = data[3];\n\
var parameterization = data[4];\n\
// We want to make another 4 curves\n\
for ( times=0; times&lt;4; times++ ){\n\
	// Translate every controlvertex of the new curve from 5 in x\n\
	for ( var i=0; i&lt;crtlvertices.length; i=i+3 ) {\n\
		crtlvertices[i] = crtlvertices[i] + 5;\n\
	}\n\
	// Add a new nurbs curve using the modified data description\n\
	crvlist.AddCurve( crtlvertices, knots, isclosed, degree, parameterization );\n\
}\n\
// Now get the collection of all nurbs curves in the list\n\
var crvcoll = crvlist.Curves;\n\
var firstcrvs = crvcoll.Navigate( siFirstComponent );\n\
var fc = new Enumerator( firstcrvs ); var result = \"\";\n\
for ( ; ! fc.atEnd(); fc.moveNext() ) {\n\
	var crv = fc.item();\n\
	result += crv.Index + \"\\t\";\n\
}\n\
LogMessage( \"The associated first curves are    \\t\" + result );\n\
var lastcrvs = crvcoll.Navigate( siLastComponent );\n\
var lc = new Enumerator( lastcrvs ); result = \"\"\n\
for ( ; ! lc.atEnd(); lc.moveNext() ) {\n\
	var crv = lc.item();\n\
	result += crv.Index + \"\\t\";\n\
}\n\
LogMessage( \"The associated last curves are     \\t\" + result );\n\
var nextcrvs = crvcoll.Navigate( siNextComponent );\n\
var nc = new Enumerator( nextcrvs ); result = \"\"\n\
for ( ; ! nc.atEnd(); nc.moveNext() ) {\n\
	var crv = nc.item();\n\
	result += crv.Index + \"\\t\";\n\
}\n\
LogMessage( \"The associated next curves are     \\t\" + result );\n\
var prevcrvs = crvcoll.Navigate( siPreviousComponent );\n\
var pc = new Enumerator( prevcrvs ); result = \"\"\n\
for ( ; ! pc.atEnd(); pc.moveNext() ) {\n\
	var crv = pc.item();\n\
	result += crv.Index + \"\\t\";\n\
}\n\
LogMessage( \"The associated previous curves are \\t\" + result );\n\
// Expected result:\n\
//INFO : The associated first curves are    	0	0	0	0	0	\n\
//INFO : The associated last curves are     	4	4	4	4	4	\n\
//INFO : The associated next curves are     	1	2	3	4	0	\n\
//INFO : The associated previous curves are 	4	0	1	2	3</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/NurbsCurve.Navigate.html\">NurbsCurve.Navigate</a> <a href=\"#!/url=./si_om/NurbsCurveList.Curves.html\">NurbsCurveList.Curves</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";