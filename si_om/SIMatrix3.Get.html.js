var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SIMatrix3.Get</title>\n\
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
            <h1>SIMatrix3.Get</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/SIMatrix3.html\">SIMatrix3</a>.Get</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns the 9 components of this matrix.<br /><br />\n\
The elements are packed together as follows: <br /><br />\n\
	| m0  m1  m2 |<br /><br />\n\
	| m3  m4  m5 |<br /><br />\n\
	| m6  m7  m8 |<br /><br />\n\
Note: This method uses <a href=\"#!/url=./files/OutArgDefined.htm\">output arguments</a>. C# and some \n\
scripting languages (such as JScript and PerlScript) don\'t support arguments passed by reference. However, there is a \n\
alternate version of this method which is considered safe to use with C#, JScript and PerlScript: \n\
<a href=\"#!/url=./si_om/SIMatrix3.Get2.html\">SIMatrix3.Get2</a>.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SIMatrix3.Get( Object& out_pvarM00, Object& out_pvarM01, Object& out_pvarM02, Object& out_pvarM10, Object& out_pvarM11, Object& out_pvarM12, Object& out_pvarM020, Object& out_pvarM21, Object& out_pvarM22 );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SIMatrix3.Get( m0, m1, m2, m3, m4, m5, m6, m7, m8 );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">m0		</td>\n\
		<td><a href=\"#!/url=./files/Float.htm\">Float</a>ing Point value		</td>\n\
		<td>\n\
The m0 value.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">m1		</td>\n\
		<td><a href=\"#!/url=./files/Float.htm\">Float</a>ing Point value		</td>\n\
		<td>\n\
The m1 value.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">m2		</td>\n\
		<td><a href=\"#!/url=./files/Float.htm\">Float</a>ing Point value		</td>\n\
		<td>\n\
The m2 value.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">m3		</td>\n\
		<td><a href=\"#!/url=./files/Float.htm\">Float</a>ing Point value		</td>\n\
		<td>\n\
The m3 value.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">m4		</td>\n\
		<td><a href=\"#!/url=./files/Float.htm\">Float</a>ing Point value		</td>\n\
		<td>\n\
The m4 value.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">m5		</td>\n\
		<td><a href=\"#!/url=./files/Float.htm\">Float</a>ing Point value		</td>\n\
		<td>\n\
The m5 value.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">m6		</td>\n\
		<td><a href=\"#!/url=./files/Float.htm\">Float</a>ing Point value		</td>\n\
		<td>\n\
The m6 value.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">m7		</td>\n\
		<td><a href=\"#!/url=./files/Float.htm\">Float</a>ing Point value		</td>\n\
		<td>\n\
The m7 value.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">m8		</td>\n\
		<td><a href=\"#!/url=./files/Float.htm\">Float</a>ing Point value		</td>\n\
		<td>\n\
The m8 value.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">dim v1, m1\n\
\' Create 3x3 matrix.\n\
set m1 = XSIMath.CreateMatrix3(4.0, 0.0, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0, 2.0)\n\
m1.Get m00, m01, m02, m10, m11, m12, m20, m21, m22\n\
msgbox m00</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/SIMatrix3.SetIdentity.html\">SIMatrix3.SetIdentity</a> <a href=\"#!/url=./si_om/SIVector3.html\">SIVector3</a> <a href=\"#!/url=./si_om/SIMatrix3.html\">SIMatrix3</a> <a href=\"#!/url=./si_om/SIMatrix4.html\">SIMatrix4</a> <a href=\"#!/url=./si_om/SIRotation.html\">SIRotation</a> <a href=\"#!/url=./si_om/SITransformation.html\">SITransformation</a> <a href=\"#!/url=./si_om/SIQuaternion.html\">SIQuaternion</a> <a href=\"#!/url=./si_om/SIMatrix3.Get2.html\">SIMatrix3.Get2</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";