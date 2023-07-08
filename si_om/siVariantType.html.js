var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siVariantType</title>\n\
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
            <h1>siVariantType</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siVariantType</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
The variant type determines the kind of value that can be stored in a parameter.<br /><br />\n\
Note: Only a subset of these types are fully supported and recommended for use:  these are\n\
siString, siBool, siDouble, siFloat, siInt4, siInt2, siUInt4, siUInt2, siByte, and siUByte.\n\
(See <a href=\"#!/url=./files/DataTypes.htm\">DataTypes</a> for more information).\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>siVariantType.siEmpty                                                       // 0\n\
siVariantType.siInt2                                                        // 2\n\
siVariantType.siInt4                                                        // 3\n\
siVariantType.siFloat                                                       // 4\n\
siVariantType.siDouble                                                      // 5\n\
siVariantType.siString                                                      // 8\n\
siVariantType.siDispatch                                                    // 9\n\
siVariantType.siBool                                                        // 11\n\
siVariantType.siUnknown                                                     // 13\n\
siVariantType.siByte                                                        // 16\n\
siVariantType.siUByte                                                       // 17\n\
siVariantType.siUInt2                                                       // 18\n\
siVariantType.siUInt4                                                       // 19\n\
siVariantType.siInt                                                         // 22\n\
siVariantType.siUInt                                                        // 23\n\
siVariantType.siWStr                                                        // 31</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siEmpty\"> </a>siEmpty		</td>\n\
		<td class=\"example\">0		</td>\n\
		<td>\n\
no type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siInt2\"> </a>siInt2		</td>\n\
		<td class=\"example\">2		</td>\n\
		<td>\n\
2 bytes signed integer number (-32768..32767)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siInt4\"> </a>siInt4		</td>\n\
		<td class=\"example\">3		</td>\n\
		<td>\n\
4 bytes signed integer number (-2147483648..2147483647) (See <a href=\"#!/url=./files/Long.htm\">Long</a>)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFloat\"> </a>siFloat		</td>\n\
		<td class=\"example\">4		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/Float.htm\">Float</a>: single precision real number (-3.402823466e+38F..3.402823466e+38F)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDouble\"> </a>siDouble		</td>\n\
		<td class=\"example\">5		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/Double.htm\">Double</a>: double precision real number (-1.7976931348623158e+308..1.7976931348623158e+308)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siString\"> </a>siString		</td>\n\
		<td class=\"example\">8		</td>\n\
		<td>\n\
Text represented as a BSTR.  See <a href=\"#!/url=./files/String.htm\">String</a>.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDispatch\"> </a>siDispatch		</td>\n\
		<td class=\"example\">9		</td>\n\
		<td>\n\
dispatch object.  This is an object which exposes methods and properties to scripting.  This is the variant type of all objects in the Object Model.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siBool\"> </a>siBool		</td>\n\
		<td class=\"example\">11		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUnknown\"> </a>siUnknown		</td>\n\
		<td class=\"example\">13		</td>\n\
		<td>\n\
Pointer to a COM object.  This object cannot be manipulated from scripting and such an object is not normally exposed in the Object Model.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siByte\"> </a>siByte		</td>\n\
		<td class=\"example\">16		</td>\n\
		<td>\n\
byte (-128..127)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUByte\"> </a>siUByte		</td>\n\
		<td class=\"example\">17		</td>\n\
		<td>\n\
unsigned byte (0..255)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUInt2\"> </a>siUInt2		</td>\n\
		<td class=\"example\">18		</td>\n\
		<td>\n\
2 bytes unsigned integer number (0..65535)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUInt4\"> </a>siUInt4		</td>\n\
		<td class=\"example\">19		</td>\n\
		<td>\n\
4 bytes unsigned integer number (0..4294967295)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siInt\"> </a>siInt		</td>\n\
		<td class=\"example\">22		</td>\n\
		<td>\n\
signed machine integer.  This variant type is not supported, use siInt4 instead.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUInt\"> </a>siUInt		</td>\n\
		<td class=\"example\">23		</td>\n\
		<td>\n\
unsigned machine integer.  This variant type is not supported, use siUInt4 instead.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWStr\"> </a>siWStr		</td>\n\
		<td class=\"example\">31		</td>\n\
		<td>\n\
Null-terminated wide character string.  This variant type is rarely encountered because siString is the recommended representation for all Softimage strings.		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/EditParameterDefinition.html\">EditParameterDefinition</a> <a href=\"#!/url=./si_cmds/SIAddCustomParameter.html\">SIAddCustomParameter</a> <a href=\"#!/url=./si_om/ArgumentCollection.Add.html\">ArgumentCollection.Add</a> <a href=\"#!/url=./si_om/CustomProperty.AddParameter.html\">CustomProperty.AddParameter</a> <a href=\"#!/url=./si_om/CustomProperty.AddParameter2.html\">CustomProperty.AddParameter2</a> <a href=\"#!/url=./si_om/CustomProperty.AddParameter3.html\">CustomProperty.AddParameter3</a> <a href=\"#!/url=./si_om/InputPort.Value.html\">InputPort.Value</a> <a href=\"#!/url=./si_om/Parameter.ValueType.html\">Parameter.ValueType</a> <a href=\"#!/url=./si_om/XSIFactory.CreateParamDef.html\">XSIFactory.CreateParamDef</a> <a href=\"#!/url=./si_om/XSIFactory.CreateParamDef2.html\">XSIFactory.CreateParamDef2</a> <a href=\"#!/url=./si_om/XSIUtils.GetVariantType.html\">XSIUtils.GetVariantType</a></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/FCurve.html\">FCurve</a> <a href=\"#!/url=./si_om/Parameter.AddFCurve.html\">Parameter.AddFCurve</a> <a href=\"#!/url=./si_om/Parameter.AddFCurve2.html\">Parameter.AddFCurve2</a> <a href=\"#!/url=./si_om/Parameter.Max.html\">Parameter.Max</a> <a href=\"#!/url=./si_om/Parameter.Min.html\">Parameter.Min</a> <a href=\"#!/url=./si_om/Parameter.SuggestedMax.html\">Parameter.SuggestedMax</a> <a href=\"#!/url=./si_om/Parameter.SuggestedMin.html\">Parameter.SuggestedMin</a> <a href=\"#!/url=./si_om/Preferences.html\">Preferences</a> <a href=\"#!/url=./si_cpp/classXSI_1_1FCurve.html\">FCurve</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";