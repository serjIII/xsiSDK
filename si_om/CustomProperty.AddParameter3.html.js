var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>CustomProperty.AddParameter3</title>\n\
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
            <h1>CustomProperty.AddParameter3</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a>.AddParameter3</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Adds a new custom parameter to the custom property. This version is a simplified version\n\
of <a href=\"#!/url=./si_om/CustomProperty.AddParameter2.html\">CustomProperty.AddParameter2</a>.\n\
<br /><br />\n\
The most commonly-used <a href=\"#!/url=./si_om/siCapabilities.html\">siCapabilities</a> flags, siAnimatable and siReadOnly, are exposed\n\
directly as optional arguments.\n\
<br /><br />\n\
Most parameters can be specified with this method.  However you should consider using\n\
<a href=\"#!/url=./si_om/CustomProperty.AddParameter.html\">CustomProperty.AddParameter</a> or <a href=\"#!/url=./si_om/CustomProperty.AddParameter2.html\">CustomProperty.AddParameter2</a>\n\
if the parameter needs a UI range, specific classification flags, or\n\
a user name.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Parameter CustomProperty.AddParameter3( String in_ScriptName, siVariantType in_ValueType, Object in_DefaultValue, Object in_Min, Object in_Max, Boolean in_bAnimatable, Boolean in_bReadOnly );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = CustomProperty.AddParameter3( ScriptName, ValueType, [DefaultValue], [Min], [Max], [Animatable], [ReadOnly] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>The newly created <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> object.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ScriptName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Name of the custom parameter.  This \n\
argument specifies both the <a href=\"#!/url=./si_om/Parameter.ScriptName.html\">Parameter.ScriptName</a> and\n\
				  <a href=\"#!/url=./si_om/SIObject.Name.html\">SIObject.Name</a>.  It should not contain spaces.\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ValueType		</td>\n\
		<td><a href=\"#!/url=./si_om/siVariantType.html\">siVariantType</a>		</td>\n\
		<td>\n\
 Type of the custom parameter.  The recommended types are siString, \n\
siBool, siInt4, siUByte, and siFloat. \n\
					(See <a href=\"#!/url=./si_om/Parameter.ValueType.html\">Parameter.ValueType</a>)  \n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">DefaultValue		</td>\n\
		<td><a href=\"#!/url=./files/Variant.htm\">Variant</a>		</td>\n\
		<td>\n\
Default value of the custom parameter. A default value for a numerical values\n\
including boolean is 0, the string default is \"\".\n\
	(See <a href=\"#!/url=./si_om/Parameter.Default.html\">Parameter.Default</a>)  \n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Min		</td>\n\
		<td><a href=\"#!/url=./files/Variant.htm\">Variant</a>		</td>\n\
		<td>\n\
 Minimum value of the custom parameter. siString and siBool types do not require\n\
a Min value. For all other numerical type the default will be minimum value possible for the \n\
type for example all unsigned values will have a min=0.\n\
					(See <a href=\"#!/url=./si_om/Parameter.Min.html\">Parameter.Min</a>)  \n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Max		</td>\n\
		<td><a href=\"#!/url=./files/Variant.htm\">Variant</a>		</td>\n\
		<td>\n\
 Maximum value of the custom parameter. siString and siBool types do not require\n\
a Max value. For all other numerical type the default will be minimum value possible for the \n\
type for example the maximum value for siUByte is 255. \n\
					(See <a href=\"#!/url=./si_om/Parameter.Max.html\">Parameter.Max</a>)  \n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Animatable		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
\n\
		Specify that the parameter should support animation.  This argument\n\
		is ignored for string parameters, which do not support animation.\n\
		It is possible to override this setting on a particular instance of a parameter via \n\
		<a href=\"#!/url=./si_om/Parameter.Animatable.html\">Parameter.Animatable</a>.\n\
			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
true			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ReadOnly		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
\n\
		Specify that the user cannot change the value of this Parameter.  A read-only parameter \n\
can still be changed via scripting (see <a href=\"#!/url=./si_om/Parameter.Value.html\">Parameter.Value</a>)\n\
		It is possible to override this setting on a particular instance of a parameter via \n\
		<a href=\"#!/url=./si_om/Parameter.ReadOnly.html\">Parameter.ReadOnly</a>.\n\
			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
false			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a>,\n\
	  <a href=\"#!/url=./si_om/CustomProperty.AddParameter2.html\">CustomProperty.AddParameter2</a>,\n\
	  <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> <a href=\"#!/url=./si_om/siCapabilities.html\">siCapabilities</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";