var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SIAddCustomParameter</title>\n\
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
            <h1>SIAddCustomParameter</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SIAddCustomParameter</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Adds a custom parameter to a custom parameter set.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SIAddCustomParameter( [InputObj], [ScriptName], [VarType], DefaultValue, [MinValue], [MaxValue], [Classification], [Capabilities], [SuggMin], [SuggMax], [ParamName], [Description] );</pre>		</td>	</tr>\n\
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
<a href=\"#!/url=./files/listexpr.htm\">List</a> of custom parameter sets 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ScriptName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		Script name of the custom parameter to be added.  This is normally a short name, like \"rotx\".  \n\
		A script name cannot have spaces in it.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"ParamName\"			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">VarType		</td>\n\
		<td><a href=\"#!/url=./si_om/siVariantType.html\">siVariantType</a>		</td>\n\
		<td>\n\
 Type of the parameter 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siDouble			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">DefaultValue		</td>\n\
		<td><a href=\"#!/url=./files/Variant.htm\">Variant</a>		</td>\n\
		<td>\n\
 Default parameter value 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">MinValue		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 minimum value of the parameter 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0.0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">MaxValue		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 maximum value of the parameter 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
1.0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Classification		</td>\n\
		<td><a href=\"#!/url=./si_om/siParamClassification.html\">siParamClassification</a>		</td>\n\
		<td>\n\
\n\
		Determines the classification of the parameter (gives Softimage some hint about the purpose of \n\
		the Parameter--see the <a href=\"#!/url=./si_om/siParamClassification.html\">siParamClassification</a> enum for more details)\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siClassifUnknown			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Capabilities		</td>\n\
		<td><a href=\"#!/url=./si_om/siCapabilities.html\">siCapabilities</a>		</td>\n\
		<td>\n\
Determines the capabilities of the parameter (see the <a href=\"#!/url=./si_om/siCapabilities.html\">siCapabilities</a> enum for more details)			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
5 (siAnimatable + siPersistable)			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SuggMin		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Suggested minimum value of the parameter (for UI controls) 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
MinValue			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SuggMax		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Suggested maximum value of the parameter (for UI controls) 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
MaxValue			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ParamName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
A name for the parameter that can be more descriptive than \n\
			the script name.  For example \"Rotation X\"\n\
			instead of \"rotx\".\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Description		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Description of the parameter		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'Example showing you a custom pset can be used, in conjunction with the\n\
\'InspectObj command to collect information from a user\n\
dim oCustomProperty\n\
dim nbJoints, useCns\n\
\'Create a temporary custom property (it is not part of the scene)\n\
Set oPreset = CreatePreset( \"CustomProperty\", \"Properties\" )\n\
Set oCustomProperty = CreateObjectFromPreset(oPreset, \"Chain_From_Curve\" )\n\
\'Add parameters to the custom property\n\
SIAddCustomParameter oCustomProperty , _\n\
	\"nbJoints\", siInt2, 10, 1, 1000, 8, 16, 1, 100, \"Bones\", \"Number of Bones\"\n\
SIAddCustomParameter oCustomProperty , _\n\
	\"useCns\", siBool, FALSE, , , 8, 16, , , \"Constrain\", \"Constrain Chain to Curve\"\n\
\' Launch the ppg in modal mode, wait for Ok or Cancel to be pressed\n\
On Error Resume Next\n\
InspectObj  oCustomProperty ,,,4\n\
\' If the user Clicked Ok, get the values entered in the ppg\n\
if Err.Number = 0 then\n\
	\'Get the dialog values\n\
	nbJoints = GetValue( oCustomProperty &amp; \".nbJoints\" )\n\
	useCns = GetValue( oCustomProperty &amp; \".useCns\" )\n\
	\'At this point you could launch a custom command\n\
	\'using nbJoints and useCns as \n\
else\n\
	\' Put your cancel code here\n\
end if</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'Example demonstrating how the arguments to SIAddCustomParameter\n\
\'are exposed in the Object Model\n\
dim oCustomProperties, oCustomProperty, oParam\n\
SIAddProp \"Custom_parameter_list\", ActiveSceneRoot , , \"DemoProp\", oCustomProperties\n\
\'We only created a single custom property because we only \n\
\'passed a single object (ActiveSceneRoot) to SIAddProp\n\
set oCustomProperty = oCustomProperties.Item(0)\n\
SIAddCustomParameter oCustomProperty , _\n\
	\"nbJoints\", siInt4, 10, 1, 1000, 8, 16, 1, 100, \"Bones\"\n\
set oParam = oCustomProperty.Parameters( \"nbJoints\" )\n\
logmessage \"Parameter Name: \" &amp; oParam.Name\n\
logmessage \"Parameter Script Name: \" &amp; oParam.ScriptName\n\
logmessage \"Parameter ValueType: \" &amp; oParam.ValueType\n\
logmessage \"Parameter Default: \" &amp; oParam.Default\n\
logmessage \"Parameter Min/Max: \" &amp; oParam.Min &amp; \"/\" &amp; oParam.Max\n\
logmessage \"Parameter UI Min/Max: \" &amp; oParam.SuggestedMin &amp; \"/\" &amp; oParam.SuggestedMax\n\
\'Output of running this script:\n\
\'INFO : \"Parameter Name: Bones\"\n\
\'INFO : \"Parameter Script Name: nbJoints\"\n\
\'INFO : \"Parameter ValueType: 3\"\n\
\'INFO : \"Parameter Default: 10\"\n\
\'INFO : \"Parameter Min/Max: 1/1000\"\n\
\'INFO : \"Parameter UI Min/Max: 1/100\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/SIAddCustomParam.html\">SIAddCustomParam</a> <a href=\"#!/url=./si_cmds/EditParameterDefinition.html\">EditParameterDefinition</a> <a href=\"#!/url=./si_cmds/RemoveCustomParam.html\">RemoveCustomParam</a> <a href=\"#!/url=./si_cmds/AddProxyParam.html\">AddProxyParam</a> <a href=\"#!/url=./si_cmds/RemoveProxyParam.html\">RemoveProxyParam</a> <a href=\"#!/url=./si_om/CustomProperty.AddParameter.html\">CustomProperty.AddParameter</a> <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";