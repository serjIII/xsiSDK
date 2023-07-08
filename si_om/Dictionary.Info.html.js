var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Dictionary.Info</title>\n\
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
            <h1>Dictionary.Info</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Dictionary.html\">Dictionary</a>.Info</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns a description of object or family. If the family is specified then a list \n\
of all objects in the family is returned. If neither object nor family are supplied then a list \n\
of all families is returned.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>String Dictionary.Info( String in_bszObject, String in_bszFamily );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oString = Dictionary.Info( [Type], [Family] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./files/String.htm\">String</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Type		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Object type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Family		</td>\n\
		<td><a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
		<td>\n\
Family name		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' Get all information for Twist operator\n\
LogMessage Application.Dictionary.Info(\"Twist\")</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' Get list of all members if the Lattice family\n\
LogMessage Application.Dictionary.Info(,\"Operators\")</pre></td></tr>\n\
</table>\n\
</div><h4>3. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' Get all information for all members of the Curve family\n\
\'***********************************\n\
\'	Declarations\n\
\'\n\
Option Explicit\n\
Dim sList		\' container for list of curves\n\
Dim aCurves		\' arrays of curves in list\n\
Dim i			\' for looping through list\n\
Dim sName		\' name of indiv. curves\n\
Dim sInfo		\' container for info\n\
\'***********************************\n\
\'	Get Curve information \n\
\'\n\
\' Store list of curves in string container\n\
sList = Dictionary.Info( ,siCurveFamily )\n\
\' Convert the list to an array of curves\n\
aCurves = Split( sList, \", \", -1, vbTextCompare )\n\
\' Write header to History log\n\
LogMessage \"=======================================\"\n\
LogMessage \"	CURVE INFORMATION                \"\n\
LogMessage \"---------------------------------------\"\n\
\' Run through the collection to get the info for each item\n\
For i = 0 to UBound(aCurves)\n\
	LogMessage \"---------------------------------------\"\n\
	\' Set up name of current operator\n\
	sName = aCurves(i)\n\
	\' Based on curve name, get all dictionary info\n\
	sInfo = dictionary.info( sName )\n\
	\' Write info to History log\n\
	LogMessage sInfo\n\
Next \n\
\'***********************************\n\
\'	Output\n\
\'\n\
\'INFO : \"=======================================\"\n\
\'INFO : \"	CURVE INFORMATION                \"\n\
\'INFO : \"---------------------------------------\"\n\
\'INFO : \"---------------------------------------\"\n\
\'INFO : \"Circle\n\
\'Families = Geometry, Curves, Geometries\n\
\'\"\n\
\'INFO : \"---------------------------------------\"\n\
\'INFO : \"Arc\n\
\'Families = Geometry, Curves, Geometries\n\
\'\"\n\
\'INFO : \"---------------------------------------\"\n\
\'INFO : \"Spiral\n\
\'Families = Geometry, Curves, Geometries\n\
\'\"\n\
\'INFO : \"---------------------------------------\"\n\
\'INFO : \"Square\n\
\'Families = Geometry, Curves, Geometries\n\
\'\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";