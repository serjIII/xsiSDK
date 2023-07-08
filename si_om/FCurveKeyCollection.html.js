var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>FCurveKeyCollection</title>\n\
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
            <h1>FCurveKeyCollection</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">FCurveKeyCollection</h2>\n\
\n\
<p>Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1CFCurveKeyRefArray.html\">CFCurveKeyRefArray</a></p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.5</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> A collection of <a href=\"#!/url=./si_om/FCurveKey.html\">FCurveKey</a> objects that represent the keys in the \n\
<a href=\"#!/url=./si_om/FCurve.html\">FCurve</a>. The FCurveKeyCollection object is accessed through the \n\
<a href=\"#!/url=./si_om/FCurve.Keys.html\">FCurve.Keys</a> property. This collection is 0-based.<br /><br />\n\
Keys in an FCurveKeyCollection are maintained in ascending order by\n\
parameter and duplicate key entries are disallowed. Also, an\n\
FCurveKeyCollection can only hold keys from the same fcurve so any\n\
attempt to add keys from another FCurve to an existing collection\n\
will fail.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurveKeyCollection.Add.html\">Add</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurveKeyCollection.AddItems.html\">AddItems</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurveKeyCollection.Filter.html\">Filter</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurveKeyCollection.GetAsText.html\">GetAsText</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurveKeyCollection.GetMaxKeyFrame.html\">GetMaxKeyFrame</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurveKeyCollection.GetMaxKeyValue.html\">GetMaxKeyValue</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurveKeyCollection.GetMidKeyFrame.html\">GetMidKeyFrame</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurveKeyCollection.GetMidKeyValue.html\">GetMidKeyValue</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurveKeyCollection.GetMinKeyFrame.html\">GetMinKeyFrame</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurveKeyCollection.GetMinKeyValue.html\">GetMinKeyValue</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurveKeyCollection.Remove.html\">Remove</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurveKeyCollection.RemoveAt.html\">RemoveAt</a>		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Properties</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurveKeyCollection.Count.html\">Count</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurveKeyCollection.Item.html\">Item</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">set oCube = Application.ActiveProject.ActiveScene.Root.AddGeometry(\"Cube\",\"MeshSurface\")\n\
dim aValues\n\
aValues = Array(0.00, 5.00, 1.00, 6.00, 2.00, 7.00, 3.00, 8.00, 4.00, 9.00, 5.00, 10.00)\n\
set oFCurve = oCube.PosX.AddFCurve2( aValues)\n\
\' Write the fcurve keys\n\
for each k in oFCurve.Keys\n\
	LogMessage k.Name &amp;\" Value: \" &amp; k.Value\n\
	LogMessage k.Name &amp;\" Locked: \" &amp; k.Locked\n\
	LogMessage k.Name &amp;\" Left: \" &amp; k.Left\n\
	LogMessage k.Name &amp;\" Right: \" &amp; k.Right\n\
	LogMessage k.Name &amp;\" LeftTanX: \" &amp; k.LeftTanX\n\
	LogMessage k.Name &amp;\" LeftTanY: \" &amp; k.LeftTanY\n\
	LogMessage k.Name &amp;\" RightTanX: \" &amp; k.RightTanX\n\
	LogMessage k.Name &amp;\" RightTanY: \" &amp; k.RightTanY\n\
	LogMessage k.Name &amp;\" Interpolation: \" &amp; k.Interpolation\n\
	LogMessage k.Name &amp;\" Flags: \" &amp; k.Flags\n\
next</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/FCurve.Keys.html\">FCurve.Keys</a> <a href=\"#!/url=./si_om/FCurve.GetKeysBetween.html\">FCurve.GetKeysBetween</a> <a href=\"#!/url=./si_om/FCurveEditor.SelectedKeys.html\">FCurveEditor.SelectedKeys</a> <a href=\"#!/url=./si_om/XSIFactory.CreateFCurveKeyCollection.html\">XSIFactory.CreateFCurveKeyCollection</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";