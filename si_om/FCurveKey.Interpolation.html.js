var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>FCurveKey.Interpolation</title>\n\
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
            <h1>FCurveKey.Interpolation</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/FCurveKey.html\">FCurveKey</a>.Interpolation</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Sets or returns the interpolation type of the right side of the \n\
fcurve segment (one of the values from the \n\
<a href=\"#!/url=./si_om/siFCurveKeyInterpolation.html\">siFCurveKeyInterpolation</a> enum.<br /><br /> \n\
Fcurve segment interpolation only applies to standard fcurves \n\
(where the type is siStandardFCurve). All other fcurve types \n\
return the siConstantKeyInterpolation value. <br /><br />\n\
If you try to set the key interpolation with the \n\
<a href=\"#!/url=./si_om/siFCurveKeyInterpolation.html#siDefaultInterpolation\">siDefaultInterpolation</a> \n\
value, it is ignored and returns S_FALSE in C++.\n\
<br /><br />\n\
For more information, see \"FCurve Interpolation and Extrapolation\" in the Softimage user guide. <br /><br />\n\
Setting this property may raise an \"Access Denied\" error. See more information in the FCurveKey object description.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
siFCurveKeyInterpolation rtn = FCurveKey.Interpolation;\n\
// set accessor\n\
FCurveKey.Interpolation = siFCurveKeyInterpolation;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example illustrates how to set interpolation for individual keys \n\
*/ \n\
NewScene( null, false );\n\
var n = Application.ActiveSceneRoot.AddNull();\n\
SIAddCustomParameter( \"null\", \"X\", siDouble, 0, 0, 100, null, 5, 0, 5 );\n\
var cpset = Dictionary.GetObject( \"null.CustomPSet\" );\n\
var x = cpset.Parameters(\"X\");\n\
Application.LogMessage( \"x value = \" + x.Value  );\n\
Application.LogMessage( \"x min/max = \" + x.Min + \", \" + x.Max );\n\
// Add a standard fcurve with 5 keys\n\
var fc = x.AddFCurve2( new Array( 1,0.52, 25.5,5, 50,0.45, 75,10.23, 100,0.76 ), siStandardFCurve );\n\
// Set the interpolation for the individual keys\n\
var k; var i = 0;\n\
// Set constant interpolation\n\
k = fc.Keys(i)\n\
Application.LogMessage( \"fcurve key \" + i + \" interpolation before = \" + k.Interpolation );\n\
k.Interpolation = siConstantKeyInterpolation;\n\
Application.LogMessage( \"fcurve key \" + i + \" interpolation after = \" + k.Interpolation );\n\
Application.LogMessage( \"fcurve key \" + i + \" left = \" + k.Left + \" right = \" + k.Right );\n\
i++;\n\
// Set cubic interpolation\n\
k = fc.Keys(i)\n\
Application.LogMessage( \"fcurve key \" + i + \" interpolation before = \" + k.Interpolation );\n\
k.Interpolation = siCubicKeyInterpolation;\n\
Application.LogMessage( \"fcurve key \" + i + \" interpolation after = \" + k.Interpolation );\n\
Application.LogMessage( \"fcurve key \" + i + \" left = \" + k.Left + \" right = \" + k.Right );\n\
i++;\n\
// Set linear interpolation\n\
k = fc.Keys(i)\n\
Application.LogMessage( \"fcurve key \" + i + \" interpolation before = \" + k.Interpolation );\n\
k.Interpolation = siLinearKeyInterpolation;\n\
Application.LogMessage( \"fcurve key \" + i + \" interpolation after = \" + k.Interpolation );\n\
Application.LogMessage( \"fcurve key \" + i + \" left = \" + k.Left + \" right = \" + k.Right );\n\
i++;\n\
// Expected results:\n\
//INFO : x value = 0\n\
//INFO : x min/max = 0, 100\n\
//INFO : fcurve key 0 interpolation before = 3\n\
//INFO : fcurve key 0 interpolation after = 1\n\
//INFO : fcurve key 0 left = 0.52 right = 0.52\n\
//INFO : fcurve key 1 interpolation before = 3\n\
//INFO : fcurve key 1 interpolation after = 3\n\
//INFO : fcurve key 1 left = 5 right = 5\n\
//INFO : fcurve key 2 interpolation before = 3\n\
//INFO : fcurve key 2 interpolation after = 2\n\
//INFO : fcurve key 2 left = 0.45 right = 0.45</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example illustrates how to set interpolation for individual keys \n\
\' \n\
NewScene , false \n\
set n = Application.ActiveSceneRoot.AddNull()\n\
SIAddCustomParameter \"null\", \"X\", siDouble, 0, 0, 100, , 5, 0, 5 \n\
set cpset = Dictionary.GetObject( \"null.CustomPSet\" )\n\
set x = cpset.Parameters(\"X\")\n\
Application.LogMessage \"x value = \" &amp; x.Value  \n\
Application.LogMessage \"x min/max = \" &amp; x.Min &amp; \", \" &amp; x.Max \n\
\' Add a standard fcurve with 5 keys\n\
set fc = x.AddFCurve2( array( 1,0.52, 25.5,5, 50,0.45, 75,10.23, 100,0.76 ), siStandardFCurve )\n\
\' Set the interpolation for the individual keys\n\
dim k, i\n\
\' Set constant interpolation\n\
i = 0\n\
set k = fc.Keys(i)\n\
Application.LogMessage \"fcurve key \" &amp; i &amp; \" interpolation before = \" &amp; k.Interpolation \n\
k.Interpolation = siConstantKeyInterpolation\n\
Application.LogMessage \"fcurve key \" &amp; i &amp; \" interpolation after = \" &amp; k.Interpolation \n\
Application.LogMessage \"fcurve key \" &amp; i &amp; \" left = \" &amp; k.Left &amp; \" right = \" &amp; k.Right \n\
i = i + 1\n\
\' Set cubic interpolation\n\
set k = fc.Keys(i)\n\
Application.LogMessage \"fcurve key \" &amp; i &amp; \" interpolation before = \" &amp; k.Interpolation \n\
k.Interpolation = siCubicKeyInterpolation\n\
Application.LogMessage \"fcurve key \" &amp; i &amp; \" interpolation after = \" &amp; k.Interpolation \n\
Application.LogMessage \"fcurve key \" &amp; i &amp; \" left = \" &amp; k.Left &amp; \" right = \" &amp; k.Right \n\
i = i + 1\n\
\' Set linear interpolation\n\
set k = fc.Keys(i)\n\
Application.LogMessage \"fcurve key \" &amp; i &amp; \" interpolation before = \" &amp; k.Interpolation \n\
k.Interpolation = siLinearKeyInterpolation\n\
Application.LogMessage \"fcurve key \" &amp; i &amp; \" interpolation after = \" &amp; k.Interpolation \n\
Application.LogMessage \"fcurve key \" &amp; i &amp; \" left = \" &amp; k.Left &amp; \" right = \" &amp; k.Right \n\
i = i + 1\n\
\' Expected results:\n\
\'INFO : x value = 0\n\
\'INFO : x min/max = 0, 100\n\
\'INFO : fcurve key 0 interpolation before = 3\n\
\'INFO : fcurve key 0 interpolation after = 1\n\
\'INFO : fcurve key 0 left = 0.52 right = 0.52\n\
\'INFO : fcurve key 1 interpolation before = 3\n\
\'INFO : fcurve key 1 interpolation after = 3\n\
\'INFO : fcurve key 1 left = 5 right = 5\n\
\'INFO : fcurve key 2 interpolation before = 3\n\
\'INFO : fcurve key 2 interpolation after = 2\n\
\'INFO : fcurve key 2 left = 0.45 right = 0.45</pre></td></tr>\n\
</table>\n\
</div><h4>3. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
# This example illustrates how to set interpolation for individual keys \n\
# \n\
from win32com.client import constants as c\n\
Application.NewScene( \"\", 0 )\n\
n = Application.ActiveSceneRoot.AddNull()\n\
Application.SIAddCustomParameter( \"null\", \"X\", c.siDouble, 0, 0, 100, None, 5, 0, 5 )\n\
cpset = Application.Dictionary.GetObject( \"null.CustomPSet\" )\n\
x = cpset.Parameters(\"X\")\n\
Application.LogMessage( \"x value = %d\" % (x.Value) )\n\
Application.LogMessage( \"x min/max = %d, %d\" % (x.Min,x.Max) )\n\
# Add a standard fcurve with 5 keys\n\
fc = x.AddFCurve2( [ 1,0.52, 25.5,5, 50,0.45, 75,10.23, 100,0.76 ], c.siStandardFCurve )\n\
# Set constant interpolation for key 0\n\
i = 0\n\
k = fc.Keys(i)\n\
Application.LogMessage( \"fcurve key %d interpolation before = %d\" % (i,k.Interpolation) )\n\
k.Interpolation = c.siConstantKeyInterpolation\n\
Application.LogMessage( \"fcurve key %d interpolation after = %d\" % (i,k.Interpolation) )\n\
Application.LogMessage( \"fcurve key %d left = %d right = %d\" % (i,k.Left,k.Right) )\n\
i = i + 1\n\
# Set cubic interpolation for key 1\n\
k = fc.Keys(i)\n\
Application.LogMessage( \"fcurve key %d interpolation before = %d\" % (i,k.Interpolation) )\n\
k.Interpolation = c.siCubicKeyInterpolation\n\
Application.LogMessage( \"fcurve key %d interpolation after = %d\" % (i,k.Interpolation) )\n\
Application.LogMessage( \"fcurve key %d left = %d right = %d\" % (i,k.Left,k.Right) )\n\
i = i + 1\n\
# Set linear interpolation for key 2\n\
k = fc.Keys(i)\n\
Application.LogMessage( \"fcurve key %d interpolation before = %d\" % (i,k.Interpolation) )\n\
k.Interpolation = c.siLinearKeyInterpolation\n\
Application.LogMessage( \"fcurve key %d interpolation after = %d\" % (i,k.Interpolation) )\n\
Application.LogMessage( \"fcurve key %d left = %d right = %d\" % (i,k.Left,k.Right) )\n\
i = i + 1\n\
# Expected results:\n\
#INFO : x value = 0\n\
#INFO : x min/max = 0, 100\n\
#INFO : fcurve key 0 interpolation before = 3\n\
#INFO : fcurve key 0 interpolation after = 1\n\
#INFO : fcurve key 0 left = 0 right = 0\n\
#INFO : fcurve key 1 interpolation before = 3\n\
#INFO : fcurve key 1 interpolation after = 3\n\
#INFO : fcurve key 1 left = 5 right = 5\n\
#INFO : fcurve key 2 interpolation before = 3\n\
#INFO : fcurve key 2 interpolation after = 2\n\
#INFO : fcurve key 2 left = 0 right = 0</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";