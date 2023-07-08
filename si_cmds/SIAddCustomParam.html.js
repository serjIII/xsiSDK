var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SIAddCustomParam</title>\n\
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
            <h1>SIAddCustomParam</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SIAddCustomParam</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>Adds a custom parameter to custom parameter list.  This command is provided for backward compatibility,\n\
it is recommended that you use <a href=\"#!/url=./si_cmds/SIAddCustomParameter.html\">SIAddCustomParameter</a> instead.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SIAddCustomParam( [InputObj], [ScriptName], [VarType], DefaultValue, MinValue, MaxValue, Classification, Capabilities, [SuggMin], [SuggMax], [ParamName], [Description] );</pre>		</td>	</tr>\n\
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
<a href=\"#!/url=./files/listexpr.htm\">List</a> of custom parameter list properties. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current Selection			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ScriptName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
			Script name of the custom parameter to be added.  This is normally a\n\
			short name, like \"rotx\".  A script name cannot have spaces in it.\n\
			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"ParamName\"			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">VarType		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 Type of the custom parameter 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
5			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">2					</td>\n\
					<td>2 bytes signed integer number (-32768..32767)					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">3					</td>\n\
					<td>4 bytes signed integer number (-2147483647..2147483646)					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">4					</td>\n\
					<td>single precision real number (-3.402823466e+38F..3.402823466e+38F)					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">5					</td>\n\
					<td>double precision real number (-1.7976931348623158e+308..1.7976931348623158e+308)					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">8					</td>\n\
					<td>text					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">11					</td>\n\
					<td>boolean					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">16					</td>\n\
					<td>1 byte signed integer (-128..127)					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">17					</td>\n\
					<td>1 byte unsigned integer (0..255)					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">18					</td>\n\
					<td>2 bytes unsigned integer number (0..65535)					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">19					</td>\n\
					<td>4 bytes unsigned integer number (0..4294967295)					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">22					</td>\n\
					<td>signed machine integer					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">23					</td>\n\
					<td>unsigned machine integer					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">DefaultValue		</td>\n\
		<td><a href=\"#!/url=./files/Variant.htm\">Variant</a>		</td>\n\
		<td>\n\
 Default value of the parameter 		</td>\n\
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
 Classification 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siClassifUnknown			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Capabilities		</td>\n\
		<td><a href=\"#!/url=./si_om/siCapabilities.html\">siCapabilities</a>		</td>\n\
		<td>\n\
 Capabilities of the parameter 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siAnimatable+siPersistable for numeric parameters, siPersistable for string parameters			</p>\n\
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
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
The ScriptName argument is reused			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Description		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 A longer, descriptive version of the parameter name. This appears on the property page when the object is inspected.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">dim n\n\
set n = GetPrim( \"Null\" )\n\
AddProp \"Custom_parameter_list\", , 0, \"Custom Parameters\" \n\
SIAddCustomParam n &amp; \".Custom_Parameters\",\"Happiness\",5,0, -10, 10 \n\
RemoveCustomParam n &amp; \".Custom_Parameters.Happiness\"\n\
SIAddCustomParam n &amp; \".Custom_Parameters\",\"StringParam\",8,\"Defaultstr\"\n\
DeleteObj n &amp; \".Custom_Parameters\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/SIAddCustomParameter.html\">SIAddCustomParameter</a> <a href=\"#!/url=./si_cmds/EditParameterDefinition.html\">EditParameterDefinition</a> <a href=\"#!/url=./si_cmds/RemoveCustomParam.html\">RemoveCustomParam</a> <a href=\"#!/url=./si_om/CustomProperty.AddParameter3.html\">CustomProperty.AddParameter3</a> <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";