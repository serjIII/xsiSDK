var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SIMatrix4.Get2</title>\n\
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
            <h1>SIMatrix4.Get2</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/SIMatrix4.html\">SIMatrix4</a>.Get2</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns the 16 components of this matrix in an array. The values in the array are ordered the same as the \n\
<a href=\"#!/url=./si_om/SIMatrix4.Get.html\">SIMatrix4.Get</a> output parameters. This is the layout of the matrix:<br /><br />\n\
	| m0  m1  m2  m3  |<br /><br />\n\
	| m4  m5  m6  m7  |<br /><br />\n\
	| m8  m9  m10 m11 |<br /><br />\n\
	| m12 m13 m14 m15 |<br /><br />\n\
Note: This method must be used with scripting languages that don\'t support arguments passed by reference \n\
such as JScript. For more information on getting output arguments, see \n\
<a href=\"#!/url=./files/OutputArgArrays.htm\">About Output Argument Arrays</a>.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Object SIMatrix4.Get2();</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oArray = SIMatrix4.Get2();</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./files/Array.htm\">Array</a> ordered as m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15.</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">NewScene,false\n\
CreatePrim \"Cube\", \"MeshSurface\"\n\
Translate , 10, 20, 30, siAbsolute, siParent, siObj, siXYZ\n\
set om = XSIMath.CreateMatrix4\n\
selection(0).Kinematics.Global.Transform.GetMatrix4 om\n\
Application.LogMessage \"SIMatrix4.Value(i,j)\"\n\
Application.LogMessage om(0,0) &amp; \" \" &amp; om(0,1) &amp; \" \" &amp; om(0,2) &amp; \" \" &amp; om(0,3)\n\
Application.LogMessage om(1,0) &amp; \" \" &amp; om(1,1) &amp; \" \" &amp; om(1,2) &amp; \" \" &amp; om(1,3)\n\
Application.LogMessage om(2,0) &amp; \" \" &amp; om(2,1) &amp; \" \" &amp; om(2,2) &amp; \" \" &amp; om(2,3)\n\
Application.LogMessage om(3,0) &amp; \" \" &amp; om(3,1) &amp; \" \" &amp; om(3,2) &amp; \" \" &amp; om(3,3)\n\
Application.LogMessage \"\"\n\
Application.LogMessage \"array = SIMatrix4.Get2\"\n\
m = om.Get2\n\
Application.LogMessage m(0) &amp; \" \" &amp; m(1) &amp; \" \" &amp; m(2) &amp; \" \" &amp; m(3)\n\
Application.LogMessage m(4) &amp; \" \" &amp; m(5) &amp; \" \" &amp; m(6) &amp; \" \" &amp; m(7)\n\
Application.LogMessage m(8) &amp; \" \" &amp; m(9) &amp; \" \" &amp; m(10) &amp; \" \" &amp; m(11)\n\
Application.LogMessage m(12) &amp; \" \" &amp; m(13) &amp; \" \" &amp; m(14) &amp; \" \" &amp; m(15)\n\
Application.LogMessage \"\"\n\
Application.LogMessage \"SIMatrix4.Get m0, m1, m2...\"\n\
om.Get m(0),m(1),m(2),m(3),m(4),m(5),m(6),m(7),m(8),m(9),m(10),m(11),m(12),m(13),m(14),m(15)\n\
Application.LogMessage m(0) &amp; \" \" &amp; m(1) &amp; \" \" &amp; m(2) &amp; \" \" &amp; m(3)\n\
Application.LogMessage m(4) &amp; \" \" &amp; m(5) &amp; \" \" &amp; m(6) &amp; \" \" &amp; m(7)\n\
Application.LogMessage m(8) &amp; \" \" &amp; m(9) &amp; \" \" &amp; m(10) &amp; \" \" &amp; m(11)\n\
Application.LogMessage m(12) &amp; \" \" &amp; m(13) &amp; \" \" &amp; m(14) &amp; \" \" &amp; m(15)\n\
\'INFO : \"SIMatrix4.Value(j,i)\"\n\
\'INFO : \"1 0 0 0\"\n\
\'INFO : \"0 1 0 0\"\n\
\'INFO : \"0 0 1 0\"\n\
\'INFO : \"10 20 30 1\"\n\
\'INFO : \"\"\n\
\'INFO : \"array = SIMatrix4.Get2\"\n\
\'INFO : \"1 0 0 0\"\n\
\'INFO : \"0 1 0 0\"\n\
\'INFO : \"0 0 1 0\"\n\
\'INFO : \"10 20 30 1\"\n\
\'INFO : \"\"\n\
\'INFO : \"SIMatrix4.Get m0, m1, m2...\"\n\
\'INFO : \"1 0 0 0\"\n\
\'INFO : \"0 1 0 0\"\n\
\'INFO : \"0 0 1 0\"\n\
\'INFO : \"10 20 30 1\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// create a null and translate, rotate and scale it\n\
GetPrim(\"Null\", null, null);\n\
Translate(null, 1.73296599336766, 3.21359046016228, -0.321359046016228, siRelative, siView, siObj, siXYZ, null, null, null, null, null);\n\
Rotate(null, -102.375, 0, 0, siRelative, siLocal, siObj, siXYZ, null, null, null);\n\
Rotate(null, 0, -22.5, 0, siRelative, siLocal, siObj, siXYZ, null, null, null);\n\
Scale(null, 1.55705996131528, 1.55705996131528, 1.55705996131528, siRelative, siLocal, siObj, siXYZ, null, null, null);\n\
// get object from selection\n\
var o = selection(0);\n\
// get global transform from object\n\
var t = o.kinematics.global.transform;\n\
var m = XSIMath.CreateMatrix4();\n\
t.getmatrix4( m );\n\
var vbArr = new VBArray( m.Get2() );\n\
var jsArr = vbArr.toArray();\n\
var cCrLf = String.fromCharCode(13,10);\n\
Application.LogMessage( cCrLf +\n\
	\"|\" + round(jsArr[0],3)  + \" \" + round(jsArr[1],3)  + \" \" + round(jsArr[2],3)  + \" \" + round(jsArr[3],3)  + \"|\" + cCrLf +\n\
	\"|\" + round(jsArr[4],3)  + \" \" + round(jsArr[5],3)  + \" \" + round(jsArr[6],3)  + \" \" + round(jsArr[7],3)  + \"|\" + cCrLf +\n\
	\"|\" + round(jsArr[8],3)  + \" \" + round(jsArr[9],3)  + \" \" + round(jsArr[10],3) + \" \" + round(jsArr[11],3) + \"|\" + cCrLf +\n\
	\"|\" + round(jsArr[12],3) + \" \" + round(jsArr[13],3) + \" \" + round(jsArr[14],3) + \" \" + round(jsArr[15],3) + \"|\" + cCrLf );\n\
function round( n, numdecplaces ) \n\
{\n\
	var f = Math.pow(10, numdecplaces );\n\
	return Math.round(n * f)/f;\n\
}\n\
//INFO : \"\n\
//|1.439 0.582 -0.128 0|\n\
//|0 -0.334 -1.521 0|\n\
//|-0.596 1.405 -0.308 0|\n\
//|1.733 3.214 -0.321 1|   \n\
//\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/SIMatrix4.Get.html\">SIMatrix4.Get</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";