var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ActionDelta.AddConstraintItem</title>\n\
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
            <h1>ActionDelta.AddConstraintItem</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/ActionDelta.html\">ActionDelta</a>.AddConstraintItem</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Adds a new <a href=\"#!/url=./si_om/ActionDeltaItem.html\">ActionDeltaItem</a> of type siModificationDeltaConstraint to \n\
an ActionDelta created with the <a href=\"#!/url=./si_om/Delta.AddAction.html\">Delta.AddAction</a> method.<br /><br />\n\
The ActionDelta should be of type siModificationDeltaConstraint to use this method\n\
(see <a href=\"#!/url=./si_om/siModificationDeltaType.html\">siModificationDeltaType</a> for a list of ActionDelta types).\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>ActionDeltaItemCollection ActionDelta.AddConstraintItem( Object in_cnsPreset, Object in_cnsned, Object in_cnsning, Boolean in_bComp, Object in_offsetCnsned, Object in_offsetCnsning );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = ActionDelta.AddConstraintItem( Preset, Targets, Sources, [Compensation], [TargetOffset], [SourceOffset] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/ActionDeltaItemCollection.html\">ActionDeltaItemCollection</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Preset		</td>\n\
		<td>Constraint Preset		</td>\n\
		<td>\n\
Type of constraint to add to object		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Targets		</td>\n\
		<td><a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a>, <a href=\"#!/url=./si_om/X3DObjectCollection.html\">X3DObjectCollection</a> or <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a>		</td>\n\
		<td>\n\
Object(s) that will be constrained (see <a href=\"#!/url=./si_om/Constraint.Constrained.html\">Constraint.Constrained</a>)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Sources		</td>\n\
		<td><a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a>, <a href=\"#!/url=./si_om/X3DObjectCollection.html\">X3DObjectCollection</a> or <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a>		</td>\n\
		<td>\n\
Object(s) that will act as constrainers (see <a href=\"#!/url=./si_om/Constraint.Constraining.html\">Constraint.Constraining</a>)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Compensation		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
Compensation mode, True to turn on compensation.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">TargetOffset		</td>\n\
		<td><a href=\"#!/url=./si_om/SIVector3.html\">SIVector3</a> or <a href=\"#!/url=./files/Array.htm\">Array</a>		</td>\n\
		<td>\n\
Target Attachment Point (Distance, Position constraints).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SourceOffset		</td>\n\
		<td><a href=\"#!/url=./si_om/SIVector3.html\">SIVector3</a> or <a href=\"#!/url=./files/Array.htm\">Array</a>		</td>\n\
		<td>\n\
\n\
		Source Attachment Point (Distance, Position, Surface, Trajectory \n\
		constraints). Rotation Offset (Orientation constraint), Translation \n\
		Offset (Direction constraint), Scaling Offset (Scaling constraint)\n\
			</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/* \n\
	See the example on the documentation page for the ActionDelta object \n\
*/</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Delta.AddAction.html\">Delta.AddAction</a> <a href=\"#!/url=./si_om/ActionDeltaCollection.html\">ActionDeltaCollection</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";