var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSIUtils.QuickSort</title>\n\
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
            <h1>XSIUtils.QuickSort</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/XSIUtils.html\">XSIUtils</a>.QuickSort</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Performs an in-place QuickSort of an array (which can be multi-dimensional). The sort \n\
is performed on the first element of each dimension. If the first elements are equal, then \n\
the second elements are compared, and so on.<br /><br />\n\
There are several types of sorting algorithms, such as BubbleSort, QuickSort,\n\
Insertion, Shaker, and Selection. The QuickSort algorithm is very good at sorting \n\
large amounts of data efficiently. It basically uses a divide-and-conquer approach. <br /><br />\n\
Note: This method invokes the built-in JScript sort method when the Array argument \n\
is a Jscript array.   The\n\
JScript sort method uses a case-sensitive text-based \n\
ordering, which is not likely to be the intended result when sorting numeric data. \n\
A workaround is demonstrated in the examples below.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>XSIUtils.QuickSort( Object& io_Array );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>XSIUtils.QuickSort( Array );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Array		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a>		</td>\n\
		<td>\n\
 The array to sort. 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example demonstrates how to sort an array with the QuickSort method. \n\
\'\n\
Dim aValues\n\
aValues = array(8,1,9,4,6)\n\
XSIUtils.QuickSort aValues\n\
for each item in aValues\n\
	Application.LogMessage item \n\
next\n\
\' Expected result:\n\
\'INFO : \"1\"\n\
\'INFO : \"4\"\n\
\'INFO : \"6\"\n\
\'INFO : \"8\"\n\
\'INFO : \"9\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
# This example demonstrates how to sort an array with the QuickSort method. \n\
#\n\
aValues = [8,1,9,4,6]\n\
aValues = XSIUtils.QuickSort(aValues)\n\
for item in aValues:\n\
	Application.LogMessage( \'%(item)d\'%vars() )\n\
# Expected result:\n\
#INFO : \"1\"\n\
#INFO : \"4\"\n\
#INFO : \"6\"\n\
#INFO : \"8\"\n\
#INFO : \"9\"</pre></td></tr>\n\
</table>\n\
</div><h4>3. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'VBScript example : sort of a 2 dimension array\n\
Dim TestArray()\n\
ReDim TestArray(4, 4)\n\
TestArray(0, 0) = -1.9\n\
TestArray(1, 0) = 8\n\
TestArray(2,0) = 4\n\
TestArray(3,0) = 543\n\
TestArray(4,0) = 0\n\
TestArray(0, 1) = 3.2\n\
TestArray(1, 1) = 5\n\
TestArray(2,1) = -100\n\
TestArray(3,1) = 99\n\
TestArray(4,1) = 2\n\
TestArray(0, 2) = 10.3\n\
TestArray(1, 2) = 7\n\
TestArray(2,2) = 6\n\
TestArray(3,2) = 5\n\
TestArray(4,2) = 4\n\
TestArray(0, 3) = 3.2\n\
TestArray(1, 3) = 9\n\
TestArray(2,3) = 2\n\
TestArray(3,3) = 3\n\
TestArray(4,3) = 4\n\
TestArray(0, 4) = -5.4\n\
TestArray(1, 4) = 2\n\
TestArray(2,4) = 1000\n\
TestArray(3,4) = 500\n\
TestArray(4,4) = 2000\n\
Application.LogMessage \"Array before sort : \"\n\
Application.LogMessage TestArray(0, 0) &amp; \" \" &amp; TestArray(1, 0) &amp; \" \" &amp; TestArray(2, 0) &amp; \" \" &amp; TestArray(3, 0) &amp; \" \" &amp; TestArray(4, 0)\n\
Application.LogMessage TestArray(0, 1) &amp; \" \" &amp; TestArray(1, 1) &amp; \" \" &amp; TestArray(2, 1) &amp; \" \" &amp; TestArray(3, 1) &amp; \" \" &amp; TestArray(4, 1)\n\
Application.LogMessage TestArray(0, 2) &amp; \" \" &amp; TestArray(1, 2) &amp; \" \" &amp; TestArray(2, 2) &amp; \" \" &amp; TestArray(3, 2) &amp; \" \" &amp; TestArray(4, 2)\n\
Application.LogMessage TestArray(0, 3) &amp; \" \" &amp; TestArray(1, 3) &amp; \" \" &amp; TestArray(2, 3) &amp; \" \" &amp; TestArray(3, 3) &amp; \" \" &amp; TestArray(4, 3)\n\
Application.LogMessage TestArray(0, 4) &amp; \" \" &amp; TestArray(1, 4) &amp; \" \" &amp; TestArray(2, 4) &amp; \" \" &amp; TestArray(3, 4) &amp; \" \" &amp; TestArray(4, 4)\n\
XSIUtils.QuickSort TestArray\n\
Application.LogMessage \"Array after sort : \"\n\
Application.LogMessage TestArray(0, 0) &amp; \" \" &amp; TestArray(1, 0) &amp; \" \" &amp; TestArray(2, 0) &amp; \" \" &amp; TestArray(3, 0) &amp; \" \" &amp; TestArray(4, 0)\n\
Application.LogMessage TestArray(0, 1) &amp; \" \" &amp; TestArray(1, 1) &amp; \" \" &amp; TestArray(2, 1) &amp; \" \" &amp; TestArray(3, 1) &amp; \" \" &amp; TestArray(4, 1)\n\
Application.LogMessage TestArray(0, 2) &amp; \" \" &amp; TestArray(1, 2) &amp; \" \" &amp; TestArray(2, 2) &amp; \" \" &amp; TestArray(3, 2) &amp; \" \" &amp; TestArray(4, 2)\n\
Application.LogMessage TestArray(0, 3) &amp; \" \" &amp; TestArray(1, 3) &amp; \" \" &amp; TestArray(2, 3) &amp; \" \" &amp; TestArray(3, 3) &amp; \" \" &amp; TestArray(4, 3)\n\
Application.LogMessage TestArray(0, 4) &amp; \" \" &amp; TestArray(1, 4) &amp; \" \" &amp; TestArray(2, 4) &amp; \" \" &amp; TestArray(3, 4) &amp; \" \" &amp; TestArray(4, 4)</pre></td></tr>\n\
</table>\n\
</div><h4>4. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// This example demonstrates using XSIUtils.Sort\n\
// with a JScript error.\n\
a = new Array( \"C\", \"a\", \"Check\", \"Z\", \"zed\" ) ;\n\
logmessage(\"before: a=[\" + a + \"]\");\n\
// This is identical to calling a.sort(); \n\
XSIUtils.QuickSort(a);\n\
logmessage(\"after: a=[\" + a + \"]\");\n\
//Expected output (notice that the sort has\n\
//been performed in a case-sensitive fashion)\n\
//INFO : after: a=[C,Check,Z,a,zed]</pre></td></tr>\n\
</table>\n\
</div><h4>5. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// This example shows how better sort results\n\
// can be achieved by using the built-in JScript \n\
// array sorting algorithm.\n\
//\n\
//----------------------\n\
// MySortFunction is a function provided to the\n\
// sort method to implement the comparison function.\n\
//\n\
// As documented in the JScript documentation this \n\
// method must return:\n\
// -A negative value if the first argument passed is less than the second argument. \n\
// -Zero if the two arguments are equivalent. \n\
// -A positive value if the first argument is greater than the second argument\n\
//\n\
// In this basic example the sort function can sort strings\n\
// or numbers but does not expect a mix of both types and\n\
// does not sort other types of data.\n\
//----------------------\n\
function MySortFunction( a, b )\n\
{\n\
	if ( typeof( a ) == \"string\" )\n\
	{		\n\
		aLower = a.toLowerCase() ;\n\
		bLower = b.toLowerCase() ;\n\
		if ( aLower &lt; bLower )\n\
		{\n\
			return -1 ;\n\
		}\n\
		else if ( bLower &lt; aLower )\n\
		{\n\
			return 1 ;\n\
		}\n\
		return 0 ;\n\
	}\n\
	else if ( typeof( a ) == \"number\" )\n\
	{	\n\
		return a - b ;\n\
	}\n\
	else\n\
	{\n\
		throw( new Error( 0, \n\
				\"This function can only sort numbers and strings\" ) ) ;\n\
	}\n\
}\n\
// Demonstrate with strings\n\
testArray = new Array( \"C\", \"a\", \"Check\", \"Z\", \"zed\" ) ;\n\
testArray.sort( MySortFunction ) ;\n\
logmessage(\"after: testArray=[\" + testArray + \"]\");\n\
//Expected output\n\
//INFO : after: testArray=[a,C,Check,Z,zed]\n\
// Demonstrate with numbers\n\
testArray = new Array( 0.3, -1.9, 2, 1e10, 0 ) ;\n\
testArray.sort( MySortFunction ) ;\n\
logmessage(\"after: testArray=[\" + testArray + \"]\");\n\
//Expected output\n\
//INFO : after: testArray=[-1.9,0,0.3,2,10000000000]</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";