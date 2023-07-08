var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSIFactory.CreateParamDef2</title>\n\
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
            <h1>XSIFactory.CreateParamDef2</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/XSIFactory.html\">XSIFactory</a>.CreateParamDef2</h2>\n\
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
Note: If you need to specify capabilities, classification, or suggested minimum and maximum \n\
values, use <a href=\"#!/url=./si_om/XSIFactory.CreateParamDef.html\">XSIFactory.CreateParamDef</a> instead.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>ParamDef XSIFactory.CreateParamDef2( String in_ScriptName, siVariantType in_Type, Object in_default, Object in_Min, Object in_Max );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = XSIFactory.CreateParamDef2( ScriptName, Type, [DefaultValue], [Min], [Max] );</pre>		</td>	</tr>\n\
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
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// This example illustrates how to add parameters to a custom operator\n\
NewScene( null, false )\n\
var null1 = GetPrim(\"null\");\n\
// Create the operator\n\
var sop = XSIFactory.CreateScriptedOp( \"MySOP\", MySOP_Update.toString(), \"JScript\" );\n\
// Add the ports\n\
sop.AddOutputPort( null1.posx );\n\
// Add the parameters\n\
var param1 = sop.AddParameter( XSIFactory.CreateParamDef2(\"text\", siString, \"hello\") );\n\
var param2 = sop.AddParameter( XSIFactory.CreateParamDef2(\"bool\", siBool, true) );\n\
var param3 = sop.AddParameter( XSIFactory.CreateParamDef2(\"int\", siInt4, 10, 0, 100) );\n\
var param4 = sop.AddParameter( XSIFactory.CreateParamDef2(\"dbl\", siDouble, 0.5, 0.0, 1.0) );\n\
// List operator\'s parameters\n\
var eParams = new Enumerator( sop.parameters );\n\
for ( ; !eParams.atEnd(); eParams.moveNext() )\n\
{\n\
	var param = eParams.item();\n\
	 Application.LogMessage( param.Name + \" = \" + param.Value );\n\
}\n\
// Connect the operator\n\
sop.Connect();\n\
// Operator\'s update function\n\
function MySOP_Update( ctx, out )\n\
{\n\
	out.Value = ctx.CurrentFrame;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/CustomOperator.AddParameter.html\">CustomOperator.AddParameter</a>,\n\
<a href=\"#!/url=./si_om/ParamDef.html\">ParamDef</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";