var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>FCurve.ScaleKeys</title>\n\
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
            <h1>FCurve.ScaleKeys</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/FCurve.html\">FCurve</a>.ScaleKeys</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v6.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Scales fcurve keys in time or value by a relative amount. The scaling \n\
amount is relative to the keyframe bounding box and the anchor\n\
point so that a value of 0.5 would scale the keys by 50%.<br /><br />\n\
Note: If the KeyCollection is from a different fcurve then the\n\
method will raise an \'Invalid argument\' (E_INVALIDARG) error.<br /><br />\n\
Calling this method may raise an \"Access Denied\" error. See more information in the FCurve object description.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>FCurve.ScaleKeys( FCurveKeyCollection in_Keys, Double in_FrameFactor, Double in_ValueFactor, Object in_FrameAnchor, Object in_ValueAnchor, Boolean in_Ripple );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>FCurve.ScaleKeys( KeyCollection, [FrameFactor], [ValueFactor], [FrameAnchor], [ValueAnchor], [Ripple] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">KeyCollection		</td>\n\
		<td><a href=\"#!/url=./si_om/FCurveKeyCollection.html\">FCurveKeyCollection</a>		</td>\n\
		<td>\n\
The keys to offset.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">FrameFactor		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
The relative amount to scale the fcurve\'s time.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
1.0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ValueFactor		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
The relative amount to scale the fcurve\'s value.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
1.0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">FrameAnchor		</td>\n\
		<td><a href=\"#!/url=./files/Variant.htm\">Variant</a>		</td>\n\
		<td>\n\
The center point for frame scaling.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0.0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ValueAnchor		</td>\n\
		<td><a href=\"#!/url=./files/Variant.htm\">Variant</a>		</td>\n\
		<td>\n\
The center point for value scaling.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0.0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Ripple		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
If true then keys before the first and after the last key in KeyCollection will be offset to maintain their distance from the scaled keys			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// \n\
// This example illustrates how to scale some fcurve keys by 50%.\n\
// Create a new scene\n\
NewScene(null, false);\n\
// Create a null\n\
oNull = Application.GetPrim(\"Null\");\n\
// Get the posx parameter of the null\n\
oPosX = oNull.posx\n\
// Create array of time-value pairs\n\
aKeys = new Array( 0.00, 5.00,\n\
				1.00, 6.00,\n\
				2.00, 7.00,\n\
				3.00, 8.00,\n\
				4.00, 9.00,\n\
				5.00, 10.00 );\n\
// Create an empty FCurve\n\
oFCurve = oPosX.AddFCurve2( null, siStandardFCurve );\n\
// Set the fcurve keys\n\
oFCurve.SetKeys( aKeys );\n\
Application.LogMessage( \'Before Scaling:\', siInfo );\n\
for (var i = 0; i &lt; oFCurve.Keys.Count; i++) \n\
{\n\
	Application.LogMessage( \'Time: \' + oFCurve.Keys(i).Time + \', Value: \' + oFCurve.Keys(i).Value, siInfo );\n\
}\n\
oFCurve.ScaleKeys( oFCurve.GetKeysBetween( 2, 4 ), 0.5, 0.5, 3.0, 7.5, false );\n\
Application.LogMessage( \'After Scaling:\', siInfo );\n\
for (var i = 0; i &lt; oFCurve.Keys.Count; i++) \n\
{\n\
	Application.LogMessage( \'Time: \' + oFCurve.Keys(i).Time + \', Value: \' + oFCurve.Keys(i).Value, siInfo );\n\
}\n\
// Produces the following output:\n\
//\n\
//INFO : Before Scaling:\n\
//INFO : Time: 0, Value: 5\n\
//INFO : Time: 1, Value: 6\n\
//INFO : Time: 2, Value: 7\n\
//INFO : Time: 3, Value: 8\n\
//INFO : Time: 4, Value: 9\n\
//INFO : Time: 5, Value: 10\n\
//INFO : After Scaling:\n\
//INFO : Time: 0, Value: 5\n\
//INFO : Time: 1, Value: 6\n\
//INFO : Time: 2.5, Value: 7.25\n\
//INFO : Time: 3, Value: 7.75\n\
//INFO : Time: 3.5, Value: 8.25\n\
//INFO : Time: 5, Value: 10</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/FCurve.Scale.html\">FCurve.Scale</a> <a href=\"#!/url=./si_om/FCurve.Offset.html\">FCurve.Offset</a> <a href=\"#!/url=./si_om/FCurve.OffsetKeys.html\">FCurve.OffsetKeys</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";