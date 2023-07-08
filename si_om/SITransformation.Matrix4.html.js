var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SITransformation.Matrix4</title>\n\
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
            <h1>SITransformation.Matrix4</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/SITransformation.html\">SITransformation</a>.Matrix4</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.1</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Sets or returns the <a href=\"#!/url=./si_om/SIMatrix4.html\">SIMatrix4</a> representation of the values of this transformation \n\
(the matrix is created automatically).\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
SIMatrix4 rtn = ISITransformation.Matrix4;\n\
// set accessor\n\
ISITransformation.Matrix4 = SIMatrix4;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to use the Matrix4 property to return the matrix representation \n\
	of the transformation as an SIMatrix4 (without having to explicitly create it first) as well as \n\
	how to set new values for the transformation using a 4x4 matrix.\n\
*/\n\
var t1 = XSIMath.CreateTransform();\n\
// The Matrix4 property takes care of creating oMat4 as an SIMatrix4 of the transformation\n\
var oMat4 = t1.Matrix4;\n\
// Now set some values on the matrix and then save it back onto the transformation\n\
oMat4.Set(4.0, 0.0, 0.0, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 1.0);\n\
t1.Matrix4 = oMat4;\n\
// Get a new matrix\n\
var oMat4Dest = t1.Matrix4;\n\
vbArr = new VBArray( oMat4Dest.Get2() );\n\
jsArr = vbArr.toArray();\n\
// Display Matrix\n\
var lineSize = 4;\n\
Application.LogMessage( \"The 16 matrix values\" );\n\
for ( i=0; i&lt;lineSize; i++ ) {\n\
	var mgsString  = \"\";\n\
	for ( j=0; j&lt;lineSize; j++ ) {\n\
		mgsString += \"m\" + i + \"\" + j + \" \" + jsArr[ i*lineSize + j ] + \"  \";\n\
	}\n\
	Application.LogMessage ( mgsString );\n\
}\n\
// Expected results:\n\
//INFO : The 16 matrix values\n\
//INFO : m00 4  m01 0  m02 0  m03 0  \n\
//INFO : m10 0  m11 3  m12 0  m13 0  \n\
//INFO : m20 0  m21 0  m22 2  m23 0  \n\
//INFO : m30 0  m31 0  m32 0  m33 1</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/SITransformation.GetMatrix4.html\">SITransformation.GetMatrix4</a> <a href=\"#!/url=./si_om/SITransformation.SetMatrix4.html\">SITransformation.SetMatrix4</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";