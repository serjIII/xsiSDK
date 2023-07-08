var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Environment.Item</title>\n\
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
            <h1>Environment.Item</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Environment.html\">Environment</a>.Item</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v3.5</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Sets or returns the <a href=\"#!/url=./files/String.htm\">String</a> value of system environment variable. <br /><br />\n\
Note: You cannot use this property to set an environment variable with the Python scripting \n\
language because the win32 extensions do not support setting parameterized properties. \n\
Use the <a href=\"#!/url=./si_om/Environment.SetItem.html\">Environment.SetItem</a> method instead after generating Python COM \n\
support for XSIUtils as specified below:<br /><br />\n\
You can use python 2.3 or later and win32 extension 1.55 or later to generate Python \n\
COM support for the <a href=\"#!/url=./si_om/XSIUtils.html\">XSIUtils</a> type library. This creates a SetItem( name, value ) \n\
method which allows you to set the item property (see <a href=\"#!/url=./si_om/Environment.SetItem.html\">Environment.SetItem</a>). <br /><br />\n\
You can generate Python COM support for XSIUtils by running the makepy.py utility on the XSIUtils \n\
type library. This will generate .py stubs containing descriptions of the object\'s methods and \n\
properties supported by the XSIUtils module. \n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
String IEnvironment.get_Item( String in_bstrName );\n\
// set accessor\n\
IEnvironment.set_Item( String in_bstrName, String pVal );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' how to create and set a new environment variable\n\
XSIUtils.Environment(\"MY_HOME\") = XSIUtils.Environment.Item(\"XSI_USERHOME\")\n\
LogMessage( \"my home folder: \" + XSIUtils.Environment.Item(\"MY_HOME\") )</pre></td></tr>\n\
</table>\n\
</div><h4>2. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\"># This example illustrates how to create and set a new environment variable.\n\
# Note that the SetItem method can only be used if python 2.3 or later \n\
# and win32 extension 1.55 or later are installed and the generated \n\
# Python COM Support exists for the XSIUtils library. \n\
# The Python COM support for the XSIUtils can be generated by running the makepy.py \n\
# utility on the XSIUtils type library. This will generated .py stubs contain\n\
# descriptions of the object\'s methods and properties supported by the module.\n\
import sys\n\
Application.LogMessage( \"Python Version \" + sys.version )\n\
if sys.version_info &gt;= (2, 3):\n\
	XSIUtils.Environment.SetItem( \"MY_HOME\", XSIUtils.Environment.Item(\"XSI_USERHOME\") )\n\
	Application.LogMessage( XSIUtils.Environment.Item(\"MY_HOME\") )\n\
else:\n\
	Application.LogMessage( \"Can\'t use Environment.SetItem with this version\" )</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Environment.SetItem.html\">Environment.SetItem</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";