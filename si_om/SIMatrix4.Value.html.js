var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SIMatrix4.Value</title>\n\
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
            <h1>SIMatrix4.Value</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/SIMatrix4.html\">SIMatrix4</a>.Value</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Sets or returns the (i,j)th value (<a href=\"#!/url=./files/Double.htm\">Double</a>) of this 4x4 matrix \n\
where i represents the rows and j represents the columns.<br /><br />\n\
	| m[0,0]  m[0,1]  m[0,2] m[0,3] |<br /><br />\n\
	| m[1,0]  m[1,1]  m[1,2] m[1,3] |<br /><br />\n\
	| m[2,0]  m[2,1]  m[2,2] m[2,3] |<br /><br />\n\
	| m[3,0]  m[3,1]  m[3,2] m[3,3] |<br /><br />\n\
Tip: Value is the SIMatrix4 object\'s default property, which means that you can call the method by just using the \n\
parenthesis and leaving out the property name for example m(j,i). \n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Double ISIMatrix4.get_Value( Int16 in_nRow, Int16 in_nCol );\n\
// set accessor\n\
ISIMatrix4.set_Value( Int16 in_nRow, Int16 in_nCol, Double pVal );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">i		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
Specifies the row index.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">j		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
Specifies the column index.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' Create a cube and rotate\n\
NewScene , false\n\
CreatePrim \"Cube\", \"MeshSurface\"\n\
CreatePrim \"Cube\", \"MeshSurface\"\n\
Rotate , -84.375, 0, 0, siRelative, 70, siObj, siXYZ\n\
Rotate , 0, -51.75, 0, siRelative, 70, siObj, siXYZ\n\
Rotate , 0, 0, -42.75, siRelative, 70, siObj, siXYZ\n\
Translate , 1.07335099741008, 0.996258472356974, -0.539267618951516, siRelative, siView, siObj, siXYZ\n\
Scale , 1.67311411992263, 1, 1, siRelative, siLocal, siObj, siXYZ\n\
Scale , 1, 1, 1.52224371373308, siRelative, siLocal, siObj, siXYZ\n\
\' Get the cube from the selection and access its global \n\
\' kinematic state property to get at its global transform\n\
set o = selection(0)\n\
set gks = o.kinematics.global\n\
set t = gks.transform\n\
set m = xsimath.creatematrix4\n\
t.GetMatrix4 m\n\
Application.LogMessage \"matrix4.value(i,j)\" &amp; vbCrLf &amp; _\n\
	\"|\"&amp;FormatNumber(m(0,0),3)&amp;\" \"&amp;FormatNumber(m(0,1),3)&amp;\" \"&amp;FormatNumber(m(0,2),3)&amp;\" \"&amp;FormatNumber(m(0,3),3)&amp;\"|\"&amp; vbCrLf &amp; _\n\
	\"|\"&amp;FormatNumber(m(1,0),3)&amp;\" \"&amp;FormatNumber(m(1,1),3)&amp;\" \"&amp;FormatNumber(m(1,2),3)&amp;\" \"&amp;FormatNumber(m(1,3),3)&amp;\"|\"&amp; vbCrLf &amp; _\n\
	\"|\"&amp;FormatNumber(m(2,0),3)&amp;\" \"&amp;FormatNumber(m(2,1),3)&amp;\" \"&amp;FormatNumber(m(2,2),3)&amp;\" \"&amp;FormatNumber(m(2,3),3)&amp;\"|\"&amp; vbCrLf &amp; _\n\
	\"|\"&amp;FormatNumber(m(3,0),3)&amp;\" \"&amp;FormatNumber(m(3,1),3)&amp;\" \"&amp;FormatNumber(m(3,2),3)&amp;\" \"&amp;FormatNumber(m(3,3),3)&amp;\"|\"&amp; vbCrLf\n\
m.get m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15 	\n\
Application.LogMessage \"matrix4.get\" &amp; vbCrLf &amp; _	\n\
	\"|\"&amp;FormatNumber(m0,3)&amp;\" \"&amp;FormatNumber(m1,3)&amp;\" \"&amp;FormatNumber(m2,3)&amp;\" \"&amp;FormatNumber(m3,3)&amp;\"|\"&amp; vbCrLf &amp; _\n\
	\"|\"&amp;FormatNumber(m4,3)&amp;\" \"&amp;FormatNumber(m5,3)&amp;\" \"&amp;FormatNumber(m6,3)&amp;\" \"&amp;FormatNumber(m7,3)&amp;\"|\"&amp; vbCrLf &amp; _\n\
	\"|\"&amp;FormatNumber(m8,3)&amp;\" \"&amp;FormatNumber(m9,3)&amp;\" \"&amp;FormatNumber(m10,3)&amp;\" \"&amp;FormatNumber(m11,3)&amp;\"|\"&amp; vbCrLf &amp; _\n\
	\"|\"&amp;FormatNumber(m12,3)&amp;\" \"&amp;FormatNumber(m13,3)&amp;\" \"&amp;FormatNumber(m14,3)&amp;\" \"&amp;FormatNumber(m15,3)&amp;\"|\"\n\
\'INFO : \"matrix4.value(i,j)\n\
\'|0.761 -0.703 1.314 0.000|\n\
\'|0.640 -0.459 -0.616 0.000|\n\
\'|0.942 1.192 0.092 0.000|\n\
\'|1.073 0.996 -0.539 1.000|\n\
\'\"\n\
\'INFO : \"matrix4.get\n\
\'|0.761 -0.703 1.314 0.000|\n\
\'|0.640 -0.459 -0.616 0.000|\n\
\'|0.942 1.192 0.092 0.000|\n\
\'|1.073 0.996 -0.539 1.000|\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";