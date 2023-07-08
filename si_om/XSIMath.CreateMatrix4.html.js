var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSIMath.CreateMatrix4</title>\n\
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
            <h1>XSIMath.CreateMatrix4</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/XSIMath.html\">XSIMath</a>.CreateMatrix4</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>Returns a <a href=\"#!/url=./si_om/SIMatrix4.html\">SIMatrix4</a> object, the values of this \n\
	matrix4 can be set at creation time from an array (1d or 2d) or by 16 values.<br /><br />\n\
	| m0  m1  m2  m3  |<br /><br />\n\
	| m4  m5  m6  m7  |<br /><br />\n\
	| m8  m9  m10 m11 |<br /><br />\n\
	| m12 m13 m14 m15 |<br /><br /></p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SIMatrix4 XSIMath.CreateMatrix4( Object in_d0, Object in_d1, Object in_d2, Object in_d3, Object in_d4, Object in_d5, Object in_d6, Object in_d7, Object in_d8, Object in_d9, Object in_d10, Object in_d11, Object in_d12, Object in_d13, Object in_d14, Object in_d15 );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = XSIMath.CreateMatrix4( [m0], [m1], [m2], [m3], [m4], [m5], [m6], [m7], [m8], [m9], [m10], [m11], [m12], [m13], [m14], [m15] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/SIMatrix4.html\">SIMatrix4</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">m0		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>  or <a href=\"#!/url=./files/Array.htm\">Array</a>		</td>\n\
		<td>\n\
The m0 value or an array (1d or 2d) containing the 16 values.		</td>\n\
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
	<tr>\n\
		<td class=\"name\">m9		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
The m9 value.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">m10		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
The m10 value.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">m11		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
The m11 value.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">m12		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
The m12 value.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">m13		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
The m13 value.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">m14		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
The m14 value.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">m15		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
The m15 value.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/* Set and display the values of a matrix4\n\
*/\n\
var arrayInit = new Array (16)\n\
arrayInit[0]  = 1.1;\n\
arrayInit[1]  = 2.31;\n\
arrayInit[2]  = 3.7;\n\
arrayInit[3]  = 4;\n\
arrayInit[4]  = 1.2;\n\
arrayInit[5]  = 2.28;\n\
arrayInit[6]  = 5.3;\n\
arrayInit[7]  = 2;\n\
arrayInit[8]  = 1.2;\n\
arrayInit[9]  = 2.88;\n\
arrayInit[10] = 3.4;\n\
arrayInit[11] = 9;\n\
arrayInit[12] = 1.9;\n\
arrayInit[13] = 2.89;\n\
arrayInit[14] = 3.5;\n\
arrayInit[15] = 5;\n\
var oMat4 = XSIMath.CreateMatrix4 (arrayInit);\n\
vbArr = new VBArray( oMat4.Get2() );\n\
array = vbArr.toArray();\n\
//Display Matrix\n\
var lineSize = 4;\n\
Application.LogMessage( \"The 16 matrix values\" );\n\
var mgsString = \"\";\n\
for (i =0; i &lt; lineSize; i++ )\n\
{\n\
for (j = 0; j &lt; lineSize; j++ )\n\
mgsString += \"m\" + i + \"\" + j + \" \" + array[ i*lineSize + j ] + \"  \";\n\
Application.LogMessage ( mgsString );\n\
mgsString = \"\";\n\
}		\n\
//Expected output:\n\
//INFO : The 16 matrix values\n\
//INFO : m00 1.1  m01 2.31  m02 3.7  m03 4  \n\
//INFO : m10 1.2  m11 2.28  m12 5.3  m13 2  \n\
//INFO : m20 1.2  m21 2.88  m22 3.4  m23 9  \n\
//INFO : m30 1.9  m31 2.89  m32 3.5  m33 5</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">set oMatrix4 = XSIMath.CreateMatrix4\n\
Application.LogMessage TypeName(oMatrix4)</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";