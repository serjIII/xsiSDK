var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siModificationDeltaType</title>\n\
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
            <h1>siModificationDeltaType</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siModificationDeltaType</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v6.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>Type of delta modification on a referenced model.</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>siModificationDeltaType.siModificationDeltaActiveResolution                 // 0\n\
siModificationDeltaType.siModificationDeltaRemoveAnimation                  // 1\n\
siModificationDeltaType.siModificationDeltaConstraint                       // 2\n\
siModificationDeltaType.siModificationDeltaUpVectorConstraint               // 3\n\
siModificationDeltaType.siModificationDeltaOperator                         // 4\n\
siModificationDeltaType.siModificationDeltaExpression                       // 5\n\
siModificationDeltaType.siModificationDeltaStaticValue                      // 6\n\
siModificationDeltaType.siModificationDeltaFCurve                           // 7\n\
siModificationDeltaType.siModificationDeltaGroupRelation                    // 8\n\
siModificationDeltaType.siModificationDeltaCluster                          // 9\n\
siModificationDeltaType.siModificationDeltaClusterProperty                  // 10\n\
siModificationDeltaType.siModificationDeltaProperty                         // 11</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siModificationDeltaActiveResolution\"> </a>siModificationDeltaActiveResolution		</td>\n\
		<td class=\"example\">0		</td>\n\
		<td>\n\
Store the active resolution of a sub-reference model. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siModificationDeltaRemoveAnimation\"> </a>siModificationDeltaRemoveAnimation		</td>\n\
		<td class=\"example\">1		</td>\n\
		<td>\n\
Store animation removals on the current reference model.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siModificationDeltaConstraint\"> </a>siModificationDeltaConstraint		</td>\n\
		<td class=\"example\">2		</td>\n\
		<td>\n\
Store <a href=\"#!/url=./si_om/Constraint.html\">Constraint</a>s.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siModificationDeltaUpVectorConstraint\"> </a>siModificationDeltaUpVectorConstraint		</td>\n\
		<td class=\"example\">3		</td>\n\
		<td>\n\
Store up vector constraints.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siModificationDeltaOperator\"> </a>siModificationDeltaOperator		</td>\n\
		<td class=\"example\">4		</td>\n\
		<td>\n\
Store <a href=\"#!/url=./si_om/Operator.html\">Operator</a>s.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siModificationDeltaExpression\"> </a>siModificationDeltaExpression		</td>\n\
		<td class=\"example\">5		</td>\n\
		<td>\n\
Store <a href=\"#!/url=./si_om/Expression.html\">Expression</a>s.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siModificationDeltaStaticValue\"> </a>siModificationDeltaStaticValue		</td>\n\
		<td class=\"example\">6		</td>\n\
		<td>\n\
Store static values.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siModificationDeltaFCurve\"> </a>siModificationDeltaFCurve		</td>\n\
		<td class=\"example\">7		</td>\n\
		<td>\n\
Store <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a>s.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siModificationDeltaGroupRelation\"> </a>siModificationDeltaGroupRelation		</td>\n\
		<td class=\"example\">8		</td>\n\
		<td>\n\
Store group relations (Objects added to a group, a layer or a pass).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siModificationDeltaCluster\"> </a>siModificationDeltaCluster		</td>\n\
		<td class=\"example\">9		</td>\n\
		<td>\n\
Clusters on Geometry.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siModificationDeltaClusterProperty\"> </a>siModificationDeltaClusterProperty		</td>\n\
		<td class=\"example\">10		</td>\n\
		<td>\n\
Cluster Properties on Geometry.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siModificationDeltaProperty\"> </a>siModificationDeltaProperty		</td>\n\
		<td class=\"example\">11		</td>\n\
		<td>\n\
Added Properties.		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_om/Delta.AddAction.html\">Delta.AddAction</a> <a href=\"#!/url=./si_om/Delta.RemoveAction.html\">Delta.RemoveAction</a> <a href=\"#!/url=./si_om/SIObject.Type.html\">SIObject.Type</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";