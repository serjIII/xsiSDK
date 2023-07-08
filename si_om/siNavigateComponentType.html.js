var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siNavigateComponentType</title>\n\
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
            <h1>siNavigateComponentType</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siNavigateComponentType</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>Direction type for navigating geometry components.</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>siNavigateComponentType.siNextComponent                                     // 0\n\
siNavigateComponentType.siPreviousComponent                                 // 1\n\
siNavigateComponentType.siFirstComponent                                    // 2\n\
siNavigateComponentType.siLastComponent                                     // 3</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siNextComponent\"> </a>siNextComponent		</td>\n\
		<td class=\"example\">0		</td>\n\
		<td>\n\
next component		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPreviousComponent\"> </a>siPreviousComponent		</td>\n\
		<td class=\"example\">1		</td>\n\
		<td>\n\
previous component		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFirstComponent\"> </a>siFirstComponent		</td>\n\
		<td class=\"example\">2		</td>\n\
		<td>\n\
first component		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLastComponent\"> </a>siLastComponent		</td>\n\
		<td class=\"example\">3		</td>\n\
		<td>\n\
last component		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_om/Facet.Navigate.html\">Facet.Navigate</a> <a href=\"#!/url=./si_om/FacetCollection.Navigate.html\">FacetCollection.Navigate</a> <a href=\"#!/url=./si_om/NurbsCurve.Navigate.html\">NurbsCurve.Navigate</a> <a href=\"#!/url=./si_om/NurbsCurveCollection.Navigate.html\">NurbsCurveCollection.Navigate</a> <a href=\"#!/url=./si_om/Point.Navigate.html\">Point.Navigate</a> <a href=\"#!/url=./si_om/PointCollection.Navigate.html\">PointCollection.Navigate</a> <a href=\"#!/url=./si_om/Sample.Navigate.html\">Sample.Navigate</a> <a href=\"#!/url=./si_om/SampleCollection.Navigate.html\">SampleCollection.Navigate</a> <a href=\"#!/url=./si_om/Segment.Navigate.html\">Segment.Navigate</a> <a href=\"#!/url=./si_om/SegmentCollection.Navigate.html\">SegmentCollection.Navigate</a> <a href=\"#!/url=./si_cpp/classXSI_1_1CFacetRefArray.html#Navigate\">CFacetRefArray::Navigate</a> <a href=\"#!/url=./si_cpp/classXSI_1_1CNurbsCurveRefArray.html#Navigate\">CNurbsCurveRefArray::Navigate</a> <a href=\"#!/url=./si_cpp/classXSI_1_1CPointRefArray.html#Navigate\">CPointRefArray::Navigate</a> <a href=\"#!/url=./si_cpp/classXSI_1_1CSampleRefArray.html#Navigate\">CSampleRefArray::Navigate</a> <a href=\"#!/url=./si_cpp/classXSI_1_1CSegmentRefArray.html#Navigate\">CSegmentRefArray::Navigate</a> <a href=\"#!/url=./si_cpp/classXSI_1_1Facet.html#Navigate\">Facet::Navigate</a> <a href=\"#!/url=./si_cpp/classXSI_1_1NurbsCurve.html#Navigate\">NurbsCurve::Navigate</a> <a href=\"#!/url=./si_cpp/classXSI_1_1Point.html#Navigate\">Point::Navigate</a> <a href=\"#!/url=./si_cpp/classXSI_1_1Sample.html#Navigate\">Sample::Navigate</a> <a href=\"#!/url=./si_cpp/classXSI_1_1Segment.html#Navigate\">Segment::Navigate</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";