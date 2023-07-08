var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSIMath.CreateMatrix3</title>\n\
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
            <h1>XSIMath.CreateMatrix3</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/XSIMath.html\">XSIMath</a>.CreateMatrix3</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>Returns a <a href=\"#!/url=./si_om/SIMatrix3.html\">SIMatrix3</a> object, the values of this \n\
	matrix3 can be set at creation time from an array (1d or 2d) or by 9 values.<br /><br />\n\
	| m0 m1  m2 |<br /><br />\n\
	| m3 m4  m5 |<br /><br />\n\
	| m6 m7  m8 |<br /><br /></p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SIMatrix3 XSIMath.CreateMatrix3( Object in_d0, Object in_d1, Object in_d2, Object in_d3, Object in_d4, Object in_d5, Object in_d6, Object in_d7, Object in_d8 );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = XSIMath.CreateMatrix3( [m0_or_Array], [m1], [m2], [m3], [m4], [m5], [m6], [m7], [m8] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/SIMatrix3.html\">SIMatrix3</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">m0_or_Array		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a> or <a href=\"#!/url=./files/Array.htm\">Array</a>		</td>\n\
		<td>\n\
The m0 value or an array (1d or 2d) containing the 9 values.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">m1		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
The m1 value.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">m2		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
The m2 value.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">m3		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
The m3 value.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">m4		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
The m4 value.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">m5		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
The m5 value.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">m6		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
The m6 value.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">m7		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
The m7 value.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">m8		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
The m8 value.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/* Set and display the values of a matrix3\n\
*/\n\
var oMat3 = XSIMath.CreateMatrix3 (4.0, 0.0, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0, 2.0);\n\
vbArr = new VBArray( oMat3.Get2() );\n\
array = vbArr.toArray();\n\
var lineSize = 3;\n\
//Display Matrix\n\
Application.LogMessage( \"The 9 matrix values\" );\n\
var mgsString = \"\";\n\
for (i =0; i &lt; lineSize; i++ )\n\
{\n\
	for (j = 0; j &lt; lineSize; j++ )\n\
		mgsString += \"m\" + i + \"\" + j + \" \" + array[ i*lineSize + j ] + \"  \";\n\
	Application.LogMessage ( mgsString );\n\
	mgsString = \"\";\n\
}	\n\
//Expected output:\n\
//INFO : The 9 matrix values\n\
//INFO : m00 4  m01 0  m02 0  \n\
//INFO : m10 0  m11 3  m12 0  \n\
//INFO : m20 0  m21 0  m22 2</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'test 2d matrix\n\
dim aValues2d( 3, 3)\n\
aValues2d(0,0) = 1.1\n\
aValues2d(0,1) = 2\n\
aValues2d(0,2) = 3\n\
aValues2d(1,0) = 4.2\n\
aValues2d(1,1) = 5\n\
aValues2d(1,2) = 6\n\
aValues2d(2,0) = 7.1\n\
aValues2d(2,1) = 8\n\
aValues2d(2,2) = 9\n\
set oMatArray2d = XSIMath.CreateMatrix3(aValues2d)\n\
lineSize = 3\n\
Application.LogMessage \"The 9 matrix values\"\n\
dim mgsString\n\
for i = 0 to lineSize - 1\n\
for j = 0 to lineSize - 1\n\
mgsString = mgsString + \" m\" &amp; i &amp; j &amp; \" \" &amp; oMatArray2d(i, j)\n\
next\n\
Application.LogMessage mgsString\n\
mgsString = \"\"\n\
next\n\
\'Expected output:\n\
\'INFO : The 9 matrix values\n\
\'INFO :  m00 1.1 m01 2 m02 3\n\
\'INFO :  m10 4.2 m11 5 m12 6\n\
\'INFO :  m20 7.1 m21 8 m22 9</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";