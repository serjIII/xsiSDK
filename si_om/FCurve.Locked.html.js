var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>FCurve.Locked</title>\n\
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
            <h1>FCurve.Locked</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/FCurve.html\">FCurve</a>.Locked</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v3.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Sets or returns the locked property of fcurve as a <a href=\"#!/url=./files/Boolean.htm\">Boolean</a> \n\
(true if locked). If the fcurve is set as locked it cannot be changed. If \n\
you try changing an fcurve that is Locked it raises an \'Access Denied\' \n\
(E_ACCESSDENIED) error.<br /><br />\n\
Setting this property may raise an \"Access Denied\" error. See more information in the FCurve object description.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Boolean rtn = FCurve.Locked;\n\
// set accessor\n\
FCurve.Locked = Boolean;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\"># \n\
# This Python example illustrates how to create an fcurve and set it as Locked\n\
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
	siInfo = 8\n\
	siStandardFCurve = 20\n\
# Create new scene\n\
null = Application.NewScene(\"\", 0)\n\
# Create a null\n\
null = Application.GetPrim(\"Null\", \"\", \"\", \"\")\n\
# Get the posx parameter from the null\n\
posx = null.posx\n\
# Define some keys\n\
keys = [ 1.00, -5.00, 100.00, 5.00 ]\n\
# Create an fcurve on posx\n\
fc = posx.AddFCurve2( keys, siStandardFCurve )\n\
# Get the current Locked value\n\
ro = fc.Locked\n\
Application.LogMessage( \'fc.Locked before = \' + str(ro), siInfo )\n\
# Set the fc Locked \n\
fc.Locked = 1\n\
ro = fc.Locked\n\
Application.LogMessage( \'fc.Locked after = \' + str(ro), siInfo )\n\
# Try setting a key when the fcurve is Locked.\n\
fckey = fc.Keys(0)\n\
Application.LogMessage( \'fckey.value before = \' + str(fckey.Value), siInfo )\n\
try:\n\
	fckey.Value = 5.00\n\
	Application.LogMessage( \'fckey.value after = \' + str(fckey.Value), siInfo )\n\
except pythoncom.com_error, (hr, msg, exc, arg):\n\
		# catch the error and print out the error message\n\
		if exc and exc[2]: msg = exc[2]\n\
		Application.LogMessage( \"fcurve key set value failed:\" + msg)\n\
# Produces the following output: \n\
#INFO : \"fc.Locked before = 0\"\n\
#INFO : \"fc.Locked after = 1\"\n\
#INFO : \"fckey.value before = -5.0\"\n\
#INFO : \"2009 - fcurve key set value failed:Access denied\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";