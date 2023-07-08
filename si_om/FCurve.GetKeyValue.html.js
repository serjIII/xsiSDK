var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>FCurve.GetKeyValue</title>\n\
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
            <h1>FCurve.GetKeyValue</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/FCurve.html\">FCurve</a>.GetKeyValue</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v3.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns the value of the key at the specified index. The type of value that\n\
is returned depends on the type of fcurve used as follows:<br /><br />\n\
Standard and raw fcurves return a double value (VT_R8)<br /><br />\n\
Integer fcurves return a LONG (VT_I4)<br /><br />\n\
Boolean fcurves return a variant bool value (VT_BOOL,VARIANT_TRUE,VARIANT_FALSE)<br /><br />\n\
Note: If the index is out of range then the method raises an \'Invalid argument\' \n\
(E_INVALIDARG) error.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Object FCurve.GetKeyValue( Int32 in_Index );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oVariant = FCurve.GetKeyValue( Index );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./files/Variant.htm\">Variant</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Index		</td>\n\
		<td><a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
Index of the key. Must be a value between 0 and (number of keys - 1).		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This JScript example illustrates how to use the GetKeyValue() method \n\
	to quickly look up a key\'s value.\n\
*/\n\
// Create a null\n\
Application.NewScene( null, false );\n\
var nullobj = ActiveSceneRoot.AddNull();\n\
// Create an fcurve on the posx parameter from the null\n\
var fc = nullobj.posx.AddFCurve()\n\
// Create a custom property set on the null\n\
var cpset = nullobj.AddCustomProperty( \"CustomPSet\" );\n\
var empty;\n\
var x = cpset.AddParameter( \"X\", siDouble, empty, siAnimatable, \"X\", \"X\", empty, 5, 0, 5 );\n\
var y = cpset.AddParameter( \"Y\", siInt4, empty, siAnimatable, \"Y\", \"Y\", empty, 5, 0, 5 );\n\
var z = cpset.AddParameter( \"Z\", siBool, empty, siAnimatable, \"Z\", \"Z\", empty, true );\n\
var fc1 = x.AddFCurve();\n\
var fc2 = y.AddFCurve();\n\
var fc3 = z.AddFCurve();\n\
// Use the Resample method to add keys to the fcurve on every second frame\n\
fc1.NoKeyValue = Math.random() * 100;\n\
fc2.NoKeyValue = Math.random() * 100;\n\
fc3.NoKeyValue = true;\n\
fc1.Resample( empty, empty, 2 );\n\
fc2.Resample( empty, empty, 2 );\n\
fc3.Resample( empty, empty, 2 );\n\
printfc( fc1 );\n\
printfc( fc2 );\n\
printfc( fc3 );\n\
// Print out all key frame/value pairs\n\
function printfc(fc)\n\
{\n\
	var index;\n\
	for ( index=0; index&lt;fc.GetNumKeys(); index++ )\n\
	{\n\
		LogMessage( \"key\" + index + \" frame = \" \n\
			+ Math.round(fc.getkeyframe(index))  \n\
			+ \" value = \" + fc.getkeyvalue(index) \n\
		);	\n\
	}\n\
}\n\
// Outputs:\n\
//INFO : key0 frame = 1 value = 24.42401859658091\n\
//INFO : key1 frame = 3 value = 24.42401859658091\n\
//INFO : key2 frame = 5 value = 24.42401859658091\n\
//	etc...\n\
//INFO : key48 frame = 97 value = 1\n\
//INFO : key49 frame = 99 value = 1\n\
//INFO : key50 frame = 100 value = 1</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/FCurveKey.Value.html\">FCurveKey.Value</a> <a href=\"#!/url=./si_om/FCurve.GetKeyFrame.html\">FCurve.GetKeyFrame</a> <a href=\"#!/url=./si_om/FCurve.GetKeyValue.html\">FCurve.GetKeyValue</a> <a href=\"#!/url=./si_om/FCurve.GetKeyIndex.html\">FCurve.GetKeyIndex</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";