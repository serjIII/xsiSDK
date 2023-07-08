var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>EditParameterDefinition</title>\n\
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
</style><link rel=\"stylesheet\" href=\"si_cmds/css/en.css\" type=\"text/css\" /><script>$(document).ready(function() { yepnope.injectJs(\"./si_cmds/lib/utils.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>EditParameterDefinition</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">EditParameterDefinition</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.5</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Edits the definition of a custom parameter. Skipped arguments \n\
are left unchanged.<br /><br />\n\
For proxy parameters it is possible to adjust the parameter \n\
name and suggested range using this command, which leaves the \n\
master parameter unaffected.<br /><br />\n\
It is also possible to adjust proxy parameters capabilities,\n\
which lead to also update the master parameters capabilities.\n\
However the Min and Max attributes \n\
of a proxy parameter should be left the same as the master \n\
parameter\'s Min and Max values.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>EditParameterDefinition( [InputObj], [ParamName], [VarType], [MinValue], [MaxValue], [SuggMin], [SuggMax], [ScriptName], [Description], [Capabilities] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">InputObj		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of custom parameters. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Marked parameters			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ParamName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Name of the custom parameter. This appears on the property page when the object is inspected and in the scene explorer (unless \"Show script names\" is enabled).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">VarType		</td>\n\
		<td><a href=\"#!/url=./si_om/siVariantType.html\">siVariantType</a>		</td>\n\
		<td>\n\
(Obsolete) It is not necessary to specify this argument, it is ignored.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">MinValue		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
Minimum value of the parameter 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">MaxValue		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
Maximum value of the parameter 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SuggMin		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Suggested minimum value of the parameter (for UI controls) 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SuggMax		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Suggested maximum value of the parameter (for UI controls) 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ScriptName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Scripting version of the parameter name.  There should not be any space characters in the string.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Description		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 A longer, descriptive version of the parameter name.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Capabilities		</td>\n\
		<td><a href=\"#!/url=./si_om/siCapabilities.html\">siCapabilities</a>		</td>\n\
		<td>\n\
Determines the capabilities of the parameter (see the <a href=\"#!/url=./si_om/siCapabilities.html\">siCapabilities</a> enum for more details)		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example creates a new custom property set and a new\n\
\' parameter on a dummy null and then changes its definition.\n\
\' The parameter information is logged to the Script Editor\n\
\' History Pane so you can see what has changed.\n\
\'\n\
\' Create a null to hold the new custom property set\n\
set oDummy = GetPrim( \"Null\" )\n\
\' Add custom property set called Emotions to the dummy\n\
AddProp \"Custom_parameter_list\", , , \"Emotions\"\n\
\' Add custom parameter Happiness to the Emotions property set\n\
SIAddCustomParameter \"null.Emotions\", \"Happiness\", _\n\
			siDouble, 0.000, 0.000, 1.000, , siAnimatable, 0.000, 1.000, , \"The happiness param\"\n\
\' What does it look like before editing the definition?\n\
printParamInfo oDummy.Properties( \"Emotions\" ).Parameters(0)\n\
\' Update the minimum and maximum values of Happiness\n\
EditParameterDefinition oDummy &amp; \".Emotions.Happiness\", \"Sadness Param\", , _\n\
			-100, 100, -100, 100, \"Sadness\", \"The sadness param\", _\n\
			siAnimatable + siKeyable\n\
\' What does it look like afterwards?\n\
printParamInfo oDummy.Properties( \"Emotions\" ).Parameters(0)\n\
\' Convenience function--saves time and typing\n\
function printParamInfo( in_parameter )\n\
	LogMessage in_parameter &amp; \" information:\"\n\
	LogMessage \"-------------------------------------\"\n\
	LogMessage vbTab &amp; \"Default value: \" &amp; vbTab &amp; vbTab &amp; vbTab &amp; in_parameter.Default\n\
	LogMessage vbTab &amp; \"Description: \" &amp; vbTab &amp; vbTab &amp; vbTab &amp; in_parameter.Description\n\
	LogMessage vbTab &amp; \"Is \" &amp; in_parameter.ScriptName &amp; \" marked?: \" &amp; vbTab &amp; vbTab &amp; in_parameter.Marked\n\
	LogMessage vbTab &amp; \"SuggestedMin value: \" &amp; vbTab &amp; vbTab &amp; in_parameter.SuggestedMin\n\
	LogMessage vbTab &amp; \"SuggestedMax value: \" &amp; vbTab &amp; vbTab &amp; in_parameter.SuggestedMax\n\
	LogMessage vbTab &amp; \"Actual Min value: \" &amp; vbTab &amp; vbTab &amp; in_parameter.Min\n\
	LogMessage vbTab &amp; \"Actual Max value: \" &amp; vbTab &amp; vbTab &amp; in_parameter.Max\n\
	LogMessage vbTab &amp; \"ScriptName: \" &amp; vbTab &amp; vbTab &amp; vbTab &amp; in_parameter.ScriptName\n\
	LogMessage vbTab &amp; \"Name: \" &amp; vbTab &amp; vbTab &amp; vbTab &amp; vbTab &amp; in_parameter.Name\n\
	LogMessage vbTab &amp; \"Capabilities: \" &amp; vbTab &amp; vbTab &amp; vbTab &amp; in_parameter.Capabilities\n\
	LogMessage vbTab &amp; \"Is \" &amp; in_parameter.ScriptName &amp; \" animatable?: \" &amp; vbTab &amp; in_parameter.Animatable\n\
	LogMessage vbTab &amp; \"Is \" &amp; in_parameter.ScriptName &amp; \" keyable?: \" &amp; vbTab &amp; vbTab &amp; in_parameter.Keyable\n\
	LogMessage vbTab &amp; \"Is \" &amp; in_parameter.ScriptName &amp; \" read-only?:  \" &amp; vbTab &amp; in_parameter.ReadOnly\n\
	LogMessage vbTab &amp; \"Value Type: \" &amp; vbTab &amp; vbTab &amp; vbTab &amp; in_parameter.ValueType &amp; \" (\" &amp; TypeName( in_parameter ) &amp; \")\"\n\
	LogMessage vbTab &amp; \"Actual Value: \" &amp; vbTab &amp; vbTab &amp; vbTab &amp; in_parameter.Value\n\
end function \n\
\n\
\' Output of above script:\n\
\' ...before editing the parameter definition:\n\
\'INFO : null.Emotions.Happiness information:\"\n\
\'INFO : -------------------------------------\"\n\
\'INFO : 	Default value: 				0\n\
\'INFO : 	Description: 				The happiness param\n\
\'INFO : 	Is Happiness marked?: 		False\n\
\'INFO : 	SuggestedMin value: 		0\n\
\'INFO : 	SuggestedMax value: 		1\n\
\'INFO : 	Actual Min value: 			0\n\
\'INFO : 	Actual Max value: 			1\n\
\'INFO : 	ScriptName: 				Happiness\n\
\'INFO : 	Name: 						Happiness\n\
\'INFO : 	Capabilities: 				5\n\
\'INFO : 	Is Happiness animatable?: 	True\n\
\'INFO : 	Is Happiness keyable?: 		False\n\
\'INFO : 	Is Happiness read-only?: 	False\n\
\'INFO : 	Value Type: 				5 (Parameter)\n\
\'INFO : 	Actual Value: 				0\n\
\'\n\
\' ...afterwards:\n\
\'INFO : null.Emotions.Sadness information:\n\
\'INFO : -------------------------------------\n\
\'INFO : 	Default value: 				0\n\
\'INFO : 	Description: 				The sadness param\n\
\'INFO : 	Is Sadness marked?: 		False\n\
\'INFO : 	SuggestedMin value: 		-100\n\
\'INFO : 	SuggestedMax value: 		100\n\
\'INFO : 	Actual Min value: 			-100\n\
\'INFO : 	Actual Max value: 			100\n\
\'INFO : 	ScriptName: 				Sadness\n\
\'INFO : 	Name: 						Sadness Param\n\
\'INFO : 	Capabilities: 				2053\n\
\'INFO : 	Is Sadness animatable?:		True\n\
\'INFO : 	Is Sadness keyable?: 		True\n\
\'INFO : 	Is Sadness read-only?: 		False\n\
\'INFO : 	Value Type: 				5 (Parameter)\n\
\'INFO : 	Actual Value: 				0</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/SIAddCustomParameter.html\">SIAddCustomParameter</a> <a href=\"#!/url=./si_cmds/RemoveCustomParam.html\">RemoveCustomParam</a> <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";