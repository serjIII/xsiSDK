var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>TimeControl.ClipOut</title>\n\
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
            <h1>TimeControl.ClipOut</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/TimeControl.html\">TimeControl</a>.ClipOut</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns the last frame of the source that is used by the clip as a\n\
<a href=\"#!/url=./files/Double.htm\">Double</a>. Decrease this value to trim a clip so that \n\
it ends part way through the duration of the source. \n\
<br /><br />\n\
On the Time Control property editor, this appears on the General tab \n\
under Source Clipping.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Double rtn = TimeControl.ClipOut;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example illustrates how to use the time control to clip the source.\n\
*/\n\
NewScene( null, false );\n\
var oRoot = Application.ActiveSceneRoot;\n\
var oNull = oRoot.AddNull( \"myNull\");\n\
SelectObj(\"myNull\", \"\", 1);\n\
var oPosX = oNull.Parameters(\"Posx\");\n\
// Create and connect an function curve to the position x\n\
var oFCurve = oPosX.AddFCurve2([1, 5, 50, 0, 100, 5], siUnknownFCurve);\n\
// This value should be 5\n\
SetValue(\"PlayControl.Current\", 100);\n\
LogMessage(\"The animated value at frame 100 is \" + oPosX.Value);\n\
// Create the animation source\n\
SetValue(\"PlayControl.Current\", 1);\n\
var oSource = StoreAction(oRoot,\"myNull.kine.local.posx\",2,\"StoredFcvPose\", 1, 1, 100, 0,0);\n\
// Create the first clip\n\
var oClip = AddClip(oRoot, oSource);\n\
oTimeControl = oClip.TimeControl;\n\
oTimeControl.Parameters(\"extrapaft_type\").Value = siTimeControlExtrapolationHold;\n\
oTimeControl.Parameters(\"extrapaft_timehold\").Value = 55;\n\
oTimeControl.Parameters(\"ClipOut\").Value = 50;\n\
SetValue(\"PlayControl.Current\", 100);\n\
LogMessage(\"The clip in value is \" + oTimeControl.ClipOut)\n\
// Now the value should be 0.\n\
LogMessage(\"The value after the clip manipulation is \" + Selection(0).Parameters(\"Posx\").Value);\n\
// Expected results:\n\
//INFO : The animated value at frame 100 is 5\n\
//INFO : The clip in value is 50\n\
//INFO : The value after the clip manipulation is 0</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";