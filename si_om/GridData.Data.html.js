var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>GridData.Data</title>\n\
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
            <h1>GridData.Data</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/GridData.html\">GridData</a>.Data <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns or sets the entire 2-dimensional array of cell data.  The data is\n\
represented in a 2-dimensional SAFEARRAY of <a href=\"#!/url=./files/Variant.htm\">Variant</a>s.  \n\
<br /><br />\n\
The first dimension is the column and the second dimension is the row.\n\
<br /><br />\n\
Provided that the\n\
<a href=\"#!/url=./si_om/GridData.RowCount.html\">GridData.RowCount</a> and <a href=\"#!/url=./si_om/GridData.ColumnCount.html\">GridData.ColumnCount</a>\n\
have been previously set, it is also possible to set the property with\n\
a 1-dimensional SAFEARRAY or with a JScript <a href=\"#!/url=./files/Array.htm\">Array</a>.  In this\n\
case the array must contain Row * Column items and the data is\n\
interpreted to be ordered row by row rather than column by column.\n\
<br /><br />\n\
Using this property it is possible to manipulate data from any Softimage method\n\
which returns a 2-dimensional array, for example <a href=\"#!/url=./si_om/ClusterProperty.html\">ClusterProperty</a> data.\n\
This is demonstrated in one of the examples. \n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Object rtn = GridData.Data;\n\
// set accessor\n\
GridData.Data = Object;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'Demonstrate setting data with the GridData.Data method\n\
set oGridData = XSIFactory.CreateGridData\n\
\'Create an array with 2 columns\n\
\'and 4 rows.  \n\
dim mydata( 1, 3 )\n\
\'Initialize the data (we leave one row empty)\n\
mydata( 0, 0 ) = 12000\n\
mydata( 1, 0 ) = \"Col1Row0\"\n\
mydata( 0, 1 ) = \"Col0Row1\"\n\
mydata( 1, 1 ) = 4.567\n\
mydata( 0, 3 ) = \"Col0Row3\"\n\
mydata( 1, 3 ) = Now 	\'Store current time\n\
\'It is not necessary to set the \n\
\'rows and columns if we provide a complete\n\
\'2D array\n\
oGridData.Data = mydata\n\
logmessage \"Columns: \" &amp; oGridData.ColumnCount &amp; _\n\
	\" Rows: \" &amp; oGridData.RowCount\n\
logmessage \"Data contents:\"\n\
\'Print out the table of items\n\
dim i\n\
for i = 0 to oGridData.RowCount - 1\n\
	logmessage oGridData.GetCell( 0, i ) &amp; vbTab &amp; vbTab &amp; vbTab &amp; _\n\
		oGridData.GetCell( 1, i )\n\
next \n\
\' Output of this script is the following\n\
\' (the date on the last line will change each time it is run)\n\
\'\n\
\'INFO : \"Columns: 2 Rows: 4\"\n\
\'INFO : \"Data contents:\"\n\
\'INFO : \"12000			Col1Row0\"\n\
\'INFO : \"Col0Row1			4.567\"\n\
\'INFO : \"			\"\n\
\'INFO : \"Col0Row3			8/27/2003 11:18:12\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">//Demonstrate setting data with the GridData.Data method\n\
var oGridData = XSIFactory.CreateGridData();\n\
//In jscript we have no 2-D array but we\n\
//can provide a 1-D array and tell the GridData how\n\
//to interprete it\n\
var myData = new Array( 8 );\n\
//Initialize the data (we leave one row empty)\n\
myData[ 0 ] = 12000;\n\
myData[ 1 ] = \"Col1Row0\";\n\
myData[ 2 ] = \"Col0Row1\";\n\
myData[ 3 ] = 4.567;\n\
myData[ 6 ] = \"Col0Row3\";\n\
myData[ 7 ] = new Date(); 	//Store current time\n\
oGridData.RowCount = 4 ;\n\
oGridData.ColumnCount = 2 ;\n\
oGridData.Data = myData ;\n\
logmessage( \"Columns: \" + oGridData.ColumnCount + \n\
	\" Rows: \" + oGridData.RowCount ) ;\n\
logmessage( \"Data contents:\" ) ;\n\
//Print out the table of items\n\
for ( var i = 0 ; i &lt; oGridData.RowCount ; i++ )\n\
{\n\
	logmessage( oGridData.GetCell( 0, i ) + \"\\t\\t\\t\" + \n\
				  oGridData.GetCell( 1, i ) ) ;\n\
}\n\
//Output of this script is the following\n\
//(the date on the last line will change each time it is run)\n\
//\n\
//INFO : \"Columns: 2 Rows: 4\"\n\
//INFO : \"Data contents:\"\n\
//INFO : \"12000			Col1Row0\"\n\
//INFO : \"Col0Row1			4.567\"\n\
//INFO : \"undefined			undefined\"\n\
//INFO : \"Col0Row3			Wed Aug 27 11:25:29 EDT 2003\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/GridData.SetColumnValues.html\">GridData.SetColumnValues</a> <a href=\"#!/url=./si_om/GridData.SetRowValues.html\">GridData.SetRowValues</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";