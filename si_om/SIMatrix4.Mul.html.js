var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SIMatrix4.Mul</title>\n\
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
            <h1>SIMatrix4.Mul</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/SIMatrix4.html\">SIMatrix4</a>.Mul</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Right-multiplies the matrix m1 by the matrix m2 and stores the result into this matrix: this = m1 . m2\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SIMatrix4.Mul( SIMatrix4 in_pMatrix1, SIMatrix4 in_pMatrix2 );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SIMatrix4.Mul( m1, m2 );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">m1		</td>\n\
		<td><a href=\"#!/url=./si_om/SIMatrix4.html\">SIMatrix4</a>		</td>\n\
		<td>\n\
 Matrix operand 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">m2		</td>\n\
		<td><a href=\"#!/url=./si_om/SIMatrix4.html\">SIMatrix4</a>		</td>\n\
		<td>\n\
 Matrix operand 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	Example of Matrix multiplication\n\
*/\n\
var m1 = XSIMath.CreateMatrix4( 1.0,  2.0, 3.0, 4.0, \n\
	                               5.0,  6.0, 7.0, 8.0, \n\
		                           9.0, 10.0,11.0,12.0, \n\
	 	                           13.0,14.0,15.0,16.0 );\n\
var m2 = XSIMath.CreateMatrix4( 1.0,  0.0, 0.0, 0.0, \n\
	                               0.0,  0.0, 1.0, 0.0, \n\
		                           0.0,  1.0, 0.0, 0.0, \n\
	 	                           0.0,  0.0, 0.0, 1.0 ) ;\n\
var m3 = XSIMath.CreateMatrix4();\n\
var m4 = XSIMath.CreateMatrix4();\n\
// The m2 matrix will swap 2 and 3rd rows\n\
// m3 is the composition of m1 and m2\n\
m3.Mul( m2, m1 ) ;\n\
Application.LogMessage( \"Multipled matrix\" ) ;\n\
PrintMatrix( m3 ) ;\n\
// m2 is invertible, so we can restore \n\
// the original matrix \n\
// (In fact this is not necessary\n\
// because inversion of m2 = m2)\n\
m2.InvertInPlace()  ;\n\
PrintMatrix( m2 ) ;\n\
m4.Mul( m2, m3 ) ;\n\
Application.LogMessage( \"Restored matrix\" ) ;\n\
PrintMatrix( m4 ) ;\n\
function PrintMatrix( oMatrix4 )\n\
{\n\
	for ( var row = 0 ; row &lt; 4 ; row++ )\n\
	{	\n\
		strLine = \"\" ;\n\
		for( var col = 0 ; col &lt; 4 ; col++ )\n\
		{\n\
			strLine += oMatrix4.Value( row, col ) + \"\\t\\t\";\n\
		}\n\
		Application.LogMessage( strLine ) ;\n\
	}\n\
}\n\
//INFO : Multipled matrix\n\
//INFO : 1		2		3		4		\n\
//INFO : 9		10		11		12		\n\
//INFO : 5		6		7		8		\n\
//INFO : 13		14		15		16		\n\
//INFO : Restored matrix\n\
//INFO : 1		2		3		4		\n\
//INFO : 5		6		7		8		\n\
//INFO : 9		10		11		12		\n\
//INFO : 13		14		15		16</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example demonstrates how to multiply two\n\
\' 4x4 matrices and store the result in a third\n\
\'\n\
dim m1 : set m1 = XSIMath.CreateMatrix4(_\n\
	1.0, 0.0, 0.0, 0.0, _\n\
	0.0, 2.0, 0.0, 0.0, _\n\
	0.0, 0.0, 3.0, 0.0, _\n\
	0.0, 0.0, 0.0, 1.0) \n\
dim m2 : set m2 = XSIMath.CreateMatrix4(_\n\
	4.0, 0.0, 0.0, 0.0, _\n\
	0.0, 3.0, 0.0, 0.0, _\n\
	0.0, 0.0, 2.0, 0.0, _\n\
	0.0, 0.0, 0.0, 1.0)\n\
dim m3 : set m3 = XSIMath.CreateMatrix4\n\
m3.Mul m1, m2</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/SIMatrix4.MulInPlace.html\">SIMatrix4.MulInPlace</a> <a href=\"#!/url=./si_om/SIVector3.html\">SIVector3</a> <a href=\"#!/url=./si_om/SIMatrix3.html\">SIMatrix3</a> <a href=\"#!/url=./si_om/SIMatrix4.html\">SIMatrix4</a> <a href=\"#!/url=./si_om/SIRotation.html\">SIRotation</a> <a href=\"#!/url=./si_om/SITransformation.html\">SITransformation</a> <a href=\"#!/url=./si_om/SIQuaternion.html\">SIQuaternion</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";