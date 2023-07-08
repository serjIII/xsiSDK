var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>CustomProperty.AddParameter2</title>\n\
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
            <h1>CustomProperty.AddParameter2</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a>.AddParameter2</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Adds a new custom parameter to the custom property. This version has identical behavior to \n\
<a href=\"#!/url=./si_om/CustomProperty.AddParameter.html\">CustomProperty.AddParameter</a>.  The only different is that the arguments are rearranged with\n\
all default arguments at the end to assist JScript developers.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Parameter CustomProperty.AddParameter2( String in_ScriptName, siVariantType in_ValueType, Object in_DefaultValue, Object in_Min, Object in_Max, Object in_SuggestedMin, Object in_SuggestedMax, siParamClassification in_Classif, Int32 in_Caps, String in_name, String in_LongName, String in_Guid );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = CustomProperty.AddParameter2( ScriptName, ValueType, [DefaultValue], [Min], [Max], [SuggestedMin], [SuggestedMax], [Classification], [Capabilities], [Name], [Description], [ObsoleteArg] );</pre>		</td>	</tr>\n\
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
argument specifies the ScriptName of a parameter and should not contain\n\
				  any spaces.  \n\
(See <a href=\"#!/url=./si_om/Parameter.ScriptName.html\">Parameter.ScriptName</a>)\n\
If the short name or long name parameters are not specified then\n\
this name is also used as the user visible name and description.\n\
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
a Max value. For all other numerical type the default will be maximum value possible for the \n\
type for example the maximum value for siUByte is 255. \n\
					(See <a href=\"#!/url=./si_om/Parameter.Max.html\">Parameter.Max</a>)  \n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SuggestedMin		</td>\n\
		<td><a href=\"#!/url=./files/Variant.htm\">Variant</a>		</td>\n\
		<td>\n\
 Suggested minimum value of the custom parameter. siString and siBool types do not require\n\
a SuggestedMin value. The default suggested minimum value for numerical \n\
values will be 0.  The suggested minimum should \n\
be equal or larger than the minimum.  This value is used to configure the \n\
range of UI controls.\n\
					(See <a href=\"#!/url=./si_om/Parameter.SuggestedMin.html\">Parameter.SuggestedMin</a>)  \n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SuggestedMax		</td>\n\
		<td><a href=\"#!/url=./files/Variant.htm\">Variant</a>		</td>\n\
		<td>\n\
 Suggested maximum value of the custom parameter. siString and siBool types do not require\n\
a SuggestedMax value. The default suggested maximum value for numerical \n\
values will be 100.  The suggested maximum should \n\
be equal or smaller than the Maximum.  This value is used to configure the \n\
range of UI controls.\n\
					(See <a href=\"#!/url=./si_om/Parameter.SuggestedMax.html\">Parameter.SuggestedMax</a>)  \n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Classification		</td>\n\
		<td><a href=\"#!/url=./si_om/siParamClassification.html\">siParamClassification</a>		</td>\n\
		<td>\n\
 Classification of the custom parameter. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siClassifUnknown			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Capabilities		</td>\n\
		<td>int (see <a href=\"#!/url=./files/Integer.htm\">Integer</a>)		</td>\n\
		<td>\n\
 Capabilities of the custom parameter. \n\
If you create a custom property parameter that is not inspectable, it will not appear \n\
in the interface, but is still available from scripting. If the parameter is read-only, \n\
it is greyed out in the interface, but is also available from scripting.\n\
The siPersistable flag optional and assumed to be enabled for all custom parameters.\n\
(See <a href=\"#!/url=./si_om/siCapabilities.html\">siCapabilities</a> and <a href=\"#!/url=./si_om/Parameter.Capabilities.html\">Parameter.Capabilities</a>) \n\
			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siPersistable			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 User friendly version of the custom parameter\'s name. This is the parameter \n\
				  name that appears in\n\
in the Scene Explorer (unless Show Script Names is enabled).  If this argument is\n\
not specified then the ScriptName argument will be visible to users as the parameter\'s \n\
				  name.\n\
(See  <a href=\"#!/url=./si_om/SIObject.Name.html\">SIObject.Name</a> and <a href=\"#!/url=./si_om/Parameter.ScriptName.html\">Parameter.ScriptName</a>). \n\
				  This string will appear as the parameter label when the custom property is inspected,\n\
				  unless a specific label is specified in the <a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a>, see \n\
				  <a href=\"#!/url=./si_om/PPGItem.Label.html\">PPGItem.Label</a>.\n\
			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
ScriptName is used			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Description		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 A longer description of the Parameter.  This string does not appear is the user interface.\n\
			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
ScriptName is used			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ObsoleteArg		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
It is not necessary to specify this argument, it is ignored. \n\
			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"\"			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'VBScript example : add custom parameters to a custom property\n\
MAIN()\n\
sub main()\n\
	On Error Resume Next\n\
	set oRoot = Application.ActiveProject.ActiveScene.Root\n\
	set oSphere = oRoot.AddGeometry(\"Sphere\",\"NurbsSurface\")\n\
	set oProp = oSphere.AddProperty(\"Custom_parameter_list\",,\"FirstCustomProperty\")\n\
	AddCustomParams(oProp)\n\
	\'Show a modeless dialog box with all the parameters that we have added\n\
	InspectObj oProp\n\
end sub\n\
sub AddCustomParams (in_customprop)\n\
	\' String custom parameter\n\
	set oParam1 = in_customprop.AddParameter2(\"StrCustomParam\", siString, ,,,,,,,, \"the string\" )\n\
	write_customprop oParam1\n\
	\' Boolean custom parameter\n\
	set oParam2 = in_customprop.AddParameter2(\"BoolCustomParam\", siBool, true, ,,,,,, \"ShortName\", \"LongName\" )\n\
	write_customprop oParam2\n\
	\' Integer custom parameter\n\
	set oParam3 = in_customprop.AddParameter2(\"Int2CustomParam\", siInt2, -1, -5, 5,,, siClassifVisualization, siAnimatable, \"ShortName\", \"LongName\" )\n\
	write_customprop oParam3\n\
	\' Double custom parameter\n\
	set oParam4 = in_customprop.AddParameter2(\"DoubleCustomParam\", siDouble, 0.695, 0.0123, 10.456,,,,siReadOnly, \"ShortName\", \"LongName\" )\n\
	write_customprop oParam4\n\
end sub\n\
sub write_customprop(in_param)\n\
	LogMessage \"Name: \" &amp; in_param.Name\n\
	LogMessage \"Class: \" &amp; typename(in_param)\n\
	LogMessage \"Type: \" &amp; in_param.Type\n\
	LogMessage \"Fullname: \" &amp; in_param.FullName\n\
	LogMessage \"Parent: \" &amp; in_param.Parent.Name\n\
	LogMessage \"ScriptName : \" &amp; in_param.ScriptName\n\
	LogMessage \"Description: \" &amp; in_param.Description\n\
	LogMessage \"Capabilities : \" &amp; in_param.Capabilities\n\
	LogMessage \"Value : \" &amp; in_param.Value\n\
	LogMessage \"ValueType: \" &amp; in_param.ValueType\n\
	LogMessage \"Default: \" &amp; in_param.Default\n\
	if ( in_param.ValueType &lt;&gt; siString ) then \n\
		LogMessage \"Min: \" &amp; in_param.Min\n\
		LogMessage \"Max: \" &amp; in_param.Max\n\
		LogMessage \"SuggestedMin: \" &amp; in_param.SuggestedMin\n\
		LogMessage \"SuggestedMax: \" &amp; in_param.SuggestedMax\n\
	end if \n\
end sub</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a>,<a href=\"#!/url=./si_om/CustomProperty.AddParameter.html\">CustomProperty.AddParameter</a>,<a href=\"#!/url=./si_om/Parameter.html\">Parameter</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";