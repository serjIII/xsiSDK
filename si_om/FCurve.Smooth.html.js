var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>FCurve.Smooth</title>\n\
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
            <h1>FCurve.Smooth</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/FCurve.html\">FCurve</a>.Smooth</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.1</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Smooths the FCurve in the given time span using the specified filter. \'Smoothing\' removes sharp \n\
spikes and jags from the FCurve by averaging between keys. The FCurve is smoothed first and \n\
re-sampled at a sampling step of in_dSamplingStep.<br /><br />\n\
Calling this method may raise an \"Access Denied\" error. See more information in the FCurve object description.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>FCurve.Smooth( Object in_StartFrame, Object in_EndFrame, Double in_dFilterSize, Double in_dSamplingStep, siFCurveSmoothFilterType in_filterType, Double in_dGaussianVariance );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>FCurve.Smooth( [StartFrame], [EndFrame], [FilterSize], [SamplingStep], [FilterType], [GaussianVariance] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">StartFrame		</td>\n\
		<td><a href=\"#!/url=./files/Variant.htm\">Variant</a>		</td>\n\
		<td>\n\
The start time of the range to smooth. Must be less than the EndFrame value.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
The first key frame on the fcurve or, if there are no keys, the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/PlayControl.html\">PlayControl</a>.In frame value.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">EndFrame		</td>\n\
		<td><a href=\"#!/url=./files/Variant.htm\">Variant</a>		</td>\n\
		<td>\n\
The time in frames at which to end smoothing.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
The last key frame or, if there are no keys, the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/PlayControl.html\">PlayControl</a>.Out frame value.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">FilterSize		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
Defines the number of keys that are averaged to calculate a new key. A high filter size will yield a much straighter curve. The value must be greater than 1.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
5			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SamplingStep		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
The sampling step applied to the FCurve after smoothing. Must be less than FilterSize.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
1			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">FilterType		</td>\n\
		<td><a href=\"#!/url=./si_om/siFCurveSmoothFilterType.html\">siFCurveSmoothFilterType</a>		</td>\n\
		<td>\n\
Specifies the type of filter we want to use for smoothing.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siFCurveAverageFilterType			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">GaussianVariance		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
Variance of the Gaussian filter. Controls the degree of smoothing. A higher variance smooths the function curve more. The value must be greater than 0.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
1			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example illustrates how to use FCurve.Smooth method\n\
*/\n\
// Create a null\n\
NewScene(\"\", false);\n\
var nullobj = Application.ActiveSceneRoot.AddNull();\n\
// Use the Resample method to add keys to empty fcurves\n\
nullobj.posx.AddFCurve().Resample( 1,50, 5 );\n\
nullobj.posy.AddFCurve().Resample( 1,50, 5 );\n\
var posxFC = nullobj.posx.Source;\n\
var posyFC = nullobj.posy.Source;\n\
Application.LogMessage( \"posx curve : \" + posxFC.GetNumKeys() );\n\
Application.LogMessage( \"posy curve : \" + posyFC.GetNumKeys() );\n\
// Smooth the posx curve\n\
posxFC.Smooth(1,50);\n\
Application.LogMessage( \"smoothed posx curve : \" + posxFC.GetNumKeys() );\n\
Application.LogMessage( \"posy curve : \" + posyFC.GetNumKeys() );\n\
// Outputs:\n\
//INFO : posx curve : 11\n\
//INFO : posy curve : 11\n\
//INFO : smoothed posx curve : 50\n\
//INFO : posy curve : 11</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/FCurve.Resample.html\">FCurve.Resample</a> <a href=\"#!/url=./si_om/FCurve.Fit.html\">FCurve.Fit</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";