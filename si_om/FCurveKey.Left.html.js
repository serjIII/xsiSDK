var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>FCurveKey.Left</title>\n\
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
            <h1>FCurveKey.Left</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/FCurveKey.html\">FCurveKey</a>.Left</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Sets or returns the left value of the fcurve key as a <a href=\"#!/url=./files/Double.htm\">Double</a>.<br /><br />\n\
Setting this property may raise an \"Access Denied\" error. See more information in the FCurveKey object description.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Object rtn = FCurveKey.Left;\n\
// set accessor\n\
FCurveKey.Left = Object;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example illustrates how to create an fcurve with a key and then how to change \n\
	the value of the left hand-side of the key. \n\
*/\n\
NewScene( null, false );\n\
// Create a null \n\
var n = Application.ActiveSceneRoot.AddNull();\n\
// Get the posx parameter from the null \n\
var posx = n.posx;\n\
// Create an fcurve on posx \n\
var fc = posx.AddFCurve2( new Array(1,0), siStandardFCurve );\n\
// Get the first key \n\
var fckey = fc.Keys(0);\n\
// Set the value of the first key \n\
fckey.Value = 5;\n\
Application.LogMessage( \"fckey(\" + fckey.Index + \").Value before = (\" + fckey.Left + \",\" + fckey.Right + \")\" );\n\
// Make the left/right values different \n\
fckey.Left = 4;\n\
fckey.Right = 6;\n\
Application.LogMessage( \"fckey(\" + fckey.Index + \").Value after = (\" + fckey.Left + \",\" + fckey.Right + \")\" );\n\
// Expected results: \n\
//INFO : fckey(0).Value before = (5,5)\n\
//INFO : fckey(0).Value after = (4,6)</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'  \n\
\' This example illustrates how to create an fcurve with a key and then how to change \n\
\' the value of the left hand-side of the key. \n\
\'  \n\
NewScene , false\n\
\' Create a null \n\
set n = Application.ActiveSceneRoot.AddNull()\n\
\' Get the posx parameter from the null \n\
set posx = n.posx \n\
\' Create an fcurve on posx \n\
set fc = posx.AddFCurve2( array( 1.00, 0 ), siStandardFCurve ) \n\
\' Get the first key \n\
set fckey = fc.Keys(0) \n\
\' Set the value of the first key \n\
fckey.Value = 5 \n\
Application.LogMessage \"fckey(\" &amp; fckey.Index &amp; \").Value before = (\" &amp; fckey.Left &amp; \",\" &amp; fckey.Right &amp; \")\" \n\
\' Make the left/right values different \n\
fckey.Left = 4 \n\
fckey.Right = 6 \n\
Application.LogMessage \"fckey(\" &amp; fckey.Index &amp; \").Value after = (\" &amp; fckey.Left &amp; \",\" &amp; fckey.Right &amp; \")\" \n\
\' Expected results: \n\
\'INFO : fckey(0).Value before = (5,5)\n\
\'INFO : fckey(0).Value after = (4,6)</pre></td></tr>\n\
</table>\n\
</div><h4>3. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#  \n\
# This example illustrates how to create an fcurve with a key and then how to change \n\
# the value of the left hand-side of the key. \n\
#  \n\
# You can access the Softimage constants by importing them from the win32com.client module\n\
# \n\
from win32com.client import constants as c\n\
Application.NewScene( \"\", False )\n\
# Create a null \n\
null = Application.ActiveSceneRoot.AddNull()\n\
# Get the posx parameter from the null \n\
posx = null.posx \n\
# Create an fcurve on posx \n\
fc = posx.AddFCurve2( [ 1.00, 0 ], c.siStandardFCurve ) \n\
# Get the first key \n\
fckey = fc.Keys(0) \n\
# Set the value of the first key \n\
fckey.Value = 5 \n\
Application.LogMessage( \'fckey(%d).Value before = (%d,%d)\' % (fckey.Index,fckey.Left,fckey.Right) ) \n\
# Make the left/right values different \n\
fckey.Left = 4 \n\
fckey.Right = 6 \n\
Application.LogMessage( \'fckey(%d).Value after = (%d,%d)\' % (fckey.Index,fckey.Left,fckey.Right) ) \n\
# Expected results: \n\
#INFO : \"fckey(0).Value before = (5,5)\" \n\
#INFO : \"fckey(0).Value after = (4,6)\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";