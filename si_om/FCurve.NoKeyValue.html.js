var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>FCurve.NoKeyValue</title>\n\
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
            <h1>FCurve.NoKeyValue</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/FCurve.html\">FCurve</a>.NoKeyValue</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Sets or returns the value of the FCurve (as a <a href=\"#!/url=./files/Double.htm\">Double</a>) \n\
when there are no keys.<br /><br />\n\
Setting this property may raise an \"Access Denied\" error. See more information in the FCurve object description.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Object rtn = FCurve.NoKeyValue;\n\
// set accessor\n\
FCurve.NoKeyValue = Object;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\'	This example demonstrates how to get the value of \n\
\'	an FCurve when there are no keys.\n\
\'\n\
set oCube = ActiveSceneRoot.AddGeometry(\"Cube\",\"MeshSurface\")\n\
dim aValues\n\
aValues = Array(0.00, 5.00, 1.00, 6.00, 2.00, 7.00, 3.00, 8.00, 4.00, 9.00, 5.00, 10.00)\n\
set oFCurve = oCube.PosX.AddFCurve2( aValues)\n\
LogMessage \"FCurve NoKeyValue : \" &amp; oFCurve.NoKeyValue\n\
\' Outputs:\n\
\'INFO : FCurve NoKeyValue : 5</pre></td></tr>\n\
</table>\n\
</div><h4>2. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\"># \n\
# This Python example illustrates how to create an fcurve and set the no key \n\
# value. This value is used when an fcurve is created with no keys. By default\n\
# it is the value at the time the fcurve was created.\n\
# \n\
# We try to import the Softimage constants from win32com.client. This assumes that\n\
# the makepy.py utility has been used on the Softimage type library files (.tlb);\n\
# this automatically installs the Softimage constants into win32com.client.constants\n\
# \n\
from win32com.client import constants\n\
from win32com.shell import shell\n\
import pythoncom\n\
# Define constants\n\
try:\n\
	siInfo = constants.siInfo\n\
	siStandardFCurve = constants.siStandardFCurve\n\
except:\n\
	# typelib not found\n\
	siInfo = 4\n\
	siStandardFCurve = 20\n\
# Create new scene\n\
null = Application.NewScene(\"\", 0)\n\
# Create a null\n\
null = Application.GetPrim(\"Null\", \"\", \"\", \"\")\n\
# Get the posx parameter from the null\n\
posx = null.posx\n\
# Set the value of posx; this will be the default nokeyvalue\n\
posx.value =  10\n\
val = posx.value\n\
Application.LogMessage( \'posx.value before = \' + str(val), siInfo )\n\
# Define an empty keys array\n\
keys = []\n\
# Create an fcurve on posx\n\
fc = posx.AddFCurve2( keys, siStandardFCurve )\n\
# Get the current nokeyvalue value\n\
val = fc.NoKeyValue\n\
Application.LogMessage( \'fc.NoKeyValue before = \' + str(val), siInfo )\n\
# Set the fc nokeyvalue\n\
fc.NoKeyValue = 2.5\n\
val = fc.NoKeyValue\n\
Application.LogMessage( \'fc.NoKeyValue after = \' + str(val), siInfo )\n\
# Get the value of posx; should be the new nokeyvalue\n\
val = posx.Value\n\
Application.LogMessage( \'posx.value after = \' + str(val), siInfo )\n\
# Test undo/redo\n\
# Undo Set fc no key value \n\
Application.Undo()\n\
val  = fc.NoKeyValue\n\
Application.LogMessage( \'fc.NoKeyValue undo = \' + str(val), siInfo )\n\
# Redo Set fc no key value \n\
Application.Redo()\n\
val = fc.NoKeyValue\n\
Application.LogMessage( \'fc.NoKeyValue redo = \' + str(val), siInfo )\n\
# Produces the following output: \n\
#INFO : posx.value before = 10.0\n\
#INFO : fc.NoKeyValue before = 10.0\n\
#INFO : fc.NoKeyValue after = 2.5\n\
#INFO : posx.value after = 2.5\n\
#INFO : fc.NoKeyValue undo = 10.0\n\
#INFO : fc.NoKeyValue redo = 2.5</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";