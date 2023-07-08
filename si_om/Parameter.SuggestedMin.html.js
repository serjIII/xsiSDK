var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Parameter.SuggestedMin</title>\n\
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
            <h1>Parameter.SuggestedMin</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Parameter.html\">Parameter</a>.SuggestedMin <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v3.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns the suggested minimum value (<a href=\"#!/url=./files/Variant.htm\">Variant</a>) for the parameter. A parameter can \n\
have two separate ranges: the Min/Max which defines the entire range of legal values; and the \n\
Suggested Minimum/Suggested Maximum which defines a sub-range of the Min/Max that make the most sense. \n\
<br /><br />\n\
For example, an enormous number of subdivisions may theoretically be possible on a geometry, but \n\
for performance reasons a smaller range can be suggested to the user. The Suggested Min/Max values \n\
are used when determining the slider ranges for controls when parameters are inspected.\n\
<br /><br />\n\
This property is only valid for numeric parameters. Other variant types, for example siString \n\
(see <a href=\"#!/url=./si_om/siVariantType.html\">siVariantType</a>) do not have the concept of Minimum or Maximum.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Object rtn = Parameter.SuggestedMin;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\'	This example demonstrates how the Suggested Min and Max of a parameter can \n\
\'	be useful for animating a parameter.\n\
\'\n\
NewScene , false\n\
\' Set up a custom property set with some numeric values\n\
set oRoot = Application.ActiveProject.ActiveScene.Root\n\
set oPropSet = oRoot.AddProperty(\"Custom_parameter_list\",,\"TestRanges\")				\n\
oPropSet.AddParameter \"Var1\", siDouble,,siPersistable OR siAnimatable\n\
oPropSet.AddParameter \"Var2\", siUByte,,siPersistable OR siAnimatable\n\
oPropSet.AddParameter \"Var3\", siInt4,,siPersistable OR siAnimatable\n\
oPropSet.AddParameter \"Comment\", siString \n\
\' Animate all the parameters\n\
for each oProp in oPropSet.Parameters\n\
	AnimateOverSuggestedRange oProp \n\
next\n\
InspectObj oPropSet\n\
\' This routine animates a parameter between suggested Min and suggested Max between the\n\
\' Frames 1 and 100\n\
sub AnimateOverSuggestedRange( in_Parameter )\n\
	\' We only try to animate numeric parameters	\n\
	if ( in_Parameter.ValueType = siInt4 OR _\n\
	in_Parameter.ValueType = siDouble OR _\n\
	in_Parameter.ValueType = siUByte OR _\n\
	in_Parameter.ValueType = siFloat ) then\n\
		SetKey in_Parameter.FullName, 1, in_Parameter.SuggestedMin\n\
		SetKey in_Parameter.FullName, 100, in_Parameter.SuggestedMax\n\
	end if\n\
end sub\n\
\' Expected results:\n\
\'SetKey \"TestRanges.Var1\", 1, 0.5\n\
\'SetKey \"TestRanges.Var1\", 100, 0.6\n\
\'SetKey \"TestRanges.Var2\", 1, 10\n\
\'SetKey \"TestRanges.Var2\", 100, 30\n\
\'SetKey \"TestRanges.Var3\", 1, -100\n\
\'SetKey \"TestRanges.Var3\", 100, 9999</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Parameter.SuggestedMax.html\">Parameter.SuggestedMax</a> <a href=\"#!/url=./si_om/Parameter.Min.html\">Parameter.Min</a> <a href=\"#!/url=./si_om/Parameter.Max.html\">Parameter.Max</a> <a href=\"#!/url=./si_om/CustomProperty.AddParameter.html\">CustomProperty.AddParameter</a> <a href=\"#!/url=./si_om/siVariantType.html\">siVariantType</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";