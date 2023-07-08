var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SetGlobalObject</title>\n\
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
</style><link rel=\"stylesheet\" href=\"si_cmds/css/en.css\" type=\"text/css\" /><script>$(document).ready(function() { yepnope.injectJs(\"./si_cmds/lib/utils.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>SetGlobalObject</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SetGlobalObject</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.1</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
SetGlobalObject is similar to <a href=\"#!/url=./si_cmds/SetGlobal.html\">SetGlobal</a>\n\
but it can be used to store JScript arrays and other objects.  Data \n\
stored with this command can be retrieved using <a href=\"#!/url=./si_cmds/GetGlobal.html\">GetGlobal</a>.<br /><br />\n\
The object is stored \"by-ref\" so that any later changes to the content of the object \n\
are visible to any caller who retrieves the global variable.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SetGlobalObject( in_VariableName, in_Value );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">in_VariableName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The name of the global variable		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">in_Value		</td>\n\
		<td><a href=\"#!/url=./files/Variant.htm\">Variant</a>		</td>\n\
		<td>\n\
Object that will be the value of the global variable		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	SetGlobal with a JScript array will result in a VBArray.  This is good if \n\
	you want to pass data between JScript and VBScript, but otherwise use\n\
	SetGlobalObject instead\n\
*/\n\
var jsa = [1,2,3] ;\n\
SetGlobal( \"JSArrayToVB\", jsa ) ;\n\
var vba = GetGlobal( \"JSArrayToVB\" ) ;\n\
Application.LogMessage( \"Contents of VBArray: \" + VBArray( vba ).toArray().toString() ) ;\n\
SetGlobalObject( \"JSArray\", jsa ) ;\n\
var jsa2 = GetGlobal( \"JSArray\" ) ;\n\
Application.LogMessage( \"Contents of JArray: \" + jsa2.toString() ) ;\n\
// Expected output\n\
//INFO : Contents of VBArray: 1,2,3\n\
//INFO : Contents of JArray: 1,2,3</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates the difference between SetGlobal and SetGlobalObject\n\
*/\n\
var myobj = new Object() ;\n\
myobj.foo = 5 ;\n\
myobj.bar = \"some data\" ;\n\
// Remember the object as a global\n\
SetGlobalObject( \"globalobj\", myobj ) ;\n\
// At any time the object can be retrieved\n\
var myobj2 = GetGlobal( \"globalobj\" ) ;\n\
Application.LogMessage( \"Retrieved global: \" + myobj2.foo ) ;\n\
// Both myobj and myobj2 point to the same thing\n\
// so changing myobj2 affects myobj as well\n\
myobj2.foo = 6 ;\n\
Application.LogMessage( \"Original object has changed: \" + myobj.foo ) ;\n\
// SetGlobal on a JScript object will not work, it will end up storing an empty VBArray\n\
SetGlobal( \"damagedglobalobj\", myobj ) ;\n\
var myobj3 = GetGlobal( \"damagedglobalobj\" ) ;\n\
Application.LogMessage( \"SetGlobal has destroyed myobj: \" + VBArray(myobj3).toArray().length ) ;\n\
// Expected output\n\
//INFO : Retrieved global: 5\n\
//INFO : Original object has changed: 6\n\
//INFO : SetGlobal has destroyed myobj: 0</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/SetGlobal.html\">SetGlobal</a> <a href=\"#!/url=./si_cmds/GetGlobal.html\">GetGlobal</a> <a href=\"#!/url=./si_om/ArgumentCollection.Add.html\">ArgumentCollection.Add</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";