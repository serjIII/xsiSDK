var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>AnimationSourceItem.SetAsFCurve</title>\n\
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
            <h1>AnimationSourceItem.SetAsFCurve</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/AnimationSourceItem.html\">AnimationSourceItem</a>.SetAsFCurve</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Sets the source (<a href=\"#!/url=./files/DataSource.htm\">DataSource</a>) of the <a href=\"#!/url=./si_om/AnimationSourceItem.html\">AnimationSourceItem</a> as an \n\
<a href=\"#!/url=./si_om/FCurve.html\">FCurve</a>. There are two ways you can use this method:<br /><br />\n\
(1) Specify a new <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a> source (eg., after creating a new AnimationSourceItem \n\
with <a href=\"#!/url=./si_om/ActionSource.AddSourceItem.html\">ActionSource.AddSourceItem</a>() ).<br /><br />\n\
(2) Replace an existing <a href=\"#!/url=./files/DataSource.htm\">DataSource</a> with an <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a> source.\n\
<br /><br />\n\
An \"Access Denied\" error is raised if the action source is used by a locked animation layer (see <a href=\"#!/url=./si_cmds/IsAnimationLayerLocked.html\">IsAnimationLayerLocked</a>).\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>FCurve AnimationSourceItem.SetAsFCurve( Object in_KeyValueArray, Object in_vInterpolation, Object in_vType, Object in_vExtrapolation );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = AnimationSourceItem.SetAsFCurve( KeyValueArray, [Interpolation], [Type], [Extrapolation] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/FCurve.html\">FCurve</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">KeyValueArray		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of key data		</td>\n\
		<td>\n\
\n\
		The array may be a 1- or 2-dimensional array. For 2-dimensional arrays\n\
		the first dimension must define the key values. These contain 6 values \n\
		per key for fcurves of interpolation type siCubicInterpolation (see \n\
		<a href=\"#!/url=./si_om/siFCurveInterpolation.html\">siFCurveInterpolation</a>) and 2 values for keys for the \n\
		other fcurve interpolation types. The first value is the key time (in \n\
		frames) and the second in the key value (in value units). For Cubic (or \n\
		bezier) fcurves the remaining 4 values are the tangency values for: \n\
		lefttanx (in frames), lefttany (in value units), righttanx (in frames), \n\
		and righttany (in value units).\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Interpolation		</td>\n\
		<td><a href=\"#!/url=./si_om/siFCurveInterpolation.html\">siFCurveInterpolation</a>		</td>\n\
		<td>\n\
 The interpolation of the FCurve 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
defined by parameter type			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Type		</td>\n\
		<td><a href=\"#!/url=./si_om/siFCurveType.html\">siFCurveType</a>		</td>\n\
		<td>\n\
 The type of the FCurve.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
defined by parameter type			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Extrapolation		</td>\n\
		<td><a href=\"#!/url=./si_om/siFCurveExtrapolation.html\">siFCurveExtrapolation</a>		</td>\n\
		<td>\n\
 The extrapolation of the FCurve 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
defined by parameter type			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' Create an ActionSource with one fcurve that will drive the global posx of anything called \"Model\".\n\
NewScene , false\n\
set oRoot = Application.ActiveProject.ActiveScene.Root\n\
set oActionSource = oRoot.addactionsource(\"MyActionSource\")\n\
set oSourceItem = oActionSource.addsourceitem( \"Model.kine.global.posx\" )\n\
set oFCurve =  oSourceItem.SetAsFcurve( Array(1,-10,,,,Empty,50,0,,,,Empty,100,50,,,,Empty) )\n\
for each oKey in oFCurve.Keys\n\
	LogMessage oKey.Time &amp; \", \" &amp; oKey.Value\n\
next\n\
\' Output of above script:\n\
\'INFO : 1, -10\n\
\'INFO : 50, 0\n\
\'INFO : 100, 50</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";