var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSIFactory.CreateParamDef</title>\n\
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
            <h1>XSIFactory.CreateParamDef</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/XSIFactory.html\">XSIFactory</a>.CreateParamDef</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Creates a new custom parameter definition (<a href=\"#!/url=./si_om/ParamDef.html\">ParamDef</a> object).\n\
<br /><br />\n\
ParamDef objects contain the definition of a parameter from which you can create new \n\
parameters on the fly for one or more property sets or operators. For example, you may want \n\
to use a double with the same min/max range and use it on multiple property sets or you \n\
may simply want a quick way to add parameters to a runtime scripted operator via scripting. \n\
You can create New ParamDef objects from the <a href=\"#!/url=./si_om/XSIFactory.html\">XSIFactory</a> object.\n\
<br /><br />\n\
Note: For a simplified version see <a href=\"#!/url=./si_om/XSIFactory.CreateParamDef2.html\">XSIFactory.CreateParamDef2</a>.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>ParamDef XSIFactory.CreateParamDef( String in_ScriptName, siVariantType in_Type, siParamClassification in_classification, Int32 in_capabilities, String in_name, String in_description, Object in_default, Object in_Min, Object in_Max, Object in_SuggestedMin, Object in_SuggestedMax );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = XSIFactory.CreateParamDef( ScriptName, Type, [Classification], [Capabilities], [Name], [Description], [DefaultValue], [Min], [Max], [SuggestedMin], [SuggestedMax] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>The newly created <a href=\"#!/url=./si_om/ParamDef.html\">ParamDef</a> object.</p></div>\n\
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
\n\
		This argument specifies the ScriptName of a parameter \n\
		(see <a href=\"#!/url=./si_om/Parameter.ScriptName.html\">Parameter.ScriptName</a>). If the short name or long \n\
		name arguments are not specified then this name is also used as the short \n\
		name and description.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Type		</td>\n\
		<td><a href=\"#!/url=./si_om/siVariantType.html\">siVariantType</a>		</td>\n\
		<td>\n\
\n\
		Type of the custom parameter. The recommended types are: siString, siBool, \n\
		siInt4, siUByte, and siDouble. The supported types are: siString, siBool, \n\
		siDouble, siFloat, siInt4, siInt2, siUInt4, siUInt2, siByte, siUByte (see \n\
		<a href=\"#!/url=./si_om/Parameter.ValueType.html\">Parameter.ValueType</a>).\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Classification		</td>\n\
		<td><a href=\"#!/url=./si_om/siParamClassification.html\">siParamClassification</a>		</td>\n\
		<td>\n\
Classification of the custom parameter.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siClassifUnknown			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Capabilities		</td>\n\
		<td>(see <a href=\"#!/url=./files/Integer.htm\">Integer</a>) bitfield based on <a href=\"#!/url=./si_om/siCapabilities.html\">siCapabilities</a>		</td>\n\
		<td>\n\
\n\
		Capabilities of the custom parameter. If you create a custom operator parameter \n\
		that is not inspectable, it does not appear in the interface, but is still \n\
		available from scripting. If the parameter is read-only, it is greyed out \n\
		in the interface, but is also available from scripting. <br /><br />\n\
		The siPersistable flag optional and assumed to be enabled for all custom \n\
		parameters. This establishes the default capability flags for all instances of \n\
		the parameter, but these flags can be overridden on a per-instance basis via \n\
		<a href=\"#!/url=./si_om/Parameter.Capabilities.html\">Parameter.Capabilities</a>.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siPersistable+siAnimatable			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		Short, user-friendly version of the custom parameter\'s name. This is the parameter \n\
		name that appears in the Scene Explorer (unless Show Script Names is enabled). If \n\
		this argument is not specified then the ScriptName argument is visible to users as \n\
		the parameter\'s name (see <a href=\"#!/url=./si_om/SIObject.Name.html\">SIObject.Name</a> and \n\
		<a href=\"#!/url=./si_om/Parameter.ScriptName.html\">Parameter.ScriptName</a>). \n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"\"			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Description		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		Description of the custom parameter. If specified, this is a more descriptive name\n\
		that appears as the parameter label when the customer property is inspected. For \n\
		example, the long name of a parameter might be the user-friendly \"Use Light Color \n\
		as Energy\" while the name might be the more script-friendly \"use_color\" (see \n\
		<a href=\"#!/url=./si_om/Parameter.Description.html\">Parameter.Description</a>).\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"\"			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">DefaultValue		</td>\n\
		<td><a href=\"#!/url=./files/Variant.htm\">Variant</a>		</td>\n\
		<td>\n\
\n\
		Default value of the custom parameter. A default value for numerical values\n\
		(including boolean) is 0; the string default is \"\" (see <a href=\"#!/url=./si_om/Parameter.Default.html\">Parameter.Default</a>).\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Min		</td>\n\
		<td><a href=\"#!/url=./files/Variant.htm\">Variant</a>		</td>\n\
		<td>\n\
\n\
		Minimum value of the custom parameter. The types siString and siBool do not require\n\
		a Min value. For all other numerical types the default is the minimum value possible \n\
		for the type. For example, all unsigned values have a minimum value of 0 (see \n\
		<a href=\"#!/url=./si_om/Parameter.Min.html\">Parameter.Min</a>).\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Max		</td>\n\
		<td><a href=\"#!/url=./files/Variant.htm\">Variant</a>		</td>\n\
		<td>\n\
\n\
		Maximum value of the custom parameter. The types siString and siBool do not require \n\
		a Max value. For all other numerical types the default is the minimum value possible \n\
		for the type. For example, the maximum value for siUByte is 255 (see \n\
		<a href=\"#!/url=./si_om/Parameter.Max.html\">Parameter.Max</a>)  \n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SuggestedMin		</td>\n\
		<td><a href=\"#!/url=./files/Variant.htm\">Variant</a>		</td>\n\
		<td>\n\
\n\
		Suggested minimum value of the custom parameter. The types siString and siBool do not \n\
		require a SuggestedMin value. The default suggested minimum value for numerical values \n\
		is 0. The suggested minimum should be equal to or larger than the Min. This value \n\
		is used to configure the range of UI controls (see <a href=\"#!/url=./si_om/Parameter.SuggestedMin.html\">Parameter.SuggestedMin</a>).\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SuggestedMax		</td>\n\
		<td><a href=\"#!/url=./files/Variant.htm\">Variant</a>		</td>\n\
		<td>\n\
\n\
		Suggested maximum value of the custom parameter. The types siString and siBool do not \n\
		require a SuggestedMax value. The default suggested maximum value for numerical values \n\
		is 100. The suggested maximum should be equal to or smaller than the Max. This value \n\
		is used to configure the range of UI controls (see <a href=\"#!/url=./si_om/Parameter.SuggestedMax.html\">Parameter.SuggestedMax</a>).\n\
			</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example illustrates how to add parameters to a custom operator\n\
*/\n\
var null1 = GetPrim( \"null\" );\n\
var sop = XSIFactory.CreateScriptedOp( \"MySOP\", MySOP_Update.toString(), \"JScript\" );\n\
sop.AddOutputPort( null1.posx );\n\
// String \n\
var paramdef1 = XSIFactory.CreateParamDef( \"text\", siString, 0, siAnimatable, \"Text\", \"a text parameter\", \"the text...\");\n\
var param1 = sop.AddParameter( paramdef1 );\n\
// Boolean\n\
var paramdef2 = XSIFactory.CreateParamDef(\"bool\", siBool, 0, siAnimatable, \"Boolean\", \"a boolean parameter\", true);\n\
var param2 = sop.AddParameter( paramdef2 );\n\
// Integer\n\
var paramdef3 = XSIFactory.CreateParamDef(\"int\", siInt4, 0, siAnimatable, \"Integer\", \"a integer parameter\", -1, -5, 5);\n\
var param3 = sop.AddParameter( paramdef3 );\n\
// Double \n\
var paramdef4 = XSIFactory.CreateParamDef(\"dbl\", siDouble, 0, siAnimatable &amp;&amp; siReadOnly, \"Double\", \"a double parameter\", 0.69, 0.1, 10.9);\n\
var param4 = sop.AddParameter( paramdef4 );\n\
// Connect operator\n\
sop.Connect();\n\
// List operator\'s parameters\n\
var eParams = new Enumerator( sop.Parameters );\n\
for ( ; !eParams.atEnd(); eParams.moveNext() )\n\
{\n\
	var param = eParams.item();\n\
	 Application.LogMessage( param.Name + \" = \" + param.Value );\n\
}\n\
function MySOP_Update( ctx, out )\n\
{\n\
	out.Value = ctx.CurrentFrame;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/XSIFactory.CreateParamDef2.html\">XSIFactory.CreateParamDef2</a> <a href=\"#!/url=./si_om/CustomOperator.AddParameter.html\">CustomOperator.AddParameter</a> <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";