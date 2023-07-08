var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>FCurve.DependsOnFrameRate</title>\n\
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
            <h1>FCurve.DependsOnFrameRate</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/FCurve.html\">FCurve</a>.DependsOnFrameRate</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Sets or returns the fcurve\'s dependency on the frame rate (time) as a <a href=\"#!/url=./files/Boolean.htm\">Boolean</a> \n\
(true if the fcurve is dependent on the frame rate). If the fcurve is set as time-dependent \n\
it will adjust when the scene\'s frame rate changes. Typically you don\'t want this to be set \n\
to true when the fcurve is a profile curve that does not use time as a factor.\n\
<br /><br />\n\
Animation fcurves are typically time-dependent; that is, they generally represent change \n\
in a parameter\'s value over time (for example, a change in an object\'s X position from frame \n\
10 to frame 90). Profile fcurves usually do not use frame values on either axis. Profile fcurves \n\
are used in deformations to allow a user to finetune an effect (for example, the Bulge operator \n\
uses percentage of amplitude on the Y-axis over distance from the deformation center on the X-axis).<br /><br />\n\
Setting this property may raise an \"Access Denied\" error. See more information in the FCurve object description.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Boolean rtn = FCurve.DependsOnFrameRate;\n\
// set accessor\n\
FCurve.DependsOnFrameRate = Boolean;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/* \n\
	This example illustrates how to create an fcurve and set its X axis \n\
	to be time independent. That means that the FCurve will not rescale when the \n\
	scene frame rate changes\n\
*/ \n\
// Create a new scene\n\
NewScene(null, false);\n\
// Create a null\n\
oNull = Application.GetPrim(\"Null\");\n\
// Get the posx parameter of the null\n\
oPosX = oNull.posx\n\
// Create array of time-value pairs\n\
aKeys = new Array( 30.00, -5.00, 50.00, 5.00 );\n\
// Create an empty FCurve\n\
oFCurve = oPosX.AddFCurve2( null, siStandardFCurve );\n\
// Get the current DependsOnFrameRate value\n\
bDependsOnFrameRate = oFCurve.DependsOnFrameRate\n\
Application.LogMessage( \'oFCurve.DependsOnFrameRate before = \' + bDependsOnFrameRate , siInfo )\n\
// Set the fc DependsOnFrameRate to false\n\
oFCurve.DependsOnFrameRate = false\n\
bDependsOnFrameRate = oFCurve.DependsOnFrameRate\n\
Application.LogMessage( \'oFCurve.DependsOnFrameRate after = \' + bDependsOnFrameRate, siInfo )\n\
// Set the fcurve keys\n\
oFCurve.SetKeys( aKeys );\n\
// Validate that the key parameter does not change with the frame rate\n\
oFCurveKey = oFCurve.Keys(0);\n\
Application.LogMessage( \'oFCurveKey.Time before = \' + oFCurveKey.Time, siInfo );\n\
Application.SetValue( \'PlayControl.Rate\', 100 ) ;\n\
oFCurveKey = oFCurve.Keys(0)\n\
Application.LogMessage( \'oFCurveKey.Time after = \' + oFCurveKey.Time, siInfo );\n\
// Produces the following output: \n\
//\n\
//INFO : oFCurve.DependsOnFrameRate before = true\n\
//INFO : oFCurve.DependsOnFrameRate after = false\n\
//INFO : oFCurveKey.Time before = 30\n\
//INFO : oFCurveKey.Time after = 30\n\
// Because the FCurve was set as being time independant, the \n\
// key times are not changed when changing the frame rate\n\
// of the scene.</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";